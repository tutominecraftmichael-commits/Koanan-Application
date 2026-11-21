import type { CurriculumChapter } from '../../../../lib/curriculum/types';

export const TEF_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ===========================================================================
  // CHAPITRE 1 : MAÎTRISE LEXICALE, SÉMANTIQUE ET CORRECTION SYNTAXIQUE
  // ===========================================================================
  {
    id: 'lmd_entd_l1_tef_ch1',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Maîtrise lexicale, sémantique et correction syntaxique',
    summary:
      'Expliquer précisément les mots en contexte en respectant leur classe grammaticale, maîtriser les relations sémantiques, les connecteurs logiques, les accords du participe passé, la ponctuation et les registres de langue.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Technique d’Expression Française',
    points: [
      {
        id: 'lmd_entd_l1_tef_ch1_p1',
        order: 1,
        title: 'Explication de mots en contexte et relations sémantiques',
        summary:
          'Définir un mot selon son sens général puis contextuel en respectant sa classe grammaticale, et distinguer synonymie, antonymie, homonymie et paronymie.',
        conceptExplanation:
          'L’explication lexicale en contexte constitue la première étape de toute contraction de texte et mesure la finesse de compréhension. Elle exige une méthode en deux temps : dégager d’abord le sens général du mot, puis préciser sa nuance exacte dans la phrase étudiée, tout en respectant impérativement la classe grammaticale du terme défini (un nom s’explique par un nom, un adjectif par un adjectif, un verbe par un verbe). Cette précision repose sur la maîtrise des relations sémantiques : synonymie, antonymie, polysémie, homonymie, paronymie, dénotation et connotation.',
        keyRule:
          'Toujours identifier la nature grammaticale du mot avant de le définir, puis rédiger en deux temps : sens général d’abord, sens contextuel ensuite.',
        workedExample: {
          title: 'Expliquer l’adjectif « fulgurant » dans un texte économique',
          statement:
            'Expliquez en contexte l’expression : « L’essor fulgurant du paiement mobile en Afrique de l’Ouest transforme les habitudes commerciales. »',
          methodSteps: [
            'Identifier la classe grammaticale : « fulgurant » est un adjectif qualificatif masculin singulier (la définition doit donc employer un adjectif ou groupe adjectival).',
            'Donner le sens général : au sens général, « fulgurant » signifie extrêmement rapide, soudain et spectaculaire, comme un éclair.',
            'Préciser le sens contextuel : dans cette phrase, il qualifie la vitesse remarquable et l’ampleur immédiate avec lesquelles les transactions par téléphone mobile se sont imposées dans l’espace UEMOA.',
          ],
          conclusion:
            'Réponse rédigée : « L’adjectif “fulgurant” signifie au sens général extrêmement rapide et spectaculaire. Dans ce contexte, il souligne la vitesse impressionnante de l’adoption du paiement mobile dans les échanges commerciaux ouest-africains. »',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Méthode lexicale',
            stepTheme: 'Sens général et contextuel',
            stepTitle: 'Expliquer un mot en deux temps : sens général puis sens en contexte',
            paragraphText:
              'Un même mot change de nuance selon la phrase qui l’accueille : se contenter d’une définition de dictionnaire hors sol ne prouve pas la compréhension du texte.\n• **Sens général** : on commence par donner la signification habituelle du terme à l’aide d’un synonyme précis ou d’une périphrase claire.\n• **Sens contextuel** : on montre ensuite ce que ce mot désigne concrètement dans le passage, en s’appuyant sur les indices de la phrase ou du paragraphe.\n• **Exemple concret** : dans « cette réforme numérique a catalysé la création de start-up à Abidjan », « catalyser » signifie au sens général accélérer une réaction, et en contexte stimuler vivement l’essor entrepreneurial.',
            keyRule:
              'Une explication de vocabulaire complète comporte toujours deux phrases ou deux temps : le sens général, puis l’éclairage propre au texte.',
            konanTip:
              'Relisez toujours la phrase précédente et la phrase suivante : un texte contient presque toujours un indice explicite ou implicite (synonyme, opposition, exemple) qui éclaire le mot difficile.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle démarche garantit une réponse complète à une question de vocabulaire sur un texte ?',
              options: [
                'Donner uniquement un synonyme isolé sans construire de phrase.',
                'Donner le sens général du mot puis expliquer sa nuance précise dans le contexte du texte.',
                'Recopier intégralement la phrase du texte en soulignant le mot.',
                'Citer l’étymologie latine du mot sans mentionner son rôle dans le passage.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’approche méthodique exige de fournir d’abord le sens général du terme, puis de situer et préciser sa signification exacte dans le contexte du texte, le tout dans des phrases correctement construites.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Classe grammaticale',
            stepTheme: 'Équivalence morphosyntaxique',
            stepTitle: 'Respecter strictement la classe grammaticale (nom→nom, adj→adj, verbe→verbe)',
            paragraphText:
              'L’erreur la plus sanctionnée dans les questions de vocabulaire consiste à rompre la correspondance grammaticale entre le mot à expliquer et sa définition.\n• **Nom → Nom** : on définit « la résilience » par « la capacité de résistance et d’adaptation », jamais par « c’est quand on résiste ».\n• **Adjectif → Adjectif** : on définit « obsolète » par « dépassé, périmé », jamais par « qui ne marche plus du tout » en style relâché.\n• **Verbe → Verbe à l’infinitif** : on définit « endiguer » par « contenir, freiner », jamais par « le fait de bloquer ».\n• **Exemple concret** : pour expliquer le nom « dématérialisation », on écrit « remplacement des supports papier par des fichiers numériques », en commençant bien par un nom.',
            formula: {
              name: 'Règle d’équivalence grammaticale',
              formula: '\\text{Nom} \\to \\text{Nom} \\quad | \\quad \\text{Adjectif} \\to \\text{Adjectif} \\quad | \\quad \\text{Verbe} \\to \\text{Verbe}',
              note: 'Bannir absolument les tournures fautives « c’est quand… » ou « c’est lorsque… ».',
            },
            keyRule:
              'La définition doit toujours appartenir à la même classe grammaticale que le mot expliqué : nom par nom, adjectif par adjectif, verbe par verbe, adverbe par adverbe.',
            konanTip:
              'Test de substitution : remplacez mentalement le mot dans la phrase par votre équivalent ; si la phrase reste grammaticalement correcte, votre classe grammaticale est juste.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Parmi ces définitions de l’adjectif « pérenne », laquelle respecte rigoureusement la classe grammaticale ?',
              options: [
                'Pérenne, c’est quand une entreprise dure longtemps.',
                'Pérenne signifie la durée dans le temps.',
                'Pérenne signifie durable, qui se maintient solidement dans le temps.',
                'Pérenne veut dire durer sans jamais s’arrêter.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« Pérenne » est un adjectif qualificatif : il doit être défini par un adjectif (« durable ») ou une expansion adjectivale, et non par un nom (« la durée »), un verbe (« durer ») ou la tournure incorrecte « c’est quand ».',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Synonymie & Antonymie',
            stepTheme: 'Relations de sens',
            stepTitle: 'Maîtriser synonymie et antonymie selon le degré et le registre',
            paragraphText:
              'Deux mots ne sont presque jamais totalement interchangeables : la maîtrise du lexique repose sur le choix du terme juste selon son intensité et son contexte.\n• **Synonymie** : relation entre mots de même classe grammaticale ayant un sens proche (ex. : « crainte / peur / effroi » varient en intensité ; « travail / labeur / boulot » varient en registre).\n• **Antonymie** : relation d’opposition sémantique, qui peut être graduable (« cher / bon marché »), complémentaire (« connecté / déconnecté ») ou réciproque (« acheter / vendre »).\n• **Exemple concret** : dans un rapport bancaire à Dakar ou Abidjan, on remplace « gros déficit » par « déficit considérable » ou « déficit substantiel » plutôt que par un synonyme familier.',
            keyRule:
              'Un bon synonyme partage non seulement le sens de base, mais aussi la classe grammaticale, le registre de langue et la nuance d’intensité.',
            konanTip:
              'Pour vérifier un antonyme, vérifiez qu’il fonctionne dans le même contexte : le contraire de « frais » est « tiède » pour une boisson, « sec » pour du pain, et « fatigué » pour un étudiant.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Dans la phrase « Cette plateforme connaît une croissance timide », quel antonyme convient le mieux au contexte et au registre ?',
              options: [
                'Bavarde',
                'Vigoureuse',
                'Courageuse',
                'Amicale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans ce contexte économique, « timide » signifie faible ou hésitante ; son antonyme contextuel exact est « vigoureuse » (forte, soutenue), et non un antonyme du sens psychologique courant.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Homonymes & Paronymes',
            stepTheme: 'Confusions lexicales',
            stepTitle: 'Distinguer homonymie, polysémie et paronymie sans confusion',
            paragraphText:
              'La proximité sonore ou graphique entre deux mots piège fréquemment les rédacteurs et provoque des contresens graves dans un devoir universitaire.\n• **Polysémie** : un seul et même mot possède plusieurs sens reliés entre eux (ex. : « réseau » informatique, routier ou relationnel).\n• **Homonymie** : deux mots distincts se prononcent pareil (homophones : « compte / conte / comte ») ou s’écrivent pareil (homographes : « le voile / la voile ») sans lien de sens.\n• **Paronymie** : deux mots de forme très proche mais de sens différent (ex. : « conjoncture » = situation / « conjecture » = hypothèse ; « éminent » = remarquable / « imminent » = tout proche).\n• **Exemple concret** : écrire « une conjoncture économique favorable » est exact, alors qu’écrire « une conjecture économique » désignerait une simple supposition.',
            keyRule:
              'Les paronymes se ressemblent mais ne signifient pas la même chose : vérifiez toujours la lettre qui change le sens (ex. : perpétrer ≠ perpétuer, collision ≠ collusion).',
            konanTip:
              'Mémorisez les paires paronymiques classiques d’examen : « collision / collusion », « conjoncture / conjecture », « éminent / imminent », « allocation / allocution », « infecter / infester ».',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Complétez correctement : « Le ministre a prononcé une ___ remarquée avant l’annonce d’une ___ financière pour les jeunes entrepreneurs. »',
              options: [
                'allocation / allocution',
                'allocution / allocation',
                'conjecture / conjoncture',
                'élocution / location',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une « allocution » est un bref discours prononcé en public, tandis qu’une « allocation » est une aide financière versée par un organisme.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Dénotation & Connotation',
            stepTheme: 'Nuances sémantiques',
            stepTitle: 'Différencier sens propre, sens figuré, dénotation et connotation',
            paragraphText:
              'Comprendre un texte argumentatif suppose de saisir non seulement ce que les mots désignent objectivement, mais aussi les jugements de valeur qu’ils suggèrent.\n• **Sens propre vs sens figuré** : le sens propre est concret et premier (« une racine d’arbre ») ; le sens figuré est imagé (« les racines d’une crise économique »).\n• **Dénotation** : sens objectif, stable et neutre que l’on trouve dans le dictionnaire, partagé par tous les locuteurs.\n• **Connotation** : ensemble des valeurs affectives, culturelles ou idéologiques (mélioratives ou péjoratives) associées au mot en contexte.\n• **Exemple concret** : « économie » et « radinerie » renvoient à la même idée de dépense limitée, mais le premier est neutre ou mélioratif, tandis que le second est nettement péjoratif.',
            keyRule:
              'Repérer les connotations mélioratives (valorisantes) ou péjoratives (dévalorisantes) permet d’identifier immédiatement la prise de position implicite d’un auteur.',
            konanTip:
              'Pour détecter une connotation en examen, remplacez le mot par un synonyme neutre : si le jugement de valeur disparaît, le mot portait bien une connotation.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Dans la phrase « Ce projet digital n’est qu’un gadget coûteux », quelle est la valeur de l’emploi du nom « gadget » ?',
              options: [
                'Une dénotation strictement neutre et technique.',
                'Une connotation péjorative suggérant l’inutilité et le caractère superficiel du projet.',
                'Une connotation méliorative soulignant l’innovation.',
                'Un sens propre renvoyant à une pièce mécanique.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Associé à la restriction « ne… que » et à « coûteux », le mot « gadget » prend une connotation péjorative : l’auteur juge le projet accessoire et peu utile.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Rédaction modèle',
            stepTheme: 'Application complète',
            stepTitle: 'Rédiger une réponse académique irréprochable à une question de vocabulaire',
            paragraphText:
              'La présentation matérielle et syntaxique de votre réponse compte autant que la justesse du sens trouvé : évitez les réponses télégraphiques.\n• **Structure recommandée** : citez le mot entre guillemets, indiquez sa signification générale avec la même classe grammaticale, puis précisez son sens dans le texte.\n• **Connecteurs utiles** : « Au sens général, … signifie… ; dans ce contexte, il désigne… ».\n• **Piège à éviter** : ne reprenez jamais le mot lui-même (ou un mot de sa famille) dans sa définition (« démocratiser = rendre démocratique » est une tautologie).\n• **Exemple concret** : pour « essor » dans « l’essor des fintechs ivoiriennes », on écrit : « Le nom “essor” désigne au sens général un élan rapide vers le haut. Dans ce texte, il traduit le développement vigoureux et accéléré des start-up financières en Côte d’Ivoire. »',
            konanTip:
              'Ne réutilisez jamais le radical du mot à définir dans votre explication : cette redondance circulaire annule la valeur explicative de votre réponse.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi la définition « La mondialisation, c’est le fait de mondialiser les échanges » est-elle refusée à l’examen ?',
              options: [
                'Parce qu’elle est trop longue.',
                'Parce qu’elle reprend le même radical sans expliquer le sens (définition circulaire) et n’éclaire pas le contexte.',
                'Parce que le mot « échanges » est au pluriel.',
                'Parce qu’elle utilise un article défini.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Expliquer « mondialisation » par « mondialiser » est une tautologie (définition circulaire) qui n’apporte aucune explication réelle ni aucune mise en contexte.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch1_p2',
        order: 2,
        title: 'Les connecteurs logiques, leurs valeurs et les nuances délicates',
        summary:
          'Identifier les classes grammaticales et les valeurs des connecteurs logiques, et éviter les confusions classiques entre articulateurs proches.',
        conceptExplanation:
          'Les connecteurs logiques sont des mots-outils qui assurent la cohésion et la progression d’un raisonnement. Ils relient les phrases ou les paragraphes en explicitant la relation qui unit deux idées : cause, conséquence, but, opposition, concession, condition, addition, illustration ou conclusion. Ils appartiennent principalement aux conjonctions de coordination (mais, ou, et, donc, or, ni, car), aux conjonctions/locutions de subordination (parce que, bien que, afin que), aux adverbes/locutions adverbiales (cependant, en effet, par conséquent) et à certaines prépositions (malgré, grâce à). Maîtriser leurs nuances fines (enfin/finalement, par ailleurs/d’ailleurs, en effet/en fait, certes/certainement, au moins/du moins) est décisif tant en compréhension qu’en rédaction.',
        keyRule:
          'Chaque connecteur logique a une valeur précise et un sens de flèche logique : mal choisi, il inverse ou fausse tout le raisonnement.',
        workedExample: {
          title: 'Choisir entre « par ailleurs » et « d’ailleurs »',
          statement:
            'Complétez avec le connecteur adéquat : (1) « Il maîtrise Python ; ___ il a développé notre outil interne. » ; (2) « La réunion portera sur le budget ; ___ la direction présentera les nouveaux locaux. »',
          methodSteps: [
            'Analyser le lien dans (1) : le fait d’avoir développé l’outil confirme et renforce directement sa maîtrise de Python → « d’ailleurs ».',
            'Analyser le lien dans (2) : la présentation des locaux ajoute un autre sujet distinct du budget, sans lien de preuve → « par ailleurs ».',
          ],
          conclusion:
            'On écrit : (1) « d’ailleurs » (renforcement logique) et (2) « par ailleurs » (ajout d’un point distinct).',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Panorama logique',
            stepTheme: 'Rôle et familles',
            stepTitle: 'Identifier les grandes familles de connecteurs logiques et leurs classes',
            paragraphText:
              'Un texte argumentatif sans connecteurs ressemble à une liste de briques posées sans ciment : le lecteur ne perçoit plus l’enchaînement des preuves.\n• **Classes grammaticales** : conjonctions de coordination (« mais, car, donc, or »), conjonctions et locutions de subordination (« parce que, bien que, afin que »), adverbes et locutions adverbiales (« cependant, toutefois, en effet, par conséquent »), prépositions (« grâce à, malgré, en dépit de »).\n• **Deux grandes fonctions** : exprimer les relations logiques fondamentales (cause, conséquence, opposition, condition, but) et organiser le discours (énumération, addition, illustration, conclusion).\n• **Exemple concret** : remplacer un simple « et » par « par conséquent » ou « en revanche » clarifie instantanément votre démonstration.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau de synthèse des connecteurs logiques et leurs valeurs',
              caption: 'Repères essentiels pour analyser un texte ou structurer une argumentation.',
              tableData: {
                headers: ['Relation logique', 'Connecteurs clés', 'Rôle argumentatif'],
                rows: [
                  ['Cause', 'car, parce que, puisque, grâce à, faute de', 'Expliquer l’origine ou la raison d’un fait'],
                  ['Conséquence', 'donc, par conséquent, ainsi, si bien que, d’où', 'Énoncer le résultat ou l’effet logique'],
                  ['Opposition', 'mais, en revanche, au contraire, tandis que, or', 'Opposer deux faits ou réfuter une thèse'],
                  ['Concession', 'certes… mais, bien que, quoique, malgré, toutefois', 'Admettre une limite tout en maintenant sa thèse'],
                  ['Condition / But', 'si, à condition que, pourvu que / afin que, pour', 'Poser une hypothèse ou viser un objectif'],
                  ['Addition / Bilan', 'de plus, en outre, d’ailleurs / en somme, enfin', 'Enrichir un argument ou clore le raisonnement'],
                ],
              },
            },
            keyRule:
              'On distingue les connecteurs de relation logique (cause, conséquence, opposition, but, condition) et les connecteurs organisationnels (classement, addition, illustration, conclusion).',
            konanTip:
              'Lors d’une lecture d’examen, encadrez les connecteurs au crayon : ils dessinent instantanément le plan logique du texte avant même la deuxième lecture.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'À quelles classes grammaticales appartiennent principalement les connecteurs logiques ?',
              options: [
                'Uniquement aux noms communs et aux adjectifs qualificatifs.',
                'Aux adverbes/locutions adverbiales, conjonctions de coordination, conjonctions/locutions de subordination et prépositions.',
                'Exclusivement aux verbes conjugués au présent de l’indicatif.',
                'Uniquement aux pronoms personnels et possessifs.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les connecteurs logiques relèvent de quatre classes principales : adverbes/locutions adverbiales (cependant, en effet), conjonctions de coordination (car, donc), conjonctions/locutions de subordination (bien que, parce que) et prépositions (malgré, grâce à).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Cause, Effet, But',
            stepTheme: 'Sens de la flèche',
            stepTitle: 'Distinguer cause, conséquence et but sans inverser le raisonnement',
            paragraphText:
              'La confusion entre cause et conséquence détruit la rigueur d’une synthèse ou d’une dissertation.\n• **Cause (fait antérieur qui explique)** : introduite par « car, parce que, puisque, étant donné que, grâce à (cause positive), à cause de (cause négative), faute de ».\n• **Conséquence (résultat qui découle)** : introduite par « donc, par conséquent, si bien que, de sorte que, c’est pourquoi, dès lors ».\n• **But (objectif visé, non encore atteint)** : introduit par « afin que, pour que, en vue de, de peur que » (suivi du subjonctif avec « que »).\n• **Exemple concret** : « La fibre optique s’est étendue (cause), par conséquent le télétravail progresse (conséquence) » ≠ « On déploie la fibre afin que les PME gagnent en productivité (but) ».',
            keyRule:
              'Vérifiez toujours le sens de la flèche : Cause → Fait → Conséquence ; le But vise un effet futur souhaité ou redouté.',
            konanTip:
              'Attention à la connotation : « grâce à » s’emploie uniquement pour une cause favorable (« grâce à son travail »), jamais pour un problème (« à cause de la panne », pas « grâce à la panne »).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Dans la phrase « L’entreprise renforce sa cybersécurité de crainte que ses données ne soient piratées », quelle relation logique exprime « de crainte que » ?',
              options: [
                'La cause réalisée',
                'La conséquence involontaire',
                'Le but (objectif à éviter)',
                'La concession',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« De crainte que » (comme « de peur que ») exprime un but négatif : l’action est menée dans l’objectif d’empêcher un événement redouté.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Nuancer sa pensée',
            stepTheme: 'Opposition & Concession',
            stepTitle: 'Maîtriser opposition, concession et restriction',
            paragraphText:
              'Savoir nuancer une idée est la marque d’une pensée universitaire mature : l’opposition frontale ne suffit pas toujours.\n• **Opposition** : met face à face deux réalités contraires ou incompatibles (« mais, au contraire, en revanche, tandis que, alors que, à l’inverse »).\n• **Concession** : admet un fait ou un argument adverse tout en maintenant sa propre thèse (« certes… mais, bien que + subjonctif, quoique + subjonctif, malgré + nom, même si + indicatif »).\n• **Restriction** : soustrait un élément ou limite la portée d’une affirmation (« excepté, hormis, sauf, uniquement, ne… que »).\n• **Exemple concret** : « Bien que la numérisation demande un investissement initial lourd (concession), elle réduit durablement les coûts administratifs (thèse maintenue). »',
            keyRule:
              '« Bien que » et « quoique » exigent toujours le subjonctif ; « malgré » est suivi d’un groupe nominal (jamais de « que » : on ne dit pas « malgré qu’il pleuve »).',
            konanTip:
              'Ne confondez pas « quoique » en un mot (= bien que : « quoiqu’il soit tard ») et « quoi que » en deux mots (= quelle que soit la chose que : « quoi qu’il dise »).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle phrase exprime correctement une concession en français soutenu ?',
              options: [
                'Malgré qu’il a peu de temps, il termine son rapport.',
                'Bien qu’il dispose de peu de temps, il termine son rapport avec rigueur.',
                'Bien qu’il a peu de temps, il termine son rapport.',
                'Quoi qu’il est fatigué, il continue sa révision.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Bien que » est suivi du subjonctif présent (« dispose »). « Malgré que » est incorrect (il faut « malgré + nom »), et « bien que » ou « quoique » ne se construisent jamais avec l’indicatif.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Structurer le texte',
            stepTheme: 'Connecteurs organisationnels',
            stepTitle: 'Ordonner, illustrer et conclure avec des articulateurs précis',
            paragraphText:
              'Les connecteurs organisationnels guident le lecteur d’un bout à l’autre d’un paragraphe ou d’une dissertation.\n• **Classement et énumération** : « d’abord, en premier lieu, ensuite, en second lieu, enfin » structurent les étapes sans lourdeur.\n• **Addition et gradation** : « de plus, en outre, de surcroît, non seulement… mais encore, voire » ajoutent un argument plus fort.\n• **Explication et illustration** : « c’est-à-dire, autrement dit, notamment, ainsi, tel est le cas de » clarifient et exemplifient.\n• **Conclusion et synthèse** : « en somme, en définitive, au terme de cette analyse, en conclusion » referment la démonstration.\n• **Exemple concret** : « Le commerce électronique facilite l’accès aux marchés ; de surcroît, il permet aux artisans locaux de vendre au-delà de leur ville, notamment via les réseaux sociaux. »',
            keyRule:
              'Variez vos articulateurs organisationnels et vérifiez leur cohérence : si vous ouvrez par « d’une part », vous devez obligatoirement fermer par « d’autre part ».',
            konanTip:
              'N’alignez jamais deux connecteurs redondants comme « mais cependant » ou « car en effet » : choisissez un seul articulateur précis.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quel connecteur introduit spécifiquement une reformulation explicative plutôt qu’une simple addition ?',
              options: [
                'De surcroît',
                'En outre',
                'Autrement dit',
                'En revanche',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« Autrement dit » (comme « c’est-à-dire » ou « en d’autres termes ») introduit une explication ou une reformulation de l’idée précédente, alors que « de surcroît » et « en outre » ajoutent une idée nouvelle.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Articulateurs pièges (1)',
            stepTheme: 'Nuances fines',
            stepTitle: 'Ne plus confondre « enfin / finalement » et « par ailleurs / d’ailleurs »',
            paragraphText:
              'Certains couples d’articulateurs très proches cachent des nuances logiques majeures souvent testées en examen.\n• **Enfin vs Finalement** : « enfin » clôt simplement une énumération (= pour finir : « d’abord…, ensuite…, enfin… »). « Finalement » signifie « en fin de compte » et marque souvent un revirement ou un dénouement inattendu (« je craignais un échec, mais finalement j’ai validé »).\n• **Par ailleurs vs D’ailleurs** : « par ailleurs » est neutre et introduit une idée nouvelle distincte (= d’autre part, en outre). « D’ailleurs » renforce et confirme directement l’affirmation qui précède (= du reste, de fait).\n• **Exemple concret** : « Il est arrivé en retard ; d’ailleurs il a manqué le début de l’exposé » (confirmation logique), contre « Le budget est validé ; par ailleurs, la date du séminaire est fixée au 12 mai » (information distincte).',
            keyRule:
              '« Enfin » = dernier point d’une liste ; « Finalement » = en fin de compte (souvent après hésitation). « D’ailleurs » = confirme ; « Par ailleurs » = ajoute un autre point.',
            konanTip:
              'Test rapide : si vous pouvez remplacer par « d’un autre côté / sur un autre point », utilisez « par ailleurs » ; si vous pouvez remplacer par « ce qui le prouve / du reste », utilisez « d’ailleurs ».',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Dans « Nous hésitions à lancer l’application en mars, mais ___ nous avons choisi avril », quel connecteur est le plus exact ?',
              options: [
                'enfin',
                'finalement',
                'par ailleurs',
                'd’ailleurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Finalement » signifie « en fin de compte » et traduit le dénouement après une hésitation ou un changement de décision, contrairement à « enfin » qui termine une énumération.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Articulateurs pièges (2)',
            stepTheme: 'Nuances fines',
            stepTitle: 'Distinguer « en effet / en fait », « certes / certainement » et « au moins / du moins »',
            paragraphText:
              'Trois autres paires d’articulateurs inversent le sens d’une phrase lorsqu’elles sont confondues.\n• **En effet vs En fait** : « en effet » confirme et explique l’énoncé précédent (= effectivement, car). « En fait » rectifie ou nuance en introduisant une réalité différente (= en réalité, mais).\n• **Certes vs Certainement** : « certes » concède un point avant une objection (« certes…, mais… »). « Certainement » exprime une forte probabilité ou certitude (= sûrement).\n• **Au moins vs Du moins** : « au moins » exprime un minimum quantitatif ou concret (« au moins deux heures »). « Du moins » introduit une restriction prudente sur ce qu’on vient d’affirmer (« il réussira, du moins je l’espère »).\n• **Exemple concret** : « Le réseau est rapide ; en fait, il sature aux heures de pointe » (rectification) ≠ « Le réseau est rapide ; en effet, le débit atteint 100 Mb/s » (confirmation).',
            keyRule:
              '« En effet » confirme/explique ; « En fait » rectifie. « Certes » concède ; « Certainement » affirme. « Au moins » = minimum ; « Du moins » = restriction.',
            konanTip:
              'Avant d’écrire « en fait », vérifiez que vous corrigez vraiment une idée précédente ; si vous donnez une preuve qui confirme, c’est « en effet » qu’il faut employer.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Complétez : « Ce logiciel semble gratuit ; ___, ses fonctions clés sont payantes. Il coûte ___ 15 000 FCFA par mois. »',
              options: [
                'en effet / du moins',
                'en fait / au moins',
                'en effet / au moins',
                'en fait / du moins',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La seconde proposition corrige l’apparence de gratuité → « en fait » (= en réalité). Le montant représente un minimum quantitatif → « au moins ».',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch1_p3',
        order: 3,
        title: 'Accord du participe passé et ponctuation logique',
        summary:
          'Maîtriser les règles générales et les cas particuliers d’accord du participe passé ainsi que la valeur syntaxique des signes de ponctuation.',
        conceptExplanation:
          'La maîtrise orthographique en licence exige une application sûre des règles d’accord du participe passé (employé seul, avec « être », avec « avoir » et ses cas particuliers, ainsi qu’avec les verbes pronominaux). En parallèle, la ponctuation n’est pas un simple ornement respiratoire : virgule, point-virgule, deux-points, parenthèses et tirets organisent la syntaxe et clarifient les relations logiques (cause, explication, énumération, opposition) dans tout écrit académique ou professionnel.',
        keyRule:
          'Avec « avoir » : accord uniquement avec le C.O.D. placé AVANT (sauf « en », « le » neutre, impersonnels et sens propre de coûter/peser/valoir). Pour les pronominaux réfléchis, remplacez « être » par « avoir » pour tester la fonction de « se ».',
        formulas: [
          {
            name: 'Test rapide des verbes pronominaux réfléchis',
            formula: '\\text{Remplacer « être » par « avoir »} \\implies \\text{si « se » = C.O.D. (accord) ; si « se » = C.O.I./C.O.S. (invariable)}',
            note: 'Ex. : « Elles se sont lavé les mains » → elles ont lavé quoi ? les mains (C.O.D. après) ; à qui ? à elles (se = C.O.S.) → invariable.',
          },
        ],
        workedExample: {
          title: 'Accorder trois participes passés délicats',
          statement:
            'Accordez correctement : (1) « Les efforts qu’a coût… cette certification » ; (2) « Elle s’est pl… à Yamoussoukro » ; (3) « Elles se sont envoy… des messages ».',
          methodSteps: [
            '(1) « Coûter » est ici au sens figuré (= exiger) : « que » (= les efforts) est C.O.D. antéposé → « coûtés ».',
            '(2) « Se plaire » fait partie des verbes pronominaux toujours invariables → « plu ».',
            '(3) Test « avoir » : elles ont envoyé quoi ? des messages (C.O.D. après) ; à qui ? à elles (se = C.O.S.) → « envoyé ».',
          ],
          conclusion:
            'Formes exactes : « coûtés », « plu » et « envoyé ».',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Seul & Être',
            stepTheme: 'Bases du participe passé',
            stepTitle: 'Accorder le participe passé employé seul et avec l’auxiliaire « être »',
            paragraphText:
              'Avant d’accorder un participe passé, identifiez son emploi dans la phrase : il obéit à des règles nettes selon qu’il accompagne un nom ou un auxiliaire.\n• **Employé seul (sans auxiliaire)** : il fonctionne comme un adjectif qualificatif et s’accorde en genre et en nombre avec le nom qu’il qualifie (« Fatigués, les candidats relisent leurs copies corrigées »).\n• **Avec l’auxiliaire « être »** : il s’accorde en genre et en nombre avec le sujet du verbe (« La plateforme est sécurisée » ; « Les données sont archivées »).\n• **Sujets de genres différents** : lorsque les sujets coordonnés mêlent masculin et féminin, le masculin pluriel l’emporte (« La tablette et le serveur ont été configurés »).\n• **Exemple concret** : dans « Validée dès mardi, la facture et le devis ont été transmis au comptable », « validée » s’accorde avec « facture », et « transmis » avec l’ensemble masculin pluriel.',
            keyRule:
              'Employé seul = accord comme un adjectif avec le nom ; avec « être » = accord avec le sujet (masculin pluriel si sujets de genres mixtes).',
            konanTip:
              'En cas de doute sur la terminaison muette d’un participe passé (écrit / pris / couvert), mettez-le mentalement au féminin : « écrite, prise, couverte » révèle aussitôt la consonne finale.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle phrase présente des accords de participes passés entièrement corrects ?',
              options: [
                'La note et le rapport ont été validées ce matin.',
                'Épuisée par la réunion, la directrice est rentré tôt.',
                'La note et le rapport ont été validés ce matin.',
                'Les serveurs sont protégé par un pare-feu.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les sujets coordonnés « la note » (fém.) et « le rapport » (masc.) imposent l’accord au masculin pluriel avec l’auxiliaire « être » : « ont été validés ».',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Auxiliaire avoir',
            stepTheme: 'C.O.D. et exceptions',
            stepTitle: 'Appliquer la règle d’« avoir » et ses exceptions (« en », « le » neutre, impersonnels)',
            paragraphText:
              'Avec l’auxiliaire « avoir », le participe passé ne s’accorde jamais avec le sujet : seule compte l’existence d’un C.O.D. placé AVANT le verbe.\n• **Règle générale** : accord avec le C.O.D. antéposé (« Les dossiers qu’elle a traités ») ; invariable si le C.O.D. est après (« Elle a traité les dossiers ») ou absent (« Ils ont répondu à la lettre »).\n• **Pronom neutre « le / l’ »** : invariable lorsqu’il reprend toute une proposition (« La panne était plus grave que je ne l’avais prévu »).\n• **Pronom adverbial « en »** : invariable (« Des propositions, nous en avons reçu »).\n• **Verbes impersonnels et semi-auxiliaires** : toujours invariables (« Les ressources qu’il a fallu mobiliser » ; « Les fichiers que j’ai pu récupérer »).',
            keyRule:
              'Avec « avoir », posez toujours la question « sujet + verbe + quoi/qui ? » : si la réponse est placée avant et n’est ni « en » ni « le » neutre, accordez.',
            konanTip:
              'Ne vous laissez jamais tromper par un C.O.I. placé avant : dans « Les clients auxquels nous avons parlé », « auxquels » répond à « à qui ? » (C.O.I.), donc « parlé » reste invariable.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Complétez correctement : « La réforme a réussi, comme nous l’avions ___ ; quant aux obstacles, nous en avons ___ beaucoup. »',
              options: [
                'espérée / surmontés',
                'espéré / surmonté',
                'espérés / surmontés',
                'espérée / surmonté',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« l’ » est un pronom neutre reprenant toute la proposition (« que la réforme réussisse ») et « en » est un pronom adverbial : les deux participes passés restent invariables.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Cas délicats avoir',
            stepTheme: 'Mesure & Infinitif',
            stepTitle: 'Maîtriser les verbes de mesure (coûter, peser, valoir) et le participe suivi d’un infinitif',
            paragraphText:
              'Deux subtilités classiques de l’auxiliaire « avoir » départagent les meilleures copies.\n• **Coûter, peser, valoir, vivre, courir** : au sens propre (prix, poids, durée), ils sont intransitifs et le complément est circonstanciel de mesure → invariable (« Les cinq millions qu’a coûté ce serveur »). Au sens figuré (= exiger, procurer, endurer), ils ont un vrai C.O.D. → accord (« Les nuits blanches qu’a coûtées ce projet »).\n• **Participe passé suivi d’un infinitif** : si le C.O.D. antéposé fait l’action de l’infinitif, on accorde (« Les intervenants que j’ai entendus parler ») ; s’il la subit (l’infinitif étant complément), on laisse invariable (« La pièce que j’ai vu jouer »).\n• **Exemple concret** : « Les risques que nous avons courus » (sens figuré = encourus → accord) ≠ « Les dix kilomètres que nous avons couru » (distance → invariable).',
            keyRule:
              'Sens propre de mesure = invariable ; sens figuré = accord. Devant un infinitif : accord si le C.O.D. fait l’action, invariable s’il la subit.',
            konanTip:
              'Pour le participe suivi d’un infinitif, posez la question « Qui fait l’action de l’infinitif ? » : dans « la pièce que j’ai vu jouer », la pièce ne joue pas, elle est jouée → invariable.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle phrase applique correctement la règle des verbes de mesure et du participe suivi d’un infinitif ?',
              options: [
                'Les dix millions qu’a coûtés ce logiciel sont amortis.',
                'Les efforts qu’a coûtés cette réforme portent leurs fruits.',
                'La conférence que j’ai entendue enregistrer était claire.',
                'Les trois heures qu’il a vécues à attendre furent longues.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans « Les efforts qu’a coûtés cette réforme », « coûter » est au sens figuré (= exiger des efforts), donc « que » est un véritable C.O.D. antéposé et entraîne l’accord au masculin pluriel.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Verbes pronominaux',
            stepTheme: 'Réfléchis & Exceptions',
            stepTitle: 'Accorder le participe passé des verbes pronominaux sans hésitation',
            paragraphText:
              'Bien que conjugués avec « être », les verbes pronominaux suivent deux logiques différentes selon le rôle du pronom réfléchi « se ».\n• **Essentiellement pronominaux et sens passif** : « se » ne peut s’analyser séparément → accord avec le sujet (« Ils se sont aperçus de l’erreur » ; « La salle s’est vidée »).\n• **Exceptions toujours invariables** : « se plaire, se complaire, se déplaire, se rire de, se jouer de, se rendre compte, se nuire, se convenir, se succéder » (« Elle s’est plu ici » ; « Ils se sont succédé »).\n• **Verbes réfléchis et réciproques** : remplacez « être » par « avoir » pour voir si « se » est C.O.D. (« Elles se sont rencontrées » = elles ont rencontré elles → accord) ou C.O.I./C.O.S. (« Elles se sont téléphoné » = téléphoné à elles ; « Ils se sont lavé les mains » → invariable).',
            formula: {
              name: 'Méthode en 3 filtres pour les verbes pronominaux',
              formula: '\\text{1. Liste invariable ?} \\to \\text{2. Essentiellement pronominal/passif (accord sujet) ?} \\to \\text{3. Test « avoir » (accord C.O.D. avant)}',
            },
            keyRule:
              'Pour tout verbe pronominal réfléchi ou réciproque, substituez « avoir » à « être » : accordez seulement si le C.O.D. précède le verbe.',
            konanTip:
              '« Se rendre compte » est toujours invariable (« Elles se sont rendu compte de l’erreur »), car « compte » est le C.O.D. placé après le verbe.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Choisissez la phrase parfaitement orthographiée :',
              options: [
                'Elles se sont rendues compte de leur oubli.',
                'Ils se sont succédés à la tête du service.',
                'Elles se sont écrit de longues lettres pendant le stage.',
                'Elles se sont téléphonées hier soir.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans « Elles se sont écrit de longues lettres », le C.O.D. (« de longues lettres ») est placé après et « se » est C.O.S. (« à elles »), donc « écrit » est invariable. « Se rendre compte », « se succéder » et « se téléphoner » restent également invariables.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Ponctuation logique',
            stepTheme: 'Valeur des signes',
            stepTitle: 'Utiliser la ponctuation comme outil de clarté logique et syntaxique',
            paragraphText:
              'La ponctuation ne sert pas uniquement à respirer : chaque signe porte une valeur logique précise qui structure la pensée.\n• **La virgule (,)** : isole une apposition, une incise, un complément déplacé en tête de phrase ou sépare les termes d’une énumération.\n• **Le point-virgule (;)** : marque une pause intermédiaire entre deux propositions grammaticalement indépendantes mais étroitement liées par le sens (parallélisme, opposition, bilan).\n• **Les deux-points (:)** : annoncent une énumération, une citation, ou remplacent un connecteur de cause ou de conséquence (« Il a réussi : il avait travaillé méthodiquement »).\n• **Parenthèses et tirets** : isolent une précision secondaire (parenthèses) ou mettent en relief une remarque importante (tirets).',
            keyRule:
              'Le point-virgule relie deux idées étroitement unies sans couper le raisonnement ; les deux-points introduisent une explication, une cause, une conséquence ou une énumération.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Dans « Le serveur a surchauffé : l’ensemble du site est resté inaccessible deux heures », quelle relation logique les deux-points remplacent-ils ?',
              options: [
                'Une opposition frontale',
                'Une conséquence (équivalent de « par conséquent »)',
                'Une condition hypothétique',
                'Une simple énumération',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ici, la seconde proposition exprime le résultat direct de la première : les deux-points jouent le rôle d’un connecteur de conséquence implicite.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Fautes de ponctuation',
            stepTheme: 'Pièges syntaxiques',
            stepTitle: 'Éviter les erreurs de ponctuation qui brisent la syntaxe ou changent le sens',
            paragraphText:
              'Une virgule mal placée peut rendre une phrase grammaticalement fausse ou inverser totalement le message d’un contrat ou d’un rapport.\n• **Interdiction absolue** : ne placez jamais une virgule unique entre le sujet et son verbe (« Les étudiants de première année, doivent rendre leur dossier » est fautif), ni entre un verbe et son C.O.D. direct.\n• **Double virgule obligatoire** : si vous insérez une apposition ou un complément entre sujet et verbe, encadrez-le de DEUX virgules (« Les étudiants, conscients de l’enjeu, révisent tôt »).\n• **Impact sur le sens** : comparez « Les étudiants, qui ont révisé, réussiront » (tous ont révisé : relative explicative) et « Les étudiants qui ont révisé réussiront » (seuls ceux-là : relative déterminative).\n• **Exemple concret** : dans un résumé ou un écrit pro, une ponctuation soignée évite les phrases interminables de six lignes sans point.',
            keyRule:
              'Jamais de virgule unique entre le sujet et le verbe : soit zéro virgule, soit deux virgules encadrant une incise.',
            konanTip:
              'Relisez vos phrases longues à voix basse : si vous perdez le fil avant le point final, coupez en deux phrases nettes ou utilisez un point-virgule.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle phrase est correctement ponctuée selon les règles de syntaxe française ?',
              options: [
                'La transformation digitale des PME ivoiriennes, exige des compétences nouvelles.',
                'La transformation digitale des PME ivoiriennes exige, des compétences nouvelles.',
                'La transformation digitale, véritable levier de croissance, exige des compétences nouvelles.',
                'La transformation digitale, véritable levier de croissance exige des compétences nouvelles.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’apposition « véritable levier de croissance » est correctement encadrée par deux virgules ; aucune virgule unique ne sépare le sujet de son verbe ni le verbe de son C.O.D.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch1_p4',
        order: 4,
        title: 'Registres de langue, correction syntaxique et pléonasmes',
        summary:
          'Distinguer les trois registres de langue, éliminer les pléonasmes, barbarismes et fautes de construction verbale pour atteindre une prose claire et concise.',
        conceptExplanation:
          'Une expression universitaire et professionnelle irréprochable repose sur l’adéquation du registre de langue (courant ou soutenu, jamais familier), la propreté lexicale (élimination des pléonasmes et des impropriétés) et la justesse syntaxique (constructions verbales correctes, emploi exact des pronoms relatifs « dont / que / où »). Maîtriser ces réflexes de révision stylistique transforme un brouillon hésitant en un texte clair, précis et crédible.',
        keyRule:
          'Dans tout écrit universitaire ou professionnel, adoptez le registre courant ou soutenu, chassez les pléonasmes et vérifiez la préposition exigée par chaque verbe.',
        workedExample: {
          title: 'Corriger un paragraphe professionnel fautif',
          statement:
            'Corrigez : « Pour pallier à ce problème, nous devons collaborer ensemble et nous rappeler de la méthode dont nous avons besoin pour prévoir à l’avance les risques. »',
          methodSteps: [
            '« Pallier » est transitif direct (jamais de « à ») → « pallier ce problème ».',
            '« Collaborer ensemble » est un pléonasme (le préfixe « co- » signifie déjà « ensemble ») → « collaborer ».',
            '« Se rappeler » est transitif direct (contrairement à « se souvenir de ») → « nous rappeler la méthode ».',
            '« Prévoir à l’avance » est un pléonasme (« pré- » signifie déjà « à l’avance ») → « prévoir les risques ».',
          ],
          conclusion:
            'Phrase corrigée : « Pour pallier ce problème, nous devons collaborer et nous rappeler la méthode dont nous avons besoin pour prévoir les risques. »',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Niveaux de langue',
            stepTheme: 'Registres',
            stepTitle: 'Distinguer les registres familier, courant et soutenu',
            paragraphText:
              'Un même message se formule différemment selon la situation de communication et le statut de l’interlocuteur.\n• **Registre familier** : syntaxe relâchée (suppression du « ne » de négation : « j’ai pas vu »), lexique argotique ou abrégé (« boulot, truc, galérer ») ; à proscrire totalement à l’écrit académique.\n• **Registre courant** : français standard, clair, correct et naturel (« travailler, difficulté, rencontrer un obstacle ») ; socle idéal des comptes rendus et courriels.\n• **Registre soutenu** : lexique recherché, syntaxe élaborée, inversion sujet-verbe, imparfait du subjonctif ou tournures nuancées (« œuvrer, écueil, nonobstant ») ; valorisé en dissertation et discours officiel.\n• **Exemple concret** : « Ce dossier est super galère » (familier) → « Ce dossier est très complexe » (courant) → « Ce dossier présente une complexité redoutable » (soutenu).',
            keyRule:
              'Le registre courant-soigné est la norme de référence en milieu professionnel et universitaire ; le registre familier est toujours sanctionné à l’écrit.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p4_q1',
              type: 'mcq',
              prompt:
                'Quelle série classe correctement les trois mots du registre familier vers le registre soutenu ?',
              options: [
                'Demeure → Maison → Baraque',
                'Baraque → Maison → Demeure',
                'Maison → Baraque → Demeure',
                'Baraque → Demeure → Maison',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Baraque » relève du registre familier, « maison » du registre courant, et « demeure » du registre soutenu.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Adéquation',
            stepTheme: 'Choix du registre',
            stepTitle: 'Adapter son registre au destinataire sans tomber dans la lourdeur',
            paragraphText:
              'Écrire « soutenu » ne signifie pas accumuler des mots rares et obscurs : l’efficacité professionnelle privilégie la précision et la sobriété.\n• **Cohérence de ton** : évitez les ruptures brutales de registre dans une même phrase (« Nonobstant ces contraintes, le projet a carrément cartonné » est incohérent).\n• **Clarté professionnelle** : dans une note de service ou un compte rendu, le registre courant soigné (phrases courtes, vocabulaire exact) surpasse un style ampoulé.\n• **Dissertation et synthèse** : privilégiez des verbes précis (« souligner, démontrer, nuancer, instaurer ») plutôt que les verbes passe-partout (« faire, dire, mettre, avoir »).\n• **Exemple concret** : remplacez « L’État fait une loi pour mettre de l’ordre dans le numérique » par « L’État promulgue une loi afin de réguler le secteur numérique ».',
            konanTip:
              'Traquez les mots « valises » comme « chose », « truc », « problème », « faire » ou « il y a » : les remplacer par un terme précis élève immédiatement la qualité de votre copie.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p4_q2',
              type: 'mcq',
              prompt:
                'Quelle reformulation améliore le mieux la phrase « L’entreprise a fait une nouvelle stratégie pour avoir plus de clients » ?',
              options: [
                'L’entreprise a monté un super plan pour choper plus de clients.',
                'L’entreprise a élaboré une nouvelle stratégie afin d’accroître sa clientèle.',
                'L’entreprise a mis en place une chose stratégique pour faire des clients.',
                'L’entreprise a causé une stratégie pour posséder des clients.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Élaborer une stratégie » et « accroître sa clientèle » remplacent les verbes passe-partout « faire » et « avoir » par des termes précis de registre courant-soutenu.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Pléonasmes',
            stepTheme: 'Redondances fautives',
            stepTitle: 'Éliminer les pléonasmes fréquents dans les copies et écrits pro',
            paragraphText:
              'Un pléonasme fautif consiste à répéter inutilement une idée déjà contenue dans le sens ou le préfixe d’un mot.\n• **Pléonasmes de préfixe** : « prévoir à l’avance » (pré- = avant), « collaborer ensemble » (co- = ensemble), « comparer ensemble », « s’entraider mutuellement », « réitérer à nouveau ».\n• **Pléonasmes lexicaux courants** : « monter en haut », « descendre en bas », « au jour d’aujourd’hui » (aujourd’hui signifie déjà « au jour de ce jour »), « voire même » (voire = et même), « car en effet », « puis ensuite ».\n• **Pléonasmes administratifs** : « monopole exclusif », « panacée universelle », « erreur involontaire », « bref résumé ».\n• **Exemple concret** : au lieu d’écrire « Au jour d’aujourd’hui, nous devons collaborer ensemble, voire même anticiper à l’avance », écrivez simplement : « Aujourd’hui, nous devons collaborer, voire anticiper ».',
            keyRule:
              'Bannissez impérativement « au jour d’aujourd’hui », « voire même », « car en effet », « collaborer ensemble » et « prévoir à l’avance ».',
            konanTip:
              'Lors de la relecture, surveillez systématiquement les préfixes « pré- », « co- », « re- » et « entre- » : ils trahissent souvent un pléonasme caché juste après le verbe.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p4_q3',
              type: 'mcq',
              prompt:
                'Laquelle de ces expressions ne contient AUCUN pléonasme ?',
              options: [
                'Voire même impossible',
                'S’entraider mutuellement',
                'Anticiper les risques',
                'Au jour d’aujourd’hui',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« Anticiper les risques » est parfaitement correct et concis. Les trois autres expressions répètent inutilement une idée déjà contenue dans le mot principal.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Barbarismes & Solécismes',
            stepTheme: 'Correction de la langue',
            stepTitle: 'Corriger les barbarismes, solécismes et impropriétés courants',
            paragraphText:
              'Trois catégories de fautes nuisent directement à la crédibilité d’un rédacteur universitaire ou cadre.\n• **Barbarisme** : mot inventé ou déformé qui n’existe pas dans la norme (« solutionner » à éviter face à « résoudre », « aréoport » au lieu d’« aéroport », « ils croivent » au lieu d’« ils croient »).\n• **Solécisme** : faute de syntaxe ou de construction grammaticale (« après qu’il soit parti » au lieu de « après qu’il est parti », « malgré que », « c’est de lui dont je parle »).\n• **Impropriété** : emploi d’un mot existant dans un sens qui n’est pas le sien (« risquer de gagner » au lieu d’« avoir des chances de gagner », « amener un dossier » au lieu d’« apporter un dossier »).\n• **Exemple concret** : on « amène » un être animé qui se déplace (un collègue) mais on « apporte » un objet inanimé (un contrat, un ordinateur).',
            keyRule:
              '« Après que » est toujours suivi de l’indicatif (fait accompli) ; « avant que » est suivi du subjonctif (fait non encore réalisé).',
            konanTip:
              'Retenez l’astuce : « apporter » contient « porter » (on porte un objet) ; « amener » contient « mener » (on mène une personne).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p4_q4',
              type: 'mcq',
              prompt:
                'Quelle phrase est entièrement exempte de solécisme et d’impropriété ?',
              options: [
                'Après qu’il ait signé le contrat, il nous a amené les factures.',
                'Après qu’il a signé le contrat, il nous a apporté les factures.',
                'Malgré qu’il soit en retard, il risque de réussir brillamment son oral.',
                'C’est de ce projet dont nous avons discuté hier.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Après que » exige l’indicatif (« a signé ») et on « apporte » des objets (« les factures »). « C’est de ce projet dont » est un double emploi fautif (il faut « C’est de ce projet que »).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Constructions verbales',
            stepTheme: 'Prépositions & Relatifs',
            stepTitle: 'Maîtriser les constructions verbales pièges et les pronoms relatifs',
            paragraphText:
              'Certains verbes très courants dans les écrits académiques sont systématiquement mal construits à cause de contaminations avec des verbes voisins.\n• **Transitif direct (sans « à » ni « de »)** : « pallier un manque » (jamais « pallier à »), « se rappeler un fait » (jamais « se rappeler de », contrairement à « se souvenir de »), « débuter un projet » (mieux : « commencer un projet »).\n• **Prépositions exactes** : « obvier à un inconvénient », « remédier à une faille », « consentir à », « partir pour Abidjan » (et non « partir à »).\n• **Pronom relatif « dont »** : remplace toujours un complément introduit par « de » (« le rapport dont je parle » = je parle DE ce rapport). Évitez absolument le redoublement « dont… en » (« le logiciel dont je m’en sers » → fautif).\n• **Exemple concret** : « Voici la réforme dont nous nous souvenons » (= nous nous souvenons DE la réforme) vs « Voici la réforme que nous nous rappelons ».',
            keyRule:
              'On écrit « pallier une difficulté », « remédier à une difficulté », « se rappeler une règle » et « se souvenir d’une règle ».',
            konanTip:
              'Astuce mémo : « pallier » = « remplacer/compenser » (direct, sans « à ») ; « se rappeler » = « rappeler à soi quelque chose » (direct, sans « de »).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p4_q5',
              type: 'mcq',
              prompt:
                'Quelle phrase utilise correctement la construction verbale et le pronom relatif ?',
              options: [
                'C’est une faille à laquelle nous devons pallier rapidement.',
                'Je me rappelle parfaitement de la conférence dont vous m’en avez parlé.',
                'Nous devons pallier cette insuffisance et nous rappeler les consignes.',
                'Nous devons pallier à cette insuffisance et nous souvenir les consignes.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« Pallier » et « se rappeler » sont tous deux transitifs directs : ils se construisent sans préposition (« pallier cette insuffisance », « nous rappeler les consignes »).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Style concis',
            stepTheme: 'Révision stylistique',
            stepTitle: 'Alléger ses phrases : concision, nominalisation et voix active',
            paragraphText:
              'Un style universitaire et professionnel efficace est sobre, direct et dépourvu de lourdeurs administratives inutiles.\n• **Privilégier la voix active** : « Le comité a validé le budget » est plus net et dynamique que « Il a été procédé à la validation du budget par le comité ».\n• **Supprimer les chevilles vides** : éliminez les formules creuses (« au niveau de », « au plan de », « le fait que » répété) au profit d’une préposition ou d’un verbe exact.\n• **Éviter les cascades de relatives** : remplacez deux « qui / que » enchaînés par un participe présent, un adjectif ou un groupe nominal.\n• **Exemple concret** : « Il est important de noter le fait que les utilisateurs qui utilisent cette application qui est gratuite augmentent » → « Le nombre d’utilisateurs de cette application gratuite progresse fortement. »',
            konanTip:
              'Règle d’or de relecture : si vous pouvez retirer trois mots d’une phrase sans perdre aucune information ni nuance, retirez-les !',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p4_q6',
              type: 'mcq',
              prompt:
                'Quelle version reformule le plus efficacement et sans lourdeur : « Au niveau de la direction, il a été procédé à la signature du partenariat » ?',
              options: [
                'Au niveau de la direction, on a fait la signature du partenariat.',
                'La direction a signé le partenariat.',
                'Il est à noter que le partenariat a fait l’objet d’une signature au plan directionnel.',
                'Par la direction, la signature du partenariat a été réalisée.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La voix active (« La direction a signé le partenariat ») supprime les lourdeurs « au niveau de » et « il a été procédé à », tout en conservant 100 % de l’information avec un maximum de clarté.',
            },
          },
        ],
      },
    ],
  },
  // ===========================================================================
  // CHAPITRE 2 : RÉSUMÉ ET CONTRACTION DE TEXTE
  // ===========================================================================
  {
    id: 'lmd_entd_l1_tef_ch2',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Résumé et contraction de texte',
    summary:
      'Maîtriser les règles d’or du résumé de texte (fidélité, absence de métadiscours, respect de l’énonciation et de l’ordre des idées), sélectionner les idées directrices, reformuler avec concision et appliquer le comptage strict des mots avec marge de ±10 %.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Technique d’Expression Française',
    points: [
      {
        id: 'lmd_entd_l1_tef_ch2_p1',
        order: 1,
        title: 'Règles d’or et posture énonciative du résumé',
        summary:
          'Appliquer les impératifs absolus du résumé : fidélité sans jugement, interdiction des formules « l’auteur dit que », respect de l’énonciation, des temps verbaux et de l’ordre du texte.',
        conceptExplanation:
          'Le résumé (ou contraction) de texte consiste à condenser un document argumentatif pour en restituer fidèlement l’essentiel à un lecteur qui n’aurait pas lu l’original. L’exercice repose sur une posture énonciative stricte : le rédacteur s’identifie totalement à l’auteur du texte initial. Il s’interdit tout commentaire personnel, tout ajout, toute formule extérieure (« l’auteur affirme que… »), conserve le système d’énonciation (« je », « nous », « on »), les temps verbaux et l’ordre exact des idées, et rédige un texte autonome présenté en un seul bloc fluide.',
        keyRule:
          'S’identifier totalement à l’auteur : parler en son nom, suivre son ordre, garder ses temps verbaux et ne jamais écrire « l’auteur dit que… ».',
        workedExample: {
          title: 'Corriger une phrase de résumé fautive',
          statement:
            'Texte original : « Je suis convaincu que l’intelligence artificielle transformera profondément nos métiers administratifs, mais elle ne remplacera pas le jugement humain. » — Un étudiant écrit : « L’auteur pense que l’IA va changer les métiers de bureau, et je trouve qu’il a raison de dire que l’homme reste indispensable. » Corrigez.',
          methodSteps: [
            'Supprimer le métadiscours interdit (« L’auteur pense que ») et le jugement personnel (« et je trouve qu’il a raison »).',
            'Rétablir le système d’énonciation de l’auteur (1re personne « je ») et le temps verbal (futur simple).',
            'Reformuler de manière concise en conservant l’opposition logique (« mais / toutefois »).',
          ],
          conclusion:
            'Résumé conforme : « Je suis persuadé que l’IA bouleversera le travail administratif sans jamais supplanter le discernement humain. »',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Vue d’ensemble',
            stepTheme: 'Processus en 5 étapes',
            stepTitle: 'Maîtriser la finalité et les 5 étapes de la méthode du résumé de texte',
            paragraphText:
              'Le résumé de texte est un exercice fondamental dans la vie universitaire comme en entreprise : il permet de consulter rapidement l’essentiel d’un rapport ou d’un article sans trahir son contenu.\n• **Compréhension globale** : lire plusieurs fois le texte pour dégager le thème, la thèse et la visée argumentative.\n• **Sélection** : extraire les idées directrices et écarter exemples, répétitions et digressions.\n• **Reformulation** : exprimer les idées retenues dans un style personnel, concis et sans recopier.\n• **Rédaction et contrôle** : rédiger en un seul bloc fluide, puis compter exactement les mots pour respecter la marge de ±10 %.',
            visualSchema: {
              type: 'flowchart',
              title: 'Méthode du résumé de texte en 5 étapes',
              caption: 'Enchaînement méthodique de la première lecture jusqu’au comptage final des mots.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Lire et comprendre', sublabel: 'Thème, thèse, visée argumentative, mots difficiles', kind: 'start', color: 'blue' },
                  { label: '2. Repérer la structure', sublabel: 'Séquences argumentatives et connecteurs logiques', kind: 'process', color: 'violet' },
                  { label: '3. Sélectionner l’essentiel', sublabel: 'Garder les idées directrices ; écarter exemples et digressions', kind: 'process', color: 'green' },
                  { label: '4. Reformuler et rédiger', sublabel: 'Expression personnelle, posture de l’auteur, un seul bloc', kind: 'process', color: 'orange' },
                  { label: '5. Compter et relire', sublabel: 'Quota cible ±10 %, fluidité, orthographe et fidélité', kind: 'end', color: 'slate' },
                ],
              },
            },
            keyRule:
              'Ne commencez jamais à rédiger dès la première lecture : comprendre, découper et sélectionner au brouillon évite tout contresens.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quel ordre méthodologique doit-on suivre pour réussir un résumé de texte ?',
              options: [
                'Rédiger paragraphe par paragraphe dès la première lecture puis compter les mots.',
                'Comprendre le texte, repérer les séquences et idées essentielles, reformuler, rédiger en un bloc, puis compter et relire.',
                'Recopier les premières phrases de chaque paragraphe puis ajouter un commentaire critique.',
                'Compter les mots, supprimer une phrase sur deux, puis changer quelques synonymes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La méthode rigoureuse suit toujours l’enchaînement : compréhension globale → découpage et sélection des idées directrices → reformulation personnelle → rédaction fluide → comptage et relecture.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Fidélité absolue',
            stepTheme: 'Objectivité stricte',
            stepTitle: 'Respecter la pensée de l’auteur sans ajout, omission majeure ni jugement',
            paragraphText:
              'Le résumé n’est ni une discussion ni un commentaire : votre mission est de restituer la pensée du texte avec une fidélité de miroir réduit.\n• **Zéro jugement personnel** : même si vous êtes en désaccord profond avec l’auteur, vous ne devez jamais le critiquer, le nuancer ni l’approuver.\n• **Zéro ajout extérieur** : n’introduisez aucune connaissance personnelle, aucune statistique absente du texte, aucun exemple de votre cru.\n• **Zéro déformation** : ne transformez pas une hypothèse prudente (« il se pourrait que ») en certitude absolue (« il est certain que »).\n• **Exemple concret** : si un texte affirme que les réseaux sociaux affaiblissent la lecture sans mentionner les livres numériques, votre résumé ne doit pas ajouter « heureusement, les livres numériques compensent ce déclin ».',
            keyRule:
              'Un résumé fidèle restitue toute la pensée essentielle du texte, et rien que la pensée du texte.',
            konanTip:
              'Gardez vos propres arguments et votre esprit critique pour la question de discussion ou la dissertation qui suit souvent le résumé, jamais dans le résumé lui-même.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Un texte affirme : « Le télétravail risque d’isoler certains salariés. » Quelle reformulation respecte la fidélité absolue ?',
              options: [
                'Le télétravail isole systématiquement tous les employés, ce qui est regrettable.',
                'Le travail à distance peut favoriser l’isolement de quelques travailleurs.',
                'Le télétravail isole certains salariés, mais les outils collaboratifs résolvent ce souci.',
                'L’auteur exagère en affirmant que le télétravail isole les travailleurs.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Peut favoriser l’isolement de quelques travailleurs » respecte exactement la nuance (« risque de » → « peut », « certains » → « quelques ») sans rien ajouter ni juger.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Zéro métadiscours',
            stepTheme: 'Identification à l’auteur',
            stepTitle: 'Bannir les formules « l’auteur dit que… » et parler au nom du texte',
            paragraphText:
              'L’erreur la plus fréquente en licence consiste à adopter une position d’observateur extérieur qui raconte ce que fait le texte : cela transforme le résumé en analyse de texte, ce qui est interdit.\n• **Formules strictement proscrites** : « Dans ce texte, l’auteur affirme que… », « L’écrivain soutient que… », « Le journaliste montre ensuite que… », « Ce texte explique que… ».\n• **Posture attendue** : vous devez vous glisser dans la peau de l’auteur et énoncer directement ses idées comme si vous étiez lui.\n• **Conséquence pratique** : le texte résumé devient un texte original en miniature, directement lisible sans référence au document source.\n• **Exemple concret** : au lieu d’écrire « L’auteur souligne que la formation continue est vitale », écrivez directement : « La formation continue s’impose comme une nécessité vitale. »',
            keyRule:
              'Ne faites jamais référence à l’auteur ni au texte : supprimez toute formule du type « l’auteur dit / montre / conclut que ».',
            konanTip:
              'Astuce de relecture : vérifiez que les mots « auteur », « texte », « paragraphe » ou « article » n’apparaissent NULLE PART dans votre résumé.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Laquelle de ces phrases est conforme aux règles de rédaction du résumé de texte ?',
              options: [
                'Dans le deuxième paragraphe, l’auteur dénonce la fracture numérique en zone rurale.',
                'L’article nous apprend que la fracture numérique pénalise les zones rurales.',
                'La fracture numérique pénalise lourdement les zones rurales.',
                'Selon l’auteur du texte, les campagnes souffrent du manque d’accès à Internet.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Seule la phrase « La fracture numérique pénalise lourdement les zones rurales » énonce directement l’idée sans métadiscours ni référence extérieure au texte ou à son auteur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Énonciation & Temps',
            stepTheme: 'Système énonciatif',
            stepTitle: 'Conserver le système d’énonciation, les temps verbaux et la tonalité',
            paragraphText:
              'Puisque vous parlez à la place de l’auteur, vous devez respecter les marques grammaticales par lesquelles il s’exprime.\n• **Pronoms personnels** : si le texte emploie « je » (point de vue personnel), votre résumé emploie « je » ; s’il emploie « nous » (implication collective) ou « on / il » (neutralité), conservez exactement ce système.\n• **Temps et modes verbaux** : respectez la valeur des temps employés dans l’original (présent de vérité générale, passé pour un bilan historique, futur pour une prévision, conditionnel pour une hypothèse).\n• **Tonalité** : si le texte est alarmiste, ironique ou optimiste, cette nuance doit transparaître sobrement sans caricature.\n• **Exemple concret** : si l’auteur écrit « Nous devons protéger nos données personnelles dès aujourd’hui », ne basculez pas vers « Les citoyens devraient protéger leurs données » : gardez « nous » et le présent.',
            keyRule:
              'Gardez le même système de pronoms (« je / nous / on ») et les mêmes temps verbaux que le texte initial.',
            konanTip:
              'Encadrez dès la première lecture le pronom dominant de l’auteur (« je », « nous » ou 3e personne) en haut de votre brouillon pour ne jamais glisser vers un autre système.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Si le texte source est rédigé à la première personne du pluriel (« Nous constatons que nos villes se digitalisent rapidement »), comment le résumé doit-il être rédigé ?',
              options: [
                'À la troisième personne (« Les citoyens constatent que leurs villes… »).',
                'À la première personne du pluriel (« Nous observons une numérisation rapide de nos villes »).',
                'À la deuxième personne du pluriel (« Vous constatez que vos villes… »).',
                'À l’impératif uniquement.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le résumé conserve le système d’énonciation du texte initial : un texte en « nous » se résume en « nous », afin de maintenir la posture exacte de l’auteur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Ordre & Autonomie',
            stepTheme: 'Progression du texte',
            stepTitle: 'Suivre l’ordre exact des idées et garantir l’autonomie du résumé',
            paragraphText:
              'Contrairement à la note de synthèse qui recompose plusieurs documents selon un plan personnel, le résumé de texte suit fidèlement le fil conducteur de l’auteur.\n• **Respect de l’ordre** : conservez l’enchaînement exact des séquences argumentatives du texte original (ne commencez pas par la conclusion de l’auteur pour remonter ensuite à son constat initial).\n• **Maintien des liens logiques** : utilisez des connecteurs sobres (« car, mais, donc, cependant, ainsi ») pour préserver les rapports exacts entre les idées.\n• **Texte autonome** : une personne qui n’a jamais lu le texte d’origine doit pouvoir lire votre résumé et tout comprendre sans ambiguïté ni pronom flou.\n• **Exemple concret** : n’écrivez jamais « Ce phénomène s’aggrave » dès la première phrase de votre résumé si vous n’avez pas d’abord nommé le phénomène en question.',
            keyRule:
              'Suivez strictement l’ordre d’apparition des idées du texte source et vérifiez que votre résumé se comprend seul, sans le texte original.',
            konanTip:
              'Numérotez les grandes séquences du texte source (1, 2, 3, 4) dans la marge : votre résumé doit traverser exactement 1 → 2 → 3 → 4 dans le même ordre.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi dit-on qu’un résumé de texte doit être « autonome » ?',
              options: [
                'Parce qu’il peut contenir des idées inventées par le candidat.',
                'Parce qu’il doit être parfaitement compréhensible par un lecteur qui n’a pas lu le texte original.',
                'Parce qu’il ne respecte pas l’ordre des idées du texte source.',
                'Parce qu’il se présente sous forme de liste à puces indépendante.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’autonomie signifie que le résumé forme un texte cohérent et complet en lui-même : un lecteur découvrant uniquement le résumé doit saisir immédiatement tout le raisonnement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Présentation matérielle',
            stepTheme: 'Mise en forme',
            stepTitle: 'Présenter le résumé en un seul bloc fluide sans style télégraphique',
            paragraphText:
              'La présentation formelle du résumé obéit à des conventions universitaires précises qu’il faut respecter scrupuleusement.\n• **Un seul bloc** : le résumé se rédige généralement en un paragraphe unique (un seul bloc compact) sans sauter de lignes ni créer de sous-titres ; on peut à la rigueur aller à la ligne pour une articulation majeure sans marquer d’alinéa excessif.\n• **Rédaction soignée** : construisez des phrases complètes, courtes et nettes, en limitant les subordonnées lourdes.\n• **Éléments interdits** : proscrivez absolument le style télégraphique (notes sans verbe), les puces, les schémas, les abréviations familières, les parenthèses, les « etc. » et les points de suspension.\n• **Indication du nombre de mots** : indiquez honnêtement et lisiblement le total exact de mots à la fin du résumé.',
            keyRule:
              'Un résumé est un texte rédigé en phrases complètes, présenté en un seul bloc, sans tirets, sans parenthèses, sans « etc. » ni points de suspension.',
            konanTip:
              'Évitez les points de suspension et « etc. » qui donnent une impression d’inachevé : remplacez toujours une liste incomplète par un terme générique précis.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Lequel de ces éléments est autorisé dans la présentation finale d’un résumé de texte ?',
              options: [
                'Des tirets et un style télégraphique sans verbes conjugués.',
                'Des parenthèses explicatives et des « etc. » pour gagner des mots.',
                'Un paragraphe unique composé de phrases complètes, courtes et reliées par des connecteurs.',
                'Des sous-titres soulignés reprenant le plan du texte.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le résumé se présente en un seul bloc de phrases complètes, nettes et articulées par des mots-liens, sans style télégraphique, sans sous-titres, sans parenthèses ni « etc. ».',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch2_p2',
        order: 2,
        title: 'Analyse du texte, repérage des idées directrices et sélection',
        summary:
          'Dégager le thème, la thèse et la visée argumentative, découper le texte en séquences, et trier efficacement idées directrices et éléments secondaires.',
        conceptExplanation:
          'Avant d’écrire un seul mot du résumé, un travail préparatoire analytique est indispensable. Il s’agit de lire le texte plusieurs fois pour cerner son thème, sa thèse et sa visée argumentative, de repérer ses grandes séquences grâce aux connecteurs logiques et à la ponctuation structurante, puis d’opérer un tri rigoureux : conserver les idées directrices qui portent le message global, et éliminer les répétitions, digressions, citations décoratives et exemples purement illustratifs.',
        keyRule:
          'Sélectionner l’essentiel, c’est garder uniquement les idées qui prouvent ou font progresser la thèse, et écarter tout ce qui ne fait qu’illustrer ou répéter.',
        workedExample: {
          title: 'Trier une séquence argumentative sur la cybersécurité',
          statement:
            'Extrait : « Les PME sous-estiment souvent les cybermenaces. Ainsi, l’an dernier, une boulangerie de Lyon et un cabinet d’Abidjan ont perdu leurs fichiers clients faute de sauvegarde. Comme le rappelle l’expert Marc Durand, “la négligence coûte toujours plus cher que la prévention”. Autrement dit, négliger la sécurité numérique expose les petites structures à des pertes graves. »',
          methodSteps: [
            'Identifier l’idée directrice : les PME négligent les cybermenaces et s’exposent à de graves pertes.',
            'Écarter les éléments secondaires : les deux exemples précis (boulangerie de Lyon, cabinet d’Abidjan), la citation de Marc Durand et la répétition introduite par « Autrement dit ».',
          ],
          conclusion:
            'Idée retenue et condensée (11 mots au lieu de 56) : « En sous-estimant les cybermenaces, les PME s’exposent à de lourdes pertes. »',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Lecture active',
            stepTheme: 'Thème, thèse et visée',
            stepTitle: 'Dégager le thème, la thèse et la visée argumentative dès la lecture',
            paragraphText:
              'Lire un texte une seule fois en surlignant au hasard mène presque toujours à un résumé déséquilibré. Une lecture active répond d’abord à trois questions fondamentales.\n• **Le thème** : de quoi parle le texte ? (ex. : l’essor de l’intelligence artificielle dans l’éducation).\n• **La thèse (idée générale)** : que défend ou soutient l’auteur à propos de ce thème ? (ex. : l’IA enrichit l’apprentissage si l’enseignant reste au centre).\n• **La visée argumentative** : quel changement l’auteur cherche-t-il à produire chez le lecteur ? (convaincre, alerter, dénoncer, nuancer une idée reçue).\n• **Exemple concret** : relever les mots difficiles et éclairer leur sens en contexte dès cette phase empêche tout contresens sur la thèse globale.',
            keyRule:
              'Tant que vous ne savez pas formuler en une phrase claire le thème et la thèse du texte, vous n’êtes pas prêt à commencer la sélection.',
            konanTip:
              'Observez le titre, le premier paragraphe et le dernier paragraphe du texte : dans 80 % des cas, la thèse directrice y est annoncée ou récapitulée.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle différence existe-t-il entre le thème et la thèse d’un texte argumentatif ?',
              options: [
                'Le thème est la conclusion du texte ; la thèse est son titre.',
                'Le thème est le sujet général abordé ; la thèse est la prise de position défendue par l’auteur sur ce sujet.',
                'Le thème regroupe les exemples ; la thèse regroupe les connecteurs.',
                'Il n’y a aucune différence, les deux mots sont strictement synonymes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le thème répond à « de quoi parle-t-on ? » (un sujet neutre), tandis que la thèse répond à « que soutient l’auteur sur ce sujet ? » (un point de vue défendu).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Séquences logiques',
            stepTheme: 'Architecture du texte',
            stepTitle: 'Découper le texte en séquences argumentatives grâce aux connecteurs',
            paragraphText:
              'Un texte argumentatif n’est pas une suite aléatoire de paragraphes : il progresse par grandes unités de sens appelées séquences argumentatives.\n• **Ne pas confondre paragraphe et séquence** : deux paragraphes courts peuvent appartenir à la même étape logique (par exemple deux aspects d’une même cause), tandis qu’un paragraphe long peut contenir un retournement introduit par « Cependant ».\n• **Repérer les charnières** : entourez au crayon tous les connecteurs logiques (« Certes… mais », « En outre », « Par conséquent », « En définitive ») : ils dessinent la carte routière du texte.\n• **Nommer chaque séquence** : donnez un titre bref dans la marge à chaque bloc (ex. : 1. Constat de la fracture ; 2. Causes économiques ; 3. Solutions proposées).',
            konanTip:
              'Le nombre de mots que vous consacrez à chaque séquence dans votre résumé doit être proportionnel à son importance dans le texte initial.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel indice permet le plus sûrement de repérer les articulations et les séquences argumentatives d’un texte ?',
              options: [
                'La longueur exacte de chaque phrase en centimètres.',
                'Les connecteurs logiques, les changements de paragraphe et les ruptures thématiques.',
                'Le nombre de noms propres cités dans le texte.',
                'La police de caractères utilisée pour l’impression.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les connecteurs logiques (cause, opposition, addition, conséquence) associés aux paragraphes et aux transitions thématiques révèlent l’ossature exacte du raisonnement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Tri de l’information',
            stepTheme: 'Essentiel vs Secondaire',
            stepTitle: 'Distinguer les idées directrices (à garder) des idées secondaires (à écarter)',
            paragraphText:
              'Pour réduire un texte au quart ou au tiers de son volume, il faut accepter de supprimer 65 % à 75 % de la matière sans perdre une seule étape du raisonnement.\n• **Idée directrice (à conserver)** : affirmation clé qui fait avancer la thèse, argument principal, objection majeure, conséquence décisive ou conclusion.\n• **Idée secondaire (à écarter)** : détail anecdotique, précision chiffrée non indispensable, redite qui reformule la même idée pour insister, ou commentaire accessoire.\n• **Test de suppression** : demandez-vous « Si je retire cette phrase, le raisonnement de l’auteur reste-t-il compréhensible et complet ? » Si oui, elle est secondaire.\n• **Exemple concret** : dans un texte sur le mobile money en Côte d’Ivoire, l’argument « il favorise l’inclusion financière des populations non bancarisées » est directeur ; la date exacte de création d’une agence particulière est secondaire.',
            keyRule:
              'Une idée est directrice si sa suppression brise la logique du raisonnement ; elle est secondaire si elle ne fait que détailler ou répéter une idée déjà posée.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Comment savoir rapidement si une phrase du texte est une idée secondaire à éliminer dans un résumé ?',
              options: [
                'Elle est toujours placée au début du texte.',
                'Si on la supprime, la progression logique du raisonnement reste intacte et compréhensible.',
                'Elle contient obligatoirement un verbe au futur.',
                'Elle comporte moins de dix mots.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le test de suppression est décisif : un élément dont le retrait n’altère ni la thèse ni l’enchaînement des arguments est secondaire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Exemples & Citations',
            stepTheme: 'Élagage intelligent',
            stepTitle: 'Savoir traiter les exemples, citations, comparaisons et répétitions',
            paragraphText:
              'Les textes journalistiques et essais regorgent d’éléments persuasifs qui occupent beaucoup de place mais n’ont pas vocation à figurer dans un résumé.\n• **Exemples illustratifs** : à supprimer en règle générale ; ne gardez que l’idée générale qu’ils prouvent.\n• **Exception — exemple argumentatif** : si un exemple sert lui-même d’unique preuve sans idée formulée au préalable, extrayez-en l’idée abstraite qu’il démontre.\n• **Citations, comparaisons et digressions** : supprimez les citations d’autorités (sauf si le texte entier repose sur la réfutation d’une citation précise), les métaphores développées et les anecdotes.\n• **Répétitions d’insistance** : un auteur répète souvent la même thèse sous trois formes pour persuader ; le résumé ne la formule qu’une seule fois.',
            keyRule:
              'Supprimez les exemples illustratifs, les citations décoratives, les digressions et les répétitions : ne conservez que l’idée générale qu’ils servent.',
            konanTip:
              'Méfiez-vous des formules « C’est-à-dire », « Autrement dit » ou « Par exemple » dans le texte source : ce qui suit est très souvent une redite ou une illustration à écarter.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Dans un texte source, l’auteur développe longuement l’exemple d’une start-up de livraison à Abidjan pour prouver que le numérique crée des emplois locaux. Que doit faire le résumé ?',
              options: [
                'Raconter toute l’histoire de la start-up de livraison en citant son fondateur.',
                'Conserver uniquement l’idée générale que le numérique génère des emplois locaux.',
                'Remplacer cet exemple par celui d’une autre entreprise connue du candidat.',
                'Supprimer à la fois l’exemple et l’idée générale sur l’emploi.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On élimine l’exemple purement illustratif (la start-up particulière) tout en conservant impérativement l’idée directrice qu’il illustre (la création d’emplois locaux par le numérique).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Indices typographiques',
            stepTheme: 'Ponctuation structurante',
            stepTitle: 'Exploiter la ponctuation du texte (deux-points, point-virgule) pour repérer les idées',
            paragraphText:
              'Dans un texte dense, les rapports logiques ne sont pas toujours annoncés par un gros connecteur : la ponctuation joue souvent ce rôle en silence.\n• **Les deux-points (:)** : annoncent fréquemment une explication, une cause, une conséquence ou une énumération d’exemples. S’ils introduisent une liste d’exemples, on la supprime ou on la résume par un terme englobant ; s’ils introduisent une cause ou une conséquence clé, on explicite ce lien (« car », « donc »).\n• **Le point-virgule (;)** : sépare deux idées parallèles ou opposées de même importance ; chacune peut compter dans le squelette logique.\n• **Les guillemets et parenthèses** : les parenthèses contiennent presque toujours un détail secondaire supprimable ; les guillemets peuvent signaler une prise de distance ou une ironie à ne pas rater.',
            keyRule:
              'Repérez les deux-points, points-virgules et guillemets : ils cachent souvent une relation logique implicite ou une nuance ironique.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans un texte à résumer, à quoi servent le plus souvent les informations placées entre parenthèses ?',
              options: [
                'À formuler la thèse principale de l’auteur.',
                'À donner une précision secondaire, une date ou un exemple généralement supprimable dans le résumé.',
                'À indiquer la conclusion obligatoire du résumé.',
                'À signaler les mots qui doivent absolument être recopiés.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les parenthèses isolent par définition une remarque accessoire ou une précision complémentaire : dans la grande majorité des cas, elles sont éliminées lors de la sélection.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Squelette logique',
            stepTheme: 'Plan au brouillon',
            stepTitle: 'Bâtir le squelette argumentatif au brouillon avant de rédiger',
            paragraphText:
              'Passer directement du texte surligné à la copie propre conduit au collage de phrases recopiées (« patch-work »). L’étape du squelette au brouillon garantit une vraie reformulation.\n• **Formuler en notes personnelles** : résumez chaque séquence en une courte ligne avec vos propres mots, en notant entre les blocs le lien logique exact (→ conséquence, ≠ opposition, + addition).\n• **Vérifier l’équilibre** : contrôlez que toutes les parties majeures du texte sont représentées et que le mouvement d’ensemble correspond bien à la thèse.\n• **Fermer le texte pendant la rédaction** : rédigez votre premier jet à partir de votre squelette (sans regarder les phrases de l’auteur) pour éviter le plagiat involontaire, puis vérifiez la fidélité sur le texte original.',
            konanTip:
              'Astuce anti-recopiage : ne dépassez jamais 10 % de mots repris directement au texte source (hors mots-outils et termes techniques irremplaçables).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quel est le principal avantage de rédiger son premier jet à partir d’un squelette de notes personnelles plutôt qu’en gardant les yeux fixés sur le texte ?',
              options: [
                'Cela permet d’inventer de nouveaux arguments originaux.',
                'Cela évite le recopiage servile (« mosaïque de phrases ») et favorise une reformulation personnelle et fluide.',
                'Cela dispense de compter les mots à la fin.',
                'Cela permet de changer l’ordre des idées du texte.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Rédiger depuis son squelette logique empêche de coller bout à bout des morceaux de phrases du texte source et oblige à produire une formulation personnelle cohérente.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch2_p3',
        order: 3,
        title: 'Reformulation concise et comptage typographique des mots',
        summary:
          'Condenser les phrases par nominalisation, synonymie et hyperonymie, et appliquer exactement les règles typographiques de comptage et la marge de tolérance de ±10 %.',
        conceptExplanation:
          'Réussir la contraction de texte demande deux savoir-faire complémentaires : un savoir-faire stylistique (reformuler avec concision grâce à la nominalisation, aux synonymes, aux hyperonymes et à la réduction des subordonnées) et un savoir-faire technique rigoureux (compter exactement les mots selon la définition typographique officielle, estimer le volume cible au quart ou au tiers, et respecter scrupuleusement la marge de tolérance de ±10 %).',
        keyRule:
          'Un mot est une unité typographique séparée par deux blancs (les élisions comme « l’homme » comptent pour 2 mots). Respectez impérativement la fourchette cible ±10 %.',
        formulas: [
          {
            name: 'Estimation du volume du texte et cible au quart / au tiers',
            formula: 'N_{\\text{texte}} \\approx \\frac{\\text{Mots des 5 premières lignes}}{5} \\times \\text{Nombre total de lignes} \\quad ; \\quad N_{\\text{cible}} = \\frac{N_{\\text{texte}}}{4} \\text{ (ou } \\frac{N_{\\text{texte}}}{3} \\text{)}',
            note: 'Utile lorsque le sujet ne fournit pas déjà le nombre exact de mots du texte initial.',
          },
          {
            name: 'Calcul de la marge de tolérance de ±10 %',
            formula: 'm = \\frac{N_{\\text{cible}} \\times 10}{100} \\implies N_{\\text{résumé}} \\in \\left[ N_{\\text{cible}} - m \\; ; \\; N_{\\text{cible}} + m \\right]',
            note: 'Ex. : pour un résumé demandé en 150 mots, m = 15, donc le résumé doit compter entre 135 et 165 mots inclus.',
          },
        ],
        workedExample: {
          title: 'Calculer une fourchette de mots et compter une phrase piège',
          statement:
            '1) Un résumé est demandé en 120 mots (±10 %) : quelle est la fourchette autorisée ? 2) Combien de mots compte la phrase : « C’est aujourd’hui qu’il a atteint 2025 clients, c’est-à-dire un record ! » ?',
          methodSteps: [
            '1) Marge de 10 % de 120 : m = (120 × 10) / 100 = 12 mots → fourchette : [120 − 12 ; 120 + 12] = [108 ; 132] mots.',
            '2) Découpage typographique : C’ (1) est (2) aujourd’hui (3, mot soudé par l’usage) qu’ (4) il (5) a (6) atteint (7) 2025 (8, nombre = 1 mot) clients (9) c’ (10) est (11) à (12) dire (13) un (14) record (15). Les signes de ponctuation (, !) ne comptent pas.',
          ],
          conclusion:
            'Fourchette autorisée : de 108 à 132 mots. La phrase compte 15 mots (12 mots si « c’est-à-dire » est compté pour 1 seul bloc selon certains barèmes, mais la règle standard des élisions/tirets décompte chaque unité lexicale).',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Reformulation',
            stepTheme: 'Condensation syntaxique',
            stepTitle: 'Condenser grâce à la synonymie, la nominalisation et la pronominalisation',
            paragraphText:
              'Reformuler ne veut pas dire remplacer mécaniquement un mot sur deux par un synonyme : il s’agit de repenser la phrase pour dire autant en beaucoup moins de mots.\n• **Nominalisation** : transformer un verbe ou une proposition entière en un nom précis (« Parce que les coûts augmentent rapidement » [6 mots] → « Face à l’envolée des coûts » [5 mots] ou « La hausse des coûts » [4 mots]).\n• **Remplacement d’une relative par un adjectif** : « Un outil qui ne sert plus à rien » [8 mots] → « Un outil obsolète » [3 mots].\n• **Remplacement d’une circonstancielle par un groupe prépositionnel** : « Bien qu’il manque de moyens financiers » [6 mots] → « Malgré ses faibles ressources » [4 mots].\n• **Exemple concret** : « Les personnes qui achètent des produits sur Internet sont de plus en plus nombreuses » [15 mots] → « Les cyberacheteurs se multiplient » [4 mots].',
            keyRule:
              'Remplacez les propositions subordonnées (relatives, complétives, circonstancielles) par un adjectif, un groupe nominal ou un verbe précis pour diviser la longueur par deux.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle reformulation condense le mieux sans perte de sens : « Les jeunes qui viennent d’obtenir leur diplôme cherchent un emploi stable » ?',
              options: [
                'Les jeunes qui ont réussi leurs études veulent un travail qui dure.',
                'Les jeunes diplômés recherchent un emploi stable.',
                'Les étudiants cherchent un travail.',
                'Les diplômés sont nombreux à attendre un poste.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Remplacer la relative « qui viennent d’obtenir leur diplôme » par l’adjectif/nom « diplômés » réduit la phrase de 12 à 7 mots tout en conservant 100 % du sens exact.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Hyperonymie',
            stepTheme: 'Réduire les listes',
            stepTitle: 'Remplacer une énumération longue par un terme générique (hyperonyme)',
            paragraphText:
              'Les auteurs aiment accumuler des énumérations concrètes pour frapper l’imagination. Les recopier dans un résumé gaspille immédiatement votre quota de mots.\n• **Principe de l’hyperonyme** : regroupez tous les éléments d’une liste sous un seul mot englobant (terme générique) qui résume la catégorie entière.\n• **Exemples directs** : « les téléphones, tablettes, ordinateurs portables et montres connectées » → « les terminaux numériques » ; « les médecins, infirmiers, pharmaciens et sages-femmes » → « le personnel soignant » ; « la fraude, le vol de données et l’usurpation d’identité » → « la cybercriminalité ».\n• **Précaution** : veillez à ce que votre hyperonyme ne soit ni trop vague (« les choses ») ni trop étroit (n’oubliez pas une catégorie importante de la liste).',
            konanTip:
              'À chaque fois que vous voyez trois éléments séparés par des virgules dans le texte original, cherchez immédiatement le nom générique qui les englobe tous.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quel hyperonyme résume le plus exactement l’énumération « les routes, les ponts, les ports, les chemins de fer et les réseaux électriques » ?',
              options: [
                'Les transports',
                'Les infrastructures',
                'Les machines',
                'Les commerces',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Les transports » oublierait les réseaux électriques ; « les infrastructures » englobe exactement l’ensemble des équipements routiers, portuaires, ferroviaires et énergétiques.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Comptage officiel',
            stepTheme: 'Règles typographiques',
            stepTitle: 'Appliquer les règles typographiques de comptage des mots (élisions, tirets, nombres)',
            paragraphText:
              'Un mot est défini en contraction de texte comme une unité typographique isolée par deux blancs, mais plusieurs cas particuliers (apostrophes, traits d’union, nombres, sigles) obéissent à des conventions précises.\n• **Mots élidés avec apostrophe** : « l’économie », « d’abord », « qu’il », « c’est » comptent chacun pour 2 mots (sauf « aujourd’hui » qui forme un mot unique soudé = 1 mot).\n• **Mots composés avec trait d’union** : s’ils forment une unité lexicale soudée ou inséparable (« rendez-vous », « socio-économique », « compte-rendu »), on compte souvent selon les unités séparées par un tiret (ex. : « c’est-à-dire » = 4 mots, « y a-t-il » = 4 mots avec le « t » euphonique compté ou non selon la règle ; en université, retenir le décompte des unités lexicales réelles).\n• **Nombres, dates et sigles** : un nombre en chiffres (« 2025 », « 15 % »), une date ou un sigle (« UEMOA », « TIC ») compte pour 1 mot.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Barème de référence du comptage typographique des mots',
              caption: 'Règles essentielles pour compter exactement son résumé sans erreur de quota.',
              tableData: {
                headers: ['Catégorie', 'Exemples', 'Décompte standard'],
                rows: [
                  ['Mot simple / particule', 'le, de, et, mais, numérique', '1 mot chacun'],
                  ['Élision (apostrophe)', 'l’État, d’Internet, qu’on, c’est', '2 mots (sauf aujourd’hui = 1)'],
                  ['Nombre en chiffres / %', '2026, 45 %, 100 000', '1 mot (mais « vingt-cinq » = 2)'],
                  ['Sigle / acronyme', 'UEMOA, ONU, PME, IA', '1 mot chacun'],
                  ['Mot composé (trait d’union)', 'arc-en-ciel, e-commerce, chef-d’œuvre', 'Autant de mots que d’unités lexicales'],
                  ['Ponctuation', ', . ; : ! ? « »', '0 mot (jamais comptée)'],
                ],
              },
            },
            keyRule:
              'Toute élision (« l’ », « d’ », « qu’ », « s’ ») compte pour un mot à part entière, un nombre en chiffres ou un sigle compte pour 1 mot, et la ponctuation compte pour 0.',
            konanTip:
              'Pour compter vite sans erreur au brouillon, tracez une petite barre verticale tous les 10 mots et vérifiez le total final deux fois.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Selon la règle standard du comptage typographique, combien de mots compte le segment : « L’essor des PME en 2026 » ?',
              options: [
                '4 mots',
                '5 mots',
                '6 mots',
                '7 mots',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Décompte : L’ (1) + essor (2) + des (3) + PME (4, sigle = 1 mot) + en (5) + 2026 (6, nombre en chiffres = 1 mot) = 6 mots au total.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Estimation volume',
            stepTheme: 'Quart ou Tiers',
            stepTitle: 'Estimer le volume du texte initial et calculer le nombre de mots cible',
            paragraphText:
              'Si l’énoncé précise « Résumez ce texte au quart de sa longueur » (ou « au tiers ») sans indiquer le total exact, ne perdez pas 20 minutes à compter un par un les 800 mots du texte source.\n• **Méthode d’estimation rapide** : comptez exactement les mots des 5 premières lignes pleines, divisez par 5 pour obtenir la moyenne de mots par ligne, puis multipliez par le nombre total de lignes du texte.\n• **Calcul de la cible** : divisez ce total estimé par 4 (résumé au quart) ou par 3 (résumé au tiers).\n• **Exemple concret** : si 5 lignes comptent 60 mots (soit 12 mots/ligne) et que le texte comporte 50 lignes, le volume estimé vaut 12 × 50 = 600 mots ; un résumé au quart vise donc 600 / 4 = 150 mots.',
            formula: {
              name: 'Estimation rapide du volume cible',
              formula: 'N_{\\text{texte}} = \\left(\\frac{\\text{Mots des 5 premières lignes}}{5}\\right) \\times L_{\\text{total}} \\qquad ; \\qquad N_{\\text{cible}} = \\frac{N_{\\text{texte}}}{4}',
              note: 'Diviser par 3 si la consigne demande un résumé au tiers.',
            },
            keyRule:
              'Moyenne sur 5 lignes × nombre total de lignes = volume estimé du texte ; divisez ensuite par 4 (quart) ou par 3 (tiers).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Un texte compte 40 lignes, et les 5 premières lignes totalisent 75 mots. Quel nombre de mots cible doit-on viser pour un résumé au quart ?',
              options: [
                '100 mots',
                '150 mots',
                '200 mots',
                '600 mots',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Moyenne par ligne = 75 / 5 = 15 mots/ligne. Volume estimé du texte = 15 × 40 = 600 mots. Résumé au quart = 600 / 4 = 150 mots.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Marge ±10 %',
            stepTheme: 'Tolérance stricte',
            stepTitle: 'Calculer et respecter scrupuleusement la marge de tolérance de ±10 %',
            paragraphText:
              'Tout résumé est encadré par une marge de tolérance officielle de plus ou moins 10 % autour du nombre de mots exigé. Tout dépassement ou insuffisance entraîne une pénalité de points immédiate.\n• **Calcul de la marge** : multipliez le nombre cible par 10 puis divisez par 100.\n• **Bornes autorisées** : borne minimale = Cible − marge ; borne maximale = Cible + marge.\n• **Exemple concret** : pour une consigne de 200 mots ±10 %, la marge vaut (200 × 10) / 100 = 20 mots ; votre copie doit donc compter obligatoirement entre 180 et 220 mots.\n• **Conseil stratégique** : visez le centre de la fourchette (par ex. 195 à 205 mots) afin qu’une petite différence de comptage sur un mot composé ne vous fasse jamais sortir des limites.',
            formula: {
              name: 'Fourchette de tolérance officielle (±10 %)',
              formula: '\\text{Marge} = 0{,}10 \\times N_{\\text{cible}} \\implies N_{\\min} = 0{,}90 \\times N_{\\text{cible}} \\; ; \\; N_{\\max} = 1{,}10 \\times N_{\\text{cible}}',
            },
            keyRule:
              'Toujours calculer [0,9 × Cible ; 1,1 × Cible] dès le début de l’épreuve et viser le cœur de l’intervalle.',
            konanTip:
              'Ne mentez jamais sur le nombre de mots indiqué en fin de résumé : les correcteurs vérifient systématiquement et sanctionnent doublement un décompte falsifié.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Pour un résumé exigé en 180 mots avec une marge de tolérance de ±10 %, quel décompte final est HORS LIMITE (sanctionné) ?',
              options: [
                '162 mots',
                '178 mots',
                '198 mots',
                '202 mots',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La marge vaut 10 % de 180 = 18 mots. L’intervalle autorisé est [180 − 18 ; 180 + 18] = [162 ; 198] mots. Avec 202 mots, le résumé dépasse la borne supérieure de 4 mots.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Contrôle final',
            stepTheme: 'Grille de relecture',
            stepTitle: 'Réaliser la relecture qualité en 5 vérifications avant de rendre la copie',
            paragraphText:
              'Les cinq dernières minutes consacrées à la relecture sauvent fréquemment plusieurs points sur la note finale.\n• **1. Fluidité et autonomie** : le texte se lit-il aisément d’un trait ? Un lecteur ignorant l’original comprendrait-il tout ?\n• **2. Articulations logiques** : les idées sont-elles reliées par des connecteurs justes et dans le même ordre que l’auteur ?\n• **3. Posture énonciative** : aucune mention « l’auteur dit que… », aucun jugement, aucun ajout extérieur ?\n• **4. Langue et orthographe** : accords des participes passés, ponctuation nette, registre courant-soutenu.\n• **5. Comptage vérifié** : comptez deux fois vos mots (en marquant discrètement un repère tous les 20 ou 50 mots au brouillon) et inscrivez le total exact.',
            keyRule:
              'Vérifiez toujours ces 5 piliers avant de rendre : Fluidité, Ordre logique, Fidélité sans métadiscours, Orthographe, et Quota ±10 %.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Lors de la relecture finale d’un résumé de 150 mots (±10 %), vous comptez 174 mots. Quelle est la meilleure action à mener ?',
              options: [
                'Inscrire « 165 mots » à la fin en espérant que le correcteur ne recompte pas.',
                'Supprimer brutalement la dernière phrase qui contient la conclusion de l’auteur.',
                'Condenser certaines tournures (nominalisations, suppressions d’adjectifs redondants) pour ramener le texte autour de 155–160 mots sans perdre d’idée directrice.',
                'Remplacer tous les mots par des abréviations télégraphiques.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On ne triche jamais sur le décompte et on ne coupe jamais la conclusion : on resserre le style (nominalisations, hyperonymes, suppression des mots superflus) pour rentrer dans [135 ; 165] mots.',
            },
          },
        ],
      },
    ],
  },
  // ===========================================================================
  // CHAPITRE 3 : DISSERTATION D’ORDRE GÉNÉRAL
  // ===========================================================================
  {
    id: 'lmd_entd_l1_tef_ch3',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Dissertation d’ordre général',
    summary:
      'Analyser un sujet (Information vs Consigne), formuler une problématique féconde, choisir le plan adapté (dialectique, thématique, analytique, comparatif) et rédiger avec rigueur introduction en 3 temps, paragraphes argumentatifs A-A-I, transitions et conclusion.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Technique d’Expression Française',
    points: [
      {
        id: 'lmd_entd_l1_tef_ch3_p1',
        order: 1,
        title: 'Analyse du sujet, problématisation et travail préparatoire',
        summary:
          'Décomposer un sujet en Information et Consigne, définir les mots-clés, formuler une problématique précise et organiser ses idées au brouillon.',
        conceptExplanation:
          'La dissertation d’ordre général évalue la capacité à mener une réflexion personnelle, argumentée et structurée sur un grand enjeu de société ou d’actualité (économie, numérique, éducation, citoyenneté). Tout se joue au brouillon dans la phase préparatoire : analyser rigoureusement l’Information (le thème et l’assertion) et la Consigne (la tâche imposée), reformuler le sujet pour s’assurer de sa compréhension, dégager le problème central sous forme de question directrice, puis rassembler et hiérarchiser des arguments illustrés d’exemples précis.',
        keyRule:
          'Tout sujet de dissertation se décompose en deux éléments complémentaires : l’Information (le thème/constat) et la Consigne (l’orientation exacte du travail demandé).',
        workedExample: {
          title: 'Analyser un sujet sur l’économie numérique en Côte d’Ivoire',
          statement:
            'Sujet : « L’économie numérique et la transformation digitale constituent l’avenir de la Côte d’Ivoire. Discutez cette affirmation. »',
          methodSteps: [
            'Information : « L’économie numérique et la transformation digitale constituent l’avenir de la Côte d’Ivoire » (thème = développement économique par le digital).',
            'Consigne : « Discutez cette affirmation » (verbe injonctif appelant un examen nuancé et contradictoire → plan dialectique).',
            'Mots-clés : économie numérique (services digitaux, fintech, e-commerce), transformation digitale (modernisation des administrations et entreprises), avenir (levier durable de croissance et d’emploi).',
            'Problématique : Dans quelle mesure le numérique représente-t-il un véritable moteur de développement pour la Côte d’Ivoire, malgré les défis d’infrastructures, de compétences et d’inclusion qu’il soulève ?',
          ],
          conclusion:
            'Le plan s’impose naturellement : I. Les atouts majeurs du numérique pour la croissance ; II. Les limites et obstacles structurels à surmonter ; III. Les conditions d’une transformation digitale inclusive et souveraine.',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Esprit de l’épreuve',
            stepTheme: 'Attentes universitaires',
            stepTitle: 'Comprendre la finalité de la dissertation d’ordre général',
            paragraphText:
              'Contrairement à une épreuve purement technique, littéraire ou philosophique spécialisée, la dissertation d’ordre général mesure votre culture générale, votre jugement critique et votre maîtrise de la langue.\n• **Réflexion personnelle argumentée** : vous devez répondre de façon cohérente à une question de société en mobilisant des raisons solides, et non de simples opinions personnelles non prouvées.\n• **Esprit d’analyse et de synthèse** : il faut savoir décomposer un problème complexe, envisager plusieurs points de vue, puis rassembler ses conclusions.\n• **Clarté et correction** : une langue concise, efficace, bien ponctuée et une copie soigneusement présentée (alinéas, sauts de ligne entre grandes parties) pèsent fortement dans l’évaluation.',
            keyRule:
              'La dissertation n’est pas une récitation de connaissances : c’est une démonstration organisée qui répond à un problème précis dans une langue claire.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle compétence principale la dissertation d’ordre général vise-t-elle à évaluer ?',
              options: [
                'La mémorisation mot à mot de dates historiques sans lien logique.',
                'La capacité à mener une réflexion personnelle argumentée, structurée et rédigée dans une langue claire sur un enjeu de société.',
                'L’aptitude à résumer un texte en respectant une marge de ±10 %.',
                'La maîtrise exclusive d’un jargon technique réservé aux ingénieurs.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La dissertation d’ordre général évalue la réflexion personnelle argumentée, l’esprit d’analyse et de synthèse, la logique du plan et la qualité d’expression écrite.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Information vs Consigne',
            stepTheme: 'Décomposition du sujet',
            stepTitle: 'Distinguer l’Information et la Consigne pour éviter le hors-sujet',
            paragraphText:
              'Chaque libellé de dissertation comporte deux parties distinctes dont l’analyse conjointe dicte toute votre démarche.\n• **L’Information** : c’est l’énoncé du thème ou de l’affirmation portant sur un fait de société ou d’actualité (parfois une citation). Elle fixe le périmètre exact de ce dont vous devez parler.\n• **La Consigne** : généralement formulée à l’impératif (« Discutez », « Montrez », « Analysez »), au futur simple ou sous forme interrogative (« Peut-on dire que… ? »), elle oriente le traitement logique et détermine le type de plan.\n• **Exemple concret** : dans « Les réseaux sociaux isolent les jeunes plus qu’ils ne les rapprochent. Partagez-vous ce point de vue ? », l’Information est le constat sur l’isolement par les réseaux ; la Consigne « Partagez-vous ce point de vue ? » impose un débat nuancé.',
            visualSchema: {
              type: 'flowchart',
              title: 'Démarche préparatoire d’analyse d’un sujet de dissertation',
              caption: 'Les 5 étapes incontournables au brouillon avant toute rédaction.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Lire et séparer Information / Consigne', sublabel: 'Repérer le thème exact et le verbe d’action', kind: 'start', color: 'blue' },
                  { label: '2. Définir les mots-clés et reformuler', sublabel: 'Écarter tout malentendu ou hors-sujet', kind: 'process', color: 'violet' },
                  { label: '3. Formuler la problématique', sublabel: 'Traduire la difficulté du sujet en question directrice', kind: 'process', color: 'orange' },
                  { label: '4. Rechercher idées et exemples', sublabel: 'Brainstorming : arguments variés + faits précis', kind: 'process', color: 'green' },
                  { label: '5. Choisir le plan et classer les axes', sublabel: 'Dialectique, thématique, analytique ou comparatif', kind: 'end', color: 'slate' },
                ],
              },
            },
            keyRule:
              'L’Information indique DE QUOI parler ; la Consigne indique COMMENT le traiter (et donc quel type de plan adopter).',
            konanTip:
              'Entourez le verbe de la consigne en rouge au brouillon : « Discutez » ≠ « Montrez » ≠ « Comparez » — un seul verbe mal lu peut orienter vers le mauvais plan.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Dans le sujet « L’intelligence artificielle menace-t-elle l’emploi humain ? Vous répondrez à cette question de façon argumentée », quel rôle joue la seconde phrase ?',
              options: [
                'C’est l’Information qui présente le thème.',
                'C’est la Consigne qui oriente la démarche rédactionnelle attendue.',
                'C’est une amorce d’introduction à recopier telle quelle.',
                'C’est une citation d’auteur à réfuter obligatoirement.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La consigne, souvent à l’impératif ou au futur simple (« Vous répondrez… »), précise la tâche à accomplir et oriente le mode de traitement du sujet.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Mots-clés & Reformulation',
            stepTheme: 'Éviter le hors-sujet',
            stepTitle: 'Analyser chaque mot-clé et reformuler le sujet avec précision',
            paragraphText:
              'Un hors-sujet survient presque toujours parce que le candidat a lu le sujet trop vite et n’a retenu qu’un mot familier (par exemple « Internet ») en oubliant la nuance décisive.\n• **Définir tous les termes clés** : interrogez les noms, les adjectifs, mais aussi les petits mots restrictifs ou absolus (« toujours », « uniquement », « absolue », « surtout », « encore »).\n• **Test de compréhension** : vous n’êtes certain d’avoir compris le sujet que lorsque vous pouvez le reformuler clairement dans vos propres mots sans en changer le sens.\n• **Exemple concret** : « Peut-on dire que le travail n’est qu’une contrainte ? » — Le pivot du sujet est la restriction « ne… que » (= uniquement) : il ne faut pas parler du travail en général, mais discuter l’idée qu’il se réduirait à une pure contrainte.',
            keyRule:
              'Repérez systématiquement les termes absolus ou restrictifs (« tout, toujours, jamais, ne… que, absolue ») : ils contiennent la clé de la discussion.',
            konanTip:
              'Au brouillon, soulignez chaque mot-clé et notez en dessous ses synonymes, ses contraires et ses champs d’application (économique, social, culturel, éthique).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Dans le sujet « Critiquer l’idée que la liberté numérique est absolue », quel mot constitue le pivot critique le plus décisif ?',
              options: [
                'L’idée',
                'Absolue',
                'Que',
                'Est',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adjectif « absolue » (= sans aucune limite ni règle) est le pivot critique : la réflexion doit montrer pourquoi la liberté numérique nécessite un encadrement (droits d’autrui, cybersécurité, données personnelles).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Problématisation',
            stepTheme: 'Question directrice',
            stepTitle: 'Construire une véritable problématique et non une simple redite du sujet',
            paragraphText:
              'La problématique est le moteur intellectuel de la dissertation : c’est la question féconde qui met en lumière la tension, le paradoxe ou l’enjeu caché derrière le sujet.\n• **Ce qu’elle n’est PAS** : une simple reprise du sujet avec un point d’interrogation à la fin, ni une question fermée appelant seulement « oui » ou « non ».\n• **Comment la formuler** : confrontez deux exigences ou deux réalités en tension (« En quoi… ? », « Dans quelle mesure… ? », « Comment concilier… et… ? »).\n• **Exemple concret** : sur « Les réseaux sociaux sont-ils dangereux pour la démocratie ? », une bonne problématique est : « Dans quelle mesure les réseaux sociaux, conçus pour libérer la parole citoyenne, peuvent-ils fragiliser le débat démocratique et comment en préserver les bénéfices ? »',
            keyRule:
              'Une problématique féconde révèle un paradoxe ou une tension réelle et appelle une réponse construite en plusieurs étapes, jamais un simple oui/non.',
            konanTip:
              'Les formules « Dans quelle mesure… ? », « En quoi… malgré… ? » et « Comment concilier… et… ? » produisent presque toujours des problématiques riches et nuancées.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pour le sujet « L’automatisation va-t-elle détruire l’emploi ? », quelle formulation constitue la meilleure problématique ?',
              options: [
                'Qu’est-ce qu’un robot ?',
                'L’automatisation détruit-elle l’emploi ?',
                'Dans quelle mesure l’automatisation bouleverse-t-elle le marché du travail entre destructions de postes routiniers et création de nouveaux métiers qualifiés ?',
                'Depuis quand l’homme utilise-t-il des machines ?',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cette formulation met en évidence la tension réelle (destructions vs créations de nouveaux métiers) et trace immédiatement la trajectoire logique du devoir.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Recherche d’idées',
            stepTheme: 'Brainstorming',
            stepTitle: 'Mobiliser des arguments variés et des exemples précis au brouillon',
            paragraphText:
              'La richesse d’une dissertation dépend de la diversité des domaines que vous explorez au brouillon pour nourrir votre réflexion.\n• **Méthode des angles d’approche** : interrogez le sujet sous plusieurs prismes complémentaires : économique, social, technologique, juridique/éthique, éducatif et culturel.\n• **Distinguer argument et exemple** : un argument est une raison abstraite et générale (« le paiement mobile favorise l’inclusion financière ») ; un exemple est un fait précis, daté ou localisé qui le prouve (« le taux d’adoption du mobile money dans l’espace UEMOA permet aux commerçants informels d’encaisser sans compte bancaire classique »).\n• **Ne jamais empiler d’exemples nus** : un exemple seul ne prouve rien tant qu’il n’est pas rattaché à un argument clair.',
            konanTip:
              'Pensez à l’acronyme « ÉSÉTEC » (Économique, Social, Éducatif, Technologique, Éthique/Juridique, Culturel) au brouillon : il vous garantit de ne jamais manquer d’idées.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle différence distingue un argument d’un exemple dans une dissertation ?',
              options: [
                'L’argument est une anecdote personnelle ; l’exemple est une définition.',
                'L’argument est une idée générale qui justifie une position ; l’exemple est un fait concret et précis qui illustre et prouve cet argument.',
                'L’argument se place en conclusion ; l’exemple se place en introduction.',
                'Il n’y a aucune différence : un exemple suffit toujours à remplacer un argument.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’argument fournit la raison logique générale, tandis que l’exemple (historique, économique, littéraire ou d’actualité) l’ancre dans le réel pour emporter la conviction.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Classement des axes',
            stepTheme: 'Construction du plan',
            stepTitle: 'Regrouper et hiérarchiser ses idées en axes directeurs équilibrés',
            paragraphText:
              'Une fois vos idées notées en vrac au brouillon, il faut les trier, éliminer les redondances et les ordonner de manière progressive.\n• **Regrouper par affinité** : rassemblez vos arguments en 2 ou 3 grandes parties (axes directeurs), chacune composée de 2 ou 3 sous-parties (paragraphes) cohérentes.\n• **Ordre progressif** : à l’intérieur d’une partie, allez toujours de l’argument le plus évident ou le plus simple vers l’argument le plus profond ou le plus décisif.\n• **Équilibre matériel** : veillez à ce que vos grandes parties soient de longueur comparable (évitez une Partie I de deux pages suivie d’une Partie II de dix lignes).\n• **Vérification** : chaque axe doit répondre directement à un aspect de la problématique posée en introduction.',
            keyRule:
              'Un bon plan détaillé comporte 2 ou 3 grandes parties équilibrées, divisées chacune en 2 ou 3 paragraphes progressifs assortis d’exemples précis.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Comment doit-on ordonner les arguments à l’intérieur d’une grande partie de dissertation ?',
              options: [
                'Dans l’ordre aléatoire où ils sont venus à l’esprit au brouillon.',
                'De l’argument le plus évident/simple vers l’argument le plus fort et le plus approfondi.',
                'Par ordre alphabétique des mots-clés.',
                'En commençant par la conclusion et en terminant par la définition.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La progression du plus évident vers le plus profond crée une dynamique démonstrative qui retient l’attention du lecteur et évite l’effet de retombée.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch3_p2',
        order: 2,
        title: 'Choisir le plan adapté (dialectique, thématique, analytique, comparatif)',
        summary:
          'Identifier le type de plan exigé par la consigne et maîtriser la logique propre au plan dialectique, thématique, analytique, comparatif et chronologique.',
        conceptExplanation:
          'Il n’existe pas un plan unique valable pour tous les sujets : le plan découle directement de la nature du sujet et du verbe de consigne. On distingue quatre grands plans canoniques en dissertation d’ordre général — dialectique (thèse, antithèse, synthèse), thématique (étayer les différents aspects d’une affirmation), analytique (causes, manifestations/conséquences, solutions) et comparatif (parallèle entre deux réalités) — complétés par le plan chronologique pour les sujets d’évolution historique.',
        keyRule:
          'Ne plaquez jamais un plan dialectique sur un sujet qui ne demande pas de débat : c’est le verbe de consigne qui commande le choix du plan.',
        workedExample: {
          title: 'Associer trois sujets à leur plan optimal',
          statement:
            'Déterminez le plan le plus adapté pour : (A) « Peut-on dire que l’IA remplacera totalement l’enseignant ? » ; (B) « Quels sont les enjeux du numérique dans le domaine de la santé ? » ; (C) « Quelles sont les causes et les solutions face à la cybercriminalité ? ».',
          methodSteps: [
            '(A) Question fermée/controversée (« Peut-on dire… totalement ? ») → débat nuancé : Plan dialectique (I. Apports/remplacement partiel ; II. Limites irremplaçables de l’humain ; III. Complémentarité enseignant-IA).',
            '(B) Consigne d’exploration (« Quels sont les enjeux… ? ») → pas de thèse à réfuter, mais des dimensions à explorer : Plan thématique (ex. : I. Enjeux médicaux/diagnostic ; II. Enjeux d’accès aux soins ; III. Enjeux éthiques et protection des données).',
            '(C) Consigne explicative et résolutive (« causes et solutions ») → Plan analytique (I. Manifestations et ampleur ; II. Causes profondes ; III. Solutions techniques, juridiques et éducatives).',
          ],
          conclusion:
            '(A) = Dialectique ; (B) = Thématique ; (C) = Analytique.',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Panorama des plans',
            stepTheme: 'Choix stratégique',
            stepTitle: 'Relier chaque type de consigne au plan canonique correspondant',
            paragraphText:
              'Choisir le mauvais type de plan entraîne un traitement bancal du sujet : on peut discuter alors qu’il fallait expliquer, ou simplement décrire alors qu’il fallait débattre.\n• **Plan dialectique** : exigé par « Discutez », « Pensez-vous que… ? », « Peut-on dire… ? », « Partagez-vous ce point de vue ? ».\n• **Plan thématique** : exigé par « Montrez comment », « Quels sont les enjeux de… », « Justifiez », « Illustrez ».\n• **Plan analytique** : exigé par « Analysez les causes et conséquences », « Proposez des solutions », « Expliquez ce phénomène ».\n• **Plan comparatif** : exigé par « Comparez », « Distinguez », « En quoi X diffère-t-il de Y ? ».',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Les 4 grands types de plan en dissertation d’ordre général',
              caption: 'Choisir l’architecture adaptée à la consigne et à la nature du problème posé.',
              matrix2x2: {
                topAxis: ['Orientation critique / débat', 'Orientation explicative / exploratoire'],
                leftAxis: ['Structure en tensions / bilans', 'Structure en aspects / étapes'],
                topLeft: {
                  title: 'Plan dialectique',
                  items: [
                    'Consignes : Discutez, Peut-on dire, Pensez-vous',
                    'Structure : Thèse → Antithèse → Synthèse',
                    'But : examiner un jugement et le dépasser',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Plan thématique',
                  items: [
                    'Consignes : Montrez, Quels sont les enjeux, Étudiez',
                    'Structure : Axe 1 → Axe 2 → Axe 3 (complémentaires)',
                    'But : étayer et explorer toutes les facettes',
                  ],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Plan comparatif',
                  items: [
                    'Consignes : Comparez, Distinguez, Diffère-t-elle',
                    'Structure : Ressemblances → Différences → Dépassement',
                    'But : mettre deux notions en parallèle',
                  ],
                  color: 'violet',
                },
                bottomRight: {
                  title: 'Plan analytique',
                  items: [
                    'Consignes : Analysez, Causes, Proposez des solutions',
                    'Structure : Constat/Manifestations → Causes → Solutions',
                    'But : diagnostiquer un phénomène et y remédier',
                  ],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'Avant de bâtir vos parties, vérifiez si la consigne vous demande de débattre (dialectique), d’explorer (thématique), de diagnostiquer (analytique) ou de confronter (comparatif).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle consigne oriente prioritairement vers un plan dialectique ?',
              options: [
                '« Retracez l’évolution de l’informatique depuis 1950. »',
                '« Partagez-vous l’idée selon laquelle le livre papier est condamné à disparaître ? »',
                '« Quelles sont les principales causes de l’exode rural ? »',
                '« Comparez le commerce traditionnel et le commerce électronique. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La question « Partagez-vous l’idée selon laquelle… ? » invite explicitement à examiner une opinion controversée, à la soutenir puis à la nuancer/dépasser : c’est la marque du plan dialectique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Plan dialectique (1)',
            stepTheme: 'Thèse & Antithèse',
            stepTitle: 'Construire rigoureusement la Thèse et l’Antithèse sans caricature',
            paragraphText:
              'Le plan dialectique invite à une argumentation rigoureuse qui examine un jugement avant d’en montrer les limites.\n• **I. La Thèse** : elle explique et justifie en quoi l’affirmation du sujet est fondée ou pertinente. Même si vous n’êtes pas totalement d’accord avec la citation, vous devez d’abord lui rendre justice avec des arguments sérieux et honnêtes.\n• **II. L’Antithèse** : elle met en évidence les limites, la part d’exagération ou les angles morts de la thèse initiale. Elle ne doit pas brutalement nier tout ce qui vient d’être prouvé, mais nuancer et élargir le regard.\n• **Piège classique** : éviter le plan « Oui / Non » brutal où la Partie II contredit mot pour mot la Partie I (« Le numérique crée des emplois » / « Le numérique ne crée aucun emploi »).',
            keyRule:
              'La Thèse justifie la part de vérité du sujet ; l’Antithèse en montre les limites ou les insuffisances sans contredire bêtement la Partie I.',
            konanTip:
              'Formulez vos transitions avec concession : « S’il est indéniable que… (rappel thèse), force est toutefois de constater que cette approche rencontre certaines limites… (annonce antithèse). »',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quel est le rôle exact de l’antithèse dans un plan dialectique ?',
              options: [
                'Répéter les mêmes arguments que la thèse avec d’autres exemples.',
                'Montrer les limites, les nuances ou la part d’exagération de l’affirmation initiale.',
                'Résumer le devoir et ouvrir sur un autre sujet.',
                'Définir les mots-clés du sujet avant de commencer.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’antithèse examine les limites, la part d’erreur ou d’exagération contenue dans l’assertion initiale afin de dépasser une vision unilatérale.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Plan dialectique (2)',
            stepTheme: 'La Synthèse',
            stepTitle: 'Réussir la synthèse : dépasser la contradiction au lieu de faire un compromis mou',
            paragraphText:
              'La troisième partie du plan dialectique — la Synthèse — est souvent la plus mal comprise par les étudiants.\n• **Ce qu’elle n’est PAS** : un simple résumé de I et II ni un compromis tiède (« il y a du bon et du mauvais, un peu des deux »).\n• **Sa vraie fonction** : dépasser la contradiction apparente en proposant une perspective nouvelle, plus haute ou plus opérationnelle (conditions de réussite, conciliation, changement d’échelle).\n• **Remarque importante** : tous les sujets dialectiques n’imposent pas forcément une troisième grande partie autonome ; lorsqu’un plan en deux parties (Thèse / Antithèse) suffit, la synthèse doit impérativement apparaître dans la conclusion.\n• **Exemple concret** : après I. L’IA menace certains emplois et II. L’IA crée de nouvelles opportunités, la Synthèse montre que tout dépend des politiques de formation continue et de régulation éthique.',
            keyRule:
              'La synthèse dépasse l’opposition entre Thèse et Antithèse en introduisant un point de vue supérieur (conditions, régulation, conciliation).',
            konanTip:
              'Posez-vous la question : « À quelles conditions concrètes peut-on profiter des atouts de la Partie I tout en évitant les dérives de la Partie II ? » Vous tenez votre synthèse !',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Pourquoi la phrase « En somme, le numérique a des avantages et des inconvénients » ne constitue-t-elle PAS une bonne synthèse dialectique ?',
              options: [
                'Parce qu’elle est trop longue.',
                'Parce qu’elle juxtapose platement la thèse et l’antithèse sans proposer de dépassement ni d’idée nouvelle.',
                'Parce qu’elle contient le mot « numérique ».',
                'Parce qu’une synthèse doit toujours refuser les avantages.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une véritable synthèse ne se contente pas d’un « compromis mou » : elle surmonte la contradiction en montrant à quelles conditions ou à quel niveau supérieur le problème se résout.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Plan thématique',
            stepTheme: 'Explorer & Étayer',
            stepTitle: 'Structurer un plan thématique pour étayer une affirmation ou explorer des enjeux',
            paragraphText:
              'Le plan thématique s’apparente à un exposé approfondi : il ne vous demande pas de contester une thèse, mais de l’étayer ou d’explorer méthodiquement les différents aspects d’une notion.\n• **Quand l’utiliser** : face à des consignes comme « Quels sont les enjeux de… ? », « Montrez en quoi… », « Étudiez les effets de… », « Comment expliquer que… ? ».\n• **Architecture** : chaque grande partie correspond à une dimension distincte et complémentaire du sujet, organisée selon une progression logique (du matériel au moral, de l’individuel au collectif, du court terme au long terme).\n• **Exemple concret** : sur « Étudiez les effets de la technologie sur la société », on peut articuler : I. La transformation des relations économiques et du travail ; II. La mutation des liens sociaux et culturels ; III. Les nouveaux défis éthiques et citoyens.',
            keyRule:
              'Dans un plan thématique, les parties ne s’opposent pas : elles se complètent pour couvrir de façon exhaustive et progressive toutes les dimensions du sujet.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Pour le sujet « Quels sont les enjeux du numérique dans le domaine de la santé ? », quel plan thématique est le plus cohérent ?',
              options: [
                'I. Oui le numérique aide la santé ; II. Non le numérique ne sert à rien ; III. Le numérique existe.',
                'I. L’amélioration du diagnostic et du suivi médical ; II. L’élargissement de l’accès aux soins (télémédecine) ; III. Les défis de confidentialité et de sécurité des données de santé.',
                'I. Histoire de la médecine antique ; II. Invention d’Internet en 1969 ; III. Conclusion.',
                'I. Définition du mot santé ; II. Définition du mot numérique.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ce plan thématique couvre trois dimensions complémentaires et progressives (clinique, territoriale/sociale, juridique/éthique) qui répondent pleinement à la consigne « Quels sont les enjeux… ? ».',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Plan analytique',
            stepTheme: 'Diagnostic & Action',
            stepTitle: 'Construire un plan analytique : manifestations, causes et solutions',
            paragraphText:
              'Très apprécié dans les sujets d’actualité économique, environnementale ou sociale, le plan analytique adopte la démarche d’un diagnostic rigoureux suivi de remèdes.\n• **I. Constat, manifestations ou conséquences** : décrire avec précision l’ampleur et les formes concrètes du phénomène.\n• **II. Causes profondes** : remonter aux facteurs explicatifs (économiques, sociaux, éducatifs, institutionnels) qui produisent ce phénomène.\n• **III. Solutions et perspectives** : proposer des pistes d’action réalistes, hiérarchisées et cohérentes avec les causes identifiées.\n• **Exemple concret** : sur « La désinformation en ligne : analysez le phénomène et proposez des solutions », on déroule : I. Formes et impacts de la désinformation ; II. Facteurs techniques et psychologiques ; III. Remèdes (éducation aux médias, régulation, vérification).',
            konanTip:
              'Vérifiez toujours la symétrie entre votre Partie II (Causes) et votre Partie III (Solutions) : chaque grande cause identifiée doit trouver sa réponse dans les solutions.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle trilogie caractérise le plan analytique en dissertation d’ordre général ?',
              options: [
                'Thèse / Antithèse / Synthèse',
                'Passé / Présent / Futur',
                'Manifestations (ou constat) / Causes / Solutions',
                'Ressemblances / Différences / Exemple',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le plan analytique examine un problème de société en étudiant ses manifestations (et conséquences), ses causes profondes, puis les solutions envisageables.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Comparatif & Chronologique',
            stepTheme: 'Plans spécialisés',
            stepTitle: 'Maîtriser le plan comparatif et le plan chronologique',
            paragraphText:
              'Certains libellés invitent spécifiquement à confronter deux réalités ou à retracer une évolution dans le temps.\n• **Plan comparatif** : il établit un parallèle constant entre deux notions ou deux contextes (ex. : « Comparez la formation présentielle et l’enseignement en ligne »). Évitez le plan « tiroir » séparé (I. Tout sur A ; II. Tout sur B sans jamais les relier) ; préférez : I. Points de convergence ; II. Divergences majeures ; III. Complémentarité ou dépassement.\n• **Plan chronologique** : adapté aux consignes comme « Retracez l’évolution… » ou « Étudiez les étapes… » (ex. : l’évolution des technologies de communication du XXe siècle à nos jours). Chaque partie correspond à une période charnière marquée par une rupture précise.\n• **Règle commune** : même dans un plan chronologique ou comparatif, chaque partie doit être guidée par une idée directrice, jamais par une simple liste de faits.',
            keyRule:
              'Dans un plan comparatif, mettez toujours les deux notions en dialogue (ressemblances, différences, dépassement) plutôt que de les juxtaposer séparément.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Pour un sujet comparatif (« En quoi le commerce électronique diffère-t-il du commerce traditionnel ? »), quel piège faut-il absolument éviter ?',
              options: [
                'Dégager des points communs avant d’analyser les différences.',
                'Juxtaposer deux exposés séparés (tout sur A en I, tout sur B en II) sans jamais les confronter.',
                'Proposer une synthèse sur la complémentarité (omnicanal) en III.',
                'Illustrer chaque critère de comparaison par des exemples précis.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un vrai plan comparatif établit un parallèle constant entre les deux réalités ; traiter A puis B isolément détruit la comparaison.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch3_p3',
        order: 3,
        title: 'Introduction, paragraphe argumentatif (A-A-I) et conclusion',
        summary:
          'Rédiger une introduction en 3 temps, construire chaque paragraphe selon le modèle Affirmation-Argumentation-Illustration, soigner les transitions et réussir une conclusion en 3 temps.',
        conceptExplanation:
          'Une fois le plan détaillé validé au brouillon, la qualité rédactionnelle de la dissertation repose sur trois architectures rigoureuses : une introduction en entonnoir (amorce → rappel du sujet et problématique → annonce du plan), un développement composé de paragraphes argumentatifs bâtis selon le schéma Affirmation → Argumentation → Illustration (A-A-I) reliés par des phrases de transition, et une conclusion en trois mouvements (bilan synthétique reformulé → réponse claire à la problématique → ouverture pertinente).',
        keyRule:
          'Introduction = Amorce → Sujet & Problématique → Annonce du plan. Paragraphe = Affirmation → Argumentation → Illustration. Conclusion = Bilan → Réponse → Ouverture.',
        formulas: [
          {
            name: 'Architecture canonique du paragraphe argumentatif (A-A-I)',
            formula: '\\text{Paragraphe} = \\text{Affirmation (idée directrice)} + \\text{Argumentation (explication logique)} + \\text{Illustration (exemple précis)}',
            note: 'Chaque sous-partie correspond à un paragraphe distinct introduit par un alinéa et un connecteur logique.',
          },
        ],
        workedExample: {
          title: 'Rédiger un paragraphe argumentatif modèle (A-A-I)',
          statement:
            'Rédigez un paragraphe montrant que le paiement mobile stimule l’inclusion financière en Afrique de l’Ouest.',
          methodSteps: [
            'Affirmation : Tout d’abord, le paiement mobile lève les barrières traditionnelles d’accès aux services financiers.',
            'Argumentation : En effet, là où l’ouverture d’un compte bancaire classique exige souvent des revenus réguliers, des justificatifs lourds et la proximité d’une agence, un simple téléphone mobile permet d’épargner, de transférer et de régler des factures à faible coût.',
            'Illustration : Ainsi, en Côte d’Ivoire et dans l’espace UEMOA, des millions de commerçants, d’artisans et d’agriculteurs utilisent quotidiennement des solutions comme Orange Money ou Wave pour sécuriser leurs recettes et régler leurs fournisseurs sans manipuler d’espèces.',
          ],
          conclusion:
            'L’unité de sens est complète : idée annoncée, mécanisme démontré, exemple précis ancré dans le réel.',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Introduction 3 temps',
            stepTheme: 'Entonnoir logique',
            stepTitle: 'Bâtir l’introduction en trois temps rigoureux (Amorce → Problématique → Plan)',
            paragraphText:
              'Première impression donnée au correcteur, l’introduction se rédige en un seul bloc cohérent qui resserre progressivement le propos comme un entonnoir.\n• **1. Perspective générale (Amorce)** : situer le thème dans un cadre plus large (actualité, fait économique ou social, constat pertinent) pour amener naturellement le sujet.\n• **2. Citation/Rappel du sujet et Problématique** : intégrer le sujet de façon fluide (sans le coller brutalement), puis poser clairement la question centrale qui guidera toute la réflexion.\n• **3. Annonce du plan** : présenter avec élégance et clarté les grandes articulations du développement (« Nous examinerons d’abord…, avant d’analyser…, pour enfin montrer… »).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture de l’introduction en 3 temps',
              caption: 'Mouvement en entonnoir : du contexte général jusqu’au plan précis du devoir.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  { badge: 'Étape 1', title: 'Perspective générale (Amorce)', subtitle: 'Actualité, constat social ou cadre général lié au thème', color: 'blue' },
                  { badge: 'Étape 2', title: 'Rappel du sujet & Problématique', subtitle: 'Intégration fluide du sujet + question directrice féconde', color: 'violet' },
                  { badge: 'Étape 3', title: 'Annonce du plan', subtitle: 'Présentation claire et rédigée des grandes parties du devoir', color: 'green' },
                ],
              },
            },
            keyRule:
              'Une introduction complète enchaîne toujours sans saut de ligne : Amorce → Rappel du sujet et Problématique → Annonce du plan.',
            konanTip:
              'Rédigez votre introduction intégralement au brouillon avant de passer au propre : une entrée en matière nette donne immédiatement confiance au lecteur.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Quel est l’ordre exact des trois étapes d’une introduction de dissertation ?',
              options: [
                'Annonce du plan → Amorce → Problématique',
                'Problématique → Annonce du plan → Amorce',
                'Amorce (perspective générale) → Rappel du sujet et Problématique → Annonce du plan',
                'Définition du dictionnaire → Exemple → Conclusion provisoire',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’introduction suit toujours le mouvement en entonnoir : perspective générale (amorce), intégration du sujet suivie de la problématique, puis annonce des grandes articulations du plan.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Réussir l’amorce',
            stepTheme: 'Éviter les clichés',
            stepTitle: 'Rédiger une amorce pertinente et bannir les formules bateaux',
            paragraphText:
              'Une amorce réussie capte l’attention dès la première ligne et prouve votre culture ; une amorce clichée indispose immédiatement le correcteur.\n• **Clichés à proscrire absolument** : « Depuis la nuit des temps… », « De tout temps, l’homme… », « Au jour d’aujourd’hui… », « Dans notre société actuelle… ».\n• **Amorces efficaces** : partir d’un fait d’actualité récent et précis, d’un paradoxe frappant, d’une donnée économique reconnue ou d’une citation exacte qui introduit naturellement le thème.\n• **Règle d’or** : ne répondez jamais à la problématique dès l’introduction et n’y placez pas vos exemples principaux du développement.\n• **Exemple concret** : au lieu de « De tout temps, la communication a existé », écrivez : « En moins de deux décennies, le smartphone est devenu le premier point d’accès à l’information et aux services bancaires pour des centaines de millions d’Africains. »',
            keyRule:
              'Remplacez toujours les clichés vagues (« Depuis la nuit des temps ») par un constat précis, un paradoxe ou un fait d’actualité directement lié au thème.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Parmi ces quatre phrases d’amorce sur le thème du travail à distance, laquelle est la plus efficace et académique ?',
              options: [
                'Depuis la nuit des temps, les hommes travaillent pour gagner leur vie.',
                'Au jour d’aujourd’hui, beaucoup de gens travaillent sur leur ordinateur à la maison.',
                'Accéléré par la crise sanitaire de 2020 et la généralisation du haut débit, le télétravail redessine durablement l’organisation des entreprises.',
                'Nous allons voir dans ce devoir si le télétravail est bien ou mal.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cette amorce est ancrée dans un fait précis et daté (2020, haut débit), évite tout cliché bateau et conduit directement au cœur du sujet dans un registre soutenu.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Paragraphe A-A-I',
            stepTheme: 'Corps du devoir',
            stepTitle: 'Construire chaque paragraphe argumentatif selon le modèle A-A-I',
            paragraphText:
              'Le développement n’est pas un mur de texte compact : il se compose de grandes parties, elles-mêmes divisées en paragraphes argumentatifs nettement séparés (un alinéa = une idée).\n• **A — Affirmation** : énoncer clairement l’idée directrice du paragraphe dès la première phrase, reliée par un connecteur (« D’abord », « En outre », « Cependant »).\n• **A — Argumentation** : expliquer, démontrer et développer le mécanisme logique (le « pourquoi » et le « comment ») qui justifie cette idée.\n• **I — Illustration** : appuyer la démonstration par un ou deux exemples précis, concrets et analysés (« Ainsi », « Par exemple », « Tel est le cas de »).\n• **Règle d’unité** : une seule idée secondaire par paragraphe ; dès que vous passez à un nouvel argument, allez à la ligne avec un nouvel alinéa.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Structure d’un paragraphe argumentatif (Modèle A-A-I)',
              caption: 'Chaque paragraphe du développement suit ces trois strates indissociables.',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: '1. Affirmation', title: 'Idée directrice du paragraphe', subtitle: 'Connecteur logique + formulation claire de l’argument', color: 'blue' },
                  { badge: '2. Argumentation', title: 'Démonstration et explication', subtitle: 'Analyse du mécanisme (causes, effets, justifications)', color: 'violet' },
                  { badge: '3. Illustration', title: 'Exemple(s) précis et commenté(s)', subtitle: 'Fait d’actualité, donnée économique, référence culturelle', color: 'green' },
                ],
              },
            },
            keyRule:
              'Un paragraphe = une idée unique structurée en trois temps : Affirmation → Argumentation → Illustration.',
            konanTip:
              'Relisez chacun de vos paragraphes avec trois couleurs mentales : bleu (idée annoncée), violet (explication logique), vert (exemple précis). S’il manque une couleur, complétez !',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Que signifie le sigle A-A-I qui structure chaque paragraphe du développement d’une dissertation ?',
              options: [
                'Amorce — Analyse — Introduction',
                'Affirmation — Argumentation — Illustration',
                'Antithèse — Analogie — Interrogation',
                'Addition — Alternative — Implication',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque paragraphe argumentatif suit le triptyque Affirmation (énoncé de l’idée), Argumentation (démonstration logique) et Illustration (exemple concret).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Transitions',
            stepTheme: 'Cohésion du devoir',
            stepTitle: 'Rédiger des transitions fluides entre les grandes parties',
            paragraphText:
              'Sans transition, les grandes parties d’une dissertation apparaissent juxtaposées et artificielles. La phrase de transition assure la continuité logique entre deux axes majeurs.\n• **Structure en deux mouvements** : (1) un bref bilan de ce qui vient d’être démontré dans la partie qui s’achève ; (2) une ouverture logique (souvent concessive ou interrogative) qui annonce la partie suivante.\n• **Emplacement** : à la toute fin d’une grande partie (juste avant de sauter une ligne pour ouvrir la partie suivante), ou en tête de la nouvelle partie.\n• **Exemple concret** : « Ainsi, la digitalisation offre aux entreprises ivoiriennes des gains de productivité indéniables. Toutefois, ces avancées technologiques suffisent-elles à garantir un développement inclusif lorsque l’accès au réseau et la formation restent inégaux ? »',
            keyRule:
              'Une transition réussie referme la partie précédente par un mini-bilan et ouvre logiquement la partie suivante sans lourdeur.',
            konanTip:
              'Évitez les transitions mécaniques de type « Après avoir vu le I, nous allons maintenant passer au II » : articulez toujours par le sens des idées !',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Quels sont les deux éléments essentiels d’une phrase de transition réussie entre la Partie I et la Partie II ?',
              options: [
                'Un nouvel exemple inédit et une définition de dictionnaire.',
                'Un bref bilan de la Partie I suivi de l’annonce logique de la Partie II.',
                'La recopie intégrale du sujet suivie de la conclusion finale.',
                'Le titre souligné « Partie II » précédé d’un numéro romain.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La transition fait le pont entre deux axes : elle dresse un bilan synthétique de l’axe qui se termine, puis introduit naturellement la nécessité de l’axe suivant.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Conclusion 3 temps',
            stepTheme: 'Clôture du devoir',
            stepTitle: 'Construire une conclusion en trois temps : Bilan, Réponse et Ouverture',
            paragraphText:
              'La conclusion est le dernier texte lu par le correcteur juste avant d’attribuer la note : elle ne doit jamais être bâclée faute de temps.\n• **1. Bilan synthétique** : résumer le chemin parcouru dans le développement en reformulant autrement les acquis (ne jamais recopier l’annonce du plan de l’introduction).\n• **2. Réponse nette à la problématique** : apporter une réponse claire, nuancée et cohérente à la question posée en introduction (c’est ici que s’exprime la synthèse finale).\n• **3. Ouverture (élargissement)** : terminer éventuellement par une perspective nouvelle, un enjeu connexe ou une question qui prolonge la réflexion dans un domaine plus vaste.\n• **Interdiction** : n’introduisez jamais un nouvel argument oublié dans la conclusion !',
            keyRule:
              'Conclusion en un bloc unique = Bilan reformulé + Réponse claire à la problématique + Ouverture pertinente (sans nouvel argument).',
            konanTip:
              'Ne terminez jamais par une question vague ou hors-sujet : votre ouverture doit prolonger naturellement la réflexion vers un enjeu voisin pertinent.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Que faut-il absolument éviter dans la conclusion d’une dissertation ?',
              options: [
                'Reformuler le bilan du développement avec d’autres mots que l’introduction.',
                'Apporter une réponse directe et nuancée à la problématique.',
                'Introduire un nouvel argument important oublié dans le développement.',
                'Proposer une ouverture pertinente vers un enjeu connexe.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La conclusion clôt et synthétise le raisonnement : y introduire un nouvel argument non traité dans le développement trahit un défaut d’organisation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Copie & Temps',
            stepTheme: 'Présentation académique',
            stepTitle: 'Soigner la mise en page de la copie et gérer efficacement son temps',
            paragraphText:
              'En dissertation d’ordre général, la présentation matérielle rend visible la rigueur de votre plan sans jamais recourir à des titres apparents.\n• **Pas de titres ni de numéros** : n’écrivez jamais « Introduction », « I. Thèse », « II. Antithèse » ou « Conclusion » sur votre copie de dissertation ; la structure se voit par les sauts de ligne et les connecteurs.\n• **Aération codifiée** : sautez 2 lignes entre l’introduction et le développement, 1 ligne entre chaque grande partie, et 2 lignes avant la conclusion ; marquez un alinéa net au début de chaque paragraphe.\n• **Répartition du temps (épreuve de 3 h)** : ~45 min d’analyse et plan détaillé au brouillon ; ~15 min pour rédiger introduction et conclusion au brouillon ; ~1 h 45 pour rédiger au propre ; ~15 min de relecture orthographique et syntaxique.',
            keyRule:
              'En dissertation, aucun titre ni numéro apparent : la mise en page (sauts de ligne + alinéas) et les transitions manifestent seules la structure.',
            konanTip:
              'Rédigez toujours la conclusion au brouillon avant de commencer le développement si vous craignez de manquer de temps : vous éviterez une fin brusque et inachevée.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Comment doit-on matérialiser visuellement la structure d’une dissertation sur la copie finale ?',
              options: [
                'En écrivant en majuscules soulignées « INTRODUCTION », « I. THÈSE », « II. ANTITHÈSE », « CONCLUSION ».',
                'Par des sauts de ligne entre les grandes parties, des alinéas en début de chaque paragraphe et des phrases de transition, sans titres apparents.',
                'En rédigeant toute la dissertation en un seul bloc compact sans jamais aller à la ligne.',
                'En utilisant des puces et des flèches dans tout le développement.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Contrairement à un rapport professionnel, la dissertation ne comporte ni titres ni numéros apparents : sa lisibilité repose sur les sauts de ligne, les alinéas et les transitions rédigées.',
            },
          },
        ],
      },
    ],
  },
  // ===========================================================================
  // CHAPITRE 4 : ÉCRITS PROFESSIONNELS ET COMMUNICATION ORALE
  // ===========================================================================
  {
    id: 'lmd_entd_l1_tef_ch4',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Écrits professionnels et communication orale : Prise de notes, Compte rendu et Exposé',
    summary:
      'Maîtriser la prise de notes structurée à l’oral et à l’écrit, rédiger avec neutralité les différents types de comptes rendus (activité, événement, réunion intégral ou analytique), composer des notes de service et courriels efficaces, et réussir ses exposés oraux.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Technique d’Expression Française',
    points: [
      {
        id: 'lmd_entd_l1_tef_ch4_p1',
        order: 1,
        title: 'Méthodologie de la prise de notes (à l’oral et à l’écrit)',
        summary:
          'Sélectionner les idées directrices et leurs liens logiques, adapter sa prise de notes à l’oral comme à l’écrit, présenter des feuilles aérées au recto et utiliser des abréviations normalisées.',
        conceptExplanation:
          'Prendre des notes ne consiste pas à tout transcrire mot à mot : c’est une opération intellectuelle de tri, de hiérarchisation et de reformulation rapide visant à garder trace d’une situation orale (conférence, réunion, entretien) ou d’un document écrit qu’on ne conservera pas. Des notes exploitables mettent en évidence les idées directrices, leur statut (principal vs secondaire) et surtout la nature exacte des liens logiques qui les unissent, sur une page aérée (recto seul, marges larges, blancs, abréviations cohérentes).',
        keyRule:
          'Des notes sans hiérarchie ni liens logiques sont inutilisables : notez les idées directrices, leurs articulations (→, ≠, +, =) et écrivez uniquement au recto avec des marges généreuses.',
        workedExample: {
          title: 'Transformer un passage oral en prise de notes structurée',
          statement:
            'Propos d’un conférencier : « Contrairement à une idée reçue, la transformation digitale ne se limite pas à acheter des ordinateurs ; elle exige d’abord une formation continue des équipes, ensuite une refonte des processus internes, et enfin une vraie culture de la donnée. »',
          methodSteps: [
            'Écarter les formules orales de remplissage (« Contrairement à une idée reçue »).',
            'Capturer la négation/opposition initiale avec un symbole (≠) et l’idée directrice.',
            'Hiérarchiser les 3 conditions par numérotation indentée et abréviations claires.',
          ],
          conclusion:
            'Prise de notes : « Transfo. digitale ≠ simple achat mat. info. ⇒ exige 3 piliers : 1) form° continue équipes ; 2) refonte processus int. ; 3) culture data. »',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Finalités',
            stepTheme: 'Pourquoi noter ?',
            stepTitle: 'Comprendre les objectifs généraux et spécifiques de la prise de notes',
            paragraphText:
              'La prise de notes est une compétence transversale indispensable aussi bien en amphithéâtre qu’en réunion de direction.\n• **Garder trace de l’éphémère** : conserver fidèlement l’essentiel d’une situation orale (conférence, réunion de projet, négociation) ou d’un ouvrage emprunté qu’on ne gardera pas sous la main.\n• **Disposer d’une information déjà traitée** : constituer une base de données personnelle sélectionnée, triée et immédiatement exploitable pour rédiger un compte rendu, préparer un examen ou prendre une décision.\n• **Objectifs spécifiques** : mémoriser activement, préparer un exposé, alimenter un rapport d’activité ou suivre les décisions prises par une équipe.\n• **Exemple concret** : un chef de projet numérique à Abidjan prend des notes en comité de pilotage afin de rédiger dans l’heure un compte rendu fiable des décisions et échéances.',
            keyRule:
              'Prendre des notes poursuit un double objectif général : garder trace de ce qui ne se conserve pas, et disposer d’informations déjà triées et prêtes à l’emploi.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quel est le double objectif général de la prise de notes professionnelle et universitaire ?',
              options: [
                'Recopier intégralement chaque mot prononcé et remplir un maximum de pages.',
                'Garder trace de situations orales ou de documents non conservés, et disposer d’informations déjà sélectionnées et traitées.',
                'Éviter d’écouter l’intervenant en se concentrant uniquement sur la calligraphie.',
                'Remplacer définitivement tout compte rendu officiel.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La prise de notes vise à conserver la mémoire des situations éphémères ou documents non détenus, tout en opérant dès le départ un tri intellectuel qui rend l’information directement exploitable.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Hiérarchie & Liens',
            stepTheme: 'Que noter ?',
            stepTitle: 'Noter les idées directrices, leur hiérarchie et les liens qui les unissent',
            paragraphText:
              'Un discours ou un texte est toujours construit de manière hiérarchisée : tout n’y joue pas le même rôle.\n• **Idées directrices vs idées secondaires** : distinguez visuellement (titres, retraits, puces) l’idée majeure et les idées subordonnées qui l’expliquent, la nuancent ou l’illustrent.\n• **Liens logiques indispensables** : notez explicitement la nature exacte des relations entre les idées (cause, conséquence, opposition, addition) à l’aide de symboles ou de mots-outils.\n• **Raisonnement général** : cherchez à dégager l’architecture globale (le plan) plutôt qu’une suite de faits isolés.\n• **Piège à éviter** : des notes réduites à une juxtaposition de mots sans liens deviennent incompréhensibles dès le lendemain.',
            keyRule:
              'Ne notez jamais des idées isolées en vrac : indiquez toujours leur niveau hiérarchique (principal / secondaire) et le lien logique qui les relie.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi des notes qui juxtaposent simplement des phrases ou des mots sans marquer leurs rapports sont-elles jugées inutilisables ?',
              options: [
                'Parce qu’elles sont écrites au stylo bleu.',
                'Parce qu’on ne distingue plus le statut des idées (directrices vs secondaires) ni la logique qui les articule.',
                'Parce qu’elles sont trop courtes pour un examen.',
                'Parce qu’elles contiennent des abréviations.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans subordination (idées principales / secondaires) ni marques de liens logiques (cause, conséquence, opposition), on perd le raisonnement d’ensemble et les notes deviennent inexploitables.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Prise de notes orale',
            stepTheme: 'Écoute active',
            stepTitle: 'Prendre des notes efficacement à l’oral (conférence, réunion, exposé)',
            paragraphText:
              'À l’oral, l’orateur avance à un rythme continu et ne répète pas toujours : il faut s’appuyer sur ses indices vocaux et structurels.\n• **Se laisser guider par la structure** : notez immédiatement les titres, les définitions capitales, les chiffres clés et les noms propres.\n• **Repérer les signaux oraux** : soyez attentif aux phrases d’annonce (« Nous verrons trois points… »), aux transitions, aux changements de ton, aux répétitions d’insistance et aux pauses qui mettent en valeur une idée clé.\n• **Reformuler en continu** : résumez en une ligne concise les développements longs et ne notez pas deux fois ce que l’orateur reformule pour expliquer.\n• **Gérer les trous** : si vous manquez un chiffre ou un terme, laissez un espace blanc marqué d’un point d’interrogation (?) et continuez à écouter plutôt que de perdre le fil.',
            konanTip:
              'Relisez et complétez vos notes dans les 24 heures qui suivent la réunion ou la conférence : après 48 heures, plus de la moitié des implicites s’effacent de la mémoire.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Lors d’une conférence orale fluide où l’orateur ne dicte pas, sur quels indices devez-vous principalement vous appuyer pour repérer les idées essentielles ?',
              options: [
                'Uniquement sur les anecdotes humoristiques racontées au début.',
                'Sur les phrases d’annonce et de transition, les variations de ton, les pauses et les répétitions d’insistance.',
                'Sur la vitesse à laquelle l’orateur marche dans la salle.',
                'Sur la transcription mot à mot de toutes ses phrases d’introduction.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À l’oral, les annonces de plan, transitions, pauses marquées, intonations appuyées et répétitions signalent précisément les idées majeures à capturer.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Prise de notes écrite',
            stepTheme: 'Lecture globale d’abord',
            stepTitle: 'Prendre des notes à partir d’un écrit sans tomber dans le piège du surlignage immédiat',
            paragraphText:
              'Face à un rapport, un article ou un livre, le réflexe le plus répandu — noter ou surligner dès la première ligne — est aussi le plus contre-productif.\n• **Exploiter les balises de l’auteur** : observez d’abord les titres, sous-titres, intertitres, mots en gras, résumés et conclusions pour saisir la carte mentale du document.\n• **Lire avant de noter** : ne prenez pas de notes au fil de la première lecture ; le sens exact et la hiérarchie d’un texte n’apparaissent pleinement qu’une fois le texte entier parcouru.\n• **Pourquoi éviter la prise de notes immédiate** : sans vision d’ensemble, on note trop de détails secondaires au début et on comprend mal la fonction réelle des arguments.\n• **Bonne pratique** : lisez d’abord le texte (ou la section complète), identifiez l’essentiel, puis prenez vos notes de synthèse en fermant partiellement le document.',
            keyRule:
              'À l’écrit, ne notez jamais dès la première lecture : parcourez d’abord tout le texte et ses titres/intertitres avant de sélectionner et noter.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Pourquoi est-il fortement déconseillé de prendre des notes ou de surligner au fur et à mesure de la première lecture d’un document écrit ?',
              options: [
                'Parce que cela abîme l’encre du stylo.',
                'Parce que le sens complet et la hiérarchie réelle du texte n’apparaissent qu’à la fin de la lecture : on risque de noter des détails sans importance.',
                'Parce qu’il est interdit d’utiliser des surligneurs à l’université.',
                'Parce qu’on ne doit jamais lire les titres et sous-titres d’un texte.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tant qu’on ne connaît pas le point d’arrivée de l’auteur, on ne peut pas évaluer l’importance relative de chaque passage : on surcharge ses notes d’éléments secondaires.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Présentation visuelle',
            stepTheme: 'Mise en page claire',
            stepTitle: 'Présenter des notes claires : recto seul, marges, blancs et code couleur',
            paragraphText:
              'Des notes bien présentées permettent de retrouver une information capitale en trois secondes, même plusieurs mois après la séance.\n• **N’écrire qu’au recto** : utiliser uniquement le recto des feuilles facilite le classement, la lecture panoramique de plusieurs pages côte à côte et évite les allers-retours gênants.\n• **Page aérée et marges larges** : prévoyez une marge généreuse (à gauche ou à droite) pour ajouter ultérieurement des mots-clés, des renvois ou des questions.\n• **Retours à la ligne et blancs** : marquez visuellement la structure par des alinéas, des décalages (indentations) et des espaces blancs pour insérer des compléments dans une autre couleur.\n• **Identification** : indiquez toujours en haut de page la date, le thème, le nom de l’intervenant ou de la réunion, et numérotez vos feuillets.',
            keyRule:
              'Règle des 4 repères : recto seul, marges larges, blancs entre les blocs, et en-tête systématique (date, sujet, numéro de page).',
            konanTip:
              'La méthode Cornell divise la page en trois zones : zone principale de notes à droite (70 %), colonne mots-clés/questions à gauche (30 %) et synthèse en bas de page (3–4 lignes).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle recommandation matérielle améliore le plus la clarté et l’exploitabilité d’une prise de notes ?',
              options: [
                'Écrire recto-verso en remplissant toute la page sans marge pour économiser du papier.',
                'Écrire uniquement au recto, laisser des marges et des blancs, et matérialiser la hiérarchie par des retours à la ligne.',
                'Rédiger en un bloc compact sans jamais revenir à la ligne.',
                'Ne jamais noter ni la date ni le sujet en haut de la feuille.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Écrire au recto seul sur une page aérée avec marges, blancs et indentations rend les notes immédiatement lisibles, annotables et classables.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Abréviations & Symboles',
            stepTheme: 'Vitesse et précision',
            stepTitle: 'Maîtriser un système cohérent d’abréviations et de symboles logiques',
            paragraphText:
              'La parole humaine atteint 150 mots par minute, alors que l’écriture manuscrite dépasse rarement 30 mots par minute : les abréviations et symboles comblent cet écart sans sacrifier le sens.\n• **Symboles logiques et mathématiques** : ⇒ (donc, entraîne), ⇐ (car, provient de), ≠ (différent, opposition), = (égal, c’est-à-dire), ↑ (hausse), ↓ (baisse), ∃ (il existe), ∀ (pour tout), ∅ (aucun/absence).\n• **Abréviations par troncation ou suffixes** : « -tion » → ° (ex. : inform°, product°), « -ment » → t en exposant (ex. : rapidt, générlt), « bcp » (beaucoup), « tjs » (toujours), « qq » (quelque), « pdt » (pendant), « ds » (dans), « pr » (pour), « cf. » (voir).\n• **Règle d’or** : n’improvisez pas d’abréviations ambiguës à la volée ; utilisez un répertoire personnel stable que vous saurez relire sans hésiter un mois plus tard.',
            keyRule:
              'Privilégiez les symboles logiques universels (⇒, ⇐, ≠, ↑, ↓) et un petit jeu d’abréviations constantes plutôt que d’abréger au hasard.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Que traduit fidèlement la note schématique suivante : « ↑ coût énergie ⇒ ↓ marges PME ≠ grandes ent. » ?',
              options: [
                'La baisse du coût de l’énergie augmente les marges des PME comme celles des grandes entreprises.',
                'La hausse du coût de l’énergie entraîne une baisse des marges des PME, contrairement aux grandes entreprises.',
                'Le coût de l’énergie est égal aux marges des PME et des grandes entreprises.',
                'Les PME produisent plus d’énergie que les grandes entreprises.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '↑ = hausse, ⇒ = entraîne/donc, ↓ = baisse, ≠ = à la différence de / contrairement à : la note condense 19 mots en 7 signes sans perte de sens.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch4_p2',
        order: 2,
        title: 'Le compte rendu : typologie, neutralité et rédaction',
        summary:
          'Distinguer compte rendu d’activité, d’événement et de réunion (intégral vs analytique), respecter la neutralité sans propositions dans le CR d’activité, et différencier compte rendu et procès-verbal.',
        conceptExplanation:
          'Le compte rendu (CR) est un écrit professionnel fondamental destiné à relater de manière fidèle, objective, claire et concise des faits, une mission, un événement ou le déroulement d’une réunion. Son style est celui de la narration neutre. On distingue principalement le compte rendu d’activité (ou de mission), le compte rendu d’événement, et le compte rendu de réunion — qui peut être intégral (style direct mot à mot) ou analytique (synthèse structurée en style indirect). Contrairement au rapport, le compte rendu d’activité ne formule pas de propositions de solutions ; et contrairement au procès-verbal, il n’a pas en principe de valeur juridique probante officielle.',
        keyRule:
          'Le compte rendu relate objectivement ce qui s’est passé ou dit (style narratif neutre) : dans le compte rendu d’activité, on ne formule PAS de propositions de solutions.',
        workedExample: {
          title: 'Distinguer style intégral et style analytique d’un même échange de réunion',
          statement:
            'Débat en réunion : M. Koné déclare « Je propose de migrer notre messagerie vers le cloud dès le 1er juin afin de réduire les pannes. » Mme Touré répond « Je suis d’accord, à condition de former le personnel la semaine précédente. »',
          methodSteps: [
            'Version Compte rendu intégral (style direct, mot à mot) : « M. Koné : “Je propose de migrer notre messagerie vers le cloud dès le 1er juin afin de réduire les pannes.” / Mme Touré : “Je suis d’accord, à condition de former le personnel la semaine précédente.” »',
            'Version Compte rendu analytique (style indirect, synthétique) : « M. Koné propose la migration de la messagerie vers le cloud au 1er juin pour limiter les pannes. Mme Touré approuve cette initiative sous réserve d’une formation préalable du personnel la semaine précédente. »',
          ],
          conclusion:
            'Le CR intégral fait parler directement les participants ; le CR analytique résume et structure l’essentiel des échanges en style indirect.',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition & Neutralité',
            stepTheme: 'Exigence d’objectivité',
            stepTitle: 'Maîtriser la fonction, le style narratif et la neutralité du compte rendu',
            paragraphText:
              'Dans toute administration ou entreprise, le compte rendu sert à informer un supérieur hiérarchique, une équipe ou des absents sur ce qui a été fait, observé ou décidé.\n• **Exigence de fidélité et de neutralité** : le rédacteur s’efface derrière les faits ; il rapporte objectivement sans déformer, sans prendre parti et sans exprimer d’émotions personnelles.\n• **Style narratif, clair et concis** : phrases nettes, vocabulaire précis, registre courant-soutenu, faits datés et vérifiables.\n• **Différence clé avec le rapport** : le compte rendu informe sur des faits ou des échanges (il constate) ; le rapport analyse un problème en profondeur pour aboutir à des recommandations et propositions de décisions.\n• **Exemple concret** : « Les échanges ont été vifs sur le délai de livraison » est objectif et neutre, contrairement à « M. X s’est montré agressif et déraisonnable ».',
            keyRule:
              'Le compte rendu obéit à quatre qualités : exactitude, objectivité, clarté et concision, dans un style narratif neutre.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle formulation respecte la neutralité et l’objectivité exigées dans un compte rendu professionnel ?',
              options: [
                'Le directeur commercial a tenu des propos brillants qui ont écrasé l’argumentation faible du service informatique.',
                'Deux points de vue se sont exprimés : la direction commerciale a demandé un déploiement immédiat, tandis que le service informatique a souligné la nécessité d’un test de sécurité préalable.',
                'La réunion a été beaucoup trop longue et ennuyeuse pour aboutir à une bonne idée.',
                'À mon avis, nous aurions dû valider la proposition du marketing sans perdre de temps.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seule la deuxième formulation restitue fidèlement et impartialement les positions exprimées sans jugement de valeur ni prise de position personnelle du rédacteur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'CR d’activité',
            stepTheme: 'Structure & Limites',
            stepTitle: 'Rédiger un compte rendu d’activité (ou de mission) sans formuler de propositions',
            paragraphText:
              'Le compte rendu d’activité (ou de mission) rend compte à sa hiérarchie du déroulement d’une mission de terrain, d’un stage ou d’une période de travail.\n• **Titre précis** : indique la nature du document, l’objet, les dates et le lieu (ex. : « Compte rendu de la mission effectuée du 3 au 7 mars 2026 à Bouaké »).\n• **Introduction brève** : rappelle l’objet de la mission, les circonstances et les motifs du compte rendu.\n• **Développement structuré** : relation chronologique, analytique ou synthétique des faits accomplis, en mentionnant précisément les personnes rencontrées ou entendues.\n• **Conclusion stricte** : résume les points présentés et peut donner une appréciation générale de la situation, mais **sans jamais formuler de propositions de solutions** (qui relèvent du rapport).',
            keyRule:
              'Piège classique : la conclusion d’un compte rendu d’activité résume la situation mais ne formule PAS de propositions de solutions.',
            konanTip:
              'Si votre supérieur vous demande des recommandations d’action en fin de document, il s’agit d’un rapport de mission, et non d’un simple compte rendu d’activité.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Que doit contenir la conclusion d’un compte rendu d’activité (ou de mission) selon la norme administrative ?',
              options: [
                'Un plan d’action détaillé assorti de propositions de réformes budgétaires.',
                'Un résumé des points présentés et éventuellement une appréciation générale de la situation, sans formulation de propositions de solutions.',
                'Des remerciements personnels et des anecdotes de voyage.',
                'Une nouvelle série de faits non mentionnés dans le développement.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par définition, le compte rendu d’activité informe fidèlement sur ce qui a été réalisé et observé ; sa conclusion synthétise sans formuler de propositions de solutions.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'CR d’événement',
            stepTheme: 'Relation factuelle',
            stepTitle: 'Construire un compte rendu d’événement factuel et chronologique',
            paragraphText:
              'Le compte rendu d’événement (ou d’accident / d’incident) sert à porter rapidement à la connaissance de la hiérarchie un fait inhabituel ou marquant (panne serveur, incident de sécurité, visite officielle, salon professionnel).\n• **Règle du QQOQCP** : répondre avec exactitude aux questions Qui ? Quoi ? Où ? Quand ? Comment ? et Pourquoi ? (uniquement si les causes sont avérées).\n• **Ordre chronologique strict** : relater les faits dans l’ordre exact de leur survenue, en indiquant les heures précises, les témoins présents et les mesures d’urgence prises sur le moment.\n• **Vérifiabilité** : distinguer clairement les faits constatés directement par le rédacteur des déclarations rapportées par des témoins (« selon M. X… »).\n• **Exemple concret** : « À 10 h 15, une coupure électrique a interrompu l’alimentation du local serveur ; le groupe électrogène a pris le relais à 10 h 17. »',
            keyRule:
              'Dans un compte rendu d’événement, seuls comptent les faits vérifiables, datés, localisés et classés dans l’ordre chronologique strict.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Dans un compte rendu d’incident technique en entreprise, quelle pratique est indispensable ?',
              options: [
                'Désigner immédiatement un coupable même sans preuve formelle.',
                'Relater les faits dans l’ordre chronologique précis (date, heure, lieu, témoins, actions immédiates) en distinguant faits constatés et témoignages.',
                'Écrire dans un style dramatique pour alerter la direction.',
                'Omettre les heures exactes pour alléger le texte.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un compte rendu d’événement doit fournir une trace fiable et exploitable : chronologie exacte, données vérifiables et distinction nette entre faits constatés et propos rapportés.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'CR de réunion',
            stepTheme: 'Intégral vs Analytique',
            stepTitle: 'Distinguer compte rendu de réunion intégral (sténographique) et analytique',
            paragraphText:
              'Une même réunion peut donner lieu à deux types de comptes rendus très différents selon les besoins de l’organisation.\n• **Compte rendu intégral (in extenso)** : reproduit les interventions en **style direct**, en suivant le mot à mot des débats et en faisant parler directement chaque participant (« Le président : “Le quorum étant atteint, je déclare la séance ouverte…” »). Utile pour les assemblées officielles, débats parlementaires ou conseils sensibles.\n• **Compte rendu analytique (ou synthétique)** : résume les débats en **style indirect** (au présent de narration le plus souvent), en ne retenant que l’essentiel des échanges, les points de l’ordre du jour et les décisions arrêtées (« Après avoir constaté le quorum, le président ouvre la séance… »). C’est le format le plus courant en entreprise.\n• **Critère de choix** : le CR intégral privilégie l’exhaustivité verbatim ; le CR analytique privilégie la rapidité de lecture et l’opérationnalité.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Typologie comparée des comptes rendus et du procès-verbal',
              caption: 'Choisir le bon écrit professionnel selon le style, la finalité et la valeur juridique.',
              matrix2x2: {
                topAxis: ['Style direct / Valeur officielle', 'Style indirect / Synthèse factuelle'],
                leftAxis: ['Réunions & Assemblées', 'Missions & Faits de terrain'],
                topLeft: {
                  title: 'CR de réunion intégral',
                  items: [
                    'Style direct mot à mot (« M. K : … »)',
                    'Fait parler directement les participants',
                    'Exhaustif (assemblées, débats sensibles)',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'CR de réunion analytique',
                  items: [
                    'Style indirect synthétique au présent',
                    'Structure par points de l’ordre du jour',
                    'Le plus utilisé en entreprise (décisions clés)',
                  ],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Procès-verbal (PV)',
                  items: [
                    'Acte officiel à valeur juridique probante',
                    'Obligatoire pour conseils, AG, constats',
                    'Signé par le président et le secrétaire',
                  ],
                  color: 'violet',
                },
                bottomRight: {
                  title: 'CR d’activité / d’événement',
                  items: [
                    'Narration neutre d’une mission ou d’un fait',
                    'Mentionne personnes rencontrées et chronologie',
                    'Sans propositions de solutions en conclusion',
                  ],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'CR intégral = style direct (mot à mot des intervenants) ; CR analytique = style indirect (synthèse des échanges et décisions par ordre du jour).',
            konanTip:
              'Dans un CR analytique, rédigez au présent de narration (« M. X expose… », « Le comité décide… ») : c’est le temps le plus vivant, sobre et professionnel.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle caractéristique distingue fondamentalement le compte rendu de réunion intégral du compte rendu analytique ?',
              options: [
                'Le compte rendu intégral est toujours plus court que le compte rendu analytique.',
                'Le compte rendu intégral relate les interventions en style direct mot à mot, tandis que le compte rendu analytique synthétise l’essentiel en style indirect.',
                'Le compte rendu analytique interdit de mentionner l’ordre du jour.',
                'Le compte rendu intégral ne cite jamais le nom des intervenants.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le CR intégral fait parler directement les intervenants (style direct, verbatim), alors que le CR analytique résume les points clés, arguments majeurs et décisions en style indirect.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'CR vs Procès-verbal',
            stepTheme: 'Valeur juridique',
            stepTitle: 'Différencier le compte rendu et le procès-verbal (PV)',
            paragraphText:
              'On confond souvent dans le langage courant compte rendu et procès-verbal : en droit et en gestion d’entreprise, la distinction est pourtant capitale.\n• **Le compte rendu (CR)** : document informatif souple, rédigé par un participant ou un secrétaire, sans formalisme juridique strict ; il sert de mémoire interne et n’a pas en soi force probante devant un juge.\n• **Le procès-verbal (PV)** : acte officiel qui fait foi jusqu’à preuve du contraire (valeur juridique probante). Il est obligatoire pour les assemblées générales, conseils d’administration, jurys d’examen ou constats d’huissier.\n• **Mentions impératives du PV** : date et heure exactes d’ouverture et de clôture, lieu, vérification du quorum, liste nominative des présents/excusés/absents, ordre du jour, résultats précis des votes (pour / contre / abstentions) et double signature (président de séance et secrétaire).',
            keyRule:
              'Le CR informe librement ; le PV authentifie officiellement avec valeur juridique (quorum, votes exacts, heures d’ouverture/clôture et signatures conjointes).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Pourquoi le procès-verbal d’une assemblée générale obéit-il à un formalisme plus strict qu’un simple compte rendu de réunion interne ?',
              options: [
                'Parce qu’il doit être rédigé en vers.',
                'Parce qu’il possède une valeur juridique officielle (acte qui fait foi) exigeant quorum, résultats exacts des votes et signatures.',
                'Parce qu’il ne mentionne jamais la date ni le lieu de la séance.',
                'Parce qu’il est toujours rédigé avant la réunion.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le procès-verbal est un acte authentifiant les délibérations et décisions officielles : sa valeur juridique impose des mentions strictes (quorum, décompte des voix, heures, signatures).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Mentions formelles',
            stepTheme: 'Présentation du CR',
            stepTitle: 'Appliquer les règles de présentation matérielle et les mentions obligatoires du CR',
            paragraphText:
              'Un compte rendu professionnel doit être immédiatement identifiable, archivable et attribuable à son auteur.\n• **En-tête et titre** : nom de l’organisation/service, titre explicite (« Compte rendu de la réunion du comité digital du 14 avril 2026 »), liste des présents, absents excusés et destinataires en copie.\n• **Corps structuré** : reprise claire des points de l’ordre du jour (ou des étapes de la mission) avec mise en relief des décisions prises, responsables désignés et échéances.\n• **Lieu et date de rédaction** : peuvent figurer soit en tête de première page à droite, soit sous le texte juste avant la signature.\n• **Signature du rédacteur** : placée en bas à droite comme dans une lettre, accompagnée du nom, prénom et de la fonction du rédacteur.',
            keyRule:
              'Ne diffusez jamais un compte rendu sans ses 4 repères formels : Titre daté, Liste des participants/personnes rencontrées, Lieu et date de rédaction, Signature avec fonction.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Où doivent figurer le lieu et la date de rédaction dans un compte rendu d’activité ?',
              options: [
                'Ils sont facultatifs et généralement supprimés.',
                'Soit en tête de la première page à droite, soit sous le texte juste avant la signature du rédacteur.',
                'Uniquement au verso de la dernière page.',
                'Au milieu du deuxième paragraphe du développement.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Selon la présentation professionnelle standard, le lieu et la date de rédaction se placent indifféremment en haut à droite de la première page ou en fin de texte avant la signature.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch4_p3',
        order: 3,
        title: 'Notes de service et courriels professionnels',
        summary:
          'Rédiger une note de service claire et impérative pour la communication interne, et maîtriser tous les codes du courriel professionnel (objet, politesse, corps structuré, pièces jointes).',
        conceptExplanation:
          'Au quotidien en entreprise et dans l’administration, deux écrits courts dominent la communication opérationnelle : la note de service (écrit interne descendant par lequel un responsable transmet une instruction, une règle ou une information officielle à ses collaborateurs) et le courriel professionnel (outil d’échange rapide interne et externe exigeant un objet précis, une formule d’appel adaptée, un message structuré et concis, une formule de politesse sobre et une signature complète).',
        keyRule:
          'Une note de service est courte, impersonnelle et sans formule de politesse ; un courriel professionnel comporte toujours un objet précis, une salutation, un message structuré et une formule de politesse adaptée.',
        workedExample: {
          title: 'Rédiger un courriel professionnel de demande de stage',
          statement:
            'Transformez ce brouillon familier : « Objet : salut — Bonjour, je suis étudiant en L1 et je veux un stage dans votre boîte en juillet. Merci de me répondre vite. Ci-joint mon CV. »',
          methodSteps: [
            'Formuler un objet précis et immédiatement identifiable : « Candidature à un stage d’observation (juillet 2026) — Étudiant L1 ENTD ».',
            'Adopter une formule d’appel respectueuse : « Madame, Monsieur, » (ou « Madame la Directrice des Ressources Humaines, »).',
            'Structurer en 3 courts paragraphes : présentation + objet de la demande / motivation et atouts / disponibilité et annonce de la pièce jointe.',
            'Conclure par une formule de politesse courtoise et une signature complète (Nom, téléphone, filière).',
          ],
          conclusion:
            'Un courriel clair, courtois et structuré multiplie par trois les chances d’obtenir une réponse positive.',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Note de service',
            stepTheme: 'Communication descendante',
            stepTitle: 'Comprendre la nature, le ton et les mentions obligatoires d’une note de service',
            paragraphText:
              'La note de service est un document interne officiel qui circule du haut vers le bas de la hiérarchie (direction → services ou ensemble du personnel).\n• **Finalité** : donner une consigne précise, annoncer une nouvelle procédure, rappeler une règle ou communiquer un calendrier (horaires, sécurité, maintenance informatique).\n• **Mentions obligatoires** : timbre de l’organisation/service émetteur, mention « NOTE DE SERVICE » + numéro d’enregistrement, lieu et date, destinataires (« À l’attention de… »), **Objet** concis, texte court, signature et qualité du signataire.\n• **Ton et forme** : style direct, objectif, ferme mais courtois ; **aucune formule d’appel** (« Chers collègues ») ni **aucune formule de politesse** finale (« Veuillez agréer… »).',
            keyRule:
              'La note de service ne comporte ni formule d’appel ni formule de politesse : elle va droit au but, avec timbre, numéro, destinataires, objet, consigne et signature.',
            konanTip:
              'Vérifiez toujours que votre note de service indique clairement la date d’entrée en vigueur de la mesure annoncée.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle particularité formelle distingue la note de service d’une lettre administrative classique ?',
              options: [
                'La note de service ne comporte ni date ni signature.',
                'La note de service ne comporte ni formule d’appel au début ni formule de politesse à la fin.',
                'La note de service est toujours adressée à des clients extérieurs à l’entreprise.',
                'La note de service doit obligatoirement dépasser trois pages.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Écrit interne descendant et fonctionnel, la note de service supprime la formule d’appel et la formule de politesse pour privilégier l’efficacité et la concision.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Rédiger la note',
            stepTheme: 'Structure en 3 points',
            stepTitle: 'Structurer efficacement le corps d’une note de service (1 sujet = 1 note)',
            paragraphText:
              'Pour être lue et appliquée sans ambiguïté par tous les collaborateurs, une note de service respecte une règle d’or : un seul sujet par note, sur une seule page.\n• **1. Exposition du fait ou du contexte** : rappeler en une ou deux phrases la raison de la mesure (« Dans le cadre de la sécurisation de notre réseau interne… »).\n• **2. Énoncé clair des instructions** : présenter les consignes concrètes (qui fait quoi, à partir de quelle date, selon quelle modalité), éventuellement sous forme de points numérotés.\n• **3. Date d’entrée en vigueur et rappel d’exécution** : préciser quand la mesure s’applique et clore sobrement (« La présente note prend effet à compter du lundi 4 mai 2026. J’attache du prix au strict respect de ces dispositions. »).',
            konanTip:
              'Privilégiez des verbes d’action précis et évitez le conditionnel mou dans une instruction : écrivez « Chaque agent doit changer son mot de passe » plutôt que « Il serait souhaitable que… ».',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Pour annoncer simultanément de nouveaux horaires de badgeage et une panne d’imprimante au 2e étage, quelle est la meilleure pratique ?',
              options: [
                'Rédiger deux notes de service distinctes (règle d’un seul sujet par note).',
                'Mélanger les deux sujets dans un long paragraphe sans objet.',
                'Envoyer un message vocal sur un groupe privé.',
                'Ajouter les deux sujets en post-scriptum d’un procès-verbal.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La règle d’efficacité et d’archivage impose un seul sujet par note de service : cela garantit un objet exact, une diffusion ciblée et une lecture immédiate.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Courriel pro (1)',
            stepTheme: 'Objet & Destinataires',
            stepTitle: 'Maîtriser l’objet, les champs À / Cc / Cci et la formule d’appel d’un courriel',
            paragraphText:
              'Dans une boîte de réception professionnelle recevant 80 messages par jour, l’en-tête décide si votre courriel sera ouvert, traité rapidement ou ignoré.\n• **Champ « Objet » obligatoire et précis** : résume en 5 à 8 mots le thème et l’action attendue (ex. : « Validation du devis n° 204 — Projet Site Web » ; bannir « Urgent », « Bonjour » ou un objet vide).\n• **Champs À / Cc / Cci** : « À » = destinataire principal qui doit agir ; « Cc » (copie carbone) = personnes informées pour suivi ; « Cci » (copie cachée) = envoi groupé externe protégeant la confidentialité des adresses.\n• **Formule d’appel adaptée** : « Madame la Directrice, », « Monsieur Kouassi, », « Bonjour Madame, » (jamais « Salut » ni « Bjr » à un supérieur ou partenaire).',
            keyRule:
              '« À » = qui doit agir ; « Cc » = qui doit être informé ; « Cci » = protège la confidentialité des adresses lors d’un envoi multiple externe.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Vous devez envoyer une invitation commerciale à 50 clients différents qui ne se connaissent pas. Dans quel champ devez-vous placer leurs adresses e-mail ?',
              options: [
                'Dans le champ « À » pour que chacun voie tous les autres clients.',
                'Dans le champ « Cc » pour montrer le nombre de destinataires.',
                'Dans le champ « Cci » (copie cachée) afin de préserver la confidentialité des adresses.',
                'Dans le champ « Objet » séparées par des virgules.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le champ « Cci » masque les adresses des destinataires entre eux, ce qui protège leurs données personnelles et respecte la confidentialité commerciale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Courriel pro (2)',
            stepTheme: 'Corps & Politesse',
            stepTitle: 'Structurer le corps du courriel, la formule de politesse et la signature',
            paragraphText:
              'Un courriel professionnel se lit sur écran (ordinateur ou smartphone) : il doit être scannable en quelques secondes.\n• **Corps en 3 temps courts** : (1) motif du message dès la première ligne (« Suite à notre entretien de ce matin, je vous transmets… ») ; (2) informations essentielles aérées par des paragraphes courts ou 2–3 puces ; (3) action attendue et délai précis (« Pourriez-vous nous confirmer votre accord avant jeudi 16 h ? »).\n• **Formules de politesse sobres** : « Cordialement, » ou « Bien cordialement, » (collègues/partenaires réguliers) ; « Sincères salutations, » ou « Je vous prie d’agréer, Madame, mes salutations distinguées. » (supérieur hiérarchique, autorité, premier contact formel).\n• **Signature professionnelle** : Prénom NOM, fonction/statut, organisation, numéro de téléphone professionnel.',
            keyRule:
              'Un bon courriel tient en 10 à 15 lignes aérées : motif immédiat, faits clés, action attendue avec délai, formule de politesse cohérente et signature complète.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle formule de politesse convient le mieux à la fin d’un premier courriel formel adressé à un directeur d’entreprise pour une demande de partenariat ?',
              options: [
                'À plus !',
                'Bises et merci d’avance,',
                'Je vous prie d’agréer, Monsieur le Directeur, l’expression de mes salutations distinguées.',
                'Répondez vite svp.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour un premier contact hiérarchique ou institutionnel, une formule formelle complète (« Je vous prie d’agréer… » ou « Veuillez agréer… ») reprend exactement le titre de la formule d’appel.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Nétiquette & Pièces jointes',
            stepTheme: 'Erreurs fatales',
            stepTitle: 'Éviter les erreurs classiques du courriel (pièces jointes, « Répondre à tous », majuscules)',
            paragraphText:
              'Quelques maladresses techniques suffisent à nuire gravement à votre image professionnelle par e-mail.\n• **Pièces jointes** : annoncez toujours la pièce jointe dans le texte (« Vous trouverez ci-joint… »), nommez le fichier proprement (`CV_Kouame_Aya_2026.pdf`, jamais `document1_final_v2.docx`) et joignez-la AVANT d’écrire l’adresse du destinataire pour ne jamais l’oublier.\n• **« Répondre à tous »** : n’utilisez ce bouton que si votre réponse intéresse véritablement toutes les personnes en copie ; sinon, cliquez sur « Répondre ».\n• **TOUT EN MAJUSCULES et émoticônes** : écrire en majuscules équivaut à crier à l’écrit ; évitez les émojis et le langage SMS dans tout échange formel.\n• **Relecture à froid** : ne répondez jamais sous le coup de la colère à un mail tendu ; laissez reposer 15 minutes avant d’envoyer.',
            konanTip:
              'Réflexe anti-oubli : saisissez l’adresse du destinataire en DERNIER, après avoir joint les fichiers et relu votre message ! Vous ne pourrez jamais envoyer un brouillon incomplet par accident.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Quel nom de fichier est le plus professionnel pour joindre votre compte rendu de réunion par courriel ?',
              options: [
                'CR_final_ok_v3_final.docx',
                'Sans_titre1.pdf',
                'CR_Reunion_ProjetDigital_2026-04-14.pdf',
                'truc_a_envoyer.doc',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un nom de fichier explicite, daté, sans espaces ni accents superflus (`CR_Reunion_ProjetDigital_2026-04-14.pdf`) facilite immédiatement le classement par le destinataire.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Orthographe pro',
            stepTheme: 'Tournures exactes',
            stepTitle: 'Maîtriser les tournures professionnelles exactes (« ci-joint », « savoir gré », « à l’attention de »)',
            paragraphText:
              'Certaines locutions très fréquentes dans les courriels et notes de service comportent des pièges orthographiques classiques.\n• **« À l’attention de » vs « À l’intention de »** : on écrit « À l’attention de M. X » sur un courrier ou une note (= pour qu’il en prenne connaissance) ; « à l’intention de » signifie « en l’honneur de / pour faire plaisir à ».\n• **« Ci-joint »** : invariable en début de phrase ou devant un nom sans article (« Ci-joint copie du contrat » ; « Vous trouverez ci-joint le rapport ») ; accord possible lorsqu’il est placé après le nom (« La facture ci-jointe »).\n• **« Savoir gré »** : on écrit « Je vous saurais gré de bien vouloir… » (du verbe « savoir » au conditionnel, jamais « serais gré » !).\n• **« Par acquit de conscience »** : s’écrit « acquit » (avec un t, du verbe acquitter) et non « acquis ».',
            keyRule:
              'Écrivez toujours : « À l’attention de » (destinataire), « Je vous saurais gré » (verbe savoir, pas être), et « Vous trouverez ci-joint » (invariable devant le nom).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle phrase professionnelle est entièrement correcte sur le plan orthographique et lexical ?',
              options: [
                'À l’intention du Directeur, je vous serais gré de trouver ci-jointe le rapport.',
                'À l’attention du Directeur, je vous saurais gré de bien vouloir trouver ci-joint le rapport.',
                'À l’attention du Directeur, je vous serais gré de trouver ci-joint le rapport.',
                'À l’intention du Directeur, je vous saurais gré de trouver ci-jointe la note.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« À l’attention de » désigne le destinataire ; « je vous saurais gré » vient du verbe « savoir » ; et « ci-joint » placé devant le nom (« ci-joint le rapport ») reste invariable.',
            },
          },
        ],
      },
      {
        id: 'lmd_entd_l1_tef_ch4_p4',
        order: 4,
        title: 'Méthodologie et présentation de l’exposé oral',
        summary:
          'Préparer efficacement un exposé oral (règle du 10×, fiche-repères sans lecture intégrale), le structurer en 3 parties et maîtriser la communication non verbale (posture, gestuelle, mimique, voix et regard).',
        conceptExplanation:
          'L’exposé oral consiste à transmettre à un public, de façon complète, synthétique et vivante, un ensemble d’informations structurées. Réussir un exposé repose sur trois piliers : une préparation rigoureuse (règle du temps de préparation égal à dix fois la durée de présentation, fiches structurées sans lecture mot à mot), une architecture canonique (introduction captivante, développement équilibré, conclusion ferme) et une maîtrise de la communication verbale et non verbale (voix variée, regard partagé, posture ancrée, gestuelle centrale-neutre et mimique cohérente).',
        keyRule:
          'Ne lisez jamais un texte entièrement rédigé devant un public : préparez un plan détaillé hiérarchisé par couleurs, rédigez seulement l’introduction et la conclusion, et animez votre propos par la voix, le regard et la posture.',
        formulas: [
          {
            name: 'Règle de préparation d’un exposé oral',
            formula: 'T_{\\text{préparation}} \\approx 10 \\times T_{\\text{présentation}}',
            note: 'Plus un exposé est court (ex. 5 à 10 min), plus la préparation et le tri des idées doivent être rigoureux.',
          },
        ],
        workedExample: {
          title: 'Préparer un exposé oral de 10 minutes sur les réseaux sociaux',
          statement:
            'Vous disposez de 10 minutes pour exposer l’impact des réseaux sociaux sur les interactions contemporaines devant un jury.',
          methodSteps: [
            'Temps de préparation : prévoir environ 1 h 40 (10 × 10 min) pour sélectionner les idées essentielles, bâtir les fiches et répéter chronomètre en main.',
            'Fiches-repères : rédiger entièrement l’introduction (1 min 30) et la conclusion (1 min 30) pour démarrer avec assurance et finir avec fermeté ; utiliser des mots-clés surlignés en couleurs pour les 2 ou 3 axes du développement (7 min).',
            'Prestation : se tenir bien ancré sur ses deux jambes, mains ouvertes en position centrale-neutre, sourire aimable avant de commencer, balayer tout l’auditoire du regard et varier le débit.',
          ],
          conclusion:
            'Une prestation rythmée, naturelle et maîtrisée qui capte l’auditoire du début à la fin.',
        },
        exercises: [],
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Préparation 10×',
            stepTheme: 'Gestion du temps',
            stepTitle: 'Préparer l’exposé : règle du 10× et piège du texte intégralement lu',
            paragraphText:
              'Un bon exposé est celui qui suscite l’intérêt et la réaction de l’auditoire, ce qui ne s’improvise jamais.\n• **Principe du temps 10×** : le temps consacré à la préparation équivaut en moyenne à dix fois la durée de la présentation ; paradoxalement, plus l’exposé est court, plus le tri des idées exige de préparation.\n• **Piège du débutant** : rédiger tout l’exposé mot à mot pour le lire devant le public rassure l’orateur mais endort immédiatement la salle et coupe le contact visuel.\n• **Méthode efficace des fiches** : rédiger un plan très clair et détaillé en formulations brèves, utiliser des couleurs différentes pour distinguer idées principales et secondaires, et n’écrire intégralement que l’introduction (pour démarrer sans bafouiller) et la conclusion (pour finir avec fermeté).',
            formula: {
              name: 'Ratio temps de préparation / présentation',
              formula: 'T_{\\text{préparation}} = 10 \\times T_{\\text{présentation}}',
            },
            keyRule:
              'Ne rédigez intégralement que l’introduction et la conclusion ; utilisez des fiches-repères structurées et colorées pour le développement.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p4_q1',
              type: 'mcq',
              prompt:
                'Pourquoi est-il conseillé de n’écrire entièrement que l’introduction et la conclusion d’un exposé oral, tout en gardant un plan détaillé pour le développement ?',
              options: [
                'Parce que le développement n’a pas besoin d’être préparé.',
                'Pour éviter d’endormir l’auditoire en lisant tout son texte, tout en sécurisant le démarrage (sans bafouiller) et la sortie (avec fermeté).',
                'Parce que les fiches sont interdites pendant le développement.',
                'Pour réduire le temps de préparation à zéro.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lire un texte intégral coupe le regard et rend le débit monocorde ; sécuriser l’introduction et la conclusion par écrit tout en parlant à partir d’un plan hiérarchisé assure naturel et maîtrise.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Structure orale',
            stepTheme: 'Introduction, Corps, Fin',
            stepTitle: 'Construire une architecture orale lisible : Introduction, Développement, Conclusion',
            paragraphText:
              'À l’oral, l’auditeur ne peut pas revenir en arrière comme sur une page imprimée : votre structure doit donc être encore plus explicite qu’à l’écrit.\n• **Introduction** : capter l’attention dès les premiers mots, partir d’un cadre plus vaste pour focaliser sur le thème, et **annoncer impérativement le plan** (oublier d’annoncer le plan désoriente gravement l’auditoire).\n• **Développement** : pas de dogme sur le nombre de parties (2 ou 3 axes équilibrés : dialectique, thématique, analytique ou historique), mais annoncez clairement chaque division à haute voix (« Premièrement… », « Passons maintenant à… ») et traitez le sujet de façon exhaustive sans vous enfermer sur un seul point.\n• **Conclusion** : rassembler les idées clés qui resteront en mémoire, répondre nettement à la question initiale, puis ouvrir le débat vers une perspective parallèle.',
            keyRule:
              'À l’oral, balisez constamment votre progression à voix haute : annonce du plan, transitions explicites, bilan final et ouverture.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p4_q2',
              type: 'mcq',
              prompt:
                'Quelle omission est considérée comme particulièrement grave dans l’introduction d’un exposé oral ?',
              options: [
                'Ne pas citer de date historique.',
                'Ne pas annoncer le plan qui va guider la présentation.',
                'Ne pas distribuer un dossier imprimé de 20 pages.',
                'Ne pas commencer par une blague.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans annonce du plan, l’auditoire ne sait pas où l’orateur le mène et décroche rapidement ; présenter les grandes articulations est indispensable dès l’introduction.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'La posture',
            stepTheme: 'Expression corporelle (1)',
            stepTitle: 'Adopter une posture ouverte et assurée (debout ou assis)',
            paragraphText:
              'Selon l’axiome de la communication, « on ne peut pas ne pas communiquer » : avant même votre premier mot, votre posture envoie un message puissant à l’auditoire.\n• **En position debout** : répartissez équitablement votre poids sur vos deux jambes, tenez-vous solidement ancré au sol, légèrement orienté vers le public. Évitez de croiser les bras dans le dos (empêche les gestes), de croiser les bras sur la poitrine (air distant ou fermé), de rejeter la tête en arrière menton haut (air arrogant) ou d’abuser des mains dans les poches.\n• **En position assise** : gardez la colonne vertébrale droite et les bras ouverts posés sur la table ; évitez de nouer les bras et les jambes, signe de défense interne ou d’anxiété.',
            keyRule:
              'Debout : appui stable sur les deux jambes, buste ouvert vers l’auditoire. Assis : dos droit, bras ouverts sur la table, jamais croisés ni noués.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p4_q3',
              type: 'mcq',
              prompt:
                'En position debout face à un jury, quelle attitude corporelle risque de donner une impression d’arrogance ou de fermeture ?',
              options: [
                'Répartir son poids équitablement sur ses deux jambes face au public.',
                'Croiser les bras sur la poitrine ou rejeter la tête en arrière avec le menton relevé.',
                'Se pencher légèrement vers l’auditoire pour marquer son engagement.',
                'Garder les mains disponibles au-dessus de la ceinture.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Croiser les bras sur la poitrine renvoie une image de distance/fermeture, et rejeter la tête en arrière avec le menton haut donne un air arrogant.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Gestuelle & Mimique',
            stepTheme: 'Expression corporelle (2)',
            stepTitle: 'Maîtriser la gestuelle centrale-neutre et la cohérence de la mimique',
            paragraphText:
              'Les mains et le visage sont des amplificateurs naturels de la parole lorsqu’ils restent maîtrisés et sincères.\n• **Position centrale-neutre des mains** : placez vos mains au-dessus de la ceinture, ouvertes et légèrement tournées vers l’auditoire — point de départ idéal pour des gestes amples, fluides et sympathiques.\n• **Gestes à bannir** : agiter les mains qui tiennent vos feuilles (rend le public nerveux), pointer l’index vers l’auditoire (donne l’impression de faire la leçon), poser les deux mains sur les hanches (air présomptueux) ou souligner ses mots avec les épaules et les jambes (effet comique).\n• **La mimique (expression du visage)** : affichez un air aimable et un léger sourire juste avant de commencer, puis veillez à ce que l’expression de votre visage corresponde toujours au contenu du discours (un sourire en évoquant un drame paraîtrait cynique).',
            keyRule:
              'Mains ouvertes en position centrale-neutre (au-dessus de la ceinture), jamais d’index pointé ni de feuille agitée, et mimique toujours en accord avec le propos.',
            konanTip:
              'Si vous utilisez des fiches papier, posez-les sur un support ou tenez-les sur du carton rigide d’une main : cela empêche les tremblements visibles et libère votre autre main.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p4_q4',
              type: 'mcq',
              prompt:
                'Quelle est la position de départ recommandée pour une bonne technique gestuelle lors d’un exposé oral ?',
              options: [
                'Les deux mains appuyées fermement sur les hanches.',
                'La position centrale-neutre, mains ouvertes au-dessus de la ceinture.',
                'L’index levé et tendu en permanence vers le public.',
                'Les bras croisés dans le dos pendant toute la durée du discours.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La position centrale-neutre (mains ouvertes au-dessus de la ceinture) facilite des gestes naturels et expressifs tout en projetant ouverture et bienveillance.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Voix & Regard',
            stepTheme: 'Dynamique oratoire',
            stepTitle: 'Varier la voix, le débit et partager le contact visuel avec toute la salle',
            paragraphText:
              'Même un contenu brillant perd son impact s’il est récité d’une voix monocorde les yeux rivés sur ses notes.\n• **Voix et articulation** : parlez de façon audible jusqu’au dernier rang, articulez distinctement et respectez la ponctuation orale par de vraies respirations.\n• **Variété oratoire** : évitez le ton monocorde en variant les intonations, en introduisant des questions rhétoriques, en ralentissant le débit ou en marquant un bref silence avant une idée forte.\n• **Contact visuel partagé** : balayez régulièrement l’ensemble de l’auditoire (gauche, centre, droite, premiers et derniers rangs) pour impliquer chaque auditeur, sans fixer uniquement le président du jury ou le plafond.\n• **Accessibilité** : employez un niveau de langue clair et intelligible pour des destinataires qui ne sont pas forcément spécialistes du thème.',
            konanTip:
              'La pause silencieuse de 2 secondes après une statistique marquante ou une question forte est l’arme la plus efficace pour capter instantanément toute une salle.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p4_q5',
              type: 'mcq',
              prompt:
                'Comment éviter un débit monocorde qui endort l’auditoire pendant un exposé oral ?',
              options: [
                'Parler le plus vite possible sans aucune pause pour finir en avance.',
                'Varier les intonations, utiliser des interrogations oratoires, ralentir sur les idées clés et marquer de brèves pauses.',
                'Chuchoter pour obliger le public à tendre l’oreille.',
                'Lire ses diapositives mot à mot en tournant le dos à la salle.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La variation du ton, du rythme (débit), l’usage d’interrogations et de pauses stratégiques maintiennent l’attention active et soulignent la hiérarchie des idées.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Questions & Jury',
            stepTheme: 'Interaction finale',
            stepTitle: 'Gérer les supports visuels, le trac et la séance de questions-réponses',
            paragraphText:
              'Un exposé réussi se prolonge dans la qualité des supports projetés et dans l’aisance face aux questions du public ou du jury.\n• **Supports visuels (diapositives)** : des diapositives épurées (mots-clés, schémas, chiffres lisibles) qui illustrent votre parole sans jamais la remplacer ; ne tournez pas le dos au public pour lire l’écran.\n• **Apprivoiser le trac** : le trac diminue nettement dès les 30 premières secondes grâce à une respiration abdominale lente, un premier contact visuel bienveillant et une introduction parfaitement maîtrisée.\n• **Répondre aux questions** : écoutez jusqu’au bout sans interrompre, reformulez si besoin, répondez avec concision et honnêteté (si vous ignorez un point précis, reconnaissez-le sobrement plutôt que d’improviser une erreur).\n• **Clôture** : remerciez l’auditoire avec calme et restez disponible pour les échanges.',
            keyRule:
              'Écoutez toujours la question jusqu’au bout, répondez de façon structurée et honnête, et ne lisez jamais vos diapositives dos au public.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch4_p4_q6',
              type: 'mcq',
              prompt:
                'Lors de la séance de questions-réponses, un membre du jury vous pose une question technique très pointue dont vous ne connaissez pas la réponse exacte. Quelle est la meilleure attitude ?',
              options: [
                'Inventer rapidement un chiffre au hasard pour ne pas perdre la face.',
                'Couper la parole au jury pour changer de sujet.',
                'Reconnaître honnêtement et calmement ne pas disposer de cette donnée précise, tout en reliant la question à un élément pertinent que vous maîtrisez.',
                'Rester totalement silencieux en regardant vos chaussures.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’honnêteté intellectuelle alliée au sang-froid est toujours valorisée par un jury, contrairement à l’improvisation hasardeuse qui détruit la crédibilité de tout l’exposé.',
            },
          },
        ],
      },
    ],
  },
];
