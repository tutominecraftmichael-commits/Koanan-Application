import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : La communication nerveuse » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2128
export const SVT_TLE_C_L01_COMMUNICATION_NERVEUSE: CurriculumChapter = {
  "id": "terminale_c_svt_l01_communication_nerveuse",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : La communication nerveuse",
  "summary": "On détermine la nature du message nerveux et on explique le mécanisme de sa transmission : le neurone, les potentiels de membrane et d’action, puis le passage de l’influx à travers la synapse.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2128",
  "points": [
    {
      "id": "terminale_c_svt_l01_communication_nerveuse_p01",
      "order": 1,
      "title": "Le neurone, structure de propagation de l’influx nerveux",
      "summary": "Le nerf et le neurone sont les structures le long desquelles se propage l’influx nerveux.",
      "conceptExplanation": "Le nerf est formé essentiellement d’une gaine conjonctive, de faisceaux de fibres nerveuses ou axones et de vaisseaux sanguins situés dans un tissu conjonctif.\nLa gaine conjonctive est constituée d’une membrane externe appelée épinèvre et d’une membrane interne appelée périnèvre qui entoure chaque faisceau de fibres.\nLe neurone est une cellule allongée constituée de trois grandes parties : le corps cellulaire ou soma ou péricaryon, l’axone ou cylindraxe et l’arborisation terminale.\nL’influx nerveux se propage le long d’une structure particulière appelée neurone ou cellule nerveuse, représentant l’unité fonctionnelle du tissu nerveux.",
      "keyRule": "Le neurone est l’unité fonctionnelle du tissu nerveux : c’est le long de cette structure que se propage l’influx nerveux.",
      "formulas": [],
      "workedExample": {
        "title": "L’élève piqué par une épine (situation d’apprentissage)",
        "statement": "Un élève en jardinage est piqué par une épine et laisse tomber brusquement la daba. Explique la structure impliquée dans cette réaction.",
        "methodSteps": [
          "La piqûre déclenche un influx nerveux qui doit se propager dans l’organisme.",
          "L’observation d’un nerf montre des faisceaux de fibres nerveuses ou axones entourés de gaines conjonctives.",
          "L’observation d’un neurone montre un corps cellulaire, un axone et une arborisation terminale."
        ],
        "conclusion": "La réaction rapide s’explique par la propagation de l’influx nerveux le long des neurones."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du neurone",
          "stepTheme": "Définition du neurone",
          "stepBadge": "Définition du neurone",
          "paragraphText": "• Neurone : cellule nerveuse allongée, unité fonctionnelle du tissu nerveux.\nIl est constitué du corps cellulaire ou péricaryon, de l’axone et de l’arborisation terminale.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p01_q1",
            "type": "mcq",
            "prompt": "Un neurone est constitué de :",
            "options": [
              "Un corps cellulaire, un axone et une arborisation terminale",
              "Uniquement des dendrites et un noyau",
              "Un faisceau de fibres et des vaisseaux sanguins seuls",
              "Une gaine de myéline sans corps cellulaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé décrit le neurone comme une cellule allongée en trois grandes parties : corps cellulaire, axone et arborisation terminale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La composition du nerf",
          "stepTheme": "La composition du nerf",
          "stepBadge": "La composition du nerf",
          "paragraphText": "Le nerf est formé d’une gaine conjonctive, de faisceaux de fibres nerveuses ou axones et de vaisseaux sanguins dans un tissu conjonctif.\nL’épinèvre est la membrane externe et le périnèvre entoure chaque faisceau de fibres.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p01_q2",
            "type": "mcq",
            "prompt": "Le périnèvre est :",
            "options": [
              "La membrane externe du nerf",
              "La membrane interne qui entoure chaque faisceau de fibres",
              "Le cytoplasme du neurone",
              "Une vésicule synaptique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le résumé, l’épinèvre est externe et le périnèvre, interne, entoure chaque faisceau de fibres."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le corps cellulaire ou péricaryon",
          "stepTheme": "Le corps cellulaire ou péricaryon",
          "stepBadge": "Le corps cellulaire ou péricaryon",
          "paragraphText": "• Corps cellulaire, soma ou péricaryon : partie du neurone qui contient notamment le noyau.\nDans l’organisme, l’influx nerveux se déplace toujours du corps cellulaire du neurone vers les terminaisons nerveuses.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’organisme, l’influx nerveux se déplace :",
            "options": [
              "Des terminaisons vers le corps cellulaire uniquement",
              "Du corps cellulaire vers les terminaisons nerveuses",
              "Sans sens défini",
              "Uniquement dans les vaisseaux sanguins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale du résumé précise que l’influx va toujours du corps cellulaire vers les terminaisons nerveuses."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Identifier les parties sur un schéma",
          "stepTheme": "Identifier les parties sur un schéma",
          "stepBadge": "Identifier les parties sur un schéma",
          "paragraphText": "Méthode : sur le schéma d’un neurone, on repère le péricaryon, les dendrites, l’axone entouré éventuellement de gaine de myéline et de cellules de Schwann, les nœuds de Ranvier, puis l’arborisation terminale.\nCette lecture ordonnée évite de confondre nerf et neurone.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p01_q4",
            "type": "mcq",
            "prompt": "Sur la figure du neurone, la gaine de myéline entoure :",
            "options": [
              "Le péricaryon",
              "Le noyau",
              "L’axone",
              "L’arborisation terminale seule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’annotation de la figure place la gaine de myéline et les cellules de Schwann le long de l’axone."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre nerf et neurone",
          "stepTheme": "Ne pas confondre nerf et neurone",
          "stepBadge": "Ne pas confondre nerf et neurone",
          "paragraphText": "Piège : le nerf n’est pas l’unité fonctionnelle du système nerveux.\nLe nerf est un ensemble de faisceaux de fibres, alors que le neurone est la cellule, unité fonctionnelle du tissu nerveux.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p01_q5",
            "type": "mcq",
            "prompt": "L’unité fonctionnelle du tissu nerveux est :",
            "options": [
              "Le nerf",
              "La gaine conjonctive",
              "L’épinèvre",
              "Le neurone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé conclut que le neurone représente l’unité fonctionnelle du tissu nerveux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La fibre nerveuse, portion du neurone",
          "stepTheme": "La fibre nerveuse, portion du neurone",
          "stepBadge": "La fibre nerveuse, portion du neurone",
          "paragraphText": "Exemple de l’exercice 1 : la fibre nerveuse est une portion du neurone et le neurone est constitué de l’arborisation terminale, de l’axone et du corps cellulaire.\nToutes les fibres nerveuses ne sont pas myélinisées.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p01_q6",
            "type": "mcq",
            "prompt": "La fibre nerveuse est :",
            "options": [
              "Un organe distinct du neurone sans lien avec lui",
              "Une portion du neurone",
              "La gaine conjonctive du nerf",
              "Un vaisseau sanguin du nerf"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exercice 1 du résumé retient que la fibre nerveuse est une portion du neurone."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p01_q1",
          "type": "mcq",
          "prompt": "Un neurone est constitué de :",
          "options": [
            "Un corps cellulaire, un axone et une arborisation terminale",
            "Uniquement des dendrites et un noyau",
            "Un faisceau de fibres et des vaisseaux sanguins seuls",
            "Une gaine de myéline sans corps cellulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé décrit le neurone comme une cellule allongée en trois grandes parties : corps cellulaire, axone et arborisation terminale."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p01_q2",
          "type": "mcq",
          "prompt": "Le périnèvre est :",
          "options": [
            "La membrane externe du nerf",
            "La membrane interne qui entoure chaque faisceau de fibres",
            "Le cytoplasme du neurone",
            "Une vésicule synaptique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le résumé, l’épinèvre est externe et le périnèvre, interne, entoure chaque faisceau de fibres."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’organisme, l’influx nerveux se déplace :",
          "options": [
            "Des terminaisons vers le corps cellulaire uniquement",
            "Du corps cellulaire vers les terminaisons nerveuses",
            "Sans sens défini",
            "Uniquement dans les vaisseaux sanguins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale du résumé précise que l’influx va toujours du corps cellulaire vers les terminaisons nerveuses."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p01_q4",
          "type": "mcq",
          "prompt": "Sur la figure du neurone, la gaine de myéline entoure :",
          "options": [
            "Le péricaryon",
            "Le noyau",
            "L’axone",
            "L’arborisation terminale seule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’annotation de la figure place la gaine de myéline et les cellules de Schwann le long de l’axone."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p01_q5",
          "type": "mcq",
          "prompt": "L’unité fonctionnelle du tissu nerveux est :",
          "options": [
            "Le nerf",
            "La gaine conjonctive",
            "L’épinèvre",
            "Le neurone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé conclut que le neurone représente l’unité fonctionnelle du tissu nerveux."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p01_q6",
          "type": "mcq",
          "prompt": "La fibre nerveuse est :",
          "options": [
            "Un organe distinct du neurone sans lien avec lui",
            "Une portion du neurone",
            "La gaine conjonctive du nerf",
            "Un vaisseau sanguin du nerf"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exercice 1 du résumé retient que la fibre nerveuse est une portion du neurone."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l01_communication_nerveuse_p02",
      "order": 2,
      "title": "Le potentiel de membrane ou potentiel de repos",
      "summary": "Au repos, la membrane de l’axone présente une différence de potentiel de -70 mV maintenue par les mouvements d’ions.",
      "conceptExplanation": "En l’absence d’excitation, lorsque les deux électrodes réceptrices sont à la surface de l’axone, on enregistre un potentiel de 0 mV : c’est le potentiel de référence, qui indique que toute la surface de l’axone est au même potentiel.\nLorsque l’une des électrodes est enfoncée dans l’axone, on enregistre une déviation qui se stabilise à -70 mV : c’est le potentiel de membrane. La face interne est chargée négativement et la face externe positivement.\nSur le plan ionique, le milieu intracellulaire est plus concentré en ions K+ et le milieu extracellulaire plus concentré en ions Na+. Au repos, la membrane est plus perméable aux ions K+ qu’aux ions Na+, d’où une forte sortie de K+, mouvement passif selon le gradient de concentration.\nCe déséquilibre est maintenu grâce à la pompe ionique Na+/K+ qui refoule 3 Na+ pour 2 K+ entrants.",
      "keyRule": "Au repos, l’intérieur de l’axone est négatif (-70 mV) et la pompe Na+/K+ maintient l’inégale répartition des ions.",
      "formulas": [],
      "workedExample": {
        "title": "Expériences 1 et 2 sur l’axone géant de calmar",
        "statement": "On place les microélectrodes R1 et R2 d’abord toutes deux à la surface, puis R2 à l’intérieur de l’axone, sans stimulation. Interprète les enregistrements.",
        "methodSteps": [
          "Expérience 1, deux électrodes à la surface : l’oscilloscope indique 0 mV.",
          "Expérience 2, R2 enfoncée dans l’axone : le spot se stabilise à -70 mV.",
          "On en déduit que les deux faces de la membrane ne sont pas au même potentiel."
        ],
        "conclusion": "0 mV est le potentiel de référence et -70 mV le potentiel de membrane, avec l’intérieur négatif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du potentiel de membrane",
          "stepTheme": "Définition du potentiel de membrane",
          "stepBadge": "Définition du potentiel de membrane",
          "paragraphText": "• Potentiel de membrane : différence de potentiel de -70 mV enregistrée entre l’intérieur et l’extérieur de l’axone au repos.\nLa face interne est électronégative et la face externe électropositive.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p02_q1",
            "type": "mcq",
            "prompt": "Le potentiel de membrane au repos vaut :",
            "options": [
              "0 mV",
              "-70 mV",
              "+70 mV",
              "-7 mV"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’expérience 2 du résumé donne une déviation stabilisée à -70 mV."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le potentiel de référence",
          "stepTheme": "Le potentiel de référence",
          "stepBadge": "Le potentiel de référence",
          "paragraphText": "• Potentiel de référence : potentiel de 0 mV obtenu quand les deux électrodes sont à la surface de l’axone, en absence d’excitation.\nIl indique que toute la surface de l’axone porte la même charge.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p02_q2",
            "type": "mcq",
            "prompt": "Le potentiel de référence de 0 mV indique que :",
            "options": [
              "L’intérieur est négatif",
              "La membrane est dépolarisée",
              "Toute la surface de l’axone est au même potentiel",
              "Les canaux sodiques sont ouverts"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé interprète 0 mV comme l’égalité de potentiel sur toute la surface."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La répartition inégale des ions",
          "stepTheme": "La répartition inégale des ions",
          "stepBadge": "La répartition inégale des ions",
          "paragraphText": "Le milieu intracellulaire est plus concentré en ions K+ que le milieu extracellulaire.\nLe milieu extracellulaire est plus concentré en ions Na+ que le milieu intracellulaire : cette inégale répartition est à l’origine du potentiel de membrane.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p02_q3",
            "type": "mcq",
            "prompt": "Au repos, le milieu intracellulaire est le plus concentré en :",
            "options": [
              "Ions Na+",
              "Ions Ca2+",
              "Ions Cl-",
              "Ions K+"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après le résumé, l’intérieur est plus concentré en K+ et l’extérieur en Na+."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La perméabilité au repos",
          "stepTheme": "La perméabilité au repos",
          "stepBadge": "La perméabilité au repos",
          "paragraphText": "Au repos, la membrane de l’axone est plus perméable aux ions K+ qu’aux ions Na+.\nIl en résulte une forte sortie de K+ selon son gradient de concentration, mouvement passif, et une accumulation de charges positives à l’extérieur.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p02_q4",
            "type": "mcq",
            "prompt": "Au repos, le mouvement dominant des ions K+ est :",
            "options": [
              "Une sortie passive selon le gradient de concentration",
              "Une entrée active contre le gradient",
              "Un blocage total",
              "Une sortie par exocytose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé décrit une forte sortie passive de K+, la membrane étant plus perméable à K+ qu’à Na+."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rôle exact de la pompe Na+/K+",
          "stepTheme": "Le rôle exact de la pompe Na+/K+",
          "stepBadge": "Le rôle exact de la pompe Na+/K+",
          "paragraphText": "Piège : la pompe ne crée pas le potentiel par un mouvement passif, elle maintient activement le déséquilibre.\nElle refoule 3 Na+ pour 2 K+ entrants, contre le gradient, grâce à l’énergie de l’hydrolyse de l’ATP.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p02_q5",
            "type": "mcq",
            "prompt": "La pompe Na+/K+ fait :",
            "options": [
              "Entrer 3 Na+ et sortir 2 K+",
              "Sortir 3 Na+ et entrer 2 K+",
              "Sortir autant de Na+ que de K+",
              "Entrer les ions Ca2+"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé indique que la pompe refoule 3 Na+ pour 2 K+ entrants."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire un enregistrement au repos",
          "stepTheme": "Lire un enregistrement au repos",
          "stepBadge": "Lire un enregistrement au repos",
          "paragraphText": "Exemple : deux électrodes à la surface donnent 0 mV, puis l’enfoncement d’une électrode fait passer l’enregistrement à -70 mV.\nCe changement prouve la différence de charge entre les deux faces de la membrane.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p02_q6",
            "type": "mcq",
            "prompt": "Quand on enfonce R2 dans l’axone au repos, l’enregistrement passe à :",
            "options": [
              "0 mV",
              "-70 mV",
              "Un potentiel d’action diphasique",
              "Une hyperpolarisation définitive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le résultat de l’expérience 2 : stabilisation à -70 mV."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p02_q1",
          "type": "mcq",
          "prompt": "Le potentiel de membrane au repos vaut :",
          "options": [
            "0 mV",
            "-70 mV",
            "+70 mV",
            "-7 mV"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’expérience 2 du résumé donne une déviation stabilisée à -70 mV."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p02_q2",
          "type": "mcq",
          "prompt": "Le potentiel de référence de 0 mV indique que :",
          "options": [
            "L’intérieur est négatif",
            "La membrane est dépolarisée",
            "Toute la surface de l’axone est au même potentiel",
            "Les canaux sodiques sont ouverts"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé interprète 0 mV comme l’égalité de potentiel sur toute la surface."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p02_q3",
          "type": "mcq",
          "prompt": "Au repos, le milieu intracellulaire est le plus concentré en :",
          "options": [
            "Ions Na+",
            "Ions Ca2+",
            "Ions Cl-",
            "Ions K+"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après le résumé, l’intérieur est plus concentré en K+ et l’extérieur en Na+."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p02_q4",
          "type": "mcq",
          "prompt": "Au repos, le mouvement dominant des ions K+ est :",
          "options": [
            "Une sortie passive selon le gradient de concentration",
            "Une entrée active contre le gradient",
            "Un blocage total",
            "Une sortie par exocytose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé décrit une forte sortie passive de K+, la membrane étant plus perméable à K+ qu’à Na+."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p02_q5",
          "type": "mcq",
          "prompt": "La pompe Na+/K+ fait :",
          "options": [
            "Entrer 3 Na+ et sortir 2 K+",
            "Sortir 3 Na+ et entrer 2 K+",
            "Sortir autant de Na+ que de K+",
            "Entrer les ions Ca2+"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé indique que la pompe refoule 3 Na+ pour 2 K+ entrants."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p02_q6",
          "type": "mcq",
          "prompt": "Quand on enfonce R2 dans l’axone au repos, l’enregistrement passe à :",
          "options": [
            "0 mV",
            "-70 mV",
            "Un potentiel d’action diphasique",
            "Une hyperpolarisation définitive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le résultat de l’expérience 2 : stabilisation à -70 mV."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l01_communication_nerveuse_p03",
      "order": 3,
      "title": "Le potentiel d’action monophasique et ses phases",
      "summary": "Après stimulation efficace, la membrane présente une variation de potentiel en plusieurs phases, expliquée par les mouvements de Na+ et de K+.",
      "conceptExplanation": "Lorsqu’on excite l’axone en maintenant l’électrode R2 enfoncée, on observe une variation du potentiel de membrane matérialisée par une courbe : A artefact de stimulation, AB temps de latence, BC dépolarisation, CD repolarisation, DE hyperpolarisation, EF restauration. Cette courbe est le potentiel d’action monophasique.\nSur le plan ionique, pendant le temps de latence, les canaux à Na+ et à K+ voltage dépendants restent fermés. La dépolarisation est due à une entrée massive d’ions Na+ suite à l’ouverture des canaux sodiques voltage dépendants.\nLa repolarisation s’explique par une sortie progressive d’ions K+ suite à l’ouverture des canaux K+ voltage dépendants, les canaux Na+ restant fermés. L’hyperpolarisation est due au fait que les canaux K+ restent longtemps ouverts, entraînant une sortie exagérée de K+.\nLa restauration ramène le potentiel de repos grâce à la pompe Na+/K+. Le potentiel d’action correspond donc à une inversion momentanée de la polarité entre les deux faces de la membrane.",
      "keyRule": "Dépolarisation = entrée massive de Na+ ; repolarisation = sortie de K+ ; le potentiel d’action est une inversion momentanée de polarité.",
      "formulas": [],
      "workedExample": {
        "title": "Décrire le potentiel d’action obtenu (situation d’évaluation)",
        "statement": "À partir des expériences sur une chaîne de neurones, décris le potentiel d’action obtenu après une stimulation efficace.",
        "methodSteps": [
          "On repère d’abord l’artefact de stimulation A, qui marque le moment précis de la stimulation.",
          "On suit ensuite le temps de latence AB, puis la dépolarisation BC qui inverse la polarité.",
          "On termine par la repolarisation CD, l’hyperpolarisation DE et la restauration EF."
        ],
        "conclusion": "Le potentiel d’action monophasique enchaîne latence, dépolarisation, repolarisation, hyperpolarisation et restauration."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du potentiel d’action monophasique",
          "stepTheme": "Définition du potentiel d’action monophasique",
          "stepBadge": "Définition du potentiel d’action monophasique",
          "paragraphText": "• Potentiel d’action monophasique : courbe à un sommet obtenue quand une électrode réceptrice est enfoncée dans l’axone excité.\nElle présente les phases A, AB, BC, CD, DE et EF décrites dans le résumé.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p03_q1",
            "type": "mcq",
            "prompt": "Le potentiel d’action monophasique est obtenu quand :",
            "options": [
              "Les deux électrodes sont à la surface",
              "Une électrode est enfoncée dans l’axone excité",
              "Il n’y a aucune stimulation",
              "Les deux électrodes sont dans le muscle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’expérience 3 maintient R2 enfoncée dans l’axone pendant la stimulation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase de dépolarisation",
          "stepTheme": "La phase de dépolarisation",
          "stepBadge": "La phase de dépolarisation",
          "paragraphText": "La dépolarisation BC indique l’inversion de la polarité à l’arrivée de l’influx : la face externe devient électronégative et la face interne électropositive.\nIoniquement, elle est due à l’entrée massive de Na+ par les canaux sodiques voltage dépendants ouverts.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p03_q2",
            "type": "mcq",
            "prompt": "La dépolarisation est due à :",
            "options": [
              "Une sortie massive de K+",
              "Une entrée massive de Na+",
              "L’ouverture des canaux à Ca2+ synaptiques",
              "L’action de la pompe seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé attribue la dépolarisation à l’entrée massive de Na+, canaux K+ fermés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La phase de repolarisation",
          "stepTheme": "La phase de repolarisation",
          "stepBadge": "La phase de repolarisation",
          "paragraphText": "La repolarisation CD indique le retour de la polarité initiale sous l’électrode : l’extérieur redevient positif et l’intérieur négatif.\nElle s’explique par la sortie progressive de K+ par les canaux K+ voltage dépendants ouverts.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p03_q3",
            "type": "mcq",
            "prompt": "La repolarisation s’explique par :",
            "options": [
              "L’entrée massive de Na+",
              "La sortie progressive de K+",
              "L’entrée de Ca2+",
              "La libération d’acétylcholine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pendant la repolarisation, les canaux K+ sont ouverts et les canaux Na+ fermés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Temps de latence et hyperpolarisation",
          "stepTheme": "Temps de latence et hyperpolarisation",
          "stepBadge": "Temps de latence et hyperpolarisation",
          "paragraphText": "• Temps de latence AB : temps mis par l’influx nerveux pour atteindre la première électrode réceptrice.\n• Hyperpolarisation DE : repolarisation exagérée qui fait descendre le spot en dessous du potentiel de repos, car les canaux K+ restent longtemps ouverts.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p03_q4",
            "type": "mcq",
            "prompt": "L’hyperpolarisation est due au fait que :",
            "options": [
              "Les canaux Na+ restent ouverts",
              "Les canaux K+ restent longtemps ouverts",
              "La pompe s’arrête définitivement",
              "Les ions Cl- entrent massivement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé explique l’hyperpolarisation par la sortie exagérée de K+."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le potentiel d’action n’est pas toujours monophasique",
          "stepTheme": "Le potentiel d’action n’est pas toujours monophasique",
          "stepBadge": "Le potentiel d’action n’est pas toujours monophasique",
          "paragraphText": "Piège repris dans l’exercice 1 : affirmer que le potentiel d’action est toujours monophasique est faux.\nSelon la position des électrodes, il peut être monophasique ou diphasique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p03_q5",
            "type": "mcq",
            "prompt": "L’affirmation « le potentiel d’action est toujours monophasique » est :",
            "options": [
              "Vraie, car il n’existe qu’une forme",
              "Fausse, il peut aussi être diphasique",
              "Vraie seulement au repos",
              "Sans lien avec les électrodes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’expérience 4 obtient un potentiel d’action diphasique avec deux électrodes à la surface."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La restauration du potentiel de repos",
          "stepTheme": "La restauration du potentiel de repos",
          "stepBadge": "La restauration du potentiel de repos",
          "paragraphText": "Exemple de la phase EF : la membrane retrouve son potentiel de repos initial grâce à la pompe Na+/K+.\nLa pompe fait sortir les Na+ entrés et entrer les K+ sortis, contre leur gradient, grâce à l’énergie de l’hydrolyse de l’ATP.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p03_q6",
            "type": "mcq",
            "prompt": "La restauration du potentiel de repos repose surtout sur :",
            "options": [
              "Les vésicules synaptiques",
              "La pompe Na+/K+",
              "Les cellules de Schwann",
              "L’acétylcholinestérase"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé attribue la phase de restauration à la pompe ionique Na+/K+."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p03_q1",
          "type": "mcq",
          "prompt": "Le potentiel d’action monophasique est obtenu quand :",
          "options": [
            "Les deux électrodes sont à la surface",
            "Une électrode est enfoncée dans l’axone excité",
            "Il n’y a aucune stimulation",
            "Les deux électrodes sont dans le muscle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’expérience 3 maintient R2 enfoncée dans l’axone pendant la stimulation."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p03_q2",
          "type": "mcq",
          "prompt": "La dépolarisation est due à :",
          "options": [
            "Une sortie massive de K+",
            "Une entrée massive de Na+",
            "L’ouverture des canaux à Ca2+ synaptiques",
            "L’action de la pompe seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé attribue la dépolarisation à l’entrée massive de Na+, canaux K+ fermés."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p03_q3",
          "type": "mcq",
          "prompt": "La repolarisation s’explique par :",
          "options": [
            "L’entrée massive de Na+",
            "La sortie progressive de K+",
            "L’entrée de Ca2+",
            "La libération d’acétylcholine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pendant la repolarisation, les canaux K+ sont ouverts et les canaux Na+ fermés."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p03_q4",
          "type": "mcq",
          "prompt": "L’hyperpolarisation est due au fait que :",
          "options": [
            "Les canaux Na+ restent ouverts",
            "Les canaux K+ restent longtemps ouverts",
            "La pompe s’arrête définitivement",
            "Les ions Cl- entrent massivement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé explique l’hyperpolarisation par la sortie exagérée de K+."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p03_q5",
          "type": "mcq",
          "prompt": "L’affirmation « le potentiel d’action est toujours monophasique » est :",
          "options": [
            "Vraie, car il n’existe qu’une forme",
            "Fausse, il peut aussi être diphasique",
            "Vraie seulement au repos",
            "Sans lien avec les électrodes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’expérience 4 obtient un potentiel d’action diphasique avec deux électrodes à la surface."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p03_q6",
          "type": "mcq",
          "prompt": "La restauration du potentiel de repos repose surtout sur :",
          "options": [
            "Les vésicules synaptiques",
            "La pompe Na+/K+",
            "Les cellules de Schwann",
            "L’acétylcholinestérase"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé attribue la phase de restauration à la pompe ionique Na+/K+."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l01_communication_nerveuse_p04",
      "order": 4,
      "title": "Le potentiel d’action diphasique et la propagation par courants locaux",
      "summary": "Avec deux électrodes à la surface, on obtient un potentiel diphasique et l’influx se propage le long de l’axone par courants locaux.",
      "conceptExplanation": "Lorsque les deux électrodes réceptrices sont à la surface de l’axone excité, on obtient une courbe à deux sommets inversés appelée potentiel d’action diphasique, dont chaque sommet présente les mêmes phases que le potentiel d’action monophasique.\nL’influx nerveux est une onde de négativité qui se propage le long de l’axone en le dépolarisant localement sous forme de courants locaux.\nL’influx se propage donc grâce à des courants locaux issus de l’inversion de la polarité entre les deux faces de la membrane plasmique. Cette inversion est due aux mouvements des ions Na+ et K+ de part et d’autre de la membrane.\nDans l’organisme, l’influx nerveux se déplace toujours du corps cellulaire du neurone vers les terminaisons nerveuses et, au niveau d’un neurone, il est transmis dans un seul sens.",
      "keyRule": "L’influx nerveux est une onde de négativité qui se propage le long de l’axone sous forme de courants locaux.",
      "formulas": [],
      "workedExample": {
        "title": "Expérience 4 : deux électrodes à la surface",
        "statement": "On excite l’axone alors que R1 et R2 sont toutes deux placées à sa surface. Quel enregistrement obtient-on et comment l’influx se propage-t-il ?",
        "methodSteps": [
          "Les deux électrodes étant à la surface, chaque passage de l’onde sous une électrode donne un sommet.",
          "Les deux sommets sont inversés : la courbe est diphasique.",
          "La dépolarisation locale crée des courants locaux qui dépolarisent la zone voisine."
        ],
        "conclusion": "On obtient un potentiel d’action diphasique et l’influx se propage par courants locaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du potentiel d’action diphasique",
          "stepTheme": "Définition du potentiel d’action diphasique",
          "stepBadge": "Définition du potentiel d’action diphasique",
          "paragraphText": "• Potentiel d’action diphasique : courbe à deux sommets inversés obtenue quand les deux électrodes réceptrices sont à la surface de l’axone excité.\nChaque sommet présente les mêmes phases que le potentiel monophasique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p04_q1",
            "type": "mcq",
            "prompt": "Le potentiel d’action diphasique comporte :",
            "options": [
              "Un seul sommet",
              "Deux sommets inversés",
              "Aucun sommet",
              "Uniquement une hyperpolarisation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée par l’analyse de la figure 4 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’influx, onde de négativité",
          "stepTheme": "L’influx, onde de négativité",
          "stepBadge": "L’influx, onde de négativité",
          "paragraphText": "L’influx nerveux est une onde de négativité qui se propage le long de l’axone.\nIl dépolarise localement la membrane sous forme de courants locaux.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p04_q2",
            "type": "mcq",
            "prompt": "L’influx nerveux se propage le long de l’axone sous forme de :",
            "options": [
              "Courants locaux",
              "Vésicules synaptiques",
              "Fibres musculaires",
              "Molécules d’ATP seules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé conclut à une propagation par courants locaux issus de l’inversion de polarité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Choisir la forme du potentiel selon le montage",
          "stepTheme": "Choisir la forme du potentiel selon le montage",
          "stepBadge": "Choisir la forme du potentiel selon le montage",
          "paragraphText": "Méthode : une électrode interne et une à la surface donnent un potentiel monophasique ; deux électrodes à la surface donnent un potentiel diphasique.\nLe montage expérimental détermine donc la forme de la courbe enregistrée.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p04_q3",
            "type": "mcq",
            "prompt": "Deux électrodes à la surface d’un axone excité donnent :",
            "options": [
              "Un potentiel de membrane de -70 mV stable",
              "Un potentiel de référence de 0 mV",
              "Un potentiel d’action diphasique",
              "Aucun enregistrement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le résultat de l’expérience 4 du document II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le sens unique sur un neurone",
          "stepTheme": "Le sens unique sur un neurone",
          "stepBadge": "Le sens unique sur un neurone",
          "paragraphText": "Dans l’organisme, l’influx nerveux est transmis dans un seul sens au niveau d’un neurone.\nIl se déplace du corps cellulaire vers les terminaisons nerveuses.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p04_q4",
            "type": "mcq",
            "prompt": "Sur un neurone, l’influx nerveux est transmis :",
            "options": [
              "Dans les deux sens indifféremment",
              "Dans un seul sens",
              "Uniquement vers le corps cellulaire",
              "Uniquement dans le nerf"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exercice 1 retient la transmission dans un seul sens au niveau d’un neurone."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre potentiel de référence et potentiel d’action",
          "stepTheme": "Confondre potentiel de référence et potentiel d’action",
          "stepBadge": "Confondre potentiel de référence et potentiel d’action",
          "paragraphText": "Piège : 0 mV en absence d’excitation n’est pas un potentiel d’action.\nC’est le potentiel de référence ; le potentiel d’action n’apparaît qu’après une stimulation efficace.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p04_q5",
            "type": "mcq",
            "prompt": "Un enregistrement à 0 mV sans excitation correspond au :",
            "options": [
              "Potentiel d’action",
              "Potentiel de membrane",
              "Potentiel de référence",
              "Potentiel postsynaptique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé nomme potentiel de référence le 0 mV obtenu sans excitation, électrodes à la surface."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "De la piqûre à la réaction",
          "stepTheme": "De la piqûre à la réaction",
          "stepBadge": "De la piqûre à la réaction",
          "paragraphText": "Exemple de la situation d’apprentissage : la piqûre d’épine stimule des récepteurs, un influx naît et se propage le long des neurones.\nCette propagation rapide explique que l’élève laisse tomber brusquement la daba.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p04_q6",
            "type": "mcq",
            "prompt": "La réaction brusque après la piqûre s’explique par :",
            "options": [
              "La propagation de l’influx nerveux le long des neurones",
              "La seule dilatation des vaisseaux",
              "La libération d’anticorps",
              "La contraction lente du biceps seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La situation d’apprentissage vise la nature du message nerveux et sa transmission dans l’organisme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p04_q1",
          "type": "mcq",
          "prompt": "Le potentiel d’action diphasique comporte :",
          "options": [
            "Un seul sommet",
            "Deux sommets inversés",
            "Aucun sommet",
            "Uniquement une hyperpolarisation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée par l’analyse de la figure 4 du résumé."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p04_q2",
          "type": "mcq",
          "prompt": "L’influx nerveux se propage le long de l’axone sous forme de :",
          "options": [
            "Courants locaux",
            "Vésicules synaptiques",
            "Fibres musculaires",
            "Molécules d’ATP seules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé conclut à une propagation par courants locaux issus de l’inversion de polarité."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p04_q3",
          "type": "mcq",
          "prompt": "Deux électrodes à la surface d’un axone excité donnent :",
          "options": [
            "Un potentiel de membrane de -70 mV stable",
            "Un potentiel de référence de 0 mV",
            "Un potentiel d’action diphasique",
            "Aucun enregistrement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le résultat de l’expérience 4 du document II."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p04_q4",
          "type": "mcq",
          "prompt": "Sur un neurone, l’influx nerveux est transmis :",
          "options": [
            "Dans les deux sens indifféremment",
            "Dans un seul sens",
            "Uniquement vers le corps cellulaire",
            "Uniquement dans le nerf"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exercice 1 retient la transmission dans un seul sens au niveau d’un neurone."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p04_q5",
          "type": "mcq",
          "prompt": "Un enregistrement à 0 mV sans excitation correspond au :",
          "options": [
            "Potentiel d’action",
            "Potentiel de membrane",
            "Potentiel de référence",
            "Potentiel postsynaptique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé nomme potentiel de référence le 0 mV obtenu sans excitation, électrodes à la surface."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p04_q6",
          "type": "mcq",
          "prompt": "La réaction brusque après la piqûre s’explique par :",
          "options": [
            "La propagation de l’influx nerveux le long des neurones",
            "La seule dilatation des vaisseaux",
            "La libération d’anticorps",
            "La contraction lente du biceps seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La situation d’apprentissage vise la nature du message nerveux et sa transmission dans l’organisme."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l01_communication_nerveuse_p05",
      "order": 5,
      "title": "Les synapses : types et organisation",
      "summary": "La transmission d’un neurone à une autre structure se fait au niveau de zones de contact appelées synapses.",
      "conceptExplanation": "Les zones de contact entre structures excitables sont appelées synapses. On distingue trois types de contacts entre neurones : axo-axonique entre deux axones, axo-dendritique entre un axone et une dendrite, axo-somatique entre un axone et le corps cellulaire ou soma.\nLa zone de contact entre un neurone et une cellule musculaire est appelée jonction neuro-musculaire ou plaque motrice.\nUne synapse est composée d’un élément présynaptique et d’un élément postsynaptique séparés par un espace appelé fente synaptique.\nLa transmission de l’influx nerveux d’un neurone à une structure cellulaire se fait donc à travers des synapses.",
      "keyRule": "Une synapse associe un élément présynaptique, une fente synaptique et un élément postsynaptique.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les contacts du document III",
        "statement": "Le document III montre trois contacts entre neurones et une plaque motrice. Nomme ces zones de contact.",
        "methodSteps": [
          "Le contact entre deux axones est axo-axonique.",
          "Le contact entre un axone et une dendrite est axo-dendritique, et celui avec le soma est axo-somatique.",
          "Le contact neurone-muscle est la jonction neuro-musculaire ou plaque motrice."
        ],
        "conclusion": "Toutes ces zones de contact sont des synapses."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’une synapse",
          "stepTheme": "Définition d’une synapse",
          "stepBadge": "Définition d’une synapse",
          "paragraphText": "• Synapse : zone de contact entre deux structures excitables, par laquelle l’influx passe d’un neurone à une autre structure cellulaire.\nElle comprend un élément présynaptique, une fente synaptique et un élément postsynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p05_q1",
            "type": "mcq",
            "prompt": "Une synapse est composée de :",
            "options": [
              "Deux corps cellulaires soudés",
              "Un élément présynaptique, une fente et un élément postsynaptique",
              "Uniquement une fente synaptique",
              "Un nerf et un vaisseau sanguin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé décrit exactement ces trois éléments séparés par la fente synaptique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les trois contacts entre neurones",
          "stepTheme": "Les trois contacts entre neurones",
          "stepBadge": "Les trois contacts entre neurones",
          "paragraphText": "• Contact axo-axonique : entre deux axones. • Contact axo-dendritique : entre un axone et une dendrite. • Contact axo-somatique : entre un axone et le corps cellulaire.\nCes trois types sont montrés par la figure 1 du document III.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p05_q2",
            "type": "mcq",
            "prompt": "Un contact entre un axone et une dendrite est dit :",
            "options": [
              "Axo-somatique",
              "Axo-axonique",
              "Axo-dendritique",
              "Neuro-musculaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé nomme axo-dendritique le contact axone-dendrite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La plaque motrice",
          "stepTheme": "La plaque motrice",
          "stepBadge": "La plaque motrice",
          "paragraphText": "• Plaque motrice ou jonction neuro-musculaire : zone de contact entre un neurone et une cellule musculaire.\nSon électronographie montre de nombreuses vésicules synaptiques dans le neurone présynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p05_q3",
            "type": "mcq",
            "prompt": "La plaque motrice est le contact entre :",
            "options": [
              "Deux axones",
              "Un neurone et une cellule musculaire",
              "Deux cellules musculaires",
              "Un axone et un soma"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La figure 2 du document III présente cette jonction neuro-musculaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les vésicules du bouton présynaptique",
          "stepTheme": "Les vésicules du bouton présynaptique",
          "stepBadge": "Les vésicules du bouton présynaptique",
          "paragraphText": "L’électronographie d’une plaque motrice montre de nombreuses vésicules synaptiques et des vésicules d’exocytose dans le neurone présynaptique.\nIl y a absence de vésicules dans le neurone postsynaptique, ce qui traduit que la synapse est en activité côté présynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p05_q4",
            "type": "mcq",
            "prompt": "Les vésicules synaptiques sont observées dans :",
            "options": [
              "Le neurone postsynaptique uniquement",
              "Le bouton présynaptique",
              "La fente uniquement",
              "La cellule musculaire uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résultat du document IV précise leur présence présynaptique et leur absence postsynaptique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Toute synapse n’est pas une plaque motrice",
          "stepTheme": "Toute synapse n’est pas une plaque motrice",
          "stepBadge": "Toute synapse n’est pas une plaque motrice",
          "paragraphText": "Piège : la plaque motrice est seulement la synapse entre un neurone et un muscle.\nLes contacts entre neurones sont des synapses neuro-neuroniques, de fonctionnement analogue mais entre deux neurones.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p05_q5",
            "type": "mcq",
            "prompt": "La synapse neuro-neuronique a un fonctionnement :",
            "options": [
              "Totalement différent de la synapse neuro-musculaire",
              "Le même que la synapse neuro-musculaire",
              "Sans neurotransmetteur",
              "Uniquement électrique sans fente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé affirme que la synapse neuro-neuronique a le même fonctionnement que la synapse neuro-musculaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une synapse en activité",
          "stepTheme": "Reconnaître une synapse en activité",
          "stepBadge": "Reconnaître une synapse en activité",
          "paragraphText": "Exemple du document IV : la présence de nombreuses vésicules synaptiques et de vésicules d’exocytose dans le bouton présynaptique traduit que la synapse est en activité.\nC’est un indice d’observation à citer dans une analyse.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p05_q6",
            "type": "mcq",
            "prompt": "Une synapse en activité se reconnaît à :",
            "options": [
              "L’absence totale de vésicules",
              "De nombreuses vésicules synaptiques et d’exocytose présynaptiques",
              "La disparition de la fente",
              "La fusion des deux neurones"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse du document IV dans le résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p05_q1",
          "type": "mcq",
          "prompt": "Une synapse est composée de :",
          "options": [
            "Deux corps cellulaires soudés",
            "Un élément présynaptique, une fente et un élément postsynaptique",
            "Uniquement une fente synaptique",
            "Un nerf et un vaisseau sanguin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé décrit exactement ces trois éléments séparés par la fente synaptique."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p05_q2",
          "type": "mcq",
          "prompt": "Un contact entre un axone et une dendrite est dit :",
          "options": [
            "Axo-somatique",
            "Axo-axonique",
            "Axo-dendritique",
            "Neuro-musculaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé nomme axo-dendritique le contact axone-dendrite."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p05_q3",
          "type": "mcq",
          "prompt": "La plaque motrice est le contact entre :",
          "options": [
            "Deux axones",
            "Un neurone et une cellule musculaire",
            "Deux cellules musculaires",
            "Un axone et un soma"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La figure 2 du document III présente cette jonction neuro-musculaire."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p05_q4",
          "type": "mcq",
          "prompt": "Les vésicules synaptiques sont observées dans :",
          "options": [
            "Le neurone postsynaptique uniquement",
            "Le bouton présynaptique",
            "La fente uniquement",
            "La cellule musculaire uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résultat du document IV précise leur présence présynaptique et leur absence postsynaptique."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p05_q5",
          "type": "mcq",
          "prompt": "La synapse neuro-neuronique a un fonctionnement :",
          "options": [
            "Totalement différent de la synapse neuro-musculaire",
            "Le même que la synapse neuro-musculaire",
            "Sans neurotransmetteur",
            "Uniquement électrique sans fente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé affirme que la synapse neuro-neuronique a le même fonctionnement que la synapse neuro-musculaire."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p05_q6",
          "type": "mcq",
          "prompt": "Une synapse en activité se reconnaît à :",
          "options": [
            "L’absence totale de vésicules",
            "De nombreuses vésicules synaptiques et d’exocytose présynaptiques",
            "La disparition de la fente",
            "La fusion des deux neurones"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse du document IV dans le résumé."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l01_communication_nerveuse_p06",
      "order": 6,
      "title": "Le fonctionnement d’une synapse chimique",
      "summary": "Le passage de l’influx à travers la synapse se fait en huit étapes grâce à un médiateur chimique comme l’acétylcholine.",
      "conceptExplanation": "Suite à une stimulation efficace, l’influx arrive au bouton présynaptique et provoque l’ouverture des canaux à Ca2+, puis l’entrée massive des ions Ca2+ suivie de la libération par exocytose, dans la fente synaptique, de neuromédiateurs stockés dans des vésicules synaptiques, par exemple l’acétylcholine.\nL’acétylcholine se fixe sur son récepteur spécifique de la membrane postsynaptique, ce qui provoque l’ouverture des canaux à Na+ chimio-dépendants et l’entrée massive de Na+, donc la dépolarisation postsynaptique et la naissance d’un potentiel d’action musculaire.\nLa contraction s’arrête lorsque l’acétylcholine est hydrolysée en acétate et en choline par l’acétylcholinestérase ; la choline est ensuite réabsorbée par le bouton synaptique.\nSi les neurotransmetteurs ouvrent les canaux à Na+ et dépolarisent, la synapse est excitatrice et le potentiel obtenu est un PPSE. S’ils entraînent une sortie massive de K+ ou une entrée massive de Cl- avec hyperpolarisation, la synapse est inhibitrice et le potentiel est un PPSI.",
      "keyRule": "À la synapse, le message devient chimique : Ca2+, exocytose, fixation sur récepteurs spécifiques, puis hydrolyse du médiateur.",
      "formulas": [],
      "workedExample": {
        "title": "Ordre chronologique d’une synapse excitatrice (exercice 2)",
        "statement": "Range dans l’ordre : exocytose du neuromédiateur, fixation sur les récepteurs postsynaptiques, dépolarisation postsynaptique, naissance du potentiel d’action postsynaptique et arrivée du potentiel d’action présynaptique.",
        "methodSteps": [
          "L’arrivée du potentiel d’action à l’extrémité présynaptique vient en premier, suivie de l’entrée de Ca2+.",
          "L’exocytose libère le neuromédiateur qui se fixe sur les récepteurs postsynaptiques.",
          "La membrane postsynaptique se dépolarise et un potentiel d’action y naît."
        ],
        "conclusion": "L’ordre correct enchaîne arrivée présynaptique, exocytose, fixation, dépolarisation et potentiel d’action postsynaptique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du neuromédiateur",
          "stepTheme": "Définition du neuromédiateur",
          "stepBadge": "Définition du neuromédiateur",
          "paragraphText": "• Neuromédiateur, neurotransmetteur ou médiateur chimique : substance stockée dans les vésicules synaptiques et libérée dans la fente, par exemple l’acétylcholine.\nIl se fixe sur des récepteurs spécifiques de la membrane postsynaptique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p06_q1",
            "type": "mcq",
            "prompt": "Un exemple de neuromédiateur cité dans le résumé est :",
            "options": [
              "La myéline",
              "L’acétylcholine",
              "Le lysozyme",
              "La perforine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé cite l’acétylcholine ou ACH comme médiateur chimique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les huit étapes de la transmission synaptique",
          "stepTheme": "Les huit étapes de la transmission synaptique",
          "stepBadge": "Les huit étapes de la transmission synaptique",
          "paragraphText": "Les étapes sont : arrivée de l’influx au bouton présynaptique, entrée de Ca2+, libération des neurotransmetteurs par exocytose, fixation sur les récepteurs, ouverture des canaux à Na+ et entrée de Na+, dépolarisation postsynaptique, hydrolyse du neuromédiateur, recapture par le bouton synaptique.\nCet ordre chronologique est celui du schéma d’interprétation de la plaque motrice.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p06_q2",
            "type": "mcq",
            "prompt": "La première étape de la transmission synaptique est :",
            "options": [
              "L’hydrolyse du médiateur",
              "L’arrivée de l’influx au bouton présynaptique",
              "La recapture de la choline",
              "La dépolarisation du muscle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document énumère l’arrivée de l’influx en étape 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des ions Ca2+",
          "stepTheme": "Le rôle des ions Ca2+",
          "stepBadge": "Le rôle des ions Ca2+",
          "paragraphText": "L’arrivée de l’influx provoque l’ouverture des canaux à Ca2+ de la membrane présynaptique.\nL’entrée massive de Ca2+ dans le bouton synaptique déclenche la libération des neurotransmetteurs par exocytose.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p06_q3",
            "type": "mcq",
            "prompt": "L’entrée de Ca2+ dans le bouton synaptique déclenche :",
            "options": [
              "L’hydrolyse de l’acétylcholine",
              "La libération des neurotransmetteurs par exocytose",
              "La repolarisation de l’axone",
              "La synthèse de myéline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’étape 2 suivie de l’exocytose en étape 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "PPSE et PPSI",
          "stepTheme": "PPSE et PPSI",
          "stepBadge": "PPSE et PPSI",
          "paragraphText": "• PPSE : potentiel postsynaptique excitateur, obtenu quand la membrane postsynaptique se dépolarise. • PPSI : potentiel postsynaptique inhibiteur, obtenu quand elle s’hyperpolarise.\nLa synapse correspondante est dite excitatrice ou inhibitrice.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p06_q4",
            "type": "mcq",
            "prompt": "Un PPSI correspond à :",
            "options": [
              "Une dépolarisation postsynaptique",
              "Une hyperpolarisation postsynaptique",
              "Un potentiel de référence",
              "Une contraction musculaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé associe PPSI à l’hyperpolarisation et à l’absence de potentiel d’action."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les ions qui entrent au bon endroit",
          "stepTheme": "Les ions qui entrent au bon endroit",
          "stepBadge": "Les ions qui entrent au bon endroit",
          "paragraphText": "Piège de l’exercice 2 : ce sont les ions Ca2+ qui entrent dans le bouton présynaptique et les ions Na+ qui entrent dans l’élément postsynaptique.\nConfondre ces deux entrées fausse tout l’ordre chronologique.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p06_q5",
            "type": "mcq",
            "prompt": "Dans le fonctionnement synaptique, les ions Na+ entrent dans :",
            "options": [
              "Le bouton présynaptique à la place du Ca2+",
              "L’élément postsynaptique après fixation du médiateur",
              "La fente sans traverser de membrane",
              "Le corps cellulaire uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après fixation du médiateur, les canaux à Na+ postsynaptiques s’ouvrent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’arrêt par l’acétylcholinestérase",
          "stepTheme": "L’arrêt par l’acétylcholinestérase",
          "stepBadge": "L’arrêt par l’acétylcholinestérase",
          "paragraphText": "Exemple de la plaque motrice : la contraction s’arrête lorsque l’acétylcholine est hydrolysée en acétate et en choline par l’acétylcholinestérase.\nLa choline est ensuite réabsorbée pour servir à la synthèse de nouvelles molécules d’acétylcholine.",
          "exercise": {
            "id": "terminale_c_svt_l01_communication_nerveuse_p06_q6",
            "type": "mcq",
            "prompt": "L’acétylcholinestérase hydrolyse l’acétylcholine en :",
            "options": [
              "Dopamine et sérotonine",
              "Acétate et choline",
              "ATP et AMP",
              "Substance P et enképhaline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le mécanisme d’arrêt décrit dans le résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p06_q1",
          "type": "mcq",
          "prompt": "Un exemple de neuromédiateur cité dans le résumé est :",
          "options": [
            "La myéline",
            "L’acétylcholine",
            "Le lysozyme",
            "La perforine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé cite l’acétylcholine ou ACH comme médiateur chimique."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p06_q2",
          "type": "mcq",
          "prompt": "La première étape de la transmission synaptique est :",
          "options": [
            "L’hydrolyse du médiateur",
            "L’arrivée de l’influx au bouton présynaptique",
            "La recapture de la choline",
            "La dépolarisation du muscle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document énumère l’arrivée de l’influx en étape 1."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p06_q3",
          "type": "mcq",
          "prompt": "L’entrée de Ca2+ dans le bouton synaptique déclenche :",
          "options": [
            "L’hydrolyse de l’acétylcholine",
            "La libération des neurotransmetteurs par exocytose",
            "La repolarisation de l’axone",
            "La synthèse de myéline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’étape 2 suivie de l’exocytose en étape 3."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p06_q4",
          "type": "mcq",
          "prompt": "Un PPSI correspond à :",
          "options": [
            "Une dépolarisation postsynaptique",
            "Une hyperpolarisation postsynaptique",
            "Un potentiel de référence",
            "Une contraction musculaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé associe PPSI à l’hyperpolarisation et à l’absence de potentiel d’action."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p06_q5",
          "type": "mcq",
          "prompt": "Dans le fonctionnement synaptique, les ions Na+ entrent dans :",
          "options": [
            "Le bouton présynaptique à la place du Ca2+",
            "L’élément postsynaptique après fixation du médiateur",
            "La fente sans traverser de membrane",
            "Le corps cellulaire uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après fixation du médiateur, les canaux à Na+ postsynaptiques s’ouvrent."
        },
        {
          "id": "terminale_c_svt_l01_communication_nerveuse_p06_q6",
          "type": "mcq",
          "prompt": "L’acétylcholinestérase hydrolyse l’acétylcholine en :",
          "options": [
            "Dopamine et sérotonine",
            "Acétate et choline",
            "ATP et AMP",
            "Substance P et enképhaline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le mécanisme d’arrêt décrit dans le résumé."
        }
      ]
    }
  ]
};
