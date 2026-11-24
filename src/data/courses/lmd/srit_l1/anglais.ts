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

export const ANGLAIS_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : MASTERING ENGLISH TENSES & IRREGULAR VERBS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_anglais_ch1',
    subjectId: 'lmd_anglais',
    gradeLevel: 'lmd_srit_l1',
    alsoForGrades: ['lmd_entd_l1'],
    semesters: [1],
    order: 1,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Anglais Licence 1 (SRIT 1 & ENTD 1)',
    title: 'Chapitre 1 : Mastering English Tenses & Irregular Verbs (Temps verbaux et Verbes irréguliers)',
    summary:
      'Maîtriser le système temporel et aspectuel de l\'anglais général et technique : Present Simple vs Present Continuous, Past Simple vs Past Continuous, verbes irréguliers incontournables, Present Perfect, Past Perfect et toutes les formes d\'expression du futur.',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1 : Present Simple vs Present Continuous & Stative Verbs
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c1_p1',
        order: 1,
        title: 'Present Simple vs Present Continuous & Stative Verbs',
        summary:
          'Distinguer les vérités permanentes et routines techniques (Present Simple) des actions en cours d\'exécution (Present Continuous), tout en maîtrisant les verbes d\'état (stative verbs).',
        conceptExplanation:
          'En anglais, le choix entre le **Present Simple** (`I work / He works`) et le **Present Continuous** (`I am working / He is working`) ne dépend pas seulement du moment présent, mais de l\'**aspect** : le Present Simple exprime ce qui est permanent, habituel, programmé ou scientifiquement vrai, tandis que le Present Continuous décrit une action dynamique en cours de déroulement ou une situation temporaire. Certains verbes exprimant un état intellectuel, une possession ou une perception (**Stative Verbs**) refusent la forme en `-ing`.',
        formulas: [
          {
            name: 'Present Simple (3rd person singular)',
            formula: '\\text{He / She / It} + \\text{Verb-s / -es / -ies}',
            note: 'Questions & négations avec does / doesn\'t + Base Verb',
          },
          {
            name: 'Present Continuous',
            formula: '\\text{Subject} + \\text{am / is / are} + \\text{Verb-ing}',
            note: 'Pour une action en cours (right now, currently, at the moment)',
          },
        ],
        keyRule:
          'Avec `do / does / doesn\'t`, le verbe principal revient toujours à la Base Verbale sans `-s` (*Does the router support IPv6?*). Les verbes d\'état (*know, understand, belong, need, contain*) ne prennent jamais `-ing`.',
        workedExample: {
          title: 'Arbitrage Present Simple vs Present Continuous en salle serveur',
          statement:
            'Complétez les deux phrases : (1) "A firewall usually ______ (filter) incoming network traffic." (2) "Look! The system administrator ______ (reboot) the main database server right now."',
          methodSteps: [
            'Phrase (1) : L\'adverbe "usually" et la définition d\'une fonction permanente d\'un pare-feu imposent le Present Simple. Le sujet "A firewall" équivaut à "it" (3e personne du singulier) -> "filters".',
            'Phrase (2) : Les marqueurs "Look!" et "right now" signalent une action en cours sous nos yeux -> Present Continuous avec le sujet singulier "The system administrator" -> "is rebooting".',
          ],
          conclusion: '(1) filters ; (2) is rebooting.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Present Simple',
            stepTheme: 'blue',
            stepTitle: 'Le Present Simple : vérités générales, routines et architectures permanentes',
            paragraphText:
              'Le **Present Simple** s\'emploie pour exprimer des vérités scientifiques ou techniques permanentes (*Optical fiber transmits data as light pulses*), des habitudes ou routines régulières (*We back up the database every night*), ainsi que des états durables. À la forme affirmative, on utilise la **Base Verbale (BV)** pour `I, you, we, they`, mais on ajoute obligatoirement **`-s`** à la **3e personne du singulier (`he, she, it`)**.\nPour les verbes terminés par `-s, -sh, -ch, -x, -o, -z`, on ajoute **`-es`** (*watches, goes, fixes*) ; pour ceux terminés par `consonne + y`, le `-y` devient **`-ies`** (*study -> studies, try -> tries*). À la forme négative et interrogative, on fait appel à l\'auxiliaire **`do` / `does`** suivi de la **Base Verbale** sans `-s` (*The server does not respond* / *Does the script work?*).',
            keyRule:
              '3e personne du singulier (`he/she/it`) = verbe + `-s/-es/-ies` à l\'affirmative, mais `doesn\'t + BV` et `Does + S + BV ?` sans `-s` à la négative et à l\'interrogative.',
            konanTip:
              'Aux QCM de grammaire, dès que tu vois `does` ou `doesn\'t`, élimine immédiatement toutes les options où le verbe porte encore un `-s` final !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p1_ex1',
              type: 'mcq',
              prompt:
                'Choose the grammatically correct sentence in the Present Simple:',
              options: [
                'Does this router supports Gigabit Ethernet connections?',
                'This router do not support Gigabit Ethernet connections.',
                'Does this router support Gigabit Ethernet connections?',
                'This router support Gigabit Ethernet connections.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Avec le sujet singulier **this router** (`it`), la question au Present Simple se construit avec **`Does + Subject + Base Verb`** : *Does this router support...* (l\'auxiliaire *does* porte déjà la marque de la 3e personne, donc *support* ne prend pas de `-s`).',
              hint: 'Après l\'auxiliaire "Does", le verbe principal reste toujours à la base verbale.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Present Continuous',
            stepTheme: 'violet',
            stepTitle: 'Le Present Continuous : actions en cours et évolutions temporaires',
            paragraphText:
              'Le **Present Continuous** (ou *Present Progressive*) se construit avec l\'auxiliaire **`be` conjugué au présent (`am / is / are`) + `Verb-ing`**. Il décrit :\n1) Une action en train de se dérouler au moment précis où l\'on parle (*The technician is configuring the switch right now*) ;\n2) Une action ou un projet temporaire autour du présent (*This semester, we are studying Python and computer networks*) ;\n3) Une tendance ou évolution en cours (*Cloud computing is becoming the industry standard*).\nAttention à l\'orthographe du participe présent en `-ing` : les verbes en `-e` muet perdent le `-e` (*write -> writing, configure -> configuring*), et les verbes d\'une syllabe terminés par `consonne-voyelle-consonne` doublent la consonne finale (*run -> running, stop -> stopping*).',
            keyRule:
              'Marqueurs déclencheurs du Present Continuous : `now, right now, at the moment, currently, today, this week, Look!, Listen!`.',
            konanTip:
              'N\'oublie jamais l\'auxiliaire `am / is / are` devant `V-ing` : écrire *"He configuring the server"* sans `"is"` est une faute éliminatoire.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p1_ex2',
              type: 'mcq',
              prompt:
                'Complete the sentence: "Please do not unplug the cable! The server ______ a critical security update right now."',
              options: [
                'installs',
                'is installing',
                'installing',
                'does install',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L\'impératif d\'alerte (*Please do not unplug the cable!*) et le marqueur temporel **`right now`** indiquent une action en cours d\'exécution au moment de la parole : on utilise le **Present Continuous** **`is installing`**.',
              hint: 'Repérez l\'indice temporel "right now".',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Adverbs of Frequency',
            stepTheme: 'green',
            stepTitle: 'Les adverbes de fréquence et leur position syntaxique exacte',
            paragraphText:
              'Le **Present Simple** est très souvent accompagné d\'**adverbes de fréquence** qui gradueraient la répétition d\'une action de $100\\%$ à $0\\%$ : **`always`** ($100\\%$), **`usually / normally`** ($85\\%$), **`often / frequently`** ($70\\%$), **`sometimes`** ($50\\%$), **`occasionally`** ($30\\%$), **`rarely / seldom / hardly ever`** ($10\\%$) et **`never`** ($0\\%$). \nLa règle d\'or de positionnement syntaxique en anglais est stricte :\n- L\'adverbe de fréquence se place **JUSTE AVANT le verbe principal** (*Our system **always encrypts** user passwords* ; *He **never shares** his credentials*).\n- Mais il se place **JUSTE APRÈS l\'auxiliaire `BE`** (*The network latency **is usually** very low at night*). Comme `never`, `rarely` et `hardly ever` ont déjà un sens négatif, ils s\'utilisent avec un verbe à la forme **affirmative** (pas de double négation avec `don\'t/doesn\'t`).',
            keyRule:
              '`Subject + Adverb + Main Verb` (*She often codes in Python*), mais `Subject + BE + Adverb` (*The server is always online*).',
            konanTip:
              'Ne mets jamais un adverbe de fréquence entre le verbe et son complément d\'objet direct en anglais (*He checks always his emails* est FAUX $\\rightarrow$ *He always checks his emails*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p1_ex3',
              type: 'mcq',
              prompt:
                'Which sentence places the adverbs of frequency in the correct English word order?',
              options: [
                'Our network is always secure because the admin forgets never to update the firewall.',
                'Our network always is secure because the admin never forgets to update the firewall.',
                'Our network is always secure because the admin never forgets to update the firewall.',
                'Our network is secure always because the admin doesn\'t never forget to update the firewall.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L\'adverbe **`always`** se place **après** le verbe **`is`** (*is always secure*), tandis que **`never`** se place **avant** le verbe lexical **`forgets`** (*never forgets*), avec un verbe affirmatif en `-s` pour éviter la double négation.',
              hint: 'Après "be", mais avant les autres verbes !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Stative Verbs',
            stepTheme: 'orange',
            stepTitle: 'Le piège des Stative Verbs (verbes d\'état incompatibles avec -ing)',
            paragraphText:
              'En anglais, les **Stative Verbs** (verbes d\'état) décrivent un état mental, une émotion, une possession ou une propriété intrinsèque plutôt qu\'une action volontaire. Même si l\'état est vrai **en ce moment même (`right now`)**, ces verbes **ne s\'emploient PAS au Present Continuous** ; ils restent au **Present Simple** :\n- **Activité mentale** : `know, understand, believe, remember, forget, agree, mean, suppose`\n- **Possession & inclusion** : `have (posséder), own, belong to, contain, consist of, include`\n- **Goûts & besoins** : `like, love, hate, prefer, want, need, wish`\n- **Apparence & perception involontaire** : `seem, appear, look (= sembler), sound, Hear, see`.\nAttention aux verbes à **double sens** : `think` signifiant « avoir une opinion » est statif (*I think this algorithm is optimal*), mais signifiant « réfléchir à » accepte `-ing` (*We are thinking about migrating to Linux*). De même, `have` = « posséder » est statif (*This laptop has 16 GB of RAM*), mais dans une expression d\'action (*have lunch, have a meeting, have trouble*), il prend `-ing`.',
            keyRule:
              'Un verbe d\'état (`know, understand, belong, contain, need, want, prefer, consist of`) reste au **Present Simple** même avec `now` ou `at the moment`.',
            konanTip:
              'Aux examens, les verbes techniques `contain`, `consist of`, `belong to`, `need` et `understand` sont les pièges favoris : ne coche jamais *is containing* ou *am understanding* !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Comparaison : Present Simple vs Present Continuous',
              caption: 'Critères de choix selon la permanence et la nature dynamique ou stative du verbe',
              matrix2x2: {
                topAxis: ['Present Simple (V / V-s)', 'Present Continuous (am/is/are + V-ing)'],
                leftAxis: ['Usages principaux', 'Verbes & Marqueurs'],
                topLeft: {
                  title: 'Faits permanents & Routines',
                  items: [
                    'Lois scientifiques & spécifications techniques',
                    'Habitudes régulières (every day, on Mondays)',
                    'Architecture fixe d\'un système ou réseau',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Actions en cours & Temporaires',
                  items: [
                    'Action qui se déroule sous nos yeux (right now)',
                    'Projet temporaire (this week, currently)',
                    'Tendance évolutive (is increasing, is becoming)',
                  ],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'Stative Verbs & Adverbes',
                  items: [
                    'always, usually, often, sometimes, never',
                    'know, understand, believe, need, prefer',
                    'belong to, contain, consist of, own, seem',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Dynamic Action Verbs',
                  items: [
                    'now, at the moment, Look!, Listen!',
                    'install, configure, download, run, test',
                    'think (réfléchir) / have (a meeting)',
                  ],
                  color: 'orange',
                },
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p1_ex4',
              type: 'mcq',
              prompt:
                'Identify the correct form: "Right now, the student ______ the Python code, and he still ______ help because he ______ the recursion logic."',
              options: [
                'is testing / is needing / isn\'t understanding',
                'tests / needs / doesn\'t understand',
                'is testing / needs / doesn\'t understand',
                'is testing / need / don\'t understand',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`test` est un verbe d\'action en cours (*Right now, the student **is testing***), tandis que **`need`** (avoir besoin) et **`understand`** (comprendre) sont des **Stative Verbs** qui refusent la forme en `-ing` et restent au Present Simple : **`needs`** et **`doesn\'t understand`**.',
              hint: '"test" est une action dynamique, mais "need" et "understand" sont des verbes d\'état (stative verbs).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Méthode d\'analyse',
            stepTheme: 'green',
            stepTitle: 'Méthode en 3 étapes pour trancher entre Present Simple et Continuous',
            paragraphText:
              'Face à une phrase d\'examen au présent, applique systématiquement cet algorithme de décision en 3 étapes :\n**Étape 1 — Tester la nature du verbe** : Est-ce un *Stative Verb* (`know, belong, consist of, need, contain, prefer, seem`) ? Si oui $\\rightarrow$ **Present Simple** immédiat, sans même regarder l\'adverbe de temps.\n**Étape 2 — Repérer le marqueur temporel** : Vois-tu un adverbe de fréquence/répétition (`every day, usually, often, on Fridays, twice a week`) $\\rightarrow$ **Present Simple**. Vois-tu un marqueur d\'actualité immédiate (`right now, at the moment, currently, Look!, Listen!`) $\\rightarrow$ **Present Continuous**.\n**Étape 3 — Vérifier l\'accord sujet-verbe** : Vérifie si le sujet est un singulier (`he, she, it, each server, everybody, nobody, this software`) ou un pluriel (`they, the packets, both routers`) pour accorder `V-s / does` ou `is / are`.',
            keyRule:
              'Attention aux pronoms indéfinis `everybody, everyone, somebody, nobody, each + noun` et aux noms indénombrables `software, information, equipment, traffic` : ils s\'accordent TOUJOURS au **singulier** (`is / does / V-s`).',
            konanTip:
              '*Everyone in the IT department knows (avec -s) the procedure* et *Network traffic is (au singulier) heavy today* sont des classiques des sujets d’examen.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p1_ex5',
              type: 'mcq',
              prompt:
                'Complete the sentence: "Every packet in an IP network ______ a header that ______ the source and destination IP addresses."',
              options: [
                'is having / is containing',
                'have / contain',
                'has / contains',
                'has / is containing',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Il s\'agit d\'une vérité technique permanente (Present Simple), et les verbes **`have`** (possession) et **`contain`** (inclusion) sont tous deux des *stative verbs*. Les sujets `Every packet` et `that` (= `a header`) sont au singulier : **`has / contains`**.',
              hint: '"Every + nom singulier" commande toujours un verbe à la 3e personne du singulier.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas d\'examen IT',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Diagnostic réseau en temps réel',
            paragraphText:
              'Analysons un dialogue typique entre deux ingénieurs réseau :\n— *"Why **are you checking** (`check` — action en cours) the core switch logs right now?"*\n— *"Because the VoIP service **is experiencing** (`experience` — problème temporaire en cours) high packet loss today. Normally, our optical backbone **delivers** (`deliver` — comportement habituel : *normally*) a throughput of 10 Gbps and **consists** (`consist` — stative verb) of two redundant links, but right now one link **is not working** (`not work` — panne temporaire actuelle) properly."*\nCet exemple illustre comment un rapport technique alterne constamment entre la norme architecturale (**Present Simple**) et l\'anomalie observée en direct (**Present Continuous**).',
            keyRule:
              'Norme de fonctionnement (`normally, usually, by default`) = **Present Simple** ; Anomalie ou opération en cours (`today, right now, currently`) = **Present Continuous**.',
            konanTip:
              'Lorsqu\'une phrase oppose `Normally / Usually ...` et `..., but today / right now ...`, la première proposition est au Present Simple et la seconde au Present Continuous.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p1_ex6',
              type: 'mcq',
              prompt:
                'Choose the correct pair to complete the technical report: "By default, our cloud platform ______ data across three data centers, but today we ______ all traffic to Abidjan due to maintenance."',
              options: [
                'is replicating / route',
                'replicates / are routing',
                'replicate / are routing',
                'is replicating / are routing',
              ],
              correctAnswerIndex: 1,
              explanation:
                '**"By default"** indique le fonctionnement habituel et permanent de la plateforme (`our cloud platform` = `it` $\\rightarrow$ **`replicates`** au Present Simple), tandis que **"but today"** introduit une opération exceptionnelle et temporaire en cours ($\\rightarrow$ **`are routing`** au Present Continuous).',
              hint: 'Opposez "By default" (règle permanente) à "but today" (situation temporaire en cours).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2 : Past Simple, Past Continuous & Essential Irregular Verbs
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c1_p2',
        order: 2,
        title: 'Past Simple, Past Continuous & Essential Irregular Verbs',
        summary:
          'Raconter et analyser des événements passés datés (Past Simple), maîtriser les verbes irréguliers fondamentaux, articuler actions longues et interruptions au passé (Past Continuous) et utiliser used to.',
        conceptExplanation:
          'Le **Past Simple** (Prétérit) est le temps de référence pour toute action passée, terminée et coupée du présent, située dans un cadre temporel révolu (`yesterday, last week, in 2021, two hours ago`). Le **Past Continuous** (`was / were + V-ing`) décrit quant à lui une action qui était en plein déroulement à un instant précis du passé, ou qui servait de toile de fond lorsqu\'un événement soudain (au Past Simple) l\'a interrompue.',
        formulas: [
          {
            name: 'Past Simple (Regular & Irregular)',
            formula: '\\text{Affirmative: } V\\text{-ed / 2nd column} \\quad | \\quad \\text{Neg/Interr: } \\text{didn\'t / Did + BV}',
            note: 'Avec yesterday, last..., ... ago, in + année passée',
          },
          {
            name: 'Past Continuous & Interruption',
            formula: '\\text{While } S_1 + \\text{was/were } V\\text{-ing}, \\; S_2 + V_{\\text{Past Simple}}',
            note: 'Action longue en arrière-plan interrompue par une action brève',
          },
        ],
        keyRule:
          'Au Past Simple, dès que l\'auxiliaire `did` ou `didn\'t` apparaît, le verbe principal redevient une **Base Verbale** (*They didn\'t find the bug* — jamais *didn\'t found*).',
        workedExample: {
          title: 'Chronologie d\'un incident serveur au passé',
          statement:
            'Conjuguez les verbes : "While the database ______ (process) the transactions last night, a power outage suddenly ______ (shut) down the entire rack."',
          methodSteps: [
            'Identifier l\'action longue d\'arrière-plan introduite par "While" : la base de données était en train de traiter les transactions -> Past Continuous "was processing".',
            'Identifier l\'événement soudain qui interrompt l\'action : la coupure de courant ("suddenly") -> Past Simple du verbe irrégulier "shut" (shut - shut - shut) -> "shut".',
          ],
          conclusion: 'was processing / shut.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Past Simple',
            stepTheme: 'blue',
            stepTitle: 'Le Past Simple : événements passés datés et révolus',
            paragraphText:
              'Le **Past Simple** s\'utilise lorsqu\'une action est entièrement terminée dans le passé et associée (explicitement ou implicitement) à une date ou période révolue : **`yesterday`**, **`last night / last week / last year`**, **`two days ago`**, **`in 2020`**, **`when I was in first year`**.\n- Pour les **verbes réguliers**, on ajoute **`-ed`** à la base verbale (`install -> installed,Reboot -> rebooted`). Si le verbe se termine par `-e`, on ajoute `-d` (`configure -> configured`) ; s\'il finit par `consonne + y`, il devient **`-ied`** (`try -> tried, study -> studied`) ; s\'il finit par `CVC` accentué, on double la consonne (`stop -> stopped,occo -> occurred, transmit -> transmitted`).\n- Aux formes **négative et interrogative**, on utilise l\'auxiliaire **`did not (didn\'t) + Base Verb`** et **`Did + Subject + Base Verb ?`** pour tous les sujets (sauf pour le verbe **`be`** qui fait **`was / were`**, **`wasn\'t / weren\'t`** sans `did`).',
            keyRule:
              'Avec `did` ou `didn\'t`, on utilise TOUJOURS la Base Verbale : *Did you deploys?* (FAUX) $\\rightarrow$ *Did you deploy?* (VRAI).',
            konanTip:
              'Attention au verbe `be` au passé : il n\'utilise jamais `did` ! On dit *Were the servers online yesterday?* et *The connection wasn\'t stable* (jamais *Did the connection be...*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p2_ex1',
              type: 'mcq',
              prompt:
                'Choose the correct Past Simple sentence:',
              options: [
                'Did the cybersecurity team detected the intrusion two hours ago?',
                'The cybersecurity team didn\'t detected the intrusion two hours ago.',
                'Did the cybersecurity team detect the intrusion two hours ago?',
                'Was the cybersecurity team detect the intrusion two hours ago?',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Au Past Simple interrogatif, l\'auxiliaire **`Did`** porte déjà la marque du passé, donc le verbe principal reste à la **Base Verbale** : **`Did the cybersecurity team detect...`**.',
              hint: 'Après "Did", le verbe ne prend jamais "-ed".',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Irregular Verbs',
            stepTheme: 'violet',
            stepTitle: 'Les verbes irréguliers incontournables en anglais général et IT',
            paragraphText:
              'Les **Irregular Verbs** ne prennent pas `-ed` au Past Simple (2e colonne) ni au Past Participle (3e colonne). Tout étudiant de Licence 1 doit connaître parfaitement ces 4 groupes stratégiques :\n1) **Les invariables (A-A-A)** : `cut - cut - cut`, `put - put - put`, `set - set - set` (configurer/définir), `shut - shut - shut`, `broadcast - broadcast - broadcast`, `cost - cost - cost`, `hit - hit - hit`, `read - read (/red/) - read (/red/)`, `split - split - split`, `spread - spread - spread`.\n2) **Modèle A-B-B** : `build - built - built`, `send - sent - sent`, `spend - spent - spent`, `find - found - found`, `make - made - made`, `buy - bought - bought`, `bring - brought - brought`, `think - thought - thought`, `teach - taught - taught`, `keep - kept - kept`, `leave - left - left`, `lose - lost - lost`, `hold - held - held`, `lead - led - led`, `understand - understood - understood`.\n3) **Modèle A-B-C** : `be - was/were - been`, `do - did - done`, `go - went - gone`, `write - wrote - written`, `choose - chose - chosen`, `break - broke - broken`, `speak - spoke - spoken`, `take - took - taken`, `give - gave - given`, `know - knew - known`, `see - saw - seen`, `begin - began - begun`, `drive - drove - driven`, `fall - fell - fallen`, `hide - hid - hidden`.\n4) **Modèle A-B-A** : `run - ran - run` (exécuter un programme), `come - came - come`, `become - became - become`, `overcome - overcame - overcame`.',
            keyRule:
              'Ne confonds jamais **`fall - fell - fallen`** (tomber/baisser : *Latency fell by 20%*) avec **`feel - felt - felt`** (ressentir), ni **`find - found - found`** (trouver) avec le verbe régulier **`found - founded - founded`** (fonder une entreprise).',
            konanTip:
              'Le duo `find` vs `found` tombe très souvent aux examens : *"Steve Jobs **founded** Apple in 1976"* (fonder = régulier) vs *"The developer **found** a critical bug yesterday"* (trouver = irrégulier).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p2_ex2',
              type: 'mcq',
              prompt:
                'Complete the sentence with the correct Past Simple forms: "Three years ago, two engineering graduates ______ (found) a cybersecurity startup and ______ (build) an automated firewall that ______ (cost) very little to deploy."',
              options: [
                'found / builded / costed',
                'founded / built / cost',
                'found / built / cost',
                'founded / builded / costed',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1) **To found** (fonder/créer une entreprise) est un verbe **régulier** $\\rightarrow$ **`founded`** (alors que *found* est le prétérit de *to find* = trouver).\n2) **To build** (construire) est irrégulier (`build - built - built`) $\\rightarrow$ **`built`**.\n3) **To cost** (coûter) est un irrégulier invariable (`cost - cost - cost`) $\\rightarrow$ **`cost`**.',
              hint: 'Attention à la différence entre "to find" (trouver) et "to found" (fonder une entreprise), et souvenez-vous que "cost" est invariable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Past Continuous',
            stepTheme: 'blue',
            stepTitle: 'Le Past Continuous : action en cours à un moment précis du passé',
            paragraphText:
              'Le **Past Continuous** se forme avec **`was / were + Verb-ing`** (`was` pour `I, he, she, it` ; `were` pour `you, we, they`). Il exprime :\n1) Une action qui était en plein déroulement à un instant précis du passé (*At 2:00 AM last night, the backup server **was transferring** terabytes of data*) ;\n2) Deux actions longues qui se déroulaient simultanément en parallèle dans le passé, reliées par **`while`** (*While the developer **was debugging** the API, the network engineer **was testing** the VPN tunnel*).\nComme au présent, les **Stative Verbs** (`know, want, belong, understand, need`) ne se mettent pas au Past Continuous : on utilise le Past Simple (*I knew the answer*, jamais *I was knowing*).',
            keyRule:
              'Action en cours à une heure précise du passé (`At 10 PM yesterday`) ou deux actions longues simultanées (`While S1 was V-ing, S2 was V-ing`) $\\rightarrow$ **Past Continuous**.',
            konanTip:
              'Vérifie toujours l\'accord entre `was` (sujet singulier) et `were` (sujet pluriel + `you`) : *The packets were arriving*, mais *The data / The traffic was flowing*.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p2_ex3',
              type: 'mcq',
              prompt:
                'Complete the sentence: "At 11:30 PM yesterday, both technicians ______ the optical fiber splice while the supervisor ______ the signal attenuation."',
              options: [
                'tested / monitored',
                'was testing / was monitoring',
                'were testing / was monitoring',
                'were testing / were monitoring',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L\'indication d\'un instant précis dans le passé (*At 11:30 PM yesterday*) et de deux actions longues simultanées reliées par **`while`** appelle le **Past Continuous**. `Both technicians` est pluriel ($\\rightarrow$ **`were testing`**) et `the supervisor` est singulier ($\\rightarrow$ **`was monitoring`**).',
              hint: 'Deux actions longues en parallèle à une heure précise hier soir ; attention au pluriel "both technicians" et au singulier "the supervisor".',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'While vs When',
            stepTheme: 'green',
            stepTitle: 'Combiner Past Continuous et Past Simple : l\'action interrompue',
            paragraphText:
              'La combinaison grammaticale la plus fréquente dans les récits et rapports d\'incidents associe le **Past Continuous** (l\'action longue en arrière-plan qui était en cours) et le **Past Simple** (l\'action brève et soudaine qui est venue l\'interrompre) :\n- **`While / As`** introduit presque toujours l\'action longue au **Past Continuous** : *While I **was updating** the BIOS, the laptop **turned** off.*\n- **`When`** introduit le plus souvent l\'action brève au **Past Simple** : *I **was updating** the BIOS when the laptop **turned** off.*\nAttention toutefois : si deux actions courtes se succèdent immédiatement (cause $\\rightarrow$ conséquence instantanée), les deux verbes se mettent au **Past Simple** (*When the administrator **pressed** Enter, the script **started** immediately*).',
            keyRule:
              '`While / As` + **Past Continuous** (action longue en cours) | `When` + **Past Simple** (événement soudain qui interrompt).',
            konanTip:
              'Trace mentalement une ligne du temps : l\'onde longue (`~~~~~~~`) est en `was/were + V-ing`, et l\'éclair (`⚡`) qui la coupe est au `Past Simple` !',
            visualSchema: {
              type: 'flowchart',
              title: 'Arbre de décision : Past Simple vs Past Continuous',
              caption: 'Méthode d\'analyse chronologique pour conjuguer deux actions passées',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 's1',
                    label: 'Analyser la relation entre les actions passées',
                    sublabel: 'Y a-t-il une action en cours ou une suite d\'actions ?',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 's2',
                    label: 'Cas 1 : Action longue interrompue par un événement bref',
                    sublabel: 'While + Past Continuous (was/were V-ing)  ⚡  When + Past Simple (V-ed / 2e col.)',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    id: 's3',
                    label: 'Cas 2 : Deux actions longues simultanées en parallèle',
                    sublabel: 'Past Continuous ... while ... Past Continuous',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    id: 's4',
                    label: 'Cas 3 : Actions brèves successives (chronologie 1 -> 2 -> 3)',
                    sublabel: 'When + Past Simple, Past Simple (ex: When the alarm rang, he checked the screen)',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p2_ex4',
              type: 'mcq',
              prompt:
                'Choose the correct combination: "While the engineer ______ the new firewall rules, a malicious botnet suddenly ______ a DDoS attack against the gateway."',
              options: [
                'configured / was launching',
                'was configuring / launched',
                'was configuring / was launching',
                'configured / launched',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La conjonction **`While`** introduit l\'action longue en arrière-plan (**`was configuring`**, Past Continuous), qui est brusquement interrompue (*suddenly*) par l\'événement ponctuel au Past Simple (**`launched`**).',
              hint: '"While" précède l\'action longue en cours ; "suddenly" annonce l\'événement bref au Past Simple.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Used to vs Be used to',
            stepTheme: 'orange',
            stepTitle: 'Le piège redoutable : Used to + BV vs Be/Get used to + V-ing',
            paragraphText:
              'Ne confonds jamais ces trois structures très prisées dans les QCM universitaires :\n1) **`used to + Base Verb`** exprime une **habitude passée ou un état passé aujourd\'hui terminé** (« autrefois, avant ») : *Companies **used to store** data on magnetic tapes, but now they use cloud storage.* À la forme négative et interrogative : **`didn\'t use to + BV`** et **`Did you use to + BV ?`**.\n2) **`be used to + Verb-ing / Noun`** signifie **« être habitué à »** (au présent, au passé ou au futur). Ici, `used` est un adjectif et **`to` est une préposition** : le verbe qui suit doit obligatoirement être au **gérondif en `-ing`** (*Our engineers **are used to working** under pressure*).\n3) **`get used to + Verb-ing / Noun`** signifie **« s\'habituer progressivement à »** (*You will quickly **get used to coding** in Linux*).',
            keyRule:
              '`S + used to + Base Verb` (autrefois) $\\neq$ `S + am/is/are/was/were/get used to + Verb-ING` (être habitué à / s\'habituer à).',
            konanTip:
              'Astuce infaillible : regarde ce qu\'il y a **devant** `used to`. S\'il y a directement le sujet (`He used to...`), mets la **Base Verbale**. S\'il y a le verbe `be` ou `get` (`He is used to...` / `He got used to...`), mets **`Verb-ing`** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p2_ex5',
              type: 'mcq',
              prompt:
                'Complete the two clauses: "Before joining university, I ______ (not / use) command-line terminals, but now I am completely used to ______ (manage) Linux servers via SSH."',
              options: [
                'didn\'t use to use / manage',
                'wasn\'t used to use / managing',
                'didn\'t use to use / managing',
                'used not to using / manage',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans la première proposition, *Before joining university* renvoie à un état passé révolu $\\rightarrow$ négation de `used to + BV` = **`didn\'t use to use`**. Dans la seconde, *I am completely used to...* contient l\'auxiliaire **`am`** (« je suis habitué à »), où `to` est une préposition suivie de **`Verb-ing`** $\\rightarrow$ **`managing`**.',
              hint: 'Première partie : habitude passée révolue (didn\'t use to + BV). Seconde partie : "am used to" + V-ing.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Post-Mortem Report',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Rédiger un rapport d\'incident au passé',
            paragraphText:
              'Lisons un extrait de rapport post-mortem rédigé après une panne de télécommunications :\n*"Yesterday at 14:15 GMT, a backhoe loader accidentally **cut** (`cut - cut - cut`, Past Simple) the primary underground optical cable while road workers **were digging** (Past Continuous — action en cours) near the junction box. As soon as the alarm **went** (`go - went - gone`, Past Simple) off, our NOC team **rerouted** (Past Simple — action consécutive) the traffic through the backup microwave link. Ten years ago, such an incident **used to cause** (habitude passée révolue) hours of downtime, because technicians **did not have** automated failover systems."*\nToutes les règles du point 2 s\'y articulent avec précision.',
            keyRule:
              'Dans un rapport d\'incident daté (*Yesterday at 14:15*), tous les faits accomplis sont au **Past Simple**, tandis que le contexte en cours lors du sinistre est au **Past Continuous**.',
            konanTip:
              'Souviens-toi que `cut`, `shut`, `set`, `put`, `cost` et `broadcast` ne changent pas d\'orthographe au Past Simple !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p2_ex6',
              type: 'mcq',
              prompt:
                'Select the correct sequence of verbs for this incident report: "Last Tuesday, the main router ______ (break) down while it ______ (forward) heavy video traffic, so the technician immediately ______ (set) up a backup gateway."',
              options: [
                'broke / was forwarding / set',
                'breaked / forwarded / setted',
                'was breaking / forwarded / set',
                'broke / forwarded / setted',
              ],
              correctAnswerIndex: 0,
              explanation:
                '1) **break** est irrégulier (`break - broke - broken`) $\\rightarrow$ **`broke`** (événement soudain).\n2) Introduit par **`while`**, le transfert en cours est au Past Continuous $\\rightarrow$ **`was forwarding`**.\n3) **set** est un verbe irrégulier invariable (`set - set - set`) $\\rightarrow$ **`set`** (*setted* n\'existe pas !).',
              hint: 'Vérifiez les formes irrégulières de "break" et "set", ainsi que le temps après "while".',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3 : Present Perfect, Past Perfect & Expressing the Future
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c1_p3',
        order: 3,
        title: 'Present Perfect, Past Perfect & Expressing the Future',
        summary:
          'Maîtriser le Present Perfect (avec since, for, already, yet, just, ever), le distinguer du Past Simple, exprimer l\'antériorité au passé (Past Perfect) et choisir la bonne forme du futur.',
        conceptExplanation:
          'Le **Present Perfect** (`have / has + Past Participle`) est le pont entre le passé et le présent : il exprime soit le **résultat présent** d\'une action passée non datée (*I have lost my password* = je ne peux plus me connecter maintenant), soit une **action commencée dans le passé et qui continue dans le présent** (avec `for` et `since`). À l\'inverse, dès que l\'action est datée dans un passé révolu (`yesterday, ago, in 2019`), le **Past Simple** est obligatoire. Enfin, l\'anglais dispose de quatre structures complémentaires pour exprimer le **Futur** selon le degré de planification.',
        formulas: [
          {
            name: 'Present Perfect Simple & Continuous',
            formula: '\\text{have / has} + V_{\\text{PP (3rd col.)}} \\quad | \\quad \\text{have / has been} + V\\text{-ing}',
            note: 'Avec since, for, just, already, yet, ever, never, recently, so far',
          },
          {
            name: 'Past Perfect & Time Clauses in the Future',
            formula: '\\text{Past Perfect: } \\text{had} + V_{\\text{PP}} \\quad | \\quad \\text{When / As soon as} + \\text{Present Simple}, \\; \\text{will + BV}',
            note: 'Jamais de "will" après when, as soon as, until, before, after !',
          },
        ],
        keyRule:
          'Date passée révolue (`yesterday, last week, ... ago, in 2020, When...?`) = **Past Simple**. Lien avec le présent ou durée continue (`since, for, already, yet, just, so far`) = **Present Perfect**.',
        workedExample: {
          title: 'Opposition Present Perfect vs Past Simple',
          statement:
            'Comparez et complétez : (1) "Our company ______ (deploy) IPv6 in 2021." (2) "Our company ______ (already / deploy) IPv6 on all core routers, so the network is ready."',
          methodSteps: [
            'Phrase (1) : Le marqueur "in 2021" situe l\'action dans une période passée révolue -> Past Simple "deployed".',
            'Phrase (2) : Aucune date passée n\'est mentionnée ; l\'adverbe "already" et la conséquence présente ("so the network is ready") imposent le Present Perfect -> "has already deployed".',
          ],
          conclusion: '(1) deployed ; (2) has already deployed.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Present Perfect',
            stepTheme: 'blue',
            stepTitle: 'Le Present Perfect Simple : structure et adverbes (just, already, yet, ever)',
            paragraphText:
              'Le **Present Perfect Simple** se construit avec l\'auxiliaire **`have / has + Past Participle`** (`-ed` pour les verbes réguliers, **3e colonne** pour les verbes irréguliers : *written, done, been, gone, sent, built, run*). Il s\'emploie pour :\n1) Une action passée récente ayant une **conséquence visible dans le présent**, souvent avec **`just`** (« venir juste de » : *The server **has just crashed*** = il est hors ligne maintenant) ;\n2) Un bilan d\'expérience ou d\'accomplissement à ce jour (`so far, up to now, recently`), avec :\n- **`already`** (« déjà », dans les phrases affirmatives, placé entre `have/has` et le participe passé : *We **have already patched** the vulnerability*) ;\n- **`yet`** (« déjà » dans les questions, ou « pas encore » dans les négations, toujours placé **en fin de phrase** : *Have you tested the code **yet**? — No, I haven\'t tested it **yet***) ;\n- **`ever / never`** (« déjà / jamais au cours de la vie » : *Have you **ever** used Wireshark?*).',
            keyRule:
              'Distinction cruciale : **`has gone to`** = il est parti là-bas (il n\'est pas encore revenu) $\\neq$ **`has been to`** = il y est allé et en est revenu (expérience de vie).',
            konanTip:
              'Position des adverbes au Present Perfect : `just, already, ever, never` se placent **entre `have/has` et le participe passé**, tandis que **`yet`** se place toujours **tout à la fin** de la phrase.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p3_ex1',
              type: 'mcq',
              prompt:
                'Choose the grammatically correct dialogue in the Present Perfect:',
              options: [
                'Have you already uploaded the source code to GitHub? — No, I haven\'t uploaded yet it.',
                'Did you uploaded the source code to GitHub yet? — No, I haven\'t already uploaded it.',
                'Have you uploaded the source code to GitHub yet? — No, I haven\'t uploaded it yet, but I have just finished the unit tests.',
                'Have you ever upload the source code to GitHub? — Yes, I have just upload it.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans la question et la réponse négative, **`yet`** se place **en fin de proposition** (*Have you uploaded ... **yet**? / I haven\'t uploaded it **yet***). Dans la proposition affirmative, **`just`** s\'insère entre `have` et le participe passé (`have **just** finished`).',
              hint: '"yet" s\'utilise en fin de phrase dans les questions et négations ; "just" se place entre "have/has" et le participe passé.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'For vs Since',
            stepTheme: 'violet',
            stepTitle: 'Exprimer une durée continue jusqu\'au présent : For, Since & Present Perfect Continuous',
            paragraphText:
              'En français, on utilise le présent avec « depuis » (*J\'étudie à l\'université depuis deux ans*). En anglais, utiliser le Present Simple est une **erreur grave** (*I study at university for two years* est FAUX) : pour une action qui a commencé dans le passé et **continue dans le présent**, il faut obligatoirement le **Present Perfect** (Simple ou Continuous) avec :\n- **`FOR` + durée chiffrée ou globale** (*for ten minutes, for three hours, for five years, for a long time, for ages*) ;\n- **`SINCE` + point de départ précis dans le passé** (*since 8:00 AM, since Monday, since 2022, since last October, since I arrived*). Note importante : lorsqu\'une proposition suit `since`, le verbe de la proposition après `since` est au **Past Simple** (*We **have used** this ERP **since** the company **opened** in 2018*).\nLe **Present Perfect Continuous** (**`have / has been + Verb-ing`**) insiste sur la durée ininterrompue d\'une activité dynamique (*The engineers **have been trying** to restore the link for four hours*), sauf avec les *Stative Verbs* (`know, be, have, belong`) qui restent au Present Perfect Simple (*I **have known** him since 2020*).',
            keyRule:
              '`Present Perfect` + **`FOR`** + durée (*for 3 years*) | `Present Perfect` + **`SINCE`** + point de départ ou proposition au **Past Simple** (*since 2021 / since he joined us*).',
            konanTip:
              'Ne traduis jamais le présent français « Il travaille ici depuis 2019 » par un Present Simple anglais : dès que tu vois `since` ou `for` avec une action toujours en cours, élimine `works / is working` et choisis `has worked / has been working` !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p3_ex2',
              type: 'mcq',
              prompt:
                'Complete the sentence accurately: "Our data center ______ without any major interruption ______ we ______ the redundant cooling system in 2021."',
              options: [
                'is running / since / have installed',
                'has been running / since / installed',
                'has been running / for / installed',
                'runs / since / installed',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L\'action a commencé en 2021 et continue aujourd\'hui $\\rightarrow$ **Present Perfect Continuous** (**`has been running`**). Le point de départ est introduit par **`since`**, suivi d\'une proposition datée en 2021 au **Past Simple** (**`installed`**).',
              hint: 'Action commencée dans le passé et toujours en cours = Present Perfect (Continuous) ; point de départ = "since" + Past Simple.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Present Perfect vs Past Simple',
            stepTheme: 'orange',
            stepTitle: 'Le duel décisif : Present Perfect vs Past Simple',
            paragraphText:
              'La confusion entre **Present Perfect** et **Past Simple** représente plus de $30\\%$ des questions sur les temps aux examens de Licence 1. Retiens cette frontière absolue :\n1) On utilise le **Past Simple** dès que la phrase contient un **marqueur de temps passé terminé** : **`yesterday`**, **`... ago`** (*ten minutes ago*), **`last ...`** (*last night, last month*), **`in + année passée`** (*in 1995, in 2023*), **`when ...`** (notamment dans toute question commençant par **`When ...?`** : *When **did** you **graduate**?* — jamais *When have you...*), ou lorsqu\'on parle d\'une personne décédée ou d\'une période historique close (*Alan Turing **invented** the Turing machine*).\n2) On utilise le **Present Perfect** lorsque l\'action passée n\'est **pas datée** (seul le résultat présent compte), ou que la période de temps mentionnée **n\'est pas encore terminée** (**`today, this morning [s\'il est encore le matin], this week, this year, so far, recently`**), ou avec `since / for` pour un état toujours vrai aujourd\'hui.\nCompare : *He **lived** in London for five years* (Past Simple = c\'est fini, il n\'y habite plus aujourd\'hui) vs *He **has lived** in Abidjan for five years* (Present Perfect = il y habite toujours aujourd\'hui).',
            keyRule:
              'Jamais de **Present Perfect** avec `yesterday`, `ago`, `last...`, `in 2020` ou `When...?` !',
            konanTip:
              'Si une question commence par **`When...`** ou **`What time...`**, la réponse attendue est à $100\\%$ au **Past Simple** (`When did the server crash?`). Si elle commence par **`How long...`** pour une situation actuelle, c\'est le **Present Perfect** (`How long has the server been down?`).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p3_ex3',
              type: 'mcq',
              prompt:
                'Choose the correct pair of verb forms: "I ______ (work) in telecommunications for six years now; I first ______ (start) as a junior field technician in 2018."',
              options: [
                'worked / have started',
                'am working / started',
                'have worked / started',
                'have worked / have started',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La première proposition exprime une durée commencée dans le passé et toujours en cours aujourd\'hui (*for six years **now***) $\\rightarrow$ **Present Perfect** (**`have worked`**). La seconde proposition situe le début de carrière à une date passée révolue (**`in 2018`**) $\\rightarrow$ **Past Simple** (**`started`**).',
              hint: '"for six years now" (toujours vrai aujourd\'hui) vs "in 2018" (date passée révolue).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Past Perfect',
            stepTheme: 'blue',
            stepTitle: 'Le Past Perfect (had + Past Participle) : le passé dans le passé',
            paragraphText:
              'Le **Past Perfect** se construit avec **`had + Past Participle`** (identique à toutes les personnes : `I/he/we/they had written`). Il sert à marquer l\'**antériorité dans le passé** (« le passé avant le passé », équivalent du plus-que-parfait français).\nLorsque deux événements passés ne sont pas racontés dans leur ordre chronologique, l\'événement qui s\'est produit en **premier (Action 1, la plus ancienne)** se met au **Past Perfect (`had + V-ed/3e col.`)**, tandis que l\'événement survenu **ensuite (Action 2, plus récente dans le passé)** est au **Past Simple** :\n- *When the system administrator **arrived** (Action 2) at the office, the ransomware **had already encrypted** (Action 1, antérieure) all the shared folders.*\nLes connecteurs typiques du Past Perfect sont : **`by the time + Past Simple`** (*By the time we detected the breach, the hackers **had stolen** the tokens*), **`already`**, **`before`**, **`after`** et **`until`** au passé.',
            keyRule:
              'Dans le passé : **Action 1 (antérieure)** = `had + Past Participle` (Past Perfect) $\\rightarrow$ **Action 2 (postérieure)** = `Past Simple`.',
            konanTip:
              'Dès que tu vois la structure **`By the time + Subject + Past Simple, ...`** (« Au moment où... »), la proposition principale qui exprime ce qui s\'était déjà produit avant cet instant est au **Past Perfect (`had + V-pp`)**.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p3_ex4',
              type: 'mcq',
              prompt:
                'Complete the sentence: "By the time the backup generator ______ (kick) in, the sudden voltage drop ______ (already / corrupt) the active virtual machines."',
              options: [
                'kicked / already corrupted',
                'had kicked / already corrupted',
                'kicked / had already corrupted',
                'was kicking / has already corrupted',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La chute de tension avait **déjà** corrompu les machines virtuelles (Action 1, antérieure $\\rightarrow$ **Past Perfect `had already corrupted`**) au moment où le groupe électrogène de secours s\'est déclenché (Action 2 dans le passé après *By the time* $\\rightarrow$ **Past Simple `kicked`**).',
              hint: 'Laquelle des deux actions s\'est produite AVANT l\'autre dans le passé ?',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Expressing the Future',
            stepTheme: 'green',
            stepTitle: 'Les 4 formes du Futur : Will, Be going to, Present Continuous & Present Simple',
            paragraphText:
              'En anglais, on choisit la forme du futur selon le contexte exact de l\'énoncé :\n1) **`will + Base Verb`** (négation **`won\'t + BV`**) : s\'utilise pour une **décision spontanée** prise à l\'instant où l\'on parle (*"The printer is out of toner." — "Don\'t worry, I **will replace** the cartridge."*), une **promesse / offre** (*I\'ll send you the report tonight*), ou une **prédiction générale / opinion** introduite par `I think, I believe, probably, maybe, I\'m sure` (*I think AI **will transform** telecom networks*).\n2) **`am / is / are going to + Base Verb`** : s\'utilise pour une **intention ou un projet déjà décidé avant de parler** (*We **are going to migrate** our servers to AWS next month*), ou une **prédiction imminente fondée sur un indice concret visible dans le présent** (*Look at the CPU temperature at $99^\\circ\\text{C}$! The system **is going to crash**!*).\n3) **Present Continuous (`am / is / are + V-ing`)** : s\'utilise pour un **arrangement personnel fixé à l\'agenda** avec lieu/heure/participants confirmés (*I **am meeting** the Cisco representative tomorrow at 10 AM*).\n4) **Present Simple (`V / V-s`)** : s\'utilise pour les **horaires officiels** (avions, trains, cours, conférences : *The cybersecurity conference **starts** at 8:30 tomorrow morning*).',
            keyRule:
              'Décision instantanée ou `I think / probably` $\\rightarrow$ **`will + BV`** | Intention réfléchie ou preuve visible immédiate $\\rightarrow$ **`be going to + BV`** | Horaire officiel $\\rightarrow$ **`Present Simple`**.',
            konanTip:
              'Si l\'énoncé montre une réaction directe du type *"The phone is ringing!" — "I\'ll get it!"*, c\'est une décision prise sur-le-champ : choisis toujours **`will + BV`** (jamais *am going to*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p3_ex5',
              type: 'mcq',
              prompt:
                'Choose the most appropriate future forms: (1) "Look at the disk usage at 99.9%! The database ______ fail any second!" (2) "According to the official academic calendar, the first semester exams ______ on Monday at 8:00 AM."',
              options: [
                '(1) will / (2) will start',
                '(1) is going to / (2) start',
                '(1) is failing / (2) are starting',
                '(1) fails / (2) are going to start',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans (1), *"Look at the disk usage at 99.9%!"* est une preuve visible immédiate annonçant un événement imminent $\\rightarrow$ **`is going to`** (*is going to fail*). Dans (2), il s\'agit d\'un calendrier/horaire officiel (*official academic calendar*) $\\rightarrow$ **Present Simple** (**`start`**).',
              hint: '(1) Indice concret sous nos yeux = be going to ; (2) Horaire officiel = Present Simple.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Future Time Clauses',
            stepTheme: 'orange',
            stepTitle: 'Le piège des subordonnées de temps au futur (When, As soon as, Until)',
            paragraphText:
              'En français, on met le futur après « quand, dès que, tant que » (*Dès que le serveur **redémarrera**, je **testerai** la connexion*). En anglais, c\'est **strictement interdit** !\nDans une **subordonnée circonstancielle de temps** renvoyant au futur et introduite par **`when`** (quand), **`as soon as`** (dès que), **`until / till`** (jusqu\'à ce que), **`before`** (avant que), **`after`** (après que), **`once`** (une fois que) ou **`while`** (pendant que), le verbe se met obligatoirement au **Present Simple** (ou au **Present Perfect** pour insister sur l\'achèvement), **JAMAIS avec `will`** :\n- **Structure officielle** : **`When / As soon as / Until + Subject + Present Simple, Subject + will + Base Verb`**.\n- Exemple : *As soon as the patch **downloads** (ou **has downloaded**), we **will restart** the workstation.* (Écrire *As soon as the patch will download* est une erreur grammaticale majeure).',
            keyRule:
              'JAMAIS de **`will`** (ni de **`would`**) directement après `when, as soon as, until, before, after, once, as long as` dans une subordonnée temporelle !',
            konanTip:
              'C\'est l\'un des pièges les plus fréquents aux examens d\'anglais : dès que le trou à compléter se trouve dans la proposition qui commence par `As soon as`, `Until` ou `When`, barre immédiatement toutes les options contenant `will` !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c1_p3_ex6',
              type: 'mcq',
              prompt:
                'Complete the sentence correctly: "The network users ______ able to access the intranet until the administrator ______ the DNS configuration."',
              options: [
                'won\'t be / will fix',
                'aren\'t / will fix',
                'won\'t be / fixes',
                'won\'t be / fixed',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La proposition principale exprime une conséquence future (**`won\'t be`** = *will not be*), tandis que la subordonnée temporelle introduite par **`until`** (« jusqu\'à ce que ») refuse catégoriquement `will` et prend le **Present Simple** à la 3e personne du singulier (**`fixes`**).',
              hint: 'Pas de "will" dans la proposition introduite par "until" !',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : MODAL VERBS, CONDITIONALS & THE PASSIVE VOICE
  // ==========================================================================
  {
    id: 'lmd_srit_l1_anglais_ch2',
    subjectId: 'lmd_anglais',
    gradeLevel: 'lmd_srit_l1',
    alsoForGrades: ['lmd_entd_l1'],
    semesters: [1, 2],
    order: 2,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Anglais Licence 1 (SRIT 1 & ENTD 1)',
    title: 'Chapitre 2 : Modal Verbs, Conditionals & The Passive Voice (Modaux, Conditionnels et Voix Passive)',
    summary:
      'Maîtriser les auxiliaires modaux (obligation, interdiction, conseil, capacité, probabilité), les quatre structures conditionnelles (Zero, First, Second, Third Conditionals & Unless) et la transformation à la voix passive en anglais général et technique.',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1 : Modal Verbs
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c2_p1',
        order: 1,
        title: 'Modal Verbs: Obligation, Prohibition, Advice, Ability & Deduction',
        summary:
          'Employer avec rigueur les auxiliaires modaux (must, have to, mustn\'t, don\'t have to, should, ought to, can, could, be able to, may, might) au présent et au passé.',
        conceptExplanation:
          'Les **Modal Verbs** (`can, could, may, might, must, shall, should, will, would`) sont des auxiliaires spéciaux qui expriment le point de vue de l\'énonciateur sur l\'action : obligation, interdiction, absence de nécessité, conseil, capacité, permission ou degré de certitude logique (déduction). En anglais technique et professionnel (normes ISO, RFC, chartes de cybersécurité), une confusion entre `mustn\'t` et `don\'t have to` ou entre `must` et `might` change radicalement le sens d\'une règle.',
        formulas: [
          {
            name: 'Syntaxe universelle d\'un modal pur',
            formula: '\\text{Subject} + \\text{Modal (invariable)} + \\text{Base Verb (without to)}',
            note: 'Pas de -s à la 3e pers., pas de do/does/did, pas de to (sauf ought to)',
          },
          {
            name: 'Déduction logique au passé (Past Modals)',
            formula: '\\text{must / can\'t / may / might / could} + \\text{have} + \\text{Past Participle}',
            note: 'must have V-ed (quasi certain) | can\'t have V-ed (impossible) | might have V-ed (possible)',
          },
        ],
        keyRule:
          '`mustn\'t` = interdiction absolue (*It is forbidden*) $\\neq$ `don\'t have to / needn\'t` = absence d\'obligation (*It is not necessary, it is optional*).',
        workedExample: {
          title: 'Règles de sécurité dans un Data Center',
          statement:
            'Choisissez le bon modal : (1) "Visitors ______ enter the server room without a badge; it is strictly prohibited." (2) "You ______ bring your own Ethernet cable; the lab already provides Wi-Fi."',
          methodSteps: [
            'Phrase (1) : "strictly prohibited" exprime une interdiction formelle -> "mustn\'t" (ou "must not").',
            'Phrase (2) : Le laboratoire fournit déjà le Wi-Fi, donc apporter un câble n\'est pas interdit mais simplement inutile/facultatif -> "don\'t have to".',
          ],
          conclusion: '(1) mustn\'t ; (2) don\'t have to.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Golden Rules of Modals',
            stepTheme: 'blue',
            stepTitle: 'Les 4 règles d\'or syntaxiques des auxiliaires modaux',
            paragraphText:
              'Les auxiliaires modaux purs (**`can, could, may, might, must, shall, should, will, would`**) obéissent à 4 règles syntaxiques strictes qui ne souffrent aucune exception :\n1) **Invariabilité totale** : ils ne prennent **JAMAIS de `-s`** à la 3e personne du singulier (*He can code*, jamais *He cans*).\n2) **Suivis directement de la Base Verbale sans `to`** (infinitif nu) : *You must encrypt the file* (jamais *You must to encrypt*). La seule exception parmi les semi-modaux est **`ought to + BV`** (= `should`).\n3) **Aucun auxiliaire `do / does / did`** : la négation se forme en ajoutant `not` après le modal (`cannot / can\'t, mustn\'t, shouldn\'t`) et la question par inversion directe (`Can this switch handle VLANs?`).\n4) **Pas de conjugaison directe aux temps composés ni deux modaux côte à côte** : il est interdit d\'écrire *will can* ou *has must*. On utilise alors les **équivalents** : **`be able to`** (pour `can`), **`have to`** (pour `must`) et **`be allowed to`** (pour `may/can`). Exemple au futur : *With 5G, users **will be able to download** movies in seconds*.',
            keyRule:
              'Jamais deux modaux à la suite (*will can* est FAUX $\\rightarrow$ **`will be able to + BV`** ; *will must* est FAUX $\\rightarrow$ **`will have to + BV`**).',
            konanTip:
              'Si dans un QCM tu vois `to` juste après `must, can, could, should, may, might, will, would`, élimine l\'option en une seconde ! Seuls `have to`, `ought to`, `be able to` et `be allowed to` comportent `to`.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p1_ex1',
              type: 'mcq',
              prompt:
                'Which sentence respects the syntactic rules of English modal verbs?',
              options: [
                'After completing this Cisco certification, she will can configure enterprise routers.',
                'Does the system administrator must to reboot the server tonight?',
                'After completing this Cisco certification, she will be able to configure enterprise routers.',
                'He musts update the antivirus definitions before connecting to the LAN.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On ne peut jamais juxtaposer deux modaux (*will can* est impossible) : au futur, on remplace `can` par son équivalent **`be able to`**, ce qui donne **`will be able to configure`**.',
              hint: 'Peut-on mettre "will" et "can" côte à côte ?',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Obligation & Advice',
            stepTheme: 'violet',
            stepTitle: 'Obligation (Must vs Have to) et Conseil (Should, Ought to, Had better)',
            paragraphText:
              'Pour exprimer l\'**obligation** au présent :\n- **`must + BV`** exprime une obligation forte émanant de celui qui parle, une consigne directe ou une nécessité vitale (*You **must** back up your thesis today!*).\n- **`have to / has to + BV`** exprime une obligation externe imposée par un règlement, une loi ou les circonstances (*At university, all students **have to** pass their semester exams*). Au passé, `must` n\'ayant pas de prétérit d\'obligation, on utilise obligatoirement **`had to + BV`** (*Yesterday, we **had to** replace the faulty switch*).\nPour exprimer le **conseil ou la recommandation** :\n- **`should / shouldn\'t + BV`** et son synonyme **`ought to / ought not to + BV`** expriment ce qui est souhaitable ou recommandé (*You **should enable** two-factor authentication* = *You **ought to enable** 2FA*).\n- **`had better (not) + BV`** (« ferait mieux de ») exprime un conseil urgent assorti d\'un risque en cas de non-respect (*You **had better save** your work before the battery dies*). Au passé, **`should have + Past Participle`** exprime un **reproche ou un regret** (*You **should have encrypted** the hard drive* = tu aurais dû le chiffrer, mais tu ne l\'as pas fait).',
            keyRule:
              'Attention à **`had better`** : malgré le mot `had`, il renvoie au **présent/futur** et est suivi directement de la **Base Verbale sans `to`** (*We had better leave now* / *You had better not click that link*).',
            konanTip:
              '`Should have + Past Participle` = reproche sur le passé (« tu aurais dû... »). `Had better (not) + BV` = conseil urgent au présent sans `to` !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p1_ex2',
              type: 'mcq',
              prompt:
                'Complete the sentence: "The battery is at 2%! You ______ save your Python script immediately; actually, you ______ plugged in your charger an hour ago."',
              options: [
                'had better to / should have',
                'had better / should have',
                'should have / had better',
                'ought / must',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour le conseil urgent dans l\'immédiat (*The battery is at 2%!*), on utilise **`had better + Base Verb`** (sans `to` : *You **had better** save*). Pour le regret/reproche portant sur une action passée non réalisée (*an hour ago*), on utilise **`should have + Past Participle`** (*you **should have** plugged in*).',
              hint: '"had better" est toujours suivi de la base verbale sans "to" ; "should have + participe passé" exprime un reproche/regret sur le passé.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Mustn\'t vs Don\'t have to',
            stepTheme: 'orange',
            stepTitle: 'Le piège d\'examen n°1 : Mustn\'t (Interdiction) vs Don\'t have to (Absence de nécessité)',
            paragraphText:
              'À la forme affirmative, `must` et `have to` sont très proches (tous deux expriment une obligation). Mais à la **forme négative**, leurs sens deviennent **totalement opposés** :\n1) **`must not / mustn\'t + BV`** exprime une **interdiction formelle (`Prohibition`)** : il est strictement défendu de faire l\'action (*It is forbidden / prohibited / not allowed*). Exemple : *Employees **mustn\'t share** their corporate VPN passwords with anyone.*\n2) **`do not have to / don\'t have to / doesn\'t have to + BV`** (ou **`needn\'t + BV`** / **`don\'t need to + BV`**) exprime une **absence d\'obligation (`Lack of necessity`)** : ce n\'est pas obligatoire, tu peux le faire si tu veux, mais ce n\'est pas nécessaire (*It is not necessary / It is optional*). Exemple : *The software update is automatic, so users **don\'t have to install** it manually.*\nConfondre ces deux formes dans un QCM ou un cahier des charges technique revient à confondre « interdit » et « facultatif » !',
            keyRule:
              '**`mustn\'t`** = INTERDIT (*Don\'t do it!*) $\\neq$ **`don\'t/doesn\'t have to`** = PAS OBLIGATOIRE (*You don\'t need to do it*).',
            konanTip:
              'Cherche l\'indice sémantique dans la phrase : si tu vois *forbidden, prohibited, dangerous, confidential, against the rules* $\\rightarrow$ **`mustn\'t`**. Si tu vois *optional, free, automatic, already done, if you don\'t want to* $\\rightarrow$ **`don\'t / doesn\'t have to`**.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p1_ex3',
              type: 'mcq',
              prompt:
                'Choose the correct pair of modals: "Students ______ use the open-source software from home for free — they ______ buy a commercial license — but they ______ use it for illegal hacking."',
              options: [
                'can / mustn\'t / don\'t have to',
                'can / don\'t have to / mustn\'t',
                'must / don\'t have to / needn\'t',
                'may / mustn\'t / shouldn\'t to',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les étudiants **peuvent** (**`can`**) utiliser le logiciel gratuitement ; ils **n\'ont pas besoin** (**`don\'t have to`**, absence d\'obligation) d\'acheter une licence commerciale ; mais il leur est **strictement interdit** (**`mustn\'t`**, prohibition) de s\'en servir pour du piratage illégal.',
              hint: 'Ne pas avoir besoin d\'acheter une licence (gratuit) = don\'t have to ; interdiction du piratage = mustn\'t.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Ability & Permission',
            stepTheme: 'green',
            stepTitle: 'Capacité et Permission : la nuance subtile entre Could et Was/Were able to',
            paragraphText:
              'Au présent, **`can`** exprime la capacité technique ou physique (*This optical transceiver **can** reach 40 Gbps*) et la permission courante. Pour une demande de permission polie ou formelle, on privilégie **`Could I... ?`** ou **`May I... ?`** (*May I access the server logs?*).\nAu **passé**, une distinction grammaticale essentielle oppose **`could`** et **`was / were able to`** :\n- **`could + BV`** exprime une **capacité générale et permanente dans le passé** (*When he was 15, he **could already program** in C++*), ou s\'utilise avec les verbes de perception (`see, hear, smell, understand`) et à la **forme négative** dans tous les cas (`couldn\'t` = `wasn\'t able to`).\n- **`was / were able to + BV`** (ou **`managed to + BV`** / **`succeeded in + V-ing`**) est **obligatoire** à la forme affirmative pour exprimer une **action ponctuelle difficile réussie à une occasion précise du passé** :\n  *After three hours of troubleshooting, the engineer **was able to restore** (ou **managed to restore**, JAMAIS *could restore*) the corrupted database.*',
            keyRule:
              'Performance ponctuelle réussie dans le passé (affirmative) = **`was / were able to + BV`** (ou **`managed to + BV`**), PAS `could` ! (À la négative, **`couldn\'t`** est toujours correct).',
            konanTip:
              'Si la phrase raconte un exploit unique réussi après un effort particulier (*Yesterday, despite the power cut, the team ______ save all the files*), ne coche jamais `could` à l\'affirmative : choisis **`was/were able to`** ou **`managed to`** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p1_ex4',
              type: 'mcq',
              prompt:
                'Complete the sentence: "The ransomware attack was extremely sophisticated, but fortunately our cybersecurity engineers ______ isolate the infected subnet before the virus spread."',
              options: [
                'could',
                'were able to',
                'can',
                'managed',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Il s\'agit d\'une réussite ponctuelle dans une situation critique précise du passé (à la forme affirmative) : on ne peut pas utiliser `could`, il faut obligatoirement **`were able to`** (ou *managed **to***, mais l\'option D omet *to*).',
              hint: 'Pour un succès ponctuel au passé à la forme affirmative, on utilise "was/were able to" et non "could".',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Logical Deduction',
            stepTheme: 'blue',
            stepTitle: 'Les modaux de déduction logique et de probabilité (Présent et Passé)',
            paragraphText:
              'En diagnostic informatique ou scientifique, les modaux servent à évaluer la **probabilité logique** d\'une hypothèse :\n1) **Quasi-certitude positive ($95\\%$ sûr que OUI)** : **`must + BV`** au présent (*The ping reply is 1 ms; the server **must be** on the local network*) et **`must have + Past Participle`** au passé (*The logs were deleted; the intruder **must have gained** root access*).\n2) **Possibilité / Incertitude ($30\\%$ à $50\\%$ — « peut-être »)** : **`may / might / could + BV`** au présent (*The high latency **might be** due to a faulty cable*) et **`may / might / could have + Past Participle`** au passé (*He **might have forgotten** to open port 443*).\n3) **Quasi-certitude négative / Impossibilité logique ($95\\%$ sûr que NON)** : **`can\'t + BV`** (ou **`couldn\'t + BV`**) au présent (*That IP address is 256.0.0.1; it **can\'t be** valid!*) et **`can\'t have / couldn\'t have + Past Participle`** au passé (*She **can\'t have sent** that email yesterday because her account was disabled*).\nAttention : l\'opposé de **`must be`** (déduction positive) est **`can\'t be`** (déduction négative), **JAMAIS `mustn\'t be`** !',
            keyRule:
              'En déduction logique : Certitude positive = **`must (have)`** | Possibilité = **`may / might / could (have)`** | Impossibilité logique = **`can\'t (have)`** (jamais `mustn\'t` !).',
            konanTip:
              'Grave cette règle dans ta mémoire : pour dire « Ce n\'est certainement pas possible / Il n\'a pas pu faire cela », l\'anglais dit **`It can\'t be / He can\'t have done it`** (et jamais *It mustn\'t be*).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Échelle de certitude des modaux de déduction (Présent & Passé)',
              caption: 'Du diagnostic quasi certain (95% OUI) à l\'impossibilité logique (95% NON)',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: '95% YES',
                    title: 'MUST + BV  /  MUST HAVE + Past Participle',
                    subtitle: 'Quasi-certitude positive ("It must be a DNS issue" / "It must have crashed")',
                    color: 'green',
                  },
                  {
                    badge: '50% MAYBE',
                    title: 'MAY / MIGHT / COULD + BV  /  MAY / MIGHT / COULD HAVE + V-pp',
                    subtitle: 'Hypothèse possible mais incertaine ("The cable might be damaged")',
                    color: 'violet',
                  },
                  {
                    badge: '95% NO',
                    title: 'CAN\'T + BV  /  CAN\'T HAVE + Past Participle',
                    subtitle: 'Impossibilité logique ("It can\'t be a power cut, the UPS is green!") — JAMAIS mustn\'t !',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p1_ex5',
              type: 'mcq',
              prompt:
                'Choose the correct modal of deduction: "The server LEDs are completely off and the cooling fans are silent; the power supply ______ failed! It ______ be a simple software bug."',
              options: [
                'must have / mustn\'t',
                'might / can',
                'must have / can\'t',
                'should have / needn\'t',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les indices matériels (LED éteintes, ventilateurs silencieux) rendent la panne d\'alimentation passée quasi certaine $\\rightarrow$ **`must have`** (*must have failed*). Inversement, il est logiquement impossible que ce soit un simple bug logiciel $\\rightarrow$ **`can\'t`** (*It can\'t be...*, jamais *mustn\'t be*).',
              hint: 'Déduction positive passée = must have + V-pp ; déduction négative (impossibilité logique) = can\'t.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'IT Policy Synthesis',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Charte de sécurité et diagnostic d\'incident',
            paragraphText:
              'Récapitulons tous les modaux à travers une charte de sécurité réseau :\n1) *All remote employees **must / have to** connect through the corporate VPN.* (Obligation)\n2) *You **mustn\'t** plug unknown USB drives into company laptops.* (Interdiction stricte)\n3) *You **don\'t have to** reboot your PC after this minor patch; it is optional.* (Absence de nécessité)\n4) *Users **should / ought to** change their passphrase every 90 days.* (Recommandation)\n5) *The firewall **can\'t have blocked** your request because port 80 is open; the web server itself **must be** down.* (Déduction logique passé / présent).',
            keyRule:
              'Toujours identifier la fonction pragmatique de la phrase (Règle obligatoire ? Interdiction ? Optionnel ? Conseil ? Déduction logique ?) avant de choisir le modal.',
            konanTip:
              'Attention aussi à **`could have + Past Participle`** qui peut signifier « aurait pu se produire (mais n\'a pas eu lieu) » : *Without the UPS, the power surge **could have destroyed** the motherboard*.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p1_ex6',
              type: 'mcq',
              prompt:
                'Select the correct option: "Why hasn\'t the intern submitted the network topology diagram yet? — He ______ forgotten the deadline, or he ______ still be working on Packet Tracer."',
              options: [
                'can\'t / mustn\'t',
                'might have / might',
                'must / should have',
                'ought to / can',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le locuteur émet deux hypothèses incertaines (*or*) : l\'une porte sur un oubli passé ($\\rightarrow$ **`might have`** *forgotten*), l\'autre sur une action peut-être en cours en ce moment ($\\rightarrow$ **`might`** *still be working*).',
              hint: 'Il s\'agit de deux hypothèses possibles ("or") : la première au passé (devant le participe passé "forgotten"), la seconde au présent (devant la base verbale "be").',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2 : Conditional Sentences (0, 1st, 2nd, 3rd) & Unless
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c2_p2',
        order: 2,
        title: 'Conditional Sentences (Zero, First, Second, Third) & Unless',
        summary:
          'Maîtriser la concordance stricte des temps dans les quatre types de phrases conditionnelles (Type 0, Type 1, Type 2, Type 3) ainsi que l\'usage de unless, provided that et in case.',
        conceptExplanation:
          'Une phrase conditionnelle (**Conditional Sentence**) se compose d\'une proposition subordonnée de condition (**`If-clause`**) et d\'une proposition principale de conséquence (**`Main clause`**). En anglais, la concordance des temps entre les deux propositions est mathématique : chaque degré de réalité (vérité générale, futur probable, hypothèse irréelle au présent, regret irréel au passé) correspond à une équation temporelle unique.',
        formulas: [
          {
            name: 'Zero & First Conditionals (Réel)',
            formula: '\\text{Type 0: If + Present, Present} \\quad | \\quad \\text{Type 1: If + Present, will + BV}',
            note: 'Type 0 = vérité scientifique/systématique ; Type 1 = hypothèse future réaliste',
          },
          {
            name: 'Second & Third Conditionals (Irréel)',
            formula: '\\text{Type 2: If + Past Simple, would + BV} \\quad | \\quad \\text{Type 3: If + Past Perfect, would have + V}_{\\text{PP}}',
            note: 'Type 2 = irréel du présent ; Type 3 = irréel du passé (had + V-pp -> would have + V-pp)',
          },
        ],
        keyRule:
          'Règle absolue des Conditionals : on ne met **JAMAIS `will`, `would` ou `would have` dans la proposition introduite par `If` ou `Unless`** !',
        workedExample: {
          title: 'Identifier et compléter les 3 grands Conditionals d\'examen',
          statement:
            'Complétez avec `upload` : (1) "If you ______ the file now, the team will review it tonight." (2) "If you ______ the file, the team would review it." (3) "If you ______ the file yesterday, the team would have reviewed it."',
          methodSteps: [
            'Phrase (1) : Main clause en "will review" (1st Conditional) -> If-clause au Present Simple : "upload".',
            'Phrase (2) : Main clause en "would review" (2nd Conditional) -> If-clause au Past Simple : "uploaded".',
            'Phrase (3) : Main clause en "would have reviewed" (3rd Conditional) -> If-clause au Past Perfect : "had uploaded".',
          ],
          conclusion: '(1) upload ; (2) uploaded ; (3) had uploaded.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Zero Conditional',
            stepTheme: 'blue',
            stepTitle: 'Le Zero Conditional (Type 0) : lois scientifiques et logique algorithmique',
            paragraphText:
              'Le **Zero Conditional** obéit à la formule **`If / When + Present Simple, Present Simple`**. Il s\'emploie lorsque la conséquence est **toujours vraie à $100\\%$** dès que la condition est remplie : lois de la physique, règles mathématiques, spécifications de protocoles réseau ou comportement déterministe d\'un programme informatique.\n- Exemples : *If you **heat** silicon above $1414^\\circ\\text{C}$, it **melts**.* / *If a router **receives** a packet with a TTL of zero, it **drops** the packet and **sends** an ICMP error message.*\nDans le Zero Conditional, on peut remplacer **`If`** par **`When`** ou **`Whenever`** (« chaque fois que ») sans changer le sens de la phrase.',
            keyRule:
              '**Zero Conditional** : `If + Present Simple, Present Simple` (cause $\\rightarrow$ effet systématique et universel).',
            konanTip:
              'Lorsque la phrase décrit une règle de protocole informatique ou une loi physique toujours vérifiée sans référence à un événement futur particulier, utilise le **Zero Conditional** (`Present Simple / Present Simple`).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p2_ex1',
              type: 'mcq',
              prompt:
                'Complete this technical rule using the Zero Conditional: "In a relational database, if a transaction ______ an integrity constraint, the DBMS automatically ______ it back."',
              options: [
                'will violate / rolls',
                'violates / rolls',
                'violated / would roll',
                'violates / would roll',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Il s\'agit d\'une règle de fonctionnement systématique d\'un SGBD (*automatically*) $\\rightarrow$ **Zero Conditional (`If + Present Simple, Present Simple`)** : **`violates / rolls`** (sujets singuliers `a transaction` et `the DBMS`).',
              hint: 'Une règle informatique universelle ("automatically") utilise le Zero Conditional : Present Simple dans les deux propositions.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'First Conditional',
            stepTheme: 'violet',
            stepTitle: 'Le First Conditional (Type 1) : hypothèses réalistes et probables dans le futur',
            paragraphText:
              'Le **First Conditional** suit la formule **`If + Present Simple, will (ou can / may / must / Imperative) + Base Verb`**. Il sert à exprimer une condition **tout à fait possible et réaliste** concernant une situation précise dans le présent ou le futur :\n- *If we **upgrade** our fiber subscription to 1 Gbps, the download speed **will increase** tenfold.*\n- *If the server **doesn\'t respond** within 30 seconds, **restart** (Impératif) the service.*\nAttention au piège du français : en français comme en anglais, la `If-clause` est au **Present Simple** (JAMAIS `If we will upgrade`). Lorsque la `If-clause` est placée en tête de phrase, on met une **virgule** avant la proposition principale ; si la principale est en premier, il n\'y a pas de virgule (*The download speed will increase if we upgrade our fiber*).',
            keyRule:
              '**First Conditional** : `If + Present Simple, will (won\'t) + Base Verb` (JAMAIS de `will` dans la proposition en `If`).',
            konanTip:
              'Dans un exercice, regarde toujours la proposition qui est déjà conjuguée : si tu vois **`will + BV`** (ou **`won\'t + BV`**) dans la principale, le verbe de la proposition en `If` doit impérativement être au **Present Simple** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p2_ex2',
              type: 'mcq',
              prompt:
                'Complete the First Conditional sentence: "If the developer ______ (not / sanitize) user inputs properly, the web application ______ (be) vulnerable to SQL injection attacks."',
              options: [
                'won\'t sanitize / will be',
                'doesn\'t sanitize / will be',
                'didn\'t sanitize / will be',
                'doesn\'t sanitize / would be',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Au **First Conditional**, la subordonnée en `If` se construit au **Present Simple** (**`doesn\'t sanitize`** avec le sujet singulier *the developer*) et la proposition principale au futur avec **`will + BV`** (**`will be`**).',
              hint: 'First Conditional = If + Present Simple, will + Base Verb.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Second Conditional',
            stepTheme: 'green',
            stepTitle: 'Le Second Conditional (Type 2) : hypothèses irréelles ou imaginaires au présent',
            paragraphText:
              'Le **Second Conditional** obéit à la formule **`If + Past Simple, would (ou could / might) + Base Verb`**. Bien que le verbe après `If` soit au **Past Simple**, ce conditionnel ne parle **PAS du passé** : il exprime une **hypothèse irréelle, contraire à la réalité actuelle**, ou très peu probable dans le présent/futur :\n- *If our startup **had** (Past Simple) a million dollars right now, we **would build** (`would + BV`) our own data center.* (Sous-entendu : en réalité, nous n\'avons pas un million de dollars aujourd\'hui).\n**Règle spéciale du verbe `BE` au Second Conditional** : en anglais académique et dans tous les examens officiels, le verbe `be` prend la forme du subjonctif **`were` à toutes les personnes** (y compris avec `I, he, she, it`), notamment dans la formule de conseil **`If I were you, I would + BV...`** (*If the network **were** faster, we **would not experience** this lag*).',
            keyRule:
              '**Second Conditional** : `If + Past Simple (were pour be), would (wouldn\'t) + Base Verb`.',
            konanTip:
              'Retiens la formule classique des QCM : **`If I were you, I would...`** (en examen formel, préfère toujours **`were`** à `was` après `If I / he / she / it` au Second Conditional).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p2_ex3',
              type: 'mcq',
              prompt:
                'Choose the correct Second Conditional sentence:',
              options: [
                'If I would be the Chief Information Officer, I would invest more in staff training.',
                'If I were the Chief Information Officer, I will invest more in staff training.',
                'If I were the Chief Information Officer, I would invest more in staff training.',
                'If I am the Chief Information Officer, I would invest more in staff training.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Il s\'agit d\'une situation hypothétique contraire à la réalité présente (**Second Conditional**) : `If + Past Simple / Subjunctive` (**`If I were...`**) suivi de **`would + Base Verb`** (**`I would invest...`**).',
              hint: 'Au Second Conditional : "If I were..., I would + BV" (jamais "would" après "If").',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Third Conditional',
            stepTheme: 'blue',
            stepTitle: 'Le Third Conditional (Type 3) : l\'irréel du passé et l\'analyse rétrospective',
            paragraphText:
              'Le **Third Conditional** suit la formule **`If + Past Perfect (had + Past Participle), would have (ou could have / might have) + Past Participle`**. C\'est le seul conditionnel qui porte sur le **passé** : il imagine comment une situation passée aurait pu tourner différemment si une condition passée avait été remplie (expression du regret, du reproche ou de l\'analyse post-mortem d\'un incident) :\n- *If the administrator **had installed** (`had + V-pp`) the security patch last week, the hackers **would not have compromised** (`wouldn\'t have + V-pp`) the server.* (Réalité passée : il n\'a pas installé le patch, et les pirates ont compromis le serveur).\nNote avancée pour les sujets d\'excellence : en anglais soutenu, on peut **inverser `Had + Subject + Past Participle`** en supprimant `If` : ***Had the administrator installed** the patch, the hackers wouldn\'t have compromised the server.*',
            keyRule:
              '**Third Conditional** : `If + had + Past Participle, would have + Past Participle` (JAMAIS `If + would have` !).',
            konanTip:
              'Attention au piège de contraction **`\'d`** : dans la `If-clause`, `he\'d tested` = **`he HAD tested`** (Past Perfect), tandis que dans la principale, `he\'d have passed` = **`he WOULD have passed`** !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Tableau synoptique des 4 Conditionals en Anglais',
              caption: 'Formules de concordance des temps entre la If-clause et la Main clause',
              matrix2x2: {
                topAxis: ['If-Clause (Condition)', 'Main Clause (Result)'],
                leftAxis: ['Conditionals 0 & 1 (Réel)', 'Conditionals 2 & 3 (Irréel)'],
                topLeft: {
                  title: 'Type 0 & Type 1 : If-Clause',
                  items: [
                    'Type 0 (Vérité générale) : If + Present Simple',
                    'Type 1 (Futur probable) : If + Present Simple',
                    'Interdiction absolue de "will" après If !',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Type 0 & Type 1 : Main Clause',
                  items: [
                    'Type 0 : Present Simple (it drops the packet)',
                    'Type 1 : will / can / may + Base Verb',
                    'Ou Impératif (call the helpdesk)',
                  ],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Type 2 & Type 3 : If-Clause',
                  items: [
                    'Type 2 (Irréel présent) : If + Past Simple (were)',
                    'Type 3 (Irréel passé) : If + Past Perfect (had + V-pp)',
                    'Inversion formelle Type 3 : Had + S + V-pp...',
                  ],
                  color: 'violet',
                },
                bottomRight: {
                  title: 'Type 2 & Type 3 : Main Clause',
                  items: [
                    'Type 2 : would / could / might + Base Verb',
                    'Type 3 : would / could / might + HAVE + V-pp',
                    'Interdiction absolue de "would" après If !',
                  ],
                  color: 'orange',
                },
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p2_ex4',
              type: 'mcq',
              prompt:
                'Complete the Third Conditional sentence: "If the telecom operator ______ (test) the failover link before the storm yesterday, thousands of subscribers ______ (not / lose) their internet connection."',
              options: [
                'tested / wouldn\'t lose',
                'would have tested / hadn\'t lost',
                'had tested / wouldn\'t have lost',
                'had tested / wouldn\'t lose',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L\'indice **`yesterday`** prouve qu\'on parle d\'un scénario irréel dans le **passé** (**Third Conditional**) : **`If + Past Perfect`** (**`had tested`**) dans la subordonnée, et **`wouldn\'t have + Past Participle`** (**`wouldn\'t have lost`**) dans la principale.',
              hint: 'Irréel du passé ("yesterday") = Third Conditional : If + had + V-pp, would(n\'t) have + V-pp.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Unless & Connectors',
            stepTheme: 'orange',
            stepTitle: 'Maîtriser Unless (= If ... not), Provided that, As long as et In case',
            paragraphText:
              'Les examens testent systématiquement la réécriture des phrases conditionnelles avec **`UNLESS`** (« à moins que / sauf si »), qui équivaut exactement à **`IF ... NOT`** :\n- Puisque **`unless`** contient déjà la négation, **le verbe qui suit `unless` est à la forme AFFIRMATIVE** (pas de double négation) et obéit à la même concordance des temps que `if` (pas de `will` après `unless`) :\n  *If you **don\'t enter** the correct PIN, the SIM card will lock.* $\\Longleftrightarrow$ ***Unless** you **enter** (affirmatif !) the correct PIN, the SIM card will lock.*\nRetiens également trois conjonctions conditionnelles très fréquentes en anglais technique :\n- **`provided (that)` / `providing (that)` / `as long as` / `so long as`** = « à condition que / tant que » (*You can use the cluster **as long as** you **don\'t exceed** your CPU quota*).\n- **`in case + Present Simple`** = « au cas où (mesure de précaution prise à l\'avance) » $\\neq$ `if` : *We keep a diesel generator on site **in case** there **is** a power outage* (on garde le générateur par précaution avant même qu\'il y ait une coupure).',
            keyRule:
              '`If + Subject + don\'t/doesn\'t + BV` $\\Longleftrightarrow$ **`Unless + Subject + Affirmative Verb (Present Simple)`**.',
            konanTip:
              'Pour transformer `If ... don\'t/doesn\'t` en `Unless`, supprime `don\'t/doesn\'t`, mais **n\'oublie surtout pas de remettre le `-s` au verbe si le sujet est à la 3e personne du singulier** (*If he doesn\'t pay* $\\rightarrow$ *Unless he **pays***) !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p2_ex5',
              type: 'mcq',
              prompt:
                'Choose the sentence that has the EXACT same meaning as: "If the client does not renew the SSL certificate today, browsers will display a security warning."',
              options: [
                'Unless the client does not renew the SSL certificate today, browsers will display a security warning.',
                'Unless the client renew the SSL certificate today, browsers will display a security warning.',
                'Unless the client will renew the SSL certificate today, browsers will display a security warning.',
                'Unless the client renews the SSL certificate today, browsers will display a security warning.',
              ],
              correctAnswerIndex: 3,
              explanation:
                '**`Unless`** remplace **`If ... does not`**. Le verbe passe donc à la forme affirmative du **Present Simple** et s\'accorde avec le sujet singulier `the client` (3e personne du singulier $\\rightarrow$ **`renews`** avec `-s`, sans `will`).',
              hint: 'Unless = If ... not -> verbe affirmatif au Present Simple. N\'oubliez pas le "-s" avec "the client" !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Disaster Recovery Cases',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Arbitrer entre les 4 Conditionals en examen',
            paragraphText:
              'Comment identifier instantanément quel Conditional appliquer le jour de l\'examen ?\n1) **Regarde le verbe déjà conjugué dans l\'autre proposition** :\n   - Principale en `Present Simple` $\\rightarrow$ `If + Present Simple` (Type 0)\n   - Principale en `will + BV` $\\rightarrow$ `If + Present Simple` (Type 1)\n   - Principale en `would + BV` $\\rightarrow$ `If + Past Simple` (Type 2)\n   - Principale en `would have + V-pp` $\\rightarrow$ `If + had + V-pp` (Type 3)\n2) **Si les deux verbes sont à conjuguer**, regarde l\'indice temporel et le réalisme : un marqueur du **passé** (`yesterday, last week, in 2020`) impose à $100\\%$ le **Third Conditional** (`had V-pp / would have V-pp`).',
            keyRule:
              'Symétrie infaillible : `Present` $\\leftrightarrow$ `will + BV` (Type 1) | `Past Simple` $\\leftrightarrow$ `would + BV` (Type 2) | `had + V-pp` $\\leftrightarrow$ `would have + V-pp` (Type 3).',
            konanTip:
              'Vérifie aussi l\'inversion formelle du Type 3 sans `If` : ***Had we known** about the bug earlier, we **would have fixed** it* (= *If we had known...*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p2_ex6',
              type: 'mcq',
              prompt:
                'Identify the correct form for this formal inversion: "______ the data center had a secondary fiber link last month, the outage would not have lasted twelve hours."',
              options: [
                'If',
                'Unless',
                'Had',
                'Would',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans la proposition *"______ the data center had a secondary fiber link last month..."*, le premier mot manquant est l\'auxiliaire du Past Perfect placé en inversion devant le sujet (remplaçant *If the data center **had** had...*) : **`Had`** (*Had the data center had...*). Si on mettait *If*, on n\'aurait qu\'un seul *had* (Past Simple, incompatible avec *last month* et *would not have lasted*).',
              hint: 'Au Third Conditional ("last month" + "would not have lasted"), le Past Perfect du verbe "have" est "had had". En inversion sans "If", le premier "Had" passe devant le sujet.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3 : The Passive Voice in General & Technical English
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c2_p3',
        order: 3,
        title: 'The Passive Voice in General & Technical English',
        summary:
          'Transformer une phrase active à la voix passive à tous les temps et avec les modaux, maîtriser le passif à deux compléments et les structures impersonnelles (It is said that / He is known to...).',
        conceptExplanation:
          'Dans la littérature scientifique, les rapports d\'ingénierie IT et les normes de télécommunications, la **Voix Passive (`Passive Voice`)** est omniprésente car elle met l\'accent sur l\'**objet, le système ou le processus technique** qui subit l\'action plutôt que sur l\'opérateur humain (*The packets are encrypted using AES-256*). Sa construction repose toujours sur une formule invariable : l\'auxiliaire **`BE` conjugué exactement au temps du verbe actif**, suivi du **Participe Passé (`Past Participle`)** du verbe lexical.',
        formulas: [
          {
            name: 'Formule universelle de la Voix Passive',
            formula: '\\text{Object}_{\\text{active}} \\rightarrow \\text{Subject}_{\\text{passive}} + \\mathbf{BE}_{(\\text{temps actif})} + \\mathbf{Past\\;Participle} + (\\text{by Agent})',
            note: 'Present: am/is/are + V-pp | Past: was/were + V-pp | Continuous: be + being + V-pp | Perfect: have/has/had + been + V-pp | Modal: modal + be + V-pp',
          },
          {
            name: 'Passif impersonnel & personnel des verbes d\'opinion',
            formula: '\\text{It is said/known that } S + V \\; \\Longleftrightarrow \\; S + \\text{is said/known to } + \\text{BV (or have + V}_{\\text{PP}}\\text{)}',
            note: 'Avec say, think, believe, know, report, expect, estimate, consider',
          },
        ],
        keyRule:
          'Pour ne jamais te tromper de temps au passif : identifie le temps du verbe actif, conjugue **`BE`** à ce temps exact, puis ajoute le **Past Participle** (3e colonne) du verbe principal.',
        workedExample: {
          title: 'Transformation Active -> Passive au Present Continuous et avec un Modal',
          statement:
            'Mettez à la voix passive : (1) "The technicians are installing the new optical switches." (2) "All users must change their passwords immediately."',
          methodSteps: [
            'Phrase (1) : L\'objet "the new optical switches" (pluriel) devient sujet. Le verbe actif "are installing" est au Present Continuous -> BE au Present Continuous pluriel = "are being" + Past Participle "installed" -> "The new optical switches are being installed by the technicians."',
            'Phrase (2) : L\'objet "their passwords" devient sujet. Le verbe actif comporte un modal ("must change") -> Modal + BE + Past Participle = "must be changed" -> "Their passwords must be changed immediately by all users."',
          ],
          conclusion:
            '(1) The new optical switches are being installed by the technicians. (2) Their passwords must be changed immediately.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Passive Mechanism',
            stepTheme: 'blue',
            stepTitle: 'Le mécanisme fondamental de la Voix Passive (BE + Past Participle)',
            paragraphText:
              'Lors du passage de la **Voix Active (`Active Voice`)** à la **Voix Passive (`Passive Voice`)** :\n1) Le **complément d\'objet (Object)** de la phrase active devient le **nouveau sujet** de la phrase passive ;\n2) Le verbe est remplacé par **`BE` (conjugué exactement au même temps que le verbe actif, et accordé en nombre avec le nouveau sujet) + le `Past Participle`** (`-ed` ou 3e colonne) du verbe principal ;\n3) Le sujet initial devient le **complément d\'agent** introduit par **`by`** (*by the engineer*), mais on **omet `by + agent`** lorsque l\'auteur de l\'action est inconnu, évident ou général (`someone, somebody, people, they, we` : *Someone stole my laptop* $\\rightarrow$ *My laptop was stolen*, sans *by someone*).\nAttention aux pronoms personnels qui passent de la forme complément à la forme sujet (et inversement après `by`) : `me <-> I`, `him <-> he`, `her <-> she`, `us <-> we`, `them <-> they`.',
            keyRule:
              'Un passif anglais comporte **TOUJOURS deux éléments indissociables** : une forme de l\'auxiliaire **`BE`** + un **`Past Participle`**.',
            konanTip:
              'N\'oublie jamais d\'accorder `is/are`, `was/were` ou `has/have been` avec le **nouveau sujet** passif, pas avec l\'ancien sujet actif ! (*The engineer [sing.] configured **the routers [plur.]*** $\\rightarrow$ ***The routers were** configured...*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p3_ex1',
              type: 'mcq',
              prompt:
                'Transform into the Passive Voice: "Someone stole three laptops from the computer lab last night."',
              options: [
                'Three laptops was stolen from the computer lab last night by someone.',
                'Three laptops were stole from the computer lab last night.',
                'Three laptops were stolen from the computer lab last night.',
                'Three laptops have been stolen from the computer lab last night.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L\'objet pluriel **`Three laptops`** devient sujet. Le verbe actif `stole` est au **Past Simple** (`steal - stole - stolen`) et l\'indice `last night` impose le Past Simple : `BE` au Past Simple pluriel = **`were`** + Past Participle **`stolen`**. Le sujet vague `Someone` est omis.',
              hint: '"stole" est au Past Simple ("last night"), "Three laptops" est pluriel, et le participe passé de "steal" est "stolen".',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Tenses Table',
            stepTheme: 'green',
            stepTitle: 'Tableau de conversion Active -> Passive à tous les temps et avec les modaux',
            paragraphText:
              'Mémorise la correspondance exacte pour chaque temps sur le verbe modèle `encrypt` :\n- **Present Simple** (`encrypts`) $\\rightarrow$ **`am / is / are encrypted`** (*All files **are encrypted** by default*)\n- **Present Continuous** (`is encrypting`) $\\rightarrow$ **`am / is / are BEING encrypted`** (*The disk **is being encrypted** right now*)\n- **Past Simple** (`encrypted`) $\\rightarrow$ **`was / were encrypted`** (*The message **was encrypted** yesterday*)\n- **Past Continuous** (`was encrypting`) $\\rightarrow$ **`was / were BEING encrypted`** (*The data **was being encrypted** when the power failed*)\n- **Present Perfect** (`has encrypted`) $\\rightarrow$ **`have / has BEEN encrypted`** (*The database **has already been encrypted***)\n- **Past Perfect** (`had encrypted`) $\\rightarrow$ **`had BEEN encrypted`** (*The key **had been encrypted** before transmission*)\n- **Future & Modals** (`will / must / can / should / going to encrypt`) $\\rightarrow$ **`will / must / can / should / going to BE encrypted`** (*Passwords **must be encrypted***).',
            keyRule:
              'Temps en **`Continuous (-ing)`** au passif = présence obligatoire de **`BEING`** (`is/are/was/were + being + V-pp`). Temps en **`Perfect (have/has/had)`** au passif = présence obligatoire de **`BEEN`** (`have/has/had + been + V-pp`).',
            konanTip:
              'Ne confonds jamais **`being`** (après `am/is/are/was/were` pour le Continuous) et **`been`** (après `have/has/had` pour le Perfect) !',
            visualSchema: {
              type: 'flowchart',
              title: 'Algorithme de transformation Active -> Passive en 4 étapes',
              caption: 'Méthode systématique pour réussir toute question de réécriture au passif',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 'p1',
                    label: '1. Identifier l\'Objet (Object) de la phrase active',
                    sublabel: 'Le placer en tête de phrase comme nouveau Sujet (et vérifier s\'il est singulier ou pluriel)',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 'p2',
                    label: '2. Identifier le temps exact du verbe actif',
                    sublabel: 'Present/Past Simple ? Continuous (-ing) ? Perfect (have/had) ? Modal (will/must/can) ?',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    id: 'p3',
                    label: '3. Conjuguer BE à ce temps + ajouter le Past Participle (3e col.)',
                    sublabel: 'is/are | was/were | is/was BEING | has/had BEEN | modal BE  +  V-ed / 3e col.',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    id: 'p4',
                    label: '4. Ajouter "by + Agent" uniquement s\'il est informatif',
                    sublabel: 'Omettre by someone / by people / by they',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p3_ex2',
              type: 'mcq',
              prompt:
                'Choose the correct passive transformation of: "Our network engineers are currently upgrading the core routers."',
              options: [
                'The core routers are currently upgraded by our network engineers.',
                'The core routers have currently been upgraded by our network engineers.',
                'The core routers are currently being upgraded by our network engineers.',
                'The core routers is currently being upgraded by our network engineers.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le verbe actif **`are currently upgrading`** est au **Present Continuous**. Au passif avec le nouveau sujet pluriel **`The core routers`**, on utilise **`are + (currently) + being + Past Participle`** : **`The core routers are currently being upgraded by our network engineers`**.',
              hint: 'Au Present Continuous passif, il faut impérativement "am/is/are + BEING + Past Participle".',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Two-Object Verbs',
            stepTheme: 'violet',
            stepTitle: 'Le passif des verbes à deux compléments (give, send, offer, assign, grant)',
            paragraphText:
              'Certains verbes transitifs très courants (**`give, send, show, tell, offer, teach, pay, lend, promise, grant, assign, award`**) acceptent **deux compléments d\'objet** dans la phrase active : un **complément indirect de personne (`Indirect Object`, IO)** et un **complément direct de chose (`Direct Object`, DO)**.\nExemple actif : *The DHCP server assigned **each workstation (IO)** **a dynamic IP address (DO)**.*\nEn anglais, **chacun des deux compléments** peut devenir le sujet de la phrase passive, ce qui offre **deux transformations valides** :\n1) **Construction idiomatique privilégiée (la personne / le bénéficiaire devient sujet)** :\n   ***Each workstation** was assigned a dynamic IP address (by the DHCP server).*\n2) **Construction avec l\'objet direct comme sujet (ajout obligatoire de la préposition `to` ou `for` devant le bénéficiaire)** :\n   ***A dynamic IP address** was assigned **to** each workstation (by the DHCP server).*',
            keyRule:
              'Verbe à 2 objets (`give, send, offer, assign, grant`) $\\rightarrow$ **`Person + BE + V-pp + Thing`** (*She was offered a job*) OU **`Thing + BE + V-pp + to + Person`** (*A job was offered to her*).',
            konanTip:
              'L\'anglais adore mettre la **personne** en sujet passif (*I was told the truth / He has been given admin rights / The students were taught Python*), alors que le français ne peut pas dire *"Il a été donné des droits"*. C\'est une question classique aux examens !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p3_ex3',
              type: 'mcq',
              prompt:
                'Which two sentences are BOTH valid passive transformations of: "The IT director has granted the new intern temporary administrator privileges."?',
              options: [
                '(1) The new intern has been granted temporary administrator privileges. / (2) Temporary administrator privileges have been granted to the new intern.',
                '(1) To the new intern has been granted temporary administrator privileges. / (2) Temporary administrator privileges has been granted the new intern.',
                '(1) The new intern was granted temporary administrator privileges. / (2) Temporary administrator privileges were granted to the new intern.',
                '(1) The new intern has granted temporary administrator privileges. / (2) Temporary administrator privileges have been being granted to the new intern.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le verbe actif **`has granted`** est au **Present Perfect**. En prenant le bénéficiaire singulier **`The new intern`** comme sujet : **`has been granted...`**. En prenant l\'objet pluriel **`Temporary administrator privileges`** comme sujet : **`have been granted to the new intern`**.',
              hint: 'Respectez le temps du verbe actif (Present Perfect : has/have been granted) et l\'accord singulier/pluriel des deux sujets possibles.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Impersonal Passive',
            stepTheme: 'blue',
            stepTitle: 'Le passif impersonnel et personnel (It is said that... / He is known to...)',
            paragraphText:
              'Avec les verbes d\'opinion, de déclaration ou d\'estimation (**`say, think, believe, know, report, expect, consider, estimate, allege, claim, understand`**) suivis d\'une complétive en `that` (*People say that quantum computers are extremely fast*), l\'anglais académique utilise **deux structures passives** qu\'il faut savoir convertir l\'une dans l\'autre :\n1) **Structure impersonnelle en `It`** : **`It + BE (conjugué) + Past Participle + that + Clause`**\n   *It **is said that** quantum computers are extremely fast.*\n2) **Structure personnelle avec infinitif en `to`** : **`Subject_2 + BE (conjugué) + Past Participle + TO + Infinitive`**\n   - Si le verbe de la subordonnée est au **présent ou au futur** $\\rightarrow$ **Infinitif simple (`to + Base Verb`)** : *Quantum computers **are said to be** extremely fast.* / *5G **is expected to reduce** latency.*\n   - Si le verbe de la subordonnée exprime un fait **antérieur (Past Simple / Present Perfect)** $\\rightarrow$ **Infinitif passé (`to have + Past Participle`)** :\n     *People believe that the hackers **stole** 10,000 records.* $\\Longleftrightarrow$ *The hackers **are believed to have stolen** 10,000 records.*',
            keyRule:
              'Action simultanée/future : `S + is said / known / expected + TO + Base Verb`. Action antérieure (passée) : `S + is said / believed / reported + TO HAVE + Past Participle`.',
            konanTip:
              'Regarde le temps du verbe après `that` dans la phrase de départ : s\'il est au présent ou en `will`, utilise **`to + BV`** (*is thought to work*). S\'il est au passé (`stole, crashed, has leaked`), utilise **`to have + Past Participle`** (*is thought to have crashed*) !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p3_ex4',
              type: 'mcq',
              prompt:
                'Rewrite using a personal passive construction: "Cybersecurity experts believe that the attackers exploited a zero-day vulnerability last month."',
              options: [
                'The attackers are believed to exploit a zero-day vulnerability last month.',
                'The attackers are believed to have exploited a zero-day vulnerability last month.',
                'It is believed the attackers to have exploited a zero-day vulnerability last month.',
                'The attackers were believed that they exploited a zero-day vulnerability last month.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le verbe introducteur `believe` est au présent $\\rightarrow$ **`The attackers are believed...`**. Comme l\'action de la subordonnée (*exploited ... last month*) est **antérieure (passée)**, on utilise l\'infinitif passé **`to have + Past Participle`** : **`to have exploited`**.',
              hint: '"believe" est au présent ("are believed"), mais "exploited ... last month" est dans le passé -> infinitif passé "to have + V-pp".',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Passive Pitfalls',
            stepTheme: 'orange',
            stepTitle: 'Les 3 pièges majeurs : verbes intransitifs, Phrasal Verbs et By vs With',
            paragraphText:
              'Évite ces trois pièges classiques des QCM universitaires sur la voix passive :\n1) **Les verbes intransitifs (sans complément d\'objet direct) ne peuvent JAMAIS se mettre au passif** ! C\'est le cas de **`happen, occur, take place`** (se produire/avoir lieu), **`arrive, go, come, fall, rise, die, exist, seem, appear, consist of, belong to`**. En anglais technique, on écrit ***A fatal error occurred*** ou ***An incident happened***, **JAMAIS** *An error was occurred* ni *was happened* !\n2) **Les verbes prépositionnels (*Phrasal Verbs*) gardent obligatoirement leur préposition au passif** (`look into` = enquêter sur, `deal with`, `rely on`, `back up`, `carry out`, `turn off`, `log in to`) : *The team is looking **into** the outage* $\\rightarrow$ *The outage is being looked **into*** (ne supprime jamais `into`, `with` ou `on` !).\n3) **`BY` vs `WITH` au passif** : **`by`** introduit l\'**agent** (la personne ou le système actif qui réalise l\'action), tandis que **`with`** introduit l\'**instrument, l\'outil ou le matériau** utilisé (*The fiber cable was cut **by** road workers **with** a mechanical digger*).',
            keyRule:
              '`Happen`, `occur`, `take place`, `consist of`, `arrive`, `appear`, `seem` sont **intransitifs** : ils n\'existent **JAMAIS** à la voix passive (*was occurred* = FAUX).',
            konanTip:
              'Le piège *"A network failure was occurred"* ou *"The meeting was taken place"* tombe presque chaque année : coche toujours la forme active **`occurred` / `took place`** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p3_ex5',
              type: 'mcq',
              prompt:
                'Which of the following technical sentences is grammatically CORRECT?',
              options: [
                'A critical kernel panic was occurred on the primary server at midnight.',
                'The security breach is currently being looked into by the forensic team.',
                'The optical backbone is consisted of four redundant wavelength channels.',
                'The maintenance operation was taken place during off-peak hours.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les verbes **`occur`**, **`consist of`** et **`take place`** ne se mettent **jamais** au passif (il faudrait dire *occurred*, *consists of*, *took place*). En revanche, **`is currently being looked into`** est le passif Present Continuous parfaitement correct du verbe prépositionnel *look into* (= investigate), qui conserve sa préposition `into`.',
              hint: 'Rappelez-vous quels verbes sont intransitifs ("occur, consist of, take place") et ne supportent jamais la voix passive.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Technical Report Passive',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Le passif et le causatif (have/get something done) en IT',
            paragraphText:
              'Outre le passif classique, l\'anglais professionnel utilise la structure **causative passive** **`have / get + Object + Past Participle`** pour exprimer que l\'on **fait faire** une opération par un prestataire ou un service tiers :\n- *We **had our servers audited** by an external cybersecurity firm last month.* (« Nous avons fait auditer nos serveurs... » — le verbe `have` se conjugue à tous les temps : *We are having the fiber repaired* / *You should get your screen replaced*).\nDans un rapport technique complet, tu combineras ainsi passif standard (*All packets **are inspected** by the IDS*), passif modal (*Port 22 **must be restricted** to SSH keys*), passif impersonnel (*The patch **is expected to be released** tomorrow*) et causatif (*The company **had the legacy cabling replaced***).',
            keyRule:
              '**Causatif passif** (« faire faire quelque chose ») : `Subject + have / get (conjugué) + Object + Past Participle` (*We had the firewall configured*).',
            konanTip:
              'Attention à l\'ordre des mots au causatif : **`have + Object + Past Participle`** (*We had the router replaced* = nous avons fait remplacer le routeur) $\\neq$ Past Perfect actif **`had + Past Participle + Object`** (*We had replaced the router* = nous avions remplacé le routeur nous-mêmes).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c2_p3_ex6',
              type: 'mcq',
              prompt:
                'Complete the technical summary: "Next week, our company ______ its entire cloud infrastructure ______ by an independent ISO 27001 certification body."',
              options: [
                'will have / audit',
                'will have / audited',
                'will be / audited',
                'is having / to audit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L\'entreprise **fera auditer** son infrastructure par un organisme tiers (*by an independent ISO 27001 certification body*) : c\'est la structure causative passive **`have + Object + Past Participle`** au futur $\\rightarrow$ **`will have`** *its entire cloud infrastructure* **`audited`**.',
              hint: 'Structure causative "faire faire quelque chose par quelqu\'un" = have + Object + Past Participle.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : REPORTED SPEECH, SENTENCE STRUCTURE & TECHNICAL ENGLISH
  // ==========================================================================
  {
    id: 'lmd_srit_l1_anglais_ch3',
    subjectId: 'lmd_anglais',
    gradeLevel: 'lmd_srit_l1',
    alsoForGrades: ['lmd_entd_l1'],
    semesters: [2],
    order: 3,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Anglais Licence 1 (SRIT 1 & ENTD 1)',
    title: 'Chapitre 3 : Reported Speech, Sentence Structure & Technical English (Discours Indirect, Grammaire de la Phrase et Anglais IT/Télécoms)',
    summary:
      'Maîtriser les 8 natures grammaticales (Parts of Speech) et l\'architecture de la phrase anglaise, réussir toutes les transformations au Discours Indirect (Reported Speech : affirmations, questions, ordres) et acquérir le vocabulaire technique des systèmes, réseaux, télécoms et de l\'économie numérique.',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1 : Parts of Speech & English Sentence Architecture
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c3_p1',
        order: 1,
        title: 'Parts of Speech & English Sentence Architecture',
        summary:
          'Identifier les 8 Parts of Speech (Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Interjections), construire des phrases simples et complexes et éviter les pièges sur les noms indénombrables techniques.',
        conceptExplanation:
          'Au programme officiel de Licence 1, l\'étude des **Parts of Speech** (classes grammaticales) et de la **Sentence Structure** est le socle de l\'expression écrite académique. Chaque mot d\'une phrase anglaise appartient à l\'une des 8 catégories grammaticales et occupe une position syntaxique précise dans l\'ordre canonique `Subject + Verb + Object + Manner + Place + Time`.',
        formulas: [
          {
            name: 'The 8 Parts of Speech in English',
            formula: '\\text{Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection}',
            note: 'Adjective -> qualifie un Noun | Adverb -> modifie un Verb, un Adjective ou un autre Adverb',
          },
          {
            name: 'Compound Noun & Hyphenated Modifier Rule',
            formula: '\\text{Modifier Noun (always SINGULAR)} + \\text{Head Noun}',
            note: 'Ex: a 64-bit operating system, a five-kilometer optical link, a network administrator',
          },
        ],
        keyRule:
          'Les noms techniques indénombrables (`information, equipment, software, hardware, advice, research, knowledge, traffic, news`) sont **toujours au singulier** : jamais de `-s` final, jamais d\'article `a / an`.',
        workedExample: {
          title: 'Analyse des Parts of Speech dans une phrase technique',
          statement:
            'Identifiez la nature grammaticale (Part of Speech) des mots soulignés dans : "The fast (1) router processes packets efficiently (2) across (3) the network, although (4) traffic is heavy."',
          methodSteps: [
            '(1) "fast" est placé devant le nom "router" qu\'il qualifie -> Adjective.',
            '(2) "efficiently" (en -ly) modifie le verbe "processes" (comment traite-t-il les paquets ?) -> Adverb.',
            '(3) "across" relie le verbe au groupe nominal "the network" (préposition spatiale) -> Preposition.',
            '(4) "although" (« bien que ») relie deux propositions (clauses) -> Subordinating Conjunction.',
          ],
          conclusion: '(1) Adjective ; (2) Adverb ; (3) Preposition ; (4) Conjunction.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'The 8 Parts of Speech',
            stepTheme: 'blue',
            stepTitle: 'Les 8 Parts of Speech (Classes grammaticales) en anglais',
            paragraphText:
              'La grammaire anglaise classe tous les mots en **8 Parts of Speech** :\n1) **Nouns (Noms)** : désignent les êtres, objets, systèmes ou concepts (`server, latency, Abidjan, cybersecurity`). Ils se divisent en *Countable Nouns* (dénombrables : `a packet / two packets`) et *Uncountable Nouns* (indénombrables : `software, information`).\n2) **Pronouns (Pronoms)** : remplacent un nom pour éviter la répétition — *Subject* (`I, he, they`), *Object* (`me, him, them`), *Possessive Adjectives/Determiners* (`my, his, their, its` + nom), *Possessive Pronouns* (`mine, his, theirs` employés seuls), *Reflexive* (`myself, himself, themselves, itself`).\n3) **Verbs (Verbes)** : expriment une action (`transmit, compile`) ou un état (`be, seem, consist`).\n4) **Adjectives (Adjectifs)** : qualifient un nom ou pronom (`reliable, wireless, digital`).\n5) **Adverbs (Adverbes)** : modifient un verbe, un adjectif ou un autre adverbe (`quickly, extremely, never`).\n6) **Prepositions (Prépositions)** : introduisent un complément nominal ou un gérondif `V-ing` (`in, on, at, through, between, without`).\n7) **Conjunctions (Conjonctions)** : relient des mots ou des propositions (`and, but, because, although, whereas`).\n8) **Interjections** : expriment une réaction vive (`Oops!, Well!, Wow!, Alas!`).',
            keyRule:
              'Ne confonds jamais **`its`** (déterminant possessif sans apostrophe : *The router lost **its** configuration*) avec **`it\'s`** (contraction de *it is* ou *it has* : ***It\'s** working properly*).',
            konanTip:
              'Après une **Preposition** (`for, of, without, by, before, after, about, in, at, on`), tout verbe doit obligatoirement se mettre à la forme **`Verb-ing`** (*Thank you for **helping** me / Before **rebooting** the server...*) !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p1_ex1',
              type: 'mcq',
              prompt:
                'Identify the correct form and parts of speech: "The firewall automatically blocks any packet without ______ ______ digital signature."',
              options: [
                'verify / it\'s',
                'verifying / it\'s',
                'verifying / its',
                'to verify / its',
              ],
              correctAnswerIndex: 2,
              explanation:
                '**`without`** est une **Preposition**, donc le verbe qui la suit prend obligatoirement la forme en **`-ing`** (**`verifying`**). Devant le groupe nominal *digital signature*, il faut le déterminant possessif neutre sans apostrophe **`its`** (*it\'s* = *it is*).',
              hint: 'Après la préposition "without", quelle forme prend le verbe ? Et quelle est la différence entre "its" et "it\'s" ?',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Adjectives, Adverbs & Compounds',
            stepTheme: 'violet',
            stepTitle: 'Adjectives vs Adverbs et règle du singulier dans les Compound Nouns',
            paragraphText:
              'Trois règles syntaxiques fondamentales gouvernent les modificateurs en anglais technique :\n1) **L\'Adjective est invariable et précède le nom** : il ne prend jamais de `-s` au pluriel (*two **powerful** servers*, jamais *powerfuls*).\n2) **Adjective vs Adverb** : un **Adjective** qualifie un nom ou suit un verbe d\'état (*be, seem, look, become, feel, sound* : *The connection seems **slow***), tandis qu\'un **Adverb** (souvent formé par `Adjective + -ly` : *slowly, carefully, automatically, efficiently*) modifie un **verbe d\'action** (*The server processes requests **slowly***) ou un adjectif (*an **extremely** fast CPU*). Attention aux adverbes irréguliers : `good (adj.) -> well (adv.)`, et aux mots qui ont la même forme comme adjectif et adverbe : **`fast, hard, late, early`** (*a **fast** network / it runs **fast*** — *fastly* n\'existe pas ! Attention : `hardly` = « à peine » $\\neq$ `hard` = « dur / fort »).\n3) **Compound Nouns & Hyphenated Adjectives** : lorsqu\'un nom ou une mesure chiffrée sert d\'adjectif devant un autre nom, il reste **obligatoirement au SINGULIER** : *a **five-year** contract*, *a **64-bit** processor*, *a **100-megabit** connection*, *a **system** administrator*, *a **two-hour** outage*.',
            keyRule:
              'Un nom ou une unité de mesure placé en fonction d\'adjectif devant un autre nom reste **toujours au singulier** : *The outage lasted **two hours*** (pluriel) $\\rightarrow$ *It was a **two-hour** outage* (singulier avec trait d\'union !).',
            konanTip:
              'En QCM, dès que tu vois un trait d\'union entre un nombre et une unité devant un nom (`a 10-gigabit port`, `a three-month internship`), élimine toutes les réponses qui mettent un `-s` à l\'unité !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p1_ex2',
              type: 'mcq',
              prompt:
                'Choose the grammatically correct technical sentence:',
              options: [
                'We deployed a 48-ports switch that transmits data very fastly.',
                'We deployed a 48-port switch that transmits data very fast.',
                'We deployed a 48-ports switch that transmits data very fast.',
                'We deployed a 48-port switch that transmits data very good.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Devant le nom `switch`, l\'adjectif composé **`48-port`** reste au **singulier** sans `-s`. De plus, **`fast`** est à la fois adjectif et adverbe (*fastly* n\'existe pas en anglais, et l\'adverbe correspondant à *good* est *well*).',
              hint: 'Un adjectif composé avec un nombre ("48-port") ne prend jamais de "-s", et quel est l\'adverbe de "fast" ?',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Prepositions & Conjunctions',
            stepTheme: 'green',
            stepTitle: 'Prépositions techniques et Conjonctions (Although vs Despite)',
            paragraphText:
              'En anglais technique et académique, maîtrise ces deux points clés :\n1) **Collocations prépositionnelles incontournables** :\n   - `connect TO` a network / `access` a server (sans préposition après le verbe *access* ! *access the database*, mais *have access **to** the database*)\n   - `depend ON` / `rely ON` (dépendre de, compter sur)\n   - `consist OF` (être composé de) $\\neq$ `be composed OF` (attention : jamais *be consisted of*)\n   - `comply WITH` a standard (se conformer à une norme)\n   - `responsible FOR` / `divide INTO` / `protect FROM` / `interested IN` / `good AT`.\n2) **Conjonctions de concession et d\'opposition** :\n   - **`Although / Even though / Though + Subject + Verb`** (« bien que » + proposition complète conjuguée) :\n     ***Although** the bandwidth **was** limited, the video call worked well.*\n   - **`Despite / In spite of + Noun / Pronoun / Verb-ing`** (« malgré » + groupe nominal ou `-ing`, JAMAIS suivi directement de `Subject + Verb`, sauf sous la forme `despite the fact that + S + V`, et jamais *despite of* !) :\n     ***Despite** the limited bandwidth (ou **despite having** limited bandwidth), the video call worked well.*',
            keyRule:
              '**`Although / Even though`** + `Subject + Verb` $\\neq$ **`Despite`** (sans `of` !) / **`In spite of`** + `Noun / Verb-ing`.',
            konanTip:
              'Trois fautes pièges très fréquentes dans les QCM : 1) écrire *Despite of* (FAUX : c\'est `Despite` tout seul ou `In spite of`) ; 2) mettre un sujet+verbe après `Despite` ; 3) écrire *discuss about* ou *access to* quand `discuss` et `access` sont des verbes (*We discussed the project / He accessed the server*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p1_ex3',
              type: 'mcq',
              prompt:
                'Select the correct combination: "______ the severe electromagnetic interference, the telemetry system complied ______ the ITU standard and accessed ______ the satellite link."',
              options: [
                'Although / with / to',
                'Despite of / to / —',
                'Despite / with / —',
                'Even though / with / —',
              ],
              correctAnswerIndex: 2,
              explanation:
                '1) Devant le groupe nominal sans verbe conjugué (*the severe electromagnetic interference*), il faut la préposition **`Despite`** (sans *of* ; *Although / Even though* exigeraient un sujet + verbe).\n2) On dit **`comply with`** a standard.\n3) Le verbe transitif **`access`** se construit **sans préposition** (*accessed the satellite link*).',
              hint: '1) Devant un groupe nominal sans verbe : "Despite" (sans "of") vs "Although" (+ S + V). 2) "comply with". 3) Le verbe "access" prend-il une préposition ?',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Sentence Types',
            stepTheme: 'blue',
            stepTitle: 'Architecture de la phrase : Simple, Compound, Complex Sentences & Relative Clauses',
            paragraphText:
              'Le programme de Licence 1 distingue **4 types architecturaux de phrases (`Sentence Types`)** :\n1) **Simple Sentence** : contient une seule proposition indépendante (`1 Independent Clause = Subject + Verb (+ Object)` : *The router forwards packets at wire speed.*).\n2) **Compound Sentence** : relie au moins **deux propositions indépendantes** de même rang par une **Coordinating Conjunction (`FANBOYS` : `for, and, nor, but, or, yet, so`)** ou un point-virgule (`; however, / ; therefore,`) :\n   *The primary link failed, **so** the backup link took over.*\n3) **Complex Sentence** : combine **une proposition principale (`Independent Clause`)** et au moins **une proposition subordonnée (`Dependent / Subordinate Clause`)** introduite par une conjonction de subordination (`because, although, if, unless, when, while, since`) ou un **pronom relatif** :\n   - **`who`** (antécédent humain sujet/objet), **`whom`** (humain complément, surtout après préposition : *the client **to whom** we sent the key*),\n   - **`which`** (chose/système),\n   - **`that`** (humain ou chose dans une relative déterminative sans virgule),\n   - **`whose`** (possession « dont » pour humain ou chose : *a switch **whose** ports are gigabit*),\n   - **`where`** (lieu : *the data center **where** the servers are hosted*).\n4) **Compound-Complex Sentence** : au moins 2 propositions indépendantes + au moins 1 proposition subordonnée.',
            keyRule:
              'Ordres des compléments en fin de phrase anglaise (**`M-P-T` : Manner $\\rightarrow$ Place $\\rightarrow$ Time**) et interdiction de séparer le verbe de son complément d\'objet direct (*She configured the router [Object] quickly [Manner] in the lab [Place] yesterday [Time]*).',
            konanTip:
              'Pour choisir le pronom relatif : si le mot qui suit le trou est un **Nom sans article** qui appartient à l\'antécédent (*a company ______ servers are in the cloud* / *an engineer ______ expertise is recognized*), la réponse est toujours **`whose`** (« dont ») !',
            visualSchema: {
              type: 'layered_stack',
              title: 'Hiérarchie syntaxique de la phrase anglaise',
              caption: 'Des 8 Parts of Speech aux 4 structures de phrases (Simple, Compound, Complex, Compound-Complex)',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: 'Level 4',
                    title: 'Compound-Complex & Complex Sentences',
                    subtitle: 'Main Clause + Dependent Clauses (although, if, when, who, which, whose)',
                    color: 'violet',
                  },
                  {
                    badge: 'Level 3',
                    title: 'Compound & Simple Sentences',
                    subtitle: 'Independent Clauses linked by FANBOYS (for, and, nor, but, or, yet, so)',
                    color: 'blue',
                  },
                  {
                    badge: 'Level 2',
                    title: 'Canonical Clause Order : S + V + O + Manner + Place + Time',
                    subtitle: 'Jamais d\'adverbe entre le Verbe et son Object direct !',
                    color: 'green',
                  },
                  {
                    badge: 'Level 1',
                    title: 'The 8 Parts of Speech',
                    subtitle: 'Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p1_ex4',
              type: 'mcq',
              prompt:
                'Complete the sentence and identify its structure: "Our school is an elite institution ______ graduates design telecom infrastructures that connect millions of citizens."',
              options: [
                'which / Compound Sentence',
                'who / Complex Sentence',
                'whose / Complex Sentence',
                'where / Simple Sentence',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le nom **`graduates`** appartient à l\'antécédent *an elite institution* (« une institution d\'élite **dont** les diplômés... ») $\\rightarrow$ pronom relatif de possession **`whose`**. La phrase comporte une proposition principale (*Our school is an elite institution*) et deux propositions subordonnées relatives (*whose graduates design...* et *that connect...*) : c\'est une **Complex Sentence**.',
              hint: 'Quel pronom relatif signifie "dont" devant un nom possédé ("graduates") ?',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Uncountable Nouns & False Friends',
            stepTheme: 'orange',
            stepTitle: 'Le piège des noms indénombrables IT et des faux-amis (False Friends)',
            paragraphText:
              'Deux pièges lexicaux et grammaticaux tombent systématiquement en Licence 1 :\n1) **Les noms indénombrables (*Uncountable Nouns*) en informatique et gestion** : **`information, equipment, software, hardware, advice, research, knowledge, traffic, news, progress, work, furniture, luggage, money`**. En anglais, ces noms :\n   - ne prennent **JAMAIS de `-s`** au pluriel (*softwares, informations, equipments, advices* n\'existent PAS !)\n   - ne prennent **JAMAIS l\'article `a / an`** ni de chiffre direct (*an information / a software* = FAUX $\\rightarrow$ on dit **`some information / a piece of information / a piece of software / an item of equipment`**)\n   - s\'accordent **TOUJOURS avec un verbe au SINGULIER** (*This equipment **is** expensive / The news **is** good*) et utilisent les quantifieurs **`much / little`** (jamais `many / few`). (Note : *data* est historiquement le pluriel de *datum*, mais s\'emploie couramment comme indénombrable singulier en IT moderne : *The data is encrypted*).\n2) **Les faux-amis (*False Friends*) français-anglais** :\n   - **`actually`** = en réalité / en fait (alors que « actuellement » = **`currently`**)\n   - **`eventually`** = finalement / à la fin (alors que « éventuellement » = **`possibly / if necessary`**)\n   - **`delay`** = retard (*a two-hour delay*), alors que « délai / échéance » = **`deadline` / `time limit`**\n   - **`resume`** (verbe) = reprendre après une pause ; **`résumé (US) / CV (UK)`** = curriculum vitae (alors que « résumer » = **`summarize / sum up`** et « un résumé » = **`a summary / an abstract`**)\n   - **`library`** = bibliothèque logicielle ou universitaire (librairie = **`bookshop`**).',
            keyRule:
              'JAMAIS de `-s` ni de `a/an` avec `information, software, hardware, equipment, advice, research, knowledge, traffic` !',
            konanTip:
              'Mémorise le trio de faux-amis qui tombe à chaque session : **`currently`** = actuellement | **`actually`** = en réalité | **`eventually`** = finalement (au bout du compte).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p1_ex5',
              type: 'mcq',
              prompt:
                'Choose the sentence that is completely free of grammar and vocabulary errors:',
              options: [
                'The consultant gave us many useful advices and installed two new softwares on our equipments.',
                'Actually, our team is migrating the database this week, and we will eventually decommission the old server in December.',
                'Currently, our team is migrating the database this week, and we will eventually decommission the old server if the client requests it.',
                'The new hardware are very reliable, and every informations are stored before the delay.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans l\'option B, **`Actually`** (« En réalité / En fait ») introduit une précision, et **`eventually`** (« finalement / à terme, en décembre ») est employé dans son vrai sens anglais. L\'option A cumule les fautes sur les indénombrables (*advices, softwares, equipments*), l\'option C confond *eventually* (« finalement ») avec *possibly* (« éventuellement / si le client le demande »), et l\'option D met *hardware* au pluriel, ajoute un `-s` à *information* et confond *delay* avec *deadline*.',
              hint: 'Éliminez d\'abord les phrases contenant "advices / softwares / equipments / informations". Puis vérifiez le sens exact de "eventually" (= finalement, au bout du compte).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Grammar Synthesis',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Contrôle grammatical d\'un texte technique',
            paragraphText:
              'Vérifions ensemble une phrase type d\'examen combinant toutes les règles de ce point :\n*"**Although** (`Conjunction` + `S + V`) the new **five-gigahertz** (`singular hyphenated modifier`) wireless **equipment** (`uncountable singular noun`) **is** (`singular verb`) **extremely** (`Adverb` modifying `reliable`) **reliable** (`Adjective`), it cannot operate **properly** (`Adverb` modifying `operate`) without **receiving** (`V-ing` after preposition `without`) **some configuration information** (`uncountable`) from the controller **whose** (`possessive relative pronoun`) IP address is static."*\nChaque mot est justifié par sa *Part of Speech* et sa fonction syntaxique.',
            keyRule:
              'Toujours vérifier : 1) `Adjective` vs `Adverb (-ly)` ; 2) Singulier des modificateurs composés (`five-gigahertz`) ; 3) Indénombrables au singulier (`equipment, information, software`) ; 4) `Preposition + V-ing`.',
            konanTip:
              'Un dernier détail sur les quantifieurs : utilise **`many / a few / fewer`** avec les noms **dénombrables pluriels** (*fewer packets, many servers*) et **`much / a little / less`** avec les noms **indénombrables singuliers** (*less traffic, much information, little bandwidth*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p1_ex6',
              type: 'mcq',
              prompt:
                'Complete the technical review: "This new compression algorithm requires ______ bandwidth and generates ______ packet errors than the previous 32-______ version."',
              options: [
                'fewer / less / bits',
                'less / fewer / bit',
                'less / less / bits',
                'fewer / fewer / bit',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1) **`bandwidth`** est un nom **indénombrable** $\\rightarrow$ comparatif **`less`** (*less bandwidth*).\n2) **`packet errors`** est un nom **dénombrable pluriel** $\\rightarrow$ comparatif **`fewer`** (*fewer packet errors*).\n3) Devant le nom `version`, le modificateur composé **`32-bit`** reste obligatoirement au **singulier**.',
              hint: '"bandwidth" est indénombrable (less) ; "errors" est dénombrable pluriel (fewer) ; "32-bit" est un adjectif composé devant un nom (singulier).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2 : The Reported Speech (Direct to Indirect Speech)
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c3_p2',
        order: 2,
        title: 'The Reported Speech (Direct to Indirect Speech)',
        summary:
          'Transposer des affirmations, des questions (Yes/No et Wh-) et des ordres du discours direct au discours indirect en appliquant le Backshift of Tenses et les changements de pronoms et de repères spatio-temporels.',
        conceptExplanation:
          'Le **Reported Speech** (ou **Indirect Speech**, discours indirect) permet de rapporter les paroles d\'un interlocuteur sans utiliser de guillemets. Lorsque le verbe introducteur est au **passé** (`He said, She told me, The engineer explained, He asked`), toute la proposition rapportée subit un décalage systématique d\'un cran vers le passé appelé **Backshift of Tenses**, accompagné d\'une adaptation logique des pronoms personnels et des indicateurs de temps et de lieu.',
        formulas: [
          {
            name: 'Règle du Backshift of Tenses (après said / told / asked)',
            formula: '\\text{Present} \\rightarrow \\text{Past} \\quad | \\quad \\text{Past / Present Perfect} \\rightarrow \\text{Past Perfect (had + V}_{\\text{PP}}\\text{)} \\quad | \\quad \\text{will / can / may} \\rightarrow \\text{would / could / might}',
            note: 'must (obligation) -> had to | Past Perfect, would, could, should, might -> inchangés',
          },
          {
            name: 'Reported Questions & Commands',
            formula: '\\text{Question: asked + if/whether (or Wh-) + } \\mathbf{Subject + Verb} \\quad | \\quad \\text{Command: told + Object + } \\mathbf{(not)\\;to + BV}',
            note: 'Ordre affirmatif S + V dans les questions indirectes (plus de do/does/did ni de "?")',
          },
        ],
        keyRule:
          'Dans une **Reported Question** (*He asked where the server was* / *She asked if I had finished*), l\'ordre des mots redevient **affirmatif (`Subject + Verb`)** : on supprime l\'inversion, on supprime `do/does/did` et on supprime le point d\'interrogation `?`.',
        workedExample: {
          title: 'Transformation complète Direct -> Reported Speech',
          statement:
            'Transposez au discours indirect : Yesterday, the project manager said to us, "I will send you the updated schedule tomorrow."',
          methodSteps: [
            '1) Verbe introducteur au passé : "said to us" -> "told us (that)".',
            '2) Changement des pronoms : "I" (the manager) -> "he/she" ; "you" (us) -> "us".',
            '3) Backshift du temps verbal : "will send" -> "would send".',
            '4) Changement du marqueur temporel : "tomorrow" -> "the next day / the following day".',
          ],
          conclusion:
            'Yesterday, the project manager told us that he would send us the updated schedule the next day (or the following day).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Backshift of Tenses',
            stepTheme: 'blue',
            stepTitle: 'La concordance des temps au discours indirect (Backshift of Tenses)',
            paragraphText:
              'Lorsque le verbe introducteur est au **passé** (`said, told, explained, reported, announced`), les temps verbaux du discours direct reculent d\'un cran dans le passé (**Backshift**) :\n- **Present Simple** (`"I work on Linux"`) $\\rightarrow$ **Past Simple** (*He said that he **worked** on Linux*)\n- **Present Continuous** (`"The server is rebooting"`) $\\rightarrow$ **Past Continuous** (*She said that the server **was rebooting***)\n- **Past Simple** (`"We fixed the bug"`) $\\rightarrow$ **Past Perfect** (*They said that they **had fixed** the bug*)\n- **Present Perfect** (`"I have updated the BIOS"`) $\\rightarrow$ **Past Perfect** (*He said that he **had updated** the BIOS*)\n- **Present Perfect Continuous** (`"has been running"`) $\\rightarrow$ **Past Perfect Continuous** (**`had been running`**)\n- **Past Continuous** (`"was testing"`) $\\rightarrow$ **Past Perfect Continuous** (**`had been testing`**)\n- **Modaux** : **`will -> would`**, **`can -> could`**, **`may -> might`**, **`shall -> should`**, **`must` (obligation) `-> had to`**.\n- Les temps déjà au « plancher » du passé (**`Past Perfect`**, **`would`**, **`could`**, **`should`**, **`might`**, **`ought to`**) **ne changent plus**.',
            keyRule:
              'Le **Past Simple** ET le **Present Perfect** convergent tous les deux vers le **Past Perfect (`had + Past Participle`)** au discours indirect !',
            konanTip:
              'Attention au futur en `am / is / are going to + BV` : au discours indirect, il suffit de mettre `be` au passé $\\rightarrow$ **`was / were going to + BV`** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p2_ex1',
              type: 'mcq',
              prompt:
                'Convert into Reported Speech: The developer said, "I have already tested the API, and I will deploy it on the cloud server."',
              options: [
                'The developer said that he has already tested the API, and he would deploy it on the cloud server.',
                'The developer said that he had already tested the API, and he will deploy it on the cloud server.',
                'The developer said that he had already tested the API, and he would deploy it on the cloud server.',
                'The developer said that I had already tested the API, and I would deploy it on the cloud server.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Après **`The developer said`** (au passé) : le pronom `I` devient **`he`**, le Present Perfect **`have already tested`** recule au **Past Perfect (`had already tested`)**, et le futur **`will deploy`** devient **`would deploy`**.',
              hint: 'Present Perfect -> Past Perfect (had + V-pp) ; will -> would ; I -> he.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Time & Place Shifts',
            stepTheme: 'violet',
            stepTitle: 'Les transformations des repères spatio-temporels et des démonstratifs',
            paragraphText:
              'Au discours indirect, comme la parole est rapportée à un autre moment et depuis un autre lieu, tous les déictiques (temps, lieu, démonstratifs) doivent être convertis :\n- **`now`** $\\rightarrow$ **`then / at that moment`**\n- **`today / tonight`** $\\rightarrow$ **`that day / that night`**\n- **`yesterday`** $\\rightarrow$ **`the day before / the previous day`**\n- **`tomorrow`** $\\rightarrow$ **`the next day / the following day / the day after`**\n- **`next week / next month / next year`** $\\rightarrow$ **`the following week / the week after`**\n- **`last week / last night / last year`** $\\rightarrow$ **`the week before / the previous week / the night before`**\n- **`... ago`** (*two hours ago*) $\\rightarrow$ **`... before / ... earlier`** (*two hours before / earlier*)\n- **`here`** $\\rightarrow$ **`there`**\n- **`this`** $\\rightarrow$ **`that`** | **`these`** $\\rightarrow$ **`those`**.',
            keyRule:
              '`yesterday` $\\rightarrow$ **`the day before / the previous day`** | `tomorrow` $\\rightarrow$ **`the next day / the following day`** | `ago` $\\rightarrow$ **`before / earlier`** | `this` $\\rightarrow$ **`that`**.',
            konanTip:
              'Dans un QCM de Reported Speech, un candidat pressé vérifie uniquement le verbe et oublie la fin de la phrase : or une option qui a le bon verbe `had crashed` mais conserve `yesterday` au lieu de **`the day before`** est un piège classique ! Vérifie toujours le dernier mot de la phrase.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p2_ex2',
              type: 'mcq',
              prompt:
                'Transform into Reported Speech: The technician said, "We replaced this faulty optical module two days ago, and the link is working perfectly today."',
              options: [
                'The technician said that they had replaced this faulty optical module two days ago, and the link was working perfectly today.',
                'The technician said that they had replaced that faulty optical module two days before, and the link was working perfectly that day.',
                'The technician said that they replaced that faulty optical module two days before, and the link is working perfectly that day.',
                'The technician said that we had replaced that faulty optical module the day before, and the link had been working perfectly that day.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toutes les transformations sont appliquées : `We` $\\rightarrow$ **`they`**, `replaced` (Past Simple) $\\rightarrow$ **`had replaced`** (Past Perfect), `this` $\\rightarrow$ **`that`**, `two days ago` $\\rightarrow$ **`two days before`**, `is working` (Present Continuous) $\\rightarrow$ **`was working`** (Past Continuous), et `today` $\\rightarrow$ **`that day`**.',
              hint: 'Vérifiez les 6 transformations : We -> they, replaced -> had replaced, this -> that, ago -> before, is working -> was working, today -> that day.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Say vs Tell',
            stepTheme: 'orange',
            stepTitle: 'Say vs Tell et les cas où le Backshift ne s\'applique pas',
            paragraphText:
              'La distinction syntaxique entre **`SAY`** et **`TELL`** est impérative :\n1) **`SAY` n\'est JAMAIS suivi directement d\'un complément de personne sans `to`** : on dit **`He said (that)...`** ou **`He said TO me (that)...`** (JAMAIS *He said me that...*).\n2) **`TELL` est OBLIGATOIREMENT suivi d\'un complément d\'objet de personne (sans `to`)** : on dit **`He told me (that)...`** ou **`She told the team (that)...`** (JAMAIS *He told that...* ni *He told to me that...*).\nDe plus, retiens les **2 cas où il n\'y a PAS de Backshift** :\n- **Si le verbe introducteur est au Présent (`says, tells, has said`)** : les temps verbaux restent au présent/futur (*He **says** that the server **is** ready*).\n- **Si la parole rapportée exprime une loi scientifique universelle ou un fait permanent toujours vrai** : le Present Simple peut être conservé même après `said` (*The professor explained that optical fiber **uses** total internal reflection*).',
            keyRule:
              '**`say (that)...`** / **`say TO somebody (that)...`** $\\neq$ **`tell SOMEBODY (that)...`** (jamais *said me*, jamais *told that*, jamais *told to me*).',
            konanTip:
              'Un coup d\'œil suffit en QCM : s\'il y a un pronom personnel juste après le verbe (`___ us that...`), choisis **`told`**. S\'il y a directement `that` (`___ that...`) ou `to us` (`___ to us that...`), choisis **`said`** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p2_ex3',
              type: 'mcq',
              prompt:
                'Choose the grammatically correct sentence:',
              options: [
                'The CIO told that the company would migrate to a hybrid cloud architecture.',
                'The CIO said us that the company would migrate to a hybrid cloud architecture.',
                'The CIO told to us that the company would migrate to a hybrid cloud architecture.',
                'The CIO told us that the company would migrate to a hybrid cloud architecture.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le verbe **`tell` (`told`)** doit être suivi directement d\'un complément de personne sans préposition `to` : **`The CIO told us that...`** (avec `said`, il faudrait écrire *The CIO said that...* ou *The CIO said to us that...*).',
              hint: '"tell + somebody + (that)" vs "say + (to somebody) + (that)".',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Reporting Questions',
            stepTheme: 'green',
            stepTitle: 'Rapporter une question (Reported Questions) : ordre affirmatif S + V !',
            paragraphText:
              'Lorsqu\'on rapporte une question au discours indirect après **`He asked (me) / She wanted to know / He inquired / He wondered`** :\n1) **RÈGLE CAPITALE : La question indirecte n\'est plus une question directe !** Elle reprend l\'**ordre affirmatif normal `Subject + Verb`** : on **supprime l\'auxiliaire interrogatif `do / does / did`**, on remet le sujet **devant** le verbe/auxiliaire (`is he` $\\rightarrow$ `he was` ; `have you` $\\rightarrow$ `I had` ; `can it` $\\rightarrow$ `it could`), et on **remplace le point d\'interrogation `?` par un point final `.`**.\n2) **Pour une Yes/No Question** (question fermée sans mot interrogatif, commençant par `Are you...?, Do you...?, Did he...?, Have they...?, Can you...?`), on introduit la subordonnée par **`if`** ou **`whether`** (« si ») :\n   *"**Do** you **know** the root password?"* $\\rightarrow$ *He asked me **if / whether I knew** the root password.*\n   *"**Has** the backup **finished**?"* $\\rightarrow$ *She asked **if the backup had finished**.*\n3) **Pour une Wh- Question** (`What, Where, When, Why, Who, How, How long, How much...`), on conserve le **mot interrogatif `Wh-`** suivi immédiatement de **`Subject + Verb (avec Backshift)`** :\n   *"**Where is** the main switch?"* $\\rightarrow$ *He asked **where the main switch was**.* (JAMAIS *where was the main switch* !)\n   *"**When did** the outage **start**?"* $\\rightarrow$ *She asked **when the outage had started**.*',
            keyRule:
              '**Reported Question** = `asked + if/whether (ou Wh- word) + SUBJECT + VERB (backshifted) + .` (JAMAIS de `do/does/did` interrogatif, JAMAIS d\'inversion `Verb + Subject` !).',
            konanTip:
              'C\'est le piège le plus célèbre du Reported Speech : entre *He asked me where **was the server*** et *He asked me where **the server was***, la bonne réponse est TOUJOURS **`where the server was`** (Sujet + Verbe à la fin) !',
            visualSchema: {
              type: 'flowchart',
              title: 'Conversion d\'une Question au Discours Indirect (Reported Question)',
              caption: 'Procédure infaillible pour les Yes/No Questions et les Wh- Questions',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 'rq1',
                    label: '1. Verbe introducteur : He asked (me) / She wanted to know',
                    sublabel: 'Attention : jamais "asked to me", jamais "that" devant une question !',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 'rq2',
                    label: '2. Choisir le mot de liaison : Wh- word OU If / Whether',
                    sublabel: 'Wh- question -> garder What/Where/Why/How | Yes/No question -> insérer IF ou WHETHER',
                    kind: 'decision',
                    color: 'violet',
                  },
                  {
                    id: 'rq3',
                    label: '3. Rétablir l\'ordre AFFIRMATIF : SUBJECT + VERB',
                    sublabel: 'Supprimer do/does/did interrogatif ! Placer le Sujet AVANT was/were/had/would/could',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    id: 'rq4',
                    label: '4. Appliquer le Backshift + Time shifts + Point final (.)',
                    sublabel: 'Present -> Past | Past/Present Perfect -> Past Perfect (had + V-pp) | Supprimer "?"',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p2_ex4',
              type: 'mcq',
              prompt:
                'Convert both questions into Reported Speech: The auditor asked the sysadmin, "(1) Why did the firewall crash last night, and (2) have you restored the configuration yet?"',
              options: [
                'The auditor asked the sysadmin why had the firewall crashed the night before, and if had he restored the configuration yet.',
                'The auditor asked the sysadmin why did the firewall crash the night before, and whether he had restored the configuration yet?',
                'The auditor asked the sysadmin why the firewall had crashed the night before, and whether he had restored the configuration yet.',
                'The auditor asked to the sysadmin why the firewall crashed last night, and that he had restored the configuration yet.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans (1), la *Wh- question* au Past Simple (*Why did the firewall crash...*) perd l\'auxiliaire `did`, reprend l\'ordre affirmatif `Subject + Verb` au **Past Perfect** (**`why the firewall had crashed`**) et change `last night` en **`the night before`**. Dans (2), la *Yes/No question* au Present Perfect (*have you restored...*) est introduite par **`whether`** (ou `if`) suivi de l\'ordre affirmatif `Subject + Past Perfect` (**`whether he had restored`**), avec un point final.',
              hint: 'Dans une question indirecte : 1) supprimez "did" et passez au Past Perfect ; 2) remettez l\'ordre Sujet + Verbe ("the firewall had crashed" / "he had restored") ; 3) utilisez "if / whether" pour la question fermée.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Reporting Commands',
            stepTheme: 'blue',
            stepTitle: 'Rapporter des ordres, requêtes et suggestions (Imperatives & Suggestions)',
            paragraphText:
              'Lorsqu\'on rapporte un **ordre, une consigne ou une demande polie** formulée à l\'impératif, on n\'utilise pas de subordonnée en `that`, mais la structure infinitive :\n1) **Impératif affirmatif (`"Reboot the router!"` / `"Please send me the logs."`)** :\n   **`told / ordered / instructed / asked / advised / reminded + Object + TO + Base Verb`**\n   - *The supervisor **told the technician to reboot** the router.*\n   - *She **asked me to send** her the logs.*\n2) **Impératif négatif (`"Don\'t click on suspicious links!"` / `"Never share your private key!"`)** :\n   **`told / warned / asked / advised + Object + NOT TO + Base Verb`** (attention : **`not`** se place toujours **devant `to`** !)\n   - *The CISO **warned the employees not to click** on suspicious links.*\n3) **Verbes de suggestion et autres verbes introducteurs spécifiques (`Reporting Verbs`)** :\n   - **`suggest / recommend`** : ne se construisent **JAMAIS** avec `suggest somebody to do` ! On écrit **`suggest + Verb-ing`** (*He **suggested upgrading** the RAM*) ou **`suggest that + Subject + (should) + Base Verb`** (*He **suggested that we (should) upgrade** the RAM*).\n   - **`apologize for + V-ing`**, **`accuse somebody of + V-ing`**, **`admit / deny + V-ing`**, **`refuse / offer / promise / agree + to + BV`**.',
            keyRule:
              'Ordre affirmatif $\\rightarrow$ **`told / asked + Object + TO + BV`** | Ordre négatif (*"Don\'t..."*) $\\rightarrow$ **`told / warned + Object + NOT TO + BV`** | Suggestion $\\rightarrow$ **`suggested + V-ing`** (jamais *suggested me to...*).',
            konanTip:
              'Deux pièges classiques : 1) écrire *to not click* ou *didn\'t to click* au lieu de **`not to click`** ; 2) écrire *He suggested us to use Linux* (FAUX !) au lieu de **`He suggested using Linux`** ou **`He suggested that we (should) use Linux`**.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p2_ex5',
              type: 'mcq',
              prompt:
                'Choose the correct Reported Speech transformation for: The cybersecurity expert said to the staff, "Do not connect your personal smartphones to the corporate LAN! Why don\'t we create a separate Guest Wi-Fi?"',
              options: [
                'The cybersecurity expert warned the staff to not connect their personal smartphones to the corporate LAN, and suggested them to create a separate Guest Wi-Fi.',
                'The cybersecurity expert warned the staff not to connect their personal smartphones to the corporate LAN, and suggested creating a separate Guest Wi-Fi.',
                'The cybersecurity expert told to the staff don\'t connect their personal smartphones to the corporate LAN, and suggested that they creating a separate Guest Wi-Fi.',
                'The cybersecurity expert warned the staff didn\'t connect their personal smartphones to the corporate LAN, and suggested to create a separate Guest Wi-Fi.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1) L\'impératif négatif *"Do not connect..."* se transforme en **`warned (or told) + Object + NOT TO + Base Verb`** : **`warned the staff not to connect...`** (et `your` devient **`their`**).\n2) La suggestion *"Why don\'t we create..."* se rapporte avec **`suggested + Verb-ing`** (**`suggested creating...`**) ou *suggested that they (should) create*, mais jamais *suggested them to create*.',
              hint: 'Impératif négatif = warned + Object + NOT TO + BV ; verbe "suggest" = suggested + V-ing.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Meeting Minutes',
            stepTheme: 'slate',
            stepTitle: 'Synthèse appliquée : Compte rendu de réunion IT au discours rapporté',
            paragraphText:
              'Observons comment un ingénieur rédige le compte rendu (*Meeting Minutes*) d\'une réunion technique au discours indirect :\n- Direct : *The CTO said, "Our latency dropped by 40% yesterday."*\n  $\\rightarrow$ Indirect : *The CTO announced that **their** latency **had dropped** by 40% **the day before**.*\n- Direct : *Sarah asked, "Can the current firewall handle 100,000 concurrent sessions?"*\n  $\\rightarrow$ Indirect : *Sarah asked **whether the current firewall could handle** 100,000 concurrent sessions.*\n- Direct : *The Lead Architect said to the team, "Document all your API endpoints before Friday and don\'t hardcode any credentials!"*\n  $\\rightarrow$ Indirect : *The Lead Architect instructed the team **to document** all their API endpoints before Friday and warned them **not to hardcode** any credentials.*',
            keyRule:
              'Vérifier systématiquement les 4 piliers du Reported Speech : 1) Verbe introducteur (`told sb` / `said` / `asked` / `warned sb not to`) ; 2) Ordre `S + V` sans `?` dans les questions ; 3) Backshift du verbe ; 4) Pronoms + repères de temps/lieu.',
            konanTip:
              'Attention à **`must`** au discours indirect : lorsque `must` exprime une **obligation** (*"You must sign the NDA"*), il devient **`had to`** (*She said we **had to** sign the NDA*). Mais lorsqu\'il exprime une **déduction logique** (*"The cable must be unplugged"*), il reste **`must`** !',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p2_ex6',
              type: 'mcq',
              prompt:
                'Convert into Reported Speech: Last Monday, the professor said to the students, "You must submit your Python project here tomorrow, and how many of you have finished the bonus algorithm?"',
              options: [
                'Last Monday, the professor told the students that they had to submit their Python project there the next day, and asked how many of them had finished the bonus algorithm.',
                'Last Monday, the professor said the students that they must submit their Python project here tomorrow, and asked how many of them have finished the bonus algorithm.',
                'Last Monday, the professor told the students that they had to submit their Python project there the next day, and asked how many of them had they finished the bonus algorithm?',
                'Last Monday, the professor told to the students that you had to submit your Python project there the day before, and asked if how many of them had finished the bonus algorithm.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Toutes les règles sont respectées dans l\'option A : `said to the students` $\\rightarrow$ **`told the students that`**, `You` $\\rightarrow$ **`they`**, `must` (obligation) $\\rightarrow$ **`had to`**, `your` $\\rightarrow$ **`their`**, `here` $\\rightarrow$ **`there`**, `tomorrow` $\\rightarrow$ **`the next day`**, et la question *Wh-* en `how many of you have finished...` garde **`how many of them`** suivi de l\'ordre affirmatif au Past Perfect **`had finished`** avec un point final.',
              hint: 'Vérifiez : said to -> told ; must -> had to ; here -> there ; tomorrow -> the next day ; et l\'ordre affirmatif sans inversion dans la question en "how many".',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3 : Technical English for IT, Telecommunications & Digital Economy
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_srit_l1_anglais_c3_p3',
        order: 3,
        title: 'Technical English for IT, Telecommunications & Digital Economy',
        summary:
          'Maîtriser la terminologie anglaise de l\'architecture matérielle, du génie logiciel, des réseaux et télécoms, de la cybersécurité, du Cloud et de l\'économie numérique, ainsi que la méthodologie de compréhension écrite et de rédaction d\'emails professionnels.',
        conceptExplanation:
          'En Licence 1, les étudiants de **SRIT 1** et **ENTD 1** doivent être capables de lire une documentation technique internationale (RFC, IEEE, ITU, AWS, Cisco), d\'analyser un article sur la transformation digitale et de rédiger des courriels et rapports d\'incidents professionnels en anglais. Ce point synthétise le lexique technique officiel et les conventions de communication écrite.',
        formulas: [
          {
            name: 'Network Performance Metrics',
            formula: '\\text{Bandwidth (capacité max)} \\neq \\text{Throughput (débit réel)} \\quad | \\quad \\text{Latency (délai ms)} \\quad | \\quad \\text{Jitter (gigue)}',
            note: 'Uplink (liaison montante) vs Downlink (liaison descendante) | Packet loss (perte de paquets)',
          },
          {
            name: 'Structure d\'un Email Professionnel en Anglais',
            formula: '\\text{Subject Line} \\rightarrow \\text{Salutation (Dear...)} \\rightarrow \\text{Purpose (I am writing to...)} \\rightarrow \\text{Details/Action} \\rightarrow \\text{Sign-off}',
            note: 'Dear Mr./Ms. Name -> Yours sincerely | Dear Sir or Madam -> Yours faithfully | Business standard -> Best regards',
          },
        ],
        keyRule:
          'Distinction fondamentale en télécoms : **`Bandwidth`** (bande passante = capacité théorique maximale du canal en Mbps/Gbps) $\\neq$ **`Throughput`** (débit effectif réellement transmis) $\\neq$ **`Latency`** (temps de transit en millisecondes) $\\neq$ **`Jitter`** (variation de la latence, critique pour la VoIP).',
        workedExample: {
          title: 'Analyse terminologique d\'un rapport Cloud & Réseau',
          statement:
            'Identifiez le terme technique anglais correspondant à chaque définition : (1) "A malicious program that encrypts a victim\'s files and demands payment for the decryption key." (2) "The ability of an IT system to handle a growing amount of workload by adding resources."',
          methodSteps: [
            'Définition (1) : Programme malveillant qui chiffre les fichiers et exige une rançon -> "Ransomware".',
            'Définition (2) : Capacité d\'un système informatique à monter en charge lorsque la demande augmente -> "Scalability" (extensibilité / passage à l\'échelle).',
          ],
          conclusion: '(1) Ransomware ; (2) Scalability.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Hardware & Software Terminology',
            stepTheme: 'blue',
            stepTitle: 'Terminologie de l\'architecture des ordinateurs et du génie logiciel',
            paragraphText:
              'Maîtrise le vocabulaire fondamental du matériel (**`Hardware`**) et du logiciel (**`Software`**) :\n- **Architecture matérielle** : **`CPU (Central Processing Unit)`** / processor, **`motherboard`** (carte mère), **`volatile memory (RAM — Random Access Memory)`** (perd ses données à l\'extinction) vs **`non-volatile storage (SSD — Solid-State Drive / HDD — Hard Disk Drive / ROM)`**, **`power supply unit (PSU)`** (bloc d\'alimentation), **`heat sink & cooling fan`** (dissipateur thermique et ventilateur), **`bus`**.\n- **Systèmes & Génie logiciel** : **`Operating System (OS)`**, **`kernel`** (noyau du système), **`firmware`** (micrologiciel embarqué), **`source code`** (code source lisible par l\'humain) vs **`binary / machine code`**, **`compiler`** (traduit tout le programme avant exécution) vs **`interpreter`** (exécute ligne par ligne, comme en Python), **`debugging`** (correction de bogues), **`open-source software`** vs **`proprietary / closed-source software`**, **`deployment`** (mise en production), **`scalability`** (capacité de montée en charge), **`backward compatibility`** (rétrocompatibilité).',
            keyRule:
              '**`Volatile memory (RAM)`** s\'efface lorsque l\'alimentation est coupée (*when power is turned off*), tandis que **`Non-volatile memory (ROM, Flash, SSD)`** conserve les données hors tension.',
            konanTip:
              'Dans les questions de définition technique : `translates the entire high-level source code into machine code before execution` = **`Compiler`** $\\neq$ `translates and executes code line by line at runtime` = **`Interpreter`**.',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p3_ex1',
              type: 'mcq',
              prompt:
                'Which technical term matches this definition: "A low-level software program permanently etched into a hardware device\'s non-volatile memory (such as a router\'s ROM or a motherboard\'s BIOS/UEFI) to control its basic hardware functions"?',
              options: [
                'Volatile RAM',
                'Firmware',
                'Open-source compiler',
                'Middleware',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le **`Firmware`** (micrologiciel) est le programme de bas niveau stocké en mémoire non volatile (ROM / Flash / EEPROM) qui pilote directement un équipement matériel (routeur, carte mère BIOS/UEFI, carte réseau).',
              hint: 'Il s\'agit d\'un micrologiciel situé à mi-chemin entre "hardware" et "software", stocké en mémoire non volatile.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Networking & Telecoms',
            stepTheme: 'violet',
            stepTitle: 'Terminologie des réseaux informatiques et des télécommunications',
            paragraphText:
              'Pour la filière **SRIT**, les concepts réseaux et télécoms en anglais sont au cœur des épreuves :\n- **Équipements & Adressage** : **`Switch`** (commutateur opérant au niveau 2 — *Data Link layer* — utilisant les **`MAC addresses`**), **`Router`** (routeur opérant au niveau 3 — *Network layer* — acheminant les paquets entre réseaux via les **`IP addresses`** et la **`routing table`**), **`Gateway`** (passerelle), **`Subnet mask`** (masque de sous-réseau), **`DHCP`** (*Dynamic Host Configuration Protocol* — attribution dynamique d\'IP), **`DNS`** (*Domain Name System* — résolution des noms de domaine en adresses IP).\n- **Transmission & Télécoms** : **`Optical fiber`** (fibre optique à cœur de verre utilisant la réflexion totale interne), **`Copper twisted-pair cable`** (câble cuivre à paires torsadées RJ45), **`Attenuation`** (affaiblissement de la puissance du signal en $\\text{dB}$ sur la distance), **`Interference / Crosstalk`** (interférence / diaphonie), **`Modulation & Demodulation`**, **`Uplink`** (liaison montante : terminal $\\rightarrow$ réseau/satellite) vs **`Downlink`** (liaison descendante : réseau/satellite $\\rightarrow$ terminal).\n- **Qualité de Service (QoS)** : **`Bandwidth`** (largeur de bande / capacité maximale), **`Throughput`** (débit réel utile), **`Latency / Delay`** (temps de latence en $\\text{ms}$), **`Jitter`** (gigue = variation du délai d\'arrivée des paquets), **`Packet loss`** (taux de perte de paquets).',
            keyRule:
              '**`DNS`** traduit un nom de domaine (`exemple.ci`) en adresse IP $\\neq$ **`DHCP`** attribue automatiquement une adresse IP, un masque et une passerelle à un hôte du réseau.',
            konanTip:
              'Ne confonds pas **`Attenuation`** (perte progressive d\'amplitude/puissance d\'un signal le long d\'un câble ou d\'une fibre optique) avec **`Jitter`** (variation temporelle de la latence entre paquets successifs).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p3_ex2',
              type: 'mcq',
              prompt:
                'In telecommunications and computer networking, what is the exact difference between "Bandwidth", "Throughput", and "Jitter"?',
              options: [
                'Bandwidth is the variation in packet delay; Throughput is the signal loss over distance; Jitter is the maximum channel capacity.',
                'Bandwidth is the theoretical maximum data capacity of a link; Throughput is the actual measured amount of data successfully transferred per second; Jitter is the variation in packet arrival delay.',
                'Bandwidth only applies to wireless networks; Throughput only applies to optical fiber; Jitter is the encryption key length.',
                'Bandwidth is the time a packet takes to reach its destination; Throughput is the number of dropped packets; Jitter is the DNS resolution speed.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '**`Bandwidth`** désigne la capacité théorique maximale d\'une liaison (en Mbps/Gbps), **`Throughput`** désigne le débit réel effectivement transféré par seconde, et **`Jitter`** (la gigue) désigne la variation du délai de latence entre les paquets reçus.',
              hint: 'Capacité maximale théorique vs débit réel mesuré vs variation du délai de latence.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Cybersecurity & Digital Economy',
            stepTheme: 'green',
            stepTitle: 'Terminologie de la cybersécurité, du Cloud et de l\'Économie Numérique',
            paragraphText:
              'Ce vocabulaire est commun aux étudiants de **SRIT 1** et **ENTD 1** :\n- **Cybersécurité (CIA Triad : *Confidentiality, Integrity, Availability*)** : **`Encryption / Decryption`** (chiffrement / déchiffrement), **`Authentication`** (vérification d\'identité, dont **`2FA / MFA — Multi-Factor Authentication`**), **`Firewall`** (pare-feu), **`Phishing`** (hameçonnage par email/site frauduleux pour voler des identifiants **`credentials`**), **`Malware`** (logiciel malveillant), **`Ransomware`** (rançongiciel), **`DDoS attack`** (*Distributed Denial of Service* — saturation d\'un serveur par une armée de machines infectées **`botnet`**), **`Vulnerability / Security flaw`** (faille de sécurité), **`Zero-day exploit`** (attaque exploitant une faille non encore corrigée), **`Patch`** (correctif logiciel), **`Backup`** (sauvegarde).\n- **Cloud Computing & Économie Numérique** : **`IaaS`** (*Infrastructure as a Service* : machines virtuelles, stockage), **`PaaS`** (*Platform as a Service* : environnement de développement), **`SaaS`** (*Software as a Service* : application prête à l\'emploi via navigateur), **`Digital Transformation`** (transformation digitale des processus d\'entreprise), **`Fintech`** (*Financial Technology* : Mobile Money, paiements numériques), **`E-commerce`**, **`Stakeholders`** (parties prenantes), **`Return on Investment (ROI)`** (retour sur investissement), **`Data breach`** (fuite/violation de données).',
            keyRule:
              '**`Phishing`** = ingénierie sociale usurpant une entité de confiance pour voler des **`credentials`** (identifiants/mots de passe) $\\neq$ **`DDoS`** = inondation de trafic réseau pour rendre un service indisponible (*Availability*).',
            konanTip:
              'Retiens le mot **`Credentials`** : en anglais IT, *user credentials* ne veut pas dire « crédits », mais **les identifiants de connexion** (nom d\'utilisateur, mot de passe, jeton, certificat).',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Cybersecurity & Infrastructure Lifecycle (PDCA in Technical English)',
              caption: 'Terminologie clé du cycle de sécurisation d\'un système d\'information',
              cycle: {
                centerLabel: 'CIA Triad',
                centerSublabel: 'Confidentiality, Integrity, Availability',
                nodes: [
                  {
                    title: '1. Architect & Deploy',
                    subtitle: 'Scalable Cloud (IaaS/PaaS/SaaS), Firewall, Encryption & 2FA Authentication',
                    color: 'blue',
                  },
                  {
                    title: '2. Monitor QoS & Traffic',
                    subtitle: 'Track Bandwidth, Throughput, Latency, Jitter & Packet Loss',
                    color: 'violet',
                  },
                  {
                    title: '3. Detect Threats',
                    subtitle: 'Identify Phishing, Ransomware, Zero-day Exploits & DDoS Attacks',
                    color: 'orange',
                  },
                  {
                    title: '4. Patch & Recover',
                    subtitle: 'Apply Security Patches, Isolate Subnet & Restore from Automated Backups',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p3_ex3',
              type: 'mcq',
              prompt:
                'An employee receives a deceptive email pretending to come from the company\'s IT Helpdesk, asking them to enter their login credentials on a fake web portal. What type of cyberattack is this?',
              options: [
                'A Distributed Denial of Service (DDoS) attack',
                'A Phishing attack',
                'Hardware attenuation',
                'Load balancing',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un courriel frauduleux usurpant l\'identité d\'un service légitime pour inciter la victime à divulguer ses identifiants de connexion (*login credentials*) sur un faux portail est la définition exacte d\'une attaque par **`Phishing`** (hameçonnage).',
              hint: 'Quel terme désigne l\'hameçonnage par courriel frauduleux visant à dérober des identifiants ("credentials") ?',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Reading Comprehension',
            stepTheme: 'blue',
            stepTitle: 'Stratégies de compréhension de textes techniques et morphologie (Prefixes & Suffixes)',
            paragraphText:
              'Dans l\'épreuve de **Reading Comprehension**, tu dois analyser un article technique ou économique en anglais en utilisant trois outils méthodologiques :\n1) **Skimming vs Scanning** : le **`Skimming`** consiste à parcourir rapidement le titre, l\'introduction et la première phrase de chaque paragraphe (*Topic Sentence*) pour saisir l\'**idée générale (*main idea*)** du texte ; le **`Scanning`** consiste à balayer le texte à la recherche d\'une **information précise** (date, acronyme, chiffre, nom propre, définition).\n2) **Analyse morphologique des préfixes et suffixes (*Word Formation*)** pour déduire le sens et la nature grammaticale d\'un mot inconnu :\n   - Préfixes privatifs/négatifs : **`un-`** (*unauthorized*), **`in- / im- / il- / ir-`** (*incompatible, irrelevant*), **`dis-`** (*disconnect*), **`de-`** (*decrypt, decommission*), **`mis-`** (erreur : *misconfiguration, misuse*).\n   - Préfixes techniques : **`re-`** (à nouveau : *reboot, reroute*), **`inter-`** (entre : *interoperability*), **`over- / under-`** (*overload, underestimate*), **`en- / em-`** (transformer en verbe : *enable, encrypt, empower*).\n   - Suffixes de noms : **`-tion / -sion`** (*encryption, transmission*), **`-ment`** (*deployment*), **`-ity`** (*availability, scalability*), **`-ness`** (*awareness*).\n   - Suffixes d\'adjectifs : **`-less`** (« sans » : *wireless, lossless, serverless*), **`-ful`** (*powerful*), **`-able / -ible`** (« qui peut être... » : *scalable, reliable, accessible*).',
            keyRule:
              'Suffixe **`-less`** = « sans » (*wireless* = sans fil, *lossless compression* = compression sans perte, *seamless* = sans couture/fluide) $\\neq$ **`-able`** = « capable d\'être » (*scalable, upgradeable*).',
            konanTip:
              'Attention au préfixe **`mis-`** en anglais IT : il signifie toujours **« mal / de manière erronée »** (*a **misconfigured** firewall* = un pare-feu mal configuré ; *data **misuse*** = usage abusif des données).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p3_ex4',
              type: 'mcq',
              prompt:
                'Using English word-formation rules (prefixes and suffixes), what does the technical expression "a lossless and interoperable wireless protocol due to router misconfiguration" tell us about "lossless" and "misconfiguration"?',
              options: [
                '"Lossless" means with high data loss, and "misconfiguration" means an automated configuration.',
                '"Lossless" means without any loss of data quality, and "misconfiguration" means an incorrect or faulty configuration.',
                '"Lossless" means impossible to lose the router, and "misconfiguration" means a missing router.',
                '"Lossless" is an adverb, and "misconfiguration" is a verb.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le suffixe adjectival **`-less`** signifie « sans » (**`lossless`** = sans aucune perte de données lors de la compression/transmission), et le préfixe **`mis-`** signifie « de façon erronée / mal » (**`misconfiguration`** = mauvaise configuration / erreur de paramétrage).',
              hint: 'Que signifient le suffixe "-less" (comme dans wireless) et le préfixe "mis-" (comme dans mistake / misunderstand) ?',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Professional Writing',
            stepTheme: 'green',
            stepTitle: 'Rédiger un email professionnel ou un rapport d\'incident en anglais',
            paragraphText:
              'La communication écrite professionnelle en anglais (**Business & Technical Correspondence**) obéit à des conventions strictes :\n1) **Salutation (Formule d\'appel)** :\n   - Destinataire identifié : **`Dear Mr. Kouassi,`** (homme), **`Dear Ms. Touré,`** (femme, quel que soit son statut marital — préférer `Ms.` en contexte professionnel moderne), **`Dear Dr. Konan,`**, ou **`Dear IT Support Team,`**.\n   - Destinataire dont on ignore le nom : **`Dear Sir or Madam,`** ou **`To Whom It May Concern:`**.\n2) **Opening & Purpose (Phrase d\'ouverture)** :\n   - *I hope this email finds you well.*\n   - ***I am writing to report** a critical network outage on the second floor.* / ***I am writing to inquire about** your cloud hosting services.* / ***With reference to** your email of November 20...*\n3) **Attachments & Action (Pièces jointes et demande)** :\n   - ***Please find attached** the technical diagnostic report (in PDF format).* (Jamais *Please find in attachment* !)\n   - ***Could you please** reset our API token at your earliest convenience?* / ***I would appreciate it if you could** send us a quotation.*\n4) **Closing & Sign-off (Formule de politesse finale)** :\n   - *I look forward to **hearing** from you soon.* (Attention : **`look forward to + Verb-ING`** !)\n   - **`Yours sincerely,`** (si tu as écrit *Dear Mr./Ms. Name*) | **`Yours faithfully,`** (si tu as écrit *Dear Sir or Madam*) | **`Best regards,` / `Kind regards,`** (standard professionnel universel).',
            keyRule:
              'Dans **`I look forward to hearing from you`**, le mot **`to` est une préposition** : le verbe qui suit doit obligatoirement être en **`-ing`** (`hearing / receiving / meeting`, JAMAIS *look forward to hear*) !',
            konanTip:
              'Deux règles d\'or des QCM d\'anglais des affaires :\n1) `Dear Mr./Ms. [Nom]` $\\rightarrow$ **`Yours sincerely`** vs `Dear Sir or Madam` (anonyme) $\\rightarrow$ **`Yours faithfully`**.\n2) **`I look forward to + Verb-ING`** (*I look forward to working with you*).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p3_ex5',
              type: 'mcq',
              prompt:
                'Choose the most accurate and grammatically correct closing for a formal business email addressed to "Dear Ms. Bamba,":',
              options: [
                'Please find in attachment the network audit. I look forward to hear from you soon. Yours faithfully,',
                'Please find attached the network audit. I look forward to hearing from you soon. Yours sincerely,',
                'Please find attached the network audit. I am looking forward to hear from you soon. Best regard,',
                'Here is the attachment of the network audit. I look forward to hearing from you soon. Yours faithfully,',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1) La formule standard pour une pièce jointe est **`Please find attached...`**.\n2) L\'expression **`look forward to`** est suivie d\'un gérondif en **`-ing`** (**`I look forward to hearing from you soon`**).\n3) Lorsque le destinataire est nommé (*Dear Ms. Bamba,*), la formule de clôture formelle correspondante est **`Yours sincerely,`** (*Yours faithfully* s\'emploie après *Dear Sir or Madam*).',
              hint: 'Vérifiez : 1) "Please find attached" ; 2) "look forward to + V-ing" ; 3) "Dear Ms. Bamba" -> "Yours sincerely".',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Final Exam Synthesis',
            stepTheme: 'slate',
            stepTitle: 'Synthèse générale : Épreuve complète d\'Anglais Technique Licence 1',
            paragraphText:
              'Analysons un courriel professionnel d\'incident réseau qui mobilise l\'ensemble des compétences des 3 chapitres :\n*"**Dear Mr. Diallo,**\nI am writing to report a major connectivity issue that **occurred** (Chap. 2 — verbe intransitif actif au Past Simple) at our Abidjan branch two hours **ago** (Chap. 1 — Past Simple). While our team **was deploying** (Chap. 1 — Past Continuous) the new VoIP phones, the core switch suddenly **stopped** responding. Although our local technician **has already checked** (Chap. 1 — Present Perfect avec `already`) the optical fiber patch cords, the uplink **is still** down. The outage **must have been caused** (Chap. 2 — déduction passée au passif) by a firmware bug. **Unless** the switch **is replaced** (Chap. 2 — First Conditional passif avec `unless`) before 5:00 PM, our customer support center **will not be able to** (Chap. 2 — équivalent futur de `can`) process incoming calls.\n**Please find attached** the error logs. I **look forward to hearing** (Chap. 3 — `to + V-ing`) from you urgently.\n**Yours sincerely,**\nKoffi N\'Guessan — Network Administrator"*',
            keyRule:
              'En examen final, relie toujours le vocabulaire technique (VoIP, uplink, firmware, patch cord, outage) à la rigueur grammaticale (temps, modaux, passif, conditionnels, prépositions).',
            konanTip:
              'Avant de valider ta copie d\'examen ou ton QCM de 30 questions sur KONAN AI, vérifie systématiquement : 1) les marqueurs de temps (`since/for` vs `ago/yesterday`) ; 2) l\'absence de `will/would` après `if, unless, when, as soon as, until` ; 3) l\'ordre `S + V` dans les questions indirectes ; 4) les noms indénombrables (`software, information, equipment`).',
            exercise: {
              id: 'lmd_srit_l1_anglais_c3_p3_ex6',
              type: 'mcq',
              prompt:
                'Complete this final exam synthesis sentence: "In his incident report yesterday, the network administrator explained that a firmware bug ______ the uplink outage, and he warned the team ______ the router until the backup configuration ______."',
              options: [
                'has caused / to not reboot / will be saved',
                'had caused / not to reboot / was saved',
                'was caused / not to reboot / had saved',
                'had been caused / don\'t reboot / is saved',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1) Après *explained* (au passé, *yesterday*), le verbe actif `caused` (le bug a causé la panne) recule au **Past Perfect actif** : **`had caused`**.\n2) L\'ordre négatif rapporté après *warned the team* se construit avec **`not to + Base Verb`** : **`not to reboot`**.\n3) Dans la subordonnée temporelle passive introduite par **`until`** au discours indirect passé, la configuration de sauvegarde subit l\'action d\'être sauvegardée (voix passive au passé, sans `will/would`) : **`was saved`**.',
              hint: '1) Discours indirect au passé : le bug a causé la panne (actif -> had caused) ; 2) Ordre négatif : warned + Object + not to + BV ; 3) Passif après "until" au passé : was saved.',
            },
          },
        ],
      }),
    ],
  },
];
