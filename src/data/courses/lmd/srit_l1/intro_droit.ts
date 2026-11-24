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

export const INTRO_DROIT_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : LE DROIT OBJECTIF — CARACTÈRES DE LA RÈGLE DE DROIT ET BRANCHES
  // ============================================================================
  {
    id: 'lmd_srit_l1_droit_ch1',
    subjectId: 'lmd_intro_droit',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Programme LMD SRIT 1 — Introduction à l’étude du Droit',
    title: 'Le Droit objectif — Caractères de la règle de droit et Branches du droit',
    summary:
      'Dualité Droit objectif / droits subjectifs, les 4 caractères de la règle de droit, sanctions étatiques, règles impératives vs supplétives, distinction avec la morale et la religion, summa divisio Droit public / Droit privé / Droits mixtes.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_droit_c1_p1',
        order: 1,
        title: 'Définition du Droit et caractères fondamentaux de la règle de droit',
        summary:
          'Distinguer le Droit objectif des droits subjectifs et maîtriser les caractères général, abstrait, extérieur et permanent de la norme juridique.',
        conceptExplanation:
          "Toute vie en société requiert un ordre normatif (*Ubi societas, ibi jus* : là où il y a une société, il y a du droit). En français, le mot « droit » revêt deux sens complémentaires que l'anglais distingue par *Law* et *Rights* : le **Droit objectif** (l'ensemble des règles de conduite sociale édictées et sanctionnées par l'autorité publique) et les **droits subjectifs** (les prérogatives individuelles reconnues aux sujets de droit par le Droit objectif). La règle de droit objectif se reconnaît à ses caractères spécifiques.",
        keyRule:
          'Le Droit objectif (*Law*) est l’ensemble des règles générales régissant la vie en société, tandis que les droits subjectifs (*Rights*) sont les prérogatives concrètes (droit de propriété, droit de créance) dont jouit un individu en vertu du Droit objectif.',
        workedExample: {
          title: 'Identification du caractère général et impersonnel d’une règle de droit',
          statement:
            'Comparer les deux textes suivants : 1) « Tout opérateur de télécommunications exerçant en Côte d’Ivoire doit garantir la confidentialité des correspondances de ses abonnés. » 2) « La société X Télécom est condamnée à payer 15 millions de FCFA de dommages-intérêts à Monsieur Kouassi. » Lequel constitue une règle de droit objectif et pourquoi ?',
          methodSteps: [
            'Analyse du texte 1 : il est formulé de manière abstraite et impersonnelle (« Tout opérateur... ») et vise une catégorie ouverte de personnes sans désigner personne nommément → C’est une règle de Droit objectif.',
            'Analyse du texte 2 : il vise nommément deux personnes déterminées (la société X Télécom et M. Kouassi) pour trancher un litige particulier → C’est une décision individuelle (jugement) et non une règle générale.',
          ],
          conclusion:
            'Une règle reste générale et impersonnelle même si, en pratique, la catégorie visée ne comporte qu’une seule personne à un instant donné (ex: les règles relatives aux fonctions du Président de la République).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Ubi societas, ibi jus',
            stepTheme: 'blue',
            stepTitle: 'La nécessité sociale du Droit et la dualité Droit objectif / droits subjectifs',
            paragraphText:
              "L'adage latin ***Ubi societas, ibi jus*** (« Là où il y a une société, il y a du droit ») exprime que la vie sociale est impossible sans règles organisant les rapports humains pour éviter l'anarchie et la loi du plus fort. La science juridique distingue deux acceptions indissociables : 1) Le **Droit objectif** (souvent écrit avec une majuscule, *Law* en anglais), qui désigne l'ensemble des règles de conduite obligatoires gouvernant les rapports des hommes en société sous la garantie de l'État (ex: le Droit ivoirien, le Droit du travail, le Droit des télécommunications) ; 2) Les **droits subjectifs** (*Rights* en anglais), qui désignent les prérogatives individuelles reconnues par le Droit objectif à un sujet de droit particulier (ex: le droit de propriété d'un étudiant sur son ordinateur, le droit de vote, le droit au respect de la vie privée).",
            keyRule:
              'Les droits subjectifs (prérogatives individuelles d’une personne) n’existent et ne sont protégés que parce qu’ils sont consacrés par le Droit objectif (les lois et règlements en vigueur).',
            konanTip:
              'Astuce infaillible en QCM : si tu peux remplacer « droit » par « loi / réglementation », c’est le **Droit objectif** ; si tu peux dire « MON droit de... / J’ai le droit de... », c’est un **droit subjectif**.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p1_ex1',
              type: 'mcq',
              prompt:
                'Dans l’affirmation « En vertu du Droit ivoirien de la propriété intellectuelle, cet ingénieur SRIT détient un droit d’auteur exclusif sur le code source du logiciel qu’il a développé », comment qualifie-t-on successivement les deux emplois du mot « droit » ?',
              options: [
                'Le premier désigne le Droit objectif (ensemble des règles) et le second désigne un droit subjectif (prérogative individuelle)',
                'Le premier désigne un droit subjectif et le second désigne le Droit objectif',
                'Les deux emplois désignent exclusivement des règles morales dépourvues de sanction',
                'Les deux emplois désignent des droits purement politiques relevant du droit constitutionnel',
              ],
              correctAnswerIndex: 0,
              explanation:
                '« Le Droit ivoirien de la propriété intellectuelle » est le corpus de règles applicables (Droit objectif), tandis que « son droit d’auteur exclusif » est la prérogative concrète dont jouit l’ingénieur (droit subjectif).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Caractère général',
            stepTheme: 'violet',
            stepTitle: 'Premier caractère : la règle de droit est générale et impersonnelle',
            paragraphText:
              "La règle de droit est **générale** (elle s'applique sur tout le territoire national à tous ceux qui entrent dans son champ d'application) et **impersonnelle** (elle n'est pas édictée pour ou contre un individu nommément désigné, mais s'exprime par des formules telles que *« Quiconque... »*, *« Tout citoyen... »*, *« Tout commerçant... »*). Ce caractère est une garantie fondamentale d'**égalité devant la loi** et de protection contre l'arbitraire. Une règle demeure générale même lorsqu'elle ne vise qu'une catégorie restreinte de personnes (les mineurs, les salariés, les opérateurs télécoms) voire une fonction occupée par une seule personne à la fois (le Président de la République ou le Médiateur de la République), dès lors qu'elle vise la **fonction** et non l'individu en particulier.",
            keyRule:
              'Une règle de droit est générale et impersonnelle dès lors qu’elle vise une catégorie abstraite ou une fonction, même si une seule personne remplit cette fonction à un moment donné.',
            konanTip:
              'En revanche, un décret qui nomme nommément « Monsieur X » au poste de Directeur Général de l’ARTCI ou qui accorde la nationalité à une personne précise est une **mesure individuelle** et non une règle de droit.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p1_ex2',
              type: 'mcq',
              prompt:
                'Pourquoi un article de la Constitution qui définit les pouvoirs du Président de la République conserve-t-il le caractère général et impersonnel d’une règle de droit, bien qu’il n’y ait qu’un seul Président en exercice ?',
              options: [
                'Parce qu’il vise abstraitement la fonction présidentielle et tout titulaire présent ou futur de cette fonction, sans désigner un individu particulier',
                'Parce qu’une règle constitutionnelle est par définition une décision individuelle dépourvue de portée générale',
                'Parce que le Président de la République n’est pas un sujet de droit en Côte d’Ivoire',
                'Parce que ce texte s’applique simultanément à tous les citoyens majeurs sans condition de fonction',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La généralité et l’impersonnalité tiennent au fait que la règle statue par voie abstraite pour l’institution (la fonction présidentielle) et non intuitu personae pour un individu nommément désigné.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Caractère abstrait & permanent',
            stepTheme: 'violet',
            stepTitle: 'Deuxième caractère : la règle de droit est abstraite et permanente',
            paragraphText:
              "La règle de droit est **abstraite** : elle ne décrit pas une histoire concrète vécue, mais prévoit une **hypothèse** (une situation juridique-type, par exemple : *« Tout fait quelconque de l'homme, qui cause à autrui un dommage... »* à l'article 1382 du Code civil) à laquelle elle attache un **effet juridique** (*« ...oblige celui par la faute duquel il est arrivé à le réparer »*). Elle est également **permanente** (ou durable) : cela ne signifie pas qu'elle est éternelle, mais qu'elle s'applique de manière constante et illimitée en nombre de fois depuis son **entrée en vigueur** jusqu'à son **abrogation** (expresse ou tacite), chaque fois que les conditions qu'elle prévoit sont réunies.",
            keyRule:
              'La permanence de la règle de droit signifie qu’elle s’applique sans interruption de son entrée en vigueur jusqu’à son abrogation, et qu’une simple désuétude (non-application prolongée) ne suffit pas en principe à l’abroger.',
            konanTip:
              'Structure logique de toute règle de droit : **Présupposé / Hypothèse** (*Si telle situation se produit...*) $\\longrightarrow$ **Imputation / Effet de droit** (*...alors telle conséquence juridique s’applique*).',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p1_ex3',
              type: 'mcq',
              prompt:
                'Que signifie précisément le caractère « permanent » de la règle de droit ?',
              options: [
                'Qu’elle s’applique de façon continue et répétée à toutes les situations entrant dans son champ, depuis son entrée en vigueur jusqu’à son abrogation',
                'Qu’aucune loi votée par le Parlement ne peut jamais être modifiée ni abrogée par une loi nouvelle',
                'Qu’une loi cesse automatiquement d’être obligatoire dès lors qu’elle n’a pas été appliquée par un tribunal pendant six mois',
                'Qu’elle ne s’applique qu’une seule fois au premier litige survenu après sa publication au Journal Officiel',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La règle de droit ne s’épuise pas par une première application : elle a vocation à régir un nombre indéfini de situations futures tant qu’elle n’a pas été régulièrement abrogée.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Caractère extérieur',
            stepTheme: 'violet',
            stepTitle: 'Troisième caractère : la règle de droit est extérieure et à finalité sociale',
            paragraphText:
              "La règle de droit est **extérieure** à la volonté individuelle des citoyens : d'une part, elle émane d'une autorité publique extérieure aux individus qui doivent lui obéir (le Parlement, le pouvoir exécutif) ; d'autre part, elle régit avant tout les **comportements extériorisés** dans la vie sociale, et non les simples pensées intimes ou intentions tant qu'elles ne se traduisent pas par un acte extérieur troublant l'ordre social. Sa **finalité est sociale** : organiser la coexistence pacifique, garantir la **sécurité juridique** (prévisibilité des règles) et promouvoir la **justice** (justice commutative qui assure l'équilibre des échanges, et justice distributive qui répartit les charges et ressources selon les besoins ou capacités).",
            keyRule:
              'Le Droit ne punit pas la simple pensée coupable non suivie d’un commencement d’exécution extérieur : il régit les comportements sociaux extériorisés.',
            konanTip:
              'Même lorsqu’un juge pénal ou civil recherche l’intention (la bonne ou mauvaise foi, la préméditation), il ne le fait qu’après qu’un acte matériel extérieur a été commis.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p1_ex4',
              type: 'mcq',
              prompt:
                'En quoi consiste le caractère « extérieur » de la règle de droit ?',
              options: [
                'Elle est édictée par une autorité extérieure aux individus et ne saisit que les comportements extériorisés dans la vie sociale (et non les simples pensées intimes)',
                'Elle est obligatoirement rédigée par des organisations internationales situées à l’extérieur du territoire national',
                'Elle s’applique uniquement aux citoyens résidant à l’extérieur des frontières de la Côte d’Ivoire',
                'Elle interdit toute prise en compte de la bonne ou de la mauvaise foi dans l’exécution des contrats',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Contrairement à la morale qui sonde la conscience purement intérieure, la règle de droit est hétéronome (imposée de l’extérieur par l’État) et ne régit que les actes socialement extériorisés.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Caractère obligatoire',
            stepTheme: 'violet',
            stepTitle: 'Quatrième caractère : la règle de droit est obligatoire et coercitive',
            paragraphText:
              "Toute règle de droit est **obligatoire** : elle n'est ni un simple conseil, ni une recommandation facultative. Elle ordonne (obligation de faire : payer ses impôts, déclarer un traitement de données personnelles auprès de l'ARTCI), elle interdit (obligation de ne pas faire : interdiction de pirater un système informatique, interdiction de voler) ou elle fixe les conditions de validité d'un acte. Surtout, ce caractère obligatoire est garanti par la **coercition étatique** : l'État détient le **monopole de la contrainte légitime** (Max Weber) pour imposer le respect de la règle de droit par la force publique et infliger une **sanction** en cas de violation.",
            keyRule:
              'Le critère décisif qui distingue la règle de droit de toutes les autres règles sociales (morale, religion, politesse) est sa **sanction coercitive étatique** (mise en œuvre par les tribunaux et la force publique).',
            konanTip:
              'Nul ne peut se faire justice à soi-même : en cas de violation d’un droit, seul l’État (par ses juridictions et forces de l’ordre) peut prononcer et exécuter la contrainte.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p1_ex5',
              type: 'mcq',
              prompt:
                'Quel est le critère spécifique et décisif qui permet de distinguer à coup sûr une règle de droit d’une règle morale, religieuse ou de courtoisie ?',
              options: [
                'Elle est assortie d’une sanction extérieure prononcée et exécutée par l’autorité publique (coercition étatique)',
                'Elle est toujours plus ancienne que les règles morales et religieuses',
                'Elle interdit le vol et l’homicide, alors que la morale et la religion les autorisent',
                'Elle est uniquement transmise par tradition orale sans jamais faire l’objet d’un texte écrit',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si la morale et la religion peuvent avoir le même contenu (ex: ne pas tuer, ne pas voler), seule la règle de droit bénéficie d’une sanction organisée et appliquée par la puissance publique de l’État.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Impérative vs Supplétive',
            stepTheme: 'orange',
            stepTitle: 'Degré d’impérativité : règles impératives (d’ordre public) versus règles supplétives',
            paragraphText:
              "Attention au piège : **toutes les règles de droit sont obligatoires**, mais elles n'ont pas toutes le même degré d'impérativité vis-à-vis de la volonté des particuliers ! On distingue : 1) Les **règles impératives (ou d'ordre public)**, qui s'imposent absolument à tous sans que les particuliers puissent les écarter par un contrat contraire (article 6 du Code civil : *« On ne peut déroger, par des conventions particulières, aux lois qui intéressent l'ordre public et les bonnes mœurs »* ; ex: lois pénales, salaire minimum SMIG, règles du mariage) ; 2) Les **règles supplétives (ou interprétatives de volonté)**, qui ne s'appliquent que si les parties n'ont pas exprimé une volonté différente dans leur contrat (elles *suppléent* au silence des parties, mais deviennent pleinement obligatoires si les parties n'y ont pas dérogé ; ex: dans une vente, le lieu de livraison ou le régime matrimonial légal à défaut de contrat de mariage).",
            keyRule:
              'Une règle supplétive EST une règle obligatoire : elle s’impose de plein droit aux parties dès lors que celles-ci n’ont pas prévu une clause contraire dans leur contrat.',
            konanTip:
              'Ne coche jamais qu’une règle supplétive est « facultative et dépourvue de force obligatoire » : elle s’applique obligatoirement par défaut en cas de silence du contrat !',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p1_ex6',
              type: 'mcq',
              prompt:
                'Quelle est la différence exacte entre une règle de droit impérative (d’ordre public) et une règle de droit supplétive ?',
              options: [
                'Nul ne peut déroger par contrat à une règle impérative, tandis que les parties peuvent écarter une règle supplétive par une clause contraire (à défaut, la règle supplétive s’impose à elles)',
                'Seule la règle impérative est une règle de droit, tandis que la règle supplétive est une simple règle de politesse non sanctionnée par le juge',
                'Une règle supplétive ne s’applique qu’en droit pénal et jamais en droit des contrats',
                'Les particuliers peuvent librement déroger à une règle impérative d’ordre public par une simple convention sous seing privé',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Conformément à l’article 6 du Code civil, les règles impératives (d’ordre public) interdisent toute dérogation conventionnelle, tandis que les règles supplétives laissent aux contractants la liberté d’aménager autrement leurs rapports mais s’imposent à eux s’ils ont gardé le silence.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_droit_c1_p2',
        order: 2,
        title: 'Les sanctions étatiques et la distinction Droit / Morale / Religion',
        summary:
          'Maîtriser les trois grandes catégories de sanctions juridiques (civiles, pénales, administratives) et comparer la règle de droit aux règles morale et religieuse.',
        conceptExplanation:
          "L'effectivité de la règle de droit repose sur l'intervention de l'appareil étatique (juges, huissiers, forces de l'ordre) qui prononce et exécute des sanctions. Contrairement au langage courant où « sanction » est synonyme de punition, la sanction juridique poursuit trois finalités distinctes selon la branche du droit : contraindre à l'exécution, réparer un préjudice ou punir un comportement antisociaux.",
        keyRule:
          'Une même infraction (ex: un accès frauduleux à un serveur informatique causant une perte de données à une entreprise) peut entraîner cumulativement une sanction pénale (amende/prison pour punir le trouble à l’ordre public) et une sanction civile (dommages-intérêts pour réparer le préjudice de la victime).',
        workedExample: {
          title: 'Qualification des sanctions applicables en cas de cyberattaque et de contrat nul',
          statement:
            'Un pirate informatique pénètre dans le réseau d’une banque ivoirienne et détruit une base de données. Le tribunal le condamne à 2 ans d’emprisonnement, 5 millions de FCFA d’amende pénale au profit du Trésor public, et 20 millions de FCFA de dommages-intérêts au profit de la banque. Par ailleurs, le contrat par lequel il avait vendu les données volées à un tiers est annulé par le juge. Qualifier chacune de ces sanctions.',
          methodSteps: [
            '2 ans d’emprisonnement et 5 millions d’amende versés au Trésor public : sanctions pénales (visent à punir le délinquant au nom de la société).',
            '20 millions de dommages-intérêts versés à la banque victime : sanction civile de réparation (responsabilité civile délictuelle).',
            'Annulation du contrat illicite de vente de données : sanction civile de nullité (anéantissement rétroactif d’un acte juridique contraire à la loi).',
          ],
          conclusion:
            'Il ne faut jamais confondre l’amende pénale (punition versée à l’État) et les dommages-intérêts civils (indemnisation versée à la victime).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Sanctions civiles',
            stepTheme: 'blue',
            stepTitle: 'Les sanctions civiles : exécution forcée, réparation (dommages-intérêts) et nullité',
            paragraphText:
              "En droit privé, les **sanctions civiles** visent à rétablir l'équilibre rompu entre particuliers et se répartissent en trois sous-catégories : 1) Les sanctions visant l'**exécution** (contraindre le débiteur récalcitrant à s'exécuter : **saisie** de ses biens ou de son compte bancaire par un commissaire de justice/huissier, **expulsion** d'un locataire qui ne paie pas son loyer, **astreinte** financière par jour de retard) ; 2) Les sanctions visant la **réparation** d'un dommage subi par une victime : le versement de **dommages-intérêts** (somme d'argent compensant le préjudice matériel ou moral) ; 3) Les sanctions frappant un acte juridique irrégulier : la **nullité** (anéantissement rétroactif d'un contrat conclu en violation de la loi), la **résolution** ou l'**inopposabilité**.",
            keyRule:
              'Les trois grandes familles de sanctions civiles sont : 1) l’exécution forcée (saisie, expulsion, astreinte), 2) la réparation (dommages-intérêts versés à la victime), 3) l’anéantissement de l’acte (nullité, résolution).',
            konanTip:
              'La **nullité** sanctionne un vice existant dès la formation du contrat (contrat mal né), tandis que la **résolution/résiliation** sanctionne l’inexécution d’un contrat valablement formé.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p2_ex1',
              type: 'mcq',
              prompt:
                'Quelle sanction civile prononcée par le juge a pour effet d’anéantir rétroactivement un contrat qui ne respectait pas les conditions légales de validité lors de sa conclusion ?',
              options: [
                'La nullité du contrat',
                'La réclusion criminelle à perpétuité',
                'L’amende contraventionnelle de police',
                'La révocation disciplinaire de la fonction publique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La nullité est la sanction civile qui frappe un acte juridique entaché d’un vice lors de sa formation : l’acte est censé n’avoir jamais existé (effet rétroactif).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Sanctions pénales',
            stepTheme: 'blue',
            stepTitle: 'Les sanctions pénales : punir les infractions (contraventions, délits, crimes)',
            paragraphText:
              "Contrairement aux sanctions civiles qui indemnisent une victime privée, les **sanctions pénales** (ou peines) ont une fonction **répressive et dissuasive** : elles punissent au nom de la société (représentée par le Ministère public / Procureur de la République) l'auteur d'une infraction qui trouble l'ordre public. En vertu du principe de la **légalité des délits et des peines** (*Nullum crimen, nulla poena sine lege*), les infractions sont classées selon leur gravité en trois catégories : 1) Les **contraventions** (infractions les moins graves, punies d'amendes ou d'un court emprisonnement de simple police) ; 2) Les **délits** (infractions de gravité moyenne : vol simple, escroquerie, cybercriminalité courante, punis d'emprisonnement correctionnel et d'amende pénale) ; 3) Les **crimes** (infractions les plus graves : meurtre, assassinat, vol à main armée, punis de réclusion criminelle pouvant aller jusqu'à la perpétuité).",
            keyRule:
              'Tripartition des infractions pénales par gravité croissante : Contravention $\\longrightarrow$ Délit $\\longrightarrow$ Crime.',
            konanTip:
              'Piège fréquent : l’**amende** est une peine PÉNALE versée au Trésor public (à l’État), alors que les **dommages-intérêts** sont une réparation CIVILE versée à la victime !',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p2_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la différence fondamentale entre une amende pénale et des dommages-intérêts ?',
              options: [
                'L’amende est une peine répressive versée au Trésor public (à l’État) pour punir une infraction, tandis que les dommages-intérêts sont une sanction civile versée à la victime pour réparer son préjudice',
                'L’amende est versée directement sur le compte bancaire de la victime, tandis que les dommages-intérêts sont versés au Procureur de la République',
                'Les dommages-intérêts ne peuvent être prononcés que pour les crimes passibles de la prison à vie',
                'Il n’existe aucune différence juridique entre une amende et des dommages-intérêts',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’amende est une sanction pénale pécuniaire perçue par l’État en punition d’une infraction ; les dommages-intérêts sont une sanction civile réparatrice allouée à la personne lésée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Sanctions administratives',
            stepTheme: 'violet',
            stepTitle: 'Les sanctions administratives et disciplinaires (État, ARTCI, Fonction publique)',
            paragraphText:
              "Un troisième groupe de sanctions émane des autorités administratives et des juridictions administratives : les **sanctions administratives et disciplinaires**. D'une part, le juge administratif peut prononcer l'**annulation pour excès de pouvoir** d'un acte administratif illégal (décret ou arrêté contraire à la loi). D'autre part, l'Administration ou les Autorités Administratives Indépendantes — comme l'**ARTCI** (Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire) — peuvent infliger des sanctions administratives aux opérateurs ou citoyens en faute : **retrait d'agrément ou de licence**, retrait du permis de conduire, fermeture administrative d'un établissement, sanctions pécuniaires de régulation, ou sanctions disciplinaires contre un fonctionnaire ou un étudiant (avertissement, blâme, suspension, exclusion, révocation).",
            keyRule:
              'Dans le secteur des télécoms et du numérique en Côte d’Ivoire, l’ARTCI dispose d’un pouvoir de sanction administrative (mise en demeure, suspension ou retrait de licence, sanctions pécuniaires) contre les opérateurs qui violent la réglementation.',
            konanTip:
              'Un retrait de licence télécom par l’ARTCI ou la révocation d’un fonctionnaire est une sanction **administrative / disciplinaire** (ni civile, ni pénale).',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p2_ex3',
              type: 'mcq',
              prompt:
                'Lorsque l’ARTCI prononce la suspension de la licence d’un fournisseur d’accès Internet pour non-respect de son cahier des charges réglementaire, de quelle catégorie de sanction s’agit-il ?',
              options: [
                'Une sanction administrative',
                'Une peine criminelle de réclusion',
                'Une sanction civile de résolution de mariage',
                'Une sanction purement morale relevant de la conscience intérieure',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Infligée par une autorité administrative de régulation (l’ARTCI) dans le cadre de ses prérogatives de puissance publique, la suspension ou le retrait d’autorisation est une sanction administrative.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Droit vs Morale',
            stepTheme: 'green',
            stepTitle: 'Comparaison entre la règle de droit et la règle morale (source, finalité, sanction)',
            paragraphText:
              "La **morale** et le **Droit** entretiennent des liens étroits (le droit interdit le meurtre, le vol, la fraude et exige la bonne foi dans les contrats), mais ils se distinguent sur trois plans fondamentaux : 1) **La source** : la morale est **autonome** (dictée par la conscience individuelle ou l'éthique sociale), alors que le droit est **hétéronome** (édicté par une autorité publique extérieure) ; 2) **La finalité et le domaine** : la morale vise le perfectionnement intérieur de l'individu et commande des devoirs de charité ou de gratitude, tandis que le droit vise uniquement l'**ordre social et la sécurité** (il existe des règles juridiques moralement neutres comme rouler à droite ou les délais de procédure, voire amorales comme la prescription acquisitive au profit d'un possesseur de mauvaise foi après 30 ans) ; 3) **La sanction** : la violation de la morale n'entraîne qu'une sanction **intérieure** (remords, culpabilité) ou **sociale diffuse** (réprobation), alors que le droit bénéficie de la **contrainte étatique**.",
            keyRule:
              'Triptyque de distinction Droit vs Morale : 1) Source (Autorité étatique extérieure vs Conscience intérieure), 2) Finalité (Ordre et paix sociale vs Perfectionnement individuel), 3) Sanction (Coercition étatique vs Remords de conscience).',
            konanTip:
              'La prescription extinctive (qui permet à un débiteur ou à un voleur de ne plus pouvoir être poursuivi après l’écoulement d’un long délai légal) illustre que le Droit préfère parfois la sécurité juridique et la paix sociale à la morale pure.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p2_ex4',
              type: 'mcq',
              prompt:
                'Pourquoi le mécanisme juridique de la « prescription » (qui éteint une dette non réclamée ou empêche de poursuivre un auteur après un certain délai légal) montre-t-il que le Droit ne se confond pas avec la Morale ?',
              options: [
                'Parce que la morale condamne toujours le voleur ou le mauvais payeur, tandis que le Droit privilégie après un certain temps la sécurité juridique et la paix sociale',
                'Parce que la prescription oblige le débiteur à payer le double de sa dette par charité chrétienne',
                'Parce que le Droit a pour unique objectif la sainteté intérieure et le salut spirituel de l’âme',
                'Parce que la morale interdit de rembourser ses dettes après un délai de vingt-quatre heures',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour la morale, une dette non payée ou une faute reste un devoir de conscience sans limite de temps ; pour le Droit, la stabilité des situations acquises et l’ordre social imposent la prescription après l’écoulement du délai légal.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Droit vs Religion',
            stepTheme: 'violet',
            stepTitle: 'Distinction entre la règle de droit et la règle religieuse dans un État laïc',
            paragraphText:
              "La **règle religieuse** est un commandement d'origine divine révélé aux croyants en vue d'assurer le salut de leur âme dans l'au-delà. Si certaines règles religieuses rejoignent la règle de droit (*« Tu ne tueras point »*, *« Tu ne voleras point »*), d'autres s'en écartent totalement (obligations de prière, de jeûne, interdits alimentaires, ou interdiction religieuse de certains actes que la loi civile autorise comme le prêt à intérêt ou le divorce). En République de Côte d'Ivoire, la Constitution consacre le principe de **laïcité de l'État** : le Droit positif est séculier, s'applique également à tous les citoyens quelle que soit leur croyance (ou absence de croyance) et sa sanction est **terrestre, immédiate et étatique**, tandis que la sanction religieuse concerne la relation spirituelle du fidèle avec Dieu (péché, jugement divin).",
            keyRule:
              'Dans un État laïc comme la Côte d’Ivoire, la règle de droit émane des organes constitutionnels de l’État, s’applique à tous les citoyens sans distinction de confession et est sanctionnée ici-bas par les tribunaux étatiques.',
            konanTip:
              'Exemple classique en droit ivoirien : seul le mariage célébré devant l’officier de l’état civil produit des effets juridiques légaux ; le mariage purement religieux ou coutumier non déclaré à l’état civil n’a pas de valeur légale en droit positif ivoirien.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p2_ex5',
              type: 'mcq',
              prompt:
                'En Côte d’Ivoire, État laïc selon la Constitution, quelle est la différence essentielle entre la sanction d’une règle religieuse et la sanction d’une règle de droit ?',
              options: [
                'La sanction religieuse est d’ordre spirituel (entre le croyant et Dieu), tandis que la sanction juridique est temporelle, extérieure et infligée par les tribunaux de l’État à tous les citoyens',
                'La règle religieuse est votée par l’Assemblée nationale et exécutée par la gendarmerie nationale',
                'En Côte d’Ivoire, le mariage purement religieux non célébré devant l’officier d’état civil suffit à produire tous les effets civils légaux',
                'La règle de droit ne s’applique qu’aux personnes non croyantes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En vertu de la laïcité de l’État ivoirien, l’ordre juridique étatique est distinct des commandements confessionnels : sa sanction est terrestre et exercée par la puissance publique sur tous les sujets de droit.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse des normes',
            stepTheme: 'slate',
            stepTitle: 'Règles de bienséance (politesse, courtoisie, honneur) et règles de droit',
            paragraphText:
              "Outre la morale et la religion, la vie sociale connaît des **règles de bienséance, de politesse ou de courtoisie** (saluer ses voisins, céder sa place, envoyer des vœux, respecter un code vestimentaire mondain). Bien qu'elles soient extérieures et sociales, ce ne sont **pas des règles de droit** car leur violation n'est sanctionnée que par la réprobation du groupe social (exclusion mondaine, mauvaise réputation) et jamais par un juge ou la police. Toutefois, une règle morale ou sociale peut devenir une règle de droit lorsque le législateur ou le juge l'intègre dans l'ordre juridique positif (par exemple, l'obligation morale d'aider ses parents dans le besoin est devenue l'**obligation alimentaire** légale sanctionnée par le juge civil, et le devoir de secours à personne en danger est devenu un délit pénal de non-assistance à personne en péril).",
            keyRule:
              'Une règle morale ou de conduite sociale ne devient une règle de droit que lorsqu’elle est consacrée par une source formelle du droit (loi, jurisprudence) et assortie d’une sanction étatique.',
            konanTip:
              'Exemple d’obligation morale restée aux frontières du droit : l’**obligation naturelle** (devoir de conscience non exigible en justice, mais qui, s’il est exécuté volontairement en connaissance de cause, devient une obligation civile valable ne donnant pas lieu à remboursement).',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p2_ex6',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on en droit civil un devoir de conscience (comme aider financièrement un frère ou payer une dette prescrite) dont le créancier ne peut pas exiger l’exécution forcée en justice, mais dont le paiement volontaire est juridiquement valable et ne peut plus être réclamé en remboursement ?',
              options: [
                'Une obligation naturelle',
                'Une infraction criminelle',
                'Une règle constitutionnelle d’ordre public',
                'Une sanction administrative disciplinaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Située à la frontière de la morale et du droit (art. 1235 al. 2 du Code civil), l’obligation naturelle ne peut faire l’objet d’une exécution forcée, mais son exécution volontaire exclut toute répétition (demande de remboursement) et sa promesse d’exécution la transforme en obligation civile.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_droit_c1_p3',
        order: 3,
        title: 'La summa divisio : Droit public, Droit privé et Droits mixtes',
        summary:
          'Classer avec précision toutes les branches du droit interne et international entre le Droit public, le Droit privé et les droits mixtes.',
        conceptExplanation:
          "Héritée du droit romain (Ulpien), la classification fondamentale (*summa divisio*) du droit positif oppose deux grands ensembles : le **Droit public** (qui organise l'État et les collectivités publiques et régit leurs rapports avec les particuliers dans un but d'intérêt général, avec des prérogatives de puissance publique) et le **Droit privé** (qui régit les rapports des particuliers — personnes physiques ou morales privées — entre eux sur un pied d'égalité, en vue de la défense des intérêts privés). Certaines branches transversales combinent les deux logiques et sont qualifiées de **droits mixtes**.",
        keyRule:
          'Droit public = présence d’une personne publique (État, mairie), finalité d’intérêt général et rapport vertical d’autorité (puissance publique). Droit privé = rapports horizontaux d’égalité entre particuliers (individus, sociétés commerciales) et défense d’intérêts privés.',
        workedExample: {
          title: 'Rattachement d’un litige à la bonne branche du droit',
          statement:
            'Déterminer de quelle branche précise du droit relèvent les trois situations suivantes : 1) Un litige entre un ingénieur réseau salarié et la société privée Orange CI concernant son licenciement ; 2) Un recours formé par un citoyen pour faire annuler un arrêté municipal illégal du Maire de Cocody ; 3) L’immatriculation au RCCM d’une Société à Responsabilité Limitée (SARL) de services informatiques.',
          methodSteps: [
            '1) Litige salarié / employeur privé sur un contrat de travail : relève du Droit du travail (branche du Droit privé, composante du droit social).',
            '2) Recours en annulation contre un acte d’une autorité administrative (Maire) : relève du Droit administratif (branche du Droit public interne).',
            '3) Création et immatriculation d’une société commerciale (SARL) selon l’Acte uniforme OHADA : relève du Droit commercial / Droit des sociétés (branche du Droit privé).',
          ],
          conclusion:
            'Identifier la qualité des parties (personne publique ou personne privée) et la nature de l’acte permet toujours de rattacher une situation à la branche du droit compétente.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Summa divisio',
            stepTheme: 'blue',
            stepTitle: 'Les critères de distinction entre le Droit public et le Droit privé',
            paragraphText:
              "La ***summa divisio*** (division suprême) partage le système juridique en deux grandes sphères : le **Droit public** et le **Droit privé**. Trois critères les opposent : 1) **La finalité** : le Droit public poursuit la satisfaction de l'**intérêt général**, tandis que le Droit privé assure la protection et la conciliation des **intérêts particuliers** ; 2) **Le caractère des règles et l'équilibre des rapports** : le Droit public est un droit **inégalitaire et impératif** où l'Administration dispose de **prérogatives de puissance publique** (expropriation, réquisition, décision exécutoire unilatérale) face à l'administré, tandis que le Droit privé repose sur l'**égalité des sujets** et le principe de l'autonomie de la volonté (liberté contractuelle) ; 3) **Les juridictions compétentes** : contentieux administratif (Conseil d'État au sommet) versus contentieux judiciaire civil et commercial (Cour de cassation et CCJA au sommet).",
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Panorama de la Summa Divisio des branches du Droit',
              caption: 'Classification fondamentale entre Droit public, Droit privé (interne et international) et Droits mixtes.',
              matrix2x2: {
                topAxis: ['Droit Public (Intérêt général / État)', 'Droit Privé (Intérêts privés / Particuliers)'],
                leftAxis: ['Branches fondamentales internes', 'Ouverture internationale & Droits mixtes'],
                topLeft: {
                  title: 'Droit Public Interne',
                  items: [
                    'Droit constitutionnel (institutions politiques)',
                    'Droit administratif (administration & services publics)',
                    'Droit financier & fiscal (budget de l’État, impôts)',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Droit Privé Interne',
                  items: [
                    'Droit civil (tronc commun : personnes, famille, contrats, biens)',
                    'Droit commercial & des affaires (OHADA, commerçants, sociétés)',
                    'Droit social (Droit du travail + Sécurité sociale CNPS)',
                  ],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Droit International (Public & Privé)',
                  items: [
                    'Droit international public (États, ONU, UA, CEDEAO, traités)',
                    'Droit international privé (conflits de lois/juridictions avec élément d’extranéité)',
                  ],
                  color: 'violet',
                },
                bottomRight: {
                  title: 'Droits Mixtes (Public + Privé)',
                  items: [
                    'Droit pénal (infraction réprimée par l’État, jugée par les tribunaux judiciaires)',
                    'Droit processuel (procédure civile, pénale, administrative)',
                    'Droit du numérique & des télécoms (régulation ARTCI + contrats/données)',
                  ],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'Le Droit public régit les relations verticales impliquant la puissance publique dans un but d’intérêt général ; le Droit privé régit les relations horizontales entre particuliers sur un pied d’égalité.',
            konanTip:
              'Lorsque l’État ou une mairie agit comme une puissance publique (impôt, police, expropriation), c’est du **Droit public**.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p3_ex1',
              type: 'mcq',
              prompt:
                'Sur quels critères principaux repose la distinction classique (summa divisio) entre le Droit public et le Droit privé ?',
              options: [
                'Le Droit public vise l’intérêt général et confère à l’État des prérogatives de puissance publique (rapport inégalitaire), tandis que le Droit privé régit les rapports d’égalité entre particuliers pour la défense de leurs intérêts privés',
                'Le Droit public est composé uniquement de règles orales facultatives, tandis que le Droit privé est composé uniquement de lois constitutionnelles écrites',
                'Le Droit public s’applique exclusivement aux sociétés commerciales privées et le Droit privé s’applique uniquement aux ministères de l’État',
                'Le Droit privé interdit la conclusion de contrats entre citoyens majeurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La summa divisio oppose la sphère de la puissance publique orientée vers l’intérêt général (Droit public, rapport vertical) à la sphère des relations entre personnes privées placées sur un pied d’égalité juridique (Droit privé, rapport horizontal).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Droit public',
            stepTheme: 'violet',
            stepTitle: 'Les branches du Droit public : constitutionnel, administratif, financier/fiscal et international public',
            paragraphText:
              "Le **Droit public** comprend quatre branches majeures : 1) Le **Droit constitutionnel**, qui fixe les règles relatives à la forme de l'État, à l'organisation et au fonctionnement des pouvoirs politiques (Président de la République, Gouvernement, Parlement : Assemblée nationale et Sénat), aux élections et aux libertés fondamentales ; 2) Le **Droit administratif**, qui régit l'organisation de l'Administration (ministères, préfectures, collectivités territoriales : régions et communes, établissements publics comme une grande école publique), la gestion des services publics et les rapports avec les administrés ; 3) Le **Droit financier public (ou finances publiques et droit fiscal)**, qui encadre le budget de l'État (lois de finances), les dépenses publiques et le recouvrement des impôts et taxes ; 4) Le **Droit international public**, qui régit les rapports entre les **États souverains** et les **organisations internationales intergouvernementales** (ONU, Union Africaine, CEDEAO, UEMOA, UIT).",
            keyRule:
              'Les quatre branches du Droit public sont : Droit constitutionnel (pouvoir politique), Droit administratif (administration et services publics), Finances publiques/Droit fiscal (budget et impôts) et Droit international public (États et organisations internationales).',
            konanTip:
              'Une grande école publique étant un Établissement Public National (EPN), son organisation administrative interne relève du **Droit administratif**.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p3_ex2',
              type: 'mcq',
              prompt:
                'Quelle branche du Droit public détermine l’organisation des pouvoirs politiques de l’État (Président de la République, Assemblée nationale, Sénat), le mode de scrutin électoral et les droits fondamentaux des citoyens ?',
              options: [
                'Le Droit constitutionnel',
                'Le Droit commercial de l’OHADA',
                'Le Droit civil des obligations',
                'Le Droit international privé',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Droit constitutionnel a pour objet l’encadrement juridique des phénomènes politiques, la séparation des pouvoirs au sein de l’État et la garantie des droits et libertés inscrits dans la Constitution.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Droit privé',
            stepTheme: 'violet',
            stepTitle: 'Les branches du Droit privé : Droit civil (tronc commun), Droit commercial (OHADA) et Droit social',
            paragraphText:
              "Le **Droit privé** a pour tronc commun historique le **Droit civil**, qui constitue le **droit commun** applicable à tous les particuliers par défaut lorsqu'aucun droit spécial ne s'applique : il régit l'état des personnes, la famille (mariage, filiation, successions), les biens (propriété), les contrats et la responsabilité civile. Autour du droit civil se sont détachées des branches spécialisées : 1) Le **Droit commercial et des affaires** (harmonisé en Afrique par les Actes uniformes de l'**OHADA**), qui s'applique aux **commerçants**, aux **actes de commerce** et aux **sociétés commerciales** (SARL, SA, SAS) ; 2) Le **Droit social**, qui se subdivise en **Droit du travail** (rapports individuels et collectifs entre employeurs privés et salariés subordonnés) et **Droit de la sécurité sociale** (protection contre les risques sociaux : maladie, accidents du travail, retraite gérée par la CNPS).",
            keyRule:
              'Le **Droit civil** est le « droit commun » du droit privé : ses règles s’appliquent toutes les fois qu’une situation entre particuliers n’est pas régie par une règle dérogatoire d’un droit spécial (comme le droit commercial ou le droit du travail).',
            konanTip:
              'Retiens bien l’équation : $\\text{Droit social} = \\text{Droit du travail} + \\text{Droit de la sécurité sociale}$.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p3_ex3',
              type: 'mcq',
              prompt:
                'Pourquoi qualifie-t-on le Droit civil de « droit commun » au sein du Droit privé ?',
              options: [
                'Parce qu’il constitue le tronc fondamental dont les principes généraux s’appliquent à tous les rapports de droit privé dès lors qu’aucune règle spéciale (commerciale, sociale) n’y déroge',
                'Parce qu’il régit uniquement l’organisation administrative des communes et des mairies',
                'Parce qu’il s’applique uniquement aux traités diplomatiques conclus entre États membres de l’ONU',
                'Parce qu’il est voté directement par les conseils municipaux de chaque commune',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit civil est la matrice du droit privé (personnes, famille, biens, obligations/contrats) et a vocation générale à régir toute relation privée non soumise à un droit d’exception.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'DIP vs Droit Int. Public',
            stepTheme: 'orange',
            stepTitle: 'Ne pas confondre Droit international public et Droit international privé (DIP)',
            paragraphText:
              "C'est l'un des pièges les plus classiques des examens de Licence 1 : 1) Le **Droit international public** (branche du Droit public) régit les relations entre les **États** et les **organisations internationales** (ex: traité frontalier ou accord commercial entre la Côte d'Ivoire et le Ghana, Charte de l'ONU) ; 2) Le **Droit international privé (DIP)** (branche du **Droit privé**) régit les rapports entre **personnes privées** (particuliers ou entreprises) qui comportent un **élément d'extranéité** (élément étranger : nationalité, domicile ou lieu d'exécution dans des pays différents). Par exemple : un mariage ou un divorce entre un Ivoirien et une Française domiciliés au Sénégal, ou un contrat de fourniture de serveurs conclu entre une entreprise ivoirienne et une société japonaise. Le DIP détermine le tribunal compétent (**conflit de juridictions**), la loi nationale applicable (**conflit de lois**) et la condition des étrangers.",
            keyRule:
              'Présence d’un **élément d’extranéité** dans une relation entre particuliers ou entreprises privées (mariage mixte, succession internationale, contrat commercial transfrontalier) = **Droit international privé**.',
            konanTip:
              'Traité entre l’État de Côte d’Ivoire et l’État du Sénégal = **Droit international public**. Contrat de vente ou mariage entre un citoyen ivoirien et une citoyenne sénégalaise = **Droit international privé**.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p3_ex4',
              type: 'mcq',
              prompt:
                'Un ingénieur de nationalité ivoirienne domicilié à Abidjan épouse une citoyenne canadienne à Paris, puis le couple souhaite divorcer ou régler la succession d’un immeuble situé à Montréal. De quelle branche du droit relève la détermination de la loi applicable et du juge compétent ?',
              options: [
                'Du Droit international privé (car il s’agit d’une relation entre personnes privées comportant un élément d’extranéité)',
                'Du Droit international public (car deux États souverains s’affrontent diplomatiquement à l’ONU)',
                'Du Droit administratif interne des collectivités territoriales',
                'Du Droit pénal militaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dès qu’un rapport de droit privé (mariage, contrat, filiation, succession) présente un élément d’extranéité rattachant la situation à plusieurs ordres juridiques étatiques, il relève du Droit international privé (conflits de lois et conflits de juridictions).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Droits mixtes',
            stepTheme: 'violet',
            stepTitle: 'Les droits mixtes : Droit pénal, Droit processuel et Droit du numérique',
            paragraphText:
              "Certaines branches du droit ne peuvent être classées exclusivement ni en droit public ni en droit privé et sont qualifiées de **droits mixtes** : 1) Le **Droit pénal** (droit criminel) : par sa nature et sa finalité, il touche au **droit public** car l'infraction trouble l'ordre social et c'est l'**État** (via le Procureur de la République) qui exerce l'action publique et détient le monopole de punir ; mais par sa technique et son application, il est rattaché au **droit privé** car il protège les droits individuels des victimes (vie, propriété, honneur) et est jugé par les **juridictions de l'ordre judiciaire** ; 2) Le **Droit processuel** (ou droit judiciaire : procédure civile, procédure pénale, contentieux administratif), qui organise le déroulement du procès devant un service public de l'État (la Justice) pour trancher des litiges privés ou publics ; 3) Le **Droit du numérique et des télécommunications**, qui mêle régulation publique (ARTCI, cybercriminalité) et droit privé (contrats informatiques, commerce électronique, propriété intellectuelle des logiciels).",
            keyRule:
              'Le **Droit pénal** est l’exemple type du **droit mixte** : il oppose la puissance publique (Ministère public) au délinquant pour défendre l’ordre social (aspect public), mais il protège les personnes et biens privés devant les tribunaux judiciaires (aspect privé).',
            konanTip:
              'En Côte d’Ivoire comme en France, les professeurs et magistrats du droit pénal sont traditionnellement rattachés aux facultés de droit privé et aux juridictions judiciaires, bien que le droit pénal soit par nature un droit mixte.',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p3_ex5',
              type: 'mcq',
              prompt:
                'Pourquoi le Droit pénal est-il classé par la doctrine juridique parmi les « droits mixtes » ?',
              options: [
                'Parce qu’il met en œuvre le pouvoir répressif de l’État pour défendre l’ordre public (aspect droit public), tout en protégeant les personnes et biens privés devant les juridictions de l’ordre judiciaire (aspect droit privé)',
                'Parce qu’il s’applique moitié en langue française et moitié en langue anglaise',
                'Parce qu’il autorise les victimes privées à emprisonner elles-mêmes les coupables sans passer par un tribunal de l’État',
                'Parce qu’il ne comporte aucune sanction obligatoire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit pénal combine la défense de l’intérêt général par le Ministère public au nom de l’État (logique de droit public) et la sauvegarde des libertés individuelles et intérêts privés devant le juge judiciaire (logique de droit privé).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Droit des TIC / SRIT',
            stepTheme: 'slate',
            stepTitle: 'Application au métier d’ingénieur SRIT : la transversalité juridique d’un projet télécom',
            paragraphText:
              "Dans sa pratique professionnelle en Côte d'Ivoire, un spécialiste en **Systèmes, Réseaux Informatiques et Télécommunications (SRIT)** est quotidiennement au carrefour de toutes ces branches du droit : lorsqu'il sollicite une autorisation de fréquences radioélectriques ou déclare un fichier de données à caractère personnel auprès de l'**ARTCI** (Loi n° 2013-450), il applique du **droit public / administratif de régulation** ; lorsqu'il négocie un contrat d'hébergement Cloud ou de maintenance réseau avec une entreprise cliente, il applique du **droit privé (droit civil des contrats et droit commercial OHADA)** ; lorsqu'il sécurise un serveur contre les intrusions et collecte des logs en vue de poursuites sur le fondement de la **Loi n° 2013-451 relative à la lutte contre la cybercriminalité**, il applique du **droit pénal (droit mixte)**.",
            keyRule:
              'En Côte d’Ivoire, deux lois majeures de 2013 encadrent l’activité SRIT : la loi n° 2013-450 (protection des données à caractère personnel) et la loi n° 2013-451 (lutte contre la cybercriminalité).',
            konanTip:
              'Retiens ces deux références législatives ivoiriennes emblématiques du numérique : **Loi n° 2013-450** (Données personnelles / ARTCI) et **Loi n° 2013-451** (Cybercriminalité).',
            exercise: {
              id: 'lmd_srit_l1_droit_c1_p3_ex6',
              type: 'mcq',
              prompt:
                'Lorsqu’un administrateur réseau en Côte d’Ivoire aide la Plateforme de Lutte Contre la Cybercriminalité (PLCC) et le Procureur de la République à identifier l’auteur d’une intrusion frauduleuse dans un système d’information (Loi n° 2013-451), quelle branche du droit est principalement mise en œuvre ?',
              options: [
                'Le Droit pénal (droit mixte réprimant les infractions cybercriminelles)',
                'Le Droit civil de la filiation et des régimes matrimoniaux',
                'Le Droit international public des frontières maritimes',
                'Le Droit fiscal des impôts fonciers agricoles',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’accès ou le maintien frauduleux dans un système d’information constitue un délit pénal prévu et réprimé par la loi ivoirienne n° 2013-451 relative à la lutte contre la cybercriminalité.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : LES SOURCES DU DROIT, APPLICATION DANS LE TEMPS ET JURIDICTIONS
  // ============================================================================
  {
    id: 'lmd_srit_l1_droit_ch2',
    subjectId: 'lmd_intro_droit',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Programme LMD SRIT 1 — Introduction à l’étude du Droit (Sources & Juridictions)',
    title: 'Les Sources du droit, l’Application de la loi dans le temps et l’Organisation juridictionnelle ivoirienne',
    summary:
      'Pyramide de Kelsen (Constitution, Traités/OHADA, Lois, Règlements), sources indirectes (jurisprudence, coutume, doctrine), entrée en vigueur et conflits de lois dans le temps, organisation des juridictions en Côte d’Ivoire.',
    prerequisiteChapterIds: ['lmd_srit_l1_droit_ch1'],
    points: [
      makePoint({
        id: 'lmd_srit_l1_droit_c2_p1',
        order: 1,
        title: 'Les sources directes (hiérarchie des normes de Kelsen) et indirectes du Droit',
        summary:
          'Maîtriser la pyramide de Kelsen en Côte d’Ivoire (Constitution, Traités/OHADA, Loi, Règlement) ainsi que la coutume, la jurisprudence et la doctrine.',
        conceptExplanation:
          "Les règles de droit positif ne forment pas un amas désordonné : selon le théoricien du droit Hans Kelsen (1881–1973), l'ordre juridique est structuré comme une **pyramide hiérarchisée de normes** (*hiérarchie des normes*) dans laquelle chaque norme inférieure tire sa validité de sa conformité à la norme immédiatement supérieure. À côté de ces sources écrites **directes** (Constitution, traités internationaux et droit communautaire OHADA/UEMOA, lois, règlements), il existe des sources **indirectes ou d'interprétation** (la coutume, la jurisprudence et la doctrine).",
        keyRule:
          'Ordre décroissant de la pyramide de Kelsen en Côte d’Ivoire : 1) Bloc de constitutionnalité (Constitution de 2016) $\\longrightarrow$ 2) Bloc de conventionnalité (Traités internationaux ratifiés & Actes uniformes OHADA) $\\longrightarrow$ 3) Bloc de légalité (Lois organiques, lois ordinaires, ordonnances ratifiées) $\\longrightarrow$ 4) Bloc réglementaire (Décrets présidentiels, arrêtés ministériels, préfectoraux et municipaux).',
        workedExample: {
          title: 'Résolution d’un conflit hiérarchique entre deux normes juridiques en Côte d’Ivoire',
          statement:
            'Un arrêté pris par un ministre ivoirien contredit un décret signé par le Président de la République, et une loi ordinaire nationale sur les sociétés commerciales contredit une disposition d’un Acte uniforme de l’OHADA. Comment le juge résout-il chacun de ces deux conflits de normes ?',
          methodSteps: [
            'Conflit Arrêté ministériel vs Décret présidentiel : au sein du bloc réglementaire, le décret du Président de la République (chef de l’Exécutif) est supérieur à l’arrêté ministériel → L’arrêté contraire est illégal et encourt l’annulation pour excès de pouvoir.',
            'Conflit Loi nationale ordinaire vs Acte uniforme OHADA : en vertu de la Constitution ivoirienne (supériorité des traités ratifiés sur les lois) et de l’article 10 du Traité de l’OHADA, les Actes uniformes sont directement applicables et obligatoires nonobstant toute disposition contraire de droit interne → L’Acte uniforme OHADA prime sur la loi nationale.',
          ],
          conclusion:
            'Dans la pyramide de Kelsen, la norme inférieure doit toujours respecter la norme supérieure sous peine d’inconstitutionnalité, d’inconventionnalité ou d’illégalité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Sommet de Kelsen',
            stepTheme: 'blue',
            stepTitle: 'Le sommet de la pyramide : le Bloc de constitutionnalité (Constitution ivoirienne de 2016)',
            paragraphText:
              "Formalisée par le juriste autrichien **Hans Kelsen**, la **hiérarchie des normes** place au sommet suprême de l'ordre juridique interne la **Constitution** (en Côte d'Ivoire, la **Constitution du 8 novembre 2016** instituant la IIIe République, révisée en 2020 et 2023, ainsi que son Préambule qui en fait partie intégrante). La Constitution est la norme fondamentale qui organise les pouvoirs publics et garantit les droits et libertés. Le respect de sa suprématie par les lois votées par le Parlement est assuré par le **contrôle de constitutionnalité** exercé par le **Conseil constitutionnel** (par voie d'action *a priori* avant la promulgation de la loi, ou par **voie d'exception** d'inconstitutionnalité soulevée par un justiciable au cours d'un procès devant toute juridiction).",
            visualSchema: {
              type: 'layered_stack',
              title: 'La Pyramide de Kelsen en République de Côte d’Ivoire',
              caption: 'Chaque norme inférieure doit être conforme à toutes les normes situées au-dessus d’elle.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: '1',
                    title: 'Bloc de Constitutionnalité (Sommet)',
                    subtitle: 'Constitution ivoirienne du 8 novembre 2016 (et son Préambule)',
                    color: 'orange',
                  },
                  {
                    badge: '2',
                    title: 'Bloc de Conventionnalité & Droit Communautaire',
                    subtitle: 'Traités internationaux ratifiés + Actes uniformes OHADA & Règlements UEMOA/CEDEAO',
                    color: 'violet',
                  },
                  {
                    badge: '3',
                    title: 'Bloc de Légalité (Pouvoir législatif)',
                    subtitle: 'Lois organiques > Lois ordinaires (Parlement) & Ordonnances présidentielles ratifiées',
                    color: 'blue',
                  },
                  {
                    badge: '4',
                    title: 'Bloc Réglementaire (Pouvoir exécutif)',
                    subtitle: 'Décrets présidentiels > Arrêtés ministériels > Arrêtés préfectoraux & municipaux',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'La Constitution est la norme suprême de l’ordre juridique interne : toute loi contraire à la Constitution est déclarée inconstitutionnelle par le Conseil constitutionnel.',
            konanTip:
              'Retiens les deux voies du contrôle de constitutionnalité en Côte d’Ivoire : 1) **Par voie d’action** (avant la promulgation de la loi, par le Président de la République, les présidents des chambres ou des députés/sénateurs) ; 2) **Par voie d’exception** (soulevée par tout plaideur lors d’un procès en cours).',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p1_ex1',
              type: 'mcq',
              prompt:
                'Quelle norme occupe le sommet absolu de la pyramide de Hans Kelsen dans l’ordre juridique interne de la République de Côte d’Ivoire ?',
              options: [
                'La Constitution (Constitution du 8 novembre 2016 et son Préambule)',
                'Le décret pris en Conseil des ministres par le Président de la République',
                'L’arrêté municipal signé par le Maire de la commune',
                'La coutume locale non écrite',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Constitution (norme fondamentale) occupe le sommet de la pyramide des normes : toutes les autres normes (traités lors de leur ratification, lois organiques, lois ordinaires, décrets et arrêtés) doivent lui être conformes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Traités & OHADA',
            stepTheme: 'violet',
            stepTitle: 'Le bloc de conventionnalité : Traités internationaux et Droit communautaire (OHADA, UEMOA, CEDEAO)',
            paragraphText:
              "Juste en dessous de la Constitution (Article 123 de la Constitution ivoirienne de 2016) se trouvent les **traités ou accords internationaux régulièrement ratifiés**, qui ont, dès leur publication, une **autorité supérieure à celle des lois internes** (sous réserve de réciprocité). Une place majeure est occupée par le **droit communautaire et d'intégration** africain, notamment l'**OHADA** (Organisation pour l'Harmonisation en Afrique du Droit des Affaires, créée par le Traité de Port-Louis du 17 octobre 1993 révisé à Québec en 2008, regroupant 17 États africains) ainsi que les règlements de l'**UEMOA** et de la **CEDEAO**. En vertu de l'article 10 du Traité OHADA, les **Actes uniformes** (droit commercial général, sociétés commerciales, sûretés, recouvrement, comptabilité SYSCOHADA) sont **directement applicables et obligatoires** dans les États parties et abrogent de plein droit toute loi nationale contraire (antérieure ou postérieure).",
            keyRule:
              'Hiérarchie : $\\text{Constitution} > \\text{Traités ratifiés et Actes uniformes de l’OHADA} > \\text{Lois nationales ordinaires}$.',
            konanTip:
              'Si un traité international comporte une clause contraire à la Constitution, il ne peut être ratifié par la Côte d’Ivoire qu’après une **révision préalable de la Constitution** (décidée après contrôle du Conseil constitutionnel).',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p1_ex2',
              type: 'mcq',
              prompt:
                'En droit ivoirien, quelle est la place des traités internationaux régulièrement ratifiés et des Actes uniformes de l’OHADA dans la hiérarchie des normes ?',
              options: [
                'Ils sont inférieurs à la Constitution, mais ont une autorité supérieure à celle des lois nationales ordinaires',
                'Ils sont inférieurs aux arrêtés ministériels et aux décrets présidentiels',
                'Ils sont supérieurs à la Constitution et permettent d’abroger celle-ci sans révision constitutionnelle',
                'Ils n’ont aucune force obligatoire devant les tribunaux ivoiriens',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Conformément à la Constitution ivoirienne (art. 123) et à l’article 10 du Traité de l’OHADA, les traités régulièrement ratifiés et les Actes uniformes se situent sous la Constitution mais au-dessus des lois nationales.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Loi & Règlement',
            stepTheme: 'violet',
            stepTitle: 'Le bloc de légalité (Lois et Ordonnances) et le bloc réglementaire (Décrets et Arrêtés)',
            paragraphText:
              "Au niveau infra-conventionnel, la Constitution répartit les compétences normatives entre le **domaine de la loi** (Article 101 de la Constitution : droits civiques, nationalité, état des personnes, crimes et délits, assiette des impôts, principes fondamentaux de l'enseignement, du travail et de la propriété) et le **domaine du règlement** (Article 103 : toutes les matières autres que celles réservées à la loi). **1) Le bloc de légalité** comprend les **lois organiques** (qui précisent le fonctionnement des institutions constitutionnelles et sont supérieures aux lois ordinaires), les **lois ordinaires** votées par le Parlement (Assemblée nationale et Sénat) —*projet de loi* si l'initiative vient du Président de la République/Exécutif, *proposition de loi* si elle vient d'un parlementaire — et les **ordonnances** prises par le Président de la République sur habilitation du Parlement dans le domaine de la loi (qui acquièrent valeur législative après loi de ratification). **2) Le bloc réglementaire** émane du pouvoir exécutif : **décrets** du Président de la République (autonomes ou d'application), puis **arrêtés** ministériels, interministériels, préfectoraux et municipaux.",
            keyRule:
              'Projet de loi = initiative du pouvoir exécutif (Président de la République). Proposition de loi = initiative des membres du Parlement (députés ou sénateurs).',
            konanTip:
              'Retiens la hiérarchie interne des actes : $\\text{Loi organique} > \\text{Loi ordinaire} > \\text{Décret présidentiel} > \\text{Arrêté ministériel} > \\text{Arrêté préfectoral} > \\text{Arrêté municipal}$.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p1_ex3',
              type: 'mcq',
              prompt:
                'En droit constitutionnel et législatif ivoirien, comment appelle-t-on respectivement un texte soumis au vote du Parlement lorsque son initiative émane du Président de la République (Exécutif) et lorsqu’elle émane d’un député ou d’un sénateur ?',
              options: [
                'Un projet de loi (initiative de l’Exécutif) et une proposition de loi (initiative parlementaire)',
                'Une proposition de loi (initiative de l’Exécutif) et un projet de loi (initiative parlementaire)',
                'Un arrêté ministériel et une ordonnance municipale',
                'Un acte uniforme et une circulaire préfectorale',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’initiative des lois appartient concurremment au Président de la République (qui dépose des projets de loi) et aux membres du Parlement, députés et sénateurs (qui déposent des propositions de loi).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'La Coutume',
            stepTheme: 'blue',
            stepTitle: 'Les sources non écrites et indirectes : la Coutume (éléments matériel et psychologique)',
            paragraphText:
              "La **coutume** est une règle de droit non écrite issue d'un usage ancien, constant et général que les membres d'un groupe social considèrent comme juridiquement obligatoire. Pour qu'un simple usage social devienne une véritable coutume juridique, la réunion cumulative de **deux éléments** est indispensable : 1) L'**élément matériel** (*consuetudo* ou *corpus*) : une pratique répétée dans le temps (ancienne), constante et générale dans un milieu ou un espace donné ; 2) L'**élément psychologique** (***opinio juris sive necessitatis*** ou *animus*) : la conviction partagée par les sujets de droit qu'en suivant cet usage, ils obéissent à une règle juridiquement obligatoire. On distingue la coutume ***secundum legem*** (à laquelle la loi renvoie expressément), la coutume ***praeter legem*** (qui comble une lacune dans le silence de la loi, fréquente dans les usages commerciaux) et la coutume ***contra legem*** (contraire à une loi impérative, qui est en principe écartée par le droit écrit ivoirien).",
            keyRule:
              'Formule de la coutume juridique : $\\text{Coutume} = \\text{Élément matériel (usage ancien, constant et répété)} + \\text{Élément psychologique (opinio juris : croyance au caractère obligatoire)}$.',
            konanTip:
              'Sans l’élément psychologique (*opinio juris*), une habitude répétée (comme donner un pourboire ou offrir des étrennes) reste un simple usage mondain et non une coutume juridique !',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p1_ex4',
              type: 'mcq',
              prompt:
                'Quels sont les deux éléments constitutifs cumulatifs requis pour qu’une pratique sociale soit reconnue comme une véritable coutume juridique ?',
              options: [
                'L’élément matériel (un usage ancien, constant et répété) et l’élément psychologique (l’opinio juris, c’est-à-dire la conviction du caractère juridiquement obligatoire de cet usage)',
                'La promulgation par le Président de la République et la publication au Journal Officiel de la République de Côte d’Ivoire',
                'Le vote à la majorité des deux tiers par le Sénat et la validation préalable par le Conseil constitutionnel',
                'La rédaction d’un acte authentique devant notaire et l’enregistrement au Registre du Commerce (RCCM)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La coutume est une source non écrite qui naît de la conjonction d’un comportement collectif répété dans la durée (élément matériel) et de la croyance au caractère obligatoire de cette pratique (élément psychologique ou opinio juris).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'La Jurisprudence',
            stepTheme: 'violet',
            stepTitle: 'La Jurisprudence : interprétation de la loi et prohibition des arrêts de règlement',
            paragraphText:
              "La **jurisprudence** désigne l'ensemble des décisions concordantes rendues par les cours et tribunaux (et particulièrement par les hautes juridictions : Cour de cassation, Conseil d'État, CCJA) sur une question de droit donnée. En droit ivoirien (système romano-germanique de droit écrit, contrairement à la *Common Law* anglo-saxonne où règne la règle du précédent obligatoire), le rôle du juge est encadré par deux articles fondamentaux du Code civil : 1) **L'Article 4 du Code civil** interdit le **déni de justice** : le juge est obligé de statuer et d'interpréter la loi même lorsque celle-ci est silencieuse, obscure ou insuffisante ; 2) **L'Article 5 du Code civil** interdit les **arrêts de règlement** : il est défendu aux juges de se prononcer par voie de disposition générale et réglementaire sur les causes qui leur sont soumises, et un jugement n'a qu'une **autorité relative de la chose jugée** (limitée aux seules parties au procès). Néanmoins, par l'unification de l'interprétation opérée par la Cour de cassation, la jurisprudence joue un rôle créateur et adaptateur majeur.",
            keyRule:
              'Combinaison des articles 4 et 5 du Code civil : l’article 4 oblige le juge à trancher et interpréter la loi même si elle est obscure ou muette (interdiction du déni de justice), mais l’article 5 lui interdit de créer une règle générale pour l’avenir (interdiction des arrêts de règlement).',
            konanTip:
              'Retiens par cœur ce duo d’articles du Code civil : **Article 4** = interdiction du déni de justice ; **Article 5** = interdiction des arrêts de règlement.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p1_ex5',
              type: 'mcq',
              prompt:
                'Que stipulent respectivement les célèbres articles 4 et 5 du Code civil concernant l’office du juge et la portée de la jurisprudence ?',
              options: [
                'L’article 4 interdit au juge de refuser de juger sous prétexte du silence ou de l’obscurité de la loi (déni de justice), et l’article 5 lui interdit de statuer par voie de disposition générale pour l’avenir (arrêts de règlement)',
                'L’article 4 oblige le juge à demander l’avis de l’Assemblée nationale avant chaque jugement, et l’article 5 donne à tout jugement la valeur d’une loi constitutionnelle',
                'L’article 4 autorise le juge à refuser de trancher un litige complexe, et l’article 5 lui permet d’abroger les décrets présidentiels',
                'Les articles 4 et 5 du Code civil concernent uniquement le calcul des droits de douane à l’importation',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En vertu de l’article 4 du Code civil, le juge qui refuserait de juger au motif que la loi est muette ou obscure se rendrait coupable de déni de justice ; mais en vertu de l’article 5, sa décision ne tranche que le cas particulier (autorité relative de la chose jugée) sans pouvoir édicter un arrêt de règlement général.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'La Doctrine',
            stepTheme: 'violet',
            stepTitle: 'La Doctrine juridique : une autorité intellectuelle d’analyse et d’influence',
            paragraphText:
              "La **doctrine** désigne l'ensemble des travaux, ouvrages, traités, manuels, thèses, articles et commentaires d'arrêts rédigés par les **juristes théoriciens et praticiens** (professeurs d'université en droit, magistrats, avocats, notaires) qui étudient, systématisent et critiquent le droit positif. La doctrine n'est **pas une source directe obligatoire** du droit : un juge ou un citoyen n'est jamais juridiquement lié par l'opinion d'un professeur de droit. C'est une **autorité purement intellectuelle et scientifique** (une source d'inspiration indirecte) qui éclaire les juges dans l'interprétation des textes complexes (influence sur la jurisprudence) et inspire le législateur lors de la préparation des réformes législatives.",
            keyRule:
              'La doctrine (travaux et opinions des auteurs et professeurs de droit) n’a aucune force obligatoire directe : elle exerce une autorité morale et scientifique qui éclaire le juge et inspire le législateur.',
            konanTip:
              'La célèbre théorie du patrimoine d’**Aubry et Rau** (que nous verrons au chapitre 3) est l’exemple historique parfait d’une construction de la **doctrine** reprise ensuite par la jurisprudence et le législateur !',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p1_ex6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur juridique exacte de la « doctrine » (ouvrages, articles et commentaires des professeurs et auteurs de droit) ?',
              options: [
                'Ce n’est pas une source directe obligatoire, mais une autorité scientifique et intellectuelle qui influence l’interprétation des juges et inspire les réformes du législateur',
                'C’est une source directe placée dans la pyramide de Kelsen juste au-dessus de la Constitution et des traités internationaux',
                'Elle possède la même force exécutoire qu’un arrêt de la Cour de cassation ou qu’un décret présidentiel',
                'Il est formellement interdit aux magistrats et aux étudiants de lire les ouvrages de la doctrine',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La doctrine n’édicte aucune norme obligatoire : elle analyse, critique et systématise le droit, exerçant ainsi une influence indirecte sur la jurisprudence et le législateur.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_droit_c2_p2',
        order: 2,
        title: 'L’entrée en vigueur, l’abrogation et l’application de la loi dans le temps',
        summary:
          'Distinguer promulgation et publication au Journal Officiel, et résoudre les conflits de lois dans le temps (Article 2 du Code civil : non-rétroactivité, effet immédiat et exceptions).',
        conceptExplanation:
          "Une règle de droit a une durée de vie limitée : elle naît à son **entrée en vigueur** (qui suppose sa promulgation et sa publication officielle) et disparaît à son **abrogation**. Lorsqu'une loi nouvelle remplace une loi ancienne, il faut déterminer quels faits ou contrats restent soumis à la loi ancienne et lesquels passent sous l'empire de la loi nouvelle : c'est la théorie des **conflits de lois dans le temps**, gouvernée par l'article 2 du Code civil.",
        keyRule:
          'Article 2 du Code civil : « La loi ne dispose que pour l’avenir ; elle n’a point d’effet rétroactif. » Ce texte consacre deux principes complémentaires : 1) la non-rétroactivité de la loi nouvelle sur le passé, et 2) l’effet immédiat de la loi nouvelle pour l’avenir (sauf survie de la loi ancienne pour les contrats en cours non contraires à l’ordre public).',
        workedExample: {
          title: 'Application dans le temps d’une nouvelle loi pénale en matière de cybercriminalité',
          statement:
            'Un individu commet un délit informatique le 10 mars 2025, époque où la loi punit ce délit de 3 ans d’emprisonnement. Avant son jugement fixé au 15 novembre 2025, une loi nouvelle entre en vigueur le 1er septembre 2025. Cas A : la loi nouvelle porte la peine maximale à 5 ans de prison. Cas B : la loi nouvelle abaisse la peine maximale à 1 an de prison. Quelle peine maximale le juge peut-il prononcer le 15 novembre 2025 dans chacun des deux cas ?',
          methodSteps: [
            'Cas A (loi pénale nouvelle plus sévère : 5 ans au lieu de 3 ans) : en vertu du principe constitutionnel de non-rétroactivité des lois pénales plus sévères, la loi nouvelle ne peut pas s’appliquer à des faits commis le 10 mars 2025 → Le juge applique la loi ancienne (maximum 3 ans).',
            'Cas B (loi pénale nouvelle plus douce : 1 an au lieu de 3 ans) : par exception humanitaire, la loi pénale plus douce (rétroactivité in mitius) s’applique immédiatement et rétroactivement à toutes les infractions commises avant son entrée en vigueur et non encore définitivement jugées → Le juge applique la loi nouvelle (maximum 1 an).',
          ],
          conclusion:
            'En matière pénale, la loi nouvelle plus sévère ne rétroagit JAMAIS, tandis que la loi nouvelle plus douce (*lex mitior*) rétroagit toujours aux faits non encore définitivement jugés.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Entrée en vigueur',
            stepTheme: 'blue',
            stepTitle: 'Les deux conditions d’entrée en vigueur de la loi : Promulgation et Publication au JORCI',
            paragraphText:
              "Une loi votée par le Parlement n'est pas immédiatement obligatoire pour les citoyens : son entrée en vigueur exige deux formalités successives : 1) **La promulgation** : c'est le décret par lequel le **Président de la République** atteste l'existence de la loi régulièrement votée par le Parlement et donne l'ordre aux autorités publiques de l'exécuter (elle rend la loi *exécutoire*, mais uniquement à l'égard de l'Exécutif ; les actes réglementaires comme les décrets et arrêtés n'ont pas besoin de promulgation car ils émanent déjà de l'Exécutif) ; 2) **La publication** au **Journal Officiel de la République de Côte d'Ivoire (JORCI)** : elle porte le texte de la loi (ou du règlement) à la connaissance du public et la rend **opposable et obligatoire** à l'égard de tous les citoyens après l'expiration du délai légal d'information (en principe **3 jours francs** après la parution du Journal Officiel, sauf urgence déclarée).",
            keyRule:
              'La **promulgation** (par le Président de la République) donne force exécutoire à la loi votée par le Parlement ; la **publication au Journal Officiel (JORCI)** la porte à la connaissance des citoyens et la rend obligatoire.',
            konanTip:
              'Attention au piège : une loi votée et promulguée mais **non encore publiée** au Journal Officiel n’est PAS encore opposable aux citoyens ; par ailleurs, un décret présidentiel est signé et publié, mais n’est jamais « promulgué » (seules les lois votées par le Parlement sont promulguées).',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p2_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la différence juridique exacte entre la « promulgation » et la « publication » d’une loi en Côte d’Ivoire ?',
              options: [
                'La promulgation est l’acte par lequel le Président de la République constate l’adoption de la loi par le Parlement et en ordonne l’exécution, tandis que la publication au Journal Officiel porte la loi à la connaissance des citoyens pour la leur rendre opposable',
                'La publication précède toujours le vote de la loi par l’Assemblée nationale, tandis que la promulgation est effectuée par le Maire de chaque commune',
                'Seuls les arrêtés municipaux font l’objet d’une promulgation présidentielle',
                'Une loi devient obligatoire pour tous les citoyens dès sa rédaction par un député, sans ni promulgation ni publication',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La promulgation (décret présidentiel) authentifie la loi votée par le Parlement et la rend exécutoire ; la publication au JORCI assure sa publicité auprès des administrés et conditionne son entrée en vigueur à leur égard.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Nemo censetur & Abrogation',
            stepTheme: 'violet',
            stepTitle: 'L’adage « Nul n’est censé ignorer la loi » et la disparition de la loi par abrogation',
            paragraphText:
              "Dès lors qu'une loi est régulièrement entrée en vigueur après sa publication au Journal Officiel, s'applique la présomption irréfragable ***Nemo censetur ignorare legem*** (**« Nul n'est censé ignorer la loi »**) : cela ne signifie pas que chaque citoyen connaît par cœur tous les codes, mais qu'aucun justiciable ne peut échapper à l'application d'une loi en prétendant devant le juge qu'il n'en connaissait pas l'existence (sinon l'ordre juridique s'effondrerait). La loi reste ensuite obligatoire jusqu'à son **abrogation** (suppression de la loi pour l'avenir par une autorité de rang au moins égal, en vertu du parallélisme des formes). L'abrogation peut être **expresse** (la loi nouvelle déclare explicitement : *« La loi n° X est abrogée »*) ou **tacite / implicite** (les dispositions de la loi nouvelle sont inconciliables avec celles de la loi ancienne : *Lex posterior derogat priori* — la loi postérieure déroge à la loi antérieure).",
            keyRule:
              'Une loi ne disparaît que par l’**abrogation** (expresse ou tacite) qui ne vaut que pour l’avenir, contrairement à la nullité ou à la déclaration d’inconstitutionnalité. En principe, une loi ne tombe pas en abrogation par simple désuétude.',
            konanTip:
              'Hiérarchie et abrogation : une loi peut abroger une loi antérieure ou un décret, mais un décret ou un arrêté ne peut JAMAIS abroger une loi votée par le Parlement !',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p2_ex2',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on l’abrogation d’une loi ancienne lorsque la loi nouvelle ne mentionne pas formellement sa suppression mais édicte des règles totalement incompatibles avec celles de la loi ancienne ?',
              options: [
                'Une abrogation tacite (ou implicite)',
                'Une abrogation expresse',
                'Une promulgation rétroactive',
                'Une coutume praeter legem',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Il y a abrogation tacite lorsque le texte nouveau, sans citer expressément le texte ancien qu’il abolit, contient des dispositions inconciliables avec lui : la loi la plus récente l’emporte alors sur la loi ancienne.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Article 2 du Code civil',
            stepTheme: 'violet',
            stepTitle: 'Le principe de non-rétroactivité de la loi nouvelle (Article 2 du Code civil)',
            paragraphText:
              "Lorsqu'une loi nouvelle entre en vigueur et abroge une loi ancienne, comment régler le sort des situations juridiques nées sous la loi ancienne ? L'**Article 2 du Code civil** pose la règle d'or : **« La loi ne dispose que pour l'avenir ; elle n'a point d'effet rétroactif. »** Le **principe de non-rétroactivité** signifie que la loi nouvelle ne peut pas remettre en cause la validité des actes juridiques régulièrement constitués dans le passé sous l'empire de la loi ancienne, ni les effets déjà entièrement produits avant son entrée en vigueur. Ce principe est indispensable à la **sécurité juridique** et à la liberté des citoyens : on ne peut pas reprocher à un individu d'avoir agi conformément à la loi en vigueur au jour de son acte.",
            keyRule:
              'Principe de non-rétroactivité (Art. 2 du Code civil) : la loi nouvelle ne s’applique ni aux situations juridiques entièrement constituées ou éteintes avant son entrée en vigueur, ni aux effets passés des situations en cours.',
            konanTip:
              'Si un mariage a été valablement célébré en 2020 selon les conditions légales de 2020, une loi nouvelle de 2026 qui ajoute une condition supplémentaire de validité du mariage ne peut PAS annuler le mariage de 2020 !',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p2_ex3',
              type: 'mcq',
              prompt:
                'Quel article célèbre du Code civil énonce le principe fondamental selon lequel « La loi ne dispose que pour l’avenir ; elle n’a point d’effet rétroactif » ?',
              options: [
                'L’article 2 du Code civil',
                'L’article 1382 du Code civil',
                'L’article 1315 du Code civil',
                'L’article 544 du Code civil',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’article 2 du Code civil est le siège de la théorie des conflits de lois dans le temps : il consacre à la fois la non-rétroactivité de la loi nouvelle sur le passé et son application immédiate pour l’avenir.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Effet immédiat vs Contrats',
            stepTheme: 'green',
            stepTitle: 'L’effet immédiat de la loi nouvelle et l’exception de survie de la loi ancienne pour les contrats en cours',
            paragraphText:
              "La première phrase de l'article 2 du Code civil (*« La loi ne dispose que pour l'avenir »*) signifie que la loi nouvelle a un **effet immédiat** (théorie moderne du doyen **Paul Roubier**) : elle s'applique immédiatement, dès son entrée en vigueur, non seulement aux situations juridiques qui naissent après elle, mais aussi aux **effets futurs des situations juridiques légales (extracontractuelles) en cours** (ex: une loi nouvelle modifiant les droits et devoirs des époux mariés ou le statut légal de la propriété s'applique aux effets futurs des mariages déjà célébrés). **Exception majeure pour les contrats en cours** : afin de respecter les prévisions légitimes des contractants et l'équilibre du contrat qu'ils ont négocié, on applique le principe de la **survie de la loi ancienne pour les contrats en cours** (le contrat conclu avant la loi nouvelle continue d'être régi jusqu'à sa fin par la loi ancienne sous laquelle il a été signé), **sauf** si la loi nouvelle répond à un impératif d'**ordre public** particulièrement pressant (ex: lois sociales d'ordre public protégeant les salariés).",
            keyRule:
              'Pour une situation légale extracontractuelle en cours (statut du mariage, propriété) : **effet immédiat de la loi nouvelle** sur les effets futurs. Pour un **contrat en cours** : **survie de la loi ancienne** jusqu’au terme du contrat (sauf loi nouvelle d’ordre public impérieux).',
            konanTip:
              'Distingue bien en QCM : Situation légale en cours $\\implies$ Effet immédiat de la loi nouvelle ; Situation contractuelle en cours $\\implies$ Survie de la loi ancienne (sauf ordre public).',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p2_ex4',
              type: 'mcq',
              prompt:
                'Quelle règle régit en principe le sort d’un contrat commercial à exécution successive (ex: contrat de maintenance informatique de 3 ans) déjà en cours d’exécution lorsqu’une loi nouvelle supplétive entre en vigueur ?',
              options: [
                'Le principe de la survie de la loi ancienne pour les contrats en cours (afin de préserver l’équilibre contractuel voulu par les parties lors de la signature)',
                'L’annulation automatique et rétroactive de tous les contrats signés avant la loi nouvelle',
                'L’obligation de saisir le Conseil constitutionnel pour réécrire le contrat',
                'La transformation automatique du contrat privé en traité international',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par dérogation à l’effet immédiat de la loi nouvelle, les effets futurs des contrats en cours demeurent régis par la loi en vigueur au jour de leur conclusion (survie de la loi ancienne), sauf lorsque le législateur impose l’application immédiate pour un motif d’ordre public.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Exceptions : Rétroactivité',
            stepTheme: 'orange',
            stepTitle: 'Les trois exceptions au principe de non-rétroactivité (Lois pénales plus douces, interprétatives, expressément rétroactives)',
            paragraphText:
              "Le principe de non-rétroactivité connaît une force différente en matière pénale et en matière civile, ce qui explique les **trois exceptions** où une loi nouvelle s'applique **rétroactivement** à des faits passés : **1) Les lois pénales plus douces (rétroactivité *in mitius*)** : si la non-rétroactivité des lois pénales *plus sévères* a une valeur **constitutionnelle** absolue (ni le juge ni le Parlement ne peuvent y déroger), en revanche toute loi pénale nouvelle qui supprime une infraction ou adoucit la peine s'applique obligatoirement et rétroactivement aux faits commis avant son entrée en vigueur non encore définitivement jugés ; **2) Les lois interprétatives** : une loi qui se borne à préciser le sens obscur d'une loi antérieure sans créer de règle nouvelle fait corps avec la loi ancienne et rétroagit à la date de celle-ci ; **3) Les lois civiles expressément déclarées rétroactives par le législateur** : en matière non pénale, l'article 2 du Code civil n'a qu'une valeur **législative** (il lie le juge, mais le Parlement peut voter une loi civile ou fiscale expressément rétroactive pour un motif d'intérêt général).",
            keyRule:
              'En matière pénale, la non-rétroactivité des lois plus sévères a une valeur **constitutionnelle** (absolue), sauf pour la **loi pénale plus douce** (*in mitius*) qui rétroagit toujours. En matière civile, la non-rétroactivité (art. 2 C. civ.) a une valeur **législative** (elle s’impose au juge, mais le législateur peut y déroger par une disposition expresse).',
            konanTip:
              'Retiens les 3 cas de lois rétroactives : 1) Loi pénale plus douce (*in mitius*), 2) Loi purement interprétative, 3) Loi civile expressément déclarée rétroactive par le Parlement.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p2_ex5',
              type: 'mcq',
              prompt:
                'Dans lesquels des trois cas suivants une loi nouvelle s’applique-t-elle rétroactivement à des faits ou actes antérieurs à son entrée en vigueur ?',
              options: [
                'Les lois pénales plus douces (in mitius), les lois purement interprétatives et les lois civiles expressément déclarées rétroactives par le législateur',
                'Les lois pénales plus sévères créant de nouveaux crimes et alourdissant les peines d’emprisonnement',
                'Tous les arrêtés municipaux et préfectoraux sans exception',
                'Uniquement les lois qui interdisent l’accès à Internet',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Alors que la loi pénale plus sévère ne rétroagit jamais (principe constitutionnel), la loi pénale plus douce rétroagit de plein droit (rétroactivité in mitius), tout comme la loi interprétative et la loi civile que le Parlement a expressément déclarée rétroactive.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse temporelle',
            stepTheme: 'slate',
            stepTitle: 'Synthèse méthodologique pour résoudre un cas pratique de conflit de lois dans le temps',
            paragraphText:
              "Face à un cas pratique d'application de la loi dans le temps à l'examen, suis toujours ces 4 étapes : **Étape 1** : Vérifie la date d'entrée en vigueur de la loi nouvelle (promulgation + publication au JORCI + délai franc) ; **Étape 2** : Qualifie la matière : s'agit-il de **droit pénal** ? Si oui, compare la sévérité des deux lois : plus sévère $\\implies$ non-rétroactivité absolue (loi ancienne) ; plus douce $\\implies$ rétroactivité *in mitius* (loi nouvelle si le jugement n'est pas encore définitif) ; **Étape 3** : S'il s'agit de **droit civil ou commercial**, vérifie si le Parlement a expressément déclaré la loi rétroactive ou si elle est interprétative ; **Étape 4** : À défaut, applique l'article 2 du Code civil : les faits entièrement passés restent sous la loi ancienne ; les effets futurs des **contrats en cours** restent sous la loi ancienne (survie de la loi ancienne, sauf ordre public) ; les effets futurs des **situations légales non contractuelles** passent sous la loi nouvelle (effet immédiat).",
            keyRule:
              'Méthode d’examen : 1) Date d’entrée en vigueur (JORCI) $\\to$ 2) Pénal (plus sévère vs *in mitius*) ou Civil $\\to$ 3) Contrat en cours (survie de la loi ancienne) vs Situation légale en cours (effet immédiat).',
            konanTip:
              'Attention : même une loi pénale plus douce ne remet pas en cause une condamnation devenue **définitive** (ayant acquis l’autorité de la chose définitivement jugée après épuisement des voies de recours).',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p2_ex6',
              type: 'mcq',
              prompt:
                'Pourquoi le juge civil est-il lié par le principe de non-rétroactivité de l’article 2 du Code civil alors que le Parlement (législateur) peut adopter, en matière civile non répressive, une loi expressément rétroactive ?',
              options: [
                'Parce qu’en matière civile, l’article 2 du Code civil a une valeur législative : il s’impose au juge (soumis à la loi), mais une loi nouvelle votée par le Parlement peut déroger à une loi antérieure de même rang',
                'Parce que le juge civil est supérieur au Conseil constitutionnel dans la pyramide de Kelsen',
                'Parce que l’article 2 du Code civil est un simple arrêté municipal que personne n’est tenu de respecter',
                'Parce qu’en matière pénale, le Parlement a le droit de faire rétroagir les lois criminelles les plus sévères',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En matière civile (contrairement à la matière pénale où la non-rétroactivité a valeur constitutionnelle), le principe de non-rétroactivité découle de l’article 2 du Code civil qui est une loi ordinaire : il lie le juge et l’administration, mais pas le législateur qui peut y déroger expressément.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_droit_c2_p3',
        order: 3,
        title: 'L’organisation juridictionnelle en Côte d’Ivoire et la CCJA de l’OHADA',
        summary:
          'Maîtriser les principes de la justice ivoirienne (double degré de juridiction, collégialité) et l’architecture complète des juridictions du premier degré jusqu’à la Cour de cassation, au Conseil d’État, à la Cour des comptes et à la CCJA.',
        conceptExplanation:
          "Pour trancher les litiges et sanctionner la violation de la règle de droit, l'État de Côte d'Ivoire a organisé un service public de la Justice structuré en plusieurs degrés et ordres de juridictions. Depuis la Constitution du 8 novembre 2016 et les lois organiques de réforme de l'ancienne Cour Suprême, le sommet juridictionnel ivoirien distingue désormais la **Cour de cassation** (sommet de l'ordre judiciaire), le **Conseil d'État** (sommet de l'ordre administratif) et la **Cour des comptes** (contrôle des finances publiques), auxquels s'ajoutent le **Conseil constitutionnel** et la juridiction supranationale **CCJA** de l'OHADA dont le siège est à Abidjan.",
        keyRule:
          'Double degré de juridiction : 1er degré (Tribunaux de Première Instance TPI, Sections détachées, Tribunaux de commerce, Tribunaux du travail) = juges du fond (fait + droit) $\\longrightarrow$ 2nd degré (Cours d’appel) = juges du fond (rejugent en fait et en droit) $\\longrightarrow$ Cassation (Cour de cassation / Conseil d’État / CCJA) = juges du droit (et non un 3e degré de juridiction, sauf évocation par la CCJA).',
        workedExample: {
          title: 'Parcours juridictionnel complet d’un litige commercial OHADA en Côte d’Ivoire',
          statement:
            'Deux sociétés commerciales d’ingénierie informatique basées à Abidjan s’opposent sur l’exécution d’un contrat commercial régi par un Acte uniforme de l’OHADA. Indiquer quelle juridiction est saisie en première instance, devant quelle juridiction l’appel est porté, et quelle haute juridiction est compétente pour connaître du pourvoi en cassation.',
          methodSteps: [
            '1er degré (première instance) : le litige opposant deux commerçants à propos d’un acte de commerce à Abidjan relève du Tribunal de Commerce d’Abidjan (qui rend un jugement).',
            '2nd degré (appel) : la partie mécontente interjette appel devant la Cour d’Appel de Commerce d’Abidjan (qui rejuge l’affaire en fait et en droit et rend un arrêt confirmatif ou infirmatif).',
            'Pourvoi en cassation : comme le litige porte sur l’application d’un Acte uniforme de l’OHADA, le pourvoi en cassation relève de la compétence exclusive de la Cour Commune de Justice et d’Arbitrage (CCJA) de l’OHADA siégeant à Abidjan (et non de la Cour de cassation nationale !).',
          ],
          conclusion:
            'En matière de droit des affaires harmonisé (Actes uniformes OHADA), la CCJA remplace les cours de cassation nationales des 17 États membres pour garantir l’unité d’interprétation du droit OHADA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '1er & 2nd degrés',
            stepTheme: 'blue',
            stepTitle: 'Les juridictions de premier degré (TPI, Sections détachées, Commerce, Travail) et le double degré de juridiction (Cours d’appel)',
            paragraphText:
              "En Côte d'Ivoire, la justice de droit commun repose sur le principe fondamental du **double degré de juridiction**, garantie de bonne justice permettant de faire rejuger une affaire en fait et en droit. **1) Au premier degré (première instance)**, on trouve les **Tribunaux de Première Instance (TPI)** (Abidjan-Plateau, Yopougon, Bouaké, Daloa, Korhogo, Man, Gagnoa, Abengourou, San-Pedro...) et leurs **Sections détachées** (Tiassalé, Grand-Bassam, Aboisso, Agboville...), qui sont les juridictions de droit commun compétentes en matière civile, commerciale, administrative de premier ressort et pénale (tribunal correctionnel pour les délits, tribunal de simple police pour les contraventions, tribunal criminel pour les crimes), ainsi que des juridictions spécialisées autonomes comme le **Tribunal de Commerce d'Abidjan** et les **Tribunaux du travail** : leurs décisions s'appellent des **jugements**. **2) Au second degré**, la partie perdante (**l'appelant**) peut saisir la **Cour d'appel** (Abidjan, Bouaké, Daloa, Korhogo, ainsi que la Cour d'Appel de Commerce d'Abidjan) contre son adversaire (**l'intimé**) : la Cour d'appel rejuge l'ensemble du litige (en fait et en droit) et rend un **arrêt** (confirmatif ou infirmatif).",
            visualSchema: {
              type: 'flowchart',
              title: 'Parcours juridictionnel d’un litige en Côte d’Ivoire (1er degré → Appel → Cassation)',
              caption: 'Les juridictions du 1er et du 2nd degré sont les juges du fond (fait + droit), tandis que la Cour de cassation / le Conseil d’État juge le droit.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1er Degré : Juridictions de Première Instance (Juges du fond)',
                    sublabel: 'TPI & Sections détachées, Tribunal de Commerce, Tribunal du Travail → rendent un JUGEMENT (Demandeur vs Défendeur)',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: '2nd Degré : Cours d’Appel (Double degré de juridiction — Juges du fond)',
                    sublabel: 'Cours d’Appel (Abidjan, Bouaké, Daloa, Korhogo) & Cour d’Appel de Commerce → rejugent en fait et en droit et rendent un ARRÊT (Appelant vs Intimé)',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: 'Sommet : Pourvoi en Cassation (Juges du Droit uniquement)',
                    sublabel: 'Cour de cassation (judiciaire), Conseil d’État (administratif) ou CCJA à Abidjan (droit OHADA) → Arrêt de rejet ou de cassation',
                    kind: 'end',
                    color: 'violet',
                  },
                ],
              },
            },
            keyRule:
              'Vocabulaire procédural strict : en 1re instance, le **demandeur** assigne le **défendeur** devant un **Tribunal** qui rend un **jugement** ; en 2nde instance, l’**appelant** attaque le jugement contre l’**intimé** devant une **Cour d’appel** qui rend un **arrêt**.',
            konanTip:
              'Ne dis jamais « le jugement de la Cour d’appel ou de la Cour de cassation » : un Tribunal rend un **jugement**, une Cour (Cour d’appel, Cour de cassation, CCJA, Cour des comptes) rend toujours un **arrêt** !',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p3_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la terminologie juridique exacte qui désigne respectivement les parties et la décision rendue devant une Cour d’appel (second degré de juridiction) ?',
              options: [
                'L’appelant et l’intimé ; la décision rendue par la Cour d’appel s’appelle un arrêt (confirmatif ou infirmatif)',
                'Le demandeur et le défendeur ; la décision rendue par la Cour d’appel s’appelle un décret présidentiel',
                'Le procureur et le notaire ; la décision rendue par la Cour d’appel s’appelle une ordonnance municipale',
                'Le créancier et la caution ; la décision rendue par la Cour d’appel s’appelle un jugement de première instance',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En première instance, le demandeur et le défendeur s’opposent devant un Tribunal qui rend un jugement. En appel, l’appelant (qui conteste le jugement) et l’intimé s’opposent devant une Cour d’appel qui rend un arrêt.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Cour de cassation',
            stepTheme: 'violet',
            stepTitle: 'Le sommet de l’ordre judiciaire : la Cour de cassation (juge du droit et non 3e degré de juridiction)',
            paragraphText:
              "Issues de l'éclatement de l'ancienne Cour Suprême consacré par la Constitution ivoirienne de 2016, les hautes juridictions nationales sont spécialisées. Au sommet de l'**ordre judiciaire** (matières civile, sociale, pénale et commerciale hors OHADA) siège la **Cour de cassation**, saisie par un **pourvoi en cassation** formé contre un arrêt de Cour d'appel (ou un jugement rendu en premier et dernier ressort). **Attention : la Cour de cassation n'est PAS un troisième degré de juridiction !** Contrairement aux juges du premier et du second degré (appelés **juges du fond** car ils examinent à la fois la matérialité des **faits** et la règle de **droit**), la Cour de cassation est uniquement **juge du droit** : elle ne rejuge pas les faits, mais vérifie que la Cour d'appel a correctement appliqué et interprété la règle de droit. Si la loi a été respectée, elle rend un **arrêt de rejet** ; si la loi a été violée, elle rend un **arrêt de cassation** (qui annule l'arrêt attaqué et renvoie en principe l'affaire devant une autre Cour d'appel).",
            keyRule:
              'La Cour de cassation n’est PAS un troisième degré de juridiction : elle ne juge que le **droit** (et non les faits) afin d’assurer l’unité d’interprétation de la loi sur tout le territoire.',
            konanTip:
              'Juges du fond (TPI + Cour d’appel) = jugent les **faits ET le droit**. Cour de cassation = juge **uniquement le droit**.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p3_ex2',
              type: 'mcq',
              prompt:
                'Pourquoi affirme-t-on en droit processuel que la Cour de cassation n’est pas un troisième degré de juridiction ?',
              options: [
                'Parce qu’elle est uniquement « juge du droit » (elle vérifie la bonne application de la règle de droit par les juges du fond sans rejuger la matérialité des faits)',
                'Parce qu’elle siège uniquement en première instance avant les Tribunaux de Première Instance (TPI)',
                'Parce que ses arrêts sont facultatifs et peuvent être annulés par une Section détachée de tribunal',
                'Parce qu’elle n’a le droit de juger que les infractions au Code de la route',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les juridictions du 1er degré (TPI) et du 2nd degré (Cour d’appel) sont les juges du fond qui apprécient souverainement les faits. La Cour de cassation ne réexamine pas les faits : elle contrôle uniquement la légalité juridique de la décision attaquée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Conseil d’État & Comptes',
            stepTheme: 'violet',
            stepTitle: 'Le Conseil d’État (ordre administratif) et la Cour des comptes (finances publiques)',
            paragraphText:
              "À côté de la Cour de cassation, la Constitution ivoirienne de 2016 consacre deux autres hautes juridictions issues de la réforme de l'ancienne Cour Suprême : **1) Le Conseil d'État**, qui est la plus haute juridiction de l'**ordre administratif**. Il statue souverainement sur les décisions rendues en matière de contentieux administratif (responsabilité de la puissance publique, contrats administratifs) et connaît en premier et dernier ressort des **recours en annulation pour excès de pouvoir (REP)** formés contre les actes administratifs réglementaires ou individuels des autorités centrales (décrets présidentiels, arrêtés ministériels, décisions de l'ARTCI), tout en exerçant une fonction consultative auprès du Gouvernement. **2) La Cour des comptes**, qui est l'institution supérieure de contrôle des **finances publiques** : elle juge les comptes des comptables publics, sanctionne les fautes de gestion et contrôle l'exécution des lois de finances ainsi que la gestion financière des collectivités territoriales et entreprises publiques.",
            keyRule:
              'Sommet de l’ordre judiciaire (civil, pénal, social) = **Cour de cassation**. Sommet de l’ordre administratif (contentieux de l’Administration, recours pour excès de pouvoir) = **Conseil d’État**. Contrôle juridictionnel des finances publiques = **Cour des comptes**.',
            konanTip:
              'Si un opérateur télécom ou un citoyen veut demander l’annulation pour excès de pouvoir d’un décret présidentiel ou d’un arrêté ministériel illégal, il saisit le **Conseil d’État**.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p3_ex3',
              type: 'mcq',
              prompt:
                'Selon la Constitution ivoirienne de 2016, quelle haute juridiction est placée au sommet de l’ordre administratif et est compétente pour statuer sur les recours en annulation pour excès de pouvoir contre les décrets et arrêtés ministériels ?',
              options: [
                'Le Conseil d’État',
                'La Cour de cassation',
                'Le Tribunal du travail',
                'La Cour Commune de Justice et d’Arbitrage (CCJA)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Conseil d’État est la juridiction suprême de l’ordre administratif en Côte d’Ivoire : il juge la légalité des actes administratifs (recours pour excès de pouvoir) et le contentieux de la responsabilité administrative.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'CCJA de l’OHADA',
            stepTheme: 'violet',
            stepTitle: 'La Cour Commune de Justice et d’Arbitrage (CCJA) de l’OHADA à Abidjan et son droit d’évocation',
            paragraphText:
              "Particularité essentielle du droit des affaires en Côte d'Ivoire et dans les 17 États membres de l'OHADA : lorsqu'un litige soulève une question relative à l'application d'un **Acte uniforme de l'OHADA** (droit commercial général, sociétés commerciales, sûretés, recouvrement, procédures collectives), le pourvoi en cassation formé contre l'arrêt de la Cour d'appel nationale échappe à la Cour de cassation nationale et relève de la **compétence exclusive de la Cour Commune de Justice et d'Arbitrage (CCJA)**, juridiction supranationale dont le siège est établi à **Abidjan (Plateau)**. De plus, contrairement à la Cour de cassation classique qui renvoie l'affaire devant une autre Cour d'appel après cassation, la CCJA dispose d'un **droit d'évocation** (Article 14 du Traité OHADA) : lorsqu'elle casse l'arrêt d'une Cour d'appel nationale, elle **évoque et statue directement au fond** (en fait et en droit) sans renvoyer l'affaire devant une juridiction nationale, ce qui fait gagner un temps précieux aux entreprises !",
            keyRule:
              'Pour tout litige portant sur un Acte uniforme de l’OHADA, la cassation relève exclusivement de la **CCJA** (siégeant à Abidjan). En cas de cassation, la CCJA exerce son **pouvoir d’évocation** : elle tranche directement le fond du litige sans renvoi devant une Cour d’appel nationale.',
            konanTip:
              'Le **pouvoir d’évocation de la CCJA** après cassation est une question classique des examens de droit en Côte d’Ivoire : retiens que la CCJA casse ET statue directement sur le fond !',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p3_ex4',
              type: 'mcq',
              prompt:
                'Quelle particularité remarquable distingue la Cour Commune de Justice et d’Arbitrage (CCJA) de l’OHADA (siégeant à Abidjan) lorsqu’elle casse l’arrêt d’une Cour d’appel nationale ?',
              options: [
                'Elle exerce un pouvoir d’évocation : après avoir cassé l’arrêt, elle statue directement sur le fond du litige sans renvoyer l’affaire devant une Cour d’appel nationale',
                'Elle est obligée de renvoyer le dossier devant la Section détachée de tribunal la plus éloignée',
                'Elle n’est compétente que pour juger les divorces et les crimes de sang',
                'Ses arrêts sont purement consultatifs et doivent être validés par le Maire de la commune',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En vertu de l’article 14 du Traité de l’OHADA, la CCJA est la juridiction suprême commune en matière d’Actes uniformes et dispose, en cas de cassation, du pouvoir d’évoquer l’affaire et de statuer directement au fond pour accélérer la justice commerciale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Conseil constitutionnel',
            stepTheme: 'violet',
            stepTitle: 'Le Conseil constitutionnel et la Haute Cour de Justice en Côte d’Ivoire',
            paragraphText:
              "En dehors des ordres judiciaire, administratif et financier, deux juridictions constitutionnelles et politiques complètent l'édifice ivoirien : **1) Le Conseil constitutionnel**, juge de la **constitutionnalité des lois** (contrôle obligatoire avant promulgation pour les lois organiques et les règlements des assemblées parlementaires ; contrôle facultatif sur saisine pour les lois ordinaires et les engagements internationaux ; contrôle par voie d'exception soulevée lors d'un procès) et juge de la régularité des **élections présidentielles, législatives et sénatoriales** ainsi que des référendums (il proclame les résultats définitifs de l'élection présidentielle et reçoit le serment du Président élu). Ses décisions ne sont susceptibles d'**aucun recours** et s'imposent à tous les pouvoirs publics et à toutes les juridictions. **2) La Haute Cour de Justice**, juridiction composée de parlementaires et présidée par le Président de la Cour de cassation, compétente pour juger le Président de la République en cas de **haute trahison** ainsi que le Vice-Président et les membres du Gouvernement pour les crimes et délits commis dans l'exercice de leurs fonctions.",
            keyRule:
              'Le Conseil constitutionnel contrôle la conformité des lois à la Constitution et juge le contentieux des élections présidentielles et parlementaires ; la Haute Cour de Justice juge le Président de la République pour haute trahison.',
            konanTip:
              'Les lois organiques doivent **obligatoirement** être soumises au contrôle du Conseil constitutionnel avant leur promulgation par le Président de la République.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p3_ex5',
              type: 'mcq',
              prompt:
                'Quelles sont les deux attributions principales du Conseil constitutionnel en République de Côte d’Ivoire ?',
              options: [
                'Le contrôle de la conformité des lois (et traités) à la Constitution et le contrôle de la régularité des élections présidentielles, parlementaires et référendaires',
                'Le jugement en première instance des vols de téléphones portables et des litiges entre locataires et propriétaires',
                'L’immatriculation des sociétés commerciales au RCCM et le recouvrement des factures d’électricité',
                'Le contrôle comptable du budget des mairies et la délivrance des permis de conduire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En vertu de la Constitution ivoirienne de 2016, le Conseil constitutionnel est l’organe régulateur du fonctionnement des pouvoirs publics, juge de la constitutionnalité des lois et juge du contentieux électoral national.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Compétence & Principes',
            stepTheme: 'green',
            stepTitle: 'Compétence d’attribution (ratione materiae), compétence territoriale (ratione loci) et magistrats',
            paragraphText:
              "Pour savoir quel tribunal précis saisir au premier degré, on combine deux règles de compétence : 1) **La compétence d'attribution (ou matérielle, *ratione materiae*)**, qui détermine la catégorie de juridiction selon la **nature du litige** (civil $\\to$ TPI, commercial $\\to$ Tribunal de commerce, travail $\\to$ Tribunal du travail, délit pénal $\\to$ Tribunal correctionnel) ; 2) **La compétence territoriale (*ratione loci*)**, qui détermine lequel des tribunaux géographiques de cette catégorie est compétent : la règle de principe est que **le tribunal territorialement compétent est celui du domicile du défendeur** (*Actor sequitur forum rei*), sauf exceptions légales (en matière immobilière : lieu de situation de l'immeuble ; en matière délictuelle : lieu du fait dommageable ; en matière pénale : lieu de l'infraction, de la résidence ou de l'arrestation). Enfin, on distingue au sein des juridictions deux corps de magistrats : les **magistrats du siège** (les juges qui tranchent les litiges, assis et **inamovibles** pour garantir leur indépendance) et les **magistrats du parquet / Ministère public** (le Procureur de la République et ses substituts, qui requièrent l'application de la loi debout au nom de la société et sont hiérarchiquement subordonnés au Ministre de la Justice).",
            keyRule:
              'Règle de compétence territoriale de principe : le tribunal compétent est celui du **domicile du défendeur** (*Actor sequitur forum rei*), sauf en matière d’immeuble où c’est le tribunal du lieu de situation de l’immeuble.',
            konanTip:
              'Distingue toujours la magistrature **assise (le siège)** : juges indépendants et inamovibles qui rendent les jugements ; et la magistrature **debout (le parquet / Ministère public)** : Procureur de la République qui défend l’intérêt général et poursuit les infractions.',
            exercise: {
              id: 'lmd_srit_l1_droit_c2_p3_ex6',
              type: 'mcq',
              prompt:
                'En procédure civile, quelle est la règle générale de compétence territoriale (ratione loci) pour déterminer quel tribunal saisir, et quelle est la différence entre les magistrats du siège et ceux du parquet ?',
              options: [
                'Le tribunal compétent est en principe celui du domicile du défendeur ; les magistrats du siège (juges assis, inamovibles) tranchent les litiges, tandis que les magistrats du parquet (Procureur, magistrature debout) représentent la société et sont hiérarchisés',
                'Le tribunal compétent est toujours celui choisi librement par le demandeur dans n’importe quelle ville ; le Procureur de la République est un magistrat du siège qui vote le budget de l’État',
                'Seul le tribunal d’Abidjan-Plateau est compétent pour tous les litiges survenus à Korhogo ou à Bouaké',
                'Les magistrats du siège sont les avocats privés des parties et les magistrats du parquet sont les huissiers de justice',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En vertu de l’adage Actor sequitur forum rei, c’est au demandeur de se déplacer devant le tribunal du domicile du défendeur. Au tribunal, les magistrats du siège (juges inamovibles) jugent, tandis que le parquet (Ministère public) requiert l’application de la loi au nom de l’ordre public.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : LES DROITS SUBJECTIFS — PERSONNALITÉ, PATRIMOINE, BIENS, PREUVE
  // ============================================================================
  {
    id: 'lmd_srit_l1_droit_ch3',
    subjectId: 'lmd_intro_droit',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Programme LMD SRIT 1 — Introduction à l’étude du Droit (Droits subjectifs, Patrimoine, Biens & Preuve)',
    title: 'Les Droits subjectifs — Personnalité juridique, Patrimoine, Biens et Preuve',
    summary:
      'Personnes physiques et morales, capacité juridique, théorie du patrimoine d’Aubry et Rau, classification des droits (réels, personnels, intellectuels) et des biens (meubles/immeubles), actes et faits juridiques, régime de la preuve.',
    prerequisiteChapterIds: ['lmd_srit_l1_droit_ch1', 'lmd_srit_l1_droit_ch2'],
    points: [
      makePoint({
        id: 'lmd_srit_l1_droit_c3_p1',
        order: 1,
        title: 'Les sujets de droit : personnes physiques, personnes morales et capacité juridique',
        summary:
          'Maîtriser l’acquisition et la fin de la personnalité juridique (naissance vivant et viable, règle infans conceptus), les éléments d’identification, la capacité de jouissance/d’exercice et les personnes morales.',
        conceptExplanation:
          "Les droits subjectifs ne peuvent appartenir qu'à des **sujets de droit**, c'est-à-dire des êtres dotés de la **personnalité juridique** (l'aptitude générale à être titulaire de droits et débiteur d'obligations). Le droit positif reconnaît deux catégories de sujets de droit : les **personnes physiques** (tous les êtres humains sans exception) et les **personnes morales** (groupements organisés — État, communes, sociétés commerciales OHADA, associations, syndicats — auxquels la loi reconnaît une existence et un patrimoine distincts de ceux de leurs membres).",
        keyRule:
          'Une personne physique acquiert la personnalité juridique dès sa **naissance, à condition de naître vivante et viable**, et la perd à son **décès**. Par exception (*Infans conceptus*), l’enfant simplement conçu est réputé né chaque fois qu’il y va de son intérêt (ex: recueillir une succession ou un don), à condition qu’il naisse ensuite vivant et viable.',
        workedExample: {
          title: 'Application de la règle Infans conceptus à une succession',
          statement:
            'Monsieur Konan décède accidentellement le 10 janvier 2026 en laissant son épouse enceinte de 6 mois. L’enfant naît le 12 avril 2026 en parfaite santé (vivant et viable). Cet enfant a-t-il le droit d’hériter de son père décédé trois mois avant sa naissance ?',
          methodSteps: [
            'Principe : la personnalité juridique commence à la naissance (12 avril 2026) ; or, pour hériter, il faut exister juridiquement au jour de l’ouverture de la succession (10 janvier 2026).',
            'Exception (*Infans conceptus pro nato habetur quoties de commodis ejus agitur*) : l’enfant simplement conçu au jour du décès est réputé déjà né toutes les fois qu’il y va de son intérêt (ici, recueillir une part d’héritage et non une charge), sous la condition suspensive qu’il naisse ultérieurement vivant et viable.',
            'Vérification : né le 12 avril 2026 (soit moins de 300 jours après le décès) vivant et viable, la condition est remplie.',
          ],
          conclusion:
            'Grâce à la règle *Infans conceptus*, la personnalité juridique de l’enfant remonte rétroactivement à sa conception et il hérite pleinement de son père.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Personne physique',
            stepTheme: 'blue',
            stepTitle: 'Début et fin de la personnalité juridique : naissance vivant et viable, règle Infans conceptus et décès',
            paragraphText:
              "Depuis l'abolition de l'esclavage et de la mort civile, tout être humain jouit de la **personnalité juridique**. **1) Son acquisition** a lieu en principe à la **naissance**, sous une double condition cumulative : l'enfant doit naître **vivant** (avoir respiré à l'accouchement, par opposition à l'enfant mort-né) et **viable** (*vitae habilis* : doté des organes essentiels lui permettant physiologiquement de survivre). Par exception, l'adage latin ***Infans conceptus pro nato habetur quoties de commodis ejus agitur*** (« L'enfant conçu est tenu pour déjà né chaque fois qu'il y va de son intérêt ») permet de faire remonter la personnalité à la **conception** (présumée entre le 300e et le 180e jour avant la naissance) uniquement pour acquérir un droit (héritage, donation, indemnité d'assurance), à condition qu'il naisse ensuite vivant et viable. **2) Sa fin** intervient au **décès** médicalement constaté (ou par jugement déclaratif de décès en cas d'**absence** prolongée sans nouvelles ou de **disparition** dans des circonstances mettant la vie en danger).",
            keyRule:
              'Double condition cumulative d’acquisition de la personnalité juridique à la naissance : naître **vivant** ET **viable**.',
            konanTip:
              'La règle *Infans conceptus* ne joue QUE dans l’intérêt de l’enfant (pour lui attribuer un droit ou avantage) et jamais pour lui imposer une obligation ou une dette !',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p1_ex1',
              type: 'mcq',
              prompt:
                'À quel moment précis et sous quelles conditions une personne physique acquiert-elle en principe la personnalité juridique, et quelle exception permet d’anticiper ce moment ?',
              options: [
                'À la naissance, à condition de naître vivant et viable ; par exception (règle Infans conceptus), la personnalité remonte à la conception chaque fois qu’il y va de l’intérêt de l’enfant (s’il naît ensuite vivant et viable)',
                'Uniquement le jour de l’obtention de la majorité civile à 18 ans révolus',
                'Dès la naissance même si l’enfant est mort-né et dépourvu d’organes vitaux',
                'Uniquement après l’inscription de l’individu sur les listes électorales et l’obtention d’un emploi salarié',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’enfant acquiert la personnalité juridique à la naissance s’il naît vivant (a respiré) et viable (apte physiologiquement à vivre). La fiction juridique Infans conceptus protège l’enfant déjà conçu lorsqu’un droit (ex: succession) s’ouvre à son profit avant sa naissance.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Absence vs Disparition',
            stepTheme: 'violet',
            stepTitle: 'Incertitude sur l’existence : distinction entre l’Absence et la Disparition',
            paragraphText:
              "Lorsqu'on ignore si une personne physique est encore vivante ou décédée sans avoir retrouvé son cadavre, le droit civil ivoirien distingue deux situations selon le degré de probabilité du décès : **1) L'absence** : la personne a cessé de paraître au lieu de son domicile ou de sa résidence et **n'a plus donné de nouvelles**, sans qu'aucun événement particulier ne fasse présumer sa mort (doute prolongé : jugement de présomption d'absence, puis jugement déclaratif de décès après une longue période légale) ; **2) La disparition** : la personne a cessé de paraître dans des **circonstances de nature à mettre sa vie en danger** (naufrage d'un navire, crash d'avion, incendie, catastrophe naturelle, guerre) alors que son corps n'a pu être retrouvé : comme la mort est quasi certaine, le tribunal peut rendre rapidement un **jugement déclaratif de décès** qui tient lieu d'acte de décès.",
            keyRule:
              '**Absence** = manque prolongé de nouvelles sans circonstance périlleuse connue. **Disparition** = non-réapparition à la suite d’un événement mettant la vie en danger (crash, naufrage, incendie) sans que le corps ait été retrouvé.',
            konanTip:
              'Si l’absent ou le disparu réapparaît vivant après le jugement déclaratif de décès, il peut demander l’annulation du jugement : il recouvre ses biens dans l’état où ils se trouvent, mais en droit ivoirien son mariage dissous par le jugement déclaratif de décès reste dissous s’il y a eu remariage.',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p1_ex2',
              type: 'mcq',
              prompt:
                'En droit civil des personnes, quelle est la différence exacte entre la situation juridique de « l’absent » et celle du « disparu » ?',
              options: [
                'L’absent est celui qui a cessé de paraître à son domicile sans donner de nouvelles (incertitude sur sa vie), tandis que le disparu a cessé de paraître dans des circonstances mettant sa vie en danger (crash, naufrage) sans que son corps ait été retrouvé',
                'L’absent est un salarié en congé annuel, tandis que le disparu est un débiteur qui a changé de numéro de téléphone',
                'La disparition exige d’attendre trente ans sans danger particulier, tandis que l’absence concerne uniquement les catastrophes aériennes',
                'Il n’existe aucune différence juridique entre l’absence et la disparition en droit ivoirien',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’absence caractérise le silence prolongé d’une personne éloignée de son domicile sans péril identifié, tandis que la disparition suppose un péril mortel avéré (accident d’avion, naufrage) rendant le décès quasi certain bien que le cadavre soit introuvable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Identification',
            stepTheme: 'violet',
            stepTitle: 'Les éléments d’identification des personnes physiques : Nom, Domicile, Nationalité et État civil',
            paragraphText:
              "Toute personne physique est individualisée dans la société par quatre attributs juridiques constatés dans les actes de l'**état civil** (acte de naissance, acte de mariage, acte de décès) : **1) Le nom** (nom de famille ou patronyme attribué par la filiation, complété par un ou plusieurs prénoms ; il est en principe immuable, imprescriptible et indisponible) ; **2) Le domicile** : c'est le siège légal de la personne, le lieu où elle a son **principal établissement** (centre de ses intérêts familiaux et professionnels). Attention : **le domicile (notion de droit, unique pour chaque personne) se distingue de la résidence ou de l'habitation** (notion de fait : lieu où la personne vit effectivement de façon temporaire) ; **3) La nationalité** : c'est le lien juridique et politique qui rattache un individu à un État souverain (en Côte d'Ivoire, la nationalité d'origine repose principalement sur le **droit du sang** — *jus sanguinis* : être né d'au moins un parent ivoirien — et peut aussi s'acquérir par le mariage, l'adoption ou la naturalisation).",
            keyRule:
              'Unicité du domicile : toute personne physique a nécessairement un domicile et n’en a qu’**un seul** (lieu de son principal établissement, notion de droit), alors qu’elle peut avoir plusieurs résidences secondaires (notion de fait).',
            konanTip:
              'En Côte d’Ivoire (Code de la nationalité), l’attribution de la nationalité ivoirienne à la naissance repose sur le ***jus sanguinis*** (droit du sang : avoir un père ou une mère de nationalité ivoirienne, quel que soit le lieu de naissance) et non sur le *jus soli* (droit du sol).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p1_ex3',
              type: 'mcq',
              prompt:
                'Quelle distinction juridique fondamentale existe-t-il entre le « domicile » et la « résidence » d’une personne physique, et sur quel principe repose la nationalité ivoirienne d’origine ?',
              options: [
                'Le domicile est le siège légal unique de la personne (principal établissement, notion de droit) tandis que la résidence est le lieu où elle séjourne en fait ; la nationalité ivoirienne d’origine repose sur le droit du sang (jus sanguinis)',
                'Une personne physique peut avoir dix domiciles légaux simultanés mais aucune résidence, et la nationalité ivoirienne repose uniquement sur le droit du sol (jus soli)',
                'Le domicile ne concerne que les sociétés commerciales et la résidence ne concerne que les personnes décédées',
                'Le nom et le domicile d’une personne physique peuvent être librement vendus aux enchères publiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le domicile est une notion juridique unique rattachant toute personne au lieu de son principal établissement (utile notamment pour déterminer le tribunal territorialement compétent), distincte de la résidence de fait. Le Code de la nationalité ivoirienne consacre le jus sanguinis (filiation avec un parent ivoirien).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Capacité juridique',
            stepTheme: 'green',
            stepTitle: 'Capacité de jouissance versus Capacité d’exercice et protection des incapables (mineurs et majeurs)',
            paragraphText:
              "La **capacité juridique** se dédouble en deux composantes qu'il ne faut jamais confondre : **1) La capacité de jouissance** est l'aptitude à **être titulaire** d'un droit (toute personne physique possède la capacité générale de jouissance car une incapacité générale de jouissance équivaudrait à la mort civile ; il n'existe que des incapacités *spéciales* de jouissance, comme l'interdiction pour un mineur de voter ou pour un médecin de recevoir un legs de son patient en fin de vie) ; **2) La capacité d'exercice** est l'aptitude à **mettre en œuvre soi-même et seul** les droits dont on est titulaire sans avoir besoin d'être représenté ou assisté par un tiers. En Côte d'Ivoire (Loi n° 2019-572 du 26 juin 2019 relative à la minorité), la **majorité civile est désormais fixée à 18 ans révolus** (et non plus 21 ans !). Sont frappés d'une **incapacité d'exercice** (dans un but de protection) : les **mineurs non émancipés** (moins de 18 ans, représentés par leurs parents ou un tuteur) et les **majeurs protégés** dont les facultés mentales ou corporelles sont altérées (placés sous **tutelle** = représentation, **curatelle** = assistance, ou **sauvegarde de justice**).",
            keyRule:
              'Un mineur de 5 ans ou un majeur sous tutelle possède la **capacité de jouissance** (il peut être propriétaire d’un immeuble ou d’un compte bancaire), mais il est privé de la **capacité d’exercice** (il ne peut pas signer seul l’acte de vente de cet immeuble : son représentant légal agit en son nom).',
            konanTip:
              'Retiens la réforme législative ivoirienne de 2019 (Loi n° 2019-572) : la **majorité civile en Côte d’Ivoire est fixée à 18 ans accomplis** (le mineur acquiert aussi la pleine capacité civile par l’**émancipation**). Par ailleurs, **Tutelle** = représentation (le tuteur agit à la place de l’incapable) ; **Curatelle** = assistance (le majeur agit avec la cosignature de son curateur pour les actes graves).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p1_ex4',
              type: 'mcq',
              prompt:
                'Un enfant mineur âgé de 8 ans hérite d’une villa à Cocody au décès de son grand-père. Quelle est sa situation exacte au regard de la capacité juridique ?',
              options: [
                'Il a la capacité de jouissance (il est juridiquement propriétaire de la villa), mais il est frappé d’une incapacité d’exercice (il ne peut pas vendre ou louer seul cette villa sans son représentant légal)',
                'Il est frappé d’une incapacité générale de jouissance et ne peut posséder aucun bien avant l’âge de 18 ans',
                'Il a la pleine capacité d’exercice et peut vendre seul la villa devant notaire sans l’accord de ses parents ni du juge des tutelles',
                'Il n’a pas la personnalité juridique tant qu’il n’a pas atteint la majorité civile de 18 ans',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dès sa naissance vivant et viable, l’enfant a la personnalité juridique et la capacité de jouissance (il est titulaire du droit de propriété sur la villa), mais étant mineur non émancipé (moins de 18 ans en Côte d’Ivoire depuis la loi de 2019), il n’a pas la capacité d’exercice et doit être représenté par ses administrateurs légaux ou son tuteur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Personnes morales',
            stepTheme: 'blue',
            stepTitle: 'Les personnes morales : définition, classification (droit public vs droit privé) et attributs',
            paragraphText:
              "Les **personnes morales** sont des groupements de personnes ou de biens dotés par la loi de la personnalité juridique pour accomplir un but collectif. Une personne morale a une **existence, un nom (dénomination ou raison sociale), un domicile (siège social), une nationalité et un patrimoine strictement distincts** de ceux des personnes physiques qui la composent ou la dirigent. On distingue : **1) Les personnes morales de droit public** : l'État, les collectivités territoriales (Régions, Districts autonomes, Communes) et les Établissements Publics Nationaux (EPN comme une grande école publique, un CHU ou une université publique) ; **2) Les personnes morales de droit privé** : soit **à but lucratif** (les **sociétés commerciales** régies par l'Acte uniforme OHADA : SARL, SA, SAS, SNC, SCS, qui acquièrent la personnalité morale à compter de leur **immatriculation au RCCM** — Registre du Commerce et du Crédit Mobilier — ainsi que les sociétés civiles et GIE), soit **à but non lucratif** (les **associations** déclarées, les **syndicats professionnels**, les **fondations**).",
            keyRule:
              'En droit OHADA, une société commerciale (SARL, SA, SAS) acquiert la personnalité morale le jour de son **immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM)**, et possède dès lors un patrimoine autonome distinct de celui de ses associés.',
            konanTip:
              'La capacité de jouissance d’une personne morale est soumise au **principe de spécialité** : elle ne peut accomplir que les actes juridiques conformes à son **objet social** défini dans ses statuts ou dans la loi qui l’a créée.',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p1_ex5',
              type: 'mcq',
              prompt:
                'À quel moment précis une société commerciale (SARL, SA ou SAS) acquiert-elle la personnalité morale dans l’espace OHADA, et qu’implique cette personnalité quant à son patrimoine ?',
              options: [
                'Elle acquiert la personnalité morale à compter de son immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM) et dispose d’un patrimoine propre distinct de celui de ses associés',
                'Elle acquiert la personnalité morale dès que deux amis discutent oralement d’un projet d’entreprise autour d’un café',
                'Une société commerciale n’a jamais de patrimoine propre ni de siège social : ses biens appartiennent personnellement au directeur technique',
                'Elle acquiert la personnalité morale uniquement après vingt ans d’activité bénéficiaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Selon l’article 98 de l’Acte uniforme OHADA relatif au droit des sociétés commerciales, toute société commerciale jouit de la personnalité juridique à compter de son immatriculation au RCCM, ce qui lui confère une autonomie patrimoniale complète.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Société vs Association',
            stepTheme: 'orange',
            stepTitle: 'Distinction entre Société commerciale, Association et Syndicat professionnel',
            paragraphText:
              "Au sein des personnes morales de droit privé, ne confonds jamais : **1) La Société** (civile ou commerciale), par laquelle deux ou plusieurs personnes (ou un associé unique dans une société unipersonnelle OHADA : SARL ou SAS unipersonnelle) affectent des apports à une activité dans le **but de partager le bénéfice** ou de profiter de l'économie qui pourra en résulter (**but lucratif**) ; **2) L'Association** (régie en Côte d'Ivoire par la loi n° 60-315 du 21 septembre 1960), qui est la convention par laquelle plusieurs personnes mettent en commun d'une façon permanente leurs connaissances ou leur activité dans un **but autre que de partager des bénéfices** (**but non lucratif** : culturel, sportif, caritatif, religieux) ; **3) Le Syndicat professionnel**, qui a pour objet exclusif l'étude et la **défense des droits ainsi que des intérêts matériels et moraux, tant collectifs qu'individuels**, des personnes visées par ses statuts (salariés ou employeurs d'une profession).",
            keyRule:
              'Critère distinctif majeur : **Société** = partage des bénéfices entre associés (but lucratif) ; **Association** = interdiction de partager les bénéfices entre les membres (but non lucratif) ; **Syndicat** = défense des intérêts professionnels.',
            konanTip:
              'Une association peut réaliser des recettes (cotisations, vente de billets lors d’un gala), mais elle a l’interdiction absolue de distribuer ces excédents sous forme de dividendes à ses membres (sinon c’est une société déguisée).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p1_ex6',
              type: 'mcq',
              prompt:
                'Quel est le critère juridique fondamental qui distingue une « société commerciale » d’une « association » ?',
              options: [
                'La société est constituée dans le but lucratif de partager des bénéfices (ou de réaliser une économie) entre les associés, tandis que l’association poursuit un but non lucratif excluant tout partage de bénéfices entre ses membres',
                'L’association est une personne morale de droit public dirigée par un préfet, tandis que la société n’a pas la personnalité morale',
                'Seule l’association est immatriculée au RCCM et cotée à la Bourse Régionale des Valeurs Mobilières (BRVM)',
                'La société ne peut compter qu’un seul salarié, tandis que l’association est réservée aux magistrats',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La recherche et le partage des bénéfices entre associés constituent l’essence du contrat de société (Acte uniforme OHADA), tandis que l’association (Loi ivoirienne n° 60-315 de 1960) réunit des membres dans un but autre que de partager des bénéfices.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_droit_c3_p2',
        order: 2,
        title: 'La théorie du patrimoine (Aubry et Rau), les droits patrimoniaux/extrapatrimoniaux et les biens',
        summary:
          'Maîtriser la théorie classique du patrimoine d’Aubry et Rau, opposer droits patrimoniaux (réels, personnels, intellectuels) et extrapatrimoniaux, et classer les biens (meubles vs immeubles).',
        conceptExplanation:
          "Les droits subjectifs dont jouit une personne se divisent en deux grandes catégories selon qu'ils sont ou non évaluables en argent : les **droits patrimoniaux** (qui ont une valeur pécuniaire et figurent dans le **patrimoine**) et les **droits extrapatrimoniaux** (droits de la personnalité, droits familiaux et civiques, attachés à la personne et hors du commerce juridique). La théorie classique du patrimoine élaborée au XIXe siècle par les professeurs strasbourgeois **Charles Aubry et Charles Rau** explique le lien indissociable entre la personnalité juridique et le patrimoine.",
        keyRule:
          'Les 3 principes de la théorie d’Aubry et Rau : 1) Seules les personnes (physiques ou morales) ont un patrimoine ; 2) Toute personne a nécessairement un patrimoine (même si son actif est vide ou inférieur à ses dettes) ; 3) Une personne n’a qu’un seul patrimoine (principe d’unité et d’indivisibilité du patrimoine).',
        workedExample: {
          title: 'Qualification juridique des biens dans le datacenter d’une entreprise télécom',
          statement:
            'Une société de télécommunications est propriétaire à Abidjan d’un terrain sur lequel est construit un bâtiment abritant son datacenter. À l’intérieur, elle a installé des baies de serveurs et des climatiseurs industriels indispensables à l’exploitation du datacenter. Elle possède également des créances sur ses clients abonnés et un brevet d’invention sur un protocole réseau. Qualifier juridiquement chacun de ces biens.',
          methodSteps: [
            'Le terrain et le bâtiment du datacenter incorporé au sol : Immeubles par nature.',
            'Les baies de serveurs et climatiseurs industriels (meubles par nature mais affectés par le propriétaire au service et à l’exploitation de l’immeuble) : Immeubles par destination.',
            'Les créances de sommes d’argent sur les clients : Droits personnels (ou droits de créance), qualifiés de meubles par détermination de la loi (incorporels).',
            'Le brevet d’invention sur le protocole réseau : Droit intellectuel (propriété industrielle), bien meuble incorporel.',
          ],
          conclusion:
            'Un bien mobilier par sa nature physique devient un **immeuble par destination** lorsque le propriétaire d’un fonds immobilier l’affecte durablement au service et à l’exploitation de cet immeuble (ou l’y attache à perpétuelle demeure).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Aubry & Rau',
            stepTheme: 'blue',
            stepTitle: 'La théorie classique du patrimoine d’Aubry et Rau : universalité juridique et gage général',
            paragraphText:
              "En droit (contrairement au langage courant où « avoir du patrimoine » signifie être riche), le **patrimoine** est l'**ensemble des biens et des obligations d'une personne, envisagé comme une universalité de droit**, c'est-à-dire un tout indissociable comprenant un **actif** (tous les biens et droits évaluables en argent, présents et à venir) et un **passif** (toutes les dettes et obligations pécuniaires). Selon la célèbre théorie personnaliste d'**Aubry et Rau**, le patrimoine est une émanation de la personnalité juridique, d'où découlent quatre conséquences : 1) **Seules les personnes** (physiques ou morales) ont un patrimoine ; 2) **Toute personne a nécessairement un patrimoine** (le nouveau-né ou le sans-abri endetté a un patrimoine,qui est un contenant juridique pouvant être vide ou négatif) ; 3) **Le patrimoine est incessant et intransmissible du vivant de la personne** (on peut vendre un bien isolé, mais le patrimoine entier ne se transmet qu'au décès aux héritiers) ; 4) **Unité et indivisibilité du patrimoine** : une personne n'a qu'**un seul patrimoine**, de sorte que tout l'actif répond de tout le passif (**droit de gage général des créanciers chirographaires**, article 2092 du Code civil).",
            keyRule:
              'Dans la théorie d’Aubry et Rau, le patrimoine est un **contenant juridique** composé d’un Actif (droits/biens) et d’un Passif (dettes) : même une personne ruinée sans aucun bien possède un patrimoine !',
            konanTip:
              'Pour isoler le patrimoine professionnel du patrimoine personnel d’un entrepreneur, il faut créer une **personne morale distincte** (ex: constituer une SARL ou SAS unipersonnelle immatriculée au RCCM).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p2_ex1',
              type: 'mcq',
              prompt:
                'Selon la théorie classique du patrimoine d’Aubry et Rau, laquelle des propositions suivantes est juridiquement EXACTE ?',
              options: [
                'Toute personne (physique ou morale) possède nécessairement un patrimoine et un seul (universalité juridique comprenant un actif et un passif), même si elle ne possède aucun bien ou a plus de dettes que de biens',
                'Seuls les milliardaires propriétaires d’au moins trois immeubles possèdent un patrimoine au sens juridique',
                'Un étudiant peut vendre l’intégralité de son patrimoine (présent et futur) de son vivant à un camarade de classe',
                'Le patrimoine juridique ne comprend que les biens immobiliers et jamais les dettes (passif)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chez Aubry et Rau, le patrimoine est une émanation de la personnalité juridique : c’est un contenant unique et indivisible (universalité de droit) qui existe chez toute personne dès sa naissance, indépendamment de la richesse de son contenu.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Patrimoniaux vs Extra',
            stepTheme: 'violet',
            stepTitle: 'Opposition entre droits patrimoniaux (dans le commerce) et droits extrapatrimoniaux (hors du commerce)',
            paragraphText:
              "Les droits subjectifs se répartissent en deux sphères aux régimes juridiques opposés : **1) Les droits extrapatrimoniaux** n'ont pas de valeur pécuniaire en eux-mêmes et restent en dehors du patrimoine (ex: droit à la vie, droit à l'intégrité physique, droit au nom, droit à l'honneur, droit à l'image, droit au respect de la vie privée et des données personnelles, autorité parentale, droit de vote). Ils présentent **quatre caractères** : ils sont **incessibles** (hors du commerce : on ne peut ni les vendre ni les donner), **intransmissibles** aux héritiers au décès, **insaisissables** par les créanciers et **imprescriptibles** (ils ne se perdent pas par le non-usage). **2) Les droits patrimoniaux** sont évaluables en argent et composent l'actif du patrimoine (ex: droit de propriété sur un ordinateur, créance de salaire). Ils ont les quatre caractères inverses : ils sont **cessibles**, **transmissibles** à cause de mort, **saisissables** par les créanciers et **prescriptibles**.",
            keyRule:
              'Quatre caractères des droits extrapatrimoniaux : **Incessibles** (hors du commerce), **Intransmissibles**, **Insaisissables** et **Imprescriptibles**. Les droits patrimoniaux sont au contraire cessibles, transmissibles, saisissables et prescriptibles.',
            konanTip:
              'Nuance importante : un droit extrapatrimonial (comme le droit à l’image ou à l’honneur) n’est pas évaluable en argent, mais sa **violation** par un tiers ouvre droit à une réparation pécuniaire (**dommages-intérêts**, qui eux entrent dans le patrimoine de la victime !).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p2_ex2',
              type: 'mcq',
              prompt:
                'Quels sont les quatre caractères juridiques propres aux « droits extrapatrimoniaux » (tels que le droit à la vie, le droit au nom, le droit au respect de la vie privée ou le droit de vote) ?',
              options: [
                'Ils sont incessibles (hors du commerce), intransmissibles à cause de mort, insaisissables par les créanciers et imprescriptibles',
                'Ils sont librement vendables aux enchères, saisissables par les banques et s’éteignent au bout de deux ans de non-usage',
                'Ils figurent à l’actif du bilan comptable et constituent le gage général des créanciers chirographaires',
                'Ils n’appartiennent qu’aux sociétés commerciales et jamais aux personnes physiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Attachés intimement à la personne humaine et dépourvus de valeur marchande directe, les droits extrapatrimoniaux sont hors du commerce juridique : incessibles, intransmissibles, insaisissables et imprescriptibles.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Réels, Personnels, Intellectuels',
            stepTheme: 'violet',
            stepTitle: 'Les trois catégories de droits patrimoniaux : droits réels, droits personnels (de créance) et droits intellectuels',
            paragraphText:
              "Au sein du patrimoine, les droits patrimoniaux se divisent en trois grandes familles : **1) Les droits réels** (du latin *res*, la chose), qui confèrent à leur titulaire un pouvoir juridique direct et immédiat sur une **chose** sans l'intermédiaire d'une autre personne. Ils comprennent les **droits réels principaux** — au premier rang desquels le **droit de propriété** (article 544 du Code civil), qui réunit trois prérogatives : ***l'usus*** (droit d'user de la chose), ***le fructus*** (droit d'en percevoir les fruits et revenus, ex: loyers) et ***l'abusus*** (droit d'en disposer : vendre, donner, détruire), ainsi que ses démembrements comme l'**usufruit** (*usus + fructus*) opposé à la **nue-propriété** (*abusus*), et les servitudes — et les **droits réels accessoires** (sûretés garantissant le paiement d'une créance : **hypothèque** sur un immeuble, **gage** sur un meuble corporel, **nantissement** sur un meuble incorporel), qui confèrent un **droit de suite** et un **droit de préférence** ; **2) Les droits personnels (ou droits de créance)**, qui unissent deux personnes et permettent au **créancier** d'exiger du **débiteur** une prestation (obligation de donner, de faire ou de ne pas faire) ; **3) Les droits intellectuels** (propriété littéraire et artistique / droit d'auteur sur un logiciel, propriété industrielle / brevet d'invention, marque, fonds de commerce).",
            keyRule:
              'Trilogie des attributs du droit de propriété (droit réel principal le plus complet) : ***Usus*** (utiliser la chose) + ***Fructus*** (percevoir les fruits/loyers) + ***Abusus*** (disposer/vendre la chose). Dans l’usufruit, l’usufruitier a l’*usus* et le *fructus*, tandis que le nu-propriétaire conserve l’*abusus*.',
            konanTip:
              '**Droit réel** = rapport direct entre une personne et une chose (*jus in re*, opposable à tous *erga omnes*, avec droit de suite et droit de préférence). **Droit personnel (de créance)** = rapport d’obligation entre deux personnes (un créancier et un débiteur).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p2_ex3',
              type: 'mcq',
              prompt:
                'Comment s’appellent les trois prérogatives constitutives du droit de propriété (droit réel principal), et quelle est la différence entre un droit réel et un droit personnel (droit de créance) ?',
              options: [
                'L’usus (usage), le fructus (jouissance/fruits) et l’abusus (disposition) ; le droit réel porte directement sur une chose (avec droit de suite et de préférence), tandis que le droit personnel permet à un créancier d’exiger une prestation d’un débiteur',
                'L’élément matériel, l’élément légal et l’élément moral ; le droit réel ne concerne que les dettes fiscales',
                'L’hypothèque, la tutelle et la curatelle ; le droit personnel porte uniquement sur les terrains agricoles',
                'Le droit réel est un droit extrapatrimonial hors du commerce, tandis que le droit personnel est une infraction pénale',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit de propriété (art. 544 C. civ.) confère sur la chose l’usus, le fructus et l’abusus. Le droit réel est un pouvoir direct d’une personne sur une chose (opposable à tous), alors que le droit personnel (ou de créance) est un lien de droit entre deux personnes (créancier et débiteur).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Meubles vs Immeubles',
            stepTheme: 'green',
            stepTitle: 'La classification fondamentale des biens : Immeubles (3 types) versus Meubles (3 types)',
            paragraphText:
              "Selon l'article 516 du Code civil, **« Tous les biens sont meubles ou immeubles »** (critère physique de fixité). **A) Les Immeubles** (biens fixes et généralement de grande valeur dont la vente exige un acte notarié publié au livre foncier) se divisent en 3 catégories : 1) **Immeubles par nature** : le sol (terrains) et tout ce qui y est incorporé (bâtiments, maisons, pylônes scellés, arbres et récoltes sur pied) ; 2) **Immeubles par destination** : des objets qui sont *mobilier par leur nature*, mais que le propriétaire d'un immeuble par nature a affectés durablement au **service et à l'exploitation de ce fonds** (tracteur et bétail d'une ferme, serveurs et climatiseurs dédiés d'un datacenter appartenant au propriétaire des murs) ou attachés à perpétuelle demeure (glaces, boiseries scellées) ; 3) **Immeubles par l'objet auquel ils s'appliquent** : les droits réels portant sur un immeuble (usufruit d'un immeuble, servitude, hypothèque) et les actions en revendication immobilière. **B) Les Meubles** (biens pouvant se déplacer) se divisent aussi en 3 catégories : 1) **Meubles par nature** (voiture, ordinateur, table, animaux) ; 2) **Meubles par anticipation** (immeubles par nature vendus en vue de leur détachement prochain du sol : récolte sur pied vendue avant la moisson, arbres vendus pour être abattus) ; 3) **Meubles par détermination de la loi** (tous les droits incorporels mobiliers : créances, parts sociales et actions de sociétés, fonds de commerce, droits d'auteur et brevets).",
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Classification juridique des Biens (Article 516 du Code civil)',
              caption: 'La qualification de meuble ou d’immeuble dépend à la fois de la nature physique du bien et de sa destination juridique.',
              matrix2x2: {
                topAxis: ['Biens Immeubles (Fixité)', 'Biens Meubles (Mobilité)'],
                leftAxis: ['Par nature (physique)', 'Par fiction juridique (destination / anticipation / loi)'],
                topLeft: {
                  title: 'Immeubles par nature',
                  items: ['Fonds de terre (terrains)', 'Bâtiments, édifices, ponts, pylônes ancrés', 'Arbres et récoltes encore attachés aux racines'],
                  color: 'blue',
                },
                topRight: {
                  title: 'Meubles par nature',
                  items: ['Corps pouvant se transporter d’un lieu à un autre', 'Ordinateurs, smartphones, véhicules, mobilier', 'Animaux (hors cheptel attaché à un fonds agricole)'],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Immeubles par destination & par l’objet',
                  items: ['Destination : meuble affecté par le propriétaire du fonds à l’exploitation de son immeuble', 'Attache à perpétuelle demeure (scellement)', 'Par l’objet : usufruit immobilier, servitude, hypothèque'],
                  color: 'violet',
                },
                bottomRight: {
                  title: 'Meubles par anticipation & par la loi',
                  items: ['Anticipation : récolte sur pied ou coupe de bois vendue avant détachement', 'Détermination de la loi (incorporels) : parts sociales, actions, créances, logiciels, brevets'],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'Deux conditions cumulatives pour qu’un meuble devienne **immeuble par destination** : 1) l’immeuble par nature et le meuble doivent appartenir au **même propriétaire**, et 2) le meuble doit être affecté au service/exploitation de l’immeuble (ou scellé à perpétuelle demeure).',
            konanTip:
              'Si c’est un **locataire** qui installe ses propres machines ou serveurs dans un bâtiment qu’il loue, ces machines restent des **meubles par nature** (car il n’y a pas unité de propriétaire entre le bâtiment et les machines !).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p2_ex4',
              type: 'mcq',
              prompt:
                'À quelles conditions cumulatives un bien meuble par nature (ex: des tracteurs agricoles ou les climatiseurs centraux d’une usine) devient-il juridiquement un « immeuble par destination » ?',
              options: [
                'Le meuble et l’immeuble par nature doivent appartenir au même propriétaire, et ce propriétaire doit avoir affecté le meuble au service et à l’exploitation du fonds (ou l’y avoir attaché à perpétuelle demeure)',
                'Il suffit qu’un locataire dépose provisoirement un objet lourd de plus de 50 kg dans un appartement loué',
                'Le bien meuble doit être vendu en vue d’être détaché du sol dans les trois mois (comme une récolte sur pied)',
                'Seules les actions cotées en Bourse sont des immeubles par destination',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’immobilisation par destination exige l’identité de propriétaire (la même personne est propriétaire du fonds immobilier et du meuble) ainsi qu’un rapport d’affectation économique au service du fonds ou une attache matérielle à perpétuelle demeure.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Classifications secondaires',
            stepTheme: 'violet',
            stepTitle: 'Choses fongibles (de genre) vs corps certains, choses consomptibles vs non consomptibles, fruits vs produits',
            paragraphText:
              "Trois distinctions secondaires complètent le droit des biens : **1) Choses fongibles (ou choses de genre) versus Corps certains** : les **choses fongibles** sont interchangeables entre elles et se déterminent au poids, au compte ou à la mesure (ex: $10\\text{ tonnes}$ de cacao de telle qualité, un billet de $10\\,000\\text{ FCFA}$, $100\\text{ litres}$ d'essence — le transfert de propriété et des risques n'a lieu qu'au moment de leur **individualisation**), tandis qu'un **corps certain** est un bien unique, individualisé et non interchangeable (ex: le terrain titre foncier n° 4520, tel tableau original, telle voiture d'occasion immatriculée — le transfert de propriété a lieu dès l'échange des consentements *solo consensu*) ; **2) Choses consomptibles versus Choses non consomptibles** : une chose **consomptible** se détruit ou s'aliène dès le premier usage (aliments, carburant, monnaie), tandis qu'une chose **non consomptible** permet un usage prolongé et répété (maison, ordinateur, voiture) ; **3) Fruits versus Produits** : les **fruits** sont tout ce que la chose fournit **périodiquement sans altération de sa substance** (fruits naturels, industriels/récoltes, **fruits civils** comme les loyers d'un immeuble ou les intérêts d'un capital — ils appartiennent à l'usufruitier), tandis que les **produits** sont prélevés de façon non périodique **en diminuant la substance de la chose** (pierres extraites d'une carrière non renouvelable).",
            keyRule:
              '**Fruits** = revenus périodiques sans altération de la substance du bien (ex: récoltes, loyers = fruits civils) ; **Produits** = prélèvements non périodiques qui entament la substance du bien (ex: minerais d’une mine).',
            konanTip:
              'Intérêt majeur de la distinction Corps certain vs Chose de genre (fongible) : pour un **corps certain**, l’acheteur devient propriétaire dès l’accord sur la chose et le prix ; pour une **chose de genre**, il ne devient propriétaire qu’au moment de l’**individualisation** (pesée, comptage, mise à part).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p2_ex5',
              type: 'mcq',
              prompt:
                'Quelle est la différence juridique entre un « fruit » (ex: les loyers mensuels d’un immeuble ou une récolte annuelle de mangues) et un « produit » (ex: le pétrole ou le marbre extrait d’un gisement) ?',
              options: [
                'Le fruit est fourni périodiquement par le bien sans altération de sa substance (et revient à l’usufruitier), tandis que le produit n’est pas périodique et entame la substance même du bien',
                'Le fruit entame et détruit définitivement la substance de l’immeuble, tandis que le produit se renouvelle chaque semaine sans altération',
                'Les loyers d’une maison sont des immeubles par nature et non des fruits civils',
                'Seul le nu-propriétaire a le droit de percevoir les fruits pendant toute la durée de l’usufruit',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les fruits (naturels, industriels ou civils comme les loyers et intérêts) se caractérisent par leur périodicité et la conservation intacte de la substance du bien frugifère, contrairement aux produits qui épuisent progressivement la substance du capital.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Article 2279 C. civ.',
            stepTheme: 'orange',
            stepTitle: 'Intérêt pratique de la distinction Meuble / Immeuble : la règle « En fait de meubles, la possession vaut titre »',
            paragraphText:
              "Pourquoi est-il si important en pratique de qualifier un bien de **meuble** ou d'**immeuble** ? Parce que leur régime juridique diffère sur quatre points majeurs : 1) **La publicité et la forme des ventes** : la vente d'un **immeuble** en Côte d'Ivoire exige obligatoirement un **acte authentique notarié** et une inscription au **Livre foncier** pour être opposable aux tiers, alors que les meubles circulent librement sans formalisme ; 2) **Les sûretés réelles** : un immeuble fait l'objet d'une **hypothèque** (sans dépossession), tandis qu'un meuble corporel fait l'objet d'un **gage** ; 3) **La compétence territoriale** : le tribunal du lieu de situation de l'immeuble est compétent en matière immobilière, contre le domicile du défendeur en matière mobilière ; 4) **La prescription acquisitive** : pour un immeuble, acquérir la propriété par possession prolongée (*usucapion*) demande 10 à 30 ans, tandis que pour un **meuble corporel**, l'**Article 2279 du Code civil** énonce la règle célèbre : **« En fait de meubles, la possession vaut titre »** (le possesseur actuel de bonne foi d'un meuble corporel en devient immédiatement propriétaire, sauf si le meuble a été perdu ou volé, auquel cas le propriétaire véritable peut le revendiquer pendant 3 ans).",
            keyRule:
              'Article 2279 du Code civil : « En fait de meubles, la possession vaut titre » — la possession paisible, publique et de **bonne foi** d’un meuble corporel confère immédiatement un titre de propriété (sauf vol ou perte : action en revendication de 3 ans).',
            konanTip:
              'Attention : la règle « En fait de meubles, la possession vaut titre » (art. 2279 C. civ.) ne s’applique qu’aux **meubles corporels** (et jamais aux immeubles ni aux meubles incorporels comme les créances ou logiciels).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p2_ex6',
              type: 'mcq',
              prompt:
                'À quelle catégorie de biens s’applique la célèbre règle de l’article 2279 du Code civil « En fait de meubles, la possession vaut titre », et quelle condition est exigée du possesseur ?',
              options: [
                'Elle s’applique aux biens meubles corporels et exige que le possesseur soit de bonne foi (avec une exception de revendication pendant 3 ans en cas de perte ou de vol)',
                'Elle s’applique uniquement aux terrains urbains et aux bâtiments immatriculés au Livre foncier',
                'Elle permet au voleur de mauvaise foi de devenir propriétaire légal d’une maison dès la première seconde de l’effraction',
                'Elle s’applique uniquement aux droits extrapatrimoniaux comme le droit de vote et le nom de famille',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour favoriser la sécurité et la rapidité du commerce des biens mobiliers, l’article 2279 du Code civil fait produire à la possession de bonne foi d’un meuble corporel un effet acquisitif immédiat de propriété (sous réserve du délai de revendication de 3 ans en cas de perte ou de vol).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_droit_c3_p3',
        order: 3,
        title: 'Les sources des droits subjectifs (actes et faits juridiques) et le régime de la preuve',
        summary:
          'Distinguer les actes juridiques des faits juridiques, déterminer la charge de la preuve (article 1315 du Code civil) et opposer les modes de preuve parfaits et imparfaits.',
        conceptExplanation:
          "D'où naissent les droits subjectifs et les obligations ? Ils ont deux sources : les **actes juridiques** (manifestations de volonté destinées à produire des effets de droit, comme un contrat ou un testament) et les **faits juridiques** (événements volontaires ou involontaires auxquels la loi attache d'office des effets de droit qui n'ont pas été recherchés, comme un accident de la circulation, un décès ou une naissance). En cas de contestation devant le juge, encore faut-il pouvoir **prouver** son droit (*Idem est non esse aut non probari* : ne pas pouvoir prouver son droit revient à ne pas en avoir), car la qualification d'acte ou de fait juridique commande directement le mode de preuve admissible.",
        keyRule:
          'Règle fondamentale de la preuve : les **faits juridiques** se prouvent par tous moyens (liberté de la preuve : témoignages, indices, présomptions), tandis que les **actes juridiques civils** (au-delà du seuil légal) exigent en principe une **preuve littérale préconstituée (un écrit)**, sauf en matière commerciale où la preuve est libre entre commerçants.',
        workedExample: {
          title: 'Charge et mode de preuve dans un litige civil et un accident matériel',
          statement:
            'Situation 1 : Paul prétend avoir prêté 500 000 FCFA à son voisin civil Marc (non commerçant) et veut le faire condamner à rembourser en produisant uniquement le témoignage oral d’un ami. Situation 2 : La voiture de Marc percute le portail de Paul ; Paul veut prouver l’accident à l’aide de photos et de témoignages de passants. Analyser la charge et la recevabilité des preuves dans les deux situations.',
          methodSteps: [
            'Charge de la preuve (Article 1315 al. 1 du Code civil : *Actori incumbit probatio*) : dans les deux cas, c’est à Paul (le demandeur qui réclame l’exécution d’une obligation) qu’incombe la charge de prouver l’existence de sa créance.',
            'Situation 1 (contrat de prêt = Acte juridique civil supérieur au seuil légal) : en droit civil, la preuve d’un acte juridique doit être rapportée par écrit (acte authentique ou sous seing privé / électronique) ; le simple témoignage oral est en principe irrecevable (sauf commencement de preuve par écrit ou impossibilité morale/matérielle).',
            'Situation 2 (accident = Fait juridique) : il était impossible de rédiger un contrat avant l’accident ; la preuve des faits juridiques est libre (tous moyens : témoignages et photos sont parfaitement recevables).',
          ],
          conclusion:
            'La distinction Acte juridique (preuve écrite exigée en droit civil) / Fait juridique (preuve libre par tous moyens) est la clé de voûte du droit de la preuve.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Acte vs Fait juridique',
            stepTheme: 'blue',
            stepTitle: 'Les deux sources des droits subjectifs : l’Acte juridique et le Fait juridique',
            paragraphText:
              "Les événements qui créent, modifient, transmettent ou éteignent des droits subjectifs se divisent en deux catégories : **1) L'acte juridique** est une **manifestation de volonté accomplie dans l'intention de produire des effets de droit** (les effets juridiques sont voulus par l'auteur). Il peut être **unilatéral** (œuvre d'une seule volonté : le testament, la reconnaissance d'un enfant naturel, la démission, la résiliation unilatérale) ou **conventionnel / bilatéral / multilatéral** (accord d'au moins deux volontés : le **contrat** de vente, de bail, de travail, de société). **2) Le fait juridique** est tout événement — soit **involontaire / naturel** (la naissance, le décès, la majorité à 18 ans, la foudre), soit **volontaire de l'homme** (un accident causé par imprudence, une agression, la gestion d'affaires, le paiement de l'indu) — auquel **la loi attache d'office des effets de droit qui n'ont pas été spécialement voulus** par l'auteur (ex: l'obligation légale de réparer le dommage causé à autrui en vertu de l'article 1382 du Code civil).",
            keyRule:
              'Critère de distinction : dans l’**acte juridique**, l’auteur veut à la fois l’acte ET ses effets juridiques (ex: signer un contrat de vente pour transférer la propriété contre un prix) ; dans le **fait juridique**, même si le comportement matériel est volontaire (ex: donner un coup de poing), les conséquences juridiques (l’obligation légale de payer des dommages-intérêts) sont imposées par la loi et non recherchées par l’auteur.',
            konanTip:
              'Ne tombe jamais dans le piège : un délit volontaire (voler un serveur, diffamer quelqu’un, blesser volontairement un tiers) est un **FAIT JURIDIQUE** (et non un acte juridique !), car le voleur n’a pas agi dans le but juridique d’être condamné à indemniser la victime.',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p3_ex1',
              type: 'mcq',
              prompt:
                'Parmi les événements suivants, lequel constitue un « fait juridique » (et non un acte juridique) ?',
              options: [
                'Un accident de la circulation ou une cyberattaque causant un dommage à autrui (ainsi que la naissance ou le décès d’une personne)',
                'Un contrat de vente d’équipements réseau conclu entre un fournisseur et un client',
                'Un testament rédigé par une personne pour léguer ses biens après sa mort',
                'Un contrat de bail commercial signé pour une durée de trois ans',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le contrat de vente, le contrat de bail (actes bilatéraux) et le testament (acte unilatéral) sont des actes juridiques où la volonté recherche directement l’effet de droit. En revanche, l’accident, le délit civil, la naissance ou le décès sont des faits juridiques auxquels la loi attache d’office des conséquences juridiques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Charge de la preuve',
            stepTheme: 'violet',
            stepTitle: 'La charge de la preuve (Article 1315 du Code civil : Actori incumbit probatio) et les présomptions légales',
            paragraphText:
              "Dans un procès civil (procédure accusatoire où le juge est neutre), **qui doit prouver quoi ?** L'**Article 1315 du Code civil** établit un mécanisme de balancier en deux temps : **Alinéa 1er** : *« Celui qui réclame l'exécution d'une obligation doit la prouver »* (***Actori incumbit probatio*** : la charge de la preuve pèse d'abord sur le **demandeur** qui allègue un fait ou un droit nouveau). **Alinéa 2** : *« Réciproquement, celui qui se prétend libéré, doit justifier le paiement ou le fait qui a produit l'extinction de son obligation »* (***Reus in excipiendo fit actor*** : une fois que le demandeur a prouvé sa créance, la charge de la preuve bascule sur le **défendeur** qui prétend avoir déjà payé en produisant par exemple une quittance). **Exception : les présomptions légales** (article 1349 C. civ.) dispensent le demandeur de prouver un fait difficile en le déduisant d'un autre fait connu : elles sont soit **simples (ou relatives, *juris tantum*)** lorsqu'elles peuvent être renversées par la preuve contraire (ex: présomption de paternité du mari, présomption de bonne foi), soit **irréfragables (ou absolues, *juris et de jure*)** lorsqu'aucune preuve contraire n'est admise (ex: autorité de la chose jugée, remise de l'original du titre de créance par le créancier au débiteur).",
            keyRule:
              'Article 1315 du Code civil : 1) C’est au **demandeur** de prouver l’existence de l’obligation qu’il invoque (*Actori incumbit probatio*) ; 2) C’est ensuite au **débiteur (défendeur)** de prouver qu’il s’en est libéré par le paiement.',
            konanTip:
              '**Présomption simple** = renversable par la preuve contraire ; **Présomption irréfragable** = absolue, interdit de rapporter la preuve contraire.',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p3_ex2',
              type: 'mcq',
              prompt:
                'Selon l’article 1315 du Code civil, comment se répartit la charge de la preuve entre un créancier (demandeur) qui réclame le paiement d’une facture et le client (défendeur) qui affirme avoir déjà réglé cette facture ?',
              options: [
                'Le créancier (demandeur) doit d’abord prouver l’existence de l’obligation (la créance), puis c’est au client (défendeur) de prouver qu’il s’est libéré par le paiement (ex: quittance ou reçu)',
                'C’est au client défendeur de prouver dès le départ qu’il n’a jamais rien commandé, sans que le demandeur ait quoi que ce soit à prouver',
                'C’est au juge civil d’enquêter personnellement à ses propres frais dans les locaux des deux entreprises',
                'Aucune preuve n’est exigée du demandeur s’il porte plainte un lundi matin',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’article 1315 du Code civil répartit la charge de la preuve en deux temps : alinéa 1 (Actori incumbit probatio : le demandeur prouve l’existence de sa créance), puis alinéa 2 (le débiteur qui se prétend libéré prouve le paiement ou le fait extinctif).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Preuves parfaites : Écrit',
            stepTheme: 'violet',
            stepTitle: 'Les modes de preuve parfaits : la preuve littérale (acte authentique, acte sous seing privé, écrit électronique)',
            paragraphText:
              "On distingue cinq modes de preuve en droit civil, répartis en **preuves parfaites** (qui lient le juge : il est obligé de tenir le fait pour établi) et **preuves imparfaites** (laissées à l'appréciation souveraine du juge). Au premier rang des preuves parfaites figure la **preuve littérale (ou preuve par écrit préconstitué)**, qui comprend trois formes : **1) L'acte authentique** (article 1317 C. civ.), dressé par un **officier public compétent** (notaire, officier d'état civil, commissaire de justice/huissier) selon les solennités légales : il a une **date certaine** et fait foi jusqu'à **inscription de faux** (procédure très lourde) pour tout ce que l'officier public a personnellement constaté, et est revêtu de la formule exécutoire ; **2) L'acte sous seing privé (sous signature privée)**, rédigé et signé par les parties elles-mêmes sans officier public : il fait foi jusqu'à preuve contraire et exige la formalité du **« double original »** (autant d'originaux que de parties ayant un intérêt distinct pour les contrats synallagmatiques, art. 1325 C. civ.) ou de la **mention manuscrite de la somme en toutes lettres et en chiffres** pour les engagements unilatéraux de sommes d'argent (art. 1326 C. civ.) ; **3) L'écrit électronique** (Loi ivoirienne n° 2013-546 relative aux transactions électroniques), qui a **exactement la même force probante que l'écrit sur support papier**, à condition que puisse être dûment identifiée la personne dont il émane (procédé fiable de **signature électronique** certifiée par l'ARTCI) et qu'il soit établi et conservé dans des conditions de nature à en garantir l'**intégrité**.",
            keyRule:
              'L’**écrit électronique** a la même valeur probante que l’écrit papier sous deux conditions cumulatives : 1) identification fiable de son auteur (signature électronique sécurisée), et 2) garantie de l’**intégrité** du document lors de son établissement et de sa conservation.',
            konanTip:
              'Acte authentique (notaire) = foi jusqu’à **inscription de faux**. Acte sous seing privé (signé par les particuliers) = formalité du **double original** (contrat synallagmatique, art. 1325) ou mention de la somme en lettres et en chiffres (promesse unilatérale de dette, art. 1326).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p3_ex3',
              type: 'mcq',
              prompt:
                'À quelles conditions cumulatives un écrit sous forme électronique possède-t-il la même force probante qu’un écrit sur support papier en droit ivoirien (Loi n° 2013-546 sur les transactions électroniques) ?',
              options: [
                'À condition que puisse être dûment identifiée la personne dont il émane (signature électronique fiable) et qu’il soit établi et conservé dans des conditions de nature à en garantir l’intégrité',
                'À condition qu’il soit obligatoirement imprimé sur papier cartonné et signé à l’encre rouge devant le Maire',
                'Un document électronique n’a jamais aucune valeur juridique devant les tribunaux ivoiriens',
                'À condition qu’il soit envoyé par SMS anonyme sans aucun dispositif de chiffrement ni d’identification',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le principe d’équivalence fonctionnelle consacré par la loi ivoirienne n° 2013-546 reconnaît à l’écrit électronique la même force probante que l’écrit papier dès lors que l’identité de son signataire est assurée et que l’intégrité du fichier est garantie.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Aveu & Serment / Imparfaites',
            stepTheme: 'violet',
            stepTitle: 'Les autres preuves parfaites (aveu judiciaire, serment décisoire) et les preuves imparfaites (témoignage, présomptions)',
            paragraphText:
              "Outre l'écrit (authentique, sous seing privé ou électronique), il existe deux autres **preuves parfaites** qui lient le juge : **1) L'aveu judiciaire** (déclaration par laquelle une partie reconnaît devant le juge, au cours du procès, l'exactitude d'un fait qui lui est défavorable : il fait pleine foi contre son auteur, est indivisible et irrévocable sauf erreur de fait) ; **2) Le serment décisoire** (affirmation solennelle par laquelle un plaideur met son adversaire au défi de jurer devant le juge qu'il ne doit rien : s'il prête serment, il gagne le procès ; s'il refuse de jurer ou de référer le serment, il perd). À l'opposé, les **preuves imparfaites** ne lient pas le juge (qui apprécie librement leur valeur probante selon son intime conviction) : elles comprennent le **témoignage** (déclaration d'un tiers sur des faits dont il a eu personnellement connaissance, à ne pas confondre avec la simple rumeur ou preuve *par commune renommée*), les **présomptions du fait de l'homme** (indices graves, précis et concordants laissés à l'appréciation du juge, y compris l'aveu extrajudiciaire) et le **serment supplétoire** (déféré d'office par le juge pour compléter sa conviction).",
            keyRule:
              '**Preuves parfaites** (lient le juge) = 1) Écrit (authentique, sous seing privé, électronique), 2) Aveu judiciaire, 3) Serment décisoire. **Preuves imparfaites** (appréciation souveraine du juge) = 1) Témoignage, 2) Présomptions de l’homme (indices), 3) Aveu extrajudiciaire, 4) Serment supplétoire.',
            konanTip:
              'Ne confonds pas le **serment décisoire** (déféré par une partie à son adversaire : preuve parfaite qui tranche définitivement le litige) et le **serment supplétoire** (demandé d’office par le juge : preuve imparfaite qui ne lie pas le juge).',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p3_ex4',
              type: 'mcq',
              prompt:
                'Lesquels des procédés suivants constituent les trois modes de « preuve parfaits » qui lient obligatoirement le juge civil ?',
              options: [
                'L’écrit (acte authentique, acte sous seing privé ou écrit électronique), l’aveu judiciaire et le serment décisoire',
                'Le témoignage oral d’un passant, la rumeur publique et le serment supplétoire',
                'Uniquement les photographies non datées et les indices matériels laissés à l’intime conviction du juge',
                'L’aveu extrajudiciaire verbal fait dans un restaurant et l’avis d’un professeur de droit',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les preuves parfaites (preuve littérale écrite ou électronique, aveu judiciaire fait devant le juge et serment décisoire déféré par une partie à l’autre) s’imposent au juge sans pouvoir d’appréciation, contrairement aux preuves imparfaites (témoignages, indices/présomptions de l’homme, serment supplétoire).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Exceptions à l’écrit',
            stepTheme: 'green',
            stepTitle: 'Les quatre exceptions à l’exigence d’un écrit pour prouver un acte juridique',
            paragraphText:
              "En droit civil, l'**article 1341 du Code civil** pose une double règle pour les actes juridiques : 1) il doit être passé un écrit pour tout acte juridique excédant le seuil légal, et 2) il n'est reçu aucune preuve par témoins *contre et outre* le contenu d'un acte écrit (même en dessous du seuil). Toutefois, cette exigence rigoureuse d'un écrit connaît **quatre exceptions majeures** où la preuve de l'acte juridique redevenant **libre par tous moyens** (témoignages, indices) : **1) En matière commerciale** (Article 5 de l'Acte uniforme OHADA portant sur le droit commercial général : **à l'égard des commerçants, les actes de commerce se prouvent par tous moyens**, même par voie électronique) ; **2) En présence d'un commencement de preuve par écrit** (art. 1347 C. civ. : tout écrit — lettre missive, courriel, chèque, brouillon — qui émane de l'adversaire contre lequel la demande est formée et qui rend **vraisemblable** le fait allégué, complété alors par des témoignages ou indices) ; **3) En cas d'impossibilité matérielle ou morale de se procurer un écrit** lors de la conclusion de l'acte (art. 1348 C. civ. : dépôt nécessaire lors d'un incendie ou naufrage, ou liens familiaux/affectifs étroits entre parents et enfants ou époux empêchant moralement d'exiger un contrat écrit) ; **4) En cas de perte de l'original écrit par suite d'un cas fortuit ou de force majeure**.",
            keyRule:
              'Les 4 exceptions où un acte juridique peut être prouvé par tous moyens (sans écrit parfait) : 1) Matière commerciale (entre commerçants, art. 5 AUDCG OHADA), 2) Commencement de preuve par écrit + témoignages/indices, 3) Impossibilité matérielle ou morale de rédiger un écrit, 4) Perte du titre écrit par force majeure.',
            konanTip:
              'Pour qu’un document soit un **commencement de preuve par écrit** (art. 1347 C. civ.), il faut 3 conditions : 1) un écrit (lettre, e-mail, SMS), 2) qui **émane de l’adversaire** à qui on l’oppose, et 3) qui rend **vraisemblable** le fait allégué.',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans lesquels des cas suivants est-il exceptionnellement permis de prouver un acte juridique (un contrat) par tous moyens (témoignages, indices) malgré l’absence d’un acte écrit régulier ?',
              options: [
                'En matière commerciale à l’égard des commerçants (droit OHADA), ou en matière civile lorsqu’il existe un commencement de preuve par écrit émanant de l’adversaire, une impossibilité matérielle ou morale de se procurer un écrit, ou la perte du titre par force majeure',
                'Jamais : même entre commerçants ou en cas d’incendie détruisant l’original, aucun contrat ne peut être prouvé sans acte notarié',
                'Dès que le demandeur rédige lui-même sur une feuille blanche une note affirmant que son voisin lui doit dix millions de FCFA',
                'Uniquement pour les contrats de vente d’immeubles et de terrains urbains',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La règle civiliste de la preuve littérale (art. 1341 C. civ.) cède devant la liberté de la preuve commerciale (art. 5 AUDCG OHADA), ainsi qu’en présence d’un commencement de preuve par écrit (art. 1347), d’une impossibilité matérielle ou morale de rédiger un écrit, ou de la perte de l’écrit par force majeure (art. 1348).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Acte mixte',
            stepTheme: 'orange',
            stepTitle: 'Le piège de la preuve dans un « acte mixte » (contrat entre un commerçant et un non-commerçant)',
            paragraphText:
              "Que se passe-t-il lorsqu'un contrat est conclu entre un **commerçant** (ex: un opérateur télécom ou un vendeur d'ordinateurs) et un **non-commerçant** (un consommateur particulier ou un étudiant) ? Un tel contrat est qualifié d'**acte mixte** (il est commercial pour le commerçant et civil pour le particulier non-commerçant). La jurisprudence applique alors un **principe distributif** pour la preuve : tout dépend de savoir **CONTRE QUI** la preuve doit être rapportée ! **1) Si c'est le particulier non-commerçant qui veut prouver contre le commerçant** : comme l'acte est commercial à l'égard du commerçant défendeur, le particulier bénéficie de la **liberté de la preuve** commerciale et peut prouver contre le commerçant **par tous moyens** (témoignages, factures, e-mails, indices). **2) Inversement, si c'est le commerçant qui veut prouver contre le particulier non-commerçant** : comme l'acte est civil à l'égard du particulier défendeur, le commerçant est soumis aux règles strictes du **droit civil** et doit rapporter une **preuve écrite** (acte sous seing privé ou écrit électronique signé par le client) !",
            keyRule:
              'Règle distributive de preuve dans l’**acte mixte** : Particulier qui prouve **contre le commerçant** = **Preuve libre par tous moyens** (droit commercial). Commerçant qui prouve **contre le particulier non-commerçant** = **Preuve par écrit obligatoire** (droit civil).',
            konanTip:
              'Astuce infaillible pour les actes mixtes : regarde toujours la qualité de **celui CONTRE QUI on prouve** (le défendeur à la preuve). Contre un commerçant $\\implies$ tous moyens ; contre un civil $\\implies$ écrit exigé !',
            exercise: {
              id: 'lmd_srit_l1_droit_c3_p3_ex6',
              type: 'mcq',
              prompt:
                'Un étudiant (non-commerçant) achète un serveur informatique auprès d’une société commerciale (acte mixte). En cas de litige sur ce contrat, comment s’appliquent les règles de preuve selon la partie contre laquelle la preuve est rapportée ?',
              options: [
                'L’étudiant non-commerçant peut prouver contre la société commerciale par tous moyens (liberté de la preuve commerciale), tandis que la société commerciale qui veut prouver contre l’étudiant doit respecter les règles du droit civil (preuve par écrit)',
                'La société commerciale peut prouver contre l’étudiant par simple rumeur orale, tandis que l’étudiant doit obligatoirement produire un acte authentique notarié',
                'Aucune preuve écrite ni électronique n’est jamais admise dans un acte mixte',
                'Seul le Conseil constitutionnel est compétent pour juger un acte mixte',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans un acte mixte, le régime de la preuve est distributif selon la qualité de celui contre qui la preuve est administrée : contre le commerçant, la preuve est libre par tous moyens (art. 5 AUDCG OHADA) ; contre le civil non-commerçant, la preuve écrite du droit civil demeure exigée.',
            },
          },
        ],
      }),
    ],
  },
];
