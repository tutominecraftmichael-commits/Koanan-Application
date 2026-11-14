import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CDE - Chimie : Classification quantitative des couples oxydants/réducteurs » (format v2).
export const CHIMIE_1RE_CD_L09_CLASSIFICATION_QUANTITATIVE_COUPLES: CurriculumChapter = {
  id: 'premiere_c_chimie_l09_classification_quantitative_couples',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 9,
  title: 'Leçon 9 : Classification quantitative des couples oxydants/réducteurs',
  summary:
    'Pile électrochimique (Daniell, schéma conventionnel), électrode standard à hydrogène (ESH), potentiels normaux E° et f.é.m., échelle POC/PRC, prévision des réactions et piles usuelles / accumulateurs.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CDE - Chimie : Classification quantitative des couples oxydants/réducteurs.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Étude de la pile Daniell et notion de pile électrochimique
    // ========================================================================
    {
      id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01',
      order: 1,
      title: 'La pile électrochimique : étude complète de la pile Daniell',
      summary:
        'Décrire la constitution d’une pile Daniell (demi-piles Zn²⁺/Zn et Cu²⁺/Cu, pont salin), identifier ses bornes (+ et −) et expliquer l’évolution des électrodes et des concentrations.',
      conceptExplanation:
        "Une **pile électrochimique** sépare spatialement deux couples oxydant/réducteur en deux **demi-piles** reliées par un **pont salin** afin d’obliger les électrons à circuler dans un circuit extérieur : elle convertit l’**énergie chimique en énergie électrique**.\n\n**Exemple fondamental : la pile Daniell (p. 1–2)**\n- **Demi-pile négative ($-$)** : lame de **zinc** ($\\mathrm{Zn}$) plongée dans une solution de sulfate de zinc ($\\mathrm{Zn^{2+} + SO_4^{2-}}$).\n  - Elle est le siège d’une **oxydation** : $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$.\n  - La **masse de la lame de zinc diminue** et la concentration $[\\mathrm{Zn^{2+}}]$ **augmente**.\n- **Demi-pile positive ($+$)** : lame de **cuivre** ($\\mathrm{Cu}$) plongée dans une solution de sulfate de cuivre ($\\mathrm{Cu^{2+} + SO_4^{2-}}$).\n  - Elle est le siège d’une **réduction** : $\\mathrm{Cu^{2+} + 2\\,e^- \\longrightarrow Cu}$.\n  - La **masse de la lame de cuivre augmente** (dépôt de cuivre) et $[\\mathrm{Cu^{2+}}]$ **diminue**.\n- **Pont salin (pont de jonction)** : bande de papier filtre imbibée de $\\mathrm{KCl}$ ou $\\mathrm{KNO_3}$ inerte ; il assure le contact électrique et l’électroneutralité des solutions.\n- **Équation-bilan de fonctionnement** : $\\mathrm{Zn + Cu^{2+} \\longrightarrow Zn^{2+} + Cu}$.\n- **Circulation** : les électrons ($e^-$) circulent à l’extérieur du pôle **$-$ (Zn)** vers le pôle **$+$ (Cu)** ; le courant électrique conventionnel $I$ va de **$+$ (Cu)** vers **$-$ (Zn)**.",
      keyRule:
        'Dans toute pile : le pôle négatif (−) est toujours le siège de l’oxydation (le métal se consomme) et libère les électrons vers le pôle positif (+), siège de la réduction (dépôt métallique). Le pont salin ferme le circuit.',
      formulas: [
        {
          name: 'Bilan de la pile Daniell',
          formula: '\\mathrm{Zn + Cu^{2+} \\longrightarrow Cu + Zn^{2+}}',
          note: 'Zn (pôle −) est oxydé ; Cu²⁺ se réduit sur l’électrode de cuivre (pôle +)',
        },
      ],
      workedExample: {
        title: 'Suivre l’évolution d’une pile Cu/Ag (Activité d’application p. 3)',
        statement:
          'On considère la pile $\\ominus\\ \\mathrm{Cu/Cu^{2+} \\parallel Ag^+/Ag}\\ \\oplus$. Que deviennent les masses des deux électrodes lorsqu’elle débite ?',
        methodSteps: [
          '1) Pôle négatif (−) = cuivre : siège de l’oxydation Cu → Cu²⁺ + 2 e⁻ ⇒ la lame de cuivre perd des atomes, sa masse diminue.',
          '2) Pôle positif (+) = argent : siège de la réduction Ag⁺ + e⁻ → Ag ⇒ de l’argent métallique se dépose, la masse de l’électrode d’argent augmente.',
        ],
        conclusion:
          'La masse de l’électrode de cuivre diminue et celle de l’électrode d’argent augmente.',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Schéma de fonctionnement de la pile Daniell',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma de la pile Daniell avec électrode de zinc moins, électrode de cuivre plus et pont salin">
  <rect x="6" y="6" width="348" height="178" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="26" y="88" width="110" height="78" rx="4" fill="#F1F5F9" stroke="#334155" stroke-width="1.6"/>
  <rect x="224" y="88" width="110" height="78" rx="4" fill="#DBEAFE" stroke="#334155" stroke-width="1.6"/>
  <rect x="46" y="64" width="14" height="84" rx="2" fill="#94A3B8" stroke="#334155" stroke-width="1.4"/>
  <rect x="300" y="64" width="14" height="84" rx="2" fill="#EA580C" stroke="#7C2D12" stroke-width="1.4"/>
  <path d="M98,118 L98,74 Q98,66 106,66 L254,66 Q262,66 262,74 L262,118" fill="none" stroke="#FEF3C7" stroke-width="11"/>
  <path d="M98,118 L98,74 Q98,66 106,66 L254,66 Q262,66 262,74 L262,118" fill="none" stroke="#D97706" stroke-width="1.4"/>
  <text x="180" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#92400E">Pont salin (K⁺ + Cl⁻)</text>
  <polyline points="53,64 53,30 156,30" fill="none" stroke="#334155" stroke-width="1.8"/>
  <polyline points="204,30 307,30 307,64" fill="none" stroke="#334155" stroke-width="1.8"/>
  <circle cx="180" cy="30" r="15" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.6"/>
  <text x="180" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0F172A">mA</text>
  <text x="104" y="23" text-anchor="middle" font-size="9.5" font-weight="700" fill="#DC2626">e⁻ →</text>
  <text x="256" y="23" text-anchor="middle" font-size="9.5" font-weight="700" fill="#059669">← I</text>
  <circle cx="32" cy="54" r="9" fill="#FEE2E2" stroke="#DC2626"/>
  <text x="32" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#DC2626">−</text>
  <circle cx="328" cy="54" r="9" fill="#DCFCE7" stroke="#16A34A"/>
  <text x="328" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#16A34A">+</text>
  <text x="81" y="138" text-anchor="middle" font-size="9" font-weight="700" fill="#1E293B">Lame Zn</text>
  <text x="81" y="152" text-anchor="middle" font-size="8.5" fill="#475569">Zn → Zn²⁺ + 2e⁻</text>
  <text x="279" y="138" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Lame Cu</text>
  <text x="279" y="152" text-anchor="middle" font-size="8.5" fill="#1E40AF">Cu²⁺ + 2e⁻ → Cu</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Conversion d’énergie',
          stepTheme: 'Rôle d’une pile',
          stepTitle: 'Comprendre la conversion d’énergie dans une pile',
          paragraphText:
            'En séparant l’oxydant et le réducteur dans deux compartiments reliés par un fil conducteur et un pont salin, la réaction chimique génère un courant électrique.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q1',
            type: 'mcq',
            prompt: 'Quelle conversion d’énergie réalise une pile électrochimique lorsqu’elle débite dans un circuit extérieur ?',
            options: [
              'Elle transforme de l’énergie chimique en énergie électrique',
              'Elle transforme de l’énergie électrique en énergie chimique',
              'Elle transforme de l’énergie nucléaire en énergie mécanique',
              'Elle fonctionne sans aucune réaction chimique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une pile produit de l’électricité à partir d’une réaction d’oxydoréduction spontanée : elle convertit l’énergie chimique en énergie électrique.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Pont salin',
          stepTheme: 'Rôle du pont de jonction',
          stepTitle: 'Connaître le rôle et la composition du pont salin',
          paragraphText:
            'Le pont salin (filtre imbibé de KCl ou KNO₃ inerte) ferme le circuit électrique entre les deux béchers tout en empêchant le mélange direct des couples.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q2',
            type: 'mcq',
            prompt: 'Pourquoi utilise-t-on une solution de $\\mathrm{KCl}$ ou de $\\mathrm{KNO_3}$ dans le pont salin d’une pile ?',
            options: [
              'Pour assurer le contact électrique entre les deux demi-piles par des ions inertes vis-à-vis des couples redox',
              'Pour oxyder directement l’électrode de cuivre',
              'Pour empêcher toute circulation d’ions entre les compartiments',
              'Pour dissoudre l’électrode positive',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les ions K⁺, Cl⁻ ou NO₃⁻ ne réagissent pas avec les couples de la pile et assurent l’électroneutralité et la continuité électrique.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Polarité Daniell',
          stepTheme: 'Bornes + et −',
          stepTitle: 'Identifier la borne (+) et la borne (−) de la pile Daniell',
          paragraphText:
            'Dans la pile Daniell, l’électrode de zinc cède des électrons (pôle −, oxydation) qui arrivent sur l’électrode de cuivre (pôle +, réduction).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q3',
            type: 'mcq',
            prompt: 'Lorsqu’une pile Daniell ($\\mathrm{Zn / Cu}$) fonctionne, quelle électrode constitue le pôle négatif et quelle réaction s’y produit ?',
            options: [
              'L’électrode de zinc ($-$), siège de l’oxydation $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$',
              'L’électrode de cuivre ($-$), siège de l’oxydation $\\mathrm{Cu \\longrightarrow Cu^{2+} + 2\\,e^-}$',
              'L’électrode de zinc ($-$), siège de la réduction $\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$',
              'L’électrode de cuivre ($+$), siège de l’oxydation $\\mathrm{Cu \\longrightarrow Cu^{2+} + 2\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pôle négatif d’une pile est toujours le siège de l’oxydation : ici le zinc Zn cède des électrons pour donner Zn²⁺.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Sens e⁻ et I',
          stepTheme: 'Circuit extérieur',
          stepTitle: 'Distinguer le sens des électrons et du courant I',
          paragraphText:
            'Dans les fils métalliques extérieurs, les électrons sortent du pôle − (Zn) vers le pôle + (Cu), tandis que le courant I circule de + vers −.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q4',
            type: 'mcq',
            prompt: 'Dans quel sens circulent les électrons dans le circuit extérieur d’une pile Daniell en fonctionnement ?',
            options: [
              'De la lame de zinc (pôle $-$) vers la lame de cuivre (pôle $+$)',
              'De la lame de cuivre (pôle $+$) vers la lame de zinc (pôle $-$)',
              'Dans le pont salin uniquement',
              'Dans le même sens que le courant électrique $I$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Libérés par l’oxydation du zinc au pôle (−), les électrons migrent par le circuit extérieur vers le pôle (+) en cuivre où ils réduisent Cu²⁺.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Masses & ions',
          stepTheme: 'Évolution chimique',
          stepTitle: 'Prévoir l’évolution des masses et concentrations',
          paragraphText:
            'Dans la pile Daniell, Zn se transforme en Zn²⁺ ([Zn²⁺] augmente, masse de Zn diminue) tandis que Cu²⁺ se dépose en Cu ([Cu²⁺] diminue, masse de Cu augmente).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q5',
            type: 'mcq',
            prompt: 'Lorsqu’une pile Daniell débite durablement, comment évoluent la masse de l’électrode de cuivre et la concentration $[\\mathrm{Cu^{2+}}]$ ?',
            options: [
              'La masse de cuivre augmente et $[\\mathrm{Cu^{2+}}]$ diminue',
              'La masse de cuivre diminue et $[\\mathrm{Cu^{2+}}]$ augmente',
              'La masse de cuivre et $[\\mathrm{Cu^{2+}}]$ augmentent toutes les deux',
              'Ni la masse ni la concentration ne changent',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Au pôle positif, Cu²⁺ + 2 e⁻ → Cu : les ions Cu²⁺ disparaissent de la solution en se déposant sur la lame de cuivre.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Pile Cu / Ag',
          stepTheme: 'Activité p. 3',
          stepTitle: 'Appliquer à la pile Cu / Cu²⁺ // Ag⁺ / Ag',
          paragraphText:
            'Dans la pile Cu (−) / Ag (+), le cuivre est oxydé (sa masse diminue) tandis que l’argent se dépose au pôle + (sa masse augmente).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q6',
            type: 'mcq',
            prompt: 'Dans la pile $\\ominus\\ \\mathrm{Cu/Cu^{2+} \\parallel Ag^+/Ag}\\ \\oplus$ (Activité p. 3), quelle affirmation est vraie ?',
            options: [
              'La masse de l’électrode de cuivre diminue et celle de l’électrode d’argent augmente',
              'La masse de l’électrode de cuivre augmente et celle de l’électrode d’argent diminue',
              'Les deux électrodes perdent de la masse',
              'L’argent s’oxyde en $\\mathrm{Ag^+}$ au pôle positif',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Au pôle (−), Cu → Cu²⁺ + 2 e⁻ (perte de masse). Au pôle (+), Ag⁺ + e⁻ → Ag (gain de masse par dépôt d’argent).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q1',
          type: 'mcq',
          prompt: 'Quelle conversion d’énergie réalise une pile électrochimique lorsqu’elle débite dans un circuit extérieur ?',
          options: [
            'Elle transforme de l’énergie chimique en énergie électrique',
            'Elle transforme de l’énergie électrique en énergie chimique',
            'Elle transforme de l’énergie nucléaire en énergie mécanique',
            'Elle fonctionne sans aucune réaction chimique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une pile produit de l’électricité à partir d’une réaction d’oxydoréduction spontanée : elle convertit l’énergie chimique en énergie électrique.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q2',
          type: 'mcq',
          prompt: 'Pourquoi utilise-t-on une solution de $\\mathrm{KCl}$ ou de $\\mathrm{KNO_3}$ dans le pont salin d’une pile ?',
          options: [
            'Pour assurer le contact électrique entre les deux demi-piles par des ions inertes vis-à-vis des couples redox',
            'Pour oxyder directement l’électrode de cuivre',
            'Pour empêcher toute circulation d’ions entre les compartiments',
            'Pour dissoudre l’électrode positive',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les ions K⁺, Cl⁻ ou NO₃⁻ ne réagissent pas avec les couples de la pile et assurent l’électroneutralité et la continuité électrique.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q3',
          type: 'mcq',
          prompt: 'Lorsqu’une pile Daniell ($\\mathrm{Zn / Cu}$) fonctionne, quelle électrode constitue le pôle négatif et quelle réaction s’y produit ?',
          options: [
            'L’électrode de zinc ($-$), siège de l’oxydation $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$',
            'L’électrode de cuivre ($-$), siège de l’oxydation $\\mathrm{Cu \\longrightarrow Cu^{2+} + 2\\,e^-}$',
            'L’électrode de zinc ($-$), siège de la réduction $\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$',
            'L’électrode de cuivre ($+$), siège de l’oxydation $\\mathrm{Cu \\longrightarrow Cu^{2+} + 2\\,e^-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pôle négatif d’une pile est toujours le siège de l’oxydation : ici le zinc Zn cède des électrons pour donner Zn²⁺.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q4',
          type: 'mcq',
          prompt: 'Dans quel sens circulent les électrons dans le circuit extérieur d’une pile Daniell en fonctionnement ?',
          options: [
            'De la lame de zinc (pôle $-$) vers la lame de cuivre (pôle $+$)',
            'De la lame de cuivre (pôle $+$) vers la lame de zinc (pôle $-$)',
            'Dans le pont salin uniquement',
            'Dans le même sens que le courant électrique $I$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Libérés par l’oxydation du zinc au pôle (−), les électrons migrent par le circuit extérieur vers le pôle (+) en cuivre où ils réduisent Cu²⁺.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q5',
          type: 'mcq',
          prompt: 'Lorsqu’une pile Daniell débite durablement, comment évoluent la masse de l’électrode de cuivre et la concentration $[\\mathrm{Cu^{2+}}]$ ?',
          options: [
            'La masse de cuivre augmente et $[\\mathrm{Cu^{2+}}]$ diminue',
            'La masse de cuivre diminue et $[\\mathrm{Cu^{2+}}]$ augmente',
            'La masse de cuivre et $[\\mathrm{Cu^{2+}}]$ augmentent toutes les deux',
            'Ni la masse ni la concentration ne changent',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Au pôle positif, Cu²⁺ + 2 e⁻ → Cu : les ions Cu²⁺ disparaissent de la solution en se déposant sur la lame de cuivre.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p01_q6',
          type: 'mcq',
          prompt: 'Dans la pile $\\ominus\\ \\mathrm{Cu/Cu^{2+} \\parallel Ag^+/Ag}\\ \\oplus$ (Activité p. 3), quelle affirmation est vraie ?',
          options: [
            'La masse de l’électrode de cuivre diminue et celle de l’électrode d’argent augmente',
            'La masse de l’électrode de cuivre augmente et celle de l’électrode d’argent diminue',
            'Les deux électrodes perdent de la masse',
            'L’argent s’oxyde en $\\mathrm{Ag^+}$ au pôle positif',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Au pôle (−), Cu → Cu²⁺ + 2 e⁻ (perte de masse). Au pôle (+), Ag⁺ + e⁻ → Ag (gain de masse par dépôt d’argent).',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Notation conventionnelle d’une pile et exemples
    // ========================================================================
    {
      id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02',
      order: 2,
      title: 'Notation conventionnelle d’une pile et autres piles métalliques',
      summary:
        'Écrire et lire la notation conventionnelle d’une pile (pôle − à gauche, pont salin //, pôle + à droite) et établir l’équation-bilan pour Cu/Pb, Pb/Fe, Pb/Zn, Ni/Ag.',
      conceptExplanation:
        "Par convention (p. 2–3), la **notation schématique (conventionnelle)** d’une pile place le **pôle négatif ($-$) à gauche** (sous forme $\\text{Red}/\\text{Ox}$) et le **pôle positif ($+$) à droite** (sous forme $\\text{Ox}/\\text{Red}$), séparés par deux traits verticaux ($\\parallel$) représentant le **pont salin** :\n\n$$\\ominus\\; \\mathrm{M_1 / M_1^{n+}} \\;\\parallel\\; \\mathrm{M_2^{m+} / M_2} \\;\\oplus$$\n\n- **Règle d’or** : la borne négative ($-$) est constituée par le métal **le plus réducteur** (potentiel le plus bas) et la borne positive ($+$) par le métal **le moins réducteur** (potentiel le plus élevé).\n- **Exemples du cours (p. 2 et Ex 4 p. 8)** :\n  - Pile Daniell ($\\mathrm{Cu/Zn}$) : $\\ominus\\ \\mathrm{Zn/Zn^{2+} \\parallel Cu^{2+}/Cu}\\ \\oplus$ $\\implies$ bilan : $\\mathrm{Zn + Cu^{2+} \\to Zn^{2+} + Cu}$.\n  - Pile $\\mathrm{Cu/Pb}$ : $\\ominus\\ \\mathrm{Pb/Pb^{2+} \\parallel Cu^{2+}/Cu}\\ \\oplus$ $\\implies$ bilan : $\\mathrm{Pb + Cu^{2+} \\to Pb^{2+} + Cu}$.\n  - Pile $\\mathrm{Pb/Fe}$ : $\\ominus\\ \\mathrm{Fe/Fe^{2+} \\parallel Pb^{2+}/Pb}\\ \\oplus$ $\\implies$ bilan : $\\mathrm{Fe + Pb^{2+} \\to Fe^{2+} + Pb}$.\n  - Pile $\\mathrm{Ag/Ni}$ (Ex 4) : $\\ominus\\ \\mathrm{Ni/Ni^{2+} \\parallel Ag^+/Ag}\\ \\oplus$ $\\implies$ bilan : $\\mathrm{Ni + 2\\,Ag^+ \\to Ni^{2+} + 2\\,Ag}$.",
      keyRule:
        'Notation conventionnelle : ⊖ Métal(−)/Ion(−) // Ion(+)/Métal(+) ⊕. Le métal le plus réducteur (E° le plus faible) est toujours à gauche (pôle −, oxydé) et le moins réducteur à droite (pôle +, réduit).',
      formulas: [
        {
          name: 'Notation conventionnelle générale',
          formula: '\\ominus\\; \\mathrm{M_{\\text{réducteur}} / M^{n+}} \\;\\parallel\\; \\mathrm{M^{\\prime m+} / M^{\\prime}_{\\text{moins réducteur}}} \\;\\oplus',
          note: 'Les deux traits // (ou pointillés) représentent le pont salin',
        },
      ],
      workedExample: {
        title: 'Construire la pile Ni / Ag (Exercice 4 p. 8)',
        statement:
          'On associe les demi-piles $\\mathrm{Ag^+/Ag}$ ($E^0 = 0{,}80\\text{ V}$) et $\\mathrm{Ni^{2+}/Ni}$ ($E^0 = 0{,}23\\text{ V}$). Donne sa polarité, sa notation conventionnelle et son équation-bilan.',
        methodSteps: [
          '1) Comparaison : E°(Ag⁺/Ag) = 0,80 V > E°(Ni²⁺/Ni) = 0,23 V ⇒ l’argent Ag est le pôle (+) et le nickel Ni est le pôle (−).',
          '2) Notation : ⊖ Ni / Ni²⁺ // Ag⁺ / Ag ⊕.',
          '3) Demi-équations : pôle (−) Ni → Ni²⁺ + 2 e⁻ ; pôle (+) 2 × (Ag⁺ + e⁻ → Ag).',
          '4) Équation-bilan : Ni + 2 Ag⁺ → Ni²⁺ + 2 Ag.',
        ],
        conclusion:
          'La pile a pour pôle + l’argent, pôle − le nickel, et consomme 2 Ag⁺ par atome de nickel.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Notation schéma',
          stepTheme: 'Convention d’écriture',
          stepTitle: 'Lire la notation conventionnelle de la pile Daniell',
          paragraphText:
            'Les deux bornes et le pont salin (//) sont notés de gauche (−) à droite (+), avec les deux métaux aux extrémités.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q1',
            type: 'mcq',
            prompt: 'Quelle est la notation conventionnelle exacte de la pile Daniell ?',
            options: [
              '$\\ominus\\ \\mathrm{Zn / Zn^{2+} \\parallel Cu^{2+} / Cu}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Cu / Cu^{2+} \\parallel Zn^{2+} / Zn}\\ \\oplus$',
              '$\\oplus\\ \\mathrm{Zn^{2+} / Zn \\parallel Cu / Cu^{2+}}\\ \\ominus$',
              '$\\ominus\\ \\mathrm{Zn^{2+} / Zn \\parallel Cu^{2+} / Cu}\\ \\oplus$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On écrit d’abord le pôle (−) sous forme Métal/Ion (Zn/Zn²⁺), puis // (pont salin), puis le pôle (+) sous forme Ion/Métal (Cu²⁺/Cu).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Pile Cu / Pb',
          stepTheme: 'Tableau p. 2',
          stepTitle: 'Identifier pôles et bilan de la pile Cu / Pb',
          paragraphText:
            'Entre le cuivre (+0,34 V) et le plomb (−0,13 V), le plomb est le métal le plus réducteur (pôle −) et le cuivre est le pôle +.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q2',
            type: 'mcq',
            prompt: 'Pour la pile $\\mathrm{Cu / Pb}$ ($E^0(\\mathrm{Cu^{2+}/Cu}) = 0{,}34\\text{ V}$ et $E^0(\\mathrm{Pb^{2+}/Pb}) = -0{,}13\\text{ V}$), quelles sont les bornes et l’équation-bilan ?',
            options: [
              'Pôle ($+$) : $\\mathrm{Cu}$, pôle ($-$) : $\\mathrm{Pb}$ ; bilan : $\\mathrm{Pb + Cu^{2+} \\longrightarrow Pb^{2+} + Cu}$',
              'Pôle ($+$) : $\\mathrm{Pb}$, pôle ($-$) : $\\mathrm{Cu}$ ; bilan : $\\mathrm{Cu + Pb^{2+} \\longrightarrow Cu^{2+} + Pb}$',
              'Pôle ($+$) : $\\mathrm{Cu}$, pôle ($-$) : $\\mathrm{Pb}$ ; bilan : $\\mathrm{Pb^{2+} + Cu \\longrightarrow Pb + Cu^{2+}}$',
              'Les deux électrodes ont le même potentiel',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pb est le plus réducteur (pôle − : Pb → Pb²⁺ + 2 e⁻) et Cu²⁺ est réduit sur Cu (pôle + : Cu²⁺ + 2 e⁻ → Cu).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Pile Pb / Fe',
          stepTheme: 'Tableau p. 2',
          stepTitle: 'Écrire la notation de la pile Pb / Fe',
          paragraphText:
            'Dans la pile associant le fer et le plomb, le fer constitue le pôle (−) et le plomb le pôle (+).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q3',
            type: 'mcq',
            prompt: 'Quelle est la notation conventionnelle correcte de la pile $\\mathrm{Pb / Fe}$ (pôle $+$ : $\\mathrm{Pb}$, pôle $-$ : $\\mathrm{Fe}$) ?',
            options: [
              '$\\ominus\\ \\mathrm{Fe / Fe^{2+} \\parallel Pb^{2+} / Pb}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Pb / Pb^{2+} \\parallel Fe^{2+} / Fe}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Fe^{2+} / Fe \\parallel Pb / Pb^{2+}}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Pb^{2+} / Pb \\parallel Fe / Fe^{2+}}\\ \\oplus$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pôle (−) Fe/Fe²⁺ s’écrit à gauche et le pôle (+) Pb²⁺/Pb à droite : bilan Fe + Pb²⁺ → Fe²⁺ + Pb.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Pile Zn / Ag',
          stepTheme: 'Situation p. 6',
          stepTitle: 'Écrire le bilan stœchiométrique avec des charges +1 et +2',
          paragraphText:
            'Chaque atome Zn cède 2 électrons tandis que chaque ion Ag⁺ n’en capte qu’un seul : il faut donc 2 Ag⁺ pour 1 Zn.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan de fonctionnement de la pile $\\ominus\\ \\mathrm{Zn / Zn^{2+} \\parallel Ag^+ / Ag}\\ \\oplus$ (Situation p. 6) ?',
            options: [
              '$\\mathrm{Zn + 2\\,Ag^+ \\longrightarrow Zn^{2+} + 2\\,Ag}$',
              '$\\mathrm{Zn + Ag^+ \\longrightarrow Zn^{2+} + Ag}$',
              '$2\\,\\mathrm{Zn + Ag^+ \\longrightarrow 2\\,Zn^{2+} + Ag}$',
              '$\\mathrm{Zn^{2+} + 2\\,Ag \\longrightarrow Zn + 2\\,Ag^+}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Zn → Zn²⁺ + 2 e⁻ combiné à 2 × (Ag⁺ + e⁻ → Ag) donne Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag (conservation des charges : +2 des deux côtés).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Pile Cu / Sn',
          stepTheme: 'Exercice 5 p. 8–9',
          stepTitle: 'Écrire la notation de la pile Cu / Sn (pôle − = Sn)',
          paragraphText:
            'L’énoncé précise que l’électrode d’étain Sn est le pôle négatif et le cuivre le pôle positif.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q5',
            type: 'mcq',
            prompt: 'On relie une demi-pile $\\mathrm{Cu^{2+}/Cu}$ (pôle $+$) à une demi-pile $\\mathrm{Sn^{2+}/Sn}$ (pôle $-$). Quel est le schéma conventionnel de cette pile (Ex 5 p. 8–9) ?',
            options: [
              '$\\ominus\\ \\mathrm{Sn / Sn^{2+} \\parallel Cu^{2+} / Cu}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Cu / Cu^{2+} \\parallel Sn^{2+} / Sn}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Sn^{2+} / Sn \\parallel Cu / Cu^{2+}}\\ \\oplus$',
              '$\\ominus\\ \\mathrm{Cu / Sn \\parallel Cu^{2+} / Sn^{2+}}\\ \\oplus$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pôle (−) Sn/Sn²⁺ est placé à gauche du pont salin // et le pôle (+) Cu²⁺/Cu à droite ; le bilan est Sn + Cu²⁺ → Sn²⁺ + Cu.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Généralisation',
          stepTheme: 'Choix des bornes',
          stepTitle: 'Relier polarité et pouvoir réducteur des métaux',
          paragraphText:
            'Plus un métal cède facilement ses électrons (métal le plus réducteur), plus il impose un excès d’électrons à sa lame et constitue la borne négative.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q6',
            type: 'mcq',
            prompt: 'Entre deux métaux $M_1$ et $M_2$ constituant une pile, lequel forme la borne négative ($-$) ?',
            options: [
              'Le métal le plus réducteur (celui qui cède le plus facilement des électrons)',
              'Le métal le moins réducteur (celui qui possède l’oxydant le plus fort)',
              'Toujours le métal de masse molaire la plus élevée',
              'Celui dont la lame a la plus grande surface',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La borne négative est toujours constituée par le métal le plus réducteur (qui s’oxyde), et la borne positive par le métal le moins réducteur.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q1',
          type: 'mcq',
          prompt: 'Quelle est la notation conventionnelle exacte de la pile Daniell ?',
          options: [
            '$\\ominus\\ \\mathrm{Zn / Zn^{2+} \\parallel Cu^{2+} / Cu}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Cu / Cu^{2+} \\parallel Zn^{2+} / Zn}\\ \\oplus$',
            '$\\oplus\\ \\mathrm{Zn^{2+} / Zn \\parallel Cu / Cu^{2+}}\\ \\ominus$',
            '$\\ominus\\ \\mathrm{Zn^{2+} / Zn \\parallel Cu^{2+} / Cu}\\ \\oplus$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On écrit d’abord le pôle (−) sous forme Métal/Ion (Zn/Zn²⁺), puis // (pont salin), puis le pôle (+) sous forme Ion/Métal (Cu²⁺/Cu).',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q2',
          type: 'mcq',
          prompt: 'Pour la pile $\\mathrm{Cu / Pb}$ ($E^0(\\mathrm{Cu^{2+}/Cu}) = 0{,}34\\text{ V}$ et $E^0(\\mathrm{Pb^{2+}/Pb}) = -0{,}13\\text{ V}$), quelles sont les bornes et l’équation-bilan ?',
          options: [
            'Pôle ($+$) : $\\mathrm{Cu}$, pôle ($-$) : $\\mathrm{Pb}$ ; bilan : $\\mathrm{Pb + Cu^{2+} \\longrightarrow Pb^{2+} + Cu}$',
            'Pôle ($+$) : $\\mathrm{Pb}$, pôle ($-$) : $\\mathrm{Cu}$ ; bilan : $\\mathrm{Cu + Pb^{2+} \\longrightarrow Cu^{2+} + Pb}$',
            'Pôle ($+$) : $\\mathrm{Cu}$, pôle ($-$) : $\\mathrm{Pb}$ ; bilan : $\\mathrm{Pb^{2+} + Cu \\longrightarrow Pb + Cu^{2+}}$',
            'Les deux électrodes ont le même potentiel',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pb est le plus réducteur (pôle − : Pb → Pb²⁺ + 2 e⁻) et Cu²⁺ est réduit sur Cu (pôle + : Cu²⁺ + 2 e⁻ → Cu).',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q3',
          type: 'mcq',
          prompt: 'Quelle est la notation conventionnelle correcte de la pile $\\mathrm{Pb / Fe}$ (pôle $+$ : $\\mathrm{Pb}$, pôle $-$ : $\\mathrm{Fe}$) ?',
          options: [
            '$\\ominus\\ \\mathrm{Fe / Fe^{2+} \\parallel Pb^{2+} / Pb}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Pb / Pb^{2+} \\parallel Fe^{2+} / Fe}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Fe^{2+} / Fe \\parallel Pb / Pb^{2+}}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Pb^{2+} / Pb \\parallel Fe / Fe^{2+}}\\ \\oplus$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pôle (−) Fe/Fe²⁺ s’écrit à gauche et le pôle (+) Pb²⁺/Pb à droite : bilan Fe + Pb²⁺ → Fe²⁺ + Pb.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q4',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan de fonctionnement de la pile $\\ominus\\ \\mathrm{Zn / Zn^{2+} \\parallel Ag^+ / Ag}\\ \\oplus$ (Situation p. 6) ?',
          options: [
            '$\\mathrm{Zn + 2\\,Ag^+ \\longrightarrow Zn^{2+} + 2\\,Ag}$',
            '$\\mathrm{Zn + Ag^+ \\longrightarrow Zn^{2+} + Ag}$',
            '$2\\,\\mathrm{Zn + Ag^+ \\longrightarrow 2\\,Zn^{2+} + Ag}$',
            '$\\mathrm{Zn^{2+} + 2\\,Ag \\longrightarrow Zn + 2\\,Ag^+}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Zn → Zn²⁺ + 2 e⁻ combiné à 2 × (Ag⁺ + e⁻ → Ag) donne Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag (conservation des charges : +2 des deux côtés).',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q5',
          type: 'mcq',
          prompt: 'On relie une demi-pile $\\mathrm{Cu^{2+}/Cu}$ (pôle $+$) à une demi-pile $\\mathrm{Sn^{2+}/Sn}$ (pôle $-$). Quel est le schéma conventionnel de cette pile (Ex 5 p. 8–9) ?',
          options: [
            '$\\ominus\\ \\mathrm{Sn / Sn^{2+} \\parallel Cu^{2+} / Cu}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Cu / Cu^{2+} \\parallel Sn^{2+} / Sn}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Sn^{2+} / Sn \\parallel Cu / Cu^{2+}}\\ \\oplus$',
            '$\\ominus\\ \\mathrm{Cu / Sn \\parallel Cu^{2+} / Sn^{2+}}\\ \\oplus$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pôle (−) Sn/Sn²⁺ est placé à gauche du pont salin // et le pôle (+) Cu²⁺/Cu à droite ; le bilan est Sn + Cu²⁺ → Sn²⁺ + Cu.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p02_q6',
          type: 'mcq',
          prompt: 'Entre deux métaux $M_1$ et $M_2$ constituant une pile, lequel forme la borne négative ($-$) ?',
          options: [
            'Le métal le plus réducteur (celui qui cède le plus facilement des électrons)',
            'Le métal le moins réducteur (celui qui possède l’oxydant le plus fort)',
            'Toujours le métal de masse molaire la plus élevée',
            'Celui dont la lame a la plus grande surface',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La borne négative est toujours constituée par le métal le plus réducteur (qui s’oxyde), et la borne positive par le métal le moins réducteur.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Potentiel d’oxydoréduction, ESH et référence secondaire Cu²⁺/Cu
    // ========================================================================
    {
      id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03',
      order: 3,
      title: 'Potentiel d’oxydoréduction, ESH et référence secondaire',
      summary:
        'Définir l’Électrode Standard à Hydrogène (ESH : 0,00 V), le potentiel standard E° d’un couple et l’usage de la demi-pile Cu²⁺/Cu (+0,34 V) comme référence secondaire.',
      conceptExplanation:
        "Pour classer numériquement tous les couples redox, il faut choisir une **référence zéro**, comme le niveau de la mer (ou le bas d’une cascade, Documentation p. 9) pour mesurer des altitudes :\n\n1. **Électrode Standard à Hydrogène (ESH)** (p. 3) :\n   - Constituée d’une lame de **platine ($\\mathrm{Pt}$)** plongeant dans une solution acide à **$[\\mathrm{H_3O^+}] = 1\\text{ mol/L}$ ($\\text{pH} = 0$)** où barbote du **dihydrogène $\\mathrm{H_2}$** sous **$P = 1\\text{ atm}$**.\n   - Demi-équation : $2\\,\\mathrm{H^+ + 2\\,e^- \\longrightarrow H_2}$.\n   - Par convention, à toute température : **$E^0(\\mathrm{H^+/H_2}) = 0{,}00\\text{ V}$**.\n2. **Définition du potentiel d’oxydoréduction** :\n   - Le potentiel du couple $\\mathrm{M^{n+}/M}$ est la f.é.m. de la pile associée à l’ESH : $E_{\\mathrm{M^{n+}/M}} = V_M - V_{\\text{ESH}}$.\n   - Si $M$ est **moins réducteur** que $\\mathrm{H_2}$, $E > 0$ (ex. $\\mathrm{Cu}$ : $+0{,}34\\text{ V}$, $\\mathrm{Ag}$ : $+0{,}80\\text{ V}$).\n   - Si $M$ est **plus réducteur** que $\\mathrm{H_2}$, $E < 0$ (ex. $\\mathrm{Zn}$ : $-0{,}77\\text{ V}$, $\\mathrm{Fe}$ : $-0{,}44\\text{ V}$).\n3. **Électrode de référence secondaire ($\\mathrm{Cu^{2+}/Cu}$)** (p. 3–4) :\n   - L’ESH étant délicate à mettre en œuvre, on utilise souvent au laboratoire la demi-pile $\\mathrm{Cu^{2+}/Cu}$ dans les conditions standard ($[\\mathrm{Cu^{2+}}] = 1\\text{ mol/L}$, $T = 298\\text{ K}$), dont le potentiel normal vaut **$E^0(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$**.\n   - La différence de potentiel mesurée entre la lame de cuivre et la lame du métal $M$ vaut alors :\n     $$V_{\\mathrm{Cu}} - V_M = E^0(\\mathrm{Cu^{2+}/Cu}) - E^0(\\mathrm{M^{n+}/M})$$",
      keyRule:
        'L’ESH (Pt, H₂ à 1 atm, pH = 0) fixe le potentiel de référence E°(H⁺/H₂) = 0,00 V. En pratique, la référence secondaire Cu²⁺/Cu ([Cu²⁺] = 1 mol/L à 298 K) a pour potentiel normal E° = +0,34 V.',
      formulas: [
        {
          name: 'Potentiel par rapport à l’ESH',
          formula: 'E^0(\\mathrm{H^+/H_2}) = 0{,}00\\text{ V} \\qquad ; \\qquad E_{\\mathrm{M^{n+}/M}} = V_M - V_{\\text{ESH}}',
          note: 'E > 0 si M est moins réducteur que H₂ ; E < 0 si M est plus réducteur que H₂',
        },
      ],
      workedExample: {
        title: 'Déterminer E°(Sn²⁺/Sn) à l’aide de l’électrode Cu²⁺/Cu (Exercice 5 p. 8–9)',
        statement:
          'On réalise la pile standard $\\ominus\\ \\mathrm{Sn/Sn^{2+} \\parallel Cu^{2+}/Cu}\\ \\oplus$ et on mesure une f.é.m. $E = 0{,}48\\text{ V}$. Sachant que $E^0(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$, détermine $E^0(\\mathrm{Sn^{2+}/Sn})$.',
        methodSteps: [
          '1) Le pôle (+) est Cu et le pôle (−) est Sn, donc E = E°(Cu²⁺/Cu) − E°(Sn²⁺/Sn).',
          '2) On isole l’inconnue : E°(Sn²⁺/Sn) = E°(Cu²⁺/Cu) − E.',
          '3) Calcul : E°(Sn²⁺/Sn) = 0,34 − 0,48 = −0,14 V.',
        ],
        conclusion:
          'Le potentiel normal du couple Sn²⁺/Sn vaut −0,14 V (donc Sn est plus réducteur que H₂).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'ESH',
          stepTheme: 'Conditions standard',
          stepTitle: 'Connaître la constitution de l’Électrode Standard à Hydrogène',
          paragraphText:
            'L’ESH associe une électrode inattaquable de platine (Pt) dans une solution acide à pH = 0 sous un courant de H₂ à P = 1 atm.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q1',
            type: 'mcq',
            prompt: 'Quelles sont les conditions qui définissent l’Électrode Standard à Hydrogène (ESH) ?',
            options: [
              'Platine ($\\mathrm{Pt}$), $\\text{pH} = 0$ ($[\\mathrm{H_3O^+}] = 1\\text{ mol/L}$), barbotage de $\\mathrm{H_2}$ à $P = 1\\text{ atm}$',
              'Cuivre ($\\mathrm{Cu}$), $\\text{pH} = 7$, barbotage de $\\mathrm{O_2}$ à $P = 1\\text{ atm}$',
              'Platine ($\\mathrm{Pt}$), eau pure à $\\text{pH} = 7$ sans gaz',
              'Zinc ($\\mathrm{Zn}$), $\\text{pH} = 0$, $P = 5\\text{ atm}$ de $\\mathrm{H_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’ESH utilise une électrode de platine platiné dans une solution acide à pH = 0 avec barbotage de dihydrogène à P = 1 atm ; son potentiel est fixé à 0,00 V.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Référence 0 V',
          stepTheme: 'Couple H⁺/H₂',
          stepTitle: 'Situer le couple H⁺/H₂ dans la classification',
          paragraphText:
            'Par convention, le potentiel du couple H⁺/H₂ vaut 0,00 V à toute température : il marque l’origine de l’échelle des potentiels normaux (Ex 2 p. 7).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q2',
            type: 'mcq',
            prompt: 'Quelle place occupe le couple $\\mathrm{H^+/H_2}$ dans la classification quantitative des couples redox (Ex 2 p. 7) ?',
            options: [
              'Il est placé à l’origine de la classification avec $E^0(\\mathrm{H^+/H_2}) = 0\\text{ V}$ par convention',
              'Il possède le potentiel le plus élevé possible ($+3{,}0\\text{ V}$)',
              'Son potentiel varie selon le pôle choisi entre $+0{,}34\\text{ V}$ et $+0{,}80\\text{ V}$',
              'Il n’appartient pas aux couples oxydant/réducteur',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Tout comme on choisit une altitude zéro pour mesurer les hauteurs (Documentation p. 9), E°(H⁺/H₂) = 0 V sert d’origine conventionnelle.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Signe de E',
          stepTheme: 'Comparaison à H₂',
          stepTitle: 'Relier le signe de E° au pouvoir réducteur par rapport à H₂',
          paragraphText:
            'Un métal moins réducteur que H₂ (Cu, Ag) a un potentiel positif ; un métal plus réducteur que H₂ (Zn, Fe, Pb) a un potentiel négatif.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q3',
            type: 'mcq',
            prompt: 'Si un métal $M$ est plus réducteur que le dihydrogène $\\mathrm{H_2}$, que peut-on dire du potentiel standard $E^0(\\mathrm{M^{n+}/M})$ ?',
            options: [
              '$E^0(\\mathrm{M^{n+}/M}) < 0$',
              '$E^0(\\mathrm{M^{n+}/M}) > 0$',
              '$E^0(\\mathrm{M^{n+}/M}) = +0{,}34\\text{ V}$',
              '$E^0(\\mathrm{M^{n+}/M})$ est toujours nul',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un métal plus réducteur que H₂ joue le rôle de pôle (−) face à l’ESH (qui est à 0 V), donc son potentiel est négatif.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Référence secondaire',
          stepTheme: 'Demi-pile Cu²⁺/Cu',
          stepTitle: 'Connaître le potentiel standard du couple Cu²⁺/Cu',
          paragraphText:
            'La demi-pile Cu²⁺/Cu avec [Cu²⁺] = 1 mol/L à 298 K est très simple à réaliser et sert de référence secondaire avec E° = +0,34 V.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q4',
            type: 'mcq',
            prompt: 'Dans les conditions standard ($[\\mathrm{Cu^{2+}}] = 1\\text{ mol/L}$, $T = 298\\text{ K}$), quel couple sert d’électrode de référence secondaire et que vaut son potentiel ?',
            options: [
              '$\\mathrm{Cu^{2+}/Cu}$, de potentiel normal $E^0 = +0{,}34\\text{ V}$',
              '$\\mathrm{Zn^{2+}/Zn}$, de potentiel normal $E^0 = -0{,}77\\text{ V}$',
              '$\\mathrm{Ag^+/Ag}$, de potentiel normal $E^0 = +1{,}20\\text{ V}$',
              '$\\mathrm{Fe^{2+}/Fe}$, de potentiel normal $E^0 = 0{,}00\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour éviter la manipulation délicate de l’ESH, on utilise au laboratoire la demi-pile Cu²⁺/Cu dont E° = +0,34 V.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Calcul E°(Sn²⁺/Sn)',
          stepTheme: 'Exercice 5 p. 8–9',
          stepTitle: 'Déterminer un potentiel inconnu à l’aide de la référence cuivre',
          paragraphText:
            'Avec la pile ⊖ Sn/Sn²⁺ // Cu²⁺/Cu ⊕ de f.é.m. E = 0,48 V, E°(Sn²⁺/Sn) = E°(Cu²⁺/Cu) − E = 0,34 − 0,48.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q5',
            type: 'mcq',
            prompt: 'Une pile standard associant le cuivre ($+$) à l’étain ($-$) a pour f.é.m. $E = 0{,}48\\text{ V}$ (Ex 5 p. 8–9). Sachant que $E^0(\\mathrm{Cu^{2+}/Cu}) = 0{,}34\\text{ V}$, que vaut $E^0(\\mathrm{Sn^{2+}/Sn})$ ?',
            options: [
              '$-0{,}14\\text{ V}$',
              '$+0{,}82\\text{ V}$',
              '$+0{,}14\\text{ V}$',
              '$-0{,}82\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E = E°(Cu²⁺/Cu) − E°(Sn²⁺/Sn) ⇒ E°(Sn²⁺/Sn) = 0,34 − 0,48 = −0,14 V.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'definition',
          stepBadge: 'Analogie cascade',
          stepTheme: 'Documentation p. 9',
          stepTitle: 'Distinguer tension électrique et intensité (analogie hydraulique)',
          paragraphText:
            'Comme dans une chute d’eau, la tension (ddp) correspond à la différence de hauteur (potentiels) tandis que l’intensité correspond au débit.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q6',
            type: 'mcq',
            prompt: 'Dans l’analogie de la cascade (Documentation p. 9), à quoi assimile-t-on la tension électrique entre deux bornes ?',
            options: [
              'À la hauteur de la chute d’eau (différence entre deux potentiels/altitudes)',
              'Au débit massique de l’eau par seconde',
              'À la température de l’eau en bas de la chute',
              'À la masse de roche de la falaise',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La tension est une différence de potentiels (analogue à la hauteur entre deux altitudes), tandis que l’intensité est analogue au débit d’eau.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q1',
          type: 'mcq',
          prompt: 'Quelles sont les conditions qui définissent l’Électrode Standard à Hydrogène (ESH) ?',
          options: [
            'Platine ($\\mathrm{Pt}$), $\\text{pH} = 0$ ($[\\mathrm{H_3O^+}] = 1\\text{ mol/L}$), barbotage de $\\mathrm{H_2}$ à $P = 1\\text{ atm}$',
            'Cuivre ($\\mathrm{Cu}$), $\\text{pH} = 7$, barbotage de $\\mathrm{O_2}$ à $P = 1\\text{ atm}$',
            'Platine ($\\mathrm{Pt}$), eau pure à $\\text{pH} = 7$ sans gaz',
            'Zinc ($\\mathrm{Zn}$), $\\text{pH} = 0$, $P = 5\\text{ atm}$ de $\\mathrm{H_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’ESH utilise une électrode de platine platiné dans une solution acide à pH = 0 avec barbotage de dihydrogène à P = 1 atm ; son potentiel est fixé à 0,00 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q2',
          type: 'mcq',
          prompt: 'Quelle place occupe le couple $\\mathrm{H^+/H_2}$ dans la classification quantitative des couples redox (Ex 2 p. 7) ?',
          options: [
            'Il est placé à l’origine de la classification avec $E^0(\\mathrm{H^+/H_2}) = 0\\text{ V}$ par convention',
            'Il possède le potentiel le plus élevé possible ($+3{,}0\\text{ V}$)',
            'Son potentiel varie selon le pôle choisi entre $+0{,}34\\text{ V}$ et $+0{,}80\\text{ V}$',
            'Il n’appartient pas aux couples oxydant/réducteur',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Tout comme on choisit une altitude zéro pour mesurer les hauteurs (Documentation p. 9), E°(H⁺/H₂) = 0 V sert d’origine conventionnelle.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q3',
          type: 'mcq',
          prompt: 'Si un métal $M$ est plus réducteur que le dihydrogène $\\mathrm{H_2}$, que peut-on dire du potentiel standard $E^0(\\mathrm{M^{n+}/M})$ ?',
          options: [
            '$E^0(\\mathrm{M^{n+}/M}) < 0$',
            '$E^0(\\mathrm{M^{n+}/M}) > 0$',
            '$E^0(\\mathrm{M^{n+}/M}) = +0{,}34\\text{ V}$',
            '$E^0(\\mathrm{M^{n+}/M})$ est toujours nul',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un métal plus réducteur que H₂ joue le rôle de pôle (−) face à l’ESH (qui est à 0 V), donc son potentiel est négatif.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q4',
          type: 'mcq',
          prompt: 'Dans les conditions standard ($[\\mathrm{Cu^{2+}}] = 1\\text{ mol/L}$, $T = 298\\text{ K}$), quel couple sert d’électrode de référence secondaire et que vaut son potentiel ?',
          options: [
            '$\\mathrm{Cu^{2+}/Cu}$, de potentiel normal $E^0 = +0{,}34\\text{ V}$',
            '$\\mathrm{Zn^{2+}/Zn}$, de potentiel normal $E^0 = -0{,}77\\text{ V}$',
            '$\\mathrm{Ag^+/Ag}$, de potentiel normal $E^0 = +1{,}20\\text{ V}$',
            '$\\mathrm{Fe^{2+}/Fe}$, de potentiel normal $E^0 = 0{,}00\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour éviter la manipulation délicate de l’ESH, on utilise au laboratoire la demi-pile Cu²⁺/Cu dont E° = +0,34 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q5',
          type: 'mcq',
          prompt: 'Une pile standard associant le cuivre ($+$) à l’étain ($-$) a pour f.é.m. $E = 0{,}48\\text{ V}$ (Ex 5 p. 8–9). Sachant que $E^0(\\mathrm{Cu^{2+}/Cu}) = 0{,}34\\text{ V}$, que vaut $E^0(\\mathrm{Sn^{2+}/Sn})$ ?',
          options: [
            '$-0{,}14\\text{ V}$',
            '$+0{,}82\\text{ V}$',
            '$+0{,}14\\text{ V}$',
            '$-0{,}82\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'E = E°(Cu²⁺/Cu) − E°(Sn²⁺/Sn) ⇒ E°(Sn²⁺/Sn) = 0,34 − 0,48 = −0,14 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p03_q6',
          type: 'mcq',
          prompt: 'Dans l’analogie de la cascade (Documentation p. 9), à quoi assimile-t-on la tension électrique entre deux bornes ?',
          options: [
            'À la hauteur de la chute d’eau (différence entre deux potentiels/altitudes)',
            'Au débit massique de l’eau par seconde',
            'À la température de l’eau en bas de la chute',
            'À la masse de roche de la falaise',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La tension est une différence de potentiels (analogue à la hauteur entre deux altitudes), tandis que l’intensité est analogue au débit d’eau.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Force électromotrice (f.é.m.) d’une pile standard
    // ========================================================================
    {
      id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04',
      order: 4,
      title: 'Force électromotrice (f.é.m.) standard d’une pile',
      summary:
        'Déterminer les bornes d’une pile quelconque à partir des potentiels standards E° et calculer sa f.é.m. par E° = E°(+) − E°(−).',
      conceptExplanation:
        "Lorsque deux couples sont associés pour former une pile standard ($C = 1\\text{ mol/L}$, $T = 298\\text{ K}$) (p. 4–6) :\n\n1. **Détermination des bornes** :\n   - La **borne positive ($+$)** correspond au couple de potentiel standard **le plus élevé** ($E^0(+)$).\n   - La **borne négative ($-$)** correspond au couple de potentiel standard **le plus bas** ($E^0(-)$).\n2. **Force électromotrice (f.é.m.)** : la f.é.m. $E$ (toujours positive) est la différence entre le potentiel du pôle positif et celui du pôle négatif :\n   $$E^0 = E^0(+) - E^0(-)$$\n\n**Valeurs de référence du cours (p. 4–8) :**\n- $E^0(\\mathrm{Ag^+/Ag}) = +0{,}80\\text{ V}$, $E^0(\\mathrm{Hg^{2+}/Hg}) = +0{,}86\\text{ V}$, $E^0(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$, $E^0(\\mathrm{Pb^{2+}/Pb}) = -0{,}13\\text{ V}$, $E^0(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\text{ V}$, $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}77\\text{ V}$ (ou $-0{,}76\\text{ V}$).\n- Exemples de calculs : pile $\\mathrm{Cu/Zn}$ : $0{,}34 - (-0{,}77) = 1{,}11\\text{ V}$ ; pile $\\mathrm{Cu/Pb}$ : $0{,}34 - (-0{,}13) = 0{,}47\\text{ V}$ ; pile $\\mathrm{Pb/Zn}$ : $-0{,}13 - (-0{,}77) = 0{,}64\\text{ V}$.",
      keyRule:
        'Pour toute pile standard : pôle (+) = couple de E° le plus élevé, pôle (−) = couple de E° le plus bas, et f.é.m. E° = E°(+) − E°(−) > 0 (attention au signe moins quand E°(−) < 0 !).',
      formulas: [
        {
          name: 'Force électromotrice standard d’une pile',
          formula: 'E^0 = E^0(+) - E^0(-) > 0',
          note: 'Ne jamais oublier le signe moins sur E°(−) lorsqu’il est négatif : E°(Cu/Zn) = 0,34 − (−0,77) = 1,11 V',
        },
      ],
      workedExample: {
        title: 'Calculer les f.é.m. des piles A (Ag/Zn) et B (Hg/Cu) (Situation p. 6)',
        statement:
          'On donne $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\text{ V}$, $E^0(\\mathrm{Ag^+/Ag}) = +0{,}80\\text{ V}$, $E^0(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$ et $E^0(\\mathrm{Hg^{2+}/Hg}) = +0{,}86\\text{ V}$. Détermine la polarité et la f.é.m. des piles A ($\\mathrm{Ag/Zn}$) et B ($\\mathrm{Hg/Cu}$).',
        methodSteps: [
          '1) Pile A (Ag/Zn) : 0,80 > −0,76 ⇒ Ag est (+), Zn est (−). E_A = 0,80 − (−0,76) = 1,56 V.',
          '2) Pile B (Hg/Cu) : 0,86 > 0,34 ⇒ Hg est (+), Cu est (−). E_B = 0,86 − 0,34 = 0,52 V.',
        ],
        conclusion:
          'La pile A fournit 1,56 V et la pile B fournit 0,52 V.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Formule f.é.m.',
          stepTheme: 'Définition',
          stepTitle: 'Connaître la formule de la force électromotrice d’une pile',
          paragraphText:
            'La f.é.m. d’une pile est la différence de potentiel mesurée à circuit ouvert entre sa borne positive et sa borne négative.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q1',
            type: 'mcq',
            prompt: 'Comment calcule-t-on la force électromotrice standard $E^0$ d’une pile ?',
            options: [
              '$E^0 = E^0_{\\text{couple borne }(+)} - E^0_{\\text{couple borne }(-)}$',
              '$E^0 = E^0_{\\text{couple borne }(-)} - E^0_{\\text{couple borne }(+)}$',
              '$E^0 = E^0_{\\text{couple borne }(+)} + E^0_{\\text{couple borne }(-)}$',
              '$E^0 = \\frac{E^0(+) + E^0(-)}{2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une f.é.m. est toujours E° = E°(+) − E°(−), avec E°(+) > E°(−), ce qui assure une valeur positive.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Pile Daniell Cu/Zn',
          stepTheme: 'Tableau p. 4',
          stepTitle: 'Calculer la f.é.m. de la pile Daniell',
          paragraphText:
            'Avec E°(Cu²⁺/Cu) = +0,34 V et E°(Zn²⁺/Zn) = −0,77 V, la soustraction d’un nombre négatif revient à additionner les valeurs absolues.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q2',
            type: 'mcq',
            prompt: 'Que vaut la f.é.m. standard de la pile Daniell ($E^0(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$, $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}77\\text{ V}$) ?',
            options: [
              '$1{,}11\\text{ V}$',
              '$0{,}43\\text{ V}$',
              '$-1{,}11\\text{ V}$',
              '$0{,}77\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E° = 0,34 − (−0,77) = 0,34 + 0,77 = 1,11 V.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Pile Fe / Ag',
          stepTheme: 'Activité p. 5',
          stepTitle: 'Déterminer polarité et f.é.m. de la pile Fe / Ag',
          paragraphText:
            'Avec E°(Fe²⁺/Fe) = −0,44 V et E°(Ag⁺/Ag) = +0,80 V, Ag⁺/Ag est le pôle (+) et Fe²⁺/Fe le pôle (−).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q3',
            type: 'mcq',
            prompt: 'On réalise une pile avec $\\mathrm{Fe^{2+}/Fe}$ ($-0{,}44\\text{ V}$) et $\\mathrm{Ag^+/Ag}$ ($+0{,}80\\text{ V}$) (Activité p. 5). Quels sont la borne ($+$) et la f.é.m. $E$ ?',
            options: [
              'Borne ($+$) : $\\mathrm{Ag}$ ; $E = 1{,}24\\text{ V}$',
              'Borne ($+$) : $\\mathrm{Ag}$ ; $E = 0{,}36\\text{ V}$',
              'Borne ($+$) : $\\mathrm{Fe}$ ; $E = 1{,}24\\text{ V}$',
              'Borne ($+$) : $\\mathrm{Fe}$ ; $E = 0{,}36\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E°(Ag⁺/Ag) = +0,80 V > −0,44 V ⇒ Ag est la borne (+) et Fe la borne (−). E = 0,80 − (−0,44) = 1,24 V.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Pile Ag / Zn',
          stepTheme: 'Situation p. 6',
          stepTitle: 'Calculer la f.é.m. de la pile A (Ag / Zn)',
          paragraphText:
            'Dans la Situation d’évaluation p. 6, E°(Ag⁺/Ag) = +0,80 V et E°(Zn²⁺/Zn) = −0,76 V.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q4',
            type: 'mcq',
            prompt: 'Quelle est la f.é.m. de la pile $\\mathrm{Ag/Zn}$ avec $E^0(\\mathrm{Ag^+/Ag}) = +0{,}80\\text{ V}$ et $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\text{ V}$ ?',
            options: [
              '$1{,}56\\text{ V}$',
              '$0{,}04\\text{ V}$',
              '$0{,}52\\text{ V}$',
              '$1{,}10\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E = 0,80 − (−0,76) = 1,56 V.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Piles Cu/Pb & Pb/Zn',
          stepTheme: 'Tableau p. 4',
          stepTitle: 'Calculer la f.é.m. de deux piles de signes opposés ou négatifs',
          paragraphText:
            'Pour Pb²⁺/Pb (−0,13 V) et Zn²⁺/Zn (−0,77 V), les deux potentiels sont négatifs : le moins négatif (−0,13 V) est le pôle (+).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q5',
            type: 'mcq',
            prompt: 'Avec $E^0(\\mathrm{Pb^{2+}/Pb}) = -0{,}13\\text{ V}$ et $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}77\\text{ V}$, que vaut la f.é.m. de la pile $\\mathrm{Pb/Zn}$ ?',
            options: [
              '$0{,}64\\text{ V}$ (avec $\\mathrm{Pb}$ au pôle $+$)',
              '$-0{,}90\\text{ V}$',
              '$0{,}90\\text{ V}$',
              '$0{,}64\\text{ V}$ (avec $\\mathrm{Zn}$ au pôle $+$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              '−0,13 > −0,77 ⇒ Pb est au pôle (+), Zn au pôle (−). E° = −0,13 − (−0,77) = 0,64 V.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Pile Ni / Ag',
          stepTheme: 'Exercice 4 p. 8',
          stepTitle: 'Calculer f.é.m. quand deux potentiels sont positifs',
          paragraphText:
            'Dans l’exercice 4 p. 8, E(Ag⁺/Ag) = 0,80 V et E(Ni²⁺/Ni) = 0,23 V : les deux valeurs sont positives.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q6',
            type: 'mcq',
            prompt: 'Que vaut la f.é.m. d’une pile associant $\\mathrm{Ag^+/Ag}$ ($0{,}80\\text{ V}$) et $\\mathrm{Ni^{2+}/Ni}$ ($0{,}23\\text{ V}$) (Ex 4 p. 8) ?',
            options: [
              '$0{,}57\\text{ V}$ (pôle $+$ : $\\mathrm{Ag}$, pôle $-$ : $\\mathrm{Ni}$)',
              '$1{,}03\\text{ V}$ (pôle $+$ : $\\mathrm{Ag}$, pôle $-$ : $\\mathrm{Ni}$)',
              '$0{,}57\\text{ V}$ (pôle $+$ : $\\mathrm{Ni}$, pôle $-$ : $\\mathrm{Ag}$)',
              '$0{,}23\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '0,80 > 0,23 ⇒ Ag est (+), Ni est (−). E = 0,80 − 0,23 = 0,57 V.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q1',
          type: 'mcq',
          prompt: 'Comment calcule-t-on la force électromotrice standard $E^0$ d’une pile ?',
          options: [
            '$E^0 = E^0_{\\text{couple borne }(+)} - E^0_{\\text{couple borne }(-)}$',
            '$E^0 = E^0_{\\text{couple borne }(-)} - E^0_{\\text{couple borne }(+)}$',
            '$E^0 = E^0_{\\text{couple borne }(+)} + E^0_{\\text{couple borne }(-)}$',
            '$E^0 = \\frac{E^0(+) + E^0(-)}{2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une f.é.m. est toujours E° = E°(+) − E°(−), avec E°(+) > E°(−), ce qui assure une valeur positive.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q2',
          type: 'mcq',
          prompt: 'Que vaut la f.é.m. standard de la pile Daniell ($E^0(\\mathrm{Cu^{2+}/Cu}) = +0{,}34\\text{ V}$, $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}77\\text{ V}$) ?',
          options: [
            '$1{,}11\\text{ V}$',
            '$0{,}43\\text{ V}$',
            '$-1{,}11\\text{ V}$',
            '$0{,}77\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'E° = 0,34 − (−0,77) = 0,34 + 0,77 = 1,11 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q3',
          type: 'mcq',
          prompt: 'On réalise une pile avec $\\mathrm{Fe^{2+}/Fe}$ ($-0{,}44\\text{ V}$) et $\\mathrm{Ag^+/Ag}$ ($+0{,}80\\text{ V}$) (Activité p. 5). Quels sont la borne ($+$) et la f.é.m. $E$ ?',
          options: [
            'Borne ($+$) : $\\mathrm{Ag}$ ; $E = 1{,}24\\text{ V}$',
            'Borne ($+$) : $\\mathrm{Ag}$ ; $E = 0{,}36\\text{ V}$',
            'Borne ($+$) : $\\mathrm{Fe}$ ; $E = 1{,}24\\text{ V}$',
            'Borne ($+$) : $\\mathrm{Fe}$ ; $E = 0{,}36\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'E°(Ag⁺/Ag) = +0,80 V > −0,44 V ⇒ Ag est la borne (+) et Fe la borne (−). E = 0,80 − (−0,44) = 1,24 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q4',
          type: 'mcq',
          prompt: 'Quelle est la f.é.m. de la pile $\\mathrm{Ag/Zn}$ avec $E^0(\\mathrm{Ag^+/Ag}) = +0{,}80\\text{ V}$ et $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\text{ V}$ ?',
          options: [
            '$1{,}56\\text{ V}$',
            '$0{,}04\\text{ V}$',
            '$0{,}52\\text{ V}$',
            '$1{,}10\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'E = 0,80 − (−0,76) = 1,56 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q5',
          type: 'mcq',
          prompt: 'Avec $E^0(\\mathrm{Pb^{2+}/Pb}) = -0{,}13\\text{ V}$ et $E^0(\\mathrm{Zn^{2+}/Zn}) = -0{,}77\\text{ V}$, que vaut la f.é.m. de la pile $\\mathrm{Pb/Zn}$ ?',
          options: [
            '$0{,}64\\text{ V}$ (avec $\\mathrm{Pb}$ au pôle $+$)',
            '$-0{,}90\\text{ V}$',
            '$0{,}90\\text{ V}$',
            '$0{,}64\\text{ V}$ (avec $\\mathrm{Zn}$ au pôle $+$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            '−0,13 > −0,77 ⇒ Pb est au pôle (+), Zn au pôle (−). E° = −0,13 − (−0,77) = 0,64 V.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p04_q6',
          type: 'mcq',
          prompt: 'Que vaut la f.é.m. d’une pile associant $\\mathrm{Ag^+/Ag}$ ($0{,}80\\text{ V}$) et $\\mathrm{Ni^{2+}/Ni}$ ($0{,}23\\text{ V}$) (Ex 4 p. 8) ?',
          options: [
            '$0{,}57\\text{ V}$ (pôle $+$ : $\\mathrm{Ag}$, pôle $-$ : $\\mathrm{Ni}$)',
            '$1{,}03\\text{ V}$ (pôle $+$ : $\\mathrm{Ag}$, pôle $-$ : $\\mathrm{Ni}$)',
            '$0{,}57\\text{ V}$ (pôle $+$ : $\\mathrm{Ni}$, pôle $-$ : $\\mathrm{Ag}$)',
            '$0{,}23\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '0,80 > 0,23 ⇒ Ag est (+), Ni est (−). E = 0,80 − 0,23 = 0,57 V.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Classification quantitative (POC/PRC) et prévision (Ex 1–3)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05',
      order: 5,
      title: 'Classification quantitative (POC / PRC) et prévision des réactions',
      summary:
        'Classer les couples sur l’axe vertical des potentiels standards (POC vers le haut, PRC vers le bas) et prévoir les réactions spontanées entre métaux, ions métalliques et acides.',
      conceptExplanation:
        "En ordonnant les couples $\\text{Ox}/\\text{Red}$ suivant l’axe croissant des potentiels normaux $E^0(\\text{V})$ (p. 4–7) :\n\n- **POC (Pouvoir Oxydant Croissant)** vers le **haut** : plus l’oxydant d’un couple est fort, plus son potentiel standard $E^0$ est **élevé**.\n- **PRC (Pouvoir Réducteur Croissant)** vers le **bas** : plus le réducteur d’un couple est fort, plus son potentiel standard $E^0$ est **faible**.\n- **Prévision des réactions (règle du gamma $\\gamma$)** : la seule réaction spontanée possible entre deux couples met en jeu l’**oxydant le plus fort** (couple de $E^0$ le plus grand) et le **réducteur le plus fort** (couple de $E^0$ le plus petit).\n  - **Action des acides ($\\mathrm{H^+/H_2}$, $0\\text{ V}$) sur les métaux (Ex 2 p. 7)** : tout métal de potentiel $E^0 < 0$ (comme $\\mathrm{Mn}$, $\\mathrm{Fe}$, $\\mathrm{Zn}$) est attaqué par l’acide chlorhydrique avec dégagement de $\\mathrm{H_2}$, tandis que les métaux à $E^0 > 0$ ($\\mathrm{Cu}$, $\\mathrm{Ag}$, $\\mathrm{Pt}$, $\\mathrm{Au}$) ne réagissent pas avec $\\mathrm{H^+}$.",
      keyRule:
        'Plus E° est élevé, plus l’oxydant est fort (POC ↑). Plus E° est faible, plus le réducteur est fort (PRC ↓). La réaction spontanée se fait entre l’oxydant de plus grand E° et le réducteur de plus petit E°.',
      formulas: [
        {
          name: 'Attaque d’un métal divalent par un acide non oxydant',
          formula: 'E^0(\\mathrm{M^{2+}/M}) < 0 \\implies \\mathrm{M + 2\\,H^+ \\longrightarrow M^{2+} + H_2}',
          note: 'Les métaux à E° > 0 (Cu, Ag, Pt, Au) sont inattaqués par H⁺ seul',
        },
      ],
      workedExample: {
        title: 'Comparer Mn et Pt face à HCl, puis Mg et Au³⁺ (Exercices 2 et 3 p. 7)',
        statement:
          '(1) On donne $E^0(\\mathrm{Pt^{2+}/Pt}) = +1{,}2\\text{ V}$ et $E^0(\\mathrm{Mn^{2+}/Mn}) = -1{,}18\\text{ V}$. Lequel réagit avec l’acide chlorhydrique ? (2) Prévois et équilibre la réaction entre $\\mathrm{Au^{3+}/Au}$ ($+1{,}5\\text{ V}$) et $\\mathrm{Mg^{2+}/Mg}$ ($-2{,}37\\text{ V}$).',
        methodSteps: [
          '1) HCl apporte H⁺ (E°(H⁺/H₂) = 0 V). Comme −1,18 V < 0 V, Mn réagit avec H⁺ : Mn + 2 H⁺ → Mn²⁺ + H₂.',
          '2) Comme +1,2 V > 0 V, le platine Pt ne peut pas réagir avec H⁺.',
          '3) Entre Au³⁺/Au (+1,5 V) et Mg²⁺/Mg (−2,37 V) : 1,5 > −2,37 ⇒ Au³⁺ oxyde Mg : 3×(Mg → Mg²⁺ + 2 e⁻) + 2×(Au³⁺ + 3 e⁻ → Au) donne 3 Mg + 2 Au³⁺ → 3 Mg²⁺ + 2 Au.',
        ],
        conclusion:
          'Mn réagit avec HCl contrairement à Pt ; et le magnésium réduit les ions or III selon 3 Mg + 2 Au³⁺ → 3 Mg²⁺ + 2 Au.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'POC & PRC',
          stepTheme: 'Sens de variation',
          stepTitle: 'Relier la force d’un oxydant ou d’un réducteur à E°',
          paragraphText:
            'Sur l’axe vertical des potentiels normaux, les oxydants les plus forts sont en haut (grands E°) et les réducteurs les plus forts en bas (petits E°).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q1',
            type: 'mcq',
            prompt: 'Dans l’échelle des potentiels normaux d’oxydoréduction, que peut-on affirmer ?',
            options: [
              'Plus $E^0$ est élevé, plus l’oxydant est fort ; plus $E^0$ est faible, plus le réducteur est fort',
              'Plus $E^0$ est élevé, plus le réducteur est fort',
              'Tous les oxydants ont la même force quel que soit $E^0$',
              'Les réducteurs les plus forts ont toujours $E^0 > +0{,}80\\text{ V}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'POC (Pouvoir Oxydant Croissant) croît avec E°, et PRC (Pouvoir Réducteur Croissant) croît lorsque E° diminue.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Cu vs Zn',
          stepTheme: 'Exercice 1 p. 6–7',
          stepTitle: 'Expliquer l’expérience entre zinc, cuivre et leurs solutions',
          paragraphText:
            'Une lame de Zn dans CuSO₄ se recouvre d’un dépôt brun rouge de Cu, alors qu’une lame de Cu dans ZnSO₄ reste intacte.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q2',
            type: 'mcq',
            prompt: 'Une lame de zinc plongée dans $\\mathrm{CuSO_4}$ se recouvre de cuivre, alors que le cuivre ne réagit pas dans $\\mathrm{ZnSO_4}$ (Ex 1 p. 6–7). Qu’en déduit-on ?',
            options: [
              '$E^0(\\mathrm{Cu^{2+}/Cu}) > E^0(\\mathrm{Zn^{2+}/Zn})$ et bilan : $\\mathrm{Cu^{2+} + Zn \\longrightarrow Cu + Zn^{2+}}$',
              '$E^0(\\mathrm{Zn^{2+}/Zn}) > E^0(\\mathrm{Cu^{2+}/Cu})$ et bilan : $\\mathrm{Zn^{2+} + Cu \\longrightarrow Zn + Cu^{2+}}$',
              '$\\mathrm{Zn^{2+}}$ est un oxydant plus fort que $\\mathrm{Cu^{2+}}$',
              '$\\mathrm{Cu}$ est un réducteur plus fort que $\\mathrm{Zn}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Cu²⁺ oxyde spontanément Zn, donc E°(Cu²⁺/Cu) > E°(Zn²⁺/Zn) : Cu²⁺ est l’oxydant le plus fort et Zn le réducteur le plus fort.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Acide sur métaux',
          stepTheme: 'Exercice 2 p. 7',
          stepTitle: 'Prévoir l’action de HCl sur le manganèse et le platine',
          paragraphText:
            'Avec E°(Pt²⁺/Pt) = +1,2 V, E°(H⁺/H₂) = 0 V et E°(Mn²⁺/Mn) = −1,18 V, seul Mn est plus réducteur que H₂.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q3',
            type: 'mcq',
            prompt: 'Sachant que $E^0(\\mathrm{Pt^{2+}/Pt}) = +1{,}2\\text{ V}$ et $E^0(\\mathrm{Mn^{2+}/Mn}) = -1{,}18\\text{ V}$, comment se comportent le manganèse et le platine dans l’acide chlorhydrique (Ex 2 p. 7) ?',
            options: [
              'Le manganèse réagit selon $\\mathrm{Mn + 2\\,H^+ \\longrightarrow Mn^{2+} + H_2}$, tandis que le platine ne réagit pas',
              'Le platine réagit selon $\\mathrm{Pt + 2\\,H^+ \\longrightarrow Pt^{2+} + H_2}$, tandis que le manganèse ne réagit pas',
              'Les deux métaux dégagent du dihydrogène',
              'Aucun des deux métaux ne réagit avec $\\mathrm{H^+}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E°(Mn²⁺/Mn) = −1,18 V < 0 V ⇒ H⁺ oxyde Mn. En revanche +1,2 V > 0 V ⇒ H⁺ ne peut pas oxyder Pt.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Mg + Au³⁺',
          stepTheme: 'Exercice 3 p. 7',
          stepTitle: 'Équilibrer la réaction entre magnésium et ions or III',
          paragraphText:
            'E°(Au³⁺/Au) = +1,5 V > E°(Mg²⁺/Mg) = −2,37 V : Au³⁺ oxyde Mg en échangeant 6 électrons (3 Mg pour 2 Au³⁺).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q4',
            type: 'mcq',
            prompt: 'Avec $E^0(\\mathrm{Au^{3+}/Au}) = 1{,}5\\text{ V}$ et $E^0(\\mathrm{Mg^{2+}/Mg}) = -2{,}37\\text{ V}$, quelle réaction spontanée se produit (Ex 3 p. 7) ?',
            options: [
              '$3\\,\\mathrm{Mg} + 2\\,\\mathrm{Au^{3+}} \\longrightarrow 3\\,\\mathrm{Mg^{2+}} + 2\\,\\mathrm{Au}$',
              '$\\mathrm{Mg} + \\mathrm{Au^{3+}} \\longrightarrow \\mathrm{Mg^{2+}} + \\mathrm{Au}$',
              '$2\\,\\mathrm{Mg^{2+}} + 3\\,\\mathrm{Au} \\longrightarrow 2\\,\\mathrm{Mg} + 3\\,\\mathrm{Au^{3+}}$',
              '$2\\,\\mathrm{Mg} + 3\\,\\mathrm{Au^{3+}} \\longrightarrow 2\\,\\mathrm{Mg^{2+}} + 3\\,\\mathrm{Au}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '3 × (Mg → Mg²⁺ + 2 e⁻) + 2 × (Au³⁺ + 3 e⁻ → Au) donne 3 Mg + 2 Au³⁺ → 3 Mg²⁺ + 2 Au (charge +6 de chaque côté).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Cu²⁺ vs Sn²⁺',
          stepTheme: 'Exercice 5 Q4 p. 9',
          stepTitle: 'Comparer les pouvoirs oxydants de Cu²⁺ et Sn²⁺',
          paragraphText:
            'Comme E°(Cu²⁺/Cu) = +0,34 V est supérieur à E°(Sn²⁺/Sn) = −0,14 V, l’ion Cu²⁺ possède le pouvoir oxydant le plus fort.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q5',
            type: 'mcq',
            prompt: 'Entre les couples $\\mathrm{Cu^{2+}/Cu}$ ($+0{,}34\\text{ V}$) et $\\mathrm{Sn^{2+}/Sn}$ ($-0{,}14\\text{ V}$), quel est l’oxydant le plus fort et quel est le réducteur le plus fort ?',
            options: [
              'Oxydant le plus fort : $\\mathrm{Cu^{2+}}$ ; réducteur le plus fort : $\\mathrm{Sn}$',
              'Oxydant le plus fort : $\\mathrm{Sn^{2+}}$ ; réducteur le plus fort : $\\mathrm{Cu}$',
              'Oxydant le plus fort : $\\mathrm{Cu}$ ; réducteur le plus fort : $\\mathrm{Sn^{2+}}$',
              'Ils ont exactement les mêmes pouvoirs redox',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E°(Cu²⁺/Cu) > E°(Sn²⁺/Sn) ⇒ Cu²⁺ (en haut à gauche) est l’oxydant le plus fort et Sn (en bas à droite) est le réducteur le plus fort.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Classement',
          stepTheme: 'Tableau p. 4',
          stepTitle: 'Classer les métaux du plus réducteur au moins réducteur',
          paragraphText:
            'Sur la liste Zn (−0,77 V), Fe (−0,44 V), Pb (−0,13 V), Cu (+0,34 V), Ag (+0,80 V), le pouvoir réducteur décroît quand E° augmente.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q6',
            type: 'mcq',
            prompt: 'Quel classement range ces métaux du réducteur le plus fort au moins fort d’après leurs potentiels ($\\mathrm{Zn}: -0{,}77\\text{ V}$ ; $\\mathrm{Pb}: -0{,}13\\text{ V}$ ; $\\mathrm{Cu}: +0{,}34\\text{ V}$ ; $\\mathrm{Ag}: +0{,}80\\text{ V}$) ?',
            options: [
              '$\\mathrm{Zn} > \\mathrm{Pb} > \\mathrm{Cu} > \\mathrm{Ag}$',
              '$\\mathrm{Ag} > \\mathrm{Cu} > \\mathrm{Pb} > \\mathrm{Zn}$',
              '$\\mathrm{Cu} > \\mathrm{Ag} > \\mathrm{Zn} > \\mathrm{Pb}$',
              '$\\mathrm{Pb} > \\mathrm{Zn} > \\mathrm{Cu} > \\mathrm{Ag}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pouvoir réducteur est d’autant plus fort que E° est bas : −0,77 < −0,13 < +0,34 < +0,80, donc Zn est le meilleur réducteur et Ag le plus faible.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q1',
          type: 'mcq',
          prompt: 'Dans l’échelle des potentiels normaux d’oxydoréduction, que peut-on affirmer ?',
          options: [
            'Plus $E^0$ est élevé, plus l’oxydant est fort ; plus $E^0$ est faible, plus le réducteur est fort',
            'Plus $E^0$ est élevé, plus le réducteur est fort',
            'Tous les oxydants ont la même force quel que soit $E^0$',
            'Les réducteurs les plus forts ont toujours $E^0 > +0{,}80\\text{ V}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'POC (Pouvoir Oxydant Croissant) croît avec E°, et PRC (Pouvoir Réducteur Croissant) croît lorsque E° diminue.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q2',
          type: 'mcq',
          prompt: 'Une lame de zinc plongée dans $\\mathrm{CuSO_4}$ se recouvre de cuivre, alors que le cuivre ne réagit pas dans $\\mathrm{ZnSO_4}$ (Ex 1 p. 6–7). Qu’en déduit-on ?',
          options: [
            '$E^0(\\mathrm{Cu^{2+}/Cu}) > E^0(\\mathrm{Zn^{2+}/Zn})$ et bilan : $\\mathrm{Cu^{2+} + Zn \\longrightarrow Cu + Zn^{2+}}$',
            '$E^0(\\mathrm{Zn^{2+}/Zn}) > E^0(\\mathrm{Cu^{2+}/Cu})$ et bilan : $\\mathrm{Zn^{2+} + Cu \\longrightarrow Zn + Cu^{2+}}$',
            '$\\mathrm{Zn^{2+}}$ est un oxydant plus fort que $\\mathrm{Cu^{2+}}$',
            '$\\mathrm{Cu}$ est un réducteur plus fort que $\\mathrm{Zn}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Cu²⁺ oxyde spontanément Zn, donc E°(Cu²⁺/Cu) > E°(Zn²⁺/Zn) : Cu²⁺ est l’oxydant le plus fort et Zn le réducteur le plus fort.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q3',
          type: 'mcq',
          prompt: 'Sachant que $E^0(\\mathrm{Pt^{2+}/Pt}) = +1{,}2\\text{ V}$ et $E^0(\\mathrm{Mn^{2+}/Mn}) = -1{,}18\\text{ V}$, comment se comportent le manganèse et le platine dans l’acide chlorhydrique (Ex 2 p. 7) ?',
          options: [
            'Le manganèse réagit selon $\\mathrm{Mn + 2\\,H^+ \\longrightarrow Mn^{2+} + H_2}$, tandis que le platine ne réagit pas',
            'Le platine réagit selon $\\mathrm{Pt + 2\\,H^+ \\longrightarrow Pt^{2+} + H_2}$, tandis que le manganèse ne réagit pas',
            'Les deux métaux dégagent du dihydrogène',
            'Aucun des deux métaux ne réagit avec $\\mathrm{H^+}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'E°(Mn²⁺/Mn) = −1,18 V < 0 V ⇒ H⁺ oxyde Mn. En revanche +1,2 V > 0 V ⇒ H⁺ ne peut pas oxyder Pt.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q4',
          type: 'mcq',
          prompt: 'Avec $E^0(\\mathrm{Au^{3+}/Au}) = 1{,}5\\text{ V}$ et $E^0(\\mathrm{Mg^{2+}/Mg}) = -2{,}37\\text{ V}$, quelle réaction spontanée se produit (Ex 3 p. 7) ?',
          options: [
            '$3\\,\\mathrm{Mg} + 2\\,\\mathrm{Au^{3+}} \\longrightarrow 3\\,\\mathrm{Mg^{2+}} + 2\\,\\mathrm{Au}$',
            '$\\mathrm{Mg} + \\mathrm{Au^{3+}} \\longrightarrow \\mathrm{Mg^{2+}} + \\mathrm{Au}$',
            '$2\\,\\mathrm{Mg^{2+}} + 3\\,\\mathrm{Au} \\longrightarrow 2\\,\\mathrm{Mg} + 3\\,\\mathrm{Au^{3+}}$',
            '$2\\,\\mathrm{Mg} + 3\\,\\mathrm{Au^{3+}} \\longrightarrow 2\\,\\mathrm{Mg^{2+}} + 3\\,\\mathrm{Au}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '3 × (Mg → Mg²⁺ + 2 e⁻) + 2 × (Au³⁺ + 3 e⁻ → Au) donne 3 Mg + 2 Au³⁺ → 3 Mg²⁺ + 2 Au (charge +6 de chaque côté).',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q5',
          type: 'mcq',
          prompt: 'Entre les couples $\\mathrm{Cu^{2+}/Cu}$ ($+0{,}34\\text{ V}$) et $\\mathrm{Sn^{2+}/Sn}$ ($-0{,}14\\text{ V}$), quel est l’oxydant le plus fort et quel est le réducteur le plus fort ?',
          options: [
            'Oxydant le plus fort : $\\mathrm{Cu^{2+}}$ ; réducteur le plus fort : $\\mathrm{Sn}$',
            'Oxydant le plus fort : $\\mathrm{Sn^{2+}}$ ; réducteur le plus fort : $\\mathrm{Cu}$',
            'Oxydant le plus fort : $\\mathrm{Cu}$ ; réducteur le plus fort : $\\mathrm{Sn^{2+}}$',
            'Ils ont exactement les mêmes pouvoirs redox',
          ],
          correctAnswerIndex: 0,
          explanation:
            'E°(Cu²⁺/Cu) > E°(Sn²⁺/Sn) ⇒ Cu²⁺ (en haut à gauche) est l’oxydant le plus fort et Sn (en bas à droite) est le réducteur le plus fort.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p05_q6',
          type: 'mcq',
          prompt: 'Quel classement range ces métaux du réducteur le plus fort au moins fort d’après leurs potentiels ($\\mathrm{Zn}: -0{,}77\\text{ V}$ ; $\\mathrm{Pb}: -0{,}13\\text{ V}$ ; $\\mathrm{Cu}: +0{,}34\\text{ V}$ ; $\\mathrm{Ag}: +0{,}80\\text{ V}$) ?',
          options: [
            '$\\mathrm{Zn} > \\mathrm{Pb} > \\mathrm{Cu} > \\mathrm{Ag}$',
            '$\\mathrm{Ag} > \\mathrm{Cu} > \\mathrm{Pb} > \\mathrm{Zn}$',
            '$\\mathrm{Cu} > \\mathrm{Ag} > \\mathrm{Zn} > \\mathrm{Pb}$',
            '$\\mathrm{Pb} > \\mathrm{Zn} > \\mathrm{Cu} > \\mathrm{Ag}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pouvoir réducteur est d’autant plus fort que E° est bas : −0,77 < −0,13 < +0,34 < +0,80, donc Zn est le meilleur réducteur et Ag le plus faible.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Piles électrochimiques usuelles et accumulateurs
    // ========================================================================
    {
      id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06',
      order: 6,
      title: 'Quelques piles usuelles et les accumulateurs',
      summary:
        'Distinguer les piles non rechargeables (Volta, Leclanché saline, pile alcaline) des accumulateurs (batteries rechargeables par courant inverse).',
      conceptExplanation:
        "Le cours présente plusieurs générateurs électrochimiques usuels (p. 5–6) :\n\n1. **Pile de Volta (1800, Alessandro Volta)** :\n   $$\\mathrm{Zn + 2\\,H_2O \\longrightarrow Zn^{2+} + 2\\,HO^- + H_2}$$\n2. **Pile Leclanché (première pile saline)** : contient un sel comme électrolyte :\n   $$\\mathrm{Zn(s) + 2\\,MnO_2(s) + 2\\,H^+(aq) \\longrightarrow Zn^{2+}(aq) + 2\\,MnO(OH)(s)}$$\n3. **Pile alcaline (ex. pile Duracell)** : son électrolyte est **alcalin (basique, ions $\\mathrm{HO^-}$)** :\n   $$\\mathrm{Zn(s) + 2\\,HO^-(aq) + MnO_2(s) + H_2O(l) \\longrightarrow MnO(OH)(s) + HO^-(aq) + ZnO(s) + H_2O(l)}$$\n   - **Attention sécurité** : une pile usagée a consommé l’un de ses réactifs ; elle **ne doit jamais être rechargée**.\n4. **Les accumulateurs (batteries)** :\n   - Contrairement aux piles classiques, ce sont des générateurs **rechargeables**.\n   - Branchés à un récepteur, ils fournissent du courant par réaction spontanée (décharge) ; branchés aux bornes d’un générateur imposant un **courant de sens inverse (électrolyse forcée)**, le système évolue en sens contraire et **se recharge**.",
      keyRule:
        'Les piles usuelles (Volta, Leclanché saline, alcaline à électrolyte basique) sont non rechargeables une fois un réactif consommé. Seuls les accumulateurs (batteries) peuvent être rechargés en inversant la réaction par électrolyse.',
      formulas: [
        {
          name: 'Pile Leclanché (saline)',
          formula: '\\mathrm{Zn(s) + 2\\,MnO_2(s) + 2\\,H^+(aq) \\longrightarrow Zn^{2+}(aq) + 2\\,MnO(OH)(s)}',
          note: 'Le zinc joue le rôle de réducteur (pôle −) dans Volta, Leclanché et les piles alcalines',
        },
      ],
      workedExample: {
        title: 'Comparer pile alcaline usagée et accumulateur en charge',
        statement:
          'Pourquoi ne faut-il jamais tenter de recharger une pile alcaline alors qu’on recharge sans danger une batterie (accumulateur) ?',
        methodSteps: [
          '1) Dans une pile alcaline (ou saline), les transformations chimiques et la structure interne ne sont pas réversibles de manière sûre : tenter de la recharger provoque dégagement de gaz, surchauffe et fuite.',
          '2) Un accumulateur est conçu pour fonctionner de façon réversible : en lui imposant un courant inverse grâce à un chargeur, on régénère les réactifs initiaux (charge).',
        ],
        conclusion:
          'Une pile usagée est jetée/recyclée (non rechargeable) ; seul un accumulateur se recharge par électrolyse inverse.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Pile de Volta',
          stepTheme: 'Histoire & bilan',
          stepTitle: 'Connaître l’inventeur et la réaction de la pile de Volta',
          paragraphText:
            'Inventée en 1800 par Alessandro Volta, la première pile utilise le zinc comme réducteur avec formation de dihydrogène.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q1',
            type: 'mcq',
            prompt: 'Quelle équation-bilan décrit le fonctionnement de la pile inventée par Volta en 1800 ?',
            options: [
              '$\\mathrm{Zn + 2\\,H_2O \\longrightarrow Zn^{2+} + 2\\,HO^- + H_2}$',
              '$\\mathrm{Zn + Cu^{2+} \\longrightarrow Zn^{2+} + Cu}$',
              '$\\mathrm{Zn + 2\\,MnO_2 + 2\\,H^+ \\longrightarrow Zn^{2+} + 2\\,MnO(OH)}$',
              '$\\mathrm{Pb + Cu^{2+} \\longrightarrow Pb^{2+} + Cu}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La pile de Volta réduit l’eau sur l’électrode positive en dégageant du dihydrogène H₂ selon Zn + 2 H₂O → Zn²⁺ + 2 HO⁻ + H₂.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Pile Leclanché',
          stepTheme: 'Pile saline',
          stepTitle: 'Caractériser la pile Leclanché',
          paragraphText:
            'Georges Leclanché a mis au point la première pile saline (contenant un sel, ex. chlorure d’ammonium), associant zinc et dioxyde de manganèse MnO₂.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q2',
            type: 'mcq',
            prompt: 'Quels réactifs principaux interviennent dans la pile saline inventée par Georges Leclanché ?',
            options: [
              'Le zinc ($\\mathrm{Zn}$) et le dioxyde de manganèse ($\\mathrm{MnO_2}$)',
              'Le cuivre ($\\mathrm{Cu}$) et le sulfate de plomb',
              'L’argent ($\\mathrm{Ag}$) et le mercure',
              'L’aluminium et l’oxyde ferrique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le bilan de la pile Leclanché est Zn(s) + 2 MnO₂(s) + 2 H⁺(aq) → Zn²⁺(aq) + 2 MnO(OH)(s).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Pile alcaline',
          stepTheme: 'Électrolyte basique',
          stepTitle: 'Définir une pile alcaline',
          paragraphText:
            'Une pile alcaline tire son nom de son électrolyte basique (alcalin), contenant des ions hydroxyde HO⁻ (potasse KOH).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q3',
            type: 'mcq',
            prompt: 'Pourquoi certaines piles usuelles (comme les piles Duracell) sont-elles qualifiées de « piles alcalines » ?',
            options: [
              'Parce que leur électrolyte est alcalin (basique, riche en ions $\\mathrm{HO^-}$)',
              'Parce qu’elles fonctionnent sans électrolyte',
              'Parce qu’elles contiennent exclusivement de l’acide chlorhydrique concentré',
              'Parce qu’elles sont rechargeables à l’infini',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On appelle pile alcaline toute pile dont l’électrolyte est basique (alcalin).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Pile usagée',
          stepTheme: 'Sécurité',
          stepTitle: 'Savoir pourquoi une pile usagée cesse de débiter',
          paragraphText:
            'Une pile s’arrête lorsque l’un de ses réactifs limitants est totalement consommé ; elle ne doit pas être rechargée.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q4',
            type: 'mcq',
            prompt: 'À quel moment une pile électrique devient-elle usagée, et peut-on la recharger ?',
            options: [
              'Lorsque l’un des réactifs est entièrement consommé ; elle ne doit pas être rechargée',
              'Uniquement lorsque le pont salin s’évapore ; on la recharge dans une prise',
              'Lorsque la température ambiante atteint $25\\,^\\circ\\text{C}$',
              'Quand sa f.é.m. double spontanément',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La pile cesse de débiter quand le réactif limitant est épuisé ; contrairement aux accumulateurs, une pile saline ou alcaline ne doit pas être rechargée.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Accumulateur',
          stepTheme: 'Recharge par électrolyse',
          stepTitle: 'Expliquer le fonctionnement réversible d’un accumulateur',
          paragraphText:
            'Un accumulateur (batterie) se décharge spontanément en générateur, puis se recharge quand un chargeur impose un courant en sens inverse (électrolyse).',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q5',
            type: 'mcq',
            prompt: 'Quel phénomène permet de recharger un accumulateur (ou batterie) (p. 6) ?',
            options: [
              'Un générateur extérieur impose un courant de sens inverse (électrolyse), inversant la réaction chimique spontanée',
              'On ajoute du chlorure de sodium sec sur les bornes',
              'On chauffe l’accumulateur au bec Bunsen',
              'Il se recharge spontanément sans aucune source extérieure',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En imposant un courant de sens contraire à celui de la décharge (électrolyse), le système évolue en sens inverse et régénère les réactifs initiaux.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Synthèse',
          stepTheme: 'Pile vs Accumulateur',
          stepTitle: 'Choisir le bon vocabulaire électrochimique',
          paragraphText:
            'Dans toute pile en décharge, le courant électrique sort par le pôle + (réduction) et les électrons sortent par le pôle − (oxydation), généralement le zinc.',
          exercise: {
            id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q6',
            type: 'mcq',
            prompt: 'Quel rôle commun joue le métal zinc ($\\mathrm{Zn}$) dans les piles de Volta, Leclanché et alcaline ?',
            options: [
              'Il sert de réducteur (oxydé en $\\mathrm{Zn^{2+}}$ ou $\\mathrm{ZnO}$) au pôle négatif',
              'Il sert d’oxydant le plus fort au pôle positif',
              'Il joue uniquement le rôle de pont salin inerte',
              'Il est déposé par réduction des ions $\\mathrm{Zn^{2+}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans ces trois piles usuelles, le zinc possède un potentiel très bas et constitue le réducteur consommé à la borne négative.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q1',
          type: 'mcq',
          prompt: 'Quelle équation-bilan décrit le fonctionnement de la pile inventée par Volta en 1800 ?',
          options: [
            '$\\mathrm{Zn + 2\\,H_2O \\longrightarrow Zn^{2+} + 2\\,HO^- + H_2}$',
            '$\\mathrm{Zn + Cu^{2+} \\longrightarrow Zn^{2+} + Cu}$',
            '$\\mathrm{Zn + 2\\,MnO_2 + 2\\,H^+ \\longrightarrow Zn^{2+} + 2\\,MnO(OH)}$',
            '$\\mathrm{Pb + Cu^{2+} \\longrightarrow Pb^{2+} + Cu}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La pile de Volta réduit l’eau sur l’électrode positive en dégageant du dihydrogène H₂ selon Zn + 2 H₂O → Zn²⁺ + 2 HO⁻ + H₂.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q2',
          type: 'mcq',
          prompt: 'Quels réactifs principaux interviennent dans la pile saline inventée par Georges Leclanché ?',
          options: [
            'Le zinc ($\\mathrm{Zn}$) et le dioxyde de manganèse ($\\mathrm{MnO_2}$)',
            'Le cuivre ($\\mathrm{Cu}$) et le sulfate de plomb',
            'L’argent ($\\mathrm{Ag}$) et le mercure',
            'L’aluminium et l’oxyde ferrique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le bilan de la pile Leclanché est Zn(s) + 2 MnO₂(s) + 2 H⁺(aq) → Zn²⁺(aq) + 2 MnO(OH)(s).',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q3',
          type: 'mcq',
          prompt: 'Pourquoi certaines piles usuelles (comme les piles Duracell) sont-elles qualifiées de « piles alcalines » ?',
          options: [
            'Parce que leur électrolyte est alcalin (basique, riche en ions $\\mathrm{HO^-}$)',
            'Parce qu’elles fonctionnent sans électrolyte',
            'Parce qu’elles contiennent exclusivement de l’acide chlorhydrique concentré',
            'Parce qu’elles sont rechargeables à l’infini',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On appelle pile alcaline toute pile dont l’électrolyte est basique (alcalin).',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q4',
          type: 'mcq',
          prompt: 'À quel moment une pile électrique devient-elle usagée, et peut-on la recharger ?',
          options: [
            'Lorsque l’un des réactifs est entièrement consommé ; elle ne doit pas être rechargée',
            'Uniquement lorsque le pont salin s’évapore ; on la recharge dans une prise',
            'Lorsque la température ambiante atteint $25\\,^\\circ\\text{C}$',
            'Quand sa f.é.m. double spontanément',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La pile cesse de débiter quand le réactif limitant est épuisé ; contrairement aux accumulateurs, une pile saline ou alcaline ne doit pas être rechargée.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q5',
          type: 'mcq',
          prompt: 'Quel phénomène permet de recharger un accumulateur (ou batterie) (p. 6) ?',
          options: [
            'Un générateur extérieur impose un courant de sens inverse (électrolyse), inversant la réaction chimique spontanée',
            'On ajoute du chlorure de sodium sec sur les bornes',
            'On chauffe l’accumulateur au bec Bunsen',
            'Il se recharge spontanément sans aucune source extérieure',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En imposant un courant de sens contraire à celui de la décharge (électrolyse), le système évolue en sens inverse et régénère les réactifs initiaux.',
        },
        {
          id: 'premiere_c_chimie_l09_classification_quantitative_couples_p06_q6',
          type: 'mcq',
          prompt: 'Quel rôle commun joue le métal zinc ($\\mathrm{Zn}$) dans les piles de Volta, Leclanché et alcaline ?',
          options: [
            'Il sert de réducteur (oxydé en $\\mathrm{Zn^{2+}}$ ou $\\mathrm{ZnO}$) au pôle négatif',
            'Il sert d’oxydant le plus fort au pôle positif',
            'Il joue uniquement le rôle de pont salin inerte',
            'Il est déposé par réduction des ions $\\mathrm{Zn^{2+}}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans ces trois piles usuelles, le zinc possède un potentiel très bas et constitue le réducteur consommé à la borne négative.',
        },
      ],
    },
  ],
};

