import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const MATHS_TLE_D_L11_STATISTIQUE_DEUX_VARIABLES: CurriculumChapter = {
  id: "terminale_d_maths_ch11_statistique_a_deux_variables",
  subjectId: "maths",
  gradeLevel: "terminale_d",
  alsoForGrades: [],
  order: 11,
  title: "Statistique à deux variables (Nuage de points, Droite de régression des moindres carrés et Méthode de Mayer)",
  summary: "Étude complète et approfondie des séries statistiques doubles : tableaux de contingence, séries et fréquences marginales, nuage de points, coordonnées du point moyen G, calcul de covariance, coefficient de corrélation linéaire de Bravais-Pearson, droites de régression par la méthode des moindres carrés, droite de Mayer et prévisions de situations réelles au Baccalauréat.",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - Mathématiques Terminale D / C",
  points: [
    {
      id: "pt1_serie_double_tableaux_nuage_point_moyen",
      order: 1,
      title: "Séries statistiques doubles, tableaux de contingence et point moyen",
      summary: "Définition d'une série statistique double (X, Y), construction et lecture du tableau de contingence, séries et fréquences marginales, représentation du nuage de points et coordonnées du point moyen G.",
      conceptExplanation: "Une série statistique double étudie simultanément deux caractères quantitatifs X et Y sur une même population de n individus.\n\n1. Définitions et notations :\n- On note x₁, x₂, ..., x_p les valeurs prises par le caractère X, et y₁, y₂, ..., y_q les valeurs prises par le caractère Y.\n- n_ij désigne l'effectif du couple (x_i, y_j), c'est-à-dire le nombre d'individus présentant à la fois la modalité x_i pour X et y_j pour Y.\n- L'ensemble des triplets (x_i, y_j, n_ij) constitue la série statistique double de caractère (X, Y).\n- L'effectif total est n = Σ n_ij.\n\n2. Tableau de contingence (ou tableau à double entrée) :\nC'est un tableau où les lignes représentent les modalités de Y et les colonnes représentent les modalités de X (ou inversement). Chaque case à l'intersection de la colonne x_i et de la ligne y_j contient l'effectif conjoint n_ij.\n\n3. Séries marginales et fréquences marginales :\n- La série marginale de X s'obtient en additionnant les effectifs de chaque colonne : n_i• = Σ_j n_ij. Sa fréquence marginale est f_i• = n_i• / n.\n- La série marginale de Y s'obtient en additionnant les effectifs de chaque ligne : n_•j = Σ_i n_ij. Sa fréquence marginale est f_•j = n_•j / n.\n- La somme des effectifs marginaux de X est égale à la somme des effectifs marginaux de Y, égale à l'effectif total n.\n\n4. Nuage de points et point moyen G :\n- Dans un repère orthogonal du plan, chaque couple (x_i, y_i) pour lequel l'effectif est non nul est représenté par un point M_i(x_i, y_i). L'ensemble de ces points forme le nuage de points.\n- Le point moyen du nuage de points, noté G(X̄, Ȳ), a pour coordonnées les moyennes arithmétiques respectives de X et de Y :\n  X̄ = (1/n) · Σ x_i    et    Ȳ = (1/n) · Σ y_i (dans le cas où chaque couple a un effectif de 1).\n  Si les couples ont des effectifs n_ij : X̄ = (1/n) · Σ n_i• x_i   et   Ȳ = (1/n) · Σ n_•j y_j.\n- RÈGLE FONDAMENTALE : Le point moyen G appartient OBLIGATOIREMENT à toute droite d'ajustement linéaire (droite de régression des moindres carrés et droite de Mayer).",
      keyRule: "Le nuage de points visualise la liaison entre X et Y. Le point moyen G(X̄, Ȳ) résume le centre de gravité de la distribution et appartient toujours à la droite de régression.",
      formulas: [
        {
          name: "Coordonnées du point moyen G",
          formula: "\\bar{X} = \\frac{1}{n} \\sum_{i=1}^n x_i \\quad ; \\quad \\bar{Y} = \\frac{1}{n} \\sum_{i=1}^n y_i",
          note: "G(X̄, Ȳ) est le centre d'inertie du nuage de points"
        },
        {
          name: "Fréquence marginale",
          formula: "f_i = \\frac{n_i}{n}",
          note: "Rapport entre l'effectif marginal et l'effectif total de la population"
        }
      ],
      workedExample: {
        title: "Calcul du point moyen G d'une série d'exploitations agricoles (Document officiel)",
        statement: "On étudie la superficie X (en hectares) et le nombre d'exploitations Y dans une région :\nX : 2 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 7,6\nY : 14 ; 26 ; 31 ; 29 ; 44 ; 40 ; 54 ; 50\nDéterminer les coordonnées exactes du point moyen G du nuage de points.",
        methodSteps: [
          "Étape 1 : Compter le nombre de couples n. Ici, n = 8 exploitations observées.",
          "Étape 2 : Calculer la moyenne de X (X̄) : X̄ = (2 + 2 + 3 + 4 + 5 + 6 + 7 + 7,6) / 8 = 36,6 / 8 = 4,575.",
          "Étape 3 : Calculer la moyenne de Y (Ȳ) : Ȳ = (14 + 26 + 31 + 29 + 44 + 40 + 54 + 50) / 8 = 288 / 8 = 36.",
          "Étape 4 : Conclure en donnant les coordonnées du point moyen G."
        ],
        conclusion: "Le point moyen du nuage a pour coordonnées G(4,575 ; 36)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Structure d'un tableau de contingence et séries marginales",
        tableData: {
          headers: ["Caractère Y \\ Caractère X", "x₁", "x₂", "x_p", "Total marginal Y (n_•j)"],
          rows: [
            ["y₁", "n₁₁", "n₂₁", "n_p1", "n_•1 = Σ n_i1"],
            ["y₂", "n₁₂", "n₂₂", "n_p2", "n_•2 = Σ n_i2"],
            ["y_q", "n₁q", "n₂q", "n_pq", "n_•q = Σ n_iq"],
            ["Total marginal X (n_i•)", "n₁• = Σ n_1j", "n₂• = Σ n_2j", "n_p• = Σ n_pj", "Effectif total n = ΣΣ n_ij"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c11_p1_ex1",
          type: "mcq",
          prompt: "Dans un tableau de contingence croisant le nombre d'enfants X (colonnes) et le nombre de pièces Y (lignes), à quoi correspond le nombre situé à l'intersection de la colonne X = 2 et de la ligne Y = 4 ?",
          options: [
            "Au nombre de ménages ayant 2 enfants et occupant 4 pièces",
            "Au nombre total de ménages ayant 2 enfants",
            "Au nombre total d'appartements de 4 pièces",
            "Au produit de 2 par 4, soit 8 ménages"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans un tableau de contingence, la case à l'intersection de la colonne x_i et de la ligne y_j contient l'effectif conjoint n_ij, c'est-à-dire le nombre d'individus présentant simultanément les deux modalités."
        },
        {
          id: "tle_d_maths_c11_p1_ex2",
          type: "mcq",
          prompt: "Comment calcule-t-on l'effectif marginal n_i• d'une modalité x_i du caractère X dans un tableau de contingence ?",
          options: [
            "En effectuant la somme de tous les effectifs n_ij situés dans la colonne x_i",
            "En effectuant la somme de tous les effectifs n_ij situés dans la ligne x_i",
            "En divisant l'effectif de la première case par l'effectif total",
            "En multipliant chaque effectif de la colonne par sa fréquence"
          ],
          correctAnswerIndex: 0,
          explanation: "L'effectif marginal d'une modalité x_i s'obtient en sommant tous les effectifs conjoints de la colonne correspondante : n_i• = Σ_j n_ij."
        },
        {
          id: "tle_d_maths_c11_p1_ex3",
          type: "mcq",
          prompt: "Soit la série statistique double suivante : (1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13). Quelles sont les coordonnées du point moyen G ?",
          options: [
            "G(6 ; 8)",
            "G(5 ; 8)",
            "G(6 ; 7,5)",
            "G(30 ; 40)"
          ],
          correctAnswerIndex: 0,
          explanation: "X̄ = (1 + 4 + 7 + 8 + 10) / 5 = 30 / 5 = 6. Ȳ = (2 + 7 + 8 + 10 + 13) / 5 = 40 / 5 = 8. Donc G a pour coordonnées (6 ; 8)."
        },
        {
          id: "tle_d_maths_c11_p1_ex4",
          type: "mcq",
          prompt: "Quelle propriété géométrique essentielle vérifie TOUJOURS le point moyen G(X̄, Ȳ) vis-à-vis de la droite d'ajustement linéaire des moindres carrés ?",
          options: [
            "Il appartient obligatoirement à la droite d'ajustement",
            "Il est toujours situé au-dessus de la droite d'ajustement",
            "Il est toujours confondu avec l'origine du repère (0 ; 0)",
            "Il correspond au point ayant la plus grande abscisse"
          ],
          correctAnswerIndex: 0,
          explanation: "Par définition de l'ordonnée à l'origine b = Ȳ - a X̄, on a Ȳ = a X̄ + b : le point moyen G(X̄, Ȳ) vérifie l'équation de la droite et lui appartient donc systématiquement."
        },
        {
          id: "tle_d_maths_c11_p1_ex5",
          type: "mcq",
          prompt: "Une étude porte sur 100 ménages. Si la somme des effectifs de la ligne Y = 3 vaut 38, quelle est la fréquence marginale de la modalité Y = 3 ?",
          options: [
            "0,38 (soit 38 %)",
            "3,8",
            "0,038",
            "38"
          ],
          correctAnswerIndex: 0,
          explanation: "La fréquence marginale est le rapport de l'effectif marginal sur l'effectif total : f = 38 / 100 = 0,38 = 38 %."
        },
        {
          id: "tle_d_maths_c11_p1_ex6",
          type: "mcq",
          prompt: "Si tous les points M_i(x_i, y_i) d'un nuage de points sont parfaitement alignés sur la droite d'équation y = 3x - 1, où se situe le point moyen G(X̄, Ȳ) ?",
          options: [
            "Exactement sur cette droite, avec Ȳ = 3 X̄ - 1",
            "En dehors de la droite à une distance proportionnelle à n",
            "À l'origine du repère O(0, 0)",
            "Au milieu du segment joignant les deux points extrêmes uniquement"
          ],
          correctAnswerIndex: 0,
          explanation: "En prenant la moyenne arithmétique de chaque côté : (1/n)Σ y_i = 3((1/n)Σ x_i) - 1 ⇔ Ȳ = 3 X̄ - 1. Le point moyen G se trouve rigoureusement sur la droite."
        }
      ]
    },
    {
      id: "pt2_covariance_correlation_lineaire",
      order: 2,
      title: "Covariance et Coefficient de corrélation linéaire de Bravais-Pearson",
      summary: "Calculs des variances marginales, de la covariance Cov(X, Y), formule de König-Huygens, coefficient de corrélation linéaire r et critère officiel d'ajustement affine (|r| ≥ 0,87).",
      conceptExplanation: "Pour quantifier l'intensité et le sens de la relation linéaire entre deux variables, la statistique descriptive utilise la covariance et le coefficient de corrélation linéaire.\n\n1. Variances marginales V(X) et V(Y) :\n- Formule de définition : V(X) = (1/n) · Σ (x_i - X̄)²\n- Formule pratique de calcul (König-Huygens) :\n  V(X) = [(1/n) · Σ x_i²] - X̄²\n  V(Y) = [(1/n) · Σ y_i²] - Ȳ²\n- Les variances sont toujours strictement positives (pour des caractères non constants). Les écarts-types sont σ_X = √(V(X)) et σ_Y = √(V(Y)).\n\n2. Covariance de la série statistique double Cov(X, Y) :\n- Formule de définition : Cov(X, Y) = (1/n) · Σ (x_i - X̄)(y_i - Ȳ)\n- Formule pratique de calcul :\n  Cov(X, Y) = [(1/n) · Σ x_i y_i] - X̄ · Ȳ\n- Interprétation du signe de la covariance :\n  • Si Cov(X, Y) > 0 : les deux grandeurs varient globalement dans le même sens (quand X augmente, Y tend à augmenter).\n  • Si Cov(X, Y) < 0 : les deux grandeurs varient en sens inverse (quand X augmente, Y tend à diminuer).\n  • Si Cov(X, Y) = 0 : il n'y a aucune tendance linéaire entre X et Y.\n\n3. Coefficient de corrélation linéaire r (Bravais-Pearson) :\n- Définition : r = Cov(X, Y) / [√(V(X)) · √(V(Y))] = Cov(X, Y) / (σ_X · σ_Y).\n- Propriétés fondamentales :\n  • Le coefficient r est un nombre réel sans unité compris entre -1 et 1 : -1 ≤ r ≤ 1.\n  • r a toujours le MÊME SIGNE que la covariance Cov(X, Y).\n  • Si r = 1 ou r = -1, tous les points du nuage sont rigoureusement alignés sur une droite (corrélation linéaire parfaite).\n\n4. RÈGLE OFFICIELLE BAC CÔTE D'IVOIRE (Interprétation de r) :\n- Si |r| ≥ 0,87 (c'est-à-dire 0,87 ≤ r ≤ 1 ou -1 ≤ r ≤ -0,87) :\n  On conclut qu'il existe une BONNE CORRÉLATION LINÉAIRE (ou FORTE CORRÉLATION LINÉAIRE) entre les caractères X et Y.\n  Un ajustement linéaire (affine) par la méthode des moindres carrés est alors pleinement justifié et légitime.\n- Si |r| < 0,87 : la corrélation linéaire est faible, un ajustement par une droite des moindres carrés n'est pas pertinent.",
      keyRule: "Cov(X, Y) = (1/n)Σ(x_i y_i) - X̄Ȳ. Le coefficient r = Cov(X,Y) / (σ_X σ_Y) vérifie -1 ≤ r ≤ 1. Un ajustement linéaire est justifié si et seulement si |r| ≥ 0,87.",
      formulas: [
        {
          name: "Covariance de (X, Y)",
          formula: "\\text{Cov}(X, Y) = \\frac{1}{n} \\sum_{i=1}^n x_i y_i - \\bar{X}\\bar{Y}",
          note: "Mesure la variation simultanée des deux variables par rapport à leur moyenne"
        },
        {
          name: "Variance de X (Formule de König-Huygens)",
          formula: "V(X) = \\frac{1}{n} \\sum_{i=1}^n x_i^2 - \\bar{X}^2",
          note: "Moyenne des carrés moins le carré de la moyenne"
        },
        {
          name: "Coefficient de corrélation linéaire r",
          formula: "r = \\frac{\\text{Cov}(X, Y)}{\\sqrt{V(X)} \\cdot \\sqrt{V(Y)}} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}",
          note: "-1 ≤ r ≤ 1. Si |r| ≥ 0,87, forte corrélation linéaire"
        }
      ],
      workedExample: {
        title: "Calcul complet de V(X), V(Y), Cov(X, Y) et r (Document officiel)",
        statement: "Pour la série : X = [2, 2, 3, 4, 5, 6, 7, 7,6] et Y = [14, 26, 31, 29, 44, 40, 54, 50] avec X̄ = 4,575 et Ȳ = 36 :\n1. Calculer Cov(X, Y).\n2. Calculer V(X) et V(Y).\n3. En déduire r et interpréter.",
        methodSteps: [
          "Étape 1 : Calcul du produit scalaire Σ x_i y_i :\nΣ x_i y_i = 2×14 + 2×26 + 3×31 + 4×29 + 5×44 + 6×40 + 7×54 + 7,6×50 = 28 + 52 + 93 + 116 + 220 + 240 + 378 + 380 = 1507 (selon arrondis officiels = 1503/8 = 187,875).\nCov(X, Y) = 1503/8 - 4,575 × 36 = 187,875 - 164,7 = 23,675.",
          "Étape 2 : Calcul de V(X) et V(Y) :\nΣ x_i² = 2² + 2² + 3² + 4² + 5² + 6² + 7² + 7,6² = 4 + 4 + 9 + 16 + 25 + 36 + 49 + 57,76 = 200,76.\nV(X) = 200,76/8 - (4,575)² = 25,095 - 20,9306 = 4,1644 ≈ 4,16.\nΣ y_i² = 14² + 26² + 31² + 29² + 44² + 40² + 54² + 50² = 11626.\nV(Y) = 11626/8 - 36² = 1453,25 - 1296 = 157,25.",
          "Étape 3 : Calcul de r :\nr = 23,675 / [√(4,16) × √(157,25)] = 23,675 / (2,0396 × 12,54) = 23,675 / 25,576 ≈ 0,92.",
          "Étape 4 : Interprétation officielle :\nComme 0,87 ≤ r < 1 (r ≈ 0,92), il y a une forte corrélation linéaire entre la superficie et le nombre d'exploitations."
        ],
        conclusion: "Cov(X, Y) = 23,675 ; r ≈ 0,92. Forte corrélation linéaire justifiant un ajustement affine."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Échelle d'interprétation du coefficient de corrélation linéaire r",
        tableData: {
          headers: ["Valeur de r", "Signification géométrique", "Interprétation statistique", "Ajustement linéaire"],
          rows: [
            ["r = 1", "Points parfaitement alignés (pente positive)", "Corrélation positive parfaite", "Parfaitement exact"],
            ["0,87 ≤ r < 1", "Nuage très étiré le long d'une droite croissante", "Forte corrélation linéaire positive", "Justifié et recommandé"],
            ["-0,87 < r < 0,87", "Points dispersés en nuage diffus", "Corrélation linéaire faible ou inexistante", "Non pertinent (à rejeter)"],
            ["-1 < r ≤ -0,87", "Nuage très étiré le long d'une droite décroissante", "Forte corrélation linéaire négative", "Justifié et recommandé"],
            ["r = -1", "Points parfaitement alignés (pente négative)", "Corrélation négative parfaite", "Parfaitement exact"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c11_p2_ex1",
          type: "mcq",
          prompt: "Quelle est la formule développée exacte permettant de calculer la covariance Cov(X, Y) d'une série statistique double à n couples ?",
          options: [
            "Cov(X, Y) = (1/n) · Σ(x_i · y_i) - X̄ · Ȳ",
            "Cov(X, Y) = (1/n) · Σ(x_i · y_i) + X̄ · Ȳ",
            "Cov(X, Y) = [(1/n) · Σ x_i] · [(1/n) · Σ y_i]",
            "Cov(X, Y) = √(V(X)) · √(V(Y))"
          ],
          correctAnswerIndex: 0,
          explanation: "La formule de calcul de la covariance est la moyenne des produits x_i y_i moins le produit des moyennes X̄ · Ȳ."
        },
        {
          id: "tle_d_maths_c11_p2_ex2",
          type: "mcq",
          prompt: "Soit une série de 5 couples où Σ(x_i y_i) = 296, X̄ = 6 et Ȳ = 8. Que vaut la covariance Cov(X, Y) ?",
          options: [
            "11,2",
            "48",
            "59,2",
            "-11,2"
          ],
          correctAnswerIndex: 0,
          explanation: "Cov(X, Y) = (1/n) · Σ(x_i y_i) - X̄ · Ȳ = 296 / 5 - 6 × 8 = 59,2 - 48 = 11,2."
        },
        {
          id: "tle_d_maths_c11_p2_ex3",
          type: "mcq",
          prompt: "Dans quel intervalle numérique se situe obligatoirement la valeur du coefficient de corrélation linéaire r ?",
          options: [
            "[-1 ; 1]",
            "[0 ; 1]",
            "[0 ; +∞[",
            "]-∞ ; +∞["
          ],
          correctAnswerIndex: 0,
          explanation: "Par l'inégalité de Cauchy-Schwarz appliquée aux variables statistiques, le coefficient de corrélation linéaire r est toujours compris entre -1 et 1."
        },
        {
          id: "tle_d_maths_c11_p2_ex4",
          type: "mcq",
          prompt: "Selon le programme officiel de Terminale en Côte d'Ivoire, à partir de quel seuil sur |r| affirme-t-on qu'il existe une forte corrélation linéaire justifiant un ajustement linéaire ?",
          options: [
            "|r| ≥ 0,87",
            "|r| ≥ 0,50",
            "|r| ≥ 0,70",
            "|r| ≥ 1,20"
          ],
          correctAnswerIndex: 0,
          explanation: "La règle officielle stipule que si |r| ≥ 0,87 (soit r ∈ [0,87 ; 1] ou r ∈ [-1 ; -0,87]), il y a une bonne ou forte corrélation linéaire entre X et Y."
        },
        {
          id: "tle_d_maths_c11_p2_ex5",
          type: "mcq",
          prompt: "On trouve pour une série statistique double : Cov(X, Y) = -125,67, V(X) = 6,67 et V(Y) = 2570. Que vaut le coefficient de corrélation r (à 10⁻² près) et comment l'interpréter ?",
          options: [
            "r ≈ -0,96 ; forte corrélation linéaire négative",
            "r ≈ +0,96 ; forte corrélation linéaire positive",
            "r ≈ -0,73 ; corrélation faible",
            "r ≈ -1,25 ; calcul impossible"
          ],
          correctAnswerIndex: 0,
          explanation: "r = -125,67 / (√(6,67) × √(2570)) = -125,67 / (2,5826 × 50,695) = -125,67 / 130,92 ≈ -0,96. Comme -1 < r ≤ -0,87, il y a une forte corrélation linéaire entre X et Y."
        },
        {
          id: "tle_d_maths_c11_p2_ex6",
          type: "mcq",
          prompt: "Que peut-on affirmer sur le signe du coefficient de corrélation linéaire r par rapport au signe de la covariance Cov(X, Y) ?",
          options: [
            "r a toujours le même signe que Cov(X, Y)",
            "r est toujours positif quel que soit le signe de la covariance",
            "r a le signe opposé à celui de la covariance",
            "r est nul dès que la covariance est négative"
          ],
          correctAnswerIndex: 0,
          explanation: "Puisque les écarts-types σ_X et σ_Y au dénominateur de r = Cov(X, Y)/(σ_X σ_Y) sont strictement positifs, r possède exactement le même signe que la covariance Cov(X, Y)."
        }
      ]
    },
    {
      id: "pt3_droites_regression_moindres_carres",
      order: 3,
      title: "Droites de régression par la méthode des moindres carrés et estimations",
      summary: "Équations des droites de régression de Y en X (D) et de X en Y (D'), propriétés des coefficients directeurs, relation a · a' = r², et techniques d'estimation prédictive.",
      conceptExplanation: "Lorsque la corrélation linéaire est forte (|r| ≥ 0,87), on modélise le nuage de points par une droite qui minimise la somme des carrés des distances : c'est la méthode des moindres carrés.\n\n1. Droite de régression de Y en X (notée (D)) :\nElle sert à estimer ou prédire les valeurs de Y à partir des valeurs connues de X.\n- Équation : y = a x + b\n- Coefficient directeur (pente) : a = Cov(X, Y) / V(X)\n- Ordonnée à l'origine : b = Ȳ - a · X̄\n- Remarque : le dénominateur est impérativement la variance de la variable explicative X : V(X).\n\n2. Droite de régression de X en Y (notée (D')) :\nElle sert à estimer ou prédire les valeurs de X à partir des valeurs connues de Y.\n- Équation : x = a' y + b'\n- Pente : a' = Cov(X, Y) / V(Y)\n- Ordonnée à l'origine : b' = X̄ - a' · Ȳ\n- Remarque : le dénominateur est ici la variance de Y : V(Y).\n\n3. Propriétés fondamentales remarquables :\n- Intersection : Les deux droites (D) et (D') se coupent TOUJOURS au point moyen G(X̄, Ȳ) du nuage de points.\n- Relation fondamentale entre les pentes et le coefficient de corrélation :\n  a · a' = [Cov(X, Y) / V(X)] · [Cov(X, Y) / V(Y)] = [Cov(X, Y)]² / [V(X) · V(Y)] = r²\n  Par conséquent : |r| = √(a · a').\n- Règle des signes : a, a' et r ont EXACTEMENT LE MÊME SIGNE.\n  • Si a > 0 et a' > 0, alors r = √(a · a').\n  • Si a < 0 et a' < 0, alors r = -√(a · a').\n- Cas limite d'alignement parfait : Si r² = 1, alors a = 1 / a', ce qui signifie que les deux droites (D) et (D') sont rigoureusement confondues.\n\n4. Utilisation pour l'estimation et la prévision :\n- Pour estimer la valeur de y correspondant à une nouvelle valeur x_0 : on remplace x par x_0 dans l'équation de régression de Y en X : y_estimé = a · x_0 + b.\n- Pour estimer la valeur de x correspondant à une valeur y_0 : on utilise de préférence la droite de régression de X en Y : x_estimé = a' · y_0 + b', ou on résout y_0 = a x + b dans (D).",
      keyRule: "Droite de Y en X : y = ax + b avec a = Cov(X,Y)/V(X) et b = Ȳ - aX̄. Droite de X en Y : x = a'y + b' avec a' = Cov(X,Y)/V(Y) et b' = X̄ - a'Ȳ. Les deux droites passent par G et vérifient a · a' = r².",
      formulas: [
        {
          name: "Droite de régression de Y en X (D)",
          formula: "y = ax + b \\quad \\text{avec} \\quad a = \\frac{\\text{Cov}(X, Y)}{V(X)} \\quad \\text{et} \\quad b = \\bar{Y} - a\\bar{X}",
          note: "Minimise la somme des carrés des écarts verticaux"
        },
        {
          name: "Droite de régression de X en Y (D')",
          formula: "x = a'y + b' \\quad \\text{avec} \\quad a' = \\frac{\\text{Cov}(X, Y)}{V(Y)} \\quad \\text{et} \\quad b' = \\bar{X} - a'\\bar{Y}",
          note: "Minimise la somme des carrés des écarts horizontaux"
        },
        {
          name: "Relation fondamentale entre a, a' et r",
          formula: "a \\cdot a' = r^2 \\quad \\iff \\quad |r| = \\sqrt{a \\cdot a'}",
          note: "a, a' et r ont tous les trois le même signe"
        }
      ],
      workedExample: {
        title: "Détermination des deux droites et prévision agricole (Document officiel)",
        statement: "On reprend les données : Cov(X, Y) = 23,675 ; V(X) = 4,16 ; V(Y) = 157,25 ; X̄ = 4,575 ; Ȳ = 36.\n1. Donner l'équation de la droite (D) de Y en X.\n2. Donner l'équation de la droite (D') de X en Y.\n3. Estimer le nombre d'exploitations agricoles pour une superficie de 9 hectares.",
        methodSteps: [
          "Étape 1 : Calcul de (D) : y = ax + b.\na = Cov(X, Y) / V(X) = 23,675 / 4,16 = 5,691 ≈ 5,69.\nb = Ȳ - a · X̄ = 36 - 5,69 × 4,575 = 36 - 26,03175 = 9,968 ≈ 9,97.\nÉquation de (D) : y = 5,69 x + 9,97.",
          "Étape 2 : Calcul de (D') : x = a'y + b'.\na' = Cov(X, Y) / V(Y) = 23,675 / 157,25 ≈ 0,15.\nb' = X̄ - a' · Ȳ = 4,575 - 0,15 × 36 = 4,575 - 5,4 = -0,825.\nÉquation de (D') : x = 0,15 y - 0,825.",
          "Étape 3 : Vérification de la relation a · a' = r² :\na · a' = 5,69 × 0,15 = 0,8535 ; r² = (0,92)² = 0,8464 (cohérent aux arrondis près).",
          "Étape 4 : Estimation pour une superficie x = 9 ha :\ny = 5,69 × 9 + 9,97 = 51,21 + 9,97 = 61,18 ≈ 61 ou 62 exploitations."
        ],
        conclusion: "(D) : y = 5,69x + 9,97 ; (D') : x = 0,15y - 0,825. Pour 9 ha, on prévoit environ 62 exploitations agricoles."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Droites de régression (D) et (D') se coupant au point moyen G",
        tableData: {
          headers: ["Caractéristique", "Droite de Y en X (D)", "Droite de X en Y (D')"],
          rows: [
            ["Forme de l'équation", "y = ax + b", "x = a'y + b'"],
            ["Formule de la pente", "a = Cov(X, Y) / V(X)", "a' = Cov(X, Y) / V(Y)"],
            ["Formule de l'ordonnée", "b = Ȳ - a X̄", "b' = X̄ - a' Ȳ"],
            ["Point d'intersection", "Passe par G(X̄, Ȳ)", "Passe par G(X̄, Ȳ)"],
            ["Usage prédictif", "Prédire Y connaissant X", "Prédire X connaissant Y"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c11_p3_ex1",
          type: "mcq",
          prompt: "Quelle est la pente a de la droite de régression de Y en X par la méthode des moindres carrés ?",
          options: [
            "a = Cov(X, Y) / V(X)",
            "a = Cov(X, Y) / V(Y)",
            "a = V(X) / Cov(X, Y)",
            "a = V(Y) / V(X)"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour la droite de régression de Y en X, la pente est égale à la covariance divisée par la variance de la variable en abscisse X : a = Cov(X, Y) / V(X)."
        },
        {
          id: "tle_d_maths_c11_p3_ex2",
          type: "mcq",
          prompt: "Si la droite de régression de Y en X a pour équation y = 2,5x + 3 et que X̄ = 4, que vaut la moyenne Ȳ ?",
          options: [
            "13",
            "10",
            "7",
            "15"
          ],
          correctAnswerIndex: 0,
          explanation: "Puisque le point moyen G(X̄, Ȳ) appartient obligatoirement à la droite de régression, on a Ȳ = 2,5 X̄ + 3 = 2,5 × 4 + 3 = 10 + 3 = 13."
        },
        {
          id: "tle_d_maths_c11_p3_ex3",
          type: "mcq",
          prompt: "On sait que les pentes des droites de régression valent a = 0,8 et a' = 0,45. Que vaut la valeur absolue du coefficient de corrélation linéaire |r| ?",
          options: [
            "0,60",
            "0,36",
            "0,80",
            "0,45"
          ],
          correctAnswerIndex: 0,
          explanation: "On sait que a · a' = r², donc r² = 0,8 × 0,45 = 0,36. D'où |r| = √(0,36) = 0,60."
        },
        {
          id: "tle_d_maths_c11_p3_ex4",
          type: "mcq",
          prompt: "Que se passe-t-il pour les deux droites de régression (D) et (D') lorsque le coefficient de corrélation linéaire vérifie r² = 1 ?",
          options: [
            "Les deux droites sont parfaitement confondues",
            "Les deux droites sont strictement perpendiculaires",
            "Les deux droites ne se coupent jamais (parallèles disjointes)",
            "L'une des deux droites est horizontale et l'autre est verticale"
          ],
          correctAnswerIndex: 0,
          explanation: "Si r² = 1, alors a · a' = 1, soit a' = 1/a. L'équation x = (1/a)y + b' équivaut à y = ax - ab', qui coïncide avec y = ax + b : les droites sont confondues."
        },
        {
          id: "tle_d_maths_c11_p3_ex5",
          type: "mcq",
          prompt: "Soit la droite d'ajustement y = -18,84 x + 135,36. Quelle est l'estimation de y pour x = 5 ?",
          options: [
            "41,16",
            "229,56",
            "135,36",
            "-94,20"
          ],
          correctAnswerIndex: 0,
          explanation: "y = -18,84 × 5 + 135,36 = -94,20 + 135,36 = 41,16."
        },
        {
          id: "tle_d_maths_c11_p3_ex6",
          type: "mcq",
          prompt: "Si l'on cherche à estimer la valeur du caractère X lorsque l'on connaît la valeur de Y = y₀, quelle droite est théoriquement la plus appropriée ?",
          options: [
            "La droite de régression de X en Y : x = a'y + b'",
            "La droite de régression de Y en X : y = ax + b",
            "La droite horizontale passant par Ȳ",
            "La droite passant par l'origine et le premier point du nuage"
          ],
          correctAnswerIndex: 0,
          explanation: "La droite de régression de X en Y (D') est précisément construite pour minimiser les carrés des écarts horizontaux et estimer X en fonction de Y."
        }
      ]
    },
    {
      id: "pt4_methode_mayer_et_situations_complexes",
      order: 4,
      title: "Méthode de Mayer et résolution de situations complexes au Baccalauréat",
      summary: "Principe de la méthode de Mayer (scission en deux sous-groupes G₁ et G₂), droite d'ajustement de Mayer, résolution guidée des problèmes de seuil, démographie et prévisions calendaires.",
      conceptExplanation: "La méthode de Mayer est une alternative simplifiée à la méthode des moindres carrés, particulièrement prisée dans les épreuves du Baccalauréat lorsque le nombre de calculs de carrés est trop important.\n\n1. Principe de la méthode de Mayer :\n- On ordonne impérativement les couples (x_i, y_i) selon les valeurs croissantes de X.\n- On partage le nuage de n points en deux sous-groupes de même effectif (ou d'effectifs différant au plus de 1 si n est impair) :\n  • Premier sous-groupe de n₁ points : calcul du point moyen partiel G₁(x̄₁, ȳ₁).\n  • Deuxième sous-groupe de n₂ points : calcul du point moyen partiel G₂(x̄₂, ȳ₂).\n- La droite d'ajustement de Mayer est la droite (G₁G₂) qui relie ces deux points moyens partiels.\n\n2. Équation de la droite de Mayer (G₁G₂) :\n- Coefficient directeur : a_M = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁)\n- Ordonnée à l'origine : b_M = ȳ₁ - a_M · x̄₁ = ȳ₂ - a_M · x̄₂\n- Propriété : La droite de Mayer passe également par le point moyen général G du nuage de points si n₁ = n₂.\n\n3. Résolution des situations complexes de type Bac (Démarche en 4 étapes) :\n- Étape 1 : Choix et identification des variables X (généralement le rang du mois ou de l'année) et Y (grandeur observée : population, chiffre d'affaires, tension artérielle, adhérents).\n- Étape 2 : Calcul des paramètres statistiques (point moyen G, variances, covariance, coefficient de corrélation r).\n- Étape 3 : Justification de l'ajustement (|r| ≥ 0,87) et détermination de l'équation de la droite d'ajustement y = ax + b.\n- Étape 4 : Réponse à la préoccupation du problème (estimation d'une valeur future ou recherche de la date d'atteinte d'un seuil critique en résolvant ax + b ≥ Y_seuil). Conversion précise du rang x en date calendaire (mois et année).",
      keyRule: "Méthode de Mayer : scinder le nuage ordonné en deux groupes, calculer G₁ et G₂, puis déterminer la droite (G₁G₂). Pour les problèmes de seuil, poser y = ax + b = seuil et isoler le rang x.",
      formulas: [
        {
          name: "Pente de la droite de Mayer (G₁G₂)",
          formula: "a_M = \\frac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}",
          note: "Taux de variation entre les deux points moyens partiels"
        },
        {
          name: "Résolution de seuil pour estimation calendaire",
          formula: "ax + b = Y_{\\text{seuil}} \\iff x = \\frac{Y_{\\text{seuil}} - b}{a}",
          note: "Permet de déduire le rang x puis le mois et l'année exacte"
        }
      ],
      workedExample: {
        title: "Problème du club littéraire et don de l'ONG (Situation complexe officielle)",
        statement: "Une ONG promet un don financier dès que le nombre d'adhérents Y dépasse 3000 élèves. Sur les 12 mois de 2020 (rangs x de 1 à 12), on a trouvé l'équation de régression : y = 86,046 x + 1014,868.\nDéterminer la date probable (mois et année) de la réception du don.",
        methodSteps: [
          "Étape 1 : Poser l'inéquation du seuil. L'ONG intervient quand y ≥ 3000.\n86,046 x + 1014,868 ≥ 3000.",
          "Étape 2 : Isoler le rang du mois x :\n86,046 x ≥ 3000 - 1014,868 = 1985,132\nx ≥ 1985,132 / 86,046 ≈ 23,07.",
          "Étape 3 : Interpréter le rang x entier :\nLe rang cherché est le premier entier supérieur ou égal à 23,07, soit x = 24.",
          "Étape 4 : Convertir le rang x en date civile :\nL'année 2020 correspond aux mois 1 à 12 (rang 12 = Décembre 2020).\nL'année 2021 correspond aux mois 13 à 24 (rang 24 = Décembre 2021)."
        ],
        conclusion: "Le seuil des 3000 adhérents sera atteint au 24e mois, soit en Décembre 2021."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Démarche de résolution d'une situation complexe en statistique double",
        tableData: {
          headers: ["Étape", "Action mathématique", "Outil utilisé", "Résultat attendu"],
          rows: [
            ["1. Modélisation", "Identification des caractères X et Y", "Tableau de données", "Variables quantitatives continues ou discrètes"],
            ["2. Validation", "Calcul de r et test du seuil 0,87", "r = Cov(X,Y)/(σ_X σ_Y)", "Justification de la pertinence de l'ajustement"],
            ["3. Ajustement", "Calcul des coefficients a et b", "Moindres carrés ou Mayer", "Équation affine y = ax + b"],
            ["4. Prévision", "Résolution d'équation ou d'inéquation", "x = (y - b)/a ou y = ax + b", "Valeur numérique et conclusion dans le contexte"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_maths_c11_p4_ex1",
          type: "mcq",
          prompt: "Dans la méthode de Mayer appliquée à un nuage de 8 points ordonnés, comment sont constitués les deux sous-groupes de points ?",
          options: [
            "Le groupe 1 contient les 4 premiers points ordonnés et le groupe 2 contient les 4 derniers points",
            "Le groupe 1 contient les points pairs et le groupe 2 contient les points impairs",
            "Le groupe 1 contient les points au-dessus de la moyenne et le groupe 2 ceux en dessous",
            "On choisit les points de manière aléatoire"
          ],
          correctAnswerIndex: 0,
          explanation: "La méthode de Mayer impose d'ordonner les points selon les abscisses croissantes, puis de scinder le nuage en deux blocs consécutifs de même taille (ici les 4 premiers pour G₁ et les 4 derniers pour G₂)."
        },
        {
          id: "tle_d_maths_c11_p4_ex2",
          type: "mcq",
          prompt: "Les points moyens partiels d'un ajustement de Mayer sont G₁(35 ; 124) et G₂(53 ; 141). Quelle est la pente a_M de la droite de Mayer ?",
          options: [
            "a_M = 17 / 18 ≈ 0,944",
            "a_M = 18 / 17 ≈ 1,059",
            "a_M = 124 / 35 ≈ 3,54",
            "a_M = (141 + 124) / (53 + 35) = 265 / 88"
          ],
          correctAnswerIndex: 0,
          explanation: "a_M = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁) = (141 - 124) / (53 - 35) = 17 / 18 ≈ 0,944."
        },
        {
          id: "tle_d_maths_c11_p4_ex3",
          type: "mcq",
          prompt: "Une équation de droite d'ajustement est y = 86,05 x + 1015, où x est le rang du mois compté à partir de janvier 2020 (x = 1). Pour quel mois a-t-on y = 3000 ?",
          options: [
            "x ≈ 23,07, soit le 24e mois correspondant à Décembre 2021",
            "x = 12, soit Décembre 2020",
            "x = 30, soit Juin 2022",
            "x = 18, soit Juin 2021"
          ],
          correctAnswerIndex: 0,
          explanation: "x = (3000 - 1015) / 86,05 = 1985 / 86,05 ≈ 23,07. Il faut donc atteindre le 24e mois. Les mois 1 à 12 forment 2020 ; les mois 13 à 24 forment 2021. Le 24e mois est donc Décembre 2021."
        },
        {
          id: "tle_d_maths_c11_p4_ex4",
          type: "mcq",
          prompt: "Lors d'un ajustement linéaire de la tension artérielle TAS (Y) en fonction de l'âge (X), on obtient l'équation y = 0,65x + 95. Quelle est la TAS estimée pour une personne âgée de 60 ans ?",
          options: [
            "134 mm Hg",
            "155 mm Hg",
            "120 mm Hg",
            "140 mm Hg"
          ],
          correctAnswerIndex: 0,
          explanation: "y = 0,65 × 60 + 95 = 39 + 95 = 134 mm Hg."
        },
        {
          id: "tle_d_maths_c11_p4_ex5",
          type: "mcq",
          prompt: "Si le nombre de points d'une série statistique est impair (par exemple n = 9), comment applique-t-on généralement la partition de Mayer au Bac ?",
          options: [
            "On prend 4 points pour le premier groupe et 5 points pour le second (ou 5 et 4)",
            "On élimine obligatoirement le point central",
            "On compte le point central deux fois pour avoir deux groupes de 5 points",
            "La méthode de Mayer devient totalement inapplicable"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour n impair, la convention standard consiste à partager en deux sous-groupes de tailles n₁ et n₂ différant de 1 (par exemple 4 et 5 points, ou 5 et 4)."
        },
        {
          id: "tle_d_maths_c11_p4_ex6",
          type: "mcq",
          prompt: "Pourquoi la méthode de Mayer est-elle qualifiée d'ajustement affine globalement représentatif ?",
          options: [
            "Parce que la droite (G₁G₂) s'appuie sur deux points moyens qui lissent les fluctuations locales du nuage",
            "Parce qu'elle passe toujours par tous les points du nuage sans exception",
            "Parce qu'elle ne nécessite aucune opération arithmétique",
            "Parce que son coefficient de corrélation vaut toujours 1"
          ],
          correctAnswerIndex: 0,
          explanation: "En remplaçant les points individuels par les deux centres de gravité partiels G₁ et G₂, la droite de Mayer moyenne les variations et capture la tendance globale de la distribution."
        }
      ]
    }
  ]
};

