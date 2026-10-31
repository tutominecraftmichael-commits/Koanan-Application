// ============================================================================
// MODULE OFFICIEL : SVT 2de C (SCIENCES DE LA VIE ET DE LA TERRE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
//
// THÈME : LA STRUCTURE GÉOLOGIQUE DE LA CÔTE D'IVOIRE ET LE DEVENIR DES ROCHES MAGMATIQUES
// - Leçon 1 : La structure géologique de la Côte d'Ivoire (4h)
// - Leçon 2 : L'altération chimique des roches magmatiques (2h)
// - Leçon 3 : La formation des roches sédimentaires (4h)
// - Leçon 4 : La formation des roches métamorphiques (2h)
// - Leçon 5 : Le devenir des roches métamorphiques (2h)
//
// Règle absolue : Zéro code brut informatique, pédagogie pas-à-pas, 8 questions QCM par mini-leçon (score 8/8 exigé)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 1 : LA STRUCTURE GÉOLOGIQUE DE LA CÔTE D'IVOIRE
// ============================================================================
export const svt2deCStructureGeologiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch1_structure_geologique_cote_ivoire",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 1,
  "officialVolumeHours": 4,
  "title": "Leçon 1 — La structure géologique de la Côte d'Ivoire",
  "summary": "Organisation géologique de la Côte d'Ivoire en deux grands ensembles (socle cristallin 97,5 % et bassin sédimentaire côtier 2,5 %), accidents géologiques majeurs (failles, plis et discordances) et diversité des roches.",
  "points": [
    {
      "id": "seconde_c_svt_ch1_p1_grands_ensembles_geologiques_socle_bassin",
      "order": 1,
      "title": "Les grands ensembles géologiques : socle cristallin et bassin sédimentaire",
      "summary": "Distinguer le socle cristallin précambrien (domaines archéen et protérozoïque) du bassin sédimentaire côtier méso-cénozoïque et connaître leur répartition géographique.",
      "conceptExplanation": "1. Présentation générale du cadre géologique ivoirien :\nLe territoire de la Côte d'Ivoire appartient au craton ouest-africain (dorsale de Man ou dorsale Léo). Il est subdivisé en deux grands ensembles géologiques distincts par leur âge, leur étendue et leur nature lithologique :\n- Le socle cristallin (ou précambrien) qui couvre 97,5 % du territoire national.\n- Le bassin sédimentaire côtier qui n'occupe que 2,5 % du territoire au Sud le long du littoral.\n\n2. Le socle cristallin (97,5 % du territoire) :\nIl date du Précambrien (4 000 à 540 millions d'années). Il est scindé en deux domaines géologiques d'âges différents, séparés par une immense faille subméridienne : la faille de Sassandra (direction Nord-Sud) :\n- Le domaine Archéen (ou domaine de Kéniéma-Man) :\n  * Localisation : situé exclusivement à l'Ouest de la faille de Sassandra (région montagneuse de Man, Danané, Guiglo, Tabou).\n  * Âge : Précambrien inférieur (4 000 à 2 500 Ma), façonné par les cycles orogéniques léonnien et libérien. C'est le domaine le plus ancien et le plus accidenté.\n  * Roches caractéristiques : charnockites, granites anciens, gneiss, quartzites ferrugineux (itabirites), pyroxénites, migmatites, schistes.\n  * Métamorphisme : de degré mésozonal à catazonal (hautes températures et fortes pressions).\n- Le domaine Protérozoïque (ou domaine Baoulé-Mossi ou Birrimien) :\n  * Localisation : situé à l'Est de la faille de Sassandra, il couvre le Nord, le Centre et une partie du Sud-Est ivoirien. C'est le domaine le plus vaste et le plus récent du socle.\n  * Âge : Précambrien supérieur (2 500 à 540 Ma), structuré lors du mégacycle orogénique éburnéen (1 800 à 2 500 Ma).\n  * Roches caractéristiques : granitoïdes éburnéens (granites concordants et discordants), schistes birrimiens, formations volcano-sédimentaires (ceintures de roches vertes).\n  * Métamorphisme : de degré épizonal à mésozonal.\n\n3. Le bassin sédimentaire côtier (2,5 % du territoire) :\n- Localisation : s'étire en une étroite bande littorale en forme de croissant le long du golfe de Guinée, de Fresco à l'Ouest jusqu'à Assinie à l'Est (et se prolonge au Ghana).\n- Âge : mis en place à partir de l'ère Secondaire (Crétacé supérieur, vers 135 Ma, lors de l'ouverture de l'océan Atlantique Sud) et se poursuit au Tertiaire et Quaternaire.\n- Lithologie : constitué de sédiments non plissés tels que des sables fins à grossiers, des argiles, des grès ferrugineux et des conglomérats.\n- Structure interne : traversé d'Ouest en Est par la grande faille des lagunes (rejet vertical descendant vers le Sud pouvant atteindre 5 000 m).",
      "formulas": [
        {
          "name": "Répartition des ensembles géologiques de Côte d'Ivoire",
          "formula": "Socle cristallin (97,5 %) + Bassin sédimentaire (2,5 %) = 100 %",
          "note": "Le socle précambrien domine quasi-totalement le territoire."
        },
        {
          "name": "Subdivision du socle cristallin",
          "formula": "Domaine Archéen (Ouest) | Faille de Sassandra | Domaine Protérozoïque (Est/Centre/Nord)",
          "note": "La faille de Sassandra est la frontière tectonique majeure du socle."
        }
      ],
      "keyRule": "Pour situer les domaines du socle cristallin : l'ARCHÉEN (le plus vieux, 4 000 à 2 500 Ma, région de Man) est toujours à l'OUEST de la faille de Sassandra. Le PROTÉROZOÏQUE (Baoulé-Mossi/Birrimien, plus récent, 2 500 à 540 Ma) est toujours à l'EST. Le bassin sédimentaire (2,5 %) est uniquement au SUD sur le littoral.",
      "workedExample": {
        "title": "Exemple résolu : Identification des ensembles géologiques sur une carte de Côte d'Ivoire",
        "statement": "Un élève observe une carte muette de la Côte d'Ivoire divisée en trois zones notées A, B et C, ainsi qu'une ligne de fracture F1 :\n- Zone A : située à l'Ouest, comprenant Man et Danané.\n- Zone B : située au Centre et à l'Est, comprenant Bouaké et Korhogo.\n- Zone C : bande littorale étroite au Sud comprenant Abidjan et Grand-Bassam.\n- Ligne F1 : fracture séparant la zone A de la zone B.\nIdentifier les zones A, B, C et la ligne F1, puis indiquer l'âge géologique relatif de A par rapport à B.",
        "methodSteps": [
          "Étape 1 : Identifier la ligne frontière F1 : il s'agit de la faille géologique de Sassandra de direction générale Nord-Sud.",
          "Étape 2 : Identifier la zone A : située à l'Ouest de la faille de Sassandra, c'est le domaine Archéen (ou Kéniéma-Man).",
          "Étape 3 : Identifier la zone B : située à l'Est de la faille de Sassandra sur la grande majorité du pays, c'est le domaine Protérozoïque (ou Baoulé-Mossi / Birrimien). L'ensemble {A + B} forme le socle cristallin (97,5 %).",
          "Étape 4 : Identifier la zone C : bande côtière littorale de Fresco à Assinie, c'est le bassin sédimentaire côtier (2,5 %).",
          "Étape 5 : Comparer les âges de A et B : le domaine Archéen A (Précambrien inférieur, 4 000 à 2 500 Ma) est beaucoup plus ancien que le domaine Protérozoïque B (Précambrien supérieur, 2 500 à 540 Ma)."
        ],
        "conclusion": "A = Domaine Archéen, B = Domaine Protérozoïque, C = Bassin sédimentaire côtier, F1 = Faille de Sassandra. L'Archéen est le domaine le plus ancien de la Côte d'Ivoire."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle proportion du territoire de la Côte d'Ivoire est occupée par le socle cristallin ?",
          "options": [
            "97,5 %",
            "2,5 %",
            "50 %",
            "75 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le socle cristallin précambrien occupe la quasi-totalité du territoire ivoirien (97,5 %), tandis que le bassin sédimentaire côtier n'en représente que 2,5 %."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex2",
          "type": "mcq",
          "prompt": "Quel accident géologique majeur sépare le domaine archéen du domaine protérozoïque en Côte d'Ivoire ?",
          "options": [
            "La faille de Sassandra",
            "La faille des lagunes",
            "La faille du Haut N'Zi",
            "La faille de Dimbokro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La faille de Sassandra, orientée Nord-Sud, est la fracture tectonique majeure séparant le domaine archéen à l'Ouest du domaine protérozoïque à l'Est."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex3",
          "type": "mcq",
          "prompt": "À quelle ère géologique s'est mis en place le socle cristallin ivoirien ?",
          "options": [
            "Au Précambrien (4 000 à 540 millions d'années)",
            "À l'ère Primaire (Paléozoïque)",
            "À l'ère Secondaire (Mésozoïque)",
            "À l'ère Quaternaire (Cénozoïque)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le socle cristallin ivoirien est très ancien : il s'est édifié durant le Précambrien entre 4 000 et 540 millions d'années avant notre ère."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex4",
          "type": "mcq",
          "prompt": "Dans quelle région de Côte d'Ivoire se situe principalement le domaine géologique archéen ?",
          "options": [
            "À l'Ouest de la faille de Sassandra, dans la région montagneuse de Man",
            "Au Nord du pays, autour de Korhogo",
            "Au Centre, dans la région de Bouaké",
            "Sur le littoral Sud, entre Abidjan et Assinie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le domaine archéen (Kéniéma-Man) est situé à l'Ouest de la faille de Sassandra, dans la région occidentale montagneuse de Man, Danané et Guiglo."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex5",
          "type": "mcq",
          "prompt": "Quel est l'autre nom donné au domaine géologique Protérozoïque en Côte d'Ivoire ?",
          "options": [
            "Le domaine Baoulé-Mossi ou Birrimien",
            "Le domaine de Kéniéma-Man",
            "Le domaine du Continental Terminal",
            "Le bassin de Taoudenni"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le domaine Protérozoïque est également appelé domaine Baoulé-Mossi ou domaine Birrimien (structuré lors du mégacycle éburnéen)."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex6",
          "type": "mcq",
          "prompt": "Entre quelles localités littorales s'étend le bassin sédimentaire côtier de Côte d'Ivoire ?",
          "options": [
            "De Fresco à Assinie",
            "De San Pedro à Tabou",
            "De Sassandra à Grand-Lahou",
            "D'Abidjan à Bouna"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire côtier ivoirien forme un croissant littoral s'étendant d'Ouest en Est depuis Fresco jusqu'à Assinie."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex7",
          "type": "mcq",
          "prompt": "À quel événement géodynamique mondial correspond l'ouverture et le début de formation du bassin sédimentaire ivoirien ?",
          "options": [
            "L'ouverture de l'océan Atlantique Sud au Crétacé",
            "La surrection de la chaîne alpine au Tertiaire",
            "La glaciation quaternaire",
            "L'orogénèse libérienne au Précambrien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire ivoirien a commencé à se mettre en place au Crétacé (ère secondaire, vers 135 Ma) lors de la dislocation de la Pangée et de l'ouverture de l'océan Atlantique Sud."
        },
        {
          "id": "seconde_c_svt_ch1_p1_ex8",
          "type": "mcq",
          "prompt": "Quels types de roches prédominent dans le bassin sédimentaire côtier ivoirien ?",
          "options": [
            "Des sables, des argiles, des grès et des conglomérats",
            "Des granites, des basaltes et des gabbros",
            "Des gneiss, des micaschistes et des quartzites",
            "Des charnockites et des péridotites"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire est constitué de roches sédimentaires détritiques d'âges crétacé à quaternaire : sables, argiles, grès ferrugineux et conglomérats."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p2_accidents_geologiques_failles_plis_discordances",
      "order": 2,
      "title": "Les accidents géologiques de Côte d'Ivoire : failles, plis et discordances",
      "summary": "Identifier et caractériser les failles tectoniques, les plis anticlinaux/synclinaux et les discordances stratigraphiques observés en Côte d'Ivoire.",
      "conceptExplanation": "1. Notions d'accidents géologiques :\nUn accident géologique est une anomalie ou déformation structurale affectant les couches de roches de l'écorce terrestre sous l'effet de forces tectoniques internes (compression, extension, cisaillement). On distingue trois catégories principales en Côte d'Ivoire : les failles, les plis et les discordances.\n\n2. Les failles (déformations cassantes) :\n- Définition : Une faille est une cassure ou fracture de l'écorce terrestre accompagnée d'un déplacement relatif (rejet) des deux compartiments séparés.\n- En Côte d'Ivoire, les failles sont les accidents géologiques les plus nombreux et les plus répandus :\n  * La faille de Sassandra : accident tectonique majeur orienté Nord-Sud séparant le domaine archéen et le domaine protérozoïque.\n  * La faille des lagunes : faille est-ouest affectant le bassin sédimentaire de Grand-Lahou à Allangouanou, avec un rejet vertical plongeant vers le Sud atteignant 5 000 m.\n  * Autres failles notables : faille de Danané, faille des Monts Trou (Guiglo), faille de Soubré, faille du Haut N'Zi (Bouaké), faille de Dimbokro.\n\n3. Les plis (déformations souples continues) :\n- Définition : Un pli est une déformation souple et continue de couches géologiques sous l'action de contraintes tectoniques compressives, sans rupture ni cassure.\n- Éléments géométriques d'un pli : charnière (zone de courbure maximale), flancs (parties latérales situées de part et d'autre de la charnière), plan axial (surface passant par les charnières de toutes les couches).\n- Types de plis : anticlinal (pli convexe vers le haut, couches les plus anciennes au cœur) et synclinal (pli concave vers le haut, couches les plus récentes au cœur).\n- Localisation en Côte d'Ivoire :\n  * Plis de Man dans le domaine archéen.\n  * Plis de Tortiya et de Fêtèkro dans le domaine protérozoïque.\n  * ATTENTION : Il n'y a aucun pli dans le bassin sédimentaire côtier ivoirien (les couches sont sub-horizontales).\n\n4. Les discordances (discontinuités stratigraphiques) :\n- Définition : Une discordance est la superposition géométrique de couches de terrains sédimentaires récents (déposées horizontalement) sur un socle rocheux plus ancien plissé et préalablement érodé.\n- Chronologie de mise en place d'une discordance :\n  1. Dépôt des couches sédimentaires anciennes à l'horizontale.\n  2. Phase tectonique compressive entraînant le plissement des couches.\n  3. Émersion et érosion de la partie supérieure des plis (surface d'érosion).\n  4. Nouvelle sédimentation (transgression marine) déposant horizontalement les nouvelles couches sédimentaires au-dessus de la surface érodée.\n- Les trois grandes discordances en Côte d'Ivoire :\n  * La discordance de base du Birrimien observée à Odienné.\n  * La discordance Abronienne observée à Bondoukou.\n  * La discordance de base du Néogène au niveau du bassin sédimentaire côtier.",
      "formulas": [
        {
          "name": "Classification des accidents géologiques",
          "formula": "Faille (déformation cassante) vs Pli (déformation souple) vs Discordance (contact stratigraphique érodé)",
          "note": "Témoins des contraintes tectoniques subies au cours des temps géologiques."
        },
        {
          "name": "Types de plis",
          "formula": "Anticlinal (courbure vers le haut ∩) / Synclinal (courbure vers le bas ∪)",
          "note": "Formés par compression latérale de roches ductiles."
        }
      ],
      "keyRule": "NE PAS CONFONDRE : une FAILLE comporte une fracture avec déplacement de compartiments. Un PLI est une déformation souple continue SANS cassure. Une DISCORDANCE est un contact anormal où des couches horizontales neuves reposent sur des strates plissées érodées.",
      "workedExample": {
        "title": "Exemple résolu : Reconstitution de l'histoire géologique d'une discordance",
        "statement": "Sur une falaise côtière, on observe un ensemble inférieur formé de micaschistes plissés et biseautés par une surface plane horizontale, surmonté par des couches horizontales régulières de grès et de sables. Nommer cette structure géologique et ordonner chronologiquement les étapes de sa formation.",
        "methodSteps": [
          "Étape 1 : Identifier la structure : des couches sédimentaires horizontales reposent sur un socle plissé et érodé ; il s'agit d'une discordance angulaire géologique.",
          "Étape 2 : Établir la chronologie des événements géologiques :",
          "1. Dépôt horizontal initial des sédiments anciens marins.",
          "2. Pression tectonique compressive provoquant le plissement et le métamorphisme (formation des micaschistes plissés).",
          "3. Arrêt de la compression, émersion de la région et érosion météorique rabotant le sommet des plis.",
          "4. Nouvelle transgression marine déposant à l'horizontale les couches de sables et de grès récents."
        ],
        "conclusion": "La structure observée est une discordance. Elle témoigne d'un cycle complet : sédimentation ancienne, tectonique compressive plissante, érosion de surface et reprise de la sédimentation moderne."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la définition exacte d'une faille géologique ?",
          "options": [
            "Une cassure de l'écorce terrestre accompagnée d'un déplacement relatif des deux compartiments séparés",
            "Une ondulation continue et souple des couches sans aucune fracture",
            "Une couche de terre fertile enrichie en matière organique",
            "Une accumulation de cristaux de quartz au fond d'un fleuve"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une faille est une déformation cassante : c'est une fracture de la lithosphère avec déplacement relatif (rejet) des compartiments de part et d'autre du plan de faille."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle grande faille est-ouest traverse le bassin sédimentaire ivoirien de Grand-Lahou jusqu'au Ghana ?",
          "options": [
            "La faille des lagunes",
            "La faille de Sassandra",
            "La faille de Danané",
            "La faille des Monts Trou"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La faille des lagunes traverse d'Ouest en Est le bassin sédimentaire côtier de Grand-Lahou à Allangouanou au Ghana, avec un rejet pouvant atteindre 5 000 m."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un pli de couches sédimentaires dont la courbure est convexe vers le haut ?",
          "options": [
            "Un anticlinal",
            "Un synclinal",
            "Un graben",
            "Une discordance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un anticlinal est un pli convexe vers le haut en forme d'arche (∩), où les couches les plus anciennes se trouvent au cœur du pli."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex4",
          "type": "mcq",
          "prompt": "Où observe-t-on des plis géologiques dans le domaine protérozoïque en Côte d'Ivoire ?",
          "options": [
            "À Tortiya et à Fêtèkro",
            "À Man et à Danané",
            "À Grand-Bassam et Assinie",
            "Uniquement au sommet du mont Nimba"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le domaine protérozoïque ivoirien, des plis tectoniques majeurs sont observés notamment à Tortiya et à Fêtèkro (alors que les plis de Man appartiennent à l'Archéen)."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex5",
          "type": "mcq",
          "prompt": "Trouve-t-on des plis géologiques dans le bassin sédimentaire côtier de Côte d'Ivoire ?",
          "options": [
            "Non, les couches du bassin sédimentaire sont horizontales et non plissées",
            "Oui, de très grands plis anticlinaux à Abidjan",
            "Oui, uniquement sous la lagune Ébrié",
            "Oui, formés lors de l'orogénèse libérienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire côtier ivoirien ne présente aucun pli : ses couches sédimentaires ont été déposées de manière tabulaire sub-horizontale."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex6",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une discordance géologique ?",
          "options": [
            "La superposition de couches sédimentaires récentes horizontales sur un socle ancien préalablement plissé et érodé",
            "Une séparation brutale entre deux continents qui dérivent",
            "Une roche magmatique qui refuse de cristalliser",
            "Un tremblement de terre sous-marin sans dégâts"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une discordance est une discontinuité géométrique où des couches sédimentaires récentes reposent sur une surface d'érosion recoupant des terrains plus anciens déformés ou plissés."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex7",
          "type": "mcq",
          "prompt": "Dans quelle localité ivoirienne observe-t-on la célèbre discordance de base du Birrimien ?",
          "options": [
            "À Odienné",
            "À Bondoukou",
            "À San Pedro",
            "À Yamoussoukro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La discordance de base du Birrimien est observable dans la région d'Odienné (Nord-Ouest de la Côte d'Ivoire)."
        },
        {
          "id": "seconde_c_svt_ch1_p2_ex8",
          "type": "mcq",
          "prompt": "Où se situe la discordance Abronienne en Côte d'Ivoire ?",
          "options": [
            "À Bondoukou",
            "À Fresco",
            "À Man",
            "À Sassandra"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La discordance Abronienne est située dans la région de Bondoukou (Nord-Est de la Côte d'Ivoire)."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 2 : L'ALTÉRATION CHIMIQUE DES ROCHES MAGMATIQUES
// ============================================================================
export const svt2deCAlterationChimiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch2_alteration_chimique_roches_magmatiques",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 2,
  "officialVolumeHours": 2,
  "title": "Leçon 2 — L'altération chimique des roches magmatiques",
  "summary": "Rôle de l'eau chargée de CO2 comme agent d'altération, comportement différentiel des minéraux du granite (quartz, micas, feldspaths), mécanisme de l'hydrolyse et genèse de l'arène granitique.",
  "points": [
    {
      "id": "seconde_c_svt_ch2_p1_agent_alteration_comportement_mineraux_granite",
      "order": 1,
      "title": "Agent d'altération et comportement des minéraux du granite",
      "summary": "Identifier l'eau météorique enrichie en dioxyde de carbone comme agent d'altération et analyser la transformation du granite sain en arène granitique friable.",
      "conceptExplanation": "1. Le granite sain et sa composition minéralogique :\nLe granite est une roche magmatique plutonique, cohérente, grenue et très dure, formée en profondeur par refroidissement lent d'un magma. Il est principalement constitué de trois minéraux imbriqués :\n- Le quartz (cristaux gris vitreux translucides, durs et sans clivage).\n- Les feldspaths (orthose/plagioclases, cristaux blanchâtres ou rosés à reflets nacrés).\n- Les micas (micas blancs ou moscovite, et micas noirs ou biotite riches en fer et magnésium).\n\n2. L'agent principal de l'altération chimique : l'eau météorique acidifiée :\nÀ l'affleurement, les roches magmatiques sont exposées aux intempéries. L'agent responsable de leur altération chimique est l'eau de pluie. En traversant l'atmosphère et les sols, l'eau dissout du dioxyde de carbone (CO₂) pour former de l'acide carbonique (H₂CO₃) selon la réaction réversible :\nH₂O + CO₂ ⇌ H₂CO₃.\nCet acide carbonique confère à l'eau un caractère agressif qui attaque chimiquement les liaisons minérales.\n\n3. Comportement différentiel des minéraux du granite face à l'altération :\nTous les minéraux n'ont pas la même résistance face à l'eau acidifiée :\n- Le quartz est un minéral inaltérable. Il ne subit aucune décomposition chimique et se retrouve intact sous forme de grains de quartz libres : le sable quartzeux.\n- Les feldspaths potassiques sont très altérables : ils se décomposent pour donner des minéraux argileux (la kaolinite) et libèrent des ions solubles dans l'eau de ruissellement.\n- Les micas sont altérables : ils se transforment également en argiles. De plus, le mica noir (biotite) libère ses ions fer (Fe²⁺) qui s'oxydent en oxyde de fer ferrique (Fe₂O₃), conférant à la roche altérée sa teinte ocre, rouille ou jaunâtre caractéristique.\n\n4. Conséquence macroscopique : la formation de l'arène granitique et des boules de granite :\nLa destruction des feldspaths et des micas brise la cohésion du granite. Le granite sain perd sa dureté, devient friable et se désagrège en une roche meuble appelée l'arène granitique (mélange de sable quartzeux, d'argile kaolinique et d'oxydes de fer). L'altération progressant par les diaclases (fissures) isole progressivement des blocs arrondis : c'est le chaos granitique (boules de granite).",
      "formulas": [
        {
          "name": "Formation de l'acide carbonique dans les eaux de pluie",
          "formula": "H₂O + CO₂ ⇌ H₂CO₃",
          "note": "L'eau chargée de dioxyde de carbone est l'agent d'attaque chimique."
        },
        {
          "name": "Bilan des produits de l'altération du granite",
          "formula": "Granite sain + Eau acidifiée → Arène granitique (Sable + Argile + Oxydes de fer)",
          "note": "Quartz = sable ; Feldspaths/micas = argile ; Mica noir = oxydes de fer."
        }
      ],
      "keyRule": "Face à l'altération chimique de l'eau, RETENIR LA RÈGLE D'OR : LE QUARTZ EST INALTÉRABLE (il donne le sable). LES FELDSPATHS ET MICAS SONT ALTÉRABLES (ils donnent l'argile). LE FER DU MICA NOIR S'OXYDE pour donner la couleur jaune-rouille (oxyde de fer Fe₂O₃).",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un échantillon de roche dégradée au bord d'un fleuve",
        "statement": "Au bord du fleuve Sassandra, des élèves ramassent une roche friable de couleur ocre qui s'effrite entre les doigts. L'analyse montre qu'elle contient des grains translucides durs insolubles, une poudre très fine plastique au contact de l'eau, et un pigment rouille.\n1. Identifier les minéraux d'origine du granite correspondant à ces trois fractions.\n2. Nommer cette roche meuble résultant de l'altération du granite.",
        "methodSteps": [
          "Étape 1 : Identifier les grains translucides durs : il s'agit du quartz inaltérable qui forme les grains de sable.",
          "Étape 2 : Identifier la poudre fine plastique à l'eau : il s'agit des minéraux argileux (kaolinite) issus de l'altération chimique des feldspaths et des micas.",
          "Étape 3 : Identifier le pigment rouille : il s'agit d'oxydes de fer (Fe₂O₃) issus de l'oxydation du fer ferreux contenu dans le mica noir (biotite).",
          "Étape 4 : Nommer la roche meuble finale : c'est l'arène granitique."
        ],
        "conclusion": "L'échantillon est de l'arène granitique, produit de décomposition du granite sous l'action de l'eau pluviale enrichie en CO₂."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch2_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est l'agent principal responsable de l'altération chimique des roches magmatiques à la surface de la Terre ?",
          "options": [
            "L'eau météorique chargée de dioxyde de carbone (CO₂)",
            "Le vent sec et la poussière désertique",
            "La lave basaltique incandescente",
            "Le rayonnement ultraviolet solaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau météorique (pluie), acidifiée par le CO₂ atmosphérique pour former l'acide carbonique H₂CO₃, est le principal agent d'altération chimique des roches."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex2",
          "type": "mcq",
          "prompt": "Quel minéral constitutif du granite sain est chimiquement inaltérable par l'eau et donne naissance aux grains de sable ?",
          "options": [
            "Le quartz",
            "Le feldspath potassique",
            "Le mica blanc",
            "La biotite (mica noir)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quartz (silice pure SiO₂) est un minéral extrêmement résistant qui ne subit aucune décomposition chimique à l'eau et forme les grains de sable."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex3",
          "type": "mcq",
          "prompt": "En quel nouveau minéral se transforment principalement les feldspaths du granite sous l'action de l'eau acidifiée ?",
          "options": [
            "En argile (kaolinite)",
            "En quartz",
            "En calcite",
            "En gypse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'altération des feldspaths détruit leur réseau cristallin pour produire des minéraux argileux néoformés, en particulier la kaolinite."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex4",
          "type": "mcq",
          "prompt": "À quoi est due la coloration rouille ou ocre caractéristique du granite altéré ?",
          "options": [
            "À l'oxydation du fer libéré par le mica noir (biotite) en oxyde de fer (Fe₂O₃)",
            "À la fusion du quartz à haute température",
            "À la présence de soufre volcanique",
            "À l'évaporation de l'eau salée de mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mica noir (biotite) contient du fer ; lors de sa décomposition, le fer s'oxyde pour former de l'oxyde de fer (Fe₂O₃), qui colore l'ensemble en rouille/ocre."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la roche meuble et friable issue de la décomposition complète d'un massif granitique ?",
          "options": [
            "L'arène granitique",
            "La bauxite",
            "Le basalte",
            "Le marbre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'arène granitique est le mélange meuble constitué de grains de quartz résiduels, d'argiles et d'oxydes issu de la désagrégation du granite."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle réaction chimique décrit la formation de l'acide carbonique dans les eaux de ruissellement ?",
          "options": [
            "H₂O + CO₂ ⇌ H₂CO₃",
            "2 H₂ + O₂ → 2 H₂O",
            "HCl + NaOH → NaCl + H₂O",
            "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide carbonique résulte de la dissolution et combinaison du dioxyde de carbone dans l'eau : H₂O + CO₂ ⇌ H₂CO₃."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex7",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on un 'chaos granitique' dans un paysage géologique ?",
          "options": [
            "Un empilement de blocs arrondis (boules de granite) dégagés par l'érosion de l'arène",
            "Une faille tectonique active provoquant des séismes",
            "Un cratère d'explosion volcanique éteint",
            "Une nappe souterraine d'eau minérale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chaos granitique est un paysage d'érosion formé de boules de granite isolées après le déblaiement de l'arène granitique par l'eau et le vent."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex8",
          "type": "mcq",
          "prompt": "Quel est l'effet immédiat de l'altération chimique sur la cohésion du massif granitique ?",
          "options": [
            "La roche perd totalement sa cohésion et devient friable",
            "La roche devient encore plus dure et indestructible",
            "La roche cristallise sous forme de verre volcanique",
            "La roche se transforme instantanément en magma liquide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En détruisant les feldspaths qui servaient de 'ciment' cristallin entre les grains de quartz, l'eau détruit la cohésion de la roche qui devient meuble et friable."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch2_p2_mecanisme_hydrolyse_feldspath_argiles",
      "order": 2,
      "title": "Mécanisme physico-chimique de l'hydrolyse du feldspath et genèse de l'argile",
      "summary": "Expliquer les étapes d'hydratation, d'échange d'ions H+/K+, d'effondrement du réseau cristallin et de recombinaison en argile (kaolinite).",
      "conceptExplanation": "1. Définition de l'hydrolyse minérale :\nL'hydrolyse est une réaction chimique de double décomposition entre les minéraux d'une roche et l'eau acidifiée, conduisant à la destruction du réseau cristallin originel et à la néoformation de composés chimiques plus simples et stables à basse température.\n\n2. Les étapes de l'altération du feldspath potassique (orthose) :\nL'orthose a pour formule chimique KAlSi₃O₈ (silicate d'aluminium et de potassium). Son altération se décompose en 4 phases successives :\n- Étape 1 : L'hydratation :\n  L'eau s'infiltre dans les microporosités et fissures du cristal d'orthose. Les molécules d'eau sont adsorbées à la surface du réseau cristallin, ce qui provoque un léger gonflement minéral.\n- Étape 2 : L'échange ionique (substitution de K⁺ par H⁺) :\n  L'ionisation de l'acide carbonique et de l'eau libère des protons H⁺ (H₂CO₃ ⇌ H⁺ + HCO₃⁻ et H₂O ⇌ H⁺ + OH⁻). Par sa petite taille et sa très forte densité de charge électrique, l'ion H⁺ s'insère dans le réseau cristallin et remplace l'ion potassium K⁺, qui est expulsé dans la solution.\n- Étape 3 : L'effondrement du réseau cristallin du feldspath :\n  Comme le rayon ionique de l'ion H⁺ est nettement plus petit que celui de l'ion K⁺ expulsé, le proton ne comble pas le vide laissé. Cela crée une distorsion mécanique et une instabilité géométrique de l'édifice cristallin, aboutissant à son effondrement complet.\n- Étape 4 : Libération et recombinaison des éléments chimiques :\n  L'effondrement libère des ions en solution : K⁺, OH⁻, H⁺, Al³⁺ (alumine) et Si⁴⁺ (silice sous forme d'acide silicique H₄SiO₄).\n\n3. Bilan des recombinaisons et produits néoformés :\n- Synthèse de l'argile (kaolinite) : l'alumine (Al³⁺) et la silice (Si⁴⁺) libérées se combinent en milieu aqueux avec des hydroxyles (OH⁻) pour cristalliser sous forme de feuillets microscopiques de kaolinite (Si₂O₅Al₂(OH)₄).\n- Évacuation des éléments solubles (lessivage) : le potassium K⁺ s'associe aux ions hydroxyles pour former la potasse KOH dissoute, évacuée par les eaux de ruissellement et de drainage vers les cours d'eau.\n- Dans le cas de la biotite (mica noir) : libération supplémentaire de fer et de magnésium. Le fer donne de la goethite ou de l'hématite (oxydes de fer Fe₂O₃), le magnésium donne des hydroxydes de magnésium.",
      "formulas": [
        {
          "name": "Équation bilan de l'hydrolyse complète de l'orthose",
          "formula": "2 KAlSi₃O₈ + 2 H⁺ + 9 H₂O → Si₂O₅Al₂(OH)₄ + 4 H₄SiO₄ + 2 K⁺",
          "note": "Orthose + eau acidifiée → Kaolinite (argile) + Acide silicique + Ions potassium."
        },
        {
          "name": "Échange ionique déclencheur",
          "formula": "Réseau-K⁺ + H⁺ (aq) → Réseau-H⁺ (instable) + K⁺ (aq)",
          "note": "Le remplacement de K⁺ par le petit ion H⁺ déstabilise la maille cristalline."
        }
      ],
      "keyRule": "L'effondrement du réseau de l'orthose est déclenché par une différence de taille ionique : l'ion H⁺ remplace l'ion K⁺ mais, étant beaucoup plus petit, il ne remplit pas l'espace vacant. Cette lacune déstabilise l'édifice qui s'effondre et libère Al³⁺ et Si⁴⁺ pour former l'argile.",
      "workedExample": {
        "title": "Exemple résolu : Étapes moléculaires de la transformation de l'orthose en kaolinite",
        "statement": "On place un fragment de feldspath potassique (orthose) broyé au contact d'une eau enrichie en CO₂ dans un bécher agité pendant plusieurs jours. On constate l'apparition d'un précipité blanc très fin et d'une solution filtrée alcaline contenant du potassium.\n1. Expliquer pourquoi la solution filtrée s'enrichit en potassium K⁺.\n2. Identifier la nature minéralogique du précipité blanc obtenu.",
        "methodSteps": [
          "Étape 1 : Expliquer la libération du potassium : les ions H⁺ issus de la dissociation de l'acide carbonique pénètrent dans le réseau du feldspath et expulsent les ions K⁺ par échange ionique. Les ions K⁺ passent en solution aqueuse sous forme d'hydroxyde de potassium KOH.",
          "Étape 2 : Analyser l'effondrement du réseau : l'insertion du proton H⁺ crée une instabilité due à sa petite taille par rapport à K⁺, ce qui brise le réseau cristallin du feldspath.",
          "Étape 3 : Identifier le précipité blanc : la silice et l'alumine libérées se recombinent avec l'eau pour former des feuillets d'argile blanche pure appelée kaolinite (ou kaolin)."
        ],
        "conclusion": "L'hydrolyse de l'orthose libère les ions K⁺ en solution et précipite de l'argile kaolinique blanche."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch2_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la cause directe de l'instabilité et de l'effondrement du réseau cristallin du feldspath lors de l'hydrolyse ?",
          "options": [
            "L'ion H⁺ qui remplace l'ion K⁺ est beaucoup plus petit et ne parvient pas à combler l'espace vacant",
            "L'ion K⁺ explose au contact de l'oxygène de l'air",
            "La roche fond sous l'effet d'une chaleur volcanique intense",
            "Le quartz présent dans le granite écrase les feldspaths voisins"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La petite taille de l'ion H⁺ comparée à celle de l'ion K⁺ expulsé crée un vide géométrique et une forte distorsion de la maille cristalline, entraînant l'effondrement de l'édifice."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex2",
          "type": "mcq",
          "prompt": "Quels ions chimiques se recombinent en milieu aqueux pour donner naissance à l'argile (kaolinite) ?",
          "options": [
            "Les ions aluminium (Al³⁺) et les ions silicium (Si⁴⁺) avec les groupements hydroxyles (OH⁻)",
            "Les ions potassium (K⁺) et les ions sodium (Na⁺)",
            "Les ions calcium (Ca²⁺) et les ions carbonates (CO₃²⁻)",
            "Les ions chlorure (Cl⁻) et les ions fer (Fe²⁺)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'argile kaolinite est un aluminosilicate hydraté : elle résulte de la recombinaison des tétraèdres de silice (Si⁴⁺) et des octaèdres d'alumine (Al³⁺) avec l'eau."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle première étape physique précède la destruction chimique proprement dite du feldspath ?",
          "options": [
            "L'hydratation (absorption d'eau et gonflement superficiel)",
            "La fossilisation",
            "La recristallisation métamorphique",
            "La fusion magmatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant l'hydrolyse, le feldspath potassique absorbe de l'eau au niveau de ses micropores et se gonfle légèrement : c'est le phénomène d'hydratation."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex4",
          "type": "mcq",
          "prompt": "Que deviennent les ions potassium K⁺ expulsés du réseau de l'orthose lors de l'hydrolyse ?",
          "options": [
            "Ils s'associent aux ions OH⁻ pour former la potasse KOH évacuée en solution par le lessivage",
            "Ils se transforment en grains de quartz",
            "Ils restent piégés à l'état solide dans l'argile",
            "Ils s'évaporent sous forme de gaz dans l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions K⁺ sont très solubles dans l'eau : ils forment de la potasse dissoute KOH et sont lessivés par les eaux d'infiltration et de ruissellement."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex5",
          "type": "mcq",
          "prompt": "D'où proviennent principalement les ions H⁺ qui attaquent le feldspath dans la nature ?",
          "options": [
            "De l'ionisation de l'acide carbonique H₂CO₃ formé par la dissolution du CO₂ dans l'eau de pluie",
            "D'acide sulfurique industriel uniquement",
            "De la décomposition directe des grains de quartz",
            "De la transpiration des racines sans apport d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau de pluie dissout le CO₂ atmosphérique et du sol, formant l'acide carbonique qui se dissocie selon H₂CO₃ ⇌ H⁺ + HCO₃⁻, fournissant les protons H⁺ nécessaires à l'hydrolyse."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex6",
          "type": "mcq",
          "prompt": "Quels sont les deux minéraux argileux les plus fréquemment produits par l'altération des silicates magmatiques ?",
          "options": [
            "La kaolinite et la chlorite",
            "L'olivine et le pyroxène",
            "Le diamant et le graphite",
            "Le gypse et l'halite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les argiles formées sont principalement la kaolinite (altération des feldspaths) et la chlorite ou l'illite (altération des micas)."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex7",
          "type": "mcq",
          "prompt": "Pourquoi la biotite (mica noir) libère-t-elle des oxydes de fer et de magnésium contrairement au feldspath potassique ?",
          "options": [
            "Parce que sa formule minérale contient du fer et du magnésium (ferromagnésien) alors que l'orthose n'en contient pas",
            "Parce qu'elle est située plus profondément dans la roche",
            "Parce qu'elle attire la foudre lors des orages",
            "Parce qu'elle contient du carbonate de calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La biotite est un phyllosilicate ferromagnésien contenant du fer (Fe) et du magnésium (Mg) dans sa structure, qui sont libérés et oxydés lors de son hydrolyse."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex8",
          "type": "mcq",
          "prompt": "Quel type de climat terrestre favorise le plus intensément l'altération chimique des roches magmatiques ?",
          "options": [
            "Un climat chaud et humide (tropical ou équatorial avec fortes pluies)",
            "Un climat polaire très froid et sec",
            "Un climat désertique aride sans aucune pluie",
            "Un climat de haute altitude sans atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'altération chimique nécessite de l'eau liquide abondante et est grandement accélérée par la chaleur : les climats tropicaux humides chauds (comme en Côte d'Ivoire) sont les plus propices."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 3 : LA FORMATION DES ROCHES SÉDIMENTAIRES
// ============================================================================
export const svt2deCFormationRochesSedimentairesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch3_formation_roches_sedimentaires",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 3,
  "officialVolumeHours": 4,
  "title": "Leçon 3 — La formation des roches sédimentaires",
  "summary": "Diversité des roches sédimentaires (meubles et consolidées), modes de sédimentation par granoclassement vertical et latéral dans les bassins sédimentaires, et étapes de la diagénèse (compaction, déshydratation, cimentation).",
  "points": [
    {
      "id": "seconde_c_svt_ch3_p1_types_roches_sedimentaires_granoclassement",
      "order": 1,
      "title": "Types de roches sédimentaires et sédimentation par granoclassement",
      "summary": "Classifier les roches sédimentaires (meubles vs consolidées ; détritiques, biochimiques, chimiques) et analyser le granoclassement vertical et latéral des sédiments.",
      "conceptExplanation": "1. Définition et diversité des roches sédimentaires :\nLes roches sédimentaires se forment à la surface de la Terre (dans les zones déprimées appelées bassins sédimentaires : lacs, mers, embouchures de fleuves) par accumulation et transformation de sédiments.\nOn les classe selon leur état physique et leur origine :\n- Selon l'état physique :\n  * Roches sédimentaires meubles : formées de particules libres non soudées entre elles (ex : les sables, les graviers, la boue argileuse non tassée).\n  * Roches sédimentaires consolidées : formées de particules solidement soudées entre elles par un ciment naturel (ex : le grès, le calcaire, l'argilite, le conglomérat).\n- Selon l'origine des sédiments :\n  * Roches détritiques (les plus abondantes) : issues de l'érosion mécanique et de l'altération chimique de roches préexistantes (sable, grès, argile).\n  * Roches biochimiques / biogènes : résultant de l'accumulation de squelettes, coquilles ou restes d'organismes vivants (calcaire coquillier, craie, charbon, pétrole).\n  * Roches chimiques : formées par précipitation d'ions dissous lors de l'évaporation de l'eau (évaporites : sel gemme NaCl, gypse).\n\n2. Le processus de sédimentation et les bassins sédimentaires :\nL'eau et le vent transportent les produits d'altération (les sédiments) depuis les continents vers des zones de dépôt calmes appelées bassins sédimentaires. Lorsque la vitesse du courant ralentit, les particules se déposent : c'est la sédimentation.\n\n3. Le granoclassement (tri granulométrique des sédiments) :\nLes particules minérales se déposent selon leur masse, leur densité et leur taille :\n- Granoclassement vertical (en milieu calme ou au fond d'une éprouvette de décantation, ou en aval d'une forte pente) :\n  Les éléments les plus lourds et volumineux tombent en premier au fond, tandis que les plus légers restent plus longtemps en suspension. On observe un empilement ordonné du bas vers le haut :\n  1. Graviers (au fond),\n  2. Sables grossiers,\n  3. Sables fins,\n  4. Limons,\n  5. Argiles et colloïdes (au sommet),\n  6. Débris organiques surnageants.\n- Sédimentation latérale (le long d'un cours d'eau en pente douce vers la mer) :\n  La vitesse du courant diminue d'amont en aval. Les éléments grossiers (galets, sables) se déposent en premier près des berges et des embouchures, tandis que les particules très fines et légères (argiles) sont emportées au large et se déposent en eaux calmes et profondes.",
      "formulas": [
        {
          "name": "Ordre du granoclassement vertical (du fond vers le sommet)",
          "formula": "Fond : Graviers → Sables grossiers → Sables fins → Limons → Argiles (sommet)",
          "note": "Dépôt ordonné par taille et densité décroissantes."
        },
        {
          "name": "Roches détritiques correspondantes",
          "formula": "Sable meuble → Grès consolidé ; Graviers → Conglomérat ; Boue argileuse → Argilite",
          "note": "Chaque sédiment meuble donne une roche consolidée équivalente."
        }
      ],
      "keyRule": "Dans le granoclassement vertical, la taille et la densité des particules DÉCROISSENT DU BAS VERS LE HAUT (les plus gros et lourds se déposent en premier au fond). Dans un fleuve, les gros galets restent en amont alors que les argiles très légères voyagent jusqu'en aval.",
      "workedExample": {
        "title": "Exemple résolu : Expérience de sédimentation d'un sol dans une éprouvette",
        "statement": "En TP de SVT, des élèves versent un échantillon de sol de Bouaflé dans une éprouvette remplie d'eau, agitent vigoureusement puis laissent reposer 24 heures. Ils observent 4 couches superposées numérotées de 1 (fond) à 4 (haut), surmontées d'une eau trouble.\n1. Identifier les constituants des couches 1, 2, 3 et 4.\n2. Nommer ce mode de sédimentation et expliquer la cause de cette disposition.",
        "methodSteps": [
          "Étape 1 : Identifier la couche 1 tout au fond : les particules les plus denses et volumineuses tombent instantanément ; ce sont les graviers et sables grossiers.",
          "Étape 2 : Identifier la couche 2 : immédiatement au-dessus se déposent les sables fins.",
          "Étape 3 : Identifier la couche 3 : particules plus fines décantant après quelques minutes ; ce sont les limons.",
          "Étape 4 : Identifier la couche 4 : particules microscopiques très légères décantant très lentement au sommet ; ce sont les argiles.",
          "Étape 5 : Nommer le phénomène : il s'agit du granoclassement vertical, causé par la pesanteur agissant différentiellement sur la masse et la taille des éléments."
        ],
        "conclusion": "L'éprouvette réalise un granoclassement vertical où les particules se superposent par ordre de taille et de masse décroissantes du bas vers le haut."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch3_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est la différence fondamentale entre une roche sédimentaire meuble et une roche sédimentaire consolidée ?",
          "options": [
            "Les particules d'une roche meuble sont libres et non soudées, alors que celles d'une roche consolidée sont soudées par un ciment naturel",
            "Une roche meuble s'est formée à haute température et une roche consolidée dans la glace",
            "Une roche meuble contient des métaux précieux et une roche consolidée n'en contient pas",
            "Une roche meuble est d'origine magmatique et une roche consolidée est d'origine lunaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une roche meuble (ex: sable, gravier) est un assemblage de grains non liés, alors qu'une roche consolidée (ex: grès, calcaire) possède des grains cimentés formant un bloc solide cohérent."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex2",
          "type": "mcq",
          "prompt": "Parmi les roches suivantes, laquelle est une roche sédimentaire consolidée d'origine détritique ?",
          "options": [
            "Le grès",
            "Le sable meuble",
            "Le basalte",
            "Le granite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le grès est une roche sédimentaire détritique consolidée, formée par la cimentation de grains de sable quartzeux au cours de la diagénèse."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex3",
          "type": "mcq",
          "prompt": "Lors d'un granoclassement vertical dans une colonne d'eau au repos, quel élément se dépose au fond en premier ?",
          "options": [
            "Les graviers (éléments les plus volumineux et les plus lourds)",
            "Les argiles microscopiques",
            "Les colloïdes humiques en suspension",
            "Les débris végétaux légers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sous l'effet de la pesanteur, les particules de plus forte masse et de plus grand diamètre (les graviers) tombent en premier et se concentrent à la base du dépôt."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex4",
          "type": "mcq",
          "prompt": "Comment se nomme la zone géographique affaissée où s'accumulent les produits d'altération transportés par les eaux ?",
          "options": [
            "Un bassin sédimentaire",
            "Une dorsale océanique",
            "Un cratère météoritique",
            "Une faille transformante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un bassin sédimentaire est une dépression de la croûte continentale ou océanique dans laquelle les sédiments s'accumulent en couches successives."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle roche sédimentaire provient de l'activité biologique et de la fossilisation de la matière organique végétale enfouie au cours des temps géologiques ?",
          "options": [
            "Le charbon",
            "Le gypse",
            "L'argile",
            "Le quartzite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le charbon (houille, lignite, anthracite) est une roche sédimentaire carbonée issue de l'accumulation et de la transformation anaérobie de débris végétaux sous forte pression."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex6",
          "type": "mcq",
          "prompt": "Dans quel ordre s'étagent les particules dans un sédiment granoclassé de bas en haut ?",
          "options": [
            "Graviers, sables grossiers, sables fins, limons, argiles",
            "Argiles, limons, sables fins, sables grossiers, graviers",
            "Limons, graviers, argiles, sables fins",
            "Sables fins, argiles, graviers, sables grossiers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ordre normal du granoclassement vertical décroissant est : graviers (fond), sables grossiers, sables fins, limons et argiles (sommet)."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex7",
          "type": "mcq",
          "prompt": "Lors d'une sédimentation latérale le long d'un fleuve se jetant dans une baie calme, pourquoi les argiles se déposent-elles le plus loin au large ?",
          "options": [
            "Parce qu'étant très fines et légères, elles restent facilement transportées par l'eau jusqu'aux zones d'immobilité totale",
            "Parce qu'elles flottent indéfiniment sans jamais se déposer",
            "Parce qu'elles sont rejetées par les organismes marins",
            "Parce qu'elles sont détruites par le sel de l'océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les argiles ont une vitesse de décantation infime en raison de leur très petite taille : seul un ralentissement quasi complet du courant permet leur sédimentation au large."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est l'origine du calcaire coquillier trouvé dans certaines carrières sédimentaires ?",
          "options": [
            "L'accumulation et la cimentation de coquilles et tests calcaires d'animaux marins (CaCO₃)",
            "La précipitation directe de sel de cuisine",
            "Le refroidissement rapide d'une lave sous-marine",
            "La désagrégation mécanique du quartz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcaire coquillier est une roche sédimentaire d'origine biochimique formée par l'accumulation de restes squelettiques calcaires d'organismes marins."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch3_p2_mecanisme_diagenese_consolidation",
      "order": 2,
      "title": "Le mécanisme de la diagénèse : de sédiments meubles aux roches consolidées",
      "summary": "Comprendre les étapes de la diagénèse (compaction, déshydratation, cimentation, recristallisation) et la structure en strates des roches sédimentaires.",
      "conceptExplanation": "1. Définition de la diagénèse :\nLa diagénèse est l'ensemble de tous les processus physico-chimiques et biologiques qui transforment un dépôt de sédiments meubles imbibés d'eau en une roche sédimentaire solide et compacte (consolidée).\nElle se déroule à faible profondeur (de quelques dizaines à quelques centaines de mètres), sous des températures basses (< 100 °C) et des pressions lithostatiques croissantes.\n\n2. Les grandes étapes successives de la diagénèse :\n- Étape 1 : La compaction :\n  Au fur et à mesure que de nouvelles couches de sédiments se déposent au-dessus des anciennes, le poids des couches sus-jacentes exerce une pression verticale croissante sur les couches profondes. Les grains minéraux se rapprochent, s'imbriquent et l'espace entre eux (la porosité) diminue fortement.\n- Étape 2 : La déshydratation :\n  Sous l'effet de l'écrasement mécanique par compaction, l'eau interstitielle libre contenue entre les grains est expulsée vers le haut. La teneur en eau des sédiments chute drastiquement au fur et à mesure de la profondeur (ex : elle passe de 60 % à 3 m de profondeur à moins de 5 % à 15 m).\n- Étape 3 : La cimentation :\n  Les eaux interstitielles en circulation sont saturées en sels minéraux dissous (silice SiO₂, carbonate de calcium CaCO₃, oxydes de fer). En migrant, ces solutions précipitent de minuscules cristaux minéraux dans les interstices restants entre les grains. Ce précipité cristallin agit comme une véritable colle minérale qui soude définitivement les grains entre eux : c'est le ciment.\n  Exemple : des grains de sable reliés par un ciment siliceux ou calcaire donnent naissance à une roche consolidée : le grès.\n- Étape 4 : La recristallisation / épigénie :\n  Certains minéraux instables se transforment chimiquement en d'autres minéraux plus stables (ex : l'aragonite des coquilles se transforme en calcite stable).\n\n3. La stratification et les strates géologiques :\nComme la sédimentation est discontinue et varie au rythme des crues, des marées ou des saisons, les dépôts forment des couches parallèles successives appelées strates. Les surfaces séparant deux strates successives sont des joints de stratification (ou fissures fines horizontales), qui marquent un arrêt ou un changement temporaire dans le régime de sédimentation. Une roche ainsi constituée est dite roche stratifiée.",
      "formulas": [
        {
          "name": "Les 3 étapes fondamentales de la diagénèse",
          "formula": "Compaction (réduction porosité) → Déshydratation (expulsion d'eau) → Cimentation (soudure des grains)",
          "note": "Processus continu transformant la boue ou le sable en roche dure."
        },
        {
          "name": "Formation du grès à partir du sable",
          "formula": "Sable meuble (grains de quartz) + Pression + Ciment calcaire ou siliceux → Grès dur",
          "note": "Le grès est un sable consolidé par la diagénèse."
        }
      ],
      "keyRule": "LE MOTEUR PRINCIPAL DE LA DIAGÉNÈSE EST LA PRESSION EXERCÉE PAR LES NOUVELLES COUCHES. Plus on descend en profondeur, plus la pression augmente, plus la teneur en eau diminue (déshydratation) et plus la cimentation soude les grains en roche compacte consolidée.",
      "workedExample": {
        "title": "Exemple résolu : Interprétation de la baisse de teneur en eau lors du creusement d'un puits",
        "statement": "Lors du creusement d'un puits à Soubré, on mesure la teneur en eau des sédiments argilo-sableux à différentes profondeurs : à 3 m (60 %), à 5 m (40 %), à 10 m (20 %) et à 15 m (5 %).\n1. Décrire l'évolution de la teneur en eau avec la profondeur.\n2. Expliquer cette évolution et indiquer quelle étape de la diagénèse elle illustre.\n3. Prédire l'état physique de la roche si le processus se poursuit à plus grande profondeur.",
        "methodSteps": [
          "Étape 1 : Analyser l'évolution : la teneur en eau décroît de manière continue et spectaculaire en fonction de la profondeur, passant de 60 % près de la surface à seulement 5 % à 15 mètres.",
          "Étape 2 : Expliquer le phénomène : avec la profondeur, l'épaisseur des sédiments au-dessus augmente, ce qui engendre une pression lithostatique de plus en plus forte. Cette pression rapproche les grains et expulse l'eau interstitielle : c'est le phénomène de compaction et de déshydratation.",
          "Étape 3 : Prédire l'état final : l'eau restante sera remplacée par des précipités minéraux (cimentation), aboutissant à la formation d'une roche sédimentaire consolidée et dure (ex : argilite ou grès)."
        ],
        "conclusion": "La baisse de la teneur en eau est la preuve directe de la compaction et de la déshydratation sous l'effet de la pression lithostatique, étapes clés de la diagénèse."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch3_p2_ex1",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on la diagénèse en géologie sédimentaire ?",
          "options": [
            "L'ensemble des phénomènes (compaction, déshydratation, cimentation) transformant des sédiments meubles en roches sédimentaires consolidées",
            "La fusion totale des roches magmatiques en magma d'anatexie",
            "Le plissement violent des chaînes de montagnes par collision",
            "La désagrégation physique d'une falaise sous l'impact de la foudre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diagénèse regroupe toutes les modifications physico-chimiques post-dépôt qui transforment un sédiment meuble en roche consolidée dure."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex2",
          "type": "mcq",
          "prompt": "Quel est le facteur moteur principal qui provoque le tassement et le rapprochement des grains de sédiments ?",
          "options": [
            "La pression lithostatique exercée par le poids des couches de sédiments sus-jacentes",
            "L'attraction de la Lune lors des grandes marées",
            "L'acidité des pluies de surface",
            "La vitesse du vent atmosphérique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'accumulation continue de nouveaux sédiments au-dessus exerce une pression verticale croissante qui tasse et compresse les strates profondes."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex3",
          "type": "mcq",
          "prompt": "Que devient l'eau contenue entre les grains de sable ou d'argile au cours de la compaction géologique ?",
          "options": [
            "Elle est expulsée des pores vers le haut (déshydratation du sédiment)",
            "Elle se transforme en glace permanente sous l'effet de la pression",
            "Elle se dissocie en gaz dihydrogène explosif",
            "Elle est absorbée par les cristaux de quartz qui grossissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'écrasement mécanique resserre les grains et chasse l'eau interstitielle libre vers le haut : c'est la déshydratation."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex4",
          "type": "mcq",
          "prompt": "En quoi consiste précisément le phénomène de cimentation lors de la diagénèse ?",
          "options": [
            "À la précipitation de substances minérales dissoutes (silice, calcaire, fer) qui comblent les pores et soudent les grains entre eux",
            "À l'ajout de béton artificiel par les mouvements de l'eau",
            "À la fusion locale des grains qui se soudent par la chaleur volcanique",
            "Au collage des grains par des racines d'arbres fossilisées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cimentation est la précipitation chimique de sels minéraux dissous dans les eaux interstitielles, formant une matrice rigide qui lie les particules sédimentaires."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les couches horizontales superposées bien visibles dans une carrière de roche sédimentaire ?",
          "options": [
            "Des strates",
            "Des batholites",
            "Des filons magmatiques",
            "Des moraines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les strates sont les couches élémentaires superposées de sédiments successifs, séparées par des joints de stratification."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex6",
          "type": "mcq",
          "prompt": "Que traduisent les fissures fines horizontales (joints de stratification) qui séparent deux strates sédimentaires consécutives ?",
          "options": [
            "De petites interruptions ou des variations de régime dans le dépôt du sédiment",
            "Des cassures de séismes récents",
            "La morsure d'animaux préhistoriques marins",
            "Des galeries de vers marins fossilisées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les joints de stratification témoignent d'arrêts temporaires de sédimentation ou de changements soudains de la nature des particules apportées."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex7",
          "type": "mcq",
          "prompt": "Si la cimentation n'a pas lieu après le dépôt et la déshydratation, sous quel état reste la roche sédimentaire ?",
          "options": [
            "À l'état meuble (comme le sable d'une dune ou d'une plage)",
            "À l'état gazeux sous forme de méthane",
            "À l'état d'un magma volcanique",
            "À l'état d'un diamant pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans cimentation pour souder les grains entre eux, les sédiments restent libres et constituent une roche meuble (ex: sable meuble)."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex8",
          "type": "mcq",
          "prompt": "Quel est l'ordre chronologique exact des processus menant d'une roche magmatique continentale à une roche sédimentaire consolidée ?",
          "options": [
            "Altération → Érosion → Transport → Sédimentation → Diagénèse",
            "Diagénèse → Sédimentation → Transport → Altération",
            "Sédimentation → Érosion → Diagénèse → Altération",
            "Fusion → Cristallisation → Diagénèse → Érosion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cycle sédimentaire commence par l'altération chimique et l'érosion de la roche mère, suivies du transport des débris, de leur dépôt (sédimentation) et enfin de la diagénèse."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 4 : LA FORMATION DES ROCHES MÉTAMORPHIQUES
// ============================================================================
export const svt2deCFormationRochesMetamorphiquesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch4_formation_roches_metamorphiques",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 4,
  "officialVolumeHours": 2,
  "title": "Leçon 4 — La formation des roches métamorphiques",
  "summary": "Définition du métamorphisme à l'état solide, caractéristiques structurales fondamentales (schistosité, foliation, rubanement) et séquence métamorphique en fonction du gradient thermique et de la pression.",
  "points": [
    {
      "id": "seconde_c_svt_ch4_p1_caracteristiques_structurales_schistosite_foliation_rubanement",
      "order": 1,
      "title": "Caractéristiques structurales : schistosité, foliation et rubanement",
      "summary": "Identifier les textures métamorphiques majeures : la schistosité du schiste, la foliation du micaschiste et le rubanement du gneiss.",
      "conceptExplanation": "1. Définition du métamorphisme géologique :\nLe métamorphisme est l'ensemble des transformations structurales et minéralogiques subies par une roche préexistante (qu'elle soit d'origine magmatique, sédimentaire ou déjà métamorphique) À L'ÉTAT SOLIDE (sans fusion), sous l'influence d'une augmentation de la température et de la pression (liée à l'enfouissement ou à des contraintes tectoniques régionales).\n\n2. Les trois structures macroscopiques caractéristiques :\nEn fonction de l'intensité de la pression et de la température, les minéraux s'aplatissent, se réorientent et recristallisent perpendiculairement à la direction de la contrainte compressive, créant trois aspects texturaux distinctifs :\n- La schistosité (ex : le schiste) :\n  * Aspect : la roche est formée de feuillets ou plaquettes plans très minces, parallèles, superposés et jointifs.\n  * Propriété remarquable : la roche se débite facilement en feuillets plats et minces (clivage schisteux, ex : ardoise de toiture).\n  * Minéraux : dominée par des feuillets de séricite et de chlorite.\n- La foliation (ex : le micaschiste) :\n  * Aspect : la roche présente des couches ou feuillets parallèles bien soudés, caractérisés par une alternance visible de lits clairs (quartz, feldspath) et de lits sombres (micas blancs et noirs abondants).\n  * Propriété : la roche est plus résistante que le schiste et ne se clive plus en feuillets très minces, mais conserve une orientation marquée de ses minéraux micacés très brillants.\n- Le rubanement (ex : le gneiss) :\n  * Aspect : la roche est constituée d'une alternance de bandes (ou rubans) épaisses claires (blanches à rosées, formées de quartz et feldspaths) et sombres (noires, formées de biotite et d'amphiboles).\n  * Propriété : les bandes présentent souvent un aspect plissé ou sinueux (contorsions ductiles) car à haute température et haute pression, la roche s'est ramollie et a flué sous la pression avant de recristalliser.\n\n3. Bilan comparatif des trois roches métamorphiques types :\n- Schiste : structure schisteuse en feuillets fins délaminables.\n- Micaschiste : structure foliée à micas dominants et feuillets soudés.\n- Gneiss : structure rubanée en bandes claires/sombres alternées et plissées.",
      "formulas": [
        {
          "name": "Les 3 structures métamorphiques types",
          "formula": "Schiste (schistosité / feuillets) → Micaschiste (foliation / lits soudés) → Gneiss (rubanement / bandes plissées)",
          "note": "Reflète l'intensité croissante de la pression et de la température."
        },
        {
          "name": "Caractère fondamental du métamorphisme",
          "formula": "Transformation à l'ÉTAT SOLIDE (sans aucune fusion)",
          "note": "Dès qu'il y a fusion du liquide magmatique, on sort du métamorphisme pour entrer dans le magmatisme."
        }
      ],
      "keyRule": "Pour distinguer les trois roches métamorphiques : LE SCHISTE a des feuillets minces qui s'effeuillent (schistosité). LE MICASCHISTE a des paillettes de mica brillantes et des couches soudées (foliation). LE GNEISS a des rubans épais clairs et sombres alternés et plissés (rubanement).",
      "workedExample": {
        "title": "Exemple résolu : Détermination d'échantillons de roches métamorphiques de la Nawa",
        "statement": "Au bord du fleuve Nawa à Soubré, des élèves ramassent trois échantillons de roches E1, E2 et E3 :\n- E1 se délite facilement au marteau en feuillets très plats et fins et possède une teinte vert-grisâtre soyeuse.\n- E2 est une roche brillante très pailletée en surface où alternent des couches minces claires et sombres bien soudées.\n- E3 présente une alternance de rubans blanchâtres de 1 cm d'épaisseur et de rubans noirs plissés et sinueux.\nNommer la roche et la caractéristique structurale pour chaque échantillon.",
        "methodSteps": [
          "Étape 1 : Analyser E1 : structure en feuillets plats délaminables = structure schisteuse (schistosité) ; la roche est un schiste.",
          "Étape 2 : Analyser E2 : alternance de couches soudées claires et de paillettes sombres de micas = structure foliée (foliation) ; la roche est un micaschiste.",
          "Étape 3 : Analyser E3 : bandes épaisses de quartz/feldspath et de minéraux noirs sinueuses et plissées = structure rubanée (rubanement) ; la roche est un gneiss."
        ],
        "conclusion": "E1 est un schiste (schistosité), E2 est un micaschiste (foliation) et E3 est un gneiss (rubanement)."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch4_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle condition physique obligatoire caractérise le phénomène de métamorphisme ?",
          "options": [
            "La transformation des roches s'effectue obligatoirement à l'état solide sans fusion",
            "La roche doit fondre complètement en lave liquide",
            "La roche doit être dissoute dans une nappe d'eau acide",
            "La roche doit être pulvérisée en poussière par le vent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition géologique, le métamorphisme est une transformation minéralogique et structurale d'une roche à l'état rigoureusement solide sous l'action de la chaleur et de la pression."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la structure caractéristique du schiste qui lui permet de se débiter en plaquettes parallèles ?",
          "options": [
            "La schistosité",
            "Le rubanement",
            "La texture grenue",
            "La texture microlitique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La schistosité est la disposition des minéraux en feuillets parallèles très rapprochés, conférant à la roche la propriété de se cliver en plaques fines."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex3",
          "type": "mcq",
          "prompt": "Quel aspect structural permet d'identifier à coup sûr un échantillon de micaschiste ?",
          "options": [
            "Une structure foliée avec alternance de couches minces de minéraux clairs et de paillettes brillantes de micas",
            "Une masse compacte sans aucune orientation visible",
            "De gros blocs de verre volcanique noir",
            "Des cavités remplies de gaz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le micaschiste possède une structure foliée, où les micas recristallisés en feuillets parallèles confèrent à la roche un aspect très brillant et feuilleté."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex4",
          "type": "mcq",
          "prompt": "Comment se présente la structure rubanée du gneiss ?",
          "options": [
            "Une alternance de rubans ou bandes épaisses claires (quartz, feldspaths) et sombres (biotite, amphiboles), souvent plissées",
            "Une seule couche homogène de couleur vert pomme",
            "Un ensemble de bulles de lave figées",
            "Une accumulation de grains de sable meuble"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gneiss se reconnaît à son rubanement caractéristique : de larges bandes alternées claires et sombres, souvent ondulées ou plissées sous les contraintes tectoniques."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex5",
          "type": "mcq",
          "prompt": "Quels sont les deux minéraux principaux qui composent les bandes claires du gneiss ?",
          "options": [
            "Le quartz et les feldspaths",
            "La biotite et la chlorite",
            "L'olivine et le diamant",
            "L'argile et le gypse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les bandes claires du gneiss sont constituées de silicates leucocrates riches en silice et aluminium : le quartz et les feldspaths."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex6",
          "type": "mcq",
          "prompt": "À partir de quel type de roche préexistante (roche mère) se forme généralement la séquence métamorphique schiste-micaschiste-gneiss ?",
          "options": [
            "Une roche sédimentaire argileuse (pélite)",
            "Un sel marin",
            "Une coulée de basalte uniquement",
            "Un calcaire pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une roche argileuse (pélite sédimentaire) soumise à un métamorphisme régional croissant donne successivement un schiste, puis un micaschiste, puis un gneiss."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle roche métamorphique obtient-on par métamorphisme d'un calcaire sédimentaire pur ?",
          "options": [
            "Le marbre",
            "Le quartzite",
            "Le basalte",
            "Le grès"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcaire (CaCO₃) soumis à la pression et à la température recristallise pour former une roche métamorphique cristalline dure : le marbre."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle roche métamorphique très dure obtient-on par métamorphisme d'un grès quartzeux ?",
          "options": [
            "Le quartzite",
            "Le schiste ardoisier",
            "L'argile verte",
            "La bauxite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le grès (grains de sable de quartz) recristallise sous fortes contraintes pour former une roche extrêmement résistante : le quartzite."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch4_p2_mecanisme_temperature_pression_sequence_metamorphique",
      "order": 2,
      "title": "Mécanisme de formation : température, pression et séquence métamorphique",
      "summary": "Relier les conditions thermodynamiques (température, pression, profondeur) à l'apparition des minéraux index et des migmatites.",
      "conceptExplanation": "1. Les deux moteurs du métamorphisme :\nEn s'enfonçant dans la croûte terrestre (subsidence, enfouissement ou subduction/collision tectonique) :\n- La température augmente régulièrement avec la profondeur sous l'effet du flux thermique terrestre : c'est le gradient géothermique (en moyenne 10 °C pour 100 m de profondeur, soit environ 30 °C par kilomètre).\n- La pression augmente avec le poids des roches sus-jacentes (pression lithostatique ou géostatique) et les contraintes tectoniques latérales (pression orientée).\n\n2. Les effets combinés de la température et de la pression :\n- La température élevée ramollit la matière minérale sans la fondre, accélère les réactions chimiques entre solides et permet la recristallisation des atomes en réseaux plus compacts.\n- La forte pression aplatit les minéraux et les oblige à s'orienter perpendiculairement aux forces de compression, créant les plans de schistosité et de foliation.\n\n3. La séquence métamorphique d'une pélite en fonction de la profondeur :\nL'étude expérimentale montre une succession stricte de faciès métamorphiques :\n- Stade 1 : Schiste à séricite (épizone, métamorphisme de faible intensité) :\n  * Conditions : Température ≈ 250 °C, profondeur ≈ 2 500 m (pression modérée 1,5 à 3 kbar).\n  * Minéraux : les feuillets d'argile se déshydratent et recristallisent en fines paillettes de séricite et de chlorite orientées en feuillets (schistosité).\n- Stade 2 : Micaschiste (mésozone, métamorphisme moyen) :\n  * Conditions : Température ≈ 300 °C à 400 °C, profondeur ≈ 3 000 à 4 000 m.\n  * Minéraux : apparition de grands cristaux visibles de micas blancs (muscovite) et de micas noirs (biotite), ainsi que de quartz et parfois de grenats (structure foliée).\n- Stade 3 : Gneiss (catazone, métamorphisme de haute intensité) :\n  * Conditions : Température de 500 °C à 700 °C, profondeur de 4 500 à 7 000 m.\n  * Minéraux : déstabilisation des micas au profit de feldspaths abondants, de quartz et de grenat. Les minéraux s'organisent en bandes épaisses distinctes (rubanement).\n- Stade 4 : Les migmatites et le début de fusion (anatexie) :\n  * Conditions : Température atteignant 740 °C à une profondeur de 7 400 m (en présence d'eau).\n  * À 740 °C, la roche métamorphique commence à fondre partiellement : c'est le début de l'anatexie.\n  * Les migmatites sont des roches mixtes ('mi-métamorphiques, mi-magmatiques') contenant des bandes résiduelles de gneiss non fondu (paléosome) et des veines de granite issues de la cristallisation du liquide magmatique formé (néosome).",
      "formulas": [
        {
          "name": "Séquence métamorphique continue",
          "formula": "Argile (sédiment) → Schiste (250 °C) → Micaschiste (350 °C) → Gneiss (600 °C) → Migmatite (740 °C) → Magma d'anatexie",
          "note": "Enfouissement continu avec élévation de température et de pression."
        },
        {
          "name": "Seuil de l'anatexie (fusion partielle)",
          "formula": "T ≥ 740 °C (en présence d'eau à forte pression)",
          "note": "Frontière thermodynamique entre métamorphisme et magmatisme."
        }
      ],
      "keyRule": "L'ordre de la séquence métamorphique avec la profondeur est INVARIABLE : SCHISTE (250 °C, 2 500 m) → MICASCHISTE (300 °C, 3 000 m) → GNEISS (500-700 °C, 5 000 m) → MIGMATITE (740 °C, début de fusion). À partir de 740 °C, la roche fond : on quitte le métamorphisme !",
      "workedExample": {
        "title": "Exemple résolu : Évolution d'une couche d'argile dans une zone de subduction",
        "statement": "Une couche d'argile sédimentaire marine est entraînée en profondeur dans une fosse de subduction. Le gradient géothermique moyen est estimé à 10 °C pour 100 m.\n1. Calculer la température théorique atteinte par la roche à 3 000 m de profondeur et identifier la roche métamorphique formée.\n2. Déterminer à quelle profondeur théorique la roche atteindra son point de fusion (740 °C) et nommer la roche mixte alors obtenue.",
        "methodSteps": [
          "Étape 1 : Calculer la température à 3 000 m : T = (3 000 m / 100 m) × 10 °C = 30 × 10 = 300 °C.",
          "Étape 2 : Identifier la roche formée à 300 °C : à cette température et profondeur, la roche argileuse s'est transformée en micaschiste (structure foliée avec recristallisation de mica blanc et noir).",
          "Étape 3 : Calculer la profondeur correspondant à la température de fusion de 740 °C : Profondeur = (740 °C / 10 °C) × 100 m = 74 × 100 m = 7 400 m.",
          "Étape 4 : Identifier la roche mixte formée à ce stade : à 740 °C débute la fusion partielle (anatexie), donnant naissance à une migmatite."
        ],
        "conclusion": "À 3 000 m (300 °C), l'argile devient un micaschiste ; à 7 400 m (740 °C), la fusion partielle donne une migmatite."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch4_p2_ex1",
          "type": "mcq",
          "prompt": "À quelle température et à quelle profondeur approximative se forme le schiste à séricite ?",
          "options": [
            "250 °C et environ 2 500 m de profondeur",
            "100 °C et 500 m de profondeur",
            "740 °C et 7 400 m de profondeur",
            "1 200 °C en surface"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le schiste à séricite est le premier stade métamorphique : il apparaît dès 250 °C à environ 2 500 m de profondeur."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex2",
          "type": "mcq",
          "prompt": "Dans quelle gamme de température se forme le gneiss lors d'un métamorphisme régional poussé ?",
          "options": [
            "Entre 500 °C et 700 °C",
            "Entre 50 °C et 100 °C",
            "À plus de 1 500 °C",
            "À moins de 0 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gneiss est une roche de métamorphisme de haut degré (catazone) qui se forme entre 500 °C et 700 °C à des profondeurs de 4 000 à 7 000 m."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex3",
          "type": "mcq",
          "prompt": "Que se passe-t-il lorsque la température d'un gneiss enfoui en profondeur atteint environ 740 °C en présence d'eau ?",
          "options": [
            "La roche commence à fondre partiellement : c'est le début de l'anatexie et la formation des migmatites",
            "La roche gèle instantanément sous forme de glace",
            "La roche s'évapore dans le manteau terrestre",
            "La roche redevient de l'argile sédimentaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À partir de 740 °C (sous forte pression et en présence d'eau), les minéraux du gneiss commencent à fondre : ce début de fusion partielle produit les migmatites."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex4",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une migmatite en géologie ?",
          "options": [
            "Une roche mixte intermédiaire mi-métamorphique mi-magmatique présentant des parties fondues et non fondues",
            "Une roche sédimentaire formée de débris de coquillages",
            "Une météorite ferreuse tombée dans l'océan",
            "Une cendre volcanique consolidée par le vent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une migmatite est une roche hybride témoignant du passage du métamorphisme au magmatisme : elle associe des lits sombres non fondus de gneiss et des lits clairs de granite fondu puis cristallisé."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex5",
          "type": "mcq",
          "prompt": "Quel est l'effet principal de la pression lithostatique et des forces tectoniques sur l'orientation des minéraux métamorphiques ?",
          "options": [
            "Elles aplatissent les minéraux et les forcent à s'aligner parallèlement dans des plans perpendiculaires à la force compressive",
            "Elles font tourner les minéraux en spirale comme des tourbillons",
            "Elles réduisent les cristaux en poudre microscopique amorphe",
            "Elles n'ont strictement aucun effet géométrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sous forte compression, les minéraux s'aplatissent et s'orientent perpendiculairement à la direction de la contrainte principale, créant les plans de schistosité et de foliation."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex6",
          "type": "mcq",
          "prompt": "Quel minéral rouge foncé très dur apparaît fréquemment dans les micaschistes et les gneiss lors d'un métamorphisme moyen à fort ?",
          "options": [
            "Le grenat",
            "Le sel gemme",
            "Le gypse",
            "La craie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le grenat est un nésosilicate caractéristique des roches de métamorphisme moyen à intense (micaschistes à grenat et gneiss)."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex7",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la branche de la géologie qui classe les minéraux apparaissant successivement selon l'intensité croissante de la température et de la pression ?",
          "options": [
            "Les minéraux index (ou minéraux indicateurs de métamorphisme)",
            "Les fossiles stratigraphiques",
            "Les isotopes radioactifs",
            "Les catalyseurs organiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les minéraux index (chlorite, séricite, biotite, grenat, sillimanite) permettent aux géologues d'estimer avec précision la température et la pression subies par la roche."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex8",
          "type": "mcq",
          "prompt": "Pourquoi la présence d'eau sous pression favorise-t-elle la fusion des roches en profondeur à une température plus basse (740 °C au lieu de plus de 1 000 °C) ?",
          "options": [
            "L'eau agit comme un fondant en abaissant considérablement la température de fusion des silicates (solidus saturé en eau)",
            "L'eau s'enflamme chimiquement avec le silicium",
            "L'eau dissout les atomes sous forme d'acide pur",
            "L'eau accélère le refroidissement de la croûte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En géologie, l'eau sous forte pression abaisse le point de fusion des roches (courbe du solidus hydraté), permettant aux gneiss de commencer à fondre dès 740 °C."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 5 : LE DEVENIR DES ROCHES MÉTAMORPHIQUES
// ============================================================================
export const svt2deCDevenirRochesMetamorphiquesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch5_devenir_roches_metamorphiques",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 5,
  "officialVolumeHours": 2,
  "title": "Leçon 5 — Le devenir des roches métamorphiques",
  "summary": "Évolution des roches métamorphiques en surface (altération en sédiments) et en profondeur (fusion partielle donnant le magma d'anatexie), et schéma fonctionnel complet du cycle des roches.",
  "points": [
    {
      "id": "seconde_c_svt_ch5_p1_evolution_surface_alterites_profondeur_anatexie",
      "order": 1,
      "title": "Les deux destins des roches métamorphiques : altération en surface et anatexie en profondeur",
      "summary": "Comprendre comment les roches métamorphiques se dégradent en altérites (argile, arène) à l'affleurement ou fondent en magma d'anatexie en profondeur.",
      "conceptExplanation": "1. Deux destins possibles selon la dynamique de la Terre :\nLes roches métamorphiques ne sont pas immuables. Selon les mouvements tectoniques et géodynamiques de la lithosphère, elles connaissent deux voies d'évolution majeures :\n- Voie 1 (vers le haut / exhumation en surface) : transformation en roches sédimentaires.\n- Voie 2 (vers le bas / enfouissement en grande profondeur) : transformation en roches magmatiques.\n\n2. Voie 1 : Devenir en surface sous l'action du climat et des intempéries (altération) :\nLorsque les roches métamorphiques sont ramenées vers la surface de la Terre par l'érosion des reliefs sus-jacents (affleurement), elles se retrouvent dans des conditions de basse température et de faible pression instables pour leurs minéraux profonds. Elles subissent l'altération chimique (eau de pluie et dioxyde de carbone) et la désagrégation mécanique (variations thermiques, vent) :\n- Le schiste s'altère et se désagrège pour donner de l'argile.\n- Le gneiss s'altère pour donner une arène granitique contenant des grains de sable quartzeux et un peu d'argile.\n- Le micaschiste s'altère pour donner des matériaux argilo-sableux.\nL'ensemble de ces produits résiduels d'altération superficielle est appelé les altérites.\nCes sédiments sont ensuite transportés par les eaux de ruissellement et les fleuves, déposés dans les bassins sédimentaires où ils subissent la diagénèse (compaction, déshydratation, cimentation) pour former de nouvelles roches sédimentaires.\n\n3. Voie 2 : Devenir en profondeur sous fortes températures et pressions (l'anatexie) :\nSi les roches métamorphiques continuent de s'enfoncer dans des zones tectoniquement actives (zones de subduction, racines de chaînes de montagnes) :\n- À partir de 740 °C et sous de très fortes pressions, en présence d'eau, les roches métamorphiques (comme le gneiss) commencent à fondre progressivement : c'est la fusion anatectique ou anatexie.\n- Le produit de cette fusion totale ou partielle est un liquide silicaté visqueux de composition granitique appelé le magma d'anatexie.\n- Ce magma d'anatexie, moins dense que les roches encaissantes, remonte lentement vers la surface. Au cours de sa remontée, il se refroidit et recristallise pour donner naissance à de nouvelles roches magmatiques (granites d'anatexie de texture grenue en profondeur, ou roches volcaniques si le magma débouche en surface).",
      "formulas": [
        {
          "name": "Devenir en surface (Altération)",
          "formula": "Roche métamorphique + Eau/Climat → Altérites (argile, arène) → Sédimentation + Diagénèse → Roche sédimentaire",
          "note": "Recyclage de surface sous faible température et pression atmosphérique."
        },
        {
          "name": "Devenir en profondeur (Anatexie)",
          "formula": "Gneiss (T ≥ 740 °C) → Fusion (Anatexie) → Magma d'anatexie → Recristallisation → Roche magmatique",
          "note": "Passage du domaine métamorphique au domaine magmatique en profondeur."
        }
      ],
      "keyRule": "EN SURFACE : la roche métamorphique S'ALTÈRE à l'eau pour donner des sédiments (altérites), qui par diagénèse deviennent des roches sédimentaires. EN PROFONDEUR : elle FOND dès 740 °C pour donner du magma d'anatexie, qui par cristallisation devient une roche magmatique.",
      "workedExample": {
        "title": "Exemple résolu : Évolution comparée d'un massif de gneiss de Man et d'un gneiss enfoui",
        "statement": "On compare le devenir géologique de deux blocs de gneiss identiques :\n- Bloc 1 : situé à l'affleurement au sommet d'une colline près de Man, exposé aux pluies tropicales ivoiriennes.\n- Bloc 2 : situé à 8 km de profondeur dans une zone de collision orogénique où la température atteint 780 °C.\nExpliquer en détail ce que deviendra chaque bloc de roche à l'échelle des temps géologiques.",
        "methodSteps": [
          "Étape 1 : Analyser le devenir du Bloc 1 (en surface) : exposé à l'eau de pluie chargée de CO₂, le feldspath et le mica du gneiss s'hydrolysent, le fer s'oxyde. Le bloc se délite en arène granitique (sable + argile). Ces produits d'altération seront transportés par le ruissellement vers le bassin sédimentaire et deviendront, par diagénèse, des roches sédimentaires (grès et argilites).",
          "Étape 2 : Analyser le devenir du Bloc 2 (à 8 km, 780 °C) : la température dépasse le seuil d'anatexie (740 °C). Le bloc de gneiss fond complètement pour donner du magma d'anatexie de composition granitique. En refroidissant lentement, ce magma recristallise pour former une nouvelle roche magmatique plutonique : un granite d'anatexie."
        ],
        "conclusion": "Le bloc 1 de surface donne des roches sédimentaires par altération et diagénèse, tandis que le bloc 2 de profondeur donne une roche magmatique par fusion anatectique et cristallisation."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch5_p1_ex1",
          "type": "mcq",
          "prompt": "Qu'advient-il d'une roche métamorphique lorsqu'elle se retrouve exposée à la surface de la Terre sous l'action des intempéries ?",
          "options": [
            "Elle subit l'altération chimique et mécanique pour donner des sédiments (altérites)",
            "Elle entre en éruption volcanique",
            "Elle devient immédiatement un diamant",
            "Elle conserve sa structure intacte pendant des milliards d'années sans changer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la surface, la roche n'est plus en équilibre avec les conditions atmosphériques : l'eau et le vent l'altèrent et la transforment en débris sédimentaires appelés altérites."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex2",
          "type": "mcq",
          "prompt": "Quel produit d'altération meuble obtient-on spécifiquement à partir de la dégradation superficielle d'un schiste ?",
          "options": [
            "De l'argile",
            "Du sable pur de quartz",
            "Du calcaire dur",
            "Du basalte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le schiste, riche en séricite et minéraux argileux d'origine, s'altère en surface pour redonner des argiles."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l'ensemble des roches meubles et résiduelles formées à la surface par l'altération des roches métamorphiques ?",
          "options": [
            "Les altérites",
            "Les granitoïdes",
            "Les fentes de tension",
            "Les évaporites"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme 'altérites' désigne l'ensemble des matériaux meubles résiduels issus de l'altération des roches à l'affleurement."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex4",
          "type": "mcq",
          "prompt": "Qu'est-ce que le 'magma d'anatexie' en géologie ?",
          "options": [
            "Un liquide magmatique formé en profondeur par la fusion de roches métamorphiques portées à haute température (> 740 °C)",
            "Une coulée de lave basaltique issue du manteau profond",
            "Une boue sédimentaire froide au fond d'un lac",
            "Une nappe d'eau souterraine bouillante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anatexie est la fusion en profondeur de roches métamorphiques (comme le gneiss) sous fortes températures et pressions, engendrant un liquide magmatique silicaté appelé magma d'anatexie."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle famille de roches se forme lorsque le magma d'anatexie remonte et recristallise lentement en profondeur ?",
          "options": [
            "Des roches magmatiques (telles que le granite d'anatexie)",
            "Des roches sédimentaires meubles",
            "Des roches fossiles végétales",
            "Des glaces polaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cristallisation d'un magma d'anatexie produit par définition des roches magmatiques plutoniques, notamment des granites d'anatexie."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex6",
          "type": "mcq",
          "prompt": "Que donne l'altération d'un micaschiste à la surface du sol ?",
          "options": [
            "Des matériaux argilo-sableux",
            "Des blocs de marbre pur",
            "De l'ardoise inaltérable",
            "Du gypse cristallisé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le micaschiste contenant du quartz (qui donne le sable) et des micas (qui donnent l'argile), son altération produit des sédiments argilo-sableux."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex7",
          "type": "mcq",
          "prompt": "Par quelle suite d'étapes les produits d'altération d'un gneiss deviennent-ils des roches sédimentaires consolidées ?",
          "options": [
            "Transport par l'eau → Dépôt en bassin (sédimentation) → Diagénèse (compaction, déshydratation, cimentation)",
            "Fusion immédiate → Volcanisme explosif",
            "Enfouissement dans le manteau sans passer par l'eau",
            "Évaporation en nuages atmosphériques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les altérites du gneiss sont charriées par les rivières, sédimentent en couches successives dans un bassin puis se transforment en roche consolidée par la diagénèse."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est la condition indispensable pour que la fusion anatectique des gneiss démarre dès 740 °C en profondeur ?",
          "options": [
            "La présence d'eau interstitielle sous de fortes pressions",
            "L'absence totale d'oxygène dans l'air",
            "La présence de fossiles marins dans la roche",
            "L'obscurité totale des profondeurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La présence d'eau fluide sous forte pression joue un rôle de fondant déterminant qui abaisse le point de fusion des silicates à 740 °C."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch5_p2_grand_cycle_des_roches_dynamique_globale",
      "order": 2,
      "title": "Le grand cycle géologique des roches et la dynamique terrestre",
      "summary": "Schématiser et expliquer le cycle perpétuel de transformation réciproque reliant les roches magmatiques, sédimentaires et métamorphiques.",
      "conceptExplanation": "1. Le concept de cycle des roches (cycle pétrogénétique) :\nÀ l'échelle des temps géologiques (millions à milliards d'années), les roches de la Terre ne sont jamais indestructibles : elles sont en perpétuelle transformation et se recyclent mutuellement au sein d'un cycle fermé gouverné par la tectonique des plaques et l'énergie thermique interne du globe ainsi que l'énergie solaire en surface.\n\n2. Les trois grandes familles de roches et leurs liens de parenté :\n- Les roches magmatiques (roches endogènes de fusion) : nées de la cristallisation d'un magma fondu (ex : granite, basalte).\n- Les roches sédimentaires (roches exogènes de surface) : nées de l'altération, de l'érosion, du transport, de la sédimentation et de la diagénèse de roches exposées en surface (ex : sable, grès, calcaire, argilite).\n- Les roches métamorphiques (roches transformées à l'état solide) : nées de la transformation sous haute température et forte pression de roches préexistantes (ex : schiste, micaschiste, gneiss).\n\n3. Les mécanismes de passage d'une famille à l'autre dans le cycle :\n- Du magma aux roches magmatiques : par refroidissement et cristallisation (cristallisation fractionnée en profondeur ou solidification rapide en surface).\n- De n'importe quelle roche (magmatique, métamorphique ou sédimentaire) aux sédiments puis roches sédimentaires :\n  Émersion à la surface → Altération météorique + Érosion → Transport par l'eau/vent → Sédimentation en bassin → Diagénèse (compaction, cimentation).\n- Des roches sédimentaires ou magmatiques aux roches métamorphiques :\n  Enfouissement en profondeur (subduction, orogénèse) → Hausse de température et de pression → Métamorphisme à l'état solide (recristallisation, schistosité, foliation, rubanement).\n- Des roches métamorphiques au magma :\n  Enfouissement poussé au-delà de 740 °C → Fusion partielle ou totale (anatexie) → Magma d'anatexie.\n- Du magma d'anatexie aux roches magmatiques :\n  Refroidissement et recristallisation du magma.\n\n4. Conclusion générale sur la dynamique terrestre :\nLe cycle des roches démontre l'unité fondamentale de la géologie : la matière minérale de l'écorce terrestre circule sans fin entre la surface (monde de l'altération et de la sédimentation) et les profondeurs terrestres (monde du métamorphisme et du magmatisme).",
      "formulas": [
        {
          "name": "Schéma fonctionnel du cycle des roches",
          "formula": "Magma ⇄ Roches magmatiques ⇄ Roches sédimentaires ⇄ Roches métamorphiques ⇄ Magma",
          "note": "Cycle fermé sans commencement ni fin à l'échelle des temps géologiques."
        },
        {
          "name": "Conditions thermodynamiques comparées",
          "formula": "Sédimentaires : T < 100 °C, P faible (Surface) | Métamorphiques : T 200-700 °C, P forte (Profondeur) | Magmatiques : T > 740-1200 °C (Fusion)",
          "note": "Chaque famille correspond à un domaine de température et de pression précis."
        }
      ],
      "keyRule": "LES 5 GRANDS PROCESSUS DE TRANSFORMATION DU CYCLE SONT : 1. Cristallisation (magma → roche magmatique), 2. Érosion + Diagénèse (roches de surface → roche sédimentaire), 3. Métamorphisme (roches solides → roche métamorphique), 4. Fusion/Anatexie (roche métamorphique → magma), 5. Recristallisation (magma → nouvelle roche magmatique).",
      "workedExample": {
        "title": "Exemple résolu : Traçage du cycle complet d'un atome de silicium à travers les trois familles de roches",
        "statement": "Un atome de silicium (Si) fait initialement partie d'un cristal de feldspath dans un granite de Bouaflé.\nDécrire les étapes successives par lesquelles cet atome va parcourir les trois grandes familles de roches de l'écorce terrestre pour revenir finalement à un nouveau granite.",
        "methodSteps": [
          "Étape 1 (Départ : Roche magmatique) : l'atome est dans le granite. Par altération chimique à l'eau pluviale, le feldspath s'hydrolyse et libère de la silice et de l'alumine qui forment une particule d'argile.",
          "Étape 2 (Vers la roche sédimentaire) : la particule d'argile est transportée par le fleuve et sédimente dans un lac. Par diagénèse (compaction et déshydratation), elle devient une roche sédimentaire consolidée : l'argilite.",
          "Étape 3 (Vers la roche métamorphique) : l'argilite est entraînée en profondeur par une subduction tectonique. Sous l'effet de la chaleur (600 °C) et de la pression, elle recristallise à l'état solide pour devenir un gneiss à structure rubanée.",
          "Étape 4 (Vers le magma puis la roche magmatique) : le gneiss s'enfonce à plus de 7 400 m et atteint 750 °C. Il fond en magma d'anatexie. Ce magma remonte, cristallise lentement et redonne un nouveau granite plutonique."
        ],
        "conclusion": "L'atome de silicium a traversé le cycle complet : magmatique initial (granite) → sédimentaire (argilite) → métamorphique (gneiss) → magmatique régénéré (granite d'anatexie)."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch5_p2_ex1",
          "type": "mcq",
          "prompt": "Quel processus permet le passage direct d'un magma liquide à une roche magmatique solide ?",
          "options": [
            "La cristallisation (ou solidification par refroidissement)",
            "La diagénèse",
            "La sédimentation",
            "L'érosion fluviale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cristallisation est la solidification du magma fondu lors de sa baisse de température, produisant des roches magmatiques."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex2",
          "type": "mcq",
          "prompt": "Quel processus permet à des roches sédimentaires ou magmatiques de se transformer en roches métamorphiques ?",
          "options": [
            "Le métamorphisme (action conjuguée de fortes températures et pressions à l'état solide)",
            "La fusion totale à l'air libre",
            "La sédimentation par granoclassement",
            "L'évaporation dans l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le métamorphisme est le mécanisme d'enfouissement profond transformant les roches à l'état solide sans les faire fondre."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex3",
          "type": "mcq",
          "prompt": "Par quels processus successifs une roche magmatique ou métamorphique exposée en surface devient-elle une roche sédimentaire ?",
          "options": [
            "Altération → Érosion → Transport → Sédimentation → Diagénèse",
            "Fusion immédiate → Cristallisation fractionnée",
            "Plissement tectonique → Métamorphisme catazonal",
            "Séisme de faille → Volcanisme effusif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute roche à la surface est érodée, ses débris sont transportés, déposés en sédiments puis consolidés par la diagénèse en roche sédimentaire."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex4",
          "type": "mcq",
          "prompt": "Dans quelles conditions thermodynamiques se forment respectivement les roches sédimentaires comparées aux roches métamorphiques ?",
          "options": [
            "Sédimentaires : basse température (< 100 °C) et faible pression en surface ; Métamorphiques : température élevée (200-700 °C) et forte pression en profondeur",
            "Sédimentaires : plus de 1 000 °C ; Métamorphiques : température glaciale sous zéro",
            "Toutes les deux à la même température de 800 °C",
            "Sédimentaires en profondeur absolue et métamorphiques dans l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les roches sédimentaires naissent en surface à faible P et basse T, tandis que les roches métamorphiques nécessitent les fortes pressions et chaleurs du sous-sol."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex5",
          "type": "mcq",
          "prompt": "Quel phénomène marque la transition ultime entre le métamorphisme et le magmatisme à très haute température ?",
          "options": [
            "L'anatexie (fusion partielle des roches métamorphiques produisant du magma)",
            "La compaction par expulsion d'eau",
            "La fossilisation d'algues calcaires",
            "L'apparition de fissures de stratification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anatexie est le passage de l'état solide (métamorphisme) à l'état liquide fondu (magma), fermant la boucle du cycle des roches."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex6",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que les roches de la Terre ne sont pas éternelles ?",
          "options": [
            "Parce qu'à l'échelle des temps géologiques, elles sont perpétuellement détruites, transformées et recyclées dans le cycle des roches",
            "Parce qu'elles disparaissent dans l'espace sous l'effet de la gravitation",
            "Parce que les plantes consument toutes les pierres en quelques années",
            "Parce que la tectonique des plaques s'est définitivement arrêtée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Terre est géologiquement active : la matière minérale circule en permanence entre fusion, cristallisation, érosion, sédimentation et métamorphisme."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex7",
          "type": "mcq",
          "prompt": "Qu'indique la présence d'une migmatite dans un affleurement de roche ancienne ?",
          "options": [
            "Que la roche a atteint le seuil limite de l'anatexie (≈ 740 °C) où une partie a fondu tandis que l'autre est restée solide",
            "Qu'un dinosaure y a été fossilisé intact",
            "Qu'un lac d'eau douce y a séché il y a 10 ans",
            "Qu'un éclair a vitrifié le sable de surface"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La migmatite est la preuve géologique de terrain attestant que les conditions de fusion partielle (anatexie) ont été atteintes dans l'histoire de la croûte."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex8",
          "type": "mcq",
          "prompt": "Parmi les enchaînements suivants, lequel illustre une séquence géodynamique complète et réaliste du cycle des roches ?",
          "options": [
            "Granite → Arène granitique → Sédimentation sableuse → Grès → Gneiss → Magma d'anatexie → Nouveau granite",
            "Sable → Magma → Calcaire → Argile → Granite",
            "Basalte → Grès → Granite → Calcaire → Basalte sans transformation",
            "Gneiss → Charbon → Quartzite → Lave en surface sans fusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette séquence retrace parfaitement l'histoire géologique complète : altération du granite, dépôt et diagénèse en grès, métamorphisme en gneiss, fusion en magma d'anatexie et recristallisation en granite."
        }
      ]
    }
  ]
};

// ============================================================================
// EXPORTATION DE TOUS LES CHAPITRES DE SVT 2de C (5 LEÇONS OFFICIELLES)
// ============================================================================
export const svt2deCChapters: CurriculumChapter[] = [
  svt2deCStructureGeologiqueChapter,
  svt2deCAlterationChimiqueChapter,
  svt2deCFormationRochesSedimentairesChapter,
  svt2deCFormationRochesMetamorphiquesChapter,
  svt2deCDevenirRochesMetamorphiquesChapter,
];
