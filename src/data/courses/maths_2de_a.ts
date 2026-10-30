// ============================================================================
// MODULE OFFICIEL : MATHÉMATIQUES 2de A — LEÇON 1 : CALCULS NUMÉRIQUES
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
// Discipline : Numérique | Classe : Seconde A
// Zéro code brut à l'écran : symboles universels purs (√, ×, ÷, ≠, ≈, ², ³, ⁻², ⁿ, −)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

export const maths2deACalculsNumeriquesChapter: CurriculumChapter = {
  id: 'seconde_a_maths_ch1_calcul_numerique',
  subjectId: 'maths',
  gradeLevel: 'seconde_a',
  order: 1,
  officialVolumeHours: 12,
  title: 'Leçon 1 — Calculs numériques',
  summary:
    'Maîtrise complète des opérations sur les quotients (fractions), puissances, radicaux (racines carrées), proportionnalité, pourcentages et approximations décimales selon le programme officiel MENA.',
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/6 : Opérations sur les quotients (Fractions)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_maths_ch1_p1',
      order: 1,
      title: 'Opérations sur les quotients (Fractions)',
      summary:
        "Règles d'addition, de soustraction, de multiplication et de division de fractions sans calculatrice.",
      conceptExplanation:
        "Les fractions représentent des quotients de nombres. Maîtriser leurs opérations sans calculatrice est le socle de toute la scolarité au lycée.\n\n" +
        "1. Définition fondamentale :\n" +
        "Soit a, b, c et d des nombres réels avec b ≠ 0 et d ≠ 0.\n\n" +
        "2. Addition et soustraction :\n" +
        "- Si les dénominateurs sont identiques : on additionne ou soustrait directement les numérateurs et on conserve le dénominateur commun :\n" +
        "  (a / b) + (c / b) = (a + c) / b   et   (a / b) − (c / b) = (a − c) / b.\n" +
        "- Si les dénominateurs sont différents : on réduit impérativement au même dénominateur commun bd avant d'effectuer l'opération :\n" +
        "  (a / b) + (c / d) = (ad + bc) / bd   et   (a / b) − (c / d) = (ad − bc) / bd.\n\n" +
        "3. Multiplication (Produit) :\n" +
        "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux :\n" +
        "  (a / b) × (c / d) = (a × c) / (b × d).\n" +
        "Astuce : simplifie toujours par les facteurs communs avant d'effectuer les multiplications pour éviter les grands nombres.\n\n" +
        "4. Division et inverse :\n" +
        "L'inverse d'une fraction non nulle (c / d) est (d / c).\n" +
        "Diviser par une fraction revient à multiplier par son inverse :\n" +
        "  (a / b) ÷ (c / d) = (a / b) × (d / c) = (a × d) / (b × c).",
      formulas: [
        {
          name: 'Somme de fractions (dénominateurs différents)',
          formula: '(a / b) + (c / d) = (ad + bc) / bd',
          note: 'Réduire au même dénominateur commun bd.',
        },
        {
          name: 'Division de deux fractions',
          formula: '(a / b) ÷ (c / d) = (a / b) × (d / c) = ad / bc',
          note: 'Multiplier par la fraction inverse.',
        },
      ],
      keyRule:
        "Réflexe d'Examen : Ne jamais additionner les dénominateurs entre eux ! (a / b) + (c / d) n'est JAMAIS égal à (a + c) / (b + d). Réduis toujours au même dénominateur commun.",
      workedExample: {
        title: "Calcul et simplification d'une somme de fractions",
        statement: 'Calculer A = 3/7 + 5/2 et donner le résultat sous forme de fraction irréductible.',
        methodSteps: [
          'Étape 1 : Identifier les dénominateurs : 7 et 2. Ils sont différents, le dénominateur commun est 7 × 2 = 14.',
          'Étape 2 : Mettre chaque fraction sur 14 : 3/7 = (3 × 2)/14 = 6/14  et  5/2 = (5 × 7)/14 = 35/14.',
          'Étape 3 : Additionner les numérateurs : A = (6 + 35)/14 = 41/14.',
          'Étape 4 : Vérifier si la fraction est simplifiable : 41 est un nombre premier, 41/14 est irréductible.',
        ],
        conclusion: 'A = 41/14',
      },
      exercises: [
        {
          id: 'seconde_a_maths_ch1_p1_ex1',
          type: 'mcq',
          prompt: 'Calcule le quotient suivant : 3/5 − 7/5',
          options: ['−4/5', '4/5', '−10/5', '−4/10'],
          correctAnswerIndex: 0,
          explanation: 'Comme les dénominateurs sont identiques (5), on soustrait directement les numérateurs : (3 − 7) / 5 = −4/5.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex2',
          type: 'mcq',
          prompt: 'Calcule la somme suivante : 7/3 + 5/3',
          options: ['12/6', '4', '2', '35/3'],
          correctAnswerIndex: 1,
          explanation: 'Même dénominateur (3) : (7 + 5) / 3 = 12/3 = 4.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex3',
          type: 'mcq',
          prompt: 'Calcule la somme avec dénominateurs différents : 3/7 + 5/2',
          options: ['8/9', '15/14', '41/14', '41/9'],
          correctAnswerIndex: 2,
          explanation: 'Dénominateur commun = 7 × 2 = 14. Donc (3 × 2 + 5 × 7) / 14 = (6 + 35) / 14 = 41/14.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex4',
          type: 'mcq',
          prompt: 'Calcule la différence suivante : 4 − 35/11',
          options: ['9/11', '−31/11', '9', '44/11'],
          correctAnswerIndex: 0,
          explanation: 'On écrit 4 sous forme de fraction de dénominateur 11 : 4 = 44/11. D’où (44 − 35) / 11 = 9/11.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex5',
          type: 'mcq',
          prompt: 'Calcule le produit : 2/7 × 3/2',
          options: ['6/14', '3/7', '5/9', '6/7'],
          correctAnswerIndex: 1,
          explanation: 'On simplifie directement par 2 au numérateur et au dénominateur : 2/7 × 3/2 = 3/7.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex6',
          type: 'mcq',
          prompt: 'Calcule le produit de fractions : 4/3 × 5/4',
          options: ['20/12', '5/3', '9/7', '1'],
          correctAnswerIndex: 1,
          explanation: 'On simplifie par le facteur commun 4 : (4 × 5) / (3 × 4) = 5/3.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex7',
          type: 'mcq',
          prompt: 'Calcule la division suivante : 5 ÷ (8/3)',
          options: ['40/3', '15/8', '8/15', '5/8'],
          correctAnswerIndex: 1,
          explanation: 'Diviser par une fraction revient à multiplier par son inverse : 5 × (3/8) = 15/8.',
        },
        {
          id: 'seconde_a_maths_ch1_p1_ex8',
          type: 'mcq',
          prompt: 'Calcule le quotient de deux fractions : (4/3) ÷ (5/4)',
          options: ['16/15', '15/16', '20/12', '1'],
          correctAnswerIndex: 0,
          explanation: '(4/3) ÷ (5/4) = (4/3) × (4/5) = (4 × 4) / (3 × 5) = 16/15.',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/6 : Puissances et Règles de Calcul Algébrique
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_maths_ch1_p2',
      order: 2,
      title: 'Puissances et Règles de Calcul Algébrique',
      summary: 'Manipulation des exposants entiers relatifs et propriétés des puissances aⁿ.',
      conceptExplanation:
        "Les puissances permettent d'écrire de manière compacte des multiplications répétées et sont essentielles en sciences.\n\n" +
        "1. Définition :\n" +
        "Soit a un nombre réel et n un entier naturel non nul : aⁿ = a × a × ... × a (n facteurs égaux à a).\n" +
        "Conventions pour a ≠ 0 :\n" +
        "- Puissance zéro : a⁰ = 1\n" +
        "- Exposant négatif : a⁻ⁿ = 1 / aⁿ\n\n" +
        "2. Propriétés opératoires fondamentales :\n" +
        "Pour tous réels non nuls a et b, et tous entiers relatifs n et p :\n" +
        "1. Produit de même base : aⁿ × aᵖ = aⁿ⁺ᵖ\n" +
        "2. Quotient de même base : aⁿ / aᵖ = aⁿ⁻ᵖ\n" +
        "3. Puissance d'une puissance : (aⁿ)ᵖ = aⁿˣᵖ\n" +
        "4. Puissance d'un produit : (a × b)ⁿ = aⁿ × bⁿ\n" +
        "5. Puissance d'un quotient : (a / b)ⁿ = aⁿ / bⁿ",
      formulas: [
        {
          name: 'Produit et quotient de même base',
          formula: 'aⁿ × aᵖ = aⁿ⁺ᵖ   et   aⁿ / aᵖ = aⁿ⁻ᵖ',
          note: 'Additionner ou soustraire les exposants.',
        },
        {
          name: 'Exposant négatif',
          formula: 'a⁻ⁿ = 1 / aⁿ',
          note: "L'exposant négatif désigne l'inverse de la puissance positive.",
        },
      ],
      keyRule:
        "Réflexe d'Examen : Ne confonds pas −5² et (−5)² ! −5² = −(5 × 5) = −25, tandis que (−5)² = (−5) × (−5) = +25. De plus, tout nombre non nul élevé à 0 donne toujours 1.",
      workedExample: {
        title: "Simplification d'une expression avec des puissances",
        statement: 'Écrire l’expression B = (5⁶ × 5⁻⁸) / 5⁻⁴ sous la forme 5ⁿ.',
        methodSteps: [
          'Étape 1 : Simplifier le numérateur avec la règle aⁿ × aᵖ = aⁿ⁺ᵖ : 5⁶ × 5⁻⁸ = 5⁶⁺⁽⁻⁸⁾ = 5⁻².',
          'Étape 2 : Appliquer la règle du quotient aⁿ / aᵖ = aⁿ⁻ᵖ : B = 5⁻² / 5⁻⁴ = 5⁻²⁻⁽⁻⁴⁾ = 5⁻²⁺⁴.',
          'Étape 3 : Calculer l’exposant final : −2 + 4 = 2.',
        ],
        conclusion: 'B = 5²',
      },
      exercises: [
        {
          id: 'seconde_a_maths_ch1_p2_ex1',
          type: 'mcq',
          prompt: 'Que vaut le nombre 2026⁰ ?',
          options: ['0', '1', '2026', 'Indéfini'],
          correctAnswerIndex: 1,
          explanation: 'Par convention fondamentale, tout nombre réel non nul élevé à la puissance 0 est égal à 1 : a⁰ = 1.',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex2',
          type: 'mcq',
          prompt: 'Écris 5⁻² sous forme de fraction irréductible :',
          options: ['−25', '−1/25', '1/25', '1/10'],
          correctAnswerIndex: 2,
          explanation: 'Par définition de l’exposant négatif, a⁻ⁿ = 1 / aⁿ. Donc 5⁻² = 1 / 5² = 1/25.',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex3',
          type: 'mcq',
          prompt: 'Simplifie le produit 5⁶ × 5⁻⁸ sous la forme aⁿ :',
          options: ['5⁻²', '5¹⁴', '5⁻⁴⁸', '25⁻²'],
          correctAnswerIndex: 0,
          explanation: 'On applique aⁿ × aᵖ = aⁿ⁺ᵖ : 6 + (−8) = −2, d’où 5⁻².',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex4',
          type: 'mcq',
          prompt: 'Simplifie le quotient 7¹⁵ / 7¹³ sous la forme aⁿ :',
          options: ['7²⁸', '7²', '7⁻²', '1²'],
          correctAnswerIndex: 1,
          explanation: 'On applique aⁿ / aᵖ = aⁿ⁻ᵖ : 15 − 13 = 2, d’où 7².',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex5',
          type: 'mcq',
          prompt: 'Écris le produit 10⁷ × 3⁷ avec un seul exposant :',
          options: ['30¹⁴', '13⁷', '30⁷', '300⁷'],
          correctAnswerIndex: 2,
          explanation: 'On applique (a × b)ⁿ = aⁿ × bⁿ : 10⁷ × 3⁷ = (10 × 3)⁷ = 30⁷.',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex6',
          type: 'mcq',
          prompt: 'Calcule la puissance suivante : (2/3)³',
          options: ['6/9', '8/27', '2/27', '8/9'],
          correctAnswerIndex: 1,
          explanation: '(a / b)ⁿ = aⁿ / bⁿ. Donc (2/3)³ = 2³ / 3³ = 8/27.',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex7',
          type: 'mcq',
          prompt: 'Simplifie (5²)³ sous la forme aⁿ :',
          options: ['5⁵', '5⁶', '5⁸', '25³'],
          correctAnswerIndex: 1,
          explanation: '(aⁿ)ᵖ = aⁿˣᵖ. Donc (5²)³ = 5²ˣ³ = 5⁶.',
        },
        {
          id: 'seconde_a_maths_ch1_p2_ex8',
          type: 'mcq',
          prompt: 'Calcule la fraction irréductible égale à 12 / 2³ :',
          options: ['3/2', '6/4', '3/8', '12/8'],
          correctAnswerIndex: 0,
          explanation: '2³ = 8. Donc 12 / 2³ = 12 / 8 = (12 ÷ 4) / (8 ÷ 4) = 3/2.',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/6 : Calculs avec les Radicaux (Racines carrées)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_maths_ch1_p3',
      order: 3,
      title: 'Calculs avec les Radicaux (Racines carrées)',
      summary: 'Simplification et manipulation des expressions contenant le radical √.',
      conceptExplanation:
        "La racine carrée d'un nombre réel positif a, notée √a, est l'unique nombre positif dont le carré vaut a : (√a)² = a.\n\n" +
        "1. Propriétés opératoires fondamentales :\n" +
        "Pour tous nombres réels positifs a et b :\n" +
        "1. Produit : √(a × b) = √a × √b\n" +
        "2. Quotient (avec b > 0) : √(a / b) = √a / √b\n" +
        "3. Puissance : √(aⁿ) = (√a)ⁿ   et   √(a²) = a (si a ≥ 0)\n\n" +
        "2. Méthode pour simplifier sous la forme a√b :\n" +
        "Pour simplifier une racine carrée, on décompose le nombre sous le radical en un produit faisant apparaître le plus grand carré parfait possible (4, 9, 16, 25, 36, 49, 64, 81, 100) :\n" +
        "Exemple : √75 = √(25 × 3) = √25 × √3 = 5√3.",
      formulas: [
        {
          name: 'Produit et quotient de radicaux',
          formula: '√(a × b) = √a × √b   et   √(a / b) = √a / √b (b > 0)',
          note: 'Valable uniquement pour des nombres réels positifs.',
        },
        {
          name: 'Carré d’un radical',
          formula: '(√a)² = a  (pour tout a ≥ 0)',
          note: 'La racine carrée et le carré sont des opérations inverses.',
        },
      ],
      keyRule:
        "Piège classique d'Examen : √(a + b) n'est JAMAIS égal à √a + √b ! Par exemple : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. Le radical ne se distribue jamais sur l'addition ni la soustraction.",
      workedExample: {
        title: 'Simplification d’un radical sous la forme a√b',
        statement: 'Écrire √80 sous la forme a√b où a et b sont des entiers naturels, b étant le plus petit possible.',
        methodSteps: [
          'Étape 1 : Chercher les carrés parfaits diviseurs de 80 : 80 est divisible par 4 (4 × 20) et par 16 (16 × 5). Le plus grand carré parfait est 16.',
          'Étape 2 : Décomposer 80 : 80 = 16 × 5.',
          'Étape 3 : Appliquer la règle du produit : √80 = √(16 × 5) = √16 × √5.',
          'Étape 4 : Extraire la racine du carré parfait : √16 = 4, donc √80 = 4√5.',
        ],
        conclusion: '√80 = 4√5',
      },
      exercises: [
        {
          id: 'seconde_a_maths_ch1_p3_ex1',
          type: 'mcq',
          prompt: 'Calcule la valeur exacte de √(36 × 81) :',
          options: ['117', '54', '45', '2916'],
          correctAnswerIndex: 1,
          explanation: '√(36 × 81) = √36 × √81 = 6 × 9 = 54.',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex2',
          type: 'mcq',
          prompt: 'Calcule la fraction exacte égale à √(16 / 49) :',
          options: ['4/7', '8/24,5', '4/49', '16/7'],
          correctAnswerIndex: 0,
          explanation: '√(16 / 49) = √16 / √49 = 4/7.',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex3',
          type: 'mcq',
          prompt: 'Simplifie l’expression √(2³) sous la forme a√b :',
          options: ['√6', '2√2', '4', '2'],
          correctAnswerIndex: 1,
          explanation: '2³ = 8 = 4 × 2. Donc √8 = √4 × √2 = 2√2.',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex4',
          type: 'mcq',
          prompt: 'Simplifie le produit √20 × √4 :',
          options: ['4√5', '2√10', '8√5', '√80'],
          correctAnswerIndex: 0,
          explanation: '√20 = √(4 × 5) = 2√5 et √4 = 2. D’où 2√5 × 2 = 4√5.',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex5',
          type: 'mcq',
          prompt: 'Écris √75 sous la forme a√b avec b le plus petit possible :',
          options: ['3√5', '5√3', '25√3', '15√5'],
          correctAnswerIndex: 1,
          explanation: '75 = 25 × 3. Comme 25 est un carré parfait (5²), √75 = √25 × √3 = 5√3.',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex6',
          type: 'mcq',
          prompt: 'Simplifie l’expression radicale √32 :',
          options: ['2√8', '4√2', '8√2', '16√2'],
          correctAnswerIndex: 1,
          explanation: '32 = 16 × 2. Donc √32 = √16 × √2 = 4√2.',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex7',
          type: 'mcq',
          prompt: 'Calcule la somme de racines √9 + √16 :',
          options: ['5', '7', '√25', '12'],
          correctAnswerIndex: 1,
          explanation: '√9 = 3 et √16 = 4, donc 3 + 4 = 7. Attention : ne pas confondre avec √(9 + 16) = √25 = 5 !',
        },
        {
          id: 'seconde_a_maths_ch1_p3_ex8',
          type: 'mcq',
          prompt: 'Calcule la puissance suivante : (√7)⁴',
          options: ['28', '49', '14', '343'],
          correctAnswerIndex: 1,
          explanation: '(√7)⁴ = ((√7)²)² = 7² = 49.',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 4/6 : Proportionnalité et Calcul de Pourcentages
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_maths_ch1_p4',
      order: 4,
      title: 'Proportionnalité et Calcul de Pourcentages',
      summary: 'Coefficient de proportionnalité et calcul direct d’un pourcentage sur une quantité.',
      conceptExplanation:
        "La proportionnalité modélise de nombreuses situations de la vie quotidienne et économique.\n\n" +
        "1. Proportionnalité et coefficient :\n" +
        "Deux grandeurs x et y sont dites proportionnelles s'il existe un nombre réel fixe non nul k tel que :\n" +
        "  y = k × x\n" +
        "Le nombre k est appelé le coefficient de proportionnalité. Pour le déterminer à partir d'un couple de valeurs (x, y) avec x ≠ 0, on effectue : k = y ÷ x.\n\n" +
        "2. Calcul de pourcentage :\n" +
        "Un pourcentage est une fraction dont le dénominateur est 100 : k % = k / 100.\n" +
        "Pour calculer k % d'une quantité totale A, on multiplie cette quantité par k / 100 :\n" +
        "  Valeur = A × (k / 100) = (A × k) / 100.",
      formulas: [
        {
          name: 'Relation de proportionnalité',
          formula: 'y = k × x   (avec k = y ÷ x)',
          note: 'k est le coefficient constant de proportionnalité.',
        },
        {
          name: 'Pourcentage d’une quantité',
          formula: 'Valeur = A × (k / 100)',
          note: 'Multiplier la quantité totale par le taux décimal k / 100.',
        },
      ],
      keyRule:
        "Réflexe d'Examen : Ne divise jamais par 100 deux fois ! 30 % de 60 élèves = 60 × 0,30 = 18. Vérifie toujours que le résultat obtenu est cohérent et inférieur à la quantité de départ.",
      workedExample: {
        title: 'Calcul de la part d’un groupe en pourcentage',
        statement: 'Dans une classe de 60 élèves de Seconde A, 30 % sont des garçons. Déterminer le nombre de garçons.',
        methodSteps: [
          'Étape 1 : Identifier la quantité totale : A = 60 élèves.',
          'Étape 2 : Identifier le pourcentage à appliquer : k = 30 %, soit le coefficient 30 / 100 = 0,30.',
          'Étape 3 : Effectuer le produit : Nombre de garçons = 60 × 0,30 = 18.',
        ],
        conclusion: 'Il y a 18 garçons dans la classe.',
      },
      exercises: [
        {
          id: 'seconde_a_maths_ch1_p4_ex1',
          type: 'mcq',
          prompt: 'Un tableau de proportionnalité donne pour x = 3 la valeur y = 9. Quel est le coefficient k tel que y = k × x ?',
          options: ['1/3', '3', '6', '27'],
          correctAnswerIndex: 1,
          explanation: 'k = y ÷ x = 9 ÷ 3 = 3.',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex2',
          type: 'mcq',
          prompt: 'Si le coefficient de proportionnalité est 3, que vaut y pour x = 32 ?',
          options: ['35', '96', '10,6', '64'],
          correctAnswerIndex: 1,
          explanation: 'y = k × x = 3 × 32 = 96.',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex3',
          type: 'mcq',
          prompt: 'Calcule 20 % de 40 kg :',
          options: ['2 kg', '8 kg', '20 kg', '80 kg'],
          correctAnswerIndex: 1,
          explanation: '40 × (20 / 100) = 40 × 0,2 = 8 kg.',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex4',
          type: 'mcq',
          prompt: 'Calcule 2 % de 300 g :',
          options: ['6 g', '15 g', '60 g', '0,6 g'],
          correctAnswerIndex: 0,
          explanation: '300 × (2 / 100) = 300 × 0,02 = 6 g.',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex5',
          type: 'mcq',
          prompt: 'Dans une classe de 60 élèves, 30 % sont des garçons. Quel est le nombre exact de garçons ?',
          options: ['15', '18', '20', '30'],
          correctAnswerIndex: 1,
          explanation: '60 × (30 / 100) = 60 × 0,3 = 18 garçons.',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex6',
          type: 'mcq',
          prompt: 'Dans un sachet de café de 275 g contenant 30 % d’arabica, quelle est la masse d’arabica ?',
          options: ['75 g', '82,5 g', '92,5 g', '85 g'],
          correctAnswerIndex: 1,
          explanation: '275 × (30 / 100) = 275 × 0,3 = 82,5 g.',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex7',
          type: 'mcq',
          prompt: 'Dans ce même sachet de 275 g contenant 70 % de robusta, quelle est la masse de robusta ?',
          options: ['175 g', '182,5 g', '192,5 g', '200 g'],
          correctAnswerIndex: 2,
          explanation: '275 × (70 / 100) = 275 × 0,7 = 192,5 g (ou 275 − 82,5 = 192,5 g).',
        },
        {
          id: 'seconde_a_maths_ch1_p4_ex8',
          type: 'mcq',
          prompt: 'Une entreprise compte 80 employés dont 15 % sont des agents de maîtrise. Quel est leur effectif ?',
          options: ['10', '12', '15', '20'],
          correctAnswerIndex: 1,
          explanation: '80 × (15 / 100) = 80 × 0,15 = 12 agents.',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 5/6 : Variations en Pourcentage (Augmentation et Réduction)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_maths_ch1_p5',
      order: 5,
      title: 'Variations en Pourcentage (Augmentation et Réduction)',
      summary: 'Calculs de grandeurs après hausse, remise ou succession de pourcentages.',
      conceptExplanation:
        "L'augmentation et la réduction en pourcentage reposent sur le concept de coefficient multiplicateur.\n\n" +
        "1. Augmentation de k % :\n" +
        "Augmenter une grandeur initiale A de k % revient à lui ajouter k % de sa valeur :\n" +
        "  Prix final = A + A × (k / 100) = A × (1 + k / 100).\n" +
        "Le coefficient multiplicateur est donc : CM = 1 + k / 100.\n" +
        "Exemple : une hausse de 30 % correspond à multiplier par 1 + 0,30 = 1,30.\n\n" +
        "2. Réduction (ou remise) de k % :\n" +
        "Réduire une grandeur initiale A de k % revient à lui retrancher k % de sa valeur :\n" +
        "  Prix final = A − A × (k / 100) = A × (1 − k / 100).\n" +
        "Le coefficient multiplicateur est donc : CM = 1 − k / 100.\n" +
        "Exemple : une remise de 30 % correspond à multiplier par 1 − 0,30 = 0,70.\n\n" +
        "3. Pourcentage de pourcentage (Sous-population) :\n" +
        "Prendre a % de b % d'une quantité revient à multiplier la quantité par :\n" +
        "  (a / 100) × (b / 100) = (a × b) / 10 000.",
      formulas: [
        {
          name: 'Coefficient multiplicateur d’une augmentation',
          formula: 'CM = 1 + (k / 100)',
          note: 'Valeur finale = Valeur initiale × (1 + k / 100).',
        },
        {
          name: 'Coefficient multiplicateur d’une réduction',
          formula: 'CM = 1 − (k / 100)',
          note: 'Valeur finale = Valeur initiale × (1 − k / 100).',
        },
      ],
      keyRule:
        "Réflexe d'Examen : Une hausse de 20 % suivie d'une baisse de 20 % ne redonne PAS la valeur initiale ! En effet : 1,20 × 0,80 = 0,96 (ce qui équivaut à une baisse globale de 4 %). On multiplie toujours les coefficients multiplicateurs, on ne les additionne jamais.",
      workedExample: {
        title: 'Calcul du prix réduit d’un article',
        statement: 'Un pagne traditionnel coûte 2 000 F CFA. Pendant les soldes, le commerçant accorde une réduction de 30 %. Quel est le nouveau prix ?',
        methodSteps: [
          'Étape 1 : Calculer le coefficient multiplicateur d’une baisse de 30 % : CM = 1 − 30 / 100 = 1 − 0,30 = 0,70.',
          'Étape 2 : Multiplier le prix initial par ce coefficient : Nouveau prix = 2 000 × 0,70 = 1 400 F CFA.',
          'Étape 3 : Vérification par la méthode de la remise : Montant de la remise = 2 000 × 0,30 = 600 F CFA. Prix final = 2 000 − 600 = 1 400 F CFA.',
        ],
        conclusion: 'Le prix après réduction est de 1 400 F CFA.',
      },
      exercises: [
        {
          id: 'seconde_a_maths_ch1_p5_ex1',
          type: 'mcq',
          prompt: 'Un article coûte 2 000 F CFA. Quel est son prix après une réduction de 30 % ?',
          options: ['600 F CFA', '1 400 F CFA', '1 700 F CFA', '1 970 F CFA'],
          correctAnswerIndex: 1,
          explanation: '2 000 × (1 − 30/100) = 2 000 × 0,70 = 1 400 F CFA.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex2',
          type: 'mcq',
          prompt: 'Un article coûte 2 000 F CFA. Quel est son prix après une augmentation de 30 % ?',
          options: ['2 300 F CFA', '2 600 F CFA', '2 030 F CFA', '6 000 F CFA'],
          correctAnswerIndex: 1,
          explanation: '2 000 × (1 + 30/100) = 2 000 × 1,30 = 2 600 F CFA.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex3',
          type: 'mcq',
          prompt: 'Un paquet de café coûte 1 500 F CFA. Quel est son prix après une réduction de 15 % ?',
          options: ['1 275 F CFA', '1 350 F CFA', '225 F CFA', '1 485 F CFA'],
          correctAnswerIndex: 0,
          explanation: '1 500 × (1 − 15/100) = 1 500 × 0,85 = 1 275 F CFA.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex4',
          type: 'mcq',
          prompt: 'Calcule 5 % de 2 % d’un paquet de 300 g :',
          options: ['0,03 g', '0,3 g', '3 g', '30 g'],
          correctAnswerIndex: 1,
          explanation: '300 × (5 × 2) / 10 000 = 300 × 10 / 10 000 = 300 × 0,001 = 0,3 g.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex5',
          type: 'mcq',
          prompt: 'Une classe de 60 élèves compte 40 % de garçons (soit 24 garçons), et 25 % de ces garçons ont moins de 18 ans. Combien de garçons ont moins de 18 ans ?',
          options: ['4', '6', '8', '10'],
          correctAnswerIndex: 1,
          explanation: '24 × (25 / 100) = 24 × 0,25 = 6 garçons.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex6',
          type: 'mcq',
          prompt: 'Dans cette même classe comptant 24 garçons au total dont 6 ont moins de 18 ans, combien ont 18 ans ou plus ?',
          options: ['12', '16', '18', '20'],
          correctAnswerIndex: 2,
          explanation: '24 − 6 = 18 garçons.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex7',
          type: 'mcq',
          prompt: 'Quel est le pourcentage de garçons ayant 18 ans ou plus parmi les 24 garçons ?',
          options: ['60 %', '70 %', '75 %', '80 %'],
          correctAnswerIndex: 2,
          explanation: '(18 / 24) × 100 = 0,75 × 100 = 75 %.',
        },
        {
          id: 'seconde_a_maths_ch1_p5_ex8',
          type: 'mcq',
          prompt: 'Sur 35 femmes salariées d’une entreprise, 7 sont agentes de maîtrise. Quel est leur pourcentage parmi les femmes ?',
          options: ['15 %', '20 %', '25 %', '28 %'],
          correctAnswerIndex: 1,
          explanation: '(7 / 35) × 100 = (1 / 5) × 100 = 20 %.',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 6/6 : Approximations Décimales et Arrondis d'ordre n
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_maths_ch1_p6',
      order: 6,
      title: 'Approximations Décimales et Arrondis d’ordre n',
      summary: 'Encadrements, valeurs approchées par défaut, par excès et règles de l’arrondi d’ordre n.',
      conceptExplanation:
        "Tous les nombres réels ne peuvent pas s'écrire sous forme décimale exacte (par exemple √2 ou 1/3 ont une infinité de chiffres après la virgule). On utilise donc des approximations décimales contrôlées.\n\n" +
        "1. Encadrement d'ordre n :\n" +
        "Un encadrement d'ordre n d'un réel x est de la forme :\n" +
        "  a < x < b avec b − a = 10⁻ⁿ (l'amplitude est de n chiffres après la virgule).\n\n" +
        "2. Approximations par défaut et par excès :\n" +
        "- a est l'approximation décimale d'ordre n par défaut (on tronque le nombre après le n-ième chiffre après la virgule).\n" +
        "- b est l'approximation décimale d'ordre n par excès (on ajoute une unité au dernier chiffre retenu : b = a + 10⁻ⁿ).\n\n" +
        "3. Règle officielle de l'arrondi d'ordre n :\n" +
        "Pour déterminer l'arrondi d'ordre n d'un nombre, on observe le chiffre qui suit immédiatement (le (n+1)-ième chiffre après la virgule) :\n" +
        "- S'il vaut 0, 1, 2, 3 ou 4 : l'arrondi est la valeur par défaut a.\n" +
        "- S'il vaut 5, 6, 7, 8 ou 9 : l'arrondi est la valeur par excès b.",
      formulas: [
        {
          name: 'Encadrement d’ordre n',
          formula: 'a < x < b   avec   b − a = 10⁻ⁿ',
          note: 'a = valeur par défaut, b = valeur par excès.',
        },
        {
          name: 'Règle du (n+1)-ième chiffre pour l’arrondi',
          formula: 'Chiffre suivant < 5 ⟹ défaut  |  Chiffre suivant ≥ 5 ⟹ excès',
          note: 'Critère universel d’arrondi officiel.',
        },
      ],
      keyRule:
        "Réflexe d'Examen : Ne tronque jamais avant d'arrondir ! Regarde toujours le chiffre situé immédiatement après le rang demandé. Par exemple, pour l'arrondi d'ordre 3 de 1,414213, le 4e chiffre est 2 (< 5), donc l'arrondi est 1,414.",
      workedExample: {
        title: 'Encadrement et arrondi d’ordre 3 d’un radical',
        statement: 'Sachant que √15 ≈ 3,872983, donner l’encadrement d’ordre 3 et l’arrondi d’ordre 3 de √15.',
        methodSteps: [
          'Étape 1 : Pour l’ordre 3, on s’intéresse à 3 chiffres après la virgule : 3,872.',
          'Étape 2 : L’approximation par défaut d’ordre 3 est 3,872.',
          'Étape 3 : L’approximation par excès d’ordre 3 est 3,872 + 0,001 = 3,873. Encadrement : 3,872 < √15 < 3,873.',
          'Étape 4 : Pour l’arrondi d’ordre 3, on regarde le 4e chiffre après la virgule : c’est un 9. Comme 9 ≥ 5, l’arrondi est la valeur par excès : 3,873.',
        ],
        conclusion: 'Encadrement : 3,872 < √15 < 3,873  et  Arrondi d’ordre 3 = 3,873.',
      },
      exercises: [
        {
          id: 'seconde_a_maths_ch1_p6_ex1',
          type: 'mcq',
          prompt: 'Sachant que √2 ≈ 1,414213, quel est l’encadrement d’ordre 3 de √2 ?',
          options: ['1,41 < √2 < 1,42', '1,414 < √2 < 1,415', '1,414 < √2 < 1,416', '1,413 < √2 < 1,414'],
          correctAnswerIndex: 1,
          explanation: 'L’amplitude d’ordre 3 est 10⁻³ = 0,001. L’encadrement est donc 1,414 < √2 < 1,415.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex2',
          type: 'mcq',
          prompt: 'Quelle est l’approximation décimale d’ordre 3 par défaut de √2 ≈ 1,414213 ?',
          options: ['1,414', '1,415', '1,413', '1,410'],
          correctAnswerIndex: 0,
          explanation: 'L’approximation par défaut consiste à tronquer au 3e chiffre après la virgule : 1,414.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex3',
          type: 'mcq',
          prompt: 'Quelle est l’approximation décimale d’ordre 3 par excès de √2 ≈ 1,414213 ?',
          options: ['1,414', '1,415', '1,416', '1,420'],
          correctAnswerIndex: 1,
          explanation: 'On ajoute 0,001 à la valeur par défaut : 1,414 + 0,001 = 1,415.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex4',
          type: 'mcq',
          prompt: 'On donne √15 ≈ 3,872983. Quelle est l’approximation d’ordre 4 par défaut de √15 ?',
          options: ['3,872', '3,8729', '3,8730', '3,8728'],
          correctAnswerIndex: 1,
          explanation: 'On conserve exactement 4 chiffres après la virgule : 3,8729.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex5',
          type: 'mcq',
          prompt: 'Quelle est l’approximation d’ordre 4 par excès de √15 ≈ 3,872983 ?',
          options: ['3,8729', '3,8730', '3,8731', '3,8800'],
          correctAnswerIndex: 1,
          explanation: 'On ajoute 0,0001 à 3,8729, ce qui donne 3,8730.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex6',
          type: 'mcq',
          prompt: 'Quel est l’arrondi d’ordre 3 de √2 ≈ 1,414213 ?',
          options: ['1,413', '1,414', '1,415', '1,410'],
          correctAnswerIndex: 1,
          explanation: 'Le 4e chiffre après la virgule est 2 (inférieur à 5), donc l’arrondi est la valeur par défaut : 1,414.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex7',
          type: 'mcq',
          prompt: 'Quel est l’arrondi d’ordre 3 de √15 ≈ 3,872983 ?',
          options: ['3,872', '3,873', '3,874', '3,870'],
          correctAnswerIndex: 1,
          explanation: 'Le 4e chiffre après la virgule est 9 (supérieur ou égal à 5), donc l’arrondi est la valeur par excès : 3,873.',
        },
        {
          id: 'seconde_a_maths_ch1_p6_ex8',
          type: 'mcq',
          prompt: 'Quel est l’arrondi d’ordre 5 de √15 ≈ 3,872983 ?',
          options: ['3,87298', '3,87299', '3,87290', '3,87300'],
          correctAnswerIndex: 0,
          explanation: 'Le 6e chiffre après la virgule est 3 (< 5), donc on retient la valeur par défaut à 5 décimales : 3,87298.',
        },
      ],
    },
  ],
};

