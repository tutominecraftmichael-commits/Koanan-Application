/**
 * MODÈLES DE SUJETS D'EXAMEN ET DE DEVOIR SURVEILLÉ (2 h, /20) — FILIÈRE LMD ENTD LICENCE 1
 * ==========================================================================================
 * 24 modèles universitaires structurés (un par matière ENTD L1).
 * Chaque modèle impose une structure rigoureuse totalisant EXACTEMENT 20 points, adaptée
 * aux exigences de Licence 1 (questions de maîtrise conceptuelle, exercices techniques guidés,
 * études de cas chiffrées, juridiques, comptables ou stratégiques).
 *
 * Règle absolue : aucune mention d'établissement, de ministère, de TD ou de support externe.
 */

export const LMD_COMMON_RULES = [
  'Niveau Licence 1 universitaire (LMD) : ton académique rigoureux, clair et professionnel, vouvoiement ou impératif direct (« Calculez », « Démontrez », « Analysez », « Qualifiez »).',
  'Ne mentionne JAMAIS le nom d’un établissement, d’un ministère, d’un enseignant, d’un numéro de TD ou d’un document source externe.',
  'Contextes concrets ancrés dans l’économie numérique, les entreprises, les banques, les assurances et le droit en Côte d’Ivoire et en zone UEMOA/OHADA.',
  'Chaque exercice totalise exactement son nombre de points ; la somme de tous les exercices fait strictement 20 points.',
  'Fournis un corrigé complet, rigoureux et détaillé étape par étape pour chaque question.',
];

export const LMD_ENTD_L1_TEMPLATES = {
  // =========================================================================
  // LOT 1 — MATHÉMATIQUES, INFORMATIQUE & RÉSEAUX
  // =========================================================================
  lmd_analyse: {
    matiere: 'Analyse Mathématique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Analyse (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les expressions mathématiques en LaTeX ($...$). Exiger des justifications rigoureuses (théorèmes cités explicitement : bornes sup/inf, gendarmes, suites monotones/adjacentes, TVI, Rolle, TAF, L’Hôpital).',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Questions de cours et tests de rigueur analytique',
        consignes: '4 affirmations ou QCM courts (1 pt chacun) portant sur les bornes sup/inf, partie entière, voisinages, convergence des suites, continuité, dérivabilité ou convexité. Chaque réponse doit être brièvement justifiée (preuve ou contre-exemple).',
      },
      {
        numero: 2,
        points: 5,
        nature: 'Exercice sur les suites numériques et récurrence',
        consignes: 'Étude guidée d’une suite explicite ou récurrente $u_{n+1} = f(u_n)$ (ou suites adjacentes) : calcul des premiers termes, monotonie, majoration/minoration par récurrence, convergence et détermination de la limite via l’équation de point fixe.',
      },
      {
        numero: 3,
        points: 5,
        nature: 'Exercice sur les limites, équivalents et continuité',
        consignes: 'Calcul de 2 limites avec formes indéterminées (équivalents usuels, quantité conjuguée ou règle de L’Hôpital), prolongement par continuité en un point, et application du Théorème des Valeurs Intermédiaires (existence et unicité d’une solution).',
      },
      {
        numero: 4,
        points: 6,
        nature: 'Problème — Étude complète de fonction et application économique',
        consignes: 'Étude d’une fonction combinant $\\ln$, $\\exp$, puissance ou fonction réciproque ($\arctan$, $\\cosh$…) : domaine, dérivée, tableau de variation, asymptotes, convexité/point d’inflexion et application concrète (capitalisation continue, optimisation).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : nombres réels, bornes, partie entière, suites numériques & récurrentes, limites, équivalents, continuité, TVI, dérivabilité, Rolle, TAF, convexité, fonctions usuelles et réciproques.',
    },
    exemples: [],
  },

  lmd_algebre: {
    matiere: 'Algèbre',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Algèbre (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les formules en LaTeX ($...$). Exiger des démonstrations complètes (algorithme d’Euclide étendu, Bézout, Gauss, congruences, formes exponentielles complexes).',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Ensembles, applications et bijections',
        consignes: 'Opérations sur les ensembles ($\\cap, \\cup, \\setminus, \\Delta$) ou étude d’une application $f : E \\to F$ : déterminer si $f$ est injective, surjective, bijective, et calculer son application réciproque ou une image directe/réciproque.',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Arithmétique dans $\\mathbb{Z}$ et équation diophantienne',
        consignes: 'Calcul du $\\operatorname{pgcd}(a, b)$ par l’algorithme d’Euclide, recherche d’un couple de Bézout, puis résolution complète dans $\\mathbb{Z}^2$ d’une équation diophantienne $ax + by = c$ à l’aide du lemme de Gauss, avec application concrète.',
      },
      {
        numero: 3,
        points: 5,
        nature: 'Congruences, restes chinois et cryptographie',
        consignes: 'Calculs dans $\\mathbb{Z}/n\\mathbb{Z}$ (puissances modulaires via Fermat, inverse modulaire), résolution d’un système de congruences ou chiffrement/déchiffrement affine ou RSA sur petits entiers.',
      },
      {
        numero: 4,
        points: 5,
        nature: 'Nombres complexes',
        consignes: 'Mise sous forme algébrique et exponentielle $re^{i\\theta}$, utilisation de Moivre/Euler (linéarisation ou calcul de puissance), résolution d’une équation du second degré dans $\\mathbb{C}$ ou détermination des racines $n$-ièmes d’un nombre complexe.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : ensembles, applications injectives/surjectives/bijectives, divisibilité, Euclide, Bézout, Gauss, équations diophantiennes, congruences, Fermat, restes chinois, RSA, nombres complexes.',
    },
    exemples: [],
  },

  lmd_algorithmique: {
    matiere: 'Algorithmique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Algorithmique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Utiliser un pseudo-code français clair et cohérent : `DEBUT`, `FIN`, `SI ... ALORS ... SINON ... FINSI`, `SELON`, `TANTQUE ... FAIRE ... FINTANTQUE`, `REPETER ... JUSQU\'A`, `POUR i DE 1 A n FAIRE ... FINPOUR`, affectation `←`, `LIRE`, `ECRIRE`.',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Types, expressions booléennes et trace d’exécution',
        consignes: 'Évaluation d’expressions arithmétiques (`div`, `mod`) et booléennes (lois de De Morgan), puis table de trace étape par étape d’un court algorithme avec boucle (donner les valeurs successives des variables et l’affichage final).',
      },
      {
        numero: 2,
        points: 5,
        nature: 'Structures conditionnelles et itératives',
        consignes: 'Écrire un algorithme complet répondant à un besoin concret (facturation progressive, contrôle de saisie avec `REPETER`, calcul de somme/moyenne/compteur avec `TANTQUE` ou `POUR`).',
      },
      {
        numero: 3,
        points: 6,
        nature: 'Tableaux 1D / 2D, recherche et tri',
        consignes: 'Manipulation d’un tableau de $N$ valeurs (notes, ventes, transactions) : remplissage, calcul de statistiques (min, max, moyenne, seuil), recherche d’un élément ou tri simple, avec gestion propre des indices.',
      },
      {
        numero: 4,
        points: 5,
        nature: 'Fonctions, procédures et récursivité',
        consignes: 'Distinction passage par valeur vs par référence, écriture d’une fonction récursive (cas de base + appel récursif) et déroulement de sa pile d’appels sur une petite entrée.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : variables, types, div/mod, expressions booléennes, SI/SELON, TANTQUE/REPETER/POUR, tableaux 1D/2D, recherche et tri, procédures, fonctions et récursivité.',
    },
    exemples: [],
  },

  lmd_logique_math: {
    matiere: 'Logique et Raisonnement Mathématique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Logique Mathématique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Utiliser les symboles LaTeX standards : $\\neg, \\land, \\lor, \\implies, \\iff, \\forall, \\exists, \\exists!, \\in, \\subset, \\cap, \\cup, \\Delta$.',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Logique propositionnelle et tables de vérité',
        consignes: 'Construction d’une table de vérité (utiliser le champ `tableau`), vérification d’une tautologie ou équivalence logique (lois de De Morgan, distributivité), distinction implication/réciproque/contraposée et condition nécessaire/suffisante.',
      },
      {
        numero: 2,
        points: 5,
        nature: 'Prédicats, quantificateurs et négation',
        consignes: 'Traduction d’énoncés en langage formel (et inversement), écriture rigoureuse de la négation d’énoncés quantifiés imbriqués ($\\forall x \\exists y$ vs $\\exists y \\forall x$), et détermination de leur valeur de vérité avec preuve ou contre-exemple.',
      },
      {
        numero: 3,
        points: 6,
        nature: 'Modes de raisonnement (contraposée, absurde, récurrence)',
        consignes: 'Deux courtes démonstrations guidées : (1) une preuve par contraposée ou par l’absurde ; (2) une preuve complète par récurrence (initialisation, hérédité, conclusion) sur une somme ou une inégalité.',
      },
      {
        numero: 4,
        points: 5,
        nature: 'Ensembles et relations binaires',
        consignes: 'Étude d’une relation binaire $\\mathcal{R}$ sur un ensemble : vérifier réflexivité, symétrie, antisymétrie et transitivité ; identifier une relation d’équivalence (classes d’équivalence) ou d’ordre (total ou partiel).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : connecteurs logiques, tables de vérité, De Morgan, prédicats, quantificateurs, modes de raisonnement (direct, contraposée, absurde, disjonction, récurrence), ensembles et relations binaires.',
    },
    exemples: [],
  },

  lmd_stat_descriptive: {
    matiere: 'Statistique Descriptive',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Statistique Descriptive (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Fournir toutes les données brutes dans des tableaux propres (`tableau`). Exiger la formule littérale avant toute application numérique, et préciser l’arrondi attendu (ex. $10^{-2}$).',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Questions de cours et pièges statistiques',
        consignes: '4 questions courtes (1 pt chacune) sur la typologie des variables (qualitative nominale/ordinale, quantitative discrète/continue), le choix du graphique adapté, la correction de densité en classes inégales, ou la distinction corrélation vs causalité.',
      },
      {
        numero: 2,
        points: 8,
        nature: 'Étude d’une série statistique univariée',
        consignes: 'À partir d’un tableau de données économiques (salaires, loyers ou paniers clients regroupés en classes), calculer fréquences $f_i$, fréquences cumulées $F_i$, densités $d_i = f_i/a_i$, classe modale, médiane par interpolation linéaire, moyenne $\\bar{x}$, variance par König-Huygens, écart-type $\\sigma$ et coefficient de variation $CV$.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Statistique bivariée, corrélation et régression linéaire (MCO)',
        consignes: 'À partir d’une série double $(x_i, y_i)$ de 6 à 8 observations (budget pub vs ventes, trafic vs chiffre d’affaires), calculer moyennes, variances, covariance $\\operatorname{Cov}(X, Y)$, coefficient de Pearson $r$, équation de la droite de régression $\\hat{y} = ax + b$, $R^2$ et prévision commentée.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : variables, tableaux statistiques, Sturges, densités, histogramme, boxplot, mode, médiane, quartiles, moyennes, variance König-Huygens, CV, covariance, Pearson, Spearman, régression MCO.',
    },
    exemples: [],
  },

  lmd_reseaux: {
    matiere: 'Réseaux Informatiques',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Réseaux Informatiques (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Tous les calculs d’adressage IPv4 et de sous-réseaux CIDR/VLSM doivent être vérifiés rigoureusement (adresse réseau, 1re machine, dernière machine, broadcast, nombre d’hôtes $2^h - 2$).',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Topologies, supports et modèles OSI / TCP-IP',
        consignes: 'Questions structurées sur les topologies (Étoile, Bus, Anneau, Maillée), les supports (UTP, fibre optique, Wi-Fi), la correspondance entre les 7 couches OSI et les 4 couches TCP/IP, les PDU (trame, paquet, segment) et les équipements (Hub, Switch, Routeur).',
      },
      {
        numero: 2,
        points: 4,
        nature: 'Couche Liaison, Ethernet et commutation',
        consignes: 'Analyse d’un réseau local : adresse MAC (48 bits), CSMA/CD vs CSMA/CA, fonctionnement de la table CAM d’un commutateur (Switch), domaines de collision vs diffusion et intérêt des VLAN.',
      },
      {
        numero: 3,
        points: 7,
        nature: 'Exercice pratique — Adressage IPv4 et découpage en sous-réseaux (CIDR / VLSM)',
        consignes: 'À partir d’un bloc d’adresses IPv4 privées (ex. `192.168.10.0/24` ou `172.16.0.0/16`), concevoir un plan d’adressage pour 3 à 4 départements d’une entreprise (Administration, Technique, Commercial, Wi-Fi invités) : masques adaptés, adresse réseau, plage d’hôtes utilisables et adresse de diffusion (broadcast) présentés dans un tableau.',
      },
      {
        numero: 4,
        points: 4,
        nature: 'Couches Transport & Application, sécurité',
        consignes: 'Comparaison TCP vs UDP, poignée de main en 3 étapes (SYN, SYN-ACK, ACK), association de protocoles et ports usuels (HTTP 80, HTTPS 443, DNS 53, DHCP 67/68, SSH 22), rôle du NAT et du pare-feu.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : PAN/LAN/MAN/WAN, topologies, supports, OSI 7 couches, TCP/IP, Ethernet/MAC/Switch/VLAN, IPv4/CIDR/VLSM, ARP/ICMP, TCP/UDP, DNS/DHCP/HTTP/NAT.',
    },
    exemples: [],
  },

  // =========================================================================
  // LOT 2 — ÉCONOMIE, NUMÉRIQUE & FINANCE
  // =========================================================================
  lmd_microeconomie: {
    matiere: 'Microéconomie',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Microéconomie (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les fonctions économiques en LaTeX ($U(x,y)$, $TMS$, $E_p$, $CT, CM, Cm$). Exiger les calculs complets et l’interprétation économique de chaque résultat.',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Questions conceptuelles et méthodologie',
        consignes: '4 questions courtes (1 pt chacune) : économie positive vs normative (guillotine de Hume), équilibre partiel *ceteris paribus*, statique comparative, coût d’opportunité ou types de biens (normal, inférieur, Giffen, substitut, complémentaire).',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Problème du consommateur (Utilité, TMS et contrainte budgétaire)',
        consignes: 'Pour une fonction d’utilité Cobb-Douglas $U(x, y) = x^\\alpha y^\\beta$, un revenu $R$ et des prix $(P_x, P_y)$ : écrire la contrainte budgétaire, calculer les utilités marginales et le $TMS$, déterminer le panier optimal $(x^*, y^*)$ et analyser l’effet d’une variation de prix ou de revenu.',
      },
      {
        numero: 3,
        points: 5,
        nature: 'Marché, équilibre et élasticités',
        consignes: 'À partir de fonctions d’offre $Q_o(P)$ et de demande $Q_d(P)$ linéaires : déterminer l’équilibre $(P^*, Q^*)$, calculer le surplus du consommateur et du producteur, calculer une élasticité-prix et conclure sur l’évolution de la recette totale.',
      },
      {
        numero: 4,
        points: 5,
        nature: 'Producteur, coûts et structures de marché',
        consignes: 'À partir d’une fonction de coût total $CT(q)$ : calculer $CF, CV, CM, Cm$, déterminer l’optimum technique (minimum de $CM$), l’équilibre de courte période en CPP ($P = Cm$) et comparer avec le comportement d’un monopole ($Rm = Cm$).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : méthodologie microéconomique, consommateur (utilité, TMS, contrainte budgétaire, Lagrangien), offre/demande/élasticités/surplus, producteur (rendements, coûts, CPP vs monopole).',
    },
    exemples: [],
  },

  lmd_macroeconomie: {
    matiere: 'Macroéconomie',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Macroéconomie (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les équations macroéconomiques en LaTeX. Préciser les unités (milliards FCFA ou €) et exiger l’interprétation économique des multiplicateurs et politiques.',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Circuit économique et grands courants',
        consignes: 'Questions structurées sur les 5 secteurs institutionnels, l’équilibre emplois-ressources ($Y + M = C + I + G + X$), le carré magique de Kaldor et les divergences Classiques vs Keynésiens.',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Mesure de l’activité : PIB, déflateur, inflation et chômage',
        consignes: 'À partir d’un tableau de productions et prix sur deux années (année de base $t_0$ et année $t_1$), calculer le PIB nominal, le PIB réel, le taux de croissance réel, le déflateur du PIB, puis un taux d’activité et un taux de chômage.',
      },
      {
        numero: 3,
        points: 6,
        nature: 'Modèle keynésien, multiplicateurs et équilibre IS-LM',
        consignes: 'Avec $C = cY_d + C_0$, $I$, $G$ et $T$ donnés : déterminer le revenu d’équilibre $Y^*$, calculer le multiplicateur d’investissement $k = 1/(1-c)$ et fiscal, puis analyser l’effet d’une relance budgétaire $\\Delta G$ et le risque d’effet d’éviction dans IS-LM.',
      },
      {
        numero: 4,
        points: 4,
        nature: 'Politiques économiques et marché du travail',
        consignes: 'Analyse d’un cas conjoncturel en zone UEMOA : choix entre politique budgétaire et politique monétaire (BCEAO), arbitrage inflation-chômage (courbe de Phillips) et chômage classique vs keynésien.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : circuit économique, PIB nominal/réel, déflateur, IPC, chômage, consommation/épargne/investissement, multiplicateurs keynésiens, monnaie, IS-LM, marché du travail et politiques économiques.',
    },
    exemples: [],
  },

  lmd_intro_eco_num: {
    matiere: 'Introduction à l’Économie Numérique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Introduction à l’Économie Numérique (2 h, /20)',
    reglesMatiere: [...LMD_COMMON_RULES],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Maîtrise des concepts et secteurs institutionnels',
        consignes: 'Questions courtes précises : distinction entre « le numérique » et « l’économie numérique », classement d’acteurs dans les 6 secteurs institutionnels ou 4 catégories TIC (Production, Distribution, Services, Contenus), et propriétés des biens numériques (coût marginal nul, non-rivalité).',
      },
      {
        numero: 2,
        points: 7,
        nature: 'Étude de cas — Plateforme biface et effets de réseau',
        consignes: 'Présentation d’une plateforme numérique africaine (e-commerce, mobilité ou Mobile Money) : identifier les deux versants, distinguer effets de réseau directs et croisés, expliquer le problème de la masse critique et le subventionnement croisé, puis analyser les sources de revenus.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Réflexion argumentée — Enjeux et modèles alternatifs',
        consignes: 'Question de synthèse structurée (introduction, développement en 2 axes avec exemples concrets, conclusion) sur l’économie des données, la fracture numérique en Afrique, la souveraineté numérique ou la combinaison des modèles alternatifs (Open Source, Communs, Crowdfunding, Coopératives).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : secteurs institutionnels, biens numériques, 4 catégories TIC, chaîne de valeur, données, plateformes bifaces, effets de réseau, modèles alternatifs et enjeux en Afrique.',
    },
    exemples: [],
  },

  lmd_modele_dev_eco_num: {
    matiere: 'Modèles de Développement en Économie Numérique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Modèles de Développement Numérique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Inclure un exercice quantitatif sur les métriques SaaS/plateforme (CAC, ARPU, Churn, LTV, ratio LTV/CAC, Payback).',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Concepts clés et calculs de métriques SaaS',
        consignes: 'Définition et calcul chiffré des indicateurs d’une startup digitale (CAC, ARPU, taux de Churn mensuel, LTV et ratio LTV/CAC) avec diagnostic de viabilité économique.',
      },
      {
        numero: 2,
        points: 8,
        nature: 'Étude de cas — Business Model Canvas & Pipeline vs Plateforme',
        consignes: 'Analyse d’une entreprise numérique (ex. marketplace ou super-app) : renseigner les blocs critiques du Business Model Canvas d’Osterwalder, opposer son modèle « plateforme asset-light » au modèle linéaire « pipeline », et expliquer le rôle de son infrastructure Cloud/API.',
      },
      {
        numero: 3,
        points: 7,
        nature: 'Analyse stratégique — Monétisation et dynamique concurrentielle',
        consignes: 'Étude comparative (ex. transactionnel vs abonnement, Freemium vs commission, ou dynamique Winner-Takes-All / multi-homing en Afrique) avec recommandations opérationnelles argumentées.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : Business Model Canvas, monétisation (Freemium, SaaS, commission, data), Pipeline vs Plateforme, agrégation, Cloud/API, métriques CAC/LTV/Churn, dynamiques concurrentielles en Afrique.',
    },
    exemples: [],
  },

  lmd_banque: {
    matiere: 'Banque',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Banque (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les données monétaires en FCFA (zone UEMOA / BCEAO). Exiger les formules avant les calculs.',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Questions de cours — Système bancaire, asymétries et risques',
        consignes: 'Questions précises sur le rôle de la BCEAO, l’intermédiation financière, la distinction sélection adverse vs aléa moral et la cartographie des 4 risques bancaires (crédit, liquidité, marché, opérationnel) et ratios Bâle III.',
      },
      {
        numero: 2,
        points: 8,
        nature: 'Exercice quantitatif — Intermédiation, création monétaire et bilan bancaire',
        consignes: 'À partir de données chiffrées d’une banque commerciale (dépôts, crédits, taux de réserves obligatoires $r$, taux d’intérêt débiteur/créditeur) : calculer le taux d’intermédiation, le multiplicateur de crédit $1/r$ et la masse monétaire créée, le Produit Net Bancaire (PNB), et classer les postes à l’Actif ou au Passif du bilan bancaire.',
      },
      {
        numero: 3,
        points: 7,
        nature: 'Étude de cas — Transformation digitale, Fintechs et conformité',
        consignes: 'Cas pratique portant sur le lancement d’un service de Mobile Money ou d’Open Banking par une banque : analyse des enjeux (inclusion financière, concurrence néobanques, KYC, LBC/FT, cybersécurité) et plan d’action.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : architecture bancaire UEMOA/BCEAO, intermédiation, dépôts/crédits, PNB, multiplicateur de crédit, bilan bancaire, risques/Bâle III, Fintechs, Mobile Money et LBC/FT.',
    },
    exemples: [],
  },

  lmd_assurance: {
    matiere: 'Assurance',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Assurance (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les données en FCFA. Exiger les formules actuarielles complètes (espérance, écart-type, TS, Poisson, Prime pure/HT/TTC, règle proportionnelle, valeur acquise/rachat).',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Fondements de l’assurance, risque assurable et cadre CIMA',
        consignes: 'Vérification des 3 critères du risque assurable (incertitude, aléa, indépendance), fonctions économiques de l’assurance, faible pénétration en Côte d’Ivoire (2 %) et rôle du Code CIMA.',
      },
      {
        numero: 2,
        points: 8,
        nature: 'Exercice actuariel — Mutualisation, loi de Poisson et tarification',
        consignes: 'Sur un portefeuille de $n$ assurés (coût moyen $C$, probabilité $p$, chargements sécurité/gestion/marge et TCA) : calculer $E(S)$, $\\sigma$, le taux de dispersion $TS = (\\sigma/E(S))\\times 100$, la prime pure, la prime commerciale HT et la prime TTC, puis une probabilité de sinistre rare via Poisson($\\lambda$).',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Cas pratiques — Assurance Vie, Assurance Dommages et InsurTech',
        consignes: 'Deux cas chiffrés : (A) Assurance Vie (capital restant dû en temporaire décès ou valeur acquise et valeur de rachat nette avant 8 ans) ; (B) Sinistre automobile ou incendie (indemnisation tiers en RC obligatoire, dommages véhicule avec franchise, ou règle proportionnelle en sous-assurance) + question sur l’assurance paramétrique agricole.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : contrat et risque assurable, mutualisation, Poisson, tarification (prime pure/HT/TTC), assurance vie (rachat, rente), dommages (RC, franchise, sous-assurance), InsurTech et CIMA.',
    },
    exemples: [],
  },

  // =========================================================================
  // LOT 3 — GESTION, COMPTABILITÉ & DROIT
  // =========================================================================
  lmd_compta_generale: {
    matiere: 'Comptabilité Générale',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Comptabilité Générale SYSCOHADA (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Respecter strictement le référentiel SYSCOHADA révisé (classes 1 à 8, TVA 18 %, numéros de comptes : 401, 411, 4431, 4452, 601, 701, 4094, 4194, 412, 402, 521, 571).',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Questions SYSCOHADA, Bilan et principe de la partie double',
        consignes: 'Classement de postes comptables (Actif / Passif / Charges / Produits, AO vs HAO), calcul de la situation nette ou du résultat, et équilibre Débit = Crédit.',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Facturation Doit & Avoir avec réductions et TVA 18 %',
        consignes: 'Établir le décompte complet d’une facture Doit en cascade (Montant brut → Remise → Net Commercial → Escompte → Net Financier → Port facturé → Base HT → TVA 18 % → Net à payer TTC) puis comptabiliser l’écriture au journal chez le fournisseur et chez le client (avec éventuel retour sur facture d’Avoir).',
      },
      {
        numero: 3,
        points: 5,
        nature: 'Emballages commerciaux (consignation et déconsignation)',
        consignes: 'Traitement comptable d’emballages récupérables consignés (4194 / 4094), reprise à prix inférieur (mali / boni) ou conservation/destruction par le client.',
      },
      {
        numero: 4,
        points: 5,
        nature: 'Effets de commerce (création, escompte et renouvellement)',
        consignes: 'Création d’une lettre de change, remise à l’escompte avec calcul des agios (escompte commercial + commission + TVA bancaire 10 %/18 %) et écritures comptables au journal.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : SYSCOHADA révisé, Bilan, Compte de résultat, partie double, comptes en T, journal/grand-livre/balance, factures Doit/Avoir/TVA, emballages et effets de commerce.',
    },
    exemples: [],
  },

  lmd_compta_analytique: {
    matiere: 'Comptabilité Analytique de Gestion',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Comptabilité Analytique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Présenter les données dans des tableaux clairs (répartition primaire/secondaire, mouvements de stocks, charges fixes/variables). Arrondir les coûts unitaires à 2 décimales si nécessaire.',
    ],
    exercices: [
      {
        numero: 1,
        points: 6,
        nature: 'Charges incorporables et répartition des charges indirectes',
        consignes: 'Calcul des charges de la CAE (incorporables − non incorporables + supplétives), puis tableau de répartition secondaire avec prestations réciproques (système de 2 équations à 2 inconnues) et calcul du coût de l’unité d’œuvre (CUO).',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Valorisation des stocks (CUMP / FIFO) et inventaire permanent',
        consignes: 'À partir d’un stock initial et de 4 à 5 mouvements d’entrées/sorties, établir la fiche de stock selon la méthode CUMP (fin de période ou après chaque entrée) et/ou FIFO, puis constater un éventuel mali ou boni d’inventaire.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Cascade des coûts complets et Seuil de rentabilité',
        consignes: 'Calculer le coût d’achat, le coût de production (avec en-cours ou déchets), le coût de revient et le résultat analytique ; puis établir le compte de résultat différentiel (CA, CV, MCV, Taux de MCV, CF), le Seuil de Rentabilité en valeur et quantité, le point mort et la marge de sécurité.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : charges incorporables/supplétives, répartition primaire/secondaire (prestations réciproques), valorisation CUMP/FIFO/LIFO, coûts complets, seuil de rentabilité et imputation rationnelle.',
    },
    exemples: [],
  },

  lmd_oge: {
    matiere: 'Organisation et Gestion des Entreprises (OGE)',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’OGE (2 h, /20)',
    reglesMatiere: [...LMD_COMMON_RULES],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Maîtrise des concepts et classification des entreprises',
        consignes: 'Questions précises sur les finalités de l’entreprise, l’approche systémique, la classification des PME en Côte d’Ivoire (effectif CNPS et chiffre d’affaires) et le choix du statut juridique (EI, SARL, SA, SAS).',
      },
      {
        numero: 2,
        points: 7,
        nature: 'Étude de cas — Structures organisationnelles et coordination',
        consignes: 'Diagnostic de l’organisation d’une entreprise en croissance : identifier sa structure actuelle (hiérarchique, fonctionnelle, divisionnelle ou matricielle), relever ses dysfonctionnements et proposer une réorganisation adaptée avec mécanismes de coordination.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Cas de gestion — Financement et transformation digitale',
        consignes: 'Une PME souhaite financer un projet d’investissement (équipements + progiciel ERP) : analyser les modes de financement possibles (autofinancement, emprunt bancaire, crédit-bail, capital-risque) selon la durée du besoin et la solvabilité, et évaluer l’impact du SI sur le cycle d’exploitation.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : entreprise système, finalités, classification PME/statuts juridiques, structures organisationnelles, grandes fonctions, financement et transformation digitale.',
    },
    exemples: [],
  },

  lmd_intro_management: {
    matiere: 'Introduction au Management',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Introduction au Management (2 h, /20)',
    reglesMatiere: [...LMD_COMMON_RULES],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Fondements du management et écoles de pensée',
        consignes: 'Questions courtes sur le triptyque Administration/Management/Gestion, la différence efficacité vs efficience, la boucle PODC, et les apports comparés de l’école classique (Taylor/Fayol/Weber) et des relations humaines (Mayo/Maslow/Herzberg/McGregor).',
      },
      {
        numero: 2,
        points: 8,
        nature: 'Étude de cas — Diagnostic stratégique et prise de décision',
        consignes: 'À partir d’un cas d’entreprise du numérique : réaliser un diagnostic SWOT et identifier 2 facteurs PESTEL ou forces de Porter, qualifier le niveau des décisions (Ansoff) et appliquer le modèle IMC de Simon.',
      },
      {
        numero: 3,
        points: 7,
        nature: 'Cas managérial — Leadership, motivation et gestion d’équipe',
        consignes: 'Une équipe projet rencontre baisse de motivation et tensions internes : diagnostiquer le style de leadership actuel (Blake & Mouton / situationnel), mobiliser une théorie de la motivation (Maslow, Herzberg, équité ou Vroom) et proposer un plan d’action concret.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : PODC, Administration/Management/Gestion, écoles classique/relations humaines/contingence, décision IMC, SWOT/PESTEL/Porter, leadership, motivation et management agile.',
    },
    exemples: [],
  },

  lmd_intro_marketing: {
    matiere: 'Introduction au Marketing',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Introduction au Marketing (2 h, /20)',
    reglesMatiere: [...LMD_COMMON_RULES],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Concepts fondamentaux et environnement marketing',
        consignes: 'Distinction besoin/désir/demande, évolution des optiques marketing, microenvironnement (7 publics) vs macroenvironnement (PESTEL), et processus d’achat du consommateur en 5 étapes.',
      },
      {
        numero: 2,
        points: 7,
        nature: 'Étude de cas — Démarche STP et portefeuille produits',
        consignes: 'Pour le lancement d’une offre numérique ou grand public en Côte d’Ivoire : proposer des critères de segmentation pertinents, choisir une stratégie de ciblage, formuler un positionnement clair et analyser un portefeuille produit avec la matrice BCG ou le cycle de vie.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Plan d’action — Mix Marketing (4P / 7P) et Marketing Digital',
        consignes: 'Construire un Mix Marketing cohérent (Produit, Prix avec calcul simple de marge ou choix écrémage/pénétration, Distribution omnicanale, Communication) enrichi d’un dispositif digital (SEO/SEA, réseaux sociaux, tunnel AARRR et KPIs).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : concept marketing, environnement, études de marché, comportement consommateur, STP, cycle de vie, BCG, Mix 4P/7P et marketing digital AARRR.',
    },
    exemples: [],
  },

  lmd_intro_droit_num: {
    matiere: 'Introduction au Droit du Numérique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Introduction au Droit du Numérique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Exiger la méthodologie du cas pratique juridique : Faits pertinents → Problème de droit → Règle applicable (textes ivoiriens exacts : Loi 2013-450 DCP, Loi 2013-451 Cybercriminalité, Loi 2013-546 Transactions électroniques) → Application et Solution.',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Questions de cours — Spécificités et sources du droit numérique',
        consignes: 'Les 4 spécificités de l’espace numérique (dématérialisation, instantanéité, territorialité incertaine, hybridité), transversalité du droit numérique et classification des sources (lois, normes techniques HTTPS/ISO, conventions).',
      },
      {
        numero: 2,
        points: 7,
        nature: 'Cas pratique 1 — Acteurs du numérique et responsabilité',
        consignes: 'Une plateforme de vente en ligne ou de partage de vidéos héberge un contenu litigieux : qualifier juridiquement son statut (Hébergeur passif vs Éditeur actif) selon son degré d’intervention, et déterminer son régime de responsabilité.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Cas pratique 2 — Données personnelles (ARTCI) et cybercriminalité',
        consignes: 'Situation combinant une collecte irrégulière de données personnelles (géolocalisation sans consentement, absence de sécurité Art. 37) et une intrusion frauduleuse dans un système informatique (STAD) : identifier les violations, droits des victimes, pouvoirs de l’ARTCI et qualifications pénales.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : spécificités et sources du droit numérique, acteurs (éditeur vs hébergeur), protection des DCP (Loi 2013-450, ARTCI), cybersécurité, cybercriminalité (Loi 2013-451) et contrats électroniques.',
    },
    exemples: [],
  },

  lmd_droit_numerique: {
    matiere: 'Droit du Numérique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve approfondie de Droit du Numérique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Exiger la rigueur du syllogisme juridique (Faits → Problème → Règle → Solution) en s’appuyant sur les textes exacts : Loi 2013-450 (DCP), Loi 2013-546 (Transactions), Loi 2016-555 (Droit d’auteur), Loi 2024-352 (Communications électroniques), OAPI et actes CEDEAO/UEMOA.',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Questions approfondies — DCP, RGPD et espace CEDEAO/UEMOA',
        consignes: 'Décision automatisée et profilage, portabilité, transfert international de données, sécurité *by design* et articulation entre lois ivoiriennes et directives CEDEAO/UEMOA.',
      },
      {
        numero: 2,
        points: 7,
        nature: 'Cas pratique 1 — Propriété intellectuelle, logiciels et IA générative',
        consignes: 'Litige autour de la copie d’une application mobile (code source, interface, base de données), du choix d’une licence (MIT vs GPL vs Propriétaire), d’un cybersquatting de nom de domaine `.ci` ou de la titularité d’une œuvre générée par IA.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Cas pratique 2 — Communications électroniques et contrat en ligne',
        consignes: 'Analyse d’un litige e-commerce ou télécoms : formation du contrat par « double clic », valeur probante d’une signature électronique qualifiée (PSCE), droit de rétractation du cyberconsommateur, et rôle du régulateur ARTCI sous la Loi 2024-352.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : DCP approfondi & profilage, propriété intellectuelle (code, bases de données, marques, licences Open Source, IA générative), Loi 2024-352, e-commerce, signature électronique et CEDEAO/UEMOA.',
    },
    exemples: [],
  },

  // =========================================================================
  // LOT 4 — BUREAUTIQUE, DIGITAL & COMMUNICATION
  // =========================================================================
  lmd_bureautique: {
    matiere: 'Bureautique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Bureautique (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Toutes les formules Excel doivent respecter la syntaxe française exacte (`=SI(...)`, `=SOMME.SI.ENS(...)`, `=NB.SI(...)`, `=RECHERCHEV(...)`, `=RECHERCHEX(...)`, séparateur `;`, références absolues `$A$1`).',
    ],
    exercices: [
      {
        numero: 1,
        points: 5,
        nature: 'Questions techniques — Traitement de texte (Word) et PowerPoint',
        consignes: 'Styles hiérarchiques et table des matières automatique, saut de page vs saut de section, actualisation des champs avant export PDF, règle du 6×6 et rôle du Masque des diapositives.',
      },
      {
        numero: 2,
        points: 9,
        nature: 'Cas pratique Tableur (Microsoft Excel)',
        consignes: 'À partir d’un tableau de données fourni (ventes mensuelles par agence ou bulletin de notes avec coefficients, colonnes A à F, lignes 1 à 8) : écrire les formules exactes recopiables vers le bas avec références absolues (`$`), `SI` imbriqué, `SOMME.SI.ENS` ou `NB.SI`, `RECHERCHEV`/`RECHERCHEX`, et concevoir la structure d’un Tableau Croisé Dynamique (Lignes, Colonnes, Valeurs).',
      },
      {
        numero: 3,
        points: 6,
        nature: 'Cas pratique — Conception d’un rapport et d’une présentation pro',
        consignes: 'Audit d’un document mal formaté et d’une diapositive surchargée : identifier les erreurs ergonomiques et proposer la démarche complète de mise en forme professionnelle.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : Word (styles, sections, TDM, export PDF), Excel (références absolues/relatives, SI, NB.SI, SOMME.SI.ENS, RECHERCHEV/X, TCD, graphiques), PowerPoint (masque, 6×6, hiérarchie visuelle).',
    },
    exemples: [],
  },

  lmd_init_info: {
    matiere: 'Initiation à l’Informatique et Communication Numérique',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Initiation à l’Informatique (2 h, /20)',
    reglesMatiere: [...LMD_COMMON_RULES],
    exercices: [
      {
        numero: 1,
        points: 6,
        nature: 'Architecture matérielle, codage binaire et unités',
        consignes: 'Conversions binaire $\\leftrightarrow$ décimal, calculs de capacité/temps de téléchargement (bits vs octets, Ko/Mo/Go/To), rôle des composants de l’architecture de von Neumann (CPU ALU/UC, RAM vs ROM vs SSD) et fonctions du système d’exploitation.',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Internet, Web, recherche avancée et cybersécurité',
        consignes: 'Décomposition d’une URL, distinction HTTP vs HTTPS, rédaction d’une requête de recherche booléenne avancée, identification d’une tentative de phishing et application de la règle de sauvegarde 3-2-1 + 2FA.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Cas pratique — Communication digitale et Google Workspace',
        consignes: 'Une jeune entreprise lance sa présence en ligne : définir sa stratégie sur les réseaux sociaux (choix des plateformes, 3 piliers éditoriaux, calcul d’un taux d’engagement et d’un CTR) et organiser le travail d’équipe sur Google Drive/Agenda (conversion Office, attribution exacte des 3 niveaux de permissions Lecture/Commentaire/Modification).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : binaire, unités, ASCII/UTF-8, von Neumann, OS, Web/URL/HTTPS, recherche booléenne, cybersécurité 3-2-1, réseaux sociaux pro, KPIs et Google Workspace.',
    },
    exemples: [],
  },

  lmd_tef: {
    matiere: 'Technique d’Expression Française (TEF)',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Technique d’Expression Française (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Pas de LaTeX ni de signe $ : écris tout en français clair.',
      'N’écris jamais toi-même les numéros de ligne devant le texte d’étude : KONAN les affiche automatiquement.',
    ],
    exercices: [
      {
        numero: 1,
        points: 4,
        nature: 'Maîtrise lexicale, connecteurs et correction syntaxique',
        consignes: 'Explication en contexte de 3 expressions du texte en respectant strictement leur classe grammaticale, identification de la valeur logique de connecteurs et correction de 2 phrases comportant pléonasmes ou impropriétés.',
      },
      {
        numero: 2,
        points: 8,
        nature: 'Contraction / Résumé de texte argumentatif',
        texteNumerote: true,
        consignes: 'Rédige un texte argumentatif inédit de 260 à 320 mots sur un enjeu contemporain (transformation numérique, éducation, travail, médias en Afrique) dans « contexte », terminé sur une ligne à part par « Texte inédit écrit pour KONAN ». Demande à l’étudiant d’en réaliser le résumé au quart de sa longueur (avec marge de tolérance ±10 % et décompte exact des mots indiqué en fin de copie), en respectant l’énonciation et sans aucun jugement personnel.',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Production écrite au choix — Dissertation d’ordre général OU Compte rendu',
        auChoix: true,
        consignes: 'Propose deux sujets au choix (l’étudiant traite UN seul sujet pour 8 points) : Sujet A — Dissertation d’ordre général (analyse Information/Consigne, introduction en 3 temps, développement structuré en paragraphes A-A-I, conclusion) ; Sujet B — Compte rendu analytique d’activité ou de réunion à partir d’un bref scénario fourni (sans formuler de propositions personnelles dans la conclusion d’un CR d’activité).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : vocabulaire en contexte, connecteurs logiques, résumé/contraction avec comptage strict ±10 %, dissertation d’ordre général, prise de notes et compte rendu professionnel.',
    },
    exemples: [],
  },

  lmd_ecriture_creative: {
    matiere: 'Écriture Créative et Communication',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve d’Écriture Créative et Communication (2 h, /20)',
    reglesMatiere: [
      ...LMD_COMMON_RULES,
      'Pas de LaTeX ni de signe $ : écris tout en français clair et fluide.',
    ],
    exercices: [
      {
        numero: 1,
        points: 6,
        nature: 'Maîtrise des concepts et méthodes de création',
        consignes: 'Questions précises sur la distinction cerveau Auteur vs Monteur (dérushage), les 4 causes de la page blanche et leurs remèdes, la non-fiction créative, la définition du Persona / Tone of Voice et la distinction Informer / Convaincre / Persuader / Émouvoir.',
      },
      {
        numero: 2,
        points: 6,
        nature: 'Analyse d’un texte de communication digitale',
        texteNumerote: true,
        consignes: 'Fournis dans « contexte » une courte page de présentation ou post éditorial inédit (120 à 180 mots, terminé par « Texte inédit écrit pour KONAN »). Demander d’identifier la cible/Persona, le Tone of Voice, les étapes du schéma narratif ou AIDA/PAS, et de relever et commenter 2 figures de style (métaphore, personnification, anaphore).',
      },
      {
        numero: 3,
        points: 8,
        nature: 'Atelier de rédaction créative et Copywriting digital',
        consignes: 'Brief réaliste pour une startup ou application mobile africaine : rédiger une page d’accueil ou un mini-récit de marque (150 à 200 mots) structuré selon la méthode PAS ou AIDA et le principe « Show, Don’t Tell », avec accroche forte, bénéfices concrets et appel à l’action (CTA).',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : Auteur vs Monteur, page blanche, Persona, Tone of Voice, Informer/Convaincre/Persuader/Émouvoir, schéma narratif, Storytelling, figures de style et Copywriting AIDA/PAS.',
    },
    exemples: [],
  },

  lmd_dev_perso: {
    matiere: 'Développement Personnel',
    duree: '2 h',
    source: 'Format universitaire Licence 1 — Épreuve de Développement Personnel (2 h, /20)',
    reglesMatiere: [...LMD_COMMON_RULES],
    exercices: [
      {
        numero: 1,
        points: 6,
        nature: 'Fondements, connaissance de soi et penseurs clés',
        consignes: 'Questions structurées sur les 4 piliers du développement personnel, l’apport de Socrate, William James, Carl Jung (introversion/extraversion), Abraham Maslow (pyramide des besoins), Daniel Goleman (5 composantes de l’intelligence émotionnelle) et Carol Dweck (Fixed vs Growth Mindset).',
      },
      {
        numero: 2,
        points: 7,
        nature: 'Cas pratique 1 — Objectifs SMART et gestion du temps',
        consignes: 'Un étudiant en Licence 1 est débordé entre ses cours, un projet associatif et la préparation de ses examens : reformuler un objectif vague en objectif SMART complet, classer 6 tâches concrètes dans la matrice d’Eisenhower (4 quadrants) et appliquer la loi de Pareto 80/20 + Pomodoro.',
      },
      {
        numero: 3,
        points: 7,
        nature: 'Cas pratique 2 — Gestion du stress, assertivité et CNV (OSBD)',
        consignes: 'Situation de conflit au sein d’un groupe projet universitaire (un membre ne livre pas sa partie à temps) : distinguer les 4 postures relationnelles (passif, agressif, manipulateur, assertif), rédiger une réponse assertive structurée selon les 4 étapes de la Communication Non Violente (OSBD), et proposer 2 techniques concrètes de régulation du stress avant une soutenance.',
      },
    ],
    notesClasse: {
      lmd_entd_l1: 'ENTD L1 : connaissance de soi, penseurs (Socrate, James, Jung, Maslow, Goleman), SMART, Eisenhower, Pareto, Pomodoro, stress, Growth Mindset, écoute active, CNV OSBD, assertivité et personal branding.',
    },
    exemples: [],
  },
};
