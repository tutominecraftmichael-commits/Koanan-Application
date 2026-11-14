import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Tle_H1-LOrganisation_des_Nations_Unies(ONU).pdf » (format v2 : mini-leçons de 6 étapes).

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Origines de l’ONU',
    stepTheme: 'blue',
    stepTitle: 'L’échec de la SDN et le choc de 1945',
    paragraphText:
      '• Société des Nations (SDN) : organisation créée en 1919 après la Première Guerre mondiale pour préserver la paix, mais paralysée dans les années 1930 face aux agressions des régimes totalitaires.\nLe bilan traumatisant de la Seconde Guerre mondiale (plus de 50 millions de morts, génocides, armes nucléaires) convainc les Alliés de bâtir une organisation internationale plus efficace et dotée de moyens d’action.',
    konanTip: 'L’ONU est née d’une double leçon : l’impuissance de la SDN et le traumatisme de 1939-1945.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p01_q1',
      type: 'mcq',
      prompt: 'Quelle organisation internationale créée en 1919 a échoué à empêcher la Seconde Guerre mondiale ?',
      options: [
        'L’Organisation mondiale du commerce (OMC)',
        'La Société des Nations (SDN)',
        'Le Pacte de Varsovie',
        'L’Union africaine (UA)',
      ],
      correctAnswerIndex: 1,
      explanation: 'La SDN (1919) n’a pas su empêcher les agressions de l’entre-deux-guerres ni le déclenchement de la Seconde Guerre mondiale.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Chronologie clé',
    stepTheme: 'violet',
    stepTitle: 'Les grandes conférences préparatoires (1941-1945)',
    paragraphText:
      'La naissance de l’ONU résulte d’une série de sept conférences diplomatiques tenues entre 1941 et 1945 par les Alliés, depuis les principes énoncés par Roosevelt et Churchill jusqu’à l’adoption définitive de la Charte à San Francisco.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Étapes diplomatiques de la création de l’ONU (1941-1945)',
      caption: 'Chaque conférence pose une pierre institutionnelle précise de l’ONU.',
      tableData: {
        headers: ['Date et lieu', 'Conférence / Acte', 'Décision majeure'],
        rows: [
          ['14 août 1941 (Terre-Neuve)', 'Charte de l’Atlantique', 'Roosevelt et Churchill posent les grands principes de liberté et de sécurité collective'],
          ['1er janv. 1942 (Washington)', 'Déclaration des Nations Unies', '26 États antifascistes adoptent l’expression « Nations Unies »'],
          ['Oct.-déc. 1943', 'Moscou et Téhéran', 'Accord des Grands pour créer une organisation générale internationale après la guerre'],
          ['Sept.-oct. 1944 (États-Unis)', 'Dumbarton Oaks', 'Définition des principaux organes et du fonctionnement futur'],
          ['4-11 fév. 1945 (Crimée)', 'Conférence de Yalta', 'Adoption du principe du droit de veto des grands vainqueurs'],
          ['26 avr.-26 juin 1945', 'Conférence de San Francisco', 'Rédaction et signature de la Charte de l’ONU par 50 États'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p01_q2',
      type: 'mcq',
      prompt: 'À quelle conférence le principe du droit de veto au futur Conseil de sécurité a-t-il été décidé ?',
      options: [
        'La conférence de Yalta (février 1945)',
        'La conférence de Bandung (avril 1955)',
        'Les accords de Genève (juillet 1954)',
        'Le traité de Maastricht (février 1992)',
      ],
      correctAnswerIndex: 0,
      explanation: 'C’est à Yalta (4-11 février 1945) que Roosevelt, Churchill et Staline actent le principe du droit de veto pour les futurs membres permanents.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Acte de naissance',
    stepTheme: 'green',
    stepTitle: 'De San Francisco (26 juin) au 24 octobre 1945',
    paragraphText:
      '• Le 26 juin 1945, à San Francisco, 50 États signent la Charte des Nations Unies (rejoints peu après par la Pologne pour former 51 membres fondateurs), dont seulement 4 pays africains : l’Afrique du Sud, l’Égypte, l’Éthiopie et le Libéria.\n• Après ratification par la majorité des signataires et les cinq grands, l’ONU entre officiellement en vigueur le 24 octobre 1945 (Journée des Nations Unies).',
    keyRule: 'Retenir les deux dates : 26 juin 1945 (signature de la Charte) et 24 octobre 1945 (entrée en vigueur officielle).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p01_q3',
      type: 'mcq',
      prompt: 'Combien de pays africains figuraient parmi les 50 États signataires de la Charte de San Francisco le 26 juin 1945 ?',
      options: [
        '15 pays africains',
        'Aucun pays africain',
        '4 pays : Afrique du Sud, Égypte, Éthiopie et Libéria',
        '54 pays africains',
      ],
      correctAnswerIndex: 2,
      explanation: 'En 1945, la quasi-totalité de l’Afrique est colonisée ; seuls quatre États africains participent à la signature à San Francisco.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège chronologique',
    stepTheme: 'orange',
    stepTitle: 'Attention aux dates voisines de 1941-1945',
    paragraphText:
      'En devoir ou au BAC, deux confusions sont très fréquentes :\n1. La Charte de l’Atlantique date du 14 août 1941 (et non 1942 ni 1945).\n2. Potsdam (juillet-août 1945) règle surtout le sort de l’Allemagne vaincue après la signature déjà acquise de la Charte de San Francisco (26 juin 1945), avant l’entrée en vigueur le 24 octobre 1945.',
    konanTip: 'Charte de l’Atlantique = 14 août 1941 ; Déclaration des Nations Unies = 1er janvier 1942 ; Charte de l’ONU = 26 juin 1945.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p01_q4',
      type: 'mcq',
      prompt: 'Quelle date correspond à la signature de la Charte de l’Atlantique entre Roosevelt et Churchill ?',
      options: [
        'Le 14 août 1942',
        'Le 24 octobre 1945',
        'Le 1er janvier 1942',
        'Le 14 août 1941',
      ],
      correctAnswerIndex: 3,
      explanation: 'La Charte de l’Atlantique est signée le 14 août 1941 au large de Terre-Neuve (à ne pas confondre avec l’année 1942).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Cas d’étude',
    stepTheme: 'slate',
    stepTitle: 'Associer chaque conférence à son apport',
    paragraphText:
      'Lors de la conférence de Dumbarton Oaks (septembre-octobre 1944), les États-Unis, le Royaume-Uni, l’URSS et la Chine esquissent l’architecture pratique de l’ONU : Assemblée générale, Conseil de sécurité, Secrétariat et Cour internationale.\nWashington en 1942 avait donné le nom ; San Francisco en 1945 transforme le projet en traité juridique contraignant.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p01_q5',
      type: 'mcq',
      prompt: 'Quel apport revient spécifiquement à la conférence de Dumbarton Oaks (septembre-octobre 1944) ?',
      options: [
        'La création de l’Union européenne',
        'La définition des organes et du fonctionnement futur de l’ONU',
        'La signature finale de la Charte par 50 pays',
        'La dissolution de l’URSS',
      ],
      correctAnswerIndex: 1,
      explanation: 'Dumbarton Oaks élabore les grandes lignes institutionnelles (organes et fonctionnement) reprises ensuite à Yalta puis à San Francisco.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Réflexe BAC',
    stepTheme: 'green',
    stepTitle: 'Situer le siège et l’entrée en vigueur',
    paragraphText:
      '• Dès le 24 octobre 1945, l’ONU remplace juridiquement la SDN.\n• Son siège permanent est installé à New York (États-Unis), symbole du basculement du centre diplomatique mondial de l’Europe (Genève pour la SDN) vers les États-Unis.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p01_q6',
      type: 'mcq',
      prompt: 'Dans quelle ville se trouve le siège principal de l’ONU ?',
      options: [
        'New York',
        'Genève',
        'Bruxelles',
        'La Haye',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le siège principal de l’ONU est à New York (États-Unis), tandis que certains organes ou agences siègent en Europe (La Haye, Genève, Paris, Rome, Vienne).',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'La Charte',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce que la Charte des Nations Unies ?',
    paragraphText:
      '• Charte des Nations Unies : traité fondateur composé d’un préambule (« Nous, peuples des Nations Unies... ») et de 111 articles répartis en 19 chapitres.\nElle fixe à la fois les buts poursuivis par l’organisation (article 1) et les règles juridiques de conduite que s’engagent à respecter les États membres (article 2).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p02_q1',
      type: 'mcq',
      prompt: 'Quel texte constitue la loi fondamentale et le traité fondateur de l’ONU ?',
      options: [
        'Le traité de Versailles',
        'La Charte des Nations Unies',
        'Les accords de Dayton',
        'Le traité de Rome',
      ],
      correctAnswerIndex: 1,
      explanation: 'La Charte des Nations Unies (signée le 26 juin 1945 à San Francisco) est le texte constitutif qui régit l’ONU.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Article 1',
    stepTheme: 'violet',
    stepTitle: 'Les quatre grands objectifs de l’ONU',
    paragraphText:
      'Selon l’article 1 de la Charte, l’ONU poursuit quatre objectifs essentiels :\n1. Maintenir la paix et la sécurité internationales par des mesures collectives.\n2. Développer des relations amicales entre nations fondées sur le respect de l’égalité des droits et du droit des peuples à disposer d’eux-mêmes.\n3. Réaliser la coopération internationale (économique, sociale, culturelle, humanitaire) et encourager le respect des droits de l’homme et des libertés fondamentales.\n4. Être un centre où s’harmonisent les efforts des nations vers ces fins communes.',
    keyRule: 'Retenir les 4 piliers de l’article 1 : paix, autodétermination des peuples, coopération et droits de l’homme, harmonisation.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p02_q2',
      type: 'mcq',
      prompt: 'Lequel de ces éléments figure parmi les quatre objectifs officiels de l’article 1 de la Charte ?',
      options: [
        'Instaurer une monnaie unique mondiale',
        'Maintenir la paix, respecter l’autodétermination et promouvoir les droits de l’homme',
        'Remplacer tous les gouvernements nationaux par un parlement unique',
        'Réserver le commerce international aux cinq membres permanents',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’article 1 place au cœur de l’ONU la paix, le droit des peuples à disposer d’eux-mêmes, la coopération et les droits humains.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Article 2',
    stepTheme: 'violet',
    stepTitle: 'Les cinq principes directeurs d’action',
    paragraphText:
      'Pour atteindre ces objectifs, l’article 2 impose cinq principes majeurs aux États membres :\n1. L’égalité souveraine de tous les membres.\n2. Le respect de bonne foi des obligations de la Charte.\n3. Le règlement pacifique des différends internationaux.\n4. L’abstention de recourir à la menace ou à l’emploi de la force contre l’intégrité territoriale d’un État.\n5. La non-ingérence de l’ONU dans les affaires relevant essentiellement de la compétence nationale d’un État (sauf action coercitive du chapitre VII).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p02_q3',
      type: 'mcq',
      prompt: 'Que signifie le principe de « non-ingérence » inscrit à l’article 2 de la Charte ?',
      options: [
        'L’ONU n’intervient pas dans les affaires purement intérieures d’un État souverain',
        'Aucun État n’a le droit de signer un traité commercial',
        'Les membres permanents perdent leur droit de vote en cas de conflit',
        'Tout État peut envahir son voisin sans justification',
      ],
      correctAnswerIndex: 0,
      explanation: 'Sauf menace avérée contre la paix internationale relevant du chapitre VII, l’ONU respecte la souveraineté intérieure des États.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège d’examen',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre objectif et principe',
    paragraphText:
      '• Un objectif (article 1) indique le but à atteindre : par exemple, maintenir la paix ou promouvoir les droits humains.\n• Un principe (article 2) fixe la règle de comportement à respecter : par exemple, l’égalité souveraine, la bonne foi, le règlement pacifique ou la non-ingérence.\nMélanger les deux rubriques dans un devoir fait perdre des points de rigueur conceptuelle.',
    konanTip: 'Objectif = ce qu’on veut obtenir (Article 1) ; Principe = comment on doit agir (Article 2).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p02_q4',
      type: 'mcq',
      prompt: 'Parmi ces propositions, laquelle relève directement d’un principe de conduite (article 2) plutôt que d’un objectif général ?',
      options: [
        'Favoriser le développement culturel mondial',
        'Promouvoir le respect des libertés fondamentales',
        'Régler les différends par des moyens pacifiques et sans menace de force',
        'Organiser l’aide humanitaire en cas de famine',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le règlement pacifique des différends et le non-recours à la force sont des règles de conduite prescrites par l’article 2.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Application',
    stepTheme: 'slate',
    stepTitle: 'Appliquer les principes à un conflit frontalier',
    paragraphText:
      'Deux États voisins s’opposent sur le tracé d’une frontière maritime riche en hydrocarbures. Conformément à la Charte (article 2), ils doivent renoncer à l’attaque armée et soumettre le litige à la négociation, à la médiation ou à la Cour internationale de justice.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p02_q5',
      type: 'mcq',
      prompt: 'Lorsqu’un État saisit la médiation diplomatique au lieu d’envoyer son armée sur une zone disputée, quel principe de l’ONU applique-t-il ?',
      options: [
        'Le droit de veto',
        'Le règlement pacifique des différends',
        'La politique d’endiguement',
        'Le régime de tutelle',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les États membres s’engagent à privilégier le règlement pacifique et à proscrire l’usage unilatéral de la force.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Savoir rédiger',
    stepTheme: 'green',
    stepTitle: 'Utiliser l’égalité des droits et la souveraineté dans une copie',
    paragraphText:
      'En dissertation, montrer la tension permanente entre deux exigences de la Charte :\n• d’un côté, l’égalité souveraine et la non-ingérence protègent les petits États face aux grandes puissances ;\n• de l’autre, l’exigence des droits humains et du maintien de la paix peut conduire le Conseil de sécurité à autoriser une intervention sous mandat onusien.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p02_q6',
      type: 'mcq',
      prompt: 'Quel principe affirme que tous les États membres de l’ONU disposent juridiquement du même statut d’État, qu’ils soient grands ou petits ?',
      options: [
        'La bipolarisation',
        'L’égalité souveraine des États',
        'Le droit de veto',
        'La solidarité atlantique',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’article 2 paragraphe 1 proclame l’égalité souveraine de tous les membres (exprimée notamment par « 1 État = 1 voix » à l’Assemblée générale).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Organe délibératif',
    stepTheme: 'blue',
    stepTitle: 'L’Assemblée générale (AG) : le parlement des nations',
    paragraphText:
      '• Assemblée générale : organe plénier réunissant les 193 États membres (depuis l’admission du Soudan du Sud le 9 juillet 2011). Chaque État dispose d’une voix.\n• Rôle : elle débat de toutes les questions internationales, approuve le budget, élit les membres non permanents du Conseil de sécurité et nomme le Secrétaire général sur recommandation de ce dernier.\n• Limite : ses résolutions sont des recommandations non contraignantes.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p03_q1',
      type: 'mcq',
      prompt: 'Combien d’États membres l’ONU compte-t-elle depuis l’admission du Soudan du Sud en juillet 2011 ?',
      options: [
        '51 États',
        '120 États',
        '193 États',
        '215 États',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le Soudan du Sud est devenu le 193e État membre de l’ONU le 9 juillet 2011.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Organe exécutif',
    stepTheme: 'violet',
    stepTitle: 'Le Conseil de sécurité (CS) et le droit de veto',
    paragraphText:
      '• Composition (15 membres) : 5 membres permanents disposant du droit de veto (États-Unis, France, Royaume-Uni, Russie, Chine) + 10 membres non permanents élus par l’AG pour 2 ans.\n• Pouvoir : seul organe dont les résolutions s’imposent aux États. Il agit de manière graduelle : 1. recommandations et cessez-le-feu ; 2. sanctions diplomatiques et embargo économique ; 3. intervention militaire des Casques bleus (chapitre VII).',
    keyRule: 'Les 5 membres permanents du Conseil de sécurité (P5) : États-Unis, France, Royaume-Uni, Russie, Chine.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p03_q2',
      type: 'mcq',
      prompt: 'Quels sont les cinq membres permanents du Conseil de sécurité disposant du droit de veto ?',
      options: [
        'États-Unis, Allemagne, Japon, Brésil, Inde',
        'États-Unis, France, Royaume-Uni, Russie, Chine',
        'France, Canada, Italie, Russie, Chine',
        'États-Unis, Royaume-Uni, Nigeria, Inde, Russie',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les 5 permanents sont les grandes puissances victorieuses de 1945 (États-Unis, France, Royaume-Uni, URSS/Russie, Chine).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Administration',
    stepTheme: 'violet',
    stepTitle: 'Le Secrétariat général et ses titulaires',
    paragraphText:
      'Dirigé par le Secrétaire général, élu pour un mandat de 5 ans renouvelable par l’Assemblée générale sur recommandation du Conseil de sécurité, le Secrétariat assure le fonctionnement administratif quotidien et une mission diplomatique de médiation.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Les neuf Secrétaires généraux de l’ONU depuis 1946',
      caption: 'Mandat de 5 ans renouvelable ; deux personnalités africaines (Boutros-Ghali et Kofi Annan) ont dirigé l’ONU.',
      tableData: {
        headers: ['Secrétaire général', 'Nationalité', 'Mandat'],
        rows: [
          ['Trygve Lie', 'Norvège', '1946 - 1952'],
          ['Dag Hammarskjöld', 'Suède', '1953 - 1961'],
          ['U Thant', 'Birmanie (Myanmar)', '1961 - 1971'],
          ['Kurt Waldheim', 'Autriche', '1972 - 1981'],
          ['Javier Pérez de Cuéllar', 'Pérou', '1982 - 1991'],
          ['Boutros Boutros-Ghali', 'Égypte', '1992 - 1996'],
          ['Kofi Annan', 'Ghana', '1997 - 2006'],
          ['Ban Ki-moon', 'Corée du Sud', '2007 - 2016'],
          ['António Guterres', 'Portugal', 'Depuis janvier 2017'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p03_q3',
      type: 'mcq',
      prompt: 'Qui a été le premier Africain originaire d’Afrique subsaharienne à exercer la fonction de Secrétaire général de l’ONU (1997-2006) ?',
      options: [
        'Kofi Annan (Ghana)',
        'Boutros Boutros-Ghali (Égypte)',
        'U Thant (Birmanie)',
        'António Guterres (Portugal)',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’Égyptien Boutros Boutros-Ghali (1992-1996) a été le premier Africain, suivi par le Ghanéen Kofi Annan (1997-2006).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Autres organes',
    stepTheme: 'blue',
    stepTitle: 'ECOSOC, Cour internationale de justice et Conseil de tutelle',
    paragraphText:
      '• Conseil économique et social (ECOSOC) : 54 membres élus pour 3 ans ; coordonne le travail économique, social et humanitaire des agences spécialisées.\n• Cour internationale de justice (CIJ) : siège à La Haye (Pays-Bas) ; 15 juges élus pour 9 ans, chargés de trancher les différends juridiques entre États.\n• Conseil de tutelle : chargé de conduire vers l’autonomie les anciens territoires sous mandat (mission suspendue depuis l’indépendance des Palaos en 1994, même si l’ONU a assuré des administrations transitoires au Kosovo en 1999 et au Timor-Oriental jusqu’en 2002).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p03_q4',
      type: 'mcq',
      prompt: 'Où siège la Cour internationale de justice (CIJ), organe judiciaire principal de l’ONU ?',
      options: [
        'À New York (États-Unis)',
        'À Genève (Suisse)',
        'À La Haye (Pays-Bas)',
        'À Vienne (Autriche)',
      ],
      correctAnswerIndex: 2,
      explanation: 'La CIJ siège au Palais de la Paix à La Haye (Pays-Bas) avec 15 juges élus pour 9 ans.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Confusion fréquente',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre CIJ et CPI',
    paragraphText:
      '• La Cour internationale de justice (CIJ), organe principal de l’ONU à La Haye, ne juge que des litiges entre États (frontières, traités).\n• La Cour pénale internationale (CPI), également à La Haye mais indépendante de l’ONU (Statut de Rome, 1998/2002), juge des individus accusés de génocide, crimes de guerre ou crimes contre l’humanité.',
    konanTip: 'CIJ = litiges entre États (organe ONU) ; CPI = responsabilité pénale des individus.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p03_q5',
      type: 'mcq',
      prompt: 'Quelle différence fondamentale distingue la CIJ de la CPI ?',
      options: [
        'La CIJ juge les litiges entre États tandis que la CPI juge des individus',
        'La CIJ est à Paris et la CPI est à New York',
        'La CIJ dispose d’une armée permanente contrairement à la CPI',
        'La CIJ ne s’occupe que des budgets des institutions spécialisées',
      ],
      correctAnswerIndex: 0,
      explanation: 'La CIJ tranche les différends interétatiques ; la CPI poursuit des personnes physiques pour crimes internationaux graves.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Analyse de crise',
    stepTheme: 'slate',
    stepTitle: 'Pourquoi une résolution majoritaire peut-elle être bloquée ?',
    paragraphText:
      'Même si 14 membres sur 15 du Conseil de sécurité approuvent un texte sur une crise majeure, il suffit qu’un seul des 5 membres permanents vote contre pour que la résolution soit rejetée : c’est le droit de veto.\nEn revanche, l’abstention d’un membre permanent n’empêche pas l’adoption d’une résolution.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p03_q6',
      type: 'mcq',
      prompt: 'Que se passe-t-il au Conseil de sécurité si 14 membres votent pour une résolution et qu’un seul membre permanent vote contre ?',
      options: [
        'La résolution est adoptée à la majorité des deux tiers',
        'La résolution est rejetée en raison du droit de veto',
        'Le Secrétaire général tranche par un vote double',
        'L’affaire est automatiquement transférée à l’ECOSOC',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le vote négatif d’un seul des 5 membres permanents bloque toute décision de fond au Conseil de sécurité.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Système onusien',
    stepTheme: 'blue',
    stepTitle: 'Rôle des organismes spécialisés et programmes',
    paragraphText:
      '• Organismes spécialisés, fonds et programmes : structures autonomes sur le plan budgétaire et administratif mais rattachées à l’ONU (coordonnées par l’ECOSOC) pour traiter des domaines précis : santé, éducation, agriculture, réfugiés, finance ou énergie nucléaire civile.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p04_q1',
      type: 'mcq',
      prompt: 'Quel organe principal de l’ONU assure la coordination des institutions spécialisées dans les domaines économique, social et humanitaire ?',
      options: [
        'Le Conseil de tutelle',
        'Le Conseil économique et social (ECOSOC)',
        'La Cour internationale de justice',
        'Le Comité des cinq permanents',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’ECOSOC (54 membres élus pour 3 ans) coordonne les activités des agences et institutions spécialisées.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Volet social',
    stepTheme: 'violet',
    stepTitle: 'Organismes sociaux, culturels et humanitaires',
    paragraphText:
      '• UNESCO (Paris, 1946) : éducation, science, culture et patrimoine mondial.\n• OMS (Genève, 1948) : santé publique mondiale et lutte contre les épidémies.\n• FAO (Rome, 1945) et PAM (Rome, 1961) : agriculture, lutte contre la faim, aide alimentaire et cantines scolaires.\n• OIT (Genève, 1919/1946) : normes internationales du travail.\n• UNICEF (1946) : protection et droits de l’enfant.\n• HCR (Genève, 1950) et HCDH (Genève, 1993) : protection des réfugiés et défense des droits de l’homme.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p04_q2',
      type: 'mcq',
      prompt: 'Quel organisme onusien basé à Paris s’occupe de l’éducation, de la science et de la culture ?',
      options: [
        'La FAO',
        'L’OMS',
        'L’UNESCO',
        'Le HCR',
      ],
      correctAnswerIndex: 2,
      explanation: 'L’UNESCO (Organisation des Nations Unies pour l’éducation, la science et la culture) a son siège à Paris depuis 1946.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Volet économique',
    stepTheme: 'violet',
    stepTitle: 'Organismes techniques, financiers et commerciaux',
    paragraphText:
      '• Volet technique : AIEA (Vienne, 1957 : contrôle du nucléaire civil et non-prolifération), OACI (Montréal, 1947 : aviation civile), UPU (Berne, 1874 : union postale).\n• Volet économique et financier : FMI et Banque mondiale / BIRD (créés à Bretton Woods en 1944, sièges à Washington : stabilité financière et prêts de développement), CNUCED (Genève, 1964 : commerce et développement), GATT (1947) puis OMC (1995 : commerce international).',
    keyRule: 'Washington abrite les institutions financières de Bretton Woods (FMI, Banque mondiale) ; Vienne abrite l’AIEA.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p04_q3',
      type: 'mcq',
      prompt: 'Quelle agence spécialisée veille à l’utilisation pacifique de l’énergie atomique et lutte contre la prolifération nucléaire ?',
      options: [
        'L’AIEA (siège à Vienne)',
        'La FAO (siège à Rome)',
        'L’UPU (siège à Berne)',
        'L’OIT (siège à Genève)',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’Agence internationale de l’énergie atomique (AIEA), créée en 1957 à Vienne, contrôle l’usage civil du nucléaire.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège des sigles',
    stepTheme: 'orange',
    stepTitle: 'Bien distinguer HCR, HCDH, OMS et FAO',
    paragraphText:
      '• HCR = Haut-Commissariat des Nations Unies pour les réfugiés (Genève, 1950).\n• HCDH = Haut-Commissariat des Nations Unies aux droits de l’homme (Genève, 1993).\n• FAO = Organisation pour l’alimentation et l’agriculture (Rome), différente de l’OMS = Organisation mondiale de la santé (Genève).',
    konanTip: 'Ne confonds pas Genève (OMS, OIT, HCR, HCDH, CNUCED) et Rome (FAO, PAM).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p04_q4',
      type: 'mcq',
      prompt: 'À quelle mission précise correspond l’acronyme HCR ?',
      options: [
        'La régulation du transport aérien international',
        'La protection et l’assistance aux réfugiés',
        'La fixation des taux de change monétaires',
        'Le contrôle des centrales nucléaires',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le HCR (Haut-Commissariat pour les réfugiés), basé à Genève depuis 1950, protège les populations déplacées et réfugiées.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Terrain concret',
    stepTheme: 'slate',
    stepTitle: 'L’action des agences onusiennes en Côte d’Ivoire',
    paragraphText:
      'En Côte d’Ivoire comme dans d’autres pays en développement, l’ONU est concrètement présente sur le terrain grâce à ses agences :\n• le PAM appuie les cantines scolaires en zone rurale ;\n• l’UNICEF soutient la vaccination et la scolarisation des enfants ;\n• l’OMS a accompagné la riposte sanitaire face aux épidémies comme Ebola ou la COVID-19.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p04_q5',
      type: 'mcq',
      prompt: 'Quel programme onusien appuie directement les cantines scolaires et la lutte contre l’insécurité alimentaire d’urgence ?',
      options: [
        'L’OACI',
        'Le Programme alimentaire mondial (PAM)',
        'Le Fonds monétaire international (FMI)',
        'L’Union postale universelle (UPU)',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le PAM (basé à Rome, Prix Nobel de la paix 2020) apporte une aide alimentaire d’urgence et soutient les cantines scolaires.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Classement rapide',
    stepTheme: 'green',
    stepTitle: 'Classer les organismes en 3 familles au BAC',
    paragraphText:
      'Pour ne jamais énumérer en désordre dans une copie, regroupe toujours les organismes en trois catégories :\n1. Social, culture et humanitaire (UNESCO, OMS, OIT, FAO, PAM, UNICEF, HCR, HCDH).\n2. Technique et régulation (AIEA, OACI, UPU).\n3. Économie, finance et commerce (FMI, Banque mondiale, CNUCED, OMC).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p04_q6',
      type: 'mcq',
      prompt: 'Quelles institutions sont issues des accords de Bretton Woods de 1944 pour stabiliser l’économie mondiale et financer le développement ?',
      options: [
        'Le FMI et la Banque mondiale',
        'L’UNESCO et l’UNICEF',
        'L’OMS et le HCR',
        'L’AIEA et l’OACI',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le Fonds monétaire international (FMI) et la Banque mondiale ont été créés en 1944 à Bretton Woods.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Succès politiques',
    stepTheme: 'violet',
    stepTitle: 'Maintien de la paix et règlement de crises',
    paragraphText:
      '• Prévention d’une troisième guerre mondiale : malgré la guerre froide, l’ONU offre un forum permanent de dialogue (ex. crise de Cuba en 1962 avec U Thant) et contrôle le nucléaire civil via l’AIEA.\n• Interventions de paix : Corée (1950), Suez/Égypte (1956, naissance des Casques bleus), Congo (1961), Libération du Koweït (1990-1991), Libéria (2001), Côte d’Ivoire (ONUCI, 2002-2017). Les Casques bleus ont reçu le Prix Nobel de la paix en 1988.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p05_q1',
      type: 'mcq',
      prompt: 'À quelle occasion les Casques bleus de l’ONU ont-ils reçu une distinction internationale majeure en 1988 ?',
      options: [
        'Le prix UNESCO de l’éducation',
        'Le Prix Nobel de la paix',
        'Le traité de non-prolifération',
        'La création du Conseil de tutelle',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les forces de maintien de la paix de l’ONU (Casques bleus) ont reçu le Prix Nobel de la paix en 1988.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Succès sociaux & droit',
    stepTheme: 'violet',
    stepTitle: 'Décolonisation, droits humains, santé et environnement',
    paragraphText:
      '• Droits humains et justice : Déclaration universelle des droits de l’homme (10 décembre 1948), tribunaux pénaux internationaux (ex-Yougoslavie, Rwanda), appui à la CPI.\n• Décolonisation : tribune anticoloniale et accompagnement de dizaines de pays vers l’indépendance.\n• Progrès socio-sanitaires et écologiques : éradication de la variole (OMS), baisse de la mortalité infantile, sommets de la Terre (Rio 1992, COP21 de Paris 2015).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p05_q2',
      type: 'mcq',
      prompt: 'À quelle date l’Assemblée générale de l’ONU a-t-elle adopté la Déclaration universelle des droits de l’homme ?',
      options: [
        'Le 24 octobre 1945',
        'Le 10 décembre 1948',
        'Le 9 novembre 1989',
        'Le 11 septembre 2001',
      ],
      correctAnswerIndex: 1,
      explanation: 'La Déclaration universelle des droits de l’homme (DUDH) a été adoptée à Paris (Palais de Chaillot) le 10 décembre 1948.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Limites et échecs',
    stepTheme: 'orange',
    stepTitle: 'Paralysie du veto, conflits non résolus et manque de moyens',
    paragraphText:
      '• Blocage politique : usage abusif du droit de veto (279 vetos entre 1946 et 2016), qui paralyse l’ONU lorsque les intérêts des 5 permanents s’opposent (guerre froide, Syrie, Ukraine, conflit israélo-palestinien).\n• Échecs tragiques et limites opérationnelles : impuissance en Somalie (1993), incapacité à empêcher le génocide des Tutsis au Rwanda (1994) ou le massacre de Srebrenica (1995) ; retards de cotisations des États ; contournement de l’ONU (Irak 2003).\n• Défis mondiaux persistants : pauvreté, inégalités et crise sanitaire mondiale (COVID-19).',
    konanTip: 'Au BAC, cite toujours des faits datés : Rwanda (1994), Somalie (1993), Irak (2003), vetos au Conseil de sécurité.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p05_q3',
      type: 'mcq',
      prompt: 'Quelle limite majeure explique fréquemment l’inaction du Conseil de sécurité face à certaines guerres civiles ou régionales ?',
      options: [
        'L’absence de siège permanent pour les États-Unis',
        'L’usage du droit de veto par l’un des cinq membres permanents',
        'L’interdiction faite à l’ONU de tenir des assemblées annuelles',
        'Le refus des pays d’Afrique d’adhérer à l’organisation',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les divergences entre membres permanents entraînent le recours au droit de veto, bloquant toute résolution contraignante.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Réformes souhaitées',
    stepTheme: 'green',
    stepTitle: 'Comment réformer l’ONU pour le XXIe siècle ?',
    paragraphText:
      'L’architecture de 1945 ne reflète plus les équilibres actuels. Trois axes de réforme sont régulièrement proposés :\n1. Élargir le Conseil de sécurité à de nouveaux membres permanents représentatifs (Afrique : ex. Nigeria, Afrique du Sud ou Égypte ; Amérique latine : Brésil, Mexique ; Asie : Inde, Japon ; Europe : Allemagne).\n2. Encadrer ou limiter le droit de veto en cas de génocide ou de crimes de masse.\n3. Renforcer l’autorité démocratique de l’Assemblée générale et la régularité des financements.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p05_q4',
      type: 'mcq',
      prompt: 'Pourquoi la réforme du Conseil de sécurité est-elle fortement réclamée par les pays du Sud et l’Union africaine ?',
      options: [
        'Parce que l’Afrique et l’Amérique latine ne disposent d’aucun siège permanent avec droit de veto',
        'Parce que l’Assemblée générale refuse d’admettre de nouveaux États depuis 1960',
        'Parce que l’ONU souhaite supprimer la Cour internationale de justice',
        'Parce que le Secrétaire général est toujours de nationalité américaine',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le Conseil de sécurité reste figé sur les vainqueurs de 1945 : aucun État africain ni latino-américain n’y détient de siège permanent.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Plan de devoir',
    stepTheme: 'slate',
    stepTitle: 'Construire un bilan nuancé dans une dissertation',
    paragraphText:
      'Pour répondre à la question « L’ONU a-t-elle rempli sa mission depuis 1945 ? » :\n• Partie I : Un bilan positif sur le plan humanitaire, juridique, environnemental et dans la gestion de plusieurs crises.\n• Partie II : Des limites structurelles graves (veto, contournement par les grandes puissances, échecs au Rwanda ou en Irak).\n• Ouverture : Nécessité d’une réforme du Conseil de sécurité sans renoncer au multilatéralisme.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p05_q5',
      type: 'mcq',
      prompt: 'Quelle approche donne la meilleure copie sur le bilan de l’ONU au Baccalauréat ?',
      options: [
        'Affirmer que l’ONU n’a obtenu aucun résultat depuis 1945',
        'Se limiter uniquement à la liste des dates des Secrétaires généraux',
        'Montrer de façon nuancée les acquis humanitaires et de paix face aux blocages politiques du veto',
        'Affirmer que l’ONU possède une armée supérieure à toutes les armées nationales',
      ],
      correctAnswerIndex: 2,
      explanation: 'L’approche nuancée s’appuie sur des faits précis pour peser à la fois les réussites réelles et les insuffisances institutionnelles.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Vérification finale',
    stepTheme: 'green',
    stepTitle: 'Relier cotisations et autonomie d’action',
    paragraphText:
      'Le budget de l’ONU dépend des contributions obligatoires et volontaires des États membres (calculées selon la richesse nationale).\nLorsque de grands contributeurs retardent ou suspendent leurs paiements, les opérations de maintien de la paix et les programmes humanitaires sont fragilisés.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p05_q6',
      type: 'mcq',
      prompt: 'De quoi dépend principalement le financement du budget régulier et des opérations de l’ONU ?',
      options: [
        'D’un impôt mondial prélevé directement sur chaque citoyen',
        'Des contributions et cotisations des États membres',
        'Des recettes des compagnies aériennes de l’OACI',
        'De prêts obligatoires du Conseil de tutelle',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’ONU est financée par les cotisations des États membres ; les retards de paiement limitent sa capacité d’intervention.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Épreuve BAC 1',
    stepTheme: 'green',
    stepTitle: 'Déjouer un QCM « Vrai ou Faux » sur l’ONU',
    paragraphText:
      'Repérons les erreurs typiques glissées dans les sujets d’entraînement :\n• « La Charte de l’Atlantique est signée le 14 août 1942 » -> FAUX (14 août 1941).\n• « Tous les États de l’AG ont le droit de veto » -> FAUX (seuls les 5 permanents du Conseil de sécurité).\n• « L’ONU compte 4 pays africains dès San Francisco » -> VRAI (Afrique du Sud, Égypte, Éthiopie, Libéria).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p06_q1',
      type: 'mcq',
      prompt: 'Parmi ces quatre affirmations, laquelle est rigoureusement EXACTE ?',
      options: [
        'La Charte de l’Atlantique a été signée le 14 août 1942',
        'Les résolutions de l’Assemblée générale sont toujours militairement contraignantes',
        'Le Conseil de sécurité compte 15 membres dont 5 permanents dotés du droit de veto',
        'La Cour internationale de justice siège à New York',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le Conseil de sécurité comprend 5 membres permanents avec droit de veto et 10 membres non permanents élus pour 2 ans.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Commentaire',
    stepTheme: 'slate',
    stepTitle: 'Commenter un extrait sur la réforme de l’ONU',
    paragraphText:
      'Face à un discours critiquant le fonctionnement actuel de l’ONU (par exemple lors d’un sommet de l’Union africaine) :\n1. Présenter le document (auteur, contexte de monde multipolaire, nature).\n2. Expliquer l’argument principal (sous-représentation du Sud au Conseil de sécurité depuis 1945).\n3. Évaluer la portée du texte en rappelant la difficulté d’amender la Charte (ratification requise des 2/3 des membres, dont les 5 permanents).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p06_q2',
      type: 'mcq',
      prompt: 'Pourquoi est-il juridiquement si difficile de modifier la Charte de l’ONU pour supprimer ou modifier le droit de veto ?',
      options: [
        'Parce que toute révision exige aussi la ratification des cinq membres permanents actuels',
        'Parce que le texte de la Charte interdit toute modification pendant 100 ans',
        'Parce que la Cour internationale de justice s’y oppose systématiquement',
        'Parce que seul le PAM peut proposer une révision',
      ],
      correctAnswerIndex: 0,
      explanation: 'En vertu de l’article 108 de la Charte, un amendement doit être ratifié par les deux tiers des membres, y compris tous les membres permanents du Conseil de sécurité.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Comparatif',
    stepTheme: 'green',
    stepTitle: 'Comparer l’Assemblée générale et le Conseil de sécurité',
    paragraphText:
      '• Assemblée générale : 193 États, « 1 État = 1 voix », rôle consultatif et budgétaire, décisions non contraignantes (recommandations).\n• Conseil de sécurité : 15 membres (5 permanents + 10 élus pour 2 ans), droit de veto des 5 permanents, décisions contraignantes pour maintenir ou rétablir la paix.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p06_q3',
      type: 'mcq',
      prompt: 'Quelle durée de mandat exercent les 10 membres non permanents du Conseil de sécurité ?',
      options: [
        '1 an',
        '2 ans',
        '5 ans',
        '9 ans',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les 10 membres non permanents sont élus par l’Assemblée générale pour un mandat de 2 ans (renouvelable par moitié chaque année).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Nuance obligatoire',
    stepTheme: 'orange',
    stepTitle: 'Éviter les jugements caricaturaux',
    paragraphText:
      'Écrire « L’ONU ne sert à rien car il y a encore des guerres » est une erreur méthodologique : c’est oublier l’action quotidienne vitale de l’UNICEF, du PAM, du HCR, de l’OMS et de l’UNESCO pour des centaines de millions de personnes, ainsi que le rôle d’amortisseur diplomatique de l’Assemblée générale.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p06_q4',
      type: 'mcq',
      prompt: 'Dans quel domaine l’ONU obtient-elle ses résultats les plus consensuels et les plus durables ?',
      options: [
        'La suppression de toutes les armées nationales',
        'L’action humanitaire, sanitaire, éducative et normative (UNICEF, OMS, UNESCO, PAM)',
        'Le remplacement des États par un gouvernement mondial unique',
        'L’abolition du droit de veto dès 1950',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les agences spécialisées et programmes humanitaires de l’ONU obtiennent des résultats concrets reconnus mondialement.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Situation d’évaluation',
    stepTheme: 'slate',
    stepTitle: 'Résoudre un débat sur l’intervention onusienne en Afrique',
    paragraphText:
      'Situation : Lors d’un débat au lycée sur les crises africaines, Yao affirme que l’ONU a été utile en Côte d’Ivoire (ONUCI), tandis qu’Awa rappelle le drame du Rwanda en 1994.\nRéponse argumentée : les deux constats sont historiquement exacts et illustrent le bilan contrasté de l’ONU — capable d’accompagner une sortie de crise quand le Conseil de sécurité est uni (Côte d’Ivoire), mais impuissante quand la volonté politique des grandes puissances fait défaut (Rwanda, 1994).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p06_q5',
      type: 'mcq',
      prompt: 'Que révèle la comparaison entre l’intervention en Côte d’Ivoire (ONUCI) et l’inaction face au génocide au Rwanda en 1994 ?',
      options: [
        'L’efficacité de l’ONU dépend étroitement de l’accord et de la volonté politique du Conseil de sécurité',
        'L’ONU n’intervient jamais sur le continent africain',
        'Le Rwanda n’était pas membre de l’ONU en 1994',
        'La Côte d’Ivoire possède un siège permanent au Conseil de sécurité',
      ],
      correctAnswerIndex: 0,
      explanation: 'Lorsque le Conseil de sécurité donne un mandat clair et des moyens suffisants, l’ONU agit efficacement ; lorsque les grandes puissances hésitent ou se divisent, elle échoue.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Synthèse finale',
    stepTheme: 'green',
    stepTitle: 'Les 5 repères incontournables de la leçon 1',
    paragraphText:
      '1. Charte signée le 26 juin 1945 (San Francisco), entrée en vigueur le 24 octobre 1945.\n2. 4 objectifs (article 1) et 5 principes (article 2).\n3. 6 organes principaux : AG, CS (5 permanents + 10 élus), Secrétariat, ECOSOC, CIJ, Conseil de tutelle.\n4. Réseau spécialisé : UNESCO, OMS, FAO, PAM, UNICEF, HCR, OIT, FMI, Banque mondiale, AIEA.\n5. Bilan contrasté appelant une réforme démocratique du Conseil de sécurité.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l01_onu_p06_q6',
      type: 'mcq',
      prompt: 'À quelle date commémore-t-on chaque année la « Journée des Nations Unies », anniversaire de l’entrée en vigueur de la Charte en 1945 ?',
      options: [
        'Le 14 août',
        'Le 26 juin',
        'Le 24 octobre',
        'Le 10 décembre',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le 24 octobre 1945 marque l’entrée en vigueur officielle de la Charte des Nations Unies.',
    },
  },
];

export const HIST_TLE_T1_L01_ONU: CurriculumChapter = {
  id: 'terminale_hg_histoire_t1_l01_onu',
  subjectId: 'histoire_geo',
  gradeLevel: 'terminale_c',
  alsoForGrades: ['terminale_d', 'terminale_a1', 'terminale_a2'],
  order: 1,
  title: "Thème 1, leçon 1 : L'Organisation des Nations Unies (ONU)",
  summary:
    "Origines et conférences fondatrices (1941-1945), objectifs et principes de la Charte, organes principaux et institutions spécialisées, bilan contrasté et réformes souhaitées.",
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'Tle_H1-LOrganisation_des_Nations_Unies(ONU).pdf',
  points: [
    {
      id: 'terminale_hg_histoire_t1_l01_onu_p01',
      order: 1,
      title: "Origines et conférences fondatrices de l'ONU (1941-1945)",
      summary: "Comprendre pourquoi la SDN a échoué et comment sept conférences alliées ont abouti à la Charte de San Francisco.",
      conceptExplanation:
        "Créée après l'échec de la Société des Nations (1919) et le choc humain de la Seconde Guerre mondiale, l'ONU est préparée par une série de conférences alliées entre 1941 (Charte de l'Atlantique) et 1945 (Yalta et San Francisco). Signée le 26 juin 1945 par 50 États (dont 4 africains), la Charte entre officiellement en vigueur le 24 octobre 1945.",
      keyRule: "26 juin 1945 : signature à San Francisco ; 24 octobre 1945 : entrée en vigueur officielle de l'ONU.",
      formulas: [],
      workedExample: {
        title: 'Distinguer Washington (1942), Dumbarton Oaks (1944) et Yalta (1945)',
        statement: 'Un élève affirme que le droit de veto a été inventé dès 1941 lors de la Charte de l’Atlantique. Est-ce exact ?',
        methodSteps: [
          'La Charte de l’Atlantique (14 août 1941) pose les principes généraux d’après-guerre, sans encore créer l’organisation.',
          'Dumbarton Oaks (1944) dessine les organes, et Yalta (février 1945) adopte le principe du droit de veto.',
        ],
        conclusion: "Non : le droit de veto a été arrêté à Yalta en février 1945 et inscrit dans la Charte de San Francisco.",
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l01_onu_p02',
      order: 2,
      title: "Objectifs et principes fondamentaux de la Charte",
      summary: "Maîtriser les quatre buts de l'article 1 et les cinq principes de conduite de l'article 2.",
      conceptExplanation:
        "La Charte des Nations Unies (préambule et 111 articles) fixe quatre objectifs majeurs (article 1) : paix et sécurité, autodétermination des peuples, coopération internationale et droits de l'homme, harmonisation. Elle impose cinq principes (article 2) : égalité souveraine, bonne foi, règlement pacifique des différends, non-recours à la force et non-ingérence.",
      keyRule: "Article 1 = les objectifs de l'ONU ; Article 2 = les règles imposées aux États membres.",
      formulas: [],
      workedExample: {
        title: 'Différencier objectif et principe dans un sujet du BAC',
        statement: "Où classer le « règlement pacifique des différends » et le « maintien de la paix » ?",
        methodSteps: [
          'Le maintien de la paix est le but premier fixé à l’article 1 (objectif).',
          'Le règlement pacifique des différends est une règle d’action imposée aux États à l’article 2 (principe).',
        ],
        conclusion: 'Maintien de la paix = objectif (art. 1) ; règlement pacifique = principe (art. 2).',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l01_onu_p03',
      order: 3,
      title: "Les six organes principaux de l'ONU",
      summary: "Connaître le rôle, la composition et les pouvoirs de l'AG, du Conseil de sécurité, du Secrétariat, de l'ECOSOC, de la CIJ et du Conseil de tutelle.",
      conceptExplanation:
        "L'ONU repose sur six organes principaux. L'Assemblée générale réunit les 193 États sur le principe « 1 État = 1 voix » mais n'émet que des recommandations. Le Conseil de sécurité (5 permanents avec droit de veto + 10 non permanents élus pour 2 ans) prend seul des décisions contraignantes. Le Secrétariat (dirigé par le Secrétaire général pour 5 ans), l'ECOSOC (54 membres), la CIJ (15 juges à La Haye) et le Conseil de tutelle complètent l'architecture.",
      keyRule: "Seul le Conseil de sécurité prend des résolutions contraignantes ; les 5 permanents y disposent du droit de veto.",
      formulas: [],
      workedExample: {
        title: 'Comprendre le blocage au Conseil de sécurité',
        statement: 'Pourquoi une résolution soutenue par 14 membres sur 15 peut-elle échouer ?',
        methodSteps: [
          'Vérifier si le vote négatif provient d’un membre non permanent ou d’un des 5 membres permanents.',
          'Tout vote contre d’un membre permanent (États-Unis, France, Royaume-Uni, Russie ou Chine) constitue un veto.',
        ],
        conclusion: 'Le droit de veto d’un seul membre permanent bloque l’adoption de la résolution.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l01_onu_p04',
      order: 4,
      title: "Les organismes spécialisés et programmes de l'ONU",
      summary: "Identifier les principales institutions sociales, techniques et financières du système onusien et leur siège.",
      conceptExplanation:
        "Autour des organes centraux gravitent de nombreuses agences coordonnées par l'ECOSOC : volet social et humanitaire (UNESCO à Paris, OMS, OIT, HCR et HCDH à Genève, FAO et PAM à Rome, UNICEF), volet technique (AIEA à Vienne, OACI à Montréal, UPU à Berne) et volet économique et financier (FMI et Banque mondiale à Washington, CNUCED, OMC).",
      keyRule: "Retenir les sièges majeurs : UNESCO (Paris), OMS/OIT/HCR (Genève), FAO/PAM (Rome), FMI/BM (Washington), AIEA (Vienne).",
      formulas: [],
      workedExample: {
        title: 'Identifier le rôle des agences en Afrique',
        statement: 'Quelles agences interviennent lors d’une crise alimentaire et sanitaire touchant les enfants ?',
        methodSteps: [
          'Pour l’alimentation et les cantines scolaires : PAM et FAO.',
          'Pour la santé, les vaccins et l’enfance : OMS et UNICEF.',
        ],
        conclusion: 'L’ONU agit sur le terrain par la complémentarité de ses agences spécialisées.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l01_onu_p05',
      order: 5,
      title: "Bilan contrasté de l'ONU et réformes souhaitées",
      summary: "Évaluer les réussites politiques et humanitaires face aux limites du veto et aux projets d'élargissement.",
      conceptExplanation:
        "Depuis 1945, l'ONU a évité une troisième guerre mondiale, accompagné la décolonisation, proclamé la DUDH (10 décembre 1948), conduit de nombreuses missions de paix (Prix Nobel 1988) et sauvé des millions de vies via ses agences. Toutefois, elle reste affaiblie par l'abus du droit de veto, les retards de cotisations et de graves échecs (Rwanda 1994, Somalie 1993, Irak 2003), rendant urgente la réforme du Conseil de sécurité.",
      keyRule: "Un bilan équilibré associe toujours acquis humanitaires/diplomatiques et blocages liés au droit de veto.",
      formulas: [],
      workedExample: {
        title: 'Argumenter en faveur de la réforme du Conseil de sécurité',
        statement: 'Pourquoi l’Afrique demande-t-elle deux sièges permanents avec droit de veto ?',
        methodSteps: [
          'En 1945, presque toute l’Afrique était colonisée et n’a obtenu aucun siège permanent.',
          'Aujourd’hui, les pays africains représentent plus d’un quart des membres de l’ONU et accueillent la majorité des opérations de paix.',
        ],
        conclusion: 'Élargir le Conseil de sécurité à l’Afrique, à l’Amérique latine et aux puissances d’Asie/Europe renforcerait la légitimité de l’ONU.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l01_onu_p06',
      order: 6,
      title: "Méthodologie BAC et situations d'évaluation sur l'ONU",
      summary: "Maîtriser les pièges d'examen, le commentaire de texte et les situations d'évaluation sur les Nations Unies.",
      conceptExplanation:
        "Au Baccalauréat, les sujets sur l'ONU testent la précision chronologique (1941-1945), la distinction entre Assemblée générale et Conseil de sécurité, la maîtrise des sigles spécialisés et la capacité à dresser un bilan argumenté et nuancé de l'action onusienne en Afrique et dans le monde.",
      keyRule: "Toujours justifier une appréciation de l'ONU par des exemples précis et datés (Corée 1950, Suez 1956, Rwanda 1994, Côte d'Ivoire 2002-2017).",
      formulas: [],
      workedExample: {
        title: 'Traiter une situation d’évaluation sur les Casques bleus',
        statement: 'Comment expliquer qu’une opération onusienne réussisse dans un pays et échoue dans un autre ?',
        methodSteps: [
          'Comparer la clarté du mandat du Conseil de sécurité et les moyens fournis.',
          'Évaluer la coopération ou l’hostilité des parties locales et des grandes puissances.',
        ],
        conclusion: 'L’ONU n’est pas un État souverain au-dessus des nations : elle vaut surtout par la volonté collective de ses membres.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};

