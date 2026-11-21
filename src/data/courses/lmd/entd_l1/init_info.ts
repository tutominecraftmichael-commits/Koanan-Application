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
  // ==========================================================================
  // CHAPITRE 1 : ARCHITECTURE DES ORDINATEURS ET REPRÉSENTATION DE L'INFORMATION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_init_info_ch1',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Architecture des ordinateurs et représentation de l’information',
    summary:
      'Maîtriser le codage binaire, les unités de stockage (bit à To), l’encodage ASCII/UTF-8, l’architecture de von Neumann (CPU, RAM, ROM, SSD/HDD, périphériques E/S), les systèmes d’exploitation et les supports mobiles.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Initiation à l’Informatique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch1_p1',
        order: 1,
        title: 'Codage binaire, unités de mesure (bit à To) et encodage ASCII / UTF-8',
        summary:
          'Comprendre pourquoi l’ordinateur fonctionne en binaire, convertir les unités de capacité (bit, octet, Ko, Mo, Go, To) et distinguer ASCII d’UTF-8.',
        conceptExplanation:
          'Tout ordinateur électronique manipule des signaux électriques à deux états (tension basse = 0, tension haute = 1). L’information numérique (texte, image, son, vidéo) est donc traduite en séquences de bits (0 ou 1).\n\nUn octet (1 byte) regroupe 8 bits et permet de coder 2^8 = 256 valeurs distinctes. Pour mesurer la taille des fichiers et des disques, on utilise les multiples : Ko, Mo, Go et To (en base décimale SI par facteurs de 1 000 ou en base binaire IEC par facteurs de 1 024 = 2^10).\n\nPour représenter les caractères textuels, la norme historique ASCII code 128 caractères sur 7 bits (sans accents), tandis que la norme universelle UTF-8 (Unicode) code plus d’un million de caractères sur 1 à 4 octets, incluant les accents français, les alphabets mondiaux et les emojis.',
        keyRule:
          '1 octet = 8 bits = 256 valeurs possibles. UTF-8 est rétrocompatible avec ASCII et gère tous les accents et écritures du monde.',
        formulas: [
          {
            name: 'Relation bit / octet et capacité de codage',
            formula: '1\\text{ octet} = 8\\text{ bits} \\quad \\Longrightarrow \\quad N = 2^n \\text{ états possibles sur } n \\text{ bits}',
            note: 'Sur 1 octet (n = 8), on obtient 2^8 = 256 combinaisons distinctes (de 0 à 255).',
          },
          {
            name: 'Multiples de l’octet (système SI vs binaire IEC)',
            formula: '1\\text{ Ko} = 10^3\\text{ o},\\; 1\\text{ Mo} = 10^6\\text{ o},\\; 1\\text{ Go} = 10^9\\text{ o},\\; 1\\text{ To} = 10^{12}\\text{ o}',
            note: 'En informatique système (IEC) : 1 Kio = 1 024 o, 1 Mio = 1 024 Kio, 1 Gio = 1 024 Mio.',
          },
        ],
        workedExample: {
          title: 'Estimer le nombre de photos stockables sur une clé USB',
          statement:
            'Un photographe d’Abidjan dispose d’une clé USB de 16 Go et souhaite stocker des clichés haute définition pesant en moyenne 4 Mo chacun. Combien de photos peut-il enregistrer (en convention SI : 1 Go = 1 000 Mo) ?',
          methodSteps: [
            'Convertir la capacité totale de la clé USB en mégaoctets : 16 Go × 1 000 = 16 000 Mo.',
            'Diviser la capacité disponible par la taille moyenne d’une photo : 16 000 / 4 = 4 000.',
            'Vérifier la cohérence de l’unité : Mo / Mo donne bien un nombre sans unité.',
          ],
          conclusion:
            'La clé USB de 16 Go peut contenir environ 4 000 photos de 4 Mo chacune.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Système binaire',
            stepTheme: 'Représentation',
            stepTitle: 'Pourquoi les ordinateurs utilisent le binaire (0 et 1)',
            paragraphText:
              'Un processeur est composé de milliards de transistors qui agissent comme des interrupteurs microscopiques ouverts ou fermés.\n• **Bit (Binary Digit)** : plus petite unité d’information numérique, ne prenant que deux valeurs, 0 (courant nul) ou 1 (courant présent).\n• **Fiabilité physique** : distinguer deux états électriques est infiniment plus rapide et moins sensible aux parasites que dix niveaux de tension.\n• **Exemple concret** : une facture mobile money, une note vocale WhatsApp ou une vidéo YouTube finissent toutes stockées sous forme de suites de 0 et de 1.',
            formula: {
              name: 'Nombre de combinaisons sur n bits',
              formula: 'N = 2^n',
              note: 'Exemple : 4 bits permettent 2^4 = 16 combinaisons distinctes.',
            },
            keyRule:
              'Le bit est l’atome de l’information numérique : 2 états physiques (0 ou 1) suffisent à représenter tout type de donnée.',
            konanTip:
              'Retiens « bi-naire » = 2 chiffres (0 et 1), exactement comme « déci-mal » = 10 chiffres (0 à 9).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Combien de valeurs distinctes peut-on coder exactement avec une séquence de 4 bits ?',
              options: ['4 valeurs', '8 valeurs', '16 valeurs', '256 valeurs'],
              correctAnswerIndex: 2,
              explanation:
                'Avec n bits, le nombre de combinaisons possibles est 2^n. Pour n = 4, on calcule 2^4 = 16 valeurs distinctes (de 0000 à 1111).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Octet',
            stepTheme: 'Codage',
            stepTitle: 'Passer du bit à l’octet (byte)',
            paragraphText:
              'Un bit isolé porte trop peu d’information pour représenter une lettre ou un nombre complexe ; on les regroupe donc par paquets de huit.\n• **Octet (o)** : groupe fixe de 8 bits consécutifs, appelé *byte* en anglais (symbole B majuscule, à ne pas confondre avec b minuscule pour bit).\n• **Capacité d’un octet** : il offre 2^8 = 256 combinaisons différentes, de 00000000 (0) à 11111111 (255).\n• **Exemple concret** : une connexion fibre annoncée à 80 Mb/s (mégabits par seconde) correspond à un débit réel de téléchargement de 80 / 8 = 10 Mo/s (mégaoctets par seconde).',
            formula: {
              name: 'Conversion bits ↔ octets',
              formula: '1\\text{ octet (1 B)} = 8\\text{ bits (8 b)}',
              note: 'Pour convertir un débit en Mb/s vers des Mo/s, on divise toujours par 8.',
            },
            keyRule:
              'Attention à la casse des symboles : b (minuscule) = bit, B ou o = octet (8 fois plus grand).',
            konanTip:
              'Piège classique sur les offres fibre à Abidjan : un forfait 40 Mb/s télécharge au maximum à 5 Mo/s, pas à 40 Mo/s !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Un opérateur télécom propose une connexion de 48 Mb/s (mégabits par seconde). Quel est le débit théorique équivalent en mégaoctets par seconde (Mo/s) ?',
              options: ['48 Mo/s', '24 Mo/s', '6 Mo/s', '384 Mo/s'],
              correctAnswerIndex: 2,
              explanation:
                'Puisque 1 octet = 8 bits, on divise le débit en mégabits par 8 : 48 / 8 = 6 Mo/s.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Conversion binaire',
            stepTheme: 'Calcul',
            stepTitle: 'Convertir un nombre binaire en décimal',
            paragraphText:
              'Lire un nombre en base 2 suit la même logique de position que la base 10, mais chaque rang vaut une puissance de 2 en partant de la droite.\n• **Poids des bits** : de droite à gauche, les colonnes valent 2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, etc.\n• **Méthode directe** : on additionne uniquement les puissances de 2 où figure un chiffre 1.\n• **Exemple concret** : pour convertir (10110)_2, on calcule 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 16 + 4 + 2 = 22 en base décimale.',
            formula: {
              name: 'Développement polynomial en base 2',
              formula: '(b_k \\dots b_1 b_0)_2 = \\sum_{i=0}^{k} b_i \\times 2^i',
              note: 'On commence toujours à l’exposant 0 tout à droite (bit de poids faible).',
            },
            konanTip:
              'Écris toujours la ligne des puissances au brouillon (128 | 64 | 32 | 16 | 8 | 4 | 2 | 1) avant de faire la somme.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Quelle est la valeur en base décimale (base 10) du nombre binaire 1101 ?',
              options: ['11', '12', '13', '15'],
              correctAnswerIndex: 2,
              explanation:
                'En partant de la gauche : 1×2^3 + 1×2^2 + 0×2^1 + 1×2^0 = 8 + 4 + 0 + 1 = 13.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Multiples',
            stepTheme: 'Stockage',
            stepTitle: 'Maîtriser les unités de mesure : Ko, Mo, Go et To',
            paragraphText:
              'Les fichiers modernes pèsent des millions ou des milliards d’octets ; on emploie donc des préfixes normalisés pour comparer facilement leur taille.\n• **Échelle décimale (SI)** : chaque palier multiplie par 1 000 (Ko = 10^3, Mo = 10^6, Go = 10^9, To = 10^{12} octets).\n• **Échelle binaire (IEC)** : utilisée par les systèmes d’exploitation, chaque palier multiplie par 1 024 = 2^{10} (Kio, Mio, Gio, Tio).\n• **Exemple concret** : un disque dur vendu comme 1 To (1 000 milliards d’octets) s’affiche à environ 931 Gio sous Windows à cause du facteur 1 024.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau des unités de capacité informatique',
              caption: 'De l’unité élémentaire (bit) au téraoctet (To) avec ordres de grandeur réels',
              tableData: {
                headers: ['Unité', 'Symbole', 'Équivalence (SI)', 'Ordre de grandeur concret'],
                rows: [
                  ['Bit', 'b', '0 ou 1', 'État d’un transistor'],
                  ['Octet', 'o (B)', '8 bits', '1 caractère ASCII (ex. lettre A)'],
                  ['Kilooctet', 'Ko', '1 000 o', '1 page de texte brut (~2 Ko)'],
                  ['Mégaoctet', 'Mo', '1 000 Ko', '1 photo smartphone (~3 à 5 Mo)'],
                  ['Gigaoctet', 'Go', '1 000 Mo', '1 film HD (~4 Go) / RAM PC (8-16 Go)'],
                  ['Téraoctet', 'To', '1 000 Go', 'Disque SSD pro (~250 000 photos)'],
                ],
              },
            },
            keyRule:
              'Dans l’ordre croissant : Bit < Octet < Ko < Mo < Go < To (chaque saut majeur vaut ×1 000 en SI ou ×1 024 en binaire).',
            konanTip:
              'Pour vérifier rapidement un ordre de grandeur : 1 photo ≈ 4 Mo, 1 film HD ≈ 4 Go, 1 disque pro ≈ 1 To.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'En convention SI (1 Go = 1 000 Mo), combien de dossiers de 250 Mo peut-on copier sur un espace libre de 2 Go ?',
              options: ['4 dossiers', '8 dossiers', '12 dossiers', '25 dossiers'],
              correctAnswerIndex: 1,
              explanation:
                '2 Go équivalent à 2 000 Mo. En divisant par la taille d’un dossier : 2 000 / 250 = 8 dossiers.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Encodage texte',
            stepTheme: 'ASCII & UTF-8',
            stepTitle: 'Comparer l’encodage historique ASCII et la norme UTF-8',
            paragraphText:
              'Pour afficher du texte à l’écran, l’ordinateur associe un code numérique précis à chaque lettre, chiffre ou signe de ponctuation grâce à une table d’encodage.\n• **ASCII (1963)** : code 128 caractères sur 7 bits (majuscules, minuscules non accentuées, chiffres, ponctuation anglaise), insuffisant pour le français ou les langues africaines.\n• **UTF-8 (Unicode)** : encodage universel à longueur variable (1 à 4 octets) capable de représenter plus d’un million de symboles (accents é, è, ç, alphabets arabe, chinois, emojis).\n• **Exemple concret** : la lettre « A » s’écrit 65 en ASCII comme en UTF-8 (1 octet), tandis que « é » nécessite 2 octets en UTF-8.',
            keyRule:
              'UTF-8 est devenu le standard absolu du Web car il est 100 % compatible avec ASCII tout en supportant toutes les langues du monde.',
            konanTip:
              'Si tu vois des symboles bizarres comme « Ã© » à la place de « é » dans un tableau CSV, c’est un conflit d’encodage : ouvre le fichier en UTF-8 !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi la norme UTF-8 a-t-elle supplanté la table ASCII historique sur Internet ?',
              options: [
                'Parce qu’ASCII ne permettait pas de coder les chiffres de 0 à 9',
                'Parce qu’UTF-8 permet d’encoder tous les caractères accentués, alphabets internationaux et emojis tout en restant compatible avec ASCII',
                'Parce qu’UTF-8 compresse automatiquement les vidéos 4K',
                'Parce qu’ASCII fonctionnait uniquement sur les smartphones',
              ],
              correctAnswerIndex: 1,
              explanation:
                'ASCII est limité à 128 caractères anglophones (sans accents). UTF-8 conserve les mêmes codes pour les 128 premiers caractères et utilise 2 à 4 octets pour coder tous les autres caractères mondiaux.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'Capacités',
            stepTitle: 'Éviter la confusion entre taille de fichier et débit réseau',
            paragraphText:
              'En entreprise numérique, on confond souvent le volume d’un fichier (en octets) et la vitesse de transfert sur un réseau (en bits par seconde).\n• **Volume de stockage** : s’exprime en Ko, Mo, Go ou To (taille d’un document, capacité d’un SSD).\n• **Débit réseau** : s’exprime généralement en kb/s, Mb/s ou Gb/s (quantité de bits transmis chaque seconde).\n• **Exemple concret** : télécharger un rapport de 100 Mo avec une connexion de 80 Mb/s (= 10 Mo/s) prend théoriquement 100 / 10 = 10 secondes, et non 1,25 seconde.',
            formula: {
              name: 'Temps théorique de téléchargement',
              formula: 't = \\frac{\\text{Taille en Mo}}{\\text{Débit en Mo/s}} = \\frac{\\text{Taille en Mo} \\times 8}{\\text{Débit en Mb/s}}',
              note: 'Toujours convertir la taille et le débit dans la même unité (bits ou octets) avant de diviser.',
            },
            konanTip:
              'Avant de calculer un temps de transfert, multiplie la taille en Mo par 8 pour obtenir des Mégabits, puis divise par le débit en Mb/s.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Combien de temps théorique faut-il pour télécharger un fichier de 50 Mo avec une connexion stable à 40 Mb/s ?',
              options: ['1,25 seconde', '5 secondes', '10 secondes', '20 secondes'],
              correctAnswerIndex: 2,
              explanation:
                '50 Mo = 50 × 8 = 400 Mégabits. À une vitesse de 40 Mb/s, le téléchargement dure 400 / 40 = 10 secondes.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch1_p2',
        order: 2,
        title: 'Architecture de von Neumann : CPU, mémoires (RAM, ROM, SSD/HDD) et périphériques E/S',
        summary:
          'Identifier les blocs fonctionnels de l’architecture de von Neumann, le rôle du processeur (UC et ALU), les différences entre RAM, ROM et stockage persistant, et les périphériques E/S.',
        conceptExplanation:
          'Depuis 1945, la quasi-totalité des ordinateurs (PC, serveurs, smartphones) repose sur l’architecture de von Neumann : les données et les programmes résident ensemble dans une mémoire centrale et sont traités par un processeur unique relié par des bus.\n\nLe processeur (CPU) comprend l’Unité de Commande (UC), qui décode et orchestre les instructions, et l’Unité Arithmétique et Logique (ALU), qui exécute les calculs et comparaisons.\n\nLa mémoire se décline en trois familles complémentaires : la RAM (vive, ultra-rapide, volatile), la ROM (morte, non volatile, contenant le firmware de démarrage BIOS/UEFI) et le stockage de masse (SSD électronique très rapide ou HDD magnétique mécanique). Les périphériques d’entrée, de sortie et mixtes assurent l’interface avec l’utilisateur.',
        keyRule:
          'Architecture de von Neumann = CPU (UC + ALU) + Mémoire centrale (RAM) + Stockage + Périphériques E/S, tous interconnectés par des bus.',
        formulas: [
          {
            name: 'Fréquence d’horloge du processeur',
            formula: '1\\text{ GHz} = 10^9\\text{ cycles par seconde}',
            note: 'Un processeur cadencé à 3,2 GHz réalise 3,2 milliards de cycles d’horloge chaque seconde.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer un ordinateur lent dans une PME d’Abidjan',
          statement:
            'Un ordinateur comptable doté de 4 Go de RAM et d’un disque dur mécanique HDD met 3 minutes à démarrer et se fige dès que 10 onglets web et Excel sont ouverts. Quels composants faut-il améliorer en priorité ?',
          methodSteps: [
            'Identifier la cause du démarrage lent (3 minutes) : le disque dur mécanique HDD possède des vitesses de lecture très inférieures à un SSD.',
            'Identifier la cause des blocages en multitâche : 4 Go de RAM saturent rapidement lorsque le système, le navigateur et Excel tournent simultanément.',
            'Recommander un remplacement du HDD par un SSD (gain de réactivité ×5 à ×10) et une extension de la RAM à 8 ou 16 Go.',
          ],
          conclusion:
            'Le duo SSD + extension RAM résout à la fois la lenteur au démarrage et les blocages multitâches.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Von Neumann',
            stepTheme: 'Architecture',
            stepTitle: 'Comprendre le modèle de l’architecture de von Neumann',
            paragraphText:
              'Presque tous les ordinateurs modernes, du smartphone au serveur cloud, suivent un plan d’organisation inventé par John von Neumann en 1945.\n• **Principe du programme enregistré** : les instructions du programme et les données qu’il manipule partagent la même mémoire centrale.\n• **Quatre blocs essentiels** : le processeur (CPU), la mémoire vive (RAM), le stockage permanent et les périphériques d’entrée/sortie.\n• **Les bus** : autoroutes électroniques (bus de données, d’adresses et de contrôle) qui font circuler les bits entre ces composants.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Architecture de von Neumann (blocs fonctionnels)',
              caption: 'Circulation des instructions et données entre CPU, Mémoire vive, Stockage et Périphériques',
              svgContent:
                '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="10" y="10" width="400" height="200" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><rect x="135" y="22" width="150" height="72" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="210" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">PROCESSEUR (CPU)</text><rect x="145" y="48" width="60" height="36" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="175" y="64" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">UC</text><text x="175" y="76" text-anchor="middle" font-size="8" fill="#1e40af">Contrôle</text><rect x="215" y="48" width="60" height="36" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="245" y="64" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">ALU</text><text x="245" y="76" text-anchor="middle" font-size="8" fill="#1e40af">Calculs</text><rect x="25" y="114" width="370" height="22" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/><text x="210" y="129" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">BUS SYSTÈME (Données • Adresses • Contrôle)</text><line x1="210" y1="94" x2="210" y2="114" stroke="#475569" stroke-width="2"/><rect x="25" y="152" width="110" height="44" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/><text x="80" y="170" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">RAM / ROM</text><text x="80" y="185" text-anchor="middle" font-size="8" fill="#065f46">Mémoire centrale</text><rect x="155" y="152" width="110" height="44" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.8"/><text x="210" y="170" text-anchor="middle" font-size="10" font-weight="bold" fill="#c2410c">SSD / HDD</text><text x="210" y="185" text-anchor="middle" font-size="8" fill="#9a3412">Stockage durable</text><rect x="285" y="152" width="110" height="44" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8"/><text x="340" y="170" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">Périphériques</text><text x="340" y="185" text-anchor="middle" font-size="8" fill="#475569">Entrées / Sorties</text><line x1="80" y1="136" x2="80" y2="152" stroke="#475569" stroke-width="2"/><line x1="210" y1="136" x2="210" y2="152" stroke="#475569" stroke-width="2"/><line x1="340" y1="136" x2="340" y2="152" stroke="#475569" stroke-width="2"/></svg>',
            },
            keyRule:
              'Dans l’architecture de von Neumann, un bus système unique relie le CPU, la mémoire vive, le stockage et les périphériques E/S.',
            konanTip:
              'Sur un schéma de von Neumann, repère toujours le bus central qui relie le CPU à la RAM, au stockage et aux périphériques.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle est l’idée fondatrice de l’architecture de von Neumann qui régit les ordinateurs modernes ?',
              options: [
                'Les programmes sont gravés définitivement sur papier perforé',
                'Les instructions du programme et les données sont stockées ensemble en mémoire centrale',
                'L’ordinateur fonctionne sans aucun périphérique d’entrée/sortie',
                'Chaque calcul nécessite un câble physique différent',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le modèle de von Neumann repose sur le concept de programme enregistré : instructions et données cohabitent dans la mémoire centrale et sont traitées par le CPU.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Processeur (CPU)',
            stepTheme: 'UC & ALU',
            stepTitle: 'Distinguer l’Unité de Commande (UC) et l’ALU dans le CPU',
            paragraphText:
              'Le processeur (CPU, *Central Processing Unit*) est le cerveau de l’ordinateur : il lit, décode et exécute des milliards d’instructions chaque seconde.\n• **Unité de Commande (UC)** : chef d’orchestre qui va chercher l’instruction suivante en mémoire, la décode et coordonne les autres organes.\n• **Unité Arithmétique et Logique (ALU)** : calculatrice ultrarapide qui réalise les opérations arithmétiques (+, −, ×, ÷) et logiques (ET, OU, comparaisons).\n• **Registres et cœurs** : les registres sont des micro-mémoires ultra-rapides internes ; un CPU moderne possède plusieurs cœurs (4, 8, 16) travaillant en parallèle.',
            formula: {
              name: 'Fréquence d’horloge',
              formula: 'f = 3\\text{ GHz} = 3 \\times 10^9\\text{ cycles/s}',
              note: 'La performance globale dépend de la fréquence, du nombre de cœurs et de la mémoire cache.',
            },
            konanTip:
              'Moyen mnémotechnique : UC = « Chef d’orchestre » (Commande), ALU = « Calculatrice » (Arithmétique et Logique).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Au sein du processeur (CPU), quel sous-composant est spécifiquement chargé d’effectuer les additions, multiplications et comparaisons logiques ?',
              options: [
                'La mémoire ROM',
                'L’Unité Arithmétique et Logique (ALU)',
                'Le disque dur mécanique (HDD)',
                'Le câble HDMI',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ALU (Unité Arithmétique et Logique) exécute tous les calculs arithmétiques et opérations logiques, sous la coordination de l’Unité de Commande (UC).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'RAM vs ROM',
            stepTheme: 'Mémoires',
            stepTitle: 'Opposer la mémoire vive (RAM) et la mémoire morte (ROM)',
            paragraphText:
              'Un ordinateur a besoin d’un plan de travail temporaire très rapide et d’un manuel de démarrage permanent : ce sont les rôles respectifs de la RAM et de la ROM.\n• **RAM (*Random Access Memory*)** : mémoire vive de travail où sont chargés le système et les logiciels ouverts. Elle est ultra-rapide mais **volatile** (son contenu s’efface dès que le courant est coupé).\n• **ROM (*Read Only Memory*)** : mémoire morte **non volatile**, lisible au démarrage, qui conserve le micrologiciel d’amorçage (BIOS ou UEFI).\n• **Exemple concret** : si une coupure d’électricité survient à Abidjan sans onduleur avant d’avoir sauvegardé un rapport Word, les modifications présentes uniquement en RAM sont perdues.',
            keyRule:
              'RAM = rapide et volatile (effacée à l’extinction) ; ROM = permanente et non volatile (démarrage BIOS/UEFI).',
            konanTip:
              'En cas de doute : la RAM est comme le dessus de ton bureau (tout ce qui est ouvert maintenant), tandis que le SSD est l’armoire où tu ranges tes dossiers.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Quelle caractéristique distingue fondamentalement la RAM de la ROM ?',
              options: [
                'La RAM est volatile (effacée à l’arrêt de l’alimentation), alors que la ROM est non volatile',
                'La RAM sert uniquement à stocker les films, alors que la ROM exécute les jeux vidéo',
                'La ROM est 100 fois plus volumineuse que la RAM',
                'La RAM ne peut jamais être modifiée par le processeur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La RAM (mémoire vive) perd toutes ses données dès que l’alimentation électrique est coupée, contrairement à la ROM qui conserve durablement les instructions de démarrage.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'SSD vs HDD',
            stepTheme: 'Stockage',
            stepTitle: 'Comparer le disque dur mécanique (HDD) et le disque flash (SSD)',
            paragraphText:
              'Pour conserver durablement le système d’exploitation, les logiciels et les fichiers personnels après extinction, l’ordinateur utilise un stockage de masse non volatil.\n• **HDD (*Hard Disk Drive*)** : plateaux magnétiques en rotation lus par une tête mécanique. Grand volume à faible coût, mais plus lent et fragile aux chocs.\n• **SSD (*Solid State Drive*)** : mémoire électronique flash sans aucune pièce mobile. Démarrage en quelques secondes, silencieux, résistant aux chutes et faible consommation électrique.\n• **Exemple concret** : un PC portable équipé d’un SSD NVMe démarre en 10 secondes contre 60 à 90 secondes pour un HDD classique.',
            keyRule:
              'Le SSD offre une réactivité nettement supérieure et une meilleure résistance mécanique que le HDD, qui reste utile pour l’archivage massif à bas prix.',
            konanTip:
              'Pour redonner vie à un vieux PC lent, remplacer le disque HDD par un SSD est presque toujours l’amélioration la plus rentable.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Pourquoi un disque SSD est-il beaucoup plus rapide et résistant aux chocs qu’un disque dur HDD ?',
              options: [
                'Parce qu’il tourne à 100 000 tours par minute',
                'Parce qu’il repose sur de la mémoire électronique flash sans aucune pièce mécanique mobile',
                'Parce qu’il utilise des cassettes magnétiques',
                'Parce qu’il fonctionne uniquement connecté à Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’absence de plateaux rotatifs et de bras mécaniques dans un SSD supprime la latence mécanique et rend le support insensible aux vibrations ou chocs courants.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Périphériques E/S',
            stepTheme: 'Interfaces',
            stepTitle: 'Classer les périphériques d’entrée, de sortie et mixtes',
            paragraphText:
              'Un ordinateur sans périphériques serait une boîte fermée incapable de communiquer avec l’humain ou son environnement.\n• **Périphériques d’entrée** : envoient des données vers l’ordinateur (clavier, souris, microphone, scanner, webcam, lecteur de code-barres).\n• **Périphériques de sortie** : restituent l’information traitée vers l’utilisateur (écran/moniteur, imprimante, haut-parleurs, vidéoprojecteur).\n• **Périphériques mixtes (entrée/sortie)** : assurent les deux sens simultanément (écran tactile de smartphone, clé USB, carte réseau Wi-Fi, imprimante multifonction).',
            konanTip:
              'Pose-toi toujours la question du sens du flux : vers le PC = Entrée ; du PC vers toi = Sortie ; dans les deux sens = Mixte.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Parmi les équipements suivants, lequel est un périphérique mixte (à la fois d’entrée et de sortie) ?',
              options: [
                'Une souris filaire',
                'Un vidéoprojecteur',
                'Un écran tactile de tablette',
                'Un microphone',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un écran tactile affiche des informations (sortie) tout en captant les gestes et frappes de l’utilisateur (entrée) : c’est donc un périphérique mixte.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège matériel',
            stepTheme: 'Diagnostic',
            stepTitle: 'Ne pas confondre mémoire vive (RAM) et espace de stockage (SSD)',
            paragraphText:
              'Beaucoup d’acheteurs confondent les deux chiffres affichés sur la fiche technique d’un PC ou d’un smartphone (ex. « 8 Go / 256 Go »).\n• **Le premier chiffre (8 Go)** : désigne la RAM, qui limite le nombre d’applications pouvant tourner de manière fluide en même temps.\n• **Le second chiffre (256 Go)** : désigne le stockage interne (SSD/flash), qui limite la quantité de photos, cours, vidéos et logiciels enregistrés.\n• **Exemple concret** : supprimer 50 Go de vidéos sur un ordinateur plein libère du stockage SSD, mais n’augmente jamais la quantité de RAM physique.',
            keyRule:
              'RAM = capacité multitâche instantanée (ex. 8 ou 16 Go) ; Stockage = capacité d’archivage durable (ex. 256 Go à 2 To).',
            konanTip:
              'Avant d’acheter un PC étudiant, vise au moins 8 Go de RAM et un SSD de 256 Go ou 512 Go pour travailler sans ralentissement.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Sur la fiche d’un smartphone « 12 Go / 512 Go », que représente exactement la valeur 512 Go ?',
              options: [
                'La capacité de la mémoire vive (RAM)',
                'La vitesse du processeur',
                'La capacité de stockage interne non volatile pour les fichiers et applications',
                'La durée de vie de la batterie',
              ],
              correctAnswerIndex: 2,
              explanation:
                '12 Go correspond à la RAM (mémoire de travail volatile), tandis que 512 Go désigne l’espace de stockage interne durable.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch1_p3',
        order: 3,
        title: 'Systèmes d’exploitation, arborescence, logiciels et supports mobiles',
        summary:
          'Comprendre le rôle du système d’exploitation, organiser une arborescence de fichiers, distinguer les catégories d’applications mobiles et maîtriser le WebSMS et le QR Code.',
        conceptExplanation:
          'Sans logiciel, le matériel informatique reste inerte. Le système d’exploitation (OS : Windows, macOS, Linux, Android, iOS) constitue l’intermédiaire indispensable entre le matériel et l’utilisateur : il gère le processeur, la RAM, les périphériques et l’arborescence des dossiers et fichiers (identifiés par leur extension : .docx, .xlsx, .pptx, .pdf).\n\nDans l’écosystème numérique actuel, l’ordinateur s’entend au sens large : tout terminal combinant processeur, mémoire et programmes (PC, smartphone, tablette, télévision connectée). Les applications mobiles se répartissent en applications indépendantes (hors-ligne), connectées, interactives avec les capteurs (scan) et sociales. Deux outils mobiles majeurs complètent cet arsenal : le WebSMS (envoi de campagnes SMS en masse depuis Internet) et le QR Code (code 2D stockant jusqu’à 7 089 chiffres ou 4 296 caractères alphanumériques).',
        keyRule:
          'Empilement informatique : Matériel → Système d’exploitation (OS) → Logiciels & Applications → Utilisateur. Un QR Code (2D) stocke jusqu’à 7 089 chiffres ou 4 296 caractères alphanumériques.',
        formulas: [
          {
            name: 'Capacité d’un QR Code (2D) vs Code-barres (1D)',
            formula: '\\text{QR Code : } 7\\,089\\text{ chiffres ou } 4\\,296\\text{ alphanumériques (2\\,953 octets)}',
            note: 'Contre seulement 10 à 13 caractères pour un code-barres linéaire classique.',
          },
        ],
        workedExample: {
          title: 'Choisir le bon support mobile pour une campagne d’information en Côte d’Ivoire',
          statement:
            'Une clinique d’Abidjan souhaite envoyer un rappel de vaccination à 4 000 patients (dont beaucoup sans forfait Internet actif) et placer sur ses affiches papier un lien direct vers sa page de prise de rendez-vous.',
          methodSteps: [
            'Pour joindre 4 000 patients même sans connexion Internet, utiliser une plateforme WebSMS (type Infobip ou passerelle opérateur) qui diffuse les SMS en masse.',
            'Pour relier l’affiche papier à la page web de rendez-vous, générer un QR Code encodant l’URL du formulaire.',
            'Tester le QR Code sur Android et iOS avant impression définitive.',
          ],
          conclusion:
            'Le WebSMS garantit la portée hors-ligne et le QR Code crée une passerelle instantanée entre le papier et le numérique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Système d’exploitation',
            stepTheme: 'Couches',
            stepTitle: 'Comprendre le rôle du système d’exploitation (OS)',
            paragraphText:
              'Un logiciel comme Word ou un navigateur ne parle pas directement aux circuits électriques du disque dur ou de l’écran : il passe par un traducteur universel.\n• **Système d’exploitation (OS)** : logiciel de base (Windows, macOS, Linux, Android, iOS) qui pilote le matériel, répartit le CPU et la RAM, et offre une interface graphique à l’utilisateur.\n• **Logiciels applicatifs** : programmes installés au-dessus de l’OS pour automatiser une tâche métier (bureautique, graphisme, visioconférence).\n• **Exemple concret** : lorsque tu cliques sur « Imprimer », le logiciel transmet la demande à l’OS qui dialogue avec le pilote (*driver*) de l’imprimante.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture logicielle en couches',
              caption: 'Comment l’utilisateur dialogue avec le matériel via l’OS et les applications',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'Couche 4', title: 'Utilisateur', subtitle: 'Actions, commandes, création de contenu', color: 'violet' },
                  { badge: 'Couche 3', title: 'Logiciels & Applications', subtitle: 'Navigateur, suite bureautique, apps mobiles', color: 'blue' },
                  { badge: 'Couche 2', title: 'Système d’Exploitation (OS)', subtitle: 'Windows, Linux, macOS, Android, iOS + pilotes', color: 'green' },
                  { badge: 'Couche 1', title: 'Matériel (Hardware)', subtitle: 'CPU, RAM, SSD, écran, carte réseau', color: 'slate' },
                ],
              },
            },
            keyRule:
              'L’OS est la couche charnière qui rend le matériel utilisable par les logiciels et par l’humain.',
            konanTip:
              'Windows, macOS et Linux dominent sur ordinateur ; Android et iOS dominent sur smartphone et tablette.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Quel est le rôle principal d’un système d’exploitation (Windows, Linux, Android, iOS) ?',
              options: [
                'Remplacer la carte mère et le processeur physique',
                'Assurer l’interface entre le matériel, les logiciels applicatifs et l’utilisateur en gérant les ressources',
                'Uniquement créer des présentations en diapositives',
                'Supprimer la nécessité d’utiliser une connexion Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’OS gère le matériel (CPU, RAM, disques, périphériques) et permet aux logiciels applicatifs de fonctionner de manière coordonnée et sécurisée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Arborescence',
            stepTheme: 'Fichiers',
            stepTitle: 'Organiser une arborescence et lire une extension de fichier',
            paragraphText:
              'Un disque de stockage contient des dizaines de milliers de fichiers : sans classement hiérarchique, il deviendrait impossible de retrouver un document.\n• **Arborescence** : structure en arbre partant d’une racine (ex. `C:\\` sous Windows ou `/` sous Linux) qui se ramifie en dossiers et sous-dossiers.\n• **Nom et extension** : un fichier comporte un nom suivi d’un point et d’une extension de 3 à 4 caractères (`.docx`, `.xlsx`, `.pptx`, `.pdf`, `.jpg`) indiquant à l’OS quel logiciel utiliser pour l’ouvrir.\n• **Exemple concret** : `C:\\Etudes\\L1\\Compta\\Bilan_2026.xlsx` indique le chemin absolu d’un classeur tableur.',
            keyRule:
              'L’extension d’un fichier (après le dernier point) détermine son format et le logiciel associé.',
            konanTip:
              'Évite les espaces et accents dans les noms de fichiers professionnels : préfère `Rapport_Stage_2026.pdf` à `rapport été #1.pdf`.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'À quoi sert l’extension située à la fin du nom d’un fichier informatique (ex. `.pptx`, `.pdf`, `.xlsx`) ?',
              options: [
                'À indiquer le poids exact du fichier en gigaoctets',
                'À identifier le type de format du fichier et le logiciel capable de l’ouvrir',
                'À chiffrer automatiquement le document avec un mot de passe',
                'À déterminer la marque de l’ordinateur qui l’a créé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’extension renseigne le système d’exploitation sur la nature du fichier (présentation, document portable, tableur) afin de lancer l’application appropriée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Ordinateur élargi',
            stepTheme: 'Terminaux',
            stepTitle: 'Définir l’ordinateur au sens large dans le monde numérique',
            paragraphText:
              'Dans la société numérique, l’ordinateur ne se réduit plus à une tour posée sous un bureau.\n• **Définition fonctionnelle** : tout terminal électronique combinant un processeur, de la mémoire et un jeu d’instructions capables de lire, manipuler et modifier des données numériques.\n• **Diversité des formes** : PC de bureau, ordinateurs portables, smartphones, tablettes, télévisions connectées, distributeurs automatiques et objets connectés.\n• **Exemple concret** : un smartphone moderne d’entrée de gamme dispose d’une puissance de calcul supérieure aux supercalculateurs qui ont guidé les missions Apollo.',
            keyRule:
              'Tout équipement doté d’un processeur, de mémoire et de programmes est un ordinateur au sens informatique.',
            konanTip:
              'Retiens le test en 3 éléments : Processeur + Mémoire + Programme = Ordinateur (quelle que soit la taille du boîtier).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui permet de qualifier un smartphone ou une télévision connectée d’ordinateur au sens large ?',
              options: [
                'La présence obligatoire d’un lecteur de CD-ROM',
                'La combinaison d’un processeur, de mémoire et de programmes traitant des données numériques',
                'Le fait d’être vendu avec une souris filaire',
                'Le fait de fonctionner uniquement sous Windows',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Est un ordinateur tout système électronique doté d’un processeur et de mémoire qui exécute des programmes pour traiter des données numériques.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Apps mobiles',
            stepTheme: 'Mobile',
            stepTitle: 'Classer les quatre grandes catégories d’applications mobiles',
            paragraphText:
              'Les applications mobiles sont des logiciels conçus pour smartphones et tablettes, mais elles n’ont pas toutes les mêmes besoins techniques.\n• **Applications indépendantes** : fonctionnent totalement hors-ligne sans réseau (calculatrice, bloc-notes, liste de contacts locale).\n• **Applications connectées** : nécessitent un accès Internet pour récupérer des données en temps réel (banque mobile, météo, messagerie).\n• **Applications à capteurs** : interagissent avec les composants du téléphone (caméra pour scanner un QR Code, GPS pour la géolocalisation, NFC pour le paiement).\n• **Applications sociales** : renforcent les interactions directes entre mobinautes (réseaux sociaux, messageries de groupe).',
            konanTip:
              'En zone à faible couverture réseau, les applications indépendantes ou dotées d’un mode hors-ligne restent opérationnelles.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans quelle catégorie range-t-on une application de calculatrice ou de chronomètre fonctionnant en mode avion ?',
              options: [
                'Application dépendante du streaming',
                'Application indépendante (hors-ligne)',
                'Application exclusivement sociale',
                'Application de stockage cloud obligatoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une application indépendante exécute ses fonctions localement sur le terminal sans nécessiter de connexion Internet ni réseau téléphonique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'WebSMS',
            stepTheme: 'Messagerie pro',
            stepTitle: 'Exploiter le SMS et les plateformes WebSMS en organisation',
            paragraphText:
              'Même à l’ère de la 4G et de la 5G, le SMS (*Short Message Service*) demeure un canal redoutable en Afrique de l’Ouest grâce à son taux de lecture quasi universel.\n• **Principe du SMS** : message texte court transmis sur le réseau cellulaire de mobile à mobile ou d’un serveur informatique vers un mobile, sans forfait Internet requis.\n• **Plateforme WebSMS** : interface en ligne (opérateurs mobiles ou prestataires spécialisés comme Infobip) permettant à une entreprise d’envoyer des milliers de SMS personnalisés en un clic.\n• **Exemple concret** : les banques de l’UEMOA utilisent le WebSMS pour envoyer instantanément les alertes de débit et les codes de validation (OTP).',
            keyRule:
              'Le WebSMS combine la puissance d’automatisation d’Internet côté émetteur avec la portée universelle hors-ligne du SMS côté destinataire.',
            konanTip:
              'Dans une campagne urgente en Afrique de l’Ouest, le duo WebSMS + WhatsApp garantit à la fois portée hors-ligne et richesse multimédia.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quel avantage majeur offre une plateforme WebSMS pour une entreprise ou une administration ?',
              options: [
                'Elle impose aux destinataires d’avoir une connexion fibre optique',
                'Elle permet d’envoyer des campagnes SMS en masse depuis Internet vers des mobiles, même sans connexion data côté destinataire',
                'Elle remplace entièrement le système d’exploitation du téléphone',
                'Elle sert uniquement à stocker des vidéos haute définition',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le WebSMS permet de piloter des envois massifs de SMS depuis une interface web, touchant tous les téléphones mobiles sans exiger d’accès Internet chez les destinataires.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'QR Code',
            stepTheme: 'Code 2D',
            stepTitle: 'Comparer le QR Code (2D) au code-barres linéaire classique',
            paragraphText:
              'Le QR Code (*Quick Response Code*) est un motif carré en deux dimensions lisible en une fraction de seconde par la caméra d’un smartphone.\n• **Capacité décuplée** : là où un code-barres classique (1D) stocke seulement 10 à 13 caractères, un QR Code peut contenir jusqu’à **7 089 caractères numériques** ou **4 296 caractères alphanumériques** (2 953 octets).\n• **Usages concrets** : rediriger une affiche vers un site web, payer un commerçant par mobile money (Wave, Orange Money, MTN MoMo), ou partager instantanément une carte de visite.\n• **Correction d’erreur** : même partiellement abîmé ou taché, un QR Code reste lisible grâce à sa redondance interne.',
            formula: {
              name: 'Capacité maximale d’un QR Code',
              formula: '7\\,089\\text{ chiffres} \\quad | \\quad 4\\,296\\text{ caractères alphanumériques} \\quad | \\quad 2\\,953\\text{ octets}',
              note: 'Un code-barres 1D classique se limite à 10–13 caractères.',
            },
            konanTip:
              'Ne scanne jamais aveuglément un QR Code collé à la main sur un distributeur ou un parcmètre (risque de « quishing » / phishing par QR Code).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle est la capacité maximale d’un QR Code en caractères numériques et alphanumériques ?',
              options: [
                '10 à 13 caractères uniquement',
                '256 caractères numériques ou 128 alphanumériques',
                '7 089 caractères numériques ou 4 296 caractères alphanumériques',
                '1 million de caractères alphanumériques',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Grâce à son encodage bidimensionnel (2D), le QR Code stocke jusqu’à 7 089 chiffres ou 4 296 caractères alphanumériques (2 953 octets), bien plus que les 10 à 13 caractères d’un code-barres classique.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : INTERNET, WEB, RECHERCHE DOCUMENTAIRE ET CYBERSÉCURITÉ
  // ==========================================================================
  {
    id: 'lmd_entd_l1_init_info_ch2',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Internet, Web, recherche documentaire et cybersécurité quotidienne',
    summary:
      'Maîtriser le fonctionnement d’Internet (TCP/IP, URL, HTTP/HTTPS, Web 1.0 à 3.0), mener des recherches documentaires rigoureuses (opérateurs booléens, fiabilité des sources) et appliquer les réflexes de cybersécurité (mots de passe, phishing, 2FA, sauvegarde 3-2-1).',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Initiation à l’Informatique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch2_p1',
        order: 1,
        title: 'Internet (TCP/IP, URL, HTTP/HTTPS), générations du Web et typologie des sites',
        summary:
          'Distinguer Internet du Web, décrypter une URL et HTTPS, retracer l’évolution Web 1.0 à 3.0 et choisir la bonne typologie de site web.',
        conceptExplanation:
          'Internet est l’infrastructure mondiale interconnectant des réseaux nationaux, régionaux et privés grâce à la famille de protocoles TCP/IP (*Transmission Control Protocol / Internet Protocol*). Internet supporte plusieurs services fondamentaux : le Web (pages hypertextes), le courrier électronique (e-mail), le transfert de fichiers (FTP), la téléphonie IP et le streaming.\n\nSur le Web, chaque ressource est localisée par une URL structurée (protocole `https://`, nom de domaine, chemin). Le protocole HTTPS ajoute une couche de chiffrement (TLS/SSL) protégeant les échanges contre l’interception. Le Web a évolué en trois grandes vagues : Web 1.0 (sites statiques d’information descendante), Web 2.0 (web participatif et social) et Web 3.0 (web des objets connectés et services intelligents).\n\nUn site web repose sur trois piliers : un contenu, un nom de domaine et un hébergement. Selon les objectifs de l’organisation, on distingue le site vitrine, le site catalogue, le site e-commerce (marchand avec paiement sécurisé), le site institutionnel, l’application web, le site carte de visite (`.tel`) et le blog (articles datés classés en ordre antéchronologique).',
        keyRule:
          'Internet = infrastructure réseau (TCP/IP) ; Web = service d’information circulant sur Internet (HTTP/HTTPS). Site web = Contenu + Nom de domaine + Hébergement.',
        formulas: [
          {
            name: 'Anatomie d’une adresse URL',
            formula: '\\text{URL} = \\underbrace{\\text{https://}}_{\\text{Protocole}} \\underbrace{\\text{www.exemple.ci}}_{\\text{Domaine}} \\underbrace{\\text{/cours/l1}}_{\\text{Chemin}}',
            note: 'Le « s » de https indique une connexion chiffrée (Secure) entre le navigateur et le serveur.',
          },
        ],
        workedExample: {
          title: 'Associer le bon type de site web à trois projets ivoiriens',
          statement:
            'Quel type de site recommander à : (A) une mairie souhaitant publier ses démarches et valeurs ; (B) une boutique de pagnes de Cocody voulant vendre et encaisser par Mobile Money ; (C) un analyste économique publiant chaque semaine une chronique datée ?',
          methodSteps: [
            'Projet A (missions, valeurs, informations pratiques publiques) → Site institutionnel.',
            'Projet B (catalogue dynamique + panier + paiement en ligne sécurisé) → Site marchand / e-commerce.',
            'Projet C (articles réguliers, datés et affichés du plus récent au plus ancien) → Blog.',
          ],
          conclusion:
            'Chaque objectif d’organisation correspond à une architecture web spécifique adaptée aux attentes des visiteurs.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'TCP/IP',
            stepTheme: 'Internet',
            stepTitle: 'Distinguer Internet (réseau TCP/IP) de ses services (Web, E-mail, FTP)',
            paragraphText:
              'Dans le langage courant, on confond souvent Internet et le Web, alors que le Web n’est qu’un des services fonctionnant sur Internet.\n• **Internet** : « réseau des réseaux » mondial qui relie des milliards de machines via un langage commun, la suite de protocoles **TCP/IP** (*Transmission Control Protocol / Internet Protocol*).\n• **Services historiques** : le **Web** (pages reliées par hyperliens), le **courrier électronique** (e-mail), le **FTP** (*File Transfer Protocol* pour transférer des fichiers), la téléphonie IP et le streaming.\n• **Exemple concret** : envoyer un e-mail via Outlook ou passer un appel WhatsApp utilise Internet (TCP/IP) sans nécessairement passer par un site web.',
            formula: {
              name: 'Protocole universel d’Internet',
              formula: '\\text{TCP/IP} = \\text{Transmission Control Protocol / Internet Protocol}',
              note: 'IP adresse et achemine les paquets ; TCP garantit leur réception complète et dans l’ordre.',
            },
            keyRule:
              'Internet est l’autoroute mondiale (TCP/IP) ; le Web, l’e-mail et le FTP sont les véhicules qui y circulent.',
            konanTip:
              'Ne dis plus « j’ouvre Internet » quand tu lances Chrome : tu ouvres un navigateur pour accéder au Web qui circule sur Internet (TCP/IP).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quel protocole universel permet l’interconnexion de l’ensemble des réseaux formant Internet ?',
              options: ['JPEG/PNG', 'TCP/IP', 'PDF/DOCX', 'HDMI/USB'],
              correctAnswerIndex: 1,
              explanation:
                'TCP/IP (Transmission Control Protocol / Internet Protocol) est la suite de protocoles standard qui permet à tous les réseaux du monde d’échanger des données sur Internet.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'URL & HTTPS',
            stepTheme: 'Sécurité Web',
            stepTitle: 'Décrypter une adresse URL et l’intérêt du protocole HTTPS',
            paragraphText:
              'Pour afficher une page précise parmi des milliards de documents en ligne, votre navigateur s’appuie sur son adresse unique : l’URL (*Uniform Resource Locator*).\n• **Structure d’une URL** : le protocole (`https://`), le nom de domaine (`www.entreprise.ci` avec l’extension nationale `.ci`, `.org`, `.com`), puis le chemin vers la page (`/contact`).\n• **HTTP vs HTTPS** : en HTTP, les données transitent en clair et peuvent être lues sur un Wi-Fi public ; en **HTTPS** (*HyperText Transfer Protocol Secure*), le trafic est chiffré par un certificat TLS/SSL (cadenas dans le navigateur).\n• **Exemple concret** : ne saisis jamais un mot de passe bancaire ou un numéro de carte sur une page commençant par `http://` sans le « s ».',
            keyRule:
              'HTTPS chiffre les communications entre le navigateur et le serveur, empêchant l’espionnage et l’altération des données en transit.',
            konanTip:
              'Attention : le cadenas HTTPS prouve que la connexion est chiffrée, mais ne garantit pas que le site soit honnête ! Vérifie toujours l’orthographe exacte du nom de domaine.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Quelle garantie apporte concrètement le « S » du protocole HTTPS ?',
              options: [
                'Il garantit que le site appartient obligatoirement à l’État',
                'Il chiffre les données échangées entre le navigateur et le serveur web',
                'Il supprime automatiquement toutes les publicités de la page',
                'Il rend le téléchargement gratuit sans forfait Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'HTTPS (HTTP Secure) utilise un chiffrement TLS/SSL pour protéger la confidentialité et l’intégrité des données échangées entre l’utilisateur et le serveur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Web 1.0 → 3.0',
            stepTheme: 'Évolution',
            stepTitle: 'Retracer les trois générations du Web (1.0, 2.0 et 3.0)',
            paragraphText:
              'Depuis la création du tout premier site web en août 1991 jusqu’à plus d’un milliard de sites aujourd’hui, les usages du Web ont profondément muté.\n• **Web 1.0 (Web statique)** : pages de présentation en lecture seule où l’organisation diffuse de l’information descendante sans interaction.\n• **Web 2.0 (Web participatif et social)** : les internautes deviennent acteurs en publiant, commentant, notant et partageant (réseaux sociaux, blogs, wikis).\n• **Web 3.0 (Web intelligent et des objets connectés)** : interconnexion d’objets connectés (montres, capteurs, véhicules) et services personnalisés exploitant les données sémantiques.',
            konanTip:
              'Retiens le résumé en 3 mots : Web 1.0 = Lire ; Web 2.0 = Participer ; Web 3.0 = Connecter (objets & intelligence).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle génération du Web se caractérise par le passage à un Web participatif où les internautes créent, commentent et animent les plateformes ?',
              options: ['Le Web 0.5', 'Le Web 1.0', 'Le Web 2.0', 'Le protocole FTP'],
              correctAnswerIndex: 2,
              explanation:
                'Le Web 2.0 (web participatif ou social) marque l’entrée des utilisateurs dans la création et l’animation de contenu, contrairement au Web 1.0 purement statique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: '3 piliers d’un site',
            stepTheme: 'Infrastructure',
            stepTitle: 'Identifier les trois composantes obligatoires d’un site web',
            paragraphText:
              'Mettre un site web en ligne ressemble à ouvrir un magasin physique : il faut à la fois des marchandises, un local et une adresse postale.\n• **Le contenu** : textes, images, vidéos et code (HTML/CSS/JS) qui constituent les pages consultées par le visiteur.\n• **Le nom de domaine** : adresse lisible et unique réservée annuellement (ex. `www.fintech-abidjan.ci`), traduite en adresse IP par le système DNS.\n• **L’hébergement** : espace loué sur un serveur connecté 24h/24 à Internet chez un prestataire (hébergeur) qui stocke les fichiers du site.',
            keyRule:
              'Sans contenu, nom de domaine ET hébergement réunis, un site web ne peut pas être accessible publiquement sur Internet.',
            konanTip:
              'Pense à renouveler ton nom de domaine chaque année : s’il expire, n’importe qui peut le racheter et détourner ton adresse web !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quels sont les trois éléments indispensables pour mettre un site web en ligne et le rendre accessible au public ?',
              options: [
                'Une imprimante, un scanner et un câble HDMI',
                'Un contenu, un nom de domaine et un espace d’hébergement',
                'Uniquement une page Facebook et un numéro de téléphone',
                'Un fichier Word, une clé USB et un lecteur DVD',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un site web nécessite son contenu (pages et médias), un espace serveur (hébergement) pour le stocker 24h/24 et un nom de domaine pour que les internautes puissent y accéder.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Typologie sites',
            stepTheme: 'Stratégie Web',
            stepTitle: 'Distinguer site vitrine, catalogue, e-commerce, institutionnel et application web',
            paragraphText:
              'Toutes les organisations n’ont pas besoin d’une boutique en ligne complexe : choisir la bonne typologie évite des coûts inutiles.\n• **Site vitrine** : présente l’entreprise, son savoir-faire et ses coordonnées ; **site catalogue** : détaille tous les produits sans paiement direct.\n• **Site marchand (e-commerce)** : boutique dynamique intégrant panier, gestion de stock et paiement sécurisé.\n• **Site institutionnel** : présente les missions, valeurs et services pratiques d’une collectivité, association ou établissement.\n• **Application web** : programme complet exécuté directement dans le navigateur sans installation locale (ex. webmail, Google Docs) ; **site carte de visite** : page unique minimaliste souvent en `.tel`.',
            konanTip:
              'Critère décisif : dès qu’un paiement sécurisé en ligne est intégré pour acheter des produits ou services, c’est un site e-commerce.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle différence essentielle sépare un site catalogue d’un site marchand (e-commerce) ?',
              options: [
                'Le site catalogue n’a pas de nom de domaine',
                'Le site marchand intègre l’achat direct en ligne avec paiement sécurisé, contrairement au site catalogue',
                'Le site catalogue fonctionne uniquement sans Internet',
                'Le site marchand ne peut afficher aucune photo de produit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le site catalogue présente en détail les produits et tarifs pour informer le prospect, tandis que le site marchand (e-commerce) permet la commande et le paiement sécurisé directement en ligne.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Blog & Antéchronologie',
            stepTheme: 'Publication',
            stepTitle: 'Caractériser le blog et son classement antéchronologique',
            paragraphText:
              'Le blog (ou cybercarnet) est un format de site très populaire pour publier régulièrement des articles d’expertise, des actualités ou des tutoriels.\n• **Classement antéchronologique** : les billets datés et signés s’affichent toujours **du plus récent au plus ancien**, mettant immédiatement la nouveauté en haut de page.\n• **Simplicité de gestion** : des plateformes CMS comme WordPress permettent de créer, publier et classer des articles sans coder manuellement chaque page.\n• **Exemple concret** : une startup fintech à Abidjan anime un blog éducatif hebdomadaire pour expliquer l’épargne digitale et attirer des clients via Google.',
            keyRule:
              'Un blog affiche ses billets en ordre antéchronologique : le dernier article publié apparaît toujours en premier.',
            konanTip:
              'Astuce vocabulaire : « antéchronologique » = l’inverse de chronologique (le plus récent en haut, le plus ancien en bas).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Comment sont classés par défaut les articles (billets) publiés sur un blog ?',
              options: [
                'Par ordre alphabétique du titre uniquement',
                'En ordre antéchronologique (du plus récent au plus ancien)',
                'Par taille du fichier en kilooctets',
                'De manière totalement aléatoire à chaque visite',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La caractéristique structurelle d’un blog est l’affichage antéchronologique de ses billets datés, plaçant systématiquement l’article le plus récent en tête.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch2_p2',
        order: 2,
        title: 'Navigateurs, moteurs de recherche, opérateurs booléens et fiabilité des sources',
        summary:
          'Distinguer navigateur et moteur de recherche, maîtriser les opérateurs de recherche avancés et évaluer rigoureusement la crédibilité d’une information en ligne.',
        conceptExplanation:
          'Sur le Web, deux outils complémentaires sont souvent confondus : le **navigateur web** (logiciel installé sur l’appareil — Chrome, Firefox, Edge, Safari — qui interprète le HTML/CSS et affiche les pages) et le **moteur de recherche** (service en ligne — Google, Bing, DuckDuckGo — combinant un index géant du Web et un algorithme de classement).\n\nPour effectuer une recherche universitaire ou professionnelle efficace, les opérateurs avancés font gagner un temps précieux : les guillemets `"..."` imposent l’expression exacte, le signe moins `-` exclut un terme, `OR` élargit à des synonymes, `site:` restreint à un domaine précis et `filetype:` cible un format de fichier.\n\nEnfin, face à la désinformation (*fake news*), tout étudiant doit appliquer une grille critique de vérification des sources : auteur identifiable, date de publication, recoupement sur plusieurs médias fiables et nature des preuves citées.',
        keyRule:
          'Navigateur = logiciel d’affichage (Chrome, Firefox) ; Moteur de recherche = site d’indexation et d’interrogation (Google, Bing). Toujours croiser une source avant de la citer.',
        formulas: [
          {
            name: 'Syntaxe d’une requête documentaire avancée',
            formula: '\\text{"expression exacte"} \\;\\; \\text{site:.gouv.ci} \\;\\; \\text{filetype:pdf} \\;\\; -\\text{mot\\_exclu}',
            note: 'Pas d’espace après les deux-points de `site:` ou `filetype:`, ni après le tiret `-`.',
          },
        ],
        workedExample: {
          title: 'Trouver un rapport officiel sur l’économie numérique en Côte d’Ivoire',
          statement:
            'Un étudiant en L1 cherche un rapport officiel au format PDF sur la transformation digitale publié sur un site gouvernemental ivoirien, en excluant les offres d’emploi.',
          methodSteps: [
            'Encadrer l’expression exacte entre guillemets : `"transformation digitale"`.',
            'Limiter la recherche aux sites officiels ivoiriens : `site:gouv.ci`.',
            'Cibler les documents téléchargeables et exclure les annonces de recrutement : `filetype:pdf -recrutement`.',
          ],
          conclusion:
            'La requête `"transformation digitale" site:gouv.ci filetype:pdf -recrutement` filtre immédiatement des milliers de résultats bruités.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Navigateur vs Moteur',
            stepTheme: 'Outils Web',
            stepTitle: 'Ne jamais confondre navigateur web et moteur de recherche',
            paragraphText:
              'C’est l’une des confusions les plus fréquentes chez les débutants en informatique, alors que leurs rôles sont totalement distincts.\n• **Navigateur web (*browser*)** : logiciel installé sur votre ordinateur ou smartphone (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari) dont la mission est de télécharger et d’afficher les pages web.\n• **Moteur de recherche** : site web spécialisé (Google Search, Bing, Qwant, DuckDuckGo) composé d’une immense base de données indexant le Web et d’un champ d’interrogation.\n• **Exemple concret** : vous ouvrez le navigateur **Firefox** pour accéder au moteur de recherche **Google**.',
            keyRule:
              'On utilise un navigateur (logiciel local) pour consulter un moteur de recherche (service en ligne).',
            konanTip:
              'Si un logiciel a une icône sur ton bureau pour ouvrir des onglets Web, c’est un navigateur ; si tu y accèdes par une adresse URL, c’est un moteur de recherche.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Lequel des couples suivants associe correctement un navigateur web et un moteur de recherche ?',
              options: [
                'Navigateur : Google Search | Moteur de recherche : Windows',
                'Navigateur : Mozilla Firefox | Moteur de recherche : Bing',
                'Navigateur : Word | Moteur de recherche : Excel',
                'Navigateur : HTTPS | Moteur de recherche : TCP/IP',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mozilla Firefox est un logiciel navigateur permettant d’afficher le Web, tandis que Bing est un moteur de recherche en ligne accessible depuis ce navigateur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Adresse e-mail',
            stepTheme: 'Identité Web',
            stepTitle: 'Comprendre le rôle de l’adresse e-mail comme identifiant numérique',
            paragraphText:
              'Votre adresse électronique constitue véritablement votre passeport sur Internet : presque tous les services en ligne s’y adossent.\n• **Identifiant unique mondial** : structurée en `nom_utilisateur@domaine.ext` (ex. `k.kouassi@domaine.ci`), elle ne peut appartenir qu’à un seul compte.\n• **Usages professionnels** : correspondance formelle, inscription aux services cloud et réseaux sociaux, groupes de diffusion, newsletters et réponses automatisées (absence).\n• **Hygiène pro** : créez une adresse sobre (`prenom.nom@...`) dédiée aux études et candidatures, distincte des adresses de loisirs.',
            keyRule:
              'L’adresse e-mail est votre identifiant unique universel sur Internet ; elle doit rester sobre et professionnelle dans tout cadre académique ou métier.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi est-il recommandé de posséder une adresse e-mail de format `prenom.nom@fournisseur.com` dès la Licence 1 ?',
              options: [
                'Parce que les autres adresses ne peuvent pas recevoir de pièces jointes',
                'Parce que l’adresse e-mail sert d’identifiant unique et reflète immédiatement le sérieux professionnel auprès des enseignants et recruteurs',
                'Parce qu’elle augmente automatiquement le débit de la connexion Wi-Fi',
                'Parce qu’elle dispense de créer un mot de passe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adresse électronique est l’identifiant central de la vie numérique ; un format sobre et nominatif renforce la crédibilité académique et professionnelle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Opérateurs booléens',
            stepTheme: 'Recherche',
            stepTitle: 'Affiner une recherche avec les guillemets, le signe moins et OR',
            paragraphText:
              'Taper cinq mots au hasard renvoie souvent des millions de résultats hors sujet ; les opérateurs booléens permettent de piloter le moteur avec précision.\n• **Guillemets `"..."`** : recherche l’expression exacte dans cet ordre précis (ex. `"économie numérique UEMOA"`).\n• **Exclusion `-mot`** : élimine toutes les pages contenant le mot indésirable (ex. `apple -fruit -recette`).\n• **Union `OR` (en majuscules)** : accepte l’un ou l’autre des deux termes (ex. `télétravail OR "travail à distance"`).',
            formula: {
              name: 'Combinaison d’opérateurs booléens',
              formula: '\\text{"mobile money"} \\; (\\text{BCEAO} \\; \\text{OR} \\; \\text{UEMOA}) \\; -\\text{publicité}',
              note: 'L’opérateur OR doit toujours être écrit en MAJUSCULES pour être reconnu par le moteur.',
            },
            konanTip:
              'Ne mets jamais d’espace entre le signe moins `-` et le mot à exclure : écris `-jeu` et non `- jeu`.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle requête permet de trouver exactement la suite de mots « inclusion financière » tout en excluant les pages qui parlent de « cryptomonnaie » ?',
              options: [
                'inclusion financière + cryptomonnaie',
                '"inclusion financière" -cryptomonnaie',
                'inclusion OR financière /cryptomonnaie',
                '(inclusion financière) *cryptomonnaie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les guillemets imposent l’expression exacte « inclusion financière » et le signe `-` collé au mot `-cryptomonnaie` exclut toute page contenant ce terme.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Filtres site & fichier',
            stepTheme: 'Veille',
            stepTitle: 'Cibler un site précis (`site:`) ou un format de document (`filetype:`)',
            paragraphText:
              'Pour rédiger un mémoire ou préparer un exposé solide, les études officielles et documents structurés sont bien plus fiables que les forums anonymes.\n• **Opérateur `site:`** : restreint les résultats à un domaine ou une extension précise (ex. `site:bceao.int` ou `site:.edu`).\n• **Opérateur `filetype:`** : ne renvoie que les fichiers d’un format donné (`filetype:pdf`, `filetype:xlsx`, `filetype:pptx`).\n• **Exemple concret** : `inflation site:bceao.int filetype:pdf` trouve directement les rapports officiels de la Banque Centrale.',
            keyRule:
              'Combiner `site:` et `filetype:` transforme un moteur de recherche grand public en bibliothèque documentaire professionnelle.',
            konanTip:
              'Teste dès aujourd’hui `filetype:pdf` sur Google pour trouver des guides complets et rapports officiels en deux secondes.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quel opérateur de recherche avancée permet de limiter les résultats uniquement aux pages publiées sur le domaine `bceao.int` ?',
              options: [
                'url=bceao.int',
                'site:bceao.int',
                'domain/bceao.int',
                'from:bceao.int',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’opérateur `site:` suivi sans espace du nom de domaine (`site:bceao.int`) restreint les résultats exclusivement à ce site.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Esprit critique',
            stepTheme: 'Fiabilité',
            stepTitle: 'Évaluer la fiabilité d’une source en ligne (méthode des 5 critères)',
            paragraphText:
              'N’importe qui peut publier une page d’apparence professionnelle en dix minutes : un bon résultat en tête de Google n’est pas automatiquement vrai.\n• **Auteur et éditeur** : qui écrit ? Est-ce une institution reconnue, un chercheur, un média identifié ou un site anonyme ?\n• **Date et actualité** : l’information est-elle récente ou obsolète (un chiffre tech vieux de 8 ans n’est plus pertinent) ?\n• **Preuves et recoupement** : les chiffres citent-ils une source primaire ? Au moins deux sources indépendantes confirment-elles le fait ?\n• **Objectif** : la page vise-t-elle à informer, vendre un produit (article sponsorisé) ou manipuler l’opinion ?',
            keyRule:
              'Une information non sourcée, non datée ou impossible à recouper sur des sources indépendantes ne doit jamais être relayée ni citée.',
            konanTip:
              'Vérifie toujours si un résultat en haut de Google porte la mention « Sponsorisé » : c’est une publicité payée, pas forcément la meilleure source !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Parmi les indices suivants, lequel signale le plus fortement qu’un article web est peu fiable pour un travail universitaire ?',
              options: [
                'L’article est signé par un chercheur identifié et cite des statistiques de l’INS',
                'L’article n’indique ni auteur, ni date, ni sources vérifiables et emploie un titre sensationnaliste',
                'L’article est hébergé sur le portail d’une organisation internationale',
                'L’article renvoie vers des rapports officiels téléchargeables',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’absence d’auteur identifiable, de date et de sources vérifiables associée à un ton sensationnaliste est le marqueur classique d’une source non fiable ou d’une infox.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Plagiat & Citation',
            stepTheme: 'Éthique',
            stepTitle: 'Éviter le copier-coller et respecter le droit d’auteur en recherche',
            paragraphText:
              'Trouver une information sur Internet ne signifie pas qu’elle vous appartient : la réutiliser sans citer son auteur constitue du plagiat.\n• **Plagiat** : copier tout ou partie d’un texte, d’un graphique ou d’une image sans guillemets ni référence bibliographique.\n• **Bon réflexe** : reformuler l’idée avec vos propres mots (paraphrase) et mentionner clairement l’auteur, le titre, la date et l’URL de la source.\n• **Licences Creative Commons** : certains contenus libres autorisent la réutilisation sous conditions (ex. CC-BY = citation obligatoire de l’auteur).',
            keyRule:
              'Toute donnée, citation ou image empruntée doit mentionner sa source exacte (auteur, date, origine).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle pratique respecte l’éthique documentaire lors de la rédaction d’un exposé à partir de sources web ?',
              options: [
                'Copier-coller trois paragraphes en changeant juste la police de caractères',
                'Reformuler les idées avec ses propres mots ou placer les extraits exacts entre guillemets en citant précisément les sources',
                'Supprimer le nom de l’auteur original pour alléger la page',
                'Utiliser uniquement des captures d’écran sans référence',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’intégrité académique exige de reformuler ou de citer entre guillemets tout emprunt et d’indiquer systématiquement la référence de la source.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch2_p3',
        order: 3,
        title: 'Cybersécurité quotidienne : mots de passe, phishing, 2FA et sauvegarde 3-2-1',
        summary:
          'Construire des mots de passe robustes, déjouer les tentatives de phishing, activer la double authentification (2FA) et sécuriser ses données selon la règle 3-2-1.',
        conceptExplanation:
          'La majorité des piratages de comptes personnels et professionnels ne repose pas sur des failles techniques complexes, mais sur des erreurs humaines évitables.\n\nQuatre boucliers simples éliminent plus de 90 % des risques quotidiens : (1) des **mots de passe longs et uniques** (au moins 12 caractères variés, idéalement gérés par un gestionnaire de mots de passe) ; (2) la vigilance contre le **phishing** (hameçonnage par e-mail, SMS ou WhatsApp usurpant une banque, un opérateur mobile money ou une administration) ; (3) l’**authentification à deux facteurs (2FA)** combinant mot de passe + code temporaire sur téléphone ; et (4) la **règle de sauvegarde 3-2-1** (3 copies des données, sur 2 supports différents, dont 1 hors site/cloud) pour résister aux pannes, vols ou ransomwares.',
        keyRule:
          '4 réflexes d’or : 1 compte = 1 mot de passe fort unique | Jamais de code OTP partagé | 2FA activée | Sauvegarde 3-2-1.',
        formulas: [
          {
            name: 'Règle universelle de sauvegarde 3-2-1',
            formula: '3\\text{ copies} \\;\\;\\longrightarrow\\;\\; 2\\text{ supports distincts} \\;\\;\\longrightarrow\\;\\; 1\\text{ copie hors site (Cloud)}',
            note: 'Protège simultanément contre la panne matérielle, le vol, l’incendie et les ransomwares.',
          },
        ],
        workedExample: {
          title: 'Déjouer un SMS frauduleux usurpant un service Mobile Money',
          statement:
            'Vous recevez un SMS : « URGENT : Votre compte sera bloqué dans 2h. Cliquez sur http://mon-compte-securite-ci.xyz et saisissez votre code PIN + le code reçu par SMS. » Comment réagir ?',
          methodSteps: [
            'Repérer les 4 signaux de phishing : sentiment d’urgence artificielle (« dans 2h »), lien suspect non officiel (`.xyz`, en `http`), demande de code PIN et demande de code SMS (OTP).',
            'Ne jamais cliquer sur le lien ni répondre au message.',
            'Vérifier son compte uniquement via l’application officielle ou le code USSD habituel, puis signaler et supprimer le SMS.',
          ],
          conclusion:
            'Un opérateur ou une banque ne demande JAMAIS votre code secret ni un code de validation à usage unique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Mots de passe',
            stepTheme: 'Hygiène cyber',
            stepTitle: 'Construire un mot de passe robuste et unique par service',
            paragraphText:
              'Un mot de passe court comme `Abidjan2025` est cassé en moins d’une seconde par un logiciel automatisé d’attaque par force brute.\n• **Longueur et complexité** : viser au minimum **12 à 14 caractères** mêlant majuscules, minuscules, chiffres et symboles (ou une phrase secrète longue).\n• **Unicité absolue** : ne jamais réutiliser le même mot de passe entre sa messagerie, sa banque et un forum ; si le forum est piraté, tous vos autres comptes tombent.\n• **Gestionnaire de mots de passe** : un coffre-fort chiffré (Bitwarden, KeePass) mémorise des dizaines de mots de passe uniques à votre place.',
            keyRule:
              'La longueur du mot de passe et son unicité par service sont les deux meilleurs remparts contre le piratage de compte.',
            konanTip:
              'Méthode de la phrase secrète : « J’aime l’attiéké poisson à Cocody dès 13h ! » devient `J’al’apàCd13h!` — facile à retenir, quasi incassable.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Pourquoi est-il très dangereux d’utiliser le même mot de passe sur plusieurs sites web ?',
              options: [
                'Parce que le clavier s’use plus vite',
                'Parce que la fuite de données d’un seul site peu sécurisé permet aux pirates d’accéder à tous vos autres comptes (credential stuffing)',
                'Parce que les navigateurs bloquent les mots de passe identiques',
                'Parce que cela ralentit la connexion Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsqu’un site subit une fuite de base de données, les attaquants testent automatiquement les couples e-mail/mot de passe volés sur Gmail, les banques et les réseaux sociaux.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Phishing',
            stepTheme: 'Ingénierie sociale',
            stepTitle: 'Repérer une attaque de phishing (hameçonnage) par e-mail ou SMS',
            paragraphText:
              'Le phishing (hameçonnage) est une arnaque psychologique : le pirate se fait passer pour une entité de confiance (banque, opérateur télécom, impôts, université) pour vous soutirer vos identifiants.\n• **Signaux d’alerte** : ton alarmiste ou urgent (« compte suspendu sous 24h »), adresse d’expéditeur bizarre, lien pointant vers un domaine inconnu, fautes d’orthographe inhabituelles.\n• **Variantes fréquentes** : *smishing* (par SMS), *vishing* (appel téléphonique d’un faux conseiller) et *quishing* (faux QR Code).\n• **Réflexe de survie** : ne jamais cliquer sur le lien du message ; ouvrir soi-même le site ou l’application officielle.',
            keyRule:
              'Urgence artificielle + lien suspect + demande de mot de passe ou de code PIN = phishing certain.',
            konanTip:
              'Sur ordinateur, passe toujours la souris sur un lien (sans cliquer) pour lire la véritable adresse de destination en bas de l’écran.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Vous recevez un e-mail semblant provenir de votre banque demandant de « confirmer votre mot de passe en urgence via un lien ». Quel est le bon réflexe ?',
              options: [
                'Cliquer immédiatement pour éviter le blocage du compte',
                'Répondre à l’e-mail en donnant seulement la moitié du mot de passe',
                'Ne pas cliquer sur le lien, vérifier directement via l’application ou le site officiel saisi manuellement et signaler le message',
                'Transférer l’e-mail à tous vos contacts pour les prévenir',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les institutions financières ne demandent jamais de confirmer un mot de passe via un lien reçu par e-mail ou SMS. Il faut toujours passer par le canal officiel.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Double authentification',
            stepTheme: '2FA / MFA',
            stepTitle: 'Activer l’authentification à deux facteurs (2FA)',
            paragraphText:
              'Même si un pirate parvient à deviner ou voler votre mot de passe, la double authentification (2FA) lui bloque l’entrée.\n• **Principe** : combiner deux preuves indépendantes parmi : ce que vous **savez** (mot de passe/PIN), ce que vous **possédez** (téléphone générant un code OTP via application Authenticator ou SMS) et ce que vous **êtes** (empreinte digitale, reconnaissance faciale).\n• **Priorité absolue** : activer la 2FA sur sa boîte e-mail principale (qui sert à réinitialiser tous les autres comptes), ses réseaux sociaux professionnels et ses comptes financiers.\n• **Règle d’or** : un code de validation temporaire (OTP) est strictement personnel et ne doit jamais être dicté au téléphone.',
            keyRule:
              '2FA = Mot de passe (ce que je sais) + 2e preuve (ce que je possède ou ce que je suis). Indispensable sur l’e-mail et les comptes bancaires.',
            konanTip:
              'Privilégie une application Authenticator (Google/Microsoft Authenticator) plutôt que le SMS lorsque le service le propose : c’est encore plus sûr.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Comment fonctionne l’authentification à deux facteurs (2FA) ?',
              options: [
                'Elle demande de taper deux fois le même mot de passe',
                'Elle exige deux preuves d’identité distinctes, par exemple un mot de passe et un code temporaire sur smartphone',
                'Elle oblige deux personnes différentes à se connecter ensemble',
                'Elle supprime totalement l’usage du mot de passe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La 2FA associe deux facteurs de catégories différentes (ex. mot de passe + code temporaire sur un appareil possédé), rendant le vol de mot de passe insuffisant pour pirater le compte.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Sauvegarde 3-2-1',
            stepTheme: 'Résilience',
            stepTitle: 'Protéger ses données contre les pannes et ransomwares avec la règle 3-2-1',
            paragraphText:
              'Un disque dur finit toujours par tomber en panne, un ordinateur peut être volé et un rançongiciel (*ransomware*) peut chiffrer tous vos fichiers en quelques minutes.\n• **3 copies** de vos données importantes (l’original + 2 sauvegardes).\n• **2 supports différents** (ex. le SSD du PC + un disque dur externe débranché après copie).\n• **1 copie hors site** (ex. sur un espace Cloud sécurisé comme Google Drive ou OneDrive) pour survivre à un vol ou un incendie.\n• **Exemple concret** : un étudiant rédigeant son rapport de stage garde sa version de travail sur son PC, une copie hebdomadaire sur clé USB et une synchronisation automatique sur Drive.',
            visualSchema: {
              type: 'flowchart',
              title: 'Stratégie de sauvegarde 3-2-1',
              caption: 'Comment garantir qu’aucune panne, perte ou attaque ne détruise vos fichiers importants',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: 'Copie 1 — Travail quotidien', sublabel: 'SSD interne de l’ordinateur (usage courant)', kind: 'start', color: 'blue' },
                  { label: 'Copie 2 — Support externe local', sublabel: 'Disque externe ou clé USB (déconnecté après copie)', kind: 'process', color: 'green' },
                  { label: 'Copie 3 — Copie hors site (Cloud)', sublabel: 'Google Drive / OneDrive avec 2FA activée', kind: 'end', color: 'violet' },
                ],
              },
            },
            keyRule:
              'Règle 3-2-1 : 3 copies de vos fichiers, sur 2 types de supports différents, dont 1 stockée hors site (Cloud).',
            konanTip:
              'Débranche toujours ton disque dur de sauvegarde externe une fois la copie terminée : s’il reste branché, un ransomware peut aussi le chiffrer !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Dans la règle de sauvegarde informatique « 3-2-1 », que signifient exactement les trois chiffres ?',
              options: [
                '3 mots de passe, 2 antivirus et 1 pare-feu',
                '3 copies des données, sur 2 supports différents, dont 1 copie stockée hors site (ex. Cloud)',
                '3 heures de travail, 2 pauses et 1 redémarrage par jour',
                '3 clés USB identiques rangées dans le même sac à dos',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La règle 3-2-1 impose 3 exemplaires des données, répartis sur 2 types de supports distincts, avec au moins 1 copie distante (hors site) pour résister aux sinistres locaux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Mises à jour & Wi-Fi',
            stepTheme: 'Prévention',
            stepTitle: 'Appliquer les mises à jour système et sécuriser l’usage des Wi-Fi publics',
            paragraphText:
              'Repousser indéfiniment les mises à jour Windows, Android ou navigateur laisse des portes ouvertes connues des pirates.\n• **Mises à jour de sécurité** : elles corrigent des failles découvertes dans le système ou les applications avant qu’elles ne soient exploitées par des malwares.\n• **Wi-Fi publics ouverts** : dans un café, un aéroport ou un hall public, un attaquant peut créer un faux point d’accès pour intercepter le trafic non chiffré.\n• **Bon réflexe** : éviter les opérations bancaires sur un Wi-Fi ouvert (préférer le partage de connexion 4G/5G de son téléphone ou un VPN fiable) et ne télécharger des logiciels que sur les sites officiels.',
            konanTip:
              'Un logiciel « cracké » gratuit est l’un des principaux vecteurs de chevaux de Troie et de vol de mots de passe enregistrés dans le navigateur.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Pourquoi est-il fortement recommandé d’installer rapidement les mises à jour du système d’exploitation et du navigateur ?',
              options: [
                'Uniquement pour changer la couleur du fond d’écran',
                'Pour corriger les failles de sécurité connues et bloquer les logiciels malveillants',
                'Pour effacer tous les documents personnels anciens',
                'Pour doubler la capacité physique du disque dur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les mises à jour comblent les vulnérabilités découvertes par les éditeurs et empêchent les pirates d’exploiter des failles déjà documentées.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Données personnelles',
            stepTheme: 'Vie privée',
            stepTitle: 'Protéger son identité numérique et limiter les traces exposées',
            paragraphText:
              'Chaque photo publiée, formulaire rempli ou autorisation accordée à une application mobile laisse des traces durables sur Internet.\n• **Principe de minimisation** : ne fournir que les informations strictement nécessaires lors d’une inscription en ligne et vérifier les permissions des apps (une lampe torche n’a pas besoin d’accéder à vos contacts !).\n• **Paramètres de confidentialité** : contrôler qui peut voir vos publications, votre numéro de téléphone et votre localisation.\n• **Règle d’or** : sur Internet, un contenu gratuit est souvent financé par la collecte de vos données comportementales à des fins de ciblage publicitaire.',
            keyRule:
              'Maîtriser ses paramètres de confidentialité et ses permissions d’applications protège contre le vol d’identité et le ciblage abusif.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Lors de l’installation d’une simple application de calculatrice sur smartphone, celle-ci demande l’accès permanent à votre micro, vos contacts et votre position GPS. Quelle est la bonne attitude ?',
              options: [
                'Accepter toutes les permissions sans lire pour aller plus vite',
                'Refuser ces permissions disproportionnées et désinstaller l’application suspecte au profit d’une alternative fiable',
                'Envoyer votre mot de passe bancaire au développeur',
                'Redémarrer le téléphone pour valider les permissions',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Des permissions sans aucun lien avec la fonction d’une application (micro, contacts, GPS pour une calculatrice) signalent une collecte abusive de données ou un logiciel espion.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : COMMUNICATION NUMÉRIQUE ET RÉSEAUX SOCIAUX PROFESSIONNELS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_init_info_ch3',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Communication numérique et réseaux sociaux professionnels',
    summary:
      'Comprendre l’écosystème de la communication digitale et ses métiers, comparer les plateformes majeures (Facebook, LinkedIn, Instagram, TikTok, X, WhatsApp), appliquer les 3 piliers éditoriaux et piloter l’e-réputation et les KPIs d’engagement.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Initiation à l’Informatique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch3_p1',
        order: 1,
        title: 'Stratégie digitale des organisations, croissance d’Internet et métiers du Web',
        summary:
          'Mesurer la bascule des médias vers le numérique, structurer une stratégie de communication digitale d’entreprise et identifier les rôles du Community Manager et du Blogueur.',
        conceptExplanation:
          'La communication numérique ne se résume pas à posséder un ordinateur ou une page sociale : c’est un écosystème complet regroupant l’informatisation des supports et la stratégie globale déployée sur le web, les médias sociaux, les terminaux mobiles et les objets connectés.\n\nDepuis 2016, Internet a dépassé la télévision pour devenir le premier média consommé au monde, entraînant un basculement massif des budgets publicitaires des médias hors-ligne (presse papier, TV) vers les médias en ligne. En Afrique et en Côte d’Ivoire, l’équipement mobile accélère encore cette transformation.\n\nPour animer cet écosystème, de nouveaux métiers clés ont émergé : le **Community Manager** (chargé d’animer les communautés, pages sociales, forums et newsletters tout en protégeant l’image de la marque), le **Blogueur / créateur de contenu** (animateur thématique spécialisé) et les outils de communication simultanée (visioconférence, webinaires, newsletters).',
        keyRule:
          'La communication numérique est un écosystème stratégique global (Web + Mobile + Réseaux sociaux + E-mailing), piloté par des professionnels comme le Community Manager.',
        workedExample: {
          title: 'Structurer le lancement digital d’un cabinet de formation à Abidjan',
          statement:
            'Un jeune centre de formation professionnelle à Marcory veut se faire connaître auprès des étudiants et des entreprises sans budget télévision.',
          methodSteps: [
            'Déployer un socle propre : site vitrine avec catalogue des formations + adresse e-mail professionnelle + newsletter mensuelle.',
            'Nommer un Community Manager chargé d’animer les pages sociales (LinkedIn pour les DRH, Facebook/Instagram pour les étudiants).',
            'Organiser des sessions de visioconférence découverte pour convertir les prospects en inscrits.',
          ],
          conclusion:
            'Une stratégie digitale cohérente articule site web, e-mailing et animation sociale ciblée à coût maîtrisé.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Écosystème digital',
            stepTheme: 'Stratégie',
            stepTitle: 'Définir la communication numérique comme un écosystème complet',
            paragraphText:
              'Beaucoup d’organisations pensent faire de la communication numérique simplement parce qu’elles ont créé un compte sur un réseau social.\n• **Définition complète** : informatisation des supports de communication et ensemble des stratégies menées sur le web, les médias sociaux, les smartphones et les objets connectés.\n• **Synergie des canaux** : le site web informe et convertit, l’e-mail fidélise (newsletters), le mobile alerte (SMS, QR Code, apps) et les réseaux sociaux engagent la communauté.\n• **Exemple concret** : une clinique qui relie ses affiches par QR Code à son site web, confirme les rendez-vous par SMS et publie des conseils santé sur Facebook déploie un véritable écosystème.',
            keyRule:
              'Une communication numérique performante articule plusieurs canaux complémentaires au service d’un objectif clair, jamais un outil isolé.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Quelle définition décrit le plus fidèlement la communication numérique ?',
              options: [
                'L’achat d’ordinateurs neufs sans connexion Internet',
                'L’informatisation des supports et la stratégie globale de communication sur le web, les médias sociaux, les terminaux mobiles et les objets connectés',
                'L’impression exclusive de flyers papier en couleur',
                'L’envoi ponctuel d’un e-mail interne entre deux collègues',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La communication numérique englobe à la fois la numérisation des supports et la stratégie globale orchestrée sur l’ensemble des canaux digitaux.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Bascule média',
            stepTheme: 'Marché digital',
            stepTitle: 'Comprendre pourquoi Internet domine désormais les investissements publicitaires',
            paragraphText:
              'L’attention du public s’est massivement déplacée des écrans traditionnels vers les smartphones et ordinateurs connectés.\n• **Tournant historique** : dès 2016, Internet a dépassé la télévision pour devenir le média le plus consommé au monde.\n• **Conséquence économique** : tandis que les dépenses publicitaires sur les médias hors-ligne (journaux, magazines, TV) reculaient, celles des médias en ligne ont connu une croissance annuelle à deux chiffres (+10 % à +14 % par an et plus).\n• **Avantage du digital** : ciblage précis par âge, ville ou centres d’intérêt, budget accessible aux PME et mesure immédiate des résultats.',
            konanTip:
              'Sur un panneau d’affichage au Plateau, impossible de savoir combien de passants ont réellement regardé ; en publicité digitale, chaque vue et chaque clic sont mesurés !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quel événement majeur du marché des médias s’est produit dès 2016 à l’échelle mondiale ?',
              options: [
                'La disparition totale des sites web professionnels',
                'Internet a dépassé la télévision pour devenir le média le plus consommé au monde',
                'Les journaux papier ont représenté 95 % des budgets publicitaires',
                'Les smartphones ont été interdits dans les entreprises',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès 2016, Internet a surpassé la télévision en temps de consommation mondial, accélérant le transfert des budgets marketing vers le numérique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Community Manager',
            stepTheme: 'Métiers du Web',
            stepTitle: 'Maîtriser les missions stratégiques du Community Manager',
            paragraphText:
              'Créer une page professionnelle prend cinq minutes ; l’animer avec régularité, tact et résultats est un véritable métier.\n• **Community Manager (CM)** : professionnel chargé d’animer et de fédérer les communautés d’une organisation sur les réseaux sociaux, forums de discussion et newsletters.\n• **Missions clés** : planifier le calendrier éditorial, créer ou coordonner les visuels/vidéos, répondre aux commentaires et messages privés, gérer les crises d’image et analyser les statistiques.\n• **Qualités requises** : excellente orthographe, sens de l’écoute, créativité, réactivité et maîtrise des codes de chaque plateforme.',
            keyRule:
              'Le Community Manager est la voix quotidienne de l’organisation en ligne : il anime, modère, écoute et mesure.',
            konanTip:
              'Un bon Community Manager écoute deux fois plus qu’il ne parle : les commentaires des clients sont une mine d’or pour améliorer l’offre.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quel rôle joue principalement le Community Manager au sein d’une organisation ?',
              options: [
                'Réparer les câbles électriques du bâtiment',
                'Animer les pages sociales, groupes, forums et newsletters, dialoguer avec la communauté et veiller sur l’image de la marque',
                'Installer le système Windows sur les serveurs',
                'Rédiger uniquement les bilans comptables fiscaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Community Manager orchestre la présence relationnelle de l’organisation sur les réseaux sociaux, forums et newsletters afin de développer et fidéliser sa communauté.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Blogueur & Newsletter',
            stepTheme: 'Contenus',
            stepTitle: 'Articuler le rôle du blogueur et la puissance de la newsletter',
            paragraphText:
              'Contrairement aux réseaux sociaux dont les algorithmes changent sans préavis, votre blog et votre liste d’abonnés e-mail vous appartiennent directement.\n• **Blogueur / créateur thématique** : animateur d’un site ou blog spécialisé dans un domaine précis (finance, tech, santé, cuisine), bâtissant une audience fidèle par l’expertise.\n• **Newsletter (bulletin d’information en ligne)** : envoi périodique par e-mail d’actualités, conseils ou offres exclusives à des abonnés volontaires.\n• **Atout stratégique** : l’e-mailing permet des groupes ciblés, des réponses automatisées et un lien direct sans intermédiaire algorithmique.',
            konanTip:
              'Ne construis jamais toute ton audience sur un seul réseau social : encourage toujours tes abonnés à s’inscrire à ta newsletter ou à visiter ton site.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pourquoi la newsletter reste-t-elle un outil très précieux en communication digitale malgré l’essor des réseaux sociaux ?',
              options: [
                'Parce qu’elle ne nécessite aucune connexion Internet',
                'Parce qu’elle permet de contacter directement des abonnés volontaires dans leur boîte mail sans dépendre des changements d’algorithme d’un réseau social',
                'Parce qu’elle est limitée à 10 caractères maximum',
                'Parce qu’elle remplace automatiquement le site e-commerce',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une base d’abonnés e-mail appartient à l’organisation et assure une délivrabilité directe, contrairement à la portée organique fluctuante des réseaux sociaux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Visioconférence',
            stepTheme: 'Temps réel',
            stepTitle: 'Organiser des communications simultanées efficaces (visioconférence)',
            paragraphText:
              'Les logiciels de communication simultanée (Google Meet, Zoom, Microsoft Teams, Skype) ont aboli les distances pour les réunions, cours à distance et entretiens.\n• **Prérequis techniques** : application ou navigateur à jour, compte e-mail, micro/caméra testés et connexion stable.\n• **Bonnes pratiques pro** : envoyer le lien et l’ordre du jour à l’avance, couper son micro quand on n’intervient pas, soigner l’éclairage face au visage et résumer les décisions par écrit après la réunion.\n• **Exemple concret** : une équipe projet répartie entre Abidjan, Bouaké et Dakar coordonne ses livrables hebdomadaires en 30 minutes de visioconférence avec partage d’écran.',
            keyRule:
              'Une visioconférence réussie repose sur un ordre du jour clair, un micro coupé hors prise de parole et un compte-rendu synthétique.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle règle d’efficacité et de courtoisie s’impose lors d’une visioconférence professionnelle à plusieurs participants ?',
              options: [
                'Laisser son micro ouvert en permanence dans un lieu bruyant',
                'Couper son micro lorsqu’on ne parle pas et préparer un ordre du jour clair',
                'Ne jamais envoyer le lien avant le début de la réunion',
                'Parler tous en même temps pour gagner du temps',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Couper son micro hors prise de parole élimine les bruits parasites et l’écho, tandis que l’ordre du jour cadre la durée et les décisions.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Réseau social interne',
            stepTheme: 'RSE',
            stepTitle: 'Distinguer réseaux sociaux grand public et réseau social d’entreprise (RSE)',
            paragraphText:
              'Les grandes entreprises et administrations utilisent aussi des plateformes sociales privées réservées à leurs collaborateurs.\n• **Réseau social d’entreprise (RSE)** : espace collaboratif interne sécurisé (ex. Viva Engage, Slack, Workplace) facilitant le partage de connaissances, l’entraide entre services et la communication interne.\n• **Droits et contraintes** : soumis à une charte informatique stricte, à la confidentialité des données internes et à la modération hiérarchique.\n• **Piège à éviter** : ne jamais publier de documents confidentiels d’entreprise dans un groupe public ou sur un compte personnel non sécurisé.',
            keyRule:
              'Un RSE est réservé aux échanges internes sécurisés de l’organisation, distinct des réseaux publics tournés vers les clients et prospects.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle est la vocation première d’un Réseau Social d’Entreprise (RSE) ?',
              options: [
                'Diffuser des publicités payantes au grand public',
                'Fluidifier la communication interne, la collaboration et le partage de connaissances entre les salariés dans un espace sécurisé',
                'Remplacer la comptabilité générale de l’entreprise',
                'Permettre à n’importe quel internaute anonyme de consulter les contrats clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le RSE est un outil interne et sécurisé destiné à améliorer la collaboration transversale et le partage d’informations entre les membres d’une même organisation.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch3_p2',
        order: 2,
        title: 'Panorama des réseaux sociaux professionnels et modèle économique des plateformes',
        summary:
          'Choisir la plateforme adaptée à sa cible (Facebook, LinkedIn, Instagram, TikTok, X, WhatsApp), distinguer Profil/Groupe/Page Facebook et comprendre le modèle économique des données.',
        conceptExplanation:
          'Chaque réseau social répond à une audience, une culture et un format dominants : vouloir tout publier à l’identique partout est une erreur stratégique majeure.\n\n**Facebook** reste massif en Afrique de l’Ouest pour les communautés locales et l’e-commerce de proximité (avec une distinction cruciale entre **Profil** personnel, **Groupe** d’échange et **Page** professionnelle donnant accès aux statistiques, rôles d’administrateurs, publications programmées et annonces sponsorisées). **LinkedIn** est la référence B2B, recrutement et personal branding. **Instagram** et **TikTok** dominent le visuel, les Reels et la vidéo courte virale. **X (ex-Twitter)** excelle dans l’actualité temps réel et la veille, tandis que **WhatsApp Business** est incontournable pour la relation client directe en Côte d’Ivoire.\n\nEnfin, la gratuité apparente des réseaux sociaux est un mythe économique : ces plateformes se financent par la collecte de vos données comportementales afin de vendre du ciblage publicitaire ultra-précis aux annonceurs.',
        keyRule:
          'Une entreprise doit impérativement utiliser une Page professionnelle (et non un simple Profil personnel). Sur les plateformes gratuites, la donnée comportementale finance la publicité ciblée.',
        workedExample: {
          title: 'Choisir le bon duo de réseaux sociaux pour deux entreprises ivoiriennes',
          statement:
            'Quelles plateformes privilégier pour : (1) un cabinet de conseil en cybersécurité ciblant les directeurs informatiques ; (2) une marque de cosmétiques naturels ciblant les 18–35 ans à Abidjan ?',
          methodSteps: [
            'Pour le cabinet B2B cybersécurité : LinkedIn (ciblage décideurs et DRH/DSI) + X/blog pour la veille experte.',
            'Pour la marque cosmétiques B2C : Instagram & TikTok (démonstrations vidéo courtes, avant/après) + Facebook Page & WhatsApp Business pour convertir les commandes locales.',
          ],
          conclusion:
            'Le choix des plateformes découle toujours de la cible (B2B vs B2C) et du format de preuve (articles experts vs vidéos visuelles).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Panorama pro',
            stepTheme: 'Plateformes',
            stepTitle: 'Comparer Facebook, LinkedIn, Instagram, TikTok, X et WhatsApp Business',
            paragraphText:
              'Chaque réseau social possède ses propres codes éditoriaux et son audience dominante : choisir les bons canaux évite d’épuiser son équipe.\n• **LinkedIn** : réseau professionnel n°1 (B2B, recrutement, expertise, carrousels PDF et articles).\n• **Facebook & WhatsApp Business** : incontournables en Afrique francophone pour les communautés locales, le service client rapide et le commerce conversationnel.\n• **Instagram & TikTok** : plateformes visuelles portées par la photo soignée et la vidéo verticale courte (Reels, TikTok), très puissantes auprès des 16–35 ans.\n• **X (ex-Twitter)** : microblogging d’actualité en temps réel, veille sectorielle et relations presse.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparatif stratégique des principaux réseaux sociaux',
              caption: 'Adapter le choix de la plateforme à la cible et au format phare',
              tableData: {
                headers: ['Plateforme', 'Cible dominante', 'Format phare', 'Objectif clé'],
                rows: [
                  ['LinkedIn', 'Pros, B2B, recruteurs', 'Post expert, carrousel', 'Notoriété pro, leads B2B, emploi'],
                  ['Facebook', 'Grand public, local', 'Post mixte, Live, Page', 'Communauté, événements, pub locale'],
                  ['Instagram', '18–35 ans, lifestyle', 'Reels, Stories, Carrousel', 'Image de marque, esthétique B2C'],
                  ['TikTok', 'Jeunes & grand public', 'Vidéo courte verticale', 'Viralité, découverte rapide'],
                  ['X (Twitter)', 'Médias, tech, décideurs', 'Thread, actu temps réel', 'Veille, SAV rapide, influence'],
                  ['WhatsApp Bus.', 'Clients locaux mobiles', 'Catalogue, chat direct', 'Conversion et fidélisation client'],
                ],
              },
            },
            keyRule:
              'On ne choisit pas un réseau par effet de mode, mais là où se trouve réellement sa cible.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle plateforme est prioritairement conçue pour le réseautage professionnel B2B, le recrutement et la valorisation de son expertise métier ?',
              options: ['TikTok', 'LinkedIn', 'Pinterest', 'Snapchat'],
              correctAnswerIndex: 1,
              explanation:
                'LinkedIn est le réseau social professionnel de référence dédié aux carrières, au recrutement, au personal branding et à la prospection B2B.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Profil vs Groupe vs Page',
            stepTheme: 'Facebook Pro',
            stepTitle: 'Distinguer Profil, Groupe et Page professionnelle sur Facebook',
            paragraphText:
              'Créer un simple profil personnel au nom d’une entreprise est une erreur classique qui limite fortement sa croissance.\n• **Profil Facebook** : compte individuel lié à une personne physique pour ajouter des amis (plafonné et dépourvu d’outils marketing).\n• **Groupe Facebook** : espace d’échanges communautaires où les membres discutent entre pairs autour d’un thème précis.\n• **Page Facebook professionnelle** : seule vitrine officielle d’une entreprise offrant statistiques d’audience, gestion multi-rôles (administrateurs/éditeurs), programmation de publications, Facebook Live, liaison au site web et annonces sponsorisées.',
            keyRule:
              'Pour une marque ou institution, la Page professionnelle est obligatoire : elle seule débloque statistiques, multi-administrateurs et publicité ciblée.',
            konanTip:
              'Tu peux associer un Groupe privé à ta Page professionnelle pour fidéliser tes clients ou étudiants les plus engagés !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quel format Facebook une entreprise doit-elle impérativement créer pour accéder aux statistiques, à la gestion des rôles d’administrateurs et aux annonces sponsorisées ?',
              options: [
                'Un simple Profil personnel',
                'Une Page professionnelle Facebook',
                'Une conversation privée à trois personnes',
                'Un album photo caché',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seule la Page Facebook offre les fonctionnalités professionnelles (statistiques, gestion des rôles, publications programmées, liaison site web et publicités sponsorisées).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Temps d’usage',
            stepTheme: 'Audiences',
            stepTitle: 'Analyser le temps moyen journalier consacré aux réseaux sociaux',
            paragraphText:
              'Mesurer le temps passé chaque jour par les utilisateurs sur chaque plateforme aide les responsables marketing à répartir intelligemment leurs efforts.\n• **Capteurs d’attention** : les réseaux grand public orientés divertissement et socialisation (Facebook, Instagram, TikTok) captent des sessions longues quotidiennes.\n• **Usages ciblés** : les réseaux plus professionnels ou thématiques (LinkedIn, X) enregistrent un temps journalier plus court mais une intention d’information ou d’affaires très qualifiée.\n• **Enseignement stratégique** : une publication sur LinkedIn touche moins de minutes par jour qu’une vidéo Facebook, mais atteint directement des décideurs.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Temps moyen journalier par réseau social (repère historique en min/j)',
              caption: 'Comparaison de l’attention quotidienne captée par les grandes plateformes',
              barChart: {
                yLabel: 'Minutes / jour',
                unit: 'min',
                bars: [
                  { label: 'Facebook', value: 42, color: 'blue', annotation: '42 min' },
                  { label: 'Instagram', value: 21, color: 'violet', annotation: '21 min' },
                  { label: 'Pinterest', value: 21, color: 'orange', annotation: '21 min' },
                  { label: 'X (Twitter)', value: 17, color: 'slate', annotation: '17 min' },
                  { label: 'LinkedIn', value: 10, color: 'green', annotation: '10 min' },
                ],
              },
            },
            konanTip:
              'Ne juge jamais une plateforme uniquement au volume brut d’audience : 500 vues ciblées de décideurs sur LinkedIn peuvent rapporter plus que 50 000 vues non ciblées.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Pourquoi une entreprise B2B investit-elle sur LinkedIn même si le temps moyen journalier y est inférieur à celui passé sur Facebook ?',
              options: [
                'Parce que LinkedIn interdit les textes de plus de 5 mots',
                'Parce que l’audience de LinkedIn est hautement qualifiée professionnellement (décideurs, recruteurs, partenaires)',
                'Parce que LinkedIn fonctionne sans connexion Internet',
                'Parce que Facebook n’existe pas en Afrique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La valeur d’un canal dépend de la qualité et de la pertinence de son audience par rapport à la cible, pas uniquement du temps brut passé dessus.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Modèle économique',
            stepTheme: 'Données & Pub',
            stepTitle: 'Comprendre la réalité économique de la « gratuité » sur les réseaux sociaux',
            paragraphText:
              'On entend souvent dire que Facebook, Instagram ou TikTok sont gratuits : d’un point de vue économique, c’est inexact.\n• **Économie de l’attention et des données** : les plateformes enregistrent vos clics, recherches, temps de visionnage, localisation et centres d’intérêt pour construire un profil comportemental précis.\n• **Monétisation publicitaire** : elles vendent aux entreprises (via des annonces sponsorisées) la capacité de toucher exactement le profil recherché.\n• **Conséquence pour les organisations** : la portée gratuite (organique) des Pages d’entreprise est volontairement limitée par les algorithmes afin d’inciter à sponsoriser les campagnes clés.',
            keyRule:
              'Ce qui paraît gratuit sur les réseaux sociaux est financé par l’exploitation publicitaire de votre attention et de vos données comportementales.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Sur quel modèle économique principal reposent les grands réseaux sociaux gratuits pour les utilisateurs ?',
              options: [
                'La vente de câbles réseau aux particuliers',
                'La collecte et l’analyse des données comportementales pour vendre du ciblage publicitaire (annonces sponsorisées) aux entreprises',
                'Des subventions publiques obligatoires de chaque école',
                'La location de clés USB dans les cybercafés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les réseaux sociaux financent leurs infrastructures en monétisant l’attention et le ciblage publicitaire précis basé sur l’activité des utilisateurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'WhatsApp Business',
            stepTheme: 'Commerce local',
            stepTitle: 'Exploiter WhatsApp Business pour la relation client en zone UEMOA',
            paragraphText:
              'En Côte d’Ivoire et en Afrique de l’Ouest, WhatsApp est le canal de messagerie quotidien de millions de clients : sa version professionnelle offre des outils précieux.\n• **Profil d’entreprise vérifiable** : horaires d’ouverture, adresse géolocalisée, site web et description claire.\n• **Catalogue produits intégré** : permet aux clients de consulter photos, prix en FCFA et références directement dans la discussion.\n• **Productivité** : messages d’accueil automatiques, messages d’absence, réponses rapides (`/tarifs`, `/livraison`) et étiquettes clients (« Nouveau prospect », « Paiement reçu », « Livré »).',
            konanTip:
              'Utilise les étiquettes de couleur dans WhatsApp Business pour ne jamais oublier de relancer un client qui a demandé un devis !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle fonctionnalité propre à WhatsApp Business aide directement un commerçant à présenter ses produits et automatiser l’accueil client ?',
              options: [
                'La création d’un système d’exploitation Windows',
                'Le catalogue produits intégré, les étiquettes de suivi et les messages automatiques d’accueil/absence',
                'La suppression obligatoire de tous les numéros de téléphone',
                'L’envoi de courriers papier par la poste',
              ],
              correctAnswerIndex: 1,
              explanation:
                'WhatsApp Business ajoute des outils professionnels dédiés au commerce : profil complet, catalogue produits, réponses rapides, étiquettes et messages automatisés.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'LinkedIn Pro',
            stepTheme: 'Carrière & B2B',
            stepTitle: 'Construire un profil LinkedIn crédible dès la Licence 1',
            paragraphText:
              'Un profil LinkedIn bien construit agit comme un CV vivant et un portfolio consulté 24h/24 par les recruteurs, enseignants et entrepreneurs.\n• **Identité visuelle** : photo professionnelle souriante sur fond neutre, bannière sobre et titre clair indiquant votre filière et vos ambitions (ex. « Étudiant L1 Économie Numérique & Transformation Digitale »).\n• **Section Infos & Projets** : présenter ses compétences (bureautique, outils cloud, communication digitale), ses projets académiques et ses certifications.\n• **Réseau actif** : personnaliser ses demandes de connexion et commenter intelligemment les publications de professionnels du secteur.',
            keyRule:
              'Sur LinkedIn, la cohérence entre photo soignée, titre précis, projets concrets et interactions pertinentes bâtit une crédibilité durable.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quel titre de profil LinkedIn est le plus efficace pour un étudiant en première année d’économie numérique ?',
              options: [
                '« Salut tout le monde »',
                '« Étudiant L1 Économie Numérique & Transformation Digitale | Bureautique, Cloud & Communication Digitale »',
                '« Disponible pour tout et n’importe quoi »',
                'Laisser le champ titre complètement vide',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un titre précis incluant la filière et les domaines de compétences clés facilite l’apparition dans les recherches des recruteurs et clarifie immédiatement votre positionnement.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch3_p3',
        order: 3,
        title: 'Animation de communautés : les 3 piliers éditoriaux, e-réputation, netiquette et KPIs',
        summary:
          'Appliquer les 3 piliers éditoriaux (Informer, Distraire, Éduquer), protéger son e-réputation, respecter la netiquette et calculer les principaux indicateurs d’engagement (KPIs).',
        conceptExplanation:
          'Publier uniquement des annonces publicitaires (« Achetez nos produits ! ») fait fuir les internautes. Une animation de communauté performante repose sur le principe de **vendre sans montrer qu’on vend**, en équilibrant trois piliers éditoriaux : **Informer** (actualités, coulisses, nouveautés), **Éduquer** (tutoriels, conseils utiles, décryptages) et **Distraire** (humour maîtrisé, quiz, storytelling).\n\nCette présence s’accompagne d’une gestion rigoureuse de l’**e-réputation** (l’image perçue d’une personne ou d’une organisation sur Internet, forgée par ses publications, les avis clients et les moteurs de recherche) et du respect de la **netiquette** (code de courtoisie et de déontologie en ligne).\n\nEnfin, toute action digitale se pilote par des indicateurs clés de performance (**KPIs**) : la portée (*reach*), les impressions, le **taux d’engagement** (interactions rapportées à la portée ou aux abonnés) et le taux de clic (**CTR**).',
        keyRule:
          'Les 3 piliers éditoriaux : Informer + Éduquer + Distraire (vendre sans montrer qu’on vend). Toujours mesurer l’impact via le taux d’engagement et le CTR.',
        formulas: [
          {
            name: 'Taux d’engagement social',
            formula: '\\text{Taux d’engagement} = \\frac{\\text{Likes} + \\text{Commentaires} + \\text{Partages} + \\text{Enregistrements}}{\\text{Portée (ou Abonnés)}} \\times 100',
            note: 'Un commentaire ou un partage a une valeur relationnelle beaucoup plus forte qu’un simple like.',
          },
          {
            name: 'Taux de clic (CTR — Click-Through Rate)',
            formula: '\\text{CTR} = \\frac{\\text{Nombre de clics}}{\\text{Nombre d’impressions}} \\times 100',
            note: 'Mesure l’attractivité d’un lien, d’un bouton d’action ou d’une annonce sponsorisée.',
          },
        ],
        workedExample: {
          title: 'Calculer et interpréter le taux d’engagement d’une publication',
          statement:
            'Une publication pédagogique d’une fintech ivoirienne sur LinkedIn a atteint une portée de 2 500 personnes et généré 90 réactions, 20 commentaires et 15 partages. Quel est son taux d’engagement ?',
          methodSteps: [
            'Additionner toutes les interactions : 90 + 20 + 15 = 125 interactions.',
            'Diviser par la portée (2 500 personnes) : 125 / 2 500 = 0,05.',
            'Multiplier par 100 pour obtenir le pourcentage : 0,05 × 100 = 5 %.',
          ],
          conclusion:
            'Avec 5 % de taux d’engagement, la publication performe très bien (la moyenne organique se situant souvent entre 1 % et 3 %).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: '3 piliers éditoriaux',
            stepTheme: 'Contenu',
            stepTitle: 'Équilibrer les trois piliers : Informer, Éduquer et Distraire',
            paragraphText:
              'Sur les réseaux sociaux, les internautes ne viennent pas voir un catalogue de publicités agressives : ils cherchent de la valeur, de l’émotion ou de l’utilité.\n• **Informer** : partager l’actualité du secteur, les nouveautés de l’organisation, les événements et les coulisses de l’équipe.\n• **Éduquer** : publier des tutoriels, conseils pratiques, astuces ou études de cas qui résolvent un vrai problème de votre audience.\n• **Distraire** : créer de la complicité via des quiz, sondages, anecdotes ou formats créatifs adaptés à la marque.\n• **Règle d’or** : « vendre sans montrer qu’on vend » en apportant d’abord de la valeur (ex. règle 80 % valeur / 20 % promotion directe).',
            keyRule:
              'Les 3 piliers d’une ligne éditoriale réussie sont Informer, Éduquer et Distraire : ils créent la confiance qui mène naturellement à l’achat.',
            konanTip:
              'Avant de publier sur une page pro, demande-toi : ce post informe-t-il, éduque-t-il ou distrait-il réellement mon audience ?',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Quels sont les trois piliers éditoriaux recommandés pour animer efficacement une page professionnelle sur les réseaux sociaux ?',
              options: [
                'Vendre, harceler et supprimer les commentaires',
                'Informer, Éduquer et Distraire',
                'Copier, coller et spammer',
                'Bloquer, masquer et ignorer',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Alterner des contenus qui informent, éduquent et distraient permet d’engager durablement la communauté et d’intéresser naturellement les internautes à l’offre.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'E-réputation',
            stepTheme: 'Image en ligne',
            stepTitle: 'Maîtriser et surveiller son e-réputation personnelle et professionnelle',
            paragraphText:
              'Avant de vous convoquer en entretien ou de signer un contrat, un recruteur ou un client tape presque toujours votre nom ou celui de votre entreprise dans Google.\n• **E-réputation** : image numérique perçue d’une personne ou d’une organisation, construite par ses propres publications, les commentaires de tiers, les avis clients et les résultats des moteurs de recherche.\n• **Veille active** : se « googliser » régulièrement, activer des alertes Google sur son nom ou sa marque et répondre avec professionnalisme aux avis.\n• **Gestion d’un avis négatif** : ne jamais insulter ni supprimer abusivement ; répondre vite, calmement, avec empathie et proposer une solution concrète en message privé.',
            keyRule:
              'L’e-réputation se bâtit lentement par la cohérence de vos actions en ligne, mais peut être fragilisée en quelques minutes par un dérapage.',
            konanTip:
              'Teste aujourd’hui ton prénom + nom en navigation privée sur Google : ce que tu vois est exactement ce que verra ton futur recruteur !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Comment un Community Manager doit-il réagir face à un commentaire public négatif mais poli d’un client mécontent ?',
              options: [
                'L’insulter publiquement pour défendre l’honneur de l’entreprise',
                'Ignorer totalement le message pendant trois mois',
                'Répondre rapidement, courtoisement et proposer une prise en charge concrète pour résoudre le problème',
                'Supprimer immédiatement la page Facebook de l’entreprise',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une réponse rapide, courtoise et orientée solution montre au reste de la communauté que l’organisation est fiable et à l’écoute, transformant un incident en preuve de sérieux.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Netiquette',
            stepTheme: 'Savoir-être digital',
            stepTitle: 'Respecter les règles essentielles de la netiquette',
            paragraphText:
              'La **netiquette** (contraction de *Net* et *étiquette*) rassemble les règles de politesse, de respect et de bon usage dans les échanges numériques (e-mails, forums, groupes WhatsApp, réseaux sociaux).\n• **Clarté et politesse** : saluer, soigner l’orthographe, rester concis et utiliser un objet clair dans les e-mails.\n• **Éviter les MAJUSCULES intégrales** : sur Internet, ÉCRIRE TOUT EN MAJUSCULES équivaut à crier de manière agressive.\n• **Respect de la vie privée** : demander l’autorisation avant de publier la photo d’un tiers, ne pas relayer de rumeurs non vérifiées et éviter le spam dans les groupes.',
            keyRule:
              'La netiquette transpose la courtoisie professionnelle dans le monde numérique : politesse, concision, respect des personnes et vérification avant partage.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Dans les règles universelles de la netiquette, que signifie généralement un message rédigé entièrement en LETTRES MAJUSCULES ?',
              options: [
                'Une marque de grande politesse académique',
                'Le fait de crier ou d’exprimer une agressivité',
                'Un chiffrement sécurisé du message',
                'Une obligation sur tous les forums professionnels',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Selon la netiquette, écrire une phrase entière en majuscules est interprété comme un cri ou un ton agressif et doit être évité dans les échanges professionnels.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'KPIs : Portée vs Impressions',
            stepTheme: 'Analytics',
            stepTitle: 'Distinguer la portée (*reach*) et les impressions sur les réseaux sociaux',
            paragraphText:
              'Pour savoir si une campagne fonctionne, il faut lire correctement les deux indicateurs de visibilité de base.\n• **Portée (*Reach*)** : nombre de **personnes uniques** ayant vu votre publication au moins une fois.\n• **Impressions** : nombre **total d’affichages** de votre publication (si une même personne la voit 3 fois, cela compte pour 1 en portée et 3 en impressions).\n• **Règle mathématique** : les impressions sont donc toujours supérieures ou égales à la portée.',
            formula: {
              name: 'Fréquence moyenne d’exposition',
              formula: '\\text{Fréquence} = \\frac{\\text{Impressions}}{\\text{Portée}} \\ge 1',
              note: 'Exemple : 6 000 impressions pour 2 000 personnes touchées = une fréquence moyenne de 3 vues par personne.',
            },
            konanTip:
              'Retiens simplement : Portée = têtes uniques ; Impressions = nombre total de regards (y compris les répétitions).',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Une publication est affichée 3 fois sur l’écran d’Awa et 2 fois sur l’écran de Yao. Quelles sont exactement la portée et les impressions ?',
              options: [
                'Portée = 5 ; Impressions = 2',
                'Portée = 2 ; Impressions = 5',
                'Portée = 5 ; Impressions = 5',
                'Portée = 1 ; Impressions = 1',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La portée compte les personnes uniques (Awa et Yao = 2). Les impressions comptent le nombre total d’affichages (3 + 2 = 5).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Taux d’engagement & CTR',
            stepTheme: 'Performance',
            stepTitle: 'Calculer le taux d’engagement et le taux de clic (CTR)',
            paragraphText:
              'Avoir 10 000 abonnés qui ne réagissent jamais vaut beaucoup moins que 1 000 abonnés très actifs : c’est ce que mesurent le taux d’engagement et le CTR.\n• **Taux d’engagement** : rapport entre la somme des interactions (likes, commentaires, partages, enregistrements) et la portée (ou le nombre d’abonnés), exprimé en pourcentage.\n• **Taux de clic (CTR)** : pourcentage de personnes ayant cliqué sur votre lien par rapport au nombre total d’impressions.\n• **Exemple concret** : une annonce affichée 4 000 fois qui obtient 120 clics réalise un CTR de (120 / 4 000) × 100 = 3 %.',
            formula: {
              name: 'Taux d’engagement et CTR',
              formula: '\\text{TE} = \\frac{\\text{Interactions}}{\\text{Portée}} \\times 100 \\qquad ; \\qquad \\text{CTR} = \\frac{\\text{Clics}}{\\text{Impressions}} \\times 100',
              note: 'Les partages et enregistrements sont les signaux les plus valorisés par les algorithmes actuels.',
            },
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Une publication touche 2 000 personnes (portée) et génère 60 likes, 12 commentaires et 8 partages. Quel est son taux d’engagement ?',
              options: ['2 %', '4 %', '6 %', '8 %'],
              correctAnswerIndex: 1,
              explanation:
                'Total des interactions = 60 + 12 + 8 = 80. Taux d’engagement = (80 / 2 000) × 100 = 4 %.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Calendrier éditorial',
            stepTheme: 'Organisation',
            stepTitle: 'Planifier et programmer ses publications avec un calendrier éditorial',
            paragraphText:
              'Publier au hasard quand on a cinq minutes libres conduit vite à l’irrégularité et à la perte d’audience.\n• **Calendrier éditorial** : tableau de bord mensuel ou hebdomadaire précisant pour chaque post la date, l’heure, la plateforme, le pilier (Informer/Éduquer/Distraire), le format (carrousel, vidéo, Live) et l’appel à l’action (CTA).\n• **Publications programmées** : les outils natifs (Meta Business Suite, LinkedIn) permettent de préparer et programmer les publications aux heures de forte audience.\n• **Exemple concret** : programmer le dimanche soir les 3 posts LinkedIn de la semaine libère du temps quotidien pour répondre aux commentaires et prospecter.',
            keyRule:
              'La régularité l’emporte toujours sur les coups d’éclat ponctuels : le calendrier éditorial garantit constance et qualité.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Quel est l’intérêt principal d’utiliser un calendrier éditorial et la programmation de publications ?',
              options: [
                'Garantir une publication régulière, équilibrée entre les piliers éditoriaux et diffusée aux meilleurs créneaux horaires',
                'Empêcher définitivement les internautes de commenter les posts',
                'Supprimer le besoin de répondre aux messages privés',
                'Multiplier automatiquement par 100 le prix des produits',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le calendrier éditorial assure la régularité, l’équilibre des thématiques et la publication aux horaires optimaux tout en faisant gagner du temps à l’équipe.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : OUTILS COLLABORATIFS CLOUD ET SUITE GOOGLE WORKSPACE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_init_info_ch4',
    subjectId: 'lmd_init_info',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Outils collaboratifs Cloud et suite Google Workspace',
    summary:
      'Maîtriser la planification avec Google Agenda, le stockage et la conversion sur Google Drive (15 Go, Docs/Sheets/Slides), les 3 niveaux de permissions, la co-édition en temps réel, le chat intégré et Google Forms.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Initiation à l’Informatique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_init_info_ch4_p1',
        order: 1,
        title: 'Google Agenda : planification, récurrences, invitations, rappels et tâches',
        summary:
          'Organiser son emploi du temps et ses réunions dans Google Agenda : événements uniques et récurrents, invitations avec visioconférence, rappels automatiques, partage et gestion des tâches.',
        conceptExplanation:
          'Google Agenda est un service de gestion de calendrier dans le Cloud accessible depuis ordinateur, tablette ou smartphone dès la création d’un compte Google. Il permet de créer des événements uniques ou récurrents, de les sauvegarder automatiquement en ligne et de synchroniser instantanément tous vos appareils.\n\nSes fonctionnalités clés incluent la planification de réunions par envoi d’invitations (avec lien de visioconférence Google Meet intégré et suivi des réponses Oui/Non/Peut-être), la configuration de rappels automatiques (notifications mobiles ou e-mails), le partage d’agendas d’équipe (ou la publication sur un site web), l’importation de calendriers externes (`.ics`) et la gestion intégrée des tâches (Google Tasks).',
        keyRule:
          'Google Agenda centralise événements, récurrences, invitations de réunions, rappels multi-supports et tâches, le tout synchronisé en temps réel dans le Cloud.',
        workedExample: {
          title: 'Planifier une réunion hebdomadaire d’équipe projet en L1',
          statement:
            'Un chef de groupe de 5 étudiants doit organiser chaque mardi à 18h00 une séance de suivi de 45 minutes avec rappel automatique 30 minutes avant.',
          methodSteps: [
            'Ouvrir Google Agenda et cliquer sur « Créer > Événement » pour mardi 18h00–18h45.',
            'Activer la récurrence « Toutes les semaines le mardi » et ajouter les 4 adresses Gmail des camarades dans « Ajouter des invités ».',
            'Ajouter une notification de rappel 30 minutes avant (notification mobile + e-mail) puis cliquer sur « Enregistrer » et « Envoyer » les invitations.',
          ],
          conclusion:
            'Chaque membre reçoit l’invitation, peut confirmer sa présence et reçoit automatiquement son rappel chaque mardi.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Google Agenda',
            stepTheme: 'Cloud & Temps',
            stepTitle: 'Comprendre la synchronisation Cloud de Google Agenda',
            paragraphText:
              'Contrairement à un agenda papier qu’on oublie facilement à la maison ou qu’on ne peut pas partager, Google Agenda vit dans le Cloud.\n• **Accessibilité multi-appareils** : lié à votre compte Google, il se synchronise automatiquement entre votre PC, votre smartphone Android/iOS et votre tablette.\n• **Sauvegarde permanente** : même si votre téléphone est perdu ou réinitialisé, tous vos rendez-vous restent intacts en ligne.\n• **Usages variés** : création d’agendas distincts par couleur (ex. bleu pour les cours L1, vert pour le travail d’équipe, orange pour les examens).',
            keyRule:
              'Un calendrier Cloud garantit la sauvegarde continue et la synchronisation instantanée sur tous vos terminaux.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quel avantage fondamental offre Google Agenda par rapport à un agenda papier classique ?',
              options: [
                'Il fonctionne uniquement sans jamais créer de compte',
                'Il sauvegarde les événements dans le Cloud, les synchronise sur tous les appareils et permet le partage et les rappels automatiques',
                'Il imprime automatiquement chaque page tous les matins',
                'Il empêche d’inviter d’autres personnes à une réunion',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Hébergé dans le Cloud, Google Agenda synchronise en temps réel vos événements entre PC et mobile tout en offrant rappels automatiques et partage.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Événements & Récurrence',
            stepTheme: 'Planification',
            stepTitle: 'Créer des événements uniques et récurrents avec rappels',
            paragraphText:
              'Saisir manuellement chaque séance d’un cours qui a lieu tous les lundis pendant quatre mois serait fastidieux : la récurrence automatise tout.\n• **Événement unique** : date, heure de début/fin, lieu ou lien visio, et description de l’ordre du jour.\n• **Événement récurrent** : répétition automatique quotidienne, hebdomadaire, mensuelle ou personnalisée (ex. tous les mardis et jeudis jusqu’à fin juin).\n• **Rappels personnalisés** : alertes par notification mobile ou e-mail (ex. 1 jour avant pour préparer les slides, puis 15 minutes avant le démarrage).',
            konanTip:
              'Pour un examen important, configure deux notifications : une alerte 7 jours avant (pour lancer les révisions) et une alerte la veille au soir !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle fonctionnalité de Google Agenda évite de recréer manuellement chaque semaine une réunion fixée tous les vendredis à 10h ?',
              options: [
                'La suppression automatique',
                'La configuration d’un événement récurrent (répétition hebdomadaire)',
                'L’exportation au format MP3',
                'Le changement de mot de passe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La récurrence permet de planifier en une seule création un événement qui se répète automatiquement selon la fréquence choisie (chaque vendredi à 10h).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Invitations',
            stepTheme: 'Réunions',
            stepTitle: 'Planifier une réunion d’équipe avec invitations et suivi RSVP',
            paragraphText:
              'Organiser une réunion par dix messages WhatsApp dispersés crée souvent des oublis et des erreurs d’horaire : l’invitation agenda règle ce problème.\n• **Ajout d’invités** : saisir les adresses e-mail des participants directement dans l’événement.\n• **Confirmation RSVP** : chaque invité reçoit un e-mail avec les boutons *Oui / Non / Peut-être* et l’événement s’inscrit automatiquement dans son propre calendrier.\n• **Lien visio intégré** : un clic ajoute un lien Google Meet unique accessible par tous les participants à l’heure dite.',
            keyRule:
              'Envoyer une invitation agenda formalise l’horaire, centralise le lien visio et permet de suivre en un coup d’œil qui sera présent.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Lorsque vous ajoutez des collègues dans le champ « Invités » d’un événement Google Agenda, que se passe-t-il ?',
              options: [
                'Leurs fichiers Google Drive sont automatiquement effacés',
                'Ils reçoivent une invitation par e-mail pour confirmer leur présence (Oui/Non/Peut-être) et l’événement s’ajoute à leur agenda',
                'Ils deviennent obligatoirement propriétaires de votre compte Gmail',
                'L’événement devient automatiquement visible par toute la planète',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’invitation Google Agenda notifie chaque participant par e-mail, recueille sa confirmation RSVP et inscrit automatiquement la réunion dans son emploi du temps.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Partage & Publication',
            stepTheme: 'Équipe',
            stepTitle: 'Partager un agenda d’équipe ou l’intégrer sur un site web',
            paragraphText:
              'Dans une entreprise ou une association étudiante, connaître les disponibilités de ses collègues accélère la coordination.\n• **Partage ciblé** : autoriser certains collaborateurs à voir uniquement « Disponible / Occupé » (sans les détails confidentiels), voir tous les détails, ou modifier les événements.\n• **Agenda public / site web** : une organisation peut publier un agenda d’événements publics (conférences, formations, permanences) directement sur son site internet.\n• **Importation `.ics`** : possibilité d’importer un emploi du temps ou le calendrier officiel des jours fériés en un clic.',
            keyRule:
              'Le partage d’agenda est granulaire : vous choisissez entre masquer les détails (Disponible/Occupé), lecture complète ou droit de modification.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Vous voulez que vos collègues sachent quand vous êtes libre pour une réunion sans qu’ils puissent lire les titres de vos rendez-vous médicaux. Quel niveau de partage d’agenda choisir ?',
              options: [
                'Autoriser la modification et la gestion du partage',
                'Afficher uniquement les informations de disponibilité (masquer les détails)',
                'Publier l’agenda complet sur Facebook',
                'Donner son mot de passe Gmail à toute l’équipe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’option « Afficher uniquement les informations de disponibilité » indique les plages occupées et libres sans révéler les intitulés ni les notes privées.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Gestion des tâches',
            stepTheme: 'Productivité',
            stepTitle: 'Distinguer un événement daté d’une tâche à cocher (Google Tasks)',
            paragraphText:
              'Google Agenda intègre un outil de gestion des tâches (Tasks) qui complète idéalement le calendrier classique.\n• **Événement** : occupe un créneau horaire précis avec heure de début et de fin (ex. « Cours d’informatique 10h–12h »).\n• **Tâche** : action concrète à accomplir avant une échéance et que l’on coche une fois terminée (ex. « Envoyer le diaporama au chef de groupe »).\n• **Avantage** : si une tâche n’est pas cochée le jour prévu, elle reste visible en rappel les jours suivants jusqu’à réalisation.',
            konanTip:
              'Règle de productivité : mets tes rendez-vous et blocs de travail dans « Événements », et tes livrables à valider dans « Tâches ».',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Dans Google Agenda, quelle est la différence pratique entre un « Événement » et une « Tâche » ?',
              options: [
                'Une tâche bloque obligatoirement 8 heures par jour',
                'Un événement correspond à un créneau horaire précis (début/fin), tandis qu’une tâche est une action à cocher une fois accomplie',
                'Un événement ne peut jamais être modifié après création',
                'Une tâche sert uniquement à envoyer des SMS payants',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’événement réserve une plage horaire définie (ex. réunion 14h–15h), alors que la tâche représente un livrable à réaliser et à marquer comme terminé.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Fuseaux horaires',
            stepTheme: 'International',
            stepTitle: 'Gérer les fuseaux horaires dans les collaborations internationales',
            paragraphText:
              'Dans l’économie numérique, vous collaborerez fréquemment avec des partenaires à Abidjan (GMT/UTC+0), Paris (UTC+1/+2) ou Montréal (UTC−5/−4).\n• **Conversion automatique** : si vous créez une réunion à 15h00 heure d’Abidjan (GMT), un invité basé à Paris la verra automatiquement affichée à 16h00 (en hiver) ou 17h00 (en été) dans son agenda.\n• **Piège classique** : écrire simplement « RDV à 15h » dans un e-mail sans préciser le fuseau horaire provoque des retards d’une ou deux heures.\n• **Bon réflexe** : toujours envoyer une invitation Agenda et vérifier le fuseau horaire configuré dans les paramètres.',
            keyRule:
              'Les invitations Google Agenda convertissent automatiquement l’horaire dans le fuseau local de chaque participant.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Comment Google Agenda évite-t-il les confusions d’horaires lors d’une visioconférence entre Abidjan (UTC+0) et un partenaire basé dans un autre fuseau horaire ?',
              options: [
                'En imposant la même heure solaire partout dans le monde',
                'En convertissant automatiquement l’heure de l’invitation selon le fuseau horaire configuré sur l’appareil de chaque invité',
                'En décalant systématiquement toutes les réunions au dimanche',
                'En bloquant les invitations vers l’étranger',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Google Agenda stocke l’horaire de référence en temps universel et l’affiche automatiquement dans le fuseau horaire local de chaque participant.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch4_p2',
        order: 2,
        title: 'Google Drive (15 Go), conversion Office ↔ Docs/Sheets/Slides et 3 niveaux de permissions',
        summary:
          'Exploiter les 15 Go gratuits de Google Drive, convertir des fichiers Microsoft Office en formats Google collaboratifs et maîtriser les 3 niveaux de permissions (Lecture, Commentaire, Modification).',
        conceptExplanation:
          'Google Drive est un service de stockage et de partage de fichiers dans le Cloud offrant **15 Go gratuits** (extensibles par abonnement), accessible depuis tout ordinateur, tablette ou smartphone (Android et iOS). Il intègre une suite bureautique en ligne complète : **Google Docs** (traitement de texte), **Google Sheets** (tableur), **Google Slides** (présentations), **Google Drawings** (schémas) et **Google Forms** (formulaires).\n\nPour collaborer en temps réel sur un fichier Microsoft Office (`.docx`, `.xlsx`, `.pptx`), il est recommandé de l’importer dans Drive puis de le convertir au format Google (`Ouvrir avec > Google Docs` puis `Fichier > Enregistrer au format Google Docs`).\n\nLe partage de fichiers et dossiers repose sur **trois niveaux de permissions stricts** : **Lecture autorisée** (consulter sans modifier ni commenter), **Commentaire autorisé** (consulter et ajouter des commentaires/suggestions — disponible sur les fichiers mais **pas sur les dossiers**), et **Modification autorisée** (éditer directement et repartager).',
        keyRule:
          'Google Drive = 15 Go gratuits dans le Cloud + 3 niveaux de droits : Lecture < Commentaire (fichiers uniquement) < Modification.',
        workedExample: {
          title: 'Paramétrer les droits d’un mémoire partagé avec un encadrant et des camarades',
          statement:
            'Vous importez `Memoire_L1.docx` sur Google Drive. Vous souhaitez que vos 2 coéquipiers rédigent avec vous, que votre tuteur puisse annoter des remarques sans altérer le texte, et que le délégué de classe puisse uniquement lire le document.',
          methodSteps: [
            'Importer `Memoire_L1.docx` dans Drive, l’ouvrir avec Google Docs puis cliquer sur `Fichier > Enregistrer au format Google Docs`.',
            'Ouvrir la fenêtre « Partager » : attribuer le rôle **Modification autorisée** aux 2 coéquipiers.',
            'Attribuer **Commentaire autorisé** au tuteur et **Lecture autorisée** au délégué de classe, puis valider.',
          ],
          conclusion:
            'Chaque acteur dispose exactement du niveau de droit adapté à son rôle, sans risque d’effacement accidentel.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Google Drive 15 Go',
            stepTheme: 'Cloud Storage',
            stepTitle: 'Comprendre Google Drive et son écosystème bureautique intégré',
            paragraphText:
              'Google Drive (aussi appelé Google Disque au Québec) combine un disque dur virtuel dans le Cloud et une suite bureautique complète exécutée dans le navigateur.\n• **Capacité gratuite** : **15 Go** offerts par compte Google (partagés entre Drive, Gmail et Google Photos), extensibles via un forfait payant.\n• **Suite intégrée** : **Docs** (équivalent Word), **Sheets** (équivalent Excel), **Slides** (équivalent PowerPoint), **Drawings** (dessins) et **Forms** (questionnaires).\n• **Mobilité totale** : vos fichiers sont consultables et modifiables depuis n’importe quel PC, tablette ou smartphone connecté.',
            keyRule:
              'Un compte Google standard inclut 15 Go de stockage Cloud gratuit et l’accès complet à Docs, Sheets, Slides et Forms.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quel volume de stockage gratuit dans le Cloud offre un compte Google Drive standard et quels outils bureautiques y sont intégrés ?',
              options: [
                '500 Mo uniquement, sans aucun outil bureautique',
                '15 Go gratuits, avec la suite Docs, Sheets, Slides, Drawings et Forms',
                '10 To gratuits, uniquement sur ordinateur Windows',
                '1 Go réservé exclusivement aux vidéos MP4',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Google Drive offre 15 Go gratuits accessibles sur tous les appareils et intègre nativement Google Docs, Sheets, Slides, Drawings et Forms.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Conversion Office',
            stepTheme: 'Compatibilité',
            stepTitle: 'Importer et convertir un fichier Microsoft Office au format Google',
            paragraphText:
              'Si vous importez un fichier `.docx`, `.xlsx` ou `.pptx` sur Drive, vous pouvez le consulter, mais la conversion au format natif Google libère toute la puissance collaborative.\n• **Étape 1** : importer le fichier dans Drive puis faire un clic droit → `Ouvrir avec > Google Docs` (ou Sheets / Slides).\n• **Étape 2** : si le fichier s’ouvre en mode compatibilité Office, cliquer sur `Fichier > Enregistrer au format Google Docs` (ou Sheets / Slides).\n• **Export inverse** : à tout moment, `Fichier > Télécharger` permet de reconvertir le travail fini en `.docx`, `.xlsx`, `.pptx` ou `.pdf`.',
            konanTip:
              'Pense toujours à télécharger une version `.pdf` avant d’envoyer un devoir final ou un CV : le PDF fige la mise en page sur tous les ordinateurs !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle commande permet de convertir un fichier Word (`.docx`) ouvert en mode compatibilité Office en document natif Google Docs ?',
              options: [
                'Insertion > Saut de page',
                'Fichier > Enregistrer au format Google Docs',
                'Affichage > Plein écran',
                'Outils > Nombre de mots',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La commande `Fichier > Enregistrer au format Google Docs` crée une version native Google Docs permettant de profiter de toutes les fonctions de collaboration temps réel.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: '3 permissions',
            stepTheme: 'Sécurité partage',
            stepTitle: 'Maîtriser les 3 niveaux de permissions sur Google Drive',
            paragraphText:
              'Partager un fichier sans régler les permissions expose votre travail à des suppressions involontaires : Google Drive propose trois rôles hiérarchiques précis.\n• **Lecture autorisée (Lecteur)** : l’utilisateur peut consulter le fichier ou le dossier, mais ne peut ni le modifier ni y ajouter de commentaires.\n• **Commentaire autorisé (Commentateur)** : l’utilisateur peut lire, voir les commentaires existants et en ajouter de nouveaux (ou suggérer des modifications), sans altérer directement le texte. *Attention : ce rôle s’applique aux fichiers, pas aux dossiers.*\n• **Modification autorisée (Éditeur)** : l’utilisateur peut modifier directement le contenu du fichier ou du dossier et le partager à son tour.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Hiérarchie des 3 niveaux de permissions Google Drive',
              caption: 'Principe du moindre privilège : accorder uniquement le droit nécessaire',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'Niveau 3', title: 'Modification autorisée (Éditeur)', subtitle: 'Éditer le contenu + commenter + lire + repartager', color: 'orange' },
                  { badge: 'Niveau 2', title: 'Commentaire autorisé (Commentateur)', subtitle: 'Annoter et suggérer sans modifier le texte (fichiers uniquement)', color: 'blue' },
                  { badge: 'Niveau 1', title: 'Lecture autorisée (Lecteur)', subtitle: 'Consulter uniquement, aucune modification ni commentaire', color: 'green' },
                ],
              },
            },
            keyRule:
              'Applique toujours le principe du moindre privilège : Lecture pour diffuser, Commentaire pour faire relire, Modification pour co-rédiger.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle particularité importante concerne le niveau de permission « Commentaire autorisé » dans Google Drive ?',
              options: [
                'Il autorise la suppression définitive du compte du propriétaire',
                'Il permet d’ajouter des commentaires sans modifier le fichier, et ne s’applique pas aux dossiers',
                'Il donne exactement les mêmes droits que le propriétaire',
                'Il empêche même de lire le contenu du fichier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le droit « Commentaire autorisé » permet de consulter et d’annoter un fichier sans modifier son contenu direct ; en outre, ce niveau d’accès ne s’applique pas aux dossiers.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Partage par dossier',
            stepTheme: 'Organisation',
            stepTitle: 'Partager plusieurs fichiers d’un seul coup grâce aux dossiers partagés',
            paragraphText:
              'Lors d’un projet de groupe comprenant 15 fichiers (rapports, tableaux budgétaires, images, slides), partager chaque document un par un est lent et source d’oubli.\n• **Méthode optimale** : créer un dossier dédié (ex. `Projet_Digital_L1`), y placer tous les fichiers du projet, puis cliquer sur l’icône de partage du **dossier entier**.\n• **Héritage automatique** : tout nouveau fichier ajouté ultérieurement dans ce dossier hérite automatiquement des mêmes autorisations pour les membres de l’équipe.\n• **Notification** : dès la validation du partage, chaque destinataire reçoit un e-mail avec le lien d’accès direct.',
            konanTip:
              'Si un membre quitte le projet, il te suffit de retirer son accès au niveau du dossier parent pour révoquer d’un coup son accès à tous les fichiers.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la méthode la plus efficace pour partager simultanément 12 fichiers d’un même projet avec quatre coéquipiers sur Google Drive ?',
              options: [
                'Envoyer 12 e-mails séparés avec chacun une pièce jointe lourde',
                'Regrouper les 12 fichiers dans un dossier Drive et partager ce dossier unique avec les quatre adresses e-mail',
                'Imprimer les 12 fichiers et les photographier sur WhatsApp',
                'Copier les fichiers sur 4 clés USB différentes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Placer les fichiers dans un dossier Drive puis partager le dossier entier applique uniformément les permissions à tous les documents présents et futurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Mise en forme Docs',
            stepTheme: 'Rédaction',
            stepTitle: 'Appliquer styles, marges et mise en forme professionnelle dans Google Docs',
            paragraphText:
              'Google Docs offre les fonctions essentielles de mise en page pour produire des rapports propres sans logiciel payant.\n• **Mise en page** : réglage des marges (`Fichier > Configuration de la page`), de l’interligne, des polices cohérentes et des couleurs sobres.\n• **Styles de titres** : utiliser `Titre 1`, `Titre 2`, `Titre 3` plutôt que de simplement mettre en gras permet de générer automatiquement le plan latéral et la table des matières.\n• **Sauvegarde automatique** : chaque frappe est enregistrée instantanément dans le Cloud sans avoir à cliquer sur « Enregistrer ».',
            keyRule:
              'Utiliser les styles hiérarchiques (`Titre 1`, `Titre 2`) structure le document, génère un sommaire automatique et garantit une mise en page homogène.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Quel avantage majeur offre l’utilisation des styles « Titre 1 » et « Titre 2 » dans Google Docs par rapport à une mise en gras manuelle ?',
              options: [
                'Elle réduit automatiquement la taille du texte à 5 pixels',
                'Elle structure le plan du document et permet d’insérer et de mettre à jour une table des matières automatique',
                'Elle traduit le document en chinois',
                'Elle désactive la sauvegarde automatique dans le Cloud',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les styles hiérarchiques sont reconnus par Google Docs pour construire le volet de navigation (plan) et générer automatiquement une table des matières à jour.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Lien public',
            stepTheme: 'Confidentialité',
            stepTitle: 'Contrôler le partage par lien (« Tous les utilisateurs disposant du lien »)',
            paragraphText:
              'Dans la fenêtre de partage Drive, on peut soit inviter des adresses e-mail nominatives (accès restreint), soit ouvrir l’accès à « Tous les utilisateurs disposant du lien ».\n• **Accès restreint (recommandé par défaut)** : seules les personnes explicitement ajoutées par e-mail peuvent ouvrir le fichier.\n• **Accès par lien** : pratique pour diffuser une brochure publique en **Lecture seule**, mais très risqué en mode **Modification** (n’importe qui recevant le lien transféré pourrait effacer le contenu !).\n• **Historique des versions** : en cas d’erreur ou de suppression accidentelle, `Fichier > Historique des versions` permet de restaurer un état antérieur daté.',
            keyRule:
              'Ne jamais activer « Tous les utilisateurs disposant du lien » en mode Modification sur un document sensible ; privilégier toujours les invitations nominatives.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Un coéquipier efface accidentellement deux pages d’un document Google Docs partagé. Quelle fonctionnalité permet de récupérer immédiatement le texte perdu ?',
              options: [
                'Formater le disque dur de l’ordinateur',
                'Consulter `Fichier > Historique des versions` et restaurer la version antérieure',
                'Créer un nouveau compte Gmail',
                'Changer de navigateur web',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’historique des versions de Google Docs enregistre chronologiquement toutes les modifications et leur auteur, permettant une restauration en un clic.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_init_info_ch4_p3',
        order: 3,
        title: 'Co-édition en temps réel, chat intégré, Google Forms et workflow collaboratif',
        summary:
          'Travailler simultanément à plusieurs sur un même document, utiliser le chat intégré, concevoir des questionnaires avec Google Forms et orchestrer un workflow Cloud complet.',
        conceptExplanation:
          'La grande révolution du travail dans le Cloud réside dans la **co-édition en temps réel** : plusieurs personnes disposant du droit de modification sur Google Docs, Sheets, Slides, Forms ou Drawings peuvent éditer le même fichier **simultanément**, depuis PC comme depuis mobile. Chaque collaborateur est identifié en direct par un **curseur coloré portant son nom**.\n\nPour coordonner le travail sans multiplier les e-mails interminables, un **chat intégré** permet de discuter en direct avec toutes les personnes connectées au document (à condition d’être connecté à un compte Google). La co-édition temps réel requiert une connexion Internet active.\n\nEnfin, **Google Forms** complète la suite en permettant de créer en quelques minutes des enquêtes de satisfaction, formulaires d’inscription ou quiz auto-corrigés dont les réponses s’agrègent automatiquement en graphiques et dans une feuille **Google Sheets**.',
        keyRule:
          'Co-édition temps réel = curseurs colorés nominatifs + connexion Internet requise + chat intégré (compte Google requis). Google Forms connecte directement les réponses à Google Sheets.',
        workedExample: {
          title: 'Orchestrer une enquête terrain étudiante en 100 % Cloud',
          statement:
            'Une équipe de 4 étudiants ENTD L1 réalise une enquête sur les usages du Mobile Money auprès de 200 commerçants d’Abidjan et doit rendre un rapport et une présentation.',
          methodSteps: [
            'Créer le questionnaire sur Google Forms (questions à choix multiples et échelles) et diffuser le lien par QR Code ou WhatsApp.',
            'Connecter les réponses à une feuille Google Sheets pour calculer automatiquement moyennes et pourcentages.',
            'Co-éditer simultanément le rapport sur Google Docs et le diaporama sur Google Slides en échangeant via le chat intégré et les commentaires.',
          ],
          conclusion:
            'Un seul dossier Drive centralise collecte (Forms), analyse (Sheets), rédaction (Docs) et soutenance (Slides) sans aucune perte de version.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Co-édition temps réel',
            stepTheme: 'Travail d’équipe',
            stepTitle: 'Travailler simultanément à plusieurs grâce aux curseurs colorés',
            paragraphText:
              'Fini les fichiers envoyés par e-mail nommés `Rapport_final_v2_definitif_VRAIMENT_FINAL.docx` ! Dans Google Workspace, toute l’équipe travaille sur une source unique de vérité.\n• **Édition simultanée** : tous les utilisateurs disposant du droit *Modification* sur Docs, Sheets, Slides, Forms ou Drawings peuvent taper en même temps (sur PC ou mobile).\n• **Identification visuelle** : chaque modification apparaît instantanément à l’écran, accompagnée d’un **curseur de couleur distincte portant le nom de son auteur**.\n• **Condition technique** : le suivi en temps réel des modifications des autres collaborateurs nécessite une connexion Internet active.',
            keyRule:
              'En co-édition temps réel, chaque collaborateur est repéré par un curseur coloré nominatif ; une connexion Internet est indispensable pour voir les ajouts en direct.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Comment identifie-t-on visuellement l’auteur d’une modification en cours lors d’une séance de co-édition simultanée sur Google Docs ?',
              options: [
                'Par un signal sonore différent pour chaque lettre',
                'Par un curseur associé à une couleur spécifique et au nom de la personne qui saisit',
                'Il est impossible de savoir qui écrit dans le document',
                'En redémarrant le navigateur toutes les deux minutes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lors de la co-édition en temps réel, Google Docs affiche un curseur coloré accompagné du nom du collaborateur à l’endroit exact où il intervient.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Chat intégré',
            stepTheme: 'Coordination',
            stepTitle: 'Utiliser le chat intégré d’un document pour éviter les e-mails interminables',
            paragraphText:
              'Lorsque trois personnes rédigent ensemble le même document, s’écrire par e-mail pour se répartir les paragraphes casse le rythme.\n• **Lancer le chat** : cliquer sur l’icône de discussion en haut à droite du document (Docs, Sheets ou Slides) dès qu’au moins un autre collaborateur est connecté au fichier.\n• **Condition indispensable** : toutes les personnes connectées à un **compte Google** présentes sur le fichier participent au chat ; sans connexion à un compte Google, le chat est inaccessible.\n• **Différence avec les commentaires** : le chat est éphémère (disparaît à la fermeture de la session), tandis que les commentaires (`@nom`) restent attachés au texte jusqu’à résolution.',
            konanTip:
              'Utilise le **chat** pour les questions rapides en direct (« Je prends la partie 2 ») et les **commentaires avec @mention** pour les tâches durables à valider !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Vous ouvrez un document Google Docs partagé par lien, mais le bouton de chat intégré ne vous permet pas de participer à la discussion. Quelle en est la cause la plus fréquente ?',
              options: [
                'Le chat ne fonctionne que sur les téléviseurs connectés',
                'Vous n’êtes pas connecté à un compte Google (ou vous êtes le seul utilisateur actuellement présent sur le fichier)',
                'Le document contient plus de deux pages',
                'La police de caractères est Arial',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour participer au chat intégré d’un fichier Google Workspace, il faut être connecté à un compte Google et qu’au moins un autre collaborateur consulte le document simultanément.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Google Forms',
            stepTheme: 'Collecte données',
            stepTitle: 'Concevoir un questionnaire ou une enquête avec Google Forms',
            paragraphText:
              'Saisir manuellement 150 questionnaires papier dans un tableur prend des heures et génère des erreurs de recopie : Google Forms automatise toute la chaîne.\n• **Types de questions** : choix multiples (QCM), cases à cocher, listes déroulantes, réponses courtes/paragraphes, échelles linéaires (1 à 5) et dates.\n• **Options intelligentes** : rendre certains champs obligatoires, ajouter une logique conditionnelle (rediriger vers une section selon la réponse) ou activer le mode **Questionnaire (Quiz)** avec barème automatique.\n• **Diffusion facile** : partage par lien court, intégration sur site web, envoi par e-mail ou transformation en QR Code.',
            keyRule:
              'Google Forms structure la collecte de données en ligne et élimine les erreurs de ressaisie manuelle.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Dans Google Forms, quel avantage majeur offre la connexion directe du formulaire à une feuille Google Sheets ?',
              options: [
                'Elle imprime automatiquement chaque réponse en 10 exemplaires',
                'Chaque nouvelle réponse soumise s’enregistre instantanément dans une ligne du tableur pour analyse et calculs statistiques',
                'Elle empêche les répondants d’utiliser leur smartphone',
                'Elle supprime les questions dès que 5 personnes ont répondu',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lier un formulaire Google Forms à Google Sheets alimente automatiquement un tableau structuré en temps réel, prêt pour les graphiques et formules de calcul.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Workflow Cloud',
            stepTheme: 'Synthèse',
            stepTitle: 'Orchestrer un workflow collaboratif complet dans Google Workspace',
            paragraphText:
              'La véritable efficacité d’une équipe numérique naît de l’enchaînement fluide des outils Cloud au sein d’un processus clair.\n• **Étape 1 — Planifier** : fixer les jalons et réunions dans **Google Agenda**.\n• **Étape 2 — Collecter & Structurer** : recueillir les données via **Google Forms** et les analyser dans **Google Sheets**.\n• **Étape 3 — Co-produire** : rédiger le rapport sur **Google Docs** et bâtir les diapositives sur **Google Slides** avec les bonnes permissions Drive et le chat intégré.\n• **Étape 4 — Livrer & Archiver** : exporter les livrables finaux en PDF dans le dossier partagé.',
            visualSchema: {
              type: 'flowchart',
              title: 'Workflow collaboratif complet dans le Cloud',
              caption: 'Enchaînement des outils Google Workspace du cadrage jusqu’à la livraison finale',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Planifier (Google Agenda)', sublabel: 'Réunions récurrentes, invitations RSVP et tâches', kind: 'start', color: 'blue' },
                  { label: '2. Structurer & Partager (Drive)', sublabel: 'Dossier projet + conversion Office + rôles précis', kind: 'process', color: 'green' },
                  { label: '3. Collecter & Co-éditer (Forms / Docs / Sheets)', sublabel: 'Curseurs temps réel, @commentaires et chat intégré', kind: 'process', color: 'violet' },
                  { label: '4. Valider & Livrer (Slides & Export PDF)', sublabel: 'Historique des versions vérifié + archivage final', kind: 'end', color: 'orange' },
                ],
              },
            },
            keyRule:
              'Un workflow Cloud bien conçu élimine les doublons de fichiers, fluidifie la communication et sécurise l’avancement collectif.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Quel enchaînement d’outils Google Workspace est le plus logique pour planifier un projet, collecter des avis clients, analyser les chiffres et présenter les résultats ?',
              options: [
                'Agenda → Forms → Sheets → Slides',
                'Drawings uniquement pour toutes les étapes',
                'Uniquement des SMS sans aucun stockage',
                'Supprimer Drive et envoyer des photos papier',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Agenda cadre les échéances, Forms collecte les avis clients, Sheets analyse les statistiques et Slides sert à présenter visuellement les conclusions.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Mode Suggestion',
            stepTheme: 'Relecture',
            stepTitle: 'Utiliser le mode « Suggestion » et les mentions `@` pour réviser un rapport',
            paragraphText:
              'Relire le travail d’un collègue en écrasant directement ses phrases crée souvent des malentendus : le mode Suggestion permet une révision respectueuse et traçable.\n• **Mode Suggestion** : chaque ajout apparaît en couleur et chaque suppression est barrée, en attente d’approbation (✓ Accepter ou ✗ Refuser) par l’auteur principal.\n• **Mentions `@nom` dans les commentaires** : écrire `@k.kouassi Merci de vérifier ce chiffre` envoie automatiquement une notification e-mail et assigne la tâche à la personne ciblée.\n• **Exemple concret** : un responsable marketing révise un communiqué en mode Suggestion afin que le rédacteur comprenne chaque correction proposée.',
            konanTip:
              'Avant de relire le texte d’un camarade, passe toujours du mode « Édition » au mode « Suggestion » en haut à droite de Google Docs !',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Quel est l’intérêt du mode « Suggestion » dans Google Docs lors d’un travail de relecture en équipe ?',
              options: [
                'Il efface définitivement le document dès la première faute',
                'Il propose des corrections visibles et traçables que l’auteur peut accepter ou refuser en un clic sans écraser immédiatement le texte original',
                'Il empêche d’enregistrer le document dans Drive',
                'Il transforme automatiquement le texte en tableau Excel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le mode Suggestion affiche les modifications proposées comme des annotations réversibles, facilitant une relecture collaborative transparente et contrôlée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Accès hors-ligne',
            stepTheme: 'Continuité',
            stepTitle: 'Anticiper les coupures Internet grâce au mode hors-ligne de Drive',
            paragraphText:
              'Le principal point faible du tout-Cloud survient lors d’une coupure Internet ou en déplacement sans réseau : il faut donc préparer la continuité.\n• **Activation préalable** : dans les paramètres de Google Drive (sur navigateur Chrome/Edge ou sur l’application mobile), activer l’option **Hors connexion** pour les fichiers prioritaires.\n• **Synchronisation différée** : vous pouvez continuer à consulter et rédiger sans réseau ; dès que la connexion revient, Google synchronise automatiquement vos ajouts dans le Cloud.\n• **Limite à retenir** : en mode hors-ligne, la co-édition temps réel et le chat avec les collègues sont suspendus jusqu’au retour de la connexion.',
            keyRule:
              'Activer l’accès hors connexion sur les fichiers critiques garantit de pouvoir travailler même sans Internet, avec synchronisation automatique au retour du réseau.',
            exercise: {
              id: 'lmd_entd_l1_init_info_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Que se passe-t-il si vous modifiez un fichier Google Docs configuré pour l’accès hors connexion pendant une coupure Internet ?',
              options: [
                'Tout votre travail est immédiatement perdu',
                'Vos modifications sont enregistrées localement puis synchronisées automatiquement dans le Cloud dès le retour de la connexion Internet',
                'L’ordinateur s’éteint par sécurité',
                'Les modifications s’affichent quand même instantanément chez les autres collègues sans réseau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le mode hors connexion sauvegarde localement vos modifications et les synchronise automatiquement sur Google Drive dès que l’accès Internet est rétabli.',
            },
          },
        ],
      }),
    ],
  },
];

