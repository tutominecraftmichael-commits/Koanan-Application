import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CD - Chimie Organique - Estérification et hydrolyse d’un ester » (format v2).
export const CHIMIE_1RE_CD_L06_ESTERIFICATION_HYDROLYSE: CurriculumChapter = {
  id: 'premiere_c_chimie_l06_esterification_hydrolyse',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 6,
  title: 'Leçon 6 : Estérification et hydrolyse d’un ester',
  summary:
    'Équations et caractéristiques de l’estérification et de l’hydrolyse, suivi cinétique n(ester) = f(t), équilibre chimique réversible (⇄), rendement, méthodes d’amélioration (excès, distillation) et arômes d’esters.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CD - Chimie Organique : Estérification et hydrolyse d’un ester.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Réaction d’estérification : définition, équation et caractéristiques
    // ========================================================================
    {
      id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01',
      order: 1,
      title: 'Réaction d’estérification : définition et caractéristiques',
      summary:
        'Définir la réaction d’estérification entre un acide carboxylique et un alcool, écrire son équation-bilan et connaître ses trois caractères : lente, limitée et athermique.',
      conceptExplanation:
        "La **réaction d’estérification** est la réaction chimique entre un **acide carboxylique** ($\\mathrm{R-COOH}$) et un **alcool** ($\\mathrm{R'-OH}$), qui conduit à la formation d’un **ester** ($\\mathrm{R-COO-R'}$) et d’**eau** ($\\mathrm{H_2O}$) :\n\n$$\\mathrm{R-COOH + R'-OH \\longrightarrow R-COO-R' + H_2O}$$\n\n- **Exemple type** (synthèse de l’éthanoate d’éthyle) :\n  $$\\mathrm{CH_3-COOH + CH_3-CH_2-OH \\longrightarrow CH_3-COO-CH_2-CH_3 + H_2O}$$\n- **Caractéristiques fondamentales** mises en évidence par l’expérience à $100^\\circ\\mathrm{C}$ :\n  1. **Lente** : elle dure plusieurs dizaines d’heures (environ $30\\text{ h}$ à $100^\\circ\\mathrm{C}$ en présence de $\\mathrm{H_2SO_4}$) avant de se stabiliser.\n  2. **Limitée (non totale)** : même au bout d’un temps très long, aucun des deux réactifs n’est totalement consommé (palier à $0{,}67\\text{ mol}$ d’ester pour $1\\text{ mol}$ de chaque réactif au départ).\n  3. **Athermique** : elle ne consomme ni ne dégage de chaleur.",
      keyRule:
        'Acide carboxylique + alcool → ester + eau : la réaction d’estérification directe est lente, limitée et athermique.',
      formulas: [
        {
          name: 'Équation générale de l’estérification',
          formula: '\\mathrm{R-COOH + R\'-OH \\longrightarrow R-COO-R\' + H_2O}',
          note: 'L’atome O du pont ester –O–R′ provient de l’alcool',
        },
      ],
      workedExample: {
        title: 'Préparer l’éthanoate d’éthyle et analyser ses caractères (Ex 1 & Ex 2 p. 5–6)',
        statement:
          'On souhaite synthétiser l’éthanoate d’éthyle. Indique les réactifs nécessaires, écris l’équation de la réaction d’estérification et précise si elle est rapide/lente, totale/limitée, et exothermique/athermique/endothermique.',
        methodSteps: [
          '1) Le nom « éthanoate d’éthyle » donne immédiatement l’acide (acide éthanoïque CH₃–COOH) et l’alcool (éthanol CH₃–CH₂–OH).',
          '2) Équation : CH₃–COOH + CH₃–CH₂–OH ⇄ CH₃–COO–CH₂–CH₃ + H₂O.',
          '3) Caractéristiques : réaction lente, limitée et athermique.',
        ],
        conclusion:
          'Tout ester provient de l’acide portant la terminaison « -oïque » et de l’alcool correspondant au radical « -yle ».',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Réactifs & Produits',
          stepTitle: 'Identifier les réactifs et produits d’une estérification',
          paragraphText:
            'L’estérification met toujours en jeu un acide carboxylique et un alcool pour former un ester et de l’eau.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q1',
            type: 'mcq',
            prompt: 'Quels réactifs permettent de synthétiser un ester par estérification directe, et quel autre produit se forme ?',
            options: [
              'Un acide carboxylique et un alcool donnent un ester et de l’eau ($\\mathrm{H_2O}$)',
              'Un aldéhyde et une cétone donnent un ester et du dihydrogène',
              'Un alcane et du dioxygène donnent un ester et du $\\mathrm{CO_2}$',
              'Un acide carboxylique et une base forte donnent un ester et du dihydrogène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’estérification directe répond au bilan : Acide carboxylique + Alcool → Ester + Eau.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Caractéristiques',
          stepTheme: 'Exercice 2 p. 6',
          stepTitle: 'Les trois adjectifs caractérisant l’estérification',
          paragraphText:
            'Expérimentalement, on observe que l’estérification s’étale sur de nombreuses heures, s’arrête avant épuisement des réactifs et ne modifie pas la température par effet thermique propre.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q2',
            type: 'mcq',
            prompt: 'Quelles sont les trois caractéristiques fondamentales d’une réaction d’estérification ?',
            options: [
              'Lente, limitée et athermique',
              'Rapide, totale et fortement exothermique',
              'Lente, totale et endothermique',
              'Instantanée, limitée et exothermique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’estérification directe (acide + alcool) est lente (plusieurs heures), limitée (équilibre à 67 % pour un mélange équimolaire primaire) et athermique.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Exercice 1 p. 5',
          stepTitle: 'Choisir l’acide et l’alcool pour un ester donné',
          paragraphText:
            'Dans le nom « éthanoate d’éthyle », « éthanoate » vient de l’acide éthanoïque et « d’éthyle » vient de l’éthanol.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q3',
            type: 'mcq',
            prompt: 'Quels deux réactifs doit-on mélanger pour préparer le propanoate de méthyle ($\\mathrm{CH_3-CH_2-COO-CH_3}$) ?',
            options: [
              'L’acide propanoïque et le méthanol',
              'L’acide méthanoïque et le propan-1-ol',
              'L’acide éthanoïque et l’éthanol',
              'L’acide propanoïque et l’éthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le premier terme « propanoate » indique l’acide propanoïque (CH₃–CH₂–COOH) et « de méthyle » indique le méthanol (CH₃–OH).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Athermique',
          stepTheme: 'Vocabulaire',
          stepTitle: 'Que signifie le terme « athermique » ?',
          paragraphText:
            'Une réaction athermique s’effectue sans dégager ni absorber de chaleur : le chauffage éventuel sert uniquement à accélérer la réaction (facteur cinétique), pas à déplacer un effet thermique.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q4',
            type: 'mcq',
            prompt: 'Pourquoi qualifie-t-on la réaction d’estérification d’« athermique » ?',
            options: [
              'Parce qu’elle ne consomme ni ne produit de chaleur',
              'Parce qu’elle dégage une flamme très chaude comme une combustion',
              'Parce qu’elle ne peut se produire qu’à $0^\\circ\\mathrm{C}$',
              'Parce qu’elle absorbe énormément de chaleur en refroidissant le ballon',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Athermique signifie absence d’effet thermique notable (ni exothermique, ni endothermique).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Catalyseur',
          stepTheme: 'Acide sulfurique',
          stepTitle: 'Rôle de l’acide sulfurique concentré et du chauffage',
          paragraphText:
            'Dans la préparation d’un ester, l’acide sulfurique concentré (H₂SO₄) et le chauffage à 100 °C accélèrent la réaction sans modifier la limite finale.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q5',
            type: 'mcq',
            prompt: 'Quel est le rôle des quelques gouttes d’acide sulfurique concentré ajoutées lors d’une estérification ?',
            options: [
              'C’est un catalyseur qui augmente la vitesse de la réaction sans changer le rendement à l’équilibre',
              'C’est un réactif qui double la quantité maximale d’ester possible',
              'Il transforme la réaction lente en combustion complète',
              'Il refroidit le milieu réactionnel',
            ],
            correctAnswerIndex: 0,
            explanation:
              'H₂SO₄ est un catalyseur : il accélère l’estérification (ainsi que l’hydrolyse inverse), permettant d’atteindre l’équilibre plus rapidement sans en modifier la position.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Formule de l’ester',
          stepTheme: 'Bilan de masse',
          stepTitle: 'Vérifier la formule brute d’un ester formé par estérification',
          paragraphText:
            'Un acide à p atomes de carbone (CₚH₂ₚO₂) et un alcool saturé à q carbones (C_qH_{2q+2}O) donnent un ester à (p + q) atomes de carbone (C_{p+q}H_{2(p+q)}O₂) plus une molécule H₂O.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q6',
            type: 'mcq',
            prompt: 'Quelle est la formule brute de l’ester obtenu par réaction entre l’acide éthanoïque ($\\mathrm{C_2H_4O_2}$) et le $3$-méthylbutan-$1$-ol ($\\mathrm{C_5H_{12}O}$) ?',
            options: [
              '$\\mathrm{C_7H_{14}O_2}$ (éthanoate de $3$-méthylbutyle, $M = 130\\text{ g/mol}$)',
              '$\\mathrm{C_7H_{16}O_3}$',
              '$\\mathrm{C_6H_{12}O_2}$',
              '$\\mathrm{C_5H_{10}O_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Conservation des atomes : (2 + 5) = 7 C, (4 + 12 − 2) = 14 H et (2 + 1 − 1) = 2 O après élimination de H₂O → C₇H₁₄O₂ (M = 14×7 + 32 = 130 g/mol).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q1',
          type: 'mcq',
          prompt: 'Quels réactifs permettent de synthétiser un ester par estérification directe, et quel autre produit se forme ?',
          options: [
            'Un acide carboxylique et un alcool donnent un ester et de l’eau ($\\mathrm{H_2O}$)',
            'Un aldéhyde et une cétone donnent un ester et du dihydrogène',
            'Un alcane et du dioxygène donnent un ester et du $\\mathrm{CO_2}$',
            'Un acide carboxylique et une base forte donnent un ester et du dihydrogène',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’estérification directe répond au bilan : Acide carboxylique + Alcool → Ester + Eau.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q2',
          type: 'mcq',
          prompt: 'Quelles sont les trois caractéristiques fondamentales d’une réaction d’estérification ?',
          options: [
            'Lente, limitée et athermique',
            'Rapide, totale et fortement exothermique',
            'Lente, totale et endothermique',
            'Instantanée, limitée et exothermique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’estérification directe (acide + alcool) est lente (plusieurs heures), limitée (équilibre à 67 % pour un mélange équimolaire primaire) et athermique.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q3',
          type: 'mcq',
          prompt: 'Quels deux réactifs doit-on mélanger pour préparer le propanoate de méthyle ($\\mathrm{CH_3-CH_2-COO-CH_3}$) ?',
          options: [
            'L’acide propanoïque et le méthanol',
            'L’acide méthanoïque et le propan-1-ol',
            'L’acide éthanoïque et l’éthanol',
            'L’acide propanoïque et l’éthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le premier terme « propanoate » indique l’acide propanoïque (CH₃–CH₂–COOH) et « de méthyle » indique le méthanol (CH₃–OH).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q4',
          type: 'mcq',
          prompt: 'Pourquoi qualifie-t-on la réaction d’estérification d’« athermique » ?',
          options: [
            'Parce qu’elle ne consomme ni ne produit de chaleur',
            'Parce qu’elle dégage une flamme très chaude comme une combustion',
            'Parce qu’elle ne peut se produire qu’à $0^\\circ\\mathrm{C}$',
            'Parce qu’elle absorbe énormément de chaleur en refroidissant le ballon',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Athermique signifie absence d’effet thermique notable (ni exothermique, ni endothermique).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q5',
          type: 'mcq',
          prompt: 'Quel est le rôle des quelques gouttes d’acide sulfurique concentré ajoutées lors d’une estérification ?',
          options: [
            'C’est un catalyseur qui augmente la vitesse de la réaction sans changer le rendement à l’équilibre',
            'C’est un réactif qui double la quantité maximale d’ester possible',
            'Il transforme la réaction lente en combustion complète',
            'Il refroidit le milieu réactionnel',
          ],
          correctAnswerIndex: 0,
          explanation:
            'H₂SO₄ est un catalyseur : il accélère l’estérification (ainsi que l’hydrolyse inverse), permettant d’atteindre l’équilibre plus rapidement sans en modifier la position.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p01_q6',
          type: 'mcq',
          prompt: 'Quelle est la formule brute de l’ester obtenu par réaction entre l’acide éthanoïque ($\\mathrm{C_2H_4O_2}$) et le $3$-méthylbutan-$1$-ol ($\\mathrm{C_5H_{12}O}$) ?',
          options: [
            '$\\mathrm{C_7H_{14}O_2}$ (éthanoate de $3$-méthylbutyle, $M = 130\\text{ g/mol}$)',
            '$\\mathrm{C_7H_{16}O_3}$',
            '$\\mathrm{C_6H_{12}O_2}$',
            '$\\mathrm{C_5H_{10}O_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Conservation des atomes : (2 + 5) = 7 C, (4 + 12 − 2) = 14 H et (2 + 1 − 1) = 2 O après élimination de H₂O → C₇H₁₄O₂ (M = 14×7 + 32 = 130 g/mol).',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Réaction d’hydrolyse d’un ester
    // ========================================================================
    {
      id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02',
      order: 2,
      title: 'Réaction d’hydrolyse d’un ester : définition et équation',
      summary:
        'Définir l’hydrolyse d’un ester par l’eau, écrire son équation-bilan (coupure entre –C(=O)– et –O–R′) et connaître ses caractéristiques : lente, réversible, limitée et athermique.',
      conceptExplanation:
        "La **réaction d’hydrolyse d’un ester** est l’action de l’**eau** ($\\mathrm{H_2O}$) sur un **ester** ($\\mathrm{R-COO-R'}$) ; elle régénère l’**acide carboxylique** ($\\mathrm{R-COOH}$) et l’**alcool** ($\\mathrm{R'-OH}$) correspondants :\n\n$$\\mathrm{R-COO-R' + H_2O \\longrightarrow R-COOH + R'-OH}$$\n\n- **Exemples du cours** :\n  - Hydrolyse de l’éthanoate d’éthyle : $\\mathrm{CH_3-COO-C_2H_5 + H_2O \\to CH_3-COOH + C_2H_5-OH}$.\n  - Hydrolyse du propanoate d’isopropyle (Activité 1 p. 4) : $\\mathrm{CH_3-CH_2-COO-CH(CH_3)_2 + H_2O \\to CH_3-CH_2-COOH + CH_3-CH(OH)-CH_3}$ (acide propanoïque + propan-2-ol).\n- **Caractéristiques** : tout comme l’estérification dont elle est la réaction inverse, l’hydrolyse d’un ester est **lente**, **réversible**, **limitée** et **athermique**.",
      keyRule:
        'Ester + eau → acide carboxylique + alcool : l’hydrolyse d’un ester est une réaction lente, réversible, limitée et athermique.',
      formulas: [
        {
          name: 'Équation générale d’hydrolyse d’un ester',
          formula: '\\mathrm{R-COO-R\' + H_2O \\longrightarrow R-COOH + R\'-OH}',
          note: 'Réaction exactement inverse de l’estérification',
        },
      ],
      workedExample: {
        title: 'Écrire l’hydrolyse du propanoate d’isopropyle (Activité 1 p. 4)',
        statement:
          'Écris l’équation-bilan de la réaction entre le propanoate d’isopropyle et l’eau, puis nomme les deux produits formés.',
        methodSteps: [
          '1) Formule du propanoate d’isopropyle : CH₃–CH₂–COO–CH(CH₃)₂.',
          '2) Lors de l’hydrolyse, la coupure s’effectue au niveau du pont oxygène –O– : H₂O apporte –OH sur le C=O (donnant l’acide) et –H sur l’oxygène de l’isopropyle (donnant l’alcool).',
          '3) Équation : CH₃–CH₂–COO–CH(CH₃)₂ + H₂O ⇄ CH₃–CH₂–COOH + CH₃–CH(OH)–CH₃.',
        ],
        conclusion:
          'On obtient l’acide propanoïque et le propan-2-ol (alcool isopropylique).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Action de l’eau',
          stepTitle: 'Qu’est-ce que l’hydrolyse d’un ester ?',
          paragraphText:
            'L’hydrolyse d’un ester consiste à faire réagir de l’eau sur l’ester afin de reformer l’acide carboxylique et l’alcool correspondants.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q1',
            type: 'mcq',
            prompt: 'Quels produits obtient-on lors de l’hydrolyse d’un ester $\\mathrm{R-COO-R\'}$ par l’eau ?',
            options: [
              'Un acide carboxylique ($\\mathrm{R-COOH}$) et un alcool ($\\mathrm{R\'-OH}$)',
              'Un alcène et du dioxyde de carbone',
              'Un aldéhyde et du dihydrogène',
              'Deux molécules d’éther-oxyde',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Hydrolyser un ester rompt la fonction ester grâce à l’eau pour régénérer l’acide carboxylique R–COOH et l’alcool R′–OH.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Caractéristiques',
          stepTheme: 'Lente, limitée...',
          stepTitle: 'Les quatre propriétés de l’hydrolyse d’un ester',
          paragraphText:
            'L’hydrolyse d’un ester par l’eau pure ou acidulée est lente, réversible, limitée et athermique.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q2',
            type: 'mcq',
            prompt: 'Parmi ces propositions, laquelle décrit exactement la réaction d’hydrolyse d’un ester ?',
            options: [
              'Lente, réversible, limitée et athermique',
              'Rapide, irréversible et totale',
              'Lente, irréversible et fortement endothermique',
              'Instantanée et totale dès $20^\\circ\\mathrm{C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La réaction d’hydrolyse d’un ester est lente, réversible (car l’acide et l’alcool reformés réagissent à nouveau ensemble), limitée et athermique.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Activité 1 p. 4',
          stepTheme: 'Propanoate d’isopropyle',
          stepTitle: 'Retrouver l’acide et l’alcool d’une hydrolyse',
          paragraphText:
            'En séparant le nom de l’ester au niveau du « de », la première moitié donne l’acide et la seconde moitié donne l’alcool.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q3',
            type: 'mcq',
            prompt: 'Quels composés obtient-on par hydrolyse du propanoate d’isopropyle ?',
            options: [
              'L’acide propanoïque et le $\\text{propan-}2\\text{-ol}$ (isopropanol)',
              'L’acide isopropanoïque et le $\\text{propan-}1\\text{-ol}$',
              'L’acide butanoïque et l’éthanol',
              'Le propanal et le méthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Propanoate → acide propanoïque ; isopropyle (–CH(CH₃)₂) → propan-2-ol.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Tableau d’avancement',
          stepTheme: 'Hydrolyse équimolaire',
          stepTitle: 'Suivre les quantités restantes et formées au cours de l’hydrolyse',
          paragraphText:
            'À partir de 1 mol d’ester et 1 mol d’eau, s’il s’est formé x mol d’acide et x mol d’alcool, il reste (1 − x) mol d’ester et (1 − x) mol d’eau.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q4',
            type: 'mcq',
            prompt: 'Dans l’expérience p. 3, on part de $1\\text{ mol}$ d’éthanoate d’éthyle et $1\\text{ mol}$ d’eau. À l’équilibre ($t = 20\\text{ h}$), il reste $0{,}67\\text{ mol}$ d’ester. Quelle quantité d’acide éthanoïque s’est formée ?',
            options: [
              '$0{,}33\\text{ mol}$',
              '$0{,}67\\text{ mol}$',
              '$1{,}00\\text{ mol}$',
              '$0{,}27\\text{ mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La quantité d’ester disparue vaut x = 1 − 0,67 = 0,33 mol : il s’est donc formé 0,33 mol d’acide éthanoïque et 0,33 mol d’éthanol.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Erreur classique',
          stepTheme: 'Butanoate d’éthyle',
          stepTitle: 'Ne pas inverser acide et alcool lors de la coupure',
          paragraphText:
            'Pour le butanoate d’éthyle (C₃H₇–COO–C₂H₅), la coupure donne l’acide à 4 C (butanoïque) et l’alcool à 2 C (éthanol), jamais l’inverse.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q5',
            type: 'mcq',
            prompt: 'Quels sont les deux produits formés lors de l’hydrolyse du butanoate d’éthyle ($\\mathrm{CH_3-CH_2-CH_2-COO-C_2H_5}$) ?',
            options: [
              'L’acide butanoïque ($\\mathrm{C_3H_7-COOH}$) et l’éthanol ($\\mathrm{C_2H_5-OH}$)',
              'L’acide éthanoïque et le butan-1-ol',
              'L’acide propanoïque et le propan-1-ol',
              'L’acide méthanoïque et le pentan-1-ol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La partie acyle porte 4 carbones (butanoate → acide butanoïque) et le groupe alkyle 2 carbones (éthyle → éthanol).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Équation complète',
          stepTheme: 'Exercice 4 p. 7',
          stepTitle: 'Écrire l’équation-bilan de l’hydrolyse du butanoate d’éthyle',
          paragraphText:
            'Dans l’équation-bilan d’hydrolyse, la double flèche ⇄ rappelle que les produits reforment l’ester dès qu’ils s’accumulent.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q6',
            type: 'mcq',
            prompt: 'Quelle équation-bilan représente correctement l’hydrolyse du butanoate d’éthyle ?',
            options: [
              '$\\mathrm{CH_3-CH_2-CH_2-COO-C_2H_5 + H_2O \\rightleftharpoons CH_3-CH_2-CH_2-COOH + C_2H_5-OH}$',
              '$\\mathrm{CH_3-CH_2-CH_2-COO-C_2H_5 \\longrightarrow CH_3-CH_2-CH_2-COOH + C_2H_5-OH}$',
              '$\\mathrm{C_2H_5-COO-C_3H_7 + H_2O \\rightleftharpoons C_2H_5-COOH + C_3H_7-OH}$',
              '$\\mathrm{C_6H_{12}O_2 + 8\\,O_2 \\longrightarrow 6\\,CO_2 + 6\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La réaction consomme H₂O, coupe le butanoate d’éthyle en acide butanoïque + éthanol et s’écrit avec la double flèche d’équilibre ⇄.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q1',
          type: 'mcq',
          prompt: 'Quels produits obtient-on lors de l’hydrolyse d’un ester $\\mathrm{R-COO-R\'}$ par l’eau ?',
          options: [
            'Un acide carboxylique ($\\mathrm{R-COOH}$) et un alcool ($\\mathrm{R\'-OH}$)',
            'Un alcène et du dioxyde de carbone',
            'Un aldéhyde et du dihydrogène',
            'Deux molécules d’éther-oxyde',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Hydrolyser un ester rompt la fonction ester grâce à l’eau pour régénérer l’acide carboxylique R–COOH et l’alcool R′–OH.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q2',
          type: 'mcq',
          prompt: 'Parmi ces propositions, laquelle décrit exactement la réaction d’hydrolyse d’un ester ?',
          options: [
            'Lente, réversible, limitée et athermique',
            'Rapide, irréversible et totale',
            'Lente, irréversible et fortement endothermique',
            'Instantanée et totale dès $20^\\circ\\mathrm{C}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La réaction d’hydrolyse d’un ester est lente, réversible (car l’acide et l’alcool reformés réagissent à nouveau ensemble), limitée et athermique.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q3',
          type: 'mcq',
          prompt: 'Quels composés obtient-on par hydrolyse du propanoate d’isopropyle ?',
          options: [
            'L’acide propanoïque et le $\\text{propan-}2\\text{-ol}$ (isopropanol)',
            'L’acide isopropanoïque et le $\\text{propan-}1\\text{-ol}$',
            'L’acide butanoïque et l’éthanol',
            'Le propanal et le méthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Propanoate → acide propanoïque ; isopropyle (–CH(CH₃)₂) → propan-2-ol.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q4',
          type: 'mcq',
          prompt: 'Dans l’expérience p. 3, on part de $1\\text{ mol}$ d’éthanoate d’éthyle et $1\\text{ mol}$ d’eau. À l’équilibre ($t = 20\\text{ h}$), il reste $0{,}67\\text{ mol}$ d’ester. Quelle quantité d’acide éthanoïque s’est formée ?',
          options: [
            '$0{,}33\\text{ mol}$',
            '$0{,}67\\text{ mol}$',
            '$1{,}00\\text{ mol}$',
            '$0{,}27\\text{ mol}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La quantité d’ester disparue vaut x = 1 − 0,67 = 0,33 mol : il s’est donc formé 0,33 mol d’acide éthanoïque et 0,33 mol d’éthanol.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q5',
          type: 'mcq',
          prompt: 'Quels sont les deux produits formés lors de l’hydrolyse du butanoate d’éthyle ($\\mathrm{CH_3-CH_2-CH_2-COO-C_2H_5}$) ?',
          options: [
            'L’acide butanoïque ($\\mathrm{C_3H_7-COOH}$) et l’éthanol ($\\mathrm{C_2H_5-OH}$)',
            'L’acide éthanoïque et le butan-1-ol',
            'L’acide propanoïque et le propan-1-ol',
            'L’acide méthanoïque et le pentan-1-ol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La partie acyle porte 4 carbones (butanoate → acide butanoïque) et le groupe alkyle 2 carbones (éthyle → éthanol).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p02_q6',
          type: 'mcq',
          prompt: 'Quelle équation-bilan représente correctement l’hydrolyse du butanoate d’éthyle ?',
          options: [
            '$\\mathrm{CH_3-CH_2-CH_2-COO-C_2H_5 + H_2O \\rightleftharpoons CH_3-CH_2-CH_2-COOH + C_2H_5-OH}$',
            '$\\mathrm{CH_3-CH_2-CH_2-COO-C_2H_5 \\longrightarrow CH_3-CH_2-CH_2-COOH + C_2H_5-OH}$',
            '$\\mathrm{C_2H_5-COO-C_3H_7 + H_2O \\rightleftharpoons C_2H_5-COOH + C_3H_7-OH}$',
            '$\\mathrm{C_6H_{12}O_2 + 8\\,O_2 \\longrightarrow 6\\,CO_2 + 6\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La réaction consomme H₂O, coupe le butanoate d’éthyle en acide butanoïque + éthanol et s’écrit avec la double flèche d’équilibre ⇄.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Étude cinétique et notion d’équilibre chimique (⇄)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03',
      order: 3,
      title: 'Équilibre chimique et courbes d’évolution n(ester) = f(t)',
      summary:
        'Expliquer la réversibilité simultanée des deux réactions, analyser la convergence des deux courbes vers la même limite (0,67 mol) et comprendre la signification de la double flèche ⇄.',
      conceptExplanation:
        "Lorsqu’on juxtapose les courbes $n_{\\text{ester}} = f(t)$ obtenues à partir de :\n- $1\\text{ mol}$ d’acide éthanoïque $+\\,1\\text{ mol}$ d’éthanol (estérification : $n_{\\text{ester}}$ croît de $0$ à $0{,}67\\text{ mol}$),\n- $1\\text{ mol}$ d’éthanoate d’éthyle $+\\,1\\text{ mol}$ d’eau (hydrolyse : $n_{\\text{ester}}$ décroît de $1$ à $0{,}67\\text{ mol}$),\non observe que **les deux courbes tendent vers la même asymptote horizontale ($n_{\\text{ester}} = 0{,}67\\text{ mol}$)**.\n\n1. **Réactions réversibles** : l’estérification et l’hydrolyse se déroulent **simultanément** dans le même récipient : pendant que l’acide et l’alcool forment de l’ester et de l’eau, l’ester et l’eau formés régénèrent de l’acide et de l’alcool.\n2. **État d’équilibre chimique** : lorsque les deux réactions opposées atteignent la même vitesse, les quantités de matière des 4 espèces **n’évoluent plus (restent constantes)** dans le milieu réactionnel ($0{,}67\\text{ mol}$ d’ester, $0{,}67\\text{ mol}$ d’eau, $0{,}33\\text{ mol}$ d’acide, $0{,}33\\text{ mol}$ d’alcool). On traduit cet équilibre par la **double flèche ($\\rightleftharpoons$)** :\n   $$\\mathrm{R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O}$$",
      keyRule:
        'Estérification et hydrolyse sont deux réactions réversibles simultanées conduisant à un équilibre chimique noté par la double flèche ⇄ : à l’équilibre, les deux mélanges équimolaires initiaux convergent vers la même limite (0,67 mol d’ester et 0,33 mol d’acide).',
      formulas: [
        {
          name: 'Équilibre chimique d’estérification-hydrolyse',
          formula: '\\mathrm{R-COOH + R\'-OH \\underset{\\text{Hydrolyse}}{\\overset{\\text{Estérification}}{\\rightleftharpoons}} R-COO-R\' + H_2O}',
          note: 'Pour 1 mol + 1 mol avec alcool primaire : à l’équilibre, n(ester) = n(eau) = 0,67 mol et n(acide) = n(alcool) = 0,33 mol',
        },
      ],
      workedExample: {
        title: 'Comparer les deux mélanges équimolaires à l’équilibre (p. 1–3)',
        statement:
          'À $100^\\circ\\mathrm{C}$ en présence de $\\mathrm{H_2SO_4}$, on suit deux expériences : (A) $1\\text{ mol}$ d’acide éthanoïque + $1\\text{ mol}$ d’éthanol ; (B) $1\\text{ mol}$ d’éthanoate d’éthyle + $1\\text{ mol}$ d’eau. Quelle est la composition finale de chaque mélange une fois le palier atteint ?',
        methodSteps: [
          '1) Dans (A), le tableau expérimental p. 1–2 donne à t = 30 h, 70 h, 80 h : n(ester) = n(eau) = 0,67 mol et n(acide) = n(alcool) = 0,33 mol.',
          '2) Dans (B), le tableau expérimental p. 3 donne à t = 20 h, 50 h : n(ester) = n(eau) = 0,67 mol et n(acide) = n(alcool) = 0,33 mol.',
          '3) Les deux systèmes aboutissent exactement au même état d’équilibre chimique !',
        ],
        conclusion:
          'Peu importe le sens de départ (réactifs d’estérification ou d’hydrolyse), le système équimolaire atteint le même équilibre dynamique : 67 % d’ester/eau et 33 % d’acide/alcool.',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Juxtaposition des courbes n(ester) = f(t) : convergence vers l’équilibre à 0,67 mol',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Courbes d'estérification et d'hydrolyse convergeant vers 0,67 mol d'ester à l'équilibre">
  <rect x="8" y="8" width="344" height="174" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <line x1="48" y1="26" x2="48" y2="152" stroke="#334155" stroke-width="1.6"/>
  <line x1="48" y1="152" x2="332" y2="152" stroke="#334155" stroke-width="1.6"/>
  <text x="20" y="24" font-size="9.5" font-weight="700" fill="#0F172A">n(ester) mol</text>
  <text x="316" y="168" font-size="9.5" font-weight="700" fill="#0F172A">t (h)</text>
  <line x1="48" y1="42" x2="320" y2="42" stroke="#E2E8F0" stroke-width="1"/>
  <text x="42" y="45" text-anchor="end" font-size="9" fill="#475569">1,00</text>
  <line x1="48" y1="78" x2="325" y2="78" stroke="#64748B" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="42" y="81" text-anchor="end" font-size="9" font-weight="700" fill="#0F172A">0,67</text>
  <text x="42" y="155" text-anchor="end" font-size="9" fill="#475569">0</text>
  <text x="148" y="166" text-anchor="middle" font-size="9" fill="#475569">20</text>
  <text x="220" y="166" text-anchor="middle" font-size="9" fill="#475569">40</text>
  <text x="292" y="166" text-anchor="middle" font-size="9" fill="#475569">60</text>
  <path d="M48,152 Q88,92 140,80 T315,78" fill="none" stroke="#2563EB" stroke-width="2.4"/>
  <path d="M48,42 Q76,72 130,77 T315,78" fill="none" stroke="#DC2626" stroke-width="2.4"/>
  <text x="155" y="128" font-size="9.5" font-weight="700" fill="#2563EB">Estérification (part de 0)</text>
  <text x="155" y="56" font-size="9.5" font-weight="700" fill="#DC2626">Hydrolyse (part de 1 mol)</text>
  <text x="242" y="93" font-size="9" font-weight="700" fill="#0F172A">Même limite d’équilibre</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Réversibilité',
          stepTheme: 'Réactions simultanées',
          stepTitle: 'Pourquoi les deux réactions se produisent-elles en même temps ?',
          paragraphText:
            'Dès que de l’ester et de l’eau se forment lors d’une estérification, ils réagissent ensemble en sens inverse (hydrolyse) ; on dit que les réactions sont réversibles.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q1',
            type: 'mcq',
            prompt: 'Pourquoi la réaction d’estérification s’arrête-t-elle avant d’avoir consommé 100 % de l’acide et de l’alcool ?',
            options: [
              'Parce que la réaction inverse d’hydrolyse se produit simultanément et finit par égaler la vitesse d’estérification',
              'Parce que l’ester détruit irréversiblement l’acide sulfurique',
              'Parce que la température retombe automatiquement à $0^\\circ\\mathrm{C}$',
              'Parce que l’eau s’évapore instantanément à l’état solide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Estérification et hydrolyse sont réversibles et simultanées : lorsque leurs vitesses deviennent égales, les quantités n’évoluent plus (équilibre chimique).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Même limite',
          stepTheme: 'Courbes juxtaposées',
          stepTitle: 'Comparer les paliers d’estérification et d’hydrolyse équimolaires',
          paragraphText:
            'Qu’on parte de 1 mol d’acide éthanoïque + 1 mol d’éthanol ou de 1 mol d’éthanoate d’éthyle + 1 mol d’eau, le palier final vaut 0,67 mol d’ester.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q2',
            type: 'mcq',
            prompt: 'Que constate-t-on lorsqu’on juxtapose les courbes $n_{\\text{ester}} = f(t)$ de l’estérification ($1\\text{ mol}$ acide + $1\\text{ mol}$ alcool) et de l’hydrolyse ($1\\text{ mol}$ ester + $1\\text{ mol}$ eau) ?',
            options: [
              'Les deux courbes convergent vers la même limite ($n_{\\text{ester}} = 0{,}67\\text{ mol}$)',
              'La courbe d’estérification monte jusqu’à $1{,}00\\text{ mol}$ et celle d’hydrolyse descend jusqu’à $0$',
              'Les deux courbes se croisent à $0{,}50\\text{ mol}$ puis divergent',
              'La courbe d’hydrolyse reste bloquée à $1{,}00\\text{ mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C’est la preuve expérimentale de l’équilibre chimique : les deux systèmes atteignent exactement le même état final à 0,67 mol d’ester.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Équilibre chimique',
          stepTheme: 'Symbole ⇄',
          stepTitle: 'Signification de la double flèche ⇄',
          paragraphText:
            'La double flèche en sens inverse ⇄ signifie que les deux transformations opposées coexistent et aboutissent à un équilibre où toutes les concentrations deviennent constantes.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q3',
            type: 'mcq',
            prompt: 'Que traduit l’écriture $\\mathrm{R-COOH + R\'-OH \\rightleftharpoons R-COO-R\' + H_2O}$ dans l’équation-bilan ?',
            options: [
              'Un équilibre chimique entre deux réactions réversibles simultanées (estérification et hydrolyse)',
              'Une réaction totale ne pouvant jamais revenir en arrière',
              'Une erreur de mise en page signifiant que la réaction est impossible',
              'Une combustion complète dégageant du dioxyde de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La flèche vers la droite représente l’estérification et la flèche vers la gauche l’hydrolyse : leur coexistence établit l’équilibre chimique.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Lecture de tableau',
          stepTheme: 'Cinétique p. 1',
          stepTitle: 'Déterminer le temps d’atteinte du palier d’équilibre',
          paragraphText:
            'Dans le tableau p. 1–2 (estérification à 100 °C), n(ester) passe à 0,67 mol dès t = 30 h et reste identique à t = 70 h et t = 80 h.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q4',
            type: 'mcq',
            prompt: 'Dans le suivi de l’estérification p. 1–2 ($1\\text{ mol}$ acide éthanoïque + $1\\text{ mol}$ éthanol à $100^\\circ\\mathrm{C}$), à partir de quelle date approximative atteint-on le palier d’équilibre à $0{,}67\\text{ mol}$ ?',
            options: [
              'À partir de $t = 30\\text{ h}$',
              'Dès $t = 1\\text{ h}$',
              'À partir de $t = 5\\text{ h}$',
              'Jamais avant $t = 200\\text{ h}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le tableau montre n(ester) = 0,66 mol à 25 h puis 0,67 mol constant à 30 h, 70 h et 80 h : l’équilibre est atteint vers 30 h.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Bilan à t = 10 h',
          stepTheme: 'Lecture de tableau p. 1',
          stepTitle: 'Relier quantités formées et quantités restantes avant l’équilibre',
          paragraphText:
            'À chaque instant t, pour 1 mol initiale d’acide et d’alcool, la somme n(acide restant) + n(ester formé) reste égale à 1 mol.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q5',
            type: 'mcq',
            prompt: 'Dans le suivi de l’estérification de $1\\text{ mol}$ d’acide et $1\\text{ mol}$ d’alcool, si à $t = 10\\text{ h}$ on dose $n_{\\text{acide restant}} = 0{,}50\\text{ mol}$, combien de moles d’ester se sont formées à cet instant ?',
            options: [
              '$0{,}50\\text{ mol}$ d’ester',
              '$0{,}67\\text{ mol}$ d’ester',
              '$0{,}33\\text{ mol}$ d’ester',
              '$1{,}00\\text{ mol}$ d’ester',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Chaque mole d’acide consommée donne 1 mole d’ester : n(ester) = 1,00 − 0,50 = 0,50 mol (ce qui correspond à la ligne t = 10 h du tableau p. 1).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'Équilibre ≠ arrêt',
          stepTitle: 'À l’équilibre, les molécules continuent-elles de réagir ?',
          paragraphText:
            'À l’échelle microscopique, estérification et hydrolyse continuent toutes deux à la même vitesse : seule l’évolution macroscopique (les quantités globales) est nulle.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q6',
            type: 'mcq',
            prompt: 'À l’état d’équilibre chimique, que se passe-t-il réellement dans le milieu réactionnel ?',
            options: [
              'Les vitesses d’estérification et d’hydrolyse sont égales et non nulles : les quantités macroscopiques restent constantes',
              'Toutes les réactions chimiques cessent définitivement même au niveau moléculaire',
              'L’estérification continue seule jusqu’à épuiser tout l’acide',
              'La masse totale du ballon diminue jusqu’à zéro',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un équilibre chimique est dynamique : autant de moles d’ester se forment que de moles d’ester s’hydrolysent par seconde.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q1',
          type: 'mcq',
          prompt: 'Pourquoi la réaction d’estérification s’arrête-t-elle avant d’avoir consommé 100 % de l’acide et de l’alcool ?',
          options: [
            'Parce que la réaction inverse d’hydrolyse se produit simultanément et finit par égaler la vitesse d’estérification',
            'Parce que l’ester détruit irréversiblement l’acide sulfurique',
            'Parce que la température retombe automatiquement à $0^\\circ\\mathrm{C}$',
            'Parce que l’eau s’évapore instantanément à l’état solide',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Estérification et hydrolyse sont réversibles et simultanées : lorsque leurs vitesses deviennent égales, les quantités n’évoluent plus (équilibre chimique).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q2',
          type: 'mcq',
          prompt: 'Que constate-t-on lorsqu’on juxtapose les courbes $n_{\\text{ester}} = f(t)$ de l’estérification ($1\\text{ mol}$ acide + $1\\text{ mol}$ alcool) et de l’hydrolyse ($1\\text{ mol}$ ester + $1\\text{ mol}$ eau) ?',
          options: [
            'Les deux courbes convergent vers la même limite ($n_{\\text{ester}} = 0{,}67\\text{ mol}$)',
            'La courbe d’estérification monte jusqu’à $1{,}00\\text{ mol}$ et celle d’hydrolyse descend jusqu’à $0$',
            'Les deux courbes se croisent à $0{,}50\\text{ mol}$ puis divergent',
            'La courbe d’hydrolyse reste bloquée à $1{,}00\\text{ mol}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C’est la preuve expérimentale de l’équilibre chimique : les deux systèmes atteignent exactement le même état final à 0,67 mol d’ester.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q3',
          type: 'mcq',
          prompt: 'Que traduit l’écriture $\\mathrm{R-COOH + R\'-OH \\rightleftharpoons R-COO-R\' + H_2O}$ dans l’équation-bilan ?',
          options: [
            'Un équilibre chimique entre deux réactions réversibles simultanées (estérification et hydrolyse)',
            'Une réaction totale ne pouvant jamais revenir en arrière',
            'Une erreur de mise en page signifiant que la réaction est impossible',
            'Une combustion complète dégageant du dioxyde de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La flèche vers la droite représente l’estérification et la flèche vers la gauche l’hydrolyse : leur coexistence établit l’équilibre chimique.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q4',
          type: 'mcq',
          prompt: 'Dans le suivi de l’estérification p. 1–2 ($1\\text{ mol}$ acide éthanoïque + $1\\text{ mol}$ éthanol à $100^\\circ\\mathrm{C}$), à partir de quelle date approximative atteint-on le palier d’équilibre à $0{,}67\\text{ mol}$ ?',
          options: [
            'À partir de $t = 30\\text{ h}$',
            'Dès $t = 1\\text{ h}$',
            'À partir de $t = 5\\text{ h}$',
            'Jamais avant $t = 200\\text{ h}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le tableau montre n(ester) = 0,66 mol à 25 h puis 0,67 mol constant à 30 h, 70 h et 80 h : l’équilibre est atteint vers 30 h.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q5',
          type: 'mcq',
          prompt: 'Dans le suivi de l’estérification de $1\\text{ mol}$ d’acide et $1\\text{ mol}$ d’alcool, si à $t = 10\\text{ h}$ on dose $n_{\\text{acide restant}} = 0{,}50\\text{ mol}$, combien de moles d’ester se sont formées à cet instant ?',
          options: [
            '$0{,}50\\text{ mol}$ d’ester',
            '$0{,}67\\text{ mol}$ d’ester',
            '$0{,}33\\text{ mol}$ d’ester',
            '$1{,}00\\text{ mol}$ d’ester',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Chaque mole d’acide consommée donne 1 mole d’ester : n(ester) = 1,00 − 0,50 = 0,50 mol (ce qui correspond à la ligne t = 10 h du tableau p. 1).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p03_q6',
          type: 'mcq',
          prompt: 'À l’état d’équilibre chimique, que se passe-t-il réellement dans le milieu réactionnel ?',
          options: [
            'Les vitesses d’estérification et d’hydrolyse sont égales et non nulles : les quantités macroscopiques restent constantes',
            'Toutes les réactions chimiques cessent définitivement même au niveau moléculaire',
            'L’estérification continue seule jusqu’à épuiser tout l’acide',
            'La masse totale du ballon diminue jusqu’à zéro',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un équilibre chimique est dynamique : autant de moles d’ester se forment que de moles d’ester s’hydrolysent par seconde.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Isomérie des esters et synthèse ciblée (Exemples du cours)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04',
      order: 4,
      title: 'Isomérie des esters et choix des réactifs de synthèse',
      summary:
        'Dénombrer tous les esters isomères d’une formule brute donnée (ex. C₄H₈O₂), identifier l’acide et l’alcool de synthèse et écrire l’équation-bilan exacte (banane, 2-méthylpropanoate d’éthyle).',
      conceptExplanation:
        "Pour trouver tous les **esters isomères** correspondant à une formule brute $\\mathrm{C_nH_{2n}O_2}$, on répartit méthodiquement les $n$ atomes de carbone entre la partie acide ($p$ carbones avec le carbone de $\\mathrm{C=O}$, $p \\ge 1$) et le groupe alkyle de l’alcool ($q = n - p$ carbones, $q \\ge 1$).\n\n- **Application à $\\mathrm{C_4H_8O_2}$ ($n = 4$, Exercice 3 p. 6–7)** — $4$ esters possibles :\n  1. $p = 3, q = 1$ : $\\mathrm{CH_3-CH_2-COO-CH_3}$ (**propanoate de méthyle** $\\leftarrow$ acide propanoïque + méthanol).\n  2. $p = 2, q = 2$ : $\\mathrm{CH_3-COO-CH_2-CH_3}$ (**éthanoate d’éthyle** $\\leftarrow$ acide éthanoïque + éthanol).\n  3. $p = 1, q = 3$ (chaîne linéaire) : $\\mathrm{H-COO-CH_2-CH_2-CH_3}$ (**méthanoate de propyle** $\\leftarrow$ acide méthanoïque + propan-1-ol).\n  4. $p = 1, q = 3$ (chaîne ramifiée) : $\\mathrm{H-COO-CH(CH_3)_2}$ (**méthanoate d’isopropyle** $\\leftarrow$ acide méthanoïque + propan-2-ol).\n- **Synthèses ramifiées du cours (Situation p. 5 & Ex 5 p. 8)** :\n  - *Arôme banane* (**éthanoate de 3-méthylbutyle**) : $\\mathrm{CH_3-COOH + HO-CH_2-CH_2-CH(CH_3)-CH_3 \\rightleftharpoons CH_3-COO-CH_2-CH_2-CH(CH_3)-CH_3 + H_2O}$.\n  - **2-méthylpropanoate d’éthyle** : $\\mathrm{CH_3-CH(CH_3)-COOH + CH_3-CH_2-OH \\rightleftharpoons CH_3-CH(CH_3)-COO-CH_2-CH_3 + H_2O}$.",
      keyRule:
        'Pour lister tous les esters CₙH₂ₙO₂, faire varier (p, q) avec p + q = n, p ≥ 1 et q ≥ 1 en envisageant les chaînes linéaires et ramifiées.',
      workedExample: {
        title: 'Synthétiser l’éthanoate de 3-méthylbutyle (Situation d’évaluation p. 4–5)',
        statement:
          'Donne les formules semi-développées exactes des deux réactifs, celle de l’éthanoate de $3$-méthylbutyle et l’équation-bilan de sa préparation.',
        methodSteps: [
          '1) Acide éthanoïque : CH₃–COOH ; alcool (3-méthylbutan-1-ol) : HO–CH₂–CH₂–CH(CH₃)–CH₃.',
          '2) Ester : CH₃–COO–CH₂–CH₂–CH(CH₃)–CH₃ (M = 130 g/mol).',
          '3) Équation-bilan : CH₃–COOH + CH₃–CH(CH₃)–CH₂–CH₂–OH ⇄ CH₃–COO–CH₂–CH₂–CH(CH₃)–CH₃ + H₂O.',
        ],
        conclusion:
          'La ramification « 3-méthylbutyle » est portée intégralement par l’alcool (3-méthylbutan-1-ol), numéroté depuis le carbone portant –OH.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Exercice 3 p. 6',
          stepTheme: 'Isomères de C₄H₈O₂',
          stepTitle: 'Dénombrer tous les esters de formule C₄H₈O₂',
          paragraphText:
            'En faisant varier le couple (C acide, C alcool) = (3,1), (2,2) et (1,3) — avec 2 possibilités pour le propyle et l’isopropyle — on obtient exactement 4 esters C₄H₈O₂.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q1',
            type: 'mcq',
            prompt: 'Combien d’esters isomères possèdent la formule brute $\\mathrm{C_4H_8O_2}$ ?',
            options: [
              '$4$ esters (propanoate de méthyle, éthanoate d’éthyle, méthanoate de propyle, méthanoate d’isopropyle)',
              '$2$ esters seulement',
              '$3$ esters seulement',
              '$6$ esters différents',
            ],
            correctAnswerIndex: 0,
            explanation:
              '(3,1) → propanoate de méthyle ; (2,2) → éthanoate d’éthyle ; (1,3) → méthanoate de propyle et méthanoate d’isopropyle : au total 4 esters.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Situation p. 5',
          stepTheme: 'Arôme de banane',
          stepTitle: 'Identifier l’alcool préparant l’éthanoate de 3-méthylbutyle',
          paragraphText:
            'Dans l’éthanoate de 3-méthylbutyle, l’oxygène de l’alcool reste relié au carbone C1 de la chaîne 3-méthylbutyle : l’alcool utilisé est le 3-méthylbutan-1-ol.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q2',
            type: 'mcq',
            prompt: 'Quelle est la formule semi-développée exacte de l’alcool utilisé pour synthétiser l’éthanoate de $3$-méthylbutyle ?',
            options: [
              '$\\mathrm{CH_3-CH(CH_3)-CH_2-CH_2-OH}$ ($3$-méthylbutan-$1$-ol)',
              '$\\mathrm{CH_3-CH_2-CH(CH_3)-CH_2-OH}$ ($2$-méthylbutan-$1$-ol)',
              '$\\mathrm{CH_3-CH(CH_3)-CH(OH)-CH_3}$ ($3$-méthylbutan-$2$-ol)',
              '$\\mathrm{CH_3-CH(CH_3)-COOH}$ (acide $2$-méthylpropanoïque)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On numérote l’alcool à partir du carbone fonctionnel (C1–OH) : chaîne à 4 C (butan-1-ol) avec un méthyle sur C3 → CH₃–CH(CH₃)–CH₂–CH₂–OH.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exercice 5 p. 8',
          stepTheme: '2-méthylpropanoate d’éthyle',
          stepTitle: 'Identifier l’acide préparant le 2-méthylpropanoate d’éthyle',
          paragraphText:
            'Ici, la ramification « 2-méthyl » appartient au premier terme (l’acide) : il s’agit donc de l’acide 2-méthylpropanoïque et de l’éthanol.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q3',
            type: 'mcq',
            prompt: 'Quels deux réactifs réagissent pour former le $2$-méthylpropanoate d’éthyle ?',
            options: [
              'L’acide $2$-méthylpropanoïque ($\\mathrm{CH_3-CH(CH_3)-COOH}$) et l’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
              'L’acide éthanoïque et le $2$-méthylpropan-$1$-ol',
              'L’acide butanoïque et l’éthanol',
              'L’acide propanoïque et le méthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              '« 2-méthylpropanoate » vient de l’acide 2-méthylpropanoïque et « d’éthyle » vient de l’éthanol.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège de lecture',
          stepTheme: 'O-C=O vs COO',
          stepTitle: 'Attention au sens de la formule écrite CH₃-O-CO-C₂H₅ !',
          paragraphText:
            'Si un sujet écrit R′–O–CO–R (sens inversé), l’atome O relié au carbone carbonyle appartient toujours à l’alcool R′ et –CO–R vient toujours de l’acide R–COOH.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q4',
            type: 'mcq',
            prompt: 'Quels réactifs forment l’ester écrit à l’envers sous la forme $\\mathrm{CH_3-O-C(=O)-CH_2-CH_3}$ ?',
            options: [
              'L’acide propanoïque ($\\mathrm{CH_3-CH_2-COOH}$) et le méthanol ($\\mathrm{CH_3-OH}$)',
              'L’acide méthanoïque et le propan-1-ol',
              'L’acide éthanoïque et l’éthanol',
              'L’acide butanoïque et le méthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le groupe –C(=O)–CH₂–CH₃ porte le carbonyle (3 C → propanoate), tandis que CH₃–O– vient du méthanol : c’est le propanoate de méthyle.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Alcool ramifié',
          stepTheme: 'Méthanoate d’isopropyle',
          stepTitle: 'Préparer un méthanoate ramifié',
          paragraphText:
            'Pour préparer le méthanoate d’isopropyle (H–COO–CH(CH₃)₂), on fait réagir l’acide méthanoïque H–COOH et le propan-2-ol CH₃–CH(OH)–CH₃.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q5',
            type: 'mcq',
            prompt: 'Quel alcool et quel acide carboxylique forment le méthanoate d’isopropyle ?',
            options: [
              'L’acide méthanoïque et le $\\text{propan-}2\\text{-ol}$',
              'L’acide méthanoïque et le $\\text{propan-}1\\text{-ol}$',
              'L’acide éthanoïque et le propan-2-ol',
              'L’acide propanoïque et le méthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              '« Méthanoate » → acide méthanoïque (H–COOH) ; « isopropyle » (ou 1-méthyléthyle) → propan-2-ol.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Isomérie totale C₄H₈O₂',
          stepTheme: 'Acides + Esters',
          stepTitle: 'Acides carboxyliques isomères de C₄H₈O₂',
          paragraphText:
            'Aux 4 esters C₄H₈O₂ s’ajoutent 2 acides carboxyliques isomères : l’acide butanoïque et l’acide 2-méthylpropanoïque.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q6',
            type: 'mcq',
            prompt: 'Au total, combien d’acides carboxyliques et combien d’esters répondent à la formule brute $\\mathrm{C_4H_8O_2}$ ?',
            options: [
              '$2$ acides carboxyliques et $4$ esters',
              '$4$ acides carboxyliques et $2$ esters',
              '$1$ acide carboxylique et $3$ esters',
              '$2$ acides carboxyliques et $2$ esters',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les deux acides sont l’acide butanoïque et l’acide 2-méthylpropanoïque ; les quatre esters sont propanoate de méthyle, éthanoate d’éthyle, méthanoate de propyle et méthanoate d’isopropyle.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q1',
          type: 'mcq',
          prompt: 'Combien d’esters isomères possèdent la formule brute $\\mathrm{C_4H_8O_2}$ ?',
          options: [
            '$4$ esters (propanoate de méthyle, éthanoate d’éthyle, méthanoate de propyle, méthanoate d’isopropyle)',
            '$2$ esters seulement',
            '$3$ esters seulement',
            '$6$ esters différents',
          ],
          correctAnswerIndex: 0,
          explanation:
            '(3,1) → propanoate de méthyle ; (2,2) → éthanoate d’éthyle ; (1,3) → méthanoate de propyle et méthanoate d’isopropyle : au total 4 esters.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q2',
          type: 'mcq',
          prompt: 'Quelle est la formule semi-développée exacte de l’alcool utilisé pour synthétiser l’éthanoate de $3$-méthylbutyle ?',
          options: [
            '$\\mathrm{CH_3-CH(CH_3)-CH_2-CH_2-OH}$ ($3$-méthylbutan-$1$-ol)',
            '$\\mathrm{CH_3-CH_2-CH(CH_3)-CH_2-OH}$ ($2$-méthylbutan-$1$-ol)',
            '$\\mathrm{CH_3-CH(CH_3)-CH(OH)-CH_3}$ ($3$-méthylbutan-$2$-ol)',
            '$\\mathrm{CH_3-CH(CH_3)-COOH}$ (acide $2$-méthylpropanoïque)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On numérote l’alcool à partir du carbone fonctionnel (C1–OH) : chaîne à 4 C (butan-1-ol) avec un méthyle sur C3 → CH₃–CH(CH₃)–CH₂–CH₂–OH.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q3',
          type: 'mcq',
          prompt: 'Quels deux réactifs réagissent pour former le $2$-méthylpropanoate d’éthyle ?',
          options: [
            'L’acide $2$-méthylpropanoïque ($\\mathrm{CH_3-CH(CH_3)-COOH}$) et l’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
            'L’acide éthanoïque et le $2$-méthylpropan-$1$-ol',
            'L’acide butanoïque et l’éthanol',
            'L’acide propanoïque et le méthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            '« 2-méthylpropanoate » vient de l’acide 2-méthylpropanoïque et « d’éthyle » vient de l’éthanol.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q4',
          type: 'mcq',
          prompt: 'Quels réactifs forment l’ester écrit à l’envers sous la forme $\\mathrm{CH_3-O-C(=O)-CH_2-CH_3}$ ?',
          options: [
            'L’acide propanoïque ($\\mathrm{CH_3-CH_2-COOH}$) et le méthanol ($\\mathrm{CH_3-OH}$)',
            'L’acide méthanoïque et le propan-1-ol',
            'L’acide éthanoïque et l’éthanol',
            'L’acide butanoïque et le méthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le groupe –C(=O)–CH₂–CH₃ porte le carbonyle (3 C → propanoate), tandis que CH₃–O– vient du méthanol : c’est le propanoate de méthyle.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q5',
          type: 'mcq',
          prompt: 'Quel alcool et quel acide carboxylique forment le méthanoate d’isopropyle ?',
          options: [
            'L’acide méthanoïque et le $\\text{propan-}2\\text{-ol}$',
            'L’acide méthanoïque et le $\\text{propan-}1\\text{-ol}$',
            'L’acide éthanoïque et le propan-2-ol',
            'L’acide propanoïque et le méthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            '« Méthanoate » → acide méthanoïque (H–COOH) ; « isopropyle » (ou 1-méthyléthyle) → propan-2-ol.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p04_q6',
          type: 'mcq',
          prompt: 'Au total, combien d’acides carboxyliques et combien d’esters répondent à la formule brute $\\mathrm{C_4H_8O_2}$ ?',
          options: [
            '$2$ acides carboxyliques et $4$ esters',
            '$4$ acides carboxyliques et $2$ esters',
            '$1$ acide carboxylique et $3$ esters',
            '$2$ acides carboxyliques et $2$ esters',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les deux acides sont l’acide butanoïque et l’acide 2-méthylpropanoïque ; les quatre esters sont propanoate de méthyle, éthanoate d’éthyle, méthanoate de propyle et méthanoate d’isopropyle.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Rendement ρ et méthodes d’amélioration
    // ========================================================================
    {
      id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05',
      order: 5,
      title: 'Rendement d’estérification et d’hydrolyse, et amélioration',
      summary:
        'Calculer le rendement ρ d’une estérification ou d’une hydrolyse (mélange équimolaire ou avec excès) et expliquer comment déplacer l’équilibre pour améliorer le rendement.',
      conceptExplanation:
        "1. **Définition du rendement $\\rho$** :\n   - **Cas de l’estérification** (mélange équimolaire ou acide limitant $n_0(A)$) :\n     $$\\rho = \\frac{n_{\\text{ester formé}}}{n_{\\text{max théorique}}} = \\frac{n_E}{n_0(A)}$$\n     Pour un mélange équimolaire d’acide et d’alcool primaire, $\\rho \\approx 0{,}67 = \\mathbf{67\\%}$ (Activité 2 p. 4, Ex 5 p. 8–9).\n   - **Cas de l’hydrolyse** (mélange équimolaire ou ester limitant $n_0(E)$) :\n     $$\\rho = \\frac{n_{\\text{acide formé}}}{n_0(E)}$$\n     Pour un mélange équimolaire d’ester et d’eau, $\\rho \\approx 0{,}33 = \\mathbf{33\\%}$.\n2. **Comment améliorer le rendement ?** (Remarque p. 4 et Ex 4 p. 7–8) :\n   - **Mettre l’un des réactifs en large excès** : ex. en mélangeant $5\\text{ mol}$ d’eau avec $1\\text{ mol}$ de butanoate d’éthyle (Ex 4 p. 7–8), le rendement d’hydrolyse passe de **$33\\%$ à $70\\%$** ($0{,}7\\text{ mol}$ d’acide formée).\n   - **Empêcher la réaction inverse en éliminant un produit au fur et à mesure** : pour l’estérification, **distiller l’ester** (s’il est le plus volatil) ou **enlever l’eau** formée en continu permet de tendre vers $100\\%$.",
      keyRule:
        'En mélange équimolaire (alcool primaire), ρ(estérification) ≈ 67 % et ρ(hydrolyse) ≈ 33 %. On améliore le rendement en mettant un réactif en large excès ou en extrayant un produit (eau ou ester par distillation), jamais avec un catalyseur.',
      formulas: [
        {
          name: 'Rendement d’estérification et d’hydrolyse',
          formula: '\\rho_{\\text{estérification}} = \\frac{n_E}{n_{\\text{limitant}}} \\quad ; \\quad \\rho_{\\text{hydrolyse}} = \\frac{n_A}{n_{\\text{limitant}}}',
          note: 'Attention : si le mélange est non équimolaire, toujours diviser par la quantité initiale du réactif limitant !',
        },
      ],
      workedExample: {
        title: 'Calculs complets de rendement et masses formées (Situation p. 5 & Ex 4–5 p. 7–9)',
        statement:
          '(1) On mélange $0{,}15\\text{ mol}$ d’acide $2$-méthylpropanoïque et $0{,}15\\text{ mol}$ d’éthanol ; il se forme $11{,}6\\text{ g}$ de $2$-méthylpropanoate d’éthyle ($M = 116\\text{ g/mol}$). Calcule le rendement. (2) On hydrolyse $1\\text{ mol}$ de butanoate d’éthyle avec $5\\text{ mol}$ d’eau ; à l’équilibre, on obtient $0{,}7\\text{ mol}$ d’acide butanoïque. Calcule et compare ce rendement.',
        methodSteps: [
          '1) Cas (1) : n_E = m / M = 11,6 / 116 = 0,10 mol. Le réactif limitant initial est 0,15 mol → ρ = 0,10 / 0,15 ≈ 0,67 = 67 %.',
          '2) Cas (2) : l’ester (1 mol) est le réactif limitant (l’eau est en excès à 5 mol). À l’équilibre, n_A = 0,7 mol → ρ = 0,7 / 1 = 70 %.',
          '3) Comparaison : 70 % > 33 % (mélange équimolaire) ; l’excès d’eau a déplacé l’équilibre en faveur de l’hydrolyse.',
        ],
        conclusion:
          'L’introduction d’un réactif en excès augmente nettement le rendement par rapport au mélange équimolaire.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Estérification',
          stepTheme: 'Exercice 5 p. 8–9',
          stepTitle: 'Calculer un rendement à partir de la masse d’ester obtenue',
          paragraphText:
            'On commence par calculer la quantité de matière d’ester formée n_E = m_E / M_E, puis on divise par la quantité initiale du réactif limitant n_0.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q1',
            type: 'mcq',
            prompt: 'En mélangeant $0{,}15\\text{ mol}$ d’acide $2$-méthylpropanoïque et $0{,}15\\text{ mol}$ d’éthanol, on recueille $11{,}6\\text{ g}$ de $2$-méthylpropanoate d’éthyle ($M = 116\\text{ g/mol}$). Quel est le rendement ?',
            options: [
              '$67\\%$',
              '$33\\%$',
              '$86\\%$',
              '$50\\%$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$n_E = 11{,}6 / 116 = 0{,}10\\text{ mol}$ ; $\\rho = 0{,}10 / 0{,}15 \\approx 0{,}67 = 67\\%$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Masses formées',
          stepTheme: 'Situation p. 5',
          stepTitle: 'Calculer les masses d’ester et d’eau à partir du rendement',
          paragraphText:
            'Connaissant le rendement ρ et le réactif limitant n_0(A), on obtient n_E = n_{eau} = ρ · n_0(A), puis m = n · M.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q2',
            type: 'mcq',
            prompt: 'Avec $0{,}15\\text{ mol}$ d’acide éthanoïque (limitant), un rendement $\\rho = 67\\%$ donne de l’éthanoate de $3$-méthylbutyle ($M = 130\\text{ g/mol}$) et de l’eau ($M = 18\\text{ g/mol}$). Quelles masses obtient-on ?',
            options: [
              '$m_E \\approx 13{,}1\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 1{,}81\\text{ g}$ d’eau',
              '$m_E \\approx 19{,}5\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 2{,}70\\text{ g}$ d’eau',
              '$m_E \\approx 6{,}4\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 0{,}90\\text{ g}$ d’eau',
              '$m_E \\approx 39{,}2\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 5{,}43\\text{ g}$ d’eau',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$n_E = n_{\\text{eau}} = 0{,}67 \\times 0{,}15 = 0{,}1005\\text{ mol}$ ; $m_E = 0{,}1005 \\times 130 \\approx 13{,}1\\text{ g}$ et $m_{\\text{eau}} = 0{,}1005 \\times 18 \\approx 1{,}81\\text{ g}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Hydrolyse avec excès',
          stepTheme: 'Exercice 4 p. 7–8',
          stepTitle: 'Calculer le rendement d’hydrolyse en présence d’un excès d’eau',
          paragraphText:
            'Quand l’eau est en excès (5 mol pour 1 mol d’ester), c’est la quantité initiale d’ester (1 mol) qui fixe le rendement maximal théorique.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q3',
            type: 'mcq',
            prompt: 'On chauffe $5\\text{ mol}$ d’eau avec $1\\text{ mol}$ de butanoate d’éthyle ; à l’équilibre, on dose $0{,}70\\text{ mol}$ d’acide butanoïque. Quel est le rendement d’hydrolyse ?',
            options: [
              '$70\\%$ (supérieur aux $33\\%$ d’un mélange équimolaire)',
              '$14\\%$ (en divisant par $5\\text{ mol}$ d’eau)',
              '$33\\%$',
              '$100\\%$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le butanoate d’éthyle ($1\\text{ mol}$) est le réactif limitant : $\\rho = 0{,}70 / 1 = 70\\%$, bien supérieur aux $33\\%$ du mélange équimolaire.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Amélioration',
          stepTheme: 'Estérification',
          stepTitle: 'Comment dépasser 67 % en estérification directe ?',
          paragraphText:
            'Pour déplacer l’équilibre dans le sens de la synthèse d’ester, on utilise soit un réactif (acide ou alcool) en large excès, soit l’élimination continue de l’eau ou de l’ester par distillation.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q4',
            type: 'mcq',
            prompt: 'Parmi les moyens suivants, lesquels permettent d’améliorer réellement le rendement d’une estérification ?',
            options: [
              'Introduire l’un des réactifs en large excès ou extraire l’eau / distiller l’ester au fur et à mesure de sa formation',
              'Ajouter davantage d’acide sulfurique concentré ou chauffer plus fort sans rien retirer ni ajouter en excès',
              'Ajouter beaucoup d’eau dès le départ dans le mélange acide + alcool',
              'Laisser le flacon bouché à température ambiante sans catalyseur pendant 2 heures',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un excès d’un réactif ou le retrait continu d’un produit (eau ou ester) empêche la réaction inverse d’hydrolyse et augmente le rendement.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège classique',
          stepTheme: 'Catalyseur & température',
          stepTitle: 'Pourquoi catalyseur et chauffage ne changent-ils pas le rendement ?',
          paragraphText:
            'Puisque la réaction est athermique, chauffer ou catalyser avec H₂SO₄ accélère autant le sens direct que le sens inverse : on gagne du temps, pas du rendement !',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q5',
            type: 'mcq',
            prompt: 'On passe de $25^\\circ\\mathrm{C}$ sans acide sulfurique à $100^\\circ\\mathrm{C}$ avec acide sulfurique sur le même mélange équimolaire acide éthanoïque + éthanol. Quel changement observe-t-on à l’équilibre ?',
            options: [
              'L’équilibre est atteint beaucoup plus rapidement, mais le rendement reste égal à $67\\%$',
              'Le rendement passe immédiatement de $67\\%$ à $100\\%$',
              'Le rendement tombe à $33\\%$',
              'Aucune réaction ne se produit à $100^\\circ\\mathrm{C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Température et catalyseur sont des facteurs cinétiques : pour une réaction athermique, ils modifient la vitesse d’atteinte de l’équilibre sans déplacer sa limite (67 %).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège du limitant',
          stepTheme: 'Mélange non équimolaire',
          stepTitle: 'Attention : ne jamais diviser par le réactif en excès !',
          paragraphText:
            'Dans l’Exercice 4 (5 mol d’eau + 1 mol d’ester), diviser par 5 mol donnerait 14 %, ce qui est faux car au maximum 1 mol d’ester peut disparaître.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q6',
            type: 'mcq',
            prompt: 'Lorsqu’on fait réagir $0{,}20\\text{ mol}$ d’acide éthanoïque avec $0{,}60\\text{ mol}$ d’éthanol et qu’on obtient $0{,}17\\text{ mol}$ d’ester, par quelle quantité divise-t-on pour calculer le rendement ?',
            options: [
              'Par $0{,}20\\text{ mol}$ (la quantité initiale du réactif limitant)',
              'Par $0{,}60\\text{ mol}$ (la quantité d’éthanol en excès)',
              'Par $0{,}80\\text{ mol}$ (la somme des réactifs)',
              'Par $0{,}40\\text{ mol}$ (la moyenne des deux)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le rendement rapporte la quantité obtenue à la quantité maximale théorique, fixée par le réactif limitant (ici 0,20 mol d’acide → ρ = 0,17/0,20 = 85 %).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q1',
          type: 'mcq',
          prompt: 'En mélangeant $0{,}15\\text{ mol}$ d’acide $2$-méthylpropanoïque et $0{,}15\\text{ mol}$ d’éthanol, on recueille $11{,}6\\text{ g}$ de $2$-méthylpropanoate d’éthyle ($M = 116\\text{ g/mol}$). Quel est le rendement ?',
          options: [
            '$67\\%$',
            '$33\\%$',
            '$86\\%$',
            '$50\\%$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$n_E = 11{,}6 / 116 = 0{,}10\\text{ mol}$ ; $\\rho = 0{,}10 / 0{,}15 \\approx 0{,}67 = 67\\%$.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q2',
          type: 'mcq',
          prompt: 'Avec $0{,}15\\text{ mol}$ d’acide éthanoïque (limitant), un rendement $\\rho = 67\\%$ donne de l’éthanoate de $3$-méthylbutyle ($M = 130\\text{ g/mol}$) et de l’eau ($M = 18\\text{ g/mol}$). Quelles masses obtient-on ?',
          options: [
            '$m_E \\approx 13{,}1\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 1{,}81\\text{ g}$ d’eau',
            '$m_E \\approx 19{,}5\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 2{,}70\\text{ g}$ d’eau',
            '$m_E \\approx 6{,}4\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 0{,}90\\text{ g}$ d’eau',
            '$m_E \\approx 39{,}2\\text{ g}$ d’ester et $m_{\\text{eau}} \\approx 5{,}43\\text{ g}$ d’eau',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$n_E = n_{\\text{eau}} = 0{,}67 \\times 0{,}15 = 0{,}1005\\text{ mol}$ ; $m_E = 0{,}1005 \\times 130 \\approx 13{,}1\\text{ g}$ et $m_{\\text{eau}} = 0{,}1005 \\times 18 \\approx 1{,}81\\text{ g}$.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q3',
          type: 'mcq',
          prompt: 'On chauffe $5\\text{ mol}$ d’eau avec $1\\text{ mol}$ de butanoate d’éthyle ; à l’équilibre, on dose $0{,}70\\text{ mol}$ d’acide butanoïque. Quel est le rendement d’hydrolyse ?',
          options: [
            '$70\\%$ (supérieur aux $33\\%$ d’un mélange équimolaire)',
            '$14\\%$ (en divisant par $5\\text{ mol}$ d’eau)',
            '$33\\%$',
            '$100\\%$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le butanoate d’éthyle ($1\\text{ mol}$) est le réactif limitant : $\\rho = 0{,}70 / 1 = 70\\%$, bien supérieur aux $33\\%$ du mélange équimolaire.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q4',
          type: 'mcq',
          prompt: 'Parmi les moyens suivants, lesquels permettent d’améliorer réellement le rendement d’une estérification ?',
          options: [
            'Introduire l’un des réactifs en large excès ou extraire l’eau / distiller l’ester au fur et à mesure de sa formation',
            'Ajouter davantage d’acide sulfurique concentré ou chauffer plus fort sans rien retirer ni ajouter en excès',
            'Ajouter beaucoup d’eau dès le départ dans le mélange acide + alcool',
            'Laisser le flacon bouché à température ambiante sans catalyseur pendant 2 heures',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un excès d’un réactif ou le retrait continu d’un produit (eau ou ester) empêche la réaction inverse d’hydrolyse et augmente le rendement.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q5',
          type: 'mcq',
          prompt: 'On passe de $25^\\circ\\mathrm{C}$ sans acide sulfurique à $100^\\circ\\mathrm{C}$ avec acide sulfurique sur le même mélange équimolaire acide éthanoïque + éthanol. Quel changement observe-t-on à l’équilibre ?',
          options: [
            'L’équilibre est atteint beaucoup plus rapidement, mais le rendement reste égal à $67\\%$',
            'Le rendement passe immédiatement de $67\\%$ à $100\\%$',
            'Le rendement tombe à $33\\%$',
            'Aucune réaction ne se produit à $100^\\circ\\mathrm{C}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Température et catalyseur sont des facteurs cinétiques : pour une réaction athermique, ils modifient la vitesse d’atteinte de l’équilibre sans déplacer sa limite (67 %).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p05_q6',
          type: 'mcq',
          prompt: 'Lorsqu’on fait réagir $0{,}20\\text{ mol}$ d’acide éthanoïque avec $0{,}60\\text{ mol}$ d’éthanol et qu’on obtient $0{,}17\\text{ mol}$ d’ester, par quelle quantité divise-t-on pour calculer le rendement ?',
          options: [
            'Par $0{,}20\\text{ mol}$ (la quantité initiale du réactif limitant)',
            'Par $0{,}60\\text{ mol}$ (la quantité d’éthanol en excès)',
            'Par $0{,}80\\text{ mol}$ (la somme des réactifs)',
            'Par $0{,}40\\text{ mol}$ (la moyenne des deux)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le rendement rapporte la quantité obtenue à la quantité maximale théorique, fixée par le réactif limitant (ici 0,20 mol d’acide → ρ = 0,17/0,20 = 85 %).',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Esters dans la nature, arômes et parfumerie (Documentation)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06',
      order: 6,
      title: 'Esters naturels, arômes fruités et parfumerie',
      summary:
        'Relier quelques esters célèbres à leurs arômes naturels ou synthétiques (banane, ananas, fraise, poire, jasmin, rhum) et situer les esters biologiques (triglycérides).',
      conceptExplanation:
        "En chimie, les **esters carboxyliques** ($\\mathrm{R-COO-R'}$) sont très répandus dans le monde vivant et dans l’industrie chimique :\n\n- **Arômes naturels et synthétiques / Parfumerie** : de nombreux esters volatils ont une odeur fruitée ou florale très agréable et servent à formuler des parfums et des arômes alimentaires :\n  - **Éthanoate de 3-méthylbutyle (ou d’isoamyle)** : **banane**.\n  - **Butanoate d’éthyle** : **ananas**.\n  - **Propanoate d’éthyle** : **fraise**.\n  - **Éthanoate de propyle / pentyle** : **poire** ; **éthanoate d’octyle** : **orange**.\n  - **Éthanoate de benzyle** : **jasmin** ; **éthanoate de 2-phényléthyle** : **rose**.\n  - **Méthanoate d’éthyle** : odeur de **rhum** (et framboise).\n- **Biologie et savonnerie** : les corps gras animaux et végétaux (graisses, huiles) sont principalement des **triglycérides**, c’est-à-dire des triesters d’acides gras et de glycérol.\n- **Autres familles d’esters (Documentation p. 9)** : lorsque l’atome lié au groupement alkoxy est un atome de soufre, d’azote ou de phosphore au lieu d’un carbone, on parle respectivement d’esters sulfuriques, nitriques ou phosphoriques.",
      keyRule:
        'Les esters carboxyliques donnent leurs arômes aux fruits et fleurs (banane = éthanoate de 3-méthylbutyle, ananas = butanoate d’éthyle, jasmin = éthanoate de benzyle) et constituent les triglycérides des corps gras.',
      workedExample: {
        title: 'Associer esters aromatiques, noms IUPAC et odeurs (Documentation p. 9–10)',
        statement:
          'Identifie l’arôme caractéristique de l’éthanoate de $3$-méthylbutyle (ou d’isoamyle), du butanoate d’éthyle et de l’éthanoate de benzyle, puis indique leurs synonymes d’usage « acétate / butyrate ».',
        methodSteps: [
          '1) Éthanoate = acétate ; butanoate = butyrate ; méthanoate = formiate ; propanoate = propionate.',
          '2) Éthanoate (acétate) de 3-méthylbutyle ou d’isoamyle → arôme de banane.',
          '3) Butanoate (butyrate) d’éthyle → arôme d’ananas.',
          '4) Éthanoate (acétate) de benzyle → parfum de jasmin.',
        ],
        conclusion:
          'Dans l’industrie des parfums et arômes, on rencontre fréquemment les noms d’usage « formiate, acétate, propionate, butyrate » équivalents aux noms IUPAC.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Quelques esters et leur arôme caractéristique (Documentation officielle)',
        tableData: {
          headers: ['Nom IUPAC (nom d’usage)', 'Odeur / Arôme', 'Acide de départ'],
          rows: [
            ['Éthanoate (acétate) de 3-méthylbutyle', 'Banane', 'Acide éthanoïque'],
            ['Butanoate (butyrate) d’éthyle', 'Ananas', 'Acide butanoïque'],
            ['Propanoate (propionate) d’éthyle', 'Fraise', 'Acide propanoïque'],
            ['Éthanoate de benzyle', 'Jasmin', 'Acide éthanoïque'],
            ['Éthanoate d’octyle', 'Orange', 'Acide éthanoïque'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Arôme banane',
          stepTheme: 'Situation p. 5 & Doc',
          stepTitle: 'L’ester responsable de l’odeur de banane mûre',
          paragraphText:
            'L’arôme synthétique de banane mûre employé pour aromatiser certains sirops est l’éthanoate (ou acétate) de 3-méthylbutyle, appelé aussi acétate d’isoamyle.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q1',
            type: 'mcq',
            prompt: 'Quel ester possède l’odeur et la saveur caractéristiques de la banane mûre ?',
            options: [
              'L’éthanoate de $3$-méthylbutyle (ou acétate d’isoamyle)',
              'Le benzoate de méthyle',
              'Le salicylate de méthyle',
              'Le méthanoate de méthyle',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’éthanoate de 3-méthylbutyle (acétate d’isoamyle) reproduit l’arôme caractéristique de la banane.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Arômes fruités',
          stepTheme: 'Ananas & Fraise',
          stepTitle: 'Associer butanoate d’éthyle et propanoate d’éthyle à leurs fruits',
          paragraphText:
            'Parmi les esters dérivés de l’éthanol, le butanoate d’éthyle sent l’ananas tandis que le propanoate d’éthyle sent la fraise.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q2',
            type: 'mcq',
            prompt: 'Quel arôme fruité est associé au butanoate d’éthyle (ou butyrate d’éthyle) ?',
            options: [
              'Ananas',
              'Banane',
              'Orange',
              'Jasmin',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le butanoate d’éthyle est célèbre pour son arôme d’ananas (tandis que le propanoate d’éthyle sent la fraise et l’éthanoate d’octyle l’orange).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Noms d’usage',
          stepTheme: 'Acétate / Formiate',
          stepTitle: 'Traduire « formiate » et « acétate » en noms IUPAC',
          paragraphText:
            'Dans la nomenclature usuelle de parfumerie : formiate = méthanoate, acétate = éthanoate, propionate = propanoate et butyrate = butanoate.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q3',
            type: 'mcq',
            prompt: 'À quels noms IUPAC correspondent les appellations usuelles « formiate d’éthyle » et « acétate de propyle » ?',
            options: [
              'Méthanoate d’éthyle et éthanoate de propyle',
              'Éthanoate de méthyle et propanoate d’éthyle',
              'Butanoate d’éthyle et pentanoate de propyle',
              'Acide méthanoïque et acide éthanoïque',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Formiate correspond à méthanoate (1 C) et acétate à éthanoate (2 C).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Biologie',
          stepTheme: 'Triglycérides',
          stepTitle: 'Les esters dans les corps gras biologiques',
          paragraphText:
            'Les huiles végétales et graisses animales sont principalement constituées de triglycérides, des molécules portant trois fonctions ester très utilisées en savonnerie.',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q4',
            type: 'mcq',
            prompt: 'Quelle importante classe de molécules biologiques (corps gras animaux et végétaux) appartient à la famille des esters ?',
            options: [
              'Les triglycérides',
              'Les alcanes gazeux',
              'Le glucose',
              'L’acide sulfurique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les triglycérides sont des triesters naturels formés entre le glycérol et des acides gras ; ils servent notamment en savonnerie.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Parfums floraux',
          stepTheme: 'Jasmin & Rose',
          stepTitle: 'Esters floraux en parfumerie',
          paragraphText:
            'Certains éthanoates portant un groupement aromatique possèdent des parfums floraux raffinés : l’éthanoate de benzyle (jasmin) et l’éthanoate de 2-phényléthyle (rose).',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q5',
            type: 'mcq',
            prompt: 'Quel parfum floral est dû à l’éthanoate de benzyle ?',
            options: [
              'Le jasmin',
              'L’ananas',
              'Le rhum',
              'Le vinaigre',
            ],
            correctAnswerIndex: 0,
            explanation:
              'D’après le tableau de documentation p. 9, l’éthanoate de benzyle dégage une odeur de jasmin (et l’éthanoate de 2-phényléthyle une odeur de rose).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Culture chimique',
          stepTheme: 'Esters minéraux',
          stepTitle: 'Esters carboxyliques vs autres esters (S, N, P)',
          paragraphText:
            'Un ester carboxylique contient –C(=O)–O–R′, mais il existe aussi des esters dérivés d’acides minéraux (esters sulfuriques, nitriques ou phosphoriques).',
          exercise: {
            id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q6',
            type: 'mcq',
            prompt: 'Que devient le type d’ester lorsque l’atome central doublement lié à l’oxygène n’est plus un carbone mais du soufre, de l’azote ou du phosphore ?',
            options: [
              'Un ester sulfurique, nitrique ou phosphorique (et non un ester carboxylique)',
              'Un alcool tertiaire',
              'Un éther-oxyde symétrique',
              'Une cétone cyclique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un ester carboxylique dérive d’un acide carboxylique (atome C dans –COO–), tandis que d’autres hétéroatomes (S, N, P) forment des esters sulfuriques, nitriques ou phosphoriques.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q1',
          type: 'mcq',
          prompt: 'Quel ester possède l’odeur et la saveur caractéristiques de la banane mûre ?',
          options: [
            'L’éthanoate de $3$-méthylbutyle (ou acétate d’isoamyle)',
            'Le benzoate de méthyle',
            'Le salicylate de méthyle',
            'Le méthanoate de méthyle',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’éthanoate de 3-méthylbutyle (acétate d’isoamyle) reproduit l’arôme caractéristique de la banane.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q2',
          type: 'mcq',
          prompt: 'Quel arôme fruité est associé au butanoate d’éthyle (ou butyrate d’éthyle) ?',
          options: [
            'Ananas',
            'Banane',
            'Orange',
            'Jasmin',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le butanoate d’éthyle est célèbre pour son arôme d’ananas (tandis que le propanoate d’éthyle sent la fraise et l’éthanoate d’octyle l’orange).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q3',
          type: 'mcq',
          prompt: 'À quels noms IUPAC correspondent les appellations usuelles « formiate d’éthyle » et « acétate de propyle » ?',
          options: [
            'Méthanoate d’éthyle et éthanoate de propyle',
            'Éthanoate de méthyle et propanoate d’éthyle',
            'Butanoate d’éthyle et pentanoate de propyle',
            'Acide méthanoïque et acide éthanoïque',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Formiate correspond à méthanoate (1 C) et acétate à éthanoate (2 C).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q4',
          type: 'mcq',
          prompt: 'Quelle importante classe de molécules biologiques (corps gras animaux et végétaux) appartient à la famille des esters ?',
          options: [
            'Les triglycérides',
            'Les alcanes gazeux',
            'Le glucose',
            'L’acide sulfurique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les triglycérides sont des triesters naturels formés entre le glycérol et des acides gras ; ils servent notamment en savonnerie.',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q5',
          type: 'mcq',
          prompt: 'Quel parfum floral est dû à l’éthanoate de benzyle ?',
          options: [
            'Le jasmin',
            'L’ananas',
            'Le rhum',
            'Le vinaigre',
          ],
          correctAnswerIndex: 0,
          explanation:
            'D’après le tableau de documentation p. 9, l’éthanoate de benzyle dégage une odeur de jasmin (et l’éthanoate de 2-phényléthyle une odeur de rose).',
        },
        {
          id: 'premiere_c_chimie_l06_esterification_hydrolyse_p06_q6',
          type: 'mcq',
          prompt: 'Que devient le type d’ester lorsque l’atome central doublement lié à l’oxygène n’est plus un carbone mais du soufre, de l’azote ou du phosphore ?',
          options: [
            'Un ester sulfurique, nitrique ou phosphorique (et non un ester carboxylique)',
            'Un alcool tertiaire',
            'Un éther-oxyde symétrique',
            'Une cétone cyclique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un ester carboxylique dérive d’un acide carboxylique (atome C dans –COO–), tandis que d’autres hétéroatomes (S, N, P) forment des esters sulfuriques, nitriques ou phosphoriques.',
        },
      ],
    },
  ],
};
