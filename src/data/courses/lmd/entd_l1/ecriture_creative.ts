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

export const ECRITURE_CREATIVE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'lmd_entd_l1_ecriture_creative_ch1',
    subjectId: 'lmd_ecriture_creative',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Fondements de l’écriture créative et dépassement de la page blanche',
    summary:
      'Maîtriser les piliers et enjeux digitaux de l’écriture créative (UX, mobile-first), diagnostiquer les quatre causes du syndrome de la page blanche et mobiliser les techniques de déblocage (Freewriting, Oulipo, modèle Hook).',
    officialVolumeHours: 14,
    contentVersion: 2,
    source:
      'ESATIC ENTD L1 — Écriture Créative et Communication (Cissé Souleymane Désiré Cédric, Introduction & Module 1.I)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p1',
        order: 1,
        title: 'Piliers de l’écriture créative et enjeux en communication digitale (UX)',
        summary:
          'Marier liberté artistique et efficacité du message pour passer d’une information froide à une véritable expérience utilisateur engageante.',
        conceptExplanation:
          "L'écriture créative s'affranchit des structures rigides de la rédaction purement technique ou administrative pour privilégier l'imagination, le style et l'émotion. En économie numérique et transformation digitale, elle transforme l'étudiant d'un simple technicien en un « architecte de l'engagement ».\n\n1. Les 4 piliers de l'écriture créative :\n- Originalité et imagination : créer des univers, des scénarios ou enrichir des faits réels d'une voix singulière.\n- Pouvoir de la narration (Storytelling) : schéma narratif, personnages dotés de désirs/obstacles, règle du « Show, Don't Tell ».\n- Esthétique du langage : figures de style (métaphores, comparaisons, hyperboles), rythme varié des phrases (musique interne) et vocabulaire sensoriel (cinq sens).\n- Diversité des genres : fiction (romans, nouvelles), poésie, théâtre/scénarios, non-fiction créative (biographies, essais, journalisme narratif).\n2. Pourquoi l'utiliser en communication digitale ? Pour capter l'attention (une histoire se mémorise mieux qu'une liste de statistiques), créer de l'empathie et se démarquer dans un flux saturé.\n3. Exigences du Web Design et de l'UX : toute communication efficace repose sur l'empathie, la structure (comparable à un storyboard / timeline de montage) et l'accroche. À l'ère du mobile-first et des balises sémantiques HTML, le texte doit être clair (se comprendre de lui-même) et engageant (modèle Hook).",
        keyRule:
          'En communication digitale, écrire créativement c’est concevoir une expérience utilisateur (UX) : Empathie + Structure (storyboard) + Accroche immédiate.',
        workedExample: {
          title: 'Transformer une annonce technique froide en accroche UX engageante',
          statement:
            'Réécrire pour un écran mobile : « Mise à jour logicielle v3.4 disponible. Optimisation des requêtes serveur de 40 %. »',
          methodSteps: [
            'Appliquer l’empathie : ce qui importe à l’utilisateur n’est pas la requête serveur, mais son temps gagné et sa fluidité.',
            'Respecter la contrainte mobile-first : phrase courte, claire et immédiatement compréhensible.',
            'Créer l’accroche émotionnelle : « Vos pages s’ouvrent désormais en un battement de cils : découvrez la version 3.4, 40 % plus rapide. »',
          ],
          conclusion:
            'On passe d’une note technique froide à un bénéfice vécu, mémorable et adapté à la lecture sur smartphone.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Finalité',
            stepTheme: 'Écriture créative',
            stepTitle: 'Passer de la transmission froide à l’expérience utilisateur (UX)',
            paragraphText:
              'L’écriture créative en communication ne vise pas seulement à délivrer des faits bruts : elle fait vivre une expérience au lecteur afin de transformer une transition technique en réussite commerciale et humaine.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Selon le cours, quel est l’objectif principal de l’écriture créative pour un futur diplômé en Économie Numérique et Transformation Digitale ?',
              options: [
                'Rédiger exclusivement des poèmes classiques en alexandrins',
                'Marier la liberté créative et l’efficacité du message pour concevoir une véritable expérience utilisateur (UX) engageante',
                'Remplacer tous les développeurs web par des romanciers',
                'Écrire des rapports administratifs volontairement longs et complexes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’écriture créative fait de l’étudiant un « architecte de l’engagement », capable de traduire données et innovations en récits clairs et humains.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Piliers',
            stepTheme: 'Esthétique du langage',
            stepTitle: 'Maîtriser les leviers stylistiques de l’écriture créative',
            paragraphText:
              'Le pilier « esthétique du langage » repose sur trois leviers complémentaires : les figures de style (métaphores, comparaisons, hyperboles), le rythme (variation de la longueur des phrases) et le vocabulaire sensoriel (appel aux cinq sens).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quels sont les trois éléments constitutifs de l’« esthétique du langage » présentés dans les piliers de l’écriture créative ?',
              options: [
                'Les marges A4, l’interligne 1,5 et le filigrane',
                'Les tableaux Excel, les balises CSS et le protocole FTP',
                'Les figures de style, le rythme des phrases et le vocabulaire sensoriel',
                'La dénotation pure, l’absence d’adjectifs et le style télégraphique',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Figures de style, variation rythmique et détails sensoriels donnent au texte sa « musique » et son pouvoir d’immersion.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Triptyque comm',
            stepTheme: 'Efficacité',
            stepTitle: 'S’appuyer sur l’empathie, la structure et l’accroche',
            paragraphText:
              'Une communication efficace repose sur trois fondations : l’empathie (comprendre le public cible), la structure (organiser les idées comme une timeline ou un storyboard) et l’accroche (créer un impact immédiat pour retenir le lecteur).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Dans la métaphore audiovisuelle du cours, à quoi correspond la structuration d’un texte de communication avant sa rédaction finale ?',
              options: [
                'Au storyboard ou à la timeline de montage qui organise les séquences',
                'Au générique de fin uniquement',
                'À la panne de batterie de la caméra',
                'À la suppression de toutes les images',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Tout comme le storyboard planifie les séquences d’un film, la structure narrative canalise le message et évite que le lecteur ne se perde.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Non-fiction créative',
            stepTheme: 'Genres',
            stepTitle: 'Savoir que la créativité s’applique aussi au réel',
            paragraphText:
              'L’écriture créative ne se limite pas à la fiction (romans, nouvelles) : elle irrigue aussi la non-fiction créative (biographies, récits de voyage, journalisme narratif, études de cas d’entreprise) en donnant vie à des faits réels.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Lequel de ces formats relève de la « non-fiction créative » citée dans le cours ?',
              options: [
                'Un roman de science-fiction sur une planète imaginaire',
                'Une pièce de théâtre fantastique',
                'Un sonnet poétique abstrait',
                'Une biographie, un essai personnel ou un récit de voyage basé sur des faits réels',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La non-fiction créative applique les techniques narratives et stylistiques à des faits authentiques (biographies, journalisme narratif, récits d’entreprise).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Mobile-first',
            stepTheme: 'Web Design',
            stepTitle: 'Adapter son texte à la morphologie des appareils mobiles',
            paragraphText:
              'À l’ère du web mobile-first, les utilisateurs survolent les écrans rapidement. Un bon texte digital combine balises sémantiques claires, concision immédiate et accroche engageante afin d’être véritablement lu et non simplement survolé.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi le cours insiste-t-il sur la clarté immédiate et le « mobile-first » en écriture digitale ?',
              options: [
                'Parce que les textes web ne doivent jamais dépasser deux mots',
                'Parce que le texte doit s’adapter aux écrans mobiles et aux capacités humaines d’attention pour être évident et engageant',
                'Parce que les smartphones ne peuvent pas afficher de ponctuation',
                'Parce que l’empathie est inutile sur mobile',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le mobile-first impose une écriture fluide, hiérarchisée et percutante qui réduit la friction de lecture sur petit écran.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p2',
        order: 2,
        title: 'Diagnostiquer les quatre causes du syndrome de la page blanche',
        summary:
          'Identifier les quatre facteurs psychologiques et méthodologiques du blocage rédactionnel et associer à chacun son remède adapté.',
        conceptExplanation:
          "La page blanche n'est pas un manque de talent : c'est un problème de processus et de conflit entre le cerveau d'« auteur » (créateur) et le cerveau de « monteur » (critique). Tout comme le dérushage en vidéo sélectionne les meilleures prises après tournage, l'édition doit intervenir APRÈS la production de la matière brute.\n\nLes quatre causes principales du blocage et leurs remèdes (tableau de synthèse du cours) :\n1. Le perfectionnisme paralysant (censeur interne) : vouloir une première phrase parfaite -> auto-censure immédiate -> Remède : l'écriture automatique (flux brut sans corriger).\n2. Le déficit d'empathie ou de cible (flou stratégique) : absence de « Persona » -> impossible de choisir le bon « Tone of Voice » -> texte générique et froid -> Remède : définir clairement le Persona et ses émotions.\n3. La surcharge cognitive et le manque de structure : avoir « trop d'idées » sans storyboard -> digressions et perte de fil -> Remède : utiliser le Schéma Narratif pour canaliser la pensée.\n4. La peur de l'outil ou du support : pression liée aux codes d'un nouveau format (PWA, réseau social, script vidéo) -> blocage devant le clavier -> Remède : changer de support (écrire à la main sur papier).",
        keyRule:
          'Ne jamais faire travailler ensemble l’Auteur (qui produit le flux brut) et le Monteur (qui coupe et polit) : on capture d’abord, on édite ensuite.',
        formulas: [
          {
            name: 'Matrice Cause -> Remède de la page blanche',
            formula: 'Perfectionnisme -> Freewriting | Flou cible -> Persona | Trop d’idées -> Schéma narratif | Peur support -> Papier/stylo',
          },
        ],
        workedExample: {
          title: 'Débloquer un rédacteur paralysé devant un post LinkedIn',
          statement:
            'Un étudiant a 15 idées en tête pour un post sur la cybersécurité, mais il efface chaque phrase après l’avoir tapée parce qu’il ne sait pas s’il parle à des techniciens ou à des dirigeants.',
          methodSteps: [
            'Identifier les trois causes cumulées : perfectionnisme (efface chaque mot), déficit de cible (technicien vs dirigeant), surcharge cognitive (15 idées sans plan).',
            'Fixer d’abord un Persona unique (ex. le gérant de PME non informaticien) pour déterminer le Tone of Voice.',
            'Tracer un mini-schéma narratif en 3 étapes puis rédiger 5 minutes en flux brut sans utiliser la touche Retour arrière.',
          ],
          conclusion:
            'En séparant ciblage, structure, jet brut et édition finale, le blocage disparaît immédiatement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Censeur interne',
            stepTheme: 'Perfectionnisme',
            stepTitle: 'Identifier le conflit entre cerveau d’auteur et cerveau de monteur',
            paragraphText:
              'Le perfectionnisme paralysant survient lorsque le cerveau critique (« monteur ») juge et efface chaque mot pendant que le cerveau créateur (« auteur ») essaie de produire. Le remède direct est l’écriture automatique sans correction.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle est la cause psychologique exacte du « perfectionnisme paralysant » face à une page blanche ?',
              options: [
                'Le cerveau critique (« monteur ») agit en même temps que le cerveau créateur (« auteur ») et provoque une auto-censure immédiate',
                'L’ordinateur manque de mémoire vive pour ouvrir le document',
                'Le rédacteur ne connaît aucun mot de vocabulaire français',
                'Le texte est déjà parfaitement terminé dès la première minute',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Vouloir polir et juger la première phrase en temps réel bloque le flux créatif ; le montage ne doit intervenir qu’après la capture de matière brute.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Flou stratégique',
            stepTheme: 'Persona',
            stepTitle: 'Définir son Persona pour trouver le bon Tone of Voice',
            paragraphText:
              'Quand on ne sait pas précisément à qui l’on s’adresse (déficit d’empathie ou de cible), on ne peut ni choisir le ton adapté (Tone of Voice) ni transmettre d’émotion : le texte devient générique et froid.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quel remède préconise le cours face à un blocage causé par le « manque de cible » (flou stratégique) ?',
              options: [
                'Changer la police de caractères en Comic Sans',
                'Définir précisément le Persona (utilisateur cible) et ses émotions/besoins réels',
                'Supprimer le titre de l’article',
                'Traduire le texte dans une langue étrangère',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Connaître son Persona permet immédiatement de choisir le bon registre de langue (Tone of Voice) et les leviers émotionnels pertinents.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Surcharge cognitive',
            stepTheme: 'Désorganisation',
            stepTitle: 'Comprendre que « trop d’idées » bloque autant que « pas d’idées »',
            paragraphText:
              'La surcharge cognitive naît de l’absence de plan ou de storyboard : l’esprit s’éparpille en digressions et perd le fil. Utiliser un schéma narratif canalise la pensée exactement comme les balises HTML structurent une page.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quel remède permet de surmonter la surcharge cognitive et les digressions lorsqu’on a trop d’idées en désordre ?',
              options: [
                'Attendre plusieurs semaines sans rien écrire',
                'Fermer le document et renoncer au sujet',
                'S’appuyer sur une structure claire comme le Schéma Narratif',
                'Supprimer toute ponctuation du texte',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Schéma Narratif fournit un rail structurant qui ordonne les idées et empêche l’éparpillement.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Pression technique',
            stepTheme: 'Support',
            stepTitle: 'Contourner la peur de l’outil ou du nouveau support',
            paragraphText:
              'La peur de mal maîtriser les codes d’un support (réseau social, script vidéo, interface mobile) peut figer le rédacteur devant le clavier. Le remède simple recommandé par le cours est de changer de support : passer temporairement au papier et au stylo.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Selon le tableau de synthèse du cours, quel remède simple débloque un rédacteur paralysé par la « pression technique » devant son clavier ?',
              options: [
                'Acheter un nouvel écran plus grand',
                'Doubler la longueur de son texte',
                'Lire trois dictionnaires complets',
                'Changer de support en écrivant d’abord à la main',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Écrire à la main libère temporairement des contraintes techniques de l’écran et relance la spontanéité des idées.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Processus itératif',
            stepTheme: 'Dérushage',
            stepTitle: 'Considérer l’écriture comme un processus d’itération',
            paragraphText:
              'L’écriture fonctionne par itérations : on produit d’abord un volume brut riche, puis on pratique un « dérushage » pour sélectionner, couper et affiner les meilleures formulations.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'À quelle étape du montage vidéo le cours compare-t-il le tri et la sélection des meilleures idées après un premier jet d’écriture ?',
              options: [
                'Au dérushage',
                'À la vente des billets de cinéma',
                'À l’installation des projecteurs',
                'À l’impression de l’affiche',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme le dérushage consiste à visionner les rushes bruts pour retenir les meilleures séquences, l’édition trie la matière issue du premier jet.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p3',
        order: 3,
        title: 'Techniques de déblocage : Écriture automatique, Oulipo et Déclencheurs (Hook)',
        summary:
          'Pratiquer le Freewriting, exploiter les contraintes oulipiennes (Acrostiche, Lipogramme, S+7) et amorcer un texte par un déclencheur (Trigger / modèle Hook).',
        conceptExplanation:
          "Pour casser la page blanche et passer d'une idée brute à un contenu digital percutant, le cours propose trois familles d'outils opérationnels :\n\n1. Le lâcher-prise : l'Écriture Automatique (Freewriting) : inspirée des surréalistes, elle consiste à écrire en continu pendant 5 à 10 minutes sans jamais s'arrêter ni corriger la grammaire ou le fond, afin de court-circuiter le censeur interne.\n2. La contrainte créative : les méthodes Oulipiennes (Oulipo = Ouvroir de Littérature Potentielle). Postulat : « trop de liberté tue la créativité » ; des règles arbitraires forcent le cerveau à inventer des chemins originaux :\n- Acrostiche : les premières lettres de chaque ligne forment un mot (ex. DIGITAL).\n- Lipogramme : rédiger un paragraphe en s'interdisant une lettre précise (ex. la lettre « e »).\n- Méthode S+7 (Jean Lescure) : remplacer chaque nom commun d'un texte par le 7e nom qui le suit dans le dictionnaire, créant des associations d'idées inédites.\n- Application digitale : limite de caractères des réseaux sociaux ou format mobile-first.\n3. Déclencheurs (Triggers) et Modèle Hook : analyser une photo en décrivant ce qui se passe « hors champ », ou démarrer un texte directement par un Déclencheur (Trigger) qui pique la curiosité dès la première seconde (ex. atelier « Sprint des Contraintes » sur « La fin des mots de passe en 2026 » : flux brut 2 min -> réécriture Slack/WhatsApp 3 lignes max -> ajout d'un détail sensoriel).",
        keyRule:
          'La contrainte stimule la créativité : Freewriting pour générer la matière brute, Oulipo et contraintes de format (3 lignes) pour affûter l’impact, Trigger pour accrocher dès la 1re seconde.',
        workedExample: {
          title: 'Exécuter l’atelier « Sprint des Contraintes » (fin des mots de passe)',
          statement:
            'Passer d’un jet libre sur « La fin des mots de passe en 2026 » à un message WhatsApp de 3 lignes contenant un détail sensoriel.',
          methodSteps: [
            'Phase 1 (Freewriting 2 min) : noter sans filtre toutes les frustrations liées aux mots de passe oubliés, aux majuscules, aux caractères spéciaux et à la biométrie.',
            'Phase 2 (Contrainte de format 3 lignes max) : condenser l’idée en un message court, clair et orienté bénéfice.',
            'Phase 3 (Détail sensoriel) : ajouter une sensation concrète (le soulagement d’un simple effleurement du pouce qui déverrouille tout sans rien retenir).',
          ],
          conclusion:
            'Exemple final : « Ras-le-bol des codes oubliés ? En 2026, les passkeys remplacent vos mots de passe. Un simple effleurement du pouce suffit : respirez, votre mémoire est enfin libre. »',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Freewriting',
            stepTheme: 'Lâcher-prise',
            stepTitle: 'Pratiquer l’écriture automatique pour court-circuiter la censure',
            paragraphText:
              'Inspirée des surréalistes, l’écriture automatique (Freewriting) consiste à écrire pendant 5 à 10 minutes sans s’arrêter et sans corriger ni l’orthographe ni le style, pour laisser émerger des idées brutes.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle est la règle absolue pendant les 5 à 10 minutes d’écriture automatique (Freewriting) ?',
              options: [
                'Vérifier chaque virgule et chaque synonyme dans le dictionnaire avant d’écrire le mot suivant',
                'Écrire en continu sans s’arrêter ni corriger la grammaire ou le fond afin de neutraliser le censeur interne',
                'Recopier un article de loi mot pour mot',
                'Ne jamais écrire plus de trois mots par minute',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’écriture automatique vise à débrancher l’éditeur interne en maintenant un flux continu sans auto-censure.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Oulipo',
            stepTheme: 'Contrainte créative',
            stepTitle: 'Comprendre le paradoxe de la contrainte oulipienne',
            paragraphText:
              'L’Oulipo (Ouvroir de Littérature Potentielle) repose sur un constat paradoxal : trop de liberté fige l’imagination, tandis qu’une contrainte stricte oblige le cerveau à emprunter des chemins originaux.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le postulat fondateur des méthodes oulipiennes (Oulipo) ?',
              options: [
                'Il faut supprimer toute règle et toute limite de caractères pour être créatif',
                'Seule l’intelligence artificielle peut inventer des contraintes',
                'Trop de liberté tue la créativité ; s’imposer des règles précises stimule paradoxalement l’invention',
                'Un texte créatif ne doit jamais comporter de noms communs',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les contraintes formelles (comme la limite de caractères sur un réseau social ou un jeu oulipien) poussent l’esprit hors des clichés habituels.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Lipogramme & Acrostiche',
            stepTheme: 'Jeux Oulipo',
            stepTitle: 'Reconnaître l’acrostiche, le lipogramme et la méthode S+7',
            paragraphText:
              'Dans un acrostiche, les initiales de chaque ligne forment un mot (ex. DIGITAL). Dans un lipogramme, on s’interdit une lettre précise (ex. « e »). Dans la méthode S+7 (Jean Lescure), on remplace chaque nom commun par le 7e nom qui le suit dans le dictionnaire.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on la contrainte oulipienne consistant à écrire un paragraphe entier sans jamais utiliser une lettre spécifique (par exemple la lettre « e ») ?',
              options: [
                'Le lipogramme',
                'L’acrostiche',
                'La méthode S+7',
                'Le storyboard',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le lipogramme consiste à proscrire volontairement une ou plusieurs lettres de l’alphabet tout au long du texte.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Méthode S+7',
            stepTheme: 'Associations d’idées',
            stepTitle: 'Appliquer la méthode S+7 de Jean Lescure',
            paragraphText:
              'La méthode S+7 (Substantif + 7) remplace chaque nom commun d’un texte technique ou juridique par le septième nom qui le suit dans le dictionnaire. Le décalage parfois absurde déclenche des métaphores et associations d’idées inédites.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'En quoi consiste exactement la méthode « S+7 » (Jean Lescure) présentée dans le cours ?',
              options: [
                'Ajouter 7 points d’exclamation à chaque phrase',
                'Écrire un texte de 7 pages en 7 minutes',
                'Supprimer les 7 premiers mots d’un paragraphe',
                'Remplacer chaque nom commun d’un texte par le 7e nom qui le suit dans le dictionnaire',
              ],
              correctAnswerIndex: 3,
              explanation:
                'S+7 signifie Substantif + 7 : ce glissement lexical génère des collisions surprenantes qui stimulent la créativité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Modèle Hook',
            stepTheme: 'Déclencheurs',
            stepTitle: 'Ouvrir un contenu digital par un Trigger (Déclencheur)',
            paragraphText:
              'Appliqué à l’écriture digitale, le modèle Hook consiste à attaquer directement par un Déclencheur (Trigger) qui éveille la curiosité dès la première seconde, ou à nourrir l’imaginaire en décrivant le « hors champ » d’une image.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Selon le modèle Hook appliqué à l’écriture digitale, par quel élément doit-on démarrer un texte pour capter l’attention dès la première seconde ?',
              options: [
                'Par une bibliographie exhaustive en petites majuscules',
                'Par un Déclencheur (Trigger) qui pique immédiatement la curiosité de l’utilisateur',
                'Par trois paragraphes de mise en contexte historique neutre',
                'Par les mentions légales de l’entreprise',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Trigger capte instantanément l’attention et amorce la boucle d’engagement du lecteur sur les supports digitaux.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_ecriture_creative_ch2',
    subjectId: 'lmd_ecriture_creative',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Architecture de la persuasion, Storytelling et Immersion sensorielle',
    summary:
      'Maîtriser les piliers de la persuasion (triptyque d’Aristote, réduction de la charge cognitive), distinguer convaincre et persuader, structurer un récit (Schéma narratif, Voyage du Héros) et appliquer le « Show, Don’t Tell ».',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Écriture Créative et Communication (Module 1.II : L’architecture de la persuasion)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch2_p1',
        order: 1,
        title: 'Les piliers de la persuasion : empathie UX, triptyque d’Aristote et clarté',
        summary:
          'Distinguer persuasion et manipulation, centrer le discours sur le récepteur et équilibrer Ethos, Pathos et Logos tout en réduisant la charge cognitive.',
        conceptExplanation:
          "La persuasion ne doit jamais être confondue avec la manipulation : c'est l'art de présenter un message pour que l'interlocuteur adopte une idée ou une solution de son plein gré parce qu'il en perçoit la valeur. En économie numérique, c'est la capacité à transformer une proposition technique en une évidence psychologique.\n\nLes trois piliers de la persuasion :\n1. L'alignement des besoins (Le « Pourquoi ») : centrer le message sur le récepteur (utilisateur) et non sur la marque. Exemple : au lieu de « Notre logiciel est rapide », dire « Récupérez deux heures de votre temps chaque jour ».\n2. Le triptyque d'Aristote (rhétorique) :\n- L'Ethos (crédibilité/légitimité de l'orateur : diplômes, preuves d'expertise, études de cas).\n- Le Pathos (émotion : storytelling décrivant la frustration d'un panier abandonné).\n- Le Logos (logique et faits : chiffre de 68 % d'échec pour justifier une refonte).\n3. La réduction de la charge cognitive : un utilisateur confus n'est jamais persuadé. La fluidité et le design narratif guident le cerveau sans effort vers l'adhésion.",
        keyRule:
          'Un message persuasif aligne le bénéfice utilisateur (empathie), équilibre Ethos + Pathos + Logos, et réduit la charge cognitive par une clarté fluide.',
        formulas: [
          {
            name: 'Triptyque rhétorique d’Aristote',
            formula: 'Persuasion = Ethos (Crédibilité) + Pathos (Émotion) + Logos (Logique / Faits)',
          },
        ],
        workedExample: {
          title: 'Équilibrer Ethos, Pathos et Logos dans un pitch de refonte e-commerce',
          statement:
            'Préparer un argumentaire de 3 phrases pour proposer la refonte mobile d’un site marchand.',
          methodSteps: [
            'Ethos (crédibilité) : « Après avoir accompagné 12 PME ivoiriennes dans leur transition e-commerce… »',
            'Logos (logique/chiffres) : « …nos audits montrent que 68 % des paniers mobiles sont abandonnés à cause de formulaires trop longs. »',
            'Pathos + alignement besoins (émotion/bénéfice) : « Offrez à vos clients le soulagement d’une commande validée en un geste fluide, et transformez leur frustration en fidélité. »',
          ],
          conclusion:
            'Les trois leviers d’Aristote se renforcent mutuellement tout en restant limpides pour le décideur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Éthique',
            stepTheme: 'Persuasion',
            stepTitle: 'Différencier persuasion et manipulation',
            paragraphText:
              'La persuasion respecte la liberté de l’interlocuteur : elle l’amène à adhérer de son plein gré parce qu’il comprend clairement la valeur réelle d’une idée ou d’une solution, contrairement à la manipulation fondée sur la ruse.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Comment le cours définit-il la persuasion dans le contexte de l’économie numérique ?',
              options: [
                'L’art de cacher les défauts d’un produit pour tromper le client',
                'La capacité à présenter un message pour que l’interlocuteur adhère de son plein gré en comprenant sa valeur — transformer une proposition technique en évidence psychologique',
                'Le fait d’imposer une règle technique par la contrainte hiérarchique',
                'La répétition mécanique de chiffres sans aucun lien avec les besoins de l’utilisateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La persuasion repose sur la transparence, la valeur comprise et le libre consentement, à l’opposé de la manipulation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Centré utilisateur',
            stepTheme: 'Alignement des besoins',
            stepTitle: 'Traduire une caractéristique technique en bénéfice vécu',
            paragraphText:
              'En UX, on ne persuade pas en énumérant des spécifications centrées sur la marque (« Notre logiciel est rapide »), mais en montrant qu’on a compris le problème de l’utilisateur (« Récupérez deux heures de votre temps chaque jour »).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Laquelle de ces deux formulations applique le mieux le principe d’alignement des besoins (empathie UX) ?',
              options: [
                '« Notre serveur dispose d’un processeur 64 bits cadencé à 3,8 GHz. »',
                '« Notre entreprise existe depuis 2015 et emploie 40 ingénieurs. »',
                '« Récupérez deux heures chaque jour grâce à une automatisation simple de vos factures. »',
                '« Le module B-42 utilise un algorithme propriétaire optimisé. »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Mettre en avant le bénéfice concret pour l’utilisateur (« récupérez deux heures chaque jour ») crée une résonance immédiate.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Triptyque d’Aristote',
            stepTheme: 'Ethos / Pathos / Logos',
            stepTitle: 'Identifier le rôle exact de l’Ethos, du Pathos et du Logos',
            paragraphText:
              'Aristote identifie trois forces complémentaires de la rhétorique : l’Ethos (crédibilité de celui qui parle), le Pathos (émotion suscitée chez le public) et le Logos (logique, faits et preuves chiffrées).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Dans un argumentaire de refonte de site web, citer le chiffre vérifié de « 68 % d’abandon de panier » relève principalement de quelle force d’Aristote ?',
              options: ['Le Logos', 'Le Pathos', 'L’Ethos', 'Le Lipogramme'],
              correctAnswerIndex: 0,
              explanation:
                'Le Logos s’appuie sur la raison, les faits mesurables et les statistiques probantes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Ethos & Pathos',
            stepTheme: 'Rhétorique',
            stepTitle: 'Associer les bons exemples à l’Ethos et au Pathos',
            paragraphText:
              'L’Ethos répond à « Pourquoi vous croire ? » (expertise, diplômes, études de cas clients). Le Pathos répond à « Que ressent l’utilisateur ? » (raconter la frustration d’un client bloqué au paiement).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Présenter ses certifications, ses diplômes et trois études de cas réussies pour inspirer confiance à un client mobilise d’abord :',
              options: [
                'Le Pathos',
                'Le Logos exclusivement',
                'Le Freewriting',
                'L’Ethos (la crédibilité de l’émetteur)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’Ethos construit l’autorité morale et professionnelle qui rend l’orateur digne de confiance.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Charge cognitive',
            stepTheme: 'Clarté',
            stepTitle: 'Réduire la charge cognitive pour faciliter l’adhésion',
            paragraphText:
              'Un lecteur confus ne sera jamais persuadé : plus un texte exige d’effort mental pour être décodé, plus le risque de décrochage augmente. La clarté et la progression narrative allègent la charge cognitive.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi la réduction de la charge cognitive est-elle indissociable de la persuasion en communication digitale ?',
              options: [
                'Parce qu’un texte confus paraît plus savant',
                'Parce qu’un utilisateur qui peine à comprendre un message décroche et n’est jamais persuadé',
                'Parce que les navigateurs bloquent les phrases complexes',
                'Parce que la clarté dispense d’avoir des arguments',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fluidité cognitive permet au cerveau du lecteur d’absorber le raisonnement sans friction et d’adhérer naturellement à l’idée finale.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch2_p2',
        order: 2,
        title: 'Distinguer « Convaincre » et « Persuader » en transition digitale',
        summary:
          'Maîtriser les différences entre la voie de la raison (adhésion froide) et la voie du sentiment (adhésion chaude) et savoir les combiner selon son interlocuteur.',
        conceptExplanation:
          "Dans les projets de transformation digitale, l'erreur la plus fréquente des étudiants est de ne chercher qu'à convaincre par la technique. Une communication réellement puissante articule les deux démarches :\n\n1. Convaincre (la voie de la Raison) :\n- Domaine : la démonstration.\n- Cible : l'intellect.\n- Moyens : faits vérifiables, preuves logiques, statistiques, ROI, protocoles (Logos).\n- Objectif : la vérité, l'exactitude.\n- Résultat : adhésion « froide », lente à obtenir mais durable/stable.\n- Support type : rapport technique, tableur, audit. Exemple : convaincre un DSI (Directeur des Systèmes d'Information) grâce aux protocoles de sécurité ou à un chiffre de −68 % d'abandon.\n\n2. Persuader (la voie du Sentiment) :\n- Domaine : la séduction / l'influence.\n- Cible : l'affect et la volonté.\n- Moyens : storytelling, métaphores, force du détail, promesse d'un futur meilleur, design émotionnel (Pathos).\n- Objectif : l'action, l'engagement.\n- Résultat : adhésion « chaude », rapide à déclencher (mais parfois plus éphémère si elle n'est pas étayée).\n- Support type : publicité, pitch, storytelling. Exemple : persuader des employés d'adopter un outil collaboratif en leur montrant la baisse de leur stress quotidien.",
        keyRule:
          'Convaincre vise l’intellect par la preuve (adhésion froide, durable) ; Persuader touche l’affect par l’émotion (adhésion chaude, tournée vers l’action). Combinez les deux !',
        workedExample: {
          title: 'Adapter son discours au DSI et aux utilisateurs finaux',
          statement:
            'Votre entreprise déploie un nouvel outil collaboratif cloud. Comment convaincre le DSI puis persuader les équipes opérationnelles ?',
          methodSteps: [
            'Pour le DSI (Convaincre -> Intellect / Logos) : présenter l’architecture de chiffrement, la conformité RGPD/protection des données et le calcul de ROI sur 24 mois.',
            'Pour les employés (Persuader -> Affect / Pathos) : illustrer comment l’outil supprime les 40 e-mails quotidiens stressants et leur permet de finir leur journée sereinement.',
          ],
          conclusion:
            'Le DSI valide la faisabilité rationnelle (adhésion froide) et les équipes adoptent réellement l’outil avec enthousiasme (adhésion chaude).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Convaincre',
            stepTheme: 'Voie de la raison',
            stepTitle: 'Caractériser la démarche de conviction',
            paragraphText:
              'Convaincre consiste à emporter l’adhésion de l’intellect par des preuves rationnelles, des statistiques et des démonstrations vérifiables. On obtient une adhésion « froide », plus lente à bâtir mais stable dans le temps.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelles caractéristiques correspondent exactement au fait de « convaincre » dans le tableau comparatif du cours ?',
              options: [
                'Cible : l’affect | Moyen : métaphores | Adhésion chaude et rapide',
                'Cible : l’intellect | Moyens : faits, chiffres, démonstrations | Adhésion froide et durable',
                'Cible : l’imaginaire | Moyen : publicité | Objectif : séduction pure',
                'Cible : l’ouïe | Moyen : rimes | Objectif : divertissement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Convaincre s’adresse à la raison par des preuves vérifiables (rapports techniques, ROI) pour obtenir une adhésion froide mais solide.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Persuader',
            stepTheme: 'Voie du sentiment',
            stepTitle: 'Caractériser la démarche de persuasion',
            paragraphText:
              'Persuader vise l’affect et la volonté en mobilisant le storytelling, les images, les valeurs et l’émotion pour pousser à l’action. L’adhésion est « chaude » et rapide, mais doit être consolidée pour durer.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel est l’objectif prioritaire de la persuasion (par opposition à la conviction qui vise d’abord la vérité/exactitude) ?',
              options: [
                'La vérification comptable d’un tableur',
                'L’archivage juridique d’un contrat',
                'L’action et l’engagement de l’interlocuteur',
                'La neutralité affective absolue',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Persuader provoque une adhésion émotionnelle « chaude » qui déclenche le passage à l’action et l’engagement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Cas DSI vs Employés',
            stepTheme: 'Transition digitale',
            stepTitle: 'Cibler son registre selon les parties prenantes',
            paragraphText:
              'Dans une transition digitale, on convainc un DSI avec des protocoles de sécurité et des métriques de performance, tandis qu’on persuade les collaborateurs en leur faisant ressentir la réduction de leur stress quotidien.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle phrase illustre le mieux la PERSUASION (adhésion chaude) plutôt que la simple conviction technique ?',
              options: [
                '« Imaginez la satisfaction de votre client qui valide sa commande d’un seul geste fluide du pouce, sans aucune frustration. »',
                '« Le tunnel d’achat a réduit l’abandon de panier de 68 % sur terminaux mobiles. »',
                '« Le serveur respecte le protocole de chiffrement TLS 1.3. »',
                '« Le retour sur investissement atteint 18,4 % au troisième trimestre. »',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’invitation à imaginer la satisfaction et le geste fluide du pouce fait appel à l’émotion, au détail sensoriel et au Pathos : c’est de la persuasion.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Supports types',
            stepTheme: 'Comparaison',
            stepTitle: 'Associer chaque démarche à ses supports privilégiés',
            paragraphText:
              'Les supports privilégiés pour convaincre sont le rapport technique, le tableur ou l’étude de ROI. Les supports privilégiés pour persuader sont la publicité, le pitch et le storytelling.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle limite temporelle le cours associe-t-il à une adhésion obtenue uniquement par la persuasion émotionnelle ?',
              options: [
                'Elle est toujours impossible à obtenir sur Internet',
                'Elle exige au minimum cinq ans de démonstration',
                'Elle ne fonctionne que dans les tableurs Excel',
                'Elle est rapide à déclencher, mais peut s’avérer éphémère si elle n’est pas soutenue par des preuves',
              ],
              correctAnswerIndex: 3,
              explanation:
                'D’où la nécessité d’allier les deux : convaincre assure la stabilité rationnelle, persuader déclenche l’envie et l’action.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Synergie',
            stepTheme: 'Communication puissante',
            stepTitle: 'Combiner solidité logique et habillage émotionnel',
            paragraphText:
              'Le cours souligne que l’excellence en communication consiste à marier les deux voies : convaincre par la solidité de la structure et des preuves, et persuader par l’habillage narratif et la force du détail.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle erreur fréquente commettent les étudiants en transition digitale lorsqu’ils présentent un projet ?',
              options: [
                'Utiliser trop de preuves émotionnelles sans aucun schéma',
                'Vouloir uniquement convaincre par la technique pure en oubliant la dimension émotionnelle et humaine de la persuasion',
                'S’adresser uniquement à des clients déjà convaincus',
                'Oublier d’allumer leur ordinateur pendant la présentation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une solution techniquement parfaite échoue souvent faute d’adoption humaine si l’on ne persuade pas les utilisateurs de son bénéfice vécu.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch2_p3',
        order: 3,
        title: 'Storytelling (Schéma narratif, Voyage du Héros) et « Show, Don’t Tell »',
        summary:
          'Construire un récit de marque structuré en 5 étapes, positionner l’utilisateur en Héros et la marque en Mentor, et rendre le texte immersif grâce aux cinq sens.',
        conceptExplanation:
          "Le storytelling est l'équivalent du storyboard en montage vidéo : il structure l'information en une progression captivante pour éviter que l'utilisateur ne se perde.\n\n1. Le Schéma Narratif en 5 étapes (illustré dans l'étude de cas « Au-delà du clic ») :\n- Situation initiale : le contexte stable (ex. 8h30 dans une PME, le café fume, tout semble sous contrôle).\n- Élément perturbateur : le point de friction/problème (ex. 68 % d'abandon de panier silencieux).\n- Péripéties : la recherche de solutions et les obstacles.\n- Élément de résolution : l'intervention du produit ou de la solution UX.\n- Situation finale : le retour à l'équilibre enrichi d'une valeur ajoutée.\n2. Le Voyage du Héros appliqué au marketing moderne :\n- Le Héros = l'UTILISATEUR (et jamais la marque !) qui affronte des « monstres » (interfaces lentes, complexité).\n- Le Mentor = votre MARQUE ou expertise, qui guide sans faire à la place.\n- L'Outil Magique = votre SOLUTION intuitive qui réduit la charge cognitive.\n3. L'immersion sensorielle et le « Show, Don't Tell » (Montrer au lieu de dire) :\n- Au lieu de dire « Le site est lent », montrer : « L'utilisateur soupire, tapotant nerveusement son bureau alors que la barre de chargement semble figée à 99 %. »\n- Mobiliser les cinq sens (vue/couleurs symboliques comme l'orange incitant à l'achat, ouïe/rythme des phrases, toucher/sensation fluide du swipe ou du clic, goût, odorat) et soigner l'habillage (adjectif précis, métaphore).",
        keyRule:
          'Dans le Voyage du Héros en communication, le Héros est TOUJOURS l’utilisateur ; la marque est le Mentor qui lui remet l’Outil Magique. Appliquez le « Show, Don’t Tell ».',
        formulas: [
          {
            name: 'Casting du Voyage du Héros digital',
            formula: 'Héros = Utilisateur | Monstres = Frictions UX | Mentor = Marque | Outil Magique = Produit / Solution',
          },
        ],
        workedExample: {
          title: 'Appliquer le « Show, Don’t Tell » à un problème d’interface',
          statement:
            'Transformer la phrase plate « Notre formulaire d’inscription était trop compliqué et les clients étaient énervés » en scène sensorielle.',
          methodSteps: [
            'Remplacer le jugement abstrait (« compliqué », « énervés ») par des actions visibles et des sensations concrètes.',
            'Mobiliser la vue, le toucher et le rythme (phrases courtes pour l’agacement).',
            'Rédiger : « Troisième champ en rouge. Le pouce hésite sur l’écran minuscule, les sourcils se froncent. Un soupir, et l’onglet se ferme définitivement. »',
          ],
          conclusion:
            'Le lecteur « voit » et ressent la frustration de l’utilisateur sans qu’on ait même eu besoin d’écrire le mot « énervé ».',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Schéma narratif',
            stepTheme: 'Les 5 étapes',
            stepTitle: 'Enchaîner les cinq étapes du schéma narratif',
            paragraphText:
              'Un storytelling structuré suit cinq temps : (1) Situation initiale, (2) Élément perturbateur, (3) Péripéties, (4) Élément de résolution (la solution UX), (5) Situation finale (nouvel équilibre avec valeur ajoutée).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Dans l’étude de cas du cours (« Au-delà du clic »), que représente le constat soudain des « 68 % de clients qui abandonnent leur panier » ?',
              options: [
                'La situation finale',
                'L’élément de résolution',
                'L’élément perturbateur (le problème / point de friction)',
                'La bibliographie de l’article',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ce chiffre rompt l’apparente sérénité de la situation initiale (8h30 au bureau) et déclenche le récit : c’est l’élément perturbateur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Voyage du Héros',
            stepTheme: 'Rôle de la marque',
            stepTitle: 'Ne jamais placer la marque à la place du Héros',
            paragraphText:
              'En communication moderne, le Héros du récit n’est pas l’entreprise mais l’UTILISATEUR. La marque joue le rôle du Mentor qui remet au Héros l’« Outil Magique » (le produit ou conseil intuitif) pour vaincre ses obstacles.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Dans l’adaptation du « Voyage du Héros » à la communication de marque, quel rôle précis joue la marque ?',
              options: [
                'Le Mentor qui équipe le Héros (l’utilisateur) avec l’Outil Magique (la solution)',
                'Le Héros égocentrique qui vante uniquement ses propres exploits',
                'Le Monstre qui ralentit l’interface utilisateur',
                'Le spectateur passif qui observe sans intervenir',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Placer l’utilisateur en Héros et la marque en Mentor crée de l’empathie et valorise le client au lieu d’un discours auto-centré.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Show, Don’t Tell',
            stepTheme: 'Immersion',
            stepTitle: 'Montrer par des détails concrets au lieu d’affirmer abstraitement',
            paragraphText:
              'La règle du « Show, Don’t Tell » invite à décrire des gestes, des regards ou des scènes observables afin que le lecteur ressente lui-même l’émotion, au lieu de la lui nommer platement.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle phrase illustre le mieux le principe du « Show, Don’t Tell » (Montrer au lieu de dire) ?',
              options: [
                '« Notre site web est lent et peu ergonomique. »',
                '« L’utilisateur soupire, tapotant nerveusement son bureau tandis que la barre de chargement reste figée à 99 %. »',
                '« La performance technique de l’application est insuffisante. »',
                '« Le client est très triste et mécontent. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les détails concrets (soupir, tapotement nerveux, barre figée à 99 %) font ressentir la lenteur bien plus fortement que l’adjectif plat « lent ».',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Les 5 sens',
            stepTheme: 'Écriture sensorielle',
            stepTitle: 'Mobiliser les sens et le rythme des phrases en digital',
            paragraphText:
              'Pour compenser l’absence de contact physique derrière un écran, l’écriture sensorielle joue sur la vue (couleurs symboliques, ex. orange pour inciter à l’achat), l’ouïe (phrases courtes pour l’urgence, longues pour la fluidité), le toucher (« swipe », clic satisfaisant), le goût et l’odorat.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quel effet rythmique (lié au sens de l’ouïe) produit l’alternance de phrases courtes par rapport aux phrases longues ?',
              options: [
                'Les phrases courtes rendent le texte plus lent et somnolent',
                'Les phrases longues créent toujours un effet de panique',
                'Le rythme des phrases n’a aucun impact sur la perception du lecteur',
                'Les phrases courtes créent une sensation d’urgence et de dynamisme, tandis que les phrases longues favorisent la fluidité',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le rythme crée la « musique interne » du texte : phrases brèves pour le tempo et l’urgence, phrases amples pour l’apaisement et la fluidité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Habillage',
            stepTheme: 'Esthétique',
            stepTitle: 'Soigner l’habillage du texte avec des adjectifs précis et des métaphores',
            paragraphText:
              'À l’image de l’habillage graphique et sonore d’une vidéo, l’écriture créative enrichit la structure narrative grâce à l’adjectif juste et à la métaphore parlante (« le café fume », « un chiffre silencieux ronge votre croissance »).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Dans l’étude de cas du cours, quel procédé stylistique rend particulièrement marquante l’expression « un chiffre silencieux ronge votre croissance » ?',
              options: [
                'Un simple tableau de données comptables',
                'Une métaphore vivante qui transforme une statistique abstraite en menace visuelle et concrète',
                'Une abréviation administrative',
                'Une faute de grammaire volontaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La métaphore du verbe « ronger » personnifie le taux d’abandon et crée une image mentale immédiatement mémorable.',
            },
          },
        ],
      }),
    ],
  },
];
