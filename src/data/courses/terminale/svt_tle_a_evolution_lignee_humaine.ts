import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : L'évolution de la lignée humaine » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1759
export const SVT_TLE_A_L04_EVOLUTION_LIGNEE_HUMAINE: CurriculumChapter = {
  "id": "terminale_a1_svt_l04_evolution_lignee_humaine",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : L'évolution de la lignée humaine",
  "summary": "De l'australopithèque à l'Homo sapiens, l'évolution de la lignée humaine s'est faite par des transformations morphologiques du crâne et du cerveau, des modifications de la stature et des modifications moléculaires, que des théories successives expliquent jusqu'à la théorie synthétique.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1759",
  "points": [
    {
      "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01",
      "order": 1,
      "title": "Les transformations morphologiques du crâne et du cerveau",
      "summary": "Décrire l'augmentation de la boîte crânienne et du cerveau des australopithèques aux Homo sapiens.",
      "conceptExplanation": "Le document 1 montre les différentes évolutions de la boîte crânienne et du cerveau depuis les australopithèques jusqu'aux Homo sapiens.\nLorsque l'on passe des australopithèques aux Homo sapiens-sapiens, on constate une augmentation progressive de la boîte crânienne, une modification de la morphologie du crâne et une augmentation progressive du volume du cerveau.\nOn observe aussi une vascularisation accentuée, avec un nombre de vaisseaux sanguins de plus en plus important et ramifié, et une augmentation du nombre de circonvolutions cérébrales.\nL'évolution de la lignée humaine s'est donc effectivement faite par des transformations morphologiques. La situation d'évaluation relie en outre la taille du cerveau à l'intelligence : plus la taille du cerveau augmente, plus l'intelligence est grande, selon le corrigé de la leçon.",
      "keyRule": "Des australopithèques aux Homo sapiens : boîte crânienne et cerveau grandissent, vascularisation et circonvolutions augmentent, morphologie du crâne se modifie.",
      "formulas": [],
      "workedExample": {
        "title": "Décrire les transformations des images (situation d'évaluation)",
        "statement": "Des images montrent la boîte crânienne et le cerveau des australopithèques aux Homo sapiens. Décris les transformations présentées.",
        "methodSteps": [
          "On observe une augmentation progressive de la boîte crânienne.",
          "La morphologie du crâne se modifie.",
          "Le volume du cerveau augmente progressivement.",
          "La vascularisation s'accentue et le nombre de circonvolutions cérébrales augmente."
        ],
        "conclusion": "Corrigé de la leçon : les quatre transformations morphologiques vont dans le sens d'un cerveau plus grand et plus complexe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une augmentation progressive",
          "stepTheme": "Une augmentation progressive",
          "stepBadge": "Une augmentation progressive",
          "paragraphText": "Les transformations du crâne et du cerveau sont progressives, des australopithèques jusqu'aux Homo sapiens.\nIl s'agit d'une augmentation progressive de la boîte crânienne et du volume du cerveau, pas d'un changement brutal.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q1",
            "type": "mcq",
            "prompt": "Le passage des australopithèques aux Homo sapiens se caractérise par :",
            "options": [
              "Une diminution du volume du cerveau",
              "Une augmentation progressive de la boîte crânienne et du volume du cerveau",
              "Un crâne sans modification",
              "Une disparition du cerveau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le premier résultat du document 1, confirmé vrai dans l'exercice 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La morphologie du crâne se modifie",
          "stepTheme": "La morphologie du crâne se modifie",
          "stepBadge": "La morphologie du crâne se modifie",
          "paragraphText": "La morphologie du crâne se modifie au cours de l'évolution de la lignée humaine.\nCette modification accompagne l'augmentation de la boîte crânienne qui loge le cerveau.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q2",
            "type": "mcq",
            "prompt": "Au cours de l'évolution de la lignée humaine, la morphologie du crâne :",
            "options": [
              "Reste rigoureusement identique",
              "Se modifie",
              "Disparaît chez Homo sapiens",
              "Ne concerne que le gorille"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exercice 1 confirme cette affirmation comme vraie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Vascularisation et circonvolutions",
          "stepTheme": "Vascularisation et circonvolutions",
          "stepBadge": "Vascularisation et circonvolutions",
          "paragraphText": "Le cerveau présente une vascularisation accentuée au fil de l'évolution.\nLe nombre de vaisseaux sanguins, faible au départ, augmente avec de plus en plus de ramifications, et le nombre de circonvolutions cérébrales augmente aussi.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q3",
            "type": "mcq",
            "prompt": "L'évolution du cerveau s'accompagne d'une augmentation :",
            "options": [
              "Du nombre de vaisseaux sanguins et de leurs ramifications",
              "Uniquement de la taille des os du crâne",
              "Du nombre de dents",
              "De la courbure de la colonne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'analyse des résultats parle d'une vascularisation accentuée et de ramifications de plus en plus nombreuses."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les circonvolutions ne disparaissent pas",
          "stepTheme": "Les circonvolutions ne disparaissent pas",
          "stepBadge": "Les circonvolutions ne disparaissent pas",
          "paragraphText": "Piège de l'exercice 1 : affirmer que le passage aux Homo sapiens-sapiens se caractérise par la disparition des circonvolutions est faux.\nAu contraire, leur nombre augmente au cours de l'évolution.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q4",
            "type": "mcq",
            "prompt": "L'affirmation « les circonvolutions disparaissent sur le cerveau » est jugée dans le corrigé :",
            "options": [
              "Vraie",
              "Vraie seulement chez l'australopithèque",
              "Fausse",
              "Non corrigée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Correction de l'exercice 1 : 1 vrai, 2 vrai, 3 faux, 4 vrai."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Taille du cerveau et intelligence",
          "stepTheme": "Taille du cerveau et intelligence",
          "stepBadge": "Taille du cerveau et intelligence",
          "paragraphText": "La situation d'évaluation demande de mettre en relation la taille du cerveau et l'intelligence.\nLe corrigé de la leçon répond : plus la taille du cerveau augmente, plus l'intelligence est grande.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q5",
            "type": "mcq",
            "prompt": "Selon le corrigé de la situation d'évaluation, plus la taille du cerveau augmente :",
            "options": [
              "Plus l'intelligence diminue",
              "Plus l'intelligence est grande",
              "Moins il y a de circonvolutions",
              "Plus la stature diminue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation énoncée dans le corrigé de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lire un document d'évolution morphologique",
          "stepTheme": "Lire un document d'évolution morphologique",
          "stepBadge": "Lire un document d'évolution morphologique",
          "paragraphText": "Méthode : observer le document dans l'ordre chronologique, des australopithèques aux Homo sapiens.\nOn relève alors, caractère par caractère, ce qui augmente ou se modifie : boîte crânienne, morphologie, volume cérébral, vascularisation, circonvolutions.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q6",
            "type": "mcq",
            "prompt": "Pour décrire les transformations morphologiques, il faut comparer :",
            "options": [
              "Le gorille et le porc",
              "Les australopithèques et les Homo sapiens, dans l'ordre de l'évolution",
              "Uniquement deux Homo sapiens",
              "Le crâne et le bassin du même individu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document 1 est construit sur cette comparaison, des australopithèques jusqu'aux Homo sapiens."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q1",
          "type": "mcq",
          "prompt": "Le passage des australopithèques aux Homo sapiens se caractérise par :",
          "options": [
            "Une diminution du volume du cerveau",
            "Une augmentation progressive de la boîte crânienne et du volume du cerveau",
            "Un crâne sans modification",
            "Une disparition du cerveau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le premier résultat du document 1, confirmé vrai dans l'exercice 1."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q2",
          "type": "mcq",
          "prompt": "Au cours de l'évolution de la lignée humaine, la morphologie du crâne :",
          "options": [
            "Reste rigoureusement identique",
            "Se modifie",
            "Disparaît chez Homo sapiens",
            "Ne concerne que le gorille"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exercice 1 confirme cette affirmation comme vraie."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q3",
          "type": "mcq",
          "prompt": "L'évolution du cerveau s'accompagne d'une augmentation :",
          "options": [
            "Du nombre de vaisseaux sanguins et de leurs ramifications",
            "Uniquement de la taille des os du crâne",
            "Du nombre de dents",
            "De la courbure de la colonne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'analyse des résultats parle d'une vascularisation accentuée et de ramifications de plus en plus nombreuses."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q4",
          "type": "mcq",
          "prompt": "L'affirmation « les circonvolutions disparaissent sur le cerveau » est jugée dans le corrigé :",
          "options": [
            "Vraie",
            "Vraie seulement chez l'australopithèque",
            "Fausse",
            "Non corrigée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Correction de l'exercice 1 : 1 vrai, 2 vrai, 3 faux, 4 vrai."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q5",
          "type": "mcq",
          "prompt": "Selon le corrigé de la situation d'évaluation, plus la taille du cerveau augmente :",
          "options": [
            "Plus l'intelligence diminue",
            "Plus l'intelligence est grande",
            "Moins il y a de circonvolutions",
            "Plus la stature diminue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation énoncée dans le corrigé de la leçon."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p01_q6",
          "type": "mcq",
          "prompt": "Pour décrire les transformations morphologiques, il faut comparer :",
          "options": [
            "Le gorille et le porc",
            "Les australopithèques et les Homo sapiens, dans l'ordre de l'évolution",
            "Uniquement deux Homo sapiens",
            "Le crâne et le bassin du même individu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document 1 est construit sur cette comparaison, des australopithèques jusqu'aux Homo sapiens."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02",
      "order": 2,
      "title": "Les modifications de la stature : colonne vertébrale et bassin",
      "summary": "Comparer colonne vertébrale et bassin chez le chimpanzé (gorille) et chez l'Homme.",
      "conceptExplanation": "Le document 2 compare quelques caractères de l'Homme et du gorille, désigné dans le tableau comme chimpanzé (gorille).\nLa colonne vertébrale présente une seule courbure chez le chimpanzé, alors que chez l'Homme il y a 4 courbures.\nLe bassin est étroit et allongé chez le chimpanzé, mais large et court chez l'Homme.\nCes différences de stature accompagnent l'évolution de la lignée humaine.",
      "keyRule": "Colonne et bassin distinguent nettement les deux statures : 1 courbure et bassin étroit et allongé chez le chimpanzé, 4 courbures et bassin large et court chez l'Homme.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le tableau comparatif (exercice 2)",
        "statement": "Complète, pour la colonne vertébrale et le bassin, le tableau comparant chimpanzé (gorille) et Homme.",
        "methodSteps": [
          "Colonne vertébrale : une courbure chez le chimpanzé, 4 courbures chez l'Homme.",
          "Bassin : étroit et allongé chez le chimpanzé, large et court chez l'Homme."
        ],
        "conclusion": "Corrigé de l'exercice 2 : les deux caractères opposent nettement les deux statures."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les courbures de la colonne vertébrale",
          "stepTheme": "Les courbures de la colonne vertébrale",
          "stepBadge": "Les courbures de la colonne vertébrale",
          "paragraphText": "La colonne vertébrale compte une seule courbure chez le chimpanzé (gorille).\nChez l'Homme, elle présente 4 courbures.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q1",
            "type": "mcq",
            "prompt": "La colonne vertébrale de l'Homme présente :",
            "options": [
              "Une courbure",
              "2 courbures",
              "4 courbures",
              "Aucune courbure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tableau du document 2 : une courbure chez le chimpanzé, 4 courbures chez l'Homme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La forme du bassin",
          "stepTheme": "La forme du bassin",
          "stepBadge": "La forme du bassin",
          "paragraphText": "Le bassin du chimpanzé est étroit et allongé.\nCelui de l'Homme est large et court : la forme du bassin fait partie des modifications de la stature.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q2",
            "type": "mcq",
            "prompt": "Le bassin de l'Homme est :",
            "options": [
              "Étroit et allongé",
              "Large et court",
              "Identique à celui du chimpanzé",
              "Absent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la ligne bassin du tableau comparatif de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un même tableau, deux statures",
          "stepTheme": "Un même tableau, deux statures",
          "stepBadge": "Un même tableau, deux statures",
          "paragraphText": "Le document 2 compare les mêmes caractères chez les deux espèces, ligne par ligne.\nColonne vertébrale et bassin montrent déjà des différences nettes de stature entre chimpanzé et Homme.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q3",
            "type": "mcq",
            "prompt": "Le document 2 compare :",
            "options": [
              "L'Homme et le cheval",
              "Quelques caractères de l'Homme et du gorille",
              "Deux populations humaines",
              "Le crâne uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document 2 est la comparaison de quelques caractères de l'Homme et du gorille."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser les deux colonnes",
          "stepTheme": "Ne pas inverser les deux colonnes",
          "stepBadge": "Ne pas inverser les deux colonnes",
          "paragraphText": "Piège classique du tableau : attribuer les 4 courbures au chimpanzé et la courbure unique à l'Homme.\nC'est l'inverse : une courbure chez le chimpanzé, 4 courbures chez l'Homme, comme le rappelle le corrigé de l'exercice 2.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q4",
            "type": "mcq",
            "prompt": "Chez le chimpanzé (gorille), la colonne vertébrale présente :",
            "options": [
              "4 courbures",
              "Une courbure",
              "3 courbures",
              "Une voûte plantaire développée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'exercice 2 : une courbure chez le chimpanzé, 4 courbures chez l'Homme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le bassin large et court de l'Homme",
          "stepTheme": "Le bassin large et court de l'Homme",
          "stepBadge": "Le bassin large et court de l'Homme",
          "paragraphText": "Le bassin large et court est l'un des caractères humains du tableau.\nIl s'oppose terme à terme au bassin étroit et allongé du chimpanzé, dans le même document.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q5",
            "type": "mcq",
            "prompt": "Le caractère « large et court » décrit, dans le tableau :",
            "options": [
              "Le bassin de l'Homme",
              "Le bassin du chimpanzé",
              "Le membre supérieur du chimpanzé",
              "Le membre inférieur du chimpanzé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ligne bassin du document 2 : large et court chez l'Homme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparer caractère par caractère",
          "stepTheme": "Comparer caractère par caractère",
          "stepBadge": "Comparer caractère par caractère",
          "paragraphText": "Méthode : lire le tableau ligne par ligne, un caractère à la fois.\nPour chaque caractère, on note d'abord la forme chez le chimpanzé, puis la forme chez l'Homme, sans mélanger les colonnes.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q6",
            "type": "mcq",
            "prompt": "Pour exploiter le document 2, il faut :",
            "options": [
              "Lire uniquement la colonne de l'Homme",
              "Comparer chaque caractère chez le chimpanzé puis chez l'Homme",
              "Ignorer le bassin",
              "Comparer les molécules d'hémoglobine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la démarche d'analyse suivie dans la leçon pour ce tableau."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q1",
          "type": "mcq",
          "prompt": "La colonne vertébrale de l'Homme présente :",
          "options": [
            "Une courbure",
            "2 courbures",
            "4 courbures",
            "Aucune courbure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tableau du document 2 : une courbure chez le chimpanzé, 4 courbures chez l'Homme."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q2",
          "type": "mcq",
          "prompt": "Le bassin de l'Homme est :",
          "options": [
            "Étroit et allongé",
            "Large et court",
            "Identique à celui du chimpanzé",
            "Absent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la ligne bassin du tableau comparatif de la leçon."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q3",
          "type": "mcq",
          "prompt": "Le document 2 compare :",
          "options": [
            "L'Homme et le cheval",
            "Quelques caractères de l'Homme et du gorille",
            "Deux populations humaines",
            "Le crâne uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document 2 est la comparaison de quelques caractères de l'Homme et du gorille."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q4",
          "type": "mcq",
          "prompt": "Chez le chimpanzé (gorille), la colonne vertébrale présente :",
          "options": [
            "4 courbures",
            "Une courbure",
            "3 courbures",
            "Une voûte plantaire développée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'exercice 2 : une courbure chez le chimpanzé, 4 courbures chez l'Homme."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q5",
          "type": "mcq",
          "prompt": "Le caractère « large et court » décrit, dans le tableau :",
          "options": [
            "Le bassin de l'Homme",
            "Le bassin du chimpanzé",
            "Le membre supérieur du chimpanzé",
            "Le membre inférieur du chimpanzé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ligne bassin du document 2 : large et court chez l'Homme."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p02_q6",
          "type": "mcq",
          "prompt": "Pour exploiter le document 2, il faut :",
          "options": [
            "Lire uniquement la colonne de l'Homme",
            "Comparer chaque caractère chez le chimpanzé puis chez l'Homme",
            "Ignorer le bassin",
            "Comparer les molécules d'hémoglobine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la démarche d'analyse suivie dans la leçon pour ce tableau."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03",
      "order": 3,
      "title": "Les modifications de la stature : membres supérieur et inférieur",
      "summary": "Comparer les membres supérieur et inférieur chez le chimpanzé (gorille) et chez l'Homme.",
      "conceptExplanation": "Pour le membre supérieur, le chimpanzé a un bras court, une paume large et des doigts courts. L'Homme a un bras long, une paume mince à pouce dégagé (le tableau de l'analyse précise : pouce opposé aux autres doigts) et des doigts longs.\nPour le membre inférieur, celui du chimpanzé est large et court, avec un pouce opposé aux autres doigts et une voûte plantaire moins développée. Celui de l'Homme est mince et long, avec tous les orteils parallèles et une voûte plantaire plus développée.\nL'évolution de la lignée humaine s'est donc aussi faite par des modifications de la stature portant sur les membres.",
      "keyRule": "Membres humains : bras long, paume mince, doigts longs en haut ; membre inférieur mince et long, orteils parallèles et voûte plantaire développée en bas.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter les lignes des membres (exercice 2, suite)",
        "statement": "Complète les lignes membre supérieur et membre inférieur du tableau comparatif.",
        "methodSteps": [
          "Membre supérieur : paume large chez le chimpanzé, paume mince chez l'Homme.",
          "Membre inférieur : voûte plantaire moins développée chez le chimpanzé, voûte plantaire plus développée chez l'Homme.",
          "Le corrigé retient ces deux paires pour l'exercice, les autres traits étant déjà donnés dans le tableau."
        ],
        "conclusion": "Paume et voûte plantaire opposent aussi les deux espèces, comme le montre le corrigé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le membre supérieur humain",
          "stepTheme": "Le membre supérieur humain",
          "stepBadge": "Le membre supérieur humain",
          "paragraphText": "Le membre supérieur de l'Homme est constitué d'un bras long, avec une paume mince et des doigts longs.\nLe pouce y est dégagé, ce qui le distingue de la main du chimpanzé.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q1",
            "type": "mcq",
            "prompt": "Le membre supérieur de l'Homme se caractérise par :",
            "options": [
              "Un bras court et une paume large",
              "Un bras long, une paume mince et des doigts longs",
              "Des doigts courts uniquement",
              "Un pouce absent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la ligne membre supérieur du document 2, côté Homme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La voûte plantaire",
          "stepTheme": "La voûte plantaire",
          "stepBadge": "La voûte plantaire",
          "paragraphText": "La voûte plantaire est moins développée chez le chimpanzé.\nChez l'Homme, elle est plus développée, ce qui fait partie des caractères du membre inférieur humain.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q2",
            "type": "mcq",
            "prompt": "La voûte plantaire est plus développée chez :",
            "options": [
              "Le chimpanzé",
              "Le gorille uniquement",
              "L'Homme",
              "Aucune des deux espèces"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l'exercice 2 oppose voûte moins développée (chimpanzé) et plus développée (Homme)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les orteils parallèles de l'Homme",
          "stepTheme": "Les orteils parallèles de l'Homme",
          "stepBadge": "Les orteils parallèles de l'Homme",
          "paragraphText": "Chez l'Homme, tous les orteils du membre inférieur sont parallèles.\nChez le chimpanzé, au contraire, le pouce du membre inférieur est opposé aux autres doigts.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q3",
            "type": "mcq",
            "prompt": "Chez le chimpanzé, le membre inférieur présente :",
            "options": [
              "Tous les orteils parallèles",
              "Un pouce opposé aux autres doigts",
              "Une voûte plantaire très développée",
              "Un membre mince et long"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le trait donné dans le tableau pour le membre inférieur du chimpanzé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La main du chimpanzé",
          "stepTheme": "La main du chimpanzé",
          "stepBadge": "La main du chimpanzé",
          "paragraphText": "Le chimpanzé a un bras court, une paume large et des doigts courts au membre supérieur.\nCes trois traits s'opposent à ceux de la main humaine : bras long, paume mince, doigts longs.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q4",
            "type": "mcq",
            "prompt": "La paume du chimpanzé est :",
            "options": [
              "Mince",
              "Large",
              "Sans doigts",
              "Identique à celle de l'Homme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'exercice 2 : paume large chez le chimpanzé, paume mince chez l'Homme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pouce opposable ne suffit pas à trancher",
          "stepTheme": "Pouce opposable ne suffit pas à trancher",
          "stepBadge": "Pouce opposable ne suffit pas à trancher",
          "paragraphText": "Piège : le tableau mentionne un pouce opposé aux autres doigts à deux endroits différents.\nPour le membre inférieur, c'est un trait du chimpanzé ; l'analyse décrit aussi le pouce humain du membre supérieur comme opposé aux autres doigts, avec une paume mince et des doigts longs : il faut préciser le membre concerné.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q5",
            "type": "mcq",
            "prompt": "Le trait « pouce opposé aux autres doigts » au membre inférieur caractérise :",
            "options": [
              "L'Homme",
              "Le chimpanzé",
              "Les deux espèces de la même façon",
              "Uniquement le porc"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le tableau, au membre inférieur, le pouce opposé est le trait du chimpanzé ; l'Homme y a tous les orteils parallèles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le membre inférieur mince et long",
          "stepTheme": "Le membre inférieur mince et long",
          "stepBadge": "Le membre inférieur mince et long",
          "paragraphText": "Mince et long : c'est la description du membre inférieur de l'Homme dans le tableau.\nElle s'oppose au membre inférieur large et court du chimpanzé.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q6",
            "type": "mcq",
            "prompt": "« Mince et long » décrit, dans le document 2 :",
            "options": [
              "Le membre inférieur de l'Homme",
              "Le membre inférieur du chimpanzé",
              "Le membre supérieur du chimpanzé",
              "Le bassin de l'Homme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ligne membre inférieur du tableau comparatif, côté Homme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q1",
          "type": "mcq",
          "prompt": "Le membre supérieur de l'Homme se caractérise par :",
          "options": [
            "Un bras court et une paume large",
            "Un bras long, une paume mince et des doigts longs",
            "Des doigts courts uniquement",
            "Un pouce absent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la ligne membre supérieur du document 2, côté Homme."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q2",
          "type": "mcq",
          "prompt": "La voûte plantaire est plus développée chez :",
          "options": [
            "Le chimpanzé",
            "Le gorille uniquement",
            "L'Homme",
            "Aucune des deux espèces"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l'exercice 2 oppose voûte moins développée (chimpanzé) et plus développée (Homme)."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q3",
          "type": "mcq",
          "prompt": "Chez le chimpanzé, le membre inférieur présente :",
          "options": [
            "Tous les orteils parallèles",
            "Un pouce opposé aux autres doigts",
            "Une voûte plantaire très développée",
            "Un membre mince et long"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le trait donné dans le tableau pour le membre inférieur du chimpanzé."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q4",
          "type": "mcq",
          "prompt": "La paume du chimpanzé est :",
          "options": [
            "Mince",
            "Large",
            "Sans doigts",
            "Identique à celle de l'Homme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'exercice 2 : paume large chez le chimpanzé, paume mince chez l'Homme."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q5",
          "type": "mcq",
          "prompt": "Le trait « pouce opposé aux autres doigts » au membre inférieur caractérise :",
          "options": [
            "L'Homme",
            "Le chimpanzé",
            "Les deux espèces de la même façon",
            "Uniquement le porc"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le tableau, au membre inférieur, le pouce opposé est le trait du chimpanzé ; l'Homme y a tous les orteils parallèles."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p03_q6",
          "type": "mcq",
          "prompt": "« Mince et long » décrit, dans le document 2 :",
          "options": [
            "Le membre inférieur de l'Homme",
            "Le membre inférieur du chimpanzé",
            "Le membre supérieur du chimpanzé",
            "Le bassin de l'Homme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ligne membre inférieur du tableau comparatif, côté Homme."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04",
      "order": 4,
      "title": "Les modifications moléculaires : la chaîne bêta de l'hémoglobine",
      "summary": "Comparer les 19 premiers acides aminés de la chaîne bêta de l'hémoglobine chez l'Homme, le gorille, le porc et le cheval.",
      "conceptExplanation": "Le document 3 compare les 19 premiers acides aminés de la chaîne bêta de l'hémoglobine (protéine) de l'Homme, du gorille, du porc et du cheval.\nRésultat : pas de différence d'acides aminés entre la protéine de l'Homme et celle du gorille ; 2 acides aminés différents chez le porc ; 4 acides aminés différents chez le cheval. Le porc et le cheval diffèrent entre eux par trois acides aminés, en positions 5, 9 et 12.\nChez le porc, les différences surviennent en position 4, où la thréonine (THR) est remplacée par la sérine (SER), et en position 5, où la proline (PRO) est remplacée par l'alanine (ALA). Chez le cheval, en position 4 la SER remplace la THR, en position 5 la glycine (GLY) remplace la PRO, en position 9 l'ALA remplace la SER et en position 12 la leucine (LEU) remplace la THR.\nInterprétation : sur les 19 acides aminés, 4 seulement présentent une variation ; il y a donc une grande parenté entre ces espèces, toutes mammifères. L'Homme et le gorille ont des molécules identiques : le gorille est plus proche de l'Homme que les deux autres animaux, ce sont des primates. Le nombre d'acides aminés différents augmente au fur et à mesure que les espèces diffèrent : la séparation d'avec le cheval s'est faite beaucoup plus tôt, suivie de la séparation avec le porc, et la séparation avec le gorille s'est faite beaucoup plus tard.",
      "keyRule": "Zéro différence Homme-gorille, 2 avec le porc, 4 avec le cheval : plus le nombre d'acides aminés différents est grand, plus la séparation des espèces est ancienne.",
      "formulas": [],
      "workedExample": {
        "title": "Relever conformités et différences (exercice 3)",
        "statement": "Relève les conformités et les différences entre la chaîne d'acides aminés des 4 espèces, puis explique-les.",
        "methodSteps": [
          "Aucune différence d'acides aminés entre la protéine de l'Homme et celle du gorille.",
          "2 acides aminés différents entre le porc et l'Homme, 4 entre le cheval et l'Homme, 3 entre le porc et le cheval.",
          "Sur 19 acides aminés, 4 seulement varient : grande parenté entre ces mammifères.",
          "Le gorille, aux molécules identiques, est le plus proche de l'Homme ; la séparation d'avec le cheval est la plus ancienne."
        ],
        "conclusion": "Corrigé de l'exercice 3 : le nombre de différences mesure l'éloignement des espèces."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La protéine comparée",
          "stepTheme": "La protéine comparée",
          "stepBadge": "La protéine comparée",
          "paragraphText": "La comparaison porte sur les 19 premiers acides aminés de la chaîne bêta de l'hémoglobine.\nL'hémoglobine est la protéine choisie pour comparer l'Homme, le gorille, le porc et le cheval.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q1",
            "type": "mcq",
            "prompt": "Le document 3 compare :",
            "options": [
              "Les 19 premiers acides aminés de la chaîne bêta de l'hémoglobine",
              "Les chromosomes sexuels",
              "Les courbures de la colonne",
              "Les volumes du cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'objet exact du document 3."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Zéro différence Homme-gorille",
          "stepTheme": "Zéro différence Homme-gorille",
          "stepBadge": "Zéro différence Homme-gorille",
          "paragraphText": "Il n'y a pas de différence d'acides aminés entre la protéine de l'Homme et celle du gorille.\nLeurs molécules sont identiques sur la portion comparée.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q2",
            "type": "mcq",
            "prompt": "Entre l'Homme et le gorille, le nombre d'acides aminés différents est de :",
            "options": [
              "2",
              "3",
              "4",
              "0"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Résultat du document 3 : pas de différence entre l'Homme et le gorille."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deux différences avec le porc, quatre avec le cheval",
          "stepTheme": "Deux différences avec le porc, quatre avec le cheval",
          "stepBadge": "Deux différences avec le porc, quatre avec le cheval",
          "paragraphText": "Chez le porc, 2 acides aminés diffèrent de ceux de l'Homme, en positions 4 et 5.\nChez le cheval, 4 acides aminés diffèrent, en positions 4, 5, 9 et 12.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q3",
            "type": "mcq",
            "prompt": "Combien d'acides aminés diffèrent entre le cheval et l'Homme ?",
            "options": [
              "0",
              "2",
              "4",
              "19"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cheval présente 4 acides aminés différents, contre 2 pour le porc."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Dater les séparations par les différences",
          "stepTheme": "Dater les séparations par les différences",
          "stepBadge": "Dater les séparations par les différences",
          "paragraphText": "Méthode : plus le nombre d'acides aminés différents est grand, plus la séparation des espèces est ancienne.\nLa séparation d'avec le cheval (4 différences) s'est faite beaucoup plus tôt, puis celle avec le porc (2 différences), puis celle avec le gorille (0 différence), beaucoup plus tard.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q4",
            "type": "mcq",
            "prompt": "La séparation la plus ancienne concerne :",
            "options": [
              "Le gorille",
              "Le porc",
              "Le cheval",
              "L'Homme lui-même"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec 4 différences, le cheval s'est séparé le plus tôt, selon l'interprétation de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une grande parenté malgré les différences",
          "stepTheme": "Une grande parenté malgré les différences",
          "stepBadge": "Une grande parenté malgré les différences",
          "paragraphText": "Piège : conclure à une absence de parenté parce qu'il existe des différences.\nSur 19 acides aminés, 4 seulement varient : la leçon y voit au contraire une grande parenté entre ces espèces, toutes des mammifères.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q5",
            "type": "mcq",
            "prompt": "Sur les 19 acides aminés comparés, combien présentent une variation au maximum ?",
            "options": [
              "19",
              "4",
              "12",
              "9"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation précise : sur les 19 acides aminés, 4 présentent une variation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La substitution en position 4 chez le porc",
          "stepTheme": "La substitution en position 4 chez le porc",
          "stepBadge": "La substitution en position 4 chez le porc",
          "paragraphText": "Chez le porc, en position 4, la thréonine (THR) est remplacée par la sérine (SER).\nEn position 5, la proline (PRO) est remplacée par l'alanine (ALA) : ce sont ses deux seules différences avec l'Homme.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q6",
            "type": "mcq",
            "prompt": "En position 4, chez le porc, la THR est remplacée par :",
            "options": [
              "La GLY",
              "La LEU",
              "La SER",
              "La PRO"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la substitution décrite dans l'analyse du document 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q1",
          "type": "mcq",
          "prompt": "Le document 3 compare :",
          "options": [
            "Les 19 premiers acides aminés de la chaîne bêta de l'hémoglobine",
            "Les chromosomes sexuels",
            "Les courbures de la colonne",
            "Les volumes du cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'objet exact du document 3."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q2",
          "type": "mcq",
          "prompt": "Entre l'Homme et le gorille, le nombre d'acides aminés différents est de :",
          "options": [
            "2",
            "3",
            "4",
            "0"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Résultat du document 3 : pas de différence entre l'Homme et le gorille."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q3",
          "type": "mcq",
          "prompt": "Combien d'acides aminés diffèrent entre le cheval et l'Homme ?",
          "options": [
            "0",
            "2",
            "4",
            "19"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cheval présente 4 acides aminés différents, contre 2 pour le porc."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q4",
          "type": "mcq",
          "prompt": "La séparation la plus ancienne concerne :",
          "options": [
            "Le gorille",
            "Le porc",
            "Le cheval",
            "L'Homme lui-même"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec 4 différences, le cheval s'est séparé le plus tôt, selon l'interprétation de la leçon."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q5",
          "type": "mcq",
          "prompt": "Sur les 19 acides aminés comparés, combien présentent une variation au maximum ?",
          "options": [
            "19",
            "4",
            "12",
            "9"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation précise : sur les 19 acides aminés, 4 présentent une variation."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p04_q6",
          "type": "mcq",
          "prompt": "En position 4, chez le porc, la THR est remplacée par :",
          "options": [
            "La GLY",
            "La LEU",
            "La SER",
            "La PRO"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la substitution décrite dans l'analyse du document 3."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05",
      "order": 5,
      "title": "Les théories de Lamarck et de Darwin",
      "summary": "Présenter le lamarckisme (la fonction crée l'organe) et le darwinisme (la sélection naturelle).",
      "conceptExplanation": "Lamarck (1744-1829) : il existe une tendance spontanée des êtres vivants à devenir de plus en plus complexes. Cette tendance est infléchie par les circonstances et les modifications acquises sont conservées par la descendance : la fonction crée l'organe. Pour Lamarck, c'est une évolution spontanée, car c'est le besoin qui amène l'être à évoluer, et l'évolution acquise se maintient dans la descendance.\nDarwin (1809-1882) : les êtres vivants se reproduisent avec une abondance excessive ; mais malgré cette prolificité, on n'observe pas de surpopulation. La destruction des individus en surnombre ne se fait pas au hasard : les individus présentant les variations avantageuses sont favorisés dans leur lutte pour la survie, seuls les plus aptes parviennent à procréer : il y a sélection naturelle.\nPour Darwin, ce sont les plus faibles qui meurent et les plus forts qui vivent, du fait de cette sélection.",
      "keyRule": "Lamarck : le besoin crée l'organe et l'acquis se transmet ; Darwin : parmi des individus trop nombreux, la sélection naturelle ne garde que les plus aptes.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer les deux théories (texte 1 de la leçon)",
        "statement": "À partir du texte 1, attribue à chaque auteur son idée centrale : la fonction crée l'organe ; il y a sélection naturelle.",
        "methodSteps": [
          "Lamarck soutient une tendance spontanée à la complexité, infléchie par les circonstances, avec conservation des modifications acquises : la fonction crée l'organe.",
          "Darwin part de la reproduction excessive sans surpopulation observée.",
          "Il en déduit une destruction non hasardeuse des individus en surnombre : les variations avantageuses sont favorisées, seuls les plus aptes procréent.",
          "On attribue donc la fonction créatrice de l'organe à Lamarck et la sélection naturelle à Darwin."
        ],
        "conclusion": "Deux explications différentes de l'évolution : besoin et acquis transmis chez Lamarck, sélection des plus aptes chez Darwin."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La théorie de Lamarck",
          "stepTheme": "La théorie de Lamarck",
          "stepBadge": "La théorie de Lamarck",
          "paragraphText": "• Lamarck (1744-1829) : les êtres vivants ont une tendance spontanée à devenir de plus en plus complexes, infléchie par les circonstances.\nLes modifications acquises sont conservées par la descendance : la fonction crée l'organe.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q1",
            "type": "mcq",
            "prompt": "La formule « la fonction crée l'organe » appartient à :",
            "options": [
              "Darwin",
              "Lamarck",
              "De Vries",
              "Morgan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résumé donné pour Lamarck dans les résultats du texte 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La sélection naturelle de Darwin",
          "stepTheme": "La sélection naturelle de Darwin",
          "stepBadge": "La sélection naturelle de Darwin",
          "paragraphText": "• Sélection naturelle (Darwin, 1809-1882) : les individus présentant les variations avantageuses sont favorisés dans leur lutte pour la survie.\nSeuls les plus aptes parviennent à procréer.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q2",
            "type": "mcq",
            "prompt": "Selon Darwin, seuls parviennent à procréer :",
            "options": [
              "Les individus les plus nombreux",
              "Les individus en surnombre au hasard",
              "Les plus aptes, porteurs de variations avantageuses",
              "Les individus les plus faibles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le cœur de la sélection naturelle décrite dans le texte 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pas de surpopulation malgré la prolificité",
          "stepTheme": "Pas de surpopulation malgré la prolificité",
          "stepBadge": "Pas de surpopulation malgré la prolificité",
          "paragraphText": "Les êtres vivants se reproduisent avec une abondance excessive, rappelle Darwin.\nMais malgré cette prolificité, on n'observe pas de surpopulation : les individus en surnombre sont détruits, et pas au hasard.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q3",
            "type": "mcq",
            "prompt": "Darwin part du constat suivant :",
            "options": [
              "Les espèces ne se reproduisent presque pas",
              "Malgré une reproduction excessive, il n'y a pas de surpopulation",
              "Tous les individus survivent",
              "Les mutations sont toujours brutales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le point de départ du raisonnement darwinien dans le texte 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'acquis conservé chez Lamarck",
          "stepTheme": "L'acquis conservé chez Lamarck",
          "stepBadge": "L'acquis conservé chez Lamarck",
          "paragraphText": "Chez Lamarck, les modifications acquises sous l'effet des circonstances sont conservées par la descendance.\nL'interprétation ajoute : c'est le besoin qui amène l'être à évoluer, une évolution spontanée.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q4",
            "type": "mcq",
            "prompt": "Chez Lamarck, les modifications acquises sont :",
            "options": [
              "Perdues à chaque génération",
              "Conservées par la descendance",
              "Éliminées par sélection",
              "Dues à des mutations brutales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le mécanisme de transmission propre à la théorie de Lamarck."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas attribuer la sélection à Lamarck",
          "stepTheme": "Ne pas attribuer la sélection à Lamarck",
          "stepBadge": "Ne pas attribuer la sélection à Lamarck",
          "paragraphText": "Piège : échanger les deux auteurs dans les résultats du texte 1.\nLa leçon attribue « la fonction crée l'organe » à Lamarck et « il y a sélection naturelle » à Darwin.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q5",
            "type": "mcq",
            "prompt": "« Il y a sélection naturelle » est l'idée centrale de :",
            "options": [
              "Lamarck",
              "Darwin",
              "De Vries et Morgan",
              "Les généticiens modernes uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats du texte 1 : sélection naturelle pour Darwin."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les plus faibles meurent, les plus forts vivent",
          "stepTheme": "Les plus faibles meurent, les plus forts vivent",
          "stepBadge": "Les plus faibles meurent, les plus forts vivent",
          "paragraphText": "L'interprétation de la leçon résume Darwin en une phrase imagée.\nCe sont les plus faibles qui meurent et les plus forts qui vivent, du fait de la sélection naturelle.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q6",
            "type": "mcq",
            "prompt": "Selon l'interprétation de la leçon pour Darwin :",
            "options": [
              "Les plus faibles vivent toujours",
              "Les plus faibles meurent et les plus forts vivent",
              "Le besoin crée les organes",
              "Les gènes mutent brutalement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formulation de l'interprétation pour la théorie de Darwin."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q1",
          "type": "mcq",
          "prompt": "La formule « la fonction crée l'organe » appartient à :",
          "options": [
            "Darwin",
            "Lamarck",
            "De Vries",
            "Morgan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résumé donné pour Lamarck dans les résultats du texte 1."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q2",
          "type": "mcq",
          "prompt": "Selon Darwin, seuls parviennent à procréer :",
          "options": [
            "Les individus les plus nombreux",
            "Les individus en surnombre au hasard",
            "Les plus aptes, porteurs de variations avantageuses",
            "Les individus les plus faibles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le cœur de la sélection naturelle décrite dans le texte 1."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q3",
          "type": "mcq",
          "prompt": "Darwin part du constat suivant :",
          "options": [
            "Les espèces ne se reproduisent presque pas",
            "Malgré une reproduction excessive, il n'y a pas de surpopulation",
            "Tous les individus survivent",
            "Les mutations sont toujours brutales"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le point de départ du raisonnement darwinien dans le texte 1."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q4",
          "type": "mcq",
          "prompt": "Chez Lamarck, les modifications acquises sont :",
          "options": [
            "Perdues à chaque génération",
            "Conservées par la descendance",
            "Éliminées par sélection",
            "Dues à des mutations brutales"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le mécanisme de transmission propre à la théorie de Lamarck."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q5",
          "type": "mcq",
          "prompt": "« Il y a sélection naturelle » est l'idée centrale de :",
          "options": [
            "Lamarck",
            "Darwin",
            "De Vries et Morgan",
            "Les généticiens modernes uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats du texte 1 : sélection naturelle pour Darwin."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p05_q6",
          "type": "mcq",
          "prompt": "Selon l'interprétation de la leçon pour Darwin :",
          "options": [
            "Les plus faibles vivent toujours",
            "Les plus faibles meurent et les plus forts vivent",
            "Le besoin crée les organes",
            "Les gènes mutent brutalement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formulation de l'interprétation pour la théorie de Darwin."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06",
      "order": 6,
      "title": "Du mutationnisme à la théorie synthétique de l'évolution",
      "summary": "Présenter De Vries, Morgan et les généticiens modernes, puis la synthèse des théories.",
      "conceptExplanation": "De Vries (1848-1935) et Morgan (1886-1945) : le passage d'une espèce à l'autre se fait par une mutation brutale, et non pas graduellement sous l'action de la sélection naturelle : c'est le mutationnisme.\nLes généticiens modernes : l'évolution peut se comprendre comme un changement de fréquence au sein des populations.\nLe texte 2 précise qu'une transformation évolutive de grande amplitude ne peut être immédiate et totale, sous peine d'altérer gravement l'adaptation et la viabilité de l'organisme. Elle ne peut se réaliser que de façon progressive et lente, par sommation de petits changements tous dans le même sens : la mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologue, engendre toute la transformation évolutive, quelle que soit son amplitude.\nLes transformations viables sont donc dues aux mutations des gènes dans le temps ; ces mutations engendrent des individus fragiles et solides, et les fragiles sont éliminés par la sélection naturelle, également dans le temps.\nConclusion : l'évolution des espèces s'explique par la synthèse des données, c'est-à-dire la synthèse de toutes les théories antérieures ; on parle de théorie synthétique. Elle regroupe les données de la systématique, de la paléontologie et de la génétique. L'évolution s'explique donc par des théories qui ont des limites, dépassées par cette synthèse.",
      "keyRule": "La théorie synthétique additionne les apports : mutations des gènes, orientation par la sélection naturelle et temps du paléontologue, en regroupant systématique, paléontologie et génétique.",
      "formulas": [],
      "workedExample": {
        "title": "Justifier l'origine animale de l'Homme (exercice 3, question 3)",
        "statement": "Justifie, à partir de l'étude moléculaire, la théorie selon laquelle l'Homme proviendrait d'une lignée de singe.",
        "methodSteps": [
          "Le nombre d'acides aminés différents augmente au fur et à mesure que les espèces s'éloignent : le lien de parenté s'exprime par ce nombre.",
          "L'Homme et le gorille, aux molécules identiques, sont donc très proches, comme des primates d'une même lignée.",
          "Cela s'accorde avec les théories de De Vries, Morgan et des généticiens modernes : l'évolution est liée aux gènes, qui subissent mutation ou changement de fréquence.",
          "Les transformations viables dues aux mutations dans le temps, triées par la sélection naturelle, expliquent cette descendance commune."
        ],
        "conclusion": "Corrigé de l'exercice 3 : la proximité moléculaire Homme-gorille s'explique par les mutations des gènes et la sélection naturelle dans le temps."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le mutationnisme",
          "stepTheme": "Le mutationnisme",
          "stepBadge": "Le mutationnisme",
          "paragraphText": "• Mutationnisme (De Vries, Morgan) : le passage d'une espèce à l'autre se fait par une mutation brutale.\nIl ne se fait donc pas graduellement sous l'action de la sélection naturelle, contrairement au schéma darwinien seul.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q1",
            "type": "mcq",
            "prompt": "Pour De Vries et Morgan, le passage d'une espèce à l'autre se fait par :",
            "options": [
              "La fonction qui crée l'organe",
              "Une mutation brutale",
              "La seule sélection naturelle graduelle",
              "Un changement de stature uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la thèse mutationniste du texte 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les généticiens modernes et les fréquences",
          "stepTheme": "Les généticiens modernes et les fréquences",
          "stepBadge": "Les généticiens modernes et les fréquences",
          "paragraphText": "Pour les généticiens modernes, l'évolution peut se comprendre comme un changement de fréquence au sein des populations.\nCe sont les fréquences des gènes dans les populations qui évoluent.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q2",
            "type": "mcq",
            "prompt": "Les généticiens modernes comprennent l'évolution comme :",
            "options": [
              "Un changement de fréquence au sein des populations",
              "Une tendance spontanée à la complexité",
              "Une destruction au hasard des individus",
              "Une augmentation du volume du cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est leur apport propre, listé dans le texte 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Mutation, sélection et temps",
          "stepTheme": "Mutation, sélection et temps",
          "stepBadge": "Mutation, sélection et temps",
          "paragraphText": "Le texte 2 combine trois facteurs pour engendrer toute transformation évolutive.\nLa mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologue.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q3",
            "type": "mcq",
            "prompt": "La formule du texte 2 combine :",
            "options": [
              "Fonction, organe et besoin",
              "Mutation, sélection naturelle et temps paléontologique",
              "Stature, crâne et bassin",
              "Systématique, hasard et climat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats du texte 2 : mutation, sélection naturelle, temps paléontologique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Des transformations progressives et lentes",
          "stepTheme": "Des transformations progressives et lentes",
          "stepBadge": "Des transformations progressives et lentes",
          "paragraphText": "Méthode du texte 2 : une grande transformation ne peut être immédiate et totale, sous peine de détruire l'adaptation et la viabilité.\nElle se réalise progressivement et lentement, par sommation de petits changements tous dans le même sens.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q4",
            "type": "mcq",
            "prompt": "Une transformation évolutive de grande amplitude se réalise :",
            "options": [
              "Immédiatement et totalement",
              "Progressivement et lentement, par sommation de petits changements dans le même sens",
              "Sans aucun changement génétique",
              "Uniquement par la stature"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'argument d'ouverture du texte 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La théorie synthétique ne choisit pas une seule théorie",
          "stepTheme": "La théorie synthétique ne choisit pas une seule théorie",
          "stepBadge": "La théorie synthétique ne choisit pas une seule théorie",
          "paragraphText": "Piège : présenter la conclusion comme la victoire d'une seule théorie antérieure.\nLa leçon conclut à une synthèse de toutes les théories antérieures, regroupant systématique, paléontologie et génétique.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q5",
            "type": "mcq",
            "prompt": "La théorie synthétique regroupe les données de :",
            "options": [
              "La systématique, la paléontologie et la génétique",
              "La seule paléontologie",
              "La chimie et la physique uniquement",
              "L'anatomie du bassin uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conclusion de la partie théories : synthèse de ces trois domaines de données."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des individus fragiles éliminés",
          "stepTheme": "Des individus fragiles éliminés",
          "stepBadge": "Des individus fragiles éliminés",
          "paragraphText": "Les mutations engendrent des individus fragiles et solides, explique l'interprétation.\nCeux qui sont fragiles seront à leur tour éliminés par la sélection naturelle, également dans le temps.",
          "exercise": {
            "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q6",
            "type": "mcq",
            "prompt": "Après une mutation, les individus fragiles sont :",
            "options": [
              "Toujours conservés",
              "Éliminés par la sélection naturelle dans le temps",
              "Transformés en gorilles",
              "Protégés par la couche d'ozone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le sort des individus fragiles décrit dans l'interprétation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q1",
          "type": "mcq",
          "prompt": "Pour De Vries et Morgan, le passage d'une espèce à l'autre se fait par :",
          "options": [
            "La fonction qui crée l'organe",
            "Une mutation brutale",
            "La seule sélection naturelle graduelle",
            "Un changement de stature uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la thèse mutationniste du texte 1."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q2",
          "type": "mcq",
          "prompt": "Les généticiens modernes comprennent l'évolution comme :",
          "options": [
            "Un changement de fréquence au sein des populations",
            "Une tendance spontanée à la complexité",
            "Une destruction au hasard des individus",
            "Une augmentation du volume du cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est leur apport propre, listé dans le texte 1."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q3",
          "type": "mcq",
          "prompt": "La formule du texte 2 combine :",
          "options": [
            "Fonction, organe et besoin",
            "Mutation, sélection naturelle et temps paléontologique",
            "Stature, crâne et bassin",
            "Systématique, hasard et climat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats du texte 2 : mutation, sélection naturelle, temps paléontologique."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q4",
          "type": "mcq",
          "prompt": "Une transformation évolutive de grande amplitude se réalise :",
          "options": [
            "Immédiatement et totalement",
            "Progressivement et lentement, par sommation de petits changements dans le même sens",
            "Sans aucun changement génétique",
            "Uniquement par la stature"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'argument d'ouverture du texte 2."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q5",
          "type": "mcq",
          "prompt": "La théorie synthétique regroupe les données de :",
          "options": [
            "La systématique, la paléontologie et la génétique",
            "La seule paléontologie",
            "La chimie et la physique uniquement",
            "L'anatomie du bassin uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conclusion de la partie théories : synthèse de ces trois domaines de données."
        },
        {
          "id": "terminale_a1_svt_l04_evolution_lignee_humaine_p06_q6",
          "type": "mcq",
          "prompt": "Après une mutation, les individus fragiles sont :",
          "options": [
            "Toujours conservés",
            "Éliminés par la sélection naturelle dans le temps",
            "Transformés en gorilles",
            "Protégés par la couche d'ozone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le sort des individus fragiles décrit dans l'interprétation."
        }
      ]
    }
  ]
};
