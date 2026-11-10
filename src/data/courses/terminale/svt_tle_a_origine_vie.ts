import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L3_Lorigine de la vie.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L03_ORIGINE_VIE: CurriculumChapter = {
  "id": "terminale_a_svt_l03_origine_vie",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : L'origine de la vie",
  "summary": "Faits paléontologiques (pechblende, fers rubanés, couches rouges, bactéries des milieux hostiles) et faits expérimentaux (soupe primitive, Miller et Urey, météorites), du minéral à la première cellule, chronologie de la vie.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT TA_L3_Lorigine de la vie.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l03_origine_vie_p01",
      "order": 1,
      "title": "Les roches racontent l'atmosphère primitive",
      "summary": "Pechblende, fers rubanés et couches rouges : l'oxygène est apparu peu à peu.",
      "conceptExplanation": "Situation : lors d'une conférence, un scientifique présente une explication scientifique de l'origine de la vie ; des religieux soutiennent le contraire. Deux hypothèses scientifiques : l'origine de la vie s'explique par des faits paléontologiques (roches, fossiles) et par des faits expérimentaux.\n\nTexte 1 (faits géologiques) :\n- des sables de rivière datant de 2,3 milliards d'années, trouvés en Amérique et en Afrique, contiennent beaucoup de pechblende (minerai d'uranium qui s'oxyde très facilement) : l'atmosphère contenait alors très peu de dioxygène (O₂) ;\n- les fers rubanés alternent des couches claires et des couches rouges : couches claires = fer ferreux déposé quand l'atmosphère était réductrice (sans O₂) ; couches rouges = oxydes de fer (hématite, magnétite) déposés pendant les saisons où les algues faisaient beaucoup de photosynthèse et produisaient de l'O₂ ;\n- on ne trouve les fers rubanés que dans les roches de plus de 2 milliards d'années ;\n- après −2 milliards d'années apparaissent les couches rouges (« redbeds ») : de l'O₂ est présent en permanence dans l'atmosphère, à environ 1 % de sa teneur actuelle ;\n- l'O₂ produit par la photosynthèse n'est plus consommé par les réactions chimiques : il envahit l'atmosphère et forme la couche d'ozone, qui protège les êtres vivants des rayons ultraviolets du Soleil.\n\nConclusion : il existe un lien étroit entre l'enrichissement de l'atmosphère en O₂ et l'évolution de la vie.",
      "keyRule": "Atmosphère primitive : réductrice, presque sans O₂ (pechblende, fers rubanés). Les algues ont produit l'O₂ (couches rouges après −2 milliards d'années), puis la couche d'ozone.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un fer rubané",
        "statement": "Un fer rubané alterne des couches claires (fer ferreux) et des couches rouges (oxydes de fer). Que nous apprend-il ?",
        "methodSteps": [
          "Fer ferreux : il se dépose quand il n'y a pas d'O₂ (atmosphère réductrice).",
          "Oxydes de fer : il faut de l'O₂, produit par la photosynthèse des algues."
        ],
        "conclusion": "L'atmosphère alternait entre des périodes sans O₂ et des périodes légèrement oxydantes, grâce aux algues."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux sortes de faits",
          "stepTheme": "Deux sortes de faits",
          "stepBadge": "Deux sortes de faits",
          "paragraphText": "L'origine de la vie peut s'expliquer par des faits paléontologiques (roches, fossiles) et par des faits expérimentaux (expériences en laboratoire).",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q1",
            "type": "mcq",
            "prompt": "Selon le cours de SVT, par quels deux types de faits scientifiques peut-on expliquer l'origine de la vie ?",
            "options": [
              "Des faits paléontologiques et des faits expérimentaux",
              "Des légendes et des rêves",
              "Des faits politiques et économiques",
              "Des faits astrologiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les roches anciennes et les expériences de laboratoire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La pechblende",
          "stepTheme": "La pechblende",
          "stepBadge": "La pechblende",
          "paragraphText": "Des sables de 2,3 milliards d'années riches en pechblende, minerai d'uranium très oxydable, montrent que l'atmosphère avait alors très peu de dioxygène.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q2",
            "type": "mcq",
            "prompt": "Des sables de rivière vieux de 2,3 milliards d'années contiennent beaucoup de pechblende, un minerai d'uranium qui s'oxyde très facilement. Que peut-on en déduire sur l'atmosphère de cette époque ?",
            "options": [
              "Elle était très riche en dioxygène",
              "Elle était très pauvre en dioxygène",
              "Elle était identique à l'atmosphère actuelle",
              "Elle n'existait pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec beaucoup d'O₂, la pechblende aurait été oxydée et détruite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les fers rubanés",
          "stepTheme": "Les fers rubanés",
          "stepBadge": "Les fers rubanés",
          "paragraphText": "Les fers rubanés alternent couches claires (fer ferreux, atmosphère réductrice) et couches rouges (oxydes de fer, présence d'O₂ produit par les algues).",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q3",
            "type": "mcq",
            "prompt": "Dans les fers rubanés (plus de 2 milliards d'années), les couches rouges sont faites d'oxydes de fer (hématite, magnétite). Que montre leur présence ?",
            "options": [
              "La présence de dioxygène, produit par la photosynthèse des algues",
              "L'absence totale de vie",
              "Une très forte teneur en méthane",
              "La présence de dinosaures"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour former des oxydes de fer, il faut de l'oxygène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Atmosphère réductrice",
          "stepTheme": "Atmosphère réductrice",
          "stepBadge": "Atmosphère réductrice",
          "paragraphText": "Une atmosphère réductrice ne contient pas (ou presque pas) de dioxygène ; une atmosphère oxydante en contient.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q4",
            "type": "mcq",
            "prompt": "Les couches claires des fers rubanés contiennent du fer ferreux, déposé quand « l'atmosphère était réductrice ». Que signifie « atmosphère réductrice » ?",
            "options": [
              "Une atmosphère sans (ou presque sans) dioxygène",
              "Une atmosphère très riche en dioxygène",
              "Une atmosphère très froide",
              "Une atmosphère sans eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le fer ferreux ne s'oxyde pas en l'absence d'O₂."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les couches rouges",
          "stepTheme": "Les couches rouges",
          "stepBadge": "Les couches rouges",
          "paragraphText": "Après −2 milliards d'années, les couches rouges (« redbeds ») montrent que l'O₂ est présent en permanence, à environ 1 % de sa teneur actuelle.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q5",
            "type": "mcq",
            "prompt": "Après −2 milliards d'années, les fers rubanés laissent place à des sables continentaux riches en oxyde de fer : les couches rouges (redbeds). Que montrent-elles ?",
            "options": [
              "Que le dioxygène est désormais présent en permanence dans l'atmosphère",
              "Que le dioxygène a disparu",
              "Que la vie a disparu",
              "Que l'atmosphère est devenue réductrice"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Environ 1 % de la teneur actuelle, mais de façon constante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La couche d'ozone",
          "stepTheme": "La couche d'ozone",
          "stepBadge": "La couche d'ozone",
          "paragraphText": "L'O₂ produit par la photosynthèse a envahi l'atmosphère et formé la couche d'ozone, qui protège les êtres vivants des rayons ultraviolets.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q6",
            "type": "mcq",
            "prompt": "Le dioxygène libéré par la photosynthèse a fini par envahir l'atmosphère. Quelle couche protectrice s'est alors formée, et contre quoi protège-t-elle ?",
            "options": [
              "La couche d'ozone, contre les rayons ultraviolets du Soleil",
              "La couche de nuages, contre la pluie",
              "La croûte terrestre, contre les volcans",
              "La couche de glace, contre le froid"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans couche d'ozone, la vie hors de l'eau serait très difficile."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Oxygène et vie",
          "stepTheme": "Oxygène et vie",
          "stepBadge": "Oxygène et vie",
          "paragraphText": "Il existe un lien étroit entre l'enrichissement de l'atmosphère en O₂ et l'évolution de la vie : plus il y a d'O₂, plus les organismes deviennent complexes.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p01_q7",
            "type": "mcq",
            "prompt": "D'après les faits paléontologiques (pechblende, fers rubanés, couches rouges), quel lien existe-t-il entre l'oxygène de l'atmosphère et la vie ?",
            "options": [
              "Aucun lien",
              "Plus l'atmosphère s'enrichit en O₂, plus on passe d'organismes unicellulaires à des organismes pluricellulaires",
              "L'O₂ a empêché toute vie",
              "La vie a disparu quand l'O₂ est apparu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion des faits paléontologiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q1",
          "type": "mcq",
          "prompt": "Selon le cours de SVT, par quels deux types de faits scientifiques peut-on expliquer l'origine de la vie ?",
          "options": [
            "Des faits paléontologiques et des faits expérimentaux",
            "Des légendes et des rêves",
            "Des faits politiques et économiques",
            "Des faits astrologiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les roches anciennes et les expériences de laboratoire."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q2",
          "type": "mcq",
          "prompt": "Des sables de rivière vieux de 2,3 milliards d'années contiennent beaucoup de pechblende, un minerai d'uranium qui s'oxyde très facilement. Que peut-on en déduire sur l'atmosphère de cette époque ?",
          "options": [
            "Elle était très riche en dioxygène",
            "Elle était très pauvre en dioxygène",
            "Elle était identique à l'atmosphère actuelle",
            "Elle n'existait pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec beaucoup d'O₂, la pechblende aurait été oxydée et détruite."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q3",
          "type": "mcq",
          "prompt": "Dans les fers rubanés (plus de 2 milliards d'années), les couches rouges sont faites d'oxydes de fer (hématite, magnétite). Que montre leur présence ?",
          "options": [
            "La présence de dioxygène, produit par la photosynthèse des algues",
            "L'absence totale de vie",
            "Une très forte teneur en méthane",
            "La présence de dinosaures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour former des oxydes de fer, il faut de l'oxygène."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q4",
          "type": "mcq",
          "prompt": "Les couches claires des fers rubanés contiennent du fer ferreux, déposé quand « l'atmosphère était réductrice ». Que signifie « atmosphère réductrice » ?",
          "options": [
            "Une atmosphère sans (ou presque sans) dioxygène",
            "Une atmosphère très riche en dioxygène",
            "Une atmosphère très froide",
            "Une atmosphère sans eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le fer ferreux ne s'oxyde pas en l'absence d'O₂."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q5",
          "type": "mcq",
          "prompt": "Après −2 milliards d'années, les fers rubanés laissent place à des sables continentaux riches en oxyde de fer : les couches rouges (redbeds). Que montrent-elles ?",
          "options": [
            "Que le dioxygène est désormais présent en permanence dans l'atmosphère",
            "Que le dioxygène a disparu",
            "Que la vie a disparu",
            "Que l'atmosphère est devenue réductrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Environ 1 % de la teneur actuelle, mais de façon constante."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q6",
          "type": "mcq",
          "prompt": "Le dioxygène libéré par la photosynthèse a fini par envahir l'atmosphère. Quelle couche protectrice s'est alors formée, et contre quoi protège-t-elle ?",
          "options": [
            "La couche d'ozone, contre les rayons ultraviolets du Soleil",
            "La couche de nuages, contre la pluie",
            "La croûte terrestre, contre les volcans",
            "La couche de glace, contre le froid"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans couche d'ozone, la vie hors de l'eau serait très difficile."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p01_q7",
          "type": "mcq",
          "prompt": "D'après les faits paléontologiques (pechblende, fers rubanés, couches rouges), quel lien existe-t-il entre l'oxygène de l'atmosphère et la vie ?",
          "options": [
            "Aucun lien",
            "Plus l'atmosphère s'enrichit en O₂, plus on passe d'organismes unicellulaires à des organismes pluricellulaires",
            "L'O₂ a empêché toute vie",
            "La vie a disparu quand l'O₂ est apparu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion des faits paléontologiques."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l03_origine_vie_p02",
      "order": 2,
      "title": "La vie dans des milieux hostiles et l'évolution",
      "summary": "Des bactéries dans l'eau bouillante et acide ; des procaryotes aux vertébrés.",
      "conceptExplanation": "Texte 2 :\n- dans les eaux chaudes et acides (90 °C, pH = 1) des geysers du parc de Yellowstone (États-Unis), on trouve des bactéries du genre Sulfolobus, de 1 à 2 µm de diamètre (le document écrit « Sulfoborus » ou « Sulforobus » : le nom exact est Sulfolobus) ;\n- les « fumeurs » des dorsales océaniques rejettent des eaux à 350 °C, riches en sulfures ; on y a trouvé des organismes très proches des premières bactéries.\nSi des bactéries vivent dans ces milieux hostiles, la vie a pu apparaître dans l'océan primitif, où les conditions étaient comparables (chaud, acide, riche en soufre).\n\nCorrection importante du document : les végétaux chlorophylliens font la photosynthèse le JOUR, à la lumière : ils absorbent le CO₂ et rejettent l'O₂. La nuit, ils respirent comme les animaux (ils absorbent l'O₂ et rejettent le CO₂). Les animaux respirent le jour ET la nuit.\n\nÉvolution de la vie (document 3) :\n- avant la vie, l'atmosphère était réductrice ;\n- l'apparition des algues enrichit l'atmosphère en O₂ et forme la couche d'ozone ;\n- on passe des procaryotes (cellules sans noyau) aux eucaryotes (cellules avec noyau), puis aux êtres pluricellulaires ;\n- de la reproduction asexuée à la reproduction sexuée ;\n- des invertébrés aquatiques aux vertébrés terrestres.",
      "keyRule": "Des bactéries vivent à 90 °C et pH = 1 (Sulfolobus) : la vie a pu naître dans l'océan primitif hostile. Évolution : procaryotes → eucaryotes → pluricellulaires ; eau → terre.",
      "formulas": [],
      "workedExample": {
        "title": "Corriger une erreur",
        "statement": "Un document affirme : « Les végétaux chlorophylliens rejettent l'O₂ la nuit, les animaux rejettent le CO₂ le jour. » Corrige.",
        "methodSteps": [
          "La photosynthèse a besoin de lumière : elle a lieu le jour.",
          "La respiration a lieu jour et nuit, chez les plantes comme chez les animaux."
        ],
        "conclusion": "Les plantes rejettent l'O₂ le jour (photosynthèse) ; plantes et animaux rejettent le CO₂ jour et nuit (respiration)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les geysers",
          "stepTheme": "Les geysers",
          "stepBadge": "Les geysers",
          "paragraphText": "Dans les eaux à 90 °C et pH = 1 des geysers de Yellowstone vivent des bactéries du genre Sulfolobus.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q1",
            "type": "mcq",
            "prompt": "On trouve des bactéries Sulfolobus dans les eaux des geysers de Yellowstone, à 90 °C et pH = 1. Que montre cette observation ?",
            "options": [
              "Que la vie est possible dans des milieux très chauds et très acides",
              "Que les bactéries meurent à 90 °C",
              "Que l'eau des geysers est pure",
              "Que la vie n'existe que dans l'eau froide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces milieux ressemblent à ceux de l'océan primitif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les fumeurs océaniques",
          "stepTheme": "Les fumeurs océaniques",
          "stepBadge": "Les fumeurs océaniques",
          "paragraphText": "Les fumeurs des dorsales océaniques rejettent des eaux à 350 °C riches en sulfures ; on y trouve des organismes proches des premières bactéries.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q2",
            "type": "mcq",
            "prompt": "Près des fumeurs des dorsales océaniques, qui rejettent des eaux à 350 °C riches en sulfures, on trouve des organismes très proches des premières bactéries. Où la vie a-t-elle donc pu apparaître ?",
            "options": [
              "Dans l'océan primitif, aux conditions comparables",
              "Dans les déserts actuels",
              "Sur la Lune",
              "Dans les glaciers"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaleur, acidité, soufre : comme dans l'océan primitif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le nom exact",
          "stepTheme": "Le nom exact",
          "stepBadge": "Le nom exact",
          "paragraphText": "Le genre de bactéries des geysers s'appelle Sulfolobus (le document écrit par erreur « Sulfoborus » ou « Sulforobus »).",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q3",
            "type": "mcq",
            "prompt": "Quel est le nom exact du genre de bactéries de 1 à 2 µm qui vit dans les eaux chaudes et acides (90 °C, pH = 1) des geysers ?",
            "options": [
              "Sulfolobus",
              "Sulfoborus",
              "Salmonella",
              "Plasmodium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Sulfo » pour le soufre, « lobus » pour sa forme lobée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Photosynthèse : le jour",
          "stepTheme": "Photosynthèse : le jour",
          "stepBadge": "Photosynthèse : le jour",
          "paragraphText": "Les végétaux chlorophylliens absorbent le CO₂ et rejettent l'O₂ le JOUR (photosynthèse, à la lumière). Le document dit « la nuit » : c'est faux.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q4",
            "type": "mcq",
            "prompt": "Un document affirme : « Les végétaux chlorophylliens consomment le CO₂ et rejettent l'O₂ la nuit. » Quelle est la correction ?",
            "options": [
              "C'est juste",
              "Ils le font le jour, à la lumière, par la photosynthèse ; la nuit, ils respirent",
              "Ils ne rejettent jamais d'O₂",
              "Ils le font seulement en hiver"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La photosynthèse a besoin de la lumière du Soleil."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Procaryotes et eucaryotes",
          "stepTheme": "Procaryotes et eucaryotes",
          "stepBadge": "Procaryotes et eucaryotes",
          "paragraphText": "On passe des procaryotes (cellules sans noyau) aux eucaryotes (cellules avec noyau), puis aux êtres pluricellulaires.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q5",
            "type": "mcq",
            "prompt": "Dans l'histoire de la vie, quel est le bon ordre d'apparition : eucaryotes, êtres pluricellulaires, procaryotes ?",
            "options": [
              "Pluricellulaires → eucaryotes → procaryotes",
              "Procaryotes → eucaryotes → pluricellulaires",
              "Eucaryotes → procaryotes → pluricellulaires",
              "Tous en même temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les procaryotes, sans noyau, sont les plus anciens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "De l'eau à la terre",
          "stepTheme": "De l'eau à la terre",
          "stepBadge": "De l'eau à la terre",
          "paragraphText": "On passe de la reproduction asexuée à la reproduction sexuée, et des invertébrés aquatiques aux vertébrés terrestres.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q6",
            "type": "mcq",
            "prompt": "Selon le document 3 sur l'évolution de la vie, comment ont évolué le mode de reproduction et le milieu de vie des animaux ?",
            "options": [
              "De la reproduction sexuée à asexuée ; de la terre à l'eau",
              "De la reproduction asexuée à sexuée ; des invertébrés aquatiques aux vertébrés terrestres",
              "Aucun changement",
              "Des vertébrés terrestres aux bactéries"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La couche d'ozone a permis la conquête des continents."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Les procaryotes",
          "stepTheme": "Les procaryotes",
          "stepBadge": "Les procaryotes",
          "paragraphText": "Les premières formes de vie connues sont des cellules isolées ou en filaments, sans vrai noyau : les procaryotes.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p02_q7",
            "type": "mcq",
            "prompt": "Les premières formes de vie connues sont des cellules isolées ou regroupées en filaments, dépourvues de noyau. Comment les appelle-t-on ?",
            "options": [
              "Des eucaryotes",
              "Des procaryotes",
              "Des vertébrés",
              "Des virus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les bactéries actuelles sont aussi des procaryotes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q1",
          "type": "mcq",
          "prompt": "On trouve des bactéries Sulfolobus dans les eaux des geysers de Yellowstone, à 90 °C et pH = 1. Que montre cette observation ?",
          "options": [
            "Que la vie est possible dans des milieux très chauds et très acides",
            "Que les bactéries meurent à 90 °C",
            "Que l'eau des geysers est pure",
            "Que la vie n'existe que dans l'eau froide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces milieux ressemblent à ceux de l'océan primitif."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q2",
          "type": "mcq",
          "prompt": "Près des fumeurs des dorsales océaniques, qui rejettent des eaux à 350 °C riches en sulfures, on trouve des organismes très proches des premières bactéries. Où la vie a-t-elle donc pu apparaître ?",
          "options": [
            "Dans l'océan primitif, aux conditions comparables",
            "Dans les déserts actuels",
            "Sur la Lune",
            "Dans les glaciers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaleur, acidité, soufre : comme dans l'océan primitif."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q3",
          "type": "mcq",
          "prompt": "Quel est le nom exact du genre de bactéries de 1 à 2 µm qui vit dans les eaux chaudes et acides (90 °C, pH = 1) des geysers ?",
          "options": [
            "Sulfolobus",
            "Sulfoborus",
            "Salmonella",
            "Plasmodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Sulfo » pour le soufre, « lobus » pour sa forme lobée."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q4",
          "type": "mcq",
          "prompt": "Un document affirme : « Les végétaux chlorophylliens consomment le CO₂ et rejettent l'O₂ la nuit. » Quelle est la correction ?",
          "options": [
            "C'est juste",
            "Ils le font le jour, à la lumière, par la photosynthèse ; la nuit, ils respirent",
            "Ils ne rejettent jamais d'O₂",
            "Ils le font seulement en hiver"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La photosynthèse a besoin de la lumière du Soleil."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q5",
          "type": "mcq",
          "prompt": "Dans l'histoire de la vie, quel est le bon ordre d'apparition : eucaryotes, êtres pluricellulaires, procaryotes ?",
          "options": [
            "Pluricellulaires → eucaryotes → procaryotes",
            "Procaryotes → eucaryotes → pluricellulaires",
            "Eucaryotes → procaryotes → pluricellulaires",
            "Tous en même temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les procaryotes, sans noyau, sont les plus anciens."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q6",
          "type": "mcq",
          "prompt": "Selon le document 3 sur l'évolution de la vie, comment ont évolué le mode de reproduction et le milieu de vie des animaux ?",
          "options": [
            "De la reproduction sexuée à asexuée ; de la terre à l'eau",
            "De la reproduction asexuée à sexuée ; des invertébrés aquatiques aux vertébrés terrestres",
            "Aucun changement",
            "Des vertébrés terrestres aux bactéries"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La couche d'ozone a permis la conquête des continents."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p02_q7",
          "type": "mcq",
          "prompt": "Les premières formes de vie connues sont des cellules isolées ou regroupées en filaments, dépourvues de noyau. Comment les appelle-t-on ?",
          "options": [
            "Des eucaryotes",
            "Des procaryotes",
            "Des vertébrés",
            "Des virus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les bactéries actuelles sont aussi des procaryotes."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l03_origine_vie_p03",
      "order": 3,
      "title": "La soupe primitive et l'expérience de Miller",
      "summary": "Oparin et Haldane imaginent, Miller et Urey fabriquent des acides aminés.",
      "conceptExplanation": "L'hypothèse d'Oparin et Haldane (années 1920) : dans les premiers océans aurait existé une « soupe primitive » de molécules organiques, formées par l'action de l'énergie (rayonnement solaire, éclairs) sur l'atmosphère initiale réductrice, faite de méthane (CH₄), d'ammoniac (NH₃), d'hydrogène et de vapeur d'eau.\nCorrection : le document écrit « Aldane » ; le savant s'appelle Haldane (John B. S. Haldane, britannique). Oparin est russe. Leurs travaux datent de 1924 (Oparin) et 1929 (Haldane).\n\nL'expérience de Miller et Urey (1953, États-Unis) :\n- dans un appareil fermé, ils reconstituent la mer primitive (ballon d'eau en ébullition) et l'atmosphère primitive (méthane, ammoniac, hydrogène, vapeur d'eau) ;\n- des électrodes produisent des étincelles électriques, comme des éclairs ;\n- un réfrigérant condense la vapeur, qui retombe dans l'« océan » ;\n- au bout de quelques jours, ils obtiennent des ACIDES AMINÉS : la glycine et l'alanine.\n\nConclusion : la synthèse de molécules organiques (constituants des êtres vivants) peut se faire à partir d'éléments minéraux, dans les conditions de la Terre primitive.\n\nRappel : les acides aminés sont les briques qui forment les protéines.",
      "keyRule": "Miller et Urey (1953) : gaz de l'atmosphère primitive + eau + étincelles électriques → acides aminés (glycine, alanine). Des molécules organiques naissent de matière minérale.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser l'expérience",
        "statement": "Dans l'appareil de Miller, quel élément imite les éclairs de l'atmosphère primitive, et que obtient-on ?",
        "methodSteps": [
          "Les deux électrodes en tungstène produisent des étincelles électriques : elles imitent les éclairs.",
          "On analyse l'eau recueillie : elle contient des acides aminés."
        ],
        "conclusion": "Les étincelles fournissent l'énergie ; on obtient de la glycine et de l'alanine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La soupe primitive",
          "stepTheme": "La soupe primitive",
          "stepBadge": "La soupe primitive",
          "paragraphText": "Oparin et Haldane supposent qu'il existait dans les premiers océans une « soupe primitive » de molécules organiques.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q1",
            "type": "mcq",
            "prompt": "Dans les années 1920, Oparin et Haldane émettent une hypothèse sur l'origine de la vie. Que supposent-ils ?",
            "options": [
              "Qu'il existait dans les premiers océans une « soupe primitive » de molécules organiques",
              "Que la vie est arrivée toute faite sur une comète",
              "Que la vie est apparue il y a 10 000 ans",
              "Que la vie est née dans les volcans éteints"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces molécules auraient été formées grâce à l'énergie du Soleil et des éclairs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'atmosphère primitive",
          "stepTheme": "L'atmosphère primitive",
          "stepBadge": "L'atmosphère primitive",
          "paragraphText": "L'atmosphère primitive imaginée par Oparin et Haldane est réductrice : méthane, ammoniac, hydrogène, vapeur d'eau, sans dioxygène.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q2",
            "type": "mcq",
            "prompt": "Quels gaz composaient l'atmosphère primitive réductrice imaginée par Oparin et Haldane, et reconstituée par Miller en 1953 ?",
            "options": [
              "Dioxygène et azote, comme aujourd'hui",
              "Méthane, ammoniac, hydrogène et vapeur d'eau",
              "Uniquement du dioxygène",
              "Du chlore et de l'hélium"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il n'y avait pas encore de dioxygène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'appareil de Miller",
          "stepTheme": "L'appareil de Miller",
          "stepBadge": "L'appareil de Miller",
          "paragraphText": "En 1953, Miller et Urey reconstituent en vase clos la mer (eau en ébullition) et l'atmosphère primitive, et y produisent des étincelles électriques.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q3",
            "type": "mcq",
            "prompt": "Dans l'appareil de Miller et Urey (1953), deux électrodes en tungstène produisent des étincelles dans le mélange de gaz. Que représentent ces étincelles ?",
            "options": [
              "Les éclairs de l'atmosphère primitive (source d'énergie)",
              "La lumière de la Lune",
              "Les volcans",
              "La pluie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles fournissent l'énergie nécessaire aux réactions."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le résultat",
          "stepTheme": "Le résultat",
          "stepBadge": "Le résultat",
          "paragraphText": "Miller et Urey obtiennent des acides aminés : la glycine et l'alanine.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q4",
            "type": "mcq",
            "prompt": "En provoquant des étincelles électriques dans un mélange de méthane, d'ammoniac, d'hydrogène et de vapeur d'eau, qu'obtiennent Miller et Urey en 1953 ?",
            "options": [
              "Des cellules vivantes",
              "Des acides aminés : glycine et alanine",
              "Du dioxygène",
              "De l'ADN complet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce ne sont pas des êtres vivants, mais des constituants du vivant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Du minéral à l'organique",
          "stepTheme": "Du minéral à l'organique",
          "stepBadge": "Du minéral à l'organique",
          "paragraphText": "L'expérience montre que la synthèse de molécules organiques peut se faire à partir d'éléments minéraux.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q5",
            "type": "mcq",
            "prompt": "Miller et Urey obtiennent de la glycine et de l'alanine à partir de gaz simples et d'eau. Que démontre leur expérience ?",
            "options": [
              "Que des molécules organiques peuvent se former à partir d'éléments minéraux",
              "Que la vie est impossible",
              "Que les acides aminés viennent seulement des êtres vivants",
              "Que l'eau est inutile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est un premier pas de l'inanimé vers le vivant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les acides aminés",
          "stepTheme": "Les acides aminés",
          "stepBadge": "Les acides aminés",
          "paragraphText": "Les acides aminés sont les briques qui forment les protéines, constituants essentiels des êtres vivants.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi l'obtention d'acides aminés (glycine, alanine) dans l'expérience de Miller est-elle importante pour expliquer l'origine de la vie ?",
            "options": [
              "Parce que les acides aminés forment les protéines, constituants du vivant",
              "Parce que les acides aminés sont des minéraux",
              "Parce que les acides aminés produisent de l'oxygène",
              "Parce qu'ils sont radioactifs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les protéines sont indispensables à toute cellule."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Haldane, pas « Aldane »",
          "stepTheme": "Haldane, pas « Aldane »",
          "stepBadge": "Haldane, pas « Aldane »",
          "paragraphText": "L'hypothèse de la soupe primitive est due au Russe Oparin (1924) et au Britannique Haldane (1929) ; le document écrit « Aldane ».",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p03_q7",
            "type": "mcq",
            "prompt": "Qui sont les deux savants des années 1920 à l'origine de l'hypothèse de la « soupe primitive » ?",
            "options": [
              "Oparin et Haldane",
              "Miller et Urey",
              "Pasteur et Darwin",
              "Mendel et Watson"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Miller et Urey ont testé leur hypothèse en 1953."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q1",
          "type": "mcq",
          "prompt": "Dans les années 1920, Oparin et Haldane émettent une hypothèse sur l'origine de la vie. Que supposent-ils ?",
          "options": [
            "Qu'il existait dans les premiers océans une « soupe primitive » de molécules organiques",
            "Que la vie est arrivée toute faite sur une comète",
            "Que la vie est apparue il y a 10 000 ans",
            "Que la vie est née dans les volcans éteints"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces molécules auraient été formées grâce à l'énergie du Soleil et des éclairs."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q2",
          "type": "mcq",
          "prompt": "Quels gaz composaient l'atmosphère primitive réductrice imaginée par Oparin et Haldane, et reconstituée par Miller en 1953 ?",
          "options": [
            "Dioxygène et azote, comme aujourd'hui",
            "Méthane, ammoniac, hydrogène et vapeur d'eau",
            "Uniquement du dioxygène",
            "Du chlore et de l'hélium"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il n'y avait pas encore de dioxygène."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q3",
          "type": "mcq",
          "prompt": "Dans l'appareil de Miller et Urey (1953), deux électrodes en tungstène produisent des étincelles dans le mélange de gaz. Que représentent ces étincelles ?",
          "options": [
            "Les éclairs de l'atmosphère primitive (source d'énergie)",
            "La lumière de la Lune",
            "Les volcans",
            "La pluie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles fournissent l'énergie nécessaire aux réactions."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q4",
          "type": "mcq",
          "prompt": "En provoquant des étincelles électriques dans un mélange de méthane, d'ammoniac, d'hydrogène et de vapeur d'eau, qu'obtiennent Miller et Urey en 1953 ?",
          "options": [
            "Des cellules vivantes",
            "Des acides aminés : glycine et alanine",
            "Du dioxygène",
            "De l'ADN complet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce ne sont pas des êtres vivants, mais des constituants du vivant."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q5",
          "type": "mcq",
          "prompt": "Miller et Urey obtiennent de la glycine et de l'alanine à partir de gaz simples et d'eau. Que démontre leur expérience ?",
          "options": [
            "Que des molécules organiques peuvent se former à partir d'éléments minéraux",
            "Que la vie est impossible",
            "Que les acides aminés viennent seulement des êtres vivants",
            "Que l'eau est inutile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est un premier pas de l'inanimé vers le vivant."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi l'obtention d'acides aminés (glycine, alanine) dans l'expérience de Miller est-elle importante pour expliquer l'origine de la vie ?",
          "options": [
            "Parce que les acides aminés forment les protéines, constituants du vivant",
            "Parce que les acides aminés sont des minéraux",
            "Parce que les acides aminés produisent de l'oxygène",
            "Parce qu'ils sont radioactifs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les protéines sont indispensables à toute cellule."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p03_q7",
          "type": "mcq",
          "prompt": "Qui sont les deux savants des années 1920 à l'origine de l'hypothèse de la « soupe primitive » ?",
          "options": [
            "Oparin et Haldane",
            "Miller et Urey",
            "Pasteur et Darwin",
            "Mendel et Watson"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Miller et Urey ont testé leur hypothèse en 1953."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l03_origine_vie_p04",
      "order": 4,
      "title": "Des molécules à la cellule",
      "summary": "Météorites, coacervats, et le passage encore mystérieux à la première cellule.",
      "conceptExplanation": "Après Miller :\n- dans les mêmes conditions, mais à haute température, on obtient des enchaînements d'acides aminés, dont certains ont une faible activité enzymatique. Oparin a aussi étudié les coacervats : de petites gouttelettes de molécules organiques séparées de l'eau par une limite, qui ressemblent à des cellules ;\n- depuis 1960, l'analyse des météorites montre que l'atmosphère initiale était beaucoup moins riche en méthane et en ammoniac, mais plus riche en CO₂ ; de nouvelles expériences prouvent que la synthèse de molécules organiques reste possible dans ces conditions ;\n- on a découvert des acides aminés et des molécules organiques dans des météorites ;\n- à Tokyo, en mélangeant de grandes quantités d'acides aminés dans de l'eau et de l'azote, sans dioxygène, à 250 °C et 130 atmosphères pendant 6 heures, on a obtenu un élément de 2 µm comparable à Sulfolobus. La vie a donc pu apparaître sans dioxygène, dans les profondeurs de la mer primitive, il y a 3 à 4 milliards d'années.\n\nScénario de l'origine de la vie (document 3) :\n1. énergie (Soleil, éclairs) + atmosphère primitive (CH₄, CO₂, H₂O, H₂S, N₂) → petites molécules organiques réactives (HCN, HCHO…) ; des comètes et des météorites en apportent aussi ;\n2. dans l'océan (sources chaudes, argiles) → constituants du vivant : acides aminés, sucres, bases, phosphates ;\n3. → protéines, lipides, acides nucléiques ;\n4. → une membrane les entoure → la VIE (première cellule).\n\nLimite : les produits obtenus en laboratoire n'ont jamais montré les propriétés fondamentales du vivant : capacité d'AUTORÉGULATION et de REPRODUCTION. Le passage de la molécule inerte à la première cellule vivante reste inconnu.",
      "keyRule": "Énergie + atmosphère primitive → petites molécules → acides aminés, sucres, bases → protéines, lipides, acides nucléiques → membrane → cellule. Le dernier passage reste inconnu.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le document 3",
        "statement": "D'après le document 3, d'où viennent les petites molécules organiques réactives (HCN, HCHO) et où naît la vie ?",
        "methodSteps": [
          "Elles se forment dans l'atmosphère primitive grâce à l'énergie (Soleil, éclairs) et sont aussi apportées par les comètes et les météorites.",
          "Elles s'accumulent dans l'océan, près des sources chaudes et des argiles."
        ],
        "conclusion": "La vie naît dans l'océan primitif, quand une membrane entoure protéines, lipides et acides nucléiques."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les météorites",
          "stepTheme": "Les météorites",
          "stepBadge": "Les météorites",
          "paragraphText": "Depuis 1960, on a découvert des acides aminés et des molécules organiques dans des météorites.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q1",
            "type": "mcq",
            "prompt": "Depuis 1960, on a trouvé des acides aminés et des molécules organiques dans des météorites. Que suggère cette découverte ?",
            "options": [
              "Que des molécules organiques ont pu être apportées de l'espace sur la Terre primitive",
              "Que les météorites sont vivantes",
              "Que la vie n'existe pas sur Terre",
              "Que les acides aminés sont des minéraux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les météorites et les comètes ont pu enrichir la « soupe primitive »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Moins de méthane",
          "stepTheme": "Moins de méthane",
          "stepBadge": "Moins de méthane",
          "paragraphText": "L'atmosphère initiale était moins riche en méthane et en ammoniac, mais plus riche en CO₂ ; la synthèse de molécules organiques reste possible.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q2",
            "type": "mcq",
            "prompt": "L'analyse des météorites montre que l'atmosphère initiale avait moins de méthane et d'ammoniac mais plus de CO₂ que ce que pensait Miller. La synthèse de molécules organiques est-elle encore possible ?",
            "options": [
              "Non, plus du tout",
              "Oui, de nouvelles expériences montrent qu'elle reste possible",
              "Seulement avec du dioxygène",
              "Seulement sur la Lune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hypothèse reste valable avec une atmosphère corrigée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'expérience de Tokyo",
          "stepTheme": "L'expérience de Tokyo",
          "stepBadge": "L'expérience de Tokyo",
          "paragraphText": "Acides aminés + eau + azote, sans dioxygène, à 250 °C et 130 atmosphères pendant 6 heures : on obtient un élément de 2 µm comparable à Sulfolobus.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q3",
            "type": "mcq",
            "prompt": "À Tokyo, en chauffant des acides aminés dans de l'eau et de l'azote, sans dioxygène, à 250 °C et 130 atmosphères pendant 6 heures, on obtient un élément de 2 µm comparable à la bactérie Sulfolobus. Que montre cette expérience ?",
            "options": [
              "Que la vie a pu apparaître sans dioxygène, dans les profondeurs de la mer primitive",
              "Que la vie a besoin de beaucoup de dioxygène",
              "Que les bactéries naissent du froid",
              "Que l'azote est un poison"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les conditions imitent celles des profondeurs océaniques primitives."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les coacervats",
          "stepTheme": "Les coacervats",
          "stepBadge": "Les coacervats",
          "paragraphText": "Les coacervats étudiés par Oparin sont de petites gouttelettes de molécules organiques séparées de l'eau, qui ressemblent à des cellules.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q4",
            "type": "mcq",
            "prompt": "Oparin a obtenu des coacervats. Que sont-ils ?",
            "options": [
              "De petites gouttelettes de molécules organiques séparées de l'eau, ressemblant à des cellules",
              "Des fossiles de dinosaures",
              "Des cristaux de sel",
              "Des bactéries actuelles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils montrent comment une « limite » a pu isoler des molécules."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les étapes vers la vie",
          "stepTheme": "Les étapes vers la vie",
          "stepBadge": "Les étapes vers la vie",
          "paragraphText": "Petites molécules → acides aminés, sucres, bases, phosphates → protéines, lipides, acides nucléiques → membrane → vie.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q5",
            "type": "mcq",
            "prompt": "D'après le document sur l'origine de la vie, quel est le bon ordre : membrane ; acides aminés et sucres ; protéines, lipides et acides nucléiques ; petites molécules organiques (HCN, HCHO) ?",
            "options": [
              "Membrane → protéines → acides aminés → petites molécules",
              "Petites molécules → acides aminés et sucres → protéines, lipides, acides nucléiques → membrane",
              "Acides aminés → membrane → petites molécules → protéines",
              "Protéines → petites molécules → membrane → acides aminés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On va du plus simple au plus complexe, jusqu'à la cellule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le lieu de naissance",
          "stepTheme": "Le lieu de naissance",
          "stepBadge": "Le lieu de naissance",
          "paragraphText": "Selon le document, les constituants du vivant se forment dans l'océan, près des sources chaudes et des argiles.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q6",
            "type": "mcq",
            "prompt": "Dans le document « origine de la vie », les molécules venues de l'atmosphère, des comètes et des météorites s'accumulent près des sources chaudes et des argiles. Où la vie est-elle née selon ce document ?",
            "options": [
              "Dans l'océan primitif",
              "Dans l'atmosphère",
              "Sur les montagnes",
              "Dans les déserts"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la « soupe primitive » de l'océan."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas encore la vie",
          "stepTheme": "Pas encore la vie",
          "stepBadge": "Pas encore la vie",
          "paragraphText": "Les produits de laboratoire n'ont jamais montré l'autorégulation ni la reproduction : le passage à la première cellule vivante reste inconnu.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p04_q7",
            "type": "mcq",
            "prompt": "Les macromolécules obtenues en laboratoire n'ont jamais manifesté la capacité d'autorégulation et de reproduction. Qu'en conclut-on ?",
            "options": [
              "Qu'on a déjà créé la vie en laboratoire",
              "Que le passage de la molécule inerte à la première cellule vivante reste inconnu",
              "Que la vie n'existe pas",
              "Que la reproduction n'est pas une propriété du vivant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seuls des témoignages indirects permettent d'imaginer ce passage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q1",
          "type": "mcq",
          "prompt": "Depuis 1960, on a trouvé des acides aminés et des molécules organiques dans des météorites. Que suggère cette découverte ?",
          "options": [
            "Que des molécules organiques ont pu être apportées de l'espace sur la Terre primitive",
            "Que les météorites sont vivantes",
            "Que la vie n'existe pas sur Terre",
            "Que les acides aminés sont des minéraux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les météorites et les comètes ont pu enrichir la « soupe primitive »."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q2",
          "type": "mcq",
          "prompt": "L'analyse des météorites montre que l'atmosphère initiale avait moins de méthane et d'ammoniac mais plus de CO₂ que ce que pensait Miller. La synthèse de molécules organiques est-elle encore possible ?",
          "options": [
            "Non, plus du tout",
            "Oui, de nouvelles expériences montrent qu'elle reste possible",
            "Seulement avec du dioxygène",
            "Seulement sur la Lune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hypothèse reste valable avec une atmosphère corrigée."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q3",
          "type": "mcq",
          "prompt": "À Tokyo, en chauffant des acides aminés dans de l'eau et de l'azote, sans dioxygène, à 250 °C et 130 atmosphères pendant 6 heures, on obtient un élément de 2 µm comparable à la bactérie Sulfolobus. Que montre cette expérience ?",
          "options": [
            "Que la vie a pu apparaître sans dioxygène, dans les profondeurs de la mer primitive",
            "Que la vie a besoin de beaucoup de dioxygène",
            "Que les bactéries naissent du froid",
            "Que l'azote est un poison"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les conditions imitent celles des profondeurs océaniques primitives."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q4",
          "type": "mcq",
          "prompt": "Oparin a obtenu des coacervats. Que sont-ils ?",
          "options": [
            "De petites gouttelettes de molécules organiques séparées de l'eau, ressemblant à des cellules",
            "Des fossiles de dinosaures",
            "Des cristaux de sel",
            "Des bactéries actuelles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils montrent comment une « limite » a pu isoler des molécules."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q5",
          "type": "mcq",
          "prompt": "D'après le document sur l'origine de la vie, quel est le bon ordre : membrane ; acides aminés et sucres ; protéines, lipides et acides nucléiques ; petites molécules organiques (HCN, HCHO) ?",
          "options": [
            "Membrane → protéines → acides aminés → petites molécules",
            "Petites molécules → acides aminés et sucres → protéines, lipides, acides nucléiques → membrane",
            "Acides aminés → membrane → petites molécules → protéines",
            "Protéines → petites molécules → membrane → acides aminés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On va du plus simple au plus complexe, jusqu'à la cellule."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q6",
          "type": "mcq",
          "prompt": "Dans le document « origine de la vie », les molécules venues de l'atmosphère, des comètes et des météorites s'accumulent près des sources chaudes et des argiles. Où la vie est-elle née selon ce document ?",
          "options": [
            "Dans l'océan primitif",
            "Dans l'atmosphère",
            "Sur les montagnes",
            "Dans les déserts"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la « soupe primitive » de l'océan."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p04_q7",
          "type": "mcq",
          "prompt": "Les macromolécules obtenues en laboratoire n'ont jamais manifesté la capacité d'autorégulation et de reproduction. Qu'en conclut-on ?",
          "options": [
            "Qu'on a déjà créé la vie en laboratoire",
            "Que le passage de la molécule inerte à la première cellule vivante reste inconnu",
            "Que la vie n'existe pas",
            "Que la reproduction n'est pas une propriété du vivant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seuls des témoignages indirects permettent d'imaginer ce passage."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l03_origine_vie_p05",
      "order": 5,
      "title": "La chronologie de la vie sur Terre",
      "summary": "De la naissance de la Terre à la conquête des continents.",
      "conceptExplanation": "Chronologie d'après le document 3 (« Évolution de l'atmosphère et apparition de la vie sur la Terre ») ; les âges sont en millions d'années (Ma) avant aujourd'hui :\n- vers −4 600 Ma : naissance de la Terre ; atmosphère primitive sans dioxygène (CO₂, CH₄, H₂O…) ;\n- vers −3 500 Ma : apparition des premières cellules procaryotes ;\n- de −3 000 à −2 000 Ma : la photosynthèse des algues produit l'O₂ ; dépôt des fers rubanés ;\n- vers −2 000 Ma : l'O₂ s'accumule dans l'atmosphère (couches rouges) ;\n- vers −1 500 Ma : apparition des eucaryotes (cellules avec noyau) ;\n- vers −670 Ma : premiers êtres pluricellulaires (animaux à corps mou) ;\n- vers −540 Ma (début de l'ère primaire) : « explosion » de la vie dans les océans ;\n- vers −450 Ma : début de la conquête des continents par les végétaux et les animaux, protégés des ultraviolets par la couche d'ozone.\n\nToute cette longue période avant l'ère primaire s'appelle le PRÉCAMBRIEN.\n\nConclusion générale : l'origine de la vie s'explique par des faits paléontologiques et par des faits expérimentaux. L'apparition de la vie correspond à l'apparition des premières cellules : les procaryotes.\n\nScience et religion : la science explique l'origine de la vie par des faits observés et des expériences ; elle laisse ouverte la question du sens, qui relève d'autres approches (philosophie, religion).",
      "keyRule": "Terre −4 600 Ma → procaryotes −3 500 Ma → O₂ (algues) → eucaryotes vers −1 500 Ma → pluricellulaires vers −670 Ma → conquête des continents vers −450 Ma.",
      "formulas": [],
      "workedExample": {
        "title": "Situer une étape",
        "statement": "Les premières cellules (procaryotes) sont apparues vers −3 500 Ma, la Terre est née vers −4 600 Ma. Combien de temps la Terre est-elle restée sans vie ?",
        "methodSteps": [
          "On calcule l'écart : 4 600 − 3 500.",
          "4 600 − 3 500 = 1 100 millions d'années."
        ],
        "conclusion": "Environ 1,1 milliard d'années sans vie connue."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'âge de la Terre",
          "stepTheme": "L'âge de la Terre",
          "stepBadge": "L'âge de la Terre",
          "paragraphText": "La Terre est née il y a environ 4 600 millions d'années (4,6 milliards d'années).",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q1",
            "type": "mcq",
            "prompt": "D'après le document sur l'évolution de l'atmosphère et l'apparition de la vie, quand la Terre est-elle née ?",
            "options": [
              "Il y a environ 4 600 millions d'années",
              "Il y a environ 6 000 ans",
              "Il y a environ 450 millions d'années",
              "Il y a environ 1 million d'années"
            ],
            "correctAnswerIndex": 0,
            "explanation": "4 600 Ma = 4,6 milliards d'années."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les premières cellules",
          "stepTheme": "Les premières cellules",
          "stepBadge": "Les premières cellules",
          "paragraphText": "Les premières cellules procaryotes apparaissent vers −3 500 millions d'années.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q2",
            "type": "mcq",
            "prompt": "D'après le document 3, vers quand apparaissent les premières cellules procaryotes ?",
            "options": [
              "Vers −3 500 millions d'années",
              "Vers −450 millions d'années",
              "Vers −10 000 ans",
              "Vers −4 600 millions d'années, en même temps que la Terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Environ 1,1 milliard d'années après la naissance de la Terre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer un écart",
          "stepTheme": "Calculer un écart",
          "stepBadge": "Calculer un écart",
          "paragraphText": "Terre née vers −4 600 Ma, premières cellules vers −3 500 Ma : 4 600 − 3 500 = 1 100 millions d'années sans vie connue.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q3",
            "type": "mcq",
            "prompt": "La Terre est née vers −4 600 millions d'années et les premières cellules sont apparues vers −3 500 millions d'années. Pendant combien de temps environ la Terre est-elle restée sans vie connue ?",
            "options": [
              "100 millions d'années",
              "1 100 millions d'années",
              "8 100 millions d'années",
              "3 500 millions d'années"
            ],
            "correctAnswerIndex": 1,
            "explanation": "4 600 − 3 500 = 1 100 millions d'années."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les eucaryotes",
          "stepTheme": "Les eucaryotes",
          "stepBadge": "Les eucaryotes",
          "paragraphText": "D'après le document, les eucaryotes (cellules avec noyau) apparaissent vers −1 500 Ma, après l'enrichissement de l'atmosphère en O₂.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q4",
            "type": "mcq",
            "prompt": "D'après le document 3, les eucaryotes apparaissent vers −1 500 Ma et les procaryotes vers −3 500 Ma. Lesquels sont apparus en premier ?",
            "options": [
              "Les eucaryotes",
              "Les procaryotes",
              "Ils sont apparus en même temps",
              "Aucun des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "−3 500 Ma est plus ancien que −1 500 Ma."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La conquête des continents",
          "stepTheme": "La conquête des continents",
          "stepBadge": "La conquête des continents",
          "paragraphText": "Vers −450 Ma, végétaux et animaux commencent à conquérir les continents, protégés des ultraviolets par la couche d'ozone.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q5",
            "type": "mcq",
            "prompt": "Vers −450 millions d'années, les êtres vivants commencent à conquérir les continents. Qu'est-ce qui a rendu cette sortie de l'eau possible ?",
            "options": [
              "La couche d'ozone, qui protège des ultraviolets",
              "La disparition du dioxygène",
              "La baisse de la température à −100 °C",
              "L'arrivée des météorites"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avant, les ultraviolets rendaient la vie hors de l'eau très difficile."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le Précambrien",
          "stepTheme": "Le Précambrien",
          "stepBadge": "Le Précambrien",
          "paragraphText": "La longue période qui va de la naissance de la Terre au début de l'ère primaire (vers −540 Ma) s'appelle le Précambrien.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q6",
            "type": "mcq",
            "prompt": "Sur la frise du document 3, comment s'appelle la longue période qui va de la naissance de la Terre jusqu'au début de l'ère primaire (vers −540 millions d'années) ?",
            "options": [
              "Le Précambrien",
              "Le Quaternaire",
              "Le Moyen Âge",
              "Le Jurassique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est pendant le Précambrien que la vie est apparue."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La conclusion générale",
          "stepTheme": "La conclusion générale",
          "stepBadge": "La conclusion générale",
          "paragraphText": "L'origine de la vie s'explique par des faits paléontologiques et expérimentaux ; l'apparition de la vie correspond à l'apparition des premières cellules, les procaryotes.",
          "exercise": {
            "id": "terminale_a_svt_l03_origine_vie_p05_q7",
            "type": "mcq",
            "prompt": "Selon la conclusion générale du cours sur l'origine de la vie, à quoi correspond l'apparition de la vie ?",
            "options": [
              "À l'apparition des premières cellules, les procaryotes",
              "À l'apparition de l'Homme",
              "À l'apparition des dinosaures",
              "À la formation de la Lune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La cellule est la plus petite unité vivante."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q1",
          "type": "mcq",
          "prompt": "D'après le document sur l'évolution de l'atmosphère et l'apparition de la vie, quand la Terre est-elle née ?",
          "options": [
            "Il y a environ 4 600 millions d'années",
            "Il y a environ 6 000 ans",
            "Il y a environ 450 millions d'années",
            "Il y a environ 1 million d'années"
          ],
          "correctAnswerIndex": 0,
          "explanation": "4 600 Ma = 4,6 milliards d'années."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q2",
          "type": "mcq",
          "prompt": "D'après le document 3, vers quand apparaissent les premières cellules procaryotes ?",
          "options": [
            "Vers −3 500 millions d'années",
            "Vers −450 millions d'années",
            "Vers −10 000 ans",
            "Vers −4 600 millions d'années, en même temps que la Terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Environ 1,1 milliard d'années après la naissance de la Terre."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q3",
          "type": "mcq",
          "prompt": "La Terre est née vers −4 600 millions d'années et les premières cellules sont apparues vers −3 500 millions d'années. Pendant combien de temps environ la Terre est-elle restée sans vie connue ?",
          "options": [
            "100 millions d'années",
            "1 100 millions d'années",
            "8 100 millions d'années",
            "3 500 millions d'années"
          ],
          "correctAnswerIndex": 1,
          "explanation": "4 600 − 3 500 = 1 100 millions d'années."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q4",
          "type": "mcq",
          "prompt": "D'après le document 3, les eucaryotes apparaissent vers −1 500 Ma et les procaryotes vers −3 500 Ma. Lesquels sont apparus en premier ?",
          "options": [
            "Les eucaryotes",
            "Les procaryotes",
            "Ils sont apparus en même temps",
            "Aucun des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "−3 500 Ma est plus ancien que −1 500 Ma."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q5",
          "type": "mcq",
          "prompt": "Vers −450 millions d'années, les êtres vivants commencent à conquérir les continents. Qu'est-ce qui a rendu cette sortie de l'eau possible ?",
          "options": [
            "La couche d'ozone, qui protège des ultraviolets",
            "La disparition du dioxygène",
            "La baisse de la température à −100 °C",
            "L'arrivée des météorites"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant, les ultraviolets rendaient la vie hors de l'eau très difficile."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q6",
          "type": "mcq",
          "prompt": "Sur la frise du document 3, comment s'appelle la longue période qui va de la naissance de la Terre jusqu'au début de l'ère primaire (vers −540 millions d'années) ?",
          "options": [
            "Le Précambrien",
            "Le Quaternaire",
            "Le Moyen Âge",
            "Le Jurassique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est pendant le Précambrien que la vie est apparue."
        },
        {
          "id": "terminale_a_svt_l03_origine_vie_p05_q7",
          "type": "mcq",
          "prompt": "Selon la conclusion générale du cours sur l'origine de la vie, à quoi correspond l'apparition de la vie ?",
          "options": [
            "À l'apparition des premières cellules, les procaryotes",
            "À l'apparition de l'Homme",
            "À l'apparition des dinosaures",
            "À la formation de la Lune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cellule est la plus petite unité vivante."
        }
      ]
    }
  ]
};
