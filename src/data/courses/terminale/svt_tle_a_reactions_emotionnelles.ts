import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Les réactions émotionnelles chez l'Homme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1765
export const SVT_TLE_A_L01_REACTIONS_EMOTIONNELLES: CurriculumChapter = {
  "id": "terminale_a1_svt_l01_reactions_emotionnelles",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Les réactions émotionnelles chez l'Homme",
  "summary": "Face à certaines situations de stress, l'Homme réagit par des émotions aux manifestations visibles et invisibles, dont les causes sont variées et que l'organisme régule par le système nerveux et le système hormonal.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1765",
  "points": [
    {
      "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01",
      "order": 1,
      "title": "Les manifestations des réactions émotionnelles",
      "summary": "Reconnaître les manifestations visibles et invisibles d'une réaction émotionnelle.",
      "conceptExplanation": "Dans une situation de stress, l'organisme présente des manifestations de nature variée, nettement visibles pour certaines : accélération du rythme cardiaque, pâleur du visage, modification du rythme respiratoire, ralentissement du rythme cardiaque, transpiration abondante, flot de paroles ou mutisme, rire ou larmes, sauts. Ces réponses sont des expressions involontaires de la réaction émotionnelle.\nDans un grand nombre de situations de stress, des dosages hormonaux révèlent une augmentation sensible du taux de certaines hormones dans le sang : c'est le cas de l'adrénaline et des glucocorticoïdes. Ces manifestations hormonales sont invisibles.\nLa modification du rythme cardiaque et de la respiration et la transpiration abondante sont dues à la libération de certaines hormones dans le sang, agissant sur les organes cibles. La pâleur du visage est due à la diminution du diamètre des vaisseaux sanguins sous-cutanés. Certains centres nerveux cérébraux sont inhibés ou stimulés, ce qui provoque le flot de rire, le mutisme ou les paroles.",
      "keyRule": "Une réaction émotionnelle se reconnaît à des manifestations visibles (comportement, visage, rythme cardiaque) et invisibles (hausse d'hormones dans le sang).",
      "formulas": [],
      "workedExample": {
        "title": "La candidate de la finale de miss district (situation d'apprentissage)",
        "statement": "Pendant l'attente des résultats, une candidate est toute pâle, silencieuse et transpire à grosses gouttes. À l'appel de son nom, elle court, pousse des cris et pleure de joie. Identifie ses manifestations.",
        "methodSteps": [
          "Avant les résultats : pâleur, silence et transpiration abondante sont des manifestations visibles de son émotion.",
          "Après l'appel de son nom : course, cris et pleurs de joie sont d'autres manifestations visibles.",
          "En parallèle, des manifestations invisibles accompagnent ces états, comme l'augmentation du taux d'adrénaline et de glucocorticoïdes dans le sang."
        ],
        "conclusion": "La même personne présente, selon le moment, des manifestations visibles différentes, doublées de manifestations hormonales invisibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une manifestation visible",
          "stepTheme": "Une manifestation visible",
          "stepBadge": "Une manifestation visible",
          "paragraphText": "• Manifestation visible : manifestation perceptible d'une réaction émotionnelle, comme la pâleur du visage, la transpiration abondante, les frissons ou les sauts.\nLe texte cite aussi le raidissement musculaire, le fait de battre la semelle, de sautiller et de claquer des mains.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q1",
            "type": "mcq",
            "prompt": "Parmi les manifestations suivantes, laquelle est visible ?",
            "options": [
              "L'augmentation du taux d'adrénaline dans le sang",
              "La pâleur du visage",
              "L'augmentation du taux de cortisol dans le sang",
              "La libération de glucocorticoïdes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pâleur du visage se voit directement. Les variations hormonales, elles, ne se révèlent que par des dosages : ce sont des manifestations invisibles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Une manifestation invisible",
          "stepTheme": "Une manifestation invisible",
          "stepBadge": "Une manifestation invisible",
          "paragraphText": "• Manifestation invisible : manifestation imperceptible d'une réaction émotionnelle, comme l'augmentation du taux de certaines hormones dans le sang.\nLe texte cite l'adrénaline et les glucocorticoïdes, dosés dans le sang en situation de stress.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q2",
            "type": "mcq",
            "prompt": "Quelle manifestation est invisible ?",
            "options": [
              "Les larmes",
              "Le rire",
              "L'augmentation du taux d'adrénaline dans le sang",
              "Les sauts"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'augmentation du taux d'adrénaline ne se perçoit pas à l'œil nu : elle se révèle par un dosage hormonal. Le rire, les larmes et les sauts sont visibles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des réponses involontaires",
          "stepTheme": "Des réponses involontaires",
          "stepBadge": "Des réponses involontaires",
          "paragraphText": "Les manifestations citées dans le texte sont des réponses nettement visibles et des expressions involontaires de la réaction émotionnelle.\nElles ne dépendent donc pas d'une décision réfléchie de la personne émue.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q3",
            "type": "mcq",
            "prompt": "Selon le texte, les manifestations visibles de l'émotion sont :",
            "options": [
              "Des réponses volontaires et réfléchies",
              "Des expressions involontaires de la réaction émotionnelle",
              "Des réponses uniquement musculaires",
              "Des réponses toujours identiques chez tous"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte précise que ces réponses sont des expressions involontaires de la réaction émotionnelle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'origine de la pâleur du visage",
          "stepTheme": "L'origine de la pâleur du visage",
          "stepBadge": "L'origine de la pâleur du visage",
          "paragraphText": "La pâleur du visage est due à la diminution du diamètre des vaisseaux sanguins sous-cutanés.\nMoins de sang sous la peau donne au visage son aspect pâle pendant l'émotion.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q4",
            "type": "mcq",
            "prompt": "La pâleur du visage pendant une émotion est due à :",
            "options": [
              "L'augmentation du diamètre des vaisseaux sous-cutanés",
              "La transpiration abondante",
              "La diminution du diamètre des vaisseaux sanguins sous-cutanés",
              "La libération de larmes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'interprétation donnée par la leçon : les vaisseaux sanguins sous-cutanés voient leur diamètre diminuer, d'où la pâleur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rire n'est pas invisible",
          "stepTheme": "Le rire n'est pas invisible",
          "stepBadge": "Le rire n'est pas invisible",
          "paragraphText": "Piège de l'exercice 1 de consolidation : affirmer que le rire est une manifestation imperceptible est faux.\nLe rire, comme les pleurs, se voit et s'entend : ce sont des manifestations perceptibles, au même titre que l'accélération du rythme cardiaque provoquée par la production d'hormones.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 1 de la leçon, l'affirmation « le rire est une manifestation imperceptible » est :",
            "options": [
              "Vraie, car le rire ne se voit pas",
              "Vraie, car le rire est une hormone",
              "Fausse uniquement pour les pleurs",
              "Fausse, car le rire est une manifestation perceptible"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le rire est perceptible : l'affirmation est fausse. Les manifestations imperceptibles sont les variations hormonales dans le sang."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La candidate pâle et en sueur",
          "stepTheme": "La candidate pâle et en sueur",
          "stepBadge": "La candidate pâle et en sueur",
          "paragraphText": "Dans la situation d'apprentissage, la candidate en attente des résultats est toute pâle, silencieuse et transpire à grosses gouttes.\nÀ l'appel de son nom, elle court, pousse des cris et pleure de joie : autant de manifestations visibles successives.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, avant les résultats, la candidate présente :",
            "options": [
              "Des cris et des pleurs de joie",
              "Une pâleur, un silence et une transpiration à grosses gouttes",
              "Un flot de paroles et des sauts uniquement",
              "Aucune manifestation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la description de la situation d'apprentissage : pâle, silencieuse, transpirant à grosses gouttes pendant l'attente."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q1",
          "type": "mcq",
          "prompt": "Parmi les manifestations suivantes, laquelle est visible ?",
          "options": [
            "L'augmentation du taux d'adrénaline dans le sang",
            "La pâleur du visage",
            "L'augmentation du taux de cortisol dans le sang",
            "La libération de glucocorticoïdes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pâleur du visage se voit directement. Les variations hormonales, elles, ne se révèlent que par des dosages : ce sont des manifestations invisibles."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q2",
          "type": "mcq",
          "prompt": "Quelle manifestation est invisible ?",
          "options": [
            "Les larmes",
            "Le rire",
            "L'augmentation du taux d'adrénaline dans le sang",
            "Les sauts"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'augmentation du taux d'adrénaline ne se perçoit pas à l'œil nu : elle se révèle par un dosage hormonal. Le rire, les larmes et les sauts sont visibles."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q3",
          "type": "mcq",
          "prompt": "Selon le texte, les manifestations visibles de l'émotion sont :",
          "options": [
            "Des réponses volontaires et réfléchies",
            "Des expressions involontaires de la réaction émotionnelle",
            "Des réponses uniquement musculaires",
            "Des réponses toujours identiques chez tous"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte précise que ces réponses sont des expressions involontaires de la réaction émotionnelle."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q4",
          "type": "mcq",
          "prompt": "La pâleur du visage pendant une émotion est due à :",
          "options": [
            "L'augmentation du diamètre des vaisseaux sous-cutanés",
            "La transpiration abondante",
            "La diminution du diamètre des vaisseaux sanguins sous-cutanés",
            "La libération de larmes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'interprétation donnée par la leçon : les vaisseaux sanguins sous-cutanés voient leur diamètre diminuer, d'où la pâleur."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 1 de la leçon, l'affirmation « le rire est une manifestation imperceptible » est :",
          "options": [
            "Vraie, car le rire ne se voit pas",
            "Vraie, car le rire est une hormone",
            "Fausse uniquement pour les pleurs",
            "Fausse, car le rire est une manifestation perceptible"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le rire est perceptible : l'affirmation est fausse. Les manifestations imperceptibles sont les variations hormonales dans le sang."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p01_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, avant les résultats, la candidate présente :",
          "options": [
            "Des cris et des pleurs de joie",
            "Une pâleur, un silence et une transpiration à grosses gouttes",
            "Un flot de paroles et des sauts uniquement",
            "Aucune manifestation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la description de la situation d'apprentissage : pâle, silencieuse, transpirant à grosses gouttes pendant l'attente."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02",
      "order": 2,
      "title": "Les causes des réactions émotionnelles",
      "summary": "Classer les causes des réactions émotionnelles en trois catégories.",
      "conceptExplanation": "De très nombreuses situations de la vie courante sont susceptibles de représenter un stress.\nLes contraintes d'ordre émotionnel : une peur violente, l'entassement dans une foule, l'inquiétude due à une situation nouvelle, l'approche d'un examen, une colère, des menaces physiques, l'attente d'une intervention chirurgicale, la violence présentée dans certains films, la joie, l'attente d'un résultat.\nLes agressions physiques : accidents, traumatismes, hémorragies, douleurs, exercices physiques intenses et prolongés, maladies infectieuses, intoxications.\nLes modifications brutales de l'environnement : brusque et importante variation de la température, diminution de l'apport d'oxygène, déshydratation.\nLes réactions émotionnelles se manifestent donc suite à certaines situations chez l'Homme.",
      "keyRule": "Trois familles de causes : contraintes d'ordre émotionnel, agressions physiques et modifications brutales de l'environnement.",
      "formulas": [],
      "workedExample": {
        "title": "Classer trois causes (exercice 2 de consolidation)",
        "statement": "Classe les causes suivantes : déshydratation, accident, joie.",
        "methodSteps": [
          "La déshydratation est un changement brutal subi par l'organisme dans son milieu : c'est une modification brutale de l'environnement.",
          "L'accident atteint directement le corps : c'est une agression physique.",
          "La joie est un état affectif : c'est une contrainte d'ordre émotionnel."
        ],
        "conclusion": "Déshydratation : modification brutale de l'environnement ; accident : agression physique ; joie : contrainte d'ordre émotionnel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les contraintes d'ordre émotionnel",
          "stepTheme": "Les contraintes d'ordre émotionnel",
          "stepBadge": "Les contraintes d'ordre émotionnel",
          "paragraphText": "• Contraintes d'ordre émotionnel : situations affectives susceptibles de représenter un stress, comme une peur violente, une colère ou l'approche d'un examen.\nLa leçon y range aussi l'entassement dans une foule, l'attente d'une intervention chirurgicale et la joie.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q1",
            "type": "mcq",
            "prompt": "L'approche d'un examen est une cause de type :",
            "options": [
              "Agression physique",
              "Modification brutale de l'environnement",
              "Contrainte d'ordre émotionnel",
              "Aucune cause, ce n'est pas un stress"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'approche d'un examen figure dans la liste des contraintes d'ordre émotionnel du texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les agressions physiques",
          "stepTheme": "Les agressions physiques",
          "stepBadge": "Les agressions physiques",
          "paragraphText": "• Agressions physiques : atteintes directes du corps susceptibles de représenter un stress.\nLa leçon cite les accidents, les traumatismes, les hémorragies, les douleurs, les exercices physiques intenses et prolongés, les maladies infectieuses et les intoxications.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q2",
            "type": "mcq",
            "prompt": "Parmi les causes suivantes, laquelle est une agression physique ?",
            "options": [
              "L'inquiétude due à une situation nouvelle",
              "Une hémorragie",
              "L'attente d'un résultat",
              "La violence dans un film"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une hémorragie est citée parmi les agressions physiques. Les autres propositions relèvent des contraintes d'ordre émotionnel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les modifications brutales de l'environnement",
          "stepTheme": "Les modifications brutales de l'environnement",
          "stepBadge": "Les modifications brutales de l'environnement",
          "paragraphText": "• Modifications brutales de l'environnement : changements soudains du milieu susceptibles de représenter un stress.\nLa leçon cite une brusque et importante variation de la température, une diminution de l'apport d'oxygène et une déshydratation.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q3",
            "type": "mcq",
            "prompt": "La déshydratation est classée par la leçon parmi :",
            "options": [
              "Les contraintes d'ordre émotionnel",
              "Les agressions physiques",
              "Les manifestations invisibles",
              "Les modifications brutales de l'environnement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La déshydratation figure, avec la variation brutale de température et la baisse d'apport d'oxygène, parmi les modifications brutales de l'environnement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La joie aussi peut stresser",
          "stepTheme": "La joie aussi peut stresser",
          "stepBadge": "La joie aussi peut stresser",
          "paragraphText": "La joie et l'attente d'un résultat figurent dans la leçon parmi les contraintes d'ordre émotionnel.\nUne émotion agréable peut donc aussi déclencher des réactions émotionnelles et du stress chez l'Homme.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q4",
            "type": "mcq",
            "prompt": "Selon la leçon, la joie est :",
            "options": [
              "Toujours sans effet sur l'organisme",
              "Une contrainte d'ordre émotionnel pouvant causer des réactions émotionnelles",
              "Une agression physique",
              "Une modification brutale de l'environnement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La joie est listée parmi les contraintes d'ordre émotionnel qui causent des réactions émotionnelles et le stress."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre cause et manifestation",
          "stepTheme": "Ne pas confondre cause et manifestation",
          "stepBadge": "Ne pas confondre cause et manifestation",
          "paragraphText": "Piège : la transpiration abondante ou la pâleur sont des manifestations, pas des causes.\nLes causes sont les situations de départ : peur violente, accident, déshydratation, approche d'un examen, etc.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions est une manifestation et non une cause ?",
            "options": [
              "Une peur violente",
              "Un accident",
              "La transpiration abondante",
              "Une déshydratation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La transpiration abondante est une manifestation visible. Peur, accident et déshydratation sont des causes, dans trois catégories différentes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'attente d'une intervention chirurgicale",
          "stepTheme": "L'attente d'une intervention chirurgicale",
          "stepBadge": "L'attente d'une intervention chirurgicale",
          "paragraphText": "L'attente d'une intervention chirurgicale est citée parmi les contraintes d'ordre émotionnel.\nDe même, la violence présentée dans certains films de cinéma ou de télévision peut représenter un stress sans aucune atteinte physique directe.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q6",
            "type": "mcq",
            "prompt": "La violence présentée dans un film relève, selon la leçon, des :",
            "options": [
              "Agressions physiques",
              "Contraintes d'ordre émotionnel",
              "Modifications brutales de l'environnement",
              "Manifestations invisibles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte range la violence présentée dans certains films parmi les contraintes d'ordre émotionnel."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q1",
          "type": "mcq",
          "prompt": "L'approche d'un examen est une cause de type :",
          "options": [
            "Agression physique",
            "Modification brutale de l'environnement",
            "Contrainte d'ordre émotionnel",
            "Aucune cause, ce n'est pas un stress"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'approche d'un examen figure dans la liste des contraintes d'ordre émotionnel du texte."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q2",
          "type": "mcq",
          "prompt": "Parmi les causes suivantes, laquelle est une agression physique ?",
          "options": [
            "L'inquiétude due à une situation nouvelle",
            "Une hémorragie",
            "L'attente d'un résultat",
            "La violence dans un film"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une hémorragie est citée parmi les agressions physiques. Les autres propositions relèvent des contraintes d'ordre émotionnel."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q3",
          "type": "mcq",
          "prompt": "La déshydratation est classée par la leçon parmi :",
          "options": [
            "Les contraintes d'ordre émotionnel",
            "Les agressions physiques",
            "Les manifestations invisibles",
            "Les modifications brutales de l'environnement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La déshydratation figure, avec la variation brutale de température et la baisse d'apport d'oxygène, parmi les modifications brutales de l'environnement."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q4",
          "type": "mcq",
          "prompt": "Selon la leçon, la joie est :",
          "options": [
            "Toujours sans effet sur l'organisme",
            "Une contrainte d'ordre émotionnel pouvant causer des réactions émotionnelles",
            "Une agression physique",
            "Une modification brutale de l'environnement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La joie est listée parmi les contraintes d'ordre émotionnel qui causent des réactions émotionnelles et le stress."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions est une manifestation et non une cause ?",
          "options": [
            "Une peur violente",
            "Un accident",
            "La transpiration abondante",
            "Une déshydratation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La transpiration abondante est une manifestation visible. Peur, accident et déshydratation sont des causes, dans trois catégories différentes."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p02_q6",
          "type": "mcq",
          "prompt": "La violence présentée dans un film relève, selon la leçon, des :",
          "options": [
            "Agressions physiques",
            "Contraintes d'ordre émotionnel",
            "Modifications brutales de l'environnement",
            "Manifestations invisibles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte range la violence présentée dans certains films parmi les contraintes d'ordre émotionnel."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03",
      "order": 3,
      "title": "La régulation nerveuse des réactions émotionnelles",
      "summary": "Expliquer le rôle du système limbique et le trajet du message nerveux dans la régulation des émotions.",
      "conceptExplanation": "Les observations des pathologies humaines montrent que le système limbique joue un rôle capital dans le déclenchement des émotions chez l'Homme, que l'hippocampe atténue l'anxiété et que le cortex atténue les réactions émotionnelles.\nLe système limbique comprend un cortex (cingulum, hippocampe) et des noyaux sous-corticaux associés (amygdale, septum). Il intervient dans le choix du comportement : défense, attaque, fuite, réaction physique. L'un de ses rôles fondamentaux est d'apprendre quelle est la valeur affective des stimulations sensorielles.\nLe mécanisme de la régulation nerveuse est le suivant : le système nerveux, comme récepteur, reçoit les informations provenant de l'environnement, qui se rassemblent dans les différentes aires corticales sensorielles ; les messages nerveux naissent dans ces aires et sont acheminés dans le système limbique ; le système limbique met en alerte l'hypothalamus, puis les zones bulbo-médullaires orthosympathiques, et il s'en suit une réponse somatique.\nLe cerveau émotionnel se trouve dans le système limbique.",
      "keyRule": "Trajet nerveux de l'émotion : aires corticales sensorielles, puis système limbique, puis hypothalamus, puis zones bulbo-médullaires orthosympathiques, puis réponse somatique.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la régulation nerveuse (situation d'évaluation)",
        "statement": "Explique le mécanisme de la régulation nerveuse des réactions émotionnelles.",
        "methodSteps": [
          "Le système nerveux reçoit, comme récepteur, les informations provenant de l'environnement.",
          "Ces informations se rassemblent dans les différentes aires corticales sensorielles, où naissent les messages nerveux.",
          "Les messages sont acheminés dans le système limbique.",
          "Le système limbique met en alerte l'hypothalamus, puis les zones bulbo-médullaires orthosympathiques.",
          "Il s'en suit une réponse somatique."
        ],
        "conclusion": "La régulation nerveuse passe par le système limbique, véritable cerveau émotionnel, qui alerte l'hypothalamus."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système limbique",
          "stepTheme": "Le système limbique",
          "stepBadge": "Le système limbique",
          "paragraphText": "• Système limbique : ensemble comprenant un cortex (cingulum, hippocampe) et des noyaux sous-corticaux associés (amygdale, septum).\nLa leçon y situe le cerveau émotionnel.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q1",
            "type": "mcq",
            "prompt": "Le système limbique comprend notamment :",
            "options": [
              "Le cervelet et la moelle épinière uniquement",
              "Le cingulum, l'hippocampe, l'amygdale et le septum",
              "La corticosurrénale et la médullosurrénale",
              "Le thalamus seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après le document de la leçon, le système limbique associe le cortex (cingulum, hippocampe) et des noyaux sous-corticaux (amygdale, septum)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle capital du système limbique",
          "stepTheme": "Le rôle capital du système limbique",
          "stepBadge": "Le rôle capital du système limbique",
          "paragraphText": "Les pathologies humaines montrent que le système limbique joue un rôle capital dans le déclenchement des émotions chez l'Homme.\nIl intervient aussi dans le choix du comportement : défense, attaque, fuite, réaction physique.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q2",
            "type": "mcq",
            "prompt": "Selon les cas pathologiques, le système limbique :",
            "options": [
              "Atténue seulement l'anxiété",
              "Ne joue aucun rôle dans les émotions",
              "Joue un rôle capital dans le déclenchement des émotions",
              "Sécrète l'adrénaline"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la constatation tirée des cas pathologiques : rôle capital dans le déclenchement des émotions. L'atténuation de l'anxiété revient à l'hippocampe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Hippocampe et cortex atténuent",
          "stepTheme": "Hippocampe et cortex atténuent",
          "stepBadge": "Hippocampe et cortex atténuent",
          "paragraphText": "L'hippocampe atténue l'anxiété chez l'Homme.\nLe cortex, lui, atténue les réactions émotionnelles chez l'Homme.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q3",
            "type": "mcq",
            "prompt": "Qui atténue l'anxiété chez l'Homme, selon la leçon ?",
            "options": [
              "L'amygdale",
              "Le septum",
              "La médullosurrénale",
              "L'hippocampe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon attribue à l'hippocampe le rôle d'atténuer l'anxiété, et au cortex celui d'atténuer les réactions émotionnelles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le trajet du message nerveux",
          "stepTheme": "Le trajet du message nerveux",
          "stepBadge": "Le trajet du message nerveux",
          "paragraphText": "Méthode : suivre l'ordre du mécanisme décrit dans la leçon.\nInformations de l'environnement, aires corticales sensorielles, système limbique, hypothalamus, zones bulbo-médullaires orthosympathiques, réponse somatique.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q4",
            "type": "mcq",
            "prompt": "Dans la régulation nerveuse, le système limbique met en alerte :",
            "options": [
              "L'hypothalamus",
              "La corticosurrénale directement",
              "Les glandes surrénales uniquement",
              "Le cortex visuel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mécanisme de la leçon : le système limbique met en alerte l'hypothalamus, puis les zones bulbo-médullaires orthosympathiques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La valeur affective des stimulations",
          "stepTheme": "La valeur affective des stimulations",
          "stepBadge": "La valeur affective des stimulations",
          "paragraphText": "Piège : le système limbique ne se contente pas de transmettre les messages.\nL'un de ses rôles fondamentaux est d'apprendre quelle est la valeur affective des stimulations sensorielles.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q5",
            "type": "mcq",
            "prompt": "L'un des rôles fondamentaux du système limbique est :",
            "options": [
              "De sécréter le cortisol",
              "D'apprendre la valeur affective des stimulations sensorielles",
              "De dilater les bronches",
              "De produire les larmes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle fondamental indiqué dans l'interprétation de la leçon. Les autres propositions relèvent des effets hormonaux ou des manifestations."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Défense, attaque ou fuite",
          "stepTheme": "Défense, attaque ou fuite",
          "stepBadge": "Défense, attaque ou fuite",
          "paragraphText": "Le système limbique intervient dans le choix du comportement face à une situation émotionnelle.\nLa leçon cite quatre conduites possibles : défense, attaque, fuite, réaction physique.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q6",
            "type": "mcq",
            "prompt": "Parmi les comportements suivants, lequel le système limbique aide-t-il à choisir ?",
            "options": [
              "La digestion",
              "Le sommeil profond",
              "La fuite",
              "La croissance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Défense, attaque, fuite et réaction physique sont les choix de comportement cités pour le système limbique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q1",
          "type": "mcq",
          "prompt": "Le système limbique comprend notamment :",
          "options": [
            "Le cervelet et la moelle épinière uniquement",
            "Le cingulum, l'hippocampe, l'amygdale et le septum",
            "La corticosurrénale et la médullosurrénale",
            "Le thalamus seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après le document de la leçon, le système limbique associe le cortex (cingulum, hippocampe) et des noyaux sous-corticaux (amygdale, septum)."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q2",
          "type": "mcq",
          "prompt": "Selon les cas pathologiques, le système limbique :",
          "options": [
            "Atténue seulement l'anxiété",
            "Ne joue aucun rôle dans les émotions",
            "Joue un rôle capital dans le déclenchement des émotions",
            "Sécrète l'adrénaline"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la constatation tirée des cas pathologiques : rôle capital dans le déclenchement des émotions. L'atténuation de l'anxiété revient à l'hippocampe."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q3",
          "type": "mcq",
          "prompt": "Qui atténue l'anxiété chez l'Homme, selon la leçon ?",
          "options": [
            "L'amygdale",
            "Le septum",
            "La médullosurrénale",
            "L'hippocampe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon attribue à l'hippocampe le rôle d'atténuer l'anxiété, et au cortex celui d'atténuer les réactions émotionnelles."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q4",
          "type": "mcq",
          "prompt": "Dans la régulation nerveuse, le système limbique met en alerte :",
          "options": [
            "L'hypothalamus",
            "La corticosurrénale directement",
            "Les glandes surrénales uniquement",
            "Le cortex visuel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mécanisme de la leçon : le système limbique met en alerte l'hypothalamus, puis les zones bulbo-médullaires orthosympathiques."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q5",
          "type": "mcq",
          "prompt": "L'un des rôles fondamentaux du système limbique est :",
          "options": [
            "De sécréter le cortisol",
            "D'apprendre la valeur affective des stimulations sensorielles",
            "De dilater les bronches",
            "De produire les larmes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle fondamental indiqué dans l'interprétation de la leçon. Les autres propositions relèvent des effets hormonaux ou des manifestations."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p03_q6",
          "type": "mcq",
          "prompt": "Parmi les comportements suivants, lequel le système limbique aide-t-il à choisir ?",
          "options": [
            "La digestion",
            "Le sommeil profond",
            "La fuite",
            "La croissance"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Défense, attaque, fuite et réaction physique sont les choix de comportement cités pour le système limbique."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04",
      "order": 4,
      "title": "Les catécholamines et la phase d'alarme",
      "summary": "Décrire l'action des catécholamines libérées par la médullosurrénale pendant la phase d'alarme.",
      "conceptExplanation": "Les catécholamines et les glucocorticoïdes interviennent dans tous les cas de réaction au stress.\nLes catécholamines (adrénaline et noradrénaline) sont libérées par la médullosurrénale. Elles préparent l'organisme à faire face à l'agression par la lutte ou par la fuite.\nLa libération de l'adrénaline, pendant la phase d'alarme qui traduit le début d'une réaction émotionnelle, entraîne : l'augmentation de la fréquence et de la force des contractions cardiaques ; la dilatation bronchique améliorant les échanges gazeux respiratoires ; la glycogénolyse hépatique, transformation en glucose du glycogène stocké dans le foie, qui augmente la concentration du glucose dans le sang ; la redistribution du sang vers les muscles.\nL'injection de catécholamines à un rat entraîne la mobilisation des ressources énergétiques et physiologiques de l'animal stressé (effets orthosympathiques).",
      "keyRule": "Phase d'alarme : la médullosurrénale libère adrénaline et noradrénaline, qui mobilisent cœur, bronches, glucose et muscles pour lutter ou fuir.",
      "formulas": [],
      "workedExample": {
        "title": "L'injection de catécholamines au rat (expériences de la leçon)",
        "statement": "On injecte des catécholamines à un rat. Quel résultat la leçon rapporte-t-elle et comment l'interpréter ?",
        "methodSteps": [
          "Résultat observé : mobilisation des ressources énergétiques et physiologiques de l'animal stressé.",
          "Ces effets sont qualifiés d'effets orthosympathiques dans la leçon.",
          "Interprétation : les catécholamines préparent l'organisme à faire face à l'agression par la lutte ou par la fuite."
        ],
        "conclusion": "Les catécholamines mobilisent l'organisme dès la phase d'alarme du stress."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les catécholamines",
          "stepTheme": "Les catécholamines",
          "stepBadge": "Les catécholamines",
          "paragraphText": "• Catécholamines : hormones du stress regroupant l'adrénaline et la noradrénaline.\nElles sont libérées par la médullosurrénale.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q1",
            "type": "mcq",
            "prompt": "Les catécholamines sont :",
            "options": [
              "Le cortisol et la cortisone",
              "L'adrénaline et la noradrénaline",
              "La CRH et l'ACTH",
              "Le glucose et le glycogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit les catécholamines comme l'adrénaline et la noradrénaline, libérées par la médullosurrénale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La glande qui libère l'adrénaline",
          "stepTheme": "La glande qui libère l'adrénaline",
          "stepBadge": "La glande qui libère l'adrénaline",
          "paragraphText": "L'adrénaline est libérée par la médullosurrénale pendant la phase d'alarme.\nC'est la partie de la glande surrénale à distinguer de la corticosurrénale, qui libère les glucocorticoïdes.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q2",
            "type": "mcq",
            "prompt": "L'adrénaline est libérée par :",
            "options": [
              "La corticosurrénale",
              "L'hypophyse antérieure",
              "L'hypothalamus",
              "La médullosurrénale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La médullosurrénale libère les catécholamines. La corticosurrénale libère les glucocorticoïdes, pendant la phase d'adaptation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Effets cardiaques et bronchiques",
          "stepTheme": "Effets cardiaques et bronchiques",
          "stepBadge": "Effets cardiaques et bronchiques",
          "paragraphText": "Pendant la phase d'alarme, l'adrénaline augmente la fréquence et la force des contractions cardiaques.\nElle provoque aussi une dilatation bronchique, qui améliore les échanges gazeux respiratoires.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q3",
            "type": "mcq",
            "prompt": "Pendant la phase d'alarme, l'adrénaline provoque :",
            "options": [
              "Un ralentissement du cœur et un rétrécissement des bronches",
              "Une augmentation de la fréquence et de la force des contractions cardiaques et une dilatation bronchique",
              "Une baisse du glucose sanguin",
              "Un stockage du glucose sous forme de glycogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont deux des modifications physiologiques listées dans la leçon pour la phase d'alarme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La glycogénolyse hépatique",
          "stepTheme": "La glycogénolyse hépatique",
          "stepBadge": "La glycogénolyse hépatique",
          "paragraphText": "La glycogénolyse hépatique est la transformation en glucose du glycogène stocké dans le foie.\nElle augmente la concentration du glucose dans le sang, fournissant de l'énergie rapidement disponible.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q4",
            "type": "mcq",
            "prompt": "La glycogénolyse hépatique consiste à :",
            "options": [
              "Stocker du glucose dans le foie",
              "Transformer le glycogène du foie en glucose",
              "Transformer les protéines en glucose",
              "Libérer des triglycérides du tissu adipeux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée entre parenthèses dans la leçon. La conversion des acides aminés en glucose est la néoglucogenèse, effet des glucocorticoïdes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Lutte ou fuite, pas repos",
          "stepTheme": "Lutte ou fuite, pas repos",
          "stepBadge": "Lutte ou fuite, pas repos",
          "paragraphText": "Piège : les catécholamines ne préparent pas au repos.\nElles préparent l'organisme à faire face à l'agression par la lutte ou par la fuite, avec redistribution du sang vers les muscles.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q5",
            "type": "mcq",
            "prompt": "Les catécholamines préparent l'organisme à :",
            "options": [
              "Dormir et digérer",
              "Faire face à l'agression par la lutte ou par la fuite",
              "Stocker les graisses",
              "Atténuer l'anxiété"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle indiqué dans la leçon pour les catécholamines libérées par la médullosurrénale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le sang redistribué vers les muscles",
          "stepTheme": "Le sang redistribué vers les muscles",
          "stepBadge": "Le sang redistribué vers les muscles",
          "paragraphText": "Parmi les effets de l'adrénaline en phase d'alarme, la leçon cite la redistribution du sang vers les muscles.\nLes muscles, mieux alimentés, sont prêts pour l'effort de lutte ou de fuite.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q6",
            "type": "mcq",
            "prompt": "La redistribution du sang pendant la phase d'alarme se fait vers :",
            "options": [
              "La peau du visage",
              "Le foie uniquement",
              "Les muscles",
              "Le tube digestif uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon cite la redistribution du sang vers les muscles parmi les effets de la libération d'adrénaline."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q1",
          "type": "mcq",
          "prompt": "Les catécholamines sont :",
          "options": [
            "Le cortisol et la cortisone",
            "L'adrénaline et la noradrénaline",
            "La CRH et l'ACTH",
            "Le glucose et le glycogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit les catécholamines comme l'adrénaline et la noradrénaline, libérées par la médullosurrénale."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q2",
          "type": "mcq",
          "prompt": "L'adrénaline est libérée par :",
          "options": [
            "La corticosurrénale",
            "L'hypophyse antérieure",
            "L'hypothalamus",
            "La médullosurrénale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La médullosurrénale libère les catécholamines. La corticosurrénale libère les glucocorticoïdes, pendant la phase d'adaptation."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q3",
          "type": "mcq",
          "prompt": "Pendant la phase d'alarme, l'adrénaline provoque :",
          "options": [
            "Un ralentissement du cœur et un rétrécissement des bronches",
            "Une augmentation de la fréquence et de la force des contractions cardiaques et une dilatation bronchique",
            "Une baisse du glucose sanguin",
            "Un stockage du glucose sous forme de glycogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont deux des modifications physiologiques listées dans la leçon pour la phase d'alarme."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q4",
          "type": "mcq",
          "prompt": "La glycogénolyse hépatique consiste à :",
          "options": [
            "Stocker du glucose dans le foie",
            "Transformer le glycogène du foie en glucose",
            "Transformer les protéines en glucose",
            "Libérer des triglycérides du tissu adipeux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée entre parenthèses dans la leçon. La conversion des acides aminés en glucose est la néoglucogenèse, effet des glucocorticoïdes."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q5",
          "type": "mcq",
          "prompt": "Les catécholamines préparent l'organisme à :",
          "options": [
            "Dormir et digérer",
            "Faire face à l'agression par la lutte ou par la fuite",
            "Stocker les graisses",
            "Atténuer l'anxiété"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle indiqué dans la leçon pour les catécholamines libérées par la médullosurrénale."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p04_q6",
          "type": "mcq",
          "prompt": "La redistribution du sang pendant la phase d'alarme se fait vers :",
          "options": [
            "La peau du visage",
            "Le foie uniquement",
            "Les muscles",
            "Le tube digestif uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon cite la redistribution du sang vers les muscles parmi les effets de la libération d'adrénaline."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05",
      "order": 5,
      "title": "Les glucocorticoïdes et l'axe hypothalamo-hypophysaire",
      "summary": "Expliquer l'action des glucocorticoïdes et la chaîne CRH, ACTH, corticosurrénale avec son rétrocontrôle.",
      "conceptExplanation": "Les glucocorticoïdes (cortisol et cortisone) sont libérés par la corticosurrénale pendant la phase d'ajustement ou d'adaptation, qui suit la réaction d'alarme.\nUne concentration élevée de glucocorticoïdes stimule le catabolisme des protéines et libère les acides aminés ; stimule la consommation des acides aminés par le foie et leur conversion en glucose (néoglucogenèse) : ce sont des hormones hyperglycémiantes ; stimule la libération de triglycérides à partir du tissu adipeux ; inhibe la consommation de glucose par beaucoup de cellules ; évite la vasodilatation généralisée des artérioles due au stress et empêche l'hypotension.\nLe mécanisme hormonal est le suivant : le stimulus stressant augmente les potentiels d'action au niveau de l'hypothalamus et du système limbique ; l'hypothalamus stimulé sécrète la CRH, qui agit sur l'hypophyse antérieure ; l'hypophyse sécrète l'ACTH, qui stimule la corticosurrénale ; la corticosurrénale sécrète les glucocorticoïdes, qui exercent une rétroaction (feed-back) sur le complexe hypothalamo-hypophysaire.\nL'injection de glucocorticoïdes renforce l'action des catécholamines et améliore les fonctions nerveuses, facilitant l'adaptation du comportement.",
      "keyRule": "Chaîne hormonale du stress : hypothalamus (CRH), hypophyse antérieure (ACTH), corticosurrénale (glucocorticoïdes), avec rétrocontrôle sur le complexe hypothalamo-hypophysaire.",
      "formulas": [],
      "workedExample": {
        "title": "Réaliser la chaîne de régulation hormonale (situation d'évaluation)",
        "statement": "Reconstitue, dans l'ordre, la chaîne qui conduit de l'hypothalamus aux glucocorticoïdes.",
        "methodSteps": [
          "Le stimulus stressant augmente les potentiels d'action au niveau de l'hypothalamus et du système limbique.",
          "L'hypothalamus sécrète la CRH, hormone de libération des corticotrophines.",
          "La CRH agit sur l'hypophyse antérieure, qui sécrète l'ACTH.",
          "L'ACTH stimule la corticosurrénale, qui sécrète les glucocorticoïdes.",
          "Les glucocorticoïdes exercent un feed-back sur le complexe hypothalamo-hypophysaire."
        ],
        "conclusion": "La régulation hormonale forme une chaîne hypothalamus, hypophyse, corticosurrénale, fermée par un rétrocontrôle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les glucocorticoïdes",
          "stepTheme": "Les glucocorticoïdes",
          "stepBadge": "Les glucocorticoïdes",
          "paragraphText": "• Glucocorticoïdes : hormones libérées par la corticosurrénale, dont le cortisol et la cortisone.\nLa leçon cite aussi la corticostérone parmi les glucocorticoïdes sécrétés.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q1",
            "type": "mcq",
            "prompt": "Le cortisol et la cortisone sont :",
            "options": [
              "Des catécholamines",
              "Des glucocorticoïdes",
              "Les hormones CRH et ACTH",
              "Des acides aminés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cortisol et la cortisone sont les glucocorticoïdes cités dans la leçon, libérés par la corticosurrénale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase d'adaptation",
          "stepTheme": "La phase d'adaptation",
          "stepBadge": "La phase d'adaptation",
          "paragraphText": "Les glucocorticoïdes sont libérés pendant la phase d'ajustement ou d'adaptation.\nCette phase suit la réaction d'alarme, marquée par la libération de l'adrénaline.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q2",
            "type": "mcq",
            "prompt": "Les glucocorticoïdes sont libérés pendant :",
            "options": [
              "La phase d'alarme",
              "Le sommeil uniquement",
              "La phase d'ajustement ou d'adaptation",
              "La phase préparatoire du mouvement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon situe leur libération dans la phase d'adaptation qui suit la réaction d'alarme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La néoglucogenèse",
          "stepTheme": "La néoglucogenèse",
          "stepBadge": "La néoglucogenèse",
          "paragraphText": "• Néoglucogenèse : conversion en glucose, par le foie, des acides aminés libérés par le catabolisme des protéines.\nElle explique que les glucocorticoïdes sont des hormones hyperglycémiantes.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q3",
            "type": "mcq",
            "prompt": "Les glucocorticoïdes sont dits hyperglycémiants parce qu'ils :",
            "options": [
              "Font baisser le glucose sanguin",
              "Stimulent la conversion des acides aminés en glucose par le foie",
              "Transforment le glucose en glycogène",
              "Augmentent la consommation de glucose par toutes les cellules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La néoglucogenèse hépatique, stimulée par les glucocorticoïdes, augmente le glucose sanguin. Ils inhibent au contraire la consommation de glucose par beaucoup de cellules."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "CRH puis ACTH",
          "stepTheme": "CRH puis ACTH",
          "stepBadge": "CRH puis ACTH",
          "paragraphText": "Méthode : retenir l'ordre des messagers hormonaux.\nHypothalamus : CRH ; hypophyse antérieure : ACTH ; corticosurrénale : glucocorticoïdes.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q4",
            "type": "mcq",
            "prompt": "La CRH sécrétée par l'hypothalamus agit sur :",
            "options": [
              "La corticosurrénale directement",
              "La médullosurrénale",
              "L'hypophyse antérieure",
              "Les muscles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La CRH agit sur l'hypophyse antérieure, qui sécrète alors l'ACTH destinée à la corticosurrénale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le feed-back n'est pas une stimulation simple",
          "stepTheme": "Le feed-back n'est pas une stimulation simple",
          "stepBadge": "Le feed-back n'est pas une stimulation simple",
          "paragraphText": "Piège : croire que les glucocorticoïdes ne font qu'agir sur les organes cibles.\nIls influencent aussi la production de la corticolibérine en exerçant une rétroaction, ou feed-back, sur le complexe hypothalamo-hypophysaire.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q5",
            "type": "mcq",
            "prompt": "Le feed-back des glucocorticoïdes s'exerce sur :",
            "options": [
              "Le complexe hypothalamo-hypophysaire",
              "Les bronches",
              "Le foie uniquement",
              "Les vaisseaux sous-cutanés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le schéma de la leçon montre le feed-back des glucocorticoïdes vers le complexe hypothalamo-hypophysaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Éviter l'hypotension",
          "stepTheme": "Éviter l'hypotension",
          "stepBadge": "Éviter l'hypotension",
          "paragraphText": "Parmi les effets d'une concentration élevée de glucocorticoïdes, la leçon cite la prévention d'une chute de tension.\nIls évitent la vasodilatation généralisée des artérioles due au stress et empêchent l'hypotension.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q6",
            "type": "mcq",
            "prompt": "Une concentration élevée de glucocorticoïdes permet notamment :",
            "options": [
              "De provoquer une hypotension",
              "D'empêcher l'hypotension en évitant la vasodilatation généralisée des artérioles",
              "De stopper les contractions cardiaques",
              "De libérer l'adrénaline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'un des cinq effets listés dans la leçon pour une concentration élevée de glucocorticoïdes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q1",
          "type": "mcq",
          "prompt": "Le cortisol et la cortisone sont :",
          "options": [
            "Des catécholamines",
            "Des glucocorticoïdes",
            "Les hormones CRH et ACTH",
            "Des acides aminés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cortisol et la cortisone sont les glucocorticoïdes cités dans la leçon, libérés par la corticosurrénale."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q2",
          "type": "mcq",
          "prompt": "Les glucocorticoïdes sont libérés pendant :",
          "options": [
            "La phase d'alarme",
            "Le sommeil uniquement",
            "La phase d'ajustement ou d'adaptation",
            "La phase préparatoire du mouvement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon situe leur libération dans la phase d'adaptation qui suit la réaction d'alarme."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q3",
          "type": "mcq",
          "prompt": "Les glucocorticoïdes sont dits hyperglycémiants parce qu'ils :",
          "options": [
            "Font baisser le glucose sanguin",
            "Stimulent la conversion des acides aminés en glucose par le foie",
            "Transforment le glucose en glycogène",
            "Augmentent la consommation de glucose par toutes les cellules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La néoglucogenèse hépatique, stimulée par les glucocorticoïdes, augmente le glucose sanguin. Ils inhibent au contraire la consommation de glucose par beaucoup de cellules."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q4",
          "type": "mcq",
          "prompt": "La CRH sécrétée par l'hypothalamus agit sur :",
          "options": [
            "La corticosurrénale directement",
            "La médullosurrénale",
            "L'hypophyse antérieure",
            "Les muscles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La CRH agit sur l'hypophyse antérieure, qui sécrète alors l'ACTH destinée à la corticosurrénale."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q5",
          "type": "mcq",
          "prompt": "Le feed-back des glucocorticoïdes s'exerce sur :",
          "options": [
            "Le complexe hypothalamo-hypophysaire",
            "Les bronches",
            "Le foie uniquement",
            "Les vaisseaux sous-cutanés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le schéma de la leçon montre le feed-back des glucocorticoïdes vers le complexe hypothalamo-hypophysaire."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p05_q6",
          "type": "mcq",
          "prompt": "Une concentration élevée de glucocorticoïdes permet notamment :",
          "options": [
            "De provoquer une hypotension",
            "D'empêcher l'hypotension en évitant la vasodilatation généralisée des artérioles",
            "De stopper les contractions cardiaques",
            "De libérer l'adrénaline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'un des cinq effets listés dans la leçon pour une concentration élevée de glucocorticoïdes."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06",
      "order": 6,
      "title": "L'intégration neuro-hormonale, le stress et la prise de décision",
      "summary": "Montrer que nerveux et hormonal agissent ensemble et retenir les définitions du stress et de l'émotion.",
      "conceptExplanation": "Lors de toute agression, le système nerveux et le système hormonal mettent en place des mécanismes pour réguler les réactions émotionnelles. Ces mécanismes ne sont pas indépendants.\nLe fonctionnement des divers organes sollicités est cohérent grâce au rôle primordial d'intégrateurs que jouent le système limbique et l'hypothalamus : on parle d'intégration neuro-hormonale.\nLes expériences le montrent : des chats en présence de chiens aboyant augmentent leur sécrétion de cortisol, qui baisse en leur absence ; la stimulation des structures limbiques, de l'hypothalamus dorso-latéral ou du nerf splanchnique entraîne notamment une sécrétion d'adrénaline.\nLe stress est l'état d'alarme qui résulte d'une agression, puis celui de défense et d'adaptation de l'organisme ; c'est aussi une réaction biologique adaptative de l'organisme aux agents agresseurs physiques ou psychiques. L'émotion est une réaction affective transitoire d'assez grande intensité, habituellement provoquée par une stimulation venue de l'environnement.\nPour gérer les émotions et le stress, il faut prendre une bonne décision : identifier le problème posé, analyser différentes options, prendre conseils, prendre la bonne décision, appliquer la bonne décision.",
      "keyRule": "Nerveux et hormonal régulent ensemble, grâce aux intégrateurs que sont le système limbique et l'hypothalamus : c'est l'intégration neuro-hormonale.",
      "formulas": [],
      "workedExample": {
        "title": "Les chats face aux chiens qui aboient (expérience 1 de la leçon)",
        "statement": "Des chats sont mis en présence de chiens aboyant. Qu'observe-t-on et qu'en déduit-on ?",
        "methodSteps": [
          "En présence des chiens aboyant, les chats présentent des réactions de stress.",
          "Leur sécrétion de cortisol augmente.",
          "En l'absence des chiens, cette sécrétion baisse.",
          "Une situation perçue par le système nerveux modifie donc une sécrétion hormonale."
        ],
        "conclusion": "Système nerveux et système hormonal fonctionnent de façon coordonnée : c'est l'intégration neuro-hormonale."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le stress selon la leçon",
          "stepTheme": "Le stress selon la leçon",
          "stepBadge": "Le stress selon la leçon",
          "paragraphText": "• Stress : état d'alarme qui résulte d'une agression, puis état de défense et d'adaptation de l'organisme.\nLa leçon le définit aussi comme une réaction biologique adaptative de l'organisme aux agents agresseurs physiques ou psychiques.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q1",
            "type": "mcq",
            "prompt": "Le stress est défini dans la leçon comme :",
            "options": [
              "Une simple manifestation visible",
              "Une réaction biologique adaptative de l'organisme aux agents agresseurs physiques ou psychiques",
              "Une hormone sécrétée par la surrénale",
              "Une maladie du système limbique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'une des deux définitions du stress données dans la synthèse de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'émotion selon la leçon",
          "stepTheme": "L'émotion selon la leçon",
          "stepBadge": "L'émotion selon la leçon",
          "paragraphText": "• Émotion : réaction affective transitoire d'assez grande intensité, habituellement provoquée par une stimulation venue de l'environnement.\nUne réaction émotionnelle est un ensemble de sentiments et émotions provoqué par des contraintes d'ordre émotionnel, des agressions physiques ou des modifications brutales de l'environnement.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q2",
            "type": "mcq",
            "prompt": "L'émotion est :",
            "options": [
              "Une réaction affective transitoire d'assez grande intensité",
              "Un état permanent sans cause",
              "Une sécrétion hormonale",
              "Un réflexe de la moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition exacte donnée dans la synthèse de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les intégrateurs neuro-hormonaux",
          "stepTheme": "Les intégrateurs neuro-hormonaux",
          "stepBadge": "Les intégrateurs neuro-hormonaux",
          "paragraphText": "La cohérence du fonctionnement des organes sollicités est possible grâce au rôle primordial d'intégrateurs du système limbique et de l'hypothalamus.\nC'est ce qui fonde l'intégration neuro-hormonale.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q3",
            "type": "mcq",
            "prompt": "Les deux intégrateurs de la régulation neuro-hormonale sont :",
            "options": [
              "Le cervelet et la moelle épinière",
              "Le système limbique et l'hypothalamus",
              "L'hypophyse et la thyroïde",
              "Le cortex visuel et le cortex auditif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon attribue le rôle primordial d'intégrateurs au système limbique et à l'hypothalamus."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le cortisol des chats stressés",
          "stepTheme": "Le cortisol des chats stressés",
          "stepBadge": "Le cortisol des chats stressés",
          "paragraphText": "Des réactions de stress de chats en présence de chiens aboyant entraînent une augmentation de la sécrétion de cortisol.\nCette sécrétion baisse en l'absence des chiens.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q4",
            "type": "mcq",
            "prompt": "Chez les chats en présence de chiens aboyant, la sécrétion de cortisol :",
            "options": [
              "Baisse immédiatement",
              "Reste toujours nulle",
              "Augmente, puis baisse en l'absence des chiens",
              "Est remplacée par de l'ACTH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le résultat rapporté dans l'analyse des expériences d'intégration neuro-hormonale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Des mécanismes non indépendants",
          "stepTheme": "Des mécanismes non indépendants",
          "stepBadge": "Des mécanismes non indépendants",
          "paragraphText": "Piège : opposer régulation nerveuse et régulation hormonale comme deux systèmes séparés.\nLa leçon insiste : ces mécanismes de régulation ne sont pas indépendants, et l'organisme contrôle les réactions émotionnelles par leur action conjuguée.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q5",
            "type": "mcq",
            "prompt": "Selon la conclusion de la leçon, l'organisme contrôle les réactions émotionnelles par :",
            "options": [
              "Le système nerveux seul",
              "Le système hormonal seul",
              "L'action conjuguée du système nerveux et du système hormonal",
              "Aucun système de régulation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la partie sur l'intégration : action conjuguée des deux systèmes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les étapes de la prise de décision",
          "stepTheme": "Les étapes de la prise de décision",
          "stepBadge": "Les étapes de la prise de décision",
          "paragraphText": "Pour gérer les émotions et le stress, la leçon propose la prise d'une bonne décision en cinq étapes.\nIdentifier le problème posé, analyser différentes options (avantages et inconvénients), prendre conseils, prendre la bonne décision, appliquer la bonne décision.",
          "exercise": {
            "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q6",
            "type": "mcq",
            "prompt": "Quelle est la première étape de la prise de décision selon la leçon ?",
            "options": [
              "Prendre conseils",
              "Appliquer la bonne décision",
              "Analyser les options",
              "Identifier le problème posé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La liste de la leçon commence par identifier le problème posé, avant l'analyse des options et la prise de conseils."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q1",
          "type": "mcq",
          "prompt": "Le stress est défini dans la leçon comme :",
          "options": [
            "Une simple manifestation visible",
            "Une réaction biologique adaptative de l'organisme aux agents agresseurs physiques ou psychiques",
            "Une hormone sécrétée par la surrénale",
            "Une maladie du système limbique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'une des deux définitions du stress données dans la synthèse de la leçon."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q2",
          "type": "mcq",
          "prompt": "L'émotion est :",
          "options": [
            "Une réaction affective transitoire d'assez grande intensité",
            "Un état permanent sans cause",
            "Une sécrétion hormonale",
            "Un réflexe de la moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition exacte donnée dans la synthèse de la leçon."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q3",
          "type": "mcq",
          "prompt": "Les deux intégrateurs de la régulation neuro-hormonale sont :",
          "options": [
            "Le cervelet et la moelle épinière",
            "Le système limbique et l'hypothalamus",
            "L'hypophyse et la thyroïde",
            "Le cortex visuel et le cortex auditif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon attribue le rôle primordial d'intégrateurs au système limbique et à l'hypothalamus."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q4",
          "type": "mcq",
          "prompt": "Chez les chats en présence de chiens aboyant, la sécrétion de cortisol :",
          "options": [
            "Baisse immédiatement",
            "Reste toujours nulle",
            "Augmente, puis baisse en l'absence des chiens",
            "Est remplacée par de l'ACTH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le résultat rapporté dans l'analyse des expériences d'intégration neuro-hormonale."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q5",
          "type": "mcq",
          "prompt": "Selon la conclusion de la leçon, l'organisme contrôle les réactions émotionnelles par :",
          "options": [
            "Le système nerveux seul",
            "Le système hormonal seul",
            "L'action conjuguée du système nerveux et du système hormonal",
            "Aucun système de régulation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la partie sur l'intégration : action conjuguée des deux systèmes."
        },
        {
          "id": "terminale_a1_svt_l01_reactions_emotionnelles_p06_q6",
          "type": "mcq",
          "prompt": "Quelle est la première étape de la prise de décision selon la leçon ?",
          "options": [
            "Prendre conseils",
            "Appliquer la bonne décision",
            "Analyser les options",
            "Identifier le problème posé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La liste de la leçon commence par identifier le problème posé, avant l'analyse des options et la prise de conseils."
        }
      ]
    }
  ]
};
