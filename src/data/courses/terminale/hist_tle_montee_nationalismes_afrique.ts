import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Thème 2 - Leçon 1 : La montée des nationalismes en Afrique » (format v2 : mini-leçons de 6 étapes).

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Concept central',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce que le nationalisme en contexte colonial ?',
    paragraphText:
      '• Mouvements nationalistes : prise de conscience politique et culturelle des peuples colonisés qui contestent la domination impérialiste européenne pour obtenir l’égalité des droits, l’autonomie, puis la souveraineté nationale.\n• Au lendemain de la Seconde Guerre mondiale, les métropoles européennes sortent affaiblies et cet élan d’émancipation s’accélère sur tout le continent africain jusqu’à « l’année des indépendances » en 1960 (17 États africains souverains).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01_q1',
      type: 'mcq',
      prompt: 'Comment définit-on la montée des nationalismes en Afrique après 1945 ?',
      options: [
        'La volonté des puissances européennes de créer de nouvelles colonies',
        'La prise de conscience et la mobilisation des peuples colonisés contre la domination étrangère pour conquérir leur liberté',
        'La suppression de tous les partis politiques africains',
        'L’intégration économique forcée au pacte de Varsovie',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les mouvements nationalistes traduisent la prise de conscience des colonisés face à l’exploitation et leur lutte pour l’émancipation politique.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Facteurs exogènes',
    stepTheme: 'violet',
    stepTitle: 'L’anticolonialisme des deux Grands et l’affaiblissement européen',
    paragraphText:
      '• États-Unis : anciennes colonies britanniques, ils sont idéologiquement favorables à la liberté des peuples et souhaitent ouvrir les marchés africains (riches en matières premières) bloqués par les empires coloniaux.\n• URSS : au nom du marxisme-léninisme, elle condamne l’impérialisme capitaliste et soutient les luttes anticoloniales.\n• Europe ruinée : la Seconde Guerre mondiale détruit les infrastructures et l’économie de la France et du Royaume-Uni, affaiblissant leur emprise impériale.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01_q2',
      type: 'mcq',
      prompt: 'Pour quelle double raison les États-Unis adoptent-ils une posture anticoloniale après 1945 ?',
      options: [
        'Par fidélité à leur propre passé d’ancienne colonie et pour accéder aux marchés économiques bloqués par les empires européens',
        'Pour imposer le communisme marxiste sur tout le continent africain',
        'Pour céder toutes les colonies africaines à l’Allemagne',
        'Parce qu’ils avaient perdu la Seconde Guerre mondiale',
      ],
      correctAnswerIndex: 0,
      explanation: 'Les États-Unis associent idéal d’indépendance issu de leur histoire et intérêt économique à briser les chasses gardées coloniales européennes.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'ONU & Bandung',
    stepTheme: 'violet',
    stepTitle: 'Le rôle de la Charte de l’ONU (1945) et des Non-alignés à Bandung (1955)',
    paragraphText:
      '• L’ONU : l’article 1er de la Charte proclame l’égalité des droits des peuples et leur droit à disposer d’eux-mêmes, créant une contradiction directe avec le système colonial ; New York devient une tribune anticoloniale.\n• Bandung (avril 1955) : les pays indépendants d’Asie et d’Afrique réunis en Indonésie condamnent solennellement le colonialisme et affirment leur solidarité avec les peuples encore dépendants (mouvement des Non-alignés).',
    visualSchema: {
      type: 'custom_svg',
      title: 'Synthèse des facteurs externes (exogènes) de l’éveil nationaliste',
      caption: 'Un contexte international résolument favorable à la décolonisation après 1945.',
      tableData: {
        headers: ['Facteur externe', 'Origine / Date', 'Impact sur les colonies africaines'],
        rows: [
          ['Attitude des États-Unis', 'Après 1945', 'Pression diplomatique pour la transition vers l’autonomie et ouverture économique'],
          ['Attitude de l’URSS', 'Doctrine marxiste', 'Soutien idéologique, syndical et parfois matériel aux luttes anti-impérialistes'],
          ['Affaiblissement de l’Europe', '1939-1945', 'Ruine des métropoles, perte de prestige militaire (défaite de 1940, victoires japonaises)'],
          ['Charte de l’ONU', '26 juin 1945 (art. 1)', 'Légitimation juridique du droit des peuples à disposer d’eux-mêmes'],
          ['Conférence de Bandung', 'Avril 1955', 'Solidarité afro-asiatique et condamnation internationale du colonialisme'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01_q3',
      type: 'mcq',
      prompt: 'Quel principe inscrit à l’article 1er de la Charte de l’ONU donne une base juridique aux revendications nationalistes ?',
      options: [
        'Le droit des métropoles à conserver leurs colonies à vie',
        'Le droit des peuples à disposer d’eux-mêmes (autodétermination)',
        'La suppression de toute élection en Afrique',
        'L’obligation d’adopter le franc comme monnaie unique',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’article 1er de la Charte de l’ONU reconnaît l’égalité des droits des peuples et leur droit à disposer d’eux-mêmes.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Distinction clé',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre facteur exogène et facteur endogène',
    paragraphText:
      '• Un facteur externe (exogène) vient de l’extérieur du territoire colonisé : pression des États-Unis et de l’URSS, Charte de l’ONU, conférence de Bandung, affaiblissement des métropoles en Europe.\n• Un facteur interne (endogène) naît à l’intérieur même de la colonie : élites instruites, bourgeoisie agricole, souffrances coloniales, anciens combattants.',
    konanTip: 'Exogène = extérieur à la colonie (ONU, USA, URSS, Bandung) ; Endogène = né dans la société colonisée.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01_q4',
      type: 'mcq',
      prompt: 'Lequel de ces éléments constitue un facteur EXTERNE (exogène) de la montée des nationalismes en Afrique ?',
      options: [
        'La création d’une bourgeoisie africaine du café et du cacao',
        'La conférence afro-asiatique de Bandung en avril 1955',
        'Les corvées et les travaux forcés subis dans les villages',
        'L’émergence d’élites scolarisées dans les colonies',
      ],
      correctAnswerIndex: 1,
      explanation: 'La conférence de Bandung (1955, en Indonésie) est un événement international extérieur aux colonies africaines : c’est un facteur exogène.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Étude de document',
    stepTheme: 'slate',
    stepTitle: 'La position nuancée des États-Unis (John Foster Dulles, 1953)',
    paragraphText:
      'Dans un discours de novembre 1953, le secrétaire d’État américain John Foster Dulles rappelle que les États-Unis soutiennent l’évolution des colonies vers l’autonomie conformément à la Charte de l’ONU, tout en redoutant que le communisme international ne profite d’une rupture trop brutale avec les alliés européens.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01_q5',
      type: 'mcq',
      prompt: 'Quelle crainte tempère parfois l’anticolonialisme des États-Unis pendant la guerre froide ?',
      options: [
        'La peur que le communisme soviétique n’influence ou ne récupère les mouvements indépendantistes',
        'La volonté de rétablir la SDN',
        'Le souhait de voir le Royaume-Uni annexer les États-Unis',
        'L’absence totale de matières premières en Afrique',
      ],
      correctAnswerIndex: 0,
      explanation: 'Tout en soutenant la décolonisation, Washington cherche à éviter que les nouveaux États indépendants ne basculent dans le camp soviétique.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Repère 1960',
    stepTheme: 'green',
    stepTitle: 'Pourquoi 1960 est-elle appelée « l’année de l’Afrique » ?',
    paragraphText:
      'Portés par la conjonction des facteurs externes et des luttes internes, dix-sept pays africains accèdent à l’indépendance au cours de la seule année 1960 (dont la Côte d’Ivoire le 7 août 1960, le Sénégal, le Mali, le Congo, le Nigeria, etc.).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01_q6',
      type: 'mcq',
      prompt: 'Combien de pays africains accèdent à la souveraineté au cours de la seule année 1960, appelée « année des indépendances » ?',
      options: [
        '4 pays',
        '17 pays',
        '35 pays',
        '54 pays',
      ],
      correctAnswerIndex: 1,
      explanation: 'Dix-sept pays d’Afrique deviennent officiellement indépendants en 1960, transformant la carte politique du continent et la composition de l’ONU.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Élites et école',
    stepTheme: 'blue',
    stepTitle: '« Le système colonial portait en lui les germes de sa propre destruction »',
    paragraphText:
      '• Pour former des auxiliaires subalternes (commis, instituteurs, médecins auxiliaires), la colonisation crée des écoles.\n• Or, les nouvelles élites africaines instruites dans la culture occidentale (Nkrumah, Senghor, Houphouët-Boigny, Nyerere...) s’approprient les idéaux de liberté, d’égalité et de souveraineté populaire et les retournent contre la tutelle coloniale.',
    keyRule: 'L’école coloniale forme malgré elle les futurs leaders qui vont contester l’ordre colonial au nom des valeurs de liberté.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02_q1',
      type: 'mcq',
      prompt: 'Que signifie l’affirmation « Le système colonial portait en lui-même les germes de sa propre destruction » ?',
      options: [
        'Les métropoles ont volontairement fermé toutes les écoles en 1930',
        'L’école, l’urbanisation et l’économie coloniale ont fait émerger des élites et classes sociales qui ont mené la lutte pour l’indépendance',
        'La colonisation a supprimé toutes les cultures d’exportation',
        'Les colons européens ont demandé l’indépendance pour eux-mêmes en Afrique noire',
      ],
      correctAnswerIndex: 1,
      explanation: 'En instruisant des cadres et en transformant la société, la colonisation a produit les acteurs et idées capables de la renverser.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Mutations sociales',
    stepTheme: 'violet',
    stepTitle: 'Bourgeoisie locale, urbanisation et chômage urbain',
    paragraphText:
      '• Le développement des cultures d’exportation (café, cacao en Côte d’Ivoire et en Côte de l’Or) donne naissance à une bourgeoisie agricole africaine, qui s’ajoute aux bourgeoisies commerciale et administrative : lésées par les privilèges des colons, elles financent et animent l’éveil nationaliste.\n• Parallèlement, la croissance démographique et l’exode rural provoquent une urbanisation rapide et un chômage urbain, créant une masse populaire prête à se mobiliser.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02_q2',
      type: 'mcq',
      prompt: 'Quelle catégorie économique locale joue un rôle décisif dans l’éveil nationaliste en Côte d’Ivoire et au Ghana ?',
      options: [
        'La bourgeoisie agricole née des cultures d’exportation (café, cacao), aux côtés des élites administratives et commerçantes',
        'Les grands propriétaires féodaux européens installés en Sibérie',
        'Les armateurs japonais de la mer de Chine',
        'Les ingénieurs nucléaires de l’AIEA',
      ],
      correctAnswerIndex: 0,
      explanation: 'Les planteurs africains (café, cacao) s’organisent pour défendre leurs prix et droits face aux colons (ex. Syndicat agricole africain de 1944).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Abus coloniaux',
    stepTheme: 'violet',
    stepTitle: 'Les contraintes et humiliations du système colonial',
    paragraphText:
      'De profondes frustrations unissent les populations africaines contre la domination étrangère :\n• travaux forcés, corvées et portage ;\n• code de l’indigénat (justice d’exception et sanctions arbitraires) ;\n• fiscalité lourde (impôt de capitation), recrutements militaires forcés ;\n• discrimination raciale, sociale et salariale entre Blancs et indigènes ;\n• expropriation des terres et aliénation culturelle.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02_q3',
      type: 'mcq',
      prompt: 'Parmi ces réalités, laquelle fait partie des contraintes quotidiennes qui ont soudé le rejet du système colonial ?',
      options: [
        'L’égalité salariale parfaite entre Européens et Africains',
        'Les travaux forcés, les corvées, le portage, le code de l’indigénat et les discriminations',
        'Le vote obligatoire du budget de la métropole par les villageois',
        'La gratuité des terres modernes pour tous les autochtones',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’accumulation des abus (travaux forcés, impôts, indigénat, expropriations, racisme) nourrit une solidarité anticoloniale profonde.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Guerres mondiales',
    stepTheme: 'violet',
    stepTitle: 'Participation aux guerres mondiales et fin du mythe du « Blanc invincible »',
    paragraphText:
      '• En 1914-1918 et 1939-1945, les colonies fournissent des centaines de milliers de soldats (« tirailleurs ») et de vivres à l’effort de guerre.\n• La défaite de la France en 1940 et les victoires japonaises en Asie brisent le mythe de l’invincibilité de l’homme blanc.\n• De retour au pays, souvent désœuvrés et confrontés aux promesses non tenues par les métropoles, les anciens combattants deviennent des vecteurs actifs de contestation.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02_q4',
      type: 'mcq',
      prompt: 'Quel double effet psychologique et politique les deux guerres mondiales produisent-elles sur les colonisés africains ?',
      options: [
        'Elles démystifient l’invincibilité de l’homme blanc et rendent insupportable le non-respect des promesses faites aux soldats africains',
        'Elles persuadent les Africains que l’Europe est invulnérable',
        'Elles mettent immédiatement fin à l’existence des États européens',
        'Elles suppriment tout besoin d’instruction scolaire en Afrique',
      ],
      correctAnswerIndex: 0,
      explanation: 'Ayant vu les métropoles battues en 1940 et versé leur sang pour la liberté des Européens, les anciens combattants exigent désormais l’égalité et la liberté chez eux.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Chronologie précise',
    stepTheme: 'orange',
    stepTitle: 'L’éveil nationaliste ne commence pas en 1945 mais s’y accélère',
    paragraphText:
      'Attention à un piège classique des exercices « Vrai ou Faux » :\n• La Seconde Guerre mondiale n’est pas la première apparition du nationalisme : dès avant 1914 et durant l’entre-deux-guerres, des résistances, des journaux et des mouvements politiques ou religieux existent déjà.\n• En revanche, 1945 joue le rôle de déclencheur et d’accélérateur massif à l’échelle du continent.',
    konanTip: 'L’éveil nationaliste est antérieur à 1945 (dès l’entre-deux-guerres), mais c’est après 1945 qu’il devient un mouvement de masse irrésistible.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02_q5',
      type: 'mcq',
      prompt: 'Quelle affirmation chronologique sur les origines du nationalisme africain est exacte ?',
      options: [
        'Aucune contestation du système colonial n’avait existé avant 1945',
        'Des formes d’éveil nationaliste existent dès l’entre-deux-guerres, puis s’amplifient et se massivement radicalisent après 1945',
        'Tous les mouvements africains utilisaient exclusivement la lutte armée dès 1918',
        'L’éveil nationaliste n’a commencé qu’en 1965 après les indépendances',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les premières élites et mouvements (ex. Étoile nord-africaine 1927, Négritude des années 1930, messianismes) précèdent 1945, mais l’après-guerre généralise la lutte.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Activité d’application',
    stepTheme: 'slate',
    stepTitle: 'Classer les facteurs selon leur nature (endogène / exogène)',
    paragraphText:
      '• Facteurs endogènes : frustrations du système colonial, élites africaines formées à l’école, bourgeoisie agricole africaine.\n• Facteurs exogènes : anticolonialisme américain et soviétique, rôle de la Charte de l’ONU, Seconde Guerre mondiale (affaiblissement des métropoles), conférence de Bandung.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02_q6',
      type: 'mcq',
      prompt: 'Dans un devoir, comment classer « les élites africaines instruites » et « le soutien de l’ONU » ?',
      options: [
        'Tous deux sont des facteurs exogènes',
        'Tous deux sont des facteurs endogènes',
        'Élites africaines = facteur endogène ; soutien de l’ONU = facteur exogène',
        'Élites africaines = facteur exogène ; soutien de l’ONU = facteur endogène',
      ],
      correctAnswerIndex: 2,
      explanation: 'Les élites proviennent de l’évolution interne de la société colonisée (endogène), tandis que l’ONU agit depuis l’arène internationale (exogène).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Partis politiques',
    stepTheme: 'blue',
    stepTitle: 'Des partis de masse pour mobiliser la société colonisée',
    paragraphText:
      'Après 1945, le combat nationaliste passe par la création de grands partis politiques encadrant les populations urbaines et rurales :\n• Au Ghana (Côte de l’Or) : le CPP (Convention People’s Party) de Kwame Nkrumah.\n• En Côte d’Ivoire : le PDCI-RDA (Parti démocratique de Côte d’Ivoire) dirigé par Félix Houphouët-Boigny.\n• En Algérie : le FLN (Front de libération nationale).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q1',
      type: 'mcq',
      prompt: 'Quel parti politique fonde Kwame Nkrumah en Côte de l’Or (futur Ghana) pour mener la lutte vers l’indépendance ?',
      options: [
        'Le Convention People’s Party (CPP)',
        'Le Kominform',
        'L’Union française',
        'L’OAS',
      ],
      correctAnswerIndex: 0,
      explanation: 'Kwame Nkrumah crée le CPP (Convention People’s Party) en 1949 et obtient l’indépendance du Ghana dès 1957.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Modes d’action politique',
    stepTheme: 'violet',
    stepTitle: 'Meetings, désobéissance civile, élections et alliances métropolitaines',
    paragraphText:
      'Les partis politiques africains déploient des stratégies variées et complémentaires :\n• Sensibilisation des masses : meetings, marches pacifiques, pétitions, désobéissance civile (ex. campagne d’« Action positive » au Ghana, boycotts en Côte d’Ivoire).\n• Voie parlementaire et diplomatique : participation aux élections locales et métropolitaines, alliances tactiques avec les partis métropolitains (ex. alliance RDA-PCF jusqu’en 1950), négociation de réformes constitutionnelles.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q2',
      type: 'mcq',
      prompt: 'Par quels moyens principaux les partis politiques d’Afrique noire francophone et anglophone mobilisent-ils les populations après 1945 ?',
      options: [
        'Uniquement par le recours systématique aux bombardements aériens',
        'Meetings, marches, boycotts, désobéissance civile, compétitions électorales et négociations',
        'Interdiction de toute activité syndicale ou associative',
        'Dissolution des assemblées territoriales locales',
      ],
      correctAnswerIndex: 1,
      explanation: 'À la différence de quelques cas de lutte armée (Algérie, Kenya, colonies portugaises), la majorité des partis mènent d’abord un combat politique, électoral et syndical.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Action syndicale',
    stepTheme: 'violet',
    stepTitle: 'SAA, UGTAN et cheminots : le fer de lance syndical',
    paragraphText:
      'Les syndicats constituent souvent le creuset même de l’action politique :\n• Le Syndicat agricole africain (SAA), fondé en 1944 par Félix Houphouët-Boigny en Côte d’Ivoire pour défendre les planteurs africains contre le travail forcé.\n• La Fédération des cheminots africains (FCA), célèbre par la grande grève du Dakar-Niger (1947-1948).\n• L’UGTAN (Union générale des travailleurs d’Afrique noire) animée notamment par Sékou Touré en Guinée.',
    keyRule: 'Les syndicats (SAA, UGTAN, cheminots) utilisent grèves, marches, boycotts et financements pour soutenir les revendications politiques.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q3',
      type: 'mcq',
      prompt: 'Quel syndicat est fondé en 1944 par Félix Houphouët-Boigny avant de donner naissance au PDCI-RDA ?',
      options: [
        'L’UGTAN',
        'Le Syndicat agricole africain (SAA)',
        'La FEANF',
        'Le CRUA',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le Syndicat agricole africain (SAA, 1944) rassemble les planteurs ivoiriens contre les injustices coloniales et prépare la base du PDCI-RDA.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Nuance importante',
    stepTheme: 'orange',
    stepTitle: 'Ne pas réduire le nationalisme africain à la lutte armée',
    paragraphText:
      'Attention à la généralisation : tous les mouvements nationalistes africains n’ont pas utilisé la violence armée dès 1918 ou en 1945 !\nDans la majeure partie de l’AOF, de l’AEF et de l’Afrique de l’Ouest britannique, les partis de masse et syndicats ont privilégié la lutte politique, parlementaire, les grèves et les négociations progressives (contrairement à l’Algérie ou aux colonies portugaises).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q4',
      type: 'mcq',
      prompt: 'Quelle affirmation décrit avec justesse la diversité des méthodes nationalistes en Afrique ?',
      options: [
        'Tous les mouvements nationalistes ont pris les armes dès 1919',
        'Les mouvements se distinguent par leur grande diversité : lutte légale, grèves et boycotts dans de nombreux pays, lutte armée là où la métropole bloquait l’émancipation',
        'Aucun syndicat n’a jamais soutenu un parti nationaliste africain',
        'Seuls les partis européens ont obtenu les indépendances africaines',
      ],
      correctAnswerIndex: 1,
      explanation: 'La décolonisation africaine associe luttes syndicales et parlementaires majoritaires et guerres de libération dans les colonies de peuplement ou sous dictature.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Liaison syndicat-parti',
    stepTheme: 'slate',
    stepTitle: 'Le rôle moteur des cheminots et des travailleurs organisés',
    paragraphText:
      'En organisant des grèves longues et des boycotts de produits européens importés, les syndicats comme l’UGTAN (Sékou Touré) ou la Fédération des cheminots africains démontrent la capacité des travailleurs africains à paralyser l’économie coloniale et à imposer des négociations aux gouverneurs.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q5',
      type: 'mcq',
      prompt: 'Quelle personnalité guinéenne s’appuie sur le syndicalisme (UGTAN) pour mobiliser les masses contre la domination coloniale ?',
      options: [
        'Ahmed Sékou Touré',
        'Abdelhamid Ben Badis',
        'Aimé Césaire',
        'Charles de Gaulle',
      ],
      correctAnswerIndex: 0,
      explanation: 'Leader syndical de l’UGTAN et du PDG, Sékou Touré mobilise les travailleurs et fait voter NON en Guinée en 1958.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Savoir illustrer',
    stepTheme: 'green',
    stepTitle: 'Citer un trio précis parti + syndicat + moyen d’action au BAC',
    paragraphText:
      'Pour rendre une copie solide sur les manifestations politiques et syndicales :\n• Partis : CPP (Ghana), PDCI-RDA (Côte d’Ivoire), FLN (Algérie).\n• Syndicats : SAA (1944), UGTAN, FCA.\n• Actions : meetings, grèves, boycotts, élections et négociations.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q6',
      type: 'mcq',
      prompt: 'Quel couple associe correctement un leader nationaliste à son parti historique ?',
      options: [
        'Kwame Nkrumah — FLN',
        'Félix Houphouët-Boigny — PDCI-RDA',
        'Sékou Touré — CPP',
        'Simon Kimbangu — UGTAN',
      ],
      correctAnswerIndex: 1,
      explanation: 'Félix Houphouët-Boigny dirige le PDCI-RDA en Côte d’Ivoire (Kwame Nkrumah dirige le CPP au Ghana).',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Messianismes noirs',
    stepTheme: 'blue',
    stepTitle: 'Le rôle des mouvements religieux et prophétiques',
    paragraphText:
      '• Mouvements messianiques noirs : courants religieux africains qui réinterprètent le message chrétien hors de la tutelle des missions européennes, annonçant la délivrance spirituelle, la dignité de l’homme noir et la fin des aliénations coloniales.\n• Deux figures majeures incarnent ce réveil : le Harrisme et le Kimbanguisme.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q1',
      type: 'mcq',
      prompt: 'Comment les mouvements messianiques africains ont-ils contribué à l’éveil du nationalisme ?',
      options: [
        'En enseignant l’obéissance éternelle aux gouverneurs coloniaux',
        'En annonçant la fin des aliénations coloniales et en affirmant la dignité et la libération de l’homme noir',
        'En interdisant la lecture de tout texte sacré',
        'En créant une banque coloniale à Paris',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les prophétismes noirs offrent aux populations un espace d’autonomie spirituelle et d’espoir d’émancipation face à l’ordre colonial.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Figures religieuses',
    stepTheme: 'violet',
    stepTitle: 'William Wade Harris (Harrisme) et Simon Kimbangu (Kimbanguisme)',
    paragraphText:
      '• Le Harrisme : fondé par le prophète libérien William Wade Harris (actif notamment en Côte d’Ivoire et au Ghana dès 1913-1914) ; il prêche une foi autonome vis-à-vis des autorités coloniales.\n• Le Kimbanguisme : fondé par le prophète Simon Kimbangu au Congo belge (actuelle RDC) en 1921 ; arrêté et emprisonné trente ans par l’administration coloniale belge, il devient un symbole puissant de résistance et de libération.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q2',
      type: 'mcq',
      prompt: 'Quel prophète originaire du Congo belge (actuelle RDC) incarne le Kimbanguisme, mouvement religieux surveillé et réprimé par le colonisateur ?',
      options: [
        'William Wade Harris',
        'Simon Kimbangu',
        'Léon-Gontran Damas',
        'Ferhat Abbas',
      ],
      correctAnswerIndex: 1,
      explanation: 'Simon Kimbangu prêche au Congo belge en 1921 ; son message d’émancipation inquiète les autorités belges qui le maintiennent en prison jusqu’à sa mort en 1951.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Culture & Négritude',
    stepTheme: 'violet',
    stepTitle: 'La Négritude et la renaissance culturelle noire',
    paragraphText:
      '• La Négritude : mouvement littéraire et intellectuel lancé dans les années 1930 à Paris par Aimé Césaire (Martinique), Léopold Sédar Senghor (Sénégal) et Léon-Gontran Damas (Guyane).\n• Son but : réhabiliter la culture, l’histoire et la dignité des peuples noirs contre le mépris et l’assimilation coloniale.\n• Cette prise de conscience est relayée dès 1947 par la revue et maison d’édition « Présence Africaine » (fondée par Alioune Diop).',
    keyRule: 'Trio fondateur de la Négritude : Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas ; revue phare : Présence Africaine.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q3',
      type: 'mcq',
      prompt: 'Quels trois écrivains sont les pères fondateurs du mouvement culturel et littéraire de la « Négritude » ?',
      options: [
        'Kwame Nkrumah, Félix Houphouët-Boigny et Sékou Touré',
        'Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas',
        'Simon Kimbangu, William Harris et Ben Badis',
        'Harry Truman, Winston Churchill et Joseph Staline',
      ],
      correctAnswerIndex: 1,
      explanation: 'Césaire, Senghor et Damas créent la Négritude pour revendiquer l’identité et les valeurs culturelles du monde noir.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Étudiants & Presse',
    stepTheme: 'violet',
    stepTitle: 'Les mouvements estudiantins : WASU et FEANF',
    paragraphText:
      'Les étudiants africains en Europe jouent un rôle d’avant-garde par leurs conférences, expositions, journaux et congrès :\n• L’Union des étudiants de l’Afrique de l’Ouest (WASU) en milieu anglophone.\n• La FEANF (Fédération des étudiants d’Afrique noire en France / francophone), créée en 1950, qui porte très tôt la revendication d’indépendance immédiate et de souveraineté culturelle.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q4',
      type: 'mcq',
      prompt: 'Quel mouvement étudiant africain créé en 1950 réclame activement l’indépendance des colonies francophones ?',
      options: [
        'La FEANF (Fédération des étudiants d’Afrique noire francophone)',
        'La SDN',
        'L’OCDE',
        'Le Pacte de Bagdad',
      ],
      correctAnswerIndex: 0,
      explanation: 'La FEANF anime le militantisme anticolonial des étudiants africains en France dès les années 1950.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège d’analyse',
    stepTheme: 'orange',
    stepTitle: 'Éveil culturel et religieux ne veut pas dire action passive',
    paragraphText:
      'Réduire les étudiants ou les mouvements culturels à du « simple verbiage » serait une grave erreur :\n• Leurs revues (Présence Africaine), œuvres littéraires (Cahier d’un retour au pays natal, Discours sur le colonialisme), conférences et grèves étudiantes ont formé la conscience politique de toute une génération de futurs dirigeants.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q5',
      type: 'mcq',
      prompt: 'Par quelles actions concrètes les mouvements culturels et estudiantins ont-ils contribué à l’éveil nationaliste ?',
      options: [
        'Par la valorisation de la culture noire, la presse (Présence Africaine), les conférences et les productions littéraires',
        'En interdisant aux Africains d’écrire des livres en Europe',
        'En finançant l’armée coloniale belge au Congo',
        'En demandant la suppression de toutes les langues africaines',
      ],
      correctAnswerIndex: 0,
      explanation: 'La presse engagée, la littérature de la Négritude et les congrès étudiants ont forgé l’identité et la fierté nécessaires à la lutte politique.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Synthèse des 4 plans',
    stepTheme: 'slate',
    stepTitle: 'Articuler politique, syndical, religieux et culturel dans un devoir',
    paragraphText:
      'Lorsqu’un sujet demande les « caractères et manifestations des mouvements nationalistes en Afrique », organise toujours la réponse en quatre volets :\n1. Politique (CPP, PDCI-RDA, FLN).\n2. Syndical (SAA, UGTAN, FCA).\n3. Religieux (Harrisme, Kimbanguisme).\n4. Culturel et estudiantin (Négritude, Présence Africaine, FEANF).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q6',
      type: 'mcq',
      prompt: 'Quelle revue fondée par Alioune Diop en 1947 devient la vitrine intellectuelle de la culture africaine et anticoloniale ?',
      options: [
        'Présence Africaine',
        'L’Étoile du Matin',
        'Le Journal de Genève',
        'Pravda',
      ],
      correctAnswerIndex: 0,
      explanation: 'Présence Africaine réunit écrivains, chercheurs et leaders nationalistes pour promouvoir la culture et l’émancipation africaines.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Acquis sociaux (1946)',
    stepTheme: 'violet',
    stepTitle: 'Abolition de l’indigénat, loi Houphouët-Boigny et libertés de 1946',
    paragraphText:
      'Sous la pression des mouvements nationalistes et des députés africains élus à Paris, d’importants acquis sociaux sont votés au printemps 1946 dans les colonies françaises :\n• 20 février 1946 : abolition du régime de l’indigénat.\n• 5 avril 1946 (promulguée le 11 avril) : loi Houphouët-Boigny supprimant les travaux forcés dans toutes les colonies françaises.\n• 11 avril 1946 : liberté de réunion ; 16 avril 1946 : liberté d’association.\nCes mesures améliorent les conditions de vie et facilitent l’organisation légale des partis et syndicats.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q1',
      type: 'mcq',
      prompt: 'Quel acquis social majeur porte directement le nom de Félix Houphouët-Boigny en avril 1946 ?',
      options: [
        'La création de la monnaie unique africaine',
        'La suppression des travaux forcés dans toutes les colonies françaises',
        'La dissolution de tous les syndicats ouvriers',
        'L’annexion de la Guinée par la France',
      ],
      correctAnswerIndex: 1,
      explanation: 'La loi Houphouët-Boigny (votée en avril 1946) abolit le travail forcé obligatoire dans l’ensemble des territoires d’outre-mer français.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Acquis politiques',
    stepTheme: 'violet',
    stepTitle: 'De l’Union française (1946) à la Communauté (1958) et aux indépendances',
    paragraphText:
      'Face aux revendications croissantes, les métropoles doivent concéder une série de réformes politiques jusqu’à la souveraineté complète.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Étapes sociales et politiques de l’émancipation (1946-1960)',
      caption: 'Des libertés fondamentales de 1946 aux indépendances de 1960.',
      tableData: {
        headers: ['Date', 'Réforme / Événement', 'Portée historique'],
        rows: [
          ['Fév.-avr. 1946', 'Abolition indigénat, loi Houphouët-Boigny, libertés', 'Fin du travail forcé et reconnaissance des libertés de réunion et d’association'],
          ['13 octobre 1946', 'Constitution créant l’Union française', 'Suppression du terme « empire colonial » ; citoyenneté et députés africains'],
          ['23 juin 1956', 'Loi-cadre (Gaston Defferre)', 'Suffrage universel, collège unique et autonomie financière/exécutive des territoires'],
          ['28 sept. 1958', 'Référendum sur la Communauté franco-africaine', 'Adoptée en AOF/AEF sauf la Guinée (NON -> indépendante le 2 octobre 1958)'],
          ['Année 1960', 'Indépendances africaines', '17 États africains accèdent à la souveraineté nationale'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q2',
      type: 'mcq',
      prompt: 'Quelle réforme votée le 23 juin 1956 généralise le suffrage universel et accorde une autonomie interne aux colonies françaises ?',
      options: [
        'Le code de l’indigénat',
        'La Loi-cadre (loi Defferre)',
        'Le traité de Versailles',
        'La doctrine Truman',
      ],
      correctAnswerIndex: 1,
      explanation: 'La Loi-cadre du 23 juin 1956 instaure le collège unique, généralise le vote et dote chaque territoire d’un conseil de gouvernement.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Cas guinéen (1958)',
    stepTheme: 'slate',
    stepTitle: 'Le « NON » de la Guinée au référendum du 28 septembre 1958',
    paragraphText:
      'En septembre 1958, le général de Gaulle propose aux colonies d’AOF et d’AEF d’intégrer la Communauté franco-africaine par référendum.\nAlors que la majorité des territoires (dont la Côte d’Ivoire et le Sénégal) votent OUI pour évoluer progressivement, la Guinée de Sékou Touré vote massivement NON et proclame aussitôt son indépendance le 2 octobre 1958.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q3',
      type: 'mcq',
      prompt: 'Quelle colonie d’Afrique occidentale française vote NON lors du référendum du 28 septembre 1958 et devient immédiatement indépendante ?',
      options: [
        'Le Sénégal',
        'La Côte d’Ivoire',
        'La Guinée (dirigée par Sékou Touré)',
        'Le Niger',
      ],
      correctAnswerIndex: 2,
      explanation: 'La Guinée est le seul territoire d’Afrique subsaharienne française à rejeter la Communauté en 1958, accédant dès octobre 1958 à l’indépendance.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège chronologique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre Union française (1946) et Communauté (1958)',
    paragraphText:
      '• Union française (13 octobre 1946) = cadre instauré par la IVe République après la Seconde Guerre mondiale (supprime le mot « empire colonial »).\n• Communauté franco-africaine (28 septembre 1958) = cadre instauré par la Ve République de De Gaulle, étape immédiate avant les indépendances de 1960.',
    konanTip: '1946 = Union française ; 1956 = Loi-cadre ; 1958 = Communauté ; 1960 = Indépendances.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q4',
      type: 'mcq',
      prompt: 'Quel ensemble institutionnel créé en 1958 remplace l’Union française de 1946 ?',
      options: [
        'La Société des Nations',
        'La Communauté franco-africaine',
        'L’Union africaine',
        'Le Commonwealth soviétique',
      ],
      correctAnswerIndex: 1,
      explanation: 'La Constitution de la Ve République (1958) substitue la Communauté franco-africaine à l’Union française.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Lien cause-effet',
    stepTheme: 'green',
    stepTitle: 'Montrer que les réformes ont été arrachées, pas offertes par hasard',
    paragraphText:
      'Les réformes de 1946, 1956 et 1958 ne sont pas de simples cadeaux gratuits : elles répondent aux pressions conjuguées des grèves, des partis nationalistes africains, de la crainte de guerres coloniales (comme en Indochine puis en Algérie) et du contexte international.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q5',
      type: 'mcq',
      prompt: 'Pourquoi la France engage-t-elle la Loi-cadre en 1956 puis la Communauté en 1958 en Afrique subsaharienne ?',
      options: [
        'Pour canaliser la poussée nationaliste africaine et éviter l’extension de conflits armés comme en Indochine et en Algérie',
        'Parce qu’elle avait découvert de nouvelles colonies en Amérique',
        'Parce que les partis africains s’étaient tous dissous en 1955',
        'Sous la contrainte directe du Pacte de Varsovie',
      ],
      correctAnswerIndex: 0,
      explanation: 'Après la défaite d’Indochine (1954) et en pleine guerre d’Algérie (1954-1962), Paris préfère négocier des évolutions politiques en Afrique noire.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Impact social',
    stepTheme: 'slate',
    stepTitle: 'Pourquoi les acquis de 1946 accélèrent-ils la marche vers 1960 ?',
    paragraphText:
      'L’abolition du travail forcé (loi Houphouët-Boigny) et la conquête des libertés de réunion et d’association libèrent les énergies : les paysans retrouvent une dignité économique et les partis politiques peuvent désormais tenir des congrès et s’implanter dans tout le pays.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q6',
      type: 'mcq',
      prompt: 'Quel effet politique immédiat ont eu les lois d’avril 1946 (liberté de réunion et d’association) dans les colonies françaises ?',
      options: [
        'Elles ont permis aux partis nationalistes et aux syndicats de s’organiser légalement et de mobiliser les masses',
        'Elles ont rétabli le code de l’indigénat',
        'Elles ont supprimé la liberté de la presse en Afrique',
        'Elles ont retardé toute élection jusqu’en 1975',
      ],
      correctAnswerIndex: 0,
      explanation: 'Avec la fin de l’indigénat et les libertés publiques d’avril 1946, l’action partisane et syndicale peut se déployer à grande échelle.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Texte de Crawford Young',
    stepTheme: 'green',
    stepTitle: 'Comment l’indépendance est-elle passée d’utopie (1939) à réalité (1960) ?',
    paragraphText:
      'Dans Le Monde diplomatique (décembre 1970), le politiste Crawford Young remarque qu’à la veille de 1939, l’indépendance semblait « une aspiration lointaine formulée par des groupes isolés d’intellectuels », avant de devenir une lame de fond irrésistible en 25 ans.\nExplication : la Seconde Guerre mondiale, la naissance de l’ONU, les partis de masse et les revendications populaires ont transformé un combat élitiste en mouvement continental irréversible.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06_q1',
      type: 'mcq',
      prompt: 'Quelle transformation majeure souligne Crawford Young entre 1939 et les années 1960 en Afrique et en Asie ?',
      options: [
        'Le passage d’une aspiration portée par quelques intellectuels isolés à des forces populaires de masse rendant l’indépendance irrésistible',
        'Le renforcement durable des empires coloniaux européens jusqu’en 1990',
        'La disparition complète de tous les États d’Afrique et d’Asie',
        'Le refus des populations colonisées de demander leur liberté',
      ],
      correctAnswerIndex: 0,
      explanation: 'Après 1945, la mobilisation de masse portée par les partis, syndicats et facteurs internationaux rend la décolonisation inéluctable.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Débat d’idées',
    stepTheme: 'slate',
    stepTitle: 'Réformisme (assimilation / autonomie) vs radicalisme en Afrique subsaharienne',
    paragraphText:
      'Situation d’évaluation : Koffi soutient qu’après 1945 les leaders africains acceptaient la tutelle française pour réclamer d’abord l’égalité ; Amélie réplique que de nombreux leaders marxistes réclamaient dès 1945 une indépendance totale et immédiate.\nSynthèse nuancée : juste après 1945, la majorité des leaders élus en Afrique francophone (Senghor, Houphouët-Boigny) revendiquent d’abord l’égalité civique et la fin des abus au sein de l’Union française ; le mot d’ordre d’indépendance immédiate est porté plus tôt par certains intellectuels, étudiants (FEANF) et syndicalistes, avant de s’imposer chez presque tous à la fin des années 1950.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06_q2',
      type: 'mcq',
      prompt: 'Quelle était la revendication prioritaire de la majorité des députés africains francophones juste après 1945-1946 ?',
      options: [
        'Une guerre totale immédiate contre l’ONU',
        'L’égalité des droits, l’abolition du travail forcé et l’émancipation au sein de l’Union française (avant d’évoluer vers l’indépendance)',
        'Le maintien intégral du code de l’indigénat',
        'L’intégration dans le Bloc de l’Est en 1946',
      ],
      correctAnswerIndex: 1,
      explanation: 'À l’exception de courants radicaux et étudiants, la majorité des élus d’AOF-AEF recherchent d’abord l’égalité des droits et des réformes avant l’indépendance.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Vrai / Faux BAC',
    stepTheme: 'orange',
    stepTitle: 'Déjouer les affirmations absolues dans les QCM d’examen',
    paragraphText:
      'Repérons trois affirmations fausses fréquentes :\n1. « Aucun nationaliste ne revendiquait l’indépendance avant 1946 » -> FAUX (l’Étoile nord-africaine en Afrique du Nord ou certains militants panafricains la réclamaient déjà).\n2. « Les premiers mouvements n’ont rien obtenu des colonisateurs » -> FAUX (réformes sociales de 1946, Loi-cadre 1956, etc.).\n3. « Dès 1919, la majorité utilisait la violence armée » -> FAUX (l’action était surtout politique, syndicale, culturelle et religieuse).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06_q3',
      type: 'mcq',
      prompt: 'Parmi ces affirmations, laquelle est rigoureusement EXACTE ?',
      options: [
        'Les premiers mouvements nationalistes n’ont obtenu aucune réforme des métropoles',
        'Dès 1946, les pressions nationalistes arrachent la fin de l’indigénat, la suppression des travaux forcés et des libertés publiques',
        'L’URSS a soutenu la colonisation européenne en Afrique jusqu’en 1960',
        'Le panafricanisme et la Négritude sont nés seulement après 1970',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les lois du printemps 1946 prouvent l’efficacité précoce des mobilisations politiques et syndicales africaines.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Classement thématique',
    stepTheme: 'green',
    stepTitle: 'Trier un corpus de faits : origines, manifestations, résultats',
    paragraphText:
      'Pour classer rapidement des faits historiques dans un tableau du BAC :\n• Origines : défaite de 1940, fourniture de denrées et participation de soldats africains à la guerre, promesse de réformes.\n• Manifestations : pétitions, création de partis et syndicats, promotion de la Négritude, soulèvements et boycotts.\n• Résultats : répressions initiales, puis réformes sociales/politiques (1946, 1956) et indépendances.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06_q4',
      type: 'mcq',
      prompt: 'Dans un tableau classant origines, manifestations et résultats de l’éveil nationaliste, où ranger la « promotion de la Négritude » et la « création de syndicats » ?',
      options: [
        'Dans les origines externes',
        'Dans les manifestations de l’éveil nationaliste',
        'Dans les échecs militaires européens de 1914',
        'Dans les conséquences d’après 1991',
      ],
      correctAnswerIndex: 1,
      explanation: 'Créer des syndicats ou promouvoir la Négritude sont des moyens concrets par lesquels s’exprime et se manifeste le nationalisme.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Solidarité externe',
    stepTheme: 'slate',
    stepTitle: 'Analyser le texte de Bandung dans un exercice à trous',
    paragraphText:
      'À la conférence de Bandung (avril 1955), les représentants asiatiques et africains dénoncent la soumission et l’exploitation étrangères : ils proclament que le colonialisme est un mal auquel il faut mettre fin rapidement par les luttes politiques, syndicales (désobéissance civile, grèves) et culturelles (Négritude).',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06_q5',
      type: 'mcq',
      prompt: 'Quelle condamnation solennelle est prononcée lors de la conférence de Bandung en avril 1955 ?',
      options: [
        'Le colonialisme est qualifié de mal absolu auquel il doit être mis fin rapidement',
        'La colonisation doit être prolongée de cinquante ans en Afrique',
        'Les pays d’Afrique et d’Asie demandent à rejoindre le Pacte atlantique',
        'La Charte de l’ONU est rejetée par les pays nouvellement indépendants',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le communiqué final de Bandung condamne le colonialisme sous toutes ses manifestations et appuie le droit des peuples à l’autodétermination.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Check-list BAC',
    stepTheme: 'green',
    stepTitle: 'Les repères essentiels à maîtriser pour le Thème 2, leçon 1',
    paragraphText:
      '1. Facteurs externes : USA, URSS, Europe affaiblie, ONU (art. 1), Bandung (1955).\n2. Facteurs internes : école/élites, bourgeoisie agricole, abus coloniaux, deux guerres mondiales.\n3. Manifestations : partis (CPP, PDCI-RDA, FLN), syndicats (SAA, UGTAN, FCA), messianismes (Harris, Kimbangu), culture (Négritude, Présence Africaine, FEANF).\n4. Acquis : lois de 1946 (indigénat, travaux forcés), Union française (1946), Loi-cadre (1956), Communauté (1958), 17 indépendances en 1960.',
    exercise: {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06_q6',
      type: 'mcq',
      prompt: 'Quel pays anglophone d’Afrique subsaharienne, dirigé par Kwame Nkrumah, ouvre la voie aux indépendances dès mars 1957 (avant même 1960) ?',
      options: [
        'Le Ghana (ex-Côte de l’Or)',
        'Le Sénégal',
        'La Côte d’Ivoire',
        'Le Congo belge',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le Ghana (Côte de l’Or) devient indépendant le 6 mars 1957 sous l’impulsion de Kwame Nkrumah et du CPP.',
    },
  },
];

export const HIST_TLE_T2_L01_MONTEE_NATIONALISMES_AFRIQUE: CurriculumChapter = {
  id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique',
  subjectId: 'histoire_geo',
  gradeLevel: 'terminale_c',
  alsoForGrades: ['terminale_d', 'terminale_a1', 'terminale_a2'],
  order: 4,
  title: 'Thème 2, leçon 1 : La montée des nationalismes en Afrique',
  summary:
    'Facteurs externes et internes de l’éveil nationaliste après 1945, manifestations politiques, syndicales, religieuses et culturelles, acquis sociaux et politiques jusqu’aux indépendances.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'Tle_H4-La_montee_des_nationalismes_en_Afrique.pdf',
  points: [
    {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p01',
      order: 1,
      title: 'Définition et facteurs externes (exogènes) du nationalisme',
      summary: 'Analyser le contexte international d’après 1945 : USA, URSS, affaiblissement européen, ONU et conférence de Bandung.',
      conceptExplanation:
        'Après 1945, le contexte mondial favorise la prise de conscience des peuples colonisés : anticolonialisme des États-Unis et de l’URSS, ruine des métropoles européennes, article 1er de la Charte de l’ONU (droit des peuples à disposer d’eux-mêmes) et solidarité afro-asiatique née à la conférence de Bandung en avril 1955.',
      keyRule: 'Exogène = extérieur aux colonies : USA, URSS, Europe affaiblie, ONU (1945), Bandung (1955).',
      formulas: [],
      workedExample: {
        title: 'Relier la Charte de l’ONU et Bandung aux luttes africaines',
        statement: 'Pourquoi l’ONU et Bandung comptent-ils autant pour des peuples encore colonisés ?',
        methodSteps: [
          'L’ONU offre un principe juridique universel (l’autodétermination) et une tribune pour dénoncer les abus coloniaux.',
          'Bandung (1955) unit les États déjà souverains d’Asie et d’Afrique pour soutenir diplomatiquement ceux encore sous tutelle.',
        ],
        conclusion: 'L’action combinée de l’ONU et des Non-alignés retire toute légitimité morale au colonialisme.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p02',
      order: 2,
      title: 'Les facteurs internes (endogènes) de l’éveil nationaliste',
      summary: 'Comprendre le rôle de l’école, des élites, de la bourgeoisie agricole, des abus coloniaux et des anciens combattants.',
      conceptExplanation:
        'À l’intérieur des colonies, le système colonial nourrit lui-même sa contestation : émergence d’élites instruites, essor d’une bourgeoisie agricole (café, cacao) et urbanisation, rejet des abus (travaux forcés, indigénat, impôts, racisme) et démystification du colonisateur européen par les anciens combattants de 1914-1918 et 1939-1945.',
      keyRule: 'Endogène = né à l’intérieur des colonies : élites instruites, bourgeoisies locales, souffrances coloniales, anciens combattants.',
      formulas: [],
      workedExample: {
        title: 'Expliquer l’impact des deux guerres mondiales sur les colonies',
        statement: 'Comment les guerres mondiales ont-elles fragilisé la domination européenne en Afrique ?',
        methodSteps: [
          'Les métropoles ont mobilisé soldats et ressources africains en promettant la liberté en retour.',
          'La défaite de 1940 brise le mythe de l’invincibilité blanche et le non-respect des promesses radicalise les anciens combattants.',
        ],
        conclusion: 'Les guerres transforment le rapport psychologique et politique entre colonisateurs et colonisés.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03',
      order: 3,
      title: 'Les mouvements politiques et syndicaux',
      summary: 'Étudier les partis de masse (CPP, PDCI-RDA, FLN) et les syndicats (SAA, UGTAN, FCA) ainsi que leurs modes d’action.',
      conceptExplanation:
        'Le nationalisme s’incarne dans de grands partis (CPP de Kwame Nkrumah, PDCI-RDA de Félix Houphouët-Boigny, FLN en Algérie) et dans des syndicats actifs (SAA fondé en 1944, UGTAN de Sékou Touré, Fédération des cheminots africains). Ils mènent meetings, grèves, boycotts, compétitions électorales et négociations (ou lutte armée lorsque les réformes sont bloquées).',
      keyRule: 'Partis de masse et syndicats travaillent de concert pour mobiliser campagnes et villes.',
      formulas: [],
      workedExample: {
        title: 'Montrer le passage du syndicat au parti en Côte d’Ivoire',
        statement: 'Quel lien unit le Syndicat agricole africain (1944) et le PDCI-RDA (1946) ?',
        methodSteps: [
          'En 1944, Félix Houphouët-Boigny fonde le SAA pour défendre les planteurs africains contre le travail forcé.',
          'Fort de cette base populaire, il crée le PDCI en avril 1946 puis co-fonde le RDA en octobre 1946 à Bamako.',
        ],
        conclusion: 'L’action syndicale sert souvent de tremplin à la structuration politique nationale.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04',
      order: 4,
      title: 'Les mouvements religieux, culturels et estudiantins',
      summary: 'Connaître le Harrisme, le Kimbanguisme, la Négritude, Présence Africaine et la FEANF.',
      conceptExplanation:
        'Au-delà des partis, le réveil africain passe par les messianismes noirs (Harrisme de William Wade Harris, Kimbanguisme de Simon Kimbangu), par la réhabilitation culturelle de la Négritude (Aimé Césaire, Léopold Sédar Senghor, Léon-Gontran Damas), la revue Présence Africaine (1947) et le militantisme des associations d’étudiants (WASU, FEANF).',
      keyRule: 'L’émancipation politique s’appuie d’abord sur une reconquête spirituelle, culturelle et intellectuelle.',
      formulas: [],
      workedExample: {
        title: 'Expliquer l’impact politique de la Négritude',
        statement: 'En quoi un mouvement littéraire comme la Négritude sert-il la lutte anticoloniale ?',
        methodSteps: [
          'La colonisation justifiait sa domination par une prétendue « mission civilisatrice » niant les cultures africaines.',
          'En valorisant l’histoire et les valeurs du monde noir, la Négritude détruit ce complexe d’infériorité.',
        ],
        conclusion: 'La fierté culturelle devient un levier direct d’exigence de souveraineté.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05',
      order: 5,
      title: 'Les conséquences : acquis sociaux et réformes politiques (1946-1960)',
      summary: 'Retracer les conquêtes de 1946 (loi Houphouët-Boigny, libertés), la Loi-cadre (1956), la Communauté (1958) et 1960.',
      conceptExplanation:
        'Les pressions nationalistes arrachent d’abord les réformes sociales du printemps 1946 (fin de l’indigénat, suppression des travaux forcés par la loi Houphouët-Boigny, libertés de réunion et d’association), puis les réformes politiques : Union française (13 octobre 1946), Loi-cadre Defferre (23 juin 1956), Communauté franco-africaine (28 septembre 1958, rejetée par la Guinée) et enfin les indépendances (17 pays en 1960).',
      keyRule: '1946 (acquis sociaux & Union française) -> 1956 (Loi-cadre) -> 1958 (Communauté / NON guinéen) -> 1960 (Indépendances).',
      formulas: [],
      workedExample: {
        title: 'Comparer les choix de la Guinée et de la Côte d’Ivoire en 1958',
        statement: 'Pourquoi la Guinée accède-t-elle à l’indépendance dès octobre 1958 alors que la Côte d’Ivoire attend août 1960 ?',
        methodSteps: [
          'Lors du référendum du 28 septembre 1958, Sékou Touré fait voter NON en Guinée : la rupture est immédiate (2 octobre 1958).',
          'Félix Houphouët-Boigny fait voter OUI à la Communauté franco-africaine, puis négocie l’indépendance en 1960.',
        ],
        conclusion: 'Les voies vers la souveraineté diffèrent dans leur calendrier, mais aboutissent toutes à l’indépendance entre 1958 et 1960.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p06',
      order: 6,
      title: 'Méthodologie BAC et situations d’évaluation',
      summary: 'Savoir traiter les documents (Crawford Young, Dulles), classer les faits historiques et nuancer réformisme et radicalisme.',
      conceptExplanation:
        'Au Baccalauréat, ce chapitre évalue la capacité à classer facteurs endogènes et exogènes, à expliquer comment l’émancipation est passée d’idées élitistes avant 1939 à un mouvement de masse irrésistible après 1945 (Crawford Young), et à nuancer le débat entre leaders d’abord réformistes et courants radicaux.',
      keyRule: 'Toujours distinguer le point de départ (revendication d’égalité après 1945) et l’aboutissement général (indépendance en 1957-1960).',
      formulas: [],
      workedExample: {
        title: 'Arbitrer le débat sur le réformisme des leaders africains',
        statement: 'Les leaders africains d’après 1945 étaient-ils tous immédiatement favorables à une rupture brutale avec les métropoles ?',
        methodSteps: [
          'Beaucoup de dirigeants modérés (Houphouët-Boigny, Senghor) souhaitent d’abord obtenir l’égalité des droits et la fin des abus au sein de l’Union française.',
          'Parallèlement, des courants radicaux (étudiants de la FEANF, marxistes, Sékou Touré, Nkrumah) réclament rapidement l’indépendance totale.',
        ],
        conclusion: 'Les deux courants ont coexisté et poussé l’Afrique vers l’émancipation complète autour de 1960.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};
