import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// PROGRAMME OFFICIEL DE FRANÇAIS — SECONDE A (CÔTE D'IVOIRE – ÉCOLE NUMÉRIQUE)
// Activité : Expression Écrite
// Leçon 1 : Résumé du texte argumentatif & La production écrite
// Leçon 2 : Le commentaire composé (Libellé, Construction du sens, Plan détaillé, Rédaction CI, Rédaction Intro)
// Supports textuels officiels : Victor Hugo, Arthur Rimbaud, Léopold Sédar Senghor, Francis Bebey, Joël & Stella de Rosnay
// 100% conforme aux inspections pédagogiques nationales.
// ============================================================================

export const francais2deAExpressionEcriteAnalyseSujetChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch1_production_ecrite_analyse_sujet',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
  alsoForGrades: ['seconde_c'],
  order: 1,
  officialVolumeHours: 12,
  title: 'Expression Écrite : Analyser le sujet et rechercher les idées',
  summary: 'Méthodologie officielle de la production écrite : décryptage du libellé, verbes étayer/réfuter, mots-clés, reformulation et recherche des idées en vrac.',
  points: [
    {
      id: 'seconde_a_francais_ch1_p1_analyse_sujet_etayer_refuter',
      order: 1,
      title: 'Composantes du sujet & Verbes directeurs (Étayer vs Réfuter)',
      summary: 'Identifier les deux parties du sujet (opinion et consigne) et distinguer rigoureusement étayer et réfuter.',
      conceptExplanation: `En classe de Seconde, la production écrite de l'épreuve de français s'appuie sur le texte argumentatif proposé pour le résumé.

1. Composition d'un sujet de production écrite :
Le sujet officiel comporte toujours deux composantes fondamentales :
• L'opinion de l'auteur : C'est la thèse ou le point de vue exprimé dans le texte, généralement donnée sous forme de phrase affirmative ou de citation entre guillemets.
• La consigne de travail : C'est l'instruction donnée au candidat qui fixe la tâche à accomplir et l'orientation de l'argumentation.

2. Les deux verbes directeurs fondamentaux :
Le verbe introducteur de la consigne commande la stratégie argumentative :
• Étayer une affirmation : Signifie apporter des preuves, des arguments et des exemples pour soutenir, appuyer, confirmer et fortifier la thèse de l'auteur. Le candidat est d'accord avec l'auteur.
• Réfuter une affirmation : Signifie démontrer la fausseté, contredire, rejeter et apporter des contre-arguments pour détruire la thèse de l'auteur. Le candidat s'oppose à l'auteur.

3. Règle méthodologique officielle :
Ne jamais confondre ces deux verbes ! Se tromper d'orientation (réfuter au lieu d'étayer, ou l'inverse) constitue un contresens majeur sanctionné sévèrement à l'examen.`,
      formulas: [
        {
          name: 'Structure du sujet de production écrite',
          formula: '\\text{Sujet} = \\text{Opinion de l\'auteur (Citation)} + \\text{Consigne (Verbe directeur)}',
          note: 'Repérer impérativement la thèse citée et le verbe de consigne avant d\'écrire.'
        },
        {
          name: 'Distinction Étayer vs Réfuter',
          formula: '\\text{Étayer} = \\text{Appuyer / Confirmer / Soutenir} \\quad \\neq \\quad \\text{Réfuter} = \\text{Contredire / Combattre / Rejeter}',
          note: 'La consigne impose l\'orientation obligatoire de votre développement.'
        }
      ],
      keyRule: 'Le verbe « étayer » vous oblige à donner des arguments favorables à la thèse. Le verbe « réfuter » vous oblige au contraire à attaquer et contredire la thèse !',
      workedExample: {
        title: 'Exemple officiel extrait du sujet Stella et Joël de Rosnay',
        statement: 'Sujet : « (...) Nous préparons le terrain aux maladies qui nous emporteront prématurément. » Dans un développement argumenté et illustré d\'exemples, étayez cette affirmation.',
        methodSteps: [
          'Étape 1 : Identifier l\'opinion de l\'auteur : L\'homme crée lui-même les conditions favorables à l\'apparition de maladies qui écourtent sa vie.',
          'Étape 2 : Analyser la consigne : « étayez cette affirmation ».',
          'Étape 3 : Déterminer la stratégie : Le verbe est « étayer » : le candidat doit obligatoirement défendre la thèse et montrer comment l\'homme est responsable de ses maladies prématurées.'
        ],
        conclusion: 'Le devoir doit réunir des arguments et des exemples concrets validant l\'impact négatif des comportements humains sur la santé.'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch1_p1_ex1',
          type: 'mcq',
          prompt: 'Quelles sont les deux composantes indispensables d\'un sujet officiel de production écrite en Seconde ?',
          options: [
            'L\'opinion de l\'auteur (thèse citée) et la consigne de travail (avec son verbe directeur)',
            'Le titre du poème et la biographie de l\'auteur',
            'Une strophe en vers et deux questions de grammaire',
            'Une introduction rédigée et une conclusion provisoire'
          ],
          correctAnswerIndex: 0,
          explanation: 'Tout sujet de production écrite se compose de l\'opinion de l\'auteur (phrase ou citation) et de la consigne qui indique précisément ce que l\'élève doit produire.'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex2',
          type: 'mcq',
          prompt: 'Dans la consigne d\'un sujet de production écrite, que signifie précisément le verbe « étayer » ?',
          options: [
            'Apporter des preuves, des arguments et des exemples pour soutenir et confirmer la thèse',
            'Démontrer la fausseté de l\'affirmation et la contredire point par point',
            'Résumer le texte d\'origine en respectant le quart de sa longueur',
            'Relever uniquement les figures de style contenues dans la citation'
          ],
          correctAnswerIndex: 0,
          explanation: '« Étayer » signifie soutenir, appuyer, fortifier la thèse de l\'auteur avec des arguments solides et des exemples concrets.'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex3',
          type: 'mcq',
          prompt: 'Que devez-vous faire si la consigne vous ordonne : « Réfutez cette affirmation de l\'auteur » ?',
          options: [
            'Démontrer que la thèse est inexacte, contestable ou insuffisante en développant des contre-arguments',
            'Démontrer que la thèse est juste en développant des arguments qui la confirment',
            'Montrer d\'abord que la thèse est juste, puis qu\'elle est fausse, sans prendre position',
            'Résumer la thèse de l\'auteur et la reformuler avec ses propres mots'
          ],
          correctAnswerIndex: 0,
          explanation: '« Réfuter » consiste à contredire la thèse, à en démontrer les limites ou la fausseté à l\'aide d\'une argumentation opposée.'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex4',
          type: 'mcq',
          prompt: 'Considérez le sujet : « La tradition orale n\'est pas un frein à l\'éclosion d\'une société. » Consigne : « Réfutez cette affirmation de Francis Bebey. » Quel doit être l\'objectif de votre devoir ?',
          options: [
            'Démontrer que la tradition orale présente des faiblesses réelles qui peuvent freiner le développement de la société',
            'Montrer que la tradition orale est la seule voie de salut pour le progrès technologique',
            'Faire l\'éloge sans réserve de la sagesse des anciens et des griots',
            'Raconter un conte traditionnel africain sans apporter aucun argument'
          ],
          correctAnswerIndex: 0,
          explanation: 'La consigne demandant de réfuter Francis Bebey, il faut prouver en quoi l\'oralité exclusive peut constituer un frein (perte de données, manque d\'archives écrites fiables, etc.).'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex5',
          type: 'mcq',
          prompt: 'Quel risque majeur encourt un élève qui développe des contre-arguments alors que la consigne demandait d\'« étayer » la pensée de l\'auteur ?',
          options: [
            'Le hors-sujet ou contresens méthodologique majeur sur la consigne',
            'Une simple maladresse d\'expression, sans conséquence sur la note',
            'Une introduction jugée trop courte par le correcteur',
            'Un manque d\'exemples, mais l\'argumentation reste valable'
          ],
          correctAnswerIndex: 0,
          explanation: 'Adopter la position inverse de celle exigée par le verbe directeur (réfuter au lieu d\'étayer) est sanctionné comme un contresens sur la consigne.'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex6',
          type: 'mcq',
          prompt: 'Quelle est la longueur officielle attendue pour le texte argumentatif de la production écrite en classe de Seconde ?',
          options: [
            'Un développement argumenté de 20 à 30 lignes',
            'Une page double de 150 lignes minimum',
            'Un seul paragraphe de 3 lignes',
            'Un résumé strict de 10 mots'
          ],
          correctAnswerIndex: 0,
          explanation: 'En rédaction, la production écrite attendue est un texte argumentatif structuré de 20 à 30 lignes.'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex7',
          type: 'mcq',
          prompt: 'Dans un sujet de production écrite, sous quelle forme se présente généralement l\'opinion de l\'auteur ?',
          options: [
            'Sous forme d\'une phrase affirmative ou d\'une citation extraite du texte support',
            'Sous forme d\'un tableau de chiffres et de statistiques',
            'Sous forme d\'une formule d\'algèbre avec des variables',
            'Sous forme d\'une liste de questions fermées'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'opinion de l\'auteur est une phrase affirmative ou une citation clé représentative de sa prise de position dans le texte argumentatif.'
        },
        {
          id: 'seconde_a_francais_ch1_p1_ex8',
          type: 'mcq',
          prompt: 'Dans le sujet de Joël et Stella de Rosnay, la citation affirme : « Nous préparons le terrain aux maladies qui nous emporteront prématurément. » Quelle est l\'idée défendue par les auteurs ?',
          options: [
            'Les comportements humains irresponsables favorisent des maladies causant une mort précoce',
            'Les maladies sont uniquement le fruit du destin et l\'homme n\'y a aucune part',
            'La médecine moderne a éradiqué toutes les causes de mortalité sur terre',
            'L\'alimentation n\'a aucune influence sur la longévité humaine'
          ],
          correctAnswerIndex: 0,
          explanation: '« Préparer le terrain » signifie créer les conditions propices : l\'homme est lui-même responsable des maux qui abrègent son espérance de vie.'
        }
      ]
    },
    {
      id: 'seconde_a_francais_ch1_p2_mots_cles_reformulation',
      order: 2,
      title: 'Analyse des mots-clés & Reformulation de l\'opinion de l\'auteur',
      summary: 'Repérer les termes essentiels du sujet, définir leurs sens en contexte et reformuler clairement la thèse avec ses propres mots.',
      conceptExplanation: `Après avoir identifié les composantes du sujet, la seconde étape capitale est la compréhension approfondie de la citation.

1. Identification et analyse des mots-clés :
Il s'agit de repérer les termes porteurs de sens, d'analyser leurs différents sens en contexte et de délimiter le champ de réflexion :
• Exemple (Sujet Rosnay) :
  - « préparons » : nous exposons, livrons, favorisons, rendons propice.
  - « le terrain » : notre organisme, notre corps, notre santé, notre équilibre vital.
  - « emporteront prématurément » : mort précoce, décès hâtif, perte de la vie avant l'âge normal.

2. La reformulation de l'opinion de l'auteur :
C'est l'exercice qui prouve la compréhension réelle du sujet. Elle consiste à réexprimer la pensée de l'auteur dans un langage personnel et clair, sans trahir sa pensée :
• « L'homme est responsable des maladies qui entraînent précipitamment sa propre mort. »
• « Nos mauvaises habitudes de vie réduisent dangereusement notre espérance de vie. »

3. L'évaluation formative sur Francis Bebey :
Dans le sujet « La tradition orale n'est pas un frein à l'éclosion d'une société » :
• « tradition orale » = transmission orale des us, savoirs et coutumes de bouche à oreille.
• « un frein » = une entrave, un blocage, un obstacle au développement.
• « l'éclosion » = l'essor, le progrès, l'épanouissement économique et social.
• Reformulation : La transmission orale ne bloque pas le développement d'un peuple.`,
      formulas: [
        {
          name: 'Démarche d\'analyse de la citation',
          formula: '\\text{Mots-clés repérés} \\longrightarrow \\text{Définition contextualisée} \\longrightarrow \\text{Reformulation synthétique}',
          note: 'Permet de cerner exactement les limites du sujet et d\'éviter tout hors-sujet.'
        }
      ],
      keyRule: 'Reformuler ne signifie pas répéter les mêmes mots ! Vous devez employer des synonymes fidèles et une syntaxe personnelle.',
      workedExample: {
        title: 'Exemple de reformulation réussie (Francis Bebey)',
        statement: 'Citation : « La tradition orale n\'est pas un frein à l\'éclosion d\'une société. »',
        methodSteps: [
          'Étape 1 : Remplacer « tradition orale » par « la transmission orale des savoirs ancestraux ».',
          'Étape 2 : Remplacer « n\'est pas un frein » par « ne constitue pas un obstacle ».',
          'Étape 3 : Remplacer « éclosion » par « épanouissement et progrès ».'
        ],
        conclusion: 'Proposition reformulée : « La transmission orale des valeurs culturelles d\'un peuple n\'empêche nullement son essor et son progrès. »'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch1_p2_ex1',
          type: 'mcq',
          prompt: 'Dans la citation de Stella et Joël de Rosnay, à quoi renvoie métaphoriquement l\'expression « le terrain » ?',
          options: [
            'À notre corps, notre organisme et notre état de santé général',
            'À notre cadre de vie, c\'est-à-dire notre quartier et notre maison',
            'À notre environnement naturel, c\'est-à-dire les sols et les forêts',
            'À notre entourage familial et à nos relations sociales'
          ],
          correctAnswerIndex: 0,
          explanation: 'En médecine et en biologie, « préparer le terrain » désigne métaphoriquement le corps humain et son immunité face aux agents pathogènes.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex2',
          type: 'mcq',
          prompt: 'Quel synonyme contextuel correspond le mieux au verbe « préparons » dans l\'affirmation : « Nous préparons le terrain aux maladies... » ?',
          options: [
            'Nous exposons ou livrons notre santé à des risques croissants',
            'Nous nettoyons soigneusement nos outils ménagers',
            'Nous cuisinons un repas pour des invités de marque',
            'Nous réparons une panne mécanique imprévue'
          ],
          correctAnswerIndex: 0,
          explanation: '« Préparer le terrain » signifie ici exposer ou rendre vulnérable notre organisme aux attaques de la maladie.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex3',
          type: 'mcq',
          prompt: 'Que signifie l\'expression « mourir prématurément » dans l\'analyse d\'un sujet de production écrite ?',
          options: [
            'Perdre la vie de façon précoce ou hâtive, avant le terme naturel de l\'espérance de vie',
            'Mourir de vieillesse, au terme naturel de l\'espérance de vie',
            'Mourir brutalement d\'un accident, quel que soit son âge',
            'Être gravement malade sans forcément perdre la vie'
          ],
          correctAnswerIndex: 0,
          explanation: '« Prématurément » signifie avant l\'heure normale, c\'est-à-dire une mort précoce et prématurée.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex4',
          type: 'mcq',
          prompt: 'Parmi les propositions suivantes, laquelle constitue une reformulation fidèle de : « Nous préparons le terrain aux maladies qui nous emporteront prématurément » ?',
          options: [
            'L\'homme est l\'artisan des comportements nocifs qui provoquent sa mort précoce',
            'La terre cultivable contient des engrais nécessaires aux plantes',
            'Les médecins sont les seuls responsables de l\'apparition des maladies',
            'L\'espérance de vie humaine augmente continuellement sans aucun effort'
          ],
          correctAnswerIndex: 0,
          explanation: 'Cette reformulation traduit fidèlement la responsabilité humaine dans la survenue de maladies entraînant un décès hâtif.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex5',
          type: 'mcq',
          prompt: 'Dans la citation de Francis Bebey, quel est le sens exact du mot « éclosion » dans « l\'éclosion d\'une société » ?',
          options: [
            'L\'épanouissement, le progrès, l\'essor et l\'évolution harmonieuse',
            'La naissance biologique d\'un oisillon sorti de sa coquille',
            'L\'effondrement économique et la ruine d\'une nation',
            'L\'isolement complet d\'une population dans une forêt'
          ],
          correctAnswerIndex: 0,
          explanation: 'Au sens figuré littéraire, l\'éclosion d\'une société désigne son plein essor, son épanouissement culturel et son progrès.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex6',
          type: 'mcq',
          prompt: "Dans le sujet « La tradition orale n'est pas un frein à l'éclosion d'une société » (Francis Bebey), quel sens prend le mot « frein » ?",
          options: [
            'Un obstacle, une entrave, un blocage ou un ralentissement',
            'La pédale métallique d\'un véhicule automobile',
            'Un dispositif d\'accélération rapide sur autoroute',
            'Une récompense accordée aux meilleurs élèves'
          ],
          correctAnswerIndex: 0,
          explanation: 'Un « frein » au sens figuré désigne toute entrave ou tout obstacle qui bloque la marche en avant d\'une communauté.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex7',
          type: 'mcq',
          prompt: 'Pourquoi l\'étape d\'analyse des mots-clés est-elle indispensable avant de commencer la rédaction ?',
          options: [
            'Elle permet de délimiter avec précision le champ de réflexion et d\'éviter le hors-sujet',
            'Elle permet de compter le nombre exact de voyelles dans le texte',
            'Elle remplace obligatoirement la conclusion finale du devoir',
            'Elle dispense l\'élève d\'avoir à illustrer ses arguments par des exemples'
          ],
          correctAnswerIndex: 0,
          explanation: 'Définir les mots-clés en contexte fixe les frontières du sujet et empêche le candidat de dévier vers des considérations hors de propos.'
        },
        {
          id: 'seconde_a_francais_ch1_p2_ex8',
          type: 'mcq',
          prompt: 'Laquelle de ces phrases reformule correctement : « La tradition orale n\'est pas un frein à l\'éclosion d\'une société » ?',
          options: [
            'La transmission orale des savoirs ancestraux ne constitue pas un obstacle au progrès d\'un peuple',
            'Les peuples sans écriture ne peuvent jamais connaître le moindre développement',
            'La tradition orale doit être impérativement abandonnée pour entrer dans la modernité',
            'L\'oralité est une invention récente apparue au vingtième siècle'
          ],
          correctAnswerIndex: 0,
          explanation: 'Cette phrase conserve l\'affirmation de l\'auteur tout en remplaçant les termes clés par des équivalents exacts.'
        }
      ]
    },
    {
      id: 'seconde_a_francais_ch1_p3_recherche_idees_vrac_domaines',
      order: 3,
      title: 'Techniques de recherche d\'idées en vrac & Variété des domaines',
      summary: 'Collecter des idées en vrac à partir d\'une question directrice en explorant divers domaines (santé, environnement, société, histoire).',
      conceptExplanation: `Une fois le sujet compris et reformulé, vient l'étape essentielle de la recherche d'idées.

1. La règle d'or de la recherche initiale :
• Les idées doivent impérativement être recherchées **en vrac** sur le brouillon.
• Il ne faut pas chercher à organiser ni à hiérarchiser les idées à ce stade initial ! Tenter de rédiger tout de suite bloque l'imagination et l'inventivité.

2. La question directrice :
Pour trouver rapidement des idées, on formule une question directrice adaptée au sujet et à la consigne :
• Pour le sujet Rosnay (étayer) : « Quelles sont les actions ou habitudes humaines qui exposent l'homme aux maladies et à la mort précoce ? »
• Pour le sujet Bebey (réfuter) : « En quoi la transmission orale exclusive peut-elle freiner l'évolution d'une société ? »

3. La variété des domaines de recherche :
Un bon candidat ne se limite pas à un seul domaine. Il fait un tour d'horizon systématique :
• Domaine sanitaire et alimentaire : alimentation déséquilibrée (excès de sel, de sucre, de gras, cubes d'assaisonnement), consommation d'alcool et de tabac, sédentarité.
• Domaine environnemental : pollution de l'air par les usines, rejets de déchets toxiques, utilisation abusive de pesticides et d'engrais chimiques en agriculture.
• Domaine civique et comportemental : incivisme sur les routes (excès de vitesse, feux tricolores brûlés), refus des mesures d'hygiène et des règles de sécurité sanitaire.
• Domaine scientifique et technologique : manipulation dangereuse d'agents pathogènes, dissémination d'OGM incontrôlés.

4. Pour chaque idée : un argument clair + un exemple précis :
Une idée générale sans exemple concret ne convainc pas le correcteur. Chaque argument doit être étayé d'un fait précis tiré de l'actualité, de la société ou de la culture.`,
      formulas: [
        {
          name: 'Structure d\'un argument réussi',
          formula: '\\text{Idée directrice (Argument)} + \\text{Explication causale} + \\text{Exemple concret observable}',
          note: 'Formule d\'or de l\'argumentation : jamais d\'argument sans exemple concret.'
        }
      ],
      keyRule: 'Pendant les 10 premières minutes de brouillon, notez toutes vos idées en vrac sans censure ! Vous trierez et organiserez ensuite.',
      workedExample: {
        title: 'Exemple officiel d\'idées en vrac sur le sujet de Francis Bebey (Réfutation)',
        statement: 'Question directrice : Comment la tradition orale empêche-t-elle l\'évolution d\'une société ?',
        methodSteps: [
          'Idée 1 : Non-fiabilité des connaissances transmises oralement (Exemple : chez les tradi-praticiens, certains disciples déforment la science transmise par le maître).',
          'Idée 2 : Perte irrémédiable d\'informations historiques (Exemple : des récits historiques non consignés par écrit finissent par glisser dans le mythe et la légende).',
          'Idée 3 : Fragilité des contrats passés de gré à gré (Exemple : le non-respect des engagements fonciers verbaux crée de graves litiges communautaires).'
        ],
        conclusion: 'Ces arguments concrets et vérifiables réfutent solidement la thèse avec des faits réels.'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch1_p3_ex1',
          type: 'mcq',
          prompt: 'Au tout début de la phase de recherche d\'idées au brouillon, quelle est la règle méthodologique officielle ?',
          options: [
            'Rechercher les idées en vrac sans chercher à les ordonner immédiatement',
            'Rédiger directement l\'introduction au propre sur la feuille d\'examen',
            'Choisir une seule idée et supprimer toutes les autres pistes',
            'Compter le nombre de lignes restant sur sa feuille'
          ],
          correctAnswerIndex: 0,
          explanation: 'La recherche se fait impérativement en vrac sur le brouillon pour stimuler la créativité avant toute organisation.'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex2',
          type: 'mcq',
          prompt: 'Pour étayer l\'affirmation de Joël et Stella de Rosnay sur la responsabilité humaine dans les maladies, quel exemple concret relève du domaine alimentaire ?',
          options: [
            'La consommation excessive d\'aliments trop gras, trop salés, trop sucrés et de cubes d\'assaisonnement chimiques',
            'La sédentarité due au temps passé devant les écrans et au manque d\'activité physique',
            'La pollution de l\'air des villes par les fumées des véhicules et des usines',
            'L\'automédication avec des médicaments achetés dans la rue sans ordonnance'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'alimentation industrielle excessive en sel, sucre, graisses et additifs chimiques est une cause directe de maladies chroniques (hypertension, diabète).'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex3',
          type: 'mcq',
          prompt: 'Pour réfuter l\'affirmation de Francis Bebey (montrer les limites de la tradition orale), quel argument historique pertinent peut-on avancer ?',
          options: [
            'La mémoire humaine ne pouvant tout archiver fidèlement, les faits historiques oraux finissent par s\'altérer et tomber dans la légende',
            'La tradition orale permet de conserver l\'histoire d\'un peuple sans aucune perte de détail',
            'Les griots transmettent fidèlement la mémoire collective d\'une génération à l\'autre',
            'La parole des anciens est plus vivante et plus chaleureuse que les livres d\'histoire'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'absence d\'écrits favorise l\'oubli ou la déformation légendaire des événements historiques réels au fil des générations.'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex4',
          type: 'mcq',
          prompt: 'Sur le plan environnemental, quel exemple illustre le fait que l\'homme « prépare le terrain aux maladies » ?',
          options: [
            'L\'utilisation abusive de pesticides et d\'engrais chimiques qui polluent les nappes phréatiques et les aliments',
            'La consommation excessive d\'aliments trop gras, trop salés et trop sucrés',
            'La sédentarité et l\'abandon de toute activité physique régulière',
            'La consommation d\'alcool et de tabac dès l\'adolescence'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'épandage massif de produits chimiques agricoles pollue la chaîne alimentaire et l\'eau, provoquant intoxications et cancers.'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex5',
          type: 'mcq',
          prompt: 'Pourquoi est-il fortement recommandé de varier les domaines d\'investigation (social, sanitaire, environnemental, civique) ?',
          options: [
            'Pour enrichir l\'argumentation, éviter la répétition monotone et montrer une vaste culture générale',
            'Pour pouvoir développer un seul argument très long dans chaque partie du devoir',
            'Pour éviter d\'avoir à donner des exemples précis et vérifiables',
            'Pour répéter la même idée sous plusieurs formes et convaincre le correcteur'
          ],
          correctAnswerIndex: 0,
          explanation: 'Varier les domaines confère de la richesse, de la hauteur de vue et du dynamisme au devoir argumentatif.'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex6',
          type: 'mcq',
          prompt: 'Sur le plan juridique et social, quelle faiblesse de la tradition orale peut-on citer en exemple ?',
          options: [
            'Les accords verbaux de gré à gré non formalisés par écrit sont vulnérables à la mauvaise foi et sources de conflits fonciers',
            'Les accords verbaux sont plus sûrs que les écrits, car ils reposent sur l\'honneur des témoins',
            'La tradition orale empêche tout conflit foncier grâce à l\'autorité des chefs coutumiers',
            'Les contrats écrits sont inutiles dans les villages, où chacun connaît les limites des terres'
          ],
          correctAnswerIndex: 0,
          explanation: 'En l\'absence de trace écrite juridique, les promesses orales peuvent être reniées, engendrant d\'interminables litiges fonciers et financiers.'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex7',
          type: 'mcq',
          prompt: 'Comment formule-t-on efficacement la « question directrice » au brouillon pour lancer la recherche d\'idées ?',
          options: [
            'En transformant l\'opinion de l\'auteur et la consigne en une question ouverte « Comment ? » ou « En quoi ? »',
            'En recopiant mot pour mot l\'opinion de l\'auteur entre guillemets au brouillon',
            'En résumant le sujet en une phrase affirmative qui donne déjà la conclusion',
            'En posant une question fermée à laquelle on répond simplement par « oui » ou « non »'
          ],
          correctAnswerIndex: 0,
          explanation: 'La question directrice (« En quoi l\'homme est-il responsable... ? ») canalise la réflexion et génère naturellement une suite d\'arguments pertinents.'
        },
        {
          id: 'seconde_a_francais_ch1_p3_ex8',
          type: 'mcq',
          prompt: 'Quelle est la différence fondamentale entre un « argument » et un « exemple » dans une production écrite ?',
          options: [
            'L\'argument énonce l\'idée abstraite et générale ; l\'exemple fournit le fait concret, précis et vérifiable qui illustre l\'argument',
            'L\'argument est un fait concret et vérifiable ; l\'exemple est l\'idée générale qu\'il démontre',
            'L\'argument reprend la thèse de l\'auteur ; l\'exemple est une citation tirée du texte étudié',
            'L\'argument s\'emploie pour réfuter et l\'exemple pour étayer ; ils ne vont jamais ensemble'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'argument est la justification rationnelle de la thèse ; l\'exemple est l\'ancrage concret dans le réel (fait d\'actualité, expérience vécue, référence culturelle).'
        }
      ]
    }
  ]
};

export const francais2deACommentaireComposeRedactionIntroChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch5_commentaire_compose_redaction_introduction',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
  alsoForGrades: ['seconde_c'],
  order: 5,
  officialVolumeHours: 12,
  title: 'Le Commentaire Composé : Rédaction de l\'Introduction',
  summary: 'Méthodologie officielle de l\'introduction du commentaire composé : règle du paragraphe unique et les 3 étapes canoniques (Perspective générale, Présentation du texte, Annonce du plan).',
  points: [
    {
      id: 'seconde_a_francais_ch5_p1_trois_etapes_introduction_paragraphe_unique',
      order: 1,
      title: 'Les 3 étapes officielles de l\'introduction & Règle du paragraphe unique',
      summary: 'Rédiger l\'introduction en un paragraphe unique sans saut de ligne, en articulant rigoureusement la perspective générale, la présentation du texte et l\'annonce du plan.',
      conceptExplanation: `L'introduction est le premier contact du correcteur avec votre copie. Elle doit être irréprochable sur le fond comme sur la forme.

1. Règle formelle absolue :
• L'introduction est rédigée en **UN SEUL PARAGRAPHE** débutant par un alinéa.
• **INTERDICTION ABSOLUE** de sauter une ligne à l'intérieur de l'introduction ! Tout retour à la ligne prématuré est sanctionné.
• Entre l'introduction et le développement, on saute deux lignes pour matérialiser la frontière.

2. Les 3 étapes canoniques obligatoires (dans l'ordre strict) :
• **Étape 1 : La contextualisation ou perspective générale (l'amorce)** :
  Elle vise à situer le texte dans un cadre plus large en partant du thème général, du genre littéraire, du mouvement ou de l'époque de l'auteur.
  - Exemple (Sujet Hugo sur la mort) : « La mort est un phénomène naturel propre à tous les êtres vivants. Si elle constitue une fatalité redoutée par le commun des mortels, certains poètes romantiques voient en elle une délivrance et une issue salvatrice... »
• **Étape 2 : La présentation du texte support** :
  Elle identifie précisément le texte à travers 4 mentions obligatoires :
  - Le nom de l'auteur (ex: Victor Hugo).
  - Le titre du poème ou de l'extrait (ex: *« Veni, vidi, vixi »*).
  - Le titre de l'œuvre d'où il est extrait et sa date de publication (ex: *Les Contemplations*, 1848).
  - L'idée générale du texte (ex: « Dans ce poème, Hugo fait le bilan amer de son existence et présente la mort comme l'ultime remède à son angoisse existentielle. »).
• **Étape 3 : L'annonce du plan du commentaire** :
  Elle énonce clairement et avec élégance les deux centres d'intérêt du libellé, qui correspondront aux deux grandes parties du développement.
  - Formules recommandées : « Nous montrerons d'une part [Centre d'intérêt 1], et d'autre part [Centre d'intérêt 2]. »
  - Exemple Hugo : « Dès lors, nous montrerons d'une part l'amertume éprouvée par le poète, et d'autre part, son aspiration ardente à la mort. »

3. L'évaluation formative sur Arthur Rimbaud (*Le dormeur du Val*) :
• Amorce : Le traitement du thème de la guerre et de la mort précoce par les poètes du XIXe siècle.
• Présentation : Arthur Rimbaud (1854-1891), poème *Le dormeur du Val* extrait de *Poésies* (octobre 1870), évoquant le repos tragique d'un jeune soldat au cœur d'une nature éclatante.
• Annonce du plan : Peinture de la vie dans une nature verdoyante (Partie I), puis révélation poignante de la mort du jeune soldat (Partie II).`,
      formulas: [
        {
          name: 'La Formule d\'Or de l\'Introduction',
          formula: '\\text{Introduction (1 seul paragraphe)} = \\text{Amorce / Perspective} + \\text{Présentation du texte (Auteur, Titre, Date, Idée)} + \\text{Annonce du plan (2 CI)}',
          note: 'Aucun saut de ligne à l\'intérieur de ce paragraphe.'
        }
      ],
      keyRule: 'L\'introduction ne doit jamais comporter plusieurs paragraphes ! Elle forme un bloc unique, fluide et harmonieux.',
      workedExample: {
        title: 'Exemple officiel intégral rédigé (Victor Hugo, Veni, vidi, vixi)',
        statement: 'Texte officiel validé par l\'inspection pédagogique de Côte d\'Ivoire',
        methodSteps: [
          'Amorce : « La mort est un phénomène naturel propre à tous les êtres vivants. Elle constitue une fatalité pour nous, certains poètes voient en elle une délivrance, une échappatoire pour accéder au bonheur. »',
          'Présentation : « Le poète Victor Hugo s’inscrit dans cette vision salvatrice de la mort à travers son poème intitulé "Veni, vidi, vixi", extrait de Les Contemplations, IV, XIII, avril 1848. Dans ce poème, Victor Hugo présente la mort comme l’ultime solution à l’angoisse existentielle du poète. »',
          'Annonce du plan : « Nous montrerons d’une part l’amertume du poète et de l’autre, son aspiration à la mort. »'
        ],
        conclusion: 'Le paragraphe unique remplit parfaitement les 3 fonctions sans lourdeur et lance idéalement le devoir.'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch5_p1_ex1',
          type: 'mcq',
          prompt: 'Combien de paragraphes doit comporter l\'introduction officielle du commentaire composé ?',
          options: [
            'Strictement un seul paragraphe débutant par un alinéa, sans aucun saut de ligne à l\'intérieur',
            'Trois paragraphes distincts séparés par des lignes blanches',
            'Deux paragraphes : un pour l\'auteur et un pour le plan',
            'Quatre petits paragraphes de deux lignes chacun'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'introduction du commentaire composé doit impérativement être rédigée en un seul paragraphe continu avec un alinéa initial.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex2',
          type: 'mcq',
          prompt: 'Dans quel ordre chronologique strict les trois étapes de l\'introduction doivent-elles se succéder ?',
          options: [
            '1. Contextualisation/Perspective générale -> 2. Présentation du texte -> 3. Annonce du plan',
            '1. Annonce du plan -> 2. Présentation du texte -> 3. Perspective générale',
            '1. Présentation du texte -> 2. Annonce du plan -> 3. Perspective générale',
            '1. Présentation du texte -> 2. Perspective générale -> 3. Annonce du plan'
          ],
          correctAnswerIndex: 0,
          explanation: 'La démarche va toujours du général au particulier : Amorce générale -> Présentation du texte précis -> Annonce du plan du devoir.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex3',
          type: 'mcq',
          prompt: 'Quels sont les quatre éléments obligatoires pour réussir l\'étape de « Présentation du texte » dans l\'introduction ?',
          options: [
            'Le nom de l\'auteur, le titre du texte, le titre de l\'œuvre d\'origine (avec date) et l\'idée générale',
            'Le nom de l\'auteur, sa biographie complète, le titre du texte et le résumé du poème',
            'Le titre du texte, le genre littéraire, le nombre de strophes et le type de rimes',
            'Le nom de l\'auteur, le titre du texte, l\'annonce du plan et l\'avis de l\'élève'
          ],
          correctAnswerIndex: 0,
          explanation: 'La présentation académique exige d\'identifier l\'auteur, le texte, l\'œuvre de référence avec sa date, et de dégager l\'idée générale du passage.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex4',
          type: 'mcq',
          prompt: 'En quoi consiste l\'« amorce » ou « perspective générale » au début de l\'introduction ?',
          options: [
            'À situer le texte en partant d\'une considération générale sur le thème, le genre ou l\'époque littéraire',
            'À présenter l\'auteur, le titre du texte et l\'œuvre dont il est extrait',
            'À annoncer les centres d\'intérêt qui seront étudiés dans le développement',
            'À résumer le texte en quelques lignes avant de le commenter'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'amorce donne de la hauteur au devoir en reliant le sujet à une thématique universelle, à un genre littéraire ou au contexte de création.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex5',
          type: 'mcq',
          prompt: 'Comment doit être formulée l\'étape de l\'« Annonce du plan » dans l\'introduction ?',
          options: [
            'En formulant avec élégance les deux centres d\'intérêt du libellé à l\'aide de connecteurs d\'articulation (« d\'une part... d\'autre part »)',
            'En écrivant les titres des parties sous forme de liste : « I. L\'amertume ; II. La mort »',
            'En annonçant uniquement le premier centre d\'intérêt, le second étant gardé pour la transition',
            'En posant au lecteur une série de questions sans indiquer l\'ordre des parties'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'annonce du plan doit être élégamment rédigée dans le cours du paragraphe, en reprenant fidèlement les axes des centres d\'intérêt.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex6',
          type: 'mcq',
          prompt: 'Dans l\'évaluation sur « Le dormeur du Val » de Rimbaud, quelle perspective générale est la plus adaptée pour l\'amorce ?',
          options: [
            'Le traitement du thème universel de la guerre et de la mort tragique de la jeunesse par les poètes du XIXe siècle',
            'La biographie complète d\'Arthur Rimbaud, de sa naissance à sa mort',
            'Le thème de la beauté de la nature dans la poésie de tous les siècles',
            'Le résumé détaillé du poème, strophe par strophe'
          ],
          correctAnswerIndex: 0,
          explanation: 'Situer le poème dans la tradition poétique évoquant l\'absurdité de la guerre et le fauchage tragique de jeunes vies constitue l\'amorce idéale.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex7',
          type: 'mcq',
          prompt: 'Quelle maladresse majeure doit-on absolument éviter lors de la rédaction de l\'amorce d\'une introduction ?',
          options: [
            'Commencer par des formules clichés, vagues et démesurées comme « Depuis la nuit des temps, l\'homme... » ou « De tout temps... »',
            'Présenter l\'auteur, le titre et l\'œuvre dont le texte est extrait',
            'Situer le texte dans son époque ou dans son mouvement littéraire',
            'Annoncer clairement les deux centres d\'intérêt à la fin de l\'introduction'
          ],
          correctAnswerIndex: 0,
          explanation: 'Les formules creuses du type « De tout temps » sont bannies par les inspecteurs pédagogiques au profit d\'une amorce précise et littéraire.'
        },
        {
          id: 'seconde_a_francais_ch5_p1_ex8',
          type: 'mcq',
          prompt: 'Que doit faire l\'élève sur sa copie immédiatement après avoir terminé de rédiger le paragraphe de l\'introduction ?',
          options: [
            'Sauter une ou deux lignes pour matérialiser nettement la fin de l\'introduction avant d\'entamer le développement',
            'Enchaîner directement sur le développement, sans sauter de ligne',
            'Sauter une ligne après chaque phrase de l\'introduction pour aérer la copie',
            'Écrire un titre « Développement » avant de commencer la première partie'
          ],
          correctAnswerIndex: 0,
          explanation: 'Sauter une ou deux lignes est la convention typographique qui sépare élégamment l\'introduction du corps du devoir.'
        }
      ]
    }
  ]
};

export const francais2deAChapters: CurriculumChapter[] = [
  francais2deAExpressionEcriteAnalyseSujetChapter,
  francais2deACommentaireComposeRedactionIntroChapter,
];
