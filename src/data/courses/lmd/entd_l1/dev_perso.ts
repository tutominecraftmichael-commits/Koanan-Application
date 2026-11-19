import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

export const DEV_PERSO_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'lmd_entd_l1_dev_perso_ch1',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Introduction au Développement Personnel : fondements, histoire et enjeux (S1)',
    summary:
      'Définir le développement personnel et ses quatre piliers, retracer ses origines philosophiques et scientifiques (de Socrate aux neurosciences), et mesurer son impact sur la réussite universitaire et professionnelle.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source:
      'ENTD L1 — S1 (Introduction au Développement Personnel) & S2 Module 1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch1_p1',
        order: 1,
        title: 'Notion, piliers et finalités du développement personnel',
        summary:
          'Comprendre les quatre piliers du développement personnel, l’opposition développement/enveloppement et le passage de la contraction à l’expansion.',
        conceptExplanation:
          "Le développement personnel (ou croissance/épanouissement personnel) désigne un ensemble organisé de pratiques, de méthodes et de réflexions visant à améliorer la connaissance de soi, valoriser ses talents et capacités intellectuelles, maîtriser ses émotions et concrétiser ses aspirations.\n\n1. Étymologie et dynamique : « Développement » s'oppose à « enveloppement ». C'est un cheminement qui consiste à « sortir de sa coquille », à passer d'un état de fermeture et de contraction statique (état actuel A jugé insatisfaisant) vers une progression et une expansion (état désiré B).\n2. Les 4 piliers fondamentaux :\n- La connaissance de soi (première pierre angulaire : forces, limites, valeurs profondes, motivations).\n- Une démarche d'amélioration continue (attitude proactive où réussites comme échecs deviennent des occasions d'apprendre).\n- La gestion des émotions et du stress (intelligence émotionnelle pour interagir sereinement et décider avec recul).\n- L'atteinte d'objectifs personnels et professionnels (buts clairs, réalistes et alignés avec son identité).\n3. Rôle et but : nous révéler à nous-mêmes, corriger nos faiblesses en s'appuyant sur nos forces, abandonner les croyances destructrices au profit de croyances constructrices, et apprendre la responsabilité personnelle (ne blâmer personne pour ce qui nous arrive). C'est une approche pluridisciplinaire nourrie par la psychologie, la philosophie, la sociologie et les neurosciences.",
        keyRule:
          'Développement s’oppose à enveloppement : c’est un processus continu qui fait passer de la contraction statique (État A) à l’expansion et la responsabilité personnelle (État B).',
        workedExample: {
          title: 'Démarrer son journal de développement personnel en L1',
          statement:
            'Un étudiant d’ENTD L1 souhaite effectuer sa première auto-évaluation pour passer de l’état actuel (stress avant les examens, dispersion) à l’état désiré.',
          methodSteps: [
            'Connaissance de soi : lister honnêtement 3 forces (ex. curiosité digitale, entraide) et 3 limites (ex. procrastination, trac à l’oral).',
            'Remplacer une croyance destructrice (« Je suis nul à l’oral ») par une croyance constructrice (« Je peux progresser en m’entraînant »).',
            'Définir un objectif clair et mesurable à court terme.',
          ],
          conclusion:
            'L’auto-évaluation par le journal transforme un ressenti vague en plan d’amélioration continue concret.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étymologie',
            stepTheme: 'Dynamique',
            stepTitle: 'Opposer « développement » et « enveloppement »',
            paragraphText:
              'Le cours rappelle que « développement » s’oppose à « enveloppement » : c’est un mouvement actif pour « sortir de sa coquille », quitter un état de contraction statique (situation non désirée A) et aller vers l’expansion (situation désirée B).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'À quel terme le cours oppose-t-il « développement » pour illustrer le fait de « sortir de sa coquille » ?',
              options: [
                'L’accélération',
                'L’enveloppement (état de fermeture et de contraction statique)',
                'L’expansion',
                'L’extraversion',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Développer (dé-velopper) s’oppose à envelopper : c’est passer d’une fermeture statique à une évolution et une expansion personnelle.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Pierre angulaire',
            stepTheme: 'Les 4 piliers',
            stepTitle: 'Identifier la connaissance de soi comme socle initial',
            paragraphText:
              'La connaissance de soi est la première pierre angulaire du développement personnel : elle permet d’identifier ses forces, ses limites, ses valeurs profondes et ses sources de motivation afin d’orienter ses choix avec cohérence.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle dimension constitue la « première pierre angulaire » du développement personnel ?',
              options: [
                'La mémorisation de raccourcis clavier',
                'La compétition agressive contre ses camarades',
                'La connaissance de soi (forces, limites, valeurs et motivations)',
                'L’imitation aveugle d’une célébrité',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sans connaissance lucide de soi (forces, faiblesses, valeurs), impossible de fixer des objectifs cohérents ni de progresser durablement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'But du DP',
            stepTheme: 'Responsabilité',
            stepTitle: 'Remplacer les croyances destructrices et assumer sa responsabilité',
            paragraphText:
              'Le but du développement personnel est double : aider l’individu à délaisser ses croyances destructrices au profit de croyances constructrices, et lui apprendre à être responsable sans blâmer les autres pour ce qui lui arrive.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quel comportement fondamental le développement personnel apprend-il à l’individu face aux difficultés de la vie ?',
              options: [
                'Assumer sa responsabilité personnelle, abandonner les croyances destructrices et cesser de blâmer les autres',
                'Rejeter systématiquement la faute de ses échecs sur son environnement',
                'Attendre passivement que les circonstances changent toutes seules',
                'Éviter tout apprentissage après un échec',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La responsabilisation personnelle est le levier qui redonne à l’individu le pouvoir d’agir sur sa propre trajectoire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Amélioration continue',
            stepTheme: 'Mindset',
            stepTitle: 'Transformer chaque réussite et chaque échec en apprentissage',
            paragraphText:
              'Le développement personnel est une démarche continue et proactive où chaque expérience — réussite comme échec — sert d’occasion pour se corriger, s’ajuster et grandir.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans une démarche d’amélioration continue, comment doit être envisagé un échec académique ou professionnel ?',
              options: [
                'Comme la preuve définitive qu’il faut abandonner ses études',
                'Comme un événement à cacher et à oublier sans analyse',
                'Comme une injustice dont seuls les enseignants sont responsables',
                'Comme une opportunité d’apprendre, de se corriger et de renforcer ses compétences',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’état d’esprit tourné vers le progrès permanent transforme les défis et les erreurs en données utiles pour s’améliorer.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Pluridisciplinarité',
            stepTheme: 'Sciences de référence',
            stepTitle: 'Identifier les disciplines scientifiques qui nourrissent le DP',
            paragraphText:
              'Le développement personnel moderne ne relève pas de la magie : il s’appuie sur des disciplines variées — psychologie, philosophie, sociologie et neurosciences — pour offrir une compréhension globale de l’être humain.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Sur quel ensemble de disciplines scientifiques et humaines le développement personnel s’appuie-t-il principalement ?',
              options: [
                'La géologie, la métallurgie et l’astronomie',
                'La psychologie, la philosophie, la sociologie et les neurosciences',
                'Uniquement l’astrologie et la divination',
                'Exclusivement la comptabilité analytique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Cette pluridisciplinarité (psychologie, philosophie, sociologie, neurosciences) fonde la rigueur des outils contemporains de connaissance et de maîtrise de soi.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch1_p2',
        order: 2,
        title: 'Origines philosophiques et évolution contemporaine du développement personnel',
        summary:
          'Retracer l’histoire du développement personnel : Antiquité (Socrate, Aristote, Stoïciens), psychologie (James, Freud, Jung), psychologie humaniste (Maslow, Rogers, Peale), intelligence émotionnelle (Goleman) et neurosciences.',
        conceptExplanation:
          "Le développement personnel est l'héritier d'une longue histoire intellectuelle qui relie la sagesse antique aux neurosciences modernes :\n\n1. Racines philosophiques et spirituelles antiques :\n- Socrate : célèbre maxime « Connais-toi toi-même » (temple de Delphes), plaçant l'introspection au cœur de la sagesse.\n- Aristote : théorie de l'eudémonisme (le bonheur et l'épanouissement naissent de l'accomplissement des vertus et de son potentiel).\n- Les Stoïciens (Sénèque, Épictète, Marc Aurèle) : maîtrise des émotions, raison et résilience face aux épreuves.\n- Traditions spirituelles : méditation et pleine conscience (bouddhisme/hindouisme), quête de sens et orientation vers le bien (traditions chrétiennes et islamiques).\n2. XIXe et début XXe siècle (approche psychologique) :\n- William James (psychologie pragmatique) : rôle décisif des habitudes répétées dans la réussite.\n- Sigmund Freud : influence de l'inconscient et compréhension des blocages psychologiques.\n- Carl Jung : concept d'individuation (réaliser son potentiel unique et harmoniser ses facettes psychologiques).\n3. Années 1950–1970 (psychologie humaniste & pensée positive) :\n- Abraham Maslow (pyramide des besoins dès 1943) et Carl Rogers : concept d'auto-actualisation (réalisation pleine de soi, autonomie, créativité).\n- Norman Vincent Peale : pensée positive et attitude mentale proactive.\n4. Années 1980–2000 : popularisation de la PNL (programmation neurolinguistique), du coaching, et popularisation du concept d'intelligence émotionnelle par Daniel Goleman.\n5. Depuis les années 2000 : essor des neurosciences et de la psychologie cognitive (mémoire, motivation, régulation émotionnelle) et diffusion mondiale via Internet et les TED Talks (Technology, Entertainment, Design).",
        keyRule:
          'Repères clés : Socrate = Connais-toi toi-même | Aristote = Eudémonisme | Maslow (1943) = Pyramide des besoins & auto-actualisation | Daniel Goleman = Intelligence émotionnelle.',
        workedExample: {
          title: 'Relier cinq concepts phares à leurs auteurs de référence',
          statement:
            'Associer chaque auteur majeur à son apport majeur : Socrate, William James, Carl Jung, Abraham Maslow, Daniel Goleman.',
          methodSteps: [
            'Socrate -> « Connais-toi toi-même » (introspection).',
            'William James -> Rôle fondamental des habitudes (psychologie pragmatique).',
            'Carl Jung -> Individuation (harmoniser son potentiel unique).',
            'Abraham Maslow -> Pyramide des besoins (1943) et auto-actualisation (psychologie humaniste).',
            'Daniel Goleman -> Popularisation de l’intelligence émotionnelle.',
          ],
          conclusion:
            'Ces repères chronologiques montrent la maturation progressive du développement personnel de la philosophie vers la science.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Antiquité',
            stepTheme: 'Racines philosophiques',
            stepTitle: 'Reconnaître l’apport de Socrate, Aristote et des Stoïciens',
            paragraphText:
              'Dès l’Antiquité, Socrate valorise l’introspection (« Connais-toi toi-même »), Aristote relie le bonheur à la réalisation des vertus (eudémonisme), et les Stoïciens (Sénèque, Épictète, Marc Aurèle) enseignent la maîtrise des émotions et la résilience.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quel courant philosophique antique (représenté par Sénèque, Épictète et Marc Aurèle) inspire directement la gestion du stress et la résilience contemporaines ?',
              options: [
                'Le stoïcisme',
                'Le surréalisme',
                'Le mercantilisme',
                'Le futurisme',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les Stoïciens plaçaient la raison, la maîtrise de soi et la résilience face aux épreuves au centre d’une vie équilibrée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Psychologie XIXe–XXe',
            stepTheme: 'James, Freud, Jung',
            stepTitle: 'Associer habitudes, inconscient et individuation à leurs auteurs',
            paragraphText:
              'William James met en lumière le pouvoir des habitudes quotidiennes ; Sigmund Freud analyse l’influence de l’inconscient sur nos blocages ; Carl Jung développe le concept d’individuation (réalisation de son potentiel unique).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quel penseur est associé au concept d’« individuation » (harmonisation de ses différentes facettes psychologiques et réalisation de son potentiel unique) ?',
              options: [
                'Sigmund Freud',
                'Carl Jung',
                'Norman Vincent Peale',
                'Épictète',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Carl Jung a forgé le concept d’individuation, tandis que Freud a exploré l’inconscient et William James la force des habitudes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Psychologie humaniste',
            stepTheme: 'Maslow & Rogers',
            stepTitle: 'Comprendre la pyramide de Maslow (1943) et l’auto-actualisation',
            paragraphText:
              'Dans les années 1950–1970, Abraham Maslow (auteur dès 1943 de la célèbre pyramide hiérarchisant les besoins humains) et Carl Rogers portent la psychologie humaniste centrée sur l’auto-actualisation, l’autonomie et la responsabilité.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle notion centrale est mise en avant par la psychologie humaniste d’Abraham Maslow et de Carl Rogers ?',
              options: [
                'La soumission passive au destin',
                'Le conditionnement purement mécanique',
                'L’auto-actualisation (réalisation pleine de son potentiel et épanouissement personnel)',
                'La suppression totale des émotions',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La psychologie humaniste place la personne au centre de son évolution et définit l’auto-actualisation comme l’accomplissement de ses capacités.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Années 1980–2000',
            stepTheme: 'Intelligence émotionnelle',
            stepTitle: 'Mesurer l’apport de Daniel Goleman et de la PNL',
            paragraphText:
              'À partir des années 1980 se diffusent le coaching et la PNL (Programmation Neurolinguistique), et Daniel Goleman popularise l’intelligence émotionnelle, montrant que la réussite ne dépend pas uniquement du QI ou de la technique.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Qui a popularisé dans les années 1990 le concept d’« intelligence émotionnelle » démontrant le rôle clé de la gestion des émotions dans la réussite ?',
              options: [
                'Aristote',
                'William James',
                'Jean Lescure',
                'Daniel Goleman',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Daniel Goleman a montré que comprendre et réguler ses propres émotions ainsi que celles des autres est aussi déterminant que les compétences techniques.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Ère moderne',
            stepTheme: 'Neurosciences & TED',
            stepTitle: 'Connaître l’impact des neurosciences et des TED Talks',
            paragraphText:
              'Depuis les années 2000, les neurosciences et la psychologie cognitive affinent les méthodes de mémoire, de concentration et de motivation, tandis qu’Internet et les conférences TED Talks (Technology, Entertainment, Design) démocratisent ces savoirs.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Que signifie l’acronyme « TED » dans les conférences TED Talks liées à la diffusion contemporaine du développement personnel ?',
              options: [
                'Technologie, Entertainment, Design',
                'Travail, Économie, Droit',
                'Technique d’Expression Digitale',
                'Temps, Énergie, Discipline',
              ],
              correctAnswerIndex: 0,
              explanation:
                'TED signifie Technology, Entertainment, Design : des conférences courtes et percutantes qui diffusent largement les idées innovantes.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch1_p3',
        order: 3,
        title: 'Réussite universitaire, soft skills professionnels et démarche accompagnée',
        summary:
          'Mobiliser le développement personnel pour réussir ses études (temps, confiance, communication, stress), développer ses soft skills et s’appuyer sur un entourage porteur (binôme, coach, mentor).',
        conceptExplanation:
          "Le développement personnel est un levier stratégique concret tant à l'université que dans la carrière professionnelle (Chapitre II S1 & Module 1 S2).\n\n1. Dans la vie universitaire :\n- Gestion du temps et organisation : prioriser les tâches, combattre la procrastination à l'aide d'un agenda ou de to-do lists, équilibrer études/loisirs et instaurer une routine productive.\n- Renforcement de la confiance en soi : surmonter la peur de l'échec et du jugement (ex. participer aux débats, présenter un exposé) et adopter une attitude proactive.\n- Compétences en communication : exprimer clairement ses idées à l'écrit et à l'oral, écouter activement en travaux de groupe.\n- Gestion du stress : mobiliser respiration contrôlée, méditation, visualisation et planification progressive avant les examens.\n2. Dans le monde professionnel : développement des compétences transversales (« soft skills ») très prisées des employeurs : leadership, esprit critique, adaptabilité, gestion du temps et intelligence émotionnelle.\n3. Une démarche personnelle MAIS accompagnée : partager ses projets avec ses proches, trouver un binôme d'objectifs (accountability), recourir ponctuellement à un coach (en fixant objectifs et durée) ou s'entourer d'un mentor (personne expérimentée ayant déjà parcouru le chemin avec succès). Enfin, rejeter l'illusion des « hacks » (raccourcis magiques) et bâtir un plan de développement personnel : « Il n'y a point de vent favorable pour celui qui ne sait dans quel port il veut arriver » (Sénèque) et « Ne jugez pas chaque journée par votre récolte, mais par les graines que vous avez plantées. »",
        keyRule:
          'L’épanouissement n’a pas de « hack » magique : il repose sur des soft skills cultivés au quotidien, un plan clair (connaître son port) et un accompagnement choisi (binôme, coach, mentor).',
        workedExample: {
          title: 'Choisir le bon accompagnement selon son besoin',
          statement:
            'Un étudiant ENTD L1 veut (1) courir 3 fois par semaine sans abandonner, (2) s’orienter vers le métier de Product Manager digital.',
          methodSteps: [
            'Pour maintenir la régularité sportive : choisir un binôme (un ami ou camarade partageant le même défi) pour se motiver mutuellement.',
            'Pour découvrir les réalités du métier de Product Manager : solliciter un mentor (un professionnel confirmé qui a déjà réussi ce parcours et partage ses enseignements).',
            'Écrire ses objectifs dans un plan de développement personnel plutôt que de chercher un raccourci instantané.',
          ],
          conclusion:
            'S’entourer intelligemment multiplie la persévérance et accélère l’apprentissage.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Vie universitaire',
            stepTheme: 'Gestion du temps',
            stepTitle: 'Combattre la procrastination par la planification',
            paragraphText:
              'À l’université, prioriser ses tâches avec un agenda ou des to-do lists permet d’éviter la procrastination, de respecter les échéances, d’équilibrer études et loisirs et de réduire le stress à l’approche des partiels.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quel bénéfice direct procure l’utilisation d’un agenda, de to-do lists et d’une routine productive dans la vie universitaire ?',
              options: [
                'Remplacer la présence aux cours magistraux',
                'Prioriser les tâches, éviter la procrastination et réduire le stress lié aux examens',
                'Garantir de ne jamais avoir à travailler en groupe',
                'Supprimer la nécessité de réviser les matières difficiles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une planification visuelle clarifie les priorités, prévient l’accumulation de dernière minute et sécurise l’équilibre personnel.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Soft skills',
            stepTheme: 'Monde professionnel',
            stepTitle: 'Identifier les compétences transversales recherchées en entreprise',
            paragraphText:
              'Au-delà des compétences techniques (hard skills), les recruteurs valorisent fortement les « soft skills » développées par le développement personnel : leadership, esprit critique, adaptabilité, gestion du temps et intelligence émotionnelle.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Parmi ces listes, laquelle ne regroupe QUE des « soft skills » (compétences transversales) mentionnées ?',
              options: [
                'Formatage A4, câblage RJ45 et installation Windows',
                'Calcul matriciel, écriture comptable et syntaxe HTML',
                'Leadership, esprit critique, adaptabilité, gestion du temps et intelligence émotionnelle',
                'Achat de serveur, facturation TVA et archivage papier',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les soft skills sont des compétences comportementales, relationnelles et cognitives transversales, essentielles pour évoluer dans un environnement changeant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Mentor vs Binôme',
            stepTheme: 'Accompagnement',
            stepTitle: 'Distinguer le rôle d’un binôme, d’un coach et d’un mentor',
            paragraphText:
              'Bien que personnelle, la démarche gagne à être partagée : un binôme épaule au quotidien dans un objectif commun ; un coach accompagne sur une durée et une attente précises ; un mentor est une personne expérimentée ayant déjà emprunté et réussi le chemin visé.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Comment le cours définit-il précisément un « mentor » dans le parcours de développement personnel ?',
              options: [
                'Une personne qui a déjà emprunté le chemin que vous souhaitez prendre, qui y a réussi et vous guide grâce à son expérience',
                'Un logiciel automatisé qui rédige vos devoirs à votre place',
                'Un camarade débutant exactement au même niveau que vous dans un sport',
                'Un supérieur hiérarchique qui interdit toute prise d’initiative',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le mentor transmet les enseignements tirés de son propre parcours réussi (et vous pourrez un jour devenir mentor à votre tour).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Mythe du « hack »',
            stepTheme: 'Motivation durable',
            stepTitle: 'Privilégier la constance du chemin plutôt que les raccourcis magiques',
            paragraphText:
              'Le cours met en garde contre la culture du « hack » (raccourci instantané). La croissance personnelle est un travail de longue haleine : « Ne jugez pas chaque journée par votre récolte, mais par les graines que vous avez plantées. »',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle leçon essentielle véhicule la maxime : « Ne jugez pas chaque journée par votre récolte, mais par les graines que vous avez plantées » ?',
              options: [
                'Il faut changer d’objectif chaque matin si le résultat n’est pas immédiat',
                'Les raccourcis instantanés (« hacks ») remplacent toujours l’effort régulier',
                'Seul le résultat final compte, peu importe la méthode utilisée',
                'Le développement personnel est une démarche de longue haleine où la valeur réside dans les actions quotidiennes régulières semées sur le chemin',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La persévérance quotidienne construit des résultats durables, là où la recherche de résultats instantanés mène vite au découragement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Cap & Stress',
            stepTheme: 'Régulation',
            stepTitle: 'Mobiliser les techniques anti-stress et fixer son « port »',
            paragraphText:
              'Pour garder son sang-froid en période d’examens, on combine planification progressive et techniques de régulation (respiration contrôlée, méditation, visualisation), guidées par un plan de développement personnel clair (« pas de vent favorable sans port défini »).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quelles techniques concrètes de gestion du stress sont recommandées pour les étudiants ?',
              options: [
                'Veiller toute la nuit avant l’examen en buvant du café sans planning',
                'La respiration contrôlée, la méditation, la visualisation et la planification progressive des tâches',
                'Ignorer les dates d’examens jusqu’au dernier matin',
                'Éviter toute communication avec ses enseignants et camarades',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces quatre leviers agissent à la fois sur la physiologie (respiration), le mental (visualisation, méditation) et l’organisation (planification progressive).',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_dev_perso_ch2',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Être Maître de son Destin : attitude, savoir-être et vision (S2)',
    summary:
      'Dépasser le fatalisme, envisager la vie comme une partie exigeante dont on est l’acteur principal, cultiver son savoir-être et structurer sa réussite du rêve jusqu’aux objectifs.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Développement Personnel S2',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch2_p1',
        order: 1,
        title: 'Le destin, la vie comme grand jeu et le refus d’être simple spectateur',
        summary:
          'Comparer la vie à la traversée d’un navire et à un match de championnat pour comprendre la responsabilité individuelle et l’irréversibilité du temps.',
        conceptExplanation:
          "Le Module 2 (« Maître de notre destin ») invite l'étudiant à rompre avec le fatalisme passif pour devenir le capitaine conscient de son existence.\n\n1. La métaphore du navire : notre vie est comme la trajectoire d'un navire avec un point de départ et un point d'arrivée. Nul ne peut prévoir tous les obstacles à l'avance, mais il faut s'équiper solidement (la connaissance donne de l'assurance et rend confiant) et tirer le meilleur parti des difficultés.\n2. Dépasser le destin subi : traditionnellement défini comme une « puissance supérieure qui semble régler d'une manière fatale les événements », le destin fataliste limite la liberté individuelle. Prendre sa vie en main consiste à refuser la passivité.\n3. La vie est « le plus grand de tous les jeux » (et non un jeu trivial) : elle comporte des règles (sociales, morales, juridiques), des rôles à tenir (enfant, parent, étudiant, travailleur, citoyen), des choix et stratégies, ainsi que des gains et des pertes (réussites, échecs, statuts).\n4. Un véritable match de championnat : la vie n'est pas un simple entraînement ! Aucun entraîneur, parent, employeur ou conjoint ne peut jouer le match à notre place. Chaque journée de 24 heures qui s'écoule appartient définitivement au passé : seules les personnes qui refusent d'être de simples spectateurs trouvent « une place au soleil ».",
        keyRule:
          'La vie n’est pas un entraînement mais un match de championnat irréversible : personne ne peut le jouer à votre place ; refusez le rôle de spectateur.',
        workedExample: {
          title: 'Passer d’une posture de spectateur à une posture d’acteur en Licence 1',
          statement:
            'Un étudiant échoue à son premier devoir de semestre et dit : « C’est mon destin, je n’ai jamais de chance avec ce prof. » Comment recadrer cette attitude ?',
          methodSteps: [
            'Rejeter l’explication fataliste (« malchance / destin ») : on ne réussit pas par hasard et on n’échoue pas par simple malchance.',
            'Analyser les règles du jeu (barème, méthodologie attendue, volume horaire de révision) et sa stratégie.',
            'S’équiper activement (reprendre les corrections, travailler avec un groupe, revoir son planning) pour remporter les prochaines manches.',
          ],
          conclusion:
            'L’étudiant reprend le gouvernail de son navire au lieu de subir passivement la dérive.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Métaphore du navire',
            stepTheme: 'Préparation',
            stepTitle: 'Équiper son navire face aux obstacles imprévisibles',
            paragraphText:
              'La vie ressemble à la traversée d’un navire : personne ne peut prévoir toutes les tempêtes à l’avance, mais s’équiper solidement par la connaissance et la vigilance donne de l’assurance et permet de franchir les obstacles.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Selon l’introduction du Module 2, que nous procure la connaissance dans la « traversée » de notre vie ?',
              options: [
                'La garantie qu’aucun obstacle ne surviendra jamais',
                'De l’assurance, de la confiance et la capacité à affronter avec vigilance les difficultés',
                'Le droit d’arrêter définitivement tout effort après le baccalauréat',
                'La possibilité de revenir en arrière sur le passé',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« La connaissance nous donne de l’assurance, et nous la transmettons. Elle nous rend confiants et prévisibles » face aux aléas de la traversée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'La vie comme jeu',
            stepTheme: 'Stratégie',
            stepTitle: 'Identifier les quatre composantes de la vie envisagée comme un grand jeu',
            paragraphText:
              'Envisager la vie comme « le plus grand de tous les jeux » (et non un jeu trivial) implique de reconnaître ses quatre dimensions : des règles (sociales, morales, juridiques), des rôles à tenir, des choix/stratégies et des gains/pertes.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le cours affirme-t-il que la vie est « le plus grand de tous les jeux » ?',
              options: [
                'Parce qu’il faut la prendre à la légère sans aucune règle',
                'Parce que les résultats dépendent uniquement d’un lancer de dé',
                'Parce qu’elle implique des règles (sociales, morales, juridiques), des rôles, des choix stratégiques et des gains ou pertes',
                'Parce qu’on peut toujours recommencer la partie à zéro chaque matin',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Loin d’être un jeu trivial, la vie engage des règles, des responsabilités et des stratégies réelles qu’il faut mener pour gagner avec honneur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Match de championnat',
            stepTheme: 'Acteur unique',
            stepTitle: 'Comprendre que personne ne peut jouer votre match à votre place',
            paragraphText:
              'La vie n’est pas un simple entraînement : c’est un véritable match de championnat. Aucun parent, entraîneur, employeur ni conjoint ne peut entrer sur le terrain à notre place.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle vérité fondamentale illustre la comparaison de la vie avec un « match de championnat » ?',
              options: [
                'Personne (ni parent, ni employeur, ni conjoint) ne peut jouer notre vie à notre place : il faut s’engager pleinement pour gagner',
                'Seuls les sportifs professionnels peuvent réussir leur vie',
                'La vie est un simple entraînement sans conséquences réelles',
                'Il suffit d’observer depuis les tribunes pour remporter le trophée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chacun est l’acteur irremplaçable de sa propre existence ; compter sur les autres pour mener sa partie conduit à la défaite.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Irréversibilité',
            stepTheme: 'Valeur du temps',
            stepTitle: 'Prendre conscience que chaque tranche de 24 heures est définitive',
            paragraphText:
              'On ne peut pas revenir en arrière sur nos échecs ou nos succès : une fois 24 heures écoulées, la journée appartient pour toujours au passé. Seuls ceux qui refusent le rôle de spectateur trouvent « une place au soleil ».',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Selon le Module 2, quelle catégorie de personnes parvient à trouver « une place au soleil » malgré le temps qui s’écoule irréversiblement ?',
              options: [
                'Celles qui attendent passivement un coup de chance',
                'Celles qui passent leur temps à regretter les journées passées',
                'Celles qui laissent leur entourage décider de tout',
                'Celles qui, par leur attitude active, refusent d’être de simples spectateurs de leur propre vie',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’attitude proactive face à l’irréversibilité du temps distingue les bâtisseurs des simples spectateurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Destin vs Liberté',
            stepTheme: 'Fatalisme',
            stepTitle: 'Reconnaître la limite de la vision fataliste du destin',
            paragraphText:
              'Définir le destin comme une « puissance supérieure réglant de manière fatale les événements » enferme l’individu dans l’impuissance. Être maître de son destin, c’est affirmer que l’on trace soi-même le chemin de sa réussite.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle conviction conclut le Module 2 sur la réussite et l’échec ?',
              options: [
                'La réussite est un pur hasard réservé à une minorité',
                '« On ne réussit pas par hasard, on n’échoue pas par malchance : vous êtes le seul à tracer le chemin de votre réussite »',
                'L’échec provient toujours d’une force supérieure incontrôlable',
                'Les rêves se réalisent automatiquement sans effort ni discipline',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le module responsabilise totalement l’apprenant : la réussite résulte d’objectifs fixés, d’un mental discipliné et d’actions constantes.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch2_p2',
        order: 2,
        title: 'Attitude gagnante, Savoir-Être et les 5 étapes du rêve à l’objectif',
        summary:
          'Transformer son attitude, cultiver les qualités clés du savoir-être et déployer la méthode en 5 étapes (Rêve, Vision, Buts, Objectifs, Règles).',
        conceptExplanation:
          "Changer le cours de son existence commence par transformer son ATTITUDE. Ceux qui réussissent — les champions et entrepreneurs de leur vie — associent un savoir-être irréprochable à une méthode structurée.\n\n1. Le Savoir-Être : ensemble des qualités personnelles et comportementales manifestées au quotidien comme en entreprise. Le cours met en exergue : loyauté, discipline, rejet de l'égoïsme, courage, optimisme, courtoisie, maîtrise des émotions, bon relationnel, ténacité, détermination, persévérance, résilience, rage de gagner et capacité de travail.\n2. Les 5 étapes pour devenir Maître de son Destin :\n- Étape 1 : Avoir un Rêve.\n- Étape 2 : Avoir une Vision claire.\n- Étape 3 : Se fixer des Buts.\n- Étape 4 : Se fixer des Objectifs précis.\n- Étape 5 : Respecter certaines conditions et Règles.\n3. Donner corps à son rêve : beaucoup rêvent sans jamais concrétiser faute de discipline et d'état d'esprit. Il faut explorer ses rêves et LES ÉCRIRE (« Votre esprit crée votre réalité ; tout dépendra de ce que vous croyez possible »). Votre mental et votre discipline sont les forces qui transforment un rêve écrit en réalité atteinte.",
        keyRule:
          'Feuille de route du Maître de son destin : 1. Rêve (écrit !) -> 2. Vision -> 3. Buts -> 4. Objectifs -> 5. Conditions & Règles (portés par le mental et la discipline).',
        formulas: [
          {
            name: 'Chaîne de concrétisation du Module 2',
            formula: 'Rêve écrit -> Vision -> Buts -> Objectifs -> Discipline & Règles',
          },
        ],
        workedExample: {
          title: 'Décliner un rêve d’étudiant ENTD en chaîne de 5 étapes',
          statement:
            'Un étudiant rêve de fonder une fintech africaine innovante. Comment appliquer la progression du Module 2 ?',
          methodSteps: [
            '1. Rêve écrit : coucher par écrit l’ambition de faciliter l’inclusion financière en Côte d’Ivoire par le mobile.',
            '2. Vision : se projeter dans 5 ans avec une startup opérationnelle de 10 personnes.',
            '3. Buts : maîtriser l’économie numérique, la programmation/algorithmique, la finance et le droit du numérique.',
            '4. Objectifs : valider chaque semestre L1–L3 avec mention, réaliser un stage en banque/fintech dès la L2, lancer un prototype en L3.',
            '5. Conditions et règles : discipline quotidienne de travail, intégrité/loyauté, résilience face aux refus.',
          ],
          conclusion:
            'Le rêve cesse d’être une rêverie vague pour devenir une trajectoire pilotée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Savoir-Être',
            stepTheme: 'Qualités comportementales',
            stepTitle: 'Définir le savoir-être dans la vie quotidienne et professionnelle',
            paragraphText:
              'Le savoir-être rassemble les qualités personnelles et comportementales déployées au quotidien et en entreprise : loyauté, courtoisie, discipline, maîtrise des émotions, bon relationnel, détermination, ténacité et résilience.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle définition correspond exactement au « savoir-être » dans le Module 2 ?',
              options: [
                'L’ensemble des diplômes universitaires obtenus uniquement',
                'La maîtrise technique d’un seul logiciel de bureautique',
                'L’ensemble des qualités personnelles et comportementales dont on fait preuve au quotidien et en milieu professionnel',
                'Le niveau de salaire négocié au premier emploi',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le savoir-être (courtoisie, discipline, résilience, maîtrise émotionnelle, loyauté) complète indispensablement le savoir (connaissances) et le savoir-faire (technique).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Attitude',
            stepTheme: 'Transformation',
            stepTitle: 'Comprendre le pouvoir décisif du changement d’attitude',
            paragraphText:
              'Le cours affirme : « Nous pouvons changer le cours de notre existence en transformant notre attitude. » Une attitude gagnante associe rêve, vision, management de soi, esprit entrepreneurial et leadership.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Selon le Module 2, quel levier premier permet de changer réellement le cours de son existence ?',
              options: [
                'Transformer sa propre attitude (mental de gagnant, vision, management de soi)',
                'Attendre que tous les autres changent autour de soi',
                'Fuir toute forme de discipline et de règle',
                'Cultiver l’égoïsme et le pessimisme',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ceux qui réussissent sont ceux qui transforment activement leur attitude intérieure et leur comportement face aux défis.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Les 5 étapes',
            stepTheme: 'Feuille de route',
            stepTitle: 'Ordonner les cinq étapes pour maîtriser son destin',
            paragraphText:
              'La progression structurée du Module 2 comprend 5 étapes : (1) Avoir un Rêve, (2) Avoir une Vision, (3) Se fixer des Buts, (4) Se fixer des Objectifs, (5) Respecter certaines conditions et Règles.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle séquence reproduit fidèlement les cinq étapes du parcours « Maître de notre destin » ?',
              options: [
                'Règles -> Hasard -> Chance -> Rêve -> Repos',
                'Rêve -> Vision -> Buts -> Objectifs -> Conditions et Règles',
                'Objectifs -> Oubli -> Spectateur -> Destin -> Échec',
                'Salaire -> Diplôme -> Vision -> Rêve -> Imitation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On part de l’aspiration (Rêve et Vision), on la traduit en directions concrètes (Buts et Objectifs), puis on la réalise par la discipline (Conditions et Règles).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Écrire ses rêves',
            stepTheme: 'Passage à l’action',
            stepTitle: 'Donner corps à ses rêves en les couchant par écrit',
            paragraphText:
              'Dès qu’un rêve prend forme dans votre imaginaire, il faut lui donner corps en l’écrivant. Beaucoup ont de grandes ambitions sans jamais les réaliser parce qu’ils ne les formalisent pas et manquent de discipline.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle action concrète immédiate le cours recommande-t-il dès qu’un rêve prend forme dans votre imaginaire ?',
              options: [
                'Le garder flou pour ne jamais prendre de risque',
                'Attendre dix ans avant d’y repenser',
                'Le comparer à celui des autres pour y renoncer',
                'Lui donner corps en l’écrivant clairement et en mobilisant son mental et sa discipline',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Écrire son rêve clarifie l’intention, engage l’esprit et constitue le premier pas vers la définition d’objectifs mesurables.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Mental & Discipline',
            stepTheme: 'Forces motrices',
            stepTitle: 'Identifier les deux forces qui permettent de concrétiser ses projets',
            paragraphText:
              'Avoir un rêve ne suffit pas : concrétiser des projets suppose d’adopter un état d’esprit solide et de respecter des règles. Comme le souligne le support : « Votre MENTAL et votre DISCIPLINE seront vos FORCES pour y arriver. »',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quelles sont les deux forces majeures essentielles pour transformer un rêve en objectifs atteints ?',
              options: [
                'La chance et le hasard',
                'Le mental et la discipline',
                'L’égoïsme et l’impatience',
                'La passivité et la routine subie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le mental permet de tenir face aux obstacles et la discipline assure la régularité des efforts nécessaires à la réussite.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_dev_perso_ch3',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'S’estimer et développer sa confiance en soi : concepts et outils (S2)',
    summary:
      'Distinguer rigoureusement l’estime de soi et la confiance en soi, puis appliquer deux outils pratiques puissants : la Valeur Personnelle (carnet de réalisations et affirmations en « Je ») et le Diagnostic de la Fenêtre de Johari.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Développement Personnel S2 (S’estimer et développer sa confiance en soi L1)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch3_p1',
        order: 1,
        title: 'Distinguer l’Estime de soi et la Confiance en soi',
        summary:
          'Comparer les mécanismes, les dimensions et les leviers de progression de l’estime de soi (Moi Réel vs Moi Idéal) et de la confiance en soi (contextualisée et basée sur l’expérience).',
        conceptExplanation:
          "Bien qu'intimement liées, l'estime de soi et la confiance en soi ne recouvrent pas la même réalité psychologique :\n\n1. L'Estime de soi :\n- C'est une appréciation et un jugement de valeur portés sur soi-même.\n- Elle est proportionnelle à l'écart entre le « Moi Réel » (ce que l'on pense être) et le « Moi Idéal » (ce que l'on aimerait ou devrait être) : plus l'écart est faible, plus l'estime de soi est élevée.\n- La notion de « Moi » couvre quatre dimensions : l'apparence, le caractère, les capacités et les croyances.\n- L'estime de soi évolue constamment selon nos actions ; pour la maintenir élevée, il est indispensable de vivre en conformité avec ses valeurs.\n\n2. La Confiance en soi :\n- C'est une croyance forte en ses capacités à faire face à une situation donnée.\n- Elle s'appuie sur l'expérience accumulée dans un domaine particulier : elle est donc CONTEXTUALISÉE (on peut avoir très confiance en soi en informatique mais peu en prise de parole publique).\n- Elle est temporaire et peut être dégradée par des expériences malheureuses.\n- Elle se développe par l'acquisition progressive de nouveaux savoirs, savoir-faire ou savoir-être, en prenant soin de GRADUER la difficulté et d'ajuster selon les retours.",
        keyRule:
          'Estime de soi = jugement global lié à l’écart Moi Réel / Moi Idéal et à la fidélité à ses valeurs. Confiance en soi = croyance contextualisée en sa capacité d’agir, bâtie par l’expérience graduée.',
        formulas: [
          {
            name: 'Équation pédagogique de l’estime de soi',
            formula: 'Estime de soi ↑  <=>  Écart | Moi Réel − Moi Idéal | ↓  (agir en conformité avec ses valeurs)',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer un problème d’estime de soi vs un manque de confiance en soi',
          statement:
            'Analyser deux situations : (A) Aïcha réussit brillamment ses projets web, mais elle craint de présenter son premier exposé devant 200 personnes. (B) Koffi a triché pour obtenir une note alors qu’il valorise profondément l’honnêteté, et il se sent mal vis-à-vis de lui-même.',
          methodSteps: [
            'Situation A : manque de CONFIANCE en soi contextualisé (domaine spécifique de la prise de parole en public, faute d’expérience accumulée). Solution : graduer la difficulté.',
            'Situation B : baisse d’ESTIME de soi, car l’action réalisée (tricherie) crée un écart brutal entre le Moi Réel et le Moi Idéal/les valeurs d’honnêteté.',
          ],
          conclusion:
            'Savoir nommer le bon levier permet d’agir efficacement : réaligner ses actes sur ses valeurs (estime) ou accumuler des expériences progressives (confiance).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Estime de soi',
            stepTheme: 'Moi Réel vs Moi Idéal',
            stepTitle: 'Relier l’estime de soi à l’écart entre Moi Réel et Moi Idéal',
            paragraphText:
              'L’estime de soi est le jugement de valeur que l’on porte sur soi : elle dépend de l’écart entre le Moi Réel (ce que l’on pense être) et le Moi Idéal (ce que l’on aimerait ou devrait être).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'À quel rapport psychologique l’estime de soi est-elle directement liée ?',
              options: [
                'L’écart entre son âge et son diplôme',
                'L’écart entre le Moi Réel (ce que l’on pense être) et le Moi Idéal (ce que l’on aimerait ou devrait être)',
                'Le nombre d’abonnés sur les réseaux sociaux',
                'La moyenne arithmétique de ses notes de mathématiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Plus nos actions rapprochent notre Moi Réel de notre Moi Idéal, plus notre estime de soi est solide et élevée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: '4 dimensions du Moi',
            stepTheme: 'Estime de soi',
            stepTitle: 'Identifier les quatre dimensions du « Moi » et le rôle des valeurs',
            paragraphText:
              'La notion de « Moi » s’entend sur quatre dimensions : l’apparence, le caractère, les capacités et les croyances. Pour maintenir son estime de soi à un niveau élevé, il est indispensable de vivre en conformité avec ses valeurs.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quelles sont les quatre dimensions du « Moi » liées à l’estime de soi ?',
              options: [
                'Le budget, le logement, le transport et les loisirs',
                'La lecture, l’écriture, le calcul et le dessin',
                'L’apparence, le caractère, les capacités et les croyances',
                'L’ethos, le pathos, le logos et le rythme',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’estime de soi s’évalue à travers l’apparence, le caractère, les capacités et les croyances, et se protège en vivant selon ses valeurs.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Confiance en soi',
            stepTheme: 'Contextualisation',
            stepTitle: 'Comprendre que la confiance en soi est contextualisée et évolutive',
            paragraphText:
              'La confiance en soi est une croyance forte en sa capacité à faire face à une situation précise. Appuyée sur l’expérience accumulée dans un domaine donné, elle est contextualisée et temporaire (elle peut être entamée par un échec).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Pourquoi dit-on que la confiance en soi est « contextualisée » ?',
              options: [
                'Parce qu’elle repose sur l’expérience accumulée dans un domaine particulier (elle peut être forte dans un domaine et faible dans un autre)',
                'Parce qu’elle est figée définitivement à la naissance pour toute la vie',
                'Parce qu’elle ne dépend jamais des expériences vécues',
                'Parce qu’elle concerne uniquement l’apparence physique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On peut avoir une grande confiance en soi en codage informatique tout en manquant de confiance dans un sport ou une langue nouvelle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Développer sa confiance',
            stepTheme: 'Progression graduée',
            stepTitle: 'Construire sa confiance par apprentissage et difficulté graduée',
            paragraphText:
              'La confiance en soi se construit activement par l’acquisition de nouveaux savoirs, savoir-faire et savoir-être, en veillant à graduer la difficulté (paliers atteignables) et à ajuster sa pratique selon les retours obtenus.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle précaution méthodologique essentielle le cours recommande-t-il pour développer durablement sa confiance en soi ?',
              options: [
                'Se lancer immédiatement dans le défi le plus impossible pour choquer son entourage',
                'Éviter d’acquérir de nouveaux savoir-faire de peur de se tromper',
                'Ne jamais écouter les retours constructifs',
                'Acquérir de nouveaux savoirs, savoir-faire et savoir-être en graduant la difficulté et en ajustant selon les retours',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La graduation de la difficulté permet d’enchaîner des victoires réalistes qui consolident l’expérience et la confiance.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Vivre selon ses valeurs',
            stepTheme: 'Maintien de l’estime',
            stepTitle: 'Ne pas confondre succès extérieur et alignement avec ses valeurs',
            paragraphText:
              'L’estime de soi évolue constamment au fil de nos actes : même un succès apparent peut abîmer l’estime de soi s’il a été obtenu en trahissant ses valeurs profondes. L’alignement éthique nourrit une estime stable.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle condition est indispensable pour maintenir son estime de soi à un niveau élevé dans la durée ?',
              options: [
                'Ne jamais évaluer aucune de ses actions',
                'Vivre en conformité avec ses propres valeurs',
                'Plaire absolument à tout le monde en renonçant à ses principes',
                'Éviter toute interaction sociale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Agir en cohérence avec ses valeurs réduit la tension entre Moi Réel et Moi Idéal et maintient une estime de soi saine.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch3_p2',
        order: 2,
        title: 'Outils pratiques : la Valeur Personnelle et le Diagnostic de la Fenêtre de Johari',
        summary:
          'Construire son carnet de réalisations et ses déclarations positives en « Je », et utiliser les 4 zones de la Fenêtre de Johari (Luft et Ingham) pour développer la connaissance de soi.',
        conceptExplanation:
          "Le cours fournit deux outils opérationnels immédiatement applicables par les étudiants pour renforcer l'estime et la connaissance de soi :\n\n1. Outil 1 — La Valeur Personnelle (en 4 étapes) :\n- Étape 1 : Recenser ses succès et réalisations dont on est fier dans un « carnet de réalisations personnelles » (par catégorie) pour prendre conscience de ses talents.\n- Étape 2 : Rédiger de courtes déclarations de valorisation (comme des slogans) mettant en avant ses aptitudes ou réussites, obligatoirement formulées : (a) en utilisant le « Je » (« Je suis… » et non « C'est… ») ; (b) de manière POSITIVE (« Je suis volontaire », jamais de tournure négative).\n- Étape 3 : Se répéter chaque déclaration au moins 5 fois par jour jusqu'à ce que la petite voix intérieure devienne son plus grand « supporter ».\n- Étape 4 : Réactiver ce supporter positif dans les moments difficiles pour éviter d'être tiré vers le bas.\n\n2. Outil 2 — Le Diagnostic de la Fenêtre de Johari (modèle de communication élaboré par Joseph Luft et Harry Ingham) :\n- Principe : croiser sa propre perception (6 qualités et 6 défauts choisis) avec celle de 5 à 6 personnes qui nous connaissent bien, afin de répartir les caractéristiques dans 4 zones :\n  • Zone Publique : connu de moi ET des autres (au moins une autre personne l'a identifié avec moi).\n  • Zone Aveugle : connu des autres MAIS PAS de moi (points forts ou limites qui m'échappent et peuvent me freiner).\n  • Zone Cachée (Façade) : connu de moi MAIS PAS des autres (ce que je choisis de ne pas montrer).\n  • Zone Inconnue : inconnu de moi ET des autres (personne ne l'a sélectionné ; potentiel inexploré).\n- Objectif : parler davantage de soi réduit la zone cachée (crée la confiance) ; écouter activement les feedbacks réduit la zone aveugle (meilleure compréhension de son impact sur les autres). Utilisable en individuel ou en équipe.",
        keyRule:
          'Valeur personnelle = Carnet de succès + slogans en « Je » positifs répétés ≥ 5 fois/jour. Fenêtre de Johari (Luft & Ingham) = 4 zones : Publique, Aveugle, Cachée, Inconnue.',
        formulas: [
          {
            name: 'Matrice de la Fenêtre de Johari (Luft & Ingham)',
            formula: 'Connu de moi + Connu d’autrui = PUBLIQUE | Inconnu de moi + Connu d’autrui = AVEUGLE | Connu de moi + Inconnu d’autrui = CACHÉE | Inconnu des deux = INCONNUE',
          },
        ],
        workedExample: {
          title: 'Interpréter un diagnostic Johari et formuler une déclaration de valeur personnelle',
          statement:
            'Dans son bilan Johari, 5 camarades ont attribué à Yao le trait « impatient » alors que Yao ne l’avait pas choisi ; par ailleurs Yao se sait « très créatif » mais aucun camarade ne l’a coché.',
          methodSteps: [
            '« Impatient » (vu par les autres, pas par Yao) appartient à la ZONE AVEUGLE : c’est un point de vigilance à travailler grâce aux feedbacks.',
            '« Très créatif » (vu par Yao, pas par les autres) appartient à la ZONE CACHÉE : Yao gagne à oser partager davantage ses idées en groupe pour agrandir sa zone publique.',
            'Formuler une déclaration de valeur personnelle correcte : « Je suis créatif et j’apporte des solutions originales à mon équipe » (en « Je », positive, à répéter ≥ 5 fois/jour).',
          ],
          conclusion:
            'Yao obtient une carte claire pour réduire ses angles morts et valoriser ses talents cachés.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Valeur personnelle',
            stepTheme: 'Déclarations positives',
            stepTitle: 'Formuler correctement ses déclarations de valeur personnelle',
            paragraphText:
              'Après avoir listé ses succès dans un carnet de réalisations personnelles, on crée de courts slogans valorisants qui doivent respecter deux règles : employer la première personne « Je » (« Je suis… » et non « C’est… ») et adopter une tournure positive (« Je suis volontaire »).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces affirmations respecte parfaitement les deux règles de formulation de l’outil « Valeur personnelle » ?',
              options: [
                '« C’est bien de ne pas être paresseux. »',
                '« Je ne suis plus timide en public. »',
                '« Je suis volontaire et persévérant dans mes projets. »',
                '« On dit que les étudiants réussissent parfois. »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une déclaration efficace utilise le pronom « Je » (« Je suis… ») et une formulation strictement positive (sans négation).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Répétition',
            stepTheme: 'Supporter intérieur',
            stepTitle: 'Ancrer ses déclarations pour activer son « supporter » intérieur',
            paragraphText:
              'Le cours recommande de se répéter chaque déclaration de valeur personnelle au moins 5 fois par jour jusqu’à ce que la petite voix intérieure se les approprie et devienne votre meilleur supporter dans les moments difficiles.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'À quelle fréquence minimale le cours recommande-t-il de répéter ses déclarations de valeur personnelle chaque jour ?',
              options: [
                'Au moins cinq fois par jour',
                'Une seule fois par semestre',
                'Uniquement après un échec grave',
                'Une fois par an à la rentrée universitaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Répéter chaque déclaration au moins 5 fois par jour permet à la petite voix intérieure de les intégrer durablement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Fenêtre de Johari',
            stepTheme: 'Auteurs & Objectif',
            stepTitle: 'Connaître les créateurs et la finalité de la Fenêtre de Johari',
            paragraphText:
              'Élaborée par Joseph Luft et Harry Ingham, la Fenêtre de Johari est un modèle de communication qui croise l’auto-évaluation avec le regard de 5 à 6 proches/collègues pour améliorer la connaissance de soi et la qualité des relations.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quels sont les deux psychologues ayant élaboré le modèle de la « Fenêtre de Johari » ?',
              options: [
                'Maslow et Rogers',
                'Luft et Ingham',
                'Freud et Jung',
                'Socrate et Aristote',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le nom « Johari » est d’ailleurs formé par la contraction des prénoms de ses créateurs : Joseph Luft et Harry Ingham.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Les 4 zones',
            stepTheme: 'Diagnostic Johari',
            stepTitle: 'Distinguer les zones Publique, Aveugle, Cachée et Inconnue',
            paragraphText:
              'Dans la Fenêtre de Johari : Publique = connu de moi et des autres ; Aveugle = identifié par les autres mais PAS par moi ; Cachée = identifié par moi mais PAS par les autres ; Inconnue = sélectionné par personne.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Dans un diagnostic de Johari, comment appelle-t-on la zone qui regroupe les caractéristiques identifiées par votre entourage mais que vous n’aviez PAS identifiées vous-même ?',
              options: [
                'La zone Publique',
                'La zone Cachée',
                'La zone Inconnue',
                'La zone Aveugle',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La zone Aveugle regroupe ce que les autres perçoivent de vous sans que vous en ayez conscience — souvent des comportements qui vous limitent ou des forces insoupçonnées.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Communication ouverte',
            stepTheme: 'Exploitation Johari',
            stepTitle: 'Réduire les zones aveugle et cachée par l’écoute et le partage',
            paragraphText:
              'Examiner sa zone aveugle (en écoutant les feedbacks) révèle ce qui nous limite à notre insu ; examiner sa zone cachée interroge ce que nous gagnons à partager davantage pour bâtir une relation de confiance en individuel comme en équipe.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Comment peut-on concrètement agrandir sa « zone Publique » et réduire sa « zone Aveugle » selon la logique de la Fenêtre de Johari ?',
              options: [
                'En refusant tout commentaire extérieur et en cachant toutes ses idées',
                'En parlant davantage de soi avec authenticité et en écoutant activement les feedbacks constructifs des autres',
                'En choisissant uniquement des personnes qui ne nous connaissent pas',
                'En ne sélectionnant que des défauts dans sa propre liste',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Parler de soi réduit la zone cachée (confiance mutuelle) et écouter les retours d’autrui réduit la zone aveugle (meilleure conscience de soi).',
            },
          },
        ],
      }),
    ],
  },
];
