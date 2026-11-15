import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L6_Les activités internes du globe terrestre.pdf (Mon école à la maison ; thème « La géodynamique interne » ; le document l’intitule « Leçon 1 ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L06_ACTIVITES_INTERNES_GLOBE: CurriculumChapter = {
  "id": "premiere_d_svt_l06_activites_internes_globe",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 6,
  "title": "Leçon 6 : Les activités internes du globe terrestre",
  "summary": "Effets des séismes et des volcans, sismographe et sismogramme, ondes P, S et L, hodographes, foyer, épicentre, magnitude et intensité, discontinuités et structure interne du globe.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L6_Les activités internes du globe terrestre.pdf (Mon école à la maison ; thème « La géodynamique interne » ; le document l’intitule « Leçon 1 »)",
  "points": [
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_p01",
      "order": 1,
      "title": "Séismes et volcans déforment la surface",
      "summary": "Les effets des séismes et des éruptions volcaniques.",
      "conceptExplanation": "Situation : le club SVT visite la station de Lamto, où des appareils enregistrent les vibrations qui traversent la Terre. Les techniciens expliquent que ces vibrations, quand elles sont fortes, ont des conséquences désastreuses. Les élèves de 1re D veulent connaître les ondes sismiques, leur propagation et ce qu’elles révèlent de la structure de la Terre.\n- Document 1 : en 1960, un séisme de magnitude 9,5 au large du Chili (le plus fort jamais enregistré) crée un tsunami qui dévaste Hilo, à Hawaï.\n- Document 2 : en 1964, un séisme de magnitude 9,2 dévaste Anchorage et Valdez, en Alaska.\n- Document 3 : en 2014, l’éruption du mont Ontake, au Japon, recouvre de cendres toute une zone et fait des dizaines de morts.\n- Les séismes provoquent : fissures du sol, destruction d’habitations, de ponts et de barrages, pertes humaines, glissements de terrain, et un tsunami (raz-de-marée) quand le séisme a lieu sous la mer.\n- Les éruptions volcaniques rejettent des cendres qui ensevelissent les habitations, brûlent la végétation, intoxiquent les êtres vivants et perturbent la navigation aérienne.\n- Séismes et volcans sont des manifestations de l’activité interne de la Terre ; ils déforment sa surface.\n- Correction du document : il range « le volcanisme » parmi les conséquences des séismes. Un séisme ne crée pas de volcan : séismes et volcans sont deux manifestations de l’activité interne, souvent dans les mêmes régions (une éruption s’accompagne souvent de petits séismes).",
      "keyRule": "Séismes et volcans manifestent l’activité interne de la Terre : fissures, destructions, tsunamis, cendres ; ils déforment la surface.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer un tsunami",
        "statement": "Pourquoi un séisme au large du Chili a-t-il dévasté Hilo, à Hawaï ?",
        "methodSteps": [
          "Le séisme a eu lieu sous la mer : il a soulevé brutalement une masse d’eau.",
          "Cette vague géante (tsunami) a traversé l’océan Pacifique."
        ],
        "conclusion": "Un séisme sous-marin peut provoquer un tsunami à des milliers de kilomètres."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Tsunami",
          "stepTheme": "Document 1",
          "stepTitle": "Un séisme sous la mer",
          "paragraphText": "Un séisme **sous-marin** peut provoquer un **tsunami** (raz-de-marée) : en **1960**, un séisme au large du **Chili** a dévasté **Hilo**, à Hawaï.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p01_q1",
            "type": "mcq",
            "prompt": "Un séisme de magnitude 9,5 a lieu au large des côtes du Chili. Quelle conséquence peut-il avoir sur des îles lointaines ?",
            "options": [
              "Un tsunami (raz-de-marée) qui dévaste les côtes",
              "Une éruption de neige",
              "Un réchauffement du climat",
              "Aucune conséquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La vague a traversé le Pacifique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Séisme",
          "stepTheme": "Document 2",
          "stepTitle": "Les effets d’un séisme",
          "paragraphText": "Un séisme provoque des **fissures du sol**, la **destruction** de bâtiments, de ponts et de barrages, des **glissements de terrain** et des **pertes humaines**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions est une conséquence directe d’un fort séisme ?",
            "options": [
              "La fissuration du sol et l’effondrement des immeubles",
              "Le réchauffement du climat",
              "La formation des saisons",
              "L’augmentation de la pluie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Alaska 1964 : rues fendues, voitures enfoncées."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Cendres",
          "stepTheme": "Document 3",
          "stepTitle": "Les effets d’une éruption",
          "paragraphText": "Les **cendres** d’une éruption **ensevelissent** les maisons, **brûlent** la végétation, **intoxiquent** les êtres vivants et perturbent les **avions**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p01_q3",
            "type": "mcq",
            "prompt": "Une éruption volcanique rejette d’énormes quantités de cendres. Laquelle de ces conséquences est due aux cendres ?",
            "options": [
              "La perturbation de la navigation aérienne",
              "La formation d’un tsunami à chaque fois",
              "L’augmentation de la gravité",
              "La disparition des océans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Mont Ontake, Japon, 2014."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Volcanisme",
          "stepTheme": "Correction du document",
          "stepTitle": "Le séisme ne crée pas le volcan",
          "paragraphText": "Le document range le **volcanisme** parmi les conséquences des séismes. Ce sont **deux manifestations** de l’activité interne de la Terre, souvent dans les **mêmes régions**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p01_q4",
            "type": "mcq",
            "prompt": "Quel lien y a-t-il entre les séismes et les volcans ?",
            "options": [
              "Ce sont deux manifestations de l’activité interne de la Terre, souvent dans les mêmes régions",
              "Chaque séisme crée un volcan",
              "Les volcans empêchent les séismes",
              "Il n’y a aucun lien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une éruption s’accompagne souvent de petits séismes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Intrus",
          "stepTheme": "Exercice",
          "stepTitle": "Une conséquence qui n’en est pas une",
          "paragraphText": "Le **réchauffement du climat** n’est pas une conséquence des séismes ou des volcans. Les cendres peuvent même **refroidir** le climat pendant quelques mois.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p01_q5",
            "type": "mcq",
            "prompt": "Parmi ces propositions : fissuration du sol, effondrement des immeubles, réchauffement du climat, laquelle n’est pas une conséquence des séismes et du volcanisme ?",
            "options": [
              "Le réchauffement du climat",
              "La fissuration du sol",
              "L’effondrement des immeubles",
              "Aucune, toutes sont des conséquences"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À long terme, les cendres volcaniques rendent même les sols fertiles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Surface",
          "stepTheme": "Conclusion",
          "stepTitle": "Une surface déformée",
          "paragraphText": "Les mouvements internes de la Terre se manifestent en **déformant sa surface** : fissures, failles, plis, reliefs volcaniques.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p01_q6",
            "type": "mcq",
            "prompt": "Comment les mouvements internes de la Terre se manifestent-ils à sa surface ?",
            "options": [
              "Par des déformations : fissures, failles, plis et reliefs volcaniques",
              "Par les marées quotidiennes",
              "Par la rotation de la Terre",
              "Par l’alternance du jour et de la nuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont des manifestations de la géodynamique interne."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p01_q1",
          "type": "mcq",
          "prompt": "Un séisme de magnitude 9,5 a lieu au large des côtes du Chili. Quelle conséquence peut-il avoir sur des îles lointaines ?",
          "options": [
            "Un tsunami (raz-de-marée) qui dévaste les côtes",
            "Une éruption de neige",
            "Un réchauffement du climat",
            "Aucune conséquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La vague a traversé le Pacifique."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions est une conséquence directe d’un fort séisme ?",
          "options": [
            "La fissuration du sol et l’effondrement des immeubles",
            "Le réchauffement du climat",
            "La formation des saisons",
            "L’augmentation de la pluie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Alaska 1964 : rues fendues, voitures enfoncées."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p01_q3",
          "type": "mcq",
          "prompt": "Une éruption volcanique rejette d’énormes quantités de cendres. Laquelle de ces conséquences est due aux cendres ?",
          "options": [
            "La perturbation de la navigation aérienne",
            "La formation d’un tsunami à chaque fois",
            "L’augmentation de la gravité",
            "La disparition des océans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Mont Ontake, Japon, 2014."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p01_q4",
          "type": "mcq",
          "prompt": "Quel lien y a-t-il entre les séismes et les volcans ?",
          "options": [
            "Ce sont deux manifestations de l’activité interne de la Terre, souvent dans les mêmes régions",
            "Chaque séisme crée un volcan",
            "Les volcans empêchent les séismes",
            "Il n’y a aucun lien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une éruption s’accompagne souvent de petits séismes."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p01_q5",
          "type": "mcq",
          "prompt": "Parmi ces propositions : fissuration du sol, effondrement des immeubles, réchauffement du climat, laquelle n’est pas une conséquence des séismes et du volcanisme ?",
          "options": [
            "Le réchauffement du climat",
            "La fissuration du sol",
            "L’effondrement des immeubles",
            "Aucune, toutes sont des conséquences"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À long terme, les cendres volcaniques rendent même les sols fertiles."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p01_q6",
          "type": "mcq",
          "prompt": "Comment les mouvements internes de la Terre se manifestent-ils à sa surface ?",
          "options": [
            "Par des déformations : fissures, failles, plis et reliefs volcaniques",
            "Par les marées quotidiennes",
            "Par la rotation de la Terre",
            "Par l’alternance du jour et de la nuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont des manifestations de la géodynamique interne."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_p02",
      "order": 2,
      "title": "Enregistrer les ondes : le sismogramme",
      "summary": "Le sismographe et les trois groupes d’ondes.",
      "conceptExplanation": "- Un séisme est une rupture brutale de roches soumises à des contraintes, en profondeur. L’énergie libérée se propage dans toutes les directions sous forme de vibrations : les ondes sismiques.\n- Le sismographe enregistre ces vibrations. C’est un pendule : une masse lourde suspendue (à un fil ou à un ressort) reste presque immobile par inertie, tandis que le support et le cylindre enregistreur bougent avec le sol.\n- Pour connaître le mouvement du sol en grandeur et en direction, on utilise trois sismographes : un horizontal nord-sud, un horizontal est-ouest et un vertical. Ils amplifient les mouvements du sol de 10 000 à 400 000 fois.\n- L’enregistrement obtenu est un sismogramme. Il montre trois groupes d’oscillations successives :\n- a, petites oscillations : les ondes P (premières, ou primaires), les plus rapides ;\n- b, oscillations moyennes : les ondes S (secondes, ou secondaires) ;\n- c, grandes oscillations : les ondes L (longues), les plus lentes, qui arrivent en dernier.",
      "keyRule": "Sismographe : masse inerte + support qui bouge avec le sol. Sismogramme : ondes P (premières, petites), S (moyennes), L (dernières, grandes).",
      "formulas": [],
      "workedExample": {
        "title": "Lire un sismogramme",
        "statement": "Sur un sismogramme, quelles ondes arrivent en premier ?",
        "methodSteps": [
          "Les premières oscillations, petites, sont celles des ondes les plus rapides.",
          "Ce sont les ondes P (primaires)."
        ],
        "conclusion": "Ordre d’arrivée : P, puis S, puis L."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Séisme",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’un séisme ?",
          "paragraphText": "Un **séisme** est une **rupture brutale** de roches soumises à des **contraintes**, en profondeur, qui libère des **ondes sismiques**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p02_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un séisme ?",
            "options": [
              "Une rupture brutale de roches en profondeur, qui libère des ondes sismiques",
              "Une éruption de lave",
              "Un glissement lent des continents sans vibration",
              "Une tempête en mer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme une règle en plastique qui casse après avoir été tordue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Sismographe",
          "stepTheme": "Appareil",
          "stepTitle": "Le principe du sismographe",
          "paragraphText": "La **masse** du sismographe reste presque **immobile** par **inertie** ; le **support** et le **cylindre** bougent avec le sol : le stylet trace les vibrations.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p02_q2",
            "type": "mcq",
            "prompt": "Pourquoi un sismographe peut-il enregistrer les vibrations du sol ?",
            "options": [
              "Sa masse suspendue reste presque immobile par inertie, alors que le support bouge avec le sol",
              "Il est fixé au fond de la mer",
              "Il mesure la température des roches",
              "Il émet lui-même des ondes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un appareil pendulaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Trois appareils",
          "stepTheme": "Mesure",
          "stepTitle": "Trois directions",
          "paragraphText": "On utilise **trois sismographes** : horizontal **nord-sud**, horizontal **est-ouest** et **vertical**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi une station sismique utilise-t-elle trois sismographes ?",
            "options": [
              "Pour mesurer le mouvement du sol dans les trois directions de l’espace",
              "Pour enregistrer trois séismes à la fois",
              "Pour mesurer la température",
              "Pour remplacer un appareil en panne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Nord-sud, est-ouest et vertical."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Ondes P",
          "stepTheme": "Sismogramme",
          "stepTitle": "Les premières ondes",
          "paragraphText": "Les **premières** oscillations, de **petite amplitude**, sont celles des **ondes P** (primaires), les plus **rapides**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p02_q4",
            "type": "mcq",
            "prompt": "Sur un sismogramme, comment s’appellent les ondes qui s’inscrivent en premier ?",
            "options": [
              "Les ondes P (primaires)",
              "Les ondes S (secondaires)",
              "Les ondes L (longues)",
              "Les ondes radio"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P comme « premières »."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Un sismogramme",
            "caption": "Les ondes P arrivent les premières (petites oscillations), puis les ondes S (moyennes), enfin les ondes L (grandes amplitudes).",
            "svgContent": "<svg viewBox=\"0 0 560 222\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Sismogramme : petites oscillations des ondes P, oscillations moyennes des ondes S, grandes oscillations des ondes L\"><polyline points=\"30.0,120.7 32.0,119.8 34.0,119.8 36.0,120.2 38.0,120.1 40.0,119.4 42.0,120.1 44.0,121.1 46.0,119.4 48.0,119.2 50.0,120.7 52.0,120.2 54.0,119.7 56.0,120.0 58.0,120.3 60.0,119.7 62.0,119.4 64.0,121.0 66.0,120.3 68.0,118.9 70.0,120.1 72.0,120.5 74.0,119.8 76.0,119.8 78.0,120.3 80.0,120.1 82.0,119.1 84.0,120.2 86.0,121.1 88.0,119.3 90.0,117.6 92.0,122.3 94.0,120.3 96.0,119.0 98.0,120.3 100.0,122.0 102.0,117.8 104.0,117.3 106.0,124.6 108.0,120.9 110.0,116.1 112.0,120.7 114.0,121.4 116.0,119.3 118.0,119.3 120.0,121.9 122.0,120.5 124.0,115.7 126.0,121.5 128.0,124.2 130.0,117.2 132.0,118.4 134.0,121.6 136.0,120.1 138.0,118.9 140.0,120.6 142.0,122.6 144.0,117.0 146.0,117.4 148.0,124.6 150.0,120.4 152.0,117.0 154.0,120.7 156.0,120.9 158.0,119.2 160.0,119.1 162.0,122.8 164.0,120.2 166.0,115.2 168.0,121.9 170.0,123.5 172.0,117.6 174.0,119.1 176.0,121.1 178.0,120.0 180.0,118.4 182.0,121.2 184.0,123.1 186.0,116.3 188.0,117.9 190.0,124.3 192.0,120.0 194.0,117.9 196.0,120.6 198.0,120.8 200.0,118.8 202.0,119.0 204.0,123.7 206.0,119.8 208.0,115.2 210.0,125.7 212.0,126.8 214.0,115.1 216.0,118.7 218.0,122.6 220.0,119.7 222.0,114.0 224.0,124.8 226.0,128.6 228.0,109.1 230.0,115.9 232.0,129.5 234.0,119.3 236.0,116.5 238.0,121.4 240.0,122.4 242.0,115.0 244.0,117.2 246.0,131.7 248.0,118.1 250.0,108.6 252.0,125.6 254.0,124.5 256.0,116.5 258.0,119.3 260.0,123.2 262.0,119.0 264.0,112.1 266.0,126.8 268.0,128.4 270.0,108.9 272.0,117.5 274.0,127.2 276.0,119.1 278.0,117.5 280.0,121.9 282.0,123.2 284.0,112.6 286.0,117.7 288.0,132.8 290.0,116.9 292.0,110.5 294.0,124.9 296.0,122.8 298.0,117.4 300.0,119.5 302.0,124.7 304.0,117.8 306.0,110.6 308.0,128.6 310.0,127.2 312.0,109.7 314.0,118.8 316.0,125.0 318.0,119.1 320.0,110.0 322.0,132.7 324.0,135.9 326.0,81.6 328.0,114.8 330.0,167.3 332.0,106.1 334.0,95.2 336.0,133.1 338.0,125.3 340.0,111.9 342.0,119.0 344.0,140.6 346.0,109.0 348.0,91.1 350.0,146.8 352.0,135.1 354.0,97.5 356.0,119.4 358.0,128.2 360.0,117.5 362.0,112.9 364.0,131.3 366.0,129.6 368.0,94.7 370.0,119.8 372.0,143.6 374.0,112.0 376.0,110.8 378.0,125.3 380.0,122.0 382.0,113.9 384.0,120.3 386.0,134.8 388.0,111.1 390.0,104.6 392.0,135.0 394.0,125.6 396.0,110.7 398.0,120.3 400.0,123.4 402.0,117.8 404.0,114.7 406.0,129.1 408.0,125.0 410.0,104.9 412.0,121.3 414.0,130.7 416.0,116.0 418.0,116.9 420.0,122.3 422.0,121.0 424.0,114.9 426.0,121.0 428.0,129.6 430.0,113.7 432.0,112.6 434.0,127.6 436.0,121.8 438.0,116.5 440.0,120.3 442.0,122.0 444.0,117.9 446.0,116.3 448.0,126.6 450.0,122.2 452.0,111.8 454.0,121.3 456.0,124.4 458.0,118.3 460.0,118.9 462.0,121.4 464.0,120.6 466.0,116.0 468.0,121.2 470.0,125.7 472.0,116.1 474.0,116.8 476.0,123.5 478.0,120.5 480.0,118.7 482.0,120.3 484.0,121.5 486.0,118.1 488.0,117.7 490.0,124.3 492.0,120.8 494.0,115.9 496.0,120.9 498.0,121.6 500.0,119.3 502.0,119.5 504.0,121.1 506.0,120.3 508.0,117.0 510.0,121.2 512.0,123.4 514.0,117.4 516.0,118.5 518.0,121.7 520.0,120.1 522.0,119.2 524.0,120.4 526.0,121.6 528.0,117.9 530.0,118.2\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"38\" x2=\"208\" y2=\"38\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"32\" x2=\"90\" y2=\"44\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"32\" x2=\"208\" y2=\"44\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"149\" y=\"28\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">a : ondes P</text><line x1=\"212\" y1=\"38\" x2=\"318\" y2=\"38\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"32\" x2=\"212\" y2=\"44\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"32\" x2=\"318\" y2=\"44\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"265\" y=\"28\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">b : ondes S</text><line x1=\"322\" y1=\"38\" x2=\"530\" y2=\"38\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"322\" y1=\"32\" x2=\"322\" y2=\"44\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"530\" y1=\"32\" x2=\"530\" y2=\"44\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"426\" y=\"28\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">c : ondes L</text><line x1=\"30\" y1=\"196\" x2=\"521.0\" y2=\"196.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"530,196 521.0,191.0 521.0,201.0\" fill=\"#94A3B8\"/><text x=\"500\" y=\"214\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">temps</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Ondes S",
          "stepTheme": "Sismogramme",
          "stepTitle": "Les ondes secondaires",
          "paragraphText": "Viennent ensuite des oscillations d’**amplitude moyenne** : les **ondes S** (secondaires).",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p02_q5",
            "type": "mcq",
            "prompt": "Sur un sismogramme, quelles ondes forment la deuxième partie, d’amplitude moyenne ?",
            "options": [
              "Les ondes S",
              "Les ondes P",
              "Les ondes L",
              "Les ondes sonores"
            ],
            "correctAnswerIndex": 0,
            "explanation": "S comme « secondes »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Ondes L",
          "stepTheme": "Sismogramme",
          "stepTitle": "Les dernières ondes",
          "paragraphText": "En dernier arrivent les **grandes oscillations** des **ondes L** (longues), les plus **lentes**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p02_q6",
            "type": "mcq",
            "prompt": "Sur un sismogramme, quelles ondes ont les plus grandes oscillations et arrivent en dernier ?",
            "options": [
              "Les ondes L",
              "Les ondes P",
              "Les ondes S",
              "Aucune onde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice : « les ondes L sont lentes » est vrai."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p02_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un séisme ?",
          "options": [
            "Une rupture brutale de roches en profondeur, qui libère des ondes sismiques",
            "Une éruption de lave",
            "Un glissement lent des continents sans vibration",
            "Une tempête en mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme une règle en plastique qui casse après avoir été tordue."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p02_q2",
          "type": "mcq",
          "prompt": "Pourquoi un sismographe peut-il enregistrer les vibrations du sol ?",
          "options": [
            "Sa masse suspendue reste presque immobile par inertie, alors que le support bouge avec le sol",
            "Il est fixé au fond de la mer",
            "Il mesure la température des roches",
            "Il émet lui-même des ondes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un appareil pendulaire."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi une station sismique utilise-t-elle trois sismographes ?",
          "options": [
            "Pour mesurer le mouvement du sol dans les trois directions de l’espace",
            "Pour enregistrer trois séismes à la fois",
            "Pour mesurer la température",
            "Pour remplacer un appareil en panne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nord-sud, est-ouest et vertical."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p02_q4",
          "type": "mcq",
          "prompt": "Sur un sismogramme, comment s’appellent les ondes qui s’inscrivent en premier ?",
          "options": [
            "Les ondes P (primaires)",
            "Les ondes S (secondaires)",
            "Les ondes L (longues)",
            "Les ondes radio"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P comme « premières »."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p02_q5",
          "type": "mcq",
          "prompt": "Sur un sismogramme, quelles ondes forment la deuxième partie, d’amplitude moyenne ?",
          "options": [
            "Les ondes S",
            "Les ondes P",
            "Les ondes L",
            "Les ondes sonores"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S comme « secondes »."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p02_q6",
          "type": "mcq",
          "prompt": "Sur un sismogramme, quelles ondes ont les plus grandes oscillations et arrivent en dernier ?",
          "options": [
            "Les ondes L",
            "Les ondes P",
            "Les ondes S",
            "Aucune onde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice : « les ondes L sont lentes » est vrai."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_p03",
      "order": 3,
      "title": "Les caractéristiques des ondes",
      "summary": "Hodographe, propriétés des ondes, foyer, épicentre, magnitude.",
      "conceptExplanation": "- L’hodographe représente le temps d’arrivée des ondes selon la distance à l’épicentre. Pour une station à 15 000 km, le document lit : ondes P en 12 minutes, S en 19 minutes, L en 28 minutes. Les P sont les plus rapides, les L les plus lentes.\n- Ondes P : ondes longitudinales de compression-décompression ; elles traversent les solides et les fluides (liquides et gaz) ; elles causent le grondement sourd du début du séisme.\n- Ondes S : ondes transversales de cisaillement ; elles ne traversent que les solides (un liquide n’offre aucune résistance au cisaillement).\n- Les ondes P et S traversent l’intérieur du globe. Les ondes L sont des ondes de surface : elles se propagent dans les couches superficielles et tordent le sol. Les ondes S et L sont les plus destructrices.\n- Le foyer (ou hypocentre) est le lieu, en profondeur, où se produit la rupture et d’où partent les ondes (le plus souvent dans les 100 premiers kilomètres). L’épicentre est le point de la surface situé à la verticale du foyer, où les effets sont en général les plus forts.\n- La magnitude mesure l’énergie libérée au foyer (échelle de Richter). L’intensité mesure les effets observés en un lieu (échelle de Mercalli, 12 degrés).\n- Corrections du document :\n- il écrit « l’intensité ou quantité d’énergie… est la magnitude » : la magnitude (énergie au foyer) et l’intensité (effets en un lieu) sont deux notions différentes ;\n- sa documentation dit que l’échelle de Richter a « 9 degrés » : elle est ouverte, sans maximum ;\n- elle place les plus grands séismes « entre 7 et 8,5 » : le record est de 9,5 (Chili, 1960), comme dans son propre document 1 ;\n- les séismes de Lisbonne et de San Francisco datent de 1755 et de 1906, pas de 1955 et de 1960.",
      "keyRule": "P : rapides, solides et fluides. S : solides seulement. L : surface, lentes, destructrices. Foyer en profondeur, épicentre à la verticale. Magnitude (énergie) ≠ intensité (effets).",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer foyer et épicentre",
        "statement": "Un séisme naît à 20 km de profondeur sous une ville. Où sont le foyer et l’épicentre ?",
        "methodSteps": [
          "Le foyer est le point de rupture, à 20 km de profondeur.",
          "L’épicentre est le point de la surface juste au-dessus, dans la ville."
        ],
        "conclusion": "Foyer en profondeur, épicentre à la surface, à sa verticale."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Hodographe",
          "stepTheme": "Lecture",
          "stepTitle": "Qui arrive en premier ?",
          "paragraphText": "À **15 000 km** de l’épicentre, le document lit : **P en 12 min**, **S en 19 min**, **L en 28 min**. Les **P** sont les plus **rapides**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p03_q1",
            "type": "mcq",
            "prompt": "Une station située à 15 000 km de l’épicentre reçoit les ondes P en 12 minutes, les S en 19 minutes et les L en 28 minutes. Quelles ondes sont les plus rapides ?",
            "options": [
              "Les ondes P",
              "Les ondes S",
              "Les ondes L",
              "Elles vont toutes à la même vitesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles parcourent la même distance en moins de temps."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Ondes P",
          "stepTheme": "Propriétés",
          "stepTitle": "Compression-décompression",
          "paragraphText": "Les **ondes P** sont des ondes de **compression-décompression** ; elles traversent les **solides** et les **fluides**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p03_q2",
            "type": "mcq",
            "prompt": "Dans quels milieux les ondes P peuvent-elles se propager ?",
            "options": [
              "Dans les solides et dans les fluides (liquides et gaz)",
              "Seulement dans les solides",
              "Seulement dans les liquides",
              "Seulement à la surface du sol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles causent le grondement sourd du début du séisme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Ondes S",
          "stepTheme": "Propriétés",
          "stepTitle": "Seulement dans les solides",
          "paragraphText": "Les **ondes S** sont des ondes **transversales de cisaillement** : elles ne traversent que les **solides**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi les ondes S ne traversent-elles pas les liquides ?",
            "options": [
              "Parce que ce sont des ondes de cisaillement et qu’un liquide n’offre aucune résistance au cisaillement",
              "Parce qu’elles sont trop rapides",
              "Parce qu’elles ne se propagent qu’à la surface",
              "Parce que les liquides sont trop chauds"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette propriété révèle le noyau liquide."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Foyer et épicentre",
          "stepTheme": "Vocabulaire",
          "stepTitle": "D’où partent les ondes ?",
          "paragraphText": "Le **foyer** (hypocentre) est le point **en profondeur** d’où partent les ondes ; l’**épicentre** est le point de la **surface** à sa **verticale**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p03_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le point de la surface situé à la verticale du foyer d’un séisme ?",
            "options": [
              "L’épicentre",
              "L’hypocentre",
              "Le Moho",
              "La faille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice : affirmations 3 et 5 vraies."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Magnitude",
          "stepTheme": "Correction du document",
          "stepTitle": "Magnitude ou intensité ?",
          "paragraphText": "Le document confond **magnitude** et **intensité**. La **magnitude** mesure l’**énergie libérée au foyer** (Richter) ; l’**intensité** mesure les **effets** en un lieu (Mercalli, 12 degrés).",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la différence entre la magnitude et l’intensité d’un séisme ?",
            "options": [
              "La magnitude mesure l’énergie libérée au foyer ; l’intensité mesure les effets observés en un lieu",
              "Ce sont deux mots pour la même chose",
              "La magnitude mesure les dégâts ; l’intensité l’énergie",
              "La magnitude mesure la force d’un volcan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un séisme a une seule magnitude, mais une intensité différente selon le lieu."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Magnitude et intensité",
            "caption": "Deux façons de mesurer un séisme.",
            "tableData": {
              "headers": [
                "",
                "Magnitude",
                "Intensité"
              ],
              "rows": [
                [
                  "Ce qu’elle mesure",
                  "L’énergie libérée au foyer",
                  "Les effets observés en un lieu (dégâts, ressenti)"
                ],
                [
                  "Échelle",
                  "Richter (ouverte, sans maximum)",
                  "Mercalli : 12 degrés (I à XII)"
                ],
                [
                  "Pour un séisme",
                  "Une seule valeur",
                  "Diminue en s’éloignant de l’épicentre"
                ],
                [
                  "Exemple",
                  "Chili 1960 : 9,5 (record)",
                  "XII : destruction totale"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Richter",
          "stepTheme": "Correction du document",
          "stepTitle": "Une échelle ouverte",
          "paragraphText": "La documentation dit que l’échelle de Richter a « **9 degrés** » : elle est **ouverte**, sans maximum. Le record est de **9,5** (Chili, **1960**).",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p03_q6",
            "type": "mcq",
            "prompt": "L’échelle de Richter a-t-elle une valeur maximale ?",
            "options": [
              "Non : elle est ouverte ; le plus fort séisme enregistré a une magnitude de 9,5",
              "Oui : elle s’arrête à 9",
              "Oui : elle s’arrête à 12",
              "Oui : elle s’arrête à 5"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’échelle de Mercalli qui compte 12 degrés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p03_q1",
          "type": "mcq",
          "prompt": "Une station située à 15 000 km de l’épicentre reçoit les ondes P en 12 minutes, les S en 19 minutes et les L en 28 minutes. Quelles ondes sont les plus rapides ?",
          "options": [
            "Les ondes P",
            "Les ondes S",
            "Les ondes L",
            "Elles vont toutes à la même vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles parcourent la même distance en moins de temps."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p03_q2",
          "type": "mcq",
          "prompt": "Dans quels milieux les ondes P peuvent-elles se propager ?",
          "options": [
            "Dans les solides et dans les fluides (liquides et gaz)",
            "Seulement dans les solides",
            "Seulement dans les liquides",
            "Seulement à la surface du sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles causent le grondement sourd du début du séisme."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi les ondes S ne traversent-elles pas les liquides ?",
          "options": [
            "Parce que ce sont des ondes de cisaillement et qu’un liquide n’offre aucune résistance au cisaillement",
            "Parce qu’elles sont trop rapides",
            "Parce qu’elles ne se propagent qu’à la surface",
            "Parce que les liquides sont trop chauds"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette propriété révèle le noyau liquide."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p03_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le point de la surface situé à la verticale du foyer d’un séisme ?",
          "options": [
            "L’épicentre",
            "L’hypocentre",
            "Le Moho",
            "La faille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice : affirmations 3 et 5 vraies."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la différence entre la magnitude et l’intensité d’un séisme ?",
          "options": [
            "La magnitude mesure l’énergie libérée au foyer ; l’intensité mesure les effets observés en un lieu",
            "Ce sont deux mots pour la même chose",
            "La magnitude mesure les dégâts ; l’intensité l’énergie",
            "La magnitude mesure la force d’un volcan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un séisme a une seule magnitude, mais une intensité différente selon le lieu."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p03_q6",
          "type": "mcq",
          "prompt": "L’échelle de Richter a-t-elle une valeur maximale ?",
          "options": [
            "Non : elle est ouverte ; le plus fort séisme enregistré a une magnitude de 9,5",
            "Oui : elle s’arrête à 9",
            "Oui : elle s’arrête à 12",
            "Oui : elle s’arrête à 5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’échelle de Mercalli qui compte 12 degrés."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_p04",
      "order": 4,
      "title": "La structure du globe",
      "summary": "Trois discontinuités, quatre couches.",
      "conceptExplanation": "- Les vitesses des ondes P et S changent brusquement à certaines profondeurs : ces cassures révèlent des discontinuités, c’est-à-dire des limites entre couches de propriétés différentes.\n- Entre 10 et 70 km : la vitesse des ondes P et S augmente brusquement. C’est le Moho (discontinuité de Mohorovičić), entre la croûte et le manteau. La croûte est fine sous les océans (5 à 10 km) et épaisse sous les continents (30 à 70 km).\n- À 2 900 km : la vitesse des ondes P chute fortement et les ondes S disparaissent. C’est la discontinuité de Gutenberg, entre le manteau et le noyau. Le noyau externe est liquide, car les ondes S ne le traversent pas.\n- Vers 5 150 km : les ondes P accélèrent et des ondes S réapparaissent. C’est la discontinuité de Lehmann, entre le noyau externe liquide et la graine (noyau interne), solide.\n- Quatre couches concentriques : la croûte, le manteau, le noyau externe et la graine. Le rayon de la Terre est d’environ 6 370 km.\n- La lithosphère (croûte + partie supérieure du manteau, jusqu’à 70 à 150 km) est rigide ; en dessous, l’asthénosphère est moins rigide (plus déformable).\n- Correction du document : son texte place la discontinuité de Lehmann à 5 400 km, alors que son propre schéma indique 5 155 km. Elle se trouve vers 5 150 km de profondeur.",
      "keyRule": "Moho (10-70 km) : croûte/manteau. Gutenberg (2 900 km) : manteau/noyau, ondes S arrêtées. Lehmann (≈ 5 150 km) : noyau externe liquide/graine solide.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire l’état du noyau externe",
        "statement": "À 2 900 km, les ondes S disparaissent. Qu’en déduire ?",
        "methodSteps": [
          "Les ondes S ne traversent que les solides.",
          "Si elles disparaissent, la couche sous 2 900 km n’est pas solide."
        ],
        "conclusion": "Le noyau externe est liquide."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Discontinuité",
          "stepTheme": "Notion",
          "stepTitle": "Une limite entre deux couches",
          "paragraphText": "Une **discontinuité** est la **limite** entre deux couches de la Terre de propriétés différentes ; elle se repère par un **changement brusque** de la vitesse des ondes.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p04_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une discontinuité dans le globe terrestre ?",
            "options": [
              "La limite entre deux couches de propriétés différentes, repérée par un changement brusque de vitesse des ondes",
              "Une fissure à la surface du sol",
              "Un volcan éteint",
              "Une zone sans aucune roche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il y en a trois principales."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Vitesse des ondes P et S selon la profondeur",
            "caption": "Trois discontinuités : le Moho (10 à 70 km), Gutenberg (2 900 km : les ondes S disparaissent, les P ralentissent), Lehmann (environ 5 150 km : les ondes accélèrent, les S réapparaissent).",
            "svgContent": "<svg viewBox=\"0 0 560 262\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Vitesse des ondes P et S selon la profondeur : discontinuités de Mohorovicic, Gutenberg et Lehmann\"><line x1=\"60\" y1=\"210\" x2=\"535\" y2=\"210\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"210\" x2=\"60\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"52\" y=\"214\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"52\" y=\"166\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">4</text><text x=\"52\" y=\"118\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">8</text><text x=\"52\" y=\"70\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">12</text><text x=\"60\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"134\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">1000</text><text x=\"208\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">2000</text><text x=\"282\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">3000</text><text x=\"356\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">4000</text><text x=\"430\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">5000</text><text x=\"504\" y=\"226\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">6000</text><line x1=\"274.6\" y1=\"36\" x2=\"274.6\" y2=\"210\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><line x1=\"441.09999999999997\" y1=\"36\" x2=\"441.09999999999997\" y2=\"210\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><polyline points=\"60.0,138.0 63.0,114.0 89.6,102.0 111.8,78.0 274.6,46.8 274.6,112.8 441.1,86.4 441.1,78.0 531.4,74.4\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,168.0 63.0,156.0 89.6,150.0 111.8,135.6 274.6,122.4 274.6,210.0\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"441.1,210.0 441.1,168.0 531.4,165.6\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"171\" y=\"57.60000000000002\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">ondes P</text><text x=\"171\" y=\"124.80000000000001\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#F59E0B\">ondes S</text><text x=\"274.6\" y=\"30\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">Gutenberg</text><text x=\"441.09999999999997\" y=\"30\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">Lehmann</text><text x=\"167.3\" y=\"244\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">manteau</text><text x=\"357.84999999999997\" y=\"244\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">noyau externe (liquide)</text><text x=\"486.23999999999995\" y=\"244\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">graine</text><text x=\"300\" y=\"258\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">profondeur (km)</text><text x=\"64\" y=\"22\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">vitesse (km/s)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Moho",
          "stepTheme": "Discontinuité 1",
          "stepTitle": "Croûte et manteau",
          "paragraphText": "Entre **10 et 70 km**, la vitesse des ondes **augmente** brusquement : c’est le **Moho**, limite **croûte/manteau**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p04_q2",
            "type": "mcq",
            "prompt": "Quelle discontinuité sépare la croûte du manteau, entre 10 et 70 km de profondeur ?",
            "options": [
              "Le Moho",
              "La discontinuité de Gutenberg",
              "La discontinuité de Lehmann",
              "L’épicentre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La croûte est plus épaisse sous les continents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Gutenberg",
          "stepTheme": "Discontinuité 2",
          "stepTitle": "Manteau et noyau",
          "paragraphText": "À **2 900 km**, les ondes **P ralentissent** et les ondes **S disparaissent** : c’est la discontinuité de **Gutenberg**, limite **manteau/noyau**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p04_q3",
            "type": "mcq",
            "prompt": "À 2 900 km de profondeur, la vitesse des ondes P chute et les ondes S disparaissent. Que montre ce résultat ?",
            "options": [
              "Le passage du manteau solide au noyau externe liquide (discontinuité de Gutenberg)",
              "Le passage de la croûte au manteau",
              "Le passage du noyau à la graine",
              "La présence d’un océan souterrain sous la croûte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les ondes S ne traversent pas les liquides."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Lehmann",
          "stepTheme": "Erreur du document",
          "stepTitle": "À quelle profondeur ?",
          "paragraphText": "Le texte du document place Lehmann à **5 400 km** ; son propre schéma indique **5 155 km**. La discontinuité de **Lehmann** sépare le **noyau externe liquide** de la **graine solide**, vers **5 150 km**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p04_q4",
            "type": "mcq",
            "prompt": "Quelles couches la discontinuité de Lehmann sépare-t-elle ?",
            "options": [
              "Le noyau externe liquide et la graine solide",
              "Le manteau et le noyau",
              "La croûte et le manteau",
              "La lithosphère et l’asthénosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 3 : l’affirmation 4 est fausse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Quatre couches",
          "stepTheme": "Structure",
          "stepTitle": "Le globe en couches",
          "paragraphText": "Quatre couches concentriques : **croûte**, **manteau**, **noyau externe** (liquide), **graine** (solide). Rayon : environ **6 370 km**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la couche la plus interne de la Terre ?",
            "options": [
              "La graine (noyau interne), solide",
              "Le manteau",
              "La croûte",
              "Le noyau externe liquide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 3 : 3 et 6 sont fausses, 7 est vraie."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La structure interne du globe",
            "caption": "Quatre couches concentriques séparées par trois discontinuités (épaisseur de la croûte exagérée).",
            "svgContent": "<svg viewBox=\"0 0 560 270\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Structure interne du globe : croûte, manteau, noyau externe liquide, graine\"><circle cx=\"150\" cy=\"140\" r=\"120.0\" fill=\"#10B981\" fill-opacity=\"0.18\" stroke=\"#10B981\" stroke-width=\"1.6\"/><circle cx=\"150\" cy=\"140\" r=\"118.7\" fill=\"#F59E0B\" fill-opacity=\"0.25\" stroke=\"#F59E0B\" stroke-width=\"1.6\"/><circle cx=\"150\" cy=\"140\" r=\"65.6\" fill=\"#EF4444\" fill-opacity=\"0.3\" stroke=\"#EF4444\" stroke-width=\"1.6\"/><circle cx=\"150\" cy=\"140\" r=\"23.0\" fill=\"#EC4899\" fill-opacity=\"0.55\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><line x1=\"233.6043956043956\" y1=\"56.39560439560441\" x2=\"330\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"34\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">croûte (Moho à 10-70 km)</text><line x1=\"215.93406593406593\" y1=\"74.06593406593407\" x2=\"330\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"80\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">manteau (solide)</text><text x=\"336\" y=\"94\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">jusqu’à 2 900 km : Gutenberg</text><line x1=\"184.28571428571428\" y1=\"105.71428571428572\" x2=\"330\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"140\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">noyau externe (liquide)</text><text x=\"336\" y=\"154\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">jusqu’à 5 150 km : Lehmann</text><line x1=\"159.23076923076923\" y1=\"130.76923076923077\" x2=\"330\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"200\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">graine (noyau interne, solide)</text><text x=\"336\" y=\"214\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">jusqu’au centre, 6 370 km</text></svg>"
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Lithosphère",
          "stepTheme": "Structure",
          "stepTitle": "Rigide ou déformable ?",
          "paragraphText": "La **lithosphère** (croûte + haut du manteau) est **rigide** ; l’**asthénosphère**, en dessous, est **moins rigide**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p04_q6",
            "type": "mcq",
            "prompt": "« La lithosphère est moins rigide que l’asthénosphère. » Vrai ou faux ?",
            "options": [
              "Faux : la lithosphère est rigide, l’asthénosphère plus déformable",
              "Vrai",
              "Faux : elles n’existent pas",
              "Vrai, car la lithosphère est liquide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les plaques lithosphériques glissent sur l’asthénosphère."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p04_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une discontinuité dans le globe terrestre ?",
          "options": [
            "La limite entre deux couches de propriétés différentes, repérée par un changement brusque de vitesse des ondes",
            "Une fissure à la surface du sol",
            "Un volcan éteint",
            "Une zone sans aucune roche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il y en a trois principales."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p04_q2",
          "type": "mcq",
          "prompt": "Quelle discontinuité sépare la croûte du manteau, entre 10 et 70 km de profondeur ?",
          "options": [
            "Le Moho",
            "La discontinuité de Gutenberg",
            "La discontinuité de Lehmann",
            "L’épicentre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La croûte est plus épaisse sous les continents."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p04_q3",
          "type": "mcq",
          "prompt": "À 2 900 km de profondeur, la vitesse des ondes P chute et les ondes S disparaissent. Que montre ce résultat ?",
          "options": [
            "Le passage du manteau solide au noyau externe liquide (discontinuité de Gutenberg)",
            "Le passage de la croûte au manteau",
            "Le passage du noyau à la graine",
            "La présence d’un océan souterrain sous la croûte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ondes S ne traversent pas les liquides."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p04_q4",
          "type": "mcq",
          "prompt": "Quelles couches la discontinuité de Lehmann sépare-t-elle ?",
          "options": [
            "Le noyau externe liquide et la graine solide",
            "Le manteau et le noyau",
            "La croûte et le manteau",
            "La lithosphère et l’asthénosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 3 : l’affirmation 4 est fausse."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la couche la plus interne de la Terre ?",
          "options": [
            "La graine (noyau interne), solide",
            "Le manteau",
            "La croûte",
            "Le noyau externe liquide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 3 : 3 et 6 sont fausses, 7 est vraie."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p04_q6",
          "type": "mcq",
          "prompt": "« La lithosphère est moins rigide que l’asthénosphère. » Vrai ou faux ?",
          "options": [
            "Faux : la lithosphère est rigide, l’asthénosphère plus déformable",
            "Vrai",
            "Faux : elles n’existent pas",
            "Vrai, car la lithosphère est liquide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les plaques lithosphériques glissent sur l’asthénosphère."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_p05",
      "order": 5,
      "title": "Évaluation : hodographes et exercices",
      "summary": "Calculer une vitesse, un retard ; associer ondes et propriétés.",
      "conceptExplanation": "Le document ne donne pas de corrigé pour ces exercices ; voici les solutions.\n- Situation 2 : on trace les hodographes avec les données du tableau (1 cm pour 1 000 km, 1 cm pour 2 minutes). Les ondes P sont les plus rapides, puis les S, puis les L.\n- Vitesse des ondes L : 8 200 km en 40 minutes, soit 8 200 ÷ 40 = 205 km par minute, environ 3,4 km/s.\n- Retard des ondes S sur les ondes P à 15 000 km : 30 − 16 = 14 minutes. Plus la station est loin, plus ce retard est grand : c’est ce qui permet de calculer la distance de l’épicentre.\n- Exercice 2 (associer) : 1 P ; 2 L ; 3 P ; 4 P ; 5 S et L ; 6 S ; 7 S ; 8 L.\n- Exercice 3 (vrai ou faux) : 1 V ; 2 F (les trois discontinuités sont le Moho, Gutenberg et Lehmann) ; 3 F (c’est la graine) ; 4 F (Lehmann sépare le noyau externe de la graine) ; 5 V ; 6 F (la graine est solide) ; 7 V ; 8 F ; 9 V (6 370 − 2 900 ≈ 3 470 km du centre) ; 10 F.\n- Situation 1 : A = Moho, B = discontinuité de Gutenberg, C = discontinuité de Lehmann. Les ondes P, S et L révèlent la croûte, le manteau, le noyau externe et la graine. Trois conséquences dans la croûte : fissures du sol, effondrement des constructions, glissements de terrain.\n- Activité 1 (vrai ou faux) : 1 faux (la magnitude est l’énergie libérée par un séisme) ; 2 vrai ; 3 vrai ; 4 faux (ce sont les ondes S et L) ; 5 vrai.",
      "keyRule": "Vitesse = distance ÷ temps. Retard S – P : il augmente avec la distance à l’épicentre.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la vitesse des ondes L",
        "statement": "Les ondes L parcourent 8 200 km en 40 minutes. Quelle est leur vitesse ?",
        "methodSteps": [
          "Vitesse = distance ÷ temps = 8 200 ÷ 40 = 205 km/min.",
          "205 ÷ 60 ≈ 3,4 km/s."
        ],
        "conclusion": "Les ondes L vont à environ 205 km/min, soit 3,4 km/s."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Vitesse",
          "stepTheme": "Calcul",
          "stepTitle": "La vitesse des ondes L",
          "paragraphText": "Les ondes L parcourent **8 200 km** en **40 min** : **8 200 ÷ 40 = 205 km/min**, environ **3,4 km/s**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p05_q1",
            "type": "mcq",
            "prompt": "Les ondes L d’un séisme parcourent 8 200 km en 40 minutes. Quelle est leur vitesse ?",
            "options": [
              "205 km par minute",
              "328 000 km par minute",
              "20,5 km par minute",
              "820 km par minute"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Vitesse = distance ÷ temps."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Distances parcourues par les ondes",
            "caption": "Situation d’évaluation 2.",
            "tableData": {
              "headers": [
                "Temps",
                "Ondes P",
                "Ondes S",
                "Ondes L"
              ],
              "rows": [
                [
                  "2 min",
                  "720 km",
                  "420 km",
                  "420 km"
                ],
                [
                  "8 min",
                  "4 500 km",
                  "2 000 km",
                  "1 700 km"
                ],
                [
                  "P 10 min ; S et L 13 min",
                  "6 500 km",
                  "4 500 km",
                  "3 000 km"
                ],
                [
                  "P 13 min ; S et L 20 min",
                  "10 000 km",
                  "7 500 km",
                  "4 100 km"
                ],
                [
                  "P 16 min ; S 30 min ; L 40 min",
                  "15 000 km",
                  "15 000 km",
                  "8 200 km"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Retard",
          "stepTheme": "Calcul",
          "stepTitle": "Le retard des ondes S",
          "paragraphText": "À **15 000 km**, les P arrivent en **16 min** et les S en **30 min** : retard de **14 min**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p05_q2",
            "type": "mcq",
            "prompt": "À 15 000 km de l’épicentre, les ondes P arrivent en 16 minutes et les ondes S en 30 minutes. Quel est le retard des ondes S sur les ondes P ?",
            "options": [
              "14 minutes",
              "46 minutes",
              "16 minutes",
              "30 minutes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "30 − 16 = 14."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Hodographes des ondes P, S et L",
            "caption": "Temps d’arrivée selon la distance à l’épicentre (données de la situation d’évaluation 2). Plus la courbe est basse, plus l’onde est rapide.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Hodographes : temps d’arrivée des ondes P, S et L selon la distance à l’épicentre\"><line x1=\"60\" y1=\"220\" x2=\"520\" y2=\"220\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"220\" x2=\"60\" y2=\"34\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"60\" y=\"236\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"205\" y=\"236\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">5 000</text><text x=\"350\" y=\"236\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">10 000</text><text x=\"495\" y=\"236\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">15 000</text><text x=\"52\" y=\"180\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">10</text><text x=\"52\" y=\"136\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">20</text><text x=\"52\" y=\"92\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">30</text><text x=\"52\" y=\"48\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">40</text><polyline points=\"60.0,220.0 72.2,211.2 109.3,184.8 147.0,162.8 178.9,132.0 297.8,44.0\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"72.2\" cy=\"211.2\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"109.3\" cy=\"184.8\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"147.0\" cy=\"162.8\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"178.9\" cy=\"132.0\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"297.8\" cy=\"44.0\" r=\"3\" fill=\"#EF4444\"/><polyline points=\"60.0,220.0 72.2,211.2 118.0,184.8 190.5,162.8 277.5,132.0 495.0,88.0\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-dasharray=\"7 4\"/><circle cx=\"72.2\" cy=\"211.2\" r=\"3\" fill=\"#F59E0B\"/><circle cx=\"118.0\" cy=\"184.8\" r=\"3\" fill=\"#F59E0B\"/><circle cx=\"190.5\" cy=\"162.8\" r=\"3\" fill=\"#F59E0B\"/><circle cx=\"277.5\" cy=\"132.0\" r=\"3\" fill=\"#F59E0B\"/><circle cx=\"495.0\" cy=\"88.0\" r=\"3\" fill=\"#F59E0B\"/><polyline points=\"60.0,220.0 80.9,211.2 190.5,184.8 248.5,176.0 350.0,162.8 495.0,149.6\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"80.9\" cy=\"211.2\" r=\"3\" fill=\"#3B82F6\"/><circle cx=\"190.5\" cy=\"184.8\" r=\"3\" fill=\"#3B82F6\"/><circle cx=\"248.5\" cy=\"176.0\" r=\"3\" fill=\"#3B82F6\"/><circle cx=\"350.0\" cy=\"162.8\" r=\"3\" fill=\"#3B82F6\"/><circle cx=\"495.0\" cy=\"149.6\" r=\"3\" fill=\"#3B82F6\"/><text x=\"305.8\" y=\"48\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"#EF4444\">ondes L</text><text x=\"491\" y=\"80\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"#F59E0B\">ondes S</text><text x=\"491\" y=\"167.6\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"#3B82F6\">ondes P</text><text x=\"290\" y=\"249\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">distance à l’épicentre (km)</text><text x=\"64\" y=\"26\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">temps (min)</text></svg>"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Distance",
          "stepTheme": "Interprétation",
          "stepTitle": "Le retard augmente avec la distance",
          "paragraphText": "Plus la station est **loin** de l’épicentre, plus le **retard** des ondes S sur les ondes P est **grand** : on s’en sert pour calculer la **distance** de l’épicentre.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p05_q3",
            "type": "mcq",
            "prompt": "Comment évolue le retard des ondes S sur les ondes P quand la station s’éloigne de l’épicentre ?",
            "options": [
              "Il augmente",
              "Il diminue",
              "Il reste toujours le même",
              "Il devient négatif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les P prennent de plus en plus d’avance."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Exercice 2",
          "stepTitle": "Quelle onde ?",
          "paragraphText": "« Elles ne sont transmises que par les **solides**, car les liquides n’offrent aucune résistance aux **cisaillements** » : ce sont les **ondes S**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p05_q4",
            "type": "mcq",
            "prompt": "Quelles ondes sismiques ne sont transmises que par les solides, car les liquides n’offrent aucune résistance aux cisaillements ?",
            "options": [
              "Les ondes S",
              "Les ondes P",
              "Les ondes L",
              "Toutes les ondes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1 P, 2 L, 3 P, 4 P, 5 S et L, 6 S, 7 S, 8 L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "A, B, C",
          "stepTheme": "Situation 1",
          "stepTitle": "Annoter les discontinuités",
          "paragraphText": "Sur le schéma du globe : **A = Moho**, **B = Gutenberg**, **C = Lehmann**.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p05_q5",
            "type": "mcq",
            "prompt": "Sur une coupe du globe, A sépare la croûte du manteau, B le manteau du noyau externe, C le noyau externe de la graine. Que sont A, B et C ?",
            "options": [
              "A : Moho ; B : discontinuité de Gutenberg ; C : discontinuité de Lehmann",
              "A : Gutenberg ; B : Moho ; C : Lehmann",
              "A : Lehmann ; B : Gutenberg ; C : Moho",
              "A : épicentre ; B : foyer ; C : faille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De la surface vers le centre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Ondes P destructrices ?",
          "stepTheme": "Activité 1",
          "stepTitle": "Quelles ondes détruisent ?",
          "paragraphText": "« Les ondes **P** sont les plus destructrices » : **faux**. Ce sont les ondes **S** et surtout les ondes **L**, de grande amplitude.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_p05_q6",
            "type": "mcq",
            "prompt": "« Les ondes P sont les plus destructrices. » Vrai ou faux ?",
            "options": [
              "Faux : ce sont les ondes S et L",
              "Vrai",
              "Faux : aucune onde n’est destructrice",
              "Vrai, car elles arrivent en premier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 1 : 2, 3 et 5 vraies ; 1 et 4 fausses."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p05_q1",
          "type": "mcq",
          "prompt": "Les ondes L d’un séisme parcourent 8 200 km en 40 minutes. Quelle est leur vitesse ?",
          "options": [
            "205 km par minute",
            "328 000 km par minute",
            "20,5 km par minute",
            "820 km par minute"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Vitesse = distance ÷ temps."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p05_q2",
          "type": "mcq",
          "prompt": "À 15 000 km de l’épicentre, les ondes P arrivent en 16 minutes et les ondes S en 30 minutes. Quel est le retard des ondes S sur les ondes P ?",
          "options": [
            "14 minutes",
            "46 minutes",
            "16 minutes",
            "30 minutes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "30 − 16 = 14."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p05_q3",
          "type": "mcq",
          "prompt": "Comment évolue le retard des ondes S sur les ondes P quand la station s’éloigne de l’épicentre ?",
          "options": [
            "Il augmente",
            "Il diminue",
            "Il reste toujours le même",
            "Il devient négatif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les P prennent de plus en plus d’avance."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p05_q4",
          "type": "mcq",
          "prompt": "Quelles ondes sismiques ne sont transmises que par les solides, car les liquides n’offrent aucune résistance aux cisaillements ?",
          "options": [
            "Les ondes S",
            "Les ondes P",
            "Les ondes L",
            "Toutes les ondes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1 P, 2 L, 3 P, 4 P, 5 S et L, 6 S, 7 S, 8 L."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p05_q5",
          "type": "mcq",
          "prompt": "Sur une coupe du globe, A sépare la croûte du manteau, B le manteau du noyau externe, C le noyau externe de la graine. Que sont A, B et C ?",
          "options": [
            "A : Moho ; B : discontinuité de Gutenberg ; C : discontinuité de Lehmann",
            "A : Gutenberg ; B : Moho ; C : Lehmann",
            "A : Lehmann ; B : Gutenberg ; C : Moho",
            "A : épicentre ; B : foyer ; C : faille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De la surface vers le centre."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_p05_q6",
          "type": "mcq",
          "prompt": "« Les ondes P sont les plus destructrices. » Vrai ou faux ?",
          "options": [
            "Faux : ce sont les ondes S et L",
            "Vrai",
            "Faux : aucune onde n’est destructrice",
            "Vrai, car elles arrivent en premier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 1 : 2, 3 et 5 vraies ; 1 et 4 fausses."
        }
      ]
    }
  ]
};
