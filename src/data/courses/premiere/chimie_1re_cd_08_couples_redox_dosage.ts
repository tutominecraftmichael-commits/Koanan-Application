import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CDE - Chimie : Couples oxydants/réducteurs en solution aqueuse. Dosage. » (format v2).
export const CHIMIE_1RE_CD_L08_COUPLES_REDOX_DOSAGE: CurriculumChapter = {
  id: 'premiere_c_chimie_l08_couples_redox_dosage',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 8,
  title: 'Leçon 8 : Couples oxydants/réducteurs en solution aqueuse. Dosage.',
  summary:
    'Étude des couples MnO₄⁻/Mn²⁺, Fe³⁺/Fe²⁺, Cr₂O₇²⁻/Cr³⁺ et CH₃COOH/CH₃CH₂OH (alcootest), équilibrage en milieu acide, prévision par potentiels normaux (règle du gamma) et dosages colorimétriques.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CDE - Chimie : Couples oxydants/réducteurs en solution aqueuse. Dosage.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Étude des couples Fe³⁺/Fe²⁺ et MnO₄⁻/Mn²⁺
    // ========================================================================
    {
      id: 'premiere_c_chimie_l08_couples_redox_dosage_p01',
      order: 1,
      title: 'Couples en solution aqueuse : Fe³⁺/Fe²⁺ et MnO₄⁻/Mn²⁺',
      summary:
        'Interpréter la réaction entre ions permanganate et ions fer II en milieu acide (décoloration, test à la soude) et écrire les demi-équations.',
      conceptExplanation:
        "Lorsqu’on verse une solution violette de **permanganate de potassium acidifiée** ($\\mathrm{K^+ + MnO_4^-}$) dans une solution vert pâle de **sulfate de fer II** ($\\mathrm{Fe^{2+} + SO_4^{2-}}$), le mélange se décolore tant que $\\mathrm{Fe^{2+}}$ est en excès, puis prend une teinte **jaune orangé** en présence de soude (précipité d’hydroxyde de fer III $\\mathrm{Fe(OH)_3}$, caractérisant les ions $\\mathrm{Fe^{3+}}$) :\n\n1. **Oxydation des ions $\\mathrm{Fe^{2+}}$** (couple $\\mathrm{Fe^{3+}/Fe^{2+}}$, $E^0 = +0{,}66\\text{ V}$) :\n   $$\\mathrm{Fe^{2+} \\longrightarrow Fe^{3+} + e^-}$$\n2. **Réduction des ions permanganate $\\mathrm{MnO_4^-}$** en ions $\\mathrm{Mn^{2+}}$ incolores en milieu acide (couple $\\mathrm{MnO_4^-/Mn^{2+}}$, $E^0 = +1{,}52\\text{ V}$) :\n   $$\\mathrm{MnO_4^- + 8\\,H^+ + 5\\,e^- \\longrightarrow Mn^{2+} + 4\\,H_2O}$$\n3. **Équation-bilan** (en multipliant la première par $5$ pour égaliser les électrons) :\n   $$5\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O}$$\n   En remplaçant $\\mathrm{H^+}$ par $\\mathrm{H_3O^+}$ (ajout de $8\\,\\mathrm{H_2O}$ des deux côtés) :\n   $$5\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H_3O^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 12\\,\\mathrm{H_2O}$$",
      keyRule:
        'En milieu acide, MnO₄⁻ (violet, E° = 1,52 V) oxyde 5 Fe²⁺ (vert) en 5 Fe³⁺ (identifié par précipité rouille/jaune orangé à la soude) tout en se réduisant en Mn²⁺ incolore.',
      formulas: [
        {
          name: 'Réduction du permanganate en milieu acide',
          formula: '\\mathrm{MnO_4^- + 8\\,H^+ + 5\\,e^- \\longrightarrow Mn^{2+} + 4\\,H_2O}',
          note: 'Couple MnO₄⁻/Mn²⁺ : E° = 1,52 V (violet → incolore)',
        },
        {
          name: 'Équation-bilan entre MnO₄⁻ et Fe²⁺',
          formula: '5\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O}',
          note: 'Une mole de MnO₄⁻ oxyde exactement 5 moles de Fe²⁺',
        },
      ],
      workedExample: {
        title: 'Justifier le rôle de l’acide et identifier les ions formés',
        statement:
          'Lors de la réaction entre une solution acidifiée de $\\mathrm{KMnO_4}$ et $\\mathrm{FeSO_4}$, pourquoi ajoute-t-on de l’acide sulfurique et comment prouve-t-on la formation de $\\mathrm{Fe^{3+}}$ ?',
        methodSteps: [
          '1) La réduction de MnO₄⁻ en Mn²⁺ consomme 8 H⁺ (ou 8 H₃O⁺) par ion MnO₄⁻ : l’acide sulfurique fournit ces ions H⁺ nécessaires (sans réagir comme oxydant ni réducteur).',
          '2) L’ajout de soude (NaOH) dans le tube après réaction donne un précipité jaune orangé (rouille) d’hydroxyde de fer III Fe(OH)₃, prouvant la présence d’ions Fe³⁺.',
        ],
        conclusion:
          'Fe²⁺ a été oxydé en Fe³⁺ et MnO₄⁻ réduit en Mn²⁺ grâce au milieu acide.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Tests ioniques',
          stepTheme: 'Couleurs & soude',
          stepTitle: 'Reconnaître Fe²⁺, Fe³⁺, MnO₄⁻ et Mn²⁺',
          paragraphText:
            'Les ions MnO₄⁻ sont violets et Mn²⁺ incolores ; les ions Fe²⁺ donnent une solution vert pâle tandis que Fe³⁺ précipite en jaune orangé (rouille) avec la soude.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q1',
            type: 'mcq',
            prompt: 'Que révèle l’apparition d’un précipité jaune orangé lorsqu’on verse de la soude dans la solution obtenue après action de $\\mathrm{MnO_4^-}$ sur $\\mathrm{Fe^{2+}}$ ?',
            options: [
              'La formation d’ions $\\mathrm{Fe^{3+}}$ (précipité d’hydroxyde de fer III)',
              'La persistance d’ions $\\mathrm{MnO_4^-}$ en excès',
              'La présence d’ions $\\mathrm{Mn^{2+}}$ violets',
              'La formation d’éthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les ions Fe²⁺ (précipité vert avec la soude) se sont oxydés en ions Fe³⁺, caractérisés par un précipité jaune orangé (rouille) avec la soude.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Demi-équation Fe',
          stepTheme: 'Couple Fe³⁺/Fe²⁺',
          stepTitle: 'Écrire la demi-équation d’oxydation de Fe²⁺',
          paragraphText:
            'Chaque ion Fe²⁺ cède un électron pour devenir Fe³⁺ : c’est le réducteur du couple Fe³⁺/Fe²⁺.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q2',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique subie par les ions $\\mathrm{Fe^{2+}}$ lors de cette expérience ?',
            options: [
              '$\\mathrm{Fe^{2+} \\longrightarrow Fe^{3+} + e^-}$ (oxydation)',
              '$\\mathrm{Fe^{3+} + e^- \\longrightarrow Fe^{2+}}$ (réduction)',
              '$\\mathrm{Fe^{2+} + 2\\,e^- \\longrightarrow Fe}$ (réduction)',
              '$\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$ (oxydation)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Fe²⁺ libère un électron pour passer au degré +III (Fe³⁺) : c’est une réaction d’oxydation.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Demi-équation MnO₄⁻',
          stepTheme: 'Couple MnO₄⁻/Mn²⁺',
          stepTitle: 'Équilibrer la demi-équation MnO₄⁻ / Mn²⁺',
          paragraphText:
            'Les 4 atomes O de MnO₄⁻ passent dans 4 H₂O à droite, nécessitant 8 H⁺ à gauche ; la conservation des charges impose 5 e⁻ à gauche.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q3',
            type: 'mcq',
            prompt: 'Combien d’ions $\\mathrm{H^+}$ et d’électrons interviennent pour réduire $1\\text{ ion }\\mathrm{MnO_4^-}$ en $\\mathrm{Mn^{2+}}$ ?',
            options: [
              '$8\\,\\mathrm{H^+}$ et $5\\,e^-$ (donnant $4\\,\\mathrm{H_2O}$)',
              '$4\\,\\mathrm{H^+}$ et $3\\,e^-$ (donnant $2\\,\\mathrm{H_2O}$)',
              '$14\\,\\mathrm{H^+}$ et $6\\,e^-$ (donnant $7\\,\\mathrm{H_2O}$)',
              '$8\\,\\mathrm{H^+}$ et $2\\,e^-$ (donnant $4\\,\\mathrm{H_2O}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O : −1 + 8 − 5 = +2 de chaque côté.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Stœchiométrie 5:1',
          stepTitle: 'Écrire l’équation-bilan entre MnO₄⁻ et Fe²⁺',
          paragraphText:
            'MnO₄⁻ captant 5 électrons alors que Fe²⁺ n’en cède qu’un, il faut 5 Fe²⁺ par ion permanganate.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de la réaction entre $\\mathrm{MnO_4^-}$ et $\\mathrm{Fe^{2+}}$ en milieu acide ?',
            options: [
              '$5\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O}$',
              '$\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O}$',
              '$5\\,\\mathrm{Fe^{2+}} + 2\\,\\mathrm{MnO_4^-} + 16\\,\\mathrm{H^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + 2\\,\\mathrm{Mn^{2+}} + 8\\,\\mathrm{H_2O}$',
              '$3\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 4\\,\\mathrm{H^+} \\longrightarrow 3\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 2\\,\\mathrm{H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Vérification des charges : 5(+2) − 1 + 8(+1) = +17 à gauche ; 5(+3) + 2 = +17 à droite.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Écriture H₃O⁺',
          stepTheme: 'Passage H⁺ → H₃O⁺',
          stepTitle: 'Écrire l’équation-bilan avec les ions hydronium H₃O⁺',
          paragraphText:
            'En solution aqueuse, H⁺ est solvaté sous forme H₃O⁺ : remplacer 8 H⁺ par 8 H₃O⁺ revient à ajouter 8 molécules d’eau à gauche et à droite (soit 4 + 8 = 12 H₂O à droite).',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q5',
            type: 'mcq',
            prompt: 'Lorsque l’on remplace $8\\,\\mathrm{H^+}$ par $8\\,\\mathrm{H_3O^+}$ dans l’équation entre $\\mathrm{MnO_4^-}$ et $\\mathrm{Fe^{2+}}$, combien de molécules d’eau figurent du côté des produits ?',
            options: [
              '$12\\,\\mathrm{H_2O}$',
              '$4\\,\\mathrm{H_2O}$',
              '$8\\,\\mathrm{H_2O}$',
              '$27\\,\\mathrm{H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '8 H₃O⁺ = 8 H⁺ + 8 H₂O ; en ajoutant 8 H₂O des deux côtés, on obtient 4 + 8 = 12 H₂O à droite.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Règle du gamma',
          stepTheme: 'Potentiels normaux',
          stepTitle: 'Prévoir la réaction à l’aide des potentiels normaux',
          paragraphText:
            'E°(MnO₄⁻/Mn²⁺) = 1,52 V est supérieur à E°(Fe³⁺/Fe²⁺) = 0,66 V : MnO₄⁻ est l’oxydant le plus fort et oxyde Fe²⁺.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q6',
            type: 'mcq',
            prompt: 'Avec $E^0(\\mathrm{MnO_4^-/Mn^{2+}}) = 1{,}52\\text{ V}$ et $E^0(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}66\\text{ V}$, pourquoi la réaction entre $\\mathrm{MnO_4^-}$ et $\\mathrm{Fe^{2+}}$ est-elle spontanée et totale ?',
            options: [
              'Parce que $E^0(\\mathrm{MnO_4^-/Mn^{2+}}) > E^0(\\mathrm{Fe^{3+}/Fe^{2+}})$ avec un écart de $0{,}86\\text{ V} \\ge 0{,}3\\text{ V}$',
              'Parce que $E^0(\\mathrm{Fe^{3+}/Fe^{2+}}) > E^0(\\mathrm{MnO_4^-/Mn^{2+}})$',
              'Parce que la différence vaut $0{,}10\\text{ V} < 0{,}3\\text{ V}$',
              'Parce que $\\mathrm{Fe^{2+}}$ est l’oxydant le plus fort',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’oxydant du couple de plus haut potentiel (MnO₄⁻, 1,52 V) oxyde le réducteur du couple de plus bas potentiel (Fe²⁺, 0,66 V), et 1,52 − 0,66 = 0,86 V ≥ 0,3 V.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q1',
          type: 'mcq',
          prompt: 'Que révèle l’apparition d’un précipité jaune orangé lorsqu’on verse de la soude dans la solution obtenue après action de $\\mathrm{MnO_4^-}$ sur $\\mathrm{Fe^{2+}}$ ?',
          options: [
            'La formation d’ions $\\mathrm{Fe^{3+}}$ (précipité d’hydroxyde de fer III)',
            'La persistance d’ions $\\mathrm{MnO_4^-}$ en excès',
            'La présence d’ions $\\mathrm{Mn^{2+}}$ violets',
            'La formation d’éthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les ions Fe²⁺ (précipité vert avec la soude) se sont oxydés en ions Fe³⁺, caractérisés par un précipité jaune orangé (rouille) avec la soude.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q2',
          type: 'mcq',
          prompt: 'Quelle est la demi-équation électronique subie par les ions $\\mathrm{Fe^{2+}}$ lors de cette expérience ?',
          options: [
            '$\\mathrm{Fe^{2+} \\longrightarrow Fe^{3+} + e^-}$ (oxydation)',
            '$\\mathrm{Fe^{3+} + e^- \\longrightarrow Fe^{2+}}$ (réduction)',
            '$\\mathrm{Fe^{2+} + 2\\,e^- \\longrightarrow Fe}$ (réduction)',
            '$\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$ (oxydation)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Fe²⁺ libère un électron pour passer au degré +III (Fe³⁺) : c’est une réaction d’oxydation.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q3',
          type: 'mcq',
          prompt: 'Combien d’ions $\\mathrm{H^+}$ et d’électrons interviennent pour réduire $1\\text{ ion }\\mathrm{MnO_4^-}$ en $\\mathrm{Mn^{2+}}$ ?',
          options: [
            '$8\\,\\mathrm{H^+}$ et $5\\,e^-$ (donnant $4\\,\\mathrm{H_2O}$)',
            '$4\\,\\mathrm{H^+}$ et $3\\,e^-$ (donnant $2\\,\\mathrm{H_2O}$)',
            '$14\\,\\mathrm{H^+}$ et $6\\,e^-$ (donnant $7\\,\\mathrm{H_2O}$)',
            '$8\\,\\mathrm{H^+}$ et $2\\,e^-$ (donnant $4\\,\\mathrm{H_2O}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O : −1 + 8 − 5 = +2 de chaque côté.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q4',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de la réaction entre $\\mathrm{MnO_4^-}$ et $\\mathrm{Fe^{2+}}$ en milieu acide ?',
          options: [
            '$5\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O}$',
            '$\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O}$',
            '$5\\,\\mathrm{Fe^{2+}} + 2\\,\\mathrm{MnO_4^-} + 16\\,\\mathrm{H^+} \\longrightarrow 5\\,\\mathrm{Fe^{3+}} + 2\\,\\mathrm{Mn^{2+}} + 8\\,\\mathrm{H_2O}$',
            '$3\\,\\mathrm{Fe^{2+}} + \\mathrm{MnO_4^-} + 4\\,\\mathrm{H^+} \\longrightarrow 3\\,\\mathrm{Fe^{3+}} + \\mathrm{Mn^{2+}} + 2\\,\\mathrm{H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Vérification des charges : 5(+2) − 1 + 8(+1) = +17 à gauche ; 5(+3) + 2 = +17 à droite.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q5',
          type: 'mcq',
          prompt: 'Lorsque l’on remplace $8\\,\\mathrm{H^+}$ par $8\\,\\mathrm{H_3O^+}$ dans l’équation entre $\\mathrm{MnO_4^-}$ et $\\mathrm{Fe^{2+}}$, combien de molécules d’eau figurent du côté des produits ?',
          options: [
            '$12\\,\\mathrm{H_2O}$',
            '$4\\,\\mathrm{H_2O}$',
            '$8\\,\\mathrm{H_2O}$',
            '$27\\,\\mathrm{H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '8 H₃O⁺ = 8 H⁺ + 8 H₂O ; en ajoutant 8 H₂O des deux côtés, on obtient 4 + 8 = 12 H₂O à droite.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p01_q6',
          type: 'mcq',
          prompt: 'Avec $E^0(\\mathrm{MnO_4^-/Mn^{2+}}) = 1{,}52\\text{ V}$ et $E^0(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}66\\text{ V}$, pourquoi la réaction entre $\\mathrm{MnO_4^-}$ et $\\mathrm{Fe^{2+}}$ est-elle spontanée et totale ?',
          options: [
            'Parce que $E^0(\\mathrm{MnO_4^-/Mn^{2+}}) > E^0(\\mathrm{Fe^{3+}/Fe^{2+}})$ avec un écart de $0{,}86\\text{ V} \\ge 0{,}3\\text{ V}$',
            'Parce que $E^0(\\mathrm{Fe^{3+}/Fe^{2+}}) > E^0(\\mathrm{MnO_4^-/Mn^{2+}})$',
            'Parce que la différence vaut $0{,}10\\text{ V} < 0{,}3\\text{ V}$',
            'Parce que $\\mathrm{Fe^{2+}}$ est l’oxydant le plus fort',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’oxydant du couple de plus haut potentiel (MnO₄⁻, 1,52 V) oxyde le réducteur du couple de plus bas potentiel (Fe²⁺, 0,66 V), et 1,52 − 0,66 = 0,86 V ≥ 0,3 V.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Couples Cr₂O₇²⁻/Cr³⁺ et CH₃COOH/CH₃CH₂OH (Alcootest)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l08_couples_redox_dosage_p02',
      order: 2,
      title: 'Principe de l’alcootest : couples Cr₂O₇²⁻/Cr³⁺ et éthanol/acide éthanoïque',
      summary:
        'Expliquer la réaction de l’alcootest entre l’éthanol et les ions dichromate orange (Cr₂O₇²⁻ → Cr³⁺ vert) en solution acidifiée.',
      conceptExplanation:
        "L’**alcootest** utilisé par les forces de l’ordre (Situation d’apprentissage p. 1 et p. 2–3) repose sur la réduction des ions **dichromate** ($\\mathrm{Cr_2O_7^{2-}}$, **orange**) en ions **chrome III** ($\\mathrm{Cr^{3+}}$, **vert**) par l’**éthanol** en milieu acide :\n\n1. **Réduction des ions dichromate** ($\\mathrm{Cr_2O_7^{2-}/Cr^{3+}}$, $E^0 = +1{,}33\\text{ V}$) :\n   $$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$$\n2. **Oxydation de l’éthanol en acide éthanoïque** ($\\mathrm{CH_3COOH/CH_3CH_2OH}$, $E^0 = +0{,}04\\text{ V}$) :\n   $$\\mathrm{CH_3CH_2OH + H_2O \\longrightarrow CH_3COOH + 4\\,H^+ + 4\\,e^-}$$\n3. **Équation-bilan** ($2 \\times \\text{réduction} + 3 \\times \\text{oxydation}$, soit $12\\,e^-$ échangés) :\n   $$2\\,\\mathrm{Cr_2O_7^{2-} + 16\\,H^+ + 3\\,CH_3CH_2OH \\longrightarrow 4\\,Cr^{3+} + 11\\,H_2O + 3\\,CH_3COOH}$$\n   Avec les ions $\\mathrm{H_3O^+}$ ($+16\\,\\mathrm{H_2O}$) :\n   $$2\\,\\mathrm{Cr_2O_7^{2-} + 16\\,H_3O^+ + 3\\,CH_3CH_2OH \\longrightarrow 4\\,Cr^{3+} + 27\\,H_2O + 3\\,CH_3COOH}$$",
      keyRule:
        'Dans l’alcootest, les ions dichromate orange Cr₂O₇²⁻ (E° = 1,33 V) oxydent l’éthanol en acide éthanoïque (E° = 0,04 V) et virent au vert (ions Cr³⁺) : 2 Cr₂O₇²⁻ + 16 H⁺ + 3 CH₃CH₂OH → 4 Cr³⁺ + 3 CH₃COOH + 11 H₂O.',
      formulas: [
        {
          name: 'Demi-équation dichromate / chrome III',
          formula: '\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}',
          note: 'Ne pas oublier le coefficient 2 devant Cr³⁺ !',
        },
        {
          name: 'Bilan de l’alcootest (en H⁺)',
          formula: '2\\,\\mathrm{Cr_2O_7^{2-} + 16\\,H^+ + 3\\,CH_3CH_2OH \\longrightarrow 4\\,Cr^{3+} + 3\\,CH_3COOH + 11\\,H_2O}',
          note: '12 électrons échangés (PPCM de 6 et 4)',
        },
      ],
      workedExample: {
        title: 'Retrouver l’équation-bilan de l’oxydation de l’éthanol (Exercice 2 p. 6)',
        statement:
          'Complète $\\mathrm{CH_3CH_2OH + \\dots \\longrightarrow CH_3COOH + \\dots}$ puis écris l’équation-bilan de sa réaction avec $\\mathrm{Cr_2O_7^{2-}}$ en milieu acide.',
        methodSteps: [
          '1) Conservation des atomes O et H pour l’éthanol : il manque 1 O à gauche (+ H₂O) puis 4 H⁺ et 4 e⁻ à droite : CH₃CH₂OH + H₂O → CH₃COOH + 4 H⁺ + 4 e⁻.',
          '2) Pour le dichromate : Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O.',
          '3) PPCM(4, 6) = 12 : multiplier par 3 et par 2, additionner puis simplifier H⁺ (28 − 12 = 16 H⁺ à gauche) et H₂O (14 − 3 = 11 H₂O à droite).',
        ],
        conclusion:
          'On obtient 2 Cr₂O₇²⁻ + 3 CH₃CH₂OH + 16 H⁺ → 4 Cr³⁺ + 3 CH₃COOH + 11 H₂O.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Changement de couleur',
          stepTheme: 'Alcootest positif',
          stepTitle: 'Interpréter le changement de couleur dans l’alcootest',
          paragraphText:
            'Dans le tube de l’alcootest contenant du dichromate de potassium acidifié (orange), la présence d’éthanol provoque le virage au vert des ions Cr³⁺.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q1',
            type: 'mcq',
            prompt: 'Lors d’un alcootest positif, quelles espèces expliquent le passage de la coloration orange à la coloration verdâtre ?',
            options: [
              'Les ions dichromate $\\mathrm{Cr_2O_7^{2-}}$ (orange) sont réduits en ions chrome III $\\mathrm{Cr^{3+}}$ (verts)',
              'Les ions $\\mathrm{MnO_4^-}$ (violets) deviennent $\\mathrm{Mn^{2+}}$ (incolores)',
              'L’éthanol vert devient acide éthanoïque orange',
              'Les ions $\\mathrm{Fe^{2+}}$ verts deviennent $\\mathrm{Fe^{3+}}$ orange',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Cr₂O₇²⁻ (orange) disparaît au profit des ions Cr³⁺ (verts) formés par réduction.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Demi-équation Cr',
          stepTheme: 'Équilibrage Cr₂O₇²⁻',
          stepTitle: 'Équilibrer la demi-équation Cr₂O₇²⁻ / Cr³⁺',
          paragraphText:
            'Attention aux 2 atomes de chrome dans Cr₂O₇²⁻ : il faut d’abord placer 2 Cr³⁺ à droite, puis 7 H₂O, 14 H⁺ et 6 e⁻.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q2',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique exacte du couple $\\mathrm{Cr_2O_7^{2-}/Cr^{3+}}$ en milieu acide ?',
            options: [
              '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$',
              '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow Cr^{3+} + 7\\,H_2O}$',
              '$\\mathrm{Cr_2O_7^{2-} + 7\\,H^+ + 3\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$',
              '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 12\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Conservation du chrome : 2 Cr³⁺. Charges à gauche : −2 + 14 − 6 = +6 ; à droite : 2×(+3) = +6.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Éthanol → Acide',
          stepTheme: 'Exercice 2 p. 6',
          stepTitle: 'Équilibrer CH₃CH₂OH / CH₃COOH en milieu acide',
          paragraphText:
            'L’éthanol possède 1 atome O alors que l’acide éthanoïque en possède 2 : on ajoute donc 1 H₂O côté éthanol, puis 4 H⁺ et 4 e⁻ côté acide.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q3',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique de l’oxydation de l’éthanol en acide éthanoïque (Ex 2 p. 6) ?',
            options: [
              '$\\mathrm{CH_3CH_2OH + H_2O \\longrightarrow CH_3COOH + 4\\,H^+ + 4\\,e^-}$',
              '$\\mathrm{CH_3CH_2OH \\longrightarrow CH_3COOH + 2\\,H^+ + 2\\,e^-}$',
              '$\\mathrm{CH_3CH_2OH + 2\\,H_2O \\longrightarrow CH_3COOH + 6\\,H^+ + 6\\,e^-}$',
              '$\\mathrm{CH_3COOH + 4\\,H^+ + 4\\,e^- \\longrightarrow CH_3CH_2OH + H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Conservation de O : +1 H₂O à gauche (2 O de chaque côté). H : 6 + 2 = 8 à gauche = 4 + 4 H⁺ à droite ; charge = 0 des deux côtés avec 4 e⁻.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Bilan Alcootest',
          stepTheme: 'Coefficients 2 et 3',
          stepTitle: 'Combiner les demi-équations avec 12 électrons',
          paragraphText:
            'En multipliant la réduction par 2 (12 e⁻) et l’oxydation par 3 (12 e⁻), 2 ions dichromate réagissent avec 3 molécules d’éthanol.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q4',
            type: 'mcq',
            prompt: 'Combien de molécules d’éthanol réagissent avec $2\\text{ ions }\\mathrm{Cr_2O_7^{2-}}$ selon l’équation-bilan de l’alcootest ?',
            options: [
              '$3\\text{ molécules d’éthanol}$ ($2\\,\\mathrm{Cr_2O_7^{2-}} + 16\\,\\mathrm{H^+} + 3\\,\\mathrm{CH_3CH_2OH}$)',
              '$2\\text{ molécules d’éthanol}$',
              '$1\\text{ molécule d’éthanol}$',
              '$6\\text{ molécules d’éthanol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le PPCM de 6 e⁻ (dichromate) et 4 e⁻ (éthanol) vaut 12 : il faut 2 Cr₂O₇²⁻ pour 3 CH₃CH₂OH.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Éthanol → Éthanal',
          stepTheme: 'Activité p. 4',
          stepTitle: 'Reconnaître l’oxydation ménagée en éthanal par MnO₄⁻',
          paragraphText:
            'Avec un défaut de MnO₄⁻ en milieu acide sulfurique (H₂SO₄), l’éthanol est oxydé en éthanal (CH₃CHO + 2 H⁺ + 2 e⁻).',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q5',
            type: 'mcq',
            prompt: 'Lors de l’oxydation de l’éthanol en éthanal par le permanganate de potassium en milieu acide sulfurique (Activité p. 4), quelle équation-bilan est correcte ?',
            options: [
              '$2\\,\\mathrm{MnO_4^-} + 5\\,\\mathrm{CH_3CH_2OH} + 6\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Mn^{2+}} + 5\\,\\mathrm{CH_3CHO} + 8\\,\\mathrm{H_2O}$',
              '$\\mathrm{MnO_4^-} + \\mathrm{CH_3CH_2OH} + 6\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Mn^{2+}} + \\mathrm{CH_3CHO} + \\mathrm{H_2O}$',
              '$\\mathrm{MnO_4^-} + \\mathrm{CH_3CH_2OH} \\longrightarrow \\mathrm{Mn^{2+}} + \\mathrm{CH_3CHO}$',
              '$2\\,\\mathrm{MnO_4^-} + 3\\,\\mathrm{CH_3CH_2OH} + 16\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Mn^{2+}} + 3\\,\\mathrm{CH_3CHO} + 11\\,\\mathrm{H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '2 × (MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O) + 5 × (CH₃CH₂OH → CH₃CHO + 2 H⁺ + 2 e⁻) donne 16 − 10 = 6 H⁺ à gauche et 8 H₂O à droite.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Milieu réactionnel',
          stepTheme: 'Choix des réactifs',
          stepTitle: 'Choisir l’acide adapté pour réaliser l’oxydation par MnO₄⁻',
          paragraphText:
            'Dans l’Activité p. 4, l’acidification se fait avec de l’acide sulfurique (non avec de la soude ni avec l’acide éthanoïque).',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q6',
            type: 'mcq',
            prompt: 'Parmi les mélanges proposés dans l’activité p. 4, lequel permet d’oxyder l’éthanol en éthanal par $\\mathrm{MnO_4^-}$ ?',
            options: [
              'Éthanol + permanganate de potassium + acide sulfurique',
              'Éthanol + soude + permanganate de potassium',
              'Éthanol + acide éthanoïque + soude',
              'Éthanol pur seul sans oxydant',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La réduction de MnO₄⁻ en Mn²⁺ nécessite un milieu acide fort apporté par l’acide sulfurique (H₂SO₄).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q1',
          type: 'mcq',
          prompt: 'Lors d’un alcootest positif, quelles espèces expliquent le passage de la coloration orange à la coloration verdâtre ?',
          options: [
            'Les ions dichromate $\\mathrm{Cr_2O_7^{2-}}$ (orange) sont réduits en ions chrome III $\\mathrm{Cr^{3+}}$ (verts)',
            'Les ions $\\mathrm{MnO_4^-}$ (violets) deviennent $\\mathrm{Mn^{2+}}$ (incolores)',
            'L’éthanol vert devient acide éthanoïque orange',
            'Les ions $\\mathrm{Fe^{2+}}$ verts deviennent $\\mathrm{Fe^{3+}}$ orange',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Cr₂O₇²⁻ (orange) disparaît au profit des ions Cr³⁺ (verts) formés par réduction.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q2',
          type: 'mcq',
          prompt: 'Quelle est la demi-équation électronique exacte du couple $\\mathrm{Cr_2O_7^{2-}/Cr^{3+}}$ en milieu acide ?',
          options: [
            '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$',
            '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow Cr^{3+} + 7\\,H_2O}$',
            '$\\mathrm{Cr_2O_7^{2-} + 7\\,H^+ + 3\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$',
            '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 12\\,e^- \\longrightarrow 2\\,Cr^{3+} + 7\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Conservation du chrome : 2 Cr³⁺. Charges à gauche : −2 + 14 − 6 = +6 ; à droite : 2×(+3) = +6.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q3',
          type: 'mcq',
          prompt: 'Quelle est la demi-équation électronique de l’oxydation de l’éthanol en acide éthanoïque (Ex 2 p. 6) ?',
          options: [
            '$\\mathrm{CH_3CH_2OH + H_2O \\longrightarrow CH_3COOH + 4\\,H^+ + 4\\,e^-}$',
            '$\\mathrm{CH_3CH_2OH \\longrightarrow CH_3COOH + 2\\,H^+ + 2\\,e^-}$',
            '$\\mathrm{CH_3CH_2OH + 2\\,H_2O \\longrightarrow CH_3COOH + 6\\,H^+ + 6\\,e^-}$',
            '$\\mathrm{CH_3COOH + 4\\,H^+ + 4\\,e^- \\longrightarrow CH_3CH_2OH + H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Conservation de O : +1 H₂O à gauche (2 O de chaque côté). H : 6 + 2 = 8 à gauche = 4 + 4 H⁺ à droite ; charge = 0 des deux côtés avec 4 e⁻.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q4',
          type: 'mcq',
          prompt: 'Combien de molécules d’éthanol réagissent avec $2\\text{ ions }\\mathrm{Cr_2O_7^{2-}}$ selon l’équation-bilan de l’alcootest ?',
          options: [
            '$3\\text{ molécules d’éthanol}$ ($2\\,\\mathrm{Cr_2O_7^{2-}} + 16\\,\\mathrm{H^+} + 3\\,\\mathrm{CH_3CH_2OH}$)',
            '$2\\text{ molécules d’éthanol}$',
            '$1\\text{ molécule d’éthanol}$',
            '$6\\text{ molécules d’éthanol}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le PPCM de 6 e⁻ (dichromate) et 4 e⁻ (éthanol) vaut 12 : il faut 2 Cr₂O₇²⁻ pour 3 CH₃CH₂OH.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q5',
          type: 'mcq',
          prompt: 'Lors de l’oxydation de l’éthanol en éthanal par le permanganate de potassium en milieu acide sulfurique (Activité p. 4), quelle équation-bilan est correcte ?',
          options: [
            '$2\\,\\mathrm{MnO_4^-} + 5\\,\\mathrm{CH_3CH_2OH} + 6\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Mn^{2+}} + 5\\,\\mathrm{CH_3CHO} + 8\\,\\mathrm{H_2O}$',
            '$\\mathrm{MnO_4^-} + \\mathrm{CH_3CH_2OH} + 6\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Mn^{2+}} + \\mathrm{CH_3CHO} + \\mathrm{H_2O}$',
            '$\\mathrm{MnO_4^-} + \\mathrm{CH_3CH_2OH} \\longrightarrow \\mathrm{Mn^{2+}} + \\mathrm{CH_3CHO}$',
            '$2\\,\\mathrm{MnO_4^-} + 3\\,\\mathrm{CH_3CH_2OH} + 16\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Mn^{2+}} + 3\\,\\mathrm{CH_3CHO} + 11\\,\\mathrm{H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '2 × (MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O) + 5 × (CH₃CH₂OH → CH₃CHO + 2 H⁺ + 2 e⁻) donne 16 − 10 = 6 H⁺ à gauche et 8 H₂O à droite.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p02_q6',
          type: 'mcq',
          prompt: 'Parmi les mélanges proposés dans l’activité p. 4, lequel permet d’oxyder l’éthanol en éthanal par $\\mathrm{MnO_4^-}$ ?',
          options: [
            'Éthanol + permanganate de potassium + acide sulfurique',
            'Éthanol + soude + permanganate de potassium',
            'Éthanol + acide éthanoïque + soude',
            'Éthanol pur seul sans oxydant',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La réduction de MnO₄⁻ en Mn²⁺ nécessite un milieu acide fort apporté par l’acide sulfurique (H₂SO₄).',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Équilibrer une demi-équation en milieu acide (I₂/HIO₃, etc.)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l08_couples_redox_dosage_p03',
      order: 3,
      title: 'Équilibrer toute demi-équation en milieu acide',
      summary:
        'Appliquer la méthode rigoureuse en 4 étapes (élément principal, O avec H₂O, H avec H⁺, charges avec e⁻) à des couples complexes comme HIO₃/I₂ et Cl₂/Cl⁻.',
      conceptExplanation:
        "En solution aqueuse acide, on équilibre systématiquement une demi-équation $\\text{Ox}/\\text{Red}$ en **4 étapes dans l’ordre** :\n\n1. **Élément principal** (autre que H et O) : ex. $2\\,\\mathrm{HIO_3}$ pour $\\mathrm{I_2}$, ou $2\\,\\mathrm{Cl^-}$ pour $\\mathrm{Cl_2}$.\n2. **Élément oxygène ($\\mathrm{O}$)** : compléter le côté déficitaire avec des molécules d’eau $\\mathrm{H_2O}$.\n3. **Élément hydrogène ($\\mathrm{H}$)** : compléter avec des ions $\\mathrm{H^+}$.\n4. **Charge électrique globale** : ajouter des électrons $e^-$ du côté le plus positif (toujours du côté de l’oxydant).\n\n- **Application corrigée (Exercice 1 p. 6)** : oxydation du diiode $\\mathrm{I_2}$ en acide iodique $\\mathrm{HIO_3}$ par le dichlore $\\mathrm{Cl_2}$ (réduit en $\\mathrm{Cl^-}$) :\n  - Oxydation de $\\mathrm{I_2}$ : $\\mathrm{I_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,H^+ + 10\\,e^-}$\n  - Réduction de $\\mathrm{Cl_2}$ : $\\mathrm{Cl_2 + 2\\,e^- \\longrightarrow 2\\,Cl^-}$ (multipliée par $5$)\n  - Équation-bilan : $\\mathrm{I_2 + 5\\,Cl_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,Cl^- + 10\\,H^+}$",
      keyRule:
        'Ordre obligatoire pour équilibrer en milieu acide : (1) atome principal, (2) oxygène par H₂O, (3) hydrogène par H⁺, (4) charges par e⁻ (côté oxydant).',
      formulas: [
        {
          name: 'Oxydation du diiode en acide iodique',
          formula: '\\mathrm{I_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,H^+ + 10\\,e^-}',
          note: '2 I, 6 O, 12 H (= 2 + 10) et charge totale nulle des deux côtés',
        },
      ],
      workedExample: {
        title: 'Équilibrer l’oxydation de I₂ en HIO₃ par Cl₂ (Exercice 1 p. 6 rectifié)',
        statement:
          'Écris la demi-équation du couple $\\mathrm{HIO_3/I_2}$, celle de $\\mathrm{Cl_2/Cl^-}$, puis l’équation-bilan de l’oxydation du diiode par un excès d’eau de chlore.',
        methodSteps: [
          '1) Élément I : I₂ à gauche ⇒ 2 HIO₃ à droite.',
          '2) Oxygène (6 à droite) : +6 H₂O à gauche. Hydrogène (12 à gauche, 2 dans 2 HIO₃) : +10 H⁺ à droite. Charges (0 à gauche, +10 à droite) : +10 e⁻ à droite.',
          '3) Réduction du dichlore : Cl₂ + 2 e⁻ → 2 Cl⁻ (à multiplier par 5 pour obtenir 10 e⁻).',
          '4) Addition : I₂ + 5 Cl₂ + 6 H₂O → 2 HIO₃ + 10 Cl⁻ + 10 H⁺.',
        ],
        conclusion:
          'Le bilan vérifie 2 I, 10 Cl, 6 O, 12 H et charge 0 de chaque côté.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Ordre des étapes',
          stepTheme: 'Méthode générale',
          stepTitle: 'Respecter l’ordre d’équilibrage en milieu acide',
          paragraphText:
            'Si l’on équilibre les électrons avant O et H, la demi-équation sera fausse : il faut toujours conserver d’abord O avec H₂O, puis H avec H⁺, et terminer par e⁻.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q1',
            type: 'mcq',
            prompt: 'Quel ordre doit-on suivre pour équilibrer une demi-équation électronique en milieu acide ?',
            options: [
              'Atome principal → $\\mathrm{O}$ avec $\\mathrm{H_2O}$ → $\\mathrm{H}$ avec $\\mathrm{H^+}$ → charges avec $e^-$',
              'Charges avec $e^-$ → $\\mathrm{H}$ avec $\\mathrm{H^+}$ → $\\mathrm{O}$ avec $\\mathrm{H_2O}$',
              '$\\mathrm{H}$ avec $\\mathrm{H_2}$ → $\\mathrm{O}$ avec $\\mathrm{O_2}$ → charges avec $\\mathrm{H^+}$',
              'Équilibrer directement avec $\\mathrm{HO^-}$ en milieu acide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On assure d’abord la conservation des éléments (principal, O par H₂O, H par H⁺), puis on égalise la charge électrique avec les électrons e⁻.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'I₂ → HIO₃',
          stepTheme: 'Exercice 1 p. 6',
          stepTitle: 'Équilibrer la demi-équation du couple HIO₃ / I₂',
          paragraphText:
            'I₂ contient 2 atomes d’iode, donnant 2 molécules HIO₃ qui apportent 6 O et 2 H.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q2',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique équilibrée de l’oxydation du diiode $\\mathrm{I_2}$ en acide iodique $\\mathrm{HIO_3}$ ?',
            options: [
              '$\\mathrm{I_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,H^+ + 10\\,e^-}$',
              '$\\mathrm{I_2 + 3\\,H_2O \\longrightarrow HIO_3 + 5\\,H^+ + 5\\,e^-}$',
              '$\\mathrm{I_2^- + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,H^+ + 10\\,e^-}$',
              '$\\mathrm{I_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 12\\,H^+ + 10\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '2 HIO₃ contient déjà 2 atomes H ! Il n’en reste que 12 − 2 = 10 à compenser par 10 H⁺ et 10 e⁻.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Cl₂ / Cl⁻',
          stepTheme: 'Exercice 1 p. 6',
          stepTitle: 'Écrire la réduction du dichlore Cl₂ en Cl⁻',
          paragraphText:
            'Chaque molécule Cl₂ (2 atomes de chlore) capte 2 électrons pour donner deux ions chlorure Cl⁻.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q3',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique de réduction du dichlore $\\mathrm{Cl_2}$ en ions chlorure $\\mathrm{Cl^-}$ ?',
            options: [
              '$\\mathrm{Cl_2 + 2\\,e^- \\longrightarrow 2\\,Cl^-}$',
              '$\\mathrm{Cl_2 + 2\\,e^- \\longrightarrow 2\\,Cl_2}$',
              '$\\mathrm{Cl_2 \\longrightarrow 2\\,Cl^- + 2\\,e^-}$',
              '$\\mathrm{2\\,Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le dichlore Cl₂ est réduit en ions chlorure Cl⁻ : Cl₂ + 2 e⁻ → 2 Cl⁻ (charge −2 de part et d’autre).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Bilan I₂ + Cl₂',
          stepTheme: 'Exercice 1 p. 6',
          stepTitle: 'Équilibrer l’équation-bilan entre I₂ et Cl₂',
          paragraphText:
            'Pour échanger 10 électrons, il faut multiplier la demi-équation du dichlore par 5.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de l’oxydation de $\\mathrm{I_2}$ en $\\mathrm{HIO_3}$ par le dichlore $\\mathrm{Cl_2}$ en solution aqueuse ?',
            options: [
              '$\\mathrm{I_2 + 5\\,Cl_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,Cl^- + 10\\,H^+}$',
              '$\\mathrm{I_2 + Cl_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 2\\,Cl^- + 10\\,H^+}$',
              '$\\mathrm{Cl_2 + 2\\,I^- \\longrightarrow 2\\,Cl^- + I_2}$',
              '$\\mathrm{I_2 + 5\\,Cl_2 + 3\\,H_2O \\longrightarrow 2\\,HIO_3 + 5\\,Cl^- + 5\\,H^+}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '(I₂ + 6 H₂O → 2 HIO₃ + 10 H⁺ + 10 e⁻) + 5×(Cl₂ + 2 e⁻ → 2 Cl⁻) donne I₂ + 5 Cl₂ + 6 H₂O → 2 HIO₃ + 10 Cl⁻ + 10 H⁺.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Tétrathionate',
          stepTheme: 'Activité p. 3',
          stepTitle: 'Équilibrer S₄O₆²⁻ / S₂O₃²⁻',
          paragraphText:
            'Deux ions thiosulfate S₂O₃²⁻ (charge totale −4) s’oxydent en un ion tétrathionate S₄O₆²⁻ (charge −2) en libérant 2 électrons.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q5',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique du couple $\\mathrm{S_4O_6^{2-}/S_2O_3^{2-}}$ ?',
            options: [
              '$2\\,\\mathrm{S_2O_3^{2-} \\longrightarrow S_4O_6^{2-} + 2\\,e^-}$ (ou en sens inverse)',
              '$\\mathrm{S_2O_3^{2-} \\longrightarrow S_4O_6^{2-} + e^-}$',
              '$2\\,\\mathrm{S_2O_3^{2-} + 2\\,e^- \\longrightarrow S_4O_6^{2-}}$',
              '$2\\,\\mathrm{S_2O_3^{2-} + 4\\,H^+ \\longrightarrow S_4O_6^{2-} + 2\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '4 S et 6 O sont déjà conservés avec 2 S₂O₃²⁻ → S₄O₆²⁻ ; il suffit d’ajouter 2 e⁻ à droite pour avoir −4 des deux côtés.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Erreur d’indice',
          stepTheme: 'Vérification globale',
          stepTitle: 'Contrôler atomes et charges après équilibrage',
          paragraphText:
            'Toute demi-équation juste doit avoir exactement la même somme de charges électriques et le même nombre de chaque élément à gauche et à droite.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q6',
            type: 'mcq',
            prompt: 'Laquelle de ces demi-équations est fausse car non équilibrée en atomes ou en charges ?',
            options: [
              '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow Cr^{3+} + 7\\,H_2O}$',
              '$\\mathrm{MnO_4^- + 8\\,H^+ + 5\\,e^- \\longrightarrow Mn^{2+} + 4\\,H_2O}$',
              '$\\mathrm{I_2 + 2\\,e^- \\longrightarrow 2\\,I^-}$',
              '$\\mathrm{Fe^{2+} \\longrightarrow Fe^{3+} + e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans la première, il y a 2 Cr à gauche et un seul Cr³⁺ à droite (et la charge vaut +6 à gauche contre +3 à droite) : il faut 2 Cr³⁺.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q1',
          type: 'mcq',
          prompt: 'Quel ordre doit-on suivre pour équilibrer une demi-équation électronique en milieu acide ?',
          options: [
            'Atome principal → $\\mathrm{O}$ avec $\\mathrm{H_2O}$ → $\\mathrm{H}$ avec $\\mathrm{H^+}$ → charges avec $e^-$',
            'Charges avec $e^-$ → $\\mathrm{H}$ avec $\\mathrm{H^+}$ → $\\mathrm{O}$ avec $\\mathrm{H_2O}$',
            '$\\mathrm{H}$ avec $\\mathrm{H_2}$ → $\\mathrm{O}$ avec $\\mathrm{O_2}$ → charges avec $\\mathrm{H^+}$',
            'Équilibrer directement avec $\\mathrm{HO^-}$ en milieu acide',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On assure d’abord la conservation des éléments (principal, O par H₂O, H par H⁺), puis on égalise la charge électrique avec les électrons e⁻.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q2',
          type: 'mcq',
          prompt: 'Quelle est la demi-équation électronique équilibrée de l’oxydation du diiode $\\mathrm{I_2}$ en acide iodique $\\mathrm{HIO_3}$ ?',
          options: [
            '$\\mathrm{I_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,H^+ + 10\\,e^-}$',
            '$\\mathrm{I_2 + 3\\,H_2O \\longrightarrow HIO_3 + 5\\,H^+ + 5\\,e^-}$',
            '$\\mathrm{I_2^- + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,H^+ + 10\\,e^-}$',
            '$\\mathrm{I_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 12\\,H^+ + 10\\,e^-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '2 HIO₃ contient déjà 2 atomes H ! Il n’en reste que 12 − 2 = 10 à compenser par 10 H⁺ et 10 e⁻.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q3',
          type: 'mcq',
          prompt: 'Quelle est la demi-équation électronique de réduction du dichlore $\\mathrm{Cl_2}$ en ions chlorure $\\mathrm{Cl^-}$ ?',
          options: [
            '$\\mathrm{Cl_2 + 2\\,e^- \\longrightarrow 2\\,Cl^-}$',
            '$\\mathrm{Cl_2 + 2\\,e^- \\longrightarrow 2\\,Cl_2}$',
            '$\\mathrm{Cl_2 \\longrightarrow 2\\,Cl^- + 2\\,e^-}$',
            '$\\mathrm{2\\,Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le dichlore Cl₂ est réduit en ions chlorure Cl⁻ : Cl₂ + 2 e⁻ → 2 Cl⁻ (charge −2 de part et d’autre).',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q4',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de l’oxydation de $\\mathrm{I_2}$ en $\\mathrm{HIO_3}$ par le dichlore $\\mathrm{Cl_2}$ en solution aqueuse ?',
          options: [
            '$\\mathrm{I_2 + 5\\,Cl_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 10\\,Cl^- + 10\\,H^+}$',
            '$\\mathrm{I_2 + Cl_2 + 6\\,H_2O \\longrightarrow 2\\,HIO_3 + 2\\,Cl^- + 10\\,H^+}$',
            '$\\mathrm{Cl_2 + 2\\,I^- \\longrightarrow 2\\,Cl^- + I_2}$',
            '$\\mathrm{I_2 + 5\\,Cl_2 + 3\\,H_2O \\longrightarrow 2\\,HIO_3 + 5\\,Cl^- + 5\\,H^+}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '(I₂ + 6 H₂O → 2 HIO₃ + 10 H⁺ + 10 e⁻) + 5×(Cl₂ + 2 e⁻ → 2 Cl⁻) donne I₂ + 5 Cl₂ + 6 H₂O → 2 HIO₃ + 10 Cl⁻ + 10 H⁺.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q5',
          type: 'mcq',
          prompt: 'Quelle est la demi-équation électronique du couple $\\mathrm{S_4O_6^{2-}/S_2O_3^{2-}}$ ?',
          options: [
            '$2\\,\\mathrm{S_2O_3^{2-} \\longrightarrow S_4O_6^{2-} + 2\\,e^-}$ (ou en sens inverse)',
            '$\\mathrm{S_2O_3^{2-} \\longrightarrow S_4O_6^{2-} + e^-}$',
            '$2\\,\\mathrm{S_2O_3^{2-} + 2\\,e^- \\longrightarrow S_4O_6^{2-}}$',
            '$2\\,\\mathrm{S_2O_3^{2-} + 4\\,H^+ \\longrightarrow S_4O_6^{2-} + 2\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '4 S et 6 O sont déjà conservés avec 2 S₂O₃²⁻ → S₄O₆²⁻ ; il suffit d’ajouter 2 e⁻ à droite pour avoir −4 des deux côtés.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p03_q6',
          type: 'mcq',
          prompt: 'Laquelle de ces demi-équations est fausse car non équilibrée en atomes ou en charges ?',
          options: [
            '$\\mathrm{Cr_2O_7^{2-} + 14\\,H^+ + 6\\,e^- \\longrightarrow Cr^{3+} + 7\\,H_2O}$',
            '$\\mathrm{MnO_4^- + 8\\,H^+ + 5\\,e^- \\longrightarrow Mn^{2+} + 4\\,H_2O}$',
            '$\\mathrm{I_2 + 2\\,e^- \\longrightarrow 2\\,I^-}$',
            '$\\mathrm{Fe^{2+} \\longrightarrow Fe^{3+} + e^-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans la première, il y a 2 Cr à gauche et un seul Cr³⁺ à droite (et la charge vaut +6 à gauche contre +3 à droite) : il faut 2 Cr³⁺.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Prévision des réactions et calculs en solution (Ex 3 et Ex 4)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l08_couples_redox_dosage_p04',
      order: 4,
      title: 'Prévision des réactions (règle du γ) et calculs de concentrations',
      summary:
        'Utiliser les potentiels normaux E° pour prévoir une réaction totale (E₁° − E₂° ≥ 0,3 V) et déterminer concentrations ou masse consommée après réaction.',
      conceptExplanation:
        "À partir des **potentiels normaux** $E_1^0$ et $E_2^0$ de deux couples $\\text{Ox}_1/\\text{Red}_1$ et $\\text{Ox}_2/\\text{Red}_2$ (p. 3) :\n\n- Si $E_1^0 > E_2^0$, alors l’oxydant $\\text{Ox}_1$ **oxyde spontanément** le réducteur $\\text{Red}_2$ selon la **règle du gamma** ($\\gamma$) :\n  $$\\text{Ox}_1 + \\text{Red}_2 \\longrightarrow \\text{Red}_1 + \\text{Ox}_2$$\n- La réaction peut être considérée comme **totale** dès que :\n  $$E_1^0 - E_2^0 \\ge 0{,}3\\text{ V}$$\n\n**Applications quantitatives (Ex 3 et Ex 4 p. 6–8) :**\n- **Réaction totale entre $\\mathrm{Fe^{3+}}$ ($+0{,}77\\text{ V}$) et $\\mathrm{Fe}$ ($-0{,}44\\text{ V}$)** : $2\\,\\mathrm{Fe^{3+} + Fe \\longrightarrow 3\\,Fe^{2+}}$.\n- Attention lors d’un mélange de deux solutions (Ex 3 p. 6–7) : la concentration finale doit toujours être divisée par le **volume total** $V_{\\text{total}} = V_1 + V_2$, après avoir repéré le réactif limitant.\n- Attention dans Ex 4 p. 7–8 : si $[\\mathrm{Fe^{3+}}] = 0{,}5\\text{ mol/L}$ dans $V = 0{,}1\\text{ L}$, alors $n(\\mathrm{Fe^{3+}}) = 0{,}5 \\times 0{,}1 = 0{,}05\\text{ mol}$ (et non $0{,}5\\text{ mol}$ !), ce qui consomme $n(\\mathrm{Fe}) = 0{,}025\\text{ mol}$, soit $\\Delta m(\\mathrm{Fe}) = 0{,}025 \\times 56 = 1{,}4\\text{ g}$.",
      keyRule:
        'Si E₁° > E₂°, Ox₁ oxyde Red₂ (totale si E₁° − E₂° ≥ 0,3 V). Pour les concentrations finales après réaction, identifier le réactif limitant puis diviser la quantité de matière formée par le volume total V₁ + V₂.',
      formulas: [
        {
          name: 'Critère de réaction totale',
          formula: 'E_1^0 > E_2^0 \\implies \\text{Ox}_1 + \\text{Red}_2 \\to \\text{Red}_1 + \\text{Ox}_2 \\quad (\\text{totale si } E_1^0 - E_2^0 \\ge 0{,}3\\text{ V})',
          note: 'Règle du gamma sur l’axe vertical des potentiels standards',
        },
      ],
      workedExample: {
        title: 'Réaction de Fe₂(SO₄)₃ avec le fer en excès (Exercice 4 p. 7–8 rectifié)',
        statement:
          'On dissout $10\\text{ g}$ de sulfate de fer III $\\mathrm{Fe_2(SO_4)_3}$ ($M = 400\\text{ g/mol}$) dans $V = 100\\text{ mL}$ d’eau, puis on ajoute de la limaille de fer en excès ($E^0(\\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77\\text{ V}$, $E^0(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\text{ V}$, $M(\\mathrm{Fe}) = 56\\text{ g/mol}$). Calcule $[\\mathrm{Fe^{3+}}]$ initial, la masse de fer dissoute $\\Delta m$ et $[\\mathrm{Fe^{2+}}]$ final.',
        methodSteps: [
          '1) Dissolution : Fe₂(SO₄)₃ → 2 Fe³⁺ + 3 SO₄²⁻. n_A = 10 / 400 = 0,025 mol ⇒ n(Fe³⁺) = 2 × 0,025 = 0,050 mol dans 0,1 L, donc [Fe³⁺] = 0,5 mol/L et [SO₄²⁻] = 0,75 mol/L.',
          '2) Prévision : 0,77 > −0,44 (écart 1,21 V ≥ 0,3 V) ⇒ Fe³⁺ oxyde totalement Fe : 2 Fe³⁺ + Fe → 3 Fe²⁺.',
          '3) Variation de masse du fer : n(Fe consommé) = n(Fe³⁺)/2 = 0,050/2 = 0,025 mol ⇒ Δm(Fe) = 0,025 × 56 = 1,4 g.',
          '4) Concentration finale en Fe²⁺ : n(Fe²⁺) = (3/2) n(Fe³⁺) = 0,075 mol dans 0,1 L ⇒ [Fe²⁺] = 0,75 mol/L.',
        ],
        conclusion:
          'On trouve [Fe³⁺]₀ = 0,5 mol/L, Δm(Fe) = 1,4 g (attention à bien multiplier [Fe³⁺] par V = 0,1 L !) et [Fe²⁺] = 0,75 mol/L.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Seuil 0,3 V',
          stepTheme: 'Prévision redox',
          stepTitle: 'Savoir quand une réaction redox est considérée comme totale',
          paragraphText:
            'Entre deux couples Ox₁/Red₁ et Ox₂/Red₂ (E₁° > E₂°), la réaction de Ox₁ sur Red₂ est totale dès que l’écart E₁° − E₂° vaut au moins 0,3 V.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q1',
            type: 'mcq',
            prompt: 'À quelle condition la réaction spontanée entre deux couples $\\text{Ox}_1/\\text{Red}_1$ et $\\text{Ox}_2/\\text{Red}_2$ ($E_1^0 > E_2^0$) peut-elle être considérée comme totale ?',
            options: [
              '$E_1^0 - E_2^0 \\ge 0{,}3\\text{ V}$',
              '$E_1^0 - E_2^0 < 0{,}1\\text{ V}$',
              '$E_1^0 + E_2^0 = 0\\text{ V}$',
              '$E_1^0 = E_2^0$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La règle du cours indique que Ox₁ oxyde Red₂ dès que E₁° > E₂°, et que la transformation est pratiquement totale lorsque E₁° − E₂° ≥ 0,3 V.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'I₂ / S₂O₃²⁻',
          stepTheme: 'Activité p. 3',
          stepTitle: 'Prévoir la réaction entre I₂/I⁻ et S₄O₆²⁻/S₂O₃²⁻',
          paragraphText:
            'Avec E°(I₂/I⁻) = 0,54 V et E°(S₄O₆²⁻/S₂O₃²⁻) = 0,08 V, l’écart est de 0,46 V ≥ 0,3 V : le diiode I₂ oxyde totalement S₂O₃²⁻.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q2',
            type: 'mcq',
            prompt: 'On mélange les couples $\\mathrm{I_2/I^-}$ ($0{,}54\\text{ V}$) et $\\mathrm{S_4O_6^{2-}/S_2O_3^{2-}}$ ($0{,}08\\text{ V}$). Quelle réaction totale a lieu (Activité p. 3) ?',
            options: [
              '$\\mathrm{I_2 + 2\\,S_2O_3^{2-} \\longrightarrow 2\\,I^- + S_4O_6^{2-}}$',
              '$\\mathrm{S_4O_6^{2-} + 2\\,I^- \\longrightarrow I_2 + 2\\,S_2O_3^{2-}}$',
              '$\\mathrm{I_2 + S_4O_6^{2-} \\longrightarrow 2\\,I^- + 2\\,S_2O_3^{2-}}$',
              'Aucune réaction n’est possible',
            ],
            correctAnswerIndex: 0,
            explanation:
              'I₂ (couple à potentiel plus élevé : 0,54 V) est l’oxydant le plus fort et S₂O₃²⁻ (0,08 V) est le réducteur le plus fort : I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Mélange Cr₂O₇²⁻ + I⁻',
          stepTheme: 'Exercice 3 p. 6–7',
          stepTitle: 'Calculer [I₂] et [Cr³⁺] après mélange (V₁ + V₂)',
          paragraphText:
            '10 mL de K₂Cr₂O₇ à 10⁻² mol/L (10⁻⁴ mol) sont ajoutés à 20 mL de KI à 0,1 mol/L (2·10⁻³ mol). Cr₂O₇²⁻ est limitant et le volume total vaut 30 mL.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q3',
            type: 'mcq',
            prompt: 'Dans l’exercice 3 ($10\\text{ mL}$ de $\\mathrm{Cr_2O_7^{2-}}$ à $10^{-2}\\text{ mol/L}$ + $20\\text{ mL}$ de $\\mathrm{I^-}$ à $0{,}1\\text{ mol/L}$, $\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\to 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$), quelles sont les concentrations finales $[\\mathrm{I_2}]$ et $[\\mathrm{Cr^{3+}}]$ ?',
            options: [
              '$[\\mathrm{I_2}] = 0{,}01\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 6{,}67 \\times 10^{-3}\\text{ mol/L}$',
              '$[\\mathrm{I_2}] = 0{,}03\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 0{,}02\\text{ mol/L}$',
              '$[\\mathrm{I_2}] = 0{,}01\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 0{,}01\\text{ mol/L}$',
              '$[\\mathrm{I_2}] = 3{,}33 \\times 10^{-3}\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 6{,}67 \\times 10^{-3}\\text{ mol/L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Cr₂O₇²⁻ est limitant (10⁻⁴ mol < 2·10⁻³/6). Ainsi n(I₂) = 3·10⁻⁴ mol dans 0,030 L ⇒ [I₂] = 0,01 mol/L, et n(Cr³⁺) = 2·10⁻⁴ mol ⇒ [Cr³⁺] = 6,67·10⁻³ mol/L.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Dissolution Fe₂(SO₄)₃',
          stepTheme: 'Exercice 4 Q1 p. 7',
          stepTitle: 'Calculer [Fe³⁺] et [SO₄²⁻] après dissolution',
          paragraphText:
            'Chaque mole de Fe₂(SO₄)₃ libère 2 moles de Fe³⁺ et 3 moles de SO₄²⁻ en solution aqueuse.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q4',
            type: 'mcq',
            prompt: 'On dissout $10\\text{ g}$ de $\\mathrm{Fe_2(SO_4)_3}$ ($M = 400\\text{ g/mol}$) dans $100\\text{ mL}$ d’eau (Ex 4 p. 7). Que valent $[\\mathrm{Fe^{3+}}]$ et $[\\mathrm{SO_4^{2-}}]$ ?',
            options: [
              '$[\\mathrm{Fe^{3+}}] = 0{,}50\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 0{,}75\\text{ mol/L}$',
              '$[\\mathrm{Fe^{3+}}] = 0{,}25\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 0{,}50\\text{ mol/L}$',
              '$[\\mathrm{Fe^{3+}}] = 0{,}75\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 0{,}50\\text{ mol/L}$',
              '$[\\mathrm{Fe^{3+}}] = 1{,}00\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 1{,}50\\text{ mol/L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n_A = 10 / 400 = 0,025 mol dans 0,1 L ⇒ C_A = 0,25 mol/L. Donc [Fe³⁺] = 2 C_A = 0,50 mol/L et [SO₄²⁻] = 3 C_A = 0,75 mol/L.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Masse de fer',
          stepTheme: 'Exercice 4 Q3–4 p. 7–8',
          stepTitle: 'Calculer la masse de fer consommée et [Fe²⁺] final',
          paragraphText:
            'Selon 2 Fe³⁺ + Fe → 3 Fe²⁺, 0,050 mol d’ions Fe³⁺ (dans 100 mL) consomment 0,025 mol de fer solide (soit 1,4 g) et produisent 0,075 mol de Fe²⁺.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q5',
            type: 'mcq',
            prompt: 'Lorsqu’on ajoute du fer en excès dans les $100\\text{ mL}$ de solution à $[\\mathrm{Fe^{3+}}] = 0{,}50\\text{ mol/L}$ ($2\\,\\mathrm{Fe^{3+}} + \\mathrm{Fe} \\to 3\\,\\mathrm{Fe^{2+}}$, $M(\\mathrm{Fe}) = 56\\text{ g/mol}$), quelle masse de fer disparaît et que vaut $[\\mathrm{Fe^{2+}}]$ ?',
            options: [
              '$\\Delta m(\\mathrm{Fe}) = 1{,}4\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}75\\text{ mol/L}$',
              '$\\Delta m(\\mathrm{Fe}) = 14\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}75\\text{ mol/L}$',
              '$\\Delta m(\\mathrm{Fe}) = 2{,}8\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}50\\text{ mol/L}$',
              '$\\Delta m(\\mathrm{Fe}) = 1{,}4\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}25\\text{ mol/L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(Fe³⁺) = 0,50 × 0,100 = 0,050 mol ; n(Fe consommé) = 0,050/2 = 0,025 mol ⇒ Δm = 0,025 × 56 = 1,4 g. Et [Fe²⁺] = (3/2)[Fe³⁺] = 0,75 mol/L.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'Concentration vs n',
          stepTitle: 'Ne jamais confondre concentration C et quantité de matière n',
          paragraphText:
            'Dans une formule de masse m = n·M, il faut obligatoirement utiliser n = C·V (en moles) et non la concentration C (en mol/L).',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q6',
            type: 'mcq',
            prompt: 'Quelle relation relie correctement la masse $m$ d’un métal réagissant à la concentration molaire $C$ d’une solution de volume $V$ (si $n_{\\text{métal}} = \\frac{1}{2}n_{\\text{ion}}$) ?',
            options: [
              '$m = \\frac{1}{2}\\,C \\cdot V \\cdot M$',
              '$m = \\frac{1}{2}\\,C \\cdot M$ (indépendamment de $V$)',
              '$m = \\frac{C}{2\\,V \\cdot M}$',
              '$m = 2\\,\\frac{C \\cdot M}{V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La quantité de matière d’ions vaut n_ion = C·V (avec V en litres), donc m = (1/2) C·V·M.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q1',
          type: 'mcq',
          prompt: 'À quelle condition la réaction spontanée entre deux couples $\\text{Ox}_1/\\text{Red}_1$ et $\\text{Ox}_2/\\text{Red}_2$ ($E_1^0 > E_2^0$) peut-elle être considérée comme totale ?',
          options: [
            '$E_1^0 - E_2^0 \\ge 0{,}3\\text{ V}$',
            '$E_1^0 - E_2^0 < 0{,}1\\text{ V}$',
            '$E_1^0 + E_2^0 = 0\\text{ V}$',
            '$E_1^0 = E_2^0$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La règle du cours indique que Ox₁ oxyde Red₂ dès que E₁° > E₂°, et que la transformation est pratiquement totale lorsque E₁° − E₂° ≥ 0,3 V.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q2',
          type: 'mcq',
          prompt: 'On mélange les couples $\\mathrm{I_2/I^-}$ ($0{,}54\\text{ V}$) et $\\mathrm{S_4O_6^{2-}/S_2O_3^{2-}}$ ($0{,}08\\text{ V}$). Quelle réaction totale a lieu (Activité p. 3) ?',
          options: [
            '$\\mathrm{I_2 + 2\\,S_2O_3^{2-} \\longrightarrow 2\\,I^- + S_4O_6^{2-}}$',
            '$\\mathrm{S_4O_6^{2-} + 2\\,I^- \\longrightarrow I_2 + 2\\,S_2O_3^{2-}}$',
            '$\\mathrm{I_2 + S_4O_6^{2-} \\longrightarrow 2\\,I^- + 2\\,S_2O_3^{2-}}$',
            'Aucune réaction n’est possible',
          ],
          correctAnswerIndex: 0,
          explanation:
            'I₂ (couple à potentiel plus élevé : 0,54 V) est l’oxydant le plus fort et S₂O₃²⁻ (0,08 V) est le réducteur le plus fort : I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q3',
          type: 'mcq',
          prompt: 'Dans l’exercice 3 ($10\\text{ mL}$ de $\\mathrm{Cr_2O_7^{2-}}$ à $10^{-2}\\text{ mol/L}$ + $20\\text{ mL}$ de $\\mathrm{I^-}$ à $0{,}1\\text{ mol/L}$, $\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\to 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$), quelles sont les concentrations finales $[\\mathrm{I_2}]$ et $[\\mathrm{Cr^{3+}}]$ ?',
          options: [
            '$[\\mathrm{I_2}] = 0{,}01\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 6{,}67 \\times 10^{-3}\\text{ mol/L}$',
            '$[\\mathrm{I_2}] = 0{,}03\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 0{,}02\\text{ mol/L}$',
            '$[\\mathrm{I_2}] = 0{,}01\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 0{,}01\\text{ mol/L}$',
            '$[\\mathrm{I_2}] = 3{,}33 \\times 10^{-3}\\text{ mol/L}$ et $[\\mathrm{Cr^{3+}}] = 6{,}67 \\times 10^{-3}\\text{ mol/L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Cr₂O₇²⁻ est limitant (10⁻⁴ mol < 2·10⁻³/6). Ainsi n(I₂) = 3·10⁻⁴ mol dans 0,030 L ⇒ [I₂] = 0,01 mol/L, et n(Cr³⁺) = 2·10⁻⁴ mol ⇒ [Cr³⁺] = 6,67·10⁻³ mol/L.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q4',
          type: 'mcq',
          prompt: 'On dissout $10\\text{ g}$ de $\\mathrm{Fe_2(SO_4)_3}$ ($M = 400\\text{ g/mol}$) dans $100\\text{ mL}$ d’eau (Ex 4 p. 7). Que valent $[\\mathrm{Fe^{3+}}]$ et $[\\mathrm{SO_4^{2-}}]$ ?',
          options: [
            '$[\\mathrm{Fe^{3+}}] = 0{,}50\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 0{,}75\\text{ mol/L}$',
            '$[\\mathrm{Fe^{3+}}] = 0{,}25\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 0{,}50\\text{ mol/L}$',
            '$[\\mathrm{Fe^{3+}}] = 0{,}75\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 0{,}50\\text{ mol/L}$',
            '$[\\mathrm{Fe^{3+}}] = 1{,}00\\text{ mol/L}$ et $[\\mathrm{SO_4^{2-}}] = 1{,}50\\text{ mol/L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n_A = 10 / 400 = 0,025 mol dans 0,1 L ⇒ C_A = 0,25 mol/L. Donc [Fe³⁺] = 2 C_A = 0,50 mol/L et [SO₄²⁻] = 3 C_A = 0,75 mol/L.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q5',
          type: 'mcq',
          prompt: 'Lorsqu’on ajoute du fer en excès dans les $100\\text{ mL}$ de solution à $[\\mathrm{Fe^{3+}}] = 0{,}50\\text{ mol/L}$ ($2\\,\\mathrm{Fe^{3+}} + \\mathrm{Fe} \\to 3\\,\\mathrm{Fe^{2+}}$, $M(\\mathrm{Fe}) = 56\\text{ g/mol}$), quelle masse de fer disparaît et que vaut $[\\mathrm{Fe^{2+}}]$ ?',
          options: [
            '$\\Delta m(\\mathrm{Fe}) = 1{,}4\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}75\\text{ mol/L}$',
            '$\\Delta m(\\mathrm{Fe}) = 14\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}75\\text{ mol/L}$',
            '$\\Delta m(\\mathrm{Fe}) = 2{,}8\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}50\\text{ mol/L}$',
            '$\\Delta m(\\mathrm{Fe}) = 1{,}4\\text{ g}$ et $[\\mathrm{Fe^{2+}}] = 0{,}25\\text{ mol/L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n(Fe³⁺) = 0,50 × 0,100 = 0,050 mol ; n(Fe consommé) = 0,050/2 = 0,025 mol ⇒ Δm = 0,025 × 56 = 1,4 g. Et [Fe²⁺] = (3/2)[Fe³⁺] = 0,75 mol/L.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p04_q6',
          type: 'mcq',
          prompt: 'Quelle relation relie correctement la masse $m$ d’un métal réagissant à la concentration molaire $C$ d’une solution de volume $V$ (si $n_{\\text{métal}} = \\frac{1}{2}n_{\\text{ion}}$) ?',
          options: [
            '$m = \\frac{1}{2}\\,C \\cdot V \\cdot M$',
            '$m = \\frac{1}{2}\\,C \\cdot M$ (indépendamment de $V$)',
            '$m = \\frac{C}{2\\,V \\cdot M}$',
            '$m = 2\\,\\frac{C \\cdot M}{V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La quantité de matière d’ions vaut n_ion = C·V (avec V en litres), donc m = (1/2) C·V·M.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Principe, montage et équivalence d’un dosage colorimétrique
    // ========================================================================
    {
      id: 'premiere_c_chimie_l08_couples_redox_dosage_p05',
      order: 5,
      title: 'Principe, matériel et équivalence d’un dosage redox',
      summary:
        'Définir un titrage colorimétrique, citer les 3 qualités d’une réaction de dosage (totale, rapide, spécifique) et repérer l’équivalence dans le dosage Fe²⁺ / MnO₄⁻.',
      conceptExplanation:
        "**Doser** (ou titrer) une espèce chimique consiste à déterminer sa **concentration molaire** inconnue en solution (p. 3–4 et Documentation p. 8–9) :\n\n- **Conditions sur la réaction support du titrage** : elle doit impérativement être **totale**, **rapide** et **spécifique** (univoque) de l’espèce titrée.\n- **Protocole expérimental** :\n  1. Dans le **bécher** placé sur un agitateur magnétique : un volume connu $V_r$ de la **solution titrée** (concentration inconnue $C_r$, ex. ions $\\mathrm{Fe^{2+}}$).\n  2. Dans la **burette graduée** : la **solution titrante** (concentration connue $C_0$, ex. $\\mathrm{KMnO_4}$ acidifié).\n  3. Verser goutte à goutte la solution titrante jusqu’au changement de couleur marquant l’**équivalence** (pour $\\mathrm{MnO_4^-}$, apparition d’une **teinte violette persistante** à la goutte près, sans besoin d’indicateur externe).\n- **Définition de l’équivalence** : état où les réactifs titré et titrant ont été introduits exactement dans les **proportions stœchiométriques** de l’équation-bilan.",
      keyRule:
        'Une réaction de dosage doit être totale, rapide et spécifique. À l’équivalence, les réactifs sont mélangés dans les proportions stœchiométriques ; avec MnO₄⁻ dans la burette, l’équivalence est repérée par une teinte violette persistante.',
      formulas: [
        {
          name: 'Relation à l’équivalence pour Fe²⁺ titré par MnO₄⁻',
          formula: 'n(\\mathrm{Fe^{2+}}) = 5\\,n(\\mathrm{MnO_4^-}) \\iff C_r V_r = 5\\,C_0 V_{0,\\text{éq}} \\implies C_r = \\frac{5\\,C_0 V_{0,\\text{éq}}}{V_r}',
          note: 'Facteur 5 issu de l’équation : 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O',
        },
      ],
      workedExample: {
        title: 'Doser une solution de Fe²⁺ par KMnO₄ (Exercice 5 p. 8)',
        statement:
          'On prépare $100\\text{ mL}$ de solution de $\\mathrm{KMnO_4}$ ($M = 158\\text{ g/mol}$) en dissolvant $0{,}20\\text{ g}$ de solide. On dose ensuite $V_r = 12\\text{ mL}$ d’une solution de $\\mathrm{Fe^{2+}}$ : la teinte violette persiste pour $V_{\\text{éq}} = 16{,}5\\text{ mL}$ de $\\mathrm{KMnO_4}$ versé. Calcule $C_0$ puis $C(\\mathrm{Fe^{2+}})$.',
        methodSteps: [
          '1) Concentration titrante : C₀ = m / (M·V) = 0,20 / (158 × 0,100) ≈ 0,01266 mol/L (noté 0,0126 mol/L dans le cours).',
          '2) Relation à l’équivalence (5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O) : C_red·V_red = 5 C₀·V_éq.',
          '3) Application numérique : C_red = (5 × 0,0126 × 16,5) / 12 ≈ 0,087 mol/L.',
        ],
        conclusion:
          'La solution de permanganate vaut 0,0126 mol/L et la solution d’ions fer II a pour concentration 0,087 mol/L.',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Montage du dosage colorimétrique de Fe²⁺ par MnO₄⁻',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Montage de titrage redox : burette de permanganate de potassium et bécher d'ions Fe2+">
  <rect x="6" y="6" width="348" height="178" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="166" y="18" width="28" height="84" rx="2" fill="#F3E8FF" stroke="#7E22CE" stroke-width="1.6"/>
  <rect x="168" y="28" width="24" height="60" fill="#A855F7" fill-opacity="0.5"/>
  <path d="M177,102 L177,118 L183,118 L183,102" fill="#F3E8FF" stroke="#7E22CE" stroke-width="1.4"/>
  <line x1="164" y1="108" x2="196" y2="108" stroke="#334155" stroke-width="2.5"/>
  <text x="206" y="34" font-size="9.5" font-weight="700" fill="#6B21A8">Burette graduée</text>
  <text x="206" y="47" font-size="8.8" fill="#581C87">MnO₄⁻ acidifié</text>
  <text x="206" y="59" font-size="8.8" fill="#581C87">(C₀ connue, V₀éq lu)</text>
  <text x="206" y="111" font-size="8.8" font-weight="600" fill="#334155">Robinet</text>
  <circle cx="180" cy="124" r="2.5" fill="#9333EA"/>
  <path d="M138,124 L138,164 Q138,168 142,168 L218,168 Q222,168 222,164 L222,124" fill="#FFFFFF" stroke="#334155" stroke-width="1.8"/>
  <rect x="140" y="142" width="80" height="24" rx="2" fill="#DCFCE7"/>
  <text x="180" y="157" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Fe²⁺ (V connue, C ?)</text>
  <rect x="128" y="170" width="104" height="10" rx="3" fill="#CBD5E1" stroke="#475569"/>
  <text x="16" y="152" font-size="9" font-weight="700" fill="#334155">Bécher sur agitateur</text>
  <text x="16" y="164" font-size="8.5" fill="#475569">Équivalence : teinte</text>
  <text x="16" y="175" font-size="8.5" fill="#7E22CE" font-weight="700">violette persistante</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Qualités du titrage',
          stepTheme: 'Documentation p. 8–9',
          stepTitle: 'Connaître les 3 qualités d’une réaction de titrage',
          paragraphText:
            'Pour fournir une mesure exacte en un temps bref sans réactions parasites, la réaction support doit être totale, rapide et spécifique de l’espèce titrée.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q1',
            type: 'mcq',
            prompt: 'Quelles trois propriétés doit impérativement vérifier la réaction support d’un dosage (Documentation p. 9) ?',
            options: [
              'Être totale, rapide et spécifique (sélective) de l’espèce titrée',
              'Être lente, réversible et limitée à 67 %',
              'Être endothermique, lente et non stœchiométrique',
              'Libérer nécessairement un gaz coloré',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une réaction de titrage doit consommer entièrement le réactif limitant (totale), sans attendre (rapide), et ne réagir qu’avec l’espèce dosée (spécifique).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Équivalence',
          stepTheme: 'Proportions stœchiométriques',
          stepTitle: 'Définir l’équivalence d’un dosage',
          paragraphText:
            'À l’équivalence, les quantités de matière de réactif titrant versé et de réactif titré initial sont exactement dans le rapport des coefficients stœchiométriques.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q2',
            type: 'mcq',
            prompt: 'Que signifie le fait que l’équivalence est atteinte lors d’un dosage ?',
            options: [
              'Les réactifs ont été introduits dans les proportions stœchiométriques de l’équation-bilan',
              'La réaction est devenue impossible faute d’eau',
              'Les concentrations des deux solutions sont devenues égales',
              'Le volume versé est exactement égal à 20 mL',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’équivalence est l’état où il y a changement de réactif limitant : les réactifs ont réagi dans les proportions stœchiométriques exactes.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Repérage visuel',
          stepTheme: 'Titrage par MnO₄⁻',
          stepTitle: 'Repérer l’équivalence d’un dosage manganimétrique',
          paragraphText:
            'Les ions MnO₄⁻ sont violettes tandis que Mn²⁺ et Fe³⁺ sont quasiment incolores/pâles : dès que tout Fe²⁺ a disparu, une seule goutte de KMnO₄ suffit à colorer le bécher en violet persistant.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q3',
            type: 'mcq',
            prompt: 'Lors du dosage de $\\mathrm{Fe^{2+}}$ (dans le bécher) par $\\mathrm{MnO_4^-}$ (dans la burette), comment repère-t-on l’équivalence ?',
            options: [
              'À l’apparition d’une teinte violette persistante dans le bécher',
              'Au passage de la solution du violet au bleu intense',
              'À l’apparition d’un dégagement de dihydrogène',
              'À l’ébullition spontanée du bécher',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Tant qu’il reste des ions Fe²⁺, MnO₄⁻ versé est réduit en Mn²⁺ incolore ; juste après l’équivalence, MnO₄⁻ ne réagit plus et colore la solution en violet persistant.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Bilan molaire',
          stepTheme: 'Formule d’équivalence',
          stepTitle: 'Écrire la relation à l’équivalence pour Fe²⁺ + MnO₄⁻',
          paragraphText:
            'Comme 5 ions Fe²⁺ réagissent avec 1 ion MnO₄⁻, à l’équivalence n(Fe²⁺) = 5 n(MnO₄⁻), soit C_r·V_r = 5 C₀·V₀éq.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q4',
            type: 'mcq',
            prompt: 'Lors du dosage de $V_r$ d’une solution de $\\mathrm{Fe^{2+}}$ de concentration $C_r$ par $\\mathrm{MnO_4^-}$ ($C_0$, volume équivalent $V_{0,\\text{éq}}$), quelle formule donne $C_r$ ?',
            options: [
              '$C_r = \\frac{5\\,C_0 V_{0,\\text{éq}}}{V_r}$',
              '$C_r = \\frac{C_0 V_{0,\\text{éq}}}{5\\,V_r}$',
              '$C_r = \\frac{C_0 V_r}{5\\,V_{0,\\text{éq}}}$',
              '$C_r = \\frac{C_0 V_{0,\\text{éq}}}{V_r}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '5 Fe²⁺ réagissent avec 1 MnO₄⁻ ⇒ n(Fe²⁺)/5 = n(MnO₄⁻) ⇒ C_r·V_r = 5 C₀·V₀éq ⇒ C_r = 5 C₀·V₀éq / V_r.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Calcul C₀',
          stepTheme: 'Exercice 5 Q3.1 p. 8',
          stepTitle: 'Calculer la concentration de la solution titrante de KMnO₄',
          paragraphText:
            'On dissout 0,20 g de KMnO₄ (M = 158 g/mol) dans 100 mL (0,10 L) d’eau distillée : C₀ = m / (M·V).',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q5',
            type: 'mcq',
            prompt: 'On dissout $m = 0{,}20\\text{ g}$ de $\\mathrm{KMnO_4}$ ($M = 158\\text{ g/mol}$) dans $100\\text{ mL}$ d’eau distillée. Quelle est la concentration molaire $C_0$ ?',
            options: [
              '$0{,}0126\\text{ mol/L}$ (ou $0{,}0127\\text{ mol/L}$)',
              '$0{,}126\\text{ mol/L}$',
              '$0{,}0025\\text{ mol/L}$',
              '$1{,}26\\text{ mol/L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C₀ = m / (M·V) = 0,20 / (158 × 0,10) = 0,20 / 15,8 ≈ 0,01266 mol/L.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Calcul C(Fe²⁺)',
          stepTheme: 'Exercice 5 Q3.2 p. 8',
          stepTitle: 'Calculer la concentration inconnue de Fe²⁺ à l’équivalence',
          paragraphText:
            'Avec C₀ = 0,0126 mol/L, V_ox = 16,5 mL et V_red = 12 mL, C(Fe²⁺) = (5 × 0,0126 × 16,5) / 12.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q6',
            type: 'mcq',
            prompt: 'Un volume $V_{\\text{red}} = 12\\text{ mL}$ de solution de $\\mathrm{Fe^{2+}}$ est dosé à l’équivalence par $V_{\\text{ox}} = 16{,}5\\text{ mL}$ de $\\mathrm{KMnO_4}$ à $C_0 = 0{,}0126\\text{ mol/L}$. Que vaut $[\\mathrm{Fe^{2+}}]$ ?',
            options: [
              '$0{,}087\\text{ mol/L}$',
              '$0{,}017\\text{ mol/L}$',
              '$0{,}0035\\text{ mol/L}$',
              '$0{,}43\\text{ mol/L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '[Fe²⁺] = (5 × 0,0126 × 16,5) / 12 = 1,0395 / 12 ≈ 0,0866 ≈ 0,087 mol/L.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q1',
          type: 'mcq',
          prompt: 'Quelles trois propriétés doit impérativement vérifier la réaction support d’un dosage (Documentation p. 9) ?',
          options: [
            'Être totale, rapide et spécifique (sélective) de l’espèce titrée',
            'Être lente, réversible et limitée à 67 %',
            'Être endothermique, lente et non stœchiométrique',
            'Libérer nécessairement un gaz coloré',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une réaction de titrage doit consommer entièrement le réactif limitant (totale), sans attendre (rapide), et ne réagir qu’avec l’espèce dosée (spécifique).',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q2',
          type: 'mcq',
          prompt: 'Que signifie le fait que l’équivalence est atteinte lors d’un dosage ?',
          options: [
            'Les réactifs ont été introduits dans les proportions stœchiométriques de l’équation-bilan',
            'La réaction est devenue impossible faute d’eau',
            'Les concentrations des deux solutions sont devenues égales',
            'Le volume versé est exactement égal à 20 mL',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’équivalence est l’état où il y a changement de réactif limitant : les réactifs ont réagi dans les proportions stœchiométriques exactes.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q3',
          type: 'mcq',
          prompt: 'Lors du dosage de $\\mathrm{Fe^{2+}}$ (dans le bécher) par $\\mathrm{MnO_4^-}$ (dans la burette), comment repère-t-on l’équivalence ?',
          options: [
            'À l’apparition d’une teinte violette persistante dans le bécher',
            'Au passage de la solution du violet au bleu intense',
            'À l’apparition d’un dégagement de dihydrogène',
            'À l’ébullition spontanée du bécher',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Tant qu’il reste des ions Fe²⁺, MnO₄⁻ versé est réduit en Mn²⁺ incolore ; juste après l’équivalence, MnO₄⁻ ne réagit plus et colore la solution en violet persistant.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q4',
          type: 'mcq',
          prompt: 'Lors du dosage de $V_r$ d’une solution de $\\mathrm{Fe^{2+}}$ de concentration $C_r$ par $\\mathrm{MnO_4^-}$ ($C_0$, volume équivalent $V_{0,\\text{éq}}$), quelle formule donne $C_r$ ?',
          options: [
            '$C_r = \\frac{5\\,C_0 V_{0,\\text{éq}}}{V_r}$',
            '$C_r = \\frac{C_0 V_{0,\\text{éq}}}{5\\,V_r}$',
            '$C_r = \\frac{C_0 V_r}{5\\,V_{0,\\text{éq}}}$',
            '$C_r = \\frac{C_0 V_{0,\\text{éq}}}{V_r}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '5 Fe²⁺ réagissent avec 1 MnO₄⁻ ⇒ n(Fe²⁺)/5 = n(MnO₄⁻) ⇒ C_r·V_r = 5 C₀·V₀éq ⇒ C_r = 5 C₀·V₀éq / V_r.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q5',
          type: 'mcq',
          prompt: 'On dissout $m = 0{,}20\\text{ g}$ de $\\mathrm{KMnO_4}$ ($M = 158\\text{ g/mol}$) dans $100\\text{ mL}$ d’eau distillée. Quelle est la concentration molaire $C_0$ ?',
          options: [
            '$0{,}0126\\text{ mol/L}$ (ou $0{,}0127\\text{ mol/L}$)',
            '$0{,}126\\text{ mol/L}$',
            '$0{,}0025\\text{ mol/L}$',
            '$1{,}26\\text{ mol/L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C₀ = m / (M·V) = 0,20 / (158 × 0,10) = 0,20 / 15,8 ≈ 0,01266 mol/L.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p05_q6',
          type: 'mcq',
          prompt: 'Un volume $V_{\\text{red}} = 12\\text{ mL}$ de solution de $\\mathrm{Fe^{2+}}$ est dosé à l’équivalence par $V_{\\text{ox}} = 16{,}5\\text{ mL}$ de $\\mathrm{KMnO_4}$ à $C_0 = 0{,}0126\\text{ mol/L}$. Que vaut $[\\mathrm{Fe^{2+}}]$ ?',
          options: [
            '$0{,}087\\text{ mol/L}$',
            '$0{,}017\\text{ mol/L}$',
            '$0{,}0035\\text{ mol/L}$',
            '$0{,}43\\text{ mol/L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '[Fe²⁺] = (5 × 0,0126 × 16,5) / 12 = 1,0395 / 12 ≈ 0,0866 ≈ 0,087 mol/L.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Dosage indirect / en retour du dichromate (Situation p. 4–6)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l08_couples_redox_dosage_p06',
      order: 6,
      title: 'Dosage en deux étapes : iodométrie du dichromate (Situation p. 4–6)',
      summary:
        'Exploiter un dosage indirect en deux réactions successives (Cr₂O₇²⁻ + I⁻ → I₂ puis I₂ + S₂O₃²⁻) pour remonter à la concentration inconnue de dichromate.',
      conceptExplanation:
        "Dans la **Situation d’évaluation (p. 4–6)**, on détermine la concentration $C$ d’un volume $V = 20\\text{ mL}$ de dichromate de potassium par une méthode en **deux étapes** (iodométrie) :\n\n1. **Expérience 1 (production de diiode)** : on ajoute un excès d’iodure de potassium ($20\\text{ mL}$ à $0{,}4\\text{ mol/L}$). Tout le dichromate est réduit en $\\mathrm{Cr^{3+}}$ (vert) et libère du **diiode $\\mathrm{I_2}$** (couleur **brun jaune** en solution) :\n   $$\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\longrightarrow 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$$\n2. **Expérience 2 (dosage du $\\mathrm{I_2}$ formé)** : on verse $V_2 = 10\\text{ mL}$ de thiosulfate de sodium ($C_2 = 0{,}2\\text{ mol/L}$) jusqu’à disparition du diiode brun (teinte verte due aux seuls ions $\\mathrm{Cr^{3+}}$) :\n   $$\\mathrm{I_2 + 2\\,S_2O_3^{2-} \\longrightarrow 2\\,I^- + S_4O_6^{2-}}$$\n3. **Chaîne stœchiométrique** :\n   $$n(\\mathrm{I_2}) = \\frac{n(\\mathrm{S_2O_3^{2-}})}{2} = \\frac{C_2 V_2}{2} \\qquad \\text{et} \\qquad n(\\mathrm{Cr_2O_7^{2-}}) = \\frac{n(\\mathrm{I_2})}{3} \\implies C = \\frac{C_2 V_2}{6\\,V}$$",
      keyRule:
        'Dans le dosage iodométrique de Cr₂O₇²⁻ : 1 Cr₂O₇²⁻ produit 3 I₂ (Exp. 1), et 1 I₂ consomme 2 S₂O₃²⁻ (Exp. 2) ; donc 1 Cr₂O₇²⁻ équivaut à 6 S₂O₃²⁻, soit C = (C₂·V₂)/(6·V).',
      formulas: [
        {
          name: 'Relation directe d’iodométrie du dichromate',
          formula: 'n(\\mathrm{Cr_2O_7^{2-}}) = \\frac{n(\\mathrm{I_2})}{3} = \\frac{n(\\mathrm{S_2O_3^{2-}})}{6}',
          note: 'Permet de calculer C = (0,2 × 10·10⁻³) / (6 × 20·10⁻³) ≈ 0,017 mol/L',
        },
      ],
      workedExample: {
        title: 'Résoudre la Situation d’évaluation (p. 4–6)',
        statement:
          'On dose $V = 20\\text{ mL}$ de $\\mathrm{K_2Cr_2O_7}$ par excès de $\\mathrm{KI}$, puis on titre le diiode formé par $V_2 = 10\\text{ mL}$ de thiosulfate à $C_2 = 0{,}2\\text{ mol/L}$. Calcule $n(\\mathrm{I_2})$ puis $C(\\mathrm{Cr_2O_7^{2-}})$.',
        methodSteps: [
          '1) Quantité de I₂ dosée dans l’expérience 2 : n(I₂) = (C₂·V₂)/2 = (0,2 × 10·10⁻³)/2 = 10⁻³ mol.',
          '2) D’après Cr₂O₇²⁻ + 6 I⁻ + 14 H⁺ → 2 Cr³⁺ + 3 I₂ + 7 H₂O : n(Cr₂O₇²⁻) = n(I₂)/3 = 10⁻³ / 3 mol.',
          '3) Concentration cherchée : C = n(Cr₂O₇²⁻) / V = 10⁻³ / (3 × 20·10⁻³) = 1 / 60 ≈ 0,0167 mol/L (0,017 mol/L).',
        ],
        conclusion:
          'La concentration de la solution de dichromate de potassium est C ≈ 0,017 mol/L.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Couleur Exp. 1',
          stepTheme: 'Présence de I₂',
          stepTitle: 'Justifier la couleur brun jaune dans l’expérience 1',
          paragraphText:
            'En présence d’un excès d’ions iodure I⁻ (incolores), le dichromate oxyde I⁻ en diiode I₂ qui colore la solution aqueuse en brun jaune.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q1',
            type: 'mcq',
            prompt: 'Pourquoi le contenu du bécher prend-il une coloration brun jaune à la fin de l’expérience 1 ?',
            options: [
              'En raison de la formation de diiode ($\\mathrm{I_2}$) en solution aqueuse',
              'En raison de la formation de permanganate violet',
              'À cause d’un précipité d’hydroxyde de fer III',
              'Parce que les ions $\\mathrm{I^-}$ sont noirs',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le diiode I₂ dissous en solution aqueuse (avec excès d’ions I⁻) donne cette coloration brun jaune caractéristique.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Couleur Exp. 2',
          stepTheme: 'Disparition de I₂',
          stepTitle: 'Expliquer pourquoi l’ensemble redevient vert après ajout de S₂O₃²⁻',
          paragraphText:
            'Le thiosulfate S₂O₃²⁻ réduit tout le diiode I₂ brun en ions iodure I⁻ incolores, ne laissant plus apparaître que la teinte verte des ions Cr³⁺.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q2',
            type: 'mcq',
            prompt: 'Dans l’expérience 2, pourquoi le mélange prend-il une teinte verte lorsque tout le diiode a été dosé par $\\mathrm{S_2O_3^{2-}}$ ?',
            options: [
              'Parce que $\\mathrm{I_2}$ brun est réduit en $\\mathrm{I^-}$ incolore et qu’il ne reste plus que les ions $\\mathrm{Cr^{3+}}$ verts',
              'Parce que le thiosulfate forme un complexe vert avec $\\mathrm{Na^+}$',
              'Parce que $\\mathrm{S_4O_6^{2-}}$ est vert émeraude',
              'Parce que $\\mathrm{Cr_2O_7^{2-}}$ se reforme',
            ],
            correctAnswerIndex: 0,
            explanation:
              'I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻ produit des ions incolores, révélant la couleur verte des ions Cr³⁺ formés dans l’expérience 1.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Équation Exp. 1',
          stepTheme: 'Dichromate + iodure',
          stepTitle: 'Équilibrer l’oxydation des ions iodure par le dichromate',
          paragraphText:
            'Chaque ion dichromate capte 6 électrons et chaque paire 2 I⁻ en libère 2 : il faut donc 6 I⁻ pour former 3 molécules I₂.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q3',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan de la réaction entre les ions dichromate et les ions iodure en milieu acide ?',
            options: [
              '$\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\longrightarrow 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$',
              '$\\mathrm{Cr_2O_7^{2-} + 2\\,I^- + 14\\,H^+ \\longrightarrow 2\\,Cr^{3+} + I_2 + 7\\,H_2O}$',
              '$\\mathrm{Cr_2O_7^{2-} + 3\\,I^- + 7\\,H^+ \\longrightarrow 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$',
              '$2\\,\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\longrightarrow 4\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '(Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O) + 3×(2 I⁻ → I₂ + 2 e⁻) donne Cr₂O₇²⁻ + 6 I⁻ + 14 H⁺ → 2 Cr³⁺ + 3 I₂ + 7 H₂O.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Calcul n(I₂)',
          stepTheme: 'Situation p. 5',
          stepTitle: 'Calculer la quantité de diiode formé à partir de S₂O₃²⁻',
          paragraphText:
            'D’après I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻, 10 mL de thiosulfate à 0,2 mol/L contiennent 2·10⁻³ mol de S₂O₃²⁻, correspondant à la moitié en I₂.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q4',
            type: 'mcq',
            prompt: 'On verse $V_2 = 10\\text{ mL}$ de thiosulfate à $C_2 = 0{,}2\\text{ mol/L}$ pour doser $\\mathrm{I_2}$ selon $\\mathrm{I_2 + 2\\,S_2O_3^{2-} \\to 2\\,I^- + S_4O_6^{2-}}$. Que vaut $n(\\mathrm{I_2})$ ?',
            options: [
              '$1{,}0 \\times 10^{-3}\\text{ mol}$',
              '$2{,}0 \\times 10^{-3}\\text{ mol}$',
              '$4{,}0 \\times 10^{-3}\\text{ mol}$',
              '$0{,}5 \\times 10^{-3}\\text{ mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(I₂) = n(S₂O₃²⁻) / 2 = (0,2 × 10·10⁻³) / 2 = 10⁻³ mol.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Calcul C(Cr₂O₇²⁻)',
          stepTheme: 'Situation p. 5–6',
          stepTitle: 'Déduire la concentration C de la solution de dichromate',
          paragraphText:
            'Puisque 1 Cr₂O₇²⁻ donne 3 I₂, n(Cr₂O₇²⁻) = n(I₂)/3 = 10⁻³/3 mol dans V = 20 mL.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q5',
            type: 'mcq',
            prompt: 'Avec $n(\\mathrm{I_2}) = 10^{-3}\\text{ mol}$ et $V = 20\\text{ mL}$ de $\\mathrm{K_2Cr_2O_7}$ ($n(\\mathrm{Cr_2O_7^{2-}}) = n(\\mathrm{I_2})/3$), quelle est la concentration $C$ du dichromate ?',
            options: [
              '$0{,}017\\text{ mol/L}$ ($1{,}67 \\times 10^{-2}\\text{ mol/L}$)',
              '$0{,}050\\text{ mol/L}$',
              '$0{,}150\\text{ mol/L}$',
              '$0{,}0050\\text{ mol/L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C = n(I₂) / (3 V) = 10⁻³ / (3 × 20·10⁻³) = 1 / 60 ≈ 0,0167 ≈ 0,017 mol/L.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application eau potable',
          stepTheme: 'Documentation p. 8',
          stepTitle: 'Relier les dosages redox au contrôle des eaux souterraines',
          paragraphText:
            'En Côte d’Ivoire et dans le monde, la concentration en ions métalliques (comme le fer dissous dans les eaux de forage) doit être surveillée par titrage car certains métaux deviennent toxiques à forte dose.',
          exercise: {
            id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q6',
            type: 'mcq',
            prompt: 'Pourquoi contrôle-t-on régulièrement la concentration en ions fer ou métaux dans les eaux souterraines (Documentation p. 8) ?',
            options: [
              'Parce que selon leur concentration, certains éléments métalliques passent d’essentiels à toxiques pour l’homme',
              'Parce que le fer rend l’eau totalement dépourvue de conductivité',
              'Parce que toutes les eaux souterraines contiennent du dichromate',
              'Uniquement pour colorer l’eau en violet',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les eaux souterraines sont des réserves d’eau potable : à trop forte concentration, les éléments métalliques deviennent toxiques, d’où l’intérêt du dosage.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q1',
          type: 'mcq',
          prompt: 'Pourquoi le contenu du bécher prend-il une coloration brun jaune à la fin de l’expérience 1 ?',
          options: [
            'En raison de la formation de diiode ($\\mathrm{I_2}$) en solution aqueuse',
            'En raison de la formation de permanganate violet',
            'À cause d’un précipité d’hydroxyde de fer III',
            'Parce que les ions $\\mathrm{I^-}$ sont noirs',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le diiode I₂ dissous en solution aqueuse (avec excès d’ions I⁻) donne cette coloration brun jaune caractéristique.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q2',
          type: 'mcq',
          prompt: 'Dans l’expérience 2, pourquoi le mélange prend-il une teinte verte lorsque tout le diiode a été dosé par $\\mathrm{S_2O_3^{2-}}$ ?',
          options: [
            'Parce que $\\mathrm{I_2}$ brun est réduit en $\\mathrm{I^-}$ incolore et qu’il ne reste plus que les ions $\\mathrm{Cr^{3+}}$ verts',
            'Parce que le thiosulfate forme un complexe vert avec $\\mathrm{Na^+}$',
            'Parce que $\\mathrm{S_4O_6^{2-}}$ est vert émeraude',
            'Parce que $\\mathrm{Cr_2O_7^{2-}}$ se reforme',
          ],
          correctAnswerIndex: 0,
          explanation:
            'I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻ produit des ions incolores, révélant la couleur verte des ions Cr³⁺ formés dans l’expérience 1.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q3',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan de la réaction entre les ions dichromate et les ions iodure en milieu acide ?',
          options: [
            '$\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\longrightarrow 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$',
            '$\\mathrm{Cr_2O_7^{2-} + 2\\,I^- + 14\\,H^+ \\longrightarrow 2\\,Cr^{3+} + I_2 + 7\\,H_2O}$',
            '$\\mathrm{Cr_2O_7^{2-} + 3\\,I^- + 7\\,H^+ \\longrightarrow 2\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$',
            '$2\\,\\mathrm{Cr_2O_7^{2-} + 6\\,I^- + 14\\,H^+ \\longrightarrow 4\\,Cr^{3+} + 3\\,I_2 + 7\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '(Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O) + 3×(2 I⁻ → I₂ + 2 e⁻) donne Cr₂O₇²⁻ + 6 I⁻ + 14 H⁺ → 2 Cr³⁺ + 3 I₂ + 7 H₂O.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q4',
          type: 'mcq',
          prompt: 'On verse $V_2 = 10\\text{ mL}$ de thiosulfate à $C_2 = 0{,}2\\text{ mol/L}$ pour doser $\\mathrm{I_2}$ selon $\\mathrm{I_2 + 2\\,S_2O_3^{2-} \\to 2\\,I^- + S_4O_6^{2-}}$. Que vaut $n(\\mathrm{I_2})$ ?',
          options: [
            '$1{,}0 \\times 10^{-3}\\text{ mol}$',
            '$2{,}0 \\times 10^{-3}\\text{ mol}$',
            '$4{,}0 \\times 10^{-3}\\text{ mol}$',
            '$0{,}5 \\times 10^{-3}\\text{ mol}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n(I₂) = n(S₂O₃²⁻) / 2 = (0,2 × 10·10⁻³) / 2 = 10⁻³ mol.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q5',
          type: 'mcq',
          prompt: 'Avec $n(\\mathrm{I_2}) = 10^{-3}\\text{ mol}$ et $V = 20\\text{ mL}$ de $\\mathrm{K_2Cr_2O_7}$ ($n(\\mathrm{Cr_2O_7^{2-}}) = n(\\mathrm{I_2})/3$), quelle est la concentration $C$ du dichromate ?',
          options: [
            '$0{,}017\\text{ mol/L}$ ($1{,}67 \\times 10^{-2}\\text{ mol/L}$)',
            '$0{,}050\\text{ mol/L}$',
            '$0{,}150\\text{ mol/L}$',
            '$0{,}0050\\text{ mol/L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C = n(I₂) / (3 V) = 10⁻³ / (3 × 20·10⁻³) = 1 / 60 ≈ 0,0167 ≈ 0,017 mol/L.',
        },
        {
          id: 'premiere_c_chimie_l08_couples_redox_dosage_p06_q6',
          type: 'mcq',
          prompt: 'Pourquoi contrôle-t-on régulièrement la concentration en ions fer ou métaux dans les eaux souterraines (Documentation p. 8) ?',
          options: [
            'Parce que selon leur concentration, certains éléments métalliques passent d’essentiels à toxiques pour l’homme',
            'Parce que le fer rend l’eau totalement dépourvue de conductivité',
            'Parce que toutes les eaux souterraines contiennent du dichromate',
            'Uniquement pour colorer l’eau en violet',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les eaux souterraines sont des réserves d’eau potable : à trop forte concentration, les éléments métalliques deviennent toxiques, d’où l’intérêt du dosage.',
        },
      ],
    },
  ],
};

