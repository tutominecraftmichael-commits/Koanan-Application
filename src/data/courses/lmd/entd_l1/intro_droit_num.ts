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
  // CHAPITRE 1 : INTRODUCTION GÉNÉRALE AU DROIT DU NUMÉRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch1',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Introduction générale au droit du numérique : sources, spécificités et acteurs',
    summary:
      "Définition et caractère transversal du droit du numérique, typologie des quatre sources (lois, normes techniques, jurisprudence, conventions internationales), spécificités de l'espace numérique (dématérialisation, instantanéité, territorialité, hybridité) et acteurs clés.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Cours_Droit_Numerique_Dynamique_Complet.pptx (ENTD L1 L1 ENTD — Partie introductive)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch1_p1',
        order: 1,
        title: 'Définition, transversalité et quatre sources du droit du numérique',
        summary:
          "Comprendre la nature transversale du droit du numérique et savoir classer avec précision une règle dans ses quatre grandes sources : lois/règlements, normes techniques, jurisprudence et conventions internationales.",
        conceptExplanation:
          "Le droit du numérique désigne l'ensemble des règles juridiques encadrant les activités, les échanges et les comportements dans l'espace numérique. Il ne s'agit pas d'un droit isolé ou coupé du reste du système juridique : c'est un DROIT TRANSVERSAL qui adapte les règles classiques (droit civil, droit des contrats, droit pénal, droit commercial) à un environnement technologique en mutation rapide.\n\nSes grands domaines d'intervention sont : la protection des données personnelles, la cybersécurité, la propriété intellectuelle numérique, le commerce électronique et la responsabilité des plateformes.\n\nLe cours identifie quatre (4) grandes sources du droit du numérique :\n1) Les lois et règlements nationaux : textes votés par le Parlement ou pris par le gouvernement (ex. Loi ivoirienne n° 2013-450 sur la protection des données personnelles, Loi n° 2013-451 sur la cybercriminalité, Loi n° 2013-546 sur les transactions électroniques, Ordonnance n° 2012-293).\n2) Les normes techniques : standards techniques qui structurent concrètement la sécurité et l'interopérabilité sur Internet (ex. normes ISO, protocole HTTPS de chiffrement web).\n3) La jurisprudence : ensemble des décisions rendues par les cours et tribunaux qui interprètent et précisent les règles face aux litiges numériques (ex. une décision de justice condamnant Facebook pour non-retrait d'un contenu illicite).\n4) Les conventions et normes internationales/régionales : traités permettant de lutter contre des phénomènes transfrontaliers (ex. Convention de Budapest sur la cybercriminalité de 2001, ou cadre de référence du RGPD de l'Union européenne).",
        formulas: [
          {
            name: 'Les 4 sources du droit du numérique',
            formula: '1. Lois & règlements  ·  2. Normes techniques (ISO, HTTPS)  ·  3. Jurisprudence  ·  4. Conventions internationales (Budapest, RGPD)',
            note: 'Droit transversal combinant normes juridiques classiques et standards techniques.',
          },
        ],
        keyRule:
          "Le droit du numérique est transversal (pas isolé). Retiens la classification exacte des 4 sources : Loi 2013 = Loi/règlement ; HTTPS/ISO = Norme technique ; Décision de justice = Jurisprudence ; Budapest 2001 = Convention internationale.",
        workedExample: {
          title: 'Cas pratiques — Qualifier une situation et classer les sources',
          statement:
            "Cas A : Un étudiant achète un logiciel en ligne ; son paiement est débité mais le vendeur refuse d'envoyer la clé d'activation. Cela relève-t-il du droit du numérique ?\nCas B : Classer par source : (1) Loi ivoirienne de 2013 sur les données personnelles, (2) Protocole HTTPS, (3) Convention de Budapest (2001), (4) Décision de justice condamnant Facebook.",
          methodSteps: [
            "Étape 1 (Cas A) : Oui, la situation relève pleinement du droit du numérique car il s'agit d'un contrat électronique conclu et exécuté (inexécution de livraison numérique) dans l'espace numérique.",
            'Étape 2 (Cas B — 1) : Loi ivoirienne de 2013 → Source légale et réglementaire (Loi / règlement national).',
            'Étape 3 (Cas B — 2) : Protocole HTTPS → Norme technique.',
            'Étape 4 (Cas B — 3 et 4) : Convention de Budapest (2001) → Convention internationale ; Décision condamnant Facebook → Jurisprudence.',
          ],
          conclusion:
            "Le droit du numérique articule textes nationaux, traités internationaux, décisions des juges et normes techniques pour sécuriser les contrats et usages en ligne.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Champ du droit du numérique',
            stepTitle: 'Qualifier un litige relevant du droit du numérique',
            paragraphText:
              "Le droit du numérique encadre les activités dans l'espace numérique : contrats électroniques, données personnelles, cybersécurité, propriété intellectuelle et responsabilité des plateformes. L'achat en ligne d'un logiciel dont la clé d'activation n'est pas livrée constitue un litige de contrat électronique relevant du droit du numérique.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Un étudiant paie un logiciel en ligne mais le vendeur refuse de lui transmettre la clé d’activation. Pourquoi cette situation relève-t-elle du droit du numérique ?',
              options: [
                'Parce que tout achat effectué par un étudiant relève du droit pénal',
                'Parce qu’il s’agit d’un contrat électronique conclu et exécuté dans l’espace numérique',
                'Parce que les logiciels sont exclus du droit des contrats',
                'Uniquement si le montant dépasse 10 millions FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La formation, le paiement et la livraison dématérialisée (clé d’activation) d’un contrat électronique relèvent directement du droit du numérique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Transversalité',
            stepTheme: 'Nature du droit du numérique',
            stepTitle: 'Pourquoi dit-on que le droit du numérique est un droit transversal ?',
            paragraphText:
              "Point essentiel : le droit du numérique n'est pas un droit isolé coupé des autres disciplines, mais un droit transversal qui traverse et adapte le droit civil, pénal, commercial et constitutionnel aux réalités numériques.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle affirmation décrit le mieux la nature du droit du numérique ?',
              options: [
                'C’est un droit isolé qui remplace totalement le Code civil et le Code pénal',
                'C’est un droit uniquement technique réservé aux ingénieurs réseau',
                'C’est un droit transversal qui adapte les règles juridiques classiques à un espace numérique en constante mutation',
                'C’est un ensemble de règles morales sans force obligatoire',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le droit du numérique est transversal : il croise contrats, vie privée, propriété intellectuelle, consommation et droit pénal.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Source 1 & 2',
            stepTheme: 'Normes techniques (HTTPS, ISO)',
            stepTitle: 'Classer le protocole HTTPS parmi les sources du droit numérique',
            paragraphText:
              "Particularité originale du droit du numérique : aux côtés des lois et traités, les normes techniques (protocole HTTPS, standards ISO de sécurité) jouent un rôle normatif majeur car elles définissent l'état de l'art technique attendu des acteurs.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'À propos des les sources du droit du numérique, à quelle catégorie rattache-t-on le protocole HTTPS et les standards ISO ?',
              options: [
                'Aux normes techniques',
                'À la jurisprudence nationale',
                'Aux conventions internationales de l’ONU',
                'Aux décrets municipaux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le protocole HTTPS et les standards ISO sont des normes techniques qui façonnent concrètement la conformité et la sécurité numérique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Source 3',
            stepTheme: 'La jurisprudence',
            stepTitle: 'Identifier un exemple de jurisprudence numérique',
            paragraphText:
              "La jurisprudence est constituée par l'ensemble des décisions rendues par les juges. Par exemple, un jugement condamnant une plateforme (comme Facebook) pour ne pas avoir retiré un contenu manifestement illicite crée une référence jurisprudentielle.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Une décision de justice condamnant Facebook pour non-retrait d’un contenu illicite illustre quelle source du droit du numérique ?',
              options: [
                'Une norme technique',
                'Une convention internationale',
                'Une loi parlementaire',
                'La jurisprudence',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Toute décision rendue par une juridiction (tribunal, cour d’appel, cour suprême) appartient à la jurisprudence.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Source 4',
            stepTheme: 'Conventions internationales',
            stepTitle: 'Situer la Convention de Budapest (2001)',
            paragraphText:
              "Parce qu'Internet ignore les frontières nationales, les États concluent des conventions internationales comme la Convention de Budapest sur la cybercriminalité (2001) afin d'harmoniser les incriminations et la coopération judiciaire.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'À quelle source du droit du numérique appartient la Convention de Budapest (2001) sur la cybercriminalité ?',
              options: [
                'Les conventions internationales',
                'Les normes techniques privées',
                'Les règlements intérieurs d’entreprise',
                'Les coutumes commerciales locales',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Convention de Budapest (2001) est une convention internationale (traité) dédiée à la lutte coordonnée contre la cybercriminalité.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Architecture ivoirienne',
            stepTheme: 'Les grandes lois ivoiriennes de 2013',
            stepTitle: 'Repérer les trois grandes lois numériques ivoiriennes de 2013',
            paragraphText:
              "Dès 2013, la Côte d'Ivoire s'est dotée d'un triptyque législatif fondateur : Loi n° 2013-450 (données personnelles), Loi n° 2013-451 (lutte contre la cybercriminalité) et Loi n° 2013-546 (transactions électroniques), complétées par l'Ordonnance n° 2012-293 (télécommunications/TIC) et la Loi n° 2016-555 (droit d'auteur).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quel texte législatif ivoirien constitue la loi spécifique relative aux transactions électroniques (commerce électronique) ?',
              options: [
                'La Loi n° 2013-450 du 19 juin 2013',
                'La Loi n° 2013-546 du 30 juillet 2013',
                'La Loi n° 2016-555 du 26 juillet 2016',
                'La Convention de Budapest de 2001',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Loi 2013-450 = données personnelles ; Loi 2013-451 = cybercriminalité ; Loi 2013-546 = transactions électroniques ; Loi 2016-555 = droit d’auteur et droits voisins.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch1_p2',
        order: 2,
        title: "Spécificités de l'espace numérique, espace hybride et typologie des acteurs",
        summary:
          "Caractériser les 4 spécificités de l'espace numérique (dématérialisation, instantanéité, territorialité incertaine, hybridité), analyser les liens entre virtuel et réel et identifier les 3 grandes catégories d'acteurs.",
        conceptExplanation:
          "L'espace numérique présente quatre caractéristiques majeures qui bousculent les catégories juridiques traditionnelles :\n1) La dématérialisation : disparition du support papier traditionnel au profit de fichiers et documents numériques (ex. bulletin de salaire PDF, facture électronique, contrat en ligne).\n2) L'instantanéité : transmission quasi immédiate des informations, transactions et messages à l'échelle mondiale (ex. message WhatsApp, virement instantané, diffusion virale d'une diffamation).\n3) La territorialité incertaine : les frontières physiques s'effacent, soulevant des conflits de lois et de juridictions (ex. litige entre un site marchand ivoirien, un consommateur à Abidjan et un hébergeur situé à l'étranger).\n4) L'hybridité : interpénétration permanente entre monde numérique et monde physique (ex. achat commandé en ligne puis livré physiquement à domicile).\n\nConcernant les effets juridiques de l'espace virtuel (Exercice 5) : contrairement à une idée reçue, les actes posés en ligne ne sont pas « sans conséquence réelle ». L'espace numérique est un espace HYBRIDE où un acte virtuel (insulte/diffamation en ligne, cyberfraude, piratage) produit des conséquences juridiques, économiques et réputationnelles bien réelles dans la vie physique.\n\nEnfin, trois grandes catégories d'acteurs animent cet espace (Exercice 4) :\n- Les usagers (individus/internautes, ex. Marie qui publie une vidéo sur TikTok) ;\n- Les entreprises (opérateurs télécoms, e-commerçants, prestataires, ex. Jumia qui vend un téléphone en ligne) ;\n- Les plateformes (intermédiaires numériques structurants soumis à des obligations de modération, ex. Facebook, TikTok, Jumia en tant que marketplace).",
        formulas: [
          {
            name: 'Les 4 spécificités de l’espace numérique',
            formula: 'Dématérialisation  ·  Instantanéité  ·  Territorialité incertaine  ·  Hybridité',
            note: 'Expliquent pourquoi le droit classique doit être adapté au numérique.',
          },
        ],
        keyRule:
          "Dématérialisation (PDF) + Instantanéité (WhatsApp) + Territorialité incertaine (serveur étranger) + Hybridité (e-commerce livré physiquement). Les actes posés dans le virtuel produisent des conséquences juridiques bien réelles !",
        workedExample: {
          title: 'Cas pratiques — Qualifier les spécificités et les acteurs',
          statement:
            "Associer : (A) un bulletin de salaire envoyé en PDF, (B) un conflit entre un site ivoirien et un hébergeur américain, (C) une commande sur Jumia livrée par coursier, (D) Marie poste une vidéo sur TikTok, (E) Facebook doit retirer un contenu haineux.",
          methodSteps: [
            'Étape 1 — (A) illustre la dématérialisation (remplacement du papier par un fichier électronique).',
            'Étape 2 — (B) illustre la territorialité incertaine (multiplicité de pays et de lois potentiellement applicables).',
            'Étape 3 — (C) illustre l’hybridité (transaction numérique débouchant sur une livraison physique).',
            'Étape 4 — (D) Marie = Usager (individu) ; (E) Facebook = Plateforme (intermédiaire tenu de retirer un contenu illicite).',
          ],
          conclusion:
            'Chaque situation numérique combine une ou plusieurs spécificités techniques et engage des acteurs aux régimes juridiques distincts.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Dématérialisation',
            stepTheme: 'Disparition du support papier',
            stepTitle: 'Illustrer la dématérialisation',
            paragraphText:
              "La dématérialisation consiste à remplacer les supports matériels (papier, cachet physique) par des documents numériques (bulletin de salaire PDF, contrat électronique, billet d'avion QR code), ce qui oblige le droit à reconnaître la valeur probante de l'écrit électronique.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'En pratique, quel exemple concret illustre la « dématérialisation » dans l’espace numérique ?',
              options: [
                'L’envoi d’un bulletin de salaire au format PDF',
                'La livraison d’un colis par camion',
                'Un litige frontalier entre deux pays voisins',
                'Une coupure d’électricité dans un quartier',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le passage du bulletin de salaire papier au format électronique PDF est un exemple type de dématérialisation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Territorialité incertaine',
            stepTheme: 'Conflits de lois et de juridictions',
            stepTitle: 'Identifier un problème de territorialité numérique',
            paragraphText:
              "Parce que les données circulent instantanément à travers des serveurs situés dans divers pays, il est souvent délicat de déterminer quel tribunal est compétent et quelle loi nationale s'applique : c'est la territorialité incertaine.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Un litige oppose un e-commerçant ivoirien, un acheteur résidant à Abidjan et un hébergeur situé en Europe. Quelle spécificité de l’espace numérique cette situation illustre-t-elle ?',
              options: [
                'L’instantanéité',
                'La territorialité incertaine',
                'La gratuité d’Internet',
                'La bureaucratie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’éclatement géographique entre éditeur, utilisateur et serveur d’hébergement illustre la territorialité incertaine propre à Internet.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Hybridité',
            stepTheme: 'Frontières brouillées entre physique et numérique',
            stepTitle: 'Reconnaître une situation hybride',
            paragraphText:
              "L'hybridité traduit l'imbrication étroite entre le monde numérique et le monde physique : par exemple, commander et payer un repas ou un téléphone sur une application mobile, puis le recevoir physiquement livré à son domicile.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Parmi les situations suivantes, laquelle illustre directement la notion d’« hybridité » de l’espace numérique ?',
              options: [
                'Un achat effectué en ligne puis livré physiquement chez le client',
                'Une discussion purement orale entre deux voisins sans téléphone',
                'Un contrat manuscrit signé chez un notaire sans ordinateur',
                'Une sauvegarde locale sur un disque dur déconnecté',
              ],
              correctAnswerIndex: 0,
              explanation:
                "L'e-commerce livré physiquement combine une phase virtuelle (commande et paiement en ligne) et une phase réelle (transport et remise matérielle) : c'est un espace hybride.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Acteurs',
            stepTheme: 'Usagers, Entreprises, Plateformes',
            stepTitle: 'Qualifier le rôle d’un acteur du numérique',
            paragraphText:
              "En pratique, on distingue trois catégories d'acteurs : l'Usager (Marie postant une vidéo sur TikTok), l'Entreprise (Jumia vendant un téléphone en ligne) et la Plateforme (Facebook sommée de retirer un contenu haineux).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Dans la typologie des acteurs numériques, comment classe-t-on un individu (ex. Marie) qui publie une vidéo personnelle sur TikTok ?',
              options: [
                'Une autorité de régulation',
                'Un hébergeur cloud',
                'Une entreprise e-commerçante',
                'Un usager',
              ],
              correctAnswerIndex: 3,
              explanation:
                "L'individu qui utilise les services numériques à titre personnel est qualifié d'usager.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Virtuel et Réel',
            stepTheme: 'Conséquences juridiques des actes en ligne',
            stepTitle: 'Un acte posé en ligne échappe-t-il au droit ?',
            paragraphText:
              "Faux ! Même si l'espace virtuel n'a pas de territoire physique, les comportements en ligne (insulte, diffamation, escroquerie, cyberfraude) portent atteinte à des personnes réelles et entraînent des sanctions civiles et pénales tout aussi concrètes que dans le monde physique.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Un internaute profère des injures graves et des propos diffamatoires sous pseudonyme sur un réseau social. Quelle analyse juridique est exacte ?',
              options: [
                'L’espace virtuel étant immatériel, aucune sanction juridique n’est applicable',
                'Seuls les propos tenus en face-à-face dans la rue peuvent être jugés',
                'L’acte posé en ligne produit des conséquences réelles sur la réputation et engage la responsabilité civile et pénale de son auteur',
                'La responsabilité pèse uniquement sur le fabricant du smartphone',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Internet n’est pas une zone de non-droit : les atteintes à la réputation, à la vie privée ou aux biens commises en ligne sont pleinement sanctionnées.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Instantanéité',
            stepTheme: 'Vitesse de propagation et risques',
            stepTitle: 'Mesurer l’enjeu juridique de l’instantanéité',
            paragraphText:
              "L'instantanéité (envoi d'un message WhatsApp, publication virale) facilite les échanges économiques mais amplifie aussi la gravité des dommages (une fausse rumeur ou une fuite de données peut toucher des milliers de personnes en quelques secondes).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Quel exemple concret illustre la caractéristique d’« instantanéité » de l’espace numérique ?',
              options: [
                'La signature d’une convention internationale en 2001',
                'L’envoi et la réception immédiate d’un message WhatsApp',
                'La conservation d’archives papier pendant 10 ans',
                'La fabrication industrielle d’un ordinateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La messagerie instantanée (WhatsApp) illustre la transmission immédiate des informations sans délai géographique.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : DONNÉES PERSONNELLES, VIE PRIVÉE ET RÔLE DE L'ARTCI
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch2',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: "Chapitre 2 — Protection des données personnelles, vie privée et missions de l'ARTCI",
    summary:
      "Notion de donnée à caractère personnel (« l'or du XXIe siècle »), principes clés de la Loi ivoirienne n° 2013-450 et du RGPD (licéité, finalité, proportionnalité, consentement, transparence), droits des personnes et pouvoirs de l'ARTCI.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Cours_Droit_Numerique_Chapitre2_Dynamique.pptx & Chapitre 5 (ENTD L1 L1 ENTD)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch2_p1',
        order: 1,
        title: 'Données personnelles et principes directeurs (Loi n° 2013-450 & RGPD)',
        summary:
          "Identifier une donnée à caractère personnel et détecter les violations des principes fondamentaux (licéité, finalité, proportionnalité, consentement libre et éclairé, transparence) sur un cas pratique.",
        conceptExplanation:
          "Aux termes de la Loi ivoirienne n° 2013-450 du 19 juin 2013, une donnée à caractère personnel (DCP) est « toute information relative à une personne physique identifiée ou identifiable, directement ou indirectement » (nom, adresse, téléphone, photo, adresse IP, géolocalisation, numéro d'identification, données biométriques). Elle relève de la protection de la vie privée numérique. On qualifie souvent la donnée personnelle d'« or du XXIe siècle » en raison de sa valeur économique considérable (ciblage publicitaire, personnalisation des services), ce qui la rend particulièrement vulnérable aux abus.\n\nLa Loi ivoirienne de 2013 et le RGPD européen partagent un socle commun de principes directeurs impératifs :\n1) Licéité du traitement : toute collecte doit reposer sur une base légale légitime ;\n2) Finalité déterminée et légitime : les données sont collectées pour un objectif précis et ne peuvent être détournées ;\n3) Proportionnalité (minimisation) : ne collecter que les données strictement nécessaires à la finalité (ex. collecter l'ethnie ou la géolocalisation permanente pour une simple livraison est excessif et illégal) ;\n4) Consentement libre, spécifique et éclairé : une case précochée par défaut est une clause abusive et ne constitue PAS un consentement valide ;\n5) Transparence : informer clairement la personne sur l'identité des destinataires et des « partenaires » éventuels ;\n6) Droits garantis aux personnes : droit d'accès, droit de rectification, droit d'effacement et droit d'opposition.",
        formulas: [
          {
            name: 'Les 5 principes clés de conformité d’une collecte',
            formula: 'Licéité  ·  Finalité déterminée  ·  Proportionnalité  ·  Consentement libre/éclairé  ·  Transparence',
            note: 'S’appliquent tant en droit ivoirien (Loi 2013-450) qu’en droit européen (RGPD).',
          },
        ],
        keyRule:
          "Case précochée par défaut = consentement NON libre (illégal). Collecte de données inutiles comme l'ethnie ou la géolocalisation 24h/24 pour une appli de livraison = violation du principe de proportionnalité !",
        workedExample: {
          title: "Exercice 1 du Chapitre 2 — L'application mobile de livraison d'une start-up ivoirienne",
          statement:
            "Pour s'inscrire sur une application mobile de livraison créée par une start-up ivoirienne, l'utilisateur doit fournir : nom, ethnie, numéro de téléphone, géolocalisation permanente, et une case déjà cochée par défaut autorise le partage avec « des partenaires ». Identifier les irrégularités et les principes violés.",
          methodSteps: [
            "Étape 1 (Consentement non libre) : La case précochée par défaut pour partager les données avec des tiers est une clause abusive ; le consentement doit être un acte positif libre, spécifique et éclairé.",
            "Étape 2 (Collecte excessive / proportionnalité) : L'ethnie (donnée sensible sans aucun lien avec la livraison) et la géolocalisation permanente (alors qu'elle n'est utile que pendant une commande) sont disproportionnées.",
            "Étape 3 (Manque de transparence) : La mention vague « des partenaires » ne permet pas à l'utilisateur de savoir qui recevra ses données ni pour quelle finalité.",
          ],
          conclusion:
            "L'application viole simultanément les principes de licéité, finalité, proportionnalité, consentement libre et éclairé, et transparence (Loi n° 2013-450).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Donnée personnelle',
            stepTheme: 'Identification directe ou indirecte',
            stepTitle: 'Reconnaître une donnée à caractère personnel (Loi 2013-450)',
            paragraphText:
              "Selon la Loi n° 2013-450, une donnée personnelle n'est pas seulement le nom et le prénom : c'est toute information permettant d'identifier une personne physique directement OU indirectement (adresse IP, numéro de téléphone, photo, coordonnées GPS, empreinte biométrique).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants, lequel constitue bien une donnée à caractère personnel au sens de la Loi n° 2013-450 ?',
              options: [
                'Le taux de TVA national de 18 %',
                'Une adresse IP ou des coordonnées GPS permettant d’identifier indirectement un abonné',
                'Le bilan comptable anonyme d’une entreprise publique',
                'La température moyenne à Abidjan en mars',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Une adresse IP ou une géolocalisation permet d'identifier indirectement une personne physique : c'est donc une donnée à caractère personnel protégée par la loi.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Enjeu économique',
            stepTheme: "« L'or du XXIe siècle »",
            stepTitle: 'Pourquoi qualifie-t-on la donnée personnelle d’« or du XXIe siècle » ?',
            paragraphText:
              "Dans l'économie numérique, les données personnelles ont une valeur marchande et stratégique immense : elles permettent de cibler précisément les consommateurs, de personnaliser les offres et d'orienter les décisions commerciales — d'où la nécessité d'un encadrement juridique strict contre les abus.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le cours explique-t-il que la donnée personnelle est surnommée « l’or du XXIe siècle » ?',
              options: [
                'Parce qu’elle est stockée physiquement dans les coffres de la BCEAO',
                'Parce qu’elle est libre de tout encadrement légal',
                'Parce qu’elle possède une valeur économique majeure (ciblage, personnalisation, décisions commerciales) qui l’expose aux abus',
                'Parce qu’elle ne concerne que le secteur minier',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sa valeur économique considérable pour le ciblage et la personnalisation des services en fait un actif stratégique nécessitant une protection juridique forte.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Consentement',
            stepTheme: 'Case précochée par défaut',
            stepTitle: 'Une case précochée vaut-elle consentement valide ?',
            paragraphText:
              "Non ! Le consentement doit être libre, spécifique et éclairé. Une case précochée par défaut (opt-out) ou une acceptation forcée pour accéder au service est irrégulière et constitue une clause abusive.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Lors de l’inscription sur une application, une case est déjà cochée par défaut pour autoriser la cession des données à des partenaires commerciaux. Cette pratique est-elle légale ?',
              options: [
                'Non, car une case précochée ne constitue pas un consentement libre, spécifique et éclairé',
                'Oui, dès lors que l’utilisateur n’a pas pensé à la décocher',
                'Oui, si l’application est gratuite',
                'Oui, tant que la start-up emploie moins de 10 salariés',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Une case précochée par défaut viole l'exigence de consentement libre et éclairé (Exercice 1 du Chapitre 2).",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Proportionnalité',
            stepTheme: 'Collecte excessive',
            stepTitle: 'Repérer une atteinte au principe de proportionnalité',
            paragraphText:
              "Le principe de proportionnalité impose de ne collecter que les données strictement utiles à la finalité poursuivie. Exiger l'ethnie d'un client ou suivre sa géolocalisation 24h/24 pour livrer un repas constitue une collecte excessive et illicite.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Une application de livraison exige de connaître l’ethnie de l’utilisateur et active sa géolocalisation permanente même hors commande. Quel principe juridique est principalement violé ?',
              options: [
                'Le principe de la partie double',
                'Le principe de l’unité de commandement',
                'Le principe d’imputation rationnelle',
                'Le principe de proportionnalité (minimisation) et de finalité',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Ni l’ethnie ni la géolocalisation permanente ne sont nécessaires pour exécuter une livraison ponctuelle : la collecte est disproportionnée par rapport à la finalité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Transparence',
            stepTheme: 'Information claire sur les destinataires',
            stepTitle: 'Pourquoi la formule vague « nos partenaires » est-elle irrégulière ?',
            paragraphText:
              "Le principe de transparence oblige le responsable de traitement à indiquer clairement à l'utilisateur qui collecte ses données, dans quel but précis, pendant combien de temps et l'identité exacte des tiers destinataires.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quel principe juridique est bafoué lorsqu’un site indique simplement partager les données avec « des partenaires » sans en préciser l’identité ni la finalité ?',
              options: [
                'Le principe de transparence',
                'Le principe de spécialisation',
                'Le principe de solvabilité',
                'Le principe de territorialité',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La transparence exige une information loyale, claire et précise sur les destinataires et l'usage prévu des données personnelles.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Droits des personnes',
            stepTheme: 'Accès, rectification, effacement, opposition',
            stepTitle: 'Identifier les droits fondamentaux de l’usager sur ses données',
            paragraphText:
              "La Loi 2013-450 et le RGPD reconnaissent aux personnes physiques des droits concrets pour garder la maîtrise de leurs données : droit d'accès (savoir quelles données sont détenues), droit de rectification (corriger une erreur), droit d'effacement (supprimer) et droit d'opposition (refuser notamment la prospection).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Un client constate que son numéro de téléphone et sa date de naissance enregistrés par une plateforme comportent une erreur. Quel droit exerce-t-il pour faire corriger ces informations ?',
              options: [
                'Le droit de rétractation commerciale',
                'Le droit de rectification',
                'Le droit d’escompte',
                'Le droit de franchise',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le droit de rectification permet à toute personne concernée d’exiger la correction de données inexactes ou incomplètes la concernant.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch2_p2',
        order: 2,
        title: "Missions, pouvoirs et saisine prioritaire de l'ARTCI (Ordonnance 2012-293)",
        summary:
          "Comprendre le rôle institutionnel de l'ARTCI comme autorité de protection des données en Côte d'Ivoire, ses pouvoirs de contrôle, d'enquête et de sanction, et la démarche juridique prioritaire en cas d'abus.",
        conceptExplanation:
          "En Côte d'Ivoire, l'Autorité de Régulation des Télécommunications / TIC de Côte d'Ivoire (ARTCI), instituée par l'Ordonnance n° 2012-293 (notamment l'article 104 cité en cours), exerce le rôle d'Autorité de Protection des Données à Caractère Personnel.\n\nSes missions s'articulent autour de quatre axes complémentaires :\n1) Contrôle de la conformité à la Loi n° 2013-450 (examen des déclarations et autorisations, vérification des traitements) ;\n2) Pouvoirs d'investigation et de coercition : enquête, droit d'accès aux locaux et systèmes, mise en demeure de se conformer, suspension de traitement et sanctions pécuniaires (amendes administratives) ;\n3) Rôle pédagogique : sensibilisation du grand public et accompagnement des entreprises vers la mise en conformité ;\n4) Rôle d'intermédiaire / médiateur entre les usagers, les entreprises et l'État.\n\nFace à une atteinte avérée aux données personnelles — par exemple une société de marketing qui revend les fichiers d'abonnés d'une ONG sans leur accord (Exercice 2 du Chapitre 2), ou un opérateur collectant les coordonnées GPS à l'insu des clients —, la démarche juridique PRIORITAIRE consiste à SAISIR L'ARTCI (autorité de contrôle spécialisée disposant de moyens rapides d'enquête, de mise en demeure et de sanction). Une action judiciaire (pour obtenir réparation ou sanction pénale) ou une action médiatique reste possible en complément, mais ne remplace pas la saisine prioritaire du régulateur.",
        formulas: [
          {
            name: 'Chaîne d’action de l’ARTCI',
            formula: 'Saisine / Contrôle → Enquête → Mise en demeure → Suspension / Sanction (amende)',
            note: 'Complétée par un rôle permanent de sensibilisation et d’accompagnement.',
          },
        ],
        keyRule:
          "Face à une violation des données personnelles en Côte d'Ivoire, le réflexe juridique n° 1 est de saisir l'ARTCI (autorité de contrôle spécialisée — Art. 104, Ord. 2012-293), qui peut enquêter, mettre en demeure, suspendre le traitement et infliger une amende.",
        workedExample: {
          title: "Exercice 2 du Chapitre 2 — Revente illicite de fichiers d'abonnés d'une ONG",
          statement:
            "Une ONG constate qu'une société de marketing revend les fichiers de ses abonnés sans leur accord. Elle hésite entre : (1) engager une action en justice, (2) saisir l'ARTCI, (3) lancer une campagne médiatique. Quelle est la démarche juridiquement la plus pertinente et pourquoi ?",
          methodSteps: [
            "Étape 1 (Démarche prioritaire) : Saisir l'ARTCI (option 2), car c'est l'autorité administrative spécialisée compétente en matière de données personnelles (Art. 104, Ordonnance 2012-293).",
            "Étape 2 (Efficacité des pouvoirs de l'ARTCI) : L'ARTCI dispose de pouvoirs techniques d'enquête, peut mettre immédiatement en demeure la société de marketing, ordonner la cessation/suspension du traitement illicite et prononcer des sanctions financières.",
            "Étape 3 (Voies complémentaires) : L'action en justice (civile pour dommages-intérêts ou pénale) et la communication médiatique (prudente pour éviter la diffamation) demeurent possibles en complément.",
          ],
          conclusion:
            "La saisine de l'ARTCI est la démarche prioritaire, la plus rapide et la plus adaptée techniquement face à une violation de la Loi n° 2013-450.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'ARTCI',
            stepTheme: 'Identité et fondement légal',
            stepTitle: 'Quel organisme régule la protection des données en Côte d’Ivoire ?',
            paragraphText:
              "En Côte d'Ivoire, c'est l'ARTCI (Autorité de Régulation des Télécommunications / TIC de Côte d'Ivoire), fondée sur l'Ordonnance n° 2012-293 (Art. 104), qui veille au respect de la Loi n° 2013-450 sur la protection des données personnelles.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle institution ivoirienne est chargée d’autoriser, de contrôler et de sanctionner les traitements de données à caractère personnel ?',
              options: [
                'La DGI (Direction Générale des Impôts)',
                'L’ARTCI (Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire)',
                'La CNPS (Caisse Nationale de Prévoyance Sociale)',
                'La Chambre de Commerce et d’Industrie',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'ARTCI joue le rôle d'Autorité de Protection des Données à Caractère Personnel en Côte d'Ivoire.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Saisine prioritaire',
            stepTheme: 'Exercice 2 — Revente de fichiers',
            stepTitle: 'Choisir la démarche prioritaire en cas de revente illicite de fichiers',
            paragraphText:
              "Lorsqu'une entreprise revend illégalement une base de données d'abonnés sans accord, saisir l'ARTCI est prioritaire car le régulateur spécialisé peut enquêter rapidement, mettre en demeure et sanctionner l'organisme fautif.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Une ONG découvre qu’une société de marketing revend les fichiers de ses abonnés sans accord (Exercice 2). Quelle est la démarche juridique PRIORITAIRE ?',
              options: [
                'Lancer uniquement des insultes sur les réseaux sociaux',
                'Pirater en représailles le site de la société de marketing',
                'Saisir l’ARTCI, autorité de contrôle spécialisée (l’action judiciaire restant possible en complément)',
                'Ne rien faire car les fichiers d’abonnés ne sont pas protégés',
              ],
              correctAnswerIndex: 2,
              explanation:
                "La saisine de l'ARTCI est prioritaire (Art. 104, Ord. 2012-293) ; l'action judiciaire ou médiatique peut venir en complément mais ne doit pas se substituer à l'intervention du régulateur.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Pouvoirs de l’ARTCI',
            stepTheme: 'Enquête, mise en demeure et sanction',
            stepTitle: 'Quelles sanctions l’ARTCI peut-elle prendre contre un opérateur fautif ?',
            paragraphText:
              "Si une société de téléphonie collecte les coordonnées GPS de ses clients sans les informer, l'ARTCI peut mener une enquête, mettre en demeure l'opérateur, exiger la suspension immédiate du traitement et imposer une amende.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Une société de téléphonie collecte secrètement les coordonnées GPS de ses clients sans information ni consentement. Que peut faire l’ARTCI ?',
              options: [
                'Exiger la suspension du traitement illicite et infliger une amende administrative',
                'Uniquement publier un simple conseil sans aucun pouvoir de sanction',
                'Prononcer directement une peine de 20 ans de prison sans juge',
                'Confisquer les téléphones de tous les clients',
              ],
              correctAnswerIndex: 0,
              explanation:
                "L'ARTCI dispose de véritables pouvoirs de contrôle, d'enquête, de mise en demeure, de suspension de traitement et de sanction pécuniaire (amende) ; les peines de prison relèvent du juge pénal.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Rôle pédagogique',
            stepTheme: 'Accompagnement des acteurs',
            stepTitle: 'Au-delà de la sanction, quel autre rôle joue l’ARTCI ?',
            paragraphText:
              "L'ARTCI n'est pas seulement un organe répressif : elle assure aussi un rôle pédagogique essentiel (sensibilisation des citoyens, accompagnement des entreprises dans leur mise en conformité) et sert d'intermédiaire entre usagers, entreprises et État.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Outre ses pouvoirs de contrôle et de sanction, quelle mission d’accompagnement l’ARTCI exerce-t-elle ?',
              options: [
                'La commercialisation d’abonnements Internet au détail',
                'La tenue de la comptabilité générale des startups',
                'La fabrication de cartes SIM',
                'Un rôle pédagogique de sensibilisation et d’accompagnement des entreprises, en tant qu’intermédiaire entre usagers, entreprises et État',
              ],
              correctAnswerIndex: 3,
              explanation:
                "L'ARTCI combine contrôle/sanction et pédagogie (sensibilisation, accompagnement des responsables de traitement et interface avec l'État et les usagers).",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Notification',
            stepTheme: 'Violation de données (fuite / attaque)',
            stepTitle: 'Que doit faire une entreprise victime d’une fuite de données ?',
            paragraphText:
              "En cas de violation de données personnelles (piratage, perte ou divulgation accidentelle de fichiers clients), les responsables de traitement ont l'obligation légale de notifier l'incident à l'ARTCI dans les plus brefs délais.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Une entreprise subit une fuite de sa base de données clients suite à une intrusion informatique. Quelle obligation lui incombe vis-à-vis de l’ARTCI ?',
              options: [
                'Notifier la violation de données à l’ARTCI dans les plus brefs délais',
                'Cacher totalement l’incident pour éviter une mauvaise publicité',
                'Attendre la clôture du bilan comptable de l’année suivante',
                'Fermer définitivement son entreprise sans prévenir personne',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La notification rapide de toute violation de données à l’ARTCI est une obligation légale clé du responsable de traitement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Finalité globale',
            stepTheme: 'Confiance numérique',
            stepTitle: 'Pourquoi protéger les données renforce-t-il l’économie numérique ?',
            paragraphText:
              "La protection des données personnelles ne freine pas l'innovation : elle garantit la vie privée des citoyens et instaure la CONFIANCE NUMÉRIQUE indispensable pour que les consommateurs acceptent d'utiliser le e-commerce, le Mobile Money et les services publics en ligne.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la double finalité majeure de la protection juridique des données personnelles soulignée ?',
              options: [
                'Interdire tout commerce électronique en Côte d’Ivoire',
                'Garantir la vie privée numérique des individus et instaurer la confiance dans l’économie numérique',
                'Remplacer tous les contrats écrits par des accords verbaux',
                'Supprimer les opérateurs de télécommunications',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans protection juridique de la vie privée, les citoyens redoutent les abus ; la régulation crée la confiance nécessaire à l’essor de l’économie numérique.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : E-COMMERCE, CYBERSÉCURITÉ ET RESPONSABILITÉS CIVILE & PÉNALE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_droit_num_ch3',
    subjectId: 'lmd_intro_droit_num',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — E-commerce, plateformes, cybersécurité et responsabilités civile & pénale',
    summary:
      "Cadre ivoirien de l'e-commerce (Loi 2013-546 : hébergeur vs éditeur, mentions légales, CGU/CGV, droit de rétractation 7j/30j), cybersécurité (triptyque CIA, sécurité vs confidentialité) et responsabilités civile et pénale (Loi 2013-451).",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch3_p1',
        order: 1,
        title: "Cadre juridique de l'e-commerce (Loi 2013-546) : hébergeur, éditeur, CGU/CGV et rétractation",
        summary:
          "Opposer le régime de responsabilité de l'hébergeur et celui de l'éditeur, maîtriser les mentions légales obligatoires, distinguer CGU et CGV et appliquer les délais et exceptions du droit de rétractation.",
        conceptExplanation:
          "En Côte d'Ivoire, le commerce électronique repose principalement sur la Loi n° 2013-546 du 30 juillet 2013 relative aux transactions électroniques (complétée par les lois de 2013 sur les données personnelles et la cybercriminalité).\n\n1) Responsabilité différenciée — Hébergeur vs Éditeur :\n   - L'hébergeur : fournit uniquement un service technique de stockage ou d'accès à des contenus mis en ligne par des tiers, sans intervenir sur ces contenus (ex. data center, OVH, Orange CI Cloud, Microsoft Azure). Il bénéficie d'une RESPONSABILITÉ LIMITÉE : il n'a pas d'obligation générale de surveillance a priori, mais doit agir promptement pour retirer ou bloquer un contenu manifestement illicite dès qu'il en a connaissance.\n   - L'éditeur : détermine les contenus diffusés et exerce un contrôle éditorial actif (ex. boutique en ligne directe FNAC / Librairie de France, ou plateforme comme Jumia Côte d'Ivoire lorsqu'elle sélectionne ses vendeurs, fixe des règles de présentation et met en avant des produits). Il assume une RESPONSABILITÉ PLEINE ET DIRECTE sur tous les contenus publiés.\n\n2) Obligations juridiques des sites e-commerce :\n   - Mentions légales obligatoires : identité complète de l'éditeur (raison sociale, adresse, contacts, RCCM), identité de l'hébergeur et coordonnées de l'autorité de contrôle (ex. ARTCI).\n   - CGU (Conditions Générales d'Utilisation) : encadrent l'usage de la plateforme par les internautes (règles de modération, interdiction d'annonces trompeuses).\n   - CGV (Conditions Générales de Vente) : encadrent la relation contractuelle commerciale entre vendeur et consommateur (prix TTC, paiement, délais de livraison, garanties, remboursement — ex. Glovo, Julaya Market).\n\n3) Droit de rétractation du consommateur :\n   - Délai légal : 7 jours à compter de la réception du bien ou de la conclusion du contrat de service.\n   - Sanction en cas de défaut d'information claire par le vendeur : le délai est prolongé à 30 jours !\n   - Exceptions : produits périssables, biens personnalisés sur mesure et téléchargements numériques déjà consommés.",
        formulas: [
          {
            name: 'Délais du droit de rétractation (e-commerce en Côte d’Ivoire)',
            formula: 'Délai légal normal = 7 jours  |  Si défaut d’information du vendeur = prolongé à 30 jours',
            note: 'Exceptions : biens périssables, biens personnalisés, téléchargements numériques.',
          },
        ],
        keyRule:
          "Hébergeur (stockage passif : OVH, Azure, Orange CI Cloud) = responsabilité limitée (retirer promptement si averti). Éditeur (rôle actif : Jumia CI, boutique propre) = responsabilité pleine et directe. Rétractation = 7 jours (30 jours si le vendeur n'a pas informé le client).",
        workedExample: {
          title: 'Audit juridique express d’une boutique en ligne ivoirienne',
          statement:
            "Une boutique en ligne basée à Abidjan vend des vêtements personnalisés et des téléphones standards sur un serveur loué chez Orange CI Cloud. Elle omet d'informer ses clients sur le droit de rétractation et un client reçoit un téléphone standard défectueux qu'il souhaite renvoyer au bout de 15 jours. Analyser les statuts et les droits.",
          methodSteps: [
            "Étape 1 (Qualification) : La boutique qui choisit et vend ses produits est l'ÉDITEUR (responsabilité pleine et directe) ; Orange CI Cloud qui stocke techniquement le site est l'HÉBERGEUR (responsabilité limitée).",
            "Étape 2 (Droit de rétractation sur le téléphone standard) : En principe 7 jours ; mais comme le vendeur a omis d'informer clairement le consommateur, le délai est légalement prolongé à 30 jours → au 15e jour, le client est donc encore dans les délais !",
            "Étape 3 (Exception sur les vêtements personnalisés) : En revanche, pour des biens personnalisés sur mesure, le droit de rétractation ne s'applique pas (exception légale).",
          ],
          conclusion:
            "Le client peut exercer sa rétractation au 15e jour sur le téléphone standard grâce à la sanction de prolongation à 30 jours, tandis que les articles personnalisés restent exclus de la rétractation.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Hébergeur',
            stepTheme: 'Responsabilité limitée',
            stepTitle: 'Quel régime de responsabilité s’applique à l’hébergeur ?',
            paragraphText:
              "L'hébergeur technique (ex. Orange CI Cloud, OVH, Microsoft Azure) stocke des contenus fournis par des tiers sans exercer de choix éditorial. Il bénéficie d'une responsabilité limitée : aucune obligation de contrôle a priori, mais obligation d'agir promptement pour retirer ou bloquer un contenu manifestement illicite dès qu'il en a connaissance.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'À quelle condition un hébergeur technique (comme Orange CI Cloud ou OVH) voit-il sa responsabilité engagée face à un contenu manifestement illicite hébergé chez lui ?',
              options: [
                'Systématiquement, même s’il ignorait totalement l’existence du contenu',
                'S’il n’agit pas promptement pour retirer ou bloquer le contenu manifestement illicite dès qu’il en a connaissance',
                'Jamais, car un hébergeur jouit d’une immunité absolue même prévenu',
                'Uniquement si le site vend des produits alimentaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'hébergeur n'est pas tenu de contrôler a priori tous les contenus, mais doit agir promptement dès qu'un contenu manifestement illicite lui est signalé.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Éditeur',
            stepTheme: 'Rôle actif d’une plateforme',
            stepTitle: 'Pourquoi Jumia Côte d’Ivoire est-elle qualifiée d’éditeur ?',
            paragraphText:
              "Lorsqu'une plateforme ne se contente pas d'un stockage neutre, mais sélectionne ses vendeurs, fixe des règles de présentation et met activement en avant certains produits (comme une marketplace active), elle joue un rôle actif et relève du régime plus strict de l'éditeur (responsabilité pleine et directe).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi une plateforme e-commerce qui sélectionne ses vendeurs, organise la mise en avant des produits et contrôle les fiches relève-t-elle du statut d’éditeur ?',
              options: [
                'Parce qu’elle possède des serveurs informatiques',
                'Parce qu’elle utilise le protocole HTTPS',
                'Parce qu’elle exerce un rôle actif et un contrôle éditorial sur les contenus publiés',
                'Parce qu’elle livre les colis par moto',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le critère distinctif est le rôle actif/éditorial : dès qu’un acteur détermine ou sélectionne les contenus diffusés, il devient éditeur pleinement responsable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Mentions légales',
            stepTheme: 'Transparence obligatoire d’un site marchand',
            stepTitle: 'Vérifier les mentions légales obligatoires',
            paragraphText:
              "Tout site de vente en ligne doit afficher des mentions légales obligatoires : identité complète de l'éditeur (raison sociale, adresse, contacts, numéro RCCM), identité de l'hébergeur et coordonnées de l'autorité de contrôle compétente (ex. ARTCI).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Parmi ces informations, laquelle fait partie des mentions légales obligatoires de tout site de vente en ligne en Côte d’Ivoire ?',
              options: [
                'L’identité complète de l’éditeur (avec RCCM), l’identité de l’hébergeur et les coordonnées de l’autorité de contrôle (ARTCI)',
                'Le salaire individuel de chaque développeur du site',
                'La liste nominative de tous les clients du site',
                'Le code source confidentiel du site',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Les mentions légales garantissent l'identification de l'éditeur (raison sociale, RCCM, contacts), de l'hébergeur et de l'autorité de contrôle (ARTCI).",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'CGU vs CGV',
            stepTheme: 'Usage de la plateforme vs Contrat de vente',
            stepTitle: 'Distinguer CGU et CGV sur une plateforme',
            paragraphText:
              "Les CGU (Conditions Générales d'Utilisation) régissent l'usage du site ou de la plateforme par tous les internautes (règles de compte, modération, interdiction d'annonces trompeuses). Les CGV (Conditions Générales de Vente) encadrent la transaction commerciale (prix TTC, paiement, livraison, garanties, remboursement).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Dans quel document contractuel une plateforme comme Glovo ou Julaya Market doit-elle préciser les prix TTC, délais de livraison, garanties et conditions de remboursement ?',
              options: [
                'Dans les statuts de la CNPS',
                'Dans le livre-journal comptable',
                'Dans les seules CGU techniques de modération',
                'Dans les Conditions Générales de Vente (CGV)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les CGV encadrent spécifiquement la relation commerciale vendeur–consommateur (prix TTC, modes de paiement, délais de livraison, garanties et remboursement).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Rétractation',
            stepTheme: 'Délai légal de 7 jours et sanction de 30 jours',
            stepTitle: 'Appliquer le délai légal de rétractation',
            paragraphText:
              "En Côte d'Ivoire (cours Chapitre 4), le consommateur dispose d'un délai légal de rétractation de 7 jours à compter de la réception du bien (ou conclusion du contrat de service). Si le vendeur manque à son obligation d'information claire sur ce droit, le délai est sanctionné par une prolongation à 30 jours.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quel est le délai légal normal du droit de rétractation en e-commerce enseigné, et à combien est-il prolongé si le vendeur n’en informe pas clairement le client ?',
              options: [
                '7 jours, prolongé à 30 jours en cas de défaut d’information',
                '24 heures, prolongé à 48 heures',
                '30 jours, prolongé à 1 an',
                'Il n’existe aucun droit de rétractation en e-commerce',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le délai légal est de 7 jours (à compter de la réception du bien ou de la conclusion du service), porté à 30 jours à titre de sanction si le vendeur omet d’en informer le consommateur.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Exceptions',
            stepTheme: 'Biens exclus du droit de rétractation',
            stepTitle: 'Repérer les achats exclus du droit de rétractation',
            paragraphText:
              "Le droit de rétractation ne s'applique pas à tous les achats en ligne : sont légalement exclus les produits périssables (denrées alimentaires fraîches), les biens confectionnés/personnalisés sur mesure pour le client, ainsi que les téléchargements numériques déjà exécutés.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Pour lequel de ces achats en ligne le consommateur ne bénéficie-t-il PAS du droit de rétractation ?',
              options: [
                'Un ordinateur portable standard non personnalisé',
                'Un panier de fruits frais périssables ou un t-shirt brodé au prénom du client',
                'Un livre papier standard sous emballage',
                'Une paire de chaussures de série',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les produits périssables, les biens personnalisés et les téléchargements numériques constituent les trois exceptions légales au droit de rétractation.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_droit_num_ch3_p2',
        order: 2,
        title: 'Cybersécurité (triptyque CIA), sécurité vs confidentialité et responsabilités (Loi 2013-451)',
        summary:
          "Maîtriser le triptyque CIA, l'obligation légale de sécurité (Art. 37 Loi 2013-450), la distinction juridique sécurité / confidentialité et les responsabilités civile (réparation) et pénale (Loi 2013-451 Art. 25 et 29).",
        conceptExplanation:
          "La cybersécurité n'est pas un simple choix technique : c'est une OBLIGATION LÉGALE encadrée par le droit (Article 37 de la Loi n° 2013-450 imposant au responsable de traitement de garantir la sécurité des données, et Décision n° 2015-008/ARTCI/CD précisant les mesures minimales : chiffrement, authentification forte, sauvegardes régulières testées, formation du personnel, audit annuel).\n\n1) Triptyque CIA et distinction Sécurité vs Confidentialité :\nLa sécurité des systèmes d'information (SI) protège le système global autour de 3 piliers — le triptyque CIA :\n - C = Confidentiality (Confidentialité : accès réservé aux seules personnes autorisées) ;\n - I = Integrity (Intégrité : exactitude des données, non modifiées sans droit) ;\n - A = Availability (Disponibilité : accessibilité continue du système et des données).\nLa sécurité est donc la FINALITÉ GLOBALE (qui englobe les trois piliers), tandis que la confidentialité en est UN PILIER fondamental (Article 3 de la Loi n° 2013-450). Ainsi, lorsqu'un employé d'une société télécom consulte sans autorisation la base de données clients, il y a DOUBLE atteinte : atteinte à la sécurité du système (contrôle d'accès défaillant — Art. 37, engageant la responsabilité civile de l'entreprise) ET atteinte à la confidentialité des données (Art. 3 + infractions informatiques, engageant la responsabilité disciplinaire et pénale de l'employé).\n\n2) Responsabilité civile vs Responsabilité pénale :\n - Responsabilité civile : vise à RÉPARER le préjudice causé à une victime par une négligence ou une faute, au moyen de dommages et intérêts (ex. divulgation accidentelle de données clients ou perte de dossiers patients d'un hôpital ivoirien en 2022 faute de sauvegardes et de pare-feu).\n - Responsabilité pénale : vise à PUNIR une infraction troublant la société (emprisonnement et/ou amende). La Loi n° 2013-451 sur la cybercriminalité réprime notamment : l'accès frauduleux à un système d'information (Art. 25), l'atteinte à l'intégrité des données, la falsification ou suppression de données (Art. 29) et l'usurpation d'identité numérique. Dans cette situation, l'étudiant qui pirate le Wi-Fi d'un campus universitaire pour modifier ses notes commet un accès frauduleux (Art. 25) et une falsification de données (Art. 29) : il encourt prison, amende et exclusion disciplinaire.",
        formulas: [
          {
            name: 'Triptyque CIA de la cybersécurité',
            formula: 'C (Confidentialité)  ·  I (Intégrité)  ·  A (Disponibilité)',
            note: 'La sécurité englobe les trois piliers ; la confidentialité est l’un de ces trois piliers.',
          },
          {
            name: 'Finalité des deux responsabilités',
            formula: 'Responsabilité civile = RÉPARER le préjudice (dommages-intérêts)  |  Responsabilité pénale = PUNIR l’infraction (prison / amende)',
            note: 'S’y ajoute éventuellement une responsabilité disciplinaire (entreprise / université).',
          },
        ],
        keyRule:
          "Sécurité = finalité globale CIA (Art. 37 Loi 2013-450) ; Confidentialité = pilier d'accès restreint (Art. 3). Civile = réparer ; Pénale = punir (Loi 2013-451 : Art. 25 accès frauduleux, Art. 29 falsification de données).",
        workedExample: {
          title: "Deux cas pratiques — Wi-Fi d'un campus universitaire et Employé télécom",
          statement:
            "Cas 1 : Un étudiant pirate le réseau Wi-Fi d'un campus universitaire pour modifier ses notes. Qualifier les infractions et sanctions.\nCas 2 : Dans une entreprise ivoirienne de télécommunication, un employé accède sans autorisation à la base de données clients. Est-ce une atteinte à la sécurité, à la confidentialité, ou aux deux ?",
          methodSteps: [
            "Cas 1 (Loi n° 2013-451) : Deux infractions pénales cumulées — accès frauduleux à un système d'information (Article 25) et falsification de données (Article 29). Sanctions : emprisonnement, amende et exclusion disciplinaire de l'université.",
            "Cas 2 — Atteinte à la sécurité : le système de contrôle d'accès de l'entreprise n'a pas bloqué l'intrusion interne (manquement à l'obligation de sécurité, Art. 37 Loi 2013-450 et Décision 2015-008/ARTCI/CD → responsabilité civile possible de l'entreprise).",
            "Cas 2 — Atteinte à la confidentialité : l'employé a consulté sans habilitation des données personnelles privées (violation de l'Art. 3 Loi 2013-450 → sanctions disciplinaires et pénales contre l'employé).",
          ],
          conclusion:
            "Cas 1 : Art. 25 + Art. 29 Loi 2013-451 (pénal + disciplinaire). Cas 2 : DOUBLE atteinte simultanée à la sécurité et à la confidentialité.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Triptyque CIA',
            stepTheme: 'Les 3 piliers de la cybersécurité',
            stepTitle: 'Connaître la signification exacte de CIA',
            paragraphText:
              "La sécurité des systèmes d'information vise à garantir trois piliers classiques résumés par l'acronyme CIA : Confidentialité (accès limité aux personnes autorisées), Intégrité (données exactes, ni altérées ni falsifiées) et Disponibilité (système et données accessibles quand on en a besoin).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Que signifient les trois lettres du triptyque CIA en cybersécurité ?',
              options: [
                'Contrôle, Information, Administration',
                'Confidentialité, Intégrité, Disponibilité (Availability)',
                'Cryptographie, Internet, Application',
                'Commerce, Industrie, Assurance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CIA = Confidentiality (Confidentialité), Integrity (Intégrité), Availability (Disponibilité) : les trois piliers de la sécurité d’un SI.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Sécurité vs Confidentialité',
            stepTheme: 'Double violation dans le cas télécom',
            stepTitle: 'Analyser l’accès non autorisé d’un employé à un fichier clients',
            paragraphText:
              "Dans la question de réflexion du Chapitre 5, lorsqu'un employé d'une société télécom consulte sans autorisation la base clients, il y a atteinte AUX DEUX : atteinte à la sécurité (faille du contrôle d'accès, Art. 37 Loi 2013-450) ET atteinte à la confidentialité (consultation non autorisée, Art. 3 Loi 2013-450).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Un employé accède sans autorisation à la base de données clients de son entreprise télécom. S’agit-il d’une atteinte à la sécurité, à la confidentialité, ou aux deux ?',
              options: [
                'Uniquement à la sécurité, pas à la confidentialité',
                'Uniquement à la confidentialité, pas à la sécurité',
                'Aux deux : faille de sécurité du système (Art. 37 Loi 2013-450) et violation de la confidentialité des données (Art. 3)',
                'À aucune des deux puisqu’il est salarié de l’entreprise',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La sécurité est la finalité globale (le contrôle d’accès a failli) et la confidentialité est le pilier violé par la consultation illicite : c’est une double violation.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Civile vs Pénale',
            stepTheme: 'Réparer vs Punir',
            stepTitle: 'Distinguer responsabilité civile et responsabilité pénale',
            paragraphText:
              "La responsabilité civile a pour fonction de RÉPARER un dommage subi par une victime (versement de dommages et intérêts, par exemple en cas de divulgation accidentelle de données). La responsabilité pénale a pour fonction de PUNIR l'auteur d'une infraction définie par la loi (prison et/ou amende).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle est la différence fondamentale entre la responsabilité civile et la responsabilité pénale en droit du numérique ?',
              options: [
                'La responsabilité civile répare le préjudice subi (dommages-intérêts), tandis que la responsabilité pénale punit une infraction (prison/amende)',
                'La responsabilité civile s’applique aux entreprises et jamais aux individus',
                'La responsabilité pénale vise uniquement à rembourser une facture impayée',
                'Il n’existe aucune différence juridique entre les deux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Réparation du dommage = responsabilité civile ; répression/punition de l’infraction = responsabilité pénale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Cas pratique',
            stepTheme: 'Loi n° 2013-451 (Art. 25 et Art. 29)',
            stepTitle: 'Qualifier pénalement le piratage de notes sur le réseau Wi-Fi',
            paragraphText:
              "Dans cette situation, un étudiant qui pirate le réseau Wi-Fi d'un campus universitaire pour modifier ses notes commet deux infractions prévues par la Loi n° 2013-451 sur la cybercriminalité : l'accès frauduleux à un système d'information (Art. 25) et la falsification de données (Art. 29).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelles infractions de la Loi n° 2013-451 commet l’étudiant qui s’introduit illégalement sur le réseau de l’université pour modifier ses notes ?',
              options: [
                'Uniquement une contravention routière',
                'Une simple faute commerciale sans sanction pénale',
                'Une rupture de contrat de franchise',
                'Un accès frauduleux à un système d’information (Art. 25) et une falsification de données (Art. 29)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le cas pratique du Chapitre 5 identifie précisément l’accès frauduleux (Art. 25) et la falsification de données (Art. 29) de la Loi n° 2013-451, passibles de prison, amende et exclusion universitaire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Obligation légale',
            stepTheme: 'Exemple de l’hôpital ivoirien (2022)',
            stepTitle: 'Tirer la leçon d’une perte de dossiers faute de sauvegardes',
            paragraphText:
              "Le cours cite l'exemple d'un hôpital ivoirien ayant perdu en 2022 des dossiers patients après une cyberattaque : l'absence de sauvegardes régulières et de pare-feu a engagé la responsabilité du service informatique. La cybersécurité est une obligation légale, pas une option facultative.",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Dans l’exemple ivoirien de l’hôpital ayant perdu ses dossiers patients lors d’une cyberattaque en 2022, quel pilier du triptyque CIA a été directement compromis par l’absence de sauvegardes ?',
              options: [
                'La disponibilité (et l’intégrité) des données patients',
                'Uniquement le droit de rétractation',
                'Le principe d’unité de commandement',
                'Le seuil de rentabilité',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La perte définitive des dossiers patients faute de sauvegardes rend les données inaccessibles : c'est une atteinte directe à la disponibilité (pilier A du CIA) et à l'obligation légale de sécurité.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Bonnes pratiques',
            stepTheme: 'Mesures techniques et organisationnelles',
            stepTitle: 'Identifier les mesures minimales de sécurité d’un SI',
            paragraphText:
              "Pour respecter l'obligation de sécurité (Art. 37 Loi 2013-450 et Décision 2015-008/ARTCI/CD), une organisation doit combiner mesures techniques (chiffrement, authentification forte / 2FA, mises à jour, pare-feu, sauvegardes testées) et organisationnelles (formation/sensibilisation au phishing, audit de sécurité annuel).",
            exercise: {
              id: 'lmd_entd_l1_intro_droit_num_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Laquelle de ces actions constitue une mesure ORGANISATIONNELLE (et non purement technique) de cybersécurité recommandée par le cours ?',
              options: [
                'Installer un pare-feu réseau',
                'Former et sensibiliser régulièrement le personnel et les étudiants aux risques (phishing, mots de passe, sauvegardes)',
                'Activer le chiffrement AES sur les disques durs',
                'Mettre à jour le logiciel antivirus',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La cybersécurité combine mesures techniques (pare-feu, chiffrement, antivirus) et mesures organisationnelles/humaines (formation, sensibilisation au phishing, gouvernance et audits).',
            },
          },
        ],
      }),
    ],
  },
];
