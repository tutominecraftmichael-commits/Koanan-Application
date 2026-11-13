import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 4 : Dénombrement.pdf » (format v2).
export const MATHS_1RE_C_L04_DENOMBREMENT: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l04_denombrement',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 4,
  title: 'Leçon 4 : Dénombrement',
  summary:
    'Ensembles finis, réunion et complémentaire, produit cartésien et p-uplets, arrangements et permutations, combinaisons, modélisation des tirages et binôme de Newton.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: '1ère C - Leçon 4 : Dénombrement.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Ensembles finis, réunion, intersection et complémentaire
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l04_denombrement_p01',
      order: 1,
      title: 'Ensembles finis, réunion, intersection et complémentaire',
      summary:
        'Utiliser le cardinal, la formule de réunion-intersection et le passage au complémentaire pour compter sans double comptage.',
      conceptExplanation:
        "Le **cardinal** d'un ensemble fini $E$, noté $\\mathrm{Card}(E)$, est le nombre d'éléments de $E$ (avec $\\mathrm{Card}(\\emptyset) = 0$).\n\nPour deux parties $A$ et $B$ de $E$ :\n- **Formule de la réunion** : $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)$.\n- **Ensembles disjoints** : si $A \\cap B = \\emptyset$, alors $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B)$.\n- **Complémentaire** : le complémentaire de $A$ dans $E$, noté $\\overline{A}$ ou $C_E^A$, vérifie $A \\cup \\overline{A} = E$ et $A \\cap \\overline{A} = \\emptyset$, d'où $\\mathrm{Card}(\\overline{A}) = \\mathrm{Card}(E) - \\mathrm{Card}(A)$.",
      keyRule:
        'Pour compter « A ou B », on additionne Card(A) + Card(B) puis on retranche Card(A ∩ B) afin de ne pas compter deux fois les éléments communs.',
      formulas: [
        {
          name: 'Cardinal de la réunion',
          formula: '\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)',
        },
        {
          name: 'Cas disjoint (A ∩ B = ∅)',
          formula: '\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B)',
        },
        {
          name: 'Cardinal du complémentaire',
          formula: '\\mathrm{Card}(\\overline{A}) = \\mathrm{Card}(E) - \\mathrm{Card}(A)',
        },
      ],
      workedExample: {
        title: 'Sélection sportive OISSU dans une classe de 25 élèves',
        statement:
          'Dans une classe de $25$ élèves, $15$ pratiquent le handball ($H$), $10$ pratiquent le basket-ball ($B$) et $5$ pratiquent les deux sports. Combien d’élèves pratiquent au moins un des deux sports ? Combien ne pratiquent aucun des deux ?',
        methodSteps: [
          'Les élèves pratiquant au moins un des deux sports forment la réunion $H \\cup B$.',
          'On applique la formule : $\\mathrm{Card}(H \\cup B) = \\mathrm{Card}(H) + \\mathrm{Card}(B) - \\mathrm{Card}(H \\cap B) = 15 + 10 - 5 = 20$.',
          'Les élèves ne pratiquant aucun des deux sports forment le complémentaire $\\overline{H \\cup B}$ dans la classe : $\\mathrm{Card}(\\overline{H \\cup B}) = 25 - 20 = 5$.',
        ],
        conclusion: '$20$ élèves pratiquent au moins un sport et $5$ n’en pratiquent aucun.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Cardinal et complémentaire',
          stepTitle: 'Cardinal d’un ensemble fini et de son complémentaire',
          paragraphText:
            "Le cardinal d'un ensemble fini $E$ est son nombre d'éléments, noté $\\mathrm{Card}(E)$. Si $A \\subset E$, son complémentaire $\\overline{A}$ regroupe les éléments de $E$ qui n'appartiennent pas à $A$, donc $\\mathrm{Card}(\\overline{A}) = \\mathrm{Card}(E) - \\mathrm{Card}(A)$.",
          formula: { name: 'Complémentaire', formula: '\\mathrm{Card}(\\overline{A}) = \\mathrm{Card}(E) - \\mathrm{Card}(A)' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p01_q1',
            type: 'mcq',
            prompt:
              'Soient $A$ et $B$ deux parties disjointes d’un ensemble fini $E$ telles que $A \\cup B = E$. Sachant que $\\mathrm{Card}(E) = 12$ et $\\mathrm{Card}(A) = 3$, que vaut $\\mathrm{Card}(B)$ ?',
            options: ['$15$', '$9$', '$4$', '$36$'],
            correctAnswerIndex: 1,
            explanation:
              'Puisque $A \\cap B = \\emptyset$ et $A \\cup B = E$, $B$ est le complémentaire de $A$ dans $E$ : $\\mathrm{Card}(B) = 12 - 3 = 9$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formule de la réunion',
          stepTitle: 'Cardinal de la réunion A ∪ B',
          paragraphText:
            'Pour éviter de compter deux fois les éléments appartenant simultanément à $A$ et à $B$, on soustrait $\\mathrm{Card}(A \\cap B)$ : $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)$.',
          formula: {
            name: 'Réunion de deux ensembles',
            formula: '\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)',
          },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p01_q2',
            type: 'mcq',
            prompt:
              'Si $\\mathrm{Card}(A) = 14$, $\\mathrm{Card}(B) = 9$ et $\\mathrm{Card}(A \\cup B) = 18$, que vaut $\\mathrm{Card}(A \\cap B)$ ?',
            options: ['$5$', '$4$', '$23$', '$9$'],
            correctAnswerIndex: 0,
            explanation:
              'On isole l’intersection : $\\mathrm{Card}(A \\cap B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cup B) = 14 + 9 - 18 = 5$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Diagramme de Venn',
          stepTitle: 'Modéliser un problème par deux ensembles et leur intersection',
          paragraphText:
            "Lorsqu'un énoncé mentionne des individus qui possèdent l'attribut $A$, l'attribut $B$, ou les deux, identifie d'abord $A \\cap B$ (« les deux »), puis calcule $A \\cup B$ (« au moins un des deux ») avant de passer au complémentaire (« aucun »).",
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p01_q3',
            type: 'mcq',
            prompt:
              'Dans une classe de $25$ élèves, $15$ pratiquent le handball, $10$ le basket-ball et $5$ pratiquent les deux sports. Combien d’élèves pratiquent au moins un des deux sports ?',
            options: ['$25$', '$30$', '$20$', '$15$'],
            correctAnswerIndex: 2,
            explanation:
              '$\\mathrm{Card}(H \\cup B) = 15 + 10 - 5 = 20$ élèves pratiquent au moins un des deux sports.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier le recouvrement ou le reste',
          stepTitle: 'Ne pas additionner naïvement les effectifs',
          paragraphText:
            "Dans une classe de 25 élèves, $15 + 10 = 25$ pourrait faire croire que tous les élèves font du sport ! En réalité, les 5 élèves qui pratiquent les deux sports ont été comptés deux fois : $25 - 20 = 5$ élèves ne pratiquent aucun des deux sports.",
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p01_q4',
            type: 'mcq',
            prompt:
              'Dans le même groupe de $25$ élèves ($15$ en handball, $10$ en basket-ball, $5$ dans les deux), combien ne pratiquent aucun des deux sports ?',
            options: ['$0$', '$5$', '$10$', '$20$'],
            correctAnswerIndex: 1,
            explanation:
              'Comme $\\mathrm{Card}(H \\cup B) = 20$, le complémentaire contient $25 - 20 = 5$ élèves.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Langues vivantes',
          stepTitle: 'Retrouver l’effectif total à partir des groupes',
          paragraphText:
            'Dans un club de langues, $30$ élèves suivent l’anglais, $22$ suivent l’espagnol, $8$ suivent les deux et $4$ suivent uniquement une autre langue. Le nombre total d’élèves est $\\mathrm{Card}(A \\cup E) + 4 = (30 + 22 - 8) + 4 = 48$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p01_q5',
            type: 'mcq',
            prompt:
              'Dans un club, $30$ élèves suivent l’anglais, $22$ suivent l’espagnol, $8$ suivent les deux et $4$ ne suivent aucune de ces deux langues. Quel est l’effectif total du club ?',
            options: ['$56$', '$48$', '$52$', '$44$'],
            correctAnswerIndex: 1,
            explanation:
              '$\\mathrm{Card}(A \\cup E) = 30 + 22 - 8 = 44$. En ajoutant les $4$ élèves hors de $A \\cup E$, on obtient $44 + 4 = 48$ élèves.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Uniquement A',
          stepTitle: 'Compter les éléments dans A mais pas dans B',
          paragraphText:
            'L’ensemble des éléments qui sont uniquement dans $A$ est $A \\setminus B$, de cardinal $\\mathrm{Card}(A) - \\mathrm{Card}(A \\cap B)$. Dans le club précédent, $30 - 8 = 22$ élèves suivent uniquement l’anglais.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p01_q6',
            type: 'mcq',
            prompt:
              'Parmi $40$ candidats, $24$ ont validé l’épreuve de maths, $18$ ont validé la physique et $10$ ont validé les deux. Combien ont validé uniquement les maths ?',
            options: ['$14$', '$24$', '$8$', '$32$'],
            correctAnswerIndex: 0,
            explanation:
              'On retire à $M$ ceux qui ont aussi validé $P$ : $\\mathrm{Card}(M) - \\mathrm{Card}(M \\cap P) = 24 - 10 = 14$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p01_q1',
          type: 'mcq',
          prompt:
            'Soient $A$ et $B$ deux parties disjointes d’un ensemble fini $E$ telles que $A \\cup B = E$. Sachant que $\\mathrm{Card}(E) = 12$ et $\\mathrm{Card}(A) = 3$, que vaut $\\mathrm{Card}(B)$ ?',
          options: ['$15$', '$9$', '$4$', '$36$'],
          correctAnswerIndex: 1,
          explanation:
            'Puisque $A \\cap B = \\emptyset$ et $A \\cup B = E$, $B$ est le complémentaire de $A$ dans $E$ : $\\mathrm{Card}(B) = 12 - 3 = 9$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p01_q2',
          type: 'mcq',
          prompt:
            'Si $\\mathrm{Card}(A) = 14$, $\\mathrm{Card}(B) = 9$ et $\\mathrm{Card}(A \\cup B) = 18$, que vaut $\\mathrm{Card}(A \\cap B)$ ?',
          options: ['$5$', '$4$', '$23$', '$9$'],
          correctAnswerIndex: 0,
          explanation:
            'On isole l’intersection : $\\mathrm{Card}(A \\cap B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cup B) = 14 + 9 - 18 = 5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p01_q3',
          type: 'mcq',
          prompt:
            'Dans une classe de $25$ élèves, $15$ pratiquent le handball, $10$ le basket-ball et $5$ pratiquent les deux sports. Combien d’élèves pratiquent au moins un des deux sports ?',
          options: ['$25$', '$30$', '$20$', '$15$'],
          correctAnswerIndex: 2,
          explanation:
            '$\\mathrm{Card}(H \\cup B) = 15 + 10 - 5 = 20$ élèves pratiquent au moins un des deux sports.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p01_q4',
          type: 'mcq',
          prompt:
            'Dans le même groupe de $25$ élèves ($15$ en handball, $10$ en basket-ball, $5$ dans les deux), combien ne pratiquent aucun des deux sports ?',
          options: ['$0$', '$5$', '$10$', '$20$'],
          correctAnswerIndex: 1,
          explanation:
            'Comme $\\mathrm{Card}(H \\cup B) = 20$, le complémentaire contient $25 - 20 = 5$ élèves.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p01_q5',
          type: 'mcq',
          prompt:
            'Dans un club, $30$ élèves suivent l’anglais, $22$ suivent l’espagnol, $8$ suivent les deux et $4$ ne suivent aucune de ces deux langues. Quel est l’effectif total du club ?',
          options: ['$56$', '$48$', '$52$', '$44$'],
          correctAnswerIndex: 1,
          explanation:
            '$\\mathrm{Card}(A \\cup E) = 30 + 22 - 8 = 44$. En ajoutant les $4$ élèves hors de $A \\cup E$, on obtient $44 + 4 = 48$ élèves.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p01_q6',
          type: 'mcq',
          prompt:
            'Parmi $40$ candidats, $24$ ont validé l’épreuve de maths, $18$ ont validé la physique et $10$ ont validé les deux. Combien ont validé uniquement les maths ?',
          options: ['$14$', '$24$', '$8$', '$32$'],
          correctAnswerIndex: 0,
          explanation:
            'On retire à $M$ ceux qui ont aussi validé $P$ : $\\mathrm{Card}(M) - \\mathrm{Card}(M \\cap P) = 24 - 10 = 14$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Produit cartésien et p-uplets (p-listes)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l04_denombrement_p02',
      order: 2,
      title: 'Produit cartésien et p-uplets (p-listes)',
      summary: 'Utiliser Card(A × B) = Card(A) × Card(B) et compter les p-uplets ordonnés avec répétition (nᵖ).',
      conceptExplanation:
        "Le **produit cartésien** de deux ensembles finis $A$ et $B$, noté $A \\times B$, est l'ensemble des couples ordonnés $(a;b)$ avec $a \\in A$ et $b \\in B$. Son cardinal vaut :\n$$\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B)$$\n\nPlus généralement, un **$p$-uplet** (ou $p$-liste) d'éléments d'un ensemble $E$ à $n$ éléments est un élément de $E^p = E \\times E \\times \\dots \\times E$ ($p$ facteurs). **L'ordre compte et la répétition est autorisée** :\n$$\\mathrm{Card}(E^p) = n^p$$",
      keyRule:
        'Dès que l’ordre compte ET que les répétitions sont autorisées (tirages successifs avec remise, codes, lancers de dés), le nombre de choix est nᵖ.',
      formulas: [
        { name: 'Produit cartésien', formula: '\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B)' },
        { name: 'Nombre de p-uplets', formula: '\\mathrm{Card}(E^p) = (\\mathrm{Card}(E))^p = n^p' },
      ],
      workedExample: {
        title: 'Codes à 4 chiffres et passage à 10 chiffres',
        statement:
          '1. Combien de codes à $4$ chiffres peut-on former avec les chiffres de $0$ à $9$ ?\n2. En Côte d’Ivoire, on est passé de numéros de téléphone à $8$ chiffres à des numéros à $10$ chiffres. Quel est le nombre théorique de numéros dans chaque cas ?',
        methodSteps: [
          'Un code à $4$ chiffres est un $4$-uplet de $E = \\{0;1;2;3;4;5;6;7;8;9\\}$ qui compte $n = 10$ chiffres.',
          'Comme un même chiffre peut apparaître plusieurs fois et que l’ordre compte, il y a $10^4 = 10\\,000$ codes.',
          'De même, à $8$ chiffres on obtient $10^8$ numéros possibles, contre $10^{10}$ à $10$ chiffres (soit $100$ fois plus).',
        ],
        conclusion: '$10\\,000$ codes à $4$ chiffres ; $10^8$ numéros à $8$ chiffres et $10^{10}$ à $10$ chiffres.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Produit cartésien',
          stepTitle: 'Cardinal du produit cartésien A × B',
          paragraphText:
            "Le produit cartésien $A \\times B$ rassemble tous les couples $(a;b)$ où $a \\in A$ et $b \\in B$. Par un tableau à double entrée ou un arbre, $\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B)$.",
          formula: { name: 'Produit cartésien', formula: '\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A)\\times\\mathrm{Card}(B)' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p02_q1',
            type: 'mcq',
            prompt:
              'Soient $A = \\{a;b;c\\}$ et $B = \\{1;2;3;4\\}$. Quel est le nombre de couples de $A \\times B$ ?',
            options: ['$7$', '$12$', '$64$', '$81$'],
            correctAnswerIndex: 1,
            explanation: '$\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B) = 3 \\times 4 = 12$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'p-uplets de E',
          stepTitle: 'Dénombrer les p-uplets d’un ensemble à n éléments',
          paragraphText:
            'Un $p$-uplet $(x_1; x_2; \\dots; x_p)$ d’un ensemble $E$ de cardinal $n$ dispose de $n$ choix indépendants pour chacune des $p$ positions. On a donc $\\mathrm{Card}(E^p) = n^p$.',
          formula: { name: 'Nombre de p-uplets', formula: '\\mathrm{Card}(E^p) = n^p' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p02_q2',
            type: 'mcq',
            prompt:
              'Un ensemble $E$ possède $n$ éléments. Combien de $p$-uplets (ordonnés, avec répétition possible) d’éléments de $E$ peut-on former ?',
            options: ['$p^n$', '$n\\times p$', '$n^p$', '$A_n^p$'],
            correctAnswerIndex: 2,
            explanation: 'Chaque composante du $p$-uplet admet $n$ choix, d’où $n \\times n \\times \\dots \\times n = n^p$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Arbre et principe multiplicatif',
          stepTitle: 'Multiplier les choix à chaque étape',
          paragraphText:
            "Pour une succession de $p$ choix indépendants ayant respectivement $n_1, n_2, \\dots, n_p$ possibilités, le nombre total d'issues vaut $n_1 \\times n_2 \\times \\dots \\times n_p$. Lorsque les ensembles sont identiques de taille $n$, on retrouve $n^p$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p02_q3',
            type: 'mcq',
            prompt:
              'On lance un dé cubique numéroté de $1$ à $6$ trois fois de suite et on note la suite ordonnée des trois résultats. Combien de triplets peut-on obtenir ?',
            options: ['$18$', '$216$', '$729$', '$120$'],
            correctAnswerIndex: 1,
            explanation: 'Il s’agit de $3$-uplets d’un ensemble à $6$ éléments : $6^3 = 216$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre nᵖ et pⁿ',
          stepTitle: 'Ne pas inverser la base n et l’exposant p',
          paragraphText:
            'Attention à toujours placer le nombre de choix disponibles ($n = \\mathrm{Card}(E)$) en base, et le nombre d’étapes ou de tirages ($p$) en exposant ! Pour $3$ tirages successifs avec remise dans une urne de $5$ boules, on calcule $5^3 = 125$ et non $3^5 = 243$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p02_q4',
            type: 'mcq',
            prompt:
              'On effectue $3$ tirages successifs avec remise dans une urne contenant $5$ boules numérotées de $1$ à $5$. Combien de résultats possibles obtient-on ?',
            options: ['$243$', '$125$', '$15$', '$60$'],
            correctAnswerIndex: 1,
            explanation: 'À chacun des $3$ tirages, on choisit parmi $5$ boules : $5^3 = 125$ (et non $3^5$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Codes numériques',
          stepTitle: 'Compter les codes à 4 chiffres',
          paragraphText:
            'Un code de carte bancaire comporte $4$ chiffres pris dans $\\{0;1;\\dots;9\\}$, avec répétition possible. Le nombre total de codes est donc $10^4 = 10\\,000$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p02_q5',
            type: 'mcq',
            prompt: 'Combien de codes secrets à $4$ chiffres peut-on former avec les $10$ chiffres usuels ?',
            options: ['$5\\,040$', '$40$', '$10\\,000$', '$4^{10}$'],
            correctAnswerIndex: 2,
            explanation: 'C’est le nombre de $4$-uplets de $\\{0;\\dots;9\\}$ : $10^4 = 10\\,000$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Numérotation téléphonique',
          stepTitle: 'Comparer les formats à 8 et 10 chiffres',
          paragraphText:
            'En passant de $8$ chiffres à $10$ chiffres, le nombre maximal de numéros passe de $10^8$ à $10^{10}$, soit un facteur $10^{10} / 10^8 = 10^2 = 100$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p02_q6',
            type: 'mcq',
            prompt:
              'Un menu propose $4$ entrées, $3$ plats et $2$ desserts. Combien de repas complets (1 entrée, 1 plat, 1 dessert) peut-on composer ?',
            options: ['$9$', '$24$', '$12$', '$64$'],
            correctAnswerIndex: 1,
            explanation: 'Par produit cartésien de trois ensembles : $4 \\times 3 \\times 2 = 24$ repas.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p02_q1',
          type: 'mcq',
          prompt:
            'Soient $A = \\{a;b;c\\}$ et $B = \\{1;2;3;4\\}$. Quel est le nombre de couples de $A \\times B$ ?',
          options: ['$7$', '$12$', '$64$', '$81$'],
          correctAnswerIndex: 1,
          explanation: '$\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B) = 3 \\times 4 = 12$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p02_q2',
          type: 'mcq',
          prompt:
            'Un ensemble $E$ possède $n$ éléments. Combien de $p$-uplets (ordonnés, avec répétition possible) d’éléments de $E$ peut-on former ?',
          options: ['$p^n$', '$n\\times p$', '$n^p$', '$A_n^p$'],
          correctAnswerIndex: 2,
          explanation: 'Chaque composante du $p$-uplet admet $n$ choix, d’où $n \\times n \\times \\dots \\times n = n^p$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p02_q3',
          type: 'mcq',
          prompt:
            'On lance un dé cubique numéroté de $1$ à $6$ trois fois de suite et on note la suite ordonnée des trois résultats. Combien de triplets peut-on obtenir ?',
          options: ['$18$', '$216$', '$729$', '$120$'],
          correctAnswerIndex: 1,
          explanation: 'Il s’agit de $3$-uplets d’un ensemble à $6$ éléments : $6^3 = 216$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p02_q4',
          type: 'mcq',
          prompt:
            'On effectue $3$ tirages successifs avec remise dans une urne contenant $5$ boules numérotées de $1$ à $5$. Combien de résultats possibles obtient-on ?',
          options: ['$243$', '$125$', '$15$', '$60$'],
          correctAnswerIndex: 1,
          explanation: 'À chacun des $3$ tirages, on choisit parmi $5$ boules : $5^3 = 125$ (et non $3^5$).',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p02_q5',
          type: 'mcq',
          prompt: 'Combien de codes secrets à $4$ chiffres peut-on former avec les $10$ chiffres usuels ?',
          options: ['$5\\,040$', '$40$', '$10\\,000$', '$4^{10}$'],
          correctAnswerIndex: 2,
          explanation: 'C’est le nombre de $4$-uplets de $\\{0;\\dots;9\\}$ : $10^4 = 10\\,000$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p02_q6',
          type: 'mcq',
          prompt:
            'Un menu propose $4$ entrées, $3$ plats et $2$ desserts. Combien de repas complets (1 entrée, 1 plat, 1 dessert) peut-on composer ?',
          options: ['$9$', '$24$', '$12$', '$64$'],
          correctAnswerIndex: 1,
          explanation: 'Par produit cartésien de trois ensembles : $4 \\times 3 \\times 2 = 24$ repas.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Arrangements, permutations et notation factorielle
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l04_denombrement_p03',
      order: 3,
      title: 'Arrangements, permutations et notation factorielle',
      summary: 'Compter les listes ordonnées sans répétition grâce à Aₙᵖ et n!.',
      conceptExplanation:
        "Soit $E$ un ensemble fini à $n$ éléments et $p$ un entier naturel avec $1 \\le p \\le n$.\n\n- Un **arrangement** de $p$ éléments de $E$ est un $p$-uplet d'éléments de $E$ **deux à deux distincts** (l'ordre compte, sans répétition). Le nombre d'arrangements est :\n$$A_n^p = n(n-1)(n-2)\\cdots(n-p+1) = \\dfrac{n!}{(n-p)!}$$\navec $n! = n \\times (n-1) \\times \\dots \\times 2 \\times 1$ et par convention $0! = 1$, $A_n^0 = 1$, $A_n^1 = n$.\n\n- Une **permutation** de $E$ est un arrangement des $n$ éléments de $E$ ($p = n$). Le nombre de permutations de $E$ vaut $A_n^n = n!$.",
      keyRule:
        'Ordre important ET sans répétition = arrangement Aₙᵖ = n!/(n−p)!. Si tous les n éléments sont rangés (p = n), c’est une permutation : n!.',
      formulas: [
        { name: 'Factorielle', formula: 'n! = n(n-1)\\cdots 2 \\times 1,\\quad 0! = 1' },
        {
          name: 'Nombre d’arrangements',
          formula: 'A_n^p = n(n-1)\\cdots(n-p+1) = \\dfrac{n!}{(n-p)!}',
        },
        { name: 'Nombre de permutations', formula: 'A_n^n = n!' },
      ],
      workedExample: {
        title: 'Parking de 5 places et anagrammes du mot KENDAL',
        statement:
          '1. De combien de façons $3$ voitures différentes peuvent-elles occuper $3$ places parmi $5$ places numérotées ?\n2. Combien d’anagrammes (mots avec ou sans sens) peut-on former avec les $6$ lettres distinctes du mot KENDAL ?',
        methodSteps: [
          'Pour le parking, on attribue à chaque voiture une place distincte : l’ordre compte et aucune place n’est réutilisée.',
          'Il s’agit d’un arrangement de $3$ places parmi $5$ : $A_5^3 = 5 \\times 4 \\times 3 = 60$ façons.',
          'Pour KENDAL, les $6$ lettres sont toutes distinctes : chaque anagramme est une permutation des $6$ lettres, soit $6! = 6\\times 5\\times 4\\times 3\\times 2\\times 1 = 720$ anagrammes.',
        ],
        conclusion: '$60$ dispositions sur le parking et $720$ anagrammes de KENDAL.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Arrangement sans répétition',
          stepTitle: 'Qu’est-ce qu’un arrangement de p éléments parmi n ?',
          paragraphText:
            "Un arrangement de $p$ éléments parmi $n$ ($1 \\le p \\le n$) est une liste ordonnée de $p$ éléments deux à deux distincts. On compte $n$ choix pour le premier élément, $n-1$ pour le second, jusqu'à $n-p+1$ pour le $p$-ième.",
          formula: { name: 'Produit de p facteurs', formula: 'A_n^p = n(n-1)\\cdots(n-p+1)' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p03_q1',
            type: 'mcq',
            prompt: 'De combien de façons $3$ voitures distinctes peuvent-elles se garer sur $5$ places numérotées ?',
            options: ['$125$', '$60$', '$10$', '$15$'],
            correctAnswerIndex: 1,
            explanation: 'C’est un arrangement de $3$ places parmi $5$ : $A_5^3 = 5 \\times 4 \\times 3 = 60$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Écriture factorielle',
          stepTitle: 'Exprimer Aₙᵖ à l’aide de la factorielle',
          paragraphText:
            "En multipliant et en divisant $n(n-1)\\cdots(n-p+1)$ par $(n-p)!$, on obtient la formule compacte $A_n^p = \\dfrac{n!}{(n-p)!}$. Par convention $0! = 1$, donc $A_n^0 = 1$ et $A_n^n = n!$.",
          formula: { name: 'Formule factorielle', formula: 'A_n^p = \\dfrac{n!}{(n-p)!}' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p03_q2',
            type: 'mcq',
            prompt: 'Que vaut le quotient $\\dfrac{7!}{4!}$ ?',
            options: ['$3!$', '$210$', '$840$', '$42$'],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{7!}{4!} = A_7^3 = 7 \\times 6 \\times 5 = 210$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul rapide de Aₙᵖ',
          stepTitle: 'Calculer Aₙᵖ sans écrire toutes les factorielles',
          paragraphText:
            'Pour calculer $A_n^p$ à la main, multiplie les $p$ entiers consécutifs décroissants à partir de $n$ : par exemple, $A_{10}^4$ est le produit des $4$ entiers $10 \\times 9 \\times 8 \\times 7 = 5\\,040$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p03_q3',
            type: 'mcq',
            prompt: 'Quelle est la valeur de $A_{10}^4$ ?',
            options: ['$40$', '$210$', '$5\\,040$', '$10\\,000$'],
            correctAnswerIndex: 2,
            explanation: '$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 90 \\times 56 = 5\\,040$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Dernier facteur de Aₙᵖ',
          stepTitle: 'Ne pas s’arrêter à (n − p) ni à p',
          paragraphText:
            'Le produit $A_n^p$ contient exactement $p$ facteurs et s’arrête à $(n - p + 1)$, PAS à $(n - p)$ ni à $p$ ! Ainsi, $A_7^5 = 7 \\times 6 \\times 5 \\times 4 \\times 3 = 2\\,520$ (5 facteurs, dernier facteur $7-5+1=3$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p03_q4',
            type: 'mcq',
            prompt: 'Un podium (1er, 2e, 3e) est attribué à l’issue d’une course de $8$ athlètes. Combien de podiums possibles existe-t-il ?',
            options: ['$56$', '$336$', '$512$', '$24$'],
            correctAnswerIndex: 1,
            explanation: 'L’ordre sur le podium compte et un athlète ne peut occuper deux places : $A_8^3 = 8 \\times 7 \\times 6 = 336$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Permutations',
          stepTitle: 'Compter les anagrammes sans lettres répétées',
          paragraphText:
            'Une permutation de $n$ éléments distincts revient à les ranger tous dans un ordre précis : il y en a $n!$. Le mot KENDAL comporte $6$ lettres toutes distinctes, d’où $6! = 720$ anagrammes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p03_q5',
            type: 'mcq',
            prompt: 'Combien d’anagrammes peut-on former avec les $6$ lettres distinctes du mot KENDAL ?',
            options: ['$36$', '$120$', '$720$', '$46\\,656$'],
            correctAnswerIndex: 2,
            explanation: 'Il s’agit des permutations d’un ensemble à $6$ éléments : $6! = 720$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Cas particuliers',
          stepTitle: 'Connaître Aₙ⁰, Aₙ¹ et 0!',
          paragraphText:
            'On retient $0! = 1$, $A_n^0 = \\dfrac{n!}{n!} = 1$ et $A_n^1 = n$. Par exemple, $A_7^5 = 7\\times 6\\times 5\\times 4\\times 3 = 2\\,520$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p03_q6',
            type: 'mcq',
            prompt: 'Que vaut $A_7^5$ ?',
            options: ['$21$', '$2\\,520$', '$5\\,040$', '$840$'],
            correctAnswerIndex: 1,
            explanation: '$A_7^5 = 7 \\times 6 \\times 5 \\times 4 \\times 3 = 2\\,520$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p03_q1',
          type: 'mcq',
          prompt: 'De combien de façons $3$ voitures distinctes peuvent-elles se garer sur $5$ places numérotées ?',
          options: ['$125$', '$60$', '$10$', '$15$'],
          correctAnswerIndex: 1,
          explanation: 'C’est un arrangement de $3$ places parmi $5$ : $A_5^3 = 5 \\times 4 \\times 3 = 60$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p03_q2',
          type: 'mcq',
          prompt: 'Que vaut le quotient $\\dfrac{7!}{4!}$ ?',
          options: ['$3!$', '$210$', '$840$', '$42$'],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{7!}{4!} = A_7^3 = 7 \\times 6 \\times 5 = 210$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p03_q3',
          type: 'mcq',
          prompt: 'Quelle est la valeur de $A_{10}^4$ ?',
          options: ['$40$', '$210$', '$5\\,040$', '$10\\,000$'],
          correctAnswerIndex: 2,
          explanation: '$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 90 \\times 56 = 5\\,040$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p03_q4',
          type: 'mcq',
          prompt: 'Un podium (1er, 2e, 3e) est attribué à l’issue d’une course de $8$ athlètes. Combien de podiums possibles existe-t-il ?',
          options: ['$56$', '$336$', '$512$', '$24$'],
          correctAnswerIndex: 1,
          explanation: 'L’ordre sur le podium compte et un athlète ne peut occuper deux places : $A_8^3 = 8 \\times 7 \\times 6 = 336$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p03_q5',
          type: 'mcq',
          prompt: 'Combien d’anagrammes peut-on former avec les $6$ lettres distinctes du mot KENDAL ?',
          options: ['$36$', '$120$', '$720$', '$46\\,656$'],
          correctAnswerIndex: 2,
          explanation: 'Il s’agit des permutations d’un ensemble à $6$ éléments : $6! = 720$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p03_q6',
          type: 'mcq',
          prompt: 'Que vaut $A_7^5$ ?',
          options: ['$21$', '$2\\,520$', '$5\\,040$', '$840$'],
          correctAnswerIndex: 1,
          explanation: '$A_7^5 = 7 \\times 6 \\times 5 \\times 4 \\times 3 = 2\\,520$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Combinaisons et propriétés des coefficients Cₙᵖ
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l04_denombrement_p04',
      order: 4,
      title: 'Combinaisons et propriétés des coefficients Cₙᵖ',
      summary: 'Compter les sous-ensembles sans ordre ni répétition et utiliser symétrie et relation de Pascal.',
      conceptExplanation:
        "Une **combinaison** de $p$ éléments d'un ensemble fini $E$ à $n$ éléments ($0 \\le p \\le n$) est un **sous-ensemble** (ou partie) de $p$ éléments de $E$ : **l'ordre n'intervient pas et il n'y a pas de répétition**.\n\nChaque combinaison de $p$ éléments engendre $p!$ arrangements, donc :\n$$C_n^p = \\dfrac{A_n^p}{p!} = \\dfrac{n!}{p!(n-p)!}$$\n(avec $C_n^p = 0$ si $p > n$).\n\n**Propriétés fondamentales** :\n- $C_n^0 = C_n^n = 1$ et $C_n^1 = n$.\n- **Symétrie** : $C_n^{n-p} = C_n^p$ (pour $0 \\le p \\le n$).\n- **Relation de Pascal** : $C_{n-1}^{p-1} + C_{n-1}^p = C_n^p$ (pour $1 \\le p \\le n-1$).",
      keyRule:
        'Sans ordre ET sans répétition = combinaison Cₙᵖ = Aₙᵖ / p!. Utilise Cₙᵖ = Cₙⁿ⁻ᵖ dès que p est grand (ex. C₁₀₀⁹⁸ = C₁₀₀²).',
      formulas: [
        {
          name: 'Nombre de combinaisons',
          formula: 'C_n^p = \\dfrac{A_n^p}{p!} = \\dfrac{n!}{p!(n-p)!}',
        },
        { name: 'Symétrie', formula: 'C_n^{n-p} = C_n^p' },
        { name: 'Relation de Pascal', formula: 'C_{n-1}^{p-1} + C_{n-1}^p = C_n^p' },
      ],
      workedExample: {
        title: 'Calcul de C₅³, C₁₁⁵ et simplification par symétrie',
        statement: 'Calcule $C_5^3$ et $C_{11}^5$, puis simplifie $C_{100}^{98}$ sans calculer $100!$.',
        methodSteps: [
          'Par symétrie, $C_5^3 = C_5^2 = \\dfrac{5 \\times 4}{2 \\times 1} = 10$.',
          'Pour $C_{11}^5$, on divise $A_{11}^5$ par $5!$ : $C_{11}^5 = \\dfrac{11\\times 10\\times 9\\times 8\\times 7}{5\\times 4\\times 3\\times 2\\times 1} = 11\\times 6\\times 7 = 462$.',
          'Pour $C_{100}^{98}$, on applique $C_n^{n-p} = C_n^p$ : $C_{100}^{98} = C_{100}^2 = \\dfrac{100\\times 99}{2} = 4\\,950$.',
        ],
        conclusion: '$C_5^3 = 10$, $C_{11}^5 = 462$ et $C_{100}^{98} = 4\\,950$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Combinaison de p éléments',
          stepTitle: 'Sous-ensemble à p éléments d’un ensemble à n éléments',
          paragraphText:
            "Lorsqu'on choisit simultanément $p$ éléments parmi $n$ (ou un comité de $p$ personnes sans rôles distincts), l'ordre de sélection ne compte pas : on compte des parties à $p$ éléments, au nombre de $C_n^p = \\dfrac{n!}{p!(n-p)!}$.",
          formula: { name: 'Combinaison', formula: 'C_n^p = \\dfrac{n!}{p!(n-p)!}' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p04_q1',
            type: 'mcq',
            prompt: 'Combien de groupes de $3$ élèves sans rôle particulier peut-on former dans un club de $5$ élèves ($C_5^3$) ?',
            options: ['$60$', '$10$', '$15$', '$20$'],
            correctAnswerIndex: 1,
            explanation: '$C_5^3 = \\dfrac{5\\times 4\\times 3}{3\\times 2\\times 1} = 10$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Symétrie Cₙⁿ⁻ᵖ = Cₙᵖ',
          stepTitle: 'Choisir p éléments revient à en laisser n − p',
          paragraphText:
            "Sélectionner $p$ éléments dans un ensemble de taille $n$ équivaut à désigner les $n-p$ éléments non retenus. On a donc la symétrie $C_n^{n-p} = C_n^p$, très utile quand $p$ est proche de $n$.",
          formula: { name: 'Symétrie', formula: 'C_n^{n-p} = C_n^p' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p04_q2',
            type: 'mcq',
            prompt: 'À quel coefficient est égal $C_{100}^{95}$ par symétrie ?',
            options: ['$C_{100}^5$', '$C_{95}^5$', '$C_{100}^{94}$', '$C_{99}^5$'],
            correctAnswerIndex: 0,
            explanation: 'Par symétrie, $C_{100}^{95} = C_{100}^{100-95} = C_{100}^5$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Relation de Pascal',
          stepTitle: 'Additionner deux coefficients consécutifs',
          paragraphText:
            'Pour $1 \\le p \\le n-1$, la formule de Pascal permet de construire les coefficients de proche en proche : $C_{n-1}^{p-1} + C_{n-1}^p = C_n^p$.',
          formula: { name: 'Formule de Pascal', formula: 'C_{n-1}^{p-1} + C_{n-1}^p = C_n^p' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p04_q3',
            type: 'mcq',
            prompt: 'D’après la formule de Pascal, que vaut la somme $C_{12}^4 + C_{12}^5$ ?',
            options: ['$C_{13}^4$', '$C_{13}^5$', '$C_{12}^9$', '$C_{24}^9$'],
            correctAnswerIndex: 1,
            explanation: 'Avec $n - 1 = 12$ et $p = 5$, on a $C_{12}^4 + C_{12}^5 = C_{13}^5$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier de diviser par p!',
          stepTitle: 'Ne pas confondre Cₙᵖ et Aₙᵖ',
          paragraphText:
            'Une combinaison ne tient pas compte de l’ordre : pour une même sélection de $p$ éléments, il existe $p!$ façons de les ordonner. Il faut donc toujours diviser $A_n^p$ par $p!$ ! Par exemple, $A_{11}^5 = 55\\,440$, mais $C_{11}^5 = \\dfrac{55\\,440}{120} = 462$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p04_q4',
            type: 'mcq',
            prompt: 'Quelle est la valeur exacte de $C_{11}^5$ ?',
            options: ['$231$', '$462$', '$55\\,440$', '$330$'],
            correctAnswerIndex: 1,
            explanation: '$C_{11}^5 = \\dfrac{11\\times 10\\times 9\\times 8\\times 7}{5\\times 4\\times 3\\times 2\\times 1} = 11 \\times 6 \\times 7 = 462$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul simplifié de C₁₀₀⁹⁸',
          stepTitle: 'Réduire un grand indice par symétrie avant de calculer',
          paragraphText:
            'Pour calculer $C_{100}^{98}$, n’écris surtout pas $98$ facteurs ! Utilise $C_{100}^{98} = C_{100}^2 = \\dfrac{100 \\times 99}{2} = 4\\,950$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p04_q5',
            type: 'mcq',
            prompt: 'Que vaut $C_{100}^{98}$ ?',
            options: ['$9\\,900$', '$4\\,950$', '$98$', '$198$'],
            correctAnswerIndex: 1,
            explanation: '$C_{100}^{98} = C_{100}^2 = \\dfrac{100\\times 99}{2} = 50\\times 99 = 4\\,950$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Jeu de 32 cartes',
          stepTitle: 'Compter les mains de 8 cartes dans un jeu de 32 cartes',
          paragraphText:
            'Dans un jeu de $32$ cartes, une « main » de $8$ cartes est un tirage simultané (sans ordre ni remise). Le nombre total de mains possibles est $C_{32}^8 = 10\\,518\\,300$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p04_q6',
            type: 'mcq',
            prompt:
              'Un jury de $4$ membres (sans présidence ni hiérarchie) doit être choisi parmi $9$ candidats. Quelle expression donne le nombre de jurys possibles ?',
            options: ['$A_9^4$', '$9^4$', '$C_9^4$', '$4!$'],
            correctAnswerIndex: 2,
            explanation: 'Les $4$ membres jouent le même rôle (pas d’ordre) et sont distincts : c’est $C_9^4 = 126$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p04_q1',
          type: 'mcq',
          prompt: 'Combien de groupes de $3$ élèves sans rôle particulier peut-on former dans un club de $5$ élèves ($C_5^3$) ?',
          options: ['$60$', '$10$', '$15$', '$20$'],
          correctAnswerIndex: 1,
          explanation: '$C_5^3 = \\dfrac{5\\times 4\\times 3}{3\\times 2\\times 1} = 10$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p04_q2',
          type: 'mcq',
          prompt: 'À quel coefficient est égal $C_{100}^{95}$ par symétrie ?',
          options: ['$C_{100}^5$', '$C_{95}^5$', '$C_{100}^{94}$', '$C_{99}^5$'],
          correctAnswerIndex: 0,
          explanation: 'Par symétrie, $C_{100}^{95} = C_{100}^{100-95} = C_{100}^5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p04_q3',
          type: 'mcq',
          prompt: 'D’après la formule de Pascal, que vaut la somme $C_{12}^4 + C_{12}^5$ ?',
          options: ['$C_{13}^4$', '$C_{13}^5$', '$C_{12}^9$', '$C_{24}^9$'],
          correctAnswerIndex: 1,
          explanation: 'Avec $n - 1 = 12$ et $p = 5$, on a $C_{12}^4 + C_{12}^5 = C_{13}^5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p04_q4',
          type: 'mcq',
          prompt: 'Quelle est la valeur exacte de $C_{11}^5$ ?',
          options: ['$231$', '$462$', '$55\\,440$', '$330$'],
          correctAnswerIndex: 1,
          explanation: '$C_{11}^5 = \\dfrac{11\\times 10\\times 9\\times 8\\times 7}{5\\times 4\\times 3\\times 2\\times 1} = 11 \\times 6 \\times 7 = 462$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p04_q5',
          type: 'mcq',
          prompt: 'Que vaut $C_{100}^{98}$ ?',
          options: ['$9\\,900$', '$4\\,950$', '$98$', '$198$'],
          correctAnswerIndex: 1,
          explanation: '$C_{100}^{98} = C_{100}^2 = \\dfrac{100\\times 99}{2} = 50\\times 99 = 4\\,950$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p04_q6',
          type: 'mcq',
          prompt:
            'Un jury de $4$ membres (sans présidence ni hiérarchie) doit être choisi parmi $9$ candidats. Quelle expression donne le nombre de jurys possibles ?',
          options: ['$A_9^4$', '$9^4$', '$C_9^4$', '$4!$'],
          correctAnswerIndex: 2,
          explanation: 'Les $4$ membres jouent le même rôle (pas d’ordre) et sont distincts : c’est $C_9^4 = 126$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Modéliser un tirage et traiter « au moins » / « au plus »
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l04_denombrement_p05',
      order: 5,
      title: 'Modéliser un tirage et compter « au moins » ou « au plus »',
      summary: 'Choisir le bon outil (Cₙᵖ, Aₙᵖ, nᵖ) selon le type de tirage et utiliser l’événement contraire.',
      conceptExplanation:
        "Devant tout problème de tirage de $p$ éléments parmi $n$, on se pose deux questions : **l'ordre compte-t-il ?** et **la répétition est-elle possible ?**\n\n- **Tirage simultané** (sans ordre, sans remise) : **combinaisons** $C_n^p$.\n- **Tirage successif sans remise** (avec ordre, sans remise) : **arrangements** $A_n^p$ (ou $n!$ si $p=n$).\n- **Tirage successif avec remise** (avec ordre, avec remise) : **$p$-uplets** $n^p$.\n\nPour compter des situations contraintes :\n- **« Exactement $k$ objets de type $T$ »** : on multiplie les combinaisons de chaque catégorie (ex. $C_4^2 \\times C_{28}^6$).\n- **« Au moins 1 »** : il est souvent bien plus rapide de passer au **complémentaire** : $\\text{Total} - \\text{« aucun »}$.\n- **« Au plus $k$ »** : somme des cas disjoints $0, 1, \\dots, k$.",
      keyRule:
        'Simultané → Cₙᵖ ; successif sans remise → Aₙᵖ ; successif avec remise → nᵖ. Pour « au moins 1 », calcule Total − « aucun » !',
      formulas: [
        { name: 'Tirage simultané', formula: '\\text{Sans ordre, sans remise} \\implies C_n^p' },
        { name: 'Successif sans remise', formula: '\\text{Avec ordre, sans remise} \\implies A_n^p' },
        { name: 'Successif avec remise', formula: '\\text{Avec ordre, avec remise} \\implies n^p' },
        { name: 'Passage au contraire', formula: '\\text{« Au moins 1 »} = \\text{Total} - \\text{« Aucun »}' },
      ],
      workedExample: {
        title: 'Mains de 8 cartes dans un jeu de 32 cartes',
        statement:
          'On tire simultanément $8$ cartes d’un jeu de $32$ cartes ($4$ as, $8$ cartes par couleur : cœur, pique, trèfle, carreau). Combien de mains contiennent :\n1. Exactement $2$ as ?\n2. Au moins $1$ as ?\n3. $2$ cœurs, $3$ piques et $1$ trèfle ?',
        methodSteps: [
          '1. Pour avoir exactement $2$ as, on choisit $2$ as parmi $4$ et $6$ non-as parmi $28$ : $C_4^2 \\times C_{28}^6 = 6 \\times 376\\,740 = 2\\,260\\,440$.',
          '2. Nombre total de mains : $C_{32}^8 = 10\\,518\\,300$. Mains sans aucun as : $C_{28}^8 = 3\\,108\\,105$. Donc avec au moins $1$ as : $C_{32}^8 - C_{28}^8 = 7\\,410\\,195$.',
          '3. Il reste $8 - (2+3+1) = 2$ cartes à prendre dans les carreaux : $C_8^2 \\times C_8^3 \\times C_8^1 \\times C_8^2 = 28 \\times 56 \\times 8 \\times 28 = 351\\,232$.',
        ],
        conclusion: 'Respectivement $2\\,260\\,440$, $7\\,410\\,195$ et $351\\,232$ mains.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Les 3 modes de tirage',
          stepTitle: 'Reconnaître immédiatement le modèle adapté',
          paragraphText:
            "Dans une kermesse, un joueur tire $2$ tickets dans une urne de $4$ tickets numérotés. S'il tire simultanément : $C_4^2 = 6$ paires ; successivement sans remise : $A_4^2 = 12$ couples distincts ; successivement avec remise : $4^2 = 16$ couples.",
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p05_q1',
            type: 'mcq',
            prompt:
              'Un sac contient $4$ jetons distincts et on en tire $2$. Quels sont respectivement les nombres de résultats possibles en tirage simultané, successif sans remise et successif avec remise ?',
            options: ['$6$, $12$ et $16$', '$12$, $6$ et $16$', '$6$, $16$ et $12$', '$8$, $12$ et $16$'],
            correctAnswerIndex: 0,
            explanation: 'Simultané : $C_4^2 = 6$ ; successif sans remise : $A_4^2 = 12$ ; successif avec remise : $4^2 = 16$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Stratification par catégories',
          stepTitle: 'Multiplier les combinaisons sur des sous-ensembles disjoints',
          paragraphText:
            'Pour choisir $2$ as parmi $4$ ET compléter la main de $8$ cartes avec $6$ cartes parmi les $28$ qui ne sont pas des as, on multiplie les nombres de choix : $C_4^2 \\times C_{28}^6$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p05_q2',
            type: 'mcq',
            prompt:
              'Dans un jeu de $32$ cartes ($4$ as et $28$ autres cartes), quelle expression donne le nombre de mains de $8$ cartes contenant exactement $2$ as ?',
            options: ['$C_4^2 + C_{28}^6$', '$C_4^2 \\times C_{28}^6$', '$C_4^2 \\times C_{32}^6$', '$A_4^2 \\times A_{28}^6$'],
            correctAnswerIndex: 1,
            explanation: 'On associe à chaque choix de $2$ as parmi $4$ un choix de $6$ non-as parmi $28$ : $C_4^2 \\times C_{28}^6$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Événement contraire « au moins 1 »',
          stepTitle: 'Passer par le complémentaire pour « au moins 1 »',
          paragraphText:
            'Compter « au moins 1 as » directement demanderait d’additionner 4 cas (1, 2, 3 ou 4 as). Il est bien plus simple de retrancher du total $C_{32}^8$ les mains sans aucun as ($C_{28}^8$) : $C_{32}^8 - C_{28}^8 = 7\\,410\\,195$.',
          formula: { name: 'Au moins un as', formula: 'C_{32}^8 - C_{28}^8' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p05_q3',
            type: 'mcq',
            prompt:
              'Dans un jeu de $32$ cartes, comment calcule-t-on le plus efficacement le nombre de mains de $8$ cartes contenant au moins $1$ as ?',
            options: ['$C_{32}^8 - C_{28}^8$', '$C_4^1 \\times C_{28}^7$', '$C_4^1 \\times C_{31}^7$', '$C_{32}^8 - C_4^4$'],
            correctAnswerIndex: 0,
            explanation: 'Le contraire de « au moins $1$ as » est « aucun as » ($C_{28}^8$), donc on calcule $C_{32}^8 - C_{28}^8$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Double comptage avec C₄¹ × C₃₁⁷',
          stepTitle: 'Pourquoi C₄¹ × C₃₁⁷ est FAUX pour « au moins 1 as »',
          paragraphText:
            'Attention : choisir $1$ as parmi $4$ puis $7$ cartes quelconques parmi les $31$ restantes ($C_4^1 \\times C_{31}^7$) compte en double les mains à $2$ as, en triple les mains à $3$ as, etc. ! Il faut soit sommer les cas disjoints ($1, 2, 3, 4$ as exacts), soit faire $C_{32}^8 - C_{28}^8$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p05_q4',
            type: 'mcq',
            prompt:
              'Dans une urne contenant $5$ boules blanches et $4$ boules noires, on tire simultanément $3$ boules. Combien de tirages comportent au moins $1$ boule noire ?',
            options: ['$74$', '$10$', '$84$', '$40$'],
            correctAnswerIndex: 0,
            explanation: 'Total $C_9^3 = 84$. Tirages sans boule noire (que des blanches) : $C_5^3 = 10$. Donc $84 - 10 = 74$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: '« Au plus k »',
          stepTitle: 'Additionner les cas disjoints pour « au plus 2 as »',
          paragraphText:
            'Une main contient « au plus $2$ as » si elle en contient $0$, $1$ ou $2$. Ces trois cas étant deux à deux disjoints, on additionne : $C_{28}^8 + C_4^1 C_{28}^7 + C_4^2 C_{28}^6$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p05_q5',
            type: 'mcq',
            prompt:
              'Quelle expression donne le nombre de mains de $8$ cartes contenant au plus $2$ as dans un jeu de $32$ cartes ?',
            options: [
              '$C_{28}^8 + C_4^1 C_{28}^7 + C_4^2 C_{28}^6$',
              '$C_4^2 C_{28}^6$',
              '$C_{32}^8 - C_4^2 C_{28}^6$',
              '$C_4^1 C_{28}^7 + C_4^2 C_{28}^6$',
            ],
            correctAnswerIndex: 0,
            explanation: '« Au plus 2 as » regroupe les cas disjoints : $0$ as ($C_{28}^8$), $1$ as ($C_4^1 C_{28}^7$) et $2$ as ($C_4^2 C_{28}^6$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Contraintes multiples sur les couleurs',
          stepTitle: 'Compléter la main jusqu’à 8 cartes',
          paragraphText:
            'Dans un jeu de $32$ cartes ($8$ de chaque couleur), une main de $8$ cartes contenant exactement $2$ cœurs et $3$ piques demande encore $3$ autres cartes parmi les $16$ cartes trèfle/carreau : $C_8^2 \\times C_8^3 \\times C_{16}^3 = 28 \\times 56 \\times 560 = 878\\,080$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p05_q6',
            type: 'mcq',
            prompt:
              'Dans un jeu de $32$ cartes ($8$ par couleur), quelle expression compte les mains de $8$ cartes contenant exactement $2$ cœurs, $3$ piques et $1$ trèfle ?',
            options: [
              '$C_8^2 \\times C_8^3 \\times C_8^1$',
              '$C_8^2 \\times C_8^3 \\times C_8^1 \\times C_8^2$',
              '$C_8^2 \\times C_8^3 \\times C_8^1 \\times C_{26}^2$',
              '$C_8^2 + C_8^3 + C_8^1$',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Comme il y a exactement $2$ cœurs, $3$ piques et $1$ trèfle ($6$ cartes), les $2$ dernières cartes sont obligatoirement prises parmi les $8$ carreaux : $C_8^2 \\times C_8^3 \\times C_8^1 \\times C_8^2$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p05_q1',
          type: 'mcq',
          prompt:
            'Un sac contient $4$ jetons distincts et on en tire $2$. Quels sont respectivement les nombres de résultats possibles en tirage simultané, successif sans remise et successif avec remise ?',
          options: ['$6$, $12$ et $16$', '$12$, $6$ et $16$', '$6$, $16$ et $12$', '$8$, $12$ et $16$'],
          correctAnswerIndex: 0,
          explanation: 'Simultané : $C_4^2 = 6$ ; successif sans remise : $A_4^2 = 12$ ; successif avec remise : $4^2 = 16$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p05_q2',
          type: 'mcq',
          prompt:
            'Dans un jeu de $32$ cartes ($4$ as et $28$ autres cartes), quelle expression donne le nombre de mains de $8$ cartes contenant exactement $2$ as ?',
          options: ['$C_4^2 + C_{28}^6$', '$C_4^2 \\times C_{28}^6$', '$C_4^2 \\times C_{32}^6$', '$A_4^2 \\times A_{28}^6$'],
          correctAnswerIndex: 1,
          explanation: 'On associe à chaque choix de $2$ as parmi $4$ un choix de $6$ non-as parmi $28$ : $C_4^2 \\times C_{28}^6$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p05_q3',
          type: 'mcq',
          prompt:
            'Dans un jeu de $32$ cartes, comment calcule-t-on le plus efficacement le nombre de mains de $8$ cartes contenant au moins $1$ as ?',
          options: ['$C_{32}^8 - C_{28}^8$', '$C_4^1 \\times C_{28}^7$', '$C_4^1 \\times C_{31}^7$', '$C_{32}^8 - C_4^4$'],
          correctAnswerIndex: 0,
          explanation: 'Le contraire de « au moins $1$ as » est « aucun as » ($C_{28}^8$), donc on calcule $C_{32}^8 - C_{28}^8$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p05_q4',
          type: 'mcq',
          prompt:
            'Dans une urne contenant $5$ boules blanches et $4$ boules noires, on tire simultanément $3$ boules. Combien de tirages comportent au moins $1$ boule noire ?',
          options: ['$74$', '$10$', '$84$', '$40$'],
          correctAnswerIndex: 0,
          explanation: 'Total $C_9^3 = 84$. Tirages sans boule noire (que des blanches) : $C_5^3 = 10$. Donc $84 - 10 = 74$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p05_q5',
          type: 'mcq',
          prompt:
            'Quelle expression donne le nombre de mains de $8$ cartes contenant au plus $2$ as dans un jeu de $32$ cartes ?',
          options: [
            '$C_{28}^8 + C_4^1 C_{28}^7 + C_4^2 C_{28}^6$',
            '$C_4^2 C_{28}^6$',
            '$C_{32}^8 - C_4^2 C_{28}^6$',
            '$C_4^1 C_{28}^7 + C_4^2 C_{28}^6$',
          ],
          correctAnswerIndex: 0,
          explanation: '« Au plus 2 as » regroupe les cas disjoints : $0$ as ($C_{28}^8$), $1$ as ($C_4^1 C_{28}^7$) et $2$ as ($C_4^2 C_{28}^6$).',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p05_q6',
          type: 'mcq',
          prompt:
            'Dans un jeu de $32$ cartes ($8$ par couleur), quelle expression compte les mains de $8$ cartes contenant exactement $2$ cœurs, $3$ piques et $1$ trèfle ?',
          options: [
            '$C_8^2 \\times C_8^3 \\times C_8^1$',
            '$C_8^2 \\times C_8^3 \\times C_8^1 \\times C_8^2$',
            '$C_8^2 \\times C_8^3 \\times C_8^1 \\times C_{26}^2$',
            '$C_8^2 + C_8^3 + C_8^1$',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Comme il y a exactement $2$ cœurs, $3$ piques et $1$ trèfle ($6$ cartes), les $2$ dernières cartes sont obligatoirement prises parmi les $8$ carreaux : $C_8^2 \\times C_8^3 \\times C_8^1 \\times C_8^2$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Binôme de Newton et triangle de Pascal
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l04_denombrement_p06',
      order: 6,
      title: 'Binôme de Newton et triangle de Pascal',
      summary: 'Développer (a + b)ⁿ avec la formule du binôme de Newton et le triangle de Pascal.',
      conceptExplanation:
        "Pour tous nombres réels $a$ et $b$ et tout entier naturel $n \\ge 1$, la **formule du binôme de Newton** s'écrit :\n$$(a+b)^n = \\sum_{k=0}^{n} C_n^k\\, a^{n-k} b^k = C_n^0 a^n + C_n^1 a^{n-1}b + \\dots + C_n^{n-1} a b^{n-1} + C_n^n b^n$$\n\nLes coefficients $C_n^k$ sont donnés ligne par ligne par le **triangle de Pascal** grâce à la relation $C_{n-1}^{k-1} + C_{n-1}^k = C_n^k$ :\n- $n=2$ : $1,\\ 2,\\ 1$\n- $n=3$ : $1,\\ 3,\\ 3,\\ 1$\n- $n=4$ : $1,\\ 4,\\ 6,\\ 4,\\ 1$\n- $n=5$ : $1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1$\n\nEn remplaçant $b$ par $-b$, les signes alternent : $(a-b)^n = \\sum_{k=0}^n (-1)^k C_n^k a^{n-k} b^k$.",
      keyRule:
        'Dans chaque terme Cₙᵏ aⁿ⁻ᵏ bᵏ du développement de (a + b)ⁿ, la somme des exposants vaut toujours n.',
      formulas: [
        {
          name: 'Formule du binôme de Newton',
          formula: '(a+b)^n = \\sum_{k=0}^n C_n^k\\, a^{n-k} b^k',
        },
        {
          name: 'Somme des coefficients binomiaux',
          formula: '\\sum_{k=0}^n C_n^k = (1+1)^n = 2^n',
        },
      ],
      workedExample: {
        title: 'Développer (3 + b)⁴ et (a − b)⁵',
        statement: 'À l’aide du triangle de Pascal, développe $(3+b)^4$ et $(a-b)^5$.',
        methodSteps: [
          'La ligne $n=4$ du triangle de Pascal est $1, 4, 6, 4, 1$.',
          '$(3+b)^4 = 1\\cdot 3^4 + 4\\cdot 3^3 b + 6\\cdot 3^2 b^2 + 4\\cdot 3 b^3 + 1\\cdot b^4 = 81 + 108b + 54b^2 + 12b^3 + b^4$.',
          'La ligne $n=5$ est $1, 5, 10, 10, 5, 1$ et avec $(-b)^k$ les signes alternent :',
          '$(a-b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$.',
        ],
        conclusion: '$(3+b)^4 = 81 + 108b + 54b^2 + 12b^3 + b^4$ et $(a-b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Triangle de Pascal',
          stepTitle: 'Lire les coefficients Cₙᵏ dans le triangle de Pascal',
          paragraphText:
            'Chaque ligne $n$ commence et finit par $1$, et chaque terme intérieur est la somme des deux termes juste au-dessus ($C_{n-1}^{k-1} + C_{n-1}^k = C_n^k$). Pour $n=5$, on obtient $1, 5, 10, 10, 5, 1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p06_q1',
            type: 'mcq',
            prompt: 'Quelle est la ligne $n = 5$ du triangle de Pascal (valeurs de $C_5^0, C_5^1, \\dots, C_5^5$) ?',
            options: [
              '$1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1$',
              '$1,\\ 4,\\ 6,\\ 4,\\ 1$',
              '$1,\\ 5,\\ 10,\\ 5,\\ 1$',
              '$1,\\ 6,\\ 15,\\ 20,\\ 15,\\ 6,\\ 1$',
            ],
            correctAnswerIndex: 0,
            explanation: 'À partir de $n=4$ ($1, 4, 6, 4, 1$), on ajoute par paires : $1, 5, 10, 10, 5, 1$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formule générale',
          stepTitle: 'Terme général du développement de (a + b)ⁿ',
          paragraphText:
            "Dans le développement de $(a+b)^n = \\sum_{k=0}^n C_n^k\\, a^{n-k} b^k$, l'exposant de $a$ diminue de $n$ à $0$ tandis que celui de $b$ augmente de $0$ à $n$, leur somme restant égale à $n$.",
          formula: { name: 'Terme de rang k', formula: 'C_n^k\\, a^{n-k} b^k' },
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p06_q2',
            type: 'mcq',
            prompt: 'Quel est le coefficient de $x^2$ dans le développement de $(x + 2)^5$ ?',
            options: ['$10$', '$40$', '$80$', '$160$'],
            correctAnswerIndex: 2,
            explanation: 'Le terme en $x^2$ correspond à $k = 3$ : $C_5^3 x^2 \\cdot 2^3 = 10 \\times 8\\, x^2 = 80\\, x^2$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Développer (3 + b)⁴',
          stepTitle: 'Appliquer les puissances de 3 terme par terme',
          paragraphText:
            'Ne jamais oublier d’élever le nombre $3$ à la puissance $4-k$ en plus du coefficient binomial $C_4^k$ : pour $(3+b)^4$, les coefficients de $b^0, b^1, b^2, b^3, b^4$ sont $1\\cdot 81$, $4\\cdot 27$, $6\\cdot 9$, $4\\cdot 3$ et $1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p06_q3',
            type: 'mcq',
            prompt: 'Quel est le développement correct de $(3 + b)^4$ ?',
            options: [
              '$81 + 108b + 54b^2 + 12b^3 + b^4$',
              '$81 + 4b + 6b^2 + 4b^3 + b^4$',
              '$81 + 27b + 9b^2 + 3b^3 + b^4$',
              '$81 + 54b + 54b^2 + 12b^3 + b^4$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$(3+b)^4 = 1\\cdot 3^4 + 4\\cdot 3^3 b + 6\\cdot 3^2 b^2 + 4\\cdot 3 b^3 + b^4 = 81 + 108b + 54b^2 + 12b^3 + b^4$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe moins dans (a − b)ⁿ',
          stepTitle: 'Gérer l’alternance des signes dans (a − b)ⁿ',
          paragraphText:
            "Dans $(a - b)^n = (a + (-b))^n$, le facteur $(-b)^k = (-1)^k b^k$ est négatif pour $k$ impair et positif pour $k$ pair ! Évite d'écrire tous les signes « $+$ » ou de mettre « $-$ » devant tous les termes.",
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p06_q4',
            type: 'mcq',
            prompt: 'Quel est le développement de $(a - b)^5$ ?',
            options: [
              '$a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$',
              '$a^5 - 5a^4b - 10a^3b^2 - 10a^2b^3 - 5ab^4 - b^5$',
              '$a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 - b^5$',
              '$a^5 - b^5$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Avec $n=5$ ($1,5,10,10,5,1$) et $(-b)^k$, les signes alternent : $+, -, +, -, +, -$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Somme des Cₙᵏ',
          stepTitle: 'Nombre total de parties d’un ensemble à n éléments',
          paragraphText:
            'En posant $a = 1$ et $b = 1$ dans la formule du binôme, on obtient $C_n^0 + C_n^1 + \\dots + C_n^n = (1+1)^n = 2^n$. Ainsi, un ensemble à $n$ éléments possède exactement $2^n$ sous-ensembles (y compris $\\emptyset$ et lui-même).',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p06_q5',
            type: 'mcq',
            prompt: 'Que vaut la somme $C_6^0 + C_6^1 + C_6^2 + C_6^3 + C_6^4 + C_6^5 + C_6^6$ ?',
            options: ['$36$', '$64$', '$128$', '$720$'],
            correctAnswerIndex: 1,
            explanation: 'Par la formule du binôme avec $a=b=1$, cette somme vaut $(1+1)^6 = 2^6 = 64$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Expression avec x − 1',
          stepTitle: 'Développer (x − 1)⁴',
          paragraphText:
            'Avec la ligne $1, 4, 6, 4, 1$ et les signes alternés, $(x-1)^4 = x^4 - 4x^3 + 6x^2 - 4x + 1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l04_denombrement_p06_q6',
            type: 'mcq',
            prompt: 'Que vaut la somme alternée $C_5^0 - C_5^1 + C_5^2 - C_5^3 + C_5^4 - C_5^5$ ?',
            options: ['$32$', '$1$', '$0$', '$-32$'],
            correctAnswerIndex: 2,
            explanation: 'C’est le développement de $(1 - 1)^5 = 0^5 = 0$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p06_q1',
          type: 'mcq',
          prompt: 'Quelle est la ligne $n = 5$ du triangle de Pascal (valeurs de $C_5^0, C_5^1, \\dots, C_5^5$) ?',
          options: [
            '$1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1$',
            '$1,\\ 4,\\ 6,\\ 4,\\ 1$',
            '$1,\\ 5,\\ 10,\\ 5,\\ 1$',
            '$1,\\ 6,\\ 15,\\ 20,\\ 15,\\ 6,\\ 1$',
          ],
          correctAnswerIndex: 0,
          explanation: 'À partir de $n=4$ ($1, 4, 6, 4, 1$), on ajoute par paires : $1, 5, 10, 10, 5, 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p06_q2',
          type: 'mcq',
          prompt: 'Quel est le coefficient de $x^2$ dans le développement de $(x + 2)^5$ ?',
          options: ['$10$', '$40$', '$80$', '$160$'],
          correctAnswerIndex: 2,
          explanation: 'Le terme en $x^2$ correspond à $k = 3$ : $C_5^3 x^2 \\cdot 2^3 = 10 \\times 8\\, x^2 = 80\\, x^2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p06_q3',
          type: 'mcq',
          prompt: 'Quel est le développement correct de $(3 + b)^4$ ?',
          options: [
            '$81 + 108b + 54b^2 + 12b^3 + b^4$',
            '$81 + 4b + 6b^2 + 4b^3 + b^4$',
            '$81 + 27b + 9b^2 + 3b^3 + b^4$',
            '$81 + 54b + 54b^2 + 12b^3 + b^4$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$(3+b)^4 = 1\\cdot 3^4 + 4\\cdot 3^3 b + 6\\cdot 3^2 b^2 + 4\\cdot 3 b^3 + b^4 = 81 + 108b + 54b^2 + 12b^3 + b^4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p06_q4',
          type: 'mcq',
          prompt: 'Quel est le développement de $(a - b)^5$ ?',
          options: [
            '$a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$',
            '$a^5 - 5a^4b - 10a^3b^2 - 10a^2b^3 - 5ab^4 - b^5$',
            '$a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 - b^5$',
            '$a^5 - b^5$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Avec $n=5$ ($1,5,10,10,5,1$) et $(-b)^k$, les signes alternent : $+, -, +, -, +, -$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p06_q5',
          type: 'mcq',
          prompt: 'Que vaut la somme $C_6^0 + C_6^1 + C_6^2 + C_6^3 + C_6^4 + C_6^5 + C_6^6$ ?',
          options: ['$36$', '$64$', '$128$', '$720$'],
          correctAnswerIndex: 1,
          explanation: 'Par la formule du binôme avec $a=b=1$, cette somme vaut $(1+1)^6 = 2^6 = 64$.',
        },
        {
          id: 'premiere_c_maths_numerique_l04_denombrement_p06_q6',
          type: 'mcq',
          prompt: 'Que vaut la somme alternée $C_5^0 - C_5^1 + C_5^2 - C_5^3 + C_5^4 - C_5^5$ ?',
          options: ['$32$', '$1$', '$0$', '$-32$'],
          correctAnswerIndex: 2,
          explanation: 'C’est le développement de $(1 - 1)^5 = 0^5 = 0$.',
        },
      ],
    },
  ],
};

