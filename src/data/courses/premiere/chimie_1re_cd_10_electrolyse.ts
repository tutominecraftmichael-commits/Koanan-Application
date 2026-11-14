import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « 1ères CDE - Chimie : Électrolyse » (format v2).
export const CHIMIE_1RE_CD_L10_ELECTROLYSE: CurriculumChapter = {
  id: 'premiere_c_chimie_l10_electrolyse',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 10,
  title: 'Leçon 10 : Électrolyse',
  summary:
    'Réactions chimiques forcées par le courant électrique dans un électrolyte (H₂SO₄, SnCl₂, NaCl, AgCl), distinction pile/électrolyse, galvanoplastie et bilan quantitatif (Faraday).',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CDE - Chimie : ELECTROLYSE.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Principe général de l’électrolyse et électrolyse de H₂SO₄
    // ========================================================================
    {
      id: 'premiere_c_chimie_l10_electrolyse_p01',
      order: 1,
      title: 'Principe de l’électrolyse et électrolyse de l’acide sulfurique',
      summary:
        'Définir l’électrolyse et l’électrolyte, repérer anode/cathode et interpréter l’électrolyse d’une solution aqueuse d’acide sulfurique H₂SO₄.',
      conceptExplanation:
        "Dans la situation d’apprentissage (couverts étamés par passage du courant dans une solution d’ions $\\mathrm{Sn^{2+}}$), un générateur extérieur impose des réactions chimiques qui n’auraient pas lieu spontanément :\n\n- **Définition** : l’**électrolyse** est l’ensemble des réactions d’oxydoréduction provoquées par le passage d’un courant électrique continu dans une solution conductrice appelée **électrolyte**.\n- **Rôle des électrodes** : dans un électrolyseur, les électrons sortent de la borne négative ($-$) du générateur vers la **cathode**, et retournent vers la borne positive ($+$) depuis l’**anode**.\n  - À l’**anode** (reliée au pôle $+$ du générateur), il se produit toujours une **oxydation** (perte d’électrons) ; les **anions** migrent vers l’anode.\n  - À la **cathode** (reliée au pôle $-$ du générateur), il se produit toujours une **réduction** (gain d’électrons) ; les **cations** migrent vers la cathode.\n\n**Électrolyse de la solution aqueuse d’acide sulfurique ($\\mathrm{H_2SO_4}$) avec électrodes de platine (inattaquables)** :\n- À l’**anode**, le gaz recueilli rallume une bûchette présentant un point incandescent : c’est du **dioxygène** ($\\mathrm{O_2}$) issu de l’oxydation de l’eau :\n  $$2\\,\\mathrm{H_2O \\longrightarrow O_2 + 4\\,H^+ + 4\\,e^-}$$\n- À la **cathode**, le gaz recueilli brûle avec une petite détonation : c’est du **dihydrogène** ($\\mathrm{H_2}$) issu de la réduction des ions hydrogène ($\\mathrm{H^+}$ ou $\\mathrm{H_3O^+}$) :\n  $$4\\,\\mathrm{H^+ + 4\\,e^- \\longrightarrow 2\\,H_2}$$\n- **Équation-bilan** :\n  $$2\\,\\mathrm{H_2O \\longrightarrow 2\\,H_2 + O_2}$$\nL’acide sulfurique assure la conduction ionique sans être consommé : le volume de $\\mathrm{H_2}$ formé à la cathode est le double de celui de $\\mathrm{O_2}$ formé à l’anode ($V(\\mathrm{H_2}) = 2\\,V(\\mathrm{O_2})$).",
      keyRule:
        'En électrolyse, le générateur impose le sens : oxydation toujours à l’anode (pôle +) et réduction toujours à la cathode (pôle −). Pour H₂SO₄ aqueux : 2 H₂O → 2 H₂ (cathode) + O₂ (anode).',
      formulas: [
        {
          name: 'Électrolyse d’une solution aqueuse de H₂SO₄',
          formula: '2\\,\\mathrm{H_2O \\longrightarrow 2\\,H_2 + O_2}',
          note: 'Anode (+) : 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ ; Cathode (−) : 4 H⁺ + 4 e⁻ → 2 H₂',
        },
      ],
      workedExample: {
        title: 'Identifier les gaz formés lors de l’électrolyse de H₂SO₄',
        statement:
          'Lors de l’électrolyse d’une solution aqueuse d’acide sulfurique entre deux électrodes de platine, on recueille $12\\,\\mathrm{mL}$ de gaz à l’anode et $24\\,\\mathrm{mL}$ de gaz à la cathode. Identifie ces gaz et explique le rapport des volumes.',
        methodSteps: [
          '1) À l’anode (oxydation de l’eau) : 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Le gaz qui rallume une bûchette incandescente est O₂ (12 mL).',
          '2) À la cathode (réduction de H⁺) : 4 H⁺ + 4 e⁻ → 2 H₂. Le gaz qui détone à la flamme est H₂ (24 mL).',
          '3) L’équation-bilan 2 H₂O → 2 H₂ + O₂ montre que n(H₂) = 2 n(O₂), soit V(H₂) = 2 V(O₂) dans les mêmes conditions.',
        ],
        conclusion:
          'On obtient 12 mL de dioxygène O₂ à l’anode et 24 mL de dihydrogène H₂ à la cathode.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Électrolyse',
          stepTheme: 'Définitions de base',
          stepTitle: 'Qu’est-ce que l’électrolyse et un électrolyte ?',
          paragraphText:
            'L’électrolyse est l’ensemble des réactions chimiques provoquées par le passage d’un courant électrique continu dans une solution ionique appelée électrolyte.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p01_q1',
            type: 'mcq',
            prompt: 'Lors d’une électrolyse, comment appelle-t-on la solution conductrice dans laquelle plongent les électrodes ?',
            options: [
              'L’électrolyte',
              'Le pont salin',
              'Le catalyseur',
              'Le réducteur fondu',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La solution contenant des ions mobiles traversée par le courant électrique est appelée l’électrolyte.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Électrodes',
          stepTheme: 'Anode et cathode',
          stepTitle: 'Quelle réaction a lieu à l’anode et à la cathode ?',
          paragraphText:
            'Que ce soit dans une pile ou dans un électrolyseur, l’anode est toujours le siège d’une oxydation et la cathode toujours le siège d’une réduction.',
          keyRule: 'Anode = Oxydation (voyelles) ; Cathode = Réduction (consonnes).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p01_q2',
            type: 'mcq',
            prompt: 'Lors de toute électrolyse, quelle affirmation est exacte ?',
            options: [
              'Il se produit toujours une réduction à la cathode et une oxydation à l’anode',
              'Il se produit toujours une oxydation à la cathode et une réduction à l’anode',
              'Les cations migrent vers l’anode et les anions vers la cathode',
              'Les électrons entrent dans l’électrolyseur par l’anode reliée au pôle négatif',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Par définition, l’oxydation a toujours lieu à l’anode (reliée au pôle + en électrolyse) et la réduction à la cathode (reliée au pôle −).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Migration',
          stepTheme: 'Mouvement des ions',
          stepTitle: 'Vers quelles électrodes migrent les ions ?',
          paragraphText:
            'Sous l’action du champ électrique créé par le générateur, les ions positifs (cations) se dirigent vers la cathode (reliée au pôle $-$) et les ions négatifs (anions) vers l’anode (reliée au pôle $+$).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p01_q3',
            type: 'mcq',
            prompt: 'Dans un électrolyseur en fonctionnement, vers quelle électrode migrent les cations ?',
            options: [
              'Vers la cathode, reliée à la borne négative du générateur',
              'Vers l’anode, reliée à la borne positive du générateur',
              'Vers l’anode, reliée à la borne négative du générateur',
              'Ils restent immobiles dans la solution',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les cations (chargés positivement) sont attirés vers la cathode, électrode reliée au pôle négatif (−) du générateur.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'H₂SO₄',
          stepTheme: 'Tests des gaz',
          stepTitle: 'Quels gaz observe-t-on avec l’acide sulfurique ?',
          paragraphText:
            'Lors de l’électrolyse de H₂SO₄ aqueux avec électrodes de platine, le gaz anodique rallume une bûchette incandescente (O₂) et le gaz cathodique brûle avec une petite détonation (H₂).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p01_q4',
            type: 'mcq',
            prompt: 'Lors de l’électrolyse d’une solution aqueuse d’acide sulfurique ($\\mathrm{H_2SO_4}$), quels gaz se dégagent respectivement à l’anode et à la cathode ?',
            options: [
              'À l’anode : dioxygène $\\mathrm{O_2}$ ; à la cathode : dihydrogène $\\mathrm{H_2}$',
              'À l’anode : dihydrogène $\\mathrm{H_2}$ ; à la cathode : dioxygène $\\mathrm{O_2}$',
              'À l’anode : dioxyde de soufre $\\mathrm{SO_2}$ ; à la cathode : dihydrogène $\\mathrm{H_2}$',
              'À l’anode : dioxygène $\\mathrm{O_2}$ ; à la cathode : aucun gaz',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’eau est oxydée en O₂ à l’anode et les ions H⁺ sont réduits en H₂ à la cathode : 2 H₂O → 2 H₂ + O₂.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Demi-équations',
          stepTheme: 'Électrolyse de l’eau',
          stepTitle: 'Comment écrire les demi-équations de l’électrolyse de H₂SO₄ ?',
          paragraphText:
            'À l’anode : $2\\,\\mathrm{H_2O \\longrightarrow O_2 + 4\\,H^+ + 4\\,e^-}$. À la cathode : $4\\,\\mathrm{H^+ + 4\\,e^- \\longrightarrow 2\\,H_2}$. En additionnant, les $4\\,e^-$ et les $4\\,\\mathrm{H^+}$ s’éliminent.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p01_q5',
            type: 'mcq',
            prompt: 'Quelle est l’équation de la réaction qui se produit à l’anode lors de l’électrolyse de la solution aqueuse de $\\mathrm{H_2SO_4}$ ?',
            options: [
              '$2\\,\\mathrm{H_2O \\longrightarrow O_2 + 4\\,H^+ + 4\\,e^-}$',
              '$2\\,\\mathrm{H^+ + 2\\,e^- \\longrightarrow H_2}$',
              '$\\mathrm{SO_4^{2-} \\longrightarrow SO_2 + O_2 + 2\\,e^-}$',
              '$2\\,\\mathrm{H_2O + 2\\,e^- \\longrightarrow H_2 + 2\\,OH^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À l’anode a lieu l’oxydation de l’eau en dioxygène : 2 H₂O → O₂ + 4 H⁺ + 4 e⁻.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Volumes gazeux',
          stepTitle: 'Comparer les volumes de H₂ et O₂ recueillis',
          paragraphText:
            'D’après le bilan $2\\,\\mathrm{H_2O \\longrightarrow 2\\,H_2 + O_2}$, il se forme deux fois plus de moles (donc un volume double) de $\\mathrm{H_2}$ que de $\\mathrm{O_2}$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p01_q6',
            type: 'mcq',
            prompt: 'On recueille $15\\,\\mathrm{mL}$ de dioxygène à l’anode lors de l’électrolyse d’une solution d’acide sulfurique. Quel volume de dihydrogène recueille-t-on dans les mêmes conditions à la cathode ?',
            options: [
              '$30\\,\\mathrm{mL}$',
              '$15\\,\\mathrm{mL}$',
              '$7{,}5\\,\\mathrm{mL}$',
              '$45\\,\\mathrm{mL}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'D’après 2 H₂O → 2 H₂ + O₂, n(H₂) = 2 n(O₂), donc V(H₂) = 2 × 15 mL = 30 mL.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Électrolyse d’une solution de chlorure d’étain (SnCl₂)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l10_electrolyse_p02',
      order: 2,
      title: 'Électrolyse de la solution de chlorure d’étain (SnCl₂)',
      summary:
        'Observer et interpréter la formation d’étain métallique arborescent à la cathode et de dichlore à l’anode lors de l’électrolyse de SnCl₂.',
      conceptExplanation:
        "On verse une solution acidifiée de **chlorure d’étain(II)** ($\\mathrm{Sn^{2+} + 2\\,Cl^-}$) dans un électrolyseur à électrodes de **graphite** :\n\n- **Observations** :\n  - À l’**anode** : apparition de bulles gazeuses ; une goutte d’**indigo** versée près de l’anode se **décolore** (test caractéristique du dichlore $\\mathrm{Cl_2}$).\n  - À la **cathode** : apparition d’un **dépôt métallique brillant arborescent** d’étain ($\\mathrm{Sn}$).\n- **Interprétation par les demi-équations** :\n  - À l’**anode** (oxydation) : les ions chlorure $\\mathrm{Cl^-}$ cèdent des électrons pour former du dichlore :\n    $$2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$$\n  - À la **cathode** (réduction) : les ions étain(II) $\\mathrm{Sn^{2+}}$ captent des électrons pour former de l’étain métallique :\n    $$\\mathrm{Sn^{2+} + 2\\,e^- \\longrightarrow Sn}$$\n- **Équation-bilan** :\n  $$\\mathrm{Sn^{2+} + 2\\,Cl^- \\longrightarrow Sn + Cl_2}$$\n\n**Lien avec la situation d’apprentissage** : cette réduction des ions $\\mathrm{Sn^{2+}}$ en étain solide $\\mathrm{Sn}$ à la cathode explique le procédé d’**étamage** (recouvrement de couverts ou de tôles par une fine couche d’étain).",
      keyRule:
        'Électrolyse de SnCl₂ (électrodes graphite) : Cl₂ se dégage à l’anode (décolore l’indigo) et Sn se dépose en arborescences à la cathode. Bilan : Sn²⁺ + 2 Cl⁻ → Sn + Cl₂.',
      formulas: [
        {
          name: 'Électrolyse du chlorure d’étain(II)',
          formula: '\\mathrm{Sn^{2+} + 2\\,Cl^- \\longrightarrow Sn + Cl_2}',
          note: 'Anode : 2 Cl⁻ → Cl₂ + 2 e⁻ ; Cathode : Sn²⁺ + 2 e⁻ → Sn',
        },
      ],
      workedExample: {
        title: 'Interpréter l’électrolyse de SnCl₂ (Exercice 3 du cours)',
        statement:
          'Lors de l’électrolyse d’une solution aqueuse de chlorure d’étain, on observe un dépôt métallique brillant sur la cathode et des bulles de gaz du côté de l’anode. Interprète ces résultats et écris les équations.',
        methodSteps: [
          '1) À la cathode (pôle −), les cations Sn²⁺ sont réduits en étain métallique Sn : Sn²⁺ + 2 e⁻ → Sn.',
          '2) À l’anode (pôle +), les anions Cl⁻ sont oxydés en dichlore gazeux Cl₂ : 2 Cl⁻ → Cl₂ + 2 e⁻ (le gaz décolore l’indigo).',
          '3) La somme des deux demi-équations donne l’équation-bilan : Sn²⁺ + 2 Cl⁻ → Sn + Cl₂.',
        ],
        conclusion:
          'L’étain se dépose à la cathode et le dichlore se dégage à l’anode selon Sn²⁺ + 2 Cl⁻ → Sn + Cl₂.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Observations',
          stepTheme: 'Test à l’indigo',
          stepTitle: 'Quel gaz décolore l’indigo à l’anode ?',
          paragraphText:
            'Dans l’électrolyse de SnCl₂, les bulles formées à l’anode décolorent une solution bleue d’indigo : c’est le test caractéristique du dichlore Cl₂.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p02_q1',
            type: 'mcq',
            prompt: 'Lors de l’électrolyse d’une solution de $\\mathrm{SnCl_2}$, quelle observation permet d’identifier le dichlore $\\mathrm{Cl_2}$ dégagé à l’anode ?',
            options: [
              'Le gaz décolore une goutte d’indigo versée dans le compartiment anodique',
              'Le gaz fait rougir la phénolphtaléine',
              'Le gaz rallume une bûchette incandescente',
              'Un dépôt arborescent se forme sur l’anode',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le dichlore Cl₂ est un oxydant qui détruit le colorant indigo : la décoloration de l’indigo à l’anode caractérise Cl₂.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Anode',
          stepTheme: 'Oxydation de Cl⁻',
          stepTitle: 'Quelle réaction se produit à l’anode dans SnCl₂ ?',
          paragraphText:
            'À l’anode en graphite, les ions chlorure Cl⁻ perdent chacun un électron pour former du dichlore : 2 Cl⁻ → Cl₂ + 2 e⁻.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p02_q2',
            type: 'mcq',
            prompt: 'Quelle est la demi-équation électronique ayant lieu à l’anode lors de l’électrolyse d’une solution de $\\mathrm{SnCl_2}$ ?',
            options: [
              '$2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$',
              '$\\mathrm{Cl_2 + 2\\,e^- \\longrightarrow 2\\,Cl^-}$',
              '$\\mathrm{Sn^{2+} + 2\\,e^- \\longrightarrow Sn}$',
              '$\\mathrm{Sn \\longrightarrow Sn^{2+} + 2\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À l’anode, il y a oxydation des ions Cl⁻ en dichlore Cl₂ : 2 Cl⁻ → Cl₂ + 2 e⁻.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Cathode',
          stepTheme: 'Réduction de Sn²⁺',
          stepTitle: 'Comment se forme le dépôt arborescent d’étain ?',
          paragraphText:
            'À la cathode, les ions Sn²⁺ captent deux électrons : Sn²⁺ + 2 e⁻ → Sn, produisant des cristaux métalliques brillants en arborescence.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p02_q3',
            type: 'mcq',
            prompt: 'À quelle électrode et par quelle réaction se forme le dépôt métallique d’étain $\\mathrm{Sn}$ ?',
            options: [
              'À la cathode, par réduction : $\\mathrm{Sn^{2+} + 2\\,e^- \\longrightarrow Sn}$',
              'À l’anode, par oxydation : $\\mathrm{Sn \\longrightarrow Sn^{2+} + 2\\,e^-}$',
              'À l’anode, par réduction : $\\mathrm{Sn^{2+} + 2\\,e^- \\longrightarrow Sn}$',
              'À la cathode, par oxydation : $\\mathrm{Sn^{4+} \\longrightarrow Sn^{2+} + 2\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un dépôt métallique provient de la réduction des cations métalliques Sn²⁺ en métal Sn, toujours à la cathode.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Bilan de SnCl₂',
          stepTitle: 'Écrire l’équation-bilan de l’électrolyse de SnCl₂',
          paragraphText:
            'Les deux demi-équations échangent directement 2 électrons : on les additionne membre à membre pour obtenir Sn²⁺ + 2 Cl⁻ → Sn + Cl₂.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p02_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan correcte de l’électrolyse d’une solution acidifiée de chlorure d’étain $\\mathrm{SnCl_2}$ ?',
            options: [
              '$\\mathrm{Sn^{2+} + 2\\,Cl^- \\longrightarrow Sn + Cl_2}$',
              '$\\mathrm{Sn + Cl_2 \\longrightarrow Sn^{2+} + 2\\,Cl^-}$',
              '$\\mathrm{Sn^{2+} + 2\\,H_2O \\longrightarrow Sn + O_2 + 4\\,H^+}$',
              '$2\\,\\mathrm{H_2O + 2\\,Cl^- \\longrightarrow H_2 + Cl_2 + 2\\,OH^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La somme de Sn²⁺ + 2 e⁻ → Sn et 2 Cl⁻ → Cl₂ + 2 e⁻ donne Sn²⁺ + 2 Cl⁻ → Sn + Cl₂.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège d’examen',
          stepTheme: 'Sens des électrodes',
          stepTitle: 'Attention : où placer un couvert à étamer ?',
          paragraphText:
            'Pour recouvrir un couvert d’étain (étamage), le métal Sn doit se déposer sur le couvert. Comme le dépôt a lieu par réduction, le couvert doit impérativement être relié à la cathode (pôle −).',
          konanTip: 'Tout objet à recouvrir d’un métal par électrolyse est TOUJOURS placé à la cathode (pôle −).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p02_q5',
            type: 'mcq',
            prompt: 'Dans une usine d’étamage de couverts à partir d’une solution d’ions $\\mathrm{Sn^{2+}}$, à quelle borne du générateur faut-il relier la cuillère à étamer ?',
            options: [
              'À la borne négative ($-$), pour qu’elle joue le rôle de cathode',
              'À la borne positive ($+$), pour qu’elle joue le rôle d’anode',
              'Indifféremment à la borne $+$ ou à la borne $-$',
              'Au milieu de l’électrolyte sans la relier au générateur',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La réduction Sn²⁺ + 2 e⁻ → Sn dépose l’étain sur la cathode, qui est reliée à la borne négative (−) du générateur.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Stœchiométrie',
          stepTitle: 'Relier masse d’étain et quantité de dichlore',
          paragraphText:
            'D’après $\\mathrm{Sn^{2+} + 2\\,Cl^- \\longrightarrow Sn + Cl_2}$, il se dégage $1\\,\\mathrm{mol}$ de $\\mathrm{Cl_2}$ pour $1\\,\\mathrm{mol}$ d’étain déposé.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p02_q6',
            type: 'mcq',
            prompt: 'Lors de l’électrolyse d’une solution de $\\mathrm{SnCl_2}$, il se forme $0{,}050\\,\\mathrm{mol}$ d’étain $\\mathrm{Sn}$ à la cathode. Quelle quantité de matière de dichlore $\\mathrm{Cl_2}$ se dégage à l’anode ?',
            options: [
              '$0{,}050\\,\\mathrm{mol}$',
              '$0{,}10\\,\\mathrm{mol}$',
              '$0{,}025\\,\\mathrm{mol}$',
              '$0{,}20\\,\\mathrm{mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’équation-bilan Sn²⁺ + 2 Cl⁻ → Sn + Cl₂ montre que n(Cl₂) = n(Sn) = 0,050 mol.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Électrolyse d’une solution de chlorure de sodium (NaCl)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l10_electrolyse_p03',
      order: 3,
      title: 'Électrolyse de la solution de chlorure de sodium (NaCl)',
      summary:
        'Comprendre pourquoi c’est l’eau et non Na⁺ qui est réduite à la cathode lors de l’électrolyse d’une solution aqueuse de NaCl.',
      conceptExplanation:
        "On verse une solution aqueuse de **chlorure de sodium** ($\\mathrm{Na^+ + Cl^-}$) dans un tube en U muni d’électrodes de **graphite** :\n\n- **Observations** :\n  - À l’**anode** : dégagement gazeux qui **décolore l’indigo** $\\rightarrow$ formation de **dichlore** ($\\mathrm{Cl_2}$).\n  - À la **cathode** : dégagement gazeux (dihydrogène $\\mathrm{H_2}$) et quelques gouttes de **phénolphtaléine** virent au **rose-violet**, prouvant que le compartiment cathodique devient **basique** (apparition d’ions hydroxyde $\\mathrm{OH^-}$).\n- **Interprétation** :\n  - À l’**anode** (oxydation) : les ions chlorure sont oxydés en dichlore :\n    $$2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$$\n  - À la **cathode** (réduction) : les ions $\\mathrm{Na^+}$ sont très difficiles à réduire en solution aqueuse (le sodium métallique réagirait aussitôt violemment avec l’eau !). C’est donc **l’eau** qui est réduite en dihydrogène et ions hydroxyde :\n    $$2\\,\\mathrm{H_2O + 2\\,e^- \\longrightarrow H_2 + 2\\,OH^-}$$\n- **Équation-bilan** :\n  $$2\\,\\mathrm{H_2O + 2\\,Cl^- \\longrightarrow H_2 + Cl_2 + 2\\,OH^-}$$\nLes ions $\\mathrm{Na^+}$ sont spectateurs ; en solution, on obtient donc également de la **soude** ($\\mathrm{Na^+ + OH^-}$), en plus des gaz $\\mathrm{H_2}$ et $\\mathrm{Cl_2}$.",
      keyRule:
        'Dans NaCl(aq), Na⁺ reste spectateur : à l’anode Cl⁻ s’oxyde en Cl₂ (décolore l’indigo) et à la cathode H₂O se réduit en H₂ + OH⁻ (phénolphtaléine rose). Bilan : 2 H₂O + 2 Cl⁻ → H₂ + Cl₂ + 2 OH⁻.',
      formulas: [
        {
          name: 'Électrolyse d’une solution aqueuse de NaCl',
          formula: '2\\,\\mathrm{H_2O + 2\\,Cl^- \\longrightarrow H_2 + Cl_2 + 2\\,OH^-}',
          note: 'Produits industriels majeurs : dihydrogène H₂, dichlore Cl₂ et soude (Na⁺ + OH⁻)',
        },
      ],
      workedExample: {
        title: 'Identifier les produits aux deux branches du tube en U (NaCl)',
        statement:
          'Lors de l’électrolyse de $\\mathrm{NaCl(aq)}$ dans un tube en U, pourquoi la phénolphtaléine rougit-elle uniquement dans la branche cathodique ?',
        methodSteps: [
          '1) À la cathode, ce ne sont pas les ions Na⁺ qui sont réduits, mais les molécules d’eau : 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻.',
          '2) La formation d’ions hydroxyde OH⁻ rend le milieu basique dans le compartiment cathodique.',
          '3) La phénolphtaléine est incolore en milieu neutre/acide et devient rose-rouge en milieu basique (pH > 8,2).',
        ],
        conclusion:
          'Le virage au rose de la phénolphtaléine révèle la production d’ions OH⁻ par réduction de l’eau à la cathode.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'piege',
          stepBadge: 'Piège classique',
          stepTheme: 'Rôle de Na⁺',
          stepTitle: 'Pourquoi ne se forme-t-il pas de sodium métallique Na ?',
          paragraphText:
            'En solution aqueuse, l’eau est un oxydant bien plus facile à réduire que l’ion Na⁺ (E°(Na⁺/Na) = −2,71 V). À la cathode, l’eau se réduit donc en H₂ et OH⁻, et Na⁺ reste spectateur.',
          konanTip: 'Ne jamais écrire Na⁺ + e⁻ → Na en solution aqueuse ! C’est toujours 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p03_q1',
            type: 'mcq',
            prompt: 'Lors de l’électrolyse d’une solution aqueuse de chlorure de sodium $\\mathrm{NaCl}$, quelle espèce est réduite à la cathode ?',
            options: [
              'L’eau $\\mathrm{H_2O}$, qui donne du dihydrogène $\\mathrm{H_2}$ et des ions $\\mathrm{OH^-}$',
              'Les ions sodium $\\mathrm{Na^+}$, qui donnent un dépôt de sodium métallique',
              'Les ions chlorure $\\mathrm{Cl^-}$, qui donnent du dichlore $\\mathrm{Cl_2}$',
              'Le dioxygène dissous uniquement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En milieu aqueux, Na⁺ n’est pas réduit : c’est l’eau qui subit la réduction 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Phénolphtaléine',
          stepTheme: 'Test de pH basique',
          stepTitle: 'Que prouve le virage au rose de la phénolphtaléine ?',
          paragraphText:
            'La phénolphtaléine devient rose dans le compartiment cathodique car la réduction de l’eau y libère des ions hydroxyde OH⁻ rendant la solution basique.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p03_q2',
            type: 'mcq',
            prompt: 'Lors de l’électrolyse de $\\mathrm{NaCl(aq)}$ en tube en U, la phénolphtaléine vire au rose à la cathode. Quelle conclusion en tire-t-on ?',
            options: [
              'Le milieu est devenu basique grâce à la formation d’ions $\\mathrm{OH^-}$',
              'Le milieu est devenu acide grâce à la formation d’ions $\\mathrm{H_3O^+}$',
              'Il s’est formé du dichlore $\\mathrm{Cl_2}$ à la cathode',
              'Du sodium solide s’est déposé sur le graphite',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La phénolphtaléine vire au rose en milieu basique, ce qui confirme la présence d’ions OH⁻ produits à la cathode.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Demi-équation',
          stepTheme: 'Cathode dans NaCl',
          stepTitle: 'Écrire la réduction de l’eau à la cathode',
          paragraphText:
            'Deux molécules d’eau captent deux électrons pour former une molécule de dihydrogène et deux ions hydroxyde : $2\\,\\mathrm{H_2O + 2\\,e^- \\longrightarrow H_2 + 2\\,OH^-}$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p03_q3',
            type: 'mcq',
            prompt: 'Quelle demi-équation décrit correctement la réaction à la cathode lors de l’électrolyse d’une solution aqueuse de $\\mathrm{NaCl}$ ?',
            options: [
              '$2\\,\\mathrm{H_2O + 2\\,e^- \\longrightarrow H_2 + 2\\,OH^-}$',
              '$2\\,\\mathrm{H_2O \\longrightarrow O_2 + 4\\,H^+ + 4\\,e^-}$',
              '$\\mathrm{Na^+ + e^- \\longrightarrow Na}$',
              '$2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À la cathode a lieu la réduction de l’eau en dihydrogène et ions hydroxyde : 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Bilan de NaCl(aq)',
          stepTitle: 'Établir l’équation-bilan complète pour NaCl(aq)',
          paragraphText:
            'En combinant l’oxydation $2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$ et la réduction $2\\,\\mathrm{H_2O + 2\\,e^- \\longrightarrow H_2 + 2\\,OH^-}$, on obtient le bilan $2\\,\\mathrm{H_2O + 2\\,Cl^- \\longrightarrow H_2 + Cl_2 + 2\\,OH^-}$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p03_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan de l’électrolyse d’une solution aqueuse concentrée de chlorure de sodium ?',
            options: [
              '$2\\,\\mathrm{H_2O + 2\\,Cl^- \\longrightarrow H_2 + Cl_2 + 2\\,OH^-}$',
              '$2\\,\\mathrm{Na^+ + 2\\,Cl^- \\longrightarrow 2\\,Na + Cl_2}$',
              '$2\\,\\mathrm{H_2O \\longrightarrow 2\\,H_2 + O_2}$',
              '$2\\,\\mathrm{Cl^- + 2\\,H^+ \\longrightarrow H_2 + Cl_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’addition des deux demi-équations donne 2 H₂O + 2 Cl⁻ → H₂ + Cl₂ + 2 OH⁻ (soit formation de H₂, Cl₂ et soude NaOH).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Industrie',
          stepTheme: 'Intérêt industriel',
          stepTitle: 'Quels produits fabrique-t-on par électrolyse de la saumure ?',
          paragraphText:
            'L’électrolyse industrielle de la saumure (NaCl concentré) produit simultanément trois matières premières fondamentales : le dichlore Cl₂, le dihydrogène H₂ et l’hydroxyde de sodium (soude, Na⁺ + OH⁻).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p03_q5',
            type: 'mcq',
            prompt: 'Quels sont les trois produits obtenus lors de l’électrolyse d’une solution aqueuse de chlorure de sodium ?',
            options: [
              'Dihydrogène $\\mathrm{H_2}$, dichlore $\\mathrm{Cl_2}$ et hydroxyde de sodium ($\\mathrm{Na^+ + OH^-}$)',
              'Sodium métallique $\\mathrm{Na}$, dioxygène $\\mathrm{O_2}$ et acide chlorhydrique',
              'Dihydrogène $\\mathrm{H_2}$, dioxygène $\\mathrm{O_2}$ et eau de Javel seule',
              'Sodium métallique $\\mathrm{Na}$ et dichlore $\\mathrm{Cl_2}$ uniquement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’équation-bilan 2 H₂O + 2 Cl⁻ → H₂ + Cl₂ + 2 OH⁻ montre la formation conjointe de H₂, Cl₂ et de la soude (Na⁺ + OH⁻).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Comparaison',
          stepTheme: 'SnCl₂ vs NaCl',
          stepTitle: 'Comparer l’électrolyse de SnCl₂ et celle de NaCl',
          paragraphText:
            'Dans les deux cas, Cl⁻ s’oxyde en Cl₂ à l’anode. En revanche, à la cathode, Sn²⁺ est réduit en métal Sn alors que Na⁺ ne l’est pas et laisse l’eau se réduire en H₂.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p03_q6',
            type: 'mcq',
            prompt: 'Qu’ont en commun l’électrolyse de $\\mathrm{SnCl_2(aq)}$ et celle de $\\mathrm{NaCl(aq)}$ entre électrodes de graphite ?',
            options: [
              'Toutes deux dégagent du dichlore $\\mathrm{Cl_2}$ à l’anode',
              'Toutes deux déposent un métal pur à la cathode',
              'Toutes deux dégagent du dioxygène $\\mathrm{O_2}$ à l’anode',
              'Toutes deux rendent le compartiment cathodique acide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans les deux électrolyses, les ions chlorure Cl⁻ s’oxydent en dichlore Cl₂ à l’anode.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Électrolyse vs réaction spontanée & Galvanoplastie
    // ========================================================================
    {
      id: 'premiere_c_chimie_l10_electrolyse_p04',
      order: 4,
      title: 'Électrolyse vs réaction spontanée et applications industrielles',
      summary:
        'Distinguer transformation spontanée (pile) et transformation forcée (électrolyse), et appliquer à la galvanoplastie (argenture, étamage) et au raffinage.',
      conceptExplanation:
        "Une réaction d’oxydoréduction naturelle évolue dans le sens prévu par la règle du gamma (de l’oxydant le plus fort vers le réducteur le plus fort) : elle est **spontanée** et peut fournir de l’énergie électrique dans une pile.\n\n- **Transformation forcée** : l’**électrolyse** n’est pas spontanée ; elle est **provoquée (ou forcée)** par un générateur extérieur. L’énergie électrique absorbée permet d’**inverser le sens naturel** d’évolution entre les couples oxydant/réducteur présents.\n- **Espèces qui réagissent** : en l’absence de contraintes cinétiques (surtensions), le générateur tend à oxyder le **réducteur le plus fort** à l’anode et à réduire l’**oxydant le plus fort** à la cathode.\n- **Applications industrielles et artisanales** :\n  - **Préparation de produits chimiques** non abondants à l’état natif : aluminium $\\mathrm{Al}$, dichlore $\\mathrm{Cl_2}$, dihydrogène $\\mathrm{H_2}$, eau oxygénée $\\mathrm{H_2O_2}$, soude.\n  - **Galvanoplastie** : dépôt d’une fine couche métallique protectrice ou décorative sur un objet (argenture d’une bague en cuivre, étamage de couverts, chromage). L’objet à recouvrir est placé à la **cathode**.\n  - **Purification (raffinage)** de métaux précieux ou du cuivre par **électrolyse à anode soluble**, et restauration d’objets archéologiques.\n\nSur le schéma ci-contre (Situation d’évaluation, bijoutier argentant une bague en cuivre dans $\\mathrm{Ag^+ + Cl^-}$), la **bague en cuivre** doit être reliée au **pôle négatif (cathode)** pour que les ions $\\mathrm{Ag^+}$ s’y réduisent en argent métallique : $\\mathrm{Ag^+ + e^- \\longrightarrow Ag}$, tandis que l’anode inerte en graphite oxyde $\\mathrm{Cl^-}$ ($2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$).",
      keyRule:
        'L’électrolyse est une réaction redox forcée (inverse de l’évolution spontanée) grâce à l’énergie électrique. En galvanoplastie, la pièce à recouvrir est toujours à la cathode (pôle −).',
      visualSchema: {
        type: 'geometry_svg',
        title: 'Schéma correct de l’argenture d’une bague par électrolyse',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cellule d'électrolyse pour argenter une bague en cuivre à la cathode et oxyder Cl- à l'anode en graphite">
  <rect x="6" y="6" width="348" height="178" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <text x="180" y="23" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F172A">Argenture par électrolyse (solution Ag⁺ + Cl⁻)</text>
  <line x1="92" y1="42" x2="168" y2="42" stroke="#334155" stroke-width="1.8"/>
  <line x1="192" y1="42" x2="268" y2="42" stroke="#334155" stroke-width="1.8"/>
  <line x1="175" y1="28" x2="175" y2="56" stroke="#DC2626" stroke-width="2.6"/>
  <line x1="185" y1="34" x2="185" y2="50" stroke="#2563EB" stroke-width="2.6"/>
  <text x="167" y="34" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="bold" fill="#DC2626">+</text>
  <text x="193" y="34" text-anchor="start" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563EB">−</text>
  <line x1="92" y1="42" x2="92" y2="96" stroke="#334155" stroke-width="1.8"/>
  <line x1="268" y1="42" x2="268" y2="96" stroke="#334155" stroke-width="1.8"/>
  <rect x="52" y="78" width="256" height="86" rx="5" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.6"/>
  <rect x="83" y="88" width="18" height="58" rx="2" fill="#334155"/>
  <circle cx="268" cy="118" r="14" fill="none" stroke="#D97706" stroke-width="5"/>
  <circle cx="268" cy="118" r="16.5" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="3,2"/>
  <text x="92" y="160" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#DC2626">Anode (+) Graphite</text>
  <text x="92" y="176" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#334155">2 Cl⁻ → Cl₂ + 2 e⁻</text>
  <text x="268" y="160" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#2563EB">Cathode (−) Bague Cu</text>
  <text x="268" y="176" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#334155">Ag⁺ + e⁻ → Ag (dépôt)</text>
  <text x="180" y="114" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369A1">Ag⁺  →</text>
  <text x="180" y="132" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0F766E">←  Cl⁻</text>
</svg>`,
      },
      workedExample: {
        title: 'Corriger le branchement pour argenter une bague en cuivre',
        statement:
          'Un bijoutier veut argenter une bague en cuivre par électrolyse d’une solution contenant des ions $\\mathrm{Ag^+}$ et $\\mathrm{Cl^-}$. Quelles électrodes utiliser et comment les brancher ?',
        methodSteps: [
          '1) On veut déposer de l’argent (Ag⁺ + e⁻ → Ag, réduction) sur la bague : la bague en cuivre doit être la cathode (reliée au pôle −).',
          '2) L’autre électrode (anode, reliée au pôle +) est en graphite (inerte) : 2 Cl⁻ → Cl₂ + 2 e⁻ (note : dans un schéma erroné du polycopié, les étiquettes anode/cathode étaient inversées sur le dessin ; c’est bien la bague qui est la cathode !).',
          '3) Bilan global : 2 Ag⁺ + 2 Cl⁻ → 2 Ag + Cl₂.',
        ],
        conclusion:
          'La bague est la cathode (pôle −) et le graphite est l’anode (pôle +) ; une pellicule d’argent recouvre la bague.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Réaction forcée',
          stepTheme: 'Pile vs Électrolyse',
          stepTitle: 'En quoi l’électrolyse diffère-t-elle d’une pile ?',
          paragraphText:
            'Dans une pile, la réaction d’oxydoréduction est spontanée et produit du courant. Dans une électrolyse, un générateur fournit de l’énergie électrique pour forcer une réaction non spontanée.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p04_q1',
            type: 'mcq',
            prompt: 'Comment qualifie-t-on la transformation chimique qui a lieu lors d’une électrolyse ?',
            options: [
              'Une transformation provoquée (forcée), inverse de l’évolution spontanée',
              'Une transformation spontanée qui fournit du courant électrique',
              'Une réaction uniquement acido-basique sans transfert d’électrons',
              'Une combustion lente à l’air ambiant',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’électrolyse est une réaction d’oxydoréduction forcée (non naturelle) rendue possible par l’énergie électrique du générateur.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Énergie',
          stepTheme: 'Conversion d’énergie',
          stepTitle: 'Quel transfert énergétique réalise un électrolyseur ?',
          paragraphText:
            'Alors qu’une pile convertit de l’énergie chimique en énergie électrique, un électrolyseur convertit de l’énergie électrique en énergie chimique (et un peu de chaleur par effet Joule).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p04_q2',
            type: 'mcq',
            prompt: 'Quelle conversion d’énergie caractérise principalement le fonctionnement d’un électrolyseur ?',
            options: [
              'Énergie électrique reçue convertie en énergie chimique',
              'Énergie chimique convertie en énergie électrique',
              'Énergie mécanique convertie en énergie nucléaire',
              'Énergie thermique convertie intégralement en énergie lumineuse',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’électrolyseur reçoit de l’énergie électrique du générateur pour provoquer des transformations chimiques.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Galvanoplastie',
          stepTheme: 'Argenture d’une bague',
          stepTitle: 'Quel bilan chimique pour l’argenture par Ag⁺ et Cl⁻ ?',
          paragraphText:
            'À la cathode (bague) : $\\mathrm{Ag^+ + e^- \\longrightarrow Ag}$ (multiplié par 2). À l’anode (graphite) : $2\\,\\mathrm{Cl^- \\longrightarrow Cl_2 + 2\\,e^-}$. Bilan : $2\\,\\mathrm{Ag^+ + 2\\,Cl^- \\longrightarrow 2\\,Ag + Cl_2}$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p04_q3',
            type: 'mcq',
            prompt: 'Un bijoutier argente une bague en cuivre dans une solution contenant des ions $\\mathrm{Ag^+}$ et $\\mathrm{Cl^-}$ avec une anode en graphite. Quelle est l’équation-bilan de cette électrolyse ?',
            options: [
              '$2\\,\\mathrm{Ag^+ + 2\\,Cl^- \\longrightarrow 2\\,Ag + Cl_2}$',
              '$\\mathrm{Ag^+ + Cl^- \\longrightarrow AgCl}$',
              '$\\mathrm{Cu + 2\\,Ag^+ \\longrightarrow Cu^{2+} + 2\\,Ag}$',
              '$2\\,\\mathrm{Ag + Cl_2 \\longrightarrow 2\\,Ag^+ + 2\\,Cl^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On additionne 2 × (Ag⁺ + e⁻ → Ag) à la cathode et (2 Cl⁻ → Cl₂ + 2 e⁻) à l’anode pour obtenir 2 Ag⁺ + 2 Cl⁻ → 2 Ag + Cl₂.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège de schéma',
          stepTheme: 'Éviter l’inversion',
          stepTitle: 'Que se passe-t-il si la bague est branchée à l’anode ?',
          paragraphText:
            'Si la bague en cuivre était branchée par erreur à l’anode (+), le cuivre subirait une oxydation (Cu → Cu²⁺ + 2 e⁻) : la bague serait dissoute au lieu d’être argentée !',
          konanTip: 'Ne pas confondre : à l’anode, un métal attaquable se dissout ; à la cathode, il reçoit le dépôt métallique.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p04_q4',
            type: 'mcq',
            prompt: 'Que risquerait-il de se produire si le bijoutier branchait par erreur la bague en cuivre à la borne positive (anode) du générateur ?',
            options: [
              'La bague en cuivre s’oxyderait et se dissoudrait au lieu de recevoir le dépôt d’argent',
              'La bague recevrait deux fois plus vite le dépôt d’argent',
              'Il se déposerait du dichlore solide sur la bague',
              'Aucune réaction ne pourrait se produire dans la cuve',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À l’anode se produit une oxydation : une électrode de cuivre tend à s’oxyder en ions Cu²⁺ (dissolution) plutôt qu’à recevoir de l’argent.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Anode soluble',
          stepTheme: 'Purification des métaux',
          stepTitle: 'Qu’est-ce qu’une électrolyse à anode soluble ?',
          paragraphText:
            'Dans le raffinage d’un métal (cuivre impur, argent, or…), l’anode est constituée du métal impur lui-même qui s’oxyde en cations, lesquels vont ensuite se déposer purifiés sur la cathode.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p04_q5',
            type: 'mcq',
            prompt: 'Quel est le principe d’une électrolyse dite à « anode soluble » utilisée pour purifier un métal M ?',
            options: [
              'Le métal M impur forme l’anode (où il s’oxyde en $M^{n+}$) et se redépose pur à la cathode',
              'Les deux électrodes sont en platine totalement inattaquable',
              'Le métal impur est placé à la cathode et s’y dissout',
              'L’électrolyte ne contient aucun ion métallique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À anode soluble, l’anode de métal impur se consomme par oxydation (M → Mⁿ⁺ + n e⁻) et le métal pur se dépose à la cathode (Mⁿ⁺ + n e⁻ → M).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Industrie',
          stepTheme: 'Domaines d’application',
          stepTitle: 'Reconnaître les usages majeurs de l’électrolyse',
          paragraphText:
            'L’électrolyse sert à préparer des métaux (aluminium Al) et gaz industriels (Cl₂, H₂, H₂O₂), à protéger contre la corrosion (galvanoplastie), à purifier des métaux et à restaurer des objets archéologiques.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p04_q6',
            type: 'mcq',
            prompt: 'Parmi ces procédés industriels, lequel repose sur l’électrolyse ?',
            options: [
              'La fabrication de l’aluminium, du dichlore et le revêtement métallique par galvanoplastie',
              'La distillation fractionnée du pétrole brut uniquement',
              'Le craquage catalytique des alcanes à haute température',
              'La réaction spontanée d’estérification entre un acide et un alcool',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’électrolyse industrielle permet notamment de produire Al, Cl₂, H₂, H₂O₂ et de réaliser la galvanoplastie.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Électrolyse contrôlée et potentiel standard E° (Exercice 4)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l10_electrolyse_p05',
      order: 5,
      title: 'Électrolyse contrôlée : tension seuil et ordre de dépôt',
      summary:
        'Prévoir l’ordre de dépôt de deux métaux lors d’une électrolyse et calculer la tension théorique minimale U ≥ E°(anode) − E°(cathode).',
      conceptExplanation:
        "Lorsqu’une solution contient plusieurs espèces susceptibles d’être réduites à la cathode (par exemple des ions $\\mathrm{Cu^{2+}}$ et $\\mathrm{Ni^{2+}}$ en milieu acide, étudiés dans l’Exercice 4 du cours), on peut séparer ou contrôler les dépôts en ajustant la **tension électrique $U$** appliquée entre les électrodes :\n\n- **Tension théorique minimale de décomposition** :\n  $$U_{\\min} = E^\\circ_{\\text{anode}} - E^\\circ_{\\text{cathode}}$$\n  Pour qu’une électrolyse se produise (sans tenir compte des surtensions), il faut appliquer $U \\geqslant E^\\circ(\\text{couple oxydé à l'anode}) - E^\\circ(\\text{couple réduit à la cathode})$.\n- **Application (dépôt sélectif de $\\mathrm{Cu}$ puis de $\\mathrm{Ni}$, avec dégagement de $\\mathrm{O_2}$ à l’anode à $\\mathrm{pH}=2$)** :\n  Données : $E^\\circ(\\mathrm{O_2/H_2O}) = 1{,}11\\,\\mathrm{V}$ (à $\\mathrm{pH}=2$), $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = 0{,}34\\,\\mathrm{V}$, $E^\\circ(\\mathrm{Ni^{2+}/Ni}) = -0{,}25\\,\\mathrm{V}$.\n  - Pour déposer du **cuivre** ($\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$) : $U \\geqslant 1{,}11 - 0{,}34 = 0{,}77\\,\\mathrm{V}$.\n  - Pour déposer du **nickel** ($\\mathrm{Ni^{2+} + 2\\,e^- \\longrightarrow Ni}$) : $U \\geqslant 1{,}11 - (-0{,}25) = 1{,}36\\,\\mathrm{V}$.\n- **Ordre de dépôt** : l’oxydant **le plus fort** (plus grand $E^\\circ$), ici $\\mathrm{Cu^{2+}}$, demande une tension minimale plus faible ($0{,}77\\,\\mathrm{V} < 1{,}36\\,\\mathrm{V}$) : **le cuivre se dépose donc avant le nickel**. Pour $0{,}77\\,\\mathrm{V} \\leqslant U < 1{,}36\\,\\mathrm{V}$, seul le cuivre se dépose ; une fois tout le cuivre consommé et pour $U \\geqslant 1{,}36\\,\\mathrm{V}$, le nickel se dépose à son tour.",
      keyRule:
        'À la cathode, l’oxydant de potentiel E° le plus élevé est réduit en premier car sa tension seuil U_min = E°(anode) − E°(cathode) est la plus faible.',
      formulas: [
        {
          name: 'Tension théorique minimale d’électrolyse',
          formula: 'U_{\\min} = E^\\circ_{\\text{anode}} - E^\\circ_{\\text{cathode}}',
          note: 'Il faut U ≥ U_min (en négligeant les surtensions aux électrodes)',
        },
      ],
      workedExample: {
        title: 'Calculer les concentrations et la tension seuil (Exercice 4 du cours)',
        statement:
          'On verse $V_1 = 100\\,\\mathrm{mL}$ de $\\mathrm{CuSO_4}$ ($C_1$) et $V_2 = 250\\,\\mathrm{mL}$ de $\\mathrm{NiSO_4}$ ($C_2$) acidifiés. On recueille $m_1 = 0{,}32\\,\\mathrm{g}$ de $\\mathrm{Cu}$ ($M = 63{,}5\\,\\mathrm{g/mol}$) sous $U_1$, puis $m_2 = 0{,}20\\,\\mathrm{g}$ de $\\mathrm{Ni}$ ($M = 58{,}7\\,\\mathrm{g/mol}$) sous $U_2$. Calcule $C_1$ et $C_2$ (concentrations initiales des deux solutions avant mélange).',
        methodSteps: [
          '1) Quantité de cuivre : n₁ = m₁ / M(Cu) = 0,32 / 63,5 ≈ 5,0 × 10⁻³ mol, donc C₁ = n₁ / V₁ = 5,0 × 10⁻³ / 0,100 = 5,0 × 10⁻² mol/L.',
          '2) Quantité de nickel : n₂ = m₂ / M(Ni) = 0,20 / 58,7 ≈ 3,4 × 10⁻³ mol, donc C₂ = n₂ / V₂ = 3,4 × 10⁻³ / 0,250 = 1,36 × 10⁻² mol/L.',
          '3) Ordre de dépôt : E°(Cu²⁺/Cu) = +0,34 V > E°(Ni²⁺/Ni) = −0,25 V, donc U_min(Cu) = 0,77 V < U_min(Ni) = 1,36 V.',
        ],
        conclusion:
          'C₁ = 5,0 × 10⁻² mol/L, C₂ = 1,36 × 10⁻² mol/L ; le cuivre se dépose d’abord entre 0,77 V et 1,36 V.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Tension seuil',
          stepTheme: 'Formule de U_min',
          stepTitle: 'Comment calculer la tension minimale théorique d’électrolyse ?',
          paragraphText:
            'La tension minimale théorique est égale à la différence entre le potentiel du couple oxydé à l’anode et celui du couple réduit à la cathode : $U_{\\min} = E^\\circ_{\\text{anode}} - E^\\circ_{\\text{cathode}}$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p05_q1',
            type: 'mcq',
            prompt: 'Avec $E^\\circ(\\mathrm{O_2/H_2O}) = 1{,}11\\,\\mathrm{V}$ à l’anode et $E^\\circ(\\mathrm{Cu^{2+}/Cu}) = 0{,}34\\,\\mathrm{V}$ à la cathode, quelle tension minimale théorique faut-il appliquer pour déposer du cuivre ?',
            options: [
              '$0{,}77\\,\\mathrm{V}$',
              '$1{,}45\\,\\mathrm{V}$',
              '$0{,}34\\,\\mathrm{V}$',
              '$1{,}11\\,\\mathrm{V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'U_min = E°(O₂/H₂O) − E°(Cu²⁺/Cu) = 1,11 − 0,34 = 0,77 V.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Calcul',
          stepTheme: 'Tension seuil du nickel',
          stepTitle: 'Calculer U_min pour déposer le nickel',
          paragraphText:
            'Attention au signe négatif de $E^\\circ(\\mathrm{Ni^{2+}/Ni}) = -0{,}25\\,\\mathrm{V}$ : soustraire un nombre négatif revient à ajouter sa valeur absolue.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p05_q2',
            type: 'mcq',
            prompt: 'Avec $E^\\circ(\\mathrm{O_2/H_2O}) = 1{,}11\\,\\mathrm{V}$ et $E^\\circ(\\mathrm{Ni^{2+}/Ni}) = -0{,}25\\,\\mathrm{V}$, quelle est la tension minimale théorique pour déposer du nickel ?',
            options: [
              '$1{,}36\\,\\mathrm{V}$',
              '$0{,}86\\,\\mathrm{V}$',
              '$-1{,}36\\,\\mathrm{V}$',
              '$0{,}25\\,\\mathrm{V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'U_min(Ni) = 1,11 − (−0,25) = 1,11 + 0,25 = 1,36 V.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Sélectivité',
          stepTheme: 'Ordre de dépôt',
          stepTitle: 'Quel cation métallique se dépose en premier ?',
          paragraphText:
            'Entre deux cations métalliques, celui dont le potentiel E° est le plus élevé est l’oxydant le plus fort : il est réduit à une tension plus faible et se dépose le premier.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p05_q3',
            type: 'mcq',
            prompt: 'Une solution contient des ions $\\mathrm{Cu^{2+}}$ ($E^\\circ = +0{,}34\\,\\mathrm{V}$) et $\\mathrm{Ni^{2+}}$ ($E^\\circ = -0{,}25\\,\\mathrm{V}$). Si l’on applique une tension $U = 1{,}00\\,\\mathrm{V}$ (avec $E^\\circ_{\\text{anode}} = 1{,}11\\,\\mathrm{V}$), qu’observe-t-on à la cathode ?',
            options: [
              'Uniquement un dépôt de cuivre $\\mathrm{Cu}$',
              'Uniquement un dépôt de nickel $\\mathrm{Ni}$',
              'Un dépôt simultané de cuivre et de nickel dès le départ',
              'Aucun dépôt métallique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Puisque 0,77 V ≤ 1,00 V < 1,36 V, le seuil du cuivre est dépassé mais pas celui du nickel : seul le cuivre se dépose.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Concentration',
          stepTheme: 'Calcul de C₁',
          stepTitle: 'Déterminer C₁ à partir de la masse de cuivre déposée',
          paragraphText:
            'Si tout le cuivre d’une solution initiale de volume $V_1$ se dépose, $n_1 = m_1 / M(\\mathrm{Cu})$ puis $C_1 = n_1 / V_1$ (en convertissant $V_1$ en litres).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p05_q4',
            type: 'mcq',
            prompt: 'La réduction complète des ions $\\mathrm{Cu^{2+}}$ apportés par $V_1 = 100\\,\\mathrm{mL}$ de solution de sulfate de cuivre dépose $m_1 = 0{,}32\\,\\mathrm{g}$ de cuivre ($M(\\mathrm{Cu}) = 63{,}5\\,\\mathrm{g\\cdot mol^{-1}}$). Quelle est la concentration $C_1$ de cette solution ?',
            options: [
              '$5{,}0 \\times 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$',
              '$5{,}0 \\times 10^{-3}\\,\\mathrm{mol\\cdot L^{-1}}$',
              '$0{,}50\\,\\mathrm{mol\\cdot L^{-1}}$',
              '$3{,}2 \\times 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n₁ = 0,32 / 63,5 ≈ 5,0 × 10⁻³ mol ; avec V₁ = 0,100 L, C₁ = 5,0 × 10⁻³ / 0,100 = 5,0 × 10⁻² mol/L.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Calcul de C₂',
          stepTitle: 'Déterminer la concentration C₂ de sulfate de nickel',
          paragraphText:
            'Pour $m_2 = 0{,}20\\,\\mathrm{g}$ de nickel ($M(\\mathrm{Ni}) = 58{,}7\\,\\mathrm{g\\cdot mol^{-1}}$) issus de $V_2 = 250\\,\\mathrm{mL} = 0{,}250\\,\\mathrm{L}$, on obtient $n_2 = 3{,}4 \\times 10^{-3}\\,\\mathrm{mol}$ et $C_2 = n_2 / V_2$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p05_q5',
            type: 'mcq',
            prompt: 'La réduction complète des ions $\\mathrm{Ni^{2+}}$ issus de $V_2 = 250\\,\\mathrm{mL}$ de solution dépose $m_2 = 0{,}20\\,\\mathrm{g}$ de nickel ($M(\\mathrm{Ni}) = 58{,}7\\,\\mathrm{g\\cdot mol^{-1}}$). Quelle est la concentration $C_2$ ?',
            options: [
              '$1{,}36 \\times 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$',
              '$3{,}4 \\times 10^{-3}\\,\\mathrm{mol\\cdot L^{-1}}$',
              '$8{,}0 \\times 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$',
              '$5{,}44 \\times 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n₂ = 0,20 / 58,7 ≈ 3,4 × 10⁻³ mol, donc C₂ = 3,4 × 10⁻³ / 0,250 = 1,36 × 10⁻² mol/L.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Demi-équation vs bilan',
          stepTitle: 'Distinguer demi-équation cathodique et bilan global',
          paragraphText:
            'À la cathode seule, on écrit la demi-équation de réduction (ex. $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$). L’équation-bilan globale associe en plus l’oxydation anodique ($2\\,\\mathrm{H_2O \\longrightarrow O_2 + 4\\,H^+ + 4\\,e^-}$).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p05_q6',
            type: 'mcq',
            prompt: 'Lorsqu’on électrolyse du sulfate de cuivre avec dépôt de $\\mathrm{Cu}$ à la cathode et dégagement de $\\mathrm{O_2}$ à l’anode, quelle est l’équation-bilan globale ?',
            options: [
              '$2\\,\\mathrm{Cu^{2+} + 2\\,H_2O \\longrightarrow 2\\,Cu + O_2 + 4\\,H^+}$',
              '$\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$',
              '$\\mathrm{Cu + 2\\,H^+ \\longrightarrow Cu^{2+} + H_2}$',
              '$\\mathrm{Cu^{2+} + SO_4^{2-} \\longrightarrow Cu + SO_4}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On multiplie par 2 la demi-équation cathodique (Cu²⁺ + 2 e⁻ → Cu) et on l’ajoute à l’oxydation de l’eau (2 H₂O → O₂ + 4 H⁺ + 4 e⁻).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Bilan quantitatif : quantité d’électricité et constante de Faraday
    // ========================================================================
    {
      id: 'premiere_c_chimie_l10_electrolyse_p06',
      order: 6,
      title: 'Aspects quantitatifs : quantité d’électricité, Faraday et masse déposée',
      summary:
        'Relier l’intensité I et la durée Δt à la quantité d’électricité Q, au nombre de moles d’électrons et à la masse de métal déposé (Exercice 5).',
      conceptExplanation:
        "Pour prévoir la masse d’un métal déposé pendant une durée donnée ou le temps nécessaire à une galvanoplastie (Exercice 5 du cours), on relie l’électricité et la stœchiométrie des électrons :\n\n- **Quantité d’électricité $Q$** : lorsqu’un courant continu d’intensité constante $I$ (en ampères, $\\mathrm{A}$) circule pendant une durée $\\Delta t$ (en secondes, $\\mathrm{s}$) :\n  $$Q = I \\cdot \\Delta t \\quad (\\text{en coulombs, } \\mathrm{C})$$\n- **Charge d’une mole d’électrons (Faraday)** : une mole d’électrons contient $\\mathcal{N} = 6{,}02 \\times 10^{23}$ électrons de charge élémentaire $e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$ :\n  $$1\\,\\mathrm{F} = \\mathcal{N} \\cdot e \\approx 96\\,500\\,\\mathrm{C\\cdot mol^{-1}} \\quad (\\text{soit } 96\\,320\\,\\mathrm{C\\cdot mol^{-1}} \\text{ avec } 6{,}02 \\text{ et } 1{,}6)$$\n  Ainsi, pour $n(e^-)$ moles d’électrons échangées :\n  $$Q = n(e^-) \\cdot \\mathcal{N} \\cdot e = n(e^-) \\cdot F$$\n- **Lien avec le métal déposé** : pour une réduction $\\mathrm{M^{z+} + z\\,e^- \\longrightarrow M}$ (par exemple $z=1$ pour $\\mathrm{Ag^+ + e^- \\longrightarrow Ag}$, ou $z=2$ pour $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$) :\n  $$n(e^-) = z \\cdot n(M) = z \\cdot \\frac{m(M)}{M(M)} \\implies m(M) = \\frac{M(M) \\cdot I \\cdot \\Delta t}{z \\cdot F}$$\n- **Vigilance sur l’Exercice 5 du polycopié** : pour déposer $h = 7\\,\\mathrm{mm}$ d’argent ($\\rho = 8\\,900\\,\\mathrm{kg\\cdot m^{-3}}$) sur $S = 12\\,\\mathrm{cm^2}$, on obtient bien $m(\\mathrm{Ag}) = \\rho \\cdot S \\cdot h = 8\\,900 \\times (12 \\times 10^{-4}) \\times (7 \\times 10^{-3}) = 7{,}476 \\times 10^{-2}\\,\\mathrm{kg} = 74{,}76\\,\\mathrm{g}$. En revanche, la charge correspondante vaut $Q = \\frac{74{,}76}{108} \\times 96\\,320 \\approx 6{,}67 \\times 10^4\\,\\mathrm{C}$ (soit $\\Delta t \\approx 18{,}5\\,\\mathrm{h}$ sous $1\\,\\mathrm{A}$, et non $7\\,200\\,\\mathrm{C}$ comme écrit par erreur dans le corrigé du document).",
      keyRule:
        'Q = I · Δt = n(e⁻) · F (avec 1 F = N·e ≈ 96 500 C/mol). Si Mᶻ⁺ + z e⁻ → M, alors n(e⁻) = z · n(M) = z · m(M) / M(M).',
      formulas: [
        {
          name: 'Loi de Faraday (quantité d’électricité et masse déposée)',
          formula: 'Q = I \\cdot \\Delta t = n(e^-) \\cdot F = z \\cdot \\frac{m(M)}{M(M)} \\cdot F',
          note: 'Q en C, I en A, Δt en s, 1 F = N·e ≈ 96 500 C·mol⁻¹',
        },
      ],
      workedExample: {
        title: 'Calculer la charge et la durée d’un dépôt d’argent',
        statement:
          'On réalise une argenture ($\\mathrm{Ag^+ + e^- \\longrightarrow Ag}$) avec un courant $I = 2{,}0\\,\\mathrm{A}$ pour déposer $m = 10{,}8\\,\\mathrm{g}$ d’argent ($M(\\mathrm{Ag}) = 108\\,\\mathrm{g\\cdot mol^{-1}}$, $1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$). Détermine $Q$ et $\\Delta t$.',
        methodSteps: [
          '1) Quantité d’argent : n(Ag) = m / M(Ag) = 10,8 / 108 = 0,10 mol.',
          '2) D’après Ag⁺ + e⁻ → Ag (z = 1) : n(e⁻) = n(Ag) = 0,10 mol.',
          '3) Quantité d’électricité : Q = n(e⁻) · F = 0,10 × 96 500 = 9 650 C.',
          '4) Durée : Δt = Q / I = 9 650 / 2,0 = 4 825 s (soit environ 1 h 20 min 25 s).',
        ],
        conclusion:
          'Il faut une quantité d’électricité Q = 9 650 C, soit une durée Δt = 4 825 s sous 2,0 A.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Faraday',
          stepTheme: 'Charge d’une mole d’électrons',
          stepTitle: 'Que représente le faraday (1 F) ?',
          paragraphText:
            'Le faraday est la valeur absolue de la charge électrique portée par une mole d’électrons : $1\\,\\mathrm{F} = \\mathcal{N} \\cdot e \\approx 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p06_q1',
            type: 'mcq',
            prompt: 'Que représente une quantité d’électricité de $1\\,\\mathrm{faraday}$ ($\\approx 96\\,500\\,\\mathrm{C}$) ?',
            options: [
              'La charge électrique totale transportée par une mole d’électrons',
              'La charge d’un seul électron en coulombs',
              'Le courant qui traverse la cuve en une heure',
              'La masse d’une mole d’argent métallique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une mole d’électrons porte une charge de valeur absolue N · e ≈ 96 500 C = 1 F.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Quantité de charge',
          stepTheme: 'Relation Q = I·Δt',
          stepTitle: 'Calculer la quantité d’électricité Q en coulombs',
          paragraphText:
            'Dans la formule $Q = I \\cdot \\Delta t$, l’intensité $I$ doit être exprimée en ampères ($\\mathrm{A}$) et la durée $\\Delta t$ obligatoirement convertie en secondes ($\\mathrm{s}$).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p06_q2',
            type: 'mcq',
            prompt: 'Un électrolyseur est traversé par un courant constant $I = 2{,}5\\,\\mathrm{A}$ pendant $20\\,\\mathrm{min}$. Quelle quantité d’électricité $Q$ a traversé le circuit ?',
            options: [
              '$3\\,000\\,\\mathrm{C}$',
              '$50\\,\\mathrm{C}$',
              '$1\\,200\\,\\mathrm{C}$',
              '$480\\,\\mathrm{C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Δt = 20 × 60 = 1 200 s ; donc Q = I · Δt = 2,5 × 1 200 = 3 000 C.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Masse volumique',
          stepTheme: 'Masse d’une couche mince',
          stepTitle: 'Calculer la masse d’un dépôt à partir de S, h et ρ',
          paragraphText:
            'Pour une couche d’épaisseur $h$ sur une surface $S$, le volume est $V = S \\cdot h$ et la masse vaut $m = \\rho \\cdot S \\cdot h$ (attention aux conversions d’unités en $\\mathrm{m}$ ou $\\mathrm{cm}$ !).',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p06_q3',
            type: 'mcq',
            prompt: 'On dépose une couche d’argent ($\\rho = 8\\,900\\,\\mathrm{kg\\cdot m^{-3}}$) d’épaisseur $h = 7\\,\\mathrm{mm}$ sur une plaque de surface $S = 12\\,\\mathrm{cm^2}$. Quelle est la masse d’argent déposée ?',
            options: [
              '$74{,}76\\,\\mathrm{g}$',
              '$7{,}48\\,\\mathrm{g}$',
              '$747{,}6\\,\\mathrm{g}$',
              '$0{,}75\\,\\mathrm{g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'S = 12 × 10⁻⁴ m² et h = 7 × 10⁻³ m, donc V = 8,4 × 10⁻⁶ m³ et m = 8 900 × 8,4 × 10⁻⁶ = 0,07476 kg = 74,76 g.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Bilan Faraday',
          stepTheme: 'Calcul pour Ag⁺',
          stepTitle: 'Calculer Q et la durée pour un dépôt d’argent',
          paragraphText:
            'Pour l’argent ($\\mathrm{Ag^+ + e^- \\longrightarrow Ag}$), $n(e^-) = n(\\mathrm{Ag}) = m / M(\\mathrm{Ag})$, d’où $Q = n(\\mathrm{Ag}) \\cdot F$ et $\\Delta t = Q / I$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p06_q4',
            type: 'mcq',
            prompt: 'Combien de temps faut-il avec $I = 2{,}0\\,\\mathrm{A}$ pour déposer $10{,}8\\,\\mathrm{g}$ d’argent ($M(\\mathrm{Ag}) = 108\\,\\mathrm{g\\cdot mol^{-1}}$, $1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$) ?',
            options: [
              '$4\\,825\\,\\mathrm{s}$',
              '$9\\,650\\,\\mathrm{s}$',
              '$2\\,412\\,\\mathrm{s}$',
              '$19\\,300\\,\\mathrm{s}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(Ag) = 10,8 / 108 = 0,10 mol = n(e⁻) ; Q = 0,10 × 96 500 = 9 650 C ; Δt = 9 650 / 2,0 = 4 825 s.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège du facteur z',
          stepTheme: 'Ions bivalents (Cu²⁺)',
          stepTitle: 'Ne pas oublier le coefficient z = 2 pour Cu²⁺ ou Sn²⁺',
          paragraphText:
            'Dans $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$, il faut $2\\,\\mathrm{mol}$ d’électrons pour déposer $1\\,\\mathrm{mol}$ de cuivre : $n(e^-) = 2\\,n(\\mathrm{Cu})$.',
          konanTip: 'Vérifie toujours la charge z de l’ion métallique : z = 1 pour Ag⁺, mais z = 2 pour Cu²⁺, Sn²⁺, Zn²⁺ ou Ni²⁺.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p06_q5',
            type: 'mcq',
            prompt: 'Quelle quantité d’électricité faut-il pour déposer $6{,}35\\,\\mathrm{g}$ de cuivre à partir d’une solution d’ions $\\mathrm{Cu^{2+}}$ ($M(\\mathrm{Cu}) = 63{,}5\\,\\mathrm{g\\cdot mol^{-1}}$, $1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$) ?',
            options: [
              '$19\\,300\\,\\mathrm{C}$',
              '$9\\,650\\,\\mathrm{C}$',
              '$4\\,825\\,\\mathrm{C}$',
              '$38\\,600\\,\\mathrm{C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(Cu) = 6,35 / 63,5 = 0,10 mol. D’après Cu²⁺ + 2 e⁻ → Cu, n(e⁻) = 2 × 0,10 = 0,20 mol, d’où Q = 0,20 × 96 500 = 19 300 C.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Volume de gaz produit',
          stepTitle: 'Relier la quantité d’électricité au volume de dihydrogène',
          paragraphText:
            'À la cathode ($2\\,\\mathrm{H^+ + 2\\,e^- \\longrightarrow H_2}$), $n(\\mathrm{H_2}) = n(e^-) / 2$, ce qui donne $V(\\mathrm{H_2}) = n(\\mathrm{H_2}) \\cdot V_m$.',
          exercise: {
            id: 'premiere_c_chimie_l10_electrolyse_p06_q6',
            type: 'mcq',
            prompt: 'Lors de l’électrolyse de $\\mathrm{H_2SO_4}$, il passe une quantité d’électricité $Q = 19\\,300\\,\\mathrm{C}$ ($1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$, $V_m = 24\\,\\mathrm{L\\cdot mol^{-1}}$). Quel volume de $\\mathrm{H_2}$ se dégage à la cathode ?',
            options: [
              '$2{,}4\\,\\mathrm{L}$',
              '$4{,}8\\,\\mathrm{L}$',
              '$1{,}2\\,\\mathrm{L}$',
              '$24\\,\\mathrm{L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(e⁻) = 19 300 / 96 500 = 0,20 mol. D’après 2 H⁺ + 2 e⁻ → H₂, n(H₂) = 0,20 / 2 = 0,10 mol, d’où V(H₂) = 0,10 × 24 = 2,4 L.',
          },
        },
      ],
    },
  ]),
};
