import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Tle_H2-_Lère_de_la_bipolarisation_de_1947_à_1991.pdf » (format v2 : mini-leçons de 6 étapes).

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Concept central',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce que la bipolarisation et la guerre froide ?',
    paragraphText:
      '• Bipolarisation (1947-1991) : division durable du monde en deux blocs idéologiques, politiques, économiques et militaires rivaux dirigés par deux superpuissances : les États-Unis (bloc capitaliste et libéral) et l’URSS (bloc communiste).\n• Guerre froide : état de tension permanente et de compétition globale entre les deux Grands, sans affrontement militaire direct entre armées américaine et soviétique à cause de la dissuasion nucléaire.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q1',
      type: 'mcq',
      prompt: 'Comment définit-on la « guerre froide » entre 1947 et 1991 ?',
      options: [
        'Une guerre nucléaire totale entre Washington et Moscou',
        'Une tension aiguë et une rivalité planétaire sans affrontement militaire direct entre les deux superpuissances',
        'Une alliance économique permanente entre les États-Unis et l’URSS',
        'Un conflit limité uniquement à l’Afrique australe',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les États-Unis et l’URSS s’affrontent indirectement (propagande, course aux armements, conflits périphériques) sans jamais entrer en guerre directe l’un contre l’autre.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Origines (1945-1946)',
    stepTheme: 'violet',
    stepTitle: 'La rupture de la Grande Alliance : Pologne, Allemagne et « rideau de fer »',
    paragraphText:
      'Dès 1945, la méfiance remplace l’alliance contre le nazisme :\n• Question polonaise (frontière Oder-Neisse et gouvernement pro-soviétique) et sort de l’Allemagne divisée en 4 zones d’occupation.\n• Mise en place de « démocraties populaires » sous contrôle soviétique en Europe centrale et orientale (1947-1949 : Pologne, Hongrie, Roumanie, Bulgarie, Tchécoslovaquie en février 1948, puis RDA).\n• Le 5 mars 1946 à Fulton (États-Unis), Winston Churchill dénonce un « rideau de fer » tombé à travers l’Europe de Stettin à Trieste.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q2',
      type: 'mcq',
      prompt: 'Qui a prononcé l’expression célèbre de « rideau de fer » lors de son discours de Fulton le 5 mars 1946 ?',
      options: [
        'Harry Truman',
        'Winston Churchill',
        'Andreï Jdanov',
        'Charles de Gaulle',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’ancien Premier ministre britannique Winston Churchill alerte dès mars 1946 sur la coupure de l’Europe en deux par un « rideau de fer ».',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Rupture de 1947',
    stepTheme: 'violet',
    stepTitle: 'Doctrine Truman et plan Marshall du côté américain',
    paragraphText:
      '• Doctrine Truman (12 mars 1947) : le président américain Harry Truman propose une aide financière et militaire à la Grèce et à la Turquie pour stopper l’avancée communiste. C’est la stratégie de l’endiguement (« containment »).\n• Plan Marshall (5 juin 1947 à Harvard) : programme d’aide économique massive (environ 13 milliards de dollars) pour reconstruire l’Europe. 16 pays d’Europe occidentale l’acceptent et créent l’OECE (16 avril 1948), tandis que l’URSS le refuse et l’interdit à ses satellites.',
    keyRule: '1947 est l’année charnière de la rupture : Doctrine Truman (mars), Plan Marshall (juin), Doctrine Jdanov (septembre).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q3',
      type: 'mcq',
      prompt: 'Quel nom porte la stratégie formulée par la doctrine Truman en mars 1947 pour bloquer l’expansion du communisme ?',
      options: [
        'L’endiguement (containment)',
        'La perestroïka',
        'Le non-alignement',
        'La vietnamisation',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’endiguement (containment) vise à contenir l’influence soviétique dans ses limites de 1945-1947 sans déclencher de guerre mondiale.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Riposte soviétique',
    stepTheme: 'violet',
    stepTitle: 'Doctrine Jdanov et création du Kominform (1947)',
    paragraphText:
      'En réponse au plan Marshall, le dirigeant soviétique Andreï Jdanov théorise en septembre 1947 (conférence de Szklarska Poreba en Pologne) la division du monde en deux camps inconciliables :\n• le camp « impérialiste et antidémocratique » mené par les États-Unis ;\n• le camp « anti-impérialiste et démocratique » dirigé par l’URSS.\nDans la foulée est créé le Kominform (5 octobre 1947), bureau d’information et de coordination des partis communistes.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q4',
      type: 'mcq',
      prompt: 'Quelle structure est créée en octobre 1947 pour coordonner les partis communistes européens sous l’autorité de Moscou ?',
      options: [
        'L’OECE',
        'Le Kominform',
        'L’OTAN',
        'Le Conseil de tutelle',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le Kominform (Bureau d’information communiste) est institué en octobre 1947 dans le sillage de la doctrine Jdanov.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège d’orthographe & dates',
    stepTheme: 'orange',
    stepTitle: 'Bien distinguer Churchill, Truman, Marshall et Jdanov',
    paragraphText:
      '• Attention au prénom : Winston Churchill (Premier ministre britannique, discours de Fulton 1946).\n• Attention à la chronologie de 1947 : Truman (12 mars, politique/militaire) précède Marshall (5 juin, économie), qui provoque Jdanov (septembre, idéologie).',
    konanTip: 'Truman = bouclier politique (mars 1947) ; Marshall = dollar économique (juin 1947) ; Jdanov = riposte idéologique (sept. 1947).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q5',
      type: 'mcq',
      prompt: 'Quelle a été la réaction de l’URSS et des pays d’Europe de l’Est face à la proposition du plan Marshall en 1947 ?',
      options: [
        'Ils ont accepté les crédits américains pour fonder l’OECE',
        'Ils l’ont refusé, y voyant un instrument d’ingérence et de domination capitaliste américaine',
        'Ils ont dissous les partis communistes nationaux',
        'Ils ont adhéré au Pacte atlantique dès 1948',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’URSS rejette le plan Marshall (dénoncé comme un « plan d’asservissement ») et contraint la Tchécoslovaquie et la Pologne à le refuser.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Cas européen',
    stepTheme: 'slate',
    stepTitle: 'Le coup de Prague (février 1948) : achèvement du bloc de l’Est',
    paragraphText:
      'En février 1948, le parti communiste tchécoslovaque prend seul le pouvoir à Prague après la démission des ministres démocrates (« coup de Prague »). Ce basculement convainc les Occidentaux qu’une alliance militaire collective est indispensable face à Moscou.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q6',
      type: 'mcq',
      prompt: 'Quel événement de février 1948 achève la mise en place des démocraties populaires pro-soviétiques en Europe centrale ?',
      options: [
        'La signature des accords de Paris',
        'Le coup de Prague en Tchécoslovaquie',
        'La chute du Mur de Berlin',
        'Le sommet de Camp David',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le coup de Prague (février 1948) aligne la Tchécoslovaquie sur le camp soviétique et accélère l’alliance atlantique occidentale.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Blocs structurés',
    stepTheme: 'blue',
    stepTitle: 'Deux blocs dotés chacun d’alliances militaires et économiques',
    paragraphText:
      'Entre 1948 et 1955, la division idéologique se transforme en deux blocs rigides organisés sur le plan économique et militaire autour des États-Unis et de l’URSS.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Architecture comparée des deux blocs (1948-1955)',
      caption: 'Chaque camp associe une organisation économique et une alliance militaire intégrée.',
      tableData: {
        headers: ['Domaine', 'Bloc occidental (États-Unis)', 'Bloc oriental / soviétique (URSS)'],
        rows: [
          ['Idéologie', 'Démocratie libérale et capitalisme', 'Communisme (parti unique) et économie planifiée'],
          ['Organisation économique', 'Plan Marshall (1947), OECE (1948) puis OCDE (1961)', 'CAEM / COMECON (25 janvier 1949)'],
          ['Alliance militaire principale', 'OTAN (4 avril 1949, traité de Washington)', 'Pacte de Varsovie (14 mai 1955)'],
          ['Pactes périphériques', 'ANZUS (1951), OTASE (1954), Pacte de Bagdad / CENTO (1955)', 'Traités bilatéraux (dont URSS-Chine en 1950)'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02_q1',
      type: 'mcq',
      prompt: 'À quelle date a été signé le traité de Washington créant l’Organisation du traité de l’Atlantique Nord (OTAN) ?',
      options: [
        'Le 14 mai 1955',
        'Le 4 avril 1949',
        'Le 25 janvier 1949',
        'Le 12 mai 1949',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’OTAN est fondée le 4 avril 1949 par 12 pays occidentaux pour assurer une défense collective face à l’URSS.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Bloc occidental',
    stepTheme: 'violet',
    stepTitle: 'L’OTAN, le parapluie nucléaire et la pactomanie américaine',
    paragraphText:
      '• L’article 5 du traité de l’OTAN stipule qu’une attaque armée contre un membre est considérée comme une attaque contre tous.\n• Les États-Unis garantissent la protection par leur dissuasion nucléaire (Strategic Air Command) et étendent ce réseau d’alliances dans le monde (« pactomanie ») : ANZUS (1951), OTASE en Asie du Sud-Est (1954), Pacte de Bagdad / CENTO au Moyen-Orient (1955).\n• Sur le plan économique, l’OECE (1948) devient l’OCDE en 1961 et repose sur les accords de Bretton Woods (dollar).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02_q2',
      type: 'mcq',
      prompt: 'Quel principe fondamental repose au cœur de l’article 5 du traité de l’OTAN ?',
      options: [
        'Le désarmement unilatéral des États-Unis',
        'La défense collective : une agression contre un allié engage tous les autres',
        'L’adoption du rouble transférable dans le commerce atlantique',
        'L’interdiction d’admettre des pays européens',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’article 5 institue la solidarité militaire automatique en cas d’attaque armée contre un État membre.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Bloc soviétique',
    stepTheme: 'violet',
    stepTitle: 'CAEM / COMECON (1949) et Pacte de Varsovie (1955)',
    paragraphText:
      '• CAEM / COMECON (25 janvier 1949) : Conseil d’assistance économique mutuelle regroupant l’URSS et ses alliés européens (puis Cuba, Mongolie, Viêtnam) ; il organise une spécialisation économique et des échanges fondés sur le rouble transférable.\n• Pacte de Varsovie (14 mai 1955) : alliance militaire placée sous commandement soviétique, créée en réplique à l’intégration de la RFA dans l’OTAN. Il sera dissous en 1991.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02_q3',
      type: 'mcq',
      prompt: 'Quel événement immédiat déclenche la signature du Pacte de Varsovie par l’URSS et ses alliés le 14 mai 1955 ?',
      options: [
        'Le déclenchement du plan Marshall en 1947',
        'L’entrée et le réarmement de la République fédérale d’Allemagne (RFA) au sein de l’OTAN',
        'La mort de Staline en mars 1953',
        'La création de la CEI en décembre 1991',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’adhésion de la RFA à l’OTAN en mai 1955 provoque immédiatement la création du Pacte de Varsovie par l’URSS.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Décalage chronologique',
    stepTheme: 'orange',
    stepTitle: 'Attention : l’OTAN précède le Pacte de Varsovie de six ans',
    paragraphText:
      'Beaucoup d’élèves pensent que l’OTAN et le Pacte de Varsovie ont été créés la même année. C’est faux :\n• OTAN = 1949 ;\n• Pacte de Varsovie = 1955.\nEn revanche, sur le plan économique, l’OECE (avril 1948) et le CAEM/COMECON (janvier 1949) sont quasi simultanés.',
    konanTip: 'Ne mets jamais 1949 pour le Pacte de Varsovie : 1949 c’est l’OTAN et le COMECON ; 1955 c’est le Pacte de Varsovie.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02_q4',
      type: 'mcq',
      prompt: 'Quelle organisation du bloc soviétique est créée dès janvier 1949, six ans avant le Pacte de Varsovie ?',
      options: [
        'Le CAEM / COMECON',
        'Le traité INF de Washington',
        'L’OCDE',
        'L’OTASE',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le CAEM (COMECON) naît le 25 janvier 1949 pour intégrer économiquement le bloc de l’Est.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Asymétrie',
    stepTheme: 'slate',
    stepTitle: 'Comment l’URSS impose sa domination au sein de son bloc',
    paragraphText:
      'Alors que l’OTAN reste une alliance d’États souverains où la France (en 1966) peut quitter le commandement intégré sans être envahie, le Pacte de Varsovie sert aussi à maintenir par la force la discipline interne du bloc de l’Est (interventions en Hongrie en 1956 et en Tchécoslovaquie en 1968).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02_q5',
      type: 'mcq',
      prompt: 'Quelle différence politique distingue le fonctionnement du Pacte de Varsovie de celui de l’OTAN pendant la guerre froide ?',
      options: [
        'Le Pacte de Varsovie est utilisé par l’URSS pour réprimer militairement les dissidences internes du bloc (Hongrie 1956, Tchécoslovaquie 1968)',
        'L’OTAN interdit toute élection démocratique chez ses membres européens',
        'Le Pacte de Varsovie n’a jamais disposé d’un commandement militaire soviétique',
        'L’OTAN a envahi la France lorsqu’elle a quitté le commandement intégré en 1966',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’URSS mobilise les forces du Pacte de Varsovie pour écraser le Printemps de Prague en août 1968 (« souveraineté limitée »).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Synthèse',
    stepTheme: 'green',
    stepTitle: 'Savoir présenter un tableau comparatif des blocs au BAC',
    paragraphText:
      'Pour tout sujet sur « La formation des deux blocs », structure toujours ta réponse sur 3 axes :\n1. Idéologie (libéralisme vs communisme).\n2. Économie (Plan Marshall/OECE vs CAEM/COMECON).\n3. Sécurité militaire (OTAN et pactes régionaux vs Pacte de Varsovie).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02_q6',
      type: 'mcq',
      prompt: 'Quelle institution créée en 1961 prolonge et élargit l’OECE issue du plan Marshall ?',
      options: [
        'Le Kominform',
        'L’OCDE (Organisation de coopération et de développement économiques)',
        'La CEI',
        'Le Pacte de Bagdad',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’OECE (1948) se transforme en OCDE en 1961 en incluant les États-Unis et le Canada.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Berlin divisée',
    stepTheme: 'blue',
    stepTitle: 'Pourquoi Berlin est-elle le symbole de la guerre froide ?',
    paragraphText:
      'En 1945, l’Allemagne est divisée en 4 zones d’occupation (américaine, britannique, française à l’ouest ; soviétique à l’est). Située au cœur de la zone soviétique, l’ancienne capitale Berlin est elle aussi partagée en 4 secteurs. Berlin-Ouest forme donc une enclave occidentale au milieu du territoire contrôlé par Moscou.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03_q1',
      type: 'mcq',
      prompt: 'Quelle particularité géographique explique que Berlin soit devenue le point le plus sensible de la guerre froide en Europe ?',
      options: [
        'Berlin-Ouest était une enclave occidentale isolée à l’intérieur de la zone d’occupation soviétique',
        'Berlin se trouvait à la frontière entre la France et l’Espagne',
        'Berlin était entièrement contrôlée par les États-Unis dès 1945',
        'Berlin abritait le siège permanent de l’ONU',
      ],
      correctAnswerIndex: 0,
      explanation: 'Enclavée en zone soviétique, Berlin-Ouest dépendait de corridors terrestres et aériens traversant la zone est-allemande.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: '1re crise (1948-1949)',
    stepTheme: 'violet',
    stepTitle: 'Le blocus de Berlin, le pont aérien et la naissance des deux Allemagnes',
    paragraphText:
      '• Cause : à la conférence de Londres (février-juin 1948), les Occidentaux décident d’unifier leurs zones et d’y introduire le Deutschemark.\n• Crise (juin 1948 - 12 mai 1949) : Staline coupe toutes les voies terrestres et fluviales vers Berlin-Ouest. Les États-Unis et leurs alliés ripostent par un immense pont aérien (318 jours, plus de 275 000 vols) et Staline lève le blocus le 12 mai 1949.\n• Conséquence : partition officielle de l’Allemagne en deux États : la RFA (23 mai 1949, capitale Bonn, chancelier Konrad Adenauer) et la RDA (7 octobre 1949, capitale Berlin-Est / Pankow, dirigée par les communistes Grotewohl et Ulbricht).',
    keyRule: 'Blocus de Berlin (1948-1949) -> Pont aérien américain -> Naissance de la RFA (mai 1949) et de la RDA (octobre 1949).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03_q2',
      type: 'mcq',
      prompt: 'Comment les Occidentaux ont-ils brisé le blocus terrestre de Berlin-Ouest imposé par Staline en 1948-1949 ?',
      options: [
        'En déclenchant une guerre nucléaire contre Moscou',
        'En organisant un pont aérien massif ravitaillant la ville pendant 318 jours',
        'En cédant Berlin-Ouest à la RDA',
        'En signant les accords de Paris dès 1948',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le pont aérien américain et britannique ravitaille Berlin-Ouest nuit et jour (plus de 275 000 vols), rendant le blocus inefficace.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: '2e crise (1958-1961)',
    stepTheme: 'violet',
    stepTitle: 'L’hémorragie est-allemande, l’ultimatum et la construction du Mur',
    paragraphText:
      '• Contexte : attirés par la prospérité et les libertés de l’Ouest, près de 2,245 millions d’Est-Allemands fuient vers l’Ouest entre 1952 et 1961 en passant par Berlin.\n• Escales diplomatiques : ultimatum de Khrouchtchev (novembre 1958) exigeant le retrait occidental ; détente brève à Camp David (1959), puis rupture brutale au sommet de Paris (16 mai 1960) après qu’un avion espion américain U2 a été abattu au-dessus de l’URSS (1er mai 1960).\n• Dénouement : dans la nuit du 12 au 13 août 1961, la RDA et l’URSS érigent le Mur de Berlin (« mur de la honte »), coupant physiquement la ville jusqu’en novembre 1989.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03_q3',
      type: 'mcq',
      prompt: 'Dans la nuit de quelle date le Mur de Berlin a-t-il été construit pour stopper la fuite des habitants de RDA vers l’Ouest ?',
      options: [
        'Du 23 au 24 mai 1949',
        'Du 12 au 13 août 1961',
        'Du 22 au 23 octobre 1962',
        'Du 9 au 10 novembre 1989',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le Mur de Berlin est érigé dans la nuit du 12 au 13 août 1961 ; il tombera dans la nuit du 9 novembre 1989.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège chronologique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre la 1re crise (1948-1949) et le Mur (1961)',
    paragraphText:
      'Erreur classique de copie : situer le Mur de Berlin en 1948 ou confondre les dirigeants :\n• 1re crise (1948-1949) = Staline contre Truman -> résultat : naissance de la RFA et de la RDA.\n• 2e crise (1958-1961) = Khrouchtchev contre Eisenhower puis Kennedy -> résultat : construction du Mur de Berlin le 13 août 1961.',
    konanTip: '1948-1949 = Blocus de Staline (RFA/RDA) ; 1961 = Mur de Khrouchtchev/Ulbricht.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03_q4',
      type: 'mcq',
      prompt: 'Quel est le bilan institutionnel direct de la première crise de Berlin en 1949 ?',
      options: [
        'La construction du Mur de Berlin',
        'La naissance de deux États allemands : la RFA à l’ouest et la RDA à l’est',
        'La réunification immédiate de l’Allemagne',
        'L’entrée de la RDA dans l’OTAN',
      ],
      correctAnswerIndex: 1,
      explanation: 'La RFA naît le 23 mai 1949 et la RDA le 7 octobre 1949 dans le sillage immédiat de la levée du blocus.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Incident diplomatique',
    stepTheme: 'slate',
    stepTitle: 'L’affaire de l’avion espion U2 et l’échec de Paris (mai 1960)',
    paragraphText:
      'Le 1er mai 1960, un avion espion américain U2 piloté par Gary Powers est abattu en territoire soviétique. À l’ouverture de la conférence au sommet de Paris (16 mai 1960), Khrouchtchev exige des excuses d’Eisenhower, qui refuse. Le sommet avorte, ouvrant la voie à la construction du Mur un an plus tard.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03_q5',
      type: 'mcq',
      prompt: 'Quel incident provoque l’échec de la conférence au sommet de Paris en mai 1960 ?',
      options: [
        'Le lancement du satellite Spoutnik',
        'La destruction d’un avion espion américain U2 au-dessus de l’URSS',
        'Le débarquement de la Baie des Cochons',
        'L’invasion de l’Afghanistan',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’affaire de l’avion espion U2 (1er mai 1960) entraîne la rupture immédiate du sommet de Paris.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Synthèse Berlin',
    stepTheme: 'green',
    stepTitle: 'Lire les symboles de Berlin de 1949 à 1989',
    paragraphText:
      '• 1949 : Berlin entérine la division politique de l’Europe (RFA / RDA).\n• 1961 : le Mur matérialise concrètement le « rideau de fer » en figeant le statu quo européen.\n• 1989 : la chute du Mur annoncera l’effondrement complet du bloc communiste.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03_q6',
      type: 'mcq',
      prompt: 'Qui devient en 1949 le premier chancelier de la République fédérale d’Allemagne (RFA), avec Bonn pour capitale ?',
      options: [
        'Konrad Adenauer',
        'Otto Grotewohl',
        'Willy Brandt',
        'Mikhaïl Gorbatchev',
      ],
      correctAnswerIndex: 0,
      explanation: 'Konrad Adenauer dirige la RFA (capitale Bonn) à partir de 1949 et ancre l’Allemagne de l’Ouest dans le bloc occidental.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Cuba révolutionnaire',
    stepTheme: 'blue',
    stepTitle: 'De la victoire de Castro (1959) au rapprochement avec l’URSS',
    paragraphText:
      '• Le 1er janvier 1959, Fidel Castro renverse le dictateur pro-américain Batista à Cuba.\n• Les réformes agraires et nationalisations touchent les intérêts américains (dont la United Fruit Company). Washington répond par un embargo économique.\n• Cuba se rapproche alors de l’URSS (accord commercial du 13 février 1960), puis échappe au débarquement d’exilés anticastristes soutenus par la CIA à la Baie des Cochons (17 avril 1961).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q1',
      type: 'mcq',
      prompt: 'Quel événement d’avril 1961 pousse définitivement Fidel Castro à rechercher la protection militaire de l’URSS ?',
      options: [
        'L’échec du débarquement anticastriste de la Baie des Cochons soutenu par les États-Unis',
        'La construction du Mur de Berlin',
        'Les accords de Paris sur le Viêtnam',
        'La guerre du Golfe',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le fiasco de la Baie des Cochons (17 avril 1961) convainc Castro de se placer sous le parapluie militaire soviétique.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Paroxysme (oct. 1962)',
    stepTheme: 'violet',
    stepTitle: 'Les 13 jours qui font trembler le monde (octobre 1962)',
    paragraphText:
      '• En octobre 1962, des avions espions américains U2 photographient à Cuba des rampes de missiles nucléaires soviétiques menaçant directement le territoire américain.\n• Le 22 octobre 1962, le président John F. Kennedy dénonce l’installation et décrète un blocus naval (« quarantaine ») autour de Cuba pour stopper les navires soviétiques.\n• Pendant plusieurs jours, les deux superpuissances sont au bord d’une guerre nucléaire mondiale.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q2',
      type: 'mcq',
      prompt: 'Quelle mesure immédiate le président John F. Kennedy annonce-t-il le 22 octobre 1962 face aux missiles soviétiques à Cuba ?',
      options: [
        'Un bombardement atomique immédiat de La Havane',
        'Une « quarantaine » (blocus naval) autour de Cuba',
        'Le retrait des États-Unis de l’ONU',
        'La cession de la Floride à l’URSS',
      ],
      correctAnswerIndex: 1,
      explanation: 'Kennedy impose une « quarantaine » navale le 22 octobre 1962 afin d’empêcher l’arrivée de nouveaux missiles soviétiques tout en laissant place à la négociation.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Dénouement',
    stepTheme: 'violet',
    stepTitle: 'La médiation d’U Thant et le compromis Kennedy-Khrouchtchev',
    paragraphText:
      'Grâce à des canaux secrets et à la médiation du Secrétaire général de l’ONU U Thant, Nikita Khrouchtchev et John F. Kennedy trouvent un accord entre le 26 et le 28 octobre 1962 :\n• l’URSS démantèle et retire ses fusées nucléaires de Cuba ;\n• en échange, les États-Unis s’engagent à ne pas envahir Cuba et acceptent secrètement de retirer leurs missiles Jupiter installés en Turquie et en Italie.',
    keyRule: 'Compromis de Cuba : retrait des fusées soviétiques contre non-invasion de Cuba + retrait des fusées US de Turquie/Italie.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q3',
      type: 'mcq',
      prompt: 'Quelle contrepartie secrète les États-Unis acceptent-ils pour obtenir le retrait des missiles soviétiques de Cuba ?',
      options: [
        'L’évacuation de Berlin-Ouest',
        'Le retrait de leurs missiles Jupiter basés en Turquie et en Italie (en plus de ne pas envahir Cuba)',
        'La dissolution de l’OTAN',
        'L’annulation du plan Marshall',
      ],
      correctAnswerIndex: 1,
      explanation: 'En plus de la promesse de non-agression contre Cuba, Washington accepte le retrait discret des missiles Jupiter en Turquie et en Italie.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Conséquences majeures',
    stepTheme: 'green',
    stepTitle: 'Du bord du gouffre nucléaire au téléphone rouge (1963)',
    paragraphText:
      'La crise de Cuba marque un tournant décisif dans les relations internationales :\n1. Installation du « téléphone rouge » entre la Maison-Blanche et le Kremlin (juin 1963) pour communiquer directement en cas d’alerte.\n2. Relance des négociations nucléaires avec le Traité de Moscou (août 1963) sur l’arrêt partiel des essais nucléaires.\n3. Adoption par le ministre américain Robert McNamara de la doctrine de la « riposte graduée ».\n4. Perte de prestige de Khrouchtchev à Moscou (destitué en 1964) et critiques de la Chine maoïste.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q4',
      type: 'mcq',
      prompt: 'Quel outil symbolique et technique est mis en place en juin 1963 à la suite directe de la crise de Cuba ?',
      options: [
        'Le Mur de Berlin',
        'Le « téléphone rouge » reliant directement Washington et Moscou',
        'Le Pacte de Varsovie',
        'Le traité de Maastricht',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le téléscripteur direct dit « téléphone rouge » (20 juin 1963) permet aux dirigeants américain et soviétique d’éviter toute erreur de calcul en cas de crise.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège d’examen',
    stepTheme: 'orange',
    stepTitle: 'Distinguer le rôle de Cuba et celui des deux Grands',
    paragraphText:
      'Attention : Fidel Castro n’est pas consulté dans le règlement final entre Kennedy et Khrouchtchev, ce qui suscite sa colère.\nLa crise montre que, face au péril atomique, les deux superpuissances préfèrent négocier directement au-dessus de leurs alliés pour éviter l’anéantissement mutuel.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q5',
      type: 'mcq',
      prompt: 'Pourquoi la crise des fusées de Cuba d’octobre 1962 est-elle considérée comme le point culminant mais aussi le point d’inflexion de la guerre froide ?',
      options: [
        'Parce qu’après avoir frôlé la guerre nucléaire, Washington et Moscou engagent le dialogue de la Détente',
        'Parce qu’elle entraîne immédiatement la chute de l’URSS dès 1963',
        'Parce que Cuba devient membre permanent du Conseil de sécurité',
        'Parce que les États-Unis envahissent et annexent Cuba en 1962',
      ],
      correctAnswerIndex: 0,
      explanation: 'La peur d’une guerre atomique totale pousse les deux Grands à passer d’une confrontation extrême à une gestion concertée du risque (Détente).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Acteur onusien',
    stepTheme: 'slate',
    stepTitle: 'Le rôle de médiation d’U Thant en octobre 1962',
    paragraphText:
      'Lors de la crise de Cuba, le Secrétaire général de l’ONU U Thant envoie des appels urgents à Kennedy et Khrouchtchev pour suspendre le face-à-face naval dans les Caraïbes, offrant une porte de sortie honorable aux deux dirigeants.\nC’est un exemple clé à réutiliser aussi dans la leçon sur les succès diplomatiques de l’ONU.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q6',
      type: 'mcq',
      prompt: 'Quel Secrétaire général de l’ONU joue un rôle de médiateur lors de la crise des fusées de Cuba en octobre 1962 ?',
      options: [
        'Trygve Lie',
        'U Thant',
        'Boutros Boutros-Ghali',
        'Kofi Annan',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le Birman U Thant (Secrétaire général de 1961 à 1971) facilite la désescalade diplomatique entre Kennedy et Khrouchtchev.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Dégel et Détente',
    stepTheme: 'blue',
    stepTitle: 'De la coexistence pacifique (1956) à la Détente (1963-1979)',
    paragraphText:
      '• Après la mort de Staline (5 mars 1953) et la maîtrise de l’équilibre de la terreur (URSS lance le premier ICBM en août 1957 et Spoutnik en octobre 1957), Nikita Khrouchtchev proclame au XXe congrès du PCUS (février 1956) la « coexistence pacifique » : compétition économique et idéologique sans guerre générale.\n• Après Cuba, elle laisse place à la Détente : dialogue permanent et accords de limitation des armements stratégiques.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05_q1',
      type: 'mcq',
      prompt: 'À quelle date est mort Staline, événement qui ouvre la voie à la déstalinisation puis à la coexistence pacifique ?',
      options: [
        'Le 5 mars 1953',
        'Le 5 mars 1955',
        'Le 24 octobre 1945',
        'Le 13 août 1961',
      ],
      correctAnswerIndex: 0,
      explanation: 'Joseph Staline est mort le 5 mars 1953 (à ne pas confondre avec l’année 1955 de la création du Pacte de Varsovie).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Fissures des blocs',
    stepTheme: 'violet',
    stepTitle: 'Contestations internes : France de De Gaulle, Chine, Hongrie, Prague',
    paragraphText:
      'Pendant la coexistence pacifique et la Détente, les deux blocs se fissurent :\n• À l’Ouest : le général de Gaulle dote la France de l’arme nucléaire (1960), retire la France du commandement intégré de l’OTAN (1966) et critique la guerre américaine au Viêtnam (discours de Phnom-Penh).\n• À l’Est : rupture sino-soviétique (la Chine obtient sa bombe atomique en 1964), retrait de l’Albanie du Pacte de Varsovie (1968), autonomie de la Roumanie de Ceaușescu, mais répression armée en Hongrie (novembre 1956) et lors du Printemps de Prague (janvier-août 1968, expérience d’Alexandre Dubček écrasée par Moscou).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05_q2',
      type: 'mcq',
      prompt: 'Quelle décision majeure le président Charles de Gaulle prend-il en 1966 pour affirmer l’indépendance militaire de la France ?',
      options: [
        'L’adhésion de la France au Pacte de Varsovie',
        'Le retrait de la France du commandement militaire intégré de l’OTAN',
        'La fermeture des ambassades occidentales en Chine',
        'L’envoi de troupes françaises au Viêtnam en 1966',
      ],
      correctAnswerIndex: 1,
      explanation: 'En 1966, la France reste membre de l’Alliance atlantique mais quitte le commandement militaire intégré de l’OTAN.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Désarmement',
    stepTheme: 'violet',
    stepTitle: 'Les grands accords de désarmement et d’apaisement (1963-1991)',
    paragraphText:
      'Pour réduire le coût et le danger de la course aux armements, États-Unis et URSS signent plusieurs traités clés entre 1963 et 1991.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Principaux accords de maîtrise des armements (1963-1991)',
      caption: 'De l’arrêt partiel des essais nucléaires aux réductions effectives des arsenaux.',
      tableData: {
        headers: ['Année', 'Traité / Accord', 'Contenu essentiel'],
        rows: [
          ['Août 1963', 'Traité de Moscou', 'Interdiction partielle des essais nucléaires (atmosphère, espace, sous l’eau)'],
          ['Juillet 1968', 'TNP (Traité de non-prolifération)', 'Limitation du nombre d’États dotés de l’arme atomique'],
          ['Mai 1972', 'SALT 1 (Moscou)', 'Premier plafonnement des missiles stratégiques offensifs et défensifs'],
          ['Août 1975', 'Acte final d’Helsinki', 'Reconnaissance des frontières européennes et engagements sur les droits humains'],
          ['Déc. 1987', 'Traité de Washington (INF)', 'Élimination des euromissiles de portée intermédiaire (SS-20 et Pershing II)'],
          ['Juil. 1991', 'Traité START', 'Réduction importante des armes nucléaires stratégiques américaines et soviétiques'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05_q3',
      type: 'mcq',
      prompt: 'Que prévoit le traité de Washington (INF) signé en décembre 1987 par Reagan et Gorbatchev ?',
      options: [
        'Le démantèlement des euromissiles à portée intermédiaire (SS-20 et Pershing II)',
        'La création du Mur de Berlin',
        'La partage du Viêtnam au 17e parallèle',
        'La reprise des essais nucléaires atmosphériques',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le traité INF de Washington (1987) applique l’« option zéro » en supprimant toute une catégorie de missiles nucléaires en Europe.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Pièges d’examen',
    stepTheme: 'orange',
    stepTitle: 'Attention aux dates : Prague (1968) et SALT 2 (1979)',
    paragraphText:
      '• Le Printemps de Prague se déroule de janvier à août 1968 (et non 1958) ; il montre que l’URSS refuse toute libéralisation politique dans son bloc (« doctrine Brejnev »).\n• L’accord SALT 2 (signé le 18 juin 1979 à Vienne) n’est jamais ratifié par le Sénat américain en raison de l’invasion soviétique de l’Afghanistan en décembre 1979, qui ouvre une « guerre fraîche » jusqu’en 1985.',
    konanTip: 'Printemps de Prague = 1968 ; Afghanistan & non-ratification de SALT 2 = 1979.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05_q4',
      type: 'mcq',
      prompt: 'Pourquoi le traité SALT 2 signé en juin 1979 n’a-t-il jamais été ratifié par le Sénat américain ?',
      options: [
        'À cause du déclenchement du blocus de Berlin',
        'En réaction à l’invasion de l’Afghanistan par l’URSS en décembre 1979',
        'Parce que la Chine a quitté l’ONU',
        'Parce que l’Allemagne venait d’être réunifiée',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’intervention soviétique en Afghanistan (décembre 1979) met fin à la Détente des années 1970 et bloque la ratification de SALT 2.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Diplomatie Nixon',
    stepTheme: 'slate',
    stepTitle: 'Le « linkage » et la diplomatie triangulaire en Asie (1971-1972)',
    paragraphText:
      'Pour sortir du bourbier vietnamien et isoler l’URSS, Richard Nixon et Henry Kissinger pratiquent le « linkage » (lier accords économiques/technologiques et concessions politiques) et une diplomatie triangulaire :\n• entrée de la République populaire de Chine à l’ONU en octobre 1971 ;\n• voyage historique de Nixon à Pékin en février 1972 pour rencontrer Mao Zedong.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05_q5',
      type: 'mcq',
      prompt: 'Quel est l’objectif stratégique du rapprochement de Richard Nixon avec la Chine maoïste en 1971-1972 ?',
      options: [
        'Exploiter le schisme sino-soviétique pour faire pression sur l’URSS et faciliter un retrait du Viêtnam',
        'Rétablir le contrôle colonial européen en Asie',
        'Admettre la Chine dans le Pacte de Varsovie',
        'Supprimer l’embargo contre Cuba dès 1972',
      ],
      correctAnswerIndex: 0,
      explanation: 'La « diplomatie triangulaire » de Nixon et Kissinger joue la carte chinoise pour équilibrer l’URSS et inciter Pékin et Moscou à peser sur Hanoï.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Crise des euromissiles',
    stepTheme: 'green',
    stepTitle: 'Comprendre la « guerre fraîche » (1979-1985) et le sursaut de 1987',
    paragraphText:
      'Entre 1979 et 1985, les tensions reprennent : déploiement de missiles soviétiques SS-20 face aux Pershing II américains en Europe, invasion de l’Afghanistan (1979), projet américain de « guerre des étoiles » (IDS) lancé par Ronald Reagan (1983).\nL’arrivée de Mikhaïl Gorbatchev en 1985 relance le dialogue : conférence de Stockholm (1986), traité de Washington (INF, 1987), CFE (novembre 1990) et START (juillet 1991).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05_q6',
      type: 'mcq',
      prompt: 'Comment désigne-t-on le projet de bouclier spatial antimissile lancé en 1983 par le président Ronald Reagan ?',
      options: [
        'Le plan Marshall',
        'L’Initiative de défense stratégique (IDS), surnommée « guerre des étoiles »',
        'La doctrine Jdanov',
        'L’opération Restore Hope',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’IDS (« guerre des étoiles ») relance une course technologique que l’économie soviétique essoufflée ne peut plus suivre.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Héritage de 1954',
    stepTheme: 'blue',
    stepTitle: 'Des accords de Genève (1954) à la naissance du Viêt-Cong',
    paragraphText:
      '• Après la défaite française à Diên Biên Phu (7 mai 1954), les accords de Genève (21 juillet 1954) divisent provisoirement le Viêtnam le long du 17e parallèle : au nord, la République démocratique du Viêtnam (communiste, dirigée par Hô Chi Minh) ; au sud, un État soutenu par les Occidentaux.\n• Avec le soutien américain, le président sud-vietnamien Ngô Đình Diệm refuse les élections de réunification prévues en 1956. En décembre 1960 naît au Sud le Front national de libération (FNL), appelé « Viêt-Cong » par ses adversaires.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06_q1',
      type: 'mcq',
      prompt: 'Quelle ligne géographique divise provisoirement le Viêtnam lors des accords de Genève du 21 juillet 1954 ?',
      options: [
        'La ligne Oder-Neisse',
        'Le 17e parallèle',
        'Le 38e parallèle',
        'L’équateur',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les accords de Genève fixent au 17e parallèle la ligne de démarcation provisoire entre le Nord-Viêtnam et le Sud-Viêtnam (le 38e parallèle concerne la Corée).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Escalade US (1964-1968)',
    stepTheme: 'violet',
    stepTitle: 'Golfe du Tonkin (1964) et engagement massif américain',
    paragraphText:
      '• En août 1964, à la suite de l’incident du golfe du Tonkin, le Congrès américain vote une résolution donnant les pleins pouvoirs militaires au président Lyndon B. Johnson.\n• Pour éviter l’effet « domino » en Asie du Sud-Est, les États-Unis engagent jusqu’à 545 000 soldats au sol et mènent des bombardements massifs sur le Nord-Viêtnam et la piste Hô Chi Minh (napalm, défoliants comme l’agent orange), face à une guérilla soutenue par l’URSS et la Chine.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06_q2',
      type: 'mcq',
      prompt: 'Quel événement d’août 1964 sert de déclencheur à l’engagement militaire massif des États-Unis au Viêtnam ?',
      options: [
        'La chute de Saïgon',
        'L’incident du golfe du Tonkin',
        'Le blocus de Berlin',
        'L’offensive du Têt',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’incident du golfe du Tonkin (août 1964) permet à Lyndon B. Johnson d’obtenir l’aval du Congrès pour intensifier l’intervention américaine.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Tournant (1968-1973)',
    stepTheme: 'violet',
    stepTitle: 'Offensive du Têt, vietnamisation et accords de Paris (27 janvier 1973)',
    paragraphText:
      '• Le 31 janvier 1968, l’offensive surprise du Têt lancée par le Nord et le FNL jusqu’à Saïgon provoque un choc immense dans l’opinion publique américaine, de plus en plus mobilisée contre la guerre.\n• Élu président, Richard Nixon lance en 1969 (doctrine de Guam) la « vietnamisation » : retrait progressif des troupes US compensé par le renforcement de l’armée sud-vietnamienne et l’extension des frappes au Laos et au Cambodge (1970).\n• Le 27 janvier 1973 sont signés les accords de Paris, actant le cessez-le-feu et le retrait américain.',
    keyRule: 'Dates clés du Viêtnam : Genève (21 juil. 1954), Tonkin (août 1964), Têt (31 janv. 1968), accords de Paris (27 janv. 1973), chute de Saïgon (30 avr. 1975).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06_q3',
      type: 'mcq',
      prompt: 'À quelle date ont été signés les accords de Paris organisant le retrait militaire des États-Unis du Viêtnam ?',
      options: [
        'Le 21 juillet 1954',
        'Le 31 janvier 1968',
        'Le 27 janvier 1973',
        'Le 30 avril 1975',
      ],
      correctAnswerIndex: 2,
      explanation: 'Les accords de Paris sont signés le 27 janvier 1973 après de longues négociations entre Washington, Hanoï, Saïgon et le GRP.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Issue du conflit',
    stepTheme: 'slate',
    stepTitle: 'La chute de Saïgon (30 avril 1975) et ses conséquences',
    paragraphText:
      'Privé du soutien militaire direct des États-Unis, le régime sud-vietnamien s’effondre en 1975 : les troupes nord-vietnamiennes prennent Saïgon le 30 avril 1975 (rebaptisée Hô Chi Minh-Ville) et le Viêtnam est réunifié sous régime communiste en 1976.\nPour les États-Unis, c’est la première défaite militaire de leur histoire contemporaine (près de 58 000 soldats américains tués, plus de 2 millions de victimes vietnamiennes) : elle engendre le « syndrome vietnamien ».',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06_q4',
      type: 'mcq',
      prompt: 'Que désigne le « syndrome vietnamien » dans l’histoire politique américaine après 1975 ?',
      options: [
        'La volonté immédiate d’envahir la Chine',
        'La réticence durable de l’opinion et des dirigeants américains à engager des troupes au sol dans des conflits lointains',
        'L’adoption du système communiste aux États-Unis',
        'L’abandon complet de l’arme nucléaire en 1975',
      ],
      correctAnswerIndex: 1,
      explanation: 'Traumatisés par la défaite de 1975 et le coût humain, les États-Unis hésitent pendant plus d’une décennie avant d’engager massivement leurs troupes à l’étranger.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Pièges du chapitre',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre 1re et 2e guerre d’Indochine/Viêtnam',
    paragraphText:
      '• La 1re guerre (1946-1954) oppose la France coloniale au Viêt-Minh d’Hô Chi Minh et se termine à Diên Biên Phu / Genève (1954).\n• La 2e guerre (1964-1975) oppose les États-Unis et le Sud-Viêtnam au Nord-Viêtnam et au FNL/Viêt-Cong et s’achève par les accords de Paris (27 janvier 1973) puis la chute de Saïgon (30 avril 1975).',
    konanTip: '1re guerre = France (fin 1954 à Genève) ; 2e guerre = États-Unis (accords de Paris 27 janvier 1973, chute de Saïgon 30 avril 1975).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06_q5',
      type: 'mcq',
      prompt: 'En quoi consiste la politique de « vietnamisation » mise en œuvre par Richard Nixon à partir de 1969 ?',
      options: [
        'Retirer progressivement les soldats américains tout en formant et équipant l’armée sud-vietnamienne pour assurer les combats au sol',
        'Installer des missiles nucléaires américains à Hanoï',
        'Reconnaître immédiatement le régime d’Hô Chi Minh dès 1969',
        'Confier la défense du Sud-Viêtnam à l’armée française',
      ],
      correctAnswerIndex: 0,
      explanation: 'Nixon réduit la présence terrestre américaine (tout en maintenant la pression aérienne) pour transférer la charge des combats au Sud-Viêtnam.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Lien avec la Détente',
    stepTheme: 'green',
    stepTitle: 'Pourquoi la guerre du Viêtnam illustre-t-elle une « Détente contrariée » ?',
    paragraphText:
      'Au moment même où Washington et Moscou signent les traités TNP (1968) et SALT 1 (1972) en Europe, ils continuent de s’affronter indirectement en Asie du Sud-Est : l’URSS et la Chine arment Hanoï pendant que l’armée américaine combat sur le terrain.\nLa Détente n’a donc jamais supprimé la rivalité des blocs dans le Tiers-Monde.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06_q6',
      type: 'mcq',
      prompt: 'Pourquoi la guerre du Viêtnam contredit-elle l’image d’une paix mondiale parfaite pendant la période de Détente ?',
      options: [
        'Parce que les États-Unis et l’URSS ont rompu toute relation diplomatique entre 1963 et 1975',
        'Parce qu’elle montre la poursuite d’affrontements armés indirects très meurtriers entre les deux blocs dans le Tiers-Monde',
        'Parce qu’elle s’est déroulée en Europe centrale',
        'Parce que l’ONU a mené directement la guerre contre le Nord-Viêtnam',
      ],
      correctAnswerIndex: 1,
      explanation: 'La Détente limite le risque de guerre nucléaire directe entre Moscou et Washington, mais les conflits périphériques persistent.',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Crise de l’URSS',
    stepTheme: 'blue',
    stepTitle: 'Pourquoi Mikhaïl Gorbatchev lance-t-il des réformes en 1985 ?',
    paragraphText:
      'Au milieu des années 1980, l’URSS traverse une crise profonde : pénuries agricoles et industrielles, retard technologique, poids écrasant du budget militaire face à l’IDS américaine et enlisement militaire en Afghanistan.\nNommé Secrétaire général en mars 1985, Mikhaïl Gorbatchev lance au XXVIIe congrès du PCUS (février 1986) deux réformes complémentaires : la Perestroïka et la Glasnost.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q1',
      type: 'mcq',
      prompt: 'Quel dirigeant arrivé au pouvoir en 1985 entreprend de réformer en profondeur le système soviétique ?',
      options: [
        'Leonid Brejnev',
        'Nikita Khrouchtchev',
        'Mikhaïl Gorbatchev',
        'Boris Eltsine',
      ],
      correctAnswerIndex: 2,
      explanation: 'Mikhaïl Gorbatchev devient dirigeant de l’URSS en mars 1985 et engage la Perestroïka et la Glasnost.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Les réformes',
    stepTheme: 'violet',
    stepTitle: 'Perestroïka et Glasnost : deux notions clés à maîtriser',
    paragraphText:
      '• Perestroïka (« restructuration ») : réforme économique visant à moderniser l’appareil productif en introduisant une dose d’initiative privée et d’autonomie des entreprises.\n• Glasnost (« transparence ») : ouverture politique, liberté de parole et de presse permettant de critiquer les dysfonctionnements, la corruption et les pages sombres du passé soviétique.\n• Parallèlement, Gorbatchev renonce à la doctrine Brejnev d’intervention militaire chez les alliés et retire l’Armée rouge d’Afghanistan (1988-1989).',
    keyRule: 'Perestroïka = restructuration économique ; Glasnost = transparence politique et liberté d’expression.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q2',
      type: 'mcq',
      prompt: 'Que signifie précisément le terme russe « Glasnost » dans la politique de Mikhaïl Gorbatchev ?',
      options: [
        'La fermeture totale des frontières de l’URSS',
        'La transparence politique et la liberté d’expression et d’information',
        'La collectivisation forcée des terres agricoles',
        'Le déploiement de nouveaux missiles en Europe',
      ],
      correctAnswerIndex: 1,
      explanation: 'La Glasnost (« transparence ») autorise la critique ouverte et libère la presse, accélérant les revendications démocratiques et nationales.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: '1989-1990',
    stepTheme: 'violet',
    stepTitle: 'L’effondrement du bloc de l’Est et la chute du Mur de Berlin',
    paragraphText:
      'Privés du soutien militaire soviétique, les régimes communistes d’Europe de l’Est tombent les uns après les autres en 1989 (Pologne avec Solidarność de Lech Wałęsa, Hongrie, Tchécoslovaquie avec la « révolution de velours », Roumanie).\nLe 9 novembre 1989, le Mur de Berlin est ouvert puis détruit par les Berlinois, ouvrant la voie à la réunification allemande le 3 octobre 1990, puis à la dissolution du CAEM et du Pacte de Varsovie en 1991.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q3',
      type: 'mcq',
      prompt: 'À quelle date historique le Mur de Berlin est-il tombé, symbolisant l’effondrement du bloc de l’Est ?',
      options: [
        'Le 13 août 1961',
        'Le 9 novembre 1989',
        'Le 3 octobre 1990',
        'Le 25 décembre 1991',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le Mur de Berlin tombe dans la soirée du 9 novembre 1989 ; la réunification officielle des deux Allemagnes intervient le 3 octobre 1990.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Implosion (1991)',
    stepTheme: 'violet',
    stepTitle: 'Réveil des nationalités, putsch d’août 1991 et fin de l’URSS',
    paragraphText:
      '• La Glasnost réveille les nationalismes dans les républiques fédérées (pays baltes, Caucase, Ukraine).\n• Du 18 au 23 août 1991, des conservateurs communistes tentent un putsch contre Gorbatchev, mais échouent face à la résistance populaire menée à Moscou par Boris Eltsine, président de la Russie.\n• Le PCUS est dissous ; en décembre 1991 (accords de Minsk puis d’Alma-Ata le 21 décembre), 11 républiques créent la Communauté des États indépendants (CEI).\n• Le 25 décembre 1991, Mikhaïl Gorbatchev démissionne : le drapeau rouge est abaissé au Kremlin, l’URSS cesse d’exister et le monde devient unipolaire.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q4',
      type: 'mcq',
      prompt: 'Quelle nouvelle structure souple remplace l’URSS en décembre 1991 entre onze anciennes républiques soviétiques ?',
      options: [
        'L’Union européenne (UE)',
        'La Communauté des États indépendants (CEI)',
        'Le Pacte de Varsovie rénové',
        'L’OCDE',
      ],
      correctAnswerIndex: 1,
      explanation: 'La CEI (Communauté des États indépendants) est créée en décembre 1991, actant la dissolution définitive de l’Union soviétique.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège chronologique',
    stepTheme: 'orange',
    stepTitle: 'Distinguer 1989 (bloc de l’Est) et décembre 1991 (URSS)',
    paragraphText:
      '• Ne pas confondre la chute du Mur de Berlin (9 novembre 1989) et la disparition de l’URSS (25 décembre 1991).\n• Entre novembre 1989 et décembre 1991, l’URSS existe encore deux ans mais perd ses satellites européens, son économie s’effondre et ses républiques proclament leur indépendance jusqu’à la démission de Gorbatchev le 25 décembre 1991.',
    konanTip: '9 nov. 1989 = chute du Mur ; 3 oct. 1990 = réunification allemande ; 25 déc. 1991 = démission de Gorbatchev et fin de l’URSS.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q5',
      type: 'mcq',
      prompt: 'À quelle date Mikhaïl Gorbatchev démissionne-t-il de la présidence, marquant la disparition juridique de l’URSS ?',
      options: [
        'Le 9 novembre 1989',
        'Le 25 décembre 1991',
        'Le 11 septembre 2001',
        'Le 23 mai 1986',
      ],
      correctAnswerIndex: 1,
      explanation: 'Mikhaïl Gorbatchev annonce sa démission le 25 décembre 1991, mettant fin à l’URSS et à l’ère de la bipolarisation.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Bilan 1947-1991',
    stepTheme: 'slate',
    stepTitle: 'Quel nouveau monde surgit au lendemain de 1991 ?',
    paragraphText:
      'Avec l’effondrement de l’URSS, la bipolarisation de 1947-1991 s’achève sans guerre mondiale.\nLes États-Unis demeurent la seule superpuissance globale : le système international bascule alors, pour une décennie, dans un monde unipolaire (leçon 3).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q6',
      type: 'mcq',
      prompt: 'Quelle configuration géopolitique succède immédiatement à la disparition de l’URSS en décembre 1991 ?',
      options: [
        'Un monde unipolaire dominé par l’hyperpuissance des États-Unis',
        'Une nouvelle bipolarisation entre la France et le Royaume-Uni',
        'La dissolution de l’ONU au profit du Kominform',
        'Le retour au système colonial de 1919',
      ],
      correctAnswerIndex: 0,
      explanation: 'Sans rival soviétique, les États-Unis s’imposent durant les années 1990 comme la seule superpuissance mondiale (unipolarité).',
    },
  },
];

export const HIST_TLE_T1_L02_ERE_BIPOLARISATION: CurriculumChapter = {
  id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation',
  subjectId: 'histoire_geo',
  gradeLevel: 'terminale_c',
  alsoForGrades: ['terminale_d', 'terminale_a1', 'terminale_a2'],
  order: 2,
  title: "Thème 1, leçon 2 : L'ère de la bipolarisation de 1947 à 1991",
  summary:
    "Rupture de la Grande Alliance et formation des blocs (1947-1955), crises de Berlin et de Cuba, coexistence pacifique, guerre du Viêtnam et effondrement de l'URSS.",
  officialVolumeHours: 6,
  contentVersion: 2,
  source: 'Tle_H2-_Lère_de_la_bipolarisation_de_1947_à_1991.pdf',
  points: [
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p01',
      order: 1,
      title: 'De la Grande Alliance à la rupture de 1947',
      summary: 'Comprendre les désaccords d’après-guerre, le « rideau de fer » et le basculement idéologique de 1947.',
      conceptExplanation:
        'Dès 1945-1946, l’alliance antifasciste se fissure sur la question polonaise et allemande. Après le discours de Winston Churchill sur le « rideau de fer » (mars 1946), l’année 1947 scelle la rupture : doctrine Truman d’endiguement (mars), plan Marshall (juin) et doctrine Jdanov accompagnée du Kominform (septembre-octobre).',
      keyRule: '1947 = année de la rupture : Truman (mars), Marshall (juin), Jdanov et Kominform (sept.-oct.).',
      formulas: [],
      workedExample: {
        title: 'Expliquer l’enchaînement des événements de 1947',
        statement: 'Pourquoi le plan Marshall accélère-t-il la formation du bloc soviétique ?',
        methodSteps: [
          'Proposé à toute l’Europe en juin 1947, il exige un contrôle économique multilatéral que l’URSS juge incompatible avec son système.',
          'Staline interdit aux pays d’Europe de l’Est d’y participer et réplique par la doctrine Jdanov et le Kominform.',
        ],
        conclusion: 'Le plan Marshall scinde économiquement et politiquement le continent européen en deux camps.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p02',
      order: 2,
      title: 'La structuration économique et militaire des deux blocs',
      summary: 'Comparer les alliances militaires (OTAN, Pacte de Varsovie) et économiques (OECE, COMECON) des deux camps.',
      conceptExplanation:
        'Entre 1948 et 1955, chaque camp se dote de structures durables : à l’Ouest, OECE (1948) puis OCDE (1961) et OTAN (4 avril 1949) complétée par ANZUS, OTASE et CENTO ; à l’Est, CAEM/COMECON (25 janvier 1949) et Pacte de Varsovie (14 mai 1955) en réponse à l’entrée de la RFA dans l’OTAN.',
      keyRule: 'OTAN = 4 avril 1949 ; COMECON = 25 janvier 1949 ; Pacte de Varsovie = 14 mai 1955.',
      formulas: [],
      workedExample: {
        title: 'Éviter la symétrie mécanique entre 1949 et 1955',
        statement: 'Un élève écrit que le Pacte de Varsovie a été créé en 1949 en même temps que l’OTAN. Corrigez cette erreur.',
        methodSteps: [
          'En 1949, l’URSS crée le CAEM (COMECON) sur le plan économique, tandis que l’Ouest crée l’OTAN sur le plan militaire.',
          'Le Pacte de Varsovie n’apparaît que le 14 mai 1955, après le réarmement de la RFA.',
        ],
        conclusion: 'Six années séparent la création de l’OTAN (1949) de celle du Pacte de Varsovie (1955).',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p03',
      order: 3,
      title: 'Les deux crises de Berlin (1948-1949 et 1958-1961)',
      summary: 'Analyser le blocus de Berlin, la naissance de la RFA et de la RDA, puis l’édification du Mur de Berlin.',
      conceptExplanation:
        'Berlin, ancienne capitale divisée en quatre secteurs au cœur de la zone soviétique, concentre les tensions européennes. Le blocus de 1948-1949 échoue grâce au pont aérien américain et aboutit à la création de la RFA (mai 1949) et de la RDA (octobre 1949). Face à l’exode massif de plus de 2 millions d’Est-Allemands, Moscou et Berlin-Est érigent le Mur de Berlin dans la nuit du 12 au 13 août 1961.',
      keyRule: 'Blocus 1948-1949 -> deux Allemagnes ; fuite vers l’Ouest et échec de Paris (1960) -> Mur du 13 août 1961.',
      formulas: [],
      workedExample: {
        title: 'Relier causes et effets dans les crises berlinoises',
        statement: 'Pourquoi les dirigeants de la RDA construisent-ils le Mur en août 1961 plutôt qu’un nouveau blocus ?',
        methodSteps: [
          'Le blocus de 1948-1949 avait échoué devant le pont aérien occidental.',
          'En 1961, l’objectif de la RDA est d’enfermer sa propre population pour stopper l’hémorragie de main-d’œuvre qualifiée.',
        ],
        conclusion: 'Le Mur ferme hermétiquement Berlin-Ouest sans couper ses voies d’approvisionnement avec l’Ouest.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p04',
      order: 4,
      title: 'La crise des fusées de Cuba (octobre 1962)',
      summary: 'Retracer l’origine castriste de la crise, le face-à-face Kennedy-Khrouchtchev et le compromis d’octobre 1962.',
      conceptExplanation:
        'Rapproché de Moscou après la révolution de 1959 et l’échec de la Baie des Cochons (avril 1961), Cuba accueille en 1962 des missiles nucléaires soviétiques. John F. Kennedy impose le 22 octobre 1962 une quarantaine navale. Sous l’impulsion de négociations directes et de la médiation d’U Thant, Moscou retire ses fusées contre la promesse américaine de ne pas envahir Cuba et le retrait des fusées Jupiter de Turquie et d’Italie, ouvrant l’ère du téléphone rouge (1963).',
      keyRule: 'Octobre 1962 : apogée du péril atomique débouchant sur la négociation directe et le téléphone rouge (1963).',
      formulas: [],
      workedExample: {
        title: 'Montrer pourquoi Cuba est un tournant vers la Détente',
        statement: 'En quoi la crise de Cuba change-t-elle l’attitude de Washington et de Moscou après octobre 1962 ?',
        methodSteps: [
          'Les deux dirigeants prennent conscience qu’un malentendu peut déclencher l’apocalypse nucléaire.',
          'Ils installent le téléphone rouge (juin 1963) et signent le traité de Moscou (août 1963).',
        ],
        conclusion: 'Cuba transforme la guerre froide aiguë en coexistence encadrée et dialoguée.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p05',
      order: 5,
      title: 'Coexistence pacifique, fissures des blocs et Détente',
      summary: 'Étudier le dégel après 1953, les contestations internes des blocs et les grands traités de désarmement.',
      conceptExplanation:
        'Amorcée après la mort de Staline (5 mars 1953) et formulée au XXe congrès du PCUS (1956), la coexistence pacifique repose sur l’équilibre de la terreur. Elle s’accompagne de contestations internes (De Gaulle en France, schisme sino-soviétique, Hongrie 1956, Printemps de Prague 1968) et d’une série de traités majeurs : Moscou (1963), TNP (1968), SALT 1 (1972), Helsinki (1975), puis INF (1987) et START (1991) après la « guerre fraîche » (1979-1985).',
      keyRule: 'Retenir les traités clés : Moscou (1963), TNP (1968), SALT 1 (1972), Helsinki (1975), Washington INF (1987), START (1991).',
      formulas: [],
      workedExample: {
        title: 'Nuancer l’unité des deux blocs durant la Détente',
        statement: 'Les blocs étaient-ils parfaitement obéissants dans les années 1960 ?',
        methodSteps: [
          'À l’Ouest, de Gaulle quitte le commandement intégré de l’OTAN en 1966.',
          'À l’Est, la Chine rompt avec Moscou et le Printemps de Prague (1968) doit être écrasé par les chars du Pacte de Varsovie.',
        ],
        conclusion: 'La Détente libère des aspirations d’autonomie qui fragilisent la discipline des deux camps.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p06',
      order: 6,
      title: 'Une Détente contrariée : la deuxième guerre du Viêtnam (1964-1975)',
      summary: 'Comprendre l’engrenage vietnamien de Genève (1954) aux accords de Paris (1973) et à la chute de Saïgon (1975).',
      conceptExplanation:
        'Héritée de la partition au 17e parallèle décidée à Genève (21 juillet 1954), la guerre du Viêtnam oppose dès 1964 les États-Unis (incident du golfe du Tonkin) au Nord-Viêtnam et au Viêt-Cong soutenus par Moscou et Pékin. Malgré 545 000 soldats américains, l’offensive du Têt (janvier 1968) impose la vietnamisation de Nixon, les accords de Paris (27 janvier 1973), puis la chute de Saïgon (30 avril 1975).',
      keyRule: 'Le Viêtnam prouve que la Détente en Europe n’empêche pas des guerres périphériques acharnées dans le Tiers-Monde.',
      formulas: [],
      workedExample: {
        title: 'Expliquer l’échec militaire et politique américain au Viêtnam',
        statement: 'Comment la première puissance militaire mondiale a-t-elle pu perdre au Viêtnam ?',
        methodSteps: [
          'La guérilla du FNL s’appuie sur la connaissance du terrain et le soutien logistique sino-soviétique.',
          'L’enlisement humain et l’offensive du Têt retournent l’opinion publique américaine contre le conflit.',
        ],
        conclusion: 'Sans soutien intérieur ni solution militaire sur le terrain, Washington doit signer le retrait à Paris en 1973.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l02_ere_bipolarisation_p07',
      order: 7,
      title: 'Désagrégation du bloc soviétique et fin de la guerre froide (1985-1991)',
      summary: 'Analyser la Perestroïka et la Glasnost de Gorbatchev, la chute du Mur (1989) et la disparition de l’URSS (1991).',
      conceptExplanation:
        'Confronté à une crise économique et militaire aiguë, Mikhaïl Gorbatchev lance à partir de 1985-1986 la Perestroïka et la Glasnost et renonce à la doctrine Brejnev. Ce tournant déclenche l’effondrement pacifique des démocraties populaires, la chute du Mur de Berlin (9 novembre 1989), la réunification allemande (3 octobre 1990), puis, après le putsch raté d’août 1991, la création de la CEI et la démission de Gorbatchev le 25 décembre 1991.',
      keyRule: '9 novembre 1989 : chute du Mur de Berlin ; 25 décembre 1991 : démission de Gorbatchev et fin de l’URSS.',
      formulas: [],
      workedExample: {
        title: 'Expliquer comment les réformes de Gorbatchev ont précipité la fin de l’URSS',
        statement: 'Gorbatchev voulait-il détruire l’URSS en lançant la Perestroïka et la Glasnost ?',
        methodSteps: [
          'Son intention initiale était de moderniser et de sauver le socialisme soviétique.',
          'Mais la Glasnost libère les revendications nationales et démocratiques, et le refus d’intervenir militairement libère l’Europe de l’Est.',
        ],
        conclusion: 'En voulant réformer un système figé de l’intérieur, Gorbatchev libère des forces qui provoquent sa dissolution en 1991.',
      },
      structuredSteps: p07Steps,
      exercises: p07Steps.map((s) => s.exercise),
    },
  ],
};

