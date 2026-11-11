import type { CurriculumChapter } from '../../../lib/curriculum/types';

// ============================================================================
// COURS MASTERCLASS OFFICIEL DE FRANÇAIS — TERMINALE (Séries A1, A2, C, D)
// Groupement de textes théâtraux : le héros épique africain, « Chaka » de Senghor
// Source : École Numérique – Ministère de l'Éducation Nationale de Côte d'Ivoire
// 1. Séance N°1 : Culture littéraire – Connaître les genres dramatiques
// 2. Séance N°2 : Culture littéraire – Genres modernes & Répertoire ivoirien / africain
// 3. Séance N°1 (GT) : Introduction au groupement – Senghor, Éthiopiques & Contexte héroïque
// 4. Séance N°2 (GT) : Lecture méthodique de « Chaka » – Axe 1 (Échange théâtral & registre lyrique)
// 5. Séance N°2 (GT) : Lecture méthodique de « Chaka » – Axe 2 (Immolation de l'amour & engagement)
// 6. Séance N°10 (GT) : Conclusion générale – Les vertus cardinales du héros épique africain
// ============================================================================

export const FR_TLE_GT_L02_CHAKA_HEROS_EPIQUE: CurriculumChapter = {
  id: "terminale_francais_gt_l02_chaka_heros_epique",
  subjectId: "francais",
  gradeLevel: "terminale_a1",
  alsoForGrades: [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  order: 2,
  title: "Groupement de textes théâtraux : le héros épique africain, « Chaka » de Senghor",
  summary: "Culture théâtrale intégrale (genres dramatiques, schéma actantiel), Senghor et la Négritude, lecture méthodique approfondie de « Chaka » (Axes 1 et 2), et conclusion sur les valeurs cardinales du héros épique africain.",
  officialVolumeHours: 12,
  contentVersion: 2,
  source: "École Numérique – Côte d'Ivoire (Séances Culture littéraire, Introduction GT, Lecture méthodique Chaka et Conclusion GT)",
  points: [
    // ------------------------------------------------------------------------
    // POINT 1 : Culture théâtrale : Les genres dramatiques classiques et l'action dramatique
    // ------------------------------------------------------------------------
    {
      id: "terminale_francais_gt_l02_chaka_heros_epique_p01",
      order: 1,
      title: "Culture théâtrale : Genres dramatiques classiques et dramaturgie",
      summary: "Définition du théâtre, double énonciation, comédie, tragédie (catharsis), drame classique et les trois temps de l'intrigue.",
      conceptExplanation: "Le théâtre est un genre littéraire spécifique conçu pour être représenté sur scène devant un public. Il englobe à la fois l'art dramatique (le jeu des acteurs, la mise en scène) et le texte écrit (dialogues et didascalies).\n\n1. La double énonciation théâtrale :\nToute parole prononcée au théâtre s'adresse à la fois à un autre personnage sur scène et, au-delà, aux spectateurs présents dans la salle. Cette convention fonde les répliques, les tirades, les monologues et les apartés.\n\n2. Les trois grands genres dramatiques traditionnels :\n- La Comédie : met en scène des personnages de basse ou moyenne condition confrontés à des obstacles nés des mœurs ou de travers psychologiques. Sa visée est satirique et morale : faire rire tout en châtiant les vices humains (Molière).\n- La Tragédie : confronte des figures nobles ou mythiques à une fatalité implacable qui entraîne leur ruine. Elle vise l'émotion jusqu'aux larmes et la terreur sacrée, opérant la « catharsis » (purgation des passions).\n- Le Drame : refuse le carcan rigide des règles classiques, mêle le tragique au quotidien et met en scène des roturiers ou des figures historiques face aux crises de l'Histoire (Victor Hugo).\n\n3. L'action dramatique et ses trois temps :\nL'intrigue se déploie selon une architecture rigoureuse :\n- Le prologue et l'exposition (présentation des protagonistes, du cadre et du germe du conflit),\n- Le nœud (le heurt violent des volontés antagonistes et l'aggravation de la crise),\n- Le dénouement (la résolution finale, heureuse dans la comédie, fatale et purificatrice dans la tragédie).",
      keyRule: "Au théâtre, le spectateur perçoit toujours deux niveaux de sens grâce à la double énonciation : la signification immédiate entre les personnages et la portée symbolique ou morale adressée au public.",
      formulas: [],
      workedExample: {
        title: "Méthode d'identification d'un genre dramatique",
        statement: "Dans une pièce, un roi découvre qu'un oracle maudit pèse sur son trône. Malgré son héroïsme et ses prières, chacune de ses actions précipite sa perte et la destruction de son royaume. Quel est le genre de cette pièce ?",
        methodSteps: [
          "Étape 1 : Analyser le statut des personnages : il s'agit d'un souverain (condition noble et royale).",
          "Étape 2 : Analyser la nature de l'obstacle : l'oracle maudit relève de la fatalité transcendante, impossible à déjouer.",
          "Étape 3 : Examiner l'issue et la visée : l'action mène à la destruction inéluctable et suscite effroi et pitié (catharsis)."
        ],
        conclusion: "Il s'agit incontestablement d'une tragédie classique."
      },
      exercises: [
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q1",
            type: "mcq",
            prompt: "Sur une scène, un ministre s'incline respectueusement devant son souverain en lui promettant une fidélité absolue, puis, se tournant légèrement vers la salle, glisse à mi-voix : « Réjouis-toi tyran, ton heure approche ». Quelle convention dramatique repose directement ici sur le principe de la double énonciation ?",
            options: [
              "La stichomythie : un échange rapide de vers réplique à réplique pour accélérer le rythme.",
              "L'aparté : une parole prononcée à l'insu des autres personnages et destinée exclusivement au public.",
              "Le monologue délibératif : une longue tirade solitaire où un héros pèse le pour et le contre.",
              "La didascalie implicite : une indication de jeu dissimulée dans les paroles du dialogue."
            ],
            correctAnswerIndex: 1,
            explanation: "L'aparté illustre parfaitement la double énonciation : l'illusion scénique feint que le roi n'entend rien, tandis que le spectateur reçoit directement la menace cachée."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q2",
            type: "mcq",
            prompt: "Dans une comédie satirique inspirée de Molière, un riche marchand refuse de nourrir ses serviteurs et préfère enfouir son or sous un grenier, jusqu'à ce que son propre fils lui dérobe sa cassette pour financer son mariage. Quelle est la fonction morale première de ce ressort comique ?",
            options: [
              "Susciter la terreur sacrée devant la punition divine des mauvaises actions.",
              "Purifier les passions des spectateurs en les faisant pleurer sur le destin du vieillard.",
              "Châtier un vice social destructeur en le rendant absurde et risible aux yeux de la communauté.",
              "Célébrer la fatalité implacable qui condamne chaque famille à la discorde financière."
            ],
            correctAnswerIndex: 2,
            explanation: "La comédie ne cherche ni la terreur ni les larmes, mais l'assainissement moral de la société par le ridicule jeté sur un vice excessif comme l'avarice."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q3",
            type: "mcq",
            prompt: "Dans quelle configuration dramatique le phénomène de la catharsis s'applique-t-il avec toute sa rigueur classique ?",
            options: [
              "Un souverain vertueux apprend qu'il a accompli sans le savoir la prophétie maudite et s'aveugle lui-même, inspirant effroi et compassion.",
              "Deux amoureux séparés par un tuteur cupide parviennent à se marier grâce à la supercherie inventée par un serviteur agile.",
              "Un soldat maladroit déclenche une bataille par accident et fait rire l'armée en tentant de masquer sa couardise.",
              "Des voyageurs immobiles conversent sans se comprendre dans une gare désaffectée où aucun train ne s'arrête."
            ],
            correctAnswerIndex: 0,
            explanation: "La catharsis exige la terreur devant la puissance de la fatalité qui frappe un grand personnage et la pitié pour sa souffrance imméritée."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q4",
            type: "mcq",
            prompt: "Qu'est-ce qui distingue fondamentalement le drame historique d'une tragédie classique du XVIIe siècle ?",
            options: [
              "Le drame historique interdit l'usage des vers et impose une fin comique avec réjouissances.",
              "Le drame historique refuse l'intervention divine arbitraire et ancre les conflits dans la vérité des luttes politiques et sociales humaines.",
              "La tragédie classique réunit exclusivement des roturiers tandis que le drame n'accepte que des divinités mythologiques.",
              "Le drame historique supprime toute forme de conflit entre les personnages pour privilégier la danse."
            ],
            correctAnswerIndex: 1,
            explanation: "Le drame historique fait descendre le conflit tragique sur le terrain réel de l'Histoire humaine, refusant la fatalité céleste des tragédies antiques."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q5",
            type: "mcq",
            prompt: "Dans une pièce historique, dès la première scène, une sentinelle annonce au général que des navires lourdement armés mouillent dans la baie et que l'émissaire ennemi exige une reddition avant le coucher du soleil. Quel impératif d'une scène d'exposition accomplissent ces répliques ?",
            options: [
              "Elles résolvent toutes les difficultés de l'intrigue et rétablissent l'ordre initial.",
              "Elles présentent un quiproquo comique destiné à détendre l'atmosphère du palais.",
              "Elles posent le cadre spatio-temporel et l'élément déclencheur d'une crise imminente qui lance l'action dramatique.",
              "Elles opèrent la purgation cathartique des passions chez les spectateurs."
            ],
            correctAnswerIndex: 2,
            explanation: "En précisant le lieu (la baie), le temps (avant le coucher du soleil) et la menace étrangère, ces répliques lancent immédiatement l'action théâtrale."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q6",
            type: "mcq",
            prompt: "Dans un affrontement dramatique, un chef de guerre prêt à signer un traité de paix découvre que l'ambassadeur en face de lui est l'assassin de son propre père et que ses soldats ont encerclé la forteresse. Quel mécanisme dramaturgique vient de transformer cette scène en nœud de l'action ?",
            options: [
              "Un coup de théâtre qui rend la conciliation impossible et précipite l'affrontement armé.",
              "Un dénouement comique qui règle les conflits par un banquet fraternel.",
              "Une scène d'exposition qui renseigne le public sur l'enfance du souverain.",
              "Un monologue délibératif prononcé dans la solitude d'un temple désert."
            ],
            correctAnswerIndex: 0,
            explanation: "La révélation inattendue constitue un coup de théâtre qui verrouille le nœud dramatique : la paix devient impossible et la tragédie devient inéluctable."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q7",
            type: "mcq",
            prompt: "Pourquoi les critiques dramatiques condamnent-ils l'usage d'un « deus ex machina » dans la résolution d'une pièce théâtrale sérieuse ?",
            options: [
              "Parce qu'il prive les acteurs de la possibilité de déclamer leurs répliques en vers réguliers.",
              "Parce qu'il résout le nœud par un artifice miraculeux extérieur au lieu de laisser l'action découler des choix et du combat des personnages.",
              "Parce qu'il empêche le public de rire des travers comiques des serviteurs de la pièce.",
              "Parce qu'il oblige la pièce à durer plus de cinq actes conformément à la règle des trois unités."
            ],
            correctAnswerIndex: 1,
            explanation: "Le deus ex machina est un piège d'écriture : il rompt la logique interne de l'action dramatique en imposant un miracle externe invraisemblable."
          }
      ],
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: "definition",
          stepTitle: "L'essence du théâtre et la double énonciation",
          stepTheme: "Définition théâtrale",
          stepBadge: "Théâtre & Énonciation",
          paragraphText: "Le mot théâtre désigne à la fois le bâtiment destiné aux représentations et l'art dramatique qui donne vie à un texte devant une assemblée. Sa loi fondamentale est la double énonciation : lorsqu'un personnage s'exprime, ses paroles sont destinées à son interlocuteur sur scène, mais elles sont simultanément reçues et interprétées par le public. Cette dualité permet l'aparté (parole entendue des seuls spectateurs) et l'ironie tragique (le public connaît la vérité que le personnage ignore encore).",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q1",
            type: "mcq",
            prompt: "Sur une scène, un ministre s'incline respectueusement devant son souverain en lui promettant une fidélité absolue, puis, se tournant légèrement vers la salle, glisse à mi-voix : « Réjouis-toi tyran, ton heure approche ». Quelle convention dramatique repose directement ici sur le principe de la double énonciation ?",
            options: [
              "La stichomythie : un échange rapide de vers réplique à réplique pour accélérer le rythme.",
              "L'aparté : une parole prononcée à l'insu des autres personnages et destinée exclusivement au public.",
              "Le monologue délibératif : une longue tirade solitaire où un héros pèse le pour et le contre.",
              "La didascalie implicite : une indication de jeu dissimulée dans les paroles du dialogue."
            ],
            correctAnswerIndex: 1,
            explanation: "L'aparté illustre parfaitement la double énonciation : l'illusion scénique feint que le roi n'entend rien, tandis que le spectateur reçoit directement la menace cachée."
          }
        },
        {
          stepNumber: 2,
          stepKind: "definition",
          stepTitle: "La comédie classique et la correction des mœurs",
          stepTheme: "La Comédie",
          stepBadge: "Comédie",
          paragraphText: "La comédie classique met en scène des personnages issus des classes moyennes ou populaires (bourgeois, valets, marchands). L'intrigue repose sur des obstacles liés à l'avarice, au mariage forcé, à l'hypocrisie ou aux rivalités familiales. Son principe philosophique est résumé par la formule latine « Castigat ridendo mores » : corriger les travers des hommes en les exposant au ridicule. Le dénouement est traditionnellement heureux et scelle le triomphe de la jeunesse et de la réconciliation.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q2",
            type: "mcq",
            prompt: "Dans une comédie satirique inspirée de Molière, un riche marchand refuse de nourrir ses serviteurs et préfère enfouir son or sous un grenier, jusqu'à ce que son propre fils lui dérobe sa cassette pour financer son mariage. Quelle est la fonction morale première de ce ressort comique ?",
            options: [
              "Susciter la terreur sacrée devant la punition divine des mauvaises actions.",
              "Purifier les passions des spectateurs en les faisant pleurer sur le destin du vieillard.",
              "Châtier un vice social destructeur en le rendant absurde et risible aux yeux de la communauté.",
              "Célébrer la fatalité implacable qui condamne chaque famille à la discorde financière."
            ],
            correctAnswerIndex: 2,
            explanation: "La comédie ne cherche ni la terreur ni les larmes, mais l'assainissement moral de la société par le ridicule jeté sur un vice excessif comme l'avarice."
          }
        },
        {
          stepNumber: 3,
          stepKind: "propriete",
          stepTitle: "La tragédie classique et la catharsis aristotélicienne",
          stepTheme: "La Tragédie",
          stepBadge: "Tragédie & Catharsis",
          paragraphText: "La tragédie s'attache à des protagonistes d'exception : rois, reines, chefs de guerre ou figures mythologiques. Placés au cœur d'une crise suprême, ils luttent contre une fatalité aveugle (décision divine, malédiction ancestrale, passion dévorante) qui les broie inéluctablement. Selon Aristote, la tragédie remplit une fonction civique et psychologique capitale : la « catharsis ». En éprouvant de la terreur devant le châtiment et de la pitié pour la victime, les spectateurs se libèrent de leurs propres passions déréglées.",
          visualSchema: {
            type: "custom_svg",
            title: "Tableau comparatif des trois genres dramatiques classiques",
            tableData: {
              headers: ["Genre", "Condition des personnages", "Nature des obstacles", "Tonalité dominante", "Dénouement & Visée"],
              rows: [
              ["Comédie", "Bourgeois, valets, basse/moyenne classe", "Mœurs sociales, avarice, quiproquos, mariages", "Comique, satirique, légère", "Heureux ; corriger les vices par le rire"],
              ["Tragédie", "Rois, princes, héros mythiques ou antiques", "Fatalité transcendante, oracles, dieux, passions", "Tragique, noble, pathétique", "Malheureux/sanglant ; catharsis (terreur et pitié)"],
              ["Drame", "Roturiers et nobles mêlés, figures historiques", "Crises politiques, injustices sociales, passions réelles", "Pathétique, héroïque, réaliste", "Variable ; émouvoir et interroger l'Histoire"]
            ]
            }
          },
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q3",
            type: "mcq",
            prompt: "Dans quelle configuration dramatique le phénomène de la catharsis s'applique-t-il avec toute sa rigueur classique ?",
            options: [
              "Un souverain vertueux apprend qu'il a accompli sans le savoir la prophétie maudite et s'aveugle lui-même, inspirant effroi et compassion.",
              "Deux amoureux séparés par un tuteur cupide parviennent à se marier grâce à la supercherie inventée par un serviteur agile.",
              "Un soldat maladroit déclenche une bataille par accident et fait rire l'armée en tentant de masquer sa couardise.",
              "Des voyageurs immobiles conversent sans se comprendre dans une gare désaffectée où aucun train ne s'arrête."
            ],
            correctAnswerIndex: 0,
            explanation: "La catharsis exige la terreur devant la puissance de la fatalité qui frappe un grand personnage et la pitié pour sa souffrance imméritée."
          }
        },
        {
          stepNumber: 4,
          stepKind: "methode",
          stepTitle: "Le drame historique et l'émancipation des règles",
          stepTheme: "Le Drame",
          stepBadge: "Drame historique",
          paragraphText: "Théorisé au XIXe siècle par les romantiques (notamment Victor Hugo dans la préface de Cromwell et Hernani), le drame brise les carcans étroits de la tragédie classique. Il abolit la séparation rigide des tons en mêlant le sublime et le grotesque. Ses personnages ne sont plus seulement des demi-dieux de la fable, mais des êtres de chair confrontés à des contextes historiques précis (révolutions, guerres d'indépendance, luttes de classes). Il conserve la gravité morale de la tragédie sans s'asservir à la règle des trois unités.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q4",
            type: "mcq",
            prompt: "Qu'est-ce qui distingue fondamentalement le drame historique d'une tragédie classique du XVIIe siècle ?",
            options: [
              "Le drame historique interdit l'usage des vers et impose une fin comique avec réjouissances.",
              "Le drame historique refuse l'intervention divine arbitraire et ancre les conflits dans la vérité des luttes politiques et sociales humaines.",
              "La tragédie classique réunit exclusivement des roturiers tandis que le drame n'accepte que des divinités mythologiques.",
              "Le drame historique supprime toute forme de conflit entre les personnages pour privilégier la danse."
            ],
            correctAnswerIndex: 1,
            explanation: "Le drame historique fait descendre le conflit tragique sur le terrain réel de l'Histoire humaine, refusant la fatalité céleste des tragédies antiques."
          }
        },
        {
          stepNumber: 5,
          stepKind: "methode",
          stepTitle: "L'intrigue dramatique : Le prologue et la scène d'exposition",
          stepTheme: "L'Intrigue",
          stepBadge: "Exposition",
          paragraphText: "L'intrigue dramatique constitue le squelette temporel de la pièce. Sa première étape est l'exposition (parfois précédée d'un prologue). Elle doit remplir trois impératifs sans paraître artificielle : présenter l'identité et les liens des personnages principaux, situer l'époque et le lieu de l'action, et exposer l'événement perturbateur initial qui enclenche l'urgence dramatique. Une exposition réussie installe immédiatement une tension qui interdit le statu quo.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q5",
            type: "mcq",
            prompt: "Dans une pièce historique, dès la première scène, une sentinelle annonce au général que des navires lourdement armés mouillent dans la baie et que l'émissaire ennemi exige une reddition avant le coucher du soleil. Quel impératif d'une scène d'exposition accomplissent ces répliques ?",
            options: [
              "Elles résolvent toutes les difficultés de l'intrigue et rétablissent l'ordre initial.",
              "Elles présentent un quiproquo comique destiné à détendre l'atmosphère du palais.",
              "Elles posent le cadre spatio-temporel et l'élément déclencheur d'une crise imminente qui lance l'action dramatique.",
              "Elles opèrent la purgation cathartique des passions chez les spectateurs."
            ],
            correctAnswerIndex: 2,
            explanation: "En précisant le lieu (la baie), le temps (avant le coucher du soleil) et la menace étrangère, ces répliques lancent immédiatement l'action théâtrale."
          }
        },
        {
          stepNumber: 6,
          stepKind: "propriete",
          stepTitle: "L'intrigue dramatique : Le nœud et les péripéties",
          stepTheme: "L'Intrigue",
          stepBadge: "Nœud dramatique",
          paragraphText: "Le nœud de l'action marque le point culminant de la crise théâtrale : c'est l'enchevêtrement des volontés opposées, où les forces en présence s'affrontent sans compromis possible. L'intrigue s'y nourrit de péripéties (changements imprévus de fortune), de coups de théâtre (révélations fracassantes qui renversent la situation) et d'obstacles intérieurs (doutes éthiques, serments contradictoires) qui maintiennent le spectateur en haleine.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q6",
            type: "mcq",
            prompt: "Dans un affrontement dramatique, un chef de guerre prêt à signer un traité de paix découvre que l'ambassadeur en face de lui est l'assassin de son propre père et que ses soldats ont encerclé la forteresse. Quel mécanisme dramaturgique vient de transformer cette scène en nœud de l'action ?",
            options: [
              "Un coup de théâtre qui rend la conciliation impossible et précipite l'affrontement armé.",
              "Un dénouement comique qui règle les conflits par un banquet fraternel.",
              "Une scène d'exposition qui renseigne le public sur l'enfance du souverain.",
              "Un monologue délibératif prononcé dans la solitude d'un temple désert."
            ],
            correctAnswerIndex: 0,
            explanation: "La révélation inattendue constitue un coup de théâtre qui verrouille le nœud dramatique : la paix devient impossible et la tragédie devient inéluctable."
          }
        },
        {
          stepNumber: 7,
          stepKind: "piege",
          stepTitle: "L'intrigue dramatique : La rigueur du dénouement",
          stepTheme: "L'Intrigue",
          stepBadge: "Dénouement",
          paragraphText: "Le dénouement apporte la solution définitive à la crise. Les théoriciens du théâtre exigent qu'il soit « nécessaire et complet » : il doit découler logiquement des forces déployées dans la pièce et ne rien laisser en suspens. L'erreur majeure est le recours à un « deus ex machina » (intervention miraculeuse ou arbitraire d'un élément extérieur non préparé). Dans la grande tradition dramatique, la fin tragique consacre la grandeur morale du héros terrassé par l'épreuve.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p01_q7",
            type: "mcq",
            prompt: "Pourquoi les critiques dramatiques condamnent-ils l'usage d'un « deus ex machina » dans la résolution d'une pièce théâtrale sérieuse ?",
            options: [
              "Parce qu'il prive les acteurs de la possibilité de déclamer leurs répliques en vers réguliers.",
              "Parce qu'il résout le nœud par un artifice miraculeux extérieur au lieu de laisser l'action découler des choix et du combat des personnages.",
              "Parce qu'il empêche le public de rire des travers comiques des serviteurs de la pièce.",
              "Parce qu'il oblige la pièce à durer plus de cinq actes conformément à la règle des trois unités."
            ],
            correctAnswerIndex: 1,
            explanation: "Le deus ex machina est un piège d'écriture : il rompt la logique interne de l'action dramatique en imposant un miracle externe invraisemblable."
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // POINT 2 : Le schéma actantiel, le drame moderne et le théâtre de l'absurde
    // ------------------------------------------------------------------------
    {
      id: "terminale_francais_gt_l02_chaka_heros_epique_p02",
      order: 2,
      title: "Schéma actantiel, dramaturgie moderne et théâtre africain",
      summary: "Modèle actantiel de Greimas, drame moderne engagé, théâtre de l'absurde (Ionesco) et répertoire ivoirien / africain (Dadié, Soyinka, Césaire).",
      conceptExplanation: "Pour analyser la dynamique de n'importe quel texte narratif ou théâtral, la linguistique moderne utilise le schéma actantiel conçu par Algirdas Julien Greimas.\n\n1. Les six actants et leurs trois axes relationnels :\n- L'axe du vouloir : le Sujet (le protagoniste qui agit) désire conquérir ou sauvegarder l'Objet (le but de sa quête : la liberté, la justice, le pouvoir, l'amour).\n- L'axe de la transmission : le Destinateur (l'instance morale, politique ou divine qui insuffle la quête) transmet l'Objet au Destinataire (ceux qui profitent du triomphe de la mission).\n- L'axe du pouvoir : les Adjuvants (forces, personnages ou vertus qui prêtent main-forte au Sujet) combattent les Opposants (adversaires, traîtres, doutes ou obstacles matériels).\n\n2. L'évolution du théâtre au XXe siècle :\n- Le Drame moderne : rompt avec l'esthétique du divertissement pour embrasser les luttes contemporaines (décolonisation, exploitation sociale, mémoire ouvrière). Il marie poésie, satire et harangue politique.\n- Le Théâtre de l'absurde (post-1945) : né de la désillusion des deux guerres mondiales (Ionesco, Beckett). Il met en scène la décomposition du langage, l'absence de communication et la vacuité du temps humain.\n\n3. Le répertoire dramatique ivoirien et africain :\n- En Côte d'Ivoire : Bernard Binlin Dadié (Béatrice du Congo, Les voix dans le vent), Soro Guéfala (L'ordonnance), Charles Nokan, Hyacinthe Kacou.\n- En Afrique et dans la diaspora : Wole Soyinka (Prix Nobel 1986 : Le lion et la perle, La mort et l'écuyer du roi), Sony Labou Tansi, Aimé Césaire (La tragédie du roi Christophe).",
      keyRule: "Un actant n'est pas forcément un individu en chair et en os : une idée abstraite (la patrie, la liberté) peut être Destinateur ou Objet, et une faiblesse intérieure (la peur, le doute) peut agir en Opposant redoutable.",
      formulas: [],
      workedExample: {
        title: "Application du schéma actantiel à un récit dramatique",
        statement: "Un jeune guerrier, pour sauver son village menacé de famine, part chercher une graine sacrée au sommet d'une montagne interdite. Ses aînés lui confient une lance bénie, tandis qu'un sorcier jaloux souffle une tempête pour lui barrer la route. Quels sont les actants ?",
        methodSteps: [
          "Sujet : le jeune guerrier (celui qui affronte la quête).",
          "Objet : la graine sacrée (but de la quête).",
          "Destinateur : la survie du village et le devoir envers la communauté.",
          "Destinataire : le village entier (les habitants délivrés de la famine).",
          "Adjuvants : les aînés et la lance bénie.",
          "Opposants : le sorcier jaloux et la tempête."
        ],
        conclusion: "Tous les actants sont nettement distribués sur les trois axes du vouloir, du pouvoir et du savoir."
      },
      exercises: [
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q1",
            type: "mcq",
            prompt: "Dans une pièce de théâtre anticoloniale, un jeune instituteur africain décide d'alphabétiser les enfants des plantations d'hévéa malgré les menaces du gouverneur colonial qui veut maintenir les ouvriers dans l'ignorance. Dans cette configuration, quel est l'Objet de la quête du Sujet ?",
            options: [
              "Le gouverneur colonial qui édicte les lois répressives.",
              "L'instituteur lui-même qui cherche à fuir la plantation.",
              "L'émancipation intellectuelle et l'instruction des enfants ouvriers.",
              "Le salaire mensuel versé par l'administration des plantations."
            ],
            correctAnswerIndex: 2,
            explanation: "L'Objet est ce vers quoi tend la volonté de l'instituteur : instruire et émanciper les enfants pour vaincre l'ignorance."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q2",
            type: "mcq",
            prompt: "Dans la pièce « Béatrice du Congo » de Bernard Dadié, l'héroïne affirme agir sous l'inspiration de Saint Antoine et des voix de ses ancêtres pour chasser les marchands d'esclaves et rendre la paix à tout le peuple congolais. Qui sont respectivement le Destinateur et le Destinataire dans cette vision dramatique ?",
            options: [
              "Destinateur : les marchands d'esclaves ; Destinataire : les soldats du roi.",
              "Destinateur : les ancêtres et la foi spirituelle ; Destinataire : le peuple congolais.",
              "Destinateur : Béatrice seule ; Destinataire : la couronne portugaise.",
              "Destinateur : les juges du tribunal ; Destinataire : les gardiens de prison."
            ],
            correctAnswerIndex: 1,
            explanation: "Les voix sacrées des ancêtres inspirent la mission (Destinateur), et le peuple délivré de la captivité en est le bénéficiaire (Destinataire)."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q3",
            type: "mcq",
            prompt: "Dans le poème dramatique de Senghor, Chaka confie qu'il aimait Nolivé d'une passion immense, mais que cet amour constituait un « carcan qui étranglait toute action » face à l'avancée des envahisseurs. Dans l'économie du schéma actantiel de la guerre de libération, quel rôle paradoxal jouait cette passion amoureuse ?",
            options: [
              "Un rôle d'Adjuvant politique renforçant sa haine du colonisateur.",
              "Un rôle d'Objet sacré que les colons cherchaient à acheter à prix d'or.",
              "Un rôle d'Opposant intérieur entravant la détermination implacable exigée par la guerre.",
              "Un rôle de Destinateur divin ordonnant la reddition sans combat."
            ],
            correctAnswerIndex: 2,
            explanation: "Pour Chaka chef de guerre, la douceur de l'amour constituait un obstacle intime (Opposant) qui risquait d'amollir sa résolution de chef d'armée."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q4",
            type: "mcq",
            prompt: "Quel trait stylistique et idéologique caractérise typiquement le drame moderne du XXe siècle ?",
            options: [
              "Le respect scrupuleux des trois unités du classicisme et l'absence totale de tout propos politique.",
              "La limitation des sujets au marivaudage amoureux dans des châteaux féodaux imaginaires.",
              "Le traitement courageux de thèmes sociaux ou politiques réels à travers un langage hybride et combatif.",
              "L'obligation de faire parler tous les personnages en latin médiéval."
            ],
            correctAnswerIndex: 2,
            explanation: "Le drame moderne plonge au cœur de la mêlée contemporaine en traitant des combats sociaux et politiques dans une langue vivante et percutante."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q5",
            type: "mcq",
            prompt: "Dans un extrait de « La Cantatrice chauve » d'Ionesco, les époux Martin conversent longuement pour découvrir avec stupéfaction qu'ils dorment dans le même lit, prennent le même train et sont en réalité mariés. Quel principe de la tradition dramatique ce procédé tourne-t-il en dérision ?",
            options: [
              "La catharsis tragique aristotélicienne fondée sur la mort violente des tyrans.",
              "La logique rationnelle du langage et la cohérence psychologique des personnages du théâtre classique.",
              "L'emploi des didascalies décrivant les costumes d'époque.",
              "La règle de la bienséance interdisant de montrer des duels à l'épée sur scène."
            ],
            correctAnswerIndex: 1,
            explanation: "L'absurde ridiculise la prétention du langage à communiquer un sens rationnel et déconstruit la psychologie classique en montrant des êtres marionnettes."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q6",
            type: "mcq",
            prompt: "Dans « Béatrice du Congo » de Bernard Binlin Dadié, l'auteur met en scène une jeune femme martyrisée pour avoir dénoncé la vassalisation de son royaume par des puissances étrangères. Quelle fonction civique majeure Dadié assigne-t-il au théâtre ivoirien à travers cette œuvre ?",
            options: [
              "Faire oublier l'histoire coloniale pour divertir passivement les spectateurs le samedi soir.",
              "Réhabiliter les figures héroïques africaines pour réveiller la fierté patriotique et la conscience de la liberté.",
              "Traduire des comédies de boulevard parisiennes sans rien modifier au décor européen.",
              "Démontrer que le théâtre doit s'abstenir de tout jugement moral sur les injustices de l'Histoire."
            ],
            correctAnswerIndex: 1,
            explanation: "Dadié utilise le théâtre historique comme une arme d'émancipation : exhumer les héroïnes méconnues pour nourrir la mémoire et la fierté collective."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q7",
            type: "mcq",
            prompt: "Dans « La tragédie du roi Christophe » d'Aimé Césaire, le souverain haïtien tente de forcer son peuple à construire une citadelle monumentale pour prouver au monde la grandeur de la race noire, quitte à épuiser les travailleurs jusqu'à la révolte. Quel questionnement tragique Césaire pose-t-il sur le héros bâtisseur ?",
            options: [
              "Il démontre que le théâtre ne doit jamais parler des questions de souveraineté ni de liberté.",
              "Il prouve qu'un roi d'opérette n'a besoin d'aucun projet politique pour régner.",
              "Il interroge le drame d'un idéalisme démesuré qui, pour forcer le respect des nations, risque de basculer dans l'autoritarisme destructeur.",
              "Il soutient que la construction de forteresses militaires en pierre est la seule activité littéraire valable."
            ],
            correctAnswerIndex: 2,
            explanation: "Césaire montre la tragédie du pouvoir postcolonial : Christophe veut hisser son peuple à la dignité mondiale, mais son exigence surhumaine l'isole et le perd."
          }
      ],
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: "definition",
          stepTitle: "Le schéma actantiel : L'axe du vouloir (Sujet et Objet)",
          stepTheme: "Schéma actantiel",
          stepBadge: "Sujet & Objet",
          paragraphText: "Au cœur de toute pièce de théâtre se trouve l'axe du vouloir : un Sujet (le protagoniste central) est tendu vers un Objet de quête. Cet Objet peut être matériel (une couronne, une arme, un talisman) ou moral (la libération d'une patrie, l'honneur familial, la vérité d'un crime). Sans désir fort et sans tension vers un but déterminé, le Sujet cesse d'exister théâtralement car l'action dramatique s'éteint aussitôt.",
          visualSchema: {
            type: "custom_svg",
            title: "Le modèle actantiel de Greimas : Rôles et fonctions",
            tableData: {
              headers: ["Actant", "Définition sémiotique", "Question clé", "Illustration classique"],
              rows: [
              ["Destinateur", "Instance qui motive, ordonne ou inspire la quête", "Qui pousse le héros à agir ?", "Les ancêtres, la patrie en danger, l'honneur"],
              ["Objet", "Ce vers quoi tend la volonté du héros", "Que cherche à accomplir le héros ?", "La liberté du peuple, la justice, le trône"],
              ["Destinataire", "Entité qui bénéficie du succès de la quête", "À qui profite la victoire ?", "La nation délivrée, la postérité"],
              ["Sujet", "Héros qui accomplit l'action dramatique", "Qui mène le combat ?", "Le chef de guerre, le roi résistant"],
              ["Adjuvant", "Force ou allié qui facilite l'action", "Qui apporte son soutien au héros ?", "Le devin loyal, le peuple insurgé, le courage"],
              ["Opposant", "Obstacle ou ennemi qui entrave la quête", "Qui dresse des barrières ?", "L'envahisseur étranger, le doute, la trahison"]
            ]
            }
          },
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q1",
            type: "mcq",
            prompt: "Dans une pièce de théâtre anticoloniale, un jeune instituteur africain décide d'alphabétiser les enfants des plantations d'hévéa malgré les menaces du gouverneur colonial qui veut maintenir les ouvriers dans l'ignorance. Dans cette configuration, quel est l'Objet de la quête du Sujet ?",
            options: [
              "Le gouverneur colonial qui édicte les lois répressives.",
              "L'instituteur lui-même qui cherche à fuir la plantation.",
              "L'émancipation intellectuelle et l'instruction des enfants ouvriers.",
              "Le salaire mensuel versé par l'administration des plantations."
            ],
            correctAnswerIndex: 2,
            explanation: "L'Objet est ce vers quoi tend la volonté de l'instituteur : instruire et émanciper les enfants pour vaincre l'ignorance."
          }
        },
        {
          stepNumber: 2,
          stepKind: "propriete",
          stepTitle: "Le schéma actantiel : L'axe de la transmission (Destinateur et Destinataire)",
          stepTheme: "Schéma actantiel",
          stepBadge: "Destinateur & Destinataire",
          paragraphText: "L'axe de la transmission relie le Destinateur (celui qui initie, commande ou justifie la mission) et le Destinataire (celui pour qui la mission est entreprise et qui recueille les fruits du sacrifice). Dans le théâtre épique africain, le Destinateur est presque toujours d'ordre supérieur : la mémoire des ancêtres, l'appel de la terre natale ou le cri de ralliement des opprimés. Le héros n'agit jamais pour sa vanité individuelle, mais pour la communauté entière qui en est le Destinataire sacré.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q2",
            type: "mcq",
            prompt: "Dans la pièce « Béatrice du Congo » de Bernard Dadié, l'héroïne affirme agir sous l'inspiration de Saint Antoine et des voix de ses ancêtres pour chasser les marchands d'esclaves et rendre la paix à tout le peuple congolais. Qui sont respectivement le Destinateur et le Destinataire dans cette vision dramatique ?",
            options: [
              "Destinateur : les marchands d'esclaves ; Destinataire : les soldats du roi.",
              "Destinateur : les ancêtres et la foi spirituelle ; Destinataire : le peuple congolais.",
              "Destinateur : Béatrice seule ; Destinataire : la couronne portugaise.",
              "Destinateur : les juges du tribunal ; Destinataire : les gardiens de prison."
            ],
            correctAnswerIndex: 1,
            explanation: "Les voix sacrées des ancêtres inspirent la mission (Destinateur), et le peuple délivré de la captivité en est le bénéficiaire (Destinataire)."
          }
        },
        {
          stepNumber: 3,
          stepKind: "methode",
          stepTitle: "Le schéma actantiel : L'axe du pouvoir (Adjuvant et Opposant)",
          stepTheme: "Schéma actantiel",
          stepBadge: "Adjuvant & Opposant",
          paragraphText: "L'axe du pouvoir réunit les forces d'assistance et les forces de résistance qui encadrent le Sujet. Un Adjuvant renforce les capacités d'action du protagoniste (fidélité d'un compagnon d'armes, lucidité politique, soutien populaire). À l'inverse, l'Opposant combat la réalisation du projet. Piège majeur à éviter : l'Opposant n'est pas uniquement l'ennemi en armes ; il peut s'incarner dans les passions affectives du héros lui-même, dès lors que celles-ci freinent l'accomplissement du devoir politique suprême.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q3",
            type: "mcq",
            prompt: "Dans le poème dramatique de Senghor, Chaka confie qu'il aimait Nolivé d'une passion immense, mais que cet amour constituait un « carcan qui étranglait toute action » face à l'avancée des envahisseurs. Dans l'économie du schéma actantiel de la guerre de libération, quel rôle paradoxal jouait cette passion amoureuse ?",
            options: [
              "Un rôle d'Adjuvant politique renforçant sa haine du colonisateur.",
              "Un rôle d'Objet sacré que les colons cherchaient à acheter à prix d'or.",
              "Un rôle d'Opposant intérieur entravant la détermination implacable exigée par la guerre.",
              "Un rôle de Destinateur divin ordonnant la reddition sans combat."
            ],
            correctAnswerIndex: 2,
            explanation: "Pour Chaka chef de guerre, la douceur de l'amour constituait un obstacle intime (Opposant) qui risquait d'amollir sa résolution de chef d'armée."
          }
        },
        {
          stepNumber: 4,
          stepKind: "definition",
          stepTitle: "Le drame moderne : L'engagement politique et social",
          stepTheme: "Théâtre moderne",
          stepBadge: "Drame moderne",
          paragraphText: "Le drame moderne émerge au début du XXe siècle pour arracher le théâtre au simple divertissement bourgeois. Il se caractérise par l'abolition des frontières rigides entre les genres, un métissage des registres (pathétique, satirique, oratoire) et une prise en charge directe des conflits de son époque : luttes contre l'impérialisme, dénonciation des dictatures, interrogations sur la justice sociale. Le langage s'y fait plus percutant, mêlant poésie lyrique et revendication historique sans complexe.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q4",
            type: "mcq",
            prompt: "Quel trait stylistique et idéologique caractérise typiquement le drame moderne du XXe siècle ?",
            options: [
              "Le respect scrupuleux des trois unités du classicisme et l'absence totale de tout propos politique.",
              "La limitation des sujets au marivaudage amoureux dans des châteaux féodaux imaginaires.",
              "Le traitement courageux de thèmes sociaux ou politiques réels à travers un langage hybride et combatif.",
              "L'obligation de faire parler tous les personnages en latin médiéval."
            ],
            correctAnswerIndex: 2,
            explanation: "Le drame moderne plonge au cœur de la mêlée contemporaine en traitant des combats sociaux et politiques dans une langue vivante et percutante."
          }
        },
        {
          stepNumber: 5,
          stepKind: "propriete",
          stepTitle: "Le théâtre de l'absurde et la crise du sens",
          stepTheme: "Théâtre de l'absurde",
          stepBadge: "L'Absurde (Ionesco)",
          paragraphText: "Né après le traumatisme de la Seconde Guerre mondiale avec Eugène Ionesco (« La Cantatrice chauve ») et Samuel Beckett (« En attendant Godot »), le théâtre de l'absurde accomplit une rupture radicale avec toute la dramaturgie antérieure. Il constate l'effondrement des idéologies et la vanité de l'existence. Cette rupture se manifeste par l'absence d'intrigue suivie, l'incohérence des dialogues (clichés, automatismes, non-sens), l'immobilité des personnages et le refus de tout dénouement explicatif.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q5",
            type: "mcq",
            prompt: "Dans un extrait de « La Cantatrice chauve » d'Ionesco, les époux Martin conversent longuement pour découvrir avec stupéfaction qu'ils dorment dans le même lit, prennent le même train et sont en réalité mariés. Quel principe de la tradition dramatique ce procédé tourne-t-il en dérision ?",
            options: [
              "La catharsis tragique aristotélicienne fondée sur la mort violente des tyrans.",
              "La logique rationnelle du langage et la cohérence psychologique des personnages du théâtre classique.",
              "L'emploi des didascalies décrivant les costumes d'époque.",
              "La règle de la bienséance interdisant de montrer des duels à l'épée sur scène."
            ],
            correctAnswerIndex: 1,
            explanation: "L'absurde ridiculise la prétention du langage à communiquer un sens rationnel et déconstruit la psychologie classique en montrant des êtres marionnettes."
          }
        },
        {
          stepNumber: 6,
          stepKind: "exemple",
          stepTitle: "Le dynamisme de la dramaturgie ivoirienne",
          stepTheme: "Théâtre ivoirien",
          stepBadge: "Dadié, Guéfala, Nokan",
          paragraphText: "La Côte d'Ivoire s'honore d'une tradition dramatique éclatante. Bernard Binlin Dadié en est la figure de proue : dans « Béatrice du Congo », il ressuscite la résistance d'une héroïne africaine face aux Portugais, tandis que « Les voix dans le vent » fustige les dérives mégalomanes du pouvoir personnel. Soro Guéfala aborde la critique des travers bureaucratiques dans « L'ordonnance », relayé par des dramaturges engagés comme Charles Nokan et Hyacinthe Kacou, qui fusionnent culture populaire et éveil national.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q6",
            type: "mcq",
            prompt: "Dans « Béatrice du Congo » de Bernard Binlin Dadié, l'auteur met en scène une jeune femme martyrisée pour avoir dénoncé la vassalisation de son royaume par des puissances étrangères. Quelle fonction civique majeure Dadié assigne-t-il au théâtre ivoirien à travers cette œuvre ?",
            options: [
              "Faire oublier l'histoire coloniale pour divertir passivement les spectateurs le samedi soir.",
              "Réhabiliter les figures héroïques africaines pour réveiller la fierté patriotique et la conscience de la liberté.",
              "Traduire des comédies de boulevard parisiennes sans rien modifier au décor européen.",
              "Démontrer que le théâtre doit s'abstenir de tout jugement moral sur les injustices de l'Histoire."
            ],
            correctAnswerIndex: 1,
            explanation: "Dadié utilise le théâtre historique comme une arme d'émancipation : exhumer les héroïnes méconnues pour nourrir la mémoire et la fierté collective."
          }
        },
        {
          stepNumber: 7,
          stepKind: "exemple",
          stepTitle: "Le rayonnement continental du théâtre africain",
          stepTheme: "Théâtre africain",
          stepBadge: "Soyinka, Césaire, Tansi",
          paragraphText: "Au-delà de la Côte d'Ivoire, les dramaturges noirs ont conquis la scène universelle. Le Nigérian Wole Soyinka (Prix Nobel de littérature 1986) plonge dans les mythes yorubas et la satire politique dans « Le lion et la perle » et « La mort et l'écuyer du roi ». Le Congolais Sony Labou Tansi déploie un verbe volcanique contre les tyrannies. Le Martiniquais Aimé Césaire, avec « La tragédie du roi Christophe », explore les vertiges et les déchirements d'un chef noir bâtisseur confronté aux pièges du pouvoir après l'esclavage.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p02_q7",
            type: "mcq",
            prompt: "Dans « La tragédie du roi Christophe » d'Aimé Césaire, le souverain haïtien tente de forcer son peuple à construire une citadelle monumentale pour prouver au monde la grandeur de la race noire, quitte à épuiser les travailleurs jusqu'à la révolte. Quel questionnement tragique Césaire pose-t-il sur le héros bâtisseur ?",
            options: [
              "Il démontre que le théâtre ne doit jamais parler des questions de souveraineté ni de liberté.",
              "Il prouve qu'un roi d'opérette n'a besoin d'aucun projet politique pour régner.",
              "Il interroge le drame d'un idéalisme démesuré qui, pour forcer le respect des nations, risque de basculer dans l'autoritarisme destructeur.",
              "Il soutient que la construction de forteresses militaires en pierre est la seule activité littéraire valable."
            ],
            correctAnswerIndex: 2,
            explanation: "Césaire montre la tragédie du pouvoir postcolonial : Christophe veut hisser son peuple à la dignité mondiale, mais son exigence surhumaine l'isole et le perd."
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // POINT 3 : Introduction au groupement : Senghor, Éthiopiques et les héros historiques
    // ------------------------------------------------------------------------
    {
      id: "terminale_francais_gt_l02_chaka_heros_epique_p03",
      order: 3,
      title: "Introduction au groupement : Senghor, Éthiopiques et l'épopée africaine",
      summary: "Biographie de Senghor, genèse de la Négritude, Éthiopiques, statut du poème dramatique, réfutation des préjugés coloniaux et panthéon des héros réels.",
      conceptExplanation: "Léopold Sédar Senghor (1906-2001) est né à Joal au Sénégal. Agrégé de grammaire à Paris, il fonde dans les années 1930 le mouvement de la Négritude avec le Martiniquais Aimé Césaire et le Guyanais Léon-Gontran Damas. Cette révolution littéraire et politique affirme avec fierté les valeurs culturelles et spirituelles du monde noir.\n\n1. L'homme d'État et l'académicien :\nPremier président du Sénégal indépendant (1960-1980), il quitte le pouvoir de son plein gré. Élu à l'Académie française en 1983 (le premier Africain à y siéger), il a toujours milité pour la « Civilisation de l'Universel » par le métissage culturel : être profondément enraciné dans sa culture pour s'ouvrir sans complexe aux autres.\n\n2. L'œuvre Éthiopiques (1956) :\nPublié au seuil des indépendances, le titre évoque les Éthiopiens (du grec « Aithiops », les visages brûlés par le soleil). Le recueil célèbre la terre africaine avec la scansion des instruments traditionnels (kôra, balafong, tam-tam). Ses autres recueils majeurs sont : Chants d'ombre (1945), Nocturnes (1961), Lettres d'hivernage (1972) et Élégies majeures (1979).\n\n3. Pourquoi étudier « Chaka » dans un groupement théâtral ?\nBien qu'inséré dans un recueil de poèmes, « Chaka » est sous-titré « poème dramatique ». Il comporte des personnages qui dialoguent par répliques alternées (Chaka, la Voix Blanche, le Chœur), une tension agonistique et un conflit insoluble. C'est du théâtre poétique.\n\n4. La réhabilitation des héros de l'histoire africaine :\nContre l'idéologie coloniale qui proclamait que l'Afrique n'avait pas d'Histoire, l'archéologie et la tradition orale ont prouvé l'existence d'empires prestigieux et de figures héroïques véridiques : Soundjata Kéïta, Chaka Zulu, Samory Touré, la Reine Abla Pokou, Béatrice du Congo. Les écrivains s'en emparent pour leur donner une dimension épique immortelle.",
      keyRule: "L'épopée africaine ne puise pas dans la fable imaginaire : elle s'enracine dans la mémoire d'hommes et de femmes réels dont le courage a sauvé ou forgé des nations souveraines.",
      formulas: [],
      workedExample: {
        title: "Présenter le contexte historique de la figure de Chaka",
        statement: "En quoi la figure de Chaka Zulu permet-elle à Senghor de réfuter l'argumentation coloniale sur l'Afrique ?",
        methodSteps: [
          "Constat colonial : la propagande impérialiste prétendait apporter la civilisation à des peuples sans passé organisé.",
          "Vérité historique : Chaka (début XIXe siècle) a unifié les tribus zouloues, modernisé l'armée et résisté aux invasions britanniques.",
          "Portée littéraire : en célébrant son génie stratégique et son sacrifice, Senghor rend à l'Afrique sa noblesse militaire et politique."
        ],
        conclusion: "Chaka devient le symbole vivant d'une Afrique maîtresse de son destin et capable d'une organisation politique et guerrière de premier ordre."
      },
      exercises: [
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q1",
            type: "mcq",
            prompt: "Face au système colonial qui exigeait des élites africaines qu'elles renient leurs racines pour devenir de simples copies de la culture métropolitaine, quel objectif fondamental Senghor, Césaire et Damas assignent-ils à la Négritude ?",
            options: [
              "Accepter l'assimilation complète en rejetant définitivement les langues et coutumes des ancêtres.",
              "Revendiquer avec fierté l'identité, l'histoire et les valeurs culturelles du monde noir contre l'aliénation coloniale.",
              "Interdire toute forme d'écriture en français et renoncer à toute étude universitaire en Europe.",
              "Remplacer la poésie lyrique par des traités exclusifs d'agronomie tropicale."
            ],
            correctAnswerIndex: 1,
            explanation: "La Négritude est une insurrection de la dignité : assumer ses racines noires et ses valeurs propres face à l'injonction coloniale d'assimilation."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q2",
            type: "mcq",
            prompt: "Dans son discours de réception à l'Académie française, Senghor vante « le dialogue des cultures où chacun donne et reçoit sans jamais perdre son âme ». Quel principe fondamental de son humanisme ce propos résume-t-il ?",
            options: [
              "Le refus de tout contact avec les civilisations extérieures par crainte de contamination.",
              "L'abandon volontaire de toutes les traditions africaines au profit de la culture dominante.",
              "Le métissage culturel : un enracinement solide dans son héritage propre combiné à une ouverture généreuse à l'Universel.",
              "L'uniformisation forcée de toute la planète sous une langue et une religion uniques."
            ],
            correctAnswerIndex: 2,
            explanation: "Pour Senghor, l'Universel n'est pas une domination unilatérale, mais un orchestre où chaque culture apporte son instrument sans s'effacer."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q3",
            type: "mcq",
            prompt: "Dans le recueil « Éthiopiques » de Senghor (1956), des poèmes comme « Chaka » ou « Que m'accompagnent kôras et balafongs » s'ouvrent par des indications musicales précises. Quelle est la fonction poétique de ces instruments africains au sein de textes écrits en langue française ?",
            options: [
              "Remplacer les paroles par de simples onomatopées sans signification linguistique.",
              "Infuser le souffle, le rythme et la polyphonie des cérémonies sacrées africaines au sein du vers poétique français.",
              "Indiquer que le poème ne doit jamais être lu dans le silence d'une bibliothèque.",
              "Masquer le manque d'inspiration littéraire de l'auteur par un vacarme sonore."
            ],
            correctAnswerIndex: 1,
            explanation: "Senghor opère une greffe sublime : il vêt le français du rythme ternaire et de la pulsation envoûtante des percussions ancestrales d'Afrique."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q4",
            type: "mcq",
            prompt: "Pourquoi les programmes officiels de terminale étudient-ils « Chaka » de Senghor au sein du groupement de textes théâtraux plutôt que dans un cours de poésie descriptive ?",
            options: [
              "Parce que le texte a été égaré dans la mauvaise section par les imprimeurs de 1956.",
              "Parce qu'il adopte la structure formelle du théâtre (distribution de personnages, répliques dialoguées, tension de procès agonistique).",
              "Parce que Senghor avait formellement interdit que l'on qualifie ses écrits de poèmes.",
              "Parce qu'il s'agit d'une comédie musicale bouffonne écrite pour faire rire les spectateurs de Dakar."
            ],
            correctAnswerIndex: 1,
            explanation: "« Chaka » est dramatique au sens théâtral le plus pur : une action conflictuelle menée par des personnages qui se défient à travers des répliques."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q5",
            type: "mcq",
            prompt: "Face aux thèses impérialistes du XIXe siècle affirmant que les Africains vivaient dans une sauvagerie immobile sans histoire, sur quels témoignages irréfutables s'appuient les historiens et écrivains de la Négritude ?",
            options: [
              "Sur les romans d'aventure et récits de voyage fantaisistes rédigés par les explorateurs coloniaux.",
              "Sur les décrets militaires de la conférence de Berlin de 1885.",
              "Sur les fouilles archéologiques des cités anciennes et la mémoire ininterrompue transmise par les dépositaires de la tradition orale.",
              "Sur les prédictions astrologiques parues dans les gazettes européennes."
            ],
            correctAnswerIndex: 2,
            explanation: "L'archéologie des cités médiévales et la parole mémorielle des griots et traditionalistes démontrent la richesse plurimillénaire des civilisations d'Afrique."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q6",
            type: "mcq",
            prompt: "Quel point commun historique et éthique relie indissolublement le geste de la Reine Abla Pokou sacrifiant son fils unique au fleuve Comoé et celui de Chaka sacrifiant sa fiancée Nolivé dans le poème de Senghor ?",
            options: [
              "Tous deux ont agi par pur caprice individuel sans se soucier du destin de leur communauté.",
              "Tous deux ont consenti à une déchirure intime atroce et immolé ce qu'ils aimaient pour préserver la vie et la liberté de leur peuple.",
              "Tous deux cherchaient à accumuler des richesses personnelles promises par les envahisseurs.",
              "Tous deux ignoraient totalement les conséquences funestes de leur acte au moment où ils l'ont accompli."
            ],
            correctAnswerIndex: 1,
            explanation: "C'est l'essence même du héros tragique africain : le sacrifice consenti de ses amours les plus sacrées pour le salut, la dignité et la survie de la nation."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q7",
            type: "mcq",
            prompt: "Dans le cadre de l'axe officiel « La représentation du héros épique dans le théâtre historique africain », quelle posture intellectuelle l'élève de terminale doit-il adopter face à l'assassinat de Nolivé par Chaka ?",
            options: [
              "Condamner sommairement le personnage comme un bandit ordinaire sans chercher à comprendre la logique dramatique du texte.",
              "Traiter le texte comme un conte féerique pour enfants sans aucun rapport avec l'Histoire réelle.",
              "Analyser comment le dramaturge met en scène le déchirement intime d'un chef d'État qui sacrifie sa passion amoureuse pour forger le bouclier défensif de sa nation.",
              "Remplacer le texte de Senghor par un cours d'algèbre appliquée sur les probabilités."
            ],
            correctAnswerIndex: 2,
            explanation: "L'axe d'étude invite à analyser la mécanique tragique et épique : le texte met en scène la dialectique poignante entre amour intime et impératif de souveraineté."
          }
      ],
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: "definition",
          stepTitle: "Léopold Sédar Senghor et la naissance de la Négritude",
          stepTheme: "Senghor & Négritude",
          stepBadge: "La Négritude",
          paragraphText: "Né à Joal au Sénégal en 1906 et mort en 2001, Léopold Sédar Senghor étudie à Paris où il se lie d'une amitié historique avec Aimé Césaire et Léon-Gontran Damas. Face à l'arrogance de l'assimilationnisme colonial qui niait la valeur des civilisations africaines, ils forgent le concept de Négritude. Définie par Senghor comme « l'ensemble des valeurs culturelles de l'Afrique noire », elle constitue à la fois un sursaut d'amour-propre, un refus du mépris raciste et un chant de réhabilitation des arts et de la spiritualité des peuples noirs.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q1",
            type: "mcq",
            prompt: "Face au système colonial qui exigeait des élites africaines qu'elles renient leurs racines pour devenir de simples copies de la culture métropolitaine, quel objectif fondamental Senghor, Césaire et Damas assignent-ils à la Négritude ?",
            options: [
              "Accepter l'assimilation complète en rejetant définitivement les langues et coutumes des ancêtres.",
              "Revendiquer avec fierté l'identité, l'histoire et les valeurs culturelles du monde noir contre l'aliénation coloniale.",
              "Interdire toute forme d'écriture en français et renoncer à toute étude universitaire en Europe.",
              "Remplacer la poésie lyrique par des traités exclusifs d'agronomie tropicale."
            ],
            correctAnswerIndex: 1,
            explanation: "La Négritude est une insurrection de la dignité : assumer ses racines noires et ses valeurs propres face à l'injonction coloniale d'assimilation."
          }
        },
        {
          stepNumber: 2,
          stepKind: "propriete",
          stepTitle: "L'homme d'État et la Civilisation de l'Universel",
          stepTheme: "Philosophie senghorienne",
          stepBadge: "Métissage culturel",
          paragraphText: "Senghor incarne la synthèse exceptionnelle de l'homme de pensée et de l'homme d'action politique. Président du Sénégal de 1960 à 1980, il démissionne paisiblement pour organiser une alternance démocratique modèle. Premier écrivain noir élu sous la coupole de l'Académie française en 1983, il refuse le piège du racisme inversé ou de l'enfermement communautaire : il plaide pour le « métissage culturel », un dialogue d'égal à égal où chaque peuple apporte sa part irremplaçable à la « Civilisation de l'Universel ».",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q2",
            type: "mcq",
            prompt: "Dans son discours de réception à l'Académie française, Senghor vante « le dialogue des cultures où chacun donne et reçoit sans jamais perdre son âme ». Quel principe fondamental de son humanisme ce propos résume-t-il ?",
            options: [
              "Le refus de tout contact avec les civilisations extérieures par crainte de contamination.",
              "L'abandon volontaire de toutes les traditions africaines au profit de la culture dominante.",
              "Le métissage culturel : un enracinement solide dans son héritage propre combiné à une ouverture généreuse à l'Universel.",
              "L'uniformisation forcée de toute la planète sous une langue et une religion uniques."
            ],
            correctAnswerIndex: 2,
            explanation: "Pour Senghor, l'Universel n'est pas une domination unilatérale, mais un orchestre où chaque culture apporte son instrument sans s'effacer."
          }
        },
        {
          stepNumber: 3,
          stepKind: "definition",
          stepTitle: "Éthiopiques (1956) et les grands recueils poétiques",
          stepTheme: "L'Œuvre poétique",
          stepBadge: "Éthiopiques (1956)",
          paragraphText: "Publié en 1956 aux éditions du Seuil, Éthiopiques tire son nom de l'ancien nom de l'Afrique subsaharienne (la terre des peaux d'ébène). Ce chef-d'œuvre de la poésie mondiale vibre de la musicalité des terroirs sénégalais, chaque poème portant l'indication des instruments traditionnels destinés à l'accompagner (kôra, balafong, tam-tams). Senghor y célèbre la grandeur des civilisations d'Afrique dans une langue française souveraine. Ses recueils antérieurs et postérieurs jalonnent son sacerdoce : Chants d'ombre (1945), Nocturnes (1961), Lettres d'hivernage (1972) et Élégies majeures (1979).",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q3",
            type: "mcq",
            prompt: "Dans le recueil « Éthiopiques » de Senghor (1956), des poèmes comme « Chaka » ou « Que m'accompagnent kôras et balafongs » s'ouvrent par des indications musicales précises. Quelle est la fonction poétique de ces instruments africains au sein de textes écrits en langue française ?",
            options: [
              "Remplacer les paroles par de simples onomatopées sans signification linguistique.",
              "Infuser le souffle, le rythme et la polyphonie des cérémonies sacrées africaines au sein du vers poétique français.",
              "Indiquer que le poème ne doit jamais être lu dans le silence d'une bibliothèque.",
              "Masquer le manque d'inspiration littéraire de l'auteur par un vacarme sonore."
            ],
            correctAnswerIndex: 1,
            explanation: "Senghor opère une greffe sublime : il vêt le français du rythme ternaire et de la pulsation envoûtante des percussions ancestrales d'Afrique."
          }
        },
        {
          stepNumber: 4,
          stepKind: "propriete",
          stepTitle: "« Chaka » : Le poème dramatique au cœur du théâtre",
          stepTheme: "Poème dramatique",
          stepBadge: "Poème dramatique",
          paragraphText: "Bien qu'inséré dans le recueil de poésie Éthiopiques, le texte « Chaka » est rigoureusement qualifié de poème dramatique. Senghor le compose en deux chants sous forme de dialogue scénique : les répliques s'échangent entre Chaka, « La Voix Blanche » (représentant le procureur colonial et le soupçon d'ambition personnelle) et un chœur de guerriers. Il ne s'agit pas d'un poème méditatif solitaire, mais d'une véritable tragédie théâtrale où se joue le destin d'un empire à travers l'affrontement dialectique de deux consciences.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q4",
            type: "mcq",
            prompt: "Pourquoi les programmes officiels de terminale étudient-ils « Chaka » de Senghor au sein du groupement de textes théâtraux plutôt que dans un cours de poésie descriptive ?",
            options: [
              "Parce que le texte a été égaré dans la mauvaise section par les imprimeurs de 1956.",
              "Parce qu'il adopte la structure formelle du théâtre (distribution de personnages, répliques dialoguées, tension de procès agonistique).",
              "Parce que Senghor avait formellement interdit que l'on qualifie ses écrits de poèmes.",
              "Parce qu'il s'agit d'une comédie musicale bouffonne écrite pour faire rire les spectateurs de Dakar."
            ],
            correctAnswerIndex: 1,
            explanation: "« Chaka » est dramatique au sens théâtral le plus pur : une action conflictuelle menée par des personnages qui se défient à travers des répliques."
          }
        },
        {
          stepNumber: 5,
          stepKind: "methode",
          stepTitle: "La déconstruction du préjugé colonial sur l'Afrique",
          stepTheme: "Contexte historique",
          stepBadge: "Histoire africaine",
          paragraphText: "L'entreprise coloniale cherchait à légitimer sa domination en martelant que l'Afrique subsaharienne n'avait ni écriture, ni mémoire, ni civilisation organisée avant l'arrivée des Européens. Les découvertes de l'archéologie moderne et la rigueur de la tradition orale (transmise de génération en génération par des confréries de traditionalistes) ont pulvérisé ce mensonge. L'Afrique a enfanté de puissants empires (Ghana, Mali, Songhaï, Zoulou, Baoulé) dotés de constitutions, de chartes des droits et d'armées redoutables bien avant l'invasion extérieure.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q5",
            type: "mcq",
            prompt: "Face aux thèses impérialistes du XIXe siècle affirmant que les Africains vivaient dans une sauvagerie immobile sans histoire, sur quels témoignages irréfutables s'appuient les historiens et écrivains de la Négritude ?",
            options: [
              "Sur les romans d'aventure et récits de voyage fantaisistes rédigés par les explorateurs coloniaux.",
              "Sur les décrets militaires de la conférence de Berlin de 1885.",
              "Sur les fouilles archéologiques des cités anciennes et la mémoire ininterrompue transmise par les dépositaires de la tradition orale.",
              "Sur les prédictions astrologiques parues dans les gazettes européennes."
            ],
            correctAnswerIndex: 2,
            explanation: "L'archéologie des cités médiévales et la parole mémorielle des griots et traditionalistes démontrent la richesse plurimillénaire des civilisations d'Afrique."
          }
        },
        {
          stepNumber: 6,
          stepKind: "exemple",
          stepTitle: "Le panthéon des héros réels de l'histoire africaine",
          stepTheme: "Héros historiques",
          stepBadge: "Les Héros de l'Histoire",
          paragraphText: "L'épopée africaine s'enracine dans des figures héroïques authentiques. Soundjata Kéïta fonde au XIIIe siècle l'Empire du Mandé et proclame la Charte de Kouroukan Fouga. Chaka Zulu unifie les clans d'Afrique australe au début du XIXe siècle face à l'avancée britannique. Samory Touré tient tête pendant plus de quinze ans aux armées coloniales françaises. En Côte d'Ivoire, la Reine Abla Pokou immole son propre fils aux flots de la Comoé pour sauver son peuple, tandis que Béatrice du Congo défie l'inquisition portugaise jusqu'au bûcher.",
          visualSchema: {
            type: "custom_svg",
            title: "Panthéon des grandes figures historiques du théâtre épique africain",
            tableData: {
              headers: ["Figure héroïque", "Région géographique", "Époque historique", "Épreuve et Combat", "Valeur cardinale incarnée"],
              rows: [
              ["Chaka Zulu", "Afrique australe (Afrique du Sud)", "Début du XIXe siècle", "Unification zouloue et résistance au débarquement blanc", "Abnégation politique et sacrifice total de l'amour"],
              ["Soundjata Kéïta", "Afrique de l'Ouest (Mali/Guinée)", "XIIIe siècle", "Victoire sur le tyran Soumaoro et Charte du Mandé", "Justice, dignité et souveraineté de l'homme"],
              ["Samory Touré", "Afrique occidentale (Haut-Niger/CI)", "Fin du XIXe siècle", "Guerre de résistance contre les troupes coloniales", "Bravoure militaire et génie stratégique"],
              ["Reine Abla Pokou", "Côte d'Ivoire (Peuple Baoulé)", "XVIIIe siècle", "Exode du peuple et sacrifice de son prince au fleuve", "Sacrifice maternel suprême au profit de la survie collective"],
              ["Béatrice du Congo", "Afrique centrale (Royaume du Kongo)", "Début du XVIIIe siècle", "Soulèvement spirituel contre les marchands d'esclaves", "Martyre de la dignité et résistance à l'oppression"]
            ]
            }
          },
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q6",
            type: "mcq",
            prompt: "Quel point commun historique et éthique relie indissolublement le geste de la Reine Abla Pokou sacrifiant son fils unique au fleuve Comoé et celui de Chaka sacrifiant sa fiancée Nolivé dans le poème de Senghor ?",
            options: [
              "Tous deux ont agi par pur caprice individuel sans se soucier du destin de leur communauté.",
              "Tous deux ont consenti à une déchirure intime atroce et immolé ce qu'ils aimaient pour préserver la vie et la liberté de leur peuple.",
              "Tous deux cherchaient à accumuler des richesses personnelles promises par les envahisseurs.",
              "Tous deux ignoraient totalement les conséquences funestes de leur acte au moment où ils l'ont accompli."
            ],
            correctAnswerIndex: 1,
            explanation: "C'est l'essence même du héros tragique africain : le sacrifice consenti de ses amours les plus sacrées pour le salut, la dignité et la survie de la nation."
          }
        },
        {
          stepNumber: 7,
          stepKind: "definition",
          stepTitle: "L'axe d'étude officiel du groupement de textes",
          stepTheme: "Axe d'étude",
          stepBadge: "Axe officiel",
          paragraphText: "Le programme de terminale fixe un cap d'analyse précis : « La représentation du héros épique dans le théâtre historique africain ». Il ne s'agit pas de juger ces figures avec anachronisme ou selon la morale du confort moderne, mais de comprendre comment la littérature transforme un personnage historique réel en archétype universel de la résistance. L'extrait étudié met en scène Chaka répondant à l'accusation morale après la mise à mort volontaire de sa fiancée Nolivé.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p03_q7",
            type: "mcq",
            prompt: "Dans le cadre de l'axe officiel « La représentation du héros épique dans le théâtre historique africain », quelle posture intellectuelle l'élève de terminale doit-il adopter face à l'assassinat de Nolivé par Chaka ?",
            options: [
              "Condamner sommairement le personnage comme un bandit ordinaire sans chercher à comprendre la logique dramatique du texte.",
              "Traiter le texte comme un conte féerique pour enfants sans aucun rapport avec l'Histoire réelle.",
              "Analyser comment le dramaturge met en scène le déchirement intime d'un chef d'État qui sacrifie sa passion amoureuse pour forger le bouclier défensif de sa nation.",
              "Remplacer le texte de Senghor par un cours d'algèbre appliquée sur les probabilités."
            ],
            correctAnswerIndex: 2,
            explanation: "L'axe d'étude invite à analyser la mécanique tragique et épique : le texte met en scène la dialectique poignante entre amour intime et impératif de souveraineté."
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // POINT 4 : Lecture méthodique : Analyse dramatique et déchirement lyrique de Chaka (Axe 1)
    // ------------------------------------------------------------------------
    {
      id: "terminale_francais_gt_l02_chaka_heros_epique_p04",
      order: 4,
      title: "Lecture méthodique de « Chaka » : Forme théâtrale et tonalité lyrique (Axe 1)",
      summary: "Situation du passage, formulation de l'hypothèse générale, et vérification de l'Axe 1 à travers la typographie théâtrale et le lexique de la souffrance morale.",
      conceptExplanation: "La lecture méthodique au baccalauréat est un exercice codifié qui vérifie la capacité de l'élève à construire le sens d'un texte littéraire à partir d'indices précis.\n\n1. Situation et Hypothèse générale :\n- La Situation : place l'extrait dans l'architecture de l'œuvre (poème dramatique Chaka d'Éthiopiques, 1956) et précise le moment de l'action (confrontation avec la Voix Blanche après l'assassinat de Nolivé).\n- L'Hypothèse générale : proposition synthétique reliant la forme et le fond. Ici : « Texte théâtral à tonalité lyrique dans lequel Chaka justifie l'assassinat de sa bien-aimée. »\n\n2. Vérification de l'Axe 1 : Texte théâtral à tonalité lyrique :\n- Entrée 1 : La typographie (mise en page théâtrale, alternance des répliques entre Chaka et La Voix Blanche). Elle met en scène un véritable procès contradictoire où l'accusé répond sans défaillir.\n- Entrée 2 : Le lexique de la souffrance morale (carcan qui étranglait toute action, longue nuit sans sommeil, mal sans nom comme un léopard sur le garrot). Loin d'être insensible, Chaka endure une agonie intérieure insupportable : en immolant Nolivé, il a détruit une part vive de sa propre âme.",
      keyRule: "En lecture méthodique, on ne sépare jamais l'analyse formelle de l'interprétation du sens : un relevé textuel sans interprétation psychologique ou idéologique ne vaut rien.",
      formulas: [],
      workedExample: {
        title: "Élaborer une entrée de lecture méthodique complète",
        statement: "Remplis une ligne du tableau de lecture méthodique pour l'Axe 1 à partir de l'expression « ce carcan qui étranglait toute action ».",
        methodSteps: [
          "Entrée : Le lexique (vocabulaire de la torture et de l'étouffement).",
          "Relevé : « ce carcan qui étranglait toute action » (vers 10).",
          "Analyse : Groupe nominal métaphorique évoquant un instrument d'entrave et de supplice.",
          "Interprétation : L'amour de Nolivé, bien que sublime, était perçu par Chaka comme une entrave fatale paralysant la mobilisation militaire face aux colons."
        ],
        conclusion: "L'indice textuel démontre le déchirement du héros entre la volupté sentimentale et l'urgence de l'action d'État."
      },
      exercises: [
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q1",
            type: "mcq",
            prompt: "Laquelle de ces propositions constitue une situation de passage méthodologiquement irréprochable pour l'extrait de « Chaka » ?",
            options: [
              "Ce texte sans date a été rédigé par un inconnu qui raconte comment un soldat a déserté son régiment pour partir en vacances.",
              "Extrait du poème dramatique « Chaka » d'Éthiopiques (1956) de Senghor, ce passage se situe après l'assassinat de Nolivé par Chaka, qui répond aux reproches de la Voix Blanche sous l'axe du héros épique.",
              "Ce passage est une conversation téléphonique moderne entre un commerçant de Guiglo et son fournisseur d'huile de palme.",
              "Ce texte clôt la pièce « Hernani » de Victor Hugo lorsque les amants boivent le poison dans le tombeau de Charlemagne."
            ],
            correctAnswerIndex: 1,
            explanation: "La proposition 2 formule les 3 critères : titre de l'œuvre et date (1956), placement dans l'intrigue (après la mort de Nolivé) et perspective de l'axe officiel."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q2",
            type: "mcq",
            prompt: "Pourquoi la formule « C'est un texte où un homme dit qu'il a tué sa copine » est-elle catégoriquement rejetée comme hypothèse générale au baccalauréat ?",
            options: [
              "Parce qu'elle contient trop de mots issus du grec ancien et du latin classique.",
              "Parce qu'elle ne mentionne ni la nature théâtrale du texte, ni sa tonalité lyrique élevée, ni l'enjeu tragique de la justification politique.",
              "Parce qu'une hypothèse générale doit obligatoirement être rédigée sous la forme d'un tableau à double entrée de 20 lignes.",
              "Parce qu'il est formellement interdit de parler des personnages dans une introduction de français."
            ],
            correctAnswerIndex: 1,
            explanation: "L'hypothèse générale doit qualifier la forme (texte théâtral lyrique) et le sens profond (justification du sacrifice héroïque), sans trivialité ni réductionnisme."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q3",
            type: "mcq",
            prompt: "Dans le tableau de lecture méthodique officiel, que révèle l'analyse littéraire des interventions alternées de Chaka et de La Voix Blanche (V21-V23) ?",
            options: [
              "Une conversation banale entre deux touristes contemplant le fleuve Zambèze.",
              "Un échange de répliques théâtrales où l'interlocuteur blanc provoque le héros pour le contraindre à révéler le motif secret de son abnégation.",
              "Un monologue intérieur où personne ne répond jamais au protagoniste.",
              "Une querelle comique de valets inspirée des farces du Moyen Âge."
            ],
            correctAnswerIndex: 1,
            explanation: "L'alternance des répliques structure le débat théâtral : la provocation de La Voix Blanche (« tu es poète... ou politicien ! ») pousse Chaka à la confession héroïque."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q4",
            type: "mcq",
            prompt: "Parmi ces traits d'écriture relevés dans les premiers vers de Chaka, lequel relève expressément de la tonalité lyrique ?",
            options: [
              "La description géométrique d'un camp militaire avec le nombre exact de régiments zoulous.",
              "L'épanchement passionné du moi à travers les marques de la première personne (« mon cœur », « mon amour Nolivé ») et l'aveu de sa douleur.",
              "L'exposé d'un tableau budgétaire sur les recettes douanières du royaume.",
              "L'emploi exclusif du subjonctif imparfait dans un traité d'alliance commerciale."
            ],
            correctAnswerIndex: 1,
            explanation: "Le registre lyrique est par excellence le chant de l'intériorité et du sentiment personnel meurtri exprimé à la première personne."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q5",
            type: "mcq",
            prompt: "Dans le vers « Rongée d'un mal sans nom comme un léopard sur le garrot », que révèle la comparaison sur l'état d'esprit de Chaka après la mort de Nolivé ?",
            options: [
              "Qu'il s'est acheté un animal de compagnie pour chasser dans la savane.",
              "Que le remords et l'angoisse le dévorent avec la férocité impitoyable d'un fauve agrippé à sa proie.",
              "Qu'il regrette d'avoir choisi une carrière militaire au lieu d'ouvrir une boutique.",
              "Qu'il n'a éprouvé absolument aucune tristesse après la disparition de sa fiancée."
            ],
            correctAnswerIndex: 1,
            explanation: "L'image du léopard sur le garrot dit la souffrance inextinguible : le tourment s'est abattu sur lui et ne le lâche plus, attestant sa torture morale."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q6",
            type: "mcq",
            prompt: "Comment s'interprète littérairement le paradoxe tragique de Chaka « Je ne l'aurais pas tuée si moins aimée » ?",
            options: [
              "Comme l'aveu d'une démence furieuse causée par un accès de jalousie domestique ordinaire.",
              "Comme la démonstration que le sacrifice héroïque tire toute sa grandeur du renoncement à ce qui constituait son trésor affectif le plus absolu.",
              "Comme un jeu de mots humoristique destiné à faire sourire La Voix Blanche.",
              "Comme une erreur d'accord grammatical corrigée dans les éditions ultérieures du recueil."
            ],
            correctAnswerIndex: 1,
            explanation: "Le sacrifice n'a de portée salvatrice pour le peuple que parce qu'il coûte à Chaka son propre cœur : son amour infini pour Nolivé est la mesure exacte de son immolation."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q7",
            type: "mcq",
            prompt: "Quelle double valeur symbolique le dramaturge confère-t-il au personnage de « La Voix Blanche » dans cet affrontement ?",
            options: [
              "Une infirmière bienveillante venue soigner les blessures de Chaka après le combat.",
              "La voix accusatrice du colonisateur et le miroir critique intérieur qui somme le héros de rendre compte de ses actes devant l'Histoire.",
              "Un messager zoulou venu annoncer une victoire navale sur l'océan Indien.",
              "La déesse des moissons descendue sur terre pour féliciter les paysans zoulous."
            ],
            correctAnswerIndex: 1,
            explanation: "La Voix Blanche est le procureur du monde blanc et l'écho de la propre conscience de Chaka, l'obligeant à dépasser le lyrisme pour justifier sa politique."
          }
      ],
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: "methode",
          stepTitle: "La situation rigoureuse du passage",
          stepTheme: "Lecture méthodique",
          stepBadge: "Situation du passage",
          paragraphText: "La situation d'un extrait de lecture méthodique obéit à trois exigences : situer l'auteur et l'œuvre de rattachement (Senghor, le poème dramatique « Chaka » tiré d'Éthiopiques en 1956), situer l'extrait dans la continuité de l'action dramatique (le passage fait suite à l'assassinat volontaire de Nolivé par Chaka pour sceller son pacte de libération), et énoncer l'axe d'étude officiel (la représentation du héros épique dans le théâtre historique africain).",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q1",
            type: "mcq",
            prompt: "Laquelle de ces propositions constitue une situation de passage méthodologiquement irréprochable pour l'extrait de « Chaka » ?",
            options: [
              "Ce texte sans date a été rédigé par un inconnu qui raconte comment un soldat a déserté son régiment pour partir en vacances.",
              "Extrait du poème dramatique « Chaka » d'Éthiopiques (1956) de Senghor, ce passage se situe après l'assassinat de Nolivé par Chaka, qui répond aux reproches de la Voix Blanche sous l'axe du héros épique.",
              "Ce passage est une conversation téléphonique moderne entre un commerçant de Guiglo et son fournisseur d'huile de palme.",
              "Ce texte clôt la pièce « Hernani » de Victor Hugo lorsque les amants boivent le poison dans le tombeau de Charlemagne."
            ],
            correctAnswerIndex: 1,
            explanation: "La proposition 2 formule les 3 critères : titre de l'œuvre et date (1956), placement dans l'intrigue (après la mort de Nolivé) et perspective de l'axe officiel."
          }
        },
        {
          stepNumber: 2,
          stepKind: "propriete",
          stepTitle: "La formulation de l'hypothèse générale",
          stepTheme: "Hypothèse générale",
          stepBadge: "Hypothèse générale",
          paragraphText: "L'hypothèse générale est le jugement d'ensemble qui guide l'explication de texte. Elle ne doit pas se contenter de raconter l'histoire : elle formule une thèse reliant la spécificité stylistique et générique (un texte théâtral dialogué à tonalité lyrique) et l'enjeu intellectuel fondamental (le plaidoyer passionné par lequel Chaka assume et justifie l'immolation de sa fiancée pour le salut de sa patrie).",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q2",
            type: "mcq",
            prompt: "Pourquoi la formule « C'est un texte où un homme dit qu'il a tué sa copine » est-elle catégoriquement rejetée comme hypothèse générale au baccalauréat ?",
            options: [
              "Parce qu'elle contient trop de mots issus du grec ancien et du latin classique.",
              "Parce qu'elle ne mentionne ni la nature théâtrale du texte, ni sa tonalité lyrique élevée, ni l'enjeu tragique de la justification politique.",
              "Parce qu'une hypothèse générale doit obligatoirement être rédigée sous la forme d'un tableau à double entrée de 20 lignes.",
              "Parce qu'il est formellement interdit de parler des personnages dans une introduction de français."
            ],
            correctAnswerIndex: 1,
            explanation: "L'hypothèse générale doit qualifier la forme (texte théâtral lyrique) et le sens profond (justification du sacrifice héroïque), sans trivialité ni réductionnisme."
          }
        },
        {
          stepNumber: 3,
          stepKind: "definition",
          stepTitle: "Axe 1 : Entrée 1 – La typographie dramatique et le dialogue",
          stepTheme: "Axe 1 : Théâtre & Lyrisme",
          stepBadge: "Typographie scénique",
          paragraphText: "La première entrée retenue pour vérifier l'Axe 1 est la typographie. L'œil repère immédiatement les marques canoniques de l'écriture théâtrale : noms des interlocuteurs en lettres capitales (CHAKA, LA VOIX BLANCHE), alinéas distincts et enchaînement de répliques. Cet échange verbal n'est pas une simple discussion : il matérialise une joute oratoire, un véritable procès dramatique où La Voix Blanche attaque le chef zoulou et où Chaka prend la parole pour dévoiler la grandeur de son calvaire.",
          visualSchema: {
            type: "custom_svg",
            title: "Tableau officiel de lecture méthodique – Axe 1 (Document officiel Éducation Nationale)",
            tableData: {
              headers: ["Entrées d'analyse", "Relevés textuels précis", "Analyses stylistiques & grammaticales", "Interprétations du sens profond"],
              rows: [
              ["La typographie", "V1-V21 : « La faiblesse... mon peuple noir. » ; V22-V31 : « Ma parole... ma passion ? »", "Intervention solennelle de Chaka et répliques sarcastiques de La Voix Blanche", "L'échange de paroles alterné (répliques) matérialise le genre théâtral et le procès de la conscience du héros."],
              ["Le lexique", "« Je ne l'aurais pas tuée si moins aimée », « Sa voix dans ma tête », « Ce carcan qui étranglait toute action », « Cette longue nuit sans sommeil »", "Propositions subordonnées et groupes nominaux renvoyant au champ lexical de la souffrance", "Après le meurtre de Nolivé, Chaka endure une torture morale extrême : en la tuant, il a détruit une part de lui-même pour accomplir son devoir d'État."]
            ]
            }
          },
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q3",
            type: "mcq",
            prompt: "Dans le tableau de lecture méthodique officiel, que révèle l'analyse littéraire des interventions alternées de Chaka et de La Voix Blanche (V21-V23) ?",
            options: [
              "Une conversation banale entre deux touristes contemplant le fleuve Zambèze.",
              "Un échange de répliques théâtrales où l'interlocuteur blanc provoque le héros pour le contraindre à révéler le motif secret de son abnégation.",
              "Un monologue intérieur où personne ne répond jamais au protagoniste.",
              "Une querelle comique de valets inspirée des farces du Moyen Âge."
            ],
            correctAnswerIndex: 1,
            explanation: "L'alternance des répliques structure le débat théâtral : la provocation de La Voix Blanche (« tu es poète... ou politicien ! ») pousse Chaka à la confession héroïque."
          }
        },
        {
          stepNumber: 4,
          stepKind: "propriete",
          stepTitle: "Axe 1 : La tonalité lyrique et l'épanchement du cœur",
          stepTheme: "Axe 1 : Théâtre & Lyrisme",
          stepBadge: "Registre lyrique",
          paragraphText: "Bien que Chaka soit un redoutable stratège militaire, son discours baigne dans une profonde tonalité lyrique. Le registre lyrique se reconnaît à la présence obsédante de la première personne (« je », « ma négresse », « mon cœur », « mes entrailles », « mon amour »), à l'aveu candide des émotions et à la musicalité incantatoire des vers. Loin du cliché du conquérant insensible, Senghor donne à voir un homme déchiré dont le cœur saigne à chaque parole.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q4",
            type: "mcq",
            prompt: "Parmi ces traits d'écriture relevés dans les premiers vers de Chaka, lequel relève expressément de la tonalité lyrique ?",
            options: [
              "La description géométrique d'un camp militaire avec le nombre exact de régiments zoulous.",
              "L'épanchement passionné du moi à travers les marques de la première personne (« mon cœur », « mon amour Nolivé ») et l'aveu de sa douleur.",
              "L'exposé d'un tableau budgétaire sur les recettes douanières du royaume.",
              "L'emploi exclusif du subjonctif imparfait dans un traité d'alliance commerciale."
            ],
            correctAnswerIndex: 1,
            explanation: "Le registre lyrique est par excellence le chant de l'intériorité et du sentiment personnel meurtri exprimé à la première personne."
          }
        },
        {
          stepNumber: 5,
          stepKind: "methode",
          stepTitle: "Axe 1 : Entrée 2 – Le champ lexical de la souffrance morale",
          stepTheme: "Axe 1 : Théâtre & Lyrisme",
          stepBadge: "Lexique de la douleur",
          paragraphText: "La deuxième entrée du tableau officiel scrute le lexique de la souffrance morale. Senghor accumule des expressions d'une violence psychologique inouïe : « écartèlement sur la roue des années », « carcan qui étranglait toute action », « longue nuit sans sommeil », « pouls fiévreux », « mal sans nom comme un léopard sur le garrot ». La souffrance de Chaka n'est pas physique : elle est morale, existentielle et incurable.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q5",
            type: "mcq",
            prompt: "Dans le vers « Rongée d'un mal sans nom comme un léopard sur le garrot », que révèle la comparaison sur l'état d'esprit de Chaka après la mort de Nolivé ?",
            options: [
              "Qu'il s'est acheté un animal de compagnie pour chasser dans la savane.",
              "Que le remords et l'angoisse le dévorent avec la férocité impitoyable d'un fauve agrippé à sa proie.",
              "Qu'il regrette d'avoir choisi une carrière militaire au lieu d'ouvrir une boutique.",
              "Qu'il n'a éprouvé absolument aucune tristesse après la disparition de sa fiancée."
            ],
            correctAnswerIndex: 1,
            explanation: "L'image du léopard sur le garrot dit la souffrance inextinguible : le tourment s'est abattu sur lui et ne le lâche plus, attestant sa torture morale."
          }
        },
        {
          stepNumber: 6,
          stepKind: "propriete",
          stepTitle: "Axe 1 : Le paradoxe fondateur : « Je ne l'aurais pas tuée si moins aimée »",
          stepTheme: "Axe 1 : Théâtre & Lyrisme",
          stepBadge: "Le paradoxe tragique",
          paragraphText: "Le vers 13 renferme le nœud philosophique de la pièce : « Je ne l'aurais pas tuée si moins aimée. Il fallait échapper au doute ». Ce paradoxe foudroyant heurte la morale commune. Pour Chaka, si Nolivé n'avait été qu'une favorite parmi d'autres, sa mort n'aurait eu aucune valeur de rachat. Le sacrifice suprême n'est authentique que parce qu'il porte sur l'être le plus cher de son existence. Tuer Nolivé, c'était arracher de sa propre poitrine la possibilité même du doute et du recul.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q6",
            type: "mcq",
            prompt: "Comment s'interprète littérairement le paradoxe tragique de Chaka « Je ne l'aurais pas tuée si moins aimée » ?",
            options: [
              "Comme l'aveu d'une démence furieuse causée par un accès de jalousie domestique ordinaire.",
              "Comme la démonstration que le sacrifice héroïque tire toute sa grandeur du renoncement à ce qui constituait son trésor affectif le plus absolu.",
              "Comme un jeu de mots humoristique destiné à faire sourire La Voix Blanche.",
              "Comme une erreur d'accord grammatical corrigée dans les éditions ultérieures du recueil."
            ],
            correctAnswerIndex: 1,
            explanation: "Le sacrifice n'a de portée salvatrice pour le peuple que parce qu'il coûte à Chaka son propre cœur : son amour infini pour Nolivé est la mesure exacte de son immolation."
          }
        },
        {
          stepNumber: 7,
          stepKind: "piege",
          stepTitle: "Axe 1 : La fonction dramaturgique de « La Voix Blanche »",
          stepTheme: "Axe 1 : Théâtre & Lyrisme",
          stepBadge: "La Voix Blanche",
          paragraphText: "Qui est véritablement La Voix Blanche qui interpelle Chaka au vers 22 : « Ma parole Chaka, tu es poète... ou beau parleur... un politicien ! » ? Elle remplit une double fonction dramaturgique : sur le plan historique, elle symbolise l'Occident colonial qui méprise les chefs africains en les traitant de tyrans sanguinaires ou d'orateurs démagogues ; sur le plan intérieur, elle incarne la voix du doute et du soupçon moral qui hante la conscience du chef dans sa nuit de veille.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p04_q7",
            type: "mcq",
            prompt: "Quelle double valeur symbolique le dramaturge confère-t-il au personnage de « La Voix Blanche » dans cet affrontement ?",
            options: [
              "Une infirmière bienveillante venue soigner les blessures de Chaka après le combat.",
              "La voix accusatrice du colonisateur et le miroir critique intérieur qui somme le héros de rendre compte de ses actes devant l'Histoire.",
              "Un messager zoulou venu annoncer une victoire navale sur l'océan Indien.",
              "La déesse des moissons descendue sur terre pour féliciter les paysans zoulous."
            ],
            correctAnswerIndex: 1,
            explanation: "La Voix Blanche est le procureur du monde blanc et l'écho de la propre conscience de Chaka, l'obligeant à dépasser le lyrisme pour justifier sa politique."
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // POINT 5 : Lecture méthodique : L'immolation de l'amour au nom du salut collectif (Axe 2)
    // ------------------------------------------------------------------------
    {
      id: "terminale_francais_gt_l02_chaka_heros_epique_p05",
      order: 5,
      title: "Lecture méthodique de « Chaka » : Figures de style et engagement politique (Axe 2)",
      summary: "Vérification de l'Axe 2 : métaphores filées magnifiant Nolivé, types de phrases (exclamation passionnée et déclarations inébranlables), et sacrifice du poète pour l'homme d'action.",
      conceptExplanation: "Le second axe de lecture méthodique porte sur la justification politique du forfait : comment l'assassinat de la fiancée devient, sous la plume de Senghor, l'acte fondateur du salut collectif.\n\n1. Entrée 1 : Les figures de style (les métaphores filées élogieuses) :\nChaka compose un hymne d'adoration poétique à Nolivé : « négresse blonde d'huile de palme », « cuisse de neige du Kilimandjaro », « seins de rizières mûres ». Nolivé n'est pas un être ordinaire : elle symbolise la beauté radieuse et féconde de la terre africaine. Mais sa beauté agissait comme un baume anesthésiant face au danger mortel qui menaçait la patrie.\n\n2. Entrée 2 : Les types de phrases (la dialectique de la passion et de la volonté) :\n- Les phrases exclamatives passionnées (« Ah ! Tu crois que je ne l'ai pas aimée ! ») expriment la révolte contre le soupçon d'insensibilité.\n- Les phrases déclaratives apodictiques (« Il fallait échapper au doute », « Pour l'amour de mon peuple noir ») posent la suprématie absolue du devoir civique.\n\n3. L'affrontement avec la modernité coloniale :\nL'ennemi arrive armé de « règles, équerres, compas, sextants » (la rationalité froide et le calcul géométrique prédateur) et du « tonnerre sur leurs navires » (les canons). Face à cette invasion technique, le poète contemplatif devait mourir : Chaka devient « une tête un bras sans tremblement », un pur homme d'action seul face à l'orage.",
      keyRule: "Pour Senghor, le sacrifice de Nolivé n'est pas un crime passionnel : c'est l'immolation symbolique de la jouissance et de la poésie insouciante, rendue obligatoire par la violence de la conquête coloniale.",
      formulas: [],
      workedExample: {
        title: "Analyser les métaphores des instruments coloniaux",
        statement: "Analysez l'énumération des outils des Blancs rapportée par les courriers : « des règles, des équerres des compas des sextants ».",
        methodSteps: [
          "Relevé : Énumération d'instruments de mesure géométrique et de navigation.",
          "Analyse : Termes techniques désignant la géométrie, le calcul mathématique et le quadrillage de l'espace.",
          "Interprétation : L'Occident conquérant ne vient pas en poète, mais en comptable armé qui vient borner, mesurer, découper et s'approprier les terres africaines."
        ],
        conclusion: "Ces instruments métaphorisent la colonisation comme une mécanique froide de prédation rationnelle contre laquelle la simple beauté poétique ne peut rien."
      },
      exercises: [
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q1",
            type: "mcq",
            prompt: "Dans le tableau officiel de lecture méthodique, quelle interprétation littéraire découle directement de la métaphore filée magnifiant le corps de Nolivé à travers les rizières et les neiges du Kilimandjaro ?",
            options: [
              "Nolivé représentait un idéal de beauté et de plénitude africaine, dont la séduction risquait de détourner le chef de son impératif de combat militaire.",
              "Nolivé souffrait d'un rhume aigu contracté en haute montagne pendant l'hiver austral.",
              "Chaka cherchait à vendre des terres agricoles au pied du Kilimandjaro aux marchands anglais.",
              "Le dramaturge voulait prouver que l'Afrique australe possède le même climat que la Norvège."
            ],
            correctAnswerIndex: 0,
            explanation: "En idéalisant Nolivé comme la terre nourricière même, Chaka prouve qu'elle était l'obstacle le plus tentant : s'abandonner à son amour signifiait renoncer à la guerre de libération."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q2",
            type: "mcq",
            prompt: "En quoi la métaphore de « l'ivresse du lait de sa bouche » éclaire-t-elle le dilemme politique de Chaka face à l'invasion imminente ?",
            options: [
              "Elle décrit une fête paysanne où le vin de palme coulait à flots dans le village.",
              "Elle montre que la tendresse de Nolivé agissait comme un philtre anesthésiant qui risquait d'endormir la vigilance du chef d'État.",
              "Elle indique que Nolivé exerçait le métier de marchande de laitue sur le marché de Durban.",
              "Elle prouve que Chaka ne s'intéressait qu'aux questions de nutrition enfantine."
            ],
            correctAnswerIndex: 1,
            explanation: "L'ivresse amoureuse endort la détermination : pour affronter l'envahisseur impitoyable, le chef ne pouvait se permettre aucune faiblesse de cœur."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q3",
            type: "mcq",
            prompt: "Quelle valeur argumentative l'exclamation répétée « Ah ! Tu crois que je ne l'ai pas aimée ! » apporte-t-elle à la plaidoirie de Chaka ?",
            options: [
              "Elle témoigne de son amnésie complète quant aux événements de la veille.",
              "Elle traduit l'indignation véhémente du héros qui repousse le mépris de l'adversaire et rétablit la vérité de son déchirement intérieur.",
              "Elle montre qu'il s'adresse à un public sourd qui ne comprend pas la langue zouloue.",
              "Elle annonce une scène comique de réconciliation amoureuse sur scène."
            ],
            correctAnswerIndex: 1,
            explanation: "L'exclamation est un cri du cœur : Chaka récuse avec force l'accusation d'insensibilité que La Voix Blanche tente de lui coller."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q4",
            type: "mcq",
            prompt: "Dans le traitement officiel de la situation d'évaluation, qu'exprime la succession des phrases déclaratives catégoriques dans la bouche de Chaka ?",
            options: [
              "L'hésitation d'un jeune homme immature qui ne sait quelle décision prendre.",
              "L'inflexible certitude morale d'un dirigeant guidé par la conviction que le salut de son peuple passe avant tout bonheur individuel.",
              "La récitation machinale d'un poème appris par cœur sans conviction politique.",
              "L'ordre donné à ses troupes de déposer les armes devant l'escadre étrangère."
            ],
            correctAnswerIndex: 1,
            explanation: "Les phrases déclaratives traduisent l'autorité inébranlable : Chaka a tranché dans sa propre chair parce que la patrie exigeait un bras sans tremblement."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q5",
            type: "mcq",
            prompt: "Que symbolise la mention conjointe des « règles, des équerres des compas des sextants » et du « tonnerre sur leurs navires » dans le portrait des colonisateurs ?",
            options: [
              "Une mission scientifique humanitaire venue enseigner les mathématiques récréatives aux enfants zoulous.",
              "L'alliance terrifiante de la froide rationalité technique et de la puissance de feu militaire venue asservir le continent africain.",
              "L'ouverture d'un chantier de construction navale pacifique sur la côte du Natal.",
              "Une expédition de pêcheurs égarés cherchant leur chemin à l'aide d'instruments défectueux."
            ],
            correctAnswerIndex: 1,
            explanation: "Ces vers résument le colonialisme moderne : la mesure mathématique au service de la spoliation territoriale, garantie par la supériorité des armes à feu."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q6",
            type: "mcq",
            prompt: "Quelle signification philosophique profonde revêt la déclaration de Chaka « je tuais le poète - un homme d'action seul » ?",
            options: [
              "Qu'il a interdit par décret royal la récitation de poésies pendant les jours de fête.",
              "Qu'il a dû immoler sa sensibilité d'artiste et son humanité intime pour assumer la solitude implacable de la responsabilité militaire.",
              "Qu'il a fait emprisonner tous les écrivains de son royaume pour éviter les critiques politiques.",
              "Qu'il préférait les traités d'économie rurale aux fables traditionnelles de la savane."
            ],
            correctAnswerIndex: 1,
            explanation: "Tuer le poète en soi, c'est anéantir la douceur et la rêverie pour endosser la cuirasse impitoyable de l'homme d'action d'État."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q7",
            type: "mcq",
            prompt: "Dans le bilan de la lecture méthodique, comment s'interprète la polysémie du mot « passion » dans le vers final « Qui saura ma passion ? » ?",
            options: [
              "Un passe-temps de loisir auquel Chaka s'adonnait pendant ses heures de repos.",
              "La fusion tragique d'un amour fou pour sa bien-aimée et d'un calvaire de sacrifice rédempteur enduré pour l'émancipation de sa nation.",
              "Une crise de colère passagère oubliée dès le lendemain matin.",
              "Un recueil de chants militaires appris lors de son initiation zouloue."
            ],
            correctAnswerIndex: 1,
            explanation: "La passion récapitule tout : l'amour dévorant pour Nolivé et le chemin de croix politique d'un dirigeant qui sacrifie son âme pour sauver son peuple."
          }
      ],
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: "definition",
          stepTitle: "Axe 2 : Entrée 1 – Les métaphores filées du portrait de Nolivé",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "Métaphores filées",
          paragraphText: "La première entrée officielle de l'Axe 2 scrute les figures de style, dominées par la métaphore filée qui peint Nolivé. Senghor puise dans les éléments les plus nobles de la géographie africaine : « Ma négresse blonde d'huile de palme à la taille de plume / Cuisse de loutre en surprise et de neige du Kilimandjaro / Seins de rizières mûres et de collines d'acacias sous le Vent d'Est ». Nolivé est transfigurée en allégorie de la Mère Afrique, nourricière, immaculée et souveraine.",
          visualSchema: {
            type: "custom_svg",
            title: "Tableau officiel de lecture méthodique – Axe 2 (Document officiel Éducation Nationale)",
            tableData: {
              headers: ["Entrées d'analyse", "Relevés textuels précis", "Analyses stylistiques & grammaticales", "Interprétations du sens profond"],
              rows: [
              ["Les figures de style", "« Ma négresse blonde d'huile de palme à la taille de plume / Cuisse de loutre en surprise et de neige du Kilimandjaro / Seins de rizières mûres et de collines d'acacias... »", "Métaphores filées élogieuses empruntées aux éléments géographiques et naturels d'Afrique", "Chaka magnifie Nolivé qui était d'une beauté incomparable. Mais cette passion absorbante était un frein à l'accomplissement de sa mission libératrice à l'égard de son peuple."],
              ["Les types de phrases", "P1 : « Ah ! Tu crois que je ne l'ai pas aimée ? » / P2 : « Je ne l'aurais pas tuée si moins aimée » / P3 : « Il fallait échapper au doute »", "Alternance entre phrase exclamative véhémente et phrases déclaratives assertives péremptoires", "Chaka récuse l'accusation de cynisme : il explique son forfait par l'amour infini pour sa fiancée, dépassé par l'impératif sacré du salut de son peuple noir."]
            ]
            }
          },
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q1",
            type: "mcq",
            prompt: "Dans le tableau officiel de lecture méthodique, quelle interprétation littéraire découle directement de la métaphore filée magnifiant le corps de Nolivé à travers les rizières et les neiges du Kilimandjaro ?",
            options: [
              "Nolivé représentait un idéal de beauté et de plénitude africaine, dont la séduction risquait de détourner le chef de son impératif de combat militaire.",
              "Nolivé souffrait d'un rhume aigu contracté en haute montagne pendant l'hiver austral.",
              "Chaka cherchait à vendre des terres agricoles au pied du Kilimandjaro aux marchands anglais.",
              "Le dramaturge voulait prouver que l'Afrique australe possède le même climat que la Norvège."
            ],
            correctAnswerIndex: 0,
            explanation: "En idéalisant Nolivé comme la terre nourricière même, Chaka prouve qu'elle était l'obstacle le plus tentant : s'abandonner à son amour signifiait renoncer à la guerre de libération."
          }
        },
        {
          stepNumber: 2,
          stepKind: "propriete",
          stepTitle: "Axe 2 : Nolivé, entrave sublime à la guerre de libération",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "L'amour sacrificiel",
          paragraphText: "Pourquoi Chaka devait-il s'arracher à Nolivé ? Le texte l'avoue avec franchise : « Il fallait échapper au doute / À l'ivresse du lait de sa bouche, au tam-tam lancinant de la nuit de mon sang ». Dans la cosmogonie tragique de Senghor, le bonheur conjugal est un refuge paisible, mais ce refuge devient une complicité coupable lorsque la patrie est menacée d'asservissement. Pour vaincre un ennemi d'acier, Chaka devait transformer son âme en forteresse imprenable sans aucune faille affective.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q2",
            type: "mcq",
            prompt: "En quoi la métaphore de « l'ivresse du lait de sa bouche » éclaire-t-elle le dilemme politique de Chaka face à l'invasion imminente ?",
            options: [
              "Elle décrit une fête paysanne où le vin de palme coulait à flots dans le village.",
              "Elle montre que la tendresse de Nolivé agissait comme un philtre anesthésiant qui risquait d'endormir la vigilance du chef d'État.",
              "Elle indique que Nolivé exerçait le métier de marchande de laitue sur le marché de Durban.",
              "Elle prouve que Chaka ne s'intéressait qu'aux questions de nutrition enfantine."
            ],
            correctAnswerIndex: 1,
            explanation: "L'ivresse amoureuse endort la détermination : pour affronter l'envahisseur impitoyable, le chef ne pouvait se permettre aucune faiblesse de cœur."
          }
        },
        {
          stepNumber: 3,
          stepKind: "methode",
          stepTitle: "Axe 2 : Entrée 2 – Les types de phrases : L'exclamation passionnée",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "Phrase exclamative",
          paragraphText: "La seconde entrée officielle examine les types de phrases. Le plaidoyer de Chaka s'ouvre par une phrase exclamative ardente répétée en anaphore : « Ah ! Tu crois que je ne l'ai pas aimée ! » L'interjection initiale « Ah ! », la structure interrogativo-exclamative et la négation polémique expriment l'indignation révoltée d'un homme calomnié. Il refuse catégoriquement qu'on le prenne pour un boucher ou un ambitieux froid qui aurait tué par indifférence.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q3",
            type: "mcq",
            prompt: "Quelle valeur argumentative l'exclamation répétée « Ah ! Tu crois que je ne l'ai pas aimée ! » apporte-t-elle à la plaidoirie de Chaka ?",
            options: [
              "Elle témoigne de son amnésie complète quant aux événements de la veille.",
              "Elle traduit l'indignation véhémente du héros qui repousse le mépris de l'adversaire et rétablit la vérité de son déchirement intérieur.",
              "Elle montre qu'il s'adresse à un public sourd qui ne comprend pas la langue zouloue.",
              "Elle annonce une scène comique de réconciliation amoureuse sur scène."
            ],
            correctAnswerIndex: 1,
            explanation: "L'exclamation est un cri du cœur : Chaka récuse avec force l'accusation d'insensibilité que La Voix Blanche tente de lui coller."
          }
        },
        {
          stepNumber: 4,
          stepKind: "propriete",
          stepTitle: "Axe 2 : Les phrases déclaratives : La rigueur du devoir politique",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "Phrases déclaratives",
          paragraphText: "Aux exclamations passionnées succèdent des phrases déclaratives d'une implacable concision : « Il fallait échapper au doute », « Pour l'amour de mon peuple noir », « Je devins une tête un bras sans tremblement ». Ces déclarations nettes incarnent la parole d'autorité du chef d'État. Le verbe d'obligation impersonnelle « il fallait » consacre le triomphe de la nécessité historique sur les inclinations individuelles : l'intérêt suprême de la nation commande sans appel.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q4",
            type: "mcq",
            prompt: "Dans le traitement officiel de la situation d'évaluation, qu'exprime la succession des phrases déclaratives catégoriques dans la bouche de Chaka ?",
            options: [
              "L'hésitation d'un jeune homme immature qui ne sait quelle décision prendre.",
              "L'inflexible certitude morale d'un dirigeant guidé par la conviction que le salut de son peuple passe avant tout bonheur individuel.",
              "La récitation machinale d'un poème appris par cœur sans conviction politique.",
              "L'ordre donné à ses troupes de déposer les armes devant l'escadre étrangère."
            ],
            correctAnswerIndex: 1,
            explanation: "Les phrases déclaratives traduisent l'autorité inébranlable : Chaka a tranché dans sa propre chair parce que la patrie exigeait un bras sans tremblement."
          }
        },
        {
          stepNumber: 5,
          stepKind: "definition",
          stepTitle: "L'invasion coloniale : Les instruments de la dépossession",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "Règles, compas & canons",
          paragraphText: "Chaka fonde sa décision sur les rapports terrifiants de ses éclaireurs : « Ils débarquent avec des règles, des équerres des compas des sextants / l'épiderme blanc les yeux clairs, la parole nue et la bouche mince / le tonnerre sur leurs navires ». Senghor caractérise l'impérialisme occidental par une synecdoque géniale : l'Occident n'arrive pas avec des chants ou des alliances, mais avec des outils de géométrie pour arpenter, diviser, privatiser la terre et avec l'artillerie (« le tonnerre ») pour écraser toute contestation.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q5",
            type: "mcq",
            prompt: "Que symbolise la mention conjointe des « règles, des équerres des compas des sextants » et du « tonnerre sur leurs navires » dans le portrait des colonisateurs ?",
            options: [
              "Une mission scientifique humanitaire venue enseigner les mathématiques récréatives aux enfants zoulous.",
              "L'alliance terrifiante de la froide rationalité technique et de la puissance de feu militaire venue asservir le continent africain.",
              "L'ouverture d'un chantier de construction navale pacifique sur la côte du Natal.",
              "Une expédition de pêcheurs égarés cherchant leur chemin à l'aide d'instruments défectueux."
            ],
            correctAnswerIndex: 1,
            explanation: "Ces vers résument le colonialisme moderne : la mesure mathématique au service de la spoliation territoriale, garantie par la supériorité des armes à feu."
          }
        },
        {
          stepNumber: 6,
          stepKind: "propriete",
          stepTitle: "« Tuer le poète » pour devenir l'homme d'action seul",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "Tuer le poète",
          paragraphText: "Face à cette machine de guerre impériale, Chaka accomplit sa mue tragique : « Un politique tu l'as dit - je tuais le poète - un homme d'action seul / Un homme seul et déjà mort avant les autres, comme ceux que tu plains ». Le poète était en lui l'être de la sensibilité, de la contemplation, des caresses et du verbe. Mais devant le péril mortel de l'asservissement, les poèmes ne suffisent plus : il fallait un stratège d'acier. Chaka a donc assassiné sa part poétique pour devenir le bouclier politique de son peuple.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q6",
            type: "mcq",
            prompt: "Quelle signification philosophique profonde revêt la déclaration de Chaka « je tuais le poète - un homme d'action seul » ?",
            options: [
              "Qu'il a interdit par décret royal la récitation de poésies pendant les jours de fête.",
              "Qu'il a dû immoler sa sensibilité d'artiste et son humanité intime pour assumer la solitude implacable de la responsabilité militaire.",
              "Qu'il a fait emprisonner tous les écrivains de son royaume pour éviter les critiques politiques.",
              "Qu'il préférait les traités d'économie rurale aux fables traditionnelles de la savane."
            ],
            correctAnswerIndex: 1,
            explanation: "Tuer le poète en soi, c'est anéantir la douceur et la rêverie pour endosser la cuirasse impitoyable de l'homme d'action d'État."
          }
        },
        {
          stepNumber: 7,
          stepKind: "piege",
          stepTitle: "Le double sens de la « passion » et le bilan d'évaluation",
          stepTheme: "Axe 2 : Justification politique",
          stepBadge: "La passion du héros",
          paragraphText: "L'extrait se clôt sur une interrogation pathétique adressée à la postérité : « Qui saura ma passion ? » Ce mot passion concentre deux sens majeurs : 1) La passion amoureuse incandescente qui liait Chaka à Nolivé et dont il porte le deuil éternel ; 2) La passion au sens étymologique (du latin « passio », souffrance) et biblique : le calvaire d'un rédempteur solitaire qui accepte d'être haï et damné pour que son peuple vive libre.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p05_q7",
            type: "mcq",
            prompt: "Dans le bilan de la lecture méthodique, comment s'interprète la polysémie du mot « passion » dans le vers final « Qui saura ma passion ? » ?",
            options: [
              "Un passe-temps de loisir auquel Chaka s'adonnait pendant ses heures de repos.",
              "La fusion tragique d'un amour fou pour sa bien-aimée et d'un calvaire de sacrifice rédempteur enduré pour l'émancipation de sa nation.",
              "Une crise de colère passagère oubliée dès le lendemain matin.",
              "Un recueil de chants militaires appris lors de son initiation zouloue."
            ],
            correctAnswerIndex: 1,
            explanation: "La passion récapitule tout : l'amour dévorant pour Nolivé et le chemin de croix politique d'un dirigeant qui sacrifie son âme pour sauver son peuple."
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // POINT 6 : Bilan et conclusion du groupement : Les valeurs du héros épique africain
    // ------------------------------------------------------------------------
    {
      id: "terminale_francais_gt_l02_chaka_heros_epique_p06",
      order: 6,
      title: "Bilan du groupement : Vertus cardinales du héros épique africain",
      summary: "Patriotisme, bravoure, sacrifice de soi, dignité, réalité historique des héros africains et passage du relais des griots aux écrivains contemporains.",
      conceptExplanation: "La séance conclusive (Séance N°10) tire le bilan littéraire, civique et philosophique du groupement de textes théâtraux.\n\n1. Les quatre vertus cardinales du héros épique africain :\n- Le Patriotisme : amour inconditionnel de la patrie et de la communauté, primant sur la famille, les biens matériels et les sentiments amoureux.\n- La Bravoure : intrépidité guerrière et fermeté d'âme face à un adversaire supérieur en armement technique.\n- Le Sacrifice de soi : acceptation volontaire de la mort, de la solitude morale et de l'incompréhension publique si le salut de la nation l'exige.\n- La Dignité : refus intransigeant de la vassalisation, de l'asservissement et de l'humiliation coloniale.\n\n2. Des personnages réels de l'histoire africaine :\nContrairement aux héros de la mythologie grecque (nés d'un dieu et d'une mortelle), les figures du théâtre africain (Chaka, Samory, Soundjata, Abla Pokou, Béatrice) ont réellement existé. Le théâtre sublime leur combat historique sans en déformer l'ancrage réel.\n\n3. Le passage du relais : Des griots aux écrivains modernes :\nAutrefois, la mémoire de ces hauts faits était l'apanage des griots et traditionalistes dépositaires de l'oralité. Aujourd'hui, les écrivains et dramaturges africains (Senghor, Dadié, Césaire, Niane) prennent la plume pour immortaliser ces épopées par l'écrit et les offrir en modèles d'émancipation aux générations futures.",
      keyRule: "L'étude du héros épique en terminale n'est pas un vain culte du passé : c'est une école de citoyenneté qui arme la jeunesse de courage, de lucidité et de fierté pour relever les défis de l'Afrique contemporaine.",
      formulas: [],
      workedExample: {
        title: "Synthèse des valeurs héroïques dans une dissertation",
        statement: "Dans une dissertation littéraire sur le théâtre historique africain, quelle thèse majeure doit-on développer à propos de la transmission mémorielle ?",
        methodSteps: [
          "Thèse : Le passage de la voix à l'écrit ne trahit pas la tradition, il la pérennise et l'universalise.",
          "Arguments : Les griots faisaient vivre l'épopée au sein du village ; les dramaturges modernes portent le combat africain sur la scène internationale.",
          "Exemples : Senghor immortalisant Chaka, Dadié réhabilitant Béatrice du Congo, Djibril Tamsir Niane transcrivant Soundjata."
        ],
        conclusion: "L'écriture théâtrale moderne prolonge le bâton de parole des ancêtres pour forger la conscience des citoyens de l'Afrique moderne."
      },
      exercises: [
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q1",
            type: "mcq",
            prompt: "Selon les conclusions officielles du groupement de textes théâtraux (Séance N°10), comment se définit le patriotisme du héros africain dans le théâtre historique ?",
            options: [
              "Un discours flatteur prononcé pour séduire les électeurs lors d'un scrutin municipal.",
              "Le sacrifice conscient de son repos, de ses biens et de son bonheur pour défendre la terre natale contre l'envahisseur et l'oppresseur.",
              "La recherche effrénée de distinctions honorifiques dans les cours étrangères.",
              "L'exil définitif à l'étranger pour ne pas avoir à souffrir des guerres locales."
            ],
            correctAnswerIndex: 1,
            explanation: "Le patriotisme authentique du héros se prouve par le don total de soi pour la liberté de la terre des ancêtres face à l'oppression."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q2",
            type: "mcq",
            prompt: "Dans les textes théâtraux consacrés aux résistances africaines, qu'est-ce qui confère à la bravoure des héros sa grandeur tragique universelle ?",
            options: [
              "Le fait qu'ils disposaient toujours d'un armement dix fois supérieur à celui de leurs ennemis.",
              "Leur volonté héroïque de tenir tête à des envahisseurs technologiquement surarmés pour sauvegarder l'honneur de leur peuple.",
              "Leur habitude de négocier la vente de leurs propres soldats pour s'enrichir.",
              "Leur refus d'entrer sur le champ de bataille sans la garantie d'une victoire immédiate."
            ],
            correctAnswerIndex: 1,
            explanation: "La bravoure tragique éclate lorsque le héros, conscient de la disproportion des forces, refuse la soumission et choisit le combat pour l'honneur."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q3",
            type: "mcq",
            prompt: "Quelle différence éthique fondamentale la dramaturgie africaine établit-elle entre un despote sanguinaire et un héros épique comme Chaka ?",
            options: [
              "Le despote massacre les autres pour son intérêt personnel, tandis que le héros s'immole d'abord lui-même et sacrifie son âme pour la liberté des siens.",
              "Le despote est toujours analphabète tandis que le héros épique possède des diplômes universitaires européens.",
              "Le héros épique refuse de porter des armes alors que le despote adore les uniformes dorés.",
              "Il n'existe rigoureusement aucune différence entre un héros de tragédie et un criminel de droit commun."
            ],
            correctAnswerIndex: 0,
            explanation: "L'abnégation est la pierre de touche : le héros porte le fardeau de la douleur et s'immole moralement pour sa communauté, à l'inverse du tyran égoïste."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q4",
            type: "mcq",
            prompt: "Dans les scènes d'affrontement verbal avec les émissaires coloniaux, quelle attitude des héros du théâtre africain incarne par excellence la dignité ?",
            options: [
              "Leur empressement à signer des traités de protectorat en échange de colliers de verroterie.",
              "Leur refus hautain et serein de toute subordination, préférant la mort héroïque à une paix infamante dans la sujétion.",
              "Leur fuite désordonnée dans les marécages à la première vue d'un uniforme étranger.",
              "Leur supplication adressée aux commandants ennemis pour obtenir des postes dans l'administration coloniale."
            ],
            correctAnswerIndex: 1,
            explanation: "La dignité est l'intransigeance morale : refuser de marchander la liberté de son peuple et préférer la tragédie du combat à la paix honteuse."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q5",
            type: "mcq",
            prompt: "Pourquoi est-il crucial, dans la formation de l'élève de terminale, de rappeler que les figures comme Chaka, Samory ou Abla Pokou ont réellement existé dans l'histoire de l'Afrique ?",
            options: [
              "Pour obliger les élèves à apprendre par cœur les dates de naissance de tous leurs cousins éloignés.",
              "Pour enraciner la fierté civique dans des faits historiques avérés et détruire définitivement l'illusion d'une Afrique sans passé ni bâtisseurs.",
              "Pour démontrer que la poésie dramatique ne doit contenir aucun mot inventé.",
              "Pour interdire aux écrivains d'utiliser des figures de style dans leurs créations."
            ],
            correctAnswerIndex: 1,
            explanation: "Savoir que ces héros ont réellement foulé la terre d'Afrique prouve que le continent a toujours produit des géants politiques et militaires capables de modeler l'Histoire."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q6",
            type: "mcq",
            prompt: "Dans le texte de conclusion de la Séance N°10, quel rôle historique l'École Numérique de Côte d'Ivoire assigne-t-elle aux écrivains africains contemporains par rapport aux griots d'autrefois ?",
            options: [
              "Faire disparaître les traditions orales pour que personne ne se souvienne des anciens récits.",
              "Prendre le relais des griots et de la tradition orale en fixant par l'écrit et le théâtre les exploits des héros pour les transmettre au monde entier.",
              "Traduire mot à mot les manuels militaires européens sans s'intéresser aux souverains africains.",
              "Interdire aux musiciens traditionnels de jouer de la kôra lors des cérémonies villageoises."
            ],
            correctAnswerIndex: 1,
            explanation: "L'écrivain moderne est le griot de son siècle : il prend le relais de la voix vive pour inscrire les héros d'Afrique dans le patrimoine littéraire mondial."
          },
        {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q7",
            type: "mcq",
            prompt: "Quelle est la conclusion morale et citoyenne ultime à laquelle aboutit l'étude du groupement de textes théâtraux pour un élève de terminale ?",
            options: [
              "Que les querelles du passé doivent être oubliées pour ne plus jamais s'intéresser à l'histoire de son continent.",
              "Que les vertus de dignité, de sacrifice civique et de bravoure léguées par les héros historiques constituent des modèles vivants pour relever les défis de l'Afrique d'aujourd'hui.",
              "Que le théâtre est un art dangereux qu'il convient de réserver exclusivement aux historiens de musée.",
              "Que l'on peut réussir sa vie en fuyant toute forme d'engagement pour sa communauté."
            ],
            correctAnswerIndex: 1,
            explanation: "La conclusion du groupement fait des héros d'hier les maîtres d'énergie d'aujourd'hui : ils enseignent le courage, l'abnégation et la dignité nécessaires à la jeunesse."
          }
      ],
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: "definition",
          stepTitle: "Le patriotisme : Le dévouement absolu à la patrie",
          stepTheme: "Les Vertus héroïques",
          stepBadge: "Le Patriotisme",
          paragraphText: "Le patriotisme est le moteur absolu du héros épique africain. Ce patriotisme ne se réduit pas à une adhésion passive : il est une ferveur sacrée qui exige la primauté absolue de la souveraineté collective sur toutes les affections personnelles. Chez Chaka, chez Samory ou chez la Reine Pokou, chaque geste militaire ou diplomatique est ordonné à un impératif unique : empêcher que la terre ancestrale ne soit souillée par le joug de l'oppresseur étranger.",
          visualSchema: {
            type: "custom_svg",
            title: "Synthèse officielle des valeurs cardinales du héros épique africain (Séance N°10)",
            tableData: {
              headers: ["Vertu cardinale", "Définition éthique", "Manifestation dans le texte de Senghor", "Portée pour la jeunesse africaine"],
              rows: [
              ["Le patriotisme", "Dévouement total et inconditionnel à la liberté de sa nation", "« Pour l'amour de mon peuple noir » ; lutte contre les vaisseaux coloniaux", "L'engagement civique et l'amour actif du développement de son pays"],
              ["La bravoure", "Intrépidité face au péril et courage militaire sans faille", "« Je devins une tête un bras sans tremblement » face au tonnerre des armes", "La fermeté morale face aux épreuves et aux injustices du monde"],
              ["Le sacrifice de soi", "Abnégation totale immolant son bonheur personnel pour les siens", "Immolation volontaire de Nolivé : « Un homme seul et déjà mort avant les autres »", "Le sens du bien commun supérieur à l'égoïsme individuel"],
              ["La dignité", "Refus viscéral de la capitulation, du mépris et de la servitude", "Rejet de la provocation de La Voix Blanche et affirmation de sa grandeur", "La fierté de ses racines et l'exigence d'un respect égalitaire entre les peuples"]
            ]
            }
          },
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q1",
            type: "mcq",
            prompt: "Selon les conclusions officielles du groupement de textes théâtraux (Séance N°10), comment se définit le patriotisme du héros africain dans le théâtre historique ?",
            options: [
              "Un discours flatteur prononcé pour séduire les électeurs lors d'un scrutin municipal.",
              "Le sacrifice conscient de son repos, de ses biens et de son bonheur pour défendre la terre natale contre l'envahisseur et l'oppresseur.",
              "La recherche effrénée de distinctions honorifiques dans les cours étrangères.",
              "L'exil définitif à l'étranger pour ne pas avoir à souffrir des guerres locales."
            ],
            correctAnswerIndex: 1,
            explanation: "Le patriotisme authentique du héros se prouve par le don total de soi pour la liberté de la terre des ancêtres face à l'oppression."
          }
        },
        {
          stepNumber: 2,
          stepKind: "propriete",
          stepTitle: "La bravoure guerrière face à l'inégalité des armes",
          stepTheme: "Les Vertus héroïques",
          stepBadge: "La Bravoure",
          paragraphText: "La bravoure du héros épique africain brille d'un éclat particulier parce qu'elle s'exerce souvent dans des conditions d'inégalité matérielle tragique. Chaka affronte des armes à feu inconnues (« le tonnerre sur leurs navires ») avec l'organisation et la vaillance de ses régiments d'impis. Samory résiste pendant des lustres à une armée coloniale moderne. La bravoure n'est pas une témérité insensée : elle est la maîtrise de la peur et la résolution inébranlable de mourir debout plutôt que de vivre à genoux.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q2",
            type: "mcq",
            prompt: "Dans les textes théâtraux consacrés aux résistances africaines, qu'est-ce qui confère à la bravoure des héros sa grandeur tragique universelle ?",
            options: [
              "Le fait qu'ils disposaient toujours d'un armement dix fois supérieur à celui de leurs ennemis.",
              "Leur volonté héroïque de tenir tête à des envahisseurs technologiquement surarmés pour sauvegarder l'honneur de leur peuple.",
              "Leur habitude de négocier la vente de leurs propres soldats pour s'enrichir.",
              "Leur refus d'entrer sur le champ de bataille sans la garantie d'une victoire immédiate."
            ],
            correctAnswerIndex: 1,
            explanation: "La bravoure tragique éclate lorsque le héros, conscient de la disproportion des forces, refuse la soumission et choisit le combat pour l'honneur."
          }
        },
        {
          stepNumber: 3,
          stepKind: "methode",
          stepTitle: "Le sacrifice de soi et l'abnégation absolue",
          stepTheme: "Les Vertus héroïques",
          stepBadge: "Le Sacrifice de soi",
          paragraphText: "Le sacrifice de soi sépare le héros épique de l'ambitieux politique ordinaire. Alors que le tyran sacrifie le peuple à ses caprices, le héros épique africain commence par se sacrifier lui-même. Chaka se définit comme « un homme seul et déjà mort avant les autres ». Il sait que son geste sera incompris, qu'il sera calomnié de son vivant et voué à la solitude morale, mais il accepte ce calvaire parce que seule l'abnégation absolue d'un guide peut souder une nation menacée de mort.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q3",
            type: "mcq",
            prompt: "Quelle différence éthique fondamentale la dramaturgie africaine établit-elle entre un despote sanguinaire et un héros épique comme Chaka ?",
            options: [
              "Le despote massacre les autres pour son intérêt personnel, tandis que le héros s'immole d'abord lui-même et sacrifie son âme pour la liberté des siens.",
              "Le despote est toujours analphabète tandis que le héros épique possède des diplômes universitaires européens.",
              "Le héros épique refuse de porter des armes alors que le despote adore les uniformes dorés.",
              "Il n'existe rigoureusement aucune différence entre un héros de tragédie et un criminel de droit commun."
            ],
            correctAnswerIndex: 0,
            explanation: "L'abnégation est la pierre de touche : le héros porte le fardeau de la douleur et s'immole moralement pour sa communauté, à l'inverse du tyran égoïste."
          }
        },
        {
          stepNumber: 4,
          stepKind: "propriete",
          stepTitle: "La dignité inaltérable face à l'oppression",
          stepTheme: "Les Vertus héroïques",
          stepBadge: "La Dignité",
          paragraphText: "La dignité est la boussole morale indéracinable de ces figures historiques. Devant les propositions de compromission, de corruption ou de protectorat déguisé, le héros épique oppose un refus intransigeant. Même acculé, vaincu ou blessé à mort, il ne courbe jamais l'échine devant l'envahisseur. Dans le théâtre de Senghor comme dans celui de Dadié ou de Césaire, la dignité humaine réhabilitée vaut infiniment plus qu'une survie biologique dans la honte de l'esclavage.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q4",
            type: "mcq",
            prompt: "Dans les scènes d'affrontement verbal avec les émissaires coloniaux, quelle attitude des héros du théâtre africain incarne par excellence la dignité ?",
            options: [
              "Leur empressement à signer des traités de protectorat en échange de colliers de verroterie.",
              "Leur refus hautain et serein de toute subordination, préférant la mort héroïque à une paix infamante dans la sujétion.",
              "Leur fuite désordonnée dans les marécages à la première vue d'un uniforme étranger.",
              "Leur supplication adressée aux commandants ennemis pour obtenir des postes dans l'administration coloniale."
            ],
            correctAnswerIndex: 1,
            explanation: "La dignité est l'intransigeance morale : refuser de marchander la liberté de son peuple et préférer la tragédie du combat à la paix honteuse."
          }
        },
        {
          stepNumber: 5,
          stepKind: "definition",
          stepTitle: "Des personnages de chair ayant réellement existé",
          stepTheme: "Vérité historique",
          stepBadge: "Personnages réels",
          paragraphText: "La conclusion officielle du groupement (Séance N°10) insiste avec force sur ce point capital : ces héros du théâtre africain ne sont pas des fables mythologiques forgées par l'imagination, mais des hommes et des femmes réels de l'Histoire d'Afrique. Chaka Zulu a gouverné, guerroyé et unifié les peuples d'Afrique australe ; la reine Pokou a conduit l'exode des Baoulé ; Samory a édifié le puissant empire wassoulou. L'art théâtral ne ment pas : il prend appui sur le roc du réel pour élever l'Histoire à la hauteur du mythe exemplaire.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q5",
            type: "mcq",
            prompt: "Pourquoi est-il crucial, dans la formation de l'élève de terminale, de rappeler que les figures comme Chaka, Samory ou Abla Pokou ont réellement existé dans l'histoire de l'Afrique ?",
            options: [
              "Pour obliger les élèves à apprendre par cœur les dates de naissance de tous leurs cousins éloignés.",
              "Pour enraciner la fierté civique dans des faits historiques avérés et détruire définitivement l'illusion d'une Afrique sans passé ni bâtisseurs.",
              "Pour démontrer que la poésie dramatique ne doit contenir aucun mot inventé.",
              "Pour interdire aux écrivains d'utiliser des figures de style dans leurs créations."
            ],
            correctAnswerIndex: 1,
            explanation: "Savoir que ces héros ont réellement foulé la terre d'Afrique prouve que le continent a toujours produit des géants politiques et militaires capables de modeler l'Histoire."
          }
        },
        {
          stepNumber: 6,
          stepKind: "propriete",
          stepTitle: "Le passage du relais : Des griots aux écrivains contemporains",
          stepTheme: "Transmission mémorielle",
          stepBadge: "Griots & Écrivains",
          paragraphText: "Le document officiel de l'École Numérique formule une analyse magistrale sur l'évolution de la mémoire africaine : « Si autrefois, leurs exploits étaient racontés par les griots ou autres tenants de la tradition orale, de nos jours ce sont plutôt les écrivains et les artistes qui en sont le relais ». La littérature moderne ne tue pas la parole ancestrale : elle s'en fait l'héritière légitime. Les dramaturges et poètes transposent le chant du griot dans l'espace universel du livre et de la scène pour que la mémoire africaine demeure impérissable.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q6",
            type: "mcq",
            prompt: "Dans le texte de conclusion de la Séance N°10, quel rôle historique l'École Numérique de Côte d'Ivoire assigne-t-elle aux écrivains africains contemporains par rapport aux griots d'autrefois ?",
            options: [
              "Faire disparaître les traditions orales pour que personne ne se souvienne des anciens récits.",
              "Prendre le relais des griots et de la tradition orale en fixant par l'écrit et le théâtre les exploits des héros pour les transmettre au monde entier.",
              "Traduire mot à mot les manuels militaires européens sans s'intéresser aux souverains africains.",
              "Interdire aux musiciens traditionnels de jouer de la kôra lors des cérémonies villageoises."
            ],
            correctAnswerIndex: 1,
            explanation: "L'écrivain moderne est le griot de son siècle : il prend le relais de la voix vive pour inscrire les héros d'Afrique dans le patrimoine littéraire mondial."
          }
        },
        {
          stepNumber: 7,
          stepKind: "piege",
          stepTitle: "Des modèles impérissables pour les générations futures",
          stepTheme: "Portée civique",
          stepBadge: "Modèles d'émancipation",
          paragraphText: "La visée terminale du groupement de textes théâtraux est éminemment pédagogique et politique. En faisant revivre Chaka de Senghor, Béatrice du Congo de Dadié ou le roi Christophe de Césaire, l'école ivoirienne transmet à la jeunesse des boussoles pour le présent. Le héros épique enseigne que la dignité ne se marchande pas, que l'indépendance exige des sacrifices et que chaque citoyen doit être prêt à servir sa nation avec désintéressement. L'épopée d'hier devient le levier de la renaissance africaine de demain.",
          exercise: {
            id: "terminale_francais_gt_l02_chaka_heros_epique_p06_q7",
            type: "mcq",
            prompt: "Quelle est la conclusion morale et citoyenne ultime à laquelle aboutit l'étude du groupement de textes théâtraux pour un élève de terminale ?",
            options: [
              "Que les querelles du passé doivent être oubliées pour ne plus jamais s'intéresser à l'histoire de son continent.",
              "Que les vertus de dignité, de sacrifice civique et de bravoure léguées par les héros historiques constituent des modèles vivants pour relever les défis de l'Afrique d'aujourd'hui.",
              "Que le théâtre est un art dangereux qu'il convient de réserver exclusivement aux historiens de musée.",
              "Que l'on peut réussir sa vie en fuyant toute forme d'engagement pour sa communauté."
            ],
            correctAnswerIndex: 1,
            explanation: "La conclusion du groupement fait des héros d'hier les maîtres d'énergie d'aujourd'hui : ils enseignent le courage, l'abnégation et la dignité nécessaires à la jeunesse."
          }
        }
      ]
    }
  ]
};
