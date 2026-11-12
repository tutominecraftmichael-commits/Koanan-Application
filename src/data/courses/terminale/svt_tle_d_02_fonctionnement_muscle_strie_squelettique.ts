import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L02_FONCTIONNEMENT_MUSCLE_STRIE_SQUELETTIQUE: CurriculumChapter = {
  id: "terminale_d_svt_ch03_fonctionnement_du_muscle_strie_squelettique",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 3,
  title: "Le fonctionnement du muscle strié squelettique (Ultrastructure, contraction et énergétique)",
  summary: "Étude complète et approfondie de la motricité squelettique : organisation anatomique du muscle et ultrastructure du sarcomère, mécanisme moléculaire du glissement des myofilaments sous l'action du calcium et de l'ATP, analyse graphique des phénomènes électriques et mécaniques (myogramme, sommation, tétanos imparfait et parfait, fatigue musculaire), et biochimie métabolique des voies de régénération rapide et lente de l'ATP.",
  officialVolumeHours: 8,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_structure_myofibrille_sarcomere",
      order: 1,
      title: "Structure anatomique du muscle et ultrastructure du sarcomère",
      summary: "Organisation hiérarchique du muscle frais (faisceaux, fibres musculaires plurinucléées, myofibrilles) et ultrastructure du sarcomère (stries Z, bandes A et I, zone H, myofilaments d'actine et de myosine).",
      conceptExplanation: "Les muscles striés squelettiques sont des organes effecteurs spécialisés qui s'insèrent sur les os par des tendons et assurent les mouvements volontaires ou réflexes sous le contrôle du système nerveux.\n\n1. Organisation anatomique du muscle frais :\nUne dissection macroscopique et microscopique d'un muscle squelettique révèle une structure organisée en faisceaux emboîtés :\n- L'enveloppe conjonctive externe (aponévrose ou épinèvre musculaire) entoure le muscle entier relié aux os par les tendons.\n- Le muscle est constitué de multiples faisceaux de fibres musculaires délimités par du tissu conjonctif riche en vaisseaux sanguins et filets nerveux.\n- Chaque faisceau renferme de nombreuses fibres musculaires qui constituent les véritables cellules musculaires.\n\n2. La fibre musculaire : cellule géante plurinucléée (syncytium) :\nObservée au microscope optique (grossissement ×400), la fibre musculaire est une cellule géante allongée (pouvant mesurer plusieurs centimètres de long pour un diamètre de 10 à 100 micromètres) présentant plusieurs particularités morphologiques :\n- Le sarcolemme : membrane plasmique doublée d'une lame basale, émettant des invaginations transversales régulières appelées tubules transverses (tubules T) qui pénètrent profondément au cœur de la cellule.\n- Le sarcoplasme : cytoplasme abondant renfermant de nombreux noyaux rejetés en périphérie sous la membrane, des mitochondries nombreuses, des réserves de glycogène, de la myoglobine (protéine fixatrice d'oxygène) et un réticulum sarcoplasmique très développé formant des citernes terminales entourant les myofibrilles.\n- Des myofibrilles parallèles cylindriques occupant la quasi-totalité du volume intracellulaire et présentant une striation transversale alternant bandes sombres et bandes claires.\n\n3. Ultrastructure du sarcomère (microscopie électronique, grossissement ×20 000) :\nLa myofibrille est formée par la répétition bout à bout d'unités structurales et fonctionnelles élémentaires appelées sarcomères. Chaque sarcomère est délimité par deux lignes transversales denses appelées stries Z (Zwijschendistanz) :\n- La bande sombre (bande A ou B, anisotrope) : située au centre du sarcomère, elle conserve une longueur rigoureusement constante. Elle est traversée en son milieu par une zone plus claire appelée zone H (Hensen), elle-même séparée en son centre par la ligne sombre M.\n- La bande claire (bande I ou A dans certaines nomenclatures, isotrope) : située de part et d'autre des stries Z, elle est partagée en deux par la strie Z.\n- Les myofilaments : le sarcomère est constitué de deux types de filaments protéiques longitudinaux réguliers :\n  * Les filaments fins d'actine (diamètre ≈ 5 à 7 nm) : rattachés aux stries Z, ils s'étendent vers le centre du sarcomère. Ils sont formés par un double filament torsadé d'actine globulaire (actine G) associée à deux protéines régulatrices indispensables : la tropomyosine (qui masque les sites de fixation) et la troponine (complexe protéique possédant des sites récepteurs de haute affinité pour les ions calcium).\n  * Les filaments épais de myosine (diamètre ≈ 15 nm) : situés au niveau de la bande sombre A. Chaque filament épais est constitué de l'assemblage de plusieurs centaines de molécules de myosine. Chaque molécule de myosine possède une queue fibreuse allongée et deux têtes globulaires articulées dotées d'une activité enzymatique ATPasique et d'un site de liaison pour l'actine.",
      keyRule: "Le sarcomère est la portion de myofibrille comprise entre deux stries Z consécutives. Il est constitué de filaments fins d'actine (troponine + tropomyosine) et de filaments épais de myosine.",
      formulas: [
        {
          name: "Définition spatiale du sarcomère",
          formula: "\\text{Sarcomère} = [\\text{Strie Z}_1 \\leftrightarrow \\text{Strie Z}_2] = \\frac{1}{2}\\text{Bande I} + \\text{Bande A} + \\frac{1}{2}\\text{Bande I}",
          note: "Longueur moyenne au repos : 2 à 2,5 micromètres"
        }
      ],
      workedExample: {
        title: "Interprétation de coupes transversales de myofibrille au microscope électronique",
        statement: "On réalise trois coupes transversales ultrafines (a, b et c) à différents niveaux d'un sarcomère au repos : - Coupe a : montre uniquement des filaments de gros diamètre (15 nm) disposés en réseau régulier. - Coupe b : montre uniquement des filaments de petit diamètre (5 nm). - Coupe c : montre une organisation hexagonale avec un filament épais entouré de six filaments fins. 1. Localiser le niveau de réalisation de chaque coupe (X, Y, Z) dans le sarcomère. 2. Justifier à partir de l'ultrastructure.",
        methodSteps: [
          "Étape 1 : Analyser la coupe a. La présence exclusive de filaments épais de myosine (gros diamètre) sans filaments fins correspond à la zone H centrale de la bande sombre A.",
          "Étape 2 : Analyser la coupe b. La présence exclusive de filaments fins d'actine (faible diamètre) correspond à la bande claire I de part et d'autre de la strie Z.",
          "Étape 3 : Analyser la coupe c. La zone de chevauchement où chaque filament épais de myosine est entouré de six filaments fins d'actine correspond aux régions périphériques de la bande sombre A situées de chaque côté de la zone H."
        ],
        conclusion: "Coupe a = Zone H ; Coupe b = Bande claire I ; Coupe c = Zone de chevauchement de la bande sombre A."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Architecture ultrastructurale du sarcomère au repos",
        tableData: {
          headers: ["Zone du sarcomère", "Filaments constitutifs", "Aspect microscopique", "Évolution lors de la contraction"],
          rows: [
            ["Bande sombre (A)", "Filaments de myosine + extrémités d'actine", "Sombre (anisotrope)", "Longueur rigoureusement constante"],
            ["Zone H (centrale)", "Filaments épais de myosine seuls", "Claire (au centre de A)", "Rétrécissement majeur voire disparition totale"],
            ["Bande claire (I)", "Filaments fins d'actine seuls + strie Z", "Claire (isotrope)", "Rétrécissement bilatéral important"],
            ["Strie Z (délimitante)", "Protéines d'ancrage de l'actine (alpha-actinine)", "Ligne sombre très nette", "Rapprochement des deux stries Z (raccourcissement du sarcomère)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c03_p1_ex1",
          type: "mcq",
          prompt: "Comment appelle-t-on l'unité contractile élémentaire de la myofibrille comprise entre deux stries Z consécutives ?",
          options: [
            "Le sarcomère",
            "Le sarcolemme",
            "Le sarcoplasme",
            "La troponine"
          ],
          correctAnswerIndex: 0,
          explanation: "Le sarcomère est l'unité morphologique et fonctionnelle fondamentale de la contraction musculaire, délimitée par deux stries Z successives."
        },
        {
          id: "tle_d_svt_c03_p1_ex2",
          type: "mcq",
          prompt: "Quelles sont les trois protéines contractiles et régulatrices constituant les filaments fins du sarcomère ?",
          options: [
            "L'actine G, la troponine et la tropomyosine",
            "La myosine, la créatine et l'actine",
            "L'épinèvre, le périnèvre et le sarcolemme",
            "L'hémoglobine, la myoglobine et l'albumine"
          ],
          correctAnswerIndex: 0,
          explanation: "Les filaments fins d'actine sont formés d'une double chaîne d'actine G associée à la tropomyosine (filament masquant) et à la troponine (complexe liant le calcium)."
        },
        {
          id: "tle_d_svt_c03_p1_ex3",
          type: "mcq",
          prompt: "Pourquoi la bande sombre A apparaît-elle opaque et sombre au microscope polarisant ?",
          options: [
            "En raison de la présence dense des filaments épais de myosine qui se superposent en partie aux filaments d'actine",
            "Parce qu'elle contient tous les noyaux de la cellule musculaire",
            "À cause de l'accumulation exclusive de glycogène",
            "Parce que les tubules transverses y bloquent la lumière"
          ],
          correctAnswerIndex: 0,
          explanation: "La bande sombre (ou bande A) correspond à toute la longueur des filaments épais de myosine, avec une zone de chevauchement dense avec les filaments fins d'actine."
        },
        {
          id: "tle_d_svt_c03_p1_ex4",
          type: "mcq",
          prompt: "Quelle zone claire se trouve exactement au milieu de la bande sombre A d'un sarcomère au repos ?",
          options: [
            "La zone H",
            "La strie Z",
            "La bande I",
            "L'épinèvre"
          ],
          correctAnswerIndex: 0,
          explanation: "La zone H (de Hensen) est la zone centrale plus claire de la bande sombre A, où l'on ne trouve que des filaments de myosine sans filaments d'actine au repos."
        },
        {
          id: "tle_d_svt_c03_p1_ex5",
          type: "mcq",
          prompt: "Quel organite intracellulaire spécialisé forme des citernes entourant les myofibrilles et sert de réservoir aux ions calcium (Ca2+) ?",
          options: [
            "Le réticulum sarcoplasmique",
            "Le corps de Nissl",
            "L'appareil de Golgi somatique",
            "Le lysosome primaire"
          ],
          correctAnswerIndex: 0,
          explanation: "Le réticulum sarcoplasmique (réticulum endoplasmique lisse spécialisé du muscle) stocke des concentrations très élevées d'ions Ca2+ prêts à être libérés lors de la stimulation."
        },
        {
          id: "tle_d_svt_c03_p1_ex6",
          type: "mcq",
          prompt: "Que révèlent les coupes transversales réalisées précisément au niveau de la bande claire I d'une myofibrille ?",
          options: [
            "Uniquement des sections de filaments fins d'actine",
            "Uniquement des sections de filaments épais de myosine",
            "Une alternance régulière de myosine entourée de 6 actines",
            "Des têtes de myosine isolées sans filament"
          ],
          correctAnswerIndex: 0,
          explanation: "La bande claire I ne contient que des filaments fins d'actine ancrés sur la strie Z : une coupe transversale n'y montre que des filaments fins."
        },
        {
          id: "tle_d_svt_c03_p1_ex7",
          type: "mcq",
          prompt: "Pourquoi la fibre musculaire squelettique possède-t-elle plusieurs noyaux cellulaires (plurinucléée) ?",
          options: [
            "Parce qu'elle résulte de la fusion embryonnaire de plusieurs cellules précurseurs (myoblastes) en un syncytium",
            "Parce que les noyaux se divisent sans arrêt pendant l'exercice physique",
            "Parce que chaque sarcomère possède son propre noyau autonome",
            "Parce que les cellules de Schwann s'y incorporent définitivement"
          ],
          correctAnswerIndex: 0,
          explanation: "Au cours du développement embryonnaire, de nombreux myoblastes mononucléés fusionnent pour former une cellule musculaire géante multinucléée (syncytium)."
        },
        {
          id: "tle_d_svt_c03_p1_ex8",
          type: "mcq",
          prompt: "Quelle propriété enzymatique essentielle possèdent les têtes globulaires des molécules de myosine ?",
          options: [
            "Une activité ATPasique capable de lier et d'hydrolyser l'ATP en ADP + Pi",
            "Une activité polymérase synthétisant de nouvelles molécules d'actine",
            "Une activité protéolytique détruisant la gaine conjonctive",
            "Une activité peroxydase neutralisant les radicaux libres"
          ],
          correctAnswerIndex: 0,
          explanation: "Les têtes de myosine possèdent un site catalytique ATPasique activé par l'actine, hydrolysant l'ATP pour fournir l'énergie mécanique du pivotement."
        }
      ]
    },
    {
      id: "pt2_mecanisme_moleculaire_contraction",
      order: 2,
      title: "Mécanisme moléculaire de la contraction musculaire",
      summary: "Couplage excitation-contraction, rôle des ions Ca2+ et de la troponine, formation du pont actomyosine, hydrolyse d'ATP et cycle de pivotement / glissement des myofilaments.",
      conceptExplanation: "La contraction musculaire est la transformation d'une énergie biochimique (ATP) en énergie mécanique (force et raccourcissement) par glissement relatif des myofilaments fins entre les myofilaments épais.\n\n1. Évolution morphologique du sarcomère lors de la contraction :\nL'observation au microscope électronique d'un sarcomère passant de l'état relâché à l'état contracté montre :\n- Rapprochement des deux stries Z consécutives $\\to$ raccourcissement du sarcomère.\n- Rétrécissement important de la zone claire H (pouvant disparaître complètement lors d'une contraction maximale).\n- Réduction de la largeur des bandes claires I.\n- Constance absolue de la longueur de la bande sombre A.\n- Constance absolue de la longueur individuelle des filaments d'actine et de myosine.\n- Conclusion fondamentale (théorie des filaments glissants d'Huxley) : La contraction ne résulte pas d'un raccourcissement élastique des filaments eux-mêmes, mais d'un glissement des filaments fins d'actine le long des filaments épais de myosine vers le centre du sarcomère.\n\n2. Séquence moléculaire du couplage excitation-contraction :\nLe cycle de contraction se déroule en 4 étapes moléculaires coordonnées :\n- Étape 1 : Démasquage des sites d'attachement par le calcium ($Ca^{2+}$) :\n  Au repos, la concentration cytosolique en $Ca^{2+}$ est très faible ($< 10^{-7}\\text{ mol/L}$) et la tropomyosine masque les sites de fixation de l'actine. L'arrivée du potentiel d'action musculaire le long du sarcolemme et des tubules transverses T déclenche l'ouverture des canaux calciques du réticulum sarcoplasmique : les ions $Ca^{2+}$ inondent le sarcoplasme. Les ions $Ca^{2+}$ se fixent sur la troponine, qui subit un changement de conformation stérique et repousse la tropomyosine hors du sillon d'actine, démasquant les sites actifs d'attachement.\n- Étape 2 : Formation du pont actomyosine (phase d'attachement) :\n  Chaque tête de myosine, qui a préalablement lié une molécule d'ATP et se trouve dans un état de haute énergie, se lie fermement à l'actine démasquée, formant le complexe actomyosine (pont d'union).\n- Étape 3 : Hydrolyse de l'ATP et pivotement des têtes (phase de glissement) :\n  La fixation de l'actine active puissamment l'activité ATPasique de la tête de myosine. L'ATP est hydrolysé : $\\text{ATP} \\to \\text{ADP} + \\text{P}_i + \\text{Énergie}$. La libération du phosphate inorganique ($P_i$) puis de l'ADP déclenche le pivotement mécanique brusque de la tête de myosine à un angle de 45° vers le centre du sarcomère. Ce mouvement tracte le filament d'actine d'environ 10 nm vers la strie M, provoquant le raccourcissement du sarcomère.\n- Étape 4 : Détachement et retour à l'état initial (phase de détachement) :\n  À la fin du pivotement, la tête de myosine reste solidement accrochée à l'actine. L'arrivée et la fixation d'une NOUVELLE molécule d'ATP sur la tête de myosine provoque la rupture immédiate de la liaison actomyosine : la tête se détache de l'actine. L'ATP est immédiatement hydrolysé pour réarmer la tête à 90° dans sa conformation initiale prête pour un nouveau cycle tant que $[Ca^{2+}]$ reste élevée.\n\n3. Phase de relâchement musculaire :\nLorsque les stimulations nerveuses cessent, des pompes membranaires actives à calcium (pompes SERCA / $Ca^{2+}$-ATPase) réabsorbent activement les ions $Ca^{2+}$ dans le réticulum sarcoplasmique contre leur gradient, avec consommation d'ATP. La concentration en $Ca^{2+}$ retombe en dessous de $10^{-7}\\text{ mol/L}$. La troponine reprend sa conformation de repos, la tropomyosine re-masque les sites actifs d'actine : les ponts se rompent et le muscle retrouve passivement sa longueur initiale sous l'effet de forces élastiques ou des muscles antagonistes.\n\n4. Phénomène pathologique : la rigidité cadavérique (rigor mortis) :\nAprès la mort, l'arrêt de la respiration cellulaire stoppe la synthèse d'ATP. En l'absence totale d'ATP, les pompes calciques s'arrêtent et le $Ca^{2+}$ diffuse dans le sarcoplasme, déclenchant l'attachement et le pivotement des têtes de myosine. Mais en l'absence d'ATP neuf, le détachement est rigoureusement impossible : les ponts actomyosine restent définitivement verrouillés, rendant les muscles rigides et inextensibles jusqu'à la dégradation protéolytique des tissus.",
      keyRule: "Le Ca2+ démasque les sites d'actine en se fixant sur la troponine. L'énergie du pivotement (glissement) provient de l'hydrolyse de l'ATP. Le détachement de la tête de myosine exige la fixation d'une NOUVELLE molécule d'ATP (responsable de la rigidité cadavérique en son absence).",
      formulas: [
        {
          name: "Équation de l'hydrolyse motrice de l'ATP",
          formula: "\\text{Actomyosine-ATP} \\xrightarrow{\\text{ATPasique}} \\text{Actomyosine-ADP-P}_i \\to \\text{Pivotement (45°)} + \\text{ADP} + \\text{P}_i",
          note: "Le détachement nécessite la fixation d'une nouvelle molécule d'ATP"
        }
      ],
      workedExample: {
        title: "Démonstration expérimentale du rôle de l'ATP et du Ca2+ sur des myofibrilles isolées",
        statement: "On place des myofibrilles glycérinées isolées dans trois milieux d'incubation différents et on observe la contraction : - Milieu 1 : myofibrilles + ATP seul (sans Ca2+) -> aucune contraction. - Milieu 2 : myofibrilles + Ca2+ seul (sans ATP) -> aucune contraction. - Milieu 3 : myofibrilles + ATP + Ca2+ -> raccourcissement immédiat et intense des sarcomères. 1. Que démontrent ces expériences ? 2. Pourquoi l'ATP seul est-il insuffisant pour contracter la myofibrille ?",
        methodSteps: [
          "Étape 1 : Analyser le milieu 3. La contraction ne se produit que lorsque l'ATP et le Ca2+ sont simultanément présents : ils sont tous deux indispensables et complémentaires.",
          "Étape 2 : Analyser le milieu 2 (Ca2+ seul). Malgré la présence de Ca2+ qui démasque les sites, en l'absence d'ATP il n'y a pas d'énergie pour faire pivoter les têtes de myosine ni pour les détacher.",
          "Étape 3 : Analyser le milieu 1 (ATP seul). En l'absence de Ca2+, la tropomyosine continue de masquer les sites de liaison d'actine. L'ATP a beau être fixé sur la myosine, les ponts actomyosine ne peuvent pas se former."
        ],
        conclusion: "La contraction musculaire exige obligatoirement la double présence simultanée du Ca2+ (démasquage des sites) et de l'ATP (énergie mécanique du pivotement et détachement)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Cycle en 4 étapes de l'interaction actine-myosine",
        tableData: {
          headers: ["Étape du cycle", "État du calcium (Ca2+)", "État du nucléotide sur la myosine", "Configuration de la tête de myosine", "Conséquence mécanique"],
          rows: [
            ["1. Attachement", "Fixé sur troponine (sites démasqués)", "Myosine liée à ADP + Pi", "Tête armée à 90° liée à l'actine", "Formation du pont actomyosine"],
            ["2. Glissement / pivotement", "Toujours présent", "Libération séquentielle de Pi puis ADP", "Pivotement rapide de 90° à 45°", "Traction de l'actine vers le centre (-10 nm)"],
            ["3. Détachement", "Toujours présent", "Fixation d'une NOUVELLE molécule d'ATP", "Changement de conformation de la tête", "Rupture immédiate de la liaison actomyosine"],
            ["4. Réarmement / Relâchement", "Repompé activement dans le réticulum", "Hydrolyse d'ATP en ADP + Pi", "Retour de la tête à 90° (état armé)", "Masquage des sites par la tropomyosine"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c03_p2_ex1",
          type: "mcq",
          prompt: "Lors de la contraction musculaire, quelle zone ou bande du sarcomère conserve une longueur rigoureusement CONSTANTE ?",
          options: [
            "La bande sombre A",
            "La zone H",
            "La bande claire I",
            "La distance séparant deux stries Z successives"
          ],
          correctAnswerIndex: 0,
          explanation: "La bande sombre A correspond à la longueur des filaments épais de myosine. Comme les filaments ne changent pas de longueur mais glissent simplement les uns sur les autres, la bande A reste constante."
        },
        {
          id: "tle_d_svt_c03_p2_ex2",
          type: "mcq",
          prompt: "Quel est le rôle précis des ions Ca2+ libérés par le réticulum sarcoplasmique dans le sarcoplasme ?",
          options: [
            "Ils se fixent sur la troponine, repoussant la tropomyosine pour démasquer les sites d'actine",
            "Ils hydrolysent directement l'ATP en créatine phosphate",
            "Ils détruisent les ponts actomyosine à la fin de la secousse",
            "Ils bloquent les canaux sodium du sarcolemme"
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions Ca2+ se lient à la troponine C, induisant un changement de conformation qui écarte la tropomyosine et libère les sites de liaison de l'actine pour les têtes de myosine."
        },
        {
          id: "tle_d_svt_c03_p2_ex3",
          type: "mcq",
          prompt: "Quel événement moléculaire direct provoque la RUPTURE du pont actomyosine et le détachement de la tête de myosine ?",
          options: [
            "La fixation d'une nouvelle molécule d'ATP sur la tête de myosine",
            "La libération du phosphate inorganique Pi",
            "La fixation d'un ion sodium sur la troponine",
            "L'épuisement total du glycogène sarcoplasmique"
          ],
          correctAnswerIndex: 0,
          explanation: "C'est la fixation d'une nouvelle molécule d'ATP sur la tête de myosine qui réduit instantanément son affinité pour l'actine et déclenche la rupture du pont d'union."
        },
        {
          id: "tle_d_svt_c03_p2_ex4",
          type: "mcq",
          prompt: "Pourquoi les muscles d'un cadavre deviennent-ils raides et rigides quelques heures après la mort (rigidité cadavérique) ?",
          options: [
            "L'arrêt de la production d'ATP empêche le détachement des têtes de myosine, qui restent verrouillées sur l'actine",
            "Le calcium est totalement détruit par les bactéries cadavériques",
            "Les molécules d'actine se transforment en cristaux de glace",
            "L'acide lactique dissout complètement les fibres musculaires"
          ],
          correctAnswerIndex: 0,
          explanation: "Après la mort, la synthèse d'ATP s'arrête. Sans ATP disponible, les têtes de myosine ne peuvent plus se détacher de l'actine : les ponts restent fixés, bloquant le muscle en rigidité permanente."
        },
        {
          id: "tle_d_svt_c03_p2_ex5",
          type: "mcq",
          prompt: "Que se passe-t-il lors de la phase de pivotement de la tête de myosine ?",
          options: [
            "L'hydrolyse de l'ATP et la libération de l'énergie font basculer la tête à 45°, tractant l'actine vers le centre du sarcomère",
            "La myosine s'enroule autour de la strie Z pour l'étirer",
            "Les filaments de myosine se raccourcissent de moitié",
            "Le calcium quitte définitivement la cellule musculaire"
          ],
          correctAnswerIndex: 0,
          explanation: "La libération des produits d'hydrolyse (Pi et ADP) entraîne la bascule mécanique de la tête de myosine de 90° à 45°, tractant l'actine de 10 nm vers la ligne M centrale."
        },
        {
          id: "tle_d_svt_c03_p2_ex6",
          type: "mcq",
          prompt: "Par quel mécanisme les ions Ca2+ quittent-ils le sarcoplasme pour permettre le relâchement du muscle ?",
          options: [
            "Par transport actif assuré par des pompes calciques (Ca2+-ATPase) réinjectant le Ca2+ dans le réticulum sarcoplasmique",
            "Par diffusion passive accélérée vers les vaisseaux sanguins",
            "Par transformation chimique en ions carbonate insolubles",
            "Par exocytose dans le liquide synovial des articulations"
          ],
          correctAnswerIndex: 0,
          explanation: "Le retour au repos nécessite le repompage actif des ions Ca2+ dans les citernes du réticulum sarcoplasmique par des pompes calciques consommatrices d'ATP."
        },
        {
          id: "tle_d_svt_c03_p2_ex7",
          type: "mcq",
          prompt: "Un inhibiteur pharmacologique bloque sélectivement l'activité de la pompe à calcium du réticulum sarcoplasmique. Quelle conséquence observera-t-on sur le muscle après une stimulation ?",
          options: [
            "Le muscle reste contracté et ne peut plus se relâcher (absence de relaxation)",
            "Le muscle ne peut plus du tout se contracter dès la première excitation",
            "Les filaments d'actine se détachent spontanément des stries Z",
            "La vitesse du potentiel d'action musculaire est multipliée par dix"
          ],
          correctAnswerIndex: 0,
          explanation: "Si la pompe à calcium est bloquée, le Ca2+ reste en concentration élevée dans le sarcoplasme, maintenant les sites démasqués et empêchant la relaxation musculaire."
        },
        {
          id: "tle_d_svt_c03_p2_ex8",
          type: "mcq",
          prompt: "Quel rôle jouent les tubules transverses (système T) dans le couplage excitation-contraction ?",
          options: [
            "Ils propagent rapidement le potentiel d'action de la surface jusqu'au cœur de la fibre pour déclencher la libération synchrone de Ca2+",
            "Ils synthétisent directement les molécules de myosine",
            "Ils expulsent l'acide lactique hors de la fibre musculaire",
            "Ils ancrent le muscle sur le tendon osseux"
          ],
          correctAnswerIndex: 0,
          explanation: "Les tubules T sont des invaginations du sarcolemme qui conduisent le potentiel d'action au plus près des citernes terminales du réticulum pour synchroniser la libération de calcium."
        }
      ]
    },
    {
      id: "pt3_phenomenes_electriques_mecaniques_myogramme",
      order: 3,
      title: "Phénomènes électriques et mécaniques du muscle : le myogramme",
      summary: "Enregistrement expérimental au myographe, relation temporelle électromyogramme / myogramme et analyse des 3 phases de la secousse musculaire isolée.",
      conceptExplanation: "La contraction d'un muscle en réponse à un influx nerveux ou à une stimulation électrique directe associe étroitement des manifestations électriques (potentiels d'action) et mécaniques (force et raccourcissement).\n\n1. Dispositif expérimental d'enregistrement mécanique (le myographe) :\nOn utilise traditionnellement le muscle gastrocnémien de grenouille disséqué avec son nerf sciatique et monté sur un myographe :\n- Le tendon d'Achille est relié à un stylet inscripteur frottant sur un cylindre tournant recouvert de noir de fumée (ou à un capteur de force piézoélectrique relié à un écran d'ordinateur).\n- Des électrodes stimulatrices appliquent des impulsions électriques calibrées sur le nerf ou directement sur le muscle.\n- Le tracé mécanique enregistré s'appelle un myogramme.\n\n2. Décomposition de la secousse musculaire isolée (myogramme élémentaire) :\nEn réponse à une stimulation électrique unique efficace et brève, le muscle réagit par une secousse musculaire isolée dont le tracé comprend 3 phases chronologiques distinctes :\n- 1. Le temps de latence (durée ≈ 1/100 s = 10 ms) : intervalle de temps compris entre l'instant de la stimulation et le début effectif de la réponse mécanique. Pendant ce temps, le muscle ne montre aucune modification visible, mais il s'y déroule des événements biochimiques cruciaux : propagation du potentiel d'action le long du sarcolemme et des tubules T, ouverture des canaux calciques et libération des ions $Ca^{2+}$, fixation sur la troponine et début de formation des ponts actomyosine.\n- 2. La phase de contraction (durée ≈ 4/100 s = 40 ms) : le stylet s'élève rapidement, traduisant le développement de la tension active et le raccourcissement du muscle suite au pivotement répété des têtes de myosine et au glissement des filaments d'actine.\n- 3. La phase de relâchement (durée ≈ 5/100 s = 50 ms) : le tracé redescend plus lentement vers la ligne de base, traduisant le retour progressif du muscle à sa longueur initiale grâce au repompage actif du calcium par le réticulum sarcoplasmique. La phase de relâchement est toujours nettement plus longue que la phase de contraction.\n\n3. Comparaison temporelle de l'électromyogramme et du myogramme :\nSi l'on enregistre simultanément l'activité électrique (potentiel d'action musculaire ou électromyogramme) et la réponse mécanique (myogramme) :\n- Le potentiel d'action musculaire dure seulement 1 à 2 millisecondes.\n- Le potentiel d'action musculaire précède TOUJOURS la secousse mécanique : il se déroule intégralement à l'intérieur du temps de latence.\n- Conclusion fondamentale : Le phénomène électrique est le facteur déclenchant indispensable qui précède et commande le phénomène mécanique de contraction (couplage excitation-contraction).",
      keyRule: "L'électromyogramme (PA musculaire, 1 à 2 ms) précède TOUJOURS le myogramme mécanique et se situe dans son temps de latence. La secousse isolée comprend : latence (10 ms) -> contraction (40 ms) -> relâchement (50 ms, plus lent).",
      formulas: [
        {
          name: "Chronologie de la secousse musculaire isolée",
          formula: "t_{\\text{total}} = t_{\\text{latence}} (\\approx 10\\text{ ms}) + t_{\\text{contraction}} (\\approx 40\\text{ ms}) + t_{\\text{relâchement}} (\\approx 50\\text{ ms}) \\approx 100\\text{ ms}",
          note: "Le relâchement est toujours plus long que la contraction"
        }
      ],
      workedExample: {
        title: "Calcul des phases temporelles d'une secousse musculaire enregistrée au cylindre de Marey",
        statement: "Un cylindre enregistreur tourne à la vitesse constante de 20 cm/s. Sur le myogramme d'une secousse musculaire de grenouille, la trace horizontale de latence mesure 2 mm, la montée de contraction mesure 8 mm et la descente de relâchement mesure 12 mm. 1. Calculer la durée en millisecondes de chaque phase. 2. Vérifier la durée totale de la secousse.",
        methodSteps: [
          "Étape 1 : Calculer l'échelle temporelle. Vitesse v = 20 cm/s = 200 mm/s. Chaque millimètre sur le papier correspond à : Δt = 1 mm / 200 mm/s = 0,005 s = 5 ms.",
          "Étape 2 : Calculer la durée de latence : t_latence = 2 mm × 5 ms/mm = 10 ms.",
          "Étape 3 : Calculer la durée de contraction : t_contraction = 8 mm × 5 ms/mm = 40 ms.",
          "Étape 4 : Calculer la durée de relâchement : t_relâchement = 12 mm × 5 ms/mm = 60 ms.",
          "Étape 5 : Sommer pour obtenir la durée totale : t_total = 10 + 40 + 60 = 110 ms = 0,11 s."
        ],
        conclusion: "Latence = 10 ms ; Contraction = 40 ms ; Relâchement = 60 ms ; Durée totale = 110 ms."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Chronologie comparative de l'électromyogramme et du myogramme",
        tableData: {
          headers: ["Événement", "Nature du phénomène", "Durée moyenne", "Chronologie relative", "Événements physiologiques associés"],
          rows: [
            ["Potentiel d'action musculaire", "Électrique (mouvements ioniques Na+/K+)", "1 à 2 ms", "Débute instantanément après l'excitation", "Dépolarisation du sarcolemme et des tubules T"],
            ["Temps de latence", "Période intermédiaire silencieuse", "10 ms (0,01 s)", "Englobe le potentiel d'action", "Libération du Ca2+ et formation des ponts actomyosine"],
            ["Phase de contraction", "Mécanique (développement de force)", "40 ms (0,04 s)", "Succède immédiatement à la latence", "Pivotement des têtes de myosine et glissement de l'actine"],
            ["Phase de relâchement", "Mécanique (retour à la longueur initiale)", "50 à 60 ms", "Suit le pic de tension maximale", "Repompage actif du Ca2+ par les pompes ATPasiques"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c03_p3_ex1",
          type: "mcq",
          prompt: "Quelle est la relation temporelle exacte entre l'électromyogramme (potentiel d'action) et le myogramme (contraction mécanique) ?",
          options: [
            "Le potentiel d'action précède la secousse musculaire et se situe entièrement dans son temps de latence",
            "La secousse mécanique précède toujours le potentiel d'action de plusieurs secondes",
            "Le potentiel d'action apparaît au sommet de la phase de relâchement",
            "Les deux phénomènes sont rigoureusement simultanés du début à la fin"
          ],
          correctAnswerIndex: 0,
          explanation: "Le phénomène électrique précède toujours le phénomène mécanique : le potentiel d'action musculaire (1 à 2 ms) se déroule pendant le temps de latence et déclenche la contraction."
        },
        {
          id: "tle_d_svt_c03_p3_ex2",
          type: "mcq",
          prompt: "Quelle phase de la secousse musculaire isolée présente systématiquement la durée la plus longue ?",
          options: [
            "La phase de relâchement",
            "La phase de contraction",
            "Le temps de latence",
            "L'artéfact de stimulation"
          ],
          correctAnswerIndex: 0,
          explanation: "La phase de relâchement (≈ 50 ms) est toujours plus lente et prolongée que la phase de contraction (≈ 40 ms), car le repompage actif des ions Ca2+ dans le réticulum prend du temps."
        },
        {
          id: "tle_d_svt_c03_p3_ex3",
          type: "mcq",
          prompt: "Que se passe-t-il sur le plan moléculaire à l'intérieur de la fibre musculaire pendant le temps de latence d'une secousse ?",
          options: [
            "L'onde de dépolarisation se propage dans les tubules T et le réticulum libère les ions Ca2+ dans le sarcoplasme",
            "La totalité de l'ATP est définitivement dégradée en acide lactique",
            "Les myofibrilles se rompent sous l'effet de l'élasticité",
            "Les têtes de myosine sont expulsées hors du sarcolemme"
          ],
          correctAnswerIndex: 0,
          explanation: "La latence est la période de couplage excitation-contraction : propagation du PA, ouverture des canaux calciques du réticulum et début de liaison du Ca2+ sur la troponine."
        },
        {
          id: "tle_d_svt_c03_p3_ex4",
          type: "mcq",
          prompt: "Quel appareil expérimental classique permet d'enregistrer la force et le raccourcissement d'un muscle stimulé sur un cylindre tournant ?",
          options: [
            "Le myographe",
            "L'électrocardiographe",
            "Le spiromètre de Tissot",
            "L'osmophénomètre"
          ],
          correctAnswerIndex: 0,
          explanation: "Le myographe est l'instrument de physiologie permettant d'enregistrer graphiquement les variations mécaniques (longueur ou tension) d'un muscle stimulé."
        },
        {
          id: "tle_d_svt_c03_p3_ex5",
          type: "mcq",
          prompt: "Si un muscle est stimulé par une décharge électrique infraliminaire (en dessous du seuil d'excitabilité), qu'enregistre le myographe ?",
          options: [
            "Une ligne horizontale continue sans aucune secousse mécanique (réponse nulle)",
            "Une secousse musculaire inversée orientée vers le bas",
            "Un tétanos parfait instantané",
            "Une phase de relâchement sans contraction préalable"
          ],
          correctAnswerIndex: 0,
          explanation: "Une stimulation infraliminaire ne provoque aucun potentiel d'action musculaire : aucun ion Ca2+ n'est libéré, le myographe n'enregistre aucune réponse mécanique."
        },
        {
          id: "tle_d_svt_c03_p3_ex6",
          type: "mcq",
          prompt: "Quelle est l'amplitude moyenne en voltage du potentiel d'action d'une fibre musculaire squelettique ?",
          options: [
            "Environ 100 à 130 mV (passage de -85 mV à +30 mV)",
            "Exactement 0 mV",
            "-70 mV constants",
            "Plus de 10 000 V"
          ],
          correctAnswerIndex: 0,
          explanation: "Le PA de la fibre musculaire part d'un potentiel de repos de -85 mV ou -90 mV et monte jusqu'à +25/+30 mV, ce qui donne une amplitude globale d'environ 110 à 120 mV."
        },
        {
          id: "tle_d_svt_c03_p3_ex7",
          type: "mcq",
          prompt: "Sur un cylindre tournant à 10 cm/s (100 mm/s), la phase de contraction d'un myogramme mesure 4 mm. Quelle est sa durée réelle ?",
          options: [
            "0,04 s (40 ms)",
            "0,4 s (400 ms)",
            "0,004 s (4 ms)",
            "4 s"
          ],
          correctAnswerIndex: 0,
          explanation: "t = distance / vitesse = 4 mm / 100 mm/s = 0,04 s = 40 millisecondes."
        },
        {
          id: "tle_d_svt_c03_p3_ex8",
          type: "mcq",
          prompt: "Pourquoi qualifie-t-on la contraction musculaire de phénomène mécano-chimique réversible ?",
          options: [
            "Parce qu'elle convertit l'énergie chimique de l'ATP en travail mécanique, puis retrouve sa longueur initiale au relâchement",
            "Parce qu'elle transforme l'urée en glucose par simple étirement",
            "Parce que les myofilaments fondent sous la chaleur puis se resolidifient",
            "Parce que le muscle change de couleur pendant le mouvement"
          ],
          correctAnswerIndex: 0,
          explanation: "La contraction est un transducteur mécano-chimique : l'énergie de liaison de l'ATP est convertie en force mécanique par glissement réversible des protéines contractiles."
        }
      ]
    },
    {
      id: "pt4_stimulations_successives_tetanos_fatigue",
      order: 4,
      title: "Réponses aux stimulations successives, tétanos et fatigue musculaire",
      summary: "Sommation mécanique, fusion incomplète (tétanos imparfait) vs complète (tétanos parfait), loi de recrutement et altérations de la fatigue musculaire.",
      conceptExplanation: "Dans les conditions physiologiques naturelles, le système nerveux n'envoie pas des potentiels d'action isolés, mais des trains d'ondes répétitives à fréquence variable.\n\n1. Réponse du muscle à deux stimulations efficaces successives (S1 et S2) :\nSelon l'intervalle de temps $(\\Delta t)$ séparant $S_1$ et $S_2$ :\n- Cas 1 : $S_2$ intervient après la fin complète de la secousse de $S_1$ $\\to$ On obtient deux secousses musculaires isolées distinctes et d'égale amplitude. Le muscle a eu le temps de se relâcher totalement et de retrouver son état de repos.\n- Cas 2 : $S_2$ intervient pendant la phase de relâchement de la première secousse $\\to$ La deuxième secousse prend naissance sur la pente descendante de la première : son sommet s'élève plus haut que celui de la première. Il y a eu sommation mécanique partielle (fusion incomplète des deux secousses).\n- Cas 3 : $S_2$ intervient pendant la phase de contraction de la première secousse $\\to$ Les deux réponses fusionnent complètement en une seule secousse géante d'amplitude nettement supérieure. Il y a sommation mécanique totale.\n\n2. Réponse du muscle à une série de stimulations répétées à fréquence croissante :\n- Tétanos imparfait (à fréquence modérée, ex: 15 à 25 Hz) : Les stimulations successives atteignent le muscle pendant la phase de relâchement des secousses précédentes. Les secousses fusionnent de façon incomplète, produisant un plateau oscillant en « dents de scie ». La tension moyenne développée est supérieure à celle d'une secousse isolée.\n- Tétanos parfait (à fréquence élevée, ex: 50 à 100 Hz) : Les stimulations successives sont tellement rapprochées qu'elles frappent le muscle pendant la phase de contraction des secousses précédentes. La fusion est complète : le myogramme présente une montée initiale rapide suivie d'un plateau horizontal parfaitement rectiligne et lisse sans aucune oscillation. La tension développée est maximale (3 à 4 fois celle d'une secousse simple). C'est le mode physiologique de contraction de nos muscles lors d'un effort soutenu ou du maintien de la posture.\n- Explication moléculaire du tétanos : La fréquence élevée des potentiels d'action maintient les canaux calciques ouverts en permanence ; la concentration en $Ca^{2+}$ sarcoplasmique reste saturante, maintenant tous les sites d'actine démasqués et activant en continu un nombre maximal de ponts actomyosine.\n\n3. Lois de réponse comparées : fibre isolée versus muscle entier :\n- La fibre musculaire isolée obéit à la loi du tout ou rien : inexcitable sous le seuil ; dès le seuil atteint, sa secousse atteint d'emblée son amplitude maximale.\n- Le muscle entier obéit à la loi de sommation et de recrutement : constitué de milliers de fibres associées en unités motrices de seuils variés, son amplitude croît avec l'intensité du stimulus au fur et à mesure que de nouvelles unités motrices sont recrutées, jusqu'à saturation.\n\n4. La fatigue musculaire :\nLorsqu'un muscle est soumis à des stimulations prolongées ou répétées sans temps de repos suffisant, il entre en état de fatigue. Le myogramme d'un muscle fatigué présente des altérations caractéristiques :\n- Une diminution progressive et prononcée de l'amplitude de la contraction (baisse de la force développée).\n- Un allongement important de la durée de contraction et surtout de la durée de relâchement (décontraction lente et difficile).\n- Causes physiologiques de la fatigue : épuisement des réserves locales de glycogène et d'ATP, accumulation excessive d'acide lactique et d'ions $H^+$ (acidose inhibant l'activité ATPasique de la myosine et diminuant la sensibilité de la troponine au $Ca^{2+}$), fuite de potassium extracellulaire et échauffement thermique. À l'extrême, la fatigue engendre des crampes douloureuses (contractures involontaires et douloureuses par déficit en ATP et en eau).",
      keyRule: "Stimulations répétées pendant le relâchement = tétanos imparfait (dents de scie). Stimulations répétées pendant la contraction = tétanos parfait (plateau lisse horizontal). La fatigue musculaire diminue l'amplitude et allonge le relâchement.",
      formulas: [
        {
          name: "Fréquence limite de fusion tétanique",
          formula: "f_{\\text{tétanos parfait}} \\ge \\frac{1}{t_{\\text{contraction}}} \\approx \\frac{1}{0{,}04\\text{ s}} = 25 \\text{ à } 50\\text{ Hz}",
          note: "Génère un plateau de force maximale continue"
        }
      ],
      workedExample: {
        title: "Identification de tracés myographiques lors d'un protocole expérimental",
        statement: "On dispose de quatre tracés myographiques A, B, C et D obtenus chez une grenouille : - Tracé A : une montée rapide puis descente progressive d'amplitude 15 mm. - Tracé B : série d'oscillations en dents de scie stabilisées à 30 mm de hauteur. - Tracé C : plateau horizontal parfaitement rectiligne à 45 mm de hauteur. - Tracé D : tracé d'amplitude faible (5 mm) avec une phase de relâchement très étalée dans le temps. 1. Identifier chacun de ces 4 tracés. 2. Expliquer l'origine de l'aspect du tracé C.",
        methodSteps: [
          "Étape 1 : Analyser le tracé A. Une montée puis une descente isolée correspond à une secousse musculaire isolée élémentaire.",
          "Étape 2 : Analyser le tracé B. Des oscillations régulières en dents de scie correspondent à un tétanos imparfait (fusion incomplète des secousses).",
          "Étape 3 : Analyser le tracé C. Un plateau horizontal parfait sans oscillation correspond à un tétanos parfait (fusion complète des secousses à haute fréquence).",
          "Étape 4 : Analyser le tracé D. Une faible amplitude combinée à un allongement du relâchement est la signature caractéristique de la fatigue musculaire.",
          "Étape 5 : Justifier l'aspect de C. Les stimulations se succèdent avant le moindre relâchement, maintenant le taux de Ca2+ saturant dans le sarcoplasme : les têtes de myosine exercent une traction continue maximale."
        ],
        conclusion: "A = Secousse isolée ; B = Tétanos imparfait ; C = Tétanos parfait ; D = Muscle fatigué."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison des réponses mécaniques du muscle aux stimulations répétées",
        tableData: {
          headers: ["Type d'enregistrement", "Fréquence des stimulations", "Moment d'impact des stimulations", "Aspect graphique du myogramme", "État calcique sarcoplasmique"],
          rows: [
            ["Secousse isolée", "Stimulation unique", "Muscle au repos", "Montée puis descente asymétrique", "Pic bref de Ca2+ puis réabsorption complète"],
            ["Deux secousses fusionnées", "Deux chocs rapprochés", "Pendant la contraction ou le relâchement", "Sommation mécanique partielle ou totale", "Deuxième vague calcique avant élimination de la première"],
            ["Tétanos imparfait", "Fréquence moyenne (15-25 Hz)", "Pendant la phase de relâchement", "Courbe ondulée en 'dents de scie'", "Fluctuations répétées du Ca2+ au-dessus du seuil"],
            ["Tétanos parfait", "Fréquence élevée (> 40-50 Hz)", "Pendant la phase de contraction", "Plateau horizontal lisse continu", "Saturation permanente en Ca2+, ponts activés en continu"],
            ["Muscle fatigué", "Stimulation très prolongée", "Épuisement métabolique", "Faible amplitude, relâchement très ralenti", "Déficit d'ATP, acidification par acide lactique"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c03_p4_ex1",
          type: "mcq",
          prompt: "Quel tracé obtient-on lorsqu'un muscle squelettique est soumis à des stimulations répétitives efficaces appliquées pendant la phase de RELÂCHEMENT des secousses précédentes ?",
          options: [
            "Un tétanos imparfait présentant un tracé en dents de scie",
            "Un tétanos parfait présentant un plateau horizontal lisse",
            "Une secousse musculaire isolée sans sommation",
            "Un potentiel de repos stabilisé à -70 mV"
          ],
          correctAnswerIndex: 0,
          explanation: "Lorsque les stimulations tombent pendant la phase de relâchement, les secousses fusionnent de façon incomplète, créant un tracé ondulé en dents de scie caractéristique du tétanos imparfait."
        },
        {
          id: "tle_d_svt_c03_p4_ex2",
          type: "mcq",
          prompt: "Pourquoi le tétanos parfait produit-il un plateau continu lisse d'amplitude maximale ?",
          options: [
            "Parce que la fréquence élevée des stimulations maintient une saturation permanente en Ca2+, empêchant tout relâchement intermédiaire",
            "Parce que les filaments d'actine fusionnent chimiquement avec la strie Z",
            "Parce que le cylindre enregistreur s'arrête de tourner",
            "Parce que les cellules de Schwann produisent de la chaleur"
          ],
          correctAnswerIndex: 0,
          explanation: "À haute fréquence, le calcium n'a pas le temps d'être repompé : sa concentration reste saturante dans le sarcoplasme, maintenant les ponts actomyosine continuellement actifs."
        },
        {
          id: "tle_d_svt_c03_p4_ex3",
          type: "mcq",
          prompt: "Quelles sont les deux modifications majeures observées sur le myogramme d'un muscle en état de fatigue avancée ?",
          options: [
            "Une baisse prononcée de l'amplitude de contraction et un allongement notable de la durée de relâchement",
            "Une élévation considérable de l'amplitude et une vitesse de contraction doublée",
            "Une disparition totale du temps de latence et une augmentation de l'ATP",
            "Une transformation de toutes les fibres en tissu adipeux"
          ],
          correctAnswerIndex: 0,
          explanation: "La fatigue musculaire se traduit graphiquement par une diminution de la force développée (amplitude plus basse) et un relâchement nettement plus long et difficile."
        },
        {
          id: "tle_d_svt_c03_p4_ex4",
          type: "mcq",
          prompt: "Si une deuxième stimulation S2 est portée sur un muscle exactement pendant la phase de contraction déclenchée par S1, que constate-t-on ?",
          options: [
            "Une sommation totale des deux secousses donnant une secousse unique d'amplitude nettement supérieure",
            "L'annulation immédiate de la contraction et le retour à zéro",
            "Deux secousses bien séparées de même amplitude",
            "Une période réfractaire absolue mécanique bloquant le muscle"
          ],
          correctAnswerIndex: 0,
          explanation: "L'effet mécanique de S2 s'additionne intégralement à celui de S1 encore en ascension : les deux secousses fusionnent complètement en une secousse d'amplitude accrue."
        },
        {
          id: "tle_d_svt_c03_p4_ex5",
          type: "mcq",
          prompt: "Quelle différence fondamentale de comportement existe-t-il entre une fibre musculaire isolée et un muscle entier face à des stimulations d'intensités croissantes ?",
          options: [
            "La fibre isolée obéit à la loi du tout ou rien, tandis que le muscle entier obéit à la loi de sommation et recrutement",
            "La fibre isolée réalise un tétanos parfait, tandis que le muscle ne fait que des secousses",
            "Le muscle entier ne répond qu'à une seule intensité sans jamais recruter",
            "Il n'existe rigoureusement aucune différence de réponse entre les deux"
          ],
          correctAnswerIndex: 0,
          explanation: "La fibre isolée donne une réponse d'emblée maximale dès le seuil (tout ou rien). Le muscle entier recrute de plus en plus de fibres à mesure que l'intensité augmente (sommation)."
        },
        {
          id: "tle_d_svt_c03_p4_ex6",
          type: "mcq",
          prompt: "Quelle substance métabolique s'accumule dans le muscle lors d'un effort intense en anaérobie et participe à l'apparition de la fatigue et des crampes ?",
          options: [
            "L'acide lactique (lactate)",
            "L'acide pyruvique purifié",
            "Le dioxyde de carbone gazeux",
            "L'urée hépatique"
          ],
          correctAnswerIndex: 0,
          explanation: "La fermentation lactique produit de l'acide lactique dont l'accumulation acidifie le sarcoplasme (acidose), perturbant l'activité de l'ATPase de la myosine et favorisant crampes et fatigue."
        },
        {
          id: "tle_d_svt_c03_p4_ex7",
          type: "mcq",
          prompt: "Dans nos mouvements quotidiens (maintien de la tête, marche, port d'une charge), sous quel régime mécanique nos muscles striés fonctionnent-ils habituellement ?",
          options: [
            "Sous forme de tétanos parfait physiologique produit par la stimulation asynchrone des unités motrices",
            "Exclusivement sous forme de secousses musculaires isolées disjointes",
            "Par dépolarisation continue sans intervention d'ions calcium",
            "Par relâchement permanent alternant avec des spasmes"
          ],
          correctAnswerIndex: 0,
          explanation: "Les contractions physiologiques naturelles sont des tétanos parfaits résultant de trains d'influx à haute fréquence envoyés de façon asynchrone aux différentes unités motrices."
        },
        {
          id: "tle_d_svt_c03_p4_ex8",
          type: "mcq",
          prompt: "Pourquoi un muscle épuisé met-il beaucoup plus de temps à se relâcher qu'un muscle reposé ?",
          options: [
            "Parce que la baisse du taux d'ATP ralentit le fonctionnement des pompes de réabsorption du Ca2+ dans le réticulum",
            "Parce que les tendons se sont calcifiés pendant l'effort",
            "Parce que les neurones moteurs meurent après chaque contraction",
            "Parce que le glycogène se solidifie dans le sarcolemme"
          ],
          correctAnswerIndex: 0,
          explanation: "Le relâchement dépend de la pompe SERCA consommatrice d'ATP pour refouler le Ca2+. Si l'ATP devient rare et le milieu acide, le repompage du calcium s'effectue avec lenteur."
        }
      ]
    },
    {
      id: "pt5_energetique_musculaire_regeneration_atp",
      order: 5,
      title: "Énergétique musculaire et voies de régénération de l'ATP",
      summary: "Stabilité de la réserve d'ATP, voies rapides anaérobies alactiques (phosphocréatine, myokinase), voies lentes : glycolyse lactique et respiration mitochondriale (bilan à 38 ATP).",
      conceptExplanation: "La contraction musculaire consomme une quantité considérable d'énergie biochimique sous forme d'adénosine triphosphate (ATP). Pourtant, les dosages biochimiques révèlent un fait remarquable : la concentration intracellulaire en ATP reste constante (4 à 6 mg par gramme de muscle frais) que le muscle soit au repos complet ou en pleine activité sportive. Cette constance démontre que l'ATP est régénéré en continu et à la vitesse exacte où il est consommé.\n\n1. Consommation métabolique en activité :\nLa comparaison entre muscle au repos et muscle en activité montre que l'activité s'accompagne de :\n- Une forte augmentation de la consommation de dioxygène ($O_2$) et de glucides (glucose et glycogène musculaire).\n- Une forte augmentation de la production de dioxyde de carbone ($CO_2$) et d'acide lactique.\n- Une absence totale d'utilisation des protides dans les conditions normales.\n\n2. Les voies de régénération de l'ATP :\nL'organisme dispose de deux grandes catégories de voies métaboliques pour renouveler l'ATP :\n\nA. Les voies rapides (anaérobies alactiques, dans le sarcoplasme) :\nElles n'utilisent ni dioxygène ($O_2$) et ne produisent pas d'acide lactique. Elles interviennent instantanément dès la première seconde d'effort intense (sprint, haltérophilie) :\n- 1. La voie de la phosphocréatine (créatine phosphate) catalysée par la phosphocréatine kinase (CPK) :\n  $\\text{ADP} + \\text{Phosphocréatine} \\xrightarrow{\\text{créatine kinase}} \\text{ATP} + \\text{Créatine}$.\n  C'est la voie la plus rapide de reconstitution immédiate de l'ATP (efficace pendant les 5 à 10 premières secondes).\n- 2. La voie de la myokinase (adénylate kinase) :\n  $2\\text{ ADP} \\xrightarrow{\\text{myokinase}} \\text{ATP} + \\text{AMP}$.\n  Elle permet de récupérer une molécule d'ATP à partir de deux molécules d'ADP usagées.\n\nB. Les voies lentes :\n- 1. La voie anaérobie lactique (glycolyse suivie de fermentation lactique dans le hyaloplasme) :\n  Elle ne consomme pas d'$O_2$. Elle débute par la glycolyse cytosolique : dégradation d'une molécule de glucose en 2 molécules d'acide pyruvique avec production nette de 2 ATP (ou 8 ATP en équivalents énergétiques totaux avec les coenzymes réduits).\n  En l'absence ou en déficit d'$O_2$, l'acide pyruvique est réduit en acide lactique. Le bilan énergétique utile direct de cette fermentation est faible : $8\\text{ ATP} - 6\\text{ ATP} = 2\\text{ ATP}$ par molécule de glucose. Cette voie intervient lors d'efforts intenses de 30 secondes à 2 minutes (ex: 400 mètres) et provoque l'accumulation d'acide lactique responsable de l'acidose et de la fatigue musculaire.\n- 2. La voie aérobie (respiration cellulaire dans la mitochondrie ou voie oxydative) :\n  En présence suffisante de dioxygène ($O_2$), les 2 acides pyruviques pénètrent dans la matrice des mitochondries. Ils y subissent la décarboxylation oxydative, le cycle de Krebs et la chaîne respiratoire mitochondriale au niveau des crêtes, pour être dégradés intégralement en $CO_2$ et $H_2O$ :\n  * Chaque acide pyruvique génère 15 molécules d'ATP dans la mitochondrie $\\to 2 \\times 15 = 30\\text{ ATP}$.\n  * En ajoutant les 8 ATP équivalents issus de la phase initiale de glycolyse, la respiration complète d'une molécule de glucose produit **38 molécules d'ATP** !\n  * Équation globale de la respiration cellulaire : $C_6H_{12}O_6 + 6\\text{ O}_2 \\to 6\\text{ CO}_2 + 6\\text{ H}_2O + 38\\text{ ATP}$.\n  Cette voie aérobie a un rendement énergétique exceptionnel. C'est la filière reine de l'endurance, fournissant l'énergie des efforts prolongés (marathon, cyclisme, vie courante).",
      keyRule: "L'ATP reste constant (4 à 6 mg/g de muscle) car il est renouvelé en temps réel. Voies rapides : Phosphocréatine (ADP + PC -> ATP + C) et Myokinase (2 ADP -> ATP + AMP). Voie anaérobie lactique = 2 ATP + acide lactique. Voie aérobie mitochondriale = 38 ATP + CO2 + H2O.",
      formulas: [
        {
          name: "Régénération rapide par la phosphocréatine",
          formula: "\\text{ADP} + \\text{Phosphocréatine} \\xrightarrow{\\text{Créatine kinase}} \\text{ATP} + \\text{Créatine}",
          note: "Voie anaérobie alactique immédiate (5 à 10 s d'effort maximal)"
        },
        {
          name: "Bilan global de la respiration cellulaire du glucose",
          formula: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{ O}_2 \\xrightarrow{\\text{Mitochondrie}} 6\\text{ CO}_2 + 6\\text{ H}_2\\text{O} + 38\\text{ ATP}",
          note: "Voie aérobie d'endurance : 8 ATP (glycolyse) + 30 ATP (2 pyruvates dans le cycle de Krebs)"
        }
      ],
      workedExample: {
        title: "Calcul du rendement comparé entre filière aérobie et filière anaérobie lactique",
        statement: "Un coureur consomme 0,5 mole de glucose. 1. Calculer le nombre de moles d'ATP produites si ce glucose est dégradé par la filière anaérobie lactique. 2. Calculer le nombre de moles d'ATP produites s'il est dégradé par la respiration aérobie. 3. En déduire le rapport de gain énergétique.",
        methodSteps: [
          "Étape 1 : Calculer le bilan anaérobie lactique. En anaérobie lactique, 1 mole de glucose fournit 2 moles d'ATP nettes. Pour 0,5 mole de glucose : n_ATP = 0,5 × 2 = 1 mole d'ATP.",
          "Étape 2 : Calculer le bilan aérobie. En respiration aérobie complète, 1 mole de glucose fournit 38 moles d'ATP. Pour 0,5 mole de glucose : n_ATP = 0,5 × 38 = 19 moles d'ATP.",
          "Étape 3 : Calculer le ratio de rendement : Rapport = 19 moles / 1 mole = 19 fois plus d'énergie en aérobie."
        ],
        conclusion: "La respiration aérobie fournit 19 moles d'ATP (38 ATP/glucose) contre seulement 1 mole d'ATP (2 ATP/glucose) en fermentation lactique, soit un rendement 19 fois supérieur."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Tableau récapitulatif des filières énergétiques de régénération de l'ATP",
        tableData: {
          headers: ["Filière métabolique", "Substrat énergétique utilisé", "Besoin en O2", "Sous-produit / Déchet", "Rendement en ATP", "Type d'effort sportif"],
          rows: [
            ["Voie de la phosphocréatine", "Phosphocréatine + ADP", "Non (anaérobie)", "Créatine (sans acide lactique)", "1 ATP / molécule de PC", "Effort explosif très bref (0 à 10 s : sprint 100 m, saut)"],
            ["Voie de la myokinase", "2 molécules d'ADP usagées", "Non (anaérobie)", "AMP", "1 ATP par réaction", "Secours d'urgence cellulaire immédiat"],
            ["Glycolyse anaérobie lactique", "Glucose / Glycogène", "Non (anaérobie)", "Acide lactique (acidifiant)", "2 ATP nets par glucose", "Effort intense de demi-fond (30 s à 2 min : 400 m)"],
            ["Respiration aérobie", "Glucose + 6 O2 (mitochondrie)", "Oui (aérobie obligatoire)", "CO2 + H2O (éliminés facilement)", "38 ATP par glucose", "Endurance prolongée (> 3 min : course, cyclisme, natation)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c03_p5_ex1",
          type: "mcq",
          prompt: "Quelle observation biochimique surprenante fait-on lorsqu'on dose l'ATP d'un muscle squelettique au repos et après une séance d'activité ?",
          options: [
            "La quantité d'ATP reste remarquablement constante (4 à 6 mg/g de muscle frais)",
            "L'ATP est totalement tombé à zéro dès la deuxième seconde",
            "L'ATP est multiplié par cent mille sous l'effet du calcium",
            "L'ATP s'est intégralement transformé en glycogène insoluble"
          ],
          correctAnswerIndex: 0,
          explanation: "La concentration en ATP reste constante (4 à 6 mg/g) grâce à des voies de régénération immédiates et continues qui reconstituent l'ATP au fur et à mesure de sa consommation."
        },
        {
          id: "tle_d_svt_c03_p5_ex2",
          type: "mcq",
          prompt: "Quelle réaction biochimique rapide catalysée par la créatine kinase régénère instantanément l'ATP sans utiliser d'oxygène ni produire d'acide lactique ?",
          options: [
            "ADP + Phosphocréatine -> ATP + Créatine",
            "Glucose + 6 O2 -> 6 CO2 + 6 H2O",
            "2 Acides pyruviques -> 2 Acides lactiques",
            "ATP + H2O -> AMP + 2 Pi"
          ],
          correctAnswerIndex: 0,
          explanation: "La voie de la phosphocréatine (créatine phosphate) transfère directement un groupement phosphate à l'ADP pour reformer de l'ATP de manière quasi-instantanée."
        },
        {
          id: "tle_d_svt_c03_p5_ex3",
          type: "mcq",
          prompt: "Quelle est la réaction catalysée par l'enzyme myokinase dans le muscle en activité ?",
          options: [
            "2 ADP -> ATP + AMP",
            "Glucose -> Acide lactique + CO2",
            "Phosphocréatine + O2 -> ATP + H2O",
            "Acétylcholine -> Acétate + Choline"
          ],
          correctAnswerIndex: 0,
          explanation: "La myokinase (ou adénylate kinase) permet la formation d'une molécule d'ATP et d'une molécule d'AMP à partir de deux molécules d'ADP."
        },
        {
          id: "tle_d_svt_c03_p5_ex4",
          type: "mcq",
          prompt: "Combien de molécules d'ATP au total sont produites lors de la dégradation aérobie complète d'une molécule de glucose par la respiration cellulaire ?",
          options: [
            "38 molécules d'ATP",
            "2 molécules d'ATP",
            "8 molécules d'ATP",
            "100 molécules d'ATP"
          ],
          correctAnswerIndex: 0,
          explanation: "La respiration cellulaire produit 38 ATP au total par molécule de glucose : 8 ATP équivalents issus de la glycolyse + 30 ATP issus de l'oxydation des deux pyruvates dans la mitochondrie."
        },
        {
          id: "tle_d_svt_c03_p5_ex5",
          type: "mcq",
          prompt: "Quel est le bilan énergétique net direct en ATP de la fermentation lactique (voie anaérobie lactique) par molécule de glucose dégradée ?",
          options: [
            "2 ATP nets",
            "38 ATP nets",
            "15 ATP nets",
            "0 ATP net"
          ],
          correctAnswerIndex: 0,
          explanation: "En l'absence de dioxygène, la dégradation du glucose s'arrête à l'acide lactique : le rendement énergétique net est limité à seulement 2 ATP par molécule de glucose."
        },
        {
          id: "tle_d_svt_c03_p5_ex6",
          type: "mcq",
          prompt: "Dans quel compartiment cellulaire se déroulent respectivement la glycolyse et le cycle de Krebs ?",
          options: [
            "La glycolyse dans le hyaloplasme (cytoplasme) et le cycle de Krebs dans la matrice mitochondriale",
            "La glycolyse dans le noyau et le cycle de Krebs dans les citernes du réticulum",
            "Tous les deux exclusivement à la surface externe du sarcolemme",
            "La glycolyse dans les stries Z et le cycle de Krebs dans les faisceaux d'actine"
          ],
          correctAnswerIndex: 0,
          explanation: "La glycolyse est une étape cytosolique (hyaloplasme). Les acides pyruviques pénètrent ensuite dans la mitochondrie où le cycle de Krebs se déroule dans la matrice."
        },
        {
          id: "tle_d_svt_c03_p5_ex7",
          type: "mcq",
          prompt: "Un athlète dispute une épreuve de sprint de 100 mètres courue en 10 secondes à intensité maximale. Quelle est la filière énergétique prédominante sollicitée par ses muscles ?",
          options: [
            "La voie anaérobie alactique (ATP préexistant et réserve de phosphocréatine)",
            "La respiration cellulaire aérobie avec consommation de graisses",
            "La dégradation exclusive des protides musculaires",
            "La fermentation alcoolique intramitochondriale"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour un effort explosif maximal de moins de 10 secondes, l'ATP est fourni immédiatement par le stock d'ATP libre et la dégradation ultra-rapide de la phosphocréatine (anaérobie alactique)."
        },
        {
          id: "tle_d_svt_c03_p5_ex8",
          type: "mcq",
          prompt: "Pourquoi la respiration cellulaire aérobie est-elle indispensable pour courir un marathon de 42 km ?",
          options: [
            "Parce qu'elle offre une capacité énergétique quasi inépuisable avec un rendement élevé de 38 ATP sans accumulation d'acide lactique",
            "Parce que les réserves de phosphocréatine durent plus de 5 heures",
            "Parce qu'elle empêche le cœur de battre trop vite",
            "Parce qu'elle produit de l'oxygène à l'intérieur des poumons"
          ],
          correctAnswerIndex: 0,
          explanation: "La voie aérobie utilise l'oxygène pour oxyder complètement glucose et acides gras avec un rendement élevé (38 ATP) en ne rejetant que du CO2 et de l'eau, permettant un effort de plusieurs heures."
        }
      ]
    }
  ]
};

