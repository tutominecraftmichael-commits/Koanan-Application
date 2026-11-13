import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Thème 2 - Leçon 3 : L'accession de l'Algérie à l'indépendance » (format v2 : mini-leçons de 6 étapes).

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Statut juridique',
    stepTheme: 'blue',
    stepTitle: 'L’Algérie, colonie de peuplement puis trois départements français (1848)',
    paragraphText:
      '• Conquise par la France à partir de 1830, l’Algérie est d’abord une colonie de peuplement.\n• Le 9 décembre 1848, la France en fait juridiquement une partie intégrante du territoire national, divisée en 3 départements français : Alger, Oran et Constantine.\n• Placée sous l’autorité d’un Gouvernement général relevant du ministère de l’Intérieur (et non du ministère des Colonies — par exemple François Mitterrand fut ministre de l’Intérieur de juillet 1954 à février 1956), l’Algérie est considérée par Paris comme « la France ».',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q1',
      type: 'mcq',
      prompt: 'Quelle particularité administrative distinguait l’Algérie de la majorité des autres colonies françaises d’Afrique ?',
      options: [
        'Elle dépendait directement de l’ONU dès 1848',
        'Elle était une colonie de peuplement érigée en trois départements français (Alger, Oran, Constantine) rattachés au ministère de l’Intérieur',
        'Elle avait obtenu son indépendance dès 1900',
        'Elle était administrée conjointement par l’URSS et la France',
      ],
      correctAnswerIndex: 1,
      explanation: 'Dès le 9 décembre 1848, l’Algérie est intégrée au territoire français en trois départements relevant du ministère de l’Intérieur.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Société inégalitaire',
    stepTheme: 'violet',
    stepTitle: 'Deux communautés profondément inégales : Européens vs Musulmans',
    paragraphText:
      'À la veille de 1954, l’Algérie abrite une société duale et très inégalitaire :\n• Environ 1 million d’Européens (« Français d’Algérie » ou Pieds-Noirs, dont 80 % sont nés en Algérie) : ils occupent les fonctions administratives, industrielles et urbaines et pratiquent une agriculture moderne mécanisée sur les meilleures terres fertiles.\n• Plus de 8 millions d’Algériens musulmans autochtones : privés du partage réel du pouvoir, soumis longtemps à un statut d’exception, réduits à une agriculture traditionnelle pauvre, touchés par le sous-emploi et la précarité.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q2',
      type: 'mcq',
      prompt: 'Quel contraste démographique et économique caractérisait l’Algérie coloniale avant 1954 ?',
      options: [
        'Une minorité européenne d’environ 1 million d’habitants concentrait pouvoirs et meilleures terres face à plus de 8 millions de musulmans marginalisés',
        'Les Algériens musulmans détenaient 90 % des postes de direction industrielle',
        'La population européenne représentait 8 millions d’habitants contre 1 million de musulmans',
        'Toutes les communautés jouissaient exactement des mêmes droits politiques dès 1848',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le système colonial réservait les fonctions dirigeantes, les droits politiques pleins et les meilleures terres à la minorité européenne.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Blocage politique',
    stepTheme: 'violet',
    stepTitle: 'Le refus des réformes égalitaires et le réveil des consciences',
    paragraphText:
      'Malgré la participation massive des Algériens aux combats de la Première Guerre mondiale (1914-1918) et de la Seconde Guerre mondiale, aucune réforme majeure ne leur accorde l’égalité civique.\nLa minorité européenne d’Algérie bloque systématiquement tout projet d’égalité entre Européens et Musulmans, ce qui éveille une conscience nationale chez les commerçants, ouvriers, intellectuels et anciens combattants.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q3',
      type: 'mcq',
      prompt: 'Pourquoi la question de l’égalité politique a-t-elle bloqué toute évolution pacifique en Algérie avant 1954 ?',
      options: [
        'Parce que les gouvernements musulmans s’opposaient à la scolarisation',
        'Parce que la minorité française d’Algérie refusait toute réforme accordant l’égalité de droits aux musulmans pourtant majoritaires',
        'Parce que la France avait déjà quitté l’Algérie en 1918',
        'Parce que le Sahara n’appartenait pas au continent africain',
      ],
      correctAnswerIndex: 1,
      explanation: 'Craignant de perdre sa suprématie politique et foncière face aux 8 millions de musulmans, le lobby colonial bloqua toute réforme égalitaire.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège d’examen',
    stepTheme: 'orange',
    stepTitle: 'Colonie de peuplement / départements français vs colonie d’exploitation',
    paragraphText:
      'Attention à la question piège classique (« L’Algérie est une colonie d’exploitation : Vrai ou Faux ? ») :\n• La réponse attendue est FAUX : l’Algérie était une colonie de peuplement (environ 1 million d’Européens installés durablement avec leurs familles), intégrée juridiquement en 3 départements français en 1848.\nC’est précisément cet enracinement européen qui rendra l’indépendance beaucoup plus longue et sanglante qu’en Afrique subsaharienne.',
    konanTip: 'Afrique noire AOF = colonies d’exploitation/administration ; Algérie = colonie de peuplement et 3 départements français.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q4',
      type: 'mcq',
      prompt: 'Pourquoi la décolonisation de l’Algérie a-t-elle été beaucoup plus difficile et violente que celle de la Côte d’Ivoire ou du Sénégal ?',
      options: [
        'Parce que l’Algérie n’avait aucune richesse agricole ni pétrolière',
        'Parce qu’elle était une colonie de peuplement (1 million d’Européens) et trois départements intégrés juridiquement à la France',
        'Parce que l’Algérie n’avait aucun mouvement nationaliste avant 1960',
        'Parce que la Côte d’Ivoire a mené une guerre armée de huit ans contre la France',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le statut de départements français et la présence d’un million d’Européens expliquent le refus obstiné de Paris de céder sans guerre.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Enjeu stratégique',
    stepTheme: 'slate',
    stepTitle: 'Pourquoi Paris tenait-il tant à garder l’Algérie ?',
    paragraphText:
      'Outre son peuplement européen, l’Algérie représentait pour la France un atout stratégique méditerranéen (base navale de Mers el-Kébir), un symbole de grandeur impériale après la perte de l’Indochine (1954), et un enjeu énergétique majeur après la découverte de pétrole et de gaz au Sahara.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q5',
      type: 'mcq',
      prompt: 'Quel enjeu économique découvert dans le Sud algérien renforce encore l’attachement de Paris à l’Algérie dans les années 1950 ?',
      options: [
        'Les gisements de pétrole et de gaz naturel du Sahara',
        'Les plantations de cacao d’Oran',
        'Les mines d’étain d’Alger',
        'Les forêts de teck de Constantine',
      ],
      correctAnswerIndex: 0,
      explanation: 'Les ressources pétrolières et gazières du Sahara constituent un enjeu clé jusque dans les négociations des accords d’Évian.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Introduction BAC',
    stepTheme: 'green',
    stepTitle: 'Poser la problématique sur l’Algérie coloniale',
    paragraphText:
      'En introduction d’un devoir sur l’Algérie, montre toujours le contraste entre :\n• le mythe juridique (« l’Algérie, c’est la France ») ;\n• et la réalité coloniale vécue par 8 millions de musulmans privés d’égalité.\nCe contraste explique la naissance puis la radicalisation armée du nationalisme algérien.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q6',
      type: 'mcq',
      prompt: 'À quelle date l’Algérie devient-elle officiellement composée de trois départements français ?',
      options: [
        'Le 9 décembre 1848',
        'Le 1er novembre 1954',
        'Le 20 septembre 1947',
        'Le 3 juillet 1962',
      ],
      correctAnswerIndex: 0,
      explanation: 'La Constitution de la IIe République française érige le 9 décembre 1848 l’Algérie en trois départements (Alger, Oran, Constantine).',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Les 3 courants',
    stepTheme: 'violet',
    stepTitle: 'Les trois tendances du nationalisme algérien (1927-1939)',
    paragraphText:
      'Dès l’entre-deux-guerres, le mouvement national algérien se structure en trois grandes tendances aux objectifs différents.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Les trois courants historiques du nationalisme algérien',
      caption: 'Des réformistes partisans de l’égalité aux indépendantistes révolutionnaires.',
      tableData: {
        headers: ['Tendance', 'Leader et mouvements', 'Programme / Devise'],
        rows: [
          ['Traditionnelle / réformiste religieuse', 'Abdelhamid Ben Badis — Association des Ouléma (1931)', 'Rejet de l’assimilation, défense de l’identité arabo-islamique : « L’Islam est ma religion, l’Arabe est ma langue et l’Algérie est ma patrie »'],
          ['Révolutionnaire et populiste', 'Messali Hadj — Étoile nord-africaine (1927), PPA (1937/1939), puis MTLD (1946)', 'Revendique clairement l’indépendance nationale d’une Algérie arabe et musulmane'],
          ['Modérée / réformiste laïque', 'Ferhat Abbas — Fédération des Élus indigènes (1927), Manifeste (1943), puis UDMA (1946)', 'Prône d’abord l’assimilation et l’égalité civique, puis une République algérienne autonome associée à la France'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02_q1',
      type: 'mcq',
      prompt: 'À quel dirigeant et mouvement appartient la devise « L’Islam est ma religion, l’Arabe est ma langue et l’Algérie est ma patrie » ?',
      options: [
        'Ferhat Abbas et la Fédération des Élus indigènes',
        'Abdelhamid Ben Badis et l’Association des Ouléma (1931)',
        'Messali Hadj et le MTLD',
        'Louis Joxe et le gouvernement français',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le cheikh Abdelhamid Ben Badis fonde en 1931 l’Association des Ouléma pour défendre l’identité arabo-islamique contre l’assimilation.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: '8 mai 1945',
    stepTheme: 'violet',
    stepTitle: 'Les massacres de Sétif (8 mai 1945) et les partis d’après-guerre',
    paragraphText:
      '• Le 8 mai 1945 (jour de la victoire alliée en Europe), des manifestations nationalistes tournent aux émeutes à Sétif et dans le Constantinois : une centaine d’Européens sont tués, suivis d’une répression terrible (8 000 Algériens tués selon l’administration coloniale, 15 000 selon les nationalistes).\n• En 1946, Ferhat Abbas crée l’UDMA (République autonome dans l’Union française) tandis que Messali Hadj fonde le MTLD (indépendance complète).',
    keyRule: 'Sétif (8 mai 1945) marque la rupture psychologique irréversible entre musulmans algériens et administration coloniale.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02_q2',
      type: 'mcq',
      prompt: 'Quel événement tragique du 8 mai 1945 radicalise profondément le nationalisme algérien au moment même de la victoire alliée en Europe ?',
      options: [
        'Les émeutes de Sétif et leur répression sanglante faisant des milliers de victimes algériennes',
        'La signature des accords d’Évian',
        'Le discours de De Gaulle à Alger',
        'La création de la CEDEAO',
      ],
      correctAnswerIndex: 0,
      explanation: 'Les manifestations réprimées dans le sang à Sétif, Guelma et Kherrata le 8 mai 1945 convainquent de nombreux jeunes Algériens que l’émancipation pacifique est illusoire.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Impasse de 1947-1954',
    stepTheme: 'violet',
    stepTitle: 'L’échec du statut de 1947 et la naissance du CRUA (mars 1954)',
    paragraphText:
      '• Le 20 septembre 1947, Paris vote un nouveau statut d’Algérie doté d’une assemblée de 120 députés élus en deux collèges inégaux (60 pour 1 million d’Européens, 60 pour 8 millions de musulmans).\n• Mal accueilli des deux côtés et vidé de sa portée par le trucage des élections, ce statut reste inappliqué.\n• Devant l’impasse et la division du MTLD, de jeunes cadres révolutionnaires (Krim Belkacem, Mustapha Ben Boulaïd, Larbi Ben M’Hidi...) créent en mars 1954 le CRUA (Comité révolutionnaire d’unité et d’action) pour préparer la lutte armée.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02_q3',
      type: 'mcq',
      prompt: 'Pourquoi la création du CRUA en mars 1954 représente-t-elle un tournant décisif ?',
      options: [
        'Il accepte l’assimilation totale dans la IVe République',
        'Il regroupe des militants décidés à dépasser les divisions du MTLD pour déclencher l’insurrection armée',
        'Il interdit toute grève ouvrière à Alger',
        'Il est fondé par les colons français d’Oran',
      ],
      correctAnswerIndex: 1,
      explanation: 'Face à l’échec de la voie électorale et aux querelles du MTLD, le CRUA décide de passer à l’action armée directe.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Nuance sur les leaders',
    stepTheme: 'orange',
    stepTitle: 'Distinguer l’évolution de Ferhat Abbas, les Ouléma et Messali Hadj',
    paragraphText:
      '• Ferhat Abbas n’a pas toujours été indépendantiste : en 1927-1936 il réclame l’assimilation et l’égalité ; après l’échec de ses espoirs, son Manifeste de 1943 puis l’UDMA (1946) demandent une République autonome associée à la France, avant qu’il ne rejoigne le FLN en 1956.\n• Les Ouléma de Ben Badis défendent avant tout l’identité religieuse, culturelle et linguistique (refus de l’assimilation, sans programme révolutionnaire armé au départ).\n• Messali Hadj (Étoile nord-africaine 1927, PPA, MTLD) est le pionnier de la revendication indépendantiste.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02_q4',
      type: 'mcq',
      prompt: 'Quel dirigeant algérien a évolué de la revendication d’assimilation-égalité (1927) au Manifeste du peuple algérien (1943) et à l’UDMA (1946) ?',
      options: [
        'Ferhat Abbas',
        'Krim Belkacem',
        'Ahmed Ben Bella',
        'Abdelhamid Ben Badis',
      ],
      correctAnswerIndex: 0,
      explanation: 'Ferhat Abbas incarne la tendance modérée/réformiste légaliste qui finit par rallier l’idée nationale puis le FLN.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Le poids de 1943',
    stepTheme: 'slate',
    stepTitle: 'Le Manifeste du peuple algérien (10 février 1943)',
    paragraphText:
      'S’appuyant sur la Charte de l’Atlantique (Roosevelt, 1941), Ferhat Abbas rédige le 10 février 1943 le Manifeste du peuple algérien : il condamne la politique d’assimilation « appliquée aux uns et refusée aux autres », exige le droit des peuples à disposer d’eux-mêmes, une constitution algérienne, l’égalité, une réforme agraire et la reconnaissance de la langue arabe à égalité avec le français.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02_q5',
      type: 'mcq',
      prompt: 'Sur quel texte international de 1941 Ferhat Abbas s’appuie-t-il dans son Manifeste du peuple algérien de février 1943 ?',
      options: [
        'Le traité de Varsovie',
        'La déclaration du président Roosevelt dans la Charte de l’Atlantique sur les droits des peuples',
        'Les accords de Dayton',
        'Le plan Marshall',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le Manifeste cite explicitement les engagements du président américain Roosevelt (Charte de l’Atlantique) en faveur du droit des peuples à disposer d’eux-mêmes.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Repères 1927-1954',
    stepTheme: 'green',
    stepTitle: 'Chronologie accélérée avant l’insurrection',
    paragraphText:
      '1927 : Étoile nord-africaine & Élus indigènes -> 1931 : Ouléma -> 1943 : Manifeste de Ferhat Abbas -> 8 mai 1945 : Sétif -> 1946 : UDMA et MTLD -> 20 septembre 1947 : Statut inappliqué -> mars 1954 : CRUA.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02_q6',
      type: 'mcq',
      prompt: 'Quel mouvement est créé par Messali Hadj en 1946 pour réclamer l’indépendance d’une Algérie arabe et musulmane ?',
      options: [
        'L’UDMA',
        'Le MTLD (Mouvement pour le triomphe des libertés démocratiques)',
        'L’OAS',
        'La FEANF',
      ],
      correctAnswerIndex: 1,
      explanation: 'Messali Hadj fonde le MTLD en 1946, tandis que Ferhat Abbas crée au même moment l’UDMA.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: '1er novembre 1954',
    stepTheme: 'blue',
    stepTitle: 'Du CRUA au FLN/ALN et la « Toussaint rouge »',
    paragraphText:
      '• Le CRUA se transforme en Front de libération nationale (FLN), doté d’une branche militaire : l’Armée de libération nationale (ALN).\n• Objectifs proclamés : restaurer un État algérien souverain, démocratique et social dans le cadre des principes islamiques.\n• Dans la nuit du 31 octobre au 1er novembre 1954 (« Toussaint rouge »), une vague d’attentats et de sabotages frappe installations militaires, communications et bâtiments publics en Algérie (au moins 10 morts côté français) : la guerre d’Algérie commence.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03_q1',
      type: 'mcq',
      prompt: 'Sous quel nom historique connaît-on la vague d’attentats déclenchée par le FLN dans la nuit du 31 octobre au 1er novembre 1954 ?',
      options: [
        'La semaine des barricades',
        'La Toussaint rouge',
        'Le coup de Prague',
        'L’opération Tempête du désert',
      ],
      correctAnswerIndex: 1,
      explanation: 'La « Toussaint rouge » du 1er novembre 1954 marque le début officiel de l’insurrection et de la guerre d’Algérie.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Escalade (1955-1957)',
    stepTheme: 'violet',
    stepTitle: 'Terrorisme urbain, maquis et répression militaire française',
    paragraphText:
      '• Traumatisée par sa défaite récente en Indochine (1954), la France qualifie l’insurrection de « rébellion/sédition » et envoie des renforts militaires massifs (jusqu’aux appelés du contingent).\n• Dès 1956, le FLN intensifie la lutte armée (guérilla dans les maquis, ravitaillement depuis le Maroc, la Tunisie et l’Égypte, attentats urbains notamment lors de la bataille d’Alger).\n• L’armée française riposte par le quadrillage des quartiers, le regroupement des populations rurales, les barrages frontaliers et le recours à la torture.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03_q2',
      type: 'mcq',
      prompt: 'De quels pays voisins et alliés les maquisards de l’ALN reçoivent-ils principalement armes et soutien logistique à partir de 1956 ?',
      options: [
        'Du Maroc, de la Tunisie et de l’Égypte',
        'Du Brésil et du Japon',
        'De la Belgique et du Portugal',
        'De l’Afrique du Sud',
      ],
      correctAnswerIndex: 0,
      explanation: 'La Tunisie et le Maroc (indépendants en 1956) servent de bases arrière et de voies de ravitaillement, avec le soutien diplomatique et matériel de l’Égypte nassérienne.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Internationalisation',
    stepTheme: 'violet',
    stepTitle: 'Le refus français face à la pression de l’ONU et des Non-alignés',
    paragraphText:
      '• La France refuse toute intervention de l’ONU sous prétexte que l’Algérie relève de ses affaires intérieures (départements français).\n• Cependant, le FLN mène une intense offensive diplomatique : les pays du mouvement des Non-alignés (depuis Bandung 1955), les États arabes et l’ONU inscrivent progressivement la question algérienne à l’ordre du jour international, isolant diplomatiquement Paris.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03_q3',
      type: 'mcq',
      prompt: 'Quel argument juridique Paris invoquait-il pour refuser l’intervention de l’ONU dans le conflit algérien ?',
      options: [
        'La France n’était pas membre de l’ONU en 1956',
        'L’Algérie étant divisée en départements français, le conflit relevait selon Paris des affaires intérieures françaises',
        'Le FLN avait déjà accepté le statut de 1947',
        'Le Sahara était administré par les États-Unis',
      ],
      correctAnswerIndex: 1,
      explanation: 'En s’appuyant sur le principe de non-ingérence (article 2 de la Charte) et le statut départemental de 1848, Paris refusait l’internationalisation.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Crise du 13 mai 1958',
    stepTheme: 'violet',
    stepTitle: 'Émeutes du 13 mai 1958 à Alger et chute de la IVe République',
    paragraphText:
      '• À Paris, l’enlisement algérien provoque une instabilité ministérielle chronique.\n• Le 13 mai 1958, craignant que le gouvernement français ne négocie avec le FLN, les Français d’Algérie et des chefs militaires forment un Comité de salut public à Alger pour défendre l’« Algérie française ».\n• Le général Raoul Salan, commandant en chef en Algérie, fait appel au général Charles de Gaulle pour former un gouvernement fort capable de trancher la crise : la IVe République s’effondre.',
    keyRule: '13 mai 1958 : coup de force d’Alger (Comité de salut public, général Salan) -> rappel au pouvoir de De Gaulle (1er juin 1958).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03_q4',
      type: 'mcq',
      prompt: 'Quelle crise politique majeure déclenche le retour au pouvoir du général Charles de Gaulle en mai-juin 1958 ?',
      options: [
        'Les émeutes du 13 mai 1958 à Alger et l’appel de l’armée (général Salan) en pleine impasse de la guerre d’Algérie',
        'La mort de Staline en URSS',
        'La signature des accords de Dayton',
        'Le rejet du plan Marshall par la France',
      ],
      correctAnswerIndex: 0,
      explanation: 'Incapable de résoudre la guerre d’Algérie et menacée par le coup de force militaire d’Alger du 13 mai 1958, la IVe République cède la place à De Gaulle.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège d’examen',
    stepTheme: 'orange',
    stepTitle: 'Bien distinguer FLN (politique) et ALN (branche armée)',
    paragraphText:
      '• Le FLN (Front de libération nationale) est l’organisation politique et diplomatique dirigeante issue du CRUA (et qui forme le GPRA en 1958).\n• L’ALN (Armée de libération nationale) est sa branche armée combattant dans les maquis (wilayas) et aux frontières.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03_q5',
      type: 'mcq',
      prompt: 'Comment s’appelait la branche militaire du Front de libération nationale (FLN) pendant la guerre d’Algérie ?',
      options: [
        'L’OAS (Organisation de l’armée secrète)',
        'L’ALN (Armée de libération nationale)',
        'Le MTLD',
        'La FCA',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le FLN mène le combat politique tandis que sa branche armée, l’ALN, mène la lutte militaire sur le terrain.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Contexte impérial',
    stepTheme: 'slate',
    stepTitle: 'Le traumatisme de l’Indochine (1954) pèse sur la réaction française',
    paragraphText:
      'À peine six mois après la chute de Diên Biên Phu (7 mai 1954) et les accords de Genève mettant fin à l’Indochine française, la Toussaint rouge éclate en Algérie.\nBeaucoup de responsables et d’officiers français refusent de subir une nouvelle humiliation coloniale : c’est l’une des causes de la dureté extrême du conflit.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03_q6',
      type: 'mcq',
      prompt: 'Quel événement militaire français survenu quelques mois avant novembre 1954 durcit la réaction de Paris face au soulèvement algérien ?',
      options: [
        'La perte de l’Indochine après la défaite de Diên Biên Phu (mai 1954)',
        'La crise des fusées de Cuba (1962)',
        'La création de la CEI (1991)',
        'La guerre du Golfe (1991)',
      ],
      correctAnswerIndex: 0,
      explanation: 'Venant tout juste de perdre l’Indochine au printemps-été 1954, l’armée et le gouvernement français veulent à tout prix conserver l’Algérie.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Retour de De Gaulle',
    stepTheme: 'blue',
    stepTitle: 'Du 1er juin 1958 au discours « Je vous ai compris ! » (4 juin 1958)',
    paragraphText:
      '• Investi chef du gouvernement le 1er juin 1958, Charles de Gaulle se rend à Alger dès le 4 juin 1958.\n• Devant une foule enthousiaste de Pieds-Noirs et de musulmans, il lance la phrase célèbre : « Je vous ai compris ! », formule volontairement ambiguë qui rassure provisoirement les partisans de l’Algérie française sans l’engager.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q1',
      type: 'mcq',
      prompt: 'Dans quel contexte le général de Gaulle prononce-t-il le 4 juin 1958 à Alger la célèbre phrase « Je vous ai compris ! » ?',
      options: [
        'Pour proclamer immédiatement l’indépendance de l’Algérie dès juin 1958',
        'Trois jours après son investiture, par une formule volontairement ambiguë laissant chaque camp espérer un moment',
        'Pour soutenir le coup d’État de l’OAS contre Paris',
        'Lors de la signature finale des accords d’Évian en 1962',
      ],
      correctAnswerIndex: 1,
      explanation: 'De Gaulle gagne du temps en 1958 par une formule habilement ambiguë avant d’orienter progressivement la France vers l’autodétermination.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Autodétermination',
    stepTheme: 'violet',
    stepTitle: 'Les trois options proposées par De Gaulle et la fermeté du GPRA',
    paragraphText:
      '• Réaliste, De Gaulle comprend que la France ne peut accorder une égalité sociale et politique totale à 9 millions de musulmans sans bouleverser l’équilibre de la République, ni gagner indéfiniment par la seule force.\n• Il propose en septembre 1959 l’autodétermination selon 3 voies :\n  1. l’indépendance totale (sécession) ;\n  2. la francisation / assimilation véritable avec la France ;\n  3. l’autonomie et l’association avec la France.\n• Le GPRA (Gouvernement provisoire de la République algérienne, formé par le FLN à l’automne 1958) exige d’emblée la première solution (indépendance pleine) et refuse tout compromis fédéral.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q2',
      type: 'mcq',
      prompt: 'Que désigne le GPRA constitué par le FLN à l’automne 1958 ?',
      options: [
        'Le Gouvernement provisoire de la République algérienne, chargé de représenter l’Algérie sur la scène diplomatique',
        'L’organisation clandestine des Français d’Algérie opposés à l’indépendance',
        'Le statut d’assemblée territoriale voté en 1947',
        'Le Comité de salut public du général Salan',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le GPRA (d’abord présidé par Ferhat Abbas puis par Benyoucef Benkhedda) donne au FLN une autorité gouvernementale face à la France et à l’international.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Révolte ultra & OAS',
    stepTheme: 'violet',
    stepTitle: 'Semaine des barricades (1960), OAS et putsch des généraux (1961)',
    paragraphText:
      'Se sentant trahis par l’évolution gaullienne vers l’indépendance, les partisans de l’Algérie française basculent dans la rébellion :\n• 24 au 31 janvier 1960 : semaine des barricades à Alger.\n• Création de l’OAS (Organisation de l’armée secrète) en 1961 : organisation clandestine multipliant les attentats en Algérie et en métropole contre le FLN et les partisans de la paix.\n• 22 avril 1961 : putsch militaire de généraux à Alger (menaçant Paris), qui échoue en quelques jours grâce à la fermeté de De Gaulle et au refus des appelés du contingent.',
    keyRule: 'Face au virage gaullien : Barricades (janv. 1960) -> OAS (attentats) -> Putsch militaire avorté (22 avril 1961).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q3',
      type: 'mcq',
      prompt: 'Qu’était l’OAS (Organisation de l’armée secrète) apparue en 1961 ?',
      options: [
        'La branche armée du FLN algérien',
        'Une organisation clandestine armée d’Européens d’Algérie et de militaires dissidents refusant l’indépendance et recourant aux attentats',
        'Une agence spécialisée de l’ONU basée à Genève',
        'Le parti politique de Ferhat Abbas',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’OAS s’oppose violemment à la politique d’indépendance de De Gaulle par des attentats et la terreur en 1961-1962.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Dilemme des Pieds-Noirs',
    stepTheme: 'orange',
    stepTitle: 'Comprendre la formule « la valise ou le cercueil »',
    paragraphText:
      '• La minorité européenne (1 million d’habitants) redoute de devenir minoritaire et menacée dans une Algérie gouvernée par le FLN.\n• L’expression dramatique « la valise ou le cercueil » (« partir ou mourir ») résume le sentiment de panique qui conduit près de 800 000 à 900 000 Pieds-Noirs à quitter précipitamment l’Algérie pour la France en 1962.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q4',
      type: 'mcq',
      prompt: 'À quelle angoisse et conséquence humaine renvoie l’expression « la valise ou le cercueil » en 1962 ?',
      options: [
        'Au choix douloureux ressenti par les Français d’Algérie (Pieds-Noirs), dont la quasi-totalité fuit vers la France à l’indépendance',
        'Au programme de réforme agraire proposé par Ben Badis en 1931',
        'Au référendum de 1958 en Guinée',
        'Aux conditions pétrolières du Sahara',
      ],
      correctAnswerIndex: 0,
      explanation: 'Craignant des représailles et refusant le nouvel État algérien (encouragés aussi par les violences finales de l’OAS), la grande majorité des Européens s’exile en France.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Échec du putsch',
    stepTheme: 'slate',
    stepTitle: 'Pourquoi le putsch militaire d’avril 1961 échoue-t-il ?',
    paragraphText:
      'Le 22 avril 1961, quatre généraux (Challe, Salan, Zeller, Jouhaud) tentent de prendre le pouvoir à Alger.\nDe Gaulle revêt son uniforme, dénonce à la télévision un « quarteron de généraux en retraite » et utilise les pleins pouvoirs (article 16) : les soldats du contingent, informés par transistor, refusent d’obéir aux putschistes et l’opinion française soutient massivement la paix négociée.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q5',
      type: 'mcq',
      prompt: 'Que révèle l’échec rapide du putsch des généraux en avril 1961 ?',
      options: [
        'L’opinion publique française et les soldats du contingent veulent désormais en finir avec la guerre et soutiennent la négociation',
        'L’ONU a envoyé des Casques bleus pour bombarder Alger',
        'Le FLN s’est allié aux généraux putschistes contre De Gaulle',
        'La France a renoncé à la Ve République en avril 1961',
      ],
      correctAnswerIndex: 0,
      explanation: 'Isolés politiquement, les généraux putschistes échouent faute de soutien de l’armée appelée et de la métropole.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Nuancer De Gaulle',
    stepTheme: 'green',
    stepTitle: 'Évaluer le rôle réel de De Gaulle (pour le sujet de dissertation/situation)',
    paragraphText:
      '• De Gaulle a eu le réalisme et le courage politique d’imposer la négociation face à son propre camp et à l’OAS.\n• Toutefois, il n’a pas « donné généreusement » l’indépendance sans cause : il y a été contraint par la résistance acharnée du peuple algérien (FLN/ALN), le coût militaire et moral de la guerre et la pression internationale.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q6',
      type: 'mcq',
      prompt: 'Quelle appréciation historique équilibrée résume le rôle du général de Gaulle dans l’indépendance algérienne ?',
      options: [
        'Il a engagé dès 1954 le retrait immédiat des troupes françaises sans combat',
        'Confronté à la détermination militaire et diplomatique du FLN et à l’usure du conflit, il a eu le réalisme d’imposer l’autodétermination malgré l’opposition de l’OAS',
        'Il s’est opposé jusqu’en 1965 à toute négociation avec le GPRA',
        'Il a cédé l’Algérie au Royaume-Uni en 1960',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le processus combine la pression décisive de la lutte algérienne et le réalisme politique de De Gaulle qui surmonte la résistance des ultras.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: '18 mars 1962',
    stepTheme: 'violet',
    stepTitle: 'Négociations secrètes et accords d’Évian (18 mars 1962)',
    paragraphText:
      '• Engagées à partir de 1961, les négociations aboutissent aux accords d’Évian le 18 mars 1962 (cessez-le-feu officiel le 19 mars).\n• Délégation française : Louis Joxe, Robert Buron et Jean de Broglie.\n• Délégation algérienne (GPRA) : Krim Belkacem, Lakhdar Bentobbal, Saad Dahlab et M’hamed Yazid.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q1',
      type: 'mcq',
      prompt: 'À quelle date sont signés les accords d’Évian mettant fin à la guerre d’Algérie ?',
      options: [
        'Le 1er novembre 1954',
        'Le 22 avril 1961',
        'Le 18 mars 1962',
        'Le 3 juillet 1962',
      ],
      correctAnswerIndex: 2,
      explanation: 'Les accords d’Évian sont signés le 18 mars 1962, instaurant le cessez-le-feu dès le lendemain 19 mars.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Clauses des accords',
    stepTheme: 'violet',
    stepTitle: 'Indépendance, intégrité du Sahara et coopération franco-algérienne',
    paragraphText:
      'Par les accords d’Évian, la France :\n• reconnaît le principe de l’indépendance de l’Algérie et l’intégrité de son territoire, y compris le Sahara (exigence absolue du GPRA) ;\n• s’engage à évacuer progressivement ses forces militaires tout en maintenant pendant trois ans son aide financière au niveau de 1961 ;\n• obtient des garanties de coopération dans le domaine du pétrole saharien et pour les droits des Européens restant en Algérie.',
    keyRule: 'Évian : cessez-le-feu (19 mars 1962) + indépendance avec Sahara intégral + coopération pétrolière et financière sur 3 ans.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q2',
      type: 'mcq',
      prompt: 'Quelle question territoriale cruciale est tranchée en faveur du FLN/GPRA dans les accords d’Évian ?',
      options: [
        'La séparation définitive du Sahara qui resterait département français',
        'La reconnaissance de l’intégrité territoriale de l’Algérie incluant le Sahara',
        'Le rattachement d’Oran à l’Espagne',
        'La tutelle permanente de l’ONU sur Alger',
      ],
      correctAnswerIndex: 1,
      explanation: 'Après avoir tenté de détacher le Sahara pétrolier, Paris reconnaît à Évian la pleine souveraineté algérienne sur l’ensemble du territoire, Sahara compris.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Référendums & 3 juillet',
    stepTheme: 'violet',
    stepTitle: 'Double référendum (8 avril & 1er juillet) et indépendance (3 juillet 1962)',
    paragraphText:
      '• 8 avril 1962 : par référendum en métropole, les Français approuvent massivement les accords d’Évian.\n• 1er juillet 1962 : lors du référendum d’autodétermination en Algérie, plus de 90 % des votants répondent OUI à l’indépendance.\n• 3 juillet 1962 : la France reconnaît et l’indépendance est proclamée (célébrée officiellement le 5 juillet), avec Ahmed Ben Bella comme premier président de la République algérienne démocratique et populaire.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Chronologie de la guerre d’Algérie et de l’indépendance (1954-1962)',
      caption: 'Huit années de lutte armée jusqu’à la souveraineté proclamée en juillet 1962.',
      tableData: {
        headers: ['Date', 'Événement majeur', 'Acteur / Signification'],
        rows: [
          ['1er nov. 1954', 'Toussaint rouge', 'Déclenchement de l’insurrection par le FLN / ALN'],
          ['13 mai 1958', 'Émeutes d’Alger', 'Comité de salut public (Salan) -> retour de De Gaulle (1er juin)'],
          ['4 juin 1958', 'Discours d’Alger', '« Algériens, je vous ai compris ! » ; création du GPRA à l’automne'],
          ['1960-1961', 'Barricades, OAS et putsch (22 avr. 1961)', 'Tentatives échouées des partisans de l’Algérie française'],
          ['18 mars 1962', 'Accords d’Évian', 'Cessez-le-feu et conditions de l’indépendance (avec le Sahara)'],
          ['3 juillet 1962', 'Proclamation de l’indépendance', 'Suite au référendum du 1er juillet ; Ahmed Ben Bella 1er président'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q3',
      type: 'mcq',
      prompt: 'Qui devient le premier président de l’Algérie indépendante en 1962-1963 ?',
      options: [
        'Ahmed Ben Bella',
        'Messali Hadj',
        'Raoul Salan',
        'Kwame Nkrumah',
      ],
      correctAnswerIndex: 0,
      explanation: 'Chef historique du FLN longtemps emprisonné en France jusqu’en 1962, Ahmed Ben Bella devient le premier dirigeant présidentiel de l’Algérie indépendante.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Bilan humain',
    stepTheme: 'orange',
    stepTitle: 'Mesurer le coût humain de cette indépendance arrachée',
    paragraphText:
      '• Contrairement aux indépendances négociées pacifiquement en Afrique subsaharienne francophone, l’indépendance de l’Algérie a coûté huit ans de guerre (1954-1962) et environ un million de morts côté algérien (selon le bilan officiel retenu par le programme), ainsi que des dizaines de milliers de victimes françaises et l’exode des Pieds-Noirs et de nombreux harkis.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q4',
      type: 'mcq',
      prompt: 'Quelle caractéristique distingue fondamentalement l’accession de l’Algérie à l’indépendance (1962) de celle de la Côte d’Ivoire (1960) ?',
      options: [
        'L’Algérie a arraché son indépendance au terme de huit ans de lutte armée meurtrière, alors que la Côte d’Ivoire l’a obtenue par voie politique et négociée',
        'La Côte d’Ivoire a mené une guerre nucléaire contre la France',
        'L’Algérie est devenue indépendante en 1947 sans aucun conflit',
        'La France n’a jamais occupé l’Algérie',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’Algérie illustre le modèle de la décolonisation violente par guerre de libération nationale, face au modèle négocié de la Côte d’Ivoire.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Négociateurs d’Évian',
    stepTheme: 'slate',
    stepTitle: 'Retenir les noms des négociateurs à Évian',
    paragraphText:
      'Dans les sujets de composition ou de vérification de connaissances :\n• Côté français : Louis Joxe (ministre chargé des Affaires algériennes), Robert Buron et Jean de Broglie.\n• Côté algérien (GPRA) : Krim Belkacem (chef de délégation et cofondateur du CRUA/FLN), Lakhdar Bentobbal, Saad Dahlab et M’hamed Yazid.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q5',
      type: 'mcq',
      prompt: 'Quel chef historique du CRUA et du FLN a conduit la délégation algérienne lors des négociations des accords d’Évian ?',
      options: [
        'Krim Belkacem',
        'Louis Joxe',
        'Robert Buron',
        'Sékou Touré',
      ],
      correctAnswerIndex: 0,
      explanation: 'Krim Belkacem dirigea la délégation du GPRA face à Louis Joxe lors des pourparlers d’Évian.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Les 2 référendums',
    stepTheme: 'green',
    stepTitle: 'Ne pas confondre le scrutin du 8 avril et celui du 1er juillet 1962',
    paragraphText:
      '• 8 avril 1962 : référendum en France métropolitaine pour ratifier les accords d’Évian.\n• 1er juillet 1962 : référendum d’autodétermination en Algérie sur l’indépendance (« OUI » à plus de 90 %), suivi de la reconnaissance le 3 juillet 1962.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q6',
      type: 'mcq',
      prompt: 'Quel scrutin s’est tenu en Algérie le 1er juillet 1962, deux jours avant la proclamation de l’indépendance ?',
      options: [
        'Le référendum d’autodétermination approuvant l’indépendance à plus de 90 %',
        'Le vote sur l’entrée de l’Algérie dans la Communauté franco-africaine',
        'L’élection de l’assemblée territoriale de 120 députés de 1947',
        'Le référendum français sur la Ve République',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le 1er juillet 1962, le peuple algérien vote massivement OUI à l’indépendance lors du référendum d’autodétermination.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Activité dates',
    stepTheme: 'green',
    stepTitle: 'Associer les 6 dates clés de l’Algérie (1945-1962)',
    paragraphText:
      'Vérifie instantanément ces 6 correspondances incontournables au BAC :\n• 8 mai 1945 : émeutes et massacres de Sétif.\n• 20 septembre 1947 : statut de l’Algérie (jamais appliqué).\n• 1er novembre 1954 : début de la guerre d’Algérie (Toussaint rouge).\n• 4 juin 1958 : discours de De Gaulle à Alger (« Je vous ai compris ! »).\n• 18 mars 1962 : signature des accords d’Évian.\n• 3 juillet 1962 : proclamation de l’indépendance de l’Algérie.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06_q1',
      type: 'mcq',
      prompt: 'À quel événement précis correspond la date du 20 septembre 1947 dans l’histoire de l’Algérie ?',
      options: [
        'L’occupation d’Alger par la France',
        'Le vote du Statut de l’Algérie créant une assemblée de 120 députés en deux collèges, resté inappliqué',
        'La semaine des barricades à Alger',
        'L’arrestation de Ben Bella',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le statut du 20 septembre 1947 tente tardivement de désamorcer la crise après Sétif, mais déçoit les nationalistes comme les Pieds-Noirs.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Commentaire de texte',
    stepTheme: 'slate',
    stepTitle: 'Expliquer l’extrait du Manifeste de Ferhat Abbas (1943)',
    paragraphText:
      'Dans le texte du 10 février 1943, Ferhat Abbas dénonce la politique d’« assimilation appliquée automatiquement aux uns et refusée aux autres » : les Européens bénéficient de la citoyenneté et des droits complets, alors que la grande majorité des musulmans est maintenue dans l’infériorité juridique et politique.\nPortée historique : ce texte marque la rupture des modérés avec l’illusion de l’assimilation et pose les bases d’une nation algérienne souveraine.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06_q2',
      type: 'mcq',
      prompt: 'Quelle est la portée historique majeure du Manifeste du peuple algérien rédigé par Ferhat Abbas en février 1943 ?',
      options: [
        'Il marque l’abandon de l’espoir d’assimilation par les modérés et formule l’exigence du droit à l’autodétermination et d’une constitution algérienne',
        'Il accepte l’exclusion permanente des musulmans du gouvernement',
        'Il déclenche immédiatement le putsch des généraux',
        'Il proclame la langue française comme unique langue de l’Algérie',
      ],
      correctAnswerIndex: 0,
      explanation: 'En 1943, même le modéré Ferhat Abbas constate l’échec de l’assimilation et réclame une constitution propre et l’abolition du système colonial.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Dissertation BAC',
    stepTheme: 'green',
    stepTitle: 'Structurer le sujet : « L’Algérie de 1954 à 1962 »',
    paragraphText:
      'Plan clair en deux ou trois parties chronologiques :\n1. L’insurrection du FLN/ALN et l’enlisement de la IVe République (1954-1958 : Toussaint rouge, terrorisme et répression, crise du 13 mai 1958).\n2. Les hésitations et le tournant gaullien vers l’autodétermination face à la résistance des ultras (1958-1961 : GPRA, Barricades, OAS, putsch de 1961).\n3. L’issue négociée des accords d’Évian et la proclamation de l’indépendance (mars-juillet 1962).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06_q3',
      type: 'mcq',
      prompt: 'Pour traiter le sujet de dissertation « L’Algérie de 1954 à 1962 », quel événement constitue la charnière naturelle entre la phase IVe République et la phase gaullienne ?',
      options: [
        'Les émeutes de Sétif du 8 mai 1945',
        'La crise d’Alger du 13 mai 1958 et le retour de Charles de Gaulle au pouvoir',
        'La fondation de l’Association des Ouléma en 1931',
        'La signature des accords de Paris sur le Viêtnam',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le 13 mai 1958 fait chuter la IVe République et ouvre la phase décisive conduite par Charles de Gaulle jusqu’en 1962.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Vrai / Faux Activité 1',
    stepTheme: 'orange',
    stepTitle: 'Déjouer les affirmations fausses sur le statut colonial de l’Algérie',
    paragraphText:
      'Vérifions les pièges classiques :\n• « Les autochtones musulmans étaient bien représentés au Conseil de Gouvernement » -> FAUX (pouvoir confisqué par la minorité française).\n• « Le Conseil des Ouléma luttait uniquement pour l’autonomie laïque à l’occidentale » -> FAUX (Ben Badis défendait d’abord l’Islam, l’arabe et le rejet de l’assimilation).\n• « Les Français d’Algérie jouissaient de privilèges et cultivaient les meilleures terres » -> VRAI.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06_q4',
      type: 'mcq',
      prompt: 'Parmi ces affirmations sur la société algérienne avant 1954, laquelle est VRAIE ?',
      options: [
        'Les autochtones musulmans cultivaient généralement les terres les plus pauvres et étaient sous-représentés politiquement',
        'Les musulmans occupaient la majorité des postes du Gouvernement général d’Alger',
        'Les Français d’Algérie ne bénéficiaient d’aucun privilège économique',
        'L’Algérie était une simple colonie d’exploitation sans population européenne installée',
      ],
      correctAnswerIndex: 0,
      explanation: 'La minorité européenne monopolisait les terres riches (Mitidja, plaines côtières) et les postes administratifs, laissant aux musulmans les terres ingrates.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Situation d’évaluation',
    stepTheme: 'slate',
    stepTitle: 'Arbitrer le débat : détermination du peuple algérien vs rôle de De Gaulle',
    paragraphText:
      'Situation : Une élève pense que les Algériens ont eu besoin de l’aide de De Gaulle ; son grand frère affirme que « De Gaulle a été contraint par la détermination du peuple algérien ».\nExplication attendue : sans l’insurrection tenace du FLN/ALN (1954-1962), les sacrifices de la population et l’action diplomatique du GPRA auprès de l’ONU et des Non-alignés, la France n’aurait jamais accepté l’indépendance. De Gaulle a pris acte de cette impossibilité de victoire militaire française pour négocier une sortie réaliste à Évian.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06_q5',
      type: 'mcq',
      prompt: 'Que signifie la conclusion « En réalité, le général de Gaulle a été contraint par la détermination du peuple algérien » ?',
      options: [
        'C’est la résistance armée et diplomatique opiniâtre du FLN et des Algériens qui a rendu le maintien de l’Algérie française impossible et imposé la négociation',
        'De Gaulle était secrètement le fondateur du FLN dès 1954',
        'L’armée française avait totalement remporté la guerre militaire dès 1956 et choisi de partir sans raison',
        'Le FLN a été dissous par l’OAS avant les accords d’Évian',
      ],
      correctAnswerIndex: 0,
      explanation: 'Bien que l’armée française ait remporté des succès tactiques, elle n’a pu briser ni la détermination politique du peuple algérien ni le soutien international au FLN.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Bilan comparé',
    stepTheme: 'green',
    stepTitle: 'Relier l’Algérie (Leçon 3) à la Côte d’Ivoire (Leçon 2) au BAC',
    paragraphText:
      'Les leçons 2 et 3 du Thème 2 illustrent deux voies opposées de la décolonisation africaine :\n• Côte d’Ivoire (Leçon 2) : décolonisation pacifique, progressive et négociée (loi Houphouët-Boigny 1946 -> Loi-cadre 1956 -> Communauté 1958 -> indépendance le 7 août 1960).\n• Algérie (Leçon 3) : colonie de peuplement et départements français -> blocage des réformes -> lutte armée sanglante de 8 ans (1954-1962) -> accords d’Évian et indépendance arrachée en juillet 1962.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06_q6',
      type: 'mcq',
      prompt: 'Quel enseignement comparatif relie directement la leçon sur la Côte d’Ivoire et la leçon sur l’Algérie ?',
      options: [
        'Toutes deux montrent une guerre armée de huit ans identique',
        'Elles illustrent deux modalités contrastées de décolonisation : voie politique négociée en Côte d’Ivoire (1960) contre indépendance arrachée par la guerre en Algérie (1962)',
        'La Côte d’Ivoire était composée de trois départements français depuis 1848',
        'L’Algérie a adhéré à la Communauté franco-africaine en 1958',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le programme de Terminale oppose volontairement la décolonisation négociée d’Afrique subsaharienne et la guerre de libération nationale algérienne.',
    },
  },
];

export const HIST_TLE_T2_L03_ACCESSION_ALGERIE_INDEPENDANCE: CurriculumChapter = {
  id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance',
  subjectId: 'histoire_geo',
  gradeLevel: 'terminale_c',
  alsoForGrades: ['terminale_d', 'terminale_a1', 'terminale_a2'],
  order: 6,
  title: "Thème 2, leçon 3 : L'accession de l'Algérie à l'indépendance",
  summary:
    "Statut colonial spécifique de l'Algérie (1830-1954), tendances et radicalisation du nationalisme, guerre d'Algérie (1954-1962), politique gaullienne, accords d'Évian et indépendance.",
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'Tle_H6-Laccession_de_lAlgerie_a_lindependance.pdf',
  points: [
    {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p01',
      order: 1,
      title: "L'Algérie française de 1830 à 1954 : statut et inégalités",
      summary: "Comprendre le statut unique de colonie de peuplement divisée en 3 départements français et la société coloniale inégalitaire.",
      conceptExplanation:
        "Conquise dès 1830 et érigée le 9 décembre 1848 en trois départements français (Alger, Oran, Constantine) rattachés au ministère de l'Intérieur, l'Algérie abrite environ 1 million d'Européens face à plus de 8 millions de musulmans privés d'égalité politique, cantonnés aux terres pauvres et soumis au blocage de toute réforme égalitaire.",
      keyRule: "Algérie = colonie de peuplement et 3 départements français (1848), d'où une crispation extrême contre la décolonisation.",
      formulas: [],
      workedExample: {
        title: 'Expliquer pourquoi le ministère de l’Intérieur gérait l’Algérie',
        statement: 'Pourquoi François Mitterrand, ministre français de l’Intérieur en 1954, s’occupait-il du dossier algérien ?',
        methodSteps: [
          'Depuis le 9 décembre 1848, l’Algérie n’est pas classée juridiquement comme colonie mais comme 3 départements français.',
          'Les départements français relèvent du ministère de l’Intérieur, pas de celui de la France d’Outre-mer.',
        ],
        conclusion: 'Paris considérait juridiquement l’Algérie comme partie intégrante de la métropole, d’où le refus de négocier en 1954.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p02',
      order: 2,
      title: 'Naissance et radicalisation du nationalisme algérien (1927-1954)',
      summary: 'Distinguer Ouléma (Ben Badis), Messali Hadj (PPA/MTLD) et Ferhat Abbas (Manifeste 1943/UDMA), puis Sétif (1945) et le CRUA (1954).',
      conceptExplanation:
        'Le nationalisme algérien naît de trois tendances : religieuse (Association des Ouléma de Ben Badis, 1931), indépendantiste (Étoile nord-africaine 1927, PPA, MTLD de Messali Hadj) et modérée (Ferhat Abbas, Manifeste de 1943, UDMA 1946). Après les massacres de Sétif (8 mai 1945) et l’échec du statut de 1947, le CRUA est fondé en mars 1954 pour préparer la lutte armée.',
      keyRule: 'Sétif (8 mai 1945) + statut de 1947 inappliqué -> création du CRUA (mars 1954) pour l’insurrection.',
      formulas: [],
      workedExample: {
        title: 'Expliquer la bascule des nationalistes vers la lutte armée',
        statement: 'Pourquoi le CRUA décide-t-il en 1954 de renoncer à la seule action électorale ?',
        methodSteps: [
          'La répression de Sétif (1945) montre la brutalité du refus colonial.',
          'Le statut de 1947 est saboté par des fraudes électorales et le MTLD est paralysé par ses divisions.',
        ],
        conclusion: 'L’impasse politique pousse de jeunes militants (Krim Belkacem, Ben Boulaïd, Ben M’Hidi) à opter pour l’insurrection.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p03',
      order: 3,
      title: 'De la Toussaint rouge (1954) à la crise du 13 mai 1958',
      summary: 'Retracer le déclenchement de la guerre par le FLN/ALN, l’escalade militaire, l’action diplomatique et la chute de la IVe République.',
      conceptExplanation:
        'Transformé en FLN doté de l’ALN, le mouvement national déclenche la « Toussaint rouge » le 1er novembre 1954. Paris envoie d’importants renforts (quadrillage, torture) face au terrorisme urbain et aux maquis ravitaillés depuis le Maroc, la Tunisie et l’Égypte. Tandis que l’ONU et les Non-alignés pressent la France, l’émeute d’Alger du 13 mai 1958 renverse la IVe République et ramène De Gaulle.',
      keyRule: '1er nov. 1954 : Toussaint rouge (FLN/ALN) -> escalade militaire et diplomatique -> 13 mai 1958 : chute de la IVe République.',
      formulas: [],
      workedExample: {
        title: 'Relier la guerre d’Algérie à la chute de la IVe République',
        statement: 'Comment le conflit algérien provoque-t-il un changement de régime en France en 1958 ?',
        methodSteps: [
          'Les gouvernements successifs de la IVe République sont impuissants à gagner la guerre ou à ouvrir des négociations.',
          'Craignant un abandon, l’armée et les Européens d’Alger se soulèvent le 13 mai 1958 et appellent De Gaulle.',
        ],
        conclusion: 'Le 1er juin 1958, De Gaulle revient au pouvoir et fonde la Ve République pour trancher le dossier algérien.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p04',
      order: 4,
      title: 'La politique algérienne de De Gaulle et les résistances ultra (1958-1961)',
      summary: 'Analyser l’évolution de De Gaulle (« Je vous ai compris ! », autodétermination) face au GPRA, à l’OAS et au putsch de 1961.',
      conceptExplanation:
        'Investi le 1er juin 1958, Charles de Gaulle prononce le discours ambigu du 4 juin (« Je vous ai compris ! ») puis propose l’autodétermination en trois options. Le GPRA (automne 1958) exige l’indépendance pleine. Sentant l’Algérie française perdue, les ultras et une partie de l’armée déclenchent les Barricades (janvier 1960), créent l’OAS et tentent le putsch avorté du 22 avril 1961.',
      keyRule: 'Virage de De Gaulle vers l’autodétermination -> GPRA inflexible sur l’indépendance -> opposition violente de l’OAS.',
      formulas: [],
      workedExample: {
        title: 'Comprendre la double pression subie par De Gaulle entre 1958 et 1962',
        statement: 'Pourquoi la négociation d’Évian a-t-elle pris près de quatre ans après le retour de De Gaulle ?',
        methodSteps: [
          'D’un côté, le FLN/GPRA refuse toute formule d’autonomie fédérale et exige l’indépendance incluant le Sahara.',
          'De l’autre, l’OAS et des militaires rebelles multiplient les attentats pour bloquer toute paix négociée.',
        ],
        conclusion: 'De Gaulle doit d’abord neutraliser les putschistes en 1961 avant de pouvoir conclure les accords d’Évian en mars 1962.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p05',
      order: 5,
      title: 'Les accords d’Évian et la proclamation de l’indépendance (1962)',
      summary: 'Connaître les négociateurs, les clauses d’Évian (18 mars 1962), les référendums et le premier président Ahmed Ben Bella.',
      conceptExplanation:
        'Signés le 18 mars 1962 (Louis Joxe, Robert Buron, Jean de Broglie face à Krim Belkacem, Bentobbal, Dahlab, Yazid), les accords d’Évian instaurent le cessez-le-feu et reconnaissent l’indépendance et l’intégrité territoriale (Sahara compris) avec coopération économique et pétrolière. Approuvés le 8 avril en France et le 1er juillet en Algérie (plus de 90 % de OUI), ils mènent à l’indépendance proclamée le 3 juillet 1962 avec Ahmed Ben Bella comme premier président.',
      keyRule: '18 mars 1962 : accords d’Évian -> 1er juillet 1962 : référendum d’autodétermination -> 3 juillet 1962 : indépendance.',
      formulas: [],
      workedExample: {
        title: 'Identifier les clauses économiques et territoriales clés d’Évian',
        statement: 'Quels compromis rendent possibles les accords d’Évian du 18 mars 1962 ?',
        methodSteps: [
          'La France cède sur la pleine souveraineté politique et l’inclusion du Sahara dans le territoire algérien.',
          'L’Algérie accorde des garanties pour l’exploitation coopérative du pétrole saharien et les droits des Français d’Algérie.',
        ],
        conclusion: 'Les accords concilient souveraineté algérienne complète et coopération économique provisoire.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l03_accession_algerie_independance_p06',
      order: 6,
      title: 'Méthodologie BAC et situations d’évaluation sur l’Algérie',
      summary: 'Maîtriser le commentaire du Manifeste de 1943, la dissertation 1954-1962 et la comparaison Côte d’Ivoire / Algérie.',
      conceptExplanation:
        'Les épreuves du Baccalauréat portent fréquemment sur l’association chronologique (1945, 1947, 1954, 1958, 1962), l’analyse du Manifeste du peuple algérien (Ferhat Abbas, 10 février 1943), la dissertation « L’Algérie de 1954 à 1962 » et la confrontation des modèles de décolonisation entre l’Algérie (lutte armée) et l’Afrique noire francophone (négociation).',
      keyRule: 'Toujours expliquer que l’indépendance algérienne a été arrachée par la détermination du FLN/peuple algérien, contraignant Paris à négocier.',
      formulas: [],
      workedExample: {
        title: 'Préparer une réponse comparative Côte d’Ivoire / Algérie',
        statement: 'Comment expliquer en une synthèse pourquoi la France négocie en 1960 à Abidjan mais fait huit ans de guerre à Alger ?',
        methodSteps: [
          'Comparer le statut juridique et démographique : colonie d’encadrement administratif en Côte d’Ivoire vs colonie de peuplement (1 million d’Européens) et 3 départements en Algérie.',
          'Comparer les choix stratégiques : dialogue progressif via le PDCI-RDA vs blocage des réformes en Algérie provoquant la lutte armée du FLN.',
        ],
        conclusion: 'Les conditions coloniales locales expliquent la différence entre indépendance négociée et indépendance arrachée par les armes.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};
