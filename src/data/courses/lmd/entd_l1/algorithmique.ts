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
// ALGORITHMIQUE — ENTD LICENCE 1 (MASTERCLASS)
// 5 chapitres • 15 mini-leçons • 90 étapes • 9 schémas graphiques
// ============================================================================

export const ALGORITHMIQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Fondements, variables, instructions élémentaires et expressions
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch1',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Algorithmique',
    title: 'Chapitre 1 — Fondements, variables, instructions élémentaires et expressions',
    summary:
      'Formalisation algorithmique, architecture Déclarations/Instructions, variables, constantes, types de données, affectation/lecture/écriture, trace d’exécution, expressions numériques, booléennes (lois de De Morgan) et chaînes de caractères.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch1_p1',
        order: 1,
        title: 'Algorithme, programme, structure, variables, constantes et types de base',
        summary:
          'Distinguer algorithme et programme, structurer proprement les déclarations et respecter la compatibilité stricte des types de base.',
        conceptExplanation:
          'Un **algorithme** est la description claire, complète, finie et sans ambiguïté d’un enchaînement d’actions destinées à résoudre un problème. Traduit dans un langage exécutable par un ordinateur (Python, C, Java, TypeScript), il devient un **programme**.\n\n' +
          'Tout algorithme s’organise en deux blocs distincts enrichis de commentaires : la partie **Déclarations** (constantes et variables, accompagnées de leur type et de leur rôle) et la partie **Instructions** (entre `DEBUT` et `FIN`, exécutée séquentiellement).\n\n' +
          'Une **variable** désigne une zone mémoire repérée par un identificateur (commençant par une lettre, composé de lettres, chiffres ou `_`) dont la valeur évolue au fil du temps. Une **constante** associe un identificateur en majuscules à une valeur fixe. Les cinq types fondamentaux sont `ENTIER` ($\\mathbb{Z}$), `REEL` ($\\mathbb{R}$), `CARACTERE` (délimité par `’`), `CHAINE` (délimitée par `"`) et `BOOLEEN` (`VRAI` ou `FAUX`).',
        formulas: [
          {
            name: 'Compatibilité numérique d’affectation',
            formula: '\\text{ENTIER} \\hookrightarrow \\text{REEL} \\quad \\text{mais} \\quad \\text{REEL} \\not\\hookrightarrow \\text{ENTIER}',
            note: 'Un entier est accepté dans une variable réelle, mais un réel provoque une incompatibilité de type dans une variable entière.',
          },
          {
            name: 'Intérêt annuel simple dans un plan d’épargne',
            formula: '\\text{interet} \\leftarrow \\frac{\\text{somme} \\times \\text{TAUX}}{100}',
            note: 'TAUX est une constante réelle (ex. 4,5 %) ; somme et interet sont des variables réelles.',
          },
        ],
        keyRule:
          'Ne jamais confondre un identificateur de variable (ex. `nom`, sans délimiteur) avec une valeur littérale caractère ou chaîne (`’A’`, `"nom"`), et toujours vérifier la compatibilité de type avant chaque affectation.',
        workedExample: {
          title: 'Conception des déclarations pour un simulateur d’épargne FCFA',
          statement:
            'Une coopérative d’épargne à Abidjan propose un livret rémunéré à un taux fixe annuel de $4{,}5\\%$. On souhaite concevoir les déclarations d’un algorithme qui calcule le nombre d’années nécessaires pour atteindre un objectif financier avec un versement annuel constant.',
          methodSteps: [
            'Identifier les valeurs fixes : le taux annuel ne varie pas pendant l’exécution → `CONSTANTES TAUX = 4.5`.',
            'Identifier les grandeurs monétaires pouvant comporter des décimales : `depot, somme, sommeFinale, interet : REEL`.',
            'Identifier le compteur d’années : nombre entier naturel → `nbAn : ENTIER`.',
            'Nommer les identificateurs sans accents ni espaces (convention camelCase pour les variables, MAJUSCULES pour les constantes) et documenter chaque rôle en commentaire.',
          ],
          conclusion:
            'La partie Déclarations isole proprement `TAUX` (constante) et cinq variables typées (`4 REEL`, `1 ENTIER`), garantissant zéro erreur de type lors du traitement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Algorithme, formalisation et programme',
            paragraphText:
              'Avant d’écrire la moindre ligne de code, l’informaticien résout le problème par la pensée en rédigeant un algorithme indépendant de tout langage machine.\n' +
              '• **Algorithme** : description claire, complète, finie et sans ambiguïté d’un enchaînement d’actions à exécuter pour résoudre un problème donné.\n' +
              '• **Formalisation** : transformation d’un énoncé en langue naturelle (« quel nombre ajouter à 7 pour obtenir 15 ? ») en modèle rigoureux ($7 + x = 15$).\n' +
              '• **Programme** : traduction d’un algorithme dans un langage de programmation (Python, C, Java) directement interprétable ou compilable par l’ordinateur.\n' +
              'Exemple : un algorithme de calcul de frais de transfert Mobile Money en zone UEMOA reste identique, qu’il soit ensuite codé en Java sur serveur bancaire ou en TypeScript sur application mobile.',
            keyRule:
              'Un algorithme exprime la logique universelle de résolution ; le programme en est une implémentation technique dans un langage précis.',
            konanTip:
              'À l’examen, retiens les trois adjectifs qui qualifient un bon algorithme : clair, complet et sans ambiguïté (et produisant un résultat en un nombre fini d’étapes).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quelle affirmation distingue rigoureusement un algorithme d’un programme ?',
              options: [
                'Un algorithme ne manipule jamais de variables numériques, contrairement à un programme.',
                'Un algorithme est une description formalisée et indépendante du langage machine, tandis qu’un programme est sa traduction dans un langage exécutable par l’ordinateur.',
                'Un programme est toujours rédigé en français courant et un algorithme directement en binaire.',
                'Un algorithme ne peut contenir que des instructions d’affichage sans calcul.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’algorithme formalise la démarche de résolution indépendamment de toute syntaxe machine ; le programme traduit cet algorithme dans un langage exécutable par un ordinateur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Architecture',
            stepTheme: 'blue',
            stepTitle: 'Les deux parties constitutives d’un algorithme',
            paragraphText:
              'Tout algorithme respecte une architecture normalisée comparable à un protocole de laboratoire : on prépare d’abord le matériel, puis on exécute les manipulations.\n' +
              '• **Partie Déclarations** : recense toutes les constantes et toutes les variables avec leur identificateur, leur type et un commentaire précisant leur rôle.\n' +
              '• **Partie Instructions** : partie active délimitée par les mots-clés `DEBUT` et `FIN`, dont les actions s’exécutent séquentiellement de haut en bas.\n' +
              '• **Commentaires** (`/* ... */`) : ignorés lors de l’exécution, mais indispensables pour documenter l’intention du concepteur et faciliter la maintenance.\n' +
              'Exemple : dans un algorithme de facturation CIE, on déclare `prixKwh` et `conso` dans les déclarations avant de calculer `montant ← conso * prixKwh` entre `DEBUT` et `FIN`.',
            keyRule:
              'Aucune variable ne doit apparaître dans la partie Instructions sans avoir été préalablement déclarée dans la partie Déclarations.',
            konanTip:
              'Ne confonds pas l’en-tête (`ALGORITHME Nom`) avec une instruction exécutable : l’exécution réelle commence toujours juste après `DEBUT`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Quelles sont les deux grandes parties structurelles qui composent tout algorithme ?',
              options: [
                'Les entrées clavier et les sorties écran.',
                'Les boucles itératives et les fonctions prédéfinies.',
                'La partie Déclarations (constantes et variables) et la partie Instructions (entre DEBUT et FIN).',
                'La compilation binaire et le déploiement réseau.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un algorithme se structure toujours en deux parties principales : les Déclarations (constantes, variables et leurs types) suivies des Instructions (partie active comprise entre DEBUT et FIN).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Mémoire',
            stepTheme: 'blue',
            stepTitle: 'Variables, constantes et règles d’identificateurs',
            paragraphText:
              'Pour manipuler des données qui évoluent ou restent fixes durant un calcul, l’algorithme nomme des emplacements mémoire précis.\n' +
              '• **Variable** : zone mémoire (physique en machine, virtuelle en algorithme) repérée par un identificateur, dont la valeur peut être modifiée au cours de l’exécution.\n' +
              '• **Constante** : identificateur associé à une valeur littérale figée tout au long de l’algorithme (convention en majuscules avec tiret bas, ex. `TAUX_TVA = 18`).\n' +
              '• **Règles de nommage** : un identificateur commence obligatoirement par une lettre et ne contient que des lettres, des chiffres et le tiret bas `_` (jamais d’espace, ni de chiffre en tête, ni de mot réservé comme `DEBUT` ou `SI`).\n' +
              'Exemple : `sommeFinale` et `solde_2026` sont valides, tandis que `2emeNote`, `prix unitaire` et `taux%` sont illégaux.',
            keyRule:
              'Un identificateur valide débute par une lettre et n’emploie que lettres, chiffres et `_` ; par convention, les variables s’écrivent en camelCase (`nbArticles`) et les constantes en MAJUSCULES (`TAUX_ANNUEL`).',
            konanTip:
              'Piège classique : choisir un nom comme `a` ou `x1` est syntaxiquement valide mais pédagogiquement risqué ; préfère des noms explicites (`montantHT`, `nbClients`) qui évitent les erreurs de logique.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Parmi les identificateurs suivants, lequel est syntaxiquement VALIDE pour une variable ?',
              options: [
                '3eme_trimestre',
                'montant total',
                'soldeCompte_1',
                'prix-unitaire',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`soldeCompte_1` commence par une lettre et n’utilise que lettres, chiffres et tiret bas `_`. `3eme_trimestre` commence par un chiffre, `montant total` contient un espace, et `prix-unitaire` contient un signe moins `-` (opérateur de soustraction).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Typage',
            stepTheme: 'violet',
            stepTitle: 'Les cinq types fondamentaux et leur représentation',
            paragraphText:
              'Déclarer le type d’une variable impose une double contrainte : quelles valeurs sont autorisées et quelles opérations peuvent lui être appliquées.\n' +
              '• **ENTIER** : élément de $\\mathbb{Z}$ en algorithmique (sous-ensemble borné de $\\mathbb{Z}$ en machine), ex. `-12`, `0`, `2500`.\n' +
              '• **REEL** : élément de $\\mathbb{R}$ en algorithmique (sous-ensemble de $\\mathbb{Q}$ en virgule flottante en machine), ex. `4.5`, `-0.08`, `15.0`.\n' +
              '• **CARACTERE** : un unique symbole (lettre, chiffre ou ponctuation) encadré par des apostrophes, ex. `’A’`, `’5’`, `’@’`.\n' +
              '• **CHAINE** : suite finie de caractères encadrée par des guillemets, ex. `"Abidjan"`, `"225"`.\n' +
              '• **BOOLEEN** : prend uniquement l’une des deux valeurs logiques `VRAI` ou `FAUX`.\n' +
              'Exemple : pour une fiche client télécom, `age` est `ENTIER`, `soldeDataGo` est `REEL`, `codeForfait` est `CARACTERE`, `numeroTel` est `CHAINE` (pour conserver le zéro initial) et `estActif` est `BOOLEEN`.',
            formula: {
              name: 'Typage mémoire en machine',
              formula: '\\text{ENTIER} \\subset \\mathbb{Z}, \\quad \\text{REEL} \\subset \\mathbb{Q} \\subset \\mathbb{R}, \\quad \\text{BOOLEEN} = \\{\\text{VRAI}, \\text{FAUX}\\}',
              note: 'Un numéro de téléphone ou un code postal se stocke en CHAINE pour ne pas perdre les zéros initiaux ni subir de calculs arithmétiques.',
            },
            visualSchema: {
              type: 'custom_svg',
              title: 'Panorama des 5 types de base et compatibilité d’affectation',
              caption: 'Synthèse des valeurs littérales, délimiteurs et règles d’affectation entre types.',
              tableData: {
                headers: ['Type', 'Domaine / Rôle', 'Délimiteur', 'Exemples valides', 'Compatible vers'],
                rows: [
                  ['ENTIER', 'Nombres entiers (ℤ)', 'Aucun', '-5, 0, 42, 2026', 'ENTIER, REEL'],
                  ['REEL', 'Nombres décimaux (ℝ)', 'Aucun (point .)', '3.14, -0.5, 4.0', 'REEL uniquement'],
                  ['CARACTERE', '1 seul symbole', 'Apostrophe ’ ’', '’a’, ’Z’, ’7’, ’+’', 'CARACTERE, CHAINE'],
                  ['CHAINE', 'Suite de caractères', 'Guillemets " "', '"Abidjan", "51", ""', 'CHAINE uniquement'],
                  ['BOOLEEN', 'Valeur logique', 'Aucun (mots-clés)', 'VRAI, FAUX', 'BOOLEEN uniquement'],
                ],
              },
            },
            keyRule:
              'En machine, un type réserve une taille mémoire adaptée et interdit tout mélange illicite entre nombres, textes et booléens.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Quel type est le plus adapté pour mémoriser un numéro de téléphone ivoirien à 10 chiffres tel que `0708123456` sans perdre le zéro initial ?',
              options: [
                'ENTIER',
                'REEL',
                'CHAINE',
                'CARACTERE',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un `ENTIER` supprimerait le zéro initial (`708123456`), un `REEL` introduirait des imprécisions d’arrondi, et un `CARACTERE` ne stocke qu’un seul symbole. Le type `CHAINE` (`"0708123456"`) conserve exactement tous les chiffres.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'orange',
            stepTitle: 'Compatibilité des types et délimiteurs de littéraux',
            paragraphText:
              'Deux erreurs provoquent immédiatement l’échec d’un algorithme lors de la traduction en programme : confondre un identificateur avec un texte, et forcer un type incompatible dans une variable.\n' +
              '• **Identificateur vs littéral** : `nom` désigne la variable mémoire (qui peut contenir `"Kouadio"`), alors que `"nom"` désigne la chaîne littérale formée des trois lettres n, o, m.\n' +
              '• **Nombre vs chiffre-caractère** : `5` est un entier utilisable en calcul (`5 + 2 = 7`), tandis que `’5’` est un caractère et `"5"` est une chaîne ; on ne peut pas ranger `’5’` dans une variable `ENTIER`.\n' +
              '• **Asymétrie ENTIER / REEL** : affecter `5` dans `unReel` est autorisé (`5.0`), mais affecter `5.5` dans `unEntier` est interdit.\n' +
              'Exemple : si `unEntier : ENTIER`, `unReel : REEL` et `unCar : CARACTERE`, alors `unReel ← 5` est valide, mais `unEntier ← 5.5` et `unEntier ← ’5’` sont invalides.',
            formula: {
              name: 'Distinction sémantique fondamentale',
              formula: '5 \\in \\text{ENTIER} \\neq ’5’ \\in \\text{CARACTERE} \\neq \\text{"5"} \\in \\text{CHAINE}',
              note: 'Trois écritures visuellement proches mais de types strictement incompatibles.',
            },
            keyRule:
              'Un entier peut toujours être rangé dans une variable réelle, jamais l’inverse ; un chiffre encadré par des apostrophes ou guillemets n’est plus un nombre.',
            konanTip:
              'De même, `VRAI` et `FAUX` sont des valeurs booléennes sans guillemets : écrire `"VRAI"` crée une chaîne de 4 caractères, pas un booléen !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Soient `e : ENTIER`, `r : REEL` et `c : CARACTERE`. Quelle affectation est STRICTEMENT VALIDE ?',
              options: [
                'e ← 5.5',
                'e ← ’5’',
                'r ← 5',
                'c ← 5',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un entier (`5`) est compatible avec une variable de type `REEL` (`r ← 5` est valide). En revanche, `5.5` (réel) et `’5’` (caractère) ne rentrent pas dans un `ENTIER`, et l’entier `5` ne rentre pas dans un `CARACTERE`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Modéliser les déclarations d’un problème concret',
            paragraphText:
              'Face à un énoncé de gestion, de finance ou d’économie numérique, la réussite de l’algorithme dépend d’une méthode disciplinée de recensement des données.\n' +
              '• **Étape 1 — Données fixes** : repérer les barèmes, seuils ou taux invariables → les placer dans `CONSTANTES` (ex. `TVA = 0.18`).\n' +
              '• **Étape 2 — Entrées utilisateur** : identifier ce qui sera saisi au clavier (`LIRE`) et choisir le type le plus fidèle.\n' +
              '• **Étape 3 — Variables intermédiaires et sorties** : prévoir les compteurs (`ENTIER`), accumulateurs (`REEL`) et drapeaux de test (`BOOLEEN`).\n' +
              'Exemple : pour calculer le salaire net d’un développeur junior avec prime de transport fixe de `30 000 FCFA` et retenue sociale de `6,3%`, on déclare `PRIME_TRANS = 30000`, `TAUX_CNPS = 0.063`, puis `salaireBrut, retenue, salaireNet : REEL`.',
            keyRule:
              'Toujours séparer mentalement Constantes, Entrées, Variables de travail et Sorties avant d’écrire la première instruction après `DEBUT`.',
            konanTip:
              'Vérifie systématiquement si une grandeur peut prendre des valeurs décimales (moyenne, taux, montant après pourcentage) : si oui, déclare-la en `REEL` et non en `ENTIER`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q6',
              type: 'mcq',
              prompt: 'On veut calculer la moyenne arithmétique de 3 notes entières saisies au clavier (`n1, n2, n3`) et stocker un indicateur indiquant si l’étudiant est admis (`moyenne >= 10`). Quels types choisir pour `moyenne` et `estAdmis` ?',
              options: [
                'moyenne : ENTIER ; estAdmis : CHAINE',
                'moyenne : REEL ; estAdmis : BOOLEEN',
                'moyenne : ENTIER ; estAdmis : BOOLEEN',
                'moyenne : REEL ; estAdmis : CARACTERE',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La division par 3 de la somme de trois entiers produit généralement un nombre décimal (ex. $(11+12+12)/3 = 11{,}67$), donc `moyenne` doit être de type `REEL`. L’état admis/refusé ne possède que deux issues logiques (`VRAI`/`FAUX`), donc `estAdmis` est de type `BOOLEEN`.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch1_p2',
        order: 2,
        title: 'Instructions élémentaires (affectation, lecture, écriture) et trace d’exécution',
        summary:
          'Maîtriser les trois instructions simples qui modifient l’état mémoire ou dialoguent avec l’utilisateur, et simuler pas à pas un algorithme.',
        conceptExplanation:
          'Une **instruction** est un événement qui fait passer l’ensemble des variables d’un état mémoire à un nouvel état. Les **instructions élémentaires** s’écrivent sur une ligne : l’**affectation** (`var ← expr`), la **lecture** (`LIRE(var)`) et l’**écriture** (`ECRIRE(expr1, expr2, ...)`).\n\n' +
          'L’affectation évalue d’abord l’expression située à droite de la flèche `←`, puis range le résultat dans la variable de gauche en **écrasant** son ancienne valeur. La lecture interrompt le déroulement pour attendre une saisie clavier compatible. L’écriture envoie vers l’écran le résultat de chaque expression listée.\n\n' +
          'La **trace d’exécution** (grille de simulation) suit ligne par ligne l’évolution de chaque variable, des conditions évaluées et des affichages écran, ce qui permet de détecter des erreurs subtiles de logique.',
        formulas: [
          {
            name: 'Échange de deux variables avec variable auxiliaire',
            formula: '\\text{aux} \\leftarrow a \\; ; \\quad a \\leftarrow b \\; ; \\quad b \\leftarrow \\text{aux}',
            note: 'Sans variable tampon `aux`, la première affectation `a ← b` écrase définitivement la valeur initiale de `a`.',
          },
          {
            name: 'Incrémentation d’un compteur',
            formula: '\\text{nbAn} \\leftarrow \\text{nbAn} + 1',
            note: 'Ce n’est pas une égalité mathématique : on lit l’ancienne valeur, on ajoute 1, puis on range le résultat dans `nbAn`.',
          },
        ],
        keyRule:
          'Toute affectation ou lecture écrase irrémédiablement l’ancienne valeur de la variable cible ; l’écriture, elle, ne modifie jamais aucune variable.',
        workedExample: {
          title: 'Détection d’un défaut logique via la trace de l’algorithme Intérêts',
          statement:
            'Un livret à `4,5%` reçoit un dépôt de `800` le 1er janvier et les intérêts le 31 décembre. Si l’objectif est `2500` (au lieu de `2600`), montrer par la trace pourquoi l’algorithme naïf ajoute inutilement une 3e année complète d’intérêts et comment le corriger.',
          methodSteps: [
            'Fin année 1 : `somme = 836.00`, `nbAn = 1`. Fin année 2 : `somme = 1709.62`, `nbAn = 2`.',
            'Au 1er janvier de l’année 3 : `somme ← 1709.62 + 800 = 2509.62`. L’objectif de `2500` est déjà atteint !',
            'L’algorithme naïf ne revérifie pas `somme < sommeFinale` après le dépôt : il incrémente `nbAn` à `3` et ajoute `112.93` d’intérêts pour atteindre `2622.55`.',
            'Correction : insérer `SI (somme < sommeFinale) ALORS` juste après `somme ← somme + depot` pour n’appliquer l’année d’attente et les intérêts que si l’objectif n’est pas encore atteint.',
          ],
          conclusion:
            'Avec ce test interne, l’algorithme s’arrête à `nbAn = 2` années complètes d’attente avec `2509,62`, prouvant l’utilité décisive d’une trace d’exécution.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Affectation',
            stepTheme: 'blue',
            stepTitle: 'Mécanisme en deux temps de l’affectation (`←`)',
            paragraphText:
              'L’affectation est l’instruction fondamentale qui calcule et mémorise une nouvelle valeur dans une variable.\n' +
              '• **Syntaxe** : `<identificateur> ← <expression>` (la cible à gauche est toujours une variable unique, jamais une constante ni un calcul).\n' +
              '• **Temps 1 — Évaluation** : la machine calcule la valeur de l’expression à droite en lisant l’état actuel des variables.\n' +
              '• **Temps 2 — Rangement destructif** : ce résultat est écrit dans la variable de gauche, écrasant son ancien contenu.\n' +
              'Exemple : si `somme = 1636` et `interet = 73.62`, alors `somme ← somme + interet` calcule `1636 + 73.62 = 1709.62`, puis remplace `1636` par `1709.62` sans modifier `interet`.',
            formula: {
              name: 'Sens strict de l’affectation',
              formula: '\\text{variable} \\leftarrow \\text{expression} \\quad (\\text{non symétrique : } a \\leftarrow b \\neq b \\leftarrow a)',
              note: 'Contrairement au signe `=` mathématique, la flèche indique un transfert orienté de la droite vers la gauche.',
            },
            keyRule:
              'À gauche de `←`, on ne trouve jamais que le nom d’une variable ; toute valeur antérieure de cette variable est définitivement écrasée.',
            konanTip:
              'Écrire `a + 1 ← b` ou `5 ← x` est toujours une erreur de syntaxe : on ne peut rien ranger dans une expression ou dans une constante.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Initialement, `a = 10` et `b = 4`. Après la séquence `a ← a + b`, puis `b ← a - b`, quelles sont les valeurs finales de `a` et `b` ?',
              options: [
                'a = 14 et b = 6',
                'a = 14 et b = 10',
                'a = 10 et b = 6',
                'a = 14 et b = 4',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Étape 1 : `a ← 10 + 4 = 14` (l’ancienne valeur 10 est écrasée). Étape 2 : `b ← a - b` utilise la NOUVELLE valeur de `a`, soit `14 - 4 = 10`. Finalement `a = 14` et `b = 10`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Échange de valeurs',
            stepTheme: 'orange',
            stepTitle: 'Permuter deux variables sans perte de données',
            paragraphText:
              'Un réflexe naïf très fréquent consiste à écrire `a ← b` suivi de `b ← a` pour échanger le contenu de deux variables. Or cette séquence détruit irrémédiablement l’une des deux valeurs !\n' +
              '• **Pourquoi ça échoue** : dès `a ← b`, l’ancienne valeur de `a` disparaît ; les deux variables contiennent alors toutes deux `b`, et `b ← a` recopie `b` dans `b`.\n' +
              '• **Solution standard** : utiliser une variable temporaire (`aux`) de même type : `aux ← a`, puis `a ← b`, puis `b ← aux`.\n' +
              '• **Analogie concrète** : pour échanger du jus de bissap et du jus de gingembre contenus dans deux verres pleins, un troisième verre vide est indispensable.\n' +
              'Exemple : avec `a = 15` et `b = 90`, `aux ← 15`, `a ← 90`, `b ← 15` réussit l’échange proprement.',
            formula: {
              name: 'Permutation canonique de deux variables',
              formula: '\\text{aux} \\leftarrow x \\; ; \\quad x \\leftarrow y \\; ; \\quad y \\leftarrow \\text{aux}',
              note: 'Fonctionne pour tout type (ENTIER, REEL, CARACTERE, CHAINE, BOOLEEN).',
            },
            keyRule:
              'La séquence d’échange suit un cycle strict de 3 affectations : sauvegarder `x` dans `aux`, copier `y` dans `x`, restaurer `aux` dans `y`.',
            konanTip:
              'Pour vérifier vite ton échange, lis les variables en diagonale : `aux ← x`, `x ← y`, `y ← aux` — chaque variable écrasée vient juste d’être lue à la ligne précédente !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Si `x = "Koffi"` et `y = "Aya"`, que contiennent `x` et `y` après exécution de `x ← y` suivi de `y ← x` ?',
              options: [
                'x = "Aya" et y = "Koffi"',
                'x = "Koffi" et y = "Koffi"',
                'x = "Aya" et y = "Aya"',
                'Une erreur de syntaxe se produit.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La première instruction `x ← y` écrase `"Koffi"` par `"Aya"`. La seconde instruction `y ← x` copie alors `"Aya"` dans `y`. Les deux variables valent donc `"Aya"`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Entrée / Sortie',
            stepTheme: 'blue',
            stepTitle: 'Instructions de lecture (`LIRE`) et d’écriture (`ECRIRE`)',
            paragraphText:
              'Un algorithme utile dialogue avec l’utilisateur grâce à deux instructions d’entrée/sortie qui assurent l’interactivité.\n' +
              '• **Lecture `LIRE(var1, var2, ...)`** : suspend l’exécution, attend une saisie sur le périphérique d’entrée (clavier) et range chaque valeur compatible dans la variable indiquée (en écrasant son contenu antérieur).\n' +
              '• **Écriture `ECRIRE(expr1, expr2, ...)`** : évalue successivement chaque expression de la liste (chaînes littérales, variables ou calculs) et envoie leurs valeurs vers l’écran sans altérer la mémoire.\n' +
              '• **Bonne pratique d’ergonomie** : toujours précéder un `LIRE(x)` d’un `ECRIRE("Message clair : ")` afin que l’utilisateur sache quelle donnée saisir.\n' +
              'Exemple : si `x = 13`, `ECRIRE("Le successeur de ", x, " est ", x + 1)` affiche `Le successeur de 13 est 14`, tout en laissant `x` égal à `13`.',
            keyRule:
              '`LIRE` accepte uniquement des identificateurs de variables (jamais d’expressions ni de constantes), alors qu’`ECRIRE` accepte toute expression (constante, variable ou calcul).',
            konanTip:
              'Piège fréquent : `ECRIRE("x")` affiche littéralement la lettre `x`, tandis que `ECRIRE(x)` affiche la valeur stockée dans la variable `x` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Laquelle des instructions suivantes est syntaxiquement INCORRECTE en algorithmique ?',
              options: [
                'ECRIRE("Total = ", prix * qte)',
                'LIRE(nom, prenom, age)',
                'LIRE(x + 1)',
                'ECRIRE("Montant : ", solde)',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`LIRE` range une donnée saisie dans une zone mémoire identifiée par un nom de variable. `x + 1` est une expression calculée, pas une variable : `LIRE(x + 1)` est donc interdit.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Simulation',
            stepTheme: 'green',
            stepTitle: 'Construire une grille de trace d’exécution',
            paragraphText:
              'La trace d’exécution consiste à jouer manuellement le rôle de l’ordinateur afin de vérifier qu’un algorithme produit exactement le résultat attendu.\n' +
              '• **Colonnes de la grille** : numéro de ligne exécutée, une colonne par variable déclarée, une colonne `ExprBool` (pour les tests) et une colonne `Écran` (entrées/sorties).\n' +
              '• **Convention de remplissage** : on n’inscrit une valeur dans une colonne que lorsque l’instruction courante modifie effectivement cette variable ; sinon, sa dernière valeur inscrite reste active.\n' +
              '• **Intérêt pédagogique et professionnel** : la trace révèle immédiatement les variables non initialisées, les erreurs d’ordre d’affectation et les décalages de compteurs.\n' +
              'Exemple : dans l’algorithme `Intérêts` (`TAUX = 4.5%`, `depot = 800`, `sommeFinale = 2600`), la trace montre l’évolution exacte de `somme` de `0` à `2622.55` sur 3 itérations.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Trace d’exécution — Algorithme Intérêts (dépôt = 800, objectif = 2600, taux = 4,5 %)',
              caption: 'Chaque ligne enregistre uniquement les variables modifiées par l’instruction correspondante.',
              tableData: {
                headers: ['Étape / Année', 'somme (1er jan.)', 'nbAn', 'interet (4,5%)', 'somme (31 déc.)', 'Test somme < 2600'],
                rows: [
                  ['Initialisation', '0.00', '0', '—', '0.00', 'VRAI (0 < 2600)'],
                  ['Année 1', '800.00', '1', '36.00', '836.00', 'VRAI (836 < 2600)'],
                  ['Année 2', '1636.00', '2', '73.62', '1709.62', 'VRAI (1709.62 < 2600)'],
                  ['Année 3', '2509.62', '3', '112.93', '2622.55', 'FAUX (2622.55 < 2600)'],
                ],
              },
            },
            keyRule:
              'Ne jamais deviner « de tête » le résultat d’un algorithme de plus de 4 lignes : tracer chaque changement d’état dans un tableau garantit 100 % de fiabilité.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Dans la trace de l’algorithme `Intérêts` (`TAUX = 4.5%`, `depot = 800`, `sommeFinale = 2600`), quelle est la valeur de `somme` juste après le dépôt du 1er janvier de la 2e année (avant calcul de l’intérêt) ?',
              options: [
                '836.00',
                '1600.00',
                '1636.00',
                '1709.62',
              ],
              correctAnswerIndex: 2,
              explanation:
                'À la fin de la 1re année, `somme = 800 + 36 = 836.00`. Au 1er janvier de la 2e année, on ajoute le nouveau dépôt de `800` : `somme ← 836 + 800 = 1636.00`. L’intérêt de `73.62` portera ensuite sur `1636.00` pour donner `1709.62`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Variable non initialisée',
            stepTheme: 'orange',
            stepTitle: 'Le danger des variables non initialisées et l’ordre des lignes',
            paragraphText:
              'La déclaration réserve une case mémoire mais ne lui donne pas automatiquement la valeur zéro : avant la première affectation ou lecture, son contenu est indéterminé.\n' +
              '• **Erreur de lecture avant écriture** : évaluer `somme ← somme + depot` ou `SI x > 5 ALORS` sans avoir initialisé `somme` ou `x` rend l’algorithme faux et imprévisible.\n' +
              '• **Sensibilité à l’ordre séquentiel** : inverser deux affectations dépendantes change radicalement le résultat final.\n' +
              '• **Cas réel** : dans un calcul de remise e-commerce, appliquer la TVA de `18%` avant ou après une remise fixe de `5 000 FCFA` ne produit pas le même montant à facturer.\n' +
              'Exemple : avec `prix = 20000`, `(prix - 5000) * 1.18 = 17700`, alors que `prix * 1.18 - 5000 = 18600`.',
            keyRule:
              'Toute variable apparaissant à droite d’un `←`, dans une condition ou dans un `ECRIRE` doit impérativement posséder une valeur connue au préalable.',
            konanTip:
              'Initialise systématiquement tes accumulateurs de somme à `0`, tes accumulateurs de produit à `1`, et tes compteurs à `0` dès les premières lignes après `DEBUT`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q5',
              type: 'mcq',
              prompt: 'On exécute `DEBUT`, puis `total ← total + 500`, puis `ECRIRE(total)`, `FIN`, avec `total : ENTIER` déclaré mais jamais initialisé. Que se passe-t-il sur le plan algorithmique ?',
              options: [
                'L’algorithme affiche obligatoirement 500 car toute variable vaut 0 par défaut.',
                'L’algorithme est erroné car `total` est évaluée à droite de `←` alors qu’elle n’a reçu aucune valeur préalable.',
                'L’algorithme demande automatiquement à l’utilisateur de saisir `total`.',
                'L’instruction `total ← total + 500` est ignorée sans effet.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En algorithmique rigoureuse, une variable déclarée mais non initialisée n’a pas de valeur définie. L’expression `total + 500` n’est donc pas évaluable : il faut écrire `total ← 0` avant d’accumuler.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Corriger un défaut de logique repéré par la trace',
            paragraphText:
              'L’analyse d’une trace d’exécution permet non seulement de valider un calcul, mais aussi de perfectionner les spécifications d’un algorithme métier.\n' +
              '• **Constat sur l’épargne** : si l’objectif est `2500` (dépôt `800`, taux `4,5%`), après le dépôt du 1er janvier de la 3e année, `somme` atteint `1709.62 + 800 = 2509.62`.\n' +
              '• **Défaut de la version initiale** : comme le test `somme < sommeFinale` n’est vérifié qu’en début de boucle, l’algorithme fait patienter une année entière supplémentaire et calcule des intérêts non nécessaires.\n' +
              '• **Correctif propre** : après `somme ← somme + depot`, on teste `SI (somme < sommeFinale) ALORS` avant d’incrémenter `nbAn` et d’ajouter les intérêts du 31 décembre.\n' +
              'Exemple : ce contrôle de condition intermédiaire est identique à la vérification d’un plafond de paiement avant facturation des frais dans un portefeuille électronique.',
            keyRule:
              'Lorsqu’un traitement comprend deux étapes successives modifiant la même grandeur, vérifier entre les deux si la condition d’arrêt est déjà satisfaite.',
            konanTip:
              'Teste toujours tes algorithmes sur un cas « limite » (objectif atteint juste après le dépôt, montant nul, valeur égale au seuil) : c’est là que se cachent 90 % des bugs.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Avec `depot = 800`, `TAUX = 4.5%` et `sommeFinale = 2500`, quelle modification de l’algorithme `Intérêts` évite d’attendre inutilement la 3e année complète ?',
              options: [
                'Supprimer la boucle `TANTQUE` et utiliser un seul `ECRIRE`.',
                'Placer `SI (somme < sommeFinale) ALORS` juste après `somme ← somme + depot` pour n’incrémenter `nbAn` et n’ajouter l’intérêt que si la somme souhaitée n’est pas encore atteinte.',
                'Remplacer `somme ← 0` par `somme ← 2500` au début.',
                'Diviser le taux par 1000 au lieu de 100.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès que `somme ← somme + depot` atteint `2509.62 >= 2500`, la condition `somme < sommeFinale` devient FAUSSE : le bloc `SI` n’est pas exécuté, on sort ensuite du `TANTQUE` sans compter une 3e année d’attente inutile.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_algo_ch1_p3',
        order: 3,
        title: 'Expressions numériques (div/mod), booléennes, De Morgan et chaînes',
        summary:
          'Maîtriser les priorités d’opérateurs, la division euclidienne, les tables de vérité, les lois de De Morgan et la concaténation/comparaison de chaînes.',
        conceptExplanation:
          'Une **expression** combine des valeurs littérales, des identificateurs de variables, des opérateurs et éventuellement des appels de fonctions pour produire une valeur d’un type déterminé (le type de son résultat).\n\n' +
          'En arithmétique, les opérateurs `{*, /, div, mod}` sont prioritaires sur `{+, -}` ; `a div b` donne le **quotient entier** et `a mod b` le **reste** de la division euclidienne ($a = b\\cdot q + r$, $0 \\le r < b$).\n\n' +
          'En logique booléenne, les opérateurs relationnels (`<, <=, >, >=, =, <>`) et l’appartenance (`∈`) produisent `VRAI` ou `FAUX`, combinables par `NON`, `ET`, `OU` (priorité : `NON` > `ET` > `OU`) et transformables par les **lois de De Morgan**. Sur les chaînes, `+` réalise la **concaténation** et la comparaison suit l’ordre lexicographique (code des caractères).',
        formulas: [
          {
            name: 'Division euclidienne algorithmique',
            formula: 'a = b \\times (a \\;\\text{div}\\; b) + (a \\;\\text{mod}\\; b), \\quad 0 \\le (a \\;\\text{mod}\\; b) < b',
            note: 'Ex. 32 div 5 = 6 et 32 mod 5 = 2 ; `n mod 2 = 0` teste la parité de `n`.',
          },
          {
            name: 'Lois de De Morgan',
            formula: '\\text{NON}(A \\;\\text{ET}\\; B) \\equiv (\\text{NON}\\; A) \\;\\text{OU}\\; (\\text{NON}\\; B) \\quad ; \\quad \\text{NON}(A \\;\\text{OU}\\; B) \\equiv (\\text{NON}\\; A) \\;\\text{ET}\\; (\\text{NON}\\; B)',
            note: 'Indispensables pour nier proprement une condition d’entrée de boucle ou une condition de rejet.',
          },
        ],
        keyRule:
          'Priorité arithmétique : `{*, /, div, mod}` avant `{+, -}`. Priorité logique : `NON` avant `ET` avant `OU`. En cas de doute, parenthéser explicitement !',
        workedExample: {
          title: 'Condition d’admission universitaire et transformation de De Morgan',
          statement:
            'Un étudiant possède trois notes réelles `n1, n2, n3`. Il est admis si sa moyenne est au moins `10` et qu’il n’a aucune note éliminatoire strictement inférieure à `5`. Écrire la condition avec `NON`, puis sa forme équivalente par De Morgan.',
          methodSteps: [
            'Condition de moyenne : `(n1 + n2 + n3) / 3 >= 10`.',
            'Existence d’une note éliminatoire : `(n1 < 5) OU (n2 < 5) OU (n3 < 5)`.',
            'Absence de note éliminatoire : `NON ((n1 < 5) OU (n2 < 5) OU (n3 < 5))`.',
            'Application de De Morgan : la négation transforme chaque `OU` en `ET` et chaque `<` en `>=`, donnant `(n1 >= 5) ET (n2 >= 5) ET (n3 >= 5)`.',
          ],
          conclusion:
            'L’expression finale est `((n1 + n2 + n3) / 3 >= 10) ET (n1 >= 5) ET (n2 >= 5) ET (n3 >= 5)`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Arithmétique',
            stepTheme: 'blue',
            stepTitle: 'Opérateurs numériques, `div`, `mod` et priorités',
            paragraphText:
              'Toute expression numérique s’évalue selon des règles strictes de priorité et produit un résultat de type `ENTIER` ou `REEL`.\n' +
              '• **Division euclidienne (`div` et `mod`)** : pour deux entiers $a$ et $b > 0$, `a div b` retourne le quotient entier $q$ et `a mod b` retourne le reste entier $r$ tels que $a = b\\cdot q + r$ avec $0 \\le r < b$.\n' +
              '• **Hiérarchie de priorité** : les parenthèses d’abord, puis `{*, /, div, mod}` (de gauche à droite), et enfin `{+, -}`.\n' +
              '• **Usages pratiques** : convertir des minutes en heures/minutes (`145 div 60 = 2 h`, `145 mod 60 = 25 min`), tester la divisibilité (`an mod 4 = 0`) ou extraire le dernier chiffre d’un entier (`n mod 10`).\n' +
              'Exemple : `32 div 5` vaut `6`, `32 mod 5` vaut `2`, et `4 + 32 div 5 * 2` vaut `4 + 6 * 2 = 16` (et non `14`).',
            formula: {
              name: 'Quotient et reste entiers',
              formula: 'q = a \\;\\text{div}\\; b, \\qquad r = a \\;\\text{mod}\\; b',
              note: 'L’opérateur `/` effectue la division réelle (`32 / 5 = 6.4`), tandis que `div` effectue la division entière (`32 div 5 = 6`).',
            },
            keyRule:
              'Ne confonds jamais `/` (division réelle donnant un `REEL`) avec `div` (quotient entier) et `mod` (reste entier).',
            konanTip:
              'Pour vérifier si un montant en FCFA est un multiple exact de billets de `5000`, teste simplement `montant mod 5000 = 0` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Quelle est la valeur de l’expression `(47 div 5) + (47 mod 5) * 3` ?',
              options: [
                '33',
                '15',
                '17',
                '29',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a `47 = 5 × 9 + 2`, donc `47 div 5 = 9` et `47 mod 5 = 2`. Comme `*` est prioritaire sur `+`, on calcule `9 + (2 * 3) = 9 + 6 = 15`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Logique',
            stepTheme: 'blue',
            stepTitle: 'Expressions booléennes, comparateurs et opérateurs logiques',
            paragraphText:
              'Les décisions et les boucles d’un algorithme sont pilotées par des expressions booléennes dont la valeur finale est obligatoirement `VRAI` ou `FAUX`.\n' +
              '• **Opérateurs de comparaison** : `<`, `<=`, `>`, `>=`, `=` (égalité) et `<>` (différence), ainsi que l’appartenance à un ensemble `∈` (ex. `mois ∈ {1, 3, 5, 7, 8, 10, 12}`).\n' +
              '• **Opérateurs logiques** : `NON` (inverse la valeur), `ET` (vrai uniquement si les deux opérandes sont vrais), `OU` (vrai dès qu’au moins un opérande est vrai).\n' +
              '• **Priorité logique** : `NON` s’évalue avant `ET`, qui s’évalue avant `OU`.\n' +
              'Exemple : `(20 > 3) ET (20 < 15)` vaut `VRAI ET FAUX = FAUX`, tandis que `(20 > 3) OU (20 < 15)` vaut `VRAI OU FAUX = VRAI`.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tables de vérité des opérateurs booléens et lois de De Morgan',
              caption: 'On constate colonne par colonne que NON(A ET B) = (NON A) OU (NON B) et NON(A OU B) = (NON A) ET (NON B).',
              tableData: {
                headers: ['A', 'B', 'A ET B', 'A OU B', 'NON(A ET B)', '(NON A) OU (NON B)'],
                rows: [
                  ['VRAI', 'VRAI', 'VRAI', 'VRAI', 'FAUX', 'FAUX'],
                  ['VRAI', 'FAUX', 'FAUX', 'VRAI', 'VRAI', 'VRAI'],
                  ['FAUX', 'VRAI', 'FAUX', 'VRAI', 'VRAI', 'VRAI'],
                  ['FAUX', 'FAUX', 'FAUX', 'FAUX', 'VRAI', 'VRAI'],
                ],
              },
            },
            keyRule:
              'Une variable booléenne `estAdmis` est déjà une expression booléenne complète : on écrit `SI estAdmis ALORS` plutôt que le redondant `SI estAdmis = VRAI ALORS`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Si `A = VRAI`, `B = FAUX` et `C = FAUX`, quelle est la valeur de `A OU B ET NON C` (en respectant les priorités sans parenthèses) ?',
              options: [
                'FAUX',
                'VRAI',
                'Indéterminée',
                'Erreur de type',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Priorité : `NON` d’abord (`NON C = VRAI`), puis `ET` (`B ET VRAI = FAUX ET VRAI = FAUX`), enfin `OU` (`A OU FAUX = VRAI OU FAUX = VRAI`).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Lois de De Morgan',
            stepTheme: 'violet',
            stepTitle: 'Transformer et nier une condition composée par De Morgan',
            paragraphText:
              'En algorithmique, on doit très souvent inverser une condition (par exemple pour passer d’une boucle `TANTQUE` à une boucle `REPETER … JUSQUA`, ou pour exprimer une condition de refus).\n' +
              '• **Première loi** : `NON(A ET B) ≡ (NON A) OU (NON B)` — pour que deux conditions ne soient pas vraies ensemble, il suffit qu’au moins une soit fausse.\n' +
              '• **Seconde loi** : `NON(A OU B) ≡ (NON A) ET (NON B)` — pour qu’aucune condition ne soit vraie, elles doivent toutes être fausses.\n' +
              '• **Négation des comparateurs** : `NON(x < 5)` devient `x >= 5` (attention au `=`) ; `NON(x = 0)` devient `x <> 0`.\n' +
              'Exemple : nier « âge compris entre 18 et 25 inclus » (`age >= 18 ET age <= 25`) donne `age < 18 OU age > 25`.',
            formula: {
              name: 'Négation d’un intervalle fermé',
              formula: '\\text{NON}(a \\le x \\;\\text{ET}\\; x \\le b) \\equiv (x < a) \\;\\text{OU}\\; (x > b)',
              note: 'Un piège fréquent est d’écrire `ET` au lieu de `OU` : aucun nombre ne peut être à la fois `< a` ET `> b` !',
            },
            keyRule:
              'Quand `NON` traverse une parenthèse, il nie chaque proposition ET bascule `ET` en `OU` (et réciproquement `OU` en `ET`).',
            konanTip:
              'Vérifie toujours ton inversion avec une valeur test : si `age = 30` est hors de `[18 ; 25]`, ta condition inversée DOIT renvoyer `VRAI` pour `30`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Quelle expression est logiquement équivalente à `NON ((x >= 10) ET (y <> 0))` ?',
              options: [
                '(x < 10) ET (y = 0)',
                '(x <= 10) OU (y = 0)',
                '(x < 10) OU (y = 0)',
                '(x > 10) OU (y <> 0)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Par De Morgan, `NON(A ET B) ≡ (NON A) OU (NON B)`. Ici `NON(x >= 10)` est `x < 10` (strict), et `NON(y <> 0)` est `y = 0`. On obtient `(x < 10) OU (y = 0)`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Chaînes',
            stepTheme: 'blue',
            stepTitle: 'Opérateur de concaténation sur les caractères et chaînes',
            paragraphText:
              'Les calculs ne se limitent pas aux nombres : on construit aussi dynamiquement des textes, identifiants clients ou messages de reçu grâce à la concaténation.\n' +
              '• **Opérateur de concaténation (`+`)** : met bout à bout deux chaînes ou caractères pour former une nouvelle chaîne sans ajouter d’espace automatique.\n' +
              '• **Type du résultat** : toute concaténation impliquant caractères et/ou chaînes produit toujours une valeur de type `CHAINE`.\n' +
              '• **Piège du signe `+` surchargé** : entre nombres, `+` additionne (`51 + 200 = 251`) ; entre chaînes, `+` colle les caractères (`"51" + "200" = "51200"`).\n' +
              'Exemple : `"Bonjour" + " " + "Awa"` donne `"Bonjour Awa"`, alors que `"Bonjour" + "Awa"` donne `"BonjourAwa"`.',
            formula: {
              name: 'Addition numérique vs Concaténation textuelle',
              formula: '51 + 200 = 251 \\quad (\\text{ENTIER}) \\qquad \\text{vs} \\qquad \\text{"51"} + \\text{"200"} = \\text{"51200"} \\quad (\\text{CHAINE})',
              note: 'Les guillemets changent totalement la nature de l’opération effectuée par `+`.',
            },
            keyRule:
              'La concaténation ne génère aucun espace implicite : pense à inclure explicitement `" "` entre deux mots collés.',
            konanTip:
              'Une chaîne contenant un seul caractère (`"A"`) reste de type `CHAINE`, alors que `’A’` est de type `CARACTERE` ; la concaténation `’C’ + ’I’` produit la `CHAINE` `"CI"`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Quelle est la valeur et le type de l’expression `"225" + "07"` ?',
              options: [
                '232 de type ENTIER',
                '"232" de type CHAINE',
                '"22507" de type CHAINE',
                '"225 07" de type CHAINE',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les deux opérandes étant des chaînes de caractères, `+` effectue une concaténation directe sans espace ajouté, produisant la chaîne `"22507"`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Ordre lexicographique',
            stepTheme: 'orange',
            stepTitle: 'Comparer des chaînes : ordre alphabétique et piège numérique',
            paragraphText:
              'Les opérateurs `<`, `<=`, `>`, `>=`, `=`, `<>` s’appliquent aussi aux caractères et aux chaînes, selon l’ordre lexicographique (dictionnaire) issu de leur codage interne en machine.\n' +
              '• **Principe de comparaison** : on compare les chaînes caractère par caractère de gauche à droite ; dès le premier caractère différent, leurs codes décident de l’ordre.\n' +
              '• **Piège des nombres en chaînes** : `"100" < "40"` vaut `VRAI` ! En effet, au premier caractère, `’1’` précède `’4’`, alors qu’en comparaison numérique `100 < 40` vaut `FAUX`.\n' +
              '• **Casse et accents en machine** : dans les codes standards (ASCII/Unicode), les majuscules, minuscules et lettres accentuées ont des codes distincts (ex. `’Z’ < ’a’`).\n' +
              'Exemple : `"ELEPHANT" < "SOURIS"` est `VRAI` (car `’E’ < ’S’`), et `"ABIDJAN" < "BOUAKE"` est `VRAI`.',
            keyRule:
              'Ne jamais comparer des montants ou des quantités stockés sous forme de `CHAINE` : `"1000" < "200"` serait évalué à `VRAI` !',
            konanTip:
              'Pour comparer des chaînes alphabétiques de manière fiable en programmation, on les normalise généralement dans la même casse (tout en majuscules ou tout en minuscules).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Quelle est la valeur booléenne de l’expression `("100" < "40") ET (100 < 40)` ?',
              options: [
                'VRAI car 100 est plus petit que 40 dans les deux cas.',
                'FAUX car `"100" < "40"` vaut VRAI mais `100 < 40` vaut FAUX, et `VRAI ET FAUX = FAUX`.',
                'VRAI car les deux opérandes valent VRAI.',
                'FAUX car `"100" < "40"` vaut FAUX.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En ordre lexicographique, `"100" < "40"` est `VRAI` (car `’1’` précède `’4’`). En ordre numérique, `100 < 40` est `FAUX`. Leur conjonction `VRAI ET FAUX` vaut donc `FAUX`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'slate',
            stepTitle: 'Expression booléenne d’année bissextile et type d’expression complexe',
            paragraphText:
              'Construire une expression complexe exige d’articuler arithmétique, modulo et logique booléenne dans une écriture parfaitement lisible.\n' +
              '• **Règle calendaire de l’année bissextile** : une année `an` est bissextile si elle est divisible par 4 sans l’être par 100, OU si elle est divisible par 400.\n' +
              '• **Traduction algorithmique** : `bis ← ((an mod 4 = 0) ET (an mod 100 <> 0)) OU (an mod 400 = 0)`.\n' +
              '• **Vérification sur 3 cas** : `2024` → divisible par 4 et pas par 100 (`VRAI`) ; `1900` → divisible par 100 et pas par 400 (`FAUX`) ; `2000` → divisible par 400 (`VRAI`).\n' +
              'Exemple : dans un logiciel bancaire de calcul d’intérêts journaliers en zone UEMOA, cette expression décide automatiquement si février compte 28 ou 29 jours.',
            formula: {
              name: 'Prédicat d’année bissextile',
              formula: '\\text{bis} \\leftarrow ((\\text{an mod } 4 = 0) \\;\\text{ET}\\; (\\text{an mod } 100 \\neq 0)) \\;\\text{OU}\\; (\\text{an mod } 400 = 0)',
              note: 'Expression de type BOOLEEN combinant opérateurs arithmétiques (`mod`), relationnels (`=`, `<>`) et logiques (`ET`, `OU`).',
            },
            keyRule:
              'Le type d’une expression complexe est toujours le type renvoyé par son dernier opérateur évalué (ici `OU` → `BOOLEEN`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q6',
              type: 'mcq',
              prompt: 'Selon la formule `bis ← ((an mod 4 = 0) ET (an mod 100 <> 0)) OU (an mod 400 = 0)`, quelles valeurs retourne `bis` pour les années `1900` et `2000` ?',
              options: [
                'VRAI pour 1900 et VRAI pour 2000',
                'FAUX pour 1900 et VRAI pour 2000',
                'VRAI pour 1900 et FAUX pour 2000',
                'FAUX pour 1900 et FAUX pour 2000',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour `1900` : `1900 mod 100 = 0` rend la première branche FAUSSE et `1900 mod 400 = 300 <> 0` rend la seconde FAUSSE → `FAUX`. Pour `2000` : `2000 mod 400 = 0` rend la seconde branche VRAIE → `VRAI`.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Structures conditionnelles et instructions de choix
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch2',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Algorithmique',
    title: 'Chapitre 2 — Structures conditionnelles et instructions de choix',
    summary:
      'Instruction conditionnelle simple et alternative (SI / SINON), imbrications et cascades SI … SINONSI … FINSI (tarifs dégressifs), et choix multiple SELON … DANS … AUTREMENT … FINSELON.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch2_p1',
        order: 1,
        title: 'Instruction conditionnelle simple (`SI … ALORS`) et alternative (`SI … SINON`)',
        summary:
          'Orienter l’exécution d’un algorithme selon une condition booléenne et comparer deux stratégies de calcul du maximum.',
        conceptExplanation:
          'Les **instructions structurées de choix** permettent d’exécuter une séquence d’instructions plutôt qu’une autre en fonction des données saisies ou des résultats intermédiaires. La forme **simple** (`SI <condition> ALORS <séquence> FINSI`) n’exécute la séquence que si `<condition>` vaut `VRAI` ; sinon, elle passe directement à l’instruction qui suit `FINSI`.\n\n' +
          'La forme **complète (alternative)** (`SI <condition> ALORS <séquence 1> SINON <séquence 2> FINSI`) garantit l’exécution d’exactement une des deux branches : `<séquence 1>` si la condition est `VRAI`, `<séquence 2>` si elle est `FAUX`.\n\n' +
          'Une condition doit toujours être **évaluable** (toutes ses variables initialisées). Pour un même problème (comme le maximum de deux entiers), on peut utiliser soit une alternative `SI/SINON`, soit une hypothèse initiale suivie d’un `SI` simple (`maxi ← nb1 ; SI nb2 > maxi ALORS maxi ← nb2 FINSI`).',
        formulas: [
          {
            name: 'Alternative binaire complète',
            formula: '\\text{SI } C \\text{ ALORS } S_1 \\text{ SINON } S_2 \\text{ FINSI}',
            note: 'S1 et S2 sont mutuellement exclusives : exactement l’une des deux séquences est exécutée.',
          },
          {
            name: 'Modèle d’hypothèse initiale (Maximum)',
            formula: '\\text{maxi} \\leftarrow nb_1 \\; ; \\quad \\text{SI } nb_2 > \\text{maxi ALORS } \\text{maxi} \\leftarrow nb_2 \\text{ FINSI}',
            note: 'Ce schéma se généralise directement au maximum d’un tableau de n éléments.',
          },
        ],
        keyRule:
          'Dans une alternative `SI … ALORS … SINON … FINSI`, il est impossible d’exécuter à la fois la branche `ALORS` et la branche `SINON` lors d’un même passage.',
        workedExample: {
          title: 'Validation d’un retrait Mobile Money et calcul du maximum de deux montants',
          statement:
            'Un client dispose d’un solde `solde` en FCFA et souhaite retirer un montant `retrait`. S’il a suffisamment de fonds (`retrait <= solde`), on débite le solde et on affiche le nouveau solde ; sinon on affiche `"Solde insuffisant"`.',
          methodSteps: [
            'Saisir les deux entrées : `LIRE(solde, retrait)`.',
            'Tester la condition évaluable `retrait <= solde`.',
            'Branche `ALORS` : `solde ← solde - retrait`, puis `ECRIRE("Retrait accepté. Nouveau solde : ", solde)`.',
            'Branche `SINON` : `ECRIRE("Solde insuffisant")` (le solde demeure inchangé).',
          ],
          conclusion:
            'Si `solde = 25000` et `retrait = 15000`, le solde passe à `10000`. Si `retrait = 30000`, seul le message de refus s’affiche et `solde` reste à `25000`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'SI simple',
            stepTheme: 'blue',
            stepTitle: 'Structure conditionnelle simple (`SI … ALORS … FINSI`)',
            paragraphText:
              'La structure conditionnelle simple permet d’exécuter un bloc d’instructions uniquement lorsqu’une situation particulière se produit, et de ne rien faire sinon.\n' +
              '• **Syntaxe** : `SI <condition> ALORS <séquence> FINSI`.\n' +
              '• **Mécanisme** : `<condition>` est évaluée. Si elle vaut `VRAI`, `<séquence>` est exécutée puis on continue après `FINSI` ; si elle vaut `FAUX`, `<séquence>` est totalement ignorée.\n' +
              '• **Exigence de validité** : la condition doit être une expression booléenne évaluable (toutes les variables qui y figurent doivent avoir une valeur préalable).\n' +
              'Exemple : pour appliquer une réduction de `10%` uniquement aux commandes supérieures à `50 000 FCFA`, on écrit `SI montant > 50000 ALORS montant ← montant * 0.9 FINSI`.',
            keyRule:
              'Tout bloc ouvert par `SI` doit impérativement être refermé par un `FINSI` qui délimite exactement les instructions soumises à la condition.',
            konanTip:
              'Indente toujours (décale de 2 ou 4 espaces) les instructions situées entre `ALORS` et `FINSI` : une indentation propre élimine la moitié des erreurs de logique.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Soit `montant ← 40000`, suivi de `SI montant > 50000 ALORS montant ← montant - 5000 FINSI`, puis `montant ← montant + 1000`. Quelle est la valeur finale de `montant` ?',
              options: [
                '35000',
                '36000',
                '41000',
                '40000',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La condition `40000 > 50000` est FAUSSE, donc `montant ← montant - 5000` est ignorée (`montant` reste `40000`). L’instruction `montant ← montant + 1000` est APRÈS `FINSI`, donc toujours exécutée : `montant` devient `41000`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Alternative',
            stepTheme: 'blue',
            stepTitle: 'Structure alternative complète (`SI … ALORS … SINON … FINSI`)',
            paragraphText:
              'Lorsque deux traitements distincts s’excluent mutuellement (accepté ou refusé, pair ou impair, bénéficiaire ou déficitaire), la structure alternative impose un choix binaire exhaustif.\n' +
              '• **Syntaxe** : `SI <condition> ALORS <séquence 1> SINON <séquence 2> FINSI`.\n' +
              '• **Exclusivité stricte** : si `<condition>` vaut `VRAI`, seule `<séquence 1>` s’exécute ; si elle vaut `FAUX`, seule `<séquence 2>` s’exécute.\n' +
              '• **Convergence** : après l’exécution de la branche choisie, le flux reprend systématiquement à l’instruction qui suit `FINSI`.\n' +
              'Exemple : un guichet automatique compare `retrait <= solde` pour choisir entre débiter le compte ou afficher un refus de transaction.',
            visualSchema: {
              type: 'flowchart',
              title: 'Organigramme d’une structure alternative SI … ALORS … SINON … FINSI',
              caption: 'Selon la valeur booléenne du test, exactement l’une des deux branches est parcourue avant de converger au FINSI.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: 'LIRE(solde, retrait)', sublabel: 'Acquisition des entrées', kind: 'start', color: 'slate' },
                  {
                    label: 'retrait <= solde ?',
                    sublabel: 'Évaluation de la condition booléenne',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'FAUX (SINON)',
                    branchTarget: 'ECRIRE("Solde insuffisant")',
                  },
                  { label: 'solde ← solde - retrait', sublabel: 'Branche ALORS (condition VRAI)', kind: 'process', color: 'blue' },
                  { label: 'ECRIRE("Nouveau solde : ", solde)', sublabel: 'Confirmation transaction', kind: 'process', color: 'green' },
                  { label: 'FINSI → Suite de l’algorithme', sublabel: 'Point de convergence unique', kind: 'end', color: 'violet' },
                ],
              },
            },
            keyRule:
              'Ne jamais écrire de condition après `SINON` : `SINON` capture automatiquement le cas où la condition du `SI` est `FAUX`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Quel algorithme teste correctement si un entier `n` saisi est pair ou impair ?',
              options: [
                'SI n div 2 = 0 ALORS ECRIRE("Pair") SINON ECRIRE("Impair") FINSI',
                'SI n mod 2 = 0 ALORS ECRIRE("Pair") SINON ECRIRE("Impair") FINSI',
                'SI n mod 2 = 0 ALORS ECRIRE("Pair") SINON n mod 2 = 1 ECRIRE("Impair") FINSI',
                'SI n / 2 = 0 ALORS ECRIRE("Pair") SINON ECRIRE("Impair") FINSI',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un entier est pair si et seulement si le reste de sa division euclidienne par 2 vaut 0 (`n mod 2 = 0`). `SINON` ne prend jamais de condition à sa suite.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Comparaison',
            stepTheme: 'green',
            stepTitle: 'Deux méthodes pour le maximum : alternative vs hypothèse initiale',
            paragraphText:
              'Un même problème peut souvent être résolu par plusieurs algorithmes équivalents mais de structures différentes.\n' +
              '• **Méthode 1 (`maxdeux-1` par alternative)** : `SI nb1 > nb2 ALORS maxi ← nb1 SINON maxi ← nb2 FINSI`. Très lisible pour deux valeurs.\n' +
              '• **Méthode 2 (`maxdeux-2` par hypothèse initiale)** : `maxi ← nb1`, puis `SI nb2 > maxi ALORS maxi ← nb2 FINSI`. On suppose que le premier est le plus grand, puis on rectifie si un autre le dépasse.\n' +
              '• **Avantage stratégique de la Méthode 2** : elle s’étend sans explosion de `SI` imbriqués à 3, 10 ou 10 000 valeurs (notamment dans les boucles et tableaux).\n' +
              'Exemple : pour `nb1 = 10` et `nb2 = 15`, `maxdeux-2` initialise `maxi` à `10`, teste `15 > 10` (`VRAI`), puis met `maxi` à `15`.',
            keyRule:
              'L’approche « hypothèse initiale + révision conditionnelle » est le patron universel de recherche d’un maximum ou d’un minimum.',
            konanTip:
              'Et si `nb1 = nb2` (par exemple `10` et `10`) ? Vérifie toujours les cas d’égalité : les deux méthodes donnent bien `maxi = 10` sans erreur.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Dans `maxdeux-2` (`maxi ← nb1 ; SI nb2 > maxi ALORS maxi ← nb2 FINSI`), combien d’affectations sur `maxi` sont exécutées lorsque `nb1 = 25` et `nb2 = 12` ?',
              options: [
                'Aucune affectation',
                'Exactement 1 affectation (`maxi ← 25`)',
                'Exactement 2 affectations',
                '3 affectations',
              ],
              correctAnswerIndex: 1,
              explanation:
                'D’abord `maxi ← 25` (1re affectation). Ensuite la condition `12 > 25` est FAUSSE, donc `maxi ← nb2` n’est pas exécutée. Total : 1 seule affectation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Erreur fréquente',
            stepTheme: 'orange',
            stepTitle: 'Deux `SI` indépendants vs un seul `SI … SINON`',
            paragraphText:
              'Une erreur redoutable consiste à remplacer un `SI … SINON` par deux `SI` consécutifs lorsque la première branche modifie la variable testée par le second `SI` !\n' +
              '• **Effet domino destructeur** : supposons `x = 1`. Si l’on écrit `SI x = 1 ALORS x ← 2 FINSI` suivi de `SI x = 2 ALORS x ← 1 FINSI`, le premier `SI` change `x` en `2`, ce qui rend la seconde condition VRAIE et remet `x` à `1` !\n' +
              '• **Version correcte** : `SI x = 1 ALORS x ← 2 SINON SI x = 2 ALORS x ← 1 FINSI FINSI` garantit qu’une seule bascule s’effectue.\n' +
              '• **Coût de calcul** : avec `SI … SINON`, une seule condition est évaluée au lieu de deux.\n' +
              'Exemple : pour inverser un tarif jour/nuit (`code = 1` ↔ `code = 2`), deux `SI` séparés créent un bug silencieux qui ramène toujours `code` à `1`.',
            keyRule:
              'Dès que deux cas sont mutuellement exclusifs — surtout si la première branche modifie la variable testée — utilise impérativement `SI … SINON` et jamais deux `SI` indépendants.',
            konanTip:
              'Quand tu relis un algorithme, demande-toi toujours : « Si la branche 1 s’exécute, est-ce que la condition du `SI` suivant risque de devenir vraie par accident ? »',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Initialement `statut ← 0`. On exécute `SI statut = 0 ALORS statut ← 1 FINSI`, puis immédiatement `SI statut = 1 ALORS statut ← 0 FINSI`. Quelle est la valeur finale de `statut` ?',
              options: [
                '1',
                '0',
                '2',
                'Erreur de compilation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Premier `SI` : `statut = 0` est VRAI, donc `statut` passe à `1`. Second `SI` (indépendant !) : `statut = 1` est maintenant VRAI, donc `statut` repasse à `0` ! Un `SI … SINON` aurait laissé `statut` à `1`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Factorisation',
            stepTheme: 'green',
            stepTitle: 'Éviter la duplication d’instructions communes aux deux branches',
            paragraphText:
              'Un algorithme bien conçu ne répète pas inutilement dans `ALORS` et dans `SINON` une instruction identique qui doit s’exécuter dans tous les cas.\n' +
              '• **Avant factorisation** : écrire `ECRIRE("Net à payer : ", net)` à la fin de la branche `ALORS` ET à la fin de la branche `SINON` alourdit le texte et multiplie les risques d’oubli en cas de modification.\n' +
              '• **Après factorisation** : ne conserver dans `ALORS` et `SINON` que ce qui diffère (le calcul de `net`), puis placer l’instruction commune `ECRIRE("Net à payer : ", net)` une seule fois juste après `FINSI`.\n' +
              '• **Règle d’ingénierie (DRY)** : *Don’t Repeat Yourself* — une seule source de vérité rend l’algorithme plus court, plus clair et plus facile à maintenir.\n' +
              'Exemple : dans `maxdeux-1`, `ECRIRE("Le plus grand est : ", maxi)` figure une unique fois après `FINSI`, et non deux fois dans les branches.',
            keyRule:
              'Toute instruction identique figurant à la fin des deux branches `ALORS` et `SINON` doit être sortie juste après le `FINSI`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Dans un algorithme calculant un prix TTC avec deux taux possibles (`taux ← 0.18` ou `taux ← 0.09`), où placer idéalement `ttc ← ht * (1 + taux)` et `ECRIRE(ttc)` ?',
              options: [
                'Avant le `SI`, avant même de connaître `taux`.',
                'Dupliqués à l’identique dans `ALORS` et dans `SINON`.',
                'Une seule fois juste après le `FINSI`, une fois que `taux` a été fixé par l’alternative.',
                'Uniquement dans la branche `SINON`.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’alternative ne sert qu’à déterminer `taux`. Une fois `FINSI` franchi, `taux` a la bonne valeur dans les deux cas : on factorise donc `ttc ← ht * (1 + taux)` et `ECRIRE(ttc)` une seule fois après `FINSI`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Résolution complète',
            stepTheme: 'slate',
            stepTitle: 'Équation du premier degré $ax + b = 0$ avec cas particuliers',
            paragraphText:
              'Les structures conditionnelles permettent de traiter proprement les divisions par zéro et les cas dégénérés en mathématiques appliquées.\n' +
              '• **Cas général ($a \\neq 0$)** : l’équation admet une unique solution réelle $x = -b / a$.\n' +
              '• **Cas dégénéré ($a = 0$)** : la division par $a$ est interdite ! Il faut imbriquer un second test sur $b$ : si $b = 0$, tout réel est solution (infinité de solutions) ; sinon ($b \\neq 0$), l’équation n’admet aucune solution.\n' +
              '• **Sécurité numérique** : tester `a <> 0` AVANT de calculer `-b / a` empêche tout plantage d’exécution.\n' +
              'Exemple : pour `a = 0, b = 5`, la branche `SINON` interne affiche `"Aucune solution"` sans jamais tenter `5 / 0`.',
            formula: {
              name: 'Discussion complète de $ax + b = 0$',
              formula: 'a \\neq 0 \\Rightarrow x = -\\frac{b}{a} \\; ; \\quad (a = 0 \\text{ et } b = 0) \\Rightarrow \\mathbb{R} \\; ; \\quad (a = 0 \\text{ et } b \\neq 0) \\Rightarrow \\varnothing',
              note: 'Un seul `SI` ne suffit pas : trois issues distinctes exigent au moins deux tests conditionnels.',
            },
            keyRule:
              'Toujours protéger une division `num / den` par un test préalable `SI den <> 0 ALORS` pour écarter toute division par zéro.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Pour résoudre $ax + b = 0$ dans $\\mathbb{R}$ sans risque de division par zéro, quelle condition doit être testée en tout premier lieu ?',
              options: [
                'SI b = 0 ALORS',
                'SI a <> 0 ALORS (ou SI a = 0 ALORS)',
                'SI x = -b / a ALORS',
                'SI a > b ALORS',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tester d’abord si `a <> 0` (ou `a = 0`) garantit que le calcul `-b / a` ne sera exécuté que lorsque le dénominateur `a` est strictement non nul.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch2_p2',
        order: 2,
        title: 'Imbrications, cascade `SI … SINONSI … FINSI` et tarifs par tranches',
        summary:
          'Remplacer des `SI` profondément imbriqués par une cascade lisible `SI … SINONSI … SINON … FINSI` et maîtriser l’ordre des seuils.',
        conceptExplanation:
          'Lorsqu’un problème comporte plus de deux cas mutuellement exclusifs définis par des **intervalles ou inégalités** (barème fiscal, tarif dégressif au kilogramme, grille de mentions universitaires), imbriquer des `SI … SINON SI … FINSI FINSI` devient vite illisible et sujet aux erreurs de fermeture.\n\n' +
          'La structure en cascade **`SI <cond1> ALORS <seq1> SINONSI <cond2> ALORS <seq2> ... SINON <seqN+1> FINSI`** résout ce problème avec un seul `FINSI` final.\n\n' +
          'Dès que la **première** expression booléenne évaluée dans l’ordre vaut `VRAI`, sa séquence s’exécute et l’algorithme saute immédiatement après le `FINSI`. L’ordre décroissant (ou croissant) des bornes est donc crucial : il simplifie chaque test et évite le masquage de tranches.',
        formulas: [
          {
            name: 'Cascade de choix ordonnés',
            formula: '\\text{SI } C_1 \\text{ ALORS } S_1 \\;\\text{SINONSI } C_2 \\text{ ALORS } S_2 \\;\\dots\\; \\text{SINON } S_{k+1} \\text{ FINSI}',
            note: 'Si C2 est évaluée, on sait automatiquement que C1 est FAUSSE : inutile de la retester !',
          },
        ],
        keyRule:
          'Dans une cascade `SI … SINONSI`, seule la PREMIÈRE branche dont la condition est `VRAI` s’exécute ; les conditions suivantes ne sont même plus évaluées.',
        workedExample: {
          title: 'Tarif dégressif d’une coopérative agricole de cacao (en kg)',
          statement:
            'Soient les bornes `BORNE_1 = 5`, `BORNE_2 = 10`, `BORNE_3 = 30`, `BORNE_4 = 60` et les prix dégressifs `PRIX_1 = 100`, `PRIX_2 = 90`, `PRIX_3 = 80`, `PRIX_4 = 70`, `PRIX_5 = 55`. Déterminer le prix unitaire pour `quantite = 25` kg.',
          methodSteps: [
            'Test 1 : `quantite > 60` (`25 > 60`) → `FAUX`. On passe au premier `SINONSI`.',
            'Test 2 : `quantite > 30` (`25 > 30`) → `FAUX`. On passe au deuxième `SINONSI`.',
            'Test 3 : `quantite > 10` (`25 > 10`) → `VRAI` ! On exécute `prix ← PRIX_3` (`80`).',
            'Saut immédiat au `FINSI` : le test `quantite > 5` n’est pas évalué.',
          ],
          conclusion:
            'Pour `25` kg, le prix unitaire appliqué est `80` ; l’ordre strictement décroissant `60 → 30 → 10 → 5` rend chaque condition courte et sans redondance.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cascade SINONSI',
            stepTheme: 'blue',
            stepTitle: 'Syntaxe et mécanisme de `SI … SINONSI … SINON … FINSI`',
            paragraphText:
              'Lorsque les cas d’un problème dépassent le simple choix binaire et reposent sur des conditions arbitraires (inégalités, intervalles, combinaisons logiques), la cascade `SINONSI` offre une écriture claire et plate.\n' +
              '• **Un seul `FINSI`** : contrairement à 4 `SI` imbriqués qui exigent 4 `FINSI` en cascade, `SI … SINONSI … SINON … FINSI` se clôt par un unique `FINSI`.\n' +
              '• **Évaluation séquentielle avec court-circuit** : les conditions sont testées du haut vers le bas ; dès qu’une condition vaut `VRAI`, sa séquence s’exécute et on sort aussitôt au `FINSI`.\n' +
              '• **Clause `SINON` par défaut** : si toutes les conditions précédentes sont fausses, la séquence du `SINON` final est exécutée.\n' +
              'Exemple : pour attribuer une mention universitaire (`moy >= 16` Très Bien, `moy >= 14` Bien, `moy >= 12` Assez Bien, `moy >= 10` Passable, sinon Ajourné), 4 tests ordonnés suffisent.',
            keyRule:
              'Une cascade `SI … SINONSI` est strictement équivalente à des `SI` imbriqués dans chaque `SINON`, mais infiniment plus lisible et moins sujette aux oublis de `FINSI`.',
            konanTip:
              'Si `moy = 15`, le test `moy >= 16` est FAUX, puis `moy >= 14` est VRAI → mention Bien, et on ne teste jamais `moy >= 12` ni `moy >= 10` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Dans une structure `SI C1 ALORS S1 SINONSI C2 ALORS S2 SINONSI C3 ALORS S3 SINON S4 FINSI`, si `C1 = FAUX`, `C2 = VRAI` et `C3 = VRAI`, quelle(s) séquence(s) s’exécute(nt) ?',
              options: [
                'S2 et S3',
                'Uniquement S2',
                'Uniquement S3',
                'S1, S2 et S3',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès que la première condition vraie (`C2`) est rencontrée, sa séquence (`S2`) est exécutée et le contrôle saute immédiatement après `FINSI` : `C3` n’est même pas évaluée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Piège d’ordre',
            stepTheme: 'orange',
            stepTitle: 'Le piège fatal des bornes écrites dans le mauvais ordre',
            paragraphText:
              'La simplification des conditions dans un `SINONSI` repose entièrement sur le respect d’un ordre monotone (strictement décroissant pour `>`, ou strictement croissant pour `<`). Inverser cet ordre détruit la logique !\n' +
              '• **Contre-exemple catastrophique** : si l’on écrit `SI quantite > 5 ALORS prix ← 90 SINONSI quantite > 10 ALORS prix ← 80 SINONSI quantite > 60 ALORS prix ← 55`, alors pour `quantite = 80`, la première condition `80 > 5` est déjà VRAIE !\n' +
              '• **Conséquence** : les tranches `> 10` et `> 60` deviennent du **code mort** (inatteignable) et le client paie `90` au lieu de `55`.\n' +
              '• **Règle d’or** : avec `>` ou `>=`, toujours tester de la **plus grande borne** vers la **plus petite** ; avec `<` ou `<=`, toujours tester de la **plus petite borne** vers la **plus grande**.\n' +
              'Exemple : pour les mentions, on commence par `moy >= 16` (ou par `moy < 10`), jamais par `moy >= 10` en premier.',
            keyRule:
              'Avec `>` / `>=`, ordonne tes seuils du plus grand au plus petit ; avec `<` / `<=`, ordonne tes seuils du plus petit au plus grand.',
            konanTip:
              'Un test rapide pour repérer une tranche morte : prends la valeur la plus extrême (ex. `quantite = 100` ou `note = 19`) et vérifie qu’elle tombe bien dans la bonne branche !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Un étudiant écrit : `SI note >= 10 ALORS m ← "Passable" SINONSI note >= 14 ALORS m ← "Bien" SINON m ← "Ajourné" FINSI`. Que vaut `m` si `note = 17` ?',
              options: [
                '"Bien"',
                '"Passable"',
                '"Ajourné"',
                'Erreur d’exécution',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour `note = 17`, la toute première condition `17 >= 10` est déjà VRAIE ! L’algorithme affecte `"Passable"` et saute au `FINSI`. La branche `note >= 14` est inatteignable car les seuils `>=` n’ont pas été classés par ordre décroissant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Tarifs par tranches',
            stepTheme: 'green',
            stepTitle: 'Concevoir un barème dégressif propre avec des constantes',
            paragraphText:
              'Dans la gestion commerciale (frais Mobile Money, tarifs d’électricité, ventes en gros), les seuils et tarifs évoluent régulièrement : il faut éviter les « nombres magiques » dispersés dans le code.\n' +
              '• **Déclarer les seuils en `CONSTANTES`** : `BORNE_1 = 5 ; BORNE_2 = 10 ; BORNE_3 = 30 ; BORNE_4 = 60` et `PRIX_1 = 100 ... PRIX_5 = 55`.\n' +
              '• **Écrire la cascade décroissante** : `SI q > BORNE_4` → `PRIX_5`, `SINONSI q > BORNE_3` → `PRIX_4`, `SINONSI q > BORNE_2` → `PRIX_3`, `SINONSI q > BORNE_1` → `PRIX_2`, `SINON` → `PRIX_1`.\n' +
              '• **Vérifier les valeurs frontières** : pour `q = 30` exactement, `30 > 30` est FAUX, mais `30 > 10` est VRAI → `PRIX_3` (`80`).\n' +
              'Exemple : si l’entreprise actualise `BORNE_4` de `60` à `50` kg, une seule ligne de constante est modifiée et tout l’algorithme reste cohérent.',
            keyRule:
              'Toujours tester les valeurs exactement égales aux bornes (`q = 5`, `q = 10`, `q = 30`, `q = 60`) pour vérifier la distinction cruciale entre `>` (strict) et `>=` (large).',
            konanTip:
              'Dans un barème, demande-toi toujours : « Si la quantité vaut exactement la borne 30, le client bénéficie-t-il déjà du tarif réduit ou faut-il dépasser 30 ? »',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Dans l’algorithme `Tarifs` (`SI q > 60 → 55 SINONSI q > 30 → 70 SINONSI q > 10 → 80 SINONSI q > 5 → 90 SINON → 100`), quel prix unitaire obtient-on pour `q = 30` exactement ?',
              options: [
                '55',
                '70',
                '80',
                '90',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour `q = 30` : `30 > 60` est FAUX ; `30 > 30` est FAUX (inégalité stricte `>`) ; `30 > 10` est VRAI → on applique `PRIX_3 = 80`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Partition',
            stepTheme: 'violet',
            stepTitle: 'Garantir une partition exhaustive et sans chevauchement',
            paragraphText:
              'Une structure de choix rigoureuse doit couvrir **100 % des valeurs possibles** (exhaustivité) sans ambiguïté entre deux cas (disjonction).\n' +
              '• **Disjonction implicite du `SINONSI`** : même si les conditions écrites semblent se chevaucher (`q > 30` et `q > 10`), le `SINONSI` garantit que la seconde ne s’évalue que sous `q <= 30`, donc sur l’intervalle disjoint $]10 ; 30]$.\n' +
              '• **Rôle sécurisant du `SINON` final** : il capte toute valeur résiduelle, y compris les saisies aberrantes si aucune validation préalable n’a été faite.\n' +
              '• **Contrôle des entrées invalides** : avant un barème de quantités ou de notes, placer `SI note < 0 OU note > 20 ALORS ECRIRE("Note invalide")` en tête de cascade élimine les calculs absurdes.\n' +
              'Exemple : pour une note sur 20, tester d’abord `note < 0 OU note > 20` garantit que `note = 25` ne reçoive pas la mention `"Très Bien"` !',
            keyRule:
              'Toujours filtrer les données hors domaine (négatives, nulles ou hors bornes) EN TÊTE de cascade avant d’appliquer les tranches métier.',
            konanTip:
              'C’est un grand classique de piège : si tu testes `note >= 16` en premier sans vérifier `note <= 20`, une erreur de frappe `note = 180` affichera « Très Bien » !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Quel premier test faut-il placer en tête d’une cascade de mentions (notes valides entre 0 et 20 inclus) pour rejeter immédiatement toute saisie incohérente ?',
              options: [
                'SI note >= 0 ET note <= 20 ALORS ECRIRE("Invalide")',
                'SI note < 0 ET note > 20 ALORS ECRIRE("Invalide")',
                'SI note < 0 OU note > 20 ALORS ECRIRE("Invalide")',
                'SI note = 0 ALORS ECRIRE("Invalide")',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une note est invalide si elle est strictement inférieure à 0 OU strictement supérieure à 20 (`note < 0 OU note > 20`). Avec `ET`, la condition serait toujours FAUSSE car aucun nombre n’est simultanément `< 0` et `> 20`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Imbrication',
            stepTheme: 'orange',
            stepTitle: 'Résoudre l’ambiguïté du `SINON` dans les `SI` imbriqués',
            paragraphText:
              'Lorsqu’un `SI` est imbriqué à l’intérieur d’un autre `SI` (par exemple pour combiner deux critères indépendants : âge ET statut étudiant), il faut savoir précisément à quel `SI` se rattache chaque `SINON`.\n' +
              '• **Règle d’appariement** : chaque `SINON` appartient au `SI` le plus récemment ouvert qui n’a pas encore été refermé par un `FINSI`.\n' +
              '• **Protection par `FINSI` explicite** : en pseudo-code algorithmique, la présence obligatoire de `FINSI` pour chaque `SI` lève toute ambiguïté (contrairement au célèbre « dangling else » en langage C/Java sans accolades).\n' +
              '• **Alternative plus claire** : lorsque la profondeur d’imbrication dépasse 2 niveaux, combiner les conditions avec `ET` ou utiliser un sous-programme améliore nettement la lisibilité.\n' +
              'Exemple : `SI mois = 2 ALORS (SI bis ALORS nbJ ← 29 SINON nbJ ← 28 FINSI) FINSI` — le `SINON` interne concerne bien `bis`, pas `mois = 2`.',
            keyRule:
              'Compte systématiquement autant de `FINSI` que de `SI` ouverts, et aligne verticalement chaque `SI`, son `SINON` et son `FINSI`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Soient `a = 3` et `b = 10`. On exécute : `SI a > 5 ALORS (SI b > 5 ALORS res ← 1 SINON res ← 2 FINSI) SINON res ← 3 FINSI`. Que vaut `res` ?',
              options: [
                '1',
                '2',
                '3',
                'res reste non initialisée',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La condition externe `a > 5` (`3 > 5`) est FAUSSE. Tout le bloc interne `(SI b > 5 ... FINSI)` est ignoré et on passe directement au `SINON` externe qui exécute `res ← 3`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas d’usage',
            stepTheme: 'slate',
            stepTitle: 'Calcul de frais de transfert Mobile Money par paliers',
            paragraphText:
              'Les opérateurs fintech en zone UEMOA appliquent des grilles tarifaires par paliers qui constituent une application directe de `SI … SINONSI … FINSI`.\n' +
              '• **Règles tarifaires** : pour un transfert `m` en FCFA : si `m <= 0`, afficher `"Montant invalide"` ; si `m <= 5000`, frais = `100` ; si `m <= 50000`, frais = `500` ; sinon (`m > 50000`), frais = `1%` du montant (`0.01 * m`).\n' +
              '• **Ordre croissant cohérent** : ici on utilise `<=`, donc on teste de la plus petite borne (`0`) vers la plus grande (`5000`, puis `50000`).\n' +
              '• **Trace rapide** : pour `m = 120000`, `<= 0` (F), `<= 5000` (F), `<= 50000` (F) → `SINON` → `frais ← 0.01 * 120000 = 1200 FCFA`.\n' +
              'Exemple : pour `m = 5000`, le test `m <= 5000` est VRAI, donnant exactement `100 FCFA` de frais.',
            keyRule:
              'Vérifier la cohérence globale entre opérateur (`<=` en ordre croissant vs `>` en ordre décroissant) évite toute anomalie sur les paliers financiers.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Selon la grille Mobile Money ci-dessus (`m <= 0` invalide, `m <= 5000 → 100`, `m <= 50000 → 500`, sinon `1%` de `m`), quels sont les frais pour un transfert de `45 000 FCFA` ?',
              options: [
                '100 FCFA',
                '450 FCFA',
                '500 FCFA',
                '4500 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour `m = 45000` : `m <= 0` est FAUX, `m <= 5000` est FAUX, `m <= 50000` est VRAI → les frais sont fixes à `500 FCFA` (le taux de `1%` ne s’applique qu’au-delà de `50 000 FCFA`).',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_algo_ch2_p3',
        order: 3,
        title: 'Instruction à choix multiple (`SELON … DANS … AUTREMENT … FINSELON`)',
        summary:
          'Employer efficacement `SELON` sur un sélecteur énumérable (entier ou caractère), respecter la disjonction des listes et choisir entre `SELON` et `SINONSI`.',
        conceptExplanation:
          'Lorsque les différents cas d’un choix dépendent tous de **l’égalité d’une même expression** (le **sélecteur**) par rapport à des valeurs discrètes constantes, l’instruction **`SELON <sélecteur> DANS ... [AUTREMENT : ...] FINSELON`** est bien plus claire et concise que des `SI` imbriqués.\n\n' +
          'Le sélecteur est évalué une seule fois, puis recherché dans les listes de valeurs de haut en bas. Dès qu’une correspondance est trouvée, la séquence associée s’exécute puis le flux saute après `FINSELON`. Si aucune liste ne correspond, la clause facultative `AUTREMENT` est exécutée.\n\n' +
          'Deux contraintes strictes s’appliquent : (1) le sélecteur doit être d’un **type énumérable** (`ENTIER` ou `CARACTERE`, jamais `REEL` ni `CHAINE` en algorithmique standard) ; (2) toutes les listes de valeurs doivent être **disjointes** (aucune valeur dupliquée dans deux branches).',
        formulas: [
          {
            name: 'Structure générale de SELON',
            formula: '\\text{SELON } E \\text{ DANS } L_1 : S_1 \\; | \\; L_2 : S_2 \\; | \\; \\text{AUTREMENT} : S_0 \\; \\text{FINSELON}',
            note: 'E est de type ENTIER ou CARACTERE ; les listes L1, L2, ... sont deux à deux disjointes.',
          },
        ],
        keyRule:
          '`SELON` s’utilise uniquement pour des tests d’égalité sur un sélecteur de type `ENTIER` ou `CARACTERE` avec des listes de valeurs constantes et disjointes ; pour des intervalles (`REEL`, `<`, `>`), utilise `SI … SINONSI`.',
        workedExample: {
          title: 'Nombre de jours d’un mois donné avec prise en compte des années bissextiles',
          statement:
            'Écrire le cœur de l’algorithme `NombreDeJours` qui, à partir d’un numéro de `mois` (1 à 12) et d’un millésime `an`, détermine `nbJ` à l’aide de `SELON`.',
          methodSteps: [
            'Calculer le booléen `bis ← ((an mod 4 = 0) ET (an mod 100 <> 0)) OU (an mod 400 = 0)`.',
            'Ouvrir `SELON mois DANS` : le sélecteur `mois` est bien de type `ENTIER`.',
            'Lister les trois groupes disjoints : `1, 3, 5, 7, 8, 10, 12 : nbJ ← 31` ; `4, 6, 9, 11 : nbJ ← 30` ; `2 : SI bis ALORS nbJ ← 29 SINON nbJ ← 28 FINSI`.',
            'Ajouter `AUTREMENT : nbJ ← 0` pour capturer tout entier hors de `{1..12}`, puis fermer `FINSELON`.',
          ],
          conclusion:
            'Pour `mois = 2` et `an = 2024`, `bis = VRAI` donc `nbJ = 29` ; pour `mois = 15`, la clause `AUTREMENT` fixe `nbJ = 0` et signale l’erreur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'SELON',
            stepTheme: 'blue',
            stepTitle: 'Syntaxe et déroulement exact de `SELON … FINSELON`',
            paragraphText:
              'L’instruction à choix multiple `SELON` remplace élégamment une longue chaîne de tests d’égalité portant sur une même variable.\n' +
              '• **Évaluation unique** : l’expression sélecteur placée après `SELON` est évaluée une seule fois.\n' +
              '• **Recherche séquentielle** : la valeur obtenue est comparée aux listes de valeurs écrites avant chaque `:` ; dès qu’elle appartient à une liste, la séquence correspondante s’exécute puis on sort directement au `FINSELON`.\n' +
              '• **Clause `AUTREMENT`** : facultative mais vivement recommandée, elle traite tous les cas non prévus (saisie erronée, option inconnue d’un menu).\n' +
              'Exemple : pour une calculatrice simple avec un opérateur `op : CARACTERE`, `SELON op DANS ’+’ : res ← a + b ; ’-’ : res ← a - b ; ’*’ : res ← a * b ; AUTREMENT : ECRIRE("Opérateur inconnu") FINSELON`.',
            keyRule:
              'Contrairement au `switch` du langage C (qui nécessite un `break`), le `SELON` algorithmique sort automatiquement après avoir exécuté la branche trouvée.',
            konanTip:
              'Inclure systématiquement une clause `AUTREMENT` sécurise tes algorithmes face aux saisies imprévues de l’utilisateur.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Dans un `SELON code DANS 1 : x ← 10 ; 2, 3 : x ← 20 ; AUTREMENT : x ← 0 FINSELON`, que se passe-t-il si `code = 2` ?',
              options: [
                'x reçoit 20, puis 0 dans AUTREMENT.',
                'x reçoit uniquement 20, puis l’exécution passe directement après FINSELON.',
                'x reçoit 10 puis 20.',
                'Une erreur se produit car la deuxième branche contient deux valeurs.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une branche de `SELON` peut regrouper plusieurs valeurs séparées par des virgules (`2, 3`). Dès que `code = 2` correspond, `x ← 20` s’exécute et le programme saute immédiatement après `FINSELON`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Contraintes',
            stepTheme: 'orange',
            stepTitle: 'Restrictions de type du sélecteur et disjonction des listes',
            paragraphText:
              'L’instruction `SELON` n’est pas universelle : elle obéit à deux règles de validité rigoureuses souvent testées en évaluation.\n' +
              '• **Type énumérable obligatoire** : le sélecteur doit être de type `ENTIER` ou `CARACTERE` ; il ne peut PAS être de type `REEL` (infinité non dénombrable et imprécision flottante) ni `CHAINE` en algorithmique classique.\n' +
              '• **Listes deux à deux disjointes** : une même valeur ne doit jamais apparaître dans deux branches différentes (ex. `1, 2 : ...` et `2, 3 : ...` est invalide car `2` est dupliqué).\n' +
              '• **Valeurs constantes uniquement** : les étiquettes des cas doivent être des constantes connues, pas des conditions comme `> 10`.\n' +
              'Exemple : `SELON noteReel DANS` (avec `noteReel : REEL`) ou `SELON nomVille DANS` (avec `nomVille : CHAINE`) doit être remplacé par `SI … SINONSI`.',
            keyRule:
              'Sélecteur de `SELON` = `ENTIER` ou `CARACTERE` uniquement, avec des listes de valeurs constantes strictement disjointes.',
            konanTip:
              'Retiens le moyen mnémotechnique : « SELON = Égalité sur Entier ou Caractère ». Dès que tu vois un `REEL`, une `CHAINE` ou un `<` / `>`, dégaine `SI … SINONSI` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Parmi ces quatre utilisations de `SELON`, laquelle est STRICTEMENT VALIDE en algorithmique ?',
              options: [
                'SELON prixReel DANS 10.5 : ... 20.0 : ... FINSELON (prixReel : REEL)',
                'SELON ville DANS "Abidjan" : ... "Bouaké" : ... FINSELON (ville : CHAINE)',
                'SELON jour DANS 1, 2, 3 : ... 3, 4, 5 : ... FINSELON (jour : ENTIER)',
                'SELON touche DANS ’O’, ’o’ : ... ’N’, ’n’ : ... AUTREMENT : ... FINSELON (touche : CARACTERE)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Seule l’option D respecte toutes les règles : le sélecteur `touche` est de type `CARACTERE` (énumérable) et les listes `{’O’, ’o’}` et `{’N’, ’n’}` sont strictement disjointes. Les options A (`REEL`), B (`CHAINE`) et C (`3` en doublon) sont invalides.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Calendrier',
            stepTheme: 'slate',
            stepTitle: 'Imbriquer un `SI` dans un `SELON` : l’algorithme `NombreDeJours`',
            paragraphText:
              'On peut parfaitement placer n’importe quelle instruction structurée (comme un `SI … SINON`) à l’intérieur d’une branche de `SELON`.\n' +
              '• **Cas des mois à 31 jours** : `1, 3, 5, 7, 8, 10, 12 : nbJ ← 31`.\n' +
              '• **Cas des mois à 30 jours** : `4, 6, 9, 11 : nbJ ← 30`.\n' +
              '• **Cas particulier de février (`2`)** : `2 : SI bis ALORS nbJ ← 29 SINON nbJ ← 28 FINSI`, où `bis` est calculé en amont.\n' +
              '• **Cas d’erreur (`AUTREMENT`)** : `nbJ ← 0`, exploité après le `FINSELON` par `SI nbJ = 0 ALORS ECRIRE("Mois invalide") SINON ECRIRE(nbJ, " jours") FINSI`.\n' +
              'Exemple : cette séparation entre calcul (`nbJ ← 0` comme code sentinelle d’erreur) et affichage final rend l’algorithme très propre et réutilisable.',
            keyRule:
              'Utiliser une valeur sentinelle (`nbJ ← 0`) dans `AUTREMENT` permet de centraliser la gestion de l’affichage après le `FINSELON`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Dans l’algorithme `NombreDeJours`, que renvoie l’algorithme si l’utilisateur saisit `mois = 2` et `an = 2100` ?',
              options: [
                '29 jours car 2100 est divisible par 4.',
                '28 jours car 2100 est divisible par 100 mais pas par 400, donc `bis` vaut FAUX.',
                '30 jours.',
                'Message d’erreur (`nbJ = 0`).',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Calcul de `bis` pour `2100` : `2100 mod 4 = 0`, mais `2100 mod 100 = 0` (donc `<> 0` est FAUX), et `2100 mod 400 = 100 <> 0` (FAUX). Ainsi `bis = FAUX`, et la branche `2` affecte `nbJ ← 28`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Arbitrage',
            stepTheme: 'green',
            stepTitle: 'Bien choisir entre `SI`, `SI … SINONSI` et `SELON`',
            paragraphText:
              'Un bon développeur choisit la structure de choix la plus expressive pour le problème posé.\n' +
              '• **`SI … ALORS` simple** : une action optionnelle à déclencher dans un seul cas (ex. appliquer une remise fidélité).\n' +
              '• **`SI … ALORS … SINON`** : exactement deux issues mutuellement exclusives (ex. pair/impair, admis/ajourné).\n' +
              '• **`SI … SINONSI … SINON`** : plus de deux cas basés sur des **intervalles**, des **réels**, des **chaînes** ou des **conditions complexes** (`ET`/`OU`).\n' +
              '• **`SELON … DANS … AUTREMENT`** : plus de deux cas basés sur l’**égalité** d’une même expression `ENTIER` ou `CARACTERE` avec des constantes discrètes (ex. menu USSD `*144#` : `1` Transfert, `2` Achat crédit, `3` Solde).\n' +
              'Exemple : un menu interactif USSD avec choix `1..5` s’écrit idéalement avec `SELON`, tandis que le calcul de l’impôt progressif sur le revenu s’écrit avec `SI … SINONSI`.',
            keyRule:
              'Tout `SELON` peut se réécrire avec `SI … SINONSI`, mais la réciproque est fausse (les inégalités sur réels ne peuvent pas s’écrire en `SELON`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Quelle structure est la PLUS adaptée pour traiter le choix entier `option` (`1` : Dépôt, `2` : Retrait, `3` : Solde, `4` : Quitter) d’un menu USSD ?',
              options: [
                'Quatre `SI` simples indépendants.',
                'Une instruction `SELON option DANS` avec clause `AUTREMENT`.',
                'Une boucle `POUR` de 1 à 4.',
                'Une concaténation de chaînes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On compare une unique variable entière `option` à quatre constantes discrètes disjointes (`1, 2, 3, 4`) avec gestion d’erreur (`AUTREMENT`) : c’est le cas d’école exact de `SELON`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Équivalence',
            stepTheme: 'violet',
            stepTitle: 'Traduction rigoureuse entre `SELON` et `SI … SINONSI`',
            paragraphText:
              'Savoir passer d’une structure à l’autre garantit la maîtrise des langages qui ne disposent pas tous de la même syntaxe de choix multiple.\n' +
              '• **Règle de conversion** : chaque liste `v1, v2, v3 : S` dans `SELON x DANS` correspond au test `x = v1 OU x = v2 OU x = v3` (ou `x ∈ {v1, v2, v3}`) dans un `SI / SINONSI`.\n' +
              '• **Clause `AUTREMENT`** : elle devient exactement la branche `SINON` terminale de la cascade.\n' +
              '• **Simplification par `mod`** : on peut utiliser une expression entière comme sélecteur, par exemple `SELON (n mod 3) DANS 0 : ... 1 : ... 2 : ... FINSELON`.\n' +
              'Exemple : `SELON noteEntiere div 2 DANS` permet même de regrouper des paires d’entiers consécutifs sans écrire de longues listes.',
            keyRule:
              'Le sélecteur d’un `SELON` n’est pas limité à une variable simple : il peut être toute expression calculée de type `ENTIER` ou `CARACTERE`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Quelle valeur affiche `SELON (17 mod 4) DANS 0 : ECRIRE("A") ; 1 : ECRIRE("B") ; 2 : ECRIRE("C") ; AUTREMENT : ECRIRE("D") FINSELON` ?',
              options: [
                'A',
                'B',
                'C',
                'D',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On évalue d’abord le sélecteur : `17 = 4 × 4 + 1`, donc `17 mod 4 = 1`. La branche `1` est sélectionnée et affiche `"B"`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Calculatrice sécurisée avec `SELON` sur un opérateur caractère',
            paragraphText:
              'Combinons `SELON` sur un caractère et protection de la division par zéro pour concevoir une mini-calculatrice fiable.\n' +
              '• **Entrées** : `a, b : REEL` et `op : CARACTERE` (`’+’`, `’-’`, `’*’`, `’/’`).\n' +
              '• **Traitement** : dans `SELON op DANS`, les trois premières branches calculent `a + b`, `a - b`, `a * b` ; la branche `’/’` imbrique `SI b <> 0 ALORS ECRIRE(a / b) SINON ECRIRE("Division par zéro impossible") FINSI`.\n' +
              '• **Sécurité de saisie** : la clause `AUTREMENT` affiche `"Opérateur non reconnu"` si l’utilisateur tape `’%’` ou `’x’`.\n' +
              'Exemple : pour `a = 12, b = 0, op = ’/’`, l’algorithme intercepte proprement la division par zéro sans interrompre le programme.',
            keyRule:
              'Combiner `SELON` (dispatch par commande) et `SI` interne (validation métier de la commande) est le schéma de base de tout interpréteur de commandes.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Dans cette calculatrice, si `a = 15`, `b = 0` et `op = ’*’`, quelle branche s’exécute et quel est l’affichage ?',
              options: [
                'Branche `’/’` → `"Division par zéro impossible"`',
                'Branche `’*’` → `0`',
                'Clause `AUTREMENT` → `"Opérateur non reconnu"`',
                'Erreur d’exécution car `b = 0`',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le sélecteur vaut `’*’`, donc seule la branche `’*’` s’exécute (`15 * 0 = 0`). Le test `b <> 0` n’est évalué que dans la branche `’/’`.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Structures répétitives (boucles) et schémas d’accumulation
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch3',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Algorithmique',
    title: 'Chapitre 3 — Structures répétitives (boucles) et schémas d’accumulation',
    summary:
      'Boucle TANTQUE (test en entrée, terminaison et boucle infinie), boucle REPETER … JUSQUA (test en sortie, validation de saisie), boucle POUR (pas croissant/décroissant), accumulateurs et traitement de listes avec sentinelle.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch3_p1',
        order: 1,
        title: 'Boucle `TANTQUE` (contrôle en entrée), terminaison et boucle infinie',
        summary:
          'Maîtriser la répétition conditionnelle testée avant chaque itération, garantir la terminaison et éviter la boucle infinie.',
        conceptExplanation:
          'L’instruction répétitive **`TANTQUE <condition> FAIRE <séquence> FINTANTQUE`** répète l’exécution d’un bloc d’instructions aussi longtemps que `<condition>` reste évaluée à `VRAI`.\n\n' +
          'Le contrôle s’effectue **à l’entrée** (avant chaque tour) : si `<condition>` est déjà `FAUX` au tout premier test, la séquence n’est exécutée **zéro fois** et l’algorithme passe immédiatement après `FINTANTQUE`. Sinon, la séquence s’exécute puis le contrôle revient réévaluer `<condition>`.\n\n' +
          'Trois conditions de validité sont vitales : (1) `<condition>` doit être évaluable avant le premier test ; (2) le corps de la boucle doit **modifier au moins une variable intervenant dans `<condition>`** ; (3) cette évolution doit finir par rendre `<condition>` fausse (terminaison), sous peine de provoquer une **boucle infinie**.',
        formulas: [
          {
            name: 'Boucle TANTQUE (0 à N itérations)',
            formula: '\\text{TANTQUE } C \\text{ FAIRE } S \\text{ FINTANTQUE} \\quad (\\text{exécution } \\ge 0 \\text{ fois})',
            note: 'À la sortie normale de la boucle, on est mathématiquement certain que `NON C` est VRAI.',
          },
        ],
        keyRule:
          'Dans une boucle `TANTQUE`, vérifie toujours trois points : initialisation avant la boucle, test en entrée (0 itération possible), et mise à jour dans le corps qui fait tendre la condition vers `FAUX`.',
        workedExample: {
          title: 'Diagnostic d’une boucle infinie classique',
          statement:
            'Analyser la séquence suivante : `a ← 1 ; b ← a ; TANTQUE a < 100 FAIRE b ← b * 5 ; ECRIRE(b) ; FINTANTQUE`. Pourquoi cet algorithme ne s’arrête-t-il jamais et comment le corriger ?',
          methodSteps: [
            'Initialisation : `a = 1`, `b = 1`. Test d’entrée : `a < 100` (`1 < 100`) est `VRAI`.',
            'Tour 1 : `b` passe à `5`, affiche `5`, mais `a` reste à `1`.',
            'Tour 2 : `a < 100` (`1 < 100`) est toujours `VRAI` ! `b` passe à `25`, `125`, `625`, ... indéfiniment.',
            'Cause : la variable testée dans la condition (`a`) n’est jamais modifiée dans le corps de la boucle. Correction : tester `b < 100` (ou modifier `a` à chaque tour).',
          ],
          conclusion:
            'En remplaçant la condition par `TANTQUE b < 100 FAIRE`, la trace donne `b = 5` (VRAI), `b = 25` (VRAI), `b = 125` (`125 < 100` FAUX → arrêt propre après 3 tours).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'TANTQUE',
            stepTheme: 'blue',
            stepTitle: 'Mécanisme de la boucle `TANTQUE` (test en entrée)',
            paragraphText:
              'La boucle `TANTQUE` est la structure itérative la plus générale : elle s’emploie lorsque l’on ne connaît pas à l’avance le nombre exact de répétitions nécessaires.\n' +
              '• **Test préalable** : avant même la première exécution du corps, `<condition>` est évaluée. Si elle vaut `FAUX`, le corps est sauté (**0 itération**).\n' +
              '• **Cycle répétitif** : tant que `<condition>` est `VRAI`, la séquence entre `FAIRE` et `FINTANTQUE` s’exécute intégralement, puis le flux remonte automatiquement réévaluer `<condition>`.\n' +
              '• **Post-condition garantie** : lorsqu’on franchit `FINTANTQUE`, la condition est obligatoirement devenue `FAUX`.\n' +
              'Exemple : dans l’algorithme d’épargne, si `somme = 0` et `sommeFinale = 0`, `0 < 0` est `FAUX` dès l’entrée : la boucle `TANTQUE somme < sommeFinale` fait 0 tour.',
            visualSchema: {
              type: 'flowchart',
              title: 'Organigramme de la boucle TANTQUE (contrôle à l’entrée)',
              caption: 'La condition est évaluée avant chaque exécution du corps ; le corps doit faire évoluer la condition vers FAUX.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: 'Initialisation des variables', sublabel: 'Rendre la condition évaluable', kind: 'start', color: 'slate' },
                  {
                    label: '<condition> est-elle VRAI ?',
                    sublabel: 'Contrôle en entrée (0 itération possible)',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'FAUX → Sortie',
                    branchTarget: 'Instruction après FINTANTQUE',
                  },
                  { label: 'Exécution de la <séquence>', sublabel: 'Traitement métier (calcul, lecture, affichage)', kind: 'process', color: 'blue' },
                  { label: 'Mise à jour du variant', sublabel: 'Modifie au moins une variable de <condition>', kind: 'process', color: 'green' },
                  { label: 'Retour au test <condition>', sublabel: 'Bouclage jusqu’à ce que <condition> devienne FAUX', kind: 'end', color: 'violet' },
                ],
              },
            },
            keyRule:
              'Une boucle `TANTQUE` peut s’exécuter 0 fois si sa condition d’entrée est fausse dès le départ.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Combien de fois s’exécute le corps de la boucle : `x ← 10 ; TANTQUE x < 5 FAIRE x ← x + 1 ; ECRIRE(x) ; FINTANTQUE` ?',
              options: [
                '1 fois',
                '5 fois',
                '0 fois',
                'Une infinité de fois',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dès le tout premier test en entrée, `10 < 5` vaut `FAUX`. Le corps de la boucle `TANTQUE` n’est donc jamais exécuté (0 fois).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Boucle infinie',
            stepTheme: 'orange',
            stepTitle: 'Repérer et prévenir une boucle infinie (terminaison)',
            paragraphText:
              'Une boucle infinie bloque définitivement l’exécution d’un programme ; elle survient dès que la condition de maintien reste bloquée à `VRAI`.\n' +
              '• **Cause 1 — Oubli de mise à jour** : la variable testée (`a` dans `TANTQUE a < 100`) n’est jamais modifiée dans le corps (qui ne modifie que `b`).\n' +
              '• **Cause 2 — Mauvais sens d’évolution** : écrire `i ← i - 1` dans `TANTQUE i < 10` éloigne indéfiniment `i` de `10` au lieu de l’en rapprocher.\n' +
              '• **Cause 3 — Égalité manquée** : écrire `TANTQUE x <> 10 FAIRE x ← x + 2` en partant de `x = 1` passe par `3, 5, 7, 9, 11, ...` et saute par-dessus `10` ! Préférer `x < 10`.\n' +
              'Exemple : pour compter les paiements jusqu’à un plafond, utiliser `total < plafond` (inégalité) est toujours plus sûr que `total <> plafond`.',
            keyRule:
              'Pour prouver la terminaison d’un `TANTQUE`, identifie un « variant » entier positif qui décroît strictement à chaque tour vers la borne d’arrêt.',
            konanTip:
              'Évite `<>` comme condition de boucle sur un nombre qui s’incrémente par pas > 1 ou sur un `REEL` : préfère toujours `<`, `<=`, `>` ou `>=` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Laquelle de ces quatre boucles provoque une BOUCLE INFINIE ?',
              options: [
                'i ← 1 ; TANTQUE i <= 10 FAIRE i ← i + 3 FINTANTQUE',
                'i ← 1 ; TANTQUE i <> 10 FAIRE i ← i + 2 FINTANTQUE',
                'i ← 10 ; TANTQUE i > 0 FAIRE i ← i - 2 FINTANTQUE',
                'i ← 5 ; TANTQUE i < 5 FAIRE i ← i + 1 FINTANTQUE',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En partant de `i = 1` avec un pas de `+2`, `i` ne prend que des valeurs impaires (`1, 3, 5, 7, 9, 11, ...`) et ne vaut JAMAIS `10`. La condition `i <> 10` reste donc toujours VRAIE : boucle infinie !',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Accumulateurs',
            stepTheme: 'green',
            stepTitle: 'Compteurs, accumulateurs et moyenne d’une série à sentinelle',
            paragraphText:
              'Un usage majeur de `TANTQUE` consiste à traiter un flux de valeurs dont la taille n’est pas connue à l’avance, terminé par une **valeur sentinelle** (ex. `-1` ou `0`).\n' +
              '• **Lecture d’amorce (priming read)** : lire la première valeur AVANT le `TANTQUE` afin que la condition `val <> -1` soit évaluable dès l’entrée.\n' +
              '• **Traitement dans le corps** : mettre à jour l’accumulateur (`somme ← somme + val`) et le compteur (`nb ← nb + 1`), PUIS relire la valeur suivante EN FIN de boucle.\n' +
              '• **Protection de la division** : après la boucle, tester `SI nb > 0 ALORS moy ← somme / nb` (au cas où l’utilisateur saisirait `-1` immédiatement).\n' +
              'Exemple : pour calculer le chiffre d’affaires moyen d’un marchand ambulant à Adjamé en saisissant chaque vente jusqu’à `0`, la sentinelle `0` n’est jamais ajoutée ni comptée.',
            formula: {
              name: 'Patron « Lecture d’amorce + TANTQUE sentinelle »',
              formula: '\\text{LIRE}(x) \\; ; \\; \\text{TANTQUE } x \\neq \\text{SENTINELLE FAIRE traiter}(x) \\; ; \\; \\text{LIRE}(x) \\; \\text{FINTANTQUE}',
              note: 'La sentinelle arrête immédiatement la boucle sans jamais être traitée comme une donnée valide.',
            },
            keyRule:
              'Avec une sentinelle dans un `TANTQUE`, toujours lire AVANT la boucle (amorce) et relire à la TOUTE FIN du corps de boucle.',
            konanTip:
              'Si tu mets `LIRE(x)` en début du corps de boucle, la sentinelle sera additionnée à `somme` et comptera dans `nb` — un piège ultra-classique d’examen !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q3',
              type: 'mcq',
              prompt: 'On veut additionner des prix positifs saisis au clavier jusqu’à ce que l’utilisateur saisisse `-1` (sentinelle qui ne doit PAS être additionnée). Quelle structure est exacte ?',
              options: [
                'somme ← 0 ; TANTQUE prix <> -1 FAIRE LIRE(prix) ; somme ← somme + prix FINTANTQUE',
                'somme ← 0 ; LIRE(prix) ; TANTQUE prix <> -1 FAIRE somme ← somme + prix ; LIRE(prix) FINTANTQUE',
                'somme ← 0 ; LIRE(prix) ; TANTQUE prix = -1 FAIRE somme ← somme + prix FINTANTQUE',
                'somme ← -1 ; TANTQUE prix > 0 FAIRE LIRE(prix) ; somme ← somme + prix FINTANTQUE',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’option B effectue la lecture d’amorce avant le `TANTQUE` (rendant `prix` évaluable), n’ajoute `prix` que s’il est différent de `-1`, puis lit le prix suivant en fin de boucle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Algorithmes classiques',
            stepTheme: 'violet',
            stepTitle: 'Division par soustractions, PGCD d’Euclide et extraction de chiffres',
            paragraphText:
              'De nombreux algorithmes arithmétiques célèbres s’expriment naturellement avec `TANTQUE` parce que le nombre d’étapes dépend des valeurs d’entrée.\n' +
              '• **Algorithme d’Euclide (PGCD)** : `TANTQUE b <> 0 FAIRE r ← a mod b ; a ← b ; b ← r FINTANTQUE` — à la sortie, `a` contient le $\\text{PGCD}(a_0, b_0)$.\n' +
              '• **Nombre de chiffres d’un entier $n > 0$** : `nb ← 0 ; TANTQUE n > 0 FAIRE n ← n div 10 ; nb ← nb + 1 FINTANTQUE`.\n' +
              '• **Somme des chiffres** : en ajoutant `s ← s + (n mod 10)` avant `n ← n div 10`, on cumule chaque chiffre de droite à gauche.\n' +
              'Exemple : pour `n = 247`, tour 1 : chiffre `7`, `n ← 24` ; tour 2 : chiffre `4`, `n ← 2` ; tour 3 : chiffre `2`, `n ← 0` → `3` chiffres, somme `13`.',
            formula: {
              name: 'Invariant de l’algorithme d’Euclide',
              formula: '\\text{PGCD}(a, b) = \\text{PGCD}(b,\\; a \\;\\text{mod}\\; b), \\quad \\text{arrêt dès que } b = 0',
              note: 'Le reste `b` diminue strictement à chaque tour (`0 <= r < b`), garantissant une terminaison très rapide.',
            },
            keyRule:
              'La combinaison `n mod 10` (extrait le dernier chiffre) et `n div 10` (supprime le dernier chiffre) dans un `TANTQUE n > 0` résout tous les problèmes de décomposition décimale.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Tracez l’algorithme d’Euclide `TANTQUE b <> 0 FAIRE r ← a mod b ; a ← b ; b ← r FINTANTQUE` avec `a = 48` et `b = 18`. Quelle est la valeur finale de `a` ?',
              options: [
                '3',
                '6',
                '12',
                '18',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tour 1 : `r = 48 mod 18 = 12`, `a ← 18`, `b ← 12`. Tour 2 : `r = 18 mod 12 = 6`, `a ← 12`, `b ← 6`. Tour 3 : `r = 12 mod 6 = 0`, `a ← 6`, `b ← 0`. Fin car `b = 0` : `PGCD(48, 18) = 6`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Invariant',
            stepTheme: 'green',
            stepTitle: 'Vérifier la justesse d’un `TANTQUE` grâce à la trace',
            paragraphText:
              'Pour s’assurer qu’une boucle `TANTQUE` ne commet pas d’erreur « d’un tour en trop ou en moins » (*off-by-one*), il faut simuler les 2 premiers tours et le dernier tour.\n' +
              '• **Règle de contrôle des bornes** : distinguer soigneusement `i < n` de `i <= n`.\n' +
              '• **Exemple de trace** : soit `s ← 0 ; i ← 1 ; TANTQUE i <= 4 FAIRE s ← s + i ; i ← i + 1 FINTANTQUE`. Tours pour `i = 1, 2, 3, 4` → `s` devient `1, 3, 6, 10`, puis `i` passe à `5`, `5 <= 4` est FAUX → sortie avec `s = 10` et `i = 5`.\n' +
              '• **Attention à la valeur finale du compteur** : en sortie de `TANTQUE i <= 4`, `i` vaut `5` (et non `4`) !\n' +
              'Exemple : si un utilisateur affiche `i` après la boucle pour connaître le nombre de tours effectués, il affichera `5` au lieu de `4` s’il ne tient pas compte du dernier incrément.',
            keyRule:
              'À la sortie d’une boucle `TANTQUE i <= N` avec `i ← 1` au départ et `i ← i + 1`, la variable `i` vaut `N + 1`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Soit : `p ← 1 ; k ← 1 ; TANTQUE p < 20 FAIRE p ← p * 2 ; k ← k + 1 FINTANTQUE`. Quelles sont les valeurs finales de `p` et `k` à la sortie ?',
              options: [
                'p = 16 et k = 5',
                'p = 32 et k = 6',
                'p = 32 et k = 5',
                'p = 20 et k = 6',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Départ : `p=1, k=1`. Tour 1 : `p=2, k=2`. Tour 2 : `p=4, k=3`. Tour 3 : `p=8, k=4`. Tour 4 : `p=16, k=5` (`16 < 20` encore VRAI !). Tour 5 : `p=32, k=6` (`32 < 20` FAUX → sortie). Finalement `p = 32` et `k = 6`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Simulation',
            stepTheme: 'slate',
            stepTitle: 'Seuil de doublement d’un capital placé en FCFA',
            paragraphText:
              'Un entrepreneur place `C0 = 1 000 000 FCFA` sur un bon du Trésor UEMOA rapportant `6%` par an (intérêts composés) et veut savoir au bout de combien d’années son capital dépasse le double (`2 000 000 FCFA`).\n' +
              '• **Initialisation** : `capital ← C0 ; annees ← 0`.\n' +
              '• **Condition de poursuite** : `TANTQUE capital < 2 * C0 FAIRE`.\n' +
              '• **Corps** : `capital ← capital * 1.06 ; annees ← annees + 1`.\n' +
              '• **Résultat** : après 11 ans, $1{,}06^{11} \\approx 1{,}898$ (encore `< 2`) ; après 12 ans, $1{,}06^{12} \\approx 2{,}012$ → la boucle s’arrête exactement à `annees = 12`.\n' +
              'Exemple : le nombre d’années n’étant pas connu avant l’exécution (il varie selon le taux saisi), `TANTQUE` est la structure idéale.',
            formula: {
              name: 'Capitalisation composée itérative',
              formula: 'C_{k+1} = C_k \\times (1 + t), \\quad \\text{arrêt dès que } C_k \\ge 2 C_0',
              note: 'Permet de trouver le seuil sans recourir aux logarithmes, directement par simulation itérative.',
            },
            keyRule:
              'Tout problème de recherche de seuil (« au bout de combien d’étapes atteint-on X ? ») se modélise par un `TANTQUE` avec compteur d’étapes initialisé à `0`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Dans l’algorithme de doublement de capital (`capital ← C0 ; annees ← 0 ; TANTQUE capital < 2 * C0 FAIRE ...`), pourquoi `TANTQUE` est-il préférable à `POUR` ?',
              options: [
                'Parce que `POUR` ne peut pas manipuler des nombres réels dans son corps.',
                'Parce que le nombre d’années nécessaires dépend du taux et n’est pas connu à l’avance avant d’entrer dans la boucle.',
                'Parce que `TANTQUE` exécute toujours au moins une itération.',
                'Parce que `POUR` ne permet pas d’additionner un compteur.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On ne connaît pas le nombre d’itérations à l’avance (il dépend de la croissance géométrique selon le taux) : la boucle conditionnelle `TANTQUE` est donc naturellement indiquée.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch3_p2',
        order: 2,
        title: 'Boucle `REPETER … JUSQUA` (contrôle en sortie) et validation de saisie',
        summary:
          'Maîtriser la répétition à test final (au moins 1 exécution), la négation de condition entre `TANTQUE` et `REPETER`, et les boucles de contrôle de saisie.',
        conceptExplanation:
          'L’instruction **`REPETER <séquence> JUSQUA <condition_de_sortie>`** est une boucle contrôlée **à la sortie** : la séquence d’instructions est d’abord exécutée **au moins une fois**, puis `<condition_de_sortie>` est évaluée.\n\n' +
          'Si `<condition_de_sortie>` vaut **`VRAI`**, on **sort** immédiatement de la boucle ; si elle vaut **`FAUX`**, on recommence la séquence. Attention au renversement logique fondamental par rapport à `TANTQUE` : `TANTQUE` s’écrit avec une **condition de continuation**, tandis que `REPETER … JUSQUA` s’écrit avec une **condition d’arrêt** (négation logique de la précédente, transformable par De Morgan).\n\n' +
          'Cette structure est la reine des **saisies contrôlées** (mot de passe, code PIN, note entre 0 et 20, lancer de dés jusqu’à obtenir 12) car il faut toujours saisir au moins une première fois avant de pouvoir tester la validité.',
        formulas: [
          {
            name: 'Dualité TANTQUE vs REPETER … JUSQUA',
            formula: '\\text{TANTQUE } C \\text{ FAIRE } S \\quad \\longleftrightarrow \\quad \\text{REPETER } S \\text{ JUSQUA } (\\text{NON } C)',
            note: 'Attention : cette équivalence n’est exacte que lorsque C est initialement VRAI (sinon REPETER exécute S une fois alors que TANTQUE ne l’exécute pas).',
          },
        ],
        keyRule:
          '`REPETER … JUSQUA` exécute TOUJOURS son corps au moins une fois, et S’ARRÊTE dès que sa condition devient `VRAI` (inverse de `TANTQUE` !).',
        workedExample: {
          title: 'Contrôle strict de saisie d’une note universitaire et lancer de deux dés',
          statement:
            '1) Écrire un contrôle de saisie obligeant l’utilisateur à entrer une note `n` dans `[0 ; 20]`. 2) Compter combien de lancers de deux dés `(d1, d2)` sont nécessaires pour obtenir un double six (`d1 + d2 = 12`).',
          methodSteps: [
            '1) Saisie contrôlée : `REPETER ECRIRE("Note [0..20] : ") ; LIRE(n) JUSQUA (n >= 0) ET (n <= 20)`. Si l’utilisateur tape `-3` ou `25`, la condition est FAUSSE → il doit ressaisir.',
            '2) Lancers de dés : initialiser `nbCoups ← 0`, puis `REPETER LIRE(d1) ; LIRE(d2) ; nbCoups ← nbCoups + 1 JUSQUA (d1 + d2 = 12)`.',
            'Vérifier la condition de sortie : dès que `d1 = 6` et `d2 = 6`, `d1 + d2 = 12` devient `VRAI` → sortie immédiate avec le nombre exact de coups.',
          ],
          conclusion:
            'Dans les deux cas, il faut effectuer au moins une saisie avant tout test : `REPETER … JUSQUA` évite la double lecture (lecture d’amorce) qu’imposerait un `TANTQUE`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'REPETER',
            stepTheme: 'blue',
            stepTitle: 'Syntaxe et comportement de `REPETER … JUSQUA`',
            paragraphText:
              'Certaines actions doivent impérativement avoir lieu au moins une fois avant que l’on puisse décider de recommencer ou de s’arrêter.\n' +
              '• **Exécution garantie $\\ge 1$ fois** : on entre directement dans le bloc `REPETER` sans test préalable.\n' +
              '• **Test de sortie à la fin** : après l’exécution complète de la séquence, on évalue `<condition_de_sortie>`.\n' +
              '• **Sens du test** : si la condition vaut `VRAI`, la boucle **s’arrête** ; si elle vaut `FAUX`, on repart au début de `REPETER`.\n' +
              'Exemple : pour compter les essais jusqu’à obtenir `12` avec deux dés (`nbCoups ← 0 ; REPETER LIRE(d1, d2) ; nbCoups ← nbCoups + 1 JUSQUA d1 + d2 = 12`), un premier lancer `(6, 6)` donne bien `nbCoups = 1` et sort aussitôt.',
            keyRule:
              'En français comme en algorithmique : « Répéter … JUSQU’À ce que la condition soit VRAIE » signifie qu’on boucle tant qu’elle est FAUSSE.',
            konanTip:
              'Note l’absence de mot-clé `FINREPETER` : le mot-clé `JUSQUA <condition>` joue lui-même le rôle de délimiteur de fin de bloc.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Soit `x ← 10 ; REPETER x ← x + 5 JUSQUA x > 10`. Combien de fois le corps s’exécute-t-il et quelle est la valeur finale de `x` ?',
              options: [
                '0 fois, x = 10',
                '1 fois, x = 15',
                '2 fois, x = 20',
                'Boucle infinie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Même si `x` vaut déjà `10`, `REPETER` exécute son corps une première fois : `x` devient `15`. On teste ensuite `15 > 10`, qui est `VRAI` → sortie immédiate avec `x = 15`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Négation',
            stepTheme: 'orange',
            stepTitle: 'Passer de `TANTQUE` à `REPETER … JUSQUA` sans inverser la logique',
            paragraphText:
              'Le piège numéro un lors de la conversion entre `TANTQUE` et `REPETER` consiste à recopier la même condition sans la nier !\n' +
              '• **Exemple sur l’épargne** : `TANTQUE somme < sommeFinale FAIRE ... FINTANTQUE` se traduit par `REPETER ... JUSQUA somme >= sommeFinale` (et NON `somme < sommeFinale`, qui sortirait dès le premier tour !).\n' +
              '• **Exemple avec De Morgan** : une saisie de note valide s’écrit `REPETER LIRE(n) JUSQUA (n >= 0) ET (n <= 20)`. En `TANTQUE` (avec lecture d’amorce), la condition de continuation devient la négation : `TANTQUE (n < 0) OU (n > 20) FAIRE LIRE(n) FINTANTQUE`.\n' +
              '• **Nuance cruciale sur 0 itération** : si `somme >= sommeFinale` est déjà vrai avant d’entrer, `TANTQUE` ne fait rien tandis que `REPETER` exécute un tour non voulu !\n' +
              'Exemple : pour convertir une boucle `TANTQUE` en `REPETER` dans le cas général, il faudrait l’entourer d’un `SI <condition> ALORS REPETER ... FINSI`.',
            formula: {
              name: 'Conversion par lois de De Morgan',
              formula: '\\text{JUSQUA } (n \\ge 0 \\;\\text{ET}\\; n \\le 20) \\iff \\text{TANTQUE } (n < 0 \\;\\text{OU}\\; n > 20)',
              note: 'La condition de sortie d’un REPETER est toujours la négation logique de la condition de maintien d’un TANTQUE.',
            },
            keyRule:
              'Pour transformer une condition `TANTQUE` en `JUSQUA` (ou inversement), applique systématiquement les lois de De Morgan : `<` ↔ `>=`, `=` ↔ `<>`, `ET` ↔ `OU`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Quelle condition `JUSQUA` correspond exactement à la poursuite `TANTQUE (code <> 1234) ET (essais < 3)` ?',
              options: [
                'JUSQUA (code = 1234) ET (essais >= 3)',
                'JUSQUA (code = 1234) OU (essais >= 3)',
                'JUSQUA (code <> 1234) OU (essais > 3)',
                'JUSQUA (code = 1234) OU (essais > 3)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On nie `(code <> 1234) ET (essais < 3)` par De Morgan : `NON(code <> 1234)` donne `code = 1234`, `ET` devient `OU`, et `NON(essais < 3)` donne `essais >= 3`. On s’arrête dès que le code est bon OU que 3 essais ont été consommés.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Contrôle de saisie',
            stepTheme: 'green',
            stepTitle: 'Sécuriser les saisies utilisateur avec message d’erreur ciblé',
            paragraphText:
              'Une application professionnelle ne doit jamais accepter un montant négatif ou un choix de menu inexistant. `REPETER … JUSQUA` permet une saisie robuste et conviviale.\n' +
              '• **Saisie contrôlée simple** : `REPETER ECRIRE("Montant > 0 : ") ; LIRE(m) JUSQUA m > 0`.\n' +
              '• **Avec retour d’erreur explicite** : on ajoute à l’intérieur de la boucle un `SI m <= 0 ALORS ECRIRE("Erreur : saisissez un montant strictement positif !") FINSI` juste avant `JUSQUA m > 0`.\n' +
              '• **Saisie de confirmation** : `REPETER LIRE(rep) JUSQUA (rep = ’O’) OU (rep = ’N’)` force l’utilisateur à répondre uniquement par `’O’` ou `’N’`.\n' +
              'Exemple : sur un terminal de paiement marchand, la saisie du code PIN est protégée par une boucle `REPETER` limitée à 3 tentatives avant blocage.',
            keyRule:
              'La boucle `REPETER … JUSQUA` est le patron standard de toute saisie contrôlée (bornes numériques, réponse Oui/Non, menu interactif).',
            konanTip:
              'N’oublie jamais le cas du nombre maximal d’essais dans une authentification : `JUSQUA (pin = PIN_SECRET) OU (essais = 3)`, puis un `SI` après la boucle pour distinguer « accès accordé » de « carte bloquée » !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Un utilisateur doit saisir un numéro de mois entier valide (entre 1 et 12 inclus). Quelle boucle garantit une saisie valide ?',
              options: [
                'REPETER LIRE(mois) JUSQUA (mois < 1) OU (mois > 12)',
                'REPETER LIRE(mois) JUSQUA (mois >= 1) OU (mois <= 12)',
                'REPETER LIRE(mois) JUSQUA (mois >= 1) ET (mois <= 12)',
                'REPETER LIRE(mois) JUSQUA (mois > 1) ET (mois < 12)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On veut sortir UNIQUEMENT lorsque le mois est valide, c’est-à-dire compris entre 1 et 12 inclus : `(mois >= 1) ET (mois <= 12)`. Avec `OU`, tout nombre (même -5 ou 99) satisferait l’une des deux inégalités !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Menus interactifs',
            stepTheme: 'violet',
            stepTitle: 'Coupler `REPETER … JUSQUA` et `SELON` pour un menu applicatif',
            paragraphText:
              'Dans toute application console ou serveur USSD, le programme affiche un menu, exécute l’action choisie, et réaffiche le menu jusqu’à ce que l’utilisateur sélectionne « Quitter ».\n' +
              '• **Structure canonique** : `REPETER` → afficher les options → `LIRE(choix)` → `SELON choix DANS 1 : ... 2 : ... 0 : ECRIRE("Au revoir") AUTREMENT : ECRIRE("Choix invalide") FINSELON` → `JUSQUA choix = 0`.\n' +
              '• **Pourquoi `REPETER` ?** : le menu doit impérativement apparaître au moins une première fois à l’utilisateur.\n' +
              '• **Séparation des responsabilités** : `REPETER` gère le cycle de vie de la session, tandis que `SELON` aiguille chaque commande.\n' +
              'Exemple : un guichet automatique bancaire tourne dans cette boucle de session jusqu’à ce que le client choisisse l’option « Éjecter la carte ».',
            keyRule:
              'L’architecture `REPETER … SELON choix DANS … FINSELON JUSQUA choix = QUITTER` est le squelette standard de tout menu interactif.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Dans un menu `REPETER ... LIRE(choix) ; SELON choix DANS 1 : ... 2 : ... 3 : ... AUTREMENT : ... FINSELON JUSQUA choix = 3`, que se passe-t-il si l’utilisateur saisit `9` ?',
              options: [
                'La boucle s’arrête immédiatement.',
                'La clause `AUTREMENT` s’exécute, puis comme `9 = 3` est FAUX, le menu est réaffiché.',
                'L’algorithme plante définitivement.',
                'La branche `3` est exécutée par défaut.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour `choix = 9`, `SELON` exécute `AUTREMENT` (message d’erreur), puis `JUSQUA choix = 3` évalue `9 = 3` (`FAUX`), ce qui relance proprement le menu pour une nouvelle saisie.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Terminaison',
            stepTheme: 'orange',
            stepTitle: 'Vérifier la terminaison et les variables locales de sortie',
            paragraphText:
              'Tout comme `TANTQUE`, la boucle `REPETER … JUSQUA` peut devenir infinie si la séquence ne modifie jamais les variables impliquées dans la condition de sortie.\n' +
              '• **Piège de la variable figée** : `REPETER x ← 5 JUSQUA x = 10` réinitialise `x` à `5` à chaque passage — `x = 10` ne deviendra jamais vrai.\n' +
              '• **Piège du compteur réinitialisé à l’intérieur** : écrire `nbCoups ← 0` À L’INTÉRIEUR de `REPETER` remet le compteur à `0` à chaque tour, si bien qu’il vaut toujours `1` à la sortie !\n' +
              '• **Règle d’or d’initialisation** : tout compteur ou accumulateur doit être initialisé **strictement avant** le mot-clé `REPETER`.\n' +
              'Exemple : dans le jeu des deux dés, `nbCoups ← 0` précède `REPETER`, tandis que `nbCoups ← nbCoups + 1` figure à l’intérieur.',
            keyRule:
              'Ne jamais placer l’initialisation d’un compteur ou d’un accumulateur (`nb ← 0`, `somme ← 0`) à l’intérieur d’une boucle : elle doit toujours précéder l’entrée dans la boucle.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Un étudiant écrit : `REPETER nb ← 0 ; LIRE(d1, d2) ; nb ← nb + 1 JUSQUA d1 + d2 = 12`. Si l’utilisateur obtient `12` au 4e lancer, quelle valeur aura `nb` à la sortie ?',
              options: [
                '4',
                '3',
                '1',
                '0',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme `nb ← 0` est placé À L’INTÉRIEUR de la boucle, `nb` est remis à 0 au début de chaque tour puis incrémenté à 1. Au 4e tour, `nb` vaut donc `1` au lieu de `4` !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Authentification',
            stepTheme: 'slate',
            stepTitle: 'Trace complète d’une authentification PIN à 3 tentatives maximum',
            paragraphText:
              'Modélisons la vérification d’un code secret `PIN_OK = 4820` avec au maximum 3 tentatives avant blocage du compte.\n' +
              '• **Initialisation** : `essais ← 0`.\n' +
              '• **Boucle** : `REPETER LIRE(saisie) ; essais ← essais + 1 JUSQUA (saisie = PIN_OK) OU (essais = 3)`.\n' +
              '• **Décision post-boucle** : à la sortie, on ne sait pas encore POURQUOI on est sorti (succès ou 3 échecs ?). Il faut tester `SI saisie = PIN_OK ALORS ECRIRE("Accès autorisé") SINON ECRIRE("Compte bloqué") FINSI`.\n' +
              'Exemple : si l’utilisateur réussit exactement au 3e essai (`saisie = 4820` et `essais = 3`), tester `saisie = PIN_OK` (et NON `essais = 3`) accorde bien l’accès !',
            keyRule:
              'Quand une boucle possède deux conditions d’arrêt reliées par `OU` (succès OU limite atteinte), teste la condition de SUCCÈS après la boucle pour gérer le cas où les deux arrivent simultanément.',
            konanTip:
              'Piège classique : tester `SI essais = 3 ALORS ECRIRE("Bloqué")` bloquerait à tort un utilisateur ayant trouvé le bon code PIN à son 3e essai !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Après `REPETER LIRE(saisie) ; essais ← essais + 1 JUSQUA (saisie = PIN_OK) OU (essais = 3)`, quel test décide correctement si l’utilisateur est autorisé, même s’il réussit au 3e essai ?',
              options: [
                'SI essais < 3 ALORS ECRIRE("Autorisé") SINON ECRIRE("Bloqué") FINSI',
                'SI saisie = PIN_OK ALORS ECRIRE("Autorisé") SINON ECRIRE("Bloqué") FINSI',
                'SI essais = 3 ALORS ECRIRE("Bloqué") SINON ECRIRE("Autorisé") FINSI',
                'Aucun test n’est nécessaire car la boucle garantit le succès.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si le bon code est saisi au 3e essai, on a simultanément `essais = 3` et `saisie = PIN_OK`. Seul le test `SI saisie = PIN_OK` (option B) autorise correctement l’accès dans ce cas limite.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_algo_ch3_p3',
        order: 3,
        title: 'Boucle `POUR`, choix de la boucle adaptée et parcours de listes',
        summary:
          'Maîtriser `POUR` (pas croissant et décroissant), choisir la structure itérative optimale et distinguer les deux schémas de traitement de listes (avec ou sans dernier élément).',
        conceptExplanation:
          'La boucle **`POUR i DE debut A fin [PAR PAS DE p] FAIRE <séquence> FINPOUR`** est dédiée aux répétitions dont le **nombre d’itérations est connu avant la première exécution** et ne change pas pendant l’exécution.\n\n' +
          'Son mécanisme équivaut à : `i ← debut ; TANTQUE i <= fin FAIRE <séquence> ; i ← i + 1 FINTANTQUE` (et par pas de `-1` : `i >= fin` avec `i ← i - 1`). Deux règles strictes s’imposent : la séquence ne doit **jamais modifier ni la variable de boucle `i`, ni les bornes** ; et si `debut > fin` (en pas croissant), le corps s’exécute **0 fois**.\n\n' +
          'En pratique, le choix de la boucle obéit à un arbre de décision clair (`POUR` si nombre connu ; sinon `TANTQUE` si 0 tour possible ; sinon `REPETER` si au moins 1 tour garanti). De plus, pour traiter une liste séquentielle (ex. file d’attente ou tapis de caisse), on distingue le traitement incluant le dernier élément (`REPETER`) de celui s’arrêtant avant une barre séparatrice (`TANTQUE`).',
        formulas: [
          {
            name: 'Nombre d’itérations d’une boucle POUR (pas +1)',
            formula: 'N = \\max(0,\\; \\text{fin} - \\text{debut} + 1)',
            note: 'De 1 à 10 : 10 tours. De 0 à 10 : 11 tours. De 5 à 2 : 0 tour.',
          },
          {
            name: 'Équivalence POUR décroissant',
            formula: '\\text{POUR } i \\text{ DE } d \\text{ A } f \\text{ PAR PAS DE } (-1) \\iff i \\leftarrow d \\; ; \\; \\text{TANTQUE } i \\ge f \\text{ FAIRE } \\dots \\; i \\leftarrow i - 1',
            note: 'Indispensable pour un compte à rebours ou un parcours inversé de tableau.',
          },
        ],
        keyRule:
          'Arbre de choix infaillible : nombre d’itérations connu d’avance → `POUR` ; inconnu avec 0 itération possible → `TANTQUE` ; inconnu avec au moins 1 itération garantie → `REPETER`.',
        workedExample: {
          title: 'Trace d’une boucle `POUR` cumulative et traitement de caisse de supermarché',
          statement:
            '1) Tracer `n ← 0 ; s ← 0 ; POUR i DE 1 A 3 FAIRE n ← n + 5 ; s ← s + n FINPOUR ; ECRIRE(s)`. 2) Expliquer la différence entre traiter tous les clients d’une file et traiter tous les articles avant la barre de séparation sur un tapis roulant.',
          methodSteps: [
            '1) Avant boucle : `n = 0, s = 0`.',
            'Tour `i = 1` (`1 <= 3` VRAI) : `n ← 5`, `s ← 5`.',
            'Tour `i = 2` (`2 <= 3` VRAI) : `n ← 10`, `s ← 15`.',
            'Tour `i = 3` (`3 <= 3` VRAI) : `n ← 15`, `s ← 30`. Puis `i` passe à `4` (`4 <= 3` FAUX) → affiche `30`.',
            '2) File de clients (tous traités, y compris le dernier) : `REPETER el ← suivant() ; traiter(el) JUSQUA dernier(el)`. Tapis avec barre séparatrice (dernier élément NON traité) : `el ← suivant() ; TANTQUE NON dernier(el) FAIRE traiter(el) ; el ← suivant() FINTANTQUE`.',
          ],
          conclusion:
            'La boucle `POUR` affiche `30` ; le patron de liste dépend directement du fait que l’élément terminal (marqueur de fin) doive être traité ou exclu.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'POUR',
            stepTheme: 'blue',
            stepTitle: 'Mécanisme exact de `POUR` et formule du nombre d’itérations',
            paragraphText:
              'La boucle `POUR` automatise l’initialisation, le test de borne et l’incrémentation d’un compteur de boucle en une seule ligne expressive.\n' +
              '• **Déroulement** : `i` prend `<debut>` ; tant que `i <= <fin>`, la séquence s’exécute puis `i` augmente automatiquement de `1` (ou du pas spécifié).\n' +
              '• **Cas de 0 itération** : si `<debut> > <fin>` en pas croissant (ex. `POUR i DE 5 A 2`), le test `5 <= 2` est `FAUX` dès le départ et la séquence n’est jamais exécutée.\n' +
              '• **Nombre de tours** : pour un pas de `+1` avec `debut <= fin`, la boucle effectue exactement `fin - debut + 1` itérations.\n' +
              'Exemple : `POUR i DE 1 A 3 FAIRE n ← n + 5 ; s ← s + n FINPOUR` (avec `n = 0, s = 0`) effectue `3 - 1 + 1 = 3` tours et calcule `5 + 10 + 15 = 30`.',
            formula: {
              name: 'Décompte exact des itérations',
              formula: '\\text{nbTours} = \\text{fin} - \\text{debut} + 1 \\quad (\\text{si } \\text{debut} \\le \\text{fin}, \\text{ pas } = +1)',
              note: 'Ne jamais oublier le `+ 1` : entre 3 et 7 inclus, il y a `7 - 3 + 1 = 5` valeurs (`3, 4, 5, 6, 7`).',
            },
            keyRule:
              'La boucle `POUR` s’exécute `0` fois si la borne de début dépasse déjà la borne de fin (en pas positif).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p3_q1',
              type: 'mcq',
              prompt: 'Combien de fois s’exécute le corps de `POUR i DE 4 A 10 FAIRE ... FINPOUR` ?',
              options: [
                '6 fois',
                '7 fois',
                '10 fois',
                '5 fois',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La variable `i` prend successivement les valeurs `4, 5, 6, 7, 8, 9, 10`, soit `10 - 4 + 1 = 7` itérations.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Règles de sécurité',
            stepTheme: 'orange',
            stepTitle: 'Interdictions strictes dans le corps d’un `POUR` et pas décroissant',
            paragraphText:
              'La boucle `POUR` offre la garantie mathématique de toujours se terminer — à condition de respecter son contrat d’intégrité.\n' +
              '• **Interdiction 1** : la séquence interne ne doit **jamais modifier la variable de boucle `i`** (pas de `i ← i + 2` ni `LIRE(i)` dans le corps).\n' +
              '• **Interdiction 2** : la séquence ne doit **jamais modifier l’expression de borne finale** (`fin`).\n' +
              '• **Pas décroissant (`PAR PAS DE -1`)** : permet de compter à rebours (`POUR i DE 10 A 1 PAR PAS DE -1 FAIRE`), équivalent à `i ← 10 ; TANTQUE i >= 1 FAIRE ... ; i ← i - 1`.\n' +
              'Exemple : pour afficher les 5 derniers relevés d’un compte bancaire du plus récent au plus ancien, on écrit `POUR i DE 5 A 1 PAR PAS DE -1 FAIRE`.',
            keyRule:
              'Dans un `POUR`, la variable de boucle `i` est en lecture seule dans le corps : seule l’en-tête de boucle a le droit de la faire avancer.',
            konanTip:
              'Si ton problème nécessite de faire sauter la variable d’indice selon une condition imprévisible, n’utilise pas `POUR` : passe immédiatement à `TANTQUE` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p3_q2',
              type: 'mcq',
              prompt: 'Quelle instruction affiche le compte à rebours `5, 4, 3, 2, 1` dans cet ordre exact ?',
              options: [
                'POUR i DE 5 A 1 FAIRE ECRIRE(i) FINPOUR',
                'POUR i DE 1 A 5 PAR PAS DE -1 FAIRE ECRIRE(i) FINPOUR',
                'POUR i DE 5 A 1 PAR PAS DE -1 FAIRE ECRIRE(i) FINPOUR',
                'POUR i DE 5 A 0 PAR PAS DE -1 FAIRE ECRIRE(i) FINPOUR',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sans `PAR PAS DE -1`, `POUR i DE 5 A 1` a un pas par défaut de `+1` et fait 0 tour (`5 <= 1` est FAUX). Avec `DE 5 A 1 PAR PAS DE -1`, `i` parcourt exactement `5, 4, 3, 2, 1`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Guide de choix',
            stepTheme: 'green',
            stepTitle: 'Tableau comparatif pour choisir la boucle idéale (`POUR`, `TANTQUE`, `REPETER`)',
            paragraphText:
              'Face à un exercice d’algorithmique, poser deux questions simples suffit à sélectionner immédiatement la meilleure boucle.\n' +
              '• **Question 1 : Le nombre d’itérations est-il connu avant d’entrer dans la boucle (et fixe) ?** Si OUI → **`POUR`** (ex. calculer la somme des `N` factures d’un lot, calculer $n!$, parcourir un tableau de taille `N`).\n' +
              '• **Question 2 (si NON) : Peut-il y avoir 0 itération ?** Si OUI → **`TANTQUE`** (ex. lire un fichier potentiellement vide, épargner jusqu’à un objectif peut-être déjà atteint). Si NON (au moins 1 exécution obligatoire) → **`REPETER … JUSQUA`** (ex. saisie contrôlée, menu interactif).\n' +
              'Exemple : calculer la factorielle $n!$ d’un entier `n` saisi requiert `n` multiplications connues d’avance → `POUR i DE 1 A n FAIRE fact ← fact * i FINPOUR`.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparatif décisionnel des 3 structures itératives',
              caption: 'Critères de choix, position du contrôle et nombre minimal d’exécutions.',
              tableData: {
                headers: ['Structure', 'Nombre de tours', 'Position du test', 'Min. d’exécutions', 'Cas d’usage typiques'],
                rows: [
                  ['POUR … FINPOUR', 'Connu d’avance et fixe', 'En entrée (auto)', '0 (si début > fin)', 'Parcours tableau, n!, table de multiplication'],
                  ['TANTQUE … FINTANTQUE', 'Inconnu d’avance', 'En entrée (continuation)', '0 (test d’abord)', 'Sentinelle, recherche seuil, algorithme d’Euclide'],
                  ['REPETER … JUSQUA', 'Inconnu d’avance', 'En sortie (arrêt)', '1 (toujours ≥ 1)', 'Contrôle de saisie, menu USSD, essais PIN'],
                ],
              },
            },
            keyRule:
              'Toute boucle `POUR` ou `REPETER` peut se traduire en `TANTQUE`, mais choisir la structure la plus spécifique rend l’intention de l’algorithme immédiatement limpide.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p3_q3',
              type: 'mcq',
              prompt: 'On veut lire les `12` relevés mensuels de chiffre d’affaires d’une PME et calculer le total annuel. Quelle boucle est la PLUS appropriée ?',
              options: [
                'REPETER … JUSQUA',
                'POUR mois DE 1 A 12 FAIRE … FINPOUR',
                'TANTQUE sans compteur',
                'SELON mois DANS',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le nombre d’itérations (`12` mois) est parfaitement connu avant l’entrée dans la boucle et non modifiable : la boucle `POUR mois DE 1 A 12` est la plus directe et la plus sûre.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Listes & Sentinelles',
            stepTheme: 'violet',
            stepTitle: 'Traiter une liste : inclure ou exclure le dernier élément',
            paragraphText:
              'Une situation professionnelle très concrète illustre la nuance subtile entre `REPETER` et `TANTQUE` lors du parcours d’une liste séquentielle (avec primitives `elementSuivant()` et `dernier(el)`).\n' +
              '• **Cas 1 — Tous les éléments sont traités (file de clients en caisse)** : même le dernier client doit être encaissé ! On écrit `REPETER client ← elementSuivant() ; traiter(client) JUSQUA dernier(client)`.\n' +
              '• **Cas 2 — Tous sauf le dernier (articles avant la barre séparatrice sur le tapis)** : la barre de séparation marque la fin du chariot mais ne doit PAS être scannée ! On écrit `art ← elementSuivant() ; TANTQUE NON dernier(art) FAIRE traiter(art) ; art ← elementSuivant() FINTANTQUE`.\n' +
              '• **Portée générale** : le Cas 2 correspond exactement au traitement des chaînes terminées par un caractère sentinelle ou des fichiers jusqu’à `EOF` (*End Of File*).\n' +
              'Exemple : lire des transactions bancaires jusqu’à la ligne marqueur `"FIN_LOT"` suit exactement le Cas 2 (`TANTQUE NON dernier`).',
            keyRule:
              'Si le marqueur final doit être traité (dernier client), utilise `REPETER … JUSQUA dernier(e)` ; s’il sert uniquement de butée à ignorer (barre séparatrice, sentinelle), utilise amorce + `TANTQUE NON dernier(e)`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Une caissière scanne les articles d’un client sur un tapis roulant jusqu’à la barre de séparation (`dernier(article) = VRAI`), qui ne doit surtout PAS être facturée. Quel schéma algorithmique est exact ?',
              options: [
                'REPETER art ← elementSuivant() ; facturer(art) JUSQUA dernier(art)',
                'art ← elementSuivant() ; TANTQUE NON dernier(art) FAIRE facturer(art) ; art ← elementSuivant() FINTANTQUE',
                'POUR i DE 1 A 10 FAIRE facturer(elementSuivant()) FINPOUR',
                'TANTQUE dernier(art) FAIRE facturer(art) FINTANTQUE',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec `REPETER`, la barre séparatrice serait facturée avant d’être détectée. La lecture d’amorce suivie de `TANTQUE NON dernier(art)` vérifie d’abord que l’élément n’est pas la barre avant de le facturer (et gère même un panier vide !).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Boucles imbriquées',
            stepTheme: 'green',
            stepTitle: 'Boucles `POUR` imbriquées et comptage du nombre total d’opérations',
            paragraphText:
              'Imbriquer une boucle `POUR` à l’intérieur d’une autre permet de parcourir des grilles 2D, d’afficher des motifs géométriques ou de générer des tables de multiplication.\n' +
              '• **Variables distinctes obligatoires** : la boucle externe (ex. `i` pour les lignes) et la boucle interne (ex. `j` pour les colonnes) doivent impérativement utiliser **deux variables de boucle différentes**.\n' +
              '• **Principe multiplicatif** : pour chaque valeur de `i` ($M$ tours), la boucle interne exécute intégralement ses $N$ tours → au total $M \\times N$ exécutions du corps interne.\n' +
              '• **Boucle triangulaire** : si la borne interne dépend de `i` (`POUR j DE 1 A i`), le nombre d’exécutions suit la somme arithmétique $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$.\n' +
              'Exemple : `POUR i DE 1 A 4 FAIRE POUR j DE 1 A 3 FAIRE ... FINPOUR FINPOUR` exécute le corps interne $4 \\times 3 = 12$ fois.',
            formula: {
              name: 'Nombre d’itérations de boucles imbriquées',
              formula: '\\text{Rectangulaire : } M \\times N \\qquad ; \\qquad \\text{Triangulaire } (j \\text{ de } 1 \\text{ à } i) : \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}',
              note: 'Fondamental pour estimer la complexité en temps des matrices et des algorithmes de tri.',
            },
            keyRule:
              'À chaque tour de la boucle externe, la boucle interne recommence intégralement depuis sa borne de début.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p3_q5',
              type: 'mcq',
              prompt: 'Combien d’étoiles `’*’` affiche la double boucle : `POUR i DE 1 A 4 FAIRE (POUR j DE 1 A i FAIRE ECRIRE(’*’) FINPOUR) FINPOUR` ?',
              options: [
                '4 étoiles',
                '8 étoiles',
                '10 étoiles',
                '16 étoiles',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour `i=1`, 1 étoile ; pour `i=2`, 2 étoiles ; pour `i=3`, 3 étoiles ; pour `i=4`, 4 étoiles. Total : `1 + 2 + 3 + 4 = 10` étoiles (soit $4 \\times 5 / 2 = 10$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Accumulateurs',
            stepTheme: 'slate',
            stepTitle: 'Calcul de factorielle, puissance entière et somme harmonique',
            paragraphText:
              'La boucle `POUR` associée à un accumulateur convenablement initialisé résout la majorité des sommes et produits mathématiques.\n' +
              '• **Élément neutre d’initialisation** : `0` pour une somme (`somme ← 0`), `1` pour un produit (`prod ← 1`). Initialiser un produit à `0` annulerait définitivement tout le calcul !\n' +
              '• **Factorielle $n!$** : `fact ← 1 ; POUR i DE 2 A n FAIRE fact ← fact * i FINPOUR`. Remarque élégante : pour `n = 0` ou `n = 1`, `2 > n` donc 0 tour, et `fact` vaut bien `1` ($0! = 1$).\n' +
              '• **Puissance $x^n$ ($n \\ge 0$)** : `puis ← 1 ; POUR i DE 1 A n FAIRE puis ← puis * x FINPOUR` (donne bien $x^0 = 1$ pour `n = 0`).\n' +
              'Exemple : pour `n = 5`, `fact` évolue comme `1 → 2 → 6 → 24 → 120`.',
            formula: {
              name: 'Accumulation additive vs multiplicative',
              formula: 'S = \\sum_{i=1}^{n} u_i \\; (S \\leftarrow 0) \\qquad ; \\qquad P = \\prod_{i=1}^{n} u_i \\; (P \\leftarrow 1)',
              note: 'L’élément neutre garantit automatiquement le bon résultat même lorsque la boucle effectue 0 itération.',
            },
            keyRule:
              'Toujours initialiser une somme à `0` et un produit (factorielle, puissance) à `1` AVANT la boucle `POUR`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p3_q6',
              type: 'mcq',
              prompt: 'Dans `fact ← 1 ; POUR i DE 2 A n FAIRE fact ← fact * i FINPOUR`, quelle valeur contient `fact` à la fin si `n = 0` ?',
              options: [
                '0',
                '1',
                '2',
                'Erreur d’exécution',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour `n = 0`, la borne de début (`2`) est strictement supérieure à la borne de fin (`0`). La boucle `POUR` effectue donc `0` itération et `fact` conserve sa valeur initiale `1`, ce qui correspond exactement à $0! = 1$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 4 : Tableaux 1D/2D, algorithmes de recherche et tris fondamentaux
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch4',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Algorithmique',
    title: 'Chapitre 4 — Tableaux 1D/2D, algorithmes de recherche et tris fondamentaux',
    summary:
      'Tableaux unidimensionnels (déclaration, indexation, parcours, extremums), tableaux bidimensionnels (matrices), recherche séquentielle et dichotomique, et tris classiques (sélection, bulles, insertion).',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch4_p1',
        order: 1,
        title: 'Tableaux 1D : déclaration, indexation, parcours, moyenne et extremums',
        summary:
          'Stocker une collection homogène de données sous un seul nom, accéder directement par indice et calculer somme, moyenne, minimum et maximum.',
        conceptExplanation:
          'Lorsque l’on doit manipuler 300 notes d’étudiants ou 5 000 transactions quotidiennes, déclarer des variables scalaires séparées (`n1, n2, ..., n300`) est impraticable. Un **tableau unidimensionnel (1D)** regroupe sous un unique identificateur une suite **contiguë et finie** de cases de **même type** (structure homogène et statique).\n\n' +
          'Chaque case est accessible directement en temps constant $O(1)$ grâce à son **indice** entier : `T[i]` désigne la valeur contenue à la position `i` (convention algorithmique : indices de `1` à `N` ; dans de nombreux langages comme C, Java ou Python : de `0` à `N-1`).\n\n' +
          'La boucle `POUR i DE 1 A N` est le compagnon naturel du tableau 1D pour la saisie, l’affichage, la somme, le comptage conditionnel et la recherche du maximum/minimum (initialisés à `T[1]`, JAMAIS à `0` !).',
        formulas: [
          {
            name: 'Déclaration et accès direct à un tableau 1D',
            formula: 'T : \\text{TABLEAU}[1..N] \\text{ DE REEL} \\; ; \\quad \\text{Accès : } T[i] \\; (1 \\le i \\le N)',
            note: 'Ne jamais confondre l’indice `i` (la position) et l’élément `T[i]` (la valeur stockée dans la case).',
          },
          {
            name: 'Recherche du maximum et de sa position',
            formula: '\\text{maxi} \\leftarrow T[1] \\; ; \\; \\text{posMax} \\leftarrow 1 \\; ; \\; \\text{POUR } i \\text{ DE } 2 \\text{ A } N \\text{ : SI } T[i] > \\text{maxi ALORS } \\dots',
            note: 'Initialiser à `T[1]` fonctionne même si tous les éléments du tableau sont strictement négatifs !',
          },
        ],
        keyRule:
          'Distingue toujours l’indice `i` (numéro de la case) de la valeur `T[i]` (contenu de la case), et initialise toujours `maxi` ou `mini` avec `T[1]`, jamais avec `0`.',
        workedExample: {
          title: 'Analyse des ventes hebdomadaires d’une boutique en ligne (6 jours)',
          statement:
            'Soit le tableau `V[1..6] = [42, 68, 55, 91, 37, 84]` (en milliers de FCFA). Déterminer le chiffre d’affaires total, la moyenne journalière, la vente maximale et le numéro du jour correspondant.',
          methodSteps: [
            'Initialisation : `somme ← 0`, `maxi ← V[1]` (`42`), `jourMax ← 1`.',
            'Parcours `POUR i DE 1 A 6` : on cumule `somme ← somme + V[i]` → `42 + 68 + 55 + 91 + 37 + 84 = 377`.',
            'Comparaison `SI V[i] > maxi` : `i=2` (`68 > 42` → `maxi=68, jourMax=2`) ; `i=3` (`55 > 68` FAUX) ; `i=4` (`91 > 68` → `maxi=91, jourMax=4`) ; `i=5, 6` FAUX.',
            'Moyenne après la boucle : `moy ← 377 / 6 ≈ 62.83`.',
          ],
          conclusion:
            'Total = `377 000 FCFA`, moyenne ≈ `62 833 FCFA/jour`, record de `91 000 FCFA` atteint au jour `4`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Tableau 1D',
            stepTheme: 'blue',
            stepTitle: 'Structure mémoire, homogénéité et accès direct par indice',
            paragraphText:
              'Un tableau 1D est une structure de données indexée qui stocke `N` valeurs de même type dans des emplacements mémoire contigus.\n' +
              '• **Homogénéité** : toutes les cases ont exactement le même type (par ex. `TABLEAU[1..100] DE REEL`) ; on ne mélange pas des chaînes et des réels dans le même tableau.\n' +
              '• **Accès direct `T[i]`** : connaître l’indice `i` permet d’atteindre instantanément la `i`-ième case sans parcourir les précédentes.\n' +
              '• **Débordement d’indice (*Out of Bounds*)** : accéder à `T[0]` ou `T[N+1]` pour un tableau déclaré `[1..N]` est une erreur grave d’exécution.\n' +
              'Exemple : pour `T[1..6] = [42, 68, 55, 91, 37, 84]`, `T[4]` vaut `91` tandis que `4` est son indice.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Représentation mémoire d’un tableau 1D indexé T[1..6]',
              caption: 'Chaque case contiguë est repérée par son indice i (en haut) et contient une valeur de même type (au centre).',
              svgContent:
                '<svg viewBox="0 0 460 175" width="100%" style="max-width:460px" xmlns="http://www.w3.org/2000/svg">' +
                '<text x="20" y="24" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">Indices i :</text>' +
                '<text x="115" y="24" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#2563EB">1</text>' +
                '<text x="175" y="24" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#2563EB">2</text>' +
                '<text x="235" y="24" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#2563EB">3</text>' +
                '<text x="295" y="24" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#EA580C">4</text>' +
                '<text x="355" y="24" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#2563EB">5</text>' +
                '<text x="415" y="24" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#2563EB">6</text>' +
                '<text x="20" y="64" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">Valeurs T[i] :</text>' +
                '<rect x="85" y="36" width="60" height="44" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<rect x="145" y="36" width="60" height="44" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<rect x="205" y="36" width="60" height="44" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<rect x="265" y="36" width="60" height="44" rx="6" fill="#FFF7ED" stroke="#EA580C" stroke-width="2.5"/>' +
                '<rect x="325" y="36" width="60" height="44" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<rect x="385" y="36" width="60" height="44" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<text x="115" y="63" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#0F172A">42</text>' +
                '<text x="175" y="63" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#0F172A">68</text>' +
                '<text x="235" y="63" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#0F172A">55</text>' +
                '<text x="295" y="63" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#C2410C">91</text>' +
                '<text x="355" y="63" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#0F172A">37</text>' +
                '<text x="415" y="63" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#0F172A">84</text>' +
                '<line x1="295" y1="112" x2="295" y2="85" stroke="#EA580C" stroke-width="2.5"/>' +
                '<polygon points="295,82 289,92 301,92" fill="#EA580C"/>' +
                '<rect x="200" y="114" width="190" height="44" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>' +
                '<text x="295" y="133" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#92400E">Maximum : T[4] = 91</text>' +
                '<text x="295" y="149" text-anchor="middle" font-family="monospace" font-size="11" fill="#78350F">maxi = 91 ; posMax = 4</text>' +
                '</svg>',
            },
            keyRule:
              'Un indice de tableau doit toujours être une expression entière comprise dans les bornes déclarées `[1..N]` (ou `[0..N-1]` selon la convention du langage).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p1_q1',
              type: 'mcq',
              prompt: 'Soit `T[1..5] = [14, 7, 22, 9, 18]`. Quelle est la valeur de `T[2] + T[T[2] - 4]` ?',
              options: [
                '16',
                '29',
                '21',
                'Erreur de débordement d’indice',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On évalue de l’intérieur vers l’extérieur : `T[2] = 7`, donc `T[2] - 4 = 3`. Ensuite `T[3] = 22`. Finalement `T[2] + T[3] = 7 + 22 = 29`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Parcours 1D',
            stepTheme: 'green',
            stepTitle: 'Saisie, affichage, somme, moyenne et comptage conditionnel',
            paragraphText:
              'Les quatre opérations quotidiennes sur un tableau `T[1..N]` partagent toutes la même ossature : une boucle `POUR i DE 1 A N`.\n' +
              '• **Remplissage** : `POUR i DE 1 A N FAIRE LIRE(T[i]) FINPOUR`.\n' +
              '• **Somme et moyenne** : `somme ← 0 ; POUR i DE 1 A N FAIRE somme ← somme + T[i] FINPOUR ; moy ← somme / N` (division placée APRÈS la boucle !).\n' +
              '• **Comptage conditionnel** (ex. nombre d’étudiants ayant une note `>= 10`) : `nbAdmis ← 0 ; POUR i DE 1 A N FAIRE SI T[i] >= 10 ALORS nbAdmis ← nbAdmis + 1 FINSI FINPOUR`.\n' +
              'Exemple : pour compter combien d’étudiants dépassent la moyenne de la classe, deux parcours successifs sont nécessaires : un premier `POUR` calcule `moy`, un second compare chaque `T[i]` à `moy`.',
            keyRule:
              'On ne peut pas comparer `T[i]` à la moyenne de la classe durant le premier parcours : il faut d’abord terminer la somme et calculer `moy`, puis effectuer un second parcours.',
            konanTip:
              'Ne confonds jamais `somme ← somme + i` (somme des indices `1+2+...+N`) avec `somme ← somme + T[i]` (somme des valeurs du tableau) !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p1_q2',
              type: 'mcq',
              prompt: 'Pour calculer la somme des éléments d’un tableau `T[1..N]` strictement positifs, quelle instruction doit figurer dans la boucle `POUR i DE 1 A N` ?',
              options: [
                'SI i > 0 ALORS somme ← somme + i FINSI',
                'SI T[i] > 0 ALORS somme ← somme + T[i] FINSI',
                'SI T[i] > 0 ALORS somme ← T[i] FINSI',
                'somme ← somme + T[N]',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On teste la VALEUR de la case (`T[i] > 0`) et on l’accumule (`somme ← somme + T[i]`). Écrire `somme ← T[i]` écraserait l’accumulateur au lieu d’additionner !',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Extremums',
            stepTheme: 'orange',
            stepTitle: 'Rechercher le maximum/minimum : pourquoi ne JAMAIS initialiser à 0',
            paragraphText:
              'La recherche du plus grand ou du plus petit élément d’un tableau est un grand classique qui comporte un piège redoutable.\n' +
              '• **Piège fatal** : initialiser `maxi ← 0` échoue complètement dès que toutes les valeurs du tableau sont négatives (ex. soldes débiteurs `[-15000, -4000, -9000]`) : l’algorithme renverrait `0`, qui n’existe même pas dans le tableau !\n' +
              '• **Règle absolue** : initialiser `maxi ← T[1]` et `posMax ← 1`, puis parcourir de `i = 2` à `N` en mettant à jour dès que `T[i] > maxi`.\n' +
              '• **Nuance `>` vs `>=`** : avec `T[i] > maxi`, `posMax` conserve l’indice de la **première** occurrence du maximum ; avec `T[i] >= maxi`, il conserve la **dernière** occurrence.\n' +
              'Exemple : dans `[-15, -4, -9, -4]`, `maxi ← T[1] = -15` trouve correctement `maxi = -4` à l’indice `2` (avec `>`) ou `4` (avec `>=`).',
            keyRule:
              'Toujours initialiser `maxi ← T[1]` (et `mini ← T[1]`) puis démarrer la boucle de comparaison à `i = 2`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p1_q3',
              type: 'mcq',
              prompt: 'Soit `T[1..4] = [-12, -5, -8, -5]`. On exécute `maxi ← T[1] ; pos ← 1 ; POUR i DE 2 A 4 FAIRE SI T[i] > maxi ALORS maxi ← T[i] ; pos ← i FINSI FINPOUR`. Quelles valeurs finales obtient-on ?',
              options: [
                'maxi = 0 et pos = 1',
                'maxi = -5 et pos = 2',
                'maxi = -5 et pos = 4',
                'maxi = -12 et pos = 1',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Départ : `maxi = -12, pos = 1`. Pour `i = 2` : `-5 > -12` (VRAI) → `maxi = -5, pos = 2`. Pour `i = 3` : `-8 > -5` (FAUX). Pour `i = 4` : `-5 > -5` (FAUX car inégalité stricte). Résultat : `maxi = -5, pos = 2`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Manipulation',
            stepTheme: 'green',
            stepTitle: 'Inverser un tableau en place et décaler ses éléments (insertion/suppression)',
            paragraphText:
              'Modifier l’ordre ou le contenu d’un tableau sans créer de copie mémoire demande une gestion précise des indices.\n' +
              '• **Inversion en place** : on échange les éléments symétriques `T[i]` et `T[N + 1 - i]` uniquement pour `i` allant de `1` à `N div 2` !\n' +
              '• **Pourquoi `N div 2` ?** : si l’on allait jusqu’à `N`, on échangerait chaque paire **deux fois**, ce qui remettrait le tableau dans son ordre initial !\n' +
              '• **Insertion à l’indice `k`** : pour libérer `T[k]` sans écraser les données suivantes, on décale vers la droite **en partant de la fin** (`POUR i DE N A k PAR PAS DE -1 FAIRE T[i + 1] ← T[i] FINPOUR`), puis on écrit `T[k] ← val`.\n' +
              'Exemple : pour inverser `[10, 20, 30, 40, 50]` (`N = 5`), `5 div 2 = 2` échanges suffisent : `(T[1] ↔ T[5])` et `(T[2] ↔ T[4])`, `T[3]` restant au centre.',
            formula: {
              name: 'Indices symétriques pour l’inversion (base 1)',
              formula: 'T[i] \\longleftrightarrow T[N + 1 - i] \\quad \\text{pour } i = 1, 2, \\dots, N \\;\\text{div}\\; 2',
              note: 'En base 0 (`0..N-1`), le symétrique de `i` est `N - 1 - i` pour `i` de `0` à `(N div 2) - 1`.',
            },
            keyRule:
              'Décaler vers la droite (insertion) se fait par pas décroissant (de la fin vers `k`) ; décaler vers la gauche (suppression) se fait par pas croissant (de `k` vers la fin).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p1_q4',
              type: 'mcq',
              prompt: 'Pour inverser un tableau `T[1..8]` en place en échangeant `T[i]` et `T[9 - i]`, jusqu’à quel indice la boucle `POUR i DE 1 A ...` doit-elle s’arrêter ?',
              options: [
                'Jusqu’à 8',
                'Jusqu’à 4 (`8 div 2`)',
                'Jusqu’à 7 (`8 - 1`)',
                'Jusqu’à 5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On échange `(1↔8)`, `(2↔7)`, `(3↔6)` et `(4↔5)` : 4 échanges (`8 div 2`). Continuer jusqu’à 8 ré-échangerait `(5↔4)`, `(6↔3)`, etc., annulant totalement l’inversion !',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Tableau partiel',
            stepTheme: 'violet',
            stepTitle: 'Capacité maximale vs taille logique (`MAX` vs `nbElem`)',
            paragraphText:
              'Un tableau statique possède une capacité maximale fixée dans les déclarations (`MAX = 100`), mais en pratique il n’est souvent rempli que partiellement.\n' +
              '• **Capacité physique (`MAX`)** : nombre total de cases réservées en mémoire (`T : TABLEAU[1..MAX] DE ENTIER`).\n' +
              '• **Taille logique (`n`)** : variable entière (`0 <= n <= MAX`) indiquant combien de cases contiennent réellement des données utiles.\n' +
              '• **Sécurité** : toutes les boucles de parcours s’arrêtent à `n` (jamais à `MAX`), et avant toute insertion on vérifie `SI n < MAX ALORS` pour éviter le débordement.\n' +
              'Exemple : un gestionnaire de stocks réserve `MAX = 500` références produits ; si la boutique n’en gère que `n = 120`, les cases `121..500` restent libres pour les futurs ajouts.',
            keyRule:
              'Distingue toujours la capacité réservée `MAX` (constante) de la taille utile `n` (variable) : on parcourt toujours de `1` à `n`, jamais jusqu’à `MAX`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p1_q5',
              type: 'mcq',
              prompt: 'Un tableau est déclaré `T : TABLEAU[1..100] DE REEL` et contient `n = 18` notes valides. Quelle boucle calcule correctement la moyenne des notes saisies ?',
              options: [
                'POUR i DE 1 A 100 FAIRE s ← s + T[i] FINPOUR ; moy ← s / 100',
                'POUR i DE 1 A n FAIRE s ← s + T[i] FINPOUR ; moy ← s / n',
                'POUR i DE 1 A n FAIRE s ← s + T[i] FINPOUR ; moy ← s / 100',
                'POUR i DE n A 100 FAIRE s ← s + T[i] FINPOUR ; moy ← s / n',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seules les cases `1` à `n` (`18`) contiennent des données utiles ; les cases `19` à `100` sont non initialisées. On somme de `1` à `n` et on divise par `n`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Statistique',
            stepTheme: 'slate',
            stepTitle: 'Compter les fréquences et vérifier si un tableau est trié',
            paragraphText:
              'Deux vérifications très fréquentes sur un tableau 1D combinent boucle et drapeau booléen ou tableau de compteurs.\n' +
              '• **Vérifier l’ordre croissant** : on initialise un booléen `estTrie ← VRAI`, puis on parcourt `i` de `1` à `N - 1` (attention : `N - 1` pour que `T[i + 1]` existe !). Dès que `T[i] > T[i + 1]`, on passe `estTrie ← FAUX`.\n' +
              '• **Optimisation par `TANTQUE`** : au lieu de continuer jusqu’à la fin alors qu’une inversion est déjà trouvée, `TANTQUE (i < N) ET estTrie FAIRE` s’arrête immédiatement dès le premier défaut d’ordre !\n' +
              '• **Tableau de fréquences** : pour compter les occurrences de notes entières de `0` à `20`, on utilise un tableau `Freq[0..20]` initialisé à `0`, puis `Freq[note] ← Freq[note] + 1`.\n' +
              'Exemple : sur `[3, 7, 12, 9, 15]`, dès `i = 3`, `T[3] = 12 > T[4] = 9` fait basculer `estTrie` à `FAUX` et arrête le test.',
            keyRule:
              'Lorsque l’on compare des voisins `T[i]` et `T[i + 1]`, la boucle doit s’arrêter à `N - 1` (jamais `N`), sous peine de déborder sur `T[N + 1]`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p1_q6',
              type: 'mcq',
              prompt: 'Pourquoi la boucle testant si un tableau `T[1..N]` est trié par ordre croissant compare-t-elle `T[i]` et `T[i + 1]` uniquement pour `i` allant de `1` à `N - 1` ?',
              options: [
                'Parce que le dernier élément `T[N]` n’a pas besoin d’être comparé.',
                'Parce qu’à `i = N`, l’accès `T[i + 1]` tenterait de lire `T[N + 1]`, qui est hors des bornes du tableau.',
                'Parce qu’un tableau trié possède toujours `N - 1` éléments.',
                'Parce que `T[1]` est déjà comparé à `T[N]`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À `i = N - 1`, on compare bien les deux derniers éléments `T[N - 1]` et `T[N]`. Aller jusqu’à `i = N` provoquerait l’accès illégal `T[N + 1]` (débordement d’indice).',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch4_p2',
        order: 2,
        title: 'Tableaux bidimensionnels (matrices 2D) et parcours par lignes/colonnes',
        summary:
          'Déclarer et indexer une matrice `M[i, j]`, parcourir par lignes ou colonnes, calculer des totaux marginaux et manipuler les diagonales d’une matrice carrée.',
        conceptExplanation:
          'Un **tableau bidimensionnel (2D)**, ou **matrice**, organise des données de même type sous forme de grille comportant `L` **lignes** et `C` **colonnes** (`M : TABLEAU[1..L, 1..C] DE REEL`). Chaque élément est repéré par un couple d’indices `(i, j)` : par convention universelle, le **premier indice `i` désigne la ligne** et le **second indice `j` désigne la colonne**.\n\n' +
          'Le parcours complet d’une matrice requiert **deux boucles `POUR` imbriquées** (`L × C` opérations). Pour calculer la somme de chaque ligne, la boucle externe fixe `i`, on remet `somLigne ← 0`, puis la boucle interne fait varier `j` de `1` à `C`. Pour chaque colonne, on inverse l’ordre des deux boucles.\n\n' +
          'Dans une **matrice carrée** ($L = C = N$), la **diagonale principale** regroupe les cases vérifiant `i = j` (`M[i, i]`), et la **diagonale secondaire** celles vérifiant `i + j = N + 1` (`M[i, N + 1 - i]`).',
        formulas: [
          {
            name: 'Diagonales et transposée d’une matrice carrée (base 1)',
            formula: '\\text{Trace} = \\sum_{i=1}^{N} M[i, i] \\; ; \\quad \\text{Diag. sec.} : M[i, N+1-i] \\; ; \\quad M^T[j, i] = M[i, j]',
            note: 'Parcourir une diagonale ne demande qu’UNE SEULE boucle `POUR i DE 1 A N` (complexité O(N) et non O(N²)).',
          },
        ],
        keyRule:
          'Dans `M[i, j]`, retiens toujours l’ordre **Li-Co** : 1er indice = **Li**gne, 2e indice = **Co**lonne.',
        workedExample: {
          title: 'Tableau des ventes trimestrielles de 3 agences (Abidjan, Bouaké, San-Pédro)',
          statement:
            'Soit la matrice `V[1..3, 1..4]` où la ligne `i` représente l’agence et la colonne `j` le trimestre (`1..4`). Écrire la logique pour calculer le total annuel de chaque agence et le total global par trimestre.',
          methodSteps: [
            'Total annuel par agence (somme par ligne `i`) : boucle externe `POUR i DE 1 A 3`, initialiser `totAg ← 0`, boucle interne `POUR j DE 1 A 4` avec `totAg ← totAg + V[i, j]`, puis afficher `totAg`.',
            'Total global par trimestre (somme par colonne `j`) : boucle externe `POUR j DE 1 A 4`, initialiser `totTrim ← 0`, boucle interne `POUR i DE 1 A 3` avec `totTrim ← totTrim + V[i, j]`, puis afficher `totTrim`.',
            'Vérifier la portée des initialisations : `totAg ← 0` doit être À L’INTÉRIEUR de la boucle externe (avant la boucle interne) pour repartir de zéro à chaque nouvelle agence.',
          ],
          conclusion:
            'Deux doubles boucles très propres produisent les totaux marginaux lignes et colonnes d’un tableau de bord commercial.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Matrice 2D',
            stepTheme: 'blue',
            stepTitle: 'Déclaration, dimensions et convention d’indexation `M[ligne, colonne]`',
            paragraphText:
              'Un tableau à deux dimensions modélise naturellement toute feuille de calcul, grille tarifaire, image numérique en pixels ou matrice mathématique.\n' +
              '• **Déclaration** : `M : TABLEAU[1..L, 1..C] DE REEL` réserve exactement $L \\times C$ cases de type `REEL`.\n' +
              '• **Convention Li-Co** : `M[2, 3]` désigne l’élément de la **2e ligne** et de la **3e colonne** (à ne jamais confondre avec `M[3, 2]`, qui est en 3e ligne, 2e colonne).\n' +
              '• **Matrice carrée** : lorsque $L = C = N$, on dispose de propriétés géométriques (diagonales, symétrie, triangles supérieur et inférieur).\n' +
              'Exemple : pour les notes de 35 étudiants dans 6 matières, on déclare `Notes : TABLEAU[1..35, 1..6] DE REEL` (210 cases) ; `Notes[12, 4]` est la note du 12e étudiant dans la 4e matière.',
            keyRule:
              'Toujours lire et écrire `M[i, j]` dans l’ordre (Ligne, Colonne), avec `1 <= i <= L` et `1 <= j <= C`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Dans `Notes : TABLEAU[1..40, 1..5] DE REEL` (40 étudiants en lignes, 5 matières en colonnes), que représente `Notes[7, 3]` ?',
              options: [
                'La note du 3e étudiant dans la 7e matière.',
                'La note du 7e étudiant dans la 3e matière.',
                'La moyenne des 7 premières notes de la 3e matière.',
                'Un débordement d’indice.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le premier indice (`7`, dans `1..40`) désigne la ligne (7e étudiant) et le second indice (`3`, dans `1..5`) désigne la colonne (3e matière).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Parcours 2D',
            stepTheme: 'green',
            stepTitle: 'Parcours par lignes vs parcours par colonnes et sommes marginales',
            paragraphText:
              'L’ordre d’imbrication des deux boucles `POUR` détermine le sens de balayage de la matrice.\n' +
              '• **Parcours par lignes** : boucle externe sur `i` (`1..L`), boucle interne sur `j` (`1..C`). On lit la ligne 1 en entier, puis la ligne 2, etc.\n' +
              '• **Parcours par colonnes** : boucle externe sur `j` (`1..C`), boucle interne sur `i` (`1..L`). On descend toute la colonne 1, puis la colonne 2, etc.\n' +
              '• **Emplacement de la remise à zéro** : pour sommer chaque ligne séparément, `sLigne ← 0` doit se trouver **entre** le `POUR i` et le `POUR j` (sinon les lignes s’accumuleraient entre elles !).\n' +
              'Exemple : pour la moyenne de chaque étudiant `i` sur 5 matières, `POUR i DE 1 A 40` → `s ← 0` → `POUR j DE 1 A 5 : s ← s + Notes[i, j]` → `ECRIRE(s / 5)`.',
            keyRule:
              'Pour une somme globale de toute la matrice, initialise `total ← 0` AVANT les deux boucles ; pour une somme par ligne, initialise `sLigne ← 0` ENTRE les deux boucles.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p2_q2',
              type: 'mcq',
              prompt: 'Si l’on veut calculer la moyenne de chaque matière (colonne `j` parmi `1..5`) sur l’ensemble des `40` étudiants (lignes `i`), quel ordre de boucles est nécessaire ?',
              options: [
                'Externe `POUR i DE 1 A 40`, interne `POUR j DE 1 A 5`, avec `s ← 0` entre les deux.',
                'Externe `POUR j DE 1 A 5`, puis `s ← 0`, interne `POUR i DE 1 A 40` avec `s ← s + Notes[i, j]`, puis `ECRIRE(s / 40)`.',
                'Une seule boucle `POUR i DE 1 A 40` suffit.',
                'Externe `POUR j DE 1 A 5`, interne `POUR i DE 1 A 40`, avec `s ← 0` dans la boucle interne.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On fixe la matière `j` dans la boucle externe, on remet `s ← 0` pour cette matière, on additionne les 40 étudiants `Notes[i, j]` dans la boucle interne, puis on divise par `40`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Diagonales',
            stepTheme: 'violet',
            stepTitle: 'Diagonale principale, diagonale secondaire et trace d’une matrice carrée',
            paragraphText:
              'Sur une matrice carrée `M[1..N, 1..N]`, exploiter la relation mathématique entre `i` et `j` permet d’accélérer considérablement les calculs.\n' +
              '• **Diagonale principale** : cases où `i = j` → `M[1,1], M[2,2], ..., M[N,N]`. La **trace** (somme diagonale) se calcule en **une seule boucle** : `POUR i DE 1 A N FAIRE tr ← tr + M[i, i] FINPOUR` ($N$ opérations au lieu de $N^2$ !).\n' +
              '• **Diagonale secondaire** : cases où `i + j = N + 1`, donc `j = N + 1 - i` → `M[1, N], M[2, N-1], ..., M[N, 1]`.\n' +
              '• **Triangles** : triangle supérieur strict (`i < j`), triangle inférieur strict (`i > j`).\n' +
              'Exemple : pour `N = 4`, la diagonale secondaire passe par `(1, 4), (2, 3), (3, 2), (4, 1)` (la somme des indices vaut toujours `5 = N + 1`).',
            formula: {
              name: 'Équations des zones d’une matrice carrée (base 1)',
              formula: '\\text{Diag. princ. : } i = j \\quad ; \\quad \\text{Diag. sec. : } i + j = N + 1 \\quad ; \\quad \\text{Tri. sup. : } i < j',
              note: 'Utiliser une boucle unique pour la diagonale divise le nombre d’opérations par N !',
            },
            keyRule:
              'Inutile d’écrire une double boucle avec `SI i = j` pour parcourir la diagonale : une boucle simple `POUR i DE 1 A N` accédant directement à `M[i, i]` est $N$ fois plus rapide.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p2_q3',
              type: 'mcq',
              prompt: 'Dans une matrice carrée `M[1..5, 1..5]`, quelle expression désigne les éléments de la diagonale secondaire dans `POUR i DE 1 A 5` ?',
              options: [
                'M[i, i]',
                'M[i, 5 - i]',
                'M[i, 6 - i]',
                'M[5, i]',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En base 1 avec `N = 5`, on a `i + j = N + 1 = 6`, donc `j = 6 - i`. Pour `i = 1..5`, on obtient `(1,5), (2,4), (3,3), (4,2), (5,1)`. (Avec `5 - i`, `i = 5` donnerait l’indice invalide `0` !)',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Transposition & Symétrie',
            stepTheme: 'green',
            stepTitle: 'Transposition et test de symétrie d’une matrice',
            paragraphText:
              'La transposition et le test de symétrie sont omniprésents en algèbre linéaire, en analyse de données et dans les graphes non orientés.\n' +
              '• **Transposée `T` de `M[1..L, 1..C]`** : `T` a pour dimensions `[1..C, 1..L]` et vérifie `T[j, i] ← M[i, j]` pour tout `(i, j)`.\n' +
              '• **Test de symétrie d’une matrice carrée `M[1..N, 1..N]`** : `M` est symétrique si `M[i, j] = M[j, i]` pour tout `i, j`. Il suffit de tester uniquement le **triangle supérieur strict** (`POUR i DE 1 A N - 1`, `POUR j DE i + 1 A N`) pour éviter les comparaisons inutiles sur la diagonale et en double !\n' +
              '• **Transposition en place (matrice carrée)** : échanger `M[i, j]` et `M[j, i]` uniquement pour `j > i` (sinon on échangerait chaque paire deux fois !).\n' +
              'Exemple : dans une matrice de distances routières entre villes ivoiriennes (Abidjan, Yamoussoukro, Bouaké), `Dist[i, j] = Dist[j, i]` traduit la symétrie des trajets.',
            keyRule:
              'Pour tester la symétrie ou transposer en place une matrice carrée, ne parcours que le triangle supérieur strict (`j` de `i + 1` à `N`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p2_q4',
              type: 'mcq',
              prompt: 'Pourquoi la transposition EN PLACE d’une matrice carrée `M[1..N, 1..N]` doit-elle échanger `M[i, j]` et `M[j, i]` uniquement pour `j` allant de `i + 1` à `N` ?',
              options: [
                'Parce que les éléments sous la diagonale valent toujours 0.',
                'Parce que parcourir toute la matrice échangerait chaque paire `(i, j)` et `(j, i)` deux fois, ramenant la matrice à son état initial.',
                'Parce que la diagonale ne peut pas être lue.',
                'Parce que `M[j, i]` n’existe pas si `j < i`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si on échange `M[1, 3]` avec `M[3, 1]` à `(i=1, j=3)`, puis qu’on ré-échange `M[3, 1]` avec `M[1, 3]` à `(i=3, j=1)`, la matrice revient exactement à son état de départ ! Restreindre à `j > i` effectue chaque échange exactement une fois.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Produit matriciel',
            stepTheme: 'violet',
            stepTitle: 'Addition et produit de deux matrices : triple boucle imbriquée',
            paragraphText:
              'Les opérations matricielles fondamentales de l’algèbre linéaire se traduisent directement par des boucles imbriquées en algorithmique.\n' +
              '• **Somme $C = A + B$** : exige les mêmes dimensions `(L, C)` et une double boucle : `C[i, j] ← A[i, j] + B[i, j]`.\n' +
              '• **Produit $P = A \\times B$** : si $A$ est de taille `(L, K)` et $B$ de taille `(K, C)` (le nombre de colonnes de $A$ doit égaler le nombre de lignes de $B$), alors $P$ est de taille `(L, C)`.\n' +
              '• **Triple boucle** : pour chaque `(i, j)` de $P$, on initialise `P[i, j] ← 0`, puis `POUR k DE 1 A K FAIRE P[i, j] ← P[i, j] + A[i, k] * B[k, j] FINPOUR`.\n' +
              'Exemple : calculer le coût total de 3 projets nécessitant 4 types de matériels vendus chez 2 fournisseurs est exactement un produit matriciel `(3 × 4) × (4 × 2) → (3 × 2)`.',
            formula: {
              name: 'Coefficient général du produit matriciel',
              formula: 'P[i, j] = \\sum_{k=1}^{K} A[i, k] \\times B[k, j] \\qquad (\\text{complexité } L \\times C \\times K)',
              note: 'Ne jamais oublier d’initialiser `P[i, j] ← 0` juste avant la boucle sur `k`.',
            },
            keyRule:
              'Dans le produit matriciel `A × B`, la boucle interne sur `k` parcourt simultanément la ligne `i` de `A` (`A[i, k]`) et la colonne `j` de `B` (`B[k, j]`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p2_q5',
              type: 'mcq',
              prompt: 'Pour multiplier une matrice `A[1..3, 1..4]` par une matrice `B[1..4, 1..5]`, quelles sont les dimensions de la matrice résultat `P` et combien de multiplications élémentaires sont effectuées ?',
              options: [
                'Dimensions 3 × 5, et 60 multiplications (3 × 5 × 4).',
                'Dimensions 4 × 4, et 16 multiplications.',
                'Dimensions 3 × 5, et 15 multiplications.',
                'Le produit est impossible.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '`A` est `(3 × 4)` et `B` est `(4 × 5)` : la dimension commune est `4`, donc `P` est `(3 × 5)` (`15` cases), et chaque case nécessite `4` multiplications → `3 × 5 × 4 = 60` multiplications.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Trouver le maximum d’une matrice et ses coordonnées `(ligMax, colMax)`',
            paragraphText:
              'Rechercher le pic d’activité dans un tableau 2D (par exemple la meilleure vente par agence et par mois) généralise directement l’algorithme 1D.\n' +
              '• **Initialisation** : `maxi ← M[1, 1] ; ligMax ← 1 ; colMax ← 1`.\n' +
              '• **Double parcours** : `POUR i DE 1 A L` puis `POUR j DE 1 A C` : `SI M[i, j] > maxi ALORS maxi ← M[i, j] ; ligMax ← i ; colMax ← j FINSI`.\n' +
              '• **Utilité pratique** : on récupère non seulement la valeur record `maxi`, mais aussi l’agence (`ligMax`) et le mois (`colMax`) où elle a été réalisée.\n' +
              'Exemple : sur une matrice 2×3 `[[12, 45, 30], [50, 28, 41]]`, le parcours identifie `maxi = 50` aux coordonnées `(2, 1)`.',
            keyRule:
              'En 2D comme en 1D, l’initialisation du maximum ou du minimum se fait toujours avec le premier élément `M[1, 1]` et les coordonnées `(1, 1)`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p2_q6',
              type: 'mcq',
              prompt: 'Quelle initialisation est correcte pour rechercher le MINIMUM (et sa position) d’une matrice quelconque `M[1..L, 1..C]` pouvant contenir des nombres positifs comme négatifs ?',
              options: [
                'mini ← 0 ; ligMin ← 0 ; colMin ← 0',
                'mini ← M[1, 1] ; ligMin ← 1 ; colMin ← 1',
                'mini ← -1 ; ligMin ← 1 ; colMin ← 1',
                'mini ← L * C ; ligMin ← L ; colMin ← C',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Initialiser à `0` ou `-1` échoue si toutes les valeurs de la matrice sont strictement positives (ex. températures entre 25 et 38 °C). `mini ← M[1, 1]` est toujours exact.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_algo_ch4_p3',
        order: 3,
        title: 'Recherche séquentielle, dichotomie et tris fondamentaux',
        summary:
          'Comparer recherche linéaire et dichotomique ($O(n)$ vs $O(\\log_2 n)$) et maîtriser le principe des trois tris classiques (sélection, bulles, insertion).',
        conceptExplanation:
          'Retrouver rapidement une information et ordonner un jeu de données sont les deux problèmes les plus universels de l’informatique.\n\n' +
          '• **Recherche séquentielle (linéaire)** : parcourt un tableau quelconque case par case jusqu’à trouver la cible `val` ou atteindre la fin (avec arrêt anticipé via `TANTQUE (i <= N) ET NON trouve`). Elle fonctionne sur **tout tableau** (trié ou non), en au plus `N` comparaisons ($O(N)$).\n' +
          '• **Recherche dichotomique (binaire)** : exige impérativement un **tableau déjà trié** ! Elle compare `val` au milieu `m = (g + d) div 2` et élimine la moitié de l’intervalle à chaque étape, n’exigeant au pire que $\\lfloor \\log_2 N \\rfloor + 1$ comparaisons ($O(\\log_2 N)$).\n' +
          '• **Tris fondamentaux** : **Tri par sélection** (chercher le minimum de la partie non triée et l’échanger en position `i`), **Tri à bulles** (comparer et permuter les éléments adjacents mal ordonnés jusqu’à ce qu’il n’y ait plus d’échange) et **Tri par insertion** (insérer chaque élément `T[i]` à sa juste place dans le préfixe déjà trié `T[1..i-1]`), tous de complexité quadratique $O(N^2)$ au pire cas.',
        formulas: [
          {
            name: 'Indice médian et coût de la dichotomie',
            formula: 'm = (g + d) \\;\\text{div}\\; 2 \\; ; \\quad C_{\\max}(N) = \\lfloor \\log_2 N \\rfloor + 1',
            note: 'Pour N = 1 000 000 d’éléments triés, la dichotomie trouve la réponse en au plus 20 comparaisons (contre 1 000 000 en linéaire) !',
          },
          {
            name: 'Nombre de comparaisons du tri par sélection',
            formula: 'C(N) = \\sum_{i=1}^{N-1} (N - i) = \\frac{N(N - 1)}{2} = O(N^2)',
            note: 'Identique quel que soit l’ordre initial, avec au plus N - 1 échanges.',
          },
        ],
        keyRule:
          'Ne JAMAIS lancer une recherche dichotomique sur un tableau non trié : la précondition « tableau trié » est absolue !',
        workedExample: {
          title: 'Trace de la recherche dichotomique vs un passage de tri par sélection',
          statement:
            '1) Rechercher `val = 34` dans le tableau trié `T[1..7] = [5, 12, 19, 27, 34, 48, 63]` par dichotomie. 2) Effectuer les deux premières étapes du tri par sélection sur `[29, 10, 14, 37, 13]`.',
          methodSteps: [
            '1) Dichotomie : départ `g = 1, d = 7` → `m = (1+7) div 2 = 4`. `T[4] = 27 < 34`, donc `g ← m + 1 = 5`.',
            'Tour 2 : `g = 5, d = 7` → `m = (5+7) div 2 = 6`. `T[6] = 48 > 34`, donc `d ← m - 1 = 5`.',
            'Tour 3 : `g = 5, d = 5` → `m = 5`. `T[5] = 34 = val` → trouvé à l’indice `5` en 3 comparaisons !',
            '2) Tri sélection sur `[29, 10, 14, 37, 13]` : à `i = 1`, le min de `[1..5]` est `10` (indice 2) → échange `T[1] ↔ T[2]` ⇒ `[10, 29, 14, 37, 13]`. À `i = 2`, le min de `[2..5]` est `13` (indice 5) → échange `T[2] ↔ T[5]` ⇒ `[10, 13, 14, 37, 29]`.',
          ],
          conclusion:
            'La dichotomie converge en 3 étapes vers l’indice 5 ; après 2 tours du tri par sélection, les 2 plus petits éléments (`10, 13`) sont définitivement placés en tête.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Recherche linéaire',
            stepTheme: 'blue',
            stepTitle: 'Recherche séquentielle avec arrêt anticipé (`TANTQUE`)',
            paragraphText:
              'La recherche séquentielle consiste à examiner les éléments d’un tableau un à un depuis le début jusqu’à trouver la valeur cible `val` ou constater son absence.\n' +
              '• **Principe avec arrêt anticipé** : `i ← 1 ; trouve ← FAUX ; TANTQUE (i <= N) ET (NON trouve) FAIRE SI T[i] = val ALORS trouve ← VRAI SINON i ← i + 1 FINSI FINTANTQUE`.\n' +
              '• **Avantage du `TANTQUE` sur le `POUR`** : si la valeur cherchée se trouve en case `3` sur `10 000` dossiers clients, on s’arrête immédiatement au 3e test sans inspecter les `9 997` cases restantes.\n' +
              '• **Coût** : `1` comparaison au meilleur cas, `N` comparaisons au pire cas (valeur absente ou en dernière position) → complexité linéaire $O(N)$.\n' +
              'Exemple : vérifier si un numéro de matricule existe dans une liste non ordonnée d’inscriptions du jour utilise la recherche séquentielle.',
            keyRule:
              'Toujours tester `(i <= N)` AVANT d’évaluer `T[i] = val` (évaluation en court-circuit) afin d’éviter un débordement d’indice quand l’élément est absent.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p3_q1',
              type: 'mcq',
              prompt: 'Dans une recherche séquentielle sur un tableau de `500` éléments non triés, combien de comparaisons sont effectuées au PIRE CAS (lorsque l’élément recherché est absent) ?',
              options: [
                '1 comparaison',
                '9 comparaisons',
                '250 comparaisons',
                '500 comparaisons',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Comme le tableau n’est pas trié, il est impossible d’affirmer que l’élément est absent avant d’avoir inspecté l’intégralité des `500` cases : `500` comparaisons au pire cas ($O(N)$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Dichotomie',
            stepTheme: 'green',
            stepTitle: 'Recherche dichotomique sur un tableau trié : diviser pour régner',
            paragraphText:
              'Lorsque les données sont déjà triées par ordre croissant (annuaire, dictionnaire, base d’identifiants triés), la recherche dichotomique divise l’espace de recherche par 2 à chaque comparaison.\n' +
              '• **Initialisation** : `g ← 1 ; d ← N ; trouve ← FAUX`.\n' +
              '• **Boucle** : `TANTQUE (g <= d) ET (NON trouve) FAIRE m ← (g + d) div 2` : si `T[m] = val` → `trouve ← VRAI` ; sinon si `T[m] < val` → `g ← m + 1` (chercher à droite) ; sinon → `d ← m - 1` (chercher à gauche).\n' +
              '• **Piège du `+1` et `-1`** : écrire `g ← m` au lieu de `g ← m + 1` peut provoquer une boucle infinie lorsque `d = g + 1` !\n' +
              'Exemple : sur `1 024` produits triés par code-barres, $2^{10} = 1024$ ⇒ la dichotomie répond en au plus `11` comparaisons, contre `1 024` en recherche linéaire !',
            formula: {
              name: 'Gain exponentiel de la dichotomie',
              formula: 'N = 2^k \\implies \\text{au plus } k + 1 \\text{ comparaisons } (O(\\log_2 N))',
              note: 'Doubler la taille du tableau n’ajoute qu’UNE SEULE comparaison supplémentaire !',
            },
            keyRule:
              'La dichotomie exige un tableau **trié**, teste l’indice médian `m = (g + d) div 2`, et met strictement à jour `g ← m + 1` ou `d ← m - 1` tant que `g <= d`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p3_q2',
              type: 'mcq',
              prompt: 'Sur le tableau trié `T[1..8] = [4, 10, 15, 22, 31, 40, 52, 60]`, on recherche `val = 52` par dichotomie (`g = 1, d = 8`). Quels indices `m` successifs sont testés ?',
              options: [
                'm = 4, puis m = 6, puis m = 7',
                'm = 1, 2, 3, 4, 5, 6, 7',
                'm = 4, puis m = 7 directement',
                'm = 5, puis m = 7',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Étape 1 : `g=1, d=8 → m = (1+8) div 2 = 4`, `T[4]=22 < 52 → g=5`. Étape 2 : `g=5, d=8 → m = (5+8) div 2 = 6`, `T[6]=40 < 52 → g=7`. Étape 3 : `g=7, d=8 → m = (7+8) div 2 = 7`, `T[7]=52` trouvé !',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Tri par sélection',
            stepTheme: 'green',
            stepTitle: 'Tri par sélection : placer le minimum successif à chaque étape',
            paragraphText:
              'Le tri par sélection est l’algorithme de tri le plus intuitif : à chaque position `i` (de `1` à `N - 1`), on recherche le plus petit élément dans la zone non triée `T[i..N]` et on l’échange avec `T[i]`.\n' +
              '• **Invariant de boucle** : après le tour `i`, les `i` premiers éléments `T[1..i]` contiennent les `i` plus petites valeurs du tableau, déjà à leur position définitive.\n' +
              '• **Structure** : `POUR i DE 1 A N - 1` → `posMin ← i` → `POUR j DE i + 1 A N : SI T[j] < T[posMin] ALORS posMin ← j` → échanger `T[i]` et `T[posMin]` (si `posMin <> i`).\n' +
              '• **Propriété remarquable** : il réalise toujours $\\frac{N(N-1)}{2}$ comparaisons, mais au maximum **`N - 1` échanges** (très utile lorsque déplacer les enregistrements coûte cher).\n' +
              'Exemple : sur `[18, 5, 12, 3]`, tour 1 place `3` en tête (`[3, 5, 12, 18]`), puis tours 2 et 3 ne font plus d’échange.',
            keyRule:
              'Le tri par sélection parcourt `i` de `1` à `N - 1` (le dernier élément est automatiquement à sa place) et minimise le nombre total d’échanges (au plus `N - 1`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p3_q3',
              type: 'mcq',
              prompt: 'Sur le tableau `[40, 15, 30, 10, 25]`, quel est l’état du tableau juste après la PREMIÈRE itération (`i = 1`) du tri par sélection (ordre croissant) ?',
              options: [
                '[15, 40, 30, 10, 25]',
                '[10, 15, 30, 40, 25]',
                '[10, 40, 15, 30, 25]',
                '[15, 30, 10, 25, 40]',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À `i = 1`, on cherche le minimum dans `T[1..5]` : c’est `10` à l’indice `4`. On échange alors `T[1]` (`40`) et `T[4]` (`10`), ce qui donne `[10, 15, 30, 40, 25]`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Tri à bulles',
            stepTheme: 'green',
            stepTitle: 'Tri à bulles (Bubble Sort) et optimisation par drapeau d’échange',
            paragraphText:
              'Le tri à bulles compare répétitivement les paires d’éléments **adjacents** `(T[j], T[j+1])` et les échange dès que `T[j] > T[j+1]`, faisant ainsi « remonter » les plus grandes valeurs vers la fin du tableau comme des bulles.\n' +
              '• **Invariant** : à l’issue du 1er passage, le maximum absolu est garanti en position `N` ; après le $k$-ième passage, les $k$ plus grands éléments sont définitivement fixés en fin de tableau.\n' +
              '• **Optimisation majeure** : utiliser un booléen `echange` dans un `REPETER … JUSQUA NON echange` (ou `TANTQUE echange`). Si un passage complet n’effectue aucun échange, le tableau est déjà trié et on s’arrête aussitôt ($O(N)$ sur un tableau déjà trié !).\n' +
              'Exemple : sur `[7, 3, 9, 2]`, 1er passage : `(7,3)→(3,7)`, `(7,9)` ok, `(9,2)→(2,9)` ⇒ `[3, 7, 2, 9]` (`9` est définitivement placé en fin).',
            keyRule:
              'Avec un drapeau booléen `echange`, le tri à bulles détecte en un seul passage qu’un tableau est déjà trié ($O(N)$ au meilleur cas, $O(N^2)$ au pire cas).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p3_q4',
              type: 'mcq',
              prompt: 'Sur le tableau `[8, 5, 12, 4]`, quel est l’état du tableau exactement à la fin du PREMIER passage complet du tri à bulles (ordre croissant) ?',
              options: [
                '[4, 5, 8, 12]',
                '[5, 8, 4, 12]',
                '[4, 8, 5, 12]',
                '[5, 4, 8, 12]',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Passage 1 : `j=1` compare `(8,5)` → échange ⇒ `[5, 8, 12, 4]`. `j=2` compare `(8,12)` → pas d’échange. `j=3` compare `(12,4)` → échange ⇒ `[5, 8, 4, 12]`. Le max `12` a bien remonté tout à droite.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Tri par insertion',
            stepTheme: 'green',
            stepTitle: 'Tri par insertion : comme trier sa main de cartes',
            paragraphText:
              'Le tri par insertion construit progressivement une partie gauche triée en insérant chaque nouvel élément `cle ← T[i]` (pour `i` de `2` à `N`) à sa place exacte parmi `T[1..i-1]`.\n' +
              '• **Mécanisme par décalage** : `cle ← T[i] ; j ← i - 1 ; TANTQUE (j >= 1) ET (T[j] > cle) FAIRE T[j + 1] ← T[j] ; j ← j - 1 FINTANTQUE ; T[j + 1] ← cle`.\n' +
              '• **Efficacité réelle** : bien que sa complexité au pire cas (tableau inversé) soit $O(N^2)$, il est extrêmement rapide ($O(N)$) sur les tableaux déjà presque triés et sur les petits tableaux (utilisé à la base de Timsort en Python et Java !).\n' +
              'Exemple : dans `[4, 10, 15, 7]`, pour `i = 4` (`cle = 7`), on décale `15` puis `10` vers la droite, puis on insère `7` en case `2` ⇒ `[4, 7, 10, 15]`.',
            keyRule:
              'Dans le tri par insertion, on décale les éléments plus grands vers la droite par une boucle `TANTQUE` avant de déposer `cle` en `T[j + 1]`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p3_q5',
              type: 'mcq',
              prompt: 'Pourquoi le tri par insertion est-il très performant lorsque l’on ajoute un nouvel élément à un tableau presque déjà trié ?',
              options: [
                'Parce qu’il utilise une recherche dichotomique.',
                'Parce que la boucle `TANTQUE (j >= 1) ET (T[j] > cle)` s’arrête immédiatement dès qu’elle rencontre un élément `<= cle`, ne faisant presque aucun décalage ($O(N)$).',
                'Parce qu’il n’effectue aucune comparaison.',
                'Parce qu’il divise la taille du tableau par 2.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si le tableau est déjà trié, `T[i - 1] <= T[i]` dès le 1er test : le `TANTQUE` interne fait 0 décalage pour chaque `i`, soit seulement `N - 1` comparaisons au total ($O(N)$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Complexité',
            stepTheme: 'violet',
            stepTitle: 'Comparer les ordres de grandeur : $O(1)$, $O(\\log N)$, $O(N)$, $O(N^2)$',
            paragraphText:
              'En informatique, comparer deux algorithmes ne consiste pas à chronométrer un ordinateur particulier, mais à compter comment le nombre d’opérations croît avec la taille `N` des données (complexité asymptotique).\n' +
              '• **$O(1)$ (constant)** : accès direct à `T[i]` ou échange de deux variables (temps indépendant de `N`).\n' +
              '• **$O(\\log_2 N)$ (logarithmique)** : recherche dichotomique — quasi instantané même pour des millions de lignes.\n' +
              '• **$O(N)$ (linéaire)** : parcours simple, somme, maximum, recherche séquentielle.\n' +
              '• **$O(N^2)$ (quadratique)** : boucles imbriquées sur `N`, tris sélection/bulles/insertion — si `N` est multiplié par `10`, le temps de calcul est multiplié par `100` !\n' +
              'Exemple : pour `N = 10 000` dossiers, $O(\\log_2 N) \\approx 14$ ops, $O(N) = 10\\,000$ ops, et $O(N^2) = 100\\,000\\,000$ ops.',
            formula: {
              name: 'Hiérarchie des complexités usuelles',
              formula: 'O(1) \\ll O(\\log_2 N) \\ll O(N) \\ll O(N \\log_2 N) \\ll O(N^2)',
              note: 'Des tris avancés (Tri Fusion, Tri Rapide) atteignent O(N log2 N), indispensables pour les grands volumes de données.',
            },
            keyRule:
              'Multiplier la taille `N` des données par `10` multiplie le temps par `10` en $O(N)$, par `100` en $O(N^2)$, et ajoute à peine `+3` ou `+4` étapes en $O(\\log_2 N)$ !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch4_p3_q6',
              type: 'mcq',
              prompt: 'Si un algorithme de complexité $O(N^2)$ (comme le tri par sélection) met `2 secondes` pour trier `10 000` factures, combien de temps mettra-t-il approximativement pour trier `30 000` factures (taille multipliée par 3) ?',
              options: [
                '6 secondes (× 3)',
                '18 secondes (× 9)',
                '4 secondes (× 2)',
                '60 secondes (× 30)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En complexité quadratique $O(N^2)$, lorsque `N` est multiplié par $k = 3$, le nombre d’opérations (et donc le temps d’exécution) est multiplié par $k^2 = 3^2 = 9$, soit environ $2 \\times 9 = 18$ secondes.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 5 : Modularité — Fonctions, procédures, paramètres et récursivité
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch5',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 5,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Algorithmique',
    title: 'Chapitre 5 — Modularité : fonctions, procédures, passage de paramètres et récursivité',
    summary:
      'Fonctions prédéfinies et définies par l’utilisateur (profil, paramètres formels/effectifs, variables locales, RETOURNER), procédures et statuts (E, S, E/S ; passage par valeur vs par adresse), et récursivité (cas de base, appel récursif, pile d’appels).',
    points: [
      // POINT 5.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch5_p1',
        order: 1,
        title: 'Fonctions : spécification, signature, variables locales et `RETOURNER`',
        summary:
          'Concevoir et appeler des fonctions réutilisables, distinguer paramètres formels et effectifs, et respecter les conditions d’appel (préconditions).',
        conceptExplanation:
          'Une **fonction** est un sous-programme nommé qui reçoit des données via ses **paramètres**, effectue un calcul isolé avec ses propres **variables locales**, et renvoie exactement **une valeur résultat** à l’unité appelante grâce à l’instruction `RETOURNER <expression>`.\n\n' +
          'Son **profil (ou signature)** décrit la liste des types d’entrée suivie du type de sortie : par exemple `maxdeux : (ENTIER, ENTIER) → ENTIER` ou `sous_chaine : (CHAINE, ENTIER, ENTIER) → CHAINE`. Comme les bibliothèques de fonctions prédéfinies (`racine`, `longueur`, `sous_chaine`), toute fonction utilisateur doit préciser sa **spécification** et ses **conditions d’appel** (ex. `x >= 0` pour `racine(x)`).\n\n' +
          'À l’appel (qui s’écrit toujours à l’intérieur d’une expression, comme `maxi ← maxdeux(mab, mcd)`), il existe une **correspondance biunivoque par ordre d’écriture** entre les **paramètres effectifs (arguments)** fournis à l’appel et les **paramètres formels** déclarés dans l’en-tête.',
        formulas: [
          {
            name: 'Profil (signature) d’une fonction',
            formula: '\\text{ident} : (T_1, T_2, \\dots, T_k) \\longrightarrow T_{\\text{résultat}}',
            note: 'Ex. `moyenne : (ENTIER, ENTIER) → REEL` ; `maxdeux : (ENTIER, ENTIER) → ENTIER`.',
          },
          {
            name: 'Composition d’appels (Maximum de 4 entiers)',
            formula: '\\text{maxi} \\leftarrow \\text{maxdeux}(\\text{maxdeux}(a, b),\\; \\text{maxdeux}(c, d))',
            note: 'Remplace 3 blocs `SI/SINON` dupliqués par 3 appels lisibles à une seule fonction vérifiée.',
          },
        ],
        keyRule:
          'Une fonction renvoie une UNIQUE valeur (via `RETOURNER`) et s’appelle dans le contexte d’une expression (`res ← f(...)`, `ECRIRE(f(...))`, `SI f(...) > 0`).',
        workedExample: {
          title: 'Fonction `moyenne` et factorisation de `Maxquatre` avec `maxdeux`',
          statement:
            '1) Écrire la fonction `moyenne(a, b : ENTIER) : REEL` qui retourne la moyenne réelle de deux entiers. 2) Montrer comment la fonction `maxdeux(x, y : ENTIER) : ENTIER` simplifie le calcul du maximum de 4 entiers `a, b, c, d`.',
          methodSteps: [
            'Définir `FONCTION moyenne(a, b : ENTIER) : REEL` → `DEBUT RETOURNER ((a + b) / 2) FIN` (profil `(ENTIER, ENTIER) → REEL`).',
            'Définir `FONCTION maxdeux(x, y : ENTIER) : ENTIER` avec variable locale `mxy : ENTIER`, `SI x > y ALORS mxy ← x SINON mxy ← y FINSI`, puis `RETOURNER(mxy)`.',
            'Dans l’algorithme principal `Maxquatre` : `LIRE(a, b, c, d)`, `mab ← maxdeux(a, b)`, `mcd ← maxdeux(c, d)`, `maxi ← maxdeux(mab, mcd)`, `ECRIRE(maxi)`.',
            'Observer qu’aucune instruction conditionnelle n’est dupliquée : la lisibilité et la maintenabilité sont décuplées.',
          ],
          conclusion:
            'Si `a = 7, b = 12, c = 19, d = 4`, alors `mab = 12`, `mcd = 19` et `maxi = maxdeux(12, 19) = 19`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Bibliothèques',
            stepTheme: 'blue',
            stepTitle: 'Fonctions prédéfinies, spécification et conditions d’appel',
            paragraphText:
              'Tout langage de programmation fournit une boîte à outils de fonctions déjà codées, regroupées par domaine dans des **bibliothèques** (mathématiques, chaînes, système).\n' +
              '• **Exemples usuels** : `racine(x)` pour l’hypoténuse `c ← racine((a * a) + (b * b))` ; `longueur(ch)` et `sous_chaine(ch, debut, nb)` pour extraire les 3 premiers caractères (`sous_chaine(chaine, 1, 3)`).\n' +
              '• **Contrat (préconditions)** : une fonction garantit un résultat conforme à sa **spécification** uniquement si l’appelant respecte ses **conditions d’appel**.\n' +
              '• **Responsabilité en cas d’erreur** : si un algorithme appelle `racine(-9)` ou `sous_chaine("CI", 1, 5)` sans tester `nbcar >= 3`, c’est l’**algorithme appelant** qui est faux, pas la fonction !\n' +
              'Exemple : avant d’afficher le préfixe opérateur d’un numéro de téléphone, on vérifie toujours `SI longueur(tel) >= 2 ALORS pref ← sous_chaine(tel, 1, 2) FINSI`.',
            keyRule:
              'Avant d’appeler une fonction, l’algorithme appelant est responsable du respect strict de ses conditions d’appel (préconditions).',
            konanTip:
              'Documente toujours la précondition dans le commentaire juste sous l’en-tête de tes fonctions (ex. `/* Précondition : n >= 0 */`) : c’est une marque de rigueur professionnelle.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p1_q1',
              type: 'mcq',
              prompt: 'Un algorithme appelle la fonction prédéfinie `racine(x)` avec `x = -16` sans test préalable et provoque une erreur. Où se situe la faute ?',
              options: [
                'Dans le code interne de la fonction `racine`.',
                'Dans l’algorithme appelant, qui n’a pas respecté la condition d’appel (`x >= 0`) de `racine`.',
                'Dans la variable recevant le résultat.',
                'Dans le compilateur qui devrait transformer `-16` en `16`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une fonction ne garantit sa spécification que lorsque ses conditions d’appel sont respectées (`x >= 0` pour `racine`). Appeler `racine(-16)` est une faute de l’algorithme appelant.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Anatomie',
            stepTheme: 'blue',
            stepTitle: 'Structure d’une fonction : en-tête, signature, variables locales et `RETOURNER`',
            paragraphText:
              'Lorsque les bibliothèques standard ne suffisent pas, on définit ses propres fonctions à l’extérieur de l’algorithme principal.\n' +
              '• **En-tête** : mot-clé `FONCTION`, identificateur, liste des paramètres formels typés, et type du résultat renvoyé (`: <type>`).\n' +
              '• **Signature (profil)** : résume l’interface externe : `liste des types d’entrée → type du résultat` (ex. `maxdeux : (ENTIER, ENTIER) → ENTIER`).\n' +
              '• **Variables locales** : déclarées à l’intérieur de la fonction, elles n’existent en mémoire que le temps de son exécution et restent invisibles à l’extérieur.\n' +
              '• **Instruction `RETOURNER <expr>`** : calcule la valeur résultat (compatible avec le type de retour), la transmet à l’appelant et met immédiatement fin à l’exécution de la fonction.\n' +
              'Exemple : `FONCTION valAbs(x : ENTIER) : ENTIER` utilise une variable locale `abs : ENTIER`, affecte `x` ou `-x`, puis exécute `RETOURNER(abs)`.',
            formula: {
              name: 'Définition canonique d’une fonction',
              formula: '\\text{FONCTION } f(p_1:T_1, \\dots, p_k:T_k) : T_r \\;\\; \\text{DEBUT } \\dots \\text{ RETOURNER}(\\text{expr}) \\text{ FIN}',
              note: 'Toute fonction doit posséder au moins une instruction RETOURNER renvoyant une valeur de type compatible avec Tr.',
            },
            keyRule:
              'Une fonction communique son résultat exclusivement par `RETOURNER` (et non par un `ECRIRE` à l’écran, qui n’est pas récupérable dans un calcul !).',
            konanTip:
              'Piège très fréquent : mettre `ECRIRE(res)` à la place de `RETOURNER(res)` ! Un `ECRIRE` affiche du texte à l’utilisateur mais ne renvoie AUCUNE valeur utilisable dans `total ← f(a) + f(b)`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p1_q2',
              type: 'mcq',
              prompt: 'Quel est le profil (signature) exact de la fonction `sous_chaine(ch : CHAINE, pos : ENTIER, nb : ENTIER) : CHAINE` ?',
              options: [
                '(CHAINE) → (ENTIER, ENTIER)',
                '(CHAINE, ENTIER, ENTIER) → CHAINE',
                '(ENTIER, ENTIER) → CHAINE',
                'CHAINE → ENTIER',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le profil d’une fonction s’écrit `(types des paramètres d’entrée dans l’ordre) → type du résultat`, soit ici `(CHAINE, ENTIER, ENTIER) → CHAINE`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Paramètres',
            stepTheme: 'violet',
            stepTitle: 'Paramètres formels vs paramètres effectifs : correspondance biunivoque',
            paragraphText:
              'Lorsqu’un algorithme appelle une fonction, les données transitent par un mécanisme strict d’association positionnelle.\n' +
              '• **Paramètres formels** : les variables déclarées entre parenthèses dans l’en-tête de la **définition** de la fonction (ex. `x, y` dans `maxdeux(x, y : ENTIER)`).\n' +
              '• **Paramètres effectifs (arguments)** : les valeurs ou expressions passées entre parenthèses lors de l’**appel** (ex. `a, b` ou `15, c + 2` dans `maxdeux(15, c + 2)`).\n' +
              '• **Correspondance biunivoque par ordre** : même nombre de paramètres, associés **position par position** (1er effectif → 1er formel, 2e effectif → 2e formel) avec types compatibles — les noms peuvent être totalement différents !\n' +
              'Exemple : pour `minutes(d, m : ENTIER) : ENTIER` renvoyant `60 * d + m`, appeler `minutes(3, 45)` transmet `d ← 3` et `m ← 45` (`225`), alors qu’inverser l’ordre `minutes(45, 3)` donne `2703` !',
            keyRule:
              'La correspondance entre paramètres effectifs et paramètres formels est régie uniquement par l’**ordre d’écriture**, jamais par la ressemblance de leurs noms.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p1_q3',
              type: 'mcq',
              prompt: 'Soit `FONCTION diff(a, b : ENTIER) : ENTIER` retournant `a - b`. Dans l’algorithme principal, `a ← 10` et `b ← 4`, puis on appelle `r ← diff(b, a)`. Que vaut `r` ?',
              options: [
                '6',
                '-6',
                '14',
                'Erreur car les noms sont inversés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’association se fait strictement par position ! Le 1er argument effectif `b` (`4`) est copié dans le 1er paramètre formel `a` ; le 2e argument `a` (`10`) est copié dans le 2e paramètre formel `b`. La fonction calcule `4 - 10 = -6`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Contexte d’appel',
            stepTheme: 'orange',
            stepTitle: 'Où et comment appeler une fonction : toujours dans une expression !',
            paragraphText:
              'Parce qu’une fonction produit une valeur résultat, son appel se comporte exactement comme une expression (comparable à `a + b`).\n' +
              '• **Appels valides** : à droite d’une affectation (`mab ← maxdeux(a, b)`), dans un `ECRIRE(maxdeux(a, b))`, dans une condition (`SI estBissextile(an) ALORS`), ou comme argument d’une autre fonction (`maxdeux(maxdeux(a, b), c)`).\n' +
              '• **Appel invalide** : écrire `maxdeux(a, b)` tout seul sur une ligne comme une instruction autonome perd la valeur retournée (c’est la syntaxe réservée aux procédures).\n' +
              '• **Portée des variables locales** : une variable locale `mxy` déclarée dans `maxdeux` n’existe PAS dans l’algorithme principal ; y accéder en dehors de la fonction est une erreur.\n' +
              'Exemple : `dm ← valAbs(minutes(d1, m1) - minutes(d2, m2))` compose élégamment deux appels de `minutes` dans un appel de `valAbs`.',
            keyRule:
              'L’appel d’une fonction s’insère toujours là où une valeur est attendue (expression), et ses variables locales disparaissent dès le `RETOURNER`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p1_q4',
              type: 'mcq',
              prompt: 'Laquelle de ces utilisations de la fonction `moyenne(a, b : ENTIER) : REEL` est INCORRECTE ?',
              options: [
                'm ← moyenne(12, 16)',
                'ECRIRE("Moyenne = ", moyenne(n1, n2))',
                'SI moyenne(n1, n2) >= 10 ALORS ECRIRE("Admis") FINSI',
                'LIRE(moyenne(n1, n2))',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un appel de fonction renvoie une valeur calculée (expression), jamais un emplacement mémoire variable : il est donc impossible de le passer à `LIRE(...)`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Avantages',
            stepTheme: 'green',
            stepTitle: 'Les quatre bénéfices majeurs de la décomposition par fonctions',
            paragraphText:
              'Concevoir un programme de plusieurs milliers de lignes d’un seul bloc est ingérable. Découper en fonctions apporte quatre avantages industriels décisifs.\n' +
              '• **1. Zéro duplication de code** : un calcul utilisé 20 fois (comme `maxdeux` ou le calcul de TVA) est écrit, testé et corrigé à un seul endroit.\n' +
              '• **2. Lisibilité immédiate** : lire `maxi ← maxdeux(mab, mcd)` fait comprendre instantanément l’intention sans décortiquer les `SI/SINON` internes.\n' +
              '• **3. Travail en équipe** : différents développeurs peuvent concevoir simultanément des fonctions indépendantes à partir de leurs seules signatures.\n' +
              '• **4. Réutilisabilité en bibliothèques** : une fonction validée peut être réintégrée dans de futurs projets (fintech, gestion commerciale, analyse de données).\n' +
              'Exemple : dans une plateforme e-commerce, une fonction `calculerFraisLivraison(ville, poids)` est réutilisée par le panier, la facture et le tableau de bord logistique.',
            keyRule:
              'Une bonne fonction réalise **une seule tâche claire**, porte un nom explicite et reste courte, testable et indépendante.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p1_q5',
              type: 'mcq',
              prompt: 'Quel avantage principal illustre le passage de `Maxquatre_1` (trois blocs `SI/SINON` répétés) à `Maxquatre_2` (trois appels à `maxdeux`) ?',
              options: [
                'Supprimer toute déclaration de variables.',
                'Éviter la duplication de code, améliorer la lisibilité et centraliser la logique dans un module réutilisable.',
                'Exécuter les instructions en ordre aléatoire.',
                'Remplacer les entiers par des chaînes de caractères.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Factoriser la recherche du maximum de deux nombres dans `maxdeux` élimine la duplication des trois `SI/SINON`, rend `Maxquatre_2` immédiatement lisible et permet de réutiliser `maxdeux` partout.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Prédicat booléen',
            stepTheme: 'slate',
            stepTitle: 'Écrire une fonction booléenne (prédicat) : `estPremier` ou `estBissextile`',
            paragraphText:
              'Une fonction peut renvoyer un `BOOLEEN` (`VRAI` ou `FAUX`) : on parle alors de **prédicat**, extrêmement pratique pour alléger les conditions des `SI` et des `TANTQUE`.\n' +
              '• **Exemple direct (`estBissextile`)** : `FONCTION estBissextile(an : ENTIER) : BOOLEEN` → `DEBUT RETOURNER(((an mod 4 = 0) ET (an mod 100 <> 0)) OU (an mod 400 = 0)) FIN`.\n' +
              '• **Exemple itératif (`estPremier`)** : si `n < 2`, `RETOURNER(FAUX)` ; sinon tester les diviseurs `d` de `2` jusqu’à `racine(n)` — dès que `n mod d = 0`, `RETOURNER(FAUX)` ; après la boucle, `RETOURNER(VRAI)`.\n' +
              '• **Usage limpide** : `SI estBissextile(2028) ALORS nbJ ← 29 SINON nbJ ← 28 FINSI`.\n' +
              'Exemple : pour `n = 29`, on teste seulement `d = 2, 3, 4, 5` ($5^2 = 25 \\le 29 < 36$) : aucun ne divise `29`, donc `estPremier(29)` renvoie `VRAI`.',
            keyRule:
              'Une fonction booléenne peut retourner directement une expression logique (`RETOURNER (x >= 10)`) sans écrire un inutile `SI x >= 10 ALORS RETOURNER(VRAI) SINON RETOURNER(FAUX) FINSI`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p1_q6',
              type: 'mcq',
              prompt: 'Soit `FONCTION estPair(n : ENTIER) : BOOLEEN`. Quelle implémentation est la plus concise et rigoureuse ?',
              options: [
                'DEBUT ECRIRE(n mod 2 = 0) FIN',
                'DEBUT RETOURNER (n mod 2 = 0) FIN',
                'DEBUT RETOURNER (n div 2) FIN',
                'DEBUT LIRE(n) ; RETOURNER (VRAI) FIN',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’expression `n mod 2 = 0` est déjà de type `BOOLEEN` (`VRAI` si `n` est pair, `FAUX` sinon). `RETOURNER (n mod 2 = 0)` est à la fois exacte, concise et sans `ECRIRE` parasite.',
            },
          },
        ],
      }),

      // POINT 5.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch5_p2',
        order: 2,
        title: 'Procédures, statuts de paramètres (`E`, `S`, `E/S`) et passage valeur vs adresse',
        summary:
          'Distinguer procédure et fonction, maîtriser les trois statuts de paramètres (Entrée, Sortie, Entrée/Sortie) et comprendre le passage par valeur vs par référence/adresse.',
        conceptExplanation:
          'Une **procédure** est un sous-programme nommé qui exécute une séquence d’actions **sans retourner de valeur par `RETOURNER`** : son appel constitue une **instruction autonome** (ex. `ligne(4, ’+’)`, `convertir(dm, deg, min)`, `echanger(a, b)`).\n\n' +
          'Une procédure est indispensable lorsqu’un traitement doit effectuer une action d’affichage/E-S ou **produire plusieurs résultats simultanés** (par exemple convertir des minutes en degrés ET minutes) ou **modifier des variables de l’appelant**.\n\n' +
          'Les paramètres d’une procédure possèdent trois statuts rigoureux :\n' +
          '• **Entrée `(E)`** (passage par **valeur**) : copie en lecture seule d’une expression quelconque ; les modifications locales n’affectent pas l’appelant.\n' +
          '• **Sortie `(S)`** (passage par **adresse / référence**) : le paramètre effectif est obligatoirement une variable destinée à recevoir un résultat produit par la procédure.\n' +
          '• **Entrée/Sortie `(E/S)`** (passage par **adresse / référence**) : la variable effective transmet sa valeur initiale à la procédure, qui la modifie directement en mémoire (ex. `echanger(x, y)`).',
        formulas: [
          {
            name: 'Procédure à 1 Entrée et 2 Sorties (Conversion d’angles)',
            formula: '\\text{PROCEDURE convertir}((E)\\; mi,\\; (S)\\; dd,\\; (S)\\; mm) \\implies dd \\leftarrow mi \\;\\text{div}\\; 60 \\; ; \\; mm \\leftarrow mi \\;\\text{mod}\\; 60',
            note: 'Impossible à écrire sous forme de fonction scalaire simple car deux résultats distincts (`dd` et `mm`) sont renvoyés.',
          },
          {
            name: 'Tri de 3 caractères par appels de procédures (E/S)',
            formula: '\\text{classer}(c_1, c_2) \\; ; \\quad \\text{classer}(c_2, c_3) \\; ; \\quad \\text{classer}(c_1, c_2)',
            note: 'Trois comparaisons-échanges suffisent toujours pour ordonner 3 valeurs quelconques !',
          },
        ],
        keyRule:
          'Passage par valeur `(E)` = copie protégée (accepte toute expression) ; passage par adresse `(S)` ou `(E/S)` = accès direct à la variable de l’appelant (exige impérativement un identificateur de variable).',
        workedExample: {
          title: 'Trace du tri de trois lettres `T, Z, A` via les procédures `classer` et `echanger`',
          statement:
            'Soient `c1 = ’T’`, `c2 = ’Z’`, `c3 = ’A’`, et `PROCEDURE classer((E/S) a, b : CARACTERE)` qui appelle `echanger(a, b)` si `a > b`. Suivre les valeurs après les 3 appels : `classer(c1, c2)`, `classer(c2, c3)`, `classer(c1, c2)`.',
          methodSteps: [
            'Départ : `c1 = ’T’, c2 = ’Z’, c3 = ’A’`.',
            'Appel 1 `classer(c1, c2)` : `’T’ > ’Z’` est `FAUX` → aucun échange. État : `(’T’, ’Z’, ’A’)`.',
            'Appel 2 `classer(c2, c3)` : `’Z’ > ’A’` est `VRAI` → échange `(c2, c3)`. État : `(’T’, ’A’, ’Z’)` (`’Z’` est à sa place définitive).',
            'Appel 3 `classer(c1, c2)` : `’T’ > ’A’` est `VRAI` → échange `(c1, c2)`. État final : `(’A’, ’T’, ’Z’)`.',
          ],
          conclusion:
            'Grâce au statut `(E/S)` (passage par adresse), les modifications dans `echanger` s’appliquent réellement aux variables `c1, c2, c3` de l’algorithme principal.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Procédure vs Fonction',
            stepTheme: 'blue',
            stepTitle: 'Différences fondamentales entre procédure et fonction',
            paragraphText:
              'Fonctions et procédures forment la famille des **sous-programmes**, mais leurs rôles et syntaxes d’appel ne doivent jamais être confondus.\n' +
              '• **Fonction** : calcule et renvoie **une unique valeur** via `RETOURNER` ; son appel s’insère dans une **expression** (`s ← minutes(d1, m1)`).\n' +
              '• **Procédure** : exécute une **action** (affichage, dessin de ligne, modification mémoire, production de 0 ou plusieurs résultats via ses paramètres) ; son appel s’écrit comme une **instruction complète** (`ligne(7, ’o’)`).\n' +
              '• **Quand choisir une procédure ?** : (1) aucune valeur à retourner (ex. afficher un reçu) ; (2) plusieurs résultats à produire (ex. quotient ET reste, degrés ET minutes) ; (3) modification en place des arguments (ex. trier un tableau, échanger deux variables).\n' +
              'Exemple : `convertir(dm, deg, min)` est une procédure car une fonction ne pourrait pas renvoyer simultanément `deg` et `min` comme deux scalaires séparés.',
            keyRule:
              'Fonction = 1 valeur retournée (appel dans une expression) ; Procédure = action ou plusieurs résultats via paramètres `(S)` / `(E/S)` (appel comme instruction autonome).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p2_q1',
              type: 'mcq',
              prompt: 'Pourquoi l’algorithme de différence d’angles utilise-t-il une FONCTION `minutes(d, m)` pour convertir en minutes, mais une PROCÉDURE `convertir(mi, dd, mm)` pour la conversion inverse ?',
              options: [
                'Parce qu’une fonction ne peut pas utiliser `div` et `mod`.',
                'Parce que `minutes` renvoie un seul résultat entier, alors que `convertir` doit produire DEUX résultats distincts (`dd` et `mm`).',
                'Parce qu’une procédure est toujours plus rapide qu’une fonction.',
                'Parce qu’une fonction n’accepte qu’un seul paramètre.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une fonction retourne une seule valeur scalaire (`60 * d + m`). La conversion inverse produit deux entiers (`dd` et `mm`), ce qui impose une procédure dotée de deux paramètres de sortie `(S)`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Statuts E / S / E-S',
            stepTheme: 'blue',
            stepTitle: 'Les trois statuts de paramètres : Entrée `(E)`, Sortie `(S)` et Entrée/Sortie `(E/S)`',
            paragraphText:
              'La règle d’or de la programmation modulaire est que **toute information échangée** entre l’appelant et la procédure doit transiter explicitement par les paramètres, dont le statut indique le sens du flux de données.\n' +
              '• **Entrée `(E)` (`appelant → procédure`)** : le paramètre effectif peut être n’importe quelle **expression** (constante `4`, variable `nb`, calcul `x + 1`), copiée dans le paramètre formel pour consultation.\n' +
              '• **Sortie `(S)` (`procédure → appelant`)** : le paramètre effectif est obligatoirement un **identificateur de variable** qui reçoit la valeur produite par la procédure.\n' +
              '• **Entrée/Sortie `(E/S)` (`appelant ↔ procédure`)** : le paramètre effectif est obligatoirement une **variable déjà initialisée** dont la valeur est lue, transformée par la procédure et renvoyée modifiée.\n' +
              'Exemple : dans `convertir((E) mi, (S) dd, (S) mm)`, `mi` est en `(E)` (on peut écrire `convertir(145, deg, min)`), mais `deg` et `min` sont en `(S)` (on ne peut pas écrire `convertir(145, 2, 25)` !).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Synthèse des 3 statuts de paramètres et modes de passage',
              caption: 'Correspondance entre statut algorithmique, mode de passage mémoire et contraintes sur le paramètre effectif.',
              tableData: {
                headers: ['Statut', 'Sens du flux', 'Passage mémoire', 'Paramètre effectif autorisé', 'Exemple canonique'],
                rows: [
                  ['Entrée (E)', 'Appelant → Procédure', 'Par valeur (copie)', 'Expression, constante ou variable', 'ligne((E) 4, (E) ’+’)'],
                  ['Sortie (S)', 'Procédure → Appelant', 'Par adresse (réf.)', 'Identificateur de variable uniquement', 'convertir((E) dm, (S) deg, (S) min)'],
                  ['Entrée/Sortie (E/S)', 'Appelant ↔ Procédure', 'Par adresse (réf.)', 'Variable initialisée uniquement', 'echanger((E/S) x, (E/S) y)'],
                ],
              },
            },
            keyRule:
              'Pour un paramètre `(S)` ou `(E/S)`, le paramètre effectif lors de l’appel ne peut JAMAIS être une constante (`10`) ni une expression (`a + 1`) : ce doit être une variable.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p2_q2',
              type: 'mcq',
              prompt: 'Soit `PROCEDURE convertir((E) mi : ENTIER, (S) dd : ENTIER, (S) mm : ENTIER)`. Quel appel est STRICTEMENT VALIDE ?',
              options: [
                'convertir(135, 2, 15)',
                'convertir(dm + 10, deg, min)',
                'convertir(dm, deg + 1, min)',
                'res ← convertir(dm, deg, min)',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`mi` étant en `(E)`, l’expression `dm + 10` est parfaitement autorisée. `dd` et `mm` étant en `(S)`, ils reçoivent deux identificateurs de variables (`deg` et `min`), et l’appel est une instruction autonome (pas dans une affectation `res ←`).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Valeur vs Adresse',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi `echanger` échoue en passage par valeur `(E)` et réussit par adresse `(E/S)`',
            paragraphText:
              'Comprendre la différence entre passage par valeur et passage par adresse (référence) évite les bugs les plus tenaces de la programmation modulaire.\n' +
              '• **Passage par valeur (`(E)`)** : la machine alloue des **copies locales** `x` et `y` contenant `10` et `20`. La procédure permute ses copies locales (`x = 20, y = 10`), qui sont détruites au `FIN` — les variables `a` et `b` de l’appelant restent intactes à `10` et `20` !\n' +
              '• **Passage par adresse / référence (`(E/S)`)** : la machine transmet l’**adresse mémoire** réelle des variables `a` et `b` de l’appelant. Toute écriture sur `x` et `y` modifie directement `a` et `b` dans la mémoire de l’appelant.\n' +
              '• **Protection involontaire** : inversement, si une procédure ne doit PAS altérer une donnée de l’appelant, la passer en `(E)` (par valeur) la protège contre tout effet de bord.\n' +
              'Exemple : pour `PROCEDURE doubler((E) k : ENTIER)` exécutant `k ← k * 2`, appeler `doubler(n)` avec `n = 7` laisse `n` égal à `7` ; avec `(E/S) k`, `n` devient `14`.',
            keyRule:
              'Sans passage par adresse `(E/S)`, une procédure `echanger(x, y)` ne permute que des copies temporaires et n’a AUCUN effet sur les variables de l’appelant !',
            konanTip:
              'Question piège classique d’examen : « Que valent `a` et `b` après appel à la procédure `P((E) x, (E/S) y)` ? » Seule la variable passée en `(E/S)` conserve les modifications effectuées dans `P` !',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p2_q3',
              type: 'mcq',
              prompt: 'Soit `PROCEDURE mystere((E) x : ENTIER, (E/S) y : ENTIER)` qui exécute `x ← x + 10 ; y ← y + x`. Dans le programme principal, `a ← 5`, `b ← 3`, puis on appelle `mystere(a, b)`. Quelles sont les valeurs de `a` et `b` après l’appel ?',
              options: [
                'a = 15 et b = 18',
                'a = 5 et b = 18',
                'a = 5 et b = 8',
                'a = 15 et b = 3',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À l’entrée : copie locale `x = 5` (statut E) et référence `y` pointant sur `b` (`3`, statut E/S). Dans `mystere` : `x` local devient `5 + 10 = 15`, puis `y` (donc `b`) devient `3 + 15 = 18`. Au retour, `x` est détruit : `a` vaut toujours `5`, mais `b` vaut `18` !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Modularité',
            stepTheme: 'green',
            stepTitle: 'Règle de bon usage : bannir les variables globales cachées',
            paragraphText:
              'Un sous-programme bien conçu est une boîte noire autonome : on doit pouvoir comprendre tout ce qu’il lit et tout ce qu’il modifie uniquement en lisant son en-tête.\n' +
              '• **Règle d’isolation** : toutes les informations qui circulent entre l’unité appelante et la procédure doivent passer **explicitement par les paramètres**.\n' +
              '• **Danger des variables globales** : si une procédure modifie silencieusement une variable globale non listée dans ses paramètres, le programme devient difficile à déboguer et impossible à réutiliser dans un autre projet.\n' +
              '• **Variables locales propres** : les indices de boucle (`i`), tampons d’échange (`aux`) et cumuls temporaires doivent toujours être déclarés en `VARIABLES locales` dans la procédure.\n' +
              'Exemple : dans `PROCEDURE ligne((E) nb : ENTIER, (E) car : CARACTERE)`, le compteur `i : ENTIER` est déclaré en variable locale : il ne risque jamais d’écraser un autre `i` de l’algorithme principal.',
            keyRule:
              'Toujours déclarer en `VARIABLES locales` tout compteur ou tampon interne d’un sous-programme afin d’éviter toute collision avec les variables de l’appelant.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p2_q4',
              type: 'mcq',
              prompt: 'Pourquoi la variable `aux` utilisée dans `PROCEDURE echanger((E/S) x, y : CARACTERE)` doit-elle être déclarée comme variable LOCALE à `echanger` ?',
              options: [
                'Parce qu’elle doit conserver sa valeur d’un appel à l’autre.',
                'Parce qu’elle ne sert que temporairement pendant l’échange et ne doit ni polluer l’appelant ni entrer en conflit avec une autre variable `aux`.',
                'Parce qu’une procédure ne peut pas lire ses paramètres sans variable globale.',
                'Parce qu’un paramètre `(E/S)` est toujours détruit avant la fin.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`aux` est un tampon strictement interne à l’échange : le déclarer en variable locale garantit l’autonomie totale de la procédure et évite tout conflit de noms avec l’algorithme principal.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Composition',
            stepTheme: 'slate',
            stepTitle: 'Procédure appelant une autre procédure : `tri_lettres` et `dessin`',
            paragraphText:
              'La puissance de la programmation modulaire éclate lorsque des procédures simples s’assemblent pour réaliser des tâches complexes.\n' +
              '• **Chaînage de procédures (`tri_lettres`)** : `tri_lettres` appelle `classer(c1, c2)`, `classer(c2, c3)`, `classer(c1, c2)`, et `classer` appelle elle-même `echanger(a, b)` dès que `a > b`.\n' +
              '• **Procédure graphique (`ligne`)** : `ligne(1, ’*’)`, `ligne(4, ’+’)`, `ligne(3, ’#’)`, `ligne(7, ’o’)` dessine quatre motifs différents avec une seule boucle `POUR i DE 1 A nb FAIRE ECRIRE(car) FINPOUR ; ECRIRE(CRLF)`.\n' +
              '• **Tableaux en paramètre** : une procédure `trierTableau((E/S) T : TABLEAU[1..MAX] DE REEL, (E) n : ENTIER)` réutilise la procédure `echanger(T[i], T[posMin])` à chaque tour.\n' +
              'Exemple : pour afficher un triangle d’étoiles de hauteur `H`, il suffit de `POUR k DE 1 A H FAIRE ligne(k, ’*’) FINPOUR` !',
            keyRule:
              'Décomposer un gros algorithme en petites briques (`echanger` → `classer` → `trier`) transforme un code complexe en une suite de phrases quasi lisibles en français.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p2_q5',
              type: 'mcq',
              prompt: 'Avec `PROCEDURE ligne((E) nb : ENTIER, (E) car : CARACTERE)` qui affiche `nb` fois `car` suivi d’un retour à la ligne, qu’affiche la boucle `POUR k DE 1 A 3 FAIRE ligne(2 * k, ’#’) FINPOUR` ?',
              options: [
                '3 lignes contenant respectivement 1, 2 et 3 symboles `#`.',
                '3 lignes contenant respectivement 2, 4 et 6 symboles `#`.',
                '2 lignes contenant 3 symboles `#`.',
                'Une seule ligne de 6 symboles `#`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour `k = 1`, `ligne(2, ’#’)` affiche `##`. Pour `k = 2`, `ligne(4, ’#’)` affiche `####`. Pour `k = 3`, `ligne(6, ’#’)` affiche `######`. Chaque appel termine par un saut de ligne.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Analyse',
            stepTheme: 'green',
            stepTitle: 'Concevoir une procédure statistique à résultats multiples',
            paragraphText:
              'Un cas très fréquent en entreprise consiste à extraire plusieurs indicateurs d’un tableau de données en un seul parcours mémoire.\n' +
              '• **Problème** : à partir d’un tableau `T[1..n]` de montants, renvoyer simultanément le minimum `mini`, le maximum `maxi` et la moyenne `moy`.\n' +
              '• **En-tête propre** : `PROCEDURE statsTableau((E) T : TABLEAU[1..MAX] DE REEL, (E) n : ENTIER, (S) mini : REEL, (S) maxi : REEL, (S) moy : REEL)`.\n' +
              '• **Pourquoi un seul parcours ?** : en mettant à jour `somme`, `mini` et `maxi` dans la même boucle `POUR i DE 1 A n`, on divise par 3 le temps d’accès mémoire par rapport à trois fonctions séparées.\n' +
              'Exemple : pour analyser les cotations journalières d’une action à la BRVM sur 250 séances, cette procédure renvoie en une seule passe le plus bas, le plus haut et la moyenne.',
            keyRule:
              'Utilise une procédure à paramètres `(S)` multiples lorsqu’un même parcours produit conjointement plusieurs résultats (ex. `min` et `max`, quotient et reste, racines $x_1$ et $x_2$).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p2_q6',
              type: 'mcq',
              prompt: 'On écrit une procédure `divisionEuclidienne` qui calcule à la fois le quotient `q` et le reste `r` de deux entiers `a` et `b > 0`. Quels statuts attribuer à `(a, b, q, r)` ?',
              options: [
                '(S) a, (S) b, (E) q, (E) r',
                '(E) a, (E) b, (S) q, (S) r',
                '(E/S) a, (E/S) b, (E) q, (E) r',
                '(E) a, (E) b, (E) q, (E) r',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`a` et `b` sont des données fournies en lecture seule → statut `(E)`. `q` et `r` sont les deux résultats produits et renvoyés à l’appelant → statut `(S)`.',
            },
          },
        ],
      }),

      // POINT 5.3
      makePoint({
        id: 'lmd_entd_l1_algo_ch5_p3',
        order: 3,
        title: 'Récursivité : cas de base, appel récursif, pile d’appels et récurrences',
        summary:
          'Maîtriser le principe de la récursivité, garantir la terminaison par un cas de base, tracer la pile d’appels (`Somme(m)`, suite $U_n$, factorielle) et comparer récursif vs itératif.',
        conceptExplanation:
          'Une fonction (ou procédure) est dite **récursive** lorsqu’elle **s’appelle elle-même** dans sa propre définition, en ramenant un problème de taille $n$ à un sous-problème identique de taille strictement plus petite (ex. $n - 1$).\n\n' +
          'Toute fonction récursive valide repose obligatoirement sur **deux piliers** :\n' +
          '1. Le **cas de base (condition d’arrêt)** : cas élémentaire résolu directement **sans** appel récursif (ex. `SI m = 0 ALORS RETOURNER(0)`, ou `SI n = 0 ALORS RETOURNER(4)`).\n' +
          '2. Le **cas général (appel récursif convergent)** : appel à la fonction sur un argument qui se rapproche strictement du cas de base (ex. `RETOURNER(m + Somme(m - 1))`, ou `RETOURNER(5 * U(n - 1) + 9)`).\n\n' +
          'À l’exécution, la machine gère une **pile d’appels (*Call Stack*)** : phase de **descente (empilement)** des appels en attente jusqu’au cas de base, puis phase de **remontée (dépilement)** où chaque résultat remonte et complète les calculs en suspens.',
        formulas: [
          {
            name: 'Somme récursive des $m$ premiers entiers',
            formula: '\\text{Somme}(0) = 0 \\; ; \\qquad \\text{Somme}(m) = m + \\text{Somme}(m - 1) \\quad (m > 0)',
            note: 'Calcule `1 + 2 + ... + m` par empilement puis dépilement de la pile d’appels.',
          },
          {
            name: 'Suite arithmético-géométrique récursive',
            formula: 'U(0) = 4 \\; ; \\qquad U(n) = 5 \\times U(n - 1) + 9 \\quad (n > 0)',
            note: 'Traduction directe d’une définition mathématique par récurrence en fonction algorithmique récursive.',
          },
        ],
        keyRule:
          'Pas de cas de base atteint en un nombre fini d’étapes = récursion infinie et **débordement de pile (*Stack Overflow*)** !',
        workedExample: {
          title: 'Trace complète de la suite récursive $U_0 = 4$, $U_n = 5 U_{n-1} + 9$ pour $n = 3$',
          statement:
            'Écrire la fonction récursive `U(n : ENTIER) : ENTIER` calculant le terme $U_n$ de la suite définie par $U_0 = 4$ et $U_n = 5 U_{n-1} + 9$ pour $n > 0$, puis tracer l’exécution de `U(3)`.',
          methodSteps: [
            'Définition : `FONCTION U(n : ENTIER) : ENTIER` → `SI n = 0 ALORS RETOURNER(4) SINON RETOURNER(5 * U(n - 1) + 9) FINSI`.',
            'Descente (empilement) : `U(3)` attend `U(2)` → `U(2)` attend `U(1)` → `U(1)` attend `U(0)` → `U(0)` atteint le cas de base et renvoie `4`.',
            'Remontée (dépilement) : `U(1) = 5 × 4 + 9 = 29` → `U(2) = 5 × 29 + 9 = 154` → `U(3) = 5 × 154 + 9 = 779`.',
          ],
          conclusion:
            'La fonction renvoie `U(3) = 779` après 4 appels empilés (`n = 3, 2, 1, 0`) puis dépilés dans l’ordre inverse (LIFO).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Récursivité',
            stepTheme: 'blue',
            stepTitle: 'Les deux piliers obligatoires d’une fonction récursive',
            paragraphText:
              'La récursivité traduit directement le raisonnement mathématique par récurrence en algorithme : pour résoudre un problème de taille $n$, on suppose savoir le résoudre pour une taille plus petite.\n' +
              '• **Pilier 1 — Cas de base (condition d’arrêt)** : au moins une branche ne contient AUCUN appel récursif et renvoie directement une valeur connue (ex. `Somme(0) = 0`, `Fact(0) = 1`, `U(0) = 4`).\n' +
              '• **Pilier 2 — Appel récursif convergent** : chaque appel récursif modifie le paramètre de façon à se rapprocher **strictement** du cas de base (ex. `m - 1` pour `m > 0`).\n' +
              '• **Précondition indispensable** : vérifier que l’appel initial respecte le domaine (`n >= 0`), sinon `Somme(-2)` descendrait vers `-3, -4, ...` sans jamais toucher `0` !\n' +
              'Exemple : `FONCTION Somme(m : ENTIER) : ENTIER` → `SI m = 0 ALORS RETOURNER(0) SINON RETOURNER(m + Somme(m - 1)) FINSI`.',
            keyRule:
              'Vérifie systématiquement 3 points avant de valider une fonction récursive : (1) existence du cas de base ; (2) convergence stricte vers ce cas ; (3) précondition respectée.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p3_q1',
              type: 'mcq',
              prompt: 'Que se passe-t-il si l’on définit `FONCTION Somme(m : ENTIER) : ENTIER` par `RETOURNER(m + Somme(m - 1))` en oubliant le test du cas de base (`SI m = 0 ...`) ?',
              options: [
                'L’algorithme renvoie automatiquement 0 lorsque `m` atteint 0.',
                'Les appels s’empilent à l’infini (`m, m-1, m-2, 0, -1, -2, ...`) jusqu’au débordement de la pile mémoire (*Stack Overflow*).',
                'La fonction s’arrête après un seul appel.',
                'La machine transforme la fonction en boucle `POUR`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans cas de base, rien n’interrompt les appels récursifs : chaque appel empile un nouveau contexte en mémoire jusqu’à saturer complètement la pile (*Stack Overflow*).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Pile d’appels',
            stepTheme: 'green',
            stepTitle: 'Visualiser la pile d’appels (*Call Stack*) : descente et remontée de `Somme(4)`',
            paragraphText:
              'Pour ne jamais se tromper en traçant un algorithme récursif, il faut visualiser la **pile d’appels** (fonctionnement LIFO : *Last In, First Out* — dernier appelé, premier terminé).\n' +
              '• **Phase 1 — Descente (empilement)** : chaque appel met en pause son calcul en attendant le retour de l’appel fils : `Somme(4)` met en pause `4 + ?`, appelle `Somme(3)` (`3 + ?`), qui appelle `Somme(2)` (`2 + ?`), qui appelle `Somme(1)` (`1 + ?`), qui appelle `Somme(0)`.\n' +
              '• **Point de retournement** : `Somme(0)` atteint le cas de base et renvoie `0`.\n' +
              '• **Phase 2 — Remontée (dépilement)** : `Somme(1)` complète `1 + 0 = 1`, `Somme(2)` complète `2 + 1 = 3`, `Somme(3)` complète `3 + 3 = 6`, et enfin `Somme(4)` renvoie `4 + 6 = 10`.\n' +
              'Exemple : chaque niveau empilé possède sa **propre copie locale** du paramètre `m` (`4`, `3`, `2`, `1`, `0`) isolée des autres.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Pile d’appels récursive (Call Stack) pour Somme(4)',
              caption: 'À gauche : empilement descendant jusqu’au cas de base Somme(0) = 0. À droite : dépilement ascendant des résultats.',
              svgContent:
                '<svg viewBox="0 0 460 225" width="100%" style="max-width:460px" xmlns="http://www.w3.org/2000/svg">' +
                '<text x="125" y="20" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#2563EB">1. Descente (Empilement)</text>' +
                '<text x="345" y="20" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#16A34A">2. Remontée (Retours)</text>' +
                '<rect x="35" y="30" width="180" height="28" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.8"/>' +
                '<text x="125" y="49" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#1E3A8A">Somme(4) = 4 + Somme(3)</text>' +
                '<rect x="35" y="68" width="180" height="28" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.8"/>' +
                '<text x="125" y="87" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#1E3A8A">Somme(3) = 3 + Somme(2)</text>' +
                '<rect x="35" y="106" width="180" height="28" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.8"/>' +
                '<text x="125" y="125" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#1E3A8A">Somme(2) = 2 + Somme(1)</text>' +
                '<rect x="35" y="144" width="180" height="28" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.8"/>' +
                '<text x="125" y="163" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#1E3A8A">Somme(1) = 1 + Somme(0)</text>' +
                '<rect x="35" y="182" width="180" height="30" rx="6" fill="#FFF7ED" stroke="#EA580C" stroke-width="2.2"/>' +
                '<text x="125" y="201" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#9A3412">Cas de base : Somme(0) → 0</text>' +
                '<rect x="260" y="30" width="170" height="28" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.2"/>' +
                '<text x="345" y="49" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#14532D">4 + 6 = 10 (Résultat)</text>' +
                '<rect x="260" y="68" width="170" height="28" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8"/>' +
                '<text x="345" y="87" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#166534">retourne 3 + 3 = 6</text>' +
                '<rect x="260" y="106" width="170" height="28" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8"/>' +
                '<text x="345" y="125" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#166534">retourne 2 + 1 = 3</text>' +
                '<rect x="260" y="144" width="170" height="28" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8"/>' +
                '<text x="345" y="163" text-anchor="middle" font-family="monospace" font-size="11.5" fill="#166534">retourne 1 + 0 = 1</text>' +
                '<line x1="215" y1="197" x2="345" y2="197" stroke="#EA580C" stroke-width="2"/>' +
                '<line x1="345" y1="197" x2="345" y2="176" stroke="#16A34A" stroke-width="2"/>' +
                '<polygon points="345,172 340,181 350,181" fill="#16A34A"/>' +
                '<line x1="345" y1="144" x2="345" y2="136" stroke="#16A34A" stroke-width="2"/>' +
                '<line x1="345" y1="106" x2="345" y2="98" stroke="#16A34A" stroke-width="2"/>' +
                '<line x1="345" y1="68" x2="345" y2="60" stroke="#16A34A" stroke-width="2"/>' +
                '</svg>',
            },
            keyRule:
              'La pile d’appels fonctionne en LIFO : le dernier appel lancé (le cas de base) est toujours le premier à terminer et à renvoyer sa valeur.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p3_q2',
              type: 'mcq',
              prompt: 'Lors de l’exécution de `Somme(4)` (avec cas de base `Somme(0) = 0`), combien d’appels au total à la fonction `Somme` sont empilés avant le premier retour ?',
              options: [
                '4 appels',
                '5 appels (`Somme(4)`, `Somme(3)`, `Somme(2)`, `Somme(1)`, `Somme(0)`)',
                '10 appels',
                '3 appels',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’appel initial `Somme(4)` déclenche `Somme(3)`, puis `Somme(2)`, `Somme(1)` et enfin `Somme(0)` qui atteint le cas de base : cela fait exactement `4 + 1 = 5` appels présents simultanément sur la pile.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Suite récurrente',
            stepTheme: 'slate',
            stepTitle: 'Traduire une suite récurrente $U_n = 5 U_{n-1} + 9$ en fonction récursive',
            paragraphText:
              'Les suites définies par récurrence en mathématiques ou en finance (amortissement d’emprunt, évolution d’abonnés) se traduisent ligne pour ligne en fonctions récursives.\n' +
              '• **Définition mathématique** : $U_0 = 4$ et, pour tout $n > 0$, $U_n = 5 U_{n-1} + 9$.\n' +
              '• **Traduction algorithmique** : `FONCTION suiteU(n : ENTIER) : ENTIER` → `SI n = 0 ALORS RETOURNER(4) SINON RETOURNER(5 * suiteU(n - 1) + 9) FINSI`.\n' +
              '• **Calcul des premiers termes** : `U(0) = 4` ; `U(1) = 5 × 4 + 9 = 29` ; `U(2) = 5 × 29 + 9 = 154` ; `U(3) = 5 × 154 + 9 = 779`.\n' +
              'Exemple : pour simuler un capital annuel $C_n = 1{,}05 \\cdot C_{n-1} + 50000$ (épargne annuelle de 50 000 FCFA à 5%), il suffit de remplacer `5` par `1.05`, `9` par `50000` et le type de retour par `REEL`.',
            keyRule:
              'Dans la traduction d’une suite récurrente, la valeur initiale $U_0$ fournit directement le cas de base (`SI n = 0`) et la relation de récurrence fournit la branche `SINON`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p3_q3',
              type: 'mcq',
              prompt: 'Soit la fonction récursive `U(0) = 4` et `U(n) = 5 * U(n - 1) + 9` pour `n > 0`. Quelle valeur exacte retourne `U(2)` ?',
              options: [
                '29',
                '145',
                '154',
                '779',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`U(0) = 4` ; `U(1) = 5 × 4 + 9 = 29` ; `U(2) = 5 × 29 + 9 = 145 + 9 = 154`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Classiques récursifs',
            stepTheme: 'violet',
            stepTitle: 'Factorielle, puissance rapide et PGCD d’Euclide récursifs',
            paragraphText:
              'Trois algorithmes célèbres illustrent l’élégance mathématique et la puissance de la récursivité.\n' +
              '• **Factorielle** : `Fact(0) = 1` et `Fact(n) = n * Fact(n - 1)` pour `n > 0`.\n' +
              '• **PGCD d’Euclide récursif** : `SI b = 0 ALORS RETOURNER(a) SINON RETOURNER(pgcd(b, a mod b)) FINSI` — une seule ligne d’une clarté remarquable !\n' +
              '• **Puissance rapide (exponentiation binaire)** : au lieu de `n` multiplications (`x * puis(x, n - 1)`), on utilise $x^{2k} = (x^k)^2$ et $x^{2k+1} = x \\cdot (x^k)^2$, réduisant le coût de $O(n)$ à **$O(\\log_2 n)$** !\n' +
              'Exemple : pour calculer $2^{1000}$ en cryptographie RSA, la puissance rapide ne demande qu’environ `10` appels récursifs au lieu de `1 000` !',
            formula: {
              name: 'PGCD récursif et exponentiation rapide',
              formula: '\\text{pgcd}(a, 0) = a, \\; \\text{pgcd}(a, b) = \\text{pgcd}(b, a \\;\\text{mod}\\; b) \\quad ; \\quad x^n = \\begin{cases} (x^{n/2})^2 & \\text{si } n \\text{ pair} \\\\ x \\cdot (x^{(n-1)/2})^2 & \\text{si } n \\text{ impair} \\end{cases}',
              note: 'La puissance rapide est l’un des piliers algorithmiques du chiffrement HTTPS/RSA sur Internet.',
            },
            keyRule:
              'Diviser la taille du problème par 2 à chaque appel récursif (dichotomie, puissance rapide) fait chuter la complexité de $O(n)$ à $O(\\log_2 n)$.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p3_q4',
              type: 'mcq',
              prompt: 'Quelle suite d’appels effectue `pgcd(30, 12)` défini par `SI b = 0 ALORS RETOURNER(a) SINON RETOURNER(pgcd(b, a mod b)) FINSI` ?',
              options: [
                'pgcd(30, 12) → pgcd(12, 6) → pgcd(6, 0) → retourne 6',
                'pgcd(30, 12) → pgcd(18, 12) → pgcd(6, 0) → retourne 12',
                'pgcd(30, 12) → pgcd(12, 2) → pgcd(2, 0) → retourne 2',
                'Boucle infinie car `a` ne diminue pas',
              ],
              correctAnswerIndex: 0,
              explanation:
                '`30 mod 12 = 6` ⇒ `pgcd(12, 6)`. Ensuite `12 mod 6 = 0` ⇒ `pgcd(6, 0)`. Le cas de base `b = 0` est atteint et renvoie `a = 6`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Complexité & Fibonacci',
            stepTheme: 'orange',
            stepTitle: 'Récursion multiple (Fibonacci) : le piège des calculs redondants',
            paragraphText:
              'La récursivité est séduisante, mais une récursion double naïve peut provoquer une explosion catastrophique du temps de calcul !\n' +
              '• **Suite de Fibonacci naïve** : `Fib(0) = 0`, `Fib(1) = 1`, `Fib(n) = Fib(n - 1) + Fib(n - 2)`.\n' +
              '• **Explosion exponentielle** : chaque appel se dédouble en 2 sous-appels qui recalculent des centaines de milliers de fois exactement les mêmes termes (`Fib(5)` appelle `Fib(3)` deux fois, `Fib(2)` trois fois, etc.) → complexité catastrophique $O(2^n)$ !\n' +
              '• **Remède** : une simple boucle itérative `POUR i DE 2 A n` (ou la **mémoïsation**, qui mémorise dans un tableau les résultats déjà calculés) calcule `Fib(n)` en temps linéaire **$O(n)$** !\n' +
              'Exemple : pour `n = 50`, `Fib(50)` récursif naïf demanderait des dizaines de milliards d’appels (plusieurs heures), alors que la version itérative répond en `50` additions (quelques nanosecondes).',
            keyRule:
              'Méfie-toi des fonctions qui font plusieurs appels récursifs se chevauchant (comme `Fib(n-1) + Fib(n-2)`) : sans mémoïsation, leur coût explose en $O(2^n)$.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p3_q5',
              type: 'mcq',
              prompt: 'Pourquoi la version récursive naïve `Fib(n) = Fib(n - 1) + Fib(n - 2)` devient-elle extrêmement lente dès que `n` dépasse 40 ?',
              options: [
                'Parce que les entiers dépassent la capacité d’une variable.',
                'Parce qu’elle recalcule exponentiellement de nombreuses fois les mêmes sous-problèmes (`Fib(k)`), entraînant une complexité exponentielle.',
                'Parce qu’elle n’a pas de cas de base.',
                'Parce qu’une addition prend plus de temps dans une fonction.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’arbre d’appels de `Fib(n)` double presque de taille à chaque incrément de `n` en recalculant massivement les mêmes valeurs `Fib(k)` : sa complexité est exponentielle (environ $O(1{,}618^n)$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Arbitrage',
            stepTheme: 'green',
            stepTitle: 'Choisir judicieusement entre approche itérative et approche récursive',
            paragraphText:
              'Tout algorithme récursif peut théoriquement être transformé en algorithme itératif (et réciproquement). Savoir arbitrer entre les deux est une compétence clé d’ingénieur.\n' +
              '• **Préférer l’itératif (`POUR` / `TANTQUE`)** : pour les parcours linéaires simples (`Somme(m)`, `Fact(n)`, `Fib(n)`, somme d’un tableau) — coût mémoire constant **$O(1)$** (pas d’empilement sur la pile) et vitesse d’exécution maximale.\n' +
              '• **Préférer le récursif** : lorsque la structure du problème ou des données est naturellement récursive — **diviser pour régner** (recherche dichotomique, Tri Fusion, Tri Rapide), parcours d’arborescences de dossiers/fichiers, arbres de décision ou graphes.\n' +
              '• **Coût caché de la récursivité** : chaque appel consomme un cadre mémoire sur la pile ($O(n)$ en mémoire pour `Somme(n)`), ce qui peut provoquer un *Stack Overflow* pour `n = 100 000`.\n' +
              'Exemple : pour parcourir tous les sous-dossiers d’un serveur de fichiers (profondeur inconnue), la récursivité est infiniment plus simple et naturelle qu’une boucle classique.',
            keyRule:
              'Itératif = $O(1)$ en mémoire et idéal pour les calculs linéaires ; Récursif = idéal pour « diviser pour régner » et les structures arborescentes (dossiers, menus imbriqués, arbres).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch5_p3_q6',
              type: 'mcq',
              prompt: 'Quelle différence de consommation MÉMOIRE sépare le calcul de `Somme(n) = 1 + 2 + ... + n` par boucle `POUR` (itératif) de son calcul par fonction récursive classique ?',
              options: [
                'L’itératif consomme $O(n)$ mémoire et le récursif $O(1)$.',
                'L’itératif consomme une mémoire constante $O(1)$ (deux variables), tandis que le récursif empile `n + 1` contextes d’appels en mémoire ($O(n)$).',
                'Les deux consomment exactement la même quantité de mémoire.',
                'Le récursif ne consomme aucune mémoire.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La boucle `POUR` ne conserve que deux variables (`i` et `s`, soit $O(1)$ en espace), alors que la version récursive empile `n + 1` appels en attente sur la *Call Stack* ($O(n)$ en espace).',
            },
          },
        ],
      }),
    ],
  },
];
