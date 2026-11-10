import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L1_Les réactions émotionnelles chez lHomme.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L01_REACTIONS_EMOTIONNELLES: CurriculumChapter = {
  "id": "terminale_a_svt_l01_reactions_emotionnelles",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Les réactions émotionnelles chez l'Homme",
  "summary": "Manifestations visibles et invisibles, causes du stress, régulation nerveuse (système limbique), régulation hormonale (adrénaline, axe CRH-ACTH-cortisol), intégration neuro-hormonale et prise de décision.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "SVT TA_L1_Les réactions émotionnelles chez lHomme.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l01_reactions_emotionnelles_p01",
      "order": 1,
      "title": "Les manifestations des réactions émotionnelles",
      "summary": "Des manifestations visibles et invisibles, dues au stress.",
      "conceptExplanation": "Situation : à la finale de « miss district », une candidate attend les résultats : elle est pâle, silencieuse, transpire à grosses gouttes. À l'appel de son nom, elle court, crie et pleure de joie. C'est une réaction émotionnelle.\n\nTexte (Tavernier, Biologie Tle D) : « Dans une situation de stress, l'organisme présente des manifestations de nature variée : accélération du rythme cardiaque, pâleur du visage, modification du rythme respiratoire, ralentissement du rythme cardiaque, transpiration abondante, flot de paroles ou mutisme, rire ou larmes, sauts. (…) Des dosages hormonaux révèlent une augmentation sensible du taux de certaines hormones dans le sang. C'est le cas de l'adrénaline et des glucocorticoïdes. »\n\nDeux sortes de manifestations :\n- visibles (perceptibles) : pâleur, transpiration, rire, larmes, cris, sauts, mutisme ou flot de paroles, frissons, raidissement musculaire, modification du rythme cardiaque et respiratoire ;\n- invisibles (imperceptibles) : augmentation du taux de certaines hormones dans le sang (adrénaline, cortisol).\n\nExplications :\n- le cœur et la respiration s'accélèrent et la transpiration augmente à cause des hormones libérées dans le sang, qui agissent sur des organes cibles ;\n- la pâleur du visage est due à la diminution du diamètre des vaisseaux sanguins sous la peau (vasoconstriction) ;\n- le rire, le mutisme ou le flot de paroles viennent de centres nerveux du cerveau stimulés ou inhibés.\n\nCes manifestations résultent du STRESS ; l'émotion est une manifestation du stress.",
      "keyRule": "Réaction émotionnelle = manifestations visibles (pâleur, sueur, rire, larmes…) + invisibles (hausse de l'adrénaline et du cortisol dans le sang).",
      "formulas": [],
      "workedExample": {
        "title": "Classer des manifestations",
        "statement": "Avant un examen, un élève a les mains moites, le cœur qui bat vite et un taux d'adrénaline élevé dans le sang. Classe ces manifestations.",
        "methodSteps": [
          "Les mains moites (transpiration) et le cœur rapide se voient ou se sentent : manifestations visibles (perceptibles).",
          "Le taux d'adrénaline ne se voit qu'avec une analyse de sang : manifestation invisible."
        ],
        "conclusion": "Transpiration et cœur rapide : visibles ; hausse de l'adrénaline : invisible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une réaction émotionnelle",
          "stepTheme": "Une réaction émotionnelle",
          "stepBadge": "Une réaction émotionnelle",
          "paragraphText": "Pâleur, silence, transpiration, puis cris et pleurs de joie à l'annonce d'un résultat : ce sont des réactions émotionnelles.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q1",
            "type": "mcq",
            "prompt": "Pendant l'attente des résultats d'un concours, une candidate est pâle, silencieuse et transpire à grosses gouttes ; à l'appel de son nom, elle crie et pleure de joie. Comment appelle-t-on ces réactions ?",
            "options": [
              "Des réflexes médullaires",
              "Des réactions émotionnelles",
              "Des mouvements volontaires",
              "Des maladies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont des réponses de l'organisme à une situation de stress."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Visibles ou invisibles",
          "stepTheme": "Visibles ou invisibles",
          "stepBadge": "Visibles ou invisibles",
          "paragraphText": "Les manifestations sont visibles (pâleur, sueur, rire, larmes, sauts) ou invisibles (hausse de certaines hormones dans le sang).",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q2",
            "type": "mcq",
            "prompt": "Parmi ces manifestations d'une réaction émotionnelle (pâleur du visage, transpiration abondante, augmentation du taux d'adrénaline dans le sang, larmes), laquelle est INVISIBLE ?",
            "options": [
              "La pâleur du visage",
              "La transpiration abondante",
              "L'augmentation du taux d'adrénaline dans le sang",
              "Les larmes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On ne la découvre que par un dosage hormonal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les hormones du stress",
          "stepTheme": "Les hormones du stress",
          "stepBadge": "Les hormones du stress",
          "paragraphText": "« Dans un grand nombre de situations de stress, des dosages hormonaux révèlent une augmentation sensible du taux de certaines hormones dans le sang. C'est le cas de l'adrénaline et des glucocorticoïdes. »",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q3",
            "type": "mcq",
            "prompt": "D'après le texte de Tavernier, quelles hormones voient leur taux augmenter dans le sang lors d'une situation de stress ?",
            "options": [
              "L'insuline et le glucagon",
              "L'adrénaline et les glucocorticoïdes (cortisol)",
              "La testostérone et les œstrogènes",
              "La thyroxine seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux grandes familles d'hormones du stress."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La pâleur",
          "stepTheme": "La pâleur",
          "stepBadge": "La pâleur",
          "paragraphText": "La pâleur du visage est due à la diminution du diamètre des vaisseaux sanguins sous la peau.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q4",
            "type": "mcq",
            "prompt": "Lors d'une forte émotion, le visage d'une personne devient pâle. Quelle est la cause de cette pâleur ?",
            "options": [
              "La diminution du diamètre des vaisseaux sanguins sous-cutanés",
              "L'augmentation du nombre de globules rouges",
              "La transpiration",
              "Le froid"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Moins de sang passe sous la peau : le visage blanchit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des hormones",
          "stepTheme": "Le rôle des hormones",
          "stepBadge": "Le rôle des hormones",
          "paragraphText": "La modification du rythme cardiaque et respiratoire et la transpiration sont dues à des hormones libérées dans le sang, qui agissent sur des organes cibles.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q5",
            "type": "mcq",
            "prompt": "Lors d'une réaction émotionnelle, le cœur accélère, la respiration change et la transpiration augmente. À quoi ces modifications sont-elles dues ?",
            "options": [
              "À des hormones libérées dans le sang qui agissent sur des organes cibles",
              "À la digestion",
              "À un effort physique seulement",
              "À la volonté de la personne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces réponses sont involontaires : elles sont commandées par les hormones et le système nerveux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Rire, mutisme, paroles",
          "stepTheme": "Rire, mutisme, paroles",
          "stepBadge": "Rire, mutisme, paroles",
          "paragraphText": "Certains centres nerveux du cerveau sont stimulés ou inhibés : cela provoque le rire, le mutisme ou le flot de paroles.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q6",
            "type": "mcq",
            "prompt": "Sous le coup d'une émotion, une personne reste muette tandis qu'une autre parle sans s'arrêter. Qu'est-ce qui explique ces réactions ?",
            "options": [
              "Des centres nerveux cérébraux stimulés ou inhibés",
              "Une maladie de la langue",
              "La digestion",
              "Le manque d'oxygène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cerveau commande ces réponses émotionnelles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Stress et émotion",
          "stepTheme": "Stress et émotion",
          "stepBadge": "Stress et émotion",
          "paragraphText": "Ces manifestations résultent du stress : l'émotion est une manifestation du stress. Elles sont involontaires.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q7",
            "type": "mcq",
            "prompt": "Le texte de Tavernier dit que ces réponses « sont des expressions involontaires de la réaction émotionnelle ». Laquelle de ces affirmations est donc FAUSSE ?",
            "options": [
              "Les manifestations émotionnelles résultent du stress",
              "On peut décider de ne pas pâlir sous l'effet d'une forte peur",
              "L'émotion est une manifestation du stress",
              "Certaines manifestations sont visibles, d'autres invisibles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pâleur est involontaire : on ne la commande pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q1",
          "type": "mcq",
          "prompt": "Pendant l'attente des résultats d'un concours, une candidate est pâle, silencieuse et transpire à grosses gouttes ; à l'appel de son nom, elle crie et pleure de joie. Comment appelle-t-on ces réactions ?",
          "options": [
            "Des réflexes médullaires",
            "Des réactions émotionnelles",
            "Des mouvements volontaires",
            "Des maladies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont des réponses de l'organisme à une situation de stress."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q2",
          "type": "mcq",
          "prompt": "Parmi ces manifestations d'une réaction émotionnelle (pâleur du visage, transpiration abondante, augmentation du taux d'adrénaline dans le sang, larmes), laquelle est INVISIBLE ?",
          "options": [
            "La pâleur du visage",
            "La transpiration abondante",
            "L'augmentation du taux d'adrénaline dans le sang",
            "Les larmes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On ne la découvre que par un dosage hormonal."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q3",
          "type": "mcq",
          "prompt": "D'après le texte de Tavernier, quelles hormones voient leur taux augmenter dans le sang lors d'une situation de stress ?",
          "options": [
            "L'insuline et le glucagon",
            "L'adrénaline et les glucocorticoïdes (cortisol)",
            "La testostérone et les œstrogènes",
            "La thyroxine seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux grandes familles d'hormones du stress."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q4",
          "type": "mcq",
          "prompt": "Lors d'une forte émotion, le visage d'une personne devient pâle. Quelle est la cause de cette pâleur ?",
          "options": [
            "La diminution du diamètre des vaisseaux sanguins sous-cutanés",
            "L'augmentation du nombre de globules rouges",
            "La transpiration",
            "Le froid"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Moins de sang passe sous la peau : le visage blanchit."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q5",
          "type": "mcq",
          "prompt": "Lors d'une réaction émotionnelle, le cœur accélère, la respiration change et la transpiration augmente. À quoi ces modifications sont-elles dues ?",
          "options": [
            "À des hormones libérées dans le sang qui agissent sur des organes cibles",
            "À la digestion",
            "À un effort physique seulement",
            "À la volonté de la personne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces réponses sont involontaires : elles sont commandées par les hormones et le système nerveux."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q6",
          "type": "mcq",
          "prompt": "Sous le coup d'une émotion, une personne reste muette tandis qu'une autre parle sans s'arrêter. Qu'est-ce qui explique ces réactions ?",
          "options": [
            "Des centres nerveux cérébraux stimulés ou inhibés",
            "Une maladie de la langue",
            "La digestion",
            "Le manque d'oxygène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cerveau commande ces réponses émotionnelles."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p01_q7",
          "type": "mcq",
          "prompt": "Le texte de Tavernier dit que ces réponses « sont des expressions involontaires de la réaction émotionnelle ». Laquelle de ces affirmations est donc FAUSSE ?",
          "options": [
            "Les manifestations émotionnelles résultent du stress",
            "On peut décider de ne pas pâlir sous l'effet d'une forte peur",
            "L'émotion est une manifestation du stress",
            "Certaines manifestations sont visibles, d'autres invisibles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pâleur est involontaire : on ne la commande pas."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l01_reactions_emotionnelles_p02",
      "order": 2,
      "title": "Les causes des réactions émotionnelles",
      "summary": "Contraintes émotionnelles, agressions physiques, changements brutaux de l'environnement.",
      "conceptExplanation": "Texte (Tavernier, Biologie Tle D) : de très nombreuses situations de la vie courante peuvent représenter un stress. Elles se rangent en trois catégories.\n\n1. Les contraintes d'ordre émotionnel : une peur violente, l'entassement dans une foule, l'inquiétude due à une situation nouvelle, l'approche d'un examen, une colère, des menaces physiques, l'attente d'une opération chirurgicale, la violence de certains films, la joie, l'attente d'un résultat.\n\n2. Les agressions physiques : accidents, traumatismes, hémorragies, douleurs, exercices physiques intenses et prolongés, maladies infectieuses, intoxications.\n\n3. Les modifications brutales de l'environnement : forte et brusque variation de la température, diminution de l'apport d'oxygène, déshydratation.\n\nConclusion : les réactions émotionnelles se manifestent à la suite de certaines situations : ce sont leurs causes, appelées agents stressants.",
      "keyRule": "Trois catégories de causes : contraintes d'ordre émotionnel (peur, joie, examen), agressions physiques (accident, douleur), modifications brutales de l'environnement (chaleur, manque d'O₂, déshydratation).",
      "formulas": [],
      "workedExample": {
        "title": "Associer cause et catégorie",
        "statement": "Associe chaque cause à sa catégorie : déshydratation ; accident ; joie.",
        "methodSteps": [
          "La déshydratation est un changement brutal du milieu (manque d'eau).",
          "L'accident est une atteinte du corps.",
          "La joie est un sentiment."
        ],
        "conclusion": "Déshydratation : modification brutale de l'environnement ; accident : agression physique ; joie : contrainte d'ordre émotionnel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Trois catégories",
          "stepTheme": "Trois catégories",
          "stepBadge": "Trois catégories",
          "paragraphText": "Les causes des réactions émotionnelles : contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q1",
            "type": "mcq",
            "prompt": "En quelles trois catégories range-t-on les causes des réactions émotionnelles chez l'Homme ?",
            "options": [
              "Contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement",
              "Nourriture, sommeil, sport",
              "Hormones, nerfs, muscles",
              "Visibles, invisibles, mixtes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les agents stressants."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Contrainte émotionnelle",
          "stepTheme": "Contrainte émotionnelle",
          "stepBadge": "Contrainte émotionnelle",
          "paragraphText": "Une peur violente, l'approche d'un examen, une colère, la joie, l'attente d'un résultat sont des contraintes d'ordre émotionnel.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q2",
            "type": "mcq",
            "prompt": "L'approche de l'examen du BAC provoque chez un élève des mains moites et un cœur qui bat vite. Dans quelle catégorie de causes se range « l'approche d'un examen » ?",
            "options": [
              "Agression physique",
              "Contrainte d'ordre émotionnel",
              "Modification brutale de l'environnement",
              "Maladie infectieuse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une inquiétude, une pression psychologique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Agression physique",
          "stepTheme": "Agression physique",
          "stepBadge": "Agression physique",
          "paragraphText": "Accidents, traumatismes, hémorragies, douleurs, exercices intenses et prolongés, intoxications sont des agressions physiques.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q3",
            "type": "mcq",
            "prompt": "Les causes des réactions émotionnelles sont : contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement. Dans quelle catégorie se range un accident de la route ?",
            "options": [
              "Contrainte d'ordre émotionnel",
              "Agression physique",
              "Modification brutale de l'environnement",
              "Aucune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'accident atteint directement le corps."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Changement du milieu",
          "stepTheme": "Changement du milieu",
          "stepBadge": "Changement du milieu",
          "paragraphText": "Une brusque variation de la température, une diminution de l'apport d'oxygène, une déshydratation sont des modifications brutales de l'environnement.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q4",
            "type": "mcq",
            "prompt": "Les causes des réactions émotionnelles sont : contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement. Dans quelle catégorie se range la déshydratation ?",
            "options": [
              "Contrainte d'ordre émotionnel",
              "Agression physique",
              "Modification brutale de l'environnement",
              "Aucune"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est un changement brutal des conditions du milieu."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La joie aussi",
          "stepTheme": "La joie aussi",
          "stepBadge": "La joie aussi",
          "paragraphText": "Une émotion agréable comme la joie est aussi une contrainte d'ordre émotionnel : elle déclenche une réaction de stress.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q5",
            "type": "mcq",
            "prompt": "Une candidate pleure et crie de joie en apprenant sa victoire. La joie peut-elle être une cause de réaction émotionnelle ?",
            "options": [
              "Non, seules les mauvaises nouvelles causent une réaction émotionnelle",
              "Oui, c'est une contrainte d'ordre émotionnel",
              "Oui, c'est une agression physique",
              "Oui, c'est une modification de l'environnement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une émotion forte, agréable ou non, provoque une réaction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un exercice intense",
          "stepTheme": "Un exercice intense",
          "stepBadge": "Un exercice intense",
          "paragraphText": "Les exercices physiques intenses et prolongés sont rangés parmi les agressions physiques.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q6",
            "type": "mcq",
            "prompt": "Un athlète court un marathon de 42 km sous le soleil. Selon le texte de Tavernier, dans quelle catégorie de causes de stress se range un exercice physique intense et prolongé ?",
            "options": [
              "Contrainte d'ordre émotionnel",
              "Agression physique",
              "Modification brutale de l'environnement",
              "Ce n'est pas une cause de stress"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'effort intense agresse l'organisme."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Associer",
          "stepTheme": "Associer",
          "stepBadge": "Associer",
          "paragraphText": "Déshydratation → modification brutale de l'environnement ; accident → agression physique ; joie → contrainte d'ordre émotionnel.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q7",
            "type": "mcq",
            "prompt": "Associe les causes (déshydratation, accident, joie) aux catégories (agression physique, contrainte d'ordre émotionnel, modification brutale de l'environnement). Quelle est la bonne association ?",
            "options": [
              "Déshydratation – agression physique ; accident – contrainte émotionnelle ; joie – environnement",
              "Déshydratation – environnement ; accident – agression physique ; joie – contrainte émotionnelle",
              "Déshydratation – contrainte émotionnelle ; accident – environnement ; joie – agression physique",
              "Les trois sont des agressions physiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque cause correspond à une seule catégorie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q1",
          "type": "mcq",
          "prompt": "En quelles trois catégories range-t-on les causes des réactions émotionnelles chez l'Homme ?",
          "options": [
            "Contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement",
            "Nourriture, sommeil, sport",
            "Hormones, nerfs, muscles",
            "Visibles, invisibles, mixtes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les agents stressants."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q2",
          "type": "mcq",
          "prompt": "L'approche de l'examen du BAC provoque chez un élève des mains moites et un cœur qui bat vite. Dans quelle catégorie de causes se range « l'approche d'un examen » ?",
          "options": [
            "Agression physique",
            "Contrainte d'ordre émotionnel",
            "Modification brutale de l'environnement",
            "Maladie infectieuse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une inquiétude, une pression psychologique."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q3",
          "type": "mcq",
          "prompt": "Les causes des réactions émotionnelles sont : contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement. Dans quelle catégorie se range un accident de la route ?",
          "options": [
            "Contrainte d'ordre émotionnel",
            "Agression physique",
            "Modification brutale de l'environnement",
            "Aucune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'accident atteint directement le corps."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q4",
          "type": "mcq",
          "prompt": "Les causes des réactions émotionnelles sont : contraintes d'ordre émotionnel, agressions physiques, modifications brutales de l'environnement. Dans quelle catégorie se range la déshydratation ?",
          "options": [
            "Contrainte d'ordre émotionnel",
            "Agression physique",
            "Modification brutale de l'environnement",
            "Aucune"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est un changement brutal des conditions du milieu."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q5",
          "type": "mcq",
          "prompt": "Une candidate pleure et crie de joie en apprenant sa victoire. La joie peut-elle être une cause de réaction émotionnelle ?",
          "options": [
            "Non, seules les mauvaises nouvelles causent une réaction émotionnelle",
            "Oui, c'est une contrainte d'ordre émotionnel",
            "Oui, c'est une agression physique",
            "Oui, c'est une modification de l'environnement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une émotion forte, agréable ou non, provoque une réaction."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q6",
          "type": "mcq",
          "prompt": "Un athlète court un marathon de 42 km sous le soleil. Selon le texte de Tavernier, dans quelle catégorie de causes de stress se range un exercice physique intense et prolongé ?",
          "options": [
            "Contrainte d'ordre émotionnel",
            "Agression physique",
            "Modification brutale de l'environnement",
            "Ce n'est pas une cause de stress"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'effort intense agresse l'organisme."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p02_q7",
          "type": "mcq",
          "prompt": "Associe les causes (déshydratation, accident, joie) aux catégories (agression physique, contrainte d'ordre émotionnel, modification brutale de l'environnement). Quelle est la bonne association ?",
          "options": [
            "Déshydratation – agression physique ; accident – contrainte émotionnelle ; joie – environnement",
            "Déshydratation – environnement ; accident – agression physique ; joie – contrainte émotionnelle",
            "Déshydratation – contrainte émotionnelle ; accident – environnement ; joie – agression physique",
            "Les trois sont des agressions physiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque cause correspond à une seule catégorie."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l01_reactions_emotionnelles_p03",
      "order": 3,
      "title": "La régulation nerveuse : le système limbique",
      "summary": "Le « cerveau émotionnel » est le système limbique ; le cortex atténue les émotions.",
      "conceptExplanation": "Le système limbique : un ensemble de structures au centre du cerveau. Il comprend une partie du cortex (cingulum, hippocampe) et des noyaux sous-corticaux associés (amygdale, septum). Il est étroitement lié à l'hypothalamus.\n\nCas pathologiques humains (document 1) :\n- la destruction du système limbique entraîne une indifférence émotionnelle chez des sujets très agressifs ;\n- les malades atteints de lésions de l'hippocampe présentent, lors d'une crise de rage, des symptômes et des paroxysmes d'anxiété ;\n- la lésion du cortex, chez des individus dont l'hypothalamus est intact, provoque des crises de peur ou des pleurs exagérés pour des causes insignifiantes.\n\nCe qu'on en déduit :\n- le système limbique joue un rôle capital dans le déclenchement des émotions : c'est le « cerveau émotionnel » ; il apprend la valeur affective des stimulations et intervient dans le choix du comportement (défense, attaque, fuite) ;\n- l'hippocampe atténue l'anxiété ;\n- le cortex atténue (modère) les réactions émotionnelles.\n\nMécanisme de la régulation nerveuse :\n1. le système nerveux reçoit les informations de l'environnement ; elles arrivent dans les aires corticales sensorielles ;\n2. des messages nerveux partent de ces aires vers le système limbique ;\n3. le système limbique met en alerte l'hypothalamus, puis les zones bulbo-médullaires orthosympathiques ;\n4. il s'ensuit une réponse somatique (effecteurs : cœur, muscles, glandes).",
      "keyRule": "Régulation nerveuse : aires sensorielles → système limbique → hypothalamus → centres orthosympathiques du bulbe et de la moelle → effecteurs. Le cortex et l'hippocampe modèrent les émotions.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter une lésion",
        "statement": "Une personne dont le cortex est lésé (hypothalamus intact) pleure de façon exagérée pour une cause insignifiante. Que déduire sur le rôle du cortex ?",
        "methodSteps": [
          "Sans cortex, les réactions émotionnelles sont plus fortes que la normale.",
          "Donc, normalement, le cortex les freine."
        ],
        "conclusion": "Le cortex atténue les réactions émotionnelles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système limbique",
          "stepTheme": "Le système limbique",
          "stepBadge": "Le système limbique",
          "paragraphText": "Le système limbique comprend une partie du cortex (cingulum, hippocampe) et des noyaux sous-corticaux (amygdale, septum).",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q1",
            "type": "mcq",
            "prompt": "Parmi ces structures du cerveau, lesquelles font partie du système limbique ?",
            "options": [
              "Le cervelet et la moelle épinière",
              "L'hippocampe, le cingulum, l'amygdale et le septum",
              "Le lobe occipital seulement",
              "L'hypophyse et la thyroïde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ces structures entourent le centre du cerveau, près de l'hypothalamus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Sans système limbique",
          "stepTheme": "Sans système limbique",
          "stepBadge": "Sans système limbique",
          "paragraphText": "« La destruction du système limbique entraîne une indifférence émotionnelle chez les sujets très agressifs. »",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q2",
            "type": "mcq",
            "prompt": "On observe que « la destruction du système limbique entraîne une indifférence émotionnelle chez les sujets très agressifs ». Que peut-on en déduire ?",
            "options": [
              "Le système limbique joue un rôle capital dans le déclenchement des émotions",
              "Le système limbique commande la digestion",
              "Le système limbique n'a aucun rôle",
              "Le système limbique produit l'adrénaline"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans lui, plus d'émotions : c'est le « cerveau émotionnel »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'hippocampe",
          "stepTheme": "L'hippocampe",
          "stepBadge": "L'hippocampe",
          "paragraphText": "« Les malades atteints de lésions de l'hippocampe présentent, lors d'une crise de rage, des symptômes d'anxiété et des paroxysmes d'anxiété. »",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q3",
            "type": "mcq",
            "prompt": "Des malades dont l'hippocampe est lésé présentent, lors d'une crise de rage, de très fortes crises d'anxiété. Quel est donc le rôle normal de l'hippocampe ?",
            "options": [
              "Il augmente l'anxiété",
              "Il atténue l'anxiété",
              "Il commande les muscles",
              "Il produit le cortisol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans lui, l'anxiété n'est plus freinée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cortex modère",
          "stepTheme": "Le cortex modère",
          "stepBadge": "Le cortex modère",
          "paragraphText": "« La lésion du cortex, chez des individus dont l'hypothalamus est intact, provoque des crises de peur ou des pleurs exagérés pour des causes insignifiantes. »",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q4",
            "type": "mcq",
            "prompt": "Chez des personnes dont le cortex est lésé mais l'hypothalamus intact, on observe des crises de peur ou des pleurs exagérés pour des causes insignifiantes. Quel est le rôle normal du cortex ?",
            "options": [
              "Il déclenche les émotions",
              "Il atténue les réactions émotionnelles",
              "Il produit les larmes",
              "Il n'a aucun rôle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cortex freine les réactions émotionnelles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Choisir un comportement",
          "stepTheme": "Choisir un comportement",
          "stepBadge": "Choisir un comportement",
          "paragraphText": "Le système limbique apprend la valeur affective des stimulations et intervient dans le choix du comportement : défense, attaque, fuite.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q5",
            "type": "mcq",
            "prompt": "Face à un chien qui aboie, une personne décide de fuir. Quelle structure nerveuse intervient dans le choix de ce comportement émotionnel (défense, attaque ou fuite) ?",
            "options": [
              "Le système limbique",
              "Le cervelet",
              "La rétine",
              "Le muscle de la jambe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il donne une valeur affective à ce que nous percevons."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le trajet nerveux",
          "stepTheme": "Le trajet nerveux",
          "stepBadge": "Le trajet nerveux",
          "paragraphText": "Aires sensorielles → système limbique → hypothalamus → zones bulbo-médullaires orthosympathiques → réponse somatique.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q6",
            "type": "mcq",
            "prompt": "Dans la régulation nerveuse des réactions émotionnelles, les messages partent des aires corticales sensorielles et arrivent au système limbique. Quelle structure le système limbique met-il ensuite en alerte ?",
            "options": [
              "L'hypothalamus",
              "Le cervelet",
              "L'œil",
              "La thyroïde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hypothalamus alerte ensuite les centres orthosympathiques du bulbe et de la moelle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Le cerveau émotionnel",
          "stepTheme": "Le cerveau émotionnel",
          "stepBadge": "Le cerveau émotionnel",
          "paragraphText": "Le cerveau émotionnel se trouve dans le système limbique ; l'organisme contrôle les réactions émotionnelles par le système nerveux.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q7",
            "type": "mcq",
            "prompt": "D'après l'étude des cas pathologiques (système limbique, hippocampe, cortex), où se trouve le « cerveau émotionnel » ?",
            "options": [
              "Dans le système limbique",
              "Dans le cervelet",
              "Dans le lobe occipital",
              "Dans la moelle épinière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion de la régulation nerveuse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q1",
          "type": "mcq",
          "prompt": "Parmi ces structures du cerveau, lesquelles font partie du système limbique ?",
          "options": [
            "Le cervelet et la moelle épinière",
            "L'hippocampe, le cingulum, l'amygdale et le septum",
            "Le lobe occipital seulement",
            "L'hypophyse et la thyroïde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ces structures entourent le centre du cerveau, près de l'hypothalamus."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q2",
          "type": "mcq",
          "prompt": "On observe que « la destruction du système limbique entraîne une indifférence émotionnelle chez les sujets très agressifs ». Que peut-on en déduire ?",
          "options": [
            "Le système limbique joue un rôle capital dans le déclenchement des émotions",
            "Le système limbique commande la digestion",
            "Le système limbique n'a aucun rôle",
            "Le système limbique produit l'adrénaline"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans lui, plus d'émotions : c'est le « cerveau émotionnel »."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q3",
          "type": "mcq",
          "prompt": "Des malades dont l'hippocampe est lésé présentent, lors d'une crise de rage, de très fortes crises d'anxiété. Quel est donc le rôle normal de l'hippocampe ?",
          "options": [
            "Il augmente l'anxiété",
            "Il atténue l'anxiété",
            "Il commande les muscles",
            "Il produit le cortisol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans lui, l'anxiété n'est plus freinée."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q4",
          "type": "mcq",
          "prompt": "Chez des personnes dont le cortex est lésé mais l'hypothalamus intact, on observe des crises de peur ou des pleurs exagérés pour des causes insignifiantes. Quel est le rôle normal du cortex ?",
          "options": [
            "Il déclenche les émotions",
            "Il atténue les réactions émotionnelles",
            "Il produit les larmes",
            "Il n'a aucun rôle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cortex freine les réactions émotionnelles."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q5",
          "type": "mcq",
          "prompt": "Face à un chien qui aboie, une personne décide de fuir. Quelle structure nerveuse intervient dans le choix de ce comportement émotionnel (défense, attaque ou fuite) ?",
          "options": [
            "Le système limbique",
            "Le cervelet",
            "La rétine",
            "Le muscle de la jambe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il donne une valeur affective à ce que nous percevons."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q6",
          "type": "mcq",
          "prompt": "Dans la régulation nerveuse des réactions émotionnelles, les messages partent des aires corticales sensorielles et arrivent au système limbique. Quelle structure le système limbique met-il ensuite en alerte ?",
          "options": [
            "L'hypothalamus",
            "Le cervelet",
            "L'œil",
            "La thyroïde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hypothalamus alerte ensuite les centres orthosympathiques du bulbe et de la moelle."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p03_q7",
          "type": "mcq",
          "prompt": "D'après l'étude des cas pathologiques (système limbique, hippocampe, cortex), où se trouve le « cerveau émotionnel » ?",
          "options": [
            "Dans le système limbique",
            "Dans le cervelet",
            "Dans le lobe occipital",
            "Dans la moelle épinière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion de la régulation nerveuse."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l01_reactions_emotionnelles_p04",
      "order": 4,
      "title": "Les catécholamines : la phase d'alarme",
      "summary": "L'adrénaline prépare l'organisme à lutter ou à fuir.",
      "conceptExplanation": "Expérience : on injecte à un rat des catécholamines. Résultat : mobilisation des ressources énergétiques et physiologiques de l'animal (effets orthosympathiques).\n\nLes catécholamines (adrénaline et noradrénaline) sont libérées par la MÉDULLOSURRÉNALE (la partie centrale de la glande surrénale, au-dessus du rein). Elles préparent l'organisme à faire face à l'agression par la LUTTE ou par la FUITE.\n\nLeur libération a lieu pendant la phase d'alarme, au début de la réaction émotionnelle. Effets de l'adrénaline :\n- augmentation de la fréquence et de la force des contractions du cœur ;\n- dilatation des bronches, qui améliore les échanges respiratoires ;\n- glycogénolyse dans le foie : le glycogène stocké est transformé en glucose, ce qui augmente le glucose dans le sang (hyperglycémie) ;\n- redistribution du sang vers les muscles.\n\nCommande nerveuse : la médullosurrénale est commandée par le nerf splanchnique (système orthosympathique). Sa stimulation entraîne la sécrétion d'adrénaline ; sa section tarit définitivement les sécrétions médullosurrénaliennes. Un stress émotionnel peut multiplier par 30 le taux de catécholamines.",
      "keyRule": "Médullosurrénale → adrénaline et noradrénaline (phase d'alarme) : cœur plus rapide et plus fort, bronches dilatées, glucose libéré par le foie, sang vers les muscles.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi le cœur bat vite ?",
        "statement": "Un élève est poursuivi par un chien : son cœur bat très vite et il court plus vite que d'habitude. Explique.",
        "methodSteps": [
          "La peur déclenche la phase d'alarme : la médullosurrénale libère de l'adrénaline.",
          "L'adrénaline accélère le cœur, dilate les bronches, libère du glucose et envoie le sang vers les muscles."
        ],
        "conclusion": "L'organisme est préparé à la fuite grâce à l'adrénaline."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les catécholamines",
          "stepTheme": "Les catécholamines",
          "stepBadge": "Les catécholamines",
          "paragraphText": "Les catécholamines (adrénaline et noradrénaline) sont libérées par la médullosurrénale.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q1",
            "type": "mcq",
            "prompt": "Quelle glande libère les catécholamines (adrénaline et noradrénaline) lors d'une réaction émotionnelle ?",
            "options": [
              "La corticosurrénale",
              "La médullosurrénale",
              "La thyroïde",
              "Le pancréas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La corticosurrénale, elle, libère les glucocorticoïdes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Lutter ou fuir",
          "stepTheme": "Lutter ou fuir",
          "stepBadge": "Lutter ou fuir",
          "paragraphText": "Les catécholamines préparent l'organisme à faire face à l'agression par la lutte ou par la fuite.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q2",
            "type": "mcq",
            "prompt": "Lors d'une agression, la médullosurrénale libère de l'adrénaline. À quoi cette hormone prépare-t-elle l'organisme ?",
            "options": [
              "À dormir",
              "À lutter ou à fuir",
              "À digérer",
              "À grandir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle mobilise l'énergie pour réagir vite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La phase d'alarme",
          "stepTheme": "La phase d'alarme",
          "stepBadge": "La phase d'alarme",
          "paragraphText": "L'adrénaline est libérée pendant la phase d'alarme, qui marque le début de la réaction émotionnelle.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q3",
            "type": "mcq",
            "prompt": "Une réaction au stress comporte une phase d'alarme puis une phase d'adaptation. Pendant quelle phase l'adrénaline est-elle libérée ?",
            "options": [
              "La phase d'alarme, au début de la réaction",
              "La phase d'adaptation, à la fin",
              "Pendant le sommeil seulement",
              "Jamais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les glucocorticoïdes, eux, agissent pendant la phase d'adaptation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cœur",
          "stepTheme": "Le cœur",
          "stepBadge": "Le cœur",
          "paragraphText": "L'adrénaline augmente la fréquence et la force des contractions cardiaques.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q4",
            "type": "mcq",
            "prompt": "Sous l'effet de l'adrénaline libérée pendant la phase d'alarme, comment évoluent les contractions du cœur ?",
            "options": [
              "Elles deviennent plus rapides et plus fortes",
              "Elles s'arrêtent",
              "Elles ralentissent toujours",
              "Elles ne changent pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sang circule plus vite vers les organes qui travaillent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La glycogénolyse",
          "stepTheme": "La glycogénolyse",
          "stepBadge": "La glycogénolyse",
          "paragraphText": "La glycogénolyse hépatique est la transformation en glucose du glycogène stocké dans le foie ; elle augmente le glucose dans le sang.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q5",
            "type": "mcq",
            "prompt": "L'adrénaline provoque une glycogénolyse hépatique. De quoi s'agit-il ?",
            "options": [
              "La transformation en glucose du glycogène stocké dans le foie",
              "La destruction des globules rouges",
              "La fabrication de protéines",
              "La digestion des graisses dans l'intestin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le glucose libéré fournit de l'énergie aux muscles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Bronches et muscles",
          "stepTheme": "Bronches et muscles",
          "stepBadge": "Bronches et muscles",
          "paragraphText": "L'adrénaline dilate les bronches (meilleurs échanges respiratoires) et redistribue le sang vers les muscles.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q6",
            "type": "mcq",
            "prompt": "Parmi ces effets, lequel n'est PAS un effet de l'adrénaline libérée lors de la phase d'alarme ?",
            "options": [
              "La dilatation des bronches",
              "La redistribution du sang vers les muscles",
              "L'augmentation du glucose dans le sang",
              "Le ralentissement de la respiration et l'endormissement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'adrénaline active l'organisme ; elle ne l'endort pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le nerf splanchnique",
          "stepTheme": "Le nerf splanchnique",
          "stepBadge": "Le nerf splanchnique",
          "paragraphText": "La stimulation du nerf splanchnique entraîne la sécrétion d'adrénaline ; sa section tarit définitivement les sécrétions médullosurrénaliennes.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q7",
            "type": "mcq",
            "prompt": "Chez un chat, la stimulation du nerf splanchnique provoque une sécrétion d'adrénaline, et sa section tarit définitivement les sécrétions de la médullosurrénale. Que montre cette expérience ?",
            "options": [
              "La médullosurrénale est commandée par le système nerveux",
              "La médullosurrénale fonctionne seule",
              "Le nerf splanchnique produit l'adrénaline",
              "L'adrénaline vient du foie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est un lien entre système nerveux et système hormonal."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q1",
          "type": "mcq",
          "prompt": "Quelle glande libère les catécholamines (adrénaline et noradrénaline) lors d'une réaction émotionnelle ?",
          "options": [
            "La corticosurrénale",
            "La médullosurrénale",
            "La thyroïde",
            "Le pancréas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La corticosurrénale, elle, libère les glucocorticoïdes."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q2",
          "type": "mcq",
          "prompt": "Lors d'une agression, la médullosurrénale libère de l'adrénaline. À quoi cette hormone prépare-t-elle l'organisme ?",
          "options": [
            "À dormir",
            "À lutter ou à fuir",
            "À digérer",
            "À grandir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle mobilise l'énergie pour réagir vite."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q3",
          "type": "mcq",
          "prompt": "Une réaction au stress comporte une phase d'alarme puis une phase d'adaptation. Pendant quelle phase l'adrénaline est-elle libérée ?",
          "options": [
            "La phase d'alarme, au début de la réaction",
            "La phase d'adaptation, à la fin",
            "Pendant le sommeil seulement",
            "Jamais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les glucocorticoïdes, eux, agissent pendant la phase d'adaptation."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q4",
          "type": "mcq",
          "prompt": "Sous l'effet de l'adrénaline libérée pendant la phase d'alarme, comment évoluent les contractions du cœur ?",
          "options": [
            "Elles deviennent plus rapides et plus fortes",
            "Elles s'arrêtent",
            "Elles ralentissent toujours",
            "Elles ne changent pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sang circule plus vite vers les organes qui travaillent."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q5",
          "type": "mcq",
          "prompt": "L'adrénaline provoque une glycogénolyse hépatique. De quoi s'agit-il ?",
          "options": [
            "La transformation en glucose du glycogène stocké dans le foie",
            "La destruction des globules rouges",
            "La fabrication de protéines",
            "La digestion des graisses dans l'intestin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le glucose libéré fournit de l'énergie aux muscles."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q6",
          "type": "mcq",
          "prompt": "Parmi ces effets, lequel n'est PAS un effet de l'adrénaline libérée lors de la phase d'alarme ?",
          "options": [
            "La dilatation des bronches",
            "La redistribution du sang vers les muscles",
            "L'augmentation du glucose dans le sang",
            "Le ralentissement de la respiration et l'endormissement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'adrénaline active l'organisme ; elle ne l'endort pas."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p04_q7",
          "type": "mcq",
          "prompt": "Chez un chat, la stimulation du nerf splanchnique provoque une sécrétion d'adrénaline, et sa section tarit définitivement les sécrétions de la médullosurrénale. Que montre cette expérience ?",
          "options": [
            "La médullosurrénale est commandée par le système nerveux",
            "La médullosurrénale fonctionne seule",
            "Le nerf splanchnique produit l'adrénaline",
            "L'adrénaline vient du foie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est un lien entre système nerveux et système hormonal."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l01_reactions_emotionnelles_p05",
      "order": 5,
      "title": "Les glucocorticoïdes et l'axe CRH – ACTH",
      "summary": "La phase d'adaptation : hypothalamus, hypophyse, corticosurrénale et rétrocontrôle.",
      "conceptExplanation": "Expérience : on injecte à un rat des glucocorticoïdes. Résultat : renforcement de l'action des catécholamines et amélioration des fonctions nerveuses, ce qui facilite l'adaptation du comportement.\n\nLes glucocorticoïdes (cortisol, cortisone, corticostérone) sont libérés par la CORTICOSURRÉNALE (la partie externe de la surrénale), pendant la phase d'ajustement ou d'adaptation qui suit l'alarme. Effets :\n- dégradation des protéines et libération d'acides aminés ;\n- transformation de ces acides aminés en glucose par le foie (néoglucogenèse) : ce sont des hormones hyperglycémiantes ;\n- libération de graisses (triglycérides) à partir du tissu adipeux ;\n- baisse de la consommation de glucose par beaucoup de cellules ;\n- ils empêchent la vasodilatation généralisée et donc l'hypotension.\n\nMécanisme de la régulation hormonale :\n1. le stimulus stressant augmente l'activité (potentiels d'action) de l'hypothalamus et du système limbique ;\n2. l'hypothalamus sécrète la CRH (corticolibérine), qui agit sur l'hypophyse antérieure ;\n3. l'hypophyse sécrète l'ACTH (corticotrophine), qui stimule la corticosurrénale ;\n4. la corticosurrénale sécrète les glucocorticoïdes ;\n5. les glucocorticoïdes agissent en retour sur l'hypothalamus et l'hypophyse : c'est le RÉTROCONTRÔLE (feed-back).\n\nPrécision : en temps normal ce rétrocontrôle est NÉGATIF : quand le cortisol augmente, il freine la sécrétion de CRH et d'ACTH, ce qui évite un excès d'hormone (le document indique « + ou − »).",
      "keyRule": "Stress → hypothalamus (CRH) → hypophyse (ACTH) → corticosurrénale (cortisol) ; le cortisol freine en retour l'hypothalamus et l'hypophyse (rétrocontrôle négatif).",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner l'axe hormonal",
        "statement": "Remets dans l'ordre : ACTH ; glucocorticoïdes ; CRH ; stimulus stressant.",
        "methodSteps": [
          "Le stimulus stressant active l'hypothalamus, qui sécrète la CRH.",
          "La CRH fait sécréter l'ACTH par l'hypophyse.",
          "L'ACTH fait sécréter les glucocorticoïdes par la corticosurrénale."
        ],
        "conclusion": "Stimulus stressant → CRH → ACTH → glucocorticoïdes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les glucocorticoïdes",
          "stepTheme": "Les glucocorticoïdes",
          "stepBadge": "Les glucocorticoïdes",
          "paragraphText": "Les glucocorticoïdes (cortisol, cortisone) sont libérés par la corticosurrénale pendant la phase d'adaptation.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q1",
            "type": "mcq",
            "prompt": "Quelle glande libère les glucocorticoïdes (cortisol, cortisone) lors d'une réaction au stress ?",
            "options": [
              "La médullosurrénale",
              "La corticosurrénale",
              "L'hypothalamus",
              "Le foie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cortico- : la partie externe (le cortex) de la surrénale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des hormones hyperglycémiantes",
          "stepTheme": "Des hormones hyperglycémiantes",
          "stepBadge": "Des hormones hyperglycémiantes",
          "paragraphText": "Les glucocorticoïdes font transformer les acides aminés en glucose par le foie (néoglucogenèse) : ils sont hyperglycémiants.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q2",
            "type": "mcq",
            "prompt": "Les glucocorticoïdes stimulent la conversion des acides aminés en glucose par le foie (néoglucogenèse). Quel effet cela a-t-il sur le taux de glucose dans le sang ?",
            "options": [
              "Il diminue",
              "Il augmente : ce sont des hormones hyperglycémiantes",
              "Il ne change pas",
              "Il devient nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'organisme dispose ainsi de plus d'énergie pour s'adapter."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La CRH",
          "stepTheme": "La CRH",
          "stepBadge": "La CRH",
          "paragraphText": "Stimulé par le stress, l'hypothalamus sécrète la CRH (corticolibérine), qui agit sur l'hypophyse antérieure.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q3",
            "type": "mcq",
            "prompt": "Dans la régulation hormonale des réactions émotionnelles, quelle hormone l'hypothalamus sécrète-t-il pour agir sur l'hypophyse ?",
            "options": [
              "La CRH (corticolibérine)",
              "L'ACTH",
              "Le cortisol",
              "L'adrénaline"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CRH : hormone de libération de la corticotrophine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'ACTH",
          "stepTheme": "L'ACTH",
          "stepBadge": "L'ACTH",
          "paragraphText": "Stimulée par la CRH, l'hypophyse sécrète l'ACTH (corticotrophine), qui stimule la corticosurrénale.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q4",
            "type": "mcq",
            "prompt": "L'hypothalamus sécrète la CRH, qui agit sur l'hypophyse. Quelle hormone l'hypophyse sécrète-t-elle alors pour stimuler la corticosurrénale ?",
            "options": [
              "La CRH",
              "L'ACTH (corticotrophine)",
              "L'adrénaline",
              "L'insuline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ACTH fait ensuite libérer le cortisol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "L'ordre de l'axe",
          "stepTheme": "L'ordre de l'axe",
          "stepBadge": "L'ordre de l'axe",
          "paragraphText": "Stimulus stressant → hypothalamus (CRH) → hypophyse (ACTH) → corticosurrénale (glucocorticoïdes).",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q5",
            "type": "mcq",
            "prompt": "Quel est le bon ordre des organes dans la régulation hormonale du stress (axe CRH – ACTH) ?",
            "options": [
              "Corticosurrénale → hypophyse → hypothalamus",
              "Hypothalamus → hypophyse → corticosurrénale",
              "Hypophyse → hypothalamus → corticosurrénale",
              "Médullosurrénale → hypothalamus → hypophyse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque organe commande le suivant par une hormone."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le rétrocontrôle",
          "stepTheme": "Le rétrocontrôle",
          "stepBadge": "Le rétrocontrôle",
          "paragraphText": "Les glucocorticoïdes agissent en retour sur l'hypothalamus et l'hypophyse : c'est le rétrocontrôle (feed-back), normalement négatif.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q6",
            "type": "mcq",
            "prompt": "Quand le taux de cortisol dans le sang devient élevé, il agit en retour sur l'hypothalamus et l'hypophyse. Comment s'appelle ce mécanisme et quel est son effet habituel ?",
            "options": [
              "Un rétrocontrôle négatif : il freine la sécrétion de CRH et d'ACTH",
              "Une glycogénolyse : il libère du glucose",
              "Une vasoconstriction : il fait pâlir",
              "Un réflexe : il fait bouger un muscle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce frein évite un excès de cortisol."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre",
          "stepTheme": "Ne pas confondre",
          "stepBadge": "Ne pas confondre",
          "paragraphText": "Médullosurrénale → catécholamines (alarme) ; corticosurrénale → glucocorticoïdes (adaptation).",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q7",
            "type": "mcq",
            "prompt": "Un élève écrit : « La médullosurrénale sécrète le cortisol sous l'effet de l'ACTH. » Quelle est la correction ?",
            "options": [
              "C'est juste",
              "C'est la corticosurrénale qui sécrète le cortisol sous l'effet de l'ACTH ; la médullosurrénale sécrète l'adrénaline",
              "C'est l'hypothalamus qui sécrète le cortisol",
              "C'est le foie qui sécrète l'ACTH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux parties de la même glande, deux types d'hormones."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q1",
          "type": "mcq",
          "prompt": "Quelle glande libère les glucocorticoïdes (cortisol, cortisone) lors d'une réaction au stress ?",
          "options": [
            "La médullosurrénale",
            "La corticosurrénale",
            "L'hypothalamus",
            "Le foie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cortico- : la partie externe (le cortex) de la surrénale."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q2",
          "type": "mcq",
          "prompt": "Les glucocorticoïdes stimulent la conversion des acides aminés en glucose par le foie (néoglucogenèse). Quel effet cela a-t-il sur le taux de glucose dans le sang ?",
          "options": [
            "Il diminue",
            "Il augmente : ce sont des hormones hyperglycémiantes",
            "Il ne change pas",
            "Il devient nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'organisme dispose ainsi de plus d'énergie pour s'adapter."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q3",
          "type": "mcq",
          "prompt": "Dans la régulation hormonale des réactions émotionnelles, quelle hormone l'hypothalamus sécrète-t-il pour agir sur l'hypophyse ?",
          "options": [
            "La CRH (corticolibérine)",
            "L'ACTH",
            "Le cortisol",
            "L'adrénaline"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CRH : hormone de libération de la corticotrophine."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q4",
          "type": "mcq",
          "prompt": "L'hypothalamus sécrète la CRH, qui agit sur l'hypophyse. Quelle hormone l'hypophyse sécrète-t-elle alors pour stimuler la corticosurrénale ?",
          "options": [
            "La CRH",
            "L'ACTH (corticotrophine)",
            "L'adrénaline",
            "L'insuline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ACTH fait ensuite libérer le cortisol."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q5",
          "type": "mcq",
          "prompt": "Quel est le bon ordre des organes dans la régulation hormonale du stress (axe CRH – ACTH) ?",
          "options": [
            "Corticosurrénale → hypophyse → hypothalamus",
            "Hypothalamus → hypophyse → corticosurrénale",
            "Hypophyse → hypothalamus → corticosurrénale",
            "Médullosurrénale → hypothalamus → hypophyse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque organe commande le suivant par une hormone."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q6",
          "type": "mcq",
          "prompt": "Quand le taux de cortisol dans le sang devient élevé, il agit en retour sur l'hypothalamus et l'hypophyse. Comment s'appelle ce mécanisme et quel est son effet habituel ?",
          "options": [
            "Un rétrocontrôle négatif : il freine la sécrétion de CRH et d'ACTH",
            "Une glycogénolyse : il libère du glucose",
            "Une vasoconstriction : il fait pâlir",
            "Un réflexe : il fait bouger un muscle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce frein évite un excès de cortisol."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p05_q7",
          "type": "mcq",
          "prompt": "Un élève écrit : « La médullosurrénale sécrète le cortisol sous l'effet de l'ACTH. » Quelle est la correction ?",
          "options": [
            "C'est juste",
            "C'est la corticosurrénale qui sécrète le cortisol sous l'effet de l'ACTH ; la médullosurrénale sécrète l'adrénaline",
            "C'est l'hypothalamus qui sécrète le cortisol",
            "C'est le foie qui sécrète l'ACTH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux parties de la même glande, deux types d'hormones."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l01_reactions_emotionnelles_p06",
      "order": 6,
      "title": "L'intégration neuro-hormonale et la gestion du stress",
      "summary": "Nerfs et hormones agissent ensemble ; bien décider pour gérer son stress.",
      "conceptExplanation": "Expériences sur le chat (document 4) :\n- des chats mis en présence de chiens aboyant présentent des réactions de stress, avec une augmentation de la sécrétion de cortisol, qui baisse après le départ des chiens ; les mêmes effets sont produits par la stimulation électrique de certaines zones de l'hypothalamus ;\n- la stimulation des structures limbiques et de l'hypothalamus dorso-latéral entraîne des effets orthosympathiques, une sécrétion d'adrénaline et une hyperactivité du nerf splanchnique ; un stress émotionnel peut multiplier par 30 le taux de catécholamines ;\n- la stimulation du nerf splanchnique donne une réponse analogue ; sa section tarit définitivement les sécrétions médullosurrénaliennes.\n\nInterprétation : la régulation nerveuse et la régulation hormonale ne sont pas indépendantes. Le système limbique et l'hypothalamus jouent le rôle d'INTÉGRATEURS : c'est l'intégration neuro-hormonale.\n\nDéfinitions :\n- le stress : l'état d'alarme qui résulte d'une agression, puis l'état de défense et d'adaptation de l'organisme ; c'est une réaction biologique adaptative aux agresseurs physiques ou psychiques ;\n- une réaction émotionnelle : un ensemble de sentiments et d'émotions provoqué par des contraintes d'ordre émotionnel, des agressions physiques ou des modifications brutales de l'environnement ;\n- l'émotion : une réaction affective passagère, assez intense, habituellement provoquée par une stimulation venue de l'environnement.\n\nGérer ses émotions et son stress par une bonne décision. Étapes de la prise de décision :\n1. identifier le problème posé ;\n2. analyser les différentes options (avantages et inconvénients) ;\n3. prendre conseil ;\n4. prendre la bonne décision ;\n5. appliquer la bonne décision.\nLa prise de décision aide à résister aux pressions qui peuvent conduire à des comportements à risque.",
      "keyRule": "Intégration neuro-hormonale : le système limbique et l'hypothalamus coordonnent nerfs et hormones. Stress = alarme puis défense et adaptation.",
      "formulas": [],
      "workedExample": {
        "title": "Décider face à la pression",
        "statement": "Des camarades poussent un élève stressé par le BAC à prendre des comprimés « pour veiller ». Applique les étapes de la prise de décision.",
        "methodSteps": [
          "Problème : gérer le stress de l'examen sans se mettre en danger.",
          "Options : prendre les comprimés (danger pour la santé) ; mieux organiser ses révisions et dormir (plus sûr).",
          "Prendre conseil (parents, infirmier, professeur), puis décider et appliquer."
        ],
        "conclusion": "Refuser les comprimés et organiser ses révisions : c'est la bonne décision."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les chats et les chiens",
          "stepTheme": "Les chats et les chiens",
          "stepBadge": "Les chats et les chiens",
          "paragraphText": "Des chats mis en présence de chiens aboyant présentent une augmentation de la sécrétion de cortisol, qui baisse après la disparition des chiens.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q1",
            "type": "mcq",
            "prompt": "Des chats mis en présence de chiens aboyant sécrètent plus de cortisol ; la sécrétion baisse quand les chiens partent. Les mêmes effets sont obtenus en stimulant certaines zones de l'hypothalamus. Que montre cette expérience ?",
            "options": [
              "Qu'une émotion perçue par le système nerveux déclenche une sécrétion hormonale",
              "Que le cortisol fait aboyer les chiens",
              "Que les chats n'ont pas d'hypothalamus",
              "Que le stress n'a aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le système nerveux (hypothalamus) commande la réponse hormonale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les intégrateurs",
          "stepTheme": "Les intégrateurs",
          "stepBadge": "Les intégrateurs",
          "paragraphText": "Le système limbique et l'hypothalamus coordonnent les réponses nerveuses et hormonales : c'est l'intégration neuro-hormonale.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q2",
            "type": "mcq",
            "prompt": "Les régulations nerveuse et hormonale des réactions émotionnelles ne sont pas indépendantes. Quelles structures jouent le rôle d'intégrateurs ?",
            "options": [
              "Le système limbique et l'hypothalamus",
              "Le cœur et les poumons",
              "Le cervelet et la rétine",
              "Le foie et les reins"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On parle d'intégration neuro-hormonale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le stress",
          "stepTheme": "Le stress",
          "stepBadge": "Le stress",
          "paragraphText": "Le stress est l'état d'alarme qui résulte d'une agression, puis l'état de défense et d'adaptation de l'organisme.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est la définition du stress donnée dans le cours sur les réactions émotionnelles ?",
            "options": [
              "Une maladie contagieuse",
              "L'état d'alarme qui résulte d'une agression, puis l'état de défense et d'adaptation de l'organisme",
              "Le sommeil profond",
              "Une hormone de la thyroïde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une réaction biologique adaptative aux agresseurs physiques ou psychiques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'émotion",
          "stepTheme": "L'émotion",
          "stepBadge": "L'émotion",
          "paragraphText": "L'émotion est une réaction affective passagère, assez intense, habituellement provoquée par une stimulation venue de l'environnement.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q4",
            "type": "mcq",
            "prompt": "Comment définit-on l'émotion en SVT ?",
            "options": [
              "Une réaction affective passagère, assez intense, provoquée par une stimulation de l'environnement",
              "Un sentiment qui dure toute la vie",
              "Un mouvement volontaire",
              "Une maladie du cœur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle est transitoire, contrairement à un trait de caractère."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Bien décider",
          "stepTheme": "Bien décider",
          "stepBadge": "Bien décider",
          "paragraphText": "Étapes de la prise de décision : identifier le problème, analyser les options, prendre conseil, prendre la bonne décision, l'appliquer.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q5",
            "type": "mcq",
            "prompt": "Pour gérer son stress par une bonne décision, quelle est la première étape de la prise de décision ?",
            "options": [
              "Appliquer la décision",
              "Identifier le problème posé",
              "Prendre conseil",
              "Analyser les options"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne peut pas choisir une solution avant d'avoir compris le problème."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Analyser les options",
          "stepTheme": "Analyser les options",
          "stepBadge": "Analyser les options",
          "paragraphText": "Après avoir identifié le problème, on analyse les options possibles avec leurs avantages et leurs inconvénients, puis on prend conseil.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q6",
            "type": "mcq",
            "prompt": "Étapes de la prise de décision : identifier le problème ; … ; prendre conseil ; prendre la bonne décision ; l'appliquer. Quelle étape manque ?",
            "options": [
              "Analyser les différentes options (avantages et inconvénients)",
              "Oublier le problème",
              "Demander de l'argent",
              "Fuir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On compare les solutions avant de choisir."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Résister aux pressions",
          "stepTheme": "Résister aux pressions",
          "stepBadge": "Résister aux pressions",
          "paragraphText": "La prise de décision est une stratégie de résistance aux pressions qui peuvent conduire à des comportements à risque.",
          "exercise": {
            "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q7",
            "type": "mcq",
            "prompt": "Stressé par le BAC, un élève est poussé par des camarades à prendre des comprimés pour veiller toute la nuit. Après avoir analysé les options et pris conseil, quelle est la bonne décision ?",
            "options": [
              "Prendre les comprimés pour faire comme les autres",
              "Refuser et organiser ses révisions avec un bon sommeil",
              "Abandonner l'examen",
              "Ne plus manger"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La bonne décision protège la santé et résiste à la pression du groupe."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q1",
          "type": "mcq",
          "prompt": "Des chats mis en présence de chiens aboyant sécrètent plus de cortisol ; la sécrétion baisse quand les chiens partent. Les mêmes effets sont obtenus en stimulant certaines zones de l'hypothalamus. Que montre cette expérience ?",
          "options": [
            "Qu'une émotion perçue par le système nerveux déclenche une sécrétion hormonale",
            "Que le cortisol fait aboyer les chiens",
            "Que les chats n'ont pas d'hypothalamus",
            "Que le stress n'a aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le système nerveux (hypothalamus) commande la réponse hormonale."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q2",
          "type": "mcq",
          "prompt": "Les régulations nerveuse et hormonale des réactions émotionnelles ne sont pas indépendantes. Quelles structures jouent le rôle d'intégrateurs ?",
          "options": [
            "Le système limbique et l'hypothalamus",
            "Le cœur et les poumons",
            "Le cervelet et la rétine",
            "Le foie et les reins"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On parle d'intégration neuro-hormonale."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est la définition du stress donnée dans le cours sur les réactions émotionnelles ?",
          "options": [
            "Une maladie contagieuse",
            "L'état d'alarme qui résulte d'une agression, puis l'état de défense et d'adaptation de l'organisme",
            "Le sommeil profond",
            "Une hormone de la thyroïde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une réaction biologique adaptative aux agresseurs physiques ou psychiques."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q4",
          "type": "mcq",
          "prompt": "Comment définit-on l'émotion en SVT ?",
          "options": [
            "Une réaction affective passagère, assez intense, provoquée par une stimulation de l'environnement",
            "Un sentiment qui dure toute la vie",
            "Un mouvement volontaire",
            "Une maladie du cœur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est transitoire, contrairement à un trait de caractère."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q5",
          "type": "mcq",
          "prompt": "Pour gérer son stress par une bonne décision, quelle est la première étape de la prise de décision ?",
          "options": [
            "Appliquer la décision",
            "Identifier le problème posé",
            "Prendre conseil",
            "Analyser les options"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne peut pas choisir une solution avant d'avoir compris le problème."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q6",
          "type": "mcq",
          "prompt": "Étapes de la prise de décision : identifier le problème ; … ; prendre conseil ; prendre la bonne décision ; l'appliquer. Quelle étape manque ?",
          "options": [
            "Analyser les différentes options (avantages et inconvénients)",
            "Oublier le problème",
            "Demander de l'argent",
            "Fuir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On compare les solutions avant de choisir."
        },
        {
          "id": "terminale_a_svt_l01_reactions_emotionnelles_p06_q7",
          "type": "mcq",
          "prompt": "Stressé par le BAC, un élève est poussé par des camarades à prendre des comprimés pour veiller toute la nuit. Après avoir analysé les options et pris conseil, quelle est la bonne décision ?",
          "options": [
            "Prendre les comprimés pour faire comme les autres",
            "Refuser et organiser ses révisions avec un bon sommeil",
            "Abandonner l'examen",
            "Ne plus manger"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La bonne décision protège la santé et résiste à la pression du groupe."
        }
      ]
    }
  ]
};
