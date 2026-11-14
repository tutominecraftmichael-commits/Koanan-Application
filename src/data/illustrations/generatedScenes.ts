// Fichier écrit par scripts/generateScenes.ts (scènes choisies par Gemini, validées puis dessinées par
// src/lib/scenes). Ne pas modifier à la main : relancer le script.
import type { SceneSpec } from '../../lib/scenes/sceneTypes';

export interface GeneratedScene { title: string; caption: string; spec: SceneSpec }

/** Leçons déjà traitées par le générateur. */
export const GENERATED_CHAPTERS: string[] = [
  "premiere_a1_hg_geographie_t1_l01_dynamisme_demographique_ci",
  "premiere_a1_hg_geographie_t1_l02_croissance_demographique_mondiale",
  "premiere_a1_hg_geographie_t2_l01_urbanisation_cote_ivoire",
  "premiere_a1_hg_geographie_t2_l02_urbanisation_france",
  "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci",
  "premiere_a1_hg_geographie_t3_l02_amenagement_territoire_ci",
  "premiere_a1_hg_geographie_t4_l01_facteurs_mondialisation",
  "premiere_a1_hg_geographie_t4_l02_consequences_mondialisation",
  "premiere_a1_hg_histoire_t1_l01_essor_capitalisme",
  "premiere_a1_hg_histoire_t1_l02_revolutions_industrielles",
  "premiere_a1_hg_histoire_t2_l01_imperialisme_congres_berlin",
  "premiere_a1_hg_histoire_t2_l02_resistances_conquete_ci",
  "premiere_a1_hg_histoire_t2_l03_colonisation_cote_ivoire",
  "premiere_a1_hg_histoire_t3_l01_premiere_guerre_mondiale",
  "premiere_a1_hg_histoire_t3_l02_seconde_guerre_mondiale",
  "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides",
  "premiere_philo_histoire_l06_periode_antique",
  "premiere_philo_histoire_l07_moyen_age_renaissance",
  "premiere_philo_histoire_l08_periode_moderne",
  "premiere_philo_histoire_l09_periode_contemporaine",
  "premiere_philo_methodologie_l01_methode_lecture_texte",
  "premiere_philo_methodologie_l02_introduction_commentaire",
  "premiere_philo_methodologie_l03_conclusion_commentaire",
  "premiere_philo_methodologie_l04_essai_problematisation",
  "premiere_philo_methodologie_l05_introduction_dissertation",
  "seconde_a_hg_geographie_l01_objet_interet_demarche",
  "seconde_a_hg_geographie_l02_planete_terre",
  "seconde_a_hg_geographie_l03_techniques_representation_terre",
  "seconde_a_hg_geographie_t2_l01_milieu_subequatorial",
  "seconde_a_hg_geographie_t2_l02_milieu_tropical",
  "seconde_a_hg_geographie_t2_l03_environnement_menace",
  "seconde_a_hg_geographie_t3_l01_milieux_biogeographiques",
  "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels",
  "seconde_a_hg_histoire_l01_histoire_formation_citoyen",
  "seconde_a_hg_histoire_l02_methodes_etude_histoire",
  "seconde_a_hg_histoire_l03_methodologie_dissertation_commentaire",
  "seconde_a_hg_histoire_t2_l01_prehistoire",
  "seconde_a_hg_histoire_t2_l02_egypte_ancienne",
  "seconde_a_hg_histoire_t2_l03_democratie_athenienne",
  "seconde_a_hg_histoire_t2_l04_soudan_occidental",
  "seconde_a_hg_histoire_t2_l05_traites_des_noirs",
  "seconde_a_hg_histoire_t3_l01_neolithique_ci",
  "seconde_a_hg_histoire_t3_l02_peuples_ci",
  "terminale_hg_geographie_l01_fondements_developpement_economique",
  "terminale_hg_geographie_l02_secteurs_activites_economiques",
  "terminale_hg_geographie_l03_problemes_developpement_economique",
  "terminale_hg_geographie_t2_l01_fondements_developpement_coree_du_sud",
  "terminale_hg_geographie_t3_l01_cedeao",
  "terminale_hg_geographie_t3_l02_relations_ue_acp",
  "terminale_hg_histoire_t1_l01_onu",
  "terminale_hg_histoire_t1_l02_ere_bipolarisation",
  "terminale_hg_histoire_t1_l03_monde_multipolaire",
  "terminale_hg_histoire_t2_l01_montee_nationalismes_afrique",
  "terminale_hg_histoire_t2_l02_accession_ci_independance",
  "terminale_hg_histoire_t2_l03_accession_algerie_independance",
  "terminale_hg_histoire_t2_l04_union_africaine",
  "terminale_hg_histoire_t3_l01_croyances_valeurs_monde_occidental",
  "terminale_hg_histoire_t3_l02_mutations_civilisation_negro_africaine",
  "terminale_philo_conditions_bonheur_l01_histoire_humanite",
  "terminale_philo_conditions_bonheur_l02_valeur_philosophie",
  "terminale_philo_conditions_bonheur_l03_progres_bonheur",
  "terminale_philo_conditions_connaissance_l01_langage_verite",
  "terminale_philo_conditions_connaissance_l02_connaissance_scientifique",
  "terminale_philo_conditions_liberte_l01_connaissance_homme",
  "terminale_philo_conditions_liberte_l02_vie_en_societe",
  "terminale_philo_conditions_liberte_l03_dieu_religion",
  "terminale_philo_methodologie_l01_dissertation",
  "terminale_philo_methodologie_l02_commentaire_texte"
];

export const GENERATED_SCENES: Record<string, GeneratedScene> = {
  "premiere_a1_hg_geographie_t1_l01_dynamisme_demographique_ci_p01_q3": {
    "title": "Une croissance lente de la population",
    "caption": "De 1920 à 1960, la population passe de 2 millions à 3,78 millions d'habitants avec une pente de croissance faible.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "1920-1960"
    }
  },
  "premiere_a1_hg_geographie_t1_l01_dynamisme_demographique_ci_p03_q2": {
    "title": "La pyramide des âges ivoirienne",
    "caption": "La pyramide des âges de la Côte d'Ivoire présente une forme triangulaire avec une base très large.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "graphique",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "Base large"
    }
  },
  "premiere_a1_hg_geographie_t1_l01_dynamisme_demographique_ci_p06_q1": {
    "title": "Améliorer la qualité de la vie",
    "caption": "Le planning familial permet d'espacer les naissances pour mieux maîtriser la croissance démographique.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "medecin",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "fiole",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Espacer les naissances !"
      },
      "sign": "Planning"
    }
  },
  "premiere_a1_hg_geographie_t1_l02_croissance_demographique_mondiale_p01_q1": {
    "title": "Le premier milliard",
    "caption": "La population mondiale atteint un milliard d'habitants vers 1800, marquant le début de la croissance.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "montre",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        },
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "1 milliard vers 1800 !"
      },
      "sign": "1800 : 1 Milliard"
    }
  },
  "premiere_a1_hg_geographie_t1_l02_croissance_demographique_mondiale_p02_q2": {
    "title": "Pays développés",
    "caption": "Dans les pays développés, la transition démographique est achevée et la croissance est lente.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "femme_politique",
          "pose": "parle",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "graphique",
          "place": "fond"
        },
        {
          "kind": "ordinateur",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La croissance est lente ici."
      },
      "sign": "Croissance lente"
    }
  },
  "premiere_a1_hg_geographie_t1_l02_croissance_demographique_mondiale_p04_q2": {
    "title": "Premier foyer",
    "caption": "L'Asie de l'Est constitue le premier foyer de peuplement de la planète.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "content",
          "skin": "moyen",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "fond"
        },
        {
          "kind": "globe",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'Asie de l'Est est un grand foyer."
      },
      "sign": "Asie de l'Est"
    }
  },
  "premiere_a1_hg_geographie_t2_l01_urbanisation_cote_ivoire_p03_q5": {
    "title": "Abidjan, une mégalopole",
    "caption": "Abidjan est une très grande ville par sa taille, son étendue et sa population, illustrant la mégalopole ivoirienne.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Abidjan est une grande métropole !"
      }
    }
  },
  "premiere_a1_hg_geographie_t2_l02_urbanisation_france_p01_q6": {
    "title": "Le tournant de 1931",
    "caption": "En 1931, les citadins deviennent plus nombreux que les ruraux en France.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "graphique",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Plus de citadins en 1931 !"
      },
      "sign": "1931"
    }
  },
  "premiere_a1_hg_geographie_t2_l02_urbanisation_france_p03_q2": {
    "title": "La ville de Paris",
    "caption": "La ville de Paris compte vingt arrondissements et environ 2,1 millions d'habitants.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "reflechit",
          "mood": "neutre",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Paris compte 20 arrondissements."
      },
      "sign": "2,1 millions"
    }
  },
  "premiere_a1_hg_geographie_t2_l02_urbanisation_france_p06_q5": {
    "title": "Contre les embouteillages",
    "caption": "Pour lutter contre les embouteillages, on renforce les transports en commun comme le métro.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "debout",
          "mood": "content",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "ordinateur",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Il faut renforcer les métros !"
      },
      "sign": "Transport"
    }
  },
  "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q6": {
    "title": "Le village, base administrative",
    "caption": "Le village est la circonscription administrative de base en Côte d'Ivoire.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "chef_traditionnel",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "ecrit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "case",
          "place": "fond"
        },
        {
          "kind": "palmier",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "Village"
    }
  },
  "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q2": {
    "title": "L'élection du maire",
    "caption": "Le maire est élu par les conseillers municipaux qui représentent les citoyens.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pieces",
          "place": "centre"
        },
        {
          "kind": "drapeau_ci",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le maire est élu par le conseil municipal."
      },
      "sign": "Mairie"
    }
  },
  "premiere_a1_hg_geographie_t3_l02_amenagement_territoire_ci_p02_q2": {
    "title": "Plantations géantes",
    "caption": "Les sociétés d'État créent de grandes plantations de palmier à huile et d'hévéa dans la zone forestière.",
    "spec": {
      "setting": "foret",
      "characters": [
        {
          "costume": "paysan",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "palmier",
          "place": "droite"
        },
        {
          "kind": "plante",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Voici nos plantations de palmier à huile !"
      }
    }
  },
  "premiere_a1_hg_geographie_t3_l02_amenagement_territoire_ci_p03_q4": {
    "title": "Le port de San-Pédro",
    "caption": "Le port de San-Pédro a été créé dans le cadre de l'aménagement de la région du Sud-Ouest.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "navire",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le port de San-Pédro dynamise la région !"
      },
      "sign": "PORT DE SAN-PEDRO"
    }
  },
  "premiere_a1_hg_geographie_t4_l01_facteurs_mondialisation_p01_q3": {
    "title": "Le paysan ivoirien et le marché mondial",
    "caption": "Le paysan ivoirien subit dans son champ les variations du cours du café fixé sur les marchés boursiers étrangers.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "reflechit",
          "mood": "triste",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_geographie_t4_l01_facteurs_mondialisation_p04_q5": {
    "title": "La révolution informatique",
    "caption": "Ordinateurs, fax, satellites et Internet relient partout dans le monde les décideurs et les entrepreneurs.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "ecrit",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "ordinateur",
          "place": "centre"
        },
        {
          "kind": "telephone",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_geographie_t4_l01_facteurs_mondialisation_p06_q6": {
    "title": "Le poids des firmes multinationales",
    "caption": "Les firmes multinationales réalisent par leurs ventes environ la moitié des échanges extérieurs de la planète.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "montre",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "gauche"
        },
        {
          "kind": "graphique",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_geographie_t4_l02_consequences_mondialisation_p01_q1": {
    "title": "La Triade mondiale",
    "caption": "La Triade regroupe les trois grands pôles développés : les États-Unis, l'Union européenne et le Japon.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "skin": "moyen",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La Triade domine les échanges mondiaux !"
      }
    }
  },
  "premiere_a1_hg_geographie_t4_l02_consequences_mondialisation_p04_q5": {
    "title": "Des produits moins chers",
    "caption": "Les produits fabriqués à bas coût, comme les téléphones venus de Chine, sont moins chers pour les consommateurs.",
    "spec": {
      "setting": "marche",
      "characters": [
        {
          "costume": "commercante",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        },
        {
          "costume": "eleve_fille",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "telephone",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "Les téléphones sont plus abordables !"
      }
    }
  },
  "premiere_a1_hg_geographie_t4_l02_consequences_mondialisation_p05_q3": {
    "title": "La dépendance au cacao",
    "caption": "Beaucoup de pays en développement dépendent d'un ou deux produits primaires, comme le cacao ou le pétrole.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "paysan",
          "pose": "reflechit",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Nos revenus dépendent trop du cacao."
      }
    }
  },
  "premiere_a1_hg_histoire_t1_l01_essor_capitalisme_p04_q5": {
    "title": "La taylorisation",
    "caption": "La taylorisation divise le travail en tâches simples et complémentaires pour augmenter le rendement dans les usines.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "debout",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "fond"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_histoire_t1_l02_revolutions_industrielles_p03_q5": {
    "title": "Louis Pasteur et la science",
    "caption": "Louis Pasteur dans son laboratoire avec une fiole, symbolisant les découvertes scientifiques du XIXe siècle.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "debout",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "microscope",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "1885"
    }
  },
  "premiere_a1_hg_histoire_t1_l02_revolutions_industrielles_p04_q6": {
    "title": "L'exode rural",
    "caption": "Un paysan quitte les travaux des champs pour se diriger vers les usines des villes industrielles.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "marche",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_histoire_t1_l02_revolutions_industrielles_p05_q3": {
    "title": "L'invention du téléphone",
    "caption": "Graham Bell avec le téléphone, l'une des inventions majeures de la seconde révolution industrielle en 1876.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "savant",
          "pose": "parle",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "telephone",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "1876"
    }
  },
  "premiere_a1_hg_histoire_t2_l01_imperialisme_congres_berlin_p04_q6": {
    "title": "Le partage de l'Afrique",
    "caption": "Une caricature montre Bismarck découpant un gâteau représentant l'Afrique devant des diplomates européens réunis au congrès de Berlin.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le gâteau Afrique est partagé !"
      },
      "sign": "1884-1885"
    }
  },
  "premiere_a1_hg_histoire_t2_l02_resistances_conquete_ci_p02_q6": {
    "title": "Attaque du fort de Dabou",
    "caption": "En 1891, les Adjoukrou et les Bouboury résistent en attaquant le fort de Dabou.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "villageois",
          "pose": "montre",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "fort",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "sign": "1891"
    }
  },
  "premiere_a1_hg_histoire_t2_l02_resistances_conquete_ci_p03_q2": {
    "title": "Arrestation de Samory Touré",
    "caption": "En 1898 à Guélémou, le chef résistant Samory Touré est capturé.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "chef_traditionnel",
          "pose": "triste",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "soldat_colonial",
          "pose": "debout",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "case",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "1898"
    }
  },
  "premiere_a1_hg_histoire_t2_l02_resistances_conquete_ci_p04_q4": {
    "title": "Binger à Kong",
    "caption": "L'explorateur Binger propose un traité de protectorat au roi de Kong.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "explorateur",
          "pose": "montre",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "roi_africain",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "case",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Voici le traité de protectorat."
      }
    }
  },
  "premiere_a1_hg_histoire_t2_l03_colonisation_cote_ivoire_p03_q1": {
    "title": "Le wharf colonial",
    "caption": "Le wharf permettait de charger et décharger les navires sur le littoral ivoirien.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "colon_europeen",
          "pose": "montre",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite"
        },
        {
          "costume": "ouvrier",
          "pose": "marche",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "navire",
          "place": "fond"
        },
        {
          "kind": "palmier",
          "place": "gauche"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_histoire_t2_l03_colonisation_cote_ivoire_p03_q5": {
    "title": "Le travail forcé",
    "caption": "Le travail forcé exigeait des prestations gratuites et obligatoires de la population.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "soldat_colonial",
          "pose": "montre",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        },
        {
          "costume": "paysan",
          "pose": "triste",
          "mood": "triste",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "plante",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "premiere_a1_hg_histoire_t2_l03_colonisation_cote_ivoire_p04_q2": {
    "title": "Introduction du café et du cacao",
    "caption": "Le café est introduit en Côte d'Ivoire en 1881, marquant le début des cultures d'exportation.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "centre"
        },
        {
          "kind": "arbre",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "1881"
    }
  },
  "premiere_a1_hg_histoire_t3_l01_premiere_guerre_mondiale_p04_q5": {
    "title": "Les tirailleurs africains",
    "caption": "Des milliers de soldats africains ont combattu en Europe durant la Première Guerre mondiale.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "soldat_colonial",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "soldat_colonial",
          "pose": "marche",
          "mood": "determine",
          "skin": "brun",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "fort",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "1914-1918"
    }
  },
  "premiere_a1_hg_histoire_t3_l01_premiere_guerre_mondiale_p06_q5": {
    "title": "Le Diktat de Versailles",
    "caption": "Le traité de Versailles est considéré par l'Allemagne comme une paix imposée et humiliante.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "lit",
          "mood": "triste",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "C'est un Diktat imposé !"
      },
      "sign": "1919"
    }
  },
  "premiere_a1_hg_histoire_t3_l01_premiere_guerre_mondiale_p06_q6": {
    "title": "La création de la SDN",
    "caption": "La Société des Nations est créée après la guerre pour maintenir la paix dans le monde.",
    "spec": {
      "setting": "tribunal",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Maintenons la paix entre les nations !"
      },
      "sign": "SDN"
    }
  },
  "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q1": {
    "title": "Création du mot génocide",
    "caption": "En 1944, le juriste Raphaël Lemkin crée le mot génocide pour qualifier les crimes de masse.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "savant",
          "pose": "ecrit",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "1944"
    }
  },
  "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q3": {
    "title": "Le camp d'Auschwitz",
    "caption": "Auschwitz-Birkenau, en Pologne occupée, est le plus grand camp d'extermination nazi.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "soldat_colonial",
          "pose": "debout",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "fort",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "AUSCHWITZ"
    }
  },
  "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q3": {
    "title": "La Cour pénale internationale",
    "caption": "La Cour pénale internationale, qui siège à La Haye, juge les génocides et les crimes contre l'humanité.",
    "spec": {
      "setting": "tribunal",
      "characters": [
        {
          "costume": "juge",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "balance",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "CPI"
    }
  },
  "premiere_philo_histoire_l06_periode_antique_p02_q1": {
    "title": "L'image du fleuve d'Héraclite",
    "caption": "Héraclite illustre le mouvement et le changement perpétuel par l'eau du fleuve qui coule sans cesse.",
    "spec": {
      "setting": "fleuve",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "marche",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "arbre",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le fleuve coule, tout change sans cesse."
      }
    }
  },
  "premiere_philo_histoire_l06_periode_antique_p05_q1": {
    "title": "La précepte de Socrate",
    "caption": "Socrate invite chaque individu à rechercher la sagesse en commençant par la connaissance de soi-même.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Connais-toi toi-même."
      }
    }
  },
  "premiere_philo_histoire_l06_periode_antique_p09_q3": {
    "title": "La distinction stoïcienne d'Épictète",
    "caption": "Épictète explique que la liberté et la paix de l'âme dépendent du contrôle de nos propres jugements.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "citoyen_grec",
          "pose": "lit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "gauche",
          "holding": "parchemin"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Nos jugements dépendent de nous."
      }
    }
  },
  "premiere_philo_histoire_l07_moyen_age_renaissance_p01_q3": {
    "title": "Saint Augustin né en Algérie",
    "caption": "Saint Augustin est né à Thagaste, en Algérie actuelle, au cours d'une période qui relie l'Antiquité tardive et le Moyen Âge.",
    "spec": {
      "setting": "palais",
      "characters": [
        {
          "costume": "religieux",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "fonce",
          "holding": "plume"
        }
      ],
      "props": [],
      "time": "jour",
      "sign": "354-430"
    }
  },
  "premiere_philo_histoire_l07_moyen_age_renaissance_p03_q2": {
    "title": "Foi et raison chez Thomas d'Aquin",
    "caption": "Pour les penseurs médiévaux comme saint Thomas d'Aquin, la lumière de la foi et celle de la raison sont complémentaires et viennent toutes deux de Dieu.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "religieux",
          "pose": "montre",
          "mood": "content",
          "skin": "tres_clair",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Foi et raison sont complémentaires !"
      }
    }
  },
  "premiere_philo_histoire_l07_moyen_age_renaissance_p04_q1": {
    "title": "Machiavel et Le Prince",
    "caption": "Nicolas Machiavel, penseur florentin de la Renaissance, analyse les conditions de l'exercice et de la conservation du pouvoir politique.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "tres_clair",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "soir",
      "sign": "1513"
    }
  },
  "premiere_philo_histoire_l08_periode_moderne_p02_q7": {
    "title": "Le rationalisme de Descartes",
    "caption": "René Descartes, philosophe rationaliste, affirme que seule la raison permet à l'homme d'accéder à la vraie connaissance.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La raison seule donne la connaissance."
      },
      "sign": "Rationalisme"
    }
  },
  "premiere_philo_histoire_l08_periode_moderne_p03_q1": {
    "title": "John Locke et la table rase",
    "caption": "John Locke soutient qu'à la naissance l'esprit est une table rase, vide de toute idée avant l'expérience.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "parle",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'âme est une table rase."
      },
      "sign": "Table rase"
    }
  },
  "premiere_philo_histoire_l08_periode_moderne_p06_q3": {
    "title": "Le criticisme de Kant",
    "caption": "Emmanuel Kant montre que la connaissance exige l'union des pensées et des intuitions sensibles.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "montre",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "cerveau",
          "place": "centre"
        }
      ],
      "time": "soir",
      "bubble": {
        "from": 0,
        "text": "Pensées et intuitions unies !"
      },
      "sign": "Criticisme"
    }
  },
  "premiere_philo_histoire_l09_periode_contemporaine_p01_q4": {
    "title": "Gaston Bachelard, savant et philosophe",
    "caption": "Gaston Bachelard, philosophe et épistémologue français, étudie la science et l'esprit.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "loupe"
        }
      ],
      "props": [
        {
          "kind": "microscope",
          "place": "gauche"
        },
        {
          "kind": "livre_ouvert",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Rien n'est donné, tout est construit."
      },
      "sign": "Bachelard"
    }
  },
  "premiere_philo_histoire_l09_periode_contemporaine_p02_q1": {
    "title": "Science contre opinion",
    "caption": "Bachelard montre que la science s'oppose à l'opinion, qui a toujours tort.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "savant",
          "pose": "montre",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        },
        {
          "kind": "ampoule",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'opinion a toujours tort."
      },
      "sign": "Obstacle"
    }
  },
  "premiere_philo_histoire_l09_periode_contemporaine_p04_q4": {
    "title": "L'existence précède l'essence",
    "caption": "Jean-Paul Sartre enseigne que chez l'homme, l'existence précède l'essence.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "parle",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "ecrit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "Sartre"
    }
  },
  "premiere_philo_methodologie_l02_introduction_commentaire_p01_q2": {
    "title": "Éléments de l'introduction",
    "caption": "L'introduction du commentaire philosophique réunit le thème, le problème, la thèse et la structure logique.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Thème, problème, thèse et structure."
      },
      "sign": "Introduction"
    }
  },
  "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q2": {
    "title": "La conclusion en un seul paragraphe",
    "caption": "La conclusion d'un commentaire de texte se rédige en un seul paragraphe, enchaînant le bilan de la discussion puis la position personnelle.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "ecrit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Bilan puis position !"
      }
    }
  },
  "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q2": {
    "title": "La prise de position personnelle",
    "caption": "La position personnelle exprime la réflexion de l'élève sur le problème posé, comme sur la propreté du corps et de l'esprit.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "moyen",
          "facing": "droite",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "À notre sens..."
      }
    }
  },
  "premiere_philo_methodologie_l05_introduction_dissertation_p01_q6": {
    "title": "Les trois étapes de l'introduction",
    "caption": "L'introduction se compose de trois moments clés : l'amorce, le problème et enfin les aspects.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Amorce, problème et aspects !"
      }
    }
  },
  "premiere_philo_methodologie_l05_introduction_dissertation_p02_q1": {
    "title": "L'amorce sur le progrès technique",
    "caption": "L'amorce pose le constat du progrès vertigineux des sciences et techniques dans la vie quotidienne.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "montre",
          "mood": "content",
          "skin": "moyen",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "fiole",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le progrès des sciences est vertigineux."
      },
      "sign": "Le progrès"
    }
  },
  "premiere_philo_methodologie_l05_introduction_dissertation_p03_q4": {
    "title": "Amorce sur autrui et les conflits",
    "caption": "L'amorce du sujet sur autrui montre que l'autre peut menacer mais aussi partager l'entraide.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "parle",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "livre"
        },
        {
          "costume": "eleve_fille",
          "pose": "ecrit",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'autre est-il mon ennemi ?"
      }
    }
  },
  "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q3": {
    "title": "La science de l'espace",
    "caption": "Aujourd'hui, la géographie décrit et explique les phénomènes naturels et humains à la surface de la terre.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "holding": "livre"
        },
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "neutre",
          "skin": "fonce",
          "holding": "loupe"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "droite"
        },
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "C'est la science de l'espace !"
      }
    }
  },
  "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q3": {
    "title": "La géomorphologie",
    "caption": "La géomorphologie est la branche de la géographie physique qui étudie le relief, comme les montagnes.",
    "spec": {
      "setting": "montagne",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "brun"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "centre"
        },
        {
          "kind": "plante",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "sign": "Relief"
    }
  },
  "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q2": {
    "title": "L'observation indirecte",
    "caption": "L'observation d'un phénomène peut se faire de manière indirecte à travers des photographies ou des cartes.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "lit",
          "mood": "content",
          "skin": "moyen"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        },
        {
          "kind": "cacao",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "Observation"
    }
  },
  "seconde_a_hg_geographie_l02_planete_terre_p01_q6": {
    "title": "Copernic et l'héliocentrisme",
    "caption": "Nicolas Copernic démontre au XVIe siècle que le Soleil est au centre du système solaire.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "savant",
          "pose": "montre",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "soleil",
          "place": "centre"
        },
        {
          "kind": "globe",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le Soleil est au centre !"
      }
    }
  },
  "seconde_a_hg_geographie_l02_planete_terre_p02_q5": {
    "title": "Thalès et la platitude",
    "caption": "Thalès de Milet pensait que la Terre était un disque plat posé sur l'eau.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "montre",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La Terre est un disque plat sur l'eau !"
      }
    }
  },
  "seconde_a_hg_geographie_l02_planete_terre_p05_q7": {
    "title": "Les saisons en Côte d'Ivoire",
    "caption": "En Côte d'Ivoire, les saisons sont rythmées par les pluies et la période sèche.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pluie",
          "place": "centre"
        },
        {
          "kind": "cacao",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "C'est la pluie qui fait les saisons !"
      }
    }
  },
  "seconde_a_hg_geographie_l02_planete_terre_p06_q1": {
    "title": "Wegener et la dérive des continents",
    "caption": "En 1912, Alfred Wegener émet l'hypothèse que les continents se sont déplacés au cours du temps.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "savant",
          "pose": "montre",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Les continents s'emboîtent !"
      },
      "sign": "1912"
    }
  },
  "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q1": {
    "title": "Le globe terrestre",
    "caption": "Le globe terrestre est une représentation sphérique et réduite de la Terre, et c'est la plus fidèle.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "montre",
          "mood": "content",
          "skin": "moyen",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche",
          "child": true
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "centre"
        },
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q3": {
    "title": "L'echelle de la carte",
    "caption": "L'échelle est le rapport entre une longueur sur la carte et la longueur correspondante sur le terrain.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "lit",
          "mood": "neutre",
          "skin": "brun",
          "facing": "gauche",
          "child": true
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "centre"
        },
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        },
        {
          "kind": "graphique",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q2": {
    "title": "La courbe de niveau",
    "caption": "Une courbe de niveau est une ligne imaginaire qui relie tous les points de même altitude.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "parle",
          "mood": "content",
          "skin": "moyen",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "montagne",
          "place": "fond"
        },
        {
          "kind": "carte",
          "place": "centre"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_geographie_t2_l01_milieu_subequatorial_p05_q3": {
    "title": "Les deux ports",
    "caption": "Le milieu subéquatorial abrite les grands ports d'Abidjan et San Pedro, indispensables au commerce extérieur.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "marin_europeen",
          "pose": "debout",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "navire",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Les ports du sud accueillent les navires !"
      }
    }
  },
  "seconde_a_hg_geographie_t2_l01_milieu_subequatorial_p06_q2": {
    "title": "Le premier producteur de cacao",
    "caption": "La Côte d'Ivoire est le premier producteur mondial de cacao, cultivé dans le milieu subéquatorial.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "paysan",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "centre"
        },
        {
          "kind": "arbre",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le cacao est la richesse de notre sol !"
      },
      "sign": "2,1M tonnes"
    }
  },
  "seconde_a_hg_geographie_t2_l01_milieu_subequatorial_p06_q3": {
    "title": "La pêche thonière",
    "caption": "Le port d'Abidjan est le premier port thonier d'Afrique grâce à une pêche active.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "pecheur",
          "pose": "debout",
          "mood": "content",
          "skin": "brun",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "poisson",
          "place": "centre"
        },
        {
          "kind": "navire",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Abidjan est le premier port thonier !"
      }
    }
  },
  "seconde_a_hg_geographie_t2_l02_milieu_tropical_p01_q4": {
    "title": "Relief de plateaux",
    "caption": "Le relief du milieu tropical est monotone avec des plateaux étagés de 300 à 900 mètres d'altitude.",
    "spec": {
      "setting": "savane",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "montagne",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "300 - 900 m"
    }
  },
  "seconde_a_hg_geographie_t2_l02_milieu_tropical_p02_q5": {
    "title": "La savane et forêts galeries",
    "caption": "La végétation est dominée par la savane arborée avec des forêts galeries le long des cours d'eau.",
    "spec": {
      "setting": "savane",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "palmier",
          "place": "droite"
        },
        {
          "kind": "plante",
          "place": "gauche"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_geographie_t2_l02_milieu_tropical_p04_q2": {
    "title": "Cultures commerciales",
    "caption": "L'agriculture commerciale produit pour vendre et exporter, notamment le coton et l'anacarde.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "sign": "Coton"
    }
  },
  "seconde_a_hg_geographie_t2_l02_milieu_tropical_p05_q5": {
    "title": "L'artisanat local",
    "caption": "L'artisanat est riche et varié dans le nord, avec par exemple les potières de Katiola.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "villageoise",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "urne",
          "place": "gauche"
        },
        {
          "kind": "case",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'artisanat est très riche !"
      },
      "sign": "Katiola"
    }
  },
  "seconde_a_hg_geographie_t2_l03_environnement_menace_p03_q5": {
    "title": "L'érosion côtière à Lahou-Kpanda",
    "caption": "L'érosion côtière ronge le littoral ivoirien, menaçant des villages comme Lahou-Kpanda.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "pecheur",
          "pose": "triste",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "villageoise",
          "pose": "montre",
          "mood": "triste",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pirogue",
          "place": "gauche"
        },
        {
          "kind": "palmier",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "Lahou-Kpanda"
    }
  },
  "seconde_a_hg_geographie_t2_l03_environnement_menace_p05_q1": {
    "title": "Le reboisement avec la SODEFOR",
    "caption": "La SODEFOR replante des arbres pour préserver et reconstituer les forêts classées.",
    "spec": {
      "setting": "foret",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "arbre",
          "place": "droite"
        },
        {
          "kind": "plante",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "SODEFOR"
    }
  },
  "seconde_a_hg_geographie_t2_l03_environnement_menace_p06_q2": {
    "title": "Les gestes éco-citoyens",
    "caption": "Adopter de bons gestes quotidiens en jetant ses déchets aux endroits prévus protège le milieu urbain.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "marche",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_fille",
          "pose": "salue",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Gardons notre ville propre !"
      }
    }
  },
  "seconde_a_hg_geographie_t3_l01_milieux_biogeographiques_p02_q6": {
    "title": "Le climat désertique",
    "caption": "Le climat désertique est marqué par d'immenses sécheresses et très peu de précipitations.",
    "spec": {
      "setting": "desert",
      "characters": [
        {
          "costume": "marchand_arabe",
          "pose": "marche",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "chameau",
          "place": "droite"
        },
        {
          "kind": "soleil",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Il pleut moins de 250 mm par an ici."
      },
      "sign": "250 mm / an"
    }
  },
  "seconde_a_hg_geographie_t3_l01_milieux_biogeographiques_p04_q4": {
    "title": "La savane tropicale",
    "caption": "La savane est un paysage végétal dominé par de hautes herbes et des arbres dispersés.",
    "spec": {
      "setting": "savane",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "arbre",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La savane a surtout de hautes herbes !"
      }
    }
  },
  "seconde_a_hg_geographie_t3_l01_milieux_biogeographiques_p06_q1": {
    "title": "L'agriculture extensive",
    "caption": "Dans la zone chaude, l'agriculture reste largement extensive et manuelle.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "plante",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "On cultive de grandes surfaces à la main."
      }
    }
  },
  "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q4": {
    "title": "Pollution et gaz à effet de serre",
    "caption": "Les usines rejettent du gaz carbonique (CO2), un gaz à effet de serre majeur.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "reflechit",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "surpris",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "CO2"
    }
  },
  "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q4": {
    "title": "Lahou-Kpanda menacée par la mer",
    "caption": "En Côte d'Ivoire, la localité de Lahou-Kpanda voit ses côtes grignotées par la montée des eaux.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "pecheur",
          "pose": "triste",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "triste",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pirogue",
          "place": "gauche"
        },
        {
          "kind": "case",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "LAHOU-KPANDA"
    }
  },
  "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q4": {
    "title": "Le premier Sommet de la Terre (1992)",
    "caption": "Réunis à Rio de Janeiro en 1992, les dirigeants s'engagent à réduire les gaz à effet de serre.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "femme_politique",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "moyen",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "centre"
        },
        {
          "kind": "carte",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "sign": "RIO 1992"
    }
  },
  "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q1": {
    "title": "L'origine du mot histoire",
    "caption": "Le mot histoire vient du grec historia, qui signifie enquête et recherche pour comprendre le passé.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite",
          "holding": "parchemin"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Historia signifie enquête et recherche."
      },
      "sign": "Historia"
    }
  },
  "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q5": {
    "title": "Un repère de notre histoire",
    "caption": "L'indépendance de la Côte d'Ivoire a été proclamée le 7 août 1960, un événement majeur.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "drapeau"
        },
        {
          "costume": "eleve_fille",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "drapeau_ci",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "7 août 1960 !"
      },
      "sign": "07/08/1960"
    }
  },
  "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q4": {
    "title": "La tolérance",
    "caption": "En faisant connaître les civilisations du passé, l'histoire développe le respect des autres.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "content",
          "skin": "moyen",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "ecrit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'histoire enseigne le respect des autres."
      },
      "sign": "Tolérance"
    }
  },
  "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q5": {
    "title": "Le rôle du griot",
    "caption": "Le griot transmet oralement l'histoire et la généalogie de son peuple de génération en génération.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "griot",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "enfant",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche",
          "child": true
        }
      ],
      "props": [
        {
          "kind": "case",
          "place": "fond"
        },
        {
          "kind": "arbre",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Écoutez le récit des grands rois !"
      }
    }
  },
  "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q6": {
    "title": "Le carbone 14 en laboratoire",
    "caption": "Les sciences auxiliaires comme le carbone 14 permettent de dater précisément des vestiges anciens.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "eprouvette"
        }
      ],
      "props": [
        {
          "kind": "microscope",
          "place": "droite"
        },
        {
          "kind": "fiole",
          "place": "gauche"
        },
        {
          "kind": "horloge",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le carbone 14 indique la date exacte."
      }
    }
  },
  "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q4": {
    "title": "Comprendre l'anachronisme",
    "caption": "Placer un objet moderne dans une époque ancienne est un anachronisme que l'historien doit éviter.",
    "spec": {
      "setting": "palais",
      "characters": [
        {
          "costume": "roi_africain",
          "pose": "reflechit",
          "mood": "surpris",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "telephone",
          "place": "centre"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q6": {
    "title": "La maîtrise du feu",
    "caption": "Au paléolithique, la maîtrise du feu permet de se chauffer, d'éloigner les bêtes sauvages et de cuire les aliments.",
    "spec": {
      "setting": "foret",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "feu",
          "place": "centre"
        }
      ],
      "time": "soir"
    }
  },
  "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q3": {
    "title": "L'homme producteur",
    "caption": "Au néolithique, l'homme devient producteur en pratiquant l'agriculture et l'élevage pour assurer ses réserves.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "plante",
          "place": "gauche"
        },
        {
          "kind": "vache",
          "place": "droite"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q1": {
    "title": "Le processus d'hominisation",
    "caption": "L'hominisation est le long processus d'évolution qui conduit à l'homme actuel, marqué par la bipédie et le cerveau.",
    "spec": {
      "setting": "savane",
      "characters": [
        {
          "costume": "savant",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair"
        }
      ],
      "props": [
        {
          "kind": "cerveau",
          "place": "gauche"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q1": {
    "title": "L'Afrique, berceau de l'humanité",
    "caption": "L'Afrique est le berceau de l'humanité : c'est là que l'Homme est apparu et a évolué avant de peupler le monde.",
    "spec": {
      "setting": "savane",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "centre"
        }
      ],
      "time": "jour"
    }
  },
  "seconde_a_hg_histoire_t2_l02_egypte_ancienne_p01_q5": {
    "title": "L'Égypte, un don du Nil",
    "caption": "L'historien grec Hérodote a écrit que l'Égypte est un don du Nil, car le fleuve apporte l'eau et la fertilité.",
    "spec": {
      "setting": "fleuve",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'Égypte est un don du Nil !"
      }
    }
  },
  "seconde_a_hg_histoire_t2_l02_egypte_ancienne_p04_q4": {
    "title": "Les pyramides de Gizeh",
    "caption": "Les pyramides sont les tombeaux monumentaux des pharaons construits sous l'Ancien Empire.",
    "spec": {
      "setting": "desert",
      "characters": [
        {
          "costume": "pharaon",
          "pose": "debout",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "pyramide",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "Gizeh"
    }
  },
  "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p01_q1": {
    "title": "La cité-État d'Athènes",
    "caption": "Athènes est une cité-État composée d'une ville et de son territoire indépendant avec ses propres lois.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "citoyen_grec",
          "pose": "parle",
          "mood": "content",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        },
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Une ville et son territoire !"
      },
      "sign": "ATHÈNES"
    }
  },
  "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p02_q1": {
    "title": "Le pouvoir du peuple",
    "caption": "Le mot démocratie vient de dêmos le peuple et kratos le pouvoir, désignant le pouvoir exercé par le peuple.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "citoyen_grec",
          "pose": "montre",
          "mood": "determine",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Démocratie : pouvoir du peuple !"
      },
      "sign": "DÉMOCRATIE"
    }
  },
  "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p03_q1": {
    "title": "L'Ecclésia sur la Pnyx",
    "caption": "L'Ecclésia est l'assemblée de tous les citoyens qui se réunit pour voter les lois et décider de la paix et de la guerre.",
    "spec": {
      "setting": "montagne",
      "characters": [
        {
          "costume": "citoyen_grec",
          "pose": "parle",
          "mood": "content",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "montagne",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Nous votons les lois ici !"
      },
      "sign": "ECCLESIA"
    }
  },
  "seconde_a_hg_histoire_t2_l03_democratie_athenienne_p06_q3": {
    "title": "L'héritage d'Athènes",
    "caption": "Les démocraties actuelles ont hérité d'Athènes l'égalité devant la loi, le vote et la liberté de parole.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "parle",
          "mood": "content",
          "facing": "droite"
        },
        {
          "costume": "eleve_fille",
          "pose": "ecrit",
          "mood": "content",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        },
        {
          "kind": "balance",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'égalité devant la loi !"
      },
      "sign": "HÉRITAGE"
    }
  },
  "seconde_a_hg_histoire_t3_l01_neolithique_ci_p02_q1": {
    "title": "Les amas de coquillages",
    "caption": "Sur le littoral ivoirien, la consommation de coquillages créait d'immenses amas de vestiges.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "pecheur",
          "pose": "debout",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite",
          "holding": "baton"
        },
        {
          "costume": "villageoise",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pirogue",
          "place": "gauche"
        },
        {
          "kind": "palmier",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "Voilà les amas de coquillages !"
      }
    }
  },
  "seconde_a_hg_histoire_t3_l01_neolithique_ci_p04_q2": {
    "title": "L'invention de l'agriculture",
    "caption": "Au néolithique, les hommes sélectionnent et sèment les plantes pour créer leurs premiers champs.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        },
        {
          "costume": "villageoise",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "plante",
          "place": "centre"
        },
        {
          "kind": "soleil",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "En semant, la nourriture est assurée !"
      }
    }
  },
  "seconde_a_hg_histoire_t3_l01_neolithique_ci_p05_q6": {
    "title": "Le troc entre communautés",
    "caption": "Au néolithique, le troc permet d'échanger un produit contre un autre sans utiliser de monnaie.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "villageois",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "villageoise",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "centre"
        },
        {
          "kind": "case",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Je troque mes graines contre du poisson !"
      }
    }
  },
  "seconde_a_hg_histoire_t3_l02_peuples_ci_p01_q4": {
    "title": "Quatre grands groupes",
    "caption": "La population de la Côte d'Ivoire se compose de quatre grands groupes ethniques : les Akan, les Mandé, les Krou et les Gour.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_fille",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "arbre",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "Akan, Mandé, Krou et Gour !"
      }
    }
  },
  "seconde_a_hg_histoire_t3_l02_peuples_ci_p03_q5": {
    "title": "La reine Abla Pokou",
    "caption": "Au XVIIIe siècle, après une crise de succession, Abla Pokou et ses partisans partent vers l'ouest et fondent le peuple baoulé.",
    "spec": {
      "setting": "fleuve",
      "characters": [
        {
          "costume": "reine_africaine",
          "pose": "marche",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "villageois",
          "pose": "marche",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "palmier",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Vers l'ouest pour bâtir notre avenir !"
      }
    }
  },
  "seconde_a_hg_histoire_t3_l02_peuples_ci_p06_q4": {
    "title": "Alliance à plaisanterie",
    "caption": "L'alliance à plaisanterie, ou toukpê, unit deux peuples pour préserver la paix et interdire la guerre entre eux.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "villageois",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "villageois",
          "pose": "joie",
          "mood": "content",
          "skin": "moyen",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "case",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Toukpê : entre nous, que la paix règne !"
      },
      "sign": "Paix"
    }
  },
  "terminale_hg_geographie_l01_fondements_developpement_economique_p02_q3": {
    "title": "L'agriculture dans la zone forestière",
    "caption": "Dans la zone forestière arrosée, la culture du cacao constitue le pilier majeur de l'économie d'exportation ivoirienne.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "droite"
        },
        {
          "kind": "arbre",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le cacao est notre principale richesse !"
      },
      "sign": "Zone forestiere"
    }
  },
  "terminale_hg_geographie_l01_fondements_developpement_economique_p03_q5": {
    "title": "La façade maritime et les ports",
    "caption": "Bordée par l'océan Atlantique, la Côte d'Ivoire s'appuie sur ses ports comme Abidjan et San Pedro pour le commerce international.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "pecheur",
          "pose": "montre",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "navire",
          "place": "centre"
        },
        {
          "kind": "palmier",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Nos ports ouvrent le pays au monde !"
      }
    }
  },
  "terminale_hg_geographie_l01_fondements_developpement_economique_p04_q5": {
    "title": "L'énergie thermique et le gaz",
    "caption": "Le gaz naturel extrait au large produit l'électricité dans les centrales thermiques comme Azito pour alimenter le pays.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "montre",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "ampoule",
          "place": "centre"
        },
        {
          "kind": "usine",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le gaz alimente nos centrales !"
      }
    }
  },
  "terminale_hg_geographie_l01_fondements_developpement_economique_p07_q2": {
    "title": "Le tournant des privatisations en 1990",
    "caption": "À partir de 1990, l'État se désengage des entreprises publiques pour laisser une plus grande place aux investissements privés.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'État cède la place au secteur privé."
      },
      "sign": "1990"
    }
  },
  "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q2": {
    "title": "Les cultures arborées du sud",
    "caption": "Un paysan cultive le cacao dans la région forestière du sud de la Côte d'Ivoire.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "centre"
        },
        {
          "kind": "arbre",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le cacao est une culture arborée du sud."
      }
    }
  },
  "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q4": {
    "title": "La pêche artisanale sur le littoral",
    "caption": "Un pêcheur artisanal pratique la pêche le long du littoral ivoirien.",
    "spec": {
      "setting": "cote_mer",
      "characters": [
        {
          "costume": "pecheur",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pirogue",
          "place": "gauche"
        },
        {
          "kind": "poisson",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La pêche artisanale nourrit le littoral."
      }
    }
  },
  "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q1": {
    "title": "Le commerce intérieur sur le marché",
    "caption": "Une commerçante participe au commerce intérieur sur un marché local.",
    "spec": {
      "setting": "marche",
      "characters": [
        {
          "costume": "commercante",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "gauche"
        },
        {
          "kind": "pieces",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le commerce intérieur anime nos marchés !"
      }
    }
  },
  "terminale_hg_geographie_l03_problemes_developpement_economique_p01_q7": {
    "title": "Transformer le cacao sur place",
    "caption": "La transformation locale des matières premières comme le cacao crée des emplois et augmente leur valeur.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "paysan",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "gauche"
        },
        {
          "kind": "usine",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le cacao transformé se vend plus cher !"
      }
    }
  },
  "terminale_hg_geographie_l03_problemes_developpement_economique_p04_q3": {
    "title": "Dégradation des sols par le brûlis",
    "caption": "La culture sur brûlis et les produits chimiques dégradent les sols et détruisent la végétation.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "triste",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "feu",
          "place": "centre"
        },
        {
          "kind": "arbre",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "sign": "CULTURE SUR BRULIS"
    }
  },
  "terminale_hg_geographie_l03_problemes_developpement_economique_p07_q1": {
    "title": "Promouvoir le civisme fiscal",
    "caption": "Le paiement des impôts par les citoyens donne à l'État les ressources nécessaires pour financer le développement.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "commercante",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "pieces",
          "place": "centre"
        },
        {
          "kind": "drapeau_ci",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "Payer ses impôts développe le pays !"
      }
    }
  },
  "terminale_hg_geographie_t2_l01_fondements_developpement_coree_du_sud_p01_q4": {
    "title": "Un relief très montagneux",
    "caption": "Les montagnes occupent 70 % du territoire sud-coréen, ce qui limite fortement les terres cultivables.",
    "spec": {
      "setting": "montagne",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "montre",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "montagne",
          "place": "fond"
        },
        {
          "kind": "arbre",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "sign": "70 % montagnes"
    }
  },
  "terminale_hg_geographie_t2_l01_fondements_developpement_coree_du_sud_p04_q4": {
    "title": "Priorité au capital humain",
    "caption": "Faute de ressources naturelles, la Corée du Sud investit massivement dans la formation et l'éducation.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "eleve_fille",
          "pose": "lit",
          "mood": "determine",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        },
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'éducation fonde notre développement !"
      }
    }
  },
  "terminale_hg_geographie_t2_l01_fondements_developpement_coree_du_sud_p06_q4": {
    "title": "L'essor de l'industrie lourde",
    "caption": "Pendant la troisième phase de développement, l'État investit massivement dans la grande industrie.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "montre",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "ouvrier",
          "pose": "debout",
          "mood": "content",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "fond"
        },
        {
          "kind": "graphique",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "1973-1980"
    }
  },
  "terminale_hg_geographie_t3_l01_cedeao_p01_q3": {
    "title": "Creation de la CEDEAO",
    "caption": "La CEDEAO naît le 28 mai 1975 à Lagos, au Nigeria, pour renforcer la coopération économique entre les pays de la région.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "homme_politique",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        },
        {
          "kind": "drapeau_ci",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Lagos, 1975 : naît notre communauté !"
      },
      "sign": "28 mai 1975"
    }
  },
  "terminale_hg_geographie_t3_l01_cedeao_p02_q3": {
    "title": "Libre circulation",
    "caption": "La libre circulation des personnes, des biens et des capitaux permet de commercer plus facilement d'un pays membre à l'autre.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "marche",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "commercante",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "centre"
        },
        {
          "kind": "carte",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "Circulons et commerçons librement !"
      },
      "sign": "CEDEAO"
    }
  },
  "terminale_hg_geographie_t3_l01_cedeao_p04_q2": {
    "title": "Premiere region aurifere",
    "caption": "L'Afrique de l'Ouest est devenue la première région productrice d'or d'Afrique, illustrant la grande richesse du sous-sol.",
    "spec": {
      "setting": "montagne",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "pieces",
          "place": "centre"
        },
        {
          "kind": "soleil",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Première région aurifère d'Afrique !"
      },
      "sign": "OR"
    }
  },
  "terminale_hg_geographie_t3_l01_cedeao_p05_q6": {
    "title": "Ceinture verte",
    "caption": "Le projet de ceinture verte consiste à planter des arbres pour freiner l'avancée du désert dans la région.",
    "spec": {
      "setting": "desert",
      "characters": [
        {
          "costume": "paysan",
          "pose": "marche",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "houe"
        },
        {
          "costume": "enfant",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche",
          "child": true
        }
      ],
      "props": [
        {
          "kind": "plante",
          "place": "centre"
        },
        {
          "kind": "arbre",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Plantons des arbres contre le désert !"
      },
      "sign": "Ceinture verte"
    }
  },
  "terminale_hg_geographie_t3_l02_relations_ue_acp_p01_q1": {
    "title": "Reconstruction de l'Europe",
    "caption": "Après la Seconde Guerre mondiale, les États européens s'unissent pour reconstruire une Europe affaiblie.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "ecrit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        },
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'Europe s'unit pour se reconstruire !"
      },
      "sign": "1945"
    }
  },
  "terminale_hg_geographie_t3_l02_relations_ue_acp_p02_q5": {
    "title": "Ressources du Nigeria",
    "caption": "Le Nigeria est un pays ACP disposant d'importantes réserves de pétrole et de gaz naturel.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "paysan",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "fond"
        },
        {
          "kind": "soleil",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Pétrole et gaz naturel au Nigeria !"
      },
      "sign": "Nigeria"
    }
  },
  "terminale_hg_geographie_t3_l02_relations_ue_acp_p03_q1": {
    "title": "Coopération Nord-Sud",
    "caption": "La coopération Nord-Sud lie des pays industrialisés et des pays en développement.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "salue",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "droite"
        },
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "fond"
        },
        {
          "kind": "balance",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 1,
        "text": "Partenariat entre l'UE et les ACP."
      },
      "sign": "Nord-Sud"
    }
  },
  "terminale_hg_geographie_t3_l02_relations_ue_acp_p06_q4": {
    "title": "Relation asymétrique",
    "caption": "La relation UE-ACP est asymétrique et place les pays ACP en situation de dépendance.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "commercante",
          "pose": "reflechit",
          "mood": "triste",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "balance",
          "place": "centre"
        },
        {
          "kind": "graphique",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Une relation très déséquilibrée."
      },
      "sign": "Asymétrie"
    }
  },
  "terminale_hg_histoire_t1_l01_onu_p01_q3": {
    "title": "Signature de la Charte de l'ONU",
    "caption": "Le 26 juin 1945 à San Francisco, 50 États dont 4 pays africains signent la Charte fondatrice de l'ONU.",
    "spec": {
      "setting": "palais",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "plume"
        },
        {
          "costume": "homme_politique",
          "pose": "debout",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "sign": "26 JUIN 1945"
    }
  },
  "terminale_hg_histoire_t1_l01_onu_p03_q3": {
    "title": "Kofi Annan, Secrétaire général",
    "caption": "Kofi Annan (Ghana) est le premier Africain subsaharien à devenir Secrétaire général de l'ONU (1997-2006).",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "holding": "micro"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Au service de la paix et des nations !"
      },
      "sign": "1997-2006"
    }
  },
  "terminale_hg_histoire_t1_l01_onu_p04_q5": {
    "title": "L'action des agences de l'ONU à l'école",
    "caption": "En Côte d'Ivoire, les agences de l'ONU comme le PAM et l'UNICEF soutiennent les cantines et la scolarisation.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_fille",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "drapeau_ci",
          "place": "fond"
        },
        {
          "kind": "panier",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Merci pour la cantine et nos livres !"
      },
      "sign": "PAM - UNICEF"
    }
  },
  "terminale_hg_histoire_t1_l02_ere_bipolarisation_p01_q2": {
    "title": "Le discours du « rideau de fer »",
    "caption": "En 1946 à Fulton, Winston Churchill dénonce la division de l'Europe par un rideau de fer soviétique.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "parchemin"
        }
      ],
      "props": [
        {
          "kind": "carte",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Un rideau de fer s'est abattu en Europe."
      },
      "sign": "5 mars 1946"
    }
  },
  "terminale_hg_histoire_t1_l02_ere_bipolarisation_p04_q4": {
    "title": "Création du « téléphone rouge »",
    "caption": "Après la crise des fusées de Cuba, une ligne directe est établie en 1963 entre Washington et Moscou.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "telephone",
          "place": "centre"
        },
        {
          "kind": "globe",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Une ligne directe pour éviter la guerre !"
      },
      "sign": "Juin 1963"
    }
  },
  "terminale_hg_histoire_t1_l02_ere_bipolarisation_p07_q3": {
    "title": "La chute du Mur de Berlin",
    "caption": "Le 9 novembre 1989, la chute du Mur de Berlin symbolise la fin de la division de l'Europe et l'effondrement du bloc de l'Est.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "joie",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "droite"
        },
        {
          "costume": "enseignant",
          "pose": "joie",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "chaines_brisees",
          "place": "centre"
        }
      ],
      "time": "nuit",
      "bubble": {
        "from": 0,
        "text": "Le Mur de Berlin tombe enfin !"
      },
      "sign": "9 novembre 1989"
    }
  },
  "terminale_hg_histoire_t1_l03_monde_multipolaire_p01_q6": {
    "title": "L'annonce du nouvel ordre mondial",
    "caption": "George H. W. Bush proclame en 1990-1991 un nouvel ordre mondial fondé sur la démocratie et le droit international.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "micro"
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Nous bâtissons un nouvel ordre mondial !"
      },
      "sign": "1991"
    }
  },
  "terminale_hg_histoire_t1_l03_monde_multipolaire_p05_q1": {
    "title": "Les trois âges depuis 1945",
    "caption": "L'enseignant récapitule la transition de la bipolarité vers l'unipolarité puis vers la multipolarité.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "montre",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        },
        {
          "costume": "eleve_fille",
          "pose": "reflechit",
          "mood": "content",
          "skin": "brun",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "gauche"
        },
        {
          "kind": "globe",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Depuis 2001, le monde est multipolaire."
      },
      "sign": "POST-1991"
    }
  },
  "terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p03_q3": {
    "title": "Création du SAA en 1944",
    "caption": "Félix Houphouët-Boigny crée le Syndicat agricole africain pour défendre les planteurs africains contre le travail forcé.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "paysan",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "houe"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "centre"
        },
        {
          "kind": "plante",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Défendons les planteurs et nos terres !"
      },
      "sign": "SAA 1944"
    }
  },
  "terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p04_q3": {
    "title": "Le mouvement de la Négritude",
    "caption": "Des intellectuels comme Senghor et Césaire affirment la dignité et la valeur des cultures noires contre le mépris colonial.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "ecrivain",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "plume"
        },
        {
          "costume": "ecrivain",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Affirmons la dignité de notre culture !"
      },
      "sign": "Négritude"
    }
  },
  "terminale_hg_histoire_t2_l01_montee_nationalismes_afrique_p05_q1": {
    "title": "Abolition du travail forcé en 1946",
    "caption": "La loi Houphouët-Boigny d'avril 1946 abolit le travail forcé dans toutes les colonies françaises, libérant les populations.",
    "spec": {
      "setting": "champ",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "montre",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "paysan",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "chaines_brisees",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le travail forcé est enfin supprimé !"
      },
      "sign": "11 avril 1946"
    }
  },
  "terminale_hg_histoire_t2_l02_accession_ci_independance_p01_q3": {
    "title": "La conférence de Brazzaville",
    "caption": "En 1944, de Gaulle réunit la conférence de Brazzaville pour garder les colonies en améliorant la vie des colonisés.",
    "spec": {
      "setting": "palais",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Maintenons l'empire !"
      },
      "sign": "1944"
    }
  },
  "terminale_hg_histoire_t2_l02_accession_ci_independance_p02_q2": {
    "title": "Le Syndicat agricole africain",
    "caption": "Le Syndicat agricole africain (SAA) est créé en 1944 par des planteurs africains pour défendre leurs intérêts.",
    "spec": {
      "setting": "plantation",
      "characters": [
        {
          "costume": "paysan",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "cacao",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Défendons nos planteurs !"
      },
      "sign": "SAA 1944"
    }
  },
  "terminale_hg_histoire_t2_l02_accession_ci_independance_p03_q1": {
    "title": "La fin du travail forcé",
    "caption": "Le 11 avril 1946, la loi Houphouët-Boigny supprime le travail forcé dans les colonies françaises.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "ecrit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "chaines_brisees",
          "place": "droite"
        },
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le travail forcé est aboli !"
      },
      "sign": "11 avril 1946"
    }
  },
  "terminale_hg_histoire_t2_l02_accession_ci_independance_p06_q6": {
    "title": "L'indépendance de la Côte d'Ivoire",
    "caption": "La Côte d'Ivoire proclame officiellement son indépendance le 7 août 1960 avec Houphouët-Boigny.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "joie",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "drapeau_ci",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Vive la Côte d'Ivoire !"
      },
      "sign": "7 août 1960"
    }
  },
  "terminale_hg_histoire_t2_l03_accession_algerie_independance_p01_q5": {
    "title": "Enjeu énergétique au Sahara",
    "caption": "La découverte de gisements de pétrole et de gaz au Sahara renforce la volonté de la France de conserver l'Algérie.",
    "spec": {
      "setting": "desert",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "montre",
          "mood": "surpris",
          "skin": "tres_clair"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Des gisements de pétrole et de gaz !"
      },
      "sign": "SAHARA"
    }
  },
  "terminale_hg_histoire_t2_l03_accession_algerie_independance_p04_q1": {
    "title": "Discours de De Gaulle à Alger",
    "caption": "Le 4 juin 1958, de Gaulle prononce sa célèbre formule ambiguë devant la foule à Alger.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "holding": "micro"
        }
      ],
      "props": [],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Je vous ai compris !"
      },
      "sign": "4 JUIN 1958"
    }
  },
  "terminale_hg_histoire_t2_l03_accession_algerie_independance_p05_q1": {
    "title": "Signature des accords d'Évian",
    "caption": "Le 18 mars 1962, les négociations d'Évian aboutissent au cessez-le-feu et ouvrent la voie à l'indépendance.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "clair",
          "holding": "plume"
        },
        {
          "costume": "homme_politique",
          "pose": "lit",
          "mood": "neutre",
          "skin": "tres_clair",
          "holding": "parchemin"
        }
      ],
      "props": [],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Les accords d'Évian sont signés !"
      },
      "sign": "18 MARS 1962"
    }
  },
  "terminale_hg_histoire_t2_l04_union_africaine_p02_q4": {
    "title": "Rejet des coups d'État",
    "caption": "L'UA pose comme principe fondamental le rejet des changements anticonstitutionnels de gouvernement.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "balance",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Non aux coups d'État et aux crises !"
      }
    }
  },
  "terminale_hg_histoire_t2_l04_union_africaine_p05_q6": {
    "title": "La ZLECAf",
    "caption": "La Zone de libre-échange continentale africaine vise à augmenter le commerce entre les pays africains.",
    "spec": {
      "setting": "marche",
      "characters": [
        {
          "costume": "commercante",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Ensemble pour le commerce africain !"
      },
      "sign": "ZLECAf"
    }
  },
  "terminale_hg_histoire_t3_l01_croyances_valeurs_monde_occidental_p02_q2": {
    "title": "Clisthène et la démocratie à Athènes",
    "caption": "À Athènes, Clisthène réorganise la cité pour donner le pouvoir politique à l'ensemble des citoyens.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le pouvoir appartient au peuple !"
      },
      "sign": "Athènes"
    }
  },
  "terminale_hg_histoire_t3_l01_croyances_valeurs_monde_occidental_p03_q4": {
    "title": "La Déclaration des droits de 1789",
    "caption": "La Révolution française proclame la Déclaration des droits de l'homme et du citoyen.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "montre",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "homme_politique",
          "pose": "joie",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Tous les hommes naissent libres !"
      },
      "sign": "1789"
    }
  },
  "terminale_hg_histoire_t3_l01_croyances_valeurs_monde_occidental_p06_q3": {
    "title": "Le capitaliste et l'ouvrier",
    "caption": "Dans le système capitaliste, le propriétaire des moyens de production verse un salaire à l'ouvrier.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "homme_politique",
          "pose": "parle",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite"
        },
        {
          "costume": "ouvrier",
          "pose": "debout",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "usine",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Voici votre salaire pour le travail."
      }
    }
  },
  "terminale_hg_histoire_t3_l02_mutations_civilisation_negro_africaine_p01_q4": {
    "title": "Le pouvoir royal centralisé",
    "caption": "Dans les sociétés étatiques précoloniales, le roi est un personnage sacré concentrant les pouvoirs politiques, militaires et religieux.",
    "spec": {
      "setting": "palais",
      "characters": [
        {
          "costume": "roi_africain",
          "pose": "debout",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "griot",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "parchemin"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Je détiens les pouvoirs du royaume."
      }
    }
  },
  "terminale_hg_histoire_t3_l02_mutations_civilisation_negro_africaine_p03_q5": {
    "title": "Le troc traditionnel",
    "caption": "Le troc consiste en l'échange direct de produits entre membres du village sans utiliser de monnaie.",
    "spec": {
      "setting": "marche",
      "characters": [
        {
          "costume": "paysan",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "commercante",
          "pose": "montre",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "panier",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "J'échange mes récoltes contre tes pots !"
      }
    }
  },
  "terminale_hg_histoire_t3_l02_mutations_civilisation_negro_africaine_p06_q2": {
    "title": "L'impact de l'école occidentale",
    "caption": "L'école occidentale transmet le savoir aux jeunes scolarisés, ce qui modifie l'autorité traditionnelle des anciens.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "lit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "chef_traditionnel",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche",
          "holding": "baton"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        },
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        }
      ],
      "time": "jour"
    }
  },
  "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q4": {
    "title": "La civilisation selon Senghor",
    "caption": "Pour Senghor, la civilisation représente l'ensemble des valeurs morales et techniques, c'est la culture en action.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "ecrivain",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La civilisation est la culture en action."
      }
    }
  },
  "terminale_philo_conditions_bonheur_l01_histoire_humanite_p01_q5": {
    "title": "Existence et essence selon Sartre",
    "caption": "Selon Sartre, l'homme existe d'abord dans le monde puis se définit librement par l'ensemble de ses actes.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'existence précède l'essence."
      }
    }
  },
  "terminale_philo_conditions_bonheur_l01_histoire_humanite_p02_q2": {
    "title": "Kant et l'éducation",
    "caption": "Kant affirme que c'est l'éducation qui permet à l'homme de développer pleinement sa nature humaine.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'homme ne devient homme par l'éducation."
      }
    }
  },
  "terminale_philo_conditions_bonheur_l02_valeur_philosophie_p01_q1": {
    "title": "L'amour de la sagesse",
    "caption": "Dans l'agora grecque, le philosophe cherche la sagesse au lieu de prétendre la posséder tout entière.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "citoyen_grec",
          "pose": "parle",
          "mood": "content",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le philosophe cherche la sagesse."
      }
    }
  },
  "terminale_philo_conditions_bonheur_l02_valeur_philosophie_p05_q4": {
    "title": "Les philosophes-rois",
    "caption": "Pour Platon, la cité ne connaîtra la justice que si les philosophes gouvernent ou si les rois philosophent.",
    "spec": {
      "setting": "palais",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "montre",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "citoyen_grec",
          "pose": "lit",
          "mood": "surpris",
          "skin": "clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Il faut que les philosophes soient rois !"
      }
    }
  },
  "terminale_philo_conditions_bonheur_l02_valeur_philosophie_p06_q5": {
    "title": "Sortir de l'aveuglement",
    "caption": "Descartes explique que vivre sans philosopher équivaut à garder les yeux fermés toute sa vie.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        },
        {
          "kind": "ampoule",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Sans philosopher, on a les yeux fermés."
      },
      "sign": "Descartes"
    }
  },
  "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q4": {
    "title": "Le langage humain et le dialogue",
    "caption": "Le langage humain est vivant et créatif : il est un véritable dialogue qui appelle toujours une réponse entre les interlocuteurs.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "citoyen_grec",
          "pose": "parle",
          "mood": "determine",
          "skin": "brun",
          "facing": "gauche",
          "holding": "parchemin"
        },
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "content",
          "skin": "brun",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "DIALOGUE"
    }
  },
  "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q1": {
    "title": "La vérité comme adéquation",
    "caption": "Selon la définition classique admise par Kant et Thomas d'Aquin, la vérité est l'accord de la connaissance avec son objet.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "reflechit",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        },
        {
          "kind": "globe",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "VERITE"
    }
  },
  "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q3": {
    "title": "La relativité géographique",
    "caption": "Pascal l'a montré avec force : ce que l'on tient pour vrai change d'un pays à l'autre selon les coutumes et les lieux.",
    "spec": {
      "setting": "montagne",
      "characters": [],
      "props": [
        {
          "kind": "carte",
          "place": "centre"
        },
        {
          "kind": "soleil",
          "place": "fond"
        }
      ],
      "time": "jour",
      "sign": "RELATIF"
    }
  },
  "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p01_q1": {
    "title": "La connaissance vulgaire ou doxa",
    "caption": "Platon qualifie la connaissance vulgaire de doxa, c'est-à-dire une simple opinion subjective s'arrêtant aux apparences.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "neutre",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "debout",
          "mood": "neutre",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'opinion sans preuve est la doxa."
      },
      "sign": "DOXA"
    }
  },
  "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q1": {
    "title": "L'empirisme et l'expérience",
    "caption": "Pour l'empirisme, toute notre connaissance provient de l'expérience sensible, l'esprit étant au départ une table rase.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'esprit est une table rase."
      },
      "sign": "EXPERIENCE"
    }
  },
  "terminale_philo_conditions_connaissance_l02_connaissance_scientifique_p04_q4": {
    "title": "Le savant complet",
    "caption": "Selon Claude Bernard, le savant complet unit harmonieusement la théorie et la pratique expérimentale.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "montre",
          "mood": "content",
          "skin": "moyen",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "microscope",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Théorie et expérience unies."
      },
      "sign": "SAVANT"
    }
  },
  "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q4": {
    "title": "Le Cogito de Descartes",
    "caption": "Descartes montre que la conscience de penser est la certitude première de l'homme.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Je pense, donc je suis."
      },
      "sign": "1637"
    }
  },
  "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q5": {
    "title": "L'inconscient selon Freud",
    "caption": "Freud rappelle que le moi conscient ne maîtrise pas l'ensemble du psychisme.",
    "spec": {
      "setting": "laboratoire",
      "characters": [
        {
          "costume": "savant",
          "pose": "parle",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "cerveau",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Le moi n'est pas maître dans sa maison."
      },
      "sign": "1917"
    }
  },
  "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q4": {
    "title": "La liberté selon Sartre",
    "caption": "Sartre affirme que l'homme est pleinement responsable de ses actes et de ses choix.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "ecrivain",
          "pose": "parle",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "gauche"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'homme est condamné à être libre."
      },
      "sign": "Sartre"
    }
  },
  "terminale_philo_conditions_liberte_l02_vie_en_societe_p01_q4": {
    "title": "Société naturelle ou construite",
    "caption": "Hobbes s'oppose à Aristote : pour lui, la société n'est pas naturelle mais construite par les hommes.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite"
        },
        {
          "costume": "philosophe_lumieres",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche",
          "holding": "livre"
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La société est naturelle !"
      }
    }
  },
  "terminale_philo_conditions_liberte_l02_vie_en_societe_p02_q4": {
    "title": "L'importance des autres",
    "caption": "L'écrivain Seydou Badian rappelle que l'humanisation et la vie de l'homme dépendent d'autrui.",
    "spec": {
      "setting": "village",
      "characters": [
        {
          "costume": "ecrivain",
          "pose": "parle",
          "mood": "determine",
          "skin": "fonce",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "villageois",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "case",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'homme n'est rien sans les autres."
      }
    }
  },
  "terminale_philo_conditions_liberte_l02_vie_en_societe_p03_q3": {
    "title": "Le but de l'État chez Spinoza",
    "caption": "Spinoza affirme que la véritable fin de l'État est de garantir la liberté des citoyens.",
    "spec": {
      "setting": "tribunal",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "montre",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "parchemin"
        },
        {
          "costume": "juge",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "tres_clair",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "balance",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La fin de l'État est la liberté !"
      }
    }
  },
  "terminale_philo_conditions_liberte_l02_vie_en_societe_p04_q3": {
    "title": "La nation selon Renan",
    "caption": "Ernest Renan définit la nation comme un principe spirituel fondé sur le désir de vivre ensemble.",
    "spec": {
      "setting": "ville",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "content",
          "skin": "clair",
          "facing": "droite",
          "holding": "livre"
        },
        {
          "costume": "eleve_garcon",
          "pose": "lit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "gauche"
        },
        {
          "costume": "eleve_fille",
          "pose": "reflechit",
          "mood": "content",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "drapeau_ci",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La nation est un principe spirituel."
      }
    }
  },
  "terminale_philo_conditions_liberte_l03_dieu_religion_p02_q4": {
    "title": "Feuerbach et l'aliénation",
    "caption": "Feuerbach montre que l'homme projette en Dieu ses propres qualités fondamentales.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        },
        {
          "kind": "cerveau",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La théologie est une anthropologie !"
      }
    }
  },
  "terminale_philo_conditions_liberte_l03_dieu_religion_p04_q2": {
    "title": "Marx et la critique de la religion",
    "caption": "Karl Marx affirme que la religion endort la conscience des hommes et masque la misère.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "ecrit",
          "mood": "determine",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "plume"
        }
      ],
      "props": [
        {
          "kind": "livre_ouvert",
          "place": "centre"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La religion est l'opium du peuple."
      }
    }
  },
  "terminale_philo_conditions_liberte_l03_dieu_religion_p04_q6": {
    "title": "L'autonomie selon Kant",
    "caption": "Pour Kant, la véritable valeur morale réside dans l'autonomie de la raison.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "enseignant",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "facing": "droite"
        },
        {
          "costume": "eleve_garcon",
          "pose": "lit",
          "mood": "determine",
          "skin": "fonce",
          "facing": "gauche"
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "fond"
        },
        {
          "kind": "ampoule",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'autonomie, c'est obéir à sa raison !"
      }
    }
  },
  "terminale_philo_methodologie_l01_dissertation_p02_q3": {
    "title": "Problématiser le progrès technique",
    "caption": "L'élève s'interroge sur le paradoxe du progrès technique : facteur de développement ou menace pour l'humanité ?",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "eleve_garcon",
          "pose": "reflechit",
          "mood": "determine",
          "skin": "fonce",
          "bound": false,
          "child": false
        }
      ],
      "props": [
        {
          "kind": "tableau",
          "place": "centre"
        },
        {
          "kind": "ampoule",
          "place": "droite"
        }
      ],
      "time": "jour",
      "sign": "PARADOXE"
    }
  },
  "terminale_philo_methodologie_l01_dissertation_p05_q3": {
    "title": "L'aliénation par le travail",
    "caption": "Selon Marx, le travail industriel intensif transforme l'ouvrier en une simple marchandise privée de dignité.",
    "spec": {
      "setting": "usine",
      "characters": [
        {
          "costume": "ouvrier",
          "pose": "triste",
          "mood": "triste",
          "skin": "fonce",
          "bound": false,
          "child": false
        }
      ],
      "props": [
        {
          "kind": "horloge",
          "place": "droite"
        },
        {
          "kind": "usine",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "L'ouvrier devient une simple marchandise."
      },
      "sign": "MARX"
    }
  },
  "terminale_philo_methodologie_l01_dissertation_p05_q5": {
    "title": "La richesse des cultures",
    "caption": "La différence culturelle constitue une source d'enrichissement mutuel et non un obstacle au dialogue.",
    "spec": {
      "setting": "salle_classe",
      "characters": [
        {
          "costume": "ecrivain",
          "pose": "parle",
          "mood": "content",
          "skin": "fonce",
          "holding": "livre",
          "bound": false,
          "child": false
        },
        {
          "costume": "eleve_fille",
          "pose": "lit",
          "mood": "content",
          "skin": "fonce",
          "bound": false,
          "child": false
        }
      ],
      "props": [
        {
          "kind": "globe",
          "place": "centre"
        },
        {
          "kind": "livre_ouvert",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Si tu diffères de moi, tu m'enrichis."
      }
    }
  },
  "terminale_philo_methodologie_l02_commentaire_texte_p01_q4": {
    "title": "La thèse d'Épictète",
    "caption": "Épictète enseigne dans l'agora qu'un philosophe doit prendre soin de son corps comme de son âme.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite",
          "holding": "parchemin",
          "bound": false,
          "child": false
        },
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "neutre",
          "skin": "clair",
          "facing": "gauche",
          "bound": false,
          "child": false
        }
      ],
      "props": [
        {
          "kind": "colonnes",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Il faut soigner son corps et son âme !"
      }
    }
  },
  "terminale_philo_methodologie_l02_commentaire_texte_p04_q5": {
    "title": "Le mépris du corps chez Diogène",
    "caption": "Diogène le cynique soutient au contraire que le mépris du corps permet d'élever l'esprit.",
    "spec": {
      "setting": "agora",
      "characters": [
        {
          "costume": "philosophe_antique",
          "pose": "parle",
          "mood": "determine",
          "skin": "clair",
          "facing": "droite",
          "bound": false,
          "child": false
        },
        {
          "costume": "citoyen_grec",
          "pose": "reflechit",
          "mood": "surpris",
          "skin": "clair",
          "facing": "gauche",
          "bound": false,
          "child": false
        }
      ],
      "props": [
        {
          "kind": "cerveau",
          "place": "fond"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "Mépriser le corps élève l'esprit !"
      }
    }
  },
  "terminale_philo_methodologie_l02_commentaire_texte_p05_q2": {
    "title": "L'arbre de la philosophie",
    "caption": "Descartes compare la philosophie à un arbre dont les racines forment la métaphysique.",
    "spec": {
      "setting": "bureau",
      "characters": [
        {
          "costume": "philosophe_lumieres",
          "pose": "montre",
          "mood": "content",
          "skin": "tres_clair",
          "facing": "droite",
          "holding": "livre",
          "bound": false,
          "child": false
        }
      ],
      "props": [
        {
          "kind": "arbre",
          "place": "droite"
        }
      ],
      "time": "jour",
      "bubble": {
        "from": 0,
        "text": "La philosophie est comme un arbre !"
      }
    }
  }
};
