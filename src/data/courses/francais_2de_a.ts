import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// PROGRAMME OFFICIEL DE FRANÇAIS — SECONDE A (CÔTE D'IVOIRE – ÉCOLE NUMÉRIQUE)
// Activité : Expression Écrite
// Leçon 1 : Résumé du texte argumentatif & La production écrite
// Leçon 2 : Le commentaire composé (Libellé, Construction du sens, Plan détaillé, Rédaction CI, Rédaction Intro)
// Supports textuels officiels : Victor Hugo, Arthur Rimbaud, Léopold Sédar Senghor, Francis Bebey, Joël & Stella de Rosnay
// 100% conforme aux inspections pédagogiques nationales (MENA Côte d'Ivoire).
// ============================================================================

export const francais2deAExpressionEcriteAnalyseSujetChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch1_production_ecrite_analyse_sujet',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
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
            'Être pleinement d\'accord avec l\'auteur et abonder dans son sens',
            'Copier intégralement le paragraphe d\'où est tirée la citation',
            'Écrire un poème en alexandrins avec des rimes croisées'
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
            'Une simple faute de ponctuation sans impact sur la note',
            'Une pénalité de temps de 5 minutes par le surveillant',
            'L\'obligation de recommencer l\'épreuve de SVT'
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
          explanation: 'Selon le programme officiel de Côte d\'Ivoire (MENA), la production écrite attendue est un texte argumentatif structuré de 20 à 30 lignes.'
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
            'À une parcelle agricole cultivable en zone rurale',
            'À un terrain de football homologué par la FIFA',
            'Aux limites géographiques des frontières d\'un État'
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
            'Décéder après avoir dépassé l\'âge de 100 ans',
            'S\'endormir profondément après une journée de labeur',
            'Être guéri miraculeusement d\'une pathologie chronique'
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
          prompt: 'Dans le sujet de Francis Bebey, quel sens prend le mot « frein » ?',
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
            'Le non-respect des feux tricolores par les automobilistes',
            'La lecture prolongée de romans littéraires en plein air',
            'La pratique quotidienne de la course à pied'
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
            'La tradition orale permet d\'imprimer des millions de livres en quelques secondes',
            'Les griots possédaient des enregistreurs numériques au Moyen Âge',
            'La parole orale est plus durable et inaltérable que la gravure sur pierre'
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
            'La plantation d\'arbres fruitiers dans une cour d\'école',
            'L\'installation de panneaux solaires non polluants',
            'Le tri sélectif régulier des déchets ménagers biodégradables'
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
            'Pour remplir la feuille plus vite en écrivant de gros caractères',
            'Pour tromper le correcteur sur le véritable sujet',
            'Pour pouvoir citer des équations de physique au milieu du devoir'
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
            'Les contrats signés chez le notaire sont toujours déchirés par le vent',
            'La tradition orale garantit la sécurité absolue de tous les biens immobiliers',
            'Il n\'y a jamais eu de conflit de succession dans les sociétés traditionnelles'
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
            'En demandant l\'heure exacte au surveillant de la salle',
            'En recopiant le titre de l\'œuvre cinq fois consécutives',
            'En cherchant la date de naissance de l\'imprimeur du texte'
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
            'L\'argument est toujours faux alors que l\'exemple est toujours vrai',
            'L\'argument s\'écrit en chiffres romains et l\'exemple en lettres grecques',
            'Il n\'y a aucune différence, ce sont deux synonymes parfaits'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'argument est la justification rationnelle de la thèse ; l\'exemple est l\'ancrage concret dans le réel (fait d\'actualité, expérience vécue, référence culturelle).'
        }
      ]
    }
  ]
};

export const francais2deACommentaireComposeAnalyseLibelleChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch2_commentaire_compose_analyse_libelle',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
  order: 2,
  officialVolumeHours: 14,
  title: 'Le Commentaire Composé : Libellé & Construction du Sens',
  summary: 'Méthodologie officielle du commentaire composé : composantes du libellé, centres d\'intérêt, rapport de causalité, tableau indices textuels / analyse / interprétations.',
  points: [
    {
      id: 'seconde_a_francais_ch2_p1_composantes_libelle_centres_interet',
      order: 1,
      title: 'Composantes du libellé, Centres d\'intérêt & Rapport logique',
      summary: 'Analyser le libellé du commentaire composé, repérer les centres d\'intérêt imposés et dégager le rapport logique qui les unit.',
      conceptExplanation: `L'épreuve du commentaire composé porte sur un texte littéraire (en prose ou en vers) de haute tenue stylistique.

1. Définition et composantes du libellé :
Le libellé qui accompagne le texte est la boussole de l'élève. Il comporte deux composantes majeures :
• La consigne : Indique la tâche à accomplir (ex: « Faites un commentaire composé de ce texte... »).
• Les centres d'intérêt (deux ou trois) : Ce sont les axes de lecture directeurs qui guident l'analyse et formeront les grandes parties du devoir.
  - Exemple officiel (Victor Hugo, *Veni, vidi, vixi*) :
    * Centre d'intérêt 1 : « l'amertume du poète »
    * Centre d'intérêt 2 : « son aspiration à la mort »

2. Le sens des centres d'intérêt :
Le candidat doit expliciter chaque centre d'intérêt :
• Amertume du poète : sentiment de tristesse profonde mêlé de déception, de rancœur et de révolte face aux railleries et à l'ingratitude des hommes après une vie de labeur.
• Aspiration à la mort : désir ardent d'en finir avec l'existence, perception de la mort non comme un châtiment, mais comme une libération suprême et un refuge apaisant.

3. Le rapport logique unissant les centres d'intérêt :
Les deux centres d'intérêt ne sont jamais juxtaposés par hasard. Dans le texte d'Hugo, ils sont liés par un rapport de **causalité** :
C'est PARCE QU'IL éprouve une amertume insupportable face à la méchanceté humaine que le poète aspire à la mort comme seule issue.

4. Dégager les données d'ensemble :
• Thème général : L'angoisse existentielle et le souhait de la mort face aux souffrances d'une vie de labeur.
• Tonalité dominante : Tonalité pathétique (suscite la pitié et la compassion du lecteur devant la douleur du poète).
• Idée générale : Poème pathétique traduisant la détresse d'un homme brisé qui implore le Seigneur d'abréger son martyre terrestre.`,
      formulas: [
        {
          name: 'Composantes canoniques du libellé',
          formula: '\\text{Libellé} = \\text{Consigne officielle} + \\text{Centre d\'Intérêt 1} + \\text{Centre d\'Intérêt 2}',
          note: 'Chaque centre d\'intérêt constituera obligatoirement une grande partie de votre devoir.'
        },
        {
          name: 'Lien logique fondamental',
          formula: '\\text{Centre d\'Intérêt 1 (L\'amertume)} \\xrightarrow{\\text{Rapport de causalité}} \\text{Centre d\'Intérêt 2 (Aspiration à la mort)}',
          note: 'Comprendre pourquoi la première partie conduit nécessairement à la seconde.'
        }
      ],
      keyRule: 'Dans le libellé, les centres d\'intérêt fournissent déjà le plan directeur de votre commentaire. Vous devez les suivre scrupuleusement !',
      workedExample: {
        title: 'Exemple officiel extrait du sujet sur Léopold Sédar Senghor (Femme noire)',
        statement: 'Libellé : « Faites un commentaire composé de ce texte. Montrez, d\'une part, que le poète fait le portrait de la femme noire et, d\'autre part, comment le poète exprime ses sentiments pour cette femme. »',
        methodSteps: [
          'Étape 1 : Identifier la consigne : « Faites un commentaire composé de ce texte ».',
          'Étape 2 : Identifier le Centre d\'intérêt 1 : « Le portrait de la femme noire » (portrait physique et moral).',
          'Étape 3 : Identifier le Centre d\'intérêt 2 : « L\'expression des sentiments du poète pour cette femme » (amour, admiration, fascination sacrée).',
          'Étape 4 : Dégager le rapport logique : C\'est la beauté éclatante et protectrice de la femme noire qui fait naître l\'admiration fervente et le lyrisme du poète.'
        ],
        conclusion: 'Le plan du commentaire comportera deux grandes parties : I. Le portrait élogieux de la femme noire ; II. L\'expression du chant d\'amour et de vénération.'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch2_p1_ex1',
          type: 'mcq',
          prompt: 'Dans un sujet officiel de commentaire composé, que représentent les « centres d\'intérêt » mentionnés dans le libellé ?',
          options: [
            'Les axes de lecture majeurs qui constitueront les grandes parties du développement',
            'Les noms des correcteurs chargés de noter la copie',
            'Les chapitres du manuel scolaire à apprendre par cœur',
            'Les fautes d\'orthographe commises par l\'auteur du poème'
          ],
          correctAnswerIndex: 0,
          explanation: 'Les centres d\'intérêt indiqués dans le libellé sont les pistes fondamentales d\'analyse qui forment la charpente et les grandes parties du commentaire.'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex2',
          type: 'mcq',
          prompt: 'Dans le poème « Veni, vidi, vixi » de Victor Hugo, quel rapport logique relie le CI 1 (« l\'amertume du poète ») et le CI 2 (« son aspiration à la mort ») ?',
          options: [
            'Un rapport logique de causalité : le poète aspire à la mort parce qu\'il est brisé par l\'amertume de sa condition',
            'Un rapport d\'exclusion mutuelle : le poète est heureux et ne veut surtout pas mourir',
            'Un rapport chronologique d\'indifférence totale sans aucun lien',
            'Un rapport d\'opposition géométrique'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le poète souhaite ardemment mourir car la cruauté et l\'ingratitude du monde lui rendent l\'existence intolérable (cause -> conséquence).'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex3',
          type: 'mcq',
          prompt: 'Quelle est la tonalité dominante du poème « Veni, vidi, vixi » de Victor Hugo ?',
          options: [
            'La tonalité pathétique, car elle émeut le lecteur en peignant la détresse, la souffrance et l\'accablement du poète',
            'La tonalité comique, car le poète cherche à faire rire le public',
            'La tonalité épique, célébrant les exploits militaires d\'un général conquérant',
            'La tonalité didactique, expliquant le fonctionnement d\'une machine à vapeur'
          ],
          correctAnswerIndex: 0,
          explanation: 'La tonalité pathétique vise à susciter la compassion et la pitié du lecteur face au déchirement d\'un homme à bout de forces.'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex4',
          type: 'mcq',
          prompt: 'Dans le libellé accompagnant « Femme noire » de Senghor : « Montrez d\'une part le portrait de la femme noire et d\'autre part l\'expression des sentiments du poète », quel plan doit adopter l\'élève ?',
          options: [
            'Un développement en deux parties : I. Le portrait de la femme noire, II. L\'expression des sentiments du poète',
            'Un développement linéaire strophe par strophe sans aucun regroupement thématique',
            'Raconter sa propre journée d\'école sans évoquer le poème',
            'Une seule partie consacrée à la biographie politique de Senghor'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le libellé dicte le plan du commentaire composé : chaque centre d\'intérêt doit former une partie distincte et structurée.'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex5',
          type: 'mcq',
          prompt: 'Dans le poème de Victor Hugo, que signifie l\'expression latine du titre « Veni, vidi, vixi » ?',
          options: [
            '« Je suis venu, j\'ai vu, j\'ai vécu » (détournant la formule victorieuse de César « vici » en un constat d\'achèvement douloureux « vixi »)',
            '« Je viens, je vois, je vaincrai » (formule militaire romaine)',
            '« Bienvenue dans ma maison de campagne »',
            '« Le temps s\'enfuit sans retour »'
          ],
          correctAnswerIndex: 0,
          explanation: 'Hugo remplace le fameux « vici » (j\'ai vaincu) de Jules César par « vixi » (j\'ai vécu) pour signifier que son existence terrestre est désormais achevée.'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex6',
          type: 'mcq',
          prompt: 'Quelle est la nature littéraire du texte support « Veni, vidi, vixi » ?',
          options: [
            'Un texte poétique (poème lyrique en alexandrins)',
            'Une fable en prose avec une morale animale',
            'Un article de journal polémique paru dans la presse sportive',
            'Une scène de théâtre de vaudeville'
          ],
          correctAnswerIndex: 0,
          explanation: 'Il s\'agit d\'un texte poétique extrait du recueil lyrique *Les Contemplations* (Livre IV : *Pauca meae*).'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex7',
          type: 'mcq',
          prompt: 'Pourquoi le commentaire composé interdit-il formellement de suivre le texte vers par vers (lecture linéaire au fil du texte) ?',
          options: [
            'Parce qu\'il doit être une étude ordonnée et thématique regroupant les éléments du texte par centres d\'intérêt',
            'Parce que le texte est trop long pour être lu en entier',
            'Parce que les vers pairs ne doivent jamais être analysés',
            'Parce que la lecture linéaire est réservée exclusivement aux élèves de collège'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le commentaire est dit « composé » parce qu\'il recompose le sens du texte autour de grands axes thématiques et stylistiques plutôt que de paraphraser vers après vers.'
        },
        {
          id: 'seconde_a_francais_ch2_p1_ex8',
          type: 'mcq',
          prompt: 'Comment formule-t-on l\'« Idée générale » d\'un texte à commenter ?',
          options: [
            'En résumant en une phrase synthétique le thème central, la tonalité et le message ou l\'émotion majeure véhiculée par l\'auteur',
            'En recopiant le premier vers du texte sans guillemets',
            'En énumérant la liste de toutes les rimes féminines',
            'En indiquant le nombre total de mots du texte'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'idée générale condense en une phrase percutante la teneur globale du texte, sa tonalité et la visée de l\'auteur.'
        }
      ]
    },
    {
      id: 'seconde_a_francais_ch2_p2_tableau_indices_analyse_interpretation',
      order: 2,
      title: 'Grille de lecture : Indices textuels, Outils stylistiques & Effets de sens',
      summary: 'Maîtriser la grille officielle à 3 colonnes : repérer les indices textuels, analyser les procédés littéraires et interpréter les effets de sens.',
      conceptExplanation: `L'étape maîtresse de la préparation du commentaire composé est la construction du sens à travers une grille d'analyse rigoureuse.

1. La grille officielle d'analyse à trois colonnes :
Pour chaque centre d'intérêt, le candidat dresse au brouillon un tableau d'analyse méthodique :
• Colonne 1 : **Indices textuels** : Ce sont les citations brutes et mots précis extraits du texte (placés entre guillemets).
• Colonne 2 : **Analyse (Outils linguistiques / stylistiques)** : C'est le repérage précis de la nature grammaticale, des figures de style, des temps verbaux, de la syntaxe ou du rythme.
• Colonne 3 : **Interprétations (Effets de sens)** : C'est l'explication de ce que ces procédés font ressentir au lecteur et de l'idée qu'ils traduisent.

2. Application sur le CI 1 d'Hugo (« L'amertume du poète ») :
• Indices : « morne », « stupeur », « ennui », « sombre paresse »
  - Analyse : Substantifs renvoyant au champ lexical de l'apathie et du découragement.
  - Interprétation : Traduit la profondeur du traumatisme et la perte de toute joie de vivre.
• Indices : « souffert », « saignant », « tombant », « raillé », « épuisé »
  - Analyse : Verbes de souffrance et participes passés/présents (champ lexical de la peine).
  - Interprétation : Exprime la diversité et la cruauté des épreuves physiques et morales endurées.
• Indices : « bagne terrestre », « forçats humains », « chaînon de la chaîne éternelle »
  - Analyse : Métaphore filée de l'univers carcéral (la prison, le bagne).
  - Interprétation : Présente la vie sur terre comme un enfer d'esclavage et de punition insupportable.
• Indices : « servi », « veillé » ≠ « riait », « objet de haine »
  - Analyse : Antithèse / Opposition violente des termes.
  - Interprétation : Met en évidence le scandaleux paradoxe de l'ingratitude humaine face à un dévouement total.

3. Application sur le CI 2 d'Hugo (« L'aspiration à la mort ») :
• Indices : « j'ai fait », « j'ai pu », « j'ai servi », « j'ai vu », « j'ai porté »
  - Analyse : Verbes au passé composé de l'indicatif à valeur d'aspect accompli.
  - Interprétation : Donne le sentiment d'un bilan d'existence définitivement achevé, d'un homme qui est au bout du rouleau.
• Indices : « Ouvrez-moi les portes de la nuit »
  - Analyse : Présent de l'impératif à valeur de prière ardente + métaphore (« portes de la nuit » = la mort).
  - Interprétation : Présente la mort non comme une fin tragique, mais comme une délivrance, un seuil bienfaisant et salvateur.`,
      formulas: [
        {
          name: 'La Grille Canonique d\'Analyse Littéraire',
          formula: '\\begin{array}{|c|c|c|} \\hline \\textbf{Indices Textuels} & \\textbf{Outils d\'Analyse} & \\textbf{Interprétations (Effet de sens)} \\\\ \\hline \\text{« citation exacte »} & \\text{Lexique, Grammaire, Figures} & \\text{Ce que cela traduit chez le lecteur} \\\\ \\hline \\end{array}',
          note: 'Outil obligatoire pour ne jamais tomber dans la paraphrase superficielle.'
        }
      ],
      keyRule: 'Chaque citation doit être accompagnée de son outil d\'analyse (procédé de style ou grammaire) ET de son effet de sens interprété !',
      workedExample: {
        title: 'Exemple officiel extrait de « Veni, vidi, vixi »',
        statement: 'Citations : « Dans ce bagne terrestre où ne s\'ouvre aucune aile / (...) J\'ai porté mon chaînon de la chaîne éternelle »',
        methodSteps: [
          'Étape 1 : Relever les indices : « bagne », « aile », « chaînon », « chaîne éternelle ».',
          'Étape 2 : Nommer le procédé littéraire : Métaphore filée du milieu carcéral et négation totale (« aucune aile »).',
          'Étape 3 : Interpréter l\'effet de sens : Assimilation de la condition humaine à une détention cruelle d\'où toute liberté et tout espoir d\'envol sont exclus.'
        ],
        conclusion: 'Le poète se sent esclave d\'une existence terrestre insupportable dont seule la mort peut briser les chaînes.'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch2_p2_ex1',
          type: 'mcq',
          prompt: 'Quelles sont les trois colonnes obligatoires de la grille préparatoire d\'analyse du commentaire composé ?',
          options: [
            'Indices textuels, Outils d\'analyse (procédés stylistiques/grammaticaux) et Interprétations (effets de sens)',
            'Titre du chapitre, Résumé du texte et Date de naissance de l\'auteur',
            'Calculs numériques, Grandeurs physiques et Unités légales',
            'Questions de cours, Réponses d\'élèves et Note sur 20'
          ],
          correctAnswerIndex: 0,
          explanation: 'La démarche officielle repose sur le triptyque : Indices textuels -> Outils d\'analyse -> Interprétations.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex2',
          type: 'mcq',
          prompt: 'Dans « Veni, vidi, vixi », quel procédé stylistique est utilisé dans l\'expression « bagne terrestre où ne s\'ouvre aucune aile » ?',
          options: [
            'Une métaphore filée carcérale associée à une négation totale marquant l\'enfermement et l\'absence de liberté',
            'Une litote exprimant une joie de vivre éclatante',
            'Un euphémisme atténuant un succès sportif',
            'Une anaphore sur la lettre Z'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le « bagne terrestre » est une métaphore de la Terre vue comme une prison, et « aucune aile » symbolise l\'impossibilité de s\'évader vers le ciel.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex3',
          type: 'mcq',
          prompt: 'Dans « Veni, vidi, vixi », que traduit grammaticalement la répétition des verbes au passé composé (« j\'ai fait », « j\'ai servi », « j\'ai vu », « j\'ai porté ») ?',
          options: [
            'L\'aspect accompli des actions, signifiant que le poète dresse le bilan d\'une existence achevée et qu\'il est au bout de sa route',
            'Une action future incertaine qui aura lieu l\'année prochaine',
            'Une habitude banale sans aucune importance pour le narrateur',
            'Un ordre militaire donné à des soldats en marche'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'aspect accompli du passé composé souligne la fin définitive du cycle : tout ce que le poète avait à accomplir est fait, sa vie est révolue.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex4',
          type: 'mcq',
          prompt: 'Dans « Veni, vidi, vixi », quelle figure de style oppose « servi, veillé » à « riait de ma peine, objet de haine » ?',
          options: [
            'Une antithèse (opposition de termes contraires mettant en relief l\'ingratitude des hommes face au dévouement du poète)',
            'Une allitération en voyelles ouvertes',
            'Une antiphrase ironique',
            'Une métonymie spatiale'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'antithèse souligne le contraste douloureux entre la générosité bienveillante du poète et la cruelle malveillance qu\'il a reçue en retour.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex5',
          type: 'mcq',
          prompt: 'Dans le vers « O Seigneur ! Ouvrez-moi les portes de la nuit », quelle métaphore désigne la mort ?',
          options: [
            '« les portes de la nuit »',
            '« O Seigneur »',
            '« Ouvrez-moi »',
            '« Veni, vidi »'
          ],
          correctAnswerIndex: 0,
          explanation: '« Les portes de la nuit » est une métaphore poétique désignant le trépas comme une entrée vers le repos éternel et le mystère divin.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex6',
          type: 'mcq',
          prompt: 'Dans l\'expression de Victor Hugo « en ma sombre paresse », quel procédé poétique associe deux mots de sens apparemment contradictoires ?',
          options: [
            'Un oxymore (alliance frappante de mots traduisant une apathie douloureuse et résignée)',
            'Un pléonasme inutile',
            'Une hyperbole mathématique',
            'Une assonance en consonne liquide'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'oxymore « sombre paresse » unit la noirceur morale au découragement apathique d\'un homme qui a renoncé à lutter.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex7',
          type: 'mcq',
          prompt: 'Dans « Femme noire » de Senghor, que produit la répétition initiale du vers « Femme nue, femme noire » ?',
          options: [
            'Une anaphore et une apostrophe lyrique célébrant la beauté, la pureté et la dignité sacrée de la femme africaine',
            'Une erreur de typographie commise par l\'éditeur',
            'Un dialogue théâtral comique entre deux personnages',
            'Une question rhétorique sans réponse'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'anaphore solennelle scande le poème comme une incantation et rend un hommage vibrant à l\'essence de la féminité noire.'
        },
        {
          id: 'seconde_a_francais_ch2_p2_ex8',
          type: 'mcq',
          prompt: 'Quelle est la conséquence grave si un élève se contente de citer des passages du texte sans jamais nommer aucun outil littéraire ni analyser leur effet ?',
          options: [
            'Il tombe dans la paraphrase superficielle et perd l\'essentiel des points d\'analyse stylistique',
            'Il obtient automatiquement la note maximale pour fidélité au texte',
            'Le correcteur considère que le commentaire est une pièce de théâtre',
            'L\'épreuve est annulée pour cause d\'encre bleue'
          ],
          correctAnswerIndex: 0,
          explanation: 'Citer le texte sans analyse technique (nommer les figures, étudier les temps, les sons, la syntaxe) n\'est qu\'une simple paraphrase rejetée aux examens.'
        }
      ]
    }
  ]
};

export const francais2deACommentaireComposePlanDetailleChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch3_commentaire_compose_organisation_plan',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
  order: 3,
  officialVolumeHours: 14,
  title: 'Le Commentaire Composé : Organisation des Idées & Plan Détaillé',
  summary: 'Méthodologie officielle du plan détaillé : hiérarchisation des remarques, découpage des centres d\'intérêt en sous-centres d\'intérêt et logique d\'enchaînement.',
  points: [
    {
      id: 'seconde_a_francais_ch3_p1_decoupage_sous_centres_interet',
      order: 1,
      title: 'Découpage des centres d\'intérêt en sous-centres cohérents',
      summary: 'Regrouper les indices textuels et outils stylistiques par affinité thématique pour former au moins deux sous-parties par centre d\'intérêt.',
      conceptExplanation: `Une fois le tableau d'analyse rempli, le candidat doit organiser ses remarques pour concevoir un plan détaillé solide.

1. Règle officielle d'architecture du commentaire :
• Le plan général est commandé par le libellé : chaque centre d'intérêt (CI) forme une grande partie du devoir (I et II).
• Chaque grande partie doit impérativement être subdivisée en **sous-centres d'intérêt** (au moins deux sous-parties : A et B, ou a, b, c).
• Chaque sous-centre d'intérêt traite un aspect précis et délimité du centre d'intérêt général.

2. Démarche pour classer les idées :
• Traiter les remarques dans un ordre logique : toujours aller du plus évident, du plus visible au plus subtil, du sens littéral au sens profond ou symbolique.
• Regrouper ensemble toutes les citations et outils qui convergent vers la même signification.
• Bannir l'éparpillement : ne jamais répéter la même citation dans deux sous-parties différentes.

3. Exemple officiel d'organisation sur Victor Hugo (*Veni, vidi, vixi*) :
Pour le Centre d'intérêt 1 : « L'amertume du poète » :
• **Sous-centre 1 : Les ressentiments du poète face à sa condition sociale**
  - Justification : Le poète est blessé par le contraste entre sa vie laborieuse (« servi », « veillé », « travaillé ») et le regard méprisant des hommes (« riait de ma peine », « objet de haine »).
• **Sous-centre 2 : Le malaise existentiel et la souffrance physique**
  - Justification : Cette hostilité crée un drame intime. Sa vie est un enfer assimilé à la réclusion (« bagne terrestre où ne s'ouvre aucune aile », « forçats humains »).
• **Sous-centre 3 : L'impassibilité et l'apathie du poète**
  - Justification : Découragé, il se détache du monde dans une indifférence amère (« ne daigne plus même répondre », oxymore « sombre paresse »).`,
      formulas: [
        {
          name: 'Architecture Canonique du Devoir',
          formula: '\\begin{aligned} \\textbf{I. Centre d\'Intérêt 1} &\\longrightarrow \\begin{cases} \\text{A. Sous-centre 1 (Idée directrice + Citations + Procédés)} \\\\ \\text{B. Sous-centre 2 (Idée directrice + Citations + Procédés)} \\end{cases} \\\\ \\textbf{II. Centre d\'Intérêt 2} &\\longrightarrow \\begin{cases} \\text{A. Sous-centre 1 (Idée directrice + Citations + Procédés)} \\\\ \\text{B. Sous-centre 2 (Idée directrice + Citations + Procédés)} \\end{cases} \\end{aligned}',
          note: 'Chaque sous-partie deviendra un paragraphe argumentatif complet dans la rédaction.'
        }
      ],
      keyRule: 'Chaque sous-centre d\'intérêt doit posséder sa propre idée directrice appuyée par au moins deux citations analysées !',
      workedExample: {
        title: 'Exemple officiel extrait du sujet sur Léopold Sédar Senghor (Femme noire)',
        statement: 'Organisation du CI 1 : « Le portrait de la femme noire »',
        methodSteps: [
          'Sous-centre 1 : Le portrait physique élogieux de la femme noire (Indices : « Femme nue, femme noire », « Fruit mûr à la chair ferme », « Gazelle aux attaches célestes » - Procédés : anaphore, métaphores, périphrases valorisantes).',
          'Sous-centre 2 : Le portrait moral et protecteur de la femme noire (Indices : « la douceur de tes mains bandait mes yeux », « J\'ai grandi à ton ombre », « Terre promise » - Procédés : personnification, métaphores de la mère protectrice et nourricière).'
        ],
        conclusion: 'L\'organisation est parfaite : on passe du portrait physique sensuel et plastique (évident) au portrait moral et spirituel protecteur (plus profond).'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch3_p1_ex1',
          type: 'mcq',
          prompt: 'Dans la structure d\'un commentaire composé, combien de sous-centres d\'intérêt doit comporter au minimum chaque grande partie ?',
          options: [
            'Au moins deux sous-centres d\'intérêt (chacun formant un paragraphe argumenté distinct)',
            'Strictement un seul paragraphe de 3 lignes pour tout le devoir',
            'Quinze sous-parties numérotées de 1 à 15',
            'Aucun sous-centre, un seul bloc compact de texte continu'
          ],
          correctAnswerIndex: 0,
          explanation: 'Chaque grande partie (centre d\'intérêt) doit comporter au minimum deux sous-centres d\'intérêt afin de développer une argumentation nuancée.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex2',
          type: 'mcq',
          prompt: 'Quel principe logique fondamental doit guider l\'ordre de présentation des sous-centres d\'intérêt à l\'intérieur d\'une partie ?',
          options: [
            'Aller du plus évident et apparent vers le plus subtil, caché et symbolique',
            'Tirer au sort l\'ordre des paragraphes à l\'aide d\'un dé',
            'Commencer toujours par l\'analyse de la toute dernière ligne du texte',
            'Classer les idées selon l\'ordre alphabétique des auteurs'
          ],
          correctAnswerIndex: 0,
          explanation: 'La progression logique va du sens littéral et immédiatement visible vers le sens figuré, symbolique et métaphysique.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex3',
          type: 'mcq',
          prompt: 'Dans l\'organisation du commentaire de « Femme noire », comment s\'articulent logiquement les deux sous-centres du portrait de la femme ?',
          options: [
            'Sous-centre 1 : Le portrait physique plastique et sensuel ; Sous-centre 2 : Le portrait moral maternel et protecteur',
            'Sous-centre 1 : La description d\'un animal de la savane ; Sous-centre 2 : Un exposé de géographie physique',
            'Sous-centre 1 : Les critiques contre l\'Europe ; Sous-centre 2 : Les danses rituelles',
            'Sous-centre 1 : L\'âge de la femme ; Sous-centre 2 : Sa profession'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le poète dépeint d\'abord la splendeur physique et sculpturale de la femme noire, avant de révéler son aura spirituelle et maternelle protectrice.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex4',
          type: 'mcq',
          prompt: 'Dans le commentaire de « Veni, vidi, vixi », quel sous-centre d\'intérêt rassemble les indices : « ne daigne plus même répondre », « sombre paresse » ?',
          options: [
            'L\'impassibilité, le détachement et l\'apathie du poète face au monde',
            'La joie intense de participer à une fête villageoise',
            'La volonté de se venger de ses ennemis par les armes',
            'L\'apprentissage d\'un nouveau métier artisanal'
          ],
          correctAnswerIndex: 0,
          explanation: 'Ces indices illustrent l\'état d\'abattement et d\'indifférence suprême où l\'homme blessé n\'a plus même la force de répliquer aux attaques.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex5',
          type: 'mcq',
          prompt: 'Que doit contenir chaque sous-centre d\'intérêt dans le plan détaillé préparé au brouillon ?',
          options: [
            'Une idée directrice claire, les citations d\'appui entre guillemets, le procédé d\'analyse et l\'interprétation de sens',
            'Uniquement une citation sans aucun commentaire',
            'La note que l\'élève espère obtenir à la fin du trimestre',
            'Un dessin schématique représentant le poète'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le plan détaillé fixe l\'ossature complète : idée + citations textuelles + outils d\'analyse stylistique + interprétation littéraire.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex6',
          type: 'mcq',
          prompt: 'Dans « Le dormeur du Val » de Rimbaud, quel est le thème officiel et quelle organisation du CI 1 (« La vie dans la nature ») préconise le programme ?',
          options: [
            'Thème : la mort. CI 1 découpé en : A. Une nature gaie et paisible ; B. Une nature vivante, rayonnante et accueillante',
            'Thème : la gastronomie. CI 1 découpé en : A. Les légumes ; B. Les fruits',
            'Thème : la navigation maritime. CI 1 découpé en : A. Les vagues ; B. Les bateaux',
            'Thème : l\'astronomie. CI 1 découpé en : A. Les comètes ; B. Les planètes'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le poème aborde le drame de la mort du soldat sur fond d\'une nature vibrante et protectrice, divisée en une nature paisible puis dynamique et maternelle.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex7',
          type: 'mcq',
          prompt: 'Pourquoi est-il interdit de recopier une même citation dans deux sous-parties différentes du devoir ?',
          options: [
            'Parce que cela engendre du piétinement argumentatif et montre un manque d\'idées et de rigueur',
            'Parce que l\'encre s\'efface si un mot est écrit deux fois',
            'Parce que les citations doivent toujours faire moins de deux lettres',
            'Parce que le texte ne contient que trois mots au total'
          ],
          correctAnswerIndex: 0,
          explanation: 'Répéter les mêmes citations donne l\'impression de tourner en rond et nuit gravement à la progression du commentaire.'
        },
        {
          id: 'seconde_a_francais_ch3_p1_ex8',
          type: 'mcq',
          prompt: 'Quelle est la fonction d\'une phrase de transition entre deux centres d\'intérêt dans le plan détaillé ?',
          options: [
            'Faire un bilan synthétique de la première partie et annoncer l\'axe d\'analyse de la seconde partie',
            'Annoncer que l\'heure de la récréation approche',
            'Raconter une anecdote personnelle vécue par l\'élève',
            'Demander au professeur de corriger avec indulgence'
          ],
          correctAnswerIndex: 0,
          explanation: 'La transition assure la fluidité du devoir en résumant ce qui vient d\'être démontré et en ouvrant logiquement sur le centre d\'intérêt suivant.'
        }
      ]
    }
  ]
};

export const francais2deACommentaireComposeRedactionCIChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch4_commentaire_compose_redaction_centre_interet',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
  order: 4,
  officialVolumeHours: 14,
  title: 'Le Commentaire Composé : Rédaction d\'un Centre d\'Intérêt',
  summary: 'Méthodologie officielle de la rédaction du développement : unité du paragraphe, structure quaternaire, intégration des citations et proscription des titres.',
  points: [
    {
      id: 'seconde_a_francais_ch4_p1_paragraphe_argumentatif_redaction',
      order: 1,
      title: 'Structure du paragraphe argumentatif (Idée, Citation, Analyse, Interprétation)',
      summary: 'Rédiger un paragraphe de commentaire composé selon la démarche quaternaire officielle : énoncer l\'idée, citer le texte, analyser le procédé et interpréter l\'effet.',
      conceptExplanation: `Le développement du commentaire composé est le lieu où se réalisent l\'analyse littéraire et l\'interprétation méthodique du texte.

1. Les règles d'or de la forme :
• Le commentaire est **entièrement rédigé** du début à la fin.
• **INTERDICTION ABSOLUE** de mettre des titres de parties, des sous-titres, des puces, des tirets ou des numéros (pas de « I/ », « A/ », etc. sur la copie rédigée) !
• L'unité de base de la rédaction est le **paragraphe**.
• Chaque paragraphe commence obligatoirement par un **alinéa** (retrait de deux carreaux).
• Entre les deux grandes parties (CI 1 et CI 2), on saute une ou deux lignes pour matérialiser la transition.

2. La structure quaternaire du paragraphe argumentatif :
Chaque paragraphe correspondant à un sous-centre d'intérêt se construit impérativement en 4 temps solidaires :
1. **Énoncer l'idée directrice** du sous-centre : Présenter clairement l'aspect du texte étudié dans ce paragraphe.
2. **Citer les indices textuels** : Insérer les mots exacts du texte entre guillemets et intégrés avec élégance dans la phrase.
3. **Analyser les indices textuels** : Nommer rigoureusement les outils grammaticaux et stylistiques (champs lexicaux, métaphores, temps verbaux, négations, rythmes).
4. **Interpréter les effets de sens** : Expliquer ce que ces procédés révèlent, l'effet produit sur le lecteur et le lien avec la sensibilité de l'auteur.

3. Formules de liaison et tournures stylistiques recommandées :
Pour éviter la paraphrase et fluidifier l'analyse, employer des formules dynamiques :
• « Cela se traduit par... »
• « En témoigne l'usage de... »
• « Ce procédé met en exergue / met en relief... »
• « L'auteur suggère ainsi que... »
• « Il ressort de cette opposition que... »`,
      formulas: [
        {
          name: 'La Règle Quaternaire du Paragraphe de Commentaire',
          formula: '\\text{Paragraphe} = \\text{Alinéa} + \\text{Idée directrice} + \\text{Citation intégrée} + \\text{Outil stylistique} + \\text{Interprétation littéraire}',
          note: 'Chaque sous-centre d\'intérêt doit former un paragraphe autonome et rigoureusement rédigé.'
        }
      ],
      keyRule: 'Zéro titre, zéro puce, zéro numéro dans le devoir rendu au correcteur ! Tout doit être rédigé sous forme de phrases complètes.',
      workedExample: {
        title: 'Exemple officiel de paragraphe rédigé (Arthur Rimbaud, Le dormeur du Val)',
        statement: 'Rédaction du paragraphe sur « La peinture de la nature vivante »',
        methodSteps: [
          '1. Idée directrice : « La nature vivante est suggérée par Arthur Rimbaud comme un tableau rayonnant. »',
          '2. Citation et Analyse : « Le cadre décrit est esquissé par l\'emploi de présentatifs : "C\'est un trou de verdure" ; "c\'est un petit val qui mousse de rayons" pour mettre en relief le décor. »',
          '3. Champ lexical et sensations : « Le poète saisit la nature dans toutes ses composantes, en témoigne la richesse du lexique : "rivière", "soleil", "herbe", et celui de la lumière : "d\'argent", "rayons", "d\'or" qui peint une nature paradisiaque. »',
          '4. Interprétation finale : « Ce tableau rayonnant éveille les sens par des notations tactiles ("le frais cresson"), visuelles ("lit vert") et olfactives ("les parfums"), faisant ressentir la fraîcheur, le bien-être et la plénitude de la nature. »'
        ],
        conclusion: 'Le paragraphe réunit les 4 composantes avec fluidité, sans jamais paraphraser et sans utiliser de tirets.'
      },
      exercises: [
        {
          id: 'seconde_a_francais_ch4_p1_ex1',
          type: 'mcq',
          prompt: 'Dans la copie officielle d\'un commentaire composé, quelle présentation est strictement interdite ?',
          options: [
            'Écrire des titres de parties, des numéros (« I », « A ») ou des listes à puces dans le développement',
            'Commencer chaque paragraphe par un alinéa',
            'Mettre les citations du texte entre guillemets',
            'Sauter une ligne entre les deux grands centres d\'intérêt'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le commentaire composé est un exercice de composition littéraire continue : les titres, sous-titres, chiffres et puces y sont rigoureusement proscrits.'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex2',
          type: 'mcq',
          prompt: 'Quels sont les 4 temps indispensables qui constituent la structure d\'un paragraphe argumentatif de commentaire ?',
          options: [
            'Énoncer l\'idée directrice, citer les indices textuels, analyser les outils littéraires, interpréter les effets de sens',
            'Écrire le titre du poème, donner le prix du livre, citer la date de naissance, signer de son nom',
            'Poser une addition, calculer la moyenne, tracer un graphique, encadrer le résultat',
            'Traduire le vers en anglais, le traduire en espagnol, le traduire en latin, faire une rime'
          ],
          correctAnswerIndex: 0,
          explanation: 'La démarche canonique du paragraphe repose sur l\'enchaînement : Idée directrice -> Citation exacte -> Outil stylistique -> Interprétation de l\'effet littéraire.'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex3',
          type: 'mcq',
          prompt: 'Par quelle marque typographique doit impérativement débuter chaque nouveau paragraphe du commentaire ?',
          options: [
            'Par un alinéa (un retrait de ligne de deux carreaux)',
            'Par un point d\'exclamation rouge',
            'Par une étoile ou un astérisque',
            'Par le mot « ATTENTION » en majuscules'
          ],
          correctAnswerIndex: 0,
          explanation: 'L\'alinéa est la marque visuelle conventionnelle indispensable qui signale l\'ouverture d\'une nouvelle unité de pensée (paragraphe).'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex4',
          type: 'mcq',
          prompt: 'Dans l\'exemple rédigé sur « Le dormeur du Val », quelle figure syntaxique est analysée dans « C\'est un trou de verdure » ; « c\'est un petit val qui mousse de rayons » ?',
          options: [
            'L\'emploi de présentatifs mettant vigoureusement en relief le décor naturel',
            'Une interrogation indirecte totale',
            'Une proposition subordonnée concessive',
            'Une interjection d\'effroi'
          ],
          correctAnswerIndex: 0,
          explanation: 'Le présentatif « c\'est » permet de poser le décor sous les yeux du lecteur comme un tableau vivant qui s\'offre immédiatement au regard.'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex5',
          type: 'mcq',
          prompt: 'Parmi les expressions suivantes, laquelle est recommandée pour introduire une analyse stylistique sans tomber dans la paraphrase ?',
          options: [
            '« Ce procédé met en exergue l\'angoisse du personnage et souligne... »',
            '« L\'auteur dit dans son texte que la vie est dure parce que... »',
            '« Moi personnellement je pense que le poème est joli... »',
            '« Comme le dit le dictionnaire Larousse à la page 42... »'
          ],
          correctAnswerIndex: 0,
          explanation: '« Met en exergue », « traduit », « suggère », « met en relief » sont les formules d\'analyse littéraire soutenues exigées aux examens.'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex6',
          type: 'mcq',
          prompt: 'Dans « Le dormeur du Val », quels types de notations sensorielles l\'analyse relève-t-elle pour montrer que la nature met les sens en éveil ?',
          options: [
            'Des notations tactiles (« frais cresson »), visuelles (« lit vert », « lumière ») et olfactives (« parfums »)',
            'Uniquement des sensations gustatives de plats cuisinés',
            'Des données thermiques mesurées en degrés Celsius',
            'Des bruits d\'avions et de sirènes militaires'
          ],
          correctAnswerIndex: 0,
          explanation: 'Rimbaud convoque tous les sens (le toucher du cresson, la vue de la lumière verte, l\'odorat des parfums) pour peindre une nature enchanteresse.'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex7',
          type: 'mcq',
          prompt: 'Comment doit être insérée une citation du texte dans le paragraphe rédigé ?',
          options: [
            'Entre guillemets français (« ... ») et insérée grammaticalement dans la phrase de l\'élève',
            'Soulignée en rouge avec un point d\'interrogation au-dessus',
            'Écrite verticalement dans la marge de gauche',
            'Séparée par une ligne blanche de pointillés'
          ],
          correctAnswerIndex: 0,
          explanation: 'Les citations doivent être rigoureusement entourées de guillemets et s\'intégrer harmonieusement dans la syntaxe de la phrase rédigée.'
        },
        {
          id: 'seconde_a_francais_ch4_p1_ex8',
          type: 'mcq',
          prompt: 'Que doit comporter la fin de la première grande partie pour assurer la cohérence avec la deuxième grande partie ?',
          options: [
            'Une phrase de transition faisant le bilan du premier centre d\'intérêt et annonçant le second',
            'La formule « À suivre au prochain numéro »',
            'La signature manuscrite du candidat',
            'Une page entièrement blanche'
          ],
          correctAnswerIndex: 0,
          explanation: 'La phrase de transition conclut le premier axe d\'étude et introduit avec élégance le second centre d\'intérêt.'
        }
      ]
    }
  ]
};

export const francais2deACommentaireComposeRedactionIntroChapter: CurriculumChapter = {
  id: 'seconde_a_francais_ch5_commentaire_compose_redaction_introduction',
  subjectId: 'francais',
  gradeLevel: 'seconde_a',
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
            '1. Annonce du plan -> 2. Conclusion générale -> 3. Nom de l\'auteur',
            '1. Présentation du texte -> 2. Annonce du plan -> 3. Amorce générale',
            '1. Signature de la copie -> 2. Biographie -> 3. Titre du texte'
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
            'L\'âge de l\'auteur, son numéro de téléphone, sa nationalité et sa religion',
            'Le nombre de pages du recueil, le prix en francs CFA et le nom de l\'imprimeur',
            'Uniquement le prénom de l\'auteur sans aucun autre détail'
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
            'À recopier le premier vers du poème en lettres capitales',
            'À raconter comment l\'élève s\'est réveillé le matin de l\'épreuve',
            'À saluer poliment le professeur qui corrige la copie'
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
            'En écrivant : « Grand I : Amertume. Grand II : Mort. »',
            'En disant : « Je vais faire ce que le sujet a demandé »',
            'En posant des équations mathématiques'
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
            'L\'essor des chemins de fer en France au dix-neuvième siècle',
            'L\'invention de la photographie en noir et blanc',
            'Le cours du dollar sur les marchés internationaux'
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
            'Nommer le titre de l\'œuvre entre guillemets',
            'Faire une phrase de plus de dix mots',
            'Utiliser des verbes conjugués au présent de l\'indicatif'
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
            'Tracer un grand trait rouge oblique barrant la page',
            'Écrire le mot « FIN DE L\'INTRODUCTION » en gros caractères',
            'Rendre immédiatement sa copie au surveillant sans faire le développement'
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
  francais2deACommentaireComposeAnalyseLibelleChapter,
  francais2deACommentaireComposePlanDetailleChapter,
  francais2deACommentaireComposeRedactionCIChapter,
  francais2deACommentaireComposeRedactionIntroChapter,
];
