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
  // ==========================================================================
  // CHAPITRE 1 : FONDEMENTS, CONNAISSANCE DE SOI ET HISTOIRE DU DÉVELOPPEMENT PERSONNEL
  // ==========================================================================
  {
    id: 'lmd_entd_l1_dev_perso_ch1',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Fondements, connaissance de soi et histoire du développement personnel',
    summary:
      'Maîtriser les 4 piliers du développement personnel, l’opposition développement/enveloppement, les grands penseurs (Socrate, Aristote, Stoïciens, William James, Carl Jung, Abraham Maslow, Daniel Goleman) et la diffusion moderne (neurosciences, TED Talks).',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Développement Personnel',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch1_p1',
        order: 1,
        title: 'Notion, dynamique (développement vs enveloppement) et les 4 piliers',
        summary:
          'Comprendre la finalité du développement personnel, le passage de la contraction à l’expansion, la connaissance de soi comme pierre angulaire et la responsabilité personnelle.',
        conceptExplanation:
          'Le développement personnel (ou croissance / épanouissement personnel) désigne un ensemble organisé de pratiques, de méthodes et de réflexions visant à mieux se connaître, valoriser ses talents, maîtriser ses émotions et concrétiser ses aspirations personnelles et professionnelles.\n\nÉtymologiquement, « développement » s’oppose à « enveloppement » : c’est un mouvement actif pour « sortir de sa coquille », quitter un état actuel de contraction statique (État A, jugé insatisfaisant) et progresser vers un état d’expansion et de réalisation (État B).\n\nCette démarche pluridisciplinaire (nourrie par la psychologie, la philosophie, la sociologie et les neurosciences) repose sur quatre piliers complémentaires : la **connaissance de soi** (première pierre angulaire), l’**amélioration continue**, la **gestion des émotions et du stress**, et l’**atteinte d’objectifs alignés**. Son but profond est de remplacer les croyances destructrices par des croyances constructrices et d’assumer sa pleine responsabilité personnelle.',
        keyRule:
          'Développement s’oppose à enveloppement : passer de la contraction statique (État A) à l’expansion (État B) en s’appuyant sur la connaissance de soi et la responsabilité personnelle.',
        workedExample: {
          title: 'Initialiser son journal de développement personnel en Licence 1',
          statement:
            'Un étudiant en première année constate qu’il remet souvent ses révisions au dernier moment et perd ses moyens lors des exposés oraux. Comment amorcer sa démarche ?',
          methodSteps: [
            'Diagnostic de soi (État A) : lister honnêtement 3 forces (curiosité numérique, esprit d’équipe, créativité) et 2 freins (procrastination, trac à l’oral).',
            'Remplacer la croyance destructrice (« Je suis nul à l’oral ») par une croyance constructrice (« L’aisance orale est une compétence qui s’entraîne »).',
            'Définir un premier objectif d’expansion (État B) : prendre la parole au moins une fois par semaine en TD et tenir un carnet hebdomadaire de progrès.',
          ],
          conclusion:
            'L’auto-évaluation lucide transforme un malaise diffus en plan d’amélioration continue concret.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étymologie',
            stepTheme: 'Dynamique',
            stepTitle: 'Opposer « développement » et « enveloppement »',
            paragraphText:
              'Pour saisir l’esprit du développement personnel, il suffit d’observer la construction même du mot : dé-velopper signifie littéralement ôter l’enveloppe.\n• **Enveloppement (État A)** : situation de fermeture, de repli ou de contraction statique jugée insatisfaisante (peurs, habitudes subies, routine).\n• **Développement (État B)** : cheminement volontaire pour « sortir de sa coquille », évoluer et entrer dans une dynamique d’expansion et de progrès.\n• **Exemple concret** : un étudiant timide qui choisit d’apprendre des techniques d’éloquence pour soutenir brillamment son projet quitte la contraction pour l’expansion.',
            keyRule:
              'Le développement personnel est un mouvement actif qui fait passer d’un état de contraction subi (A) à un état d’expansion choisi (B).',
            konanTip:
              'Retiens l’image simple : envelopper = refermer sur soi ; développer = déployer son potentiel vers l’extérieur.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'À quelle notion oppose-t-on étymologiquement le « développement » pour illustrer le fait de « sortir de sa coquille » ?',
              options: [
                'L’extraversion',
                'L’enveloppement (état de fermeture et de contraction statique)',
                'L’accélération',
                'L’adaptation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Développer s’oppose à envelopper : c’est quitter une posture de fermeture et de contraction statique (État A) pour progresser vers l’expansion (État B).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Pierre angulaire',
            stepTheme: 'Les 4 piliers',
            stepTitle: 'Identifier la connaissance de soi comme première pierre angulaire',
            paragraphText:
              'Impossible de tracer un itinéraire fiable si l’on ignore son point de départ : c’est pourquoi toute progression débute par soi-même.\n• **Connaissance de soi** : première pierre angulaire permettant d’identifier lucidement ses forces, ses limites, ses valeurs profondes et ses sources de motivation.\n• **Les 3 autres piliers** : une démarche d’amélioration continue, la gestion des émotions et du stress, et l’atteinte d’objectifs personnels et professionnels.\n• **Exemple concret** : un étudiant qui connaît sa forte aptitude à l’analyse visuelle et son goût pour l’entraide choisira plus facilement un projet digital aligné avec son profil.',
            keyRule:
              'La connaissance de soi est le socle des 4 piliers : elle éclaire les forces sur lesquelles s’appuyer et les limites à travailler.',
            konanTip:
              'Écris sur une feuille deux colonnes : « Mes 5 forces » et « Mes 3 priorités d’amélioration » — c’est ton premier miroir objectif.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quel pilier constitue la « première pierre angulaire » indispensable de toute démarche de développement personnel ?',
              options: [
                'L’imitation systématique d’une célébrité',
                'La connaissance de soi (forces, limites, valeurs et motivations)',
                'L’accumulation d’objets matériels',
                'La compétition agressive envers son entourage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La connaissance de soi est le point de départ fondamental : comprendre son fonctionnement intérieur permet d’orienter ses choix de manière cohérente et durable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Responsabilité',
            stepTheme: 'Croyances',
            stepTitle: 'Quitter les croyances destructrices et assumer sa responsabilité personnelle',
            paragraphText:
              'Deux obstacles majeurs freinent la croissance d’un jeune adulte : ses croyances limitantes et la tentation de blâmer systématiquement l’extérieur.\n• **Croyances destructrices vs constructrices** : remplacer les verdicts figés (« Je n’y arriverai jamais », « Les maths ne sont pas faites pour moi ») par des convictions dynamiques (« Je peux maîtriser cette méthode étape par étape »).\n• **Responsabilité personnelle** : cesser de blâmer la malchance, les autres ou les circonstances pour reprendre le pouvoir d’agir sur sa propre trajectoire.\n• **Rôle du développement personnel** : se révéler à soi-même, corriger ses faiblesses et s’appuyer sur ses forces.',
            keyRule:
              'Prendre sa responsabilité personnelle ne signifie pas que tout est de sa faute, mais qu’on choisit sa réponse et son action face aux événements.',
            konanTip:
              'Dès que tu t’entends dire « C’est à cause de… », transforme la phrase en « Quelle action concrète dépend de moi dès aujourd’hui ? ».',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle double transformation intérieure constitue le but fondamental du développement personnel ?',
              options: [
                'Renforcer ses peurs et attendre passivement la chance',
                'Abandonner les croyances destructrices au profit de croyances constructrices et assumer sa responsabilité sans blâmer les autres',
                'Éviter toute remise en question après une erreur',
                'Dépendre entièrement des décisions de son entourage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le développement personnel vise à remplacer les croyances limitantes par des croyances constructrices et à cultiver la responsabilité personnelle face aux défis.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Amélioration continue',
            stepTheme: 'Progrès',
            stepTitle: 'Transformer chaque réussite et chaque échec en levier d’apprentissage',
            paragraphText:
              'Le développement personnel n’est pas un diplôme qu’on obtient une fois pour toutes, mais une attitude proactive quotidienne.\n• **Démarche continue** : chaque expérience — réussite brillante comme échec douloureux — fournit un retour d’information utile pour s’ajuster et grandir.\n• **Journal de développement personnel** : consigner chaque semaine ses avancées, ses difficultés et une leçon tirée rend les progrès visibles.\n• **Exemple concret** : après une note décevante en statistique, l’étudiant proactif analyse ses erreurs de méthode, ajuste son planning de révision et progresse au devoir suivant.',
            konanTip:
              'Ne juge jamais une journée uniquement à la récolte immédiate, mais aux graines d’effort et de méthode que tu as plantées.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans une logique d’amélioration continue, comment doit être traité un échec à un devoir ou un entretien ?',
              options: [
                'Comme la preuve définitive d’une incapacité permanente',
                'Comme une donnée d’apprentissage permettant d’identifier les axes d’amélioration et d’ajuster sa méthode',
                'Comme un sujet tabou à oublier immédiatement sans analyse',
                'Comme une raison d’abandonner tout objectif ambitieux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’amélioration continue repose sur une posture proactive où chaque succès et chaque échec servent de carburant pour affiner ses compétences.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Pluridisciplinarité',
            stepTheme: 'Sciences',
            stepTitle: 'Identifier les disciplines scientifiques qui fondent le développement personnel',
            paragraphText:
              'Loin des recettes magiques ou des slogans superficiels, le développement personnel sérieux s’appuie sur un socle scientifique et philosophique solide.\n• **Psychologie** : compréhension des comportements, de la motivation, des blocages et de l’estime de soi.\n• **Philosophie** : quête de sens, éthique, sagesse pratique et maîtrise de soi.\n• **Sociologie** : compréhension des interactions humaines, des rôles sociaux et du travail collectif.\n• **Neurosciences** : étude des mécanismes cérébraux de l’apprentissage, de la mémoire, des habitudes et de la régulation émotionnelle.',
            keyRule:
              'Le développement personnel moderne est pluridisciplinaire : psychologie, philosophie, sociologie et neurosciences éclairent ensemble la transformation humaine.',
            konanTip:
              'Méfie-toi des discours qui s’opposent aux connaissances scientifiques : la force du développement personnel moderne vient de son socle multidisciplinaire.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Sur quel ensemble de disciplines le développement personnel moderne s’appuie-t-il pour offrir une approche globale et rigoureuse de l’être humain ?',
              options: [
                'La psychologie, la philosophie, la sociologie et les neurosciences',
                'La métallurgie, la géologie et l’astronomie',
                'Exclusivement la comptabilité générale',
                'Uniquement la chance et l’astrologie',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La rigueur du développement personnel contemporain vient de son ancrage pluridisciplinaire combinant psychologie, philosophie, sociologie et neurosciences.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Démarche partagée',
            stepTheme: 'Déclencheurs',
            stepTitle: 'Comprendre que le développement personnel n’est pas un chemin solitaire',
            paragraphText:
              'Beaucoup croient à tort que le développement personnel consiste à s’isoler pour tout réussir seul : en réalité, l’entourage et le soutien accélèrent durablement la progression.\n• **Déclencheurs fréquents** : une démarche personnelle naît souvent d’un tournant de vie (entrée à l’université, premier emploi, épreuve ou remise en question).\n• **Force du collectif** : partager ses projets avec des proches bienveillants, un binôme d’études ou une communauté d’apprentissage évite le découragement.\n• **Piège des « hacks »** : méfiez-vous des promesses de raccourcis instantanés ; la croissance personnelle est une route exigeante où la régularité prime.',
            keyRule:
              'Bien que personnelle dans sa décision, la croissance personnelle s’épanouit davantage lorsqu’elle est partagée et soutenue.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi recommande-t-on de partager sa démarche de développement personnel avec un binôme ou un entourage bienveillant plutôt que de chercher des « hacks » miracles en solitaire ?',
              options: [
                'Parce que le soutien mutuel maintient la motivation sur la durée, alors que la croissance personnelle est un chemin exigeant sans raccourci magique',
                'Parce qu’il est impossible de lire un livre seul',
                'Parce que les autres doivent fixer vos objectifs à votre place',
                'Parce que les hacks garantissent toujours un succès en 24 heures',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le développement personnel est une démarche de longue haleine : le soutien d’un binôme ou d’un entourage positif renforce la constance et prévient l’abandon.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch1_p2',
        order: 2,
        title: 'Histoire et grands penseurs : de Socrate à William James, Carl Jung et Abraham Maslow',
        summary:
          'Retracer l’évolution historique du développement personnel : Socrate, Aristote, les Stoïciens, William James (habitudes), Sigmund Freud, Carl Jung (types psychologiques et individuation) et la psychologie humaniste (Maslow, Rogers).',
        conceptExplanation:
          'Le développement personnel moderne hérite de plus de deux millénaires de réflexion humaine.\n\nDans l’Antiquité, **Socrate** place l’introspection au cœur de la sagesse avec la maxime « Connais-toi toi-même » (temple de Delphes) ; **Aristote** fonde l’eudémonisme (le bonheur par l’accomplissement des vertus et de son potentiel) ; les **Stoïciens** (Sénèque, Épictète, Marc Aurèle) enseignent la maîtrise des émotions et la résilience face aux épreuves.\n\nAux XIXe et XXe siècles, la discipline devient empirique et psychologique : **William James** (psychologie pragmatique) démontre le rôle décisif des habitudes répétées ; **Sigmund Freud** révèle l’influence de l’inconscient et des blocages internes ; **Carl Jung** développe le concept d’**individuation** et la théorie des **types psychologiques** (dont la célèbre distinction **introversion / extraversion**). Enfin, dans les années 1950–1970, **Abraham Maslow** et **Carl Rogers** fondent la psychologie humaniste centrée sur l’**auto-actualisation**, pendant que Norman Vincent Peale popularise la pensée positive.',
        keyRule:
          'Socrate = Connais-toi toi-même | Aristote = Eudémonisme | Stoïciens = Maîtrise & résilience | W. James = Habitudes | C. Jung = Individuation & introversion/extraversion | Maslow & Rogers = Auto-actualisation.',
        workedExample: {
          title: 'Relier une situation étudiante à l’apport d’un grand penseur',
          statement:
            'Comment les apports de William James et de Carl Jung aident-ils concrètement un étudiant d’ENTD L1 à mieux s’organiser ?',
          methodSteps: [
            'Avec William James : installer une micro-habitude quotidienne (ex. 30 minutes de révision chaque matin à heure fixe) car la répétition positive consolide automatiquement les compétences.',
            'Avec Carl Jung : reconnaître son profil énergétique (plutôt introverti = recharge dans le calme et la concentration ; plutôt extraverti = stimulé par le travail en groupe et l’échange) sans jugement de valeur.',
          ],
          conclusion:
            'Connaître son profil psychologique et bâtir de bonnes habitudes rend l’effort scolaire beaucoup plus naturel et durable.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Antiquité',
            stepTheme: 'Racines philo',
            stepTitle: 'Socrate (« Connais-toi toi-même »), Aristote et les Stoïciens',
            paragraphText:
              'Bien avant les livres de coaching modernes, les philosophes antiques considéraient la philosophie comme un art concret de bien vivre.\n• **Socrate** : reprend la maxime gravée au temple de Delphes, « **Connais-toi toi-même** », affirmant que l’examen lucide de soi est la porte d’entrée de la sagesse.\n• **Aristote** : développe l’**eudémonisme**, reliant le bonheur durable à l’exercice des vertus et à la réalisation de son potentiel humain.\n• **Les Stoïciens (Sénèque, Épictète, Marc Aurèle)** : enseignent à distinguer ce qui dépend de nous (nos pensées, choix, réactions) de ce qui n’en dépend pas (météo, avis des autres), fondant la résilience moderne.',
            keyRule:
              'Socrate = introspection ; Aristote = eudémonisme (accomplissement de soi) ; Stoïciens = maîtrise émotionnelle et résilience.',
            konanTip:
              'Face à un imprévu (embouteillage à Abidjan, panne), applique le filtre stoïcien : « Qu’est-ce qui dépend encore de moi maintenant ? »',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quel courant philosophique antique (représenté par Sénèque, Épictète et Marc Aurèle) enseigne à concentrer son énergie sur ce qui dépend de soi pour développer maîtrise émotionnelle et résilience ?',
              options: [
                'Le stoïcisme',
                'Le mercantilisme',
                'Le cubisme',
                'Le positivisme logique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les Stoïciens (Sénèque, Épictète, Marc Aurèle) placent la raison, la maîtrise des émotions et la distinction entre ce qui dépend de nous et le reste au cœur de la sérénité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'William James',
            stepTheme: 'Habitudes',
            stepTitle: 'William James et la puissance des habitudes dans la réussite',
            paragraphText:
              'Au XIXe siècle, le développement personnel quitte la seule réflexion philosophique pour entrer dans le champ de la psychologie scientifique.\n• **William James** : fondateur de la psychologie pragmatique, il démontre que notre vie quotidienne est largement gouvernée par nos **habitudes** automatisées.\n• **Principe pragmatique** : des comportements positifs répétés quotidiennement finissent par s’ancrer dans le système nerveux, libérant l’esprit pour des tâches plus élevées.\n• **Exemple concret** : un étudiant qui prend l’habitude de relire ses notes 15 minutes chaque soir réussit sans stress extrême la veille des partiels.',
            keyRule:
              'Selon William James, nos habitudes répétées façonnent silencieusement nos compétences et notre qualité de vie.',
            konanTip:
              'Pour installer une habitude selon William James, ne tolère aucune exception durant les premières semaines : la régularité grave le circuit.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quel facteur décisif de réussite personnelle William James (fondateur de la psychologie pragmatique) a-t-il particulièrement mis en lumière ?',
              options: [
                'Le rôle déterminant des habitudes répétées et orientées positivement',
                'L’influence exclusive du hasard',
                'La suppression totale de toute routine',
                'L’usage des réseaux sociaux professionnels',
              ],
              correctAnswerIndex: 0,
              explanation:
                'William James a montré que les habitudes quotidiennes positives ancrent durablement les compétences et réduisent l’effort de volonté nécessaire pour réussir.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Carl Jung',
            stepTheme: 'Types psychologiques',
            stepTitle: 'Carl Jung : individuation et axes introversion / extraversion',
            paragraphText:
              'Médecin psychiatre suisse, Carl Gustav Jung a profondément influencé la connaissance de soi moderne et les outils de personnalité (comme le MBTI).\n• **Individuation** : processus de maturation par lequel une personne réalise son potentiel unique et harmonise les différentes facettes de sa personnalité.\n• **Introversion vs Extraversion** : Jung distingue deux orientations naturelles de l’énergie psychique — l’**introverti** puise son énergie dans la réflexion intérieure et le calme, tandis que l’**extraverti** la puise dans les interactions et l’action extérieure.\n• **Nuance essentielle** : aucun profil n’est supérieur à l’autre ; l’introversion n’est pas de la timidité, mais un mode de ressourcement.',
            konanTip:
              'Piège courant : confondre « introverti » et « timide ». Un introverti peut être un excellent orateur et leader, mais il a besoin de moments de calme pour recharger ses batteries !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Dans la typologie psychologique de Carl Jung, que distingue fondamentalement l’axe introversion / extraversion ?',
              options: [
                'Le niveau d’intelligence mathématique d’une personne',
                'La manière dont un individu oriente et recharge son énergie (monde intérieur/calme vs interactions extérieures)',
                'La différence entre une personne polie et une personne impolie',
                'L’âge biologique de l’individu',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour Carl Jung, introversion et extraversion décrivent deux orientations naturelles de l’énergie psychique, sans aucune hiérarchie de valeur ni confusion avec la timidité.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Psychologie humaniste',
            stepTheme: 'Maslow & Rogers',
            stepTitle: 'Maslow, Rogers et le concept d’auto-actualisation (1950–1970)',
            paragraphText:
              'Alors que Freud s’était surtout intéressé aux blocages inconscients et aux pathologies, les années 1950–1970 voient naître la **psychologie humaniste**, centrée sur le potentiel sain de chaque personne.\n• **Abraham Maslow & Carl Rogers** : mettent en avant l’**auto-actualisation**, c’est-à-dire la tendance naturelle de l’être humain à déployer pleinement ses capacités, sa créativité et son autonomie.\n• **Norman Vincent Peale** : popularise parallèlement la **pensée positive**, soulignant l’impact d’une attitude mentale proactive sur la persévérance.\n• **Synthèse** : la personne est replacée au centre, actrice responsable de sa propre évolution.',
            keyRule:
              'La psychologie humaniste (Maslow, Rogers) place l’autonomie, la créativité et l’auto-actualisation au cœur de l’épanouissement.',
            konanTip:
              'Retiens le tandem humaniste : Abraham Maslow (pyramide + auto-actualisation) et Carl Rogers (écoute empathique + potentiel humain).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quel concept central a été porté par Abraham Maslow et Carl Rogers dans le cadre de la psychologie humaniste ?',
              options: [
                'L’auto-actualisation (réalisation pleine de son potentiel, autonomie et créativité)',
                'Le déterminisme génétique absolu',
                'La soumission passive aux habitudes familiales',
                'La programmation en langage binaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Abraham Maslow et Carl Rogers ont fondé la psychologie humaniste autour de l’auto-actualisation : le déploiement plein et responsable des capacités de chaque individu.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Frise des penseurs',
            stepTheme: 'Repères',
            stepTitle: 'Synthétiser les grands penseurs et leurs apports clés',
            paragraphText:
              'Avoir une vue d’ensemble chronologique permet de relier immédiatement chaque outil pratique à son origine intellectuelle.\n• **De la sagesse à la science** : on passe de l’introspection philosophique antique (Socrate, Aristote, Stoïciens) à la psychologie clinique et pragmatique (James, Freud, Jung), puis à l’humanisme (Maslow, Rogers) et enfin à l’intelligence émotionnelle (Goleman) et aux neurosciences.\n• **Traditions spirituelles** : la méditation et la pleine conscience issues d’Orient ainsi que la quête de sens des traditions chrétiennes et islamiques ont également nourri la régulation intérieure.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Panorama chronologique des penseurs du développement personnel',
              caption: 'Des fondations philosophiques antiques aux sciences comportementales modernes',
              tableData: {
                headers: ['Penseur / Courant', 'Époque', 'Concept clé'],
                rows: [
                  ['Socrate', 'Antiquité', '« Connais-toi toi-même » (introspection)'],
                  ['Aristote', 'Antiquité', 'Eudémonisme (bonheur par la vertu et le potentiel)'],
                  ['Stoïciens (Sénèque, Épictète)', 'Antiquité', 'Maîtrise émotionnelle et résilience'],
                  ['William James', 'XIXe siècle', 'Psychologie pragmatique et force des habitudes'],
                  ['Carl Jung', 'XXe siècle', 'Individuation, introversion / extraversion'],
                  ['Abraham Maslow', '1943 / 1950s', 'Pyramide des besoins & auto-actualisation'],
                  ['Daniel Goleman', 'Années 1990', 'Popularisation de l’intelligence émotionnelle'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle association « Penseur → Concept majeur » est parfaitement exacte ?',
              options: [
                'Socrate → Pyramide des besoins',
                'Daniel Goleman → Eudémonisme antique',
                'Carl Jung → Individuation et types psychologiques (introversion/extraversion)',
                'William James → Temple de Delphes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Carl Jung est bien l’auteur des concepts d’individuation et de types psychologiques (introversion/extraversion), tandis que Socrate renvoie au « Connais-toi toi-même », Maslow à la pyramide des besoins et Goleman à l’intelligence émotionnelle.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Freud & Blocages',
            stepTheme: 'Nuance',
            stepTitle: 'Situer l’apport de Sigmund Freud sur les blocages psychologiques',
            paragraphText:
              'Dans l’histoire de la psychologie, Sigmund Freud a apporté une clé de lecture complémentaire pour comprendre pourquoi l’on sabote parfois ses propres projets.\n• **Rôle de l’inconscient** : certains freins, peurs irrationnelles ou répétitions d’échecs trouvent leur origine dans des expériences passées non verbalisées.\n• **Utilité pratique** : reconnaître l’existence de blocages internes incite à l’humilité, au travail sur soi et, lorsque nécessaire, au recours à un accompagnement professionnel.\n• **Distinction importante** : le développement personnel (coaching, méthodes d’organisation) accompagne la progression au présent et ne remplace pas un suivi médical ou psychothérapeutique en cas de souffrance profonde.',
            keyRule:
              'Comprendre ses blocages internes éclaire ses choix, mais le développement personnel complète — sans jamais remplacer — un accompagnement clinique si besoin.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Quel apport spécifique attribue-t-on à Sigmund Freud dans l’histoire de la compréhension du comportement humain ?',
              options: [
                'La création des conférences TED Talks',
                'La mise en lumière de l’influence de l’inconscient et des blocages psychologiques sur nos choix et comportements',
                'L’invention de la matrice d’Eisenhower',
                'La formulation de la loi de Pareto 80/20',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sigmund Freud a révélé le rôle de l’inconscient dans nos comportements et nos blocages psychologiques, soulignant l’importance de mieux se connaître pour dépasser ses freins.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch1_p3',
        order: 3,
        title: 'Pyramide de Maslow, intelligence émotionnelle de Goleman et diffusion moderne (TED Talks)',
        summary:
          'Analyser la hiérarchie des 5 besoins d’Abraham Maslow (1943), situer l’essor de l’intelligence émotionnelle (Daniel Goleman), des neurosciences et la démocratisation via Internet et les TED Talks.',
        conceptExplanation:
          'En 1943, le psychologue américain **Abraham Maslow** propose une représentation célèbre de la motivation humaine sous forme de **pyramide à 5 niveaux** : (1) besoins physiologiques (manger, dormir, respirer), (2) sécurité (stabilité, santé, logement), (3) appartenance (famille, amitié, lien social), (4) estime (confiance, reconnaissance, respect), et au sommet (5) **accomplissement de soi / auto-actualisation** (créativité, sens, dépassement).\n\nÀ partir des années 1980–2000, les méthodes deviennent très opérationnelles (coaching, PNL, communication efficace) et **Daniel Goleman** popularise l’**intelligence émotionnelle**, prouvant que la réussite dépend autant de la maîtrise de ses émotions et de l’empathie que du quotient intellectuel (QI).\n\nDepuis les années 2000, les **neurosciences** (plasticité cérébrale, mémoire, attention) valident scientifiquement ces pratiques, tandis qu’Internet, les cours en ligne et les **TED Talks** (*Technology, Entertainment, Design*) démocratisent l’accès mondial au développement personnel.',
        keyRule:
          'Pyramide de Maslow (de bas en haut) : Physiologique → Sécurité → Appartenance → Estime → Auto-actualisation. La réussite durable combine QI + Intelligence Émotionnelle (QE).',
        workedExample: {
          title: 'Diagnostiquer une baisse de motivation étudiante grâce à Maslow',
          statement:
            'Un étudiant en L1 n’arrive plus à se concentrer en amphithéâtre ni à s’investir dans un concours d’innovation : il dort seulement 4 heures par nuit et s’inquiète pour son loyer.',
          methodSteps: [
            'Repérer le niveau touché dans la pyramide de Maslow : le manque de sommeil frappe le niveau 1 (physiologique) et l’inquiétude financière frappe le niveau 2 (sécurité).',
            'Comprendre pourquoi l’auto-actualisation (niveau 5, concours d’innovation) est bloquée tant que la base n’est pas stabilisée.',
            'Prioriser le rétablissement du sommeil et une solution matérielle/organisationnelle avant d’ajouter de nouveaux défis.',
          ],
          conclusion:
            'La pyramide de Maslow rappelle qu’on ne bâtit pas la haute performance intellectuelle sur un épuisement physiologique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Pyramide de Maslow',
            stepTheme: 'Motivation',
            stepTitle: 'Hiérarchiser les 5 niveaux de besoins d’Abraham Maslow (1943)',
            paragraphText:
              'Pourquoi un étudiant affamé ou épuisé peine-t-il à se passionner pour un exposé ? En 1943, Abraham Maslow a modélisé la dynamique de nos besoins en cinq étages.\n• **Base vitale (niveaux 1 & 2)** : besoins **physiologiques** (eau, nourriture, sommeil) puis de **sécurité** (santé, stabilité financière, environnement sûr).\n• **Lien et valeur (niveaux 3 & 4)** : besoins d’**appartenance** (amitié, famille, équipe) puis d’**estime** (respect de soi, reconnaissance, confiance).\n• **Sommet (niveau 5)** : besoin d’**auto-actualisation** (accomplissement de soi, créativité, quête de sens et réalisation de son potentiel).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Pyramide des besoins d’Abraham Maslow (1943)',
              caption: 'Des besoins vitaux à la base jusqu’à l’accomplissement de soi au sommet',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  { badge: '5', title: 'Auto-actualisation', subtitle: 'Accomplissement de soi, créativité, sens', color: 'violet' },
                  { badge: '4', title: 'Estime', subtitle: 'Confiance en soi, réussite, reconnaissance', color: 'blue' },
                  { badge: '3', title: 'Appartenance', subtitle: 'Famille, amitiés, intégration sociale', color: 'green' },
                  { badge: '2', title: 'Sécurité', subtitle: 'Stabilité, santé, logement, protection', color: 'orange' },
                  { badge: '1', title: 'Besoins physiologiques', subtitle: 'Respirer, manger, boire, dormir', color: 'slate' },
                ],
              },
            },
            keyRule:
              'Les besoins de la base (physiologie, sécurité) doivent être suffisamment sécurisés pour libérer durablement l’énergie vers l’estime et l’auto-actualisation.',
            konanTip:
              'Pour mémoriser les 5 étages de Maslow de bas en haut, retiens l’acrostiche P-S-A-E-A : Physiologie, Sécurité, Appartenance, Estime, Auto-actualisation.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Dans la pyramide des besoins d’Abraham Maslow (1943), quel besoin se situe tout au sommet (niveau 5) ?',
              options: [
                'Les besoins physiologiques (manger, dormir)',
                'Le besoin de sécurité matérielle',
                'Le besoin d’auto-actualisation (accomplissement de soi)',
                'Le besoin de repos immédiat',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le sommet de la pyramide de Maslow correspond à l’auto-actualisation (ou accomplissement de soi) : réaliser pleinement son potentiel, sa créativité et ses aspirations.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Daniel Goleman',
            stepTheme: 'QE vs QI',
            stepTitle: 'Comprendre la révolution de l’intelligence émotionnelle (Daniel Goleman)',
            paragraphText:
              'Pendant longtemps, on a cru que le seul quotient intellectuel (QI) et les diplômes techniques suffisaient pour réussir sa carrière.\n• **Apport de Daniel Goleman (années 1990)** : il popularise l’**intelligence émotionnelle (QE)** et démontre que la réussite personnelle et professionnelle dépend fortement de la capacité à reconnaître, comprendre et réguler ses émotions ainsi que celles d’autrui.\n• **Approche holistique** : la performance durable unit savoir-faire technique (*hard skills*) et savoir-être émotionnel et relationnel (*soft skills*).\n• **Exemple concret** : un ingénieur brillant mais incapable d’écouter son équipe ou de garder son calme face à un client échoue plus souvent qu’un collaborateur équilibré et empathique.',
            keyRule:
              'Les compétences techniques ouvrent la porte de l’entretien, mais l’intelligence émotionnelle fait durer et progresser la carrière.',
            konanTip:
              'En entretien d’embauche, tes exemples de gestion calme d’un conflit ou d’écoute client prouvent directement ton intelligence émotionnelle.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Qu’a démontré Daniel Goleman en popularisant le concept d’intelligence émotionnelle dans les années 1990 ?',
              options: [
                'Que les émotions doivent être totalement supprimées au travail',
                'Que la réussite personnelle et professionnelle dépend autant de la compréhension et de la régulation des émotions que des seules capacités intellectuelles (QI)',
                'Que seul le QI détermine le succès d’un manager',
                'Que les compétences techniques ne servent plus à rien',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Daniel Goleman a montré que savoir identifier, réguler ses émotions et faire preuve d’empathie est un facteur déterminant de leadership et de réussite durable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Neurosciences',
            stepTheme: 'Années 2000+',
            stepTitle: 'Mesurer l’apport des neurosciences et de la psychologie cognitive',
            paragraphText:
              'Depuis les années 2000, l’imagerie cérébrale et la psychologie cognitive ont donné au développement personnel des bases expérimentales solides.\n• **Neuroplasticité** : le cerveau n’est pas figé à l’âge adulte ; il crée et renforce des connexions neuronales toute la vie grâce à la pratique régulière et au sommeil.\n• **Apprentissage et attention** : les neurosciences expliquent pourquoi le multitâche permanent (notifications smartphone pendant les révisions) détruit la mémorisation profonde.\n• **Régulation émotionnelle** : des techniques simples comme la respiration lente ou la pleine conscience réduisent concrètement l’activation du circuit de l’alarme (amygdale).',
            konanTip:
              'Grâce à la neuroplasticité, ton cerveau fonctionne comme un muscle : chaque répétition espacée renforce durablement tes circuits de mémoire !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Quel apport majeur les neurosciences ont-elles apporté au développement personnel depuis les années 2000 ?',
              options: [
                'La preuve que le cerveau ne peut plus apprendre après 18 ans',
                'Une compréhension scientifique des mécanismes de mémoire, d’attention, de neuroplasticité et de régulation émotionnelle',
                'Le remplacement complet du sommeil par des boissons énergisantes',
                'L’abandon de toute méthode d’organisation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les neurosciences et la psychologie cognitive éclairent scientifiquement le fonctionnement de l’apprentissage, de la motivation et de la gestion du stress.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'TED Talks',
            stepTheme: 'Diffusion moderne',
            stepTitle: 'Exploiter la démocratisation numérique et les TED Talks',
            paragraphText:
              'Autrefois réservés à des séminaires coûteux, les meilleurs outils de développement personnel sont aujourd’hui accessibles gratuitement depuis un smartphone.\n• **TED Talks (*Technology, Entertainment, Design*)** : conférences courtes (souvent moins de 18 minutes) et percutantes diffusées gratuitement en ligne pour partager des idées inspirantes et fondées.\n• **Écosystème d’auto-formation** : MOOCs, podcasts spécialisés, livres audio et plateformes interactives permettent à chaque étudiant en Afrique de se former au niveau international.\n• **Condition de succès** : passer de la simple consommation passive de vidéos inspirantes à l’application concrète d’au moins une idée dans sa semaine.',
            keyRule:
              'TED signifie Technology, Entertainment, Design : des conférences courtes qui démocratisent les idées inspirantes, à condition de passer à l’action.',
            konanTip:
              'Après avoir regardé un TED Talk inspirant, note immédiatement UNE seule action à tester dans les 24 heures.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Que signifie l’acronyme TED dans les célèbres conférences « TED Talks » ?',
              options: [
                'Time, Energy, Discipline',
                'Technology, Entertainment, Design',
                'Training, Education, Diplomacy',
                'Teamwork, Economy, Development',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TED signifie Technology, Entertainment, Design : ce format de conférences courtes et percutantes a largement contribué à la diffusion mondiale du développement personnel.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Enjeux L1 & Carrière',
            stepTheme: 'Réussite',
            stepTitle: 'Relier développement personnel, réussite universitaire et insertion pro',
            paragraphText:
              'À l’université comme en entreprise, deux étudiants ayant suivi exactement les mêmes cours obtiennent parfois des résultats très différents : la différence se joue souvent dans les compétences transversales.\n• **En vie universitaire** : meilleure gestion du temps, réduction du stress des partiels, confiance à l’oral et efficacité en travaux de groupe.\n• **Dans le monde professionnel** : les employeurs recherchent activement les *soft skills* (leadership, esprit critique, adaptabilité, intelligence émotionnelle, rigueur).\n• **Exemple concret** : dans une fintech d’Abidjan, un stagiaire L1 ponctuel, clair à l’oral et proactif se démarque immédiatement.',
            keyRule:
              'Le développement personnel est un levier stratégique direct de performance académique et d’employabilité.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Qu’appelle-t-on « soft skills » (compétences transversales) dans le monde professionnel moderne ?',
              options: [
                'Les câbles informatiques souples d’un serveur',
                'Les qualités comportementales et relationnelles (gestion du temps, communication, adaptabilité, leadership, intelligence émotionnelle)',
                'Uniquement la vitesse de frappe au clavier',
                'Les diplômes obtenus sans assister aux cours',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les soft skills regroupent le savoir-être et les compétences transversales (communication, leadership, esprit critique, gestion du stress) indispensables en complément du savoir-faire technique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Esprit critique',
            stepTheme: 'Vigilance',
            stepTitle: 'Garder son esprit critique face aux dérives commerciales du bien-être',
            paragraphText:
              'La popularité massive du développement personnel sur les réseaux sociaux attire aussi des discours simplistes ou trompeurs.\n• **Signaux d’alerte** : promesses de richesse instantanée sans effort, culpabilisation excessive (« si tu échoues, c’est juste que tu ne le veux pas assez ») ou rejet de toute nuance scientifique.\n• **Démarche saine** : s’appuyer sur des méthodes éprouvées (SMART, Eisenhower, écoute active, psychologie cognitive), mesurer ses propres progrès et respecter son rythme humain.\n• **Règle d’or** : le vrai développement personnel rend plus libre, plus lucide et plus autonome — jamais dépendant d’un gourou.',
            konanTip:
              'Si une méthode promet un résultat extraordinaire en 48h sans aucun travail régulier, fuis : la vraie progression est progressive et structurée.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Quel critère permet de reconnaître une démarche de développement personnel saine et sérieuse ?',
              options: [
                'Elle promet de devenir millionnaire en trois jours sans aucun effort',
                'Elle développe l’autonomie, s’appuie sur des méthodes réalistes et encourage la régularité et l’esprit critique',
                'Elle interdit de demander conseil à ses proches ou enseignants',
                'Elle affirme que la discipline et l’organisation sont inutiles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une démarche rigoureuse renforce l’autonomie, l’esprit critique et l’action structurée dans la durée, à l’opposé des promesses magiques.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : OBJECTIFS SMART, GESTION DU TEMPS ET DISCIPLINE D'ACTION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_dev_perso_ch2',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Objectifs SMART, gestion du temps et discipline d’action',
    summary:
      'Transformer un rêve en plan d’action discipliné (être maître de son destin), formuler des objectifs SMART, prioriser avec la matrice d’Eisenhower et la loi de Pareto (80/20), vaincre la procrastination (Pomodoro) et s’entourer (binôme, coach, mentor).',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Développement Personnel',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch2_p1',
        order: 1,
        title: 'Maître de son destin : passer du rêve flou à la vision, aux buts et à la discipline',
        summary:
          'Refuser la passivité du destin subi, structurer sa trajectoire en 5 étapes (Rêve → Vision → Buts → Objectifs → Règles), écrire ses rêves et cultiver la discipline et le savoir-être.',
        conceptExplanation:
          'Beaucoup subissent leur vie en la considérant comme un « destin » figé par une force extérieure. Être **maître de son destin** consiste à prendre la barre de son navire : nul ne peut prévoir toutes les tempêtes, mais on peut équiper son navire, choisir son cap et ajuster ses voiles.\n\nComme le rappelle Sénèque : *« Il n’y a point de vent favorable pour celui qui ne sait dans quel port il veut arriver. »* La vie n’est pas un simple entraînement mais un véritable match de championnat où chaque journée de 24 heures écoulée ne revient jamais.\n\nTransformer une aspiration en réussite concrète suit un enchaînement précis en 5 étapes : (1) **Avoir un rêve** et lui donner corps en l’écrivant ; (2) **Clarifier une vision** ; (3) **Fixer des buts** ; (4) **Décliner en objectifs précis** ; (5) **Respecter des règles et une discipline quotidienne** nourrie par le savoir-être (loyauté, courage, ténacité, résilience, courtoisie).',
        keyRule:
          'On ne réussit pas par hasard et on n’échoue pas par malchance : Clarté du cap (Rêve écrit + Vision) + Discipline quotidienne = Maîtrise de son destin.',
        workedExample: {
          title: 'Convertir un rêve vague d’étudiant en trajectoire structurée',
          statement:
            'Un étudiant en L1 dit : « Mon rêve est de réussir dans la tech un jour. » Comment transformer ce souhait flou en cap concret ?',
          methodSteps: [
            'Écrire le rêve précisément : « Devenir chef de projet digital ou fondateur d’une fintech utile en Afrique de l’Ouest. »',
            'Clarifier la vision à 3 ans : obtenir la Licence ENTD avec mention et un portfolio de 3 projets numériques réels.',
            'Fixer un but de semestre et des règles de discipline : 1h de pratique quotidienne (bureautique, veille digitale, anglais), assiduité totale et bilan chaque dimanche.',
          ],
          conclusion:
            'Un rêve écrit et adossé à une discipline quotidienne cesse d’être un vœu pieux pour devenir un projet exécutable.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Maître de son destin',
            stepTheme: 'Posture',
            stepTitle: 'Passer de spectateur passif à capitaine de sa trajectoire',
            paragraphText:
              'Notre existence ressemble à la traversée d’un navire : personne ne peut empêcher les vents contraires, mais le capitaine décide de sa préparation et de son cap.\n• **Destin subi vs destin choisi** : considérer le destin comme une fatalité qui annule notre liberté conduit à l’inaction ; choisir son **attitude** permet d’influencer le cours de son existence.\n• **Irréversibilité du temps** : chaque tranche de 24 heures qui passe appartient définitivement au passé ; la vie est une véritable partie à jouer, pas un brouillon.\n• **Phrase boussole (Sénèque)** : « Il n’y a point de vent favorable pour celui qui ne sait dans quel port il veut arriver. »',
            keyRule:
              'Les personnes qui réussissent refusent d’être simples spectatrices : elles transforment leur attitude et définissent clairement leur port d’arrivée.',
            konanTip:
              'Chaque matin, relis ton cap en 30 secondes : tu éviteras de te laisser embarquer par les urgences des autres.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Que signifie la célèbre maxime « Il n’y a point de vent favorable pour celui qui ne sait dans quel port il veut arriver » dans une démarche personnelle ?',
              options: [
                'Qu’il ne faut jamais travailler lorsqu’il y a du vent',
                'Que sans cap ni objectif clair, il est impossible de tirer parti des opportunités qui se présentent',
                'Que le succès dépend uniquement de la météo économique',
                'Qu’il vaut mieux changer de direction chaque matin',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans destination clairement définie (vision et objectifs), aucune opportunité (« vent favorable ») ne peut être reconnue ni exploitée efficacement.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: '5 étapes du cap',
            stepTheme: 'Architecture',
            stepTitle: 'Enchaîner Rêve → Vision → Buts → Objectifs → Règles de discipline',
            paragraphText:
              'Beaucoup de personnes nourrissent de grands rêves sans jamais les concrétiser, parce qu’elles sautent les étapes intermédiaires entre l’imaginaire et l’action.\n• **1. Avoir un rêve** : oser imaginer une aspiration forte et l’**écrire** pour lui donner corps.\n• **2. Clarifier une vision** : projeter concrètement à quoi ressemblera cette réussite dans 3 à 5 ans.\n• **3. Fixer des buts** : identifier les grandes étapes clés (diplôme, stage, création d’activité).\n• **4. Décliner en objectifs précis** : traduire chaque but en actions mesurables et datées.\n• **5. Respecter des règles** : tenir sa discipline quotidienne même quand l’enthousiasme du début retombe.',
            keyRule:
              'Un rêve non écrit reste un souhait ; un rêve écrit, découpé en objectifs et servi par des règles de discipline devient une réalité.',
            konanTip:
              'Prends 10 minutes aujourd’hui pour écrire tes 3 grands objectifs de l’année universitaire sur papier ou dans Google Docs : le simple fait d’écrire multiplie la clarté !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi est-il recommandé d’écrire son rêve dès qu’il prend forme dans son esprit ?',
              options: [
                'Pour le publier immédiatement sur tous les réseaux sociaux',
                'Pour lui donner corps, clarifier le cap et amorcer le passage de l’imaginaire au plan d’action concret',
                'Parce que la mémoire humaine ne dure que 10 secondes',
                'Pour éviter d’avoir à fournir des efforts ensuite',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Écrire son rêve le sort du flou mental, crée un engagement clair envers soi-même et permet de le découper en vision, buts et objectifs mesurables.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Savoir-être',
            stepTheme: 'Qualités clés',
            stepTitle: 'Cultiver le savoir-être et le mental de champion',
            paragraphText:
              'Votre **savoir-être** regroupe les qualités personnelles et comportementales que vous manifestez aussi bien dans vos études que dans le monde professionnel.\n• **Socle éthique et relationnel** : loyauté, courtoisie, refus de l’égoïsme, respect des engagements et bon relationnel.\n• **Socle d’action et de caractère** : discipline, courage, optimisme réaliste, ténacité, détermination, persévérance et résilience.\n• **Impact concret** : aucun entraîneur, parent ou employeur ne peut jouer la partie à votre place ; votre mental et votre discipline sont vos véritables moteurs.',
            keyRule:
              'Le savoir-être (discipline, loyauté, courtoisie, ténacité, résilience) transforme le potentiel brut en réussite durable.',
            konanTip:
              'Les recruteurs pardonnent souvent une lacune technique que l’on peut former, mais rarement un manque de loyauté, de ponctualité ou de courtoisie.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Comment définit-on exactement le « savoir-être » dans la vie quotidienne et professionnelle ?',
              options: [
                'La liste des logiciels installés sur un ordinateur',
                'L’ensemble des qualités personnelles et comportementales (courtoisie, maîtrise émotionnelle, discipline, résilience, bon relationnel)',
                'Le montant du salaire de départ d’un jeune diplômé',
                'La mémorisation par cœur de dates historiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le savoir-être correspond aux attitudes et qualités comportementales qui régissent notre rapport au travail, aux obstacles et aux autres.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Discipline vs Motivation',
            stepTheme: 'Constance',
            stepTitle: 'Comprendre pourquoi la discipline dépasse la motivation passagère',
            paragraphText:
              'La motivation est une émotion brillante au démarrage d’un projet, mais elle fluctue selon la fatigue, la météo ou les contrariétés.\n• **Limite de la motivation seule** : si vous ne travaillez que les jours où vous vous sentez « inspiré », vos résultats resteront erratiques.\n• **Force de la discipline** : la discipline consiste à exécuter l’action prévue (réviser, rédiger, s’entraîner) même quand l’envie est faible, parce qu’elle sert votre objectif supérieur.\n• **Effet cumulé** : 45 minutes de travail discipliné chaque jour pendant un semestre valent infiniment mieux que 12 heures de panique la veille de l’examen.',
            formula: {
              name: 'Effet cumulé de la régularité (+1 % par jour)',
              formula: '(1 + 0{,}01)^{365} \\approx 37{,}78',
              note: 'De petites améliorations quotidiennes régulières produisent une progression exponentielle sur une année.',
            },
            konanTip:
              'Quand la motivation manque, réduis la marche d’entrée : engage-toi à travailler juste 5 minutes — une fois lancé, l’inertie disparaît !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Pourquoi la discipline est-elle considérée comme plus fiable que la simple motivation émotionnelle pour atteindre un grand objectif ?',
              options: [
                'Parce que la motivation fluctue au gré de l’humeur, tandis que la discipline assure la régularité de l’action même les jours difficiles',
                'Parce que la discipline interdit toute pause ou loisir',
                'Parce que la motivation empêche d’apprendre',
                'Parce que la discipline ne demande aucun objectif clair',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La motivation lance le mouvement, mais seule la discipline maintient l’effort régulier lorsque la fatigue ou les obstacles surviennent.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Plan de DP',
            stepTheme: 'Feuille de route',
            stepTitle: 'Construire son plan personnel de développement (PDP)',
            paragraphText:
              'Un plan de développement personnel (PDP) est la feuille de route écrite qui relie vos priorités actuelles à votre vision d’avenir.\n• **Quatre rubriques simples** : (1) Bilan actuel (forces/axes de progrès), (2) Objectifs prioritaires du trimestre, (3) Actions hebdomadaires et ressources (livres, formations, mentors), (4) Indicateurs de suivi mensuels.\n• **Personnalisation** : il n’existe pas de modèle unique ; votre plan dépend de vos priorités, de vos idéaux et de vos réalités.\n• **Exemple concret** : un étudiant L1 se fixe pour le semestre : valider toutes ses UE sans rattrapage, améliorer son anglais pro et décrocher un stage d’observation.',
            keyRule:
              'Un plan écrit révisé chaque mois transforme de bonnes intentions en progression mesurable.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quel est le rôle principal d’un Plan de Développement Personnel (PDP) écrit ?',
              options: [
                'Copier exactement la vie et les objectifs de son voisin de classe',
                'Formaliser ses priorités, ses objectifs, ses actions concrètes et ses points de suivi pour rester sur la bonne voie',
                'Remplacer définitivement les examens universitaires',
                'Garantir qu’aucun imprévu ne surviendra jamais',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le PDP traduit la vision personnelle en objectifs structurés, actions concrètes et jalons de vérification réguliers.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Jeu sérieux',
            stepTheme: 'Stratégie',
            stepTitle: 'Envisager la vie comme un championnat avec règles, rôles et stratégie',
            paragraphText:
              'Considérer la vie comme un jeu trivial que l’on prend à la légère mène à la négligence ; la voir comme le plus grand des championnats stimule l’exigence et le plaisir de progresser.\n• **Quatre composantes** : des **règles** (sociales, morales, juridiques), des **rôles** à honorer (étudiant, citoyen, professionnel, membre d’une famille), des **choix stratégiques** et des **résultats** (gains, apprentissages, pertes).\n• **Piège à éviter** : croire que la chance ou les relations dispensent de se préparer sérieusement.\n• **Posture gagnante** : se préparer avec honneur, respecter les règles et chercher l’excellence durable.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Dans la métaphore de la vie comme « grand match de championnat », quelle posture caractérise un acteur maître de son destin ?',
              options: [
                'Tricher avec les règles pour gagner rapidement',
                'Se préparer sérieusement, respecter les règles, assumer ses rôles et jouer pleinement sa partie sans attendre que d’autres le fassent à sa place',
                'Rester assis dans les tribunes à critiquer les autres joueurs',
                'Abandonner dès le premier point perdu',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Être maître de son destin signifie s’engager activement avec préparation, éthique et persévérance, car personne ne peut jouer notre vie à notre place.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch2_p2',
        order: 2,
        title: 'Méthode SMART, matrice d’Eisenhower et loi de Pareto (80/20)',
        summary:
          'Formuler des objectifs précis avec la méthode SMART, hiérarchiser ses tâches selon Urgent/Important (matrice d’Eisenhower) et concentrer son effort sur les 20 % d’actions à fort impact (loi de Pareto).',
        conceptExplanation:
          'Trois outils classiques de gestion de soi et du temps font passer de l’agitation stérile à l’efficacité sereine.\n\n1. **La méthode SMART** transforme un souhait vague en objectif exécutable : **S**pécifique (clair et précis), **M**esurable (indicateur chiffré), **A**tteignable (ambitieux mais faisable), **R**éaliste / Pertinent (aligné avec ses ressources et sa vision) et **T**emporellement défini (échéance exacte).\n\n2. **La matrice d’Eisenhower** croise deux axes — **Urgent** et **Important** — en 4 quadrants : Q1 Urgent + Important (**Faire immédiatement**), Q2 Non urgent + Important (**Planifier**, cœur de la réussite durable), Q3 Urgent + Non important (**Déléguer** ou réduire), Q4 Non urgent + Non important (**Éliminer**).\n\n3. **La loi de Pareto (80/20)** observe que souvent environ **20 % des efforts ou des tâches génèrent 80 % des résultats** : identifier ces 20 % décisifs évite de s’épuiser sur des détails secondaires.',
        keyRule:
          'SMART = Spécifique, Mesurable, Atteignable, Réaliste, Temporel. Eisenhower = investir en priorité dans le Quadrant 2 (Important mais pas encore urgent). Pareto = 20 % des actions produisent 80 % des résultats.',
        formulas: [
          {
            name: 'Principe de Pareto (distribution 80/20)',
            formula: '20\\%\\text{ des causes / actions prioritaires} \\;\\approx\\; 80\\%\\text{ des résultats obtenus}',
            note: 'C’est une règle empirique de priorisation (les proportions peuvent être 70/30 ou 90/10 selon les cas).',
          },
        ],
        workedExample: {
          title: 'Transformer un vœu flou en objectif SMART et prioriser sa semaine',
          statement:
            'Un étudiant souhaite « devenir bon en Excel ». Reformuler cet objectif en SMART, puis classer ses 4 tâches de la journée dans la matrice d’Eisenhower.',
          methodSteps: [
            'Formulation SMART : « Maîtriser les 10 fonctions clés d’Excel (SI, RECHERCHEV, TCD) [S] en réalisant 5 exercices pratiques notés > 16/20 [M], avec mes supports et 45 min/jour [A/R], d’ici le 30 mai [T]. »',
            'Eisenhower : rendre le devoir dû ce soir = Q1 (Faire) ; réviser l’examen prévu dans 3 semaines = Q2 (Planifier) ; répondre à une demande non essentielle = Q3 (Déléguer/limiter) ; scroller 2h sans but sur les réseaux = Q4 (Éliminer).',
          ],
          conclusion:
            'L’objectif devient vérifiable à date fixe et la journée se recentre sur ce qui compte vraiment.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Méthode SMART',
            stepTheme: 'Objectifs',
            stepTitle: 'Construire un objectif irréprochable avec les 5 critères SMART',
            paragraphText:
              'Dire « Je veux mieux travailler cette année » ne déclenche aucune action précise : le cerveau a besoin d’une cible nette pour s’activer.\n• **S — Spécifique** : que veux-tu accomplir exactement ? (précis, sans ambiguïté).\n• **M — Mesurable** : quel chiffre ou preuve montrera que c’est réussi ?\n• **A — Atteignable** : le défi est-il motivant tout en restant accessible par ton effort ?\n• **R — Réaliste / Pertinent (*Relevant*)** : est-ce cohérent avec tes moyens, ton emploi du temps et ta vision ?\n• **T — Temporellement défini** : quelle est la date limite exacte ?',
            visualSchema: {
              type: 'flowchart',
              title: 'Vérification d’un objectif par la méthode SMART',
              caption: 'Passer d’un souhait flou à un engagement vérifiable en 5 filtres',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: 'S — Spécifique', sublabel: 'Action précise, sujet clair (Quoi ? Où ?)', kind: 'start', color: 'blue' },
                  { label: 'M — Mesurable', sublabel: 'Indicateur chiffré vérifiable (Combien ?)', kind: 'process', color: 'violet' },
                  { label: 'A — Atteignable & R — Réaliste', sublabel: 'Ambitieux mais cohérent avec vos ressources', kind: 'process', color: 'green' },
                  { label: 'T — Temporellement défini', sublabel: 'Date butoir exacte (Pour quand ?)', kind: 'end', color: 'orange' },
                ],
              },
            },
            keyRule:
              'Un objectif sans indicateur mesurable (M) ni date limite (T) reste un simple souhait.',
            konanTip:
              'Relis toujours ton objectif en vérifiant lettre par lettre S-M-A-R-T avant de le valider dans ton agenda.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Parmi les formulations suivantes, laquelle respecte intégralement les 5 critères de la méthode SMART ?',
              options: [
                '« Je veux devenir très riche un jour »',
                '« Je vais essayer de lire un peu plus souvent »',
                '« Obtenir au moins 14/20 en Algorithmique ce semestre en résolvant 3 exercices pratiques par semaine jusqu’au 15 juin »',
                '« Être le meilleur étudiant de toute l’histoire dès demain matin »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cette formulation est Spécifique (Algorithmique, 3 exercices/semaine), Mesurable (14/20, 3 exercices), Atteignable/Réaliste et Temporellement définie (jusqu’au 15 juin).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Erreur SMART',
            stepTheme: 'Diagnostic',
            stepTitle: 'Repérer les critères manquants dans un objectif mal formulé',
            paragraphText:
              'À l’examen comme en gestion de projet, on teste souvent votre capacité à corriger un objectif incomplet.\n• **Manque de M (Mesurable)** : « Améliorer mon niveau d’anglais d’ici juin » → comment prouver l’amélioration ? Mieux : « Atteindre le niveau B1 ou valider 20 leçons d’anglais pro ».\n• **Manque de T (Temporel)** : « Épargner 150 000 FCFA pour acheter un PC » → en 3 mois ou en 10 ans ? Sans échéance, on reporte sans cesse.\n• **Manque de R (Réaliste)** : « Apprendre 5 langages informatiques en une semaine » → irréaliste, donc source de découragement immédiat.',
            konanTip:
              'Fais toujours le test express « M + T » : y a-t-il un nombre mesurable et une date calendrier précise dans ta phrase ?',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Un étudiant écrit : « Je veux économiser 100 000 FCFA en mettant 10 000 FCFA de côté chaque mois grâce à mon job étudiant. » Quel critère SMART manque encore explicitement ?',
              options: [
                'Le critère Mesurable',
                'Le critère Spécifique',
                'Le critère Temporellement défini (la date précise de début et d’échéance finale)',
                'Aucun critère ne manque',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le montant (100 000 FCFA) et le rythme (10 000 FCFA/mois) sont mesurables, mais il manque une date butoir explicite (ex. « d’ici le 30 novembre ») pour ancrer l’échéance dans le calendrier.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Matrice d’Eisenhower',
            stepTheme: 'Priorisation',
            stepTitle: 'Classer ses tâches avec la matrice d’Eisenhower (Urgent vs Important)',
            paragraphText:
              'Être débordé toute la journée ne signifie pas être efficace : beaucoup confondent ce qui crie fort (**urgent**) avec ce qui construit l’avenir (**important**).\n• **Q1 — Urgent et Important (FAIRE)** : crises, devoirs à rendre aujourd’hui, pannes critiques.\n• **Q2 — Non urgent mais Important (PLANIFIER)** : révisions régulières, sport, projet de carrière, prévention, relations clés — **c’est le quadrant des leaders**.\n• **Q3 — Urgent mais Non important (DÉLÉGUER / RÉDUIRE)** : interruptions, appels non essentiels, certaines demandes d’autrui.\n• **Q4 — Non urgent et Non important (ÉLIMINER)** : distractions stériles, défilement infini sur les réseaux sociaux.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice d’Eisenhower (Gestion des priorités)',
              caption: 'Distinguer l’urgence apparente de l’importance stratégique',
              matrix2x2: {
                topAxis: ['URGENT', 'NON URGENT'],
                leftAxis: ['IMPORTANT', 'NON IMPORTANT'],
                topLeft: {
                  title: 'Q1 — FAIRE immédiatement',
                  items: ['Devoir dû aujourd’hui', 'Urgence santé ou panne', 'Examen de demain'],
                  color: 'orange',
                },
                topRight: {
                  title: 'Q2 — PLANIFIER (Priorité stratégique)',
                  items: ['Révisions régulières', 'Projet pro & réseau', 'Santé, lecture, compétences'],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Q3 — DÉLÉGUER ou limiter',
                  items: ['Sollicitations mineures', 'Réunions sans ordre du jour', 'Notifications non critiques'],
                  color: 'blue',
                },
                bottomRight: {
                  title: 'Q4 — ÉLIMINER',
                  items: ['Scrolling passif sans but', 'Rumeurs et distractions', 'Tâches inutiles'],
                  color: 'slate',
                },
              },
            },
            keyRule:
              'Plus vous investissez de temps dans le Quadrant 2 (Important, non urgent), moins vous subissez de crises stressantes dans le Quadrant 1.',
            konanTip:
              'Ton objectif de la semaine : passer chaque jour au moins 1 heure protégée dans le Quadrant 2 (Important mais pas encore urgent).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Dans la matrice d’Eisenhower, comment doit-on traiter une tâche à la fois **importante** pour votre avenir mais **non urgente** aujourd’hui (ex. préparer un examen prévu dans un mois) ?',
              options: [
                'L’éliminer définitivement',
                'La planifier dans son agenda (Quadrant 2) avant qu’elle ne devienne une urgence stressante',
                'La déléguer à un inconnu',
                'Attendre la veille au soir pour la traiter en urgence',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les tâches importantes mais non urgentes (Quadrant 2) doivent être planifiées proactivement : c’est la clé de la sérénité et de la haute performance.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Loi de Pareto',
            stepTheme: '80 / 20',
            stepTitle: 'Appliquer la loi de Pareto (80/20) pour maximiser son impact',
            paragraphText:
              'Observée par l’économiste italien Vilfredo Pareto, la règle 80/20 révèle que les causes et les résultats ne sont presque jamais répartis de façon égale.\n• **Principe 80/20** : environ **20 % de vos actions produisent 80 % de vos résultats** ; inversement, 80 % des tâches secondaires n’apportent que 20 % de valeur.\n• **Application étudiante** : dans une matière, maîtriser parfaitement les 20 % de concepts et méthodes fondamentaux débloque 80 % des points aux devoirs.\n• **Application entrepreneuriale** : souvent 20 % des clients ou produits génèrent 80 % du chiffre d’affaires d’une PME.',
            formula: {
              name: 'Principe de concentration de Pareto',
              formula: '20\\%\\text{ d’actions à fort levier} \\;\\Longrightarrow\\; 80\\%\\text{ de la valeur produite}',
              note: 'Commencer sa journée par les 1 ou 2 tâches du « top 20 % » garantit une journée productive.',
            },
            konanTip:
              'Avant d’attaquer ta to-do list de 10 tâches, entoure les 2 seules tâches qui, si elles sont finies aujourd’hui, feront vraiment avancer ta semaine !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Que recommande concrètement la loi de Pareto (principe 80/20) dans la gestion du temps ?',
              options: [
                'Ne travailler que 20 minutes par mois',
                'Identifier et prioriser les 20 % d’actions à plus fort levier qui génèrent environ 80 % des résultats',
                'Passer 80 % de son temps sur les détails esthétiques secondaires',
                'Éviter toute planification écrite',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loi de Pareto invite à concentrer en priorité son énergie sur la minorité d’actions décisives (les ~20 %) qui produisent l’essentiel de la valeur (~80 %).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Time-blocking',
            stepTheme: 'Agenda',
            stepTitle: 'Combiner agenda, to-do list courte et blocs de temps dédiés',
            paragraphText:
              'Une to-do list interminable de 25 lignes décourage dès 8 heures du matin ; une planification structurée allège immédiatement la charge mentale.\n• **Règle des 3 priorités du jour** : sélectionner chaque soir 3 tâches majeures maximum pour le lendemain.\n• **Time-blocking (blocs de temps)** : réserver dans Google Agenda des créneaux précis pour vos tâches importantes (ex. « 16h–17h30 : exercices d’analyse ») plutôt que de les laisser flotter.\n• **Équilibre de vie** : une bonne gestion du temps inclut aussi les pauses, le sommeil et les loisirs pour durer toute l’année sans épuisement.',
            keyRule:
              'Ce qui n’est pas planifié dans un créneau d’agenda risque fortement d’être repoussé par les imprévus.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Pourquoi la technique du « time-blocking » (réserver des créneaux précis dans son agenda) est-elle plus efficace qu’une simple liste de tâches sans horaire ?',
              options: [
                'Parce qu’elle protège concrètement le temps nécessaire aux tâches importantes et rend les priorités visibles',
                'Parce qu’elle allonge la journée à 30 heures',
                'Parce qu’elle supprime tous les examens',
                'Parce qu’elle empêche de dormir la nuit',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Attribuer un créneau réel dans l’agenda matérialise l’engagement envers la tâche importante et évite qu’elle soit grignotée par les distractions.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Fausse urgence',
            stepTheme: 'Vigilance',
            stepTitle: 'Éviter le piège du multitâche et des fausses urgences numériques',
            paragraphText:
              'Répondre à chaque notification WhatsApp tout en révisant un cours donne l’illusion d’être actif, mais détruit l’efficacité cognitive.\n• **Coût du changement de contexte** : après une interruption de 30 secondes sur smartphone, le cerveau met souvent plusieurs minutes à retrouver sa concentration profonde.\n• **Fausse urgence (Quadrant 3)** : une notification qui vibre paraît urgente mais est rarement importante sur l’instant.\n• **Solution simple** : activer le mode *Ne pas déranger* pendant les blocs de travail et consulter ses messages par créneaux regroupés (ex. 2 à 3 fois par jour).',
            keyRule:
              'Le monotâche focalisé produit un travail plus rapide et de bien meilleure qualité que le multitâche fragmenté.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quel effet réel a la consultation permanente des notifications smartphone pendant une séance de révision ?',
              options: [
                'Elle double la vitesse de mémorisation profonde',
                'Elle fragmente l’attention et impose un coût cognitif de reconcentration qui ralentit fortement l’apprentissage',
                'Elle renforce automatiquement la discipline',
                'Elle n’a aucun impact mesurable sur la concentration',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque interruption brise l’attention soutenue et oblige le cerveau à reconstruire son fil de pensée, augmentant à la fois la durée et les erreurs.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch2_p3',
        order: 3,
        title: 'Vaincre la procrastination, méthode Pomodoro et accompagnement (binôme, coach, mentor)',
        summary:
          'Comprendre les causes psychologiques de la procrastination, appliquer la méthode Pomodoro (25/5), bâtir des routines productives et distinguer binôme, coach et mentor.',
        conceptExplanation:
          'La **procrastination** — reporter systématiquement au lendemain une tâche importante alors qu’on sait que ce retard nous nuira — n’est pas de la simple paresse : c’est le plus souvent un mécanisme émotionnel d’évitement (peur de l’échec, perfectionnisme paralysant, tâche perçue comme trop énorme ou trop floue).\n\nPour briser ce blocage, deux techniques simples font des merveilles : le **découpage en micro-étapes** (règle des 2 à 5 minutes) et la **méthode Pomodoro** (cycles de 25 minutes de concentration intense sans distraction suivis de 5 minutes de pause, avec une pause longue de 15–30 minutes après 4 cycles).\n\nEnfin, pour maintenir sa constance sur la durée, l’accompagnement humain joue un rôle majeur : le **binôme** (pair qui avance avec vous et vous soutient), le **coach** (professionnel qui vous questionne pour clarifier et atteindre un objectif précis sur une durée définie) et le **mentor** (personne expérimentée ayant déjà réussi le chemin que vous visez et qui partage ses enseignements).',
        keyRule:
          'Procrastination = gestion d’une émotion désagréable, pas simple paresse. Antidote : découper la tâche + lancer un Pomodoro (25 min / 5 min) + s’appuyer sur un binôme ou un mentor.',
        formulas: [
          {
            name: 'Cycle standard de la méthode Pomodoro',
            formula: '4 \\times (25\\text{ min focus} + 5\\text{ min pause}) \\;\\longrightarrow\\; 15\\text{ à }30\\text{ min grande pause}',
            note: 'Un cycle complet dure 2 heures et produit 100 minutes de concentration profonde réelle.',
          },
        ],
        workedExample: {
          title: 'Débloquer un rapport de 10 pages repoussé depuis deux semaines',
          statement:
            'Un étudiant bloque devant son ordinateur à l’idée de rédiger son rapport de 10 pages et passe une heure à ranger son bureau à la place.',
          methodSteps: [
            'Identifier la cause : la tâche « écrire 10 pages » paraît trop massive et anxiogène.',
            'Découper en micro-action de 5 minutes : « Ouvrir Google Docs et écrire uniquement les 4 grands titres du plan. »',
            'Mettre le téléphone en mode avion et lancer 1 Pomodoro de 25 minutes consacré uniquement à l’introduction, suivi de 5 minutes de pause loin de l’écran.',
          ],
          conclusion:
            'Le passage à l’action sur une micro-tâche dissipe l’anxiété initiale et enclenche la dynamique de rédaction.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Procrastination',
            stepTheme: 'Psychologie',
            stepTitle: 'Comprendre les vraies causes émotionnelles de la procrastination',
            paragraphText:
              'Traiter un procrastinateur de « paresseux » ne résout jamais le problème, car la procrastination est avant tout une fuite face à une émotion inconfortable.\n• **Les 3 moteurs cachés** : la **peur de l’échec** (ou du jugement), le **perfectionnisme** (« si ce n’est pas parfait, je ne commence pas ») et le **flou de la tâche** (le cerveau fuit ce qui paraît trop gros ou mal défini).\n• **Cercle vicieux** : on évite la tâche → soulagement immédiat de 10 minutes → culpabilité et stress accrus → encore plus d’évitement.\n• **Clé de sortie** : remplacer l’exigence de perfection par l’action imparfaite immédiate (« Fait vaut mieux que parfait non commencé »).',
            keyRule:
              'La procrastination est un problème de régulation émotionnelle face à une tâche perçue comme anxiogène, floue ou trop vaste.',
            konanTip:
              'Si tu procrastines sur une tâche, demande-toi aussitôt : « Est-ce qu’elle me fait peur, ou est-ce qu’elle est juste trop floue ? »',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Selon la psychologie comportementale, quelle est l’une des causes les plus fréquentes de la procrastination ?',
              options: [
                'Un excès de clarté et de simplicité dans la tâche',
                'L’évitement émotionnel lié à la peur de l’échec, au perfectionnisme ou à une tâche perçue comme trop vaste et floue',
                'Le fait d’avoir dormi 8 heures la nuit précédente',
                'L’utilisation d’un agenda structuré',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On procrastine rarement par simple paresse, mais pour éviter l’inconfort émotionnel provoqué par une tâche floue, intimidante ou soumise au perfectionnisme.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Méthode Pomodoro',
            stepTheme: 'Focus',
            stepTitle: 'Appliquer la technique Pomodoro (25 min de focus / 5 min de pause)',
            paragraphText:
              'Inventée par Francesco Cirillo à l’aide d’un minuteur de cuisine en forme de tomate (*pomodoro*), cette méthode rend le démarrage presque sans douleur.\n• **Étape 1** : choisir **une seule tâche** précise et écarter toute distraction (notifications coupées).\n• **Étape 2** : lancer un minuteur de **25 minutes** de travail continu et concentré.\n• **Étape 3** : prendre **5 minutes de vraie pause** (s’étirer, boire de l’eau, sans scroller sur son téléphone).\n• **Étape 4** : après **4 cycles**, s’accorder une pause plus longue de **15 à 30 minutes** pour recharger le cerveau.',
            formula: {
              name: 'Structure d’une session Pomodoro',
              formula: '1\\text{ Pomodoro} = 25\\text{ min focus} + 5\\text{ min pause}',
              note: 'En 4 cycles (2h), vous accomplissez 1h40 de travail profond sans fatigue mentale excessive.',
            },
            konanTip:
              'Si une idée parasite te vient pendant tes 25 minutes (« Penser à payer la facture »), note-la vite sur un post-it et reviens immédiatement à ta tâche !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Quelle est la cadence classique d’un cycle de la méthode Pomodoro ?',
              options: [
                '3 heures sans pause suivies de 2 minutes de repos',
                '25 minutes de concentration exclusive sur une tâche suivies de 5 minutes de pause (puis une grande pause après 4 cycles)',
                '5 minutes de travail suivies de 25 minutes sur les réseaux sociaux',
                'Travailler toute la nuit uniquement la veille des examens',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La méthode Pomodoro alterne des blocs courts de 25 minutes de focus total et 5 minutes de récupération, avec une pause longue de 15 à 30 minutes tous les 4 cycles.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Découpage',
            stepTheme: 'Passage à l’action',
            stepTitle: 'Briser l’inertie avec le découpage en micro-tâches et la règle des 2 minutes',
            paragraphText:
              'Un mur de 10 mètres semble infranchissable ; un escalier de 50 petites marches se monte sans panique.\n• **Découpage** : transformer « Réviser toute la comptabilité » en « Relire les 3 définitions du bilan (15 min) puis faire 2 écritures d’application (15 min) ».\n• **Règle des 2 minutes (David Allen)** : si une petite action prend moins de 2 minutes (envoyer un mail de confirmation, classer un PDF), faites-la immédiatement au lieu de l’accumuler.\n• **Environnement favorable** : préparer son bureau et ses supports la veille réduit à zéro la friction du démarrage le matin.',
            keyRule:
              'Plus la première étape d’une tâche est petite et concrète, plus le cerveau accepte facilement de démarrer.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle action illustre le mieux la technique du découpage anti-procrastination face à un gros exposé à préparer ?',
              options: [
                'Écrire sur sa liste « Finir tout l’exposé ce soir » et attendre minuit',
                'Découper le projet en micro-étapes concrètes : choisir le plan (15 min), rassembler 3 sources (20 min), rédiger 3 slides (25 min)',
                'Attendre d’être soudainement inspiré trois jours après la date limite',
                'Demander à quelqu’un d’autre de faire tout le travail',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Découper un gros projet en petites actions datées et concrètes supprime l’effet paralysant et facilite l’entrée immédiate dans l’action.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Binôme, Coach, Mentor',
            stepTheme: 'Accompagnement',
            stepTitle: 'Distinguer les rôles du binôme, du coach et du mentor',
            paragraphText:
              'Bien que le développement personnel parte de soi, s’appuyer sur les bons alliés multiplie les chances d’aller au bout de ses projets.\n• **Le binôme (partenaire de responsabilité)** : un ami, camarade ou collègue qui poursuit un objectif proche (réviser, faire du sport, coder) ; on se motive et on se rend compte mutuellement.\n• **Le coach** : un professionnel qui vous accompagne sur un objectif et une durée définis en amont, en posant des questions puissantes pour libérer vos propres solutions.\n• **Le mentor** : une personne plus expérimentée qui a déjà parcouru et réussi le chemin que vous visez, et qui partage généreusement son vécu et ses conseils.',
            keyRule:
              'Binôme = avancer ensemble d’égal à égal ; Coach = méthode et questionnement ciblé ; Mentor = partage d’expérience d’un aîné ayant déjà réussi ce chemin.',
            konanTip:
              'N’hésite pas à solliciter respectueusement un étudiant de L3/Master ou un professionnel bienveillant comme mentor : la plupart aiment transmettre.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle définition correspond exactement au rôle d’un « mentor » dans une démarche de développement personnel ou professionnel ?',
              options: [
                'Une personne expérimentée qui a déjà emprunté et réussi le chemin que vous visez et qui vous guide par ses enseignements',
                'Un camarade qui fait vos devoirs à votre place',
                'Un logiciel qui bloque votre téléphone',
                'Un critique anonyme sur Internet',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le mentor est une figure expérimentée ayant déjà parcouru le chemin visé, qui transmet son retour d’expérience — et à terme, chacun peut devenir mentor à son tour.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Routines productives',
            stepTheme: 'Habitudes',
            stepTitle: 'Ancrer une routine productive durable (signal → action → récompense)',
            paragraphText:
              'Une bonne routine économise votre volonté chaque jour en transformant les comportements utiles en automatismes.\n• **Boucle de l’habitude** : associer un **signal** fixe (ex. « juste après le petit-déjeuner ») à une **action** courte (« 20 minutes de révision ») suivie d’une **récompense** saine (cocher sa case de suivi, pause café/musique).\n• **Constance plutôt qu’intensité** : mieux vaut tenir 30 minutes cinq fois par semaine toute l’année que 6 heures une seule fois puis abandonner.\n• **Bilan hebdomadaire** : 15 minutes chaque dimanche pour célébrer ses réussites, ajuster la semaine suivante et garder le cap.',
            konanTip:
              'Règle du « ne jamais rater deux fois de suite » : si un imprévu te fait manquer ta routine mardi, reprends impérativement mercredi pour ne pas casser la chaîne !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle stratégie favorise le plus solidement l’ancrage d’une nouvelle habitude d’étude quotidienne ?',
              options: [
                'Changer d’horaire et de lieu tous les jours au hasard',
                'Associer l’action à un déclencheur quotidien fixe, commencer modestement et célébrer sa régularité',
                'S’imposer immédiatement 8 heures de travail supplémentaires dès le premier soir',
                'Ne jamais faire de bilan hebdomadaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ancrer une habitude sur un signal quotidien stable et une taille réaliste permet au cerveau de l’automatiser sans épuiser la volonté.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Épuisement',
            stepTheme: 'Équilibre',
            stepTitle: 'Éviter le piège de la sur-productivité et respecter la récupération',
            paragraphText:
              'Confondre discipline et épuisement permanent est une erreur dangereuse : un cerveau privé de sommeil et de repos perd sa créativité et sa mémoire.\n• **Rôle du sommeil** : c’est pendant le sommeil profond que le cerveau consolide les connaissances apprises dans la journée.\n• **Pauses actives** : marcher, s’hydrater, pratiquer un sport ou voir ses proches recharge réellement la batterie mentale.\n• **Discipline équilibrée** : savoir dire « stop » à l’heure prévue fait partie intégrante d’une gestion du temps mature.',
            keyRule:
              'Le repos et le sommeil ne sont pas du temps perdu : ce sont les conditions biologiques de la mémoire et de la performance durable.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi faire une nuit blanche systématique avant un examen est-il généralement contre-productif selon les sciences cognitives ?',
              options: [
                'Parce que le sommeil est indispensable à la consolidation de la mémoire et à la clarté de raisonnement le lendemain',
                'Parce que les examens sont interdits aux étudiants fatigués',
                'Parce que la nuit le cerveau efface tout ce qui a été appris dans l’année',
                'Parce que réviser de jour est impossible',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le manque de sommeil altère la concentration, la logique et la restitution des connaissances, alors que le sommeil consolide les apprentissages de la journée.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : GESTION DU STRESS, CONFIANCE EN SOI ET INTELLIGENCE ÉMOTIONNELLE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_dev_perso_ch3',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Gestion du stress, confiance en soi et intelligence émotionnelle',
    summary:
      'Comprendre les mécanismes du stress et les techniques de régulation, déployer les 5 composantes de l’intelligence émotionnelle (Goleman), distinguer estime de soi et confiance en soi (Valeur personnelle, Fenêtre de Johari) et adopter le Growth Mindset (Carol Dweck) et la résilience.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Développement Personnel',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch3_p1',
        order: 1,
        title: 'Mécanismes du stress, techniques de régulation et les 5 piliers de Goleman',
        summary:
          'Distinguer bon stress mobilisateur et stress chronique, appliquer respiration contrôlée, ancrage et préparation, et maîtriser les 5 composantes de l’intelligence émotionnelle selon Daniel Goleman.',
        conceptExplanation:
          'Le **stress** est une réaction biologique naturelle d’adaptation face à un enjeu ou une menace perçue (libération d’adrénaline puis de cortisol). À dose modérée et ponctuelle (*eustress*), il aiguise la vigilance avant un exposé ou un examen ; devenu chronique ou excessif (*distress*), il bloque la mémoire, dégrade le sommeil et provoque des réactions impulsives.\n\nPour réguler efficacement le stress, quatre leviers se complètent : la **respiration contrôlée** (cohérence cardiaque : 5 s d’inspiration / 5 s d’expiration), l’**ancrage sensoriel** dans l’instant présent, la **visualisation positive** et surtout la **préparation progressive** en amont.\n\nCette maîtrise s’inscrit dans l’**intelligence émotionnelle** structurée par **Daniel Goleman** en **5 composantes** : (1) conscience de soi émotionnelle, (2) maîtrise de soi (autorégulation), (3) motivation intrinsèque, (4) empathie (comprendre les émotions d’autrui) et (5) compétences sociales (relations constructives).',
        keyRule:
          'Les 5 piliers de Goleman : Conscience de soi → Maîtrise de soi → Motivation → Empathie → Compétences sociales. On ne supprime pas le stress : on le régule par la respiration et la préparation.',
        formulas: [
          {
            name: 'Protocole de cohérence cardiaque (3-6-5)',
            formula: '3\\text{ fois/jour} \\;\\;\\bullet\\;\\; 6\\text{ respirations/min (5 s inspir + 5 s expir)} \\;\\;\\bullet\\;\\; 5\\text{ minutes}',
            note: 'Ralentit le rythme cardiaque et active le système nerveux parasympathique (retour au calme) en 3 à 5 minutes.',
          },
        ],
        workedExample: {
          title: 'Gérer le trac 10 minutes avant une soutenance orale en L1',
          statement:
            'Votre cœur bat vite et vos mains tremblent juste avant de passer devant le jury pour soutenir votre projet numérique. Quel protocole appliquer ?',
          methodSteps: [
            'Identifier l’émotion sans paniquer (conscience de soi) : « C’est de l’adrénaline normale parce que cet oral compte pour moi. »',
            'Pratiquer 3 minutes de respiration lente (inspirer 4–5 s par le nez, expirer lentement 5–6 s par la bouche) pour abaisser le rythme cardiaque.',
            'S’ancrer physiquement (pieds bien à plat, épaules relâchées) et visualiser les 30 premières secondes de son introduction parfaitement maîtrisées.',
          ],
          conclusion:
            'La respiration lente et l’ancrage transforment le trac paralysant en énergie calme et communicative.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mécanisme du stress',
            stepTheme: 'Biologie',
            stepTitle: 'Distinguer le stress mobilisateur (eustress) du stress chronique (distress)',
            paragraphText:
              'Le stress n’est pas un défaut de caractère : c’est un mécanisme physiologique d’adaptation qui prépare le corps à relever un défi.\n• **Eustress (bon stress)** : activation ponctuelle avant un match, un examen ou un entretien ; il augmente la vigilance, la réactivité et la concentration.\n• **Distress (stress excessif ou chronique)** : survient quand la pression dure trop longtemps ou dépasse les ressources perçues ; il entraîne blocage mental, irritabilité, troubles du sommeil et épuisement.\n• **Signaux d’alerte** : tensions dans la nuque, souffle court, ruminations nocturnes ou difficulté à décider calmement.',
            keyRule:
              'L’objectif n’est pas « zéro stress », mais de rester dans la zone de mobilisation maîtrisée et d’éviter le stress chronique.',
            konanTip:
              'Observe tes propres signaux précoces de stress (épaules tendues, respiration haute) pour agir avant que le distress ne s’installe.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle différence sépare le stress mobilisateur ponctuel (eustress) du stress chronique excessif (distress) ?',
              options: [
                'L’eustress stimule ponctuellement la vigilance et la performance, tandis que le distress prolongé épuise l’organisme et altère la concentration',
                'L’eustress survient uniquement la nuit et le distress uniquement le matin',
                'Le distress améliore toujours la mémoire à long terme',
                'Il n’existe aucune différence physiologique ni psychologique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un stress modéré et ponctuel mobilise l’énergie face à un enjeu, alors qu’un stress intense ou durable (distress) dégrade la clarté mentale et la santé.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Respiration & Ancrage',
            stepTheme: 'Régulation',
            stepTitle: 'Utiliser la respiration contrôlée, l’ancrage et la préparation anti-stress',
            paragraphText:
              'Lorsque l’anxiété monte, dire « calme-toi ! » ne marche presque jamais ; il faut passer par le corps et l’organisation.\n• **Respiration contrôlée (cohérence cardiaque)** : inspirer calmement 5 secondes par le nez, expirer 5 secondes par la bouche pendant 3 à 5 minutes ; l’expiration longue envoie un signal physiologique de sécurité au cerveau.\n• **Ancrage sensoriel** : sentir ses deux pieds posés sur le sol, relâcher la mâchoire et les épaules pour sortir des pensées catastrophistes.\n• **Préparation progressive** : planifier ses révisions en amont supprime 70 % du stress lié aux examens et aux délais serrés.',
            formula: {
              name: 'Rythme respiratoire d’apaisement',
              formula: '5\\text{ s inspiration} + 5\\text{ s expiration} = 6\\text{ cycles/minute}',
              note: 'Pratiquer 3 à 5 minutes avant un devoir ou une prise de parole réduit nettement le trac.',
            },
            konanTip:
              'Juste avant de retourner ta feuille d’examen, prends 3 grandes respirations lentes en expirant plus longtemps que tu n’inspires : ton cerveau retrouve immédiatement accès à sa mémoire !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi la respiration lente avec expiration prolongée (type cohérence cardiaque) calme-t-elle rapidement le stress avant un examen ?',
              options: [
                'Parce qu’elle augmente le taux d’adrénaline',
                'Parce qu’elle ralentit le rythme cardiaque et active le système nerveux parasympathique chargé du retour au calme',
                'Parce qu’elle fait oublier le sujet de l’examen',
                'Parce qu’elle remplace totalement les révisions',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La respiration lente et régulière agit directement sur le système nerveux autonome en freinant l’alarme physiologique et en restaurant la clarté cognitive.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: '5 piliers de Goleman',
            stepTheme: 'Intelligence émotionnelle',
            stepTitle: 'Maîtriser les 5 composantes de l’intelligence émotionnelle (Goleman)',
            paragraphText:
              'Daniel Goleman a structuré l’intelligence émotionnelle en cinq compétences complémentaires — trois tournées vers soi, deux tournées vers les autres.\n• **1. Conscience de soi** : reconnaître et nommer précisément ce que l’on ressent sur le moment (colère, peur, frustration, joie).\n• **2. Maîtrise de soi (autorégulation)** : gérer ses impulsions et choisir une réponse réfléchie plutôt qu’une réaction à chaud.\n• **3. Motivation intrinsèque** : s’engager avec persévérance vers ses objectifs au-delà des récompenses immédiates.\n• **4. Empathie** : percevoir et comprendre les émotions et le point de vue d’autrui.\n• **5. Compétences sociales** : communiquer, coopérer, inspirer et résoudre les conflits sereinement.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Les 5 composantes de l’intelligence émotionnelle (Daniel Goleman)',
              caption: 'Des fondations intérieures (soi) vers l’impact relationnel (les autres)',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: '5 — Autrui', title: 'Compétences sociales', subtitle: 'Communication, coopération, leadership, gestion de conflit', color: 'violet' },
                  { badge: '4 — Autrui', title: 'Empathie', subtitle: 'Comprendre les émotions, besoins et perspectives des autres', color: 'blue' },
                  { badge: '3 — Soi', title: 'Motivation intrinsèque', subtitle: 'Persévérance, optimisme réaliste, goût du progrès', color: 'green' },
                  { badge: '2 — Soi', title: 'Maîtrise de soi', subtitle: 'Régulation des impulsions, calme sous pression', color: 'orange' },
                  { badge: '1 — Soi', title: 'Conscience de soi', subtitle: 'Identifier et nommer ses propres émotions et déclencheurs', color: 'slate' },
                ],
              },
            },
            keyRule:
              'On ne peut pas maîtriser une émotion qu’on n’a pas d’abord reconnue (Conscience de soi → Maîtrise de soi → Empathie → Compétences sociales).',
            konanTip:
              'Pour retenir les 5 piliers de Goleman : 3 pour Soi (Conscience, Maîtrise, Motivation) + 2 pour Autrui (Empathie, Compétences sociales).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Dans le modèle de Daniel Goleman, quelle composante consiste à percevoir et comprendre les émotions ainsi que le point de vue de son interlocuteur ?',
              options: [
                'L’empathie',
                'L’impulsivité',
                'La procrastination',
                'L’enveloppement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’empathie est la quatrième composante de l’intelligence émotionnelle chez Goleman : elle permet de comprendre le vécu émotionnel d’autrui sans jugement hâtif.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Pause des 6 secondes',
            stepTheme: 'Autorégulation',
            stepTitle: 'Éviter les réactions impulsives grâce à l’espace entre stimulus et réponse',
            paragraphText:
              'Un message agressif sur un groupe WhatsApp ou une remarque injuste en réunion peut déclencher en une fraction de seconde une réponse que vous regretterez pendant des mois.\n• **Principe de régulation** : entre le stimulus (la provocation) et votre réponse, il existe un espace de liberté où vous choisissez votre réaction.\n• **Règle de la pause** : ne jamais répondre à chaud sous le coup de la colère ; respirer, relire au calme (voire attendre 15 minutes ou le lendemain pour un e-mail tendu).\n• **Bénéfice** : vous protégez votre crédibilité, votre e-réputation et la qualité de la relation.',
            konanTip:
              'Règle d’or pro : si tu écris un message en colère, rédige-le en brouillon sans destinataire et relis-le 20 minutes plus tard avant d’envoyer !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Un camarade vous accuse injustement d’un retard sur le groupe WhatsApp du projet. Quelle réaction démontre une forte maîtrise de soi (autorégulation) ?',
              options: [
                'L’insulter immédiatement en majuscules devant tout le groupe',
                'Prendre quelques minutes pour respirer, puis répondre calmement avec des faits précis ou proposer un échange direct constructif',
                'Quitter le groupe et effacer le dossier Google Drive commun',
                'Diffuser une capture d’écran moqueuse sur les réseaux sociaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’autorégulation consiste à différer la réaction impulsive pour répondre de façon calme, factuelle et orientée solution.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Visualisation',
            stepTheme: 'Préparation mentale',
            stepTitle: 'Utiliser la visualisation positive pour préparer les moments décisifs',
            paragraphText:
              'Les sportifs de haut niveau comme les grands orateurs s’entraînent autant mentalement que physiquement.\n• **Principe** : fermer les yeux 3 minutes et se représenter en détail le déroulement réussi de l’épreuve (posture calme, voix posée, enchaînement clair des idées, gestion sereine d’une question difficile).\n• **Effet neuropsychologique** : la répétition mentale familiarise le cerveau avec la situation et réduit l’effet de surprise le jour J.\n• **Condition indispensable** : la visualisation complète la préparation réelle (révisions, répétitions à voix haute), elle ne la remplace jamais.',
            keyRule:
              'Visualisation mentale + répétition concrète = baisse drastique de l’anxiété de performance.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Dans quel cadre la visualisation positive est-elle réellement efficace avant un oral ou un entretien ?',
              options: [
                'En remplaçant complètement les révisions et la préparation du sujet',
                'En complément d’une préparation sérieuse, pour habituer mentalement le cerveau à une posture calme et maîtrisée',
                'Uniquement si l’on ne prépare aucun support',
                'En imaginant uniquement les pires scénarios catastrophes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La visualisation positive amplifie les effets d’une préparation concrète en créant des repères mentaux apaisants pour le jour J.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Émotions utiles',
            stepTheme: 'Lucidité',
            stepTitle: 'Ne pas diaboliser ses émotions : apprendre à décoder leur message',
            paragraphText:
              'Il n’existe pas d’émotions « interdites » : chaque émotion est un tableau de bord qui signale un besoin important.\n• **La peur** signale un besoin de sécurité ou de préparation supplémentaire.\n• **La colère** signale qu’une limite ou une valeur importante a été franchie.\n• **La tristesse** signale une perte ou un besoin de réconfort et de recul.\n• **Piège à éviter** : refouler systématiquement ses émotions finit par provoquer des explosions ou du stress somatique ; les reconnaître calmement permet d’agir intelligemment.',
            keyRule:
              'Une émotion est une information, jamais un ordre : on l’écoute pour identifier le besoin, puis on choisit une action constructive.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'En intelligence émotionnelle, comment doit-on considérer une émotion désagréable comme la peur ou la colère ?',
              options: [
                'Comme une faiblesse honteuse à nier à tout prix',
                'Comme un signal d’information indiquant un besoin (sécurité, préparation, respect d’une limite) à décoder avant d’agir',
                'Comme un ordre immédiat de crier ou de fuir',
                'Comme la preuve d’un manque d’intelligence intellectuelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque émotion remplit une fonction adaptative : l’accueillir et la nommer permet de comprendre le besoin sous-jacent et de choisir une réponse proportionnée.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch3_p2',
        order: 2,
        title: 'Estime de soi vs confiance en soi, valeur personnelle et fenêtre de Johari',
        summary:
          'Distinguer rigoureusement estime de soi (écart Moi réel / Moi idéal) et confiance en soi (croyance contextualisée en ses capacités), utiliser le carnet de valeur personnelle et construire sa fenêtre de Johari (Luft & Ingham).',
        conceptExplanation:
          'On confond souvent estime de soi et confiance en soi, alors qu’elles désignent deux réalités psychologiques distinctes et complémentaires.\n\nL’**estime de soi** est le jugement de valeur global que l’on porte sur sa propre personne ; elle est liée à l’écart entre le **Moi réel** (ce que l’on pense être) et le **Moi idéal** (ce que l’on aimerait être) sur l’apparence, le caractère, les capacités et les croyances. Pour la maintenir élevée, il est essentiel de vivre en conformité avec ses valeurs.\n\nLa **confiance en soi** est la croyance forte en ses capacités à faire face à une **situation donnée** : elle est **contextualisée** (on peut être très confiant en informatique et peu confiant en prise de parole), temporaire et se construit par l’expérience accumulée et la difficulté graduée.\n\nDeux outils concrets permettent de les renforcer : (1) la **valeur personnelle** (carnet de réalisations + déclarations positives à la première personne « Je suis… » répétées au moins 5 fois par jour) et (2) la **fenêtre de Johari** (Joseph Luft & Harry Ingham), qui croise ce que je connais de moi et ce que les autres perçoivent en **4 zones** : **Publique**, **Aveugle**, **Cachée** et **Inconnue**.',
        keyRule:
          'Estime de soi = valeur globale (Moi réel vs Moi idéal, alignement avec ses valeurs). Confiance en soi = capacité dans un contexte donné (bâtie par l’action graduée). Fenêtre de Johari = zones Publique, Aveugle, Cachée, Inconnue.',
        workedExample: {
          title: 'Appliquer l’outil « Valeur personnelle » et le diagnostic Johari',
          statement:
            'Une étudiante doute de sa valeur avant de postuler à un stage en communication digitale. Comment utiliser concrètement ces deux outils ?',
          methodSteps: [
            'Carnet de valeur personnelle : noter 5 réussites fières (ex. obtention du Bac, organisation d’un événement associatif, maîtrise rapide de Canva/Drive).',
            'Formuler 2 déclarations positives en « Je » : « Je suis persévérante et capable d’apprendre vite » et les répéter 5 fois/jour pour nourrir son supporter intérieur.',
            'Diagnostic Johari : choisir 6 qualités/défauts et demander à 5 proches/camarades d’en choisir 6 pour découvrir sa zone aveugle (qualités insoupçonnées ou petits tics à corriger).',
          ],
          conclusion:
            'La combinaison du carnet de réussites et du feedback extérieur ancre une estime lucide et une confiance réaliste.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Estime de soi',
            stepTheme: 'Moi réel / idéal',
            stepTitle: 'Définir l’estime de soi : écart entre Moi réel et Moi idéal',
            paragraphText:
              'L’estime de soi répond à la question profonde : « Quelle valeur est-ce que je m’accorde en tant que personne ? ».\n• **Mécanisme** : elle résulte de l’écart entre le **Moi réel** (ce que nous pensons être aujourd’hui) et le **Moi idéal** (ce que nous aspirons à être), évalué sur quatre dimensions : apparence, caractère, capacités et croyances.\n• **Évolution constante** : chaque action alignée avec nos valeurs renforce notre estime ; à l’inverse, trahir ses propres valeurs crée un malaise intérieur.\n• **Clé de maintien** : rester fidèle à ses valeurs profondes et se fixer un Moi idéal exigeant mais humainement atteignable.',
            keyRule:
              'Une haute estime de soi se nourrit de l’alignement quotidien entre vos actions réelles et vos valeurs profondes.',
            konanTip:
              'Pour renforcer ton estime de soi cette semaine, tiens une promesse précise que tu t’es faite à toi-même (même petite).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Comment se définit fondamentalement l’estime de soi ?',
              options: [
                'Le nombre d’abonnés sur un compte Instagram',
                'Le jugement de valeur global porté sur soi, lié à l’écart entre le Moi réel et le Moi idéal et à la conformité avec ses valeurs',
                'La capacité technique à réparer un ordinateur',
                'Le fait de ne jamais reconnaître aucune erreur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’estime de soi est une appréciation globale de sa valeur personnelle, proportionnelle à la cohérence entre le Moi réel, le Moi idéal et ses valeurs.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Confiance en soi',
            stepTheme: 'Action graduée',
            stepTitle: 'Distinguer la confiance en soi (contextualisée) de l’estime de soi',
            paragraphText:
              'Alors que l’estime de soi concerne « qui je suis », la confiance en soi concerne « ce que je me sens capable de faire dans cette situation précise ».\n• **Contextualisée et temporaire** : on peut avoir une grande confiance en soi pour rédiger un tableau Excel et manquer de confiance pour parler devant 100 personnes ; une mauvaise expérience peut la fragiliser temporairement.\n• **Comment la bâtir** : en acquérant de nouveaux savoirs, savoir-faire et savoir-être, tout en **graduant la difficulté** (petits défis réussis → défis moyens → grands défis) et en ajustant selon les retours.\n• **Exemple concret** : pour gagner confiance à l’oral, commencer par intervenir devant 4 camarades, puis devant la classe, puis devant un jury.',
            keyRule:
              'La confiance en soi ne se décrète pas devant un miroir : elle se construit par l’expérience accumulée et des défis de difficulté graduée.',
            konanTip:
              'Retiens le duo : Estime de soi = « Je vaux quelque chose » (global) ; Confiance en soi = « Je peux réussir cette tâche précise » (contextualisé).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi dit-on que la confiance en soi est « contextualisée » et comment se développe-t-elle le plus solidement ?',
              options: [
                'Elle dépend du domaine concerné et se renforce en acquérant des compétences par des défis de difficulté graduée',
                'Elle est identique dans absolument tous les domaines dès la naissance',
                'Elle ne peut jamais être modifiée par l’expérience',
                'Elle s’acquiert en évitant toute situation nouvelle',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La confiance en soi repose sur l’expérience accumulée dans un domaine précis et progresse grâce à l’acquisition de compétences par étapes de difficulté graduée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Valeur personnelle',
            stepTheme: 'Outil 1',
            stepTitle: 'Pratiquer l’outil de la « valeur personnelle » (carnet + déclarations en Je)',
            paragraphText:
              'Notre cerveau mémorise spontanément nos erreurs trois fois plus vite que nos réussites : l’outil de la valeur personnelle rééquilibre ce biais.\n• **Étape 1 — Carnet de réalisations** : recenser dans un carnet ses succès et fiertés dans chaque domaine de sa vie pour prendre conscience de ses talents réels.\n• **Étape 2 — Déclarations positives** : rédiger de courtes phrases d’encouragement mettant en avant ses qualités ou réussites, formulées obligatoirement avec **« Je »** (« Je suis… » et non « C’est… ») et **de manière positive** (« Je suis volontaire » et non « Je ne suis pas faible »).\n• **Étape 3 — Ancrage quotidien** : répéter chaque déclaration au moins **5 fois par jour** pour transformer sa petite voix intérieure en véritable « supporter » dans les moments difficiles.',
            keyRule:
              'Déclaration efficace = formulée au présent avec « Je » + tournure positive + répétée au moins 5 fois par jour.',
            konanTip:
              'Écris tes 3 déclarations positives en « Je » sur le fond d’écran ou dans tes notes de téléphone pour les relire 5 fois par jour.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Selon la méthode de la valeur personnelle, quelle déclaration intérieure respecte parfaitement les règles de formulation ?',
              options: [
                '« C’est pas trop mal quand je ne rate pas »',
                '« Je ne suis pas complètement nul en informatique »',
                '« Je suis organisé, volontaire et capable de maîtriser mes objectifs »',
                '« Les autres ont toujours plus de chance que moi »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les déclarations de valeur personnelle doivent utiliser la première personne (« Je suis… ») et une formulation strictement positive (sans négation ni dévalorisation).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Fenêtre de Johari',
            stepTheme: 'Luft & Ingham',
            stepTitle: 'Comprendre les 4 zones de la fenêtre de Johari (Luft & Ingham)',
            paragraphText:
              'Élaborée par les psychologues **Joseph Luft et Harry Ingham**, la fenêtre de Johari est un modèle de communication qui croise ce que vous savez de vous-même et ce que les autres perçoivent de vous.\n• **Zone Publique** : éléments connus de vous ET des autres (socle de la confiance relationnelle).\n• **Zone Aveugle** : éléments que les **autres voient** chez vous mais dont **vous n’avez pas conscience** (ex. un tic verbal, un ton sec involontaire, ou au contraire un charisme insoupçonné).\n• **Zone Cachée (Façade)** : éléments que **vous connaissez** mais que vous choisissez de ne pas montrer aux autres.\n• **Zone Inconnue** : potentiels ou réactions encore inconnus de vous comme de votre entourage.',
            keyRule:
              'Fenêtre de Johari (Luft & Ingham) : Publique (moi + autres) | Aveugle (autres seuls) | Cachée (moi seul) | Inconnue (ni moi ni autres).',
            konanTip:
              'Pour retenir Johari : Publique = tous voient ; Aveugle = eux seuls ; Cachée = moi seul ; Inconnue = personne encore.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Dans la fenêtre de Johari (Luft & Ingham), comment nomme-t-on la zone regroupant les comportements ou qualités que votre entourage perçoit chez vous mais dont vous n’avez pas conscience ?',
              options: [
                'La zone Publique',
                'La zone Aveugle',
                'La zone Cachée',
                'La zone Inconnue',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La zone Aveugle contient les traits identifiés par les autres mais ignorés par la personne elle-même ; elle se réduit grâce à l’écoute de feedbacks constructifs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Diagnostic Johari',
            stepTheme: 'Feedback',
            stepTitle: 'Réaliser son diagnostic Johari et agrandir sa zone publique',
            paragraphText:
              'La fenêtre de Johari n’est pas qu’une théorie : c’est un exercice pratique très puissant en solo ou en équipe.\n• **Protocole en 3 étapes** : (1) choisir 6 qualités et 6 défauts qui vous représentent selon vous ; (2) demander à 5 ou 6 personnes qui vous connaissent bien d’en choisir 6 également ; (3) classer les réponses dans les 4 zones.\n• **Réduire la zone aveugle** : en **écoutant** les feedbacks bienveillants des autres, vous découvrez ce qui vous limite sans le savoir.\n• **Réduire la zone cachée** : en **parlant** davantage de vous de manière appropriée, vous vous faites mieux comprendre et instaurez la confiance.',
            konanTip:
              'Plus la zone Publique s’agrandit (grâce à l’écoute des feedbacks + l’expression authentique de soi), plus la communication en équipe devient fluide !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Comment peut-on agrandir concrètement sa « zone Publique » dans la fenêtre de Johari ?',
              options: [
                'En refusant tout feedback et en ne parlant jamais de soi',
                'En demandant et écoutant des feedbacks constructifs (réduire la zone aveugle) et en s’exprimant plus ouvertement (réduire la zone cachée)',
                'En critiquant systématiquement les défauts de son entourage',
                'En travaillant uniquement seul toute sa vie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Agrandir la zone publique repose sur deux leviers complémentaires : accueillir le feedback d’autrui (réduit l’aveugle) et partager avec justesse sur soi (réduit le caché).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Comparaison sociale',
            stepTheme: 'Réseaux sociaux',
            stepTitle: 'Protéger son estime de soi face au piège de la comparaison sur les réseaux',
            paragraphText:
              'Les réseaux sociaux exposent en permanence les moments les plus brillants de centaines d’inconnus, ce qui creuse artificiellement l’écart entre notre Moi réel et un Moi idéal irréaliste.\n• **Biais de vitrine** : nous comparons nos coulisses quotidiennes (doutes, fatigue, erreurs) à la bande-annonce retouchée de la vie des autres.\n• **Antidote sain** : remplacer la comparaison horizontale stérile (« Untel est déjà meilleur que moi ») par la **comparaison verticale** avec soi-même (« Qu’ai-je appris ce mois-ci par rapport au mois dernier ? »).\n• **Usage constructif** : s’inspirer de parcours réussis pour apprendre leurs méthodes, jamais pour se dévaloriser.',
            keyRule:
              'La seule comparaison qui construit durablement l’estime de soi est celle entre qui vous êtes aujourd’hui et qui vous étiez hier.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle attitude protège le mieux l’estime de soi face aux réussites mises en scène sur les réseaux sociaux ?',
              options: [
                'Se comparer constamment aux comptes les plus parfaits pour se critiquer',
                'Mesurer sa propre progression par rapport à soi-même (comparaison verticale) et s’inspirer des méthodes plutôt que d’envier les vitrines',
                'Se convaincre que tout progrès personnel est inutile',
                'Exagérer ses propres résultats pour impressionner des inconnus',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mesurer son propre chemin parcouru (comparaison verticale) nourrit la fierté réaliste et l’amélioration continue sans tomber dans le découragement du biais de vitrine.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch3_p3',
        order: 3,
        title: 'Growth Mindset (Carol Dweck) vs Fixed Mindset, cercle de confiance et résilience',
        summary:
          'Opposer état d’esprit fixe (Fixed Mindset) et état d’esprit de développement (Growth Mindset de Carol Dweck), activer la boucle vertueuse Pensée → Action → Habitude → Confiance et bâtir sa résilience.',
        conceptExplanation:
          'Les recherches de la psychologue de Stanford **Carol Dweck** ont mis en évidence deux systèmes de croyances qui façonnent radicalement nos résultats scolaires et professionnels : le **Fixed Mindset** (état d’esprit fixe : « mon intelligence et mes talents sont figés à la naissance ; échouer prouve que je suis nul ») et le **Growth Mindset** (état d’esprit de développement : « mes capacités se développent par l’effort, les bonnes stratégies, le feedback et la persévérance »).\n\nCet état d’esprit alimente un **cercle vertueux** fondamental : une **pensée constructive** déclenche une **action concrète**, qui répétée devient une **habitude**, laquelle produit des résultats qui renforcent la **confiance en soi** et de nouvelles pensées ambitieuses.\n\nEnfin, la **résilience** désigne la capacité à encaisser un choc, un échec ou une adversité, à en tirer des enseignements et à rebondir plus solide qu’auparavant.',
        keyRule:
          'Growth Mindset (Carol Dweck) : remplacer « Je ne sais pas faire » par « Je ne sais pas ENCORE faire ». Pensée → Action → Habitude → Confiance.',
        workedExample: {
          title: 'Basculer du Fixed Mindset au Growth Mindset après une mauvaise note',
          statement:
            'Après un 7/20 en algorithmique, un étudiant pense : « Je n’ai pas la bosse du code, je suis condamné à rater. » Comment reformuler en Growth Mindset ?',
          methodSteps: [
            'Identifier la pensée fixe (« je n’ai pas la bosse du code ») et ajouter le mot magique « encore » : « Je ne maîtrise pas encore les boucles et conditions. »',
            'Rechercher la cause stratégique (manque de pratique sur machine, cours lu passivement sans exercices).',
            'Planifier une action ciblée (3 exercices guidés par semaine + binôme d’étude) pour enclencher la boucle Action → Habitude → Confiance.',
          ],
          conclusion:
            'L’échec cesse d’être une étiquette identitaire pour devenir un simple indicateur de stratégie à ajuster.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Carol Dweck',
            stepTheme: 'Mindset',
            stepTitle: 'Opposer Fixed Mindset et Growth Mindset selon Carol Dweck',
            paragraphText:
              'Pourquoi deux étudiants de même niveau initial réagissent-ils de manière opposée devant une difficulté ? Carol Dweck explique cet écart par l’état d’esprit (*mindset*).\n• **Fixed Mindset (état d’esprit fixe)** : croit que les talents sont innés et figés ; fuit les défis de peur d’avoir l’air incompétent, vit la critique comme une attaque personnelle et abandonne vite face aux obstacles.\n• **Growth Mindset (état d’esprit de développement)** : croit que les compétences se cultivent par l’effort et la méthode ; accueille les défis comme des occasions de grandir, écoute les critiques constructives et s’inspire de la réussite des autres.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparatif Fixed Mindset vs Growth Mindset (Carol Dweck)',
              caption: 'Comment nos croyances sur l’intelligence orientent nos réactions quotidiennes',
              tableData: {
                headers: ['Dimension', 'Fixed Mindset (Fixe)', 'Growth Mindset (Développement)'],
                rows: [
                  ['Vision du talent', 'Inné et immuable', 'Développable par l’effort et la stratégie'],
                  ['Face aux défis', 'Évitement (peur d’échouer)', 'Accueil comme terrain d’entraînement'],
                  ['Face aux obstacles', 'Abandon rapide', 'Persévérance et ajustement de méthode'],
                  ['Face au feedback', 'Pris comme une attaque', 'Utilisé comme levier d’amélioration'],
                  ['Succès des autres', 'Menace / jalousie', 'Source d’inspiration et d’apprentissage'],
                ],
              },
            },
            keyRule:
              'Le Growth Mindset ne nie pas les difficultés : il considère que toute compétence se travaille grâce à l’effort intelligent et au feedback.',
            konanTip:
              'Quand tu vois un camarade exceller, demande-lui sa méthode au lieu de l’envier : c’est le réflexe pur du Growth Mindset !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle réaction illustre typiquement un « Growth Mindset » (état d’esprit de développement) selon Carol Dweck ?',
              options: [
                'Éviter toute matière difficile pour ne jamais risquer une note moyenne',
                'Rejeter systématiquement les remarques de son enseignant',
                'Considérer une difficulté ou une erreur comme une étape normale d’apprentissage invitant à ajuster sa méthode',
                'Croire que l’on naît doué ou nul en gestion pour toute sa vie',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans le Growth Mindset, les défis, les erreurs et les retours constructifs sont perçus comme des leviers essentiels pour développer de nouvelles compétences.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Pouvoir du « Encore »',
            stepTheme: 'Langage intérieur',
            stepTitle: 'Transformer son dialogue intérieur grâce au pouvoir du mot « encore »',
            paragraphText:
              'Les mots que vous répétez dans votre tête programment soit l’abandon, soit la persévérance.\n• **Verdict fermé (Fixe)** : « Je ne comprends rien à la comptabilité » ou « Je ne sais pas parler en public » ferme la porte à tout progrès.\n• **Formulation ouverte (Growth)** : ajouter le simple mot **« encore »** (« Je ne maîtrise pas **encore** le bilan comptable ») situe la difficulté dans le temps et ouvre immédiatement la recherche de solutions.\n• **Féliciter le processus** : valorisez vos efforts, votre régularité et vos stratégies plutôt que de vous étiqueter « génie » ou « nul ».',
            konanTip:
              'Chaque fois que tu te surprends à penser « Je n’y arrive pas », rajoute aussitôt « … pas encore, quelle étape puis-je tester ? ».',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Quel petit mot Carol Dweck recommande-t-elle d’ajouter à une phrase découragée (« Je ne sais pas faire… ») pour basculer instantanément en Growth Mindset ?',
              options: ['« Jamais »', '« Encore »', '« Impossible »', '« Toujours »'],
              correctAnswerIndex: 1,
              explanation:
                'Le pouvoir du « encore » (« Je ne sais pas encore faire… ») inscrit la compétence sur une trajectoire de progression au lieu d’un verdict définitif.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Cercle de confiance',
            stepTheme: 'Dynamique',
            stepTitle: 'Activer le cercle vertueux : Pensée → Action → Habitude → Confiance',
            paragraphText:
              'Beaucoup attendent d’avoir d’abord une confiance absolue avant d’oser agir : c’est exactement l’inverse qui fonctionne dans la réalité.\n• **1. Pensée constructive** : adopter une croyance réaliste et orientée progrès (« Je peux m’améliorer en essayant »).\n• **2. Action concrète** : passer à l’acte sur un premier défi gradué malgré un léger trac.\n• **3. Habitude régulière** : répéter l’action jusqu’à ce qu’elle devienne fluide et maîtrisée.\n• **4. Confiance renforcée** : les résultats visibles nourrissent une confiance authentique, qui génère des pensées encore plus ambitieuses.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Cercle vertueux de la confiance en soi',
              caption: 'La confiance naît de l’action répétée et nourrit en retour des pensées plus ambitieuses',
              cycle: {
                centerLabel: 'Croissance',
                centerSublabel: 'Spirale positive',
                nodes: [
                  { title: '1. Pensée', subtitle: 'Croyance constructive', color: 'violet' },
                  { title: '2. Action', subtitle: 'Défi gradué concret', color: 'blue' },
                  { title: '3. Habitude', subtitle: 'Répétition disciplinée', color: 'green' },
                  { title: '4. Confiance', subtitle: 'Preuve par résultats', color: 'orange' },
                ],
              },
            },
            keyRule:
              'L’action précède souvent la confiance : c’est en agissant et en répétant que l’on bâtit la preuve concrète de ses capacités.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Dans le cercle vertueux de la croissance personnelle, quel est l’enchaînement logique qui consolide durablement la confiance en soi ?',
              options: [
                'Attente passive → Inaction → Regret → Confiance',
                'Pensée constructive → Action concrète → Habitude répétée → Confiance renforcée',
                'Critique des autres → Isolement → Procrastination → Confiance',
                'Chance pure → Absence d’effort → Hasard → Confiance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une pensée constructive pousse à l’action graduée ; la répétition forge l’habitude et les résultats concrets renforcent authentiquement la confiance en soi.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Résilience',
            stepTheme: 'Rebond',
            stepTitle: 'Développer sa résilience face aux épreuves et aux échecs',
            paragraphText:
              'Emprunté à la physique des matériaux (capacité d’un métal à absorber un choc sans se briser), le concept de **résilience** en psychologie désigne l’art de rebondir après l’adversité.\n• **Ce que la résilience est** : accuser le coup avec lucidité (sans nier la douleur), mobiliser ses ressources internes et son soutien social, tirer un sens ou une leçon et reconstruire un plan d’action.\n• **Ce qu’elle n’est pas** : être insensible, cacher sa peine ou faire semblant que tout va toujours bien.\n• **Exemple concret** : un jeune entrepreneur ivoirien dont la première boutique en ligne échoue analyse ses erreurs de logistique, ajuste son modèle et lance une seconde activité rentable.',
            keyRule:
              'La résilience ne consiste pas à ne jamais tomber, mais à savoir se relever plus lucide et mieux préparé après chaque chute.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Quelle définition décrit le plus exactement la résilience en développement personnel ?',
              options: [
                'Ne jamais ressentir aucune émotion triste ou stressante',
                'La capacité à encaisser un échec ou une épreuve, à s’adapter, à en tirer des enseignements et à rebondir',
                'Le fait d’abandonner définitivement après un premier obstacle',
                'L’absence totale d’imprévus dans une vie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La résilience est la capacité dynamique à traverser l’adversité, à mobiliser ses ressources et à se reconstruire en intégrant l’expérience vécue.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Débriefing d’échec',
            stepTheme: 'Apprentissage',
            stepTitle: 'Transformer un revers en plan de rebond avec la méthode des 3 questions',
            paragraphText:
              'Après un échec (note insuffisante, refus de stage, projet non retenu), ruminer ne sert à rien ; un débriefing structuré en 3 questions remet immédiatement en mouvement.\n• **Question 1 — Qu’est-ce qui a malgré tout fonctionné ?** (préserver ses acquis et son estime).\n• **Question 2 — Quelle cause précise (méthode, préparation, gestion du temps) explique le résultat ?** (analyse factuelle, jamais d’auto-insulte).\n• **Question 3 — Quelle unique amélioration concrète vais-je appliquer dès la prochaine tentative ?** (passage immédiat à l’action).',
            konanTip:
              'Écris toujours tes 3 réponses dans ton carnet dans les 48 heures suivant un revers : tu transformes aussitôt la frustration en plan de victoire.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Après avoir échoué à un entretien de stage, quelle démarche illustre le mieux un débriefing résilient ?',
              options: [
                'Se dire « Je suis nul » et arrêter de postuler pendant un an',
                'Identifier ce qui s’est bien passé, repérer les 2 questions qui ont posé problème et s’entraîner dessus avant le prochain entretien',
                'Accuser le recruteur sur les réseaux sociaux',
                'Envoyer exactement la même candidature sans rien corriger',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un débriefing factuel sépare la valeur de la personne de la stratégie utilisée et transforme chaque entretien manqué en préparation pour réussir le suivant.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Faux Growth Mindset',
            stepTheme: 'Nuance',
            stepTitle: 'Ne pas confondre Growth Mindset et acharnement aveugle sans stratégie',
            paragraphText:
              'Carol Dweck elle-même met en garde contre une mauvaise compréhension de son concept : le Growth Mindset ne signifie pas seulement « travailler plus dur ».\n• **Effort intelligent** : répéter dix fois la même mauvaise méthode de révision (ex. relire passivement un cours sans faire d’exercices) ne suffit pas.\n• **Les 3 ingrédients du vrai Growth Mindset** : un **effort régulier**, l’**essai de nouvelles stratégies** quand la première bloque, et la **demande d’aide / de feedback** auprès d’un enseignant, d’un binôme ou d’un mentor.\n• **Règle d’or** : persévérer dans l’objectif, mais rester flexible sur la méthode !',
            keyRule:
              'Vrai Growth Mindset = Effort régulier + Ajustement de stratégie + Recherche de feedback.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Quels sont les trois leviers qui composent un véritable Growth Mindset lorsque l’on bloque sur une notion difficile ?',
              options: [
                'L’effort régulier, le changement de stratégie d’apprentissage et la recherche de feedback / d’aide',
                'L’acharnement solitaire sans jamais demander conseil ni changer de méthode',
                'L’abandon immédiat au profit d’une tâche facile',
                'La simple attente que le talent apparaisse tout seul',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Growth Mindset authentique combine persévérance, adaptation des stratégies et ouverture aux conseils et retours extérieurs.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : COMMUNICATION INTERPERSONNELLE, ASSERTIVITÉ, LEADERSHIP ET RÉSEAUTAGE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_dev_perso_ch4',
    subjectId: 'lmd_dev_perso',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Communication interpersonnelle, assertivité, leadership personnel et réseautage',
    summary:
      'Pratiquer l’écoute active et la Communication Non Violente (méthode OSBD), choisir l’assertivité face à la passivité/agressivité/manipulation, réussir sa prise de parole en public et bâtir son leadership et son personal branding sur LinkedIn.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Développement Personnel',
    points: [
      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch4_p1',
        order: 1,
        title: 'Écoute active et Communication Non Violente (méthode OSBD)',
        summary:
          'Distinguer entendre et pratiquer l’écoute active (reformulation, questions ouvertes, langage non verbal) et résoudre les tensions grâce aux 4 étapes OSBD de la Communication Non Violente.',
        conceptExplanation:
          'Dans une équipe projet comme en entreprise, la majorité des conflits ne vient pas d’un désaccord technique, mais d’une mauvaise qualité d’écoute ou d’une formulation accusatrice.\n\nL’**écoute active** (popularisée par Carl Rogers) consiste à accorder une attention totale à son interlocuteur — sans couper la parole ni préparer sa riposte — en mobilisant le **langage non verbal** (regard, hochements, posture ouverte), les **questions ouvertes** (« Qu’est-ce qui te préoccupe le plus ? ») et la **reformulation** (« Si je te comprends bien, tu crains que… ») pour valider la compréhension mutuelle.\n\nPour exprimer un désaccord ou un besoin sans déclencher de guerre d’ego, la **Communication Non Violente (CNV)** de Marshall Rosenberg propose la méthode **OSBD** en 4 temps : **O**bservation (faits objectifs sans jugement), **S**entiment (ce que je ressens), **B**esoin (la valeur ou nécessité en jeu) et **D**emande (action concrète, réaliste et négociable).',
        keyRule:
          'Écoute active = présence + questions ouvertes + reformulation. Méthode OSBD = Observation factuelle → Sentiment → Besoin → Demande concrète.',
        workedExample: {
          title: 'Recadrer un retard dans un travail de groupe avec la méthode OSBD',
          statement:
            'Un coéquipier n’a pas livré sa partie du diaporama prévue hier à 18h alors que la soutenance est dans deux jours. Comment lui parler sans l’agresser ?',
          methodSteps: [
            'Observation (fait objectif, sans insulte) : « Hier à 18h, ta partie du diaporama n’était pas encore sur Google Drive. »',
            'Sentiment : « Je me sens inquiet et stressé par l’approche de la soutenance. »',
            'Besoin : « J’ai besoin de fiabilité et de temps pour relire l’ensemble avec le groupe. »',
            'Demande concrète : « Est-ce que tu peux la déposer ce soir avant 20h, ou me dire maintenant si tu as besoin d’aide sur un point précis ? »',
          ],
          conclusion:
            'La formulation OSBD évite l’attaque personnelle (« Tu es toujours irresponsable ! ») et ouvre immédiatement une solution coopérative.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Écoute active',
            stepTheme: 'Relation',
            stepTitle: 'Distinguer simplement entendre et pratiquer l’écoute active',
            paragraphText:
              'Beaucoup de personnes n’écoutent pas pour comprendre : elles attendent simplement leur tour pour parler ou juger.\n• **Entendre** : phénomène physique passif (les sons atteignent l’oreille pendant qu’on regarde son téléphone).\n• **Écoute active** : posture volontaire et bienveillante centrée sur l’interlocuteur, combinant attention pleine, silence respectueux, observation du non-verbal et vérification de la compréhension.\n• **Effet immédiat** : une personne qui se sent vraiment écoutée baisse sa défensive, clarifie sa pensée et devient beaucoup plus ouverte à vos propres arguments.',
            keyRule:
              'L’écoute active vise d’abord à comprendre l’autre dans son cadre de référence avant de chercher à être compris.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p1_q1',
              type: 'mcq',
              prompt: 'Quelle attitude caractérise véritablement la pratique de l’écoute active lors d’un échange ?',
              options: [
                'Couper la parole dès la première phrase pour donner son avis',
                'Accorder une attention pleine, poser des questions ouvertes et reformuler pour vérifier qu’on a bien compris',
                'Consulter ses messages WhatsApp tout en disant « oui, oui »',
                'Préparer silencieusement sa contre-attaque sans écouter la fin',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’écoute active mobilise une présence authentique, des questions ouvertes et la reformulation afin de valider la compréhension mutuelle.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Reformulation',
            stepTheme: 'Techniques',
            stepTitle: 'Utiliser la reformulation et les questions ouvertes pour lever les malentendus',
            paragraphText:
              'La reformulation est l’outil le plus simple et le plus puissant pour éviter les quiproquos en réunion ou en entretien.\n• **Reformulation miroir / synthèse** : redire avec vos propres mots l’essentiel de ce que l’autre vient d’exprimer (« Si j’ai bien compris, ta priorité est de finaliser le budget avant vendredi ? »).\n• **Questions ouvertes** : commencent par *Comment, Qu’est-ce qui, En quoi, Que penses-tu de…* et invitent à développer, contrairement aux questions fermées (réponse par Oui/Non).\n• **Exemple concret** : dans une agence digitale à Abidjan, reformuler le besoin d’un client avant de lancer la maquette évite des semaines de retouches inutiles.',
            konanTip:
              'Évite la question « Pourquoi tu as fait ça ? » qui sonne souvent comme un reproche ; préfère « Qu’est-ce qui t’a amené à choisir cette option ? ».',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Parmi ces questions posées à un coéquipier en difficulté, laquelle est une question ouverte constructive ?',
              options: [
                '« Tu as fini oui ou non ? »',
                '« Comment puis-je t’aider à débloquer la partie qui te pose problème ? »',
                '« Tu es encore en retard ? »',
                '« C’est bon pour demain ? »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Commencer par « Comment… » ouvre le dialogue vers des solutions concrètes, alors que les autres options sont des questions fermées ou culpabilisantes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode OSBD',
            stepTheme: 'CNV',
            stepTitle: 'Maîtriser les 4 étapes de la Communication Non Violente (OSBD)',
            paragraphText:
              'Développée par le psychologue Marshall Rosenberg, la Communication Non Violente (CNV) permet d’exprimer une difficulté avec franchise ET respect grâce au protocole **OSBD**.\n• **O — Observation** : décrire les faits précis et objectifs comme une caméra, **sans jugement ni étiquette** (« Tu es arrivé 20 minutes après le début » et non « Tu es irrespectueux »).\n• **S — Sentiment** : nommer l’émotion ressentie en parlant en « Je » (« Je me suis senti frustré / inquiet »).\n• **B — Besoin** : relier l’émotion au besoin fondamental en jeu (clarté, respect du temps, équité, fiabilité).\n• **D — Demande** : formuler une action concrète, positive, réalisable et ouverte à la discussion.',
            visualSchema: {
              type: 'flowchart',
              title: 'Communication Non Violente — Méthode OSBD',
              caption: 'Exprimer un désaccord avec fermeté et bienveillance sans attaquer la personne',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: 'O — Observation', sublabel: 'Faits objectifs et datés, sans jugement ni interprétation', kind: 'start', color: 'blue' },
                  { label: 'S — Sentiment', sublabel: 'Émotion ressentie exprimée en « Je » (inquiet, frustré…)', kind: 'process', color: 'violet' },
                  { label: 'B — Besoin', sublabel: 'Besoin profond non satisfait (fiabilité, clarté, respect)', kind: 'process', color: 'green' },
                  { label: 'D — Demande', sublabel: 'Action concrète, positive, réaliste et négociable', kind: 'end', color: 'orange' },
                ],
              },
            },
            keyRule:
              'En CNV (OSBD), on sépare toujours les faits (Observation) des jugements, et on parle en « Je » plutôt qu’en « Tu qui tue ».',
            konanTip:
              'Avant une conversation délicate, écris tes 4 phrases O-S-B-D sur un brouillon : tu éviteras les reproches maladroits sous le coup de l’émotion.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Que signifient exactement les quatre lettres de l’acronyme OSBD en Communication Non Violente ?',
              options: [
                'Ordre, Sanction, Blâme, Décision',
                'Observation, Sentiment, Besoin, Demande',
                'Opinion, Silence, Bilan, Débat',
                'Objectif, Stratégie, Budget, Délai',
              ],
              correctAnswerIndex: 1,
              explanation:
                'OSBD signifie Observation (faits objectifs), Sentiment (émotion vécue), Besoin (nécessité sous-jacente) et Demande (action concrète et négociable).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Fait vs Jugement',
            stepTheme: 'Précision OSBD',
            stepTitle: 'Séparer une observation factuelle d’un jugement accusateur',
            paragraphText:
              'La première étape de la méthode OSBD échoue presque toujours lorsqu’on glisse un jugement déguisé dans son observation.\n• **Jugement (bloque le dialogue)** : « Tu ne fais jamais aucun effort dans ce groupe » ou « Tu es toujours désorganisé » (mots absolus *toujours/jamais* + attaque sur la personne).\n• **Observation pure (ouvre le dialogue)** : « Sur les trois dernières réunions, deux livrables n’étaient pas encore prêts à l’heure convenue. »\n• **Pourquoi ça marche** : personne ne peut contester calmement un fait vérifiable, alors que tout le monde se braque contre une étiquette injuste.',
            keyRule:
              'Bannis les mots « toujours » et « jamais » lors d’un recadrage : décris uniquement des faits observables comme le ferait une caméra.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Laquelle de ces phrases constitue une véritable « Observation » objective selon les règles de la CNV (OSBD) ?',
              options: [
                '« Tu es vraiment trop paresseux cette semaine »',
                '« Tu ne respectes jamais personne »',
                '« Tu m’as coupé la parole à trois reprises pendant que je présentais les chiffres »',
                '« Tu fais exprès de saboter notre projet »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Seule la troisième phrase rapporte un fait observable et mesurable (« coupé la parole à trois reprises ») sans prêter d’intention ni coller d’étiquette.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Non-verbal',
            stepTheme: 'Congruence',
            stepTitle: 'Aligner communication verbale, paraverbale et non verbale',
            paragraphText:
              'Lors d’un échange en face à face, votre interlocuteur perçoit simultanément trois canaux qui doivent rester cohérents (**congruence**).\n• **Verbal** : les mots choisis, la clarté et la structure de vos arguments.\n• **Paraverbal** : le volume de la voix, le rythme (débit), les silences et l’intonation.\n• **Non verbal** : le regard, la posture, les expressions du visage et la gestuelle.\n• **Exemple concret** : dire « Je suis ravi de travailler avec vous » les bras croisés, le regard fuyant et d’un ton monotone crée immédiatement de la méfiance.',
            konanTip:
              'Lorsque les mots et le langage corporel se contredisent, le cerveau humain croit presque toujours le langage corporel et le ton de la voix !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Que désigne la dimension « paraverbale » de la communication orale ?',
              options: [
                'Uniquement l’orthographe d’un rapport écrit',
                'Les caractéristiques de la voix : ton, volume, débit, rythme et silences',
                'La couleur des vêtements portés',
                'Le logiciel utilisé pour créer les diapositives',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le paraverbal englobe la manière dont la voix porte les mots (intonation, volume, rythme, articulation et pauses).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Feedback constructif',
            stepTheme: 'Équipe',
            stepTitle: 'Donner et recevoir un feedback constructif sans blesser',
            paragraphText:
              'Dans les projets étudiants comme en entreprise, savoir faire un retour utile à un pair est une compétence rare et très appréciée.\n• **Règle du feedback constructif** : cibler un **comportement précis** (jamais la personnalité), mentionner d’abord un point fort réel, formuler un axe d’amélioration concret et proposer une piste d’action.\n• **Recevoir un feedback avec maturité** : écouter jusqu’au bout sans se justifier immédiatement, remercier la personne pour sa franchise et trier ce qui permet de progresser.\n• **Exemple concret** : « Ton introduction était très dynamique ; si tu réduis le texte sur la diapo 4 à 3 mots-clés, le jury suivra encore mieux tes chiffres. »',
            keyRule:
              'Un bon feedback est précis, bienveillant, centré sur le travail (pas sur la personne) et orienté vers la progression.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle formulation illustre un feedback réellement constructif après la répétition d’un exposé d’un camarade ?',
              options: [
                '« Franchement c’était catastrophique, tu n’es pas fait pour parler »',
                '« C’était parfait, ne change rien » (alors que ses slides sont illisibles)',
                '« Ta conclusion était très claire ; pour renforcer l’impact, je te suggère de ralentir un peu ton débit et d’agrandir la police des graphiques »',
                'Ne rien dire en face mais se moquer dans un autre groupe',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ce feedback valorise un point fort précis tout en proposant deux améliorations concrètes et actionnables portant sur la présentation, sans juger la personne.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch4_p2',
        order: 2,
        title: 'Assertivité vs passivité, agressivité et manipulation ; gestion des désaccords',
        summary:
          'Identifier les 4 postures relationnelles (passif, agressif, manipulateur, assertif), apprendre à dire non avec tact et gérer un désaccord dans une logique gagnant-gagnant.',
        conceptExplanation:
          'Face à une demande abusive, une critique ou un désaccord, nos réactions spontanées basculent souvent dans l’un des trois pièges classiques : la **passivité** (s’écraser pour éviter le conflit au risque d’accumuler rancœur et surcharge), l’**agressivité** (imposer son point de vue par la force, le mépris ou la colère au risque de briser la relation) ou la **manipulation** (obtenir ce qu’on veut de façon détournée par culpabilisation, flatterie ou rumeurs).\n\nLa quatrième voie, celle de la maturité relationnelle, est l’**assertivité** (affirmation de soi respectueuse) : exprimer clairement ses opinions, ses limites et ses besoins **sans crainte ni agressivité**, dans le respect simultané de soi et d’autrui (posture **Gagnant / Gagnant**).\n\nÊtre assertif implique notamment de savoir **dire non** de manière calme, ferme et respectueuse, et d’aborder les conflits en s’attaquant au problème commun plutôt qu’aux personnes.',
        keyRule:
          'Assertivité = Respect de soi (+) ET Respect de l’autre (+). Dire non à une demande excessive, ce n’est pas rejeter la personne, c’est poser une limite saine.',
        workedExample: {
          title: 'Dire non de manière assertive à une surcharge injustifiée',
          statement:
            'Un camarade vous demande à 21h de rédiger sa partie du devoir à sa place alors que vous avez déjà fini votre part et devez réviser votre partiel du lendemain.',
          methodSteps: [
            'Éviter la passivité (« Bon d’accord, je fais nuit blanche… ») et l’agressivité (« Débrouille-toi, tu es trop paresseux ! »).',
            'Adopter une réponse assertive claire : « Non, je ne peux pas rédiger ta partie ce soir car je dois réviser mon examen de demain. »',
            'Proposer éventuellement une aide proportionnée sans céder sur la limite : « En revanche, je peux te partager mon plan en 5 minutes pour que tu démarres plus vite. »',
          ],
          conclusion:
            'La limite est posée avec calme et fermeté, préservant à la fois votre temps, votre respect de soi et la relation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '4 postures',
            stepTheme: 'Assertivité',
            stepTitle: 'Situer l’assertivité face à la passivité, l’agressivité et la manipulation',
            paragraphText:
              'En communication interpersonnelle, chaque posture reflète le niveau de respect que l’on s’accorde à soi-même et que l’on accorde à son interlocuteur.\n• **Passivité (Fuite)** : respect de l’autre au détriment de soi ; on n’ose pas dire non ni exprimer son avis, ce qui génère frustration intérieure.\n• **Agressivité (Attaque)** : affirmation de soi au détriment de l’autre ; on domine, coupe la parole ou humilie, ce qui détruit la confiance.\n• **Manipulation (Ruse)** : manque de respect de soi et de l’autre ; on passe par la culpabilisation, les sous-entendus ou les alliances cachées.\n• **Assertivité (Équilibre)** : double respect de soi ET de l’autre ; on s’exprime directement, calmement et honnêtement.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Les 4 postures relationnelles (Respect de soi × Respect de l’autre)',
              caption: 'L’assertivité est la seule posture équilibrée « Gagnant / Gagnant »',
              matrix2x2: {
                topAxis: ['RESPECT DE L’AUTRE (+)', 'MANQUE DE RESPECT DE L’AUTRE (−)'],
                leftAxis: ['RESPECT DE SOI (+)', 'MANQUE DE RESPECT DE SOI (−)'],
                topLeft: {
                  title: 'ASSERTIF (Gagnant / Gagnant)',
                  items: ['S’exprime clairement et calmement', 'Pose des limites respectueuses', 'Cherche des solutions mutuelles'],
                  color: 'green',
                },
                topRight: {
                  title: 'AGRESSIF (Gagnant / Perdant)',
                  items: ['Impose par la force ou la colère', 'Juge, coupe la parole, intimide', 'Détruit la confiance à long terme'],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'PASSIF (Perdant / Gagnant)',
                  items: ['Subit et n’ose pas dire non', 'Évite le conflit à tout prix', 'Accumule stress et rancœur'],
                  color: 'blue',
                },
                bottomRight: {
                  title: 'MANIPULATEUR (Perdant / Perdant)',
                  items: ['Culpabilise, flatte ou ruse', 'Sous-entendus et non-dits', 'Crée méfiance et climat toxique'],
                  color: 'slate',
                },
              },
            },
            keyRule:
              'L’assertivité est l’art de défendre ses droits et opinions sans écraser ceux des autres ni s’effacer soi-même.',
            konanTip:
              'Retiens le test express de l’assertivité : « Est-ce que je me respecte ET est-ce que je respecte mon interlocuteur dans cette réponse ? »',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Quelle posture relationnelle combine à la fois le respect de soi et le respect de l’autre ?',
              options: [
                'La passivité',
                'L’agressivité',
                'La manipulation',
                'L’assertivité',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’assertivité permet d’affirmer clairement ses besoins, limites et idées tout en respectant pleinement la dignité et les droits de son interlocuteur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Savoir dire Non',
            stepTheme: 'Limites saines',
            stepTitle: 'Savoir dire « non » avec tact, fermeté et sans culpabilité excessive',
            paragraphText:
              'Dire « oui » à tout par peur de déplaire finit par vous empêcher d’honorer vos vrais engagements prioritaires.\n• **Formule en 3 temps** : (1) Reconnaître la demande avec courtoisie (« Je comprends que ce dossier est urgent pour toi »), (2) Dire **non** clairement sans fausse excuse (« Mais je ne peux pas m’en charger aujourd’hui car je finalise mon livrable prioritaire »), (3) Proposer éventuellement une alternative si possible (« On peut regarder ensemble demain à 14h »).\n• **Piège à éviter** : se justifier pendant 10 minutes avec des excuses inventées ouvre la porte à la négociation forcée.',
            konanTip:
              'Un « non » clair et poli prononcé tôt vaut mille fois mieux qu’un « oui » forcé qui finit par un travail bâclé ou non livré !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle réponse illustre un refus assertif face à une demande que vous n’avez pas le temps d’honorer ?',
              options: [
                '« Oui bien sûr ! » (tout en sachant qu’on ne le fera pas)',
                '« Arrête de toujours me déranger avec tes problèmes ! »',
                '« Je comprends ton besoin, mais je ne peux pas prendre cette tâche cette semaine car mon planning est complet ; je pourrai te relire lundi si tu veux »',
                'Ne jamais répondre au message en espérant que la personne oublie',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cette réponse est calme, directe, honnête, sans agressivité ni soumission, et propose une alternative réaliste.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Disque rayé',
            stepTheme: 'Résistance',
            stepTitle: 'Utiliser la technique du « disque rayé » face à l’insistance',
            paragraphText:
              'Même après un refus poli, certains interlocuteurs insistent, culpabilisent ou changent de sujet pour vous faire céder.\n• **Technique du disque rayé** : répéter calmement, d’une voix posée et avec les mêmes mots essentiels, sa décision ou sa limite, sans s’énerver ni tomber dans le piège des provocations.\n• **Exemple concret** : « Je comprends que tu sois pressé, mais comme je viens de te le dire, je ne peux pas prêter mon mot de passe de compte, c’est une règle de sécurité. »\n• **Effet** : l’interlocuteur constate que votre limite est stable et non négociable, sans qu’aucune dispute n’éclate.',
            keyRule:
              'Face à la pression ou à la culpabilisation, la constance calme (disque rayé) est bien plus forte que la colère.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'En quoi consiste la technique assertive dite du « disque rayé » face à un interlocuteur trop insistant ?',
              options: [
                'Élever progressivement la voix jusqu’à crier',
                'Répéter calmement et fermement sa position ou sa limite sans se laisser entraîner dans la colère ou les diversions',
                'Céder immédiatement pour retrouver la paix',
                'Quitter la pièce en claquant la porte',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La technique du disque rayé consiste à maintenir sa limite avec calme, constance et politesse face aux tentatives d’insistance ou de culpabilisation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Gestion de conflit',
            stepTheme: 'Gagnant-Gagnant',
            stepTitle: 'Transformer un désaccord en solution commune (problème vs personne)',
            paragraphText:
              'Dans tout travail d’équipe, les désaccords d’idées sont normaux et même utiles s’ils sont gérés avec maturité.\n• **Règle d’or** : être **doux avec la personne** et **rigoureux sur le problème** (« Toi et moi contre le problème », jamais « Toi contre moi »).\n• **Démarche en 4 temps** : (1) Échanger au calme (en privé si besoin), (2) Laisser chacun exposer son point de vue via l’écoute active, (3) Identifier l’objectif commun (ex. réussir la soutenance), (4) Co-construire un compromis ou une solution gagnant-gagnant.\n• **Exemple concret** : deux membres hésitent entre deux designs de slides → ils testent la lisibilité sur un critère objectif (taille de police et clarté) plutôt que de voter à l’ego.',
            keyRule:
              'Un désaccord sain porte sur les idées et les méthodes, jamais sur la valeur personnelle des individus.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quel principe permet de résoudre constructivement un désaccord au sein d’une équipe projet ?',
              options: [
                'Attaquer la personnalité de ceux qui pensent différemment',
                'Séparer le problème à résoudre de la personne, écouter chaque point de vue et s’appuyer sur l’objectif commun',
                'Imposer systématiquement la décision du plus bruyant',
                'Cacher le désaccord jusqu’à l’échec du projet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'S’unir face au problème commun en respectant chaque personne permet de transformer la divergence d’idées en décision plus robuste.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Manipulation',
            stepTheme: 'Vigilance',
            stepTitle: 'Reconnaître et désamorcer les comportements passifs-agressifs ou manipulateurs',
            paragraphText:
              'Certaines tensions ne s’expriment pas par des cris, mais par des attitudes indirectes qui empoisonnent l’ambiance d’un groupe.\n• **Indices fréquents** : ironie blessante déguisée en humour (« Je plaisantais, tu n’as pas d’humour ! »), culpabilisation (« Si tu étais un vrai ami, tu le ferais »), promesses non tenues ou critiques dans le dos.\n• **Réponse assertive** : ramener calmement l’échange sur le terrain **explicite et factuel** (« Quand tu dis cela, j’ai l’impression qu’il y a un reproche ; préfères-tu qu’on en parle directement ? »).\n• **Protection** : garder des traces écrites claires des répartitions de tâches dans un projet (ex. tableau partagé sur Drive).',
            konanTip:
              'La clarté écrite (qui fait quoi et pour quand) est le meilleur antidote contre les malentendus et la manipulation en projet de groupe.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle phrase relève typiquement d’une tentative de manipulation par culpabilisation ?',
              options: [
                '« Pourrais-tu m’aider 10 minutes si tu as le temps ? »',
                '« Si tu étais vraiment loyal envers moi, tu ferais mon devoir à ma place sans discuter »',
                '« Je préfère qu’on répartisse les 4 parties équitablement »',
                '« Peux-tu m’expliquer cette formule ? »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Utiliser le chantage affectif (« Si tu étais vraiment loyal… ») pour forcer quelqu’un à céder est une manœuvre classique de manipulation par culpabilisation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Critique juste',
            stepTheme: 'Maturité',
            stepTitle: 'Accueillir une critique fondée avec calme et assertivité',
            paragraphText:
              'Être assertif, ce n’est pas avoir toujours raison : c’est aussi savoir reconnaître une erreur sans s’effondrer ni se mettre en colère.\n• **Critique fondée** : l’accepter simplement et dignement (« Tu as raison, j’ai oublié cette référence ; je la corrige d’ici ce soir ») renforce immédiatement votre crédibilité.\n• **Critique floue ou excessive** : demander des précisions factuelles calmement (« Sur quel point précis du document trouves-tu que cela manque de clarté ? »).\n• **Bénéfice** : reconnaître une erreur avec sang-froid désarme instantanément l’agressivité et inspire le respect.',
            keyRule:
              'Reconnaître calmement une erreur avérée et proposer un correctif est une preuve de force et de maturité professionnelle.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Un enseignant ou un responsable signale une erreur réelle dans votre tableau de chiffres. Quelle est la réaction la plus assertive et professionnelle ?',
              options: [
                'Nier l’évidence et accuser le logiciel Excel',
                'S’excuser dix fois en se disant totalement incapable',
                'Reconnaître calmement l’erreur, remercier pour la vigilance et indiquer quand la version corrigée sera envoyée',
                'Ne plus jamais répondre à ses e-mails',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Assumer factuellement son erreur sans se dévaloriser ni se braquer démontre professionnalisme, maturité et fiabilité.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_dev_perso_ch4_p3',
        order: 3,
        title: 'Prise de parole en public, leadership personnel et personal branding LinkedIn',
        summary:
          'Structurer une prise de parole en public captivante, incarner le leadership personnel (exemplarité et influence positive) et bâtir son personal branding et son réseau professionnel sur LinkedIn.',
        conceptExplanation:
          'Savoir présenter ses idées avec clarté et assurance est l’un des accélérateurs de carrière les plus puissants dans les métiers du numérique.\n\nUne **prise de parole en public** réussie repose sur trois piliers : une **structure limpide** (accroche captivante → 3 idées clés illustrées → conclusion mémorable avec appel à l’action), une **maîtrise scénique** (ancrage corporel, contact visuel balayant l’auditoire, voix posée, supports visuels épurés) et une **répétition chronométrée** à voix haute.\n\nLe **leadership personnel** ne dépend pas d’un titre hiérarchique : il commence par la capacité à se diriger soi-même (exemplarité, fiabilité, initiative) puis à inspirer et fédérer positivement autour d’une vision partagée.\n\nEnfin, pour un étudiant en économie numérique, le **personal branding** (marque personnelle authentique) et le **réseautage intelligent** — notamment sur **LinkedIn** — permettent de rendre visibles ses compétences, ses projets et son sérieux bien avant l’obtention du diplôme.',
        keyRule:
          'Prise de parole = Accroche + 3 idées clés + Conclusion claire. Leadership = Exemplarité + Influence positive. Personal branding = Compétences réelles + Visibilité cohérente sur LinkedIn.',
        workedExample: {
          title: 'Préparer son « Pitch de 60 secondes » pour un forum métiers à Abidjan',
          statement:
            'Vous rencontrez un responsable transformation digitale lors d’un forum étudiant et disposez d’une minute pour vous présenter et obtenir un contact LinkedIn.',
          methodSteps: [
            'Présent (Qui je suis) : « Bonjour, je suis étudiant en Licence 1 Économie Numérique et Transformation Digitale, passionné par la gestion de projets digitaux et la donnée. »',
            'Preuve concrète (Ce que j’ai réalisé) : « Ce semestre, j’ai piloté un projet collaboratif cloud et une enquête terrain sur les usages mobiles. »',
            'Futur & ouverture : « J’admire le travail de votre entreprise sur le paiement digital ; pourrais-je vous ajouter sur LinkedIn pour suivre vos actualités et échanger sur les compétences que vous recherchez chez un futur stagiaire ? »',
          ],
          conclusion:
            'Un pitch court (Présent → Preuve → Ouverture) marque durablement les esprits et ouvre naturellement la porte au réseautage.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Prise de parole',
            stepTheme: 'Structure orale',
            stepTitle: 'Structurer un exposé ou un pitch captivant (Accroche → 3 idées → Conclusion)',
            paragraphText:
              'Un auditoire décide dans les 30 premières secondes s’il va vous écouter avec attention ou décrocher sur son téléphone.\n• **1. L’accroche** : démarrer par une question percutante, un chiffre fort ou une histoire courte (jamais par « Bonjour, euh, je vais essayer de vous lire mon texte… »).\n• **2. Le corps (règle de 3)** : limiter son exposé à **3 idées principales** clairement annoncées et illustrées par des exemples concrets.\n• **3. La conclusion** : résumer le message clé en une phrase mémorable et terminer par une ouverture ou un appel à l’action.\n• **Diapositives** : des visuels propres avec peu de texte ; c’est vous le présentateur, pas la diapositive !',
            keyRule:
              'Un bon exposé se structure en 3 temps nets : Accroche forte → 3 points clés illustrés → Conclusion mémorable.',
            konanTip:
              'Répète toujours ton oral au moins deux fois debout, à voix haute et chronomètre en main : lire dans sa tête ne prépare jamais la voix ni le timing !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle pratique rend une présentation orale devant un jury nettement plus claire et mémorable ?',
              options: [
                'Lire mot à mot des diapositives remplies de paragraphes de 20 lignes',
                'Démarrer par une accroche pertinente, structurer le propos autour de 3 idées clés illustrées et garder des diapositives épurées',
                'Parler le plus vite possible sans aucune pause ni contact visuel',
                'Ne jamais répéter son exposé avant le jour J',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une accroche engageante, une structure en trois idées claires et des supports visuels légers maintiennent l’attention et facilitent la mémorisation par le jury.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Présence scénique',
            stepTheme: 'Voix & Regard',
            stepTitle: 'Maîtriser le regard, la posture, la voix et les silences devant un public',
            paragraphText:
              'Votre présence physique transmet votre assurance avant même la fin de votre première phrase.\n• **Posture ancrée** : pieds légèrement écartés, dos droit, mains visibles accompagnant naturellement les idées (éviter les mains dans les poches ou le balancement nerveux).\n• **Contact visuel** : balayer doucement toute la salle (gauche, centre, droite) en regardant les personnes dans les yeux 2 à 3 secondes plutôt que de fixer le plafond ou l’écran.\n• **Pouvoir du silence** : marquer une pause de 1 à 2 secondes après une idée importante remplace avantageusement les tics verbaux (« euh », « du coup ») et donne du poids à votre parole.',
            keyRule:
              'Un silence assumé de 2 secondes vaut infiniment mieux qu’un « euh » nerveux : il donne de l’autorité et laisse le temps au public d’intégrer l’idée.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Lors d’un exposé en classe ou en soutenance, quelle gestion du regard et des pauses renforce le plus votre crédibilité ?',
              options: [
                'Fixer uniquement ses chaussures pour éviter le trac',
                'Balayer l’ensemble de l’auditoire par le regard et utiliser de courts silences posés pour ponctuer ses idées clés',
                'Regarder uniquement l’écran de projection en tournant le dos au public',
                'Parler sans jamais reprendre son souffle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le contact visuel réparti inclut tout le public, et les pauses maîtrisées valorisent les idées importantes tout en éliminant les tics de langage.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Leadership personnel',
            stepTheme: 'Influence positive',
            stepTitle: 'Distinguer le leadership personnel de la simple autorité hiérarchique',
            paragraphText:
              'On n’a pas besoin d’être PDG ou ministre pour exercer du leadership : un étudiant de L1 peut incarner un vrai leadership dès son premier travail de groupe.\n• **Autorité statutaire (chef)** : s’appuie sur un titre ou la contrainte pour donner des ordres.\n• **Leadership personnel** : commence par le **management de soi** (exemplarité, ponctualité, parole tenue, rigueur), puis rayonne par l’**influence positive** (écoute, encouragement, clarté de vision, prise d’initiative face aux difficultés).\n• **Exemple concret** : dans un groupe bloqué, le leader personnel ne critique pas ; il propose un plan clair, valorise les talents de chacun et montre l’exemple en livrant sa part en premier.',
            keyRule:
              'Le vrai leadership commence par se diriger soi-même avec exemplarité avant d’inspirer et de fédérer les autres.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui caractérise fondamentalement le leadership personnel au sein d’une équipe étudiante ou professionnelle ?',
              options: [
                'Crier plus fort que ses coéquipiers pour imposer ses choix',
                'Montrer l’exemple par sa fiabilité, prendre des initiatives constructives et fédérer positivement autour d’un objectif commun',
                'Attendre que quelqu’un d’autre résolve tous les problèmes',
                'Accaparer tout le mérite lorsque le projet réussit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le leadership personnel repose sur l’exemplarité, la responsabilité, la vision partagée et la capacité à faire grandir la dynamique collective.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Personal Branding',
            stepTheme: 'Marque personnelle',
            stepTitle: 'Construire un personal branding authentique pour les métiers du numérique',
            paragraphText:
              'Votre **personal branding** (marque personnelle) est simplement ce que les gens disent de votre professionnalisme et de votre valeur ajoutée lorsque vous n’êtes pas dans la pièce.\n• **Trois piliers** : (1) **Authenticité** (vos vraies valeurs et forces, sans inventer un faux personnage), (2) **Preuves concrètes** (projets réalisés, synthèses publiées, compétences maîtrisées), (3) **Cohérence** entre votre comportement hors-ligne et votre présence en ligne (e-réputation).\n• **Intérêt pour un étudiant L1** : dans l’économie numérique, montrer progressivement ce que vous apprenez et réalisez vous différencie immédiatement des centaines de CV anonymes.',
            keyRule:
              'Le personal branding n’est pas de la vantardise : c’est rendre lisible et cohérente la valeur réelle que vous apportez.',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle démarche définit un « personal branding » sain et crédible pour un étudiant du numérique ?',
              options: [
                'S’inventer de faux diplômes pour impressionner les recruteurs',
                'Aligner ses compétences réelles, ses projets concrets et sa communication en ligne de manière authentique et cohérente',
                'Publier des photos de loisirs sans aucun lien avec son projet pro sur son profil professionnel',
                'Ne jamais parler de ses projets ni de ses compétences',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un personal branding solide repose sur la cohérence entre qui vous êtes, ce que vous savez faire concrètement et l’image professionnelle que vous partagez.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Réseautage & LinkedIn',
            stepTheme: 'Opportunités',
            stepTitle: 'Développer un réseautage stratégique et bienveillant sur LinkedIn',
            paragraphText:
              'La majorité des stages, opportunités et collaborations professionnelles circule par le réseau avant même d’être publiée sur des sites d’annonces.\n• **Réseautage authentique** : bâtir des relations de confiance sur la durée en s’intéressant sincèrement au parcours des autres, plutôt que de contacter les gens uniquement le jour où l’on cherche un stage en urgence.\n• **Actions clés sur LinkedIn** : soigner photo, titre et section Infos ; envoyer une **note personnalisée** lors d’une demande de connexion ; commenter avec pertinence les publications de professionnels ivoiriens et internationaux de la tech ; partager les apprentissages de vos projets académiques.\n• **Principe de réciprocité** : demandez d’abord des conseils (« Comment avez-vous débuté dans ce métier ? ») plutôt qu’un emploi immédiat.',
            konanTip:
              'Quand tu envoies une invitation LinkedIn à un professionnel, écris toujours 2 lignes polies expliquant pourquoi son parcours t’inspire — le taux d’acceptation triple !',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle approche est la plus efficace pour nouer un premier contact professionnel sur LinkedIn avec un manager du secteur numérique ?',
              options: [
                'Envoyer une demande vide suivie immédiatement de « Donnez-moi un travail svp »',
                'Envoyer une note courte et personnalisée expliquant son intérêt pour son parcours et poser une question pertinente sur son métier',
                'Copier-coller le même message générique à 500 inconnus par heure',
                'Laisser son profil sans photo ni aucune information',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un message court, personnalisé et curieux montre votre sérieux, respecte le temps de l’interlocuteur et pose les bases d’une relation professionnelle authentique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Pitch 60 s',
            stepTheme: 'Synthèse carrière',
            stepTitle: 'Maîtriser son Elevator Pitch (présentation claire en 60 secondes)',
            paragraphText:
              'En entretien, en forum entreprises ou lors d’un événement tech, la question « Présentez-vous » tombe toujours en premier : votre **Elevator Pitch** de 60 secondes doit être prêt.\n• **Formule Présent → Passé/Preuve → Futur** :\n  1. **Présent** : qui vous êtes (nom, filière ENTD L1, domaine qui vous passionne).\n  2. **Preuve** : 1 ou 2 réalisations concrètes ou qualités illustrées (projet cloud, bénévolat, outil maîtrisé).\n  3. **Futur** : ce que vous visez et ce que vous souhaitez apporter ou apprendre au contact de votre interlocuteur.\n• **Clé finale** : sourire, ton naturel, zéro récitation robotique et une question d’ouverture pour lancer la conversation.',
            keyRule:
              'Un Elevator Pitch réussi tient en 60 secondes : Qui je suis (Présent) + Ce que j’ai déjà prouvé (Preuve) + Où je vais avec vous (Futur).',
            exercise: {
              id: 'lmd_entd_l1_dev_perso_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Quels sont les trois temps classiques d’un « Elevator Pitch » efficace de 60 secondes lors d’un forum ou d’un entretien ?',
              options: [
                'Raconter toute son enfance, critiquer ses anciens professeurs et demander le salaire',
                'Présenter qui l’on est aujourd’hui (Présent), illustrer par une réalisation concrète (Preuve) et exprimer son objectif ou ouverture (Futur)',
                'Lire son CV ligne par ligne pendant 15 minutes',
                'Rester silencieux en attendant que le recruteur devine son profil',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La structure Présent → Preuve → Futur permet de se présenter en une minute de manière claire, crédible et tournée vers l’échange.',
            },
          },
        ],
      }),
    ],
  },
];

