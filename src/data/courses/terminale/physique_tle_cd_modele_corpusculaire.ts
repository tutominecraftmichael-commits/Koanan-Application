import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 17 : Modèle corpusculaire de la lumière » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1318
export const PHYSIQUE_TLE_CD_L17_MODELE_CORPUSCULAIRE: CurriculumChapter = {
  "id": "terminale_c_physique_l17_modele_corpusculaire",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 17,
  "title": "Leçon 17 : Modèle corpusculaire de la lumière",
  "summary": "La lumière est aussi un flux de photons d'énergie E = hν : effet photoélectrique, énergie atomique quantifiée, spectres de raies et niveaux de l'hydrogène En = −13,6/n² eV.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1318",
  "points": [
    {
      "id": "terminale_c_physique_l17_modele_corpusculaire_p01",
      "order": 1,
      "title": "L'effet photoélectrique",
      "summary": "Émission d'électrons par un matériau soumis à l'action de la lumière : le phénomène qui impose le modèle corpusculaire.",
      "conceptExplanation": "L'effet photoélectrique désigne l'émission d'électrons par un matériau soumis à l'action de la lumière.\nL'activité d'application le reformule : l'effet photoélectrique est l'émission d'électrons par la matière frappée par un rayonnement électromagnétique convenable.\nLe mot « convenable » est essentiel : toutes les lumières ne produisent pas l'effet sur un matériau donné — seules celles dont les photons sont assez énergétiques, donc de fréquence suffisante.\nCe phénomène, inexplicable par le seul modèle ondulatoire classique, est le point de départ historique du modèle corpusculaire développé dans cette leçon.",
      "keyRule": "Effet photoélectrique = des électrons arrachés à la matière par un rayonnement convenable.",
      "formulas": [],
      "workedExample": {
        "title": "La phrase reconstituée de l'activité 1",
        "statement": "Reconstitue la phrase définissant l'effet photoélectrique à partir des fragments : « l'émission d'électrons / convenable / l'effet photoélectrique / un rayonnement électromagnétique / est / par la matière / frappé par ».",
        "methodSteps": [
          "Le sujet est « l'effet photoélectrique », suivi du verbe « est ».",
          "Le cœur de la définition est « l'émission d'électrons par la matière ».",
          "La phrase complète précise la cause : frappée par un rayonnement électromagnétique convenable."
        ],
        "conclusion": "C'est la phrase reconstituée dans la solution de l'activité d'application 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de l'effet photoélectrique",
          "stepTheme": "La définition de l'effet photoélectrique",
          "stepBadge": "La définition de l'effet photoélectrique",
          "paragraphText": "• Effet photoélectrique : émission d'électrons par un matériau soumis à l'action de la lumière.\nLes électrons émis sont appelés photoélectrons.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q1",
            "type": "mcq",
            "prompt": "L'effet photoélectrique désigne :",
            "options": [
              "L'émission d'électrons par un matériau soumis à l'action de la lumière",
              "L'émission de lumière par un matériau chauffé",
              "La déviation de la lumière par un champ électrique",
              "L'absorption de la lumière par un écran noir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Il faut un rayonnement « convenable »",
          "stepTheme": "Il faut un rayonnement « convenable »",
          "stepBadge": "Il faut un rayonnement « convenable »",
          "paragraphText": "La phrase de l'activité insiste : la matière doit être frappée par un rayonnement électromagnétique convenable.\nUn rayonnement trop peu énergétique, quelle que soit son intensité, ne libère aucun électron : c'est le fait expérimental que le modèle corpusculaire explique par l'énergie individuelle des photons.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q2",
            "type": "mcq",
            "prompt": "Pour produire l'effet photoélectrique sur un matériau donné, le rayonnement doit être :",
            "options": [
              "Très intense, quelle que soit sa fréquence",
              "Convenable : ses photons doivent être assez énergétiques",
              "Toujours du domaine visible",
              "Polarisé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le sens de « convenable » dans la phrase de l'activité d'application 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une émission d'électrons, pas de lumière",
          "stepTheme": "Une émission d'électrons, pas de lumière",
          "stepBadge": "Une émission d'électrons, pas de lumière",
          "paragraphText": "Ne pas inverser les rôles : dans l'effet photoélectrique, la lumière est l'agent et les électrons sont les particules émises.\nC'est l'inverse de la situation d'un tube à rayons X ou d'une lampe, où des électrons produisent de la lumière.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q3",
            "type": "mcq",
            "prompt": "Dans l'effet photoélectrique, les particules émises par le matériau sont :",
            "options": [
              "Des photons",
              "Des protons",
              "Des électrons",
              "Des atomes entiers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition parle d'émission d'électrons par le matériau éclairé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le phénomène qui fonde le modèle corpusculaire",
          "stepTheme": "Le phénomène qui fonde le modèle corpusculaire",
          "stepBadge": "Le phénomène qui fonde le modèle corpusculaire",
          "paragraphText": "La documentation rappelle le débat historique : la diffraction plaidait pour l'onde, mais au début du XXe siècle on découvrit aussi que la lumière est constituée de corpuscules.\nConclusion de la documentation : les deux camps ont raison, la lumière est à la fois une onde et un ensemble de corpuscules.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q4",
            "type": "mcq",
            "prompt": "Le débat historique sur la nature de la lumière s'est conclu par :",
            "options": [
              "La victoire du modèle ondulatoire seul",
              "La victoire du modèle corpusculaire seul",
              "L'abandon des deux modèles",
              "La dualité : la lumière est à la fois une onde et un ensemble de corpuscules"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion de l'introduction de la documentation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le lien avec le photon",
          "stepTheme": "Le lien avec le photon",
          "stepBadge": "Le lien avec le photon",
          "paragraphText": "Dans le modèle corpusculaire, chaque photon échange son énergie d'un bloc avec un électron.\nSi cette énergie suffit à extraire l'électron du matériau, l'effet photoélectrique a lieu ; sinon, rien ne se produit, même avec beaucoup de photons.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q5",
            "type": "mcq",
            "prompt": "Dans le modèle corpusculaire, l'effet photoélectrique se produit si :",
            "options": [
              "L'énergie d'un photon suffit à extraire un électron du matériau",
              "Le nombre de photons est assez grand, quelle que soit leur énergie",
              "La lumière est assez chaude",
              "Le matériau est un isolant parfait"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'échange se fait photon par photon, avec le quantum E = hν du point suivant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Augmenter l'intensité ne remplace pas la fréquence",
          "stepTheme": "Augmenter l'intensité ne remplace pas la fréquence",
          "stepBadge": "Augmenter l'intensité ne remplace pas la fréquence",
          "paragraphText": "Piège : une lumière intense mais de fréquence trop faible ne produit aucun photoélectron.\nLe résumé le prépare : augmenter l'intensité augmente seulement le nombre de photons, sans changer l'énergie de chacun.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q6",
            "type": "mcq",
            "prompt": "Si un rayonnement ne produit pas l'effet photoélectrique, augmenter son intensité :",
            "options": [
              "Finira par arracher des électrons",
              "Ne changera rien si la fréquence reste trop faible : chaque photon garde la même énergie",
              "Diminuera l'énergie des photons",
              "Transformera le rayonnement en rayons X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'intensité règle le nombre de photons, pas leur énergie individuelle (§ « Photon et ses caractéristiques »)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q1",
          "type": "mcq",
          "prompt": "L'effet photoélectrique désigne :",
          "options": [
            "L'émission d'électrons par un matériau soumis à l'action de la lumière",
            "L'émission de lumière par un matériau chauffé",
            "La déviation de la lumière par un champ électrique",
            "L'absorption de la lumière par un écran noir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé de la leçon."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q2",
          "type": "mcq",
          "prompt": "Pour produire l'effet photoélectrique sur un matériau donné, le rayonnement doit être :",
          "options": [
            "Très intense, quelle que soit sa fréquence",
            "Convenable : ses photons doivent être assez énergétiques",
            "Toujours du domaine visible",
            "Polarisé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le sens de « convenable » dans la phrase de l'activité d'application 1."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q3",
          "type": "mcq",
          "prompt": "Dans l'effet photoélectrique, les particules émises par le matériau sont :",
          "options": [
            "Des photons",
            "Des protons",
            "Des électrons",
            "Des atomes entiers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition parle d'émission d'électrons par le matériau éclairé."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q4",
          "type": "mcq",
          "prompt": "Le débat historique sur la nature de la lumière s'est conclu par :",
          "options": [
            "La victoire du modèle ondulatoire seul",
            "La victoire du modèle corpusculaire seul",
            "L'abandon des deux modèles",
            "La dualité : la lumière est à la fois une onde et un ensemble de corpuscules"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion de l'introduction de la documentation."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q5",
          "type": "mcq",
          "prompt": "Dans le modèle corpusculaire, l'effet photoélectrique se produit si :",
          "options": [
            "L'énergie d'un photon suffit à extraire un électron du matériau",
            "Le nombre de photons est assez grand, quelle que soit leur énergie",
            "La lumière est assez chaude",
            "Le matériau est un isolant parfait"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'échange se fait photon par photon, avec le quantum E = hν du point suivant."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p01_q6",
          "type": "mcq",
          "prompt": "Si un rayonnement ne produit pas l'effet photoélectrique, augmenter son intensité :",
          "options": [
            "Finira par arracher des électrons",
            "Ne changera rien si la fréquence reste trop faible : chaque photon garde la même énergie",
            "Diminuera l'énergie des photons",
            "Transformera le rayonnement en rayons X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'intensité règle le nombre de photons, pas leur énergie individuelle (§ « Photon et ses caractéristiques »)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l17_modele_corpusculaire_p02",
      "order": 2,
      "title": "Le photon et la relation de Planck-Einstein E = hν",
      "summary": "La lumière est constituée de photons : masse nulle, pas de charge, vitesse c, chacun porteur d'un quantum d'énergie E = hν = hc/λ.",
      "conceptExplanation": "Une lumière de fréquence ν est constituée de grains d'énergie appelés photons.\nUn photon est une particule qui possède une masse nulle, qui n'a pas de charge électrique et qui se déplace en permanence à la vitesse de la lumière.\nL'augmentation de l'intensité de la source lumineuse ne change pas l'énergie des photons, mais seulement leur nombre.\nSelon la théorie des quanta, chaque photon possède un paquet d'énergie appelé quantum ; la relation de Planck-Einstein donne E = hν, avec h = 6,626 × 10⁻³⁴ J·s et ν = c/λ — donc E = hc/λ : l'énergie d'un photon est inversement proportionnelle à sa longueur d'onde (documentation).",
      "keyRule": "Photon : m = 0, q = 0, v = c, E = hν = hc/λ ; l'intensité compte les photons, la fréquence fixe leur énergie.",
      "formulas": [
        {
          "name": "Relation de Planck-Einstein",
          "formula": "E = h\\nu = \\frac{hc}{\\lambda}",
          "note": "h = 6,626 × 10⁻³⁴ J·s ; E en joules."
        }
      ],
      "workedExample": {
        "title": "Photons gamma contre photons radio (documentation)",
        "statement": "Compare, d'après la documentation, l'énergie des photons des rayons gamma (λ de l'ordre de 0,001 nm) et celle des photons des ondes radio (λ de l'ordre de 10 cm).",
        "methodSteps": [
          "L'énergie d'un photon est inversement proportionnelle à sa longueur d'onde.",
          "Les rayons gamma ont une très petite longueur d'onde : leurs photons sont extrêmement énergétiques.",
          "Les ondes radio ont une grande longueur d'onde : leurs photons ont une faible énergie."
        ],
        "conclusion": "C'est la comparaison faite dans la partie « Aspect corpusculaire » de la documentation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La lumière : un flux de photons",
          "stepTheme": "La lumière : un flux de photons",
          "stepBadge": "La lumière : un flux de photons",
          "paragraphText": "• Photon : grain d'énergie constituant la lumière ; une lumière de fréquence ν est un ensemble de photons.\nC'est l'hypothèse centrale du modèle corpusculaire.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q1",
            "type": "mcq",
            "prompt": "Dans le modèle corpusculaire, la lumière est constituée de :",
            "options": [
              "Grains d'énergie appelés photons",
              "Petites billes matérielles",
              "Électrons rapides",
              "Atomes excités"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première phrase du § « Photon et ses caractéristiques »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les caractéristiques du photon",
          "stepTheme": "Les caractéristiques du photon",
          "stepBadge": "Les caractéristiques du photon",
          "paragraphText": "Le photon possède une masse nulle et n'a pas de charge électrique.\nIl se déplace en permanence à la vitesse de la lumière, environ 300 000 km/s selon la documentation.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q2",
            "type": "mcq",
            "prompt": "Un photon est une particule :",
            "options": [
              "De masse égale à celle de l'électron",
              "De masse nulle, sans charge électrique, se déplaçant à la vitesse de la lumière",
              "Chargée négativement",
              "Qui peut être au repos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois caractéristiques énumérées dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le quantum d'énergie et la relation de Planck-Einstein",
          "stepTheme": "Le quantum d'énergie et la relation de Planck-Einstein",
          "stepBadge": "Le quantum d'énergie et la relation de Planck-Einstein",
          "paragraphText": "Chaque photon possède un paquet d'énergie appelé quantum : la lumière est un ensemble de paquets d'énergie.\nLa relation de Planck-Einstein relie ce quantum à la fréquence : E = hν, où h = 6,626 × 10⁻³⁴ J·s est la constante de Planck.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q3",
            "type": "mcq",
            "prompt": "La relation de Planck-Einstein donne l'énergie d'un photon :",
            "options": [
              "E = h/ν",
              "E = mc²",
              "E = hν, avec h la constante de Planck",
              "E = h × λ"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la relation du § « Théorie des quanta »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "E = hc/λ : l'énergie croît quand λ diminue",
          "stepTheme": "E = hc/λ : l'énergie croît quand λ diminue",
          "stepBadge": "E = hc/λ : l'énergie croît quand λ diminue",
          "paragraphText": "Avec ν = c/λ, l'énergie du photon devient E = hc/λ : elle est inversement proportionnelle à la longueur d'onde.\nLes photons ultraviolets sont donc plus énergétiques que les photons infrarouges.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q4",
            "type": "mcq",
            "prompt": "L'énergie d'un photon est inversement proportionnelle à sa longueur d'onde ; donc les photons les plus énergétiques sont ceux :",
            "options": [
              "Des ondes radio",
              "De l'infrarouge",
              "De la lumière rouge",
              "Des rayons gamma et ultraviolets, de très petite longueur d'onde"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'exemple de la documentation : gamma (λ ≈ 0,001 nm) très énergétiques, radio (λ ≈ 10 cm) peu énergétiques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'intensité règle le nombre de photons",
          "stepTheme": "L'intensité règle le nombre de photons",
          "stepBadge": "L'intensité règle le nombre de photons",
          "paragraphText": "L'augmentation de l'intensité de la source lumineuse ne change pas l'énergie des photons mais seulement leur nombre.\nUne lumière intense et une lumière faible de même fréquence envoient les mêmes photons, en quantités différentes.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q5",
            "type": "mcq",
            "prompt": "Augmenter l'intensité d'une source lumineuse (à fréquence fixe) :",
            "options": [
              "Augmente le nombre de photons émis, sans changer l'énergie de chacun",
              "Augmente l'énergie de chaque photon",
              "Augmente la fréquence des photons",
              "Diminue la vitesse des photons"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la dernière phrase du § « Photon et ses caractéristiques »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La lumière visible : entre 400 et 700 nm",
          "stepTheme": "La lumière visible : entre 400 et 700 nm",
          "stepBadge": "La lumière visible : entre 400 et 700 nm",
          "paragraphText": "D'après la documentation, la lumière visible ne couvre qu'une toute petite portion du spectre, entre 400 nm (violet) et 700 nm (rouge).\nInfrarouge, ultraviolets, rayons X et ondes radio sont des rayonnements de même nature, hors du visible.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q6",
            "type": "mcq",
            "prompt": "La lumière visible occupe la portion du spectre comprise entre environ :",
            "options": [
              "10 cm et 1 m",
              "400 nm et 700 nm",
              "1 nm et 400 nm",
              "700 nm et 1 mm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la précision de la documentation, partie « Aspect ondulatoire »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q1",
          "type": "mcq",
          "prompt": "Dans le modèle corpusculaire, la lumière est constituée de :",
          "options": [
            "Grains d'énergie appelés photons",
            "Petites billes matérielles",
            "Électrons rapides",
            "Atomes excités"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première phrase du § « Photon et ses caractéristiques »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q2",
          "type": "mcq",
          "prompt": "Un photon est une particule :",
          "options": [
            "De masse égale à celle de l'électron",
            "De masse nulle, sans charge électrique, se déplaçant à la vitesse de la lumière",
            "Chargée négativement",
            "Qui peut être au repos"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois caractéristiques énumérées dans le résumé."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q3",
          "type": "mcq",
          "prompt": "La relation de Planck-Einstein donne l'énergie d'un photon :",
          "options": [
            "E = h/ν",
            "E = mc²",
            "E = hν, avec h la constante de Planck",
            "E = h × λ"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la relation du § « Théorie des quanta »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q4",
          "type": "mcq",
          "prompt": "L'énergie d'un photon est inversement proportionnelle à sa longueur d'onde ; donc les photons les plus énergétiques sont ceux :",
          "options": [
            "Des ondes radio",
            "De l'infrarouge",
            "De la lumière rouge",
            "Des rayons gamma et ultraviolets, de très petite longueur d'onde"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'exemple de la documentation : gamma (λ ≈ 0,001 nm) très énergétiques, radio (λ ≈ 10 cm) peu énergétiques."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q5",
          "type": "mcq",
          "prompt": "Augmenter l'intensité d'une source lumineuse (à fréquence fixe) :",
          "options": [
            "Augmente le nombre de photons émis, sans changer l'énergie de chacun",
            "Augmente l'énergie de chaque photon",
            "Augmente la fréquence des photons",
            "Diminue la vitesse des photons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la dernière phrase du § « Photon et ses caractéristiques »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p02_q6",
          "type": "mcq",
          "prompt": "La lumière visible occupe la portion du spectre comprise entre environ :",
          "options": [
            "10 cm et 1 m",
            "400 nm et 700 nm",
            "1 nm et 400 nm",
            "700 nm et 1 mm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la précision de la documentation, partie « Aspect ondulatoire »."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l17_modele_corpusculaire_p03",
      "order": 3,
      "title": "La quantification de l'énergie d'un atome",
      "summary": "L'atome n'existe que dans certains états d'énergie ; chaque transition échange un photon unique avec ΔE = hν, émis en descendant, absorbé en montant.",
      "conceptExplanation": "L'atome ne peut exister que dans certains états caractérisés par un niveau d'énergie : on dit que son énergie est quantifiée.\nLorsqu'un atome passe d'un niveau d'énergie à un autre, le quantum d'énergie ΔE qu'il perd (ou qu'il gagne) est émis (ou absorbé) sous forme d'une radiation électromagnétique de fréquence ν telle que ΔE = hν.\nAinsi, lorsqu'un atome passe d'un niveau d'énergie Ep à un niveau inférieur En, il y a émission d'un photon, avec Ep − En = hν.\nInversement, l'absorption d'un photon ne peut faire monter l'atome que si l'énergie du photon égale exactement l'écart entre deux niveaux (voir la situation d'évaluation au point 6).",
      "keyRule": "Transitions atomiques : ΔE = hν — un seul photon, exactement à la bonne énergie.",
      "formulas": [
        {
          "name": "Énergie du photon de transition",
          "formula": "\\mathcal{E}_p - \\mathcal{E}_n = h\\nu",
          "note": "Émission d'un photon lors du passage du niveau p au niveau inférieur n."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : la transition 3 → 2 de l'hydrogène",
        "statement": "Pour l'atome d'hydrogène (E₂ = −3,40 eV et E₃ = −1,51 eV), on considère la transition du niveau 3 vers le niveau 2. S'agit-il d'une émission ou d'une absorption ? Calcule la longueur d'onde.",
        "methodSteps": [
          "L'atome descend vers un niveau plus bas : c'est une émission, avec un écart de 1,89 eV.",
          "Converti en joules, cet écart vaut 3,02 × 10⁻¹⁹ J.",
          "La relation de Planck-Einstein inversée donne λ = 657 nm."
        ],
        "conclusion": "C'est le résultat des questions 3.2 à 3.4 de l'exercice 3 : une radiation rouge du visible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une énergie quantifiée",
          "stepTheme": "Une énergie quantifiée",
          "stepBadge": "Une énergie quantifiée",
          "paragraphText": "• Énergie quantifiée : l'atome ne peut exister que dans certains états caractérisés par un niveau d'énergie bien déterminé.\nEntre deux niveaux, aucun état n'est permis.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q1",
            "type": "mcq",
            "prompt": "Dire que l'énergie d'un atome est quantifiée signifie que :",
            "options": [
              "L'atome ne peut exister que dans certains états d'énergie déterminés",
              "Son énergie peut prendre n'importe quelle valeur",
              "Son énergie est toujours nulle",
              "Son énergie augmente indéfiniment"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du § « Quantification de l'énergie d'un atome »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Descente = émission d'un photon",
          "stepTheme": "Descente = émission d'un photon",
          "stepBadge": "Descente = émission d'un photon",
          "paragraphText": "Quand l'atome passe d'un niveau Ep à un niveau inférieur En, il perd de l'énergie.\nCette perte est émise sous forme d'un photon unique, dont l'énergie vaut Ep − En = hν.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q2",
            "type": "mcq",
            "prompt": "Lorsqu'un atome passe d'un niveau d'énergie Ep à un niveau inférieur En, il y a :",
            "options": [
              "Absorption d'un photon",
              "Émission d'un photon d'énergie Ep − En",
              "Émission d'un électron",
              "Aucun échange d'énergie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du § « Quantification », avec Ep − En = hν."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Montée = absorption d'un photon de la bonne énergie",
          "stepTheme": "Montée = absorption d'un photon de la bonne énergie",
          "stepBadge": "Montée = absorption d'un photon de la bonne énergie",
          "paragraphText": "Pour monter d'un niveau à un autre, l'atome doit gagner exactement l'écart d'énergie entre les deux niveaux.\nUn photon d'énergie différente ne peut pas être absorbé pour une transition entre états liés : c'est la règle qui gouverne la situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q3",
            "type": "mcq",
            "prompt": "Un atome absorbe un photon pour passer d'un niveau à un niveau supérieur si :",
            "options": [
              "Le photon est très intense",
              "Le photon a une énergie quelconque",
              "L'énergie du photon égale exactement l'écart entre les deux niveaux",
              "Le photon est rouge"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le gain d'énergie de l'atome doit valoir ΔE = hν, l'écart entre les niveaux (§ « Quantification »)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La transition 3 → 2 : émission rouge à 657 nm",
          "stepTheme": "La transition 3 → 2 : émission rouge à 657 nm",
          "stepBadge": "La transition 3 → 2 : émission rouge à 657 nm",
          "paragraphText": "Dans l'exercice 3, la transition 3 → 2 de l'hydrogène libère 1,89 eV.\nLa longueur d'onde correspondante est 657 nm : une radiation rouge du domaine visible.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q4",
            "type": "mcq",
            "prompt": "La transition du niveau 3 vers le niveau 2 de l'hydrogène est :",
            "options": [
              "Une absorption de 657 nm",
              "Une émission ultraviolette",
              "Une ionisation",
              "Une émission de longueur d'onde 657 nm, dans le rouge visible"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les résultats des questions 3.2 à 3.4 de l'exercice 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'absorption à 121,7 nm : transition 1 → 2",
          "stepTheme": "L'absorption à 121,7 nm : transition 1 → 2",
          "stepBadge": "L'absorption à 121,7 nm : transition 1 → 2",
          "paragraphText": "Le photon de 121,7 nm absorbé dans l'exercice 3 porte une énergie de 10,2 eV.\nC'est exactement l'écart entre le niveau 1 (−13,6 eV) et le niveau 2 (−3,40 eV) : la transition entraînée est 1 → 2.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q5",
            "type": "mcq",
            "prompt": "Le photon de 121,7 nm (10,2 eV) absorbé par l'hydrogène au fondamental provoque la transition :",
            "options": [
              "Du niveau 1 vers le niveau 2",
              "Du niveau 2 vers le niveau 1",
              "Du niveau 3 vers le niveau 2",
              "Une ionisation directe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10,2 eV = E₂ − E₁ : c'est la réponse à la question 4.2 de l'exercice 3 (l'ionisation demanderait 13,6 eV)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le signe de ΔE dit le sens de l'échange",
          "stepTheme": "Le signe de ΔE dit le sens de l'échange",
          "stepBadge": "Le signe de ΔE dit le sens de l'échange",
          "paragraphText": "Piège : dans l'exercice 3, ΔE calculé comme E_final − E_initial vaut −1,89 eV pour la transition 3 → 2 ; le signe négatif signale une perte, donc une émission.\nLa longueur d'onde se calcule toujours avec la valeur absolue de l'écart.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q6",
            "type": "mcq",
            "prompt": "Si le calcul de ΔE = E_final − E_initial donne une valeur négative pour une transition, cela signifie que :",
            "options": [
              "Le calcul est faux",
              "L'atome a perdu de l'énergie : il y a émission d'un photon",
              "L'atome a absorbé un photon",
              "La transition est interdite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque de la solution de l'exercice 3, question 3.3 : ΔE < 0, c'est bien une émission."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q1",
          "type": "mcq",
          "prompt": "Dire que l'énergie d'un atome est quantifiée signifie que :",
          "options": [
            "L'atome ne peut exister que dans certains états d'énergie déterminés",
            "Son énergie peut prendre n'importe quelle valeur",
            "Son énergie est toujours nulle",
            "Son énergie augmente indéfiniment"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du § « Quantification de l'énergie d'un atome »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q2",
          "type": "mcq",
          "prompt": "Lorsqu'un atome passe d'un niveau d'énergie Ep à un niveau inférieur En, il y a :",
          "options": [
            "Absorption d'un photon",
            "Émission d'un photon d'énergie Ep − En",
            "Émission d'un électron",
            "Aucun échange d'énergie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du § « Quantification », avec Ep − En = hν."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q3",
          "type": "mcq",
          "prompt": "Un atome absorbe un photon pour passer d'un niveau à un niveau supérieur si :",
          "options": [
            "Le photon est très intense",
            "Le photon a une énergie quelconque",
            "L'énergie du photon égale exactement l'écart entre les deux niveaux",
            "Le photon est rouge"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le gain d'énergie de l'atome doit valoir ΔE = hν, l'écart entre les niveaux (§ « Quantification »)."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q4",
          "type": "mcq",
          "prompt": "La transition du niveau 3 vers le niveau 2 de l'hydrogène est :",
          "options": [
            "Une absorption de 657 nm",
            "Une émission ultraviolette",
            "Une ionisation",
            "Une émission de longueur d'onde 657 nm, dans le rouge visible"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les résultats des questions 3.2 à 3.4 de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q5",
          "type": "mcq",
          "prompt": "Le photon de 121,7 nm (10,2 eV) absorbé par l'hydrogène au fondamental provoque la transition :",
          "options": [
            "Du niveau 1 vers le niveau 2",
            "Du niveau 2 vers le niveau 1",
            "Du niveau 3 vers le niveau 2",
            "Une ionisation directe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10,2 eV = E₂ − E₁ : c'est la réponse à la question 4.2 de l'exercice 3 (l'ionisation demanderait 13,6 eV)."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p03_q6",
          "type": "mcq",
          "prompt": "Si le calcul de ΔE = E_final − E_initial donne une valeur négative pour une transition, cela signifie que :",
          "options": [
            "Le calcul est faux",
            "L'atome a perdu de l'énergie : il y a émission d'un photon",
            "L'atome a absorbé un photon",
            "La transition est interdite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque de la solution de l'exercice 3, question 3.3 : ΔE < 0, c'est bien une émission."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l17_modele_corpusculaire_p04",
      "order": 4,
      "title": "Les spectres atomiques : émission et absorption",
      "summary": "Spectres de raies discontinus, caractéristiques de l'élément : en émission, des raies colorées sur fond noir ; en absorption, le complémentaire sur le fond du spectre incident.",
      "conceptExplanation": "Le spectre d'émission est obtenu par apport d'énergie : l'électron est excité par cet apport, puis il émet une radiation en retombant vers un niveau inférieur.\nOn observe ainsi un spectre de raies (discontinu), caractéristique de l'élément émetteur : c'est une véritable signature de l'atome.\nPour les spectres d'absorption, on obtient « le complémentaire » du spectre d'émission, avec en fond le spectre de la lumière utilisée pour réaliser l'expérience : des raies noires aux mêmes positions que les raies d'émission.\nL'exercice 2 explique pourquoi ces spectres sont des raies : l'énergie d'un atome ne peut prendre que certaines valeurs bien déterminées — elle est quantifiée — donc seules certaines fréquences, donc certaines raies, existent.",
      "keyRule": "Des raies parce que des niveaux : le spectre est la signature de l'élément.",
      "formulas": [],
      "workedExample": {
        "title": "L'exercice 2 : pourquoi des raies ?",
        "statement": "Explique pourquoi les spectres (d'absorption ou d'émission) de l'hydrogène sont constitués de raies.",
        "methodSteps": [
          "Les transitions n'ont lieu qu'entre les niveaux d'énergie permis de l'atome.",
          "Chaque transition donne un photon d'une fréquence bien précise.",
          "Le spectre ne contient donc que ces fréquences discrètes : ce sont des raies, et non un continuum."
        ],
        "conclusion": "C'est la réponse à la question 2 de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le spectre d'émission : des raies sur fond noir",
          "stepTheme": "Le spectre d'émission : des raies sur fond noir",
          "stepBadge": "Le spectre d'émission : des raies sur fond noir",
          "paragraphText": "• Spectre d'émission : ensemble des radiations émises par un atome excité qui redescend vers des niveaux inférieurs.\nIl se présente comme des raies colorées discrètes sur un fond noir : un spectre discontinu.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q1",
            "type": "mcq",
            "prompt": "Un spectre d'émission atomique est :",
            "options": [
              "Un spectre de raies (discontinu), caractéristique de l'élément émetteur",
              "Un spectre continu comme celui d'un corps chaud",
              "Un fond noir sans aucune raie",
              "Toujours identique pour tous les éléments"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la description du § « Spectres d'émission »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'excitation précède l'émission",
          "stepTheme": "L'excitation précède l'émission",
          "stepBadge": "L'excitation précède l'émission",
          "paragraphText": "Le spectre d'émission est obtenu par apport d'énergie (chaleur, décharge électrique…).\nL'électron est excité par cet apport, puis il émet une radiation en retombant vers son niveau fondamental ou un niveau inférieur.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q2",
            "type": "mcq",
            "prompt": "Pour obtenir un spectre d'émission, il faut d'abord :",
            "options": [
              "Refroidir l'atome",
              "Apporter de l'énergie pour exciter l'électron, qui émet ensuite en retombant",
              "Éclairer l'atome avec une lumière blanche",
              "Ioniser complètement l'atome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le mécanisme du § « Spectres d'émission »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le spectre d'absorption : le complémentaire",
          "stepTheme": "Le spectre d'absorption : le complémentaire",
          "stepBadge": "Le spectre d'absorption : le complémentaire",
          "paragraphText": "• Spectre d'absorption : on envoie une lumière sur le gaz ; l'atome absorbe exactement les photons qu'il peut émettre.\nOn obtient le complémentaire du spectre d'émission : des raies sombres sur le fond du spectre de la lumière utilisée.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q3",
            "type": "mcq",
            "prompt": "Un spectre d'absorption se présente comme :",
            "options": [
              "Des raies colorées sur fond noir",
              "Un spectre continu sans raies",
              "Le complémentaire du spectre d'émission : des raies sombres sur le fond du spectre de la lumière incidente",
              "Un spectre identique pour tous les gaz"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la description du § « Spectres d'absorption »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des raies parce que l'énergie est quantifiée",
          "stepTheme": "Des raies parce que l'énergie est quantifiée",
          "stepBadge": "Des raies parce que l'énergie est quantifiée",
          "paragraphText": "Si l'énergie de l'atome variait continûment, toutes les fréquences seraient émises et le spectre serait continu.\nLes raies prouvent que seuls certains écarts d'énergie — donc certaines fréquences — sont possibles.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q4",
            "type": "mcq",
            "prompt": "Les spectres atomiques sont constitués de raies parce que :",
            "options": [
              "Les prismes sont imparfaits",
              "La lumière est toujours monochromatique",
              "Les atomes sont très petits",
              "L'énergie d'un atome ne peut prendre que certaines valeurs bien déterminées (elle est quantifiée)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse à la question 2 de l'exercice 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une signature de l'élément",
          "stepTheme": "Une signature de l'élément",
          "stepBadge": "Une signature de l'élément",
          "paragraphText": "Chaque élément a ses propres niveaux d'énergie, donc ses propres raies.\nC'est ce qui permet d'identifier un atome par son spectre, comme on le fait pour l'atome X de la situation d'évaluation.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q5",
            "type": "mcq",
            "prompt": "Le spectre de raies d'un élément est dit « caractéristique » parce que :",
            "options": [
              "Il permet d'identifier l'élément, ses niveaux d'énergie lui étant propres",
              "Il est le même pour tous les éléments",
              "Il ne contient qu'une seule raie",
              "Il dépend de la température seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la propriété soulignée au § « Spectres d'émission », exploitée dans la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Émission et absorption : mêmes positions de raies",
          "stepTheme": "Émission et absorption : mêmes positions de raies",
          "stepBadge": "Émission et absorption : mêmes positions de raies",
          "paragraphText": "Piège : les raies d'absorption d'un élément sont aux mêmes longueurs d'onde que ses raies d'émission — ce sont les mêmes transitions, lues dans l'autre sens.\nSeul le fond change : noir en émission, spectre de la source en absorption.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q6",
            "type": "mcq",
            "prompt": "Les raies du spectre d'absorption d'un élément sont situées :",
            "options": [
              "À des positions sans rapport avec l'émission",
              "Aux mêmes longueurs d'onde que ses raies d'émission (mêmes transitions)",
              "Uniquement dans l'infrarouge",
              "Uniquement dans l'ultraviolet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le sens du mot « complémentaire » du § « Spectres d'absorption »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q1",
          "type": "mcq",
          "prompt": "Un spectre d'émission atomique est :",
          "options": [
            "Un spectre de raies (discontinu), caractéristique de l'élément émetteur",
            "Un spectre continu comme celui d'un corps chaud",
            "Un fond noir sans aucune raie",
            "Toujours identique pour tous les éléments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la description du § « Spectres d'émission »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q2",
          "type": "mcq",
          "prompt": "Pour obtenir un spectre d'émission, il faut d'abord :",
          "options": [
            "Refroidir l'atome",
            "Apporter de l'énergie pour exciter l'électron, qui émet ensuite en retombant",
            "Éclairer l'atome avec une lumière blanche",
            "Ioniser complètement l'atome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le mécanisme du § « Spectres d'émission »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q3",
          "type": "mcq",
          "prompt": "Un spectre d'absorption se présente comme :",
          "options": [
            "Des raies colorées sur fond noir",
            "Un spectre continu sans raies",
            "Le complémentaire du spectre d'émission : des raies sombres sur le fond du spectre de la lumière incidente",
            "Un spectre identique pour tous les gaz"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la description du § « Spectres d'absorption »."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q4",
          "type": "mcq",
          "prompt": "Les spectres atomiques sont constitués de raies parce que :",
          "options": [
            "Les prismes sont imparfaits",
            "La lumière est toujours monochromatique",
            "Les atomes sont très petits",
            "L'énergie d'un atome ne peut prendre que certaines valeurs bien déterminées (elle est quantifiée)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse à la question 2 de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q5",
          "type": "mcq",
          "prompt": "Le spectre de raies d'un élément est dit « caractéristique » parce que :",
          "options": [
            "Il permet d'identifier l'élément, ses niveaux d'énergie lui étant propres",
            "Il est le même pour tous les éléments",
            "Il ne contient qu'une seule raie",
            "Il dépend de la température seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la propriété soulignée au § « Spectres d'émission », exploitée dans la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p04_q6",
          "type": "mcq",
          "prompt": "Les raies du spectre d'absorption d'un élément sont situées :",
          "options": [
            "À des positions sans rapport avec l'émission",
            "Aux mêmes longueurs d'onde que ses raies d'émission (mêmes transitions)",
            "Uniquement dans l'infrarouge",
            "Uniquement dans l'ultraviolet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le sens du mot « complémentaire » du § « Spectres d'absorption »."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l17_modele_corpusculaire_p05",
      "order": 5,
      "title": "Les niveaux d'énergie de l'hydrogène et l'ionisation",
      "summary": "En = −13,6/n² eV : fondamental −13,6 eV (n = 1), état ionisé à 0 ; l'énergie d'ionisation de l'hydrogène vaut 13,6 eV.",
      "conceptExplanation": "Pour l'atome d'hydrogène, chaque niveau n a pour énergie En = −13,6/n² (en eV).\nLe niveau n = 1 est l'état fondamental, d'énergie E₁ = −13,6 eV ; suivent E₂ = −3,40 eV, E₃ = −1,51 eV, E₄ = −0,85 eV, E₅ = −0,54 eV et E₆ = −0,38 eV, jusqu'à l'état ionisé d'énergie nulle.\nL'énergie d'ionisation est l'énergie à fournir pour faire passer l'atome de l'état fondamental à l'infini (état ionisé) : pour l'hydrogène, Ei = E∞ − E₁ = 13,6 eV — réponses de l'activité 2 : la bonne formule est En = −13,6/n², E = 0 correspond à l'état ionisé, et Ei = +13,6 eV.\nDans l'exercice 1, quand un proton H⁺ capte un électron au repos, l'énergie d'ionisation est restituée en un photon : λ = hc/Ei = 9,1 × 10⁻⁸ m, dans l'ultraviolet.",
      "keyRule": "Hydrogène : En = −13,6/n² eV ; E = 0 = ionisé ; ioniser depuis le fondamental coûte 13,6 eV.",
      "formulas": [
        {
          "name": "Niveaux d'énergie de l'hydrogène",
          "formula": "\\mathcal{E}_n = -\\frac{13{,}6}{n^2} \\ \\text{eV}",
          "note": "n = 1 : fondamental ; n → ∞ : état ionisé (E = 0)."
        },
        {
          "name": "Énergie d'ionisation",
          "formula": "E_i = \\mathcal{E}_\\infty - \\mathcal{E}_1",
          "note": "Énergie à fournir depuis l'état fondamental ; 13,6 eV pour l'hydrogène."
        }
      ],
      "workedExample": {
        "title": "Les valeurs des premiers niveaux (exercices 3 et 5)",
        "statement": "Calcule les énergies des niveaux n = 1 à 6 de l'atome d'hydrogène.",
        "methodSteps": [
          "On applique En = −13,6/n² à chaque valeur de n.",
          "On obtient −13,6 eV ; −3,40 eV ; −1,51 eV ; −0,85 eV ; −0,54 eV ; −0,38 eV.",
          "Les niveaux se resserrent quand n augmente, en convergeant vers 0."
        ],
        "conclusion": "Ce sont les valeurs des exercices 3 (question 1) et 5 (question 3.2)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule En = −13,6/n² eV",
          "stepTheme": "La formule En = −13,6/n² eV",
          "stepBadge": "La formule En = −13,6/n² eV",
          "paragraphText": "L'activité 2 demande de choisir la bonne expression parmi trois : c'est celle avec le signe moins et n au carré.\nToutes les énergies des états liés sont donc négatives.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q1",
            "type": "mcq",
            "prompt": "Les niveaux d'énergie de l'atome d'hydrogène sont donnés par :",
            "options": [
              "En = −13,6/n² (en eV)",
              "En = +13,6/n² (en eV)",
              "En = −13,6/n (en eV)",
              "En = −13,6 × n² (en eV)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réponse (a) de la question 1 de l'activité d'application 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'état fondamental : n = 1, E₁ = −13,6 eV",
          "stepTheme": "L'état fondamental : n = 1, E₁ = −13,6 eV",
          "stepBadge": "L'état fondamental : n = 1, E₁ = −13,6 eV",
          "paragraphText": "Le niveau le plus bas est l'état fondamental : c'est celui que l'atome occupe au repos.\nL'exercice 2 le rappelle : lorsque l'atome est dans son état fondamental, n = 1.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q2",
            "type": "mcq",
            "prompt": "L'état fondamental de l'atome d'hydrogène correspond à :",
            "options": [
              "n = 0 et E = 0",
              "n = 1 et E₁ = −13,6 eV",
              "n = 2 et E₂ = −3,40 eV",
              "n = ∞ et E = 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la donnée du résumé et la réponse à la question 1 de l'exercice 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les états excités se resserrent vers 0",
          "stepTheme": "Les états excités se resserrent vers 0",
          "stepBadge": "Les états excités se resserrent vers 0",
          "paragraphText": "E₂ = −3,40 eV, E₃ = −1,51 eV, E₄ = −0,85 eV, E₅ = −0,54 eV, E₆ = −0,38 eV : l'écart entre niveaux voisins diminue vite.\nLe diagramme du résumé place l'infrarouge près des niveaux élevés, le visible au-dessus du niveau 2 et l'ultraviolet au départ du fondamental.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q3",
            "type": "mcq",
            "prompt": "Les énergies des niveaux 2, 3 et 4 de l'hydrogène valent respectivement :",
            "options": [
              "−6,8 eV ; −4,53 eV ; −3,40 eV",
              "−3,40 eV ; −13,6 eV ; −0,85 eV",
              "−3,40 eV ; −1,51 eV ; −0,85 eV",
              "−0,85 eV ; −1,51 eV ; −3,40 eV"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les valeurs des exercices 3 et 5, obtenues par En = −13,6/n²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'énergie d'ionisation : du fondamental à l'infini",
          "stepTheme": "L'énergie d'ionisation : du fondamental à l'infini",
          "stepBadge": "L'énergie d'ionisation : du fondamental à l'infini",
          "paragraphText": "• Énergie d'ionisation : énergie à fournir pour faire passer l'atome de l'état fondamental à l'infini, c'est-à-dire lui arracher son électron.\nPour l'hydrogène : Ei = E∞ − E₁ = 0 − (−13,6) = 13,6 eV, une énergie positive à apporter.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q4",
            "type": "mcq",
            "prompt": "L'énergie d'ionisation de l'atome d'hydrogène vaut :",
            "options": [
              "−13,6 eV",
              "−13,6 J",
              "0 eV",
              "+13,6 eV"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse (b) de la question 3 de l'activité 2 : une énergie à fournir, donc positive, en eV."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "E = 0 correspond à l'état ionisé",
          "stepTheme": "E = 0 correspond à l'état ionisé",
          "stepBadge": "E = 0 correspond à l'état ionisé",
          "paragraphText": "Le niveau d'énergie nulle n'est ni le minimum ni le fondamental : c'est l'électron libéré, à l'infini de l'atome.\nL'activité 2 le fait identifier comme l'état ionisé.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q5",
            "type": "mcq",
            "prompt": "Pour l'atome d'hydrogène, le niveau d'énergie E = 0 correspond à :",
            "options": [
              "Son état ionisé",
              "Son état fondamental",
              "Son état minimal",
              "Son premier état excité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réponse (c) de la question 2 de l'activité d'application 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La capture d'un électron par H⁺ : λ = 91 nm",
          "stepTheme": "La capture d'un électron par H⁺ : λ = 91 nm",
          "stepBadge": "La capture d'un électron par H⁺ : λ = 91 nm",
          "paragraphText": "Quand un proton capte un électron au repos, l'atome formé au fondamental restitue l'énergie d'ionisation en un photon.\nL'exercice 1 calcule λ = hc/Ei = 9,1 × 10⁻⁸ m, soit 91 nm : une radiation ultraviolette.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q6",
            "type": "mcq",
            "prompt": "La longueur d'onde de la radiation émise quand H⁺ capte un électron au repos vaut environ :",
            "options": [
              "657 nm",
              "9,1 × 10⁻⁸ m, dans l'ultraviolet",
              "121,7 nm",
              "589 nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résultat de l'exercice 1 ; 657 nm est la transition 3 → 2 et 589 nm la raie jaune du sodium."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q1",
          "type": "mcq",
          "prompt": "Les niveaux d'énergie de l'atome d'hydrogène sont donnés par :",
          "options": [
            "En = −13,6/n² (en eV)",
            "En = +13,6/n² (en eV)",
            "En = −13,6/n (en eV)",
            "En = −13,6 × n² (en eV)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réponse (a) de la question 1 de l'activité d'application 2."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q2",
          "type": "mcq",
          "prompt": "L'état fondamental de l'atome d'hydrogène correspond à :",
          "options": [
            "n = 0 et E = 0",
            "n = 1 et E₁ = −13,6 eV",
            "n = 2 et E₂ = −3,40 eV",
            "n = ∞ et E = 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la donnée du résumé et la réponse à la question 1 de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q3",
          "type": "mcq",
          "prompt": "Les énergies des niveaux 2, 3 et 4 de l'hydrogène valent respectivement :",
          "options": [
            "−6,8 eV ; −4,53 eV ; −3,40 eV",
            "−3,40 eV ; −13,6 eV ; −0,85 eV",
            "−3,40 eV ; −1,51 eV ; −0,85 eV",
            "−0,85 eV ; −1,51 eV ; −3,40 eV"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les valeurs des exercices 3 et 5, obtenues par En = −13,6/n²."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q4",
          "type": "mcq",
          "prompt": "L'énergie d'ionisation de l'atome d'hydrogène vaut :",
          "options": [
            "−13,6 eV",
            "−13,6 J",
            "0 eV",
            "+13,6 eV"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse (b) de la question 3 de l'activité 2 : une énergie à fournir, donc positive, en eV."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q5",
          "type": "mcq",
          "prompt": "Pour l'atome d'hydrogène, le niveau d'énergie E = 0 correspond à :",
          "options": [
            "Son état ionisé",
            "Son état fondamental",
            "Son état minimal",
            "Son premier état excité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réponse (c) de la question 2 de l'activité d'application 2."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p05_q6",
          "type": "mcq",
          "prompt": "La longueur d'onde de la radiation émise quand H⁺ capte un électron au repos vaut environ :",
          "options": [
            "657 nm",
            "9,1 × 10⁻⁸ m, dans l'ultraviolet",
            "121,7 nm",
            "589 nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résultat de l'exercice 1 ; 657 nm est la transition 3 → 2 et 589 nm la raie jaune du sodium."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l17_modele_corpusculaire_p06",
      "order": 6,
      "title": "Exploiter un diagramme énergétique : l'atome X de la situation",
      "summary": "Identifier un atome par son énergie d'ionisation (5,14 eV : le sodium), associer une raie à deux niveaux, et décider — photon par photon — entre excitation, indifférence et ionisation.",
      "conceptExplanation": "L'atome X de la situation a son fondamental à −5,14 eV : son énergie de première ionisation vaut donc Ei = 0 − (−5,14) = 5,14 eV, ce qui l'identifie au sodium dans le tableau des données (hydrogène 13,6 eV ; lithium 5,39 eV ; sodium 5,14 eV).\nSa raie jaune de 589 nm correspond à un photon de 3,37 × 10⁻¹⁹ J, soit 2,11 eV : c'est l'écart entre les niveaux −5,14 eV et −3,03 eV du diagramme.\nPris au fondamental, cet atome absorbe le photon de 589 nm (montée au niveau −3,03 eV) ; un photon de 3 eV le porterait à −2,14 eV, qui n'est pas un niveau : il n'est pas absorbé et l'atome reste au fondamental ; un photon de 6 eV dépasse l'énergie d'ionisation : l'atome est ionisé et l'électron part avec une énergie cinétique de 0,86 eV.\nMême logique dans l'exercice 4 pour l'hydrogène au fondamental : les écarts vers les niveaux 2, 3 et 4 valent 10,2 eV, 12,09 eV et 12,75 eV ; parmi les quanta proposés, 12,75 eV est absorbé (excitation vers n = 4), 18 eV ionise, et 6 eV ne fait rien.",
      "keyRule": "Photon reçu : énergie = écart de niveaux ⇒ excitation ; énergie > Ei ⇒ ionisation ; sinon, rien ne se passe.",
      "formulas": [
        {
          "name": "Énergie cinétique de l'électron ionisé",
          "formula": "E_C = E_{photon} - E_i",
          "note": "L'excédent d'énergie du photon part en énergie cinétique de l'électron arraché."
        }
      ],
      "workedExample": {
        "title": "La série de Balmer (exercice 5)",
        "statement": "La série de Balmer regroupe les transitions d'un niveau p > 2 vers le niveau n = 2 de l'hydrogène. Associe les raies 656 nm (Hα), 486 nm (Hβ), 434 nm (Hγ) et 410 nm (Hδ) aux transitions et donne l'énergie des photons.",
        "methodSteps": [
          "Les écarts vers le niveau 2 valent : depuis n = 3 : 1,89 eV ; n = 4 : 2,55 eV ; n = 5 : 2,86 eV ; n = 6 : 3,02 eV.",
          "L'énergie du photon croît quand la longueur d'onde décroît.",
          "Donc Hα (656 nm) = 3 → 2 ; Hβ (486 nm) = 4 → 2 ; Hγ (434 nm) = 5 → 2 ; Hδ (410 nm) = 6 → 2."
        ],
        "conclusion": "C'est l'affectation des raies demandée à la question 4.3 de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Identifier l'atome X : le sodium",
          "stepTheme": "Identifier l'atome X : le sodium",
          "stepBadge": "Identifier l'atome X : le sodium",
          "paragraphText": "L'énergie d'ionisation se lit sur le diagramme : c'est l'écart entre le fondamental (−5,14 eV) et l'état ionisé (0).\nComparée au tableau (13,6 ; 5,39 ; 5,14 eV), elle désigne le sodium.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q1",
            "type": "mcq",
            "prompt": "L'atome X de la situation, d'énergie d'ionisation 5,14 eV, est :",
            "options": [
              "Le sodium",
              "L'hydrogène",
              "Le lithium",
              "Un atome inconnu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ei = 5,14 eV correspond au sodium dans le tableau des données (question 1.3)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La raie jaune de 589 nm : un écart de 2,11 eV",
          "stepTheme": "La raie jaune de 589 nm : un écart de 2,11 eV",
          "stepBadge": "La raie jaune de 589 nm : un écart de 2,11 eV",
          "paragraphText": "L'énergie du photon de la raie jaune vaut 3,37 × 10⁻¹⁹ J, soit 2,11 eV.\nSur le diagramme du sodium, c'est exactement l'écart entre le fondamental −5,14 eV et le niveau −3,03 eV.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q2",
            "type": "mcq",
            "prompt": "La raie jaune de 589 nm du sodium (photon de 2,11 eV) relie les niveaux :",
            "options": [
              "−0,38 eV et −1,51 eV",
              "−5,14 eV et −3,03 eV",
              "−5,14 eV et 0 eV",
              "−1,93 eV et −3,03 eV"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse à la question 2.2 de la situation : l'écart vaut bien 2,11 eV."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un photon de 3 eV : rien ne se passe",
          "stepTheme": "Un photon de 3 eV : rien ne se passe",
          "stepBadge": "Un photon de 3 eV : rien ne se passe",
          "paragraphText": "Absorber 3 eV porterait l'atome X à −2,14 eV, qui ne figure pas sur le diagramme.\nFaute de niveau correspondant, le photon n'est pas absorbé : l'atome ne sera pas excité et reste à l'état fondamental.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q3",
            "type": "mcq",
            "prompt": "L'atome X au fondamental reçoit un photon de 3 eV ; il :",
            "options": [
              "Est ionisé",
              "Monte au niveau −3,03 eV",
              "N'est pas excité et reste à l'état fondamental, car −2,14 eV n'est pas un niveau",
              "Monte au niveau −2,14 eV pendant un instant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse à la question 3.2 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un photon de 6 eV : ionisation avec Ec = 0,86 eV",
          "stepTheme": "Un photon de 6 eV : ionisation avec Ec = 0,86 eV",
          "stepBadge": "Un photon de 6 eV : ionisation avec Ec = 0,86 eV",
          "paragraphText": "6 eV dépasse l'énergie d'ionisation de 5,14 eV : l'atome est ionisé.\nL'excédent, 6 − 5,14 = 0,86 eV, devient l'énergie cinétique de l'électron extrait.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q4",
            "type": "mcq",
            "prompt": "L'atome X (Ei = 5,14 eV) reçoit un photon de 6 eV ; l'électron arraché part avec une énergie cinétique de :",
            "options": [
              "6 eV",
              "5,14 eV",
              "0 eV",
              "0,86 eV"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ec = E − Ei = 0,86 eV (question 3.3 de la situation)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : quels quanta sont absorbés ?",
          "stepTheme": "L'exercice 4 : quels quanta sont absorbés ?",
          "stepBadge": "L'exercice 4 : quels quanta sont absorbés ?",
          "paragraphText": "Pour l'hydrogène au fondamental, les écarts vers les niveaux 2, 3 et 4 sont 10,2 eV, 12,09 eV et 12,75 eV.\nParmi les quanta proposés (6 eV ; 12,75 eV ; 18 eV), la solution retient 12,75 eV (excitation vers n = 4) et 18 eV (supérieur à l'ionisation) ; 6 eV ne correspond à aucun écart.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q5",
            "type": "mcq",
            "prompt": "Parmi les quanta de 6 eV, 12,75 eV et 18 eV offerts à l'hydrogène au fondamental, ceux qui sont absorbés sont :",
            "options": [
              "12,75 eV (excitation vers n = 4) et 18 eV (ionisation)",
              "6 eV seulement",
              "6 eV et 12,75 eV",
              "Aucun des trois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la déduction de la question 4 de l'exercice 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La série de Balmer : des transitions vers n = 2",
          "stepTheme": "La série de Balmer : des transitions vers n = 2",
          "stepBadge": "La série de Balmer : des transitions vers n = 2",
          "paragraphText": "L'exercice 5 définit la série de Balmer : les raies obtenues lors des transitions d'un niveau p > 2 vers le niveau n = 2.\nSes raies (656, 486, 434 et 410 nm) sont toutes dans le visible, de Hα la rouge à Hδ la violette.",
          "exercise": {
            "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q6",
            "type": "mcq",
            "prompt": "La série de Balmer de l'hydrogène regroupe les transitions :",
            "options": [
              "Vers le niveau n = 1",
              "D'un niveau p > 2 vers le niveau n = 2",
              "Vers l'état ionisé",
              "Entre niveaux supérieurs à 6"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée dans l'énoncé de l'exercice 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q1",
          "type": "mcq",
          "prompt": "L'atome X de la situation, d'énergie d'ionisation 5,14 eV, est :",
          "options": [
            "Le sodium",
            "L'hydrogène",
            "Le lithium",
            "Un atome inconnu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ei = 5,14 eV correspond au sodium dans le tableau des données (question 1.3)."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q2",
          "type": "mcq",
          "prompt": "La raie jaune de 589 nm du sodium (photon de 2,11 eV) relie les niveaux :",
          "options": [
            "−0,38 eV et −1,51 eV",
            "−5,14 eV et −3,03 eV",
            "−5,14 eV et 0 eV",
            "−1,93 eV et −3,03 eV"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse à la question 2.2 de la situation : l'écart vaut bien 2,11 eV."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q3",
          "type": "mcq",
          "prompt": "L'atome X au fondamental reçoit un photon de 3 eV ; il :",
          "options": [
            "Est ionisé",
            "Monte au niveau −3,03 eV",
            "N'est pas excité et reste à l'état fondamental, car −2,14 eV n'est pas un niveau",
            "Monte au niveau −2,14 eV pendant un instant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse à la question 3.2 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q4",
          "type": "mcq",
          "prompt": "L'atome X (Ei = 5,14 eV) reçoit un photon de 6 eV ; l'électron arraché part avec une énergie cinétique de :",
          "options": [
            "6 eV",
            "5,14 eV",
            "0 eV",
            "0,86 eV"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ec = E − Ei = 0,86 eV (question 3.3 de la situation)."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q5",
          "type": "mcq",
          "prompt": "Parmi les quanta de 6 eV, 12,75 eV et 18 eV offerts à l'hydrogène au fondamental, ceux qui sont absorbés sont :",
          "options": [
            "12,75 eV (excitation vers n = 4) et 18 eV (ionisation)",
            "6 eV seulement",
            "6 eV et 12,75 eV",
            "Aucun des trois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la déduction de la question 4 de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l17_modele_corpusculaire_p06_q6",
          "type": "mcq",
          "prompt": "La série de Balmer de l'hydrogène regroupe les transitions :",
          "options": [
            "Vers le niveau n = 1",
            "D'un niveau p > 2 vers le niveau n = 2",
            "Vers l'état ionisé",
            "Entre niveaux supérieurs à 6"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée dans l'énoncé de l'exercice 5."
        }
      ]
    }
  ]
};
