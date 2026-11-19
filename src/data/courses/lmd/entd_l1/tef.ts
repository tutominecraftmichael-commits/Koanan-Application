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

export const TEF_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'lmd_entd_l1_tef_ch1',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Maîtrise de la langue : Participe passé, Sémantique, Ponctuation et Connecteurs logiques (S1)',
    summary:
      'Maîtriser les règles d’accord du participe passé (être, avoir, cas particuliers, verbes pronominaux), les outils de la sémantique et des questions de vocabulaire, la valeur des 10 signes de ponctuation et les nuances des connecteurs logiques.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source:
      'ESATIC ENTD L1 — TEF S1 (Accord du PP, La Sémantique, Ponctuation, Les Connecteurs Logiques, Questions de Vocabulaire)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_tef_ch1_p1',
        order: 1,
        title: 'L’accord du participe passé (employé seul, être, avoir et verbes pronominaux)',
        summary:
          'Appliquer rigoureusement les règles générales et les cas particuliers d’accord du participe passé en français universitaire.',
        conceptExplanation:
          "L'accord du participe passé dépend de son emploi (seul ou avec auxiliaire), de la nature et de la place du complément, ainsi que de la fonction du pronom réfléchi pour les verbes pronominaux.\n\n1. Formation : 1er groupe en -é (mangé), 2e groupe en -i (fini), 3e groupe en -u, -it, -uit, -is, -i, -int, -ert (rendu, écrit, construit, pris, nui, peint, couvert).\n2. Employé seul : il fonctionne comme un adjectif qualificatif et s'accorde en genre et en nombre avec le nom dont il dépend (« Fatigué, l'enfant se couche près de son frère déjà endormi »).\n3. Avec l'auxiliaire « être » : il s'accorde en genre et en nombre avec le sujet (« La côte est battue par les vagues » ; sujets de genres différents -> masculin pluriel : « La table et le fauteuil ont été tachés d'encre »).\n4. Avec l'auxiliaire « avoir » : il s'accorde avec le C.O.D. uniquement si celui-ci est placé AVANT le verbe (« La chanson qu'elle a composée »). Il reste invariable sans C.O.D., si le C.O.D. est placé après, ou dans les cas particuliers :\n- C.O.D. = pronom neutre « le/l' » représentant une proposition (« je l'avais espéré ») ou pronom adverbial « en » (« j'en ai mangé »).\n- Verbes impersonnels (« Les efforts qu'il a fallu ») et semi-auxiliaires (« les cassettes que j'ai pu trouver »).\n- Verbes intransitifs au sens propre (coûter, peser, valoir, vivre, courir : « La somme qu'a coûté ce processus ») mais accord au sens figuré (« Les efforts qu'a coûtés cet examen »).\n- Suivi d'un infinitif complément d'objet (« La pièce que j'ai vu jouer »).\n5. Verbes pronominaux : accord avec le sujet pour les verbes essentiellement pronominaux ou de sens passif (« la piscine s'est vidée », « ils se sont aperçus »), sauf exceptions invariables (se plaire, se complaire, se rire de, se jouer de, se rendre compte, se nuire : « Elle s'est plu », « Ils se sont ri »). Pour les verbes réfléchis/réciproques, accord avec le C.O.D. placé avant (« Elles se sont rencontrées »), mais PAS d'accord si « se » est C.O.I./C.O.S. (« Ils se sont lavé les mains »).",
        keyRule:
          'Avec « avoir » : accord avec le COD placé AVANT (sauf « en », « le » neutre, impersonnels). Avec un verbe pronominal réfléchi : vérifier si « se » est COD (accord) ou COI/COS (invariable).',
        formulas: [
          {
            name: 'Test rapide des verbes pronominaux réfléchis',
            formula: 'Remplacer « être » par « avoir » -> « Ils ont lavé quoi ? les mains (COD après) ; à qui ? à eux (COS) » => « Ils se sont lavé les mains »',
          },
        ],
        workedExample: {
          title: 'Justifier l’accord de trois participes passés délicats',
          statement:
            'Accorder correctement : (1) « Les efforts qu’a coût… cet examen » ; (2) « Elle s’est pl… dans cette ville » ; (3) « Elles se sont lav… les mains ».',
          methodSteps: [
            '(1) « Coûter » est ici au sens figuré (= exiger des efforts) : « que » (les efforts) est COD placé avant -> « coûtés ».',
            '(2) « Se plaire » fait partie des verbes pronominaux dont le participe passé est toujours invariable -> « plu ».',
            '(3) « Elles ont lavé quoi ? les mains (COD après) ; à qui ? à elles (se = COS) » -> pas d’accord : « lavé ».',
          ],
          conclusion:
            'On écrit : « coûtés », « plu » et « lavé ».',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Auxiliaire avoir',
            stepTheme: 'Règle générale',
            stepTitle: 'Repérer la présence et la position du C.O.D.',
            paragraphText:
              'Conjugué avec « avoir », le participe passé s’accorde en genre et en nombre avec le C.O.D. uniquement quand celui-ci est placé avant le verbe. Si le verbe n’a pas de C.O.D. (seulement un C.O.I. ou un C.C.) ou si le C.O.D. est après, il reste invariable.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle phrase présente une orthographe parfaitement correcte du participe passé avec « avoir » ?',
              options: [
                'Ils ont répondus vite à votre lettre.',
                'Quelles chansons a-t-il composées ?',
                'Nous avons mangés des fruits mûrs.',
                'La chanson qu’elle a composé est célèbre.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans « Quelles chansons a-t-il composées ? », le C.O.D. « Quelles chansons » (féminin pluriel) est placé avant le verbe, d’où l’accord « composées ».',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Cas « en » et « le »',
            stepTheme: 'Exceptions avoir',
            stepTitle: 'Maintenir invariable avec « en » et le pronom neutre « le »',
            paragraphText:
              'Lorsque le C.O.D. antéposé est le pronom adverbial « en » (« J’ai cueilli des fraises et j’en ai mangé ») ou le pronom neutre « le / l’ » reprenant une proposition entière (« je l’avais espéré »), le participe passé reste invariable.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Complétez correctement : « Elle devait me rembourser aujourd’hui : du moins, je l’avais ___ ; quant aux fraises, j’en ai ___. »',
              options: [
                'espérée / mangées',
                'espérés / mangée',
                'espéré / mangé',
                'espérée / mangé',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« l’ » est un pronom neutre reprenant la proposition entière et « en » est un pronom adverbial : dans les deux cas, le participe passé reste invariable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Coûter / Peser / Valoir',
            stepTheme: 'Sens propre vs figuré',
            stepTitle: 'Distinguer sens propre (invariable) et sens figuré (accord)',
            paragraphText:
              'Les verbes coûter, peser, valoir, vivre et courir sont intransitifs au sens propre (ils prennent un complément circonstanciel de mesure/prix, donc pas d’accord : « la somme qu’a coûté ce processus »), mais transitifs au sens figuré (« les efforts qu’a coûtés cet examen »).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Pourquoi écrit-on « Les efforts qu’a coûtés cet examen » avec un « s » mais « La somme qu’a coûté ce processus » sans « e » ?',
              options: [
                'Parce que « coûter » au sens figuré (= exiger) admet un vrai C.O.D., contrairement au sens propre (prix)',
                'Parce que « somme » est un nom masculin en grammaire',
                'Parce que le participe passé de « coûter » ne prend jamais de « e »',
                'Parce que « cet examen » est au pluriel',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Au sens propre (mesure ou prix), « coûter » est intransitif (invariable) ; au sens figuré (causer, exiger), il devient transitif direct et s’accorde avec le C.O.D. antéposé.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Verbes pronominaux',
            stepTheme: 'Réfléchis & Réciproques',
            stepTitle: 'Analyser la fonction de « se » dans les pronominaux',
            paragraphText:
              'Dans un verbe pronominal réfléchi ou réciproque, on accorde si le pronom est C.O.D. (« Elles se sont rencontrées » = elles ont rencontré elles), mais pas s’il est C.O.I./C.O.S. (« Ils se sont lavé les mains » = ils ont lavé les mains à eux).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans laquelle de ces phrases le participe passé d’un verbe pronominal est-il correctement accordé ?',
              options: [
                'Ils se sont lavés les mains avant de déjeuner.',
                'Elles se sont téléphonées toute la soirée.',
                'Elle s’est plue dans cette ville dès le premier jour.',
                'Elles se sont rencontrées devant l’amphithéâtre.',
              ],
              correctAnswerIndex: 3,
              explanation:
                '« Rencontrer quelqu’un » est transitif direct : « se » est C.O.D. antéposé -> « rencontrées ». En revanche, on écrit « lavé les mains » (se = COS), « téléphoné » (téléphoner à = COI) et « plu » (exception invariable).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Exceptions & Impersonnels',
            stepTheme: 'Invariabilité',
            stepTitle: 'Mémoriser les exceptions invariables',
            paragraphText:
              'Restent toujours invariables : les verbes impersonnels (« les efforts qu’il a fallu »), les semi-auxiliaires (« les cassettes que j’ai pu trouver »), et les pronominaux comme se plaire, se complaire, se rire de, se nuire, se rendre compte.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle phrase respecte la règle des verbes impersonnels et pronominaux invariables ?',
              options: [
                'Les chaleurs qu’il a faites cet été étaient intenses.',
                'Ils se sont ri de nos avertissements et les efforts qu’il a fallu ont été immenses.',
                'Ils se sont ris de nous pendant toute la réunion.',
                'Voici toutes les cassettes que j’ai pues trouver.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Se rire de » est une exception invariable (« ils se sont ri ») et « falloir » est un verbe impersonnel toujours invariable (« qu’il a fallu »).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_tef_ch1_p2',
        order: 2,
        title: 'Sémantique, questions de vocabulaire et valeurs des 10 signes de ponctuation',
        summary:
          'Distinguer champ lexical/sémantique et dénotation/connotation, répondre méthodiquement aux questions de vocabulaire et maîtriser la ponctuation.',
        conceptExplanation:
          "Une expression française rigoureuse repose sur la précision du lexique (Sémantique) et la clarté rythmique et logique de la phrase (Ponctuation).\n\n1. Sémantique :\n- Champ lexical : ensemble de mots ou expressions (même famille, synonymes ou termes associés) se rapportant à un même thème dans un texte (ex. enfant, jouets, école, maman).\n- Champ sémantique : ensemble des différents sens ou cas d'emploi d'un même mot (ex. « enfance » : bas âge, commencement, jeunesse, innocence).\n- Dénotation vs Connotation : la dénotation est le sens étymologique/objectif du dictionnaire (« Le rouge est une couleur primaire ») ; la connotation est le sens second, affectif, culturel ou implicite (le rouge évoque la passion, le danger ou la colère).\n- Relations lexicales : monosémie (un seul sens) vs polysémie (plusieurs sens) ; synonymie, antonymie, homonymie (même forme/prononciation, sens différent) et paronymie (mots de forme proche mais sens distinct, ex. conjoncture/conjecture).\n2. Questions de vocabulaire (1er exercice de la contraction de texte) : identifier d'abord la nature grammaticale du mot (définir un nom par un nom, un adjectif par un adjectif), donner le sens général, puis préciser la nuance exacte en contexte dans une phrase bien construite.\n3. La ponctuation (10 signes) : virgule (,), point-virgule (;), deux-points (:), point (.), point d'interrogation (?), point d'exclamation (!), guillemets (« »), tirets (-), points de suspension (…), parenthèses (). Le point-virgule sépare deux propositions unies par un lien logique (ou quand la seconde débute par un adverbe) ; les deux-points annoncent des paroles, une énumération ou une explication/conclusion.",
        keyRule:
          'Champ lexical = plusieurs mots autour d’un thème ; Champ sémantique = plusieurs sens d’un même mot. En vocabulaire, toujours respecter la classe grammaticale du mot défini.',
        workedExample: {
          title: 'Traiter une question de vocabulaire et justifier un signe de ponctuation',
          statement:
            'Expliquer en contexte l’adjectif « fécond » dans « un dialogue fécond » et justifier l’usage des deux-points dans « On entendait des bruits étranges : c’était le vent qui soulevait les tuiles. »',
          methodSteps: [
            'Nature grammaticale : « fécond » est un adjectif qualificatif -> le définir par un adjectif (et non un nom).',
            'Sens général (dénoté) : fertile, capable de produire beaucoup. Sens contextuel (connoté/figuré) : un dialogue riche, constructif, qui engendre des idées et des solutions utiles.',
            'Ponctuation : dans la phrase citée, les deux-points introduisent une explication (la cause des bruits étranges).',
          ],
          conclusion:
            'La réponse respecte la classe grammaticale, passe du sens général au contexte, et identifie précisément la valeur logique du signe.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Lexical vs Sémantique',
            stepTheme: 'Sémantique',
            stepTitle: 'Ne pas confondre champ lexical et champ sémantique',
            paragraphText:
              'Le champ lexical rassemble tous les mots différents d’un texte liés à un même thème (ex. enfant, école, jouets, enfantin). Le champ sémantique désigne les différents sens que peut prendre un seul et même mot (ex. enfance = bas âge, début, innocence).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle notion désigne l’ensemble des différents sens ou emplois possibles d’un MÊME mot selon les contextes ?',
              options: [
                'Le champ lexical',
                'La paronymie',
                'Le champ sémantique',
                'L’apostrophe',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le champ sémantique recouvre toutes les significations d’un même mot, tandis que le champ lexical réunit des mots variés autour d’un même thème.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Dénotation / Connotation',
            stepTheme: 'Sens des mots',
            stepTitle: 'Distinguer le sens dénoté du sens connoté',
            paragraphText:
              'La dénotation est le sens objectif, neutre et premier donné par le dictionnaire (identique pour tous). La connotation correspond aux valeurs secondes, affectives, culturelles ou symboliques que le mot suggère.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Dans la phrase « Le rouge est une couleur primaire », quel type de sens du mot « rouge » est mobilisé ?',
              options: [
                'Le sens dénoté (objectif et neutre du dictionnaire)',
                'Le sens connoté (affectif et symbolique)',
                'Une antiphrase ironique',
                'Un paronyme',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La définition objective « couleur primaire » relève de la dénotation (contrairement aux connotations de passion, colère ou interdiction).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Vocabulaire',
            stepTheme: 'Méthodologie',
            stepTitle: 'Répondre avec rigueur à une question de vocabulaire',
            paragraphText:
              'Pour réussir la question de vocabulaire en contraction de texte : (1) repérer la nature grammaticale du mot afin de le définir par un terme de même nature ; (2) donner son sens général ; (3) l’expliquer précisément dans le contexte du texte.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Lorsqu’une question de vocabulaire demande de définir un adjectif qualificatif extrait d’un texte, quelle règle méthodologique faut-il impérativement respecter ?',
              options: [
                'Donner uniquement un verbe conjugué à l’imparfait',
                'Définir l’adjectif par un autre adjectif (ou expression équivalente) puis préciser sa nuance dans le contexte du texte',
                'Recopier intégralement le paragraphe sans rien expliquer',
                'Donner le contraire du mot uniquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le respect de la classe grammaticale (nom -> nom, adjectif -> adjectif) suivi de la mise en contexte est la règle d’or du cours de TEF.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Point-virgule & Deux-points',
            stepTheme: 'Ponctuation',
            stepTitle: 'Maîtriser les valeurs du point-virgule et des deux-points',
            paragraphText:
              'Le point-virgule (;) marque une pause intermédiaire entre deux propositions unies par un lien logique (ou quand la seconde débute par un adverbe comme « heureusement »). Les deux-points (:) introduisent des paroles, une énumération ou une explication/conclusion.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Dans « Sa voiture est tombée en panne ; heureusement un mécanicien passait par là », pourquoi le point-virgule est-il particulièrement justifié ?',
              options: [
                'Parce qu’il introduit une question directe',
                'Parce qu’il remplace obligatoirement des guillemets',
                'Parce qu’il marque la fin absolue d’un paragraphe',
                'Parce qu’il sépare deux propositions liées par le sens dont la seconde commence par un adverbe',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le point-virgule relie deux propositions logiquement unies et s’emploie notamment devant un adverbe ouvrant la seconde proposition.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Virgule',
            stepTheme: 'Ponctuation',
            stepTitle: 'Identifier les fonctions syntaxiques de la virgule',
            paragraphText:
              'La virgule (,) sépare les termes d’une énumération, encadre une incise (« dit ce peuple »), isole une apposition ou une apostrophe (« Pierre, écoute-moi ! »), sépare des propositions non coordonnées ou détache une explication concernant le sujet.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Dans « Donnez-moi, dit ce peuple, un roi qui se remue », quelle fonction remplissent les deux virgules ?',
              options: [
                'Elles encadrent une proposition incise',
                'Elles introduisent une énumération de couleurs',
                'Elles marquent une interrogation directe',
                'Elles séparent le sujet de son verbe sans incise',
              ],
              correctAnswerIndex: 0,
              explanation:
                '« dit ce peuple » est une proposition incise insérée au cœur du discours direct, obligatoirement encadrée par deux virgules.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_tef_ch1_p3',
        order: 3,
        title: 'Les connecteurs logiques et les termes d’articulation difficiles',
        summary:
          'Classer les connecteurs par nature et valeur logique, et éviter les confusions classiques (enfin/finalement, par ailleurs/d’ailleurs, en effet/en fait, certes/certainement, au moins/du moins).',
        conceptExplanation:
          "Les connecteurs logiques sont des mots-outils qui constituent le « ciment » du raisonnement et assurent la cohésion du texte argumentatif.\n\n1. Classes grammaticales principales : adverbes/locutions adverbiales (cependant, en effet, du reste), conjonctions de coordination (mais, ou, et, donc, or, ni, car), conjonctions/locutions conjonctives de subordination (parce que, bien que, afin que), ainsi que des prépositions/locutions prépositives (à cause de, malgré).\n2. Deux grands types :\n- Connecteurs de relations logiques fondamentales : cause, conséquence, but, opposition/concession, condition/hypothèse, comparaison.\n- Connecteurs organisationnels (structuration de l'argumentation) : addition, énumération/classement, exemple/illustration, reformulation, alternative, gradation, conclusion.\n3. Les 5 paires de termes d'articulation difficiles à ne jamais confondre :\n- Enfin (clôture d'une énumération = pour finir) ≠ Finalement (en fin de compte, retournement inattendu : « Je croyais avoir raté, mais finalement j'ai réussi »).\n- Par ailleurs (ajoute une idée nouvelle indépendante/neutre = d'autre part) ≠ D'ailleurs (renforce et confirme logiquement l'idée précédente).\n- En effet (explique/confirme = effectivement) ≠ En fait (introduit une nuance d'opposition = en réalité).\n- Certainement (sûrement) ≠ Certes (il est vrai que, suivi d'une concession avec « mais »).\n- Au moins (concret = au minimum) ≠ Du moins (restriction/nuance : « du moins je l'espère »).",
        keyRule:
          'Ne jamais confondre : En effet (confirme/explique) ≠ En fait (corrige/oppose) ; D’ailleurs (renforce l’idée précédente) ≠ Par ailleurs (introduit un autre point).',
        workedExample: {
          title: 'Choisir le terme d’articulation juste dans trois phrases',
          statement:
            'Compléter avec le bon connecteur : (1) « D’abord les sacs, ensuite les chaussures et ___ les robes » ; (2) « Il aime le riz ; c’est ___ normal puisqu’il vient d’une famille de riziculteurs » ; (3) « ___, les travaux ont été longs, mais le résultat en valait la peine. »',
          methodSteps: [
            '(1) Clôture simple d’une énumération -> « enfin » (et non finalement).',
            '(2) L’idée confirme et renforce logiquement ce qui précède -> « d’ailleurs » (et non par ailleurs).',
            '(3) Concession annoncée avant « mais » -> « Certes » (et non Certainement).',
          ],
          conclusion:
            'Les choix exacts sont : (1) enfin, (2) d’ailleurs, (3) Certes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Classes & Types',
            stepTheme: 'Connecteurs',
            stepTitle: 'Identifier la nature et la fonction des connecteurs logiques',
            paragraphText:
              'Les connecteurs appartiennent surtout aux adverbes/locutions adverbiales, aux conjonctions de coordination et de subordination. Ils expriment soit des relations logiques (cause, conséquence, but, opposition, condition), soit l’organisation du discours (addition, classement, illustration, conclusion).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle série ne contient QUE des conjonctions de coordination ?',
              options: [
                'parce que, bien que, afin que, puisque',
                'mais, ou, et, donc, or, ni, car',
                'cependant, soudain, toutefois, ailleurs',
                'malgré, grâce à, à cause de, sans',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Mais, ou, et, donc, or, ni, car » sont les sept conjonctions de coordination du français.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Enfin vs Finalement',
            stepTheme: 'Nuances',
            stepTitle: 'Opposer la fin d’une liste au retournement de situation',
            paragraphText:
              '« Enfin » clôt une énumération (D’abord…, ensuite…, enfin…). « Finalement » signifie « en fin de compte » et souligne souvent une issue inattendue ou un revirement par rapport à ce qu’on pensait au départ.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Quel connecteur convient le mieux dans : « Je croyais avoir raté mon examen, mais ___ je l’ai réussi » ?',
              options: ['enfin', 'par ailleurs', 'finalement', 'au moins'],
              correctAnswerIndex: 2,
              explanation:
                '« Finalement » traduit un retournement de situation auquel on ne s’attendait pas au départ (« en fin de compte »).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Par ailleurs vs D’ailleurs',
            stepTheme: 'Nuances',
            stepTitle: 'Distinguer l’ajout indépendant du renforcement logique',
            paragraphText:
              '« Par ailleurs » introduit une information nouvelle, neutre, sans lien causal direct (= d’autre part). « D’ailleurs » a un lien logique étroit avec la phrase précédente qu’il vient appuyer ou confirmer.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Complétez : « Je vais au marché ; ___ je passerai à la librairie pour les fournitures de mes enfants. »',
              options: [
                'par ailleurs',
                'en effet',
                'certes',
                'du moins',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Il s’agit d’une seconde démarche indépendante qui s’ajoute à la première (= d’autre part) : on emploie « par ailleurs ».',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'En effet vs En fait',
            stepTheme: 'Nuances',
            stepTitle: 'Ne pas confondre explication et rectification',
            paragraphText:
              '« En effet » (= effectivement) explique, justifie ou développe ce qui vient d’être affirmé (répond à « pourquoi ? »). « En fait » (= en réalité) introduit une opposition, une rectification ou un démenti.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans « Vous avez demandé un renforcement ? ___, nous n’avons pas eu le temps d’aborder ce sujet », quel connecteur marque la rectification/opposition ?',
              options: [
                'En effet',
                'D’ailleurs',
                'Certainement',
                'En fait',
              ],
              correctAnswerIndex: 3,
              explanation:
                '« En fait » (= en réalité) introduit une nuance d’opposition par rapport à ce qui était supposé, contrairement à « en effet » qui confirme.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Certes / Au moins',
            stepTheme: 'Nuances',
            stepTitle: 'Maîtriser Certes vs Certainement et Au moins vs Du moins',
            paragraphText:
              '« Certes » concède un point avant une opposition (« Certes…, mais… »), alors que « certainement » signifie « sûrement ». « Au moins » indique un minimum concret ; « du moins » exprime une restriction ou réserve (« du moins je l’espère »).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Dans « Je vais pouvoir m’acheter un nouvel ordinateur, ___ je l’espère », quel terme d’articulation exprime correctement la restriction ?',
              options: [
                'au moins',
                'du moins',
                'certes',
                'enfin',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Du moins » introduit une restriction ou une prudence dans l’affirmation, tandis qu’« au moins » exprime un minimum quantitatif ou concret.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_tef_ch2',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Méthodologie des exercices écrits : Résumé de texte et Dissertation d’ordre général (S1–S2)',
    summary:
      'Maîtriser les 4 étapes, la présentation et le décompte des mots du résumé de texte, ainsi que la méthodologie complète de la dissertation d’ordre général (analyse du sujet, structure et plans).',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Cours Résumé de Texte L1 (S1) et Cours TEF S2 (Méthodologie de la Dissertation)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_tef_ch2_p1',
        order: 1,
        title: 'Le résumé de texte : compréhension, sélection et reformulation fidèle',
        summary:
          'Appliquer les quatre étapes du résumé, distinguer l’essentiel de l’accessoire et s’identifier à l’auteur sans le commenter.',
        conceptExplanation:
          "Le résumé de texte consiste à condenser un document pour en retenir les idées essentielles et les transmettre fidèlement à un lecteur qui n'a pas lu l'original.\n\n1. Les 4 étapes méthodologiques :\n- Compréhension du texte : lectures multiples, lexique en contexte, thème, idée générale/message, thèse(s), visée argumentative, découpage en séquences argumentatives.\n- Choix des éléments essentiels : conserver les arguments majeurs qui portent le message et éliminer les idées secondaires, répétitions, comparaisons, citations, digressions et exemples purement illustratifs (tout en observant les deux-points et points-virgules qui articulent des idées).\n- Reformulation personnelle : exprimer les idées avec ses propres mots sans déformer le sens (phrases simples, nominalisation, remplacement d'une relative par un adjectif, terme générique pour une énumération).\n- Rédaction : suivre strictement le plan et les liens logiques de l'auteur (car, donc, mais, cependant), garder les mêmes temps verbaux et s'identifier totalement à l'auteur (jamais « l'auteur dit que… », « affirme que… », aucun jugement ni ajout personnel).",
        keyRule:
          'Dans un résumé, vous ÊTES l’auteur : suivre son ordre, ses liens logiques et ses temps, reformuler avec vos propres mots et proscrire « l’auteur dit que… ».',
        workedExample: {
          title: 'Condenser et reformuler une phrase argumentative',
          statement:
            'Texte initial : « Les étudiants utilisent de plus en plus les téléphones portables, les tablettes tactiles et les ordinateurs portables en amphithéâtre, ce qui, selon moi, distrait souvent leur attention. »',
          methodSteps: [
            'Remplacer l’énumération (« téléphones portables, tablettes tactiles et ordinateurs portables ») par un terme générique englobant : « les terminaux numériques » (ou « les écrans »).',
            'Éliminer les lourdeurs tout en gardant le point de vue de l’auteur (sans écrire « L’auteur pense que… »).',
            'Formuler une phrase courte et nette : « L’usage croissant des écrans en cours disperse l’attention des étudiants. »',
          ],
          conclusion:
            'La phrase passe de 30 mots à 12 mots tout en préservant exactement l’idée et la posture de l’auteur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Les 4 étapes',
            stepTheme: 'Processus',
            stepTitle: 'Suivre les quatre étapes officielles du résumé de texte',
            paragraphText:
              'La méthode du résumé en Licence 1 obéit à quatre étapes indissociables : (1) compréhension du texte, (2) choix des éléments essentiels, (3) reformulation des éléments sélectionnés, (4) rédaction du résumé.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Dans quel ordre logique s’enchaînent les quatre étapes méthodologiques du résumé de texte ?',
              options: [
                'Rédaction -> Compréhension -> Reformulation -> Choix des idées',
                'Compréhension -> Choix des éléments essentiels -> Reformulation -> Rédaction',
                'Reformulation -> Compte des mots -> Citation des exemples -> Compréhension',
                'Choix des citations -> Avis personnel -> Plan inventé -> Conclusion',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On comprend d’abord le texte dans sa globalité, on sélectionne les idées majeures, on les reformule fidèlement, puis on rédige le texte final.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Sélection',
            stepTheme: 'Tri des idées',
            stepTitle: 'Écarter les éléments accessoires du texte source',
            paragraphText:
              'Pour réduire efficacement un texte sans trahir son message, on supprime les répétitions d’insistance, les exemples purement illustratifs, les citations décoratives, les comparaisons longues et les digressions.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants d’un texte argumentatif, lequel doit généralement être supprimé lors du choix des éléments essentiels d’un résumé ?',
              options: [
                'La thèse centrale défendue par l’auteur',
                'Les articulations logiques principales du raisonnement',
                'Les digressions, répétitions d’insistance et exemples purement illustratifs',
                'L’idée générale qui structure la conclusion',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le résumé conserve l’ossature argumentative (thèse, arguments essentiels, liens logiques) et élimine tout ce qui n’est qu’illustration, redite ou digression.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Énonciation',
            stepTheme: 'Posture de l’auteur',
            stepTitle: 'S’identifier à l’auteur sans jamais le commenter',
            paragraphText:
              'Le candidat doit parler au nom de l’auteur, sans ajout ni jugement. Les formules de mise à distance comme « L’auteur dit que… », « Dans ce texte, l’écrivain affirme que… » sont strictement interdites.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle formulation est STRICTEMENT INTERDITE dans un résumé de texte universitaire ?',
              options: [
                '« L’auteur affirme avec raison dans son deuxième paragraphe que le numérique transforme l’école. »',
                '« Le numérique transforme profondément l’école. »',
                '« Toutefois, cette mutation exige un accompagnement pédagogique. »',
                '« L’éducation doit donc intégrer ces nouveaux outils. »',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Il est interdit d’écrire « L’auteur affirme que… » et encore plus de porter un jugement personnel (« avec raison »). Il faut endosser directement la voix de l’auteur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Reformulation',
            stepTheme: 'Condensation',
            stepTitle: 'Utiliser la nominalisation et les termes génériques',
            paragraphText:
              'Reformuler consiste à exprimer les idées dans une langue personnelle et concise : remplacer une subordonnée relative par un adjectif, une proposition par un nom (nominalisation), et une longue énumération par un mot englobant (hyperonyme).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle technique de reformulation permet de condenser efficacement une longue énumération (ex. « les mangues, les oranges, les bananes et les ananas ») ?',
              options: [
                'Recopier toute l’énumération entre parenthèses',
                'Ajouter « etc. » à la fin de la liste recopiée',
                'Supprimer toute la phrase même si l’idée est essentielle',
                'Remplacer l’énumération par un terme générique englobant (ex. « les fruits »)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un terme générique (hyperonyme) conserve l’idée complète en un seul mot tout en évitant le « etc. » interdit dans un résumé.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Cohérence',
            stepTheme: 'Fidélité au plan',
            stepTitle: 'Respecter l’ordre des idées et les temps verbaux',
            paragraphText:
              'Contrairement à une synthèse de plusieurs documents où l’on invente un plan, le résumé suit fidèlement le cheminement logique et les temps verbaux (présent, passé, futur, conditionnel) choisis par l’auteur.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle règle s’applique au plan et aux temps verbaux lors de la rédaction d’un résumé de texte ?',
              options: [
                'On réorganise librement les idées selon ses préférences et on met tout au passé simple',
                'On suit le plan de l’auteur, ses liens logiques et les temps verbaux qu’il emploie',
                'On commence toujours par la conclusion du texte avant l’introduction',
                'On remplace toutes les phrases par des tirets en style télégraphique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le résumé est un miroir réduit et fidèle : il conserve l’ordre du raisonnement, les rapports logiques et le système temporel du texte source.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_tef_ch2_p2',
        order: 2,
        title: 'Présentation matérielle et décompte rigoureux du volume dans le résumé',
        summary:
          'Respecter les règles de présentation (bloc unique, proscription des parenthèses et abréviations) et calculer exactement le volume et la marge de tolérance de ±10 %.',
        conceptExplanation:
          "En examen de TEF L1, la rigueur matérielle et le respect strict du nombre de mots pèsent lourdement dans le barème.\n\n1. Présentation du résumé :\n- Le résumé se présente en un seul bloc continu (sans sauter de lignes ni multiplier les paragraphes ; tout au plus un retour à la ligne discret sans alinéa marqué pour une grande articulation).\n- Sont strictement interdits : le style télégraphique, les notations schématiques (flèches, tirets de prise de notes), l'emploi des parenthèses, les « etc. » et les points de suspension.\n2. Décompte des mots et respect du volume :\n- Un mot est une unité typographique isolée par deux blancs (espaces).\n- Comptent pour un mot chacun : les mots élidés ou séparés par une apostrophe (ex. « l'homme » = 2 mots : « l' » + « homme »), les chiffres/nombres (ex. « 2026 » = 1 mot), chaque particule, conjonction ou pronom.\n- Les mots composés avec trait d'union suivent la règle typographique (ex. « c'est-à-dire » = 4 unités ; « aujourd'hui » = 1 ou selon la règle de l'apostrophe précisée en cours).\n- La réduction demandée est généralement au quart (1/4) ou au tiers (1/3) du texte initial, avec une marge de tolérance officielle de ±10 % qu'il ne faut jamais dépasser (sous peine de pénalité).",
        keyRule:
          'Volume cible = Volume initial ÷ 4 (ou ÷ 3), avec une marge impérative de ±10 %. Toujours indiquer le nombre exact de mots comptés à la fin du résumé.',
        formulas: [
          {
            name: 'Calcul de la fourchette autorisée (±10 %)',
            formula: 'Fourchette = [ N_cible × 0,90 ; N_cible × 1,10 ]',
            note: 'Exemple : pour un texte de 400 mots résumé au quart -> cible = 100 mots, fourchette = [90 ; 110] mots.',
          },
        ],
        workedExample: {
          title: 'Calculer la fourchette d’un résumé au quart',
          statement:
            'Un texte comporte 480 mots. On demande un résumé au quart avec une marge de tolérance de ±10 %. Quelle fourchette de mots devez-vous respecter ?',
          methodSteps: [
            'Calculer le quart du texte initial : 480 ÷ 4 = 120 mots (cible idéale).',
            'Calculer 10 % de la cible : 120 × 0,10 = 12 mots.',
            'Borne inférieure : 120 − 12 = 108 mots ; Borne supérieure : 120 + 12 = 132 mots.',
          ],
          conclusion:
            'Le résumé doit impérativement compter entre 108 et 132 mots (inclus).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Présentation',
            stepTheme: 'Forme du résumé',
            stepTitle: 'Rédiger un texte continu et soigné',
            paragraphText:
              'Le résumé de texte se présente en un seul bloc rédigé en phrases complètes et claires. Le style télégraphique, les parenthèses, les « etc. » et les points de suspension sont bannis.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Lequel de ces procédés est expressément proscrit dans la présentation d’un résumé de texte ?',
              options: [
                'L’utilisation de phrases courtes et nettes',
                'L’utilisation de connecteurs logiques (donc, cependant, car)',
                'L’emploi du style télégraphique, des parenthèses, des « etc. » et des points de suspension',
                'La mention du nombre de mots en fin de copie',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le résumé doit être un texte entièrement rédigé et fluide, sans notes schématiques, parenthèses, « etc. » ni points de suspension.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Unité typographique',
            stepTheme: 'Décompte des mots',
            stepTitle: 'Compter les mots élidés, apostrophes et nombres',
            paragraphText:
              'Selon la règle du cours, un mot est une unité typographique séparée par des blancs ; les mots élidés avec apostrophe comptent chacun comme un mot distinct (ex. « l’auteur » = 2 mots, « qu’il » = 2 mots), et un nombre en chiffres compte pour 1 mot.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Combien de mots compte le segment « l’école d’aujourd’hui en 2026 » si chaque élément élidé et nombre compte pour une unité ?',
              options: [
                '6 mots (l’ / école / d’ / aujourd’hui / en / 2026) ou 7 si « aujourd’hui » est scindé',
                '2 mots seulement',
                '3 mots seulement',
                '10 mots',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On compte chaque unité typographique : « l’ » (1), « école » (2), « d’ » (3), « aujourd’hui » (4, ou 2 unités si scindé à l’apostrophe), « en » (5), « 2026 » (6).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Marge ±10 %',
            stepTheme: 'Volume cible',
            stepTitle: 'Calculer la fourchette de tolérance de ±10 %',
            paragraphText:
              'Lorsque la consigne fixe un résumé au quart d’un texte de 600 mots, la cible est 150 mots. La marge de tolérance de ±10 % (±15 mots) autorise un résumé compris entre 135 et 165 mots.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un texte fait 600 mots et doit être résumé au quart (±10 %). Quelle est la fourchette exacte de mots autorisée ?',
              options: [
                'Entre 100 et 200 mots',
                'Entre 135 et 165 mots',
                'Entre 140 et 160 mots',
                'Entre 180 et 220 mots',
              ],
              correctAnswerIndex: 1,
              explanation:
                '600 ÷ 4 = 150 mots. 10 % de 150 = 15 mots. Donc la fourchette exacte est [150 − 15 ; 150 + 15] = [135 ; 165] mots.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Estimation rapide',
            stepTheme: 'Méthode d’examen',
            stepTitle: 'Estimer le volume du texte initial s’il n’est pas indiqué',
            paragraphText:
              'Si le sujet ne précise pas le nombre de mots du texte de départ, le cours indique qu’on multiplie le nombre de mots d’une ligne significative (ou la moyenne des 5 premières lignes) par le nombre total de lignes, puis on divise par 4 (au quart) ou par 3 (au tiers).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Comment estimer rapidement le nombre total de mots d’un texte d’examen quand celui-ci n’est pas fourni dans l’énoncé ?',
              options: [
                'Compter uniquement les noms propres et multiplier par 20',
                'Deviner un chiffre au hasard autour de 300 mots',
                'Multiplier le nombre de paragraphes par 100',
                'Calculer le nombre moyen de mots par ligne (sur une ligne significative ou les 5 premières lignes) et le multiplier par le nombre total de lignes',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Multiplier la moyenne de mots par ligne par le nombre total de lignes donne une estimation fiable pour déterminer ensuite le quart ou le tiers.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Pénalité',
            stepTheme: 'Contrôle final',
            stepTitle: 'Ajuster son brouillon avant de recopier au propre',
            paragraphText:
              'Un résumé trop long (hors marge +10 %) ou trop court (hors marge −10 %) entraîne des points de pénalité, et tricher sur le total annoncé aggrave la sanction. Il faut recompter au brouillon et ajuster ses tournures avant la mise au propre.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Votre brouillon compte 178 mots alors que la fourchette autorisée est [135 ; 165] mots. Quelle est la bonne réaction ?',
              options: [
                'Écrire « 162 mots » en bas de la copie en espérant que le correcteur ne recompte pas',
                'Retravailler certaines phrases (nominalisations, suppression de redondances) pour ramener le total dans [135 ; 165] mots',
                'Supprimer brutalement la dernière phrase qui contient la conclusion de l’auteur',
                'Recopier le texte en écriture plus petite pour qu’il paraisse plus court',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On ajuste toujours la formulation pour entrer honnêtement dans la marge sans amputer aucune idée essentielle du texte.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_tef_ch2_p3',
        order: 3,
        title: 'Méthodologie de la dissertation d’ordre général (TEF S2)',
        summary:
          'Analyser l’information et la consigne, structurer l’introduction, le développement et la conclusion, et choisir entre plan dialectique et plan thématique.',
        conceptExplanation:
          "La dissertation d'ordre général (Partie I du cours TEF S2) évalue l'aptitude de l'étudiant à mener une réflexion personnelle argumentée, structurée et rédigée dans une langue claire sur un problème de société ou d'actualité.\n\n1. Analyse du sujet : tout sujet comporte deux parties :\n- L'information : l'énoncé d'un thème ou d'une opinion portant sur un fait de société.\n- La consigne : la phrase (souvent injonctive ou au futur simple) qui pose le problème et oriente le travail demandé (« Discutez », « Montrez comment… »).\n2. Activités préparatoires : identifier le thème, reformuler le sujet, formuler la problématique (question directrice), déterminer les axes d'argumentation et classer les idées et exemples.\n3. Les trois parties du devoir :\n- Introduction (3 étapes obligatoires) : perspective générale (amorce liée au thème) -> citation/rappel du sujet suivi du problème -> annonce du plan.\n- Développement : conforme au plan annoncé ; chaque partie/paragraphe suit la démarche Affirmation (idée directrice) -> Argumentation -> Illustration(s) précise(s), avec des phrases de transition entre les grandes parties.\n- Conclusion : bilan/résumé du développement (reformulé différemment de l'introduction) -> réponse claire à la problématique -> ouverture éventuelle.\n4. Types de plans :\n- Plan dialectique (Thèse / Antithèse / Synthèse) : pour les consignes invitant au débat (« Discuter », « Peut-on dire… ? », « Pensez-vous que… ? », « Critiquer »).\n- Plan thématique (ou analytique) : organise le devoir autour des dimensions du thème pour les consignes d'explication (« Exposer », « Montrer comment », « Quels sont les enjeux… ? », « Justifier »).",
        keyRule:
          'Introduction = Perspective générale + Sujet & Problème + Annonce du plan. Paragraphe de développement = Affirmation + Argumentation + Illustration (+ Transition).',
        workedExample: {
          title: 'Choisir le plan adapté selon la consigne du sujet',
          statement:
            'Déterminer le type de plan exigé pour : Sujet A : « Quels sont les enjeux du numérique dans le domaine de la santé ? » ; Sujet B : « Peut-on dire que les réseaux sociaux renforcent toujours le lien social ? Discutez. »',
          methodSteps: [
            'Sujet A : consigne ouverte de type « Quels sont les enjeux… ? » -> Plan thématique (ex. I. Amélioration du diagnostic et du suivi médical ; II. Optimisation de la gestion hospitalière ; III. Défis éthiques et protection des données).',
            'Sujet B : consigne fermée et polémique (« Peut-on dire… ? Discutez ») -> Plan dialectique (I. Thèse : les réseaux sociaux rapprochent et facilitent les échanges ; II. Antithèse : ils favorisent aussi l’isolement et les conflits ; III. Synthèse/Dépassement : un outil ambivalent dont la valeur dépend de l’usage).',
          ],
          conclusion:
            'La consigne dicte directement le type de plan (dialectique pour un débat, thématique pour une exploration d’enjeux).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Analyse du sujet',
            stepTheme: 'Dissertation',
            stepTitle: 'Distinguer l’information de la consigne dans un sujet',
            paragraphText:
              'Tout sujet de dissertation d’ordre général se compose de deux éléments : l’information (qui présente un thème ou une affirmation sur un fait de société) et la consigne (souvent à l’impératif ou au futur simple, qui précise la tâche exacte à accomplir).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Dans un libellé de dissertation d’ordre général, quel est le rôle spécifique de la « consigne » ?',
              options: [
                'Fournir la liste des fautes d’orthographe à corriger',
                'Poser le problème et orienter précisément la démarche et le type de plan à mettre en œuvre',
                'Remplacer la conclusion du devoir',
                'Indiquer le nombre maximal de mots autorisés au quart',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Alors que l’information pose le thème ou l’affirmation de départ, la consigne oriente la problématique et détermine la nature de la démonstration attendue.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Introduction',
            stepTheme: 'Structure',
            stepTitle: 'Bâtir les trois étapes obligatoires de l’introduction',
            paragraphText:
              'L’introduction de dissertation suit trois étapes rigoureuses : (1) la perspective générale (situer le thème dans un cadre plus large), (2) la citation/insertion du sujet suivie du problème posé, (3) l’annonce du plan.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est l’ordre canonique des trois étapes composant l’introduction d’une dissertation d’ordre général ?',
              options: [
                'Annonce du plan -> Ouverture -> Citation du sujet',
                'Exemples précis -> Conclusion -> Définition du thème',
                'Perspective générale -> Citation du sujet et problème -> Annonce du plan',
                'Thèse -> Antithèse -> Synthèse',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On part toujours du général (amorce) vers le sujet et sa problématique, avant d’annoncer les grandes articulations du développement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Développement',
            stepTheme: 'Paragraphe argumenté',
            stepTitle: 'Structurer chaque paragraphe et soigner les transitions',
            paragraphText:
              'Un paragraphe argumentatif solide s’organise autour d’une unité de sens en trois temps : Affirmation (idée directrice) -> Argumentation (explication logique) -> Illustration (exemple concret précis). Entre deux grandes parties, on rédige une phase de transition.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle trilogie structure efficacement l’intérieur d’un paragraphe argumentatif dans le développement ?',
              options: [
                'Affirmation -> Argumentation -> Illustration(s)',
                'Ouverture -> Bibliographie -> Résumé',
                'Question -> Silence -> Slogan',
                'Exemple isolé -> Digression -> Annonce du plan',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chaque paragraphe affirme une idée, la démontre par un raisonnement logique puis la rend concrète par une illustration pertinente.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Types de plans',
            stepTheme: 'Dialectique vs Thématique',
            stepTitle: 'Sélectionner le plan dialectique ou le plan thématique',
            paragraphText:
              'Le plan dialectique (Thèse / Antithèse / Synthèse) répond aux consignes de discussion ou de critique (« Discuter », « Peut-on dire… ? », « Pensez-vous que… ? »). Le plan thématique organise les aspects d’un sujet pour « Exposer », « Montrer comment », « Étudier les enjeux ».',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Face au sujet « Quels sont les enjeux du numérique dans le domaine de la santé ? », quel type de plan convient le mieux ?',
              options: [
                'Un plan chronologique du Moyen Âge à nos jours uniquement',
                'Un plan sans parties ni transitions',
                'Un résumé au quart du sujet',
                'Un plan thématique organisant les différents axes/enjeux identifiés',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Une consigne interrogeant les enjeux (« Quels sont… », « Montrer comment… ») appelle un plan thématique articulant les différentes dimensions du problème.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Conclusion',
            stepTheme: 'Clôture du devoir',
            stepTitle: 'Réussir le bilan et l’ouverture sans se répéter',
            paragraphText:
              'La conclusion résume les acquis du développement avec une reformulation nouvelle (différente de l’annonce du plan), apporte une réponse nette à la problématique, puis peut proposer une ouverture pertinente vers un débat connexe.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Que doit impérativement faire la conclusion d’une dissertation d’ordre général ?',
              options: [
                'Introduire un tout nouvel argument oublié dans le développement',
                'Dresser un bilan reformulé du développement, répondre clairement à la problématique et éventuellement ouvrir le débat',
                'Recopier mot pour mot l’annonce du plan de l’introduction',
                'Se contenter d’une seule phrase exclamative sans réponse au sujet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La conclusion clôt la réflexion en synthétisant les résultats avec de nouveaux mots, en tranchant la question posée et en élargissant la perspective.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_tef_ch3',
    subjectId: 'lmd_tef',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Expression orale et écrits professionnels : Exposé, Prise de notes et Compte rendu (S2)',
    summary:
      'Préparer et présenter un exposé oral convaincant (voix, posture, gestuelle, mimique), prendre des notes exploitables à l’oral comme à l’écrit et rédiger différents types de comptes rendus.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — TEF S2 (Parties II et III : Exposé oral, Prise de notes, Compte rendu)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_tef_ch3_p1',
        order: 1,
        title: 'Méthodologie et présentation de l’exposé oral (voix et expression corporelle)',
        summary:
          'Structurer un exposé cohérent et exhaustif et maîtriser la posture, la gestuelle, la mimique, le contact visuel et les variations de voix.',
        conceptExplanation:
          "Au-delà de la solidité du contenu (introduction, plan équilibré et conclusion mémorable répondant à la question et élargissant le débat), la réussite d'un exposé oral dépend de la qualité vocale et de l'expression corporelle.\n\n1. Qualités d'un exposé réussi : être audible, clair dans son fond et intelligible dans sa forme (articulation, niveau de langue accessible, respect de la ponctuation), cohérent pour impliquer l'auditoire, et exhaustif sans se limiter à un seul aspect.\n2. La voix : éviter absolument le ton monocorde ; varier les intonations (interrogations, phrases exclamatives), élever la voix ou ralentir le débit sur les idées fortes.\n3. L'expression corporelle :\n- La posture : debout, poids réparti équitablement sur les deux jambes, buste légèrement orienté vers le public (éviter bras croisés sur la poitrine = distant/arrogant, bras dans le dos, menton relevé en arrière = arrogant, abus des mains dans les poches). Assis : colonne vertébrale droite, bras ouverts posés sur la table (éviter de nouer bras ou jambes = défense interne).\n- La gestuelle : partir de la position centrale-neutre (mains au-dessus de la ceinture), mains ouvertes tournées vers l'auditoire (sympathie et ouverture). À éviter : gesticuler avec la feuille (rend nerveux), mains sur les hanches (air présomptueux), pointer l'index (donner une leçon), hausser les épaules ou bouger les jambes de manière comique.\n- La mimique et le contact visuel : afficher un air aimable / léger sourire avant de commencer, adapter l'expression du visage au gravité du propos (un sourire hors de propos paraît cynique), et balayer tout l'auditoire du regard.",
        keyRule:
          'Un bon orateur combine une voix modulée, un regard partagé, une posture ancrée et une gestuelle ouverte partant de la position centrale-neutre (au-dessus de la ceinture).',
        workedExample: {
          title: 'Corriger les défauts non verbaux d’un étudiant en exposé',
          statement:
            'Lors d’une présentation sur l’impact des réseaux sociaux, un étudiant garde les bras croisés sur la poitrine, lit sa feuille d’une voix monotone et pointe son index vers la salle.',
          methodSteps: [
            'Posture : décroiser les bras (perçus comme distants/fermés) et répartir le poids équitablement sur les deux jambes.',
            'Gestuelle : poser la feuille sur le pupitre ou la tenir sobrement sans la secouer ; ramener les mains en position centrale-neutre, paumes ouvertes, et bannir l’index accusateur.',
            'Voix et regard : lever les yeux pour balayer l’auditoire, ralentir le débit et marquer des pauses sur les idées fortes.',
          ],
          conclusion:
            'Le discours gagne immédiatement en crédibilité, en chaleur et en impact persuasif.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Qualités orales',
            stepTheme: 'Voix & Clarté',
            stepTitle: 'Éviter le ton monocorde et moduler le débit',
            paragraphText:
              'Pour maintenir l’attention de l’auditoire, l’orateur articule distinctement, adapte son niveau de langue, respecte les pauses de ponctuation et varie son intonation ainsi que son débit (ralentir ou appuyer la voix sur une idée clé).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle pratique vocale permet de dynamiser efficacement un exposé oral et d’insister sur une idée forte ?',
              options: [
                'Parler sur un ton monocorde très rapide du début à la fin',
                'Varier les formes oratoires (interrogations, exclamations), élever la voix ou ralentir le débit sur les points clés',
                'Chuchoter tout en gardant les yeux collés au sol',
                'Supprimer toute pause entre les différentes parties',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les variations de ton, de rythme et de volume rompent la monotonie et signalent à l’auditoire les idées essentielles à retenir.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Posture debout / assise',
            stepTheme: 'Expression corporelle',
            stepTitle: 'Adopter une posture ouverte et stable',
            paragraphText:
              'Debout, le poids repose équitablement sur les deux jambes. Assis, la colonne reste droite et les bras ouverts sur la table. Croiser les bras sur la poitrine ou nouer bras et jambes traduit une fermeture ou une défense interne.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle impression renvoie un orateur qui croise les bras sur la poitrine ou rejette la tête en arrière (menton vers le haut) ?',
              options: [
                'Une grande bienveillance et une écoute chaleureuse',
                'Une parfaite maîtrise de la gestuelle ouverte',
                'Un air arrogant, distant ou fermé à l’auditoire',
                'Un simple signe de concentration apprécié du jury',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Croiser les bras sur la poitrine donne une impression de distance/arrogance, et relever le menton en arrière renvoie un air hautain.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Gestuelle',
            stepTheme: 'Langage des mains',
            stepTitle: 'Utiliser la position centrale-neutre et les mains ouvertes',
            paragraphText:
              'Le point de départ d’une gestuelle maîtrisée est la position centrale-neutre (mains situées au-dessus de la ceinture). Les mains ouvertes et tournées vers le public expriment l’ouverture et le désir d’échange.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle est la « position centrale-neutre » recommandée comme point de départ d’une bonne gestuelle en exposé ?',
              options: [
                'Les mains situées au-dessus de la ceinture, prêtes à accompagner naturellement le propos',
                'Les mains croisées fermement derrière le dos',
                'Les deux mains posées sur les hanches',
                'Les mains enfoncées au fond des poches',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À partir de la position centrale-neutre (au-dessus de la ceinture), les gestes sont fluides, visibles et naturels.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Gestes parasites',
            stepTheme: 'À proscrire',
            stepTitle: 'Éliminer les gestes qui irritent ou décrédibilisent',
            paragraphText:
              'Le cours met en garde contre quatre gestes précis : gesticuler avec la feuille (nervosité), appuyer les deux mains sur les hanches (présomption), pointer l’index vers l’auditoire (donner une leçon), et solliciter épaules/jambes (effet comique).',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pourquoi est-il fortement déconseillé de pointer l’index vers le public pendant un exposé ?',
              options: [
                'Parce que cela rend la voix inaudible',
                'Parce que cela empêche de tenir un micro',
                'Parce que cela donne un effet comique aux jambes',
                'Parce que l’index pointé est perçu comme un signe agressif donnant une leçon',
              ],
              correctAnswerIndex: 3,
              explanation:
                'On préfère la main ouverte tendue vers l’auditoire : l’index pointé paraît autoritaire et accusateur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Mimique',
            stepTheme: 'Cohérence faciale',
            stepTitle: 'Accorder l’expression du visage au contenu du discours',
            paragraphText:
              'Avant de parler, un air aimable et un léger sourire créent une connivence positive. Tout au long de l’exposé, la mimique doit rester cohérente avec le sujet : un sourire au mauvais moment (sur un fait grave) serait perçu comme du cynisme.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle règle régit l’utilisation consciente de la mimique pendant la présentation d’un exposé ?',
              options: [
                'Garder le visage totalement figé et inexpressif du début à la fin',
                'Sourire légèrement pour ouvrir le contact, puis adapter en permanence l’expression du visage à la teneur du propos',
                'Rire à haute voix entre chaque partie pour détendre la salle',
                'Regarder uniquement son diaporama pour que le public ne voie pas son visage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La congruence entre le visage et le message renforce la sincérité : un sourire inapproprié sur un sujet sérieux paraît cynique.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_tef_ch3_p2',
        order: 2,
        title: 'Les écrits professionnels : Prise de notes et Compte rendu (TEF S2)',
        summary:
          'Appliquer les méthodes de prise de notes (à l’oral et à l’écrit) et rédiger un compte rendu d’activité, d’événement ou de réunion (intégral ou analytique).',
        conceptExplanation:
          "La Partie III du cours de TEF S2 forme les futurs professionnels du numérique à deux outils quotidiens en entreprise : la prise de notes et le compte rendu.\n\n1. La prise de notes :\n- Objectif : dégager le raisonnement général, le plan, les idées directrices et les liens entre idées (une simple juxtaposition sans liens rend les notes inutilisables).\n- À l'oral (cours/conférence) : repérer les titres, définitions capitales, phases d'annonce/transition, variations de ton, répétitions et pauses ; reformuler en une phrase les longs développements.\n- À l'écrit : repérer d'abord les indices typographiques (titres, sous-titres, gras) et ÉVITER de noter au fur et à mesure de la première lecture, car le sens global n'apparaît qu'à la fin.\n- Présentation des notes : écrire uniquement au recto des feuilles, aérer la page avec des marges, retours à la ligne structurés et laisser des blancs pour des ajouts ultérieurs (dans une autre couleur).\n2. Le compte rendu (CR) :\n- Types : CR d'activité/de mission, CR d'événement, CR de réunion.\n- Plan d'un CR d'activité : Titre précis (objet, dates, lieu) -> Texte narratif clair (brève introduction sur les circonstances/motifs, développement chronologique/analytique mentionnant les personnes rencontrées, conclusion résumant les points et éventuellement une appréciation générale SANS formuler de propositions de solutions) -> Lieu et date -> Signature du rédacteur.\n- CR de réunion : soit intégral (style direct, mot à mot des interventions : « Le président : ... »), soit analytique (style indirect synthétique résumant les débats : « Après avoir constaté la présence…, le président déclare… »).",
        keyRule:
          'Le compte rendu relève du style narratif et objectif (sans propositions de solutions, réservées au rapport). En réunion : CR intégral = style direct ; CR analytique = synthèse en style indirect.',
        workedExample: {
          title: 'Distinguer un extrait de CR intégral d’un CR analytique',
          statement:
            'Comparer les deux extraits issus du cours TEF S2 et identifier le type de compte rendu correspondant.',
          methodSteps: [
            'Extrait A : « Le président : le quorum étant atteint, je déclare la séance ouverte et je donne la parole à M. K… » -> Style direct, reproduction mot à mot des interventions = Compte rendu intégral.',
            'Extrait B : « Après avoir constaté la présence de tous les participants invités, le président déclare la séance ouverte… » -> Relation synthétique en style indirect = Compte rendu analytique.',
          ],
          conclusion:
            'Le choix entre intégral et analytique dépend du degré de fidélité littérale exigé par l’instance (assemblée officielle vs réunion de travail).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'Prise de notes écrite',
            stepTheme: 'Méthode',
            stepTitle: 'Pourquoi ne pas prendre de notes dès la première ligne d’un texte',
            paragraphText:
              'À l’écrit, il faut d’abord lire intégralement le document (en repérant titres, intertitres et mots en gras) avant de prendre des notes : le sens global et la hiérarchie des idées n’apparaissent qu’à la fin de la lecture.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Pourquoi le cours déconseille-t-il de souligner et de prendre des notes au fur et à mesure de la première lecture d’un texte ?',
              options: [
                'Parce qu’il est interdit d’utiliser un stylo sur un texte imprimé',
                'Parce qu’on risque de noter trop d’éléments secondaires sans voir le sens complet ni les liens entre les idées',
                'Parce que la prise de notes écrite ne sert qu’aux conférences orales',
                'Parce que les titres et mots en gras doivent toujours être ignorés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tant qu’on n’a pas lu le texte jusqu’au bout, on ne sait pas exactement où l’auteur veut en venir : on risque de surcharger ses notes de détails sans importance.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Mise en page notes',
            stepTheme: 'Lisibilité',
            stepTitle: 'Présenter des notes claires et exploitables',
            paragraphText:
              'Pour que des notes restent utilisables plusieurs semaines après, il est conseillé de n’écrire qu’au recto des feuilles, d’aérer la page avec des marges et retours à la ligne structurés, et de laisser des blancs pour ajouter ultérieurement des remarques ou références.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Laquelle de ces habitudes est recommandée par le cours pour la présentation matérielle de vos notes ?',
              options: [
                'Remplir recto et verso sans aucune marge pour économiser le papier',
                'Juxtaposer des phrases sans jamais dégager de plan ni de liens',
                'N’écrire qu’au recto, ménager des marges/blancs et faire des retours à la ligne correspondant à la structure',
                'Tout recopier mot à mot sans abréviations ni reformulation',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Écrire au recto uniquement et laisser des espaces blancs facilite la relecture synoptique et les ajouts complémentaires en couleur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Compte rendu',
            stepTheme: 'Style & Conclusion',
            stepTitle: 'Maîtriser le style et la limite de la conclusion du CR',
            paragraphText:
              'Un compte rendu d’activité comporte un titre précis, une brève introduction (motifs/circonstances), un développement relatant les faits et personnes rencontrées, une conclusion synthétique (sans formuler de propositions de solutions), le lieu, la date et la signature.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle caractéristique distingue la conclusion d’un compte rendu d’activité dans le cours de TEF S2 ?',
              options: [
                'Elle résume les points présentés (avec éventuelle appréciation générale), mais sans formuler de propositions de solutions',
                'Elle impose des sanctions disciplinaires aux participants',
                'Elle se limite obligatoirement à une citation poétique',
                'Elle remplace la signature du rédacteur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le compte rendu informe fidèlement des faits dans un style narratif ; la formulation de recommandations/propositions relève plutôt du rapport.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'CR Intégral vs Analytique',
            stepTheme: 'Réunions',
            stepTitle: 'Différencier le compte rendu intégral du compte rendu analytique',
            paragraphText:
              'En réunion, le compte rendu intégral restitue les débats en style direct, mot à mot, en faisant parler directement chaque intervenant (« M. K : la première question… »). Le compte rendu analytique synthétise l’essentiel des échanges en style indirect.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Comment se caractérise un « compte rendu intégral » de réunion ?',
              options: [
                'Il supprime systématiquement le nom de tous les intervenants',
                'Il ne résume que la dernière minute de la réunion',
                'Il est rédigé uniquement sous forme de tableau chiffré',
                'Il rapporte les interventions en style direct, en suivant le mot à mot des débats',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le CR intégral adopte le style direct pour reproduire littéralement les prises de parole de chaque participant.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Écoute active orale',
            stepTheme: 'Conférence',
            stepTitle: 'Repérer les balises orales d’un conférencier',
            paragraphText:
              'Dans une conférence, l’orateur ne répète pas comme dans un cours dicté : il faut rester attentif aux phrases d’annonce et de transition, au ton de la voix, aux répétitions intentionnelles ainsi qu’aux pauses qui mettent en valeur une notion majeure.',
            exercise: {
              id: 'lmd_entd_l1_tef_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Lors d’une prise de notes en conférence orale, sur quels indices l’auditeur doit-il s’appuyer pour capter les idées majeures ?',
              options: [
                'Sur les phrases d’annonce/transition, les variations de ton, les répétitions et les pauses de l’orateur',
                'Uniquement sur les blagues d’introduction',
                'Sur la transcription intégrale de chaque hésitation de l’orateur',
                'Sur le nombre de diapositives uniquement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les transitions annoncées, l’accentuation vocale et les pauses balisent le plan du discours oral et signalent les idées clés à noter.',
            },
          },
        ],
      }),
    ],
  },
];
