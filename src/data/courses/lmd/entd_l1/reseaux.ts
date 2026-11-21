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

// ============================================================================
// RÉSEAUX & SERVICES — ENTD LICENCE 1 (MASTERCLASS)
// 5 chapitres • 15 mini-leçons • 90 étapes • 9 schémas graphiques
// ============================================================================

export const RESEAUX_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Généralités sur les réseaux, topologies et supports
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch1',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Réseaux & Services',
    title: 'Chapitre 1 — Généralités sur les réseaux, topologies et supports de transmission',
    summary:
      'Définition, classifications (PAN/LAN/MAN/WAN, Client-Serveur/P2P), composants physiques et logiques, topologies physiques (bus, anneau, étoile, maillée), supports (cuivre, fibre, radio) et codage binaire (ASCII, EBCDIC, Unicode).',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch1_p1',
        order: 1,
        title: 'Définition, classifications par étendue (PAN/LAN/MAN/WAN) et par relation fonctionnelle',
        summary:
          'Définir un réseau informatique, distinguer PAN, LAN, MAN, WAN (avec RITER et WACREN) et opposer Client/Serveur à Peer-to-Peer (P2P).',
        conceptExplanation:
          'Un **réseau informatique** est un ensemble d’équipements interconnectés pour échanger des données numériques selon des règles communes appelées **protocoles**. Il répond à quatre besoins essentiels : le partage de **ressources physiques** (imprimantes, stockage), le partage de **ressources logicielles** (applications hébergées), le partage de **données** en temps réel et la **communication** distante (messagerie, visioconférence, VoIP).\n\n' +
          'Selon l’**étendue géographique**, on distingue : **PAN** ($\\le 10\\text{ m}$, souvent sans fil WPAN : Bluetooth, IrDA), **LAN** ($10\\text{ m}$ à $5\\text{ km}$ : salle, bâtiment, campus ou entreprise), **MAN** ($5$ à $50\\text{ km}$ : interconnexion de LAN à l’échelle d’une métropole, ex. agences bancaires d’Abidjan), et **WAN** ($> 50\\text{ km}$, pays ou continents, opérés par des opérateurs ou consortiums : Internet, **RITER** en Côte d’Ivoire, **WACREN** en Afrique de l’Ouest et du Centre, RENATER en France).\n\n' +
          'Selon la **relation fonctionnelle**, on oppose l’architecture **Client/Serveur** (machines dédiées offrant services et réponses aux requêtes clientes) au modèle **Peer-to-Peer / P2P** (Pair-à-Pair, où chaque poste équivalent agit simultanément comme client et serveur).',
        formulas: [
          {
            name: 'Hiérarchie des portées géographiques',
            formula: '\\text{PAN } (\\le 10\\text{ m}) < \\text{LAN } (10\\text{ m} - 5\\text{ km}) < \\text{MAN } (5 - 50\\text{ km}) < \\text{WAN } (> 50\\text{ km})',
            note: 'RITER (universités ivoiriennes), WACREN (Afrique de l’Ouest/Centre) et Internet sont des WAN.',
          },
        ],
        keyRule:
          'Ne jamais confondre l’étendue (PAN/LAN/MAN/WAN), la relation fonctionnelle (Client-Serveur vs P2P) et la topologie (Bus/Anneau/Étoile/Maillée) : ce sont trois axes de classification complémentaires.',
        workedExample: {
          title: 'Cartographie réseau d’un groupe bancaire UEMOA et du réseau universitaire ivoirien',
          statement:
            'Classifier quatre liaisons réelles : (1) souris et clavier Bluetooth reliés à un ordinateur portable ; (2) câblage interne de l’agence du Plateau à Abidjan ; (3) boucle fibre reliant les 12 agences d’Abidjan ; (4) interconnexion nationale RITER reliant les campus d’Abidjan, Bouaké, Korhogo et Daloa.',
          methodSteps: [
            '(1) Portée $< 10\\text{ m}$ autour d’un utilisateur unique, sans fil Bluetooth → **WPAN** (PAN sans fil).',
            '(2) Réseau privé d’un bâtiment d’entreprise ($< 5\\text{ km}$) → **LAN** (Réseau Local).',
            '(3) Interconnexion de plusieurs LAN dans la même métropole ($5$ à $50\\text{ km}$) → **MAN** (Réseau Métropolitain).',
            '(4) Interconnexion de LAN universitaires sur l’ensemble du territoire national ($> 50\\text{ km}$) → **WAN** (Réseau Étendu).',
          ],
          conclusion:
            'Respectivement : WPAN, LAN, MAN et WAN — chaque échelle s’emboîte hiérarchiquement dans la suivante.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fondamentaux',
            stepTheme: 'blue',
            stepTitle: 'Définition d’un réseau informatique et objectifs de partage',
            paragraphText:
              'Un réseau existe dès qu’une relation d’échange structurée s’établit entre au moins deux entités ; en informatique, cet échange porte sur des données numériques régies par des règles précises.\n' +
              '• **Définition** : ensemble d’équipements reliés entre eux pour échanger des données numériques selon des règles préétablies appelées **protocoles**.\n' +
              '• **Partage de ressources physiques et logicielles** : mutualiser une imprimante réseau, un serveur de stockage ou une application métier (ERP/SaaS) sans l’installer sur chaque poste.\n' +
              '• **Partage de données et communication** : accès concurrent à une base de données en temps réel, messagerie électronique, téléphonie IP et visioconférence.\n' +
              'Exemple : dans une agence de transfert d’argent à Abidjan, les 6 guichets partagent la même base clients et une unique imprimante multifonction grâce au réseau local.',
            keyRule:
              'Sans **protocoles** (règles communes de dialogue), des équipements physiquement câblés ne peuvent pas se comprendre ni former un réseau fonctionnel.',
            konanTip:
              'Retiens les 4 piliers d’utilité d’un réseau : partage matériel, partage logiciel, partage de données en temps réel, et communication distante.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quel élément indispensable régit la manière dont les équipements d’un réseau informatique échangent leurs données numériques ?',
              options: [
                'Uniquement la marque du constructeur des ordinateurs.',
                'Un ensemble de règles préétablies appelées protocoles.',
                'La présence obligatoire d’une imprimante sur chaque poste.',
                'Une distance minimale de 50 kilomètres entre les postes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un réseau informatique relie des équipements pour échanger des données numériques selon des règles préétablies et partagées appelées **protocoles**.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Étendue géographique',
            stepTheme: 'blue',
            stepTitle: 'Classification PAN, LAN, MAN et WAN',
            paragraphText:
              'La taille géographique d’un réseau détermine les technologies de transmission, les coûts d’infrastructure et les acteurs responsables de son exploitation.\n' +
              '• **PAN (*Personal Area Network*, $\\le 10\\text{ m}$)** : espace personnel d’un individu (smartphone, oreillette, montre connectée) ; en sans-fil (Bluetooth, IrDA), on parle de **WPAN**.\n' +
              '• **LAN (*Local Area Network*, $10\\text{ m}$ à $5\\text{ km}$)** : réseau privé d’une salle, d’un immeuble, d’un campus ou d’une PME (historiquement $100\\text{ m}$, étendu jusqu’à $5\\text{ km}$ grâce à la fibre).\n' +
              '• **MAN (*Metropolitan Area Network*, $5$ à $50\\text{ km}$)** : interconnecte plusieurs LAN à l’échelle d’une ville (ex. agences urbaines d’une banque).\n' +
              '• **WAN (*Wide Area Network*, $> 50\\text{ km}$)** : échelle nationale ou mondiale, généralement opérée par un opérateur contre redevance — ex. **Internet**, **RITER** (universités ivoiriennes), **WACREN** (Afrique de l’Ouest/Centre), RENATER (France).\n' +
              'Exemple : un étudiant connecte ses écouteurs au PC (WPAN), le PC au Wi-Fi du campus (LAN), et accède à une revue scientifique via le RITER puis Internet (WAN).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau comparatif des 4 catégories de réseaux par étendue',
              caption: 'Portée caractéristique, technologies dominantes et exemples concrets en Côte d’Ivoire et dans le monde.',
              tableData: {
                headers: ['Catégorie', 'Portée typique', 'Technologies usuelles', 'Exemples concrets'],
                rows: [
                  ['PAN / WPAN', '≤ 10 m', 'Bluetooth, IrDA, USB, NFC', 'Smartphone ↔ montre / oreillette / souris sans fil'],
                  ['LAN / WLAN', '10 m à 5 km', 'Ethernet (802.3), Wi-Fi (802.11)', 'Salle informatique, PME, campus universitaire'],
                  ['MAN', '5 km à 50 km', 'Fibre optique métropolitaine, Faisceau hertzien', 'Interconnexion des agences bancaires d’Abidjan'],
                  ['WAN', '> 50 km (Pays/Monde)', 'MPLS, Fibre sous-marine, Satellite, 4G/5G', 'Internet, RITER (CI), WACREN (Afrique Ouest/Centre)'],
                ],
              },
            },
            keyRule:
              'Un **MAN** interconnecte des LAN au sein d’une même ville ($5$–$50\\text{ km}$), tandis qu’un **WAN** interconnecte des LAN et des MAN à l’échelle d’un pays ou des continents ($> 50\\text{ km}$).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Dans quelle catégorie classe-t-on le réseau **RITER** (interconnectant les universités de Côte d’Ivoire) et le **WACREN** (universités d’Afrique de l’Ouest et du Centre) ?',
              options: [
                'PAN',
                'LAN',
                'MAN',
                'WAN',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le RITER (échelle nationale ivoirienne) et le WACREN (échelle régionale africaine) couvrent des distances bien supérieures à $50\\text{ km}$ pour interconnecter des campus distants : ce sont des **WAN** (*Wide Area Networks*).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Relation fonctionnelle',
            stepTheme: 'blue',
            stepTitle: 'Architecture Client/Serveur vs Peer-to-Peer (P2P)',
            paragraphText:
              'Indépendamment de sa taille, un réseau se caractérise par le rôle logique que jouent les machines les unes vis-à-vis des autres.\n' +
              '• **Client/Serveur** : architecture asymétrique composée de **serveurs** dédiés (qui hébergent les ressources, sécurisent l’accès et répondent aux requêtes) et de **clients** (qui formulent des requêtes et consomment les services).\n' +
              '• **Avantages Client/Serveur** : administration centralisée, sauvegardes fiables, sécurité fine des comptes utilisateurs ; inconvénient : coût du serveur et point de panne unique sans redondance.\n' +
              '• **Peer-to-Peer (P2P / Pair-à-Pair / Égal-à-Égal)** : aucun serveur central dédié ; tous les postes sont équivalents et agissent simultanément comme client et serveur pour des services distincts.\n' +
              'Exemple : consulter un portail web universitaire relève du **Client/Serveur**, tandis que partager directement des fichiers entre deux portables reliés en Wi-Fi direct ou via BitTorrent relève du **P2P**.',
            keyRule:
              'En Client/Serveur, les rôles sont spécialisés et centralisés ; en Peer-to-Peer, chaque poste est à la fois client et serveur.',
            konanTip:
              'Attention : en P2P, la facilité d’installation s’accompagne d’une sécurité et d’une sauvegarde beaucoup plus difficiles à administrer dès que le nombre de postes dépasse une dizaine.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Quelle caractéristique définit exactement un réseau **Peer-to-Peer (P2P)** ?',
              options: [
                'Un serveur central puissant contrôle obligatoirement toutes les requêtes des utilisateurs.',
                'Les postes sont équivalents et jouent chacun à la fois le rôle de client et celui de serveur.',
                'Il fonctionne exclusivement sur des distances supérieures à 50 km.',
                'Il n’utilise aucun protocole réseau.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans un réseau Pair-à-Pair (P2P / Égal-à-Égal), il n’y a pas de serveur hiérarchique dédié : chaque machine est à la fois cliente des autres et serveuse de ses propres ressources.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Composants',
            stepTheme: 'violet',
            stepTitle: 'Les trois piliers d’un réseau : périphériques, supports et services',
            paragraphText:
              'Tout réseau opérationnel repose sur la synergie de trois familles de composants, à la fois matériels et logiciels.\n' +
              '• **1. Périphériques (matériel)** : subdivisés en **périphériques finaux (terminaux)** visibles par l’utilisateur (PC, smartphone, imprimante réseau, téléphone IP — source et destination des données) et **périphériques intermédiaires** (switch, routeur, point d’accès, pare-feu — acheminent et sécurisent le trafic en coulisses).\n' +
              '• **2. Supports de transmission (matériel)** : canal physique reliant les équipements (cuivre/impulsions électriques, fibre optique/lumière, ondes radio sans fil).\n' +
              '• **3. Services et processus (logiciel)** : programmes réseau exécutés sur les hôtes ; les **services** tournent en arrière-plan sur les serveurs pour répondre aux sollicitations, tandis que les **processus clients** (navigateur, messagerie) émettent les requêtes.\n' +
              'Exemple : quand tu ouvres un site web sur ton smartphone (terminal), la requête traverse le Wi-Fi (support) puis le routeur (intermédiaire) jusqu’au service HTTP du serveur distant.',
            keyRule:
              'Périphériques + Supports forment la couche physique/matérielle du réseau ; Services + Processus forment sa couche logicielle communicante.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Parmi les équipements suivants, lequel est un **périphérique final (terminal)** et NON un périphérique intermédiaire ?',
              options: [
                'Un commutateur (switch)',
                'Un routeur',
                'Un téléphone IP',
                'Un pare-feu (firewall)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le téléphone IP est la source et la destination des communications vocales de l’utilisateur : c’est un périphérique final (terminal). Le switch, le routeur et le pare-feu sont des périphériques intermédiaires.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Nuance clé',
            stepTheme: 'orange',
            stepTitle: 'Topologie physique vs topologie logique : ne jamais les confondre !',
            paragraphText:
              'Le mot « topologie » recouvre deux réalités très différentes qu’il est indispensable de dissocier dès le premier chapitre.\n' +
              '• **Topologie physique** : décrit la disposition matérielle réelle des câbles et équipements, telle qu’on la verrait sur un plan ou une photographie aérienne (bus, anneau, étoile, maillée).\n' +
              '• **Topologie logique** : décrit la manière dont les signaux circulent effectivement entre les nœuds et la méthode d’accès au support (Ethernet bus logique / CSMA/CD, anneau logique / Token Ring).\n' +
              '• **Pourquoi la distinction est capitale** : un réseau câblé physiquement en **étoile** autour d’un concentrateur (hub) fonctionne **logiquement en bus** (tout signal reçu est diffusé à tous les ports) !\n' +
              'Exemple : un réseau Token Ring câblé autour d’un boîtier central MAU a une apparence physique en étoile, mais le jeton circule en anneau logique fermé.',
            keyRule:
              'Topologie physique = photographie du câblage ; Topologie logique = chemin réel de circulation des signaux et règles d’accès au média.',
            konanTip:
              'Retiens ce cas d’école : Ethernet sur Hub = **étoile physique** + **bus logique** ; Ethernet sur Switch = **étoile physique** + **commutation point-à-point** (Ethernet commuté).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Quelle définition correspond exactement à la **topologie logique** d’un réseau ?',
              options: [
                'La photographie aérienne de la disposition matérielle des câbles dans les murs.',
                'La manière dont les informations circulent entre les nœuds et la méthode d’accès au support.',
                'La distance en kilomètres séparant deux bâtiments.',
                'Le nombre total d’imprimantes partagées sur le LAN.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La topologie physique décrit l’agencement matériel des câbles et équipements ; la topologie logique décrit le mode de circulation des informations et la méthode d’accès au média.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'slate',
            stepTitle: 'Architecture complète d’une entreprise multisites en Côte d’Ivoire',
            paragraphText:
              'Observons comment s’articulent les classes de réseaux dans une société de logistique implantée à Abidjan (siège au Plateau + entrepôt à Vridi) et à San-Pédro.\n' +
              '• **Sur chaque site** : un **LAN** en étoile relie postes de travail, scanners de colis et imprimantes ; les magasiniers utilisent des douchettes Bluetooth en **WPAN**.\n' +
              '• **Entre le Plateau et Vridi ($\\approx 12\\text{ km}$)** : une liaison fibre optique urbaine relie les deux LAN abidjanais en un **MAN**.\n' +
              '• **Entre Abidjan et San-Pédro ($\\approx 350\\text{ km}$)** : un lien opérateur (MPLS/VPN sur fibre nationale) forme un **WAN** privé d’entreprise.\n' +
              '• **Mode fonctionnel** : les agences consultent un serveur ERP central hébergé au siège (**Client/Serveur**).\n' +
              'Exemple : un même système d’information combine ainsi simultanément WPAN, LAN, MAN, WAN et architecture Client/Serveur.',
            keyRule:
              'Un réseau d’entreprise réel est rarement monolithique : il empile des WPAN/LAN locaux reliés par des MAN urbains et des WAN nationaux/internationaux.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Une entreprise relie son siège du Plateau à son entrepôt de Yopougon (distance de 15 km dans la même métropole) par fibre optique privée. Quel type de réseau obtient-elle ?',
              options: [
                'Un WPAN',
                'Un MAN',
                'Un réseau P2P obligatoire',
                'Un WAN intercontinental',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Interconnecter plusieurs LAN au sein d’une même métropole sur une distance comprise entre $5\\text{ km}$ et $50\\text{ km}$ (ici $15\\text{ km}$) définit précisément un **MAN** (*Metropolitan Area Network*).',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch1_p2',
        order: 2,
        title: 'Topologies physiques (bus, anneau, étoile, maillée) et dimensionnement',
        summary:
          'Comparer les quatre grandes topologies physiques (fonctionnement, tolérance aux pannes, coûts) et calculer le nombre de liaisons d’une topologie maillée complète.',
        conceptExplanation:
          'La **topologie physique** détermine la manière dont les nœuds (stations, serveurs, imprimantes) sont physiquement câblés entre eux et conditionne directement le coût, la facilité de maintenance et la **tolérance aux pannes** du réseau.\n\n' +
          '• **Topologie en bus** : un câble unique partagé (avec bouchons terminateurs) auquel tous les nœuds sont raccordés ; chaque paquet est diffusé à tous les nœuds. Économique en câble, mais une coupure du bus paralyse tout le réseau.\n' +
          '• **Topologie en anneau** : liaisons point-à-point formant une boucle fermée où l’information circule dans un seul sens de proche en proche. Chaque station vérifie si le paquet lui est destiné, sinon le retransmet.\n' +
          '• **Topologie en étoile** : chaque nœud est relié par un câble dédié à un équipement central (**hub** ou **switch**). Très fiable sur panne d’un poste/câble individuel (seul ce poste tombe), mais sensible à la panne du nœud central.\n' +
          '• **Topologie maillée** : chaque nœud est relié directement à tous les autres (maillage complet : $\\frac{n(n-1)}{2}$ câbles) ou à plusieurs voisins (semi-maillée). Tolérance aux pannes maximale (multiples chemins), utilisée dans les cœurs WAN et dorsales Internet.',
        formulas: [
          {
            name: 'Nombre de câbles en topologie maillée complète',
            formula: 'L = \\frac{n(n - 1)}{2} \\qquad (\\text{et } n - 1 \\text{ ports par nœud})',
            note: 'Pour n = 6 nœuds, il faut 6 × 5 / 2 = 15 liaisons dédiées ; pour n = 20 nœuds, 190 liaisons !',
          },
          {
            name: 'Nombre de câbles en topologie étoile / anneau',
            formula: 'L_{\\text{étoile}} = n \\; (\\text{hors cœur}), \\qquad L_{\\text{anneau}} = n',
            note: 'Croissance linéaire O(n) contre croissance quadratique O(n²) pour le maillage complet.',
          },
        ],
        keyRule:
          'En LAN moderne, la topologie physique en **étoile** (autour de commutateurs) domine largement grâce à sa simplicité de câblage et d’isolation des pannes ; la topologie **maillée / semi-maillée** règne sur les cœurs de réseaux WAN critiques.',
        workedExample: {
          title: 'Dimensionnement d’un cœur de réseau maillé vs étoile pour 8 sites',
          statement:
            'Un opérateur souhaite interconnecter `n = 8` centres de données régionaux. Comparer le nombre de liaisons fibres requises en topologie maillée complète et en topologie étoile, puis évaluer la résilience en cas de coupure d’un lien.',
          methodSteps: [
            'En topologie **maillée complète** : $L = \\frac{8 \\times (8 - 1)}{2} = \\frac{56}{2} = 28$ liaisons (et $7$ interfaces par routeur).',
            'En topologie **étoile** (1 site cœur relié aux 7 autres, ou 1 switch central relié aux 8) : seulement $7$ ou $8$ liaisons.',
            'Résilience : si un lien coupe en maillage complet, les données empruntent instantanément un autre chemin ; si le cœur de l’étoile tombe, les 8 sites sont totalement isolés.',
          ],
          conclusion:
            'Le maillage complet coûte 28 liaisons (quadratique) mais assure une redondance exceptionnelle ; en pratique, les WAN adoptent un **maillage partiel (semi-maillé)** combinant résilience et maîtrise des coûts.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Vue d’ensemble',
            stepTheme: 'blue',
            stepTitle: 'Panorama visuel des quatre topologies physiques fondamentales',
            paragraphText:
              'Choisir une topologie physique revient à arbitrer entre coût de câblage, facilité d’ajout d’un poste et comportement en cas de rupture de câble.\n' +
              '• **Bus** : dorsale unique partagée ; ajout simple mais toute rupture du câble principal coupe l’ensemble du réseau.\n' +
              '• **Anneau** : boucle fermée unidirectionnelle ; régénération du signal à chaque nœud, mais l’arrêt d’une station rompt la boucle (sauf double anneau redondant).\n' +
              '• **Étoile** : câbles indépendants convergents vers un **hub** ou **switch** ; isoler un câble défectueux est immédiat, c’est le standard des LAN actuels.\n' +
              '• **Maillée** : chemins multiples entre les nœuds ; excellente tolérance aux pannes mais coût en câbles explosif en $n(n-1)/2$.\n' +
              'Exemple : une salle informatique universitaire de 30 PC utilise une **étoile** sur switch 48 ports, tandis qu’Internet forme un gigantesque graphe **semi-maillé**.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparaison visuelle des 4 topologies physiques réseau',
              caption: 'Bus (câble unique), Anneau (boucle fermée), Étoile (équipement central) et Maillée (n(n-1)/2 liens).',
              svgContent:
                '<svg viewBox="0 0 460 215" width="100%" style="max-width:460px" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="8" y="8" width="214" height="94" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>' +
                '<text x="115" y="25" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#1E40AF">1. Topologie en Bus</text>' +
                '<line x1="28" y1="62" x2="202" y2="62" stroke="#2563EB" stroke-width="3.5"/>' +
                '<rect x="22" y="56" width="8" height="12" fill="#DC2626"/>' +
                '<rect x="200" y="56" width="8" height="12" fill="#DC2626"/>' +
                '<line x1="58" y1="62" x2="58" y2="42" stroke="#64748B" stroke-width="2"/><circle cx="58" cy="40" r="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<line x1="115" y1="62" x2="115" y2="82" stroke="#64748B" stroke-width="2"/><circle cx="115" cy="84" r="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<line x1="172" y1="62" x2="172" y2="42" stroke="#64748B" stroke-width="2"/><circle cx="172" cy="40" r="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<rect x="238" y="8" width="214" height="94" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>' +
                '<text x="345" y="25" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#6D28D9">2. Topologie en Anneau</text>' +
                '<circle cx="345" cy="64" r="26" fill="none" stroke="#7C3AED" stroke-width="2.5"/>' +
                '<circle cx="345" cy="38" r="7" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2"/>' +
                '<circle cx="371" cy="64" r="7" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2"/>' +
                '<circle cx="345" cy="90" r="7" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2"/>' +
                '<circle cx="319" cy="64" r="7" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2"/>' +
                '<rect x="8" y="112" width="214" height="95" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>' +
                '<text x="115" y="129" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#15803D">3. Topologie en Étoile</text>' +
                '<line x1="115" y1="168" x2="72" y2="146" stroke="#16A34A" stroke-width="2"/>' +
                '<line x1="115" y1="168" x2="158" y2="146" stroke="#16A34A" stroke-width="2"/>' +
                '<line x1="115" y1="168" x2="72" y2="192" stroke="#16A34A" stroke-width="2"/>' +
                '<line x1="115" y1="168" x2="158" y2="192" stroke="#16A34A" stroke-width="2"/>' +
                '<rect x="97" y="157" width="36" height="22" rx="4" fill="#16A34A"/>' +
                '<text x="115" y="171" text-anchor="middle" font-family="sans-serif" font-size="8.5" font-weight="700" fill="#FFFFFF">SW</text>' +
                '<circle cx="72" cy="146" r="7" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>' +
                '<circle cx="158" cy="146" r="7" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>' +
                '<circle cx="72" cy="192" r="7" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>' +
                '<circle cx="158" cy="192" r="7" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>' +
                '<rect x="238" y="112" width="214" height="95" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>' +
                '<text x="345" y="129" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#C2410C">4. Topologie Maillée (n=4 → 6 liens)</text>' +
                '<line x1="305" y1="145" x2="385" y2="145" stroke="#EA580C" stroke-width="1.8"/>' +
                '<line x1="305" y1="191" x2="385" y2="191" stroke="#EA580C" stroke-width="1.8"/>' +
                '<line x1="305" y1="145" x2="305" y2="191" stroke="#EA580C" stroke-width="1.8"/>' +
                '<line x1="385" y1="145" x2="385" y2="191" stroke="#EA580C" stroke-width="1.8"/>' +
                '<line x1="305" y1="145" x2="385" y2="191" stroke="#EA580C" stroke-width="1.8"/>' +
                '<line x1="385" y1="145" x2="305" y2="191" stroke="#EA580C" stroke-width="1.8"/>' +
                '<circle cx="305" cy="145" r="7" fill="#FFF7ED" stroke="#EA580C" stroke-width="2"/>' +
                '<circle cx="385" cy="145" r="7" fill="#FFF7ED" stroke="#EA580C" stroke-width="2"/>' +
                '<circle cx="305" cy="191" r="7" fill="#FFF7ED" stroke="#EA580C" stroke-width="2"/>' +
                '<circle cx="385" cy="191" r="7" fill="#FFF7ED" stroke="#EA580C" stroke-width="2"/>' +
                '</svg>',
            },
            keyRule:
              'La topologie physique fixe la géométrie du câblage : en étoile, toute communication passe obligatoirement par l’équipement central.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Dans quelle topologie physique les nœuds sont-ils tous raccordés à un câble unique partagé, où chaque paquet envoyé est reçu par tous les nœuds ?',
              options: [
                'Topologie en étoile',
                'Topologie en bus',
                'Topologie maillée',
                'Topologie en anneau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La topologie en bus repose sur un câble unique (dorsale) auquel se raccordent toutes les stations : chaque paquet est diffusé sur le bus et seul le destinataire reconnaissant son adresse le conserve.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Bus & Anneau',
            stepTheme: 'violet',
            stepTitle: 'Fonctionnement et vulnérabilités des topologies en bus et en anneau',
            paragraphText:
              'Historiquement très répandues dans les premiers réseaux locaux (Ethernet coaxial 10Base5/10Base2 et Token Ring d’IBM), les topologies en bus et en anneau présentent des fragilités majeures qui expliquent leur recul.\n' +
              '• **Topologie en bus** : nécessite des bouchons terminateurs aux deux extrémités pour absorber le signal et éviter les réflexions ; une seule coupure ou un terminateur débranché met l’intégralité du réseau hors service.\n' +
              '• **Topologie en anneau** : constituée de liaisons point-à-point formant une boucle fermée unidirectionnelle ; chaque poste inspecte le paquet et, s’il n’est pas le destinataire, le régénère et le transmet au suivant.\n' +
              '• **Point faible de l’anneau simple** : la panne d’une seule station ou d’un seul câble rompt la boucle (d’où l’usage d’un double anneau contre-rotatif dans les MAN FDDI/SONET).\n' +
              'Exemple : localiser un connecteur défectueux sur un bus de 40 postes dans un immeuble obligeait à tester les segments un à un, immobilisant tout le service.',
            keyRule:
              'En bus comme en anneau simple, une panne physique unique sur le support principal peut interrompre les communications de l’ensemble du réseau.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Dans une topologie physique en **anneau**, comment réagit un nœud lorsqu’il reçoit un paquet qui ne lui est PAS destiné ?',
              options: [
                'Il le détruit immédiatement pour libérer la bande passante.',
                'Il le renvoie en sens inverse vers l’émetteur.',
                'Il le transmet au nœud suivant dans le sens unique de circulation de l’anneau.',
                'Il le diffuse simultanément vers tous les autres nœuds via un switch.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans un anneau, l’information circule dans un seul sens de proche en proche : chaque poste vérifie l’adresse destination ; si elle ne correspond pas à la sienne, il relaie le paquet au nœud suivant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Étoile',
            stepTheme: 'violet',
            stepTitle: 'Topologie en étoile : atouts, Hub vs Switch et point de défaillance unique',
            paragraphText:
              'La topologie en étoile est devenue le standard quasi universel des réseaux locaux modernes en entreprise, dans les universités et chez les particuliers.\n' +
              '• **Principe** : chaque terminal dispose de sa propre liaison dédiée (paire torsadée RJ45 ou fibre) jusqu’à un équipement central (**hub** ou **switch**).\n' +
              '• **Isolation des pannes** : si un câble de poste est sectionné ou qu’une carte réseau grille, seul cet utilisateur perd l’accès — les 47 autres postes continuent de travailler normalement !\n' +
              '• **Point faible (SPOF)** : l’équipement central constitue un *Single Point of Failure* ; s’il tombe en panne (alimentation ou carte mère), toute l’étoile s’arrête (d’où la redondance d’alimentations ou de switches en cœur de réseau).\n' +
              'Exemple : dans une salle de marché ou une banque, on déploie une **étoile étendue** (plusieurs switches d’étage reliés en redondance à deux switches de cœur).',
            keyRule:
              'L’étoile protège contre la panne d’un câble ou d’un terminal individuel, mais concentre le risque sur l’équipement central (d’où l’intérêt de sa redondance).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Dans un LAN de 24 postes câblé en **étoile** autour d’un switch, que se passe-t-il si le câble RJ45 du poste n° 7 est sectionné ?',
              options: [
                'Les 24 postes perdent immédiatement leur connexion au réseau.',
                'Les postes 7 à 24 perdent leur connexion.',
                'Seul le poste n° 7 est déconnecté ; les 23 autres postes continuent de communiquer normalement.',
                'Le switch bascule automatiquement en topologie maillée.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Chaque station possédant son propre lien dédié vers le switch, la rupture du câble du poste n° 7 n’affecte que ce poste — c’est l’un des grands avantages de la topologie en étoile.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Topologie maillée',
            stepTheme: 'green',
            stepTitle: 'Calcul de liaisons en topologie maillée complète vs semi-maillée',
            paragraphText:
              'Lorsque la continuité de service est vitale (opérateurs télécoms, banques centrales, data centers), la topologie maillée élimine le risque du chemin unique.\n' +
              '• **Maillage complet (Full Mesh)** : chaque nœud parmi $n$ est connecté directement aux $n - 1$ autres nœuds. Comme chaque câble relie 2 nœuds, le nombre total de câbles vaut exactement $L = \\frac{n(n - 1)}{2}$.\n' +
              '• **Explosion quadratique** : pour `n = 5`, $L = 10$ ; pour `n = 10`, $L = 45$ ; pour `n = 50`, $L = 1\\,225$ câbles et 49 ports par machine ! C’est vite impraticable à grande échelle.\n' +
              '• **Topologie semi-maillée (Partial Mesh)** : compromis industriel où les nœuds critiques disposent de 2 ou 3 chemins redondants, sans relier tous les nœuds deux à deux.\n' +
              'Exemple : les câbles sous-marins reliant l’Afrique de l’Ouest (ACE, WACS, 2Africa, SAT-3) forment une dorsale semi-maillée qui maintient Internet actif en Côte d’Ivoire même si un câble est endommagé au large.',
            formula: {
              name: 'Formule du maillage complet',
              formula: 'L = \\frac{n(n - 1)}{2}, \\qquad \\text{degré de chaque nœud} = n - 1',
              note: 'Vérification rapide : pour n = 2 → 1 câble ; n = 3 → 3 câbles (triangle) ; n = 4 → 6 câbles.',
            },
            keyRule:
              'Dès que tu vois « topologie maillée complète à $n$ nœuds », applique immédiatement $\\frac{n(n-1)}{2}$ pour trouver le nombre de câbles.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Combien de câbles sont nécessaires pour relier **10 routeurs** selon une topologie **maillée complète** ?',
              options: [
                '10 câbles',
                '45 câbles',
                '90 câbles',
                '100 câbles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On applique la formule $L = \\frac{n(n - 1)}{2}$ avec $n = 10$ : $L = \\frac{10 \\times 9}{2} = \\frac{90}{2} = 45$ câbles (et chaque routeur possède 9 interfaces).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Ajout d’un nœud',
            stepTheme: 'orange',
            stepTitle: 'Impact de l’ajout d’un nouveau nœud selon la topologie',
            paragraphText:
              'Un critère décisif en ingénierie réseau est la **scalabilité** : combien de nouveaux câbles faut-il tirer lorsqu’on ajoute un seul équipement supplémentaire ?\n' +
              '• **En étoile** : ajouter un $(n+1)$-ième poste ne coûte qu’**1 seul câble** (tant que le switch dispose d’un port libre).\n' +
              '• **En maillage complet** : passer de $n$ à $n + 1$ nœuds impose de relier le nouvel arrivant à **tous les $n$ nœuds existants**, soit **$n$ nouveaux câbles** d’un seul coup ! En effet, $\\frac{(n+1)n}{2} - \\frac{n(n-1)}{2} = n$.\n' +
              '• **En anneau** : insérer un poste impose d’ouvrir la boucle (interruption momentanée) pour insérer 1 nouvelle liaison.\n' +
              'Exemple : ajouter un 11e site à un maillage complet de 10 sites exige de poser 10 nouvelles liaisons longue distance (passant de 45 à 55 liens).',
            formula: {
              name: 'Coût marginal d’ajout d’un nœud en maillage complet',
              formula: '\\Delta L = L(n + 1) - L(n) = \\frac{(n+1)n}{2} - \\frac{n(n-1)}{2} = n',
              note: 'Ajouter 1 nœud à un réseau maillé complet de n nœuds nécessite exactement n nouveaux câbles.',
            },
            keyRule:
              'En étoile, ajouter un nœud coûte $1$ câble ; en maillage complet de $n$ nœuds, ajouter un $(n+1)$-ième nœud coûte $n$ nouveaux câbles !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Un réseau en topologie maillée complète comporte déjà `7` nœuds (`21` câbles). Combien de câbles SUPPLÉMENTAIRES faut-il ajouter pour intégrer un 8e nœud tout en conservant un maillage complet ?',
              options: [
                '1 câble',
                '7 câbles',
                '8 câbles',
                '14 câbles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le 8e nœud doit être connecté directement à chacun des 7 nœuds déjà présents : il faut exactement `7` câbles supplémentaires (total : `21 + 7 = 28 = 8 × 7 / 2`).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Choix d’architecture',
            stepTheme: 'green',
            stepTitle: 'Sélectionner la topologie adaptée à un cahier des charges',
            paragraphText:
              'En architecture réseau, aucune topologie n’est « meilleure dans l’absolu » : on choisit celle qui maximise le rapport fiabilité/coût pour le contexte.\n' +
              '• **Bureaux, salles de classe, PME** → **Étoile** (ou étoile étendue / arborescente sur plusieurs étages) : économique, évolutive et simple à dépanner.\n' +
              '• **Dorsale opérateur / interconnexion de data centers critiques** → **Semi-maillée ou maillée** : la redondance des chemins garantit une disponibilité proche de $99{,}999\\%$.\n' +
              '• **Boucle optique métropolitaine** → **Double anneau** (protection contre la coupure d’une tranchée par basculement sur l’anneau de secours).\n' +
              'Exemple : le réseau d’un hôpital universitaire combine des **étoiles** dans chaque service reliées à un cœur **maillé** à double switch pour garantir l’accès permanent aux dossiers médicaux.',
            keyRule:
              'Accès utilisateur (LAN) = Étoile ; Cœur critique (WAN/Data Center) = Maillée / Semi-maillée.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Une banque centrale doit interconnecter 4 centres de traitement critiques en exigeant qu’aucune coupure de lien unique ne puisse isoler un centre et en garantissant un chemin direct entre chaque paire. Quelle topologie choisir ?',
              options: [
                'Topologie en bus coaxial',
                'Topologie en étoile simple autour d’un unique hub',
                'Topologie maillée complète (6 liaisons dédiées)',
                'Topologie en anneau simple unidirectionnel',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour seulement 4 sites critiques, le maillage complet ne demande que $4 \\times 3 / 2 = 6$ liaisons et offre un chemin direct entre toute paire ainsi qu’une tolérance maximale aux pannes.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch1_p3',
        order: 3,
        title: 'Supports de transmission (cuivre, fibre, radio) et codage des messages',
        summary:
          'Comparer les trois familles de supports physiques et maîtriser le codage binaire des caractères ($2^n$ configurations, ASCII 7/8 bits, EBCDIC, Unicode).',
        conceptExplanation:
          'Pour acheminer des bits (`0` et `1`) entre une source et une destination, les réseaux modernes emploient trois familles de **supports de transmission** :\n' +
          '• **Câbles métalliques en cuivre** (paire torsadée UTP/STP RJ45, câble coaxial) : véhiculent des **impulsions électriques**. Peu coûteux et faciles à installer en LAN, mais limités en distance ($100\\text{ m}$ pour la paire torsadée Ethernet) et sensibles aux interférences électromagnétiques.\n' +
          '• **Fibre optique** (verre ou silice) : véhicule des **impulsions lumineuses** (LED/Laser). Insensible aux parasites électriques, très hauts débits (dizaines de Gbit/s à Tbit/s) et très longues portées (dizaines de kilomètres sans répéteur).\n' +
          '• **Sans-fil (ondes radio)** : Wi-Fi, 4G/5G, Bluetooth, satellite. Mobilité totale, mais portée limitée par les obstacles, bande passante partagée et vulnérabilité accrue aux écoutes (chiffrement obligatoire).\n\n' +
          'Avant transmission sur le support, les données subissent un **codage** (numérisation en suites de bits). Un code de longueur $n$ bits représente jusqu’à **$2^n$ caractères distincts**. Les principaux standards normalisés sont **ASCII** (7 bits = 128 caractères ; ASCII étendu 8 bits = 256), **EBCDIC** (8 bits, IBM mainframes, aujourd’hui abandonné) et **Unicode** (standard universel couvrant toutes les écritures mondiales et les emojis).',
        formulas: [
          {
            name: 'Capacité de représentation d’un code binaire à $n$ bits',
            formula: 'N_{\\text{symboles}} = 2^n \\quad (\\text{ex. } 2^7 = 128 \\text{ en ASCII}, \\; 2^8 = 256 \\text{ en ASCII étendu})',
            note: 'Réciproquement, pour coder M symboles distincts, il faut au moins n = ⌈log2(M)⌉ bits.',
          },
          {
            name: 'Relation Débit, Volume et Temps de transfert',
            formula: 't = \\frac{\\text{Taille (en bits)}}{\\text{Débit (en bit/s)}}, \\qquad 1 \\text{ octet (Byte)} = 8 \\text{ bits}',
            note: 'Piège classique : convertir toujours les Mégaoctets (Mo) en Mégabits (× 8) avant de diviser par un débit en Mbit/s !',
          },
        ],
        keyRule:
          'Cuivre = impulsions électriques ; Fibre optique = ondes lumineuses (immunité électromagnétique + très longue portée) ; Sans-fil = ondes radio. Et un code de $n$ bits offre exactement $2^n$ combinaisons.',
        workedExample: {
          title: 'Choix de support pour un campus et calcul de bits nécessaires pour un alphabet',
          statement:
            '1) Un campus universitaire doit relier deux bâtiments distants de `800 m` à `10 Gbit/s` en passant près d’un transformateur électrique. Quel support choisir ? 2) Combien de bits au minimum faut-il pour coder `60` caractères distincts ?',
          methodSteps: [
            '1) La paire torsadée cuivre est limitée à `100 m` et sensible aux perturbations du transformateur ; le Wi-Fi subit les intempéries/interférences. La **fibre optique** (lumière, insensible aux parasites électromagnétiques, portée multi-kilométrique à $10\\text{ Gbit/s}$) s’impose.',
            '2) On cherche le plus petit entier $n$ tel que $2^n \\ge 60$ : $2^5 = 32 < 60$ (insuffisant), $2^6 = 64 \\ge 60$ (suffisant).',
          ],
          conclusion:
            'Il faut poser une **fibre optique** entre les bâtiments, et un code de **6 bits** au minimum (64 combinaisons) pour représenter 60 caractères.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Supports filaires',
            stepTheme: 'blue',
            stepTitle: 'Câbles en cuivre (paire torsadée, coaxial) : signal électrique et limites',
            paragraphText:
              'Les supports en cuivre restent le pilier du raccordement final des postes dans les bureaux grâce à leur faible coût et leur simplicité de sertissage.\n' +
              '• **Signal transporté** : impulsions électriques (variations de tension/courant) sujettes à l’**atténuation** avec la distance et aux **interférences électromagnétiques** (diaphonie entre paires, câbles secteur voisins).\n' +
              '• **Paire torsadée (UTP non blindée / STP blindée, connecteur RJ45)** : torsader les fils par paires annule une grande partie des parasites ; portée standard Ethernet = **`100 m`**, débits jusqu’à $1$ à $10\\text{ Gbit/s}$ (Cat 5e, Cat 6/6a).\n' +
              '• **Câble coaxial** : conducteur central entouré d’un blindage tressé (utilisé dans les premiers Ethernet 10Base5/10Base2 et la télévision câblée).\n' +
              'Exemple : pour câbler 25 ordinateurs d’un cybercafé ou d’un bureau à moins de 80 m du switch, la paire torsadée Cat 6 RJ45 offre le meilleur rapport qualité/prix.',
            keyRule:
              'La paire torsadée en cuivre transporte des impulsions électriques sur une portée maximale normalisée de `100 m` par segment Ethernet.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Pourquoi les brins d’un câble réseau Ethernet en cuivre sont-ils **torsadés par paires** ?',
              options: [
                'Pour transporter de la lumière à la place de l’électricité.',
                'Pour réduire les interférences électromagnétiques et la diaphonie entre fils voisins.',
                'Pour permettre une portée de 50 kilomètres sans amplificateur.',
                'Pour remplacer la carte réseau des ordinateurs.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La torsade des paires de fils de cuivre permet aux champs électromagnétiques parasites de s’annuler mutuellement, limitant la diaphonie et les perturbations externes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Fibre & Sans-fil',
            stepTheme: 'violet',
            stepTitle: 'Fibre optique (lumière) vs transmission sans fil (ondes radio)',
            paragraphText:
              'Lorsque la distance dépasse `100 m`, que les débits explosent ou que la mobilité devient prioritaire, la fibre optique et le sans-fil prennent le relais du cuivre.\n' +
              '• **Fibre optique** : cœur en verre/silice guidant des **impulsions lumineuses** par réflexion totale. Zéro sensibilité aux parasites électromagnétiques, très faible atténuation (plusieurs dizaines de km en monomode, quelques centaines de mètres en multimode), confidentialité élevée.\n' +
              '• **Sans-fil (ondes radio)** : Wi-Fi, 4G/5G, Bluetooth, faisceaux hertziens. Permet la mobilité et le déploiement rapide sans travaux de câblage, mais subit l’atténuation des murs, le partage du canal radio et nécessite un chiffrement fort (WPA3).\n' +
              'Exemple : le réseau FTTH (*Fiber To The Home*) à Abidjan amène la lumière en fibre jusqu’à la box domestique, qui relaie ensuite en Wi-Fi (ondes radio) vers les smartphones de la maison.',
            keyRule:
              'Fibre optique = lumière (très haut débit, longue distance, immunité totale aux interférences électriques) ; Sans-fil = ondes radio (mobilité, mais support partagé à sécuriser).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Quel support de transmission est totalement insensible aux interférences électromagnétiques industrielles et permet des liaisons de plusieurs kilomètres à très haut débit ?',
              options: [
                'Le câble à paires torsadées non blindées (UTP)',
                'La fibre optique',
                'Le câble coaxial fin',
                'La liaison Bluetooth WPAN',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fibre optique transporte des signaux lumineux (photons) dans du verre : elle est totalement immune aux perturbations électromagnétiques et offre une atténuation extrêmement faible sur de longues distances.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Codage binaire',
            stepTheme: 'blue',
            stepTitle: 'Numérisation des messages et loi des $2^n$ configurations',
            paragraphText:
              'Sur un support réseau, on ne fait pas voyager des lettres ou des images directement : toute information est d’abord **codée** en suites de bits (`0` et `1`), puis convertie en signaux physiques (tensions, lumière ou ondes), et enfin **décodée** à l’arrivée.\n' +
              '• **Loi combinatoire fondamentale** : avec $1$ bit, on a $2^1 = 2$ états (`0, 1`) ; avec $2$ bits, $2^2 = 4$ configurations (`00, 01, 10, 11`) ; de manière générale, un code de **$n$ bits** permet de représenter exactement **$2^n$ caractères distincts**.\n' +
              '• **Décodage** : opération inverse chez le destinataire qui reconstitue le texte, le son ou l’image d’origine à partir de la même table de correspondance.\n' +
              'Exemple : si l’émetteur code un message en UTF-8 et que le récepteur tente de le décoder dans une table incompatible, les lettres accentuées (`é`, `à`) apparaissent corrompues (`Ã©`).',
            formula: {
              name: 'Nombre de combinaisons sur $n$ bits',
              formula: 'N = 2^n \\iff n = \\lceil \\log_2(N) \\rceil',
              note: 'Exemples : 7 bits → 128 valeurs (0..127) ; 8 bits (1 octet) → 256 valeurs (0..255).',
            },
            keyRule:
              'Un mot binaire de $n$ bits code exactement $2^n$ configurations distinctes, numérotées de $0$ à $2^n - 1$.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Combien de caractères distincts un code binaire de longueur fixe de **8 bits** (1 octet) permet-il de représenter au maximum ?',
              options: [
                '16 caractères',
                '64 caractères',
                '128 caractères',
                '256 caractères',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un code sur $n = 8$ bits offre exactement $2^8 = 256$ configurations distinctes (numérotées de `0` à `255`).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Standards de codage',
            stepTheme: 'violet',
            stepTitle: 'ASCII (7 et 8 bits), EBCDIC (IBM) et Unicode',
            paragraphText:
              'Pour que des ordinateurs de fabricants différents affichent le même texte, des organismes internationaux ont normalisé les tables de codage de caractères.\n' +
              '• **ASCII (*American Standard Code for Information Interchange*)** : normalisé par l’ANSI sur **7 bits** ($2^7 = 128$ caractères, `0` à `127`) couvrant l’alphabet anglais non accentué, les chiffres et la ponctuation. L’**ASCII étendu** sur **8 bits** ($256$ caractères, `0` à `255`) a ajouté les caractères accentués européens.\n' +
              '• **EBCDIC** : code sur **8 bits** ($256$ caractères) conçu historiquement par IBM pour ses grands systèmes (*mainframes*), aujourd’hui abandonné.\n' +
              '• **Unicode (UTF-8 / UTF-16)** : standard universel destiné à unifier tous les alphabets du monde (latin accentué, arabe, chinois, langues africaines) ainsi que les symboles mathématiques et les **emojis**.\n' +
              'Exemple : le caractère `’A’` a pour code décimal `65` (`01000001` en binaire) en ASCII comme en UTF-8, assurant une rétrocompatibilité totale.',
            keyRule:
              'ASCII standard = 7 bits (128 caractères, sans accents) ; ASCII étendu & EBCDIC = 8 bits (256) ; Unicode = standard universel multilingue + emojis.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Quelle différence historique et technique distingue le code **ASCII standard** de **Unicode** ?',
              options: [
                'ASCII code sur 32 bits et Unicode sur 7 bits.',
                'ASCII standard code 128 caractères sur 7 bits (langue anglaise), tandis qu’Unicode vise à représenter tous les caractères de toutes les langues du monde ainsi que les emojis.',
                'Unicode est un code propriétaire IBM aujourd’hui abandonné.',
                'ASCII est réservé uniquement à la fibre optique.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ASCII standard (ANSI) repose sur 7 bits (128 caractères sans accents). Unicode unifie l’ensemble des écritures humaines et des symboles/emojis (EBCDIC est le code 8 bits historique d’IBM).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Débit & Unités',
            stepTheme: 'orange',
            stepTitle: 'Attention aux unités : bits/s (`Mb/s`) vs octets/s (`Mo/s`) !',
            paragraphText:
              'Un piège omniprésent dans la vie quotidienne comme aux examens de réseaux consiste à confondre les **bits** (`b`) utilisés pour les débits opérateurs et les **octets** (`o` ou `B` pour *Byte*) utilisés pour la taille des fichiers !\n' +
              '• **Conversion fondamentale** : $1\\text{ octet} = 8\\text{ bits}$ (`1 B = 8 b`).\n' +
              '• **Calcul de durée de téléchargement** : si un fichier pèse `50 Mo` ($50 \\times 8 = 400\\text{ Mbits}$) sur une connexion fibre à `100 Mbit/s`, le temps minimal de transfert vaut $\\frac{400}{100} = 4\\text{ secondes}$ (et NON `0,5 s` !).\n' +
              '• **Règle pratique** : pour connaître le débit maximal en `Mo/s` d’une offre Internet affichée en `Mbit/s`, il faut **diviser par 8** (`80 Mbit/s` = `10 Mo/s`).\n' +
              'Exemple : un abonnement 4G/Fibre de `40 Mbit/s` télécharge au maximum à $40 / 8 = 5\\text{ Mo/s}$.',
            formula: {
              name: 'Temps théorique de transfert d’un fichier',
              formula: 't\\text{ (s)} = \\frac{\\text{Taille (Mo)} \\times 8}{\\text{Débit (Mbit/s)}}',
              note: 'B majuscule = Byte (octet = 8 bits) ; b minuscule = bit.',
            },
            keyRule:
              'Les tailles de fichiers s’expriment en **octets (Mo/Go)**, les débits réseau en **bits par seconde (Mbit/s)** : toujours multiplier les octets par `8` avant de diviser par le débit !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Combien de secondes faut-il (au minimum théorique) pour télécharger un fichier de **25 Mo** (mégaoctets) sur une liaison dont le débit utile est de **20 Mbit/s** ?',
              options: [
                '1,25 seconde',
                '10 secondes',
                '8 secondes',
                '500 secondes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On convertit d’abord la taille en mégabits : $25\\text{ Mo} \\times 8 = 200\\text{ Mbits}$. Puis $t = \\frac{200\\text{ Mbits}}{20\\text{ Mbit/s}} = 10\\text{ secondes}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Bande passante & Modes',
            stepTheme: 'green',
            stepTitle: 'Simplex, Half-Duplex et Full-Duplex sur un canal de transmission',
            paragraphText:
              'Un canal de transmission se caractérise aussi par le sens dans lequel les données peuvent circuler simultanément.\n' +
              '• **Simplex (unidirectionnel)** : la communication ne va que dans un seul sens (ex. télévision hertzienne, radio FM, liaison clavier → PC).\n' +
              '• **Half-Duplex (bidirectionnel à l’alternat)** : les deux sens sont possibles mais **pas simultanément** — chacun parle à son tour (ex. talkie-walkie, ancien Ethernet partagé sur hub, Wi-Fi sur un même canal).\n' +
              '• **Full-Duplex (bidirectionnel simultané)** : émission et réception simultanées sur des paires ou fibres distinctes, doublant l’efficacité et supprimant les collisions (ex. téléphonie, **Ethernet commuté moderne sur switch**).\n' +
              'Exemple : un lien Ethernet Gigabit Full-Duplex entre un serveur et un switch peut simultanément envoyer $1\\text{ Gbit/s}$ et recevoir $1\\text{ Gbit/s}$.',
            keyRule:
              'Simplex = 1 seul sens ; Half-Duplex = 2 sens à tour de rôle (risque de collision) ; Full-Duplex = 2 sens simultanés (aucune collision sur Ethernet commuté).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p3_q6',
              type: 'mcq',
              prompt: 'Quel mode de transmission permet à un poste connecté à un switch Ethernet moderne d’émettre et de recevoir des données **simultanément** sans collision ?',
              options: [
                'Simplex',
                'Half-Duplex',
                'Full-Duplex',
                'Broadcast analogique',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le mode **Full-Duplex** utilise des voies séparées pour l’émission et la réception simultanées, ce qui élimine totalement les collisions sur les liaisons Ethernet commutées.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Modèles OSI (7 couches), TCP/IP (4 couches) et encapsulation
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch2',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Réseaux & Services',
    title: 'Chapitre 2 — Modèles de référence OSI (7 couches) et TCP/IP (4 couches), encapsulation et équipements',
    summary:
      'Suites de protocoles et règles de communication (format, encapsulation, segmentation, synchronisation, unicast/multicast/broadcast), modèle ISO/OSI en 7 couches (couches basses/hautes, PDU, équipements), modèle TCP/IP en 4 couches et correspondance OSI ↔ TCP/IP.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch2_p1',
        order: 1,
        title: 'Suites de protocoles, encapsulation, segmentation, synchronisation et modes de remise',
        summary:
          'Comprendre les 5 règles fondamentales de toute communication réseau : codage, encapsulation/désencapsulation, segmentation, synchronisation et options de remise.',
        conceptExplanation:
          'Toute communication (humaine ou informatique) repose sur trois éléments — une **source**, une **destination** et un **canal** — et obéit à des **protocoles** regroupés en une **suite de protocoles** (ouverte comme TCP/IP, ou propriétaire constructeur) représentée sous forme de **pile**.\n\n' +
          'Une communication réseau respecte cinq règles techniques précises :\n' +
          '1. **Codage / décodage** : numérisation des données en bits puis adaptation physique au support.\n' +
          '2. **Format et encapsulation** : comme une lettre placée dans une enveloppe portant les adresses expéditeur/destinataire, le message est **encapsulé** dans une structure (trame/paquet) ; le récepteur réalise l’opération inverse (**désencapsulation**).\n' +
          '3. **Taille et segmentation** : les supports imposant une taille minimale et maximale de trame (MTU), tout long message est découpé en fragments (**segmentation**) puis reconstitué à l’arrivée (**réassemblage**).\n' +
          '4. **Synchronisation** : regroupe la **méthode d’accès** (quand émettre), le **contrôle de flux** (adapter le débit au récepteur) et le **délai d’attente d’accusé de réception** (*timeout* déclenchant une retransmission).\n' +
          '5. **Options de remise** : **Unicast** (1 vers 1), **Multicast** (1 vers un groupe abonné) et **Broadcast** (1 vers tous les hôtes du réseau local).',
        formulas: [
          {
            name: 'Cycle Encapsulation / Désencapsulation',
            formula: '\\text{Émission : Haut} \\downarrow \\text{Bas (ajout d’en-têtes)} \\quad ; \\quad \\text{Réception : Bas} \\uparrow \\text{Haut (retrait d’en-têtes)}',
            note: 'Chaque couche de l’émetteur dialogue logiquement avec la couche homologue du destinataire.',
          },
        ],
        keyRule:
          'Retiens les 3 composantes de la synchronisation des messages : méthode d’accès, contrôle de flux, et délai d’attente de réponse (*timeout*).',
        workedExample: {
          title: 'Analogie postale et transmission d’une pièce jointe de 5 Mo',
          statement:
            'Un étudiant envoie un mémoire de 5 Mo par e-mail sur Ethernet (trame maximale de 1 518 octets). Expliquer les mécanismes mis en œuvre à l’émission et à la réception.',
          methodSteps: [
            '**Codage** : le fichier est représenté en octets/bits binaires.',
            '**Segmentation** : 5 Mo dépassant largement la taille maximale d’une trame (~1 500 octets de charge utile), le fichier est découpé en plus de 3 400 fragments numérotés.',
            '**Encapsulation** : chaque fragment reçoit ses en-têtes (ports TCP, adresses IP, adresses MAC + contrôle d’erreur Ethernet) avant conversion en signal sur le support.',
            '**Synchronisation & Remise** : contrôle de flux pour ne pas saturer le serveur mail, temporisateur de retransmission en cas de perte, et remise **Unicast** (1 émetteur → 1 serveur).',
            '**Désencapsulation & Réassemblage** : le serveur retire les en-têtes couche par couche et remet les fragments dans l’ordre exact.',
          ],
          conclusion:
            'Sans segmentation, encapsulation et synchronisation, un fichier volumineux monopoliserait le canal et la moindre erreur obligerait à tout retransmettre depuis le début.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Protocoles',
            stepTheme: 'blue',
            stepTitle: 'Suite de protocoles, pile protocolaire et standards ouverts vs propriétaires',
            paragraphText:
              'Un seul protocole ne suffit pas à acheminer un message d’une application à travers câbles, switches et routeurs mondiaux : plusieurs protocoles spécialisés doivent coopérer.\n' +
              '• **Suite de protocoles** : ensemble cohérent de protocoles associés nécessaires pour assurer une communication complète (format des messages, partage de routes, messages d’erreur, ouverture/fermeture de sessions).\n' +
              '• **Pile de protocoles** : représentation verticale montrant comment les protocoles individuels s’empilent et interagissent sur un hôte (logiciel et matériel).\n' +
              '• **Suite ouverte vs propriétaire** : une suite **propriétaire** appartient à un constructeur (historiquement IBM SNA, Bull DSA), créant des réseaux incompatibles ; une suite **ouverte** (TCP/IP, IEEE 802) est normalisée et interopérable entre tous les fabricants.\n' +
              'Exemple : un smartphone Samsung, une box Huawei et un serveur Linux Dell communiquent parfaitement sur Internet grâce à la suite ouverte TCP/IP.',
            keyRule:
              'Les suites ouvertes (normalisées par l’ISO, l’IEEE et l’IETF) garantissent l’interopérabilité mondiale entre équipements de constructeurs hétérogènes.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Quel problème majeur les suites de protocoles **ouvertes** (comme TCP/IP) ont-elles résolu par rapport aux architectures historiques telles que SNA (IBM) ou DSA (Bull) ?',
              options: [
                'Elles ont supprimé le besoin de tout support de transmission.',
                'Elles ont permis l’interconnexion et l’interopérabilité d’équipements provenant de constructeurs différents.',
                'Elles ont limité les réseaux à un maximum de 10 postes.',
                'Elles ont remplacé les bits par des signaux analogiques.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les architectures constructeurs propriétaires (IBM SNA, Bull DSA) étaient incompatibles entre elles. Les suites ouvertes et normalisées permettent à tous les équipements hétérogènes de communiquer.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Encapsulation',
            stepTheme: 'blue',
            stepTitle: 'Format des messages, encapsulation et désencapsulation',
            paragraphText:
              'Tout comme une lettre postale doit être glissée dans une enveloppe portant l’adresse du destinataire et celle de l’expéditeur pour être acheminée par la poste, un message informatique est entouré d’informations de contrôle.\n' +
              '• **Encapsulation** : processus par lequel une couche enveloppe le message reçu de la couche supérieure en lui ajoutant un **en-tête** (et parfois une queue de contrôle, comme dans une trame) contenant adresses source/destination et informations de protocole.\n' +
              '• **Désencapsulation** : processus inverse effectué par le destinataire, qui vérifie et retire chaque enveloppe successive pour délivrer les données brutes à l’application finale.\n' +
              '• **Respect strict du format** : une trame ou un paquet mal formaté est immédiatement rejeté et ignoré par l’hôte récepteur.\n' +
              'Exemple : un message WhatsApp est d’abord encapsulé en segment TCP, puis en paquet IP, puis en trame Wi-Fi/Ethernet avant d’être émis en bits.',
            keyRule:
              'À l’émission on **encapsule** (de la couche 7 vers la couche 1 en ajoutant des en-têtes) ; à la réception on **désencapsule** (de la couche 1 vers la couche 7 en retirant les en-têtes).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Comment nomme-t-on le processus inverse de l’encapsulation, réalisé par l’hôte destinataire lorsqu’il retire successivement les en-têtes pour extraire le message d’origine ?',
              options: [
                'La segmentation',
                'La désencapsulation',
                'La commutation',
                'Le multiplexage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’émetteur encapsule les données en ajoutant des en-têtes couche par couche ; le récepteur effectue la **désencapsulation** en retirant chaque en-tête pour remonter les données jusqu’à l’application.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Segmentation',
            stepTheme: 'violet',
            stepTitle: 'Taille des messages, segmentation et multiplexage des conversations',
            paragraphText:
              'Sur un réseau partagé, envoyer d’un seul tenant un fichier vidéo de 500 Mo bloquerait tous les autres utilisateurs et rendrait la moindre erreur catastrophique.\n' +
              '• **Contrainte matérielle** : chaque technologie impose une taille minimale et maximale de trame (ex. `64` à `1 518` octets sur Ethernet).\n' +
              '• **Segmentation** : découpage d’un long message en petits morceaux autonomes, chacun doté de ses propres en-têtes d’adressage et d’un numéro de séquence.\n' +
              '• **Double avantage** : (1) permet d’entrelacer (**multiplexer**) simultanément plusieurs conversations sur le même câble ; (2) en cas de perte d’un fragment, seul ce petit morceau est retransmis au lieu du fichier entier.\n' +
              'Exemple : tu peux écouter de la musique en streaming tout en téléchargeant un document et en recevant des e-mails sur une seule connexion grâce à la segmentation.',
            keyRule:
              'La segmentation découpe les gros messages en fragments numérotés à l’émission ; le réassemblage reconstitue le message exact dans l’ordre à la réception.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Quels sont les deux avantages majeurs de la **segmentation** des longs messages sur un réseau ?',
              options: [
                'Supprimer le besoin d’adresses IP et d’adresses MAC.',
                'Respecter la taille maximale des trames, permettre le partage du canal entre plusieurs flux (multiplexage) et ne retransmettre que les fragments perdus.',
                'Doubler physiquement la vitesse de la lumière dans la fibre optique.',
                'Éviter toute opération de réassemblage chez le destinataire.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La segmentation adapte les données à la taille maximale des trames, autorise le multiplexage simultané de plusieurs flux sur le même support et limite la retransmission aux seuls fragments erronés.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Synchronisation',
            stepTheme: 'violet',
            stepTitle: 'Synchronisation : méthode d’accès, contrôle de flux et délai d’attente',
            paragraphText:
              'Pour qu’un dialogue réseau reste fluide et fiable sans saturation ni perte silencieuse, trois mécanismes de synchronisation travaillent ensemble.\n' +
              '• **Méthode d’accès** : fixe le moment où un hôte a le droit d’émettre sur un support partagé et la conduite à tenir en cas de collision (ex. CSMA/CD, CSMA/CA, passage de jeton).\n' +
              '• **Contrôle de flux** : régule la quantité de données et la cadence d’envoi de l’émetteur afin de ne pas saturer la mémoire tampon du destinataire (un serveur très rapide dialoguant avec un smartphone modeste).\n' +
              '• **Délai d’attente de réponse (*Timeout*)** : durée maximale durant laquelle la source attend un accusé de réception (`ACK`) ; passé ce délai, elle considère le segment perdu et le renvoie.\n' +
              'Exemple : si un réseau mobile subit une micro-coupure de 2 secondes, le *timeout* expire et TCP réexpédie automatiquement le segment manquant.',
            keyRule:
              'Synchronisation = Quand parler (méthode d’accès) + À quelle vitesse parler (contrôle de flux) + Combien de temps attendre une réponse (*timeout*).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Quel mécanisme de synchronisation empêche un serveur très rapide de saturer un récepteur plus lent en régulant la quantité et la vitesse des données envoyées ?',
              options: [
                'Le codage Unicode',
                'Le contrôle de flux',
                'L’adressage broadcast',
                'La topologie en anneau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le **contrôle de flux** ajuste la quantité de données que la source peut envoyer ainsi que la cadence de livraison afin que le destinataire puisse les traiter sans saturation.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Remise des messages',
            stepTheme: 'blue',
            stepTitle: 'Options de remise : Unicast, Multicast et Broadcast',
            paragraphText:
              'Selon le nombre de destinataires visés par un message, un hôte choisit l’un des trois modes de remise fondamentaux.\n' +
              '• **Unicast (monodiffusion, 1 vers 1)** : envoi d’un message d’une source unique vers un **unique destinataire** identifié (ex. consultation d’une page web, transfert bancaire).\n' +
              '• **Multicast (multidiffusion, 1 vers un groupe)** : envoi simultané vers un **groupe restreint d’hôtes abonnés** (ex. flux IPTV, visioconférence de groupe, classe D IPv4 `224.0.0.0–239.255.255.255`). Économise énormément de bande passante par rapport à $N$ unicasts !\n' +
              '• **Broadcast (diffusion générale, 1 vers tous)** : envoi simultané à **tous les hôtes du réseau local** (ex. requête ARP « Qui a l’IP 192.168.1.1 ? », découverte DHCP, adresse MAC `FF:FF:FF:FF:FF:FF`). Les routeurs bloquent par défaut les broadcasts !\n' +
              'Exemple : diffuser un match en direct à 500 abonnés sur le même réseau consomme 1 seul flux en **Multicast**, contre 500 flux identiques en **Unicast**.',
            keyRule:
              'Unicast = 1 → 1 ; Multicast = 1 → groupe abonné ; Broadcast = 1 → tous les hôtes du même LAN (arrêté par les routeurs).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Un hôte envoie une requête destinée simultanément à un **groupe spécifique** de 35 récepteurs abonnés à un flux vidéo interne, sans déranger les 200 autres PC du réseau. De quel mode de remise s’agit-il ?',
              options: [
                'Unicast',
                'Multicast',
                'Broadcast',
                'Simplex',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La remise **Multicast** (1 vers un groupe sélectionné) délivre un flux unique uniquement aux hôtes abonnés au groupe, contrairement à l’Unicast (1 seul hôte) et au Broadcast (tous les hôtes sans exception).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Domaine de diffusion',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi les routeurs bloquent le Broadcast et limitent les tempêtes',
            paragraphText:
              'Si les trames de diffusion générale (*Broadcast*) traversaient librement les routeurs d’Internet, chaque requête DHCP ou ARP d’un PC à Abidjan inonderait des milliards d’appareils sur toute la planète !\n' +
              '• **Domaine de broadcast (domaine de diffusion)** : zone réseau au sein de laquelle une trame broadcast se propage et interrompt le processeur de tous les hôtes.\n' +
              '• **Comportement des équipements** : un **hub** et un **switch** (par défaut, sur un même VLAN) **propagent** les broadcasts sur tous leurs autres ports ; un **routeur** **bloque** les broadcasts et sépare deux domaines de broadcast distincts.\n' +
              '• **Bonne pratique** : segmenter un grand campus en plusieurs sous-réseaux / VLANs réduit la taille de chaque domaine de broadcast et améliore la réactivité du réseau.\n' +
              'Exemple : un switch 24 ports crée 24 domaines de collision séparés, mais **1 seul domaine de broadcast** tant qu’aucun VLAN ni routeur n’est configuré.',
            keyRule:
              'Hub = 1 domaine de collision, 1 domaine de broadcast ; Switch = 1 domaine de collision par port, 1 domaine de broadcast (par VLAN) ; Routeur = sépare à la fois domaines de collision ET domaines de broadcast.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Quel équipement réseau délimite et bloque par défaut la propagation des trames de **Broadcast** entre deux réseaux locaux distincts ?',
              options: [
                'Le répéteur',
                'Le concentrateur (Hub)',
                'Le routeur',
                'Le câble à paire torsadée',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le **routeur** (couche 3) ne transfère pas les broadcasts locaux d’une interface vers une autre : chaque interface de routeur définit un domaine de broadcast distinct.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch2_p2',
        order: 2,
        title: 'Le modèle de référence OSI (7 couches) : rôles, PDU et équipements',
        summary:
          'Maîtriser les 7 couches du modèle ISO/OSI, la séparation couches basses/hautes, l’unité de données (PDU) et les équipements associés à chaque niveau.',
        conceptExplanation:
          'Développé par l’**ISO** (*International Organization for Standardization*), le **modèle de référence OSI** (*Open Systems Interconnection*) est une architecture abstraite en **7 couches logiques** servant de guide universel pour concevoir, enseigner et dépanner les réseaux.\n\n' +
          'Les 7 couches se divisent en deux grands ensembles :\n' +
          '• **Couches basses (matérielles / acheminement, couches 1 à 4)** : assurent le transport fiable des données de proche en proche puis de bout en bout — **1. Physique** (PDU : *Bit* ; répéteur, hub), **2. Liaison de données** (PDU : *Trame* ; carte réseau, switch, pont ; adresse MAC), **3. Réseau** (PDU : *Paquet* ; routeur ; adressage logique IP et routage), **4. Transport** (PDU : *Segment / Message* ; contrôle de flux, segmentation/réassemblage, séquencement, reprise sur erreur).\n' +
          '• **Couches hautes (logicielles / dialogue applicatif, couches 5 à 7)** : **5. Session** (ouverture/fermeture et synchronisation du dialogue), **6. Présentation** (mise en forme/syntaxe, **compression**, **chiffrement/déchiffrement**), **7. Application** (point de contact utilisateur-réseau : web, messagerie, transfert de fichiers).',
        formulas: [
          {
            name: 'Chaîne descendante des PDU (Protocole Data Units)',
            formula: '\\text{Données (L7–L5)} \\longrightarrow \\text{Segment (L4)} \\longrightarrow \\text{Paquet (L3)} \\longrightarrow \\text{Trame (L2)} \\longrightarrow \\text{Bit (L1)}',
            note: 'Moyen mnémotechnique des couches 1→7 : « Pour Le Réseau Tout Se Passe Admirativement » (Physique, Liaison, Réseau, Transport, Session, Présentation, Application).',
          },
        ],
        keyRule:
          'Associe toujours sans hésiter : Couche 1 = Bit (Hub/Répéteur) ; Couche 2 = Trame + MAC (Switch/NIC) ; Couche 3 = Paquet + IP + Routage (Routeur) ; Couche 4 = Segment + Bout en bout (TCP/UDP).',
        workedExample: {
          title: 'Diagnostic d’une panne réseau par approche structurée OSI (de bas en haut)',
          statement:
            'Un poste ne peut plus accéder à un site HTTPS (`https://banque.ci`). Comment un administrateur utilise-t-il les couches OSI pour isoler rapidement la panne ?',
          methodSteps: [
            '**Couche 1 (Physique)** : vérifier que le câble RJ45 est branché et que le voyant vert (*Link*) de la carte réseau est allumé.',
            '**Couche 2 (Liaison)** : vérifier que le port du switch est actif et que l’adresse MAC du poste est apprise sans erreur de trame.',
            '**Couche 3 (Réseau)** : tester un `ping` vers la passerelle par défaut puis vers une IP publique pour vérifier l’adressage IP et le routage.',
            '**Couches 4 à 7 (Transport / Présentation / Application)** : vérifier le port TCP 443, la résolution DNS, la validité du certificat TLS (chiffrement en couche 6) et le navigateur (couche 7).',
          ],
          conclusion:
            'L’approche par couches OSI transforme un problème flou (« Internet ne marche pas ») en diagnostic méthodique précis.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Architecture OSI',
            stepTheme: 'blue',
            stepTitle: 'Les 7 couches du modèle OSI et séparation couches hautes / basses',
            paragraphText:
              'Le découpage en 7 couches indépendantes permet à chaque équipe d’ingénieurs de faire évoluer une couche (par exemple passer du cuivre à la fibre en couche 1) sans jamais réécrire les applications de la couche 7.\n' +
              '• **Couches basses (1 à 4 — couches matérielles / transport)** : Physique (1), Liaison de données (2), Réseau (3) et Transport (4) assurent l’acheminement fiable des bits jusqu’au programme destinataire.\n' +
              '• **Couches hautes (5 à 7 — couches logicielles / applicatives)** : Session (5), Présentation (6) et Application (7) gèrent le dialogue applicatif entre les programmes des périphériques finaux.\n' +
              '• **Principe d’encapsulation verticale** : une couche $N$ fournit des services à la couche $N + 1$ et s’appuie sur les services de la couche $N - 1$.\n' +
              'Exemple : un navigateur web (L7) ignore totalement si ton ordinateur est connecté en Wi-Fi, en Ethernet cuivre ou en 5G (L1/L2) !',
            visualSchema: {
              type: 'layered_stack',
              title: 'Modèle de référence ISO / OSI en 7 couches',
              caption: 'De haut en bas : couches hautes logicielles (7–5) et couches basses d’acheminement (4–1) avec leur PDU et équipements.',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'L7', title: 'Application (Données)', subtitle: 'Interface utilisateur-réseau : HTTP, DNS, SMTP, FTP, SSH', color: 'violet' },
                  { badge: 'L6', title: 'Présentation (Données)', subtitle: 'Syntaxe, encodage, compression, chiffrement (TLS/SSL)', color: 'violet' },
                  { badge: 'L5', title: 'Session (Données)', subtitle: 'Ouverture, synchronisation et fermeture du dialogue', color: 'violet' },
                  { badge: 'L4', title: 'Transport (Segment / Message)', subtitle: 'Bout en bout, ports, contrôle de flux, erreurs (TCP / UDP)', color: 'blue' },
                  { badge: 'L3', title: 'Réseau (Paquet)', subtitle: 'Adressage logique (IP) et routage — Équipement : Routeur', color: 'green' },
                  { badge: 'L2', title: 'Liaison de données (Trame)', subtitle: 'Adressage MAC, accès média (LLC/MAC) — Switch, Carte réseau', color: 'orange' },
                  { badge: 'L1', title: 'Physique (Bit)', subtitle: 'Signaux électriques/lumineux/radio, câbles — Hub, Répéteur', color: 'slate' },
                ],
              },
            },
            keyRule:
              'Couches basses = `1, 2, 3, 4` (acheminement) ; Couches hautes = `5, 6, 7` (dialogue applicatif).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Quelles couches du modèle OSI composent l’ensemble des **couches hautes** (couches logicielles gérant le dialogue applicatif) ?',
              options: [
                'Couches 1, 2 et 3',
                'Couches 1, 2, 3 et 4',
                'Couches 5, 6 et 7 (Session, Présentation, Application)',
                'Uniquement la couche 7',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans le modèle OSI, les couches 5 (Session), 6 (Présentation) et 7 (Application) forment les **couches hautes** (logicielles), tandis que les couches 1 à 4 forment les couches basses.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Couches 1 & 2',
            stepTheme: 'blue',
            stepTitle: 'Couche Physique (Bit) et Couche Liaison de données (Trame)',
            paragraphText:
              'Les deux premières couches gèrent concrètement la transmission locale d’un nœud à son voisin direct sur le support physique.\n' +
              '• **Couche 1 — Physique (PDU : `Bit`)** : définit les supports (cuivre, fibre, radio), la forme des connecteurs (RJ45), les tensions électriques ou fréquences lumineuses, et assure le transfert brut des bits. Équipements : **répéteur**, **hub (concentrateur)**.\n' +
              '• **Couche 2 — Liaison de données (PDU : `Trame`)** : formate les données en trames adaptées au support, assure l’**adressage physique (MAC)**, définit la méthode d’accès au média et détecte/corrige les erreurs issues de la couche physique. Équipements : **carte réseau (NIC)**, **pont**, **switch (commutateur)**.\n' +
              'Exemple : un switch qui transfère une trame d’un PC vers une imprimante du même bureau opère en couche 2 sans lire les adresses IP.',
            keyRule:
              'Couche 1 = Bit, Hub/Répéteur (aucune adresse) ; Couche 2 = Trame, Switch/Carte réseau (adresse physique MAC).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Quelle est l’unité de données (PDU) de la **couche Liaison de données (couche 2)** et quel équipement d’interconnexion majeur y opère ?',
              options: [
                'Le bit — le répéteur',
                'La trame — le switch (commutateur)',
                'Le paquet — le routeur',
                'Le segment — le pare-feu applicatif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La couche 2 (Liaison de données) manipule la **trame** (avec adresses MAC et contrôle d’erreur) et héberge le **switch (commutateur)** ainsi que la carte réseau.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Couches 3 & 4',
            stepTheme: 'blue',
            stepTitle: 'Couche Réseau (Paquet, Routage) et Couche Transport (Segment, Bout en bout)',
            paragraphText:
              'Pour sortir du réseau local et dialoguer de manière fiable avec une application située à l’autre bout du monde, les couches 3 et 4 interviennent.\n' +
              '• **Couche 3 — Réseau (PDU : `Paquet`)** : assure la connectivité entre réseaux distants grâce à l’**adressage logique (IP)** et à la sélection du meilleur chemin (**routage**). Équipement phare : le **routeur**.\n' +
              '• **Couche 4 — Transport (PDU : `Segment` ou `Message`)** : assure le **transfert de bout en bout** entre deux processus applicatifs (via les numéros de ports). Elle gère la segmentation/réassemblage, le **séquencement** (respect de l’ordre), le **contrôle de flux** et la détection/correction des erreurs (pertes, doublons).\n' +
              'Exemple : lorsque tu télécharges un relevé bancaire, la couche 3 (IP) trouve la route d’Abidjan au data center, tandis que la couche 4 (TCP) garantit que les octets arrivent complets et dans l’ordre exact.',
            keyRule:
              'Couche 3 = acheminement réseau à réseau (IP, Routeur, Paquet) ; Couche 4 = livraison bout en bout application à application (TCP/UDP, Ports, Segment).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Quelle couche du modèle OSI assure la **sélection du chemin (routage)** et l’**adressage logique** entre réseaux géographiquement éloignés ?',
              options: [
                'Couche 2 — Liaison de données',
                'Couche 3 — Réseau',
                'Couche 4 — Transport',
                'Couche 6 — Présentation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La **couche 3 (Réseau)** est responsable de l’adressage logique (IP) et du routage des **paquets** à travers les routeurs entre réseaux distincts.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Couches 5, 6 & 7',
            stepTheme: 'blue',
            stepTitle: 'Couches Session, Présentation (compression/chiffrement) et Application',
            paragraphText:
              'Les trois couches supérieures préparent, sécurisent et présentent l’information directement aux logiciels utilisés par l’humain.\n' +
              '• **Couche 5 — Session** : ouvre, maintient, synchronise (points de reprise) et ferme les sessions de dialogue entre utilisateurs (dans les réseaux modernes, une large part de ce rôle est absorbée par la couche Transport/Application).\n' +
              '• **Couche 6 — Présentation** : gère la **syntaxe** des données échangées selon trois fonctions clés — **mise en forme** (compatibilité de codage ASCII/UTF-8, JPEG, JSON), **compression/décompression** (gzip) et **chiffrement/déchiffrement** (TLS/SSL pour HTTPS).\n' +
              '• **Couche 7 — Application** : point de contact entre les programmes de l’utilisateur et le réseau sous-jacent ; fournit les protocoles de services (HTTP, SMTP, FTP, DNS, SSH).\n' +
              'Exemple : lorsqu’une page `https://` charge, le chiffrement TLS relève de la **Présentation (L6)** et le protocole HTTP de l’**Application (L7)**.',
            keyRule:
              'Retiens le trio magique de la couche 6 (Présentation) : **Mise en forme + Compression + Chiffrement** !',
            konanTip:
              'Piège classique d’examen : la couche 7 (Application) ne désigne PAS le logiciel Chrome ou Outlook lui-même, mais l’interface et les protocoles réseau (HTTP, SMTP, IMAP) utilisés par ces logiciels.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Quelles sont les **trois fonctions principales** de la **couche Présentation (couche 6)** du modèle OSI ?',
              options: [
                'Routage, adressage IP et fragmentation.',
                'Mise en forme (syntaxe), compression/décompression et chiffrement/déchiffrement des données.',
                'Adressage MAC, accès CSMA/CD et détection de collisions.',
                'Amplification électrique, connectique RJ45 et modulation radio.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La couche 6 (Présentation) s’occupe de la représentation syntaxique des données : mise en forme compatible, compression/décompression et chiffrement/déchiffrement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Communication paire',
            stepTheme: 'orange',
            stepTitle: 'Flux réel (vertical) vs dialogue logique entre couches homologues',
            paragraphText:
              'Une erreur fréquente consiste à croire que la couche 3 de l’émetteur envoie directement des signaux à la couche 3 du destinataire sans descendre en couche 1.\n' +
              '• **Communication virtuelle (horizontale)** : la couche $N$ de la source rédige un en-tête destiné à être lu uniquement par la couche $N$ du destinataire (ex. l’en-tête TCP de la source parle au module TCP du serveur).\n' +
              '• **Parcours physique réel (vertical)** : les données descendent obligatoirement de L7 jusqu’à L1 chez l’émetteur, traversent le câble/ondes en bits, traversent les couches basses des équipements intermédiaires (L1–L2 dans un switch, L1–L3 dans un routeur), puis remontent de L1 jusqu’à L7 chez le destinataire.\n' +
              '• **Règle sur les équipements intermédiaires** : un routeur désencapsule jusqu’à la **couche 3** (pour lire l’IP destination et choisir la route), ré-encapsule dans une nouvelle trame L2 pour le saut suivant, mais n’inspecte jamais L4–L7.\n' +
              'Exemple : au passage d’un routeur, les adresses **MAC changent** à chaque saut, tandis que les adresses **IP source et destination restent intactes** (hors NAT).',
            keyRule:
              'Sur un chemin traversant plusieurs routeurs : les adresses **IP** restent de bout en bout, mais les adresses **MAC** sont réécrites sur chaque liaison locale !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Lorsqu’un paquet IP traverse un **routeur** reliant deux réseaux Ethernet distincts, jusqu’à quelle couche OSI le routeur désencapsule-t-il les données avant de les ré-encapsuler ?',
              options: [
                'Couche 1 uniquement (Physique)',
                'Couche 2 uniquement (Liaison)',
                'Couche 3 (Réseau) pour lire l’adresse IP destination et consulter sa table de routage',
                'Couche 7 (Application)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un routeur est un équipement de couche 3 : il reçoit les bits (L1), retire la trame entrante (L2), lit l’en-tête IP (L3) pour décider du prochain saut, puis ré-encapsule le paquet dans une nouvelle trame L2 adaptée au lien sortant.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Mémorisation PDU',
            stepTheme: 'green',
            stepTitle: 'Maîtriser l’ordre des 7 couches et des 5 PDU sans aucune hésitation',
            paragraphText:
              'Savoir réciter instantanément le numéro, le nom, le PDU et l’équipement de chaque couche OSI est indispensable dans tout examen ou entretien technique réseau.\n' +
              '• **De bas en haut (1 → 7)** : `1 Physique (Bit)` → `2 Liaison (Trame)` → `3 Réseau (Paquet)` → `4 Transport (Segment)` → `5 Session (Données)` → `6 Présentation (Données)` → `7 Application (Données)`.\n' +
              '• **De haut en bas (7 → 1)** : « **A**près **P**lusieurs **S**emaines, **T**out **R**éseau **L**aisse **P**asser » (Application, Présentation, Session, Transport, Réseau, Liaison, Physique).\n' +
              '• **Ordre d’encapsulation** : Données → Segment → Paquet → Trame → Bits (et l’ordre exactement inverse à la désencapsulation).\n' +
              'Exemple : si un sujet demande « Quelle est la couche immédiatement sous la couche Transport ? », la réponse jaillit immédiatement : couche 3 — Réseau (PDU : Paquet).',
            keyRule:
              'Encapsulation (émission) : `Données → Segment → Paquet → Trame → Bits`. Désencapsulation (réception) : `Bits → Trame → Paquet → Segment → Données`.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Dans quel ordre exact les PDU sont-elles transformées lors de l’**encapsulation** (de l’application vers le câble physique) ?',
              options: [
                'Bits → Trame → Paquet → Segment → Données',
                'Données → Segment → Paquet → Trame → Bits',
                'Données → Paquet → Segment → Trame → Bits',
                'Données → Trame → Paquet → Segment → Bits',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lors de l’encapsulation descendante (L7 → L1), les **Données** (L7–L5) sont découpées en **Segments** (L4), encapsulées en **Paquets** (L3), puis en **Trames** (L2), et enfin transmises en **Bits** (L1).',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch2_p3',
        order: 3,
        title: 'Le modèle TCP/IP (4 couches) et correspondance avec le modèle OSI',
        summary:
          'Maîtriser l’histoire et les 4 couches du modèle TCP/IP issu d’ARPANET, sa correspondance exacte avec les 7 couches OSI et le suivi complet d’un paquet.',
        conceptExplanation:
          'Créé au début des années 1970 par l’**ARPA** (Département de la Défense américain, projet **ARPANET**) pour interconnecter des réseaux hétérogènes par **commutation de paquets**, le **modèle TCP/IP** tire son nom de ses deux protocoles fondateurs : **TCP** (*Transmission Control Protocol*) et **IP** (*Internet Protocol*). Contrairement au modèle OSI qui est un modèle théorique de référence, TCP/IP est le modèle **réellement implémenté sur Internet**.\n\n' +
          'Il regroupe les fonctions réseau en **4 couches** :\n' +
          '1. **Accès réseau** (fusionne OSI L1 Physique + L2 Liaison) : laisse libre l’implémentation locale (Ethernet, Wi-Fi, fibre) pour transmettre des paquets IP sur le support.\n' +
          '2. **Internet** (= OSI L3 Réseau) : implémentée par IP (IPv4/IPv6), gère l’adressage logique et le routage sans connexion (commutation de paquets).\n' +
          '3. **Transport** (= OSI L4 Transport) : établit le dialogue entre applications via les **numéros de ports**, gère segmentation/réassemblage avec **TCP** (fiable, connecté) et **UDP** (rapide, non connecté).\n' +
          '4. **Application** (fusionne OSI L5 Session + L6 Présentation + L7 Application) : regroupe tous les protocoles utilisateurs (`HTTP, HTTPS, SMTP, FTP, TFTP, DNS, DHCP, SSH`).',
        formulas: [
          {
            name: 'Correspondance directe TCP/IP (4) ↔ OSI (7)',
            formula: '\\text{Accès réseau} \\leftrightarrow (L1+L2) \\; ; \\; \\text{Internet} \\leftrightarrow L3 \\; ; \\; \\text{Transport} \\leftrightarrow L4 \\; ; \\; \\text{Application} \\leftrightarrow (L5+L6+L7)',
            note: 'Les deux couches centrales (Internet/Réseau et Transport) se correspondent exactement 1-pour-1 !',
          },
        ],
        keyRule:
          'OSI = 7 couches (modèle de référence théorique ISO) ; TCP/IP = 4 couches (modèle pratique d’Internet issu d’ARPANET) — fusionne (1+2) en Accès réseau et (5+6+7) en Application.',
        workedExample: {
          title: 'Mapping complet d’une requête web dans les piles TCP/IP et OSI',
          statement:
            'Un étudiant ouvre `https://konan.ci` depuis son PC connecté en Ethernet. Associer chaque protocole/identifiant (HTTPS, Port 443 TCP, IPv4, Trame Ethernet II) à sa couche TCP/IP et à son équivalent OSI.',
          methodSteps: [
            '**HTTPS** → Couche **Application** TCP/IP (équivalent OSI **L7 Application** pour HTTP + **L6 Présentation** pour TLS + **L5 Session**).',
            '**TCP (port destination 443)** → Couche **Transport** TCP/IP (= OSI **L4 Transport**).',
            '**IPv4 (adresse IP du serveur)** → Couche **Internet** TCP/IP (= OSI **L3 Réseau**).',
            '**Ethernet II + adresse MAC + signal RJ45** → Couche **Accès réseau** TCP/IP (= OSI **L2 Liaison** + **L1 Physique**).',
          ],
          conclusion:
            'Les deux modèles décrivent exactement la même réalité technique avec deux granularités complémentaires (4 couches opérationnelles vs 7 couches analytiques).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Origine TCP/IP',
            stepTheme: 'blue',
            stepTitle: 'Origine historique d’ARPANET et commutation de paquets',
            paragraphText:
              'Le modèle TCP/IP n’est pas né d’un comité théorique abstrait, mais d’un besoin concret d’ingénierie militaire et universitaire au début des années 1970.\n' +
              '• **Origine** : développé par l’**ARPA** (*Advanced Research Projects Agency*, agence du DoD américain) dans le cadre du réseau **ARPANET**, ancêtre direct d’Internet.\n' +
              '• **Objectif** : interconnecter des réseaux locaux hétérogènes et garantir la continuité des communications même en cas de destruction d’un nœud intermédiaire.\n' +
              '• **Commutation de paquets** : contrairement au téléphone traditionnel (commutation de circuits réservant une ligne dédiée), les messages sont découpés en paquets indépendants acheminés sans connexion par les meilleurs chemins disponibles à l’instant $t$.\n' +
              'Exemple : deux paquets d’un même e-mail entre Abidjan et Paris peuvent théoriquement emprunter deux câbles sous-marins différents puis être réassemblés à l’arrivée.',
            keyRule:
              'TCP/IP repose sur la **commutation de paquets** : les paquets circulent indépendamment les uns des autres sur des liens partagés, sans réservation préalable d’un circuit physique exclusif.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Quelle technique de transfert de données constitue le fondement du réseau ARPANET et du modèle TCP/IP ?',
              options: [
                'La commutation de circuits analogiques dédiés',
                'La commutation de paquets en mode sans connexion au niveau IP',
                'La transmission exclusive par câble coaxial en bus',
                'Le passage de jeton déterministe mondial',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TCP/IP a été conçu pour interconnecter des réseaux hétérogènes grâce à la **commutation de paquets** : chaque paquet IP est acheminé indépendamment vers sa destination.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Pile TCP/IP',
            stepTheme: 'blue',
            stepTitle: 'Les quatre couches du modèle TCP/IP et leur correspondance OSI',
            paragraphText:
              'Le modèle TCP/IP condense les 7 niveaux OSI en 4 couches opérationnelles centrées sur le couple gagnant IP + TCP/UDP.\n' +
              '• **Couche 4 — Application** (= OSI 5 + 6 + 7) : protocoles directement utilisés par les logiciels (`HTTP, SMTP, FTP, TFTP, DNS, DHCP, SSH`).\n' +
              '• **Couche 3 — Transport** (= OSI 4) : dialogue bout en bout entre applications identifiées par un **numéro de port**, segmentation/réassemblage (`TCP` et `UDP`).\n' +
              '• **Couche 2 — Internet** (= OSI 3) : adressage logique (`IPv4/IPv6`), routage sans connexion et messages de contrôle (`ICMP`, `ARP`).\n' +
              '• **Couche 1 — Accès réseau** (= OSI 1 + 2) : implémentation libre selon la technologie locale (`Ethernet`, `Wi-Fi`, `PPP`, fibre optique) pour porter les paquets IP sur le support physique.\n' +
              'Exemple : le protocole **DNS** appartient à la couche Application TCP/IP, **UDP** à la couche Transport, **IP** à la couche Internet et **Ethernet** à la couche Accès réseau.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Modèle TCP/IP (4 couches) en correspondance avec le modèle OSI (7 couches)',
              caption: 'Chaque couche TCP/IP regroupe une ou plusieurs couches du modèle OSI et porte ses protocoles standards.',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'TCP/IP 4', title: 'Application  ↔  OSI L7 + L6 + L5', subtitle: 'HTTP/HTTPS, DNS, DHCP, SMTP, IMAP, FTP, TFTP, SSH', color: 'violet' },
                  { badge: 'TCP/IP 3', title: 'Transport  ↔  OSI L4', subtitle: 'TCP (connecté fiable) • UDP (non connecté rapide) • Numéros de ports', color: 'blue' },
                  { badge: 'TCP/IP 2', title: 'Internet  ↔  OSI L3', subtitle: 'IPv4 / IPv6 (adressage logique & routage) • ICMP • ARP', color: 'green' },
                  { badge: 'TCP/IP 1', title: 'Accès réseau  ↔  OSI L2 + L1', subtitle: 'Ethernet (IEEE 802.3), Wi-Fi (802.11), adresses MAC, cuivre/fibre/radio', color: 'orange' },
                ],
              },
            },
            keyRule:
              'Ne confonds pas la couche « Internet » (couche 2 de TCP/IP = couche 3 OSI) avec le réseau mondial Internet !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Quelles couches du modèle OSI correspondent ensemble à la couche **Accès réseau** du modèle TCP/IP ?',
              options: [
                'Couches 5, 6 et 7',
                'Couches 3 et 4',
                'Couches 1 (Physique) et 2 (Liaison de données)',
                'Couches 2 et 3',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La couche **Accès réseau** de TCP/IP regroupe les fonctions des couches **1 (Physique)** et **2 (Liaison de données)** du modèle OSI (support physique, trames, adresses MAC).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Indépendance',
            stepTheme: 'violet',
            stepTitle: 'Le modèle en « sablier » d’Internet : pourquoi IP unifie tout',
            paragraphText:
              'Les architectes d’Internet décrivent souvent TCP/IP comme un **sablier** : large en haut (des centaines d’applications), large en bas (dizaines de technologies physiques), et étroit au milieu autour d’un unique protocole universel : **IP**.\n' +
              '• **Indépendance vis-à-vis du support** : IP ne se soucie pas que le paquet voyage sur cuivre Ethernet, Wi-Fi, fibre optique, 4G/5G ou satellite (*IP over everything*).\n' +
              '• **Liberté d’innovation applicative** : de nouvelles applications (streaming, blockchain, visioconférence, paiement mobile) peuvent naître en couche Application sans jamais changer les routeurs IP ni les câbles.\n' +
              '• **Modularité** : passer du Wi-Fi à la 5G sur son smartphone change uniquement la couche Accès réseau, tandis que la couche Internet et les applications continuent de fonctionner.\n' +
              'Exemple : un même appel vidéo traverse successivement du Wi-Fi chez toi, de la fibre optique chez ton FAI, un câble sous-marin et de la 5G chez ton correspondant — tout est unifié par IP !',
            keyRule:
              'IP est le dénominateur commun universel du modèle TCP/IP : toute technologie d’accès réseau sait transporter des paquets IP, et toute application Internet repose dessus.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Pourquoi la couche **Accès réseau** du modèle TCP/IP laisse-t-elle son implémentation libre au concepteur du réseau local ?',
              options: [
                'Parce que TCP/IP ne fonctionne pas sur les réseaux locaux.',
                'Parce qu’elle a pour seule contrainte de savoir transporter des paquets IP sur le support choisi (Ethernet, Wi-Fi, fibre, etc.), rendant IP indépendant du matériel.',
                'Parce qu’elle ne nécessite aucun matériel physique.',
                'Parce qu’elle remplace le protocole IP.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La couche Accès réseau adapte simplement le paquet IP à la technologie physique/liaison utilisée sur le réseau local (Ethernet, Wi-Fi, cellulaire…), assurant l’indépendance d’IP vis-à-vis du support.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Encapsulation TCP/IP',
            stepTheme: 'green',
            stepTitle: 'Suivre les en-têtes exacts ajoutés à chaque couche TCP/IP',
            paragraphText:
              'Lorsqu’une application envoie des données (`GET /index.html`), chaque couche TCP/IP ajoute un en-tête précis que l’on peut observer en réel dans un analyseur de trafic comme **Wireshark**.\n' +
              '• **1. Données applicatives** : message HTTP brut.\n' +
              '• **2. En-tête Transport (TCP ou UDP)** : ajoute `Port source` (ex. `51420`) et `Port destination` (ex. `80` ou `443`) + numéros de séquence/acquittement → forme un **Segment** (TCP) ou **Datagramme** (UDP).\n' +
              '• **3. En-tête Internet (IP)** : ajoute `IP source` (ex. `192.168.1.25`) et `IP destination` (ex. `104.21.14.8`), TTL et protocole supérieur → forme un **Paquet IP**.\n' +
              '• **4. En-tête + Queue Liaison (Ethernet)** : ajoute `MAC destination`, `MAC source`, `EtherType` (`0x0800` pour IPv4) et le code de contrôle d’erreur **FCS** en fin de trame → forme une **Trame Ethernet**.\n' +
              'Exemple : la trame Ethernet est la seule couche usuelle qui ajoute à la fois un **en-tête** au début ET une **remorque (FCS/CRC)** à la fin !',
            keyRule:
              'Structure emboîtée sur le fil : `[En-tête Ethernet | En-tête IP | En-tête TCP | Données Applicatives | FCS Ethernet]`.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Quel champ de l’en-tête **Transport** permet d’identifier précisément l’application destinataire (par exemple le serveur web vs le serveur mail) sur une même machine ?',
              options: [
                'L’adresse MAC de 48 bits',
                'Le numéro de port (source et destination)',
                'Le masque de sous-réseau',
                'Le champ FCS de fin de trame',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adresse IP identifie la machine sur le réseau, mais c’est le **numéro de port** (couche Transport) qui identifie précisément le processus applicatif cible sur cette machine (ex. 80/443 pour le Web, 25 pour SMTP).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Comparaison critique',
            stepTheme: 'orange',
            stepTitle: 'Modèle OSI vs Modèle TCP/IP : ne pas confondre modèle et implémentation',
            paragraphText:
              'Les étudiants confondent souvent le statut théorique du modèle OSI avec la réalité opérationnelle de TCP/IP.\n' +
              '• **Modèle OSI (7 couches)** : conçu **avant** les protocoles comme un **modèle de référence pédagogique et normatif** ; il sépare très proprement Physique/Liaison et Session/Présentation/Application, ce qui le rend idéal pour l’enseignement et le dépannage.\n' +
              '• **Modèle TCP/IP (4 couches)** : issu de l’expérience concrète d’ARPANET ; ses protocoles existaient **avant** la formalisation du modèle ; c’est l’architecture effective de tout l’Internet moderne.\n' +
              '• **Modèle hybride à 5 couches (pratique d’ingénierie)** : les administrateurs combinent souvent les deux en parlant de : `1 Physique`, `2 Liaison`, `3 Réseau (IP)`, `4 Transport (TCP/UDP)`, `5/7 Application`.\n' +
              'Exemple : même dans un réseau TCP/IP, les ingénieurs continuent de dire « switch de niveau 2 » et « routeur de niveau 3 » en référence directe aux numéros du modèle OSI !',
            keyRule:
              'Dans le vocabulaire professionnel, « couche 2 » et « couche 3 » renvoient toujours à la numérotation **OSI** (Liaison = L2, Réseau = L3), même lorsque l’on administre un réseau TCP/IP !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Laquelle de ces affirmations compare correctement le modèle **OSI** et le modèle **TCP/IP** ?',
              options: [
                'OSI comporte 4 couches et TCP/IP comporte 7 couches.',
                'OSI est un modèle de référence en 7 couches défini par l’ISO, tandis que TCP/IP est un modèle pratique en 4 couches effectivement déployé sur Internet.',
                'TCP/IP ne possède pas de couche Transport.',
                'Les deux modèles sont mutuellement incompatibles et sans correspondance.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'OSI (ISO, 7 couches) est le modèle de référence théorique ; TCP/IP (4 couches, issu d’ARPANET) est la pile opérationnelle d’Internet, et ses couches correspondent directement à des regroupements de couches OSI.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'slate',
            stepTitle: 'Classer les protocoles majeurs dans la pile TCP/IP',
            paragraphText:
              'Être capable de placer instantanément n’importe quel protocole dans sa couche TCP/IP (et son équivalent OSI) est une compétence centrale.\n' +
              '• **Couche Application (OSI 5–7)** : `HTTP/HTTPS` (Web), `DNS` (résolution de noms), `DHCP` (attribution auto d’IP), `SMTP/IMAP/POP3` (messagerie), `FTP/TFTP` (fichiers), `SSH` (administration sécurisée).\n' +
              '• **Couche Transport (OSI 4)** : `TCP` (fiable, connecté) et `UDP` (léger, sans connexion).\n' +
              '• **Couche Internet (OSI 3)** : `IPv4`, `IPv6`, `ICMP` (utilisé par `ping` et `traceroute`), `ARP` (résolution IP → MAC à la frontière L2/L3).\n' +
              '• **Couche Accès réseau (OSI 1–2)** : `Ethernet (IEEE 802.3)`, `Wi-Fi (IEEE 802.11)`, `PPP`, `VLAN (802.1Q)`.\n' +
              'Exemple : lors d’un simple `ping www.google.com`, l’hôte utilise d’abord **DNS** (Application / UDP), puis **ARP** (réseau local), puis **ICMP** encapsulé dans **IP** (Internet) sur **Ethernet/Wi-Fi** (Accès réseau).',
            keyRule:
              'Maîtrise le tri rapide : `HTTP/DNS/DHCP/SMTP/SSH` = Application ; `TCP/UDP` = Transport ; `IP/ICMP` = Internet ; `Ethernet/Wi-Fi` = Accès réseau.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Parmi les listes suivantes, laquelle ne contient QUE des protocoles appartenant à la couche **Application** du modèle TCP/IP ?',
              options: [
                'HTTP, DNS, DHCP, SSH',
                'TCP, UDP, HTTP, FTP',
                'IP, ICMP, SMTP, DNS',
                'Ethernet, Wi-Fi, SSH, TFTP',
              ],
              correctAnswerIndex: 0,
              explanation:
                '`HTTP`, `DNS`, `DHCP` et `SSH` sont tous des protocoles de couche Application. Les autres options mélangent Transport (`TCP, UDP`), Internet (`IP, ICMP`) ou Accès réseau (`Ethernet, Wi-Fi`).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Couche Liaison, IEEE 802, Ethernet, Wi-Fi, Switch & VLAN
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch3',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Réseaux & Services',
    title: 'Chapitre 3 — Couche Liaison de données : IEEE 802, Ethernet, Wi-Fi, Switch et VLAN',
    summary:
      'Comité IEEE 802 (sous-couches LLC 802.2 et MAC 802.3), méthodes d’accès (CSMA/CD, CSMA/CA, Token Ring 802.5, Token Bus 802.4), adresse MAC 48 bits, trame Ethernet (64 à 1 518 octets), Ethernet commuté (table MAC du Switch), Wi-Fi 802.11 et VLAN 802.1Q.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch3_p1',
        order: 1,
        title: 'Normes IEEE 802, sous-couches LLC (802.2) / MAC et méthodes d’accès au média',
        summary:
          'Maîtriser la division de la couche 2 par l’IEEE 802 (LLC1/LLC2/LLC3 et MAC) et comparer les méthodes d’accès aléatoires (CSMA/CD, CSMA/CA) et déterministes (Token Ring / Token Bus).',
        conceptExplanation:
          'Le comité **IEEE 802** (*Institute of Electrical and Electronics Engineers*) normalise les couches **1 (Physique)** et **2 (Liaison de données)** pour les LAN et MAN. Il divise la couche Liaison en deux sous-couches complémentaires :\n' +
          '• **Sous-couche supérieure LLC (*Logical Link Control*, IEEE 802.2)** : implémentée au niveau **logiciel** (pilote de la carte réseau), elle assure l’interface avec la couche Réseau (L3) et propose 3 services : **LLC1** (mode non connecté, sans acquittement — utilisé par Ethernet/TCP-IP), **LLC2** (mode connecté avec contrôle de flux/séquence et acquittement — Token Ring) et **LLC3** (non connecté avec acquittement — réseaux industriels).\n' +
          '• **Sous-couche inférieure MAC (*Medium Access Control*)** : implémentée au niveau **matériel** sur la carte réseau, elle assure l’**encapsulation des trames** (délimitation, adressage MAC, détection d’erreurs) et le **contrôle d’accès au support**.\n\n' +
          'Les grandes **méthodes d’accès** au support partagé sont : **CSMA/CD** (Ethernet partagé / IEEE 802.3 : écoute + détection de collision), **CSMA/CA** (Wi-Fi / IEEE 802.11 : écoute + évitement de collision), **Token Ring** (IEEE 802.5 : passage déterministe d’un jeton sur anneau, sans collision) et **Token Bus** (IEEE 802.4, historiquement General Motors, aujourd’hui désuète).',
        formulas: [
          {
            name: 'Subdivision IEEE 802 de la couche Liaison (L2)',
            formula: '\\text{Couche 2 (Liaison)} = \\underbrace{\\text{LLC (IEEE 802.2, logiciel)}}_{\\text{interface L3 : LLC1/2/3}} + \\underbrace{\\text{MAC (matériel, carte réseau)}}_{\\text{trame, adresse MAC, accès support}}',
            note: 'Les normes phares : 802.2 (LLC), 802.3 (Ethernet), 802.4 (Token Bus), 802.5 (Token Ring), 802.11 (Wi-Fi), 802.1Q (VLAN).',
          },
        ],
        keyRule:
          'LLC (802.2) est logicielle et indépendante du matériel ; MAC est matérielle (gravée sur la carte réseau) et dépend directement de la technologie (802.3 Ethernet vs 802.11 Wi-Fi).',
        workedExample: {
          title: 'Comparaison entre CSMA/CD (Ethernet filaire partagé) et CSMA/CA (Wi-Fi)',
          statement:
            'Pourquoi le Wi-Fi (IEEE 802.11) utilise-t-il **CSMA/CA** (évitement de collision) au lieu de **CSMA/CD** (détection de collision) utilisé dans Ethernet partagé ?',
          methodSteps: [
            'En Ethernet filaire (CSMA/CD), la carte écoute le câble en même temps qu’elle émet : si une collision survient, la tension électrique anormale est détectée immédiatement, les deux postes arrêtent et attendent un délai aléatoire (*backoff*).',
            'En radio Wi-Fi, la puissance du signal émis par l’antenne locale est des millions de fois plus forte que celle d’un signal distant : l’antenne ne peut pas écouter simultanément pendant qu’elle émet (et deux clients éloignés peuvent ne pas s’entendre — problème du « nœud caché »).',
            'CSMA/CA évite donc les collisions en amont grâce à des temps d’attente aléatoires, des accusés de réception (`ACK`) systématiques et l’échange optionnel `RTS/CTS`.',
          ],
          conclusion:
            'CSMA/CD détecte et répare la collision après coup sur fil ; CSMA/CA la prévient en amont sur ondes radio.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'IEEE 802',
            stepTheme: 'blue',
            stepTitle: 'Le comité IEEE 802 : sous-couche LLC (802.2) vs sous-couche MAC',
            paragraphText:
              'Pour que la couche Réseau (IP) fonctionne identiquement sur Ethernet, Wi-Fi ou Token Ring, le comité **IEEE 802** a scindé la couche Liaison de données (L2) en deux sous-couches aux responsabilités bien tranchées.\n' +
              '• **LLC (*Logical Link Control*, IEEE 802.2)** : sous-couche supérieure, **logicielle** (pilote de la carte réseau), indépendante du support ; elle aiguille les paquets entre la couche Réseau (IPv4/IPv6) et la sous-couche MAC.\n' +
              '• **MAC (*Medium Access Control*)** : sous-couche inférieure, **matérielle** (puce de la carte réseau) ; elle délimite les trames, gère l’adressage physique MAC, vérifie les erreurs (CRC) et pilote l’accès au support.\n' +
              '• **Famille 802.X** : `802.2` (LLC), `802.3` (Ethernet), `802.4` (Token Bus), `802.5` (Token Ring), `802.11` (Wi-Fi), `802.1Q` (VLAN).\n' +
              'Exemple : quand tu passes d’un câble Ethernet (802.3) au Wi-Fi (802.11), seule la sous-couche MAC et la couche Physique changent ; LLC et IP restent transparents.',
            keyRule:
              'IEEE 802 couvre uniquement les couches **1 (Physique)** et **2 (Liaison = LLC + MAC)** du modèle OSI.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Quelles sont les deux sous-couches dans lesquelles le comité **IEEE 802** divise la couche Liaison de données (couche 2 OSI) ?',
              options: [
                'TCP et UDP',
                'LLC (Logical Link Control) et MAC (Medium Access Control)',
                'IP et ICMP',
                'Session et Présentation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le comité IEEE 802 divise la couche 2 en deux sous-couches : la sous-couche supérieure logicielle **LLC (802.2)** et la sous-couche inférieure matérielle **MAC**.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Services LLC',
            stepTheme: 'violet',
            stepTitle: 'Les trois modes de service de la sous-couche LLC (LLC1, LLC2, LLC3)',
            paragraphText:
              'Selon le degré de fiabilité exigé au niveau de la liaison locale, la norme IEEE 802.2 définit trois classes de service pour la sous-couche LLC.\n' +
              '• **LLC Type 1 (`LLC1`)** : mode **non connecté, sans acquittement** ni contrôle supplémentaire — simple aiguillage léger des datagrammes vers la couche 3 (c’est le mode standard des réseaux Ethernet/IP, car TCP gère déjà la fiabilité en couche 4).\n' +
              '• **LLC Type 2 (`LLC2`)** : mode **connecté avec acquittement**, contrôle de séquence et contrôle de flux (historiquement utilisé par Token Ring).\n' +
              '• **LLC Type 3 (`LLC3`)** : mode **non connecté avec acquittement de trame**, ajouté ultérieurement pour les besoins temps réel des **réseaux industriels**.\n' +
              'Exemple : dans un automate d’usine nécessitant la confirmation immédiate d’un ordre sans lourdeur d’établissement de session, **LLC3** offre un compromis optimal.',
            keyRule:
              'Retiens le trio : `LLC1` = non connecté sans ACK ; `LLC2` = connecté avec ACK + flux/séquence ; `LLC3` = non connecté avec ACK (industriel).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Quel mode de service **LLC (IEEE 802.2)** fonctionne en mode **non connecté avec acquittement de trame**, spécialement conçu pour les réseaux industriels ?',
              options: [
                'LLC1',
                'LLC2',
                'LLC3',
                'CSMA/CD',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`LLC1` est non connecté sans acquittement ; `LLC2` est connecté avec acquittement et contrôle de flux ; `LLC3` est non connecté avec acquittement de trame, créé pour les réseaux industriels.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'CSMA/CD',
            stepTheme: 'blue',
            stepTitle: 'Méthode d’accès CSMA/CD (Ethernet partagé, IEEE 802.3)',
            paragraphText:
              'Lorsque plusieurs stations partagent un même support (topologie logique en bus ou réseau relié par un hub), il faut une règle pour arbitrer qui a le droit de parler.\n' +
              '• **CSMA (*Carrier Sense Multiple Access*)** : avant d’émettre, chaque station **écoute la porteuse** ; si le média est occupé, elle diffère son émission.\n' +
              '• **CD (*Collision Detection*)** : si deux stations éloignées constatent le silence au même instant et émettent simultanément, leurs signaux se percutent (**collision**). Elles détectent la collision, stoppent l’émission, envoient un signal de bourrage (*jam*) et attendent chacune un **délai aléatoire** avant de réessayer.\n' +
              '• **Limitation** : plus le nombre de postes sur le même domaine de collision grandit, plus les collisions se multiplient et effondrent le débit utile — d’où le remplacement des hubs par des switches en Full-Duplex !\n' +
              'Exemple : CSMA/CD ressemble à une discussion polie autour d’une table : on écoute avant de parler, et si deux personnes parlent en même temps, elles se taisent et attendent un court instant aléatoire.',
            keyRule:
              'CSMA/CD = Écouter avant d’émettre + Détecter les collisions en cours d’émission + Attendre un délai aléatoire avant retransmission (méthode probabiliste).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Que signifie le sigle **CSMA/CD** utilisé historiquement dans Ethernet partagé (IEEE 802.3) ?',
              options: [
                'Carrier Sense Multiple Access with Collision Detection (accès multiple avec écoute de la porteuse et détection de collision)',
                'Circuit Switching Multiple Access with Collision Deletion',
                'Carrier Signal Modulation Access with Channel Division',
                'Control System Media Access with Central Dispatch',
              ],
              correctAnswerIndex: 0,
              explanation:
                'CSMA/CD (*Carrier Sense Multiple Access / Collision Detection*) impose d’écouter le média avant d’émettre et de détecter toute collision afin de différer la retransmission d’un temps aléatoire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'CSMA/CA',
            stepTheme: 'violet',
            stepTitle: 'Méthode d’accès CSMA/CA adaptée au Wi-Fi (IEEE 802.11)',
            paragraphText:
              'Sur un réseau sans fil Wi-Fi, les ondes radio se propagent dans l’air et rendent la détection directe de collision quasi impossible pour une carte radio en cours d’émission.\n' +
              '• **CSMA/CA (*Collision Avoidance*)** : remplace la détection (*CD*) par l’**évitement préalable de collision** (*CA*).\n' +
              '• **Mécanisme** : la station écoute le canal radio ; même s’il est libre, elle attend un délai aléatoire (*backoff*) avant d’émettre afin de limiter le risque de départ simultané. Le récepteur confirme chaque trame bien reçue par un accusé de réception (`ACK`) ; faute d’`ACK`, l’émetteur suppose une collision et retransmet.\n' +
              '• **Option `RTS/CTS`** (*Request To Send / Clear To Send*) : permet de réserver le canal auprès du point d’accès pour résoudre le problème des stations trop éloignées pour s’entendre entre elles.\n' +
              'Exemple : dans un amphithéâtre connecté sur un seul point d’accès Wi-Fi, CSMA/CA partage le temps d’antenne entre les 80 smartphones présents.',
            keyRule:
              'Ethernet partagé (802.3) → **CSMA/CD** (détection) ; Wi-Fi (802.11) → **CSMA/CA** (évitement + acquittement ACK).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Quelle variante de la méthode d’accès CSMA est spécifiquement utilisée par les réseaux locaux sans fil **Wi-Fi (IEEE 802.11)** ?',
              options: [
                'CSMA/CD (Collision Detection)',
                'CSMA/CA (Collision Avoidance)',
                'Token Ring (IEEE 802.5)',
                'Token Bus (IEEE 802.4)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les réseaux Wi-Fi (IEEE 802.11) emploient **CSMA/CA** (*Collision Avoidance* — évitement de collision) car un émetteur radio ne peut pas détecter fiablement une collision pendant qu’il émet.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Méthodes déterministes',
            stepTheme: 'blue',
            stepTitle: 'Passage de jeton : Token Ring (IEEE 802.5) et Token Bus (IEEE 802.4)',
            paragraphText:
              'À l’opposé des méthodes aléatoires CSMA où des collisions peuvent survenir, les méthodes à **passage de jeton** sont **déterministes** : elles garantissent un temps d’accès borné et **aucune collision**.\n' +
              '• **Token Ring (IEEE 802.5 — anneau logique)** : un petit message spécial appelé **jeton (*Token*)** circule en permanence dans un sens unique et prend deux états (**libre** ou **occupé**). Seul le nœud qui capture le jeton libre a le droit d’émettre ; il passe le jeton à l’état occupé, transmet sa trame, puis le libère.\n' +
              '• **Token Bus (IEEE 802.4 — bus à jeton)** : conçu historiquement par **General Motors** pour automatiser ses usines automobiles sur un câble physique en bus ; le jeton circule d’adresse en adresse décroissante (formant un anneau logique). Cette norme est aujourd’hui **désuète**.\n' +
              '• **Victoire d’Ethernet** : bien que Token Ring évitât les collisions, la simplicité, le faible coût et l’arrivée d’Ethernet commuté Full-Duplex ont assuré la domination mondiale d’IEEE 802.3.\n' +
              'Exemple : le jeton fonctionne comme un « bâton de parole » en réunion : une seule personne parle à la fois, rendant toute collision impossible.',
            keyRule:
              'Token Ring (802.5) et Token Bus (802.4) sont des méthodes **déterministes sans collision** ; Ethernet (802.3) s’est imposé grâce à son coût réduit et à la commutation Full-Duplex.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Dans la méthode d’accès **Token Ring (IEEE 802.5)**, quelle condition est nécessaire pour qu’une station ait le droit d’émettre sur le réseau ?',
              options: [
                'Détecter deux collisions consécutives sur le câble.',
                'Recevoir et capturer le jeton (*Token*) lorsqu’il est à l’état libre.',
                'Attendre l’autorisation d’un serveur DNS externe.',
                'Envoyer une trame broadcast simultanément avec toutes les autres stations.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En Token Ring (méthode déterministe), seul le poste en possession du jeton libre a le droit d’émettre ; il le marque « occupé » le temps de sa transmission, empêchant toute collision.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Chronologie',
            stepTheme: 'slate',
            stepTitle: 'Évolution historique d’Ethernet : de Xerox (1973) à l’Ethernet commuté Gigabit',
            paragraphText:
              'Né en **1973** dans les laboratoires **Xerox** sous l’impulsion du **Dr Robert Metcalfe**, Ethernet est passé d’une expérience de laboratoire à l’épine dorsale des LAN et data centers mondiaux.\n' +
              '• **1973 (Xerox)** : premier Ethernet sur câble coaxial épais, débit de $10\\text{ Mbit/s}$ et portée de $500\\text{ m}$.\n' +
              '• **1980 (Consortium DIX : DEC, Intel, Xerox)** : publication d’Ethernet I puis **Ethernet II**, toujours au cœur des réseaux TCP/IP actuels.\n' +
              '• **1983 (IEEE 802.3)** : normalisation officielle par l’IEEE, couvrant la couche Physique et la sous-couche MAC.\n' +
              '• **De l’Ethernet partagé à l’Ethernet commuté** : abandon du bus coaxial et des hubs (partagés, Half-Duplex, CSMA/CD) au profit de la paire torsadée/fibre sur **switch** (Ethernet commuté, Full-Duplex, débits de $1\\text{ Gbit/s}$, $10\\text{ Gbit/s}$ jusqu’à $400\\text{ Gbit/s}$).\n' +
              'Exemple : chaque saut générationnel d’Ethernet s’est accompagné d’un nouveau câblage, d’un débit multiplié par 10 et d’une portée adaptée.',
            keyRule:
              'Ethernet couvre la **couche Physique (L1)** et la **sous-couche MAC (L2)** ; son évolution majeure est le passage d’Ethernet partagé (Hub + CSMA/CD) à Ethernet commuté (Switch + Full-Duplex).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Quels constructeurs formaient le consortium **DIX** ayant publié la spécification **Ethernet II** en 1980 (base d’IEEE 802.3 en 1983) ?',
              options: [
                'Dell, IBM et Xiaomi',
                'DEC, Intel et Xerox',
                'Cisco, Oracle et Apple',
                'Google, Meta et Nokia',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Après la conception initiale d’Ethernet par Robert Metcalfe chez Xerox (1973), le consortium **DIX (DEC, Intel, Xerox)** publia Ethernet I puis **Ethernet II** en 1980, normalisé en **IEEE 802.3** en 1983.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch3_p2',
        order: 2,
        title: 'Adresse MAC (48 bits), trame Ethernet (64–1 518 octets) et équipements OSI',
        summary:
          'Décrypter la structure hexadécimale d’une adresse MAC (OUI + numéro constructeur), l’anatomie complète d’une trame Ethernet et le rôle exact des équipements L1, L2 et L3.',
        conceptExplanation:
          'Chaque interface réseau Ethernet ou Wi-Fi possède une identité physique unique au monde gravée en usine : l’**adresse MAC** (*Media Access Control*), codée sur **48 bits (6 octets)** et écrite en **12 chiffres hexadécimaux** (ex. `00:1A:2B:3C:4D:5E`). Les **24 premiers bits (3 octets)** forment l’**OUI** (*Organizationally Unique Identifier*, attribué par l’IEEE au constructeur) et les **24 derniers bits** le numéro de série unique de la carte. L’adresse MAC de diffusion locale (*Broadcast*) est **`FF:FF:FF:FF:FF:FF`**.\n\n' +
          'Les données de couche 2 circulent dans une **trame Ethernet** (Ethernet II ou IEEE 802.3) dont la taille réglementaire est comprise entre **64 octets minimum** et **1 518 octets maximum** (1 522 octets avec étiquette VLAN 802.1Q) : en-tête de 14 octets (`MAC Dest 6o | MAC Src 6o | Type/Longueur 2o`), charge utile de **46 à 1 500 octets** (MTU = 1 500 octets), et contrôle d’erreur **FCS/CRC de 4 octets** en fin de trame.',
        formulas: [
          {
            name: 'Bilan exact de la taille d’une trame Ethernet II',
            formula: '\\text{Trame} = \\underbrace{6\\text{ (MAC Dst)} + 6\\text{ (MAC Src)} + 2\\text{ (EtherType)}}_{14\\text{ octets}} + \\underbrace{46 \\text{ à } 1500\\text{ octets}}_{\\text{Données (MTU = 1500)}} + \\underbrace{4\\text{ octets}}_{\\text{FCS}} = 64 \\text{ à } 1518\\text{ octets}',
            note: 'Si les données font moins de 46 octets, un bourrage (padding) complète la trame jusqu’à 64 octets minimum.',
          },
          {
            name: 'Anatomie d’une adresse MAC sur 48 bits',
            formula: '\\text{MAC (48 bits = 6 octets)} = \\underbrace{\\text{OUI (24 bits, constructeur)}}_{\\text{ex. } 00:1A:2B} : \\underbrace{\\text{NIC (24 bits, n° série)}}_{\\text{ex. } 3C:4D:5E}',
            note: 'Représente 2^48 ≈ 281 474 milliards d’adresses physiques possibles.',
          },
        ],
        keyRule:
          'Adresse MAC = 48 bits (6 octets, 12 hexadécimaux, portée strictement locale) ; Trame Ethernet = 64 à 1 518 octets (MTU de données = 1 500 octets, contrôlée par FCS 4 octets).',
        workedExample: {
          title: 'Lecture d’une trame Ethernet capturée et distinction des équipements L1/L2/L3',
          statement:
            'Une carte réseau envoie un paquet IPv4 de `30 octets` vers l’adresse de diffusion locale. Quelle sera l’adresse MAC destination, le champ EtherType et la taille finale de la trame Ethernet II émise ?',
          methodSteps: [
            'Diffusion locale (Broadcast L2) → adresse MAC destination = **`FF:FF:FF:FF:FF:FF`**.',
            'Paquet de couche 3 = IPv4 → champ `EtherType` (2 octets) = **`0x0800`** (`0x0806` pour ARP, `0x86DD` pour IPv6).',
            'Charge utile = `30 octets < 46 octets` : Ethernet ajoute automatiquement **`16 octets` de bourrage (*padding*)** pour atteindre `46 octets` de données.',
            'Taille finale de la trame : `14 (en-tête) + 46 (données + padding) + 4 (FCS) = 64 octets` (taille minimale réglementaire).',
          ],
          conclusion:
            'La trame mesure exactement `64 octets`, avec MAC destination `FF:FF:FF:FF:FF:FF` et EtherType `0x0800`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Adresse MAC',
            stepTheme: 'blue',
            stepTitle: 'Structure de l’adresse MAC sur 48 bits (OUI + identifiant carte)',
            paragraphText:
              'Sur un réseau local Ethernet ou Wi-Fi, deux machines voisines ne s’identifient pas d’abord par leur nom, mais par l’adresse physique gravée sur leur carte réseau.\n' +
              '• **Format** : **48 bits = 6 octets**, notés en **12 symboles hexadécimaux** (`0–9`, `A–F`) séparés par deux-points ou tirets (ex. `D4:3D:7E:91:0B:A2`).\n' +
              '• **Découpage OUI / NIC** : les **24 premiers bits** (3 premiers octets) forment l’**OUI** attribué par l’IEEE au fabricant (Cisco, Intel, Apple, TP-Link…) ; les **24 derniers bits** identifient de manière unique la carte chez ce fabricant.\n' +
              '• **Broadcast MAC** : l’adresse `FF:FF:FF:FF:FF:FF` (tous les 48 bits à `1`) s’adresse à toutes les cartes du même LAN.\n' +
              'Exemple : sous Windows `ipconfig /all` (ou Linux/macOS `ip link`), la ligne « Adresse physique » affiche précisément cette adresse MAC à 6 octets.',
            keyRule:
              'Une adresse MAC est codée sur **48 bits (6 octets)** en hexadécimal (`0–9, A–F`) : toute lettre au-delà de `F` (comme `G` ou `Z`) rend immédiatement une adresse MAC invalide !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Parmi ces quatre chaînes, laquelle est une **adresse MAC valide** sur 48 bits ?',
              options: [
                '192.168.1.45',
                '00:1A:2B:3C:4D:5G',
                'A4:5E:60:C1:8F:09',
                'A4:5E:60:C1',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`A4:5E:60:C1:8F:09` comporte bien 6 octets (12 chiffres) uniquement en hexadécimal (`0–9`, `A–F`). `192.168.1.45` est une IPv4 ; `5G` contient un caractère non hexadécimal (`G`) ; `A4:5E:60:C1` n’a que 4 octets (32 bits).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Trame Ethernet',
            stepTheme: 'blue',
            stepTitle: 'Anatomie complète de la trame Ethernet II et limites 64–1 518 octets',
            paragraphText:
              'La norme Ethernet définit précisément l’ordre et la taille des champs d’une trame afin que toute carte réseau puisse la décoder matériellement à plusieurs gigabits par seconde.\n' +
              '• **Préambule + SFD (8 octets, hors comptage des 64–1518 o)** : synchronise l’horloge du récepteur et annonce le début de la trame.\n' +
              '• **En-tête L2 (14 octets)** : `MAC Destination (6 o)` en tout premier (pour que le switch décide vite où aiguiller !), `MAC Source (6 o)`, puis `EtherType` (Ethernet II : `0x0800` IPv4, `0x0806` ARP, `0x86DD` IPv6) ou `Longueur` (IEEE 802.3).\n' +
              '• **Charge utile (46 à 1 500 octets)** : le paquet IP transporté (`MTU = 1 500 octets`), complété par du *padding* s’il pèse moins de 46 octets.\n' +
              '• **FCS (*Frame Check Sequence*, 4 octets)** : somme de contrôle CRC-32 ; si la vérification échoue à l’arrivée, la trame corrompue est silencieusement détruite.\n' +
              'Exemple : `14 + 46 + 4 = 64 octets` (minimum) et `14 + 1500 + 4 = 1518 octets` (maximum).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Anatomie de la trame Ethernet II & Repères des équipements par couche OSI',
              caption: 'Champs de la trame (64 à 1 518 octets) et synthèse comparative des équipements réseau (L1, L2, L3, L4–L7).',
              tableData: {
                headers: ['Équipement', 'Couche OSI', 'PDU manipulée', 'Adresse lue', 'Rôle principal'],
                rows: [
                  ['Répéteur / Hub', 'Couche 1 (Physique)', 'Bit (signal)', 'Aucune', 'Régénère et diffuse sur tous les ports (1 dom. collision)'],
                  ['Pont / Switch', 'Couche 2 (Liaison)', 'Trame Ethernet', 'Adresse MAC (48 bits)', 'Commute vers le bon port via table MAC (1 dom. collision/port)'],
                  ['Routeur', 'Couche 3 (Réseau)', 'Paquet IP', 'Adresse IP (32/128 bits)', 'Interconnecte des réseaux distincts (routage, bloque broadcasts)'],
                  ['Pare-feu (Firewall)', 'Couches 3 à 7', 'Paquet / Segment / App', 'IP, Ports, Protocoles', 'Filtre et sécurise le trafic selon une politique de sécurité'],
                ],
              },
            },
            keyRule:
              'Taille réglementaire d’une trame Ethernet standard : **64 octets minimum** (sinon trame *runt* rejetée) et **1 518 octets maximum** (sinon trame géante *jumbo* rejetée).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Quelles sont les tailles **minimale** et **maximale** normalisées d’une trame Ethernet standard (hors préambule et étiquette VLAN) ?',
              options: [
                '32 octets minimum et 512 octets maximum',
                '64 octets minimum et 1 518 octets maximum',
                '128 octets minimum et 2 048 octets maximum',
                '16 octets minimum et 1 024 octets maximum',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une trame Ethernet standard comporte 14 octets d’en-tête + 46 à 1 500 octets de données + 4 octets de FCS, soit exactement **64 octets minimum** et **1 518 octets maximum**.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Contrôle d’erreur',
            stepTheme: 'violet',
            stepTitle: 'Détection d’erreurs en couche 2 : le champ FCS (CRC-32)',
            paragraphText:
              'Un parasite électrique sur un câble ou une interférence radio peut inverser un bit (`0` → `1`) en cours de trajet. La couche Liaison détecte instantanément cette corruption.\n' +
              '• **Principe du FCS (*Frame Check Sequence*)** : l’émetteur applique un calcul polynomial (CRC sur 32 bits = 4 octets) sur l’ensemble de la trame et inscrit l’empreinte obtenue dans les 4 derniers octets.\n' +
              '• **Vérification à la réception** : le switch ou la carte réseau destinataire recalcule exactement la même formule sur la trame reçue et compare le résultat au champ FCS.\n' +
              '• **Action en cas d’erreur** : si les deux valeurs diffèrent, la trame est **rejetée et supprimée** — sur Ethernet (LLC1), c’est ensuite la couche Transport (TCP) qui détectera l’absence d’acquittement et demandera une retransmission.\n' +
              'Exemple : un câble RJ45 mal serti près d’un néon génère des milliers d’erreurs FCS/CRC visibles dans les statistiques du port du switch.',
            keyRule:
              'Ethernet détecte les trames corrompues grâce au **FCS (4 octets)** et les détruit, sans les corriger lui-même (fiabilité déléguée à TCP en couche 4).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Comment réagit une carte réseau Ethernet qui reçoit une trame dont le recalcul du **FCS (CRC-32)** ne correspond pas à la valeur inscrite en fin de trame ?',
              options: [
                'Elle transmet la trame corrompue à l’application telle quelle.',
                'Elle rejette et détruit immédiatement la trame erronée.',
                'Elle diffuse la trame en broadcast à tous les postes du réseau.',
                'Elle modifie l’adresse IP source pour réparer l’erreur.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une trame dont le FCS est invalide a subi une altération physique durant la transmission : la couche Liaison la rejette et la supprime aussitôt.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Hub vs Switch',
            stepTheme: 'orange',
            stepTitle: 'Concentrateur (Hub, L1) vs Commutateur (Switch, L2) : différence décisive',
            paragraphText:
              'Visuellement, un hub et un switch se ressemblent comme deux gouttes d’eau (un boîtier à 8, 24 ou 48 ports RJ45), mais leur comportement réseau est radicalement opposé !\n' +
              '• **Hub (Concentrateur, Couche 1)** : appareil « aveugle » sans table d’adresses. Tout signal électrique arrivant sur le port 1 est **répété sur TOUS les autres ports**. La bande passante est partagée entre tous les postes, le mode est Half-Duplex et tous les ports forment **1 seul domaine de collision**.\n' +
              '• **Switch (Commutateur, Couche 2)** : appareil intelligent qui lit l’adresse MAC destination et transfère la trame **uniquement vers le port du destinataire**. Chaque port bénéficie de **100 % du débit en Full-Duplex** et constitue son propre **domaine de collision isolé**.\n' +
              '• **Confidentialité** : sur un hub, n’importe quel PC peut espionner le trafic de ses voisins ; sur un switch, le trafic unicast entre A et B n’est jamais envoyé au port de C.\n' +
              'Exemple : sur un hub 100 Mbit/s à 10 postes, les 10 postes se partagent 100 Mbit/s ; sur un switch 100 Mbit/s, 5 paires de postes peuvent échanger chacune à 100 Mbit/s en simultané !',
            keyRule:
              'Hub (L1) = diffusion électrique aveugle, débit partagé, 1 seul domaine de collision ; Switch (L2) = aiguillage ciblé par adresse MAC, débit dédié Full-Duplex, 1 domaine de collision par port.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Sur un **switch** à 24 ports (sans VLAN) relié à 24 ordinateurs, combien compte-t-on de **domaines de collision** et de **domaines de broadcast** ?',
              options: [
                '1 domaine de collision et 24 domaines de broadcast',
                '24 domaines de collision et 1 domaine de broadcast',
                '1 domaine de collision et 1 domaine de broadcast',
                '24 domaines de collision et 24 domaines de broadcast',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque port d’un switch isole son propre **domaine de collision** (donc 24 domaines de collision), mais un switch sans VLAN propage les trames de diffusion sur tous ses ports (donc **1 seul domaine de broadcast**).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'MAC vs IP',
            stepTheme: 'green',
            stepTitle: 'Pourquoi a-t-on besoin À LA FOIS d’une adresse MAC (L2) et d’une adresse IP (L3) ?',
            paragraphText:
              'Une question fondamentale des débutants est : « Pourquoi chaque ordinateur possède-t-il deux adresses différentes (MAC et IP) ? » Une analogie simple éclaire tout !\n' +
              '• **Adresse MAC (L2) = numéro de carte d’identité (CNI)** : fixe, liée au matériel, plate (sans hiérarchie géographique). Elle permet de remettre une trame **d’un voisin direct au voisin suivant** sur le même réseau local.\n' +
              '• **Adresse IP (L3) = adresse postale hiérarchique (Pays / Ville / Rue / Maison)** : logique, modifiable selon l’endroit où l’on se connecte. Sa structure hiérarchique (partie réseau + partie hôte) permet aux routeurs d’acheminer le paquet à travers le monde sans mémoriser des milliards de cartes réseau !\n' +
              '• **Coopération** : quand tu te connectes avec ton PC portable au campus puis chez toi, ton adresse **MAC ne change pas**, mais ton adresse **IP change** pour correspondre au nouveau réseau.\n' +
              'Exemple : le protocole **ARP** fait le pont entre les deux en découvrant l’adresse MAC correspondant à une adresse IP locale.',
            keyRule:
              'Adresse MAC = identité matérielle locale (saut par saut sur un LAN) ; Adresse IP = localisation logique hiérarchique globale (bout en bout à travers les routeurs).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Si tu emportes ton ordinateur portable de ton domicile à Abidjan vers une salle de travail universitaire et que tu te connectes au réseau local du campus, que deviennent ton adresse MAC et ton adresse IP ?',
              options: [
                'L’adresse MAC change automatiquement et l’adresse IP reste identique.',
                'L’adresse MAC reste identique (liée à la carte réseau) tandis que l’adresse IP change pour s’adapter au réseau du campus.',
                'Les deux adresses disparaissent.',
                'Ni l’adresse MAC ni l’adresse IP ne changent jamais.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adresse MAC est liée physiquement à la carte réseau et demeure inchangée ; l’adresse IP est logique et est réattribuée (par DHCP) dans la plage du nouveau réseau local rejoint.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Ethernet II vs 802.3',
            stepTheme: 'violet',
            stepTitle: 'Distinction entre trame Ethernet II (DIX) et trame IEEE 802.3',
            paragraphText:
              'Dans la pratique des analyseurs réseau, deux formats de trames Ethernet cohabitent sur le même câble sans jamais se gêner grâce à une astuce numérique très ingénieuse.\n' +
              '• **Champ de 2 octets après les adresses MAC** : dans **Ethernet II** (utilisé par IPv4, IPv6, ARP), ce champ s’appelle **`EtherType`** et sa valeur est toujours **$\\ge 1536$ (`0x0600`)** (ex. `0x0800` = 2048 pour IPv4).\n' +
              '• **Dans IEEE 802.3 (avec en-tête LLC)** : ce même champ de 2 octets indique la **`Longueur`** des données, qui ne peut jamais dépasser la MTU de **`1500` (`0x05DC`)** !\n' +
              '• **Coexistence automatique** : toute carte réseau lit ces 2 octets : si la valeur vaut $\\le 1500$, c’est une trame IEEE 802.3 ; si elle vaut $\\ge 1536$, c’est une trame Ethernet II !\n' +
              'Exemple : les protocoles de gestion de switches (comme Spanning Tree STP) utilisent IEEE 802.3 + LLC, tandis que tout le trafic Web/IP utilise Ethernet II.',
            keyRule:
              'Valeur du champ 2 octets $\\le 1500$ → Longueur (trame IEEE 802.3 + LLC) ; valeur $\\ge 1536$ (`0x0600`) → EtherType (trame Ethernet II, ex. `0x0800` IPv4).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Comment une carte réseau distingue-t-elle immédiatement une trame **Ethernet II** (transportant IPv4) d’une trame **IEEE 802.3** ?',
              options: [
                'Par la couleur du câble RJ45 utilisé.',
                'En examinant le champ de 2 octets situé après l’adresse MAC source : valeur ≥ 1536 (0x0600) pour EtherType (Ethernet II), valeur ≤ 1500 pour la Longueur (IEEE 802.3).',
                'Par le fait qu’Ethernet II n’a pas d’adresse MAC destination.',
                'Parce qu’IEEE 802.3 ne possède pas de champ FCS.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La plage `≤ 1500` est réservée à la longueur (IEEE 802.3) et la plage `≥ 1536 (0x0600)` est réservée aux codes EtherType d’Ethernet II (`0x0800` IPv4, `0x0806` ARP, `0x86DD` IPv6).',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch3_p3',
        order: 3,
        title: 'Ethernet commuté (table MAC du Switch), Wi-Fi (802.11) et VLAN (802.1Q)',
        summary:
          'Comprendre l’auto-apprentissage dynamique de la table MAC d’un switch, les deux modes du Wi-Fi (infrastructure vs ad hoc) et la segmentation logique par VLAN.',
        conceptExplanation:
          'Un **switch Ethernet** construit automatiquement sa **table de commutation (table MAC / CAM)** qui associe chaque port physique aux adresses MAC qui y sont connectées :\n' +
          '1. **Apprentissage (*Learning*)** : à chaque trame reçue sur un port, le switch enregistre l’**adresse MAC source** associée à ce port.\n' +
          '2. **Décision (*Forwarding / Flooding*)** : il cherche l’**adresse MAC destination** dans sa table. Si elle est connue, il envoie la trame **uniquement sur le port correspondant** (*Forwarding*) ; si elle est inconnue ou s’il s’agit d’un broadcast (`FF:FF:FF:FF:FF:FF`), il la diffuse sur **tous les autres ports** (*Flooding*).\n\n' +
          'Le **Wi-Fi (IEEE 802.11)** remplace le câble par des ondes radio (de $11\\text{ Mbit/s}$ historiques jusqu’à plusieurs Gbit/s avec Wi-Fi 6/7) selon deux modes : **mode Infrastructure** (tous les clients passent par un **Point d’Accès AP**) et **mode Ad hoc** (connexion directe Pair-à-Pair sans AP).\n\n' +
          'Enfin, les **VLAN (*Virtual LAN*, norme IEEE 802.1Q)** permettent de découper logiquement un même switch physique en plusieurs réseaux locaux virtuels isolés (ex. VLAN Étudiants, VLAN Administration, VLAN Comptabilité), créant des **domaines de broadcast séparés** et renforçant la sécurité.',
        formulas: [
          {
            name: 'Étiquetage VLAN IEEE 802.1Q (Trunk)',
            formula: '\\text{Trame Ethernet (1518 o)} + \\text{Tag 802.1Q (4 octets, VID sur 12 bits)} = 1522\\text{ octets}',
            note: '12 bits de VLAN ID (VID) permettent d’identifier jusqu’à 2^12 = 4 096 VLANs (utilisables : 1 à 4 094).',
          },
        ],
        keyRule:
          'Le switch apprend grâce à la **MAC source** et aiguille grâce à la **MAC destination** ! Et deux VLANs différents ne peuvent communiquer qu’en passant par un équipement de **couche 3** (routeur ou switch L3).',
        workedExample: {
          title: 'Trace d’apprentissage d’un switch neuf entre 3 PC (A, B, C)',
          statement:
            'Un switch vient d’être allumé (table MAC vide) avec PC-A sur Port 1, PC-B sur Port 2 et PC-C sur Port 3. Décrire le comportement du switch lorsque PC-A envoie une trame à PC-B, puis lorsque PC-B répond à PC-A.',
          methodSteps: [
            '**Trame 1 (A → B sur Port 1)** : le switch lit la MAC source (`MAC_A`) et inscrit `Port 1 ↔ MAC_A` dans sa table.',
            'Il cherche `MAC_B` dans sa table : absente ! Il effectue un **Flooding** (inondation) sur les ports 2 et 3 (jamais sur le port 1 d’entrée). PC-C ignore la trame ; PC-B l’accepte.',
            '**Trame 2 (B → A sur Port 2)** : le switch lit la MAC source (`MAC_B`) et inscrit `Port 2 ↔ MAC_B` dans sa table.',
            'Il cherche `MAC_A` dans sa table : trouvée sur `Port 1` ! Il effectue un **Forwarding unicast** strictement vers le Port 1 (PC-C ne reçoit rien).',
          ],
          conclusion:
            'En deux trames seulement, le switch a appris automatiquement les ports de A et B sans aucune configuration manuelle.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Table MAC',
            stepTheme: 'green',
            stepTitle: 'Auto-apprentissage et commutation dans un switch Ethernet',
            paragraphText:
              'Un switch Ethernet fonctionne dès qu’on le branche (*Plug & Play*) grâce à son mécanisme continu d’auto-apprentissage dynamique.\n' +
              '• **Règle 1 — Apprendre sur la SOURCE** : dès qu’une trame entre par le port $P$, le switch associe `(MAC_Source → Port P)` dans sa table CAM (avec une durée de vie typique de 300 secondes).\n' +
              '• **Règle 2 — Aiguiller sur la DESTINATION** : si `MAC_Dest` est connue sur un port $Q \\neq P$, la trame part **uniquement sur $Q$** (*Forwarding*) ; si $Q = P$, la trame est filtrée ; si `MAC_Dest` est inconnue ou égale à `FF:FF:FF:FF:FF:FF`, la trame est inondée sur tous les ports sauf $P$ (*Flooding*).\n' +
              '• **Protection contre les boucles (STP)** : si l’on relie deux switches par deux câbles redondants sans précaution, une tempête de broadcast sature le LAN en une seconde — le protocole **Spanning Tree (STP, IEEE 802.1D)** bloque logiquement un lien de secours.\n' +
              'Exemple : un switch qui reçoit une réponse unicast connaît déjà la destination et l’envoie sans bruit vers l’unique port concerné.',
            keyRule:
              'Un switch apprend sur l’adresse **MAC source**, aiguille sur l’adresse **MAC destination**, et ne renvoie jamais une trame par le port sur lequel elle vient d’arriver.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p3_q1',
              type: 'mcq',
              prompt: 'Un switch reçoit sur son **Port 3** une trame envoyée par `MAC_X` à destination de `MAC_Y`. Sa table MAC est vide. Que fait exactement le switch ?',
              options: [
                'Il détruit la trame car sa table est vide.',
                'Il apprend `MAC_X → Port 3`, puis diffuse (*flood*) la trame sur tous les autres ports (sauf le Port 3).',
                'Il apprend `MAC_Y → Port 3` et renvoie la trame sur le Port 3.',
                'Il demande l’adresse MAC à un serveur DNS.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le switch apprend toujours l’adresse **MAC source** (`MAC_X`) sur le port d’entrée (`Port 3`). Comme la destination (`MAC_Y`) est absente de sa table, il inonde tous les ports sauf le port d’entrée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Wi-Fi 802.11',
            stepTheme: 'blue',
            stepTitle: 'Réseaux locaux sans fil Wi-Fi : mode Infrastructure vs mode Ad hoc',
            paragraphText:
              'Le **Wi-Fi (norme IEEE 802.11)** est la déclinaison sans fil d’Ethernet reposant sur les ondes radio (bandes $2{,}4\\text{ GHz}$, $5\\text{ GHz}$ et $6\\text{ GHz}$) et la méthode d’accès **CSMA/CA**.\n' +
              '• **Évolution des débits** : de $11\\text{ Mbit/s}$ (802.11b) et $54\\text{ Mbit/s}$ (802.11g/a) à plusieurs gigabits/s (Wi-Fi 5 `802.11ac`, Wi-Fi 6 `802.11ax`, Wi-Fi 7 `802.11be` dépassant $7\\text{ Gbit/s}$).\n' +
              '• **Mode Infrastructure (BSS / ESS)** : tous les clients sans fil (laptops, smartphones) se connectent via un **Point d’Accès (AP)** qui diffuse un nom de réseau (**SSID**) et fait le pont vers le réseau filaire Ethernet.\n' +
              '• **Mode Ad hoc (IBSS)** : les terminaux sans fil se connectent directement les uns aux autres en **Pair-à-Pair (P2P)** sans aucun point d’accès central, chaque poste jouant à la fois le rôle de client et de point d’accès.\n' +
              'Exemple : le Wi-Fi du campus ou de ta box fibre opère en mode **Infrastructure** ; un partage direct entre deux ordinateurs en déplacement sans routeur opère en mode **Ad hoc**.',
            keyRule:
              'Mode Infrastructure = passage obligatoire par un Point d’Accès (AP) ; Mode Ad hoc = connexion directe Pair-à-Pair entre clients sans AP.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p3_q2',
              type: 'mcq',
              prompt: 'Quelle différence distingue le mode **Infrastructure** du mode **Ad hoc** dans un réseau sans fil Wi-Fi (IEEE 802.11) ?',
              options: [
                'Le mode Infrastructure utilise des câbles coaxiaux et le mode Ad hoc utilise la fibre.',
                'En mode Infrastructure les clients passent par un Point d’Accès (AP), tandis qu’en mode Ad hoc ils se connectent directement entre eux en Pair-à-Pair sans AP.',
                'Le mode Ad hoc utilise CSMA/CD et le mode Infrastructure utilise Token Ring.',
                'Le mode Infrastructure est limité à 2 machines maximum.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En mode **Infrastructure**, un Point d’Accès (AP) centralise les connexions sans fil et les relie au LAN filaire ; en mode **Ad hoc**, les clients communiquent directement en P2P sans AP.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'VLAN',
            stepTheme: 'blue',
            stepTitle: 'Segmentation logique par VLAN (Virtual LAN) : sécurité et performance',
            paragraphText:
              'Dans une entreprise ou une université, connecter les étudiants, la comptabilité et la direction sur le même LAN plat pose un double problème : saturation par les broadcasts et risques d’intrusion.\n' +
              '• **Définition d’un VLAN** : partitionnement **logique** (par configuration logicielle sur les switches) d’une infrastructure physique unique en plusieurs réseaux locaux indépendants, indépendamment de l’emplacement physique des bureaux.\n' +
              '• **1 VLAN = 1 domaine de broadcast = 1 sous-réseau IP** : un broadcast émis dans le `VLAN 10 (Comptabilité)` ne parvient jamais aux postes du `VLAN 20 (Invités)`, même branchés sur le même switch !\n' +
              '• **Avantages** : **sécurité** (cloisonnement des flux sensibles), **performance** (réduction des broadcasts) et **souplesse** (changer un employé d’étage ne demande qu’une commande logicielle, sans recâbler).\n' +
              'Exemple : sur un switch 48 ports au siège d’une fintech, les ports 1–16 sont dans `VLAN 10 (Direction)`, 17–36 dans `VLAN 20 (Développeurs)` et 37–48 dans `VLAN 30 (Wi-Fi Invités)`.',
            keyRule:
              'Un VLAN segmente un switch physique en plusieurs switches virtuels isolés : chaque VLAN constitue un domaine de broadcast et un sous-réseau IP distincts.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p3_q3',
              type: 'mcq',
              prompt: 'Sur un même switch physique, PC-1 appartient au **VLAN 10** et PC-2 appartient au **VLAN 20**. Si PC-1 envoie une trame de **Broadcast**, PC-2 la reçoit-il ?',
              options: [
                'Oui, car ils sont branchés sur le même switch physique.',
                'Non, car chaque VLAN constitue un domaine de broadcast strictement isolé au niveau 2.',
                'Oui, uniquement si le câble mesure moins de 10 mètres.',
                'Oui, si PC-1 utilise Wi-Fi Ad hoc.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’un des objectifs fondamentaux des VLANs est d’isoler les domaines de broadcast : une trame broadcast émise dans le VLAN 10 ne franchit jamais la frontière logique vers le VLAN 20.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'IEEE 802.1Q',
            stepTheme: 'violet',
            stepTitle: 'Ports Access vs Ports Trunk et étiquetage IEEE 802.1Q',
            paragraphText:
              'Lorsque les mêmes VLANs (ex. VLAN 10 et VLAN 20) s’étendent sur plusieurs étages reliés par plusieurs switches, comment faire transiter tous les VLANs sur un seul câble inter-switches ?\n' +
              '• **Port Access (Accès)** : relié à un terminal (PC, imprimante) ; il appartient à **un seul VLAN** et véhicule des trames Ethernet classiques **non étiquetées**.\n' +
              '• **Port Trunk (Agrégation)** : relié entre deux switches (ou entre un switch et un routeur) ; il transporte simultanément **plusieurs VLANs** sur un seul lien physique.\n' +
              '• **Norme IEEE 802.1Q (Tagging)** : sur un lien Trunk, le switch insère une étiquette (*tag*) de **4 octets** dans l’en-tête Ethernet contenant le numéro du VLAN (**VID sur 12 bits**, soit jusqu’à 4 094 VLANs), portant la taille maximale de trame à **1 522 octets**.\n' +
              'Exemple : le switch d’arrivée lit le tag `VID = 20`, retire l’étiquette de 4 octets, et livre la trame normale uniquement aux ports Access du VLAN 20.',
            keyRule:
              'Port Access = 1 seul VLAN (trames normales vers les PC) ; Port Trunk = multi-VLANs entre switches/routeur grâce au tag **IEEE 802.1Q** (4 octets).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Quelle norme IEEE définit l’étiquetage (*tagging*) de 4 octets permettant de faire transiter plusieurs VLANs simultanément sur un lien **Trunk** entre deux switches ?',
              options: [
                'IEEE 802.3',
                'IEEE 802.11',
                'IEEE 802.1Q',
                'IEEE 802.5',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La norme **IEEE 802.1Q** insère un marqueur de 4 octets (incluant l’identifiant VLAN sur 12 bits) dans les trames Ethernet circulant sur un lien Trunk inter-switches.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Routage Inter-VLAN',
            stepTheme: 'orange',
            stepTitle: 'Communication inter-VLAN : pourquoi un équipement de couche 3 est requis',
            paragraphText:
              'Un piège fréquent est de penser que deux PC dans des VLANs différents sur un même switch peuvent se faire un `ping` directement au niveau 2.\n' +
              '• **Cloisonnement strict au niveau 2** : deux VLANs sont deux réseaux logiques distincts (ex. VLAN 10 = `192.168.10.0/24` et VLAN 20 = `192.168.20.0/24`). Un switch purement niveau 2 ne commute JAMAIS directement de l’un à l’autre.\n' +
              '• **Routage Inter-VLAN** : pour autoriser (et filtrer !) des échanges contrôlés entre le VLAN 10 et le VLAN 20, il faut un équipement de **couche 3** : soit un **routeur** externe connecté par un lien Trunk (*Router-on-a-Stick* avec sous-interfaces), soit un **switch de niveau 3 (L3)** intégrant une fonction de routage matérielle.\n' +
              '• **Bénéfice sécurité** : le routeur/pare-feu peut autoriser le VLAN Étudiants à consulter uniquement le serveur web du VLAN Serveurs (port 443), tout en bloquant tout accès au VLAN Comptabilité !\n' +
              'Exemple : dans une université, les étudiants accèdent à la plateforme de notes mais jamais au serveur de paie de l’administration.',
            keyRule:
              'Deux hôtes dans le **même VLAN** communiquent directement en couche 2 (Switch) ; deux hôtes dans des **VLANs différents** doivent obligatoirement passer par un **routeur (couche 3)**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p3_q5',
              type: 'mcq',
              prompt: 'De quel équipement a-t-on obligatoirement besoin pour permettre à un ordinateur du **VLAN 10** (`192.168.10.5/24`) de communiquer avec un serveur du **VLAN 20** (`192.168.20.10/24`) ?',
              options: [
                'Un répéteur de couche 1',
                'Un concentrateur (Hub)',
                'Un équipement de couche 3 (routeur ou switch L3) assurant le routage inter-VLAN',
                'Un câble droit Cat 6 supplémentaire entre les deux PC',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Chaque VLAN correspondant à un réseau logique IP distinct, seule une fonction de **routage de couche 3** (routeur ou switch L3) peut acheminer des paquets d’un VLAN vers un autre.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Sécurité Wi-Fi & L2',
            stepTheme: 'green',
            stepTitle: 'Bonnes pratiques de sécurité en couche Liaison (WPA2/WPA3, filtrage MAC)',
            paragraphText:
              'La couche Liaison étant le point d’entrée physique ou radio dans le réseau local, sa sécurisation constitue la première ligne de défense.\n' +
              '• **Chiffrement Wi-Fi obligatoire** : bannir définitivement **WEP** (cassable en quelques minutes) ; déployer **WPA2-AES** ou **WPA3** (avec authentification individuelle 802.1X/RADIUS en entreprise ou sur campus).\n' +
              '• **Sécurité des ports Switch (*Port Security*)** : limiter le nombre d’adresses MAC autorisées par prise murale RJ45 afin d’empêcher le branchement d’un switch pirate ou une attaque par saturation de table CAM (*MAC Flooding*).\n' +
              '• **Limite du filtrage MAC seul** : une adresse MAC pouvant être usurpée logiciellement (*MAC Spoofing*), le filtrage MAC ne remplace jamais un vrai chiffrement WPA3 ni une authentification forte.\n' +
              'Exemple : sur un réseau Wi-Fi universitaire sécurisé, chaque étudiant s’authentifie avec son identifiant unique (802.1X) plutôt qu’avec un mot de passe unique affiché au mur.',
            keyRule:
              'En Wi-Fi, utilise WPA2-AES ou WPA3 (jamais WEP ni réseau ouvert pour du trafic interne) ; en filaire, combine VLANs + Port Security sur les switches.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p3_q6',
              type: 'mcq',
              prompt: 'Pourquoi le **filtrage par adresse MAC** seul sur un point d’accès Wi-Fi est-il jugé insuffisant comme mesure de sécurité ?',
              options: [
                'Parce que les appareils Wi-Fi n’ont pas d’adresse MAC.',
                'Parce que l’adresse MAC circule en clair dans les trames et peut facilement être usurpée logiciellement (*MAC Spoofing*).',
                'Parce que le filtrage MAC bloque automatiquement le protocole IP.',
                'Parce qu’une adresse MAC change toutes les secondes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un attaquant peut écouter les adresses MAC autorisées qui transitent en clair dans les en-têtes radio et cloner l’une d’elles sur sa carte (*MAC Spoofing*). Le chiffrement WPA2/WPA3 est indispensable.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 4 : Couche Réseau — IPv4/IPv6, CIDR, FLSM/VLSM, ARP/ICMP & Routage
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch4',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Réseaux & Services',
    title: 'Chapitre 4 — Couche Réseau : IPv4/IPv6, masques CIDR, sous-réseaux FLSM/VLSM, ARP/ICMP et routage',
    summary:
      'Protocole IP (sans connexion, best effort, indépendant du support), IPv4 (32 bits) vs IPv6 (128 bits), classes A/B/C/D/E, adresses privées RFC 1918 et spéciales, masques CIDR (/n), découpage en sous-réseaux FLSM/VLSM, ARP, ICMP et routage statique/dynamique.',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch4_p1',
        order: 1,
        title: 'Protocole IP (IPv4/IPv6), classes d’adresses A–E, adresses privées et spéciales',
        summary:
          'Maîtriser les 3 propriétés d’IP, l’adressage IPv4 sur 32 bits, les 5 classes (décimal et binaire), les plages privées RFC 1918 et les adresses réservées.',
        conceptExplanation:
          'Le protocole **IP (*Internet Protocol*)** opère en couche 3 (OSI) / couche Internet (TCP/IP). Il présente trois caractéristiques fondamentales : (1) **sans connexion** (aucune session préalable avant l’envoi) ; (2) **non fiable / *best effort*** (acheminement au mieux, sans garantie de livraison ni d’ordre — fiabilité assurée par TCP) ; (3) **indépendant du support**. À l’émission il identifie, route et fragmente si nécessaire ; à la réception il vérifie la longueur, contrôle les erreurs d’en-tête, réassemble et remonte au niveau Transport.\n\n' +
          'Une **adresse IPv4** est codée sur **32 bits** (4 octets décimaux entre `0` et `255`, offrant $2^{32} = 4\\,294\\,967\\,296$ adresses) séparés par des points (ex. `192.168.1.77`). Historiquement segmentée en **5 classes** (Unicast A/B/C, Multicast D, Réservée E), elle distingue les **adresses publiques** (gérées par l’**IANA/ICANN** → RIR comme **AFRINIC** pour l’Afrique → FAI) des **adresses privées** (non routables sur Internet : `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) et des **adresses spéciales** (`0.0.0.0` acquisition DHCP, `127.0.0.0/8` dont `127.0.0.1` *localhost* bouclage, `255.255.255.255` diffusion limitée). Face à la pénurie IPv4, **IPv6** offre **128 bits** ($3{,}4 \\times 10^{38}$ adresses) en notation hexadécimale.',
        formulas: [
          {
            name: 'Capacité d’adressage IPv4 vs IPv6',
            formula: '\\text{IPv4 (32 bits)} : 2^{32} = 4\\,294\\,967\\,296 \\qquad ; \\qquad \\text{IPv6 (128 bits)} : 2^{128} \\approx 3{,}4 \\times 10^{38}',
            note: 'En IPv4, chaque octet est un entier dans [0 ; 255] : toute valeur > 255 (ex. 192.168.355.20) est invalide !',
          },
        ],
        keyRule:
          'IP est **sans connexion**, **non fiable (*best effort*)** et **indépendant du support**. Les 3 plages privées à connaître par cœur : `10.0.0.0–10.255.255.255`, `172.16.0.0–172.31.255.255`, `192.168.0.0–192.168.255.255`.',
        workedExample: {
          title: 'Classification et validité de cinq adresses IPv4',
          statement:
            'Analyser chacune des adresses suivantes (validité, classe, publique/privée/spéciale) : (1) `10.25.4.12` ; (2) `172.20.1.5` ; (3) `192.168.355.20` ; (4) `127.0.0.1` ; (5) `230.10.1.1`.',
          methodSteps: [
            '(1) `10.25.4.12` : 4 octets $\\in [0..255]$ → valide ; 1er octet `10` ($0\\dots$ en binaire, $0..127$) → **Classe A**, **Privée** (`10.0.0.0/8`).',
            '(2) `172.20.1.5` : valide ; 1er octet `172` ($10\\dots$, $128..191$) → **Classe B**, **Privée** (car 2e octet `20` $\\in [16..31]$).',
            '(3) `192.168.355.20` : **INVALIDE** car le 3e octet `355` dépasse `255` ($2^8 - 1$).',
            '(4) `127.0.0.1` : valide ; plage `127.0.0.0/8` réservée à l’**adresse de bouclage (*localhost*)** pour les tests internes de la pile TCP/IP (non attribuable à un hôte réseau).',
            '(5) `230.10.1.1` : valide ; 1er octet `230` ($1110\\dots$, $224..239$) → **Classe D (Multicast)**.',
          ],
          conclusion:
            'Chaque octet doit impérativement être compris entre `0` et `255`, et le premier octet (ou les deux premiers pour la plage privée B) détermine immédiatement classe et statut.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Propriétés IP',
            stepTheme: 'blue',
            stepTitle: 'Les trois caractéristiques fondamentales et les rôles du protocole IP',
            paragraphText:
              'Le protocole IP (*Internet Protocol*) assure l’acheminement logique des paquets d’un réseau à un autre en respectant une philosophie volontairement simple et robuste.\n' +
              '• **Sans connexion** : IP n’établit aucune session préalable avec le destinataire avant d’expédier ses paquets.\n' +
              '• **Non fiable (*Best Effort*)** : IP fait « au mieux » mais ne garantit ni que tous les paquets arrivent, ni qu’ils arrivent dans l’ordre (c’est TCP qui ajoute la fiabilité en couche 4).\n' +
              '• **Indépendant du support** : fonctionne aussi bien sur cuivre, fibre, Wi-Fi, 4G/5G que satellite, en **fragmentant** un paquet si le lien suivant a une MTU plus petite.\n' +
              '• **Rôles émission / réception** : encapsuler, router, vérifier l’adressage, fragmenter à l’émission ; vérifier la longueur, contrôler les erreurs d’en-tête, réassembler et désencapsuler à la réception.\n' +
              'Exemple : le champ **TTL (*Time To Live*)** de l’en-tête IPv4 est décrémenté de 1 à chaque routeur traversé ; s’il tombe à 0, le paquet est détruit pour éviter qu’il ne tourne en boucle éternellement.',
            keyRule:
              'IP = **Sans connexion** + **Best Effort (non fiable)** + **Indépendant du support** ; le champ **TTL** empêche les boucles de routage infinies.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p1_q1',
              type: 'mcq',
              prompt: 'Quelles sont les **trois caractéristiques fondamentales** du protocole **IP** ?',
              options: [
                'Connecté, 100 % fiable et exclusivement réservé à Ethernet.',
                'Sans connexion, non fiable (acheminement au mieux / *best effort*) et indépendant du support.',
                'Orienté circuit, chiffré nativement et dépendant de la fibre optique.',
                'Déterministe, à passage de jeton et limité à 5 km.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'IP est par conception **sans connexion**, **non fiable** (*best effort* : pas d’acquittement ni de retransmission au niveau IP) et **indépendant du support** physique sous-jacent.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Classes IPv4',
            stepTheme: 'blue',
            stepTitle: 'Les 5 classes IPv4 (A, B, C, D, E) : décimal, préfixe binaire et masques par défaut',
            paragraphText:
              'Pour structurer les $2^{32}$ adresses IPv4, l’adressage historique par classes a découpé l’espace selon la valeur du **premier octet** (en décimal et en bits de poids fort).\n' +
              '• **Classe A** (`0` à `127`, bit de tête **`0`**) : masque par défaut `255.0.0.0` (`/8`, 1 octet réseau + 3 octets hôtes) — Unicast grands réseaux.\n' +
              '• **Classe B** (`128` à `191`, bits de tête **`10`**) : masque par défaut `255.255.0.0` (`/16`, 2 octets réseau + 2 octets hôtes) — Unicast réseaux moyens.\n' +
              '• **Classe C** (`192` à `223`, bits de tête **`110`**) : masque par défaut `255.255.255.0` (`/24`, 3 octets réseau + 1 octet hôte) — Unicast PME/LAN.\n' +
              '• **Classe D** (`224` à `239`, bits de tête **`1110`**) : **Multicast** (diffusion de groupe).\n' +
              '• **Classe E** (`240` à `255`, bits de tête **`1111`**) : **Réservée** (usage futur / recherche).\n' +
              'Exemple : `195.24.10.8` commence par `195` (`11000011` en binaire, entre 192 et 223) → **Classe C** Unicast.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Référentiel des 5 classes IPv4 et des plages privées (RFC 1918)',
              caption: 'Repères décimaux, bits de tête du 1er octet, masques par défaut et plages privées non routables sur Internet.',
              tableData: {
                headers: ['Classe', '1er octet (déc.)', 'Bits de tête', 'Masque défaut', 'Usage / Plage privée RFC 1918'],
                rows: [
                  ['A', '0 – 127 (1–126 utiles)', '0xxxxxxx', '255.0.0.0 (/8)', 'Unicast • Privée : 10.0.0.0 – 10.255.255.255'],
                  ['B', '128 – 191', '10xxxxxx', '255.255.0.0 (/16)', 'Unicast • Privée : 172.16.0.0 – 172.31.255.255'],
                  ['C', '192 – 223', '110xxxxx', '255.255.255.0 (/24)', 'Unicast • Privée : 192.168.0.0 – 192.168.255.255'],
                  ['D', '224 – 239', '1110xxxx', 'Aucun (groupe)', 'Multicast (IPTV, protocoles de routage)'],
                  ['E', '240 – 255', '1111xxxx', 'Aucun', 'Réservée à un usage futur / expérimental'],
                ],
              },
            },
            keyRule:
              'Unicast = Classes A, B, C ; Multicast = Classe D (`224–239`) ; Réservée = Classe E (`240–255`).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p1_q2',
              type: 'mcq',
              prompt: 'Une adresse IPv4 commence en binaire par les bits **`110...`** (par exemple `200.14.8.1`). À quelle classe appartient-elle et quel est son masque par défaut ?',
              options: [
                'Classe A — 255.0.0.0',
                'Classe B — 255.255.0.0',
                'Classe C — 255.255.255.0',
                'Classe D — Multicast sans masque de classe',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les préfixes binaires du 1er octet sont `0` (A), `10` (B), `110` (C, `192–223`), `1110` (D), `1111` (E). `200` est bien entre `192` et `223` : **Classe C**, masque par défaut `255.255.255.0`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Publiques vs Privées',
            stepTheme: 'violet',
            stepTitle: 'Adresses publiques (IANA/ICANN/AFRINIC) vs adresses privées (RFC 1918)',
            paragraphText:
              'Comme il existe bien plus de $4{,}3$ milliards d’appareils connectés dans le monde, l’Internet moderne sépare strictement les adresses publiques uniques des adresses privées réutilisables.\n' +
              '• **Adresses publiques** : uniques mondialement et routables sur Internet ; allouées hiérarchiquement par l’**IANA** (division de l’**ICANN**) aux registres régionaux **RIR** (**AFRINIC** pour l’Afrique, RIPE NCC pour l’Europe…), puis aux **FAI** (Orange CI, MTN, Moov…), puis aux abonnés.\n' +
              '• **Adresses privées (RFC 1918)** : librement réutilisables dans n’importe quel LAN privé (et bloquées par les routeurs d’Internet) — **`10.0.0.0 – 10.255.255.255`** (A), **`172.16.0.0 – 172.31.255.255`** (B), **`192.168.0.0 – 192.168.255.255`** (C).\n' +
              '• **Piège classique de la classe B privée** : `172.31.5.1` est **privée**, mais `172.32.5.1` ou `172.15.5.1` sont **publiques** !\n' +
              'Exemple : des millions de foyers à Abidjan utilisent tous simultanément `192.168.1.10` en interne, traduite ensuite en IP publique par leur box via **NAT**.',
            keyRule:
              'En classe B privée (`172.16.0.0` à `172.31.255.255`), vérifie impérativement que le **2e octet** est compris entre **16 et 31 inclus** !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p1_q3',
              type: 'mcq',
              prompt: 'Parmi ces quatre adresses IPv4, laquelle est une **adresse PUBLIQUE** (et NON une adresse privée RFC 1918) ?',
              options: [
                '10.250.14.2',
                '172.24.10.5',
                '172.35.10.5',
                '192.168.100.1',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`10.250.14.2` (dans `10.0.0.0/8`), `172.24.10.5` (dans `172.16–31.x.x`) et `192.168.100.1` (dans `192.168.0.0/16`) sont privées. `172.35.10.5` a un 2e octet égal à `35 > 31` : c’est donc une adresse **publique** !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Adresses spéciales',
            stepTheme: 'orange',
            stepTitle: 'Adresses réservées non attribuables à un hôte (`0.0.0.0`, `127.0.0.1`, broadcast)',
            paragraphText:
              'Certaines adresses IPv4 possèdent une signification technique spéciale et ne doivent jamais être configurées manuellement comme adresse IP d’un poste utilisateur.\n' +
              '• **`0.0.0.0`** : désigne « cette machine sans adresse encore attribuée » (utilisée lors d’une requête d’acquisition **DHCP** initiale) ou la **route par défaut** (`0.0.0.0/0`) dans une table de routage.\n' +
              '• **`127.0.0.0/8` (notamment `127.0.0.1` / `localhost`)** : **adresse de bouclage (*loopback*)** permettant à un poste de tester sa propre pile TCP/IP localement sans jamais envoyer de paquet sur le câble.\n' +
              '• **`255.255.255.255`** : **diffusion limitée (*limited broadcast*)** destinée à tous les hôtes du réseau local physique.\n' +
              '• **Première et dernière adresse de chaque plage** : la toute première identifie l’**adresse du réseau** (tous les bits hôtes à `0`), et la toute dernière identifie l’**adresse de broadcast** du réseau (tous les bits hôtes à `1`).\n' +
              'Exemple : sur le réseau `192.168.1.0/24`, `192.168.1.0` (réseau) et `192.168.1.255` (broadcast) sont réservées ; les hôtes reçoivent uniquement `.1` à `.254`.',
            keyRule:
              'Sur tout réseau IPv4, la première adresse (bits hôtes à `0`) est l’adresse réseau et la dernière (bits hôtes à `1`) est le broadcast : aucune des deux n’est attribuable à un PC.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p1_q4',
              type: 'mcq',
              prompt: 'À quoi sert exactement l’adresse **`127.0.0.1`** (`localhost`) dans un système TCP/IP ?',
              options: [
                'À diffuser un paquet à tous les postes du réseau local.',
                'À tester en interne le bon fonctionnement de la pile TCP/IP de la machine locale (adresse de bouclage / *loopback*).',
                'À demander automatiquement une IP à un serveur DHCP.',
                'À joindre le serveur DNS racine mondial.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La plage `127.0.0.0/8` (et en particulier `127.0.0.1` / `localhost`) est l’adresse de **bouclage (*loopback*)** : un `ping 127.0.0.1` vérifie la pile TCP/IP locale sans sortir sur la carte réseau.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'IPv4 vs IPv6',
            stepTheme: 'violet',
            stepTitle: 'En-têtes IPv4 vs IPv6 et migration vers l’adressage 128 bits',
            paragraphText:
              'Face à l’épuisement des $4{,}3$ milliards d’adresses IPv4 publiques (accéléré par les smartphones et l’Internet des Objets), l’IETF a conçu **IPv6**.\n' +
              '• **Taille des adresses** : **32 bits** (4 octets décimaux) en IPv4 contre **128 bits** (8 blocs de 4 chiffres hexadécimaux séparés par `:`, ex. `2001:0db8:85a3::8a2e:0370:7334`) en IPv6 — soit $2^{128} \\approx 3{,}4 \\times 10^{38}$ adresses !\n' +
              '• **Simplification de l’en-tête** : l’en-tête IPv4 a une taille variable (`20` à `60` octets) avec 12 champs dont une somme de contrôle recalculée à chaque routeur et la fragmentation en route ; l’en-tête **IPv6** a une taille **fixe de 40 octets**, simplifié (8 champs), sans checksum L3 ni fragmentation par les routeurs intermédiaires, ce qui accélère le routage matériel.\n' +
              '• **Suppression du Broadcast** : IPv6 remplace le broadcast par du **Multicast** et introduit l’auto-configuration sans état (**SLAAC**) ainsi que le support natif de la sécurité (**IPsec**).\n' +
              'Exemple : l’adresse de bouclage `127.0.0.1` en IPv4 s’écrit simplement **`::1`** en IPv6.',
            keyRule:
              'IPv4 = 32 bits (décimal, en-tête 20–60 o, Broadcast + NAT) ; IPv6 = 128 bits (hexadécimal, en-tête fixe 40 o, plus de Broadcast, espace quasi inépuisable).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p1_q5',
              type: 'mcq',
              prompt: 'Quelle caractéristique technique distingue **IPv6** d’**IPv4** ?',
              options: [
                'IPv6 code les adresses sur 64 bits en notation décimale.',
                'IPv6 code les adresses sur 128 bits en notation hexadécimale et utilise un en-tête simplifié de taille fixe (40 octets).',
                'IPv6 ne fonctionne que sur les réseaux PAN Bluetooth.',
                'IPv6 supprime totalement le routage en couche 3.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'IPv6 étend l’adressage à **128 bits** écrits en hexadécimal (8 groupes de 16 bits) et simplifie le traitement des routeurs grâce à un en-tête **fixe de 40 octets**.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Validation IP & Masque',
            stepTheme: 'orange',
            stepTitle: 'Reconnaître un masque IPv4 valide : règle absolue des bits à 1 contigus',
            paragraphText:
              'Une adresse IPv4 ne vaut rien sans son **masque de sous-réseau** : c’est le masque (codé lui aussi sur 32 bits) qui trace la frontière exacte entre la **partie réseau** (toujours en tête) et la **partie hôte** (toujours en queue).\n' +
              '• **Règle d’or du masque valide** : en binaire, tous les bits à **`1`** (partie réseau) doivent être **strictement contigus à gauche**, suivis uniquement de bits à **`0`** (partie hôte) à droite — jamais de `0` coincé entre deux `1` !\n' +
              '• **Valeurs autorisées pour un octet de masque** : uniquement les 9 valeurs cumulatives **`0, 128, 192, 224, 240, 248, 252, 254, 255`** !\n' +
              '• **Exemples valides** : `255.255.128.0` (`/17`), `255.224.0.0` (`/11`), `255.255.255.240` (`/28`).\n' +
              '• **Exemples INVALIDES** : `255.128.255.0` (des `0` dans le 2e octet suivis de `1` dans le 3e octet !), `255.0.224.0`, `255.255.200.0` (`200` n’est pas dans la liste des 9 octets valides).\n' +
              'Exemple : mémoriser les 9 valeurs `0, 128, 192, 224, 240, 248, 252, 254, 255` permet de repérer en 2 secondes un masque invalide !',
            formula: {
              name: 'Les 9 seuls octets possibles d’un masque IPv4',
              formula: '0,\\; 128,\\; 192,\\; 224,\\; 240,\\; 248,\\; 252,\\; 254,\\; 255 \\quad (\\text{de } 0 \\text{ à } 8 \\text{ bits à } 1 \\text{ contigus})',
              note: 'De plus, dès qu’un octet est < 255, TOUS les octets suivants à droite doivent impérativement valoir 0 !',
            },
            keyRule:
              'Un masque IPv4 valide a ses bits à `1` strictement contigus à gauche : chaque octet appartient à `{0, 128, 192, 224, 240, 248, 252, 254, 255}` et aucun octet non nul ne peut suivre un octet `< 255`.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p1_q6',
              type: 'mcq',
              prompt: 'Parmi ces quatre propositions, laquelle est un **masque de sous-réseau IPv4 VALIDE** ?',
              options: [
                '255.128.255.0',
                '255.0.224.0',
                '255.255.224.0',
                '255.255.255.100',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans `255.255.224.0`, en binaire `11111111.11111111.11100000.00000000` (`/19`), tous les bits à `1` sont strictement contigus à gauche suivis de `0`. Les options A et B rompent la contiguïté ; `100` (`01100100`) n’est pas contigu.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch4_p2',
        order: 2,
        title: 'Notation CIDR (`/n`), calcul réseau/broadcast et découpage FLSM / VLSM',
        summary:
          'Maîtriser le ET logique binaire (IP AND Masque), la formule $2^h - 2$ hôtes utilisables, la méthode du « pas magique » et le découpage en sous-réseaux égaux (FLSM) et variables (VLSM).',
        conceptExplanation:
          'La **notation CIDR (*Classless Inter-Domain Routing*)** remplace les classes rigides par un suffixe **`/n`** indiquant le nombre exact de bits à `1` du masque (partie réseau), laissant **$h = 32 - n$ bits** pour la partie hôte.\n\n' +
          'À partir d’une adresse IPv4 et de son masque `/n` :\n' +
          '• **Adresse réseau** = opération bit-à-bit **`IP ET Masque`** (tous les $h$ bits hôtes mis à `0`).\n' +
          '• **Adresse de broadcast** = tous les $h$ bits hôtes mis à `1` (c’est l’adresse juste avant le sous-réseau suivant).\n' +
          '• **Nombre d’adresses hôtes utilisables** = **$2^h - 2$** (on retire l’adresse réseau et l’adresse de broadcast).\n' +
          '• **Découpage en sous-réseaux** : pour créer au moins $S$ sous-réseaux, on **emprunte $k$ bits** à la partie hôte tels que $2^k \\ge S$, donnant le nouveau masque **`/(n + k)`** et le **pas magique** $P = 256 - \\text{octet significatif du masque}$. En **FLSM** (*Fixed Length Subnet Mask*), tous les sous-réseaux ont la même taille ; en **VLSM** (*Variable Length Subnet Mask*), on adapte chaque masque au besoin exact de chaque service en commençant toujours par le **plus grand besoin d’hôtes** !',
        formulas: [
          {
            name: 'Formules fondamentales du Subnetting IPv4',
            formula: 'h = 32 - n \\; ; \\quad N_{\\text{hôtes}} = 2^h - 2 \\; ; \\quad N_{\\text{sous-réseaux}} = 2^k \\; ; \\quad \\text{Pas} = 256 - M_{\\text{signif.}}',
            note: 'Ex. `/26` = `255.255.255.192` → h = 6 bits → 2^6 - 2 = 62 hôtes/SR ; Pas = 256 - 192 = 64 (SR : .0, .64, .128, .192).',
          },
          {
            name: 'Extraction de l’adresse réseau par ET logique',
            formula: '\\text{Adresse Réseau} = \\text{IP} \\;\\&\\; \\text{Masque} \\qquad (1\\&1=1,\\; \\text{sinon } 0)',
            note: 'Deux machines appartiennent au même réseau local si et seulement si elles ont la même adresse réseau après ET logique.',
          },
        ],
        keyRule:
          'Pour ne jamais te tromper en **VLSM**, trie toujours les sous-réseaux du **PLUS GRAND** nombre d’hôtes vers le **PLUS PETIT** avant d’attribuer les plages contiguës !',
        workedExample: {
          title: 'Découpage FLSM de `192.168.10.0/24` en 4 sous-réseaux pour une entreprise',
          statement:
            'Une PME abidjanaise dispose du réseau `192.168.10.0/24` et veut le découper en **4 sous-réseaux égaux** (Direction, Commercial, Technique, Invités). Déterminer le masque CIDR/décimal, le nombre d’hôtes par sous-réseau et les plages exactes.',
          methodSteps: [
            'Nombre de bits à emprunter : on veut $2^k \\ge 4 \\implies k = 2$ bits.',
            'Nouveau masque CIDR : `/24 + 2 = /26`. En décimal, les 2 premiers bits du 4e octet valent $128 + 64 = 192$ → **`255.255.255.192`**.',
            'Bits hôtes restants : $h = 32 - 26 = 6$ bits → $2^6 - 2 = 62$ hôtes utilisables par sous-réseau.',
            'Pas magique sur le 4e octet : $256 - 192 = 64$ → les 4 adresses réseau sont `.0`, `.64`, `.128`, `.192`.',
            'Plages exactes : SR1 (`192.168.10.0/26`, hôtes `.1–.62`, bcast `.63`) ; SR2 (`.64/26`, `.65–.126`, bcast `.127`) ; SR3 (`.128/26`, `.129–.190`, bcast `.191`) ; SR4 (`.192/26`, `.193–.254`, bcast `.255`).',
          ],
          conclusion:
            'Chaque service dispose d’un sous-réseau `/26` de 62 adresses hôtes isolées sans aucun chevauchement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'CIDR',
            stepTheme: 'blue',
            stepTitle: 'Notation CIDR (`/n`) et conversion rapide entre `/n` et décimal',
            paragraphText:
              'La notation **CIDR (`/n`)** remplace avantageusement les anciens masques de classes rigides (qui gaspillaient des millions d’adresses) en précisant directement le nombre `n` de bits réseau.\n' +
              '• **Repères d’octets entiers** : `/8` = `255.0.0.0`, `/16` = `255.255.0.0`, `/24` = `255.255.255.0`.\n' +
              '• **Table express du 4e octet (`/25` à `/30`)** : `/25`→`.128` (126 hôtes), `/26`→`.192` (62 hôtes), `/27`→`.224` (30 hôtes), `/28`→`.240` (14 hôtes), `/29`→`.248` (6 hôtes), `/30`→`.252` (2 hôtes — idéal pour un lien point-à-point entre deux routeurs !).\n' +
              '• **Calcul mental des bits d’un octet** : les poids des 8 bits de gauche à droite sont `128, 64, 32, 16, 8, 4, 2, 1`. Ainsi `/27` = 3 octets pleins (`24` bits) + `3` bits (`128 + 64 + 32 = 224`) → `255.255.255.224`.\n' +
              'Exemple : pour relier deux routeurs en WAN sans gaspiller d’IP, on utilise presque toujours un **`/30`** (`255.255.255.252`), qui offre exactement $2^2 - 2 = 2$ adresses utiles !',
            formula: {
              name: 'Conversion `/n` → Nombre d’hôtes utilisables',
              formula: 'N_{\\text{hôtes}} = 2^{32 - n} - 2',
              note: 'Ex. `/28` → 32 - 28 = 4 bits hôtes → 2^4 - 2 = 14 hôtes utilisables.',
            },
            keyRule:
              'Un lien point-à-point entre 2 routeurs nécessite 2 adresses IP utiles → masque optimal **`/30`** (`255.255.255.252`).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Quel masque en notation décimale pointée correspond au préfixe CIDR **`/27`** et combien d’hôtes utilisables offre-t-il ?',
              options: [
                '255.255.255.192 — 62 hôtes',
                '255.255.255.224 — 30 hôtes',
                '255.255.255.240 — 14 hôtes',
                '255.255.255.224 — 32 hôtes',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`/27` = 24 bits + 3 bits dans le 4e octet (`128 + 64 + 32 = 224`) → `255.255.255.224`. Il reste `h = 32 - 27 = 5` bits hôtes, soit $2^5 - 2 = 32 - 2 = 30$ hôtes utilisables.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'ET logique',
            stepTheme: 'green',
            stepTitle: 'Calculer l’adresse réseau et le broadcast d’une IP quelconque',
            paragraphText:
              'Étant donnée une machine `192.168.5.140/26`, comment déterminer instantanément son adresse réseau, sa plage d’hôtes et son broadcast ? Deux méthodes concordantes existent.\n' +
              '• **Méthode 1 — ET logique binaire (`IP & Masque`)** : sur le 4e octet, `140 = 10001100` et `192 = 11000000`. Le ET bit-à-bit donne `10000000 = 128` → réseau **`192.168.5.128`**.\n' +
              '• **Méthode 2 — Le « pas magique » (ultra-rapide en examen !)** : pour `/26` (`255.255.255.192`), le pas vaut $256 - 192 = 64$. Les multiples de `64` sont `0, 64, 128, 192`. Comme `140` se situe dans `[128 ; 191]`, l’adresse réseau est **`192.168.5.128`** et le broadcast est le suivant moins 1, soit **`192.168.5.191`** !\n' +
              '• **Test de voisinage** : `192.168.5.140/26` et `192.168.5.195/26` sont-elles sur le même réseau ? Non ! `.140` est dans `.128/26` et `.195` est dans `.192/26` — elles devront passer par un **routeur** !\n' +
              'Exemple : le pas magique résout en 10 secondes de tête n’importe quel exercice d’identification de sous-réseau.',
            keyRule:
              'Pas magique $P = 256 - M_{\\text{signif.}}$ : l’adresse réseau est le plus grand multiple de $P$ inférieur ou égal à l’octet de l’IP, et le broadcast est `(réseau suivant - 1)`.',
            konanTip:
              'Piège classique : deux adresses dans la même plage `192.168.5.x` ne sont PAS forcément dans le même réseau si le masque est plus long que `/24` (ex. `/26` ou `/27`) !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p2_q2',
              type: 'mcq',
              prompt: 'Quelles sont l’**adresse réseau** et l’**adresse de broadcast** du sous-réseau contenant l’hôte **`192.168.20.75/26`** (`255.255.255.192`) ?',
              options: [
                'Réseau 192.168.20.0 — Broadcast 192.168.20.255',
                'Réseau 192.168.20.64 — Broadcast 192.168.20.127',
                'Réseau 192.168.20.64 — Broadcast 192.168.20.128',
                'Réseau 192.168.20.72 — Broadcast 192.168.20.79',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour `/26` (`.192`), le pas vaut $256 - 192 = 64$. Les multiples sont `0, 64, 128, 192`. `75` tombe entre `64` et `127` : adresse réseau = **`192.168.20.64`**, broadcast = **`192.168.20.127`** (hôtes utiles `.65` à `.126`).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode FLSM',
            stepTheme: 'green',
            stepTitle: 'Algorithme en 5 étapes du découpage en sous-réseaux (FLSM)',
            paragraphText:
              'Lorsqu’un cahier des charges demande de diviser un réseau de base `/n` en $S$ sous-réseaux de même taille (FLSM — *Fixed Length Subnet Mask*), applique systématiquement cet organigramme en 5 étapes.\n' +
              '• **Étape 1** : trouver le plus petit entier $k$ tel que $2^k \\ge S$ (ex. pour 6 sous-réseaux, $2^2 = 4 < 6$, donc $k = 3$ donnant $8$ sous-réseaux).\n' +
              '• **Étape 2** : calculer le nouveau masque `/(n + k)` et sa valeur décimale.\n' +
              '• **Étape 3** : vérifier la capacité en hôtes $2^{32-(n+k)} - 2$ par sous-réseau.\n' +
              '• **Étape 4** : calculer le pas magique $P = 256 - M_{\\text{signif.}}$ sur l’octet modifié.\n' +
              '• **Étape 5** : lister les sous-réseaux de pas $P$ en pas $P$ (pour chacun : `Réseau`, `1er hôte = Réseau + 1`, `Dernier hôte = Broadcast - 1`, `Broadcast = Suivant - 1`).\n' +
              'Exemple : découper `192.168.1.0/24` en 5 sous-réseaux donne $k = 3$ → `/27` (`.224`), $P = 32$, 8 sous-réseaux de 30 hôtes chacun (`.0, .32, .64, .96, .128, .160, .192, .224`).',
            visualSchema: {
              type: 'flowchart',
              title: 'Méthode complète de découpage en sous-réseaux IPv4 (FLSM)',
              caption: 'Pipeline systématique en 5 étapes garantissant zéro erreur de calcul sur les plages IPv4.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Identifier le besoin S (ou nb hôtes H)', sublabel: 'Trouver k minimal tel que 2^k ≥ S (ou h minimal tel que 2^h − 2 ≥ H)', kind: 'start', color: 'slate' },
                  { label: '2. Calculer le nouveau masque /(n + k)', sublabel: 'Convertir en décimal (octet significatif M ∈ {128..252})', kind: 'process', color: 'blue' },
                  { label: '3. Calculer la capacité utile', sublabel: 'Hôtes par sous-réseau = 2^(32 − (n + k)) − 2', kind: 'process', color: 'violet' },
                  { label: '4. Calculer le Pas magique P', sublabel: 'P = 256 − M (sur l’octet modifié par le masque)', kind: 'process', color: 'orange' },
                  { label: '5. Dresser les plages [Réseau ; Broadcast]', sublabel: 'Multiples de P : 1er hôte = R+1, Dernier = B−1, B = R_suivant−1', kind: 'end', color: 'green' },
                ],
              },
            },
            keyRule:
              'Un découpage crée toujours une puissance de 2 de sous-réseaux ($2^k$) : demander 5 ou 6 sous-réseaux oblige à emprunter $k = 3$ bits (créant 8 sous-réseaux, dont 2 ou 3 en réserve).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p2_q3',
              type: 'mcq',
              prompt: 'On découpe `192.168.100.0/24` pour créer au moins **6 sous-réseaux** égaux (FLSM). Quel nouveau préfixe CIDR obtient-on et combien d’hôtes utiles comporte chaque sous-réseau ?',
              options: [
                '/26 — 62 hôtes par sous-réseau',
                '/27 — 30 hôtes par sous-réseau',
                '/28 — 14 hôtes par sous-réseau',
                '/25 — 126 hôtes par sous-réseau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour 6 sous-réseaux, il faut $2^k \\ge 6 \\implies k = 3$ bits ($2^3 = 8$ sous-réseaux). Nouveau masque : `/24 + 3 = /27`. Bits hôtes restants : $32 - 27 = 5 \\implies 2^5 - 2 = 30$ hôtes par sous-réseau.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode VLSM',
            stepTheme: 'green',
            stepTitle: 'Découpage à taille variable (VLSM) : éliminer le gaspillage d’adresses',
            paragraphText:
              'En FLSM, si un service a besoin de 100 hôtes et un lien routeur de seulement 2 hôtes, imposer un `/25` partout gaspillerait 124 adresses sur le lien routeur ! Le **VLSM (*Variable Length Subnet Mask*)** ajuste chaque masque au plus juste.\n' +
              '• **Règle absolue du VLSM** : toujours classer les besoins par **ordre décroissant de taille** (du plus grand au plus petit) avant d’allouer les sous-réseaux bout à bout.\n' +
              '• **Exemple sur `192.168.1.0/24`** avec 3 besoins : LAN-A (100 hôtes), LAN-B (25 hôtes), Lien WAN (2 hôtes).\n' +
              '  — LAN-A (100 hôtes) : $2^7 - 2 = 126 \\ge 100 \\implies$ `/25` (`192.168.1.0/25`, `.0` à `.127`).\n' +
              '  — LAN-B (25 hôtes) : $2^5 - 2 = 30 \\ge 25 \\implies$ `/27` juste après `.127`, soit `192.168.1.128/27` (`.128` à `.159`).\n' +
              '  — Lien WAN (2 hôtes) : $2^2 - 2 = 2 \\implies$ `/30` juste après `.159`, soit `192.168.1.160/30` (`.160` à `.163`).\n' +
              '• **Économie réalisée** : les adresses `.164` à `.255` restent entièrement libres pour l’expansion future !',
            keyRule:
              'En VLSM, on choisit pour chaque besoin $H$ le plus petit $h$ tel que $2^h - 2 \\ge H$ (masque `/(32 - h)`), en allouant **impérativement du plus grand sous-réseau vers le plus petit** pour respecter l’alignement binaire.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p2_q4',
              type: 'mcq',
              prompt: 'Dans un plan d’adressage **VLSM** sur `192.168.1.0/24`, LAN-A (`100` hôtes) prend `192.168.1.0/25` (`.0–.127`) et LAN-B (`25` hôtes) prend `192.168.1.128/27` (`.128–.159`). Quelle est la plage du 3e sous-réseau LAN-C nécessitant **10 hôtes** ?',
              options: [
                '192.168.1.160/28 (adresses .160 à .175, 14 hôtes utiles)',
                '192.168.1.160/29 (adresses .160 à .167, 6 hôtes utiles)',
                '192.168.1.159/28 (adresses .159 à .174)',
                '192.168.1.160/27 (adresses .160 à .191)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour `10` hôtes, $2^3 - 2 = 6 < 10$ (insuffisant) et $2^4 - 2 = 14 \\ge 10$ → $h = 4$, masque `32 - 4 = /28` (pas de `16`). Démarrant immédiatement après `.159` à `.160` (multiple de 16), on obtient **`192.168.1.160/28`** (`.160` à `.175`).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Sous-réseaux sur 3e octet',
            stepTheme: 'orange',
            stepTitle: 'Subnetting sur un réseau `/16` (Classe B) : travailler sur le 3e octet !',
            paragraphText:
              'Le principe du pas magique fonctionne à l’identique lorsque le masque coupe dans le **3e octet** (préfixes `/17` à `/23`) — seul l’octet qui incrémente change !\n' +
              '• **Exemple sur `172.16.0.0/16` découpé en `/20` (`255.255.240.0`)** : le 3e octet du masque vaut `240` → pas magique $P = 256 - 240 = 16$ **sur le 3e octet** !\n' +
              '• **Liste des sous-réseaux** : `172.16.0.0/20` (broadcast **`172.16.15.255`**), `172.16.16.0/20` (broadcast **`172.16.31.255`**), `172.16.32.0/20` (broadcast `172.16.47.255`), etc.\n' +
              '• **Piège du `.0` et `.255` valides !** : dans `172.16.0.0/20`, l’adresse **`172.16.1.0`** ou **`172.16.2.255`** est une adresse **HÔTE parfaitement VALIDE** (seules `172.16.0.0` et `172.16.15.255` sont réservées) !\n' +
              'Exemple : chaque `/20` contient $2^{12} - 2 = 4\\,094$ hôtes, ce qui convient parfaitement à un grand campus universitaire.',
            keyRule:
              'Un octet final égal à `.0` ou `.255` n’est réservé QUE si TOUS les bits de la partie hôte (sur l’ensemble des octets hôtes) valent simultanément `0` ou `1` !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p2_q5',
              type: 'mcq',
              prompt: 'Dans le sous-réseau **`172.16.16.0/20`** (`255.255.240.0`), quelle est l’**adresse de broadcast** exacte ?',
              options: [
                '172.16.16.255',
                '172.16.31.255',
                '172.16.32.0',
                '172.16.255.255',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur le 3e octet (`240`), le pas vaut $256 - 240 = 16$. Le sous-réseau courant commence à `172.16.16.0`, le suivant commence à `172.16.32.0`. L’adresse juste avant est **`172.16.31.255`** (broadcast).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Agrégation CIDR',
            stepTheme: 'slate',
            stepTitle: 'Agrégation de routes (*Supernetting*) pour alléger les tables de routage',
            paragraphText:
              'L’opération inverse du découpage en sous-réseaux s’appelle l’**agrégation (ou résumé de routes / *Supernetting*)** : elle permet à un routeur d’annoncer plusieurs réseaux contigus sous une seule ligne de table de routage.\n' +
              '• **Principe** : comparer en binaire les préfixes des réseaux à résumer et compter les **bits communs à gauche**.\n' +
              '• **Exemple concret** : résumer les 4 réseaux `192.168.0.0/24`, `192.168.1.0/24`, `192.168.2.0/24` et `192.168.3.0/24`. Les 3es octets en binaire sont `00000000`, `00000001`, `00000010`, `00000011` : les **6 premiers bits** sont identiques (`000000`), soit $16 + 6 = 22$ bits communs → route résumée **`192.168.0.0/22`** !\n' +
              '• **Impact sur Internet** : sans agrégation CIDR, les routeurs cœur d’Internet satureraient leur mémoire RAM avec des dizaines de millions de routes individuelles.\n' +
              'Exemple : un FAI ivoirien annonce à ses pairs internationaux quelques grands blocs agrégés (ex. `/19` ou `/20`) au lieu de milliers de petits `/24`.',
            keyRule:
              'Agrégation CIDR : regrouper $2^k$ réseaux contigus alignés de masque `/n` réduit le masque à `/(n - k)` (ex. 4 × `/24` alignés → 1 × `/22`).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p2_q6',
              type: 'mcq',
              prompt: 'Quelle route CIDR unique résume exactement les deux sous-réseaux contigus **`192.168.4.0/24`** et **`192.168.5.0/24`** ?',
              options: [
                '192.168.4.0/25',
                '192.168.4.0/23',
                '192.168.0.0/16',
                '192.168.5.0/23',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En binaire, `4 = 00000100` et `5 = 00000101` partagent les **7 premiers bits** du 3e octet (`16 + 7 = 23` bits communs). Les deux `/24` s’agrègent donc exactement en **`192.168.4.0/23`**.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch4_p3',
        order: 3,
        title: 'Protocoles ARP, ICMP et principes du routage statique et dynamique',
        summary:
          'Maîtriser la résolution IP → MAC par ARP, le diagnostic réseau par ICMP (`ping`, `traceroute`) et la lecture d’une table de routage (passerelle par défaut, routage statique vs dynamique).',
        conceptExplanation:
          'Pour qu’un paquet IP quitte un PC et atteigne sa destination finale à travers plusieurs routeurs, la couche Réseau s’appuie sur deux protocoles compagnons essentiels et sur le **routage** :\n\n' +
          '• **ARP (*Address Resolution Protocol*)** : sur un réseau local Ethernet/Wi-Fi, un hôte connaît l’**adresse IP** du destinataire local (ou de sa **passerelle par défaut**) mais ignore son **adresse MAC** pour construire la trame L2. Il émet une **requête ARP en Broadcast** (`FF:FF:FF:FF:FF:FF` : « Qui a l’IP X ? ») ; seul l’hôte concerné répond en **Unicast** avec sa MAC, stockée ensuite temporairement dans le **cache ARP**.\n' +
          '• **ICMP (*Internet Control Message Protocol*)** : protocole de contrôle et de diagnostic encapsulé dans IP, utilisé pour signaler les erreurs (*Destination Unreachable*, *Time Exceeded*) et exécuter **`ping`** (*Echo Request / Echo Reply*) et **`traceroute` / `tracert`** (découverte saut par saut via incrémentation du TTL).\n' +
          '• **Routage (table de routage)** : un routeur consulte sa table de routage et choisit toujours la route au **préfixe le plus long (*Longest Prefix Match*)**, ou la **route par défaut (`0.0.0.0/0`)** en dernier recours. Les routes sont configurées manuellement (**routage statique**) ou apprises automatiquement entre routeurs (**routage dynamique** : RIP, OSPF, BGP).',
        formulas: [
          {
            name: 'Règle d’acheminement d’un hôte IPv4',
            formula: '\\text{Si } (\\text{IP}_{\\text{dst}} \\& M) = (\\text{IP}_{\\text{src}} \\& M) \\Rightarrow \\text{ARP direct sur LAN} \\quad ; \\quad \\text{Sinon} \\Rightarrow \\text{ARP vers Passerelle par défaut}',
            note: 'Un PC ne fait jamais d’ARP vers une IP distante : il envoie toujours la trame à la MAC de sa passerelle (routeur local) !',
          },
        ],
        keyRule:
          'ARP = requête **Broadcast** + réponse **Unicast** pour trouver la MAC locale ; ICMP = `ping` et `traceroute` ; Routeur = règle du **préfixe le plus long** puis route par défaut `0.0.0.0/0`.',
        workedExample: {
          title: 'Parcours complet d’un paquet d’un PC (`192.168.1.10/24`) vers un serveur distant (`8.8.8.8`)',
          statement:
            'PC-A (`192.168.1.10/24`, passerelle `192.168.1.1`) exécute `ping 8.8.8.8`. Décrire le rôle exact d’ARP, d’ICMP, du routeur et des adresses MAC/IP.',
          methodSteps: [
            'PC-A compare les réseaux : `192.168.1.10/24` (réseau `192.168.1.0`) ≠ `8.8.8.8` → la cible est **distante**, il faut envoyer le paquet à la **passerelle `192.168.1.1`**.',
            'Si la MAC de `192.168.1.1` n’est pas dans le cache ARP, PC-A envoie un **ARP Request Broadcast** « Qui a `192.168.1.1` ? » ; le routeur répond en **Unicast** avec `MAC_R1`.',
            'PC-A construit un paquet **ICMP Echo Request** avec `IP Src = 192.168.1.10`, `IP Dst = 8.8.8.8`, encapsulé dans une trame Ethernet avec `MAC Src = MAC_A`, **`MAC Dst = MAC_R1`**.',
            'Le routeur reçoit la trame, décrémente le **TTL**, consulte sa table de routage vers `8.8.8.8` (souvent via sa route par défaut `0.0.0.0/0`) et ré-encapsule dans une nouvelle trame vers le prochain saut.',
          ],
          conclusion:
            'À chaque saut de routeur, les adresses MAC changent (liaison locale), tandis que `IP Src` et `IP Dst` (hors NAT) restent constantes de bout en bout jusqu’à `8.8.8.8`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'ARP',
            stepTheme: 'blue',
            stepTitle: 'Protocole ARP : résoudre une adresse IP locale en adresse MAC',
            paragraphText:
              'Un paquet IP ne peut pas voyager nu sur un câble Ethernet ou en Wi-Fi : il doit être encapsulé dans une trame portant l’**adresse MAC** du prochain destinataire sur le LAN.\n' +
              '• **Rôle d’ARP** : découvrir dynamiquement l’adresse MAC (48 bits) associée à une adresse IPv4 (32 bits) située sur le **même réseau local**.\n' +
              '• **Échange en 2 temps** : (1) **ARP Request** envoyé en **Broadcast** (`FF:FF:FF:FF:FF:FF`) à tout le LAN (« Qui possède l’IP `192.168.1.50` ? Répondez à `192.168.1.10` ») ; (2) **ARP Reply** renvoyé en **Unicast** uniquement par la machine concernée avec son adresse MAC.\n' +
              '• **Cache ARP** : pour éviter de diffuser sans cesse, chaque hôte mémorise l’association `(IP ↔ MAC)` pendant quelques minutes (consultable par la commande `arp -a`).\n' +
              'Exemple : en IPv6, ARP est remplacé par le protocole **NDP (*Neighbor Discovery Protocol*)** basé sur ICMPv6 Multicast.',
            keyRule:
              'ARP Request = **Broadcast** ; ARP Reply = **Unicast** ; portée strictement limitée au réseau local (ne traverse jamais un routeur).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p3_q1',
              type: 'mcq',
              prompt: 'Comment s’effectuent respectivement l’envoi d’une **requête ARP** et celui de la **réponse ARP** sur un réseau local Ethernet ?',
              options: [
                'Requête en Unicast et Réponse en Broadcast',
                'Requête en Broadcast (`FF:FF:FF:FF:FF:FF`) et Réponse en Unicast',
                'Requête en Multicast et Réponse en Broadcast',
                'Les deux circulent exclusivement sur Internet via DNS',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’émetteur ignorant la MAC de sa cible, il envoie la **requête ARP en Broadcast** à tout le LAN ; la machine cible, connaissant la MAC source de l’émetteur, lui répond directement en **Unicast**.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'ICMP',
            stepTheme: 'blue',
            stepTitle: 'Protocole ICMP et outils de diagnostic `ping` et `traceroute`',
            paragraphText:
              'Parce que le protocole IP ne notifie rien par lui-même en cas de route coupée ou d’hôte éteint, **ICMP** (*Internet Control Message Protocol*) sert de système de signalisation et de diagnostic de la couche Réseau.\n' +
              '• **`ping <IP/nom>`** : envoie des paquets **ICMP Echo Request** et mesure le délai aller-retour (**RTT** en ms) des **ICMP Echo Reply** — vérifie la connectivité IP de bout en bout et la perte de paquets.\n' +
              '• **`traceroute` (Linux/macOS) / `tracert` (Windows)** : affiche la liste de **tous les routeurs intermédiaires** vers une cible en envoyant des paquets avec **`TTL = 1`**, puis `TTL = 2`, `TTL = 3`, etc. Chaque routeur où le TTL atteint `0` renvoie un message **ICMP *Time Exceeded*** révélant son adresse IP !\n' +
              '• **Messages d’erreur** : *Destination Host/Network Unreachable* (hôte ou réseau injoignable), *Time Exceeded* (TTL expiré).\n' +
              'Exemple : si `ping 192.168.1.1` répond en `1 ms` mais `ping 8.8.8.8` échoue, le LAN local fonctionne et la panne se situe sur la liaison WAN/FAI !',
            keyRule:
              '`ping` utilise ICMP Echo Request/Reply ; `traceroute` exploite l’expiration progressive du champ **TTL** (`1, 2, 3...`) pour cartographier chaque routeur du chemin.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p3_q2',
              type: 'mcq',
              prompt: 'Sur quel mécanisme technique repose la commande **`traceroute` / `tracert`** pour découvrir successivement l’adresse IP de chaque routeur entre votre PC et un serveur distant ?',
              options: [
                'L’envoi de requêtes ARP Broadcast à travers Internet.',
                'L’incrémentation progressive du champ TTL (`1, 2, 3...`) afin de provoquer des réponses ICMP *Time Exceeded* de chaque routeur successif.',
                'La lecture directe de la table MAC du serveur web distant.',
                'Le téléchargement complet de la table DNS mondiale.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`traceroute` envoie des sondes avec `TTL = 1` (le 1er routeur décrémente à 0 et renvoie *ICMP Time Exceeded*), puis `TTL = 2` (2e routeur), et ainsi de suite jusqu’à la destination.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Passerelle',
            stepTheme: 'blue',
            stepTitle: 'Rôle exact de la passerelle par défaut (*Default Gateway*)',
            paragraphText:
              'Un ordinateur connecté à un réseau local doit savoir immédiatement s’il peut livrer un paquet directement sur son LAN ou s’il doit le confier à un routeur.\n' +
              '• **Test local** : l’hôte compare `(IP_source & Masque)` et `(IP_destination & Masque)`.\n' +
              '• **Même réseau** : livraison directe en couche 2 (trame Ethernet contenant la **MAC de l’hôte cible**).\n' +
              '• **Réseau différent** : livraison à la **passerelle par défaut** (l’interface IP locale du routeur, par ex. `192.168.1.1` ou `.254`) : la trame Ethernet porte alors la **MAC du routeur**, mais le paquet IP à l’intérieur conserve bien l’**IP finale** du serveur distant !\n' +
              '• **Diagnostic typique** : si la passerelle par défaut est mal configurée sur un PC, celui-ci peut joindre les imprimantes et collègues du même LAN, mais ne peut accéder à aucun autre sous-réseau ni à Internet !\n' +
              'Exemple : un poste configuré en `192.168.1.25/24` DOIT avoir sa passerelle dans `192.168.1.0/24` (jamais dans `192.168.2.0/24` !).',
            keyRule:
              'La passerelle par défaut d’un hôte appartient **obligatoirement au même sous-réseau IP** que cet hôte : c’est la porte de sortie vers tous les autres réseaux.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p3_q3',
              type: 'mcq',
              prompt: 'Un poste `192.168.10.20/24` (passerelle `192.168.10.1`) envoie un paquet au serveur `10.50.0.8`. Quelle adresse **IP destination** et quelle adresse **MAC destination** figurent dans la trame quittant le poste ?',
              options: [
                'IP Dst = 192.168.10.1 ; MAC Dst = MAC du serveur 10.50.0.8',
                'IP Dst = 10.50.0.8 ; MAC Dst = MAC de la passerelle 192.168.10.1',
                'IP Dst = 10.50.0.8 ; MAC Dst = FF:FF:FF:FF:FF:FF',
                'IP Dst = 192.168.10.1 ; MAC Dst = MAC de la passerelle 192.168.10.1',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adresse **IP destination** reste toujours celle du destinataire final (`10.50.0.8`). Mais comme il est sur un autre réseau, la trame L2 est adressée au prochain saut local : la **MAC destination** est celle de la passerelle (`192.168.10.1`).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Table de routage',
            stepTheme: 'green',
            stepTitle: 'Lire une table de routage : règle du préfixe le plus long (*Longest Prefix Match*)',
            paragraphText:
              'Chaque routeur maintient en mémoire une **table de routage** associant chaque réseau destination (`Réseau/Masque`) à une interface de sortie ou à l’adresse IP du routeur suivant (*Next Hop*), accompagnée d’une **métrique** (coût du chemin).\n' +
              '• **Règle d’or de sélection — Préfixe le plus long** : si plusieurs routes correspondent à l’IP destination d’un paquet, le routeur choisit **toujours la route la plus spécifique**, c’est-à-dire celle qui a le plus grand nombre de bits de masque `/n` !\n' +
              '• **Route par défaut (`0.0.0.0/0`)** : préfixe de longueur `0` qui correspond à toutes les IP ; elle n’est donc choisie qu’en **tout dernier recours** si aucune route plus précise ne correspond.\n' +
              '• **Paquet sans route** : si aucune route (ni route par défaut) ne correspond, le routeur détruit le paquet et renvoie un *ICMP Destination Unreachable*.\n' +
              'Exemple : pour l’IP `10.1.2.50`, si la table contient `10.0.0.0/8`, `10.1.0.0/16`, `10.1.2.0/24` et `0.0.0.0/0`, le routeur choisit obligatoirement **`10.1.2.0/24`** (`/24 > /16 > /8 > /0`) !',
            keyRule:
              'Un routeur ne choisit pas la première ligne de sa table : il applique systématiquement le **Longest Prefix Match** (le masque `/n` le plus grand qui englobe l’IP cible).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p3_q4',
              type: 'mcq',
              prompt: 'La table d’un routeur contient : (1) `172.16.0.0/16 → eth0`, (2) `172.16.4.0/24 → eth1`, (3) `172.16.4.128/25 → eth2`, (4) `0.0.0.0/0 → eth3`. Par quelle interface sortira un paquet destiné à **`172.16.4.150`** ?',
              options: [
                'eth0 (/16)',
                'eth1 (/24)',
                'eth2 (/25)',
                'eth3 (route par défaut)',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`172.16.4.150` appartient aux quatre préfixes, mais `172.16.4.128/25` (`.128` à `.255`) possède le **préfixe le plus long** (`/25 > /24 > /16 > /0`) : le paquet sort donc par **`eth2`**.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Statique vs Dynamique',
            stepTheme: 'violet',
            stepTitle: 'Routage statique vs protocoles de routage dynamique (RIP, OSPF, BGP)',
            paragraphText:
              'Comment les routeurs remplissent-ils leurs tables de routage ? Deux approches complémentaires coexistent sur les réseaux d’entreprise et sur Internet.\n' +
              '• **Routage statique** : routes saisies manuellement par l’administrateur (`ip route ...`). Avantages : zéro consommation de bande passante/CPU, prévisibilité et sécurité maximales (idéal pour petits réseaux ou route par défaut vers un FAI). Inconvénient : ne s’adapte pas automatiquement en cas de coupure d’un lien.\n' +
              '• **Routage dynamique** : les routeurs échangent automatiquement leurs informations topologiques et recalculent les chemins en cas de panne !\n' +
              '  — **IGP (interne à une organisation)** : **RIP** (vecteur de distance, métrique = nombre de sauts max 15) et **OSPF** (état de liens, algorithme de Dijkstra, métrique = coût/débit, standard des entreprises et campus).\n' +
              '  — **EGP (entre opérateurs / systèmes autonomes sur Internet)** : **BGP (*Border Gateway Protocol*)**, le protocole qui colle ensemble tous les FAI du monde.\n' +
              'Exemple : le réseau universitaire RITER utilise OSPF en interne et BGP pour s’interconnecter à WACREN et aux opérateurs Internet.',
            keyRule:
              'Routage statique = manuel, simple, sans basculement auto ; Routage dynamique = adaptation automatique aux pannes (`OSPF` en interne, `BGP` entre opérateurs Internet).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p3_q5',
              type: 'mcq',
              prompt: 'Quel protocole de routage dynamique interconnecte les différents **opérateurs et Systèmes Autonomes (AS)** à l’échelle mondiale d’Internet ?',
              options: [
                'ARP',
                'BGP (Border Gateway Protocol)',
                'DHCP',
                'RIP v1',
              ],
              correctAnswerIndex: 1,
              explanation:
                '**BGP** (*Border Gateway Protocol*) est le protocole de routage externe (EGP) qui échange les préfixes IP entre Systèmes Autonomes (FAI, opérateurs, géants du Cloud) sur Internet.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Dépannage',
            stepTheme: 'green',
            stepTitle: 'Démarche de diagnostic IP en 4 `ping` successifs',
            paragraphText:
              'Lorsque la connexion Internet d’un poste tombe en panne, quatre commandes `ping` exécutées dans l’ordre permettent d’isoler la cause exacte en moins de 30 secondes.\n' +
              '• **1. `ping 127.0.0.1`** : teste la pile TCP/IP locale du système d’exploitation.\n' +
              '• **2. `ping <IP_passerelle>`** (ex. `192.168.1.1`) : teste le câble/Wi-Fi, le switch et la liaison jusqu’au routeur local.\n' +
              '• **3. `ping 8.8.8.8`** (IP publique externe) : teste le routage vers Internet et la liaison opérateur/FAI.\n' +
              '• **4. `ping www.wikipedia.org`** (nom de domaine) : si `ping 8.8.8.8` réussit mais que `ping www.wikipedia.org` échoue, la connexion Internet fonctionne parfaitement — seul le serveur **DNS** est en panne ou mal configuré !\n' +
              'Exemple : dans un cybercafé ou un bureau, ce diagnostic en 4 étapes évite de redémarrer inutilement le switch quand le problème vient simplement d’un serveur DNS injoignable.',
            keyRule:
              'Si `ping <IP publique>` réussit mais `ping <nom de domaine>` échoue, le diagnostic est immédiat : **panne de résolution DNS** (et non panne de routage) !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch4_p3_q6',
              type: 'mcq',
              prompt: 'Sur un PC, `ping 192.168.1.1` réussit et `ping 1.1.1.1` réussit, mais aucun site ne s’ouvre dans le navigateur et `ping www.konan.ci` indique « Hôte introuvable ». Quelle est la cause la plus probable ?',
              options: [
                'Le câble RJ45 est débranché.',
                'La carte réseau du PC est grillée.',
                'Un dysfonctionnement ou une mauvaise configuration du serveur **DNS**.',
                'Un conflit d’adresse MAC sur la couche 1.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Puisque `ping 1.1.1.1` (IP publique externe) répond, les couches 1, 2, 3 et l’accès Internet fonctionnent parfaitement. L’échec sur le nom de domaine prouve une panne de résolution **DNS**.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 5 : Transport (TCP/UDP), Couche Application & Sécurité (NAT/Pare-feu)
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch5',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 5,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Réseaux & Services',
    title: 'Chapitre 5 — Couche Transport (TCP/UDP), protocoles applicatifs et sécurité (NAT & Pare-feu)',
    summary:
      'TCP vs UDP (fiabilité, contrôle de flux, ports et sockets), établissement 3-Way Handshake (SYN/SYN-ACK/ACK) et fermeture TCP, protocoles applicatifs (HTTP/HTTPS, DNS, DHCP DORA, SMTP/IMAP, FTP/TFTP, SSH), traduction NAT/PAT, pare-feu et zone démilitarisée (DMZ).',
    points: [
      // POINT 5.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch5_p1',
        order: 1,
        title: 'Couche Transport : TCP vs UDP, numéros de ports et *3-Way Handshake*',
        summary:
          'Opposer TCP (connecté, fiable, ordonné) et UDP (non connecté, rapide, léger), maîtriser les plages de ports (0–65535), la notion de socket et la poignée de main TCP en 3 temps.',
        conceptExplanation:
          'La **couche Transport (couche 4 OSI / couche 3 TCP/IP)** assure le dialogue de **bout en bout entre processus applicatifs** grâce aux **numéros de ports** codés sur **16 bits** (`0` à `65 535`). Le couple **`(Adresse IP : Numéro de port)`** définit un **socket**, permettant à une même machine d’exécuter simultanément des dizaines de connexions réseau indépendantes (multiplexage).\n\n' +
          'Deux protocoles majeurs se partagent cette couche :\n' +
          '• **TCP (*Transmission Control Protocol*)** : orienté **connexion**, **fiable** et ordonné. Avant tout transfert, il établit une session par la **poignée de main en 3 temps (*3-Way Handshake*)** : `SYN` (Client → Serveur), `SYN-ACK` (Serveur → Client), `ACK` (Client → Serveur). Il assure le **séquencement**, les **acquittements (`ACK`) avec retransmission**, le **contrôle de flux** (fenêtre glissante) et le **contrôle de congestion**, puis ferme proprement par `FIN/ACK`. Idéal pour Web (HTTP/HTTPS), e-mail, transfert de fichiers, banque en ligne.\n' +
          '• **UDP (*User Datagram Protocol*)** : **sans connexion**, **non fiable** (*best effort*), en-tête ultra-léger de **8 octets** (contre 20 octets min. pour TCP), latence minimale. Idéal pour la voix/vidéo temps réel (VoIP, visioconférence), les jeux en ligne, **DNS**, **DHCP** et **TFTP**.',
        formulas: [
          {
            name: 'Plages normalisées des numéros de ports (16 bits : 0 à 65 535)',
            formula: '\\underbrace{0 \\dots 1023}_{\\text{Ports bien connus (Well-Known)}} \\quad | \\quad \\underbrace{1024 \\dots 49151}_{\\text{Ports enregistrés}} \\quad | \\quad \\underbrace{49152 \\dots 65535}_{\\text{Ports dynamiques / éphémères}}',
            note: 'Les serveurs écoutent sur des ports bien connus fixes (ex. 443), tandis que les clients ouvrent un port source éphémère aléatoire.',
          },
          {
            name: 'Séquence du 3-Way Handshake TCP',
            formula: '\\text{Client} \\xrightarrow{\\text{SYN (seq=x)}} \\text{Serveur} \\xrightarrow{\\text{SYN-ACK (seq=y, ack=x+1)}} \\text{Client} \\xrightarrow{\\text{ACK (ack=y+1)}} \\text{Connecté}',
            note: 'Les numéros de séquence initiaux (x, y) sont choisis aléatoirement pour sécuriser la session.',
          },
        ],
        keyRule:
          'TCP = fiabilité absolue + ordre garanti + contrôle de flux (au prix d’une légère latence) ; UDP = vitesse temps réel + faible surcharge (sans garantie ni retransmission).',
        workedExample: {
          title: 'Choix TCP vs UDP pour trois applications numériques et lecture d’un socket',
          statement:
            'Choisir le protocole de transport optimal (TCP ou UDP) pour : (1) un virement bancaire en ligne ; (2) un appel vocal WhatsApp / VoIP en direct ; (3) le téléchargement d’un logiciel. Expliquer ensuite le couple de sockets `(192.168.1.22:52410 → 104.21.14.8:443)`.',
          methodSteps: [
            '(1) Virement bancaire : perte ou désordre d’un seul chiffre inadmissible → **TCP** (fiable, acquitté, ordonné).',
            '(2) Appel vocal temps réel : retransmettre un paquet audio vieux de 500 ms crée une coupure insupportable ; mieux vaut tolérer une micro-perte et garder une latence minimale → **UDP**.',
            '(3) Téléchargement de logiciel : un seul bit manquant rend l’exécutable corrompu → **TCP**.',
            'Sockets : le client `192.168.1.22` utilise le port source éphémère `52410` pour dialoguer avec le service HTTPS (port bien connu `443`) du serveur `104.21.14.8`.',
          ],
          conclusion:
            'Chaque application choisit TCP (intégrité prioritaire) ou UDP (latence temps réel prioritaire), et le couple de sockets identifie de manière unique chaque flux simultané.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Ports & Sockets',
            stepTheme: 'blue',
            stepTitle: 'Multiplexage par numéros de ports (16 bits) et notion de Socket',
            paragraphText:
              'Sur un seul ordinateur muni d’une unique adresse IP, comment le système sait-il que tel paquet entrant appartient à l’onglet navigateur n° 1, tel autre à l’onglet n° 2, et tel autre à la messagerie ?\n' +
              '• **Numéro de port (16 bits : `0` à `65 535`)** : identifie de manière unique un processus ou service réseau sur un hôte.\n' +
              '• **Trois catégories IANA** : **ports bien connus** (`0–1023`, services standards comme 80/443/22/53), **ports enregistrés** (`1024–49151`, bases de données et applications métier comme 3306 MySQL, 5432 PostgreSQL), et **ports dynamiques / éphémères** (`49152–65535`, attribués temporairement côté client).\n' +
              '• **Socket (`IP:Port`)** : la combinaison `(IP source, Port source, IP destination, Port destination, Protocole)` identifie de façon unique chaque conversation active.\n' +
              'Exemple : deux onglets ouverts sur le même site HTTPS ont la même `IP:443` destination mais deux **ports sources éphémères différents** (ex. `51204` et `51205`) !',
            keyRule:
              'L’adresse IP désigne la **machine** ; le numéro de port désigne l’**application** sur cette machine ; le **socket (`IP:Port`)** désigne le point de terminaison précis d’une conversation.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p1_q1',
              type: 'mcq',
              prompt: 'Comment le système d’exploitation d’un PC distingue-t-il deux onglets de navigateur consultant simultanément le même serveur web (`104.18.2.5:443`) ?',
              options: [
                'En attribuant une nouvelle adresse MAC à chaque onglet.',
                'En attribuant un numéro de **port source éphémère** différent (dans la plage 49152–65535) à chaque connexion.',
                'En changeant l’adresse IP du serveur web.',
                'En utilisant deux câbles RJ45 séparés.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque connexion cliente reçoit un port source éphémère distinct, créant deux couples de sockets uniques que la couche Transport démultiplexe sans confusion.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: '3-Way Handshake',
            stepTheme: 'blue',
            stepTitle: 'Établissement de connexion TCP : la poignée de main en 3 temps (*3-Way Handshake*)',
            paragraphText:
              'Avant de transmettre le moindre octet de données applicatives, TCP vérifie que le serveur est joignable, prêt à recevoir, et synchronise les numéros de séquence initiaux des deux côtés.\n' +
              '• **Temps 1 — `SYN` (Client → Serveur)** : le client demande l’ouverture de connexion et propose son numéro de séquence initial `seq = x`.\n' +
              '• **Temps 2 — `SYN-ACK` (Serveur → Client)** : le serveur accepte, acquitte le client (`ack = x + 1`) et propose son propre numéro de séquence initial `seq = y`.\n' +
              '• **Temps 3 — `ACK` (Client → Serveur)** : le client acquitte le serveur (`ack = y + 1`). La connexion est **`ESTABLISHED`** : le transfert bidirectionnel de données démarre !\n' +
              '• **Fermeture propre (4 temps)** : chaque sens se ferme indépendamment par échange de drapeaux **`FIN`** et **`ACK`** (ou brutalement par `RST` en cas d’erreur).\n' +
              'Exemple : une attaque **SYN Flood** (déni de service) consiste à inonder un serveur de paquets `SYN` sans jamais envoyer le 3e `ACK` pour saturer sa mémoire de connexions demi-ouvertes.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Diagramme de séquence du 3-Way Handshake TCP et fermeture',
              caption: 'Synchronisation fiable en 3 étapes (SYN → SYN-ACK → ACK) avant tout transfert de données applicatives.',
              svgContent:
                '<svg viewBox="0 0 460 225" width="100%" style="max-width:460px" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="30" y="10" width="110" height="30" rx="7" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>' +
                '<text x="85" y="29" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">CLIENT (PC)</text>' +
                '<rect x="320" y="10" width="110" height="30" rx="7" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>' +
                '<text x="375" y="29" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532D">SERVEUR</text>' +
                '<line x1="85" y1="40" x2="85" y2="215" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5,4"/>' +
                '<line x1="375" y1="40" x2="375" y2="215" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5,4"/>' +
                '<line x1="88" y1="62" x2="368" y2="82" stroke="#2563EB" stroke-width="2.3"/>' +
                '<polygon points="373,82 363,76 364,87" fill="#2563EB"/>' +
                '<text x="230" y="64" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#1D4ED8">1. SYN (seq = x)</text>' +
                '<line x1="372" y1="98" x2="92" y2="118" stroke="#16A34A" stroke-width="2.3"/>' +
                '<polygon points="87,118 97,112 96,123" fill="#16A34A"/>' +
                '<text x="230" y="101" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#15803D">2. SYN-ACK (seq = y, ack = x+1)</text>' +
                '<line x1="88" y1="134" x2="368" y2="152" stroke="#7C3AED" stroke-width="2.3"/>' +
                '<polygon points="373,152 363,146 364,157" fill="#7C3AED"/>' +
                '<text x="230" y="137" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#6D28D9">3. ACK (seq = x+1, ack = y+1)</text>' +
                '<rect x="115" y="164" width="230" height="22" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>' +
                '<text x="230" y="179" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532D">Session ESTABLISHED — Échange de données</text>' +
                '<rect x="145" y="193" width="170" height="20" rx="5" fill="#FFF7ED" stroke="#EA580C" stroke-width="1.3"/>' +
                '<text x="230" y="207" text-anchor="middle" font-family="monospace" font-size="10.5" fill="#9A3412">Fermeture : FIN ↔ ACK</text>' +
                '</svg>',
            },
            keyRule:
              'Ordre immuable du *3-Way Handshake* TCP : **`SYN`** (client) → **`SYN-ACK`** (serveur) → **`ACK`** (client).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p1_q2',
              type: 'mcq',
              prompt: 'Quelle est la séquence exacte des trois drapeaux échangés lors de l’établissement d’une connexion **TCP** (*3-Way Handshake*) ?',
              options: [
                'ACK → SYN → FIN',
                'SYN → SYN-ACK → ACK',
                'FIN → FIN-ACK → ACK',
                'SYN → ACK → SYN-ACK',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le client envoie `SYN`, le serveur répond `SYN-ACK` (synchronisation + acquittement), puis le client confirme par `ACK` pour ouvrir la connexion TCP.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Fiabilité TCP',
            stepTheme: 'violet',
            stepTitle: 'Comment TCP rend IP fiable : numéros de séquence, ACK et fenêtre glissante',
            paragraphText:
              'Rappelez-vous qu’IP (couche 3) est non fiable et peut perdre, dupliquer ou inverser des paquets. TCP compense intégralement ces défauts grâce à quatre mécanismes intégrés.\n' +
              '• **Numéros de séquence (`SEQ`)** : chaque octet/segment est numéroté afin que le récepteur **réassemble** le flux dans l’ordre exact et élimine tout doublon.\n' +
              '• **Accusés de réception (`ACK`) et retransmission** : le récepteur confirme ce qu’il a reçu ; si l’émetteur ne reçoit pas d’`ACK` avant expiration du *timeout*, il retransmet automatiquement le segment manquant.\n' +
              '• **Contrôle de flux (fenêtre glissante — *Window Size*)** : le récepteur annonce dans chaque `ACK` la taille disponible dans sa mémoire tampon afin d’empêcher l’émetteur de le saturer.\n' +
              '• **Contrôle de congestion** : TCP réduit dynamiquement sa cadence dès qu’il détecte des pertes liées à l’encombrement des routeurs intermédiaires.\n' +
              'Exemple : même sur une connexion 4G instable avec 3 % de perte de paquets, un fichier PDF téléchargé via HTTPS/TCP arrive intact au bit près !',
            keyRule:
              'TCP transforme un réseau IP non fiable en un tuyau d’octets ordonné, sans perte et sans doublon grâce à `SEQ + ACK + Retransmission + Fenêtre glissante`.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p1_q3',
              type: 'mcq',
              prompt: 'Quel mécanisme de **TCP** permet au destinataire d’indiquer à l’émetteur la quantité maximale d’octets qu’il est capable de recevoir avant saturation de sa mémoire tampon ?',
              options: [
                'Le champ TTL',
                'Le contrôle de flux par fenêtre glissante (*Window Size*)',
                'La requête ARP Broadcast',
                'Le mode Ad hoc',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TCP assure le **contrôle de flux** grâce au champ *Window Size* (fenêtre glissante) annoncé par le récepteur, limitant la quantité de données en transit non acquittées.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'UDP',
            stepTheme: 'blue',
            stepTitle: 'Protocole UDP : rapidité, simplicité et applications temps réel',
            paragraphText:
              'Si TCP est si fiable, pourquoi conserve-t-on **UDP (*User Datagram Protocol*)** ? Parce que la fiabilité de TCP a un prix : latence du *3-Way Handshake*, en-tête plus lourd (20 octets min.) et blocage en attente de retransmission !\n' +
              '• **Sans connexion et sans état** : UDP envoie directement ses **datagrammes** sans poignée de main préalable.\n' +
              '• **En-tête ultra-léger de 8 octets** : uniquement `Port source (2 o)`, `Port destination (2 o)`, `Longueur (2 o)` et `Somme de contrôle (2 o)`.\n' +
              '• **Zéro retransmission / zéro contrôle de flux** : si un datagramme se perd, UDP ne fait rien (l’application décide si elle veut réessayer, comme DNS ou DHCP).\n' +
              '• **Usages phares** : téléphonie VoIP, visioconférence (Zoom, Teams, WhatsApp), streaming live, jeux multijoueurs rapides, requêtes courtes (**DNS**, **DHCP**, **SNMP**, **TFTP**), et même **QUIC / HTTP/3** (qui bâtit sa propre fiabilité rapide au-dessus d’UDP).\n' +
              'Exemple : lors d’un appel vidéo, une image vieille d’une seconde retransmise par TCP figerait tout l’écran ; UDP préfère passer immédiatement à l’image actuelle.',
            keyRule:
              'UDP = en-tête minimal de **8 octets**, sans connexion, sans ACK, latence minimale — idéal pour le temps réel (VoIP/vidéo) et les requêtes-réponses brèves (DNS/DHCP).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p1_q4',
              type: 'mcq',
              prompt: 'Pourquoi les applications de **téléphonie IP (VoIP)** et de **visioconférence en direct** privilégient-elles **UDP** plutôt que **TCP** ?',
              options: [
                'Parce qu’UDP garantit la retransmission de 100 % des paquets perdus.',
                'Parce qu’UDP élimine la latence de connexion et des retransmissions tardives, privilégiant la fluidité temps réel.',
                'Parce qu’UDP utilise des adresses MAC au lieu d’adresses IP.',
                'Parce que TCP ne peut pas transporter de données multimédias.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En audio/vidéo temps réel, un paquet arrivé en retard est inutile et dégrade la conversation. UDP offre une surcharge minimale (8 octets) et zéro délai de retransmission.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Comparatif TCP/UDP',
            stepTheme: 'orange',
            stepTitle: 'Comparer rigoureusement TCP et UDP : éviter les fausses idées reçues',
            paragraphText:
              'Même si UDP est qualifié de « non fiable », cela ne signifie pas qu’il est « mauvais » ou « bogué » — il est simplement conçu pour d’autres priorités que TCP.\n' +
              '• **Mode** : TCP = connecté (*3-Way Handshake*) vs UDP = non connecté.\n' +
              '• **En-tête** : TCP = `20 à 60 octets` vs UDP = `8 octets` fixes.\n' +
              '• **Fiabilité & ordre** : TCP = `SEQ + ACK + retransmission + contrôle de flux` vs UDP = aucun (l’application gère si besoin).\n' +
              '• **Remise Broadcast / Multicast** : TCP est strictement **Unicast** (1 client ↔ 1 serveur), alors qu’UDP supporte nativement le **Broadcast** (ex. DHCP) et le **Multicast** (ex. IPTV) !\n' +
              'Exemple : DHCP ne pourrait JAMAIS fonctionner sur TCP car au démarrage le PC n’a pas encore d’IP et doit émettre une requête en **Broadcast** — seul UDP le permet !',
            keyRule:
              'TCP ne supporte que l’**Unicast** ; dès qu’un service a besoin de **Broadcast** (DHCP) ou de **Multicast** (streaming IPTV), il utilise **UDP**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p1_q5',
              type: 'mcq',
              prompt: 'Quelle affirmation oppose correctement **TCP** et **UDP** ?',
              options: [
                'UDP possède un en-tête de 20 octets minimum et utilise un 3-Way Handshake.',
                'TCP garantit la remise ordonnée et fiable via SEQ/ACK (en-tête ≥ 20 o), tandis qu’UDP envoie des datagrammes sans connexion (en-tête 8 o) et supporte le Broadcast/Multicast.',
                'TCP appartient à la couche Réseau et UDP à la couche Application.',
                'UDP est toujours plus lent que TCP.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TCP est connecté, fiable et ordonné (en-tête ≥ 20 octets, Unicast uniquement) ; UDP est sans connexion, très léger (en-tête fixe de 8 octets) et compatible Broadcast/Multicast.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Analyse pratique',
            stepTheme: 'slate',
            stepTitle: 'Interpréter les connexions actives avec `netstat` / `ss`',
            paragraphText:
              'Les administrateurs système inspectent quotidiennement les ports ouverts et les sessions TCP/UDP d’un serveur grâce aux commandes `netstat -ano` (Windows) ou `ss -tulnp` (Linux).\n' +
              '• **État `LISTEN`** : un service serveur (ex. `0.0.0.0:443`) est en écoute passive, prêt à accepter des paquets `SYN` entrants.\n' +
              '• **État `ESTABLISHED`** : une session TCP active a complété son *3-Way Handshake* et échange des données (ex. `192.168.1.20:54312 → 104.18.10.2:443`).\n' +
              '• **État `TIME_WAIT` / `CLOSE_WAIT`** : session en cours de terminaison propre après échange de `FIN`.\n' +
              '• **Intérêt sécurité** : repérer un port en écoute (`LISTEN`) inconnu permet de détecter immédiatement un service malveillant ou une porte dérobée sur un serveur.\n' +
              'Exemple : vérifier que le serveur web écoute bien sur TCP `443` et que la base de données PostgreSQL (`5432`) n’écoute que sur `127.0.0.1` (non exposée à Internet) est un réflexe de cybersécurité fondamental.',
            keyRule:
              'Sur un serveur en production, n’expose sur l’interface publique que les stricts ports nécessaires (principe du moindre privilège) et audite régulièrement les ports en état `LISTEN`.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p1_q6',
              type: 'mcq',
              prompt: 'Dans la sortie de la commande `ss -tulnp` sur un serveur Linux, que signifie l’état **`LISTEN`** sur `0.0.0.0:22` ?',
              options: [
                'La carte réseau du serveur est débranchée.',
                'Le service SSH (port 22) est actif et en attente de connexions TCP entrantes sur toutes les interfaces réseau.',
                'Une attaque par collision CSMA/CD est en cours.',
                'Le serveur a fermé toutes ses connexions réseau.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’état `LISTEN` indique qu’un service (ici SSH sur le port standard `22`) écoute activement les demandes de connexion (`SYN`) sur toutes les adresses IPv4 locales (`0.0.0.0`).',
            },
          },
        ],
      }),

      // POINT 5.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch5_p2',
        order: 2,
        title: 'Protocoles de couche Application : HTTP/HTTPS, DNS, DHCP, Mail, FTP et SSH',
        summary:
          'Maîtriser le fonctionnement, le protocole de transport (TCP/UDP) et le numéro de port standard des grands services applicatifs d’Internet.',
        conceptExplanation:
          'La **couche Application** fournit les protocoles de haut niveau qui rendent le réseau utile au quotidien. Chaque service repose sur un **numéro de port bien connu** et un protocole de transport (TCP ou UDP) :\n\n' +
          '• **Web — HTTP (`TCP 80`) et HTTPS (`TCP 443`)** : architecture requête/réponse (`GET`, `POST`, codes `200 OK`, `404 Not Found`, `500 Server Error`) ; HTTPS ajoute le chiffrement et l’authentification par certificat **TLS/SSL**.\n' +
          '• **DNS (`UDP/TCP 53`)** : annuaire mondial hiérarchique traduisant les noms de domaine lisibles (`www.konan.ci`) en adresses IP (enregistrements `A` IPv4, `AAAA` IPv6, `MX` mail, `CNAME` alias).\n' +
          '• **DHCP (`UDP 67 serveur / 68 client`)** : attribue automatiquement à chaque poste son IP, masque, passerelle par défaut et serveurs DNS via le cycle en 4 messages **DORA** (*Discover, Offer, Request, Acknowledge*).\n' +
          '• **Messagerie** : **SMTP (`TCP 25 / 587`)** pour l’**envoi**, **POP3 (`TCP 110`)** ou **IMAP (`TCP 143 / 993`)** pour la **réception/synchronisation**.\n' +
          '• **Fichiers & Administration** : **FTP (`TCP 20/21`)** vs **TFTP (`UDP 69`, léger sans authentification)** ; **Telnet (`TCP 23`, en clair — à bannir)** remplacé par **SSH (`TCP 22`, chiffré)**.',
        formulas: [
          {
            name: 'Cycle d’attribution automatique d’adresse DHCP (DORA)',
            formula: '\\text{Discover (Broadcast)} \\longrightarrow \\text{Offer} \\longrightarrow \\text{Request (Broadcast)} \\longrightarrow \\text{Ack (Bail IP)}',
            note: 'Utilise UDP ports 68 (client) et 67 (serveur) ; attribue IP + Masque + Passerelle + DNS pour une durée limitée (bail).',
          },
        ],
        keyRule:
          'Connais sur le bout des doigts les ports incontournables : `SSH 22`, `SMTP 25`, `DNS 53`, `DHCP 67/68`, `HTTP 80`, `HTTPS 443`, `FTP 20/21`, `TFTP 69`, `IMAP 143`.',
        workedExample: {
          title: 'Chronologie complète des protocoles lors de l’ouverture de `https://www.konan.ci`',
          statement:
            'Un ordinateur vient d’être branché sur le réseau du campus et l’étudiant saisit `https://www.konan.ci` dans son navigateur. Lister dans l’ordre chronologique les protocoles applicatifs et transport sollicités.',
          methodSteps: [
            '**1. DHCP (UDP 68 → 67, cycle DORA)** : le PC obtient automatiquement son IP locale, son masque, sa passerelle et l’IP du serveur DNS.',
            '**2. DNS (UDP 53)** : le PC interroge le serveur DNS pour traduire `www.konan.ci` en son adresse IP publique (enregistrement `A`).',
            '**3. ARP (LAN local)** : le PC récupère la MAC de la passerelle par défaut pour acheminer le paquet vers Internet.',
            '**4. TCP 3-Way Handshake (port 443) + TLS** : ouverture de session fiable sur `TCP 443` et négociation du chiffrement TLS (vérification du certificat du site).',
            '**5. HTTPS (`GET /`)** : échange chiffré des requêtes et réponses HTML/CSS/JS entre le navigateur et le serveur web.',
          ],
          conclusion:
            'Un simple clic dans un navigateur orchestre harmonieusement DHCP → DNS → ARP → TCP/TLS → HTTPS à travers toute la pile TCP/IP !',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Répertoire Ports',
            stepTheme: 'blue',
            stepTitle: 'Cartographie des principaux protocoles applicatifs et de leurs ports standards',
            paragraphText:
              'Chaque grand service d’Internet est identifié universellement par son protocole applicatif, son protocole de transport sous-jacent (TCP ou UDP) et son numéro de port bien connu.\n' +
              '• **Services d’infrastructure** : **DNS (`53`, UDP requêtes / TCP transferts de zone)** et **DHCP (`67/68`, UDP)** sont indispensables avant même la moindre navigation.\n' +
              '• **Web & Fichiers** : **HTTP (`TCP 80`)**, **HTTPS (`TCP 443`)**, **FTP (`TCP 20` données / `21` contrôle)**, **TFTP (`UDP 69`)**.\n' +
              '• **Messagerie & Accès distant** : **SMTP (`TCP 25/587`)**, **POP3 (`TCP 110`)**, **IMAP (`TCP 143/993`)**, **Telnet (`TCP 23`, non chiffré)** et **SSH (`TCP 22`, chiffré)**.\n' +
              'Exemple : pour autoriser uniquement le Web sécurisé et l’administration distante sur un serveur, un pare-feu n’ouvre que `TCP 443` et `TCP 22` !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau de référence des protocoles applicatifs, transports et ports standards',
              caption: 'Les ports bien connus (0–1023) indispensables en administration réseau et en cybersécurité.',
              tableData: {
                headers: ['Protocole', 'Transport', 'Port(s)', 'Fonction principale'],
                rows: [
                  ['FTP', 'TCP', '20 / 21', 'Transfert de fichiers authentifié (21 contrôle, 20 données)'],
                  ['SSH / Telnet', 'TCP', '22 / 23', 'Administration distante : SSH chiffré (22) vs Telnet en clair (23)'],
                  ['SMTP', 'TCP', '25 / 587', 'Envoi et relais des courriers électroniques (e-mails)'],
                  ['DNS', 'UDP / TCP', '53', 'Résolution de noms de domaine ↔ adresses IP (A, AAAA, MX)'],
                  ['DHCP', 'UDP', '67 / 68', 'Attribution automatique IP, masque, passerelle, DNS (DORA)'],
                  ['TFTP', 'UDP', '69', 'Transfert de fichiers léger sans authentification (amorce réseau)'],
                  ['HTTP / HTTPS', 'TCP', '80 / 443', 'Navigation Web : en clair (80) vs chiffré TLS (443)'],
                  ['POP3 / IMAP', 'TCP', '110 / 143', 'Réception d’e-mails : téléchargement local (POP3) vs synchro serveur (IMAP)'],
                ],
              },
            },
            keyRule:
              'Mémorise les 4 services en **UDP** du tableau : **DNS (53)**, **DHCP (67/68)** et **TFTP (69)** — tous les autres services classiques (HTTP/S, SSH, FTP, SMTP, IMAP) reposent sur **TCP** !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p2_q1',
              type: 'mcq',
              prompt: 'Quelle association `(Protocole — Transport — Port standard)` est STRICTEMENT EXACTE ?',
              options: [
                'HTTPS — UDP — 80',
                'SSH — TCP — 22',
                'DNS — TCP uniquement — 443',
                'DHCP — TCP — 25',
              ],
              correctAnswerIndex: 1,
              explanation:
                '**SSH** utilise **TCP sur le port 22**. HTTPS utilise TCP 443 (et HTTP TCP 80) ; DNS utilise surtout UDP 53 ; DHCP utilise UDP 67/68 ; SMTP utilise TCP 25.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'DNS',
            stepTheme: 'blue',
            stepTitle: 'Fonctionnement hiérarchique du DNS et enregistrements (`A`, `AAAA`, `MX`, `CNAME`)',
            paragraphText:
              'Les humains retiennent facilement des noms (`www.gouv.ci`), tandis que les routeurs ne comprennent que des adresses IP : le **DNS (*Domain Name System*, port 53)** est l’annuaire distribué planétaire qui effectue cette traduction.\n' +
              '• **Arborescence hiérarchique** : de droite à gauche dans `campus.univ.ci.` → la **racine (`.`)** (13 grappes de serveurs racines mondiaux) → le **TLD** (`.ci`, `.com`, `.org`, `.edu`) → le domaine **faisant autorité** (`univ.ci`) → le sous-domaine (`campus`).\n' +
              '• **Principaux enregistrements DNS** : **`A`** (nom → IPv4), **`AAAA`** (nom → IPv6), **`MX`** (serveur de messagerie du domaine), **`CNAME`** (alias d’un nom vers un autre nom), **`NS`** (serveurs de noms faisant autorité).\n' +
              '• **Cache DNS (TTL)** : les résolveurs mettent en cache les réponses durant leur durée de vie (TTL) pour répondre en quelques millisecondes sans solliciter les serveurs racines à chaque clic.\n' +
              'Exemple : un résolveur public comme `1.1.1.1` (Cloudflare) ou `8.8.8.8` (Google) effectue la recherche récursive pour ton ordinateur et lui renvoie l’IP finale.',
            keyRule:
              'Enregistrements DNS clés : **`A`** = IPv4, **`AAAA`** = IPv6, **`MX`** = serveur mail, **`CNAME`** = alias de nom.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p2_q2',
              type: 'mcq',
              prompt: 'Quel type d’enregistrement **DNS** associe un nom de domaine à son **adresse IPv4**, et lequel désigne le **serveur de messagerie** du domaine ?',
              options: [
                'MX pour IPv4 et A pour la messagerie',
                'A pour IPv4 et MX pour la messagerie',
                'AAAA pour IPv4 et CNAME pour la messagerie',
                'DHCP pour IPv4 et HTTP pour la messagerie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’enregistrement **`A`** mappe un nom vers une adresse **IPv4** (`AAAA` vers IPv6), tandis que **`MX`** (*Mail Exchanger*) désigne les serveurs chargés de recevoir les e-mails du domaine.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'DHCP (DORA)',
            stepTheme: 'green',
            stepTitle: 'Attribution automatique par DHCP : le processus en 4 étapes **DORA**',
            paragraphText:
              'Configurer manuellement l’adresse IP, le masque, la passerelle et les DNS sur les 2 000 smartphones et ordinateurs d’un campus serait impossible et générerait d’innombrables conflits d’IP. **DHCP** (*Dynamic Host Configuration Protocol*, UDP 67/68) automatise entièrement cette tâche.\n' +
              '• **1. `D` — DHCP Discover (Client → Broadcast `255.255.255.255`)** : le PC fraîchement connecté (IP source `0.0.0.0`) crie sur le LAN « Y a-t-il un serveur DHCP ? ».\n' +
              '• **2. `O` — DHCP Offer (Serveur → Client)** : le serveur DHCP propose une adresse IP disponible dans son pool, le masque, la passerelle, le DNS et la durée du **bail (*lease*)**.\n' +
              '• **3. `R` — DHCP Request (Client → Broadcast)** : le client accepte officiellement cette offre (en broadcast pour prévenir d’éventuels autres serveurs DHCP que leurs offres sont déclinées).\n' +
              '• **4. `A` — DHCP Acknowledge / ACK (Serveur → Client)** : le serveur valide et enregistre définitivement le bail.\n' +
              'Exemple : si un serveur DHCP est inaccessible sous Windows, le poste s’auto-attribue une adresse **APIPA (`169.254.x.x/16`)**, signe immédiat d’une panne DHCP !',
            keyRule:
              'Moyen mnémotechnique infaillible : **DORA** = `Discover → Offer → Request → Ack` (sur UDP 67/68). Et une IP en `169.254.x.x` (APIPA) signale un échec DHCP !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p2_q3',
              type: 'mcq',
              prompt: 'Dans quel ordre exact s’enchaînent les quatre messages du protocole **DHCP** permettant à un client d’obtenir son bail IP ?',
              options: [
                'Offer → Discover → Ack → Request',
                'Discover → Offer → Request → Acknowledge (DORA)',
                'SYN → Offer → Request → FIN',
                'Request → Discover → Offer → Acknowledge',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’acronyme **DORA** résume exactement la séquence DHCP : **D**iscover (client), **O**ffer (serveur), **R**equest (client), **A**cknowledge (serveur).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'HTTP / HTTPS',
            stepTheme: 'blue',
            stepTitle: 'Web HTTP vs HTTPS : requêtes, codes de statut et sécurité TLS',
            paragraphText:
              'Le World Wide Web fonctionne sur un dialogue client-serveur sans état régi par **HTTP** (`TCP 80`) et sa version sécurisée **HTTPS** (`TCP 443`).\n' +
              '• **Méthodes HTTP principales** : `GET` (récupérer une ressource), `POST` (envoyer des données de formulaire ou créer une ressource), `PUT/PATCH` (mettre à jour), `DELETE` (supprimer).\n' +
              '• **Familles de codes de statut** : **`2xx`** succès (`200 OK`, `201 Created`), **`3xx`** redirection (`301/302`), **`4xx`** erreur client (`401 Unauthorized`, `403 Forbidden`, `404 Not Found`), **`5xx`** erreur serveur (`500 Internal Server Error`, `503 Service Unavailable`).\n' +
              '• **Pourquoi HTTPS est indispensable** : HTTP transmet mots de passe, cookies et coordonnées bancaires **en clair** (lisibles par n’importe quel pirate sur un Wi-Fi public) ; **HTTPS** ajoute la couche **TLS** garantissant **confidentialité** (chiffrement), **intégrité** et **authentification** du serveur par certificat numérique.\n' +
              'Exemple : ne saisis jamais tes identifiants bancaires ou Mobile Money sur une page affichant `http://` sans le cadenas HTTPS/TLS !',
            keyRule:
              'Codes HTTP : `2xx` = Succès, `3xx` = Redirection, `4xx` = Erreur côté client (`404`), `5xx` = Erreur côté serveur (`500`). Toujours exiger **HTTPS (TCP 443)** pour toute donnée sensible.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p2_q4',
              type: 'mcq',
              prompt: 'Quelle différence de sécurité fondamentale sépare **HTTPS (port 443)** de **HTTP (port 80)** ?',
              options: [
                'HTTPS utilise UDP tandis que HTTP utilise TCP.',
                'HTTPS encapsule HTTP dans un tunnel chiffré TLS assurant confidentialité, intégrité et authentification du serveur par certificat.',
                'HTTPS supprime le besoin de résolution DNS.',
                'HTTPS est réservé exclusivement aux réseaux privés sans Internet.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'HTTP circule intégralement en texte clair sur TCP 80 ; **HTTPS (HTTP over TLS, TCP 443)** chiffre l’ensemble des échanges et authentifie l’identité du serveur via un certificat numérique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Messagerie',
            stepTheme: 'violet',
            stepTitle: 'Messagerie électronique : SMTP (envoi) vs POP3 et IMAP (réception)',
            paragraphText:
              'Contrairement à une idée reçue, l’envoi et la lecture des courriers électroniques ne reposent pas sur le même protocole.\n' +
              '• **SMTP (*Simple Mail Transfer Protocol*, TCP `25` inter-serveurs / `587` soumission authentifiée)** : protocole exclusivement dédié à l’**envoi** des e-mails du client vers son serveur et au relais entre serveurs de messagerie.\n' +
              '• **POP3 (*Post Office Protocol v3*, TCP `110` / `995` sécurisé)** : télécharge les e-mails sur l’appareil local (et les supprime souvent du serveur) — peu adapté quand on consulte ses mails sur PC, smartphone et tablette.\n' +
              '• **IMAP (*Internet Message Access Protocol*, TCP `143` / `993` sécurisé)** : **synchronise** en temps réel les dossiers, statuts lu/non lu et messages directement sur le serveur entre tous les appareils de l’utilisateur.\n' +
              'Exemple : si tu lis un e-mail professionnel sur ton smartphone en **IMAP**, il apparaît instantanément comme « lu » sur ton ordinateur de bureau !',
            keyRule:
              '**SMTP** = Envoi d’e-mails ; **POP3** = Réception/téléchargement mono-poste ; **IMAP** = Réception/synchronisation multi-appareils sur le serveur.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p2_q5',
              type: 'mcq',
              prompt: 'Un cadre commercial veut que ses e-mails, ses dossiers et le statut « lu / non lu » restent automatiquement synchronisés entre son smartphone, son ordinateur portable et sa tablette. Quel couple de protocoles doit-il configurer ?',
              options: [
                'SMTP pour l’envoi et IMAP (sécurisé) pour la réception/synchronisation',
                'POP3 pour l’envoi et FTP pour la réception',
                'DHCP pour l’envoi et DNS pour la réception',
                'TFTP pour l’envoi et Telnet pour la réception',
              ],
              correctAnswerIndex: 0,
              explanation:
                '**SMTP** assure l’envoi des messages, tandis qu’**IMAP** conserve et synchronise l’état complet de la boîte aux lettres sur le serveur pour tous les appareils connectés.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Administration & Fichiers',
            stepTheme: 'orange',
            stepTitle: 'Bannir les protocoles en clair : SSH vs Telnet, SFTP vs FTP/TFTP',
            paragraphText:
              'Les premiers protocoles d’Internet (années 1970–1980) avaient été conçus dans un climat académique de confiance, sans chiffrement : les utiliser aujourd’hui sur un réseau ouvert expose immédiatement les mots de passe !\n' +
              '• **Telnet (`TCP 23`) vs SSH (`TCP 22`)** : Telnet transmet chaque frappe clavier — y compris le mot de passe administrateur `root` — **en texte clair** ; **SSH (*Secure Shell*)** chiffre intégralement la session de ligne de commande et supporte l’authentification par clés asymétriques.\n' +
              '• **FTP (`TCP 20/21`) vs TFTP (`UDP 69`) vs SFTP (`TCP 22`)** : FTP transfère identifiants et fichiers en clair (sur 2 canaux séparés : contrôle `21` et données `20`) ; **TFTP** (*Trivial FTP*, `UDP 69`) est minimaliste sans mot de passe (utilisé en LAN isolé pour démarrer des équipements ou sauvegarder des firmwares) ; en production, on utilise **SFTP** (sur SSH port 22) ou **FTPS**.\n' +
              'Exemple : un administrateur qui configure un routeur ou un serveur Cloud à distance utilise exclusivement **SSH (port 22)** et désactive totalement Telnet.',
            keyRule:
              'Toujours remplacer **Telnet (23)** par **SSH (22)** et **FTP (21)** par **SFTP/FTPS** sur tout réseau connecté à Internet.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p2_q6',
              type: 'mcq',
              prompt: 'Pourquoi doit-on impérativement utiliser **SSH (TCP 22)** plutôt que **Telnet (TCP 23)** pour administrer un serveur ou un routeur à distance ?',
              options: [
                'Parce que Telnet utilise UDP et ne supporte pas le texte.',
                'Parce que Telnet transmet les identifiants et commandes en clair sur le réseau, alors que SSH chiffre l’intégralité de la session.',
                'Parce que SSH ne nécessite aucune adresse IP.',
                'Parce que Telnet ne fonctionne qu’en IPv6.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Telnet envoie mots de passe et commandes en clair (facilement interceptables par Wireshark) ; **SSH** établit un canal entièrement chiffré et authentifié sur TCP port 22.',
            },
          },
        ],
      }),

      // POINT 5.3
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch5_p3',
        order: 3,
        title: 'Traduction d’adresses (NAT/PAT), pare-feu (Firewall) et zone démilitarisée (DMZ)',
        summary:
          'Comprendre comment NAT/PAT permet à tout un LAN privé d’accéder à Internet avec une seule IP publique, comment un pare-feu filtre les flux et comment une DMZ protège le réseau interne.',
        conceptExplanation:
          'Connecter un réseau d’entreprise (utilisant des adresses privées RFC 1918 comme `192.168.1.0/24`) au réseau mondial Internet soulève deux défis majeurs : la **pénurie d’adresses IPv4 publiques** et la **protection contre les cyberattaques**.\n\n' +
          '• **NAT (*Network Address Translation*) et PAT (*Port Address Translation* / NAT surchargé)** : fonction exécutée sur le routeur de bordure (ou la box domestique). Le **NAT statique** associe 1 IP privée ↔ 1 IP publique (ex. publier un serveur). Le **PAT (NAT dynamique avec ports)** permet à **des centaines d’hôtes privés de partager UNE SEULE adresse IP publique** en traduisant simultanément l’IP source ET le **numéro de port source** dans une table de traduction dynamique !\n' +
          '• **Pare-feu (*Firewall*)** : dispositif matériel ou logiciel qui inspecte et filtre les flux entrants et sortants selon une politique de sécurité (filtrage par paquets IP/ports sans état, filtrage **à états / *Stateful*** suivant les sessions TCP, et **pare-feu nouvelle génération NGFW** inspectant jusqu’en couche 7 Application).\n' +
          '• **DMZ (*Demilitarized Zone*)** : sous-réseau tampon isolé entre Internet et le LAN interne hébergeant les serveurs accessibles depuis l’extérieur (Web, Mail, DNS public), afin qu’une compromission d’un serveur public ne donne jamais un accès direct au réseau interne de l’entreprise.',
        formulas: [
          {
            name: 'Mécanisme de traduction PAT (N adresses privées → 1 adresse publique)',
            formula: '(\\text{IP}_{\\text{priv}},\\; \\text{Port}_{\\text{priv}}) \\;\\xleftrightarrow{\\text{Table PAT du routeur}}\\; (\\text{IP}_{\\text{pub}},\\; \\text{Port}_{\\text{unique}})',
            note: 'Ex. PC1 `192.168.1.10:50120` → `41.202.18.5:60001` et PC2 `192.168.1.11:50120` → `41.202.18.5:60002` !',
          },
        ],
        keyRule:
          'PAT (NAT avec traduction de ports) a sauvé IPv4 en permettant à tout un LAN privé de sortir sur Internet via une unique IP publique ; un pare-feu *Stateful* + une **DMZ** forment le socle de la sécurité périmétrique.',
        workedExample: {
          title: 'Architecture périmétrique sécurisée d’une startup fintech abidjanaise',
          statement:
            'Une fintech héberge un serveur Web public (`HTTPS 443`), un serveur de base de données clients (interne uniquement) et 40 postes employés (`192.168.10.0/24`), avec une seule IP publique `41.202.50.12`. Concevoir le rôle du PAT, du pare-feu et de la DMZ.',
          methodSteps: [
            '**Sortie Internet des 40 employés** : le routeur/pare-feu applique le **PAT** traduisant `192.168.10.x:port` vers l’unique IP publique `41.202.50.12:port_unique`.',
            '**Placement en DMZ** : le serveur Web public est placé dans une **DMZ** (`172.16.1.10/24`) distincte du LAN interne (`192.168.10.0/24`) ; une règle de **Port Forwarding (DNAT)** redirige `41.202.50.12:443` vers `172.16.1.10:443`.',
            '**Règles du pare-feu (3 zones : WAN, DMZ, LAN)** : Internet → DMZ autorisé **uniquement sur `TCP 443`** ; Internet → LAN **strictement interdit** ; DMZ → Base de données interne strictement filtré (uniquement le port SQL requis), et tout autre flux **bloqué par défaut (*Default Deny*)**.',
          ],
          conclusion:
            'Si le serveur Web en DMZ est attaqué, le pare-feu empêche l’attaquant de rebondir librement vers les postes des employés et le cœur financier.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'NAT & PAT',
            stepTheme: 'blue',
            stepTitle: 'Traduction d’adresses NAT et PAT : partager une IP publique pour tout un LAN',
            paragraphText:
              'Les adresses privées RFC 1918 (`10.x`, `172.16–31.x`, `192.168.x`) étant rejetées par les routeurs d’Internet, un mécanisme de traduction est obligatoire en sortie de tout réseau privé IPv4.\n' +
              '• **NAT statique (1 vers 1)** : mappe de façon permanente 1 IP privée sur 1 IP publique (utile pour rendre joignable un serveur interne).\n' +
              '• **PAT (*Port Address Translation*, ou NAT surchargé / NAPT)** : réécrit à la volée l’IP source privée en **unique IP publique** de la box/routeur ET assigne un **numéro de port source public distinct** à chaque connexion sortante, consigné dans une **table NAT/PAT**.\n' +
              '• **Trajet retour** : quand la réponse du serveur web revient vers `(IP_pub : port_60001)`, le routeur consulte sa table PAT, restaure `(192.168.1.10 : 50120)` et remet le paquet au bon ordinateur du LAN !\n' +
              'Exemple : grâce au PAT, les 200 étudiants connectés en Wi-Fi sur un bâtiment universitaire surfent simultanément avec une seule adresse IPv4 publique allouée par le FAI.',
            keyRule:
              'Sans le **PAT** (traduction simultanée de l’IP ET du numéro de port), plusieurs machines d’un LAN ne pourraient pas partager en même temps une seule adresse IP publique.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p3_q1',
              type: 'mcq',
              prompt: 'Comment le routeur d’une entreprise utilisant le **PAT (NAT surchargé)** avec une unique IP publique `41.202.18.5` sait-il à quel PC interne (`192.168.1.10` ou `192.168.1.11`) remettre une réponse web entrante ?',
              options: [
                'En diffusant la réponse en Broadcast à tous les PC du LAN.',
                'En associant dans sa table PAT un **numéro de port source unique** à chaque connexion interne, ce qui identifie exactement le PC d’origine sur le paquet retour.',
                'En changeant l’adresse MAC du serveur web distant.',
                'En demandant au serveur DNS quel PC a effectué la requête.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le PAT maintient une table liant `(IP privée, port privé) ↔ (IP publique, port public unique)`. Le port destination du paquet retour lui indique exactement vers quelle IP privée effectuer la traduction inverse.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'DNAT / Port Forwarding',
            stepTheme: 'violet',
            stepTitle: 'Redirection de ports (DNAT / *Port Forwarding*) pour publier un service interne',
            paragraphText:
              'Le PAT classique ne fonctionne que pour les connexions **initiées depuis l’intérieur** (du LAN vers Internet). Comment faire si un client externe doit joindre un serveur Web hébergé derrière une seule IP publique ?\n' +
              '• **DNAT / Redirection de port (*Port Forwarding*)** : règle statique configurée sur le routeur de bordure indiquant que tout trafic entrant sur `(IP_publique : Port X)` doit être redirigé vers `(IP_privée_serveur : Port Y)`.\n' +
              '• **Coexistence de plusieurs services** : sur une seule IP publique `41.202.50.12`, on peut rediriger le port `443` vers le serveur Web (`172.16.1.10:443`) et le port `25` vers le serveur Mail (`172.16.1.20:25`) !\n' +
              '• **Précaution de sécurité** : ne jamais rediriger de ports d’administration (`SSH 22`, `RDP 3389`, bases de données `3306`) directement vers tout Internet sans VPN ni filtrage strict d’IP sources.\n' +
              'Exemple : une caméra de vidéosurveillance ou un serveur Web d’agence rendu accessible depuis l’extérieur utilise exactement une règle de Port Forwarding.',
            keyRule:
              'SNAT/PAT traduit l’IP **source** en sortie (LAN → Internet) ; DNAT (*Port Forwarding*) traduit l’IP et le port **destination** en entrée (Internet → Serveur).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p3_q2',
              type: 'mcq',
              prompt: 'Quelle technique permet de rediriger automatiquement les connexions entrantes reçues sur le port `443` de l’IP publique du routeur vers un serveur Web interne situé en `172.16.1.10:443` ?',
              options: [
                'Le routage RIP',
                'La redirection de port (DNAT / *Port Forwarding*)',
                'La requête ARP',
                'Le protocole TFTP',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La **redirection de port (DNAT / *Port Forwarding*)** réécrit l’adresse IP (et éventuellement le port) de destination des paquets entrants vers le serveur interne choisi.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Pare-feu',
            stepTheme: 'blue',
            stepTitle: 'Pare-feu (*Firewall*) : filtrage sans état, à états (*Stateful*) et NGFW (L7)',
            paragraphText:
              'Un **pare-feu** est la barrière de contrôle placée à la frontière d’un réseau (ou directement sur un poste : pare-feu hôte) qui autorise (`ALLOW`) ou bloque (`DENY/DROP`) le trafic selon une **politique de sécurité**.\n' +
              '• **Filtrage de paquets sans état (*Stateless* / ACL, L3–L4)** : inspecte chaque paquet isolément selon son IP source, IP destination, protocole et ports, sans savoir s’il appartient à une session déjà ouverte.\n' +
              '• **Pare-feu à états (*Stateful Inspection*, L3–L4)** : suit dynamiquement la table des connexions actives (ex. *3-Way Handshake* TCP) — il autorise automatiquement les paquets **retour** d’une connexion légitime initiée depuis le LAN, tout en bloquant toute tentative non sollicitée venue d’Internet !\n' +
              '• **Pare-feu nouvelle génération (NGFW / Applicatif, L7)** : inspecte le contenu applicatif (DPI), détecte les intrusions (IPS), filtre les URL malveillantes et identifie les applications même si elles changent de port.\n' +
              'Exemple : la politique la plus sûre suit le principe **« Tout ce qui n’est pas explicitement autorisé est interdit » (*Default Deny*)**.',
            keyRule:
              'Principe d’or d’un pare-feu : **Default Deny** (tout bloquer par défaut en dernière règle, et n’ouvrir que les flux strictement nécessaires) + inspection **Stateful**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p3_q3',
              type: 'mcq',
              prompt: 'Quel avantage décisif offre un pare-feu **à états (*Stateful*)** par rapport à un simple filtre de paquets sans état (*Stateless*) ?',
              options: [
                'Il remplace le câblage en fibre optique.',
                'Il mémorise l’état des sessions actives (ex. connexions TCP initiées depuis le LAN) afin d’autoriser uniquement les réponses légitimes et de rejeter les paquets entrants non sollicités.',
                'Il supprime le besoin d’adresses IP sur le réseau interne.',
                'Il autorise par défaut tous les ports TCP de 0 à 65535.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un pare-feu *Stateful* tient à jour une table des connexions en cours : il sait si un paquet entrant est bien la réponse légitime à une requête sortante du LAN ou une intrusion non sollicitée.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Architecture DMZ',
            stepTheme: 'blue',
            stepTitle: 'Zone démilitarisée (DMZ) : isoler les serveurs exposés à Internet',
            paragraphText:
              'Héberger un serveur Web public directement au milieu du réseau interne (à côté des PC comptables et des serveurs de paie) est une grave erreur d’architecture : si un pirate exploite une faille Web, il contrôle immédiatement tout le LAN !\n' +
              '• **Principe de la DMZ (*Demilitarized Zone*)** : sous-réseau **tampon isolé** connecté à une troisième interface dédiée du pare-feu (distincte du **WAN/Internet** et du **LAN interne**).\n' +
              '• **Matrice de flux classique d’une DMZ** :\n' +
              '  — `Internet → DMZ` : autorisé **uniquement** sur les ports publics publiés (ex. `HTTPS 443`, `SMTP 25`).\n' +
              '  — `LAN → DMZ` et `LAN → Internet` : autorisés selon la politique interne.\n' +
              '  — `Internet → LAN` et **`DMZ → LAN`** : **strictement bloqués par défaut** (sauf flux applicatif ultra-ciblé et contrôlé).\n' +
              'Exemple : le portail web public d’une université ou d’une banque réside toujours en **DMZ**, jamais dans le même sous-réseau que la direction financière.',
            keyRule:
              'Une **DMZ** sert de sas de sécurité : même si un serveur public en DMZ est compromis depuis Internet, le pare-feu bloque tout mouvement latéral vers le **LAN interne**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p3_q4',
              type: 'mcq',
              prompt: 'Quel est l’objectif de sécurité principal d’une **DMZ (Zone Démilitarisée)** dans l’architecture réseau d’une entreprise ?',
              options: [
                'Accélérer le débit Wi-Fi des smartphones des visiteurs.',
                'Isoler les serveurs accessibles depuis Internet (Web, Mail, DNS public) dans un sous-réseau tampon afin de protéger le LAN interne en cas de compromission.',
                'Remplacer tous les switches par des hubs.',
                'Désactiver tout chiffrement HTTPS pour simplifier la maintenance.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La DMZ cloisonne les serveurs exposés à Internet entre deux barrières de filtrage : si l’un d’eux est piraté, l’attaquant reste confiné dans la DMZ sans accès direct au LAN interne.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Ordre des règles',
            stepTheme: 'orange',
            stepTitle: 'Piège critique des règles de pare-feu (ACL) : évaluation séquentielle de haut en bas',
            paragraphText:
              'Configurer un pare-feu ou une liste de contrôle d’accès (**ACL**) comporte un piège logique identique à la cascade `SI … SINONSI` en algorithmique : **l’ordre des règles décide de tout** !\n' +
              '• **Principe « Première correspondance gagnante » (*First Match*)** : le pare-feu compare chaque paquet aux règles **de la ligne 1 vers le bas** et applique immédiatement la première règle qui correspond (sans lire les suivantes !).\n' +
              '• **Règle implicite finale (`DENY ALL`)** : toute règle non couverte tombe dans le refus final implicite.\n' +
              '• **Erreur catastrophique** : placer `ALLOW TCP ANY → ANY` en ligne 1 suivi de `DENY TCP ANY → Port 23` en ligne 2 rend la ligne 2 totalement inefficace (règle masquée) !\n' +
              '• **Bonne pratique** : toujours placer les règles les **plus spécifiques** (ex. bloquer une IP précise ou autoriser un port précis) **EN HAUT**, et les règles les **plus générales** **EN BAS**.\n' +
              'Exemple : pour interdire l’accès SSH uniquement au poste `192.168.1.50` tout en l’autorisant au reste du réseau `192.168.1.0/24`, le `DENY 192.168.1.50` DOIT impérativement précéder l’`ALLOW 192.168.1.0/24` !',
            keyRule:
              'Dans un pare-feu / ACL, l’évaluation s’arrête à la **première règle qui correspond** : place toujours les règles spécifiques AVANT les règles générales, et termine par `DENY ALL`.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p3_q5',
              type: 'mcq',
              prompt: 'Un administrateur veut bloquer l’accès web (`TCP 80/443`) pour le seul poste `192.168.1.40` tout en l’autorisant pour le reste du réseau `192.168.1.0/24`. Dans quel ordre doit-il écrire ses règles de pare-feu ?',
              options: [
                'Ligne 1 : ALLOW 192.168.1.0/24 → 80/443 ; Ligne 2 : DENY 192.168.1.40 → 80/443',
                'Ligne 1 : DENY 192.168.1.40 → 80/443 ; Ligne 2 : ALLOW 192.168.1.0/24 → 80/443 ; Ligne 3 : DENY ALL',
                'L’ordre des règles n’a aucune importance sur un pare-feu.',
                'Ligne 1 : DENY ALL ; Ligne 2 : ALLOW 192.168.1.0/24 → 80/443',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Parce que le pare-feu s’arrête à la première règle correspondante (*First Match*), la règle spécifique `DENY 192.168.1.40` doit obligatoirement être placée AVANT la règle générale `ALLOW 192.168.1.0/24`, sinon `192.168.1.40` serait autorisé dès la ligne 1 !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'VPN & Défense',
            stepTheme: 'green',
            stepTitle: 'Tunnels chiffrés VPN et synthèse de la défense en profondeur',
            paragraphText:
              'À l’ère du télétravail, du Cloud et des entreprises multisites en zone UEMOA, la sécurité réseau combine plusieurs couches complémentaires (**défense en profondeur**).\n' +
              '• **VPN (*Virtual Private Network* — IPsec, WireGuard, OpenVPN)** : crée un **tunnel chiffré et authentifié** à travers un réseau public non fiable (Internet, Wi-Fi d’hôtel ou d’aéroport) pour relier un télétravailleur ou une agence distante au LAN privé du siège comme s’il était câblé localement.\n' +
              '• **Défense en profondeur sur toute la pile OSI** : **L2** (VLANs, WPA3, Port Security) + **L3** (sous-réseaux segmentés, routage sécurisé, VPN IPsec) + **L4** (pare-feu *Stateful*, fermeture des ports inutiles) + **L6/L7** (HTTPS/TLS, SSH, authentification forte MFA, mises à jour).\n' +
              '• **Réflexe d’ingénieur** : aucune barrière unique n’est infaillible — c’est l’empilement cohérent de ces contrôles qui rend un système d’information résilient.\n' +
              'Exemple : un comptable en déplacement à Bouaké active son **VPN d’entreprise** avant d’ouvrir le progiciel ERP hébergé au siège d’Abidjan.',
            keyRule:
              'Un **VPN** sécurise les échanges distants par chiffrement de bout en bout sur Internet ; la **défense en profondeur** protège chaque couche du modèle OSI (L2 à L7).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch5_p3_q6',
              type: 'mcq',
              prompt: 'Quelle technologie permet à une agence distante à Bouaké ou à un collaborateur en déplacement d’accéder en toute confidentialité aux serveurs internes du siège d’Abidjan à travers Internet ?',
              options: [
                'Le protocole Telnet sur port 23',
                'Un tunnel chiffré **VPN** (*Virtual Private Network*)',
                'Une trame Ethernet Broadcast',
                'Le protocole TFTP sur UDP 69',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un **VPN** (IPsec, WireGuard, OpenVPN) encapsule et chiffre l’ensemble du trafic dans un tunnel sécurisé traversant Internet, garantissant confidentialité et intégrité jusqu’au réseau privé du siège.',
            },
          },
        ],
      }),
    ],
  },
];
