import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CD - Chimie Organique - Quelques composés oxygénés » (format v2).
export const CHIMIE_1RE_CD_L04_COMPOSES_OXYGENES: CurriculumChapter = {
  id: 'premiere_c_chimie_l04_composes_oxygenes',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 4,
  title: 'Leçon 4 : Quelques composés oxygénés',
  summary:
    'Identifier et nommer les 6 principales familles de composés oxygénés (alcools et leurs 3 classes, éthers-oxydes, aldéhydes, cétones, acides carboxyliques, esters), maîtriser leurs formules brutes et leurs intérêts pratiques.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CD - Chimie Organique : Quelques composés oxygénés.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Alcools et éthers-oxydes (fonctions, classes, formule CₙH₂ₙ₊₂O)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l04_composes_oxygenes_p01',
      order: 1,
      title: 'Alcools, éthers-oxydes et classes d’alcools',
      summary:
        'Distinguer le groupe hydroxyle –OH d’un alcool du pont –O– d’un éther-oxyde, connaître leur formule brute commune CₙH₂ₙ₊₂O et identifier alcool primaire, secondaire et tertiaire.',
      conceptExplanation:
        "Un **composé oxygéné** est un composé organique dont la molécule renferme, en plus de $\\mathrm{C}$ et $\\mathrm{H}$, au moins un atome d’oxygène ($\\mathrm{O}$). Les deux premières familles possèdent la même formule brute saturée :\n\n1. **Les alcools** : composés organiques dans lesquels un **groupe hydroxyle** ($-\\mathrm{OH}$) est fixé sur un **atome de carbone tétragonal** (lié uniquement par des liaisons simples), appelé *carbone fonctionnel*. Formule brute générale : $\\mathrm{C_nH_{2n+2}O}$ ($n \\ge 1$), de masse molaire $M = 14n + 18\\text{ g/mol}$.\n   - **Trois classes d’alcools** selon le nombre de groupes alkyles portés par le carbone fonctionnel :\n     - **Alcool primaire** ($\\mathrm{R-CH_2-OH}$ ou $\\mathrm{CH_3-OH}$) : le carbone portant $-\\mathrm{OH}$ est lié à $0$ ou $1$ autre carbone (ex. éthanol, propan-1-ol).\n     - **Alcool secondaire** ($\\mathrm{R-CH(OH)-R'}$) : lié à $2$ groupes alkyles (ex. propan-2-ol, butan-2-ol).\n     - **Alcool tertiaire** ($\\mathrm{R-C(OH)(R')-R''}$) : lié à $3$ groupes alkyles (ex. 2-méthylpropan-2-ol).\n2. **Les éthers-oxydes** : composés dans lesquels un atome d’oxygène est **directement lié à deux atomes de carbone tétragonaux** : $\\mathrm{R_1-O-R_2}$ (avec $R_1, R_2$ groupes alkyles). Ils ont aussi pour formule brute générale $\\mathrm{C_nH_{2n+2}O}$ ($n \\ge 2$) : alcools et éthers-oxydes sont donc des **isomères de fonction**.",
      keyRule:
        'Alcools (R–OH) et éthers-oxydes (R₁–O–R₂) partagent la formule brute CₙH₂ₙ₊₂O ; la classe d’un alcool (I, II ou III) dépend du nombre de carbones directement liés au carbone porteur de –OH.',
      formulas: [
        {
          name: 'Formule brute des alcools et éthers-oxydes saturés',
          formula: '\\mathrm{C_nH_{2n+2}O}, \\quad M = 14n + 18\\text{ g/mol}',
          note: 'Alcools dès n ≥ 1 (méthanol CH₃OH) ; éthers-oxydes dès n ≥ 2 (CH₃-O-CH₃)',
        },
      ],
      workedExample: {
        title: 'Trouver tous les isomères de formule brute C₃H₈O (Exercice 2 p. 6)',
        statement:
          'Écris toutes les formules semi-développées possibles d’un composé oxygéné de formule brute $\\mathrm{C_3H_8O}$, précise leur famille et la classe des alcools obtenus.',
        methodSteps: [
          '1) Vérifions la formule générale : pour n = 3, 2n + 2 = 8, donc C₃H₈O correspond à un alcool ou à un éther-oxyde.',
          '2) Alcools : CH₃-CH₂-CH₂-OH (propan-1-ol, alcool primaire car le carbone fonctionnel porte 1 seul carbone) et CH₃-CH(OH)-CH₃ (propan-2-ol, alcool secondaire car le carbone fonctionnel porte 2 carbones).',
          '3) Éther-oxyde : CH₃-CH₂-O-CH₃ (oxyde d’éthyle et de méthyle ou méthoxyéthane).',
        ],
        conclusion:
          'C₃H₈O possède exactement 3 isomères : deux alcools (primaire et secondaire) et un éther-oxyde.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Alcool',
          stepTheme: 'Groupe fonctionnel',
          stepTitle: 'Reconnaître un alcool et son carbone fonctionnel',
          paragraphText:
            'Dans un alcool, le groupe hydroxyle –OH est obligatoirement porté par un carbone tétragonal (ne formant que des liaisons simples).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q1',
            type: 'mcq',
            prompt: 'Quelle caractéristique définit chimiquement un alcool ?',
            options: [
              'Un groupe hydroxyle $-\\mathrm{OH}$ fixé sur un atome de carbone tétragonal',
              'Un atome d’oxygène relié à deux atomes de carbone tétragonaux ($\\mathrm{R_1-O-R_2}$)',
              'Un groupe carbonyle $\\mathrm{C=O}$ porté par un carbone portant aussi un $-\\mathrm{OH}$',
              'Un atome d’oxygène doublement lié à un carbone en milieu de chaîne',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un alcool possède le groupe –OH lié à un carbone tétragonal (alors que –COOH est un acide carboxylique et R₁–O–R₂ est un éther-oxyde).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Éther-oxyde',
          stepTheme: 'Isomérie de fonction',
          stepTitle: 'Comparer éthers-oxydes et alcools',
          paragraphText:
            'Les éthers-oxydes R₁–O–R₂ et les alcools saturés R–OH partagent la même formule brute générale CₙH₂ₙ₊₂O dès n ≥ 2.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q2',
            type: 'mcq',
            prompt: 'Quelle formule brute générale est commune aux alcools saturés et aux éthers-oxydes ?',
            options: [
              '$\\mathrm{C_nH_{2n+2}O}$',
              '$\\mathrm{C_nH_{2n}O}$',
              '$\\mathrm{C_nH_{2n}O_2}$',
              '$\\mathrm{C_nH_{2n-2}O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les alcools saturés et les éthers-oxydes ont une seule liaison simple vers O et aucune insaturation : leur formule brute est CₙH₂ₙ₊₂O.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Classes d’alcools',
          stepTheme: 'Primaire / II / III',
          stepTitle: 'Déterminer la classe d’un alcool',
          paragraphText:
            'On compte combien de groupes alkyles (ou d’atomes de carbone) sont directement liés au carbone fonctionnel qui porte –OH : 1 (ou 0) = primaire, 2 = secondaire, 3 = tertiaire.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q3',
            type: 'mcq',
            prompt: 'Quelle est la classe de l’alcool $\\mathrm{CH_3-C(CH_3)(OH)-CH_3}$ ($2$-méthylpropan-$2$-ol) ?',
            options: [
              'Alcool tertiaire',
              'Alcool primaire',
              'Alcool secondaire',
              'Éther-oxyde symétrique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le carbone fonctionnel porteur de –OH est directement lié à 3 groupes méthyles –CH₃ : c’est un alcool tertiaire.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Oxydation ménagée',
          stepTheme: 'Lien avec la classe',
          stepTitle: 'Comportement des 3 classes d’alcools face à l’oxydation ménagée',
          paragraphText:
            'Lors d’une oxydation ménagée (sans rupture de la chaîne carbonée) : un alcool primaire donne un aldéhyde puis un acide carboxylique ; un alcool secondaire donne une cétone ; un alcool tertiaire ne réagit pas.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q4',
            type: 'mcq',
            prompt: 'Que produit l’oxydation ménagée d’un alcool secondaire (tel que le $\\text{propan-}2\\text{-ol}$) ?',
            options: [
              'Une cétone (qui ne subit pas d’oxydation ménagée ultérieure)',
              'Un aldéhyde puis un acide carboxylique',
              'Aucune réaction car un alcool secondaire résiste toujours à l’oxydation',
              'Un éther-oxyde symétrique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un alcool secondaire (R–CHOH–R′) s’oxyde de façon ménagée en cétone (R–CO–R′), tandis qu’un alcool primaire donne aldéhyde puis acide carboxylique et qu’un alcool tertiaire est inoxydable par oxydation ménagée.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Isomères C₃H₈O',
          stepTheme: 'Exercice 2 p. 6',
          stepTitle: 'Compter les isomères de C₃H₈O',
          paragraphText:
            'Avec 3 atomes de carbone et formule C₃H₈O, on peut placer –OH en bout de chaîne, sur le carbone central, ou insérer O entre un éthyle et un méthyle.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q5',
            type: 'mcq',
            prompt: 'Combien de formules semi-développées isomères existent pour la formule brute $\\mathrm{C_3H_8O}$ ?',
            options: [
              '$3$ isomères : $\\text{propan-}1\\text{-ol}$, $\\text{propan-}2\\text{-ol}$ et oxyde d’éthyle et de méthyle',
              '$2$ isomères : $\\text{propan-}1\\text{-ol}$ et $\\text{propan-}2\\text{-ol}$ uniquement',
              '$4$ isomères dont le propanal et la propanone',
              '$1$ seul isomère possible',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C₃H₈O correspond à deux alcools (propan-1-ol et propan-2-ol) plus un éther-oxyde (CH₃–CH₂–O–CH₃), soit 3 isomères.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'Alcool tertiaire',
          stepTitle: 'Ne pas confondre alcool tertiaire et oxydation en acide',
          paragraphText:
            'Un alcool tertiaire possède un carbone fonctionnel sans aucun atome H : il est impossible de former une double liaison C=O sans casser une liaison C–C, donc il ne subit pas d’oxydation ménagée.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q6',
            type: 'mcq',
            prompt: 'Lequel de ces alcools NE peut PAS subir d’oxydation ménagée ?',
            options: [
              'Le $2$-méthylpropan-$2$-ol ($\\mathrm{(CH_3)_3C-OH}$)',
              'Le $\\text{propan-}1\\text{-ol}$ ($\\mathrm{CH_3-CH_2-CH_2-OH}$)',
              'Le $\\text{propan-}2\\text{-ol}$ ($\\mathrm{CH_3-CH(OH)-CH_3}$)',
              'L’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le 2-méthylpropan-2-ol est un alcool tertiaire : son carbone fonctionnel n’a aucun H, donc l’oxydation ménagée est impossible.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q1',
          type: 'mcq',
          prompt: 'Quelle caractéristique définit chimiquement un alcool ?',
          options: [
            'Un groupe hydroxyle $-\\mathrm{OH}$ fixé sur un atome de carbone tétragonal',
            'Un atome d’oxygène relié à deux atomes de carbone tétragonaux ($\\mathrm{R_1-O-R_2}$)',
            'Un groupe carbonyle $\\mathrm{C=O}$ porté par un carbone portant aussi un $-\\mathrm{OH}$',
            'Un atome d’oxygène doublement lié à un carbone en milieu de chaîne',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un alcool possède le groupe –OH lié à un carbone tétragonal (alors que –COOH est un acide carboxylique et R₁–O–R₂ est un éther-oxyde).',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q2',
          type: 'mcq',
          prompt: 'Quelle formule brute générale est commune aux alcools saturés et aux éthers-oxydes ?',
          options: [
            '$\\mathrm{C_nH_{2n+2}O}$',
            '$\\mathrm{C_nH_{2n}O}$',
            '$\\mathrm{C_nH_{2n}O_2}$',
            '$\\mathrm{C_nH_{2n-2}O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les alcools saturés et les éthers-oxydes ont une seule liaison simple vers O et aucune insaturation : leur formule brute est CₙH₂ₙ₊₂O.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q3',
          type: 'mcq',
          prompt: 'Quelle est la classe de l’alcool $\\mathrm{CH_3-C(CH_3)(OH)-CH_3}$ ($2$-méthylpropan-$2$-ol) ?',
          options: [
            'Alcool tertiaire',
            'Alcool primaire',
            'Alcool secondaire',
            'Éther-oxyde symétrique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le carbone fonctionnel porteur de –OH est directement lié à 3 groupes méthyles –CH₃ : c’est un alcool tertiaire.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q4',
          type: 'mcq',
          prompt: 'Que produit l’oxydation ménagée d’un alcool secondaire (tel que le $\\text{propan-}2\\text{-ol}$) ?',
          options: [
            'Une cétone (qui ne subit pas d’oxydation ménagée ultérieure)',
            'Un aldéhyde puis un acide carboxylique',
            'Aucune réaction car un alcool secondaire résiste toujours à l’oxydation',
            'Un éther-oxyde symétrique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un alcool secondaire (R–CHOH–R′) s’oxyde de façon ménagée en cétone (R–CO–R′), tandis qu’un alcool primaire donne aldéhyde puis acide carboxylique et qu’un alcool tertiaire est inoxydable par oxydation ménagée.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q5',
          type: 'mcq',
          prompt: 'Combien de formules semi-développées isomères existent pour la formule brute $\\mathrm{C_3H_8O}$ ?',
          options: [
            '$3$ isomères : $\\text{propan-}1\\text{-ol}$, $\\text{propan-}2\\text{-ol}$ et oxyde d’éthyle et de méthyle',
            '$2$ isomères : $\\text{propan-}1\\text{-ol}$ et $\\text{propan-}2\\text{-ol}$ uniquement',
            '$4$ isomères dont le propanal et la propanone',
            '$1$ seul isomère possible',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C₃H₈O correspond à deux alcools (propan-1-ol et propan-2-ol) plus un éther-oxyde (CH₃–CH₂–O–CH₃), soit 3 isomères.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p01_q6',
          type: 'mcq',
          prompt: 'Lequel de ces alcools NE peut PAS subir d’oxydation ménagée ?',
          options: [
            'Le $2$-méthylpropan-$2$-ol ($\\mathrm{(CH_3)_3C-OH}$)',
            'Le $\\text{propan-}1\\text{-ol}$ ($\\mathrm{CH_3-CH_2-CH_2-OH}$)',
            'Le $\\text{propan-}2\\text{-ol}$ ($\\mathrm{CH_3-CH(OH)-CH_3}$)',
            'L’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le 2-méthylpropan-2-ol est un alcool tertiaire : son carbone fonctionnel n’a aucun H, donc l’oxydation ménagée est impossible.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Nomenclature des alcools et des éthers-oxydes
    // ========================================================================
    {
      id: 'premiere_c_chimie_l04_composes_oxygenes_p02',
      order: 2,
      title: 'Nomenclature IUPAC des alcools et des éthers-oxydes',
      summary:
        'Nommer les alcools ramifiés (indice minimal du carbone fonctionnel avant les alkyles, suffixe -ol) et appliquer les deux systèmes de nomenclature des éthers-oxydes.',
      conceptExplanation:
        "1. **Nomenclature des alcools** :\n   - On repère la **chaîne carbonée la plus longue contenant le carbone fonctionnel** (porteur de $-\\mathrm{OH}$).\n   - On numérote cette chaîne de sorte que le **carbone fonctionnel porte l’indice le plus petit possible** (prioritaire devant les groupes alkyles).\n   - On remplace le *« e »* final de l’alcane correspondant par **-ol** précédé de l’indice de position du carbone fonctionnel si nécessaire : `propan-1-ol`, `butan-2-ol`, `2-méthylpropan-2-ol`, `3,4-diméthylheptan-4-ol`.\n2. **Nomenclature des éthers-oxydes ($\\mathrm{R_1-O-R_2}$)** — deux façons officielles :\n   - **Nom d’usage fonctionnel** : mot **oxyde** suivi des noms des deux groupes alkyles par **ordre alphabétique** (ou `di-` s’ils sont identiques) : ex. $\\mathrm{CH_3-O-CH_2-CH_3}$ $\\to$ *oxyde d’éthyle et de méthyle* ; $\\mathrm{C_2H_5-O-C_2H_5}$ $\\to$ *oxyde de diéthyle* ; $\\mathrm{C_2H_5-O-CH_2-CH(CH_3)-CH_3}$ $\\to$ *oxyde d’éthyle et de 2-méthylpropyle*.\n   - **Nom substitutif (alcoxyalcane)** : on remplace la terminaison *-yle* du **plus petit groupe alkyle** par **-oxy** devant le nom de l’alcane correspondant à l’autre groupe : ex. *méthoxyéthane*, *éthoxyéthane*, *1-éthoxy-2-méthylpropane*.",
      keyRule:
        'Pour un alcool, la numérotation donne l’indice minimal au carbone portant –OH avant toute ramification. Un éther-oxyde R₁–O–R₂ se nomme « oxyde de R₁ et de R₂ » (ordre alphabétique) ou « alcoxyalcane ».',
      formulas: [
        {
          name: 'Exemples doubles de nomenclature des éthers-oxydes',
          formula: '\\mathrm{CH_3-O-C_2H_5} : \\text{oxyde d’éthyle et de méthyle} = \\text{méthoxyéthane}',
          note: 'On transforme toujours le plus petit groupe alkyle en préfixe « -oxy »',
        },
      ],
      workedExample: {
        title: 'Nommer un alcool complexe et traduire sa formule (Ex 1D p. 6 & Activité p. 3)',
        statement:
          'Écris la formule semi-développée du `3,4-diméthylheptan-4-ol`, et donne les deux noms possibles de $\\mathrm{CH_3-CH_2-O-CH_2-CH_2-CH_3}$.',
        methodSteps: [
          '1) 3,4-diméthylheptan-4-ol : chaîne principale heptane (7 C), –OH sur C4, deux méthyles en C3 et C4 → CH₃-CH₂-CH(CH₃)-C(OH)(CH₃)-CH₂-CH₂-CH₃.',
          '2) CH₃-CH₂-O-CH₂-CH₂-CH₃ relie un groupe éthyle (2 C) et un groupe propyle (3 C).',
          '3) Ordre alphabétique (« éthyle » avant « propyle ») : oxyde d’éthyle et de propyle. En nomenclature substitutive (plus petit groupe = éthyle → éthoxy sur C1 du propane) : 1-éthoxypropane (ou éthoxypropane).',
        ],
        conclusion:
          'Les deux nomenclatures des éthers-oxydes sont équivalentes et doivent être reconnues toutes les deux dans les exercices.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Alcool ramifié',
          stepTheme: 'Priorité du groupe –OH',
          stepTitle: 'Numéroter un alcool substitué',
          paragraphText:
            'Dans la numérotation d’un alcool, la position du groupe –OH l’emporte toujours sur la position des substituants alkyles.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q1',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de l’alcool $\\mathrm{CH_3-CH(CH_3)-CH_2-CH(OH)-CH_3}$ ?',
            options: [
              '$4$-méthylpentan-$2$-ol',
              '$2$-méthylpentan-$4$-ol',
              '$2$-méthylpentan-$2$-ol',
              '$4$-méthylbutanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La chaîne la plus longue contenant C–OH compte 5 carbones. En numérotant depuis la droite, –OH est en C2 (contre C4 depuis la gauche) et le méthyle en C4 : 4-méthylpentan-2-ol.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Formule → Nom',
          stepTheme: '3,4-diméthylheptan-4-ol',
          stepTitle: 'Écrire la formule semi-développée à partir du nom',
          paragraphText:
            'On trace d’abord la chaîne principale indiquée par la racine (-heptane = 7 C), puis on place –OH et chaque substituant sur les numéros précisés.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q2',
            type: 'mcq',
            prompt: 'Laquelle de ces formules représente correctement le $3,4$-diméthylheptan-$4$-ol ?',
            options: [
              '$\\mathrm{CH_3-CH_2-CH(CH_3)-C(OH)(CH_3)-CH_2-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CH(CH_3)-CH(OH)-CH(CH_3)-CH_2-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CH_2-CH_2-C(OH)(CH_3)-CH_2-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CH(CH_3)-CH(CH_3)-CH_2-CH_2-CH_2-OH}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En partant de la gauche : C1–C2–C3(CH₃)–C4(OH)(CH₃)–C5–C6–C7, soit 7 carbones avec –OH en 4 et deux méthyles en 3 et 4.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Éther-oxyde (1)',
          stepTheme: 'Oxyde de ...',
          stepTitle: 'Nommer un éther-oxyde avec le mot « oxyde »',
          paragraphText:
            'On fait suivre « oxyde de » des deux groupes alkyles liés à O classés par ordre alphabétique (ou précédés de di- s’ils sont identiques).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q3',
            type: 'mcq',
            prompt: 'Quel est le nom de $\\mathrm{CH_3-CH_2-O-CH_2-CH_3}$ ?',
            options: [
              'Oxyde de diéthyle (ou éthoxyéthane)',
              'Oxyde de diméthyle (ou méthoxyméthane)',
              'Butan-2-ol',
              'Éthanoate d’éthyle',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les deux groupes reliés à l’atome d’oxygène sont deux groupes éthyles (–C₂H₅) : oxyde de diéthyle (ou éthoxyéthane).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Éther-oxyde (2)',
          stepTheme: 'Alcoxyalcane',
          stepTitle: 'Passer du nom « oxyde » au nom « alcoxyalcane »',
          paragraphText:
            'Dans la nomenclature alcoxyalcane, c’est toujours le plus petit groupe alkyle qui prend le suffixe -oxy.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q4',
            type: 'mcq',
            prompt: 'Quel est le nom substitutif (alcoxyalcane) de l’oxyde d’éthyle et de méthyle ($\\mathrm{CH_3-O-CH_2-CH_3}$) ?',
            options: [
              'Méthoxyéthane',
              'Éthoxyméthane',
              'Méthoxypropane',
              'Propan-1-ol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le plus petit groupe alkyle est le méthyle (1 C → méthoxy) relié à la chaîne éthane (2 C) : méthoxyéthane.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Indice inutile',
          stepTheme: 'Omission de -1-',
          stepTitle: 'Quand peut-on omettre l’indice 1 devant -ol ?',
          paragraphText:
            'Pour le méthanol (1 C) et l’éthanol (2 C), –OH occupe nécessairement une extrémité équivalente ; dès 3 carbones (propan-1-ol vs propan-2-ol), l’indice est obligatoire.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q5',
            type: 'mcq',
            prompt: 'Pourquoi l’indice de position est-il indispensable dans « $\\text{propan-}1\\text{-ol}$ », mais inutile dans « $\\text{éthanol}$ » ?',
            options: [
              'Parce qu’à 3 carbones –OH peut être en position 1 ou 2, alors qu’à 2 carbones les deux carbones sont équivalents',
              'Parce que l’éthanol ne contient pas de groupe hydroxyle –OH',
              'Parce que le propan-1-ol possède une double liaison C=C',
              'Parce que le propan-1-ol est un éther-oxyde',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans CH₃–CH₂–OH, quel que soit le carbone portant –OH, c’est toujours le carbone n°1 ; dès C₃H₈O, propan-1-ol et propan-2-ol sont deux isomères distincts.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Éther ramifié',
          stepTheme: 'Exercice du cours p. 2',
          stepTitle: 'Nommer un éther-oxyde comportant une chaîne ramifiée',
          paragraphText:
            'Si l’un des groupes liés à l’oxygène est ramifié (ex. –CH₂–CH(CH₃)–CH₃, dit 2-méthylpropyle), on numérote ce groupe à partir du carbone lié à O.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q6',
            type: 'mcq',
            prompt: 'Comment nomme-t-on le composé $\\mathrm{C_2H_5-O-CH_2-CH(CH_3)-CH_3}$ ?',
            options: [
              'Oxyde d’éthyle et de $2$-méthylpropyle (ou $1$-éthoxy-$2$-méthylpropane)',
              'Oxyde d’éthyle et de butan-2-ol',
              'Oxyde de propyle et de $2$-méthyléthyle',
              'Méthoxy-$2$-méthylbutane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'D’un côté de l’oxygène se trouve un groupe éthyle (–C₂H₅), de l’autre le groupe 2-méthylpropyle (chaîne à 3 C numérotée depuis –CH₂–O– avec méthyle en 2).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q1',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de l’alcool $\\mathrm{CH_3-CH(CH_3)-CH_2-CH(OH)-CH_3}$ ?',
          options: [
            '$4$-méthylpentan-$2$-ol',
            '$2$-méthylpentan-$4$-ol',
            '$2$-méthylpentan-$2$-ol',
            '$4$-méthylbutanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La chaîne la plus longue contenant C–OH compte 5 carbones. En numérotant depuis la droite, –OH est en C2 (contre C4 depuis la gauche) et le méthyle en C4 : 4-méthylpentan-2-ol.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q2',
          type: 'mcq',
          prompt: 'Laquelle de ces formules représente correctement le $3,4$-diméthylheptan-$4$-ol ?',
          options: [
            '$\\mathrm{CH_3-CH_2-CH(CH_3)-C(OH)(CH_3)-CH_2-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CH(CH_3)-CH(OH)-CH(CH_3)-CH_2-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CH_2-CH_2-C(OH)(CH_3)-CH_2-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CH(CH_3)-CH(CH_3)-CH_2-CH_2-CH_2-OH}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En partant de la gauche : C1–C2–C3(CH₃)–C4(OH)(CH₃)–C5–C6–C7, soit 7 carbones avec –OH en 4 et deux méthyles en 3 et 4.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q3',
          type: 'mcq',
          prompt: 'Quel est le nom de $\\mathrm{CH_3-CH_2-O-CH_2-CH_3}$ ?',
          options: [
            'Oxyde de diéthyle (ou éthoxyéthane)',
            'Oxyde de diméthyle (ou méthoxyméthane)',
            'Butan-2-ol',
            'Éthanoate d’éthyle',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les deux groupes reliés à l’atome d’oxygène sont deux groupes éthyles (–C₂H₅) : oxyde de diéthyle (ou éthoxyéthane).',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q4',
          type: 'mcq',
          prompt: 'Quel est le nom substitutif (alcoxyalcane) de l’oxyde d’éthyle et de méthyle ($\\mathrm{CH_3-O-CH_2-CH_3}$) ?',
          options: [
            'Méthoxyéthane',
            'Éthoxyméthane',
            'Méthoxypropane',
            'Propan-1-ol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le plus petit groupe alkyle est le méthyle (1 C → méthoxy) relié à la chaîne éthane (2 C) : méthoxyéthane.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q5',
          type: 'mcq',
          prompt: 'Pourquoi l’indice de position est-il indispensable dans « $\\text{propan-}1\\text{-ol}$ », mais inutile dans « $\\text{éthanol}$ » ?',
          options: [
            'Parce qu’à 3 carbones –OH peut être en position 1 ou 2, alors qu’à 2 carbones les deux carbones sont équivalents',
            'Parce que l’éthanol ne contient pas de groupe hydroxyle –OH',
            'Parce que le propan-1-ol possède une double liaison C=C',
            'Parce que le propan-1-ol est un éther-oxyde',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans CH₃–CH₂–OH, quel que soit le carbone portant –OH, c’est toujours le carbone n°1 ; dès C₃H₈O, propan-1-ol et propan-2-ol sont deux isomères distincts.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p02_q6',
          type: 'mcq',
          prompt: 'Comment nomme-t-on le composé $\\mathrm{C_2H_5-O-CH_2-CH(CH_3)-CH_3}$ ?',
          options: [
            'Oxyde d’éthyle et de $2$-méthylpropyle (ou $1$-éthoxy-$2$-méthylpropane)',
            'Oxyde d’éthyle et de butan-2-ol',
            'Oxyde de propyle et de $2$-méthyléthyle',
            'Méthoxy-$2$-méthylbutane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'D’un côté de l’oxygène se trouve un groupe éthyle (–C₂H₅), de l’autre le groupe 2-méthylpropyle (chaîne à 3 C numérotée depuis –CH₂–O– avec méthyle en 2).',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Aldéhydes et cétones (composés carbonylés, CₙH₂ₙO)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l04_composes_oxygenes_p03',
      order: 3,
      title: 'Aldéhydes et cétones (composés carbonylés)',
      summary:
        'Identifier le groupe carbonyle >C=O, distinguer aldéhyde (–CHO en bout de chaîne, -al) et cétone (–CO– interne, -one), connaître leur formule brute CₙH₂ₙO et les nommer.',
      conceptExplanation:
        "Les **aldéhydes** et les **cétones** possèdent en commun le **groupe carbonyle** ($>\\mathrm{C=O}$) : on les appelle **composés carbonylés**. Ils partagent la formule brute générale $\\mathrm{C_nH_{2n}O}$ (masse molaire $M = 14n + 16\\text{ g/mol}$) et sont donc isomères de fonction pour $n \\ge 3$.\n\n1. **Les aldéhydes** : le carbone fonctionnel doublement lié à O porte au moins un atome d’hydrogène : groupe $-\\mathrm{CHO}$ ($\\mathrm{R-CHO}$, toujours en **bout de chaîne**).\n   - **Nomenclature** : on remplace le *« e »* final de l’alcane correspondant par la terminaison **-al**, en **numérotant toujours la chaîne principale à partir du carbone du groupe $-\\mathrm{CHO}$ ($\\text{C}_1$)** : ex. `propanal`, `3-méthylbutanal`, `2-méthylbutanal`, `2,3-diméthylpentanal`.\n2. **Les cétones** : le carbone du groupe carbonyle est lié à **deux autres atomes de carbone** : $\\mathrm{R-CO-R'}$ ($n \\ge 3$, jamais en bout de chaîne).\n   - **Nomenclature** : on remplace le *« e »* final de l’alcane par **-one** précédé de l’**indice de position le plus petit possible du carbone carbonyle** : ex. `butan-2-one`, `3-méthylbutan-2-one`, `3-méthylpentan-3-one` (attention à ne pas la confondre avec `2-méthylpentan-3-one` !).",
      keyRule:
        'Aldéhydes (R–CHO, suffixe -al, C fonctionnel toujours n°1) et cétones (R–CO–R′, suffixe -one, C fonctionnel interne dès n ≥ 3) possèdent le groupe carbonyle >C=O et la formule brute CₙH₂ₙO.',
      formulas: [
        {
          name: 'Formule brute des composés carbonylés',
          formula: '\\mathrm{C_nH_{2n}O}, \\quad M = 14n + 16\\text{ g/mol}',
          note: 'Aldéhydes dès n ≥ 1 (méthanal HCHO) ; cétones dès n ≥ 3 (propanone CH₃–CO–CH₃)',
        },
      ],
      workedExample: {
        title: 'Comparer deux cétones isomères et écrire un aldéhyde ramifié (p. 3 & Ex 1B p. 6)',
        statement:
          'Écris les formules semi-développées du `2,3-diméthylpentanal` et de la `2-méthylpentan-3-one`, puis vérifie si cette dernière est identique à la `3-méthylpentan-3-one`.',
        methodSteps: [
          '1) 2,3-diméthylpentanal : C1 est toujours –CHO ; méthyles en C2 et C3 sur une chaîne à 5 C → CH₃-CH₂-CH(CH₃)-CH(CH₃)-CHO.',
          '2) 2-méthylpentan-3-one : pentane (5 C) avec C=O en C3 et méthyle en C2 → CH₃-CH(CH₃)-CO-CH₂-CH₃ (formule brute C₆H₁₂O).',
          '3) 3-méthylpentan-3-one : est impossible ! Sur C3 déjà lié à C2, C4 et doublement à O (=O), C3 forme déjà 4 liaisons covalentes et ne peut pas porter de méthyle ! La molécule tracée p. 3 du cours est CH₃-CH(CH₃)-CO-CH₂-CH₃, dont le vrai nom est bien 2-méthylpentan-3-one (ou 4-méthyl... numéroté en 2 depuis le bout portant le méthyle car C=O est en C3 dans les deux sens).',
        ],
        conclusion:
          'Un carbone de cétone (>C=O) est déjà lié à 2 carbones et doublement à O (soit 4 liaisons) : il ne peut jamais porter un substituant supplémentaire !',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Comparaison entre aldéhydes et cétones (composés carbonylés)',
        tableData: {
          headers: ['Famille', 'Groupe fonctionnel', 'Position de C=O', 'Suffixe & Exemples'],
          rows: [
            ['Aldéhyde', '–CH=O (–CHO)', 'Toujours en C1 (bout de chaîne)', '-al : éthanal, propanal, 2,3-diméthylpentanal'],
            ['Cétone', '>C=O entre 2 carbones', 'Toujours interne (n ≥ 3)', '-one : propanone, butan-2-one, 2-méthylpentan-3-one'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Carbonyle',
          stepTheme: 'Point commun',
          stepTitle: 'Qu’est-ce qu’un composé carbonylé ?',
          paragraphText:
            'Les aldéhydes et les cétones renferment tous deux la double liaison carbone-oxygène >C=O appelée groupe carbonyle.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q1',
            type: 'mcq',
            prompt: 'Quelles familles regroupe-t-on sous le nom de « composés carbonylés » ?',
            options: [
              'Les aldéhydes et les cétones',
              'Les alcools et les éthers-oxydes',
              'Les acides carboxyliques et les esters',
              'Les alcanes et les alcènes',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Aldéhydes (–CHO) et cétones (–CO–) partagent le groupement caractéristique carbonyle >C=O.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Aldéhyde vs Cétone',
          stepTheme: 'Structure',
          stepTitle: 'Différencier un aldéhyde d’une cétone',
          paragraphText:
            'Dans un aldéhyde, le carbone de C=O porte au moins un H (extrémité de chaîne) ; dans une cétone, il est lié à deux autres atomes de carbone.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q2',
            type: 'mcq',
            prompt: 'À quelle famille appartient la molécule $\\mathrm{CH_3-CH_2-CH(CH_3)-CHO}$ ?',
            options: [
              'Les aldéhydes ($2$-méthylbutanal)',
              'Les cétones ($2$-méthylbutanone)',
              'Les acides carboxyliques',
              'Les alcools primaires',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La présence du groupe terminal –CHO caractérise un aldéhyde. Numéroté depuis –CHO (C1), le méthyle est en C2 : 2-méthylbutanal.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Nomenclature -al',
          stepTheme: 'C1 = groupe CHO',
          stepTitle: 'Numéroter un aldéhyde ramifié',
          paragraphText:
            'Dans un aldéhyde, le carbone du groupe –CHO porte obligatoirement le numéro 1 ; on n’indique donc jamais l’indice 1 devant « -al ».',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q3',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH(CH_3)-CH_2-CHO}$ ?',
            options: [
              '$3$-méthylbutanal',
              '$2$-méthylbutanal',
              '$3$-méthylbutan-$1$-one',
              '$2$-méthylbut-$4$-al',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le carbone C1 est celui de –CHO, C2 est –CH₂– et C3 porte le méthyle : 3-méthylbutanal.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Nomenclature -one',
          stepTheme: 'Indice minimal sur C=O',
          stepTitle: 'Nommer une cétone',
          paragraphText:
            'Pour une cétone, on choisit le sens de numérotation qui donne au carbone de C=O l’indice le plus bas possible.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q4',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de la cétone $\\mathrm{CH_3-CO-CH(CH_3)-CH_3}$ ?',
            options: [
              '$3$-méthylbutan-$2$-one',
              '$2$-méthylbutan-$3$-one',
              '$3$-méthylbutanal',
              '$2$-méthylbutanoate',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En numérotant depuis la gauche, C=O porte l’indice 2 (inférieur à 3 depuis la droite) et le méthyle se retrouve en position 3 : 3-méthylbutan-2-one.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Formule brute',
          stepTheme: 'CₙH₂ₙO',
          stepTitle: 'Calculer n pour un composé carbonylé',
          paragraphText:
            'La formule brute CₙH₂ₙO correspond à une masse molaire M = 14n + 16 g/mol.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q5',
            type: 'mcq',
            prompt: 'Un composé carbonylé $\\mathrm{C_nH_{2n}O}$ a pour masse molaire $M = 72\\text{ g/mol}$ ($M(\\mathrm{C})=12, M(\\mathrm{H})=1, M(\\mathrm{O})=16$). Quelle est sa formule brute ?',
            options: [
              '$\\mathrm{C_4H_8O}$ (ex. butanal ou butan-$2$-one)',
              '$\\mathrm{C_3H_6O}$',
              '$\\mathrm{C_4H_{10}O}$',
              '$\\mathrm{C_5H_{10}O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$14n + 16 = 72 \\implies 14n = 56 \\implies n = 4$, soit $\\mathrm{C_4H_8O}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège de valence',
          stepTheme: 'Plus petite cétone',
          stepTitle: 'Pourquoi n ≥ 3 pour les cétones ?',
          paragraphText:
            'Le carbone carbonyle d’une cétone doit être entouré de deux autres carbones : la plus petite cétone compte donc 3 carbones (propanone, CH₃–CO–CH₃).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q6',
            type: 'mcq',
            prompt: 'Pourquoi n’existe-t-il aucune cétone de formule brute $\\mathrm{C_2H_4O}$ ?',
            options: [
              'Parce que le carbone de $\\mathrm{C=O}$ d’une cétone doit être lié à deux autres atomes de carbone, ce qui impose au moins $3$ carbones',
              'Parce que $\\mathrm{C_2H_4O}$ est la formule d’un alcool saturé',
              'Parce que le carbone ne peut former que 3 liaisons dans une cétone',
              'Parce qu’une cétone contient toujours deux atomes d’oxygène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Avec 2 carbones seulement (C₂H₄O), le groupe >C=O est obligatoirement en bout de chaîne : c’est un aldéhyde (éthanal CH₃–CHO).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q1',
          type: 'mcq',
          prompt: 'Quelles familles regroupe-t-on sous le nom de « composés carbonylés » ?',
          options: [
            'Les aldéhydes et les cétones',
            'Les alcools et les éthers-oxydes',
            'Les acides carboxyliques et les esters',
            'Les alcanes et les alcènes',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Aldéhydes (–CHO) et cétones (–CO–) partagent le groupement caractéristique carbonyle >C=O.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q2',
          type: 'mcq',
          prompt: 'À quelle famille appartient la molécule $\\mathrm{CH_3-CH_2-CH(CH_3)-CHO}$ ?',
          options: [
            'Les aldéhydes ($2$-méthylbutanal)',
            'Les cétones ($2$-méthylbutanone)',
            'Les acides carboxyliques',
            'Les alcools primaires',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La présence du groupe terminal –CHO caractérise un aldéhyde. Numéroté depuis –CHO (C1), le méthyle est en C2 : 2-méthylbutanal.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q3',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH(CH_3)-CH_2-CHO}$ ?',
          options: [
            '$3$-méthylbutanal',
            '$2$-méthylbutanal',
            '$3$-méthylbutan-$1$-one',
            '$2$-méthylbut-$4$-al',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le carbone C1 est celui de –CHO, C2 est –CH₂– et C3 porte le méthyle : 3-méthylbutanal.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q4',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de la cétone $\\mathrm{CH_3-CO-CH(CH_3)-CH_3}$ ?',
          options: [
            '$3$-méthylbutan-$2$-one',
            '$2$-méthylbutan-$3$-one',
            '$3$-méthylbutanal',
            '$2$-méthylbutanoate',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En numérotant depuis la gauche, C=O porte l’indice 2 (inférieur à 3 depuis la droite) et le méthyle se retrouve en position 3 : 3-méthylbutan-2-one.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q5',
          type: 'mcq',
          prompt: 'Un composé carbonylé $\\mathrm{C_nH_{2n}O}$ a pour masse molaire $M = 72\\text{ g/mol}$ ($M(\\mathrm{C})=12, M(\\mathrm{H})=1, M(\\mathrm{O})=16$). Quelle est sa formule brute ?',
          options: [
            '$\\mathrm{C_4H_8O}$ (ex. butanal ou butan-$2$-one)',
            '$\\mathrm{C_3H_6O}$',
            '$\\mathrm{C_4H_{10}O}$',
            '$\\mathrm{C_5H_{10}O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$14n + 16 = 72 \\implies 14n = 56 \\implies n = 4$, soit $\\mathrm{C_4H_8O}$.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p03_q6',
          type: 'mcq',
          prompt: 'Pourquoi n’existe-t-il aucune cétone de formule brute $\\mathrm{C_2H_4O}$ ?',
          options: [
            'Parce que le carbone de $\\mathrm{C=O}$ d’une cétone doit être lié à deux autres atomes de carbone, ce qui impose au moins $3$ carbones',
            'Parce que $\\mathrm{C_2H_4O}$ est la formule d’un alcool saturé',
            'Parce que le carbone ne peut former que 3 liaisons dans une cétone',
            'Parce qu’une cétone contient toujours deux atomes d’oxygène',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Avec 2 carbones seulement (C₂H₄O), le groupe >C=O est obligatoirement en bout de chaîne : c’est un aldéhyde (éthanal CH₃–CHO).',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Acides carboxyliques (groupe carboxyle –COOH, nomenclature)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l04_composes_oxygenes_p04',
      order: 4,
      title: 'Acides carboxyliques : structure et nomenclature',
      summary:
        'Identifier le groupe carboxyle –COOH (à ne pas confondre avec l’aldéhyde), connaître la formule brute saturée CₙH₂ₙO₂ et nommer les acides carboxyliques en « acide ...oïque ».',
      conceptExplanation:
        "Les **acides carboxyliques** sont des composés organiques comportant le **groupe carboxyle** $-\\mathrm{COOH}$ (réunion sur un même carbone d’un $=\\mathrm{O}$ et d’un $-\\mathrm{OH}$).\n\n- **Formule générale** : $\\mathrm{R-COOH}$, où $R$ est un atome d’hydrogène ($\\mathrm{H-COOH}$, acide méthanoïque) ou un groupe alkyle.\n- **Formule brute générale à chaîne saturée** : $\\mathrm{C_nH_{2n}O_2}$ ($n \\ge 1$), de masse molaire $M = 14n + 32\\text{ g/mol}$.\n- **Règle de nomenclature** : on fait précéder du mot **acide** le nom de l’alcane de même squelette carboné dont on remplace le *« e »* final par **-oïque**. La chaîne principale se **numérote obligatoirement à partir du carbone du groupe carboxyle ($\\text{C}_1$)**.\n- **Exemples officiels** : $\\mathrm{CH_3-CH_2-COOH}$ = `acide propanoïque` ; $\\mathrm{CH_3-CH(CH_3)-CH_2-COOH}$ = `acide 3-méthylbutanoïque` ; $\\mathrm{CH_3-C(CH_3)_2-CH_2-COOH}$ = `acide 3,3-diméthylbutanoïque`.\n- **Risque de confusion (Documentation p. 9–10)** : ne jamais confondre le groupe aldéhyde ($-\\mathrm{CO-H}$, 1 seul oxygène) avec le groupe carboxyle ($-\\mathrm{CO-OH}$, 2 oxygènes dont un H acide).",
      keyRule:
        'Un acide carboxylique R–COOH (formule saturée CₙH₂ₙO₂) se nomme « acide [chaîne principale]oïque », en comptant le carbone de –COOH comme le carbone n°1.',
      formulas: [
        {
          name: 'Formule brute d’un acide carboxylique saturé',
          formula: '\\mathrm{C_nH_{2n}O_2} \\quad (n \\ge 1), \\quad M = 14n + 32\\text{ g/mol}',
          note: 'Pour n = 1 : H–COOH (acide méthanoïque) ; n = 2 : CH₃–COOH (acide éthanoïque, vinaigre)',
        },
      ],
      workedExample: {
        title: 'Nommer et représenter l’acide 3,3-diméthylbutanoïque (Activité p. 4)',
        statement:
          'Écris la formule semi-développée de l’`acide 3,3-diméthylbutanoïque`, puis détermine le nom de $\\mathrm{CH_3-CH(CH_3)-CH_2-COOH}$.',
        methodSteps: [
          '1) acide 3,3-diméthylbutanoïque : chaîne principale à 4 carbones (butanoïque) avec C1 = –COOH, C2 = –CH₂– et deux groupes méthyles portés par C3 → CH₃-C(CH₃)₂-CH₂-COOH.',
          '2) Pour CH₃-CH(CH₃)-CH₂-COOH : C1 est –COOH, C2 est –CH₂–, C3 porte –CH₃ et C4 termine la chaîne à 4 C → acide 3-méthylbutanoïque.',
        ],
        conclusion:
          'Le carbone du groupe –COOH est toujours compté dans la chaîne principale avec l’indice 1.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Carboxyle',
          stepTheme: 'Groupe fonctionnel',
          stepTitle: 'Identifier le groupe carboxyle',
          paragraphText:
            'Un acide carboxylique porte le groupe carboxyle –COOH, où le carbone est doublement lié à un atome O et simplement lié à un groupe –OH.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q1',
            type: 'mcq',
            prompt: 'Quel groupement caractéristique identifie un acide carboxylique ?',
            options: [
              'Le groupe carboxyle $-\\mathrm{COOH}$',
              'Le groupe carbonyle $-\\mathrm{CHO}$',
              'Le groupe hydroxyle $-\\mathrm{OH}$ sur carbone tétragonal',
              'Le pont oxygène $-\\mathrm{O}-$ entre deux alkyles',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le groupe carboxyle –COOH caractérise les acides carboxyliques (alors que –CHO correspond aux aldéhydes et –OH seul aux alcools).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Nomenclature',
          stepTheme: 'C1 = –COOH',
          stepTitle: 'Numéroter un acide carboxylique ramifié',
          paragraphText:
            'On commence toujours la numérotation de la chaîne principale par le carbone du groupe –COOH (indice 1).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q2',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH(CH_3)-CH_2-COOH}$ ?',
            options: [
              'Acide $3$-méthylbutanoïque',
              'Acide $2$-méthylbutanoïque',
              'Acide $3$-méthylpropanoïque',
              'Acide pentanoïque',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En comptant C1 = –COOH, C2 = –CH₂–, C3 = –CH(CH₃)– et C4 = –CH₃, la chaîne comporte 4 carbones et un méthyle en 3 : acide 3-méthylbutanoïque.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Activité p. 4',
          stepTitle: 'Passer du nom à la formule semi-développée',
          paragraphText:
            'Pour écrire un acide carboxylique à partir de son nom, on place –COOH à une extrémité (C1) puis les substituants selon les indices.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q3',
            type: 'mcq',
            prompt: 'Quelle formule semi-développée correspond à l’acide $3,3$-diméthylbutanoïque ?',
            options: [
              '$\\mathrm{CH_3-C(CH_3)_2-CH_2-COOH}$',
              '$\\mathrm{CH_3-CH_2-C(CH_3)_2-COOH}$',
              '$\\mathrm{CH_3-CH(CH_3)-CH(CH_3)-COOH}$',
              '$\\mathrm{(CH_3)_2CH-CH_2-CH_2-COOH}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Chaîne à 4 carbones terminée par C1OOH, avec C2 = –CH₂– et deux méthyles sur C3 : CH₃–C(CH₃)₂–CH₂–COOH.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Masse molaire',
          stepTheme: 'Calcul de n',
          stepTitle: 'Retrouver la formule d’un acide à partir de sa masse molaire',
          paragraphText:
            'La masse molaire d’un acide carboxylique saturé CₙH₂ₙO₂ vaut M = 14n + 32 g/mol.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q4',
            type: 'mcq',
            prompt: 'Un acide carboxylique saturé possède une masse molaire $M = 88\\text{ g/mol}$. Quelle est sa formule brute ?',
            options: [
              '$\\mathrm{C_4H_8O_2}$',
              '$\\mathrm{C_3H_6O_2}$',
              '$\\mathrm{C_5H_{10}O_2}$',
              '$\\mathrm{C_4H_8O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$14n + 32 = 88 \\implies 14n = 56 \\implies n = 4$, d’où $\\mathrm{C_4H_8O_2}$ (acide butanoïque ou acide 2-méthylpropanoïque).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège de lecture',
          stepTheme: 'Aldéhyde vs Acide',
          stepTitle: 'Ne pas confondre –CHO et –COOH',
          paragraphText:
            'Dans la formule développée, le carbone de l’aldéhyde porte (=O, –H) tandis que celui de l’acide carboxylique porte (=O, –OH).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q5',
            type: 'mcq',
            prompt: 'En quoi la formule de l’acide éthanoïque ($\\mathrm{CH_3-COOH}$) diffère-t-elle de celle de l’éthanal ($\\mathrm{CH_3-CHO}$) ?',
            options: [
              'L’acide éthanoïque possède un groupe $-\\mathrm{OH}$ à la place de l’atome $-\\mathrm{H}$ porté par le carbone carbonyle',
              'L’acide éthanoïque contient un atome de carbone de plus que l’éthanal',
              'L’éthanal possède deux atomes d’oxygène contre un seul pour l’acide éthanoïque',
              'L’acide éthanoïque est un éther-oxyde cyclique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Tous deux ont 2 carbones (C₂), mais l’aldéhyde a –C(=O)H (1 O) alors que l’acide carboxylique a –C(=O)OH (2 O).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Acide le plus simple',
          stepTheme: 'R = H',
          stepTitle: 'Cas particulier où le radical R est un atome H',
          paragraphText:
            'Lorsque R = H dans R–COOH, on obtient l’acide à 1 seul carbone H–COOH : l’acide méthanoïque (M = 46 g/mol).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q6',
            type: 'mcq',
            prompt: 'Quel est le nom de l’acide carboxylique le plus simple $\\mathrm{H-COOH}$ ?',
            options: [
              'Acide méthanoïque',
              'Acide éthanoïque',
              'Méthanal',
              'Méthanoate de méthyle',
            ],
            correctAnswerIndex: 0,
            explanation:
              'H–COOH possède 1 seul atome de carbone portant le groupe carboxyle : il correspond au méthane et se nomme acide méthanoïque.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q1',
          type: 'mcq',
          prompt: 'Quel groupement caractéristique identifie un acide carboxylique ?',
          options: [
            'Le groupe carboxyle $-\\mathrm{COOH}$',
            'Le groupe carbonyle $-\\mathrm{CHO}$',
            'Le groupe hydroxyle $-\\mathrm{OH}$ sur carbone tétragonal',
            'Le pont oxygène $-\\mathrm{O}-$ entre deux alkyles',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le groupe carboxyle –COOH caractérise les acides carboxyliques (alors que –CHO correspond aux aldéhydes et –OH seul aux alcools).',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q2',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH(CH_3)-CH_2-COOH}$ ?',
          options: [
            'Acide $3$-méthylbutanoïque',
            'Acide $2$-méthylbutanoïque',
            'Acide $3$-méthylpropanoïque',
            'Acide pentanoïque',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En comptant C1 = –COOH, C2 = –CH₂–, C3 = –CH(CH₃)– et C4 = –CH₃, la chaîne comporte 4 carbones et un méthyle en 3 : acide 3-méthylbutanoïque.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q3',
          type: 'mcq',
          prompt: 'Quelle formule semi-développée correspond à l’acide $3,3$-diméthylbutanoïque ?',
          options: [
            '$\\mathrm{CH_3-C(CH_3)_2-CH_2-COOH}$',
            '$\\mathrm{CH_3-CH_2-C(CH_3)_2-COOH}$',
            '$\\mathrm{CH_3-CH(CH_3)-CH(CH_3)-COOH}$',
            '$\\mathrm{(CH_3)_2CH-CH_2-CH_2-COOH}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Chaîne à 4 carbones terminée par C1OOH, avec C2 = –CH₂– et deux méthyles sur C3 : CH₃–C(CH₃)₂–CH₂–COOH.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q4',
          type: 'mcq',
          prompt: 'Un acide carboxylique saturé possède une masse molaire $M = 88\\text{ g/mol}$. Quelle est sa formule brute ?',
          options: [
            '$\\mathrm{C_4H_8O_2}$',
            '$\\mathrm{C_3H_6O_2}$',
            '$\\mathrm{C_5H_{10}O_2}$',
            '$\\mathrm{C_4H_8O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$14n + 32 = 88 \\implies 14n = 56 \\implies n = 4$, d’où $\\mathrm{C_4H_8O_2}$ (acide butanoïque ou acide 2-méthylpropanoïque).',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q5',
          type: 'mcq',
          prompt: 'En quoi la formule de l’acide éthanoïque ($\\mathrm{CH_3-COOH}$) diffère-t-elle de celle de l’éthanal ($\\mathrm{CH_3-CHO}$) ?',
          options: [
            'L’acide éthanoïque possède un groupe $-\\mathrm{OH}$ à la place de l’atome $-\\mathrm{H}$ porté par le carbone carbonyle',
            'L’acide éthanoïque contient un atome de carbone de plus que l’éthanal',
            'L’éthanal possède deux atomes d’oxygène contre un seul pour l’acide éthanoïque',
            'L’acide éthanoïque est un éther-oxyde cyclique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Tous deux ont 2 carbones (C₂), mais l’aldéhyde a –C(=O)H (1 O) alors que l’acide carboxylique a –C(=O)OH (2 O).',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p04_q6',
          type: 'mcq',
          prompt: 'Quel est le nom de l’acide carboxylique le plus simple $\\mathrm{H-COOH}$ ?',
          options: [
            'Acide méthanoïque',
            'Acide éthanoïque',
            'Méthanal',
            'Méthanoate de méthyle',
          ],
          correctAnswerIndex: 0,
          explanation:
            'H–COOH possède 1 seul atome de carbone portant le groupe carboxyle : il correspond au méthane et se nomme acide méthanoïque.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Esters : nomenclature, formule CₙH₂ₙO₂ et déterminations quantitatives
    // ========================================================================
    {
      id: 'premiere_c_chimie_l04_composes_oxygenes_p05',
      order: 5,
      title: 'Esters : nomenclature et détermination de formule brute',
      summary:
        'Nommer un ester R–COO–R′ en deux termes ([alcane]oate de [alkyle]), écrire sa formule et déterminer sa formule brute par pourcentage massique ou densité de vapeur.',
      conceptExplanation:
        "Les **esters** comportent le groupe fonctionnel ester $-\\mathrm{COO}-$ : formule générale $\\mathrm{R-C(=O)-O-R'}$ (où $R$ est $\\mathrm{H}$ ou un groupe alkyle, et $R'$ est obligatoirement un groupe alkyle). Leur formule brute générale est $\\mathrm{C_nH_{2n}O_2}$ ($n \\ge 2$) : ils sont **isomères de fonction des acides carboxyliques**.\n\n**Règle de nomenclature (2 termes)** :\n1. Le **premier terme** provient de la partie acide $\\mathrm{R-COO-}$ (numérotée depuis le carbone $\\mathrm{C=O}$ = $\\text{C}_1$) : on remplace *« oïque »* de l’acide par **-oate** (ex. `éthanoate`, `propanoate`, `3-méthylbutanoate`).\n2. Le **second terme** est le nom du groupe **alkyle $-R'$** lié par liaison simple au deuxième atome d’oxygène (numéroté à partir du carbone lié à O = $\\text{C}_1'$) : ex. `de méthyle`, `de propyle`, `de 2-méthylpropyle`, `de 1-méthylpropyle`.\n\n**Détermination quantitative (exercices du cours p. 5, 7, 8)** :\n- Par le pourcentage en oxygène : $\\%\\mathrm{O} = \\frac{32}{M} \\times 100 \\implies M = \\frac{3200}{\\%\\mathrm{O}} = 14n + 32$.\n- Par la densité de vapeur par rapport à l’air : $M = 29 \\cdot d$.",
      keyRule:
        'Un ester R–COO–R′ (formule CₙH₂ₙO₂ pour n ≥ 2) se nomme « [chaîne acide R–C=O]oate de [alkyle R′] » ; on trouve M par 3200/%O ou 29·d puis n via 14n + 32 = M.',
      formulas: [
        {
          name: 'Masse molaire et pourcentage d’oxygène d’un ester saturé',
          formula: 'M = 14n + 32 = 29\\,d = \\frac{3200}{\\%\\mathrm{O}}',
          note: 'Valable aussi pour tout acide carboxylique saturé CₙH₂ₙO₂',
        },
      ],
      workedExample: {
        title: 'Identifier un ester par analyse élémentaire ou densité (Situation p. 5 & Ex 4–5 p. 7–8)',
        statement:
          'Détermine l’ester dans ces deux cas : (1) un ester $\\mathrm{C_xH_{2x}O_2}$ à chaîne ramifiée contient $36{,}36\\%$ d’oxygène et son carbone fonctionnel est lié à un seul H ; (2) un ester de densité $d = 4{,}48$ possède un groupe $R\'$ linéaire à $5$ carbones.',
        methodSteps: [
          '1) Cas 1 : M = 3200 / 36,36 ≈ 88 g/mol → 14x + 32 = 88 → x = 4, formule C₄H₈O₂. Carbone fonctionnel lié à H impose un méthanoate (H–COO–R′) avec 3 carbones restants pour R′ ; la chaîne étant ramifiée, R′ est l’isopropyle –CH(CH₃)₂ → méthanoate d’isopropyle (ou de 1-méthyléthyle).',
          '2) Cas 2 : M = 29 × 4,48 ≈ 130 g/mol → 14n + 32 = 130 → n = 7, formule C₇H₁₄O₂. Puisque R′ est linéaire à 5 carbones (pentyle), la partie acide R–COO– compte 7 − 5 = 2 carbones → éthanoate de pentyle (CH₃–COO–C₅H₁₁).',
        ],
        conclusion:
          'L’identification d’un ester combine toujours la formule brute (via M) et les informations structurales sur R et R′.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Ester',
          stepTheme: 'R–COO–R′',
          stepTitle: 'Lire les deux parties d’un ester',
          paragraphText:
            'Dans R–C(=O)–O–R′, la partie R–C(=O) donne la terminaison -oate et la partie –R′ reliée à l’oxygène par simple liaison donne « de [alkyle] ».',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q1',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de l’ester $\\mathrm{CH_3-CH(CH_3)-CH_2-COO-CH_3}$ ?',
            options: [
              '$3$-méthylbutanoate de méthyle',
              'Méthanoate de $3$-méthylbutyle',
              '$2$-méthylbutanoate de méthyle',
              'Acide $3$-méthylbutanoïque',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La partie acide (à gauche de –O–) compte 4 carbones avec C1 = –COO– et un méthyle en C3 (3-méthylbutanoate), liée à un méthyle à droite : 3-méthylbutanoate de méthyle.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Formule ← Nom',
          stepTheme: 'Exercice 1C p. 6',
          stepTitle: 'Écrire la formule d’un ester dont R et R′ sont ramifiés',
          paragraphText:
            'Pour le premier terme (-oate), on numérote depuis le carbone de C=O ; pour le second terme (alkyle), on numérote depuis le carbone lié à l’atome O.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q2',
            type: 'mcq',
            prompt: 'Quelle formule semi-développée représente le $3$-éthylpentanoate de $1$-méthylpropyle ?',
            options: [
              '$\\mathrm{CH_3-CH_2-CH(C_2H_5)-CH_2-COO-CH(CH_3)-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CH(C_2H_5)-CH_2-COO-CH_2-CH(CH_3)-CH_3}$',
              '$\\mathrm{CH_3-CH(CH_3)-CH_2-COO-CH(C_2H_5)-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CH_2-CH_2-COO-CH_2-CH_2-CH_3}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Partie acide à 5 C avec éthyle en C3 : CH₃–CH₂–CH(C₂H₅)–CH₂–COO– ; partie alkyle à 3 C avec méthyle sur le C1 lié à O : –CH(CH₃)–CH₂–CH₃.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Pourcentage %O',
          stepTheme: 'Situation p. 5',
          stepTitle: 'Trouver la formule brute à partir de %O',
          paragraphText:
            'Une mole d’ester saturé renferme 2 moles d’atomes O, soit 32 g d’oxygène : M = 3200 / (%O).',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q3',
            type: 'mcq',
            prompt: 'Un ester $\\mathrm{C_xH_{2x}O_2}$ contient $36{,}36\\%$ en masse d’oxygène et son carbone fonctionnel porte un atome $\\mathrm{H}$ avec une chaîne ramifiée. Quel est cet ester ?',
            options: [
              'Le méthanoate d’isopropyle ($\\mathrm{H-COO-CH(CH_3)_2}$)',
              'Le butanoate d’éthyle',
              'L’éthanoate d’éthyle',
              'Le méthanoate de propyle linéaire',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$M = 3200 / 36{,}36 \\approx 88\\text{ g/mol} \\implies x = 4$ ($\\mathrm{C_4H_8O_2}$). Un H sur C fonctionnel donne $\\mathrm{H-COO-R\'}$ (3 C dans R′), ramifié $\\implies$ isopropyle.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Densité d',
          stepTheme: 'Exercice 5 p. 8',
          stepTitle: 'Trouver un ester grâce à sa densité de vapeur',
          paragraphText:
            'La masse molaire vaut M ≈ 29 × d. En résolvant 14n + 32 = M, on obtient le nombre total n d’atomes de carbone de l’ester.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q4',
            type: 'mcq',
            prompt: 'Un ester aromatique de densité de vapeur $d = 4{,}48$ possède un groupe alkyle $-R\'$ linéaire à $5$ carbones. Quel est son nom ?',
            options: [
              'Éthanoate de pentyle ($\\mathrm{CH_3-COO-C_5H_{11}}$)',
              'Pentanoate d’éthyle',
              'Butanoate de propyle',
              'Propanoate de butyle',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$M = 29 \\times 4{,}48 \\approx 130\\text{ g/mol} \\implies 14n + 32 = 130 \\implies n = 7$. R′ comptant 5 C (pentyle), la partie acide en compte $7 - 5 = 2$ (éthanoate) : éthanoate de pentyle.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Pourcentages C, H, O',
          stepTheme: 'Exercice 4 p. 7',
          stepTitle: 'Retrouver x, y, z à partir de %C, %H, %O et M',
          paragraphText:
            'Dans CₓHᵧO_z de masse molaire M, on applique 12x = (%C/100)·M, y = (%H/100)·M et 16z = (%O/100)·M.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q5',
            type: 'mcq',
            prompt: 'Une poudre à arôme d’ananas ($M = 116\\text{ g/mol}$) dérivée de l’acide butanoïque renferme $62{,}1\\%$ de $\\mathrm{C}$, $10{,}3\\%$ de $\\mathrm{H}$ et $27{,}6\\%$ de $\\mathrm{O}$. Quel est ce composé ?',
            options: [
              'Le butanoate d’éthyle ($\\mathrm{C_6H_{12}O_2}$)',
              'L’éthanoate de butyle ($\\mathrm{C_6H_{12}O_2}$)',
              'Le butanoate de méthyle ($\\mathrm{C_5H_{10}O_2}$)',
              'L’acide hexanoïque ($\\mathrm{C_6H_{12}O_2}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$12x \\approx 72 \\implies x = 6$, $y \\approx 12$, $16z \\approx 32 \\implies z = 2$ ($\\mathrm{C_6H_{12}O_2}$). Formé à partir d’acide butanoïque (4 C), il reste 2 C pour R′ : butanoate d’éthyle.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Ordre des noms',
          stepTheme: 'Ne pas inverser R et R′',
          stepTitle: 'Attention au sens de lecture d’un ester',
          paragraphText:
            'On confond souvent propanoate de méthyle (3 C acide + 1 C alcool) et méthanoate de propyle (1 C acide + 3 C alcool) : le carbone doublement lié à O appartient toujours au terme en -oate.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q6',
            type: 'mcq',
            prompt: 'Comment se distingue l’éthanoate de propyle du propanoate d’éthyle ?',
            options: [
              'Dans l’éthanoate de propyle, le groupe $\\mathrm{C=O}$ fait partie de la chaîne à $2$ carbones ($\\mathrm{CH_3-COO-C_3H_7}$), et inversement dans le propanoate d’éthyle ($\\mathrm{C_2H_5-COO-C_2H_5}$)',
              'Ce sont deux noms différents pour exactement la même molécule',
              'L’éthanoate de propyle possède 6 carbones contre 5 pour le propanoate d’éthyle',
              'Le propanoate d’éthyle est un acide carboxylique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les deux sont des isomères C₅H₁₀O₂, mais le côté acyle (porteur de C=O) détermine toujours le premier mot en « -oate ».',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q1',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de l’ester $\\mathrm{CH_3-CH(CH_3)-CH_2-COO-CH_3}$ ?',
          options: [
            '$3$-méthylbutanoate de méthyle',
            'Méthanoate de $3$-méthylbutyle',
            '$2$-méthylbutanoate de méthyle',
            'Acide $3$-méthylbutanoïque',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La partie acide (à gauche de –O–) compte 4 carbones avec C1 = –COO– et un méthyle en C3 (3-méthylbutanoate), liée à un méthyle à droite : 3-méthylbutanoate de méthyle.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q2',
          type: 'mcq',
          prompt: 'Quelle formule semi-développée représente le $3$-éthylpentanoate de $1$-méthylpropyle ?',
          options: [
            '$\\mathrm{CH_3-CH_2-CH(C_2H_5)-CH_2-COO-CH(CH_3)-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CH(C_2H_5)-CH_2-COO-CH_2-CH(CH_3)-CH_3}$',
            '$\\mathrm{CH_3-CH(CH_3)-CH_2-COO-CH(C_2H_5)-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CH_2-CH_2-COO-CH_2-CH_2-CH_3}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Partie acide à 5 C avec éthyle en C3 : CH₃–CH₂–CH(C₂H₅)–CH₂–COO– ; partie alkyle à 3 C avec méthyle sur le C1 lié à O : –CH(CH₃)–CH₂–CH₃.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q3',
          type: 'mcq',
          prompt: 'Un ester $\\mathrm{C_xH_{2x}O_2}$ contient $36{,}36\\%$ en masse d’oxygène et son carbone fonctionnel porte un atome $\\mathrm{H}$ avec une chaîne ramifiée. Quel est cet ester ?',
          options: [
            'Le méthanoate d’isopropyle ($\\mathrm{H-COO-CH(CH_3)_2}$)',
            'Le butanoate d’éthyle',
            'L’éthanoate d’éthyle',
            'Le méthanoate de propyle linéaire',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$M = 3200 / 36{,}36 \\approx 88\\text{ g/mol} \\implies x = 4$ ($\\mathrm{C_4H_8O_2}$). Un H sur C fonctionnel donne $\\mathrm{H-COO-R\'}$ (3 C dans R′), ramifié $\\implies$ isopropyle.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q4',
          type: 'mcq',
          prompt: 'Un ester aromatique de densité de vapeur $d = 4{,}48$ possède un groupe alkyle $-R\'$ linéaire à $5$ carbones. Quel est son nom ?',
          options: [
            'Éthanoate de pentyle ($\\mathrm{CH_3-COO-C_5H_{11}}$)',
            'Pentanoate d’éthyle',
            'Butanoate de propyle',
            'Propanoate de butyle',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$M = 29 \\times 4{,}48 \\approx 130\\text{ g/mol} \\implies 14n + 32 = 130 \\implies n = 7$. R′ comptant 5 C (pentyle), la partie acide en compte $7 - 5 = 2$ (éthanoate) : éthanoate de pentyle.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q5',
          type: 'mcq',
          prompt: 'Une poudre à arôme d’ananas ($M = 116\\text{ g/mol}$) dérivée de l’acide butanoïque renferme $62{,}1\\%$ de $\\mathrm{C}$, $10{,}3\\%$ de $\\mathrm{H}$ et $27{,}6\\%$ de $\\mathrm{O}$. Quel est ce composé ?',
          options: [
            'Le butanoate d’éthyle ($\\mathrm{C_6H_{12}O_2}$)',
            'L’éthanoate de butyle ($\\mathrm{C_6H_{12}O_2}$)',
            'Le butanoate de méthyle ($\\mathrm{C_5H_{10}O_2}$)',
            'L’acide hexanoïque ($\\mathrm{C_6H_{12}O_2}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$12x \\approx 72 \\implies x = 6$, $y \\approx 12$, $16z \\approx 32 \\implies z = 2$ ($\\mathrm{C_6H_{12}O_2}$). Formé à partir d’acide butanoïque (4 C), il reste 2 C pour R′ : butanoate d’éthyle.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p05_q6',
          type: 'mcq',
          prompt: 'Comment se distingue l’éthanoate de propyle du propanoate d’éthyle ?',
          options: [
            'Dans l’éthanoate de propyle, le groupe $\\mathrm{C=O}$ fait partie de la chaîne à $2$ carbones ($\\mathrm{CH_3-COO-C_3H_7}$), et inversement dans le propanoate d’éthyle ($\\mathrm{C_2H_5-COO-C_2H_5}$)',
            'Ce sont deux noms différents pour exactement la même molécule',
            'L’éthanoate de propyle possède 6 carbones contre 5 pour le propanoate d’éthyle',
            'Le propanoate d’éthyle est un acide carboxylique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les deux sont des isomères C₅H₁₀O₂, mais le côté acyle (porteur de C=O) détermine toujours le premier mot en « -oate ».',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Synthèse des 6 familles oxygénées et intérêts pratiques
    // ========================================================================
    {
      id: 'premiere_c_chimie_l04_composes_oxygenes_p06',
      order: 6,
      title: 'Synthèse des 6 familles oxygénées et intérêts pratiques',
      summary:
        'Relier immédiatement chaque formule brute (CₙH₂ₙ₊₂O, CₙH₂ₙO, CₙH₂ₙO₂) aux deux familles correspondantes et connaître les applications courantes des composés oxygénés.',
      conceptExplanation:
        "Les 6 familles oxygénées au programme de 1ères CD se regroupent deux par deux selon leur formule brute générale :\n\n- **$\mathrm{C_nH_{2n+2}O}$** $\\leftrightarrow$ **Alcools** ($-\\mathrm{OH}$) et **Éthers-oxydes** ($-\\mathrm{O}-$).\n- **$\mathrm{C_nH_{2n}O}$** $\\leftrightarrow$ **Aldéhydes** ($-\\mathrm{CHO}$) et **Cétones** ($>\\mathrm{C=O}$ interne).\n- **$\mathrm{C_nH_{2n}O_2}$** $\\leftrightarrow$ **Acides carboxyliques** ($-\\mathrm{COOH}$) et **Esters** ($-\\mathrm{COO}-$).\n\n**Intérêt général des composés oxygénés (cours p. 5)** :\n- **Alcools et éthers-oxydes** : solvants organiques, désinfectants médicaux (éthanol à 70°, éther), boissons alcoolisées et **biocarburant** (éthanol).\n- **Aldéhydes et cétones** : solvants industriels (acétone / propanone), parfumerie ; le **formol** (solution aqueuse de méthanal) sert à la **conservation des corps** biologiques.\n- **Acides carboxyliques** : très présents dans l’**alimentation** (**acide citrique** dans le citron, **acide éthanoïque** dans le vinaigre).\n- **Esters** : responsables des **arômes naturels des fruits**, utilisés en **parfumerie** et en **savonnerie** (corps gras / triglycérides).",
      keyRule:
        'À chaque formule brute saturée correspondent exactement deux familles oxygénées : CₙH₂ₙ₊₂O → alcool ou éther-oxyde ; CₙH₂ₙO → aldéhyde ou cétone ; CₙH₂ₙO₂ → acide carboxylique ou ester.',
      formulas: [
        {
          name: 'Tableau d’équivalence formule brute → familles',
          formula: '\\mathrm{C_nH_{2n+2}O} \\leftrightarrow \\text{Alcool / Éther} \\;;\\; \\mathrm{C_nH_{2n}O} \\leftrightarrow \\text{Aldéhyde / Cétone} \\;;\\; \\mathrm{C_nH_{2n}O_2} \\leftrightarrow \\text{Acide / Ester}',
          note: 'Permet d’identifier instantanément les familles possibles d’une formule brute (Exercice 3 p. 6–7)',
        },
      ],
      workedExample: {
        title: 'Associer chaque formule brute à ses familles possibles (Exercice 3 p. 6–7)',
        statement:
          'Relie chacune des formules brutes suivantes aux familles correspondantes : $\\mathrm{C_5H_{12}O}$, $\\mathrm{C_4H_8O}$ et $\\mathrm{C_3H_6O_2}$.',
        methodSteps: [
          '1) C₅H₁₂O : pour n = 5, 2n + 2 = 12 avec 1 O → forme CₙH₂ₙ₊₂O → Alcool ou Éther-oxyde.',
          '2) C₄H₈O : pour n = 4, 2n = 8 avec 1 O → forme CₙH₂ₙO → Aldéhyde ou Cétone.',
          '3) C₃H₆O₂ : pour n = 3, 2n = 6 avec 2 O → forme CₙH₂ₙO₂ → Acide carboxylique ou Ester.',
        ],
        conclusion:
          'Il suffit de comparer H à 2n et de compter le nombre d’atomes O pour associer toute formule brute à son couple de familles.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Carte de synthèse des 6 familles de composés oxygénés',
        tableData: {
          headers: ['Formule brute', 'Famille 1', 'Famille 2', 'Usages majeurs'],
          rows: [
            ['CₙH₂ₙ₊₂O', 'Alcool (–OH)', 'Éther-oxyde (–O–)', 'Solvants, désinfectants, biocarburant'],
            ['CₙH₂ₙO', 'Aldéhyde (–CHO)', 'Cétone (–CO–)', 'Solvants, parfumerie, formol (conservation)'],
            ['CₙH₂ₙO₂', 'Acide carboxylique (–COOH)', 'Ester (–COO–)', 'Vinaigre, citron, arômes fruités, savonnerie'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Exercice 3 p. 6',
          stepTheme: 'C₅H₁₂O',
          stepTitle: 'Associer une formule CₙH₂ₙ₊₂O à ses deux familles',
          paragraphText:
            'Si le nombre d’atomes H vaut 2n + 2 et qu’il y a 1 seul atome O, le composé ne peut être qu’un alcool saturé ou un éther-oxyde.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q1',
            type: 'mcq',
            prompt: 'À quelles familles de composés oxygénés peut appartenir un corps pur de formule brute $\\mathrm{C_5H_{12}O}$ ?',
            options: [
              'Alcool ou éther-oxyde',
              'Aldéhyde ou cétone',
              'Acide carboxylique ou ester',
              'Ester ou éther-oxyde',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour n = 5, 2n + 2 = 12 : C₅H₁₂O vérifie CₙH₂ₙ₊₂O, formule commune aux alcools saturés et aux éthers-oxydes.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Exercice 3 p. 6',
          stepTheme: 'C₄H₈O et C₃H₆O₂',
          stepTitle: 'Associer CₙH₂ₙO et CₙH₂ₙO₂ à leurs familles',
          paragraphText:
            'Avec 2n atomes H : 1 atome O donne aldéhyde ou cétone ; 2 atomes O donnent acide carboxylique ou ester.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q2',
            type: 'mcq',
            prompt: 'Quelles couples de familles correspondent respectivement aux formules brutes $\\mathrm{C_4H_8O}$ et $\\mathrm{C_3H_6O_2}$ ?',
            options: [
              '$\\mathrm{C_4H_8O}$ : aldéhyde ou cétone ; $\\mathrm{C_3H_6O_2}$ : acide carboxylique ou ester',
              '$\\mathrm{C_4H_8O}$ : alcool ou cétone ; $\\mathrm{C_3H_6O_2}$ : éther-oxyde ou ester',
              '$\\mathrm{C_4H_8O}$ : acide ou aldéhyde ; $\\mathrm{C_3H_6O_2}$ : alcool ou acide',
              '$\\mathrm{C_4H_8O}$ : éther-oxyde uniquement ; $\\mathrm{C_3H_6O_2}$ : cétone uniquement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C₄H₈O est de la forme CₙH₂ₙO (aldéhyde/cétone) et C₃H₆O₂ est de la forme CₙH₂ₙO₂ (acide carboxylique/ester).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Applications',
          stepTheme: 'Formol & Aldéhydes',
          stepTitle: 'Usages des aldéhydes et cétones',
          paragraphText:
            'Les aldéhydes et cétones servent de solvants en parfumerie, et le formol (aldéhyde particulier) est utilisé pour la conservation des tissus et spécimens biologiques.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q3',
            type: 'mcq',
            prompt: 'Quel composé oxygéné particulier, appartenant à la famille des aldéhydes, est utilisé pour la conservation des corps biologiques ?',
            options: [
              'Le formol (méthanal en solution)',
              'L’acide éthanoïque (vinaigre)',
              'Le butanoate d’éthyle',
              'L’oxyde de diéthyle',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le formol est une solution d’un aldéhyde (le méthanal, H–CHO) utilisée pour la conservation des spécimens et des corps.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Alimentation',
          stepTheme: 'Acides & Esters',
          stepTitle: 'Acides carboxyliques et esters au quotidien',
          paragraphText:
            'Le vinaigre contient de l’acide éthanoïque, le citron de l’acide citrique, et les arômes naturels des fruits ainsi que les corps gras (triglycérides) des savons sont des esters.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q4',
            type: 'mcq',
            prompt: 'Quel acide carboxylique est le constituant acide caractéristique du vinaigre ?',
            options: [
              'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
              'L’acide méthanoïque',
              'L’éthanoate d’éthyle',
              'L’éthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le vinaigre est une solution aqueuse d’acide éthanoïque (CH₃–COOH), tandis que le citron contient de l’acide citrique.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Parfumerie & Savon',
          stepTheme: 'Rôle des esters',
          stepTitle: 'Intérêt industriel des esters',
          paragraphText:
            'Grâce à leurs odeurs agréables et fruitées, les esters sont employés dans les arômes alimentaires et la parfumerie, et les triglycérides (triesters naturels) en savonnerie.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q5',
            type: 'mcq',
            prompt: 'Dans quels domaines industriels utilise-t-on principalement les esters ?',
            options: [
              'En parfumerie, pour les arômes alimentaires synthétiques et en savonnerie (corps gras)',
              'Comme gaz carburant unique des fusées spatiales',
              'Comme matériaux rigides de tuyauterie à la place du PVC',
              'Pour fabriquer des métaux ferreux en haut-fourneau',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les esters volatils fournissent des arômes fruités/floraux (parfums, sirops) et les corps gras (triglycérides) servent à fabriquer les savons.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Bilan',
          stepTheme: 'Piège n = 2 pour CₙH₂ₙO₂',
          stepTitle: 'Dénombrer tous les isomères de C₂H₄O₂',
          paragraphText:
            'Pour C₂H₄O₂, il n’existe qu’un seul acide carboxylique (acide éthanoïque) et un seul ester (méthanoate de méthyle), car R′ dans R–COO–R′ doit contenir au moins 1 C.',
          exercise: {
            id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q6',
            type: 'mcq',
            prompt: 'Quels sont les deux isomères acide carboxylique et ester de formule brute $\\mathrm{C_2H_4O_2}$ ?',
            options: [
              'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$) et le méthanoate de méthyle ($\\mathrm{H-COO-CH_3}$)',
              'L’acide méthanoïque et l’éthanoate d’éthyle',
              'L’éthanol et l’oxyde de diméthyle',
              'L’éthanal et la propanone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Avec 2 C et 2 O (C₂H₄O₂), on a l’acide éthanoïque CH₃–COOH et l’ester H–COO–CH₃ (méthanoate de méthyle).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q1',
          type: 'mcq',
          prompt: 'À quelles familles de composés oxygénés peut appartenir un corps pur de formule brute $\\mathrm{C_5H_{12}O}$ ?',
          options: [
            'Alcool ou éther-oxyde',
            'Aldéhyde ou cétone',
            'Acide carboxylique ou ester',
            'Ester ou éther-oxyde',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour n = 5, 2n + 2 = 12 : C₅H₁₂O vérifie CₙH₂ₙ₊₂O, formule commune aux alcools saturés et aux éthers-oxydes.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q2',
          type: 'mcq',
          prompt: 'Quelles couples de familles correspondent respectivement aux formules brutes $\\mathrm{C_4H_8O}$ et $\\mathrm{C_3H_6O_2}$ ?',
          options: [
            '$\\mathrm{C_4H_8O}$ : aldéhyde ou cétone ; $\\mathrm{C_3H_6O_2}$ : acide carboxylique ou ester',
            '$\\mathrm{C_4H_8O}$ : alcool ou cétone ; $\\mathrm{C_3H_6O_2}$ : éther-oxyde ou ester',
            '$\\mathrm{C_4H_8O}$ : acide ou aldéhyde ; $\\mathrm{C_3H_6O_2}$ : alcool ou acide',
            '$\\mathrm{C_4H_8O}$ : éther-oxyde uniquement ; $\\mathrm{C_3H_6O_2}$ : cétone uniquement',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C₄H₈O est de la forme CₙH₂ₙO (aldéhyde/cétone) et C₃H₆O₂ est de la forme CₙH₂ₙO₂ (acide carboxylique/ester).',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q3',
          type: 'mcq',
          prompt: 'Quel composé oxygéné particulier, appartenant à la famille des aldéhydes, est utilisé pour la conservation des corps biologiques ?',
          options: [
            'Le formol (méthanal en solution)',
            'L’acide éthanoïque (vinaigre)',
            'Le butanoate d’éthyle',
            'L’oxyde de diéthyle',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le formol est une solution d’un aldéhyde (le méthanal, H–CHO) utilisée pour la conservation des spécimens et des corps.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q4',
          type: 'mcq',
          prompt: 'Quel acide carboxylique est le constituant acide caractéristique du vinaigre ?',
          options: [
            'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
            'L’acide méthanoïque',
            'L’éthanoate d’éthyle',
            'L’éthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le vinaigre est une solution aqueuse d’acide éthanoïque (CH₃–COOH), tandis que le citron contient de l’acide citrique.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q5',
          type: 'mcq',
          prompt: 'Dans quels domaines industriels utilise-t-on principalement les esters ?',
          options: [
            'En parfumerie, pour les arômes alimentaires synthétiques et en savonnerie (corps gras)',
            'Comme gaz carburant unique des fusées spatiales',
            'Comme matériaux rigides de tuyauterie à la place du PVC',
            'Pour fabriquer des métaux ferreux en haut-fourneau',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les esters volatils fournissent des arômes fruités/floraux (parfums, sirops) et les corps gras (triglycérides) servent à fabriquer les savons.',
        },
        {
          id: 'premiere_c_chimie_l04_composes_oxygenes_p06_q6',
          type: 'mcq',
          prompt: 'Quels sont les deux isomères acide carboxylique et ester de formule brute $\\mathrm{C_2H_4O_2}$ ?',
          options: [
            'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$) et le méthanoate de méthyle ($\\mathrm{H-COO-CH_3}$)',
            'L’acide méthanoïque et l’éthanoate d’éthyle',
            'L’éthanol et l’oxyde de diméthyle',
            'L’éthanal et la propanone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Avec 2 C et 2 O (C₂H₄O₂), on a l’acide éthanoïque CH₃–COOH et l’ester H–COO–CH₃ (méthanoate de méthyle).',
        },
      ],
    },
  ],
};
