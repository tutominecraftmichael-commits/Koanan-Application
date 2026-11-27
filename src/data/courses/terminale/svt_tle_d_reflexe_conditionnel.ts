import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Le reflexe conditionnel » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2891
export const SVT_TLE_D_L01_REFLEXE_CONDITIONNEL: CurriculumChapter = {
  "id": "terminale_d_svt_l01_reflexe_conditionnel",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : Le reflexe conditionnel",
  "summary": "À partir des expériences de Pavlov sur la salivation du chien, on montre que les réflexes conditionnels se mettent en place par apprentissage, selon un mécanisme qui crée une nouvelle liaison nerveuse entre deux aires cérébrales.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2891",
  "points": [
    {
      "id": "terminale_d_svt_l01_reflexe_conditionnel_p01",
      "order": 1,
      "title": "L’expérience de Pavlov : les quatre phases du conditionnement",
      "summary": "Suivre les quatre phases de l’expérience de Pavlov, du stimulus neutre au réflexe acquis.",
      "conceptExplanation": "Les expériences de Pavlov consistent à présenter à un chien enfermé dans une cage deux stimuli, le son et la viande, isolés ou combinés.\nÀ la 1ère phase, on fait écouter un son de métronome au chien et il ne salive pas.\nÀ la 2ème phase, on donne un morceau de viande au chien et il salive.\nÀ la 3ème phase, on fait écouter le son puis on donne la viande, et le chien salive : cette opération est répétée plusieurs fois.\nÀ la 4ème phase, on fait écouter seulement le son et le chien salive.",
      "keyRule": "Son seul au départ : pas de salivation ; son répété avec la viande, puis son seul : salivation — la répétition de l’association crée le réflexe.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte de l’activité d’application sur la mise en place d’un réflexe acquis",
        "statement": "Un chien salive à la vue de la viande, mais ne salive pas au son du métronome. Après association répétée des deux stimuli, le son seul déclenche la salivation. Complète le texte de l’activité avec les mots : absolu, inné, sans saliver, neutre, associe, seul, réflexe acquis, stimulus conditionnel.",
        "methodSteps": [
          "La viande déclenche naturellement la salivation : c’est un stimulus absolu et le réflexe correspondant est inné.",
          "Le son, au départ, laisse le chien sans saliver : c’est un stimulus neutre.",
          "On associe les deux stimuli, le son précédant le don de viande, plusieurs fois.",
          "À la longue, le son seul déclenche la salivation : le réflexe obtenu est un réflexe acquis et le son est devenu un stimulus conditionnel."
        ],
        "conclusion": "Le corrigé de l’activité donne : 1 absolu, 2 inné, 3 sans saliver, 4 neutre, 5 associe, 6 seul, 7 réflexe acquis, 8 stimulus conditionnel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La première phase : le son seul",
          "stepTheme": "La première phase : le son seul",
          "stepBadge": "La première phase : le son seul",
          "paragraphText": "À la 1ère phase de l’expérience de Pavlov, on fait écouter un son de métronome au chien.\nRésultat : le chien ne salive pas.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q1",
            "type": "mcq",
            "prompt": "À la 1ère phase de l’expérience de Pavlov (son de métronome seul), le chien :",
            "options": [
              "Salive abondamment",
              "Ne salive pas",
              "Salive un peu puis s’arrête",
              "Aboie sans saliver"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résultat indiqué dans la leçon est clair : à la 1ère phase, le chien ne salive pas au son du métronome."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La deuxième phase : la viande seule",
          "stepTheme": "La deuxième phase : la viande seule",
          "stepBadge": "La deuxième phase : la viande seule",
          "paragraphText": "À la 2ème phase, on donne un morceau de viande au chien.\nRésultat : le chien salive, car la viande agit sur ses glandes salivaires.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q2",
            "type": "mcq",
            "prompt": "À la 2ème phase (viande seule), le chien :",
            "options": [
              "Ne salive pas",
              "Dresse seulement les oreilles",
              "Salive",
              "Refuse la viande"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La viande placée dans la gueule du chien déclenche la salivation : c’est le réflexe inné de salivation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La troisième phase : l’association répétée",
          "stepTheme": "La troisième phase : l’association répétée",
          "stepBadge": "La troisième phase : l’association répétée",
          "paragraphText": "À la 3ème phase, on fait écouter le son de métronome au chien puis on lui donne un morceau de viande, et il salive.\nCette opération est répétée plusieurs fois : c’est la phase d’apprentissage.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q3",
            "type": "mcq",
            "prompt": "La 3ème phase de l’expérience consiste à :",
            "options": [
              "Présenter le son seul, une seule fois",
              "Associer le son puis la viande, plusieurs fois",
              "Donner la viande sans aucun son",
              "Supprimer toute stimulation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’association son plus viande, répétée plusieurs fois, est la phase d’apprentissage du conditionnement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La quatrième phase : le son seul déclenche la salivation",
          "stepTheme": "La quatrième phase : le son seul déclenche la salivation",
          "stepBadge": "La quatrième phase : le son seul déclenche la salivation",
          "paragraphText": "À la 4ème phase, on fait écouter seulement le son du métronome au chien et il salive.\nLe son, qui était inefficace au départ, est devenu capable de déclencher seul la réponse.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q4",
            "type": "mcq",
            "prompt": "À la 4ème phase (son seul, après apprentissage), le chien :",
            "options": [
              "Ne salive toujours pas",
              "Salive seulement si la viande est visible",
              "Attend la viande sans saliver",
              "Salive au son seul"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après l’apprentissage, le son seul provoque la salivation : le conditionnement est installé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les phases",
          "stepTheme": "Ne pas confondre les phases",
          "stepBadge": "Ne pas confondre les phases",
          "paragraphText": "Piège : à la 1ère et à la 4ème phase, le stimulus présenté est le même, le son seul, mais la réponse est opposée.\nLa différence vient de la phase d’association répétée qui s’est déroulée entre les deux.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q5",
            "type": "mcq",
            "prompt": "Entre la 1ère phase (son seul sans salivation) et la 4ème phase (son seul avec salivation), il y a eu :",
            "options": [
              "Une seule présentation de la viande",
              "L’association répétée du son et de la viande",
              "Un changement de son",
              "Une opération du chien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la répétition de l’association des deux stimuli qui transforme la réponse au son seul."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les comportements cités dans la situation d’apprentissage",
          "stepTheme": "Les comportements cités dans la situation d’apprentissage",
          "stepBadge": "Les comportements cités dans la situation d’apprentissage",
          "paragraphText": "Le film de la situation d’apprentissage cite des activités réussies comme la conduite, la nage, l’écriture et la lecture.\nCes comportements, qui apparaissent avec le temps, sont qualifiés de réflexes conditionnels dans le film.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q6",
            "type": "mcq",
            "prompt": "D’après la situation d’apprentissage, quel comportement est donné comme exemple de réflexe conditionnel ?",
            "options": [
              "La salivation devant la viande",
              "Le retrait de la main devant une flamme",
              "La conduite automobile apprise avec le temps",
              "La contraction de la pupille à la lumière"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La situation cite la conduite, la nage, l’écriture et la lecture comme des comportements apparus avec le temps, qualifiés de réflexes conditionnels."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q1",
          "type": "mcq",
          "prompt": "À la 1ère phase de l’expérience de Pavlov (son de métronome seul), le chien :",
          "options": [
            "Salive abondamment",
            "Ne salive pas",
            "Salive un peu puis s’arrête",
            "Aboie sans saliver"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résultat indiqué dans la leçon est clair : à la 1ère phase, le chien ne salive pas au son du métronome."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q2",
          "type": "mcq",
          "prompt": "À la 2ème phase (viande seule), le chien :",
          "options": [
            "Ne salive pas",
            "Dresse seulement les oreilles",
            "Salive",
            "Refuse la viande"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La viande placée dans la gueule du chien déclenche la salivation : c’est le réflexe inné de salivation."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q3",
          "type": "mcq",
          "prompt": "La 3ème phase de l’expérience consiste à :",
          "options": [
            "Présenter le son seul, une seule fois",
            "Associer le son puis la viande, plusieurs fois",
            "Donner la viande sans aucun son",
            "Supprimer toute stimulation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’association son plus viande, répétée plusieurs fois, est la phase d’apprentissage du conditionnement."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q4",
          "type": "mcq",
          "prompt": "À la 4ème phase (son seul, après apprentissage), le chien :",
          "options": [
            "Ne salive toujours pas",
            "Salive seulement si la viande est visible",
            "Attend la viande sans saliver",
            "Salive au son seul"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après l’apprentissage, le son seul provoque la salivation : le conditionnement est installé."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q5",
          "type": "mcq",
          "prompt": "Entre la 1ère phase (son seul sans salivation) et la 4ème phase (son seul avec salivation), il y a eu :",
          "options": [
            "Une seule présentation de la viande",
            "L’association répétée du son et de la viande",
            "Un changement de son",
            "Une opération du chien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la répétition de l’association des deux stimuli qui transforme la réponse au son seul."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p01_q6",
          "type": "mcq",
          "prompt": "D’après la situation d’apprentissage, quel comportement est donné comme exemple de réflexe conditionnel ?",
          "options": [
            "La salivation devant la viande",
            "Le retrait de la main devant une flamme",
            "La conduite automobile apprise avec le temps",
            "La contraction de la pupille à la lumière"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La situation cite la conduite, la nage, l’écriture et la lecture comme des comportements apparus avec le temps, qualifiés de réflexes conditionnels."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l01_reflexe_conditionnel_p02",
      "order": 2,
      "title": "Stimulus neutre, stimulus absolu et stimulus conditionnel",
      "summary": "Distinguer les trois types de stimulus et le réflexe inné du réflexe conditionnel.",
      "conceptExplanation": "À la 1ère phase, le son est inefficace : il n’a aucune action sur les glandes salivaires, c’est un stimulus neutre.\nÀ la 2ème phase, la viande agit sur les glandes salivaires : c’est un réflexe inné ou réflexe inconditionnel, et la viande est un stimulus inconditionnel ou stimulus absolu.\nÀ la 4ème phase, le son devient un stimulus conditionnel et la salivation obtenue est un réflexe conditionnel ou réflexe acquis.\nUn réflexe conditionnel est une réaction déclenchée par un stimulus qui n’a pas habituellement d’action sur la fonction considérée ; il se met en place à la suite d’un apprentissage.",
      "keyRule": "Neutre au départ, absolu par nature, conditionnel après apprentissage : le statut d’un stimulus se lit dans la réponse qu’il déclenche.",
      "formulas": [],
      "workedExample": {
        "title": "Définir stimulus conditionnel et réflexe conditionnel (exercice 2, question 1)",
        "statement": "Définis les notions de stimulus conditionnel et de réflexe conditionnel, comme le demande l’exercice 2 de la leçon.",
        "methodSteps": [
          "Un stimulus conditionnel est un stimulus qui, neutre au départ, provoque une réaction réflexe après apprentissage.",
          "Un réflexe conditionnel ou réflexe acquis est une réaction déclenchée par un stimulus qui n’a habituellement pas d’action sur la fonction considérée, par exemple la salivation.",
          "Les deux notions supposent donc un apprentissage préalable."
        ],
        "conclusion": "Ce sont les définitions données par le corrigé de l’exercice 2 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le stimulus neutre",
          "stepTheme": "Le stimulus neutre",
          "stepBadge": "Le stimulus neutre",
          "paragraphText": "• Stimulus neutre : stimulus inefficace, qui n’a aucune action sur la fonction considérée.\nDans l’expérience de Pavlov, le son du métronome est neutre au départ car il ne déclenche pas la salivation.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q1",
            "type": "mcq",
            "prompt": "Un stimulus neutre est un stimulus qui :",
            "options": [
              "Déclenche toujours la réponse attendue",
              "Est fabriqué par l’expérimentateur",
              "N’a aucune action sur la fonction considérée",
              "Devient absolu après apprentissage"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le son ne salive pas au départ car il est inefficace sur les glandes salivaires : c’est la définition du stimulus neutre dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le stimulus absolu ou inconditionnel",
          "stepTheme": "Le stimulus absolu ou inconditionnel",
          "stepBadge": "Le stimulus absolu ou inconditionnel",
          "paragraphText": "• Stimulus absolu (ou stimulus inconditionnel) : stimulus efficace qui déclenche naturellement la réponse.\nLa viande est le stimulus absolu du réflexe de salivation.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q2",
            "type": "mcq",
            "prompt": "La viande, dans le réflexe de salivation, est :",
            "options": [
              "Un stimulus neutre",
              "Un stimulus conditionnel",
              "Un effecteur",
              "Un stimulus absolu ou inconditionnel"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La viande agit naturellement sur les glandes salivaires : c’est un stimulus inconditionnel, dit aussi stimulus absolu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le réflexe inné ou inconditionnel",
          "stepTheme": "Le réflexe inné ou inconditionnel",
          "stepBadge": "Le réflexe inné ou inconditionnel",
          "paragraphText": "• Réflexe inné (ou réflexe inconditionnel) : réaction naturelle déclenchée par le stimulus absolu, sans apprentissage.\nLa salivation provoquée par la viande dans la gueule du chien en est l’exemple de la leçon.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q3",
            "type": "mcq",
            "prompt": "Le réflexe inné se distingue parce qu’il :",
            "options": [
              "Nécessite un long apprentissage",
              "Se produit naturellement, sans apprentissage, sous l’effet du stimulus absolu",
              "Disparaît dès la première répétition",
              "Fait intervenir un stimulus neutre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La salivation à la viande est présente dès le départ, sans apprentissage : c’est un réflexe inné ou inconditionnel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le stimulus conditionnel et le réflexe acquis",
          "stepTheme": "Le stimulus conditionnel et le réflexe acquis",
          "stepBadge": "Le stimulus conditionnel et le réflexe acquis",
          "paragraphText": "• Stimulus conditionnel : stimulus neutre au départ qui, après apprentissage, provoque une réaction réflexe.\nLa réaction obtenue est un réflexe conditionnel ou réflexe acquis.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q4",
            "type": "mcq",
            "prompt": "Après apprentissage, le son du métronome est devenu :",
            "options": [
              "Un stimulus absolu",
              "Un stimulus neutre",
              "Un stimulus conditionnel",
              "Un centre nerveux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le son, neutre au départ, provoque la salivation après apprentissage : il est devenu un stimulus conditionnel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le même son change de statut",
          "stepTheme": "Le même son change de statut",
          "stepBadge": "Le même son change de statut",
          "paragraphText": "Piège : le son n’est pas conditionnel par nature.\nIl est neutre avant l’apprentissage et ne devient conditionnel qu’après l’association répétée avec le stimulus absolu.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q5",
            "type": "mcq",
            "prompt": "Le son du métronome est un stimulus conditionnel :",
            "options": [
              "Dès la première écoute",
              "Seulement après l’apprentissage par association avec la viande",
              "Uniquement quand la viande est présente",
              "Chez tous les chiens sans exception et sans dressage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le statut conditionnel s’acquiert : il suppose l’association répétée du son avec le stimulus absolu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "À quoi sert le réflexe conditionnel",
          "stepTheme": "À quoi sert le réflexe conditionnel",
          "stepBadge": "À quoi sert le réflexe conditionnel",
          "paragraphText": "D’après la leçon, le réflexe conditionnel permet le dressage des animaux.\nIl développe aussi l’automatisme et l’éducation.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q6",
            "type": "mcq",
            "prompt": "D’après la leçon, le réflexe conditionnel permet notamment :",
            "options": [
              "De supprimer les réflexes innés",
              "D’arrêter la salivation",
              "Le dressage des animaux et le développement de l’automatisme",
              "De remplacer les organes des sens"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon indique que le réflexe conditionnel permet le dressage des animaux, développe l’automatisme et développe l’éducation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q1",
          "type": "mcq",
          "prompt": "Un stimulus neutre est un stimulus qui :",
          "options": [
            "Déclenche toujours la réponse attendue",
            "Est fabriqué par l’expérimentateur",
            "N’a aucune action sur la fonction considérée",
            "Devient absolu après apprentissage"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le son ne salive pas au départ car il est inefficace sur les glandes salivaires : c’est la définition du stimulus neutre dans la leçon."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q2",
          "type": "mcq",
          "prompt": "La viande, dans le réflexe de salivation, est :",
          "options": [
            "Un stimulus neutre",
            "Un stimulus conditionnel",
            "Un effecteur",
            "Un stimulus absolu ou inconditionnel"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La viande agit naturellement sur les glandes salivaires : c’est un stimulus inconditionnel, dit aussi stimulus absolu."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q3",
          "type": "mcq",
          "prompt": "Le réflexe inné se distingue parce qu’il :",
          "options": [
            "Nécessite un long apprentissage",
            "Se produit naturellement, sans apprentissage, sous l’effet du stimulus absolu",
            "Disparaît dès la première répétition",
            "Fait intervenir un stimulus neutre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La salivation à la viande est présente dès le départ, sans apprentissage : c’est un réflexe inné ou inconditionnel."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q4",
          "type": "mcq",
          "prompt": "Après apprentissage, le son du métronome est devenu :",
          "options": [
            "Un stimulus absolu",
            "Un stimulus neutre",
            "Un stimulus conditionnel",
            "Un centre nerveux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le son, neutre au départ, provoque la salivation après apprentissage : il est devenu un stimulus conditionnel."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q5",
          "type": "mcq",
          "prompt": "Le son du métronome est un stimulus conditionnel :",
          "options": [
            "Dès la première écoute",
            "Seulement après l’apprentissage par association avec la viande",
            "Uniquement quand la viande est présente",
            "Chez tous les chiens sans exception et sans dressage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le statut conditionnel s’acquiert : il suppose l’association répétée du son avec le stimulus absolu."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p02_q6",
          "type": "mcq",
          "prompt": "D’après la leçon, le réflexe conditionnel permet notamment :",
          "options": [
            "De supprimer les réflexes innés",
            "D’arrêter la salivation",
            "Le dressage des animaux et le développement de l’automatisme",
            "De remplacer les organes des sens"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon indique que le réflexe conditionnel permet le dressage des animaux, développe l’automatisme et développe l’éducation."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l01_reflexe_conditionnel_p03",
      "order": 3,
      "title": "Le mécanisme : la nouvelle liaison nerveuse et le trajet de l’influx",
      "summary": "Expliquer la création d’une liaison entre l’aire auditive et l’aire gustative et le trajet de l’influx nerveux.",
      "conceptExplanation": "L’aliment est un excitant naturel qui stimule les terminaisons nerveuses de la langue ; l’influx qui en résulte est transmis au centre de salivation qui déclenche la libération de la salive par les glandes salivaires.\nLorsqu’on associe le son à la viande, il s’établit une nouvelle liaison entre l’aire auditive et l’aire gustative.\nCette nouvelle liaison permet au son de stimuler l’aire gustative puis de provoquer la sécrétion salivaire.\nLes organes intervenant sont : un récepteur sensitif comme l’oreille, le cerveau et la moelle épinière comme centres nerveux, et les glandes salivaires comme effecteurs.",
      "keyRule": "Le cœur du mécanisme est la nouvelle liaison nerveuse entre l’aire du stimulus neutre et l’aire du stimulus absolu, dans les hémisphères cérébraux.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les structures du trajet de l’influx (activité d’application du mécanisme)",
        "statement": "Classe les éléments suivants dans le tableau de l’activité : oreille interne, neurone d’association, nouvelle liaison nerveuse, neurone moteur, neurone sensitif, aire auditive, bulbe rachidien, aire gustative, glandes salivaires.",
        "methodSteps": [
          "Récepteur : l’oreille interne capte le son.",
          "Structures nerveuses : neurone d’association, nouvelle liaison nerveuse, neurone moteur et neurone sensitif assurent la transmission.",
          "Centres nerveux : aire auditive, bulbe rachidien et aire gustative traitent le message.",
          "Effecteur : les glandes salivaires produisent la réponse, la salive."
        ],
        "conclusion": "C’est le classement du corrigé de l’activité : récepteur i, structures a, e, f, h, centres c, b, d, effecteur g."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La nouvelle liaison nerveuse",
          "stepTheme": "La nouvelle liaison nerveuse",
          "stepBadge": "La nouvelle liaison nerveuse",
          "paragraphText": "• Nouvelle liaison nerveuse : liaison qui s’établit, pendant l’apprentissage, entre l’aire auditive et l’aire gustative.\nElle permet ensuite au son de stimuler l’aire gustative et de provoquer la sécrétion salivaire.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q1",
            "type": "mcq",
            "prompt": "La nouvelle liaison créée pendant l’apprentissage relie :",
            "options": [
              "L’oreille aux glandes salivaires",
              "L’aire auditive à l’aire gustative",
              "La moelle épinière à la langue",
              "Le bulbe rachidien à l’oreille"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise qu’il s’établit une nouvelle liaison entre l’aire auditive et l’aire gustative."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le trajet dans le réflexe inné de salivation",
          "stepTheme": "Le trajet dans le réflexe inné de salivation",
          "stepBadge": "Le trajet dans le réflexe inné de salivation",
          "paragraphText": "L’aliment stimule les terminaisons nerveuses de la langue.\nL’influx résultant est transmis au centre de salivation, qui déclenche la libération de la salive par les glandes salivaires.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q2",
            "type": "mcq",
            "prompt": "Dans le réflexe inné de salivation, l’influx né sur la langue est transmis :",
            "options": [
              "Directement aux glandes salivaires sans centre",
              "Au centre de salivation, qui déclenche la libération de la salive",
              "À l’aire auditive",
              "À l’aire visuelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le centre de salivation reçoit l’influx venu de la langue et commande la sécrétion par les glandes salivaires."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Récepteur, centres et effecteur",
          "stepTheme": "Récepteur, centres et effecteur",
          "stepBadge": "Récepteur, centres et effecteur",
          "paragraphText": "Dans le réflexe conditionnel de salivation, les organes cités par la leçon sont :\n• Récepteur sensitif : l’oreille.\n• Centres nerveux : le cerveau et la moelle épinière, relais entre le cerveau et l’effecteur.\n• Effecteurs : les glandes salivaires.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q3",
            "type": "mcq",
            "prompt": "Dans le réflexe conditionnel de salivation de Pavlov, l’effecteur est :",
            "options": [
              "L’oreille",
              "Le cerveau",
              "La moelle épinière",
              "Les glandes salivaires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les glandes salivaires produisent la réponse, la salive : ce sont les effecteurs, l’oreille étant le récepteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire le schéma du trajet de l’influx",
          "stepTheme": "Lire le schéma du trajet de l’influx",
          "stepBadge": "Lire le schéma du trajet de l’influx",
          "paragraphText": "Méthode : suivre le message du récepteur vers l’effecteur en passant par les centres.\nPour le son devenu conditionnel : oreille, aire auditive, nouvelle liaison, aire gustative, centre salivaire, puis glandes salivaires.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q4",
            "type": "mcq",
            "prompt": "Dans le trajet du réflexe conditionnel auditif, le message passe, après l’aire auditive, par :",
            "options": [
              "La nouvelle liaison vers l’aire gustative",
              "Directement les glandes salivaires sans relais",
              "L’aire visuelle",
              "La langue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la nouvelle liaison entre l’aire auditive et l’aire gustative qui permet au son de déclencher la salivation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le centre salivaire est dans le bulbe",
          "stepTheme": "Le centre salivaire est dans le bulbe",
          "stepBadge": "Le centre salivaire est dans le bulbe",
          "paragraphText": "Piège : confondre le lieu de la nouvelle liaison et le centre de salivation.\nLa nouvelle liaison se forme dans les hémisphères cérébraux, entre les aires, tandis que le centre salivaire cité dans la situation d’évaluation est situé dans le bulbe.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q5",
            "type": "mcq",
            "prompt": "D’après le corrigé de la situation d’évaluation, le centre salivaire est situé :",
            "options": [
              "Dans l’oreille",
              "Dans la glande salivaire",
              "Dans le bulbe",
              "Dans la langue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé précise que la nourriture agit sur les glandes salivaires par le biais du centre salivaire situé dans le bulbe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le cas du sifflet dans la situation d’évaluation",
          "stepTheme": "Le cas du sifflet dans la situation d’évaluation",
          "stepBadge": "Le cas du sifflet dans la situation d’évaluation",
          "paragraphText": "Dans la situation d’évaluation, la nourriture est un stimulus absolu et le sifflet un stimulus neutre.\nAprès association, le sifflet seul fait saliver le chien grâce à la nouvelle liaison devenue fonctionnelle.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q6",
            "type": "mcq",
            "prompt": "Dans la situation d’évaluation, quand le sifflet seul fait saliver le chien (figure D), cela signifie que :",
            "options": [
              "Le sifflet est devenu un stimulus absolu",
              "La nouvelle liaison entre l’aire auditive et l’aire gustative est fonctionnelle",
              "Le chien a faim à chaque sifflement sans apprentissage",
              "Les glandes salivaires fonctionnent seules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé explique la figure D par la nouvelle liaison nerveuse devenue fonctionnelle entre l’aire auditive et l’aire gustative."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q1",
          "type": "mcq",
          "prompt": "La nouvelle liaison créée pendant l’apprentissage relie :",
          "options": [
            "L’oreille aux glandes salivaires",
            "L’aire auditive à l’aire gustative",
            "La moelle épinière à la langue",
            "Le bulbe rachidien à l’oreille"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise qu’il s’établit une nouvelle liaison entre l’aire auditive et l’aire gustative."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q2",
          "type": "mcq",
          "prompt": "Dans le réflexe inné de salivation, l’influx né sur la langue est transmis :",
          "options": [
            "Directement aux glandes salivaires sans centre",
            "Au centre de salivation, qui déclenche la libération de la salive",
            "À l’aire auditive",
            "À l’aire visuelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le centre de salivation reçoit l’influx venu de la langue et commande la sécrétion par les glandes salivaires."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q3",
          "type": "mcq",
          "prompt": "Dans le réflexe conditionnel de salivation de Pavlov, l’effecteur est :",
          "options": [
            "L’oreille",
            "Le cerveau",
            "La moelle épinière",
            "Les glandes salivaires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les glandes salivaires produisent la réponse, la salive : ce sont les effecteurs, l’oreille étant le récepteur."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q4",
          "type": "mcq",
          "prompt": "Dans le trajet du réflexe conditionnel auditif, le message passe, après l’aire auditive, par :",
          "options": [
            "La nouvelle liaison vers l’aire gustative",
            "Directement les glandes salivaires sans relais",
            "L’aire visuelle",
            "La langue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la nouvelle liaison entre l’aire auditive et l’aire gustative qui permet au son de déclencher la salivation."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q5",
          "type": "mcq",
          "prompt": "D’après le corrigé de la situation d’évaluation, le centre salivaire est situé :",
          "options": [
            "Dans l’oreille",
            "Dans la glande salivaire",
            "Dans le bulbe",
            "Dans la langue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé précise que la nourriture agit sur les glandes salivaires par le biais du centre salivaire situé dans le bulbe."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p03_q6",
          "type": "mcq",
          "prompt": "Dans la situation d’évaluation, quand le sifflet seul fait saliver le chien (figure D), cela signifie que :",
          "options": [
            "Le sifflet est devenu un stimulus absolu",
            "La nouvelle liaison entre l’aire auditive et l’aire gustative est fonctionnelle",
            "Le chien a faim à chaque sifflement sans apprentissage",
            "Les glandes salivaires fonctionnent seules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé explique la figure D par la nouvelle liaison nerveuse devenue fonctionnelle entre l’aire auditive et l’aire gustative."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l01_reflexe_conditionnel_p04",
      "order": 4,
      "title": "Les conditions de mise en place du réflexe conditionnel",
      "summary": "Énumérer les conditions nécessaires : hémisphères, organes intègres, vigilance, stimuli efficaces et ordre de présentation.",
      "conceptExplanation": "La mise en place du réflexe conditionnel nécessite certaines conditions : la présence des hémisphères cérébraux de l’animal ; des organes intègres, en bon état ; l’état de vigilance de l’animal, avec absence de stress et de gêne ; l’efficacité des stimuli, intéressants, précis et doux ; l’ordre de présentation des stimuli, le stimulus neutre choisi devant précéder le stimulus absolu.\nLe réflexe conditionnel, une fois installé, doit être entretenu pour éviter sa disparition ou extinction, car il n’est pas immuable ou définitif.\nLes activités d’application confirment que la mise en place nécessite obligatoirement le cerveau et que les aires intervenantes sont dans les hémisphères cérébraux.",
      "keyRule": "Sans cerveau fonctionnel, sans organes intègres et sans ordre neutre puis absolu, pas de conditionnement durable.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir les bonnes propositions sur les conditions (activité d’application 1 et 2)",
        "statement": "Parmi les propositions des activités : un stimulus neutre n’apporte pas naturellement la réponse attendue ; le réflexe conditionnel est toujours obtenu à la suite d’un apprentissage ; la mise en place du réflexe conditionnel nécessite obligatoirement le cerveau. Vérifie ces trois affirmations.",
        "methodSteps": [
          "Un stimulus neutre n’apporte pas naturellement la réponse que l’on attend : proposition retenue dans le corrigé.",
          "Le réflexe conditionnel est toujours obtenu à la suite d’un apprentissage : proposition retenue.",
          "La mise en place du réflexe conditionnel nécessite obligatoirement le cerveau et ses aires sont dans les hémisphères cérébraux : propositions retenues."
        ],
        "conclusion": "Corrigés des activités : activité 1, 1-b, 3-b, 4-c ; activité 2, 1-a, 2-c, 4-b."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La présence des hémisphères cérébraux",
          "stepTheme": "La présence des hémisphères cérébraux",
          "stepBadge": "La présence des hémisphères cérébraux",
          "paragraphText": "Première condition citée par la leçon : la présence des hémisphères cérébraux de l’animal.\nC’est là que se trouvent les aires reliées par la nouvelle liaison nerveuse.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q1",
            "type": "mcq",
            "prompt": "La mise en place du réflexe conditionnel nécessite obligatoirement :",
            "options": [
              "La moelle épinière seule",
              "Le cerveau, avec ses hémisphères cérébraux",
              "Aucun centre nerveux",
              "Uniquement les glandes salivaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’activité 2 retient que la mise en place du réflexe conditionnel nécessite obligatoirement le cerveau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des organes intègres et un animal vigilant",
          "stepTheme": "Des organes intègres et un animal vigilant",
          "stepBadge": "Des organes intègres et un animal vigilant",
          "paragraphText": "Autres conditions de la leçon : des organes intègres, en bon état.\nL’animal doit aussi être en état de vigilance, sans stress ni gêne.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q2",
            "type": "mcq",
            "prompt": "Parmi les conditions suivantes, laquelle figure dans la leçon ?",
            "options": [
              "L’animal doit être endormi",
              "L’animal doit être stressé pour mieux apprendre",
              "Les organes doivent être intègres et l’animal vigilant, sans stress",
              "Les stimuli doivent être douloureux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon exige des organes intègres et l’état de vigilance de l’animal, avec absence de stress et de gêne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L’ordre de présentation des stimuli",
          "stepTheme": "L’ordre de présentation des stimuli",
          "stepBadge": "L’ordre de présentation des stimuli",
          "paragraphText": "Condition d’ordre : le stimulus neutre choisi doit précéder le stimulus absolu.\nDans l’expérience de Pavlov, on fait donc écouter le son avant de donner la viande.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q3",
            "type": "mcq",
            "prompt": "Pour conditionner le chien, le stimulus neutre doit être présenté :",
            "options": [
              "Après le stimulus absolu",
              "En même temps, sans ordre précis",
              "Avant le stimulus absolu",
              "Seulement après la salivation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon impose que le stimulus neutre précède le stimulus absolu pendant l’apprentissage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’efficacité des stimuli",
          "stepTheme": "L’efficacité des stimuli",
          "stepBadge": "L’efficacité des stimuli",
          "paragraphText": "Les stimuli utilisés doivent être efficaces : intéressants, précis et doux.\nUn stimulus absolu provoque toujours une réaction, quelle que soit la période d’apprentissage, d’après le corrigé de l’activité 1.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q4",
            "type": "mcq",
            "prompt": "D’après la leçon, les stimuli du conditionnement doivent être :",
            "options": [
              "Vagues et changeants à chaque essai",
              "Intéressants, précis et doux",
              "Toujours différents",
              "Présentés au hasard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’efficacité des stimuli, intéressants, précis et doux, est l’une des conditions énumérées par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le stimulus neutre ne doit pas suivre l’absolu",
          "stepTheme": "Le stimulus neutre ne doit pas suivre l’absolu",
          "stepBadge": "Le stimulus neutre ne doit pas suivre l’absolu",
          "paragraphText": "Piège repris de l’activité 1 : affirmer que le stimulus neutre doit toujours suivre le stimulus absolu pendant le conditionnement.\nC’est faux : il doit le précéder, sinon l’association ne se fait pas dans le bon sens.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q5",
            "type": "mcq",
            "prompt": "L’affirmation « le stimulus neutre doit toujours suivre le stimulus absolu pendant le conditionnement » est :",
            "options": [
              "Vraie, c’est la règle de la leçon",
              "Fausse, le neutre doit précéder l’absolu",
              "Vraie seulement chez le chien",
              "Sans rapport avec le conditionnement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’activité 1 ne retient pas cette proposition : l’ordre correct est neutre d’abord, absolu ensuite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les organes sensoriels du conditionnement de Pavlov",
          "stepTheme": "Les organes sensoriels du conditionnement de Pavlov",
          "stepBadge": "Les organes sensoriels du conditionnement de Pavlov",
          "paragraphText": "Dans le conditionnement de salivation de Pavlov, deux organes sensoriels interviennent.\nLa langue perçoit la viande et l’oreille perçoit le son : le corrigé de l’activité 2 retient « la langue et l’oreille ».",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q6",
            "type": "mcq",
            "prompt": "Dans le réflexe acquis de salivation de Pavlov, les organes sensoriels qui interviennent sont :",
            "options": [
              "Le nez et la langue",
              "Le nez et l’oreille",
              "La langue et l’oreille",
              "Les yeux et la langue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l’activité 2, question 3 : réponse c, la langue et l’oreille."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q1",
          "type": "mcq",
          "prompt": "La mise en place du réflexe conditionnel nécessite obligatoirement :",
          "options": [
            "La moelle épinière seule",
            "Le cerveau, avec ses hémisphères cérébraux",
            "Aucun centre nerveux",
            "Uniquement les glandes salivaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’activité 2 retient que la mise en place du réflexe conditionnel nécessite obligatoirement le cerveau."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q2",
          "type": "mcq",
          "prompt": "Parmi les conditions suivantes, laquelle figure dans la leçon ?",
          "options": [
            "L’animal doit être endormi",
            "L’animal doit être stressé pour mieux apprendre",
            "Les organes doivent être intègres et l’animal vigilant, sans stress",
            "Les stimuli doivent être douloureux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon exige des organes intègres et l’état de vigilance de l’animal, avec absence de stress et de gêne."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q3",
          "type": "mcq",
          "prompt": "Pour conditionner le chien, le stimulus neutre doit être présenté :",
          "options": [
            "Après le stimulus absolu",
            "En même temps, sans ordre précis",
            "Avant le stimulus absolu",
            "Seulement après la salivation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon impose que le stimulus neutre précède le stimulus absolu pendant l’apprentissage."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q4",
          "type": "mcq",
          "prompt": "D’après la leçon, les stimuli du conditionnement doivent être :",
          "options": [
            "Vagues et changeants à chaque essai",
            "Intéressants, précis et doux",
            "Toujours différents",
            "Présentés au hasard"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’efficacité des stimuli, intéressants, précis et doux, est l’une des conditions énumérées par la leçon."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q5",
          "type": "mcq",
          "prompt": "L’affirmation « le stimulus neutre doit toujours suivre le stimulus absolu pendant le conditionnement » est :",
          "options": [
            "Vraie, c’est la règle de la leçon",
            "Fausse, le neutre doit précéder l’absolu",
            "Vraie seulement chez le chien",
            "Sans rapport avec le conditionnement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’activité 1 ne retient pas cette proposition : l’ordre correct est neutre d’abord, absolu ensuite."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p04_q6",
          "type": "mcq",
          "prompt": "Dans le réflexe acquis de salivation de Pavlov, les organes sensoriels qui interviennent sont :",
          "options": [
            "Le nez et la langue",
            "Le nez et l’oreille",
            "La langue et l’oreille",
            "Les yeux et la langue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l’activité 2, question 3 : réponse c, la langue et l’oreille."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l01_reflexe_conditionnel_p05",
      "order": 5,
      "title": "Extinction et caractéristiques du réflexe conditionnel",
      "summary": "Montrer, avec l’expérience de la souris, que le réflexe acquis est temporaire et non stéréotypé.",
      "conceptExplanation": "Dans la situation d’évaluation 1, une souris fléchit la patte sous l’effet d’un courant électrique, stimulus absolu, tandis que la lumière est un stimulus neutre.\nDu 5e au 9e essai, la lumière suivie du courant provoque la flexion : c’est la phase d’apprentissage, avec création d’une nouvelle liaison entre l’aire optique et l’aire motrice.\nDu 10e au 13e essai, la lumière seule provoque la flexion : la lumière est devenue un stimulus conditionnel.\nÀ partir du 14e essai, il n’y a plus de flexion car la liaison n’est pas entretenue et disparaît : c’est l’extinction.\nLe corrigé dégage deux caractéristiques : le réflexe conditionnel est temporaire et il n’est pas stéréotypé.",
      "keyRule": "Un réflexe acquis non entretenu s’éteint : temporaire et non stéréotypé, voilà ses deux caractéristiques à retenir.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser les essais de la souris (situation d’évaluation 1)",
        "statement": "Une souris fléchit la patte sous l’effet du courant électrique. Après des essais associant lumière puis courant, la lumière seule provoque la flexion, puis, aux derniers essais, ne la provoque plus. Explique la disparition finale de la réponse.",
        "methodSteps": [
          "La lumière est au départ un stimulus neutre et le courant un stimulus absolu.",
          "L’association répétée crée une nouvelle liaison entre l’aire optique et l’aire motrice : phase d’apprentissage.",
          "La lumière seule devient alors efficace : c’est le réflexe conditionnel installé.",
          "Aux essais 14 et 15, la liaison non entretenue disparaît : c’est l’extinction."
        ],
        "conclusion": "Le corrigé conclut que le réflexe conditionnel est temporaire et n’est pas stéréotypé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’extinction du réflexe conditionnel",
          "stepTheme": "L’extinction du réflexe conditionnel",
          "stepBadge": "L’extinction du réflexe conditionnel",
          "paragraphText": "• Extinction : disparition du réflexe conditionnel lorsque la nouvelle liaison n’est pas entretenue.\nDans l’expérience de la souris, à partir du 14e essai, la lumière seule ne provoque plus la flexion de la patte.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q1",
            "type": "mcq",
            "prompt": "L’extinction du réflexe conditionnel correspond à :",
            "options": [
              "Un renforcement du réflexe",
              "La disparition du réflexe faute d’entretien de la liaison",
              "L’apparition d’un nouveau stimulus absolu",
              "La destruction de l’effecteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé explique l’absence de flexion aux derniers essais par la disparition de la liaison non entretenue : c’est l’extinction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un réflexe temporaire",
          "stepTheme": "Un réflexe temporaire",
          "stepBadge": "Un réflexe temporaire",
          "paragraphText": "Le réflexe conditionnel est temporaire : il doit être entretenu ou renforcé pour éviter son extinction.\nLa leçon le dit dès les conditions de mise en place : il n’est pas immuable ou définitif.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q2",
            "type": "mcq",
            "prompt": "Le réflexe conditionnel doit être entretenu parce qu’il est :",
            "options": [
              "Définitif et immuable",
              "Temporaire et peut disparaître",
              "Indépendant de l’apprentissage",
              "Toujours stéréotypé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Caractéristique dégagée par les corrigés : le réflexe conditionnel est temporaire et doit être entretenu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un réflexe non stéréotypé",
          "stepTheme": "Un réflexe non stéréotypé",
          "stepBadge": "Un réflexe non stéréotypé",
          "paragraphText": "Deuxième caractéristique dégagée par le corrigé de la situation 1 : le réflexe conditionnel n’est pas stéréotypé.\nIl varie selon l’apprentissage et l’entretien, contrairement à une réponse toujours identique.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q3",
            "type": "mcq",
            "prompt": "D’après le corrigé, les deux caractéristiques de la réaction installée chez la souris sont :",
            "options": [
              "Permanente et stéréotypée",
              "Temporaire et non stéréotypée",
              "Innée et définitive",
              "Rapide et involontaire au sens inné"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé répond exactement : le réflexe conditionnel est temporaire et il n’est pas stéréotypé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Associer phases et réactions (activité 3)",
          "stepTheme": "Associer phases et réactions (activité 3)",
          "stepBadge": "Associer phases et réactions (activité 3)",
          "paragraphText": "L’activité 3 associe chaque phase à la réaction de l’animal.\nAcquisition : l’animal réagit au stimulus neutre devenu conditionnel ; extinction : la réaction diminue et finit par disparaître ; début d’expérience : l’animal est indifférent au stimulus neutre ; apprentissage : l’animal réagit à toutes les répétitions de l’association.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q4",
            "type": "mcq",
            "prompt": "Pendant la phase d’extinction, la réaction de l’animal au stimulus conditionnel :",
            "options": [
              "Augmente à chaque essai",
              "Reste maximale",
              "Diminue et finit par disparaître",
              "Apparaît pour la première fois"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l’activité 3 : l’extinction correspond à la réaction qui diminue et finit par disparaître (2-D)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre acquisition et début d’expérience",
          "stepTheme": "Confondre acquisition et début d’expérience",
          "stepBadge": "Confondre acquisition et début d’expérience",
          "paragraphText": "Piège de l’activité 3 : au début de l’expérience, l’animal est indifférent au stimulus neutre.\nCe n’est qu’à l’acquisition qu’il réagit au stimulus neutre devenu conditionnel.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q5",
            "type": "mcq",
            "prompt": "Au début de l’expérience de conditionnement, l’animal est, face au stimulus neutre :",
            "options": [
              "En pleine extinction",
              "Indifférent",
              "Conditionné",
              "En train de saliver au stimulus seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l’activité 3 : début d’expérience égale animal indifférent au stimulus neutre (3-C)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La baisse des gouttes de salive (situation 2)",
          "stepTheme": "La baisse des gouttes de salive (situation 2)",
          "stepBadge": "La baisse des gouttes de salive (situation 2)",
          "paragraphText": "Dans la situation d’évaluation 2, après l’association lumière blanche et viande, la lumière seule donne d’abord 15 gouttes de salive.\nPuis le nombre de gouttes diminue progressivement jusqu’à 0 lorsque la lumière est présentée seule de façon répétée sans viande.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q6",
            "type": "mcq",
            "prompt": "Dans la situation 2, la diminution des gouttes de salive jusqu’à 0, quand la lumière seule est répétée, illustre :",
            "options": [
              "L’apprentissage initial",
              "Le caractère temporaire du réflexe conditionnel, qui s’éteint",
              "Un réflexe inné",
              "L’action d’un nouveau stimulus absolu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé interprète la baisse par le caractère temporaire du réflexe conditionnel, qui disparaît sans entretien."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q1",
          "type": "mcq",
          "prompt": "L’extinction du réflexe conditionnel correspond à :",
          "options": [
            "Un renforcement du réflexe",
            "La disparition du réflexe faute d’entretien de la liaison",
            "L’apparition d’un nouveau stimulus absolu",
            "La destruction de l’effecteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé explique l’absence de flexion aux derniers essais par la disparition de la liaison non entretenue : c’est l’extinction."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q2",
          "type": "mcq",
          "prompt": "Le réflexe conditionnel doit être entretenu parce qu’il est :",
          "options": [
            "Définitif et immuable",
            "Temporaire et peut disparaître",
            "Indépendant de l’apprentissage",
            "Toujours stéréotypé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Caractéristique dégagée par les corrigés : le réflexe conditionnel est temporaire et doit être entretenu."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q3",
          "type": "mcq",
          "prompt": "D’après le corrigé, les deux caractéristiques de la réaction installée chez la souris sont :",
          "options": [
            "Permanente et stéréotypée",
            "Temporaire et non stéréotypée",
            "Innée et définitive",
            "Rapide et involontaire au sens inné"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé répond exactement : le réflexe conditionnel est temporaire et il n’est pas stéréotypé."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q4",
          "type": "mcq",
          "prompt": "Pendant la phase d’extinction, la réaction de l’animal au stimulus conditionnel :",
          "options": [
            "Augmente à chaque essai",
            "Reste maximale",
            "Diminue et finit par disparaître",
            "Apparaît pour la première fois"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l’activité 3 : l’extinction correspond à la réaction qui diminue et finit par disparaître (2-D)."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q5",
          "type": "mcq",
          "prompt": "Au début de l’expérience de conditionnement, l’animal est, face au stimulus neutre :",
          "options": [
            "En pleine extinction",
            "Indifférent",
            "Conditionné",
            "En train de saliver au stimulus seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l’activité 3 : début d’expérience égale animal indifférent au stimulus neutre (3-C)."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p05_q6",
          "type": "mcq",
          "prompt": "Dans la situation 2, la diminution des gouttes de salive jusqu’à 0, quand la lumière seule est répétée, illustre :",
          "options": [
            "L’apprentissage initial",
            "Le caractère temporaire du réflexe conditionnel, qui s’éteint",
            "Un réflexe inné",
            "L’action d’un nouveau stimulus absolu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé interprète la baisse par le caractère temporaire du réflexe conditionnel, qui disparaît sans entretien."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l01_reflexe_conditionnel_p06",
      "order": 6,
      "title": "Précision du conditionnement : le chien et le chimpanzé",
      "summary": "Comparer la réponse généralisée du chien et la réponse précise du chimpanzé aux éclairs de couleurs différentes.",
      "conceptExplanation": "Dans l’exercice 2, un chien conditionné à saliver à un éclair de lumière blanche salive ensuite de la même façon, 10 gouttes par 30 secondes, quelle que soit la couleur de l’éclair : blanche, bleue, verte ou rouge.\nUn chimpanzé conditionné par le même stimulus de départ ne réagit qu’à la lumière blanche, avec 10 gouttes, et donne 0 goutte pour les lumières bleue, verte et rouge.\nLe trajet du réflexe mis en jeu passe par les yeux, le nerf optique, l’aire visuelle, la nouvelle liaison nerveuse, l’aire gustative, les fibres gustatives, le centre salivaire du bulbe rachidien, puis les glandes salivaires.",
      "keyRule": "Même conditionnement au départ, précision différente ensuite : le chimpanzé ne répond qu’au stimulus exact du dressage.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser les deux expériences de l’exercice 2",
        "statement": "Un chien et un chimpanzé sont conditionnés à la lumière blanche. On leur présente ensuite des éclairs bleus, verts et rouges. Analyse les résultats du tableau de l’exercice 2.",
        "methodSteps": [
          "Chez le chien, le nombre de gouttes de salive reste de 10 par 30 secondes quelle que soit la couleur présentée.",
          "Chez le chimpanzé, seules les présentations de lumière blanche donnent 10 gouttes ; les autres couleurs donnent 0 goutte.",
          "Le chien répond donc à tous les éclairs, tandis que le chimpanzé ne réagit qu’au stimulus utilisé lors du dressage."
        ],
        "conclusion": "C’est l’analyse du corrigé de l’exercice 2 : même réaction chez le chien, réaction limitée à la lumière blanche chez le chimpanzé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le stimulus conditionnel de l’exercice 2",
          "stepTheme": "Le stimulus conditionnel de l’exercice 2",
          "stepBadge": "Le stimulus conditionnel de l’exercice 2",
          "paragraphText": "Dans l’exercice 2, le stimulus conditionnel de départ est un éclair de lumière blanche, d’une durée de 1 seconde.\nC’est à ce stimulus que le chien et le chimpanzé ont été conditionnés.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q1",
            "type": "mcq",
            "prompt": "Le stimulus utilisé pour conditionner les deux animaux de l’exercice 2 est :",
            "options": [
              "Un son de métronome",
              "Un éclair de lumière blanche",
              "Un courant électrique",
              "Un morceau de viande"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’énoncé précise que les deux animaux ont été conditionnés avec un éclair de lumière blanche."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La réponse du chien à toutes les couleurs",
          "stepTheme": "La réponse du chien à toutes les couleurs",
          "stepBadge": "La réponse du chien à toutes les couleurs",
          "paragraphText": "Chez le chien, les éclairs bleu, vert et rouge donnent le même résultat que l’éclair blanc.\nLe tableau 1 indique 10 gouttes de salive par 30 secondes pour chaque couleur.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q2",
            "type": "mcq",
            "prompt": "Chez le chien conditionné, un éclair de lumière rouge provoque :",
            "options": [
              "0 goutte de salive",
              "5 gouttes de salive",
              "10 gouttes de salive, comme la lumière blanche",
              "Une salivation seulement après plusieurs essais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau 1 donne 10 gouttes par 30 secondes pour la lumière rouge, comme pour les autres couleurs, chez le chien."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La réponse du chimpanzé limitée au stimulus de dressage",
          "stepTheme": "La réponse du chimpanzé limitée au stimulus de dressage",
          "stepBadge": "La réponse du chimpanzé limitée au stimulus de dressage",
          "paragraphText": "Chez le chimpanzé, la lumière bleue, la lumière verte et la lumière rouge donnent 0 goutte de salive.\nSeule la lumière blanche, stimulus du dressage, donne 10 gouttes.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q3",
            "type": "mcq",
            "prompt": "Chez le chimpanzé conditionné, un éclair de lumière verte provoque :",
            "options": [
              "10 gouttes de salive",
              "0 goutte de salive",
              "Autant de salive que la lumière blanche",
              "Une salivation retardée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau 2 indique 0 goutte pour les lumières bleue, verte et rouge chez le chimpanzé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Comparer deux tableaux de résultats",
          "stepTheme": "Comparer deux tableaux de résultats",
          "stepBadge": "Comparer deux tableaux de résultats",
          "paragraphText": "Méthode : comparer, ligne par ligne, le nombre de gouttes de salive pour chaque couleur chez les deux animaux.\nLa comparaison fait apparaître une réponse identique pour toutes les couleurs chez le chien et une réponse unique à la lumière blanche chez le chimpanzé.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q4",
            "type": "mcq",
            "prompt": "La comparaison des deux tableaux montre que :",
            "options": [
              "Les deux animaux répondent à toutes les couleurs",
              "Les deux animaux ne répondent à aucune couleur",
              "Le chien répond à toutes les couleurs, le chimpanzé seulement à la lumière blanche",
              "Le chimpanzé répond à toutes les couleurs, le chien seulement à la blanche"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’analyse du corrigé : même réaction réflexe chez le chien quelle que soit la couleur ; réaction limitée au stimulus de dressage chez le chimpanzé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas attribuer au chimpanzé la réponse du chien",
          "stepTheme": "Ne pas attribuer au chimpanzé la réponse du chien",
          "stepBadge": "Ne pas attribuer au chimpanzé la réponse du chien",
          "paragraphText": "Piège : lire seulement le premier tableau et conclure que tout animal conditionné répond à n’importe quel éclair coloré.\nLe second tableau contredit cette généralisation pour le chimpanzé.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q5",
            "type": "mcq",
            "prompt": "Affirmer « après conditionnement à la lumière blanche, l’animal salive à toutes les couleurs » est :",
            "options": [
              "Vrai pour le chien et pour le chimpanzé",
              "Vrai pour le chien, faux pour le chimpanzé d’après les tableaux",
              "Faux pour les deux animaux",
              "Impossible à vérifier dans l’exercice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les tableaux montrent la réponse à toutes les couleurs chez le chien seulement ; le chimpanzé ne répond qu’à la lumière blanche."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le trajet visuel du réflexe de salivation",
          "stepTheme": "Le trajet visuel du réflexe de salivation",
          "stepBadge": "Le trajet visuel du réflexe de salivation",
          "paragraphText": "Le schéma du corrigé fait passer l’influx par les yeux, récepteurs, puis le nerf optique et l’aire visuelle du cortex cérébral.\nLa nouvelle liaison nerveuse relie ensuite l’aire visuelle à l’aire gustative, avant le centre salivaire du bulbe rachidien et les glandes salivaires, effecteurs.",
          "exercise": {
            "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q6",
            "type": "mcq",
            "prompt": "Dans ce réflexe conditionné à la lumière, le récepteur est :",
            "options": [
              "L’oreille",
              "La langue",
              "Les yeux",
              "Les glandes salivaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le schéma du corrigé indique les yeux comme récepteurs du stimulus conditionnel lumineux, les glandes salivaires étant les effecteurs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q1",
          "type": "mcq",
          "prompt": "Le stimulus utilisé pour conditionner les deux animaux de l’exercice 2 est :",
          "options": [
            "Un son de métronome",
            "Un éclair de lumière blanche",
            "Un courant électrique",
            "Un morceau de viande"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’énoncé précise que les deux animaux ont été conditionnés avec un éclair de lumière blanche."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q2",
          "type": "mcq",
          "prompt": "Chez le chien conditionné, un éclair de lumière rouge provoque :",
          "options": [
            "0 goutte de salive",
            "5 gouttes de salive",
            "10 gouttes de salive, comme la lumière blanche",
            "Une salivation seulement après plusieurs essais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau 1 donne 10 gouttes par 30 secondes pour la lumière rouge, comme pour les autres couleurs, chez le chien."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q3",
          "type": "mcq",
          "prompt": "Chez le chimpanzé conditionné, un éclair de lumière verte provoque :",
          "options": [
            "10 gouttes de salive",
            "0 goutte de salive",
            "Autant de salive que la lumière blanche",
            "Une salivation retardée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau 2 indique 0 goutte pour les lumières bleue, verte et rouge chez le chimpanzé."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q4",
          "type": "mcq",
          "prompt": "La comparaison des deux tableaux montre que :",
          "options": [
            "Les deux animaux répondent à toutes les couleurs",
            "Les deux animaux ne répondent à aucune couleur",
            "Le chien répond à toutes les couleurs, le chimpanzé seulement à la lumière blanche",
            "Le chimpanzé répond à toutes les couleurs, le chien seulement à la blanche"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’analyse du corrigé : même réaction réflexe chez le chien quelle que soit la couleur ; réaction limitée au stimulus de dressage chez le chimpanzé."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q5",
          "type": "mcq",
          "prompt": "Affirmer « après conditionnement à la lumière blanche, l’animal salive à toutes les couleurs » est :",
          "options": [
            "Vrai pour le chien et pour le chimpanzé",
            "Vrai pour le chien, faux pour le chimpanzé d’après les tableaux",
            "Faux pour les deux animaux",
            "Impossible à vérifier dans l’exercice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les tableaux montrent la réponse à toutes les couleurs chez le chien seulement ; le chimpanzé ne répond qu’à la lumière blanche."
        },
        {
          "id": "terminale_d_svt_l01_reflexe_conditionnel_p06_q6",
          "type": "mcq",
          "prompt": "Dans ce réflexe conditionné à la lumière, le récepteur est :",
          "options": [
            "L’oreille",
            "La langue",
            "Les yeux",
            "Les glandes salivaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le schéma du corrigé indique les yeux comme récepteurs du stimulus conditionnel lumineux, les glandes salivaires étant les effecteurs."
        }
      ]
    }
  ]
};
