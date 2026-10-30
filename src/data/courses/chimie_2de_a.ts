// ============================================================================
// MODULE OFFICIEL : CHIMIE 2de A (PHYSIQUE-CHIMIE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
// Thème 3 : La matière et ses transformations
// Leçon 3 : Classification périodique des éléments chimiques
// Leçon 4 : Ions et molécules
// Leçon 5 : Mole et grandeurs molaires
// Règle absolue : Zéro code brut informatique, pédagogie pas-à-pas, 8 questions QCM par mini-leçon
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 3 : CLASSIFICATION PÉRIODIQUE DES ÉLÉMENTS CHIMIQUES
// ============================================================================
export const chimie2deAClassificationPeriodiqueChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch3_classification_periodique',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 3,
  officialVolumeHours: 8,
  title: 'Leçon 3 — Classification périodique des éléments chimiques',
  summary:
    "Description du tableau périodique à double entrée, règles d'édification (numéro atomique Z croissant, couches électroniques, électrons de valence) et étude des grandes familles chimiques (alcalins, alcalino-terreux, halogènes, gaz nobles).",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Présentation et Règles d'Édification du Tableau
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch3_p1',
      order: 1,
      title: "Présentation et règles d'édification du tableau périodique",
      summary:
        "Structure à double entrée (lignes/périodes et colonnes/groupes), rangement par Z croissant et correspondance avec la structure électronique.",
      conceptExplanation:
        "Le tableau de classification périodique regroupe et ordonne l'ensemble des éléments chimiques connus. Conçu à l'origine par Dimitri Mendeleïev en 1869, il permet d'expliquer et de prévoir le comportement chimique de chaque élément.\n\n" +
        "1. Présentation générale du tableau :\n" +
        "Le tableau périodique est un tableau à double entrée constitué de :\n" +
        "- Entrées horizontales appelées périodes ou lignes (le tableau général comporte 7 lignes ; en classe de seconde, nous étudions les 4 premières périodes).\n" +
        "- Entrées verticales appelées groupes ou colonnes (le tableau complet comporte 18 colonnes ; nous nous limitons à 8 colonnes principales).\n\n" +
        "2. Règle d'or 1 : Classement par numéro atomique Z croissant :\n" +
        "Les éléments sont rangés de gauche à droite et de haut en bas par numéro atomique Z croissant. À chaque valeur de Z correspond une case unique. Le numéro atomique Z indique le numéro de la case.\n" +
        "Remarque essentielle : Tous les isotopes d'un même élément chimique possèdent le même Z, ils occupent donc exactement la même case du tableau.\n\n" +
        "3. Règle d'or 2 : Signification des lignes (Périodes) :\n" +
        "Chaque ligne correspond au remplissage d'une même couche électronique :\n" +
        "- 1ère ligne (période 1) : remplissage de la couche K (de 1H : K¹ à 2He : K²).\n" +
        "- 2ème ligne (période 2) : remplissage de la couche L (de 3Li : K²L¹ à 10Ne : K²L⁸).\n" +
        "- 3ème ligne (période 3) : remplissage de la couche M (de 11Na : K²L⁸M¹ à 18Ar : K²L⁸M⁸).\n" +
        "Le numéro de la ligne indique donc le nombre de couches électroniques occupées par l'atome.\n\n" +
        "4. Règle d'or 3 : Signification des colonnes (Groupes) :\n" +
        "Une colonne regroupe des éléments dont les atomes possèdent le même nombre d'électrons sur leur couche externe (couche de valence). Le numéro de la colonne indique le nombre d'électrons sur cette couche externe.",
      formulas: [
        {
          name: "Localisation d'un élément (Ligne et Colonne)",
          formula: "Ligne = Nombre de couches | Colonne = Nombre d'électrons externes",
          note: "Exemple : Carbone C (Z = 6) -> K²L⁴ : 2 couches -> 2ème ligne ; 4 e⁻ externes -> 4ème colonne.",
        },
      ],
      keyRule:
        "Règle d'or MENA : Pour situer un élément dans le tableau, écris d'abord sa formule électronique. Le nombre de couches donne la période (ligne) et le nombre d'électrons sur la dernière couche donne la colonne (groupe).",
      workedExample: {
        title: "Situation d'évaluation officielle : Localiser le Soufre S (Z = 16) et le Chlore Cl (Z = 17)",
        statement: "Écrire la formule électronique du soufre (Z = 16) et du chlore (Z = 17), puis déterminer leur ligne et leur colonne dans le tableau simplifié.",
        methodSteps: [
          "Étape 1 : Pour le soufre S (Z = 16) : répartition des 16 électrons -> K² L⁸ M⁶.",
          "Étape 2 : Couche de valence M (3ème couche occupée) -> 3ème ligne. Il y a 6 électrons externes -> 6ème colonne.",
          "Étape 3 : Pour le chlore Cl (Z = 17) : répartition des 17 électrons -> K² L⁸ M⁷.",
          "Étape 4 : Couche de valence M (3 couches) -> 3ème ligne. Il y a 7 électrons externes -> 7ème colonne.",
        ],
        conclusion: "S est situé à la 3ème ligne, 6ème colonne. Cl est situé à la 3ème ligne, 7ème colonne.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch3_p1_ex1',
          type: 'mcq',
          prompt: "Dans le tableau de classification périodique, comment sont classés les éléments chimiques ?",
          options: [
            "Par numéro atomique Z croissant",
            "Par masse molaire décroissante",
            "Par ordre alphabétique de leurs symboles",
            "Par nombre de neutrons décroissant",
          ],
          correctAnswerIndex: 0,
          explanation: "Les éléments sont rigoureusement classés par numéro atomique Z croissant (de Z = 1 pour l'hydrogène jusqu'à Z = 118).",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex2',
          type: 'mcq',
          prompt: "Que représente une ligne (ou période) dans le tableau de classification périodique ?",
          options: [
            "Le remplissage d'une même couche électronique",
            "Le nombre total de neutrons dans le noyau",
            "Le nombre d'électrons célibataires uniquement",
            "La masse volumique du métal à l'état solide",
          ],
          correctAnswerIndex: 0,
          explanation: "Chaque ligne correspond au remplissage d'une même couche électronique (K pour la 1ère ligne, L pour la 2ème, M pour la 3ème).",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex3',
          type: 'mcq',
          prompt: "L'atome de magnésium possède Z = 12. Sa formule électronique est K²L⁸M². Quelle est sa position dans le tableau ?",
          options: [
            "3ème ligne et 2ème colonne",
            "2ème ligne et 3ème colonne",
            "12ème ligne et 2ème colonne",
            "3ème ligne et 8ème colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "3 couches occupées (K, L, M) -> 3ème ligne. 2 électrons sur la couche externe M -> 2ème colonne.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex4',
          type: 'mcq',
          prompt: "Tous les isotopes d'un même élément chimique possèdent le même numéro atomique Z. Dans quelle case se trouvent-ils ?",
          options: [
            "Dans la même case du tableau",
            "Dans des colonnes différentes",
            "Dans des lignes consécutives",
            "En dehors du tableau périodique",
          ],
          correctAnswerIndex: 0,
          explanation: "Tous les isotopes d'un élément ont le même numéro atomique Z, donc ils occupent exactement la même case.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex5',
          type: 'mcq',
          prompt: "L'atome d'azote a pour numéro atomique Z = 7 (formule électronique K²L⁵). À quelle colonne appartient-il ?",
          options: [
            "5ème colonne",
            "2ème colonne",
            "7ème colonne",
            "3ème colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "La couche externe L contient 5 électrons, l'azote appartient donc à la 5ème colonne.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex6',
          type: 'mcq',
          prompt: "Que partagent tous les atomes des éléments situés dans une même colonne du tableau ?",
          options: [
            "Le même nombre d'électrons sur leur couche externe",
            "Le même nombre total de protons dans le noyau",
            "La même masse atomique exacte",
            "Le même nombre de couches électroniques occupées",
          ],
          correctAnswerIndex: 0,
          explanation: "Une colonne rassemble les atomes ayant le même nombre d'électrons sur leur couche de valence, ce qui leur donne des propriétés chimiques analogues.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex7',
          type: 'mcq',
          prompt: "L'atome de carbone a pour numéro atomique Z = 6 (K²L⁴). Dans quelle ligne et quelle colonne se trouve-t-il ?",
          options: [
            "2ème ligne et 4ème colonne",
            "4ème ligne et 2ème colonne",
            "1ère ligne et 6ème colonne",
            "6ème ligne et 4ème colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "2 couches électroniques (K et L) -> 2ème ligne. 4 électrons sur la couche externe L -> 4ème colonne.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex8',
          type: 'mcq',
          prompt: "Quel scientifique russe a publié en 1869 la première classification périodique en prévoyant des cases vides pour les éléments inconnus ?",
          options: [
            "Dimitri Mendeleïev",
            "Antoine Lavoisier",
            "Ernest Rutherford",
            "John Dalton",
          ],
          correctAnswerIndex: 0,
          explanation: "Dimitri Mendeleïev a classé les 63 éléments connus en 1869 et a eu le génie de prédire l'existence et les propriétés d'éléments encore inconnus à son époque (comme le gallium et le germanium).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Familles Chimiques : Métaux Alcalins et Alcalino-Terreux
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch3_p2',
      order: 2,
      title: "Familles des métaux alcalins et des métaux alcalino-terreux",
      summary:
        "Éléments des colonnes 1 et 2, propriétés physiques et chimiques, réactivité avec l'eau et formation de cations.",
      conceptExplanation:
        "Une famille chimique est constituée de l'ensemble des éléments appartenant à une même colonne du tableau périodique. Ayant le même nombre d'électrons de valence, ils possèdent des propriétés chimiques très proches.\n\n" +
        "1. La famille des métaux alcalins (1ère colonne, sauf l'hydrogène) :\n" +
        "- Éléments constitutifs : Lithium (3Li : K²L¹), Sodium (11Na : K²L⁸M¹), Potassium (19K : K²L⁸M⁸N¹), Rubidium (Rb), Césium (Cs).\n" +
        "- Structure : Ils possèdent tous 1 seul électron sur leur couche externe.\n" +
        "- Propriétés physiques : Ce sont des métaux mous (qui se coupent facilement au couteau), brillants à la coupe fraîche et peu denses.\n" +
        "- Propriétés chimiques remarquables :\n" +
        "  * Ils s'oxydent très rapidement au contact de l'air (ils ternissent immédiatement et doivent être conservés sous huile minérale ou pétrole).\n" +
        "  * Ils réagissent violemment avec l'eau à froid pour former une solution basique forte d'hydroxyde et un dégagement de dihydrogène inflammable H₂ :\n" +
        "    2 Na + 2 H₂O -> 2 (Na⁺ + OH⁻) + H₂\n" +
        "  * Ils ont tendance à perdre facilement leur unique électron de valence pour donner des cations stables de charge +e (Li⁺, Na⁺, K⁺).\n\n" +
        "2. La famille des métaux alcalino-terreux (2ème colonne) :\n" +
        "- Éléments constitutifs : Béryllium (4Be : K²L²), Magnésium (12Mg : K²L⁸M²), Calcium (20Ca : K²L⁸M⁸N²), Strontium (Sr), Baryum (Ba).\n" +
        "- Structure : Ils possèdent tous 2 électrons sur leur couche externe.\n" +
        "- Propriétés : Ce sont des métaux réactifs, de propriétés chimiques très voisines de celles des alcalins.\n" +
        "- Réaction avec l'oxygène : Ils s'oxydent à chaud en donnant des oxydes réfractaires (qui résistent à des températures très élevées, comme la magnésie MgO ou la chaux vive CaO).\n" +
        "- Formation d'ions : Ils perdent leurs 2 électrons de valence pour former des cations dipositifs stables (Be²⁺, Mg²⁺, Ca²⁺).",
      formulas: [
        {
          name: "Formation des cations alcalins",
          formula: "M -> M⁺ + 1 e⁻  (ex : Na -> Na⁺ + e⁻)",
          note: "Perte d'un électron pour saturer la couche sous-jacente.",
        },
        {
          name: "Formation des cations alcalino-terreux",
          formula: "M -> M²⁺ + 2 e⁻  (ex : Ca -> Ca²⁺ + 2 e⁻)",
          note: "Perte de 2 électrons de valence.",
        },
      ],
      keyRule:
        "Point clé à retenir : L'hydrogène (H) est situé au-dessus de la 1ère colonne en raison de son électron unique, mais CE N'EST PAS un métal alcalin ! C'est un non-métal gazeux.",
      workedExample: {
        title: "Identification officielle : L'élément dans la case 11",
        statement: "Un élément X est situé dans la case 11 du tableau. Déterminer son nom, sa famille et sa réaction avec l'eau.",
        methodSteps: [
          "Étape 1 : Case 11 signifie numéro atomique Z = 11.",
          "Étape 2 : Répartition électronique : K²L⁸M¹.",
          "Étape 3 : 1 électron externe -> 1ère colonne. Il s'agit du sodium (Na), métal alcalin.",
          "Étape 4 : Réaction avec l'eau : le sodium réagit vigoureusement avec l'eau pour produire une base forte (soude NaOH) et du dihydrogène H₂ gazeux.",
        ],
        conclusion: "X est le sodium (Na), appartenant à la famille des métaux alcalins.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch3_p2_ex1',
          type: 'mcq',
          prompt: "Quels sont les éléments qui constituent la famille des métaux alcalins ?",
          options: [
            "Les éléments de la 1ère colonne, à l'exception de l'hydrogène",
            "Tous les éléments de la 2ème colonne uniquement",
            "Les éléments de la 7ème colonne",
            "L'ensemble des gaz de la dernière colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "La famille des métaux alcalins comprend Li, Na, K, Rb, Cs de la 1ère colonne, à l'exclusion de l'hydrogène qui est un gaz.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex2',
          type: 'mcq',
          prompt: "Combien d'électrons possèdent les métaux alcalins sur leur couche externe ?",
          options: [
            "1 seul électron",
            "2 électrons",
            "7 électrons",
            "8 électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Étant situés dans la 1ère colonne, les métaux alcalins ont exactement 1 électron sur leur couche externe.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex3',
          type: 'mcq',
          prompt: "Quel ion stable donne spontanément le sodium Na (Z = 11) lors d'une réaction chimique ?",
          options: [
            "L'ion Na⁺ (cation monovalent)",
            "L'ion Na²⁺ (cation divalent)",
            "L'ion Na⁻ (anion)",
            "L'ion Na³⁺",
          ],
          correctAnswerIndex: 0,
          explanation: "Le sodium (K²L⁸M¹) perd son unique électron externe M¹ pour acquérir la structure stable en octet du néon (K²L⁸), formant l'ion Na⁺.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex4',
          type: 'mcq',
          prompt: "Comment se nomme la famille des éléments de la deuxième colonne du tableau périodique ?",
          options: [
            "Les métaux alcalino-terreux",
            "Les métaux alcalins",
            "Les halogènes",
            "Les gaz rares",
          ],
          correctAnswerIndex: 0,
          explanation: "La 2ème colonne constitue la famille des métaux alcalino-terreux (Béryllium, Magnésium, Calcium, Strontium, Baryum).",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex5',
          type: 'mcq',
          prompt: "Que se passe-t-il lorsqu'on dépose un morceau de sodium métallique dans un cristallisoir rempli d'eau ?",
          options: [
            "Une réaction très violente avec dégagement de dihydrogène H₂ et formation d'une base forte",
            "Aucune réaction car le sodium est chimiquement inerte",
            "Le sodium coule au fond de l'eau sans aucune modification",
            "Il se dégage du dioxygène O₂ pur sans dégagement de chaleur",
          ],
          correctAnswerIndex: 0,
          explanation: "Les métaux alcalins réagissent très violemment avec l'eau pour former une solution d'hydroxyde (base forte) et du dihydrogène H₂ gazeux.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex6',
          type: 'mcq',
          prompt: "Le calcium Ca a pour numéro atomique Z = 20 (formule K²L⁸M⁸N²). À quelle famille appartient-il et quel ion forme-t-il ?",
          options: [
            "Métaux alcalino-terreux, formant l'ion Ca²⁺",
            "Métaux alcalins, formant l'ion Ca⁺",
            "Halogènes, formant l'ion Ca⁻",
            "Gaz rares, formant un ion stable",
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 2 électrons de valence (N²), le calcium appartient aux alcalino-terreux et perd 2 électrons pour donner le cation Ca²⁺.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex7',
          type: 'mcq',
          prompt: "Pourquoi conserve-t-on le sodium et le potassium sous du pétrole ou de l'huile minérale en laboratoire ?",
          options: [
            "Pour éviter leur oxydation instantanée au contact de l'oxygène et de l'humidité de l'air",
            "Pour augmenter leur masse atomique avant utilisation",
            "Pour dissoudre le métal avant les travaux pratiques",
            "Pour changer leur couleur métallique grise",
          ],
          correctAnswerIndex: 0,
          explanation: "Les métaux alcalins s'oxydent extrêmement rapidement à l'air et réagissent avec l'humidité ambiante ; le pétrole les isole de l'air.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex8',
          type: 'mcq',
          prompt: "Parmi les éléments suivants, lequel N'EST PAS un métal alcalino-terreux ?",
          options: [
            "Le potassium (K)",
            "Le magnésium (Mg)",
            "Le calcium (Ca)",
            "Le béryllium (Be)",
          ],
          correctAnswerIndex: 0,
          explanation: "Le potassium (K, Z = 19) appartient à la 1ère colonne, c'est donc un métal alcalin et non un alcalino-terreux.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Halogènes et Gaz Rares (Gaz Nobles)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch3_p3',
      order: 3,
      title: "Familles des halogènes et des gaz rares (gaz nobles)",
      summary:
        "Éléments des colonnes 7 et 8, molécules diatomiques, caractère oxydant, règle de l'octet et inertie chimique des gaz nobles.",
      conceptExplanation:
        "Les deux dernières colonnes du tableau périodique simplifié regroupent des éléments aux propriétés remarquables et opposées.\n\n" +
        "1. La famille des halogènes (7ème colonne, avant-dernière colonne) :\n" +
        "- Éléments constitutifs : Fluor (9F : K²L⁷), Chlore (17Cl : K²L⁸M⁷), Brome (Br), Iode (I).\n" +
        "- Structure électronique : Ils possèdent tous 7 électrons sur leur couche externe.\n" +
        "- Propriétés fondamentales :\n" +
        "  * Ils existent à l'état naturel sous la forme de corps simples diatomiques : difluor F₂ (gaz jaune pâle), dichlore Cl₂ (gaz verdâtre suffocant), dibrome Br₂ (liquide rouge brun) et diiode I₂ (solide violet foncé).\n" +
        "  * Fort caractère oxydant : pour saturer leur couche externe à 8 électrons (octet), ils ont une forte tendance à capter 1 électron pour former des anions halogénures stables de charge -e : F⁻ (fluorure), Cl⁻ (chlorure), Br⁻ (bromure), I⁻ (iodure).\n" +
        "  * Ils réagissent vivement avec les métaux pour former des halogénures métalliques (ex : 2 Na + Cl₂ -> 2 NaCl, le chlorure de sodium ou sel de cuisine).\n\n" +
        "2. La famille des gaz rares ou gaz nobles (8ème colonne, dernière colonne) :\n" +
        "- Éléments constitutifs : Hélium (2He : K²), Néon (10Ne : K²L⁸), Argon (18Ar : K²L⁸M⁸), Krypton (Kr), Xénon (Xe).\n" +
        "- Structure électronique : Leur couche externe est complètement saturée avec 8 électrons (règle de l'octet), sauf l'hélium qui est saturé avec 2 électrons sur sa couche K (règle du duet).\n" +
        "- Propriétés remarquables :\n" +
        "  * Ils existent à l'état naturel sous forme de corps simples monoatomiques gazeux (He, Ne, Ar gazeux isolés).\n" +
        "  * Ils sont caractérisés par une absence quasi-totale de réactivité chimique : on parle d'inertie chimique.\n" +
        "  * C'est cette remarquable stabilité électronique que tous les autres atomes cherchent à atteindre en formant des liaisons ou des ions !",
      formulas: [
        {
          name: "Formation de l'anion halogénure",
          formula: "X + 1 e⁻ -> X⁻  (ex : Cl + e⁻ -> Cl⁻)",
          note: "Gain d'un électron pour compléter l'octet.",
        },
      ],
      keyRule:
        "Vocabulaire officiel MENA : 'Halogène' signifie étymologiquement 'générateur de sel'. 'Gaz noble' ou 'gaz rare' traduit l'inertie chimique liée à une couche de valence saturée d'un octet d'électrons.",
      workedExample: {
        title: "Situation d'évaluation officielle : L'élément dans le dentifrice (Z = 9)",
        statement: "Le principe actif de certains dentifrices contient un élément X de numéro atomique Z = 9. Déterminer sa formule électronique, sa position, son nom et sa famille.",
        methodSteps: [
          "Étape 1 : Formule électronique pour Z = 9 : K²L⁷.",
          "Étape 2 : Position : 2 couches (K et L) -> 2ème ligne ; 7 électrons externes -> 7ème colonne.",
          "Étape 3 : Nom et symbole : Z = 9 correspond au Fluor (F).",
          "Étape 4 : Famille : 7ème colonne -> Famille des halogènes. Corps simple : F₂.",
        ],
        conclusion: "L'élément est le fluor (F), de la famille des halogènes.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch3_p3_ex1',
          type: 'mcq',
          prompt: "Combien d'électrons possèdent les atomes d'halogènes sur leur couche externe ?",
          options: [
            "7 électrons",
            "1 électron",
            "2 électrons",
            "8 électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Les halogènes appartiennent à la 7ème colonne et possèdent donc 7 électrons sur leur couche de valence.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex2',
          type: 'mcq',
          prompt: "Sous quelle forme les corps simples halogènes existent-ils à l'état naturel ?",
          options: [
            "Sous forme de molécules diatomiques (F₂, Cl₂, Br₂, I₂)",
            "Sous forme de gaz monoatomiques isolés",
            "Sous forme de cristaux métalliques conducteurs",
            "Uniquement sous forme de liquides aqueux",
          ],
          correctAnswerIndex: 0,
          explanation: "Les halogènes s'associent par paires pour former des molécules diatomiques stables comme le difluor F₂ ou le dichlore Cl₂.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex3',
          type: 'mcq',
          prompt: "Quel ion stable forme l'atome de chlore Cl (Z = 17) pour respecter la règle de l'octet ?",
          options: [
            "L'ion chlorure Cl⁻ (par gain d'un électron)",
            "L'ion Cl⁺ (par perte d'un électron)",
            "L'ion Cl²⁻ (par gain de deux électrons)",
            "L'ion Cl⁷⁺",
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 7 électrons externes (K²L⁸M⁷), le chlore gagne 1 électron pour acquérir la structure K²L⁸M⁸ de l'argon, formant l'anion chlorure Cl⁻.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex4',
          type: 'mcq',
          prompt: "Quelle est la caractéristique fondamentale des gaz rares (ou gaz nobles) de la 8ème colonne ?",
          options: [
            "Une inertie chimique quasi-totale en raison de leur couche externe saturée",
            "Une très forte réactivité explosive au contact de l'eau",
            "Une tendance marquée à céder tous leurs électrons",
            "Un fort caractère oxydant similaire aux halogènes",
          ],
          correctAnswerIndex: 0,
          explanation: "Ayant leur couche externe saturée (2 électrons pour He, 8 pour Ne et Ar), les gaz nobles ne réagissent pratiquement pas : on parle d'inertie chimique.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex5',
          type: 'mcq',
          prompt: "L'hélium He a pour numéro atomique Z = 2 (couche K²). Pourquoi est-il classé dans la colonne des gaz rares et non avec les métaux alcalino-terreux ?",
          options: [
            "Parce que sa couche externe K est saturée (duet) et qu'il possède une inertie chimique identique à celle des gaz nobles",
            "Parce qu'il est solide à température ordinaire",
            "Parce qu'il réagit violemment avec les halogènes",
            "Parce qu'il perd deux électrons pour former un ion dipositif",
          ],
          correctAnswerIndex: 0,
          explanation: "Bien qu'il n'ait que 2 électrons, sa seule couche K est totalement saturée. L'hélium est un gaz inerte monoatomique, chimiquement semblable au néon et à l'argon.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex6',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du sel de cuisine formé par la réaction du sodium avec le dichlore ?",
          options: [
            "NaCl (chlorure de sodium)",
            "Na₂Cl",
            "NaCl₂",
            "Na₂Cl₃",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion Na⁺ et l'ion Cl⁻ s'associent dans un rapport 1:1 pour assurer l'électroneutralité : NaCl (chlorure de sodium).",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex7',
          type: 'mcq',
          prompt: "Sous quelle forme les gaz rares existent-ils dans les conditions habituelles ?",
          options: [
            "Corps simples monoatomiques gazeux (He, Ne, Ar)",
            "Molécules diatomiques gazeuses",
            "Molécules tétraédriques complexes",
            "Liquides hautement volatils",
          ],
          correctAnswerIndex: 0,
          explanation: "Grâce à leur stabilité propre, les atomes de gaz rares ne s'associent pas entre eux et existent à l'état de gaz monoatomiques.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex8',
          type: 'mcq',
          prompt: "L'élément argon Ar a pour numéro atomique Z = 18. Quelle est sa formule électronique ?",
          options: [
            "K² L⁸ M⁸",
            "K² L⁷ M⁹",
            "K² L¹⁰ M⁶",
            "K² L⁸ M⁷ N¹",
          ],
          correctAnswerIndex: 0,
          explanation: "Pour Z = 18 : 2 électrons sur K, 8 sur L, et 8 sur M -> K² L⁸ M⁸ (octet complet).",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 4 : IONS ET MOLÉCULES
// ============================================================================
export const chimie2deAIonsEtMoleculesChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch4_ions_et_molecules',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 4,
  officialVolumeHours: 10,
  title: 'Leçon 4 — Ions et molécules',
  summary:
    "Règles de l'octet et du duet, formation des cations et anions monoatomiques et polyatomiques, électroneutralité des composés ioniques, liaisons de covalence, représentation de Lewis et géométrie des molécules.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Règle de l'Octet et Formation des Ions Monoatomiques
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch4_p1',
      order: 1,
      title: "Règle de l'octet, règle du duet et ions monoatomiques",
      summary:
        "Évolution chimique des atomes vers la stabilité des gaz rares, perte ou gain d'électrons, écriture des demi-équations ioniques.",
      conceptExplanation:
        "Pourquoi les atomes réagissent-ils ? Les gaz rares (He, Ne, Ar) sont naturellement stables grâce à leur couche externe saturée. Tous les autres atomes cherchent à acquérir cette même stabilité au cours des réactions chimiques.\n\n" +
        "1. Énoncé de la règle de l'octet et du duet :\n" +
        "- Règle de l'octet : Au cours des transformations chimiques, les atomes ont tendance à acquérir la structure électronique stable du gaz noble le plus proche, avec 8 électrons sur leur couche externe (structure en octet).\n" +
        "- Règle du duet : Pour les atomes légers proches de l'hélium (Hydrogène H, Lithium Li, Béryllium Be, Bore B), ils ont tendance à acquérir 2 électrons sur leur couche K (structure en duet).\n" +
        "Attention : Le passage d'un atome à son ion ne modifie JAMAIS son noyau (Z reste inchangé). Seul le cortège électronique externe est modifié !\n\n" +
        "2. Définition d'un ion :\n" +
        "Un ion est un édifice chargé formé à partir d'un ou plusieurs atomes ayant perdu ou gagné un ou plusieurs électrons.\n" +
        "- Cation : ion chargé positivement (perte d'électrons).\n" +
        "- Anion : ion chargé négativement (gain d'électrons).\n\n" +
        "3. Cations monoatomiques (Perte d'électrons) :\n" +
        "Équation générale : X -> Xⁿ⁺ + n e⁻  (avec n le nombre d'électrons cédés).\n" +
        "- 1ère colonne (alcalins) : perte de 1 e⁻ -> Li⁺, Na⁺, K⁺.\n" +
        "  Exemple : Sodium Na (Z = 11, K²L⁸M¹) -> Na⁺ (K²L⁸) + 1 e⁻.\n" +
        "- 2ème colonne (alcalino-terreux) : perte de 2 e⁻ -> Be²⁺, Mg²⁺, Ca²⁺.\n" +
        "  Exemple : Calcium Ca (Z = 20, K²L⁸M⁸N²) -> Ca²⁺ (K²L⁸M⁸) + 2 e⁻.\n" +
        "- 3ème colonne : Aluminium Al (Z = 13, K²L⁸M³) -> Al³⁺ (K²L⁸) + 3 e⁻.\n" +
        "- Métaux de transition usuels : Cu²⁺ (cuivre II), Fe²⁺ (fer II), Fe³⁺ (fer III), Zn²⁺ (zinc).\n\n" +
        "4. Anions monoatomiques (Gain d'électrons) :\n" +
        "Équation générale : X + n e⁻ -> Xⁿ⁻  (avec n le nombre d'électrons captés).\n" +
        "- 7ème colonne (halogènes) : gain de 1 e⁻ -> F⁻ (fluorure), Cl⁻ (chlorure).\n" +
        "  Exemple : Cl (Z = 17, K²L⁸M⁷) + 1 e⁻ -> Cl⁻ (K²L⁸M⁸).\n" +
        "- 6ème colonne : Oxygène O (Z = 8, K²L⁶) + 2 e⁻ -> O²⁻ (ion oxyde, K²L⁸).\n" +
        "  Soufre S (Z = 16, K²L⁸M⁶) + 2 e⁻ -> S²⁻ (ion sulfure, K²L⁸M⁸).",
      formulas: [
        {
          name: "Formation d'un cation monoatomique",
          formula: "X -> Xⁿ⁺ + n e⁻",
          note: "Perte de n électrons (n = 1 pour Na⁺, n = 2 pour Ca²⁺, n = 3 pour Al³⁺).",
        },
        {
          name: "Formation d'un anion monoatomique",
          formula: "X + n e⁻ -> Xⁿ⁻",
          note: "Gain de n électrons (n = 1 pour Cl⁻, n = 2 pour O²⁻).",
        },
      ],
      keyRule:
        "Règle mnémotechnique : Cation = Positif (a perdu des e⁻ chargés négativement). Anion = Négatif (a gagné des e⁻ chargés négativement). Le nombre de protons dans le noyau reste STRICTEMENT le même !",
      workedExample: {
        title: "Calcul du nombre d'électrons dans les ions monoatomiques",
        statement: "On donne Z(Cl) = 17 et Z(Fe) = 26. Déterminer le nombre d'électrons présents dans l'ion Cl⁻ et dans l'ion Fe³⁺.",
        methodSteps: [
          "Étape 1 : Pour l'atome neutre de chlore, le nombre d'électrons est Z = 17.",
          "Étape 2 : L'ion chlorure Cl⁻ porte une charge négative supplémentaire (-1e) -> gain de 1 électron : 17 + 1 = 18 électrons.",
          "Étape 3 : Pour l'atome neutre de fer, le nombre d'électrons est Z = 26.",
          "Étape 4 : L'ion fer III Fe³⁺ porte 3 charges positives (+3e) -> perte de 3 électrons : 26 − 3 = 23 électrons.",
        ],
        conclusion: "L'ion Cl⁻ possède 18 électrons ; l'ion Fe³⁺ possède 23 électrons.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch4_p1_ex1',
          type: 'mcq',
          prompt: "Quel est l'énoncé exact de la règle de l'octet pour les atomes au cours des réactions chimiques ?",
          options: [
            "Les atomes ont tendance à acquérir la structure stable à 8 électrons sur leur couche externe",
            "Les atomes doivent toujours posséder 8 couches électroniques",
            "Les atomes doivent avoir 8 protons dans leur noyau",
            "Les atomes perdent toujours 8 électrons pour devenir stables",
          ],
          correctAnswerIndex: 0,
          explanation: "La règle de l'octet stipule que les atomes cherchent à s'entourer de 8 électrons sur leur couche de valence, à l'image du gaz noble le plus proche.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex2',
          type: 'mcq',
          prompt: "Lorsqu'un atome neutre se transforme en cation, que subit son cortège électronique ?",
          options: [
            "Il perd un ou plusieurs électrons",
            "Il gagne un ou plusieurs électrons",
            "Il gagne des protons dans son noyau",
            "Il perd des neutrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Un cation est un ion chargé positivement résultant de la perte d'un ou plusieurs électrons négatifs.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex3',
          type: 'mcq',
          prompt: "L'atome d'aluminium a pour numéro atomique Z = 13 (K²L⁸M³). Quel ion stable forme-t-il ?",
          options: [
            "Al³⁺ (perte des 3 électrons de la couche M)",
            "Al³⁻ (gain de 3 électrons)",
            "Al⁺ (perte de 1 électron)",
            "Al⁴⁺",
          ],
          correctAnswerIndex: 0,
          explanation: "L'aluminium cède ses 3 électrons de valence M³ pour acquérir la structure stable K²L⁸ du néon : ion Al³⁺.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex4',
          type: 'mcq',
          prompt: "Combien d'électrons possède l'ion oxyde O²⁻ sachant que le numéro atomique de l'oxygène est Z = 8 ?",
          options: [
            "10 électrons (8 + 2)",
            "6 électrons (8 − 2)",
            "8 électrons",
            "12 électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "L'atome neutre possède 8 électrons. La charge 2− signifie qu'il a capté 2 électrons supplémentaires : 8 + 2 = 10 électrons (formule K²L⁸).",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex5',
          type: 'mcq',
          prompt: "L'atome de magnésium Mg (Z = 12) donne l'ion Mg²⁺. Quelle est la formule électronique de cet ion ?",
          options: [
            "K² L⁸",
            "K² L⁸ M²",
            "K² L⁶",
            "K² L⁸ M⁴",
          ],
          correctAnswerIndex: 0,
          explanation: "En perdant ses 2 électrons de valence M², le magnésium conserve 10 électrons : structure K²L⁸.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex6',
          type: 'mcq',
          prompt: "Qu'advient-il du noyau de l'atome lors de la formation d'un ion ?",
          options: [
            "Le noyau reste rigoureusement inchangé (même nombre de protons Z et de neutrons)",
            "Le noyau perd des protons pour devenir négatif",
            "Le noyau gagne des protons pour devenir positif",
            "Le noyau explose sous l'effet de la charge",
          ],
          correctAnswerIndex: 0,
          explanation: "Les transformations chimiques ne touchent que le cortège électronique externe ; la composition du noyau (Z protons et N neutrons) reste strictement intacte.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex7',
          type: 'mcq',
          prompt: "Quel gaz noble possède la même structure électronique que l'ion sodium Na⁺ et l'ion fluorure F⁻ ?",
          options: [
            "Le néon (Ne, Z = 10)",
            "L'hélium (He, Z = 2)",
            "L'argon (Ar, Z = 18)",
            "Le krypton (Kr, Z = 36)",
          ],
          correctAnswerIndex: 0,
          explanation: "Na⁺ (11 − 1 = 10 e⁻) et F⁻ (9 + 1 = 10 e⁻) possèdent tous deux 10 électrons, soit la structure K²L⁸ du néon Ne.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex8',
          type: 'mcq',
          prompt: "Pour quels atomes légers la règle du duet s'applique-t-elle principalement ?",
          options: [
            "L'hydrogène (H), le lithium (Li), le béryllium (Be) et le bore (B)",
            "Le fer, le cuivre et le zinc",
            "Le chlore, le brome et l'iode",
            "Le carbone, l'azote et l'oxygène uniquement",
          ],
          correctAnswerIndex: 0,
          explanation: "Les éléments les plus légers ont pour gaz noble le plus proche l'hélium (Z = 2), et cherchent donc à acquérir 2 électrons sur leur couche K (règle du duet).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Ions Polyatomiques et Composés Ioniques
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch4_p2',
      order: 2,
      title: "Ions polyatomiques et électroneutralité des composés ioniques",
      summary:
        "Identification et nomenclature des ions polyatomiques, principe d'électroneutralité et écriture des formules statistiques.",
      conceptExplanation:
        "Dans la nature, les ions ne restent pas isolés : ils s'assemblent pour former des cristaux et composés ioniques solides parfaitement neutres.\n\n" +
        "1. Les ions polyatomiques :\n" +
        "Un ion polyatomique est un groupe d'atomes liés entre eux présentant un déficit ou un excédent d'électrons :\n" +
        "- Cations polyatomiques essentiels à connaître :\n" +
        "  * Ion ammonium : NH₄⁺\n" +
        "  * Ion hydronium (ou oxonium) : H₃O⁺\n" +
        "- Anions polyatomiques majeurs au programme :\n" +
        "  * Ion hydroxyde : OH⁻\n" +
        "  * Ion nitrate : NO₃⁻\n" +
        "  * Ion sulfate : SO₄²⁻\n" +
        "  * Ion carbonate : CO₃²⁻\n" +
        "  * Ion permanganate : MnO₄⁻\n\n" +
        "2. Définition d'un composé ionique :\n" +
        "Un composé ionique solide est formé par l'association ordonnée d'un seul type de cation et d'un seul type d'anion.\n" +
        "Propriété fondamentale : Un composé ionique est GLOBALEMENT NEUTRE du point de vue électrique. Il contient autant de charges positives élémentaires que de charges négatives élémentaires.\n\n" +
        "3. Règle d'écriture de la formule statistique :\n" +
        "La formule statistique traduit la proportion minimale de cations et d'anions assurant la neutralité électrique :\n" +
        "- Cas 1 : Charges opposées identiques (+1 et −1, ou +2 et −2) -> proportion 1:1.\n" +
        "  * Na⁺ et Cl⁻ -> NaCl (chlorure de sodium)\n" +
        "  * Cu²⁺ et SO₄²⁻ -> CuSO₄ (sulfate de cuivre)\n" +
        "- Cas 2 : Charges différentes (+2 et −1, ou +1 et −2) :\n" +
        "  * Fe²⁺ et Cl⁻ -> il faut 2 ions Cl⁻ pour neutraliser 1 ion Fe²⁺ -> FeCl₂ (chlorure de fer II).\n" +
        "  * Na⁺ et CO₃²⁻ -> il faut 2 ions Na⁺ pour 1 ion CO₃²⁻ -> Na₂CO₃ (carbonate de sodium).\n" +
        "- Cas 3 : Charges croisées (+3 et −1, ou +3 et −2) :\n" +
        "  * Al³⁺ et F⁻ -> AlF₃ (fluorure d'aluminium).\n" +
        "  * Fe³⁺ et O²⁻ -> 2 × (+3) + 3 × (−2) = 0 -> Fe₂O₃ (trioxyde de difer / oxyde de fer III).\n" +
        "  * NH₄⁺ et SO₄²⁻ -> (NH₄)₂SO₄ (sulfate d'ammonium). On utilise des parenthèses lorsqu'un ion polyatomique est présent en plusieurs exemplaires.",
      formulas: [
        {
          name: "Règle d'électroneutralité",
          formula: "p · (+q_cation) + q · (−q_anion) = 0",
          note: "Exemple pour Fe³⁺ et O²⁻ : 2 · (+3) + 3 · (−2) = +6 − 6 = 0 -> Fe₂O₃.",
        },
      ],
      keyRule:
        "Règle d'or : Dans une formule statistique de composé solide (ex: NaCl, CuSO₄, AlF₃), on n'écrit JAMAIS les charges électriques apparentes (+ ou −) ! La formule statistique représente un solide globalement neutre.",
      workedExample: {
        title: "Écriture de la formule statistique du sulfate d'ammonium",
        statement: "On dispose de l'ion ammonium NH₄⁺ et de l'ion sulfate SO₄²⁻. Écrire la formule statistique du solide ionique formé.",
        methodSteps: [
          "Étape 1 : Identifier la charge du cation : NH₄⁺ porte une charge positive (+1).",
          "Étape 2 : Identifier la charge de l'anion : SO₄²⁻ porte deux charges négatives (−2).",
          "Étape 3 : Équilibrer les charges : il faut 2 cations NH₄⁺ pour neutraliser 1 anion SO₄²⁻ : 2 × (+1) + 1 × (−2) = 0.",
          "Étape 4 : Mettre l'ion polyatomique entre parenthèses avec l'indice 2 : (NH₄)₂SO₄.",
        ],
        conclusion: "La formule statistique est (NH₄)₂SO₄ (sulfate d'ammonium).",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch4_p2_ex1',
          type: 'mcq',
          prompt: "Parmi les ions suivants, lequel est un ion polyatomique ?",
          options: [
            "SO₄²⁻ (ion sulfate)",
            "Mg²⁺ (ion magnésium)",
            "Cl⁻ (ion chlorure)",
            "Fe³⁺ (ion fer III)",
          ],
          correctAnswerIndex: 0,
          explanation: "Un ion polyatomique est formé d'un groupe de plusieurs atomes liés : SO₄²⁻ est constitué de 1 atome de soufre et 4 atomes d'oxygène.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex2',
          type: 'mcq',
          prompt: "Quel est le nom de l'ion polyatomique de formule NH₄⁺ ?",
          options: [
            "Ion ammonium",
            "Ion hydronium",
            "Ion nitrate",
            "Ion hydroxyde",
          ],
          correctAnswerIndex: 0,
          explanation: "NH₄⁺ est le cation ammonium. (H₃O⁺ est l'hydronium, NO₃⁻ est le nitrate, OH⁻ est l'hydroxyde).",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex3',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du chlorure de fer II constitué des ions Fe²⁺ et Cl⁻ ?",
          options: [
            "FeCl₂",
            "Fe₂Cl",
            "FeCl",
            "FeCl₃",
          ],
          correctAnswerIndex: 0,
          explanation: "Pour neutraliser la charge +2 de Fe²⁺, il faut deux ions Cl⁻ (−1 chacun) : FeCl₂.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex4',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du carbonate de sodium constitué des ions Na⁺ et CO₃²⁻ ?",
          options: [
            "Na₂CO₃",
            "NaCO₃",
            "Na(CO₃)₂",
            "Na₃CO₂",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion carbonate porte 2 charges négatives (CO₃²⁻), il faut donc deux ions Na⁺ (+1 chacun) : Na₂CO₃.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex5',
          type: 'mcq',
          prompt: "Pourquoi un composé ionique à l'état solide ne porte-t-il aucune charge apparente ?",
          options: [
            "Parce qu'il est électriquement neutre : le nombre total de charges positives compense exactement celui des charges négatives",
            "Parce que les électrons disparaissent lors de la formation du cristal",
            "Parce que seuls les métaux neutres peuvent former des cristaux",
            "Parce que la charge des anions est toujours détruite par la chaleur",
          ],
          correctAnswerIndex: 0,
          explanation: "La neutralité électrique globale est la condition fondamentale d'existence de tout composé ionique stable.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex6',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du fluorure d'aluminium constitué des ions Al³⁺ et F⁻ ?",
          options: [
            "AlF₃",
            "Al₃F",
            "AlF",
            "Al₂F₃",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion Al³⁺ apporte 3 charges positives, il requiert donc 3 ions F⁻ (−1 chacun) : AlF₃.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex7',
          type: 'mcq',
          prompt: "Comment nomme-t-on le composé de formule statistique CuSO₄ formé par Cu²⁺ et SO₄²⁻ ?",
          options: [
            "Sulfate de cuivre",
            "Sulfure de cuivre",
            "Carbonate de cuivre",
            "Nitrate de cuivre",
          ],
          correctAnswerIndex: 0,
          explanation: "CuSO₄ est le sulfate de cuivre (bleu sous sa forme hydratée, blanc anhydre).",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex8',
          type: 'mcq',
          prompt: "Quelle formule statistique résulte de l'association des ions Fe³⁺ et O²⁻ ?",
          options: [
            "Fe₂O₃ (trioxyde de difer)",
            "FeO",
            "Fe₃O₂",
            "Fe₂O",
          ],
          correctAnswerIndex: 0,
          explanation: "2 × (+3) + 3 × (−2) = +6 − 6 = 0, la formule statistique minimale est Fe₂O₃ (oxyde de fer III ou rouille).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Liaison de Covalence, Lewis et Géométrie des Molécules
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch4_p3',
      order: 3,
      title: "Liaisons de covalence, représentation de Lewis et géométrie",
      summary:
        "Mise en commun de doublets d'électrons, valence des atomes (H, O, N, C), formule de Lewis, doublets liants et non-liants, corps purs et mélanges.",
      conceptExplanation:
        "Lorsque deux atomes non-métalliques se rencontrent, aucun des deux n'a tendance à perdre ses électrons. Pour satisfaire la règle de l'octet, ils vont alors mettre en commun des électrons célibataires : c'est la liaison de covalence.\n\n" +
        "1. La liaison de covalence (covalente) :\n" +
        "Une liaison de covalence résulte de la mise en commun par deux atomes d'une ou plusieurs paires d'électrons célibataires appelées doublets de liaison (ou doublets liants).\n" +
        "- Doublet liant : paire d'électrons partagée entre deux atomes (symbolisé par un tiret reliant les symboles des deux atomes : A—B).\n" +
        "- Doublets non-liants (ou libres) : paires d'électrons de la couche externe non engagées dans des liaisons (symbolisés par un tiret placé sur l'atome).\n\n" +
        "2. Valence d'un atome :\n" +
        "La valence d'un atome est le nombre de liaisons de covalence qu'il peut former pour saturer sa couche externe (égal au nombre d'électrons célibataires de valence) :\n" +
        "- Hydrogène H (K¹) : 1 liaison possible -> monovalent (valence 1).\n" +
        "- Oxygène O (K²L⁶) : 2 électrons célibataires + 2 doublets non-liants -> divalent (valence 2).\n" +
        "- Azote N (K²L⁵) : 3 électrons célibataires + 1 doublet non-liant -> trivalent (valence 3).\n" +
        "- Carbone C (K²L⁴) : 4 électrons célibataires, 0 doublet non-liant -> tétravalent (valence 4).\n" +
        "- Chlore Cl (K²L⁸M⁷) : 1 électron célibataire + 3 doublets non-liants -> monovalent (valence 1).\n\n" +
        "3. Liaisons simples, doubles et triples :\n" +
        "- Liaison simple : 1 doublet mis en commun (ex : H—H dans H₂, H—Cl dans HCl, H—O—H dans H₂O).\n" +
        "- Liaison double : 2 doublets mis en commun (ex : O=C=O dans CO₂, O=O dans O₂).\n" +
        "- Liaison triple : 3 doublets mis en commun (ex : N≡N dans le diazote N₂).\n\n" +
        "4. Géométrie des molécules (Répulsion minimale des doublets) :\n" +
        "Les doublets électroniques (liants et non-liants) se repoussent mutuellement et s'écartent au maximum dans l'espace pour minimiser leur répulsion électrique :\n" +
        "- Molécule d'eau H₂O : géométrie coudée (angle H—O—H = 105°).\n" +
        "- Molécule d'ammoniac NH₃ : géométrie pyramidale (angle H—N—H = 107°).\n" +
        "- Molécule de méthane CH₄ : géométrie tétraédrique régulière (angle H—C—H = 109°28').\n" +
        "- Molécule de dioxyde de carbone CO₂ : géométrie linéaire (angle O—C—O = 180°).\n\n" +
        "5. Corps purs simples, corps purs composés et mélanges :\n" +
        "- Corps pur : constitué de molécules toutes identiques entre elles.\n" +
        "  * Corps pur simple : molécules formées d'un seul type d'atomes (ex : H₂, O₂, N₂, Cl₂).\n" +
        "  * Corps pur composé : molécules formées de plusieurs types d'atomes différents (ex : H₂O, CO₂, CH₄).\n" +
        "- Mélange : constitué de plusieurs types de molécules différentes (ex : l'air atmosphérique = 79% N₂ + 20% O₂ + 1% autres gaz).",
      formulas: [
        {
          name: "Valence des éléments usuels",
          formula: "H : 1 | O : 2 | N : 3 | C : 4 | Halogènes (F, Cl) : 1",
          note: "Nombre de doublets liants formés par chaque atome.",
        },
      ],
      keyRule:
        "Règle de Lewis : Chaque doublet liant compte pour 2 électrons pour chacun des deux atomes liés. Chaque atome lié s'entoure ainsi d'un octet (8 électrons), et l'hydrogène d'un duet (2 électrons).",
      workedExample: {
        title: "Représentation de Lewis de la molécule de diazote N₂",
        statement: "L'atome d'azote a pour numéro atomique Z = 7. Écrire sa formule électronique, déterminer sa valence et donner la représentation de Lewis de N₂.",
        methodSteps: [
          "Étape 1 : Formule électronique de l'azote N : K²L⁵.",
          "Étape 2 : Il possède 5 électrons de valence : 1 doublet non-liant et 3 électrons célibataires -> valence = 3.",
          "Étape 3 : Pour que deux atomes d'azote s'entourent de 8 électrons chacun, ils mettent en commun leurs 3 électrons célibataires respectifs, formant une liaison covalente triple.",
          "Étape 4 : Représentation : chaque atome conserve son doublet non-liant à l'extrémité, reliés par 3 traits horizontaux : |N≡N|.",
        ],
        conclusion: "N₂ comporte 1 liaison triple et 2 doublets non-liants (un sur chaque azote).",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch4_p3_ex1',
          type: 'mcq',
          prompt: "En quoi consiste une liaison de covalence entre deux atomes ?",
          options: [
            "En la mise en commun d'une ou plusieurs paires d'électrons célibataires (doublets de liaison)",
            "En l'arrachement définitif d'un proton d'un noyau vers un autre",
            "En la fusion des deux noyaux atomiques",
            "En une attraction magnétique sans aucun échange d'électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Une liaison covalente est le partage équitable d'une ou plusieurs paires d'électrons de valence (doublets liants).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex2',
          type: 'mcq',
          prompt: "Quelle est la valence de l'atome de carbone C (Z = 6, K²L⁴) ?",
          options: [
            "4 (tétravalent)",
            "2 (divalent)",
            "1 (monovalent)",
            "3 (trivalent)",
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 4 électrons célibataires sur sa couche externe L, le carbone forme 4 liaisons covalentes (tétravalence).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex3',
          type: 'mcq',
          prompt: "Dans la molécule de diazote N₂, quel type de liaison covalente relie les deux atomes d'azote ?",
          options: [
            "Une liaison covalente triple (mise en commun de 3 doublets)",
            "Une liaison covalente simple",
            "Une liaison covalente double",
            "Une liaison ionique pure",
          ],
          correctAnswerIndex: 0,
          explanation: "Chaque atome d'azote apporte 3 électrons célibataires : ils mettent en commun 3 doublets, formant une liaison triple N≡N.",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex4',
          type: 'mcq',
          prompt: "Combien de doublets non-liants (libres) possède l'atome d'oxygène dans la molécule d'eau H₂O ?",
          options: [
            "2 doublets non-liants",
            "0 doublet non-liant",
            "1 doublet non-liant",
            "3 doublets non-liants",
          ],
          correctAnswerIndex: 0,
          explanation: "L'atome d'oxygène possède 6 électrons de valence : 2 engagés dans les liaisons O—H et 4 qui forment 2 doublets non-liants.",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex5',
          type: 'mcq',
          prompt: "Quelle est la structure géométrique de la molécule de méthane CH₄ dans l'espace ?",
          options: [
            "Tétraédrique (les 4 liaisons pointent vers les sommets d'un tétraèdre régulier)",
            "Plane carrée",
            "Linéaire",
            "Coudée à 90°",
          ],
          correctAnswerIndex: 0,
          explanation: "La répulsion mutuelle maximale des 4 doublets liants C—H dispose les 4 atomes d'hydrogène aux 4 sommets d'un tétraèdre régulier (angle 109°28').",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex6',
          type: 'mcq',
          prompt: "Pourquoi l'eau pure (H₂O) est-elle qualifiée de corps pur composé ?",
          options: [
            "Parce que toutes ses molécules sont identiques, mais composées de deux éléments chimiques différents (H et O)",
            "Parce qu'elle contient des sels minéraux dissous",
            "Parce que ses molécules changent constamment de formule",
            "Parce qu'elle est composée d'un seul type d'atome",
          ],
          correctAnswerIndex: 0,
          explanation: "Un corps pur composé est formé de molécules toutes identiques composées d'atomes d'éléments différents (ici H et O).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex7',
          type: 'mcq',
          prompt: "L'air que nous respirons est-il un corps pur ou un mélange ?",
          options: [
            "Un mélange (composé principalement de diazote N₂ à 79% et de dioxygène O₂ à 20%)",
            "Un corps pur simple",
            "Un corps pur composé d'une seule molécule géante",
            "Un corps solide dissous",
          ],
          correctAnswerIndex: 0,
          explanation: "L'air est un mélange gazeux constitué de plusieurs molécules différentes (environ 79% de N₂, 20% de O₂ et 1% d'autres gaz).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex8',
          type: 'mcq',
          prompt: "Dans la molécule de dioxyde de carbone CO₂, quel est le nombre total de liaisons de covalence autour de l'atome de carbone central ?",
          options: [
            "4 liaisons (deux doubles liaisons O=C=O)",
            "2 liaisons simples",
            "3 liaisons simples",
            "1 liaison quadruple",
          ],
          correctAnswerIndex: 0,
          explanation: "Le carbone forme 2 doubles liaisons avec les deux oxygènes (O=C=O), soit un total de 4 doublets liants assurant son octet.",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 5 : MOLE ET GRANDEURS MOLAIRES
// ============================================================================
export const chimie2deAMoleEtGrandeursMolairesChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch5_mole_et_grandeurs_molaires',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 5,
  officialVolumeHours: 12,
  title: 'Leçon 5 — Mole et grandeurs molaires',
  summary:
    "Définition de la mole et constante d'Avogadro, masse molaire atomique et moléculaire, calculs de quantité de matière (n = m/M et n = V/Vm), volume molaire des gaz, loi d'Avogadro-Ampère et densité des gaz par rapport à l'air.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : La Mole et la Constante d'Avogadro
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch5_p1',
      order: 1,
      title: "La mole : unité de quantité de matière et constante d'Avogadro",
      summary:
        "Nécessité de la mole pour dénombrer l'infiniment petit, constante d'Avogadro Na = 6,02 × 10²³ mol⁻¹, relation N = n × Na.",
      conceptExplanation:
        "Dans un échantillon ordinaire de matière, le nombre d'atomes ou de molécules est astronomique : par exemple, un petit dé à coudre d'eau (27 mL) contient 903 000 000 000 000 000 000 000 molécules (903 × 10²¹) ! Pour compter facilement ces entités sans manipuler des nombres vertigineux, les chimistes utilisent une unité de paquet : la mole.\n\n" +
        "1. Qu'est-ce qu'une mole ?\n" +
        "De la même façon qu'une douzaine contient 12 objets et qu'une rame de papier contient 500 feuilles, une mole est un paquet d'entités chimiques contenant exactement 6,02 × 10²³ entités.\n" +
        "Définition officielle : La mole est l'unité internationale de quantité de matière. Son symbole est mol.\n" +
        "Elle contient autant d'entités élémentaires (atomes, molécules, ions, électrons) qu'il y a d'atomes dans 12 g de carbone 12.\n\n" +
        "2. La constante d'Avogadro (notée Na) :\n" +
        "Le nombre d'entités élémentaires contenues dans une mole s'appelle le nombre ou la constante d'Avogadro, notée Na.\n" +
        "Sa valeur officielle retenue au lycée est :\n" +
        "  Na = 6,02 × 10²³ mol⁻¹.\n" +
        "- 1 mole d'atomes de fer = 6,02 × 10²³ atomes de fer.\n" +
        "- 1 mole de molécules d'eau = 6,02 × 10²³ molécules d'eau.\n" +
        "- 1 mole d'électrons = 6,02 × 10²³ électrons.\n\n" +
        "3. Relation entre nombre d'entités N et quantité de matière n :\n" +
        "Soit un échantillon contenant N entités élémentaires identiques. La quantité de matière n (en mol) contenue dans cet échantillon est donnée par :\n" +
        "  N = n × Na   d'où   n = N / Na\n" +
        "avec :\n" +
        "- N : nombre d'entités élémentaires (sans unité, entier pur),\n" +
        "- n : quantité de matière (en mol),\n" +
        "- Na : constante d'Avogadro (6,02 × 10²³ mol⁻¹).",
      formulas: [
        {
          name: "Relation fondamentale du nombre d'entités",
          formula: "N = n · Na  <=>  n = N / Na",
          note: "Na = 6,02 × 10²³ mol⁻¹.",
        },
      ],
      keyRule:
        "Réflexe d'Examen : Ne jamais confondre N (nombre d'entités, sans unité, très grand de l'ordre de 10²²) et n (quantité de matière, en moles, petit nombre de l'ordre de 0,1 à 10 mol).",
      workedExample: {
        title: "Calcul de la quantité de matière dans un clou en fer",
        statement: "Un clou en fer contient N = 10²⁴ atomes de fer. Calculer la quantité de matière n de fer contenu dans ce clou.",
        methodSteps: [
          "Étape 1 : Rappeler la formule liant n, N et Na : n = N / Na.",
          "Étape 2 : Remplacer par les valeurs numériques : N = 1,0 × 10²⁴ et Na = 6,02 × 10²³ mol⁻¹.",
          "Étape 3 : Effectuer le quotient : n = 10²⁴ / (6,02 × 10²³) = (1 / 6,02) × 10¹ ≈ 0,166 × 10 = 1,66 mol.",
        ],
        conclusion: "Le clou renferme n = 1,66 mol d'atomes de fer.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch5_p1_ex1',
          type: 'mcq',
          prompt: "Quelle est l'unité internationale de quantité de matière et son symbole officiel ?",
          options: [
            "La mole, de symbole mol",
            "Le gramme, de symbole g",
            "Le litre, de symbole L",
            "La molécule, de symbole molec",
          ],
          correctAnswerIndex: 0,
          explanation: "La mole (symbole : mol) est l'unité du Système International (SI) pour exprimer la quantité de matière.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est la valeur approchée officielle de la constante d'Avogadro Na enseignée au lycée ?",
          options: [
            "6,02 × 10²³ mol⁻¹",
            "6,02 × 10⁻²³ mol⁻¹",
            "9,81 × 10²³ mol⁻¹",
            "3,00 × 10⁸ mol⁻¹",
          ],
          correctAnswerIndex: 0,
          explanation: "La constante d'Avogadro vaut approximativement 6,02 × 10²³ mol⁻¹.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex3',
          type: 'mcq',
          prompt: "Combien d'atomes contient exactement 1 mole d'atomes de cuivre ?",
          options: [
            "6,02 × 10²³ atomes",
            "12 atomes",
            "63,5 atomes",
            "100 atomes",
          ],
          correctAnswerIndex: 0,
          explanation: "Par définition, 1 mole de n'importe quelle entité contient exactement Na = 6,02 × 10²³ entités de cette espèce.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex4',
          type: 'mcq',
          prompt: "Quelle relation permet de calculer la quantité de matière n à partir du nombre d'entités N ?",
          options: [
            "n = N / Na",
            "n = N × Na",
            "n = Na / N",
            "n = N + Na",
          ],
          correctAnswerIndex: 0,
          explanation: "Comme N = n × Na, on en déduit directement n = N / Na.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex5',
          type: 'mcq',
          prompt: "Combien de molécules d'eau sont présentes dans un échantillon de 2 moles d'eau pure ?",
          options: [
            "1,204 × 10²⁴ molécules (soit 2 × 6,02 × 10²³)",
            "6,02 × 10²³ molécules",
            "3,01 × 10²³ molécules",
            "200 molécules",
          ],
          correctAnswerIndex: 0,
          explanation: "N = n × Na = 2 × (6,02 × 10²³) = 12,04 × 10²³ = 1,204 × 10²⁴ molécules.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex6',
          type: 'mcq',
          prompt: "Un flacon contient 3,01 × 10²³ atomes de carbone. Quelle est la quantité de matière correspondante ?",
          options: [
            "0,5 mol",
            "2 mol",
            "1 mol",
            "0,2 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = N / Na = (3,01 × 10²³) / (6,02 × 10²³) = 3,01 / 6,02 = 0,5 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex7',
          type: 'mcq',
          prompt: "Historiquement, la mole a été définie en référence à la quantité de matière contenue dans 12 g de quel isotope ?",
          options: [
            "Le carbone 12 (¹²C)",
            "L'hydrogène 1 (¹H)",
            "L'oxygène 16 (¹⁶O)",
            "L'uranium 235",
          ],
          correctAnswerIndex: 0,
          explanation: "La mole a été définie en 1971 comme la quantité de matière contenant autant d'entités qu'il y a d'atomes dans 12 g de carbone 12.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex8',
          type: 'mcq',
          prompt: "Quelle est l'unité de la constante d'Avogadro Na ?",
          options: [
            "mol⁻¹ (par mole)",
            "mol (mole)",
            "g/mol",
            "sans unité",
          ],
          correctAnswerIndex: 0,
          explanation: "Na s'exprime en entités par mole, c'est-à-dire en mol⁻¹.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Masse Molaire et Détermination de la Quantité de Matière
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch5_p2',
      order: 2,
      title: "Masse molaire (atomique, moléculaire, ionique) et relation n = m / M",
      summary:
        "Définition de la masse molaire M en g/mol, calcul de la masse molaire d'un composé et relation fondamentale masse / quantité de matière.",
      conceptExplanation:
        "Comment peser des moles sur une balance de laboratoire ? En associant à chaque espèce chimique sa masse molaire M.\n\n" +
        "1. Définition de la masse molaire M :\n" +
        "La masse molaire M d'une espèce chimique est la masse d'une mole d'entités (6,02 × 10²³ entités) de cette espèce.\n" +
        "Elle s'exprime en grammes par mole, notée g/mol ou g·mol⁻¹.\n\n" +
        "2. Masse molaire atomique :\n" +
        "C'est la masse d'une mole d'atomes de l'élément considéré. Elle est inscrite dans chaque case de la classification périodique.\n" +
        "Valeurs usuelles officielles MENA :\n" +
        "- Hydrogène : M(H) = 1 g/mol\n" +
        "- Carbone : M(C) = 12 g/mol\n" +
        "- Azote : M(N) = 14 g/mol\n" +
        "- Oxygène : M(O) = 16 g/mol\n" +
        "- Sodium : M(Na) = 23 g/mol\n" +
        "- Aluminium : M(Al) = 27 g/mol\n" +
        "- Soufre : M(S) = 32 g/mol\n" +
        "- Chlore : M(Cl) = 35,5 g/mol\n" +
        "- Potassium : M(K) = 39 g/mol\n" +
        "- Calcium : M(Ca) = 40 g/mol\n" +
        "- Fer : M(Fe) = 56 g/mol (ou 55,8 g/mol).\n\n" +
        "3. Masse molaire moléculaire :\n" +
        "C'est la masse d'une mole de molécules. Elle est égale à la somme des masses molaires atomiques des atomes constituant la molécule.\n" +
        "Exemples détaillés :\n" +
        "- Eau H₂O : M = 2 × M(H) + 1 × M(O) = 2 × 1 + 16 = 18 g/mol.\n" +
        "- Dioxyde de carbone CO₂ : M = 1 × 12 + 2 × 16 = 44 g/mol.\n" +
        "- Éthanol C₂H₆O : M = 2 × 12 + 6 × 1 + 16 = 24 + 6 + 16 = 46 g/mol.\n" +
        "- Vitamine C (acide ascorbique C₆H₈O₆) : M = 6 × 12 + 8 × 1 + 6 × 16 = 72 + 8 + 96 = 176 g/mol.\n\n" +
        "4. Masse molaire ionique :\n" +
        "Comme la masse d'un électron est négligeable devant celle du noyau, la masse molaire d'un ion est identique à celle de l'atome ou du groupement correspondant :\n" +
        "- M(Cl⁻) = M(Cl) = 35,5 g/mol.\n" +
        "- M(SO₄²⁻) = 1 × 32 + 4 × 16 = 96 g/mol.\n\n" +
        "5. Relation fondamentale entre masse m et quantité de matière n :\n" +
        "  n = m / M   <=>   m = n × M\n" +
        "avec :\n" +
        "- n : quantité de matière (en mol),\n" +
        "- m : masse de l'échantillon (en grammes, g),\n" +
        "- M : masse molaire (en g/mol).\n" +
        "Masse d'une seule molécule individuelle : m₁ = M / Na.",
      formulas: [
        {
          name: "Relation fondamentale masse / quantité de matière",
          formula: "n = m / M  <=>  m = n · M",
          note: "Attention aux unités : m doit impérativement être en grammes (g) !",
        },
        {
          name: "Masse d'une molécule individuelle",
          formula: "m₁ = M / Na",
          note: "Masse unitaire d'une particule en grammes.",
        },
      ],
      keyRule:
        "Attention aux pièges d'unités aux devoirs : La masse m doit TOUJOURS être convertie en grammes (g) avant d'appliquer n = m/M ! Si la masse est donnée en kg, multiplie par 1 000 (ex : 2 kg = 2 000 g). Si elle est donnée en mg, divise par 1 000 (ex : 500 mg = 0,5 g).",
      workedExample: {
        title: "Calcul de quantité de matière : Comprimé de Vitamine C (500 mg)",
        statement: "Un comprimé d'acide ascorbique (vitamine C, C₆H₈O₆) contient m = 500 mg de substance pure. Calculer la masse molaire M puis la quantité de matière n dans le comprimé.",
        methodSteps: [
          "Étape 1 : Calcul de M(C₆H₈O₆) : 6 × 12 + 8 × 1 + 6 × 16 = 72 + 8 + 96 = 176 g/mol.",
          "Étape 2 : Convertir la masse m en grammes : 500 mg = 500 × 10⁻³ g = 0,50 g.",
          "Étape 3 : Appliquer la formule : n = m / M = 0,50 / 176 ≈ 0,00284 mol = 2,84 × 10⁻³ mol.",
        ],
        conclusion: "Le comprimé renferme n = 2,84 × 10⁻³ mol (ou 2,84 mmol) d'acide ascorbique.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch5_p2_ex1',
          type: 'mcq',
          prompt: "Quelle est l'unité de la masse molaire M dans le système usuel de chimie ?",
          options: [
            "g/mol (ou g·mol⁻¹)",
            "kg/m³",
            "mol/L",
            "g/L",
          ],
          correctAnswerIndex: 0,
          explanation: "La masse molaire représente la masse en grammes d'une mole : elle s'exprime en g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex2',
          type: 'mcq',
          prompt: "On donne M(H) = 1 g/mol et M(O) = 16 g/mol. Quelle est la masse molaire moléculaire de l'eau H₂O ?",
          options: [
            "18 g/mol",
            "17 g/mol",
            "34 g/mol",
            "16 g/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "M(H₂O) = 2 × 1 + 16 = 18 g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex3',
          type: 'mcq',
          prompt: "Quelle est la masse molaire moléculaire du dioxyde de carbone CO₂ sachant que M(C) = 12 g/mol et M(O) = 16 g/mol ?",
          options: [
            "44 g/mol",
            "28 g/mol",
            "32 g/mol",
            "40 g/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "M(CO₂) = 12 + 2 × 16 = 12 + 32 = 44 g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex4',
          type: 'mcq',
          prompt: "Quelle quantité de matière n contient un échantillon de 36 g d'eau liquide pure ?",
          options: [
            "2 mol",
            "0,5 mol",
            "18 mol",
            "4 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = m / M = 36 / 18 = 2 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex5',
          type: 'mcq',
          prompt: "On pèse 0,4 mol d'hydroxyde de sodium NaOH (M = 40 g/mol). Quelle est la masse correspondante en grammes ?",
          options: [
            "16 g",
            "100 g",
            "40 g",
            "4 g",
          ],
          correctAnswerIndex: 0,
          explanation: "m = n × M = 0,4 × 40 = 16 g.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex6',
          type: 'mcq',
          prompt: "Pourquoi la masse molaire d'un ion monoatomique (ex : Cl⁻) est-elle égale à celle de l'atome neutre correspondant ?",
          options: [
            "Parce que la masse des électrons gagnés ou perdus est totalement négligeable devant celle du noyau",
            "Parce que le nombre de protons change en même temps que les électrons",
            "Parce que les électrons n'ont aucune masse dans le vide",
            "Parce que les ions n'ont pas de masse mesurable",
          ],
          correctAnswerIndex: 0,
          explanation: "La masse d'un électron est environ 1 836 fois plus faible que celle d'un nucléon ; le gain ou la perte de quelques électrons ne modifie pas la masse molaire mesurable.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex7',
          type: 'mcq',
          prompt: "Un échantillon de sel de cuisine NaCl (M = 58,5 g/mol) a une masse m = 117 g. Combien de moles cela représente-t-il ?",
          options: [
            "2 mol",
            "1 mol",
            "3 mol",
            "0,5 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = m / M = 117 / 58,5 = 2 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex8',
          type: 'mcq',
          prompt: "Comment calcule-t-on la masse individuelle m₁ d'une seule molécule à partir de sa masse molaire M et de la constante d'Avogadro Na ?",
          options: [
            "m₁ = M / Na",
            "m₁ = M × Na",
            "m₁ = Na / M",
            "m₁ = M − Na",
          ],
          correctAnswerIndex: 0,
          explanation: "Une mole (M grammes) contient Na molécules, donc une seule molécule pèse m₁ = M / Na grammes.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Volume Molaire des Gaz et Densité par Rapport à l'Air
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch5_p3',
      order: 3,
      title: "Volume molaire des gaz, loi d'Avogadro-Ampère et densité par rapport à l'air",
      summary:
        "Loi d'Avogadro-Ampère, volume molaire normal Vm = 22,4 L/mol (CNTP) et usuel Vm = 24 L/mol, relation n = V / Vm et densité d = M / 29.",
      conceptExplanation:
        "Pour les gaz, mesurer une masse est souvent délicat. Il est bien plus simple et précis de mesurer leur volume V.\n\n" +
        "1. La loi d'Avogadro-Ampère :\n" +
        "Énoncé fondamental : Des volumes égaux de gaz différents, pris dans les mêmes conditions de température et de pression, contiennent le même nombre de molécules (donc la même quantité de matière en moles).\n\n" +
        "2. Le volume molaire des gaz (Vm) :\n" +
        "Le volume molaire d'un gaz est le volume occupé par une mole de ce gaz dans des conditions données de température T et de pression P.\n" +
        "Il s'exprime en litres par mole : L/mol ou L·mol⁻¹.\n" +
        "Valeurs officielles de référence :\n" +
        "- Dans les Conditions Normales de Température et de Pression (CNTP : T = 0 °C et P = 1 atm = 10⁵ Pa) :\n" +
        "  Vm = 22,4 L/mol (volume molaire normal).\n" +
        "- Dans les conditions habituelles de laboratoire (T = 20 °C et P = 1 atm) :\n" +
        "  Vm = 24 L/mol (ou 25 L/mol selon l'énoncé du devoir).\n\n" +
        "3. Détermination de la quantité de matière d'un gaz :\n" +
        "Pour un volume V de gaz dans les conditions où le volume molaire vaut Vm :\n" +
        "  n = V / Vm   <=>   V = n × Vm\n" +
        "avec :\n" +
        "- n : quantité de matière du gaz (en mol),\n" +
        "- V : volume du gaz (en litres, L),\n" +
        "- Vm : volume molaire du gaz (en L/mol).\n" +
        "Rappel : Cette formule n'est valable QUE pour les corps à l'état gazeux !\n\n" +
        "4. Densité d'un gaz par rapport à l'air (d) :\n" +
        "La densité d d'un gaz par rapport à l'air compare la masse d'un certain volume de ce gaz à la masse du même volume d'air dans les mêmes conditions :\n" +
        "  d = M / 29   <=>   M = 29 × d\n" +
        "avec :\n" +
        "- M : masse molaire moléculaire du gaz (en g/mol),\n" +
        "- 29 : masse molaire moyenne de l'air (g/mol) car l'air est composé de 80% N₂ (28 g/mol) et 20% O₂ (32 g/mol) -> 0,8 × 28 + 0,2 × 32 = 28,8 ≈ 29 g/mol.\n" +
        "- d : densité par rapport à l'air (grandeur sans unité).\n" +
        "Interprétation physique :\n" +
        "- Si d > 1 (M > 29 g/mol) : le gaz est plus lourd (plus dense) que l'air, il s'accumule au sol (ex : CO₂, Cl₂, butane).\n" +
        "- Si d < 1 (M < 29 g/mol) : le gaz est plus léger (moins dense) que l'air, il s'élève au plafond (ex : H₂, He, CH₄).",
      formulas: [
        {
          name: "Quantité de matière d'un gaz",
          formula: "n = V / Vm  <=>  V = n · Vm",
          note: "Valable uniquement pour l'état gazeux (V en L, Vm en L/mol).",
        },
        {
          name: "Densité d'un gaz par rapport à l'air",
          formula: "d = M / 29  <=>  M = 29 · d",
          note: "Grandeur sans unité. 29 représente la masse molaire de l'air.",
        },
      ],
      keyRule:
        "Attention aux conversions de volume : 1 L = 1 dm³ = 1 000 cm³ = 1 000 mL. Donc pour convertir des cm³ ou mL en litres, divise par 1 000 (ex : 44,8 cm³ = 0,0448 L).",
      workedExample: {
        title: "Situation officielle MENA : Volume de dioxygène recueilli à l'électrolyse",
        statement: "Lors d'une électrolyse de l'eau, on recueille V = 44,8 cm³ de dioxygène O₂ dans les CNTP (Vm = 22,4 L/mol). Calculer la quantité de matière n(O₂) puis sa masse.",
        methodSteps: [
          "Étape 1 : Convertir le volume en litres : V = 44,8 cm³ = 44,8 × 10⁻³ L = 0,0448 L.",
          "Étape 2 : Calculer n(O₂) : n = V / Vm = 0,0448 / 22,4 = 0,002 mol = 2 × 10⁻³ mol.",
          "Étape 3 : Calculer la masse molaire de O₂ : M(O₂) = 2 × 16 = 32 g/mol.",
          "Étape 4 : Calculer la masse m : m = n × M = 0,002 × 32 = 0,064 g (ou 64 mg).",
        ],
        conclusion: "On a recueilli n = 2 × 10⁻³ mol de O₂, soit une masse m = 0,064 g.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch5_p3_ex1',
          type: 'mcq',
          prompt: "Que stipule la loi d'Avogadro-Ampère pour les gaz ?",
          options: [
            "Des volumes égaux de gaz différents, pris dans les mêmes conditions de température et pression, contiennent le même nombre de molécules",
            "Tous les gaz ont la même masse volumique quelle que soit la température",
            "Un gaz chaud a toujours le même volume qu'un gaz froid à pression variable",
            "Les molécules des différents gaz ont toutes la même taille",
          ],
          correctAnswerIndex: 0,
          explanation: "La loi d'Avogadro-Ampère établit que dans les mêmes conditions de T et P, un même volume de gaz renferme exactement le même nombre de molécules.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex2',
          type: 'mcq',
          prompt: "Quelle est la valeur du volume molaire normal Vm d'un gaz dans les CNTP (0 °C et 10⁵ Pa) ?",
          options: [
            "22,4 L/mol",
            "24 L/mol",
            "29 L/mol",
            "18 L/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "Dans les conditions normales de température et de pression (CNTP), le volume molaire vaut Vm = 22,4 L/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex3',
          type: 'mcq',
          prompt: "Un flacon contient 4,48 L de dioxyde de carbone dans les CNTP (Vm = 22,4 L/mol). Quelle est la quantité de matière correspondante ?",
          options: [
            "0,2 mol",
            "2 mol",
            "0,1 mol",
            "0,5 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = V / Vm = 4,48 / 22,4 = 0,2 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex4',
          type: 'mcq',
          prompt: "Quelle relation permet de calculer la densité d d'un gaz par rapport à l'air en fonction de sa masse molaire M ?",
          options: [
            "d = M / 29",
            "d = 29 / M",
            "d = M × 29",
            "d = M / 22,4",
          ],
          correctAnswerIndex: 0,
          explanation: "La formule de la densité d'un gaz par rapport à l'air est d = M / 29 (29 étant la masse molaire moyenne de l'air sec).",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex5',
          type: 'mcq',
          prompt: "Le gaz butane a pour masse molaire M = 58 g/mol. Quelle est sa densité par rapport à l'air ?",
          options: [
            "d = 2 (le gaz est deux fois plus dense que l'air)",
            "d = 0,5",
            "d = 1,5",
            "d = 4",
          ],
          correctAnswerIndex: 0,
          explanation: "d = M / 29 = 58 / 29 = 2. Le butane est deux fois plus lourd que l'air et s'accumule donc au ras du sol en cas de fuite.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex6',
          type: 'mcq',
          prompt: "Dans les conditions habituelles de laboratoire où Vm = 24 L/mol, quel volume occupent 0,5 mol de dihydrogène H₂ ?",
          options: [
            "12 L",
            "24 L",
            "48 L",
            "6 L",
          ],
          correctAnswerIndex: 0,
          explanation: "V = n × Vm = 0,5 × 24 = 12 L.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex7',
          type: 'mcq',
          prompt: "La densité d'un gaz inconnu par rapport à l'air vaut d = 1,517. Quelle est sa masse molaire M ?",
          options: [
            "44 g/mol (il s'agit du dioxyde de carbone CO₂)",
            "32 g/mol",
            "28 g/mol",
            "16 g/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "M = 29 × d = 29 × 1,517 ≈ 44 g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex8',
          type: 'mcq',
          prompt: "Le dihydrogène H₂ (M = 2 g/mol) et le méthane CH₄ (M = 16 g/mol) s'élèvent-ils au plafond ou tombent-ils au sol dans une pièce ?",
          options: [
            "Ils s'élèvent au plafond car leur densité d est inférieure à 1 (plus légers que l'air)",
            "Ils tombent au sol car tous les gaz sont attirés par la pesanteur",
            "Ils restent immobiles au milieu de la pièce",
            "Ils se liquéfient instantanément à température ambiante",
          ],
          correctAnswerIndex: 0,
          explanation: "Comme M < 29 g/mol, d(H₂) = 2/29 ≈ 0,07 et d(CH₄) = 16/29 ≈ 0,55 < 1. Ces gaz étant moins denses que l'air, ils montent au plafond.",
        },
      ],
    },
  ],
};
