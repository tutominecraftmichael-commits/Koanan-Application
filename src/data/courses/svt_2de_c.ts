// ============================================================================
// MODULE OFFICIEL : SVT 2de C (SCIENCES DE LA VIE ET DE LA TERRE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
//
// THÈME 1 : GÉOLOGIE DE LA CÔTE D'IVOIRE ET DEVENIR DES ROCHES (Leçons 1 à 5)
// - Leçon 1 : La structure géologique de la Côte d'Ivoire (4h)
// - Leçon 2 : L'altération chimique des roches magmatiques (2h)
// - Leçon 3 : La formation des roches sédimentaires (4h)
// - Leçon 4 : La formation des roches métamorphiques (2h)
// - Leçon 5 : Le devenir des roches métamorphiques (2h)
//
// THÈME 2 : LES RELATIONS AU SEIN D'UN ÉCOSYSTÈME ET INFLUENCE DE L'HOMME (Leçons 6 et 7)
// - Leçon 6 : Les relations entre les êtres vivants dans un écosystème (6h)
// - Leçon 7 : Le changement climatique (4h)
//
// THÈME 3 : LA REPRODUCTION DE LA CELLULE (Leçons 8 à 10)
// - Leçon 8 : L'organisation d'une cellule (2h)
// - Leçon 9 : La division cellulaire (mitose) (4h)
// - Leçon 10 : L'évolution de l'équipement chromosomique (4h)
//
// Volume horaire officiel total : 30 heures d'enseignement
// Standard d'excellence : 10 chapitres, 20 points de cours, 160 QCM interactifs (8 QCM par point)
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
export const svt2deCAlterationRochesMagmatiquesChapter: CurriculumChapter = {
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
// LEÇON 6 : LES RELATIONS ENTRE LES ÊTRES VIVANTS DANS UN ÉCOSYSTÈME
// ============================================================================
export const svt2deCRelationsEtresVivantsChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch6_relations_etres_vivants_ecosysteme",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 6,
  "officialVolumeHours": 6,
  "title": "Leçon 6 — Les relations entre les êtres vivants dans un écosystème",
  "summary": "Relations trophiques interspécifiques (chaînes, réseaux trophiques, niveaux trophiques), transfert de matière et flux d'énergie (pyramide des biomasses, recyclage par les décomposeurs), et relations intraspécifiques (vie en société chez les termites et babouins, communication).",
  "points": [
    {
      "id": "seconde_c_svt_ch6_p1_relations_trophiques_transfert_matiere_energie",
      "order": 1,
      "title": "Relations trophiques, réseaux alimentaires et transfert de matière-énergie",
      "summary": "Construire des chaînes et réseaux trophiques, identifier les niveaux trophiques (producteurs, consommateurs, décomposeurs) et analyser les pyramides écologiques et le recyclage de la matière.",
      "conceptExplanation": "1. Notions de chaîne alimentaire et de réseau trophique :\nDans tout écosystème (forêt, savane, jardin potager, étang), les êtres vivants sont reliés par des relations alimentaires interspécifiques (entre espèces différentes) :\n- Chaîne alimentaire (ou trophique) : suite ordonnée d'êtres vivants dans laquelle chacun mange celui qui le précède et est mangé par celui qui le suit. Chaque élément constitue un maillon de la chaîne.\n  Exemple : Feuille de maïs → Criquet → Caméléon → Serpent → Mangouste → Aigle.\n- Réseau trophique : ensemble complexe de plusieurs chaînes alimentaires interconnectées possédant des maillons communs (un même prédateur mange plusieurs proies, et une même proie est chassée par plusieurs prédateurs).\n\n2. Les différents niveaux trophiques :\nChaque maillon correspond à un niveau trophique précis selon son mode de nutrition :\n- Les producteurs primaires (1er niveau trophique) : ce sont TOUJOURS les végétaux chlorophylliens (plantes vertes, algues, phytoplancton). Ils sont autotrophes : grâce à la photosynthèse, ils fabriquent leur propre matière organique à partir d'eau, de sels minéraux et de CO₂ en utilisant l'énergie solaire.\n- Les consommateurs (hétérotrophes, incapables de photosynthèse) :\n  * Consommateurs de 1er ordre (C1) : animaux herbivores / phytophages se nourrissant directement des producteurs (criquet, lapin, mulot, antilope).\n  * Consommateurs de 2e ordre (C2) : carnivores primaires mangeant les herbivores (grenouille, caméléon, hérisson, serpent).\n  * Consommateurs de 3e ordre (C3) : carnivores secondaires ou super-prédateurs se nourrissant de carnivores (aigle, chouette, panthère).\n- Les décomposeurs (bactéries, champignons du sol, vers de terre, micro-arthropodes) : ils dégradent la matière organique morte (cadavres, feuilles mortes, excréments) et la minéralisent en sels minéraux réutilisables par les producteurs.\n\n3. Transfert de matière et flux d'énergie :\n- Pyramide des biomasses et des nombres : la biomasse (masse totale de matière vivante par unité de surface en g/m² ou kg/ha) et le nombre d'individus diminuent considérablement d'un niveau trophique inférieur au niveau supérieur. À chaque niveau, environ 80 à 90 % de l'énergie et de la matière sont perdus sous forme de respiration (chaleur), de travail musculaire ou de déchets non digérés (fèces).\n- Le cycle de la matière : contrairement à l'énergie qui se dissipe sous forme de chaleur (flux unidirectionnel ouvert), la matière circule de façon STRICTEMENT CYCLIQUE et fermée sans aucune perte globale : Matière minérale → Producteurs (matière organique) → Consommateurs → Décomposeurs → Sels minéraux réutilisés par les producteurs.",
      "formulas": [
        {
          "name": "Structure fondamentale d'une chaîne alimentaire",
          "formula": "Producteurs (Plantes vertes) → Consommateurs I (Herbivores) → Consommateurs II (Carnivores) → Décomposeurs (Bactéries)",
          "note": "Le premier maillon est obligatoirement un producteur autotrophe."
        },
        {
          "name": "Cycle fermé de la matière",
          "formula": "Sels minéraux + CO₂ → Végétaux → Animaux → Décomposeurs → Sels minéraux",
          "note": "La matière chimique se conserve et se recycle perpétuellement."
        }
      ],
      "keyRule": "DANS TOUTE CHAÎNE ALIMENTAIRE, LA FLÈCHE SIGNIFIE 'EST MANGÉ PAR' (et pointe toujours vers celui qui mange). Les producteurs sont obligatoirement en tête. La biomasse diminue à chaque étage de la pyramide en raison des pertes respiratoires et d'excrétion, mais la matière chimique globale est intégralement recyclée par les décomposeurs.",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un réseau trophique de savane ivoirienne",
        "statement": "Dans une parcelle de savane à Bouaké, on observe : des graminées, des criquets, des souris, des grenouilles, des serpents, des buses, des bactéries du sol.\n1. Identifier les producteurs, les consommateurs primaires C1, secondaires C2 et les décomposeurs.\n2. Écrire deux chaînes alimentaires distinctes reliées à ce réseau.\n3. Expliquer le rôle crucial joué par les bactéries du sol.",
        "methodSteps": [
          "Étape 1 : Classifier selon les niveaux trophiques :",
          "- Producteurs primaires : graminées (végétaux chlorophylliens autotrophes).",
          "- Consommateurs primaires (C1) : criquets et souris (phytophages/granivores).",
          "- Consommateurs secondaires (C2) et tertiaires (C3) : grenouilles, serpents et buses (carnivores).",
          "- Décomposeurs : bactéries du sol.",
          "Étape 2 : Écrire les chaînes alimentaires avec la convention 'est mangé par' (→) :",
          "Chaîne 1 : Graminées → Criquet → Grenouille → Serpent → Buse.",
          "Chaîne 2 : Graminées → Souris → Serpent → Buse.",
          "Étape 3 : Expliquer le rôle des bactéries : elles minéralisent les cadavres de tous les maillons et leurs déjections en éléments minéraux (azote, phosphore, potassium) assimilables par les graminées, assurant le bouclage du cycle de la matière."
        ],
        "conclusion": "Le réseau montre l'interconnexion alimentaire et le recyclage cyclique de la matière grâce aux décomposeurs."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch6_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est le premier maillon obligatoire de toute chaîne alimentaire dans un écosystème terrestre ?",
          "options": [
            "Les producteurs primaires (plantes vertes chlorophylliennes autotrophes)",
            "Les consommateurs primaires (herbivores)",
            "Les carnivores super-prédateurs",
            "Les décomposeurs exclusivement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute chaîne alimentaire débute obligatoirement par des producteurs autotrophes (plantes chlorophylliennes) qui fabriquent la matière organique initiale grâce à l'énergie solaire."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex2",
          "type": "mcq",
          "prompt": "Que signifie conventionnellement la flèche orientée A → B dans la représentation d'une chaîne alimentaire ?",
          "options": [
            "A est mangé par B",
            "A mange B",
            "A et B coopèrent pacifiquement",
            "A fournit de l'énergie solaire à B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par convention internationale en écologie, la flèche A → B signifie 'A est mangé par B' et indique le sens du transfert de matière et d'énergie."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex3",
          "type": "mcq",
          "prompt": "Dans un potager, une buse mange un lézard qui a mangé un criquet qui a mangé une feuille de salade. Quel est le niveau trophique exact du lézard ?",
          "options": [
            "Consommateur secondaire (C2, carnivore de 1er ordre)",
            "Producteur primaire",
            "Consommateur primaire (C1, herbivore)",
            "Décomposeur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La salade est le producteur, le criquet est le consommateur primaire C1 (herbivore), le lézard mangeant le criquet est le consommateur secondaire C2 (carnivore de 1er ordre)."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex4",
          "type": "mcq",
          "prompt": "Pourquoi la biomasse diminue-t-elle fortement lorsqu'on passe d'un niveau trophique inférieur au niveau supérieur dans une pyramide écologique ?",
          "options": [
            "Parce qu'une grande partie de l'énergie et de la matière est consommée pour la respiration (chaleur) et perdue dans les excréments",
            "Parce que les prédateurs sont plus petits que leurs proies",
            "Parce que la gravité terrestre augmente avec l'altitude",
            "Parce que les prédateurs refusent de se nourrir tous les jours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rendement écologique est faible (environ 10 %) : l'essentiel de la matière ingérée est rejeté non assimilé ou brûlé par la respiration cellulaire sous forme de chaleur et de travail mécanique."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex5",
          "type": "mcq",
          "prompt": "Quel est le rôle écologique primordial des décomposeurs (bactéries et champignons) dans un biotope ?",
          "options": [
            "Dégrader les cadavres et déchets organiques pour les transformer en sels minéraux réutilisables par les végétaux",
            "Chasser les herbivores pour protéger les forêts",
            "Produire de l'oxygène pour les grands mammifères",
            "Filtrer l'eau de pluie pour la rendre potable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les décomposeurs minéralisent la matière organique morte, bouclant ainsi le cycle de la matière en fournissant aux producteurs les nutriments minéraux nécessaires à leur croissance."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est la différence fondamentale entre le flux d'énergie et le cycle de la matière dans un écosystème ?",
          "options": [
            "La matière circule en cycle fermé sans perte, tandis que l'énergie circule à sens unique (flux ouvert) et se dissipe en chaleur",
            "L'énergie est recyclée en boucle fermée et la matière disparaît",
            "Ni la matière ni l'énergie ne se conservent",
            "L'énergie provient du sol et la matière provient du soleil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La matière se recycle perpétuellement (cycle biogéochimique fermé), tandis que l'énergie solaire entre dans l'écosystème, traverse les niveaux trophiques et se dissipe irréversiblement sous forme de chaleur (flux ouvert)."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex7",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on un réseau trophique par rapport à une chaîne alimentaire simple ?",
          "options": [
            "Un ensemble de plusieurs chaînes alimentaires interconnectées partageant des maillons communs",
            "Une chaîne alimentaire dans laquelle il n'y a aucun carnivore",
            "Une chaîne alimentaire sous-marine uniquement",
            "Un regroupement d'arbres d'une même plantation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un réseau trophique est le maillage complexe résultant de l'entrecroisement de toutes les chaînes alimentaires d'un même écosystème."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex8",
          "type": "mcq",
          "prompt": "Si un écosystème compte 10 000 producteurs, 1 000 herbivores et 100 rapaces, comment s'appelle le graphique représentant ces effectifs par étage ?",
          "options": [
            "La pyramide des nombres",
            "La pyramide des âges",
            "Le diagramme ombrothermique",
            "L'arbre phylogénétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pyramide des nombres représente le nombre total d'individus recensés à chaque niveau trophique d'un écosystème."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch6_p2_relations_intraspecifiques_vie_societe_animaux",
      "order": 2,
      "title": "Relations intraspécifiques, vie en société et communication animale",
      "summary": "Caractériser la vie en société chez les animaux (société non hiérarchisée des termites vs société hiérarchisée des babouins) et analyser les modes de communication.",
      "conceptExplanation": "1. Notions de relations intraspécifiques et de société animale :\n- Les relations intraspécifiques s'établissent entre individus de la MÊME espèce (compétition, coopération, reproduction, défense).\n- Une société animale est un regroupement durable et organisé d'individus d'une même espèce qui se reconnaissent mutuellement, coopèrent, se répartissent les tâches et communiquent pour assurer la survie du groupe.\n\n2. Exemple de société fermée non hiérarchisée : la termitière :\nChez les termites, la société est fondée sur un polyéthisme strict (division du travail liée à un polymorphisme anatomique) où le statut est fixé dès le développement larvaire par des phéromones :\n- Le couple royal (un roi et une reine obèse) : rôle exclusivement reproducteur (la reine pond des dizaines de milliers d'œufs par jour).\n- Les soldats (mâles et femelles stériles aptères, munis d'énormes mandibules broyeuses ou d'un rostre à substance gluante) : chargés de la garde et de la défense de la termitière contre les fourmis prédatrices.\n- Les ouvriers (aveugles et aptères) : bâtissent et réparent la termitière, creusent les galeries, recherchent la nourriture et nourrissent les larves et le couple royal par trophallaxie (échanges alimentaires de bouche à bouche).\nParticularité : aucun individu n'exerce d'autorité sur les autres. La coordination est collective et automatique via des phéromones. C'est une société non hiérarchisée.\n\n3. Exemple de société ouverte hiérarchisée : la troupe de babouins :\nChez les primates comme le babouin de savane, il existe un dimorphisme sexuel marqué (mâles plus corpulents dotés de puissantes canines) et une structure sociale hautement hiérarchisée :\n- La place de chaque individu n'est pas innée : elle est conquise et maintenue par des confrontations, des mimiques de menace ou des alliances.\n- Un mâle dominant (mâle alpha) dirige le groupe, a un accès prioritaire à la nourriture et aux femelles en œstrus.\n- Organisation spatiale lors des déplacements dans la savane :\n  * Les mâles subordonnés ouvrent la marche en éclaireurs et ferment le groupe à l'arrière.\n  * Les femelles, les nouveau-nés et les juvéniles marchent au centre, protégés.\n  * Les mâles dominants escortent les flancs.\n- En cas d'attaque par un léopard : les mâles dominants et subordonnés forment un front uni défensif courageux en première ligne, poussant des rugissements et découvrant leurs canines pendant que les mères et petits se réfugient dans les arbres.\n\n4. Les modes de communication intraspécifique :\nLa communication animale sert à la défense, à la recherche de nourriture et à la reproduction :\n- Signaux sonores : cris d'alarme, grognements d'intimidation, chants nuptiaux d'oiseaux.\n- Signaux visuels : postures de soumission ou de combat, claquement de paupières, érection du pelage, présentation des fesses chez les babouins.\n- Signaux chimiques (phéromones) : phéromones de piste pour baliser le chemin chez les fourmis, phéromones d'alarme chez les termites, phéromones sexuelles d'attraction.\n- Signaux tactiles : épouillage mutuel (toilettage social ou grooming chez les primates qui renforce les liens affectifs et la paix sociale), attouchements d'antennes.\n- Échanges nutritifs (trophallaxie).",
      "formulas": [
        {
          "name": "Types de sociétés animales",
          "formula": "Société des Termites (Castes fixées, division du travail, non hiérarchisée) vs Société des Babouins (Hiérarchie rigoureuse, chef alpha)",
          "note": "Deux modèles évolutifs majeurs d'organisation sociale intraspécifique."
        },
        {
          "name": "Canaux de communication intraspécifique",
          "formula": "Signaux Visuels + Sonores + Chimiques (Phéromones) + Tactiles (Toilettage)",
          "note": "Permettent la coordination des comportements collectifs."
        }
      ],
      "keyRule": "NE PAS CONFONDRE : Chez les termites, personne ne commande (pas de chef, statut biologique imposé dès la naissance = NON HIÉRARCHISÉE). Chez les babouins, il existe un chef (mâle alpha) et une hiérarchie stricte acquise par confrontation = SOCIÉTÉ HIÉRARCHISÉE.",
      "workedExample": {
        "title": "Exemple résolu : Organisation d'une troupe de babouins face à une menace",
        "statement": "Une troupe de 40 babouins se déplace dans une savane arbustive de Côte d'Ivoire. Soudain, un éclaireur repère une panthère à l'affût. Les mâles poussent des aboiements stridents, se placent en première ligne face au prédateur en montrant leurs canines, tandis que les femelles et jeunes grimpent précipitamment dans les acacias.\n1. Identifier les types de signaux de communication utilisés dans cette situation.\n2. Expliquer comment cette réaction collective illustre les avantages de la vie en société.",
        "methodSteps": [
          "Étape 1 : Identifier les canaux de communication :",
          "- Signaux sonores : aboiements stridents d'alerte prévenant l'ensemble de la troupe.",
          "- Signaux visuels : posture agressive, redressement du corps et découverte des canines pour intimider la panthère.",
          "Étape 2 : Analyser l'avantage adaptatif : un babouin isolé serait une proie facile pour la panthère. La vie en société permet une vigilance partagée (détection rapide du prédateur), une protection ciblée des individus vulnérables (femelles et petits) et une défense collective coordonnée où la masse des mâles adultes fait fuir le prédateur."
        ],
        "conclusion": "La vie en société et la communication efficace permettent aux babouins d'assurer la survie collective du groupe face aux grands prédateurs."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch6_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la caractéristique distinctive majeure de la société des termites comparée à celle des babouins ?",
          "options": [
            "C'est une société non hiérarchisée sans aucun chef où le rôle de chacun est fixé biologiquement dès la naissance",
            "C'est une société où le roi décide de toutes les actions quotidiennes",
            "C'est une société où chaque termite vit en solitaire la majorité du temps",
            "C'est une société où les ouvriers chassent les soldats"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la termitière, il n'existe aucun chef ni hiérarchie de pouvoir : la reine et le roi ne font que pondre, et les rôles (soldats, ouvriers) sont fixés dès le départ par des régulations phéromonales."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex2",
          "type": "mcq",
          "prompt": "Quel est le rôle biologique exclusif du couple royal (roi et reine) au sein d'une termitière ?",
          "options": [
            "Assurer la reproduction en produisant des œufs",
            "Bâtir les murs extérieurs en terre mâchée",
            "Défendre l'entrée contre les attaques de fourmis",
            "Rechercher le bois mort dans la forêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le roi et la reine ont pour unique fonction la reproduction de la colonie (la reine peut pondre plusieurs dizaines de milliers d'œufs par jour)."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex3",
          "type": "mcq",
          "prompt": "Comment se nomme le mode de transfert de nourriture prédigérée de bouche à bouche très fréquent chez les insectes sociaux comme les termites ?",
          "options": [
            "La trophallaxie",
            "La photosynthèse",
            "L'osmose",
            "La phagocytose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La trophallaxie est l'échange réciproque de nourriture liquide par régurgitation de bouche à bouche entre individus d'une même colonie."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex4",
          "type": "mcq",
          "prompt": "Lors des déplacements d'une troupe de babouins dans la savane, où sont placés les femelles et les petits ?",
          "options": [
            "Au centre de la formation, là où la protection est maximale",
            "En première ligne tout à l'avant pour servir d'appât",
            "Loin derrière la troupe à plusieurs kilomètres",
            "Sur les flancs extérieurs découverts"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la marche ordonnée des babouins, les mères et petits marchent au cœur du groupe au centre, protégés devant, derrière et sur les côtés par les mâles adultes."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les substances chimiques odorantes émises par un animal qui modifient le comportement de ses congénères ?",
          "options": [
            "Les phéromones",
            "Les anticorps",
            "Les vitamines",
            "Les enzymes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les phéromones sont des signaux chimiques volatils ou solubles servant de moyen de communication intraspécifique (alarme, attraction sexuelle, marquage de piste)."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex6",
          "type": "mcq",
          "prompt": "Chez les babouins et les chimpanzés, quel rôle majeur joue l'épouillage mutuel (toilettage social / grooming) au-delà de l'hygiène ?",
          "options": [
            "Renforcer les alliances sociales, apaiser les tensions et maintenir la cohésion du groupe",
            "Transmettre des bactéries pathogènes",
            "Désigner le membre qui sera exclu de la troupe",
            "Préparer les individus à hiberner"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'épouillage est un rituel social fondamental chez les primates qui procure du bien-être, désamorce l'agressivité et renforce les liens hiérarchiques et amicaux."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex7",
          "type": "mcq",
          "prompt": "Comment le statut de chef (mâle dominant alpha) est-il déterminé au sein d'une troupe de babouins ?",
          "options": [
            "Par des affrontements, des joutes de force et des coalitions d'alliances",
            "Par tirage au sort au lever du soleil",
            "Parce qu'il est né d'un œuf royal spécial",
            "Il est désigné par les prédateurs de la savane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La hiérarchie chez les babouins est dynamique et acquise : les mâles s'affrontent régulièrement par des démonstrations de force et de courage pour conquérir ou conserver le rang dominant."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex8",
          "type": "mcq",
          "prompt": "Les relations entre deux mâles babouins d'une même troupe qui se disputent une ressource sont qualifiées de :",
          "options": [
            "Relations intraspécifiques (entre membres de la même espèce)",
            "Relations interspécifiques",
            "Relations parasitaires",
            "Relations symbiotiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute interaction (coopération ou compétition) reliant des individus appartenant à une même espèce biologique est qualifiée de relation intraspécifique."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 7 : LE CHANGEMENT CLIMATIQUE
// ============================================================================
export const svt2deCChangementClimatiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch7_changement_climatique",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 7,
  "officialVolumeHours": 4,
  "title": "Leçon 7 — Le changement climatique",
  "summary": "Causes anthropiques de l'effet de serre additionnel (combustibles fossiles, déforestation, CFC, méthane), mécanismes du dérèglement climatique et de la destruction de l'ozone, conséquences écologiques et stratégies d'atténuation durables.",
  "points": [
    {
      "id": "seconde_c_svt_ch7_p1_causes_anthropiques_mecanisme_effet_de_serre",
      "order": 1,
      "title": "Causes anthropiques, gaz à effet de serre et mécanisme du réchauffement",
      "summary": "Distinguer l'effet de serre naturel indispensable à la vie du forçage radiatif d'origine humaine (CO2, CH4, N2O, CFC) et comprendre le rôle de la couche d'ozone.",
      "conceptExplanation": "1. L'effet de serre naturel : un équilibre thermique indispensable à la vie :\nLe rayonnement solaire traverse l'atmosphère terrestre. Une partie est réfléchie par les nuages et le sol (albédo), le reste réchauffe la surface de la Terre. La Terre réémet cette énergie sous forme de rayonnements infrarouges thermiques invisibles.\nCertains gaz atmosphériques naturels piègent ces infrarouges et en renvoient une grande partie vers le sol : c'est l'effet de serre naturel.\n- Sans cet effet de serre naturel, la température moyenne de la Terre serait de −20 °C (au lieu de +15 °C actuellement) et les océans seraient entièrement gelés, rendant la vie impossible.\n- Les principaux gaz responsables de l'effet de serre naturel sont la vapeur d'eau (H₂O), le dioxyde de carbone (CO₂) et l'ozone troposphérique.\n\n2. Les causes anthropiques de l'effet de serre additionnel (dérèglement climatique) :\nDepuis le début de l'ère industrielle (vers 1860-1870), les activités humaines rejettent des quantités gigantesques de gaz à effet de serre (GES) dans l'atmosphère :\n- La combustion des énergies fossiles (charbon, pétrole, gaz naturel) pour l'industrie, les transports et l'électricité : principale source d'émission de CO₂ (la teneur est passée de 280 ppm en 1860 à plus de 420 ppm aujourd'hui).\n- La déforestation massive (notamment en zone tropicale) : la destruction des forêts par abattage et feux de brousse libère du CO₂ et détruit les puits de carbone végétaux vitaux.\n- L'agriculture intensive et l'élevage : les rizières inondées et la fermentation entérique des ruminants dégagent d'énormes quantités de méthane (CH₄, à pouvoir réchauffant 28 fois supérieur au CO₂). L'épandage d'engrais azotés libère du protoxyde d'azote (N₂O).\n\n3. L'amincissement de la couche d'ozone stratosphérique :\nLa couche d'ozone (O₃), située dans la stratosphère entre 20 et 30 km d'altitude, absorbe les rayonnements ultraviolets solaires (UV) très dangereux (responsables de cancers cutanés et mutations génétiques). L'utilisation humaine massive des chlorofluorocarbures (CFC) dans les aérosols et fluides frigorigènes a libéré des atomes de chlore qui catalysent la destruction de l'ozone (créant le 'trou d'ozone'). Les CFC sont également de redoutables gaz à effet de serre.",
      "formulas": [
        {
          "name": "Bilan radiatif terrestre de l'effet de serre",
          "formula": "Énergie solaire absorbée = Rayonnement infrarouge émis - Infrarouge piégé par les GES",
          "note": "L'augmentation des GES retient davantage de chaleur vers le sol."
        },
        {
          "name": "Hausse historique de la concentration de CO₂",
          "formula": "280 ppm (Ère préindustrielle) → 350 ppm (1985) → > 420 ppm (Aujourd'hui)",
          "note": "Augmentation exponentielle corrélée à l'élévation de la température mondiale."
        }
      ],
      "keyRule": "L'EFFET DE SERRE EST NATUREL ET VITAL (sans lui, il ferait −20 °C sur Terre). Ce qui est dangereux et anormal, c'est l'EFFET DE SERRE ADDITIONNEL provoqué par l'Homme via la combustion du charbon/pétrole (CO₂), l'élevage/rizières (CH₄) et la déforestation.",
      "workedExample": {
        "title": "Exemple résolu : Analyse de l'évolution conjointe de la température et du CO₂ de 1860 à 2000",
        "statement": "On examine les enregistrements climatiques mondiaux entre 1860 et l'an 2000 :\n- En 1860 : concentration en CO₂ = 290 ppm ; anomalie de température = −0,4 °C.\n- En 1960 : concentration en CO₂ = 320 ppm ; anomalie de température = −0,1 °C.\n- En 2000 : concentration en CO₂ = 370 ppm ; anomalie de température = +0,2 °C.\n1. Calculer l'augmentation du taux de CO₂ entre 1860 et 1960 (en 100 ans), puis entre 1960 et 2000 (en 40 ans).\n2. Établir la corrélation avec l'évolution de la température mondiale.",
        "methodSteps": [
          "Étape 1 : Calculer l'augmentation de CO₂ de 1860 à 1960 : ΔC₁ = 320 − 290 = 30 ppm en 100 ans (soit 0,3 ppm/an).",
          "Étape 2 : Calculer l'augmentation de 1960 à 2000 : ΔC₂ = 370 − 320 = 50 ppm en seulement 40 ans (soit 1,25 ppm/an). L'accumulation s'accélère très fortement après 1960.",
          "Étape 3 : Analyser la température : la température augmente parallèlement de −0,4 °C à +0,2 °C, soit un réchauffement global net de +0,6 °C sur cette période.",
          "Étape 4 : Déduire la corrélation : la courbe de température épouse fidèlement la courbe de concentration en CO₂. La hausse exponentielle des émissions anthropiques de gaz à effet de serre est le moteur direct du réchauffement climatique contemporain."
        ],
        "conclusion": "Il existe une corrélation directe et prouvée entre l'envolée des concentrations de gaz à effet de serre et l'élévation de la température moyenne du globe."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch7_p1_ex1",
          "type": "mcq",
          "prompt": "Que serait la température moyenne à la surface de la Terre en l'absence totale d'effet de serre naturel ?",
          "options": [
            "Environ −20 °C (la Terre serait un désert de glace inhabitable)",
            "+15 °C",
            "+50 °C",
            "0 °C exactement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans l'effet de serre naturel assuré par la vapeur d'eau et le CO₂, la Terre renverrait toute sa chaleur vers l'espace et sa température moyenne chuterait à environ −20 °C."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex2",
          "type": "mcq",
          "prompt": "Quel type de rayonnement émis par la Terre réchauffée est piégé par les gaz à effet de serre ?",
          "options": [
            "Le rayonnement infrarouge thermique",
            "Le rayonnement ultraviolet",
            "Les rayons X cosmiques",
            "La lumière visible bleue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Terre absorbe l'énergie solaire et réémet de l'énergie sous forme de rayonnement infrarouge de grande longueur d'onde, qui est absorbé et renvoyé par les molécules de GES."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la principale source humaine d'émission de dioxyde de carbone (CO₂) dans le monde ?",
          "options": [
            "La combustion des énergies fossiles (charbon, pétrole, gaz naturel)",
            "La respiration des poissons dans les océans",
            "L'évaporation naturelle de l'eau des fleuves",
            "La décomposition des roches calcaires sous la pluie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'extraction et la combustion de combustibles fossiles pour l'industrie, la production d'électricité et les transports représentent plus de 70 % des rejets mondiaux de CO₂."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex4",
          "type": "mcq",
          "prompt": "Quel gaz à effet de serre très puissant est massivement libéré par les rizières inondées et l'élevage des ruminants ?",
          "options": [
            "Le méthane (CH₄)",
            "L'argon (Ar)",
            "Le dioxygène (O₂)",
            "Le diazote (N₂)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fermentation anaérobie de la matière organique dans les rizières et le tube digestif des bovins produit de grandes quantités de méthane (CH₄)."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex5",
          "type": "mcq",
          "prompt": "Pourquoi la déforestation accélère-t-elle le réchauffement climatique mondial ?",
          "options": [
            "Parce que les arbres absorbent le CO₂ par photosynthèse (puits de carbone) ; leur destruction libère ce carbone et supprime son absorption",
            "Parce que les arbres produisent de la poussière qui refroidit le sol",
            "Parce que les forêts attirent la pluie acide",
            "Parce que le bois coupé attire le rayonnement gamma"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les forêts sont des puits de carbone majeurs : en brûlant ou en pourrissant, les arbres abattus relâchent leur carbone sous forme de CO₂ et cessent d'en capturer par photosynthèse."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex6",
          "type": "mcq",
          "prompt": "Quel gaz synthétique utilisé autrefois dans les aérosols et réfrigérateurs détruit la couche d'ozone protectrice ?",
          "options": [
            "Les chlorofluorocarbures (CFC)",
            "Le dioxyde de silicium",
            "L'hélium",
            "L'acide chlorhydrique pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les CFC libèrent dans la stratosphère des atomes de chlore qui catalysent la destruction cyclique des molécules d'ozone (O₃)."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex7",
          "type": "mcq",
          "prompt": "Quel accord international majeur signé en 1987 a interdit l'utilisation des CFC pour protéger la couche d'ozone ?",
          "options": [
            "Le protocole de Montréal",
            "Le traité de Versailles",
            "La convention de Genève",
            "Le sommet de Yamoussoukro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le protocole de Montréal (1987) a organisé l'élimination progressive mondiale des substances qui appauvrissent la couche d'ozone, notamment les CFC."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex8",
          "type": "mcq",
          "prompt": "En Côte d'Ivoire, quelle ville littorale historique est particulièrement menacée de submersion marine par la montée des eaux liée au changement climatique ?",
          "options": [
            "Grand-Lahou",
            "Korhogo",
            "Man",
            "Ferkessédougou"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Grand-Lahou (et l'ancienne ville coloniale de Lahou Kpanda) subit une érosion côtière dramatique et des submersions marines accélérées par la montée du niveau de l'océan Atlantique."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch7_p2_consequences_solutions_lutte_changement_climatique",
      "order": 2,
      "title": "Conséquences environnementales et stratégies de lutte contre le réchauffement",
      "summary": "Analyser les impacts climatiques globaux et régionaux (sécheresses, fonte des glaces, montée des océans) et mettre en œuvre les solutions d'atténuation (énergies renouvelables, reboisement).",
      "conceptExplanation": "1. Les conséquences écologiques et sociétales du dérèglement climatique :\nL'augmentation de la température globale modifie profondément le fonctionnement de la biosphère et du climat :\n- Perturbation des cycles hydrologiques : baisse de la pluviométrie moyenne dans certaines régions d'Afrique de l'Ouest, sécheresses prolongées, baisse du niveau des fleuves et de l'accès à l'eau potable, désertification accélérée.\n- Multiplication des événements météorologiques extrêmes : canicules plus intenses, inondations soudaines, multiplication des cyclones tropicaux violents, méga-feux de forêt.\n- Fonte des glaces et élévation du niveau marin : fonte accélérée des glaciers continentaux et des calottes polaires (Groenland, Antarctique), combinée à la dilatation thermique des eaux des océans réchauffés. Cela entraîne une montée du niveau de la mer menaçant d'inondation permanente les deltas, îles et villes côtières (ex : littoral ivoirien de Grand-Lahou, Port-Bouët, San Pedro).\n- Menace sur la biodiversité et l'agriculture : modification des aires de répartition des espèces végétales et animales, chute des rendements agricoles vivriers provoquant des crises alimentaires et la famine, propagation de maladies vectorielles (paludisme, dengue).\n\n2. Les solutions et stratégies d'atténuation durable :\nPour freiner le changement climatique, l'humanité doit réduire drastiquement ses émissions de gaz à effet de serre et protéger les écosystèmes :\n- La révolution énergétique et sortie des énergies fossiles :\n  * Remplacer le charbon, le pétrole et le gaz par des énergies renouvelables et décarbonées : énergie solaire photovoltaïque (très prometteuse en Côte d'Ivoire), éolienne, hydroélectrique et biomasse durable.\n  * Promouvoir l'efficacité énergétique dans les transports (véhicules électriques, transports ferroviaires et collectifs urbains) et dans l'habitat.\n- La protection et la restauration des forêts (lutte contre la déforestation) :\n  * Mettre fin à l'exploitation forestière anarchique et aux feux de brousse agricoles non contrôlés.\n  * Engager des programmes massifs de reboisement et d'agroforesterie pour restaurer le couvert forestier et recréer des puits de carbone vivants.\n  * Créer et surveiller des réserves naturelles intégrales et des parcs nationaux (ex : parc national de Taï, parc national de la Comoé).\n- L'adoption de pratiques agricoles durables :\n  * Réduire l'usage excessif d'engrais chimiques azotés, développer l'irrigation économe en eau, promouvoir le compostage et le paillage organique.\n- La gouvernance environnementale et la sensibilisation citoyenne :\n  * Respect des accords climatiques internationaux (Accords de Paris, conventions climat).\n  * Éducation environnementale des populations dès le milieu scolaire pour préserver les ressources naturelles.",
      "formulas": [
        {
          "name": "Stratégies d'atténuation du changement climatique",
          "formula": "Transition énergétique (Énergies renouvelables) + Reboisement actif + Sobriété carbone = Climat stabilisé",
          "note": "Objectif mondial : limiter le réchauffement planétaire sous la barre des +1,5 °C à +2 °C."
        },
        {
          "name": "Bilan des puits de carbone forestiers",
          "formula": "Forêt vivante = Stockage massif de CO₂ par photosynthèse | Forêt brûlée = Émission massive de CO₂",
          "note": "La forêt ivoirienne est un régulateur thermique et pluviométrique vital."
        }
      ],
      "keyRule": "LES SOLUTIONS CLÉS SE DIVISENT EN DEUX VOLETS : 1. RÉDUIRE LES ÉMISSIONS DE GES (remplacer les fossiles par solaire/éolien, transports propres) et 2. AUGMENTER LE STOCKAGE DE CARBONE (reboisement massif, arrêt des feux de brousse, protection des sols).",
      "workedExample": {
        "title": "Exemple résolu : Élaboration d'un plan d'action communal de lutte contre la déforestation",
        "statement": "En Côte d'Ivoire, la couverture forestière est passée de 16 millions d'hectares au début du XXe siècle à moins de 3 millions d'hectares aujourd'hui. Une commune rurale près de Sassandra décide d'agir.\n1. Identifier les conséquences directes de cette disparition forestière sur le microclimat local.\n2. Proposer trois mesures concrètes et immédiatement applicables par la communauté villageoise pour inverser la tendance.",
        "methodSteps": [
          "Étape 1 : Identifier les conséquences microclimatiques : la disparition des arbres entraîne une baisse de l'évapotranspiration locale (chute des pluies régionales), une érosion accrue des sols arables lessivés par les averses torrentielles, et une hausse de la température au sol.",
          "Étape 2 : Formuler 3 mesures concrètes :",
          "- Mesure 1 : Lancer une campagne communautaire de reboisement participatif en replantant des essences forestières locales et des arbres d'ombrage dans les cacaoyères (agroforesterie).",
          "- Mesure 2 : Interdire rigoureusement les feux de brousse de défrichement et les remplacer par le compostage des résidus végétaux.",
          "- Mesure 3 : Diffuser l'utilisation de foyers de cuisson améliorés à haut rendement énergétique afin de réduire de 70 % la consommation de bois de chauffe et de charbon."
        ],
        "conclusion": "Ce plan d'action allie reboisement, agroforesterie et économie de bois pour restaurer durablement l'équilibre climatique local."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch7_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle énergie propre et inépuisable offre un potentiel exceptionnel de développement en Afrique et en Côte d'Ivoire pour remplacer les énergies fossiles ?",
          "options": [
            "L'énergie solaire photovoltaïque",
            "Le charbon de terre extrait du sous-sol",
            "Le fioul lourd des raffineries",
            "Le gaz de schiste importé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie solaire bénéficie d'un ensoleillement permanent et puissant sous les tropiques, constituant l'alternative décarbonée idéale aux énergies fossiles."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle action sylvicole permet de reconstituer les massifs forestiers détruits et de piéger activement le dioxyde de carbone atmosphérique ?",
          "options": [
            "Le reboisement",
            "L'incinération des sous-bois",
            "L'abattage des grands arbres centenaires",
            "Le terrassement minier à ciel ouvert"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le reboisement consiste à planter de nouveaux arbres dont la croissance capture activement le CO₂ de l'air par photosynthèse pour le fixer sous forme de bois."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex3",
          "type": "mcq",
          "prompt": "Parmi les conséquences suivantes, laquelle est un impact direct du réchauffement climatique sur les régions côtières mondiales ?",
          "options": [
            "L'élévation du niveau de la mer et l'inondation progressive des rivages",
            "La baisse générale du niveau de tous les océans",
            "La disparition totale de l'eau de mer",
            "La formation d'une banquise permanente sous les tropiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonte des glaciers terrestres et la dilatation thermique de l'eau chauffée élèvent le niveau des mers, provoquant l'érosion et la submersion des côtes."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex4",
          "type": "mcq",
          "prompt": "Quelle pratique agricole traditionnelle très destructive pour la forêt ivoirienne doit être formellement abandonnée dans la lutte pour le climat ?",
          "options": [
            "La pratique incontrôlée des feux de brousse",
            "L'arrosage au goutte-à-goutte",
            "Le paillage végétal des sols",
            "L'utilisation du compost organique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les feux de brousse incontrôlés détruisent des milliers d'hectares de végétation chaque saison sèche et libèrent de gigantesques volumes de CO₂ et de fumées toxiques."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex5",
          "type": "mcq",
          "prompt": "Quel secteur des activités humaines doit être repensé pour développer les transports en commun électriques et réduire les émissions de GES ?",
          "options": [
            "Le secteur des transports urbains et interurbains",
            "Le secteur de la poterie artisanale",
            "Le secteur de la pêche en pirogue à pagaie",
            "Le secteur de la vannerie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les transports routiers fonctionnant aux carburants pétroliers sont une source majeure de GES : leur électrification et le train réduisent considérablement les émissions."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex6",
          "type": "mcq",
          "prompt": "Que préconise l'organisation écologiste Greenpeace pour réduire les émissions mondiales de gaz à effet de serre d'ici 2050 ?",
          "options": [
            "Une révolution énergétique basée sur l'efficacité et l'utilisation massive des énergies renouvelables",
            "L'ouverture de nouvelles mines de charbon géantes",
            "L'arrêt complet de toute agriculture vivrière",
            "L'extinction des centrales solaires existantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Greenpeace plaide pour une transition rapide vers 100 % d'énergies renouvelables (solaire, éolien, hydraulique) et l'arrêt des combustibles fossiles."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex7",
          "type": "mcq",
          "prompt": "Quelle est l'attitude citoyenne recommandée au quotidien pour limiter son empreinte carbone individuelle ?",
          "options": [
            "Éviter le gaspillage d'électricité, privilégier la marche ou les transports collectifs et planter des arbres",
            "Laisser les climatiseurs allumés fenêtres ouvertes",
            "Brûler ses déchets plastiques dans son jardin",
            "Utiliser systématiquement une voiture individuelle pour de très courts trajets"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sobriété énergétique (éteindre les appareils inutiles, transports doux, gestion propre des déchets et reboisement) réduit efficacement l'empreinte carbone personnelle."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex8",
          "type": "mcq",
          "prompt": "Pourquoi la préservation des parcs nationaux ivoiriens (comme le parc national de Taï) est-elle stratégique pour le climat mondial ?",
          "options": [
            "Parce qu'ils constituent d'immenses réservoirs de biodiversité et de formidables puits de carbone forestiers primaires intacts",
            "Parce qu'ils abritent des raffineries de pétrole",
            "Parce qu'ils bloquent les tsunamis en haute montagne",
            "Parce qu'ils absorbent tous les déchets plastiques du pays"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le parc national de Taï est l'un des derniers grands blocs de forêt primaire dense humide d'Afrique de l'Ouest : il séquestre des millions de tonnes de carbone."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 8 : L'ORGANISATION D'UNE CELLULE
// ============================================================================
export const svt2deCOrganisationCelluleChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch8_organisation_cellule",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 8,
  "officialVolumeHours": 2,
  "title": "Leçon 8 — L'organisation d'une cellule",
  "summary": "Ultrastructure comparée de la cellule animale et de la cellule végétale au microscope électronique (organites communs, centrosome, paroi pectocellulosique, chloroplastes, vacuoles) et équipement chromosomique (caryotype, autosomes, gonosomes, diploïdie et haploïdie chez diverses espèces).",
  "points": [
    {
      "id": "seconde_c_svt_ch8_p1_ultrastructure_cellule_animale_vegetale",
      "order": 1,
      "title": "Ultrastructure comparée de la cellule animale et végétale au microscope électronique",
      "summary": "Identifier et différencier les organites cellulaires communs et spécifiques aux cellules animales et végétales, et relier chaque organite à sa fonction vitale.",
      "conceptExplanation": "1. La cellule, unité structurale et fonctionnelle du vivant :\nTout être vivant, qu'il soit animal ou végétal, est constitué d'une ou plusieurs cellules. Au microscope électronique à transmission (MET), l'observation révèle une organisation interne complexe appelée ultrastructure cellulaire.\n\n2. Les constituants communs aux cellules animales et végétales :\n- La membrane plasmique : fine enveloppe lipoprotéique qui délimite la cellule, régule les échanges sélectifs entre le milieu intracellulaire et extracellulaire.\n- Le cytoplasme (ou cytosol / hyaloplasme) : milieu gélatineux contenant de l'eau, des enzymes, des nutriments et dans lequel baignent les organites.\n- Le noyau : centre de contrôle de la cellule délimité par une enveloppe nucléaire percée de pores nucléaires. Il renferme le nucléoplasme, la chromatine (forme décondensée des chromosomes portant l'information génétique) et le nucléole (siège de la synthèse des ribosomes).\n- Le réticulum endoplasmique (RE) : réseau de cavités membraneuses communicantes :\n  * Réticulum endoplasmique granuleux (REG ou ergastoplasme) : tapissé de ribosomes, spécialisé dans la synthèse et le transport des protéines.\n  * Réticulum endoplasmique lisse (REL) : dépourvu de ribosomes, impliqué dans la synthèse des lipides (stérols, phospholipides) et la détoxification.\n- Les ribosomes : granules ribonucléoprotéiques libres ou fixés au REG, assurant la traduction des protéines.\n- L'appareil de Golgi : ensemble de dictyosomes (empilements de saccules aplatis) et de vésicules de sécrétion assurant la maturation, l'emballage et l'expédition des molécules synthétisées.\n- Les mitochondries : organites à double membrane (membrane interne formant des crêtes) possédant leur propre ADN ; elles sont le siège de la respiration cellulaire et produisent l'énergie vitale sous forme d'ATP.\n- Les lysosomes et inclusions cytoplasmiques : petites vésicules contenant des enzymes hydrolytiques pour la digestion cellulaire ou des réserves nutritives (gouttelettes lipidiques, glycogène).\n\n3. Les constituants spécifiques de chaque type cellulaire :\nA. Spécificités de la cellule animale :\n- Le centrosome (ou centre cellulaire) : constitué d'une paire de centrioles cylindriques perpendiculaires entourés d'un matériel péricentriolaire ; il organise les microtubules, forme les asters lors de la mitose, ainsi que les cils et flagelles.\n- Les vacuoles sont très petites, transitoires ou absentes.\n\nB. Spécificités de la cellule végétale :\n- La membrane (ou paroi) pectocellulosique / squelettique : enveloppe externe rigide, épaisse, formée de cellulose et de pectine, qui confère une forme géométrique polygonale et une grande résistance mécanique à la cellule végétale.\n- Les chloroplastes : organites à double membrane contenant des thylakoïdes riches en chlorophylle ; ils sont le siège de la photosynthèse permettant aux végétaux d'être autotrophes au carbone.\n- Une grande vacuole centrale : occupant jusqu'à 80-90 % du volume cellulaire, remplie de suc vacuolaire (eau, sels minéraux, pigments anthocyaniques) ; elle assure la turgescence et le maintien de la rigidité des tissus végétaux.",
      "formulas": [
        {
          "name": "Bilan de la photosynthèse (chloroplastes)",
          "formula": "6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ (glucose) + 6 O₂",
          "note": "Exclusif aux cellules végétales autotrophes."
        },
        {
          "name": "Bilan de la respiration cellulaire (mitochondries)",
          "formula": "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 36 à 38 ATP",
          "note": "Commun aux cellules animales et végétales hétérotrophes/autotrophes."
        }
      ],
      "keyRule": "TROIS STRUCTURES SIGNENT LA CELLULE VÉGÉTALE : la paroi pectocellulosique rigide externe, les chloroplastes chlorophylliens et la grande vacuole centrale d'eau. La cellule animale se caractérise quant à elle par la présence du centrosome (centrioles) et l'absence de paroi rigide (forme souple et variable).",
      "workedExample": {
        "title": "Exemple résolu : Identification et comparaison ultrastructurale de deux cellules inconnues",
        "statement": "Un élève de 2nde C observe au MET deux cellules A et B :\n- Cellule A : délimitée par une membrane plasmique souple, contient un noyau, des mitochondries nombreuses, un appareil de Golgi et une paire de centrioles perpendiculaires formant un centrosome.\n- Cellule B : entourée d'une paroi pectocellulosique épaisse externe, contient une volumineuse vacuole centrale repoussant le noyau en périphérie et des organites discoïdes à disques thylakoïdes verts.\n1. Identifier la nature animale ou végétale de chaque cellule.\n2. Citer les organites communs observés ou déduits.\n3. Indiquer les rôles respectifs des mitochondries et des chloroplastes.",
        "methodSteps": [
          "Étape 1 : Diagnostic de la cellule A :\nLa présence d'un centrosome (centrioles) et l'absence de paroi rigide externe et de chloroplastes indiquent sans équivoque qu'il s'agit d'une cellule animale.",
          "Étape 2 : Diagnostic de la cellule B :\nLa présence d'une paroi pectocellulosique squelettique, d'une grande vacuole centrale développée et de chloroplastes photosynthétiques atteste qu'il s'agit d'une cellule végétale chlorophyllienne.",
          "Étape 3 : Organites communs :\nLes deux cellules partagent la membrane plasmique, le hyaloplasme (cytoplasme), le noyau (avec membrane percée de pores, nucléole, chromatine), le réticulum endoplasmique, l'appareil de Golgi et les mitochondries.",
          "Étape 4 : Fonctions énergétiques comparées :\n- Les mitochondries dégradent la matière organique en présence d'oxygène pour produire de l'ATP (respiration cellulaire).\n- Les chloroplastes captent l'énergie lumineuse grâce à la chlorophylle pour synthétiser du glucose et de l'amidon à partir de CO₂ et d'H₂O (photosynthèse)."
        ],
        "conclusion": "La cellule A est animale (caractérisée par le centrosome) et la cellule B est végétale (caractérisée par la paroi cellulosique, les chloroplastes et la grande vacuole centrale)."
      },
      "exercises": [
        {
          "id": "svt_2c_c8_p1_q1",
          "prompt": "Quel organite cellulaire est le siège exclusif de la photosynthèse chez les végétaux ?",
          "options": [
            "Le chloroplaste",
            "La mitochondrie",
            "Le centrosome",
            "L'appareil de Golgi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les chloroplastes renferment la chlorophylle et sont les seuls organites où se déroule la photosynthèse chez les cellules végétales autotrophes.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q2",
          "prompt": "Quel constituant cellulaire est présent spécifiquement chez la cellule animale et absent chez la cellule végétale supérieure ?",
          "options": [
            "Le centrosome (composé de centrioles)",
            "L'appareil de Golgi",
            "Le réticulum endoplasmique lisse",
            "L'enveloppe nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centrosome (formé de deux centrioles perpendiculaires) est spécifique des cellules animales et intervient dans la formation des asters et du fuseau mitotique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q3",
          "prompt": "Quelle est la fonction biologique principale des mitochondries présentes dans les cellules eucaryotes ?",
          "options": [
            "La production d'énergie cellulaire sous forme d'ATP par respiration cellulaire",
            "La synthèse des glucides par fixation du dioxyde de carbone",
            "Le stockage exclusif des ions calcium dans le cytoplasme",
            "La fabrication des pigments anthocyaniques de la vacuole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mitochondries sont les centrales énergétiques de la cellule : elles réalisent la respiration cellulaire en oxydant les nutriments pour produire de l'ATP.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q4",
          "prompt": "Comment appelle-t-on le réticulum endoplasmique lorsqu'il est tapissé de ribosomes à sa surface externe ?",
          "options": [
            "Le réticulum endoplasmique granuleux (REG) ou ergastoplasme",
            "Le réticulum endoplasmique lisse (REL)",
            "Le dictyosome de l'appareil de Golgi",
            "Le centrosome péricentriolaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ergastoplasme ou REG (réticulum endoplasmique granuleux) porte des ribosomes sur sa face cytosolique, lui conférant un aspect granuleux dédié à la synthèse des protéines.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q5",
          "prompt": "Quel rôle assure la paroi pectocellulosique (ou squelettique) de la cellule végétale ?",
          "options": [
            "Elle confère rigidité mécanique, forme géométrique définie et protection contre l'éclatement osmotique",
            "Elle absorbe directement les photons lumineux pour produire de l'oxygène",
            "Elle stocke la totalité de l'information génétique cellulaire",
            "Elle remplace la membrane plasmique qui est absente chez les végétaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paroi pectocellulosique rigide externe protège la cellule végétale, maintient sa forme polyédrique et empêche son éclatement lorsque la vacuole est en turgescence.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q6",
          "prompt": "Par où s'effectuent les échanges de macromolécules (comme les ARNm) entre le nucléoplasme et le cytoplasme ?",
          "options": [
            "Par les pores nucléaires situés sur l'enveloppe nucléaire",
            "Par les crêtes mitochondriales",
            "Par les thylakoïdes des chloroplastes",
            "Par invagination directe des centrioles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'enveloppe nucléaire est une double membrane percée d'orifices protéiques appelés pores nucléaires qui régulent les flux entre noyau et cytoplasme.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q7",
          "prompt": "Quel groupe d'organites constitue l'appareil de Golgi ?",
          "options": [
            "Des empilements de saccules aplatis discoïdes appelés dictyosomes associés à des vésicules de sécrétion",
            "Une matrice liquide homogène sans membrane bordante",
            "Un réseau filamenteux d'actine et de myosine",
            "Des cylindres protéiques formés de 9 triplets de microtubules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'appareil de Golgi est formé d'un ou plusieurs dictyosomes (saccules membranaires superposés) bourgeonnant des vésicules de transport et de sécrétion.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q8",
          "prompt": "La grande vacuole centrale de la cellule végétale a pour rôle primordial de :",
          "options": [
            "Accumuler l'eau et les solutés pour maintenir la pression de turgescence et la rigidité cellulaire",
            "Synthétiser les acides nucléiques de l'ADN génomique",
            "Assurer la respiration anaérobie stricte en l'absence de mitochondries",
            "Produire la paire de centrioles lors de la division cellulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La turgescence vacuolaire exerce une pression hydrostatique interne contre la paroi cellulosique, permettant le port dressé des tiges et feuilles des plantes herbacées.",
          "type": "mcq"
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch8_p2_equipement_chromosomique_caryotype",
      "order": 2,
      "title": "Équipement chromosomique, caryotype et garniture des espèces",
      "summary": "Analyser un caryotype humain ou animal, distinguer autosomes et gonosomes, définir la diploïdie et l'haploïdie, et comparer les formules chromosomiques.",
      "conceptExplanation": "1. Définition et principe du caryotype :\nLe caryotype (ou équipement chromosomique) est la photographie ou la représentation ordonnée de l'ensemble des chromosomes d'une cellule, bloqués en métaphase (stade où ils sont le plus condensés et visibles), puis découpés et classés par paires homologues par ordre de taille et de forme décroissantes (selon la position du centromère : métacentrique, submétacentrique, acrocentrique).\n\n2. Organisation chromosomique chez l'espèce humaine :\n- Les cellules somatiques humaines (toutes les cellules du corps sauf les gamètes) renferment 46 chromosomes répartis en 23 paires d'homologues :\n  * 22 paires de chromosomes identiques chez les deux sexes, appelés autosomes (ou chromosomes non sexuels).\n  * 1 paire de chromosomes sexuels appelés gonosomes, hétérochromosomes ou hétérosomes, responsables de la détermination génétique du sexe de l'individu :\n    - Chez la femme : deux chromosomes sexuels identiques et de grande taille, notés XX. La formule chromosomique s'écrit : 2n = 44 autosomes + XX (ou 2n = 46, XX).\n    - Chez l'homme : deux chromosomes sexuels dissemblables (un grand X et un petit Y), notés XY. La formule chromosomique s'écrit : 2n = 44 autosomes + XY (ou 2n = 46, XY).\n\n3. Diploïdie versus Haploïdie :\n- Cellule diploïde (notée 2n) : cellule dont chaque type de chromosome est présent en deux exemplaires (une paire de chromosomes homologues : l'un d'origine paternelle, l'autre d'origine maternelle). Chez l'Homme, 2n = 46.\n- Cellule haploïde (notée n) : cellule ne contenant qu'un seul exemplaire de chaque paire de chromosomes. Ce sont exclusivement les cellules sexuelles ou gamètes (spermatozoïdes et ovules) issues de la méiose. Chez l'Homme, n = 23 (soit 22 autosomes + X dans l'ovule ; 22 autosomes + X OU 22 autosomes + Y dans le spermatozoïde).\n\n4. Spécificité de l'équipement chromosomique selon les espèces :\nLe nombre de chromosomes est une constante caractéristique et fixe pour chaque espèce vivante :\n- Espèces animales :\n  * Homme : 2n = 46 chromosomes (23 paires)\n  * Gorille / Chimpanzé : 2n = 48 chromosomes (24 paires)\n  * Chien : 2n = 78 chromosomes (39 paires)\n  * Vache : 2n = 60 chromosomes (30 paires)\n  * Drosophile (mouche du vinaigre) : 2n = 8 chromosomes (4 paires)\n- Espèces végétales :\n  * Oignon : 2n = 16 chromosomes (8 paires)\n  * Maïs : 2n = 20 chromosomes (10 paires)\n  * Riz : 2n = 24 chromosomes (12 paires)\n  * Pomme de terre : 2n = 48 chromosomes (24 paires)\nRemarque importante : le nombre de chromosomes ne reflète ni la complexité de l'organisme, ni sa taille, mais constitue sa carte génétique spécifique.",
      "formulas": [
        {
          "name": "Formule chromosomique humaine femelle (diploïde)",
          "formula": "2n = 44 autosomes + XX = 46 chromosomes",
          "note": "23 paires d'homologues parfaits."
        },
        {
          "name": "Formule chromosomique humaine mâle (diploïde)",
          "formula": "2n = 44 autosomes + XY = 46 chromosomes",
          "note": "22 paires d'autosomes + 1 paire hétéromorphe XY."
        },
        {
          "name": "Formule des gamètes humains (haploïdes)",
          "formula": "n = 22 autosomes + X (ovocyte) ou n = 22 autosomes + X / Y (spermatozoïde)",
          "note": "Moitié exacte du patrimoine chromosomique somatique."
        }
      ],
      "keyRule": "UNE CELLULE DIPLOÏDE POSSÈDE 2n CHROMOSOMES GROUPÉS PAR PAIRES HOMOLOGUES (cellules somatiques). Une cellule haploïde possède n chromosomes isolés (gamètes). Le caryotype humain comporte 46 chromosomes : 44 autosomes + XX chez la femme, et 44 autosomes + XY chez l'homme.",
      "workedExample": {
        "title": "Exemple résolu : Détermination du sexe et de la formule chromosomique à partir d'un caryotype",
        "statement": "Le caryotype d'un nouveau-né montre 23 paires de chromosomes distincts. Les 22 premières paires sont formées de chromosomes homologues de taille décroissante. La 23e paire est composée d'un grand chromosome métacentrique et d'un petit chromosome acrocentrique très court.\n1. Déterminer si ce caryotype est celui d'une cellule diploïde ou haploïde.\n2. Identifier la nature de la 23e paire et déduire le sexe de l'enfant.\n3. Écrire la formule chromosomique complète de cet individu.\n4. Préciser le nombre de chromosomes que contiendront ses futurs gamètes.",
        "methodSteps": [
          "Étape 1 : Diploïdie ou haploïdie :\nLes chromosomes sont regroupés deux par deux en paires homologues : la cellule est donc diploïde (2n).",
          "Étape 2 : Analyse de la 23e paire :\nLa 23e paire est formée de deux chromosomes de morphologie différente : un grand X et un petit Y. Il s'agit des gonosomes XY. L'individu est donc de sexe masculin.",
          "Étape 3 : Formule chromosomique :\nOn compte 44 autosomes (22 paires) et 2 gonosomes XY, soit 2n = 44A + XY = 46 chromosomes.",
          "Étape 4 : Équipement des futurs gamètes :\nLes gamètes (spermatozoïdes) seront haploïdes et contiendront n = 23 chromosomes (soit 22A + X, soit 22A + Y après méiose)."
        ],
        "conclusion": "Il s'agit d'un enfant de sexe masculin de caryotype normal 2n = 44A + XY (46 chromosomes)."
      },
      "exercises": [
        {
          "id": "svt_2c_c8_p2_q1",
          "prompt": "Combien de chromosomes possède une cellule somatique humaine normale ?",
          "options": [
            "46 chromosomes (23 paires)",
            "23 chromosomes simples",
            "48 chromosomes (24 paires)",
            "44 chromosomes au total"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules somatiques de l'Homme sont diploïdes avec 2n = 46 chromosomes, soit 23 paires.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q2",
          "prompt": "Quelle est la formule chromosomique d'une femme normale ?",
          "options": [
            "2n = 44 autosomes + XX",
            "2n = 44 autosomes + XY",
            "n = 22 autosomes + XX",
            "2n = 46 autosomes + XX"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une femme possède 22 paires d'autosomes (44 autosomes) et une paire de gonosomes identiques XX, soit 2n = 44A + XX = 46.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q3",
          "prompt": "Comment appelle-t-on les chromosomes qui ne participent pas à la détermination du sexe ?",
          "options": [
            "Les autosomes (ou chromosomes non sexuels)",
            "Les gonosomes (ou hétérosomes)",
            "Les centrioles",
            "Les nucléofilaments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autosomes désignent tous les chromosomes non sexuels (les 22 premières paires chez l'humain).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q4",
          "prompt": "Qu'est-ce qu'une cellule haploïde (notée n) ?",
          "options": [
            "Une cellule ne contenant qu'un seul exemplaire de chaque paire de chromosomes",
            "Une cellule contenant les chromosomes associés deux à deux par paires",
            "Une cellule végétale dénuée de noyau délimité",
            "Une cellule sanguine anucléée comme l'hématie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une cellule haploïde (comme un spermatozoïde ou un ovule) ne possède qu'un seul exemplaire de chaque chromosome, soit n chromosomes.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q5",
          "prompt": "À quel stade de la mitose réalise-t-on le caryotype et pourquoi ?",
          "options": [
            "En métaphase, car les chromosomes présentent leur condensation maximale et sont parfaitement individualisés",
            "En interphase, car l'ADN est totalement décondensé sous forme de chromatine diffuse",
            "En télophase, car la membrane nucléaire vient juste de réapparaître",
            "Au début de la prophase, car les centrioles ne sont pas encore séparés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est en métaphase que les chromosomes sont les plus courts, les plus condensés et les plus distinctement visibles au microscope optique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q6",
          "prompt": "Combien de chromosomes possède la drosophile (mouche du vinaigre) dans ses cellules somatiques diploïdes ?",
          "options": [
            "2n = 8 chromosomes (4 paires)",
            "2n = 16 chromosomes (8 paires)",
            "2n = 46 chromosomes (23 paires)",
            "2n = 4 chromosomes (2 paires)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La drosophile possède un caryotype simple bien connu en génétique avec 2n = 8 chromosomes (3 paires d'autosomes et 1 paire de gonosomes).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q7",
          "prompt": "Dans l'espèce humaine, lequel des deux gamètes détermine le sexe génétique de l'enfant à la fécondation ?",
          "options": [
            "Le spermatozoïde, car il peut apporter soit un chromosome X (donnant une fille XX), soit un chromosome Y (donnant un garçon XY)",
            "L'ovule, car il peut contenir indifféremment un chromosome X ou un chromosome Y",
            "Les deux gamètes à part égale car ils possèdent chacun un chromosome Y",
            "Aucun des deux, le sexe dépend uniquement de la température utérine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ovule apporte toujours un chromosome X. C'est le spermatozoïde fécondant qui détermine le sexe génétique : s'il apporte X, l'œuf est XX (femelle) ; s'il apporte Y, l'œuf est XY (mâle).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q8",
          "prompt": "Chez le riz (Oryza sativa), une cellule de racine possède 2n = 24 chromosomes. Combien de chromosomes contient un grain de pollen (gamétophyte mâle haploïde) de cette même plante ?",
          "options": [
            "n = 12 chromosomes",
            "n = 24 chromosomes",
            "2n = 48 chromosomes",
            "n = 6 chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules somatiques racinaires sont diploïdes (2n = 24). Les grains de pollen contiennent des cellules haploïdes possédant la moitié des chromosomes, soit n = 24 / 2 = 12.",
          "type": "mcq"
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 9 : LA DIVISION CELLULAIRE (MITOSE)
// ============================================================================
export const svt2deCDivisionCellulaireMitoseChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch9_division_cellulaire_mitose",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 9,
  "officialVolumeHours": 4,
  "title": "Leçon 9 — La division cellulaire",
  "summary": "Description chronologique détaillée des 4 étapes de la mitose (Prophase, Métaphase, Anaphase, Télophase), mécanisme de cytodiérèse (étranglement chez l'animal vs paroi chez le végétal) et importance biologique (croissance, renouvellement cellulaire, conservation du caryotype).",
  "points": [
    {
      "id": "seconde_c_svt_ch9_p1_etapes_mitose_cytodierese",
      "order": 1,
      "title": "Les étapes chronologiques de la mitose et la cytodiérèse",
      "summary": "Décrire les modifications cytologiques et chromosomiques au cours de la prophase, métaphase, anaphase et télophase, et comparer la division cytoplasmique animale et végétale.",
      "conceptExplanation": "1. Définition de la mitose :\nLa mitose est un mode de division cellulaire par lequel une cellule mère donne naissance à deux cellules filles strictement identiques entre elles et identiques à la cellule mère, conservant intégralement le nombre et la structure des chromosomes (2n → 2n).\n\n2. Déroulement chronologique des 4 phases de la mitose :\n\nA. La Prophase (phase la plus longue) :\n- Le noyau cellulaire gonfle.\n- La chromatine se condense progressivement par spiralisation et enroulement serré pour former des chromosomes individualisés visibles au microscope optique. Chaque chromosome apparaît constitué de deux chromatides sœurs réunies au niveau du centromère.\n- Le centrosome se divise en deux centrosomes fils qui migrent chacun vers un pôle opposé de la cellule, entourés de microtubules rayonnants appelés asters (chez la cellule animale). Chez la cellule végétale (dépourvue de centrioles), le fuseau s'organise à partir de calottes polaires.\n- Entre les deux pôles s'édifie le fuseau achromatique (fuseau de division composé de microtubules).\n- À la fin de la prophase, l'enveloppe nucléaire se fragmente et disparaît, et les nucléoles s'estompent.\n\nB. La Métaphase (phase courte et d'alignement) :\n- Les chromosomes atteignent leur niveau maximal de condensation.\n- Les microtubules kinétochoriens du fuseau s'attachent aux centromères des chromosomes.\n- Sous l'action des forces mécaniques du fuseau, tous les centromères s'alignent dans le plan équatorial médian de la cellule, formant la plaque équatoriale.\n\nC. L'Anaphase (phase brève de séparation polaire) :\n- Le centromère de chaque chromosome se clive longitudinalement en deux.\n- Les deux chromatides sœurs de chaque chromosome se séparent et deviennent deux chromosomes simples indépendants (à 1 seule chromatide).\n- Grâce au raccourcissement des microtubules kinétochoriens, deux lots quantitativement et qualitativement identiques de chromosomes simples migrent en sens opposé vers les deux pôles de la cellule : c'est l'ascension polaire.\n\nD. La Télophase (phase finale de reconstruction) :\n- Les deux lots de chromosomes simples atteignent les pôles respectifs.\n- Les chromosomes perdent leur individualité en se décondensant (déspiralisation) pour redevenir un réseau diffus de chromatine.\n- Le fuseau achromatique se désagrège et disparaît.\n- Une nouvelle enveloppe nucléaire se reconstitue autour de chaque lot de chromatine, et les nucléoles réapparaissent. La caryodiérèse (division du noyau) est achevée : la cellule possède temporairement 2 noyaux fils.\n\n3. La Cytodiérèse (division du cytoplasme) :\n- Chez la cellule animale : séparation par étranglement circulaire équatorial (sillon de clivage) resserré par un anneau contractile d'actine et de myosine, qui pince la cellule jusqu'à scission complète.\n- Chez la cellule végétale : en raison de la rigidité de la paroi externe, il ne peut y avoir d'étranglement. Des vésicules golgiennes fusionnent au centre pour former un phragmoplaste qui s'étend de façon centrifuge du centre vers la périphérie, édifiant une nouvelle paroi pectocellulosique séparant les deux cellules filles.",
      "formulas": [
        {
          "name": "Bilan chromosomique de la mitose",
          "formula": "1 cellule mère (2n chromosomes à 2 chromatides) → 2 cellules filles (2n chromosomes à 1 chromatide)",
          "note": "Reproduction strictement conforme du patrimoine génétique."
        },
        {
          "name": "Ordre chronologique mnémotechnique des phases",
          "formula": "P - M - A - T : Prophase → Métaphase → Anaphase → Télophase",
          "note": "Suivie immédiatement par la cytodiérèse (scission cytoplasmique)."
        }
      ],
      "keyRule": "L'ANAPHASE EST L'ÉTAPE CLÉ DE SÉPARATION : le clivage des centromères transforme chaque chromosome double à 2 chromatides en 2 chromosomes simples à 1 chromatide, permettant la migration polaire de deux lots rigoureusement identiques. La cytodiérèse s'effectue par étranglement chez l'animal et par édification d'une nouvelle paroi chez le végétal.",
      "workedExample": {
        "title": "Exemple résolu : Identification et ordonnancement d'étapes de la mitose chez l'oignon",
        "statement": "Dans une racine d'oignon (Allium cepa, 2n = 16), on observe 4 cellules au microscope :\n- Cellule 1 : les centromères sont tous disposés dans le plan central de la cellule.\n- Cellule 2 : deux lots de 16 filaments simples s'écartent vers les deux pôles cellulaires opposés.\n- Cellule 3 : l'enveloppe nucléaire a disparu, les chromosomes doubles courts deviennent très distincts.\n- Cellule 4 : deux noyaux se reforment, séparés au milieu par une ébauche de paroi pectocellulosique.\n1. Identifier la phase mitotique observée dans chaque cellule.\n2. Remettre ces 4 cellules dans l'ordre chronologique de la mitose.\n3. Indiquer le nombre de chromosomes présents dans chacune des cellules filles formées.",
        "methodSteps": [
          "Étape 1 : Diagnostic des étapes :\n- Cellule 1 : alignement des centromères sur le plan équatorial = Métaphase (plaque équatoriale).\n- Cellule 2 : clivage des centromères et migration des chromatides vers les pôles = Anaphase (ascension polaire).\n- Cellule 3 : condensation des chromosomes et disparition de la membrane nucléaire = Prophase.\n- Cellule 4 : reformation des noyaux et édification d'une paroi médiane = Télophase avec cytodiérèse végétale.",
          "Étape 2 : Ordre chronologique naturel :\nL'ordre est Prophase (Cellule 3) → Métaphase (Cellule 1) → Anaphase (Cellule 2) → Télophase (Cellule 4).",
          "Étape 3 : Nombre de chromosomes dans les cellules filles :\nLa mitose étant une division conforme, chaque cellule fille contiendra exactement le même nombre de chromosomes que la cellule mère, soit 2n = 16 chromosomes simples."
        ],
        "conclusion": "L'ordre mitotique est Cellule 3 (P) → Cellule 1 (M) → Cellule 2 (A) → Cellule 4 (T), conservant 2n = 16 chromosomes par cellule."
      },
      "exercises": [
        {
          "id": "svt_2c_c9_p1_q1",
          "prompt": "À quelle étape de la mitose observe-t-on le regroupement de tous les chromosomes sur la plaque équatoriale ?",
          "options": [
            "À la métaphase",
            "À la prophase",
            "À l'anaphase",
            "À la télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La métaphase se caractérise par l'alignement des centromères des chromosomes condensés dans le plan équatorial médian de la cellule.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q2",
          "prompt": "Quel événement cytologique fondamental marque le début de l'anaphase ?",
          "options": [
            "Le clivage longitudinal des centromères et la séparation des deux chromatides sœurs",
            "La disparition de l'enveloppe nucléaire et des nucléoles",
            "L'alignement des chromosomes le long du fuseau achromatique",
            "La formation de la nouvelle paroi pectocellulosique médiane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anaphase commence précisément lorsque chaque centromère se clive en deux, permettant aux chromatides sœurs de se séparer et de migrer vers les pôles opposés.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q3",
          "prompt": "Comment se déroule la cytodiérèse (division du cytoplasme) dans une cellule animale ?",
          "options": [
            "Par un sillon d'étranglement circulaire équatorial qui resserre le cytoplasme de l'extérieur vers l'intérieur",
            "Par formation centrifuge d'une paroi squelettique rigide à partir de vésicules",
            "Par décomposition enzymatique spontanée de la membrane plasmique",
            "Par invagination du réticulum endoplasmique lisse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez la cellule animale souple (sans paroi), la cytodiérèse a lieu par étranglement équatorial progressif resserré par un anneau contractile cytosquelettique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q4",
          "prompt": "Par quoi est assurée la formation des deux pôles du fuseau de division chez la cellule végétale ?",
          "options": [
            "Par les calottes polaires (en l'absence de centrosomes/centrioles)",
            "Par les asters rayonnants issus des centrioles",
            "Par les thylakoïdes des chloroplastes",
            "Par les pores de l'enveloppe nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules des végétaux supérieurs ne possèdent pas de centrosome ni de centrioles ; leur fuseau mitotique s'organise à partir de calottes polaires denses.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q5",
          "prompt": "À quelle phase de la mitose l'enveloppe nucléaire et les nucléoles réapparaissent-ils ?",
          "options": [
            "À la télophase",
            "À la prophase",
            "À l'anaphase",
            "À la métaphase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En télophase, les deux lots de chromosomes se décondensent et une nouvelle enveloppe nucléaire se reforme autour de chaque noyau fils, avec réapparition des nucléoles.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q6",
          "prompt": "Quel est l'aspect d'un chromosome lors de la prophase et de la métaphase ?",
          "options": [
            "Il est formé de 2 chromatides sœurs identiques unies par un centromère",
            "Il est formé d'une seule chromatide simple déspiralisée",
            "Il est fragmenté en quatre morceaux indépendants sans centromère",
            "Il forme une boucle circulaire continue dépourvue de protéines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Durant la prophase et la métaphase, le chromosome est dédoublé et composé de deux chromatides sœurs réunies au centromère suite à la réplication de l'ADN en interphase.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q7",
          "prompt": "Lequel de ces ordres chronologiques décrit exactement la succession des phases de la mitose ?",
          "options": [
            "Prophase → Métaphase → Anaphase → Télophase",
            "Métaphase → Prophase → Télophase → Anaphase",
            "Anaphase → Télophase → Prophase → Métaphase",
            "Prophase → Anaphase → Métaphase → Télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitose se déroule rigoureusement selon l'ordre : Prophase (condensation), Métaphase (alignement), Anaphase (séparation polaire), Télophase (reconstitution).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q8",
          "prompt": "Lorsqu'une cellule mère humaine diploïde (2n = 46) termine sa mitose, que contiennent chacune des deux cellules filles formées ?",
          "options": [
            "46 chromosomes simples à 1 chromatide (2n = 46)",
            "23 chromosomes simples (n = 23)",
            "46 chromosomes doubles à 2 chromatides",
            "92 chromosomes simples"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la fin de la mitose, chaque cellule fille reçoit 46 chromosomes simples à 1 chromatide. La diploïdie (2n = 46) est parfaitement conservée.",
          "type": "mcq"
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch9_p2_importance_biologique_mitose",
      "order": 2,
      "title": "Rôle et importance biologique de la mitose pour les organismes vivants",
      "summary": "Comprendre les rôles majeurs de la mitose : reproduction conforme, croissance des tissus, renouvellement cellulaire et maintien de l'intégrité du patrimoine héréditaire.",
      "conceptExplanation": "1. La mitose, mécanisme de reproduction conforme :\n- La mitose garantit la transmission intégrale et rigoureusement fidèle de l'information génétique d'une cellule mère aux deux cellules filles.\n- Toutes les cellules d'un organisme pluricellulaire (environ 10¹⁴ cellules chez l'Homme adulte) dérivent par mitoses successives d'une unique cellule initiale : la cellule-œuf (zygote). Elles possèdent toutes le même programme génétique et le même caryotype (46 chromosomes chez l'humain).\n\n2. Les grands rôles de la mitose dans l'organisme :\nA. Le développement embryonnaire et la croissance :\n- À partir de la fécondation, la multiplication exponentielle des cellules permet à l'embryon puis au fœtus et à l'enfant de grandir et de construire l'ensemble de ses organes.\n- Chez les végétaux supérieurs (plantes à fleurs), la croissance est continue grâce à des zones tissulaires spécialisées appelées méristèmes (situés à l'apex des tiges et à la pointe des racines) où les cellules se divisent indéfiniment par mitoses.\n\nB. Le renouvellement cellulaire et la maintenance des tissus usés :\n- Dans un organisme adulte, de nombreuses cellules s'usent, meurent ou sont éliminées quotidiennement. La mitose compense exactement ces pertes pour maintenir l'intégrité fonctionnelle des tissus :\n  * Chez l'Homme, environ 200 milliards de globules rouges (hématies) sont renouvelés chaque jour dans la moelle osseuse par mitose des cellules souches érythropoïétiques.\n  * Les cellules de l'épiderme cutané et de la muqueuse intestinale se desquament et se renouvellent intégralement tous les quelques jours grâce aux mitoses de leurs couches basales génératrices.\n\nC. La cicatrisation et la régénération tissulaire :\n- En cas de plaie, brûlure, lésion ou traumatisme, les mitoses des cellules saines périphériques s'accélèrent pour colmater la brèche et régénérer le tissu blessé (cicatrisation).\n\nD. La reproduction asexuée chez les êtres vivants :\n- Chez les organismes unicellulaires (levures, paramécies, amibes), la mitose constitue le mode direct de reproduction de l'espèce par scissiparité (clonage naturel).\n- Chez de nombreux végétaux, elle permet la multiplication végétative naturelle ou artificielle (bouturage, marcottage, tubercules de pomme de terre, rejets de bananier).\n\n3. Ce que la mitose NE FAIT PAS (distinction essentielle avec la méiose et le système immunitaire) :\n- La mitose ne produit PAS les gamètes (c'est la méiose qui réduit le caryotype de 2n à n).\n- La mitose ne défend PAS directement l'organisme contre les agents pathogènes (rôle assuré par le système immunitaire : globules blancs, anticorps, phagocytose), même si la prolifération de lymphocytes stimulés se fait par mitoses.",
      "formulas": [
        {
          "name": "Principe de conservation du patrimoine héréditaire",
          "formula": "Cellule-œuf (2n) —(mitoses successives)→ 10¹⁴ cellules somatiques identiques (2n)",
          "note": "Clonage génétique cellulaire intégral."
        },
        {
          "name": "Équilibre du renouvellement cellulaire somatique",
          "formula": "Taux de mitose (production) = Taux de sénescence / apoptose (perte quotidienne)",
          "note": "Exemple : 200 milliards d'hématies renouvelées par jour chez l'humain."
        }
      ],
      "keyRule": "LA MITOSE EST UNE DIVISION CONFORME QUI CONSERVE INTÉGRALEMENT LE CARYOTYPE. Elle assure la croissance, la cicatrisation, le renouvellement continu des cellules usées (200 milliards d'hématies/jour) et la reproduction asexuée. En revanche, elle ne produit pas les gamètes haploïdes et n'est pas le système de défense immunitaire.",
      "workedExample": {
        "title": "Exemple résolu : Évaluation de situations physiologiques impliquant la mitose",
        "statement": "Une équipe d'élèves de 2nde C au Lycée Moderne de Divo analyse 4 phénomènes biologiques :\na) La formation des spermatozoïdes dans les tubes séminifères.\nb) La fermeture d'une coupure superficielle sur le doigt après 5 jours.\nc) L'élongation racinaire de l'ail cultivé dans l'eau.\nd) Le remplacement quotidien des hématies sénescentes dans la circulation sanguine.\n1. Préciser pour chacune de ces situations si elle relève directement de la mitose.\n2. Justifier la réponse pour chaque cas.",
        "methodSteps": [
          "Étape 1 : Cas a) Production des spermatozoïdes :\nFaux pour l'étape finale haploïde. La fabrication des spermatozoïdes haploïdes (n) à partir de cellules germinales diploïdes nécessite la méiose (bien que les spermatogonies se multiplient au préalable par mitose).",
          "Étape 2 : Cas b) Fermeture d'une plaie cutanée :\nVrai. La cicatrisation résulte de la multiplication active par mitose des cellules épidermiques et fibroblastes pour combler la brèche.",
          "Étape 3 : Cas c) Élongation racinaire de l'ail :\nVrai. La croissance des racines végétales s'effectue au niveau du méristème sub-apical par divisions mitotiques intenses des cellules méristématiques.",
          "Étape 4 : Cas d) Remplacement des hématies usées :\nVrai. La moelle osseuse produit par mitose continue environ 200 milliards de nouvelles cellules sanguines par jour pour compenser les pertes."
        ],
        "conclusion": "Les situations b, c et d sont des manifestations directes de la mitose assurant réparation, croissance et renouvellement cellulaire."
      },
      "exercises": [
        {
          "id": "svt_2c_c9_p2_q1",
          "prompt": "Pourquoi qualifie-t-on la mitose de 'reproduction conforme' ?",
          "options": [
            "Parce qu'elle produit deux cellules filles possédant exactement la même information génétique et le même nombre de chromosomes que la cellule mère",
            "Parce qu'elle réduit systématiquement de moitié le nombre de chromosomes pour féconder un nouvel ovule",
            "Parce qu'elle modifie aléatoirement les gènes pour créer une diversité phénotypique nouvelle",
            "Parce qu'elle produit une seule cellule fille géante à quatre noyaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitose est dite conforme car elle préserve scrupuleusement l'intégrité du caryotype et la séquence génétique de la cellule mère dans les deux cellules filles.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q2",
          "prompt": "Chez les végétaux supérieurs, dans quelles zones spécialisées se déroulent les divisions cellulaires mitotiques assurant la croissance ?",
          "options": [
            "Dans les méristèmes situés à l'extrémité des tiges et des racines",
            "Dans les vaisseaux de bois conducteur de sève brute",
            "Dans les stomates des feuilles uniquement",
            "Dans le liber de l'écorce morte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les méristèmes apicaux (caulinaires et radiculaires) sont des massifs de cellules indifférenciées douées d'une activité mitotique intense et indéfinie chez la plante.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q3",
          "prompt": "Combien de globules rouges (hématies) le corps humain adulte remplace-t-il quotidiennement par mitose ?",
          "options": [
            "Environ 200 milliards d'hématies par jour",
            "Environ 200 millions d'hématies par jour",
            "Environ 200 000 hématies par jour",
            "Aucune, les hématies vivent toute la vie de l'individu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La durée de vie d'une hématie est d'environ 120 jours ; l'organisme compense les pertes en renouvelant quotidiennement près de 200 milliards d'hématies dans la moelle osseuse.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q4",
          "prompt": "Laquelle des fonctions suivantes NE relève PAS de la mitose ?",
          "options": [
            "La formation directe des gamètes haploïdes (ovules et spermatozoïdes)",
            "La cicatrisation d'une plaie cutanée",
            "La croissance en taille et en masse de l'enfant",
            "Le renouvellement des cellules de l'épithélium intestinal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formation des gamètes haploïdes (n) à partir de cellules souches germinales fait intervenir la méiose (division réductionnelle), et non la mitose.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q5",
          "prompt": "Comment appelle-t-on le processus de réparation des tissus corporels blessés permis par la prolifération mitotique des cellules voisines ?",
          "options": [
            "La cicatrisation",
            "La phagocytose",
            "La méiose réductionnelle",
            "L'hémolyse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cicatrisation résulte de la multiplication active des cellules saines (fibroblastes, kératinocytes) par mitose pour combler la brèche tissulaire.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q6",
          "prompt": "Toutes les cellules du corps d'un individu adulte possèdent la même information génétique que la cellule-œuf dont elles sont issues. Pourquoi ?",
          "options": [
            "Parce que toutes les divisions cellulaires depuis l'œuf se font par mitoses conformes assurant une réplication et une distribution équitable de l'ADN",
            "Parce que l'organisme fabrique un nouvel ADN à partir des aliments ingérés chaque jour",
            "Parce que le système immunitaire élimine toute cellule contenant un chromosome",
            "Parce que les cellules s'échangent mutuellement des noyaux entiers par les pores nucléaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque mitose transmet une copie exacte du génome initial de la cellule-œuf, ce qui fait que toutes les cellules somatiques d'un individu possèdent le même patrimoine génétique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q7",
          "prompt": "Quelle est l'importance de la mitose chez les êtres vivants unicellulaires tels que l'amibe ou la levure ?",
          "options": [
            "Elle constitue leur mode de reproduction asexuée assurant la multiplication de l'espèce par scissiparité",
            "Elle leur permet d'abandonner leur noyau pour se déplacer plus vite",
            "Elle sert exclusivement à synthétiser la chlorophylle",
            "Elle provoque systématiquement la mort programmée de l'individu sans descendance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez les unicellulaires, la mitose suivie de cytodiérèse donne naissance à deux individus indépendants : c'est la reproduction asexuée (scissiparité).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q8",
          "prompt": "Quel est l'effet d'une perturbation du contrôle des mitoses dans un tissu de l'organisme ?",
          "options": [
            "Une prolifération anarchique et incontrôlée de cellules pouvant former une tumeur ou un cancer",
            "Une disparition instantanée de toutes les mitochondries cellulaires",
            "Une transformation spontanée des cellules somatiques en graines végétales",
            "Un arrêt complet et définitif de la respiration cellulaire chez l'espèce entière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque les mécanismes de régulation du cycle cellulaire et des mitoses sont altérés, les cellules se divisent de manière anarchique, conduisant à la formation de tumeurs cancéreuses.",
          "type": "mcq"
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 10 : L'ÉVOLUTION DE L'ÉQUIPEMENT CHROMOSOMIQUE (ADN ET CYCLE CELLULAIRE)
// ============================================================================
export const svt2deCEvolutionEquipementChromosomiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch10_evolution_equipement_chromosomique_adn",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 10,
  "officialVolumeHours": 4,
  "title": "Leçon 10 — L'évolution de l'équipement chromosomique",
  "summary": "Structure moléculaire du chromosome et de l'ADN (nucléofilaments, histones, modèle en double hélice de Watson-Crick, règles de Chargaff), cycle cellulaire (G1, S, G2, M), cinétique du taux d'ADN et réplication semi-conservative catalysée par l'ADN polymérase.",
  "points": [
    {
      "id": "seconde_c_svt_ch10_p1_structure_chromosome_adn_chargaff",
      "order": 1,
      "title": "Structure biochimique du chromosome, histones et modèle de l'ADN de Watson-Crick",
      "summary": "Comprendre l'organisation supramoléculaire du chromosome (nucléofilament, histones), les constituants de l'ADN (nucléotides), les règles d'appariement de Chargaff et la double hélice antiparallèle.",
      "conceptExplanation": "1. Organisation architecturale du chromosome eucaryote :\n- Au microscope électronique, la chromatine et les chromosomes apparaissent formés d'un filament de 10 nm de diamètre appelé nucléofilament.\n- Le nucléofilament résulte de l'enroulement d'un squelette protéique formé de protéines basiques appelées histones (organisées en octamères formant des nucléosomes) autour desquelles s'enroule la molécule d'ADN.\n- Lors de la division cellulaire (mitose), ce nucléofilament subit des surenroulements successifs (spiralisation) pour former le chromosome métaphasique hautement condensé.\n\n2. Composition biochimique de la molécule d'ADN (Acide Désoxyribonucléique) :\nL'hydrolyse enzymatique complète de la molécule d'ADN permet d'isoler trois types de composants élémentaires :\na) De l'acide phosphorique : de formule H₃PO₄.\nb) Un sucre pentose : le désoxyribose (glucide à 5 atomes de carbone, formule C₅H₁₀O₄).\nc) Quatre bases azotées organiques réparties en deux familles chimiques :\n   - Deux bases puriques (à double cycle) : l'Adénine (A) et la Guanine (G).\n   - Deux bases pyrimidiques (à cycle simple) : la Thymine (T) et la Cytosine (C).\n- L'unité structurale de base de l'ADN est le nucléotide, résultant de l'union : 1 molécule d'acide phosphorique + 1 molécule de désoxyribose + 1 base azotée parmi les quatre (A, T, G ou C). Il existe donc 4 types de nucléotides dans l'ADN.\n\n3. Les règles d'équivalence de Chargaff (1950) :\nL'analyse quantitative des bases azotées dans l'ADN de diverses espèces vivantes a révélé que la proportion des bases n'est pas aléatoire :\n- La quantité d'Adénine est toujours strictement égale à celle de Thymine : A = T (soit A / T = 1).\n- La quantité de Guanine est toujours strictement égale à celle de Cytosine : G = C (soit G / C = 1).\n- La somme des bases puriques est égale à la somme des bases pyrimidiques : (A + G) / (T + C) = 1.\nCette égalité fondamentale s'appelle la règle de Chargaff et est universelle chez tous les êtres vivants.\n\n4. Le modèle en double hélice de Watson et Crick (1953) :\n- Grâce aux travaux de cristallographie de Rosalind Franklin et aux règles de Chargaff, James Watson et Francis Crick ont proposé la structure tridimensionnelle de l'ADN :\n  * Molécule bicaténaire : formée de deux chaînes ou brins polynucléotidiques enroulés l'un autour de l'autre en une double hélice régulière de 2 nm de diamètre.\n  * Brins antiparallèles : orientés en sens opposés (l'un dans le sens 5' → 3', l'autre dans le sens 3' → 5').\n  * Complémentarité des bases azotées reliées par des liaisons hydrogène faibles au cœur de l'hélice :\n    - L'Adénine est toujours appariée à la Thymine par 2 liaisons hydrogène (A = T).\n    - La Guanine est toujours appariée à la Cytosine par 3 liaisons hydrogène (G ≡ C).\n- L'ADN est le support universel de l'information génétique chez tous les êtres vivants et est localisé exclusivement dans le noyau chez les eucaryotes (avec de petites fractions dans les mitochondries et chloroplastes).",
      "formulas": [
        {
          "name": "Règles d'équivalence de Chargaff",
          "formula": "A = T  et  G = C  ⟹  (A + G) / (T + C) = 1",
          "note": "Valable pour toute molécule d'ADN bicaténaire double brin."
        },
        {
          "name": "Constitution d'un nucléotide",
          "formula": "Nucléotide = Acide phosphorique (H₃PO₄) + Désoxyribose + Base azotée (A, T, G ou C)",
          "note": "4 nucléotides distincts constituent l'alphabet génétique."
        }
      ],
      "keyRule": "DANS LA MOLÉCULE D'ADN BICATÉNAIRE, L'ADÉNINE S'APPARIE TOUJOURS À LA THYMINE PAR 2 LIAISONS HYDROGÈNE (A=T), ET LA GUANINE S'APPARIE À LA CYTOSINE PAR 3 LIAISONS HYDROGÈNE (G≡C). Par conséquent, le rapport purines/pyrimidines (A+G)/(T+C) vaut obligatoirement 1.",
      "workedExample": {
        "title": "Exemple résolu : Détermination des proportions des bases azotées d'un fragment d'ADN",
        "statement": "L'analyse biochimique d'un fragment d'ADN double brin humain composé de 2 000 paires de bases montre qu'il contient 28 % d'Adénine (A).\n1. En appliquant les règles de Chargaff, calculer le pourcentage de Thymine (T), de Cytosine (C) et de Guanine (G).\n2. Calculer le nombre total de molécules de chaque base azotée dans ce fragment.\n3. Calculer le nombre total de liaisons hydrogène maintenant les deux brins unis.",
        "methodSteps": [
          "Étape 1 : Calcul des pourcentages selon Chargaff :\n- La complémentarité A = T impose : %T = %A = 28 %.\n- Total des bases (A + T) = 28 % + 28 % = 56 %.\n- Le reste correspond aux bases G + C : %G + %C = 100 % - 56 % = 44 %.\n- Puisque G = C : %G = %C = 44 % / 2 = 22 %.",
          "Étape 2 : Nombre absolu de chaque base :\nLe fragment compte 2 000 paires de bases, soit un total de 4 000 nucléotides (bases) :\n- Nombre de A = 4 000 × 0,28 = 1 120 molécules.\n- Nombre de T = 1 120 molécules.\n- Nombre de G = 4 000 × 0,22 = 880 molécules.\n- Nombre de C = 880 molécules.",
          "Étape 3 : Calcul du nombre total de liaisons hydrogène :\n- Entre chaque couple A-T, il y a 2 liaisons hydrogène : 1 120 × 2 = 2 240 liaisons.\n- Entre chaque couple G-C, il y a 3 liaisons hydrogène : 880 × 3 = 2 640 liaisons.\n- Total des liaisons hydrogène = 2 240 + 2 640 = 4 880 liaisons hydrogène."
        ],
        "conclusion": "Le fragment contient 28 % de T, 22 % de G et 22 % de C, totalisant 4 880 liaisons hydrogène assurant la cohésion de la double hélice."
      },
      "exercises": [
        {
          "id": "svt_2c_c10_p1_q1",
          "prompt": "Quelles sont les protéines basiques autour desquelles s'enroule la molécule d'ADN pour former le nucléofilament ?",
          "options": [
            "Les histones",
            "L'actine et la myosine",
            "L'hémoglobine",
            "Le collagène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les histones sont des protéines globulaires basiques qui forment le squelette protéique autour duquel l'ADN s'enroule pour constituer les nucléosomes et le nucléofilament de 10 nm.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q2",
          "prompt": "Quels sont les trois constituants chimiques d'un nucléotide de l'ADN ?",
          "options": [
            "Une molécule d'acide phosphorique, une molécule de désoxyribose et une base azotée",
            "Une molécule d'acide aminé, un glucose et un lipide",
            "Un ribosome, une mitochondrie et un centriole",
            "Un acide chlorhydrique, un ribose et une base uracile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque nucléotide d'ADN résulte de la condensation d'un groupe phosphate (acide phosphorique), d'un sucre désoxyribose et d'une base azotée (A, T, C ou G).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q3",
          "prompt": "Parmi les bases azotées suivantes, lesquelles sont des bases pyrimidiques ?",
          "options": [
            "La Thymine (T) et la Cytosine (C)",
            "L'Adénine (A) et la Guanine (G)",
            "L'Adénine (A) et la Thymine (T)",
            "La Guanine (G) et la Cytosine (C)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les bases pyrimidiques (à cycle simple) de l'ADN sont la Thymine et la Cytosine. L'Adénine et la Guanine sont des bases puriques (à double cycle).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q4",
          "prompt": "D'après les règles de Chargaff, quel rapport est toujours égal à 1 dans une molécule d'ADN bicaténaire ?",
          "options": [
            "(A + G) / (T + C) = 1",
            "(A + T) / (G + C) = 1",
            "(A + C) / (T + C) = 2",
            "A / G = 1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme A = T et G = C, la somme des purines (A+G) égale toujours la somme des pyrimidines (T+C), d'où (A+G)/(T+C) = 1.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q5",
          "prompt": "Combien de liaisons hydrogène unissent la paire Guanine - Cytosine dans la double hélice d'ADN ?",
          "options": [
            "3 liaisons hydrogène (G ≡ C)",
            "2 liaisons hydrogène (G = C)",
            "1 seule liaison covalente",
            "4 liaisons peptidiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paire G-C est unie par 3 liaisons hydrogène faibles, tandis que la paire A-T est unie par 2 liaisons hydrogène.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q6",
          "prompt": "Qui a établi en 1953 le modèle de la structure en double hélice de l'ADN ?",
          "options": [
            "James Watson et Francis Crick",
            "Gregor Mendel et Charles Darwin",
            "Louis Pasteur et Robert Koch",
            "Antonie van Leeuwenhoek"
          ],
          "correctAnswerIndex": 0,
          "explanation": "James Watson et Francis Crick ont proposé en 1953 le modèle en double hélice bicaténaire antiparallèle de l'ADN (prix Nobel de physiologie ou médecine en 1962).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q7",
          "prompt": "Si un brin d'ADN possède la séquence 5'-A-T-G-C-C-A-3', quelle est la séquence du brin complémentaire antiparallèle 3'-...-5' ?",
          "options": [
            "3'-T-A-C-G-G-T-5'",
            "3'-A-T-G-C-C-A-5'",
            "3'-U-A-C-G-G-U-5'",
            "3'-G-C-A-T-T-G-5'"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par complémentarité des bases (A face à T, et G face à C) : A→T, T→A, G→C, C→G, C→G, A→T, ce qui donne la séquence 3'-T-A-C-G-G-T-5'.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q8",
          "prompt": "Un échantillon d'ADN double brin renferme 35 % de Cytosine. Quel est le pourcentage d'Adénine dans cet échantillon ?",
          "options": [
            "15 % d'Adénine",
            "35 % d'Adénine",
            "30 % d'Adénine",
            "70 % d'Adénine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si %C = 35 %, alors %G = 35 % (total G+C = 70 %). Le reste (A+T) représente 100 % - 70 % = 30 %. Comme A = T, on a %A = 30 % / 2 = 15 %.",
          "type": "mcq"
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch10_p2_cycle_cellulaire_replication_semi_conservative",
      "order": 2,
      "title": "Cycle cellulaire, cinétique de l'ADN et réplication semi-conservative",
      "summary": "Analyser l'évolution quantitative du taux d'ADN au cours du cycle cellulaire (phases G1, S, G2, M), expliquer la réplication semi-conservative par l'ADN polymérase et corréler l'aspect des chromosomes.",
      "conceptExplanation": "1. Définition et phases du cycle cellulaire :\nUn cycle cellulaire est l'ensemble des événements qu'une cellule traverse entre sa formation par division d'une cellule mère et sa propre division en deux cellules filles. Il comprend deux périodes majeures :\n- L'Interphase : période de préparation et de forte activité métabolique durant laquelle la cellule ne se divise pas. Elle est subdivisée en trois phases successives (G₁, S, G₂) :\n  * Phase G₁ (Gap 1 ou première phase de croissance, 0 à 8 h) : synthèse active de protéines, d'ARN, de lipides et de nouveaux organites. La quantité d'ADN reste constante à une valeur simple Q (soit 7,3 unités arbitraires chez les cellules de mammifère). Les chromosomes sont simples, constitués d'une seule chromatide décondensée filamentaire.\n  * Phase S (Synthèse, 8 à 13 h) : réplication (duplication) de la totalité de l'ADN génomique. La quantité d'ADN augmente progressivement et double, passant de Q à 2Q (de 7,3 à 14,6 ua). Chaque chromosome passe de l'état simple à 1 chromatide à l'état dédoublé à 2 chromatides identiques réunies au centromère.\n  * Phase G₂ (Gap 2 ou deuxième phase de croissance, 13 à 19 h) : poursuite de la synthèse protéique (notamment de tubuline pour le futur fuseau achromatique). La quantité d'ADN reste stable et double à 2Q (14,6 ua). Les chromosomes ont 2 chromatides bien distinctes.\n- La Mitose (phase M, 19 à 20 h) : division du noyau et du cytoplasme. À l'anaphase, le clivage des centromères et la séparation des deux chromatides sœurs divisent la quantité d'ADN par deux : chaque cellule fille retrouve la quantité initiale simple Q (7,3 ua) avec des chromosomes simples à 1 chromatide.\n\n2. Le mécanisme de la réplication semi-conservative de l'ADN :\n- Lors de la phase S, la réplication commence en plusieurs points précis de la molécule d'ADN appelés origines de réplication, formant des « yeux de réplication » encadrés par deux fourches de réplication qui progressent en sens opposés (réplication bidirectionnelle).\n- Une enzyme (l'hélicase) déroule et sépare les deux brins de la double hélice parentale en brisant les liaisons hydrogène entre les bases complémentaires.\n- L'enzyme ADN polymérase se fixe sur chaque brin matrice et catalyse l'assemblage ordonné des désoxyribonucléotides libres présents dans le noyau, base après base, selon la stricte règle de complémentarité (A face à T, C face à G).\n- À l'issue de la réplication, on obtient 2 molécules d'ADN strictement identiques entre elles et identiques à la molécule d'origine.\n- Propriété semi-conservative : dans chaque nouvelle molécule d'ADN obtenue, un des brins est conservé intact de la molécule initiale (brin parental) et l'autre brin est entièrement néoformé (brin nouveau). Ce mode a été démontré par les expériences historiques de Meselson et Stahl (1958).\n\n3. Relation entre taux d'ADN et aspect morphologique du chromosome :\n- En phase G₁ : quantité Q d'ADN → 1 chromosome = 1 nucléofilament = 1 chromatide décondensée.\n- En phase S : transition de Q à 2Q → duplication progressive de chaque chromatide au niveau des fourches de réplication.\n- En phase G₂ et début de mitose (Prophase, Métaphase) : quantité 2Q d'ADN → 1 chromosome = 2 molécules d'ADN identiques = 2 chromatides sœurs réunies au centromère.\n- À l'Anaphase : séparation des chromatides → chaque cellule fille reçoit 1 chromosome simple à 1 chromatide portant une quantité Q d'ADN.",
      "formulas": [
        {
          "name": "Variation de la quantité d'ADN au cours du cycle",
          "formula": "G₁ (Q = 7,3 ua) → S (Q ↗ 2Q) → G₂ (2Q = 14,6 ua) → Mitose (2Q ↘ Q)",
          "note": "Cycle complet rétablissant fidèlement la dotation initiale de la cellule mère."
        },
        {
          "name": "Principe de la réplication semi-conservative",
          "formula": "1 molécule bicaténaire parentale → 2 molécules filles (chacune = 1 brin parental + 1 brin néoformé)",
          "note": "Catalysée par l'ADN polymérase dans les deux sens au niveau des yeux de réplication."
        }
      ],
      "keyRule": "LA QUANTITÉ D'ADN DOUBLE PENDANT LA PHASE S DE L'INTERPHASE (DE Q À 2Q) PAR RÉPLICATION SEMI-CONSERVATIVE, faisant passer chaque chromosome de 1 à 2 chromatides. LA MITOSE RÉDUIT CETTE QUANTITÉ DE MOITIÉ (DE 2Q À Q) À L'ANAPHASE, assurant une transmission strictement équitable et conforme de l'information génétique.",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un graphique d'évolution de la quantité d'ADN au cours du temps",
        "statement": "Le dosage spectrophotométrique de l'ADN dans une culture de cellules de mammifère donne les résultats suivants :\n- De t = 0 h à t = 10 h : quantité d'ADN constante à 6,6 pg par cellule.\n- De t = 10 h à t = 18 h : la quantité d'ADN s'élève régulièrement de 6,6 pg à 13,2 pg.\n- De t = 18 h à t = 22 h : la quantité d'ADN demeure constante à 13,2 pg.\n- De t = 22 h à t = 23 h : la quantité d'ADN chute brutalement à 6,6 pg par cellule.\n1. Identifier les phases du cycle cellulaire correspondant à chaque intervalle de temps.\n2. Calculer la durée totale d'un cycle cellulaire et de l'interphase.\n3. Décrire l'état morphologique d'un chromosome à t = 5 h puis à t = 20 h.",
        "methodSteps": [
          "Étape 1 : Identification des phases :\n- De 0 à 10 h : quantité constante simple (Q = 6,6 pg) → Phase G₁ de l'interphase (croissance initiale).\n- De 10 à 18 h : doublement de la quantité d'ADN (6,6 à 13,2 pg) → Phase S de l'interphase (réplication de l'ADN).\n- De 18 à 22 h : quantité constante double (2Q = 13,2 pg) → Phase G₂ de l'interphase (préparation mitotique).\n- De 22 à 23 h : chute de moitié (13,2 à 6,6 pg) → Phase M (Mitose avec anaphase et cytodiérèse).",
          "Étape 2 : Durées du cycle et de l'interphase :\n- Durée du cycle cellulaire complet = 23 h - 0 h = 23 heures.\n- Durée de l'interphase (G₁ + S + G₂) = 10 h + 8 h + 4 h = 22 heures.\n- La mitose (M) ne dure qu'une heure (22 h à 23 h).",
          "Étape 3 : Aspect des chromosomes :\n- À t = 5 h (en phase G₁) : chaque chromosome est simple, constitué d'un seul filament d'ADN (1 chromatide) décondensé.\n- À t = 20 h (en phase G₂) : chaque chromosome est dédoublé, constitué de 2 chromatides sœurs identiques unies par leur centromère."
        ],
        "conclusion": "Le cycle cellulaire dure 23 h (22 h d'interphase et 1 h de mitose), alternant phase à 1 chromatide (G₁) et phase à 2 chromatides (G₂/Mitose)."
      },
      "exercises": [
        {
          "id": "svt_2c_c10_p2_q1",
          "prompt": "À quel moment précis du cycle cellulaire la quantité d'ADN double-t-elle par réplication ?",
          "options": [
            "Pendant la phase S de l'interphase",
            "Pendant la phase G₁ de l'interphase",
            "Pendant la métaphase de la mitose",
            "Pendant la cytodiérèse en télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est durant la phase S (phase de Synthèse) de l'interphase que la quantité d'ADN double de Q à 2Q grâce à la réplication de l'ADN.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q2",
          "prompt": "Quelle enzyme clé catalyse l'incorporation des nucléotides complémentaires lors de la réplication de l'ADN ?",
          "options": [
            "L'ADN polymérase",
            "L'amylase salivaire",
            "L'ARN ribosomique",
            "L'ATP synthase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ADN polymérase est l'enzyme responsable de la polymérisation des nucléotides complémentaires face à chaque brin matrice lors de la réplication.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q3",
          "prompt": "Pourquoi qualifie-t-on la réplication de l'ADN de 'semi-conservative' ?",
          "options": [
            "Parce que chaque molécule d'ADN fille conserve un brin de la molécule mère initiale et intègre un nouveau brin synthétisé",
            "Parce que la moitié des gènes est définitivement détruite à chaque cycle",
            "Parce que seuls les chromosomes sexuels sont répliqués",
            "Parce que la réplication n'a lieu qu'une fois sur deux générations cellulaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est dite semi-conservative car dans chaque double hélice fille, un brin parental ancien est conservé et sert de guide à la synthèse du brin néoformé.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q4",
          "prompt": "Quelles sont les trois phases successives qui composent l'interphase ?",
          "options": [
            "Phase G₁ → Phase S → Phase G₂",
            "Prophase → Métaphase → Anaphase",
            "Phase G₁ → Phase M → Phase G₂",
            "Phase S → Phase G₁ → Mitose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interphase comprend successivement la phase G₁ (croissance pré-synthétique), la phase S (synthèse/réplication de l'ADN) et la phase G₂ (croissance post-synthétique).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q5",
          "prompt": "Combien de chromatides possède un chromosome pendant la phase G₁ du cycle cellulaire ?",
          "options": [
            "1 seule chromatide (chromosome simple)",
            "2 chromatides sœurs réunies au centromère",
            "4 chromatides condensées",
            "Aucune chromatide, l'ADN n'existe pas en G₁"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En phase G₁, avant la réplication S, chaque chromosome est simple et ne contient qu'une seule molécule d'ADN (1 seule chromatide).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q6",
          "prompt": "À quelle étape de la mitose la quantité d'ADN par cellule chute-t-elle de 2Q à Q ?",
          "options": [
            "À l'anaphase, lors du clivage des centromères et de la séparation des chromatides",
            "À la prophase, lors de la spiralisation de la chromatine",
            "À la métaphase, lors de la formation de la plaque équatoriale",
            "Pendant toute la phase G₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La séparation des chromatides sœurs à l'anaphase et leur distribution vers les pôles opposés divise par deux la quantité d'ADN attribuée à chaque future cellule fille (passage de 2Q à Q).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q7",
          "prompt": "Comment se déroule la réplication de l'ADN au niveau des yeux de réplication ?",
          "options": [
            "Elle progresse dans les deux sens de manière bidirectionnelle au niveau des deux fourches de réplication",
            "Elle démarre uniquement à une extrémité du chromosome pour aller jusqu'à l'autre bout",
            "Elle se déroule exclusivement dans un seul sens unidirectionnel",
            "Elle s'arrête immédiatement après l'incorporation de 10 nucléotides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans chaque œil de réplication, deux fourches progressent en sens opposés (réplication bidirectionnelle), ce qui permet de répliquer rapidement les très longues molécules d'ADN eucaryote.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q8",
          "prompt": "Si une cellule en phase G₁ contient 7,3 unités arbitraires d'ADN, quelle quantité d'ADN contiendra une de ses cellules en métaphase ?",
          "options": [
            "14,6 unités arbitraires d'ADN (2Q)",
            "7,3 unités arbitraires d'ADN (Q)",
            "3,65 unités arbitraires d'ADN (Q/2)",
            "29,2 unités arbitraires d'ADN (4Q)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après avoir traversé la phase S en interphase, la quantité d'ADN a doublé (2Q). En prophase et métaphase, la cellule contient donc 2 × 7,3 = 14,6 ua d'ADN.",
          "type": "mcq"
        }
      ]
    }
  ]
};

// ============================================================================
// EXPORT DU CURRICULUM COMPLET SVT 2de C (10 CHAPITRES, 20 POINTS, 160 QCM)
// ============================================================================
export const svt2deCChapters: CurriculumChapter[] = [
  svt2deCStructureGeologiqueChapter,
  svt2deCAlterationRochesMagmatiquesChapter,
  svt2deCFormationRochesSedimentairesChapter,
  svt2deCFormationRochesMetamorphiquesChapter,
  svt2deCDevenirRochesMetamorphiquesChapter,
  svt2deCRelationsEtresVivantsChapter,
  svt2deCChangementClimatiqueChapter,
  svt2deCOrganisationCelluleChapter,
  svt2deCDivisionCellulaireMitoseChapter,
  svt2deCEvolutionEquipementChromosomiqueChapter,
];
