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

export const INTRO_DROIT_NUM_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : NOTION, SPÉCIFICITÉS DE L'ESPACE NUMÉRIQUE & SOURCES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch1',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Notion, spécificités de l’espace numérique et sources du droit du numérique',
    summary:
      'Définition et caractère transversal du droit du numérique, classification des quatre sources (lois et règlements, normes techniques, jurisprudence, conventions internationales), quatre spécificités de l’espace numérique (dématérialisation, instantanéité, territorialité incertaine, hybridité) et panorama des lois ivoiriennes fondatrices.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch1_p1',
        order: 1,
        title: 'Définition, transversalité et les quatre sources du droit du numérique',
        summary:
          'Comprendre la nature transversale du droit du numérique et savoir classer avec précision toute règle dans ses quatre grandes sources : lois et règlements, normes techniques, jurisprudence et conventions internationales.',
        conceptExplanation:
          'Le droit du numérique désigne l’ensemble des règles juridiques encadrant les activités, les échanges et les comportements dans l’espace numérique. Il ne s’agit pas d’un droit isolé ni coupé du reste du système juridique : c’est un DROIT TRANSVERSAL qui adapte les règles classiques (droit civil, droit des contrats, droit pénal, droit commercial, propriété intellectuelle) à un environnement technologique en mutation rapide.\n\nSes grands domaines d’intervention sont : la protection des données personnelles, la cybersécurité et la lutte contre la cybercriminalité, la propriété intellectuelle numérique, le commerce électronique et la responsabilité des plateformes.\n\nOn distingue quatre (4) grandes sources complémentaires du droit du numérique :\n1) Les lois et règlements nationaux : textes adoptés par le Parlement ou le pouvoir exécutif (ex. Loi ivoirienne n° 2013-450 sur les données personnelles, Loi n° 2013-451 sur la cybercriminalité, Loi n° 2013-546 sur les transactions électroniques).\n2) Les normes techniques : standards élaborés par des organismes techniques qui structurent concrètement la sécurité et l’interopérabilité (ex. normes ISO, protocole de chiffrement HTTPS).\n3) La jurisprudence : ensemble des décisions rendues par les cours et tribunaux qui interprètent et précisent les règles face aux litiges concrets (ex. décision de justice condamnant un réseau social pour non-retrait d’un contenu illicite).\n4) Les conventions internationales et normes régionales : traités permettant de coordonner les États face à des flux transfrontaliers (ex. Convention de Budapest de 2001 sur la cybercriminalité, Actes additionnels CEDEAO, cadre de référence du RGPD européen).',
        formulas: [
          {
            name: 'Les 4 sources du droit du numérique',
            formula: '1. Lois & règlements  ·  2. Normes techniques (ISO, HTTPS)  ·  3. Jurisprudence  ·  4. Conventions internationales (Budapest, CEDEAO, RGPD)',
            note: 'Droit transversal combinant normes juridiques contraignantes et standards techniques opérationnels.',
          },
        ],
        keyRule:
          'Le droit du numérique est un droit transversal (jamais un droit isolé). Retiens l’association exacte : Loi 2013 = Loi/règlement ; HTTPS/ISO = Norme technique ; Décision de justice = Jurisprudence ; Convention de Budapest = Convention internationale.',
        workedExample: {
          title: 'Qualifier un litige numérique et classer les quatre sources',
          statement:
            'Cas A : Un étudiant achète un logiciel en ligne ; son compte est débité mais le vendeur refuse d’envoyer la clé d’activation. Cela relève-t-il du droit du numérique ?\nCas B : Classer par source : (1) Loi ivoirienne de 2013 sur les données personnelles, (2) Protocole HTTPS, (3) Convention de Budapest (2001), (4) Décision de justice condamnant une plateforme pour non-retrait d’un contenu illicite.',
          methodSteps: [
            '1. Cas A : Oui, cette situation relève pleinement du droit du numérique car il s’agit de l’inexécution d’un contrat électronique conclu et devant être exécuté dans l’espace numérique.',
            '2. Cas B (1 & 2) : Loi ivoirienne de 2013 → Source légale et réglementaire ; Protocole HTTPS → Norme technique.',
            '3. Cas B (3 & 4) : Convention de Budapest (2001) → Convention internationale ; Décision de justice condamnant une plateforme → Jurisprudence.',
          ],
          conclusion:
            'La maîtrise du droit du numérique suppose d’articuler simultanément textes nationaux, traités internationaux, décisions des juges et standards techniques.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Objet du droit du numérique',
            stepTitle: 'Définir le droit du numérique et qualifier un litige en ligne',
            paragraphText:
              'L’essor d’Internet, du Mobile Money et des applications mobiles a déplacé une part majeure de la vie économique et sociale dans l’espace numérique.\n• **Définition** : le droit du numérique est l’ensemble des règles juridiques qui encadrent les activités, les échanges et les comportements dans l’espace numérique.\n• **Cinq grands domaines** : données personnelles, cybersécurité/cybercriminalité, propriété intellectuelle numérique, commerce électronique et responsabilité des plateformes.\n• **Exemple pratique** : un étudiant qui paie en ligne un logiciel sans recevoir sa clé d’activation fait face à une inexécution de contrat électronique relevant du droit du numérique.',
            keyRule:
              'Toute relation juridique conclue, exécutée ou troublée au moyen d’outils informatiques et de réseaux (achat en ligne, atteinte aux données, contenu illicite) entre dans le champ du droit du numérique.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Un étudiant paie un logiciel en ligne mais le vendeur refuse de lui transmettre la clé d’activation. Pourquoi cette situation relève-t-elle du droit du numérique ?',
              options: [
                'Parce que tout litige impliquant un étudiant relève automatiquement du droit pénal',
                'Parce qu’il s’agit d’un contrat électronique conclu et inexécuté dans l’espace numérique',
                'Parce que les logiciels ne sont soumis à aucune règle contractuelle',
                'Uniquement si le prix dépasse 5 millions FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’achat en ligne d’une licence logicielle est un contrat électronique dont l’inexécution (non-livraison de la clé) relève directement du droit du numérique et du commerce électronique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Transversalité',
            stepTheme: 'Un droit transversal, non isolé',
            stepTitle: 'Comprendre le caractère transversal du droit du numérique',
            paragraphText:
              'Contrairement à une idée reçue, Internet n’est pas une zone de non-droit ni un univers régi par une discipline entièrement coupée du reste du droit.\n• **Nature transversale** : le droit du numérique traverse et adapte les branches classiques — droit civil (vie privée, contrats), droit pénal (infractions informatiques), droit commercial (e-commerce) et propriété intellectuelle (logiciels).\n• **Objectif** : sécuriser l’innovation tout en protégeant les droits fondamentaux des citoyens dans un environnement technologique en mutation permanente.\n• **Exemple pratique** : une arnaque sur une boutique en ligne mobilise à la fois le droit des contrats (remboursement), le droit de la consommation et le droit pénal (escroquerie).',
            keyRule:
              'Le droit du numérique n’est pas un droit isolé : c’est un droit transversal qui adapte les règles classiques aux réalités technologiques.',
            konanTip:
              'En dissertation ou en QCM, rejette toujours l’affirmation selon laquelle « le droit du numérique remplace totalement le droit civil et le droit pénal » : il les complète et les adapte.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle affirmation caractérise le plus exactement la nature juridique du droit du numérique ?',
              options: [
                'C’est un droit totalement isolé qui ignore le droit civil et le droit pénal',
                'C’est un droit transversal qui adapte et complète les règles juridiques classiques face aux mutations technologiques',
                'C’est un simple manuel technique réservé aux ingénieurs réseau',
                'C’est un droit non obligatoire fondé uniquement sur la politesse en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le droit du numérique est transversal : il combine les principes du droit civil, pénal, commercial et administratif avec des lois spéciales adaptées aux TIC.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Sources juridiques',
            stepTheme: 'Les 4 sources du droit numérique',
            stepTitle: 'Articuler les 4 sources : lois, normes techniques, jurisprudence et conventions',
            paragraphText:
              'Parce que la technologie évolue plus vite que les parlements, le droit du numérique s’appuie sur quatre sources complémentaires qui se renforcent mutuellement.\n• **Lois et règlements nationaux** : textes votés par l’État (ex. lois ivoiriennes de 2013 sur les données, la cybercriminalité et les transactions électroniques).\n• **Normes techniques** : standards internationaux de sécurité et d’interopérabilité (ex. ISO 27001, protocole HTTPS).\n• **Jurisprudence** : décisions des juges tranchant des litiges numériques concrets.\n• **Conventions internationales** : traités coordonnant les États (ex. Convention de Budapest de 2001, textes régionaux CEDEAO et référence RGPD).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Les 4 sources complémentaires du droit du numérique',
              caption: 'De la coopération internationale jusqu’aux standards techniques qui sécurisent Internet au quotidien.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Source 4',
                    title: 'Conventions internationales & régionales',
                    subtitle: 'Convention de Budapest (2001) · Actes CEDEAO · Cadre RGPD',
                    color: 'violet',
                  },
                  {
                    badge: 'Source 1',
                    title: 'Lois et règlements nationaux',
                    subtitle: 'Lois ivoiriennes 2013-450, 2013-451, 2013-546 · Décrets ARTCI',
                    color: 'blue',
                  },
                  {
                    badge: 'Source 3',
                    title: 'Jurisprudence (Cours et tribunaux)',
                    subtitle: 'Interprétation vivante des textes face aux litiges plateformes/usagers',
                    color: 'orange',
                  },
                  {
                    badge: 'Source 2',
                    title: 'Normes et standards techniques',
                    subtitle: 'Protocole HTTPS/TLS · Normes ISO sécurité · Standards W3C/IETF',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'Quatre sources du droit numérique : (1) Lois et règlements, (2) Normes techniques, (3) Jurisprudence, (4) Conventions internationales.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'À quelle source du droit du numérique appartient le protocole de chiffrement HTTPS ou une norme ISO de sécurité informatique ?',
              options: [
                'La jurisprudence',
                'Les normes techniques',
                'Les lois nationales votées par le Parlement',
                'Les coutumes familiales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le protocole HTTPS et les standards ISO sont des normes techniques qui concrétisent les exigences juridiques de sécurité et de confidentialité.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Jurisprudence',
            stepTheme: 'Rôle créateur du juge',
            stepTitle: 'Comprendre le rôle de la jurisprudence dans les litiges numériques',
            paragraphText:
              'Les lois sont rédigées en termes généraux et ne peuvent pas prévoir chaque nouvelle application ou chaque réseau social qui apparaîtra demain.\n• **Définition de la jurisprudence** : ensemble des décisions rendues par les tribunaux et cours de justice lorsqu’ils appliquent et interprètent la loi à des cas concrets.\n• **Utilité dans le numérique** : le juge précise la frontière entre hébergeur et éditeur, évalue le délai raisonnable de retrait d’un contenu haineux ou fixe l’indemnisation d’une atteinte à la vie privée en ligne.\n• **Exemple pratique** : une décision de justice condamnant un réseau social pour avoir tardé à retirer un contenu illicite constitue une source jurisprudentielle de référence.',
            keyRule:
              'La jurisprudence adapte en permanence les textes généraux aux cas concrets posés par les plateformes et les nouvelles technologies.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Comment classe-t-on une décision de justice condamnant une grande plateforme sociale pour non-retrait d’un contenu manifestement illicite ?',
              options: [
                'Comme une norme technique ISO',
                'Comme une source jurisprudentielle (jurisprudence)',
                'Comme une convention internationale multilatérale',
                'Comme un décret ministériel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toute décision rendue par un tribunal ou une cour interprétant le droit dans un litige concret relève de la jurisprudence.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Normes internationales',
            stepTheme: 'Budapest & RGPD',
            stepTitle: 'Identifier le rôle des conventions internationales (Budapest 2001)',
            paragraphText:
              'Parce qu’une cyberattaque ou un transfert de données traverse plusieurs pays en une fraction de seconde, aucune loi purement nationale ne suffit à elle seule.\n• **Convention de Budapest (2001)** : premier traité international sur la cybercriminalité, qui harmonise les infractions informatiques et organise la coopération policière et judiciaire entre États.\n• **Standards internationaux influents** : le RGPD européen (2016/2018) et les Actes additionnels de la CEDEAO (2010–2011) servent de modèles mondiaux et régionaux pour la protection des données et l’e-commerce.\n• **Exemple pratique** : pour identifier un escroc opérant depuis un autre continent, les autorités s’appuient sur la coopération issue des conventions internationales.',
            keyRule:
              'Convention de Budapest (2001) = traité international de référence contre la cybercriminalité ; CEDEAO / RGPD = cadres d’harmonisation régionale et internationale.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle source du droit du numérique est illustrée par la Convention de Budapest de 2001 sur la cybercriminalité ?',
              options: [
                'Une convention internationale',
                'Une décision de justice locale',
                'Un contrat de vente entre particuliers',
                'Un protocole matériel de câblage',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Convention de Budapest (2001) est un traité international destiné à harmoniser la répression de la cybercriminalité et la coopération entre États.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Normes techniques',
            stepTheme: 'Technique au service du droit',
            stepTitle: 'Comprendre pourquoi la norme technique complète la norme juridique',
            paragraphText:
              'La loi impose des objectifs (sécurité, confidentialité, intégrité), mais ce sont les normes techniques qui indiquent concrètement aux ingénieurs comment les atteindre.\n• **Complémentarité** : la Loi n° 2013-450 oblige à sécuriser les données personnelles ; le protocole HTTPS/TLS et les normes ISO 27001 traduisent cette obligation en chiffrement et contrôles techniques vérifiables.\n• **Conséquence juridique** : un site e-commerce qui collecte des coordonnées bancaires en HTTP non chiffré viole non seulement une bonne pratique technique, mais aussi son obligation légale de sécurité.\n• **Exemple pratique** : en cas de fuite de données, l’ARTCI vérifie si l’entreprise appliquait les standards techniques reconnus (chiffrement, authentification forte, sauvegardes).',
            keyRule:
              'En droit du numérique, ne pas respecter une norme technique élémentaire de sécurité (ex. HTTPS) peut être qualifié de faute juridique par le juge ou l’ARTCI.',
            konanTip:
              'Retiens la formule : la loi fixe le « quoi » (protéger les données), la norme technique fournit le « comment » (chiffrer, authentifier, tracer).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quel lien relie les normes techniques (comme HTTPS ou ISO) aux règles juridiques dans le droit du numérique ?',
              options: [
                'Les normes techniques annulent les lois votées par le Parlement',
                'Les normes techniques concrétisent les obligations légales de sécurité, de confidentialité et d’interopérabilité dans les systèmes informatiques',
                'Les normes techniques ne concernent jamais les entreprises',
                'Les normes techniques servent uniquement à fixer les prix des téléphones',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les normes techniques opérationnalisent les exigences juridiques : leur non-respect peut caractériser un manquement à l’obligation légale de sécurité.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch1_p2',
        order: 2,
        title: 'Les quatre spécificités de l’espace numérique et l’articulation virtuel / réel / hybride',
        summary:
          'Maîtriser les 4 traits caractéristiques de l’espace numérique (dématérialisation, instantanéité, territorialité incertaine, hybridité) et analyser l’impact concret des actes virtuels sur le monde réel.',
        conceptExplanation:
          'Si le droit classique doit s’adapter au numérique, c’est parce que l’espace numérique présente quatre (4) spécificités majeures qui bouleversent les repères traditionnels du droit (le papier, le délai, la frontière et la séparation physique/immatériel) :\n\n1) La dématérialisation : remplacement des supports matériels papier par des fichiers et flux numériques (ex. bulletin de salaire électronique, facture dématérialisée, contrat en ligne). Défi juridique : prouver l’identité et l’intégrité sans papier.\n2) L’instantanéité : transmission quasi immédiate de l’information, des paiements et des contenus à l’échelle mondiale (ex. message WhatsApp, virement Mobile Money, publication virale). Défi juridique : un préjudice (diffamation, fuite de données) se propage en quelques secondes.\n3) La territorialité incertaine : les réseaux ignorent les frontières nationales (ex. conflit entre un site marchand ivoirien, un acheteur au Sénégal et un hébergeur situé en Europe ou en Amérique). Défi juridique : quelle loi appliquer et quel juge est compétent ?\n4) L’hybridité : imbrication constante entre actions numériques et effets dans le monde physique (ex. achat sur une application livré physiquement à domicile, véhicule commandé via smartphone).\n\nEn conséquence, les actes posés dans l’espace virtuel produisent bel et bien des conséquences juridiques dans le monde réel (atteinte à la réputation, préjudice financier par cyberfraude, responsabilité contractuelle).',
        formulas: [
          {
            name: 'Les 4 spécificités de l’espace numérique',
            formula: 'Dématérialisation (sans papier)  ·  Instantanéité (temps réel)  ·  Territorialité incertaine (sans frontière)  ·  Hybridité (virtuel + physique)',
            note: 'Chaque spécificité crée un défi juridique précis (preuve, urgence, loi applicable, responsabilité).',
          },
        ],
        keyRule:
          'Virtuel ≠ sans conséquences : l’espace numérique est majoritairement HYBRIDE — une insulte, une fraude ou une commande en ligne produit des effets juridiques réels et sanctionnés.',
        workedExample: {
          title: 'Associer chaque spécificité numérique à un exemple concret ivoirien',
          statement:
            'Associer précisément chacune des 4 situations suivantes à la spécificité correspondante : (A) Réception d’un bulletin de salaire numérique ; (B) Envoi d’un message WhatsApp lu à l’autre bout du pays en une seconde ; (C) Litige entre un site ivoirien et un hébergeur étranger ; (D) Commande d’un repas en ligne livré physiquement à Cocody.',
          methodSteps: [
            '1. Situation (A) : Bulletin de salaire numérique → Dématérialisation (remplacement du support papier).',
            '2. Situation (B) : Message WhatsApp transmis immédiatement → Instantanéité.',
            '3. Situation (C) : Site ivoirien vs hébergeur étranger → Territorialité incertaine (conflit de lois/juridictions).',
            '4. Situation (D) : Commande en ligne + livraison physique → Hybridité (articulation virtuel/réel).',
          ],
          conclusion:
            'Identifier la spécificité en jeu permet immédiatement d’anticiper le problème juridique (preuve, urgence, compétence territoriale ou exécution matérielle).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Dématérialisation',
            stepTheme: 'De l’écrit papier au flux numérique',
            stepTitle: 'Comprendre la dématérialisation et son enjeu de preuve',
            paragraphText:
              'La première transformation visible du numérique est la disparition progressive du support papier dans les entreprises et les administrations.\n• **Définition** : la dématérialisation consiste à remplacer des documents ou supports physiques (factures, contrats, bulletins de salaire, titres de transport) par des fichiers numériques.\n• **Enjeu juridique** : sans signature manuscrite ni encre sur papier, le droit doit organiser l’équivalence probante (Loi n° 2013-546) pour garantir que le document numérique n’a pas été falsifié.\n• **Exemple pratique** : un employeur qui transmet des bulletins de salaire dématérialisés doit garantir leur intégrité et leur accès durable pour le salarié.',
            keyRule:
              'Dématérialisation = passage du papier au numérique ; elle exige des garanties juridiques d’identification et d’intégrité pour conserver sa valeur de preuve.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Lequel de ces exemples illustre le mieux la spécificité de « dématérialisation » dans l’espace numérique ?',
              options: [
                'Un bulletin de salaire ou une facture transmis sous forme de fichier électronique plutôt que sur papier',
                'Un litige opposant deux États frontaliers sur une rivière',
                'La livraison d’un colis par camion',
                'Une conversation orale dans un bureau',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La dématérialisation correspond à la substitution d’un support numérique au support matériel papier.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Instantanéité',
            stepTheme: 'Vitesse et viralité',
            stepTitle: 'Mesurer les effets juridiques de l’instantanéité numérique',
            paragraphText:
              'Dans le monde physique, imprimer et distribuer un journal diffamatoire prenait des heures ; dans l’espace numérique, une publication atteint des milliers de personnes en quelques secondes.\n• **Définition** : l’instantanéité désigne la transmission et la diffusion quasi immédiates des messages, transactions et contenus (ex. WhatsApp, réseaux sociaux, virements mobiles).\n• **Enjeu juridique** : les dommages (diffamation, rumeur, fuite de données, escroquerie) deviennent viraux avant même l’intervention lente d’un procès classique, d’où le besoin de procédures d’urgence (retrait prompt, blocage, référé).\n• **Exemple pratique** : une fausse alerte financière diffusée en quelques secondes sur les réseaux peut provoquer un préjudice immédiat à une banque.',
            keyRule:
              'L’instantanéité impose au droit des mécanismes réactifs : retrait prompt de contenus illicites, opposition bancaire immédiate et conservation d’urgence des preuves.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quel défi juridique majeur découle directement de l’instantanéité des échanges numériques (messages WhatsApp, publications virales, paiements en temps réel) ?',
              options: [
                'L’impossibilité totale de conclure un contrat',
                'La propagation fulgurante des préjudices (diffamation, fuite, fraude) nécessitant des procédures rapides de blocage et de retrait',
                'La disparition des droits d’auteur',
                'L’obligation d’attendre 30 jours avant d’envoyer un message',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La viralité instantanée amplifie immédiatement les dommages, imposant des outils juridiques et techniques réactifs (retrait prompt, référé, conservation urgente de preuves).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Territorialité incertaine',
            stepTheme: 'Conflit de lois et de juges',
            stepTitle: 'Analyser le défi de la territorialité incertaine sur Internet',
            paragraphText:
              'Traditionnellement, chaque État applique sa loi sur son territoire géographique délimité par des frontières. Internet bouscule directement ce principe.\n• **Définition** : la territorialité incertaine résulte du fait qu’une même opération numérique met en relation des acteurs et des serveurs situés dans plusieurs pays différents.\n• **Enjeu juridique** : déterminer la loi applicable et le tribunal compétent (conflit de lois et de juridictions), puis faire exécuter une décision à l’étranger.\n• **Exemple pratique** : un site e-commerce ivoirien hébergé sur un serveur aux États-Unis qui subit un litige avec un prestataire européen illustre typiquement la territorialité incertaine.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Les 4 spécificités de l’espace numérique et leurs réponses juridiques',
              caption: 'Comment le droit s’adapte à chaque rupture introduite par le numérique.',
              matrix2x2: {
                topAxis: ['Dimension Support & Temps', 'Dimension Espace & Monde réel'],
                leftAxis: ['Caractéristique technique', 'Défi & Réponse juridique'],
                topLeft: {
                  title: '1. Dématérialisation & 2. Instantanéité',
                  items: [
                    'Disparition du papier (bulletin, contrat)',
                    'Échanges en temps réel (WhatsApp, paiement)',
                    'Viralité immédiate des contenus',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: '3. Territorialité incertaine & 4. Hybridité',
                  items: [
                    'Serveurs et acteurs dans plusieurs pays',
                    'Achat en ligne livré physiquement',
                    'Effets réels d’actes virtuels',
                  ],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'Réponses Preuve & Urgence',
                  items: [
                    'Équivalence écrit électronique (Loi 2013-546)',
                    'Signature qualifiée & horodatage',
                    'Retrait prompt & blocage d’urgence',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Réponses Coopération & Protection',
                  items: [
                    'Harmonisation CEDEAO / Budapest',
                    'Protection du consommateur livré',
                    'Responsabilité civile et pénale réelle',
                  ],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'Territorialité incertaine = décalage entre un réseau mondial sans frontières et des souverainetés nationales ; réponse = traités internationaux (Budapest, CEDEAO) et critères de rattachement (lieu de la victime/cible).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle situation illustre précisément la « territorialité incertaine » propre à l’espace numérique ?',
              options: [
                'L’achat de pain dans une boulangerie de quartier payé en espèces',
                'Un litige opposant un éditeur de site basé en Côte d’Ivoire à un hébergeur situé dans un autre pays pour un contenu consulté depuis un troisième État',
                'La signature manuscrite d’un bail devant notaire local',
                'L’impression d’un rapport sur une imprimante de bureau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’éclatement géographique entre éditeur, hébergeur et public dans plusieurs pays crée une incertitude sur la loi applicable et la juridiction compétente.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Hybridité',
            stepTheme: 'Connexion virtuel / physique',
            stepTitle: 'Distinguer espace virtuel, espace réel et espace hybride',
            paragraphText:
              'Opposer de manière simpliste « le virtuel » et « le réel » est aujourd’hui dépassé : la majorité de nos activités numériques sont hybrides.\n• **Espace virtuel** : environnement immatériel dépourvu de territoire physique propre (ex. univers interne d’un jeu vidéo).\n• **Espace réel** : monde physique et juridique où se produisent les conséquences concrètes (atteinte financière, préjudice moral, prison).\n• **Espace hybride** : imbrication directe du numérique et du physique — ex. acheter un téléphone sur une plateforme en ligne et se le faire livrer physiquement à domicile, ou commander un VTC via une application.',
            keyRule:
              'L’hybridité relie directement l’acte numérique (clic de commande) à l’exécution matérielle (livraison physique du produit), créant une chaîne juridique unique.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Pourquoi qualifie-t-on le commerce électronique de biens matériels (commander un téléphone en ligne et le recevoir par livreur) d’activité « hybride » ?',
              options: [
                'Parce qu’il utilise deux langues étrangères',
                'Parce qu’il combine une interaction numérique (commande et paiement en ligne) et une exécution dans l’espace physique (livraison matérielle)',
                'Parce qu’il échappe totalement au droit',
                'Parce que le produit n’existe jamais physiquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’hybridité désigne précisément l’imbrication d’opérations réalisées dans l’espace numérique avec des effets ou prestations matérielles dans le monde physique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Effets réels du virtuel',
            stepTheme: 'Mythe de l’impunité virtuelle',
            stepTitle: 'Démontrer que les actes virtuels ont des conséquences juridiques réelles',
            paragraphText:
              'On entend parfois : « Ce qui se passe sur Internet reste virtuel et sans gravité. » Sur le plan juridique, cette idée est totalement fausse.\n• **Effets réels des actes en ligne** : une insulte ou une diffamation sur un réseau social détruit réellement la réputation d’une personne ; un vol de compte Mobile Money cause un préjudice financier réel ; le harcèlement en ligne affecte la santé morale.\n• **Nuance équilibrée** : si certaines actions ludiques restent cantonnées aux règles internes d’un jeu vidéo (ex. perdre une partie virtuelle), dès qu’un acte porte atteinte aux droits d’autrui, à son patrimoine ou à l’ordre public, le droit réel sanctionne pleinement.\n• **Exemple pratique** : proférer des menaces de mort sous pseudonyme sur TikTok entraîne des poursuites pénales bien réelles après identification.',
            keyRule:
              'Le pseudonyme n’est pas un bouclier d’impunité : tout acte commis en ligne qui cause un dommage réel engage la responsabilité civile et/ou pénale de son auteur.',
            konanTip:
              'En question de réflexion (« Les actes virtuels ont-ils les mêmes conséquences que dans le monde réel ? »), construis une réponse nuancée en 3 temps : Oui (réputation, cyberfraude) / Nuance (actes purement ludiques) / Synthèse (espace hybride aux frontières brouillées).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Un internaute affirme qu’une injure grave publiée sous pseudonyme sur un réseau social ne peut pas être sanctionnée car elle a lieu dans l’espace virtuel. Quelle est la réponse juridique exacte ?',
              options: [
                'Il a raison, les tribunaux ne jugent que les actes commis dans la rue',
                'Il a tort : les actes posés en ligne produisent des conséquences réelles (atteinte à l’honneur et à la réputation) et engagent pleinement la responsabilité pénale et civile',
                'Il a raison tant qu’il utilise un pseudonyme inventé',
                'Seul l’éditeur du smartphone peut être poursuivi',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’espace numérique est un espace hybride où les atteintes à la réputation, à la vie privée ou au patrimoine produisent des préjudices concrets sanctionnés par la loi.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse Ch. 1',
            stepTheme: 'Diagnostic d’une situation numérique',
            stepTitle: 'Diagnostiquer les spécificités en jeu dans un cas pratique complet',
            paragraphText:
              'Face à un cas concret d’économie numérique, savoir repérer les 4 spécificités permet de ne manquer aucun risque juridique.\n• **Méthode d’analyse** : (1) Y a-t-il dématérialisation (preuve électronique requise) ? (2) Y a-t-il instantanéité (risque viral/urgence) ? (3) Y a-t-il territorialité incertaine (acteurs/serveurs dans plusieurs pays) ? (4) Y a-t-il hybridité (livraison ou effet physique) ?\n• **Exemple pratique** : une plateforme de réservation d’hôtels basée à Abidjan, hébergée en Europe, permettant de réserver en un clic une chambre à Grand-Bassam avec facture numérique cumule les quatre spécificités simultanément !',
            keyRule:
              'Un même service numérique (e-commerce, fintech, tourisme en ligne) cumule presque toujours dématérialisation, instantanéité, territorialité multiple et hybridité.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Une application mobile de transport urbain à Abidjan génère un reçu électronique, confirme le trajet en temps réel, utilise un serveur cloud à l’étranger et fait venir un chauffeur physique. Quelles spécificités de l’espace numérique sont réunies ?',
              options: [
                'Uniquement la dématérialisation',
                'Les quatre spécificités à la fois : dématérialisation, instantanéité, territorialité incertaine et hybridité',
                'Aucune spécificité numérique car il y a une voiture physique',
                'Uniquement la territorialité incertaine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Reçu électronique = dématérialisation ; confirmation temps réel = instantanéité ; serveur étranger = territorialité incertaine ; course physique commandée en ligne = hybridité.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch1_p3',
        order: 3,
        title: 'Panorama des textes fondateurs et institutions du numérique en Côte d’Ivoire',
        summary:
          'Identifier avec certitude les grandes lois ivoiriennes du numérique (Lois 2013-450, 2013-451, 2013-546, Loi 2016-555, cadre télécoms) et le rôle exact des institutions clés (ARTCI, PLCC, BURIDA).',
        conceptExplanation:
          'Dès 2012–2013, la Côte d’Ivoire s’est dotée d’un arsenal juridique complet — modernisé par la suite — pour bâtir un écosystème numérique de confiance en Afrique de l’Ouest :\n\n1) Le triptyque législatif de 2013 : (a) Loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel ; (b) Loi n° 2013-451 du 19 juin 2013 relative à la lutte contre la cybercriminalité ; (c) Loi n° 2013-546 du 30 juillet 2013 relative aux transactions électroniques.\n2) Les textes sectoriels complémentaires : Ordonnance n° 2012-293 relative aux télécommunications et TIC (modernisée par la Loi n° 2024-352 sur les communications électroniques) et Loi n° 2016-555 du 26 juillet 2016 relative au droit d’auteur et aux droits voisins.\n3) Les trois institutions phares à ne jamais confondre : l’ARTCI (Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire — régule les télécoms et protège les données personnelles), la PLCC (Plateforme de Lutte Contre la Cybercriminalité — unité spécialisée d’enquête et de répression des cyberinfractions) et le BURIDA (Bureau Ivoirien du Droit d’Auteur — gère les droits d’auteur et les œuvres numériques).',
        formulas: [
          {
            name: 'Mémo des 3 lois ivoiriennes de 2013',
            formula: '2013-450 = Données personnelles  |  2013-451 = Cybercriminalité  |  2013-546 = Transactions électroniques',
            note: 'Complétées par Loi 2016-555 (Droit d’auteur) et le cadre des Communications Électroniques (Ord. 2012-293 / Loi 2024-352).',
          },
        ],
        keyRule:
          'Ne jamais inverser les numéros : 450 = Données personnelles ; 451 = Cybercriminalité ; 546 = Transactions électroniques. Institutions : ARTCI = Régulation & DCP ; PLCC = Enquête cyber ; BURIDA = Droit d’auteur.',
        workedExample: {
          title: 'Orienter trois victimes vers la bonne loi et la bonne institution en Côte d’Ivoire',
          statement:
            'Trois incidents surviennent le même jour à Abidjan : (1) Une société revend sans accord la base de données clients d’une ONG ; (2) Un pirate s’introduit dans le serveur d’une banque pour modifier des soldes ; (3) Un site diffuse illégalement le dernier album et le logiciel d’un créateur ivoirien.',
          methodSteps: [
            '1. Incident (1) : Violation de données personnelles → Loi n° 2013-450 → Saisine prioritaire de l’ARTCI.',
            '2. Incident (2) : Intrusion et falsification de données dans un système d’information → Loi n° 2013-451 → Plainte auprès de la PLCC et du Procureur de la République.',
            '3. Incident (3) : Contrefaçon numérique d’œuvres protégées → Loi n° 2016-555 (et Loi 2013-451 pour le piratage) → Mobilisation du BURIDA, de la PLCC et du juge.',
          ],
          conclusion:
            'Chaque problème numérique correspond à un texte précis et à une autorité spécialisée dédiée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Triptyque 2013',
            stepTheme: 'Lois 450, 451 et 546',
            stepTitle: 'Mémoriser sans confusion les trois grandes lois ivoiriennes de 2013',
            paragraphText:
              'L’année 2013 marque l’acte de naissance du droit moderne du numérique en Côte d’Ivoire avec l’adoption de trois lois complémentaires formant un bloc cohérent.\n• **Loi n° 2013-450 (19 juin 2013)** : protège les données à caractère personnel et la vie privée numérique des citoyens.\n• **Loi n° 2013-451 (19 juin 2013)** : réprime la cybercriminalité (accès frauduleux, falsification de données, usurpation d’identité, escroquerie en ligne).\n• **Loi n° 2013-546 (30 juillet 2013)** : encadre les transactions électroniques, le commerce en ligne, l’écrit et la signature électroniques.\n• **Astuce mnémotechnique** : 450 = « Vie privée / Données », 451 = « Cyber-police / Cybercriminalité », 546 = « E-commerce / Transactions ».',
            keyRule:
              '450 = Données personnelles ; 451 = Cybercriminalité ; 546 = Transactions électroniques. Retiens ces trois numéros par cœur pour tous les examens.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle association entre numéro de loi ivoirienne et domaine juridique est parfaitement exacte ?',
              options: [
                'Loi 2013-450 = Cybercriminalité ; Loi 2013-451 = Données personnelles ; Loi 2013-546 = Droit d’auteur',
                'Loi 2013-450 = Données personnelles ; Loi 2013-451 = Cybercriminalité ; Loi 2013-546 = Transactions électroniques',
                'Loi 2013-450 = Télécoms ; Loi 2013-451 = E-commerce ; Loi 2013-546 = Données personnelles',
                'Les trois lois portent exactement sur le même sujet des fréquences radio',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le triptyque de 2013 associe exactement : 2013-450 (données personnelles), 2013-451 (cybercriminalité) et 2013-546 (transactions électroniques).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Loi 2016-555 & Télécoms',
            stepTheme: 'Textes sectoriels',
            stepTitle: 'Compléter le socle avec le droit d’auteur et les communications électroniques',
            paragraphText:
              'Au-delà du triptyque de 2013, deux autres piliers législatifs encadrent les créations numériques et les infrastructures de réseaux.\n• **Loi n° 2016-555 du 26 juillet 2016** : régit le droit d’auteur et les droits voisins, protégeant les œuvres de l’esprit y compris les logiciels, bases de données, sites web et créations multimédias.\n• **Cadre des communications électroniques** : initié par l’Ordonnance n° 2012-293 (qui a institué l’ARTCI, notamment son article 104) et modernisé par la Loi n° 2024-352 du 6 juin 2024 sur les communications électroniques.\n• **Exemple pratique** : une application de streaming musical ivoirienne dépend à la fois de la Loi 2016-555 (droits des artistes), de la Loi 2013-450 (comptes abonnés) et de la Loi 2013-546 (abonnements en ligne).',
            keyRule:
              'Loi 2016-555 = œuvres et logiciels ; Ordonnance 2012-293 / Loi 2024-352 = réseaux, opérateurs télécoms et régulation ARTCI.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Quel texte ivoirien encadre spécifiquement la protection par le droit d’auteur des œuvres numériques (logiciels, musiques en ligne, contenus audiovisuels) ?',
              options: [
                'La Loi n° 2016-555 du 26 juillet 2016 relative au droit d’auteur et aux droits voisins',
                'La Loi n° 2013-546 sur les transactions électroniques uniquement',
                'La Convention de Budapest sur la cybercriminalité',
                'Le Code de la route',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Loi n° 2016-555 constitue le texte de référence en Côte d’Ivoire pour la protection du droit d’auteur et des droits voisins, incluant les créations numériques.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Institutions clés',
            stepTheme: 'ARTCI, PLCC et BURIDA',
            stepTitle: 'Distinguer les missions exactes de l’ARTCI, de la PLCC et du BURIDA',
            paragraphText:
              'La mise en œuvre concrète du droit du numérique en Côte d’Ivoire repose sur trois institutions spécialisées aux compétences strictement distinctes.\n• **ARTCI (Autorité de Régulation des Télécommunications/TIC)** : régule les télécoms, gère le domaine « .ci » et exerce le rôle d’autorité nationale de protection des données personnelles (autorisation, contrôle, sanction administrative).\n• **PLCC (Plateforme de Lutte Contre la Cybercriminalité)** : unité spécialisée chargée des enquêtes techniques, de la recherche de preuves numériques et de la répression des cyberinfractions sous contrôle judiciaire.\n• **BURIDA (Bureau Ivoirien du Droit d’Auteur)** : assure la gestion collective des droits d’auteur et des redevances des créateurs.',
            keyRule:
              'ARTCI = régulation télécoms + gendarme des données personnelles ; PLCC = enquête policière cybercriminalité ; BURIDA = gestion des droits d’auteur.',
            konanTip:
              'Si un cas parle d’une revente illégale de base clients → ARTCI. Si un cas parle d’un piratage de compte ou d’escroquerie en ligne → PLCC. Si un cas parle de redevances musicales/artistiques → BURIDA.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle institution ivoirienne mène les enquêtes techniques de police judiciaire face à un piratage informatique, une usurpation d’identité ou une cyber-escroquerie ?',
              options: [
                'Le BURIDA',
                'La PLCC (Plateforme de Lutte Contre la Cybercriminalité)',
                'L’OAPI',
                'La Chambre de Commerce',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La PLCC est l’organe opérationnel spécialisé dans les enquêtes et la lutte contre les infractions cybercriminelles en Côte d’Ivoire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Confiance numérique',
            stepTheme: 'Finalité économique du droit',
            stepTitle: 'Comprendre pourquoi le droit est un moteur de l’économie numérique',
            paragraphText:
              'On oppose parfois à tort « régulation juridique » et « innovation technologique » : en réalité, sans sécurité juridique, l’économie numérique ne peut pas se développer.\n• **Confiance des consommateurs** : un acheteur n’accepte de payer par Mobile Money ou carte en ligne que s’il sait ses données protégées et ses achats garantis (rétractation, lutte contre la fraude).\n• **Confiance des investisseurs** : une start-up respectant la conformité (ARTCI, propriété intellectuelle, sécurité) rassure les banques et fonds d’investissement internationaux.\n• **Exemple pratique** : l’essor rapide de l’e-commerce et des fintechs en Côte d’Ivoire s’appuie directement sur le socle de confiance bâti par les lois de 2013 et l’action de l’ARTCI.',
            keyRule:
              'Le droit du numérique ne freine pas l’économie digitale : il crée la CONFIANCE indispensable à l’adoption des services en ligne par les citoyens et les investisseurs.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Quel est l’objectif économique majeur poursuivi par le législateur ivoirien lorsqu’il encadre les données personnelles, la cybersécurité et les transactions électroniques ?',
              options: [
                'Interdire le développement des start-up technologiques',
                'Instaurer la confiance numérique afin de sécuriser les usagers et stimuler durablement la croissance de l’économie digitale',
                'Supprimer définitivement le commerce électronique',
                'Réserver Internet aux seules administrations publiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’encadrement juridique protège les citoyens contre les abus et crée le climat de confiance nécessaire au développement de l’e-commerce et de la transformation digitale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Droit de la vie privée',
            stepTheme: 'Parallèle vie privée / données',
            stepTitle: 'Relier protection des données personnelles et droit fondamental à la vie privée',
            paragraphText:
              'Le droit à la protection des données personnelles n’est pas une simple règle administrative : c’est le prolongement numérique du droit constitutionnel au respect de la vie privée.\n• **Parallèle fondamental** : tout comme la loi protège le domicile et le secret des correspondances papier contre les intrusions, la Loi n° 2013-450 protège l’identité numérique, les déplacements GPS et les traces de navigation.\n• **Vulnérabilité accrue** : contrairement au papier, les traces numériques sont stockées, croisées et revendues automatiquement à grande échelle.\n• **Exemple pratique** : collecter secrètement la géolocalisation permanente des abonnés d’un opérateur télécom porte directement atteinte à leur vie privée.',
            keyRule:
              'La donnée personnelle relève de la vie privée : la protéger, c’est défendre la liberté individuelle et la dignité du citoyen dans l’espace numérique.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'À quel droit fondamental classique la protection juridique des données à caractère personnel est-elle directement rattachée ?',
              options: [
                'Au droit au respect de la vie privée',
                'Au droit de douane maritime',
                'Au droit de chasse',
                'Au droit d’expropriation foncière',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La protection des données personnelles constitue la traduction contemporaine du droit fondamental au respect de la vie privée face aux technologies de collecte automatisée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application globale',
            stepTheme: 'Identifier texte et autorité',
            stepTitle: 'Choisir le bon réflexe juridique face à un incident numérique',
            paragraphText:
              'Savoir relier instantanément un fait concret à son texte de loi et à son institution compétente est la compétence de base de tout étudiant en économie numérique.\n• **Réflexe 1 — Collecte abusive ou fuite de données clients** → Loi n° 2013-450 → ARTCI.\n• **Réflexe 2 — Piratage, intrusion, falsification, usurpation d’identité** → Loi n° 2013-451 → PLCC / Procureur.\n• **Réflexe 3 — Litige de commande en ligne, signature électronique, rétractation** → Loi n° 2013-546 → Service client / Médiation / Juge.\n• **Réflexe 4 — Copie illégale d’un logiciel ou d’une vidéo** → Loi n° 2016-555 → BURIDA / PLCC / Juge.',
            keyRule:
              'Un bon juriste du numérique procède toujours en 3 temps : Qualifier les faits → Identifier la loi applicable → Désigner l’autorité compétente.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Un commerçant constate qu’un individu inconnu a piraté son compte de messagerie professionnelle et falsifié des factures envoyées à ses clients. Quelle loi et quelle institution sont prioritairement concernées ?',
              options: [
                'La Loi n° 2016-555 et le BURIDA',
                'La Loi n° 2013-451 relative à la cybercriminalité et la PLCC (ainsi que le Procureur de la République)',
                'La dispense domestique de l’ARTCI',
                'Le droit de rétractation de 7 jours uniquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le piratage de compte (accès frauduleux) et la falsification de données informatiques relèvent de la Loi n° 2013-451 et des enquêtes de la PLCC sous autorité du Procureur.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : ACTEURS DU NUMÉRIQUE & RESPONSABILITÉ HÉBERGEUR VS ÉDITEUR
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch2',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Acteurs du numérique et régime de responsabilité (Hébergeur vs Éditeur)',
    summary:
      'Typologie des acteurs de l’espace numérique (usagers, entreprises, plateformes, intermédiaires techniques), distinction fondamentale entre Hébergeur (responsabilité limitée, retrait prompt) et Éditeur (contrôle éditorial, responsabilité pleine), et obligations légales des sites (mentions légales, CGU et CGV).',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch2_p1',
        order: 1,
        title: 'Typologie des acteurs de l’espace numérique et répartition de leurs rôles',
        summary:
          'Savoir identifier et qualifier juridiquement chaque catégorie d’acteurs intervenant dans l’écosystème numérique : usagers, entreprises/e-commerçants, plateformes, intermédiaires techniques et autorités publiques.',
        conceptExplanation:
          'L’espace numérique met en relation une multitude d’acteurs dont les droits et obligations varient selon leur statut juridique et économique :\n\n1) Les usagers (individus / consommateurs) : personnes physiques qui naviguent, publient des contenus (ex. Marie poste une vidéo sur TikTok), communiquent ou achètent en ligne. Ils bénéficient de droits protecteurs (vie privée, rétractation) mais engagent leur responsabilité lorsqu’ils publient des contenus illicites ou commettent des infractions.\n2) Les entreprises (opérateurs, e-commerçants, fournisseurs de services) : personnes morales ou commerçants exerçant une activité économique en ligne (ex. une boutique vendant des téléphones ou des livres en ligne). Elles sont soumises à des obligations strictes de transparence, de loyauté et de sécurité.\n3) Les plateformes numériques : acteurs d’intermédiation mettant en relation des utilisateurs, créateurs ou vendeurs (ex. Facebook, TikTok, Jumia, Glovo). Selon leur degré d’intervention sur les contenus ou transactions, elles endossent des obligations de modération, de retrait de contenus haineux ou une responsabilité directe d’éditeur.\n4) Les prestataires techniques (FAI, hébergeurs cloud, datacenters) et les autorités de régulation/État (ARTCI, PLCC, justice) qui assurent l’infrastructure et le respect de la loi.',
        formulas: [
          {
            name: 'Chaîne des acteurs de l’écosystème numérique',
            formula: 'Usagers (individus)  ↔  Plateformes & Entreprises (services / e-commerce)  ↔  Prestataires techniques (FAI, Cloud)  ←  Régulateurs (ARTCI, Justice)',
            note: 'Chaque maillon obéit à un régime de responsabilité proportionné à son degré de maîtrise.',
          },
        ],
        keyRule:
          'Qualifier l’acteur est toujours la première étape d’une analyse juridique : Usager (individu) ≠ Entreprise (e-commerçant) ≠ Plateforme (intermédiaire/modérateur).',
        workedExample: {
          title: 'Associer trois situations quotidiennes à l’acteur numérique correspondant',
          statement:
            'Identifier l’acteur juridique principal dans chaque situation : (1) Marie publie une vidéo de danse sur TikTok ; (2) Une enseigne vend un smartphone sur son site marchand ; (3) Facebook est saisi pour retirer une publication incitant à la haine.',
          methodSteps: [
            '1. Situation (1) : Marie agit à titre individuel comme créatrice/utilisatrice → USAGER.',
            '2. Situation (2) : Vente commerciale directe de marchandises en ligne → ENTREPRISE (e-commerçant).',
            '3. Situation (3) : Service d’intermédiation gérant la modération de contenus tiers → PLATEFORME.',
          ],
          conclusion:
            'La qualification exacte de l’acteur détermine immédiatement les obligations légales et le niveau de responsabilité applicables.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Usagers',
            stepTheme: 'Droits et devoirs de l’internaute',
            stepTitle: 'Qualifier le statut juridique de l’usager (individu / internaute)',
            paragraphText:
              'L’usager est le citoyen ordinaire qui utilise Internet pour s’informer, communiquer, publier des vidéos ou acheter des biens et services.\n• **Droits renforcés** : lorsqu’il agit à des fins non professionnelles, l’usager est protégé comme consommateur (droit de rétractation, information claire) et comme personne concernée (droits sur ses données personnelles).\n• **Devoirs et responsabilité** : l’usager reste personnellement responsable de ses propres publications (diffamation, contrefaçon, atteinte à la vie privée) et de la garde de ses identifiants.\n• **Exemple pratique** : Marie qui poste une vidéo sur TikTok agit en qualité d’usager ; si elle y diffuse sans accord l’image intime d’un tiers, sa responsabilité personnelle est engagée.',
            keyRule:
              'L’usager bénéficie d’une forte protection en tant que consommateur et citoyen, mais répond personnellement des contenus illicites qu’il publie.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Dans la situation où Marie poste une vidéo personnelle sur TikTok, à quelle catégorie d’acteur de l’espace numérique correspond-elle ?',
              options: [
                'Une autorité de régulation',
                'Un usager (individu)',
                'Un fournisseur d’accès Internet (FAI)',
                'Un Prestataire de Services de Certification Électronique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Marie est une personne physique utilisant le service pour publier du contenu : elle relève de la catégorie des usagers.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Entreprises',
            stepTheme: 'Opérateurs et e-commerçants',
            stepTitle: 'Identifier le rôle et les obligations des entreprises numériques',
            paragraphText:
              'Dès qu’un acteur vend habituellement des biens ou services en ligne dans un but lucratif, il bascule dans le statut d’entreprise professionnelle.\n• **Catégories d’entreprises** : opérateurs télécoms, e-commerçants vendant sur leur propre site ou sur des places de marché, éditeurs de logiciels SaaS, start-up fintech.\n• **Obligations renforcées** : immatriculation légale (RCCM), mentions légales, CGV loyales, conformité ARTCI pour les fichiers clients, sécurité des paiements et responsabilité de plein droit de la livraison.\n• **Exemple pratique** : une librairie ou une boutique d’électronique vendant des téléphones en ligne à Abidjan agit en tant qu’entreprise e-commerçante.',
            keyRule:
              'Un professionnel qui vend en ligne (même via un réseau social) est soumis à l’ensemble des obligations légales des entreprises e-commerçantes.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Lorsqu’une société vend des téléphones en ligne à des consommateurs via son site marchand, comment la qualifie-t-on parmi les acteurs du numérique ?',
              options: [
                'Une entreprise (e-commerçant)',
                'Un simple usager domestique dispensé de toute loi',
                'Une convention internationale',
                'Un juge judiciaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une société exerçant une activité commerciale de vente de produits en ligne est une entreprise (e-commerçant) soumise au droit des transactions électroniques et de la consommation.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Plateformes',
            stepTheme: 'Rôle central d’intermédiation',
            stepTitle: 'Comprendre la spécificité juridique des plateformes numériques',
            paragraphText:
              'Les plateformes (réseaux sociaux comme Facebook/TikTok, places de marché comme Jumia, apps de livraison comme Glovo) occupent une place centrale en mettant en relation offre et demande ou créateurs et public.\n• **Fonction d’intermédiation** : elles fournissent l’espace numérique, les règles de fonctionnement (CGU), les outils de recherche/recommandation et parfois le paiement.\n• **Enjeu de responsabilité** : elles doivent modérer et retirer promptement les contenus haineux ou illicites signalés, et peuvent voir leur responsabilité renforcée lorsqu’elles jouent un rôle actif.\n• **Exemple pratique** : lorsque Facebook doit retirer un contenu haineux signalé par des utilisateurs, il agit en sa qualité de plateforme numérique.',
            keyRule:
              'Les plateformes structurent l’économie numérique par l’intermédiation ; leur responsabilité dépend de leur degré de contrôle actif sur les contenus et ventes.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Dans la situation où un réseau social comme Facebook est mis en demeure de retirer un contenu haineux publié par un internaute, quel acteur est visé ?',
              options: [
                'Une plateforme numérique',
                'Un consommateur individuel',
                'Un fabricant de câbles sous-marins',
                'Une association sportive',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Facebook, TikTok ou Jumia sont des plateformes numériques assurant une intermédiation soumise à des obligations de modération et de retrait des contenus illicites.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Intermédiaires techniques',
            stepTheme: 'FAI et hébergeurs cloud',
            stepTitle: 'Situer les fournisseurs d’accès (FAI) et hébergeurs techniques',
            paragraphText:
              'En coulisses, des acteurs purement techniques assurent la connexion au réseau et le stockage physique des serveurs.\n• **Fournisseurs d’Accès Internet (FAI)** : acheminent les paquets de données sans contrôler le contenu des messages (principe de simple transport / neutralité).\n• **Hébergeurs techniques / Datacenters** : louent de l’espace serveur et de la puissance de calcul (ex. datacenters locaux en Côte d’Ivoire, Orange CI Cloud, OVH, Microsoft Azure) sans choisir les produits vendus ni rédiger les pages.\n• **Statut protecteur** : parce qu’ils ne créent pas le contenu, la loi leur accorde un régime de responsabilité limitée, à condition de rester neutres et de coopérer sur réquisition judiciaire.',
            keyRule:
              'FAI = simple transporteur de trafic ; Hébergeur cloud = prestataire technique de stockage neutre ; aucun des deux n’est responsable a priori des contenus tiers.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quel est le rôle principal d’un prestataire cloud comme Orange CI Cloud, OVH ou Microsoft Azure lorsqu’il loue des serveurs à des sites marchands ?',
              options: [
                'Choisir les prix des chaussures vendues sur les sites',
                'Fournir un service technique de stockage et d’accès (hébergeur) sans intervenir sur le contenu éditorial',
                'Rédiger les avis clients à la place des acheteurs',
                'Remplacer la police judiciaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un fournisseur de cloud ou un datacenter est un hébergeur technique qui met à disposition des ressources de stockage sans contrôle éditorial sur les contenus stockés.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Rôle de l’État',
            stepTheme: 'Régulateurs et justice',
            stepTitle: 'Identifier le rôle des acteurs publics dans la gouvernance numérique',
            paragraphText:
              'L’État et les autorités indépendantes assurent le cadre de confiance sans lequel les acteurs privés ne peuvent opérer équitablement.\n• **Législateur et Gouvernement** : adoptent les lois (2013, 2016, 2024) et les stratégies nationales de cybersécurité et d’inclusion numérique.\n• **Autorité de régulation (ARTCI)** : veille à la concurrence télécoms, protège les données personnelles, accompagne et sanctionne.\n• **Justice et forces spécialisées (PLCC)** : tranchent les litiges civils/commerciaux et répriment les infractions pénales.\n• **Exemple pratique** : lorsqu’un conflit oppose un consommateur, une plateforme et un fraudeur, ces institutions garantissent l’application impartiale de la loi.',
            keyRule:
              'L’écosystème numérique fonctionne sur un équilibre entre liberté d’entreprendre des acteurs privés et régulation impartiale des institutions publiques (ARTCI, PLCC, tribunaux).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quel rôle joue l’ARTCI dans les relations entre usagers, entreprises numériques et État ?',
              options: [
                'Elle vend directement des smartphones aux particuliers',
                'Elle agit comme autorité de régulation et d’intermédiaire chargée du contrôle, de la sensibilisation, de l’accompagnement et de la sanction administrative',
                'Elle héberge tous les réseaux sociaux mondiaux',
                'Elle supprime l’intervention des tribunaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ARTCI régule le secteur, contrôle la conformité à la loi, accompagne les entreprises et protège les usagers en lien avec l’État et la justice.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Cumul de casquettes',
            stepTheme: 'Acteurs hybrides',
            stepTitle: 'Repérer qu’un même acteur peut cumuler plusieurs statuts selon ses activités',
            paragraphText:
              'Dans la pratique économique actuelle, une même grande entreprise exerce souvent plusieurs fonctions différentes sur un même site web.\n• **Principe de qualification par activité** : le juge n’examine pas le nom de l’entreprise, mais le RÔLE CONCRET qu’elle joue pour l’activité litigieuse précise.\n• **Exemple pratique** : une grande place de marché peut agir comme ÉDITEUR pour les produits qu’elle vend elle-même en propre ou qu’elle sélectionne/promeut activement, et comme simple prestataire technique pour un espace de stockage neutre.\n• **Conséquence** : on ne peut jamais se cacher derrière l’étiquette d’« hébergeur » si l’on exerce en réalité un contrôle éditorial actif.',
            keyRule:
              'La qualification juridique (hébergeur vs éditeur) s’apprécie concrètement activité par activité, selon le degré réel de contrôle exercé.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Une plateforme e-commerce prétend dans ses CGU être un « simple hébergeur », mais sélectionne elle-même ses vendeurs, réécrit les fiches produits et fixe les règles de mise en avant. Que fera le juge ?',
              options: [
                'Il se contentera automatiquement du mot écrit dans les CGU',
                'Il requalifiera son activité en rôle actif d’éditeur compte tenu de son contrôle concret sur les contenus et la présentation',
                'Il déclarera le litige inexistant',
                'Il condamnera uniquement l’acheteur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le juge n’est pas lié par l’étiquette auto-attribuée dans les CGU : il examine concrètement si la plateforme joue un rôle passif (hébergeur) ou actif (éditeur).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch2_p2',
        order: 2,
        title: 'Responsabilité différenciée : Hébergeur vs Éditeur',
        summary:
          'Maîtriser avec rigueur la distinction cardinale du droit d’Internet entre l’hébergeur (stockage neutre, responsabilité limitée, retrait prompt après notification) et l’éditeur (contrôle éditorial, responsabilité pleine et directe).',
        conceptExplanation:
          'La distinction entre HÉBERGEUR et ÉDITEUR constitue la pierre angulaire de la responsabilité sur Internet et dans l’e-commerce en Côte d’Ivoire :\n\n1) L’HÉBERGEUR :\n• Définition : acteur qui fournit un service technique de stockage ou d’accès à des contenus mis en ligne par des tiers, SANS intervenir sur le contenu lui-même (rôle neutre et passif).\n• Régime de responsabilité : responsabilité LIMITÉE. Il n’a aucune obligation générale de contrôler a priori les contenus stockés. Toutefois, dès qu’il a connaissance effective d’un contenu manifestement illicite (via notification), il doit agir PROMPTEMENT pour le retirer ou en bloquer l’accès, sous peine d’engager sa responsabilité.\n• Exemples : un datacenter en Côte d’Ivoire, Orange CI Cloud, OVH ou Microsoft Azure stockant des pages sans choisir les produits.\n\n2) L’ÉDITEUR :\n• Définition : acteur qui détermine le contenu diffusé et assure un contrôle éditorial actif sur le site ou la plateforme.\n• Régime de responsabilité : responsabilité PLEINE ET DIRECTE pour tous les contenus publiés. Il doit vérifier a priori la licéité, la conformité et l’exactitude des informations et offres proposées.\n• Exemples : une boutique en ligne exploitée directement par une entreprise (ex. site marchand d’une librairie ou enseigne), ou une place de marché active comme Jumia Côte d’Ivoire lorsqu’elle sélectionne ses vendeurs, fixe les règles de présentation et met en avant les produits.',
        formulas: [
          {
            name: 'Critère de distinction Hébergeur vs Éditeur',
            formula: 'Stockage technique neutre = Hébergeur (responsabilité limitée + retrait prompt)  |  Contrôle éditorial / rôle actif = Éditeur (responsabilité pleine et directe)',
            note: 'C’est l’intervention active sur le choix ou la présentation du contenu qui fait basculer dans le statut d’éditeur.',
          },
        ],
        keyRule:
          'Hébergeur = pas de contrôle a priori, mais retrait prompt obligatoire après signalement. Éditeur = contrôle éditorial actif, donc responsabilité pleine et directe dès la publication.',
        workedExample: {
          title: 'Trancher la responsabilité d’un datacenter et d’un site marchand vendant un produit contrefait',
          statement:
            'Une boutique en ligne vend des montres contrefaites sur un site hébergé par un datacenter d’Abidjan. La marque victime veut poursuivre immédiatement et simultanément la boutique et le datacenter sans avoir prévenu ce dernier.',
          methodSteps: [
            '1. Responsabilité de la boutique en ligne (ÉDITEUR) : elle choisit les produits, rédige les annonces et encaisse les ventes → responsabilité pleine et directe engagée immédiatement dès la mise en ligne.',
            '2. Responsabilité du datacenter (HÉBERGEUR) : rôle purement technique de stockage sans connaissance préalable des produits → ne peut pas être condamné tant qu’il n’a pas été notifié.',
            '3. Action efficace envers le datacenter : lui adresser une notification précise du caractère manifestement illicite ; s’il tarde à retirer ou bloquer le site après notification, sa responsabilité sera alors engagée.',
          ],
          conclusion:
            'La responsabilité sur Internet est graduée : immédiate pour l’éditeur, conditionnée à la connaissance effective et au défaut de retrait prompt pour l’hébergeur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Hébergeur',
            stepTheme: 'Stockage neutre et responsabilité limitée',
            stepTitle: 'Définir le statut d’hébergeur et son régime de responsabilité allégée',
            paragraphText:
              'Si les hébergeurs devaient lire chaque ligne de code et chaque photo des millions de sites qu’ils stockent, Internet cesserait tout simplement de fonctionner.\n• **Définition** : l’hébergeur fournit un service technique de stockage ou d’accès à des contenus mis en ligne par des tiers, sans intervenir sur leur élaboration.\n• **Régime protecteur** : responsabilité limitée et absence d’obligation générale de surveillance a priori des contenus stockés.\n• **Exemple pratique** : un datacenter à Abidjan, OVH, Orange CI Cloud ou Microsoft Azure qui héberge techniquement un site marchand sans décider quels articles y sont vendus.',
            keyRule:
              'L’hébergeur n’est pas un censeur préalable : tant qu’il reste techniquement neutre, il n’a pas à contrôler a priori ce que ses clients mettent en ligne.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle proposition définit exactement le statut juridique d’un hébergeur sur Internet ?',
              options: [
                'L’acteur qui rédige tous les articles et choisit chaque produit vendu',
                'L’acteur qui fournit un service technique de stockage ou d’accès à des contenus mis en ligne par des tiers, sans contrôle éditorial a priori',
                'Le policier chargé d’arrêter les cybercriminels',
                'Le consommateur qui achète un produit en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’hébergeur assure une prestation technique neutre de stockage et d’accès sans intervenir sur les contenus produits par des tiers.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Éditeur',
            stepTheme: 'Contrôle éditorial et responsabilité pleine',
            stepTitle: 'Définir le statut d’éditeur et sa responsabilité pleine et directe',
            paragraphText:
              'À l’opposé de l’hébergeur passif, l’éditeur est le maître du contenu qu’il décide de publier et de proposer au public.\n• **Définition** : l’éditeur détermine le contenu diffusé et exerce un contrôle éditorial actif sur le site ou la plateforme.\n• **Régime strict** : responsabilité PLEINE ET DIRECTE pour tous les contenus, prix et informations publiés ; il a l’obligation préalable d’en vérifier la licéité, la conformité et l’exactitude.\n• **Exemple pratique** : le site marchand officiel d’une librairie (ex. Librairie de France) ou une place de marché qui sélectionne ses vendeurs, fixe les règles de présentation et met en avant certains produits (rôle actif).',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Comparatif juridique : Hébergeur passif vs Éditeur actif',
              caption: 'La frontière décisive qui détermine l’étendue de la responsabilité en ligne.',
              matrix2x2: {
                topAxis: ['HÉBERGEUR (Rôle passif / technique)', 'ÉDITEUR (Rôle actif / éditorial)'],
                leftAxis: ['Nature & Exemples', 'Régime de responsabilité'],
                topLeft: {
                  title: 'Stockage technique neutre',
                  items: [
                    'Stocke des contenus mis en ligne par des tiers',
                    'Aucune intervention sur le fond',
                    'Ex. Datacenter CI, Orange CI Cloud, OVH, Azure',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Maîtrise éditoriale ou commerciale',
                  items: [
                    'Détermine et choisit les contenus diffusés',
                    'Sélectionne vendeurs / met en avant produits',
                    'Ex. Boutique en ligne propre, plateforme active (Jumia)',
                  ],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'Responsabilité LIMITÉE',
                  items: [
                    'Pas de contrôle a priori obligatoire',
                    'Obligation de retrait PROMPT dès notification',
                    'Responsable uniquement s’il tarde à agir',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Responsabilité PLEINE & DIRECTE',
                  items: [
                    'Obligation de vérification préalable',
                    'Répond de la licéité et de l’exactitude',
                    'Responsable immédiatement dès publication',
                  ],
                  color: 'violet',
                },
              },
            },
            keyRule:
              'Qui choisit, sélectionne ou met en avant le contenu est ÉDITEUR : sa responsabilité est pleine, directe et immédiate.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi une place de marché comme Jumia Côte d’Ivoire, lorsqu’elle sélectionne ses vendeurs, fixe les règles de présentation et choisit la mise en avant de produits, est-elle qualifiée d’éditeur ?',
              options: [
                'Parce qu’elle loue uniquement des câbles électriques',
                'Parce qu’elle exerce un rôle actif de contrôle, de sélection et de mise en avant des offres, au-delà du simple stockage technique passif',
                'Parce que tous les sites africains sont automatiquement éditeurs',
                'Parce qu’elle ne possède aucun serveur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès qu’une plateforme sort de la neutralité technique pour sélectionner ses vendeurs, organiser et promouvoir les produits, elle joue un rôle actif qui relève du régime d’éditeur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Retrait prompt',
            stepTheme: 'Limite de l’immunité de l’hébergeur',
            stepTitle: 'Comprendre quand l’hébergeur perd sa responsabilité limitée',
            paragraphText:
              'La responsabilité limitée de l’hébergeur n’est JAMAIS une immunité absolue : elle est assortie d’une contrepartie immédiate de réactivité.\n• **Condition de maintien** : l’hébergeur doit agir PROMPTEMENT pour retirer un contenu manifestement illicite ou en rendre l’accès impossible dès qu’il en a effectivement connaissance.\n• **Contenu manifestement illicite** : escroquerie évidente, pédopornographie, appel à la haine, contrefaçon flagrante ou injonction judiciaire.\n• **Exemple pratique** : si une victime signale avec preuves à un hébergeur un site clone de phishing hébergé sur ses serveurs et que l’hébergeur laisse le site actif pendant des semaines, il engage sa propre responsabilité.',
            keyRule:
              'Connaissance effective d’un contenu manifestement illicite + Inaction de l’hébergeur = Perte de la responsabilité limitée.',
            konanTip:
              'Retiens le mot-clé légal exact : agir « PROMPTEMENT » (sans délai injustifié) dès la prise de connaissance.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un hébergeur reçoit une notification précise lui signalant un contenu manifestement illicite (escroquerie avérée) stocké sur ses serveurs, mais décide de ne rien faire. Quelle est la conséquence juridique ?',
              options: [
                'Il reste totalement irresponsable quoi qu’il arrive',
                'Il manque à son obligation d’agir promptement après connaissance effective et engage sa propre responsabilité',
                'Il devient propriétaire du site frauduleux',
                'Seul l’acheteur du produit est sanctionné',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le régime de responsabilité limitée de l’hébergeur tombe s’il n’agit pas promptement pour retirer ou bloquer un contenu manifestement illicite porté à sa connaissance.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Cas pratique',
            stepTheme: 'Boutique propre vs Cloud',
            stepTitle: 'Distinguer le régime d’une boutique en ligne propre et de son cloud',
            paragraphText:
              'Dans la vie réelle, presque chaque boutique en ligne fait intervenir les deux statuts simultanément : l’entreprise marchande (éditeur) et son prestataire cloud (hébergeur).\n• **La boutique en ligne (ex. site d’une librairie ou marque)** : conçoit ses pages, fixe ses prix, gère son catalogue → ÉDITEUR pleinement responsable de l’exactitude des prix et de la légalité des produits.\n• **Le fournisseur cloud (ex. Azure, OVH, Orange CI Cloud)** : héberge techniquement l’infrastructure → HÉBERGEUR à responsabilité limitée.\n• **Conséquence procédurale** : un client lésé par un produit non conforme agit contre la boutique (éditeur), jamais contre le fournisseur cloud.',
            keyRule:
              'Sur un site marchand classique : le propriétaire de la boutique est l’ÉDITEUR ; la société qui loue les serveurs est l’HÉBERGEUR.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Une librairie d’Abidjan exploite sa propre boutique en ligne hébergée sur Microsoft Azure et affiche par erreur un prix trompeur et une fausse description de livre. Qui est juridiquement responsable en tant qu’éditeur ?',
              options: [
                'Microsoft Azure uniquement',
                'La librairie qui exploite la boutique en ligne et maîtrise son contenu éditorial',
                'L’ARTCI',
                'L’opérateur télécom du client',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La librairie détermine le contenu et les offres de sa boutique : elle est l’éditeur directement responsable, tandis que Microsoft Azure n’est que l’hébergeur technique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Identification des auteurs',
            stepTheme: 'Conservation des données techniques',
            stepTitle: 'Connaître le devoir de coopération de l’hébergeur avec la justice',
            paragraphText:
              'Même lorsque l’hébergeur n’est pas responsable du contenu illicite publié par un internaute anonyme, il détient la clé technique pour retrouver l’auteur réel.\n• **Conservation des données d’identification** : l’hébergeur et le FAI doivent conserver les données techniques permettant d’identifier toute personne ayant contribué à la création d’un contenu (adresse IP, horodatage, identifiants de compte).\n• **Communication sur réquisition judiciaire** : ces données ne sont pas livrées à n’importe quel particulier, mais transmises à la justice / PLCC sur réquisition légale.\n• **Exemple pratique** : pour identifier l’auteur d’un faux profil diffamatoire, le juge adresse une réquisition à la plateforme et au FAI.',
            keyRule:
              'L’hébergeur bénéficie d’une responsabilité limitée sur les contenus, mais doit conserver les traces techniques d’identification et les remettre à la justice sur réquisition.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle obligation essentielle pèse sur les hébergeurs et FAI afin d’éviter que l’anonymat en ligne ne garantisse l’impunité des auteurs d’infractions ?',
              options: [
                'Publier publiquement le numéro de téléphone de tous leurs clients sur leur page d’accueil',
                'Conserver les données techniques permettant d’identifier les auteurs de contenus et les communiquer sur réquisition de l’autorité judiciaire',
                'Vérifier manuellement chaque e-mail envoyé dans le pays',
                'Payer les amendes à la place des internautes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La conservation des données techniques d’identification (logs, IP) et leur remise sur réquisition judiciaire permettent de lever l’anonymat des auteurs d’infractions.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Test de qualification',
            stepTheme: 'Synthèse Hébergeur vs Éditeur',
            stepTitle: 'Appliquer la grille de qualification à 4 acteurs numériques concrets',
            paragraphText:
              'Pour réussir à coup sûr les questions de qualification en examen, applique toujours le test en deux questions : (1) L’acteur stocke-t-il passivement des contenus tiers ? (2) Exerce-t-il un contrôle éditorial, une sélection ou une promotion active ?\n• **Datacenter / Cloud pur (OVH, Azure, Orange CI Cloud)** → Hébergeur.\n• **Site marchand d’une marque ou enseigne** → Éditeur.\n• **Journal d’actualité en ligne** → Éditeur (pour ses articles) ; peut être hébergeur pour les commentaires lecteurs non modérés a priori.\n• **Place de marché sélectionnant vendeurs et mettant en avant produits** → Rôle actif d’éditeur.',
            keyRule:
              'Un même site peut être Éditeur pour ses propres contenus éditoriaux et Hébergeur pour les espaces contributifs tiers non contrôlés a priori.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Parmi les couples suivants, lequel associe correctement chaque acteur à son régime de responsabilité ?',
              options: [
                'Datacenter cloud = Responsabilité pleine et contrôle a priori ; Site marchand propre = Responsabilité limitée',
                'Datacenter cloud = Hébergeur (responsabilité limitée, retrait prompt) ; Site marchand propre = Éditeur (responsabilité pleine et directe)',
                'Les deux sont dispensés de toute responsabilité même après notification',
                'Les deux doivent obtenir une licence 5G',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le datacenter est un hébergeur technique à responsabilité limitée (sous réserve de retrait prompt), tandis que la boutique en ligne propre est un éditeur pleinement et directement responsable.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch2_p3',
        order: 3,
        title: 'Obligations juridiques des sites et plateformes : Mentions légales, CGU et CGV',
        summary:
          'Maîtriser les obligations documentaires et de transparence imposées à tout site ou plateforme e-commerce : contenu obligatoire des mentions légales, rôle des CGU et contenu impératif des CGV.',
        conceptExplanation:
          'Pour instaurer la transparence et permettre au consommateur ou aux autorités d’identifier facilement leur interlocuteur en cas de litige, le droit de l’e-commerce impose trois socles documentaires obligatoires à tout site ou plateforme professionnelle :\n\n1) Les Mentions légales obligatoires : véritable « carte d’identité » du site, accessibles en permanence, elles doivent indiquer : (a) l’identité complète de l’éditeur (raison sociale, adresse physique, contacts directs, numéro RCCM) ; (b) l’identité et les coordonnées de l’hébergeur ; (c) les coordonnées de l’autorité de contrôle compétente (notamment l’ARTCI).\n2) Les Conditions Générales d’Utilisation (CGU) : contrat d’adhésion qui encadre l’usage de la plateforme par tous les internautes (règles d’inscription, interdiction de publier des annonces trompeuses ou contenus illicites, règles de modération et de suspension de compte).\n3) Les Conditions Générales de Vente (CGV) : socle contractuel qui encadre la relation commerciale entre le vendeur et le consommateur (prix TTC, modes de paiement, délais et frais de livraison, droit de rétractation, garanties et modalités de remboursement en cas de litige — comme sur les plateformes de livraison telles que Glovo ou Julaya Market).',
        formulas: [
          {
            name: 'Triptyque documentaire obligatoire d’un site marchand',
            formula: 'Mentions légales (Qui êtes-vous ?)  +  CGU (Comment utiliser le site ?)  +  CGV (Comment acheter, payer, livrer et rembourser ?)',
            note: 'Complété par la Politique de confidentialité (information obligatoire au titre de la Loi n° 2013-450).',
          },
        ],
        keyRule:
          'Tout site e-commerce doit afficher 3 blocs distincts : Mentions légales (éditeur, RCCM, hébergeur, ARTCI), CGU (règles d’usage) et CGV (prix TTC, paiement, livraison, rétractation, remboursement).',
        workedExample: {
          title: 'Auditer la page de pied de page (footer) d’une nouvelle plateforme de livraison à Abidjan',
          statement:
            'Une start-up de livraison de courses à Abidjan lance son application avec uniquement un numéro WhatsApp en bas de page, sans RCCM, sans nom d’hébergeur, sans CGU et sans conditions de remboursement.',
          methodSteps: [
            '1. Compléter les Mentions légales : ajouter raison sociale, siège social, numéro RCCM, contacts, identité de l’hébergeur cloud et coordonnées de l’ARTCI.',
            '2. Rédiger des CGU claires : fixer les règles d’utilisation de l’application, l’interdiction des faux comptes et les règles de modération.',
            '3. Publier des CGV complètes : préciser prix TTC, frais de livraison, délais estimés, modalités de paiement, exceptions au droit de rétractation (produits périssables) et procédure de remboursement en cas de colis manquant.',
          ],
          conclusion:
            'Ces trois documents protègent autant le consommateur (transparence) que la start-up (cadre contractuel clair en cas de contestation).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mentions légales',
            stepTheme: 'Carte d’identité du site',
            stepTitle: 'Énumérer les informations obligatoires des mentions légales',
            paragraphText:
              'Un site professionnel anonyme prive le consommateur de tout recours réel en cas d’escroquerie ou de produit défectueux : la loi interdit donc l’anonymat commercial.\n• **Identité de l’éditeur** : raison sociale (ou nom/prénom pour un commerçant individuel), adresse géographique réelle, contacts (téléphone, e-mail) et numéro d’immatriculation au Registre du Commerce (RCCM).\n• **Identité de l’hébergeur** : nom, raison sociale et coordonnées de la société qui stocke le site.\n• **Autorité de contrôle** : coordonnées de l’autorité compétente (par exemple l’ARTCI en Côte d’Ivoire).\n• **Exemple pratique** : avant d’acheter sur un site inconnu, vérifier la présence d’un RCCM et d’une adresse physique réelle est le premier réflexe anti-arnaque.',
            keyRule:
              'Mentions légales obligatoires = Éditeur (raison sociale, adresse, contacts, RCCM) + Hébergeur + Autorité de contrôle (ARTCI).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Quel ensemble d’informations doit obligatoirement figurer dans les mentions légales d’un site de vente en ligne en Côte d’Ivoire ?',
              options: [
                'Uniquement le prénom du développeur web',
                'L’identité complète de l’éditeur (raison sociale, adresse, contacts, RCCM), l’identité de l’hébergeur et les coordonnées de l’autorité de contrôle (ex. ARTCI)',
                'Uniquement le mot de passe administrateur du site',
                'La liste complète des noms et téléphones de tous les clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les mentions légales assurent la transparence en identifiant clairement l’éditeur (avec RCCM), l’hébergeur technique et l’autorité de contrôle compétente.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'CGU',
            stepTheme: 'Conditions Générales d’Utilisation',
            stepTitle: 'Comprendre la fonction juridique des Conditions Générales d’Utilisation (CGU)',
            paragraphText:
              'Même lorsqu’une plateforme est gratuite (réseau social, site de petites annonces, forum), son fonctionnement repose sur des règles communes opposables à tous les utilisateurs.\n• **Objet des CGU** : encadrer l’accès et l’utilisation de la plateforme par les internautes (création de compte, comportements autorisés/interdits, propriété intellectuelle des contenus postés).\n• **Outil de modération** : les CGU interdisent les annonces trompeuses, les propos haineux ou le spam, et autorisent la plateforme à suspendre un compte fautif.\n• **Exemple pratique** : une plateforme de petites annonces s’appuie sur ses CGU pour supprimer le compte d’un vendeur publiant de fausses offres.',
            keyRule:
              'CGU = règlement intérieur contractuel de la plateforme, applicable à tout utilisateur (acheteur, vendeur ou simple visiteur inscrit).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quel document juridique encadre les règles d’usage d’une plateforme par les internautes (interdiction d’annonces trompeuses, règles de modération, suspension de compte) ?',
              options: [
                'Les Conditions Générales d’Utilisation (CGU)',
                'Le récépissé fiscal municipal',
                'Le diplôme du directeur technique',
                'Le protocole HTTPS',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les CGU définissent les droits, devoirs et règles de conduite de tous les utilisateurs sur une plateforme numérique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'CGV',
            stepTheme: 'Conditions Générales de Vente',
            stepTitle: 'Maîtriser le contenu impératif des Conditions Générales de Vente (CGV)',
            paragraphText:
              'Dès qu’il y a paiement et vente en ligne, les CGU ne suffisent plus : des Conditions Générales de Vente (CGV) précises deviennent obligatoires.\n• **Objet des CGV** : encadrer la relation contractuelle entre le commerçant et le consommateur avant et après la commande.\n• **Clauses incontournables** : prix total TTC, modes de paiement acceptés, délais et zones de livraison, droit de rétractation (7 jours) et exceptions, garanties légales et conditions de remboursement en cas de litige.\n• **Exemple pratique** : les plateformes de livraison opérant en Côte d’Ivoire (Glovo, Julaya Market) détaillent dans leurs CGV les délais de livraison et les modalités de remboursement en cas d’article manquant ou endommagé.',
            keyRule:
              'CGV = contrat commercial complet fixant prix TTC, paiement, livraison, rétractation, garanties et remboursement.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quelles informations essentielles doivent figurer dans les Conditions Générales de Vente (CGV) d’une plateforme marchande ?',
              options: [
                'Uniquement l’historique personnel du fondateur',
                'Les prix TTC, les modes de paiement, les délais de livraison, les garanties et les conditions de rétractation/remboursement',
                'Les codes sources secrets de l’application',
                'Uniquement les règles d’orthographe des commentaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les CGV encadrent tous les aspects contractuels de la transaction : prix TTC, paiement, livraison, garanties, rétractation et remboursement.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Clauses abusives',
            stepTheme: 'Protection contre les clauses déséquilibrées',
            stepTitle: 'Repérer et écarter les clauses abusives dans les CGU/CGV',
            paragraphText:
              'Parce que le consommateur ne négocie pas les CGV (contrat d’adhésion), certains sites tentent d’y glisser des clauses léonines totalement illégales.\n• **Clause abusive** : clause créant un déséquilibre significatif au détriment du consommateur (ex. « Aucun remboursement possible même si le produit livré est cassé », « Le vendeur décline toute responsabilité en cas de non-livraison »).\n• **Sanction juridique** : la clause abusive est réputée non écrite (nulle) devant le juge ; elle ne prive jamais le consommateur de ses droits légaux impératifs.\n• **Exemple pratique** : une mention « ni repris ni échangé » sur un site e-commerce ne peut pas supprimer le droit légal de rétractation ni la garantie contre les vices cachés.',
            keyRule:
              'Les CGV ne peuvent jamais contredire la loi : toute clause supprimant les droits impératifs du consommateur est abusive et réputée non écrite.',
            konanTip:
              'Le fait d’avoir cliqué sur « J’accepte les CGV » ne rend jamais valable une clause illégale ou abusive !',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Un site marchand inscrit dans ses CGV : « En cas de colis perdu ou cassé pendant la livraison, le client ne pourra demander aucun remboursement ». Quelle est la valeur juridique de cette clause ?',
              options: [
                'Elle est pleinement valable dès que le client coche la case CGV',
                'Elle est abusive et réputée non écrite car elle supprime la responsabilité légale impérative du vendeur envers le consommateur',
                'Elle est valable uniquement les week-ends',
                'Elle transfère la responsabilité à l’ARTCI',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une clause qui exonère totalement le e-commerçant de son obligation essentielle de livraison conforme crée un déséquilibre significatif et est nulle (réputée non écrite).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Acceptation explicite',
            stepTheme: 'Opposabilité des CGU/CGV',
            stepTitle: 'Rendre les CGU et CGV juridiquement opposables au client',
            paragraphText:
              'Rédiger d’excellentes CGV ne sert à rien si le site les cache au fond d’une page introuvable sans preuve que le client en a pris connaissance avant de commander.\n• **Conditions d’opposabilité** : (1) mise à disposition claire et lisible AVANT la conclusion du contrat ; (2) possibilité de les télécharger/conserver ; (3) acceptation active par une case à cocher NON précochée (« J’ai lu et j’accepte les CGV »).\n• **Preuve d’acceptation** : le système enregistre la date, l’heure et la version exacte des CGV acceptées par l’utilisateur.\n• **Exemple pratique** : un lien discret en bas de page sans action positive de l’acheteur ne suffit pas à prouver l’acceptation de clauses particulières.',
            keyRule:
              'Pour être opposables, les CGU/CGV doivent être accessibles avant l’engagement et acceptées activement (case non précochée).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle méthode permet à un e-commerçant de rendre ses CGV juridiquement opposables au consommateur ?',
              options: [
                'Les envoyer uniquement 6 mois après la livraison',
                'Les rendre accessibles avant le paiement et recueillir une acceptation active via une case à cocher non précochée',
                'Les cacher en texte blanc sur fond blanc',
                'Précocher automatiquement la case à la place du client',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’opposabilité des CGV suppose une mise à disposition préalable claire et une manifestation positive de consentement (case non précochée).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Politique de confidentialité',
            stepTheme: 'Information données personnelles',
            stepTitle: 'Articuler CGU/CGV et Politique de confidentialité (Loi 2013-450)',
            paragraphText:
              'Une erreur fréquente consiste à mélanger les règles commerciales (CGV) avec le consentement au traitement des données personnelles.\n• **Séparation recommandée** : la Politique de confidentialité informe spécifiquement sur les données collectées, les finalités, les destinataires, la durée de conservation et les droits de l’usager (accès, rectification, opposition, effacement).\n• **Consentement distinct** : accepter les CGV pour acheter un produit ne vaut pas consentement automatique à la revente de ses données à des partenaires publicitaires.\n• **Exemple pratique** : un tunnel de commande conforme propose une case pour les CGV et une case séparée, facultative et non précochée, pour recevoir la newsletter promotionnelle.',
            keyRule:
              'Séparer CGV (contrat de vente) et Politique de confidentialité / consentement marketing : acheter un produit ne donne jamais carte blanche pour revendre les données du client.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi un site marchand ne doit-il pas fusionner dans une seule case précochée l’acceptation des CGV et l’accord pour partager les données clients avec des partenaires commerciaux ?',
              options: [
                'Parce que le consentement au traitement des données personnelles (notamment le partage commercial) doit être libre, spécifique et distinct du contrat d’achat',
                'Parce que les navigateurs web interdisent plus d’une case par page',
                'Parce que les CGV sont illégales en e-commerce',
                'Parce que la loi interdit toute politique de confidentialité',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le principe du consentement libre, spécifique et éclairé (Loi 2013-450) interdit de forcer le partage commercial des données en le cachant dans l’acceptation des CGV.',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 3 : PROTECTION DES DONNÉES À CARACTÈRE PERSONNEL (LOI 2013-450 & ARTCI)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch3',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Protection des données à caractère personnel (Loi 2013-450) et rôle de l’ARTCI',
    summary:
      'Notion de donnée à caractère personnel (« l’or du XXIe siècle ») et lien avec la vie privée, cinq principes directeurs (licéité, finalité, proportionnalité, consentement libre/spécifique/éclairé, transparence), droits des personnes concernées, analyse d’irrégularités pratiques et missions/pouvoirs de contrôle et de sanction de l’ARTCI.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch3_p1',
        order: 1,
        title: 'Donnée à caractère personnel (« l’or du XXIe siècle »), vie privée et les 5 principes clés',
        summary:
          'Définir une donnée à caractère personnel au sens de la Loi n° 2013-450, comprendre sa valeur économique et maîtriser les 5 principes fondamentaux (licéité, finalité, proportionnalité, consentement libre/spécifique/éclairé, transparence).',
        conceptExplanation:
          'Selon la Loi ivoirienne n° 2013-450 du 19 juin 2013, une donnée à caractère personnel (DCP) est « toute information relative à une personne physique identifiée ou identifiable, directement ou indirectement ».\n\n1) Identification directe ou indirecte : directe (nom, prénom, photo, numéro de CNI) ou indirecte par recoupement (numéro de téléphone, adresse IP, plaque d’immatriculation, coordonnées GPS, identifiant client, données biométriques). Elle relève directement du droit à la vie privée.\n2) Pourquoi qualifie-t-on la donnée personnelle d’« or du XXIe siècle » ? Parce qu’elle possède une valeur économique majeure : elle permet de cibler les consommateurs, de personnaliser les services et d’orienter les décisions commerciales. Mais cette valeur immense expose les citoyens aux abus (revente illicite, profilage invasif), d’où la nécessité d’un encadrement juridique strict.\n3) Les cinq (5) principes clés partagés par la Loi n° 2013-450 et le RGPD : (a) Licéité du traitement (base légale valable) ; (b) Finalité déterminée et légitime (ne pas détourner les données de l’objectif annoncé) ; (c) Proportionnalité / minimisation (ne collecter que le strict nécessaire) ; (d) Consentement libre, spécifique et éclairé (jamais forcé ni précoché) ; (e) Transparence (informer clairement sur qui collecte, pourquoi et à qui les données sont transmises).',
        formulas: [
          {
            name: 'Les 5 principes d’un traitement conforme (Loi 2013-450 & RGPD)',
            formula: 'Licéité  +  Finalité déterminée  +  Proportionnalité  +  Consentement libre/éclairé  +  Transparence',
            note: 'Complétés par la sécurité/confidentialité et la durée de conservation limitée.',
          },
        ],
        keyRule:
          'Une donnée personnelle identifie directement (nom, photo) ou indirectement (adresse IP, GPS, n° téléphone) une personne physique. Tout traitement exige licéité, finalité, proportionnalité, consentement libre et transparence.',
        workedExample: {
          title: 'Détecter les irrégularités d’une application mobile de livraison à Abidjan',
          statement:
            'Une start-up ivoirienne lance une application mobile de livraison. À l’inscription, elle exige le nom, l’ethnie, le numéro de téléphone, la géolocalisation permanente (24h/24) et pré-coche par défaut une clause autorisant le partage des données avec « des partenaires ».',
          methodSteps: [
            '1. Relever l’irrégularité sur le consentement : la case précochée par défaut est une clause abusive qui viole le consentement libre, spécifique et éclairé.',
            '2. Relever la collecte excessive (violation de la proportionnalité) : exiger l’ethnie (donnée sensible sans aucun lien avec une livraison) et la géolocalisation permanente (alors que seule l’adresse au moment de la livraison est utile) est manifestement disproportionné.',
            '3. Relever le défaut de transparence : la mention vague « des partenaires » sans identité ni finalité précise viole l’obligation de transparence.',
          ],
          conclusion:
            'Cette application cumule trois manquements graves aux principes de la Loi n° 2013-450 : consentement vicié, collecte disproportionnée et opacité envers l’usager.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition DCP',
            stepTheme: 'Identification directe et indirecte',
            stepTitle: 'Reconnaître une donnée à caractère personnel (directe ou indirecte)',
            paragraphText:
              'Beaucoup d’étudiants limitent à tort la « donnée personnelle » au seul nom de famille : la Loi n° 2013-450 adopte une définition beaucoup plus large et protectrice.\n• **Définition légale** : toute information relative à une personne physique identifiée ou identifiable, directement ou indirectement.\n• **Exemples directs et indirects** : nom, adresse, numéro de téléphone, photo, adresse IP, numéro d’identification client, données biométriques (empreinte, voix) et coordonnées GPS.\n• **Exemple pratique** : même sans votre nom, l’historique de vos coordonnées GPS reliant chaque jour votre domicile à votre lieu de travail permet de vous identifier indirectement — c’est une donnée personnelle.',
            keyRule:
              'Une adresse IP, un numéro de téléphone ou des coordonnées GPS sont des données à caractère personnel dès qu’ils permettent d’identifier indirectement un individu.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les informations suivantes, laquelle constitue une donnée à caractère personnel au sens de la Loi n° 2013-450 ?',
              options: [
                'Le taux officiel de TVA en Côte d’Ivoire',
                'Une adresse IP, une photo, un numéro de téléphone ou une empreinte digitale rattachable à un individu',
                'La température moyenne annuelle de la ville de Bouaké',
                'Le prix affiché d’un sac de riz au marché',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toute information permettant d’identifier directement ou indirectement une personne physique (photo, téléphone, adresse IP, biométrie, GPS) est une donnée à caractère personnel.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Enjeu économique',
            stepTheme: '« L’or du XXIe siècle »',
            stepTitle: 'Expliquer pourquoi la donnée personnelle est appelée « l’or du XXIe siècle »',
            paragraphText:
              'Si les plus grandes entreprises technologiques mondiales offrent gratuitement réseaux sociaux, moteurs de recherche et messageries, c’est parce que la donnée personnelle est devenue une ressource économique stratégique.\n• **Valeur économique majeure** : l’analyse des données permet de cibler précisément les consommateurs, de personnaliser les services, d’optimiser la publicité et d’orienter les décisions commerciales.\n• **Contrepartie juridique indispensable** : cette forte valeur marchande rend la donnée vulnérable aux collectes abusives, au vol et à la revente clandestine, rendant indispensable un encadrement légal strict.\n• **Exemple pratique** : une société de téléphonie qui collecte les coordonnées GPS de ses clients sans les en informer pour monétiser leurs déplacements encourt une suspension de traitement et une amende de l’ARTCI.',
            keyRule:
              'Donnée personnelle = richesse économique stratégique (ciblage, personnalisation) ET bien juridique protégé (vie privée) nécessitant des garde-fous stricts.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi qualifie-t-on couramment les données personnelles d’« or du XXIe siècle » en économie numérique ?',
              options: [
                'Parce que les serveurs informatiques sont fabriqués en or massif',
                'Parce qu’elles ont une valeur économique majeure (ciblage, personnalisation, aide à la décision), ce qui les expose aux abus et exige un encadrement juridique strict',
                'Parce qu’il est interdit aux entreprises de collecter la moindre donnée même avec consentement',
                'Parce qu’elles remplacent la monnaie nationale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La donnée personnelle crée une immense valeur économique grâce au ciblage et à la personnalisation, mais sa vulnérabilité aux abus impose la régulation par le droit.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Licéité & Finalité',
            stepTheme: 'Cadre légitime du traitement',
            stepTitle: 'Appliquer les principes de licéité et de finalité déterminée',
            paragraphText:
              'Collecter des données sans raison précise « pour voir ce qu’on pourra en faire plus tard » est strictement interdit par la Loi n° 2013-450.\n• **Licéité** : le traitement doit reposer sur une base légale légitime (consentement, exécution d’un contrat, obligation légale) et être effectué de manière loyale (sans collecte cachée).\n• **Finalité déterminée et légitime** : avant même la collecte, l’objectif exact doit être annoncé (ex. gérer la livraison d’une commande) ; il est interdit de détourner ensuite ces données vers une finalité incompatible (ex. les revendre à un parti politique ou à un courtier marketing).\n• **Exemple pratique** : utiliser les numéros collectés pour un examen universitaire afin de démarcher commercialement les étudiants viole le principe de finalité.',
            keyRule:
              'Règle d’or : 1 collecte = 1 finalité précise, explicite et légitime annoncée d’avance ; tout détournement ultérieur est illicite.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Une clinique collecte les numéros de téléphone de ses patients uniquement pour confirmer leurs rendez-vous médicaux, puis transmet la liste à une agence immobilière pour du démarchage. Quel principe clé est violé ?',
              options: [
                'Le principe de finalité déterminée et légitime (détournement de finalité)',
                'Le principe de libre concurrence des fréquences',
                'Le principe du double clic e-commerce',
                'Le principe d’originalité du droit d’auteur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Réutiliser à des fins commerciales tierces des données collectées pour un suivi médical constitue un détournement manifeste du principe de finalité déterminée.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Proportionnalité',
            stepTheme: 'Collecte excessive et données sensibles',
            stepTitle: 'Sanctionner la collecte excessive (ethnie, géolocalisation permanente)',
            paragraphText:
              'Même pour une finalité légitime comme livrer un colis, une entreprise n’a pas le droit de tout demander à ses clients.\n• **Principe de proportionnalité (minimisation)** : seules les données adéquates, pertinentes et strictement nécessaires à la finalité annoncée peuvent être collectées.\n• **Données sensibles** : les informations touchant à l’origine ethnique, aux opinions politiques/religieuses, à la santé ou à la biométrie font l’objet d’une interdiction de principe ou d’un encadrement exceptionnel.\n• **Exemple pratique** : une application de livraison qui exige l’ethnie de l’utilisateur et sa géolocalisation permanente 24h/24 commet une collecte excessive et illicite.',
            keyRule:
              'Demander l’ethnie ou une géolocalisation permanente pour une simple livraison viole directement le principe de proportionnalité.',
            konanTip:
              'Pour tester la proportionnalité d’un champ de formulaire, pose une seule question : « L’entreprise peut-elle rendre le service promis SANS cette information ? » Si oui, le champ ne doit pas être obligatoire.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Une application mobile de livraison à Abidjan oblige l’utilisateur à indiquer son ethnie et à activer sa géolocalisation permanente même lorsque l’application est fermée. Quelle irrégularité commet-elle ?',
              options: [
                'Aucune, car une application mobile peut tout collecter librement',
                'Une collecte excessive et disproportionnée portant notamment sur une donnée sensible (ethnie) sans lien avec la livraison',
                'Une violation du droit des brevets OAPI',
                'Uniquement un problème de design graphique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ethnie et le suivi GPS permanent ne sont aucunement nécessaires pour livrer une commande : cela viole le principe de proportionnalité et la protection des données sensibles.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Consentement',
            stepTheme: 'Libre, spécifique, éclairé',
            stepTitle: 'Écarter les cases précochées et exiger un consentement libre et éclairé',
            paragraphText:
              'Pour être juridiquement valable, l’accord de l’utilisateur ne peut jamais résulter d’un piège d’interface ou du silence.\n• **Trois qualités cumulatives du consentement** : (1) LIBRE (aucune contrainte ni chantage à l’accès pour une finalité accessoire) ; (2) SPÉCIFIQUE (distinct pour chaque finalité, ex. partage partenaires) ; (3) ÉCLAIRÉ (précédé d’une information claire).\n• **Interdiction de la case précochée** : une case cochée par défaut (« J’accepte le partage avec des partenaires ») est une clause abusive ; le consentement exige un acte positif clair de l’usager.\n• **Exemple pratique** : le silence ou l’inaction d’un utilisateur qui ne décoche pas une case pré-remplie ne vaut JAMAIS consentement valable.',
            keyRule:
              'Consentement valable = Acte positif clair (case NON précochée) + Libre + Spécifique + Éclairé.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Lors de l’inscription sur une application, une case est précochée par défaut pour autoriser la cession des données à des partenaires publicitaires. Ce consentement est-il valable ?',
              options: [
                'Oui, tant que l’utilisateur peut supprimer l’application un an plus tard',
                'Non, une case précochée constitue une pratique abusive qui viole l’exigence d’un consentement libre, spécifique et actif',
                'Oui, si le texte est écrit en petits caractères gris',
                'Oui, uniquement sur téléphone Android',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le consentement ne peut jamais être présumé par une case précochée par défaut : il doit résulter d’une démarche positive, libre et éclairée de la personne.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Transparence',
            stepTheme: 'Information claire sur les destinataires',
            stepTitle: 'Garantir la transparence sur l’identité des destinataires (« partenaires »)',
            paragraphText:
              'Dire vaguement à un utilisateur que ses données seront partagées avec « nos partenaires » sans préciser qui ils sont ni ce qu’ils en feront est juridiquement insuffisant.\n• **Exigence de transparence** : l’organisme doit informer clairement la personne, dès la collecte, de son identité, de la finalité exacte, de la durée de conservation, des catégories précises ou de l’identité des destinataires, et de ses droits.\n• **Effet protecteur** : sans transparence préalable, l’utilisateur ne peut ni donner un consentement éclairé ni exercer ses droits d’opposition ou d’effacement.\n• **Exemple pratique** : une mention transparente précise clairement : « Vos nom et téléphone sont transmis uniquement au livreur partenaire pour exécuter votre commande. »',
            keyRule:
              'La formule floue « partage avec nos partenaires » viole le principe de transparence ; les destinataires et usages doivent être clairement identifiés.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi la clause générique « vos données pourront être transmises à nos partenaires » sans autre précision est-elle irrégulière au regard de la Loi n° 2013-450 ?',
              options: [
                'Parce qu’elle manque de transparence en ne précisant ni l’identité/catégorie des destinataires ni la finalité exacte du partage',
                'Parce que la loi interdit à toute entreprise d’avoir un prestataire de livraison',
                'Parce que le mot « partenaire » est réservé aux banques',
                'Parce qu’elle rend l’application trop lente',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le principe de transparence impose d’informer précisément l’usager sur les destinataires de ses données et les finalités de chaque transmission.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch3_p2',
        order: 2,
        title: 'Les droits des personnes concernées et l’analyse d’irrégularités pratiques',
        summary:
          'Maîtriser les droits essentiels garantis aux citoyens (information, accès, rectification, effacement, opposition) et savoir diagnostiquer méthodiquement toute irrégularité dans une application ou un fichier.',
        conceptExplanation:
          'Pour que la personne physique reste réellement maîtresse de ses informations tout au long de leur cycle de vie, la Loi n° 2013-450 (en convergence avec le RGPD) lui reconnaît des droits concrets et directement opposables à tout responsable de traitement :\n\n1) Droit à l’information : savoir clairement ce qui est collecté, pourquoi, pour combien de temps et par qui.\n2) Droit d’accès : demander et obtenir confirmation qu’un organisme détient des données vous concernant, et en recevoir une copie intelligible.\n3) Droit de rectification : faire corriger, mettre à jour ou compléter des informations inexactes ou obsolètes.\n4) Droit à l’effacement (et à l’oubli numérique) : exiger la suppression de ses données lorsqu’elles ne sont plus nécessaires, en cas de retrait du consentement ou de traitement illicite.\n5) Droit d’opposition : refuser, pour motif légitime — ou sans motif et gratuitement en matière de prospection commerciale — que ses données soient utilisées.\n\nS’y ajoutent dans la pratique moderne le droit à la portabilité, le déréférencement et le refus de profilage automatisé.',
        formulas: [
          {
            name: 'Socle des droits de la personne concernée (Loi 2013-450)',
            formula: 'Information  +  Accès  +  Rectification  +  Effacement  +  Opposition (+ Portabilité & Refus de profilage)',
            note: 'Tout organisme doit prévoir un canal clair (e-mail dédié ou DPO) pour répondre à ces demandes.',
          },
        ],
        keyRule:
          'Les droits DCP sont opérationnels : chaque citoyen peut vérifier (accès), corriger (rectification), bloquer le démarchage (opposition) ou supprimer (effacement) ses données.',
        workedExample: {
          title: 'Exercer les droits DCP face à une base clients erronée et à du spam SMS',
          statement:
            'Un consommateur découvre qu’un opérateur commercial orthographie mal son nom, lui envoie des SMS publicitaires quotidiens non sollicités et conserve ses données 8 ans après la clôture de son compte.',
          methodSteps: [
            '1. Exercer le droit d’accès et de rectification : demander copie des données détenues et exiger la correction immédiate de l’identité.',
            '2. Exercer le droit d’opposition : exiger l’arrêt immédiat et sans frais de toute prospection commerciale par SMS.',
            '3. Exercer le droit à l’effacement : invoquer le dépassement de la durée de conservation limitée pour obtenir la suppression définitive du compte clos (et saisir l’ARTCI en cas de refus).',
          ],
          conclusion:
            'En combinant droits d’accès, rectification, opposition et effacement, l’usager reprend concrètement le contrôle de son identité numérique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Tableau des droits',
            stepTheme: 'Vue d’ensemble des droits DCP',
            stepTitle: 'Associer chaque besoin de l’usager au bon droit sur ses données',
            paragraphText:
              'Chaque droit reconnu par la Loi n° 2013-450 répond à une situation concrète très précise dans la vie quotidienne du citoyen numérique.\n• **Accès** : savoir quelles données une entreprise détient sur vous.\n• **Rectification** : corriger une erreur d’état civil, d’adresse ou de numéro.\n• **Effacement** : obtenir la suppression de données obsolètes ou collectées illégalement.\n• **Opposition** : stopper la prospection commerciale (SMS/e-mails) ou un traitement pour motif légitime.\n• **Réflexe examen** : apprends à relier instantanément chaque cas concret au droit exact et à l’irrégularité correspondante.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Synthèse des droits DCP et des irrégularités fréquentes (Loi n° 2013-450)',
              caption: 'Grille de diagnostic rapide pour l’analyse de cas pratiques.',
              tableData: {
                headers: ['Droit ou Principe', 'Effet concret pour l’usager', 'Exemple d’irrégularité sanctionnée'],
                rows: [
                  ['Droit d’accès', 'Obtenir copie des données détenues', 'Refus de communiquer le dossier client'],
                  ['Droit de rectification', 'Corriger une donnée fausse/incomplète', 'Maintien d’un impayé erroné après preuve'],
                  ['Droit à l’effacement', 'Faire supprimer ses données', 'Conservation sans limite après clôture'],
                  ['Droit d’opposition', 'Refuser la prospection commerciale', 'Envoi continu de spam après désinscription'],
                  ['Consentement & Proportionnalité', 'Accord libre + strict nécessaire', 'Case précochée + collecte ethnie / GPS 24h/24'],
                ],
              },
            },
            keyRule:
              'Savoir nommer le droit exact (accès, rectification, effacement, opposition) fait toute la différence dans la rédaction d’une analyse juridique.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Un client demande à une boutique en ligne de lui fournir la liste exacte des données personnelles qu’elle stocke dans son profil. Quel droit exerce-t-il ?',
              options: [
                'Le droit d’accès',
                'Le droit au cybersquatting',
                'Le droit de licence copyleft',
                'Le droit d’interconnexion télécom',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit d’accès permet à toute personne d’obtenir confirmation qu’un organisme traite ses données et d’en recevoir une copie compréhensible.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Rectification',
            stepTheme: 'Exactitude des fichiers',
            stepTitle: 'Exercer le droit de rectification face à une donnée inexacte',
            paragraphText:
              'Une donnée inexacte dans une base bancaire, universitaire ou commerciale peut causer un préjudice sérieux (refus de crédit, blocage de dossier, erreur de facturation).\n• **Droit de rectification** : toute personne peut exiger du responsable de traitement que soient rectifiées, complétées ou mises à jour sans délai les données la concernant qui sont inexactes ou incomplètes.\n• **Obligation de répercussion** : lorsque l’organisme a transmis ces données erronées à des tiers, il doit leur notifier la rectification.\n• **Exemple pratique** : un étudiant constatant une erreur sur sa date de naissance dans un portail administratif demande sa rectification immédiate sur présentation de sa pièce d’identité.',
            keyRule:
              'L’exactitude des données est une obligation du responsable ; le droit de rectification permet à l’usager d’imposer la correction rapide de toute erreur.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Une base de données commerciale mentionne à tort qu’un client a un incident de paiement alors qu’il a tout réglé. Quel droit lui permet d’imposer la correction de son dossier ?',
              options: [
                'Le droit de rectification des données personnelles',
                'Le droit à la neutralité du net',
                'Le droit de propriété industrielle',
                'Le droit de rétractation de 7 jours',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit de rectification oblige le responsable de traitement à corriger ou mettre à jour toute information inexacte ou périmée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Effacement',
            stepTheme: 'Suppression et durée limitée',
            stepTitle: 'Mobiliser le droit à l’effacement et la durée de conservation limitée',
            paragraphText:
              'Internet a tendance à tout garder indéfiniment ; le droit impose au contraire un « droit à l’oubli » et une purge régulière des fichiers.\n• **Droit à l’effacement** : obtenir la suppression de ses données lorsqu’elles ne sont plus nécessaires à la finalité initiale, lorsque le consentement est retiré ou lorsque la collecte était illicite.\n• **Limite légitime** : le responsable peut refuser l’effacement uniquement s’il est tenu par une obligation légale de conservation (ex. conservation comptable des factures ou preuve judiciaire).\n• **Exemple pratique** : après fermeture d’un compte sur un réseau social, l’utilisateur demande l’effacement définitif de ses photos et de son profil.',
            keyRule:
              'Le droit à l’effacement s’applique dès que la finalité est atteinte ou le consentement retiré, sauf obligation légale expresse de conservation (fiscale/judiciaire).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Dans quel cas un responsable de traitement peut-il légitimement refuser l’effacement immédiat d’une facture contenant le nom d’un ancien client ?',
              options: [
                'Parce qu’il aime conserver toutes ses données à vie',
                'Parce qu’une obligation légale (comptable ou fiscale) lui impose de conserver les factures pendant une durée déterminée',
                'Parce que le droit à l’effacement n’existe pas en Côte d’Ivoire',
                'Parce qu’il souhaite revendre la facture à un courtier marketing',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une obligation légale impérative (conservation comptable/fiscale ou constatation de droits en justice) constitue une limite légitime à l’effacement immédiat.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Opposition',
            stepTheme: 'Stopper le démarchage',
            stepTitle: 'Exercer le droit d’opposition sans frais contre la prospection',
            paragraphText:
              'Recevoir des dizaines de SMS publicitaires ou d’appels commerciaux non désirés est l’une des plaintes les plus fréquentes des citoyens numériques.\n• **Droit d’opposition général** : permet de s’opposer à un traitement en invoquant un motif légitime tenant à sa situation particulière.\n• **Droit d’opposition absolu en prospection commerciale** : aucun motif n’est exigé ; le responsable doit cesser immédiatement et gratuitement tout démarchage (SMS, e-mail, appel).\n• **Exemple pratique** : répondre « STOP » à un SMS publicitaire ou cliquer sur « Se désinscrire » dans une newsletter exerce concrètement le droit d’opposition.',
            keyRule:
              'Contre la prospection commerciale, le droit d’opposition s’exerce à tout moment, sans avoir à se justifier et sans frais.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Un usager souhaite ne plus recevoir d’offres promotionnelles par SMS d’une enseigne chez qui il a acheté un produit. Doit-il fournir un motif grave pour exercer son droit d’opposition ?',
              options: [
                'Oui, il doit produire un certificat médical devant un juge',
                'Non, en matière de prospection commerciale le droit d’opposition est absolu, gratuit et sans obligation de justification',
                'Oui, il doit payer des frais de dossier à l’enseigne',
                'Non, car il doit simplement changer de numéro de téléphone',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La prospection commerciale fait l’objet d’un droit d’opposition absolu et gratuit qui s’impose immédiatement au professionnel.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Recours en cas de refus',
            stepTheme: 'Saisine de l’ARTCI',
            stepTitle: 'Agir lorsqu’une entreprise ignore ou refuse une demande de droits',
            paragraphText:
              'Que faire si une entreprise ne répond pas à votre demande d’effacement ou continue à revendre vos données malgré votre opposition ?\n• **Étape 1 — Demande écrite tracée** : adresser la demande au responsable de traitement (ou à son DPO) en conservant la preuve d’envoi (e-mail, courrier).\n• **Étape 2 — Plainte auprès de l’ARTCI** : en cas de silence ou de refus injustifié, saisir directement l’ARTCI (autorité de protection des données), qui peut enquêter, mettre en demeure et sanctionner l’organisme.\n• **Étape 3 — Action judiciaire complémentaire** : demander devant le juge des dommages-intérêts pour réparer le préjudice moral ou matériel subi.',
            keyRule:
              'Face au refus d’un responsable de traitement, la victime saisit l’ARTCI (voie administrative rapide et spécialisée) et peut agir en justice pour obtenir réparation.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Une entreprise refuse de supprimer les données d’un utilisateur après clôture de son compte et continue de lui envoyer de la publicité. Quelle est la démarche juridique la plus pertinente ?',
              options: [
                'Pirater le site web de l’entreprise pour effacer soi-même la base',
                'Conserver la preuve de sa demande écrite et déposer une plainte auprès de l’ARTCI (autorité de protection des données)',
                'Accepter la situation car aucune autorité ne contrôle les entreprises privées',
                'Saisir le BURIDA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ARTCI est l’autorité de contrôle habilitée à instruire les plaintes des citoyens, mettre en demeure l’entreprise fautive et prononcer des sanctions.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Audit d’application',
            stepTheme: 'Corriger un formulaire d’inscription',
            stepTitle: 'Mettre en conformité le formulaire d’inscription d’une start-up',
            paragraphText:
              'En tant que futur professionnel du numérique, tu dois savoir transformer un formulaire illégal en un parcours 100 % conforme à la Loi n° 2013-450.\n• **Suppression des champs excessifs** : retirer l’ethnie et limiter la géolocalisation au seul instant où le client valide sa livraison.\n• **Correction du consentement** : décocher par défaut toute case de partage commercial ou de newsletter.\n• **Transparence et droits** : ajouter une notice claire indiquant l’identité du responsable, la finalité, la liste des prestataires (livreurs/paiement), la durée de conservation et l’adresse de contact pour exercer les droits d’accès, rectification, effacement et opposition.',
            keyRule:
              'Formulaire conforme = champs strictement utiles + cases décochées par défaut + notice transparente sur les finalités, destinataires et droits.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle modification rend immédiatement plus conforme à la Loi n° 2013-450 un formulaire d’inscription d’application de livraison ?',
              options: [
                'Rendre obligatoires l’ethnie et la profession des parents',
                'Supprimer les champs non nécessaires, décocher par défaut les cases marketing et préciser clairement les finalités, destinataires et droits de l’usager',
                'Cacher la politique de confidentialité derrière un lien brisé',
                'Activer la géolocalisation permanente sans avertir l’utilisateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Minimiser les champs, supprimer les cases précochées et informer clairement l’utilisateur met directement le formulaire en conformité avec les 5 principes de la Loi 2013-450.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch3_p3',
        order: 3,
        title: 'Missions, pouvoirs et saisine prioritaire de l’ARTCI',
        summary:
          'Comprendre le fondement légal de l’ARTCI (Article 104 de l’Ordonnance n° 2012-293 et Loi n° 2013-450), ses missions de contrôle/sensibilisation, sa gradation de sanctions et pourquoi sa saisine est prioritaire face à un abus sur les données.',
        conceptExplanation:
          'L’ARTCI (Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire), autorité spécialisée notamment visée à l’article 104 de l’Ordonnance n° 2012-293 et désignée autorité nationale de protection des données par la Loi n° 2013-450, joue le rôle de « gendarme » et de médiateur entre les usagers, les entreprises et l’État.\n\n1) Missions principales : (a) Contrôler la conformité des traitements à la Loi n° 2013-450 (contrôle a priori par déclarations/autorisations et contrôle a posteriori par audits/enquêtes) ; (b) Rôle pédagogique : sensibiliser le grand public et accompagner les entreprises vers la conformité ; (c) Rôle d’interface entre citoyens, acteurs privés et puissance publique.\n2) Pouvoirs opérationnels gradués : pouvoir d’enquête et d’investigation technique, pouvoir de mise en demeure (enjoindre l’entreprise de cesser l’irrégularité sous délai), pouvoir de sanction administrative (avertissement, suspension/retrait d’autorisation, sanction pécuniaire), et saisine du Procureur de la République en cas d’infraction pénale grave.\n3) Stratégie juridique — pourquoi saisir l’ARTCI en priorité ? Lorsqu’une ONG ou un usager constate qu’une société revend des fichiers d’abonnés sans accord, la saisine de l’ARTCI est la démarche prioritaire (rapide, spécialisée, gratuite et dotée de pouvoirs d’enquête et de suspension), tandis que l’action judiciaire (dommages-intérêts/pénal) ou la communication restent possibles en complément.',
        formulas: [
          {
            name: 'Gradation d’intervention de l’ARTCI',
            formula: 'Plainte / Saisine  →  Contrôle & Enquête  →  Mise en demeure  →  Sanction administrative (suspension / amende)  →  Saisine Procureur (si infraction pénale)',
            note: 'L’action judiciaire civile/pénale reste toujours ouverte en complément pour indemniser la victime.',
          },
        ],
        keyRule:
          'Face à une violation de données personnelles (ex. revente illicite de fichiers), la saisine de l’ARTCI est la démarche PRIORITAIRE ; l’action en justice ou médiatique vient en complément.',
        workedExample: {
          title: 'Choisir la meilleure stratégie juridique face à une revente illicite de fichiers d’abonnés',
          statement:
            'Une ONG ivoirienne découvre qu’une société de marketing revend les fichiers de ses abonnés sans aucun accord. Elle hésite entre : (1) engager seule une action en justice, (2) saisir l’ARTCI, ou (3) lancer une campagne médiatique.',
          methodSteps: [
            '1. Choisir la démarche prioritaire : saisir l’ARTCI (option 2), car c’est l’autorité de contrôle spécialisée (Ord. 2012-293 art. 104 et Loi 2013-450) capable d’enquêter techniquement, de mettre en demeure et de faire cesser immédiatement la revente illicite.',
            '2. Articuler les démarches complémentaires : engager en parallèle ou ensuite une action judiciaire pour obtenir des dommages-intérêts (réparation civile) ou des poursuites pénales.',
            '3. Rester prudent sur la campagne médiatique : une campagne non maîtrisée avant établissement des preuves expose à des contre-poursuites en diffamation ; elle ne remplace jamais la voie institutionnelle.',
          ],
          conclusion:
            'La saisine prioritaire de l’ARTCI offre l’efficacité technique et juridique la plus rapide, tout en préparant solidement un éventuel recours judiciaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Statut ARTCI',
            stepTheme: 'Autorité spécialisée',
            stepTitle: 'Situer le rôle institutionnel de l’ARTCI entre État, entreprises et usagers',
            paragraphText:
              'Sans autorité indépendante dotée de moyens techniques, une loi sur les données personnelles risquerait de rester lettre morte.\n• **Double casquette en Côte d’Ivoire** : régulateur des télécommunications/TIC (Ord. n° 2012-293, art. 104 ; Loi n° 2024-352) et Autorité nationale de protection des données à caractère personnel (Loi n° 2013-450).\n• **Position d’intermédiaire** : l’ARTCI assure l’équilibre entre la protection des droits des usagers, l’accompagnement économique des entreprises et les impératifs de l’État.\n• **Exemple pratique** : une start-up qui s’interroge sur la légalité de son fichier clients peut solliciter l’accompagnement pédagogique de l’ARTCI avant le lancement.',
            keyRule:
              'L’ARTCI n’est pas seulement un organe de sanction : elle exerce aussi une mission essentielle de sensibilisation et d’accompagnement pédagogique.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Outre son pouvoir de contrôle et de sanction, quelle autre mission essentielle l’ARTCI remplit-elle auprès des entreprises et des citoyens ?',
              options: [
                'Une mission pédagogique de sensibilisation et d’accompagnement vers la conformité',
                'La commercialisation directe de téléphones mobiles',
                'La rédaction des arrêts de la Cour suprême',
                'La gestion des droits d’auteur musicaux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’ARTCI associe régulation/contrôle et rôle pédagogique (sensibilisation du grand public et accompagnement des entreprises dans leur mise en conformité).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Saisine prioritaire',
            stepTheme: 'Stratégie face à une violation',
            stepTitle: 'Expliquer pourquoi la saisine de l’ARTCI est prioritaire en cas d’abus',
            paragraphText:
              'Face à une société qui revend illicitement des fichiers de données personnelles, la victime dispose de plusieurs options mais une seule est juridiquement prioritaire.\n• **Priorité à l’ARTCI** : autorité de contrôle spécialisée disposant d’experts informatiques, d’un pouvoir d’enquête rapide, de mise en demeure et de suspension immédiate du traitement litigieux.\n• **Complémentarité judiciaire** : l’action devant les tribunaux reste pleinement ouverte en complément pour obtenir des dommages-intérêts civils ou des condamnations pénales.\n• **Risque d’une campagne médiatique isolée** : dénoncer publiquement sans décision préalable ne bloque pas les serveurs et comporte un risque de diffamation si les faits sont mal formulés.',
            keyRule:
              'Face à une revente illicite de données : 1) Saisir l’ARTCI en priorité ; 2) Envisager l’action judiciaire en complément pour indemnisation/répression.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Une ONG découvre qu’une société de marketing revend sans accord les fichiers de ses abonnés. Quelle est la démarche juridiquement la plus pertinente en priorité ?',
              options: [
                'Se contenter d’envoyer des messages anonymes sur les réseaux sociaux',
                'Saisir prioritairement l’ARTCI (autorité de contrôle spécialisée dotée de pouvoirs d’enquête, de mise en demeure et de sanction), tout en gardant l’action judiciaire possible en complément',
                'Attendre cinq ans pour voir si les plaintes s’arrêtent',
                'Acheter ses propres fichiers à la société fautive',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La saisine de l’ARTCI est la voie prioritaire et la plus efficace pour faire enquêter et cesser rapidement un traitement illicite, sans exclure un recours judiciaire complémentaire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Procédure ARTCI',
            stepTheme: 'Du contrôle à la sanction',
            stepTitle: 'Suivre les étapes du contrôle et de la sanction par l’ARTCI',
            paragraphText:
              'L’intervention de l’ARTCI suit une procédure structurée et respectueuse des droits de la défense avant d’aboutir à une sanction.\n• **Étape 1 — Déclenchement** : plainte d’un usager/ONG, signalement d’une fuite ou contrôle d’initiative de l’ARTCI.\n• **Étape 2 — Enquête et constat** : vérification sur pièces ou sur place (accès aux locaux et systèmes informatiques).\n• **Étape 3 — Mise en demeure** : injonction adressée à l’entreprise de corriger ses manquements dans un délai fixé.\n• **Étape 4 — Sanctions** : si l’entreprise ne se conforme pas (ou si le manquement est grave), prononcé de sanctions administratives (avertissement, suspension/retrait d’autorisation, amende) et saisine éventuelle du Procureur de la République.',
            visualSchema: {
              type: 'flowchart',
              title: 'Procédure de contrôle, mise en demeure et sanction de l’ARTCI',
              caption: 'Gradation des pouvoirs administratifs et articulation avec la justice pénale.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    kind: 'start',
                    label: '1. Plainte d’un usager / ONG ou contrôle d’initiative',
                    sublabel: 'Signalement d’une collecte abusive, fuite ou revente de fichiers',
                    color: 'blue',
                  },
                  {
                    kind: 'process',
                    label: '2. Enquête et audit technique de l’ARTCI',
                    sublabel: 'Contrôle sur pièces ou sur place (accès aux systèmes informatiques)',
                    color: 'violet',
                  },
                  {
                    kind: 'decision',
                    label: '3. Mise en demeure de se conformer sous délai',
                    sublabel: 'L’entreprise corrige-t-elle rapidement ses manquements ?',
                    color: 'orange',
                    branchLabel: 'OUI',
                    branchTarget: 'Clôture du dossier après vérification de conformité',
                  },
                  {
                    kind: 'process',
                    label: '4. Sanctions administratives de l’ARTCI',
                    sublabel: 'Avertissement, suspension/interdiction du traitement, amende administrative',
                    color: 'orange',
                  },
                  {
                    kind: 'end',
                    label: '5. Si infraction pénale grave : saisine du Procureur',
                    sublabel: 'Poursuites pénales devant les juridictions répressives (+ PLCC)',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'Chaîne ARTCI : Plainte/Contrôle → Enquête technique → Mise en demeure → Sanction administrative (suspension/amende) → Procureur si infraction pénale.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle étape intermédiaire l’ARTCI utilise-t-elle généralement après constatation d’un manquement pour enjoindre une entreprise de corriger sa pratique dans un délai précis ?',
              options: [
                'La mise en demeure',
                'La condamnation immédiate à la prison à vie',
                'La confiscation du bâtiment par la mairie',
                'La suppression de tous les comptes bancaires des clients',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La mise en demeure est l’acte par lequel l’ARTCI ordonne formellement à un responsable de traitement de se mettre en conformité dans un délai déterminé avant sanctions plus lourdes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Notification de violation',
            stepTheme: 'Réagir à une fuite de données',
            stepTitle: 'Respecter l’obligation de notifier toute violation de données à l’ARTCI',
            paragraphText:
              'Lorsqu’une entreprise subit un piratage ou une perte de fichiers clients, cacher l’incident aggrave considérablement sa responsabilité juridique.\n• **Obligation de notification** : tout responsable de traitement doit notifier à l’ARTCI, dans les plus brefs délais, toute violation de données à caractère personnel (fuite, accès non autorisé, destruction accidentelle).\n• **Contenu de la notification** : nature de l’incident, volume et catégories de données touchées, conséquences probables et mesures techniques prises pour contenir la faille.\n• **Exemple pratique** : après une attaque par rançongiciel sur sa base clients, une société télécom ou un hôpital doit alerter rapidement l’ARTCI et informer les personnes exposées à un risque élevé.',
            keyRule:
              'Dissimuler une fuite de données est une faute aggravante : le responsable doit notifier l’ARTCI dans les plus brefs délais et sécuriser le système.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Que doit faire un responsable de traitement lorsqu’il découvre qu’une intrusion informatique a entraîné la fuite de sa base de données clients ?',
              options: [
                'Cacher totalement l’incident pour protéger son image commerciale',
                'Notifier la violation de données à l’ARTCI dans les plus brefs délais et déployer des mesures correctives de sécurité',
                'Accuser publiquement ses clients sans vérifier ses serveurs',
                'Attendre la fin de l’année fiscale pour en parler',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les responsables de traitement ont l’obligation légale de notifier toute violation de données à l’ARTCI dans les plus brefs délais afin de limiter les dommages pour les citoyens.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Décision 2015-008',
            stepTheme: 'Mesures minimales de sécurité ARTCI',
            stepTitle: 'Connaître le rôle de la Décision n° 2015-008/ARTCI/CD sur la sécurité',
            paragraphText:
              'Pour aider les entreprises et administrations à savoir exactement ce qu’elle attend sur le plan technique, l’ARTCI précise les exigences de la Loi n° 2013-450 par des décisions réglementaires.\n• **Article 37 de la Loi n° 2013-450** : impose à tout responsable de traitement de garantir la sécurité des données personnelles contre la destruction, la perte, l’altération ou l’accès non autorisé.\n• **Décision n° 2015-008/ARTCI/CD** : détaille les mesures minimales de sécurité techniques et organisationnelles attendues (contrôle d’accès, mots de passe forts, chiffrement, journalisation, sauvegardes, audits).\n• **Portée pratique** : en cas de contrôle après un incident, l’ARTCI vérifie la conformité concrète à ces standards minimaux.',
            keyRule:
              'Loi 2013-450 (art. 37) = obligation légale de sécurité ; Décision n° 2015-008/ARTCI/CD = socle des mesures minimales de sécurité attendues.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Quel est l’objet spécifique de la Décision n° 2015-008/ARTCI/CD en complément de l’article 37 de la Loi n° 2013-450 ?',
              options: [
                'Fixer le prix des téléphones vendus en boutique',
                'Préciser les mesures minimales de sécurité techniques et organisationnelles attendues des responsables de traitement',
                'Autoriser le partage libre des mots de passe entre employés',
                'Supprimer les formalités auprès de l’ARTCI',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Décision n° 2015-008/ARTCI/CD opérationnalise l’article 37 de la Loi n° 2013-450 en définissant les mesures minimales de sécurité exigées.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limites des pouvoirs ARTCI',
            stepTheme: 'Administratif vs Judiciaire',
            stepTitle: 'Distinguer les sanctions administratives (ARTCI) des peines pénales (Juge)',
            paragraphText:
              'Un piège fréquent en examen consiste à confondre le pouvoir de sanction de l’ARTCI avec celui d’un tribunal pénal.\n• **Pouvoir de l’ARTCI (administratif)** : avertissement, mise en demeure, suspension/retrait d’autorisation, interdiction de traitement et amende administrative — JAMAIS de peine de prison.\n• **Pouvoir du juge judiciaire (pénal et civil)** : seul le tribunal répressif prononce des peines d’emprisonnement et amendes pénales (sur saisine du Procureur), et seul le juge civil accorde des dommages-intérêts aux victimes.\n• **Exemple pratique** : si une société de téléphonie collecte des coordonnées GPS sans information, l’ARTCI peut suspendre le traitement et imposer une amende administrative, tout en saisissant le Procureur si une infraction pénale est caractérisée.',
            keyRule:
              'ARTCI = sanctions administratives (suspension, retrait, amende administrative) ; Tribunal = prison, amende pénale et dommages-intérêts aux victimes.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Parmi ces sanctions, laquelle l’ARTCI ne peut-elle JAMAIS prononcer elle-même directement ?',
              options: [
                'Une mise en demeure de mettre le traitement en conformité',
                'La suspension d’un traitement illicite de données',
                'Une peine d’emprisonnement ferme contre le dirigeant de l’entreprise',
                'Un avertissement administratif',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’ARTCI est une autorité administrative indépendante : seule une juridiction pénale peut prononcer une peine privative de liberté (emprisonnement).',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique télécom',
            stepTheme: 'Collecte GPS clandestine',
            stepTitle: 'Résoudre le cas d’une collecte GPS sans information des abonnés',
            paragraphText:
              'Appliquons l’ensemble du chapitre à un cas concret ivoirien : une société de téléphonie collecte secrètement les coordonnées GPS de ses clients sans les en informer.\n• **Qualification des données** : les coordonnées GPS permettent d’identifier les déplacements et habitudes d’une personne physique → données à caractère personnel relevant de la vie privée.\n• **Principes violés** : défaut de transparence/information, absence de consentement libre et éclairé, et collecte déloyale/disproportionnée.\n• **Réaction de l’ARTCI** : après contrôle, l’ARTCI peut exiger la suspension immédiate du traitement et imposer une sanction pécuniaire (amende), sans préjudice des recours des clients lésés.',
            keyRule:
              'Collecte cachée de coordonnées GPS = violation frontale de la Loi n° 2013-450 exposant l’opérateur à la suspension du traitement et à une amende de l’ARTCI.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p3_q7',
              type: 'mcq',
              prompt:
                'Une société de téléphonie collecte les coordonnées GPS de ses abonnés sans les en informer. Quelles mesures l’ARTCI peut-elle prendre ?',
              options: [
                'Aucune, car les opérateurs télécoms sont au-dessus de la Loi n° 2013-450',
                'Exiger la suspension du traitement illicite et imposer une sanction administrative (amende), après enquête',
                'Encourager la société à revendre ces données pour rentabiliser son réseau',
                'Transférer le dossier au BURIDA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les coordonnées GPS sont des données personnelles protégées : leur collecte clandestine viole la Loi n° 2013-450 et autorise l’ARTCI à suspendre le traitement et sanctionner l’opérateur.',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 4 : CYBERSÉCURITÉ, CYBERCRIMINALITÉ (LOI 2013-451) & E-COMMERCE (LOI 2013-546)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch4',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 — Cybersécurité, cybercriminalité (Loi 2013-451) et contrats électroniques (Loi 2013-546)',
    summary:
      'Sécurité des systèmes d’information (triptyque CIA : Confidentialité, Intégrité, Disponibilité), distinction juridique entre Sécurité (Art. 37) et Confidentialité (Art. 3), responsabilités civile, pénale et disciplinaire, infractions STAD de la Loi n° 2013-451 (Art. 25, Art. 29) et régime des contrats électroniques et du droit de rétractation (Loi n° 2013-546).',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch4_p1',
        order: 1,
        title: 'Sécurité des systèmes d’information (Triptyque CIA) et distinction Sécurité vs Confidentialité',
        summary:
          'Maîtriser la notion de Système d’Information (SI), les 3 piliers CIA (Confidentialité, Intégrité, Disponibilité), la distinction juridique rigoureuse entre Sécurité et Confidentialité, et les mesures techniques et organisationnelles obligatoires.',
        conceptExplanation:
          'La cybersécurité n’est pas un simple choix technique laissé à la discrétion des informaticiens : c’est une OBLIGATION LÉGALE visant à protéger les systèmes d’information (SI) — ensembles organisés de matériels, logiciels, données, procédures et personnel — contre les attaques, intrusions ou pertes.\n\n1) Le triptyque CIA (les 3 piliers de la sécurité des SI) :\n• C — Confidentialité (Confidentiality) : garantir que l’accès aux informations reste strictement réservé aux seules personnes autorisées (mots de passe, chiffrement, habilitations).\n• I — Intégrité (Integrity) : garantir que les données ne soient ni falsifiées, ni altérées, ni détruites de manière non autorisée.\n• A — Disponibilité (Availability) : garantir que le système et les données restent accessibles et fonctionnels quand les utilisateurs légitimes en ont besoin (sauvegardes, pare-feu, continuité).\n2) Distinction juridique fondamentale — Sécurité vs Confidentialité : la SÉCURITÉ est la finalité globale (ensemble des mesures techniques, organisationnelles et juridiques garantissant C + I + A — Loi n° 2013-450 art. 37 et Décision n° 2015-008/ARTCI/CD), tandis que la CONFIDENTIALITÉ est l’une des composantes de la sécurité (obligation de secret et de non-divulgation — Loi n° 2013-450 art. 3). Un employé qui accède sans autorisation à la base clients d’une société télécom réalise une DOUBLE violation : atteinte à la sécurité (faille de contrôle d’accès engageant l’entreprise civilement) ET atteinte à la confidentialité (consultation illégale engageant l’employé disciplinairement et pénalement).\n3) Mesures recommandées : chiffrement, authentification forte (2FA), mises à jour régulières, pare-feu/antivirus, sauvegardes testées, formation du personnel (anti-phishing) et audit annuel.',
        formulas: [
          {
            name: 'Relation logique Sécurité / Triptyque CIA',
            formula: 'Sécurité des SI (Art. 37) = Confidentialité (Art. 3)  +  Intégrité  +  Disponibilité',
            note: 'La sécurité englobe la confidentialité, mais ne s’y limite pas : une perte de dossiers faute de sauvegarde viole la disponibilité et donc la sécurité.',
          },
        ],
        keyRule:
          'La sécurité informatique est une obligation légale (Loi 2013-450, art. 37). Sécurité = finalité globale (CIA) ; Confidentialité = pilier spécifique (accès réservé aux personnes habilitées, art. 3).',
        workedExample: {
          title: 'Analyser l’accès non autorisé d’un employé à la base clients d’une société télécom',
          statement:
            'Dans une entreprise ivoirienne de télécommunications, un employé non habilité consulte sans autorisation la base de données clients (noms, numéros, consommations). S’agit-il d’une atteinte à la sécurité, à la confidentialité, ou aux deux ?',
          methodSteps: [
            '1. Caractériser l’atteinte à la SÉCURITÉ (Loi 2013-450 art. 37 & Décision ARTCI 2015-008) : le système n’a pas empêché un accès non autorisé → faille des mesures de contrôle d’accès engageant la responsabilité civile de l’entreprise.',
            '2. Caractériser l’atteinte à la CONFIDENTIALITÉ (Loi 2013-450 art. 3 & Code pénal / Loi 2013-451) : l’employé a consulté sans habilitation des informations personnelles confidentielles.',
            '3. Conclure sur le cumul des responsabilités : responsabilité civile de l’entreprise (défaut de sécurité) + responsabilité disciplinaire et pénale de l’employé fautif.',
          ],
          conclusion:
            'Cet incident constitue une DOUBLE violation simultanée : atteinte à la sécurité du système et atteinte à la confidentialité des données.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Système d’Information',
            stepTheme: 'Obligation légale de cybersécurité',
            stepTitle: 'Définir un Système d’Information et l’obligation légale de sécurité',
            paragraphText:
              'Sécuriser un réseau d’entreprise ou d’hôpital ne dépend pas du bon vouloir du service informatique : la loi en fait une exigence contraignante.\n• **Système d’Information (SI)** : ensemble organisé de ressources (matériels, logiciels, données, procédures et personnel) permettant de collecter, traiter, stocker et diffuser l’information.\n• **Obligation légale** : tout responsable doit garantir la confidentialité, l’intégrité et la disponibilité des données, empêcher les accès non autorisés et notifier toute violation à l’ARTCI.\n• **Exemple concret** : un hôpital ivoirien perdant des dossiers patients après une cyberattaque faute de sauvegardes et de pare-feu engage la responsabilité de son organisation et de son service informatique.',
            keyRule:
              'La cybersécurité est une obligation juridique (et pas uniquement un choix technique) : l’absence de pare-feu ou de sauvegardes constitue une négligence fautive.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Un hôpital perd les dossiers médicaux de ses patients lors d’une attaque informatique parce qu’il n’avait mis en place ni pare-feu ni sauvegardes régulières. Quelle analyse juridique s’impose ?',
              options: [
                'Aucune responsabilité n’est engagée car la sécurité informatique est purement facultative',
                'La responsabilité de l’établissement est engagée pour manquement à son obligation légale de sécurité des systèmes d’information et des données',
                'Seuls les patients sont responsables de ne pas avoir gardé de copie papier',
                'Le problème relève uniquement du droit d’auteur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’absence de mesures élémentaires (pare-feu, sauvegardes) caractérise un manquement à l’obligation légale de sécurité prévue par la Loi n° 2013-450.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Triptyque CIA',
            stepTheme: 'Confidentialité, Intégrité, Disponibilité',
            stepTitle: 'Maîtriser les trois piliers CIA de la cybersécurité',
            paragraphText:
              'Toute politique sérieuse de cybersécurité vise à protéger simultanément trois propriétés complémentaires résumées par le triptyque international CIA.\n• **C — Confidentialité** : seules les personnes dûment autorisées peuvent lire ou consulter l’information (ex. mot de passe fort, chiffrement, contrôle d’accès).\n• **I — Intégrité** : les données restent exactes et complètes, protégées contre toute modification ou suppression illicite (ex. empreinte cryptographique, journalisation).\n• **A — Disponibilité** : le système et les fichiers restent accessibles sans interruption aux utilisateurs légitimes (ex. sauvegardes testées, protection anti-DDoS).\n• **Cycle de protection** : prévention technique, formation humaine, audit annuel et réponse rapide aux incidents.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Le triptyque CIA et la gouvernance continue de la cybersécurité',
              caption: 'La sécurité globale combine les trois piliers techniques et des audits réguliers.',
              cycle: {
                centerLabel: 'Sécurité SI',
                centerSublabel: 'Triptyque CIA',
                nodes: [
                  {
                    title: 'Confidentialité (C)',
                    subtitle: 'Chiffrement, 2FA, accès restreint',
                    color: 'blue',
                  },
                  {
                    title: 'Intégrité (I)',
                    subtitle: 'Anti-falsification, logs, hash',
                    color: 'violet',
                  },
                  {
                    title: 'Disponibilité (A)',
                    subtitle: 'Sauvegardes testées, pare-feu',
                    color: 'green',
                  },
                  {
                    title: 'Audit & Formation',
                    subtitle: 'Sensibilisation phishing + audit annuel',
                    color: 'orange',
                  },
                ],
              },
            },
            keyRule:
              'CIA = Confidentialité (accès réservé) + Intégrité (données non modifiées) + Disponibilité (accès maintenu face aux pannes et attaques).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Lorsqu’un rançongiciel chiffre les serveurs d’une entreprise et empêche tout le personnel d’accéder aux fichiers de travail pendant une semaine, quel pilier du triptyque CIA est le plus directement frappé ?',
              options: [
                'La Disponibilité (A — Availability)',
                'Uniquement le droit de rétractation',
                'La portabilité commerciale',
                'L’originalité artistique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Rendre les systèmes et données inaccessibles aux utilisateurs légitimes porte directement atteinte au pilier Disponibilité (A) du triptyque CIA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Sécurité vs Confidentialité',
            stepTheme: 'Distinction Art. 37 et Art. 3',
            stepTitle: 'Distinguer juridiquement atteinte à la sécurité et atteinte à la confidentialité',
            paragraphText:
              'Dans le langage courant, on confond souvent « sécurité » et « confidentialité » ; en droit du numérique, leur distinction est précise et très souvent testée en examen.\n• **Sécurité (Loi 2013-450 art. 37 & Décision ARTCI 2015-008)** : finalité globale englobant toutes les mesures techniques et organisationnelles protégeant le système (C + I + A).\n• **Confidentialité (Loi 2013-450 art. 3)** : composante spécifique de la sécurité réservant la consultation des données aux seules personnes habilitées.\n• **Double violation** : si un employé accède sans autorisation au fichier clients, il y a à la fois atteinte à la sécurité (contrôle d’accès défaillant de l’entreprise) ET atteinte à la confidentialité (consultation illégale par l’employé).',
            keyRule:
              'Sécurité = le tout (C + I + A, art. 37) ; Confidentialité = une partie (accès réservé, art. 3). Un accès interne illégal viole LES DEUX à la fois.',
            konanTip:
              'Retiens l’image : la sécurité est la maison entière (serrures, toit, coffre-fort), la confidentialité est le rideau qui empêche les non-autorisés de regarder à l’intérieur.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Un employé d’une société télécom accède sans autorisation à la base de données clients. Juridiquement, s’agit-il d’une atteinte à la sécurité, à la confidentialité, ou aux deux ?',
              options: [
                'Uniquement à la confidentialité, jamais à la sécurité',
                'Uniquement à la sécurité, jamais à la confidentialité',
                'Aux deux simultanément : faille de sécurité du système (art. 37) et violation de la confidentialité des données (art. 3)',
                'À aucune des deux puisqu’il travaille dans l’entreprise',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’accès non autorisé révèle une défaillance des protections internes (atteinte à la sécurité, art. 37) et constitue une consultation illicite de données privées (atteinte à la confidentialité, art. 3).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Mesures de protection',
            stepTheme: 'Hygiène cyber en entreprise et université',
            stepTitle: 'Mettre en place les mesures techniques et organisationnelles de base',
            paragraphText:
              'La majorité des cyberincidents évitables résultent de failles simples : mots de passe faibles, logiciels non mis à jour ou absence de sensibilisation humaine.\n• **Mesures techniques essentielles** : chiffrement des données sensibles, authentification forte (mots de passe robustes + double facteur 2FA), mises à jour régulières des logiciels/antivirus, pare-feu et sauvegardes régulières et testées.\n• **Mesures organisationnelles** : restriction des droits d’accès (principe du moindre privilège), formation continue du personnel/étudiants contre le phishing et audit de sécurité annuel.\n• **Exemple pratique** : pour sécuriser un SI universitaire, trois mesures immédiates suffisent déjà à réduire drastiquement le risque : mises à jour régulières, mots de passe sécurisés et sensibilisation au phishing.',
            keyRule:
              'La cybersécurité efficace associe toujours 2 volets : Technique (chiffrement, 2FA, mises à jour, sauvegardes) + Humain/Organisationnel (formation anti-phishing, audits).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Quel trio de mesures simples permet immédiatement de renforcer concrètement la sécurité d’un système d’information universitaire ou d’une PME ?',
              options: [
                'Afficher les mots de passe sur un tableau, désactiver l’antivirus et supprimer les sauvegardes',
                'Mettre à jour régulièrement les logiciels/antivirus, restreindre les accès par mots de passe sécurisés (2FA) et sensibiliser les utilisateurs aux bonnes pratiques (phishing, sauvegardes)',
                'Utiliser un seul compte administrateur partagé par tous les utilisateurs',
                'Débrancher définitivement tous les ordinateurs du pays',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mises à jour régulières, contrôle d’accès par authentification forte et sensibilisation humaine aux risques (phishing, sauvegardes) constituent le socle opérationnel de la cybersécurité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Double responsabilité',
            stepTheme: 'Entreprise vs Employé fautif',
            stepTitle: 'Répartir les responsabilités lors d’une faille interne en entreprise',
            paragraphText:
              'Lorsqu’un salarié consulte ou détourne illégalement une base de données interne, le droit ne frappe pas uniquement un seul acteur : chacun répond de sa propre faute.\n• **Responsabilité de l’entreprise (employeur)** : responsabilité civile (et administrative devant l’ARTCI) si elle a manqué à son obligation de sécurité en laissant des accès non cloisonnés ou des mots de passe faibles.\n• **Responsabilité de l’employé fautif** : sanction disciplinaire interne (pouvant aller jusqu’au licenciement pour faute lourde) ET responsabilité pénale pour accès illégal à des données informatiques.\n• **Exemple pratique** : un agent bancaire qui consulte le compte d’une célébrité sans lien avec son travail encourt licenciement et poursuites pénales, tandis que la banque peut être sanctionnée si ses contrôles d’accès étaient inexistants.',
            keyRule:
              'En cas de faille interne : l’employeur répond de son défaut de sécurité (civil/ARTCI) ; l’employé répond de son acte illicite (disciplinaire + pénal).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Lorsqu’un salarié profite de l’absence de restriction d’accès pour consulter illégalement les dossiers clients de son entreprise, quelles responsabilités peuvent être engagées ?',
              options: [
                'Aucune responsabilité, car tout reste à l’intérieur de l’entreprise',
                'La responsabilité civile/administrative de l’entreprise (manquement à la sécurité) et la responsabilité disciplinaire et pénale du salarié fautif',
                'Uniquement la responsabilité des clients',
                'Uniquement celle du fabricant des ordinateurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’entreprise répond de l’insuffisance de ses protections (obligation de sécurité), tandis que l’employé répond personnellement sur les plans disciplinaire et pénal de son accès illégal.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Audit & Continuité',
            stepTheme: 'Tester les sauvegardes',
            stepTitle: 'Comprendre l’importance des sauvegardes testées et de l’audit annuel',
            paragraphText:
              'Disposer d’une sauvegarde sur le même serveur que les données actives ou ne jamais vérifier si elle peut être restaurée est une erreur fatale lors d’une attaque par rançongiciel.\n• **Sauvegardes régulières et testées** : copies chiffrées, externalisées ou hors-ligne (règle du 3-2-1), régulièrement testées pour garantir une reprise d’activité réelle.\n• **Audit de sécurité annuel** : évaluation indépendante des vulnérabilités techniques et organisationnelles afin de corriger les failles avant qu’un attaquant ne les exploite.\n• **Exemple pratique** : une PME qui réalise des sauvegardes hors-ligne chaque soir peut restaurer son système en quelques heures sans jamais payer de rançon.',
            keyRule:
              'Une sauvegarde non testée n’est pas une sauvegarde : la résilience légale et technique repose sur des copies sécurisées, isolées et vérifiées, plus des audits périodiques.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi les bonnes pratiques de cybersécurité exigent-elles des sauvegardes régulières, isolées et testées couplées à un audit annuel ?',
              options: [
                'Pour augmenter artificiellement la consommation électrique des serveurs',
                'Pour garantir concrètement la disponibilité et l’intégrité des données en cas de panne ou d’attaque (ex. rançongiciel) et détecter les failles en amont',
                'Pour rendre les mots de passe publics',
                'Pour éviter d’avoir à déclarer l’entreprise au RCCM',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les sauvegardes testées garantissent la continuité d’activité (Disponibilité) et l’audit annuel permet de corriger proactivement les vulnérabilités avant un sinistre.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch4_p2',
        order: 2,
        title: 'Cybercriminalité (Loi n° 2013-451) et responsabilités civile, pénale et disciplinaire',
        summary:
          'Distinguer clairement responsabilité civile (réparer le dommage), responsabilité pénale (punir l’infraction) et responsabilité disciplinaire, et maîtriser les infractions clés de la Loi n° 2013-451 (accès frauduleux Art. 25, falsification de données Art. 29, usurpation d’identité).',
        conceptExplanation:
          'Lorsqu’un comportement numérique cause un dommage ou viole l’ordre public, le droit répond par trois ordres de responsabilité qui peuvent se cumuler pour un même fait :\n\n1) Responsabilité CIVILE : son objectif est de RÉPARER le préjudice subi par la victime par le versement de dommages et intérêts (ex. une entreprise divulgue accidentellement des données clients → atteinte à la vie privée → indemnisation du préjudice moral et matériel).\n2) Responsabilité PÉNALE : son objectif est de PUNIR l’auteur d’une infraction prévue par la loi (peines d’emprisonnement et d’amende). En Côte d’Ivoire, la Loi n° 2013-451 du 19 juin 2013 relative à la lutte contre la cybercriminalité réprime notamment :\n• L’accès frauduleux à un système d’information (Article 25) ; \n• L’atteinte à l’intégrité des données et la falsification ou suppression frauduleuse de données (Article 29) ; \n• L’entrave au fonctionnement d’un système d’information ; \n• L’usurpation d’identité numérique et l’escroquerie informatique.\n3) Responsabilité DISCIPLINAIRE : sanction interne prononcée par un employeur (avertissement, mise à pied, licenciement) ou un établissement universitaire (exclusion) pour violation du règlement intérieur.\n\nExemple d’application : un étudiant qui pirate le réseau Wi-Fi de son établissement pour modifier ses notes commet un accès frauduleux (Art. 25) et une falsification de données (Art. 29), encourant cumulativement prison/amende (pénal), dommages-intérêts éventuels (civil) et exclusion universitaire (disciplinaire).',
        formulas: [
          {
            name: 'Distinction des 3 responsabilités en droit du numérique',
            formula: 'Civile = Réparer le dommage (dommages-intérêts)  |  Pénale = Punir l’infraction (prison / amende)  |  Disciplinaire = Sanction interne (licenciement / exclusion)',
            note: 'Ces trois responsabilités sont indépendantes et peuvent se cumuler pour un même acte cybercriminel.',
          },
        ],
        keyRule:
          'Responsabilité civile = RÉPARER ; Responsabilité pénale = PUNIR (Loi 2013-451 : Art. 25 accès frauduleux, Art. 29 falsification de données) ; Responsabilité disciplinaire = sanction interne.',
        workedExample: {
          title: 'Analyser juridiquement le piratage d’un réseau universitaire pour modifier des notes',
          statement:
            'Un étudiant s’introduit sans autorisation sur le réseau informatique de son université afin d’accéder au serveur de scolarité et de modifier ses notes d’examen.',
          methodSteps: [
            '1. Qualifier la première infraction pénale : pénétrer sans droit dans le système informatique constitue un accès frauduleux à un système d’information (Article 25 de la Loi n° 2013-451).',
            '2. Qualifier la seconde infraction pénale : altérer les notes enregistrées constitue une falsification / modification frauduleuse de données (Article 29 de la Loi n° 2013-451).',
            '3. Identifier le cumul des sanctions : sanctions pénales (peines d’emprisonnement et d’amende), sanctions disciplinaires (exclusion définitive de l’établissement) et éventuelle réparation civile.',
          ],
          conclusion:
            'Un tel acte n’est jamais une simple « blague informatique » : il cumule de lourdes sanctions pénales et disciplinaires.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Civil vs Pénal',
            stepTheme: 'Réparer vs Punir',
            stepTitle: 'Distinguer responsabilité civile et responsabilité pénale dans le numérique',
            paragraphText:
              'Savoir opposer la finalité de la responsabilité civile et celle de la responsabilité pénale est un fondamental absolu de tout cours de droit.\n• **Responsabilité civile** : vise à RÉPARER un dommage causé à une victime (même par simple négligence ou imprudence, sans intention malveillante) via le versement de dommages et intérêts.\n• **Responsabilité pénale** : vise à PUNIR un comportement expressément interdit par la loi (infraction) au nom de la société, par des peines d’emprisonnement et/ou d’amende.\n• **Exemple pratique** : une entreprise qui divulgue accidentellement par négligence un fichier clients engage sa responsabilité civile (réparation du préjudice moral des clients) ; le pirate qui a volé ce fichier engage sa responsabilité pénale.',
            keyRule:
              'Retiens l’opposition en deux verbes : Civil = RÉPARER le préjudice (dommages-intérêts) ; Pénal = PUNIR l’infraction (prison/amende).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle est la différence essentielle entre la responsabilité civile et la responsabilité pénale en droit du numérique ?',
              options: [
                'La responsabilité civile punit par la prison tandis que la responsabilité pénale verse des dommages-intérêts',
                'La responsabilité civile vise à réparer un dommage subi par une victime (dommages-intérêts), tandis que la responsabilité pénale vise à punir l’auteur d’une infraction (amende, emprisonnement)',
                'La responsabilité pénale s’applique uniquement aux entreprises et jamais aux individus',
                'Il n’existe aucune différence entre les deux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La responsabilité civile a une fonction réparatrice (indemniser la victime), alors que la responsabilité pénale a une fonction répressive et dissuasive (sanctionner l’infraction).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Infractions STAD',
            stepTheme: 'Loi n° 2013-451',
            stepTitle: 'Maîtriser le tableau des principales infractions de la Loi n° 2013-451',
            paragraphText:
              'La Loi n° 2013-451 sur la cybercriminalité incrimine précisément les atteintes aux systèmes de traitement automatisé de données (STAD) et aux personnes en ligne.\n• **Accès frauduleux (Art. 25)** : pénétrer ou se maintenir sans droit dans tout ou partie d’un système d’information (même sans rien voler ni casser).\n• **Falsification / suppression de données (Art. 29)** : introduire, modifier, altérer ou effacer frauduleusement des données dans un système.\n• **Atteinte à l’intégrité / entrave** : perturber ou bloquer le fonctionnement d’un réseau (virus, rançongiciel, attaque DDoS).\n• **Usurpation d’identité numérique** : utiliser l’identité ou les données d’identification d’un tiers en ligne pour troubler sa tranquillité ou porter atteinte à son honneur/patrimoine.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau des infractions clés (Loi n° 2013-451) et responsabilités cumulées',
              caption: 'Repères juridiques pour qualifier rapidement tout cyber-incident.',
              tableData: {
                headers: ['Infraction (Loi 2013-451)', 'Acte matériel typique', 'Responsabilités encourues'],
                rows: [
                  ['Accès frauduleux (Art. 25)', 'Pirater un Wi-Fi ou un serveur sans droit', 'Pénale (prison/amende) + Disciplinaire'],
                  ['Falsification / suppression (Art. 29)', 'Modifier des notes ou effacer des factures', 'Pénale + Civile + Disciplinaire'],
                  ['Atteinte à l’intégrité / entrave', 'DDoS, virus, blocage d’un SI', 'Pénale + Civile (pertes d’exploitation)'],
                  ['Usurpation d’identité numérique', 'Créer un faux profil pour escroquer/nuire', 'Pénale + Civile (préjudice moral)'],
                  ['Négligence de sécurité (entreprise)', 'Divulgation accidentelle faute de pare-feu', 'Civile (dommages-intérêts) + ARTCI'],
                ],
              },
            },
            keyRule:
              'Même le simple fait d’entrer sans autorisation dans un système informatique (Art. 25), sans rien modifier ni voler, est DÉJÀ une infraction pénale punie par la Loi n° 2013-451.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Un curieux contourne le mot de passe du réseau privé d’une entreprise pour « regarder les fichiers par curiosité », sans rien supprimer ni copier. A-t-il commis une infraction ?',
              options: [
                'Non, car il n’a rien effacé ni volé',
                'Oui, il a commis le délit d’accès frauduleux à un système d’information (Art. 25 de la Loi n° 2013-451)',
                'Non, tant qu’il reste connecté moins de cinq minutes',
                'Oui, uniquement s’il est majeur depuis plus de 10 ans',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’article 25 de la Loi n° 2013-451 réprime le simple fait d’accéder ou de se maintenir frauduleusement dans un système d’information, indépendamment de toute destruction ultérieure.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique Art. 25 & 29',
            stepTheme: 'Intrusion et modification de notes',
            stepTitle: 'Qualifier le cumul d’infractions lors d’une falsification de données',
            paragraphText:
              'Lorsqu’un attaquant ne se contente pas d’entrer dans un système mais modifie les données qu’il contient, plusieurs infractions distinctes se cumulent.\n• **Infraction 1 — Accès frauduleux (Art. 25)** : intrusion illicite dans le réseau informatique de l’établissement ou de l’entreprise.\n• **Infraction 2 — Falsification de données (Art. 29)** : modification volontaire des notes d’examen, d’un solde bancaire ou d’une fiche de paie.\n• **Triple sanction possible** : peine d’emprisonnement et amende (pénal), exclusion universitaire ou licenciement (disciplinaire) et réparation du préjudice causé à l’institution (civil).',
            keyRule:
              'Intrusion dans le réseau = Art. 25 (accès frauduleux) ; Modification des données = Art. 29 (falsification de données). Les deux qualifications s’additionnent.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Un étudiant pirate le réseau Wi-Fi de son établissement et modifie ses notes sur le serveur de scolarité. Quelles qualifications exactes de la Loi n° 2013-451 s’appliquent ?',
              options: [
                'Uniquement un manquement au droit de rétractation',
                'Accès frauduleux à un système d’information (Art. 25) et falsification de données (Art. 29), avec peines pénales et exclusion disciplinaire',
                'Uniquement une faute civile sans aucune poursuite pénale',
                'Une exception légale de test informatique étudiant',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’intrusion caractérise l’accès frauduleux (Art. 25) et la modification des notes caractérise la falsification de données (Art. 29), entraînant poursuites pénales et sanction disciplinaire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Usurpation d’identité',
            stepTheme: 'Faux profils et fraude',
            stepTitle: 'Réprimer l’usurpation d’identité numérique et l’escroquerie en ligne',
            paragraphText:
              'Créer un faux compte WhatsApp, Facebook ou LinkedIn avec la photo et le nom d’un dirigeant, d’un enseignant ou d’un proche pour soutirer de l’argent ou nuire à sa réputation est un fléau combattu par la loi.\n• **Usurpation d’identité numérique** : utilisation sans droit des éléments d’identification d’un tiers (nom, photo, voix, compte) en vue de troubler sa tranquillité ou celle d’autrui, ou de porter atteinte à son honneur ou à son patrimoine.\n• **Aggravation par escroquerie** : lorsque le faux profil sert à demander des transferts Mobile Money aux contacts de la victime, l’usurpation se cumule avec l’escroquerie informatique.\n• **Réflexe victime** : ne jamais payer, faire des captures avec URL/numéros, alerter ses contacts, signaler à la plateforme et porter plainte à la PLCC.',
            keyRule:
              'L’usurpation d’identité numérique (faux compte au nom d’autrui pour nuire ou escroquer) est un délit pénal sévèrement réprimé par la Loi n° 2013-451.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Un individu crée un faux compte WhatsApp utilisant la photo et le nom d’un directeur d’entreprise pour demander à ses collaborateurs d’effectuer un transfert Mobile Money d’urgence. De quelles infractions s’agit-il ?',
              options: [
                'D’une simple plaisanterie protégée par la liberté d’expression',
                'D’usurpation d’identité numérique et de tentative ou d’escroquerie informatique réprimées par la Loi n° 2013-451',
                'D’un exercice légitime du droit à la portabilité',
                'D’un litige relevant uniquement du BURIDA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Utiliser l’identité et la photo d’autrui en ligne pour tromper ses proches et extorquer des fonds cumule usurpation d’identité numérique et escroquerie informatique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Préjudice moral',
            stepTheme: 'Réparation civile de la vie privée',
            stepTitle: 'Comprendre la réparation civile d’une divulgation accidentelle de données',
            paragraphText:
              'Même en l’absence de hacker malveillant, une simple erreur humaine dans une entreprise peut ouvrir droit à indemnisation pour les victimes.\n• **Faute civile par négligence** : envoyer par erreur un tableau contenant les salaires ou dossiers médicaux des clients en copie visible à des tiers constitue un manquement fautif.\n• **Préjudice moral et matériel** : l’atteinte à la vie privée, le stress, le risque d’usurpation d’identité ou la perte financière constituent des dommages réparables.\n• **Conséquence** : le juge civil condamne l’entreprise négligente à verser des dommages et intérêts aux personnes lésées, indépendamment d’une éventuelle sanction administrative de l’ARTCI.',
            keyRule:
              'Une divulgation accidentelle par négligence n’exige aucune intention de nuire pour engager la responsabilité civile de l’entreprise et réparer le préjudice moral.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Une entreprise divulgue accidentellement sur Internet le fichier de ses clients suite à une mauvaise configuration de serveur. Quel type de responsabilité permet aux clients d’obtenir des dommages-intérêts pour atteinte à leur vie privée ?',
              options: [
                'La responsabilité civile (réparation du préjudice moral et matériel causé par la négligence)',
                'Uniquement la responsabilité disciplinaire des clients',
                'Aucune responsabilité puisque la divulgation était accidentelle',
                'La responsabilité maritime internationale',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En responsabilité civile, une simple négligence ayant causé un dommage (ici atteinte à la vie privée / préjudice moral) oblige l’entreprise à réparer par des dommages et intérêts.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Responsabilité disciplinaire',
            stepTheme: 'Sanctions internes',
            stepTitle: 'Articuler sanction disciplinaire interne et poursuites judiciaires',
            paragraphText:
              'Un salarié ou un étudiant surpris en train de commettre une infraction informatique croit parfois qu’une sanction interne (avertissement ou exclusion) le met à l’abri de la justice.\n• **Indépendance des procédures** : la procédure disciplinaire (menée par l’employeur ou l’université selon le règlement intérieur) est totalement indépendante de l’action pénale (menée par le Procureur de la République).\n• **Cumul légal** : un salarié licencié pour vol de base de données peut parfaitement être condamné en plus par le tribunal correctionnel à de la prison, une amende et des dommages-intérêts.\n• **Exemple pratique** : l’exclusion disciplinaire d’un étudiant fraudeur n’empêche nullement l’établissement de déposer plainte auprès de la PLCC.',
            keyRule:
              'Sanction disciplinaire (licenciement/exclusion) ≠ fin des poursuites : elle se cumule librement avec la justice pénale et la réparation civile.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Un employé est licencié pour avoir copié et revendu la base clients de son entreprise. Peut-il encore être poursuivi au pénal par le Procureur de la République ?',
              options: [
                'Non, le licenciement annule automatiquement toute poursuite pénale',
                'Oui, la responsabilité disciplinaire (licenciement) est indépendante et peut se cumuler avec la responsabilité pénale et civile',
                'Non, sauf s’il retrouve un autre emploi dans les 7 jours',
                'Oui, uniquement si l’entreprise est étrangère',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les responsabilités disciplinaire, civile et pénale poursuivent des buts distincts et se cumulent pleinement pour un même fait cybercriminel.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'methode',
            stepBadge: 'Réflexes anti-phishing',
            stepTheme: 'Prévention quotidienne',
            stepTitle: 'Adopter les bons réflexes juridiques et techniques face au phishing',
            paragraphText:
              'L’hameçonnage (phishing) — faux SMS de banque, faux e-mail de colis ou faux lien Mobile Money — est aujourd’hui le premier vecteur de cybercriminalité en Afrique de l’Ouest.\n• **Mécanisme** : tromper l’usager par ingénierie sociale pour lui soutirer ses identifiants, mots de passe ou codes OTP.\n• **Prévention** : vérifier l’URL exacte (attention au typosquatting), activer la double authentification (2FA), ne jamais communiquer un code PIN ou OTP par téléphone/SMS.\n• **Réaction en cas d’attaque** : faire opposition immédiatement auprès de la banque/opérateur Mobile Money, changer ses mots de passe, conserver les captures/numéros et déposer plainte auprès de la PLCC.',
            keyRule:
              'Aucune banque ni aucun opérateur légitime ne demande jamais votre code PIN ou code OTP par SMS/téléphone ; en cas de fraude, opposez immédiatement et saisissez la PLCC.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p2_q7',
              type: 'mcq',
              prompt:
                'En cas de réception d’un SMS suspect imitant votre opérateur Mobile Money et vous demandant de cliquer sur un lien pour « débloquer votre compte avec votre code PIN », quel est le bon réflexe ?',
              options: [
                'Saisir immédiatement son code PIN pour éviter la fermeture du compte',
                'Ne pas cliquer ni communiquer aucun code secret, vérifier via le canal officiel de l’opérateur et signaler la tentative d’hameçonnage (phishing)',
                'Transférer le lien à tous ses contacts pour qu’ils le testent',
                'Répondre au SMS en envoyant une photo de sa carte d’identité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Il s’agit d’une tentative classique de phishing : ne jamais cliquer ni livrer ses codes secrets, vérifier directement sur les canaux officiels et signaler l’arnaque.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch4_p3',
        order: 3,
        title: 'Contrats électroniques et protection du consommateur en e-commerce (Loi n° 2013-546)',
        summary:
          'Maîtriser les règles essentielles de la Loi n° 2013-546 relative aux transactions électroniques : validité de l’écrit et de la signature électronique, formation du contrat en ligne, droit de rétractation (7 jours / 30 jours et exceptions) et obligations du vendeur.',
        conceptExplanation:
          'En Côte d’Ivoire, le développement rapide de l’e-commerce repose sur un socle légal clair formé principalement par la Loi n° 2013-546 du 30 juillet 2013 relative aux transactions électroniques (complétée par la Loi n° 2013-450 sur les données personnelles et la Loi n° 2013-451 sur la cybercriminalité) :\n\n1) Validité du contrat et de l’écrit électroniques : un contrat conclu en ligne a la même force obligatoire qu’un contrat papier, et l’écrit électronique vaut preuve comme l’écrit papier dès que l’auteur est identifiable et l’intégrité garantie. La signature électronique fiable manifeste le consentement.\n2) Formation transparente du contrat en ligne : le cybercommerçant doit afficher clairement son identité (mentions légales), ses CGV, le prix total TTC et permettre au consommateur de vérifier et corriger sa commande avant la confirmation définitive (« double clic »), suivie d’un accusé de réception.\n3) Droit de rétractation protecteur du consommateur : le consommateur dispose d’un délai légal de 7 jours à compter de la réception du bien (ou de la conclusion du contrat de service) pour changer d’avis. Le vendeur a l’OBLIGATION de l’informer clairement de ce droit ; en cas de défaut d’information, la sanction légale porte le délai à 30 jours ! Exceptions légales : produits périssables, biens personnalisés sur mesure et téléchargements numériques déjà exécutés.',
        formulas: [
          {
            name: 'Règle du droit de rétractation en e-commerce (Côte d’Ivoire)',
            formula: 'Délai normal = 7 jours (dès réception du bien)  |  Défaut d’information du vendeur = Prolongation sanction à 30 jours',
            note: 'Exceptions : produits périssables, biens personnalisés/sur-mesure, téléchargements numériques.',
          },
        ],
        keyRule:
          'Contrat électronique = même valeur que le contrat papier (Loi 2013-546). Droit de rétractation = 7 jours (30 jours si le vendeur oublie d’informer), hors périssables, biens personnalisés et téléchargements numériques.',
        workedExample: {
          title: 'Calculer le délai de rétractation face à deux commandes en ligne différentes',
          statement:
            'Awa commande sur deux sites ivoiriens : (1) une robe standard sur un site qui oublie totalement de mentionner le droit de rétractation ; (2) un bouquet de fleurs fraîches et un e-book téléchargé immédiatement sur un second site.',
          methodSteps: [
            '1. Commande (1) — Robe standard sans information sur la rétractation : bien non personnalisé et non périssable ; puisque le vendeur a manqué à son obligation d’information, le délai légal de 7 jours est prolongé par sanction à 30 jours à compter de la réception.',
            '2. Commande (2) — Fleurs fraîches et e-book téléchargé : les fleurs sont des produits périssables et l’e-book est un téléchargement numérique → deux exceptions légales où le droit de rétractation ne s’applique pas.',
            '3. Conclusion : Awa peut retourner la robe sous 30 jours, mais ne peut pas exercer de rétractation sur les fleurs ni sur l’e-book déjà téléchargé.',
          ],
          conclusion:
            'Toujours vérifier dans l’ordre : (1) le produit entre-t-il dans une exception légale ? (2) le vendeur a-t-il informé le client (7 jours vs 30 jours) ?',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Loi n° 2013-546',
            stepTheme: 'Force obligatoire du contrat en ligne',
            stepTitle: 'Reconnaître la pleine valeur juridique du contrat et de l’écrit électroniques',
            paragraphText:
              'Un vendeur ou un acheteur ne peut jamais prétendre qu’une commande passée sur un site web « ne compte pas » sous prétexte qu’aucun papier n’a été signé.\n• **Principe d’équivalence** : selon la Loi n° 2013-546 du 30 juillet 2013, le contrat électronique engage les parties au même titre qu’un contrat papier, et l’écrit électronique a la même force probante dès que son auteur est identifiable et son intégrité garantie.\n• **Rôle de la signature électronique** : elle identifie le signataire et prouve son consentement aux obligations du contrat.\n• **Exemple pratique** : un bon de commande validé en ligne suivi d’un accusé de réception constitue un contrat juridiquement opposable devant le tribunal.',
            keyRule:
              'En vertu de la Loi n° 2013-546, un contrat conclu par voie électronique a exactement la même force obligatoire qu’un contrat signé sur papier.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle loi ivoirienne consacre la validité juridique des contrats conclus en ligne et l’équivalence entre écrit électronique et écrit papier ?',
              options: [
                'La Loi n° 2013-546 du 30 juillet 2013 relative aux transactions électroniques',
                'La Loi n° 2013-451 sur la cybercriminalité uniquement',
                'La Loi n° 2016-555 sur le droit d’auteur',
                'Aucune loi, seuls les contrats papier sont valables',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Loi n° 2013-546 encadre les transactions électroniques, le commerce en ligne et l’équivalence probante de l’écrit et de la signature électroniques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Droit de rétractation',
            stepTheme: 'Délai légal de 7 jours',
            stepTitle: 'Appliquer le délai légal de rétractation de 7 jours en e-commerce',
            paragraphText:
              'Lors d’un achat à distance, le consommateur ne découvre réellement le produit qu’en ouvrant le colis : le droit lui accorde donc une période de réflexion.\n• **Délai légal de principe** : 7 jours à compter de la réception physique du bien (ou de la conclusion du contrat pour une prestation de service).\n• **Effet du droit** : le consommateur peut retourner le produit sans avoir à justifier de motif particulier et obtenir le remboursement des sommes versées.\n• **Exemple pratique** : un acheteur qui reçoit un sac commandé en ligne le lundi et le trouve trop petit peut exercer son droit de rétractation jusqu’au lundi suivant.',
            keyRule:
              'Le délai légal de rétractation en e-commerce est de 7 jours à compter de la réception du bien (ou de la conclusion du contrat de service).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le délai légal de principe du droit de rétractation dont dispose un cyberconsommateur correctement informé en Côte d’Ivoire ?',
              options: [
                '24 heures uniquement',
                '7 jours à compter de la réception du bien ou de la conclusion du contrat de service',
                '6 mois systématiquement',
                'Aucun délai de rétractation n’existe en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsque le vendeur respecte son obligation d’information, le délai légal de rétractation est de 7 jours à compter de la réception du bien ou de la conclusion du contrat de service.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Sanction : 30 jours',
            stepTheme: 'Défaut d’information du vendeur',
            stepTitle: 'Appliquer la prolongation à 30 jours en cas d’oubli d’information',
            paragraphText:
              'Pour empêcher les vendeurs en ligne de cacher volontairement l’existence du droit de rétractation à leurs clients, le législateur a prévu une sanction directe et dissuasive.\n• **Obligation du vendeur** : informer clairement et préalablement le consommateur de l’existence et des modalités de son droit de rétractation (dans les CGV et la confirmation de commande).\n• **Sanction légale** : si le vendeur omet cette information obligatoire, le délai de rétractation est automatiquement prolongé de 7 jours à 30 jours !\n• **Exemple pratique** : un site marchand qui n’écrit rien sur la rétractation ne pourra pas refuser un retour demandé 20 jours après la livraison.',
            keyRule:
              'Défaut d’information sur le droit de rétractation = Sanction automatique : le délai passe de 7 jours à 30 jours !',
            konanTip:
              'Chiffres incontournables d’examen : 7 jours (règle normale) → 30 jours (sanction en cas d’absence d’information du vendeur).',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Un site marchand ivoirien omet d’informer ses clients de l’existence de leur droit de rétractation. Quelle sanction juridique s’applique au délai de rétractation ?',
              options: [
                'Le droit de rétractation est supprimé pour le client',
                'Le délai de rétractation est prolongé de 7 jours à 30 jours',
                'Le délai passe de 7 jours à 2 jours',
                'Le client doit payer le double du prix',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’omission de l’obligation d’information sur le droit de rétractation est sanctionnée par la prolongation du délai légal à 30 jours.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Exceptions légales',
            stepTheme: 'Biens exclus de la rétractation',
            stepTitle: 'Identifier les 3 grandes exceptions au droit de rétractation',
            paragraphText:
              'Certains biens ou services ne peuvent logiquement pas être retournés et remis en vente après livraison sans causer une perte injuste au vendeur.\n• **Exception 1 — Produits périssables** : denrées alimentaires fraîches, plats chauds livrés par Glovo, fleurs coupées.\n• **Exception 2 — Biens personnalisés / sur mesure** : vêtement confectionné aux mesures exactes du client, objet gravé à son nom.\n• **Exception 3 — Téléchargements numériques** : logiciels, e-books, films ou musiques numériques déjà téléchargés/activés avec l’accord du consommateur.\n• **Exemple pratique** : on peut renvoyer un livre papier standard sous 7 jours, mais pas un plat d’attiéké poisson braisé livré à midi.',
            keyRule:
              'Trois exceptions majeures à la rétractation : (1) Produits périssables, (2) Biens personnalisés sur mesure, (3) Téléchargements numériques.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Lequel de ces trois ensembles regroupe uniquement des exceptions légales au droit de rétractation en e-commerce ?',
              options: [
                'Téléphones standard, livres papier et sacs à dos',
                'Produits périssables, biens personnalisés sur mesure et téléchargements numériques',
                'Vêtements de série, chaussures standard et casques audio',
                'Téléviseurs, réfrigérateurs et ordinateurs portables standard',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les produits périssables, les biens personnalisés/sur-mesure et les contenus numériques téléchargés échappent par nature au droit de rétractation.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Double clic & Preuve',
            stepTheme: 'Sécuriser la commande en ligne',
            stepTitle: 'Vérifier la formation régulière du contrat (double clic et accusé de réception)',
            paragraphText:
              'Pour éviter qu’un consommateur ne soit piégé par un bouton trompeur ou une erreur de saisie, la conclusion du contrat électronique suit un formalisme protecteur.\n• **Double clic** : premier clic pour sélectionner/valider le panier → écran récapitulatif permettant de vérifier le prix TTC et de corriger toute erreur → second clic de confirmation définitive.\n• **Accusé de réception** : le vendeur doit confirmer sans délai la commande par voie électronique (e-mail ou SMS récapitulatif).\n• **Exemple pratique** : conserver son accusé de réception et sa preuve de paiement Mobile Money permet d’exiger l’exécution ou le remboursement en cas de non-livraison.',
            keyRule:
              'Un contrat en ligne régulièrement formé comporte : information préalable → 1er clic → vérification/correction → 2nd clic → accusé de réception.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Après le second clic de confirmation définitive d’une commande par le consommateur, quelle obligation immédiate pèse sur le vendeur en ligne ?',
              options: [
                'Effacer toute trace de la commande',
                'Adresser sans délai un accusé de réception électronique confirmant la commande',
                'Doubler les frais de livraison sans prévenir',
                'Publier le numéro bancaire du client sur la page d’accueil',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le vendeur doit accuser réception de la commande sans délai injustifié par voie électronique afin de fournir au consommateur la preuve de son engagement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Bilan complet',
            stepTheme: 'Maîtrise des 4 piliers introductifs',
            stepTitle: 'Mobiliser conjointement les 4 piliers de l’introduction au droit du numérique',
            paragraphText:
              'Tu disposes désormais d’une vision complète et opérationnelle de l’introduction au droit du numérique en Côte d’Ivoire.\n• **Pilier 1 (Sources & Spécificités)** : droit transversal, 4 sources (lois, normes techniques, jurisprudence, conventions), 4 spécificités (dématérialisation, instantanéité, territorialité, hybridité).\n• **Pilier 2 (Acteurs & Responsabilités)** : usagers, entreprises, plateformes ; Hébergeur (responsabilité limitée + retrait prompt) vs Éditeur (responsabilité pleine) ; mentions légales, CGU et CGV.\n• **Pilier 3 (Données personnelles — Loi 2013-450)** : 5 principes clés, droits de la personne concernée et saisine prioritaire de l’ARTCI.\n• **Pilier 4 (Cybersécurité & E-commerce — Lois 2013-451 & 2013-546)** : triptyque CIA, Sécurité vs Confidentialité, civil/pénal/disciplinaire, Art. 25/29 et rétractation 7/30 jours.',
            keyRule:
              'Pour tout examen d’Introduction au Droit du Numérique : identifie d’abord l’acteur (usager/hébergeur/éditeur), le texte (450/451/546), l’autorité (ARTCI/PLCC/Juge) et les sanctions applicables.',
            konanTip:
              'Relis tes schémas visuels avant l’épreuve : Pyramide des 4 sources · Matrice Hébergeur/Éditeur · Organigramme ARTCI · Cycle CIA · Tableau des infractions STAD.',
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Un étudiant achète un téléphone sur une boutique en ligne anonyme (sans mentions légales ni CGV), reçoit un faux colis, découvre que ses données ont été revendues et que son compte a été piraté. Quels textes ivoiriens de 2013 s’appliquent conjointement ?',
              options: [
                'Uniquement la Loi n° 2013-546',
                'Les trois lois conjointement : Loi 2013-546 (e-commerce/mentions légales), Loi 2013-450 (revente de données/ARTCI) et Loi 2013-451 (piratage/escroquerie/PLCC)',
                'Aucune loi car le vendeur était anonyme',
                'Uniquement le protocole HTTPS',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ce cas transversal mobilise simultanément les trois lois fondatrices de 2013 : transactions électroniques (546), protection des données personnelles (450) et cybercriminalité (451).',
            },
          },
        ],
      }),
    ],
  },
];
