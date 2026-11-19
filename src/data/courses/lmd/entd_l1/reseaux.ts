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
// RÉSEAUX & SERVICES — ENTD LICENCE 1 (ESATIC)
// Sources : Cours_RSX_Chapitre_1, 2, 3 (début & suite/fin), 4
// ============================================================================

export const RESEAUX_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Généralités sur les réseaux et réseaux locaux (LAN)
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch1',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Réseaux & Services (Chapitres 1 et 2)',
    title: 'Chapitre 1 — Généralités sur les réseaux et réseaux locaux (LAN)',
    summary:
      'Classifications (PAN/LAN/MAN/WAN, Client-Serveur/P2P), composants physiques et logiques, topologies physiques (bus, anneau, étoile, maillée) et méthodes d’accès (CSMA/CD, CSMA/CA, Token Ring).',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch1_p1',
        order: 1,
        title: 'Définition, classifications et composants d’un réseau informatique',
        summary:
          'Maîtriser les critères de classification (étendue, relation fonctionnelle) et les 3 piliers d’un réseau.',
        conceptExplanation:
          'Un **réseau informatique** est un ensemble d’équipements reliés entre eux pour échanger des données numériques selon des règles préétablies appelées **protocoles**. Il permet le partage de ressources physiques, logicielles et de données, ainsi que la communication distante.\n\n' +
          '• **Classification par étendue géographique** :\n' +
          '  — **PAN** (*Personal Area Network*, $\\leqslant 10$ m) : équipements personnels (Bluetooth, IrDA → WPAN).\n' +
          '  — **LAN** (*Local Area Network*, $10$ m à $5$ km) : pièce, bâtiment, campus ou entreprise.\n' +
          '  — **MAN** (*Metropolitan Area Network*, $5$ km à $50$ km) : interconnexion de LAN dans une même ville (ex. agences d’une banque).\n' +
          '  — **WAN** (*Wide Area Network*, $> 50$ km, pays/continents) : interconnecte des LAN/MAN via opérateurs (ex. Internet, **RITER** pour les universités ivoiriennes, **WACREN** pour l’Afrique de l’Ouest et du Centre, RENATER en France).\n' +
          '• **Classification par relation fonctionnelle** : **Client/Serveur** (serveur offrant ressources et réponses aux requêtes clients) vs **Peer-to-Peer / P2P** (postes équivalents, à la fois client et serveur).\n' +
          '• **Les 3 composants fondamentaux** : (1) **Périphériques** finaux/terminaux (PC, smartphone, imprimante) et intermédiaires (switch, routeur, pare-feu) ; (2) **Supports de transmission** (cuivre/impulsions électriques, fibre optique/lumière, sans-fil/ondes radio) ; (3) **Services et processus** logiciels.',
        formulas: [
          {
            name: 'Échelle des étendues réseau (Cours Ch. 1)',
            formula: '\\text{PAN } (\\leqslant 10\\text{ m}) < \\text{LAN } (10\\text{ m} - 5\\text{ km}) < \\text{MAN } (5 - 50\\text{ km}) < \\text{WAN } (> 50\\text{ km})',
            note: 'RITER (Côte d’Ivoire), WACREN (Afrique de l’Ouest/Centre) et Internet sont des WAN.',
          },
        ],
        keyRule:
          'Distinguer les **périphériques finaux** (source/destination des messages de l’utilisateur) des **périphériques intermédiaires** (switch, routeur, pare-feu qui acheminent le trafic).',
        workedExample: {
          title: 'Classification de l’infrastructure d’une banque et des universités ivoiriennes',
          statement:
            'Classer selon leur étendue et leurs composants : (1) liaison Bluetooth entre un smartphone et une oreillette ; (2) réseau interne du campus de l’ESATIC ; (3) interconnexion des agences bancaires dans la ville d’Abidjan ; (4) le réseau RITER reliant les universités de Côte d’Ivoire.',
          methodSteps: [
            '(1) Distance $< 10$ m, équipements personnels sans fil → **WPAN** (PAN sans fil).',
            '(2) Réseau privé d’un campus/bâtiment ($< 5$ km) → **LAN** (réseau local).',
            '(3) Interconnexion de plusieurs LAN à l’échelle d’une métropole ($5$ à $50$ km) → **MAN**.',
            '(4) Interconnexion de LAN universitaires à l’échelle nationale ($> 50$ km) → **WAN** (cité explicitement dans le Chapitre 1).',
          ],
          conclusion:
            'Respectivement : WPAN, LAN, MAN et WAN.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étendue réseau',
            stepTheme: 'blue',
            stepTitle: 'PAN, LAN, MAN et WAN',
            paragraphText:
              'La classification par étendue distingue : PAN ($\\leqslant 10$ m), LAN ($10$ m à $5$ km), MAN ($5$ km à $50$ km, échelle d’une ville) et WAN (pays, continents). Le RITER (réseau des universités ivoiriennes) et le WACREN sont des exemples de WAN cités dans le cours.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quelle catégorie de réseau interconnecte plusieurs agences d’une même banque réparties dans une même métropole sur une étendue de $5$ à $50$ km ?',
              options: ['PAN', 'MAN', 'LAN', 'WPAN'],
              correctAnswerIndex: 1,
              explanation:
                'Un MAN (*Metropolitan Area Network*) interconnecte plusieurs LAN situés dans une même ville/métropole, avec une étendue comprise entre $5$ et $50$ km.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Relation fonctionnelle',
            stepTheme: 'blue',
            stepTitle: 'Architecture Client/Serveur vs Peer-to-Peer (P2P)',
            paragraphText:
              'Dans un réseau **Client/Serveur**, des machines dédiées (serveurs) fournissent des services et répondent aux requêtes des postes clients. Dans un réseau **Peer-to-Peer** (Pair-à-Pair / Égal-à-Égal), tous les postes sont équivalents et jouent simultanément le rôle de client et de serveur pour des services distincts.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Quelle caractéristique définit un réseau **Peer-to-Peer (P2P)** ?',
              options: [
                'Un serveur central unique contrôle obligatoirement toutes les connexions.',
                'Il utilise exclusivement la fibre optique.',
                'Les postes sont équivalents et agissent à la fois comme clients et comme serveurs.',
                'Il est limité à une portée de 10 mètres.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En P2P (Pair-à-Pair), il n’y a pas de serveur dédié hiérarchiquement supérieur : chaque poste est à la fois client et serveur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Composants',
            stepTheme: 'violet',
            stepTitle: 'Périphériques finaux vs périphériques intermédiaires',
            paragraphText:
              'Les **périphériques finaux** (terminaux) sont la source et la destination des échanges utilisateur (ordinateur, smartphone, téléphone IP, imprimante réseau). Les **périphériques intermédiaires** (commutateur/switch, routeur, pare-feu) assurent l’interconnexion et l’acheminement entre terminaux.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Parmi ces équipements, lequel appartient à la catégorie des **périphériques intermédiaires** ?',
              options: [
                'Un routeur ou un commutateur (switch).',
                'Une imprimante réseau.',
                'Un smartphone.',
                'Un téléphone IP.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le switch, le routeur et le pare-feu sont des périphériques intermédiaires ; l’imprimante réseau, le smartphone et le téléphone IP sont des périphériques finaux (terminaux).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Supports',
            stepTheme: 'blue',
            stepTitle: 'Les trois grandes familles de supports de transmission',
            paragraphText:
              'Les signaux sont véhiculés sur trois types de supports : (1) câbles métalliques en **cuivre** (coaxial, paire torsadée) transportant des **impulsions électriques**, (2) **fibre optique** en verre transportant de la **lumière**, (3) **sans-fil** utilisant des **ondes radio**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Sous quelle forme physique les données binaires circulent-elles dans une fibre optique ?',
              options: [
                'Des impulsions électriques.',
                'Des ondes radioélectriques.',
                'Des ondes acoustiques.',
                'Des impulsions lumineuses (lumière).',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La fibre optique (câble optique en fibre de verre) transporte l’information sous forme de signaux lumineux, contrairement au cuivre (impulsions électriques) et au Wi-Fi (ondes radio).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Services & Processus',
            stepTheme: 'blue',
            stepTitle: 'Rôle des services et processus réseau',
            paragraphText:
              'Les **services** sont des programmes fonctionnant en arrière-plan sur les serveurs pour répondre aux requêtes (ex. serveur web, messagerie). Les **processus** clients s’exécutent sur les terminaux des utilisateurs pour initier la communication.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Quels sont les **trois éléments fondamentaux** sur lesquels repose tout réseau informatique selon le Chapitre 1 ?',
              options: [
                'Uniquement les câbles, le Wi-Fi et Internet.',
                'Les périphériques, les supports de transmission, et les services et processus.',
                'Les adresses IP, les navigateurs et les imprimantes.',
                'Le bus, l’anneau et l’étoile.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Chapitre 1 (p. 17) identifie exactement ces 3 piliers : périphériques, supports de transmission, et services/processus.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'WAN régionaux',
            stepTheme: 'slate',
            stepTitle: 'RITER, WACREN et Internet',
            paragraphText:
              'Un WAN appartient généralement à un opérateur télécom ou un consortium académique. Le cours cite quatre WAN emblématiques : Internet (le plus grand), RENATER (universités françaises), **RITER** (universités ivoiriennes) et **WACREN** (universités d’Afrique de l’Ouest et du Centre).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Que désigne le sigle **RITER** cité dans le cours de Réseaux à l’ESATIC ?',
              options: [
                'Un protocole de routage sans fil.',
                'Un modèle de câble coaxial épais.',
                'Le réseau étendu (WAN) interconnectant les universités ivoiriennes.',
                'Un équipement de couche physique.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Chapitre 1 cite RITER comme le WAN des universités ivoiriennes, aux côtés de WACREN (Afrique de l’Ouest et du Centre) et RENATER (France).',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch1_p2',
        order: 2,
        title: 'Topologies physiques, topologies logiques et méthodes d’accès LAN',
        summary:
          'Comparer bus, anneau, étoile et maillée, et maîtriser CSMA/CD (Ethernet), CSMA/CA (Wi-Fi) et passage de jeton (Token Ring).',
        conceptExplanation:
          'La **topologie physique** décrit l’agencement matériel des câbles et équipements :\n' +
          '• **Bus** : câble unique partagé auquel tous les nœuds sont rattachés ; diffusion à tous les postes.\n' +
          '• **Anneau** : liaisons point à point formant une boucle fermée ; circulation unidirectionnelle.\n' +
          '• **Étoile** : tous les nœuds reliés à un équipement central (hub ou switch) par lequel transite toute communication.\n' +
          '• **Maillée** : tous les nœuds interconnectés entre eux (redondance de chemins) ; pour $n$ nœuds, il faut exactement $\\frac{n(n - 1)}{2}$ câbles (ou topologie semi-maillée).\n\n' +
          'La **topologie logique** décrit comment circule l’information et la **méthode d’accès** au média :\n' +
          '• **Bus logique / Ethernet (IEEE 802.3)** : méthode **CSMA/CD** (*Carrier Sense Multiple Access with Collision Detection*) — écoute du média avant d’émettre et détection des collisions.\n' +
          '• **Wi-Fi (IEEE 802.11)** : variante **CSMA/CA** (*Collision Avoidance* — évitement de collisions), fonctionnant en mode **infrastructure** (via un Point d’Accès AP) ou en mode **ad hoc** (P2P direct sans AP).\n' +
          '• **Anneau logique / Token Ring (IEEE 802.5)** : méthode déterministe sans collision par **passage de jeton** (libre/occupé).\n' +
          '• **Bus à jeton (IEEE 802.4)** : créé par General Motors (anneau logique sur bus physique, aujourd’hui désuet).',
        formulas: [
          {
            name: 'Nombre de câbles en topologie maillée complète',
            formula: 'N_{\\text{câbles}} = \\frac{n(n - 1)}{2}',
            note: 'Où n est le nombre de nœuds (chaque paire distincte de nœuds est reliée par un câble).',
          },
        ],
        keyRule:
          'Ne pas confondre topologie **physique** (ex. étoile autour d’un hub) et topologie **logique** (ex. bus Ethernet CSMA/CD) ! Et associer **CSMA/CD → Ethernet filaire**, **CSMA/CA → Wi-Fi**.',
        workedExample: {
          title: 'Dimensionnement d’un réseau maillé et choix de méthode d’accès (Chapitre 2)',
          statement:
            '1) Combien de câbles faut-il pour interconnecter $8$ routeurs en topologie maillée complète ? 2) Un réseau local relie des ordinateurs portables sans fil autour d’une borne Wi-Fi : identifier le mode Wi-Fi et la méthode d’accès au média.',
          methodSteps: [
            '1) Formule de la topologie maillée complète : $N = \\frac{n(n - 1)}{2} = \\frac{8 \\times 7}{2} = 28$ câbles.',
            '2) Présence d’un point d’accès central (AP / borne Wi-Fi) → **mode infrastructure** (par opposition au mode ad hoc sans AP).',
            'Support radio Wi-Fi → méthode d’accès **CSMA/CA** (*Collision Avoidance*), car en radio une station ne peut pas écouter et émettre simultanément pour détecter une collision comme en filaire.',
          ],
          conclusion: 'Il faut $28$ câbles ; le Wi-Fi fonctionne en mode infrastructure avec CSMA/CA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Topologie maillée',
            stepTheme: 'green',
            stepTitle: 'Calculer le nombre de câbles d’un réseau maillé complet',
            paragraphText:
              'Dans une topologie maillée complète à $n$ nœuds, chaque nœud est relié directement aux $n - 1$ autres, ce qui représente $\\frac{n(n - 1)}{2}$ liaisons au total. Cette architecture offre une excellente tolérance aux pannes mais devient coûteuse dès que $n$ grandit.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Combien de câbles sont nécessaires pour relier $6$ nœuds en topologie **maillée complète** ?',
              options: ['$15$', '$30$', '$12$', '$6$'],
              correctAnswerIndex: 0,
              explanation:
                '$\\frac{n(n - 1)}{2} = \\frac{6 \\times 5}{2} = 15$ câbles.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Topologie étoile',
            stepTheme: 'blue',
            stepTitle: 'Fonctionnement de la topologie physique en étoile',
            paragraphText:
              'En topologie physique en étoile, tous les postes sont reliés à un nœud central (concentrateur/hub ou commutateur/switch). La coupure d’un câble n’affecte qu’un seul poste, mais la panne de l’équipement central paralyse tout le réseau.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Dans une topologie physique en étoile, par quel élément passe obligatoirement toute communication entre deux stations ?',
              options: [
                'Par un câble coaxial unique en bus.',
                'Par l’équipement central (hub ou switch).',
                'Par chacune des autres stations dans le sens de l’anneau.',
                'Par un câble dédié reliant directement les deux stations.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toutes les stations sont connectées à l’équipement central (hub ou switch), qui relaie le trafic vers le destinataire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'CSMA/CD vs CSMA/CA',
            stepTheme: 'violet',
            stepTitle: 'Méthodes d’accès Ethernet (802.3) et Wi-Fi (802.11)',
            paragraphText:
              'Ethernet (IEEE 802.3) utilise la méthode probabiliste **CSMA/CD** (*Collision Detection*) : écoute de la porteuse avant d’émettre, et détection d’éventuelles collisions. Le Wi-Fi (IEEE 802.11) utilise **CSMA/CA** (*Collision Avoidance*), qui cherche à éviter les collisions.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Quelle méthode d’accès au support est associée au réseau Ethernet sans fil (**Wi-Fi**) ?',
              options: [
                'CSMA/CD (Collision Detection)',
                'Token Ring (IEEE 802.5)',
                'CSMA/CA (Collision Avoidance)',
                'Bus à jeton (IEEE 802.4)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Chapitre 2 distingue clairement CSMA/CD pour Ethernet filaire (IEEE 802.3) et CSMA/CA pour le Wi-Fi.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Token Ring (802.5)',
            stepTheme: 'blue',
            stepTitle: 'Méthode déterministe par passage de jeton',
            paragraphText:
              'Dans la topologie logique en anneau (**Token Ring**, IEEE 802.5), un **jeton** (libre ou occupé) circule en permanence dans un seul sens. Seule la station qui capture le jeton libre a le droit d’émettre, ce qui élimine en principe toute collision (méthode déterministe).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Quelle est la particularité majeure de la méthode d’accès par **passage de jeton** (Token Ring / IEEE 802.5) ?',
              options: [
                'Toutes les stations émettent simultanément pour détecter les collisions.',
                'Elle nécessite obligatoirement un point d’accès Wi-Fi.',
                'Elle ne fonctionne que sur Internet (WAN).',
                'C’est une méthode déterministe sans collision : seul le nœud détenant le jeton libre peut émettre.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un unique jeton circulant donne un droit d’émission exclusif à un nœud à la fois, garantissant l’absence de collision.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Modes Wi-Fi',
            stepTheme: 'blue',
            stepTitle: 'Mode infrastructure vs mode ad hoc en Wi-Fi',
            paragraphText:
              'En Wi-Fi, le **mode infrastructure** relie tous les clients via un Point d’Accès (**AP**). Le **mode ad hoc** interconnecte directement les machines sans fil en point à point (P2P) sans AP : chaque machine joue à la fois le rôle de client et de point d’accès.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Comment s’appelle le mode Wi-Fi dans lequel des PC portables communiquent directement entre eux sans point d’accès (AP) ?',
              options: [
                'Le mode ad hoc.',
                'Le mode infrastructure.',
                'Le mode Ethernet commuté.',
                'Le mode Token Bus.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Chapitre 2 définit deux modes Wi-Fi : infrastructure (avec AP) et ad hoc (connexion directe P2P sans AP).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Histoire Ethernet',
            stepTheme: 'slate',
            stepTitle: 'Origine et évolution d’Ethernet',
            paragraphText:
              'Conçu en 1973 par le Dr **Robert Metcalfe** (laboratoires Xerox) à $10$ Mbits/s sur câble coaxial épais (portée $500$ m), Ethernet a évolué vers la paire torsadée et la fibre optique avec des débits en Gigabits/s, passant de l’Ethernet partagé (hub, CSMA/CD) à l’Ethernet commuté (switch).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Quelle norme IEEE correspond au standard **Ethernet** ?',
              options: [
                'IEEE 802.2',
                'IEEE 802.3',
                'IEEE 802.4',
                'IEEE 802.5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Récapitulatif des normes IEEE du cours : 802.2 = LLC, 802.3 = Ethernet (CSMA/CD), 802.4 = Bus à jeton, 802.5 = Token Ring, 802.11 = Wi-Fi.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Protocoles, codage, modèle OSI et normes IEEE 802
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch2',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Réseaux & Services (Chapitre 3 : Normes ISO et IEEE)',
    title: 'Chapitre 2 — Protocoles, codage, modèle OSI et normes IEEE 802',
    summary:
      'Codage binaire (ASCII, EBCDIC, Unicode), encapsulation, segmentation, synchronisation, les 7 couches du modèle OSI (rôles, PDU, équipements) et sous-couches LLC/MAC (IEEE 802.2 / 802.3).',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch2_p1',
        order: 1,
        title: 'Règles de communication : codage, encapsulation, segmentation et synchronisation',
        summary:
          'Comprendre comment un message est codé en bits, encapsulé dans une trame, segmenté et synchronisé.',
        conceptExplanation:
          'Toute communication réseau nécessite 3 éléments (source, destination, canal) et obéit à des **protocoles** organisés en **pile de protocoles** :\n\n' +
          '1. **Codage des messages** : conversion des caractères en suites de bits ($0$ et $1$). Un code sur $n$ bits permet de représenter **$2^n$ caractères distincts** :\n' +
          '   — **ASCII** (ANSI) : $7$ bits $\\implies 2^7 = 128$ caractères ($0$ à $127$, langue anglaise). **ASCII étendu** : $8$ bits $\\implies 256$ caractères (accents).\n' +
          '   — **EBCDIC** (IBM, mainframes) : $8$ bits ($256$ caractères), aujourd’hui abandonné.\n' +
          '   — **Unicode** : code universel destiné à représenter tous les alphabets du monde et les emojis.\n' +
          '2. **Format et encapsulation** : placer un message dans une enveloppe normée (trame comportant adresses source/destination) ; opération inverse à la réception = **désencapsulation**.\n' +
          '3. **Taille et segmentation** : découper un long message en fragments adaptés aux limites min/max de la trame, puis les réassembler chez le destinataire.\n' +
          '4. **Synchronisation** : regroupe la méthode d’accès, le **contrôle de flux** (adapter la vitesse d’envoi pour ne pas saturer le récepteur) et le **délai d’attente** de l’accusé de réception (timeout avant retransmission).',
        formulas: [
          {
            name: 'Capacité d’un code binaire à n bits',
            formula: 'N_{\\text{caractères}} = 2^n',
            note: 'n = 7 bits (ASCII) ⇒ 128 caractères ; n = 8 bits (ASCII étendu / EBCDIC) ⇒ 256 caractères.',
          },
        ],
        keyRule:
          'Ne pas confondre **encapsulation** (ajouter des en-têtes/adresses autour du message), **segmentation** (découper un long message en morceaux) et **contrôle de flux** (réguler le débit pour ne pas saturer le récepteur).',
        workedExample: {
          title: 'Dimensionnement d’un codage binaire et cycle complet d’un message',
          statement:
            '1) Combien de bits au minimum faut-il pour coder un jeu de $50$ caractères distincts ? 2) Décrire les étapes subies par un long fichier envoyé sur un réseau.',
          methodSteps: [
            '1) On cherche le plus petit entier $n$ tel que $2^n \\geqslant 50$. Comme $2^5 = 32 < 50$ et $2^6 = 64 \\geqslant 50$, il faut au minimum **$6$ bits** par caractère.',
            '2) Étapes d’émission : **Codage** (numérisation en bits) → **Segmentation** (découpage en fragments) → **Encapsulation** (ajout des adresses source/destination dans chaque trame) → **Synchronisation** (accès au média et contrôle de flux).',
            'À la réception : **Désencapsulation** → **Réassemblage** → **Décodage**.',
          ],
          conclusion:
            'Il faut $6$ bits pour coder $50$ caractères ; le processus symétrique émission/réception garantit l’intégrité du message.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Codage binaire',
            stepTheme: 'green',
            stepTitle: 'Nombre de caractères codables sur $n$ bits',
            paragraphText:
              'Chaque bit pouvant prendre $2$ états ($0$ ou $1$), un code de longueur $n$ bits génère $2^n$ combinaisons distinctes. Par exemple, $2$ bits donnent $4$ codes (`00, 01, 10, 11`), $7$ bits donnent $128$ codes (ASCII standard) et $8$ bits donnent $256$ codes (ASCII étendu).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Combien de caractères distincts le code **ASCII standard** (sur $7$ bits) permet-il de coder ?',
              options: ['$64$', '$128$', '$256$', '$512$'],
              correctAnswerIndex: 1,
              explanation:
                'Sur $7$ bits, on obtient $2^7 = 128$ caractères numérotés de $0$ à $127$ (l’ASCII étendu passe à $8$ bits pour $2^8 = 256$ caractères).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Standards de codage',
            stepTheme: 'blue',
            stepTitle: 'ASCII, EBCDIC et Unicode',
            paragraphText:
              'L’ASCII (ANSI) couvre les caractères anglais, l’EBCDIC (créé par IBM sur 8 bits pour ses mainframes) est abandonné, et **Unicode** unifie tous les systèmes d’écriture du monde entier ainsi que les émoticônes (emojis).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Quel standard de codage universel est conçu pour représenter tous les alphabets du monde ainsi que les emojis ?',
              options: ['EBCDIC', 'ASCII 7 bits', 'Unicode', 'CSMA/CD'],
              correctAnswerIndex: 2,
              explanation:
                'Le Chapitre 3 présente Unicode comme le code unique destiné à remplacer les anciens codes et à représenter toutes les langues du monde et les emojis.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Encapsulation',
            stepTheme: 'blue',
            stepTitle: 'Encapsulation et désencapsulation',
            paragraphText:
              'À l’image d’une lettre glissée dans une enveloppe portant les adresses de l’expéditeur et du destinataire, l’**encapsulation** consiste à insérer un format de message dans un autre (une trame). À l’arrivée, le récepteur retire l’enveloppe : c’est la **désencapsulation**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Comment nomme-t-on le processus inverse de l’encapsulation effectué par l’hôte destinataire à la réception d’une trame ?',
              options: [
                'La désencapsulation.',
                'La segmentation.',
                'La commutation.',
                'Le codage EBCDIC.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’émetteur encapsule le message dans une enveloppe/trame ; le destinataire procède à la désencapsulation pour extraire le message utile.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Segmentation',
            stepTheme: 'blue',
            stepTitle: 'Pourquoi segmente-t-on les longs messages ?',
            paragraphText:
              'Les supports et protocoles imposent une taille minimale et une taille maximale à chaque trame. Un message trop long est donc découpé en fragments encapsulés individuellement : c’est la **segmentation**. L’hôte destinataire reconstruit ensuite le message d’origine.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Comment s’appelle le découpage d’un message trop long en plusieurs fragments munis chacun de leurs propres informations d’adressage ?',
              options: [
                'Le chiffrement.',
                'Le contrôle de flux.',
                'Le codage.',
                'La segmentation.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La segmentation découpe un long message en morceaux respectant la taille maximale des trames sur le réseau.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Synchronisation',
            stepTheme: 'violet',
            stepTitle: 'Contrôle de flux et délai d’attente de réponse',
            paragraphText:
              'La synchronisation couvre 3 mécanismes : (1) la méthode d’accès (quand émettre), (2) le **contrôle de flux** (limiter le débit pour ne pas saturer la capacité de réception du destinataire), et (3) le **délai d’attente** (timeout : si aucun accusé de réception n’arrive avant expiration, la source renvoie les données).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Quel est le rôle précis du **contrôle de flux** lors d’une communication réseau ?',
              options: [
                'Déterminer le meilleur chemin entre deux routeurs.',
                'Réguler la quantité d’informations envoyées et la vitesse de livraison afin de ne pas saturer le destinataire.',
                'Traduire les caractères en binaire ASCII.',
                'Chiffrer le contenu du message.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le contrôle de flux adapte le rythme d’envoi de la source à la capacité de réception du destinataire afin d’éviter pertes et retransmissions.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Suite de protocoles',
            stepTheme: 'blue',
            stepTitle: 'Suite propriétaire vs suite ouverte',
            paragraphText:
              'Un groupe de protocoles coopérant ensemble forme une **suite de protocoles** (représentée en pile). Elle peut être **propriétaire** (spécifique à un seul constructeur, comme jadis SNA d’IBM ou DSA de Bull) ou **ouverte** (normalisée et utilisable par tous les constructeurs, comme TCP/IP).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Pourquoi l’ISO a-t-elle créé le modèle de référence OSI ?',
              options: [
                'Pour interdire les réseaux sans fil.',
                'Pour remplacer le code Unicode.',
                'Pour remédier à l’incompatibilité des architectures propriétaires hétérogènes (SNA d’IBM, DSA de Bull, etc.).',
                'Pour limiter le nombre d’utilisateurs d’Internet.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Avant OSI, les architectures propriétaires (SNA, DSA) étaient incompatibles entre constructeurs ; OSI a fourni un modèle de référence ouvert pour l’interconnexion de systèmes hétérogènes.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch2_p2',
        order: 2,
        title: 'Le modèle de référence OSI (7 couches, PDU et équipements)',
        summary:
          'Connaître l’ordre exact des 7 couches OSI, leurs fonctions, leurs unités d’information (PDU) et les équipements associés.',
        conceptExplanation:
          'Le **modèle OSI** (*Open Systems Interconnection*, normalisé par l’ISO) divise la communication réseau en **7 couches logiques** regroupées en **couches basses / matérielles (1 à 4 : acheminement fiable)** et **couches hautes / logicielles (5 à 7 : dialogue applicatif)** :\n\n' +
          '1. **Couche 1 — Physique** | PDU : **Bit** | Transfert brut des bits sur le support (câbles, connecteurs, signaux) | Équipements : **répéteur, hub (concentrateur)**.\n' +
          '2. **Couche 2 — Liaison de données** | PDU : **Trame** | Format de trame, **adressage physique (MAC)**, méthode d’accès, détection d’erreurs | Équipements : **switch (commutateur), carte réseau**.\n' +
          '3. **Couche 3 — Réseau** | PDU : **Paquet** | **Adressage logique (IP)** et sélection du chemin (**routage**) entre réseaux distants | Équipement : **routeur**.\n' +
          '4. **Couche 4 — Transport** | PDU : **Segment (message)** | Transfert de bout en bout, segmentation/réassemblage, contrôle de flux, séquencement, reprise d’erreurs.\n' +
          '5. **Couche 5 — Session** | Ouverture, fermeture et synchronisation des sessions (souvent intégrée au transport aujourd’hui).\n' +
          '6. **Couche 6 — Présentation** | Syntaxe des données : **mise en forme, compression et chiffrement/déchiffrement**.\n' +
          '7. **Couche 7 — Application** | Interface utilisateur-réseau (protocoles applicatifs : messagerie, web, transfert de fichiers).',
        formulas: [
          {
            name: 'Correspondance Couche OSI → PDU → Équipement clé',
            formula: '\\text{C1: Bit (Hub)} \\to \\text{C2: Trame (Switch)} \\to \\text{C3: Paquet (Routeur)} \\to \\text{C4: Segment}',
            note: 'Moyen mnémotechnique (de bas en haut 1→7) : Pour Le Réseau, Tout Se Passe Automatiquement.',
          },
        ],
        keyRule:
          'Trio d’examen incontournable : **Couche 1 = Bit / Hub**, **Couche 2 = Trame / MAC / Switch**, **Couche 3 = Paquet / IP / Routeur**, **Couche 4 = Segment**, **Couche 6 = Chiffrement & Compression**.',
        workedExample: {
          title: 'Associer une fonction réseau et un équipement à sa couche OSI',
          statement:
            'Indiquer la couche OSI exacte (nom et numéro) responsable de : (a) choisir le meilleur chemin vers un réseau distant via un routeur ; (b) compresser et chiffrer les données ; (c) acheminer une trame vers une adresse MAC via un switch ; (d) découper les données de bout en bout en segments.',
          methodSteps: [
            '(a) Routage + routeur + paquet → **Couche 3 (Réseau)**.',
            '(b) Compression + chiffrement + mise en forme → **Couche 6 (Présentation)**.',
            '(c) Trame + adresse MAC + switch → **Couche 2 (Liaison de données)**.',
            '(d) Transfert de bout en bout + segmentation + contrôle de flux → **Couche 4 (Transport)**.',
          ],
          conclusion:
            'Respectivement : Couche 3 (Réseau), Couche 6 (Présentation), Couche 2 (Liaison), Couche 4 (Transport).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Architecture OSI',
            stepTheme: 'blue',
            stepTitle: 'Couches basses (matérielles) vs couches hautes (logicielles)',
            paragraphText:
              'Le modèle OSI divise ses 7 couches en deux blocs : les **couches basses** (1 à 4 : Physique, Liaison, Réseau, Transport) assurent l’acheminement fiable des données, et les **couches hautes** (5 à 7 : Session, Présentation, Application) assurent le dialogue applicatif.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Quelles couches composent les **couches hautes (logicielles)** du modèle OSI ?',
              options: [
                'Session (5), Présentation (6) et Application (7).',
                'Physique (1), Liaison (2) et Réseau (3).',
                'Transport (4), Session (5) et Présentation (6).',
                'Uniquement la couche Application (7).',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après le Chapitre 3 (p. 67), les couches hautes (logicielles) regroupent les couches 5, 6 et 7, et les couches basses (matérielles) les couches 1, 2, 3 et 4.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'PDU OSI',
            stepTheme: 'violet',
            stepTitle: 'Les unités de données de protocole (PDU)',
            paragraphText:
              'Chaque couche basse manipule une unité d’information (PDU) propre : **Bit** en couche 1 (Physique), **Trame** en couche 2 (Liaison), **Paquet** en couche 3 (Réseau) et **Segment** (ou message) en couche 4 (Transport).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Quelle est l’ordre exact des PDU lorsqu’on descend de la couche 4 (Transport) jusqu’à la couche 1 (Physique) ?',
              options: [
                'Paquet → Segment → Trame → Bit',
                'Segment → Paquet → Trame → Bit',
                'Trame → Paquet → Segment → Bit',
                'Bit → Trame → Paquet → Segment',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En descendant (encapsulation) : Transport (Segment) → Réseau (Paquet) → Liaison (Trame) → Physique (Bit).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Équipements OSI',
            stepTheme: 'violet',
            stepTitle: 'Positionner Hub, Switch et Routeur dans le modèle OSI',
            paragraphText:
              'Le **répéteur** et le **hub (concentrateur)** opèrent en **couche 1** (Physique). Le **switch (commutateur)** et la carte réseau opèrent en **couche 2** (Liaison, adressage MAC). Le **routeur** opère en **couche 3** (Réseau, adressage logique IP et routage).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q3',
              type: 'mcq',
              prompt: 'À quelle couche du modèle OSI se situe un **commutateur (switch)** ?',
              options: [
                'Couche 1 — Physique',
                'Couche 3 — Réseau',
                'Couche 2 — Liaison de données',
                'Couche 4 — Transport',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le switch (ainsi que la carte réseau) travaille sur les trames et les adresses MAC : il appartient à la couche 2 (Liaison de données).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Couche 6',
            stepTheme: 'blue',
            stepTitle: 'Les trois fonctions clés de la couche Présentation',
            paragraphText:
              'La **couche 6 (Présentation)** s’occupe de la syntaxe des données échangées et remplit trois fonctions majeures : (1) mise en forme/traduction dans un format compatible, (2) **compression/décompression**, et (3) **chiffrement/déchiffrement**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Quelle couche du modèle OSI assure la **compression** et le **chiffrement** des données ?',
              options: [
                'Couche 4 — Transport',
                'Couche 5 — Session',
                'Couche 7 — Application',
                'Couche 6 — Présentation',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La couche Présentation (couche 6) prend en charge la syntaxe, la mise en forme, la compression et le chiffrement des données.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Couche 3 vs Couche 4',
            stepTheme: 'blue',
            stepTitle: 'Distinguer Couche Réseau (3) et Couche Transport (4)',
            paragraphText:
              'La **couche 3 (Réseau)** assure l’adressage logique et le **routage** des paquets de nœud en nœud. La **couche 4 (Transport)** assure le transfert **de bout en bout** entre applications, la fragmentation/réassemblage, le séquencement (ordre des messages), le contrôle de flux et la correction d’erreurs.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Quelle couche du modèle OSI garantit le transfert **de bout en bout**, le séquencement et le contrôle de flux entre la source et la destination ?',
              options: [
                'Couche 4 — Transport.',
                'Couche 2 — Liaison de données.',
                'Couche 1 — Physique.',
                'Couche 6 — Présentation.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'C’est le rôle fondamental de la couche Transport (couche 4) : transfert de bout en bout, contrôle de flux, séquencement et reprise sur erreurs.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Adressage physique (MAC) vs adressage logique (IP)',
            paragraphText:
              'Ne jamais inverser les deux adressages ! L’**adressage physique (MAC)** appartient à la **couche 2 (Liaison de données)**, tandis que l’**adressage logique (IP)** appartient à la **couche 3 (Réseau)**.',
            keyRule: 'MAC = Physique = Couche 2 (Switch) ; IP = Logique = Couche 3 (Routeur).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Quelle couche du modèle OSI gère l’**adressage logique** et la sélection du chemin (routage) ?',
              options: [
                'Couche 2 — Liaison de données',
                'Couche 3 — Réseau',
                'Couche 4 — Transport',
                'Couche 5 — Session',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adressage logique et le routage des paquets relèvent de la couche 3 (Réseau).',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch2_p3',
        order: 3,
        title: 'Normes IEEE 802.X : sous-couches LLC, MAC et trame Ethernet',
        summary:
          'Comprendre la subdivision IEEE 802 de la couche Liaison en LLC (802.2) et MAC (802.3), et les caractéristiques d’Ethernet.',
        conceptExplanation:
          'Le comité **IEEE 802** normalise les réseaux LAN et MAN en se focalisant sur les **couches 1 (Physique) et 2 (Liaison de données)** du modèle OSI. Il divise la couche 2 en deux sous-couches :\n\n' +
          '1. **Sous-couche LLC** (*Logical Link Control*, **IEEE 802.2**) : partie supérieure, logicielle (analogue au pilote de la carte réseau), assurant l’interface avec la couche Réseau (3), le contrôle de flux et la reprise sur erreur. Elle offre 3 types de services :\n' +
          '   — **LLC1** : mode non connecté, sans acquittement (simple aiguillage vers couche 3).\n' +
          '   — **LLC2** : mode connecté avec acquittement, contrôle de séquence et contrôle de flux (utilisé par Token Ring).\n' +
          '   — **LLC3** : mode non connecté **avec acquittement** de trame (ajouté pour les réseaux industriels).\n' +
          '2. **Sous-couche MAC** (*Medium Access Control*, **IEEE 802.3** pour Ethernet) : partie inférieure, matérielle (carte réseau), assurant l’encapsulation (délimitation des trames, adressage MAC, détection d’erreurs) et le contrôle d’accès au support.\n\n' +
          '**Trame Ethernet** : deux formats (Ethernet II du consortium DIX — utilisé en TCP/IP — et IEEE 802.3), de taille comprise entre **$64$ octets minimum et $1518$ octets maximum**.',
        formulas: [
          {
            name: 'Bornes de taille d’une trame Ethernet',
            formula: '64\\text{ octets} \\leqslant \\text{Taille(trame Ethernet)} \\leqslant 1518\\text{ octets}',
            note: 'Couvre la couche physique (1) et la sous-couche MAC (partie basse de la couche 2).',
          },
        ],
        keyRule:
          'Couche 2 (IEEE 802) = **LLC (802.2, logiciel, interface couche 3)** au-dessus de **MAC (802.3, matériel/carte réseau, accès au support)**.',
        workedExample: {
          title: 'Diagnostic d’une trame Ethernet et choix d’un service LLC',
          statement:
            '1) Une trame Ethernet reçue mesure $42$ octets : est-elle valide ? Qu’en est-il d’une trame de $1200$ octets ? 2) Quel service LLC convient à un réseau industriel nécessitant un mode non connecté avec acquittement de trame ?',
          methodSteps: [
            '1) Les bornes réglementaires d’une trame Ethernet sont $[64\\text{ octets},\\ 1518\\text{ octets}]$.',
            '$42 < 64$ : trame trop courte (invalide/fragment de collision) ; $64 \\leqslant 1200 \\leqslant 1518$ : trame valide.',
            '2) LLC1 = non connecté sans acquittement ; LLC2 = connecté avec acquittement ; **LLC3** = non connecté **avec acquittement** (spécifiquement ajouté pour les réseaux industriels).',
          ],
          conclusion:
            'La trame de $42$ octets est rejetée, celle de $1200$ octets est valide, et le réseau industriel utilise **LLC type 3 (LLC3)**.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'IEEE 802',
            stepTheme: 'blue',
            stepTitle: 'Couches OSI couvertes par IEEE 802',
            paragraphText:
              'Le comité IEEE 802 normalise les technologies LAN et MAN uniquement sur les **couches 1 (Physique) et 2 (Liaison de données)**, en scindant la couche 2 en sous-couche supérieure LLC et sous-couche inférieure MAC.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Sur quelles couches du modèle OSI se concentrent les travaux du comité **IEEE 802** ?',
              options: [
                'Couches 3 (Réseau) et 4 (Transport).',
                'Couches 5, 6 et 7.',
                'Couches 1 (Physique) et 2 (Liaison de données).',
                'Les 7 couches simultanément.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'IEEE 802 définit les standards LAN/MAN pour la couche Physique (1) et la couche Liaison de données (2), subdivisée en LLC et MAC.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'LLC vs MAC',
            stepTheme: 'blue',
            stepTitle: 'Sous-couche LLC (logicielle) vs sous-couche MAC (matérielle)',
            paragraphText:
              'La sous-couche **LLC** (IEEE 802.2, supérieure) est implémentée au niveau **logiciel** (pilote réseau) et interface avec la couche 3. La sous-couche **MAC** (IEEE 802.3, inférieure) est implémentée au niveau **matériel** sur la carte réseau.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Laquelle des affirmations suivantes décrit correctement la sous-couche **MAC** d’Ethernet ?',
              options: [
                'C’est la sous-couche inférieure de la couche 2, implémentée au niveau matériel sur la carte réseau (encapsulation de trame, adressage MAC et accès au support).',
                'C’est une sous-couche de la couche Réseau (couche 3).',
                'Elle est purement logicielle et normalisée par IEEE 802.2.',
                'Elle assure le routage IP sur Internet.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'MAC (*Medium Access Control*) est la moitié inférieure matérielle de la couche 2 (carte réseau, IEEE 802.3), tandis que LLC (802.2) en est la moitié supérieure logicielle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Services LLC',
            stepTheme: 'violet',
            stepTitle: 'Les trois types de services LLC (LLC1, LLC2, LLC3)',
            paragraphText:
              '• **LLC1** : mode non connecté, sans acquittement (datagramme).\n' +
              '• **LLC2** : mode connecté avec acquittement, contrôle de flux et de séquence (Token Ring).\n' +
              '• **LLC3** : mode non connecté **avec acquittement** (réseaux industriels).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Quel type de service LLC fonctionne en **mode non connecté avec acquittement** pour les besoins des réseaux industriels ?',
              options: ['LLC1', 'LLC2', 'Ethernet II', 'LLC3'],
              correctAnswerIndex: 3,
              explanation:
                'LLC1 = non connecté sans acquittement ; LLC2 = connecté avec acquittement ; LLC3 = non connecté avec acquittement (ajouté pour l’industrie).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Trame Ethernet',
            stepTheme: 'violet',
            stepTitle: 'Taille minimale et maximale d’une trame Ethernet',
            paragraphText:
              'Qu’il s’agisse d’une trame **Ethernet II** (consortium DIX : DEC, Intel, Xerox) ou **IEEE 802.3**, la taille réglementaire d’une trame Ethernet est comprise entre **$64$ octets au minimum** et **$1518$ octets au maximum**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Quelles sont les tailles minimale et maximale d’une trame Ethernet standard ?',
              options: [
                '32 octets min et 1024 octets max.',
                '64 octets min et 1518 octets max.',
                '128 octets min et 2048 octets max.',
                '8 octets min et 256 octets max.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'D’après le Chapitre 3 (p. 88), la taille d’une trame Ethernet est de $64$ octets minimum et $1518$ octets maximum.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Ethernet partagé vs commuté',
            stepTheme: 'slate',
            stepTitle: 'Évolution d’Ethernet : du hub (partagé) au switch (commuté)',
            paragraphText:
              'Initialement conçu en bus puis en étoile avec un hub (**Ethernet partagé** avec CSMA/CD et risques de collisions), Ethernet a évolué vers une topologie en étoile avec un commutateur (**Ethernet commuté**), isolant les flux entre ports.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Quel équipement permet de passer de l’**Ethernet partagé** à l’**Ethernet commuté** ?',
              options: [
                'Un câble coaxial épais.',
                'Un répéteur.',
                'Un commutateur (switch).',
                'Un concentrateur (hub).',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le hub partage le média entre tous les ports (Ethernet partagé), tandis que le switch commute individuellement les trames vers le port destinataire (Ethernet commuté).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Consortium DIX',
            stepTheme: 'blue',
            stepTitle: 'Ethernet II (DIX) et IEEE 802.3',
            paragraphText:
              'En 1980, le consortium **DIX** (DEC, Intel, Xerox) publie Ethernet I puis **Ethernet II** (encore massivement utilisé dans les réseaux TCP/IP). En 1983, l’IEEE normalise Ethernet sous le nom **IEEE 802.3** à partir d’Ethernet II.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Quelles deux couches/sous-couches du modèle OSI sont couvertes par le standard **Ethernet** ?',
              options: [
                'La couche physique (1) et la sous-couche MAC de la couche liaison (2).',
                'La couche réseau (3) et la couche transport (4).',
                'La sous-couche LLC uniquement.',
                'La couche session (5) et la couche application (7).',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Chapitre 3 (p. 84) indique explicitement qu’Ethernet couvre la couche physique et la sous-couche MAC du modèle OSI.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Modèle TCP/IP, protocole IP et adressage IPv4
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_reseaux_ch3',
    subjectId: 'lmd_reseaux',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Réseaux & Services (Chapitre 4 : Modèle TCP/IP)',
    title: 'Chapitre 3 — Modèle TCP/IP, protocole IP et adressage IPv4',
    summary:
      'Les 4 couches TCP/IP (Accès réseau, Internet, Transport TCP/UDP, Application), propriétés du protocole IP, structure IPv4 (32 bits), masques contigus, classes A/B/C/D/E, adresses privées et adresses spéciales.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch3_p1',
        order: 1,
        title: 'Le modèle TCP/IP (4 couches) et les caractéristiques du protocole IP',
        summary:
          'Maîtriser l’architecture en 4 couches TCP/IP, la correspondance avec OSI, TCP vs UDP et les 3 propriétés d’IP.',
        conceptExplanation:
          'Créé au début des années 1970 à partir du réseau **ARPANET** (Department of Defense des États-Unis) pour interconnecter des réseaux hétérogènes par **commutation de paquets**, le **modèle TCP/IP** s’articule en **4 couches** :\n\n' +
          '1. **Accès réseau** (correspond aux couches 1 et 2 OSI) : transmission physique des paquets IP sur le LAN (généralement Ethernet).\n' +
          '2. **Internet** (couche 3 OSI) : implémentée par le protocole **IP** (IPv4 / IPv6), assurant l’adressage logique IP, la fragmentation et le **routage** en commutation de paquets.\n' +
          '3. **Transport** (couche 4 OSI) : session temporaire entre applications, segmentation/réassemblage et identification des applications par **numéro de port** ; deux protocoles clés : **TCP** (fiable, orienté connexion) et **UDP** (*User Datagram Protocol*, sans connexion, léger).\n' +
          '4. **Application** (couches 5, 6 et 7 OSI) : protocoles applicatifs utilisateur (**HTTP, SMTP, FTP, TFTP, DNS, DHCP, SSH**...).\n\n' +
          'Les **3 caractéristiques fondamentales d’IP** : (1) **sans connexion**, (2) **non fiable** (acheminement au mieux / *best effort* : pas de garantie de livraison), (3) **indépendant du support**.',
        formulas: [
          {
            name: 'Correspondance TCP/IP (4 couches) ↔ OSI (7 couches)',
            formula: '\\text{Accès réseau (1-2)} \\to \\text{Internet (3)} \\to \\text{Transport (4)} \\to \\text{Application (5-6-7)}',
            note: 'Les 3 couches hautes d’OSI (Session, Présentation, Application) fusionnent dans la couche Application TCP/IP.',
          },
        ],
        keyRule:
          'IP est **sans connexion**, **non fiable (*best effort*)** et **indépendant du support** : c’est **TCP** (couche Transport au-dessus) qui assure la fiabilité et l’ordonnancement si besoin !',
        workedExample: {
          title: 'Rôle de chaque couche TCP/IP lors d’une requête web (HTTP)',
          statement:
            'Un étudiant ouvre un site web depuis son PC. Identifier la couche TCP/IP et le protocole impliqué pour : (1) demander la page web, (2) identifier l’application cible par son numéro de port et garantir la livraison fiable, (3) acheminer les paquets de routeur en routeur, (4) envoyer les trames sur le câble Ethernet.',
          methodSteps: [
            '(1) Couche **Application** : protocole **HTTP** (et **DNS** en amont pour résoudre le nom de domaine).',
            '(2) Couche **Transport** : protocole **TCP** (segmentation, numéro de port 80/443, fiabilité).',
            '(3) Couche **Internet** : protocole **IP** (adressage logique IP et routage sans connexion).',
            '(4) Couche **Accès réseau** : standard **Ethernet** (encapsulation en trame et transmission sur le support physique).',
          ],
          conclusion:
            'Les 4 couches TCP/IP collaborent de haut en bas à l’émission et de bas en haut à la réception.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Origine TCP/IP',
            stepTheme: 'blue',
            stepTitle: 'Origine historique et nombre de couches du modèle TCP/IP',
            paragraphText:
              'Le modèle TCP/IP tire son origine du réseau **ARPANET** financé par le DoD américain dans les années 1970, basé sur la commutation de paquets. Il comporte **4 couches** : Accès réseau, Internet, Transport et Application.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Quelles sont les **4 couches** du modèle TCP/IP (de la plus basse à la plus haute) ?',
              options: [
                'Physique, Liaison, Réseau, Application.',
                'Accès réseau, Internet, Transport, Application.',
                'Ethernet, IP, TCP, HTTP.',
                'Liaison, Internet, Session, Application.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Chapitre 4 (p. 92–94) définit les 4 couches du modèle TCP/IP : Accès réseau, Internet, Transport et Application.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Correspondance OSI',
            stepTheme: 'violet',
            stepTitle: 'Équivalence entre couche Application TCP/IP et modèle OSI',
            paragraphText:
              'En comparant les deux modèles : la couche **Accès réseau** regroupe les couches 1 et 2 OSI ; la couche **Internet** correspond à la couche 3 OSI ; la couche **Transport** à la couche 4 OSI ; et la couche **Application** TCP/IP regroupe les couches **5 (Session), 6 (Présentation) et 7 (Application)** d’OSI.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q2',
              type: 'mcq',
              prompt: 'À quelles couches du modèle OSI correspond la couche **Application** du modèle TCP/IP ?',
              options: [
                'Uniquement la couche 7.',
                'Les couches 1 et 2.',
                'Les couches 5 (Session), 6 (Présentation) et 7 (Application).',
                'Les couches 3 et 4.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans TCP/IP, les fonctionnalités des couches Session (5), Présentation (6) et Application (7) d’OSI sont rassemblées dans la couche Application.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Couche Transport',
            stepTheme: 'blue',
            stepTitle: 'TCP, UDP et notion de numéro de port',
            paragraphText:
              'La couche Transport de TCP/IP abrite deux protocoles majeurs : **TCP** et **UDP** (*User Datagram Protocol*). Elle permet d’identifier de manière unique chaque application exécutée sur un hôte grâce à un **numéro de port**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Quel mécanisme de la couche Transport permet d’identifier précisément l’application destinataire sur un ordinateur ?',
              options: [
                'Le numéro de port.',
                'L’adresse MAC.',
                'Le masque de sous-réseau.',
                'Le code ASCII.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chaque application réseau est identifiée par un numéro unique appelé **numéro de port** au niveau de la couche Transport (TCP/UDP).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Caractéristiques d’IP',
            stepTheme: 'violet',
            stepTitle: 'Les trois propriétés clés du protocole IP',
            paragraphText:
              'Le protocole IP (couche Internet / couche 3 OSI) est : (1) **sans connexion** (aucune session préalable avant l’envoi), (2) **non fiable** (« acheminement au mieux » : ne garantit pas la livraison), et (3) **indépendant du support** (cuivre, fibre ou sans-fil).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Laquelle des affirmations suivantes sur le protocole **IP** est **FAUSSE** ?',
              options: [
                'IP est un protocole sans connexion.',
                'IP est indépendant du support physique de transmission.',
                'IP gère l’adressage logique, le routage et la fragmentation.',
                'IP garantit de manière fiable la livraison sans perte de tous les paquets.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'IP est explicitement **non fiable** (acheminement au mieux / *best effort*) : il ne garantit pas la livraison des paquets. La fiabilité est éventuellement assurée par TCP en couche Transport.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Protocoles applicatifs',
            stepTheme: 'blue',
            stepTitle: 'Identifier les protocoles de la couche Application',
            paragraphText:
              'Les protocoles **HTTP** (web), **SMTP** (envoi d’e-mails), **FTP / TFTP** (transfert de fichiers), **DNS** (résolution de noms), **DHCP** (attribution automatique d’adresse IP) et **SSH** (accès distant sécurisé) appartiennent tous à la **couche Application**.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Parmi ces protocoles, lequel n’appartient **PAS** à la couche Application de TCP/IP ?',
              options: ['HTTP', 'UDP', 'DNS', 'DHCP'],
              correctAnswerIndex: 1,
              explanation:
                'UDP appartient à la couche **Transport** (avec TCP). HTTP, DNS et DHCP sont des protocoles de la couche Application.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Rôles d’IP',
            stepTheme: 'violet',
            stepTitle: 'Émission vs réception d’un paquet IP',
            paragraphText:
              'À l’émission, IP encapsule, choisit la route (routage), vérifie le type d’adressage et fragmente le paquet si nécessaire. À la réception, IP vérifie la longueur, contrôle les erreurs d’en-tête, **réassemble** les fragments et transmet à la couche supérieure (désencapsulation).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p1_q6',
              type: 'mcq',
              prompt: 'En plus de l’adressage logique et du routage, quelle fonction assure le protocole IP lorsqu’un paquet dépasse la taille maximale d’un réseau traversé ?',
              options: [
                'Le chiffrement de bout en bout.',
                'Le passage du jeton.',
                'La fragmentation à l’émission (et le réassemblage à la réception).',
                'La conversion en code EBCDIC.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Chapitre 4 (p. 96–97) précise que le protocole IP est responsable de la fragmentation des données si nécessaire et de leur réassemblage à la réception.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_reseaux_ch3_p2',
        order: 2,
        title: 'Adressage IPv4 : structure, masques, classes et adresses spéciales',
        summary:
          'Vérifier la validité d’une adresse IPv4 et d’un masque, identifier les classes A/B/C/D/E, les plages privées et les adresses réservées.',
        conceptExplanation:
          'Une **adresse IPv4** est codée sur **$32$ bits** regroupés en **$4$ octets** écrits en décimal pointé (chaque octet entre $0$ et $255$), donnant $2^{32} = 4\\,294\\,967\\,296$ adresses possibles. Elle comporte une **partie réseau** (en tête) et une **partie hôte** (en queue), séparées par un **masque de sous-réseau** de $32$ bits formé d’une suite **contiguë** de bits à `1` suivie de bits à `0`.\n\n' +
          '• **Les 5 classes d’adresses IPv4** (premier octet en décimal / préfixe binaire) :\n' +
          '  — **Classe A** : `0` à `127` | binaire `0...` | masque `255.0.0.0` (Unicast).\n' +
          '  — **Classe B** : `128` à `191` | binaire `10...` | masque `255.255.0.0` (Unicast).\n' +
          '  — **Classe C** : `192` à `223` | binaire `110...` | masque `255.255.255.0` (Unicast).\n' +
          '  — **Classe D** : `224` à `239` | binaire `1110...` (Multicast).\n' +
          '  — **Classe E** : `240` à `255` | binaire `1111...` (Réservée usage futur).\n\n' +
          '• **Adresses privées** (non routables sur Internet) : `10.0.0.0 – 10.255.255.255` (A), `172.16.0.0 – 172.31.255.255` (B), `192.168.0.0 – 192.168.255.255` (C). Les adresses publiques sont allouées par l’**IANA** (ICANN) → RIR → FAI.\n' +
          '• **Adresses spéciales non attribuables à un hôte** : `0.0.0.0` (acquisition DHCP), `127.0.0.0` / `127.0.0.1` (*localhost*, bouclage interne), `255.255.255.255` (diffusion limitée), **première adresse** de la plage (adresse réseau) et **dernière adresse** de la plage (broadcast).',
        formulas: [
          {
            name: 'Espace d’adressage IPv4 et octets valides',
            formula: '2^{32} = 4\\,294\\,967\\,296 \\text{ adresses}, \\qquad \\text{chaque octet } \\in [0, 255]',
            note: 'Ex. du cours : 192.168.355.20 est INVALIDE car 355 > 255.',
          },
          {
            name: 'Octets valides dans un masque contigu',
            formula: '\\{0,\\ 128,\\ 192,\\ 224,\\ 240,\\ 248,\\ 252,\\ 254,\\ 255\\}',
            note: 'Ex. invalides du cours : 255.128.255.0 et 255.0.224.0 (les bits à 1 ne sont pas contigus !).',
          },
        ],
        keyRule:
          'Dans une plage réseau, la **première adresse** identifie le réseau et la **dernière** est le broadcast : elles ne peuvent **jamais** être attribuées à une machine hôte !',
        workedExample: {
          title: 'Analyse complète d’adresses IPv4 et de masques (Chapitre 4)',
          statement:
            'Analyser : (1) `172.20.5.14`, (2) `192.168.355.20`, (3) `127.0.0.1`, (4) le masque `255.128.255.0` et le masque `255.255.128.0`.',
          methodSteps: [
            '(1) `172.20.5.14` : premier octet $172 \\in [128, 191]$ → **Classe B** (Unicast), masque par défaut `255.255.0.0`. Comme elle appartient à `172.16.0.0 – 172.31.255.255`, c’est une **adresse privée**.',
            '(2) `192.168.355.20` : **invalide**, car le 3e octet vaut $355 > 255$.',
            '(3) `127.0.0.1` : adresse de **bouclage (*localhost*)**, réservée aux tests internes de l’hôte.',
            '(4) `255.128.255.0` en binaire donne `11111111.10000000.11111111.00000000` : des `0` précèdent des `1` → masque **invalide** ! En revanche `255.255.128.0` (`11111111.11111111.10000000.00000000`) a tous ses `1` contigus → masque **valide**.',
          ],
          conclusion:
            '`172.20.5.14` est une IP privée de classe B, `192.168.355.20` et `255.128.255.0` sont invalides, `127.0.0.1` est localhost et `255.255.128.0` est valide.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'Validité IPv4',
            stepTheme: 'orange',
            stepTitle: 'Vérifier la validité d’une adresse IPv4',
            paragraphText:
              'Une adresse IPv4 se compose de $4$ octets ($4 \\times 8 = 32$ bits), chacun compris entre $0$ et $255$. Tout octet strictement supérieur à $255$ (ex. `192.168.355.20`) rend l’adresse invalide.',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Parmi les adresses suivantes, laquelle N’EST PAS une adresse IPv4 valide ?',
              options: [
                '10.0.0.1',
                '192.168.1.77',
                '192.168.256.10',
                '172.16.254.1',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un octet codé sur 8 bits varie de $0$ à $255$. Dans `192.168.256.10`, le troisième octet vaut $256 > 255$, ce qui est impossible.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Validité de masque',
            stepTheme: 'orange',
            stepTitle: 'Masque valide : les bits à 1 doivent être contigus !',
            paragraphText:
              'Un masque IPv4 sépare la partie réseau (bits à `1` contigus à gauche) de la partie hôte (bits à `0` contigus à droite). Ainsi `255.224.0.0` (`224 = 11100000`) est valide, mais `255.0.224.0` et `255.128.255.0` sont **invalides** car des `0` s’intercalent entre les `1`.',
            keyRule: 'Dès qu’un octet du masque est $< 255$, tous les octets suivants à sa droite doivent impérativement valoir `0` !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Parmi les propositions suivantes, laquelle est un **masque de sous-réseau IPv4 valide** ?',
              options: [
                '255.255.128.0',
                '255.128.255.0',
                '255.0.224.0',
                '255.255.100.0',
              ],
              correctAnswerIndex: 0,
              explanation:
                '`255.255.128.0` vaut `11111111.11111111.10000000.00000000` (17 bits à 1 contigus puis 15 bits à 0). Les autres ne sont pas contigus (`100 = 01100100`).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Classes A à E',
            stepTheme: 'green',
            stepTitle: 'Identifier la classe d’une adresse IPv4 en décimal et en binaire',
            paragraphText:
              'En décimal sur le 1er octet : **A** (`0–127`, masque `255.0.0.0`), **B** (`128–191`, `255.255.0.0`), **C** (`192–223`, `255.255.255.0`), **D** (`224–239`, Multicast), **E** (`240–255`, réservée). En binaire : `0` (A), `10` (B), `110` (C), `1110` (D), `1111` (E).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q3',
              type: 'mcq',
              prompt: 'À quelle classe appartient l’adresse IPv4 `154.72.18.5` et quel est son masque par défaut ?',
              options: [
                'Classe A — masque `255.0.0.0`',
                'Classe C — masque `255.255.255.0`',
                'Classe D — Multicast',
                'Classe B — masque `255.255.0.0`',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le premier octet est $154 \\in [128, 191]$ (en binaire `10011010`, commence par `10`), donc **Classe B** avec masque par défaut `255.255.0.0`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Adresses privées',
            stepTheme: 'violet',
            stepTitle: 'Reconnaître les 3 plages d’adresses IPv4 privées',
            paragraphText:
              'Les trois plages d’adresses privées utilisables librement dans les réseaux locaux sont : `10.0.0.0 – 10.255.255.255` (classe A), `172.16.0.0 – 172.31.255.255` (classe B) et `192.168.0.0 – 192.168.255.255` (classe C). Attention : `172.32.0.1` est déjà **publique** !',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Parmi ces adresses IPv4, laquelle est une **adresse publique** (hors plages privées) ?',
              options: [
                '10.12.45.8',
                '172.35.10.2',
                '172.16.8.1',
                '192.168.0.25',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La plage privée de classe B s’arrête à `172.31.255.255`. Donc `172.35.10.2` est une adresse **publique**.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Adresses spéciales',
            stepTheme: 'blue',
            stepTitle: 'Rôle de `0.0.0.0`, `127.0.0.1` et `255.255.255.255`',
            paragraphText:
              '• `0.0.0.0` : utilisée lors d’une acquisition dynamique d’adresse par **DHCP**.\n' +
              '• `127.0.0.1` (*localhost*, réseau `127.0.0.0`) : adresse de **bouclage** pour les tests internes de la machine.\n' +
              '• `255.255.255.255` : adresse de **diffusion limitée** (broadcast local).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q5',
              type: 'mcq',
              prompt: 'À quoi sert l’adresse IPv4 particulière `127.0.0.1` (localhost) ?',
              options: [
                'À diffuser un paquet vers toutes les machines du monde.',
                'À demander automatiquement une adresse IP à un serveur DHCP.',
                'À effectuer des tests internes de bouclage (loopback) sur la machine locale elle-même.',
                'À identifier le routeur principal d’Internet.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’adresse `127.0.0.1` (dans le réseau `127.0.0.0`) est l’adresse de bouclage (*localhost*) permettant à un hôte de tester sa propre pile TCP/IP.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Réseau & Broadcast',
            stepTheme: 'violet',
            stepTitle: 'Première et dernière adresse d’une plage réseau',
            paragraphText:
              'Dans toute plage d’adresses IPv4 (par exemple le réseau `192.168.1.0` avec masque `255.255.255.0`), la première adresse (`192.168.1.0`) désigne l’**adresse du réseau** et la dernière (`192.168.1.255`) désigne l’**adresse de diffusion (broadcast)**. Les hôtes utilisent donc les $254$ adresses intermédiaires (`192.168.1.1` à `192.168.1.254`).',
            exercise: {
              id: 'lmd_entd_l1_reseaux_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Dans le réseau `192.168.10.0` de masque `255.255.255.0`, quelle adresse correspond à l’**adresse de diffusion (broadcast)** et ne peut donc pas être attribuée à un PC ?',
              options: [
                '192.168.10.255',
                '192.168.10.1',
                '192.168.10.254',
                '192.168.10.128',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La plage va de `192.168.10.0` (adresse réseau) à `192.168.10.255` (dernière adresse = adresse de broadcast). Seules `.1` à `.254` sont attribuables aux hôtes.',
            },
          },
        ],
      }),
    ],
  },
];
