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

export const DROIT_NUMERIQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : CADRE APPROFONDI DE LA PROTECTION DES DONNÉES PERSONNELLES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch1',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Cadre approfondi de la protection des données personnelles (Loi 2013-450 & RGPD)',
    summary:
      'Gouvernance des données personnelles : acteurs et statut du Correspondant/DPO (Arrêté n° 511), comparaison Loi 2013-450 et RGPD, formalités ARTCI et transferts internationaux (Décret n° 2015-79), les 10 droits numériques (profilage, portabilité, oubli) et sécurité by design.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch1_p1',
        order: 1,
        title: 'Acteurs du traitement, statut du DPO (Arrêté n° 511), comparatif RGPD et Privacy by Design',
        summary:
          'Maîtriser la répartition des responsabilités entre responsable du traitement, sous-traitant et DPO, comparer la Loi ivoirienne n° 2013-450 au RGPD européen et intégrer la protection dès la conception (Privacy by Design).',
        conceptExplanation:
          'La protection des données à caractère personnel (DCP) en Côte d’Ivoire s’articule autour de la Loi n° 2013-450 du 19 juin 2013 — inspirée de la Convention 108 du Conseil de l’Europe (1981) et en dialogue avec le RGPD européen (Règlement UE 2016/679 entré en application en 2018) — complétée par le Décret n° 2015-79 du 4 février 2015 et l’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014.\n\n1) Les cinq acteurs juridiques d’un traitement : la personne concernée (individu identifié ou identifiable), le responsable du traitement (qui fixe finalités et moyens), le sous-traitant (prestataire agissant sur instructions écrites), le Correspondant à la protection / DPO (veille interne indépendante définie par l’Arrêté n° 511) et l’ARTCI (autorité de régulation).\n2) L’approche comparée Loi 2013-450 / RGPD : si les grands principes convergent (licéité, finalité, proportionnalité, sécurité), le droit ivoirien repose sur un contrôle préalable administratif auprès de l’ARTCI (déclarations et autorisations), là où le RGPD privilégie la responsabilisation a posteriori (« accountability »), l’analyse d’impact (AIPD) et des amendes pouvant atteindre 4 % du chiffre d’affaires mondial.\n3) La sécurité et la protection dès la conception (Privacy by Design & by Default) imposent aux architectes numériques d’intégrer minimisation, chiffrement et pseudonymisation dès la phase de code.',
        formulas: [
          {
            name: 'Qualification de la responsabilité dans un traitement',
            formula: 'Finalités + Moyens décidés = Responsable du traitement  |  Exécution sur instructions = Sous-traitant',
            note: 'Un sous-traitant qui détourne les données pour son propre compte devient responsable de traitement de fait et engage sa propre responsabilité.',
          },
        ],
        keyRule:
          'Responsable = décide le « pourquoi » et le « comment » ; Sous-traitant = agit sur instructions ; DPO (Arrêté n° 511) = veille interne et interface ARTCI ; Privacy by Design = sécurité intégrée dès la conception.',
        workedExample: {
          title: 'Structurer la gouvernance DCP d’une fintech ivoirienne opérant en zone UEMOA',
          statement:
            'Une fintech basée à Abidjan lance un portefeuille mobile utilisant l’hébergement d’un prestataire cloud européen et souhaite recruter un Correspondant à la protection tout en respectant à la fois la Loi 2013-450 et le RGPD.',
          methodSteps: [
            '1. Qualifier les rôles : la fintech est responsable du traitement (elle choisit les finalités de paiement et les données collectées) ; l’hébergeur cloud est sous-traitant lié par un contrat encadrant la confidentialité et la sécurité.',
            '2. Nommer un Correspondant à la protection (DPO) conforme à l’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014 : il tient le registre interne, conseille les développeurs et dialogue avec l’ARTCI.',
            '3. Appliquer le Privacy by Design : chiffrer les données bancaires en transit et au repos, pseudonymiser les journaux applicatifs et limiter les accès par défaut.',
          ],
          conclusion:
            'Cette gouvernance assure la conformité ivoirienne (Loi 2013-450) tout en atteignant les standards internationaux du RGPD.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Donnée & Traitement',
            stepTheme: 'Périmètre de la Loi n° 2013-450',
            stepTitle: 'Qualifier une donnée personnelle et une donnée sensible',
            paragraphText:
              'À l’ère des traces numériques permanentes, toute information rattachable à un individu déclenche l’application du droit protecteur.\n• **Donnée à caractère personnel (DCP)** : toute information relative à une personne physique identifiée ou identifiable directement (nom, CNI) ou indirectement (adresse IP, identifiant mobile, voix, géolocalisation).\n• **Donnée sensible** : donnée révélant l’origine raciale ou ethnique, les opinions politiques ou religieuses, la santé, la vie sexuelle, les données génétiques ou biométriques.\n• **Exemple pratique** : le numéro de téléphone couplé à l’historique Mobile Money d’un commerçant à Bouaké constitue une DCP protégée dès sa collecte.',
            formula: {
              name: 'Critère d’identification (Art. 1 Loi n° 2013-450)',
              formula: 'Identification directe (Nom, Photo)  ∪  Identification indirecte (IP, Cookie, IMEI, Géolocalisation)  ⟹  Donnée personnelle',
              note: 'Même chiffrée ou pseudonymisée, une donnée reste personnelle tant qu’un ré-appariement demeure possible.',
            },
            keyRule:
              'Dès qu’une donnée permet d’identifier une personne physique, même par recoupement technique (IP, cookie, IMEI), la Loi n° 2013-450 s’applique intégralement.',
            konanTip:
              'Ne confonds pas donnée anonyme (irréversible, hors champ de la loi) et donnée pseudonymisée (ré-identifiable via une clé, qui reste soumise à la loi).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Une start-up abidjanaise stocke uniquement l’identifiant publicitaire du smartphone (IMEI) et les coordonnées GPS quotidiennes d’un utilisateur sans enregistrer son nom. Ces informations sont-elles des données à caractère personnel ?',
              options: [
                'Non, car le nom et le prénom ne figurent pas dans la base',
                'Oui, car elles permettent d’identifier indirectement une personne physique par recoupement',
                'Non, car les coordonnées GPS sont des données purement géographiques',
                'Oui, uniquement si l’utilisateur possède un passeport biométrique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La définition légale englobe toute personne identifiable directement OU indirectement : l’IMEI combiné aux trajets GPS permet d’individualiser une personne physique précise.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Chaîne de responsabilité',
            stepTheme: 'Responsable vs Sous-traitant',
            stepTitle: 'Répartir les obligations entre responsable et sous-traitant',
            paragraphText:
              'Les projets numériques externalisent fréquemment l’hébergement ou l’envoi de SMS, ce qui impose de tracer juridiquement qui décide et qui exécute.\n• **Responsable du traitement** : personne physique ou morale (entreprise, ministère, ONG) qui détermine les finalités (le pourquoi) et les moyens essentiels du traitement.\n• **Sous-traitant** : prestataire (hébergeur cloud, agence marketing, éditeur SaaS) qui traite les données exclusivement pour le compte et sur instructions documentées du responsable.\n• **Exemple pratique** : une clinique d’Abidjan qui choisit un prestataire pour héberger ses dossiers médicaux reste responsable du traitement ; le prestataire est sous-traitant.',
            keyRule:
              'Le recours à un sous-traitant exige un contrat écrit précisant les obligations de sécurité et l’interdiction d’utiliser les données pour ses propres fins.',
            konanTip:
              'Piège classique : si un hébergeur revend ou exploite les e-mails hébergés pour sa propre publicité, il perd le statut de simple sous-traitant et devient responsable illégal.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Une entreprise e-commerce ivoirienne confie à un prestataire externe l’envoi automatisé de ses factures clients en lui fournissant la base d’adresses. Que se passe-t-il si ce prestataire utilise la base pour promouvoir ses propres produits ?',
              options: [
                'C’est légal car il héberge techniquement le fichier',
                'L’entreprise cliente est automatiquement dissoute',
                'Le prestataire outrepasse son mandat de sous-traitant et devient responsable illicite d’un traitement détourné',
                'L’ARTCI valide automatiquement ce nouvel usage commercial',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le sous-traitant ne peut agir que sur instructions du responsable du traitement ; en détournant le fichier à ses propres fins, il commet une violation de finalité et engage sa responsabilité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Statut du DPO',
            stepTheme: 'Arrêté n° 511/MPTIC/CAB',
            stepTitle: 'Maîtriser le statut et les missions du Correspondant (DPO)',
            paragraphText:
              'Pour structurer la conformité de l’intérieur, la Côte d’Ivoire a créé un statut dédié de Correspondant à la protection des données (DPO).\n• **Base légale** : l’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014 fixe le profil, les compétences et les conditions d’emploi du Correspondant à la protection.\n• **Missions clés** : tenir la liste des traitements, conseiller les dirigeants, sensibiliser les équipes, contrôler la conformité interne et servir de point de contact officiel avec l’ARTCI.\n• **Exemple pratique** : une banque de la place désigne un DPO rattaché directement à la direction générale afin de garantir son indépendance sans conflit d’intérêts avec l’équipe marketing.',
            keyRule:
              'Le Correspondant à la protection (DPO), encadré par l’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014, doit exercer ses missions en toute indépendance et sans conflit d’intérêts.',
            konanTip:
              'En entreprise, le directeur commercial ou le chef de la sécurité informatique qui décident seuls des finalités ne devraient pas cumuler leur poste avec celui de DPO.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quel texte ivoirien définit précisément le profil et les conditions d’emploi du Correspondant à la protection des données personnelles (DPO) ?',
              options: [
                'L’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014',
                'La Loi n° 2016-555 sur le droit d’auteur',
                'La Convention de Budapest du 23 novembre 2001',
                'Le Code de procédure pénale de 2018',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014 précise le profil, les garanties d’indépendance et les conditions d’emploi du Correspondant à la protection auprès des organismes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Droit comparé',
            stepTheme: 'Loi 2013-450 vs RGPD',
            stepTitle: 'Comparer la Loi ivoirienne n° 2013-450 et le RGPD européen',
            paragraphText:
              'Les entreprises numériques africaines collaborent souvent avec des partenaires européens, rendant indispensable la maîtrise comparée des deux cadres.\n• **Logique de contrôle** : la Loi 2013-450 maintient des formalités préalables auprès de l’ARTCI (déclaration/autorisation), alors que le RGPD (2018) supprime la majorité des déclarations au profit de l’accountability (responsabilisation documentée).\n• **Portée extraterritoriale** : le RGPD s’applique à toute entreprise hors UE qui cible des résidents européens ou suit leur comportement en ligne.\n• **Exemple pratique** : une plateforme touristique ivoirienne proposant des paiements en euros à des clients résidant en France doit respecter à la fois la Loi 2013-450 et le RGPD.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparatif Loi n° 2013-450 (Côte d’Ivoire) vs RGPD (Union Européenne)',
              caption: 'Articulation entre le régime d’autorisation préalable ivoirien et la logique d’accountability européenne.',
              tableData: {
                headers: ['Critère', 'Loi n° 2013-450 (CI)', 'RGPD (UE 2016/679)'],
                rows: [
                  ['Année d’adoption', '19 juin 2013', '27 avril 2016 (appl. 2018)'],
                  ['Autorité de contrôle', 'ARTCI (Côte d’Ivoire)', 'CNIL et autorités nationales UE'],
                  ['Formalités préalables', 'Déclaration / Autorisation / Avis', 'Supprimées (Registre + AIPD)'],
                  ['DPO / Correspondant', 'Facultatif (allège formalités)', 'Obligatoire (secteur public / grande échelle)'],
                  ['Notification de fuite', 'Obligation sécurité & ARTCI', '72 heures max à l’autorité'],
                  ['Sanctions max', 'Administratives + pénales (Loi 2013-450)', 'Jusqu’à 20 M€ ou 4 % CA mondial'],
                ],
              },
            },
            keyRule:
              'Loi 2013-450 = contrôle administratif préalable (ARTCI) ; RGPD = responsabilisation interne (registre, AIPD, notification en 72 h, portée extraterritoriale).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle différence majeure distingue le mécanisme de conformité du RGPD européen de celui de la Loi ivoirienne n° 2013-450 ?',
              options: [
                'Le RGPD interdit totalement l’usage d’Internet pour le commerce',
                'Le RGPD supprime la plupart des déclarations préalables au profit de l’accountability (registre interne, AIPD), alors que la Loi 2013-450 repose sur des formalités préalables auprès de l’ARTCI',
                'La Loi 2013-450 ne protège que les personnes morales (entreprises)',
                'Le RGPD ne s’applique jamais aux entreprises situées hors d’Europe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Loi 2013-450 exige des déclarations ou autorisations préalables auprès de l’ARTCI, tandis que le RGPD remplace ces formalités par une documentation interne continue (accountability) et une portée extraterritoriale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Privacy by Design',
            stepTheme: 'Sécurité dès la conception',
            stepTitle: 'Appliquer le Privacy by Design et la protection par défaut',
            paragraphText:
              'La conformité ne doit pas être ajoutée après un piratage ; elle s’architecture dès les premières lignes de code et le choix des paramètres.\n• **Privacy by Design (dès la conception)** : intégrer minimisation des champs, chiffrement AES/TLS, cloisonnement des bases et journalisation des accès avant même la mise en production.\n• **Privacy by Default (par défaut)** : régler les paramètres initiaux au niveau le plus protecteur sans action requise de l’usager (profil privé, opt-in non précoché).\n• **Exemple pratique** : une application de covoiturage à Abidjan masque les numéros de téléphone réels des passagers via un relais chiffré temporaire et purge les trajets après 90 jours.',
            keyRule:
              'Privacy by Design = technique protectrice intégrée au cahier des charges ; Privacy by Default = réglage le plus strict activé d’office pour l’utilisateur.',
            konanTip:
              'Dans un audit logiciel, l’absence de chiffrement des mots de passe (hachage salé type bcrypt/Argon2) constitue un manquement direct à l’obligation de sécurité.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Lors du lancement d’un réseau social étudiant, tous les profils sont configurés automatiquement comme « visibles uniquement par les amis validés » et la géolocalisation est désactivée au départ. Quel principe illustre ce choix ?',
              options: [
                'La réquisition judiciaire automatique',
                'Le Privacy by Default (protection des données par défaut)',
                'Le cybersquatting préventif',
                'La liberté de piratage éthique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Privacy by Default garantit que, sans intervention de l’utilisateur, seuls les paramètres les plus respectueux de la vie privée et les données strictement nécessaires sont activés.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'AIPD / Analyse de risque',
            stepTheme: 'Traitements à risque élevé',
            stepTitle: 'Conduire une analyse d’impact préalable sur les projets sensibles',
            paragraphText:
              'Avant de déployer une technologie intrusive (reconnaissance faciale, scoring automatisé, télémédecine), une évaluation rigoureuse des risques s’impose.\n• **Analyse d’Impact (AIPD / PIA)** : démarche méthodique décrivant le traitement, évaluant sa nécessité/proportionnalité et mesurant les risques pour les libertés afin de définir des contre-mesures.\n• **Critères déclencheurs** : données sensibles à grande échelle, surveillance systématique (vidéosurveillance intelligente), profilage produisant des effets juridiques ou croisement de fichiers.\n• **Exemple pratique** : avant d’installer un portique de reconnaissance faciale dans un campus universitaire, l’équipe projette l’AIPD et préfère une carte RFID moins intrusive.',
            konanTip:
              'Si un risque élevé subsiste malgré les mesures techniques, le responsable doit impérativement consulter ou solliciter l’autorisation de l’ARTCI avant déploiement.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Dans quelle situation la réalisation d’une Analyse d’Impact relative à la Protection des Données (AIPD) est-elle particulièrement indispensable avant la mise en production ?',
              options: [
                'Pour un carnet d’adresses familial stocké sur un téléphone personnel',
                'Pour la publication du menu hebdomadaire d’une cantine sans nom d’élève',
                'Pour le déploiement d’un système de vidéosurveillance biométrique ou de scoring de crédit automatisé à grande échelle',
                'Pour l’impression d’une affiche papier ne contenant aucune donnée personnelle',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les traitements à risque élevé (biométrie, surveillance systématique, profilage ou données de santé à grande échelle) exigent une évaluation préalable des risques et des garanties de sécurité.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch1_p2',
        order: 2,
        title: 'Formalités préalables (Décret n° 2015-79), transferts internationaux et pouvoirs de l’ARTCI',
        summary:
          'Distinguer avec précision les 4 régimes de formalités (dispense, déclaration, autorisation, avis motivé), maîtriser les règles de transfert international hors Côte d’Ivoire et connaître les contrôles a priori et a posteriori de l’ARTCI.',
        conceptExplanation:
          'En Côte d’Ivoire, la mise en œuvre d’un traitement de données personnelles obéit à une gradation stricte organisée par la Loi n° 2013-450 et le Décret n° 2015-79 du 4 février 2015 :\n\n1) Régime de liberté (dispense) : usages exclusivement personnels, domestiques ou familiaux, registres purement personnels, ou fichiers internes d’associations à but non lucratif (religieuses, philosophiques, politiques, syndicales) limités à leurs seuls membres sans communication à des tiers.\n2) Déclaration préalable (droit commun) : formalité standard donnant lieu à la délivrance d’un récépissé par l’ARTCI (qui n’exonère pas du respect de la loi).\n3) Autorisation préalable de l’ARTCI (régime d’exception) : obligatoire pour les données génétiques, médicales et recherche associée, données biométriques, condamnations pénales/sûreté, interconnexion de fichiers, motifs d’intérêt public (historique/statistique/scientifique) et TRANSFERTS vers des pays tiers.\n4) Demande d’avis motivé de l’ARTCI (fichiers publics régaliens) : traitements pour le compte de l’État/service public portant sur la sûreté de l’État, la défense, les infractions, le recensement ou les impôts/salaires/pensions, autorisés par décret en Conseil des ministres après avis motivé de l’ARTCI.\n\nEnfin, tout transfert vers un pays tiers suppose en principe que l’État destinataire assure un niveau de protection adéquat ou bénéficie d’une autorisation préalable de l’ARTCI encadrée par des garanties contractuelles. L’ARTCI exerce un contrôle a priori (autoriser/refuser) et a posteriori (accès aux systèmes informatiques, enquêtes, sanctions administratives et saisine du procureur de la République).',
        formulas: [
          {
            name: 'Échelle des 4 régimes administratifs (Décret n° 2015-79)',
            formula: 'Dispense (domestique) < Déclaration (récépissé) < Autorisation ARTCI (biométrie, santé, pays tiers) < Décret Conseil des ministres + Avis ARTCI (État)',
            note: 'La désignation d’un Correspondant à la protection (DPO) peut alléger certaines formalités déclaratives ordinaires.',
          },
        ],
        keyRule:
          'Transfert hors Côte d’Ivoire, biométrie, santé/génétique, interconnexion = AUTORISATION préalable de l’ARTCI. Fichiers régaliens de l’État = Décret en Conseil des ministres après AVIS motivé de l’ARTCI.',
        workedExample: {
          title: 'Choisir la formalité ARTCI pour une plateforme de télémédecine et d’imagerie biométrique',
          statement:
            'Une start-up ivoirienne lance une application de téléconsultation qui collecte des dossiers médicaux, authentifie les médecins par empreinte digitale et sauvegarde les données sur un cloud situé hors de la CEDEAO.',
          methodSteps: [
            '1. Identifier les catégories de risques : présence de données médicales (données de santé), de données biométriques (empreinte digitale) et d’un transfert international vers un pays tiers.',
            '2. Écarter la simple déclaration préalable : elle ne suffit que pour les traitements ordinaires de droit commun (facturation, paie interne sans biométrie ni transfert sensible).',
            '3. Appliquer le régime légal : déposer une demande d’AUTORISATION préalable auprès de l’ARTCI (conformément au Décret n° 2015-79) en justifiant le niveau de protection du pays tiers ou les clauses contractuelles de sécurité.',
          ],
          conclusion:
            'Le traitement ne peut légalement démarrer qu’après obtention de l’autorisation expresse de l’ARTCI.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Régime de liberté',
            stepTheme: 'Cas de dispense de formalités',
            stepTitle: 'Identifier les traitements dispensés de formalité ARTCI',
            paragraphText:
              'La loi évite d’alourdir la vie privée quotidienne ou la vie associative interne par des procédures bureaucratiques inutiles.\n• **Usage domestique et personnel** : traitements effectués par une personne physique dans le cadre exclusif de ses activités personnelles, domestiques ou familiales, ou tenue d’un registre strictement personnel.\n• **Associations à but non lucratif** : organismes religieux, philosophiques, politiques ou syndicaux, uniquement pour les données liées à leur objet, concernant leurs seuls membres et sans communication à des tiers.\n• **Exemple pratique** : le répertoire téléphonique familial d’un étudiant ou la liste des cotisations internes d’une chorale paroissiale est dispensé de déclaration.',
            keyRule:
              'Dès qu’une association communique son fichier de membres à un partenaire commercial ou à des tiers extérieurs, elle perd le bénéfice de la dispense.',
            konanTip:
              'Attention à la frontière : la vidéo-surveillance d’un particulier qui filme la voie publique sort du cadre strictement domestique et redevient soumise à la loi.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Un syndicat professionnel ivoirien tient un fichier de ses adhérents pour gérer les cotisations, mais décide de le vendre à une compagnie d’assurances tierce. Peut-il encore invoquer la dispense de déclaration ?',
              options: [
                'Oui, tout syndicat est dispensé à vie quoi qu’il fasse des données',
                'Non, car la dispense associative exige l’absence de communication à des tiers et le respect strict de l’objet associatif',
                'Oui, si le fichier contient moins de 1 000 lignes',
                'Oui, à condition d’utiliser un tableur chiffré',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La dispense prévue pour les organismes à but non lucratif (religieux, philosophiques, politiques, syndicaux) tombe dès que les données concernent des non-membres ou sont communiquées à des tiers.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Droit commun',
            stepTheme: 'Déclaration préalable',
            stepTitle: 'Comprendre la portée de la déclaration préalable et du récépissé',
            paragraphText:
              'Pour la grande majorité des fichiers courants d’entreprise, le législateur a prévu une procédure allégée mais obligatoire avant toute collecte.\n• **Déclaration préalable** : formalité de droit commun déposée auprès de l’ARTCI avant le lancement de tout traitement ordinaire (gestion clients, fournisseurs, ressources humaines sans biométrie).\n• **Effet juridique du récépissé** : l’ARTCI délivre un récépissé autorisant la mise en œuvre, mais ce récépissé ne dispense jamais de respecter les principes légaux (consentement, sécurité, durée limitée).\n• **Exemple pratique** : une boutique en ligne d’Abidjan déclare son fichier clients/commandes et reçoit son récépissé avant d’ouvrir son site au public.',
            keyRule:
              'Obtenir un récépissé de déclaration auprès de l’ARTCI ne constitue ni un brevet d’impunité ni une dispense de respecter la sécurité et les droits des usagers.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Une PME déclare son fichier clients auprès de l’ARTCI et reçoit un récépissé. Est-elle pour autant exonérée de recueillir le consentement de ses clients pour de la prospection commerciale ?',
              options: [
                'Oui, le récépissé vaut autorisation de tout faire',
                'Oui, pendant les cinq premières années',
                'Non, le récépissé confirme l’enregistrement de droit commun mais n’exonère jamais du respect des principes directeurs de la loi',
                'Oui, si la PME emploie moins de dix salariés',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La déclaration préalable est la formalité de droit commun ; le récépissé délivré par l’ARTCI ne dispense jamais le responsable de respecter le consentement, la finalité, la proportionnalité et la sécurité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Régime d’exception',
            stepTheme: 'Autorisation préalable ARTCI',
            stepTitle: 'Repérer les 6 cas exigeant une autorisation préalable de l’ARTCI',
            paragraphText:
              'Certains traitements présentent des risques graves pour la vie privée ou les libertés et ne peuvent débuter sur simple déclaration.\n• **Autorisation préalable obligatoire** : (1) données génétiques, médicales et recherche scientifique ; (2) condamnations pénales et mesures de sûreté ; (3) interconnexion de fichiers aux finalités distinctes ; (4) données biométriques ; (5) motifs d’intérêt public (historiques/statistiques/scientifiques) ; (6) transferts de données vers des pays tiers.\n• **Conséquence** : sans décision favorable préalable de l’ARTCI, le traitement est illicite dès son premier jour.\n• **Exemple pratique** : installer un badgeage par empreinte digitale pour contrôler les retards des employés exige une autorisation préalable de l’ARTCI.',
            visualSchema: {
              type: 'flowchart',
              title: 'Arbre décisionnel des formalités ARTCI (Décret n° 2015-79)',
              caption: 'Déterminer en 4 questions le régime juridique applicable avant le lancement d’un traitement.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    kind: 'start',
                    label: 'Projet de traitement de données personnelles',
                    sublabel: 'Identifier la nature des données, l’acteur et la destination',
                    color: 'slate',
                  },
                  {
                    kind: 'decision',
                    label: 'Usage exclusivement domestique / associatif interne ?',
                    sublabel: 'Sans communication à des tiers',
                    color: 'green',
                    branchLabel: 'OUI',
                    branchTarget: 'Régime de liberté (Dispense de formalité)',
                  },
                  {
                    kind: 'decision',
                    label: 'Fichier régalien de l’État (Sûreté, Impôts, Recensement) ?',
                    sublabel: 'Opéré pour le compte de l’État / service public',
                    color: 'violet',
                    branchLabel: 'OUI',
                    branchTarget: 'Décret en Conseil des ministres après avis motivé ARTCI',
                  },
                  {
                    kind: 'decision',
                    label: 'Santé, biométrie, interconnexion ou transfert pays tiers ?',
                    sublabel: 'Traitements sensibles ou transfrontaliers à risque',
                    color: 'orange',
                    branchLabel: 'OUI',
                    branchTarget: 'Autorisation préalable obligatoire de l’ARTCI',
                  },
                  {
                    kind: 'end',
                    label: 'Sinon : Déclaration préalable (Droit commun)',
                    sublabel: 'Délivrance d’un récépissé ARTCI + respect des principes légaux',
                    color: 'blue',
                  },
                ],
              },
            },
            keyRule:
              'Mémo des 6 cas d’autorisation ARTCI : Génétique/Médical · Condamnations · Interconnexion · Biométrie · Intérêt public statistique/historique · Transfert pays tiers.',
            konanTip:
              'La biométrie (empreinte digitale, reconnaissance faciale, iris) déclenche systématiquement le régime d’autorisation préalable car elle est irrévocable en cas de vol.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces traitements échappe à la simple déclaration préalable et exige obligatoirement une autorisation préalable de l’ARTCI ?',
              options: [
                'La liste interne des adhérents d’une association sportive sans partage externe',
                'Le carnet de contacts personnel d’un étudiant',
                'La mise en place d’un contrôle d’accès par empreinte biométrique couplé à une interconnexion de fichiers',
                'Un fichier ordinaire de facturation client local sans transfert étranger',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les données biométriques et l’interconnexion de fichiers figurent parmi les cas limitatifs soumis à autorisation préalable de l’ARTCI en vertu de la Loi n° 2013-450.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Fichiers régaliens',
            stepTheme: 'Demande d’avis et décret',
            stepTitle: 'Maîtriser le régime des fichiers publics soumis à avis de l’ARTCI',
            paragraphText:
              'Lorsque l’État ou un organisme exerçant une mission de service public traite des données sensibles à l’échelle nationale, une double garantie politique et technique est exigée.\n• **Procédure spécifique** : le traitement est autorisé par Décret pris en Conseil des ministres, APRÈS avis motivé de l’ARTCI.\n• **Champs concernés** : sûreté de l’État, défense nationale, sécurité publique, infractions/condamnations, recensement général de la population, et traitement public des salaires, pensions, impôts ou taxes.\n• **Exemple pratique** : l’opération nationale de recensement démographique ou la gestion centralisée des impôts par la DGI relève d’un décret pris après avis motivé de l’ARTCI.',
            keyRule:
              'Fichiers régaliens (Défense, Sûreté, Recensement, Impôts/Salaires publics) = Avis motivé de l’ARTCI + Décret pris en Conseil des ministres.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle procédure juridique encadre la création d’un fichier national portant sur le recensement de la population ou le traitement des impôts et pensions par l’État ?',
              options: [
                'Une dispense totale de toute formalité',
                'Un décret pris en Conseil des ministres après avis motivé de l’ARTCI',
                'Un simple accord verbal entre développeurs',
                'Une annonce publiée uniquement sur un réseau social',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les fichiers opérés pour le compte de l’État relatifs à la sûreté, à la défense, au recensement ou aux salaires/pensions/impôts nécessitent un décret en Conseil des ministres pris après avis motivé de l’ARTCI.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Flux transfrontaliers',
            stepTheme: 'Transfert international de données',
            stepTitle: 'Encadrer le transfert international de données hors Côte d’Ivoire',
            paragraphText:
              'Héberger une base de données sur un serveur situé en Europe, en Amérique ou en Asie constitue juridiquement un transfert international de données personnelles.\n• **Principe d’adéquation** : le transfert vers un pays tiers n’est autorisé que si ce pays assure un niveau de protection suffisant de la vie privée et des libertés.\n• **Rôle de l’ARTCI et garanties** : en Côte d’Ivoire, le transfert vers un pays tiers est soumis à autorisation préalable de l’ARTCI, sauf dérogations encadrées (consentement exprès, exécution d’un contrat, clauses contractuelles protectrices).\n• **Exemple pratique** : une banque ivoirienne qui réplique ses sauvegardes sur un datacenter aux États-Unis doit solliciter l’autorisation de l’ARTCI et encadrer le transfert par des clauses contractuelles strictes.',
            formula: {
              name: 'Conditions du transfert international (Loi 2013-450)',
              formula: 'Pays tiers adéquat  ∨  (Autorisation ARTCI  +  Garanties contractuelles / Dérogation légale)',
              note: 'L’hébergement dans un cloud étranger est toujours un transfert international, même si seule l’entreprise ivoirienne consulte les données.',
            },
            keyRule:
              'Stocker des données sur un serveur situé à l’étranger est un transfert international soumis au contrôle et à l’autorisation préalable de l’ARTCI.',
            konanTip:
              'Vérifie toujours la localisation physique des datacenters de tes fournisseurs SaaS ou cloud avant la mise en production d’une application en Côte d’Ivoire.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Une start-up basée à Yamoussoukro utilise un serveur cloud hébergé en Amérique du Nord pour stocker les profils de ses utilisateurs ivoiriens. Sur le plan juridique, de quoi s’agit-il ?',
              options: [
                'D’un simple traitement local dispensé de toute règle sur les flux transfrontaliers',
                'D’un transfert international de données vers un pays tiers soumis à autorisation préalable de l’ARTCI et à des garanties de protection',
                'D’une infraction criminelle automatiquement passible de perpétuité',
                'D’une activité relevant uniquement du droit maritime',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès que des données personnelles franchissent les frontières vers un serveur situé dans un pays tiers, il y a transfert international soumis à l’exigence d’un niveau de protection adéquat et à l’autorisation préalable de l’ARTCI.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Contrôles ARTCI',
            stepTheme: 'A priori et a posteriori',
            stepTitle: 'Distinguer le contrôle a priori et le contrôle a posteriori de l’ARTCI',
            paragraphText:
              'Gendarme des données personnelles en Côte d’Ivoire, l’ARTCI agit à la fois en prévention avant la collecte et en vérification sur le terrain après le déploiement.\n• **Contrôle a priori** : examen des dossiers de déclaration, délivrance ou refus des autorisations pour les traitements sensibles, et émission d’avis motivés pour les projets publics.\n• **Contrôle a posteriori** : vérifications sur pièces ou sur place (droit d’accès aux locaux et aux systèmes informatiques), instruction des plaintes des citoyens et prononcé de sanctions.\n• **Exemple pratique** : suite au signalement d’une fuite de numéros CNI, les contrôleurs de l’ARTCI inspectent les serveurs de l’entreprise fautive et ordonnent une mise en conformité sous astreinte.',
            keyRule:
              'Contrôle a priori = autoriser/refuser avant mise en œuvre ; Contrôle a posteriori = auditer les systèmes, enquêter sur plainte et sanctionner les manquements.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Dans le cadre de son contrôle a posteriori, de quel pouvoir d’investigation technique dispose l’ARTCI auprès d’un responsable de traitement ?',
              options: [
                'Elle ne peut envoyer qu’un courrier amical sans pouvoir vérifier les serveurs',
                'Elle dispose d’un droit d’accès aux systèmes informatiques, d’un pouvoir d’enquête et de sanction administrative',
                'Elle doit demander l’autorisation écrite du hacker avant d’auditer',
                'Elle ne peut contrôler que les journaux papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour vérifier la conformité réelle des traitements, l’ARTCI dispose d’un droit d’accès aux systèmes informatiques, d’un pouvoir d’enquête, d’injonction et de sanction administrative.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'piege',
            stepBadge: 'Sanctions pénales',
            stepTheme: 'Saisine du Procureur',
            stepTitle: 'Articuler sanctions administratives de l’ARTCI et poursuites pénales',
            paragraphText:
              'L’ARTCI est une autorité administrative indépendante : elle ne prononce pas de peines de prison, mais son action s’articule étroitement avec la justice pénale.\n• **Sanctions administratives** : avertissement, mise en demeure, retrait provisoire ou définitif d’autorisation, interdiction du traitement et sanctions pécuniaires administratives.\n• **Volet pénal** : lorsqu’elle constate une infraction grave (collecte frauduleuse, violation délibérée de confidentialité, entrave à contrôle), l’ARTCI saisit le Procureur de la République.\n• **Exemple pratique** : face à un trafic organisé de bases de données bancaires, l’ARTCI bloque le traitement et transmet le dossier au Procureur et à la PLCC pour poursuites pénales.',
            keyRule:
              'L’ARTCI prononce des sanctions administratives (mise en demeure, retrait d’autorisation, amende administrative) et saisit le Procureur de la République en cas d’infraction pénale grave.',
            konanTip:
              'Une même violation de données peut cumuler sanction administrative (ARTCI), condamnation pénale (tribunal correctionnel) et dommages-intérêts civils aux victimes.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q7',
              type: 'mcq',
              prompt:
                'Que fait l’ARTCI lorsqu’elle découvre, lors d’une enquête sur une entreprise, une violation constituant une infraction pénale grave aux règles sur les données personnelles ?',
              options: [
                'Elle prononce elle-même une peine de 10 ans d’emprisonnement ferme',
                'Elle classe le dossier sans suite si l’entreprise paie une taxe',
                'Elle saisit le Procureur de la République afin d’engager l’action pénale, en complément de ses mesures administratives',
                'Elle efface définitivement le site web sans décision de justice',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’ARTCI étant une autorité administrative, elle ne prononce pas de peine privative de liberté ; elle sanctionne administrativement et saisit le Procureur de la République pour les infractions graves.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch1_p3',
        order: 3,
        title: 'Les 10 droits numériques de la personne concernée (profilage, portabilité, oubli) et obligations de sécurité',
        summary:
          'Maîtriser chacun des 10 droits reconnus aux citoyens (y compris le refus de décision automatisée/profilage, la portabilité, le déréférencement et l’oubli numérique) et les obligations techniques strictes des responsables de traitement.',
        conceptExplanation:
          'La Loi n° 2013-450 (notamment à partir des articles 14 et suivants) érige un véritable bouclier de 10 droits numériques au profit de la personne concernée, en contrepartie de 5 principes directeurs et d’obligations techniques strictes imposées aux responsables :\n\n1) Les droits de maîtrise en amont : droit de consentir au traitement (consentement libre, spécifique et éclairé), droit à l’information transparente (identité du responsable, finalités, destinataires, durée, droits).\n2) Les droits de contrôle pendant le traitement : droit d’accès (obtenir une copie intelligible des données détenues), droit de rectification (corriger des données inexactes/incomplètes), droit d’opposition (refuser pour motif légitime ou sans motif pour la prospection commerciale) et droit de refus du profilage et des décisions entièrement automatisées (ex. refus de crédit ou de recrutement pris par un seul algorithme sans intervention humaine).\n3) Les droits de sortie et de maîtrise de l’empreinte numérique : droit à la portabilité (récupérer ses données dans un format structuré réutilisable), droit à l’effacement (suppression des données), droit au déréférencement (retirer un lien d’un moteur de recherche) et droit à l’oubli numérique (en particulier pour les mineurs ou faits anciens).\n\nEn miroir, le responsable doit garantir la confidentialité (accès aux seules personnes habilitées), l’identification traçable des agents accédant aux fichiers, la sauvegarde sécurisée et la suppression à l’issue de la durée légale.',
        formulas: [
          {
            name: 'Les 3 familles des 10 droits numériques',
            formula: 'Amont (Consentement, Information)  +  Contrôle (Accès, Rectification, Opposition, Non-profilage)  +  Sortie (Portabilité, Effacement, Déréférencement, Oubli)',
            note: 'S’y ajoutent les 5 principes directeurs : Consentement · Finalité · Proportionnalité · Sécurité/Confidentialité · Durée limitée.',
          },
        ],
        keyRule:
          'Déréférencement ≠ Effacement : le déréférencement retire le lien des résultats d’un moteur de recherche, alors que l’effacement supprime la donnée à la source. Le refus de profilage protège contre les décisions algorithmiques automatisées.',
        workedExample: {
          title: 'Traiter simultanément trois demandes d’usagers dans une banque digitale',
          statement:
            'Un client demande : (A) pourquoi un algorithme lui a refusé un prêt en 2 secondes et exige un réexamen humain ; (B) le transfert de son historique de transactions vers une autre banque ; (C) le retrait de son nom d’un vieux blog indexé sur Google.',
          methodSteps: [
            '1. Demande (A) : Mobiliser le droit de refus de décision automatisée et de profilage — la banque doit expliquer la logique et garantir l’intervention d’un conseiller humain.',
            '2. Demande (B) : Mobiliser le droit à la portabilité — fournir les données fournies par le client dans un format structuré et lisible par machine (CSV/JSON).',
            '3. Demande (C) : Mobiliser le droit au déréférencement auprès du moteur de recherche (et le droit à l’effacement/oubli auprès de l’éditeur du blog).',
          ],
          conclusion:
            'Chaque besoin correspond à un droit numérique précis doté d’effets techniques distincts.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Décision automatisée',
            stepTheme: 'Refus de profilage algorithmique',
            stepTitle: 'Protéger l’usager contre le profilage et la décision automatisée',
            paragraphText:
              'Les algorithmes classent désormais nos comportements pour accorder un crédit, fixer une prime d’assurance ou filtrer des CV.\n• **Profilage** : traitement automatisé évaluant certains aspects personnels (solvabilité, performance, préférences) pour prédire ou segmenter un individu.\n• **Droit au refus de profilage** : aucune décision produisant des effets juridiques ou affectant significativement une personne ne doit reposer uniquement sur un traitement automatisé sans garantie humaine.\n• **Exemple pratique** : un candidat recalé automatiquement par un logiciel de tri de CV peut demander l’intervention humaine d’un recruteur pour contester la décision.',
            keyRule:
              'Le droit de refus de profilage permet de s’opposer au ciblage comportemental et d’exiger une intervention humaine face aux décisions purement algorithmiques.',
            konanTip:
              'Ne confonds pas le droit d’opposition général (qui peut exiger un motif légitime hors prospection) avec le droit spécifique de refuser d’être soumis à un profilage automatisé.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Une plateforme de microcrédit rejette automatiquement la demande d’un commerçant par simple scoring algorithmique, sans qu’aucun humain n’examine son dossier. Quel droit fondamental le client peut-il invoquer ?',
              options: [
                'Le droit au refus de profilage et de décision entièrement automatisée (exigence d’examen humain)',
                'Le droit au cybersquatting commercial',
                'Le droit à la licence GPL',
                'Le droit au service universel des fréquences',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit de refus de profilage protège la personne contre l’évaluation comportementale abusive et les décisions produisant des effets juridiques fondées exclusivement sur un algorithme.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Portabilité',
            stepTheme: 'Mobilité des données',
            stepTitle: 'Mettre en œuvre le droit à la portabilité des données',
            paragraphText:
              'Le droit à la portabilité empêche les géants du numérique et les opérateurs d’enfermer leurs utilisateurs dans des écosystèmes captifs.\n• **Contenu du droit** : la personne concernée peut obtenir les données qu’elle a fournies dans un format structuré, couramment utilisé et lisible par machine (JSON, CSV), et demander leur transmission directe à un autre prestataire.\n• **Bénéfice économique** : stimule la concurrence entre plateformes, banques digitales et services de streaming.\n• **Exemple pratique** : une créatrice de contenu quitte un outil de gestion client pour un concurrent ivoirien et exporte l’intégralité de ses fiches en CSV grâce à la portabilité.',
            keyRule:
              'Portabilité = récupérer ses données dans un format structuré et réutilisable par un autre service, sans perte d’historique.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'En quoi consiste concrètement le droit à la portabilité des données personnelles ?',
              options: [
                'Pouvoir transporter physiquement les serveurs d’un prestataire chez soi',
                'Recevoir ses données dans un format structuré et lisible par machine afin de pouvoir les réutiliser ou les transférer vers un autre service',
                'Interdire à toute entreprise d’utiliser un smartphone',
                'Publier gratuitement toutes ses données médicales sur la place publique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La portabilité donne à l’utilisateur la maîtrise concrète de ses données pour changer de fournisseur sans être bloqué par des formats propriétaires.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Effacement vs Déréférencement',
            stepTheme: 'Maîtrise de l’empreinte en ligne',
            stepTitle: 'Distinguer effacement, déréférencement et oubli numérique',
            paragraphText:
              'Ces trois droits visent à effacer les stigmates numériques du passé, mais ils ne s’adressent pas aux mêmes acteurs ni au même niveau technique.\n• **Droit à l’effacement** : suppression définitive de la donnée dans la base du responsable de traitement (ex. fermeture d’un compte).\n• **Droit au déréférencement** : retrait du lien menant vers une page depuis les résultats d’un moteur de recherche sur requête nominative (la page source reste en ligne chez l’éditeur).\n• **Droit à l’oubli numérique** : droit global (renforcé pour les mineurs) de ne plus être indéfiniment rattrapé par des informations obsolètes ou préjudiciables.\n• **Exemple pratique** : obtenir de Google le retrait d’un lien associé à son nom est un déréférencement ; demander au site source de supprimer l’article est un effacement.',
            keyRule:
              'Déréférencement = désindexer le lien sur le moteur de recherche (sans supprimer la page d’origine) ; Effacement = supprimer la donnée chez le responsable.',
            konanTip:
              'Question fréquente d’examen : « le déréférencement supprime-t-il l’article du site web d’origine ? » Réponse : NON, il coupe seulement le pont depuis le moteur de recherche.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Un citoyen obtient d’un moteur de recherche qu’un lien vers un ancien article de presse n’apparaisse plus lorsqu’on tape son nom et prénom. Quel droit vient-il d’exercer ?',
              options: [
                'Le droit à la portabilité bancaire',
                'Le droit de rectification fiscale',
                'Le droit au déréférencement',
                'Le droit d’auteur sur les logiciels',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le déréférencement vise spécifiquement à faire retirer des résultats d’un moteur de recherche un lien associé au nom d’une personne, sans effacer le contenu du site source.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Accès & Rectification',
            stepTheme: 'Transparence et exactitude',
            stepTitle: 'Exercer les droits d’information, d’accès, de rectification et d’opposition',
            paragraphText:
              'Avant même de demander l’effacement, la personne concernée doit savoir ce qui est collecté et pouvoir corriger toute erreur.\n• **Information et Accès** : recevoir une notice claire dès la collecte et obtenir gratuitement confirmation et copie des données effectivement détenues.\n• **Rectification et Opposition** : faire corriger/compléter des données inexactes et s’opposer à un traitement (notamment de façon absolue et sans frais contre la prospection commerciale).\n• **Exemple pratique** : un client découvrant une erreur de date de naissance dans son dossier de banque exige sa rectification immédiate et s’oppose à recevoir des SMS promotionnels.',
            keyRule:
              'En matière de prospection commerciale (SMS, e-mail, démarchage), le droit d’opposition est absolu et ne nécessite aucune justification de motif légitime.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Un abonné reçoit chaque semaine des SMS publicitaires d’une boutique en ligne alors qu’il souhaite arrêter ces messages. Quel droit exerce-t-il en demandant le retrait de son numéro de la liste d’envoi ?',
              options: [
                'Le droit d’opposition au traitement (prospection commerciale)',
                'Le droit au déréférencement international',
                'Le droit de saisie pénale',
                'Le droit à la brevetabilité logicielle',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit d’opposition permet à toute personne de refuser l’utilisation de ses données à des fins de prospection commerciale, à tout moment et sans frais.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Principes directeurs',
            stepTheme: 'Finalité, proportionnalité, durée',
            stepTitle: 'Respecter la finalité déterminée, la proportionnalité et la durée limitée',
            paragraphText:
              'Tout traitement, même déclaré à l’ARTCI et accepté par l’usager, reste encadré par trois limites matérielles strictes.\n• **Finalité déterminée** : les données collectées pour un objectif précis (ex. livraison de colis) ne peuvent être réutilisées à des fins incompatibles.\n• **Proportionnalité (minimisation)** : ne collecter que les données strictement nécessaires à la finalité (ex. ne pas exiger le groupe sanguin pour créer un compte de jeu).\n• **Durée de conservation limitée** : supprimer ou anonymiser les données une fois la finalité accomplie ou le délai légal expiré.\n• **Exemple pratique** : conserver pendant 15 ans les CV de candidats non retenus à un stage viole le principe de durée de conservation limitée.',
            formula: {
              name: 'Règle des 3 bornes d’un traitement licite',
              formula: 'Finalité explicite  ∧  Données minimales (Proportionnalité)  ∧  Durée bornée (Purge / Anonymisation)',
              note: 'La violation d’une seule de ces trois bornes rend le traitement irrégulier devant l’ARTCI.',
            },
            keyRule:
              'Interdiction de collecter « au cas où » : chaque champ d’un formulaire doit être justifié par la finalité et doté d’une durée de vie maximale.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Une application de livraison de repas exige obligatoirement lors de l’inscription le numéro de carte d’identité des parents, la religion et le relevé bancaire complet de l’utilisateur. Quel principe directeur est directement violé ?',
              options: [
                'Le principe de proportionnalité (minimisation des données collectées)',
                'Le principe de libre concurrence des fréquences',
                'Le principe d’imprescriptibilité des noms de domaine',
                'Le principe de territorialité des brevets',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le principe de proportionnalité impose que les données collectées soient adéquates, pertinentes et strictement limitées à ce qui est nécessaire à la livraison de repas.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Obligations techniques',
            stepTheme: 'Confidentialité, traçabilité, sauvegarde',
            stepTitle: 'Garantir confidentialité, traçabilité des accès et sauvegardes sécurisées',
            paragraphText:
              'La Loi n° 2013-450 impose au responsable du traitement et à ses agents des obligations opérationnelles précises de sécurité informatique.\n• **Confidentialité stricte** : ne communiquer les données qu’aux seules personnes dûment habilitées et empêcher tout accès non autorisé de tiers.\n• **Traçabilité (journalisation)** : garantir techniquement la vérification de l’identité de chaque personne ayant accédé, consulté ou modifié les données.\n• **Sauvegardes sécurisées** : réaliser des copies de sauvegarde chiffrées pour assurer la disponibilité et l’intégrité face aux pannes ou rançongiciels.\n• **Exemple pratique** : un hôpital met en place des comptes nominatifs (interdiction de partager un même mot de passe entre infirmiers) afin de tracer chaque consultation de dossier.',
            keyRule:
              'Obligations techniques légales = habilitation stricte + traçabilité nominative des accès (logs) + protection anti-intrusion + copies de sauvegarde sécurisées.',
            konanTip:
              'Partager un identifiant « admin » générique dans une équipe détruit la traçabilité des accès exigée par la loi sur les données personnelles.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi le fait d’utiliser un compte administrateur unique partagé entre cinq employés sur une base de données clients est-il contraire aux obligations de la Loi n° 2013-450 ?',
              options: [
                'Parce que cela accélère trop la connexion réseau',
                'Parce que le responsable doit garantir que puisse être vérifiée l’identité précise des personnes ayant accès aux données',
                'Parce que la loi interdit plus de deux employés par entreprise',
                'Parce que les sauvegardes deviennent automatiquement publiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le responsable du traitement doit pouvoir identifier avec certitude qui accède aux données personnelles à tout moment ; un compte partagé empêche toute traçabilité nominative.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : PROPRIÉTÉ INTELLECTUELLE, LOGICIELS, BASES DE DONNÉES ET IA
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch2',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Propriété intellectuelle, logiciels, bases de données et IA générative',
    summary:
      'Protection juridique des créations numériques en Côte d’Ivoire (Loi n° 2016-555, BURIDA) et dans l’espace OAPI/OMPI : droit d’auteur sur code source et interfaces, protection sui generis des bases de données, marques et noms de domaine .ci, cybersquatting, licences propriétaires vs Open Source (MIT, GPL) et statut des œuvres assistées par IA générative.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch2_p1',
        order: 1,
        title: 'Droit d’auteur sur les créations numériques, logiciels (Loi 2016-555) et bases de données',
        summary:
          'Maîtriser les conditions d’accès au droit d’auteur (originalité, matérialisation, créateur humain), le régime spécifique des codes sources et interfaces, la preuve électronique d’antériorité et la double protection des bases de données.',
        conceptExplanation:
          'Une création numérique (ou œuvre numérique) désigne toute production intellectuelle réalisée, diffusée ou exploitée au moyen d’outils informatiques : logiciels, applications mobiles, jeux vidéo, bases de données, sites web, œuvres multimédias et audiovisuelles en ligne.\n\n1) Protection par le droit d’auteur (Loi n° 2016-555 du 26 juillet 2016 relative au droit d’auteur et aux droits voisins) : la protection naît AUTOMATIQUEMENT dès la création, sans formalité obligatoire de dépôt, à trois conditions cumulatives : l’originalité (empreinte de la personnalité de l’auteur), la matérialisation sous une forme perceptible (code source, maquette, fichier) et l’existence d’un créateur humain (sauf œuvre collective ou salariée selon les règles légales).\n2) Rôle des institutions : le BURIDA (Bureau Ivoirien du Droit d’Auteur) assure la gestion collective des droits, la perception et la répartition des redevances ; l’OAPI (Organisation Africaine de la Propriété Intellectuelle, Accord de Bangui) régit la propriété industrielle (brevets, marques, dessins et modèles) pour 17 États africains ; l’OMPI harmonise les traités mondiaux.\n3) Logiciels et bases de données : le code source et le code objet d’un logiciel sont protégés par le droit d’auteur (mais PAS les idées ni les algorithmes mathématiques purs). Une base de données bénéficie d’une double protection : droit d’auteur sur son architecture originale et droit « sui generis » du producteur protégeant son investissement financier, matériel ou humain substantiel contre l’extraction illicite.',
        formulas: [
          {
            name: 'Les 3 conditions cumulatives du droit d’auteur numérique',
            formula: 'Protection Loi 2016-555 = Originalité  ∧  Matérialisation (forme)  ∧  Créateur humain',
            note: 'Les idées brutes, méthodes mathématiques et fonctionnalités pures restent de libre parcours ; seule la forme originale est protégée.',
          },
          {
            name: 'Double protection d’une base de données',
            formula: 'Base de données = Droit d’auteur (structure originale)  +  Droit sui generis (investissement substantiel du producteur)',
            note: 'Le droit sui generis interdit l’extraction ou la réutilisation non autorisée d’une partie substantielle du contenu (ex. scraping massif).',
          },
        ],
        keyRule:
          'Droit d’auteur (Loi 2016-555, BURIDA) = naissance automatique sans dépôt obligatoire, mais le dépôt BURIDA, l’horodatage ou la blockchain servent de PREUVE d’antériorité en cas de litige.',
        workedExample: {
          title: 'Protéger une application mobile fintech et son catalogue de marchands à Abidjan',
          statement:
            'Deux jeunes développeurs ivoiriens créent une application mobile de comparaison de prix des produits vivriers accompagnée d’une base de données vérifiée de 4 000 commerçants. Un concurrent copie leur code source et aspire toute leur base de données par robot (scraping).',
          methodSteps: [
            '1. Qualifier l’atteinte au code source et à l’interface graphique : le code source original est protégé par le droit d’auteur dès sa création (Loi n° 2016-555) ; sa copie constitue une contrefaçon numérique.',
            '2. Qualifier l’aspiration de la base de données : même si la liste des commerçants est factuelle, l’investissement substantiel de collecte et de vérification ouvre au producteur une protection sui generis contre l’extraction massive.',
            '3. Sécuriser la preuve d’antériorité : produire les dépôts horodatés (BURIDA, empreinte cryptographique ou historique Git signé) pour agir au civil (dommages-intérêts) et au pénal (PLCC / contrefaçon).',
          ],
          conclusion:
            'Le cumul droit d’auteur + droit sui generis + preuve horodatée permet de faire cesser le plagiat et d’obtenir réparation intégrale.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Œuvre numérique',
            stepTheme: 'Notion et catégories',
            stepTitle: 'Identifier les grandes catégories d’œuvres numériques protégées',
            paragraphText:
              'L’économie digitale transforme la notion classique d’œuvre de l’esprit en faisant naître des créations entièrement immatérielles et interactives.\n• **Définition** : une création numérique est toute production intellectuelle réalisée, diffusée ou exploitée au moyen d’outils informatiques.\n• **Cinq grandes catégories** : logiciels (programmes, applications, jeux vidéo), bases de données (catalogues, moteurs de recherche), sites web (interfaces, graphismes), œuvres multimédias (animations, expériences interactives) et œuvres audiovisuelles numériques (podcasts, vidéos en ligne).\n• **Exemple pratique** : une plateforme éducative en ligne combine simultanément un logiciel (code), une base de données (fiches), des graphismes et des vidéos.',
            keyRule:
              'Un même produit digital (site web ou jeu vidéo) est souvent une œuvre composite mêlant plusieurs régimes : code, design, textes, sons et base de données.',
            konanTip:
              'Pense toujours à décomposer un projet numérique en briques (code, logo, base de données, contenus) car chaque brique obéit à des règles de propriété distinctes.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les propositions suivantes, laquelle regroupe uniquement des catégories reconnues de créations numériques ?',
              options: [
                'Logiciels, bases de données, interfaces de sites web et œuvres multimédias',
                'Uniquement les livres imprimés sur papier et les statues en marbre',
                'Uniquement les câbles sous-marins et les pylônes télécoms',
                'Les idées commerciales non rédigées et les lois votées au Parlement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les créations numériques couvrent les logiciels, bases de données, sites web (interfaces/contenus), œuvres multimédias et audiovisuelles numériques, mais jamais les idées brutes ni le matériel physique seul.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Conditions légales',
            stepTheme: 'Loi n° 2016-555',
            stepTitle: 'Vérifier les 3 conditions du droit d’auteur et la protection automatique',
            paragraphText:
              'En Côte d’Ivoire, la Loi n° 2016-555 du 26 juillet 2016 protège les œuvres de l’esprit dès l’instant de leur création, sans exiger d’enregistrement administratif préalable.\n• **Trois conditions cumulatives** : (1) l’originalité (reflet de choix libres et créatifs de l’auteur), (2) la matérialisation (mise en forme perceptible dans un fichier ou code), (3) un créateur humain (personne physique).\n• **Libre parcours des idées** : une simple idée d’application (« faire un Uber des motos à Bouaké ») n’est jamais protégée tant qu’elle n’est pas concrétisée dans une forme originale.\n• **Exemple pratique** : dès qu’un développeur écrit un module logiciel original sur son ordinateur, le droit d’auteur naît automatiquement sans attendre un certificat.',
            formula: {
              name: 'Naissance du droit d’auteur (Loi 2016-555)',
              formula: 'Originalité + Matérialisation + Auteur humain  ⇒  Protection automatique (sans dépôt obligatoire)',
              note: 'L’absence d’obligation de dépôt distingue radicalement le droit d’auteur du brevet ou de la marque OAPI.',
            },
            keyRule:
              'Les idées sont de libre parcours : le droit d’auteur protège uniquement la forme originale matérialisée, jamais le concept abstrait.',
            konanTip:
              'En examen, piège classique : « faut-il obligatoirement déposer une œuvre au BURIDA pour être protégé ? » Réponse : NON, la protection est automatique ; le dépôt sert à prouver la date de création.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Un étudiant expose oralement son idée d’application de livraison de repas à un ami, qui code ensuite une application originale sur le même concept. Peut-il poursuivre son ami pour contrefaçon de droit d’auteur sur la seule idée ?',
              options: [
                'Oui, toute idée évoquée à l’oral est protégée pendant 70 ans par le BURIDA',
                'Non, car les idées sont de libre parcours : le droit d’auteur exige une matérialisation sous une forme originale',
                'Oui, à condition d’avoir publié un statut sur un réseau social',
                'Non, uniquement parce que les applications mobiles ne sont jamais protégées',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Loi n° 2016-555 ne protège que la mise en forme originale et matérialisée d’une œuvre, jamais une idée abstraite (pour protéger un concept lors de discussions, on utilise un accord de confidentialité / NDA).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Institutions PI',
            stepTheme: 'Droit d’auteur vs Propriété industrielle',
            stepTitle: 'Distinguer droit d’auteur (BURIDA) et propriété industrielle (OAPI / OMPI)',
            paragraphText:
              'La propriété intellectuelle se divise en deux grandes branches complémentaires qui n’obéissent ni aux mêmes autorités ni aux mêmes règles de naissance des droits.\n• **Propriété littéraire et artistique** : régie en Côte d’Ivoire par la Loi n° 2016-555 et gérée collectivement par le BURIDA (code source, interfaces, textes, musiques, vidéos) ; protection automatique.\n• **Propriété industrielle** : harmonisée par l’OAPI (Accord de Bangui, 17 États membres) et l’OMPI au niveau mondial (marques, brevets d’invention technique, dessins et modèles industriels) ; protection subordonnée à un dépôt et à un enregistrement.\n• **Exemple pratique** : une start-up ivoirienne protège le code de son app par droit d’auteur (automatique) et dépose son nom commercial et son logo comme marque auprès de l’OAPI.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Cartographie de la Propriété Intellectuelle numérique (Côte d’Ivoire & OAPI)',
              caption: 'Comparer les mécanismes de protection selon la nature de l’actif et la formalité requise.',
              matrix2x2: {
                topAxis: ['Protection automatique (sans dépôt)', 'Protection par dépôt / enregistrement'],
                leftAxis: ['Créations & Contenus', 'Signes & Innovations'],
                topLeft: {
                  title: 'Droit d’auteur (Loi 2016-555 / BURIDA)',
                  items: [
                    'Code source et code objet de logiciels',
                    'Interfaces graphiques, textes, vidéos',
                    'Condition : originalité + forme',
                    'Droits moraux + patrimoniaux',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Dessins & Modèles (OAPI)',
                  items: [
                    'Design industriel d’un boîtier ou objet connecté',
                    'Apparence esthétique nouvelle',
                    'Dépôt auprès de l’OAPI requis',
                    'Protection renouvelable par périodes',
                  ],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'Droit sui generis & Secret d’affaires',
                  items: [
                    'Bases de données (investissement substantiel)',
                    'Algorithmes internes gardés secrets (NDA)',
                    'Savoir-faire technique non divulgué',
                    'Protection contre l’extraction déloyale',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Marques & Brevets (OAPI / OMPI)',
                  items: [
                    'Marque verbale ou logo (10 ans renouvelable)',
                    'Brevet d’invention technique (20 ans max)',
                    'Noms de domaine .ci (ARTCI / NIC.CI)',
                    'Titre officiel requis contre tiers',
                  ],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'BURIDA = gestion collective du droit d’auteur en Côte d’Ivoire ; OAPI = enregistrement régional des marques, brevets et dessins/modèles ; OMPI = organisation mondiale.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Auprès de quelle organisation régionale une entreprise ivoirienne doit-elle déposer sa marque et son logo pour obtenir un titre exclusif de propriété industrielle valable dans 17 États africains ?',
              options: [
                'L’OAPI (Organisation Africaine de la Propriété Intellectuelle)',
                'La PLCC (Plateforme de Lutte Contre la Cybercriminalité)',
                'Le Trésor Public municipal',
                'Le protocole HTTPS',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’OAPI délivre des titres uniques de propriété industrielle (marques, brevets, dessins et modèles) valables dans l’ensemble de ses 17 États membres dont la Côte d’Ivoire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Logiciels',
            stepTheme: 'Code source, algorithmes et droits',
            stepTitle: 'Maîtriser le régime juridique du logiciel et des droits de l’auteur',
            paragraphText:
              'Bien que technique, le logiciel est juridiquement assimilé à une œuvre littéraire protégée par le droit d’auteur, avec des aménagements spécifiques.\n• **Ce qui est protégé** : le code source, le code objet compilé, l’architecture logicielle originale et la documentation préparatoire.\n• **Ce qui n’est pas protégé** : les fonctionnalités, les langages de programmation et les algorithmes mathématiques pris isolément (sauf invention technique brevetable intégrant un logiciel).\n• **Droits de l’auteur** : droits patrimoniaux (reproduction, représentation, adaptation, cession rémunérée) et droits moraux (paternité et respect de l’œuvre).\n• **Exemple pratique** : un développeur salarié qui crée un logiciel dans le cadre de ses fonctions voit généralement les droits patrimoniaux dévolus à son employeur selon le contrat et la loi.',
            keyRule:
              'Un logiciel est protégé par le droit d’auteur (code source/objet), non par le brevet en tant que tel ; la copie non autorisée de son code est une contrefaçon.',
            konanTip:
              'Distinction clé : droits patrimoniaux = exploitables, cessibles et limités dans le temps ; droits moraux = attachés à la personne de l’auteur (paternité, intégrité).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Dans un projet logiciel, quel élément précis bénéficie directement de la protection par le droit d’auteur ?',
              options: [
                'Le langage de programmation Python lui-même pour l’utilisateur qui l’emploie',
                'L’idée générale de créer une calculatrice en ligne',
                'Le code source original et la documentation de conception matérialisés',
                'Une simple formule mathématique universelle comme le théorème de Pythagore',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le droit d’auteur protège l’expression originale du programme (code source, code objet, documentation préparatoire), et non les idées, formules mathématiques ou langages en eux-mêmes.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Bases de données',
            stepTheme: 'Droit d’auteur et droit sui generis',
            stepTitle: 'Protéger une base de données contre le scraping par le droit sui generis',
            paragraphText:
              'Dans l’économie de la donnée, la valeur d’une plateforme réside souvent autant dans sa base de données qualifiée que dans son code.\n• **Protection par le droit d’auteur (le contenant)** : protège l’architecture, le choix ou la disposition des matières lorsque cette structure est originale.\n• **Protection sui generis (le contenu/investissement)** : protège le producteur qui prouve un investissement financier, matériel ou humain substantiel dans la constitution, la vérification ou la présentation de la base.\n• **Portée pratique** : le producteur peut interdire l’extraction ou la réutilisation d’une partie qualitativement ou quantitativement substantielle (ex. scraping automatisé par un concurrent).\n• **Exemple pratique** : un annuaire immobilier ivoirien ayant vérifié sur le terrain 10 000 biens peut faire condamner un site rival qui aspire automatiquement ses annonces.',
            keyRule:
              'Structure originale = droit d’auteur ; Investissement substantiel de constitution/vérification = droit sui generis du producteur contre l’extraction massive.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Sur quel fondement juridique le producteur d’une base de données factuelles (annuaire vérifié de 15 000 artisans) peut-il s’opposer à l’aspiration automatisée (scraping) de son contenu par un concurrent ?',
              options: [
                'Le droit sui generis protégeant l’investissement financier, matériel ou humain substantiel du producteur',
                'Le droit au déréférencement des moteurs de recherche',
                'La dispense domestique de l’ARTCI',
                'Le droit de rétractation de 7 jours',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit sui generis protège l’investissement substantiel consacré à la collecte, la vérification et la présentation d’une base de données contre toute extraction ou réutilisation non autorisée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Preuve numérique',
            stepTheme: 'Antériorité et horodatage',
            stepTitle: 'Constituer une preuve électronique d’antériorité opposable',
            paragraphText:
              'Si le droit d’auteur naît sans formalité, encore faut-il prouver devant le juge que l’on est bien le premier créateur à une date certaine en cas de plagiat.\n• **Preuves électroniques admises** : dépôt officiel auprès du BURIDA, horodatage qualifié par tiers de confiance, signature électronique, constat d’huissier (commissaire de justice) ou ancrage cryptographique sur blockchain.\n• **Principe de l’empreinte (hash)** : calculer le condensat cryptographique (SHA-256) d’un code source et l’horodater prouve son intégrité et sa date d’existence sans même révéler le secret du code.\n• **Exemple pratique** : avant de présenter son prototype à des investisseurs, une équipe dépose son archive source au BURIDA et enregistre son empreinte horodatée.',
            keyRule:
              'En propriété intellectuelle numérique, celui qui gagne un procès en contrefaçon est celui qui rapporte la preuve certaine de la date et de l’intégrité de sa création.',
            konanTip:
              'Un simple envoi de fichier par e-mail à soi-même a une force probante faible ; privilégie le dépôt BURIDA, l’horodatage qualifié ou le procès-verbal de commissaire de justice.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Bien que le droit d’auteur naisse automatiquement dès la création, pourquoi recommande-t-on à un développeur d’effectuer un dépôt au BURIDA ou un horodatage électronique qualifié ?',
              options: [
                'Parce que sans dépôt, le logiciel appartient automatiquement à l’hébergeur cloud',
                'Pour se ménager une preuve certaine d’antériorité et d’intégrité opposable en cas de litige pour contrefaçon',
                'Pour transformer le code source en brevet d’invention de 50 ans',
                'Pour être dispensé de payer tout impôt sur les sociétés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le dépôt BURIDA, l’horodatage qualifié ou l’ancrage blockchain ne créent pas le droit d’auteur, mais fournissent la preuve irréfutable de la date de création et de la paternité en cas de procès.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch2_p2',
        order: 2,
        title: 'Marques, noms de domaine .ci, cybersquatting et conflits de signes distinctifs',
        summary:
          'Comprendre l’articulation entre marque déposée à l’OAPI et nom de domaine (.ci, .com), identifier le cybersquatting et le typosquatting, et mobiliser les voies de règlement des litiges (ARTCI/NIC.CI, UDRP, justice).',
        conceptExplanation:
          'Sur Internet, l’identité commerciale d’une entreprise repose sur deux actifs complémentaires mais juridiquement distincts : la marque et le nom de domaine.\n\n1) La marque (OAPI) : signe susceptible de représentation graphique (nom, logo, slogan) servant à distinguer les produits ou services d’une entreprise. Elle s’acquiert par enregistrement auprès de l’OAPI pour 10 ans renouvelables indéfiniment, selon le principe de spécialité (classes de produits/services) et de territorialité.\n2) Le nom de domaine : adresse alphanumérique unique pointant vers un serveur (ex. entreprise.ci ou marque.com). L’extension nationale « .ci » est administrée en Côte d’Ivoire sous la tutelle de l’ARTCI (NIC.CI). Le nom de domaine suit la règle technique du « premier arrivé, premier servi », mais ne doit JAMAIS porter atteinte aux droits antérieurs d’autrui (marque, dénomination sociale, patronyme).\n3) Les pratiques abusives : le cybersquatting consiste à enregistrer de mauvaise foi un nom de domaine identique ou similaire à une marque notoire afin de le revendre cher ou de détourner son trafic ; le typosquatting exploite les fautes de frappe courantes (ex. « banqeu.ci ») pour du phishing ou de la publicité parasitaire.\n4) Recours : procédure extrajudiciaire internationale UDRP (devant l’OMPI pour les .com/.org), procédure locale de résolution de litiges auprès du registre .ci (ARTCI), ou action judiciaire en contrefaçon de marque et concurrence déloyale.',
        formulas: [
          {
            name: 'Les 3 critères cumulatifs du cybersquatting (règle UDRP / OMPI)',
            formula: 'Cybersquatting = (Nom identique/similaire à marque)  ∧  (Aucun droit légitime)  ∧  (Enregistrement et usage de mauvaise foi)',
            note: 'Si les 3 critères sont réunis, le titulaire de la marque obtient le transfert ou la radiation du nom de domaine.',
          },
        ],
        keyRule:
          'La règle technique « premier arrivé, premier servi » d’un nom de domaine ne prévaut jamais sur un droit de marque antérieur : enregistrer la marque d’autrui de mauvaise foi est un cybersquatting sanctionné.',
        workedExample: {
          title: 'Récupérer un nom de domaine .ci et .com victime de cybersquatting',
          statement:
            'Une fintech ivoirienne ayant déposé sa marque « PayIvoire » à l’OAPI découvre qu’un tiers sans lien avec elle a réservé « payivoire.com » et « pay-ivoire.ci » et lui réclame 15 millions FCFA pour les lui céder.',
          methodSteps: [
            '1. Vérifier les trois critères du cybersquatting : identité/similarité avec la marque OAPI « PayIvoire », absence totale d’intérêt légitime du tiers, et mauvaise foi manifeste (demande de rançon financière de 15 millions FCFA).',
            '2. Pour « payivoire.com » : engager une procédure rapide UDRP devant le Centre d’arbitrage et de médiation de l’OMPI afin d’obtenir le transfert forcé du domaine.',
            '3. Pour « pay-ivoire.ci » : saisir le mécanisme de résolution des litiges du registre .ci sous l’égide de l’ARTCI et, au besoin, agir en justice pour contrefaçon de marque et parasitisme.',
          ],
          conclusion:
            'Le dépôt préalable de la marque à l’OAPI constitue l’arme juridique décisive pour récupérer ses noms de domaine et stopper les imitateurs.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Marque vs Domaine',
            stepTheme: 'Distinction juridique',
            stepTitle: 'Distinguer marque déposée (OAPI) et nom de domaine',
            paragraphText:
              'Beaucoup d’entrepreneurs pensent à tort qu’acheter un nom de domaine suffit à protéger leur nom commercial : c’est une erreur stratégique coûteuse.\n• **Marque (OAPI)** : titre de propriété industrielle acquis par dépôt pour 10 ans renouvelables, protégé pour des classes précises de produits/services (principe de spécialité) dans les 17 États membres de l’OAPI.\n• **Nom de domaine** : adresse technique attribuée selon la règle « premier arrivé, premier servi » (ex. .com, .ci), qui ne confère pas à lui seul un titre de marque.\n• **Exemple pratique** : réserver « koffee-abidjan.com » sans déposer la marque à l’OAPI expose la start-up à voir un concurrent déposer légalement la marque ou lancer « koffee-abidjan.ci ».',
            keyRule:
              'Toujours effectuer une recherche d’antériorité puis déposer sa marque à l’OAPI EN MÊME TEMPS que l’on réserve ses noms de domaine clés (.ci, .com).',
            konanTip:
              'Le principe de spécialité permet à deux marques identiques de coexister dans des secteurs totalement différents (sauf marque notoire), alors qu’un nom de domaine exact est techniquement unique au monde.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle affirmation distingue correctement une marque OAPI d’un nom de domaine ?',
              options: [
                'Le nom de domaine est valable à vie sans renouvellement tandis que la marque dure 1 an',
                'La marque est un titre de propriété industrielle soumis au principe de spécialité (classes de produits/services), alors que le nom de domaine est une adresse technique unique attribuée au premier demandeur',
                'Un nom de domaine donne automatiquement le droit d’interdire toutes les marques antérieures dans le monde',
                'L’OAPI gère exclusivement les adresses IP et jamais les marques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La marque OAPI confère un monopole sur des produits/services désignés (10 ans renouvelables), tandis que le nom de domaine est une ressource d’adressage unique soumise au respect des droits antérieurs.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Extension .ci',
            stepTheme: 'Gouvernance nationale',
            stepTitle: 'Comprendre la gestion du nom de domaine national « .ci »',
            paragraphText:
              'Chaque État dispose d’une extension nationale de premier niveau (ccTLD) reflétant sa souveraineté numérique : pour la Côte d’Ivoire, il s’agit du « .ci ».\n• **Rôle de l’ARTCI (NIC.CI)** : l’ARTCI assure la gestion administrative et technique du registre « .ci », accrédite les bureaux d’enregistrement (registrars) et veille au respect de la charte de nommage.\n• **Atouts du « .ci »** : ancrage local de confiance, meilleur référencement géographique en Côte d’Ivoire et protection contre les noms réservés ou contraires à l’ordre public.\n• **Exemple pratique** : les institutions publiques utilisent l’extension dédiée « .gouv.ci » et les établissements d’enseignement supérieur « .edu.ci ».',
            keyRule:
              'L’extension nationale « .ci » est administrée sous l’autorité de l’ARTCI (NIC.CI) via des bureaux d’enregistrement agréés et une charte de nommage stricte.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle autorité supervise la gestion du nom de domaine national de premier niveau « .ci » en Côte d’Ivoire ?',
              options: [
                'Le BURIDA',
                'L’ARTCI (via le registre national NIC.CI)',
                'La BCEAO',
                'L’Union Postale Universelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ARTCI est chargée de la gestion du domaine national de premier niveau « .ci » et de l’accréditation des bureaux d’enregistrement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Cybersquatting',
            stepTheme: 'Accaparement abusif',
            stepTitle: 'Caractériser le cybersquatting et ses 3 critères cumulatifs',
            paragraphText:
              'Profiter de la règle du « premier arrivé » pour confisquer la réputation numérique d’une marque connue est une pratique illicite sévèrement combattue.\n• **Définition du cybersquatting** : enregistrement, trafic ou utilisation de mauvaise foi d’un nom de domaine identique ou similaire à une marque, un nom commercial ou une célébrité.\n• **Les 3 critères cumulatifs** : (1) identité ou similitude créant confusion avec une marque antérieure, (2) absence de droit ou d’intérêt légitime du détenteur, (3) enregistrement et usage de mauvaise foi (revente spéculative, blocage d’un concurrent, détournement de clientèle).\n• **Exemple pratique** : acheter « orange-ci-promo.com » pour le revendre dix fois son prix à l’opérateur télécom constitue un cybersquatting caractérisé.',
            formula: {
              name: 'Test juridique du cybersquatting',
              formula: 'Confusion avec marque  ∧  Sans droit légitime  ∧  Mauvaise foi  ⇒  Transfert ou radiation du domaine',
              note: 'La simple offre de revente à un prix largement supérieur aux frais d’enregistrement prouve la mauvaise foi.',
            },
            keyRule:
              'Réserver un nom de domaine reproduisant la marque d’autrui pour le monnayer ou parasiter sa clientèle réunit les 3 critères du cybersquatting.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un individu sans activité bancaire enregistre « sgci-online-promo.com » et propose à la banque de le lui racheter pour 8 millions FCFA. Comment qualifie-t-on cette pratique ?',
              options: [
                'Une portabilité légitime des données',
                'Un cybersquatting caractérisé (enregistrement de mauvaise foi sans intérêt légitime)',
                'Un dépôt légal de marque OAPI',
                'Une licence Open Source permissive',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’enregistrement d’un nom de domaine imitant une marque connue, sans intérêt légitime et dans le but de le revendre à prix exorbitant, constitue un cybersquatting.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Typosquatting',
            stepTheme: 'Détournement et phishing',
            stepTitle: 'Repérer le typosquatting et les risques de cyberfraude associés',
            paragraphText:
              'Plus sournois encore que le cybersquatting classique, le typosquatting mise sur l’inattention et les erreurs de frappe des internautes.\n• **Définition** : enregistrement de noms de domaine très proches d’un site officiel comportant une faute de frappe, une lettre doublée ou une extension voisine (ex. « gogle.com », « banqeu-ci.net »).\n• **Finalités malveillantes** : captation de trafic publicitaire, installation de logiciels malveillants ou pages clones d’hameçonnage (phishing) destinées à voler les identifiants bancaires.\n• **Double sanction** : contrefaçon/parasitisme au plan civil et infraction pénale (escroquerie informatique, usurpation d’identité numérique) au titre de la Loi n° 2013-451.',
            keyRule:
              'Typosquatting = exploitation volontaire de fautes de frappe sur une marque ; lorsqu’il sert à piéger des usagers, il bascule dans le phishing pénalement réprimé.',
            konanTip:
              'Stratégie défensive courante des grandes entreprises : enregistrer préventivement les principales variantes orthographiques et extensions (.ci, .com, .net) de leur marque.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Un fraudeur crée le site « jumiaa-ci.com » reprenant la charte graphique d’une grande place de marché pour dérober les codes Mobile Money des acheteurs. De quelle pratique s’agit-il ?',
              options: [
                'De typosquatting couplé à de l’hameçonnage (phishing) et à de la contrefaçon de marque',
                'D’une interconnexion autorisée par l’ARTCI',
                'D’un droit de rétractation électronique',
                'D’une exception de copie privée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’ajout d’une lettre doublée (« jumiaa ») pour tromper l’internaute constitue du typosquatting, aggravé ici par une escroquerie par hameçonnage et une contrefaçon.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Procédure UDRP',
            stepTheme: 'Règlement extrajudiciaire',
            stepTitle: 'Mobiliser la procédure UDRP (OMPI) et les recours locaux',
            paragraphText:
              'Un procès international classique contre un cybersquatteur anonyme situé à l’étranger peut prendre des années ; des procédures accélérées ont donc été créées.\n• **Procédure UDRP (Uniform Domain-Name Dispute-Resolution Policy)** : mécanisme extrajudiciaire rapide (environ 2 mois) administré notamment par l’OMPI pour les extensions génériques (.com, .net, .org).\n• **Décision exécutoire** : si les 3 critères sont établis, le panel ordonne au bureau d’enregistrement le transfert direct du nom de domaine au plaignant ou sa suppression (sans dommages-intérêts).\n• **Recours complémentaires** : procédure de résolution des litiges du registre .ci (ARTCI) et action devant le tribunal de commerce pour obtenir des dommages-intérêts.',
            keyRule:
              'UDRP (OMPI) = rapide (≈ 2 mois), en ligne, ordonne le transfert ou la radiation du domaine, mais n’accorde pas de dommages-intérêts (réservés au juge judiciaire).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quel est l’avantage principal et la limite principale de la procédure UDRP devant l’OMPI face à un cybersquatteur en « .com » ?',
              options: [
                'Elle prononce des peines de prison mais dure 10 ans',
                'Elle permet d’obtenir rapidement le transfert ou la radiation du domaine, mais ne permet pas d’allouer de dommages-intérêts financiers',
                'Elle s’applique uniquement aux marques non déposées',
                'Elle remplace définitivement tous les tribunaux nationaux en matière pénale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’UDRP est une procédure administrative internationale rapide et efficace pour récupérer un nom de domaine, mais seule une juridiction étatique peut condamner à des dommages-intérêts ou à des peines pénales.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Parasitisme & SEO',
            stepTheme: 'Mots-clés publicitaires',
            stepTitle: 'Encadrer l’usage de la marque d’autrui dans les liens sponsorisés',
            paragraphText:
              'Les conflits de marques sur Internet dépassent les seuls noms de domaine et touchent désormais la publicité sur les moteurs de recherche (SEA / Google Ads).\n• **Principe** : acheter la marque d’un concurrent comme mot-clé publicitaire n’est pas systématiquement illicite en soi, MAIS devient une contrefaçon ou une concurrence déloyale dès que l’annonce crée un risque de confusion sur l’origine du produit.\n• **Parasitisme économique** : se placer dans le sillage d’une entreprise réputée pour profiter sans bourse délier de ses investissements publicitaires.\n• **Exemple pratique** : une agence de voyage qui affiche le nom d’un concurrent dans le titre même de son annonce sponsorisée trompe le consommateur et engage sa responsabilité.',
            keyRule:
              'Utiliser la marque d’un concurrent en ligne de manière à créer la confusion dans l’esprit de l’internaute moyen constitue une atteinte sanctionnée (contrefaçon / concurrence déloyale).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quand l’utilisation de la marque d’un concurrent dans une campagne publicitaire sur moteur de recherche devient-elle juridiquement condamnable ?',
              options: [
                'Dès que l’annonce crée un risque de confusion sur l’origine commerciale des produits ou services proposés',
                'Uniquement lorsque la campagne coûte moins de 50 000 FCFA',
                'Jamais, car Internet échappe au droit de la concurrence déloyale',
                'Uniquement si le site est hébergé sur un serveur local',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le droit des marques et de la concurrence déloyale sanctionne tout usage en ligne susceptible de tromper l’internaute normalement attentif sur l’identité réelle de l’entreprise.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch2_p3',
        order: 3,
        title: 'Licences logicielles (Propriétaire vs Open Source MIT/GPL), IA générative et sanctions',
        summary:
          'Choisir et respecter une licence logicielle (propriétaire, MIT/Apache, copyleft GPL, Creative Commons), analyser la titularité et l’originalité des créations assistées par IA générative, et maîtriser les sanctions civiles et pénales de la contrefaçon numérique.',
        conceptExplanation:
          'Exploiter ou réutiliser un logiciel ou un contenu numérique sans violer la loi impose de comprendre son contrat de licence — et de maîtriser les nouveaux défis juridiques posés par l’intelligence artificielle générative.\n\n1) Licences propriétaires vs Open Source : une licence propriétaire (code fermé) concède un simple droit d’usage restreint sans accès au code source ni droit de modification. Une licence Open Source (logiciel libre) ouvre le code source et autorise étude, modification et redistribution, mais se scinde en deux grandes familles : les licences permissives (MIT, BSD, Apache 2.0) qui permettent d’intégrer le code dans un logiciel commercial fermé, et les licences à effet « copyleft » fort (GNU GPL) qui imposent de redistribuer tout logiciel dérivé sous la même licence libre.\n2) Licences Creative Commons (CC) : dédiées aux contenus culturels, éducatifs et multimédias (combinaisons des clauses BY attribution, NC non commercial, ND pas de modification, SA partage à l’identique).\n3) Créations assistées par IA générative : le droit d’auteur exige un créateur HUMAIN et des choix créatifs originaux. Un contenu généré automatiquement par un simple prompt générique n’est pas protégé par le droit d’auteur ; en revanche, une œuvre où l’humain exerce une direction créative substantielle et des retouches originales peut accéder à la protection. Par ailleurs, l’entraînement ou la génération reproduisant des œuvres protégées sans autorisation expose au risque de contrefaçon.\n4) Sanctions de la contrefaçon numérique : la copie, le piratage ou la diffusion illégale exposent à des sanctions pénales (amendes, emprisonnement, confiscation du matériel, enquête PLCC) et civiles (dommages-intérêts, cessation sous astreinte).',
        formulas: [
          {
            name: 'Règle de contamination (Copyleft GPL vs Permissive MIT)',
            formula: 'Code MIT + Projet fermé = Autorisé (avec mention)  |  Code GPL + Projet dérivé = Redistribution obligatoire en GPL',
            note: 'Open Source ne signifie JAMAIS « sans droits d’auteur » : ne pas respecter les conditions d’une licence libre constitue une contrefaçon.',
          },
        ],
        keyRule:
          'Logiciel libre ≠ domaine public : respecter la licence est obligatoire (MIT = permissif ; GPL = copyleft viral). Pour l’IA générative, seule l’intervention créative humaine substantielle fonde un droit d’auteur.',
        workedExample: {
          title: 'Auditer la conformité juridique d’une start-up IA intégrant des bibliothèques Open Source',
          statement:
            'Une start-up d’Abidjan développe un logiciel SaaS commercial à code fermé. Ses développeurs ont intégré une bibliothèque sous licence MIT, une bibliothèque sous licence GNU GPL v3 et des illustrations générées en un clic par une IA générative.',
          methodSteps: [
            '1. Auditer la bibliothèque MIT : compatible avec un logiciel propriétaire commercial, à condition de conserver la notice de copyright et le texte de la licence MIT.',
            '2. Auditer la bibliothèque GNU GPL v3 : ALERTE MAJEURE — son intégration dans un logiciel distribué impose de publier le code dérivé sous GPL (copyleft). Il faut la remplacer par une alternative permissive (MIT/Apache) ou négocier une licence commerciale.',
            '3. Auditer les illustrations IA : un visuel généré en un clic sans apport créatif humain substantiel ne bénéficie pas d’un monopole de droit d’auteur et doit être vérifié contre tout risque de contrefaçon de styles ou marques tiers.',
          ],
          conclusion:
            'Un audit des licences et des contenus IA évite à la start-up un blocage lors d’une levée de fonds ou d’un procès en contrefaçon.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Licences logicielles',
            stepTheme: 'Propriétaire vs Open Source',
            stepTitle: 'Comparer licences propriétaires, permissives (MIT) et copyleft (GPL)',
            paragraphText:
              'Un logiciel n’est presque jamais « vendu » en pleine propriété à l’utilisateur final : il fait l’objet d’un contrat de licence qui fixe précisément ce qui est permis ou interdit.\n• **Licence propriétaire** : code source fermé, simple droit d’utilisation encadré (nombre de postes, durée), interdiction de copier, modifier ou décompiler.\n• **Open Source permissif (MIT, BSD, Apache)** : code source ouvert, libre modification et réutilisation, y compris dans un produit commercial fermé, moyennant citation de l’auteur.\n• **Open Source copyleft (GNU GPL)** : liberté totale d’usage et de modification, MAIS toute redistribution d’une œuvre dérivée doit conserver la même licence libre (effet contaminant).\n• **Exemple pratique** : intégrer un composant MIT dans une app commerciale est licite ; y incorporer du code GPL sans ouvrir le code dérivé viole la licence.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau comparatif des grandes familles de licences numériques',
              caption: 'Choisir le bon modèle juridique selon sa stratégie économique et technique.',
              tableData: {
                headers: ['Famille de licence', 'Accès code source', 'Usage commercial', 'Obligation clé'],
                rows: [
                  ['Propriétaire (CLUF)', 'Fermé (interdit)', 'Payant / encadré', 'Respect strict du périmètre d’usage'],
                  ['Open Source Permissif (MIT / Apache)', 'Ouvert', 'Autorisé (même fermé)', 'Conserver la mention de copyright'],
                  ['Open Source Copyleft (GNU GPL)', 'Ouvert', 'Autorisé', 'Redistribuer les dérivés sous GPL'],
                  ['Creative Commons (CC BY-NC-SA)', 'Contenus médias', 'Interdit si clause NC', 'Attribution + partage à l’identique'],
                ],
              },
            },
            keyRule:
              'MIT / Apache = permissives (compatibles code fermé) ; GNU GPL = copyleft (oblige à maintenir le code dérivé en Open Source).',
            konanTip:
              'Attention au contresens classique : un logiciel Open Source PEUT parfaitement être vendu ou exploité commercialement ; « libre » renvoie à la liberté du code, pas à la gratuité obligatoire.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Une entreprise veut intégrer une bibliothèque Open Source dans un logiciel commercial dont elle souhaite garder le code source strictement fermé. Quelle licence est juridiquement compatible avec cet objectif ?',
              options: [
                'Une licence permissive comme MIT ou Apache 2.0 (en respectant la mention d’attribution)',
                'Une licence copyleft forte comme GNU GPL v3 sans autorisation spécifique',
                'Aucune licence Open Source ne permet un usage commercial',
                'Une copie piratée d’un logiciel propriétaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les licences permissives (MIT, BSD, Apache 2.0) autorisent la réutilisation du code dans un produit commercial propriétaire, contrairement à la licence GNU GPL qui impose le partage à l’identique du code dérivé.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Piège Open Source',
            stepTheme: 'Contrefaçon de licence libre',
            stepTitle: 'Comprendre que l’Open Source reste soumis au droit d’auteur',
            paragraphText:
              'Télécharger du code libre sur GitHub ne signifie absolument pas qu’il est libre de droits ou dans le domaine public.\n• **Fondement juridique** : les licences Open Source reposent précisément sur le droit d’auteur ; l’auteur autorise certains usages à condition que l’utilisateur respecte les clauses de la licence.\n• **Violation de licence** : supprimer la mention de l’auteur (MIT) ou refuser de publier le code source modifié (GPL) fait tomber l’autorisation et transforme l’utilisateur en contrefacteur.\n• **Exemple pratique** : un éditeur qui revend un outil basé sur du code GPL en cachant l’origine du code peut être condamné pour violation contractuelle et contrefaçon.',
            keyRule:
              'Open Source ≠ domaine public : le non-respect des clauses d’une licence libre (attribution, partage du code) engage la responsabilité pour contrefaçon.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Un développeur copie du code placé sous licence MIT sur GitHub, efface le nom de l’auteur d’origine et le texte de la licence, puis le vend comme sa propre création exclusive. A-t-il commis une faute juridique ?',
              options: [
                'Non, car tout code publié sur GitHub appartient automatiquement au domaine public',
                'Oui, car la licence MIT repose sur le droit d’auteur et impose de conserver la notice de copyright et le texte de la licence',
                'Non, tant que le code comporte moins de 500 lignes',
                'Oui, uniquement si le code est écrit en Java',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une licence Open Source n’est pas un abandon des droits d’auteur : ne pas respecter ses obligations (ici la mention de paternité/licence) constitue une atteinte au droit d’auteur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Creative Commons',
            stepTheme: 'Licences de contenus',
            stepTitle: 'Décrypter les 4 clauses des licences Creative Commons (BY, NC, ND, SA)',
            paragraphText:
              'Pour partager légalement des cours, photos, musiques ou vidéos sur le web sans céder tous ses droits, les créateurs utilisent les licences Creative Commons.\n• **BY (Attribution)** : obligatoire dans toutes les licences CC, impose de créditer l’auteur original.\n• **NC (Non Commercial)** : interdit toute exploitation à finalité commerciale sans accord séparé.\n• **ND (No Derivatives)** : interdit de modifier, remixer ou traduire l’œuvre.\n• **SA (Share Alike)** : autorise la modification à condition de diffuser l’œuvre dérivée sous la même licence.\n• **Exemple pratique** : une photo en « CC BY-NC » peut illustrer gratuitement un exposé étudiant en citant l’auteur, mais ne peut pas figurer sur l’affiche publicitaire payante d’une marque.',
            keyRule:
              'Quatre briques Creative Commons : BY (créditer l’auteur), NC (pas d’usage commercial), ND (pas de modification), SA (partage sous la même licence).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Une agence marketing souhaite utiliser une musique diffusée sous licence « CC BY-NC-SA » pour la publicité commerciale d’une boisson. En a-t-elle le droit sans autorisation supplémentaire de l’auteur ?',
              options: [
                'Oui, car toutes les licences Creative Commons autorisent la publicité commerciale',
                'Non, car la clause « NC » (Non Commercial) interdit toute exploitation commerciale sans accord exprès de l’auteur',
                'Oui, si elle coupe la musique à moins de 30 secondes',
                'Oui, à condition de payer une taxe à l’hébergeur web',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La mention « NC » (Non Commercial) réserve l’utilisation libre aux seuls usages non commerciaux ; toute exploitation publicitaire requiert une autorisation spécifique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'IA générative',
            stepTheme: 'Titularité et originalité',
            stepTitle: 'Analyser la titularité des créations générées ou assistées par IA',
            paragraphText:
              'L’essor des modèles d’intelligence artificielle générative (texte, image, code, audio) bouscule la condition traditionnelle du créateur humain en droit d’auteur.\n• **Principe d’humanité de l’auteur** : une machine ou un algorithme n’a pas de personnalité juridique et ne peut pas être titulaire d’un droit d’auteur.\n• **Degré d’intervention humaine** : un contenu produit quasi automatiquement par un prompt simple et générique manque d’empreinte personnelle humaine et ne bénéficie pas du droit d’auteur ; en revanche, une œuvre où l’humain dirige finement le processus, sélectionne, compose et retravaille de manière originale peut être protégée.\n• **Exemple pratique** : un graphiste qui génère des esquisses par IA puis les recompose, retouche et assemble selon sa vision artistique originale dispose de droits sur son apport créatif humain.',
            keyRule:
              'Pas de droit d’auteur pour une IA : la titularité et la protection dépendent du degré d’intervention créative originale d’un être humain.',
            konanTip:
              'Pour sécuriser les projets assistés par IA, documente toujours les étapes de création, les choix artistiques humains et les retouches manuelles effectuées.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Sur quel critère juridique majeur détermine-t-on si une création numérique réalisée à l’aide d’une intelligence artificielle générative peut être protégée par le droit d’auteur ?',
              options: [
                'Le prix de l’abonnement mensuel payé à la plateforme d’IA',
                'Le degré d’intervention créative et de choix originaux réalisés par un être humain',
                'La vitesse de calcul du processeur graphique utilisé',
                'L’attribution automatique de la personnalité juridique à l’algorithme',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une IA n’ayant pas de personnalité juridique, le droit d’auteur ne peut naître que si un créateur humain démontre un apport créatif original et maîtrisé au-delà d’une simple commande générique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Risques IA',
            stepTheme: 'Entraînement et contrefaçon',
            stepTitle: 'Anticiper les risques de contrefaçon et de confidentialité liés à l’IA',
            paragraphText:
              'Utiliser des outils d’IA générative en entreprise comporte deux risques juridiques majeurs souvent sous-estimés par les équipes techniques.\n• **Risque de contrefaçon en sortie** : si un modèle génère un texte, un logo ou un extrait de code reproduisant substantiellement une œuvre protégée présente dans ses données d’entraînement, l’utilisateur qui l’exploite commercialement engage sa responsabilité.\n• **Risque de fuite de secrets et données personnelles** : saisir du code propriétaire confidentiel ou des fichiers clients dans une IA publique non encadrée viole la confidentialité et la Loi n° 2013-450.\n• **Exemple pratique** : une entreprise adopte une charte interne interdisant de coller des données clients ou des codes secrets dans des assistants IA grand public.',
            keyRule:
              'Ne jamais saisir de données personnelles ou de secrets industriels dans une IA publique, et toujours vérifier l’absence de reprise d’œuvres tierces avant exploitation commerciale.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Un employé copie la base de données clients de son entreprise (noms, téléphones, soldes) dans un chatbot d’IA grand public pour lui demander un résumé statistique. Quel double risque juridique crée-t-il ?',
              options: [
                'Aucun risque, car les chatbots sont dispensés de toute loi',
                'Une violation de la confidentialité/sécurité des données personnelles (Loi 2013-450) et une divulgation de secrets d’affaires',
                'Uniquement un risque de perte de garantie du clavier',
                'Un droit automatique au transfert du nom de domaine .ci',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Transmettre des données personnelles et confidentielles à un service d’IA tiers non autorisé constitue un transfert illicite, un manquement à la sécurité (Loi 2013-450) et une atteinte au secret d’affaires.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Sanctions PI',
            stepTheme: 'Contrefaçon et piratage',
            stepTitle: 'Maîtriser les sanctions civiles et pénales de la contrefaçon numérique',
            paragraphText:
              'Le piratage de logiciels, le streaming illégal ou la reproduction non autorisée d’œuvres numériques ne sont pas de simples incivilités : ce sont des délits sévèrement réprimés.\n• **Volet pénal** : la Loi n° 2016-555 et la Loi n° 2013-451 répriment la contrefaçon numérique et le contournement des mesures techniques de protection (DRM) par des peines d’emprisonnement, de lourdes amendes et la confiscation du matériel. La PLCC mène les enquêtes techniques.\n• **Volet civil** : la victime (créateur, éditeur ou BURIDA) obtient la cessation immédiate de l’atteinte (retrait/blocage de sites) et des dommages-intérêts réparant le manque à gagner et le préjudice moral.\n• **Exemple pratique** : l’administrateur d’un site diffusant illégalement des films et logiciels piratés encourt à la fois une condamnation pénale et une indemnisation civile des ayants droit.',
            keyRule:
              'La contrefaçon numérique cumule répression pénale (emprisonnement, amende, saisie — enquête PLCC) et réparation civile (dommages-intérêts, blocage des contenus).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Quelles sont les deux grandes catégories de sanctions encourues par l’auteur d’un piratage massif de logiciels et d’œuvres musicales en ligne en Côte d’Ivoire ?',
              options: [
                'Uniquement un avertissement moral sans conséquence financière',
                'Des sanctions pénales (amende, emprisonnement, confiscation) et des sanctions civiles (dommages-intérêts, cessation/retrait des contenus)',
                'Uniquement la suspension temporaire de la boîte e-mail',
                'Une amende payée exclusivement en cryptomonnaie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La contrefaçon numérique expose son auteur au cumul de la responsabilité pénale (répression du délit) et de la responsabilité civile (indemnisation du préjudice subi par les créateurs et éditeurs).',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 3 : RÉGIME JURIDIQUE DES COMMUNICATIONS NUMÉRIQUES ET E-COMMERCE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch3',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Régime juridique des communications numériques et du commerce électronique',
    summary:
      'Cadre légal des communications électroniques (Loi n° 2024-352 du 6 juin 2024, licences, spectre radioélectrique, interconnexion et accès universel sous régulation ARTCI) et régime des transactions électroniques (Loi n° 2013-546) : équivalence écrit papier/électronique, signature qualifiée & PSCE, contrat en ligne « double clic » et protection du cyberconsommateur.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch3_p1',
        order: 1,
        title: 'Communications électroniques (Loi n° 2024-352), licences, fréquences et accès universel',
        summary:
          'Maîtriser le nouveau cadre ivoirien des communications électroniques issu de la Loi n° 2024-352 du 6 juin 2024 : régimes d’exercice des opérateurs, gestion des ressources rares (fréquences/numérotation), interconnexion et service universel.',
        conceptExplanation:
          'Le secteur des télécommunications et TIC en Côte d’Ivoire — autrefois régi par l’Ordonnance n° 2012-293 — a été modernisé par la Loi n° 2024-352 du 6 juin 2024 relative aux Communications Électroniques afin d’accompagner la 5G, la fibre optique, les services OTT et l’inclusion numérique.\n\n1) Trois régimes juridiques d’exercice pour les opérateurs : (a) la licence individuelle (pour les réseaux ouverts au public utilisant des ressources rares comme les fréquences mobiles 4G/5G ou de grandes infrastructures) ; (b) l’autorisation générale (pour certains services à valeur ajoutée ou fournisseurs d’accès Internet) ; (c) la déclaration ou régime libre (pour les réseaux internes privés et équipements terminaux agréés).\n2) Ressources rares et régulation ARTCI : le spectre des fréquences radioélectriques et le plan national de numérotation appartiennent au domaine public de l’État. Leur attribution, leur contrôle technique et l’arbitrage des litiges d’interconnexion entre opérateurs relèvent de l’ARTCI (et de l’AIGF pour la gestion des fréquences).\n3) Concurrence loyale et Service/Accès universel : la loi garantit l’interconnexion des réseaux (pour qu’un abonné d’un opérateur puisse appeler celui d’un autre), la portabilité des numéros, la qualité de service et le financement du Service Universel des Télécommunications/TIC afin de connecter les zones rurales non rentables.',
        formulas: [
          {
            name: 'Hiérarchie des régimes d’exercice des opérateurs (Loi n° 2024-352)',
            formula: 'Régime libre (réseau interne)  <  Déclaration / Autorisation générale (FAI, SVA)  <  Licence individuelle (Opérateur mobile / spectre)',
            note: 'Plus l’activité mobilise des ressources rares (fréquences, numéros) et le public, plus le régime d’autorisation est strict.',
          },
        ],
        keyRule:
          'Les fréquences radioélectriques appartiennent au domaine public de l’État ; l’ARTCI régule la concurrence, l’interconnexion, la qualité de service et l’accès universel sur tout le territoire.',
        workedExample: {
          title: 'Qualifier le régime d’un nouvel opérateur fibre et d’un réseau Wi-Fi interne d’entreprise',
          statement:
            'Une entreprise (A) souhaite déployer un réseau mobile 5G ouvert au public en Côte d’Ivoire ; une PME (B) installe simplement un réseau Wi-Fi interne dans ses bureaux d’Abidjan.',
          methodSteps: [
            '1. Entreprise (A) : exploitation d’un réseau ouvert au public mobilisant des fréquences radioélectriques rares → exige une LICENCE individuelle délivrée selon le cadre de la Loi n° 2024-352 et un cahier des charges strict (couverture, qualité, redevances).',
            '2. PME (B) : réseau indépendant purement interne sur bandes libres non ouvert au public → relève du régime de liberté (avec équipements terminaux homologués).',
            '3. Obligation sectorielle : l’opérateur (A) devra assurer l’interconnexion avec les autres opérateurs sous contrôle de l’ARTCI et contribuer au fonds de Service Universel.',
          ],
          conclusion:
            'La Loi n° 2024-352 proportionne les contraintes administratives à l’impact public et à l’usage des ressources rares.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Loi n° 2024-352',
            stepTheme: 'Cadre des communications électroniques',
            stepTitle: 'Comprendre la portée de la Loi n° 2024-352 du 6 juin 2024',
            paragraphText:
              'Pour adapter le droit ivoirien à la convergence numérique (fibre, 5G, cloud, services en ligne), la Côte d’Ivoire a adopté la Loi n° 2024-352 du 6 juin 2024 relative aux Communications Électroniques.\n• **Objet principal** : encadrer l’établissement et l’exploitation des réseaux, sécuriser les transmissions électroniques, promouvoir une concurrence saine et protéger les consommateurs.\n• **Modernisation** : elle succède au cadre antérieur de 2012 en renforçant la régulation des infrastructures partagées, la qualité de service et la résilience des réseaux.\n• **Exemple pratique** : lorsqu’un opérateur mobile subit une coupure prolongée ou ne respecte pas les débits annoncés, l’ARTCI peut le mettre en demeure et le sanctionner sur le fondement de cette loi.',
            keyRule:
              'La Loi n° 2024-352 du 6 juin 2024 constitue le nouveau texte fondamental régissant les réseaux, opérateurs et services de communications électroniques en Côte d’Ivoire.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quel texte législatif constitue le socle actualisé encadrant les réseaux et services de communications électroniques en Côte d’Ivoire depuis 2024 ?',
              options: [
                'La Loi n° 2024-352 du 6 juin 2024 relative aux Communications Électroniques',
                'La Loi n° 2016-555 sur le droit d’auteur et les droits voisins',
                'L’Arrêté n° 511 sur le profil du DPO',
                'La Convention de Budapest de 2001 uniquement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Loi n° 2024-352 du 6 juin 2024 modernise et encadre l’ensemble des activités de communications électroniques en Côte d’Ivoire.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Licences & Régimes',
            stepTheme: 'Accès au marché télécoms',
            stepTitle: 'Distinguer licence individuelle, autorisation générale et régime libre',
            paragraphText:
              'Tout acteur ne peut pas déployer un réseau télécom au hasard : la loi gradue l’accès au marché selon l’ampleur de l’infrastructure et la rareté des ressources.\n• **Licence individuelle** : requise pour les opérateurs de réseaux ouverts au public utilisant des ressources rares (fréquences mobiles, grandes boucles nationales), assortie d’un cahier des charges contraignant.\n• **Autorisation générale / déclaration** : applicable aux fournisseurs d’accès Internet (FAI) ou services à valeur ajoutée n’exigeant pas de spectre exclusif.\n• **Régime libre** : réseaux internes privés (LAN/Wi-Fi d’entreprise ou domestique) et équipements homologués.\n• **Exemple pratique** : un opérateur 4G/5G détient une licence individuelle coûteuse, alors qu’un cybercafé ou un réseau local d’entreprise ne nécessite pas de licence nationale.',
            keyRule:
              'Réseau public + ressources rares = Licence individuelle ; Fourniture de services encadrés = Autorisation/Déclaration ; Réseau privé interne = Régime libre.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quel régime juridique s’applique à un opérateur souhaitant exploiter un réseau de téléphonie mobile 5G ouvert au public en Côte d’Ivoire ?',
              options: [
                'Le régime de liberté totale sans autorisation',
                'Le régime de la licence individuelle assortie d’un cahier des charges',
                'Une simple déclaration au BURIDA',
                'Un dépôt de marque à l’OAPI uniquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’exploitation d’un réseau mobile ouvert au public mobilisant des fréquences rares relève du régime le plus strict : la licence individuelle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Ressources rares',
            stepTheme: 'Spectre et numérotation',
            stepTitle: 'Comprendre la gestion publique des fréquences et de la numérotation',
            paragraphText:
              'Les ondes radioélectriques (3G, 4G, 5G, satellite) et les tranches de numéros de téléphone sont en quantité physiquement limitée.\n• **Domaine public de l’État** : le spectre des fréquences et le plan national de numérotation (ex. numérotation à 10 chiffres en Côte d’Ivoire) appartiennent à l’État et ne peuvent jamais devenir propriété privée d’un opérateur.\n• **Assignation et contrôle** : les opérateurs obtiennent un droit d’usage temporaire contre redevance ; l’ARTCI et l’AIGF veillent à éviter les brouillages nuisibles et à sanctionner l’usage pirate de fréquences.\n• **Exemple pratique** : la transition de la Côte d’Ivoire vers la numérotation à 10 chiffres en 2021 a été pilotée par l’ARTCI pour répondre à la saturation des numéros.',
            keyRule:
              'Fréquences radioélectriques et plan de numérotation = ressources rares du domaine public de l’État, concédées temporairement contre redevances.',
            konanTip:
              'Retiens que l’opérateur n’est jamais « propriétaire » de ses fréquences : il n’en est que le titulaire d’un droit d’usage contrôlé.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quel est le statut juridique du spectre des fréquences radioélectriques utilisées par les opérateurs mobiles en Côte d’Ivoire ?',
              options: [
                'Il appartient définitivement en pleine propriété au premier opérateur qui l’utilise',
                'Il constitue une ressource rare appartenant au domaine public de l’État, attribuée sous forme de droit d’usage contrôlé',
                'Il appartient aux fabricants de smartphones',
                'Il est librement appropriable sans autorisation ni redevance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le spectre radioélectrique relève du domaine public de l’État ; les opérateurs obtiennent un droit d’usage temporaire et réglementé.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Interconnexion',
            stepTheme: 'Concurrence et partage',
            stepTitle: 'Garantir l’interconnexion des réseaux et la portabilité des numéros',
            paragraphText:
              'Sans règle d’interconnexion, un abonné d’un opérateur ne pourrait ni appeler ni envoyer de SMS ou de transfert Mobile Money vers un abonné d’un opérateur concurrent.\n• **Obligation d’interconnexion** : chaque opérateur de réseau ouvert au public doit faire droit aux demandes raisonnables d’interconnexion de ses concurrents selon des tarifs transparents et non discriminatoires contrôlés par l’ARTCI.\n• **Partage d’infrastructures et portabilité** : la loi encourage la mutualisation des pylônes/fibres et garantit la portabilité permettant à un usager de changer d’opérateur tout en conservant son numéro.\n• **Exemple pratique** : si un opérateur dominant facture un tarif abusif pour terminer les appels d’un petit concurrent, l’ARTCI intervient pour imposer un catalogue d’interconnexion équitable.',
            keyRule:
              'L’interconnexion est une obligation légale qui empêche les monopoles fermés et garantit que tout citoyen puisse communiquer d’un réseau à l’autre.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pourquoi le législateur impose-t-il aux opérateurs télécoms une obligation d’interconnexion contrôlée par l’ARTCI ?',
              options: [
                'Pour empêcher les abonnés d’opérateurs différents de communiquer entre eux',
                'Pour garantir la communication fluide entre tous les réseaux et éviter qu’un opérateur dominant n’évince ses concurrents',
                'Pour supprimer totalement la facturation des appels',
                'Pour transférer la gestion des réseaux aux éditeurs de jeux vidéo',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’interconnexion assure la continuité de bout en bout entre réseaux concurrents et préserve une concurrence loyale sous l’arbitrage de l’ARTCI.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Accès universel',
            stepTheme: 'Inclusion numérique',
            stepTitle: 'Comprendre le mécanisme du Service et de l’Accès Universel',
            paragraphText:
              'Les opérateurs privés investissent naturellement en priorité dans les grandes villes rentables (Abidjan, Yamoussoukro, San-Pedro) au risque d’exclure les villages reculés.\n• **Principe du Service Universel** : garantir à toute la population, sur l’ensemble du territoire national, un accès de base aux services de télécommunications et d’Internet à un prix abordable et une qualité minimale.\n• **Financement solidaire** : les opérateurs titulaires de licences contribuent à un fonds dédié (Fonds du Service Universel géré en lien avec l’ANSUT / l’ARTCI) qui finance les pylônes ruraux, les centres multimédias communautaires et la connectivité scolaire.\n• **Exemple pratique** : le déploiement de la 4G et de points d’accès publics dans des sous-préfectures isolées du Nord ou de l’Ouest est soutenu par ce mécanisme.',
            keyRule:
              'Service Universel = solidarité territoriale financée par le secteur pour réduire la fracture numérique entre zones urbaines et rurales.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal du mécanisme de Service et d’Accès Universel prévu par le droit des communications électroniques ?',
              options: [
                'Réserver la fibre optique exclusivement aux banques du Plateau',
                'Réduire la fracture numérique en assurant un accès de base abordable aux TIC sur l’ensemble du territoire, y compris en zone rurale',
                'Autoriser les opérateurs à couper le réseau dans les zones peu rentables',
                'Supprimer les redevances de fréquences pour les multinationales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Service Universel corrige les déséquilibres du marché en finançant la couverture et l’accès abordable aux communications électroniques dans les zones rurales et défavorisées.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Neutralité & Qualité',
            stepTheme: 'Droits des abonnés télécoms',
            stepTitle: 'Protéger la neutralité du net et la qualité de service des abonnés',
            paragraphText:
              'Au-delà des infrastructures, la régulation des communications électroniques protège directement les droits quotidiens des abonnés Internet et mobiles.\n• **Neutralité du net** : principe selon lequel les fournisseurs d’accès doivent acheminer tout le trafic Internet de façon égale, sans bloquer ni ralentir arbitrairement un service concurrent.\n• **Qualité de service (QoS) et transparence** : l’ARTCI réalise régulièrement des campagnes de mesure sur le terrain (taux de coupure d’appels, débits réels 4G/fibre) et publie les classements des opérateurs.\n• **Exemple pratique** : un opérateur qui bride volontairement les appels vidéo d’une messagerie concurrente pour favoriser ses propres forfaits voix porte atteinte à la neutralité du net.',
            keyRule:
              'Neutralité du net = égalité de traitement du trafic sans discrimination arbitraire ; Qualité de service = indicateurs mesurés et sanctionnés par l’ARTCI.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Que garantit le principe de neutralité du net dans les communications électroniques ?',
              options: [
                'Que tous les fournisseurs d’accès Internet soient gratuits',
                'Que les opérateurs traitent l’ensemble du trafic Internet de manière égale, sans bloquer ni ralentir arbitrairement des contenus ou services légaux',
                'Que les États ne puissent jamais poursuivre la cybercriminalité',
                'Que les sites web soient dispensés de mentions légales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La neutralité du net interdit aux fournisseurs d’accès de discriminer, ralentir ou bloquer arbitrairement certains flux ou applications légales sur leurs réseaux.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch3_p2',
        order: 2,
        title: 'Transactions électroniques (Loi n° 2013-546) : écrit numérique, signature qualifiée et PSCE',
        summary:
          'Maîtriser le principe d’équivalence fonctionnelle entre écrit papier et écrit électronique, les conditions de validité de la signature électronique qualifiée, le rôle des PSCE agréés et l’archivage à valeur probante.',
        conceptExplanation:
          'Pour que le commerce électronique et la dématérialisation administrative fonctionnent en toute sécurité juridique, la Loi n° 2013-546 du 30 juillet 2013 relative aux transactions électroniques a levé l’obstacle historique du papier.\n\n1) Principe d’équivalence fonctionnelle (écrit électronique = écrit papier) : l’écrit sous forme électronique est admis en preuve au même titre que l’écrit sur support papier, à DEUX conditions cumulatives : (a) pouvoir dûment identifier la personne dont il émane ; (b) être établi et conservé dans des conditions de nature à en garantir l’intégrité.\n2) La signature électronique : elle identifie le signataire et manifeste son consentement aux obligations du contrat. La signature électronique QUALIFIÉE (ou sécurisée) repose sur un procédé fiable d’identification garantissant son lien avec l’acte (cryptographie asymétrique à clé privée/clé publique), un dispositif sécurisé de création de signature et un certificat électronique qualifié délivré par un Prestataire de Services de Certification Électronique (PSCE) agréé par l’ARTCI. Elle bénéficie d’une présomption de fiabilité jusqu’à preuve contraire.\n3) Archivage électronique et horodatage : la conservation de longue durée dans un Système d’Archivage Électronique (SAE) couplé à l’horodatage préserve la valeur probante des factures, contrats et bulletins de salaire dématérialisés.',
        formulas: [
          {
            name: 'Condition d’équivalence probante de l’écrit électronique (Loi 2013-546)',
            formula: 'Force probante Écrit électronique = Écrit papier  ⇔  Identification de l’auteur  ∧  Garantie d’intégrité',
            note: 'Sans garantie d’intégrité (possibilité de modification invisible), un fichier numérique perd sa force probante pleine.',
          },
          {
            name: 'Architecture de la signature électronique qualifiée',
            formula: 'Signature qualifiée = Clé privée du signataire + Empreinte (Hash) de l’acte + Certificat qualifié PSCE agréé ARTCI',
            note: 'Toute altération d’un seul caractère du document après signature invalide immédiatement la vérification cryptographique.',
          },
        ],
        keyRule:
          'Écrit électronique = écrit papier si et seulement si (1) l’auteur est identifiable et (2) l’intégrité du document est garantie dans le temps.',
        workedExample: {
          title: 'Vérifier la validité d’un contrat commercial signé électroniquement entre deux PME ivoiriennes',
          statement:
            'Une entreprise d’Abidjan et un fournisseur de San-Pedro signent un contrat de 25 millions FCFA en ligne. L’un veut simplement coller une image scannée de sa signature manuscrite dans un fichier Word ; le juriste recommande une signature électronique qualifiée via un PSCE.',
          methodSteps: [
            '1. Rejeter la simple image scannée collée : facile à copier-coller par un tiers et modifiable sans trace, elle ne garantit ni l’identité certaine du signataire ni l’intégrité du contrat.',
            '2. Utiliser une signature électronique qualifiée : le signataire utilise sa clé privée liée à un certificat électronique qualifié délivré par un PSCE agréé par l’ARTCI.',
            '3. Archiver le document signé et horodaté : en cas de litige devant le tribunal de commerce, la signature qualifiée bénéficie d’une présomption légale de fiabilité équivalente à la signature manuscrite.',
          ],
          conclusion:
            'Seule une signature cryptographique adossée à un certificat PSCE garantit pleinement l’identité, le consentement et l’intégrité du contrat.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Équivalence fonctionnelle',
            stepTheme: 'Écrit papier vs Écrit électronique',
            stepTitle: 'Appliquer les 2 conditions de valeur probante de l’écrit électronique',
            paragraphText:
              'La Loi n° 2013-546 du 30 juillet 2013 a consacré un principe révolutionnaire : le support numérique n’est plus un sous-droit face au papier.\n• **Équivalence légale** : l’écrit électronique a la même force probante que l’écrit sur support papier.\n• **Deux conditions cumulatives** : (1) la personne dont il émane doit pouvoir être dûment identifiée ; (2) il doit être établi et conservé dans des conditions garantissant son intégrité (absence d’altération).\n• **Exemple pratique** : une facture électronique horodatée et scellée dans un coffre-fort numérique a la même valeur devant le juge qu’une facture papier tamponnée.',
            formula: {
              name: 'Équivalence écrit papier / électronique',
              formula: 'Écrit électronique probant  ⇔  Identification certaine  ∧  Intégrité garantie',
              note: 'Ce principe permet la dématérialisation des contrats, factures et procédures administratives.',
            },
            keyRule:
              'Un document numérique vaut écrit papier dès lors qu’il remplit les deux exigences cumulatives : identification de l’auteur + intégrité garantie.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Selon la Loi n° 2013-546 relative aux transactions électroniques, quelles sont les deux conditions cumulatives pour qu’un écrit électronique ait la même force probante qu’un écrit papier ?',
              options: [
                'Être imprimé en couleur et envoyé par courrier postal',
                'Permettre d’identifier dûment la personne dont il émane et être établi/conservé dans des conditions garantissant son intégrité',
                'Être rédigé exclusivement en anglais et peser moins de 1 Mo',
                'Être publié publiquement sur un réseau social',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’équivalence fonctionnelle entre écrit électronique et écrit papier repose sur l’identification fiable de son auteur et la garantie d’intégrité du document.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Signature scannée',
            stepTheme: 'Piège de l’image collée',
            stepTitle: 'Distinguer signature électronique fiable et simple signature scannée',
            paragraphText:
              'Une erreur très répandue dans les entreprises consiste à scanner sa signature manuscrite sur papier et à coller l’image JPEG dans un contrat numérique.\n• **Limite juridique du scan** : une image scannée n’est PAS une signature électronique fiable au sens légal ; n’importe qui peut la copier et l’apposer sur un autre document, et le texte peut être modifié après coup.\n• **Vraie signature électronique** : procédé cryptographique liant mathématiquement l’identité vérifiée du signataire au contenu exact du fichier (empreinte numérique).\n• **Exemple pratique** : en cas de contestation d’un contrat de bail signé uniquement par image collée, le signataire peut nier son consentement beaucoup plus facilement.',
            keyRule:
              'Une image scannée de signature manuscrite ne garantit ni l’identité ni l’intégrité : ce n’est pas une signature électronique qualifiée.',
            konanTip:
              'Une signature électronique qualifiée est invisible comme dessin mais infalsifiable mathématiquement : modifier une seule virgule du contrat brise immédiatement le sceau cryptographique.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le simple fait de coller l’image scannée de sa signature manuscrite dans un document numérique ne constitue-t-il pas une signature électronique qualifiée ?',
              options: [
                'Parce que la loi interdit toute signature dans les fichiers numériques',
                'Parce qu’une image collée est facilement reproductible par un tiers et ne garantit ni le lien fiable avec le signataire ni l’intégrité du document',
                'Parce qu’elle coûte trop cher en certification',
                'Parce qu’elle ne fonctionne que sur téléphone mobile',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une simple image scannée ne repose sur aucun procédé cryptographique liant le signataire à l’intégrité de l’acte et ne bénéficie donc pas de la présomption de fiabilité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Signature qualifiée',
            stepTheme: 'Fonctionnement cryptographique & PSCE',
            stepTitle: 'Maîtriser le mécanisme de la signature qualifiée et du certificat PSCE',
            paragraphText:
              'La confiance dans une signature électronique qualifiée repose sur la combinaison d’une technologie cryptographique et d’un tiers de confiance agréé.\n• **Cryptographie asymétrique** : le document passe par une fonction de hachage (empreinte unique) qui est chiffrée avec la clé privée du signataire ; le destinataire vérifie l’authenticité grâce à la clé publique contenue dans le certificat.\n• **Rôle du PSCE (Prestataire de Services de Certification Électronique)** : tiers de confiance agréé par l’ARTCI qui vérifie l’identité réelle du signataire, délivre le certificat électronique qualifié et maintient la liste des certificats révoqués.\n• **Effet légal** : la signature qualifiée bénéficie d’une présomption de fiabilité — c’est à celui qui la conteste de prouver la fraude.',
            visualSchema: {
              type: 'flowchart',
              title: 'Chaîne de confiance d’une signature électronique qualifiée (Loi n° 2013-546)',
              caption: 'De la vérification d’identité par le PSCE agréé ARTCI jusqu’à la preuve devant le juge.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    kind: 'start',
                    label: '1. Vérification d’identité par un PSCE agréé ARTCI',
                    sublabel: 'Délivrance d’un certificat électronique qualifié (clé publique + clé privée)',
                    color: 'blue',
                  },
                  {
                    kind: 'process',
                    label: '2. Calcul de l’empreinte (Hash) du contrat numérique',
                    sublabel: 'Condensat mathématique unique reflétant chaque caractère de l’acte',
                    color: 'violet',
                  },
                  {
                    kind: 'process',
                    label: '3. Scellement par la clé privée du signataire + horodatage',
                    sublabel: 'Manifestation irrévocable du consentement à une date certaine',
                    color: 'green',
                  },
                  {
                    kind: 'decision',
                    label: '4. Vérification par le destinataire (clé publique PSCE)',
                    sublabel: 'Le document a-t-il été modifié ou le certificat révoqué ?',
                    color: 'orange',
                    branchLabel: 'ALTÉRÉ',
                    branchTarget: 'Signature INVALIDE (rejet automatique)',
                  },
                  {
                    kind: 'end',
                    label: '5. Signature VALIDE : présomption légale de fiabilité',
                    sublabel: 'Force probante équivalente à la signature manuscrite',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'PSCE agréé par l’ARTCI = tiers de confiance qui garantit l’identité du titulaire du certificat et confère à la signature qualifiée sa présomption de fiabilité.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quel est le rôle juridique d’un Prestataire de Services de Certification Électronique (PSCE) agréé par l’ARTCI ?',
              options: [
                'Rédiger les conditions générales de vente de toutes les boutiques en ligne',
                'Vérifier l’identité du signataire, délivrer et gérer les certificats électroniques qualifiés garantissant la fiabilité des signatures',
                'Héberger gratuitement les réseaux sociaux',
                'Prononcer des peines de prison contre les cybercriminels',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le PSCE agit comme tiers de confiance agréé : il atteste le lien entre une clé cryptographique et l’identité réelle d’une personne via un certificat qualifié.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Exceptions légales',
            stepTheme: 'Actes exclus de la voie électronique',
            stepTitle: 'Identifier les actes solennels traditionnellement exclus du tout-numérique',
            paragraphText:
              'Même si la Loi n° 2013-546 généralise le contrat électronique, certains actes particulièrement sensibles ou solennels restent soumis à des formes spécifiques.\n• **Actes sous seing privé concernés par des réserves** : certains actes relevant du droit de la famille et des successions (testaments, contrats de mariage), ainsi que certaines sûretés personnelles ou réelles (cautionnements hors profession) ou actes notariés exigeant la comparution physique devant officier public, sauf dispositif authentique électronique légalement habilité.\n• **Raison d’être** : protéger le consentement éclairé des particuliers face à des engagements patrimoniaux ou familiaux graves.\n• **Exemple pratique** : un contrat commercial entre deux entreprises se conclut librement en ligne, mais un testament olographe obéit aux formes strictes du Code civil.',
            keyRule:
              'La voie électronique est la règle pour les actes commerciaux et courants, mais certains actes solennels (famille, successions, sûretés privées) restent encadrés par des exceptions légales.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Pourquoi la loi sur les transactions électroniques maintient-elle des exceptions pour certains actes solennels (droit de la famille, successions, certains cautionnements privés) ?',
              options: [
                'Parce que les ordinateurs ne peuvent pas afficher de textes juridiques',
                'Pour protéger particulièrement le consentement éclairé des personnes lors d’engagements familiaux ou patrimoniaux graves',
                'Pour interdire aux entreprises de vendre des produits en ligne',
                'Parce que l’ARTCI n’accepte aucun document numérique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces exceptions visent à entourer les actes patrimoniaux ou familiaux les plus graves d’un formalisme protecteur garantissant la réflexion et la solennité du consentement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Archivage probant',
            stepTheme: 'Conservation et horodatage',
            stepTitle: 'Organiser l’archivage électronique à valeur probante (SAE)',
            paragraphText:
              'Signer un contrat électroniquement ne suffit pas si l’entreprise perd le fichier ou le stocke dans un dossier modifiable sans preuve de conservation.\n• **Système d’Archivage Électronique (SAE)** : coffre-fort numérique garantissant la pérennité, la lisibilité, la traçabilité et l’intégrité des documents sur toute la durée légale de conservation (ex. 10 ans en matière commerciale/comptable).\n• **Horodatage qualifié** : sceau temporel délivré par un tiers de confiance prouvant qu’un document existait exactement sous cette forme à une date et une heure précises.\n• **Exemple pratique** : une banque conserve les contrats de prêt numériques et leurs preuves de signature dans un SAE horodaté pour les produire en justice en cas d’impayé 5 ans plus tard.',
            keyRule:
              'Un document électronique ne garde sa force probante dans le temps que s’il est conservé dans un système garantissant son intégrité et son horodatage.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'À quoi sert principalement l’horodatage électronique qualifié couplé à un Système d’Archivage Électronique (SAE) ?',
              options: [
                'À compresser les vidéos publicitaires d’un site marchand',
                'À prouver de manière certaine la date d’existence et l’intégrité intacte d’un document électronique pendant toute sa durée légale de conservation',
                'À modifier discrètement la date d’une facture après sa signature',
                'À remplacer l’inscription au Registre du Commerce (RCCM)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’horodatage qualifié certifie la date exacte d’un acte et le SAE assure sa conservation intègre et traçable dans la durée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Paiement & Confiance',
            stepTheme: 'Sécurisation des paiements en ligne',
            stepTitle: 'Sécuriser les paiements électroniques et le Mobile Money en zone UEMOA',
            paragraphText:
              'Le commerce électronique en Côte d’Ivoire s’appuie massivement sur le Mobile Money et les cartes bancaires, encadrés conjointement par le droit numérique et la réglementation bancaire UEMOA (BCEAO).\n• **Authentification forte** : validation par code PIN, code à usage unique (OTP/SMS) ou biométrie (3D-Secure) pour prévenir la fraude.\n• **Responsabilité en cas d’opération non autorisée** : l’émetteur de monnaie électronique ou la banque doit assurer la sécurité du système de paiement et traiter rapidement les contestations en cas de fraude technique, tandis que l’usager doit garder ses codes secrets.\n• **Exemple pratique** : une plateforme e-commerce intègre une passerelle de paiement agréée chiffrée en HTTPS/TLS plutôt que de stocker elle-même les codes secrets des acheteurs.',
            keyRule:
              'La confiance dans l’e-commerce repose sur le triptyque : passerelle de paiement agréée (BCEAO) + protocole chiffré HTTPS/TLS + authentification forte.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle pratique de paiement en ligne garantit le mieux la sécurité juridique et technique d’un site e-commerce en Côte d’Ivoire ?',
              options: [
                'Demander aux clients d’envoyer leur code PIN Mobile Money par message texte non chiffré',
                'Utiliser une passerelle de paiement agréée avec protocole chiffré HTTPS/TLS et authentification forte (OTP/PIN sécurisé)',
                'Stocker les numéros complets et codes secrets des cartes dans un fichier Excel public',
                'Désactiver toute confirmation de commande pour gagner du temps',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le recours à un prestataire de paiement agréé utilisant HTTPS/TLS et une authentification forte protège les fonds et limite la responsabilité du marchand.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch3_p3',
        order: 3,
        title: 'Contrat en ligne « double clic », obligations du e-commerçant et protection du cyberconsommateur',
        summary:
          'Maîtriser le mécanisme légal du « double clic » pour la formation du contrat électronique, les mentions légales et CGV obligatoires, le droit de rétractation (7 jours / 30 jours) et les obligations de livraison et de garantie.',
        conceptExplanation:
          'Acheter à distance sans voir physiquement le produit ni rencontrer le vendeur place le consommateur en position de vulnérabilité. La Loi n° 2013-546 relative aux transactions électroniques et le droit de la consommation organisent donc un parcours contractuel strictement balisé.\n\n1) Obligations précontractuelles d’information : tout site marchand doit afficher de manière lisible ses mentions légales (identité complète, raison sociale, RCCM, adresse, contacts, hébergeur, autorité de contrôle), ses CGU/CGV, les caractéristiques essentielles du bien, le prix TOTAL TTC (frais de livraison inclus) et les délais de livraison.\n2) Formation du contrat en ligne — la règle du « double clic » : pour éviter toute commande par erreur, le contrat n’est valablement conclu qu’après (a) l’offre claire du vendeur, (b) un 1er clic de commande suivi d’un écran récapitulatif permettant de vérifier le détail, le prix total et de corriger d’éventuelles erreurs, (c) un 2nd clic de confirmation définitive exprimant l’acceptation, suivi (d) d’un accusé de réception électronique envoyé sans délai par le vendeur.\n3) Protection du cyberconsommateur : le consommateur dispose d’un droit de rétractation de 7 jours (prolongé à 30 jours si le vendeur a omis de l’informer de ce droit), sauf exceptions légales (produits périssables, biens sur mesure, téléchargements numériques déjà exécutés). Le vendeur est responsable de plein droit de la bonne exécution de la commande et de la livraison.',
        formulas: [
          {
            name: 'Séquence légale de validité du contrat en ligne (Loi 2013-546)',
            formula: 'Offre transparente  →  1er Clic (Commande)  →  Récapitulatif & Correction  →  2nd Clic (Confirmation)  →  Accusé de réception',
            note: 'Sans possibilité de vérifier et corriger sa commande avant le 2nd clic, le contrat électronique est irrégulièrement formé.',
          },
          {
            name: 'Délai de rétractation du cyberconsommateur',
            formula: 'Délai légal = 7 jours (information fournie)   |   Sanction = 30 jours (défaut d’information du vendeur)',
            note: 'Exceptions : denrées périssables, biens personnalisés sur mesure, contenus numériques déjà téléchargés avec accord.',
          },
        ],
        keyRule:
          'Contrat en ligne valide = Double clic (vérification/correction entre les deux clics) + Accusé de réception immédiat. Rétractation = 7 jours (30 jours en cas d’oubli d’information).',
        workedExample: {
          title: 'Contrôler la conformité d’un tunnel de commande d’une boutique en ligne ivoirienne',
          statement:
            'Un client achète une paire de chaussures sur un site d’Abidjan : dès qu’il clique une seule fois sur « Acheter », sa carte est débitée sans récapitulatif ni mention du droit de rétractation. Cinq jours après livraison, il change d’avis.',
          methodSteps: [
            '1. Relever l’irrégularité du tunnel de commande : absence du mécanisme légal du « double clic » (pas d’écran récapitulatif permettant de vérifier le prix TTC et de corriger une erreur avant confirmation).',
            '2. Appliquer le droit de rétractation : même si le vendeur n’a pas mentionné ce droit, le consommateur est dans le délai légal (et bénéficie même d’une prolongation à 30 jours faute d’information préalable).',
            '3. Conséquence juridique : le vendeur doit accepter le retour des chaussures non personnalisées et rembourser le consommateur dans les délais légaux.',
          ],
          conclusion:
            'Le non-respect du double clic et de l’information précontractuelle se retourne toujours contre le e-commerçant négligent.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Double clic',
            stepTheme: 'Formation du contrat en ligne',
            stepTitle: 'Maîtriser le parcours légal du « double clic » en e-commerce',
            paragraphText:
              'En ligne, un simple clic maladroit sur un écran tactile ne doit jamais engager définitivement un acheteur : la loi impose donc un verrou en deux temps.\n• **Premier clic** : le consommateur sélectionne son panier et initie la commande.\n• **Étape tampon obligatoire** : affichage d’un récapitulatif détaillé (produits, quantités, prix TTC, frais de livraison) offrant la possibilité technique de modifier ou corriger toute erreur.\n• **Second clic** : confirmation définitive de la commande (acceptation) suivie immédiatement d’un accusé de réception électronique par le vendeur.\n• **Exemple pratique** : les grandes plateformes marchandes affichent toujours un écran « Récapitulatif de votre commande » avant le bouton final « Confirmer et payer ».',
            visualSchema: {
              type: 'flowchart',
              title: 'Formation du contrat électronique : le mécanisme obligatoire du « double clic »',
              caption: 'Parcours légal de protection du consentement du cyberconsommateur (Loi n° 2013-546).',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    kind: 'start',
                    label: '1. Offre en ligne transparente (CGV, prix TTC, délais)',
                    sublabel: 'Mentions légales et caractéristiques essentielles visibles',
                    color: 'blue',
                  },
                  {
                    kind: 'process',
                    label: '2. PREMIER CLIC : Sélection et validation du panier',
                    sublabel: 'Le consommateur exprime son intention d’acheter',
                    color: 'violet',
                  },
                  {
                    kind: 'decision',
                    label: '3. Écran récapitulatif : vérifier et corriger les erreurs',
                    sublabel: 'Adresse, quantité, frais de port, prix total TTC',
                    color: 'orange',
                    branchLabel: 'ERREUR',
                    branchTarget: 'Retour au panier pour modification sans frais',
                  },
                  {
                    kind: 'process',
                    label: '4. SECOND CLIC : Confirmation définitive de la commande',
                    sublabel: 'Acceptation ferme et éclairée → Formation du contrat',
                    color: 'green',
                  },
                  {
                    kind: 'end',
                    label: '5. Accusé de réception électronique immédiat',
                    sublabel: 'Envoyé par e-mail/SMS par le vendeur avec preuve de commande',
                    color: 'blue',
                  },
                ],
              },
            },
            keyRule:
              'Sans écran récapitulatif permettant de corriger les erreurs entre le 1er et le 2nd clic, le contrat en ligne ne respecte pas le formalisme légal.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'À quoi sert l’étape obligatoire située entre le premier clic et le second clic dans la conclusion d’un contrat électronique ?',
              options: [
                'À augmenter artificiellement le prix de la livraison',
                'À permettre au consommateur de vérifier le détail de sa commande, son prix total TTC et de corriger d’éventuelles erreurs avant confirmation définitive',
                'À obliger le consommateur à créer un compte sur trois réseaux sociaux',
                'À supprimer le droit de rétractation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La règle du double clic protège le consentement en offrant au client une étape récapitulative de vérification et de correction avant son engagement définitif.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Mentions légales & CGV',
            stepTheme: 'Transparence du site marchand',
            stepTitle: 'Vérifier les mentions légales, CGU et CGV obligatoires',
            paragraphText:
              'Un consommateur doit toujours savoir exactement à qui il achète et sous quelles règles juridiques la vente s’exécute.\n• **Mentions légales obligatoires** : raison sociale ou nom complet de l’éditeur, adresse physique, RCCM, contacts directs, identité de l’hébergeur et coordonnées de l’autorité de contrôle (ARTCI).\n• **CGU (Conditions Générales d’Utilisation)** : encadrent les règles d’usage de la plateforme par tout visiteur (modération, propriété intellectuelle, comportements interdits).\n• **CGV (Conditions Générales de Vente)** : régissent la relation commerciale (prix TTC, paiement, livraison, rétractation, garanties, règlement des litiges).\n• **Exemple pratique** : une boutique Instagram qui vend sans aucune identité légale ni adresse ni CGV viole les obligations de transparence de l’e-commerce.',
            keyRule:
              'Mentions légales = carte d’identité du site ; CGU = règlement d’usage de la plateforme ; CGV = contrat encadrant l’acte d’achat.',
            konanTip:
              'Ne confonds jamais CGU (tous les utilisateurs d’un service, même gratuit) et CGV (uniquement les acheteurs/clients d’une transaction marchande).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Quelle différence essentielle distingue les CGU des CGV sur une plateforme d’e-commerce ?',
              options: [
                'Les CGU encadrent l’usage général du site/plateforme par les internautes, tandis que les CGV encadrent les conditions contractuelles de vente (prix, paiement, livraison, garanties)',
                'Les CGU sont réservées aux banques et les CGV aux universités',
                'Les CGV sont interdites en Côte d’Ivoire depuis 2013',
                'Il n’existe aucune différence entre les deux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les CGU régissent l’utilisation technique et comportementale de la plateforme ; les CGV définissent les obligations réciproques de la transaction commerciale.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Rétractation',
            stepTheme: 'Délai légal de 7 jours / 30 jours',
            stepTitle: 'Appliquer le droit de rétractation et ses exceptions légales',
            paragraphText:
              'Parce que l’acheteur en ligne ne peut ni toucher ni essayer le produit avant la livraison, la loi lui reconnaît un « droit à l’erreur » sans avoir à se justifier.\n• **Délai légal** : 7 jours à compter de la réception du bien (ou de la conclusion du contrat de service) pour se rétracter sans pénalité.\n• **Sanction du défaut d’information** : si le vendeur n’a pas clairement informé le consommateur de son droit de rétractation, le délai est automatiquement prolongé à 30 jours.\n• **Exceptions légales** : denrées périssables (repas livrés, produits frais), biens confectionnés sur mesure/personnalisés, et contenus numériques téléchargés dont l’exécution a commencé avec l’accord du client.\n• **Exemple pratique** : un client peut renvoyer un casque audio standard sous 7 jours, mais pas un gâteau d’anniversaire personnalisé déjà livré.',
            keyRule:
              'Rétractation e-commerce en Côte d’Ivoire = 7 jours (prolongés à 30 jours en cas de défaut d’information), hors périssables, sur-mesure et téléchargements numériques.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Pour quel achat en ligne le consommateur NE peut-il PAS exercer son droit légal de rétractation après réception ?',
              options: [
                'Un smartphone standard acheté en ligne et non déballé',
                'Un panier de fruits frais périssables ou un maillot floqué sur mesure à son prénom',
                'Un sac à dos de série vendu par un site marchand',
                'Une paire d’écouteurs standard',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les produits périssables, les biens confectionnés sur mesure ou personnalisés et les contenus numériques déjà téléchargés constituent les exceptions légales au droit de rétractation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Livraison & Risques',
            stepTheme: 'Responsabilité de plein droit du vendeur',
            stepTitle: 'Engager la responsabilité de plein droit du e-commerçant lors de la livraison',
            paragraphText:
              'Que se passe-t-il lorsqu’un colis payé en ligne est perdu ou abîmé par le livreur avant d’arriver chez le client ?\n• **Responsabilité de plein droit** : le cybercommerçant est directement responsable envers le consommateur de la bonne exécution de toutes les obligations du contrat, y compris lorsque le transport est sous-traité à un livreur tiers.\n• **Interdiction de se défausser** : le vendeur ne peut pas dire au client « débrouillez-vous avec le livreur » ; il doit réexpédier ou rembourser le client, puis se retourner lui-même contre son transporteur.\n• **Causes d’exonération strictes** : seule la preuve d’une faute du consommateur, du fait imprévisible et insurmontable d’un tiers étranger au contrat ou d’un cas de force majeure peut exonérer le vendeur.',
            keyRule:
              'En e-commerce, le risque de perte pendant le transport pèse sur le vendeur jusqu’à la remise physique du colis au consommateur.',
            konanTip:
              'Le vendeur reste l’interlocuteur juridique unique du consommateur, même s’il confie la livraison à une société externe.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Un client commande un ordinateur sur un site marchand ivoirien ; le colis est perdu pendant le transport par le prestataire de livraison choisi par le site. Qui est directement responsable face au client ?',
              options: [
                'Le client, qui devait surveiller le camion de livraison',
                'Le vendeur en ligne, responsable de plein droit de la bonne exécution de la commande (à charge pour lui de se retourner contre son livreur)',
                'L’opérateur télécom qui a fourni le réseau 4G',
                'Personne, car les achats en ligne sont toujours aux risques de l’acheteur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le e-commerçant est responsable de plein droit de la bonne exécution du contrat jusqu’à la livraison effective au consommateur, même si un prestataire tiers assure le transport.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Publicité en ligne',
            stepTheme: 'Prospection et loyauté commerciale',
            stepTitle: 'Encadrer la publicité électronique et la prospection commerciale (Opt-in)',
            paragraphText:
              'La société de l’information protège les internautes contre le démarchage agressif (spam) et les publicités déguisées.\n• **Identification claire de la publicité** : toute communication commerciale en ligne (e-mail promotionnel, publication sponsorisée par un influenceur) doit être clairement identifiable comme publicitaire et indiquer l’identité de l’annonceur.\n• **Principe de l’Opt-in (consentement préalable)** : l’envoi de prospection directe par SMS, e-mail ou automate d’appel à un particulier exige son consentement préalable libre et exprès, ainsi qu’un lien simple et gratuit de désinscription.\n• **Exemple pratique** : un influenceur payé par une marque pour vanter un produit sans mentionner le partenariat commercial commet une pratique commerciale trompeuse.',
            keyRule:
              'Publicité en ligne = transparence obligatoire de l’annonceur + Opt-in préalable pour la prospection directe + lien de désinscription gratuit.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle règle encadre légalement l’envoi de SMS ou d’e-mails promotionnels massifs à des particuliers en Côte d’Ivoire ?',
              options: [
                'L’envoi libre sans aucun accord tant que le message est envoyé la nuit',
                'L’exigence d’un consentement préalable (Opt-in), l’identification de l’annonceur et la possibilité simple et gratuite de s’opposer/se désinscrire',
                'L’obligation de payer une taxe au BURIDA par SMS envoyé',
                'L’interdiction absolue de toute publicité sur Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La prospection commerciale directe par voie électronique requiert le consentement préalable du destinataire, la transparence sur l’émetteur et un moyen gratuit de désinscription.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Société de l’information',
            stepTheme: 'Garanties et règlement des litiges',
            stepTitle: 'Mobiliser les garanties légales et la médiation en e-commerce',
            paragraphText:
              'Au-delà du délai de rétractation, le cyberconsommateur bénéficie des garanties classiques contre les produits défectueux ou non conformes.\n• **Garantie de conformité et vices cachés** : si l’appareil livré ne correspond pas à la description en ligne ou présente un défaut caché le rendant impropre à son usage, le consommateur peut exiger la réparation, le remplacement ou le remboursement.\n• **Voies de recours graduées** : (1) réclamation écrite auprès du service client avec preuves (captures d’écran, facture, accusé de réception) ; (2) médiation ou saisine des associations de consommateurs / autorités compétentes (ARTCI, Direction de la concurrence/consommation) ; (3) action judiciaire.\n• **Exemple pratique** : recevoir une contrefaçon à la place d’un téléphone de marque commandé permet d’exiger l’annulation immédiate de la vente et le remboursement intégral.',
            keyRule:
              'En cas de litige e-commerce, toujours conserver l’offre (capture), l’accusé de réception, la preuve de paiement et les échanges écrits pour faire valoir ses garanties.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Un acheteur reçoit un téléviseur commandé en ligne dont l’écran présente une panne interne grave rendant l’appareil inutilisable, alors que le délai de rétractation de 7 jours est déjà écoulé. Dispose-t-il encore d’un recours ?',
              options: [
                'Non, après 7 jours le vendeur n’a plus aucune obligation même si le produit est défectueux',
                'Oui, il peut invoquer les garanties légales (conformité et vices cachés) pour obtenir réparation, remplacement ou remboursement',
                'Oui, uniquement s’il paie une nouvelle fois le prix du téléviseur',
                'Non, car les garanties légales ne s’appliquent qu’aux magasins physiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le délai de rétractation de 7 jours (pour changement d’avis) est totalement distinct des garanties légales de conformité et contre les vices cachés, qui protègent l’acheteur contre les produits défectueux.',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 4 : GOUVERNANCE RÉGIONALE CEDEAO–UEMOA, CYBERCRIMINALITÉ & PLATEFORMES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch4',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 — Gouvernance régionale CEDEAO–UEMOA, cybercriminalité et régulation des plateformes',
    summary:
      'Architecture normative multiniveau (Actes additionnels CEDEAO, directives UEMOA, Conventions de Budapest et de Malabo), droit pénal numérique (Code pénal 2019-574, Loi 2013-451), preuve électronique, perquisition numérique, coopération judiciaire internationale et régulation des plateformes et contenus illicites.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Droit du Numérique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch4_p1',
        order: 1,
        title: 'Architecture juridique régionale (CEDEAO, UEMOA) et traités internationaux (Budapest, Malabo)',
        summary:
          'Comprendre comment les lois nationales ivoiriennes s’articulent avec les Actes additionnels de la CEDEAO, les directives de l’UEMOA, la Convention de Malabo (Union africaine) et la Convention de Budapest (Conseil de l’Europe).',
        conceptExplanation:
          'Internet ignore les frontières physiques : un cyberattaquant situé dans un pays peut cibler une banque à Abidjan en passant par un serveur situé sur un troisième continent. Le droit du numérique repose donc sur une architecture juridique multiniveau harmonisée :\n\n1) Niveau international : la Convention de Budapest sur la cybercriminalité (Conseil de l’Europe, 23 novembre 2001, STE n° 185) constitue le premier traité international harmonisant les incriminations cyber, les pouvoirs d’enquête numérique et l’entraide pénale 24h/24 et 7j/7 ; la Convention 108 inspire la protection des données ; les traités OMPI encadrent la propriété intellectuelle mondiale.\n2) Niveau continental (Union africaine) : la Convention de Malabo (27 juin 2014) sur la cybersécurité et la protection des données à caractère personnel établit un socle africain unifié (e-commerce, données personnelles, cybersécurité).\n3) Niveau sous-régional ouest-africain (CEDEAO & UEMOA) : la CEDEAO a adopté trois Actes additionnels majeurs — A/SA.1/01/10 (données personnelles), A/SA.2/01/10 (transactions électroniques) et A/SA.1/08/11 (lutte contre la cybercriminalité) — qui ont directement inspiré le triptyque législatif ivoirien de 2013. L’UEMOA harmonise pour sa part les directives télécoms (interconnexion, accès universel, numérotation) et la réglementation bancaire/monnaie électronique (BCEAO).\n4) Niveau national (Côte d’Ivoire) : Constitution, Code pénal (Loi n° 2019-574 modifiée en 2021), Loi 2013-450 (données), Loi 2013-451 (cybercriminalité), Loi 2013-546 (transactions), Loi 2016-555 (droit d’auteur) et Loi 2024-352 (communications électroniques).',
        formulas: [
          {
            name: 'Correspondance Actes CEDEAO → Lois ivoiriennes de 2013',
            formula: 'Acte A/SA.1/01/10 → Loi 2013-450 (DCP)  |  Acte A/SA.2/01/10 → Loi 2013-546 (Transactions)  |  Acte A/SA.1/08/11 → Loi 2013-451 (Cybercriminalité)',
            note: 'La transposition harmonisée évite les « paradis numériques » où les cybercriminels échapperaient aux poursuites.',
          },
        ],
        keyRule:
          'Le droit numérique ivoirien s’inscrit dans une pyramide à 4 étages : Traités internationaux (Budapest, OMPI) → Union africaine (Malabo) → CEDEAO / UEMOA → Lois nationales ivoiriennes.',
        workedExample: {
          title: 'Identifier les textes applicables à une cyber-escroquerie transfrontalière en Afrique de l’Ouest',
          statement:
            'Un réseau d’escrocs opérant depuis un État voisin de la CEDEAO pirate les comptes Mobile Money de clients d’une fintech basée à Abidjan en utilisant un serveur loué en Europe.',
          methodSteps: [
            '1. Droit national applicable : la Loi n° 2013-451 (cybercriminalité) et le Code pénal ivoirien s’appliquent car le préjudice et les victimes se situent en Côte d’Ivoire.',
            '2. Cadre sous-régional CEDEAO–UEMOA : l’Acte additionnel CEDEAO A/SA.1/08/11 garantit la double incrimination dans l’État voisin, et les règles BCEAO/UEMOA encadrent le blocage et la traçabilité des flux Mobile Money.',
            '3. Cadre international : les mécanismes inspirés de la Convention de Budapest (entraide pénale rapide et conservation d’urgence des données de connexion) permettent de geler les logs sur le serveur européen.',
          ],
          conclusion:
            'L’harmonisation régionale et internationale empêche les cybercriminels d’exploiter les frontières pour organiser leur impunité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Architecture normative',
            stepTheme: 'Pyramide des normes numériques',
            stepTitle: 'Visualiser l’articulation National / CEDEAO–UEMOA / International',
            paragraphText:
              'Un juriste ou un manager du numérique en Côte d’Ivoire ne peut jamais raisonner uniquement à l’échelle nationale : chaque règle locale prolonge des engagements régionaux et internationaux.\n• **Étage international** : Convention de Budapest (2001), Convention 108, traités OMPI.\n• **Étage continental et sous-régional** : Convention de Malabo (UA, 2014), Actes additionnels CEDEAO (2010–2011), Directives UEMOA (télécoms et paiements BCEAO) et Accord de Bangui (OAPI).\n• **Étage national** : lois ivoiriennes spécialisées (2013-450, 2013-451, 2013-546, 2016-555, 2024-352) et décrets/arrêtés d’application (ARTCI, BURIDA).\n• **Exemple pratique** : une fintech déployée en Côte d’Ivoire, au Sénégal et au Bénin s’appuie sur l’harmonisation UEMOA/CEDEAO pour déployer un modèle juridique cohérent.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture juridique multiniveau du numérique en Côte d’Ivoire',
              caption: 'Des traités mondiaux jusqu’aux textes nationaux et décisions de régulation.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: 'Mondial',
                    title: 'Traités internationaux',
                    subtitle: 'Convention de Budapest (2001) · Convention 108 · OMPI',
                    color: 'violet',
                  },
                  {
                    badge: 'Africain',
                    title: 'Union Africaine (UA)',
                    subtitle: 'Convention de Malabo (2014) : cybersécurité & données personnelles',
                    color: 'blue',
                  },
                  {
                    badge: 'Régional',
                    title: 'CEDEAO · UEMOA · OAPI',
                    subtitle: 'Actes additionnels CEDEAO (2010/2011) · Directives UEMOA/BCEAO · Bangui',
                    color: 'green',
                  },
                  {
                    badge: 'National',
                    title: 'Lois ivoiriennes & Régulateurs',
                    subtitle: 'Lois 2013-450/451/546 · Loi 2016-555 · Loi 2024-352 · ARTCI / PLCC / BURIDA',
                    color: 'orange',
                  },
                ],
              },
            },
            keyRule:
              'L’architecture juridique du numérique est emboîtée : les normes internationales et CEDEAO/UEMOA inspirent et harmonisent les lois nationales ivoiriennes.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle est la principale raison d’être de l’harmonisation juridique du numérique au sein de la CEDEAO et de l’UEMOA ?',
              options: [
                'Supprimer les lois nationales de tous les États membres',
                'Éviter les divergences juridiques entre pays voisins, faciliter la coopération judiciaire et sécuriser un marché numérique régional intégré',
                'Interdire aux entreprises d’opérer dans plus d’un pays',
                'Remplacer Internet par un réseau postal classique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’harmonisation régionale CEDEAO/UEMOA garantit des règles compatibles (données, e-commerce, télécoms, cybercriminalité) indispensables face à des flux par nature transfrontaliers.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Actes CEDEAO',
            stepTheme: 'Les 3 Actes additionnels piliers',
            stepTitle: 'Connaître les trois Actes additionnels de la CEDEAO sur le numérique',
            paragraphText:
              'Entre 2010 et 2011, la CEDEAO a adopté trois Actes additionnels majeurs qui constituent la colonne vertébrale du droit numérique en Afrique de l’Ouest.\n• **Acte additionnel A/SA.1/01/10 (16 février 2010)** : protection des données à caractère personnel (transposé en Côte d’Ivoire par la Loi n° 2013-450).\n• **Acte additionnel A/SA.2/01/10 (16 février 2010)** : transactions électroniques (transposé par la Loi n° 2013-546).\n• **Acte additionnel A/SA.1/08/11 (19 août 2011)** : lutte contre la cybercriminalité (transposé par la Loi n° 2013-451).\n• **Force juridique** : ces actes s’imposent aux États membres et créent un socle commun de confiance numérique dans toute la sous-région.',
            keyRule:
              'Trois Actes additionnels CEDEAO (2010–2011) = Données personnelles + Transactions électroniques + Cybercriminalité → transposés en Côte d’Ivoire par les trois lois de 2013.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quels sont les trois domaines couverts par les Actes additionnels fondateurs de la CEDEAO (2010–2011) transposés en Côte d’Ivoire en 2013 ?',
              options: [
                'Pêche maritime, aviation civile et droit minier',
                'Protection des données personnelles, transactions électroniques et lutte contre la cybercriminalité',
                'Droit agricole, urbanisme et sport professionnel',
                'Uniquement la fiscalité douanière papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CEDEAO a bâti son socle numérique sur trois Actes additionnels dédiés aux données personnelles, aux transactions électroniques et à la lutte contre la cybercriminalité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Directives UEMOA',
            stepTheme: 'Télécoms et paiements numériques',
            stepTitle: 'Articuler le rôle des directives UEMOA et de la BCEAO',
            paragraphText:
              'Au sein des huit États partageant le franc CFA, l’UEMOA joue un rôle déterminant dans l’intégration des infrastructures numériques et des services financiers digitaux.\n• **Directives télécoms/TIC de l’UEMOA** : harmonisent les régimes d’autorisation des opérateurs, l’interconnexion transfrontalière, la tarification du roaming (itinérance régionale) et le service universel.\n• **Réglementation financière BCEAO** : encadre l’émission de monnaie électronique (Mobile Money), les fintechs de paiement, la lutte contre le blanchiment de capitaux (LBC/FT) et l’interopérabilité des paiements.\n• **Exemple pratique** : les accords de suppression des surcoûts d’itinérance (free roaming) entre pays de la sous-région reposent sur cette coordination régionale.',
            keyRule:
              'UEMOA = harmonisation des télécoms et de l’espace économique commun ; BCEAO = régulation de la monnaie électronique et des paiements numériques.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Dans l’espace UEMOA, quelle institution encadre spécifiquement l’émission de monnaie électronique (Mobile Money) et la sécurité des systèmes de paiement numériques ?',
              options: [
                'Le BURIDA',
                'La BCEAO (Banque Centrale des États de l’Afrique de l’Ouest)',
                'L’OAPI',
                'Le Centre d’arbitrage de l’OMPI',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La BCEAO régule les établissements émetteurs de monnaie électronique, les prestataires de paiement et l’interopérabilité financière dans les huit États de l’UEMOA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Convention de Budapest',
            stepTheme: 'Traité international cybercriminalité',
            stepTitle: 'Maîtriser les 3 piliers de la Convention de Budapest (2001)',
            paragraphText:
              'Adoptée le 23 novembre 2001 à Budapest sous l’égide du Conseil de l’Europe et ouverte aux États du monde entier, la Convention STE n° 185 est la référence mondiale contre la cybercriminalité.\n• **Pilier 1 — Droit pénal matériel** : harmonise les incriminations (accès illégal, interception illégale, atteinte à l’intégrité des données/systèmes, abus de dispositifs, fraude et falsification informatiques, pédopornographie, atteintes au droit d’auteur).\n• **Pilier 2 — Droit procédural** : dote les enquêteurs d’outils adaptés aux preuves volatiles (conservation rapide des données, perquisition/saisie de systèmes, injonction de produire, collecte en temps réel).\n• **Pilier 3 — Coopération internationale** : organise l’extradition, l’entraide pénale rapide et un réseau de points de contact disponible 24h/24 et 7j/7.',
            keyRule:
              'Convention de Budapest (2001) = 3 piliers indissociables : Incriminations communes + Pouvoirs d’enquête numérique + Coopération internationale 24/7.',
            konanTip:
              'La Convention de Budapest rappelle aussi l’équilibre obligatoire entre efficacité répressive et respect des droits humains fondamentaux (vie privée, liberté d’expression).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Quels sont les trois grands piliers structurant la Convention de Budapest sur la cybercriminalité du 23 novembre 2001 ?',
              options: [
                'Harmonisation des incriminations pénales, pouvoirs procéduraux d’enquête numérique et coopération internationale rapide (réseau 24/7)',
                'Gestion des fréquences 5G, fiscalité immobilière et droit maritime',
                'Dépôt des brevets, gestion des droits musicaux et vente de smartphones',
                'Suppression des tribunaux nationaux et gratuité totale d’Internet',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Convention de Budapest combine harmonisation des infractions informatiques, procédures d’investigation adaptées aux preuves électroniques et entraide pénale internationale 24/7.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Convention de Malabo',
            stepTheme: 'Cadre de l’Union africaine',
            stepTitle: 'Situer la Convention de Malabo (2014) dans le paysage africain',
            paragraphText:
              'Adoptée le 27 juin 2014 à Malabo par les chefs d’État de l’Union africaine, la Convention de l’UA sur la cybersécurité et la protection des données à caractère personnel offre une vision globale propre au continent.\n• **Trois chapitres intégrés** : (1) transactions électroniques et e-commerce ; (2) protection des données personnelles et autorités indépendantes ; (3) promotion de la cybersécurité, politiques nationales (CERT/CSIRT) et lutte contre la cybercriminalité.\n• **Spécificité africaine** : contrairement à Budapest qui ne traite que de cybercriminalité, Malabo rassemble dans un traité unique la confiance économique, la vie privée et la cyberdéfense.\n• **Exemple pratique** : la création de centres nationaux de réponse aux incidents informatiques (CI-CERT en Côte d’Ivoire) répond directement aux standards de Malabo.',
            keyRule:
              'Convention de Malabo (UA, 2014) = traité africain global couvrant à la fois transactions électroniques, données personnelles et cybersécurité (CERT).',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle particularité distingue la Convention de Malabo (Union africaine, 2014) de la Convention de Budapest (2001) ?',
              options: [
                'Malabo traite dans un seul texte des transactions électroniques, de la protection des données personnelles et de la cybersécurité/cybercriminalité, alors que Budapest porte spécifiquement sur la cybercriminalité',
                'Malabo interdit le commerce électronique en Afrique',
                'Budapest concerne uniquement le droit d’auteur musical',
                'Malabo remplace le Code civil de tous les pays européens',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La Convention de Malabo adopte une approche globale réunissant e-commerce, protection des données et cybersécurité/cybercriminalité au niveau de l’Union africaine.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Coopération judiciaire',
            stepTheme: 'Double incrimination & entraide',
            stepTitle: 'Comprendre la coopération judiciaire internationale en matière cyber',
            paragraphText:
              'Lorsqu’un pirate attaque une entreprise ivoirienne depuis l’étranger, la police nationale ne peut pas mener une perquisition physique dans un autre État souverain sans coopération.\n• **Entraide pénale internationale** : commissions rogatoires internationales et demandes de conservation urgente des données de trafic/abonné auprès des autorités étrangères (via les points de contact 24/7 et Interpol).\n• **Principe de double incrimination** : pour extrader un suspect ou exécuter certaines mesures coercitives, le fait poursuivi doit généralement être reconnu comme infraction pénale dans les deux États — d’où l’importance vitale de l’harmonisation CEDEAO/Budapest.\n• **Exemple pratique** : la PLCC collabore avec Interpol et des unités cyber étrangères pour démanteler des réseaux internationaux d’escroquerie en ligne.',
            keyRule:
              'Face à une cyberattaque transfrontalière, la rapidité de la conservation des traces numériques (logs) via les réseaux de coopération 24/7 est décisive avant leur effacement.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi le principe de « double incrimination » rend-il indispensable l’harmonisation des lois sur la cybercriminalité entre États ?',
              options: [
                'Parce qu’il impose de juger deux fois la même personne dans le même pays',
                'Parce que la coopération pénale internationale (extradition, saisie) exige généralement que l’acte cybercriminel soit qualifié d’infraction dans les deux États concernés',
                'Parce qu’il double automatiquement le tarif des connexions Internet',
                'Parce qu’il supprime le rôle des juges nationaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans incriminations harmonisées (double incrimination), un cybercriminel pourrait se réfugier dans un pays ne réprimant pas l’acte et échapper à l’extradition et aux poursuites.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch4_p2',
        order: 2,
        title: 'Droit pénal numérique, preuve électronique et perquisition informatique',
        summary:
          'Maîtriser la classification des infractions du Code pénal ivoirien (crimes, délits, contraventions), les infractions cyber de la Loi n° 2013-451, la collecte légale de la preuve électronique (chaîne de conservation) et le régime de la perquisition numérique.',
        conceptExplanation:
          'Le droit pénal numérique combine les principes fondamentaux du Code pénal ivoirien (Loi n° 2019-574 du 26 juin 2019, modifiée par la Loi n° 2021-893 du 21 décembre 2021) et les incriminations spécialisées de la Loi n° 2013-451 relative à la lutte contre la cybercriminalité.\n\n1) Classification tripartite des infractions (Article 3 du Code pénal) : (a) Contravention : peine privative de liberté ≤ 2 mois et/ou amende ≤ 360 000 FCFA ; (b) Délit : peine d’emprisonnement > 2 mois et ≤ 10 ans, et/ou amende > 360 000 FCFA ; (c) Crime : peine privative de liberté perpétuelle ou temporaire > 10 ans. La majorité des cyberinfractions (accès frauduleux, entrave, falsification de données, escroquerie informatique, usurpation d’identité numérique) sont des DÉLITS, mais certaines atteintes graves (sûreté de l’État, cyberterrorisme, réseaux criminels aggravés) peuvent recevoir une qualification criminelle.\n2) Spécificité de la preuve électronique en matière pénale : les traces numériques (adresses IP, journaux serveur/logs, métadonnées, copies de disques durs) sont volatiles, immatérielles et facilement altérables. Pour être recevable devant le juge pénal, la preuve doit être recueillie LOYALEMENT et LÉGALEMENT, puis préservée par une chaîne de conservation rigoureuse (copie bit-à-bit forensique + empreinte cryptographique SHA-256 + scellé).\n3) Perquisition numérique et réquisitions : sous l’autorité du Procureur ou du juge d’instruction, les officiers de police judiciaire spécialisés (PLCC) peuvent perquisitionner des systèmes informatiques, saisir des supports ou copier des données à distance, et réquisitionner les opérateurs/hébergeurs pour obtenir les données de connexion.',
        formulas: [
          {
            name: 'Classification tripartite des infractions (Art. 3 Code pénal ivoirien)',
            formula: 'Contravention (≤ 2 mois / ≤ 360 000 FCFA)  <  Délit (> 2 mois à 10 ans / > 360 000 FCFA)  <  Crime (> 10 ans ou perpétuité)',
            note: 'La qualification dépend du MAXIMUM de la peine encourue prévue par la loi (Art. 3 al. final).',
          },
          {
            name: 'Recevabilité d’une preuve électronique pénale',
            formula: 'Preuve numérique recevable = Collecte légale & loyale  ∧  Intégrité prouvée (Hash)  ∧  Chaîne de conservation traçable',
            note: 'Toute manipulation non tracée sur un ordinateur saisi risque d’entraîner la nullité de la preuve.',
          },
        ],
        keyRule:
          'Art. 3 Code pénal : Contravention ≤ 2 mois / 360 000 FCFA ; Délit ≤ 10 ans ; Crime > 10 ans. En forensique numérique, on travaille toujours sur une COPIE scellée vérifiée par empreinte (hash), jamais sur l’original.',
        workedExample: {
          title: 'Qualifier une cyberattaque contre une entreprise et sécuriser la preuve électronique',
          statement:
            'Un ancien salarié pénètre sans autorisation sur le serveur comptable d’une PME d’Abidjan (accès frauduleux), efface des factures et détourne 12 millions FCFA. L’informaticien de la PME veut fouiller directement le serveur et installer des logiciels pour « voir ce qui s’est passé ».',
          methodSteps: [
            '1. Qualifier les infractions (Loi n° 2013-451) : accès frauduleux à un système d’information, suppression/modification frauduleuse de données et fraude informatique (délits punis d’emprisonnement et de fortes amendes).',
            '2. Alerter sur l’erreur de preuve : manipuler directement le serveur en installant des outils écrase les logs et altère les horodatages, fragilisant la preuve devant le juge.',
            '3. Appliquer la bonne procédure : isoler le système, préserver les logs réseau, déposer plainte auprès de la PLCC / du Procureur afin qu’une saisie/copie forensique scellée (avec empreinte cryptographique) soit réalisée légalement.',
          ],
          conclusion:
            'Une réponse à incident disciplinée préserve l’intégrité de la preuve électronique et maximise les chances de condamnation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Code pénal CI',
            stepTheme: 'Crimes, délits, contraventions',
            stepTitle: 'Classer les infractions pénales selon l’article 3 du Code pénal ivoirien',
            paragraphText:
              'Le droit pénal numérique s’appuie sur l’architecture générale du Code pénal ivoirien (Loi n° 2019-574 modifiée par la Loi n° 2021-893) qui classe toute infraction selon la gravité de sa peine maximale.\n• **Contravention** : peine privative de liberté ≤ 2 mois et amende ≤ 360 000 FCFA (ou l’une des deux).\n• **Délit** : peine privative de liberté supérieure à 2 mois et inférieure ou égale à 10 ans, et/ou amende supérieure à 360 000 FCFA (catégorie de la plupart des cyberinfractions).\n• **Crime** : peine privative de liberté perpétuelle ou temporaire supérieure à 10 ans.\n• **Exemple pratique** : une fraude informatique passible de 5 ans d’emprisonnement et 10 millions FCFA d’amende est juridiquement un DÉLIT jugé par le tribunal correctionnel.',
            formula: {
              name: 'Seuils légaux de l’article 3 du Code pénal (Loi n° 2021-893)',
              formula: 'Contravention : ≤ 2 mois & ≤ 360 000 F  |  Délit : ]2 mois ; 10 ans]  |  Crime : > 10 ans ou perpétuité',
              note: 'Les peines principales peuvent être assorties de peines complémentaires (confiscation du matériel informatique, interdiction professionnelle).',
            },
            keyRule:
              'Pour qualifier une infraction en contravention, délit ou crime, on regarde toujours le MAXIMUM de la peine encourue fixé par la loi.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Selon l’article 3 du Code pénal ivoirien, comment qualifie-t-on une infraction informatique passible au maximum de 5 ans d’emprisonnement et de 5 000 000 FCFA d’amende ?',
              options: [
                'Une simple contravention',
                'Un délit',
                'Un crime',
                'Une faute purement civile sans sanction pénale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La peine maximale encourue (5 ans et 5 000 000 FCFA) est supérieure à 2 mois / 360 000 FCFA et inférieure ou égale à 10 ans : il s’agit donc d’un délit.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Infractions cyber',
            stepTheme: 'Atteintes aux systèmes vs Contenus',
            stepTitle: 'Distinguer infractions contre les systèmes et infractions facilitées par les TIC',
            paragraphText:
              'La Loi n° 2013-451 distingue deux grandes familles d’infractions numériques selon le rôle joué par l’outil informatique.\n• **Infractions spécifiques aux TIC (cible = le système)** : accès ou maintien frauduleux dans un système d’information, entrave au fonctionnement (attaque DDoS, rançongiciel), interception illégale de données, atteinte à l’intégrité/suppression de données.\n• **Infractions classiques commises via les TIC (moyen = Internet)** : escroquerie en ligne (broutage, phishing), usurpation d’identité numérique, diffamation/injure publique, atteinte à l’intimité de la vie privée (diffusion non consentie d’images intimes), pédopornographie.\n• **Exemple pratique** : déployer un rançongiciel vise le système ; se faire passer pour un directeur sur WhatsApp pour extorquer un virement est une escroquerie/usurpation facilitée par les TIC.',
            keyRule:
              'Cybercriminalité = (1) Infractions propres aux systèmes informatiques (STAD) + (2) Infractions de droit commun commises au moyen d’un réseau numérique.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Parmi les actes suivants, lequel relève d’une atteinte directe à un système d’information (infraction spécifique aux TIC) plutôt que d’une infraction classique commise en ligne ?',
              options: [
                'Lancer une attaque par déni de service (DDoS) pour paralyser les serveurs d’une banque',
                'Publier un commentaire injurieux sur un forum public',
                'Vendre un produit contrefait via une petite annonce',
                'Envoyer une lettre anonyme par la poste',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’attaque DDoS constitue une entrave directe au fonctionnement d’un système d’information, c’est-à-dire une infraction spécifique aux TIC.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Preuve électronique',
            stepTheme: 'Forensique et chaîne de conservation',
            stepTitle: 'Préserver l’intégrité de la preuve électronique (chaîne de conservation)',
            paragraphText:
              'Une preuve numérique mal collectée perd toute valeur devant un tribunal car la défense contestera facilement son authenticité.\n• **Volatilité des preuves** : la mémoire vive (RAM), les connexions réseau actives et les journaux (logs) s’effacent rapidement lors d’un redémarrage ou d’une rotation automatique.\n• **Chaîne de conservation (Chain of Custody)** : documentation stricte de qui a saisi la preuve, quand, comment elle a été dupliquée (image bit-à-bit sur support en lecture seule), scellée par empreinte cryptographique (SHA-256) et transmise au juge.\n• **Exemple pratique** : les experts de la PLCC calculent le hash SHA-256 du disque dur saisi au moment de la perquisition ; au procès, le même hash prouve qu’aucun fichier n’a été altéré.',
            keyRule:
              'Règle d’or forensique : ne jamais modifier le support original ; travailler sur une copie bit-à-bit vérifiée par empreinte cryptographique et consigner chaque transfert.',
            konanTip:
              'Une simple capture d’écran faite par un particulier peut être contestée ; pour des contenus web ou messages menaçants, un constat de commissaire de justice ou une réquisition PLCC offre une force probante supérieure.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'À quoi sert le calcul d’une empreinte cryptographique (hash SHA-256) lors de la saisie d’un ordinateur ou d’un serveur dans une enquête cyber ?',
              options: [
                'À effacer automatiquement les fichiers compromettants',
                'À prouver de manière mathématique que les données numériques copiées n’ont subi aucune altération entre la saisie et le procès',
                'À accélérer la connexion Wi-Fi du commissariat',
                'À convertir un délit en contravention',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’empreinte cryptographique garantit l’intégrité de la preuve numérique tout au long de la chaîne de conservation : la moindre modification d’un bit changerait complètement le hash.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Perquisition numérique',
            stepTheme: 'Pouvoirs d’enquête et garanties',
            stepTitle: 'Encadrer la perquisition numérique et les réquisitions de données',
            paragraphText:
              'Contrairement à une perquisition classique dans un appartement, une perquisition informatique peut porter sur des données stockées dans le cloud à des milliers de kilomètres.\n• **Perquisition de système informatique** : réalisée par des officiers de police judiciaire habilités (PLCC) sous le contrôle du Procureur de la République ou du juge d’instruction, permettant de saisir les matériels ou de copier sur place les données pertinentes, y compris accessibles depuis le système visité.\n• **Réquisition judiciaire** : ordre légal adressé aux opérateurs télécoms, FAI, banques ou hébergeurs pour communiquer les données d’identification d’un abonné, les adresses IP attribuées ou les journaux de connexion.\n• **Garanties légales** : respect strict de la légalité, de la proportionnalité, du secret professionnel protégé et des droits de la défense.',
            keyRule:
              'La perquisition numérique et la réquisition des opérateurs/FAI obéissent au contrôle de l’autorité judiciaire (Procureur / juge) afin de concilier efficacité et libertés.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Comment les enquêteurs de la PLCC identifient-ils légalement l’abonné qui utilisait une adresse IP précise au moment d’une cyberattaque ?',
              options: [
                'En piratant secrètement les serveurs de l’opérateur télécom sans mandat',
                'En adressant une réquisition judiciaire légale à l’opérateur télécom ou au fournisseur d’accès Internet sous contrôle du Procureur/juge',
                'En publiant un sondage sur les réseaux sociaux',
                'En demandant au BURIDA l’adresse postale du suspect',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les opérateurs et FAI sont tenus de conserver certaines données techniques de connexion et de les communiquer uniquement sur réquisition judiciaire régulière.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Loyauté de la preuve',
            stepTheme: 'Limites des enquêtes privées',
            stepTitle: 'Respecter la légalité et la loyauté dans la recherche de preuve',
            paragraphText:
              'Une victime de cyberattaque ou un employeur soupçonnant un vol de données peut être tenté de « contre-pirater » le suspect ou d’installer un logiciel espion caché.\n• **Interdiction du « hack-back » privé** : se faire justice soi-même en piratant le système de l’attaquant constitue une nouvelle infraction d’accès frauduleux (Loi n° 2013-451) et rend la preuve illégale.\n• **Surveillance des salariés** : un employeur peut contrôler l’usage professionnel des outils informatiques uniquement s’il a préalablement informé les salariés (charte informatique), respecté la proportionnalité et déclaré les dispositifs à l’ARTCI.\n• **Exemple pratique** : installer un enregistreur de frappe (keylogger) clandestin à l’insu des employés expose l’entreprise à des poursuites pénales et à l’irrecevabilité des preuves.',
            keyRule:
              'On ne combat pas une infraction numérique par une autre infraction : le contre-piratage privé (hack-back) et l’espionnage clandestin des salariés sont illégaux.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Une entreprise victime d’un vol de fichiers décide, sans saisir la police, de pirater l’ordinateur personnel de son ancien salarié pour récupérer les preuves. Quelle est la conséquence juridique de cet acte ?',
              options: [
                'C’est une légitime défense informatique pleinement autorisée',
                'L’entreprise commet à son tour une infraction d’accès frauduleux et risque l’annulation/rejet de cette preuve déloyale',
                'Cela oblige automatiquement l’ARTCI à verser une prime à l’entreprise',
                'Cela efface la dette fiscale de l’entreprise',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le « hack-back » privé est illégal : seul l’État (autorité judiciaire et PLCC) dispose des pouvoirs coercitifs d’investigation et de perquisition numérique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Peines complémentaires',
            stepTheme: 'Mesures de sûreté et confiscation',
            stepTitle: 'Articuler peines principales, complémentaires et réparation civile',
            paragraphText:
              'En vertu du Code pénal (articles 6 à 10) et de la Loi n° 2013-451, la condamnation d’un cybercriminel ne se limite pas à la prison ou à l’amende.\n• **Peines principales** : emprisonnement et amende prononcés par le tribunal.\n• **Peines complémentaires** : confiscation définitive du matériel informatique ayant servi à commettre l’infraction (ordinateurs, smartphones, serveurs, fonds détournés), interdiction d’exercer une profession liée à l’informatique ou à la finance, publication du jugement.\n• **Action civile de la victime** : parallèlement au procès pénal, l’entreprise ou le citoyen victime se constitue partie civile pour obtenir la restitution des fonds et des dommages-intérêts.',
            keyRule:
              'Condamnation cyber = Peine principale (prison/amende) + Peines complémentaires (confiscation du matériel, interdiction professionnelle) + Dommages-intérêts civils.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Outre l’emprisonnement et l’amende (peines principales), quelle peine complémentaire le juge pénal peut-il prononcer contre l’auteur d’une cyberfraude ?',
              options: [
                'La confiscation du matériel informatique ayant servi à l’infraction et l’interdiction d’exercer certaines activités professionnelles',
                'L’attribution d’une licence 5G gratuite',
                'La suppression de la personnalité juridique de la victime',
                'L’obligation de devenir Correspondant DPO',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les articles 7 à 10 du Code pénal et la Loi 2013-451 prévoient des peines complémentaires dissuasives, notamment la confiscation des équipements et des produits de l’infraction.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch4_p3',
        order: 3,
        title: 'Régulation des plateformes, modération des contenus illicites et gouvernance algorithmique',
        summary:
          'Maîtriser le régime juridique des plateformes numériques (intermédiaires techniques, hébergeurs, éditeurs), la procédure de notification et retrait prompt des contenus illicites, la lutte contre la désinformation/haine en ligne et la transparence algorithmique.',
        conceptExplanation:
          'Les grandes plateformes numériques (réseaux sociaux, places de marché, moteurs de recherche, plateformes vidéo) structurent aujourd’hui le débat public et le commerce. Leur régulation cherche un équilibre délicat entre liberté d’expression, innovation économique et protection de l’ordre public.\n\n1) Statut et responsabilité des intermédiaires : un pur HÉBERGEUR (rôle technique neutre et passif) bénéficie d’une responsabilité allégée — pas d’obligation générale de surveillance a priori, mais obligation d’agir PROMPTEMENT pour retirer ou bloquer tout contenu manifestement illicite dès qu’il lui est notifié. Dès qu’une plateforme exerce un rôle ACTIF (sélection éditoriale, promotion ciblée, fixation des règles commerciales de présentation), elle bascule vers le régime plus strict d’ÉDITEUR pleinement responsable.\n2) Contenus manifestement illicites : incitation à la haine ou à la violence, apologie du terrorisme, pédopornographie, diffusion non consentie d’images intimes, escroquerie manifeste, contrefaçon avérée et fausses nouvelles (désinformation) troublant gravement l’ordre public.\n3) Gouvernance et modération : la régulation moderne impose aux plateformes des mécanismes accessibles de signalement, la conservation des données d’identification des auteurs pour la justice, la transparence sur les algorithmes de recommandation/modération, et la coopération avec les autorités nationales (ARTCI, PLCC, Haute Autorité de la Communication Audiovisuelle / HACA).',
        formulas: [
          {
            name: 'Mécanisme « Notice and Takedown » (Notification et Retrait)',
            formula: 'Absence de contrôle a priori (Hébergeur)  +  Notification précise de contenu manifestement illicite  ⇒  Retrait prompt obligatoire (sinon responsabilité engagée)',
            note: 'Le maintien délibéré d’un contenu manifestement illicite après notification fait perdre à l’hébergeur son immunité.',
          },
        ],
        keyRule:
          'Une plateforme passive (hébergeur) n’a pas d’obligation générale de surveillance a priori, mais doit retirer promptement tout contenu manifestement illicite notifié et coopérer avec la justice.',
        workedExample: {
          title: 'Gérer une campagne de diffamation et de faux comptes sur un réseau social',
          statement:
            'Des faux comptes diffusent sur un réseau social des vidéos truquées (deepfakes) appelant à la violence contre une personnalité et proposant de faux investissements financiers en Côte d’Ivoire.',
          methodSteps: [
            '1. Constater et figer la preuve : faire réaliser des captures qualifiées (URL exactes, horodatage, identifiants de comptes, constat de commissaire de justice) avant que les vidéos ne disparaissent.',
            '2. Activer la procédure « Notice and Takedown » : notifier officiellement à la plateforme les URL précises et le caractère manifestement illicite (incitation à la violence, usurpation/escroquerie) pour exiger le retrait prompt.',
            '3. Saisir la PLCC et le Procureur : demander une réquisition judiciaire afin que la plateforme conserve et transmette les données techniques d’identification (IP, téléphone, e-mail) permettant de poursuivre les auteurs.',
          ],
          conclusion:
            'La combinaison signalement formalisé + conservation de preuve + réquisition PLCC permet à la fois de stopper la diffusion virale et d’identifier les auteurs réels.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Statut des plateformes',
            stepTheme: 'Rôle passif vs Rôle actif',
            stepTitle: 'Qualifier la responsabilité d’une plateforme selon son rôle actif ou passif',
            paragraphText:
              'Toutes les plateformes ne portent pas le même niveau de responsabilité juridique face aux contenus ou produits publiés par leurs utilisateurs.\n• **Rôle technique passif (Hébergeur)** : se limite au stockage et à la mise à disposition automatisée de contenus tiers sans les choisir ni les modifier → responsabilité allégée (pas de surveillance préalable obligatoire).\n• **Rôle actif (Éditeur / Place de marché active)** : sélectionne les contenus, optimise et met en avant certains produits, fixe les règles de présentation ou intervient éditorialement → responsabilité directe renforcée.\n• **Exemple pratique** : un prestataire de stockage cloud pur est hébergeur ; une plateforme qui sélectionne et promeut activement ses vendeurs et rédige les fiches produits exerce un rôle actif d’éditeur.',
            keyRule:
              'Le critère décisif devant le juge est concret : neutralité technique passive = hébergeur ; maîtrise éditoriale ou optimisation active = éditeur.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quel critère permet au juge de déterminer si une plateforme en ligne bénéficie du régime allégé d’hébergeur ou relève du régime plus strict d’éditeur ?',
              options: [
                'La couleur de son logo et le nombre d’employés',
                'Son rôle technique purement passif et neutre (hébergeur) par opposition à un rôle actif de contrôle, de sélection ou de mise en avant éditoriale (éditeur)',
                'Le fait qu’elle soit accessible sur smartphone',
                'Le prix de son nom de domaine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La jurisprudence distingue l’hébergeur neutre/passif de l’éditeur qui exerce une maîtrise active sur le choix, la présentation ou la promotion des contenus.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Notice & Takedown',
            stepTheme: 'Procédure de retrait prompt',
            stepTitle: 'Appliquer le mécanisme de notification et de retrait prompt des contenus illicites',
            paragraphText:
              'L’immunité relative de l’hébergeur disparaît instantanément dès qu’il est officiellement averti de la présence d’un contenu manifestement illicite sur ses serveurs.\n• **Notification valable** : doit identifier le déclarant, localiser précisément le contenu (URL exacte), décrire les faits et indiquer les motifs juridiques pour lesquels le contenu est manifestement illicite.\n• **Obligation d’agir promptement** : dès réception d’une notification précise (ou d’une injonction judiciaire), l’hébergeur doit retirer le contenu ou en bloquer l’accès sans délai, sous peine d’engager sa propre responsabilité civile et pénale.\n• **Cycle complet de traitement** : détection, signalement, retrait/gel des traces, enquête judiciaire et prévention.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Cycle de gouvernance d’un contenu illicite ou cyber-incident',
              caption: 'Articulation entre usagers, plateformes, PLCC et régulateurs (ARTCI).',
              cycle: {
                centerLabel: 'Confiance Numérique',
                centerSublabel: 'Régulation & Justice',
                nodes: [
                  {
                    title: '1. Détection',
                    subtitle: 'Veille usagers, victimes ou filtres',
                    color: 'blue',
                  },
                  {
                    title: '2. Notification',
                    subtitle: 'Signalement précis (URL + motif)',
                    color: 'violet',
                  },
                  {
                    title: '3. Retrait & Gel',
                    subtitle: 'Action prompte + conservation logs',
                    color: 'orange',
                  },
                  {
                    title: '4. Enquête PLCC',
                    subtitle: 'Réquisition & identification auteur',
                    color: 'green',
                  },
                  {
                    title: '5. Sanction & Prévention',
                    subtitle: 'Justice, ARTCI & chartes internes',
                    color: 'slate',
                  },
                ],
              },
            },
            keyRule:
              'Un hébergeur qui refuse de retirer promptement un contenu manifestement illicite dûment notifié perd sa protection légale et devient co-responsable.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'À partir de quel moment un hébergeur technique engage-t-il sa responsabilité à raison d’un contenu manifestement illicite publié par un utilisateur ?',
              options: [
                'Dès la seconde de publication, même s’il ignore totalement l’existence du contenu',
                'Dès lors qu’il a eu connaissance effective du contenu manifestement illicite (par notification précise) et n’a pas agi promptement pour le retirer ou le bloquer',
                'Jamais, même après une décision de justice définitive',
                'Uniquement si le contenu dépasse 100 mégaoctets',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’hébergeur n’est pas tenu d’une surveillance générale a priori, mais sa responsabilité est engagée s’il tarde à retirer un contenu manifestement illicite après en avoir reçu connaissance effective.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Contenus illicites',
            stepTheme: 'Liberté d’expression vs Infractions',
            stepTitle: 'Tracer la frontière entre liberté d’expression et abus punissables en ligne',
            paragraphText:
              'Internet est un espace majeur de liberté d’expression, mais cette liberté n’est ni absolue ni synonyme d’impunité.\n• **Ce qui reste protégé** : le débat d’idées, la critique politique ou commerciale loyale, l’humour et l’information d’intérêt général.\n• **Ce qui est pénalement réprimé** : l’incitation à la haine ethnique/religieuse ou à la violence, la diffamation (allégation d’un fait faux portant atteinte à l’honneur), l’injure publique, la diffusion de fausses nouvelles (désinformation) troublant l’ordre public et l’atteinte à la vie privée (revenge porn).\n• **Exemple pratique** : partager volontairement une fausse rumeur alarmiste ou une photo intime volée sur WhatsApp expose aussi bien le créateur initial que celui qui la rediffuse.',
            keyRule:
              'Liberté d’expression ≠ impunité : relayer (partager/transférer) un contenu diffamatoire, haineux ou portant atteinte à la vie privée engage la responsabilité pénale de son auteur.',
            konanTip:
              'Sur les réseaux sociaux et messageries (WhatsApp, TikTok, Facebook), le « simple transfert » d’une vidéo diffamatoire ou intime volée peut suffire à caractériser une infraction de diffusion.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Un internaute reçoit sur WhatsApp la photo intime volée d’une camarade et la transfère dans trois groupes étudiants en affirmant qu’il n’en est pas l’auteur initial. Encourt-il une responsabilité pénale ?',
              options: [
                'Non, car seul le premier auteur de la photo est punissable',
                'Oui, car la diffusion ou rediffusion non consentie d’images portant atteinte à l’intimité de la vie privée constitue une infraction pénale',
                'Non, car WhatsApp est un espace totalement hors-la-loi',
                'Uniquement si les groupes comptent plus de 10 000 membres',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loi réprime non seulement la captation illicite mais aussi toute diffusion ou transmission non consentie d’images portant atteinte à la vie privée ou à la dignité.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Modération & Deepfakes',
            stepTheme: 'Désinformation et IA malveillante',
            stepTitle: 'Combattre la désinformation, les deepfakes et l’usurpation en ligne',
            paragraphText:
              'Les outils d’IA générative permettent aujourd’hui de fabriquer des vidéos ou voix synthétiques ultra-réalistes (« deepfakes ») usurpant l’identité de dirigeants, journalistes ou citoyens.\n• **Qualifications juridiques** : selon l’usage, un deepfake malveillant constitue une usurpation d’identité numérique (Loi 2013-451), une atteinte au droit à l’image et à la voix, une escroquerie (faux appel à investissement) ou une diffusion de fausses nouvelles.\n• **Obligations des plateformes** : étiquetage des contenus synthétiques, systèmes de signalement accéléré, coopération avec les autorités de régulation et blocage des campagnes coordonnées de faux comptes.\n• **Exemple pratique** : créer un faux clone vocal d’un directeur financier pour ordonner un virement bancaire constitue une escroquerie informatique aggravée.',
            keyRule:
              'Un deepfake utilisé pour tromper, nuire ou extorquer cumule atteinte au droit à l’image/voix, usurpation d’identité numérique et escroquerie.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Un fraudeur utilise un logiciel d’IA pour cloner la voix et le visage d’un banquier dans une vidéo incitant les citoyens à envoyer de l’argent sur un compte Mobile Money frauduleux. Quelles qualifications juridiques s’appliquent ?',
              options: [
                'Une œuvre parodique protégée par le droit d’auteur',
                'Une usurpation d’identité numérique, une atteinte au droit à l’image et une escroquerie informatique pénalement réprimées',
                'Une pratique commerciale loyale',
                'Une simple erreur de formatage informatique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’utilisation d’un deepfake à des fins de tromperie financière réunit l’usurpation d’identité numérique, l’atteinte à l’image/voix et l’escroquerie informatique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Gouvernance algorithmique',
            stepTheme: 'Transparence et biais',
            stepTitle: 'Exiger la transparence des algorithmes de recommandation et de classement',
            paragraphText:
              'Les grandes plateformes ne se contentent plus d’héberger : leurs algorithmes décident quels produits apparaissent en premier, quelles informations deviennent virales et quels comptes sont suspendus.\n• **Enjeux de loyauté** : les moteurs de recherche et places de marché doivent informer clairement les utilisateurs des principaux critères de classement et signaler les résultats sponsorisés (payants).\n• **Prévention des biais et modération équitable** : toute décision automatisée de suspension de compte ou de démonétisation doit être motivée et susceptible de recours humain.\n• **Exemple pratique** : une place de marché qui favorise secrètement ses propres produits au détriment de vendeurs locaux mieux notés s’expose à des sanctions pour pratique anticoncurrentielle et déloyale.',
            keyRule:
              'La régulation contemporaine des plateformes impose la loyauté des classements, l’affichage clair des contenus sponsorisés et un droit de recours face aux décisions algorithmiques.',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle exigence de loyauté s’impose de plus en plus aux grandes plateformes utilisant des algorithmes de classement et de modération ?',
              options: [
                'Rendre secret tout lien commercial sponsorisé',
                'Informer clairement les utilisateurs des critères de classement, signaler les résultats sponsorisés et offrir un recours en cas de suspension automatisée de compte',
                'Supprimer toute possibilité pour les utilisateurs de contester une erreur',
                'Favoriser uniquement les vendeurs étrangers',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loyauté des plateformes exige la transparence sur les contenus sponsorisés, la clarté des critères de classement et un recours effectif contre les erreurs de modération automatisée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Conformité globale',
            stepTheme: 'Checklist juridique d’une start-up',
            stepTitle: 'Bâtir la feuille de route de conformité numérique d’une entreprise en Côte d’Ivoire',
            paragraphText:
              'Pour lancer durablement une start-up ou une plateforme en Côte d’Ivoire, le juriste et le manager déploient une conformité intégrée couvrant les quatre piliers du droit du numérique.\n• **Pilier 1 — Données personnelles (Loi 2013-450)** : formalité ARTCI adaptée (déclaration/autorisation), consentement éclairé, sécurité by design, DPO si pertinent.\n• **Pilier 2 — Propriété intellectuelle (Loi 2016-555 & OAPI)** : dépôt de marque OAPI, domaine .ci, audit des licences Open Source (MIT vs GPL), preuve d’antériorité BURIDA.\n• **Pilier 3 — E-commerce & Contrats (Loi 2013-546)** : mentions légales, CGU/CGV, parcours double clic, droit de rétractation 7 jours, paiement sécurisé.\n• **Pilier 4 — Cybersécurité & Contenus (Loi 2013-451)** : charte informatique, procédure de retrait prompt, journalisation sécurisée et plan de réponse en lien avec la PLCC et le CI-CERT.',
            keyRule:
              'Conformité 360° en Côte d’Ivoire = ARTCI (données) + OAPI/BURIDA (PI) + Double clic/CGV (e-commerce) + Sécurité/PLCC (cybercriminalité).',
            konanTip:
              'Cette grille en 4 piliers est ton meilleur plan d’analyse pour résoudre n’importe quel cas pratique complet d’examen de Droit du Numérique !',
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Une start-up ivoirienne prépare le lancement de sa place de marché mobile. Quel ensemble de démarches couvre de manière complète les quatre piliers du droit du numérique ?',
              options: [
                'Uniquement créer un logo et ouvrir une page sur un réseau social',
                'Formalités ARTCI (données), dépôt marque OAPI / audit licences (PI), mentions légales/CGV/double clic (e-commerce) et mesures de cybersécurité/modération (Loi 2013-451)',
                'Uniquement acheter un serveur à l’étranger sans contrat',
                'Uniquement imprimer des brochures papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une conformité numérique complète articule protection des données (ARTCI), propriété intellectuelle (OAPI/BURIDA/licences), loyauté contractuelle e-commerce (Loi 2013-546) et cybersécurité (Loi 2013-451).',
            },
          },
        ],
      }),
    ],
  },
];
