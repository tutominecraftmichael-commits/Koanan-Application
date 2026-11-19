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

export const INIT_INFO_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'lmd_entd_l1_init_info_ch1',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Communication numérique, supports mobiles et écosystème du Web',
    summary:
      'Définir la communication numérique et ses supports (ordinateur, logiciels, mobile, SMS, QR Code), maîtriser les fondamentaux d’Internet (TCP/IP, Web 1.0 à 3.0, typologie de sites) et les outils indispensables du Web.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source:
      'ENTD L1 — Cours Communication Numérique et Réseaux Sociaux + Formation Communication Digitale',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch1_p1',
        order: 1,
        title: 'Supports de la communication numérique : ordinateur, logiciels, mobile et QR Code',
        summary:
          'Identifier l’ordinateur au sens large, les logiciels, les catégories d’applications mobiles, le WebSMS et les capacités du QR Code.',
        conceptExplanation:
          "La communication numérique désigne l'informatisation des supports de communication et, plus largement, l'écosystème des stratégies menées sur le web, les médias sociaux, les terminaux mobiles et les objets connectés.\n\n1. L'ordinateur : appareil électronique de traitement de l'information piloté par un programme. Tout équipement doté d'un processeur et de mémoire (PC, smartphone, tablette, télévision connectée) appartient à la famille des ordinateurs.\n2. Le logiciel : programme permettant d'automatiser une tâche et d'ajouter des fonctionnalités (ex. Skype pour la visioconférence, Photoshop pour le graphisme).\n3. Le mobile et les applications mobiles : logiciels téléchargeables sur smartphone, classés en grandes catégories :\n- Applications indépendantes (sans internet : calculatrice, liste de contacts).\n- Applications exigeant une connexion / connectées (dépendantes du réseau).\n- Applications interagissant avec les capteurs du smartphone (scan de code-barres ou QR Code).\n- Applications sociales renforçant les interactions entre mobinautes.\n4. SMS / WebSMS et QR Code : le SMS (Short Message Service) permet une diffusion de masse, y compris via des plateformes WebSMS en ligne (ex. Infobip). Le QR Code (Quick Response) est un code-barres 2D pouvant stocker jusqu'à 7 089 caractères numériques ou 4 296 caractères alphanumériques (contre 10 à 13 caractères pour un code-barres classique).",
        keyRule:
          'Un ordinateur = processeur + mémoire + programme ; un QR Code (2D) stocke jusqu’à 7 089 chiffres ou 4 296 caractères alphanumériques.',
        formulas: [
          {
            name: 'Capacité d’un QR Code (2D) vs Code-barres classique (1D)',
            formula: 'QR Code : 7 089 caractères numériques / 4 296 alphanumériques (2 953 octets) vs Code-barres : 10 à 13 caractères',
          },
        ],
        workedExample: {
          title: 'Choisir le bon canal mobile pour une campagne d’information',
          statement:
            'Une organisation souhaite diffuser rapidement une alerte à 5 000 usagers sans qu’ils aient besoin de connexion Internet, puis rediriger les visiteurs d’une affiche papier vers son site web.',
          methodSteps: [
            'Pour joindre 5 000 personnes sans connexion Internet requise côté destinataire, utiliser un service WebSMS (type Infobip) qui envoie des SMS en masse depuis un ordinateur.',
            'Pour relier l’affiche papier physique au site web, générer un QR Code contenant l’URL de la page (via un générateur comme goqr.me ou Unitag).',
            'Tester le QR Code sur smartphone avec un lecteur dédié ou l’appareil photo avant impression.',
          ],
          conclusion:
            'Le WebSMS assure la portée universelle hors-ligne et le QR Code crée une passerelle instantanée entre le support papier et le numérique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Ordinateur',
            stepTheme: 'Fondamentaux',
            stepTitle: 'Définir l’ordinateur au sens large',
            paragraphText:
              'Un ordinateur n’est pas uniquement un PC de bureau : tout terminal électronique combinant un processeur, de la mémoire et des programmes de traitement de données (smartphone, tablette, TV connectée) est un ordinateur.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui caractérise fondamentalement un ordinateur (incluant PC, smartphones et TV connectées) ?',
              options: [
                'La présence obligatoire d’un clavier physique et d’une souris',
                'La présence d’un processeur et de mémoire exécutant un jeu d’instructions',
                'Le fait d’être relié en permanence à un câble fibre optique',
                'Le fait d’exécuter exclusivement le système Windows',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tout système électronique doté d’un processeur et de mémoire capable de lire, manipuler et traiter des données numériques via des programmes est un ordinateur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Logiciel & App',
            stepTheme: 'Mobile',
            stepTitle: 'Classer les applications mobiles selon leur usage',
            paragraphText:
              'Les applications mobiles sont des logiciels installés sur smartphone. Certaines sont indépendantes (calculatrice, contacts) et fonctionnent hors-ligne, tandis que d’autres exigent Internet ou exploitent les capteurs intégrés (caméra pour scanner un code).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Dans quelle catégorie classe-t-on une application mobile comme la calculatrice ou la liste de contacts locale ?',
              options: [
                'Application dépendante du streaming',
                'Application de paiement sécurisé',
                'Application indépendante (fonctionnant sans connexion Internet)',
                'Application exclusivement dédiée aux réseaux sociaux',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les applications indépendantes remplissent leurs fonctions localement sans nécessiter d’accès Internet ni de réseau téléphonique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'SMS & WebSMS',
            stepTheme: 'Messagerie',
            stepTitle: 'Exploiter le WebSMS en communication d’entreprise',
            paragraphText:
              'Le SMS (Short Message Service) transmet des messages textes de mobile à mobile ou d’un système informatique vers un mobile. Les services WebSMS (opérateurs ou plateformes comme Infobip) permettent aux entreprises d’envoyer des campagnes SMS en ligne à grande échelle.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Que signifie le sigle SMS et quel est l’intérêt d’un service WebSMS ?',
              options: [
                'Short Message Service ; le WebSMS permet d’envoyer des SMS en masse depuis un service en ligne',
                'System Mail Server ; le WebSMS remplace entièrement les sites web',
                'Social Media Sharing ; le WebSMS sert uniquement à publier sur Facebook',
                'Secure Mobile Storage ; le WebSMS stocke des fichiers dans le cloud',
              ],
              correctAnswerIndex: 0,
              explanation:
                'SMS signifie Short Message Service. Un service WebSMS permet à une organisation de piloter des envois de SMS vers des milliers de destinataires depuis Internet.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'QR Code',
            stepTheme: 'Code 2D',
            stepTitle: 'Comparer le QR Code au code-barres classique',
            paragraphText:
              'QR signifie « Quick Response ». Ce code-barres en deux dimensions stocke jusqu’à 7 089 caractères numériques ou 4 296 caractères alphanumériques (2 953 octets), bien au-delà des 10 à 13 caractères d’un code-barres linéaire classique.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle est la capacité maximale de stockage d’un QR Code en caractères numériques et alphanumériques ?',
              options: [
                '10 à 13 caractères uniquement',
                '100 caractères numériques ou 50 alphanumériques',
                '500 caractères numériques ou 256 alphanumériques',
                '7 089 caractères numériques ou 4 296 caractères alphanumériques',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Grâce à son encodage bidimensionnel (2D), le QR Code stocke jusqu’à 7 089 chiffres ou 4 296 caractères alphanumériques.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Distinction',
            stepTheme: 'Numérique',
            stepTitle: 'Ne pas réduire la communication numérique à un seul outil',
            paragraphText:
              'La communication numérique ne se résume pas à avoir une page Facebook ou un PC : c’est un écosystème cohérent qui articule ordinateurs, logiciels, smartphones, web, réseaux sociaux et objets connectés au service de la stratégie d’organisation.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle définition décrit le plus fidèlement la communication numérique ?',
              options: [
                'La simple numérisation de courriers papier sur une clé USB',
                'L’informatisation des supports et la stratégie globale de communication sur le web, les médias sociaux, les mobiles et les objets connectés',
                'L’envoi exclusif de courriels internes au sein d’un même bureau',
                'L’achat de matériel informatique sans connexion réseau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La communication numérique englobe à la fois l’informatisation des supports et la stratégie globale déployée sur l’ensemble des canaux digitaux.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_init_info_ch1_p2',
        order: 2,
        title: 'Internet, générations du Web (1.0 à 3.0) et typologie des sites web',
        summary:
          'Maîtriser le protocole TCP/IP, les services d’Internet, l’évolution Web 1.0/2.0/3.0, les composantes d’un site et les différents types de sites web.',
        conceptExplanation:
          "Internet est un réseau informatique mondial interconnectant des réseaux nationaux, régionaux et privés autour d'un protocole commun : TCP/IP (Transmission Control Protocol / Internet Protocol).\n\n1. Services fondamentaux d'Internet : le courrier électronique (e-mail), le Web (pages reliées par hyperliens et contenus multimédias), le transfert de fichiers par FTP (File Transfer Protocol), auxquels s'ajoutent la téléphonie IP et le streaming audio/vidéo en direct.\n2. Les générations du Web :\n- Web 1.0 : sites statiques de présentation diffusant de l'information descendante aux visiteurs.\n- Web 2.0 : web participatif où les visiteurs contribuent, commentent et animent les plateformes.\n- Web 3.0 : web des objets connectés (montres, voitures, capteurs) et de l'interconnexion intelligente.\n3. Composantes d'un site web : un contenu, une adresse appelée nom de domaine (ex. `www.hopitalbaptiste.org`) et un espace d'hébergement loué chez un hébergeur.\n4. Typologie des sites : site vitrine (présente l'entreprise), site catalogue (produits détaillés sans achat direct), site marchand / e-commerce (boutique dynamique avec paiement sécurisé), site institutionnel (valeurs et services d'une organisation/collectivité), site événementiel, site application web (exécuté dans le navigateur), site carte de visite (page unique `.tel`), et blog (cybercarnet d'articles datés présentés en ordre antéchronologique, ex. WordPress).",
        keyRule:
          'Site web = Contenu + Nom de domaine + Hébergement. Le blog classe ses billets en ordre antéchronologique (du plus récent au plus ancien).',
        formulas: [
          {
            name: 'Protocole universel d’Internet',
            formula: 'TCP/IP = Transmission Control Protocol / Internet Protocol',
            note: 'Services historiques : E-mail, Web (HTTP/HTTPS), FTP (File Transfer Protocol).',
          },
        ],
        workedExample: {
          title: 'Choisir la typologie de site adaptée à trois besoins',
          statement:
            'Associer le bon type de site web à : (A) une clinique souhaitant publier ses horaires, missions et valeurs ; (B) un commerçant voulant vendre et encaisser en ligne ; (C) un médecin publiant chaque semaine des articles de prévention.',
          methodSteps: [
            'Besoin A (présenter l’organisation, ses valeurs et ses informations pratiques) -> Site institutionnel (ou vitrine).',
            'Besoin B (boutique dynamique avec panier et paiement sécurisé) -> Site marchand / e-commerce.',
            'Besoin C (publication périodique d’articles datés du plus récent au plus ancien) -> Blog (ex. sur WordPress).',
          ],
          conclusion:
            'La nature du site dépend directement des objectifs métier (informer, vendre, publier régulièrement).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'TCP/IP & Services',
            stepTheme: 'Internet',
            stepTitle: 'Identifier le protocole et les services fondamentaux d’Internet',
            paragraphText:
              'Internet repose sur la suite de protocoles TCP/IP et offre trois services historiques fondamentaux : le courrier électronique (e-mail), le Web et l’échange de fichiers par FTP (File Transfer Protocol), complétés par la VoIP et le streaming.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quel protocole de communication unifie l’ensemble des réseaux interconnectés sur Internet ?',
              options: ['TCP/IP', 'HTML/CSS', 'PDF/DOCX', 'SMS/MMS'],
              correctAnswerIndex: 0,
              explanation:
                'TCP/IP (Transmission Control Protocol / Internet Protocol) est le socle universel qui permet aux ordinateurs du monde entier d’échanger des paquets sur Internet.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Web 1.0 / 2.0 / 3.0',
            stepTheme: 'Évolution du Web',
            stepTitle: 'Distinguer les trois générations du Web',
            paragraphText:
              'Le Web 1.0 offrait des pages statiques de simple consultation ; le Web 2.0 a introduit l’interactivité et la participation des internautes ; le Web 3.0 étend cette dynamique aux objets connectés (montres, véhicules, domotique).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle génération du Web se caractérise principalement par la participation active des visiteurs à la vie et à l’animation des sites ?',
              options: ['Le Web 0.5', 'Le Web 1.0', 'Le Web 2.0', 'Le protocole FTP'],
              correctAnswerIndex: 2,
              explanation:
                'Le Web 2.0 (web social et participatif) transforme l’internaute de simple lecteur en contributeur actif (commentaires, blogs, réseaux sociaux).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Composantes',
            stepTheme: 'Site web',
            stepTitle: 'Connaître les trois piliers techniques d’un site web',
            paragraphText:
              'Pour exister sur Internet, un site web réunit trois éléments : son contenu (pages, textes, médias), son nom de domaine (adresse unique de type `www.exemple.org`) et un espace d’hébergement fourni par un hébergeur.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on l’opérateur qui fournit l’espace serveur où est stocké un site web ainsi que son nom de domaine ?',
              options: [
                'Un tableur',
                'Un hébergeur',
                'Un compilateur',
                'Un antivirus',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’hébergeur met à disposition l’espace serveur (hébergement annuel) et commercialise généralement l’enregistrement du nom de domaine.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Typologie',
            stepTheme: 'Sites web',
            stepTitle: 'Différencier site vitrine, catalogue, marchand et application web',
            paragraphText:
              'Un site vitrine présente l’entreprise ; un site catalogue détaille ses produits ; un site marchand (e-commerce) intègre un système de paiement sécurisé en ligne ; une application web s’exécute directement dans le navigateur sans installation locale.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la particularité d’une « application web » par rapport à un logiciel classique ?',
              options: [
                'Elle ne fonctionne jamais avec une connexion Internet',
                'Elle ne peut afficher que des cartes de visite en .tel',
                'Elle exige l’achat d’un CD-ROM d’installation',
                'Elle s’exécute directement dans un navigateur web sans nécessiter d’installation sur l’ordinateur',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Une application web tourne dans le navigateur grâce à Internet, sans installer de programme lourd sur le poste.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Blog',
            stepTheme: 'Publication',
            stepTitle: 'Comprendre l’organisation d’un blog',
            paragraphText:
              'Un blog (carnet web ou cybercarnet, créable par exemple sur WordPress) publie périodiquement des articles (« billets ») datés et signés, affichés dans un ordre antéchronologique : le plus récent apparaît toujours en premier.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Dans quel ordre sont classés les articles (« billets ») sur la page d’accueil d’un blog ?',
              options: [
                'En ordre antéchronologique (du plus récent au plus ancien)',
                'En ordre alphabétique strict du nom des auteurs',
                'En ordre chronologique strict (le premier article créé reste toujours tout en haut)',
                'En ordre aléatoire à chaque rafraîchissement de la page',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’ordre antéchronologique place toujours l’actualité et les billets les plus récents en haut du blog.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_init_info_ch1_p3',
        order: 3,
        title: 'Outils indispensables sur le Web, langages HTML5/CSS3 et métiers du digital',
        summary:
          'Identifier l’e-mail, le navigateur, le moteur de recherche, les bases HTML5/CSS3 et les rôles de Blogueur et Community Manager.',
        conceptExplanation:
          "Pour agir efficacement sur le web, l'utilisateur et l'entreprise mobilisent des outils essentiels et des métiers spécialisés :\n\n1. L'adresse e-mail : identifiant unique mondial sur Internet (ex. Gmail, Yahoo Mail), indispensable pour accéder aux services en ligne et mener des actions d'e-mailing (groupes d'e-mails, newsletters, réponses automatisées).\n2. Le navigateur web : logiciel permettant d'afficher et de parcourir les pages web (ex. Google Chrome, Mozilla Firefox, Microsoft Edge).\n3. Le moteur de recherche : repose sur deux piliers : une gigantesque base de données indexant les sites en continu et une interface permettant d'interroger cette base par mots-clés ou questions pour afficher les résultats les plus pertinents.\n4. Les langages de base d'une page web : HTML5 (balises qui structurent le contenu de la page) et CSS3 (feuille de style qui habille la présentation visuelle : couleurs, polices, mise en page).\n5. Outils de communication simultanée et métiers : Skype pour les réunions audio/vidéo ; le Blogueur (animateur d'un site sur une thématique précise) et le Community Manager (chargé de l'animation des pages sociales, groupes, newsletters et forums d'une organisation).",
        keyRule:
          'Navigateur = logiciel qui affiche les pages (Chrome, Firefox) ; Moteur de recherche = service qui trouve les pages (base indexée + requête) ; HTML5 = structure, CSS3 = style.',
        workedExample: {
          title: 'Distinguer navigateur, moteur de recherche et langages web',
          statement:
            'Un étudiant ouvre Google Chrome, saisit une requête sur Google pour visiter un site conçu en HTML5/CSS3 et s’inscrit à sa newsletter avec son compte Gmail.',
          methodSteps: [
            'Google Chrome est le navigateur (logiciel client qui affiche les pages).',
            'Google (moteur) interroge sa base de données indexée pour renvoyer la liste des sites pertinents.',
            'Le navigateur interprète les balises HTML5 (structure) et les propriétés CSS3 (habillage visuel) du site.',
            'L’adresse Gmail sert d’identifiant unique pour recevoir la newsletter (bulletin d’information en ligne).',
          ],
          conclusion:
            'Chaque brique technique remplit un rôle précis et complémentaire dans l’expérience web.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'Confusion classique',
            stepTheme: 'Outils Web',
            stepTitle: 'Ne pas confondre navigateur et moteur de recherche',
            paragraphText:
              'Un navigateur (Google Chrome, Mozilla Firefox) est un logiciel installé pour afficher des pages web. Un moteur de recherche est un site doté d’une base de données gigantesque que l’on interroge par mots-clés pour localiser des sites pertinents.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Lequel de ces éléments est un navigateur web (programme permettant d’afficher un site) ?',
              options: [
                'Une newsletter',
                'Mozilla Firefox',
                'Le protocole FTP',
                'Un QR Code',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mozilla Firefox (comme Google Chrome ou Edge) est un logiciel navigateur conçu pour interpréter et afficher les pages web.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Moteur de recherche',
            stepTheme: 'Fonctionnement',
            stepTitle: 'Connaître les deux composants d’un moteur de recherche',
            paragraphText:
              'Un moteur de recherche repose sur deux éléments principaux : (1) une base de données immense recensant et mettant à jour les sites web ; (2) une interface permettant d’interroger cette base par mots-clés pour classer les résultats par pertinence.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Sur quels deux éléments fondamentaux repose un moteur de recherche Internet ?',
              options: [
                'Un câble Ethernet et une imprimante réseau',
                'Un compte Facebook et un numéro WhatsApp',
                'Une base de données indexant les sites et un site permettant de l’interroger par requêtes',
                'Un traitement de texte et un tableur',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le moteur maintient un index mondial des pages web et offre un champ de recherche qui renvoie les résultats classés selon leur pertinence et notoriété.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'HTML5 & CSS3',
            stepTheme: 'Architecture Web',
            stepTitle: 'Séparer le contenu (HTML5) de l’habillage (CSS3)',
            paragraphText:
              'En architecture web, les balises HTML5 servent à construire et structurer le contenu d’une page (titres, paragraphes, liens), tandis que les propriétés CSS3 définissent son habillage visuel (couleurs, typographie, disposition).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Quel est le rôle spécifique d’une feuille de style CSS3 dans la conception d’une page web ?',
              options: [
                'Habiller et mettre en forme visuellement le contenu structuré en HTML5',
                'Remplacer le protocole TCP/IP sur Internet',
                'Envoyer automatiquement des SMS aux visiteurs',
                'Enregistrer le nom de domaine chez l’hébergeur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'HTML5 définit la structure sémantique du contenu ; CSS3 (Cascading Style Sheets) contrôle tout l’habillage esthétique et la mise en page.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Métiers',
            stepTheme: 'Animation digitale',
            stepTitle: 'Distinguer le Blogueur du Community Manager',
            paragraphText:
              'Le blogueur anime un site ou carnet web consacré à une thématique spécifique. Le Community Manager gère et anime l’ensemble des communautés d’une organisation : pages réseaux sociaux, groupes, newsletters et forums de discussion.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Quel professionnel est spécifiquement chargé d’animer les pages réseaux sociaux, groupes, forums et newsletters d’une entreprise ou d’une institution ?',
              options: [
                'Le réparateur matériel',
                'L’hébergeur DNS',
                'Le fabricant de processeurs',
                'Le Community Manager',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le Community Manager (gestionnaire de communauté) anime, modère et développe la présence relationnelle d’une marque sur les canaux digitaux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'E-mailing',
            stepTheme: 'Communication',
            stepTitle: 'Exploiter l’e-mail comme outil de communication professionnelle',
            paragraphText:
              'Au-delà des échanges individuels, l’e-mail sert d’identifiant unique pour accéder aux services web et se déploie en marketing grâce aux groupes d’e-mails, aux newsletters (bulletins d’information en ligne) et aux réponses automatisées.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Parmi les usages suivants, lequel illustre une exploitation professionnelle avancée de l’e-mail en communication digitale ?',
              options: [
                'Créer une nouvelle adresse à chaque message envoyé',
                'Déployer des newsletters, des groupes d’e-mails et des réponses automatisées',
                'Supprimer tous les messages reçus sans les lire',
                'Utiliser l’e-mail uniquement pour dessiner des schémas',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les newsletters, listes de diffusion et autorépondeurs transforment l’e-mail en un levier puissant de fidélisation et d’information.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_init_info_ch2',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Réseaux sociaux et outils collaboratifs Google (Agenda & Drive)',
    summary:
      'Maîtriser le fonctionnement des réseaux sociaux en entreprise (Facebook, LinkedIn, WhatsApp) et la collaboration cloud en temps réel avec Google Agenda et Google Drive/Docs.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source:
      'ENTD L1 — Cours Communication Numérique et Réseaux Sociaux',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch2_p1',
        order: 1,
        title: 'Stratégie sur les réseaux sociaux : Page Facebook, modèle économique et animation',
        summary:
          'Différencier Profil, Groupe et Page Facebook, comprendre le modèle publicitaire du gratuit et appliquer les règles d’animation éditoriale.',
        conceptExplanation:
          "Internet a dépassé la télévision dès 2016 comme média le plus consommé au monde, et les dépenses publicitaires en ligne connaissent une croissance soutenue à deux chiffres alors que les médias hors ligne reculent.\n\n1. Profil, Groupe et Page Facebook :\n- Profil Facebook : compte personnel lié à une adresse e-mail pour échanger avec des amis.\n- Groupe Facebook : espace d'échanges communautaires où les membres sont ajoutés ou validés.\n- Page Facebook : outil professionnel indispensable pour les entreprises et institutions (statistiques, gestion de rôles d'administrateurs, publications programmées, événements, Facebook Live, liaison au site web, annonces sponsorisées).\n2. Le modèle économique des réseaux sociaux : « Ce qui semble être gratuit sur Internet est en réalité ce qui coûte le plus cher. » Le modèle de Facebook repose sur l'animation des pages et le ciblage publicitaire fondé sur les traces et activités des utilisateurs.\n3. Règle d'or de publication : informer, distraire et éduquer — « vendre sans montrer qu'on vend » afin d'intéresser durablement l'audience avant de convertir. On complète Facebook par LinkedIn (réseau professionnel B2B) et WhatsApp (messagerie instantanée de proximité).",
        keyRule:
          'Pour une organisation, on crée toujours une Page Facebook (et non un Profil) ; la ligne éditoriale doit informer, distraire et éduquer plutôt que faire de la publicité agressive.',
        workedExample: {
          title: 'Lancer la présence Facebook d’un centre de santé (ex. Hôpital Baptiste)',
          statement:
            'Définir la structure Facebook adaptée et le calendrier éditorial d’un établissement de santé.',
          methodSteps: [
            'Créer une Page Facebook officielle (et non un Profil personnel) afin de bénéficier des rôles d’administrateurs, des statistiques et des annonces sponsorisées.',
            'Relier la Page au site web institutionnel et planifier des publications programmées.',
            'Appliquer le triptyque éditorial : informer (horaires, campagnes de vaccination), éduquer (conseils de prévention), distraire/humaniser (coulisses de l’équipe, Facebook Live questions-réponses).',
          ],
          conclusion:
            'La communauté grandit par la valeur utile offerte, ce qui renforce la confiance envers l’établissement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Page vs Profil',
            stepTheme: 'Facebook Pro',
            stepTitle: 'Pourquoi une entreprise doit utiliser une Page Facebook',
            paragraphText:
              'Le profil est destiné aux particuliers et le groupe aux échanges restreints. Seule la Page Facebook offre les fonctionnalités professionnelles : gestion multi-administrateurs, publications programmées, liaison site web et campagnes sponsorisées.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle structure Facebook une entreprise doit-elle créer pour bénéficier des annonces sponsorisées, de la programmation de posts et de la gestion des rôles administrateurs ?',
              options: [
                'Un Profil Facebook personnel',
                'Une simple conversation Messenger',
                'Une Page Facebook',
                'Un compte invité anonyme',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La Page Facebook est l’interface professionnelle dédiée aux marques et organisations, avec outils d’administration, programmation et publicité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Modèle économique',
            stepTheme: 'Économie digitale',
            stepTitle: 'Comprendre la contrepartie de la « gratuité » sur les réseaux',
            paragraphText:
              'L’accès aux réseaux sociaux semble gratuit pour l’utilisateur, mais leur modèle économique repose sur le suivi des comportements et centres d’intérêt afin de vendre du ciblage publicitaire ultra-précis aux annonceurs.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Sur quoi repose principalement le modèle économique de plateformes gratuites comme Facebook ?',
              options: [
                'Sur l’analyse des activités des utilisateurs et la vente d’annonces publicitaires ciblées',
                'Sur un abonnement mensuel obligatoire payé par chaque internaute',
                'Sur la vente d’imprimantes et de papier bureautique',
                'Sur des subventions exclusives des journaux papier',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La gratuité d’usage est financée par la monétisation des données comportementales via des campagnes publicitaires sponsorisées ciblées.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Ligne éditoriale',
            stepTheme: 'Contenu',
            stepTitle: 'Appliquer la règle « Informer, distraire, éduquer »',
            paragraphText:
              'Sur les réseaux sociaux, les publications purement commerciales lassent vite l’audience. Il faut privilégier des contenus qui informent, distraient et éduquent afin de « vendre sans montrer qu’on vend » et susciter l’intérêt naturel.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quels sont les trois piliers éditoriaux recommandés pour animer efficacement une Page Facebook ?',
              options: [
                'Répéter le prix, bloquer les commentaires, ignorer les messages',
                'Informer, distraire et éduquer',
                'Copier la concurrence, supprimer les anciens posts, éviter les images',
                'Publier uniquement des factures comptables en texte brut',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une ligne éditoriale équilibrée (informer, distraire, éduquer) crée de l’engagement et prépare l’achat sans agresser l’internaute.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Panorama réseaux',
            stepTheme: 'Écosystème',
            stepTitle: 'Associer chaque réseau social à sa vocation dominante',
            paragraphText:
              'Les plateformes sont complémentaires : Facebook touche le grand public et les communautés locales, LinkedIn est dédié aux réseaux professionnels et au recrutement B2B, WhatsApp excelle dans la relation client directe et YouTube dans la vidéo.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quel réseau social est spécifiquement conçu pour développer le réseau professionnel, la marque employeur et les relations B2B d’une entreprise ?',
              options: ['Pinterest', 'Snapchat', 'TikTok', 'LinkedIn'],
              correctAnswerIndex: 3,
              explanation:
                'LinkedIn est la plateforme de référence pour le réseautage professionnel, les solutions B2B et le recrutement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Tendances médias',
            stepTheme: 'Marché digital',
            stepTitle: 'Mesurer la bascule publicitaire vers le numérique',
            paragraphText:
              'Depuis 2016, Internet a dépassé la télévision comme premier média consommé au monde. En conséquence, les dépenses publicitaires hors-ligne (presse papier, TV) stagnent ou baissent tandis que la publicité en ligne affiche une croissance à deux chiffres.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quel constat majeur sur la communication digitale justifie la maîtrise d’Internet par les entreprises ?',
              options: [
                'Internet a dépassé la télévision dès 2016 et les dépenses publicitaires en ligne connaissent une croissance à deux chiffres',
                'La télévision a définitivement remplacé les smartphones en Afrique',
                'Le nombre de sites web actifs diminue chaque année depuis 1991',
                'Les journaux papier captent désormais 95 % des budgets publicitaires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Internet est devenu le média dominant qui dicte les règles du marché, attirant des budgets publicitaires en forte hausse.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_init_info_ch2_p2',
        order: 2,
        title: 'Outils collaboratifs Google : Google Agenda et Google Drive / Docs',
        summary:
          'Planifier et partager des agendas en ligne, stocker dans le cloud (15 Go), gérer les 3 niveaux de permissions et co-éditer en temps réel.',
        conceptExplanation:
          "Les outils Google constituent un pilier pratique de la communication numérique et du travail collaboratif en entreprise :\n\n1. Google Agenda : outil de gestion de calendrier en ligne permettant de créer des événements uniques ou récurrents, partager des agendas, envoyer des invitations de réunion, programmer des rappels (e-mail, notification Android ou SMS), importer des événements et gérer ses tâches.\n2. Google Drive : service de stockage et de partage dans le cloud offrant gratuitement 15 Go accessibles sur ordinateur, tablette et smartphone, couplé à la suite bureautique en ligne (Google Docs, Sheets, Slides, Drawings, Forms).\n3. Conversion et partage collaboratif : pour co-éditer un fichier Microsoft Office en temps réel, on l'ouvre avec Google Docs/Sheets/Slides et on l'enregistre au format Google. On partage ensuite le fichier (ou un dossier complet) en attribuant l'un des 3 niveaux de permissions :\n- Lecture autorisée (consultation seule).\n- Commentaire autorisé (consultation + ajout de commentaires, applicable aux fichiers mais pas aux dossiers).\n- Modification autorisée (édition complète et partage).\n4. Co-édition en temps réel et chat intégré : chaque collaborateur connecté voit en direct le curseur coloré et le nom des autres auteurs, et peut discuter dans le chat intégré du document (à condition d'être connecté à un compte Google).",
        keyRule:
          'Dans Google Drive, on choisit toujours le niveau de permission minimal nécessaire (Lecture / Commentaire / Modification) ; la collaboration temps réel exige une connexion Internet et le format Google.',
        formulas: [
          {
            name: 'Les 3 niveaux de droits de partage Google Drive',
            formula: 'Lecture autorisée < Commentaire autorisé (fichiers seuls) < Modification autorisée',
            note: 'Espace gratuit de base : 15 Go partagés sur le compte Google.',
          },
        ],
        workedExample: {
          title: 'Organiser la relecture collaborative d’un rapport sur Google Drive',
          statement:
            'Vous avez un rapport `.docx` à faire relire par trois collègues sans qu’ils puissent effacer votre texte, puis à valider lors d’une réunion planifiée.',
          methodSteps: [
            'Importer le fichier dans Google Drive, clic droit > « Ouvrir avec > Google Docs » puis « Fichier > Enregistrer au format Google Docs ».',
            'Cliquer sur « Partager » en haut à droite, saisir les adresses e-mail des trois collègues et choisir la permission « Commentaire autorisé ».',
            'Créer un événement dans Google Agenda, ajouter les trois collègues en invités et configurer un rappel 30 minutes avant la réunion.',
          ],
          conclusion:
            'Vos collègues peuvent suggérer et commenter en toute sécurité, et la réunion de validation est synchronisée dans leurs agendas.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Google Agenda',
            stepTheme: 'Planification',
            stepTitle: 'Maîtriser les fonctionnalités de Google Agenda',
            paragraphText:
              'Google Agenda permet de créer des événements uniques ou récurrents, de partager des calendriers d’équipe, d’envoyer des invitations de réunion, de programmer des rappels (notifications mobiles, e-mails) et de suivre des tâches.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle fonctionnalité de Google Agenda permet de convoquer plusieurs collègues à une réunion et de la synchroniser dans leurs calendriers ?',
              options: [
                'La suppression de l’historique du navigateur',
                'La création d’un événement avec envoi d’invitations par e-mail',
                'La conversion du calendrier en fichier .pptm',
                'Le changement de la couleur de fond d’écran',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ajout d’invités à un événement Google Agenda envoie automatiquement une invitation et synchronise l’horaire et les rappels.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Google Drive',
            stepTheme: 'Cloud',
            stepTitle: 'Connaître la capacité gratuite et la suite intégrée',
            paragraphText:
              'Google Drive est un service de stockage dans le cloud offrant 15 Go gratuits accessibles depuis PC, tablette et smartphone. Il intègre nativement Google Docs (texte), Sheets (tableur), Slides (présentations), Forms et Drawings.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel espace de stockage gratuit de base est offert par un compte Google Drive standard ?',
              options: ['500 Mo', '2 Go', '15 Go', '1 To'],
              correctAnswerIndex: 2,
              explanation:
                'Un compte Google standard inclut gratuitement 15 Go de stockage cloud dans Google Drive (extensible via offre payante).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Permissions',
            stepTheme: 'Sécurité partage',
            stepTitle: 'Attribuer le bon niveau de permission lors d’un partage',
            paragraphText:
              'Google Drive distingue trois niveaux d’accès : Lecture autorisée (voir uniquement), Commentaire autorisé (voir et annoter sans altérer le texte — réservé aux fichiers, non applicable aux dossiers) et Modification autorisée (éditer et partager).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Vous voulez que votre encadreur puisse relire et annoter votre rapport sur Google Docs sans modifier directement le texte. Quelle permission choisissez-vous ?',
              options: [
                'Commentaire autorisé',
                'Modification autorisée',
                'Lecture autorisée',
                'Transfert de propriété définitif',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le niveau « Commentaire autorisé » permet d’ajouter des remarques et retours sans altérer directement le contenu original du fichier.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Co-édition',
            stepTheme: 'Temps réel',
            stepTitle: 'Collaborer simultanément sur un même document',
            paragraphText:
              'Pour travailler à plusieurs en temps réel sur un fichier Office importé, il convient de l’enregistrer au format Google Docs/Sheets/Slides. Chaque collaborateur connecté apparaît avec son nom et un curseur de couleur distincte.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Comment identifie-t-on visuellement l’auteur d’une modification en cours lors d’une co-édition temps réel dans Google Docs ?',
              options: [
                'Le fichier se ferme pour les autres utilisateurs',
                'Chaque modification s’envoie uniquement le lendemain par e-mail',
                'Le document devient automatiquement noir et blanc',
                'Le nom du collaborateur associé à une couleur spécifique apparaît à côté de son curseur en direct',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Google Docs attribue une couleur et affiche le nom à côté du curseur de chaque personne en train d’éditer le fichier.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège pratique',
            stepTheme: 'Chat intégré',
            stepTitle: 'Conditions d’utilisation du chat collaboratif',
            paragraphText:
              'Le chat intégré dans Google Docs/Sheets/Slides évite les allers-retours d’e-mails entre personnes ouvrant le document simultanément. Attention : il faut impérativement être connecté à un compte Google (et disposer d’Internet) pour y participer.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Un collaborateur consulte un lien Google Docs public mais ne parvient pas à utiliser le chat intégré. Quelle en est la cause la plus probable ?',
              options: [
                'Le chat est réservé aux fichiers PDF uniquement',
                'Il n’est pas connecté à un compte Google',
                'Son document dépasse 2 pages',
                'Il utilise un ordinateur portable au lieu d’un smartphone',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seuls les utilisateurs authentifiés sur un compte Google et présents simultanément sur le document peuvent participer au chat intégré.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_init_info_ch3',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Conception de présentations professionnelles avec Microsoft PowerPoint',
    summary:
      'Découvrir l’environnement PowerPoint, maîtriser les formats de fichiers (.pptx, .pptm, .ppt), les effets visuels, les transitions, les animations et la conception de supports interactifs.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Cours Introduction à PowerPoint (Ing. Soro Namongon Adama)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch3_p1',
        order: 1,
        title: 'PowerPoint en bref : finalités, démarrage et extensions de fichiers',
        summary:
          'Identifier l’étymologie, les cas d’usage professionnels et la signification des extensions .pptx, .pptm et .ppt.',
        conceptExplanation:
          "Microsoft PowerPoint est le logiciel de présentation assistée par ordinateur (PréAO) de la suite Microsoft Office. Son nom vient de l'anglais « Power » (puissance) et « Point » (avis, opinion, argument) : il sert à donner de la puissance à vos arguments grâce à des diapositives visuelles.\n\n1. Domaines d'utilisation : présentations commerciales, soutenances de mémoires ou projets, cours et formations, rapports d'audits, fiches produits, propositions commerciales, ainsi que projets personnels (CV animé, portfolio).\n2. Démarrage sous Windows : touche Windows > Toutes les applications > PowerPoint > Nouvelle présentation (ou touche Échap depuis l'écran d'accueil).\n3. Anatomie d'un fichier PowerPoint : un nom suivi d'un point et d'une extension de 3 ou 4 caractères qui indique sa nature exacte :\n- `.pptx` : format standard moderne de présentation PowerPoint (XML compressé, depuis Office 2007).\n- `.pptm` : présentation PowerPoint prenant en charge l'exécution de macros (automatisations VBA).\n- `.ppt` : ancien format binaire des versions historiques (97–2003).",
        keyRule:
          '.pptx = présentation standard moderne ; .pptm = présentation avec macros ; .ppt = ancien format PowerPoint 97-2003.',
        formulas: [
          {
            name: 'Extensions officielles Microsoft PowerPoint',
            formula: '.pptx (Standard) | .pptm (Avec Macros) | .ppt (Ancien format 97-2003)',
          },
        ],
        workedExample: {
          title: 'Choisir la bonne extension pour livrer une soutenance L1',
          statement:
            'Vous préparez votre soutenance de projet ENTD L1 contenant des diapositives, des images et des animations standards, sans script VBA.',
          methodSteps: [
            'Créer une « Nouvelle présentation » dans PowerPoint.',
            'Enregistrer le fichier avec un nom clair au format standard `.pptx` (ex. `Soutenance_ENTD_L1.pptx`), plus léger et universellement reconnu par les versions modernes d’Office.',
            'Éviter `.pptm` en l’absence de macros (certains postes bloquent les fichiers à macros par sécurité) et éviter l’ancien `.ppt` qui dégrade certains effets graphiques récents.',
          ],
          conclusion:
            'Le format `.pptx` assure une compatibilité optimale et conserve intactes les animations modernes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étymologie',
            stepTheme: 'Présentation',
            stepTitle: 'Comprendre le sens et le rôle de PowerPoint',
            paragraphText:
              'Issu de l’anglais « power » (puissance) et « point » (avis, opinion), PowerPoint est un logiciel de la suite Microsoft Office conçu pour créer et projeter des présentations sous forme de diapositives.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle est la signification étymologique des deux mots anglais composant « PowerPoint » ?',
              options: [
                '« Power » (puissance) et « Point » (avis, opinion, argument)',
                '« Power » (électricité) et « Point » (point final)',
                '« Power » (calcul) et « Point » (cellule de tableau)',
                '« Power » (réseau) et « Point » (adresse IP)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'PowerPoint vise littéralement à donner de la puissance visuelle et persuasive à un point de vue ou un exposé.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Extensions',
            stepTheme: 'Formats de fichiers',
            stepTitle: 'Distinguer .pptx, .pptm et .ppt',
            paragraphText:
              'Tout nom de fichier PowerPoint comporte un nom suivi d’un point et d’une extension de 3 ou 4 caractères : `.pptx` (format standard actuel), `.pptm` (format prenant en charge les macros) et `.ppt` (format hérité des anciennes versions).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle extension indique qu’une présentation PowerPoint contient des macros exécutables ?',
              options: ['.pptx', '.pptm', '.docx', '.jpeg'],
              correctAnswerIndex: 1,
              explanation:
                'Le « m » final dans `.pptm` signifie « macro-enabled » (prenant en charge les macros).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Cas d’usage',
            stepTheme: 'Communication pro',
            stepTitle: 'Identifier les situations où PowerPoint est adapté',
            paragraphText:
              'PowerPoint s’adapte à de multiples contextes professionnels et académiques : soutenances de mémoires, cours, rapports d’audit, fiches produits, propositions commerciales, portfolios ou CV animés.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Dans lequel de ces scénarios PowerPoint est-il l’outil le plus approprié de la suite Office ?',
              options: [
                'Calculer automatiquement un bilan comptable de 5 000 lignes',
                'Rédiger un contrat juridique de 60 pages en texte continu',
                'Animer une soutenance de projet ou une proposition commerciale face à un jury',
                'Configurer un routeur réseau TCP/IP',
              ],
              correctAnswerIndex: 2,
              explanation:
                'PowerPoint est conçu pour le support visuel d’exposés, soutenances et présentations face à un public (Excel gère les calculs massifs, Word les documents longs).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Démarrage',
            stepTheme: 'Prise en main',
            stepTitle: 'Lancer rapidement une nouvelle présentation',
            paragraphText:
              'Depuis Windows, on ouvre PowerPoint via le menu Démarrer (« Toutes les applications > PowerPoint »). Sur l’écran d’accueil, cliquer sur « Nouvelle présentation » (ou appuyer sur Échap) ouvre immédiatement une première diapositive vierge.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Une fois l’écran d’accueil de PowerPoint affiché au démarrage, quelle touche du clavier permet d’ouvrir directement une nouvelle présentation vierge ?',
              options: [
                'Suppr (Delete)',
                'Verr Maj (Caps Lock)',
                'Retour arrière',
                'Échap (Esc)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Comme précisé, appuyer sur la touche Échap depuis l’écran d’accueil de PowerPoint ouvre directement une nouvelle présentation.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Structure fichier',
            stepTheme: 'Informatique',
            stepTitle: 'Ne jamais modifier manuellement l’extension d’un fichier',
            paragraphText:
              'L’extension après le point (`.pptx`) indique au système d’exploitation quel programme doit ouvrir le fichier. Renommer arbitrairement `expose.pptx` en `expose.pdf` ne convertit pas le fichier et le rend illisible : il faut utiliser « Enregistrer sous » ou « Exporter ».',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Que se passe-t-il si vous remplacez manuellement l’extension `.pptx` par `.pdf` en renommant le fichier dans l’Explorateur Windows ?',
              options: [
                'Le fichier reste au format PowerPoint interne et devient illisible par un lecteur PDF',
                'Windows convertit automatiquement la présentation en vrai document PDF',
                'Les animations deviennent interactives dans le navigateur',
                'La taille du fichier est divisée par dix',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Changer l’extension ne modifie pas le contenu binaire du fichier : il faut passer par « Fichier > Exporter > PDF » dans PowerPoint.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_init_info_ch3_p2',
        order: 2,
        title: 'Effets visuels, transitions, animations et présentations dynamiques',
        summary:
          'Distinguer transitions et animations, intégrer médias, liens hypertextes, sommaires automatiques, menus dynamiques et modèles.',
        conceptExplanation:
          "La force de PowerPoint réside dans sa capacité à rendre un discours dynamique et interactif grâce aux effets visuels et à la navigation non linéaire :\n\n1. Effets visuels et multimédias : intégration de vidéos, sons, formes graphiques, cartes animées (ex. carte animée du gouvernement de Côte d'Ivoire en atelier), portfolios et modèles réutilisables.\n2. Transitions vs Animations :\n- Une transition s'applique au passage d'une diapositive entière à la suivante (ex. Fondu, Pousser, Morphose).\n- Une animation s'applique à un objet précis à l'intérieur d'une diapositive (texte, icône, image : Apparition, Emphase, Sortie, Trajectoire).\n3. Interactivité et menus dynamiques : grâce aux liens hypertextes (vers une autre diapositive, un fichier externe ou un site web) et aux sommaires automatiques / boutons d'action, l'orateur peut naviguer librement d'une section à l'autre comme dans une application interactive.\n4. Sobriété pédagogique : les animations doivent guider le regard et appuyer le propos, jamais distraire l'auditoire par des effets excessifs.",
        keyRule:
          'Transition = passage entre deux diapositives ; Animation = mouvement d’un élément à l’intérieur d’une diapositive ; Lien hypertexte = navigation interactive.',
        workedExample: {
          title: 'Construire un menu dynamique pour un portfolio PowerPoint',
          statement:
            'Créer un sommaire visuel à 5 boutons (Portfolio 1 à Portfolio 5) permettant de sauter directement vers la diapositive choisie puis de revenir au menu.',
          methodSteps: [
            'Créer la diapositive de menu contenant 5 formes rectangulaires nommées Portfolio 1 à Portfolio 5.',
            'Sélectionner la forme « Portfolio 1 » > onglet « Insertion > Lien > Emplacement dans ce document » > choisir la diapositive correspondante.',
            'Répéter l’opération pour chaque bouton et ajouter sur chaque diapositive de détail une icône « Accueil » reliée à la diapositive du menu.',
            'Appliquer une transition sobre (ex. Fondu ou Morphose) et tester en mode Diaporama (touche F5).',
          ],
          conclusion:
            'La présentation fonctionne comme un tableau de bord interactif permettant d’adapter l’ordre de l’exposé aux questions du jury.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Transition vs Animation',
            stepTheme: 'Effets visuels',
            stepTitle: 'Différencier précisément une transition d’une animation',
            paragraphText:
              'Dans PowerPoint, une transition anime le changement entre deux diapositives complètes, tandis qu’une animation anime un objet particulier (titre, image, graphique) présent sur la diapositive.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle différence fondamentale sépare une « transition » d’une « animation » dans PowerPoint ?',
              options: [
                'La transition concerne uniquement le texte et l’animation concerne le son',
                'La transition s’applique au passage entre deux diapositives ; l’animation s’applique à un objet sur une diapositive',
                'Les transitions ne fonctionnent qu’au format .ppt et les animations qu’au format .pptx',
                'Une transition dure toujours 10 secondes alors qu’une animation est instantanée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Transition = effet inter-diapositives ; Animation = effet intra-diapositive sur un élément précis (entrée, emphase, sortie ou trajectoire).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Interactivité',
            stepTheme: 'Menus dynamiques',
            stepTitle: 'Créer un menu dynamique avec des liens hypertextes',
            paragraphText:
              'Un lien hypertexte dans PowerPoint peut pointer vers une adresse web, un document externe ou une autre diapositive de la même présentation. C’est la base des menus dynamiques et des sommaires cliquables.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quel mécanisme PowerPoint permet de transformer des formes ou des titres en menu dynamique cliquable vers d’autres diapositives ?',
              options: [
                'Le vérificateur d’orthographe',
                'L’orientation Portrait',
                'Les liens hypertextes pointant vers un emplacement dans le document',
                'Le retrait de première ligne',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les liens hypertextes internes (« Emplacement dans ce document ») permettent une navigation non linéaire entre les diapositives pendant le diaporama.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Diaporama',
            stepTheme: 'Projection',
            stepTitle: 'Lancer le mode Diaporama pour tester ses effets',
            paragraphText:
              'Les transitions, animations, vidéos et liens hypertextes ne s’exécutent pleinement qu’en mode Diaporama. La touche F5 lance la présentation depuis la diapositive 1 ; Maj + F5 la lance depuis la diapositive active.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle touche clavier lance immédiatement le mode Diaporama depuis la toute première diapositive dans PowerPoint ?',
              options: ['F5', 'F1', 'F12', 'Ctrl + X'],
              correctAnswerIndex: 0,
              explanation:
                'F5 démarre le diaporama depuis le début (et Maj + F5 depuis la diapositive en cours d’édition).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Modèles & Cohérence',
            stepTheme: 'Design',
            stepTitle: 'Exploiter les modèles et l’affichage graphique cohérent',
            paragraphText:
              'L’usage d’un modèle graphique cohérent (palette de couleurs limitée, typographie lisible, alignement net des blocs de portfolio ou de CV animé) renforce le professionnalisme et fait gagner un temps précieux.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel est le principal bénéfice d’utiliser un modèle (ou masque de diapositives) cohérent dans une présentation ?',
              options: [
                'Augmenter volontairement le nombre de polices différentes sur chaque slide',
                'Empêcher l’insertion d’images ou de vidéos',
                'Remplacer la prise de parole de l’orateur par de longs paragraphes',
                'Garantir une identité visuelle uniforme et harmonieuse sur l’ensemble des diapositives',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un modèle assure la constance des couleurs, polices, en-têtes/pieds de diapositives et emplacements visuels du début à la fin.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège de soutenance',
            stepTheme: 'Sobriété',
            stepTitle: 'Éviter la surcharge de texte et d’animations',
            paragraphText:
              'Une diapositive n’est pas une page Word : elle doit synthétiser des points clés visuels, soutenus par des animations sobres et utiles à la compréhension (faire apparaître les arguments au rythme de la voix), plutôt que des effets bruyants qui détournent l’attention.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle règle d’or garantit l’efficacité des animations lors d’une soutenance professionnelle ?',
              options: [
                'Appliquer un effet différent et bruyant à chaque mot pour montrer qu’on maîtrise le logiciel',
                'Utiliser des animations sobres et cohérentes uniquement pour rythmer la découverte des idées clés',
                'Copier-coller l’intégralité du rapport Word sur trois diapositives en taille 8',
                'Désactiver l’écran de projection pendant tout l’exposé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les animations doivent servir la hiérarchie de l’information et la fluidité du discours, jamais fatiguer ou distraire le jury.',
            },
          },
        ],
      }),
    ],
  },
];
