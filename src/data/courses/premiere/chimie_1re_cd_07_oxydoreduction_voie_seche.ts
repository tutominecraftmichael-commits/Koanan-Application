import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Chimie : Oxydoréduction par voie sèche » (format v2).
export const CHIMIE_1RE_CD_L07_OXYDOREDUCTION_VOIE_SECHE: CurriculumChapter = {
  id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 7,
  title: 'Leçon 7 : Oxydoréduction par voie sèche',
  summary:
    'Réactions d’oxydoréduction hors milieu aqueux (magnésium dans O₂, réduction de CuO par C, aluminothermie), nombre d’oxydation (n.o.), identification oxydant/réducteur et équilibrage d’équations-bilans.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ère C - Chimie : Oxydoréduction par voie sèche.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Oxydation du magnésium par le dioxygène (voie sèche)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01',
      order: 1,
      title: 'Oxydation du magnésium par le dioxygène (voie sèche)',
      summary:
        'Observer et interpréter la combustion du ruban de magnésium dans le dioxygène comme un transfert d’électrons hors solution aqueuse.',
      conceptExplanation:
        "Les feux d’artifice (Situation d’apprentissage p. 1) exploitent notamment la combustion très vive du **magnésium** ($\\mathrm{Mg}$) dans le **dioxygène** ($\\mathrm{O_2}$), produisant une lumière blanche intense et une fumée blanche solide d’**oxyde de magnésium** ($\\mathrm{MgO}$) :\n\n- **Structure ionique du produit** : $\\mathrm{MgO}$ est un solide ionique formé d’un empilement régulier de cations $\\mathrm{Mg^{2+}}$ et d’anions $\\mathrm{O^{2-}}$.\n- **Demi-équation d’oxydation (perte d’électrons)** : chaque atome de magnésium cède $2$ électrons :\n  $$\\mathrm{Mg \\longrightarrow Mg^{2+} + 2\\,e^-}$$\n- **Demi-équation de réduction (gain d’électrons)** : chaque molécule de dioxygène capte $4$ électrons :\n  $$\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$$\n- **Équation-bilan** :\n  $$2\\,\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{Mg^{2+}} + 2\\,\\mathrm{O^{2-}} \\quad (\\text{soit } 2\\,\\mathrm{MgO})$$\n\nComme ce transfert d’électrons entre les couples $\\mathrm{Mg^{2+}/Mg}$ et $\\mathrm{O_2/O^{2-}}$ a lieu **en dehors du milieu aqueux**, on parle d’**oxydoréduction par voie sèche**.",
      keyRule:
        'Une réaction d’oxydoréduction par voie sèche est un transfert d’électrons qui se produit en dehors de toute solution aqueuse : Mg perd des électrons (oxydation) et O₂ les capte (réduction).',
      formulas: [
        {
          name: 'Combustion du magnésium dans le dioxygène',
          formula: '2\\,\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{Mg^{2+}} + 2\\,\\mathrm{O^{2-}}',
          note: 'Couples mis en jeu : Mg²⁺/Mg et O₂/O²⁻ (oxyde ionique MgO)',
        },
      ],
      workedExample: {
        title: 'Interpréter la formation de l’oxyde de magnésium MgO',
        statement:
          'Lorsqu’on introduit un ruban de magnésium enflammé dans un flacon de dioxygène, pourquoi parle-t-on à la fois d’oxydoréduction et de voie sèche ?',
        methodSteps: [
          '1) Chaque atome Mg cède 2 e⁻ pour devenir Mg²⁺ (oxydation) et chaque molécule O₂ capte 4 e⁻ pour former 2 O²⁻ (réduction).',
          '2) Il y a donc bien un transfert d’électrons du réducteur (Mg) vers l’oxydant (O₂) : c’est une réaction d’oxydoréduction.',
          '3) Les réactifs (solide Mg et gaz O₂) réagissent sans eau ni solvant aqueux : c’est une réaction par voie sèche.',
        ],
        conclusion:
          'L’oxydation du magnésium par O₂ produit le cristal ionique MgO selon une réaction redox par voie sèche.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Voie sèche',
          stepTheme: 'Définition',
          stepTitle: 'Qu’appelle-t-on réaction d’oxydoréduction par voie sèche ?',
          paragraphText:
            'Contrairement aux dosages en solution aqueuse, les réactions par voie sèche font intervenir des solides ou des gaz portés à haute température sans eau.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q1',
            type: 'mcq',
            prompt: 'Pourquoi la combustion du magnésium dans le dioxygène est-elle qualifiée d’oxydoréduction « par voie sèche » ?',
            options: [
              'Parce que le transfert d’électrons se déroule en dehors du milieu aqueux',
              'Parce qu’elle nécessite un dosage acido-basique préalable',
              'Parce qu’elle libère de l’eau liquide comme seul produit',
              'Parce qu’elle ne fait intervenir aucun électron',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une réaction d’oxydoréduction par voie sèche désigne tout transfert d’électrons s’effectuant sans solution aqueuse (ex. solide-gaz ou solide-solide).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Observation',
          stepTheme: 'Oxyde MgO',
          stepTitle: 'Identifier le produit formé lors de la combustion de Mg',
          paragraphText:
            'La flamme éblouissante du magnésium dégage des fumées blanches d’oxyde de magnésium MgO, cristal ionique constitué d’ions Mg²⁺ et O²⁻.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q2',
            type: 'mcq',
            prompt: 'De quelles particules ioniques la fumée blanche d’oxyde de magnésium ($\\mathrm{MgO}$) est-elle constituée ?',
            options: [
              'D’ions magnésium $\\mathrm{Mg^{2+}}$ et d’ions oxygène $\\mathrm{O^{2-}}$',
              'D’ions $\\mathrm{Mg^+}$ et d’ions hydroxyde $\\mathrm{HO^-}$',
              'Uniquement de molécules neutres de dioxygène',
              'D’ions $\\mathrm{Fe^{3+}}$ et d’ions $\\mathrm{Al^{3+}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’analyse cristalline montre que MgO possède une structure ionique formée d’un empilement régulier d’ions Mg²⁺ et O²⁻.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Oxydation',
          stepTheme: 'Demi-équation de Mg',
          stepTitle: 'Écrire la demi-équation subie par le magnésium',
          paragraphText:
            'Le magnésium métallique cède deux électrons par atome pour former le cation magnésium : il subit donc une oxydation.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q3',
            type: 'mcq',
            prompt: 'Quelle demi-équation traduit l’oxydation du magnésium métallique ?',
            options: [
              '$\\mathrm{Mg \\longrightarrow Mg^{2+} + 2\\,e^-}$',
              '$\\mathrm{Mg^{2+} + 2\\,e^- \\longrightarrow Mg}$',
              '$\\mathrm{Mg + O_2 \\longrightarrow MgO_2}$',
              '$\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une oxydation correspond à une perte d’électrons : Mg passe à Mg²⁺ en cédant 2 e⁻.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Réduction',
          stepTheme: 'Demi-équation de O₂',
          stepTitle: 'Écrire la demi-équation subie par le dioxygène',
          paragraphText:
            'Chaque atome d’oxygène capte deux électrons ; une molécule O₂ en capte donc quatre pour former deux anions O²⁻.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q4',
            type: 'mcq',
            prompt: 'Combien d’électrons capte une molécule de dioxygène $\\mathrm{O_2}$ lors de sa réduction en ions $\\mathrm{O^{2-}}$ ?',
            options: [
              '4 électrons selon $\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$',
              '2 électrons selon $\\mathrm{O_2 + 2\\,e^- \\longrightarrow 2\\,O^{2-}}$',
              '1 électron selon $\\mathrm{O_2 + e^- \\longrightarrow O^{2-}}$',
              'Aucun électron',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Chaque atome O capte 2 e⁻ pour devenir O²⁻ ; pour les 2 atomes de la molécule O₂, cela fait 4 e⁻ captés.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Couples & Bilan',
          stepTitle: 'Équilibrer l’équation-bilan entre Mg et O₂',
          paragraphText:
            'Pour échanger le même nombre d’électrons (4 e⁻), on multiplie la demi-équation du magnésium par 2 avant d’additionner.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q5',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan correcte de l’oxydation du magnésium par le dioxygène ?',
            options: [
              '$2\\,\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{Mg^{2+}} + 2\\,\\mathrm{O^{2-}}$',
              '$\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow \\mathrm{Mg^{2+}} + \\mathrm{O^{2-}}$',
              '$2\\,\\mathrm{Mg} + 2\\,\\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{MgO}$',
              '$\\mathrm{Mg} + 2\\,\\mathrm{O_2} \\longrightarrow \\mathrm{MgO_4}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '2 × (Mg → Mg²⁺ + 2 e⁻) + (O₂ + 4 e⁻ → 2 O²⁻) donne 2 Mg + O₂ → 2 Mg²⁺ + 2 O²⁻ (soit 2 MgO).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Couples redox',
          stepTheme: 'Oxydant / Réducteur',
          stepTitle: 'Identifier les couples et rôles dans Mg + O₂',
          paragraphText:
            'Dans cette réaction, le magnésium est le réducteur (cède les électrons) et le dioxygène est l’oxydant (capte les électrons).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q6',
            type: 'mcq',
            prompt: 'Quels couples oxydant/réducteur interviennent lors de la combustion du magnésium dans le dioxygène ?',
            options: [
              '$\\mathrm{Mg^{2+}/Mg}$ et $\\mathrm{O_2/O^{2-}}$',
              '$\\mathrm{Mg/Mg^{2+}}$ et $\\mathrm{O^{2-}/O_2}$',
              '$\\mathrm{Fe^{3+}/Fe}$ et $\\mathrm{Al^{3+}/Al}$',
              '$\\mathrm{Cu^{2+}/Cu}$ et $\\mathrm{CO_2/C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Par convention, un couple s’écrit toujours Oxydant/Réducteur : Mg²⁺/Mg et O₂/O²⁻.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q1',
          type: 'mcq',
          prompt: 'Pourquoi la combustion du magnésium dans le dioxygène est-elle qualifiée d’oxydoréduction « par voie sèche » ?',
          options: [
            'Parce que le transfert d’électrons se déroule en dehors du milieu aqueux',
            'Parce qu’elle nécessite un dosage acido-basique préalable',
            'Parce qu’elle libère de l’eau liquide comme seul produit',
            'Parce qu’elle ne fait intervenir aucun électron',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une réaction d’oxydoréduction par voie sèche désigne tout transfert d’électrons s’effectuant sans solution aqueuse (ex. solide-gaz ou solide-solide).',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q2',
          type: 'mcq',
          prompt: 'De quelles particules ioniques la fumée blanche d’oxyde de magnésium ($\\mathrm{MgO}$) est-elle constituée ?',
          options: [
            'D’ions magnésium $\\mathrm{Mg^{2+}}$ et d’ions oxygène $\\mathrm{O^{2-}}$',
            'D’ions $\\mathrm{Mg^+}$ et d’ions hydroxyde $\\mathrm{HO^-}$',
            'Uniquement de molécules neutres de dioxygène',
            'D’ions $\\mathrm{Fe^{3+}}$ et d’ions $\\mathrm{Al^{3+}}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’analyse cristalline montre que MgO possède une structure ionique formée d’un empilement régulier d’ions Mg²⁺ et O²⁻.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q3',
          type: 'mcq',
          prompt: 'Quelle demi-équation traduit l’oxydation du magnésium métallique ?',
          options: [
            '$\\mathrm{Mg \\longrightarrow Mg^{2+} + 2\\,e^-}$',
            '$\\mathrm{Mg^{2+} + 2\\,e^- \\longrightarrow Mg}$',
            '$\\mathrm{Mg + O_2 \\longrightarrow MgO_2}$',
            '$\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une oxydation correspond à une perte d’électrons : Mg passe à Mg²⁺ en cédant 2 e⁻.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q4',
          type: 'mcq',
          prompt: 'Combien d’électrons capte une molécule de dioxygène $\\mathrm{O_2}$ lors de sa réduction en ions $\\mathrm{O^{2-}}$ ?',
          options: [
            '4 électrons selon $\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$',
            '2 électrons selon $\\mathrm{O_2 + 2\\,e^- \\longrightarrow 2\\,O^{2-}}$',
            '1 électron selon $\\mathrm{O_2 + e^- \\longrightarrow O^{2-}}$',
            'Aucun électron',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Chaque atome O capte 2 e⁻ pour devenir O²⁻ ; pour les 2 atomes de la molécule O₂, cela fait 4 e⁻ captés.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q5',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan correcte de l’oxydation du magnésium par le dioxygène ?',
          options: [
            '$2\\,\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{Mg^{2+}} + 2\\,\\mathrm{O^{2-}}$',
            '$\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow \\mathrm{Mg^{2+}} + \\mathrm{O^{2-}}$',
            '$2\\,\\mathrm{Mg} + 2\\,\\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{MgO}$',
            '$\\mathrm{Mg} + 2\\,\\mathrm{O_2} \\longrightarrow \\mathrm{MgO_4}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '2 × (Mg → Mg²⁺ + 2 e⁻) + (O₂ + 4 e⁻ → 2 O²⁻) donne 2 Mg + O₂ → 2 Mg²⁺ + 2 O²⁻ (soit 2 MgO).',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p01_q6',
          type: 'mcq',
          prompt: 'Quels couples oxydant/réducteur interviennent lors de la combustion du magnésium dans le dioxygène ?',
          options: [
            '$\\mathrm{Mg^{2+}/Mg}$ et $\\mathrm{O_2/O^{2-}}$',
            '$\\mathrm{Mg/Mg^{2+}}$ et $\\mathrm{O^{2-}/O_2}$',
            '$\\mathrm{Fe^{3+}/Fe}$ et $\\mathrm{Al^{3+}/Al}$',
            '$\\mathrm{Cu^{2+}/Cu}$ et $\\mathrm{CO_2/C}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Par convention, un couple s’écrit toujours Oxydant/Réducteur : Mg²⁺/Mg et O₂/O²⁻.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Réduction de CuO par C et aluminothermie (Fe₂O₃ + Al)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02',
      order: 2,
      title: 'Réduction de CuO par C et aluminothermie (Fe₂O₃ + Al)',
      summary:
        'Expliquer deux grandes réactions solides par voie sèche : la réduction de l’oxyde de cuivre II par le carbone et la réduction de l’oxyde ferrique par l’aluminium (aluminothermie).',
      conceptExplanation:
        "Deux autres expériences fondamentales illustrent l’oxydoréduction par voie sèche entre solides :\n\n1. **Réduction de l’oxyde de cuivre II ($\\mathrm{CuO}$, noir) par le carbone ($\\mathrm{C}$)** (p. 2) :\n   - En chauffant fortement un mélange de poudre noire de $\\mathrm{CuO}$ et de charbon ($\\mathrm{C}$), on observe un **dépôt rouge brique de cuivre** ($\\mathrm{Cu}$) et un dégagement de **dioxyde de carbone** ($\\mathrm{CO_2}$) qui **trouble l’eau de chaux** :\n   $$2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}$$\n   L’ion $\\mathrm{Cu^{2+}}$ de $\\mathrm{CuO}$ est réduit en $\\mathrm{Cu}$, tandis que le carbone $\\mathrm{C}$ est oxydé en $\\mathrm{CO_2}$.\n2. **Réduction de l’oxyde ferrique ($\\mathrm{Fe_2O_3}$) par l’aluminium ($\\mathrm{Al}$) — Aluminothermie** (p. 2–3) :\n   - Amorçage par un ruban de magnésium sur un mélange $\\mathrm{Fe_2O_3 + Al}$ : réaction très vive et exothermique donnant une **poudre blanche d’alumine** ($\\mathrm{Al_2O_3}$) et du **fer métallique** ($\\mathrm{Fe}$, attiré par un aimant).\n   - Demi-équations entre les ions des oxydes ioniques :\n     $$\\mathrm{Fe^{3+} + 3\\,e^- \\longrightarrow Fe} \\qquad \\text{et} \\qquad \\mathrm{Al \\longrightarrow Al^{3+} + 3\\,e^-}$$\n   - Bilan ionique : $\\mathrm{Fe^{3+} + Al \\longrightarrow Fe + Al^{3+}}$ (soit en oxydes : $\\mathrm{Fe_2O_3 + 2\\,Al \\longrightarrow 2\\,Fe + Al_2O_3}$).",
      keyRule:
        'CuO + C donne du cuivre rouge et du CO₂ qui trouble l’eau de chaux (2 CuO + C → 2 Cu + CO₂) ; l’aluminothermie réduit Fe₂O₃ par Al en fer (attirable à l’aimant) et alumine Al₂O₃.',
      formulas: [
        {
          name: 'Réduction de l’oxyde de cuivre II par le carbone',
          formula: '2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}',
          note: 'CuO est l’oxydant réduit en Cu ; C est le réducteur oxydé en CO₂',
        },
        {
          name: 'Aluminothermie (réduction de Fe₂O₃ par Al)',
          formula: '\\mathrm{Fe^{3+} + Al \\longrightarrow Fe + Al^{3+}} \\quad (\\text{soit } \\mathrm{Fe_2O_3 + 2\\,Al \\longrightarrow 2\\,Fe + Al_2O_3})',
          note: 'Transfert de 3 électrons de Al vers Fe³⁺',
        },
      ],
      workedExample: {
        title: 'Identifier les produits de l’aluminothermie et de CuO + C',
        statement:
          'Comment reconnaît-on expérimentalement les deux produits formés lors du chauffage de CuO avec C, puis lors de l’aluminothermie ?',
        methodSteps: [
          '1) CuO + C : le solide rouge brillant restant dans le tube est du cuivre (Cu), et le gaz qui trouble l’eau de chaux est le dioxyde de carbone (CO₂).',
          '2) Aluminothermie (Fe₂O₃ + Al) : la poudre blanche est l’alumine (Al₂O₃) et les grains métalliques attirés par l’aimant sont du fer (Fe).',
        ],
        conclusion:
          'Les tests physiques (couleur rouge de Cu, aimant sur Fe) et chimiques (eau de chaux pour CO₂) identifient chaque espèce oxydée ou réduite.',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Expériences par voie sèche : CuO + C et aluminothermie',
        svgContent: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma comparatif de la réduction de CuO par C et de l'aluminothermie">
  <rect x="6" y="6" width="348" height="163" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="14" y="16" width="160" height="143" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
  <text x="94" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0F172A">1. CuO + C (chauffage)</text>
  <rect x="26" y="46" width="136" height="28" rx="5" fill="#1E293B"/>
  <text x="94" y="64" text-anchor="middle" font-size="9.5" font-weight="700" fill="#F8FAFC">Poudre noire CuO + C</text>
  <text x="94" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#DC2626">↓</text>
  <rect x="26" y="100" width="136" height="22" rx="4" fill="#FED7AA" stroke="#EA580C"/>
  <text x="94" y="115" text-anchor="middle" font-size="9" font-weight="700" fill="#9A3412">Dépôt rouge : Cu</text>
  <rect x="26" y="128" width="136" height="22" rx="4" fill="#E0F2FE" stroke="#0284C7"/>
  <text x="94" y="143" text-anchor="middle" font-size="9" font-weight="700" fill="#075985">CO₂ trouble eau de chaux</text>
  <rect x="186" y="16" width="160" height="143" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
  <text x="266" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0F172A">2. Aluminothermie</text>
  <rect x="198" y="46" width="136" height="28" rx="5" fill="#991B1B"/>
  <text x="266" y="64" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FEF2F2">Fe₂O₃ + Al (amorcé par Mg)</text>
  <text x="266" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#DC2626">↓</text>
  <rect x="198" y="100" width="136" height="22" rx="4" fill="#F1F5F9" stroke="#64748B"/>
  <text x="266" y="115" text-anchor="middle" font-size="9" font-weight="700" fill="#334155">Poudre blanche : Al₂O₃</text>
  <rect x="198" y="128" width="136" height="22" rx="4" fill="#E2E8F0" stroke="#475569"/>
  <text x="266" y="143" text-anchor="middle" font-size="9" font-weight="700" fill="#0F172A">Fer (Fe) attiré par aimant</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Test CuO + C',
          stepTheme: 'Eau de chaux & cuivre',
          stepTitle: 'Interpréter les observations de CuO + C',
          paragraphText:
            'Dans la réduction de l’oxyde de cuivre II par le carbone, le résidu rouge brique prouve la formation de cuivre métallique et l’eau de chaux troublée celle de CO₂.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q1',
            type: 'mcq',
            prompt: 'Lors du chauffage de l’oxyde de cuivre II ($\\mathrm{CuO}$) avec du carbone, que révèle le trouble de l’eau de chaux ?',
            options: [
              'La formation de dioxyde de carbone ($\\mathrm{CO_2}$) par oxydation du carbone',
              'La formation de dihydrogène ($\\mathrm{H_2}$)',
              'L’évaporation de cuivre liquide',
              'La formation d’alumine blanche',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le dioxyde de carbone CO₂ est caractérisé par le trouble de l’eau de chaux ; le carbone a été oxydé en CO₂.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Équation CuO + C',
          stepTheme: 'Équilibrage',
          stepTitle: 'Écrire l’équation-bilan entre CuO et C',
          paragraphText:
            'Un atome de carbone fixe deux atomes d’oxygène pour former CO₂ : il faut donc deux unités de CuO par atome de carbone.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q2',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de la réduction de l’oxyde de cuivre II par le carbone ?',
            options: [
              '$2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}$',
              '$\\mathrm{CuO} + \\mathrm{C} \\longrightarrow \\mathrm{Cu} + \\mathrm{CO_2}$',
              '$\\mathrm{CuO} + 2\\,\\mathrm{C} \\longrightarrow \\mathrm{Cu} + 2\\,\\mathrm{CO}$',
              '$2\\,\\mathrm{CuO} + 2\\,\\mathrm{C} \\longrightarrow \\mathrm{Cu_2C} + \\mathrm{CO_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Conservation des atomes : 2 Cu, 2 O et 1 C de part et d’autre dans 2 CuO + C → 2 Cu + CO₂.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Aluminothermie',
          stepTheme: 'Définition',
          stepTitle: 'Définir la réaction d’aluminothermie',
          paragraphText:
            'L’aluminothermie consiste à réduire un oxyde métallique (comme l’oxyde ferrique Fe₂O₃) par l’aluminium métallique Al à haute température.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q3',
            type: 'mcq',
            prompt: 'Qu’appelle-t-on « aluminothermie » dans la leçon ?',
            options: [
              'La réduction d’un oxyde métallique (tel que $\\mathrm{Fe_2O_3}$) par l’aluminium métallique',
              'La combustion de l’aluminium dans l’eau froide',
              'L’oxydation du fer par le carbone dans l’eau',
              'La distillation du pétrole brut sur alumine',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La réduction de l’oxyde ferrique Fe₂O₃ par l’aluminium Al, très exothermique, est communément appelée aluminothermie.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Produits Fe₂O₃ + Al',
          stepTheme: 'Alumine & Fer',
          stepTitle: 'Identifier les produits solides de l’aluminothermie',
          paragraphText:
            'Après refroidissement, l’aimant attire les grains de fer formés et laisse une poudre blanche : l’alumine Al₂O₃ (composée d’ions Al³⁺ et O²⁻).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q4',
            type: 'mcq',
            prompt: 'Quelle est la nature chimique de la poudre blanche obtenue après la réaction entre $\\mathrm{Fe_2O_3}$ et $\\mathrm{Al}$ ?',
            options: [
              'L’oxyde d’aluminium ou alumine ($\\mathrm{Al_2O_3}$)',
              'L’oxyde de magnésium ($\\mathrm{MgO}$)',
              'Le sulfate de fer ($\\mathrm{FeSO_4}$)',
              'Le carbonate de calcium ($\\mathrm{CaCO_3}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’aluminium oxydé forme l’alumine Al₂O₃, oxyde ionique constitué d’ions Al³⁺ et O²⁻.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Transfert d’électrons',
          stepTheme: 'Demi-équations Fe³⁺/Al',
          stepTitle: 'Écrire les demi-équations ioniques de l’aluminothermie',
          paragraphText:
            'Dans ces oxydes ioniques, les ions O²⁻ sont spectateurs : seuls les ions Fe³⁺ captent 3 électrons à l’aluminium Al.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q5',
            type: 'mcq',
            prompt: 'Quelles sont les demi-équations électroniques de la réduction de $\\mathrm{Fe_2O_3}$ par $\\mathrm{Al}$ ?',
            options: [
              '$\\mathrm{Fe^{3+} + 3\\,e^- \\longrightarrow Fe}$ et $\\mathrm{Al \\longrightarrow Al^{3+} + 3\\,e^-}$',
              '$\\mathrm{Fe^{2+} + 2\\,e^- \\longrightarrow Fe}$ et $\\mathrm{Al^{3+} + 3\\,e^- \\longrightarrow Al}$',
              '$\\mathrm{Fe \\longrightarrow Fe^{3+} + 3\\,e^-}$ et $\\mathrm{Al^{3+} + 3\\,e^- \\longrightarrow Al}$',
              '$\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$ et $\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’ion ferrique Fe³⁺ est réduit en fer (gain de 3 e⁻) et l’aluminium Al est oxydé en Al³⁺ (perte de 3 e⁻).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Rôles',
          stepTheme: 'Oxydant vs Réducteur',
          stepTitle: 'Distinguer l’oxydant et le réducteur dans CuO + C et Fe₂O₃ + Al',
          paragraphText:
            'Le carbone C et l’aluminium Al cèdent des électrons (réducteurs), tandis que CuO et Fe₂O₃ en captent (oxydants).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q6',
            type: 'mcq',
            prompt: 'Dans la réaction $\\mathrm{Fe_2O_3 + 2\\,Al \\longrightarrow 2\\,Fe + Al_2O_3}$, quel réactif est le réducteur et quel réactif est l’oxydant ?',
            options: [
              '$\\mathrm{Al}$ est le réducteur et $\\mathrm{Fe_2O_3}$ est l’oxydant',
              '$\\mathrm{Fe_2O_3}$ est le réducteur et $\\mathrm{Al}$ est l’oxydant',
              '$\\mathrm{Fe}$ est le réducteur et $\\mathrm{Al_2O_3}$ est l’oxydant',
              'Aucun réactif n’échange d’électron',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Al cède ses électrons (il est oxydé : c’est le réducteur) ; Fe₂O₃ (via Fe³⁺) les capte (il est réduit : c’est l’oxydant).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q1',
          type: 'mcq',
          prompt: 'Lors du chauffage de l’oxyde de cuivre II ($\\mathrm{CuO}$) avec du carbone, que révèle le trouble de l’eau de chaux ?',
          options: [
            'La formation de dioxyde de carbone ($\\mathrm{CO_2}$) par oxydation du carbone',
            'La formation de dihydrogène ($\\mathrm{H_2}$)',
            'L’évaporation de cuivre liquide',
            'La formation d’alumine blanche',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le dioxyde de carbone CO₂ est caractérisé par le trouble de l’eau de chaux ; le carbone a été oxydé en CO₂.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q2',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de la réduction de l’oxyde de cuivre II par le carbone ?',
          options: [
            '$2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}$',
            '$\\mathrm{CuO} + \\mathrm{C} \\longrightarrow \\mathrm{Cu} + \\mathrm{CO_2}$',
            '$\\mathrm{CuO} + 2\\,\\mathrm{C} \\longrightarrow \\mathrm{Cu} + 2\\,\\mathrm{CO}$',
            '$2\\,\\mathrm{CuO} + 2\\,\\mathrm{C} \\longrightarrow \\mathrm{Cu_2C} + \\mathrm{CO_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Conservation des atomes : 2 Cu, 2 O et 1 C de part et d’autre dans 2 CuO + C → 2 Cu + CO₂.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q3',
          type: 'mcq',
          prompt: 'Qu’appelle-t-on « aluminothermie » dans la leçon ?',
          options: [
            'La réduction d’un oxyde métallique (tel que $\\mathrm{Fe_2O_3}$) par l’aluminium métallique',
            'La combustion de l’aluminium dans l’eau froide',
            'L’oxydation du fer par le carbone dans l’eau',
            'La distillation du pétrole brut sur alumine',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La réduction de l’oxyde ferrique Fe₂O₃ par l’aluminium Al, très exothermique, est communément appelée aluminothermie.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q4',
          type: 'mcq',
          prompt: 'Quelle est la nature chimique de la poudre blanche obtenue après la réaction entre $\\mathrm{Fe_2O_3}$ et $\\mathrm{Al}$ ?',
          options: [
            'L’oxyde d’aluminium ou alumine ($\\mathrm{Al_2O_3}$)',
            'L’oxyde de magnésium ($\\mathrm{MgO}$)',
            'Le sulfate de fer ($\\mathrm{FeSO_4}$)',
            'Le carbonate de calcium ($\\mathrm{CaCO_3}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’aluminium oxydé forme l’alumine Al₂O₃, oxyde ionique constitué d’ions Al³⁺ et O²⁻.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q5',
          type: 'mcq',
          prompt: 'Quelles sont les demi-équations électroniques de la réduction de $\\mathrm{Fe_2O_3}$ par $\\mathrm{Al}$ ?',
          options: [
            '$\\mathrm{Fe^{3+} + 3\\,e^- \\longrightarrow Fe}$ et $\\mathrm{Al \\longrightarrow Al^{3+} + 3\\,e^-}$',
            '$\\mathrm{Fe^{2+} + 2\\,e^- \\longrightarrow Fe}$ et $\\mathrm{Al^{3+} + 3\\,e^- \\longrightarrow Al}$',
            '$\\mathrm{Fe \\longrightarrow Fe^{3+} + 3\\,e^-}$ et $\\mathrm{Al^{3+} + 3\\,e^- \\longrightarrow Al}$',
            '$\\mathrm{O_2 + 4\\,e^- \\longrightarrow 2\\,O^{2-}}$ et $\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’ion ferrique Fe³⁺ est réduit en fer (gain de 3 e⁻) et l’aluminium Al est oxydé en Al³⁺ (perte de 3 e⁻).',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p02_q6',
          type: 'mcq',
          prompt: 'Dans la réaction $\\mathrm{Fe_2O_3 + 2\\,Al \\longrightarrow 2\\,Fe + Al_2O_3}$, quel réactif est le réducteur et quel réactif est l’oxydant ?',
          options: [
            '$\\mathrm{Al}$ est le réducteur et $\\mathrm{Fe_2O_3}$ est l’oxydant',
            '$\\mathrm{Fe_2O_3}$ est le réducteur et $\\mathrm{Al}$ est l’oxydant',
            '$\\mathrm{Fe}$ est le réducteur et $\\mathrm{Al_2O_3}$ est l’oxydant',
            'Aucun réactif n’échange d’électron',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Al cède ses électrons (il est oxydé : c’est le réducteur) ; Fe₂O₃ (via Fe³⁺) les capte (il est réduit : c’est l’oxydant).',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Nombre d’oxydation (n.o.) et règles de détermination
    // ========================================================================
    {
      id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03',
      order: 3,
      title: 'Nombre d’oxydation (n.o.) et règles de détermination',
      summary:
        'Définir le nombre d’oxydation (chiffre romain) et le calculer dans un corps pur simple, un ion monoatomique, un ion polyatomique et une molécule.',
      conceptExplanation:
        "Le **nombre d’oxydation** (ou degré d’oxydation, noté $\\text{n.o.}$) d’un élément dans un composé est un **nombre algébrique** indiquant son état d’oxydation. Par convention, il s’écrit en **chiffre romain précédé du signe $+$ ou $-$** (ou $0$ s’il est nul).\n\n**Règles de détermination (p. 3) :**\n1. **Corps pur simple** : le $\\text{n.o.}$ d’un élément à l’état de corps pur simple est **nul** ($0$) : $\\text{n.o.}(\\mathrm{Na}) = 0$, $\\text{n.o.}(\\mathrm{Fe}) = 0$, $\\text{n.o.}(\\mathrm{Cu}) = 0$, $\\text{n.o.}(\\mathrm{O_2}) = 0$, $\\text{n.o.}(\\mathrm{H_2}) = 0$.\n2. **Ion monoatomique** : son $\\text{n.o.}$ est **égal à sa charge** en chiffre romain : $\\text{n.o.}(\\mathrm{Fe^{2+}}) = +\\text{II}$, $\\text{n.o.}(\\mathrm{Al^{3+}}) = +\\text{III}$, $\\text{n.o.}(\\mathrm{O^{2-}}) = -\\text{II}$.\n3. **Ion polyatomique** : la somme algébrique des $\\text{n.o.}$ de tous ses atomes est égale à la **charge globale** de l’ion. Ex. pour $\\mathrm{SO_4^{2-}}$ : $\\text{n.o.}(\\mathrm{S}) + 4\\,\\text{n.o.}(\\mathrm{O}) = -\\text{II}$.\n4. **Molécule neutre** : la somme algébrique des $\\text{n.o.}$ de tous ses atomes est **nulle** ($0$). Ex. pour $\\mathrm{H_2O}$ : $2\\,\\text{n.o.}(\\mathrm{H}) + \\text{n.o.}(\\mathrm{O}) = 0$.\n5. **Valeurs usuelles** :\n   - Sauf dans $\\mathrm{O_2}$ ($0$), l’élément oxygène a le plus souvent $\\text{n.o.}(\\mathrm{O}) = -\\text{II}$.\n   - Sauf dans $\\mathrm{H_2}$ ($0$), l’élément hydrogène a le plus souvent $\\text{n.o.}(\\mathrm{H}) = +\\text{I}$.",
      keyRule:
        'Le n.o. s’écrit en chiffre romain (+I, −II…). Il vaut 0 dans un corps pur simple, la charge pour un ion monoatomique, et la somme des n.o. d’une espèce vaut sa charge globale (0 pour une molécule) avec n.o.(O) = −II et n.o.(H) = +I.',
      formulas: [
        {
          name: 'Somme dans une molécule et un ion polyatomique',
          formula: '\\sum \\text{n.o.} = 0 \\;(\\text{molécule}) \\qquad ; \\qquad \\sum \\text{n.o.} = q \\;(\\text{ion de charge } q)',
          note: 'Conventions usuelles : n.o.(O) = −II (hors O₂) et n.o.(H) = +I (hors H₂)',
        },
      ],
      workedExample: {
        title: 'Calculer le n.o. dans CO₂, Al₂O₃, H₂SO₄ et CH₄O (Activité p. 3 & Ex 4 p. 5)',
        statement:
          'Détermine le nombre d’oxydation de C dans $\\mathrm{CO_2}$ et $\\mathrm{CH_4O}$, de Al dans $\\mathrm{Al_2O_3}$ et de S dans $\\mathrm{H_2SO_4}$.',
        methodSteps: [
          '1) Dans CO₂ : n.o.(C) + 2×(−II) = 0 ⟹ n.o.(C) = +IV.',
          '2) Dans Al₂O₃ : 2 n.o.(Al) + 3×(−II) = 0 ⟹ 2 n.o.(Al) = +VI ⟹ n.o.(Al) = +III.',
          '3) Dans H₂SO₄ : 2×(+I) + n.o.(S) + 4×(−II) = 0 ⟹ n.o.(S) = +VI.',
          '4) Dans CH₄O : n.o.(C) + 4×(+I) + (−II) = 0 ⟹ n.o.(C) + II = 0 ⟹ n.o.(C) = −II.',
        ],
        conclusion:
          'On obtient respectivement +IV (C dans CO₂), +III (Al), +VI (S) et −II (C dans le méthanol CH₄O).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Notation',
          stepTheme: 'Corps pur & Ion',
          stepTitle: 'Connaître le n.o. d’un corps simple et d’un ion monoatomique',
          paragraphText:
            'Dans un corps pur simple (Cu, Fe, O₂), le n.o. vaut 0 ; dans un ion monoatomique (Al³⁺, O²⁻), il est égal à la charge écrite en chiffre romain.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q1',
            type: 'mcq',
            prompt: 'Que vaut le nombre d’oxydation de l’élément dans un ion monoatomique (Ex 4 p. 5) ?',
            options: [
              'Il est égal à la charge portée par l’ion (avec son signe, en chiffre romain)',
              'Il est toujours égal à zéro',
              'Il est égal à la valeur absolue de la charge sans signe',
              'Il vaut toujours −II',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour un ion monoatomique, n.o.(Fe²⁺) = +II, n.o.(Cr³⁺) = +III et n.o.(O²⁻) = −II : il conserve le signe de la charge.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'CO₂ & Al₂O₃',
          stepTheme: 'Activité p. 3',
          stepTitle: 'Calculer n.o.(C) dans CO₂ et n.o.(Al) dans Al₂O₃',
          paragraphText:
            'Dans une molécule ou un cristal neutre, la somme des n.o. est nulle et n.o.(O) = −II.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q2',
            type: 'mcq',
            prompt: 'Quels sont respectivement les nombres d’oxydation de $\\mathrm{C}$ dans $\\mathrm{CO_2}$ et de $\\mathrm{Al}$ dans $\\mathrm{Al_2O_3}$ ?',
            options: [
              '$+\\text{IV}$ et $+\\text{III}$',
              '$+\\text{II}$ et $+\\text{III}$',
              '$-\\text{IV}$ et $-\\text{III}$',
              '$+\\text{IV}$ et $+\\text{VI}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n.o.(C) + 2(−II) = 0 ⇒ n.o.(C) = +IV ; 2 n.o.(Al) + 3(−II) = 0 ⇒ n.o.(Al) = +III.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'H₂SO₄',
          stepTheme: 'Activité p. 3 & Ex 5',
          stepTitle: 'Calculer le n.o. du soufre dans H₂SO₄ et SO₂',
          paragraphText:
            'En posant n.o.(H) = +I et n.o.(O) = −II, on résout l’équation de neutralité électrique de H₂SO₄.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q3',
            type: 'mcq',
            prompt: 'Que vaut le nombre d’oxydation du soufre $\\mathrm{S}$ dans l’acide sulfurique $\\mathrm{H_2SO_4}$ ?',
            options: [
              '$+\\text{VI}$',
              '$+\\text{IV}$',
              '$-\\text{II}$',
              '$+\\text{II}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '2(+I) + n.o.(S) + 4(−II) = 0 ⇒ 2 + n.o.(S) − 8 = 0 ⇒ n.o.(S) = +VI.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Méthanol CH₄O',
          stepTheme: 'Exercice 4 p. 5',
          stepTitle: 'Calculer le n.o. du carbone dans le méthanol CH₄O',
          paragraphText:
            'Même en chimie organique, la règle de somme nulle donne immédiatement n.o.(C) à partir de 4 atomes H (+I) et 1 atome O (−II).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q4',
            type: 'mcq',
            prompt: 'Dans la molécule de méthanol $\\mathrm{CH_4O}$, quel est le nombre d’oxydation de l’élément carbone ?',
            options: [
              '$-\\text{II}$',
              '$0$',
              '$+\\text{II}$',
              '$+\\text{IV}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n.o.(C) + 4(+I) + (−II) = 0 ⇒ n.o.(C) + 2 = 0 ⇒ n.o.(C) = −II.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Ion polyatomique',
          stepTheme: 'MnO₄⁻ et Cr₂O₇²⁻',
          stepTitle: 'Déterminer un n.o. dans un ion polyatomique',
          paragraphText:
            'Dans un ion polyatomique de charge q, la somme algébrique des n.o. vaut q (ex. −I pour MnO₄⁻, −II pour Cr₂O₇²⁻).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q5',
            type: 'mcq',
            prompt: 'Quel est le nombre d’oxydation du chrome $\\mathrm{Cr}$ dans l’ion dichromate $\\mathrm{Cr_2O_7^{2-}}$ ?',
            options: [
              '$+\\text{VI}$',
              '$+\\text{III}$',
              '$+\\text{VII}$',
              '$-\\text{II}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '2 n.o.(Cr) + 7(−II) = −II ⇒ 2 n.o.(Cr) = +XII ⇒ n.o.(Cr) = +VI.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Couples redox',
          stepTheme: 'Exercice 4 Q4 p. 6',
          stepTitle: 'Vérifier si deux espèces forment un couple redox via le n.o.',
          paragraphText:
            'Deux espèces forment un couple redox si et seulement si un élément commun change de nombre d’oxydation entre les deux formes (contrairement à un couple acide-base).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q6',
            type: 'mcq',
            prompt: 'Parmi les couples formés avec $\\mathrm{H_3O^+}$, $\\mathrm{H_2}$ et $\\mathrm{H_2O}$ (Ex 4 p. 6), lequel N’est PAS un couple redox ?',
            options: [
              '$\\mathrm{H_3O^+/H_2O}$ (car le n.o. de H reste $+\\text{I}$ dans les deux espèces)',
              '$\\mathrm{H_3O^+/H_2}$',
              '$\\mathrm{H_2O/H_2}$',
              'Tous sont des couples redox',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans H₃O⁺ et H₂O, n.o.(H) = +I et n.o.(O) = −II : aucun élément ne change de n.o. (couple acide-base). En revanche, H passe de +I à 0 dans H₃O⁺/H₂ et H₂O/H₂.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q1',
          type: 'mcq',
          prompt: 'Que vaut le nombre d’oxydation de l’élément dans un ion monoatomique (Ex 4 p. 5) ?',
          options: [
            'Il est égal à la charge portée par l’ion (avec son signe, en chiffre romain)',
            'Il est toujours égal à zéro',
            'Il est égal à la valeur absolue de la charge sans signe',
            'Il vaut toujours −II',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour un ion monoatomique, n.o.(Fe²⁺) = +II, n.o.(Cr³⁺) = +III et n.o.(O²⁻) = −II : il conserve le signe de la charge.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q2',
          type: 'mcq',
          prompt: 'Quels sont respectivement les nombres d’oxydation de $\\mathrm{C}$ dans $\\mathrm{CO_2}$ et de $\\mathrm{Al}$ dans $\\mathrm{Al_2O_3}$ ?',
          options: [
            '$+\\text{IV}$ et $+\\text{III}$',
            '$+\\text{II}$ et $+\\text{III}$',
            '$-\\text{IV}$ et $-\\text{III}$',
            '$+\\text{IV}$ et $+\\text{VI}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n.o.(C) + 2(−II) = 0 ⇒ n.o.(C) = +IV ; 2 n.o.(Al) + 3(−II) = 0 ⇒ n.o.(Al) = +III.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q3',
          type: 'mcq',
          prompt: 'Que vaut le nombre d’oxydation du soufre $\\mathrm{S}$ dans l’acide sulfurique $\\mathrm{H_2SO_4}$ ?',
          options: [
            '$+\\text{VI}$',
            '$+\\text{IV}$',
            '$-\\text{II}$',
            '$+\\text{II}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '2(+I) + n.o.(S) + 4(−II) = 0 ⇒ 2 + n.o.(S) − 8 = 0 ⇒ n.o.(S) = +VI.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q4',
          type: 'mcq',
          prompt: 'Dans la molécule de méthanol $\\mathrm{CH_4O}$, quel est le nombre d’oxydation de l’élément carbone ?',
          options: [
            '$-\\text{II}$',
            '$0$',
            '$+\\text{II}$',
            '$+\\text{IV}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n.o.(C) + 4(+I) + (−II) = 0 ⇒ n.o.(C) + 2 = 0 ⇒ n.o.(C) = −II.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q5',
          type: 'mcq',
          prompt: 'Quel est le nombre d’oxydation du chrome $\\mathrm{Cr}$ dans l’ion dichromate $\\mathrm{Cr_2O_7^{2-}}$ ?',
          options: [
            '$+\\text{VI}$',
            '$+\\text{III}$',
            '$+\\text{VII}$',
            '$-\\text{II}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '2 n.o.(Cr) + 7(−II) = −II ⇒ 2 n.o.(Cr) = +XII ⇒ n.o.(Cr) = +VI.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p03_q6',
          type: 'mcq',
          prompt: 'Parmi les couples formés avec $\\mathrm{H_3O^+}$, $\\mathrm{H_2}$ et $\\mathrm{H_2O}$ (Ex 4 p. 6), lequel N’est PAS un couple redox ?',
          options: [
            '$\\mathrm{H_3O^+/H_2O}$ (car le n.o. de H reste $+\\text{I}$ dans les deux espèces)',
            '$\\mathrm{H_3O^+/H_2}$',
            '$\\mathrm{H_2O/H_2}$',
            'Tous sont des couples redox',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans H₃O⁺ et H₂O, n.o.(H) = +I et n.o.(O) = −II : aucun élément ne change de n.o. (couple acide-base). En revanche, H passe de +I à 0 dans H₃O⁺/H₂ et H₂O/H₂.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Interpréter une réaction redox à l’aide du n.o.
    // ========================================================================
    {
      id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04',
      order: 4,
      title: 'Interpréter une réaction redox grâce au nombre d’oxydation',
      summary:
        'Reconnaître une réaction d’oxydoréduction par la variation des n.o. et identifier oxydation, réduction, oxydant et réducteur.',
      conceptExplanation:
        "Le nombre d’oxydation fournit un critère universel pour analyser toute réaction chimique (p. 4–5) :\n\n1. **Reconnaître une réaction redox** : une transformation est une réaction d’oxydoréduction **si et seulement si au moins un élément change de nombre d’oxydation** entre les réactifs et les produits.\n2. **Oxydation et réducteur** : si le $\\text{n.o.}$ d’un élément **augmente**, cet élément subit une **oxydation** ; l’espèce chimique qui le contient est le **réducteur**.\n3. **Réduction et oxydant** : si le $\\text{n.o.}$ d’un élément **diminue**, cet élément subit une **réduction** ; l’espèce chimique qui le contient est l’**oxydant**.",
      keyRule:
        'n.o. augmente ⟹ oxydation (le réactif est le réducteur). n.o. diminue ⟹ réduction (le réactif est l’oxydant). Si aucun n.o. ne varie, ce n’est pas une réaction redox.',
      formulas: [
        {
          name: 'Critère du nombre d’oxydation',
          formula: '\\Delta\\text{n.o.} > 0 \\iff \\text{Oxydation (Réducteur)} \\quad ; \\quad \\Delta\\text{n.o.} < 0 \\iff \\text{Réduction (Oxydant)}',
          note: 'L’oxygène reste à −II dans CuO et CO₂ : seuls Cu et C changent de n.o.',
        },
      ],
      workedExample: {
        title: 'Analyser 2 CuO + C → 2 Cu + CO₂ par les n.o. (Exercices 1 et 3 p. 5)',
        statement:
          'Détermine les n.o. de chaque élément dans $2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}$ puis identifie l’oxydation, la réduction, l’oxydant et le réducteur.',
        methodSteps: [
          '1) Cuivre : passe de n.o.(Cu) = +II dans CuO à 0 dans Cu (diminution de −II) ⟹ réduction ; CuO est l’oxydant.',
          '2) Carbone : passe de n.o.(C) = 0 dans C à +IV dans CO₂ (augmentation de +IV) ⟹ oxydation ; C est le réducteur.',
          '3) Oxygène : reste à −II dans CuO et dans CO₂ (spectateur du point de vue redox).',
        ],
        conclusion:
          'CuO (oxydant) est réduit en Cu tandis que C (réducteur) est oxydé en CO₂.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Règle clé',
          stepTheme: 'Augmentation du n.o.',
          stepTitle: 'Associer augmentation du n.o. et oxydation',
          paragraphText:
            'Au cours d’une réaction redox, l’espèce chimique qui contient un élément dont le nombre d’oxydation augmente subit l’oxydation : c’est le réducteur (Ex 2 p. 5).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q1',
            type: 'mcq',
            prompt: 'Dans une réaction d’oxydoréduction, que caractérise l’augmentation du nombre d’oxydation d’un élément ?',
            options: [
              'Une oxydation : le corps qui contient cet élément est le réducteur',
              'Une réduction : le corps qui contient cet élément est l’oxydant',
              'Une réaction purement acido-basique',
              'Un équilibre sans transfert d’électrons',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Quand n.o. augmente (ex. Mg : 0 → +II, ou C : 0 → +IV), l’élément perd des électrons : il subit une oxydation et son réactif est le réducteur.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Réduction',
          stepTheme: 'Diminution du n.o.',
          stepTitle: 'Associer diminution du n.o. et réduction',
          paragraphText:
            'Inversement, la diminution du nombre d’oxydation d’un élément caractérise sa réduction ; le corps qui le contient est l’oxydant.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q2',
            type: 'mcq',
            prompt: 'La diminution du nombre d’oxydation d’un élément au cours d’une réaction chimique correspond à (Ex 4 p. 6) :',
            options: [
              'Sa réduction ; le réactif qui le contient est l’oxydant',
              'Son oxydation ; le réactif qui le contient est le réducteur',
              'La conservation de sa charge',
              'Une précipitation sans échange d’électrons',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Quand n.o. diminue (ex. O₂ : 0 → −II, ou CuO : +II → 0), il y a gain d’électrons : réduction de l’oxydant.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: '2 CuO + C',
          stepTheme: 'Exercice 1 & 3 p. 5',
          stepTitle: 'Suivre les n.o. dans 2 CuO + C → 2 Cu + CO₂',
          paragraphText:
            'Le cuivre passe de +II (dans CuO) à 0 (dans Cu) tandis que le carbone passe de 0 (dans C) à +IV (dans CO₂).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q3',
            type: 'mcq',
            prompt: 'Dans l’équation $2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}$, comment varient les nombres d’oxydation de $\\mathrm{Cu}$ et de $\\mathrm{C}$ ?',
            options: [
              '$\\mathrm{Cu}$ passe de $+\\text{II}$ à $0$ (réduit) et $\\mathrm{C}$ passe de $0$ à $+\\text{IV}$ (oxydé)',
              '$\\mathrm{Cu}$ passe de $0$ à $+\\text{II}$ (oxydé) et $\\mathrm{C}$ passe de $+\\text{IV}$ à $0$ (réduit)',
              '$\\mathrm{Cu}$ passe de $+\\text{I}$ à $0$ et $\\mathrm{C}$ reste à $0$',
              'Aucun nombre d’oxydation ne varie',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans CuO, n.o.(Cu) = +II → 0 dans Cu (diminution = réduction). Dans C, n.o.(C) = 0 → +IV dans CO₂ (augmentation = oxydation).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Aluminothermie Cr',
          stepTheme: 'Situation p. 4',
          stepTitle: 'Interpréter Cr₂O₃ + 2 Al → 2 Cr + Al₂O₃',
          paragraphText:
            'Dans la métallurgie du chrome par aluminothermie, n.o.(Cr) passe de +III à 0 et n.o.(Al) passe de 0 à +III.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q4',
            type: 'mcq',
            prompt: 'Dans $\\mathrm{Cr_2O_3 + 2\\,Al \\longrightarrow 2\\,Cr + Al_2O_3}$ (Situation p. 4), pourquoi s’agit-il d’une réaction redox et quel est l’oxydant ?',
            options: [
              '$\\text{n.o.(Cr)}$ passe de $+\\text{III}$ à $0$ et $\\text{n.o.(Al)}$ de $0$ à $+\\text{III}$ ; $\\mathrm{Cr_2O_3}$ est l’oxydant',
              '$\\text{n.o.(O)}$ passe de $0$ à $-\\text{II}$ ; $\\mathrm{Al}$ est l’oxydant',
              '$\\text{n.o.(Cr)}$ augmente de $0$ à $+\\text{III}$ ; $\\mathrm{Al_2O_3}$ est le réducteur',
              'Les nombres d’oxydation restent constants',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n.o.(Cr) diminue (+III → 0) : Cr₂O₃ est réduit, c’est donc l’oxydant. n.o.(Al) augmente (0 → +III) : Al est le réducteur.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège classique',
          stepTheme: 'Réaction non redox',
          stepTitle: 'Distinguer réaction redox et réaction acido-basique / précipitation',
          paragraphText:
            'Si tous les éléments conservent exactement le même nombre d’oxydation des réactifs aux produits (ex. CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂), la réaction n’est pas une oxydoréduction.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q5',
            type: 'mcq',
            prompt: 'La réaction $\\mathrm{CuO + 2\\,H^+ \\longrightarrow Cu^{2+} + H_2O}$ est-elle une réaction d’oxydoréduction ?',
            options: [
              'Non, car $\\text{n.o.(Cu)} = +\\text{II}$, $\\text{n.o.(O)} = -\\text{II}$ et $\\text{n.o.(H)} = +\\text{I}$ restent tous inchangés',
              'Oui, car $\\mathrm{Cu^{2+}}$ gagne deux électrons',
              'Oui, car l’eau se forme toujours par oxydoréduction',
              'Oui, car le cuivre passe de $+\\text{II}$ à $0$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Aucun élément ne change de nombre d’oxydation (+II, −II et +I des deux côtés) : c’est une réaction acide-base, pas une réaction redox.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'C + H₂SO₄',
          stepTheme: 'Exercice 5 p. 6',
          stepTitle: 'Vérifier le caractère redox de C + H₂SO₄',
          paragraphText:
            'À chaud, l’acide sulfurique concentré transforme le carbone C en CO₂ en donnant SO₂ et H₂O : S passe de +VI à +IV et C de 0 à +IV.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q6',
            type: 'mcq',
            prompt: 'Lors de la réaction de $\\mathrm{H_2SO_4}$ concentré à chaud sur le carbone (donnant $\\mathrm{SO_2}$, $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$), quels éléments changent de n.o. ?',
            options: [
              'Le soufre ($+\\text{VI} \\to +\\text{IV}$, réduit) et le carbone ($0 \\to +\\text{IV}$, oxydé)',
              'L’hydrogène ($+\\text{I} \\to 0$) et l’oxygène ($-\\text{II} \\to 0$)',
              'Uniquement le carbone ($+\\text{II} \\to +\\text{IV}$)',
              'Aucun élément ne change de n.o.',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans H₂SO₄, n.o.(S) = +VI → +IV dans SO₂ (réduction) ; dans C, n.o.(C) = 0 → +IV dans CO₂ (oxydation).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q1',
          type: 'mcq',
          prompt: 'Dans une réaction d’oxydoréduction, que caractérise l’augmentation du nombre d’oxydation d’un élément ?',
          options: [
            'Une oxydation : le corps qui contient cet élément est le réducteur',
            'Une réduction : le corps qui contient cet élément est l’oxydant',
            'Une réaction purement acido-basique',
            'Un équilibre sans transfert d’électrons',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Quand n.o. augmente (ex. Mg : 0 → +II, ou C : 0 → +IV), l’élément perd des électrons : il subit une oxydation et son réactif est le réducteur.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q2',
          type: 'mcq',
          prompt: 'La diminution du nombre d’oxydation d’un élément au cours d’une réaction chimique correspond à (Ex 4 p. 6) :',
          options: [
            'Sa réduction ; le réactif qui le contient est l’oxydant',
            'Son oxydation ; le réactif qui le contient est le réducteur',
            'La conservation de sa charge',
            'Une précipitation sans échange d’électrons',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Quand n.o. diminue (ex. O₂ : 0 → −II, ou CuO : +II → 0), il y a gain d’électrons : réduction de l’oxydant.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q3',
          type: 'mcq',
          prompt: 'Dans l’équation $2\\,\\mathrm{CuO} + \\mathrm{C} \\longrightarrow 2\\,\\mathrm{Cu} + \\mathrm{CO_2}$, comment varient les nombres d’oxydation de $\\mathrm{Cu}$ et de $\\mathrm{C}$ ?',
          options: [
            '$\\mathrm{Cu}$ passe de $+\\text{II}$ à $0$ (réduit) et $\\mathrm{C}$ passe de $0$ à $+\\text{IV}$ (oxydé)',
            '$\\mathrm{Cu}$ passe de $0$ à $+\\text{II}$ (oxydé) et $\\mathrm{C}$ passe de $+\\text{IV}$ à $0$ (réduit)',
            '$\\mathrm{Cu}$ passe de $+\\text{I}$ à $0$ et $\\mathrm{C}$ reste à $0$',
            'Aucun nombre d’oxydation ne varie',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans CuO, n.o.(Cu) = +II → 0 dans Cu (diminution = réduction). Dans C, n.o.(C) = 0 → +IV dans CO₂ (augmentation = oxydation).',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q4',
          type: 'mcq',
          prompt: 'Dans $\\mathrm{Cr_2O_3 + 2\\,Al \\longrightarrow 2\\,Cr + Al_2O_3}$ (Situation p. 4), pourquoi s’agit-il d’une réaction redox et quel est l’oxydant ?',
          options: [
            '$\\text{n.o.(Cr)}$ passe de $+\\text{III}$ à $0$ et $\\text{n.o.(Al)}$ de $0$ à $+\\text{III}$ ; $\\mathrm{Cr_2O_3}$ est l’oxydant',
            '$\\text{n.o.(O)}$ passe de $0$ à $-\\text{II}$ ; $\\mathrm{Al}$ est l’oxydant',
            '$\\text{n.o.(Cr)}$ augmente de $0$ à $+\\text{III}$ ; $\\mathrm{Al_2O_3}$ est le réducteur',
            'Les nombres d’oxydation restent constants',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n.o.(Cr) diminue (+III → 0) : Cr₂O₃ est réduit, c’est donc l’oxydant. n.o.(Al) augmente (0 → +III) : Al est le réducteur.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q5',
          type: 'mcq',
          prompt: 'La réaction $\\mathrm{CuO + 2\\,H^+ \\longrightarrow Cu^{2+} + H_2O}$ est-elle une réaction d’oxydoréduction ?',
          options: [
            'Non, car $\\text{n.o.(Cu)} = +\\text{II}$, $\\text{n.o.(O)} = -\\text{II}$ et $\\text{n.o.(H)} = +\\text{I}$ restent tous inchangés',
            'Oui, car $\\mathrm{Cu^{2+}}$ gagne deux électrons',
            'Oui, car l’eau se forme toujours par oxydoréduction',
            'Oui, car le cuivre passe de $+\\text{II}$ à $0$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Aucun élément ne change de nombre d’oxydation (+II, −II et +I des deux côtés) : c’est une réaction acide-base, pas une réaction redox.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p04_q6',
          type: 'mcq',
          prompt: 'Lors de la réaction de $\\mathrm{H_2SO_4}$ concentré à chaud sur le carbone (donnant $\\mathrm{SO_2}$, $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$), quels éléments changent de n.o. ?',
          options: [
            'Le soufre ($+\\text{VI} \\to +\\text{IV}$, réduit) et le carbone ($0 \\to +\\text{IV}$, oxydé)',
            'L’hydrogène ($+\\text{I} \\to 0$) et l’oxygène ($-\\text{II} \\to 0$)',
            'Uniquement le carbone ($+\\text{II} \\to +\\text{IV}$)',
            'Aucun élément ne change de n.o.',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans H₂SO₄, n.o.(S) = +VI → +IV dans SO₂ (réduction) ; dans C, n.o.(C) = 0 → +IV dans CO₂ (oxydation).',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Équilibrer une équation-bilan par variation de n.o.
    // ========================================================================
    {
      id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05',
      order: 5,
      title: 'Équilibrer une équation-bilan par variation du n.o.',
      summary:
        'Appliquer la conservation algébrique des variations de nombre d’oxydation (Σ Δn.o. = 0) pour équilibrer des réactions complexes (C + H₂SO₄, Fe₂O₃ + CO).',
      conceptExplanation:
        "Les réactions par voie sèche ou concentrées s’équilibrent très rapidement grâce à la méthode des **variations de nombre d’oxydation** (Exercices 5 et 6 p. 6–7) :\n\n**Méthode en 3 étapes :**\n1. **Calculer la variation $\\Delta\\text{n.o.} = \\text{n.o.}_{\\text{final}} - \\text{n.o.}_{\\text{initial}}$** pour chaque atome dont l’état d’oxydation change.\n2. **Égaliser l’augmentation totale et la diminution totale** : si $x$ atomes subissent $\\Delta\\text{n.o.}_1 > 0$ et $y$ atomes subissent $\\Delta\\text{n.o.}_2 < 0$, alors :\n   $$x\\,\\Delta\\text{n.o.}_1 + y\\,\\Delta\\text{n.o.}_2 = 0$$\n3. **Compléter les atomes non redox** ($\\mathrm{O}$ et $\\mathrm{H}$) à l’aide de $\\mathrm{H_2O}$ (et $\\mathrm{H^+}$ si besoin en milieu acide).\n\n- **Application 1 (Ex 5 p. 6)** : $\\mathrm{C + H_2SO_4 \\longrightarrow SO_2 + CO_2 + \\dots}$\n  - Pour C : $0 \\to +\\text{IV}$, soit $\\Delta\\text{n.o.(C)} = +4$. Pour S : $+\\text{VI} \\to +\\text{IV}$, soit $\\Delta\\text{n.o.(S)} = -2$.\n  - Conservation : $4x = 2y \\implies y = 2x$ ($x = 1$, $y = 2$), puis ajout de $2\\,\\mathrm{H_2O}$ à droite :\n  $$\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + CO_2 + 2\\,H_2O}$$\n- **Application 2 (Ex 6 p. 7)** : $\\mathrm{Fe_2O_3 + CO \\longrightarrow 2\\,Fe + CO_2}$\n  - Chaque atome Fe passe de $+\\text{III}$ à $0$ ($\\Delta = -3$, soit $-6$ pour $2\\,\\mathrm{Fe}$ dans $\\mathrm{Fe_2O_3}$). C dans CO passe de $+\\text{II}$ à $+\\text{IV}$ ($\\Delta = +2$).\n  - Il faut $3\\,\\mathrm{CO}$ pour compenser les $2$ atomes de fer ($3 \\times 2 = 6$) :\n  $$\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 2\\,Fe + 3\\,CO_2}$$",
      keyRule:
        'Pour équilibrer par le n.o., on choisit les plus petits entiers x et y tels que la hausse totale de n.o. compense exactement la baisse totale (x·Δn.o.₁ + y·Δn.o.₂ = 0), puis on équilibre H et O avec H₂O.',
      formulas: [
        {
          name: 'Conservation des variations de n.o.',
          formula: '\\sum n_{\\text{atomes}} \\cdot \\Delta\\text{n.o.} = 0',
          note: 'Équivaut à la conservation des électrons échangés entre réducteur et oxydant',
        },
      ],
      workedExample: {
        title: 'Équilibrer Fe₂O₃ + CO → Fe + CO₂ étape par étape (Exercice 6 p. 7)',
        statement:
          'Retrouve les coefficients stœchiométriques de la réduction de l’oxyde de fer III par le monoxyde de carbone à l’aide du nombre d’oxydation.',
        methodSteps: [
          '1) Dans Fe₂O₃ : n.o.(Fe) = +III → 0 dans Fe, soit Δn.o.(Fe) = −3 par atome de fer (−6 pour 1 motif Fe₂O₃).',
          '2) Dans CO : n.o.(C) = +II → +IV dans CO₂, soit Δn.o.(C) = +2 par atome de carbone.',
          '3) Compensation pour y atomes Fe et x atomes C : 2x = 3y ; avec y = 2 (pour Fe₂O₃), on obtient x = 3.',
          '4) Équation finale : Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂ (vérification O : 3 + 3 = 6 = 3×2).',
        ],
        conclusion:
          'L’équation-bilan équilibrée est Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode n.o.',
          stepTheme: 'C + H₂SO₄',
          stepTitle: 'Calculer Δn.o.(C) et Δn.o.(S) dans C + H₂SO₄',
          paragraphText:
            'Dans la réaction à chaud du carbone avec l’acide sulfurique concentré, le carbone augmente de +4 tandis que le soufre diminue de −2.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q1',
            type: 'mcq',
            prompt: 'Lors de la transformation de $\\mathrm{C}$ en $\\mathrm{CO_2}$ et de $\\mathrm{H_2SO_4}$ en $\\mathrm{SO_2}$, quelles sont les variations $\\Delta\\text{n.o.(C)}$ et $\\Delta\\text{n.o.(S)}$ ?',
            options: [
              '$\\Delta\\text{n.o.(C)} = +4$ et $\\Delta\\text{n.o.(S)} = -2$',
              '$\\Delta\\text{n.o.(C)} = -4$ et $\\Delta\\text{n.o.(S)} = +2$',
              '$\\Delta\\text{n.o.(C)} = +2$ et $\\Delta\\text{n.o.(S)} = -4$',
              '$\\Delta\\text{n.o.(C)} = +4$ et $\\Delta\\text{n.o.(S)} = -4$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Δn.o. = n.o.(final) − n.o.(initial) : pour C, +IV − 0 = +4 ; pour S, +IV − (+VI) = −2.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Équilibrage',
          stepTheme: 'Exercice 5 p. 6',
          stepTitle: 'Compléter l’équation C + 2 H₂SO₄ → 2 SO₂ + CO₂ + …',
          paragraphText:
            'Une fois les coefficients redox posés (1 C pour 2 H₂SO₄), on assure la conservation des atomes H et O à l’aide de molécules d’eau H₂O.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q2',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan complète et équilibrée de la réaction du carbone avec l’acide sulfurique concentré à chaud ?',
            options: [
              '$\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + CO_2 + 2\\,H_2O}$',
              '$\\mathrm{C + H_2SO_4 \\longrightarrow SO_2 + CO_2 + H_2O}$',
              '$2\\,\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + 2\\,CO_2 + H_2O}$',
              '$\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + CO_2 + 4\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Vérification : 1 C, 4 H (= 2 H₂O), 2 S et 8 O (= 2×2 + 2 + 2×1) des deux côtés.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'n.o. dans CO',
          stepTheme: 'Exercice 6 p. 7',
          stepTitle: 'Trouver le n.o. du carbone dans CO',
          paragraphText:
            'Dans le monoxyde de carbone CO, l’oxygène vaut −II ; la neutralité de la molécule fixe aussitôt le n.o. du carbone.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q3',
            type: 'mcq',
            prompt: 'Quel est le nombre d’oxydation du carbone dans le monoxyde de carbone $\\mathrm{CO}$ ?',
            options: [
              '$+\\text{II}$',
              '$+\\text{IV}$',
              '$-\\text{II}$',
              '$0$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n.o.(C) + n.o.(O) = 0 et n.o.(O) = −II ⇒ n.o.(C) = +II.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Fe₂O₃ + CO',
          stepTheme: 'Exercice 6 p. 7',
          stepTitle: 'Équilibrer Fe₂O₃ + CO → Fe + CO₂',
          paragraphText:
            'Chaque Fe³⁺ baisse de 3 unités tandis que C dans CO monte de 2 unités : pour 2 atomes de fer (dans Fe₂O₃), il faut 3 molécules de CO.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de la réduction de l’oxyde de fer III par le monoxyde de carbone ?',
            options: [
              '$\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 2\\,Fe + 3\\,CO_2}$',
              '$\\mathrm{Fe_2O_3 + CO \\longrightarrow 2\\,Fe + CO_2}$',
              '$\\mathrm{Fe_2O_3 + 2\\,CO \\longrightarrow 2\\,Fe + 2\\,CO_2}$',
              '$2\\,\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 4\\,Fe + 3\\,CO_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '2 Fe (+III → 0, total −6) compensent 3 C (+II → +IV, total +6). Les 6 atomes O (3 + 3) se retrouvent dans 3 CO₂.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Rôles dans Fe₂O₃ + CO',
          stepTheme: 'Exercice 6 Q2–3 p. 7',
          stepTitle: 'Identifier l’espèce qui capte et celle qui cède les électrons',
          paragraphText:
            'L’oxyde de fer III contient Fe³⁺ dont le n.o. diminue (capte les électrons), alors que CO contient C dont le n.o. augmente (cède les électrons).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q5',
            type: 'mcq',
            prompt: 'Dans la réaction $\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 2\\,Fe + 3\\,CO_2}$, quelle espèce capte des électrons et quelle espèce en cède ?',
            options: [
              '$\\mathrm{Fe_2O_3}$ (oxydant) capte des électrons et $\\mathrm{CO}$ (réducteur) en cède',
              '$\\mathrm{CO}$ capte des électrons et $\\mathrm{Fe_2O_3}$ en cède',
              '$\\mathrm{Fe}$ capte des électrons et $\\mathrm{CO_2}$ en cède',
              'Il n’y a aucun échange d’électrons',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Fe₂O₃ (Fe³⁺ → Fe) est l’oxydant (capte 3 e⁻ par Fe) et CO (+II → +IV) est le réducteur (cède 2 e⁻ par C).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Généralisation',
          stepTheme: 'Équilibrage rapide',
          stepTitle: 'Équilibrer Cu + HNO₃ → Cu²⁺ + NO (en n.o.)',
          paragraphText:
            'Cu passe de 0 à +II (+2) et N dans NO₃⁻ (+V) passe à +II dans NO (−3) : il faut donc 3 Cu pour 2 NO₃⁻ (6 électrons échangés).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q6',
            type: 'mcq',
            prompt: 'Dans la réduction de $\\mathrm{NO_3^-}$ (n.o.(N) = $+\\text{V}$) en $\\mathrm{NO}$ par $\\mathrm{Cu}$ (donnant $\\mathrm{Cu^{2+}}$), quel rapport stœchiométrique $n(\\mathrm{Cu})/n(\\mathrm{NO_3^-})$ impose la règle des n.o. ?',
            options: [
              '$3\\,\\mathrm{Cu}$ pour $2\\,\\mathrm{NO_3^-}$',
              '$2\\,\\mathrm{Cu}$ pour $3\\,\\mathrm{NO_3^-}$',
              '$1\\,\\mathrm{Cu}$ pour $1\\,\\mathrm{NO_3^-}$',
              '$5\\,\\mathrm{Cu}$ pour $1\\,\\mathrm{NO_3^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Δn.o.(Cu) = +2 et Δn.o.(N) = +II − (+V) = −3. Pour annuler la somme : 3×(+2) + 2×(−3) = 0, soit 3 Cu pour 2 NO₃⁻.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q1',
          type: 'mcq',
          prompt: 'Lors de la transformation de $\\mathrm{C}$ en $\\mathrm{CO_2}$ et de $\\mathrm{H_2SO_4}$ en $\\mathrm{SO_2}$, quelles sont les variations $\\Delta\\text{n.o.(C)}$ et $\\Delta\\text{n.o.(S)}$ ?',
          options: [
            '$\\Delta\\text{n.o.(C)} = +4$ et $\\Delta\\text{n.o.(S)} = -2$',
            '$\\Delta\\text{n.o.(C)} = -4$ et $\\Delta\\text{n.o.(S)} = +2$',
            '$\\Delta\\text{n.o.(C)} = +2$ et $\\Delta\\text{n.o.(S)} = -4$',
            '$\\Delta\\text{n.o.(C)} = +4$ et $\\Delta\\text{n.o.(S)} = -4$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Δn.o. = n.o.(final) − n.o.(initial) : pour C, +IV − 0 = +4 ; pour S, +IV − (+VI) = −2.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q2',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan complète et équilibrée de la réaction du carbone avec l’acide sulfurique concentré à chaud ?',
          options: [
            '$\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + CO_2 + 2\\,H_2O}$',
            '$\\mathrm{C + H_2SO_4 \\longrightarrow SO_2 + CO_2 + H_2O}$',
            '$2\\,\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + 2\\,CO_2 + H_2O}$',
            '$\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + CO_2 + 4\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Vérification : 1 C, 4 H (= 2 H₂O), 2 S et 8 O (= 2×2 + 2 + 2×1) des deux côtés.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q3',
          type: 'mcq',
          prompt: 'Quel est le nombre d’oxydation du carbone dans le monoxyde de carbone $\\mathrm{CO}$ ?',
          options: [
            '$+\\text{II}$',
            '$+\\text{IV}$',
            '$-\\text{II}$',
            '$0$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n.o.(C) + n.o.(O) = 0 et n.o.(O) = −II ⇒ n.o.(C) = +II.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q4',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de la réduction de l’oxyde de fer III par le monoxyde de carbone ?',
          options: [
            '$\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 2\\,Fe + 3\\,CO_2}$',
            '$\\mathrm{Fe_2O_3 + CO \\longrightarrow 2\\,Fe + CO_2}$',
            '$\\mathrm{Fe_2O_3 + 2\\,CO \\longrightarrow 2\\,Fe + 2\\,CO_2}$',
            '$2\\,\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 4\\,Fe + 3\\,CO_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '2 Fe (+III → 0, total −6) compensent 3 C (+II → +IV, total +6). Les 6 atomes O (3 + 3) se retrouvent dans 3 CO₂.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q5',
          type: 'mcq',
          prompt: 'Dans la réaction $\\mathrm{Fe_2O_3 + 3\\,CO \\longrightarrow 2\\,Fe + 3\\,CO_2}$, quelle espèce capte des électrons et quelle espèce en cède ?',
          options: [
            '$\\mathrm{Fe_2O_3}$ (oxydant) capte des électrons et $\\mathrm{CO}$ (réducteur) en cède',
            '$\\mathrm{CO}$ capte des électrons et $\\mathrm{Fe_2O_3}$ en cède',
            '$\\mathrm{Fe}$ capte des électrons et $\\mathrm{CO_2}$ en cède',
            'Il n’y a aucun échange d’électrons',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Fe₂O₃ (Fe³⁺ → Fe) est l’oxydant (capte 3 e⁻ par Fe) et CO (+II → +IV) est le réducteur (cède 2 e⁻ par C).',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p05_q6',
          type: 'mcq',
          prompt: 'Dans la réduction de $\\mathrm{NO_3^-}$ (n.o.(N) = $+\\text{V}$) en $\\mathrm{NO}$ par $\\mathrm{Cu}$ (donnant $\\mathrm{Cu^{2+}}$), quel rapport stœchiométrique $n(\\mathrm{Cu})/n(\\mathrm{NO_3^-})$ impose la règle des n.o. ?',
          options: [
            '$3\\,\\mathrm{Cu}$ pour $2\\,\\mathrm{NO_3^-}$',
            '$2\\,\\mathrm{Cu}$ pour $3\\,\\mathrm{NO_3^-}$',
            '$1\\,\\mathrm{Cu}$ pour $1\\,\\mathrm{NO_3^-}$',
            '$5\\,\\mathrm{Cu}$ pour $1\\,\\mathrm{NO_3^-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Δn.o.(Cu) = +2 et Δn.o.(N) = +II − (+V) = −3. Pour annuler la somme : 3×(+2) + 2×(−3) = 0, soit 3 Cu pour 2 NO₃⁻.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Applications stœchiométriques et métallurgie du fer
    // ========================================================================
    {
      id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06',
      order: 6,
      title: 'Bilans molaires par voie sèche et sidérurgie (minerai → acier)',
      summary:
        'Exploiter les bilans molaires (réactif limitant, masse de métal ou volume gazeux) dans les exercices du cours et décrire les étapes du haut fourneau.',
      conceptExplanation:
        "Une fois l’équation-bilan équilibrée, les proportions stœchiométriques permettent de calculer masses et volumes de gaz formés (Situation p. 4, Ex 5 p. 6, Ex 6 p. 7) :\n\n1. **Réactif limitant (Situation d’évaluation p. 4)** : pour $\\mathrm{Cr_2O_3 + 2\\,Al \\longrightarrow 2\\,Cr + Al_2O_3}$, on calcule séparément $n(\\mathrm{Cr_2O_3})$ et $\\frac{n(\\mathrm{Al})}{2}$ pour identifier le plus petit (limitant) avant de calculer $m(\\mathrm{Cr})$.\n2. **Volume gazeux formé (Ex 5 p. 6)** : dans $\\mathrm{C + 2\\,H_2SO_4 \\longrightarrow 2\\,SO_2 + CO_2 + 2\\,H_2O}$, $n(\\mathrm{CO_2}) = n(\\mathrm{C}) = \\frac{m_C}{M_C}$, d’où $V(\\mathrm{CO_2}) = n(\\mathrm{C})\\,V_m$.\n3. **Du minerai de fer à l’acier (Documentation p. 8)** :\n   - Dans un **haut fourneau**, on introduit par le gueulard du **minerai de fer** ($\\mathrm{Fe_2O_3}$ + gangue terreuse), du **coke** (carbone) et un **fondant**.\n   - Le coke forme du monoxyde de carbone $\\mathrm{CO}$, qui réduit $\\mathrm{Fe_2O_3}$ en fer ; le fondant s’unit à la gangue pour donner le **laitier**.\n   - On recueille la **fonte** liquide (riche en carbone et impuretés $\\mathrm{Si, Mn, S, P}$), puis on l’affine en **acier** par **soufflage d’air ou de dioxygène pur** qui oxyde ces impuretés plus oxydables que le fer.",
      keyRule:
        'Au haut fourneau, le coke produit CO qui réduit Fe₂O₃ en fer (fonte), le fondant élimine la gangue en laitier, puis le soufflage d’O₂ oxyde le carbone et les impuretés de la fonte pour produire l’acier.',
      formulas: [
        {
          name: 'Proportionnalité stœchiométrique',
          formula: '\\frac{n(\\mathrm{Fe_2O_3})}{1} = \\frac{n(\\mathrm{CO})}{3} = \\frac{n(\\mathrm{Fe})}{2}',
          note: 'Permet de calculer V(CO) = 3·n(Fe₂O₃)·Vₘ et la masse de fer m(Fe)',
        },
      ],
      workedExample: {
        title: 'Calculer la masse de chrome et le volume de CO₂ (Situation p. 4 & Ex 5 p. 6)',
        statement:
          '(1) On fait réagir $5{,}0\\text{ g}$ de $\\mathrm{Cr_2O_3}$ ($M = 152\\text{ g/mol}$) avec $8{,}5\\text{ g}$ d’aluminium ($M = 27\\text{ g/mol}$). Calcule la masse de chrome ($M = 52\\text{ g/mol}$) formée. (2) Calcule le volume de $\\mathrm{CO_2}$ ($V_m = 28\\text{ L/mol}$) obtenu avec $18\\text{ g}$ de carbone dans $\\mathrm{H_2SO_4}$ concentré.',
        methodSteps: [
          '1) Chrome : n(Cr₂O₃) = 5,0 / 152 ≈ 0,0329 mol ; n(Al)/2 = (8,5/27)/2 ≈ 0,157 mol > 0,0329 mol ⇒ Cr₂O₃ est limitant.',
          '2) Donc n(Cr) = 2 n(Cr₂O₃) ⇒ m(Cr) = 2 × 52 × 5,0 / 152 ≈ 3,42 g.',
          '3) Carbone (Ex 5) : n(C) = 18 / 12 = 1,5 mol ⇒ n(CO₂) = 1,5 mol ⇒ V(CO₂) = 1,5 × 28 = 42 L.',
        ],
        conclusion:
          'On obtient 3,42 g de chrome et 42 L de dioxyde de carbone.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Calcul chrome',
          stepTheme: 'Situation p. 4',
          stepTitle: 'Calculer la masse de chrome obtenue par aluminothermie',
          paragraphText:
            'Dans Cr₂O₃ + 2 Al → 2 Cr + Al₂O₃, 5,0 g de Cr₂O₃ (M = 152 g/mol) constituent le réactif limitant face à 8,5 g d’aluminium.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q1',
            type: 'mcq',
            prompt: 'Quelle masse de chrome ($M = 52\\text{ g/mol}$) obtient-on en faisant réagir $5{,}0\\text{ g}$ d’oxyde $\\mathrm{Cr_2O_3}$ ($M = 152\\text{ g/mol}$) avec un excès d’aluminium ($8{,}5\\text{ g}$) ?',
            options: [
              '$3{,}42\\text{ g}$',
              '$1{,}71\\text{ g}$',
              '$6{,}84\\text{ g}$',
              '$5{,}00\\text{ g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(Cr) = 2 n(Cr₂O₃) = 2 × (5,0 / 152) mol, donc m(Cr) = (2 × 52 × 5,0) / 152 = 520 / 152 ≈ 3,42 g.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Calcul CO₂',
          stepTheme: 'Exercice 5 p. 6',
          stepTitle: 'Calculer le volume de CO₂ dégagé par 18 g de carbone',
          paragraphText:
            'Selon C + 2 H₂SO₄ → 2 SO₂ + CO₂ + 2 H₂O, 1 mole de carbone fournit 1 mole de CO₂.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q2',
            type: 'mcq',
            prompt: 'Quel volume de $\\mathrm{CO_2}$ se dégage lors de l’oxydation complète de $18\\text{ g}$ de carbone ($M = 12\\text{ g/mol}$, $V_m = 28\\text{ L/mol}$) par $\\mathrm{H_2SO_4}$ concentré ?',
            options: [
              '$42\\text{ L}$',
              '$21\\text{ L}$',
              '$84\\text{ L}$',
              '$14\\text{ L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(CO₂) = n(C) = 18 / 12 = 1,5 mol, d’où V(CO₂) = 1,5 × 28 = 42 L.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Volume de CO',
          stepTheme: 'Exercice 6 p. 7',
          stepTitle: 'Calculer le volume de CO nécessaire pour réduire Fe₂O₃',
          paragraphText:
            'Pour réduire 1 tonne (10⁶ g) d’oxyde Fe₂O₃ pur (M = 160 g/mol) selon Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂, il faut n(CO) = 3 n(Fe₂O₃).',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q3',
            type: 'mcq',
            prompt: 'Quel volume de $\\mathrm{CO}$ (dans les CNTP, $V_m = 22{,}4\\text{ L/mol}$) faut-il pour réduire $1\\text{ tonne}$ ($10^6\\text{ g}$) d’oxyde $\\mathrm{Fe_2O_3}$ ($M = 160\\text{ g/mol}$) ?',
            options: [
              '$4{,}2 \\times 10^5\\text{ L}$',
              '$1{,}4 \\times 10^5\\text{ L}$',
              '$2{,}8 \\times 10^5\\text{ L}$',
              '$6{,}7 \\times 10^4\\text{ L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(Fe₂O₃) = 10⁶ / 160 = 6 250 mol ; n(CO) = 3 × 6 250 = 18 750 mol ; V(CO) = 18 750 × 22,4 = 4,2 × 10⁵ L.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Haut fourneau',
          stepTheme: 'Documentation p. 8',
          stepTitle: 'Connaître le rôle du coke et du fondant dans le haut fourneau',
          paragraphText:
            'Au haut fourneau, le coke fournit le réducteur CO tandis que le fondant piège les impuretés terreuses (la gangue) pour former le laitier.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q4',
            type: 'mcq',
            prompt: 'Dans un haut fourneau (Documentation p. 8), à quoi sert le « fondant » ajouté avec le minerai et le coke ?',
            options: [
              'Il se combine à la gangue terreuse pour former le laitier',
              'Il refroidit le métal pour empêcher sa fusion',
              'Il remplace le dioxygène pour oxyder le fer',
              'Il dissout le fer dans l’eau froide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le fondant s’associe à la gangue du minerai pour donner un produit fondu plus léger (le laitier), séparé de la fonte.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Fonte → Acier',
          stepTheme: 'Affinage par O₂',
          stepTitle: 'Expliquer le passage de la fonte à l’acier',
          paragraphText:
            'Les impuretés de la fonte liquide (C, Si, Mn, S, P) étant plus facilement oxydables que le fer, on les élimine en insufflant de l’air ou du dioxygène pur.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q5',
            type: 'mcq',
            prompt: 'Comment transforme-t-on la fonte liquide sortie du haut fourneau en acier ?',
            options: [
              'En oxydant ses impuretés (C, Si, Mn, S, P) par soufflage d’air ou de dioxygène pur',
              'En ajoutant davantage de charbon et de gangue dans de l’eau',
              'En refroidissant la fonte avec de l’azote liquide sans oxydation',
              'En dissolvant la fonte dans l’acide sulfurique dilué',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Comme les impuretés (dont le carbone en excès) sont plus oxydables que le fer, le soufflage d’O₂ pur les oxyde et laisse l’acier.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Teneur en fer',
          stepTheme: 'Calcul minerai',
          stepTitle: 'Calculer la masse de fer extraite d’un minerai à 57 % de fer',
          paragraphText:
            'Si un minerai contient 57 % en masse de fer, 1 tonne (1 000 kg) de ce minerai permet d’obtenir 570 kg (0,57 t) de fer.',
          exercise: {
            id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q6',
            type: 'mcq',
            prompt: 'Quelle masse de fer peut-on extraire de $3\\text{ tonnes}$ d’un minerai contenant $57\\%$ en masse de fer ?',
            options: [
              '$1\\,710\\text{ kg}$ ($1{,}71\\text{ t}$)',
              '$570\\text{ kg}$ ($0{,}57\\text{ t}$)',
              '$3\\,000\\text{ kg}$ ($3{,}00\\text{ t}$)',
              '$190\\text{ kg}$ ($0{,}19\\text{ t}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'm(Fe) = 57 % × 3 000 kg = 0,57 × 3 000 = 1 710 kg = 1,71 t.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q1',
          type: 'mcq',
          prompt: 'Quelle masse de chrome ($M = 52\\text{ g/mol}$) obtient-on en faisant réagir $5{,}0\\text{ g}$ d’oxyde $\\mathrm{Cr_2O_3}$ ($M = 152\\text{ g/mol}$) avec un excès d’aluminium ($8{,}5\\text{ g}$) ?',
          options: [
            '$3{,}42\\text{ g}$',
            '$1{,}71\\text{ g}$',
            '$6{,}84\\text{ g}$',
            '$5{,}00\\text{ g}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n(Cr) = 2 n(Cr₂O₃) = 2 × (5,0 / 152) mol, donc m(Cr) = (2 × 52 × 5,0) / 152 = 520 / 152 ≈ 3,42 g.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q2',
          type: 'mcq',
          prompt: 'Quel volume de $\\mathrm{CO_2}$ se dégage lors de l’oxydation complète de $18\\text{ g}$ de carbone ($M = 12\\text{ g/mol}$, $V_m = 28\\text{ L/mol}$) par $\\mathrm{H_2SO_4}$ concentré ?',
          options: [
            '$42\\text{ L}$',
            '$21\\text{ L}$',
            '$84\\text{ L}$',
            '$14\\text{ L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n(CO₂) = n(C) = 18 / 12 = 1,5 mol, d’où V(CO₂) = 1,5 × 28 = 42 L.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q3',
          type: 'mcq',
          prompt: 'Quel volume de $\\mathrm{CO}$ (dans les CNTP, $V_m = 22{,}4\\text{ L/mol}$) faut-il pour réduire $1\\text{ tonne}$ ($10^6\\text{ g}$) d’oxyde $\\mathrm{Fe_2O_3}$ ($M = 160\\text{ g/mol}$) ?',
          options: [
            '$4{,}2 \\times 10^5\\text{ L}$',
            '$1{,}4 \\times 10^5\\text{ L}$',
            '$2{,}8 \\times 10^5\\text{ L}$',
            '$6{,}7 \\times 10^4\\text{ L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'n(Fe₂O₃) = 10⁶ / 160 = 6 250 mol ; n(CO) = 3 × 6 250 = 18 750 mol ; V(CO) = 18 750 × 22,4 = 4,2 × 10⁵ L.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q4',
          type: 'mcq',
          prompt: 'Dans un haut fourneau (Documentation p. 8), à quoi sert le « fondant » ajouté avec le minerai et le coke ?',
          options: [
            'Il se combine à la gangue terreuse pour former le laitier',
            'Il refroidit le métal pour empêcher sa fusion',
            'Il remplace le dioxygène pour oxyder le fer',
            'Il dissout le fer dans l’eau froide',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le fondant s’associe à la gangue du minerai pour donner un produit fondu plus léger (le laitier), séparé de la fonte.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q5',
          type: 'mcq',
          prompt: 'Comment transforme-t-on la fonte liquide sortie du haut fourneau en acier ?',
          options: [
            'En oxydant ses impuretés (C, Si, Mn, S, P) par soufflage d’air ou de dioxygène pur',
            'En ajoutant davantage de charbon et de gangue dans de l’eau',
            'En refroidissant la fonte avec de l’azote liquide sans oxydation',
            'En dissolvant la fonte dans l’acide sulfurique dilué',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Comme les impuretés (dont le carbone en excès) sont plus oxydables que le fer, le soufflage d’O₂ pur les oxyde et laisse l’acier.',
        },
        {
          id: 'premiere_c_chimie_l07_oxydoreduction_voie_seche_p06_q6',
          type: 'mcq',
          prompt: 'Quelle masse de fer peut-on extraire de $3\\text{ tonnes}$ d’un minerai contenant $57\\%$ en masse de fer ?',
          options: [
            '$1\\,710\\text{ kg}$ ($1{,}71\\text{ t}$)',
            '$570\\text{ kg}$ ($0{,}57\\text{ t}$)',
            '$3\\,000\\text{ kg}$ ($3{,}00\\text{ t}$)',
            '$190\\text{ kg}$ ($0{,}19\\text{ t}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'm(Fe) = 57 % × 3 000 kg = 0,57 × 3 000 = 1 710 kg = 1,71 t.',
        },
      ],
    },
  ],
};

