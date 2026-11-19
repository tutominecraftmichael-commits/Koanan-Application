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
  // CHAPITRE 1 : RÉGIME APPROFONDI DE LA PROTECTION DES DONNÉES PERSONNELLES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch1',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Régime juridique approfondi de la protection des données personnelles (Loi 2013-450)',
    summary:
      "Acteurs juridiques du traitement (responsable, sous-traitant, correspondant/DPO — Arrêté n° 511), formalités préalables auprès de l'ARTCI (déclaration, autorisation, avis, dispenses — Décret 2015-79), les 10 droits de la personne concernée et les contrôles a priori et a posteriori de l'ARTCI.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: '2025-2026_L1 ENTD _SUPPORT DROIT DU NUMERIQUE (Dr YEO Ladji, ESATIC — Partie I)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch1_p1',
        order: 1,
        title: 'Acteurs du traitement, fondements juridiques et régimes de formalités préalables (ARTCI)',
        summary:
          "Identifier les 5 acteurs juridiques du traitement des données (dont le DPO et le sous-traitant) et distinguer avec rigueur les 4 régimes administratifs : déclaration préalable, autorisation préalable, demande d'avis et dispense.",
        conceptExplanation:
          "Dans le cours magistral de Droit du numérique (Dr YEO Ladji, 24h), la protection des données à caractère personnel (DCP) en Côte d'Ivoire repose sur la Loi n° 2013-450 du 19 juin 2013 — inspirée de la Convention 108 du Conseil de l'Europe (1981) et en résonance avec le RGPD européen (2018) — complétée par le Décret n° 2015-79 du 4 février 2015 (modalités de déclarations et autorisations) et l'Arrêté n° 511/MPTIC/CAB du 11 novembre 2014 (profil et conditions d'emploi du Correspondant à la protection / DPO).\n\n1) Les 5 acteurs juridiques d'un traitement de données :\n   - Personne concernée : personne physique dont les données sont traitées ;\n   - Responsable du traitement : entité (entreprise, administration) qui détermine les finalités et les moyens du traitement ;\n   - Sous-traitant : prestataire (hébergeur, agence) qui traite les données pour le compte du responsable ;\n   - Correspondant à la protection (Délégué / DPO) : veille en interne à la conformité du traitement ;\n   - Autorité de protection (ARTCI) : contrôle, autorise, sanctionne et sensibilise.\n\n2) Les régimes de formalités préalables auprès de l'ARTCI :\n   - Déclaration préalable (régime de droit commun) : s'applique à la majorité des traitements ordinaires et donne lieu à la délivrance d'un récépissé (sans dispenser du respect des principes légaux).\n   - Demande d'autorisation préalable (régime exceptionnel / données sensibles ou à risque) : obligatoire pour les données génétiques ou médicales (et recherche scientifique), les données biométriques, les condamnations pénales/mesures de sûreté, l'interconnexion de fichiers, les traitements d'intérêt public (historiques/statistiques/scientifiques) et les TRANSFERTS vers des pays tiers.\n   - Demande d'avis motivé de l'ARTCI (fichiers publics) : traitements opérés pour le compte de l'État ou d'un service public, autorisés par DÉCRET EN CONSEIL DES MINISTRES après avis motivé de l'ARTCI (sûreté de l'État, défense nationale, sécurité publique, recensement de la population, salaires/pensions/impôts publics).\n   - Régime de liberté (dispense de formalité) : activités exclusivement personnelles, domestiques ou familiales ; registres strictement personnels ; associations ou organismes à but non lucratif (religieux, philosophiques, politiques, syndicaux) pour leurs seuls membres sans communication à des tiers.",
        formulas: [
          {
            name: 'Hiérarchie des 4 régimes de formalités (Loi 2013-450)',
            formula: 'Dispense (domestique/asso interne) < Déclaration (droit commun) < Autorisation ARTCI (biométrie, santé, pays tiers) < Décret après avis ARTCI (fichiers publics régaliens)',
            note: 'Décret n° 2015-79 du 4 février 2015 fixe la procédure auprès de l’ARTCI.',
          },
        ],
        keyRule:
          "Retiens le bon régime : Droit commun = Déclaration préalable (récépissé). Santé / Biométrie / Interconnexion / Transfert pays tiers = Autorisation préalable ARTCI. Sûreté de l'État / Recensement / Impôts = Décret en Conseil des ministres après avis de l'ARTCI. Usage domestique ou liste interne d'une association = Dispense.",
        workedExample: {
          title: 'Déterminer la formalité ARTCI applicable à quatre projets numériques',
          statement:
            "Quelle formalité préalable auprès de l'ARTCI s'applique à chacun de ces traitements : (1) carnet d'adresses familial dans un smartphone, (2) fichier clients d'une PME locale pour sa facturation, (3) système de pointage par empreinte biométrique d'une entreprise et transfert des données vers un serveur aux États-Unis, (4) recensement général de la population par l'État ?",
          methodSteps: [
            'Étape 1 — (1) Usage strictement personnel/familial → Régime de liberté (dispense totale de déclaration).',
            'Étape 2 — (2) Fichier commercial ordinaire sans donnée sensible ni transfert étranger → Déclaration préalable (droit commun, délivrance d’un récépissé).',
            'Étape 3 — (3) Données biométriques + transfert vers un pays tiers → Demande d’autorisation préalable obligatoire auprès de l’ARTCI.',
            'Étape 4 — (4) Fichier public régalien (recensement de la population) → Demande d’avis motivé de l’ARTCI suivie d’un décret pris en Conseil des ministres.',
          ],
          conclusion:
            "L'intensité du contrôle préalable de l'ARTCI est strictement proportionnée à la sensibilité des données et à la nature publique ou privée du traitement.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Acteurs juridiques',
            stepTheme: 'Responsable de traitement vs Sous-traitant',
            stepTitle: 'Distinguer le responsable du traitement et le sous-traitant',
            paragraphText:
              "Le responsable du traitement est l'entité qui décide POURQUOI et COMMENT les données sont traitées (finalités et moyens). Le sous-traitant (hébergeur, prestataire informatique) agit exclusivement pour le compte et selon les instructions du responsable.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Une banque ivoirienne décide de collecter les données de ses clients pour octroyer des crédits et confie le stockage technique de la base à un prestataire cloud. Quel est le rôle juridique de la banque ?',
              options: [
                'Simple sous-traitant technique',
                'Responsable du traitement (elle détermine les finalités et les moyens)',
                'Personne concernée',
                'Autorité de régulation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La banque fixe les finalités (octroi de crédits) et les moyens : elle est responsable du traitement ; le prestataire cloud qui agit pour son compte est le sous-traitant.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Le DPO',
            stepTheme: 'Correspondant à la protection (Arrêté 511)',
            stepTitle: 'Quel est le rôle du Correspondant à la protection (DPO) ?',
            paragraphText:
              "Encadré en Côte d'Ivoire par l'Arrêté n° 511/MPTIC/CAB du 11 novembre 2014, le Correspondant à la protection des données personnelles (délégué ou DPO) est la personne chargée de veiller en interne au respect de la réglementation sur les DCP au sein d'une organisation.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quel texte ivoirien définit le profil et fixe les conditions d’emploi du Correspondant à la protection des données personnelles (DPO) ?',
              options: [
                'Le Code de commerce de 1807',
                'La Convention de Budapest de 2001',
                'L’Arrêté n° 511/MPTIC/CAB du 11 novembre 2014',
                'La Loi n° 2016-555 sur le droit d’auteur',
              ],
              correctAnswerIndex: 2,
              explanation:
                "C'est l'Arrêté n° 511/MPTIC/CAB du 11 novembre 2014 qui régit le statut et les missions du Correspondant à la protection (DPO) en Côte d'Ivoire.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Déclaration préalable',
            stepTheme: 'Formalité de droit commun',
            stepTitle: 'Identifier le régime de droit commun auprès de l’ARTCI',
            paragraphText:
              "La déclaration préalable est la formalité de droit commun pour tout traitement ordinaire de données personnelles. Elle donne lieu à la délivrance d'un récépissé par l'ARTCI, mais n'exonère jamais le responsable du respect des principes légaux.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle formalité constitue le régime de droit commun préalable à la mise en œuvre d’un traitement ordinaire de données personnelles en Côte d’Ivoire ?',
              options: [
                'La déclaration préalable auprès de l’ARTCI (donnant lieu à un récépissé)',
                'Un décret pris en Conseil des ministres',
                'Une loi votée par l’Assemblée nationale',
                'Une autorisation du BURIDA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La déclaration préalable (récépissé) est le régime de droit commun ; l’autorisation et le décret après avis visent des traitements sensibles ou publics spécifiques.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Demande d’autorisation',
            stepTheme: 'Traitements sensibles et pays tiers',
            stepTitle: 'Repérer les traitements exigeant une autorisation préalable',
            paragraphText:
              "Sont soumis à la formalité renforcée de demande d'autorisation préalable auprès de l'ARTCI : les données génétiques/médicales, les données biométriques, les condamnations pénales, l'interconnexion de fichiers, les traitements d'intérêt public scientifique/statistique et les transferts de données vers des pays tiers.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Lequel de ces traitements est obligatoirement soumis à une DEMANDE D’AUTORISATION préalable auprès de l’ARTCI ?',
              options: [
                'Le répertoire téléphonique privé d’un particulier',
                'La liste interne des membres d’une association syndicale non transmise à des tiers',
                'Un simple registre papier strictement personnel',
                'Un système de contrôle d’accès par empreintes biométriques ou un transfert de données vers un pays tiers',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Les données biométriques, médicales/génétiques, l'interconnexion de fichiers et les transferts vers des pays tiers exigent une autorisation préalable expresse de l'ARTCI.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Demande d’avis',
            stepTheme: 'Fichiers publics et décret en Conseil des ministres',
            stepTitle: 'Connaître la procédure applicable aux grands fichiers publics',
            paragraphText:
              "Les traitements opérés pour le compte de l'État portant sur la sûreté de l'État, la défense nationale, la sécurité publique, le recensement de la population ou les impôts/salaires publics sont autorisés par décret en Conseil des ministres après AVIS MOTIVÉ de l'ARTCI.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Selon quelle procédure juridique l’État crée-t-il un fichier public portant sur la sûreté de l’État, le recensement national ou la liquidation des impôts ?',
              options: [
                'Par décret pris en Conseil des ministres après avis motivé de l’ARTCI',
                'Par simple déclaration ordinaire sans contrôle',
                'Par contrat commercial avec un hébergeur privé uniquement',
                'Sous le régime de dispense domestique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Ces fichiers publics régaliens relèvent de la procédure de demande d’avis motivé de l’ARTCI, concrétisée par un décret en Conseil des ministres.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Régime de liberté',
            stepTheme: 'Conditions strictes de dispense pour les associations',
            stepTitle: 'Vérifier les limites de la dispense associative',
            paragraphText:
              "Attention : une association à but non lucratif (religieuse, philosophique, politique, syndicale) est dispensée de déclaration préalable UNIQUEMENT si les données correspondent à son objet, concernent ses SEULS membres et NE SONT PAS communiquées à des tiers !",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'À quelle condition une association politique ou religieuse est-elle dispensée de déclaration préalable auprès de l’ARTCI ?',
              options: [
                'Aucune condition : toute association peut librement vendre son fichier membres à des sponsors',
                'Les données doivent correspondre à son objet, concerner uniquement ses membres et ne pas être communiquées à des tiers',
                'Elle doit compter plus de 10 000 membres',
                'Elle doit être hébergée à l’étranger',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Dès qu'une association communique son fichier à des tiers ou collecte des données hors de son objet, elle perd le bénéfice de la dispense.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch1_p2',
        order: 2,
        title: "Les 10 droits de la personne concernée, obligations du responsable et contrôles de l'ARTCI",
        summary:
          "Maîtriser l'éventail complet des 10 droits reconnus aux citoyens (dont portabilité, refus de profilage, déréférencement, oubli numérique), les obligations techniques du responsable et la distinction contrôle a priori / contrôle a posteriori de l'ARTCI.",
        conceptExplanation:
          "Le support de Dr YEO Ladji recense de manière précise 10 droits fondamentaux reconnus à la personne concernée par un traitement de données à caractère personnel :\n1) Droit de consentir au traitement ;\n2) Droit d'opposition au traitement ;\n3) Droit à l'information ;\n4) Droit d'accès aux données ;\n5) Droit à la rectification ;\n6) Droit de refus de profilage (ne pas faire l'objet d'une décision automatisée préjudiciable fondée uniquement sur un profilage) ;\n7) Droit à la portabilité des données (récupérer ses données dans un format structuré pour les transférer vers un autre prestataire) ;\n8) Droit à l'effacement ;\n9) Droit au déréférencement (retirer un lien des résultats d'un moteur de recherche) ;\n10) Droit à l'oubli numérique.\n\nEn miroir, le législateur ivoirien impose au responsable du traitement et à ses agents des obligations strictes : confidentialité (ne communiquer qu'aux personnes habilitées), empêcher tout accès extérieur non autorisé, garantir la traçabilité (pouvoir vérifier l'identité des personnes ayant accédé aux données), assurer la sécurité et effectuer des copies sécurisées de sauvegarde, limiter la durée de conservation à la finalité et respecter strictement la finalité initiale.\n\nPour faire respecter cet équilibre, l'ARTCI — « gendarme des données personnelles » — exerce deux formes complémentaires de contrôle :\n- Le contrôle a priori (en amont) : examine les demandes et permet d'autoriser ou de refuser certains traitements sensibles avant leur mise en service ;\n- Le contrôle a posteriori (en aval) : vérifie la conformité effective des traitements en cours et sanctionne les manquements. À ce titre, l'ARTCI dispose du droit d'accès aux systèmes informatiques, du pouvoir d'enquête et de sanction administrative, ainsi que de la possibilité de saisir le Procureur de la République en cas d'infraction pénale grave.",
        formulas: [
          {
            name: 'Double contrôle de l’ARTCI',
            formula: 'Contrôle a priori (autoriser / refuser en amont)  +  Contrôle a posteriori (auditer / sanctionner / saisir le Procureur)',
            note: 'Complété par le droit d’accès direct aux systèmes informatiques lors des enquêtes.',
          },
        ],
        keyRule:
          "Portabilité = récupérer/transférer ses données vers un autre service. Déréférencement = retirer un résultat d'un moteur de recherche. Contrôle a priori = avant lancement (autoriser/refuser) ; Contrôle a posteriori = après lancement (enquêter, sanctionner, saisir le Procureur).",
        workedExample: {
          title: 'Mobiliser les droits numériques avancés et les pouvoirs de l’ARTCI',
          statement:
            "Un citoyen ivoirien souhaite : (1) quitter une banque en ligne en récupérant son historique de données dans un format réutilisable par une autre banque, (2) faire disparaître des résultats de recherche Google un vieil article diffamatoire, (3) dénoncer une entreprise qui refuse de supprimer ses données après la fin de son contrat et expose ses serveurs sans sauvegarde. Associer chaque cas au droit ou contrôle applicable.",
          methodSteps: [
            "Étape 1 — (1) Relève du Droit à la portabilité des données personnelles.",
            "Étape 2 — (2) Relève du Droit au déréférencement (lié au droit à l'oubli numérique).",
            "Étape 3 — (3) Violation de l'obligation de durée de conservation limitée et de copie sécurisée de sauvegarde → l'ARTCI déclenche un contrôle a posteriori (accès aux SI, enquête, sanction administrative et, si infraction grave, saisine du Procureur de la République).",
          ],
          conclusion:
            "Les 10 droits individuels s'appuient sur la force exécutoire des contrôles a posteriori de l'ARTCI et de l'autorité judiciaire.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Droit à la portabilité',
            stepTheme: 'Changer de prestataire librement',
            stepTitle: 'Définir le droit à la portabilité des données',
            paragraphText:
              "Parmi les 10 droits énumérés dans le cours, le droit à la portabilité permet à une personne concernée de récupérer les données personnelles qu'elle a fournies à un organisme dans un format structuré et lisible par machine, afin de les transmettre à un autre prestataire.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quel droit permet à un utilisateur de récupérer ses données personnelles auprès d’une plateforme afin de les transférer facilement vers un service concurrent ?',
              options: [
                'Le droit à la portabilité des données personnelles',
                'Le droit au déréférencement',
                'Le droit de rétractation commerciale',
                'Le droit d’auteur voisin',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La portabilité renforce la maîtrise de l’usager sur ses données et favorise la concurrence entre services numériques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Profilage & Oubli',
            stepTheme: 'Refus de profilage et déréférencement',
            stepTitle: 'Distinguer droit de refus de profilage et droit au déréférencement',
            paragraphText:
              "Le droit de refus de profilage protège l'individu contre les décisions entièrement automatisées produisant des effets juridiques ou significatifs (ex. refus automatique de prêt bancaire par algorithme). Le droit au déréférencement vise la suppression de liens associés au nom d'une personne dans les moteurs de recherche.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Un algorithme rejette automatiquement la demande de crédit d’un citoyen sans intervention humaine en se fondant sur un profilage comportemental. Quel droit spécifique du cours peut-il invoquer ?',
              options: [
                'Le droit à la sauvegarde de copie',
                'Le droit de refus de profilage',
                'Le droit de marque déposée',
                'Le droit de douane',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le droit de refus de profilage protège les personnes contre les décisions automatisées basées sur l’analyse algorithmique de leur profil.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Durée de conservation',
            stepTheme: 'Obligations du responsable de traitement',
            stepTitle: 'Peut-on conserver indéfiniment les données des anciens clients ?',
            paragraphText:
              "Non ! L'article 14 et suivants de la Loi n° 2013-450 consacrent le principe de durée de conservation limitée : le responsable du traitement a l'obligation stricte de ne pas conserver les données au-delà de la période nécessaire à la finalité déclarée (ou du délai légal).",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Que doit faire un responsable de traitement des données personnelles une fois la finalité accomplie et le délai légal expiré ?',
              options: [
                'Les vendre à des courtiers en données pour les rentabiliser',
                'Les publier en accès libre sur son site web',
                'Les supprimer (ou les anonymiser irréversiblement) conformément au principe de durée de conservation limitée',
                'Les transférer sans autorisation vers un pays tiers',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La conservation illimitée est interdite : une fois la finalité atteinte ou le délai légal écoulé, les données doivent être effacées.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Traçabilité & Sauvegarde',
            stepTheme: 'Obligations techniques de sécurité',
            stepTitle: 'Identifier les obligations techniques du responsable de traitement',
            paragraphText:
              "Le cours cite deux obligations techniques majeures du responsable : (1) garantir que puisse être vérifiée l'identité des personnes ayant accédé aux données (traçabilité / journalisation des accès), et (2) effectuer des copies sécurisées de sauvegarde des données.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Parmi les obligations suivantes imposées au responsable du traitement par la loi ivoirienne, laquelle garantit la traçabilité en cas d’accès abusif interne ?',
              options: [
                'Interdire tout mot de passe sur les postes de travail',
                'Supprimer tous les journaux de connexion chaque soir',
                'Partager un seul compte administrateur entre tous les stagiaires',
                'Garantir que puisse être vérifiée l’identité des personnes ayant eu accès aux données personnelles',
              ],
              correctAnswerIndex: 3,
              explanation:
                "La traçabilité (journalisation nominative des accès) permet d'identifier précisément qui a consulté ou modifié des données personnelles.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Contrôles ARTCI',
            stepTheme: 'A priori vs A posteriori',
            stepTitle: 'Distinguer le contrôle a priori et le contrôle a posteriori',
            paragraphText:
              "L'ARTCI exerce un contrôle a priori lorsqu'elle autorise ou refuse un traitement sensible AVANT sa mise en œuvre, et un contrôle a posteriori lorsqu'elle vérifie la conformité d'un traitement DÉJÀ en fonctionnement (avec pouvoir d'accès aux SI, d'enquête et de sanction).",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Lorsqu’une équipe d’inspecteurs de l’ARTCI accède aux systèmes informatiques d’une entreprise déjà en activité pour vérifier la conformité de ses fichiers et prononcer une sanction administrative, de quel contrôle s’agit-il ?',
              options: [
                'Un contrôle a posteriori',
                'Un contrôle a priori',
                'Une simple dispense de formalité',
                'Une consultation législative',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Vérifier la conformité d’un traitement existant et sanctionner d’éventuelles violations relève du contrôle a posteriori de l’ARTCI.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Saisine du Procureur',
            stepTheme: 'Articulation ARTCI / Justice pénale',
            stepTitle: 'Que fait l’ARTCI face à une infraction pénale grave ?',
            paragraphText:
              "Si l'ARTCI peut prononcer elle-même des sanctions administratives (mise en demeure, retrait d'autorisation, amende), elle ne prononce pas de peines de prison : en cas d'infraction grave découverte lors d'un contrôle, elle saisit le Procureur de la République pour engager des poursuites pénales.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Lorsqu’un contrôle de l’ARTCI révèle une infraction pénale grave sur des données personnelles, quelle autorité judiciaire l’ARTCI a-t-elle le pouvoir de saisir ?',
              options: [
                'Le directeur du BURIDA',
                'Le Procureur de la République',
                'Le tribunal arbitral des franchises',
                'La Chambre des métiers',
              ],
              correctAnswerIndex: 1,
              explanation:
                "En cas d'infraction pénale grave, l'ARTCI transmet le dossier et saisit le Procureur de la République pour déclencher l'action publique.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : CRÉATIONS NUMÉRIQUES (LOI 2016-555 / BURIDA) & COMMUNICATIONS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch2',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Protection juridique des créations numériques et régime des communications électroniques',
    summary:
      "Œuvres numériques (logiciels, bases de données, multimédia, IA), conditions de protection automatique (Loi n° 2016-555), preuve électronique, rôles du BURIDA, de la PLCC et de l'ARTCI, Loi n° 2024-352 sur les communications électroniques et Loi n° 2017-803 d'orientation de la société de l'information.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'SUPPORT DROIT DU NUMERIQUE (Dr YEO Ladji — Parties II & III), Loi 2016-555, Loi 2017-803 & Loi 2024-352',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch2_p1',
        order: 1,
        title: "Propriété intellectuelle numérique : Loi n° 2016-555, BURIDA et conditions de protection",
        summary:
          "Classifier les catégories de créations numériques, maîtriser les trois conditions de protection automatique par le droit d'auteur, les modes de preuve numérique, la titularité des œuvres générées par IA et l'architecture institutionnelle (BURIDA, ARTCI, PLCC).",
        conceptExplanation:
          "Une création numérique (ou œuvre numérique) est toute production intellectuelle réalisée, diffusée ou exploitée au moyen d'outils ou de supports numériques. Le cours recense 5 grandes catégories :\n- Logiciels (programmes, applications, jeux vidéo) ;\n- Bases de données (fichiers clients structurés, moteurs de recherche, catalogues) ;\n- Sites web (interfaces, graphismes, contenus) ;\n- Œuvres multimédias (clips, animations, œuvres interactives, créations assistées par IA générative) ;\n- Œuvres audiovisuelles numériques (vidéos en ligne, podcasts, films web).\n\nEn Côte d'Ivoire, ces œuvres sont protégées par la Loi n° 2016-555 du 26 juillet 2016 relative au droit d'auteur et aux droits voisins. La protection est AUTOMATIQUE dès la création (aucun dépôt obligatoire n'est requis pour que le droit naisse), à condition que trois critères cumulatifs soient réunis :\n1) Originalité : l'œuvre porte l'empreinte de la personnalité de son auteur (choix créatifs libres) ;\n2) Matérialisation : l'œuvre est perceptible sous une forme numérique identifiable (code source, fichier, interface — une simple idée non formalisée n'est pas protégée) ;\n3) Créateur humain : l'auteur est une personne physique (sauf œuvre collective ou salariée selon les régimes prévus). Pour les œuvres générées par IA, la titularité dépend du degré d'intervention créative humaine.\n\nPour prouver la date de création en cas de contrefaçon ou piratage, la preuve électronique est admise : horodatage, dépôt auprès du BURIDA, signature numérique ou ancrage blockchain.\n\nQuatre institutions clés interviennent : le BURIDA (Bureau Ivoirien du Droit d'Auteur : gère les droits d'auteur et perçoit/répartit les redevances), l'ARTCI (régule les communications électroniques et données associées), la PLCC (Plateforme de Lutte Contre la Cybercriminalité : enquête et réprime le piratage et la contrefaçon numérique) et le Ministère en charge de la Culture (politiques nationales de PI).",
        formulas: [
          {
            name: 'Les 3 conditions cumulatives de protection (Loi n° 2016-555)',
            formula: 'Originalité (empreinte personnelle)  +  Matérialisation (forme perceptible)  +  Créateur humain',
            note: 'Protection automatique dès la création ; le dépôt BURIDA ou l’horodatage sert de PREUVE d’antériorité.',
          },
        ],
        keyRule:
          "Loi n° 2016-555 = protection AUTOMATIQUE dès la création (si Originalité + Matérialisation + Créateur humain). Le dépôt au BURIDA n'est pas obligatoire pour être protégé, mais constitue une preuve précieuse. BURIDA = gestion droits/redevances ; PLCC = enquête contre piratage et contrefaçon.",
        workedExample: {
          title: 'Protéger et défendre une application mobile développée par des étudiants ENTD',
          statement:
            "Un groupe d'étudiants de l'ESATIC code une application mobile originale de révision universitaire (code source, design et vidéos). Un concurrent copie leur code source et le republie sans autorisation sur un autre store. Sont-ils protégés même sans dépôt préalable ? Quels preuves et organismes mobiliser ?",
          methodSteps: [
            "Étape 1 (Protection automatique — Loi n° 2016-555) : Oui ! L'application remplit les 3 conditions : originalité (architecture/interface originale), matérialisation (code source et fichiers numériques) et créateurs humains. Elle est protégée dès sa création sans formalité constitutive.",
            "Étape 2 (Administration de la preuve) : Les étudiants peuvent prouver leur antériorité par des preuves électroniques admises : dépôts horodatés (Git/horodatage certifié), dépôt probatoire au BURIDA, signature numérique ou ancrage blockchain.",
            "Étape 3 (Recours institutionnels) : Saisir la PLCC (enquête pénale pour contrefaçon/piratage numérique), s'appuyer sur le BURIDA pour la gestion des droits et engager une action civile en dommages-intérêts.",
          ],
          conclusion:
            "Le code source et l'interface sont protégés automatiquement par la Loi n° 2016-555 ; la PLCC et la justice sanctionnent la contrefaçon sur présentation de preuves électroniques d'antériorité.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Loi n° 2016-555',
            stepTheme: 'Texte de référence en propriété littéraire et artistique',
            stepTitle: 'Quel texte protège les œuvres numériques en Côte d’Ivoire ?',
            paragraphText:
              "En Côte d'Ivoire, la protection des œuvres de l'esprit — incluant explicitement les créations numériques comme les logiciels, sites web, bases de données et œuvres multimédias — est régie par la Loi n° 2016-555 du 26 juillet 2016 relative au droit d'auteur et aux droits voisins.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle loi ivoirienne encadre la propriété littéraire et artistique et protège les créations numériques (logiciels, sites web, œuvres audiovisuelles) ?',
              options: [
                'La Loi n° 2013-450 du 19 juin 2013',
                'La Loi n° 2016-555 du 26 juillet 2016',
                'La Loi n° 2024-352 du 6 juin 2024',
                'La Loi n° 2013-546 du 30 juillet 2013',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Loi n° 2016-555 du 26 juillet 2016 régit le droit d’auteur et les droits voisins en Côte d’Ivoire, y compris pour les œuvres numériques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: '3 conditions',
            stepTheme: 'Originalité, matérialisation, créateur humain',
            stepTitle: 'Vérifier les conditions de protection d’une œuvre numérique',
            paragraphText:
              "Une œuvre numérique est protégée dès sa création si elle réunit trois conditions : (1) originalité (empreinte de la personnalité de l'auteur), (2) matérialisation sous une forme perceptible (code, fichier, vidéo — une simple idée dans la tête n'est jamais protégée) et (3) créateur humain.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Un étudiant a une excellente idée d’application mobile mais n’a encore écrit aucun cahier des charges, maquette ni code source. Son idée seule est-elle protégée par le droit d’auteur ?',
              options: [
                'Oui, toute idée orale est automatiquement protégée pendant 70 ans',
                'Oui, à condition de l’envoyer par SMS à un ami',
                'Non, car la protection exige une matérialisation sous une forme perceptible (fichier, code, maquette)',
                'Oui, uniquement si elle porte sur la finance',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les idées sont de libre parcours : le droit d’auteur ne protège que la forme matérialisée et originale (code source, interface, texte, vidéo).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Protection automatique',
            stepTheme: 'Rôle réel du dépôt au BURIDA',
            stepTitle: 'Le dépôt au BURIDA est-il obligatoire pour faire naître le droit d’auteur ?',
            paragraphText:
              "Attention au piège ! En droit ivoirien (Loi 2016-555), la protection est AUTOMATIQUE dès le seul fait de la création de l'œuvre originale. Le dépôt au BURIDA, l'horodatage, la signature numérique ou la blockchain ne créent pas le droit : ils servent de MOYEN DE PREUVE de la date et de la paternité en cas de litige.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'À quel moment naît la protection juridique par le droit d’auteur sur un logiciel original en Côte d’Ivoire ?',
              options: [
                'Automatiquement dès la création de l’œuvre matérialisée, même sans dépôt préalable',
                'Uniquement après l’enregistrement payant au BURIDA',
                'Seulement après la première vente commerciale',
                'Après validation par l’ARTCI',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La protection est automatique dès la création ; le dépôt au BURIDA, l’horodatage ou la blockchain servent à prouver facilement l’antériorité en justice.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Institutions clés',
            stepTheme: 'BURIDA vs PLCC',
            stepTitle: 'Distinguer les missions du BURIDA et de la PLCC',
            paragraphText:
              "Dans l'écosystème ivoirien : le BURIDA gère collectivement les droits d'auteur et les redevances liées à l'exploitation des œuvres, tandis que la PLCC (Plateforme de Lutte Contre la Cybercriminalité) est l'unité spécialisée qui enquête et réprime les actes de piratage et de contrefaçon numérique.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle institution ivoirienne a pour mission spécifique d’enquêter et de réprimer les actes de piratage et de contrefaçon commis via les systèmes informatiques ?',
              options: [
                'La CNPS',
                'La Chambre de Commerce',
                'Le Trésor public',
                'La PLCC (Plateforme de Lutte Contre la Cybercriminalité)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le BURIDA gère les droits et redevances ; l’ARTCI régule les télécoms/données ; la PLCC mène les enquêtes et réprime le piratage et la contrefaçon numérique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'IA générative',
            stepTheme: 'Titularité des œuvres générées par IA',
            stepTitle: 'Qui est titulaire des droits sur une œuvre générée par IA ?',
            paragraphText:
              "Parce que le droit d'auteur exige un créateur humain, une image ou un texte généré purement et automatiquement par une intelligence artificielle sans apport créatif humain significatif ne bénéficie pas d'un droit d'auteur propre : comme le souligne le cours, la titularité dépend du degré d'intervention créative humaine.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Selon le cours de Dr YEO Ladji, de quoi dépend la protection et la titularité par le droit d’auteur d’une création réalisée à l’aide d’une IA générative ?',
              options: [
                'Du degré d’intervention créative humaine (choix originaux de l’utilisateur humain)',
                'De la puissance électrique du serveur utilisé',
                'La machine IA est automatiquement reconnue comme personne physique titulaire des droits',
                'Aucune œuvre assistée par ordinateur ne peut jamais être protégée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’IA n’ayant pas de personnalité juridique humaine, la protection par le droit d’auteur dépend de l’empreinte créative humaine apportée dans le processus.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Preuve électronique',
            stepTheme: 'Horodatage et blockchain',
            stepTitle: 'Choisir des modes de preuve électronique d’antériorité',
            paragraphText:
              "Pour établir de façon incontestable qu'un créateur détenait son code ou son œuvre numérique avant un contrefacteur, le droit numérique admet plusieurs procédés techniques de preuve : l'horodatage certifié, le dépôt au BURIDA, la signature numérique et l'ancrage sur blockchain.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Lequel de ces moyens est admis comme preuve électronique d’antériorité d’une création numérique selon le cours ?',
              options: [
                'Une simple affirmation verbale sans aucune trace datée',
                'L’horodatage, le dépôt BURIDA, la signature numérique ou l’ancrage blockchain',
                'Le paiement en espèces d’une facture d’électricité',
                'Le changement de nom du fichier sur son ordinateur local',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Horodatage certifié, dépôt BURIDA, signature électronique et blockchain fournissent une date certaine fiable et opposable en cas de contestation.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch2_p2',
        order: 2,
        title: "Régime des communications électroniques (Loi 2024-352), transactions et société de l'information (Loi 2017-803)",
        summary:
          "Comprendre la modernisation du cadre des communications électroniques par la Loi n° 2024-352 du 6 juin 2024, les principes de la Loi n° 2017-803 d'orientation de la société de l'information, les transactions électroniques (Loi 2013-546) et l'harmonisation CEDEAO-UEMOA.",
        conceptExplanation:
          "La Partie III du cours (Régime juridique des communications numériques) couvre trois volets complémentaires qui structurent les infrastructures et échanges numériques en Côte d'Ivoire :\n\n1) Les communications électroniques — Loi n° 2024-352 du 6 juin 2024 relative aux Communications Électroniques (qui modernise le cadre antérieur de l'Ordonnance n° 2012-293) : elle encadre l'établissement et l'exploitation des réseaux ouverts au public, les licences et autorisations des opérateurs télécoms, la gestion des fréquences radioélectriques et de la numérotation, l'interconnexion, l'accès universel, la qualité de service, la sécurité des réseaux et la protection des abonnés sous la régulation de l'ARTCI.\n\n2) Les transactions électroniques — Loi n° 2013-546 du 30 juillet 2013 : elle consacre l'équivalence fonctionnelle entre l'écrit papier et l'écrit électronique (ainsi que la signature électronique qualifiée délivrée par un prestataire de services de certification électronique) dès lors que l'auteur est dûment identifié et que l'intégrité du document est garantie dans le temps.\n\n3) La société de l'information — Loi n° 2017-803 du 7 décembre 2017 d'orientation de la société de l'information en Côte d'Ivoire : elle fixe les principes directeurs de la transition numérique nationale (liberté d'accès à l'information, inclusion numérique, gouvernance électronique / e-administration, confiance numérique, responsabilité des acteurs de la société de l'information et développement de l'économie numérique).\n\nEnfin, ce dispositif national s'articule avec le cadre communautaire CEDEAO–UEMOA (Actes additionnels de la CEDEAO sur les transactions électroniques, la protection des données et la cybercriminalité ; directives UEMOA sur les télécommunications) afin d'assurer l'interopérabilité juridique en Afrique de l'Ouest.",
        formulas: [
          {
            name: 'Architecture législative des communications numériques en Côte d’Ivoire',
            formula: 'Loi 2024-352 (Communications électroniques)  +  Loi 2013-546 (Transactions électroniques)  +  Loi 2017-803 (Société de l’information)',
            note: 'En cohérence avec les directives UEMOA et Actes additionnels de la CEDEAO.',
          },
        ],
        keyRule:
          "Loi n° 2024-352 (6 juin 2024) = cadre modernisé des communications électroniques et opérateurs. Loi n° 2013-546 = transactions électroniques et valeur probante de l'écrit/signature électronique. Loi n° 2017-803 = orientation de la société de l'information.",
        workedExample: {
          title: 'Vérifier la validité juridique d’un contrat signé électroniquement en Côte d’Ivoire',
          statement:
            "Une entreprise ivoirienne conclut un contrat de prestation informatique de 5 000 000 FCFA avec un client à Yamoussoukro via une plateforme de signature électronique certifiée. En cas de litige, le client affirme que le contrat est nul faute de papier signé au stylo. Que prévoit le cadre juridique ivoirien ?",
          methodSteps: [
            "Étape 1 (Principe d'équivalence — Loi n° 2013-546) : L'écrit sous forme électronique a la même force probante que l'écrit sur support papier dès lors que deux conditions sont remplies : identification fiable de son auteur et conservation garantissant son intégrité.",
            "Étape 2 (Signature électronique) : Une signature électronique sécurisée/certifiée lie de façon fiable le signataire à l'acte et manifeste son consentement au même titre qu'une signature manuscrite.",
            "Étape 3 (Cadre global) : Ce mécanisme est renforcé par la Loi n° 2017-803 (confiance dans la société de l'information) et la sécurisation des réseaux prévue par la Loi n° 2024-352.",
          ],
          conclusion:
            "L'argument du client est rejeté : le contrat électronique régulièrement signé et conservé dans son intégrité possède pleine valeur juridique et probante.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Loi n° 2024-352',
            stepTheme: 'Communications électroniques (6 juin 2024)',
            stepTitle: 'Quel est l’objet de la Loi n° 2024-352 du 6 juin 2024 ?',
            paragraphText:
              "La Loi n° 2024-352 du 6 juin 2024 relative aux communications électroniques modernise le droit ivoirien des télécommunications : elle encadre les opérateurs, réseaux, licences, fréquences, interconnexions, sécurité des transmissions et droits des utilisateurs sous le contrôle de l'ARTCI.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quel domaine spécifique régit la Loi ivoirienne n° 2024-352 du 6 juin 2024 ?',
              options: [
                'Le droit fiscal agricole',
                'Les communications électroniques (réseaux, opérateurs, transmissions et régulation)',
                'La comptabilité analytique des banques',
                'Le droit maritime international',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Adoptée le 6 juin 2024, la Loi n° 2024-352 encadre les communications électroniques, modernisant le cadre antérieur de l’Ordonnance 2012-293.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Loi n° 2017-803',
            stepTheme: "Société de l'information",
            stepTitle: 'Identifier l’objet de la Loi n° 2017-803',
            paragraphText:
              "La Loi n° 2017-803 du 7 décembre 2017 porte orientation de la société de l'information en Côte d'Ivoire : elle définit le cadre stratégique de l'accès numérique, de la gouvernance électronique, de la confiance numérique et des responsabilités dans la société de l'information.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel texte ivoirien fixe les grands principes d’orientation de la société de l’information (accès, e-gouvernance, confiance numérique) ?',
              options: [
                'La Loi n° 2017-803 du 7 décembre 2017',
                'La Loi n° 2016-555 sur le droit d’auteur',
                'Le Code de procédure civile de 1972',
                'L’Arrêté n° 511 sur le DPO',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La Loi n° 2017-803 constitue la loi d'orientation de la société de l'information en Côte d'Ivoire.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Preuve électronique',
            stepTheme: 'Équivalence écrit papier / écrit électronique',
            stepTitle: 'Quelles deux conditions donnent force probante à un écrit électronique ?',
            paragraphText:
              "Selon la Loi n° 2013-546 sur les transactions électroniques, un document électronique a la même valeur juridique qu'un écrit papier à deux conditions cumulatives : (1) la personne dont il émane peut être dûment identifiée, et (2) il est établi et conservé dans des conditions de nature à en garantir l'intégrité.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'À quelles conditions un écrit électronique a-t-il la même force probante qu’un écrit sur support papier ?',
              options: [
                'Être obligatoirement imprimé en trois exemplaires chez un notaire',
                'Être rédigé exclusivement en langue anglaise',
                'Permettre d’identifier dûment son auteur et être établi/conservé dans des conditions garantissant son intégrité',
                'Avoir une taille inférieure à 1 mégaoctet',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'identification fiable de l'auteur et la garantie d'intégrité dans le temps sont les deux piliers juridiques de l'équivalence de l'écrit électronique.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Signature électronique',
            stepTheme: 'Fonction juridique de la signature numérique',
            stepTitle: 'Quel rôle joue un prestataire de certification électronique ?',
            paragraphText:
              "Une signature électronique qualifiée repose sur un certificat électronique délivré par un prestataire de services de certification agréé (sous le contrôle de l'ARTCI). Elle assure à la fois l'authentification du signataire, son consentement et la détection de toute modification ultérieure du document.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle double fonction essentielle remplit la signature électronique sécurisée sur un contrat numérique ?',
              options: [
                'Augmenter automatiquement le montant de la TVA et retarder la livraison',
                'Remplacer la connexion Internet',
                'Effacer l’identité des parties contractantes',
                'Identifier le signataire, manifester son consentement et garantir l’intégrité du document signé',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La signature électronique prouve l’identité du signataire, matérialise son adhésion aux obligations et scelle l’intégrité de l’acte.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Cadre régional',
            stepTheme: 'CEDEAO et UEMOA',
            stepTitle: 'Pourquoi harmoniser le droit numérique au niveau CEDEAO–UEMOA ?',
            paragraphText:
              "Comme le rappellent les objectifs du cours de Dr YEO Ladji, les textes ivoiriens s'inscrivent dans un espace communautaire (CEDEAO et UEMOA) qui a adopté des directives et actes additionnels communs sur les télécoms, les transactions électroniques, les données personnelles et la cybercriminalité afin de faciliter l'économie numérique régionale.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans quel espace communautaire ouest-africain s’inscrit l’harmonisation du cadre juridique numérique ivoirien ?',
              options: [
                'L’espace communautaire CEDEAO–UEMOA',
                'L’ALENA (Amérique du Nord)',
                'Le MERCOSUR (Amérique du Sud)',
                'L’ASEAN (Asie du Sud-Est)',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La Côte d'Ivoire articule ses lois nationales avec les directives de l'UEMOA et les actes additionnels de la CEDEAO en matière numérique.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Service universel',
            stepTheme: 'Mission des communications électroniques',
            stepTitle: 'Comprendre l’objectif d’accès universel aux TIC',
            paragraphText:
              "Le droit des communications électroniques ne vise pas seulement les grandes métropoles rentables : il impose des mécanismes de service/accès universel (financement et obligations de couverture) pour réduire la fracture numérique dans les zones rurales et défavorisées.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de la politique d’accès universel dans la réglementation des communications électroniques ?',
              options: [
                'Réserver l’accès à Internet haut débit aux seules capitales économiques',
                'Garantir un accès équitable de toute la population, y compris en zones rurales, aux services essentiels de communications électroniques',
                'Supprimer toute concurrence entre opérateurs télécoms',
                'Interdire les réseaux mobiles 4G et 5G',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le service/accès universel vise à réduire la fracture numérique territoriale et sociale en rendant les réseaux accessibles à tous.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : DROIT PÉNAL NUMÉRIQUE — CODE PÉNAL IVOIRIEN & BUDAPEST
  // ==========================================================================
  {
    id: 'lmd_entd_l1_droit_numerique_ch3',
    subjectId: 'lmd_droit_numerique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Droit pénal numérique : Code pénal ivoirien, cybercriminalité et Convention de Budapest',
    summary:
      "Théorie générale de l'infraction pénale en Côte d'Ivoire (Code pénal Loi 2019-574 modifiée par Loi 2021-893 : crimes, délits, contraventions, peines, mesures de sûreté, excuses), répression nationale des infractions numériques et coopération internationale selon la Convention de Budapest (STE n° 185).",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'SUPPORT DROIT DU NUMERIQUE (Partie IV), Code pénal ivoirien (Loi 2019-574 / 2021-893) & Convention de Budapest (2001)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch3_p1',
        order: 1,
        title: 'Classification des infractions, peines et mesures de sûreté (Code pénal ivoirien 2019 / 2021)',
        summary:
          "Maîtriser les articles 2 à 11 du Code pénal ivoirien (Loi n° 2019-574 modifiée par la Loi n° 2021-893) : définition de l'infraction, distinction tripartite crime / délit / contravention, peines principales et complémentaires, mesures de sûreté et excuses.",
        conceptExplanation:
          "Le droit pénal numérique s'inscrit dans les principes généraux du Code pénal ivoirien (Loi n° 2019-574 du 26 juin 2019, modifiée par la Loi n° 2021-893 du 21 décembre 2021). Aux termes de l'Article 2, constitue une infraction « tout fait, action ou omission, qui trouble ou est susceptible de troubler l'ordre public ou la paix sociale en portant ou non atteinte aux droits des personnes et qui comme tel est légalement sanctionné ».\n\n1) Classification tripartite selon la gravité (Article 3 modifié par la Loi n° 2021-893) — toujours déterminée d'après le MAXIMUM de la peine encourue :\n   - Crime : infraction passible d'une peine privative de liberté perpétuelle ou temporaire SUPÉRIEURE à 10 ans ;\n   - Délit : infraction passible d'une peine privative de liberté INFÉRIEURE OU ÉGALE à 10 ans et SUPÉRIEURE à 2 mois, ET/OU d'une amende SUPÉRIEURE à 360 000 FCFA (ou qualifiée telle par la loi). La plupart des cyberdélits (accès frauduleux, escroquerie en ligne, contrefaçon numérique) sont des délits correctionnels ;\n   - Contravention : infraction passible d'une peine privative de liberté INFÉRIEURE OU ÉGALE à 2 mois et/ou d'une amende INFÉRIEURE OU ÉGALE à 360 000 FCFA (déterminée par décret — Art. 4).\n\n2) Peines et mesures de sûreté (Articles 6 à 10) :\n   - La peine a un but répressif et d'amendement ; elle est principale (sanction essentielle : criminelle, correctionnelle ou contraventionnelle) ou complémentaire (adjointe à la peine principale, obligatoire ou facultative — ex. confiscation du matériel informatique, interdiction d'exercer).\n   - La mesure de sûreté a un but PRÉVENTIF face à un danger certain pour la société.\n   - Les peines complémentaires et mesures de sûreté obligatoires s'appliquent de plein droit même si le juge omet de les prononcer (Art. 9).\n\n3) Les excuses légales (Article 11) : circonstances limitativement prévues par la loi qui, sans effacer l'infraction, entraînent soit une dispense totale de peine (excuse absolutoire), soit une atténuation obligatoire de la peine (excuse atténuante). Par ailleurs (Art. 5), la récidive, les excuses ou circonstances atténuantes ne modifient pas la qualification légale (crime/délit/contravention) de l'infraction.",
        formulas: [
          {
            name: 'Seuils légaux de qualification pénale (Art. 3 Code pénal ivoirien)',
            formula: 'Contravention : ≤ 2 mois et ≤ 360 000 F  |  Délit : > 2 mois à ≤ 10 ans et/ou > 360 000 F  |  Crime : > 10 ans ou perpétuité',
            note: 'Qualification déterminée par le MAXIMUM de la peine légale encourue.',
          },
        ],
        keyRule:
          "Art. 3 Code pénal ivoirien : Crime = > 10 ans ; Délit = > 2 mois à ≤ 10 ans et/ou amende > 360 000 FCFA ; Contravention = ≤ 2 mois et ≤ 360 000 FCFA. Peine = réprimer/amender ; Mesure de sûreté = prévenir un danger.",
        workedExample: {
          title: 'Qualifier des cyberinfractions selon le Code pénal ivoirien',
          statement:
            "Une cyberinfraction prévue par la Loi n° 2013-451 est punie d'une peine de 1 à 5 ans d'emprisonnement et de 1 000 000 à 10 000 000 FCFA d'amende, avec confiscation obligatoire des ordinateurs utilisés. (1) Est-ce un crime, un délit ou une contravention ? (2) Quelle est la nature de la confiscation ? (3) Si le juge accorde des circonstances atténuantes et ne condamne qu'à 1 mois de prison, l'infraction devient-elle une contravention ?",
          methodSteps: [
            "Étape 1 (Qualification — Art. 3) : Le maximum légal encouru est de 5 ans (compris entre > 2 mois et ≤ 10 ans) et 10 000 000 FCFA (> 360 000 F) → c'est un DÉLIT (peine correctionnelle).",
            "Étape 2 (Nature de la confiscation — Art. 7 à 9) : La confiscation des ordinateurs est une peine complémentaire (ou mesure de sûreté réelle) ; comme elle est obligatoire, elle s'applique de plein droit même si le juge omet de la mentionner.",
            "Étape 3 (Effet des circonstances atténuantes — Art. 5) : Non ! Selon l'Article 5 du Code pénal, les circonstances atténuantes, les excuses ou la récidive ne modifient jamais la nature légale de l'infraction, qui reste un délit.",
          ],
          conclusion:
            "L'infraction est un délit correctionnel, la confiscation est une peine complémentaire obligatoire, et les circonstances atténuantes ne transforment pas le délit en contravention.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Art. 3 Code pénal',
            stepTheme: 'Qualification de Crime, Délit et Contravention',
            stepTitle: 'Reconnaître le seuil d’un délit en Côte d’Ivoire',
            paragraphText:
              "Selon l'Article 3 du Code pénal ivoirien (Loi n° 2019-574 modifiée par la Loi n° 2021-893), est qualifiée délit l'infraction passible d'un emprisonnement supérieur à 2 mois et inférieur ou égal à 10 ans, et/ou d'une amende supérieure à 360 000 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Selon l’Article 3 du Code pénal ivoirien (modifié par la Loi n° 2021-893), comment qualifie-t-on une infraction numérique punie au maximum de 3 ans d’emprisonnement et de 5 000 000 FCFA d’amende ?',
              options: [
                'Une contravention',
                'Un délit',
                'Un crime',
                'Une simple faute civile sans sanction pénale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un maximum de 3 ans (entre > 2 mois et ≤ 10 ans) et 5 000 000 FCFA (> 360 000 FCFA) correspond exactement à la qualification de DÉLIT.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Seuil du Crime',
            stepTheme: 'Peines criminelles (> 10 ans)',
            stepTitle: 'Identifier le critère du crime au Code pénal',
            paragraphText:
              "L'Article 3 et l'Article 10 du Code pénal ivoirien qualifient de crime toute infraction passible d'une peine privative de liberté perpétuelle ou temporaire strictement supérieure à dix (10) ans.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'À partir de quel seuil de peine privative de liberté une infraction est-elle qualifiée de CRIME selon l’Article 3 du Code pénal ivoirien ?',
              options: [
                'À partir de 6 mois de prison',
                'À partir de 5 ans de prison',
                'Au-delà de 10 ans de prison (peine temporaire supérieure à 10 ans ou perpétuelle)',
                'Dès que l’amende dépasse 360 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le crime correspond aux peines privatives de liberté perpétuelles ou temporaires strictement supérieures à 10 ans.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Art. 5 Code pénal',
            stepTheme: 'Invariabilité de la qualification',
            stepTitle: 'Les circonstances atténuantes changent-elles la nature de l’infraction ?',
            paragraphText:
              "Piège classique d'examen : selon l'Article 5 du Code pénal ivoirien, le jeu de la récidive, des excuses ou des circonstances atténuantes NE MODIFIE PAS la nature (crime, délit ou contravention) de l'infraction, qui dépend toujours du maximum légal encouru.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Un auteur de cyberdélit (passible de 5 ans) bénéficie de circonstances atténuantes et n’est condamné qu’à 1 mois de prison. D’après l’Article 5 du Code pénal, son infraction devient-elle une contravention ?',
              options: [
                'Non : la nature légale de l’infraction ne change jamais du fait des circonstances atténuantes, des excuses ou de la récidive',
                'Oui : elle se transforme immédiatement en contravention',
                'Oui : elle disparaît totalement du casier judiciaire',
                'Elle devient automatiquement un crime',
              ],
              correctAnswerIndex: 0,
              explanation:
                "L'Article 5 est formel : la qualification légale (crime/délit/contravention) reste inchangée malgré la récidive, les excuses ou les circonstances atténuantes.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Art. 6 Code pénal',
            stepTheme: 'Peine vs Mesure de sûreté',
            stepTitle: 'Opposer la finalité de la peine et celle de la mesure de sûreté',
            paragraphText:
              "L'Article 6 du Code pénal distingue deux réponses : la PEINE a pour but la répression de l'infraction commise et l'amendement de son auteur ; la MESURE DE SÛRETÉ a un but exclusivement PRÉVENTIF visant à écarter un danger certain pour la société.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Selon l’Article 6 du Code pénal ivoirien, quelle est la finalité spécifique d’une « mesure de sûreté » par rapport à une peine ?',
              options: [
                'Indemniser financièrement la victime à la place de l’assureur',
                'Remplacer la loi par un contrat commercial',
                'Récompenser un complice',
                'Prévenir par des moyens appropriés toute infraction de la part d’une personne présentant un danger certain pour la société',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La peine réprime et vise l’amendement ; la mesure de sûreté est tournée vers la prévention d’un état dangereux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Art. 7 à 9 Code pénal',
            stepTheme: 'Peines principales et complémentaires',
            stepTitle: 'Régime des peines complémentaires obligatoires',
            paragraphText:
              "Une peine est principale lorsqu'elle constitue la sanction essentielle, et complémentaire lorsqu'elle s'y adjoint. En vertu de l'Article 9, les peines complémentaires et mesures de sûreté OBLIGATOIRES s'appliquent de plein droit, même si le juge a omis de les prononcer expressément.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Que prévoit l’Article 9 du Code pénal ivoirien lorsqu’une peine complémentaire obligatoire n’a pas été expressément prononcée par le juge dans son jugement ?',
              options: [
                'Elle s’applique tout de même de plein droit comme conséquence de la peine principale',
                'Elle est définitivement annulée au profit du condamné',
                'Elle est remplacée par une amende de 360 000 FCFA',
                'Le procès entier est nul et doit recommencer',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Bien que toute peine doive en principe être expressément prononcée, l'Article 9 dispose que les peines complémentaires et mesures de sûreté obligatoires s'appliquent de plein droit.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Art. 11 Code pénal',
            stepTheme: 'Excuses absolutoire et atténuante',
            stepTitle: 'Distinguer les deux types d’excuses légales',
            paragraphText:
              "Aux termes de l'Article 11 du Code pénal, une excuse est un état ou circonstance limitativement prévu par la loi qui, SANS FAIRE DISPARAÎTRE l'infraction, entraîne soit une dispense/exemption de peine (excuse absolutoire), soit une atténuation obligatoire de la peine (excuse atténuante).",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Selon l’Article 11 du Code pénal ivoirien, quel effet produit une « excuse absolutoire » ?',
              options: [
                'Elle double automatiquement la peine d’emprisonnement',
                'Elle entraîne une dispense ou exemption de peine sans faire disparaître juridiquement l’infraction',
                'Elle réduit la peine de moitié seulement',
                'Elle transforme une contravention en crime',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'excuse absolutoire dispense l'auteur de la peine tout en laissant subsister l'existence de l'infraction (contrairement à l'excuse atténuante qui réduit obligatoirement la peine).",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_droit_numerique_ch3_p2',
        order: 2,
        title: 'Coopération internationale et Convention de Budapest sur la cybercriminalité (STE n° 185)',
        summary:
          "Analyser les fondements, les quatre grands volets (incriminations harmonisées, pouvoirs de procédure, coopération internationale et équilibre avec les droits humains) de la Convention de Budapest du 23 novembre 2001.",
        conceptExplanation:
          "Parce que les réseaux informatiques sont mondialisés, un cybercriminel peut attaquer depuis un pays A un serveur situé dans un pays B appartenant à une victime du pays C, tout en détruisant les preuves numériques en quelques secondes. Pour répondre à ce défi transfrontalier, la Convention sur la cybercriminalité du Conseil de l'Europe (STE n° 185), signée à Budapest le 23 novembre 2001 — ouverte aussi aux États non membres du Conseil de l'Europe —, constitue le premier traité international de référence en matière pénale numérique.\n\nSon préambule et son architecture reposent sur 4 piliers majeurs :\n1) Politique pénale commune et incrimination harmonisée : prévenir et réprimer les actes portant atteinte à la confidentialité, l'intégrité et la disponibilité des systèmes, réseaux et données informatiques, ainsi que leur usage frauduleux (accès illégal, interception illégale, atteinte aux données et systèmes, falsification et fraude informatiques, atteintes liées au contenu comme la pédopornographie et les atteintes au droit d'auteur).\n2) Pouvoirs procéduraux adaptés à la preuve électronique : doter les autorités d'enquête (comme la PLCC en Côte d'Ivoire) d'outils rapides pour conserver, perquisitionner et saisir des données informatiques volatiles et des données de trafic avant qu'elles ne disparaissent.\n3) Coopération internationale pénale rapide, fiable et accrue : entraide judiciaire, extradition, conservation urgente de données stockées à l'étranger et réseau de points de contact disponibles 24h/24 et 7j/7, ainsi que coopération entre les États et l'industrie privée.\n4) Équilibre indispensable avec les droits fondamentaux : le préambule rappelle explicitement que l'action répressive doit respecter les droits de l'homme fondamentaux (CEDH 1950, Pacte ONU 1966, Convention 108 de 1981 sur les données personnelles) — liberté d'opinion et d'expression, droit au respect de la vie privée et protection des droits de l'enfant.",
        formulas: [
          {
            name: 'Les 4 piliers de la Convention de Budapest (STE n° 185 — 23 nov. 2001)',
            formula: '1. Incriminations harmonisées (CIA & fraude)  ·  2. Procédure & preuve numérique  ·  3. Coopération internationale rapide  ·  4. Respect des droits humains',
            note: 'Premier traité international contraignant sur la cybercriminalité, ouvert au-delà de l’Europe.',
          },
        ],
        keyRule:
          "Convention de Budapest (23 nov. 2001, STE n° 185, Conseil de l'Europe) = politique pénale commune contre la cybercriminalité + pouvoirs d'investigation sur preuves volatiles + coopération internationale rapide États/industrie privée + équilibre strict avec les droits de l'homme et la vie privée.",
        workedExample: {
          title: 'Cyberattaque transfrontalière contre une banque abidjanaise',
          statement:
            "Une banque ivoirienne subit un piratage dont les attaquants utilisent des serveurs relais situés dans deux pays européens et un pays d'Afrique de l'Ouest. Expliquer comment l'esprit et les mécanismes de la Convention de Budapest (STE n° 185) permettent d'élucider l'affaire tout en protégeant les libertés.",
          methodSteps: [
            "Étape 1 (Harmonisation des incriminations) : Les comportements (accès illégal, atteinte à l'intégrité et fraude informatique) sont qualifiés d'infractions dans tous les États parties, facilitant la double incrimination pour l'extradition et l'entraide.",
            "Étape 2 (Conservation rapide des preuves volatiles) : Les enquêteurs demandent via les points de contact 24/7 la conservation urgente des journaux de connexion et données de trafic sur les serveurs étrangers avant leur effacement.",
            "Étape 3 (Coopération État–industrie privée et garanties) : Les fournisseurs d'accès coopèrent dans un cadre légal strict garantissant l'équilibre entre efficacité répressive, vie privée et droits humains fondamentaux.",
          ],
          conclusion:
            "La Convention de Budapest comble les failles de la territorialité grâce à une coopération internationale rapide, encadrée par les droits fondamentaux.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Convention de Budapest',
            stepTheme: 'Date, origine et nature (STE n° 185)',
            stepTitle: 'Identifier la Convention de Budapest sur la cybercriminalité',
            paragraphText:
              "Adoptée le 23 novembre 2001 sous l'égide du Conseil de l'Europe (STE n° 185) et ouverte à l'adhésion d'États du monde entier, la Convention de Budapest vise à mener une politique pénale commune contre la cybercriminalité et à renforcer la coopération internationale.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Sous l’égide de quelle organisation et en quelle année a été ouverte à la signature la Convention de Budapest sur la cybercriminalité (STE n° 185) ?',
              options: [
                'L’Organisation Mondiale du Commerce en 1995',
                'Le Conseil de l’Europe le 23 novembre 2001',
                'La BCEAO en 2013',
                'L’Union Africaine en 2024',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Convention sur la cybercriminalité (STE n° 185) a été conclue à Budapest le 23 novembre 2001 au sein du Conseil de l’Europe, tout en étant ouverte aux États non européens.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Objet pénal',
            stepTheme: 'Protection CIA des systèmes et données',
            stepTitle: 'Quels actes le préambule de Budapest vise-t-il prioritairement ?',
            paragraphText:
              "Le préambule de la Convention de Budapest souligne la nécessité de prévenir et d'incriminer les actes portant atteinte à la confidentialité, à l'intégrité et à la disponibilité des systèmes informatiques, des réseaux et des données, ainsi que l'usage frauduleux de ces systèmes.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quels trois attributs des systèmes informatiques, réseaux et données la Convention de Budapest vise-t-elle explicitement à protéger contre les cyberattaques ?',
              options: [
                'La rentabilité, la liquidité et la solvabilité',
                'La taille, le poids et le prix de vente',
                'La confidentialité, l’intégrité et la disponibilité',
                'La centralisation, la hiérarchie et la bureaucratie',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le préambule de la Convention de Budapest cite expressément la confidentialité, l’intégrité et la disponibilité des systèmes, réseaux et données informatiques.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Coopération',
            stepTheme: 'Coopération interétatique et secteur privé',
            stepTitle: 'Pourquoi associer l’industrie privée à la lutte contre la cybercriminalité ?',
            paragraphText:
              "Le préambule de la Convention de Budapest reconnaît explicitement la nécessité d'une coopération non seulement entre États (entraide pénale rapide et fiable), mais aussi entre les États et l'INDUSTRIE PRIVÉE (opérateurs télécoms, hébergeurs, éditeurs de logiciels), car les infrastructures et preuves transitent par des acteurs privés.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Outre la coopération internationale entre États, quel partenariat essentiel est expressément souligné par le préambule de la Convention de Budapest ?',
              options: [
                'La coopération entre les États et l’industrie privée (tout en protégeant les intérêts légitimes liés aux TIC)',
                'L’exclusion complète des entreprises privées de toute enquête',
                'La privatisation de tous les tribunaux pénaux',
                'La suppression des frontières douanières physiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Les réseaux étant majoritairement opérés par le secteur privé, la Convention insiste sur la coopération entre les États et l'industrie privée.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Droits fondamentaux',
            stepTheme: 'Équilibre répression / libertés',
            stepTitle: 'La lutte contre la cybercriminalité autorise-t-elle toute atteinte aux libertés ?',
            paragraphText:
              "Non ! Le préambule de Budapest insiste sur la nécessité de garantir un « équilibre adéquat » entre les intérêts de l'action répressive et le respect des droits de l'homme fondamentaux : liberté d'opinion et d'expression, droit au respect de la vie privée, protection des données personnelles (Convention de 1981) et droits de l'enfant.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel équilibre fondamental le préambule de la Convention de Budapest impose-t-il aux États dans la lutte contre la cybercriminalité ?',
              options: [
                'Suspendre définitivement la liberté d’expression sur Internet',
                'Privilégier la surveillance illimitée sans contrôle judiciaire',
                'Remplacer le droit à la vie privée par la publicité commerciale',
                'Garantir un équilibre adéquat entre l’action répressive et le respect des droits de l’homme fondamentaux (vie privée, liberté d’expression, données personnelles)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les pouvoirs d’investigation numérique doivent toujours respecter la proportionnalité, la vie privée, la liberté d’expression et la protection des données personnelles.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Preuves volatiles',
            stepTheme: 'Spécificité des enquêtes numériques',
            stepTitle: 'Pourquoi la rapidité de coopération est-elle cruciale en droit pénal numérique ?',
            paragraphText:
              "Dans l'espace numérique, les traces d'une infraction (adresses IP, logs de connexion, fichiers stockés sur un serveur étranger) peuvent être effacées ou déplacées en quelques secondes. La Convention de Budapest prévoit donc des mesures procédurales et d'entraide rapides pour détecter, conserver et saisir ces preuves électroniques.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle caractéristique des preuves stockées et transmises par les réseaux informatiques justifie l’urgence de la coopération internationale prévue par la Convention de Budapest ?',
              options: [
                'Leur caractère volatil et transfrontalier : elles peuvent être modifiées ou effacées très rapidement à distance',
                'Leur poids physique excessif lors du transport par avion',
                'Leur conservation naturelle et inaltérable pendant cent ans',
                'Le fait qu’elles n’existent que sur papier timbré',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La volatilité et la dispersion internationale des preuves numériques exigent des mécanismes de conservation urgente et d’entraide pénale accélérée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Références croisées',
            stepTheme: 'Convention 108 (1981) et droits de l’enfant',
            stepTitle: 'Relier la Convention de Budapest aux autres traités internationaux',
            paragraphText:
              "Le préambule de la Convention de Budapest se réfère expressément à plusieurs textes internationaux : la CEDH (1950), le Pacte international relatif aux droits civils et politiques de l'ONU (1966), la Convention 108 du Conseil de l'Europe (1981) sur la protection des données personnelles et la Convention des Nations Unies relative aux droits de l'enfant.",
            exercise: {
              id: 'lmd_entd_l1_droit_numerique_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quel texte international de 1981 relatif à la protection des données personnelles est cité à la fois comme source d’inspiration de la Loi ivoirienne 2013-450 et dans le préambule de la Convention de Budapest ?',
              options: [
                'Le traité de Maastricht',
                'La Convention 108 du Conseil de l’Europe (1981) sur la protection des données à caractère personnel',
                'La Charte olympique',
                'Le protocole de Kyoto',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La Convention 108 du Conseil de l'Europe (1981) pour la protection des personnes à l'égard du traitement automatisé des données à caractère personnel est une référence fondatrice citée dans les deux supports.",
            },
          },
        ],
      }),
    ],
  },
];
