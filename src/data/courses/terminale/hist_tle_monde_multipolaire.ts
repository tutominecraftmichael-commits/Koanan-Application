import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Tle_H3-De_la_fin_de_la_guerre_froide_vers_un_monde_multipolaire.pdf » (format v2 : mini-leçons de 6 étapes).

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Concept central',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce qu’un monde unipolaire et une hyperpuissance ?',
    paragraphText:
      '• Monde unipolaire (1991-2001) : système international dominé par un seul pôle majeur sans rival équivalent après la disparition de l’URSS en décembre 1991.\n• Hyperpuissance : terme forgé par l’ancien ministre français Hubert Védrine pour qualifier les États-Unis dans les années 1990, car leur supériorité s’exerce simultanément dans les domaines militaire, économique, technologique, diplomatique et culturel.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q1',
      type: 'mcq',
      prompt: 'Pourquoi parle-t-on de « monde unipolaire » au lendemain de la disparition de l’URSS en 1991 ?',
      options: [
        'Parce que tous les États ont fusionné en un gouvernement mondial unique',
        'Parce que les États-Unis restent la seule superpuissance globale sans rival stratégique équivalent',
        'Parce que la Chine dirigeait seule le Conseil de sécurité de l’ONU',
        'Parce que l’Union européenne avait remplacé l’OTAN dès 1991',
      ],
      correctAnswerIndex: 1,
      explanation: 'La fin de l’URSS en 1991 laisse les États-Unis en position d’hyperpuissance dominante durant une décennie.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Hard Power',
    stepTheme: 'violet',
    stepTitle: 'Les fondements militaires et diplomatiques de l’hyperpuissance',
    paragraphText:
      '• Puissance militaire sans égale : premier budget de défense mondial (atteignant environ 740 milliards de dollars à l’époque contemporaine, soit près de 40 % des dépenses militaires mondiales), réseau planétaire de bases militaires, de flottes aéronavales et d’alliances (OTAN élargie à l’Est).\n• Poids politique : influence décisive au sein du Conseil de sécurité de l’ONU, du G7 et des grandes enceintes diplomatiques.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q2',
      type: 'mcq',
      prompt: 'Quel outil illustre la puissance militaire et sécuritaire globale des États-Unis après 1991 ?',
      options: [
        'La dissolution complète de l’OTAN en 1992',
        'Un budget militaire sans équivalent, des flottes sur tous les océans et le leadership sur l’OTAN',
        'L’adhésion des États-Unis au Pacte de Varsovie',
        'La suppression de toutes les bases américaines à l’étranger',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les États-Unis disposent d’une capacité de projection militaire planétaire inégalée dans les années 1990.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Économie & Tech',
    stepTheme: 'violet',
    stepTitle: 'Dollar, Wall Street, GAFAM et avance technologique',
    paragraphText:
      '• Économie et finance : première économie mondiale dans les années 1990, statut du dollar comme monnaie de réserve et d’échange internationale, puissance de Wall Street et poids déterminant au FMI et à la Banque mondiale.\n• Technologie : maîtrise de l’espace et du renseignement (NASA, NSA, GPS) et domination de la révolution numérique portée par les firmes de la Silicon Valley (Microsoft, Apple, Google, Amazon, Meta).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q3',
      type: 'mcq',
      prompt: 'Quel pilier financier assure aux États-Unis un levier majeur sur l’économie mondiale ?',
      options: [
        'L’utilisation du rouble dans le commerce atlantique',
        'Le statut du dollar comme principale monnaie de réserve internationale et le poids de Wall Street',
        'Le contrôle exclusif des réserves d’or africaines',
        'La nationalisation de toutes les banques européennes',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le dollar, les bourses américaines et l’influence au FMI/Banque mondiale donnent aux États-Unis une hégémonie financière majeure.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Soft Power',
    stepTheme: 'blue',
    stepTitle: 'Le Soft Power américain : séduction culturelle et modèle de vie',
    paragraphText:
      '• Soft Power (concept théorisé par Joseph Nye) : capacité d’un État à influencer les autres pays sans contrainte armée, par l’attractivité de sa culture, de ses valeurs et de son mode de vie.\n• Aux États-Unis, il s’appuie sur la langue anglaise, Hollywood, les séries, la musique, les grandes universités (Harvard, MIT), la restauration rapide et la diffusion planétaire de l’« American way of life ».',
    keyRule: 'Hyperpuissance = Hard Power (armée, économie) + Soft Power (culture, universités, numérique, valeurs).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q4',
      type: 'mcq',
      prompt: 'Comment définit-on le « Soft Power » dans les relations internationales ?',
      options: [
        'Le recours systématique aux bombardements préventifs',
        'La capacité d’influencer les autres États par la séduction culturelle, idéologique, universitaire et technologique',
        'L’imposition d’un blocus naval autour d’un pays rival',
        'La signature d’un pacte militaire secret',
      ],
      correctAnswerIndex: 1,
      explanation: 'Contrairement au Hard Power (force militaire et sanctions économiques), le Soft Power agit par l’attractivité culturelle et les idées.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège de copie',
    stepTheme: 'orange',
    stepTitle: 'Ne pas réduire l’hyperpuissance au seul aspect militaire',
    paragraphText:
      'Une erreur fréquente au BAC est de n’évoquer que l’armée américaine pour expliquer la suprématie des années 1990.\nOr, la force des États-Unis vient de la combinaison unique entre puissance matérielle (Hard Power) et rayonnement culturel/numérique (Soft Power), qui rend leur modèle attrayant jusque dans les anciens pays du bloc de l’Est.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q5',
      type: 'mcq',
      prompt: 'Lequel de ces exemples illustre directement le Soft Power américain plutôt que le Hard Power ?',
      options: [
        'Le déploiement de porte-avions dans le golfe Persique',
        'Le rayonnement mondial d’Hollywood, des universités américaines et des plateformes numériques',
        'Les sanctions économiques votées contre un État rival',
        'La modernisation de l’arsenal nucléaire stratégique',
      ],
      correctAnswerIndex: 1,
      explanation: 'Cinéma, enseignement supérieur et culture numérique diffusent les normes et l’image des États-Unis sans recours à la force.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Idéologie',
    stepTheme: 'slate',
    stepTitle: 'Le « nouvel ordre mondial » proclamé par George H. W. Bush',
    paragraphText:
      'En 1990-1991, le président George H. W. Bush annonce l’avènement d’un « nouvel ordre mondial » fondé sur la démocratie libérale, l’économie de marché et le respect du droit international garanti par le leadership américain et l’ONU.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q6',
      type: 'mcq',
      prompt: 'Quel président américain formule l’idée d’un « nouvel ordre mondial » au moment de la fin de la guerre froide ?',
      options: [
        'George H. W. Bush',
        'Lyndon B. Johnson',
        'Harry Truman',
        'Dwight Eisenhower',
      ],
      correctAnswerIndex: 0,
      explanation: 'George H. W. Bush proclame un « nouvel ordre mondial » lors de la crise du Golfe en 1990-1991.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Rôle mondial',
    stepTheme: 'blue',
    stepTitle: 'Qu’entend-on par « gendarme du monde » et « nation-building » ?',
    paragraphText:
      '• « Gendarme du monde » : rôle assumé par les États-Unis dans les années 1990 pour maintenir l’ordre international, sanctionner les États agresseurs et arbitrer les conflits régionaux.\n• « Nation-building » (reconstruction nationale) : doctrine promue notamment sous Bill Clinton (1993-2001) visant à intervenir dans des États en crise pour y restaurer la sécurité et des institutions démocratiques.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02_q1',
      type: 'mcq',
      prompt: 'Que recouvre l’expression « les États-Unis, gendarme du monde » durant la décennie 1991-2001 ?',
      options: [
        'Leur intervention directe dans de nombreuses crises régionales pour y imposer le droit et l’ordre international',
        'Leur refus de participer à toute opération internationale hors d’Amérique',
        'La suppression de leur armée de terre après 1991',
        'Le transfert de leurs bases militaires sous commandement russe',
      ],
      correctAnswerIndex: 0,
      explanation: 'Seule superpuissance après 1991, Washington joue le rôle d’arbitre et de force d’intervention dans les conflits majeurs.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Interventions clés',
    stepTheme: 'violet',
    stepTitle: 'Panorama des interventions américaines de 1991 à 1999',
    paragraphText:
      'Entre 1991 et 1999, les États-Unis multiplient les opérations militaires et diplomatiques sur plusieurs continents, tantôt avec mandat explicite de l’ONU, tantôt via l’OTAN.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Principales interventions américaines de la décennie unipolaire (1991-1999)',
      caption: 'Des succès rapides en guerre conventionnelle ou diplomatie aux limites rencontrées en Somalie.',
      tableData: {
        headers: ['Année', 'Théâtre / Opération', 'Cadre et bilan'],
        rows: [
          ['1991', 'Guerre du Golfe (Tempête du désert)', 'Mandat ONU : coalition de 34 pays menée par les USA pour libérer le Koweït envahi par l’Irak de Saddam Hussein'],
          ['1992-1994', 'Somalie (Restore Hope)', 'Mandat ONU humanitaire ; embuscade à Mogadiscio et retrait américain en 1994'],
          ['1994', 'Haïti (Uphold Democracy)', 'Intervention sous mandat ONU rétablissant le président élu Jean-Bertrand Aristide'],
          ['1995', 'Bosnie-Herzégovine (Accords de Dayton)', 'Frappes OTAN puis médiation US : signature de la paix à Dayton le 21 novembre 1995'],
          ['1999', 'Kosovo (Allied Force)', 'Campagne aérienne de l’OTAN contre la Serbie sans mandat explicite du Conseil de sécurité'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02_q2',
      type: 'mcq',
      prompt: 'Quel événement déclenche la guerre du Golfe (opération Tempête du désert) conduite par les États-Unis sous mandat de l’ONU en 1991 ?',
      options: [
        'L’annexion du Koweït par l’Irak de Saddam Hussein en août 1990',
        'La chute du Mur de Berlin',
        'L’élection de Nelson Mandela en Afrique du Sud',
        'Les attentats du 11 septembre 2001',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’Irak envahit le Koweït en août 1990 ; l’ONU autorise le recours à la force et une coalition menée par les États-Unis libère le Koweït en février 1991.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Balkans (1995)',
    stepTheme: 'slate',
    stepTitle: 'Les accords de Dayton (1995) : réussite diplomatique américaine',
    paragraphText:
      'Face à l’impuissance européenne durant la guerre de Bosnie-Herzégovine (1992-1995, marquée par la purification ethnique et le massacre de Srebrenica), les frappes de l’OTAN puis la médiation ferme de Washington imposent les accords de Dayton (21 novembre 1995), qui mettent fin à trois ans de guerre.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02_q3',
      type: 'mcq',
      prompt: 'À quel conflit les accords de Dayton (21 novembre 1995), négociés sous l’égide des États-Unis, ont-ils mis fin ?',
      options: [
        'La guerre civile au Libéria',
        'La guerre de Bosnie-Herzégovine (ex-Yougoslavie)',
        'La guerre du Viêtnam',
        'La crise des fusées de Cuba',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les accords de Dayton (novembre 1995) rétablissent la paix en Bosnie-Herzégovine grâce à l’engagement militaire et diplomatique américain.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Limites précoces',
    stepTheme: 'orange',
    stepTitle: 'Somalie (1993) et Kosovo (1999) : les limites du gendarme',
    paragraphText:
      'Même à l’apogée de l’unipolarité, deux signaux annoncent des limites :\n• En Somalie (1992-1994, opération Restore Hope), les pertes américaines à Mogadiscio (octobre 1993) provoquent un retrait rapide et expliquent en partie la passivité de Washington lors du génocide au Rwanda en 1994.\n• Au Kosovo (1999), l’OTAN intervient contre la Serbie sans résolution préalable du Conseil de sécurité (contournement de l’ONU face au veto russe/chinois).',
    konanTip: 'Ne présente pas les années 1990 comme un succès total : cite l’échec de Somalie (1993-1994) et le contournement de l’ONU au Kosovo (1999).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02_q4',
      type: 'mcq',
      prompt: 'Quelle conséquence directe l’échec sanglant de l’opération Restore Hope en Somalie (1993) a-t-il eue sur la politique étrangère américaine ?',
      options: [
        'Le retrait américain de Somalie et une grande frilosité à intervenir en Afrique (notamment au Rwanda en 1994)',
        'L’occupation durable de toute la Corne de l’Afrique par les États-Unis',
        'L’entrée de la Somalie dans l’Union européenne',
        'La rupture de l’alliance entre les États-Unis et le Royaume-Uni',
      ],
      correctAnswerIndex: 0,
      explanation: 'Traumatisés par les images de Mogadiscio en octobre 1993, les États-Unis retirent leurs troupes et refusent d’intervenir au Rwanda en 1994.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Multilatéral vs Unilatéral',
    stepTheme: 'green',
    stepTitle: 'Comparer 1991 (Irak/Koweït) et 1999 (Kosovo)',
    paragraphText:
      '• En 1991 (Guerre du Golfe), les États-Unis agissent dans un cadre multilatéral strict, appuyé par des résolutions du Conseil de sécurité de l’ONU.\n• En 1999 (Kosovo), face au blocage du Conseil de sécurité, Washington privilégie l’OTAN sans mandat onusien : c’est une étape vers l’unilatéralisme qui s’accentuera en 2003 en Irak.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02_q5',
      type: 'mcq',
      prompt: 'En quoi l’intervention au Kosovo en 1999 marque-t-elle une évolution par rapport à la guerre du Golfe de 1991 ?',
      options: [
        'En 1999, l’OTAN frappe sans autorisation explicite du Conseil de sécurité de l’ONU',
        'En 1999, les États-Unis combattent aux côtés de la Russie contre le Royaume-Uni',
        'En 1991, l’ONU avait interdit toute coalition internationale',
        'En 1999, aucune force aérienne n’est employée',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le Kosovo en 1999 inaugure le recours à la force par une alliance occidentale hors mandat explicite du Conseil de sécurité.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Haïti 1994',
    stepTheme: 'slate',
    stepTitle: 'L’opération Uphold Democracy en Haïti (1994)',
    paragraphText:
      'En 1994, sous mandat du Conseil de sécurité, les États-Unis conduisent l’opération « Uphold Democracy » pour obtenir le départ de la junte militaire haïtienne et rétablir le président démocratiquement élu Jean-Bertrand Aristide, illustrant la logique du « nation-building ».',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02_q6',
      type: 'mcq',
      prompt: 'Quel était l’objectif de l’opération américaine « Uphold Democracy » menée en Haïti en 1994 ?',
      options: [
        'Annexer l’île comme 51e État américain',
        'Rétablir le président démocratiquement élu Jean-Bertrand Aristide renversé par un coup d’État',
        'Installer des bases de missiles soviétiques dans les Caraïbes',
        'Mettre fin à la guerre du Golfe',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’intervention de 1994 vise à restaurer l’ordre constitutionnel et le président Aristide en Haïti.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Tournant historique',
    stepTheme: 'blue',
    stepTitle: 'Les attentats du 11 septembre 2001 : un séisme planétaire',
    paragraphText:
      '• Le 11 septembre 2001, quatre avions de ligne américains sont détournés par des terroristes d’Al-Qaïda (réseau islamiste dirigé par Oussama Ben Laden) : deux s’écrasent sur les tours jumelles du World Trade Center à New York, un troisième frappe le Pentagone à Washington et le quatrième (vol United 93) s’écrase en Pennsylvanie.\n• Bilan : près de 3 000 morts. Pour la première fois depuis Pearl Harbor (1941), le territoire américain est directement frappé au cœur de ses symboles économiques et militaires.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03_q1',
      type: 'mcq',
      prompt: 'Quelle organisation terroriste dirigée par Oussama Ben Laden a perpétré les attentats du 11 septembre 2001 aux États-Unis ?',
      options: [
        'Al-Qaïda',
        'Le Viêt-Cong',
        'Le Kominform',
        'L’OTASE',
      ],
      correctAnswerIndex: 0,
      explanation: 'Les attentats du 11 septembre 2001 sont orchestrés par le réseau Al-Qaïda d’Oussama Ben Laden.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Doctrine Bush',
    stepTheme: 'violet',
    stepTitle: 'Guerre contre le terrorisme, « Axe du Mal » et Afghanistan (2001)',
    paragraphText:
      '• Le président George W. Bush proclame la « guerre globale contre le terrorisme » et adopte la doctrine de la guerre préventive : frapper les menaces avant qu’elles ne se matérialisent.\n• Il dénonce un « Axe du Mal » et des « États voyous » (Irak, Iran, Corée du Nord, Syrie).\n• En octobre 2001, appuyés par une large coalition et un mandat onusien, les États-Unis interviennent en Afghanistan pour renverser le régime des talibans qui abritait Al-Qaïda.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03_q2',
      type: 'mcq',
      prompt: 'Pourquoi les États-Unis et une coalition internationale interviennent-ils militairement en Afghanistan dès octobre 2001 ?',
      options: [
        'Pour récupérer le canal de Suez',
        'Parce que le régime des talibans refusait de livrer Oussama Ben Laden et abritait les bases d’Al-Qaïda',
        'Pour soutenir l’armée soviétique sur place',
        'Pour imposer les accords de Dayton',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’intervention en Afghanistan (octobre 2001) vise à démanteler les sanctuaires d’Al-Qaïda et à renverser les talibans.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Rupture de 2003',
    stepTheme: 'violet',
    stepTitle: 'La guerre unilatérale en Irak (2003) et ses conséquences',
    paragraphText:
      '• En mars 2003, invoquant la présence supposée d’armes de destruction massive (jamais retrouvées) et des liens fictifs avec Al-Qaïda, George W. Bush envahit l’Irak de Saddam Hussein sans l’autorisation du Conseil de sécurité de l’ONU (opposition nette de la France, de l’Allemagne, de la Russie et de la Chine).\n• L’enlisement dans une guerre civile sanglante, les scandales des prisons (Guantánamo, Abou Ghraib) et le coût budgétaire immense brisent la légitimité morale et diplomatique de l’unipolarité américaine.',
    keyRule: '2003 (Irak sans aval de l’ONU) fissure le camp occidental et accélère le recul du leadership américain.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03_q3',
      type: 'mcq',
      prompt: 'Qu’est-ce qui distingue profondément l’intervention en Irak (2003) de la guerre du Golfe (1991) et de l’Afghanistan (2001) ?',
      options: [
        'La guerre d’Irak de 2003 est lancée sans mandat du Conseil de sécurité de l’ONU et divise les alliés occidentaux',
        'La guerre de 2003 a été financée par l’URSS',
        'En 2003, la France et la Russie ont mené l’invasion aux côtés de George W. Bush',
        'En 2003, aucune troupe terrestre américaine n’est entrée en Irak',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’invasion unilatérale de l’Irak en 2003, sans aval de l’ONU et fondée sur des preuves contestées, isole diplomatiquement Washington.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège de date',
    stepTheme: 'orange',
    stepTitle: 'Attention : 11 septembre 2001 (et jamais 2011 !)',
    paragraphText:
      'Une faute d’inattention fréquente consiste à écrire 2011 au lieu de 2001 pour les attentats de New York et Washington.\nRepère sûr : 11 septembre 2001 -> Afghanistan (octobre 2001) -> Irak (mars 2003). En 2011, au contraire, les États-Unis achèvent leur retrait militaire d’Irak et éliminent Ben Laden au Pakistan.',
    konanTip: '11 septembre 2001 = attentats ; 2003 = Irak ; 2008 = crise financière des subprimes ; 2021 = retrait chaotique d’Afghanistan.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03_q4',
      type: 'mcq',
      prompt: 'Quelle suite chronologique est rigoureusement exacte ?',
      options: [
        'Irak (2001) -> Attentats de New York (2003) -> Afghanistan (2011)',
        'Attentats du 11 septembre (2001) -> Intervention en Afghanistan (oct. 2001) -> Invasion de l’Irak (mars 2003)',
        'Crise financière de 2008 -> Attentats du 11 septembre (2011) -> Guerre du Golfe (2015)',
        'Accords de Dayton (2001) -> Chute du Mur (2003) -> Guerre d’Irak (2008)',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les attentats du 11 septembre 2001 précèdent immédiatement l’Afghanistan (octobre 2001) puis l’invasion de l’Irak (mars 2003).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Essoufflement',
    stepTheme: 'slate',
    stepTitle: '2008-2021 : crise économique et repli stratégique américain',
    paragraphText:
      'À l’usure militaire s’ajoute la crise financière mondiale partie de l’immobilier américain en 2008 (crise des subprimes), qui fragilise le modèle économique américain.\nSous Barack Obama, Donald Trump puis Joe Biden, les États-Unis réduisent leurs engagements extérieurs coûteux (retrait d’Irak en 2011, retrait d’Afghanistan en août 2021) pour recentrer leur attention sur la rivalité avec la Chine.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03_q5',
      type: 'mcq',
      prompt: 'Quel événement économique parti des États-Unis en 2008 accélère le basculement vers un monde multipolaire ?',
      options: [
        'Le lancement du plan Marshall',
        'La crise financière des subprimes',
        'La création du rouble transférable',
        'La dissolution de l’OMC',
      ],
      correctAnswerIndex: 1,
      explanation: 'La crise des subprimes (2008) révèle les failles du modèle financier américain tandis que les économies émergentes (notamment la Chine) prennent le relais de la croissance mondiale.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Transition',
    stepTheme: 'green',
    stepTitle: 'Comment passe-t-on de l’unipolarité à la multipolarité ?',
    paragraphText:
      'La transition résulte de deux mouvements simultanés :\n1. Un affaiblissement relatif des États-Unis (enlisement en Irak/Afghanistan, crise morale, crise de 2008).\n2. Une montée en puissance rapide de nouveaux pôles économiques, politiques et militaires en Europe, en Asie, en Amérique latine et au Moyen-Orient.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03_q6',
      type: 'mcq',
      prompt: 'Quel double phénomène explique le déclin du monde unipolaire au XXIe siècle ?',
      options: [
        'La disparition des nations européennes et la victoire de l’URSS',
        'L’essoufflement stratégique et financier des États-Unis combiné à l’émergence de nouveaux pôles de puissance',
        'L’interdiction du commerce maritime mondial',
        'Le retrait des États-Unis de l’ONU',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le monde devient multipolaire à la fois par l’usure du leadership américain et par l’ascension de la Chine, de l’UE, de la Russie et des autres émergents.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Multipolarité',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce qu’un monde multipolaire ?',
    paragraphText:
      '• Monde multipolaire : système international dans lequel le pouvoir économique, diplomatique, technologique et militaire est réparti entre plusieurs centres d’influence majeurs (États-Unis, Chine, Union européenne, Russie, Inde, Brésil, puissances régionales), et non plus monopolisé par un seul ou deux Grands.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04_q1',
      type: 'mcq',
      prompt: 'Comment caractérise-t-on un « monde multipolaire » au XXIe siècle ?',
      options: [
        'Un monde dominé sans partage par un seul État',
        'Un monde structuré autour de plusieurs centres de puissance économiques, politiques et stratégiques concurrents ou partenaires',
        'Un monde divisé uniquement en deux alliances militaires comme en 1955',
        'Un monde sans organisations internationales',
      ],
      correctAnswerIndex: 1,
      explanation: 'La multipolarité signifie la coexistence de plusieurs pôles influents (États-Unis, Chine, UE, Russie, Inde, Brésil, etc.).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Les nouveaux pôles',
    stepTheme: 'violet',
    stepTitle: 'Union européenne, BRICS et puissances émergentes',
    paragraphText:
      'Autour ou face aux États-Unis s’affirment des pôles divers aux atouts et limites contrastés : l’Union européenne, les BRICS (Brésil, Russie, Inde, Chine, Afrique du Sud — récemment élargis) et des puissances régionales au Moyen-Orient.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Principaux pôles du monde multipolaire contemporain',
      caption: 'Atouts et fragilités des grandes puissances et ensembles régionaux.',
      tableData: {
        headers: ['Pôle / Acteur', 'Atouts majeurs', 'Limites ou tensions'],
        rows: [
          ['Union européenne (UE)', 'Traité de Maastricht (1992), 27 États après le Brexit (2020), marché unique, euro, fort Soft Power', 'Divisions diplomatiques internes et dépendance militaire envers l’OTAN'],
          ['Chine', '2e économie mondiale (OMC 2001), ASEAN+3 (1997), forte présence en Afrique, siège permanent ONU', 'Tensions avec les USA, revendications en mer de Chine, vieillissement démographique'],
          ['Russie', 'Vaste territoire, hydrocarbures, arsenal nucléaire, membre des BRICS et de l’OCS (2001)', 'Économie peu diversifiée, conflits voisins (Géorgie 2008, Ukraine 2014 et 2022)'],
          ['Inde, Brésil, Afrique du Sud', 'Inde : géant démographique et informatique ; Brésil : MERCOSUR/MINUSTAH ; Afrique du Sud : pôle africain', 'Inégalités sociales internes et poids militaire global encore limité'],
          ['Moyen-Orient (Turquie, Iran, Israël, Arabie saoudite)', 'Rôle énergétique, technologique, diplomatique ou militaire régional décisif', 'Rivalités régionales chroniques et instabilité sécuritaire'],
        ],
      },
    },
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04_q2',
      type: 'mcq',
      prompt: 'Que désigne l’acronyme historique « BRICS » parmi les pôles émergents du XXIe siècle ?',
      options: [
        'Belgique, Roumanie, Italie, Canada, Suisse',
        'Brésil, Russie, Inde, Chine et Afrique du Sud',
        'Birmanie, Rwanda, Irak, Chili, Sénégal',
        'Bretagne, Royaume-Uni, Irlande, Chypre, Suède',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les BRICS réunissent initialement le Brésil, la Russie, l’Inde, la Chine et l’Afrique du Sud pour peser face aux institutions occidentales.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Chine & UE',
    stepTheme: 'violet',
    stepTitle: 'L’Union européenne et la Chine : deux géants aux profils opposés',
    paragraphText:
      '• Union européenne : créée par le traité de Maastricht (1992) et passée à 27 membres après la sortie du Royaume-Uni (Brexit effectif en 2020), l’UE est une puissance commerciale, financière (euro) et normative majeure, mais reste politiquement divisée et dépendante de l’OTAN pour sa défense.\n• Chine : entrée à l’OMC en 2001 et intégrée à l’ASEAN+3 (1997), elle devient la 2e économie mondiale, premier partenaire commercial de l’Afrique et principal rival stratégique des États-Unis (Nouvelles Routes de la soie, modernisation militaire).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04_q3',
      type: 'mcq',
      prompt: 'Quelle est la principale faiblesse géopolitique de l’Union européenne malgré son statut de géant commercial ?',
      options: [
        'L’absence totale d’industrie automobile et aéronautique',
        'Son manque d’unité politique et militaire, restant largement dépendante de l’OTAN pour sa sécurité',
        'Le fait qu’elle ne compte que 3 États membres depuis 1992',
        'Le refus d’utiliser le commerce international',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’UE est une grande puissance économique et normative (« Soft Power »), mais ses 27 membres peinent à parler d’une seule voix en politique étrangère et de défense.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Russie & Émergents',
    stepTheme: 'violet',
    stepTitle: 'Le retour de la Russie et le rôle du Brésil, de l’Inde et du Moyen-Orient',
    paragraphText:
      '• Russie : redressée économiquement dans les années 2000 grâce au gaz et au pétrole, elle s’appuie sur son armement, l’Organisation de coopération de Shanghai (OCS, 2001) et une diplomatie offensive (Géorgie 2008, Crimée/Ukraine depuis 2014, Syrie) pour contester l’unipolarité.\n• Inde (géant démographique, informatique et spatial) et Brésil (leader du MERCOSUR, engagement à l’ONU comme la MINUSTAH en Haïti) portent la voix du Sud global aux côtés des puissances régionales du Moyen-Orient (Turquie, Iran, Israël, Arabie saoudite).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04_q4',
      type: 'mcq',
      prompt: 'Quelle organisation eurasiatique fondée en 2001 associe notamment la Russie et la Chine dans les domaines sécuritaire et économique ?',
      options: [
        'L’Organisation de coopération de Shanghai (OCS)',
        'Le MERCOSUR',
        'La CEDEAO',
        'Le Pacte atlantique (OTAN)',
      ],
      correctAnswerIndex: 0,
      explanation: 'L’OCS (2001) rassemble la Chine, la Russie et plusieurs États d’Asie centrale (puis l’Inde, le Pakistan et l’Iran).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Précision géographique',
    stepTheme: 'orange',
    stepTitle: 'Royaume-Uni (Brexit 2020) et place des États-Unis aujourd’hui',
    paragraphText:
      '• C’est le Royaume-Uni (et non la seule « Angleterre ») qui a quitté l’Union européenne en 2020 (Brexit), ramenant l’UE de 28 à 27 États.\n• Attention : monde multipolaire ne signifie pas disparition de la puissance américaine ! Les États-Unis restent la première puissance militaire, financière (dollar) et numérique (GAFAM), mais doivent désormais composer avec d’autres pôles.',
    konanTip: 'Ne dis jamais que les États-Unis sont devenus faibles ; dis qu’ils ont perdu le monopole absolu des années 1990 au profit d’un équilibre multipolaire.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04_q5',
      type: 'mcq',
      prompt: 'Combien d’États membres compte l’Union européenne depuis le retrait effectif du Royaume-Uni (Brexit) en 2020 ?',
      options: [
        '15 États membres',
        '27 États membres',
        '35 États membres',
        '54 États membres',
      ],
      correctAnswerIndex: 1,
      explanation: 'Après le Brexit devenu effectif en 2020, l’Union européenne compte 27 États membres.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'L’Afrique enjeu mondial',
    stepTheme: 'slate',
    stepTitle: 'L’Afrique, terrain révélateur du monde multipolaire',
    paragraphText:
      'En Afrique (et particulièrement en Côte d’Ivoire et en Afrique de l’Ouest), la multipolarité est visible concrètement : aux partenaires traditionnels européens et américains s’ajoutent désormais massivement la Chine (infrastructures, prêts, commerce), la Russie (sécurité, énergie), la Turquie, l’Inde et les pays du Golfe.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04_q6',
      type: 'mcq',
      prompt: 'Comment la multipolarité se manifeste-t-elle concrètement dans les partenariats économiques de l’Afrique au XXIe siècle ?',
      options: [
        'Par la diversification des partenaires (Chine, UE, États-Unis, Turquie, Inde, Russie, pays du Golfe)',
        'Par l’interdiction faite à l’Afrique de commercer hors d’Europe',
        'Par la suppression de tous les ports africains',
        'Par le monopole commercial exclusif de l’URSS',
      ],
      correctAnswerIndex: 0,
      explanation: 'Les États africains traitent désormais avec une pluralité de pôles économiques et diplomatiques concurrents.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Chronologie globale',
    stepTheme: 'green',
    stepTitle: 'Distinguer les trois âges des relations internationales depuis 1945',
    paragraphText:
      'Pour situer instantanément n’importe quel sujet de BAC du Thème 1 :\n1. 1947-1991 : monde bipolaire (États-Unis contre URSS).\n2. 1991-2001 : monde unipolaire (hyperpuissance américaine, gendarme du monde).\n3. Depuis 2001 : glissement vers un monde multipolaire (11 septembre 2001, Irak 2003, crise de 2008, montée de la Chine, de l’UE et des BRICS).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q1',
      type: 'mcq',
      prompt: 'Quelle périodisation correspond exactement aux trois grandes configurations mondiales depuis 1947 ?',
      options: [
        '1947-1991 : unipolaire ; 1991-2001 : bipolaire ; depuis 2001 : colonial',
        '1947-1991 : bipolaire ; 1991-2001 : unipolaire ; depuis 2001 : vers un monde multipolaire',
        '1947-1962 : multipolaire ; 1962-1991 : unipolaire ; depuis 1991 : bipolaire',
        '1945-2025 : unipolaire continu sans aucun changement',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le monde passe de la bipolarité (1947-1991) à une parenthèse unipolaire (1991-2001) puis à la multipolarité contemporaine.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Situation d’évaluation',
    stepTheme: 'slate',
    stepTitle: 'Nuancer l’idée d’un « déclin total des États-Unis »',
    paragraphText:
      'Situation : Lors d’un exposé en Terminale, un camarade affirme que « les États-Unis ont perdu toute puissance depuis 2001 face à la Chine et aux BRICS ».\nRéponse argumentée : cette affirmation est excessive. Certes, les guerres en Irak/Afghanistan et la crise de 2008 ont réduit leur hégémonie absolue et favorisé un monde multipolaire, mais les États-Unis conservent la 1re armée mondiale, le dollar, les GAFAM et un Soft Power majeur.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q2',
      type: 'mcq',
      prompt: 'Pourquoi doit-on nuancer l’affirmation selon laquelle « les États-Unis ne sont plus une grande puissance aujourd’hui » ?',
      options: [
        'Parce qu’ils dirigent encore l’URSS',
        'Parce qu’ils conservent de solides atouts (1er budget militaire, dollar, GAFAM, recherche, Soft Power) même dans un monde multipolaire',
        'Parce que la Chine n’a aucune économie industrielle',
        'Parce que l’Union européenne a dissous toutes ses institutions en 2020',
      ],
      correctAnswerIndex: 1,
      explanation: 'On parle de recul relatif de l’hyperpuissance monopolistique, non d’effondrement de la puissance américaine.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Vocabulaire BAC',
    stepTheme: 'green',
    stepTitle: 'Maîtriser unilatéralisme, multilatéralisme, Hard Power et Soft Power',
    paragraphText:
      '• Multilatéralisme : agir en concertation avec d’autres États et sous mandat d’organisations internationales comme l’ONU (ex. Guerre du Golfe 1991).\n• Unilatéralisme : agir seul ou avec une coalition restreinte en contournant l’ONU (ex. guerre d’Irak 2003).\n• Hard Power vs Soft Power : force coercitive (armée, sanctions) contre influence attractive (culture, innovation, diplomatie).',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q3',
      type: 'mcq',
      prompt: 'Quelle attitude désigne le choix d’un État puissant d’intervenir militairement sans obtenir l’accord du Conseil de sécurité de l’ONU ?',
      options: [
        'Le multilatéralisme strict',
        'L’unilatéralisme',
        'Le non-alignement',
        'La coexistence pacifique',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’unilatéralisme consiste à privilégier son intérêt national et son action propre sans se plier aux décisions collectives internationales.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège conceptuel',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre G7, G20 et BRICS',
    paragraphText:
      '• G7 : club historique des grandes puissances industrialisées occidentales et alliées (États-Unis, Canada, Royaume-Uni, France, Allemagne, Italie, Japon).\n• G20 : forum élargi depuis la crise de 2008 incluant puissances occidentales, émergents (Chine, Inde, Brésil, Afrique du Sud...) et Union européenne — symbole économique de la multipolarité.\n• BRICS : groupement des grandes économies émergentes promouvant une gouvernance mondiale moins centrée sur l’Occident.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q4',
      type: 'mcq',
      prompt: 'Quel forum économique élargi après la crise de 2008 illustre la prise en compte des puissances émergentes aux côtés du G7 ?',
      options: [
        'Le Kominform',
        'Le G20',
        'Le Pacte de Varsovie',
        'Le Conseil de tutelle',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le G20 associe les pays du G7 et les principales puissances émergentes (Chine, Inde, Brésil, Russie, Afrique du Sud, etc.).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Commentaire de texte',
    stepTheme: 'slate',
    stepTitle: 'Expliquer un texte sur les défis du monde multipolaire',
    paragraphText:
      'Si un sujet du BAC présente un texte soulignant à la fois la coopération (G20, accords climatiques) et les tensions (guerre commerciale États-Unis-Chine, guerre en Ukraine, crises au Moyen-Orient), montre que la multipolarité offre plus d’équilibre que l’unipolarité, mais accroît aussi le risque d’instabilité faute de gendarme unique.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q5',
      type: 'mcq',
      prompt: 'Quel paradoxe caractérise le monde multipolaire contemporain ?',
      options: [
        'Il supprime définitivement toute concurrence économique entre États',
        'Il réduit le monopole d’une seule puissance mais multiplie les foyers de rivalités régionales et stratégiques',
        'Il garantit que tous les États ont exactement la même puissance militaire',
        'Il interdit aux pays d’Asie de participer au commerce mondial',
      ],
      correctAnswerIndex: 1,
      explanation: 'Plus représentatif des équilibres réels du globe, le monde multipolaire exige un multilatéralisme solide pour éviter la multiplication des conflits.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Récapitulatif',
    stepTheme: 'green',
    stepTitle: 'Les repères clés de la leçon 3 avant le BAC',
    paragraphText:
      '• 1991-2001 : unipolarité et hyperpuissance américaine (Guerre du Golfe 1991, Somalie 1993, Haïti 1994, Dayton 1995, Kosovo 1999).\n• 11 septembre 2001 : rupture majeure (Afghanistan 2001, Irak 2003, crise financière 2008).\n• Monde multipolaire : affirmation de l’UE (Maastricht 1992, 27 membres en 2020), de la Chine (OMC 2001), de la Russie, des BRICS et des puissances régionales du Moyen-Orient.',
    exercise: {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q6',
      type: 'mcq',
      prompt: 'Quel traité signé en 1992 transforme la Communauté européenne en Union européenne (UE) et prépare la monnaie unique ?',
      options: [
        'Le traité de Maastricht',
        'Le traité de Versailles',
        'Les accords de Genève',
        'Le traité INF de Washington',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le traité de Maastricht (signé le 7 février 1992) fonde l’Union européenne et lance le projet de l’euro.',
    },
  },
];

export const HIST_TLE_T1_L03_MONDE_MULTIPOLAIRE: CurriculumChapter = {
  id: 'terminale_hg_histoire_t1_l03_monde_multipolaire',
  subjectId: 'histoire_geo',
  gradeLevel: 'terminale_c',
  alsoForGrades: ['terminale_d', 'terminale_a1', 'terminale_a2'],
  order: 3,
  title: 'Thème 1, leçon 3 : De la fin de la guerre froide vers un monde multipolaire',
  summary:
    "L'hyperpuissance américaine (1991-2001) et son rôle de gendarme du monde, la rupture du 11 septembre 2001 et l'affirmation d'un monde multipolaire (UE, BRICS, puissances régionales).",
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'Tle_H3-De_la_fin_de_la_guerre_froide_vers_un_monde_multipolaire.pdf',
  points: [
    {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p01',
      order: 1,
      title: 'Un monde unipolaire dominé par l’hyperpuissance américaine (1991-2001)',
      summary: 'Analyser les fondements militaires, économiques, technologiques et culturels (Soft Power) de la suprématie des États-Unis après 1991.',
      conceptExplanation:
        'Après l’implosion de l’URSS en décembre 1991, les États-Unis deviennent l’unique superpuissance globale (« hyperpuissance »). Leur prépondérance combine le Hard Power (premier budget militaire mondial, réseau d’alliances et de bases, poids du dollar et de Wall Street, avance spatiale et numérique) et le Soft Power (Hollywood, universités, modèle de consommation).',
      keyRule: 'Hyperpuissance = combinaison unique de Hard Power (militaire, économique) et de Soft Power (culturel, technologique).',
      formulas: [],
      workedExample: {
        title: 'Distinguer Hard Power et Soft Power dans une copie',
        statement: 'Comment classer le dollar, l’OTAN, Hollywood et les universités américaines ?',
        methodSteps: [
          'L’OTAN, les flottes militaires et le poids financier du dollar relèvent du Hard Power.',
          'Hollywood, la langue anglaise et les universités relèvent du Soft Power (influence par attraction).',
        ],
        conclusion: 'L’unipolarité des années 1990 repose simultanément sur la force matérielle et le rayonnement culturel.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p02',
      order: 2,
      title: 'Les États-Unis, « gendarme du monde » (1991-1999)',
      summary: 'Étudier les interventions américaines des années 1990 : Golfe (1991), Somalie (1993), Haïti (1994), Bosnie (Dayton 1995) et Kosovo (1999).',
      conceptExplanation:
        'Au nom du « nouvel ordre mondial » et du nation-building, Washington intervient dans de nombreuses crises : libération du Koweït sous mandat ONU (Tempête du désert, 1991), rétablissement d’Aristide en Haïti (1994), paix en Bosnie (accords de Dayton, 21 novembre 1995). Mais l’échec de Somalie (Restore Hope, 1993-1994) et les frappes au Kosovo sans aval du Conseil de sécurité (1999) révèlent déjà les limites de ce rôle.',
      keyRule: 'Retenir les interventions clés de 1991 à 1999 et la bascule de l’ONU (Golfe 1991) vers l’OTAN hors mandat ONU (Kosovo 1999).',
      formulas: [],
      workedExample: {
        title: 'Comparer les résultats de la décennie 1990',
        statement: 'Les interventions américaines des années 1990 ont-elles toutes été des succès ?',
        methodSteps: [
          'Succès militaires et diplomatiques rapides : guerre du Golfe (1991) et accords de Dayton en Bosnie (1995).',
          'Échecs ou limites : retrait humiliant de Somalie (1994), inaction au Rwanda (1994) et contournement de l’ONU au Kosovo (1999).',
        ],
        conclusion: 'Le gendarme du monde agit efficacement dans les conflits classiques, mais peine dans les crises asymétriques.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p03',
      order: 3,
      title: 'Le choc du 11 septembre 2001 et l’affaiblissement du leadership américain',
      summary: 'Comprendre la rupture de 2001, les guerres d’Afghanistan et d’Irak (2003) et l’essoufflement de l’unipolarité.',
      conceptExplanation:
        'Les attentats du 11 septembre 2001 perpétrés par Al-Qaïda frappent le cœur du territoire américain. George W. Bush lance la guerre contre le terrorisme contre « l’Axe du Mal » : intervention en Afghanistan (octobre 2001), puis invasion préventive et unilatérale de l’Irak sans mandat de l’ONU (mars 2003). L’enlisement sur le terrain et la crise financière des subprimes (2008) fragilisent durablement la prééminence américaine.',
      keyRule: '11 septembre 2001 = rupture stratégique ; mars 2003 = guerre unilatérale en Irak ; 2008 = crise financière.',
      formulas: [],
      workedExample: {
        title: 'Expliquer pourquoi la guerre d’Irak (2003) affaiblit les États-Unis',
        statement: 'Pourquoi 2003 marque-t-il un tournant négatif pour le leadership américain ?',
        methodSteps: [
          'Absence de mandat de l’ONU et division ouverte avec des alliés comme la France et l’Allemagne.',
          'Absence d’armes de destruction massive, enlisement sanglant, scandales (Abou Ghraib, Guantánamo) et coût financier massif.',
        ],
        conclusion: 'L’Irak entame à la fois la crédibilité morale (Soft Power) et la capacité stratégique (Hard Power) de Washington.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p04',
      order: 4,
      title: 'L’affirmation d’un monde multipolaire : UE, BRICS et puissances régionales',
      summary: 'Identifier les nouveaux pôles de puissance (Union européenne, Chine, Russie, Inde, Brésil, Afrique du Sud, Moyen-Orient).',
      conceptExplanation:
        'Au XXIe siècle, le pouvoir mondial se partage entre plusieurs pôles : l’Union européenne (Maastricht 1992, 27 membres après le Brexit de 2020, géant commercial mais dépendant militairement), la Chine (2e économie mondiale, OMC 2001, ASEAN+3, présence forte en Afrique), la Russie (hydrocarbures, OCS 2001, interventions en Géorgie et Ukraine), ainsi que l’Inde, le Brésil, l’Afrique du Sud (BRICS) et des puissances régionales du Moyen-Orient.',
      keyRule: 'Multipolarité = partage du pouvoir entre plusieurs pôles, sans effacement total des États-Unis.',
      formulas: [],
      workedExample: {
        title: 'Présenter les atouts et limites de la Chine et de l’UE',
        statement: 'Pourquoi ni l’UE ni la Chine ne remplacent-elles seules l’hyperpuissance américaine ?',
        methodSteps: [
          'L’UE possède un énorme marché et un fort Soft Power, mais manque de politique étrangère et de défense unifiée.',
          'La Chine est un géant industriel et commercial, mais reste confrontée au vieillissement démographique et à des tensions régionales.',
        ],
        conclusion: 'C’est précisément la coexistence de plusieurs pôles aux forces complémentaires ou concurrentes qui définit la multipolarité.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_hg_histoire_t1_l03_monde_multipolaire_p05',
      order: 5,
      title: 'Méthodologie BAC et situations d’évaluation sur le monde post-1991',
      summary: 'Articuler périodisation, notions géopolitiques (Hard/Soft Power, unilatéralisme) et argumentation nuancée.',
      conceptExplanation:
        'Pour réussir les exercices du Baccalauréat sur la période post-1991, il faut maîtriser la succession entre bipolarité (1947-1991), unipolarité (1991-2001) et multipolarité (depuis 2001), distinguer G7, G20 et BRICS, et toujours nuancer le recul relatif des États-Unis face aux nouveaux pôles.',
      keyRule: 'Toujours distinguer unilatéralisme (Irak 2003) et multilatéralisme (Golfe 1991, G20).',
      formulas: [],
      workedExample: {
        title: 'Répondre à une situation d’évaluation sur les relations internationales actuelles',
        statement: 'Le monde multipolaire est-il automatiquement plus pacifique que le monde bipolaire ?',
        methodSteps: [
          'Montrer qu’il évite le face-à-face nucléaire permanent de deux blocs uniques et donne plus de voix aux puissances émergentes.',
          'Montrer qu’il accroît aussi la compétition stratégique (États-Unis-Chine, guerres régionales) si le multilatéralisme s’affaiblit.',
        ],
        conclusion: 'La paix dans un monde multipolaire dépend de la solidité du dialogue multilatéral (ONU, G20).',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};

