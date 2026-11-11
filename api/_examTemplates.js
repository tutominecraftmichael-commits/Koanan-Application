/**
 * MODÈLES DE SUJETS DE DEVOIR (2 h) — FORMATS OFFICIELS DE CÔTE D'IVOIRE (APC)
 * ============================================================================
 * C'est ICI qu'on ajoute ou modifie un modèle de sujet et son barème, matière par matière.
 * KONAN génère chaque sujet en suivant EXACTEMENT ce modèle (structure, points, types d'exercices),
 * puis corrige la copie de l'élève avec le barème du sujet généré.
 *
 * Sources officielles (Direction de la Pédagogie et de la Formation Continue, dpfc-ci.net) :
 *  - Mathématiques : « Formats des évaluations en mathématiques au second cycle scientifique »
 *    et « … au second cycle littéraire » (CPN du 27 novembre 2019), devoir de 2 h ;
 *    grille de la situation complexe : « Format du Bac série D » (CPN de Mathématiques).
 *  - Physique-Chimie : « Format Physique-Chimie » (DPFC) : exercice 1 de tests objectifs (8 pts),
 *    exercice 2 (7 pts) et exercice 3 (5 pts) en situations. (Pas de format publié propre à la
 *    Seconde : on applique ce format officiel APC, adapté au programme de 2nde.)
 *  - SVT : « Format SVT » (DPFC) : exercices 1 et 2 de tests objectifs (6 + 6 pts),
 *    exercice 3 = situation d'évaluation (8 pts). (Même remarque pour la Seconde.)
 *
 * POUR AJOUTER UN MODÈLE : copier un bloc ci-dessous, changer la clé (identifiant de matière KONAN :
 * maths, physique_chimie, svt, francais, histoire_geo, philosophie) et remplir les champs.
 * Les points des exercices doivent faire 20 au total.
 *
 * POUR DONNER DES EXEMPLES OFFICIELS : coller le texte d'un vrai sujet dans « exemples » (tableau de textes).
 * KONAN s'en sert comme modèle de style (formulation, présentation) sans le recopier.
 */

/** Règles communes à tous les sujets ivoiriens (APC). */
export const COMMON_STYLE_RULES = [
  "Rédige en français, en tutoyant l'élève (« Calcule », « Détermine », « Justifie », « Recopie… »), comme les sujets officiels APC de Côte d'Ivoire.",
  'Contextes ancrés en Côte d’Ivoire (villes, lycées, marchés, prénoms ivoiriens : Kouassi, Aya, Yao, Adjoua, Koffi, Awa, Tokolo…).',
  'Chaque exercice a un titre « EXERCICE n (x points) » et chaque question numérotée (1., 2., 2.1., …) a ses points.',
  'Les données numériques utiles sont regroupées à la fin de l’énoncé sous « Données : ».',
  'Les formules et unités mathématiques sont écrites en LaTeX entre $…$ (ex : $v = \\dfrac{d}{t}$, $10^{-3}$).',
  'Les questions portent UNIQUEMENT sur les chapitres fournis et restent au niveau de la classe indiquée.',
  'Le sujet doit pouvoir être traité en 2 heures sur une feuille de copie. Aucune figure à recopier : décris-la en mots si besoin.',
  'Le corrigé donne la réponse attendue et les points de chaque question ; la somme des points de chaque exercice est exacte.',
  "N'écris jamais « Évaluation des ressources » ni « Évaluation des compétences » (format d'un autre pays) : seulement « EXERCICE n ».",
  "Ne commence pas les questions par « QCM : » ou « Vrai ou Faux : » : la consigne commune de chaque série d'items est écrite UNE fois (dans « consigne » ou en tête du groupe), comme sur les sujets officiels.",
  'Pour un QCM, chaque proposition a), b), c) est sur sa propre ligne.',
  'N’utilise pas de barre oblique « / » entre deux mots (écris « trajectoire ; constante ») : la barre oblique est réservée aux formules et unités.',
];

/** Grille officielle de correction d'une situation complexe (Mathématiques, CPN). */
export const SITUATION_COMPLEXE_GRID = [
  { critere: 'CM1 : Pertinence', indicateurs: "Identification du modèle correspondant au problème posé (interprétation correcte de la situation, choix pertinents sur les données).", points: 0.75 },
  { critere: 'CM2 : Utilisation correcte des outils mathématiques', indicateurs: 'Choix des outils appropriés, application correcte des propriétés, règles et définitions, exactitude des calculs, justesse de l’argumentation.', points: 2.5 },
  { critere: 'CM3 : Cohérence de la réponse', indicateurs: 'Cohérence entre les étapes de la démarche ; le résultat produit est conforme au résultat attendu.', points: 1.25 },
  { critere: 'CP : Critère de perfectionnement', indicateurs: 'Concision, originalité, présentation soignée.', points: 0.5 },
];

export const EXAM_TEMPLATES = {
  maths: {
    matiere: 'Mathématiques',
    duree: '2 h',
    source: 'DPFC – Formats des évaluations en mathématiques au second cycle (CPN du 27/11/2019) : devoir de 2 h',
    exercices: [
      {
        numero: 1,
        points: 2,
        nature: 'Test objectif (niveau taxonomique 1 ou 2)',
        consignes: "Tableau de 4 énoncés avec trois réponses A, B, C dont une seule est vraie. Consigne officielle : « Écris sur ta feuille de copie, le numéro de l'énoncé suivi de la lettre de la colonne qui donne l'affirmation vraie. Par exemple, pour l'énoncé 1, si la bonne réponse est B, tu écriras 1-B. » 0,5 point par énoncé. Utilise le champ tableau.",
      },
      {
        numero: 2,
        points: 2,
        nature: 'Test objectif (niveau taxonomique 1, 2 ou 3)',
        consignes: "4 propositions à juger. Consigne officielle : « Écris sur ta feuille de copie, le numéro de chaque proposition suivi de Vrai si la proposition est vraie, ou de Faux si la proposition est fausse. » 0,5 point par proposition. Porte sur d'autres leçons que les exercices 3, 4 et 5 si possible.",
      },
      {
        numero: 3,
        points: 5,
        nature: 'Exercice de renforcement (niveaux 2 ou 3) — NON contextualisé',
        consignes: "Plusieurs habiletés d'une même leçon, questions guidées et progressives (1., 2.a., 2.b., …).",
      },
      {
        numero: 4,
        points: 6,
        nature: "Exercice de renforcement ou d'approfondissement (niveaux 2 ou 3) — NON contextualisé",
        consignes: 'Porte sur une autre compétence/leçon que l’exercice 3 ; questions guidées et progressives.',
      },
      {
        numero: 5,
        points: 5,
        nature: 'Situation complexe (niveau « Traiter une situation »)',
        consignes: "Un texte de situation ivoirienne concrète (un élève, un commerçant, une coopérative…) qui pose UN problème, SANS questions intermédiaires, terminé par la consigne officielle : « À l'aide d'une production argumentée basée sur tes connaissances mathématiques, … ». Noté avec la grille CM1/CM2/CM3/CP (0,75 + 2,5 + 1,25 + 0,5).",
        grille: SITUATION_COMPLEXE_GRID,
      },
    ],
    notesClasse: {
      seconde_a: 'Seconde A (littéraire) : deux compétences seulement — calculs algébriques et fonctions ; organisation et traitement des données (statistique). Calculs simples, pas de géométrie vectorielle.',
      seconde_c: 'Seconde C (scientifique) : calculs algébriques et fonctions ; statistique ; géométrie du plan et de l’espace et transformations (vecteurs, produit scalaire, homothétie, rotation…).',
    },
    exemples: [],
  },

  physique_chimie: {
    matiere: 'Physique-Chimie',
    duree: '2 h',
    source: 'DPFC – Format Physique-Chimie (exercice 1 : 8 pts de tests objectifs ; exercice 2 : 7 pts ; exercice 3 : 5 pts), adapté au programme de Seconde',
    exercices: [
      {
        numero: 1,
        points: 8,
        nature: 'Tests objectifs et questions à réponses courtes (niveaux connaissance et compréhension)',
        consignes: "Items variés sur les notions NON reprises dans les exercices 2 et 3 : QCM (« Recopie la lettre correspondant à la bonne réponse »), Vrai/Faux (« écris la lettre V si la proposition est vraie ou la lettre F si elle est fausse »), appariement (« Relie chaque grandeur à son unité » / « Associe… »), texte à compléter (« Recopie le texte en le complétant avec les mots suivants : … »). Si les chapitres couvrent la physique ET la chimie : partie Physique (5 pts) puis partie Chimie (3 pts).",
      },
      {
        numero: 2,
        points: 7,
        nature: "Situation d'évaluation (réponses élaborées)",
        consignes: "Contexte ivoirien (séance de travaux pratiques au lycée, vie quotidienne…), données (tableau de mesures possible), puis 3 à 5 consignes numérotées respectant la gradation taxonomique (Nomme, Indique, Calcule, Détermine, Déduis-en…). Porte sur un chapitre de physique si les chapitres en contiennent.",
      },
      {
        numero: 3,
        points: 5,
        nature: "Situation d'évaluation (réponses élaborées)",
        consignes: "Autre contexte ivoirien concret (santé, environnement, industrie locale…), consignes numérotées, réponses construites. Porte sur un chapitre de chimie si les chapitres en contiennent, sinon sur un autre chapitre que l’exercice 2.",
      },
    ],
    notesClasse: {
      seconde_a: 'Seconde A : programme allégé (élément chimique, atome, classification, ions et molécules, mole, équation-bilan, solutions ioniques, tests d’ions ; mouvement, équilibre d’un solide).',
      seconde_c: 'Seconde C : programme complet de chimie et de physique (mécanique, électricité) de la classe.',
    },
    exemples: [],
  },

  svt: {
    matiere: 'Sciences de la Vie et de la Terre',
    duree: '2 h',
    source: 'DPFC – Format SVT (exercices 1 et 2 : tests objectifs, 6 pts chacun ; exercice 3 : situation d’évaluation, 8 pts), adapté au programme de Seconde',
    exercices: [
      {
        numero: 1,
        points: 6,
        nature: 'Tests objectifs (niveaux connaissance et compréhension)',
        consignes: "Items : QCM, appariement (« Associe chaque terme à sa définition en utilisant les lettres d'une part et les chiffres d'autre part »), Vrai/Faux, réarrangement (« Range dans l'ordre chronologique… »), texte à trous, ou « Réécris les phrases en utilisant uniquement les informations correctes ».",
      },
      {
        numero: 2,
        points: 6,
        nature: 'Tests objectifs (niveaux connaissance et compréhension)',
        consignes: "Autre leçon que l'exercice 1 ; types d'items différents de l'exercice 1 (ex. « Relève parmi les affirmations… », « Choisis parmi… »).",
      },
      {
        numero: 3,
        points: 8,
        nature: "Situation d'évaluation",
        consignes: "Un contexte + des circonstances (scène vécue en Côte d'Ivoire : élèves, infirmerie, champ, sortie géologique…), puis des consignes simples, claires et précises à réponses construites, en gradation taxonomique (Annote/Identifie, Décris, Explique, Propose…). Si un schéma est utile, décris-le précisément en mots.",
      },
    ],
    notesClasse: {
      seconde_a: 'Seconde A : message nerveux et hormonal, environnement, photosynthèse, changement climatique, cellule, mitose, comportements alimentaires.',
      seconde_c: 'Seconde C : géologie de la Côte d’Ivoire, roches, écosystème, changement climatique, cellule et division, absorption chez la plante.',
    },
    exemples: [],
  },

  /*
   * HISTOIRE-GÉOGRAPHIE — « Format Hist-Géo » (DPFC) : exercice 1 tests objectifs (4 pts),
   * exercice 2 commentaire de document ou situation d'évaluation (10 pts), exercice 3 activité de construction (6 pts).
   * Ce format est publié pour le 1er cycle ; aucun format propre à la Seconde n'est publié : on l'applique,
   * avec le commentaire de document enseigné en 2nde (leçon « méthodologie de la dissertation et du commentaire »).
   */
  histoire_geo: {
    matiere: 'Histoire-Géographie',
    duree: '2 h',
    reglesMatiere: [
      'Pas de LaTeX ni de signe $ : écris les nombres et les unités en clair (« 1 cm pour 50 mm », « 250 mm », « XVe siècle »).',
      "N'écris jamais toi-même les numéros de ligne du texte (ni « 1. », ni « Ligne 1 : ») : KONAN les ajoute à l'affichage.",
    ],
    source: 'DPFC – Format Hist-Géo (exercice 1 : tests objectifs, 4 pts ; exercice 2 : commentaire de document, 10 pts ; exercice 3 : activité de construction, 6 pts), adapté au programme de Seconde',
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Tests objectifs (connaissances)',
        consignes: "Deux séries d'items de 2 points : une en Histoire, une en Géographie (si les chapitres ne couvrent qu'une des deux, les deux séries portent sur celle-là). Types officiels : QCM (« Recopie la lettre de la bonne réponse »), Vrai/Faux (« écris V si l'affirmation est vraie ou F si elle est fausse »), appariement (« Relie chaque date à l'événement qui lui correspond »), texte à compléter avec une liste de mots, ou mise en ordre chronologique. 0,5 point par item.",
      },
      {
        numero: 2,
        points: 10,
        nature: 'Commentaire de document',
        texteNumerote: true,
        consignes: "Un document que TU rédiges pour ce devoir : texte historique ou géographique de 120 à 200 mots, écrit en lignes courtes (6 à 9 mots par ligne, une ligne par retour à la ligne, de préférence coupée à la fin d'un groupe de mots) car les lignes sont numérotées. Termine le texte par sa référence sur une ligne à part : « Texte rédigé pour KONAN d'après le cours (thème, période étudiée) », sans année de rédaction ; n'attribue jamais le texte à un auteur réel. Mets le texte dans « contexte ». Puis 3 ou 4 consignes en gradation : présentation du document (nature, thème, contexte), compréhension (relève, identifie, citant les lignes), explication (« Explique… »), apport personnel ou intérêt du document (« Montre l'intérêt… », « Es-tu d'accord… ? Justifie »).",
      },
      {
        numero: 3,
        points: 6,
        nature: 'Activité de construction',
        consignes: "Une construction faisable sur une feuille de copie SANS fond de carte : soit un graphique (diagramme en bâtons, courbe ou diagramme circulaire) à partir d'un tableau statistique donné dans « tableau », soit une frise chronologique à partir d'une liste de dates et d'événements donnée dans « donnees ». Question 1 : la construction (4 pts), notée sur le titre, l'échelle, l'exactitude des données, la légende et le soin. Question 2 : une ou deux questions d'exploitation (2 pts) (« Décris l'évolution… », « Explique… »). Le corrigé décrit la construction attendue (titre, échelle, valeurs) et la réponse attendue.",
      },
    ],
    notesClasse: {
      seconde_a: 'Seconde (A et C, même programme) : Histoire — histoire et formation du citoyen, méthodes de l’histoire, préhistoire, Égypte ancienne, démocratie athénienne, empires du Soudan occidental, traites négrières, néolithique et peuplement de la Côte d’Ivoire. Géographie — la géographie et sa démarche, la planète Terre, la représentation de la Terre, milieux subéquatorial et tropical, environnement menacé, milieux biogéographiques, problèmes environnementaux.',
      seconde_c: 'Seconde (A et C, même programme) : Histoire — histoire et formation du citoyen, méthodes de l’histoire, préhistoire, Égypte ancienne, démocratie athénienne, empires du Soudan occidental, traites négrières, néolithique et peuplement de la Côte d’Ivoire. Géographie — la géographie et sa démarche, la planète Terre, la représentation de la Terre, milieux subéquatorial et tropical, environnement menacé, milieux biogéographiques, problèmes environnementaux.',
    },
    exemples: [],
  },

  /*
   * FRANÇAIS — pas de format officiel publié pour le devoir de Seconde (le « Format Français » de la DPFC
   * concerne le 1er cycle : orthographe et rédaction). Modèle KONAN validé par le fondateur, construit sur
   * les cours de 2nde de l'appli : compréhension d'un texte, outils de la langue, production écrite au choix
   * (commentaire composé ou expression écrite argumentative). La grille de la production écrite est celle de KONAN.
   */
  francais: {
    matiere: 'Français',
    duree: '2 h',
    source: 'Modèle KONAN pour la Seconde (la DPFC ne publie pas de format de devoir de Français propre au second cycle) : compréhension 5 pts, étude de la langue 5 pts, production écrite 10 pts',
    reglesMatiere: [
      "Le sujet s'appuie sur UN texte inédit que tu écris toi-même (aucun texte d'auteur réel, aucune citation inventée attribuée à un auteur réel) : prose ou poème de 150 à 250 mots, de qualité littéraire, sur un thème proche des élèves ivoiriens (famille, école, village, ville, fleuve, marché, amitié, tradition et modernité…).",
      "Écris le texte en lignes courtes (6 à 10 mots par ligne pour la prose ; un vers par ligne pour un poème) : les lignes sont numérotées et les questions peuvent citer « ligne 4 » ou « lignes 6 à 9 ». N'écris jamais toi-même les numéros de ligne (ni « 1. », ni « Ligne 1 : ») : KONAN les ajoute à l'affichage.",
      "Le texte contient des procédés à étudier (figures de style, connecteurs, champs lexicaux, marques d'énonciation, rythme ou sonorités pour un poème) en lien avec les chapitres fournis.",
      "Le texte se termine par sa référence sur une ligne à part : « Texte inédit écrit pour KONAN ».",
      'Pas de LaTeX ni de formules en Français.',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Compréhension du texte',
        texteNumerote: true,
        consignes: "Le TEXTE va dans « contexte » de cet exercice (il sert à tout le devoir) ; la consigne générale est « Lis attentivement le texte ci-dessus, puis réponds aux questions. ». 4 ou 5 questions : thème ou idée générale, situation d'énonciation (qui parle, à qui, où, quand), relevés justifiés, sens d'une expression du texte, sentiment ou intention de l'auteur. Réponses construites en phrases.",
      },
      {
        numero: 2,
        points: 5,
        nature: 'Étude de la langue et des outils d’analyse',
        consignes: "4 ou 5 questions sur le MÊME texte, uniquement sur les notions des chapitres fournis : identifier et donner l'effet d'une figure de style, relever un champ lexical, donner la valeur d'un connecteur, la fonction du langage dominante, les marques de l'énonciation, l'implicite, la versification (mesure d'un vers, rimes) si c'est un poème. Toujours « Relève… et indique l'effet produit » plutôt qu'une simple identification.",
      },
      {
        numero: 3,
        points: 10,
        nature: 'Production écrite (sujet au choix)',
        auChoix: true,
        consignes: "Consigne : « Traite UN des deux sujets au choix. ». Deux questions, chacune notée sur 10 points (numero « Sujet 1 » et « Sujet 2 ») : Sujet 1 = commentaire composé du texte (donne le libellé avec deux centres d'intérêt, puis demande de rédiger l'introduction et le premier centre d'intérêt) ; Sujet 2 = expression écrite argumentative sur un thème du texte (une opinion entre guillemets à étayer ou à réfuter : demande d'expliquer le sujet en une phrase, puis de rédiger un paragraphe argumentatif de 15 à 20 lignes avec un argument illustré d'un exemple). Le corrigé donne pour chaque sujet les idées attendues et un plan possible.",
        grille: [
          { critere: 'Compréhension du sujet et pertinence des idées', indicateurs: 'Le sujet est bien compris ; les idées ou les procédés relevés sont justes et expliqués.', points: 4 },
          { critere: 'Organisation', indicateurs: 'Introduction ou paragraphe structuré (idée, citation ou exemple, analyse), connecteurs logiques, progression claire.', points: 3 },
          { critere: 'Correction de la langue', indicateurs: 'Orthographe, accords, syntaxe, vocabulaire précis.', points: 2 },
          { critere: 'Présentation', indicateurs: 'Copie lisible, alinéas et sauts de ligne, citations entre guillemets.', points: 1 },
        ],
      },
    ],
    notesClasse: {
      seconde_a: 'Seconde A (littéraire) : niveau d’exigence plus élevé sur l’analyse et la rédaction.',
      seconde_c: 'Seconde C (scientifique) : même programme de Français ; questions claires et guidées.',
    },
    exemples: [],
  },
};

/*
 * ============================================================================
 * TERMINALE A (A1, A2) — DEVOIRS DE 2 H AU FORMAT DU BACCALAURÉAT
 * ============================================================================
 * Modèles À PART : ils ne servent QUE pour terminale_a1 / terminale_a2 (voir getExamTemplate).
 * Les modèles de Seconde ci-dessus ne changent pas.
 * Sources (vérifiées le 2026-11-10) :
 *  - Maths : DPFC, « Format du Bac série A1 » (3 h, coef. 3) et « série A2 » (2 h, coef. 2) : 5 exercices,
 *    tests objectifs 4 pts, renforcement/approfondissement 11 pts, situation complexe 5 pts (exemple officiel 2+2+4+7+5).
 *  - Français : sujet officiel du BAC 2023 et son corrigé-barème national (4 h) : « Le candidat traitera l'un des
 *    trois sujets » — 1) Questions (4) - Résumé (8) - Production écrite (8) ; 2) Commentaire composé ;
 *    3) Dissertation littéraire (introduction 3, développement 12, conclusion 3, présentation 2).
 *  - Philosophie : sujet officiel du BAC 2025 séries A1-A2 et son « barème chiffré » (4 h, coef. 5) : première partie
 *    4 pts (2 exercices obligatoires), deuxième partie 16 pts (dissertation OU commentaire de texte).
 *  - Histoire-Géographie : corrigé-barème du BAC blanc 2026 (DRENA Abidjan 2, 3 h 30) au format du BAC : première partie
 *    6 pts (Histoire 3 + Géographie 3), deuxième partie 14 pts (dissertation obligatoire 7 + un sujet au choix 7).
 *  - SVT : aucun format publié pour la série A : format DPFC SVT (6 + 6 + 8), adapté au programme de Terminale A.
 * Le devoir dure 2 h dans KONAN (chronomètre de l'appli) : la structure et les barèmes sont ceux du BAC.
 */
const TERMINALE_A_GRADES = ['terminale_a1', 'terminale_a2', 'terminale_a'];

const NO_REAL_AUTHOR_RULES = [
  "Tout texte d'étude est INÉDIT, écrit par toi pour ce devoir : n'attribue jamais un texte ni une citation à un auteur réel (pas de fausse citation). Termine chaque texte par la référence « Texte inédit écrit pour KONAN ».",
  "Dans le corrigé, tu peux citer des auteurs et des œuvres réels comme références de culture, mais seulement pour des idées connues et sûres, sans inventer de citation mot pour mot.",
  'Pas de LaTeX ni de signe $ : texte simple.',
];

export const TERMINALE_A_TEMPLATES = {
  maths: {
    matiere: 'Mathématiques',
    duree: '2 h',
    source: 'DPFC – Format de l’épreuve de Mathématiques au Baccalauréat, séries A1 et A2 (5 exercices : tests objectifs 4 pts, renforcement et approfondissement 11 pts, situation complexe 5 pts)',
    exercices: [
      {
        numero: 1,
        points: 2,
        nature: 'Test objectif (niveau taxonomique 1 ou 2)',
        consignes: "4 affirmations à juger, présentées dans le champ tableau (colonnes « N° » et « Affirmations »). Consigne officielle : « Dans cet exercice aucune justification n'est demandée. Écris sur ta copie le numéro de l'affirmation suivi de VRAI lorsque l'affirmation est vraie ou de FAUX lorsque l'affirmation est fausse. Exemple : 1. VRAI » 0,5 point par affirmation.",
      },
      {
        numero: 2,
        points: 2,
        nature: 'Test objectif (niveau taxonomique 1, 2 ou 3)',
        consignes: "Tableau de 4 lignes (colonnes « N° », « Énoncés », « A », « B », « C », « D ») : pour chaque ligne quatre réponses dont une seule est juste. Consigne officielle : « Pour chaque ligne du tableau ci-dessous quatre réponses A, B, C et D sont proposées dont une seule est juste. Écris sur ta feuille de copie le numéro de la ligne suivi de la lettre correspondant à la réponse juste. Exemple : 1. C » 0,5 point par ligne. Les tests objectifs portent sur des leçons non prises en compte par les exercices 3, 4 et 5.",
      },
      {
        numero: 3,
        points: 4,
        nature: 'Exercice de renforcement en test subjectif — NON contextualisé',
        consignes: "Plusieurs habiletés d'une même leçon, questions guidées et progressives (1., 2., 3.a., …), avec « Justifie que… », « Démontre que… », « Détermine… ».",
      },
      {
        numero: 4,
        points: 7,
        nature: "Exercice de renforcement ou d'approfondissement en test subjectif — NON contextualisé",
        consignes: "Souvent l'étude d'une fonction (limites, asymptotes, dérivée et variations, tableau de variation, tangente, tableau de valeurs) ou d'une suite, ou une statistique à deux variables ; questions guidées et progressives (1.a., 1.b., 2., …). Porte sur une autre leçon que l'exercice 3.",
      },
      {
        numero: 5,
        points: 5,
        nature: 'Situation complexe (niveau « Traiter une situation »)',
        consignes: "Un texte de situation ivoirienne concrète (kermesse, coopérative, épargne, commerce, élèves…) qui pose UN problème, SANS questions intermédiaires, terminé par la consigne officielle : « À l'aide d'une production argumentée basée sur tes connaissances mathématiques, … » (par exemple « donne ton avis sur l'affirmation de ces élèves »). Notée avec la grille CM1/CM2/CM3/CP (0,75 + 2,5 + 1,25 + 0,5).",
        grille: SITUATION_COMPLEXE_GRID,
      },
    ],
    notesClasse: {
      terminale_a1: "Terminale A1 : deux compétences — calculs algébriques et fonctions (limites, dérivation, étude de fonctions, logarithme népérien, exponentielle, suites arithmétiques et géométriques) ; modélisation de phénomènes aléatoires et traitement des données (probabilités, statistiques à deux variables : point moyen, droite de Mayer, moindres carrés). Pas de géométrie.",
      terminale_a2: "Terminale A2 : même programme que la A1, avec des calculs plus simples et plus guidés (au BAC, l'épreuve de la série A2 dure 2 h). Pas de géométrie.",
      terminale_a: "Terminale A : calculs algébriques et fonctions ; probabilités et statistiques. Pas de géométrie.",
    },
    exemples: [],
  },

  svt: {
    ...EXAM_TEMPLATES.svt,
    source: 'DPFC – Format SVT (exercices 1 et 2 : tests objectifs, 6 pts chacun ; exercice 3 : situation d’évaluation, 8 pts), adapté au programme de Terminale A (aucun format propre à la série A n’est publié)',
    notesClasse: {
      terminale_a1: 'Terminale A : réactions émotionnelles (stress, système nerveux et hormonal), activité cérébrale, origine de la vie, évolution de la lignée humaine, hérédité du sexe et des groupes sanguins, prévisions génétiques (échiquier, arbre généalogique), biosynthèse des protéines (code génétique).',
      terminale_a2: 'Terminale A : réactions émotionnelles (stress, système nerveux et hormonal), activité cérébrale, origine de la vie, évolution de la lignée humaine, hérédité du sexe et des groupes sanguins, prévisions génétiques (échiquier, arbre généalogique), biosynthèse des protéines (code génétique).',
      terminale_a: 'Terminale A : programme de SVT de la série littéraire (comportements, génétique humaine, évolution).',
    },
  },

  francais: {
    matiere: 'Français',
    duree: '2 h',
    source: 'Format du BAC (sujet et corrigé-barème national de la session 2023) : le candidat traite l’un des trois sujets — questions, résumé et production écrite ; commentaire composé ; dissertation littéraire',
    reglesMatiere: [
      ...NO_REAL_AUTHOR_RULES,
      'Mets le texte d’étude de chaque sujet DANS le texte de sa question (« Sujet 1 », « Sujet 2 »), avant les consignes, avec un retour à la ligne entre les paragraphes (et un vers par ligne pour un poème).',
      'Les thèmes sont proches des élèves ivoiriens et des œuvres du programme de Terminale (indépendances, tradition et modernité, condition de la femme, paix, solidarité, ville et village, école…).',
    ],
    exercices: [
      {
        numero: 1,
        points: 20,
        nature: 'Un sujet au choix parmi les trois sujets du BAC',
        auChoix: true,
        questionMax: 6000,
        consignes: [
          "Consigne officielle : « Le candidat traitera l'un des trois sujets. ». Trois questions, chacune notée sur 20 points : numero « Sujet 1 », « Sujet 2 », « Sujet 3 ».",
          "Sujet 1 = PREMIER SUJET : QUESTIONS - RÉSUMÉ - PRODUCTION ÉCRITE. Un texte argumentatif inédit de 300 à 400 mots, avec un titre, découpé en paragraphes, suivi de son nombre exact de mots (« 352 mots »). Puis : « I. QUESTIONS (04 points) 1. Identifiez la thèse de l'auteur. (02 points) 2. Expliquez en contexte l'expression : « … ». (02 points) » ; « II. RÉSUMÉ (08 points) Résumez ce texte de N mots au quart (¼) de son volume initial. Une marge de plus ou moins 10 % est tolérée. » ; « III. PRODUCTION ÉCRITE (08 points) Étayez (ou Réfutez, ou Discutez) cette affirmation : « … » » (une phrase tirée du texte).",
          "Sujet 2 = DEUXIÈME SUJET : COMMENTAIRE COMPOSÉ. Un poème inédit (16 à 28 vers courts, un vers par ligne, strophes séparées par une ligne vide) ou un extrait de prose inédit de 150 à 220 mots, puis le libellé officiel : « Faites un commentaire composé de ce texte. Étudiez d'une part …, et d'autre part … » (deux centres d'intérêt).",
          "Sujet 3 = TROISIÈME SUJET : DISSERTATION LITTÉRAIRE. Une affirmation sur la littérature ou l'écrivain, présentée comme l'opinion d'« un critique » (jamais une fausse citation d'un auteur réel), puis : « Expliquez et discutez cette affirmation à la lumière des œuvres littéraires lues ou étudiées. »",
          "CORRIGÉ : une entrée par sujet (question « Sujet 1 », « Sujet 2 », « Sujet 3 »), points 20, avec le barème national détaillé dans les étapes. Sujet 1 : thèse (2), explication de l'expression (2), résumé (8 : nombre de mots attendu avec la marge de 10 %, idées essentielles dans l'ordre, enchaînement logique, reformulation), production écrite (8 : introduction 2, développement 4, conclusion 2) ; donne les idées essentielles du texte et un plan possible. Sujets 2 et 3 : introduction 3 (amorce 1, présentation 1, annonce du plan 1), développement 12 (pertinence des idées ou des indices textuels et de leur interprétation 6, cohérence et enchaînement 3, qualité de l'expression 3), conclusion 3 (bilan 2, ouverture ou opinion 1), présentation et soin 2 ; donne les centres d'intérêt ou le plan attendu avec des exemples d'œuvres.",
        ].join(' '),
      },
    ],
    notesClasse: {
      terminale_a1: 'Terminale A1 (littéraire) : niveau du BAC, exigence élevée sur l’analyse et la rédaction.',
      terminale_a2: 'Terminale A2 (littéraire) : niveau du BAC, exigence élevée sur l’analyse et la rédaction.',
      terminale_a: 'Terminale A (littéraire) : niveau du BAC.',
    },
    exemples: [],
  },

  philosophie: {
    matiere: 'Philosophie',
    duree: '2 h',
    source: 'Format du BAC séries A1-A2 (sujet et barème chiffré nationaux de la session 2025) : première partie 4 pts (deux exercices obligatoires), deuxième partie 16 pts (dissertation ou commentaire de texte au choix)',
    reglesMatiere: [
      ...NO_REAL_AUTHOR_RULES,
      "Les questions portent sur les notions des chapitres fournis (conscience et inconscient, liberté, histoire, religion, langage, vérité, science, progrès, bonheur, vie en société, État…).",
    ],
    exercices: [
      {
        numero: 1,
        points: 2,
        nature: 'Première partie (obligatoire) : test objectif',
        consignes: "Consigne officielle : « Écris, sur ta feuille de copie, les lettres qui correspondent aux réponses justes. » Un énoncé (ex. « L'homme est objet de l'histoire signifie que : ») suivi de 4 propositions a), b), c), d), dont DEUX sont justes : 1 point par bonne lettre. Mets l'énoncé et les propositions dans « consigne » ou dans une question unique de 2 points.",
      },
      {
        numero: 2,
        points: 2,
        nature: 'Première partie (obligatoire) : test objectif',
        consignes: "Consigne officielle : « Écris, sur ta feuille de copie, V devant les chiffres des propositions vraies et F devant les chiffres des propositions fausses. » Un énoncé (ex. « Le droit positif est : ») suivi de 4 propositions numérotées 1- à 4- : 0,5 point par proposition (4 questions de 0,5 point).",
      },
      {
        numero: 3,
        points: 16,
        nature: 'Deuxième partie : un sujet au choix (dissertation ou commentaire de texte)',
        auChoix: true,
        questionMax: 5000,
        consignes: [
          "Consigne officielle : « Le candidat traitera l'un des deux (02) sujets au choix. ». Deux questions, chacune notée sur 16 points : numero « Sujet 1 » et « Sujet 2 ».",
          "Sujet 1 = DISSERTATION, présentée comme une situation : « À l'issue d'une discussion … ton camarade de classe … demande ton avis sur l'objet de leur débat qui est l'interrogation suivante : … ? » puis « Résous le problème que pose ce sujet dans une production argumentée. »",
          "Sujet 2 = COMMENTAIRE DE TEXTE : « L'un de tes camarades de classe découvre, au cours d'une de ses lectures, le texte ci-dessous qu'il a du mal à comprendre. Il te sollicite afin de l'aider à surmonter sa difficulté. » puis un texte philosophique inédit de 150 à 220 mots (une thèse claire, un raisonnement en deux mouvements), puis « Fais l'étude ordonnée de ce texte et dégage son intérêt philosophique. »",
          "CORRIGÉ : une entrée par sujet (« Sujet 1 », « Sujet 2 »), points 16, avec le barème chiffré officiel dans les étapes. Dissertation : définition des mots essentiels, problème à analyser, deux axes avec arguments et références ; barème introduction 3 (démarche conduisant au problème 1, problème pertinent et bien posé 2), développement 9 (pertinence des axes 1, pertinence et cohérence des arguments 3, culture philosophique 4, transition 1), conclusion 2 (bilan et pertinence de la réponse), style de l'ensemble 2. Commentaire : thème, problème, thèse, structure logique du texte (mouvements avec leurs lignes), intérêt philosophique (critique interne, critique externe avec deux axes) ; barème introduction 3 (thème 1, problème 1, thèse 1), étude ordonnée 5 (structure logique et technique d'explication 2, fidélité à la pensée de l'auteur 3), intérêt philosophique 5 (critique interne 1, critique externe 4), conclusion 1 (point de vue clairement exprimé), style 2.",
        ].join(' '),
      },
    ],
    notesClasse: {
      terminale_a1: 'Terminale A1 (coefficient 5 au BAC) : exigence élevée sur la problématisation et la culture philosophique.',
      terminale_a2: 'Terminale A2 (coefficient 5 au BAC) : exigence élevée sur la problématisation et la culture philosophique.',
      terminale_a: 'Terminale A : niveau du BAC.',
    },
    exemples: [],
  },

  histoire_geo: {
    matiere: 'Histoire-Géographie',
    duree: '2 h',
    reglesMatiere: [
      ...EXAM_TEMPLATES.histoire_geo.reglesMatiere,
      "Les documents d'étude sont des textes INÉDITS « rédigés pour KONAN d'après le cours » (jamais attribués à un auteur, un homme politique ou un journal réels), ou des tableaux statistiques plausibles.",
      "Si les chapitres fournis ne couvrent qu'une des deux disciplines, tout le devoir porte sur celle-là (la mention « en Histoire » ou « en Géographie » suit les chapitres).",
    ],
    source: 'Format du BAC (corrigé-barème du BAC blanc 2026, DRENA Abidjan 2) : première partie 6 pts (Histoire 3 + Géographie 3, obligatoires), deuxième partie 14 pts (dissertation obligatoire 7 + un sujet au choix 7)',
    exercices: [
      {
        numero: 1,
        points: 3,
        nature: 'Première partie (obligatoire) : Histoire, test objectif',
        consignes: "6 affirmations à 0,5 point, dans le champ tableau (colonnes « N° », « Affirmations », « Vrai », « Faux ») avec la consigne officielle : « Indique par une croix dans la case si l'affirmation est vraie ou fausse. » — ou un appariement (« Associe le numéro de chaque événement de la colonne A à la lettre de sa date dans la colonne B »).",
      },
      {
        numero: 2,
        points: 3,
        nature: 'Première partie (obligatoire) : Géographie, test objectif ou construction',
        consignes: "Soit 6 items à 0,5 point (vrai ou faux, appariement), soit une construction faisable sur la copie : courbes d'évolution ou diagramme en bâtons à partir d'un tableau statistique donné dans « tableau », avec l'échelle imposée dans « donnees » (ex. « 2 cm pour 1 année ; 1 cm pour 150 000 t »), notée sur le titre, l'échelle, l'exactitude, la légende et le soin.",
      },
      {
        numero: 3,
        points: 7,
        nature: 'Deuxième partie : dissertation (obligatoire)',
        consignes: "Consigne officielle : « Le candidat traitera obligatoirement le sujet de dissertation proposé en Histoire » (ou « en Géographie »). Une seule question (numero « 1 », 7 points) : le sujet, sous forme de question (« La Côte d'Ivoire peut-elle s'industrialiser ? ») ou d'affirmation à analyser. Le corrigé donne : introduction (généralité, problématique, annonce d'un plan en deux parties), le contenu attendu de chaque partie, la conclusion.",
        grille: [
          { critere: 'Rédaction correcte de l’introduction', indicateurs: 'Généralité, problématique, annonce du plan.', points: 1 },
          { critere: 'Première partie', indicateurs: 'Idées organisées autour d’un plan pertinent, connaissances exactes et précises.', points: 2.5 },
          { critere: 'Deuxième partie', indicateurs: 'Idées organisées autour d’un plan pertinent, connaissances exactes et précises.', points: 2.5 },
          { critere: 'Rédaction correcte de la conclusion', indicateurs: 'Bilan qui répond à la problématique, ouverture.', points: 0.5 },
          { critere: 'Bonne rédaction et transitions', indicateurs: 'Peu de fautes, syntaxe correcte, bonnes transitions entre les parties.', points: 0.5 },
        ],
      },
      {
        numero: 4,
        points: 7,
        nature: 'Deuxième partie : un sujet au choix parmi deux (dans l’autre discipline que la dissertation)',
        auChoix: true,
        questionMax: 5000,
        consignes: [
          "Consigne officielle : « Le candidat traitera un (01) sujet parmi les (02) sujets proposés en Géographie » (ou « en Histoire »). Deux questions, chacune notée sur 7 points : numero « Sujet 1 » et « Sujet 2 ». Chaque sujet contient DEUX documents courts (textes inédits de 60 à 110 mots, ou un texte et un tableau écrit en lignes), puis ses consignes avec leurs points.",
          "Sujet 1 = Situation d'évaluation : un contexte (« Lors d'un exposé… », « Ton camarade affirme… »), les deux documents, puis : dégage l'idée commune aux deux documents (2 pts) ; explique les propos « … » (3 pts) ; analyse … à travers les deux documents (2 pts).",
          "Sujet 2 = Commentaire de document : les deux documents, puis : précise l'idée commune aux deux documents (1 pt) ; explique le passage « … » (3 pts) ; apprécie l'affirmation « … » (3 pts).",
          "CORRIGÉ : une entrée par sujet (« Sujet 1 », « Sujet 2 »), points 7, qui reprend chaque consigne avec ses points et la réponse attendue (« toute réponse allant dans ce sens est acceptée »).",
        ].join(' '),
      },
    ],
    notesClasse: {
      terminale_a1: 'Terminale (programme commun A, C, D) : Histoire — le monde depuis 1945 (guerre froide, décolonisation, Côte d’Ivoire indépendante, Union africaine…) ; Géographie — économie de la Côte d’Ivoire, intégration régionale (CEDEAO, UEMOA), relations Nord-Sud, puissances économiques. Au BAC, la série A a un coefficient 3.',
      terminale_a2: 'Terminale (programme commun A, C, D) : Histoire — le monde depuis 1945 (guerre froide, décolonisation, Côte d’Ivoire indépendante, Union africaine…) ; Géographie — économie de la Côte d’Ivoire, intégration régionale (CEDEAO, UEMOA), relations Nord-Sud, puissances économiques. Au BAC, la série A a un coefficient 3.',
      terminale_a: 'Terminale : programme d’Histoire-Géographie du BAC.',
    },
    exemples: [],
  },
};

/**
 * Modèle de sujet pour une matière ET une classe : les Terminales A ont leurs modèles au format du BAC ;
 * toutes les autres classes (Seconde…) gardent les modèles ci-dessus, inchangés.
 */
export function getExamTemplate(subjectKey, gradeId) {
  if (TERMINALE_A_GRADES.includes(gradeId) && TERMINALE_A_TEMPLATES[subjectKey]) return TERMINALE_A_TEMPLATES[subjectKey];
  return EXAM_TEMPLATES[subjectKey] || null;
}
