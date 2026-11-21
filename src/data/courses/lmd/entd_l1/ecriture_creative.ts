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
    title: 'Fondements de l’écriture créative professionnelle et page blanche',
    summary:
      'Concevoir l’écriture comme une architecture UX (et non une attente d’inspiration), dissocier l’auteur du monteur (dérushage), maîtriser la non-fiction créative, diagnostiquer les 4 causes de la page blanche et mobiliser le Freewriting, l’Oulipo et les Triggers.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Écriture Créative et Communication',
    points: [
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p1',
        order: 1,
        title: 'L’écriture comme architecture (vs inspiration), non-fiction créative et UX',
        summary:
          'Comprendre pourquoi l’écriture professionnelle est une ingénierie structurée au service de l’expérience utilisateur, du mobile-first et de l’IA humanisée.',
        conceptExplanation:
          'L’écriture créative professionnelle marie la liberté de l’expression artistique à l’efficacité stratégique d’un message. Pour un spécialiste de l’économie numérique, il ne s’agit pas d’attendre une inspiration mystique, mais de bâtir une architecture cognitive comparable au storyboard d’un film ou au wireframe d’une interface.\n\n1. Architecture vs inspiration : une communication mémorable repose sur l’empathie (comprendre l’utilisateur), la structure (timeline ou storyboard) et l’accroche immédiate.\n2. Les 4 piliers : originalité/imagination, narration (Storytelling & Show, Don’t Tell), esthétique du langage (figures de style, rythme, vocabulaire sensoriel) et diversité des genres.\n3. La non-fiction créative : elle applique les codes du récit (scènes, tension, émotion) à des faits 100 % réels (études de cas, journalisme narratif, portraits d’entrepreneurs, bilans d’impact).\n4. Contraintes digitales et mobile-first : sur smartphone, le lecteur survole avant de lire. Balises sémantiques, clarté immédiate et humanisation des brouillons générés par IA transforment un technicien en véritable architecte de l’engagement.',
        keyRule:
          'Écrire pour le digital, c’est concevoir une architecture UX : Empathie (pour qui) + Structure (storyboard) + Accroche (rétention mobile-first).',
        workedExample: {
          title: 'Transformer une note technique froide en micro-récit UX mobile',
          statement:
            'Une fintech d’Abidjan annonce : « Déploiement API v2.4 : réduction de la latence de 45 % sur le paiement Mobile Money. » Comment en faire une accroche créative orientée utilisateur ?',
          methodSteps: [
            'Remplacer la perspective serveur (« latence -45 % ») par le vécu concret du commerçant (l’attente stressante devant le client au comptoir).',
            'Structurer en mobile-first : une accroche de 8 mots maximum suivie d’un bénéfice mesurable.',
            'Formulation finale : « Plus jamais de file d’attente figée à la caisse : vos encaissements Mobile Money se valident désormais en moins de deux secondes. »',
          ],
          conclusion:
            'L’information factuelle est préservée, mais l’architecture UX la rend immédiatement visuelle, humaine et mémorable.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Architecture vs Inspiration',
            stepTheme: 'Posture professionnelle',
            stepTitle: 'Concevoir l’écriture créative comme une architecture UX',
            paragraphText:
              'L’écriture créative professionnelle ne dépend pas d’un coup de génie imprévisible : elle fonctionne comme une architecture qui transforme des données brutes en expérience utilisateur mémorable.\n• **Architecture narrative** : on planifie ses séquences comme un storyboard ou une timeline de montage avant de polir les phrases.\n• **Architecte de l’engagement** : l’enjeu est de convertir une innovation technique en valeur humaine comprise.\nExemple : une startup ivoirienne d’agritech raconte l’économie de temps d’un planteur de cacao plutôt que d’afficher seulement des spécifications de capteurs.',
            keyRule:
              'On n’attend pas l’inspiration pour écrire : on conçoit une architecture émotionnelle et logique au service du lecteur.',
            konanTip:
              'Avant de rédiger la première phrase, esquissez toujours 3 blocs : Point de départ du lecteur → Tension vécue → Transformation promise.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle conception caractérise le mieux l’écriture créative dans un contexte professionnel numérique ?',
              options: [
                'Attendre passivement une inspiration artistique sans aucun plan préalable',
                'Une architecture structurée (empathie, storyboard, accroche) visant à créer une véritable expérience utilisateur (UX)',
                'La rédaction exclusive de poèmes en vers classiques pour les rapports annuels',
                'L’accumulation maximale de jargon technique pour impressionner le lecteur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En communication digitale, l’écriture créative est une ingénierie du sens : elle organise l’émotion et la logique comme un storyboard pour guider l’utilisateur sans friction.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Les 4 piliers',
            stepTheme: 'Fondations stylistiques',
            stepTitle: 'Articuler originalité, narration, esthétique et genres',
            paragraphText:
              'Toute écriture créative solide s’appuie sur quatre piliers complémentaires qui donnent au message son « supplément d’âme ».\n• **Originalité et imagination** : sortir des formules génériques pour créer une voix singulière.\n• **Narration (Storytelling)** : schémas narratifs, protagonistes et règle du « Show, Don’t Tell ».\n• **Esthétique du langage** : figures de style, variation du rythme des phrases et vocabulaire sensoriel.\nExemple : dans une newsletter tech UEMOA, varier phrases brèves percutantes et images visuelles évite l’ennui des communiqués administratifs.',
            formula: {
              name: 'Équation de l’impact créatif',
              formula: '\\text{Impact} = \\text{Originalit\\acute{e}} + \\text{Narration} + \\text{Esth\\acute{e}tique} + \\text{Format adapt\\acute{e}}',
              note: 'L’esthétique combine figures de style, musique du rythme et appel aux cinq sens.',
            },
            konanTip:
              'Lisez votre texte à voix haute : si votre souffle s’essouffle ou si toutes les phrases ont la même longueur, cassez la monotonie par une phrase courte.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quels sont les trois leviers qui composent précisément le pilier « esthétique du langage » ?',
              options: [
                'Les marges de page, la taille de police et le pied de page',
                'Les figures de style, le rythme des phrases et le vocabulaire sensoriel',
                'Les tableaux financiers, les notes de bas de page et les annexes juridiques',
                'L’orthographe phonétique, les abréviations SMS et l’absence de verbes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’esthétique du langage sculpte la forme du texte via les images (figures de style), la musicalité (rythme) et l’immersion (vocabulaire sensoriel).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Non-fiction créative',
            stepTheme: 'Genres rédactionnels',
            stepTitle: 'Appliquer les techniques du récit à des faits 100 % réels',
            paragraphText:
              'Contrairement à une idée reçue, l’écriture créative ne se limite pas à la fiction pure (romans, nouvelles, théâtre) : elle irrigue toute la non-fiction créative.\n• **Définition** : raconter des faits réels, vérifiés et documentés en mobilisant le rythme, les scènes concrètes et l’émotion.\n• **Formats professionnels** : études de cas clients, journalisme narratif, biographies de fondateurs, rapports d’impact.\nExemple : retracer le parcours réel d’une coopérative féminine à Bouaké adoptant le paiement numérique rend un rapport annuel captivant sans inventer aucune donnée.',
            keyRule:
              'La non-fiction créative ne déforme jamais les faits : elle change la mise en scène des faits réels pour les rendre vivants et mémorables.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces livrables professionnels relève directement de la « non-fiction créative » ?',
              options: [
                'Une nouvelle fantastique se déroulant sur Mars en 2450',
                'Une étude de cas réelle racontant la transformation digitale d’une PME avec scènes vécues et données vérifiées',
                'Une liste brute de 200 références produits sans aucune phrase rédigée',
                'Un sonnet poétique abstrait sans rapport avec la réalité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La non-fiction créative applique les outils narratifs et sensoriels (scènes, tension, résolution) à des événements et chiffres authentiques.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Triptyque UX',
            stepTheme: 'Communication efficace',
            stepTitle: 'Relier empathie, structure chronologique et accroche immédiate',
            paragraphText:
              'Une interface belle mais incompréhensible échoue ; il en va de même pour un texte. La communication écrite efficace repose sur trois axes indissociables.\n• **Empathie** : se glisser dans le quotidien, les craintes et les attentes de la personne qui lit.\n• **Structure** : ordonner les idées logiquement comme une timeline vidéo afin d’éviter toute perte de repère.\n• **Accroche** : frapper dès la première ligne pour empêcher le lecteur de fermer l’onglet.\nExemple : sur un écran mobile, un internaute décide en moins de 3 secondes s’il poursuit sa lecture ou quitte la page.',
            konanTip:
              'Si votre deuxième paragraphe répond encore à « de quoi parle-t-on ? », votre accroche et votre structure manquent de clarté immédiate.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans la métaphore audiovisuelle de l’écriture digitale, à quoi correspond la structuration chronologique et logique des idées ?',
              options: [
                'À un storyboard ou une timeline de montage qui guide le regard séquence après séquence',
                'Au générique défilant à la fin d’un film',
                'À un flou artistique volontaire destiné à perdre le lecteur',
                'À la suppression complète de toute progression entre les idées',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Tout comme le storyboard planifie les plans avant le tournage, la structure assure une progression fluide où chaque idée prépare la suivante.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Mobile-First & HTML',
            stepTheme: 'Morphologie des écrans',
            stepTitle: 'Adapter son texte à la lecture rapide sur smartphone',
            paragraphText:
              'À l’ère du mobile-first en Afrique de l’Ouest, plus de 80 % des contenus digitaux sont consultés sur smartphone. L’écriture doit donc épouser la morphologie des petits écrans.\n• **Balises sémantiques** : titres hiérarchisés (H1, H2), paragraphes courts (2 à 3 lignes) et listes aérées facilitent le balayage visuel.\n• **Clarté auto-évidente** : le texte doit se comprendre instantanément sans effort de décodage.\nExemple : un paragraphe de 12 lignes compactes devient un mur gris dissuasif sur un écran de 6 pouces ; scindé en 3 micro-blocs, il est lu jusqu’au bout.',
            keyRule:
              'En mobile-first, la mise en forme fait partie du sens : un texte non scannable n’est tout simplement pas lu.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi l’optimisation « mobile-first » modifie-t-elle la façon même de rédiger un contenu web ?',
              options: [
                'Parce que les smartphones n’affichent pas les adjectifs qualificatifs',
                'Parce que les petits écrans et l’attention fragmentée exigent des phrases concises, une hiérarchie sémantique claire et une accroche immédiate',
                'Parce qu’il est interdit d’utiliser des verbes conjugués sur mobile',
                'Parce que les lecteurs mobiles préfèrent des blocs compacts de 25 lignes sans alinéa',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur mobile, l’œil balaie en « F » : des paragraphes courts, des intertitres explicites et une clarté immédiate évitent le rebond.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'IA humanisée',
            stepTheme: 'Écriture augmentée',
            stepTitle: 'Humaniser les textes issus de l’IA générative',
            paragraphText:
              'Les outils d’IA générative produisent en quelques secondes des textes grammaticalement corrects, mais souvent lisses, prévisibles et dépourvus de vécu.\n• **Piège de la standardisation** : des formules creuses (« dans un monde en constante évolution ») trahissent un contenu généré sans âme.\n• **Rôle du rédacteur humain** : injecter des anecdotes locales véridiques, des détails sensoriels, une prise de position claire et un rythme incarné.\nExemple : remplacer « optimise votre productivité » par « vous libère enfin de la saisie manuelle du vendredi soir à Plateau ».',
            keyRule:
              'L’IA fournit un premier matériau brut ; seule l’expertise humaine apporte l’empathie, l’ancrage réel et la voix singulière.',
            konanTip:
              'Supprimez systématiquement les intros clichés générées par l’IA (« À l’ère du numérique… ») et démarrez directement par le fait ou la scène concrète.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle valeur ajoutée indispensable le rédacteur humain doit-il apporter lorsqu’il utilise une IA générative en communication ?',
              options: [
                'Allonger artificiellement le texte avec des répétitions génériques',
                'Publier le premier jet brut sans le relire pour gagner du temps',
                'Humaniser le texte par l’ancrage réel, l’empathie, le détail sensoriel et une voix éditoriale singulière',
                'Remplacer tous les noms propres par des numéros de série',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une IA simule la moyenne statistique des textes existants ; seul l’humain garantit la vérité du vécu, le ton juste et l’impact émotionnel.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p2',
        order: 2,
        title: 'Auteur vs Monteur : dérushage et les 4 blocages de la page blanche',
        summary:
          'Séparer strictement la phase de production brute (Auteur) de la phase critique (Monteur / dérushage) et diagnostiquer les quatre causes du syndrome de la page blanche.',
        conceptExplanation:
          'La page blanche n’est pas un manque de talent ni une fatalité : c’est une erreur de processus. Elle éclate lorsque l’on mélange deux opérations mentales incompatibles.\n\n1. Cerveau d’Auteur vs cerveau de Monteur : l’Auteur explore, génère et capture la matière première sans se censurer (comme un caméraman qui filme tous les plans). Le Monteur intervient APRÈS pour visionner les rushes (« dérushage »), couper le superflu, réordonner et polir le style.\n2. Les 4 facteurs de blocage et leurs remèdes exacts :\n- Perfectionnisme paralysant (censeur interne actif trop tôt) → auto-censure immédiate → Remède : écriture automatique en flux brut.\n- Déficit d’empathie ou de cible (flou stratégique) → texte froid et générique → Remède : définir le Persona et ses émotions.\n- Surcharge cognitive et désorganisation (« trop d’idées » sans plan) → digressions → Remède : structurer par un Schéma Narratif.\n- Pression technique (peur du clavier ou des codes d’un nouveau support) → blocage moteur → Remède : changer de support (papier et stylo).',
        keyRule:
          'Règle d’or du processus rédactionnel : l’Auteur produit la matière brute, le dérushage sélectionne les pépites, le Monteur polit — jamais simultanément.',
        formulas: [
          {
            name: 'Chaîne itérative de production',
            formula: '\\text{Capture brute (Auteur)} \\longrightarrow \\text{D\\acute{e}rushage (Tri)} \\longrightarrow \\text{\\acute{E}dition fine (Monteur)}',
            note: 'Vouloir éditer pendant la capture brute provoque immédiatement la paralysie.',
          },
        ],
        workedExample: {
          title: 'Débloquer la rédaction d’un pitch de projet e-santé',
          statement:
            'Kouamé doit rédiger une présentation de 250 mots pour une application de prise de rendez-vous médical en Côte d’Ivoire. Il reste bloqué 45 minutes devant un écran blanc en effaçant chaque ligne.',
          methodSteps: [
            'Diagnostic : il cumule perfectionnisme (efface chaque mot), flou de cible (parle-t-il aux médecins ou aux patients ?) et surcharge cognitive (12 idées en vrac).',
            'Désamorçage : il ferme son ordinateur, prend un cahier (changement de support) et choisit un Persona unique (une mère de famille pressée).',
            'Phase Auteur (5 min) : il écrit sans rature tout ce qu’elle ressent dans une salle d’attente bondée.',
            'Phase Dérushage & Monteur : il tape les 4 meilleures phrases et ajuste le rythme.',
          ],
          conclusion:
            'En séparant le ciblage, le jet brut et le montage, Kouamé produit un pitch limpide en 15 minutes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Auteur vs Monteur',
            stepTheme: 'Processus itératif',
            stepTitle: 'Dissocier la phase créative d’Auteur de la phase critique de Monteur',
            paragraphText:
              'L’écriture professionnelle est un processus itératif emprunté au cinéma. Vouloir rédiger et corriger à la seconde près revient à monter un film pendant que la caméra tourne encore.\n• **L’Auteur (capture)** : ouvre le flux, accepte les phrases imparfaites et accumule de la matière brute.\n• **Le Monteur (édition)** : coupe, réorganise, vérifie l’orthographe et affûte les transitions dans un second temps.\nExemple : écrire 400 mots imparfaits en 8 minutes puis en garder 180 excellents est trois fois plus rapide que de chercher la phrase parfaite dès la ligne 1.',
            visualSchema: {
              type: 'flowchart',
              title: 'Boucle de création : Auteur → Dérushage → Monteur',
              caption: 'Ne jamais activer le censeur interne (Monteur) pendant la phase de capture brute (Auteur).',
              flowchart: {
                direction: 'horizontal',
                steps: [
                  {
                    label: '1. Cerveau d’Auteur',
                    sublabel: 'Capture brute sans auto-censure',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: '2. Dérushage',
                    sublabel: 'Tri et sélection des pépites',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: '3. Cerveau de Monteur',
                    sublabel: 'Coupe, rythme et polissage',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: '4. Test UX mobile',
                    sublabel: 'Clarté & accroche validées',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            konanTip:
              'Astuce radicale : passez la police en gris clair ou coupez la touche Retour arrière pendant 5 minutes pour forcer votre Auteur à avancer.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle erreur de processus provoque le plus souvent le blocage dès la première phrase ?',
              options: [
                'Faire travailler le cerveau de « Monteur » (critique) en même temps que le cerveau d’« Auteur » (créateur)',
                'Utiliser un brouillon papier avant de passer à l’ordinateur',
                'Définir son lecteur cible avant de commencer à écrire',
                'Relire et corriger son texte uniquement après avoir terminé le premier jet',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le conflit simultané entre création (Auteur) et jugement (Monteur) déclenche une auto-censure immédiate qui paralyse l’écriture.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Dérushage',
            stepTheme: 'Sélection éditoriale',
            stepTitle: 'Pratiquer le dérushage pour extraire le cœur du message',
            paragraphText:
              'En production audiovisuelle, le dérushage consiste à visionner un grand volume d’images brutes (les rushes) pour repérer les rares séquences porteuses d’émotion et de sens.\n• **Transposition écrite** : surligner dans son brouillon les 20 % de phrases qui portent vraiment l’idée forte et éliminer sans pitié le remplissage.\n• **Gain de densité** : un texte court issu d’un long dérushage est toujours plus riche qu’un texte court écrit à l’économie.\nExemple : réduire un compte-rendu de 800 mots à un post LinkedIn de 150 mots percutants.',
            keyRule:
              'La qualité d’un texte final dépend moins de ce que vous ajoutez que de ce que vous osez couper lors du dérushage.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'En écriture créative professionnelle, en quoi consiste l’étape du « dérushage » ?',
              options: [
                'À publier intégralement ses notes brutes sans aucune coupe',
                'À trier un premier jet abondant pour sélectionner les idées et formulations les plus percutantes avant le montage final',
                'À effacer tout son document pour repartir de zéro chaque heure',
                'À traduire son brouillon mot à mot dans une autre langue',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme au montage vidéo, le dérushage isole les meilleures « prises » textuelles au milieu du flux brut.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Blocages 1 & 2',
            stepTheme: 'Perfectionnisme & Flou cible',
            stepTitle: 'Déjouer le perfectionnisme et le déficit de cible',
            paragraphText:
              'Deux causes majeures expliquent la majorité des pannes d’écriture devant l’écran.\n• **Le perfectionnisme (censeur interne)** : exiger un titre définitif et une première phrase brillante dès la seconde zéro mène à l’auto-censure immédiate.\n• **Le déficit d’empathie (flou stratégique)** : ignorer à qui l’on s’adresse empêche de choisir le bon registre (Tone of Voice) et produit un texte générique.\nExemple : impossible d’écrire une page d’accueil convaincante si l’on ne sait pas si le visiteur est un étudiant fauché ou un directeur financier.',
            konanTip:
              'Face à un texte qui sonne faux ou froid, ne réécrivez pas les mots tout de suite : demandez-vous d’abord « À quelle personne précise suis-je en train de parler ? ».',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle conséquence directe entraîne un « déficit d’empathie ou de cible » au moment de rédiger ?',
              options: [
                'Une amélioration automatique du rythme des phrases',
                'Un texte générique et froid car aucun Tone of Voice ni aucune émotion précise ne peuvent être choisis',
                'Une maîtrise immédiate des balises HTML mobiles',
                'La disparition complète du censeur interne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans Persona identifié, l’auteur écrit dans le vide : le ton reste neutre, impersonnel et incapable de toucher le lecteur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Blocages 3 & 4',
            stepTheme: 'Surcharge & Support',
            stepTitle: 'Surmonter la surcharge cognitive et la peur du support',
            paragraphText:
              'Paradoxalement, avoir trop d’idées bloque autant que le vide total lorsque aucune structure ne vient les ordonner.\n• **Surcharge cognitive (désorganisation)** : sans schéma narratif, l’esprit saute d’une digression à l’autre et perd son fil conducteur.\n• **Pression technique du support** : redouter les codes d’un nouveau canal (PWA, carrousel, script vidéo) fige les doigts sur le clavier.\nExemple : un rédacteur bloqué devant l’éditeur d’une app web retrouve immédiatement sa fluidité en griffonnant les 5 idées clés sur une feuille blanche.',
            keyRule:
              'Trop d’idées sans structure = surcharge cognitive (remède : Schéma Narratif). Peur de l’outil = pression technique (remède : papier et stylo).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Un étudiant déborde de 20 idées brillantes mais n’arrive pas à aligner trois phrases cohérentes car il part dans tous les sens. Quel est son blocage et son remède ?',
              options: [
                'Blocage : manque d’idées | Remède : lire un dictionnaire entier',
                'Blocage : surcharge cognitive et manque de structure | Remède : organiser ses idées avec un Schéma Narratif',
                'Blocage : maîtrise excessive du HTML | Remède : supprimer toute ponctuation',
                'Blocage : absence de clavier | Remède : fermer le projet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La surcharge cognitive vient d’idées non canalisées ; le Schéma Narratif sert de squelette structurant exactement comme les balises HTML d’une page.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Matrice des 4 blocages',
            stepTheme: 'Diagnostic rapide',
            stepTitle: 'Associer chaque symptôme de page blanche à son antidote exact',
            paragraphText:
              'Plutôt que de culpabiliser devant un curseur clignotant, le professionnel pose un diagnostic précis en 30 secondes à l’aide de la matrice des quatre blocages.\n• **Auto-censure mot à mot** → Freewriting (flux brut).\n• **Ton plat et impersonnel** → Fiche Persona émotionnelle.\n• **Digressions et perte de fil** → Plan en Schéma Narratif.\n• **Crispation devant l’écran** → Changement de support vers le manuscrit ou la dictée vocale.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice des 4 blocages d’écriture et leurs remèdes',
              caption: 'Diagnostiquer la cause exacte permet d’appliquer immédiatement l’antidote adapté.',
              matrix2x2: {
                topAxis: ['Blocage psychologique / cible', 'Blocage structurel / outil'],
                topLeft: {
                  title: '1. Perfectionnisme (Censeur)',
                  color: 'orange',
                  items: [
                    'Symptôme : efface chaque phrase immédiatement',
                    'Cause : Monteur actif trop tôt',
                    'Remède : Écriture automatique (5–10 min sans pause)',
                  ],
                },
                topRight: {
                  title: '2. Flou stratégique (Cible)',
                  color: 'blue',
                  items: [
                    'Symptôme : texte froid, générique, sans voix',
                    'Cause : absence de lecteur identifié',
                    'Remède : Définir le Persona et ses émotions',
                  ],
                },
                bottomLeft: {
                  title: '3. Surcharge cognitive',
                  color: 'violet',
                  items: [
                    'Symptôme : trop d’idées, digressions',
                    'Cause : absence de storyboard / plan',
                    'Remède : Canaliser via le Schéma Narratif',
                  ],
                },
                bottomRight: {
                  title: '4. Pression technique',
                  color: 'green',
                  items: [
                    'Symptôme : paralysie devant l’interface/clavier',
                    'Cause : peur des codes du support digital',
                    'Remède : Changer de support (écrire à la main)',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quel antidote correspond directement au blocage dit de « pression technique » devant un nouveau format digital ?',
              options: [
                'Changer de support en passant temporairement à l’écriture manuscrite sur papier',
                'Multiplier par trois le nombre de polices dans le document',
                'Supprimer les besoins du Persona de son cahier des charges',
                'Activer la correction grammaticale automatique la plus stricte dès le premier mot',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Quitter l’écran pour un carnet papier lève instantanément l’inhibition liée aux contraintes visuelles et techniques du support numérique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Réactivation créative',
            stepTitle: 'Combiner deux remèdes sur un cas concret d’agence digitale',
            paragraphText:
              'Dans la pratique, deux blocages se superposent souvent : par exemple, un chef de projet qui redoute les contraintes d’un carrousel mobile tout en voulant chaque slide parfaite du premier coup.\n• **Étape 1** : esquisser les 6 cadres au feutre sur une feuille A4 (contre la pression technique).\n• **Étape 2** : remplir chaque cadre en jet libre chronométré de 90 secondes (contre le perfectionnisme).\nExemple : cette méthode en deux temps permet à une équipe de boucler une campagne complète en moins d’une heure.',
            konanTip:
              'Séparez toujours vos séances en deux créneaux horaires distincts sur votre agenda : « Matin = Auteur (produire) », « Après-midi = Monteur (polir) ».',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Pour un rédacteur à la fois intimidé par le format d’un script vidéo TikTok et bloqué par son perfectionnisme, quel enchaînement est le plus efficace ?',
              options: [
                'Peaufiner le mot d’ouverture sur le logiciel de montage pendant deux heures',
                'Esquisser d’abord la trame au stylo sur papier puis écrire un jet brut sans aucune correction pendant 5 minutes',
                'Attendre la veille de la publication pour espérer un déclic spontané',
                'Copier-coller un texte juridique neutre sans modifier le ton',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Passer au papier neutralise la pression de l’outil, et le jet brut sans correction court-circuite le perfectionnisme.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p3',
        order: 3,
        title: 'Écriture automatique (Freewriting) et méthodes oulipiennes (Oulipo)',
        summary:
          'Maîtriser la technique du lâcher-prise (Freewriting) et le paradoxe créatif de la contrainte volontaire : Acrostiche, Lipogramme et méthode S+7.',
        conceptExplanation:
          'Lorsque l’imagination semble grippée, deux approches apparemment opposées se complètent à merveille : le lâcher-prise total et la contrainte arbitraire.\n\n1. L’Écriture Automatique (Freewriting) : issue du mouvement surréaliste, elle consiste à écrire sans interruption pendant 5 à 10 minutes sans jamais corriger l’orthographe, le style ni la logique. Si l’idée manque, on écrit « je cherche une idée » jusqu’à ce que le flux reprenne. Objectif : court-circuiter le censeur interne.\n2. Les contraintes oulipiennes (Oulipo = Ouvroir de Littérature Potentielle) : fondé sur le postulat que « trop de liberté tue la créativité ». Imposer une règle stricte oblige le cerveau à quitter ses autoroutes habituelles :\n- Acrostiche : les premières lettres de chaque ligne forment un mot clé vertical (ex. D-I-G-I-T-A-L).\n- Lipogramme : rédiger un texte entier en interdisant une lettre précise (ex. sans la lettre « e »).\n- Méthode S+7 (Jean Lescure) : remplacer chaque nom commun d’un texte existant par le 7e nom commun qui le suit dans le dictionnaire, générant des métaphores surprenantes.\n3. En digital, la contrainte de caractères (ex. 280 caractères ou 3 lignes WhatsApp) joue exactement le rôle d’un Oulipo moderne.',
        keyRule:
          'Trop de liberté fige l’esprit : Freewriting libère le flux brut, tandis que la contrainte (Oulipo ou format court digital) force l’originalité.',
        workedExample: {
          title: 'Exécuter un « Sprint des Contraintes » sur le thème des Passkeys (fin des mots de passe)',
          statement:
            'Passer d’une page blanche sur « La fin des mots de passe en 2026 » à un message WhatsApp percutant de 3 lignes maximum avec détail sensoriel.',
          methodSteps: [
            'Phase 1 — Freewriting (2 min) : écrire sans s’arrêter sur l’agacement des codes oubliés, majuscules obligatoires, SMS expirés, empreinte digitale.',
            'Phase 2 — Contrainte Oulipienne de format (5 min) : condenser en 3 lignes maximum adaptées à WhatsApp/Slack.',
            'Phase 3 — Détail sensoriel (3 min) : ajouter le ressenti physique (effleurer le capteur du pouce, soupir de soulagement).',
          ],
          conclusion:
            'Texte final : « Encore un mot de passe oublié ? En 2026, vos clés biométriques prennent le relais : un simple effleurement du pouce sur l’écran et tout s’ouvre, sans stress ni code à retenir. »',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Freewriting',
            stepTheme: 'Lâcher-prise',
            stepTitle: 'Pratiquer l’écriture automatique pour neutraliser le censeur',
            paragraphText:
              'Héritée des écrivains surréalistes, l’écriture automatique (ou Freewriting) consiste à maintenir le stylo ou les doigts en mouvement continu pendant 5 à 10 minutes.\n• **Règle d’or** : zéro pause, zéro retour en arrière, zéro correction grammaticale pendant le chronomètre.\n• **Effet cognitif** : la vitesse d’exécution dépasse la vitesse de jugement du censeur interne et libère des associations spontanées.\nExemple : un rédacteur bloqué sur un article sur l’e-commerce lance un chrono de 7 minutes et découvre deux angles inédits au bout de la 4e minute.',
            keyRule:
              'Pendant le Freewriting, la main ne s’arrête jamais : si le fil casse, écrivez ce que vous ressentez jusqu’à ce que la prochaine idée surgisse.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quel mécanisme psychologique l’écriture automatique (Freewriting) vise-t-elle précisément à neutraliser pendant 5 à 10 minutes ?',
              options: [
                'L’inspiration créative et l’empathie envers le lecteur',
                'Le censeur interne (éditeur critique) qui juge chaque idée avant même qu’elle soit écrite',
                'La capacité de taper plus de trente mots à la minute',
                'La compréhension de la grammaire française lors de la relecture finale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En interdisant toute pause et toute correction durant 5 à 10 minutes, le Freewriting court-circuite l’auto-censure et fait émerger la matière brute.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Paradoxe Oulipo',
            stepTheme: 'Contrainte créative',
            stepTitle: 'Comprendre pourquoi la contrainte stimule l’invention',
            paragraphText:
              'Fondé notamment par Raymond Queneau et François Le Lionnais, l’Oulipo (Ouvroir de Littérature Potentielle) s’appuie sur un paradoxe fécond : la liberté absolue paralyse souvent, tandis que la contrainte libère.\n• **Mécanisme** : confronté à une règle arbitraire, le cerveau ne peut plus utiliser ses clichés automatiques et doit explorer des chemins lexicaux nouveaux.\n• **Lien digital** : limiter un post à 3 lignes ou un titre à 45 caractères pour mobile agit comme une contrainte oulipienne de concision.',
            konanTip:
              'Quand vous manquez d’idées sur un sujet banal, imposez-vous une règle folle : « Résumer le projet sans utiliser le mot digital, numérique ni solution ».',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le postulat paradoxal au cœur des méthodes oulipiennes (Oulipo) ?',
              options: [
                'Plus un auteur a de contraintes formelles, moins il peut être original',
                'Trop de liberté tue la créativité ; s’imposer des règles strictes force le cerveau à trouver des chemins originaux',
                'Seuls les textes sans aucune limite de format peuvent captiver sur les réseaux sociaux',
                'L’écriture créative exige de supprimer toute règle linguistique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La contrainte bloque les automatismes paresseux et oblige l’esprit à inventer des formulations inédites et concises.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Acrostiche & Lipogramme',
            stepTheme: 'Jeux de contraintes',
            stepTitle: 'Distinguer l’acrostiche et le lipogramme en atelier',
            paragraphText:
              'Deux jeux oulipiens classiques entraînent efficacement la souplesse verbale des communicants.\n• **L’Acrostiche** : les initiales de chaque ligne ou phrase forment verticalement un mot clé (ex. D-I-G-I-T-A-L pour structurer un manifeste).\n• **Le Lipogramme** : rédiger un paragraphe entier en s’interdisant une lettre donnée (souvent la lettre « e », la plus fréquente du français).\nExemple : écrire une publicité de 4 phrases sans la lettre « e » oblige à renouveler complètement son vocabulaire habituel.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Un rédacteur écrit un texte de 5 lignes dont les premières lettres lues verticalement forment le mot « FUTUR ». Quelle contrainte oulipienne utilise-t-il ?',
              options: [
                'Le lipogramme',
                'La méthode S+7',
                'L’acrostiche',
                'L’écriture automatique sans ponctuation',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans un acrostiche, les lettres initiales des lignes successives composent un mot ou un message vertical.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode S+7',
            stepTheme: 'Jean Lescure',
            stepTitle: 'Générer des images inédites avec la méthode S+7',
            paragraphText:
              'Imaginée par Jean Lescure, la méthode S+7 (Substantif + 7) est une machine à créer des métaphores surprenantes à partir de textes rigides.\n• **Protocole** : prendre un article technique ou juridique et remplacer chaque nom commun par le septième substantif qui le suit dans le dictionnaire.\n• **Intérêt** : le résultat, parfois cocasse ou poétique, brise la rigidité des clichés et révèle des rapprochements inattendus.\nExemple : transformer un paragraphe juridique sec sur les cookies web en point de départ d’une campagne décalée.',
            formula: {
              name: 'Règle de transformation S+7',
              formula: '\\text{Nom commun } N_i \\longmapsto \\text{Nom commun } N_{i+7} \\text{ dans le dictionnaire}',
              note: 'Méthode conçue par Jean Lescure au sein de l’Oulipo pour casser les automatismes sémantiques.',
            },
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'En quoi consiste exactement la méthode oulipienne « S+7 » de Jean Lescure ?',
              options: [
                'Ajouter sept adjectifs qualificatifs devant chaque sujet',
                'Remplacer chaque nom commun d’un texte par le septième nom commun qui le suit dans le dictionnaire',
                'Écrire sept brouillons successifs en sept jours',
                'Supprimer un mot sur sept dans un article de presse',
              ],
              correctAnswerIndex: 1,
              explanation:
                'S+7 signifie « Substantif + 7 » : ce décalage systématique produit des collisions verbales qui réveillent l’imagination.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Sprint des Contraintes',
            stepTheme: 'Du brut au format court',
            stepTitle: 'Articuler flux libre puis compression en format mobile',
            paragraphText:
              'L’erreur des débutants est de vouloir obtenir directement un message Slack ou WhatsApp de 3 lignes parfait sans phase d’exploration.\n• **Phase 1 (Flux brut, 2 min)** : vider ses idées en Freewriting sans limite de longueur.\n• **Phase 2 (Contrainte format, 5 min)** : comprimer le cœur en 3 lignes nettes.\n• **Phase 3 (Humanisation, 3 min)** : ajouter un détail sensoriel concret.\nExemple : sur « la fin des mots de passe », l’étape 3 transforme un résumé technique en soulagement physique ressenti.',
            keyRule:
              'On n’écrit pas court du premier coup : on écrit large pour trouver la vérité du message, puis on compresse sous contrainte.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Dans l’atelier du « Sprint des Contraintes », dans quel ordre logique enchaîne-t-on les trois phases ?',
              options: [
                'Contrainte de 3 lignes → Détail sensoriel → Freewriting de 2 minutes',
                'Freewriting (flux brut) → Compression sous contrainte de format (3 lignes) → Ajout d’un détail sensoriel',
                'Détail sensoriel seul → Suppression de tout le texte → Publication immédiate',
                'Traduction automatique → Mise en tableau Excel → Lipogramme sans voyelles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On génère d’abord la matière librement (Freewriting), on la taille ensuite au format cible (3 lignes), puis on l’incarne par un détail sensoriel.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Contraintes digitales',
            stepTheme: 'Réseaux & PWA',
            stepTitle: 'Exploiter les limites techniques des plateformes comme tremplin',
            paragraphText:
              'Chaque plateforme numérique impose son propre cadre oulipien : 280 caractères sur X, 2 lignes visibles avant le bouton « Voir plus » sur LinkedIn, ou 45 caractères pour un objet d’e-mail sur smartphone.\n• **Contrainte = clarté** : devoir dire l’essentiel dans les 120 premiers caractères élimine les introductions molles.\nExemple : une notification push d’une app de livraison à Abidjan n’a que 60 caractères pour informer et rassurer l’acheteur.',
            konanTip:
              'Rédigez toujours les 140 premiers caractères de vos posts LinkedIn comme s’ils devaient convaincre à eux seuls : c’est la zone affichée avant le clic sur « …voir plus ».',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi la limite stricte de caractères d’une notification push ou d’un aperçu LinkedIn agit-elle comme une contrainte oulipienne bénéfique ?',
              options: [
                'Elle oblige le rédacteur à éliminer le remplissage et à concentrer l’accroche dès les premiers mots',
                'Elle empêche totalement de raconter la moindre histoire',
                'Elle impose d’utiliser uniquement des sigles incompréhensibles',
                'Elle supprime le besoin de connaître son Persona',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une limite spatiale stricte force à aller à l’essentiel, à choisir des verbes forts et à accrocher l’attention immédiatement.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch1_p4',
        order: 4,
        title: 'Déclencheurs (Triggers), analyse « hors champ » et modèle Hook',
        summary:
          'Stimuler l’imagination par l’observation visuelle (« hors champ ») et capter l’attention dès la première seconde grâce au Déclencheur (Trigger) du modèle Hook.',
        conceptExplanation:
          'Lorsque la panne d’écriture provient d’un manque de stimuli concrets, le rédacteur s’appuie sur des déclencheurs externes et des mécanismes d’attention éprouvés en design produit.\n\n1. L’analyse d’image et le « hors champ » : face à une photographie riche (ex. une vendeuse de marché utilisant un terminal Mobile Money), ne pas se contenter de décrire ce qui est visible dans le cadre. Imaginer ce qui s’est passé 5 minutes avant, ce qui se joue hors du cadre et ce que ressent la personne.\n2. Le modèle Hook appliqué à l’écriture : inspiré de l’UX design (Trigger → Action → Récompense variable → Investissement), le texte digital s’ouvre directement par un Déclencheur (Trigger) qui pique la curiosité dès la première seconde.\n3. Quatre types de Triggers efficaces : la statistique contre-intuitive, la question qui réveille une douleur vécue, l’image sensorielle inattendue ou la rupture nette avec une croyance courante.',
        keyRule:
          'Ne commencez jamais un texte digital par des salutations tièdes ou des généralités : attaquez dès la première ligne par le Trigger.',
        workedExample: {
          title: 'Appliquer l’exercice du « hors champ » pour rédiger une accroche B2B',
          statement:
            'Vous disposez d’une photo montrant deux développeurs souriants devant un ordinateur portable dans un café de Cocody. Comment en tirer une accroche Hook ?',
          methodSteps: [
            'Observer le cadre visible : deux développeurs détendus à 14h.',
            'Imaginer le « hors champ » : à 10h, leur base de données avait planté juste avant une démo investisseur ; grâce à un rollback automatisé, ils ont sauvé la présentation en 4 minutes.',
            'Formuler le Trigger : « À 10h04, leur plateforme était hors ligne devant trois investisseurs. À 10h08, ils signaient leur premier tour de table. »',
          ],
          conclusion:
            'Le hors-champ transforme une photo banale en récit à suspense immédiat.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Hors champ',
            stepTheme: 'Stimuli visuels',
            stepTitle: 'Nourrir le récit en décrivant le « hors champ » d’une image',
            paragraphText:
              'Une photographie ne montre qu’une fraction figée du réel ; le véritable carburant narratif se cache souvent juste autour du cadre.\n• **Technique du hors champ** : observer une scène et interroger l’avant, l’après, les bruits ambiants et les enjeux invisibles des personnages.\n• **Passage de l’inventaire à l’histoire** : on cesse de décrire (« deux personnes devant un écran ») pour raconter une tension humaine.\nExemple : devant la photo d’un livreur à moto sous la pluie à Marcory, le hors-champ révèle la promesse client et la géolocalisation qui le guide.',
            konanTip:
              'Bloqué devant une fiche produit ? Prenez une photo du client réel en situation et écrivez 5 phrases sur ce qu’il pensait 10 minutes avant la photo.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p4_q1',
              type: 'mcq',
              prompt:
                'Comment l’exercice créatif d’analyse d’image exploite-t-il la notion de « hors champ » ?',
              options: [
                'En recadrant l’image jusqu’à la rendre illisible',
                'En imaginant et en racontant ce qui se joue autour du cadre (avant, après, émotions et enjeux non photographiés)',
                'En se limitant strictement à nommer les couleurs dominantes du cliché',
                'En supprimant toute référence aux personnages présents',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Explorer le hors-champ réveille l’empathie et fournit une intrigue narrative là où la description littérale resterait plate.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Modèle Hook',
            stepTheme: 'Déclencheur (Trigger)',
            stepTitle: 'Amorcer un texte digital par un Déclencheur (Trigger) immédiat',
            paragraphText:
              'Issu de la conception de produits engageants, le modèle Hook repose sur un cycle en 4 temps : Déclencheur (Trigger) → Action → Récompense → Investissement.\n• **En rédaction digitale** : l’accroche joue le rôle du Déclencheur externe qui interrompt le défilement machinal du pouce (scroll).\n• **Objectif** : piquer la curiosité dès la première seconde pour obtenir le premier « micro-oui » du lecteur — lire la phrase suivante.\nExemple : « 68 % de vos visiteurs partent sans rien dire au moment exact où ils sortent leur carte. »',
            formula: {
              name: 'Chaîne d’engagement Hook en écriture',
              formula: '\\text{Trigger (Accroche)} \\longrightarrow \\text{Action (Lecture)} \\longrightarrow \\text{R\\acute{e}compense (Valeur)} \\longrightarrow \\text{Investissement (Partage / Clic)}',
              note: 'Sans Trigger efficace dans les 2 premières secondes, aucune des étapes suivantes n’a lieu.',
            },
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p4_q2',
              type: 'mcq',
              prompt:
                'Selon le modèle Hook appliqué à la communication écrite, quelle est la fonction première du « Trigger » (Déclencheur) ?',
              options: [
                'Citer les mentions légales en bas de page',
                'Piquer immédiatement la curiosité du lecteur dès la première seconde pour stopper son défilement',
                'Remplacer la conclusion d’un dossier technique',
                'Allonger artificiellement l’introduction historique sur trois paragraphes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Trigger capte l’attention dans un flux saturé et déclenche le passage à l’action (poursuivre la lecture).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Typologie des Triggers',
            stepTheme: 'Accroches efficaces',
            stepTitle: 'Choisir entre chiffre choc, question vécue et contraste',
            paragraphText:
              'Un bon Trigger ne crie pas « Achetez ! » : il crée une brèche cognitive que le cerveau du lecteur a envie de combler.\n• **Le chiffre contre-intuitif** : « 4 secondes de latence coûtent 1 client sur 3. »\n• **La scène miroir** : « Il est 23h et vous relisez encore ce devis à la main. »\n• **La rupture d’évidence** : « Plus votre formulaire demande d’infos, moins vous apprenez à connaître vos clients. »\nExemple : ces trois formats fonctionnent aussi bien en objet d’e-mail qu’en ouverture d’article de blog.',
            keyRule:
              'Un Trigger réussi ouvre une boucle de curiosité que seule la lecture du paragraphe suivant permet de refermer.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p4_q3',
              type: 'mcq',
              prompt:
                'Laquelle de ces ouvertures constitue le meilleur « Trigger » (déclencheur de curiosité) pour un article destiné à des gérants de boutiques en ligne ?',
              options: [
                '« Bonjour à tous, dans cet article nous allons parler de l’importance d’Internet aujourd’hui. »',
                '« Article n°14 — Département Communication — Octobre. »',
                '« Hier soir, 7 clients sur 10 ont rempli leur panier chez vous… puis ont disparu avant de payer. »',
                '« Les sites web utilisent le protocole HTTP depuis plusieurs décennies. »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cette phrase combine chiffre précis, situation familière et mystère immédiat (pourquoi ont-ils disparu ?), déclenchant la lecture.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège du clickbait',
            stepTheme: 'Promesse tenue',
            stepTitle: 'Distinguer une accroche Hook éthique du piège à clics (clickbait)',
            paragraphText:
              'Attention à ne pas confondre Trigger créatif et piège à clics mensonger (clickbait).\n• **Clickbait** : exagère ou invente une promesse sensationnelle sans livrer de valeur réelle ensuite, détruisant la confiance.\n• **Hook éthique** : promet une récompense intellectuelle ou pratique forte dès l’ouverture, puis tient rigoureusement sa promesse dans le corps du texte.\nExemple : annoncer « Comment réduire de moitié vos abandons mobiles » exige de présenter ensuite des leviers concrets et vérifiables.',
            keyRule:
              'La récompense du texte doit toujours être à la hauteur du Trigger d’ouverture, sinon la crédibilité (Ethos) s’effondre.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p4_q4',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui distingue fondamentalement une accroche « Hook » professionnelle d’un simple « clickbait » (piège à clics) ?',
              options: [
                'Le clickbait utilise toujours moins de cinq mots',
                'Le Hook professionnel tient rigoureusement sa promesse en offrant une vraie récompense informative ou émotionnelle dans la suite du texte',
                'Le Hook professionnel interdit tout chiffre dans le titre',
                'Il n’existe aucune différence entre les deux pratiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La rétention durable repose sur la promesse tenue : le clickbait attire une fois et trahit ; le Hook fidélise par la valeur livrée.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Transition fluide',
            stepTheme: 'De l’accroche au corps',
            stepTitle: 'Enchaîner le Trigger vers le développement sans rupture',
            paragraphText:
              'Beaucoup de rédacteurs écrivent une bonne phrase d’accroche, puis insèrent une coupure abrupte en revenant à un ton académique raide à la phrase suivante.\n• **Pont narratif** : la phrase 2 doit prolonger directement l’image, la question ou le chiffre lancé par la phrase 1.\n• **Règle de la glissade** : chaque phrase sert de toboggan vers la suivante grâce aux connecteurs causaux (« pourtant », « en réalité », « voici pourquoi »).\nExemple : « 68 % d’abandons. Derrière ce pourcentage sec se cache un geste tout simple : un pouce qui hésite. »',
            konanTip:
              'Vérifiez toujours les 3 premières lignes ensemble : elles doivent former un bloc indissociable qui aspire le lecteur dans le corps du récit.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p4_q5',
              type: 'mcq',
              prompt:
                'Quelle fonction assure la « deuxième phrase » juste après un Trigger percutant ?',
              options: [
                'Casser le rythme pour revenir à un résumé administratif neutre',
                'Créer un pont fluide qui prolonge la tension ou la curiosité de l’accroche vers le cœur du message',
                'Répéter mot pour mot le titre de l’article',
                'Annoncer la fin de la lecture',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si la deuxième phrase casse l’élan de l’accroche par un ton bureaucratique, le lecteur décroche immédiatement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Récompense & Investissement',
            stepTheme: 'Boucle complète',
            stepTitle: 'Clore le texte par une récompense mémorable et un appel clair',
            paragraphText:
              'Dans la boucle Hook, après le Trigger et la lecture (Action), le lecteur attend une Récompense (une idée clé, un outil, un déclic émotionnel) suivie d’un Investissement (commenter, enregistrer, tester l’outil).\n• **Récompense** : formuler une synthèse nette ou une astuce immédiatement actionnable.\n• **Investissement** : inviter sans agressivité à prolonger l’échange ou à franchir une petite étape concrète.\nExemple : clore un guide d’écriture par une check-list de 3 points à tester sur le prochain e-mail.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch1_p4_q6',
              type: 'mcq',
              prompt:
                'Dans un article créatif structuré selon la logique Hook, à quoi correspond l’étape finale d’« Investissement » ?',
              options: [
                'Au montant en FCFA payé pour acheter un logiciel de traitement de texte',
                'À la petite action d’engagement posée par le lecteur (enregistrer, partager, commenter, tester) après avoir reçu la valeur du texte',
                'À la suppression de la conclusion pour laisser le lecteur dans le flou',
                'À la rédaction d’une bibliographie de trente pages',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’investissement consolide l’attachement du lecteur au message ou à la marque par un geste concret simple et volontaire.',
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
    title: 'Cible, Persona, Tone of Voice et Objectifs de communication',
    summary:
      'Construire un Persona émotionnel et cognitif précis, calibrer le Tone of Voice selon le canal digital, distinguer Informer / Convaincre / Persuader / Émouvoir, équilibrer le triptyque d’Aristote (Ethos, Pathos, Logos) et maîtriser l’accroche et le rythme.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Écriture Créative et Communication',
    points: [
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch2_p1',
        order: 1,
        title: 'Construire un Persona émotionnel et cognitif (au-delà de la démographie)',
        summary:
          'Dépasser les fiches démographiques froides pour cartographier les peurs, désirs, freins cognitifs et usages numériques d’un lecteur cible réel.',
        conceptExplanation:
          'Parler à « tout le monde », c’est ne toucher personne. En communication digitale, le Persona est la représentation semi-fictive et incarnée de votre destinataire idéal. Un bon Persona ne se limite pas à un âge et un revenu : il révèle ses frustrations quotidiennes (douleurs), ses aspirations profondes, son niveau de maîtrise technique et son contexte exact de lecture (ex. dans un taxi à Abidjan sur un smartphone 4G).',
        keyRule:
          'Un Persona exploitable en rédaction répond toujours à trois questions : quelle douleur le réveille, quel langage emploie-t-il spontanément et dans quel contexte lit-il votre message ?',
        workedExample: {
          title: 'Passer d’une cible floue à un Persona actionnable pour une app de comptabilité mobile',
          statement:
            'Une startup ivoirienne lance une application de suivi de caisse sur smartphone. Sa cible initiale est « les commerçants de 25 à 50 ans ». Comment bâtir un Persona émotionnel et cognitif utile au rédacteur ?',
          methodSteps: [
            'Incarner le profil : « Awa, 34 ans, gérante d’un dépôt de prêt-à-porter à Adjamé, utilise WhatsApp Business 4 heures par jour sur Android ».',
            'Identifier sa douleur émotionnelle : la peur de perdre son cahier de crédits clients et le stress de ne jamais savoir sa marge réelle en fin de mois.',
            'Identifier son frein cognitif : rejet du jargon comptable (« bilan », « amortissement ») ; elle veut des mots simples (« argent entré », « reste en caisse »).',
          ],
          conclusion:
            'Le rédacteur sait désormais exactement quoi promettre (sérénité en 2 clics) et quels mots bannir (jargon financier complexe).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Persona UX',
            stepTheme: 'Empathie cible',
            stepTitle: 'Distinguer une cible démographique d’un Persona émotionnel et cognitif',
            paragraphText:
              'Une segmentation démographique (« Femmes, 25–40 ans, CSP+, Abidjan ») ne dit rien sur la façon d’écrire un message qui déclenche un clic.\n• **Dimension démographique** : utile pour le ciblage publicitaire, mais insuffisante pour l’écriture.\n• **Dimension émotionnelle** : quelles sont ses frustrations secrètes, ses fiertés, ses peurs (ex. peur de se tromper devant sa hiérarchie, manque de temps) ?\n• **Dimension cognitive** : quel est son niveau de vocabulaire métier, son degré de méfiance et son temps d’attention disponible ?\n• **Exemple concret** : deux clients de 30 ans ayant le même salaire peuvent réagir à l’opposé selon que l’un cherche la rapidité et l’autre la sécurité maximale.',
            keyRule:
              'On n’écrit jamais pour un segment statistique : on écrit toujours comme si l’on s’adressait à UNE personne précise assise en face de soi.',
            konanTip:
              'Avant de rédiger un e-mail ou une page web, inscrivez le prénom de votre Persona en haut de votre brouillon (« Pour Awa, gérante à Adjamé ») : votre ton deviendra instantanément plus naturel.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Pourquoi une fiche uniquement démographique (« Hommes 25–45 ans, urbains ») est-elle insuffisante pour guider la rédaction d’une campagne digitale ?',
              options: [
                'Parce qu’elle donne trop d’informations sur les émotions du lecteur',
                'Parce qu’elle ignore les douleurs, motivations profondes, objections et habitudes de langage qui déclenchent réellement l’adhésion',
                'Parce que les réseaux sociaux interdisent de connaître l’âge du public',
                'Parce que le Persona ne sert qu’en comptabilité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seules les dimensions émotionnelle (douleurs, désirs) et cognitive (vocabulaire, freins, contexte) permettent au rédacteur de choisir le bon angle et les bons mots.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Carte d’empathie',
            stepTheme: 'Douleurs & Gains',
            stepTitle: 'Cartographier les « Pain Points » (douleurs) et les « Gains » attendus',
            paragraphText:
              'La Carte d’empathie (Empathy Map) structure l’écoute du Persona en quatre quadrants simples avant d’écrire la moindre ligne.\n• **Ce qu’il pense et ressent** : inquiétudes profondes, ambitions inavouées.\n• **Ce qu’il voit et entend** : influence de ses pairs, offres concurrentes, avis sur les réseaux.\n• **Ses Pain Points (points de douleur)** : obstacles concrets qui lui font perdre du temps, de l’argent ou de la sérénité.\n• **Ses Gains attendus** : la transformation positive qu’il espère vivre après avoir adopté votre solution.\n• **Exemple concret** : pour un DSI, le Pain Point est une faille de sécurité un vendredi soir ; le Gain est un tableau de bord fiable et des nuits paisibles.',
            keyRule:
              'Plus vous décrivez la douleur de votre Persona avec ses propres mots, plus il aura le sentiment immédiat que votre solution a été conçue pour lui.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Dans une Carte d’empathie appliquée à la communication digitale, que désigne précisément un « Pain Point » (point de douleur) ?',
              options: [
                'Le prix maximal qu’une marque aimerait facturer',
                'Une frustration, un obstacle ou un problème concret que vit le Persona au quotidien et que le message doit adresser',
                'Une faute d’orthographe dans un slogan',
                'La couleur principale du logo d’entreprise',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Pain Point est la friction réelle (perte de temps, complexité, stress, coût caché) qui rend le Persona attentif à une solution.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Charge cognitive',
            stepTheme: 'Niveau de conscience',
            stepTitle: 'Adapter le discours au niveau de conscience et à la charge cognitive du lecteur',
            paragraphText:
              'Un lecteur qui découvre à peine qu’il a un problème ne se lit pas comme un acheteur déjà prêt à comparer deux tarifs.\n• **Niveau 1 (Inconscient / Problème)** : on parle de son vécu quotidien et des symptômes qu’il ressent, jamais encore de notre produit.\n• **Niveau 2 (Solution)** : on compare les grandes approches possibles et on éduque.\n• **Niveau 3 (Produit / Prêt à agir)** : on présente les preuves, témoignages et garanties concrètes.\n• **Réduction de la charge cognitive** : un lecteur fatigué ou pressé sur smartphone rejette tout texte confus ; la clarté est la première condition de la persuasion.',
            keyRule:
              'Dans l’économie numérique, un utilisateur confus ne sera jamais persuadé : adaptez votre vocabulaire au niveau exact de maturité de votre Persona.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Vous rédigez un post LinkedIn pour des dirigeants qui ignorent encore que leur site mobile perd 60 % de ses visiteurs. Quel angle est le plus pertinent ?',
              options: [
                'Lister immédiatement les 18 spécifications techniques de votre serveur',
                'Partir d’un symptôme concret qu’ils vivent (ventes stagnantes malgré du trafic) pour leur faire prendre conscience du problème',
                'Afficher uniquement un bon de commande sans explication',
                'Utiliser un jargon de développeur incompréhensible pour un dirigeant',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Face à un public peu conscient du problème, il faut d’abord nommer le symptôme vécu avant d’introduire la solution technique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Alignement UX',
            stepTheme: 'Bénéfice vs Fonctionnalité',
            stepTitle: 'Traduire chaque caractéristique technique en bénéfice humain',
            paragraphText:
              'L’erreur classique des profils techniques consiste à parler de ce que le produit EST (fonctionnalités) au lieu de ce que le client DEVIENT ou GAGNE grâce à lui (bénéfices).\n• **Test du « Et alors ? »** : après chaque caractéristique technique, posez-vous la question « Et alors, qu’est-ce que ça change dans la vie de mon Persona ? ».\n• **Exemple 1** : au lieu de « Notre logiciel possède un algorithme d’indexation rapide », écrivez « Récupérez deux heures de votre temps chaque jour ».\n• **Exemple 2** : au lieu de « Chiffrement AES-256 », écrivez « Vos paiements et les données de vos clients dorment en sécurité totale ».',
            formula: {
              name: 'Règle de transformation Caractéristique → Bénéfice',
              formula: '\\text{Fonctionnalit\\acute{e} (Produit)} \\xrightarrow{\\text{« Et alors ? »}} \\text{B\\acute{e}n\\acute{e}fice concret (Utilisateur)}',
              note: 'Le client n’achète pas une perceuse de 800 W, il achète un trou propre dans son mur pour accrocher un cadre.',
            },
            keyRule:
              'La persuasion n’est jamais centrée sur l’émetteur (la marque) mais sur le récepteur (l’utilisateur) : traduisez toute fonctionnalité en bénéfice vécu.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Laquelle de ces phrases applique le mieux la traduction d’une caractéristique technique en bénéfice utilisateur centré sur le Persona ?',
              options: [
                '« Notre nouvelle architecture API v3.2 dispose de 14 endpoints REST optimisés. »',
                '« Encaissez vos clients en 3 secondes chrono sans jamais bloquer la file à la caisse. »',
                '« Notre serveur fonctionne sous Linux avec 64 Go de mémoire vive. »',
                '« Nous utilisons un protocole de routage asynchrone multi-threads. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Cette formulation traduit la performance technique en gain concret, immédiat et émotionnellement parlant pour le commerçant.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Biais du créateur',
            stepTheme: 'Malédiction du savoir',
            stepTitle: 'Déjouer la « malédiction du savoir » et l’auto-centrisme de marque',
            paragraphText:
              'La « malédiction du savoir » est un biais cognitif bien connu : une fois que l’on maîtrise un domaine technique, on oublie à quel point il est opaque pour un non-spécialiste.\n• **Symptôme 1 (Jargon)** : empiler des sigles non expliqués (KPI, ROI, API, ERP, UX) devant un public grand public.\n• **Symptôme 2 (Le syndrome du « Nous »)** : commencer toutes ses phrases par « Nous sommes fiers… », « Notre entreprise leader… » au lieu d’utiliser le « Vous » centré sur le lecteur.\n• **Remède rapide** : compter le nombre de « nous/notre » face au nombre de « vous/votre » dans un texte commercial — le « vous » doit toujours dominer !',
            konanTip:
              'Faites le « test du surligneur » sur votre page d’accueil : surlignez en rouge tous les « nous/notre » et en vert tous les « vous/votre ». Si le rouge domine, réécrivez du point de vue du client !',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'En communication persuasive, que révèle un texte commercial contenant 18 occurrences de « nous / notre » pour seulement 2 occurrences de « vous / votre » ?',
              options: [
                'Une empathie exceptionnelle envers le Persona',
                'Un discours auto-centré sur l’émetteur (la marque) plutôt que sur les besoins et bénéfices du récepteur',
                'Une maîtrise parfaite du mobile-first',
                'Un respect strict du schéma narratif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un texte qui parle surtout de l’entreprise oublie l’alignement des besoins : le lecteur s’intéresse d’abord à ce que le message change pour LUI.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Contexte de lecture',
            stepTheme: 'Mobile-first',
            stepTitle: 'Adapter son écriture au contexte physique et mobile du Persona',
            paragraphText:
              'En Afrique de l’Ouest et particulièrement en Côte d’Ivoire, plus de 80 % de la consommation de contenus digitaux s’effectue sur smartphone, souvent en mobilité ou entre deux tâches.\n• **Lecture en « F » et balayage (scanning)** : l’internaute ne lit pas chaque mot ; ses yeux balayent les titres, mots en gras, chiffres et débuts de puces.\n• **Règles de confort mobile** : paragraphes courts (2 à 3 lignes max), intertitres explicites, phrases actives et appels à l’action clairs sous le pouce.\n• **Exemple concret** : une newsletter lue à 7h30 dans les embouteillages doit livrer son idée phare dans les 10 premières secondes.',
            keyRule:
              'Sur smartphone, un paragraphe de 10 lignes devient un mur illisible : aérer son texte (2 à 3 lignes par bloc) est un acte d’empathie envers le Persona.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Pour un Persona qui lit vos articles et e-mails majoritairement sur smartphone dans les transports, quelle mise en forme favorise le mieux la lecture réelle ?',
              options: [
                'Un bloc unique de 35 lignes sans aucun saut de ligne',
                'Des paragraphes courts de 2 à 3 lignes, des intertitres clairs, des puces aérées et des mots-clés mis en valeur',
                'Une police grise très pâle de taille 8 px',
                'Supprimer toute ponctuation pour gagner de la place',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’aération visuelle s’adapte à la morphologie des écrans mobiles et facilite le balayage oculaire rapide.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch2_p2',
        order: 2,
        title: 'Calibrer le Tone of Voice selon l’identité de marque et le canal digital',
        summary:
          'Définir une voix de marque reconnaissable et moduler le ton selon la plateforme (LinkedIn, Instagram/TikTok, WhatsApp, E-mail B2B, Site Web) et la situation.',
        conceptExplanation:
          'Dans un flux saturé de contenus génériques, le Tone of Voice (ton de voix) est l’empreinte sonore de votre marque : ce n’est pas seulement CE que vous dites, mais COMMENT vous le dites. Tandis que la Voix reflète l’identité stable de l’organisation (ses valeurs), le Ton s’adapte finement au canal de diffusion et à l’état émotionnel du destinataire (annonce de succès, support client, gestion de crise).',
        keyRule:
          'La Voix de marque reste constante pour créer la reconnaissance ; le Ton se module intelligemment selon le canal et l’émotion du moment.',
        workedExample: {
          title: 'Décliner une même annonce de maintenance sur 3 canaux différents',
          statement:
            'Une plateforme de paiement mobile effectue une mise à jour nocturne de 2h à 3h du matin. Comment adapter le Tone of Voice entre LinkedIn, WhatsApp Client et E-mail B2B aux partenaires bancaires ?',
          methodSteps: [
            'E-mail B2B (Partenaires) : ton formel, précis et rassurant (« Chers partenaires, une opération de maintenance planifiée aura lieu de 02h00 à 03h00 GMT afin de renforcer la résilience de nos serveurs… »).',
            'WhatsApp / Notification Client : ton chaleureux, direct et ultra-court (« Petite pause beauté cette nuit de 2h à 3h ! Votre appli revient encore plus rapide au réveil. »).',
            'LinkedIn (Marque employeur / Tech) : ton expert et transparent valorisant les équipes d’ingénierie qui sécurisent l’infrastructure.',
          ],
          conclusion:
            'L’information factuelle est identique, mais chaque audience reçoit exactement le niveau de proximité et de précision qu’elle attend.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Voix vs Ton',
            stepTheme: 'Identité éditoriale',
            stepTitle: 'Distinguer la Voix de marque (constante) du Ton (adaptable)',
            paragraphText:
              'On confond souvent « voix » et « ton », pourtant leur distinction est la clé d’une charte éditoriale solide.\n• **La Voix (Brand Voice)** : c’est la personnalité permanente de la marque (ex. pédagogue, audacieuse, rigoureuse ou complice). Elle ne change pas du jour au lendemain.\n• **Le Ton (Tone of Voice)** : c’est l’inflexion émotionnelle adaptée au contexte. Tout comme une personne garde la même voix mais ne parle pas sur le même ton à un entretien d’embauche, à un mariage ou pour présenter des excuses.\n• **Exemple concret** : une marque habituellement pleine d’humour adopte immédiatement un ton sobre, empathique et responsable lors d’une panne de service affectant ses clients.',
            keyRule:
              'Une marque cohérente garde sa Voix mais adapte toujours son Ton au contexte émotionnel du lecteur (surtout en SAV ou en situation de crise).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une fintech habituellement dynamique et décalée sur Instagram subit une coupure de paiement de 2 heures. Quelle attitude éditoriale correspond à une gestion professionnelle du Tone of Voice ?',
              options: [
                'Faire des blagues ironiques sur les clients qui ne peuvent pas payer',
                'Garder sa clarté de voix mais passer immédiatement à un ton empathique, transparent et orienté solution',
                'Ne rien publier pendant une semaine',
                'Copier-coller les conditions générales de vente en réponse aux plaintes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le ton doit s’ajuster à l’état émotionnel du client : face à un incident financier, l’humour déplacé irrite, tandis que la transparence empathique préserve la confiance.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Les 4 curseurs',
            stepTheme: 'Matrice Nielsen Norman',
            stepTitle: 'Positionner son Tone of Voice sur les 4 dimensions éditoriales',
            paragraphText:
              'Pour éviter les consignes floues (« écris de façon sympa »), les stratèges éditoriaux calibrent le ton sur 4 curseurs précis (modèle Nielsen Norman Group).\n• **1. Drôle ↔ Sérieux** : l’humour est-il bienvenu ou la gravité du sujet (santé, banque) impose-t-elle la sobriété ?\n• **2. Formel ↔ Décontracté** : vouvoiement institutionnel ou tutoiement complice ?\n• **3. Respectueux ↔ Irrévérencieux** : posture polie classique ou ton rebelle/impertinent ?\n• **4. Enthousiaste ↔ Factuel** : énergie expressive ou neutralité posée ?\n• **Application** : formaliser ces 4 curseurs dans un guide éditorial garantit que 5 rédacteurs différents produisent un discours unifié.',
            keyRule:
              'Définissez votre Tone of Voice par 3 adjectifs « Nous sommes / Nous ne sommes pas » (ex. « Experts, mais jamais arrogants ; Chaleureux, mais jamais familiers »).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle formulation dans une charte éditoriale est la plus efficace pour guider précisément une équipe de rédacteurs ?',
              options: [
                '« Écrivez de beaux textes intéressants. »',
                '« Ton pédagogue mais jamais condescendant ; chaleureux mais jamais familier ; précis mais sans jargon non expliqué. »',
                '« Utilisez le plus de points d’exclamation possible. »',
                '« Laissez chaque rédacteur inventer un ton différent chaque jour. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La formulation par polarités (« Oui, mais pas… ») fixe des bornes concrètes qui évitent les dérives de style.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Canaux digitaux',
            stepTheme: 'Adaptation multicanale',
            stepTitle: 'Calibrer le Persona et le Tone of Voice selon chaque canal digital',
            paragraphText:
              'Publier exactement le même texte brut sur LinkedIn, TikTok, WhatsApp et un e-mail B2B est l’une des erreurs les plus fréquentes en communication digitale.\n• **Chaque canal a sa grammaire propre** : un lecteur sur LinkedIn cherche de la valeur métier et des retours d’expérience ; un abonné sur Instagram/TikTok attend du rythme visuel et de l’émotion rapide ; un client sur WhatsApp veut une réponse brève, directe et humaine.\n• **Règle d’adaptation** : on garde le même message central (la promesse), mais on réécrit l’accroche, la longueur, le registre et l’appel à l’action pour chaque support.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Matrice Persona & Tone of Voice par canal digital',
              caption: 'Comment moduler le registre, la longueur et l’accroche selon l’écosystème de lecture.',
              tableData: {
                headers: ['Canal digital', 'Attente du Persona', 'Tone of Voice recommandé', 'Format & Contrainte'],
                rows: [
                  ['LinkedIn', 'Expertise, réseau, ROI métier', 'Professionnel, incarné, pédagogue', 'Accroche ≤ 140 car. avant « voir plus »'],
                  ['Instagram / TikTok', 'Inspiration, détente, proximité', 'Vivant, visuel, rythmé, complice', 'Ultra-court, sensoriel, 1re seconde clé'],
                  ['WhatsApp / SMS', 'Réponse rapide, suivi concret', 'Direct, chaleureux, rassurant', '2 à 3 lignes max, 1 info = 1 action'],
                  ['E-mail B2B', 'Décision fiable, gain de temps', 'Clair, structuré, respectueux', 'Objet ≤ 45 car., 1 CTA unique'],
                  ['Site Web / UX', 'Comprendre vite et agir sans friction', 'Évident, orienté bénéfice, fluide', 'Titres scannables, zéro jargon'],
                ],
              },
            },
            keyRule:
              'Ne faites jamais de copier-coller brutal entre plateformes : déclinez votre idée mère en respectant le tempo et le registre natifs de chaque canal.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Vous devez diffuser le lancement d’une nouvelle fonctionnalité sur LinkedIn et sur WhatsApp Business. Quelle adaptation est la plus pertinente ?',
              options: [
                'Envoyer sur WhatsApp un communiqué de presse de 800 mots identique à LinkedIn',
                'Sur LinkedIn, raconter le problème résolu et l’impact métier avec une accroche forte ; sur WhatsApp, envoyer un message de 3 lignes direct, chaleureux et orienté bénéfice immédiat',
                'Écrire en langage SMS codé sur LinkedIn et en jargon juridique sur WhatsApp',
                'Supprimer l’appel à l’action sur les deux canaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque canal répond à une posture de lecture spécifique : réflexion professionnelle sur LinkedIn, utilité instantanée et proximité sur WhatsApp.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'UX Writing',
            stepTheme: 'Micro-copie',
            stepTitle: 'Soigner la micro-copie (boutons, erreurs, formulaires) avec empathie',
            paragraphText:
              'Le Tone of Voice ne vit pas seulement dans les grands articles : il se ressent surtout dans les plus petits textes d’une interface (UX Writing).\n• **Boutons (CTA)** : préférez un verbe d’action orienté bénéfice (« Télécharger mon guide gratuit ») plutôt qu’un bouton froid (« Soumettre » ou « Valider »).\n• **Messages d’erreur** : au lieu d’un accusateur « Erreur 402 : saisie invalide », écrivez « Il semble manquer un chiffre dans votre numéro : vérifiez-le pour continuer ».\n• **Effet psychologique** : une micro-copie claire et bienveillante réduit immédiatement l’anxiété et les abandons de formulaire.',
            konanTip:
              'Relisez les messages d’erreur de votre application ou site : s’ils ressemblent à des codes robots, c’est le premier endroit où l’écriture créative peut améliorer l’expérience utilisateur.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Lequel de ces messages d’erreur dans un formulaire de paiement illustre le mieux un UX Writing clair et empathique ?',
              options: [
                '« FATAL ERROR 503 : INPUT REJECTED »',
                '« Vous avez encore fait une erreur de saisie ! »',
                '« Oups, ce numéro semble incomplet (10 chiffres attendus). Corrigez-le pour finaliser votre commande. »',
                '« Champ invalide. »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un bon message d’erreur ne culpabilise jamais l’utilisateur : il explique clairement ce qui manque et indique exactement comment résoudre le problème.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'IA & Humanisation',
            stepTheme: 'Style authentique',
            stepTitle: 'Humaniser un brouillon généré par IA pour préserver son Tone of Voice',
            paragraphText:
              'Les outils d’IA générative accélèrent l’idéation et la structuration, mais laissés en pilote automatique, ils produisent une prose lisse, répétitive et reconnaissable entre mille.\n• **Tics typiques de l’IA brute** : ouvertures convenues (« Dans un monde en constante évolution… »), adjectifs creux (« incontournable », « révolutionnaire », « levier stratégique ») et absence totale de vécu concret.\n• **Méthode d’humanisation en 3 gestes** : 1) injecter votre Persona et vos contraintes de Tone of Voice dans le prompt ; 2) supprimer les clichés génériques ; 3) ancrer le texte dans un exemple local réel, une anecdote et un rythme personnel.',
            keyRule:
              'L’IA générative est un assistant de brouillon, jamais l’auteur final : c’est votre ancrage terrain, votre voix et vos détails sensoriels qui créent la confiance.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quel réflexe est indispensable lorsqu’on utilise une IA générative pour rédiger un contenu de marque professionnel ?',
              options: [
                'Publier le texte tel quel avec des formules comme « Dans un monde en constante évolution »',
                'Calibrer le prompt avec le Persona et le Tone of Voice, puis rééditer manuellement pour retirer les clichés et ajouter des exemples concrets et humains',
                'Interdire toute relecture humaine après génération',
                'Ajouter le plus d’adjectifs superlatifs possible (« révolutionnaire », « unique »)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’édition humaine garantit l’authenticité, la cohérence avec la voix de marque et l’ancrage réel auprès du Persona.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Ligne éditoriale',
            stepTheme: 'Cohérence durable',
            stepTitle: 'Formaliser une mini-ligne éditoriale en 4 piliers pour une marque',
            paragraphText:
              'Une ligne éditoriale rassemble en une seule page la boussole qui guide toutes les prises de parole d’une organisation sur une année.\n• **1. Mission & Promesse** : pourquoi la marque prend-elle la parole au-delà de vendre ?\n• **2. Personas prioritaires** : 1 à 3 profils clairement incarnés.\n• **3. Piliers thématiques** : 3 ou 4 sujets récurrents (ex. Pédagogie, Coulisses, Preuves clients, Innovation).\n• **4. Tone of Voice & Règles lexicales** : mots signature à privilégier et mots bannis.\n• **Résultat** : même si l’équipe change, l’audience reconnaît immédiatement la signature de la marque.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quel est le rôle central d’une ligne éditoriale pour une entreprise présente sur plusieurs canaux numériques ?',
              options: [
                'Imposer d’écrire uniquement des articles de 3 000 mots',
                'Garantir la cohérence durable des thèmes, du Tone of Voice et de la promesse envers les Personas sur tous les supports',
                'Remplacer la comptabilité analytique',
                'Empêcher toute créativité dans les visuels',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La ligne éditoriale aligne tous les rédacteurs et canaux autour d’une identité reconnaissable et d’objectifs clairs.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch2_p3',
        order: 3,
        title: 'Informer, Convaincre, Persuader, Émouvoir : triptyque d’Aristote, accroche et rythme',
        summary:
          'Comparer les 4 objectifs de communication, équilibrer Ethos/Pathos/Logos et maîtriser les techniques d’accroche et de rythme de phrase.',
        conceptExplanation:
          'Avant d’écrire, tout communicant doit définir son intention dominante : veut-il Informer (transmettre un fait neutre), Convaincre (obtenir une adhésion rationnelle par la preuve), Persuader (déclencher une action par l’alliance raison + sentiment) ou Émouvoir (créer un lien affectif durable) ? La communication la plus puissante combine la solidité du Logos, la crédibilité de l’Ethos et la chaleur du Pathos, portés par un rythme musical maîtrisé.',
        keyRule:
          'On convainc par la raison (adhésion froide et durable), on persuade par le sentiment et la promesse (adhésion chaude qui pousse à l’action) : les meilleurs textes marient les deux.',
        formulas: [
          {
            name: 'Triptyque rhétorique d’Aristote',
            formula: '\\text{Persuasion} = \\underbrace{\\text{Ethos}}_{\\text{Cr\\acute{e}dibilit\\acute{e}}} + \\underbrace{\\text{Logos}}_{\\text{Faits \\& Logique}} + \\underbrace{\\text{Pathos}}_{\\text{\\acute{E}motion \\& R\\acute{e}cit}}',
            note: 'Sans Ethos, on doute de vous ; sans Logos, on juge votre discours creux ; sans Pathos, on reste indifférent.',
          },
        ],
        workedExample: {
          title: 'Équilibrer Ethos, Logos et Pathos dans un pitch de refonte mobile',
          statement:
            'Vous devez présenter à un comité de direction un projet de refonte du tunnel d’achat mobile qui souffre de 68 % d’abandon de panier.',
          methodSteps: [
            'Ethos (Crédibilité) : s’appuyer sur l’audit réalisé sur 12 000 sessions réelles et deux cas réussis dans le secteur UEMOA.',
            'Logos (Convaincre) : prouver que simplifier le paiement de 6 étapes à 2 étapes fait chuter l’abandon et rembourse le projet en 4 mois (ROI).',
            'Pathos (Persuader / Émouvoir) : faire vivre la scène concrète du client qui abandonne frustré dans un taxi, puis le soulagement d’un paiement validé d’un seul pouce.',
          ],
          conclusion:
            'Le DSI est convaincu par les chiffres (Logos), la direction générale adhère par confiance (Ethos) et toute la salle ressent l’urgence d’agir (Pathos).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '4 Objectifs',
            stepTheme: 'Matrice d’intention',
            stepTitle: 'Comparer Informer, Convaincre, Persuader et Émouvoir',
            paragraphText:
              'Mélanger les intentions sans le savoir dilue la force d’un texte : il faut savoir précisément quelle corde on fait vibrer.\n• **Informer** : transmettre des faits vérifiés avec clarté et objectivité (ex. communiqué d’horaires, documentation, bulletin factuel).\n• **Convaincre** : emporter l’adhésion de l’intellect par des preuves, statistiques et démonstrations logiques — c’est une adhésion « froide » mais solide.\n• **Persuader** : pousser à l’action ou au changement de comportement en mobilisant valeurs, bénéfices concrets et projection — c’est une adhésion « chaude ».\n• **Émouvoir** : toucher directement le cœur par un récit humain, des images sensorielles et de l’empathie pour créer un souvenir durable.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice des 4 objectifs de communication',
              caption: 'Choisir son registre dominant selon que l’on vise la Raison ou l’Affect, la Compréhension ou l’Action.',
              matrix2x2: {
                topAxis: ['Voie de la Raison (Intellect)', 'Voie du Sentiment (Affect)'],
                topLeft: {
                  title: 'INFORMER (Clarté neutre)',
                  items: [
                    'But : faire savoir sans biais',
                    'Outils : faits, dates, structure claire',
                    'Supports : FAQ, notice, note de service',
                  ],
                  color: 'slate',
                },
                topRight: {
                  title: 'ÉMOUVOIR (Connexion humaine)',
                  items: [
                    'But : faire ressentir et marquer les esprits',
                    'Outils : scènes vécues, 5 sens, empathie',
                    'Supports : film de marque, portrait, manifeste',
                  ],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'CONVAINCRE (Preuve — Logos)',
                  items: [
                    'But : prouver la vérité (adhésion froide)',
                    'Outils : stats, ROI, études de cas, audits',
                    'Supports : rapport DSI, livre blanc, tableur',
                  ],
                  color: 'blue',
                },
                bottomRight: {
                  title: 'PERSUADER (Action — Pathos + Logos)',
                  items: [
                    'But : déclencher un choix (adhésion chaude)',
                    'Outils : storytelling, promesse, bénéfices',
                    'Supports : pitch, landing page, publicité',
                  ],
                  color: 'green',
                },
              },
            },
            keyRule:
              'En transformation digitale, on convainc un DSI avec des protocoles et du ROI, mais on persuade les équipes d’adopter l’outil en leur montrant comment il réduit leur stress quotidien.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle différence fondamentale distingue « Convaincre » de « Persuader » en communication professionnelle ?',
              options: [
                'Convaincre vise l’intellect par des preuves rationnelles (adhésion froide), tandis que persuader mobilise aussi l’émotion et l’imaginaire pour déclencher l’action (adhésion chaude)',
                'Persuader interdit totalement l’usage de faits réels',
                'Convaincre s’utilise uniquement en publicité et persuader uniquement en comptabilité',
                'Les deux termes sont strictement synonymes sans aucune nuance',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Convaincre prouve rationnellement une vérité (Logos) ; persuader donne envie de passer à l’action en touchant la volonté et les émotions (Pathos + Logos).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Triptyque d’Aristote',
            stepTheme: 'Ethos, Logos, Pathos',
            stepTitle: 'Équilibrer Ethos (crédibilité), Logos (logique) et Pathos (émotion)',
            paragraphText:
              'Depuis la *Rhétorique* d’Aristote, tout discours durablement persuasif repose sur un trépied indissociable.\n• **Ethos (La crédibilité de l’orateur)** : pourquoi devrait-on vous faire confiance ? (Preuves d’expertise, transparence, témoignages clients, ton juste).\n• **Logos (La solidité logique)** : quels faits et chiffres démontrent votre propos ? (Ex. « 68 % d’abandon sur mobile », graphiques de ROI).\n• **Pathos (La résonance émotionnelle)** : comment faire ressentir l’enjeu au lecteur ? (Ex. décrire la frustration vécue devant un écran figé).\n• **Équilibre** : si un seul pied manque, le discours boite (trop de Pathos sans Logos paraît manipulateur ; trop de Logos sans Pathos ennuie).',
            keyRule:
              'La persuasion éthique n’est jamais de la manipulation : elle rend une proposition de valeur réelle psychologiquement évidente en équilibrant Ethos, Logos et Pathos.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Dans un dossier de financement, vous citez des résultats d’audit certifiés et l’expérience de 10 ans de votre équipe technique. Quel pilier du triptyque d’Aristote renforcez-vous en priorité ?',
              options: [
                'Le Pathos uniquement',
                'L’Ethos (crédibilité et légitimité de l’émetteur)',
                'L’anaphore poétique',
                'Le lipogramme',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les preuves de compétence, de sérieux et d’expérience bâtissent l’Ethos, c’est-à-dire la confiance accordée à celui qui parle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Persuasion vs Manipulation',
            stepTheme: 'Éthique de communication',
            stepTitle: 'Tracer la frontière nette entre persuasion éthique et manipulation',
            paragraphText:
              'Un professionnel du digital doit maîtriser la puissance de l’écriture persuasive sans jamais basculer dans les *dark patterns* (pièges manipulateurs).\n• **Persuasion éthique** : cherche un accord libre et éclairé parce que le destinataire a compris une valeur réelle qui sert son intérêt.\n• **Manipulation** : dissimule des faits, invente une fausse urgence (« Plus que 1 place ! » alors que c’est faux) ou exploite la culpabilité pour forcer un choix contre l’intérêt de l’utilisateur.\n• **Enjeu business** : la manipulation peut générer un clic unique, mais détruit définitivement la réputation (Ethos) sur les réseaux sociaux.',
            keyRule:
              'La persuasion éclaire un choix libre ; la manipulation trompe pour extorquer un clic. À long terme, seule l’éthique fidélise.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui différencie fondamentalement la persuasion éthique de la manipulation en communication digitale ?',
              options: [
                'La persuasion utilise des phrases longues et la manipulation des phrases courtes',
                'La persuasion amène le lecteur à adhérer librement en comprenant une valeur réelle, alors que la manipulation trompe ou contraint contre son intérêt',
                'La manipulation est plus rentable sur le long terme',
                'La persuasion interdit tout storytelling',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La persuasion respecte la liberté et l’intelligence du récepteur en mettant en lumière une valeur authentique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Art de l’accroche',
            stepTheme: 'Première ligne',
            stepTitle: 'Rédiger des accroches qui stoppent le scroll dès la première seconde',
            paragraphText:
              'En communication digitale, 8 personnes sur 10 lisent le titre ou la première ligne, mais seulement 2 sur 10 lisent la suite.\n• **Quatre formules d’accroches redoutables** :\n  1) **La scène « in medias res »** : plonger directement au cœur d’un instant précis (« Il est 8h30, le café fume… »).\n  2) **Le chiffre paradoxe** : « 68 % de vos clients remplissent leur panier… puis s’évaporent. »\n  3) **La question miroir** : « Combien d’heures avez-vous perdues cette semaine à chercher un fichier mal nommé ? »\n  4) **La promesse chiffrée claire** : « 3 réflexes simples pour diviser par deux vos abandons mobiles. »',
            konanTip:
              'Écrivez toujours 5 variantes d’accroche (ou d’objet d’e-mail) avant de choisir la meilleure : la 1re idée est rarement la plus percutante !',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle technique d’accroche consiste à démarrer le texte directement au milieu d’une scène concrète (« Il est 22h15, la barre de chargement reste figée à 99 %… ») sans préambule général ?',
              options: [
                'L’introduction administrative',
                'L’ouverture « in medias res » (au cœur de l’action)',
                'La conclusion analytique',
                'La note de bas de page',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Démarrer *in medias res* immerge instantanément le lecteur dans une scène visuelle et crée une curiosité immédiate.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Rythme & Musicalité',
            stepTheme: 'Cadence des phrases',
            stepTitle: 'Sculpter le rythme du texte par l’alternance des phrases courtes et longues',
            paragraphText:
              'L’œil lit, mais le cerveau « entend » une petite voix intérieure : un texte dont toutes les phrases font exactement 18 mots devient vite soporifique.\n• **Phrases courtes (5 à 10 mots)** : créent l’urgence, la tension, la clarté ou assènent une conclusion choc. (« Un clic. Une seconde. C’est réglé. »)\n• **Phrases plus amples (15 à 25 mots)** : apportent de la fluidité, nuancent une idée ou déploient une image descriptive.\n• **La musique du texte** : c’est le CONTRASTE entre une phrase ample et une chute courte qui réveille l’attention du lecteur.\n• **Test infaillible** : relisez toujours vos textes clés À VOIX HAUTE — chaque endroit où vous manquez de souffle signale une phrase trop longue.',
            keyRule:
              'Variez la longueur de vos phrases : les phrases longues expliquent et enveloppent, les phrases courtes percutent et concluent.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quel est l’effet principal d’une phrase très courte placée juste après deux phrases descriptives plus longues ?',
              options: [
                'Elle alourdit le rythme et endort le lecteur',
                'Elle crée un contraste rythmique saisissant qui met en relief l’idée clé ou accélère la tension',
                'Elle constitue une faute de grammaire systématique',
                'Elle supprime toute émotion du paragraphe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’alternance entre phrases amples et phrases brèves produit une musicalité vivante qui souligne l’idée finale.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Verbes forts',
            stepTheme: 'Énergie stylistique',
            stepTitle: 'Dynamiser son style avec la voix active et des verbes d’action précis',
            paragraphText:
              'Un texte mou regorge de verbes passe-partout (« faire », « être », « avoir », « mettre en place ») et de tournures passives (« une amélioration a été effectuée par l’équipe »).\n• **Voix active** : remplacez « Le dossier a été validé par le client » par « Le client a validé le dossier » (plus court, plus vivant, plus responsable).\n• **Verbes précis** : remplacez « faire une réduction des délais » par « réduire les délais » ou « diviser les délais par deux ».\n• **Chasse aux adverbes faibles** : au lieu de « marcher très lentement », préférez « traîner les pieds » ; au lieu de « très rapide », préférez « instantané ».',
            konanTip:
              'Lors de la phase « monteur », traquez les verbes « faire », « être » et les noms en « -tion » (« procéder à l’optimisation » → « optimiser ») : votre texte gagnera immédiatement 30 % de punch.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Laquelle de ces reformulations élimine la lourdeur nominale et passive pour offrir un style actif et percutant ?',
              options: [
                '« Il est procédé à la sécurisation de vos transactions par notre système. »',
                '« Notre système sécurise instantanément chacune de vos transactions. »',
                '« Une sécurisation transactionnelle est en cours de mise en œuvre. »',
                '« Des actions de sécurité sont faites au niveau des transactions. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sujet clair + verbe d’action fort à la voix active (« sécurise ») = phrase plus courte, plus fluide et plus crédible.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Atelier de réécriture',
            stepTheme: 'Voix haute & Contraste',
            stepTitle: 'Transformer une annonce plate en paragraphe rythmé et persuasif',
            paragraphText:
              'Observons la métamorphose d’un message banal pour une plateforme de formation en ligne en Côte d’Ivoire.\n• **Avant (plat et passif)** : « Notre plateforme de formation digitale permet l’acquisition de compétences numériques par les étudiants grâce à des cours en vidéo accessibles. »\n• **Après (Ethos + Logos + Pathos + Rythme)** : « Chaque soir, des milliers d’étudiants perdent des heures sur des tutoriels dispersés. Sur notre plateforme, 15 minutes par jour suffisent pour maîtriser Excel, le design et le code grâce à des parcours validés par des praticiens. Moins de théorie floue. Plus de compétences concrètes. »\n• **Analyse** : scène vécue (Pathos), chiffre précis et validation praticiens (Logos + Ethos), chute en deux phrases courtes.',
            keyRule:
              'Un grand texte naît toujours à la réécriture : supprimez le gras, activez les verbes et terminez sur une cadence mémorable.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch2_p3_q7',
              type: 'mcq',
              prompt:
                'Dans la version réécrite « Moins de théorie floue. Plus de compétences concrètes. », quel double levier stylistique renforce la mémorisation finale ?',
              options: [
                'La voix passive et le jargon juridique',
                'Des phrases très courtes en parallélisme antithétique (contraste net et rythme percutant)',
                'L’accumulation d’adverbes en « -ment »',
                'Une parenthèse technique de 40 mots',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La symétrie courte (« Moins de… / Plus de… ») crée un contraste immédiat, musical et facile à retenir.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_ecriture_creative_ch3',
    subjectId: 'lmd_ecriture_creative',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Storytelling, Schéma Narratif et Copywriting digital',
    summary:
      'Structurer un récit professionnel grâce au schéma narratif quinaire et au Voyage du Héros, maîtriser l’immersion sensorielle et les figures de style à travers l’étude de cas « Au-delà du clic », et rédiger des pages performantes avec les structures AIDA et PAS.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Écriture Créative et Communication',
    points: [
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch3_p1',
        order: 1,
        title: 'Schéma narratif quinaire et Voyage du Héros (Utilisateur = Héros, Marque = Mentor)',
        summary:
          'Maîtriser les 5 étapes du schéma narratif pour guider le cerveau sans effort et positionner l’utilisateur en Héros et la marque en Mentor.',
        conceptExplanation:
          'Le Storytelling n’est pas un conte de fées : c’est l’équivalent du storyboard en montage vidéo. Il organise l’information selon une progression causale naturelle (le schéma narratif quinaire en 5 étapes) que le cerveau humain traite sans effort cognitif. Dans le Storytelling de marque moderne (inspiré du Voyage du Héros de Joseph Campbell), la règle d’or est l’humilité stratégique : le Héros n’est JAMAIS la marque, c’est toujours l’utilisateur !',
        keyRule:
          'Ne faites jamais de votre marque le héros de l’histoire : l’Utilisateur est le Héros en quête de réussite, votre Marque est le Mentor qui lui remet l’Outil Magique.',
        formulas: [
          {
            name: 'Les 5 actes du schéma narratif quinaire',
            formula: '\\text{1. Situation initiale} \\to \\text{2. \\acute{E}l\\acute{e}ment perturbateur} \\to \\text{3. P\\acute{e}rip\\acute{e}ties} \\to \\text{4. D\\acute{e}nouement} \\to \\text{5. Situation finale}',
            note: 'Sans élément perturbateur (tension/problème), il n’y a pas d’histoire — seulement un catalogue ennuyeux.',
          },
        ],
        workedExample: {
          title: 'Structurer le pitch d’une app de logistique à Abidjan selon le schéma quinaire',
          statement:
            'Vous pitchez une plateforme de suivi de livraisons en temps réel devant des commerçants e-commerce.',
          methodSteps: [
            '1. Situation initiale : vos ventes en ligne explosent et votre boutique tourne à plein régime.',
            '2. Élément perturbateur : mais chaque après-midi, 15 clients mécontents appellent pour savoir où est leur colis et 1 livraison sur 4 est annulée.',
            '3. Péripéties : vous tentez de suivre les livreurs par appels WhatsApp incessants — perte de temps et stress permanent.',
            '4. Dénouement (Outil Magique) : votre plateforme envoie automatiquement un lien de suivi GPS au client dès le départ du livreur.',
            '5. Situation finale : les appels angoissés chutent de 70 %, vos clients recommandent votre boutique et vous reprenez le contrôle de votre croissance.',
          ],
          conclusion:
            'En 45 secondes, l’auditoire vit la tension, reconnaît son quotidien et adhère naturellement à la solution.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Schéma quinaire',
            stepTheme: 'Architecture narrative',
            stepTitle: 'Maîtriser les 5 étapes du schéma narratif en communication',
            paragraphText:
              'Un récit bien construit fonctionne comme une rampe cognitive qui emmène le lecteur du contexte familier jusqu’à la décision sans qu’il sente d’effort.\n• **1. Situation initiale** : le contexte stable et reconnaissable du lecteur.\n• **2. Élément perturbateur** : le problème, la friction ou le chiffre choc qui rompt l’équilibre (ex. 68 % d’abandons de panier).\n• **3. Péripéties** : les tentatives infructueuses, obstacles et coûts cachés de la situation.\n• **4. Dénouement (Élément de résolution)** : l’intervention de la solution ou de l’idée UX qui lève l’obstacle.\n• **5. Situation finale** : le nouvel équilibre transformé, avec une valeur ajoutée mesurable.',
            visualSchema: {
              type: 'flowchart',
              title: 'Le schéma narratif quinaire appliqué à la communication digitale',
              caption: 'Cinq étapes enchaînées pour transformer un problème technique en récit engageant.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1. Situation initiale',
                    sublabel: 'Contexte quotidien stable dans lequel le Persona se reconnaît',
                    kind: 'start',
                    color: 'slate',
                  },
                  {
                    label: '2. Élément perturbateur',
                    sublabel: 'Point de friction ou chiffre choc qui brise la sérénité (ex. 68 % d’abandons)',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Tension',
                    branchTarget: 'Sans friction, le lecteur n’a aucune raison de continuer',
                  },
                  {
                    label: '3. Péripéties',
                    sublabel: 'Obstacles, fausses pistes et coût émotionnel ou financier du statu quo',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: '4. Dénouement (Résolution)',
                    sublabel: 'Intervention de l’Outil Magique (solution UX / produit / méthode)',
                    kind: 'process',
                    color: 'blue',
                  },
                  {
                    label: '5. Situation finale',
                    sublabel: 'Nouvel équilibre supérieur : bénéfice concret + sérénité retrouvée',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'Sans Élément perturbateur clairement nommé, votre texte n’a aucune tension dramatique et ressemble à une brochure institutionnelle oubliable.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Dans le schéma narratif quinaire appliqué au Storytelling d’entreprise, quel rôle joue l’« Élément perturbateur » ?',
              options: [
                'Présenter le bilan comptable final de l’entreprise',
                'Introduire le problème concret ou le point de friction (ex. 68 % d’abandon de panier) qui brise l’équilibre initial et crée la tension',
                'Remercier l’auditoire à la fin de la présentation',
                'Lister l’adresse postale du siège social',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’élément perturbateur crée la brèche dramatique qui capte l’attention et justifie la recherche d’une solution.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Voyage du Héros',
            stepTheme: 'Héros vs Mentor',
            stepTitle: 'Positionner l’Utilisateur en Héros et la Marque en Mentor',
            paragraphText:
              'La plus grande erreur des marques qui font du Storytelling est de se mettre elles-mêmes en scène comme des super-héros narcissiques (« Nous sommes les meilleurs, nous avons gagné 5 prix »).\n• **Le Héros = L’Utilisateur (votre Persona)** : c’est lui qui a un objectif, qui affronte des « monstres » (complexité technique, perte de temps, interfaces lentes) et qui mérite de triompher.\n• **Le Mentor = Votre Marque ou votre Expertise** : comme Yoda dans *Star Wars* ou Gandalf, le Mentor ne fait pas la quête à la place du Héros ; il lui apporte l’écoute, le plan clair et l’**Outil Magique**.\n• **L’Outil Magique = Votre Produit ou Solution** : évident, intuitif, il réduit la charge cognitive et permet au Héros de franchir l’obstacle.',
            keyRule:
              'Le client se réveille chaque matin en étant le héros de sa propre histoire, jamais le spectateur de la vôtre : soyez son Mentor.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Selon le modèle du « Voyage du Héros » adapté à la communication moderne, quel rôle stratégique la marque doit-elle endosser ?',
              options: [
                'Le rôle du Héros unique qui éclipse le client',
                'Le rôle du Mentor qui guide l’utilisateur (le Héros) et lui remet « l’Outil Magique » pour vaincre ses obstacles',
                'Le rôle de l’antagoniste qui crée les problèmes',
                'Un rôle totalement absent du récit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Placer l’utilisateur au centre comme Héros et la marque en Mentor empathique crée une adhésion immédiate et durable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Les 3 niveaux d’obstacles',
            stepTheme: 'Profondeur narrative',
            stepTitle: 'Identifier l’obstacle externe, interne et philosophique du Héros',
            paragraphText:
              'Un récit de marque gagne une profondeur remarquable lorsqu’il nomme trois couches d’obstacles vécus par le Persona.\n• **Obstacle externe (visible)** : le problème matériel immédiat (ex. « mon tunnel de paiement mobile plante et perd 68 % des clients »).\n• **Obstacle interne (émotionnel)** : ce que cela fait ressentir au Héros (ex. « je me sens dépassé et je crains de voir mon entreprise stagner »).\n• **Enjeu philosophique (valeurs)** : ce qui est juste ou injuste (ex. « un entrepreneur qui travaille dur ne devrait pas perdre ses ventes à cause d’une interface mal conçue »).\n• **Impact** : les clients achètent rarement pour résoudre un problème externe seul ; ils achètent surtout pour apaiser leur problème interne !',
            konanTip:
              'Dans votre prochain pitch, consacrez une phrase au problème externe (le fait) ET une phrase au problème interne (le stress qu’il provoque) : l’empathie grimpe en flèche.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Un commerçant perd des commandes à cause d’un site trop lent (problème externe) et éprouve un sentiment quotidien d’impuissance et de stress (problème interne). Sur quel levier la décision d’achat repose-t-elle le plus souvent ?',
              options: [
                'Uniquement sur la version du serveur HTTP',
                'Fortement sur le soulagement du problème interne (retrouver sérénité, maîtrise et fierté), appuyé par la résolution concrète du problème externe',
                'Uniquement sur la police utilisée dans le pied de page',
                'Sur l’absence totale d’émotion',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les décisions humaines sont déclenchées par le désir d’apaiser une tension interne (émotion) puis justifiées par la logique (problème externe résolu).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Storytelling Data',
            stepTheme: 'Data Storytelling',
            stepTitle: 'Traduire des données chiffrées en récit compréhensible (Data Storytelling)',
            paragraphText:
              'Une liste brute de 15 statistiques est oubliée au bout de dix minutes ; une donnée incarnée dans une histoire reste gravée pendant des mois.\n• **Principe du Data Storytelling** : relier **Données (quoi ?)** + **Contexte humain (qui ?)** + **Conséquence (et alors ?)**.\n• **Exemple concret** : au lieu de dire « Temps de chargement moyen : 7,4 secondes », racontez : « 7,4 secondes. C’est le temps exact pendant lequel votre client fixe un écran blanc avant de fermer l’onglet et d’aller chez votre concurrent. »\n• **Usage** : indispensable pour présenter des résultats analytiques à des investisseurs, des dirigeants ou des clients non techniques.',
            keyRule:
              'Une statistique seule informe ; une statistique reliée à un visage humain et à une conséquence concrète persuade.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'En quoi consiste le « Data Storytelling » pour un spécialiste de l’économie numérique ?',
              options: [
                'Inventer de faux chiffres pour embellir un rapport',
                'Traduire des données réelles et vérifiées en un récit humain, structuré et mémorable qui éclaire une décision',
                'Supprimer tous les chiffres d’une présentation professionnelle',
                'Afficher uniquement des tableaux Excel bruts de 200 lignes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Data Storytelling donne du sens et de l’impact émotionnel à des données rigoureusement vraies pour faciliter la compréhension et l’action.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Faux Storytelling',
            stepTheme: 'Pièges à éviter',
            stepTitle: 'Éviter les 3 pièges du faux Storytelling (longueur, hors-sujet, surjeu)',
            paragraphText:
              'Le Storytelling n’est pas un prétexte pour raconter sa vie pendant trois pages avant d’arriver au sujet.\n• **Piège 1 (L’histoire sans lien)** : une anecdote amusante qui n’a aucun rapport logique avec le message métier déroute le lecteur.\n• **Piège 2 (La lenteur)** : s’attarder 20 lignes sur la situation initiale avant l’élément perturbateur fait fuir sur mobile.\n• **Piège 3 (L’exagération mélodramatique)** : vouloir faire pleurer pour vendre une simple application de prise de notes sonne faux et brise l’Ethos.\n• **Règle d’or** : en digital, un micro-storytelling de 5 à 8 lignes bien tendues vaut mieux qu’une saga interminable.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Lequel de ces défauts transforme un Storytelling professionnel en « faux Storytelling » contre-productif ?',
              options: [
                'Démarrer rapidement sur un problème concret du client',
                'Raconter une longue anecdote hors sujet ou exagérément dramatique sans lien logique avec la promesse du produit',
                'Donner le rôle du Héros à l’utilisateur',
                'Utiliser un chiffre réel comme élément perturbateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En communication professionnelle, l’histoire doit rester brève, authentique et directement alignée sur le problème que résout l’offre.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Micro-récit',
            stepTheme: 'Format court',
            stepTitle: 'Condenser le schéma quinaire en un micro-récit de 5 phrases',
            paragraphText:
              'Il n’est pas nécessaire d’écrire un roman pour utiliser le schéma narratif : chaque étape peut tenir en UNE seule phrase percutante !\n• **Phrase 1 (Initiale)** : « Chaque lundi, Kofi passait 4 heures à consolider ses ventes sur trois cahiers. »\n• **Phrase 2 (Perturbateur)** : « Jusqu’au jour où une erreur de report lui a coûté 450 000 FCFA d’impayés oubliés. »\n• **Phrase 3 (Péripéties)** : « Il a essayé des feuilles éparses, sans jamais réussir à tout suivre sur le terrain. »\n• **Phrase 4 (Dénouement)** : « Puis il a centralisé sa caisse sur une seule interface mobile synchronisée. »\n• **Phrase 5 (Finale)** : « Aujourd’hui, il clôture sa journée en 2 minutes et connaît sa marge exacte en temps réel. »',
            konanTip:
              'Entraînez-vous à résumer chaque étude de cas client en 5 phrases exactes (1 phrase par acte du schéma quinaire) : c’est un format redoutable pour LinkedIn et les pitchs investisseurs.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Peut-on appliquer intégralement le schéma narratif quinaire (5 étapes) dans un post LinkedIn ou un témoignage client de seulement 5 phrases ?',
              options: [
                'Non, le schéma narratif exige au moins 10 pages',
                'Oui, chaque étape peut être condensée en une phrase nette et imagée, créant un micro-storytelling très efficace sur mobile',
                'Non, il faut obligatoirement supprimer l’élément perturbateur',
                'Oui, à condition d’enlever toute référence à un personnage réel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La puissance du schéma quinaire réside dans sa structure causale, qui fonctionne aussi bien sur 5 phrases que sur un film de 2 heures.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Storyboard éditorial',
            stepTheme: 'Plan de séquences',
            stepTitle: 'Concevoir son texte comme un storyboard de montage vidéo',
            paragraphText:
              'Comme un monteur vidéo assemble des plans sur une timeline, le rédacteur créatif enchaîne des séquences visuelles cohérentes.\n• **Plan large (Situation initiale)** : situer le décor en un trait.\n• **Gros plan (Élément perturbateur)** : zoomer sur le détail précis qui fait mal (un pouce qui hésite, un compteur à 68 %).\n• **Montage rythmé (Péripéties → Dénouement)** : montrer la bascule claire entre l’avant laborieux et l’après fluide.\n• **Plan final (Situation finale)** : laisser le lecteur sur une image lumineuse de réussite qu’il a envie de vivre à son tour.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p1_q7',
              type: 'mcq',
              prompt:
                'Pourquoi compare-t-on souvent le Storytelling d’un texte digital au « storyboard » d’un réalisateur ou d’un monteur vidéo ?',
              options: [
                'Parce qu’il faut obligatoirement ajouter de la musique dans un e-mail',
                'Parce qu’il planifie visuellement l’enchaînement des séquences (du plan d’ouverture à la résolution) pour éviter que le lecteur ne se perde',
                'Parce que le texte ne doit contenir aucun verbe',
                'Parce que seuls les cinéastes peuvent écrire pour le web',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le storyboard narratif garantit une progression visuelle et chronologique fluide qui maintient l’attention du début à la fin.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch3_p2',
        order: 2,
        title: 'Immersion sensorielle, étude de cas « Au-delà du clic » et figures de style',
        summary:
          'Appliquer le « Show, Don’t Tell » et les 5 sens, décortiquer l’étude de cas « Au-delà du clic » et manier métaphore, personnification et anaphore avec justesse.',
        conceptExplanation:
          'L’écriture digitale souffre d’un handicap naturel : l’écran est plat et froid. Pour compenser l’absence de contact physique, l’écriture créative mobilise la force du détail sensoriel (les cinq sens), le principe « Show, Don’t Tell » (montrer par des gestes concrets plutôt que nommer une émotion abstraite) et des figures de style choisies (métaphore, personnification, anaphore) qui impriment durablement le message dans la mémoire.',
        keyRule:
          'Ne dites pas que « le site est lent » ou que « le client est frustré » : montrez le doigt qui tapote nerveusement le bureau devant la barre figée à 99 % (« Show, Don’t Tell »).',
        workedExample: {
          title: 'Décrypter l’étude de cas « Au-delà du clic : Quand votre interface reprend son souffle »',
          statement:
            'Analysez les choix stylistiques de l’ouverture : « Il est 8h30. Dans les bureaux de votre PME, le café fume et les ordinateurs s’allument un à un… Mais derrière cette apparente sérénité, un chiffre silencieux ronge votre croissance : 68 %. »',
          methodSteps: [
            'Immersion sensorielle (Situation initiale) : « le café fume » (vue + odorat), « s’allument un à un » (ouïe + rythme matinal) ancrent instantanément le lecteur dans son propre bureau.',
            'Personnification & Métaphore (Élément perturbateur) : « un chiffre silencieux ronge votre croissance » donne au taux d’abandon la présence menaçante d’un prédateur invisible.',
            'Contraste dramatique : le passage brutal de la « sérénité » au chiffre nu « 68 % » crée un choc cognitif qui force la poursuite de la lecture.',
          ],
          conclusion:
            'L’alliance du détail sensoriel, de la personnification et du chiffre exact transforme un sujet technique (UX mobile) en récit captivant.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Show, Don’t Tell',
            stepTheme: 'Force du détail',
            stepTitle: 'Appliquer la règle « Show, Don’t Tell » (Montrer plutôt que dire)',
            paragraphText:
              '« Show, Don’t Tell » est le principe roi de l’écriture immersive : au lieu d’étiqueter une qualité ou une émotion par un adjectif abstrait, on décrit une scène observable qui la fait ressentir.\n• **Tell (abstrait et oubliable)** : « Le site est très lent et le client est frustré. »\n• **Show (visuel et mémorable)** : « L’utilisateur soupire, tapotant nerveusement son bureau alors que la barre de chargement semble figée à 99 %. »\n• **Pourquoi ça marche ?** : le cerveau active les mêmes zones sensorielles quand il imagine une scène concrète que lorsqu’il la vit réellement, créant une empathie immédiate.',
            keyRule:
              'Remplacez les adjectifs abstraits (« lent », « moderne », « frustrant », « efficace ») par un geste, un temps précis ou un détail observable.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces phrases applique véritablement le principe « Show, Don’t Tell » (Montrer, ne pas dire) ?',
              options: [
                '« Notre application de livraison est très rapide et fiable. »',
                '« À peine la commande validée, le livreur sonne déjà au portail alors que votre café est encore brûlant. »',
                '« Les utilisateurs sont généralement satisfaits de notre rapidité. »',
                '« La performance logistique est excellente. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Au lieu d’affirmer « c’est rapide », la phrase montre une scène sensorielle concrète (sonnerie au portail, café encore brûlant) qui fait ressentir la vitesse.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Les 5 sens',
            stepTheme: 'Immersion digitale',
            stepTitle: 'Mobiliser les cinq sens pour réchauffer un texte numérique',
            paragraphText:
              'Parce qu’un écran prive le lecteur de contact matériel, convoquer les cinq sens compense la froideur du support digital.\n• **La Vue** : couleurs symboliques (l’orange qui incite à l’action, la lumière bleutée d’un écran), gestes précis.\n• **L’Ouïe** : sonorités et rythme des phrases (phrases brèves pour l’urgence, amples pour la sérénité ; le « bip » rassurant d’un paiement validé).\n• **Le Toucher** : la fluidité d’un *swipe*, le clic franc et satisfaisant, la crispation sur un clavier.\n• **L’Odorat et le Goût** : un « café qui fume à 8h30 », l’« arrière-goût amer » d’une vente manquée — utilisés avec finesse, ils ancrent la scène dans le réel.',
            konanTip:
              'N’essayez pas de caser les 5 sens dans un seul paragraphe : UN ou DEUX détails sensoriels justes (vue + toucher ou vue + odorat) suffisent à faire vivre toute la scène.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Dans un texte UX décrivant une application mobile, comment peut-on concrètement solliciter le sens du « toucher » ?',
              options: [
                'En énumérant la taille de la base de données en gigaoctets',
                'En évoquant la fluidité d’un glissement du pouce (« swipe ») ou le clic franc qui valide la commande sans friction',
                'En ajoutant 12 notes de bas de page juridiques',
                'En écrivant tout le texte en majuscules',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Évoquer la sensation tactile du geste (fluidité du pouce, clic net) fait physiquement ressentir l’ergonomie de l’interface.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Étude de cas',
            stepTheme: 'Au-delà du clic',
            stepTitle: 'Analyser la mécanique narrative de « Au-delà du clic »',
            paragraphText:
              'L’étude de cas *« Au-delà du clic : Quand votre interface reprend son souffle »* montre comment marier données chiffrées et écriture créative pour un public B2B.\n• **Le titre** : métaphore biologique (« reprend son souffle ») qui humanise immédiatement un sujet technique (refonte UX).\n• **L’ancrage matinal (Situation initiale)** : « 8h30… le café fume… les ordinateurs s’allument » crée une complicité immédiate avec tout dirigeant de PME.\n• **La rupture chiffrée (Perturbateur)** : l’irruption du « 68 % » qui « ronge » la croissance transforme une statistique froide en menace palpable.\n• **La leçon** : même en B2B sérieux, le concret sensoriel + la donnée exacte surclasse toujours le rapport gris.',
            keyRule:
              'En B2B, commencez par une scène reconnaissable du bureau ou du terrain, puis frappez avec le chiffre réel qui révèle l’urgence.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Dans l’étude de cas « Au-delà du clic : Quand votre interface reprend son souffle », quelle figure de style rend immédiatement le titre vivant et humain ?',
              options: [
                'L’énumération administrative',
                'La personnification (attribuer à une interface technique la capacité humaine de « reprendre son souffle »)',
                'Le lipogramme sans la lettre « e »',
                'Le pléonasme',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Donner un souffle à une interface numérique est une personnification : elle transforme une refonte technique en soulagement quasi physique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Métaphore & Comparaison',
            stepTheme: 'Figures d’analogie',
            stepTitle: 'Éclairer un concept abstrait grâce à la métaphore et la comparaison',
            paragraphText:
              'En économie numérique, beaucoup de notions sont invisibles (cloud, tunnel de conversion, cybersécurité, bande passante). Les figures d’analogie les rendent instantanément visibles.\n• **La Comparaison** : rapproche deux réalités avec un outil explicite (« comme », « tel que ») — ex. « Un site sans balises claires est *comme* un supermarché sans panneaux de rayons. »\n• **La Métaphore** : fusionne directement les deux réalités sans outil de comparaison — ex. « Votre page d’accueil est la *vitrine lumineuse* de votre entreprise » ou « un chiffre silencieux *ronge* votre croissance ».\n• **Règle d’efficacité** : choisissez toujours une image familière au quotidien de votre Persona.',
            keyRule:
              'Une bonne métaphore explique en 5 mots ce qu’un paragraphe technique peine à clarifier en 10 lignes.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle figure de style est employée dans la phrase : « Votre tunnel de paiement actuel est une passoire qui laisse filer 68 % de vos clients » ?',
              options: [
                'Une comparaison (car il y a le mot « comme »)',
                'Une métaphore (rapprochement direct sans outil de comparaison entre le tunnel et une passoire)',
                'Une anaphore',
                'Un acrostiche',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assimilation directe (« est une passoire ») sans terme comparatif (« comme », « semblable à ») caractérise la métaphore.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Personnification & Anaphore',
            stepTheme: 'Habillage stylistique',
            stepTitle: 'Créer du relief et de la mémorisation avec la personnification et l’anaphore',
            paragraphText:
              'Deux autres figures de style sont des alliées précieuses en copywriting et en discours de marque.\n• **La Personnification** : prête des traits, gestes ou émotions humaines à un objet, un logiciel ou une donnée (ex. « Votre interface reprend son souffle », « Vos données vous parlent »). Elle crée immédiatement de la chaleur.\n• **L’Anaphore** : répète le même mot ou groupe de mots en début de phrases successives pour créer un martèlement musical et mémorable.\n• **Exemple d’anaphore** : « *Fini* les fichiers perdus. *Fini* les erreurs de saisie. *Fini* les soirées à recomptabiliser la caisse. »',
            konanTip:
              'L’anaphore fonctionne à merveille par série de TROIS (règle de trois) : deux répétitions paraissent inachevées, quatre deviennent lourdes, trois créent un rythme parfait !',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Dans le slogan « Plus vite pour vos clients. Plus simple pour vos équipes. Plus rentable pour votre entreprise. », quelle figure de style crée l’effet de rythme martelé ?',
              options: [
                'L’anaphore (répétition de « Plus… » en tête de chaque phrase)',
                'Le lipogramme',
                'La méthode S+7',
                'L’euphémisme',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La reprise identique du début de phrase (« Plus… ») en série ternaire est une anaphore classique très efficace en communication.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Habillage dosé',
            stepTheme: 'Sobriété efficace',
            stepTitle: 'Doser l’habillage stylistique sans tomber dans le style fleuri artificiel',
            paragraphText:
              'Tout comme un monteur vidéo ruine un film s’il ajoute un effet sonore toutes les deux secondes, un rédacteur perd en crédibilité s’il empile trois métaphores dans la même phrase.\n• **La métaphore filée cassée** : évitez d’écrire « Ce levier va naviguer vers de nouveaux sommets » (levier + bateau + montagne = image confuse).\n• **Principe d’économie** : une image forte par section clé (titre, ouverture ou conclusion) suffit à marquer l’esprit.\n• **Critère de tri** : si une figure de style n’aide pas le lecteur à mieux VOIR ou RESSENTIR l’idée, supprimez-la.',
            keyRule:
              'L’esthétique du langage sert toujours la clarté du message : une seule métaphore cohérente vaut mieux que cinq ornements gratuits.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quel défaut stylistique faut-il éviter lorsqu’on utilise des figures de style dans un texte professionnel ?',
              options: [
                'Utiliser une métaphore cohérente pour illustrer un concept complexe',
                'Empiler des métaphores contradictoires dans la même phrase au détriment de la clarté et de la crédibilité',
                'Employer une anaphore de trois phrases courtes',
                'Relire son texte à voix haute',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les figures de style doivent clarifier et incarner l’idée ; leur accumulation incohérente brouille le message et affaiblit l’Ethos.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_ecriture_creative_ch3_p3',
        order: 3,
        title: 'Copywriting digital performant : structures AIDA et PAS pour le web et le mobile',
        summary:
          'Maîtriser les frameworks de conversion AIDA et PAS, rédiger des appels à l’action (CTA) irrésistibles et optimiser ses textes pour la lecture web et mobile.',
        conceptExplanation:
          'Le Copywriting est l’écriture créative orientée vers une action précise et mesurable (s’inscrire, télécharger, acheter, demander une démo). Plutôt que d’improviser la structure d’une page de vente, d’un e-mail marketing ou d’une publicité mobile, les copywriters s’appuient sur deux architectures psychologiques universelles : le modèle AIDA (Attention → Intérêt → Désir → Action) et la formule PAS (Problème → Agitation → Solution).',
        keyRule:
          'Utilisez **AIDA** pour guider progressivement une audience qui découvre votre offre (landing page, newsletter), et **PAS** pour frapper vite sur une douleur brûlante (publicité mobile, e-mail de relance, post court).',
        formulas: [
          {
            name: 'Les deux frameworks rois du Copywriting',
            formula: '\\text{AIDA : Attention} \\to \\text{Int\\acute{e}r\\^et} \\to \\text{D\\acute{e}sir} \\to \\text{Action} \\quad|\\quad \\text{PAS : Probl\\`eme} \\to \\text{Agitation} \\to \\text{Solution}',
            note: 'Chaque structure se clôt impérativement par un seul Appel à l’Action (CTA) clair et sans friction.',
          },
        ],
        workedExample: {
          title: 'Rédiger un message de lancement mobile avec la formule PAS',
          statement:
            'Vous rédigez une publicité courte sur smartphone pour une application de révision interactive destinée aux étudiants de Licence 1.',
          methodSteps: [
            'P — Problème : « Encore 400 pages de notes à réviser à une semaine des partiels ? »',
            'A — Agitation : « Plus vous surlignez, plus tout se mélange dans votre tête, et le stress monte à chaque heure qui passe. »',
            'S — Solution + CTA : « Révisez en fiches interactives de 5 minutes avec quiz corrigés pas à pas. Lancez votre première session gratuite maintenant. »',
          ],
          conclusion:
            'En 45 mots, le lecteur reconnaît sa douleur, ressent l’urgence et voit une issue immédiate à portée de pouce.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Structure AIDA',
            stepTheme: 'Tunnel persuasif',
            stepTitle: 'Maîtriser les 4 étages du modèle AIDA (Attention, Intérêt, Désir, Action)',
            paragraphText:
              'Créé en publicité et devenu la colonne vertébrale des pages web modernes, le modèle **AIDA** accompagne le lecteur pas à pas jusqu’au clic.\n• **A — Attention** : accroche forte (Trigger, chiffre choc ou titre bénéfice) qui stoppe le scroll.\n• **I — Intérêt** : faits concrets, contexte familier et promesse claire qui donnent envie d’en savoir plus.\n• **D — Désir** : projection émotionnelle, bénéfices vécus et preuves sociales (témoignages clients, notes 4,9/5) qui font naître l’envie.\n• **A — Action** : un Appel à l’Action (CTA) unique, précis et rassurant qui lève le dernier doute.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture AIDA & Formule PAS en Copywriting digital',
              caption: 'Deux structures complémentaires pour convertir l’attention mobile en action concrète.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: 'A — Attention',
                    title: 'Accroche / Trigger (ou Problème en PAS)',
                    subtitle: 'Stopper le scroll dès la 1re seconde par un chiffre choc ou une douleur vécue',
                    color: 'orange',
                  },
                  {
                    badge: 'I — Intérêt',
                    title: 'Contexte & Enjeu (ou Agitation en PAS)',
                    subtitle: 'Montrer qu’on comprend le Persona et amplifier le coût de l’inaction',
                    color: 'violet',
                  },
                  {
                    badge: 'D — Désir',
                    title: 'Bénéfices & Preuves (ou Solution en PAS)',
                    subtitle: 'Projeter la transformation + témoignages clients et garanties (Ethos + Pathos)',
                    color: 'blue',
                  },
                  {
                    badge: 'A — Action',
                    title: 'Appel à l’Action unique (CTA)',
                    subtitle: 'Verbe concret orienté bénéfice + réassurance (« Essai gratuit, sans carte »)',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'Respectez l’ordre d’AIDA : demander l’Action avant d’avoir créé l’Intérêt et le Désir revient à demander quelqu’un en mariage avant de s’être présenté.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Dans la structure de copywriting AIDA, quel est le rôle exact de l’étape « D » (Désir) ?',
              options: [
                'Afficher uniquement le prix barré sans explication',
                'Faire passer le lecteur du simple intérêt intellectuel à l’envie concrète d’obtenir la solution grâce aux bénéfices projetés et aux preuves sociales',
                'Décrire l’organigramme interne de l’entreprise',
                'Remplacer totalement le titre d’accroche',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’étape Désir transforme la curiosité en envie personnelle en projetant les bénéfices vécus et en rassurant par des preuves (témoignages, études de cas).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Formule PAS',
            stepTheme: 'Efficacité mobile',
            stepTitle: 'Frapper vite et juste grâce à la formule PAS (Problème, Agitation, Solution)',
            paragraphText:
              'La formule **PAS** est la structure la plus redoutable pour les formats courts (publicités sociales, e-mails de prospection, posts LinkedIn, notifications).\n• **P — Problème** : nommer immédiatement la douleur exacte du Persona sans détour.\n• **A — Agitation** : appuyer brièvement mais concrètement sur les conséquences émotionnelles ou financières si rien ne change (sans exagération malhonnête).\n• **S — Solution** : introduire votre offre comme le soulagement naturel et évident.\n• **Pourquoi PAS surclasse sur mobile ?** : elle est plus courte qu’AIDA et active immédiatement l’empathie.',
            keyRule:
              'Dans la phase « Agitation » de PAS, ne soyez pas catastrophiste : décrivez simplement avec justesse le coût quotidien réel du statu quo.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Que signifient les trois lettres de la structure de copywriting « PAS » ?',
              options: [
                'Produit — Argent — Signature',
                'Problème — Agitation — Solution',
                'Publicité — Affichage — Statistiques',
                'Plan — Analyse — Synthèse',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PAS enchaîne l’identification du Problème, l’Agitation de ses conséquences concrètes, puis la présentation libératrice de la Solution.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'AIDA vs PAS',
            stepTheme: 'Choix stratégique',
            stepTitle: 'Savoir quand choisir AIDA et quand privilégier PAS',
            paragraphText:
              'Un bon architecte de l’engagement ne plaque pas mécaniquement la même formule sur tous les supports.\n• **Privilégiez AIDA** pour : une page de vente complète (landing page), une newsletter éditoriale, une brochure produit ou une présentation face à un public curieux qui ne ressent pas encore une urgence aiguë.\n• **Privilégiez PAS** pour : une publicité Facebook/Instagram/TikTok, un e-mail court à froid, un post LinkedIn orienté conversion ou un message WhatsApp face à une douleur précise et urgente.\n• **Combinaison** : une publicité PAS peut très bien renvoyer vers une landing page structurée en AIDA !',
            konanTip:
              'Si vous avez moins de 80 mots pour convaincre sur smartphone, démarrez presque toujours par PAS : c’est la ligne droite la plus courte vers le clic.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Vous devez rédiger une publicité mobile de 50 mots ciblant des gérants de PME excédés par leurs retards de facturation. Quelle structure est la plus immédiate et adaptée ?',
              options: [
                'Une biographie chronologique du fondateur depuis 1998',
                'La structure PAS (Problème brûlant → Agitation du manque de trésorerie → Solution immédiate)',
                'Un texte purement informatif sans aucun appel à l’action',
                'Un lipogramme sans la lettre « a »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur format court et douleur aiguë, PAS crée une résonance instantanée en trois temps nets.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Preuve sociale',
            stepTheme: 'Réassurance',
            stepTitle: 'Intégrer la preuve sociale et lever les objections avant le clic',
            paragraphText:
              'Même séduit par votre promesse, le cerveau du lecteur digital reste prudent : juste avant de cliquer, trois objections surgissent presque toujours (« Est-ce fiable ? », « Est-ce pour moi ? », « Et si je perds mon argent/temps ? »).\n• **Preuve sociale (Ethos)** : témoignage client précis (prénom, métier, résultat chiffré), nombre d’utilisateurs actifs (« Rejoint par 1 200 commerçants en Côte d’Ivoire »), logos partenaires.\n• **Micro-réassurance sous le bouton** : une courte ligne grise juste sous le CTA (« Essai gratuit 14 jours • Sans carte bancaire • Annulation en 1 clic ») augmente souvent le taux de conversion de 15 à 30 %.',
            keyRule:
              'Un témoignage client précis et chiffré (« J’ai gagné 4h par semaine ») persuade dix fois plus que dix superlatifs écrits par la marque elle-même.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Pourquoi place-t-on souvent une mention courte de réassurance (« Essai gratuit • Sans engagement ») juste sous un bouton d’Appel à l’Action ?',
              options: [
                'Pour allonger inutilement la page web',
                'Pour lever la dernière objection psychologique (peur du risque financier ou de la perte de temps) au moment exact du clic',
                'Pour cacher le véritable prix du service',
                'Parce que les navigateurs mobiles l’exigent techniquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La micro-réassurance supprime la friction perçue au point exact de décision, facilitant le passage à l’action.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Appel à l’action (CTA)',
            stepTheme: 'Conversion',
            stepTitle: 'Rédiger un Appel à l’Action (CTA) clair, spécifique et orienté bénéfice',
            paragraphText:
              'Le bouton d’Appel à l’Action (Call-to-Action) est la ligne d’arrivée de tout votre effort rédactionnel : s’il est vague, le lecteur repart.\n• **À éviter** : les libellés génériques qui évoquent un effort (« Cliquer ici », « Envoyer », « Soumettre le formulaire »).\n• **À privilégier** : un **verbe d’action à l’impératif ou à l’infinitif** + le **bénéfice immédiat** (ex. « Télécharger mon modèle Excel gratuit », « Démarrer mon essai de 14 jours », « Réserver ma démo en 2 min »).\n• **Règle d’unicité** : sur un e-mail ou un écran mobile, proposez UN seul objectif principal — trop de choix parallèles paralysent la décision (paradoxe du choix).',
            keyRule:
              'Un bon CTA remplace la notion d’effort (« S’inscrire ») par la notion de récompense (« Accéder à mon cours gratuit »).',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Lequel de ces textes de bouton (CTA) est le plus efficace pour une page proposant un guide PDF gratuit sur l’e-commerce ?',
              options: [
                '« Soumettre »',
                '« Cliquer ici »',
                '« Recevoir mon guide e-commerce gratuit »',
                '« Valider le formulaire n° 2 »',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ce CTA associe un verbe de réception (« Recevoir »), la personnalisation (« mon guide ») et la gratuité, mettant en avant la récompense plutôt que l’effort.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Structure HTML & Mobile',
            stepTheme: 'Lisibilité web',
            stepTitle: 'Structurer son copywriting pour le web (balises H1/H2/H3 et scannabilité)',
            paragraphText:
              'Sur le web, l’écriture créative dialogue directement avec la structure technique de la page (balises sémantiques HTML et ergonomie mobile).\n• **Hiérarchie sémantique** : un seul titre principal `H1` (la promesse majeure), des sous-titres `H2` (les grands bénéfices ou étapes AIDA), et des `H3` pour les détails. Cette structure aide à la fois le lecteur humain pressé ET le référencement naturel (SEO).\n• **Ligne de flottaison (Above the fold)** : sur le tout premier écran visible sans scroller, le visiteur doit comprendre en 5 secondes : **Quoi ? Pour qui ? Quel bénéfice ? Quel bouton cliquer ?**',
            keyRule:
              'Au-dessus de la ligne de flottaison (1er écran mobile), un visiteur doit comprendre immédiatement votre proposition de valeur sans avoir à deviner.',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'En rédaction web (Copywriting & UX), quel double avantage offre l’utilisation rigoureuse des balises de titres hiérarchiques (`H1`, `H2`, `H3`) ?',
              options: [
                'Elle empêche la page de s’afficher sur smartphone',
                'Elle rend la page immédiatement scannable pour l’œil humain sur mobile ET structure la compréhension du contenu pour les moteurs de recherche (SEO)',
                'Elle remplace le besoin de rédiger une accroche',
                'Elle colore automatiquement tout le texte en rouge',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La hiérarchie sémantique `H1/H2/H3` réduit la charge cognitive des lecteurs pressés tout en signalant les thèmes clés aux moteurs de recherche.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Test & Itération',
            stepTheme: 'A/B Testing',
            stepTitle: 'Mesurer et améliorer ses textes grâce au test A/B éditorial',
            paragraphText:
              'Dans l’économie numérique, on ne débat pas sans fin sur le « meilleur titre » au seul ressenti : on teste auprès de vrais utilisateurs !\n• **Principe du test A/B** : on envoie la version A (ex. accroche orientée chiffre) à 50 % de l’audience et la version B (ex. accroche orientée émotion) aux autres 50 %, en ne changeant qu’UNE seule variable à la fois.\n• **Indicateurs mesurés** : taux d’ouverture (pour un objet d’e-mail), taux de clic (CTR pour une accroche ou un CTA), taux de conversion final.\n• **Esprit d’architecte** : l’écriture créative digitale unit ainsi l’art du style et la rigueur scientifique de la mesure.',
            konanTip:
              'Ne testez jamais 5 changements en même temps dans un test A/B (titre + image + bouton + prix) : si la version B gagne, vous ne saurez pas lequel des 5 éléments a fait la différence !',
            exercise: {
              id: 'lmd_entd_l1_ecriture_creative_ch3_p3_q7',
              type: 'mcq',
              prompt:
                'Lors d’un test A/B sur deux versions d’un e-mail marketing visant à identifier le meilleur objet d’e-mail, quelle règle méthodologique est essentielle ?',
              options: [
                'Modifier simultanément l’objet, tout le texte, le prix et le bouton dans la version B',
                'Ne faire varier qu’une seule variable à la fois (ici l’objet) entre deux échantillons comparables afin d’attribuer l’écart de taux d’ouverture avec certitude',
                'Envoyer la version A à 2 personnes et la version B à 5 000 personnes',
                'Ne jamais regarder les résultats après l’envoi',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Isoler une seule variable (l’objet) garantit que la différence de performance mesurée provient bien de cette accroche et non d’un autre changement.',
            },
          },
        ],
      }),
    ],
  },
];
