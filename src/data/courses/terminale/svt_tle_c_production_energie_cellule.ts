import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : La production d'énergie par la cellule » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2126
export const SVT_TLE_C_L03_PRODUCTION_ENERGIE_CELLULE: CurriculumChapter = {
  "id": "terminale_c_svt_l03_production_energie_cellule",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : La production d'énergie par la cellule",
  "summary": "La cellule produit de l’énergie sous forme d’ATP par la respiration en présence d’oxygène et par la fermentation en absence d’oxygène, grâce à la mitochondrie, à la glycolyse et au cycle de Krebs.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2126",
  "points": [
    {
      "id": "terminale_c_svt_l03_production_energie_cellule_p01",
      "order": 1,
      "title": "La respiration : produire de l’énergie en présence d’oxygène",
      "summary": "En milieu aérobie, les levures dégradent complètement le glucose et consomment de l’oxygène pour produire de l’ATP.",
      "conceptExplanation": "L’expérience met en évidence l’action de la levure sur le glucose dans un milieu enrichi en oxygène, suivie par un dispositif EXAO.\nAvant l’ajout de la solution de glucose, la quantité d’oxygène est fixe à 23 pour cent. Après l’ajout, elle baisse rapidement pour s’annuler aux environs de 2,7 minutes.\nLa baisse de la quantité d’oxygène traduit sa réaction avec le glucose. Cette oxydation en milieu oxygéné ou milieu aérobie est appelée respiration ou oxydation respiratoire.\nEn présence d’oxygène, les levures utilisent le glucose et le dégradent complètement pour produire de l’énergie sous forme d’ATP, avec formation de dioxyde de carbone et d’eau selon l’équation donnée dans le résumé.",
      "keyRule": "Respiration = dégradation complète du glucose en présence d’oxygène, avec production d’ATP.",
      "formulas": [],
      "workedExample": {
        "title": "L’expérience EXAO avec les levures",
        "statement": "On ajoute du glucose à une suspension de levures aérée et on suit la quantité d’oxygène. Analyse et interprète la courbe.",
        "methodSteps": [
          "Avant l’ajout de glucose, la quantité d’oxygène reste fixe à 23 pour cent.",
          "Après l’ajout, elle baisse rapidement et s’annule vers 2,7 minutes.",
          "Cette consommation d’oxygène traduit sa réaction avec le glucose lors de la respiration."
        ],
        "conclusion": "La respiration dégrade complètement le glucose en présence d’oxygène et produit de l’ATP."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la respiration cellulaire",
          "stepTheme": "Définition de la respiration cellulaire",
          "stepBadge": "Définition de la respiration cellulaire",
          "paragraphText": "• Respiration ou oxydation respiratoire : oxydation du glucose en milieu oxygéné ou milieu aérobie.\nElle dégrade complètement le glucose et produit de l’énergie sous forme d’ATP.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p01_q1",
            "type": "mcq",
            "prompt": "La respiration cellulaire est :",
            "options": [
              "Une dégradation partielle en absence d’oxygène",
              "Une oxydation complète du glucose en présence d’oxygène",
              "La seule fermentation alcoolique",
              "Un phénomène uniquement musculaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé définit la respiration comme l’oxydation en milieu aérobie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La consommation d’oxygène mesurée",
          "stepTheme": "La consommation d’oxygène mesurée",
          "stepBadge": "La consommation d’oxygène mesurée",
          "paragraphText": "Après l’ajout de glucose, la quantité d’oxygène baisse rapidement pour s’annuler aux environs de 2,7 minutes.\nAvant l’ajout, elle était fixe à 23 pour cent.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p01_q2",
            "type": "mcq",
            "prompt": "Après l’ajout de glucose, la quantité d’oxygène :",
            "options": [
              "Augmente jusqu’à 50 pour cent",
              "Reste fixe à 23 pour cent",
              "Baisse rapidement et s’annule vers 2,7 minutes",
              "Ne change jamais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’analyse de la courbe de l’expérience EXAO."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les produits de la respiration",
          "stepTheme": "Les produits de la respiration",
          "stepBadge": "Les produits de la respiration",
          "paragraphText": "La respiration du glucose produit du dioxyde de carbone et de l’eau, en plus de l’énergie sous forme d’ATP.\nL’équation du résumé associe le glucose et le dioxygène à ces produits.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p01_q3",
            "type": "mcq",
            "prompt": "Les produits de la dégradation complète du glucose sont :",
            "options": [
              "L’alcool et le dioxyde de carbone seuls",
              "Le dioxyde de carbone et l’eau, avec de l’ATP",
              "Uniquement l’acide lactique",
              "Uniquement l’acide pyruvique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’équation de la respiration donnée dans le résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Interpréter une baisse d’oxygène",
          "stepTheme": "Interpréter une baisse d’oxygène",
          "stepBadge": "Interpréter une baisse d’oxygène",
          "paragraphText": "Méthode : si la quantité d’oxygène diminue après l’ajout de glucose, c’est que l’oxygène réagit avec le glucose.\nOn conclut à une oxydation respiratoire quand le milieu est enrichi en oxygène.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p01_q4",
            "type": "mcq",
            "prompt": "Une baisse d’oxygène après ajout de glucose traduit :",
            "options": [
              "Que l’oxygène est produit par les levures",
              "Sa réaction avec le glucose",
              "Que le glucose est absent",
              "Une fermentation sans oxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation de l’expérience du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Respiration ne veut pas dire dégradation partielle",
          "stepTheme": "Respiration ne veut pas dire dégradation partielle",
          "stepBadge": "Respiration ne veut pas dire dégradation partielle",
          "paragraphText": "Piège : la dégradation partielle ou incomplète caractérise la fermentation, pas la respiration.\nLa respiration dégrade complètement le substrat organique.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p01_q5",
            "type": "mcq",
            "prompt": "La dégradation du glucose lors de la respiration est :",
            "options": [
              "Partielle",
              "Incomplète",
              "Complète",
              "Absente"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La conclusion du résumé oppose dégradation complète pour la respiration et partielle pour la fermentation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les modifications pendant le sport",
          "stepTheme": "Les modifications pendant le sport",
          "stepBadge": "Les modifications pendant le sport",
          "paragraphText": "Exemple de la situation d’apprentissage : pendant le sport, la température corporelle et les rythmes cardiaque et respiratoire augmentent.\nLe professeur d’EPS explique ces modifications par la production d’énergie par les cellules et un besoin accru d’oxygène.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p01_q6",
            "type": "mcq",
            "prompt": "Pendant l’exercice physique, le besoin de l’organisme en oxygène est :",
            "options": [
              "Diminué",
              "Inchangé",
              "Accru",
              "Supprimé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La situation d’apprentissage parle d’un besoin accru d’oxygène."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p01_q1",
          "type": "mcq",
          "prompt": "La respiration cellulaire est :",
          "options": [
            "Une dégradation partielle en absence d’oxygène",
            "Une oxydation complète du glucose en présence d’oxygène",
            "La seule fermentation alcoolique",
            "Un phénomène uniquement musculaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé définit la respiration comme l’oxydation en milieu aérobie."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p01_q2",
          "type": "mcq",
          "prompt": "Après l’ajout de glucose, la quantité d’oxygène :",
          "options": [
            "Augmente jusqu’à 50 pour cent",
            "Reste fixe à 23 pour cent",
            "Baisse rapidement et s’annule vers 2,7 minutes",
            "Ne change jamais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’analyse de la courbe de l’expérience EXAO."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p01_q3",
          "type": "mcq",
          "prompt": "Les produits de la dégradation complète du glucose sont :",
          "options": [
            "L’alcool et le dioxyde de carbone seuls",
            "Le dioxyde de carbone et l’eau, avec de l’ATP",
            "Uniquement l’acide lactique",
            "Uniquement l’acide pyruvique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’équation de la respiration donnée dans le résumé."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p01_q4",
          "type": "mcq",
          "prompt": "Une baisse d’oxygène après ajout de glucose traduit :",
          "options": [
            "Que l’oxygène est produit par les levures",
            "Sa réaction avec le glucose",
            "Que le glucose est absent",
            "Une fermentation sans oxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation de l’expérience du résumé."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p01_q5",
          "type": "mcq",
          "prompt": "La dégradation du glucose lors de la respiration est :",
          "options": [
            "Partielle",
            "Incomplète",
            "Complète",
            "Absente"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La conclusion du résumé oppose dégradation complète pour la respiration et partielle pour la fermentation."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p01_q6",
          "type": "mcq",
          "prompt": "Pendant l’exercice physique, le besoin de l’organisme en oxygène est :",
          "options": [
            "Diminué",
            "Inchangé",
            "Accru",
            "Supprimé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La situation d’apprentissage parle d’un besoin accru d’oxygène."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l03_production_energie_cellule_p02",
      "order": 2,
      "title": "La fermentation : produire de l’énergie en absence d’oxygène",
      "summary": "En milieu anaérobie, les levures dégradent partiellement le glucose en alcool, avec peu d’ATP.",
      "conceptExplanation": "L’expérience cultive des levures dans un flacon enrichi en glucose, complètement bouché, donc pauvre en oxygène. On observe une légère augmentation de la température, l’eau de chaux qui se trouble et le bichromate de potassium qui vire du jaune au vert.\nLe gaz qui trouble l’eau de chaux est le dioxyde de carbone. Le contenu qui fait virer le bichromate est l’alcool.\nLa formation de l’alcool à partir du glucose s’accompagne d’un dégagement de dioxyde de carbone et d’une production de chaleur : c’est une réaction exothermique.\nEn absence d’oxygène, les levures dégradent partiellement ou incomplètement le glucose en alcool ou éthanol pour produire de l’énergie sous forme d’ATP : c’est la fermentation alcoolique, en milieu anaérobie.",
      "keyRule": "Fermentation = dégradation partielle du glucose en absence d’oxygène, avec des résidus qui contiennent encore de l’énergie.",
      "formulas": [],
      "workedExample": {
        "title": "L’expérience de fermentation des levures",
        "statement": "Un flacon bouché de levures et de glucose dégage un gaz et produit une substance qui fait virer le bichromate au vert. Identifie ces produits et le phénomène.",
        "methodSteps": [
          "Le gaz qui trouble l’eau de chaux est le dioxyde de carbone.",
          "La substance qui fait virer le bichromate du jaune au vert est l’alcool.",
          "Le milieu est pauvre en oxygène, donc il s’agit d’une fermentation alcoolique."
        ],
        "conclusion": "La fermentation alcoolique dégrade partiellement le glucose en alcool et dioxyde de carbone."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la fermentation alcoolique",
          "stepTheme": "Définition de la fermentation alcoolique",
          "stepBadge": "Définition de la fermentation alcoolique",
          "paragraphText": "• Fermentation alcoolique : transformation du glucose par les levures en absence d’oxygène, produisant de l’alcool ou éthanol, du dioxyde de carbone et de l’ATP.\nElle se déroule en milieu pauvre en oxygène ou milieu anaérobie.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p02_q1",
            "type": "mcq",
            "prompt": "La fermentation alcoolique se déroule en milieu :",
            "options": [
              "Aérobie riche en oxygène",
              "Anaérobie pauvre en oxygène",
              "Uniquement dans la mitochondrie",
              "Sans glucose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé oppose milieu aérobie pour la respiration et anaérobie pour la fermentation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les indices expérimentaux de la fermentation",
          "stepTheme": "Les indices expérimentaux de la fermentation",
          "stepBadge": "Les indices expérimentaux de la fermentation",
          "paragraphText": "Trois observations signalent la fermentation : légère augmentation de la température, eau de chaux troublée et bichromate virant au vert.\nChaque indice correspond à un produit ou à la chaleur dégagée.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p02_q2",
            "type": "mcq",
            "prompt": "L’eau de chaux troublée révèle la présence de :",
            "options": [
              "Oxygène",
              "Alcool",
              "Dioxyde de carbone",
              "Eau pure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse indique que le gaz qui trouble l’eau de chaux est le dioxyde de carbone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une réaction exothermique à dégradation partielle",
          "stepTheme": "Une réaction exothermique à dégradation partielle",
          "stepBadge": "Une réaction exothermique à dégradation partielle",
          "paragraphText": "La formation de l’alcool s’accompagne d’un dégagement de dioxyde de carbone et d’une production de chaleur.\nLes résidus de la fermentation contiennent encore de l’énergie, car la dégradation est partielle.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p02_q3",
            "type": "mcq",
            "prompt": "Les résidus de la fermentation contiennent encore de l’énergie car la dégradation est :",
            "options": [
              "Totale",
              "Partielle",
              "Absente",
              "Uniquement thermique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le corrigé de l’activité d’application sur la fermentation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Fermentation alcoolique et fermentation acétique",
          "stepTheme": "Fermentation alcoolique et fermentation acétique",
          "stepBadge": "Fermentation alcoolique et fermentation acétique",
          "paragraphText": "• Fermentation alcoolique : l’acide pyruvique est dégradé en alcool éthylique ou éthanol. • Fermentation acétique : l’acide pyruvique est dégradé en acide acétique.\nLes deux commencent par la glycolyse.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p02_q4",
            "type": "mcq",
            "prompt": "L’acide pyruvique dégradé en acide acétique correspond à la fermentation :",
            "options": [
              "Alcoolique",
              "Acétique",
              "Respiratoire",
              "Lactique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la distinction du corrigé de l’activité d’application."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La fermentation libère peu d’énergie",
          "stepTheme": "La fermentation libère peu d’énergie",
          "stepBadge": "La fermentation libère peu d’énergie",
          "paragraphText": "Piège : croire que la fermentation produit autant d’énergie que la respiration.\nLe résumé insiste : la fermentation est un processus au cours duquel très peu d’énergie est libérée par la cellule.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p02_q5",
            "type": "mcq",
            "prompt": "La fermentation libère, par rapport à la respiration :",
            "options": [
              "Beaucoup plus d’énergie",
              "Très peu d’énergie",
              "Exactement la même énergie",
              "Aucune énergie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé complète : très peu d’énergie est libérée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le virage du bichromate",
          "stepTheme": "Le virage du bichromate",
          "stepBadge": "Le virage du bichromate",
          "paragraphText": "Exemple : le contenu du flacon fait virer la solution de bichromate de potassium du jaune au vert.\nCet indice, cité dans les résultats, permet d’identifier l’alcool produit.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p02_q6",
            "type": "mcq",
            "prompt": "Le virage du bichromate du jaune au vert révèle :",
            "options": [
              "Le dioxyde de carbone",
              "L’alcool",
              "L’oxygène",
              "Le glucose restant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’analyse des résultats attribue ce virage à l’alcool."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p02_q1",
          "type": "mcq",
          "prompt": "La fermentation alcoolique se déroule en milieu :",
          "options": [
            "Aérobie riche en oxygène",
            "Anaérobie pauvre en oxygène",
            "Uniquement dans la mitochondrie",
            "Sans glucose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé oppose milieu aérobie pour la respiration et anaérobie pour la fermentation."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p02_q2",
          "type": "mcq",
          "prompt": "L’eau de chaux troublée révèle la présence de :",
          "options": [
            "Oxygène",
            "Alcool",
            "Dioxyde de carbone",
            "Eau pure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse indique que le gaz qui trouble l’eau de chaux est le dioxyde de carbone."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p02_q3",
          "type": "mcq",
          "prompt": "Les résidus de la fermentation contiennent encore de l’énergie car la dégradation est :",
          "options": [
            "Totale",
            "Partielle",
            "Absente",
            "Uniquement thermique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le corrigé de l’activité d’application sur la fermentation."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p02_q4",
          "type": "mcq",
          "prompt": "L’acide pyruvique dégradé en acide acétique correspond à la fermentation :",
          "options": [
            "Alcoolique",
            "Acétique",
            "Respiratoire",
            "Lactique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la distinction du corrigé de l’activité d’application."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p02_q5",
          "type": "mcq",
          "prompt": "La fermentation libère, par rapport à la respiration :",
          "options": [
            "Beaucoup plus d’énergie",
            "Très peu d’énergie",
            "Exactement la même énergie",
            "Aucune énergie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé complète : très peu d’énergie est libérée."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p02_q6",
          "type": "mcq",
          "prompt": "Le virage du bichromate du jaune au vert révèle :",
          "options": [
            "Le dioxyde de carbone",
            "L’alcool",
            "L’oxygène",
            "Le glucose restant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’analyse des résultats attribue ce virage à l’alcool."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l03_production_energie_cellule_p03",
      "order": 3,
      "title": "La mitochondrie, structure spécialisée de la production d’énergie",
      "summary": "Les levures en milieu aérobie ont de nombreuses mitochondries bien développées, siège de la respiration.",
      "conceptExplanation": "Deux cultures de levures reçoivent du glucose pendant une semaine : le milieu A est enrichi en oxygène et le milieu B appauvri en oxygène.\nAprès une semaine, le milieu A montre un grand nombre de mitochondries bien développées, tandis que le milieu B montre très peu de mitochondries, également atrophiées.\nEn milieu anaérobie, les mitochondries sont sans activité malgré la présence de glucose ; en milieu aérobie, elles sont toujours en activité et dégradent complètement le glucose en présence d’oxygène.\nLa fermentation, elle, se déroule dans le hyaloplasme ou cytoplasme de la cellule, en dehors des mitochondries. La cellule produit donc l’énergie grâce à une structure spécialisée appelée mitochondrie, annotée par membrane externe, membrane interne, crête, matrice, ADN mitochondrial et ribosome.",
      "keyRule": "Mitochondrie = siège de la respiration ; hyaloplasme = siège de la fermentation et de la glycolyse.",
      "formulas": [],
      "workedExample": {
        "title": "Situation d’évaluation : les éléments isolés des cellules hépatiques",
        "statement": "On isole par centrifugation des éléments de cellules hépatiques de souris qui consomment l’oxygène d’un bioréacteur. Nomme ces éléments et leur rôle.",
        "methodSteps": [
          "L’observation au microscope du culot montre des mitochondries.",
          "Placées avec des nutriments carbonés, elles font baisser la teneur en oxygène d’environ 9,5 mg par litre à environ 4 mg par litre en 9 minutes selon le corrigé.",
          "Cette consommation d’oxygène sert à produire de l’énergie sous forme d’ATP."
        ],
        "conclusion": "Les éléments isolés sont les mitochondries, organites de la production d’énergie par respiration."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la mitochondrie dans la leçon",
          "stepTheme": "Définition de la mitochondrie dans la leçon",
          "stepBadge": "Définition de la mitochondrie dans la leçon",
          "paragraphText": "• Mitochondrie : structure spécialisée grâce à laquelle la cellule produit l’énergie, en dégradant complètement le glucose en présence d’oxygène.\nElle comporte notamment une membrane externe, une membrane interne formant des crêtes et une matrice.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p03_q1",
            "type": "mcq",
            "prompt": "La structure spécialisée de la production d’énergie par respiration est :",
            "options": [
              "Le hyaloplasme seul",
              "La mitochondrie",
              "Le noyau",
              "La membrane plasmique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion de la partie II du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’effet du milieu aérobie sur les mitochondries",
          "stepTheme": "L’effet du milieu aérobie sur les mitochondries",
          "stepBadge": "L’effet du milieu aérobie sur les mitochondries",
          "paragraphText": "En milieu aérobie, les levures contiennent beaucoup de mitochondries bien développées car elles sont toujours en activité.\nEn milieu anaérobie, elles sont très peu nombreuses et atrophiées.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p03_q2",
            "type": "mcq",
            "prompt": "En milieu anaérobie, les mitochondries des levures sont :",
            "options": [
              "Nombreuses et bien développées",
              "Très peu nombreuses et atrophiées",
              "Absentes du hyaloplasme",
              "Transformées en noyaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les résultats comparés des milieux A et B."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Annoter une mitochondrie",
          "stepTheme": "Annoter une mitochondrie",
          "stepBadge": "Annoter une mitochondrie",
          "paragraphText": "Méthode d’annotation du corrigé : membrane externe, membrane interne, crête, matrice, ADN mitochondrial et ribosome.\nLa matrice est le lieu de l’étape mitochondriale de la dégradation du glucose.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p03_q3",
            "type": "mcq",
            "prompt": "L’intérieur de la mitochondrie où se déroule le cycle de Krebs est :",
            "options": [
              "La crête seule",
              "La membrane externe",
              "La matrice",
              "Le hyaloplasme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé situe l’étape du cycle de Krebs dans la matrice mitochondriale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le lieu de la fermentation",
          "stepTheme": "Le lieu de la fermentation",
          "stepBadge": "Le lieu de la fermentation",
          "paragraphText": "La fermentation se déroule dans le hyaloplasme ou cytoplasme de la cellule, en dehors des mitochondries.\nC’est une différence de localisation essentielle avec la respiration.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p03_q4",
            "type": "mcq",
            "prompt": "La fermentation se déroule dans :",
            "options": [
              "La matrice mitochondriale",
              "Le hyaloplasme",
              "Le noyau",
              "Les crêtes mitochondriales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé le précise après l’interprétation sur les mitochondries."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Présence de glucose ne signifie pas mitochondries actives",
          "stepTheme": "Présence de glucose ne signifie pas mitochondries actives",
          "stepBadge": "Présence de glucose ne signifie pas mitochondries actives",
          "paragraphText": "Piège : en milieu anaérobie, les mitochondries sont sans activité malgré la présence de glucose.\nC’est l’oxygène qui conditionne leur activité respiratoire, pas seulement le substrat.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p03_q5",
            "type": "mcq",
            "prompt": "En milieu anaérobie avec glucose, les mitochondries sont :",
            "options": [
              "Toujours très actives",
              "Sans activité",
              "En fermentation dans leur matrice",
              "Multipliées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation exacte du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La baisse d’oxygène dans le bioréacteur",
          "stepTheme": "La baisse d’oxygène dans le bioréacteur",
          "stepBadge": "La baisse d’oxygène dans le bioréacteur",
          "paragraphText": "Exemple de la situation d’évaluation corrigée : la teneur en oxygène baisse régulièrement d’environ 9,5 mg par litre à environ 4 mg par litre au bout de 9 minutes.\nLe corrigé explique cette baisse par l’utilisation de l’oxygène par les mitochondries pour produire de l’ATP.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p03_q6",
            "type": "mcq",
            "prompt": "La baisse d’oxygène dans le bioréacteur s’explique par :",
            "options": [
              "Sa production par les mitochondries",
              "Son utilisation par les mitochondries pour produire de l’ATP",
              "La fermentation du hyaloplasme seul",
              "L’arrêt des nutriments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’explication du corrigé de la situation d’évaluation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p03_q1",
          "type": "mcq",
          "prompt": "La structure spécialisée de la production d’énergie par respiration est :",
          "options": [
            "Le hyaloplasme seul",
            "La mitochondrie",
            "Le noyau",
            "La membrane plasmique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion de la partie II du résumé."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p03_q2",
          "type": "mcq",
          "prompt": "En milieu anaérobie, les mitochondries des levures sont :",
          "options": [
            "Nombreuses et bien développées",
            "Très peu nombreuses et atrophiées",
            "Absentes du hyaloplasme",
            "Transformées en noyaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les résultats comparés des milieux A et B."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p03_q3",
          "type": "mcq",
          "prompt": "L’intérieur de la mitochondrie où se déroule le cycle de Krebs est :",
          "options": [
            "La crête seule",
            "La membrane externe",
            "La matrice",
            "Le hyaloplasme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé situe l’étape du cycle de Krebs dans la matrice mitochondriale."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p03_q4",
          "type": "mcq",
          "prompt": "La fermentation se déroule dans :",
          "options": [
            "La matrice mitochondriale",
            "Le hyaloplasme",
            "Le noyau",
            "Les crêtes mitochondriales"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé le précise après l’interprétation sur les mitochondries."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p03_q5",
          "type": "mcq",
          "prompt": "En milieu anaérobie avec glucose, les mitochondries sont :",
          "options": [
            "Toujours très actives",
            "Sans activité",
            "En fermentation dans leur matrice",
            "Multipliées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation exacte du résumé."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p03_q6",
          "type": "mcq",
          "prompt": "La baisse d’oxygène dans le bioréacteur s’explique par :",
          "options": [
            "Sa production par les mitochondries",
            "Son utilisation par les mitochondries pour produire de l’ATP",
            "La fermentation du hyaloplasme seul",
            "L’arrêt des nutriments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’explication du corrigé de la situation d’évaluation."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l03_production_energie_cellule_p04",
      "order": 4,
      "title": "La glycolyse, première étape de la dégradation du glucose",
      "summary": "Dans le hyaloplasme, le glucose est divisé en deux molécules d’acide pyruvique avec production d’ATP.",
      "conceptExplanation": "La dégradation du glucose dans la cellule se fait en deux étapes : l’étape du hyaloplasme ou cytosol et l’étape de la matrice mitochondriale.\nDans le hyaloplasme, une molécule de glucose est divisée en deux molécules d’acide pyruvique : c’est la glycolyse.\nLa glycolyse est la décomposition du glucose suite à une série de réactions catalysées par des enzymes spécifiques pour produire de l’acide pyruvique, de l’ATP, des protons et de l’eau, avec formation de NADH selon l’équation du résumé.\nLe glucose comporte 6 atomes de carbone et chaque acide pyruvique en comporte 3, comme le rappelle l’activité d’application sur la fermentation qui commence aussi par la glycolyse.",
      "keyRule": "Glycolyse dans le hyaloplasme : un glucose à 6 carbones donne deux acides pyruviques à 3 carbones.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur la fermentation et la glycolyse",
        "statement": "Complète : la dégradation du glucose en absence de dioxygène commence par une étape qui divise le glucose en deux molécules à 3 carbones. Nomme cette étape et ses produits.",
        "methodSteps": [
          "L’étape initiale commune est la glycolyse, dans le hyaloplasme.",
          "Une molécule de glucose à 6 atomes de carbone donne deux molécules d’acides pyruviques à 3 atomes de carbone chacune.",
          "Cette étape produit aussi de l’ATP selon l’équation du résumé."
        ],
        "conclusion": "Cette première étape est la glycolyse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la glycolyse",
          "stepTheme": "Définition de la glycolyse",
          "stepBadge": "Définition de la glycolyse",
          "paragraphText": "• Glycolyse : décomposition du glucose, dans le hyaloplasme, en deux molécules d’acide pyruvique par une série de réactions catalysées par des enzymes spécifiques.\nElle produit aussi de l’ATP, des protons, de l’eau et du NADH selon le résumé.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p04_q1",
            "type": "mcq",
            "prompt": "La glycolyse se déroule dans :",
            "options": [
              "La matrice mitochondriale",
              "Le hyaloplasme ou cytosol",
              "Le noyau",
              "La fente synaptique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première étape décrite dans la partie III."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le bilan carboné de la glycolyse",
          "stepTheme": "Le bilan carboné de la glycolyse",
          "stepBadge": "Le bilan carboné de la glycolyse",
          "paragraphText": "Une molécule de glucose comportant 6 atomes de carbone se dégrade pour donner deux molécules d’acides pyruviques comportant chacune 3 atomes de carbone.\nLe nombre total de carbones est conservé à cette étape.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p04_q2",
            "type": "mcq",
            "prompt": "La glycolyse transforme un glucose en :",
            "options": [
              "Une molécule à 6 carbones",
              "Deux molécules d’acide pyruvique à 3 carbones",
              "Uniquement du dioxyde de carbone",
              "De l’alcool directement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le corrigé de l’activité d’application."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les produits énergétiques de la glycolyse",
          "stepTheme": "Les produits énergétiques de la glycolyse",
          "stepBadge": "Les produits énergétiques de la glycolyse",
          "paragraphText": "L’équation du résumé associe à la glycolyse la formation de pyruvates, d’ATP, d’eau et de NADH à partir du glucose, d’ADP, de Pi et de NAD+.\nCes produits montrent que même la première étape libère de l’énergie utilisable.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p04_q3",
            "type": "mcq",
            "prompt": "Selon l’équation du résumé, la glycolyse produit notamment :",
            "options": [
              "Uniquement de l’alcool",
              "Des pyruvates, de l’ATP et du NADH",
              "Uniquement de l’oxygène",
              "De la phosphocréatine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les produits écrits dans l’équation de la glycolyse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Situer les deux étapes de la dégradation",
          "stepTheme": "Situer les deux étapes de la dégradation",
          "stepBadge": "Situer les deux étapes de la dégradation",
          "paragraphText": "Méthode : on place d’abord la glycolyse dans le hyaloplasme, puis le devenir du pyruvate dans la matrice mitochondriale.\nConfondre les deux lieux est l’erreur la plus fréquente de cette leçon.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p04_q4",
            "type": "mcq",
            "prompt": "La deuxième étape de la dégradation du glucose se déroule dans :",
            "options": [
              "Le hyaloplasme",
              "La matrice mitochondriale",
              "La membrane externe seule",
              "Le milieu extracellulaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé distingue étape du hyaloplasme et étape de la matrice mitochondriale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La glycolyse n’est pas la fermentation complète",
          "stepTheme": "La glycolyse n’est pas la fermentation complète",
          "stepBadge": "La glycolyse n’est pas la fermentation complète",
          "paragraphText": "Piège : la glycolyse est seulement le début commun ; la fermentation se poursuit ensuite vers l’alcool ou l’acide acétique, tandis que la voie respiratoire passe par la mitochondrie.\nLe pyruvate est le carrefour entre ces voies.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p04_q5",
            "type": "mcq",
            "prompt": "Le pyruvate formé par glycolyse peut ensuite :",
            "options": [
              "Uniquement redevenir du glucose",
              "Être dégradé en alcool, en acide acétique ou entrer dans la voie mitochondriale",
              "Disparaître sans produit",
              "Produire de l’oxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’activité d’application cite l’alcool et l’acide acétique, et la partie III la voie mitochondriale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le texte à compléter corrigé",
          "stepTheme": "Le texte à compléter corrigé",
          "stepBadge": "Le texte à compléter corrigé",
          "paragraphText": "Exemple : le corrigé complète que la dégradation en absence de dioxygène est la fermentation et qu’elle commence par la glycolyse.\nIl précise ensuite la dégradation partielle et les résidus encore chargés d’énergie.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p04_q6",
            "type": "mcq",
            "prompt": "La fermentation commence par :",
            "options": [
              "Le cycle de Krebs",
              "La glycolyse",
              "La chaîne respiratoire",
              "La glycogénolyse musculaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le deuxième mot du corrigé de l’activité d’application."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p04_q1",
          "type": "mcq",
          "prompt": "La glycolyse se déroule dans :",
          "options": [
            "La matrice mitochondriale",
            "Le hyaloplasme ou cytosol",
            "Le noyau",
            "La fente synaptique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première étape décrite dans la partie III."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p04_q2",
          "type": "mcq",
          "prompt": "La glycolyse transforme un glucose en :",
          "options": [
            "Une molécule à 6 carbones",
            "Deux molécules d’acide pyruvique à 3 carbones",
            "Uniquement du dioxyde de carbone",
            "De l’alcool directement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le corrigé de l’activité d’application."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p04_q3",
          "type": "mcq",
          "prompt": "Selon l’équation du résumé, la glycolyse produit notamment :",
          "options": [
            "Uniquement de l’alcool",
            "Des pyruvates, de l’ATP et du NADH",
            "Uniquement de l’oxygène",
            "De la phosphocréatine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les produits écrits dans l’équation de la glycolyse."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p04_q4",
          "type": "mcq",
          "prompt": "La deuxième étape de la dégradation du glucose se déroule dans :",
          "options": [
            "Le hyaloplasme",
            "La matrice mitochondriale",
            "La membrane externe seule",
            "Le milieu extracellulaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé distingue étape du hyaloplasme et étape de la matrice mitochondriale."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p04_q5",
          "type": "mcq",
          "prompt": "Le pyruvate formé par glycolyse peut ensuite :",
          "options": [
            "Uniquement redevenir du glucose",
            "Être dégradé en alcool, en acide acétique ou entrer dans la voie mitochondriale",
            "Disparaître sans produit",
            "Produire de l’oxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’activité d’application cite l’alcool et l’acide acétique, et la partie III la voie mitochondriale."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p04_q6",
          "type": "mcq",
          "prompt": "La fermentation commence par :",
          "options": [
            "Le cycle de Krebs",
            "La glycolyse",
            "La chaîne respiratoire",
            "La glycogénolyse musculaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le deuxième mot du corrigé de l’activité d’application."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l03_production_energie_cellule_p05",
      "order": 5,
      "title": "Le cycle de Krebs dans la matrice mitochondriale",
      "summary": "Le pyruvate est transformé en acétylcoenzyme A puis engagé dans le cycle de Krebs, producteur de molécules énergétiques.",
      "conceptExplanation": "Le pyruvate est transporté dans la matrice de la mitochondrie par une protéine membranaire appelée pyruvate translocase.\nDans la matrice, le coenzyme A fixe le pyruvate pour donner l’acétylcoenzyme A. L’acétyl-CoA se fixe à son tour à une molécule à 4 carbones appelée oxaloacétate.\nCe complexe s’engage dans une série de réactions catalysées par des enzymes, déshydrogénases et carboxylases, pour aboutir à la formation d’une autre molécule d’oxaloacétate : cette série de réactions est le cycle de Krebs.\nAu cours du cycle de Krebs, le résumé cite la production d’ATP, de NADH dont chacun contient de l’énergie transformée en ATP, et de FADH2 capable de produire de l’ATP.",
      "keyRule": "Pyruvate, acétyl-CoA, oxaloacétate : le cycle de Krebs régénère son point de départ dans la matrice.",
      "formulas": [],
      "workedExample": {
        "title": "Du pyruvate au cycle de Krebs",
        "statement": "Explique comment l’acide pyruvique formé dans le hyaloplasme entre dans le cycle de Krebs.",
        "methodSteps": [
          "Le pyruvate traverse vers la matrice grâce à la pyruvate translocase.",
          "Dans la matrice, le coenzyme A le fixe pour donner l’acétylcoenzyme A.",
          "L’acétyl-CoA se fixe à l’oxaloacétate à 4 carbones et le cycle se déroule jusqu’à régénérer l’oxaloacétate."
        ],
        "conclusion": "Le cycle de Krebs se déroule dans la matrice mitochondriale à partir de l’acétyl-CoA."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du cycle de Krebs",
          "stepTheme": "Définition du cycle de Krebs",
          "stepBadge": "Définition du cycle de Krebs",
          "paragraphText": "• Cycle de Krebs : série de réactions catalysées par des enzymes dans la matrice mitochondriale, qui régénère l’oxaloacétate de départ.\nIl fait suite à la formation de l’acétylcoenzyme A à partir du pyruvate.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p05_q1",
            "type": "mcq",
            "prompt": "Le cycle de Krebs se déroule dans :",
            "options": [
              "Le hyaloplasme",
              "La matrice mitochondriale",
              "La membrane plasmique",
              "Le noyau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la localisation donnée dans la partie III."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’acétylcoenzyme A",
          "stepTheme": "L’acétylcoenzyme A",
          "stepBadge": "L’acétylcoenzyme A",
          "paragraphText": "• Acétylcoenzyme A : molécule formée quand le coenzyme A fixe le pyruvate dans la matrice mitochondriale.\nElle s’engage ensuite dans le cycle en se fixant à l’oxaloacétate.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p05_q2",
            "type": "mcq",
            "prompt": "L’acétylcoenzyme A se forme par fixation du pyruvate par :",
            "options": [
              "La pyruvate translocase dans le hyaloplasme",
              "Le coenzyme A dans la matrice",
              "L’oxaloacétate seul",
              "Une déshydrogénase extracellulaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé distingue le transport par la translocase et la fixation par le coenzyme A."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l’oxaloacétate",
          "stepTheme": "Le rôle de l’oxaloacétate",
          "stepBadge": "Le rôle de l’oxaloacétate",
          "paragraphText": "L’oxaloacétate est une molécule à 4 carbones à laquelle se fixe l’acétyl-CoA.\nÀ la fin de la série de réactions, une autre molécule d’oxaloacétate est formée, ce qui rend le processus cyclique.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p05_q3",
            "type": "mcq",
            "prompt": "L’oxaloacétate comporte :",
            "options": [
              "3 atomes de carbone",
              "4 atomes de carbone",
              "6 atomes de carbone",
              "2 atomes de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé précise une molécule à 4 carbones."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les molécules énergétiques du cycle",
          "stepTheme": "Les molécules énergétiques du cycle",
          "stepBadge": "Les molécules énergétiques du cycle",
          "paragraphText": "Au cours du cycle de Krebs, le résumé cite de l’ATP, du NADH et du FADH2.\nIl précise que chaque NADH contient de l’énergie transformée en ATP et que le FADH2 est capable de produire de l’ATP.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p05_q4",
            "type": "mcq",
            "prompt": "Parmi les molécules citées pour le cycle de Krebs, on trouve :",
            "options": [
              "Le NADH et le FADH2",
              "Uniquement l’alcool",
              "La dopamine",
              "L’acétylcholine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les molécules énergétiques listées dans le résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas placer le cycle dans le hyaloplasme",
          "stepTheme": "Ne pas placer le cycle dans le hyaloplasme",
          "stepBadge": "Ne pas placer le cycle dans le hyaloplasme",
          "paragraphText": "Piège : le hyaloplasme accueille la glycolyse, pas le cycle de Krebs.\nLe cycle exige le passage du pyruvate dans la matrice mitochondriale.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p05_q5",
            "type": "mcq",
            "prompt": "Le transport du pyruvate vers la matrice est assuré par :",
            "options": [
              "Une vésicule synaptique",
              "La pyruvate translocase",
              "Un macrophage",
              "La pompe à protons seule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme cette protéine membranaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les enzymes du cycle",
          "stepTheme": "Les enzymes du cycle",
          "stepBadge": "Les enzymes du cycle",
          "paragraphText": "Exemple : le résumé précise que les réactions du cycle sont catalysées par des enzymes, déshydrogénases et carboxylases.\nComme pour la glycolyse, chaque étape dépend donc d’enzymes spécifiques.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p05_q6",
            "type": "mcq",
            "prompt": "Les réactions du cycle de Krebs sont catalysées par :",
            "options": [
              "Des anticorps",
              "Des déshydrogénases et des carboxylases",
              "Des levures entières",
              "Du bichromate"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux familles d’enzymes citées."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p05_q1",
          "type": "mcq",
          "prompt": "Le cycle de Krebs se déroule dans :",
          "options": [
            "Le hyaloplasme",
            "La matrice mitochondriale",
            "La membrane plasmique",
            "Le noyau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la localisation donnée dans la partie III."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p05_q2",
          "type": "mcq",
          "prompt": "L’acétylcoenzyme A se forme par fixation du pyruvate par :",
          "options": [
            "La pyruvate translocase dans le hyaloplasme",
            "Le coenzyme A dans la matrice",
            "L’oxaloacétate seul",
            "Une déshydrogénase extracellulaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé distingue le transport par la translocase et la fixation par le coenzyme A."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p05_q3",
          "type": "mcq",
          "prompt": "L’oxaloacétate comporte :",
          "options": [
            "3 atomes de carbone",
            "4 atomes de carbone",
            "6 atomes de carbone",
            "2 atomes de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé précise une molécule à 4 carbones."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p05_q4",
          "type": "mcq",
          "prompt": "Parmi les molécules citées pour le cycle de Krebs, on trouve :",
          "options": [
            "Le NADH et le FADH2",
            "Uniquement l’alcool",
            "La dopamine",
            "L’acétylcholine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les molécules énergétiques listées dans le résumé."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p05_q5",
          "type": "mcq",
          "prompt": "Le transport du pyruvate vers la matrice est assuré par :",
          "options": [
            "Une vésicule synaptique",
            "La pyruvate translocase",
            "Un macrophage",
            "La pompe à protons seule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme cette protéine membranaire."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p05_q6",
          "type": "mcq",
          "prompt": "Les réactions du cycle de Krebs sont catalysées par :",
          "options": [
            "Des anticorps",
            "Des déshydrogénases et des carboxylases",
            "Des levures entières",
            "Du bichromate"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux familles d’enzymes citées."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l03_production_energie_cellule_p06",
      "order": 6,
      "title": "Bilan comparé : respiration contre fermentation",
      "summary": "Le tableau du résumé oppose une respiration à haut rendement et une fermentation rapide mais à faible rendement.",
      "conceptExplanation": "Le résumé compare la respiration et la fermentation dans un tableau. L’état de dégradation du glucose est totale ou complète pour la respiration et partielle ou incomplète pour la fermentation.\nLa localisation est la mitochondrie pour la respiration et le hyaloplasme pour la fermentation ; la voie est aérobie pour l’une et anaérobie pour l’autre.\nLe bilan énergétique est élevé pour la respiration, avec 38 ATP et un rendement élevé de 40 pour cent selon le tableau, et faible pour la fermentation, avec 2 ATP et un rendement faible de 2 pour cent.\nEnfin, la rapidité de production de l’ATP est peu rapide pour la respiration et rapide pour la fermentation. Le bilan global de la dégradation du glucose annoncé dans le texte est de 38 ATP, contre 2 ATP pour la fermentation.",
      "keyRule": "Retiens le tableau : respiration 38 ATP et rendement 40 pour cent ; fermentation 2 ATP et rendement 2 pour cent, mais production rapide.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le tableau comparatif (exercice 2)",
        "statement": "Complète le tableau respiration contre fermentation pour l’état de dégradation, la localisation, la voie, le bilan et la rapidité.",
        "methodSteps": [
          "État de dégradation : totale pour la respiration, partielle pour la fermentation.",
          "Localisation et voie : mitochondrie et aérobie contre hyaloplasme et anaérobie.",
          "Bilan et rapidité : 38 ATP peu rapide contre 2 ATP rapide."
        ],
        "conclusion": "Le tableau oppose point par point les deux voies de production d’énergie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le bilan de la respiration selon le tableau",
          "stepTheme": "Le bilan de la respiration selon le tableau",
          "stepBadge": "Le bilan de la respiration selon le tableau",
          "paragraphText": "Le tableau donne pour la respiration un bilan élevé de 38 ATP, avec un rendement élevé de 40 pour cent.\nSa production d’ATP est cependant peu rapide.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p06_q1",
            "type": "mcq",
            "prompt": "Le bilan de la respiration selon le tableau est de :",
            "options": [
              "2 ATP",
              "38 ATP",
              "8 ATP",
              "32 ATP seuls sans bilan global"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau et le texte annoncent un bilan global de 38 ATP pour la respiration."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le bilan de la fermentation selon le tableau",
          "stepTheme": "Le bilan de la fermentation selon le tableau",
          "stepBadge": "Le bilan de la fermentation selon le tableau",
          "paragraphText": "Le tableau donne pour la fermentation un bilan faible de 2 ATP, avec un rendement faible de 2 pour cent.\nEn revanche, sa production d’ATP est rapide.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p06_q2",
            "type": "mcq",
            "prompt": "Le bilan de la fermentation selon le tableau est de :",
            "options": [
              "38 ATP",
              "2 ATP",
              "40 ATP",
              "Aucun ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la valeur du tableau comparatif du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Comparer les localisations",
          "stepTheme": "Comparer les localisations",
          "stepBadge": "Comparer les localisations",
          "paragraphText": "Respiration : mitochondrie. Fermentation : hyaloplasme.\nCette opposition de localisation recoupe l’opposition de voie, aérobie contre anaérobie.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p06_q3",
            "type": "mcq",
            "prompt": "La fermentation est localisée dans :",
            "options": [
              "La mitochondrie",
              "Le hyaloplasme",
              "La matrice",
              "Les crêtes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la ligne localisation du tableau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Comparer les rapidités",
          "stepTheme": "Comparer les rapidités",
          "stepBadge": "Comparer les rapidités",
          "paragraphText": "La production d’ATP par respiration est peu rapide, alors que celle par fermentation est rapide.\nUn rendement élevé ne signifie donc pas une production plus rapide.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p06_q4",
            "type": "mcq",
            "prompt": "La voie à production d’ATP rapide est :",
            "options": [
              "La respiration",
              "La fermentation",
              "Le cycle de Krebs seul",
              "Aucune des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la dernière ligne du tableau comparatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser les rendements",
          "stepTheme": "Ne pas inverser les rendements",
          "stepBadge": "Ne pas inverser les rendements",
          "paragraphText": "Piège : le rendement élevé de 40 pour cent appartient à la respiration et le rendement faible de 2 pour cent à la fermentation.\nInverser ces deux valeurs fausse tout le tableau.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p06_q5",
            "type": "mcq",
            "prompt": "Le rendement de 40 pour cent correspond à :",
            "options": [
              "La fermentation",
              "La respiration",
              "La glycolyse seule",
              "La situation d’évaluation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau associe rendement élevé et respiration."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Choisir la voie selon les conditions",
          "stepTheme": "Choisir la voie selon les conditions",
          "stepBadge": "Choisir la voie selon les conditions",
          "paragraphText": "Exemple de la conclusion générale : en milieu aérobie, la cellule dégrade complètement le substrat par respiration ; en milieu anaérobie, elle le dégrade incomplètement par fermentation.\nLes conditions d’oxygénation déterminent donc la voie utilisée.",
          "exercise": {
            "id": "terminale_c_svt_l03_production_energie_cellule_p06_q6",
            "type": "mcq",
            "prompt": "En milieu anaérobie, la voie utilisée est :",
            "options": [
              "La respiration",
              "La fermentation",
              "Le cycle de Krebs seul",
              "Aucune production d’énergie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p06_q1",
          "type": "mcq",
          "prompt": "Le bilan de la respiration selon le tableau est de :",
          "options": [
            "2 ATP",
            "38 ATP",
            "8 ATP",
            "32 ATP seuls sans bilan global"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau et le texte annoncent un bilan global de 38 ATP pour la respiration."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p06_q2",
          "type": "mcq",
          "prompt": "Le bilan de la fermentation selon le tableau est de :",
          "options": [
            "38 ATP",
            "2 ATP",
            "40 ATP",
            "Aucun ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la valeur du tableau comparatif du résumé."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p06_q3",
          "type": "mcq",
          "prompt": "La fermentation est localisée dans :",
          "options": [
            "La mitochondrie",
            "Le hyaloplasme",
            "La matrice",
            "Les crêtes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la ligne localisation du tableau."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p06_q4",
          "type": "mcq",
          "prompt": "La voie à production d’ATP rapide est :",
          "options": [
            "La respiration",
            "La fermentation",
            "Le cycle de Krebs seul",
            "Aucune des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la dernière ligne du tableau comparatif."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p06_q5",
          "type": "mcq",
          "prompt": "Le rendement de 40 pour cent correspond à :",
          "options": [
            "La fermentation",
            "La respiration",
            "La glycolyse seule",
            "La situation d’évaluation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau associe rendement élevé et respiration."
        },
        {
          "id": "terminale_c_svt_l03_production_energie_cellule_p06_q6",
          "type": "mcq",
          "prompt": "En milieu anaérobie, la voie utilisée est :",
          "options": [
            "La respiration",
            "La fermentation",
            "Le cycle de Krebs seul",
            "Aucune production d’énergie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion générale de la leçon."
        }
      ]
    }
  ]
};
