import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électricité — Titre : Loi de Laplace
export const PHYSIQUE_TLE_CD_L06_LOI_DE_LAPLACE: CurriculumChapter = {
  "id": "terminale_d_physique_l06_loi_de_laplace",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 6,
  "title": "Leçon 6 : Loi de Laplace",
  "summary": "Étude théorique, expérimentale et technologique de la force de Laplace : mise en évidence expérimentale (expérience de la tige suspendue et des rails de Laplace), énoncé et caractéristiques vectorielles de la force électromagnétique F = I ℓ ^ B, règle des trois doigts de la main droite et calcul de la norme F = I ℓ B |sin α|, étude quantitative de la balance de Cotton (annulation des moments parasites des arcs de cercle, mesure précise de B), équilibre d'une tige mobile oscillante suspendue sous champ magnétique (théorème des moments, calcul de l'inclinaison α), action motrice continue (la roue de Barlow et le haut-parleur électrodynamique), et analyse complète des courants de Foucault (loi de Lenz, freinage électromagnétique des poids lourds et TGV, plaques à induction, et feuilletage des tôles de transformateurs).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électricité – Loi de Laplace)",
  "points": [
    {
      "id": "terminale_d_physique_l06_loi_de_laplace_p01",
      "order": 1,
      "title": "Mise en évidence expérimentale de la force de Laplace",
      "summary": "Expérience historique de la tige de Laplace suspendue, expérience des rails de Laplace horizontaux, observations fondamentales (inversion avec le courant et avec le champ) et conclusion sur la nature électromagnétique de la force.",
      "conceptExplanation": "1. Expérience de la tige de Laplace suspendue :\nUne tige métallique conductrice en cuivre est suspendue verticalement par son extrémité supérieure à un axe fixe de rotation, tandis que son extrémité inférieure plonge dans une cuve de mercure ou ferme un contact souple. La tige est placée entre les pôles d'un aimant en U (champ magnétique B transversal horizontal).\n- À la fermeture de l'interrupteur K, la tige est brutalement déviée d'un angle α par rapport à la verticale ;\n- Si l'on inverse le sens du courant électrique I (permutation des bornes du générateur), la déviation s'inverse ;\n- Si l'on retourne l'aimant (inversion du sens du champ B), la déviation s'inverse également ;\n- Si l'on ouvre le circuit (I = 0) ou si l'on retire l'aimant (B = 0), la tige reprend immédiatement sa position verticale d'équilibre.\n\n2. Expérience des rails de Laplace :\nDeux rails métalliques rectilignes, horizontaux et parallèles sont reliés aux bornes d'un générateur de courant continu. Une tige cylindrique conductrice mobile est posée transversalement sur les rails et ferme le circuit électrique. L'ensemble est placé dans l'entrefer d'un aimant en U créant un champ B vertical.\n- Dès le passage du courant I, la barre conductrice se met en mouvement rectiligne accéléré le long des rails ;\n- Le sens du déplacement s'inverse si l'on inverse le sens de I ou le sens de B ;\n- La vitesse et l'accélération de la barre augmentent lorsqu'on augmente l'intensité I du courant ou la valeur du champ B.\n\n3. Conclusion générale :\nTout conducteur parcouru par un courant électrique continu et plongé dans un champ magnétique subit une force mécanique d'origine électromagnétique appelée force de Laplace.",
      "keyRule": "Un conducteur traversé par un courant I dans un champ B subit la force de Laplace. Le sens de cette force dépend conjointement du sens du courant et du sens du champ magnétique.",
      "formulas": [
        {
          "name": "Lien qualitatif de Laplace",
          "formula": "\\vec{F} \\text{ dépend de } I, \\; \\vec{B} \\; \\text{ et de la longueur } \\ell",
          "note": "S'annule si I = 0 ou B = 0"
        }
      ],
      "workedExample": {
        "title": "Analyse des inversions de mouvement sur les rails de Laplace",
        "statement": "Sur des rails de Laplace horizontaux, une barre se déplace vers la droite. On effectue simultanément deux modifications : on inverse les branchements du générateur ET on retourne l'aimant en U. Dans quel sens la barre se déplace-t-elle désormais ?",
        "methodSteps": [
          "Étape 1 : Analyser la première inversion : inverser le sens du courant I inverse le sens de la force de Laplace, donc la barre tendrait à aller vers la gauche.",
          "Étape 2 : Analyser la seconde inversion : inverser simultanément le sens du champ B inverse une nouvelle fois le sens de la force de Laplace.",
          "Étape 3 : Combiner les deux inversions : deux inversions consécutives se compensent ((-1) * (-1) = +1)."
        ],
        "conclusion": "La barre continue de se déplacer exactement dans le même sens initial, c'est-à-dire vers la droite."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des expériences de mise en évidence de Laplace",
        "tableData": {
          "headers": [
            "Dispositif expérimental",
            "Géométrie du conducteur",
            "Type de mouvement observé",
            "Dépendance du sens",
            "Application pédagogique"
          ],
          "rows": [
            [
              "Tige de Laplace suspendue",
              "Tige verticale sur pivot",
              "Déviation angulaire (rotation)",
              "S'inverse si I ou B s'inverse",
              "Mise en évidence du couple et équilibre statique"
            ],
            [
              "Rails de Laplace",
              "Barre horizontale sur rails",
              "Translation rectiligne accélérée",
              "S'inverse si I ou B s'inverse",
              "Principe du moteur linéaire et du canon électromagnétique"
            ],
            [
              "Circuit ouvert (I = 0)",
              "Conducteur passif",
              "Immobilisme parfait",
              "-",
              "Prouve que le champ seul n'exerce aucune force sur un fil neutre au repos"
            ],
            [
              "Champ supprimé (B = 0)",
              "Conducteur avec courant I",
              "Immobilisme parfait",
              "-",
              "Prouve que le courant seul ne crée pas de translation spontanée sans champ extérieur"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La force électromagnétique de Laplace",
          "stepTheme": "Découverte de Laplace",
          "stepBadge": "Force électromagnétique",
          "paragraphText": "La force de Laplace est la force mécanique macroscopique qui s'exerce sur un conducteur électrique parcouru par un courant lorsqu'il est immergé dans un champ magnétique extérieur. Elle résulte de la somme collective des forces de Lorentz microscopiques subies par les électrons de conduction en déplacement dans le réseau cristallin du métal.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est l'origine microscopique fondamentale de la force de Laplace ressentie par une barre de cuivre ?",
            "options": [
              "La résultante des forces magnétiques de Lorentz agissant sur l'ensemble des électrons libres en dérive ordonnée dans le métal",
              "La dilatation thermique du cuivre sous l'effet Joule",
              "Une réaction chimique spontanée entre l'air et le cuivre",
              "L'attraction gravitationnelle entre la bobine et la barre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque électron libre dérivant à la vitesse v_d subit la force de Lorentz f = -e v_d ^ B. En transmettant cette force au réseau cristallin par collisions, la résultante macroscopique forme la force de Laplace."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dépendance au sens du courant I",
          "stepTheme": "Sensibilité au courant",
          "stepBadge": "Inversion par I",
          "paragraphText": "Dans toute expérience de Laplace (tige pendulaire ou rails), le sens de la force électromagnétique est directement lié au sens de circulation du courant I : si l'on inverse les bornes d'alimentation sans modifier le champ magnétique, la force change rigoureusement de sens.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q2",
            "type": "mcq",
            "prompt": "Une tige de Laplace dévie vers le Nord. Si l'on permute les fils rouge et noir connectés aux bornes du générateur continu, que fait la tige à la fermeture ?",
            "options": [
              "Elle dévie vers le Sud (sens rigoureusement opposé)",
              "Elle continue de dévier vers le Nord",
              "Elle s'élève verticalement sans déviation",
              "Elle reste immobile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'inversion du sens du courant I change le signe du produit vectoriel I ℓ ^ B, ce qui inverse directement le sens de la force de Laplace vers le Sud."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dépendance au sens du champ B",
          "stepTheme": "Sensibilité au champ",
          "stepBadge": "Inversion par B",
          "paragraphText": "De la même manière, si le courant I conserve son sens mais que l'on retourne l'aimant (inversion du vecteur champ magnétique B), la force de Laplace s'inverse également. Pour conserver le sens de la force, il faudrait inverser simultanément le courant ET le champ magnétique.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q3",
            "type": "mcq",
            "prompt": "Dans un montage de rails de Laplace, la barre roule vers l'avant. On retourne l'aimant en U à 180° sans toucher au circuit électrique. Que fait la barre ?",
            "options": [
              "Elle roule vers l'arrière",
              "Elle continue de rouler vers l'avant",
              "Elle s'arrête net",
              "Elle saute au-dessus des rails"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inverser le vecteur B inverse le sens de la force de Laplace F = I ℓ ^ B, propulsant la barre vers l'arrière."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Rôle du conducteur mobile sur les rails de Laplace",
          "stepTheme": "Rails de Laplace",
          "stepBadge": "Contact glissant",
          "paragraphText": "Dans le dispositif des rails de Laplace, la barre conductrice joue le double rôle de court-circuit mobile fermant le circuit électrique entre les deux rails et d'induit mobile transformant l'énergie électrique en travail mécanique de translation sous l'action de la force F.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q4",
            "type": "mcq",
            "prompt": "Quel type de conversion d'énergie s'opère sur la barre mobile des rails de Laplace lors de son accélération ?",
            "options": [
              "Conversion d'énergie électrique en énergie mécanique cinétique",
              "Conversion d'énergie cinétique en énergie nucléaire",
              "Conversion d'énergie thermique en lumière",
              "Aucune conversion d'énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le courant électrique fourni par le générateur produit une force qui met la barre en mouvement : c'est le principe fondamental de la conversion électromécanique motrice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : Conducteur non magnétique vs matériau ferromagnétique",
          "stepTheme": "Nature du matériau",
          "stepBadge": "Cuivre ou aluminium",
          "paragraphText": "Pour mettre en évidence la force de Laplace pure, on utilise EXCLUSIVEMENT des conducteurs non ferromagnétiques (cuivre, laiton, aluminium). Si l'on utilisait une barre de fer, l'aimant attirerait violemment la barre par attraction ferromagnétique statique même sans courant, masquant totalement l'effet de Laplace !",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q5",
            "type": "mcq",
            "prompt": "Pourquoi la tige de Laplace est-elle toujours fabriquée en cuivre ou en aluminium plutôt qu'en acier doux ?",
            "options": [
              "Pour éviter l'attraction ferromagnétique directe de l'aimant en l'absence de courant et observer purement la force électromagnétique",
              "Parce que le fer ne conduit pas l'électricité",
              "Parce que le cuivre est transparent",
              "Parce que l'acier ne supporte pas les champs magnétiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cuivre est diamagnétique (non attiré par les aimants) : toute force observée sur la tige à la fermeture du circuit est donc exclusivement due à l'effet de Laplace."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le canon électromagnétique (Railgun)",
          "stepTheme": "Application haute puissance",
          "stepBadge": "Canon à rails",
          "paragraphText": "Le canon électromagnétique militaire (Railgun) est l'application directe des rails de Laplace à échelle géante : deux rails parallèles parcourus par des millions d'ampères et un projectile conducteur mobile propulsé par une force de Laplace colossale, éjectant l'obus à des vitesses hypersoniques (plus de Mach 7) sans poudre explosive.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q6",
            "type": "mcq",
            "prompt": "Sur quel principe physique repose la propulsion des projectiles dans un canon électromagnétique (Railgun) ?",
            "options": [
              "La force de Laplace s'exerçant sur le projectile fermant le circuit entre deux rails conducteurs",
              "L'expansion de gaz de combustion de poudre noire",
              "La pression d'air comprimé",
              "La gravitation artificielle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le projectile sert de court-circuit glissant entre deux rails soumis à un courant gigantesque : la force de Laplace le propulse à vitesse extrême."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Conditions d'annulation de la force",
          "stepTheme": "Nullité de F",
          "stepBadge": "F = 0 si I = 0 ou B = 0",
          "paragraphText": "La force de Laplace est une force d'interaction conjointe : elle est strictement nulle si le courant est nul (I = 0), si le champ magnétique est nul (B = 0), ou si le conducteur est orienté parallèlement aux lignes de champ (vecteur ℓ colinéaire à B).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p01_q7",
            "type": "mcq",
            "prompt": "Dans quel cas un conducteur parcouru par un courant I = 10 A placé dans un champ intense B = 2 T ne subit-il rigoureusement AUCUNE force de Laplace ?",
            "options": [
              "Lorsque le conducteur est placé parallèlement aux lignes de champ magnétique",
              "Lorsque le conducteur est perpendiculaire aux lignes de champ",
              "Lorsque la température est de 20 °C",
              "Lorsque le conducteur est en cuivre très pur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si le conducteur est parallèle aux lignes de champ, l'angle α vaut 0 ou 180°, d'où sin α = 0 et F = I ℓ B sin α = 0."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est l'origine microscopique fondamentale de la force de Laplace ressentie par une barre de cuivre ?",
          "options": [
            "La résultante des forces magnétiques de Lorentz agissant sur l'ensemble des électrons libres en dérive ordonnée dans le métal",
            "La dilatation thermique du cuivre sous l'effet Joule",
            "Une réaction chimique spontanée entre l'air et le cuivre",
            "L'attraction gravitationnelle entre la bobine et la barre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque électron libre dérivant à la vitesse v_d subit la force de Lorentz f = -e v_d ^ B. En transmettant cette force au réseau cristallin par collisions, la résultante macroscopique forme la force de Laplace."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q2",
          "type": "mcq",
          "prompt": "Une tige de Laplace dévie vers le Nord. Si l'on permute les fils rouge et noir connectés aux bornes du générateur continu, que fait la tige à la fermeture ?",
          "options": [
            "Elle dévie vers le Sud (sens rigoureusement opposé)",
            "Elle continue de dévier vers le Nord",
            "Elle s'élève verticalement sans déviation",
            "Elle reste immobile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'inversion du sens du courant I change le signe du produit vectoriel I ℓ ^ B, ce qui inverse directement le sens de la force de Laplace vers le Sud."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q3",
          "type": "mcq",
          "prompt": "Dans un montage de rails de Laplace, la barre roule vers l'avant. On retourne l'aimant en U à 180° sans toucher au circuit électrique. Que fait la barre ?",
          "options": [
            "Elle roule vers l'arrière",
            "Elle continue de rouler vers l'avant",
            "Elle s'arrête net",
            "Elle saute au-dessus des rails"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inverser le vecteur B inverse le sens de la force de Laplace F = I ℓ ^ B, propulsant la barre vers l'arrière."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q4",
          "type": "mcq",
          "prompt": "Quel type de conversion d'énergie s'opère sur la barre mobile des rails de Laplace lors de son accélération ?",
          "options": [
            "Conversion d'énergie électrique en énergie mécanique cinétique",
            "Conversion d'énergie cinétique en énergie nucléaire",
            "Conversion d'énergie thermique en lumière",
            "Aucune conversion d'énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le courant électrique fourni par le générateur produit une force qui met la barre en mouvement : c'est le principe fondamental de la conversion électromécanique motrice."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q5",
          "type": "mcq",
          "prompt": "Pourquoi la tige de Laplace est-elle toujours fabriquée en cuivre ou en aluminium plutôt qu'en acier doux ?",
          "options": [
            "Pour éviter l'attraction ferromagnétique directe de l'aimant en l'absence de courant et observer purement la force électromagnétique",
            "Parce que le fer ne conduit pas l'électricité",
            "Parce que le cuivre est transparent",
            "Parce que l'acier ne supporte pas les champs magnétiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cuivre est diamagnétique (non attiré par les aimants) : toute force observée sur la tige à la fermeture du circuit est donc exclusivement due à l'effet de Laplace."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q6",
          "type": "mcq",
          "prompt": "Sur quel principe physique repose la propulsion des projectiles dans un canon électromagnétique (Railgun) ?",
          "options": [
            "La force de Laplace s'exerçant sur le projectile fermant le circuit entre deux rails conducteurs",
            "L'expansion de gaz de combustion de poudre noire",
            "La pression d'air comprimé",
            "La gravitation artificielle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le projectile sert de court-circuit glissant entre deux rails soumis à un courant gigantesque : la force de Laplace le propulse à vitesse extrême."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p01_q7",
          "type": "mcq",
          "prompt": "Dans quel cas un conducteur parcouru par un courant I = 10 A placé dans un champ intense B = 2 T ne subit-il rigoureusement AUCUNE force de Laplace ?",
          "options": [
            "Lorsque le conducteur est placé parallèlement aux lignes de champ magnétique",
            "Lorsque le conducteur est perpendiculaire aux lignes de champ",
            "Lorsque la température est de 20 °C",
            "Lorsque le conducteur est en cuivre très pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si le conducteur est parallèle aux lignes de champ, l'angle α vaut 0 ou 180°, d'où sin α = 0 et F = I ℓ B sin α = 0."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l06_loi_de_laplace_p02",
      "order": 2,
      "title": "Loi de Laplace : expression vectorielle et règle de la main droite",
      "summary": "Énoncé officiel de la loi de Laplace, expression vectorielle F = I ℓ ^ B, point d'application au milieu de la portion active, orthogonalité stricte, trièdre direct et calcul scalaire de la norme F = I ℓ B |sin α|.",
      "conceptExplanation": "1. Énoncé officiel de la loi de Laplace :\nUn conducteur rectiligne de longueur ℓ, parcouru par un courant électrique continu d'intensité I et placé dans un champ magnétique uniforme B, est soumis à une force électromagnétique F appelée force de Laplace d'expression vectorielle :\nF = I ℓ ^ B.\nLe vecteur ℓ a pour norme la longueur de la partie du conducteur immergée dans le champ B, et pour sens le sens conventionnel du courant électrique I.\n\n2. Les quatre caractéristiques fondamentales du vecteur force de Laplace F :\n- Point d'application : le milieu géométrique de la portion rectiligne du conducteur immergée dans le champ magnétique ;\n- Direction : perpendiculaire au plan formé par le conducteur (vecteur ℓ) et le champ magnétique B (F est orthogonal à la fois à ℓ et à B) ;\n- Sens : orienté de telle sorte que le trièdre (ℓ, B, F) soit un trièdre direct de l'espace ;\n- Intensité (norme) : F = I * ℓ * B * |sin α|, où α = (ℓ, B) est l'angle géométrique formé par le conducteur et les lignes de champ magnétique.\n\n3. Règles mnémotechniques d'orientation (Trièdre direct) :\n- Règle officielle des trois doigts de la main droite (École Numérique CI) :\n  * L'index indique le sens du courant électrique I (sens du vecteur ℓ) ;\n  * Le majeur replié à 90° indique le sens du champ magnétique B ;\n  * Le pouce tendu à 90° indique alors le sens de la force de Laplace F.\n- Règle de la paume (Bonhomme d'Ampère) : Le bonhomme est traversé par le courant des pieds vers la tête et regarde dans le sens du champ B ; son bras gauche indique le sens de la force F.\n\n4. Cas particulier usuel d'orthogonalité (ℓ perp B) :\nLorsque le conducteur est perpendiculaire aux lignes de champ magnétique (α = π/2 = 90°), on a sin α = sin(π/2) = 1. La norme de la force de Laplace prend sa valeur maximale :\nF = I * ℓ * B.",
      "keyRule": "Loi de Laplace : F = I ℓ ^ B. Sa norme vaut F = I ℓ B |sin α|. Si ℓ ⊥ B, F = I ℓ B. Les trois doigts de la main droite donnent : Index = I, Majeur = B, Pouce = F.",
      "formulas": [
        {
          "name": "Loi vectorielle de Laplace",
          "formula": "\\vec{F} = I\\,\\vec{\\ell} \\wedge \\vec{B}",
          "note": "ℓ orienté dans le sens du courant I"
        },
        {
          "name": "Norme de la force de Laplace",
          "formula": "F = I\\,\\ell\\,B\\,|\\sin\\alpha|",
          "note": "α = angle (ℓ, B) en radians ou degrés"
        },
        {
          "name": "Cas orthogonal usuel (ℓ ⊥ B)",
          "formula": "F = I\\,\\ell\\,B",
          "note": "Valeur maximale pour sin α = 1"
        }
      ],
      "workedExample": {
        "title": "Calcul de la force de Laplace et orientation dans l'espace",
        "statement": "Un conducteur rectiligne de longueur utile ℓ = 20 cm est placé horizontalement selon l'axe Est-Ouest, parcouru par un courant I = 6,0 A circulant vers l'Est. Il est plongé dans un champ magnétique uniforme vertical descendant de norme B = 0,25 T. Détermine les caractéristiques complètes de la force de Laplace F.",
        "methodSteps": [
          "Étape 1 : Vérifier l'orthogonalité : le courant est horizontal (Est) et le champ est vertical descendant, donc ℓ ⊥ B (α = 90° et sin α = 1).",
          "Étape 2 : Calculer la norme de la force : F = I * ℓ * B = 6,0 * 0,20 * 0,25 = 0,30 N.",
          "Étape 3 : Déterminer la direction : perpendiculaire au plan formé par l'horizontale Est-Ouest et la verticale, donc orientée selon l'axe Nord-Sud horizontal.",
          "Étape 4 : Déterminer le sens par la règle de la main droite :",
          "- Index vers l'Est (courant I) ;",
          "- Majeur vers le bas (champ B) ;",
          "- Le pouce pointe horizontalement vers le Nord."
        ],
        "conclusion": "La force de Laplace s'applique au milieu du conducteur, est horizontale dirigée vers le Nord et a pour intensité F = 0,30 N."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Règle des trois doigts de la main droite (Index, Majeur, Pouce)",
        "tableData": {
          "headers": [
            "Doigt de la main droite",
            "Grandeur physique associée",
            "Direction et sens",
            "Symbole usuel",
            "Rôle dans le produit vectoriel"
          ],
          "rows": [
            [
              "Index",
              "Courant électrique I",
              "Sens conventionnel du courant",
              "I ℓ",
              "Premier vecteur du produit vectoriel (vecteur 1)"
            ],
            [
              "Majeur (replié à 90°)",
              "Champ magnétique",
              "Sens des lignes de champ",
              "B",
              "Deuxième vecteur du produit vectoriel (vecteur 2)"
            ],
            [
              "Pouce (tendu à 90°)",
              "Force de Laplace",
              "Résultante électromagnétique",
              "F",
              "Vecteur résultant perpendiculaire au plan (1, 2)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé de la loi de Laplace",
          "stepTheme": "Loi fondamentale",
          "stepBadge": "F = I ℓ ^ B",
          "paragraphText": "Un conducteur rectiligne de longueur ℓ parcouru par un courant d'intensité I, placé dans un champ magnétique uniforme B, est soumis à une force mécanique F = I ℓ ^ B. Elle s'applique au milieu de la portion active du conducteur.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q1",
            "type": "mcq",
            "prompt": "Une barre conductrice de 50 cm de longueur totale a seulement 15 cm situés dans l'entrefer d'un aimant où règne un champ B. Quelle longueur ℓ doit-on utiliser pour calculer la force de Laplace ?",
            "options": [
              "ℓ = 15 cm = 0,15 m (la portion réellement soumise au champ)",
              "ℓ = 50 cm = 0,50 m (la longueur totale de la barre)",
              "ℓ = 35 cm",
              "ℓ = 65 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule la partie du conducteur effectivement immergée dans le champ magnétique subit la force de Laplace : ℓ = 15 cm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Orthogonalité de la force de Laplace",
          "stepTheme": "Géométrie vectorielle",
          "stepBadge": "F ⊥ plan (ℓ, B)",
          "paragraphText": "Par propriété intrinsèque du produit vectoriel, le vecteur force de Laplace F est rigoureusement orthogonal au conducteur (F ⊥ ℓ) ET orthogonal au champ magnétique (F ⊥ B). Il est donc perpendiculaire au plan contenant ℓ et B.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q2",
            "type": "mcq",
            "prompt": "Si le courant I circule horizontalement de gauche à droite et que le champ B entre perpendiculairement dans la feuille (noté ⊗ B), quelle est la direction et le sens de F ?",
            "options": [
              "Verticale dirigée vers le haut de la feuille",
              "Verticale dirigée vers le bas",
              "Horizontale vers la droite",
              "Oblique à 45° vers l'avant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Index vers la droite, Majeur entrant dans la feuille => le pouce pointe vers le haut de la feuille."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Application de la règle des trois doigts",
          "stepTheme": "Règle de la main droite",
          "stepBadge": "Index I, Majeur B, Pouce F",
          "paragraphText": "Selon la règle officielle enseignée en Côte d'Ivoire : l'index indique le sens du courant I, le majeur indique le champ B, et le pouce indique la force F. Attention à toujours utiliser la main DROITE, sous peine d'obtenir un sens rigoureusement inverse !",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q3",
            "type": "mcq",
            "prompt": "Un fil vertical est parcouru par un courant ascendant (du bas vers le haut). Le champ B sort de la feuille vers l'observateur (noté ⊙ B). Vers où est dirigée la force F ?",
            "options": [
              "Vers la droite",
              "Vers la gauche",
              "Vers le haut",
              "Vers le bas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Index vers le haut, Majeur pointant vers vous (sortant) => le pouce de la main droite est orienté vers la droite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Calcul de la norme F = I ℓ B sin α",
          "stepTheme": "Calcul quantitatif",
          "stepBadge": "F en Newtons",
          "paragraphText": "La norme de la force vaut F = I ℓ B |sin α|, où α est l'angle entre le vecteur ℓ et le vecteur B. Lorsque le fil est perpendiculaire au champ (α = 90°), sin 90° = 1 et F = I ℓ B. Si α = 30°, sin 30° = 0,5 et la force est réduite de moitié.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q4",
            "type": "mcq",
            "prompt": "Un conducteur rectiligne de 40 cm parcouru par I = 12 A est placé dans B = 0,25 T avec un angle α = 30° par rapport aux lignes de champ. Que vaut la force de Laplace subie ?",
            "options": [
              "F = 0,60 N",
              "F = 1,20 N",
              "F = 0,86 N",
              "F = 0,30 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F = I * ℓ * B * sin α = 12 * 0,40 * 0,25 * sin 30° = 1,20 * 0,5 = 0,60 N."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Cas d'un angle α = 45°",
          "stepTheme": "Angle oblique",
          "stepBadge": "sin 45° = √2 / 2",
          "paragraphText": "Lorsque le conducteur fait un angle α = 45° avec les lignes de champ, sin 45° = √2 / 2 ≈ 0,707. La force de Laplace vaut F = I ℓ B (√2 / 2) ≈ 0,707 I ℓ B.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q5",
            "type": "mcq",
            "prompt": "Avec les mêmes valeurs (ℓ = 0,4 m, I = 12 A, B = 0,25 T), que vaut la force si l'angle devient α = 45° ?",
            "options": [
              "F ≈ 0,85 N (ou 0,86 N)",
              "F = 0,60 N",
              "F = 1,20 N",
              "F = 0,42 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F = 12 * 0,40 * 0,25 * sin 45° = 1,20 * 0,7071 ≈ 0,85 N (conforme à l'exercice 1 du PDF officiel)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas confondre la main gauche et la main droite",
          "stepTheme": "Erreur de main",
          "stepBadge": "Toujours main DROITE",
          "paragraphText": "L'erreur d'inattention la plus fréquente consiste à utiliser machinalement sa main gauche parce qu'on tient son stylo dans la main droite. Utiliser la main gauche inverse systématiquement le sens du pouce, conduisant à une force orientée à l'opposé de la réalité !",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q6",
            "type": "mcq",
            "prompt": "Que se passe-t-il si un élève applique la règle des trois doigts avec sa main gauche au lieu de sa main droite ?",
            "options": [
              "Il trouve un vecteur force de sens rigoureusement opposé au sens réel",
              "Il trouve la bonne direction et le bon sens",
              "Il trouve une force d'intensité double",
              "Il annule la force"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La main gauche forme un trièdre rétrograde (indirect) : le produit vectoriel direct donne exactement le sens opposé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Moment de la force de Laplace par rapport à un axe",
          "stepTheme": "Couple électromagnétique",
          "stepBadge": "M = F * d",
          "paragraphText": "Lorsqu'une portion rectiligne de conducteur de longueur d est soumise à la force de Laplace F et peut pivoter autour d'un axe passant par son extrémité A, le moment de la force par rapport à cet axe vaut M(F) = F * (d / 2) car la force s'applique au milieu de la portion active.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p02_q7",
            "type": "mcq",
            "prompt": "Une barre de longueur d = 20 cm articulée en A est soumise à une force de Laplace F = 0,04 N s'exerçant perpendiculairement en son milieu. Quel est le moment de F par rapport à l'axe passant par A ?",
            "options": [
              "M = 0,004 N.m",
              "M = 0,008 N.m",
              "M = 0,04 N.m",
              "M = 0,4 N.m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "M = F * (d / 2) = 0,04 * (0,20 / 2) = 0,04 * 0,10 = 0,004 N.m."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q1",
          "type": "mcq",
          "prompt": "Une barre conductrice de 50 cm de longueur totale a seulement 15 cm situés dans l'entrefer d'un aimant où règne un champ B. Quelle longueur ℓ doit-on utiliser pour calculer la force de Laplace ?",
          "options": [
            "ℓ = 15 cm = 0,15 m (la portion réellement soumise au champ)",
            "ℓ = 50 cm = 0,50 m (la longueur totale de la barre)",
            "ℓ = 35 cm",
            "ℓ = 65 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule la partie du conducteur effectivement immergée dans le champ magnétique subit la force de Laplace : ℓ = 15 cm."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q2",
          "type": "mcq",
          "prompt": "Si le courant I circule horizontalement de gauche à droite et que le champ B entre perpendiculairement dans la feuille (noté ⊗ B), quelle est la direction et le sens de F ?",
          "options": [
            "Verticale dirigée vers le haut de la feuille",
            "Verticale dirigée vers le bas",
            "Horizontale vers la droite",
            "Oblique à 45° vers l'avant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Index vers la droite, Majeur entrant dans la feuille => le pouce pointe vers le haut de la feuille."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q3",
          "type": "mcq",
          "prompt": "Un fil vertical est parcouru par un courant ascendant (du bas vers le haut). Le champ B sort de la feuille vers l'observateur (noté ⊙ B). Vers où est dirigée la force F ?",
          "options": [
            "Vers la droite",
            "Vers la gauche",
            "Vers le haut",
            "Vers le bas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Index vers le haut, Majeur pointant vers vous (sortant) => le pouce de la main droite est orienté vers la droite."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q4",
          "type": "mcq",
          "prompt": "Un conducteur rectiligne de 40 cm parcouru par I = 12 A est placé dans B = 0,25 T avec un angle α = 30° par rapport aux lignes de champ. Que vaut la force de Laplace subie ?",
          "options": [
            "F = 0,60 N",
            "F = 1,20 N",
            "F = 0,86 N",
            "F = 0,30 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F = I * ℓ * B * sin α = 12 * 0,40 * 0,25 * sin 30° = 1,20 * 0,5 = 0,60 N."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q5",
          "type": "mcq",
          "prompt": "Avec les mêmes valeurs (ℓ = 0,4 m, I = 12 A, B = 0,25 T), que vaut la force si l'angle devient α = 45° ?",
          "options": [
            "F ≈ 0,85 N (ou 0,86 N)",
            "F = 0,60 N",
            "F = 1,20 N",
            "F = 0,42 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F = 12 * 0,40 * 0,25 * sin 45° = 1,20 * 0,7071 ≈ 0,85 N (conforme à l'exercice 1 du PDF officiel)."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q6",
          "type": "mcq",
          "prompt": "Que se passe-t-il si un élève applique la règle des trois doigts avec sa main gauche au lieu de sa main droite ?",
          "options": [
            "Il trouve un vecteur force de sens rigoureusement opposé au sens réel",
            "Il trouve la bonne direction et le bon sens",
            "Il trouve une force d'intensité double",
            "Il annule la force"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La main gauche forme un trièdre rétrograde (indirect) : le produit vectoriel direct donne exactement le sens opposé."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p02_q7",
          "type": "mcq",
          "prompt": "Une barre de longueur d = 20 cm articulée en A est soumise à une force de Laplace F = 0,04 N s'exerçant perpendiculairement en son milieu. Quel est le moment de F par rapport à l'axe passant par A ?",
          "options": [
            "M = 0,004 N.m",
            "M = 0,008 N.m",
            "M = 0,04 N.m",
            "M = 0,4 N.m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "M = F * (d / 2) = 0,04 * (0,20 / 2) = 0,04 * 0,10 = 0,004 N.m."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l06_loi_de_laplace_p03",
      "order": 3,
      "title": "La balance de Cotton et la mesure du champ B",
      "summary": "Principe et description de la balance de Cotton, géométrie circulaire des branches éliminant les moments parasites, équilibre des moments et relation B = (m g d') / (I ℓ d), étalonnage et exploitation de la droite I = f(m).",
      "conceptExplanation": "1. Description de la balance de Cotton :\nLa balance de Cotton est un instrument de laboratoire spécialement conçu pour mesurer l'intensité B d'un champ magnétique uniforme. Elle comprend un fléau mobile autour d'un axe horizontal fixe (Delta) passant par O :\n- Le bras droit porte un plateau de tare où l'on dépose des masses marquées m à une distance d' de l'axe O ;\n- Le bras gauche porte un circuit électrique imprimé rigide OCADE de forme géométrique particulière, dont la partie inférieure plonge dans l'entrefer d'un aimant.\n\n2. Rôle génial des arcs de cercle AC et DE :\nLes portions conductrices AC et DE sont des arcs de cercle rigoureusement centrés sur l'axe de rotation O. De ce fait, les rayons sont partout perpendiculaires aux arcs. Les forces de Laplace élémentaires qui s'exercent sur AC et DE ont des droites d'action qui passent TOUTES par le centre O (axe Delta) : leurs moments par rapport à l'axe sont donc rigoureusement nuls !\nM_Delta(F_AC) = 0  et  M_Delta(F_DE) = 0.\nSeul le segment rectiligne horizontal inférieur CD de longueur utile ℓ développe un moment moteur non nul !\n\n3. Équilibre des moments de la balance de Cotton :\nLe segment CD horizontal de longueur ℓ, situé à la distance d de l'axe O, est parcouru par le courant I et soumis au champ B horizontal. La force de Laplace résultante F = I ℓ B est verticale descendante.\nÀ l'équilibre du fléau, le théorème des moments donne :\nSomme M_Delta(F_ext) = 0 => M_Delta(P) + M_Delta(F) = 0\n=> -P * d' + F * d = 0 <=> F * d = P * d'.\nComme F = I ℓ B et P = m g, on en déduit :\nI ℓ B * d = m g * d'  =>  B = (m g d') / (I ℓ d).\nLorsque les deux bras de levier sont égaux (d = d'), la formule se simplifie en :\nB = (m g) / (I ℓ).\n\n4. Exploitation graphique I = f(m) :\nEn faisant varier la masse m et en ajustant le courant I pour rétablir l'équilibre, on trace I = f(m). C'est une droite linéaire de pente k = g / (ℓ B), ce qui permet de déterminer la valeur expérimentale de B avec une très grande précision.",
      "keyRule": "Sur la balance de Cotton, les arcs de cercle ont un moment nul. Seul le segment horizontal CD agit. À l'équilibre (d = d') : B = (m g) / (I ℓ) ou I = (g / (ℓ B)) m.",
      "formulas": [
        {
          "name": "Équilibre de la balance de Cotton",
          "formula": "I\\,\\ell\\,B\\,d = m\\,g\\,d' \\iff B = \\frac{m\\,g\\,d'}{I\\,\\ell\\,d}",
          "note": "Si d = d' : B = (m g) / (I ℓ)"
        },
        {
          "name": "Relation courant - masse d'équilibre",
          "formula": "I = \\frac{g}{\\ell\\,B}\\,m = k\\,m",
          "note": "Droite passant par l'origine de pente k"
        }
      ],
      "workedExample": {
        "title": "Calcul du champ magnétique avec une balance de Cotton",
        "statement": "Une balance de Cotton possède un conducteur actif horizontal de longueur ℓ = 2,9 cm, placé dans l'entrefer d'un aimant. Les bras sont égaux (d = d'). Pour équilibrer une masse m = 1,5 mg (1,5 * 10⁻⁶ kg) déposée sur le plateau, il faut faire circuler un courant I = 2,35 A (g = 10 m/s²). Calcule l'intensité du champ magnétique B.",
        "methodSteps": [
          "Étape 1 : Convertir la masse en kg : m = 1,5 mg = 1,5 * 10⁻⁶ kg.",
          "Étape 2 : Convertir la longueur en mètres : ℓ = 2,9 cm = 0,029 m.",
          "Étape 3 : Appliquer la formule de la balance de Cotton (d = d') : B = (m * g) / (I * ℓ).",
          "Étape 4 : Effectuer l'application numérique :",
          "B = (1,5 * 10⁻⁶ * 10) / (2,35 * 0,029) = (1,5 * 10⁻⁵) / (0,06815) ≈ 2,20 * 10⁻⁴ T = 0,22 mT."
        ],
        "conclusion": "L'aimant délivre un champ magnétique de 0,22 mT mesuré avec précision par la balance."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan des moments sur la balance de Cotton",
        "tableData": {
          "headers": [
            "Élément du circuit",
            "Forme géométrique",
            "Force subie",
            "Bras de levier / Droite d'action",
            "Moment par rapport à l'axe (Delta)"
          ],
          "rows": [
            [
              "Arc AC",
              "Arc de cercle centré en O",
              "Force radiale F_AC",
              "Passe par l'axe de rotation O",
              "M_Delta(F_AC) = 0 (aucun effet)"
            ],
            [
              "Arc DE",
              "Arc de cercle centré en O",
              "Force radiale F_DE",
              "Passe par l'axe de rotation O",
              "M_Delta(F_DE) = 0 (aucun effet)"
            ],
            [
              "Segment horizontal CD",
              "Segment rectiligne de longueur ℓ",
              "Force de Laplace F = I ℓ B",
              "Bras de levier horizontal d",
              "M_Delta(F) = + F * d = + I ℓ B d"
            ],
            [
              "Plateau de tare",
              "Plateau suspendu",
              "Poids P = m g",
              "Bras de levier horizontal d'",
              "M_Delta(P) = - P * d' = - m g d'"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Constitution de la balance de Cotton",
          "stepTheme": "Instrument de mesure",
          "stepBadge": "Fléau à bras articulé",
          "paragraphText": "La balance de Cotton est un dispositif électrodynamique fondé sur la loi de Laplace, constitué d'un fléau rigide articulé autour d'un axe horizontal, portant d'un côté un plateau de pesée et de l'autre un circuit conducteur découpé selon des arcs de cercle et un segment rectiligne actif.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q1",
            "type": "mcq",
            "prompt": "Quel est l'objectif premier de la balance de Cotton en travaux pratiques de physique ?",
            "options": [
              "Mesurer avec précision la valeur d'un champ magnétique B en équilibrant la force de Laplace avec un poids connu",
              "Mesurer la masse de la Terre",
              "Créer un mouvement perpétuel",
              "Filtrer les fréquences radio"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La balance de Cotton permet une mesure absolue du champ B par comparaison directe entre la force de Laplace I ℓ B et le poids m g."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Annulation des moments sur les arcs de cercle",
          "stepTheme": "Rôle des arcs de cercle",
          "stepBadge": "Droite passe par l'axe => M = 0",
          "paragraphText": "Les portions AC et DE du circuit ont la forme d'arcs de cercle de centre O situé sur l'axe de rotation. En tout point de ces arcs, le courant est perpendiculaire au rayon : la force de Laplace élémentaire est donc portée par le rayon et coupe l'axe de rotation O. Son moment par rapport à l'axe est rigoureusement nul.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi donne-t-on la forme d'arcs de cercle centrés en O aux conducteurs latéraux AC et DE de la balance de Cotton ?",
            "options": [
              "Pour que leurs forces de Laplace aient une droite d'action passant par l'axe de rotation, rendant leur moment nul",
              "Pour des raisons purement esthétiques",
              "Pour augmenter la résistance électrique du circuit",
              "Pour empêcher les électrons de sortir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toute force dont la droite d'action coupe l'axe de rotation a un bras de levier nul : son moment s'annule, ce qui isole l'action du seul segment utile CD."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Établissement de la condition d'équilibre",
          "stepTheme": "Théorème des moments",
          "stepBadge": "I ℓ B d = m g d'",
          "paragraphText": "À l'équilibre horizontal du fléau, la somme algébrique des moments des forces extérieures par rapport à l'axe (Delta) s'annule : M(P) + M(F) = 0 => F * d = P * d'. En remplaçant F = I ℓ B et P = m g, on obtient la formule générale : B = (m g d') / (I ℓ d).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q3",
            "type": "mcq",
            "prompt": "Dans une balance de Cotton à bras égaux (d = d'), quelle est la masse m nécessaire pour équilibrer la force de Laplace avec ℓ = 3 cm, I = 8 A, B = 0,5 T et g = 10 m/s² ?",
            "options": [
              "m = 0,012 kg = 12 g",
              "m = 1,2 kg",
              "m = 0,12 g",
              "m = 0,0012 kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "m = (I * ℓ * B) / g = (8 * 0,03 * 0,5) / 10 = 0,12 / 10 = 0,012 kg = 12 g (conforme à l'exercice 2 du PDF officiel)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Linéarité de la caractéristique I = f(m)",
          "stepTheme": "Pente k = g / (ℓ B)",
          "stepBadge": "I = k m",
          "paragraphText": "De la relation d'équilibre à bras égaux I ℓ B = m g, on déduit l'expression du courant en fonction de la masse déposée : I = (g / (ℓ B)) * m = k * m. La courbe I = f(m) est une droite linéaire passant par l'origine dont la pente vaut k = g / (ℓ B).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q4",
            "type": "mcq",
            "prompt": "La pente de la droite I = f(m) d'une balance de Cotton vaut k = 1600 A/kg avec g = 10 m/s² et ℓ = 2,9 cm (0,029 m). Quelle est la valeur déduite du champ magnétique B ?",
            "options": [
              "B ≈ 0,215 T",
              "B ≈ 2,15 T",
              "B ≈ 0,0215 T",
              "B ≈ 4,64 T"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k = g / (ℓ B) => B = g / (k * ℓ) = 10 / (1600 * 0,029) = 10 / 46,4 ≈ 0,2155 T ≈ 0,215 T (conforme à l'exercice 4 du PDF officiel)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérification du sens du champ par le sens de F",
          "stepTheme": "Sens de B",
          "stepBadge": "Déduction vectorielle",
          "paragraphText": "Si le courant circule de C vers D (vers la droite) et que la balance exige une masse m sur le plateau droit pour s'équilibrer (ce qui signifie que la force de Laplace F sur le bras gauche est descendante), la règle de la main droite (Index vers la droite, Pouce vers le bas) impose que le majeur pointe vers l'observateur : le champ B est donc SORTANT (⊙ B).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q5",
            "type": "mcq",
            "prompt": "Le courant va de gauche à droite sur le segment CD et la force de Laplace est dirigée vers le bas. Quel est le sens du vecteur champ magnétique B ?",
            "options": [
              "Sortant vers l'observateur (perpendiculaire au plan de la figure vers l'avant)",
              "Entrant dans la feuille",
              "Horizontal vers la gauche",
              "Vertical vers le haut"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Index vers la droite, Pouce vers le bas => le majeur pointe nécessairement vers l'observateur (vecteur sortant)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Confusion entre masse en milligrammes et en kilogrammes",
          "stepTheme": "Unités SI",
          "stepBadge": "1 mg = 10⁻⁶ kg",
          "paragraphText": "Dans les énoncés de travaux dirigés sur la balance de Cotton, les masses de tare sont souvent données en milligrammes (mg). N'oubliez jamais que 1 mg = 10⁻³ g = 10⁻⁶ kg ! Oublier ce facteur 10⁻⁶ conduit à une valeur de champ magnétique fausse d'un facteur un million.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q6",
            "type": "mcq",
            "prompt": "Une masse de tare est m = 2,5 mg. Quelle est sa valeur exacte en unités du Système International (kg) ?",
            "options": [
              "2,5 * 10⁻⁶ kg",
              "2,5 * 10⁻³ kg",
              "0,025 kg",
              "2,5 * 10⁻⁹ kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "1 mg = 10⁻³ g = 10⁻⁶ kg, donc 2,5 mg = 2,5 * 10⁻⁶ kg."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Précision de la mesure de B",
          "stepTheme": "Métrologie",
          "stepBadge": "Équilibre mécanique",
          "paragraphText": "La balance de Cotton présente l'énorme avantage métrologique de ne dépendre d'aucun étalonnage électrique interne : elle repose uniquement sur la géométrie du circuit (ℓ), l'accélération de la pesanteur g et une pesée de masse, ce qui en fait un étalon primaire pour calibrer les sondes de Hall.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi la balance de Cotton est-elle considérée comme une méthode de mesure absolue du champ magnétique B ?",
            "options": [
              "Parce qu'elle ramène la mesure de B à des grandeurs fondamentales mesurables directement (longueur, masse, intensité, pesanteur)",
              "Parce qu'elle fonctionne sans aucun courant",
              "Parce qu'elle utilise un laser",
              "Parce qu'elle ne subit pas la pesanteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle ne dépend d'aucune propriété empirique de capteur semi-conducteur, mais uniquement de la définition fondamentale de la force électromagnétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q1",
          "type": "mcq",
          "prompt": "Quel est l'objectif premier de la balance de Cotton en travaux pratiques de physique ?",
          "options": [
            "Mesurer avec précision la valeur d'un champ magnétique B en équilibrant la force de Laplace avec un poids connu",
            "Mesurer la masse de la Terre",
            "Créer un mouvement perpétuel",
            "Filtrer les fréquences radio"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La balance de Cotton permet une mesure absolue du champ B par comparaison directe entre la force de Laplace I ℓ B et le poids m g."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi donne-t-on la forme d'arcs de cercle centrés en O aux conducteurs latéraux AC et DE de la balance de Cotton ?",
          "options": [
            "Pour que leurs forces de Laplace aient une droite d'action passant par l'axe de rotation, rendant leur moment nul",
            "Pour des raisons purement esthétiques",
            "Pour augmenter la résistance électrique du circuit",
            "Pour empêcher les électrons de sortir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute force dont la droite d'action coupe l'axe de rotation a un bras de levier nul : son moment s'annule, ce qui isole l'action du seul segment utile CD."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q3",
          "type": "mcq",
          "prompt": "Dans une balance de Cotton à bras égaux (d = d'), quelle est la masse m nécessaire pour équilibrer la force de Laplace avec ℓ = 3 cm, I = 8 A, B = 0,5 T et g = 10 m/s² ?",
          "options": [
            "m = 0,012 kg = 12 g",
            "m = 1,2 kg",
            "m = 0,12 g",
            "m = 0,0012 kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "m = (I * ℓ * B) / g = (8 * 0,03 * 0,5) / 10 = 0,12 / 10 = 0,012 kg = 12 g (conforme à l'exercice 2 du PDF officiel)."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q4",
          "type": "mcq",
          "prompt": "La pente de la droite I = f(m) d'une balance de Cotton vaut k = 1600 A/kg avec g = 10 m/s² et ℓ = 2,9 cm (0,029 m). Quelle est la valeur déduite du champ magnétique B ?",
          "options": [
            "B ≈ 0,215 T",
            "B ≈ 2,15 T",
            "B ≈ 0,0215 T",
            "B ≈ 4,64 T"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = g / (ℓ B) => B = g / (k * ℓ) = 10 / (1600 * 0,029) = 10 / 46,4 ≈ 0,2155 T ≈ 0,215 T (conforme à l'exercice 4 du PDF officiel)."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q5",
          "type": "mcq",
          "prompt": "Le courant va de gauche à droite sur le segment CD et la force de Laplace est dirigée vers le bas. Quel est le sens du vecteur champ magnétique B ?",
          "options": [
            "Sortant vers l'observateur (perpendiculaire au plan de la figure vers l'avant)",
            "Entrant dans la feuille",
            "Horizontal vers la gauche",
            "Vertical vers le haut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Index vers la droite, Pouce vers le bas => le majeur pointe nécessairement vers l'observateur (vecteur sortant)."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q6",
          "type": "mcq",
          "prompt": "Une masse de tare est m = 2,5 mg. Quelle est sa valeur exacte en unités du Système International (kg) ?",
          "options": [
            "2,5 * 10⁻⁶ kg",
            "2,5 * 10⁻³ kg",
            "0,025 kg",
            "2,5 * 10⁻⁹ kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1 mg = 10⁻³ g = 10⁻⁶ kg, donc 2,5 mg = 2,5 * 10⁻⁶ kg."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi la balance de Cotton est-elle considérée comme une méthode de mesure absolue du champ magnétique B ?",
          "options": [
            "Parce qu'elle ramène la mesure de B à des grandeurs fondamentales mesurables directement (longueur, masse, intensité, pesanteur)",
            "Parce qu'elle fonctionne sans aucun courant",
            "Parce qu'elle utilise un laser",
            "Parce qu'elle ne subit pas la pesanteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle ne dépend d'aucune propriété empirique de capteur semi-conducteur, mais uniquement de la définition fondamentale de la force électromagnétique."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l06_loi_de_laplace_p04",
      "order": 4,
      "title": "Équilibre d'une tige mobile oscillante suspendue",
      "summary": "Étude mécanique d'une tige conductrice suspendue en rotation autour d'un axe horizontal fixe, bilan des forces (Poids, Réaction de l'axe, Force de Laplace), théorème des moments et calcul de l'inclinaison α à l'équilibre.",
      "conceptExplanation": "1. Dispositif de la tige pendulaire suspendue :\nUne tige métallique homogène OA de masse m et de longueur ℓ est mobile autour d'un axe horizontal fixe (Delta) passant par son extrémité supérieure O. Elle plonge par son extrémité A dans une cuve de mercure assurant le contact électrique avec des frottements négligeables. La tige est parcourue par un courant I et plongée dans un champ magnétique horizontal uniforme B perpendiculaire au plan d'oscillation.\n\n2. Bilan des forces appliquées à la tige OA à l'équilibre :\n- Le poids de la tige P = m g, vertical descendant, appliqué au centre d'inertie G (milieu de la tige, OG = ℓ / 2) ;\n- La réaction R de l'axe de rotation passant par O, dont le moment par rapport à (Delta) est nul (M_Delta(R) = 0) car sa droite d'action coupe l'axe ;\n- La force de Laplace F, horizontale (car F ⊥ tige et F ⊥ B horizontal), appliquée au milieu de la portion de conducteur située dans le champ.\n\n3. Théorème des moments à l'équilibre :\nLorsque la tige fait un angle d'inclinaison α avec la verticale :\nSomme M_Delta(F_ext) = 0 => M_Delta(P) + M_Delta(F) + M_Delta(R) = 0.\n- Moment du poids : M_Delta(P) = - m g * (ℓ / 2) * sin α (le poids tend à ramener la tige vers la verticale) ;\n- Moment de la force de Laplace : si la force F est horizontale et appliquée en G (à distance ℓ / 2 de O) : M_Delta(F) = + F * (ℓ / 2) * cos α.\nÀ l'équilibre :\nF * (ℓ / 2) * cos α - m g * (ℓ / 2) * sin α = 0\n=> F * cos α = m g * sin α\n=> tan α = F / (m g).\n\n4. Cas où la tige est entièrement plongée dans le champ (F = I ℓ B) :\nSi la force F s'exerce perpendiculairement à la tige : le moment s'écrit F * (ℓ/2) et on obtient selon la géométrie du montage :\nsin α = (I ℓ B) / (m g)  ou  tan α = (I ℓ B) / (m g).\nL'angle d'inclinaison α augmente lorsque le courant I ou le champ B augmente, et diminue si la tige est plus lourde.",
      "keyRule": "À l'équilibre de la tige suspendue : la somme des moments par rapport à l'axe O est nulle. L'inclinaison α résulte du compromis entre le moment de rappel du poids et le moment moteur de la force de Laplace.",
      "formulas": [
        {
          "name": "Théorème des moments à l'équilibre",
          "formula": "\\sum \\mathcal{M}_\\Delta(\\vec{F}_\\text{ext}) = \\mathcal{M}_\\Delta(\\vec{P}) + \\mathcal{M}_\\Delta(\\vec{F}) + \\mathcal{M}_\\Delta(\\vec{R}) = 0",
          "note": "M_Delta(R) = 0 car R coupe l'axe"
        },
        {
          "name": "Angle d'inclinaison (force horizontale)",
          "formula": "\\tan\\alpha = \\frac{F}{m\\,g} = \\frac{I\\,\\ell\\,B}{m\\,g}",
          "note": "Pour une force de Laplace horizontale"
        },
        {
          "name": "Angle d'inclinaison (force perpendiculaire à la tige)",
          "formula": "\\sin\\alpha = \\frac{I\\,\\ell\\,B}{m\\,g}",
          "note": "Formulation du PDF officiel Côte d'Ivoire (p. 7)"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'angle d'inclinaison de la tige de Laplace",
        "statement": "Une tige de cuivre de longueur ℓ = 20 cm et de masse m = 10 g (0,010 kg) est entièrement plongée dans un champ magnétique B = 5,0 * 10⁻² T. Elle est traversée par un courant I = 5,0 A (g = 10 m/s²). Calcule l'angle de déviation α à l'équilibre en utilisant la relation du programme sin α = (I ℓ B) / (m g).",
        "methodSteps": [
          "Étape 1 : Calculer la force de Laplace maximale : F = I * ℓ * B = 5,0 * 0,20 * (5,0 * 10⁻²) = 1,0 * (5,0 * 10⁻²) = 0,050 N.",
          "Étape 2 : Calculer le poids de la tige : P = m * g = 0,010 * 10 = 0,10 N.",
          "Étape 3 : Calculer le rapport sin α : sin α = F / P = 0,050 / 0,10 = 0,50.",
          "Étape 4 : Déduire l'angle d'inclinaison : α = arcsin(0,50) = 30°."
        ],
        "conclusion": "La tige s'incline d'un angle de 30° par rapport à la verticale à l'équilibre statique."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan des forces et bras de levier sur la tige suspendue OA",
        "tableData": {
          "headers": [
            "Force",
            "Point d'application",
            "Bras de levier par rapport à O",
            "Sens de rotation induit",
            "Expression du moment"
          ],
          "rows": [
            [
              "Poids P = m g",
              "Centre de gravité G (OG = ℓ / 2)",
              "(ℓ / 2) sin α (horizontal)",
              "Rappel vers la verticale (sens horaire)",
              "M_Delta(P) = - m g (ℓ / 2) sin α"
            ],
            [
              "Force de Laplace F",
              "Centre G (ou portion active)",
              "ℓ / 2 (perpendiculaire à la tige)",
              "Écartement vers l'extérieur",
              "M_Delta(F) = + F (ℓ / 2)"
            ],
            [
              "Réaction de l'axe R",
              "Point de suspension O",
              "Bras de levier = 0",
              "Aucun effet de rotation",
              "M_Delta(R) = 0"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le pendule de Laplace à contact liquide",
          "stepTheme": "Dispositif pendulaire",
          "stepBadge": "Pivot O et cuve Hg",
          "paragraphText": "Le pendule de Laplace est une tige conductrice articulée au point O, fermant le circuit électrique par son extrémité inférieure qui effleure une cuve de mercure conductrice. Ce contact liquide assure la fermeture permanente du circuit sans bloquer la rotation libre de la tige.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle du mercure liquide dans l'expérience de la tige de Laplace suspendue ?",
            "options": [
              "Assurer le contact électrique du circuit tout en offrant une résistance mécanique quasi nulle à la rotation de la tige",
              "Refroidir la tige de cuivre",
              "Créer un champ magnétique supplémentaire",
              "Empêcher l'oxydation de l'air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mercure étant un métal liquide conducteur à température ambiante, il permet à la tige de dévier librement sans la friction mécanique d'un fil rigide."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le moment nul de la réaction d'axe M(R) = 0",
          "stepTheme": "Bras de levier nul",
          "stepBadge": "R passe par O",
          "paragraphText": "La réaction mécanique exercée par le support d'articulation s'applique au point O situé sur l'axe de rotation fixe (Delta). La distance entre sa droite d'action et l'axe étant rigoureusement nulle, le moment de R par rapport à l'axe de rotation est nul à tout instant : M_Delta(R) = 0.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q2",
            "type": "mcq",
            "prompt": "Pourquoi la réaction de l'axe de rotation R n'intervient-elle pas dans l'équation d'équilibre des moments ?",
            "options": [
              "Parce que sa droite d'action coupe l'axe de rotation O (bras de levier nul)",
              "Parce que la réaction de l'axe est toujours égale à zéro",
              "Parce qu'elle est perpendiculaire au champ magnétique",
              "Parce que la tige est très légère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toute force passant par l'axe de rotation a un bras de levier d = 0, donc un moment scalaire rigoureusement nul."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul du bras de levier du poids",
          "stepTheme": "Bras de levier du poids",
          "stepBadge": "d_P = (ℓ / 2) sin α",
          "paragraphText": "Le centre de gravité G d'une tige homogène est situé à mi-longueur (OG = ℓ / 2). Lorsque la tige est inclinée d'un angle α par rapport à la verticale, la distance orthogonale entre l'axe vertical passant par O et la ligne d'action verticale du poids est d_P = (ℓ / 2) sin α. Le moment de rappel du poids vaut donc M_Delta(P) = - m g (ℓ / 2) sin α.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q3",
            "type": "mcq",
            "prompt": "Pour une tige de longueur ℓ = 30 cm inclinée d'un angle α = 30° par rapport à la verticale (sin 30° = 0,5), quel est le bras de levier du poids par rapport à l'axe de rotation O ?",
            "options": [
              "d_P = 7,5 cm = 0,075 m",
              "d_P = 15 cm",
              "d_P = 30 cm",
              "d_P = 13 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "d_P = (ℓ / 2) * sin α = (0,30 / 2) * 0,5 = 0,15 * 0,5 = 0,075 m = 7,5 cm."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Expression de l'angle à l'équilibre sin α = (I ℓ B) / (m g)",
          "stepTheme": "Formule d'équilibre",
          "stepBadge": "sin α = F / P",
          "paragraphText": "En égalant le moment moteur de Laplace et le moment de rappel du poids : F * (ℓ / 2) = m g * (ℓ / 2) * sin α => F = m g sin α. En remplaçant F = I ℓ B, on obtient l'expression canonique de l'angle d'inclinaison : sin α = (I ℓ B) / (m g).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q4",
            "type": "mcq",
            "prompt": "Dans un montage où m = 20 g, g = 10 N/kg, ℓ = 10 cm et B = 0,4 T, quel courant I faut-il faire passer pour que sin α = 0,5 (inclinaison α = 30°) ?",
            "options": [
              "I = 2,5 A",
              "I = 5,0 A",
              "I = 1,0 A",
              "I = 0,25 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "sin α = (I ℓ B) / (m g) => I = (m g sin α) / (ℓ B) = (0,020 * 10 * 0,5) / (0,10 * 0,4) = 0,10 / 0,04 = 2,5 A."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Cas d'une portion limitée soumise au champ magnétique",
          "stepTheme": "Portion symétrique",
          "stepBadge": "Portion h de la tige",
          "paragraphText": "Si seule une portion de hauteur h de la tige est soumise au champ magnétique et que cette portion est inclinée avec la tige (longueur active dans le champ ℓ_active = h / cos α), la force de Laplace s'exprime par F = I (h / cos α) B. Le théorème des moments conduit alors à I = (m g sin 2α) / (2 h B).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q5",
            "type": "mcq",
            "prompt": "Pour m = 20 g, g = 10 N/kg, h = 5 cm, B = 0,5 T et α = 10° (avec sin 20° ≈ 0,342), calcule l'intensité I du courant selon la relation du sujet officiel d'examen I = (m g sin 2α) / (2 h B) :",
            "options": [
              "I ≈ 1,37 A (environ 1,36 A)",
              "I ≈ 2,74 A",
              "I ≈ 0,68 A",
              "I ≈ 5,50 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "I = (0,020 * 10 * sin 20°) / (2 * 0,05 * 0,5) = (0,20 * 0,342) / 0,05 = 0,0684 / 0,05 ≈ 1,368 A ≈ 1,37 A (conforme à l'exercice 5 du PDF officiel p. 11)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Limite physique sin α ≤ 1",
          "stepTheme": "Condition de décrochage",
          "stepBadge": "I ℓ B ≤ m g",
          "paragraphText": "Puisque la fonction sinus ne peut jamais dépasser 1 (sin α ≤ 1), la relation sin α = (I ℓ B) / (m g) n'admet de solution d'équilibre statique que si la force de Laplace reste inférieure au poids : F ≤ P. Si le courant I est trop intense de sorte que I ℓ B > m g, la tige ne trouve plus d'équilibre oblique : elle est éjectée vers le haut et sort violemment de la cuve de mercure !",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est l'intensité maximale du courant I_max au-delà de laquelle la tige de Laplace (avec ℓ = 0,2 m, B = 0,05 T, m = 10 g, g = 10 N/kg) ne peut plus trouver d'équilibre stable ?",
            "options": [
              "I_max = 10 A (pour sin α = 1)",
              "I_max = 5 A",
              "I_max = 1 A",
              "I_max = 20 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "sin α = 1 => I_max = (m * g) / (ℓ * B) = (0,010 * 10) / (0,20 * 0,05) = 0,10 / 0,010 = 10 A."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Oscillations libres de la tige autour de l'équilibre",
          "stepTheme": "Régime oscillatoire",
          "stepBadge": "Pendule électromagnétique",
          "paragraphText": "Si la tige est légèrement écartée de sa position d'équilibre α_eq puis lâchée, elle effectue des oscillations mécaniques libres amorties autour de cette position d'équilibre oblique avant de s'y stabiliser sous l'effet des frottements.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p04_q7",
            "type": "mcq",
            "prompt": "Autour de quelle position une tige de Laplace oscille-t-elle lorsqu'on la perturbe légèrement en présence de courant et de champ magnétique ?",
            "options": [
              "Autour de sa position d'équilibre oblique inclinée de l'angle α_eq",
              "Autour de la verticale stricte",
              "Autour de l'horizontale",
              "Elle tourne indéfiniment sans osciller"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nouvelle position d'équilibre stable est l'angle α_eq défini par l'égalité des moments : les petites oscillations se font de part et d'autre de cette position oblique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle du mercure liquide dans l'expérience de la tige de Laplace suspendue ?",
          "options": [
            "Assurer le contact électrique du circuit tout en offrant une résistance mécanique quasi nulle à la rotation de la tige",
            "Refroidir la tige de cuivre",
            "Créer un champ magnétique supplémentaire",
            "Empêcher l'oxydation de l'air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mercure étant un métal liquide conducteur à température ambiante, il permet à la tige de dévier librement sans la friction mécanique d'un fil rigide."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q2",
          "type": "mcq",
          "prompt": "Pourquoi la réaction de l'axe de rotation R n'intervient-elle pas dans l'équation d'équilibre des moments ?",
          "options": [
            "Parce que sa droite d'action coupe l'axe de rotation O (bras de levier nul)",
            "Parce que la réaction de l'axe est toujours égale à zéro",
            "Parce qu'elle est perpendiculaire au champ magnétique",
            "Parce que la tige est très légère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute force passant par l'axe de rotation a un bras de levier d = 0, donc un moment scalaire rigoureusement nul."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q3",
          "type": "mcq",
          "prompt": "Pour une tige de longueur ℓ = 30 cm inclinée d'un angle α = 30° par rapport à la verticale (sin 30° = 0,5), quel est le bras de levier du poids par rapport à l'axe de rotation O ?",
          "options": [
            "d_P = 7,5 cm = 0,075 m",
            "d_P = 15 cm",
            "d_P = 30 cm",
            "d_P = 13 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "d_P = (ℓ / 2) * sin α = (0,30 / 2) * 0,5 = 0,15 * 0,5 = 0,075 m = 7,5 cm."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q4",
          "type": "mcq",
          "prompt": "Dans un montage où m = 20 g, g = 10 N/kg, ℓ = 10 cm et B = 0,4 T, quel courant I faut-il faire passer pour que sin α = 0,5 (inclinaison α = 30°) ?",
          "options": [
            "I = 2,5 A",
            "I = 5,0 A",
            "I = 1,0 A",
            "I = 0,25 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "sin α = (I ℓ B) / (m g) => I = (m g sin α) / (ℓ B) = (0,020 * 10 * 0,5) / (0,10 * 0,4) = 0,10 / 0,04 = 2,5 A."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q5",
          "type": "mcq",
          "prompt": "Pour m = 20 g, g = 10 N/kg, h = 5 cm, B = 0,5 T et α = 10° (avec sin 20° ≈ 0,342), calcule l'intensité I du courant selon la relation du sujet officiel d'examen I = (m g sin 2α) / (2 h B) :",
          "options": [
            "I ≈ 1,37 A (environ 1,36 A)",
            "I ≈ 2,74 A",
            "I ≈ 0,68 A",
            "I ≈ 5,50 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I = (0,020 * 10 * sin 20°) / (2 * 0,05 * 0,5) = (0,20 * 0,342) / 0,05 = 0,0684 / 0,05 ≈ 1,368 A ≈ 1,37 A (conforme à l'exercice 5 du PDF officiel p. 11)."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est l'intensité maximale du courant I_max au-delà de laquelle la tige de Laplace (avec ℓ = 0,2 m, B = 0,05 T, m = 10 g, g = 10 N/kg) ne peut plus trouver d'équilibre stable ?",
          "options": [
            "I_max = 10 A (pour sin α = 1)",
            "I_max = 5 A",
            "I_max = 1 A",
            "I_max = 20 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "sin α = 1 => I_max = (m * g) / (ℓ * B) = (0,010 * 10) / (0,20 * 0,05) = 0,10 / 0,010 = 10 A."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p04_q7",
          "type": "mcq",
          "prompt": "Autour de quelle position une tige de Laplace oscille-t-elle lorsqu'on la perturbe légèrement en présence de courant et de champ magnétique ?",
          "options": [
            "Autour de sa position d'équilibre oblique inclinée de l'angle α_eq",
            "Autour de la verticale stricte",
            "Autour de l'horizontale",
            "Elle tourne indéfiniment sans osciller"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nouvelle position d'équilibre stable est l'angle α_eq défini par l'égalité des moments : les petites oscillations se font de part et d'autre de cette position oblique."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l06_loi_de_laplace_p05",
      "order": 5,
      "title": "Moteurs et convertisseurs : Roue de Barlow et Haut-parleur",
      "summary": "Principe et fonctionnement de la roue de Barlow (rotation continue par relais de rayons conducteurs), constitution et fonctionnement du haut-parleur électrodynamique (vibration de la membrane par courant alternatif).",
      "conceptExplanation": "1. La roue de Barlow (premier moteur électrique continu) :\nInventée par Peter Barlow en 1822, la roue de Barlow est constituée d'un disque de cuivre en forme de roue dentée ou de disque plein, mobile autour d'un axe horizontal Delta. Cet axe est relié à l'une des bornes d'un générateur continu. L'autre borne est reliée à une cuvette de mercure liquide dans laquelle plonge l'extrémité inférieure du disque. Un aimant en U crée un champ magnétique B perpendiculaire au plan du disque au niveau de la cuvette.\n- Fonctionnement : Le rayon plongeant dans le mercure est traversé par un courant radial I allant de l'axe vers la périphérie. Plongé dans le champ B, ce rayon subit une force de Laplace tangentielle F = I R B.\n- Cette force crée un couple de rotation par rapport à l'axe. Sous l'action de ce couple, le rayon tourne et quitte la cuvette, mais immédiatement le rayon suivant y plonge et prend le relais. La roue est ainsi animée d'un mouvement de rotation continu.\n\n2. Le haut-parleur électrodynamique :\nLe haut-parleur transforme un signal électrique en onde sonore acoustique. Il est composé de :\n- Un aimant permanent fixe créant un champ magnétique B intense radial dans son entrefer circulaire ;\n- Une bobine mobile légère cylindrique comportant N spires de fil de cuivre, baignant dans le champ B ;\n- Une membrane conique souple solidaire de la bobine, chargée de déplacer l'air ambiant.\n- Fonctionnement : Lorsqu'un courant alternatif i(t) issu d'un amplificateur traverse la bobine, chaque élément de spire subit une force de Laplace axiale F(t) = N I(t) ℓ B. La force change de sens à la même fréquence que le signal électrique, entraînant la vibration en va-et-vient de la bobine et de la membrane. Cette vibration communique des compressions et détentes périodiques à l'air, produisant l'onde sonore perçue par l'oreille humaine.",
      "keyRule": "La roue de Barlow transforme le courant continu en rotation continue via un couple de Laplace tangentiel. Le haut-parleur transforme un courant alternatif en vibrations mécaniques acoustiques via une force de Laplace axiale F(t) = N i(t) ℓ B.",
      "formulas": [
        {
          "name": "Couple moteur de la roue de Barlow",
          "formula": "\\mathcal{M}_\\text{moteur} = F \\cdot \\frac{R}{2} = \\frac{1}{2}\\,I\\,R^2\\,B",
          "note": "Rayon R du disque de cuivre"
        },
        {
          "name": "Force axiale du haut-parleur",
          "formula": "F(t) = N\\,i(t)\\,\\ell_1\\,B = i(t)\\,L_\\text{totale}\\,B",
          "note": "Fait vibrer la membrane à la fréquence du son"
        }
      ],
      "workedExample": {
        "title": "Calcul de la force acoustique exercée sur la membrane d'un haut-parleur",
        "statement": "La bobine mobile d'un haut-parleur comporte N = 100 spires de diamètre moyen D = 2,5 cm (périmètre d'une spire ℓ₁ = π D ≈ 7,85 cm). Elle baigne dans un champ magnétique radial uniforme B = 0,80 T. Calcule la force de Laplace instantanée F exercée sur la membrane pour une intensité de crête i = 0,50 A.",
        "methodSteps": [
          "Étape 1 : Calculer la longueur utile totale du fil de la bobine : L_tot = N * π * D = 100 * 3,1416 * 0,025 = 7,854 m.",
          "Étape 2 : Vérifier l'orthogonalité : le champ étant radial et le courant circulaire le long des spires, le fil est partout strictement perpendiculaire aux lignes de champ (sin 90° = 1).",
          "Étape 3 : Calculer la force de Laplace axiale : F = i * L_tot * B = 0,50 * 7,854 * 0,80 = 3,14 N."
        ],
        "conclusion": "La membrane est propulsée avec une force de 3,14 N à la fréquence du signal musical."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif de la Roue de Barlow et du Haut-parleur",
        "tableData": {
          "headers": [
            "Appareil",
            "Type de courant",
            "Champ magnétique B",
            "Mouvement produit",
            "Fonction technologique"
          ],
          "rows": [
            [
              "Roue de Barlow",
              "Courant continu (DC)",
              "Transversal perpendiculaire au disque",
              "Rotation continue unidirectionnelle",
              "Premier moteur électrique à courant continu"
            ],
            [
              "Haut-parleur électrodynamique",
              "Courant alternatif audio i(t)",
              "Radial uniforme dans l'entrefer",
              "Vibrations axiales en va-et-vient",
              "Transducteur électroacoustique (son)"
            ],
            [
              "Moteur à courant continu usuel",
              "Courant continu commuté",
              "Polaire (stator)",
              "Rotation continue à fort couple",
              "Traction, démarreur, ventilateurs"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La roue de Barlow",
          "stepTheme": "Moteur élémentaire",
          "stepBadge": "Disque de cuivre et mercure",
          "paragraphText": "La roue de Barlow est un disque de cuivre mobile autour d'un axe horizontal dont la partie inférieure plonge dans une cuve de mercure placée entre les pôles d'un aimant. Le passage d'un courant continu crée une force de Laplace tangentielle qui entretient la rotation continue du disque.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p05_q1",
            "type": "mcq",
            "prompt": "Quel phénomène assure le maintien permanent de la rotation de la roue de Barlow sans collecteur à balais complexe ?",
            "options": [
              "Le relais continu entre rayons : chaque rayon qui sort de la cuve est immédiatement remplacé par le suivant qui plonge dans le mercure",
              "L'inertie thermique du cuivre",
              "L'évaporation du mercure",
              "Une réaction électrostatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bord dentelé ou continu du disque plongeant dans la nappe de mercure assure un contact électrique permanent par succession ininterrompue de rayons conducteurs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Sens de rotation de la roue de Barlow",
          "stepTheme": "Règle des trois doigts",
          "stepBadge": "Inversion de rotation",
          "paragraphText": "Le sens de rotation de la roue de Barlow est déterminé par la règle de la main droite appliquée au rayon conducteur immergé. Pour inverser le sens de rotation de la roue, il suffit d'inverser les bornes du générateur de courant continu ou de retourner l'aimant en U.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p05_q2",
            "type": "mcq",
            "prompt": "La roue de Barlow tourne dans le sens horaire. Que se passe-t-il si l'on inverse simultanément le sens du courant et le sens du champ magnétique ?",
            "options": [
              "Elle continue de tourner dans le sens horaire",
              "Elle tourne dans le sens trigonométrique anti-horaire",
              "Elle s'arrête net",
              "Elle commence à osciller d'avant en arrière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inverser deux fois de suite la force de Laplace rétablit le sens initial : le sens de rotation reste inchangé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Constitution du haut-parleur électrodynamique",
          "stepTheme": "Acoustique",
          "stepBadge": "Bobine mobile et membrane",
          "paragraphText": "Un haut-parleur électrodynamique comprend un aimant permanent avec pièce polaire cylindrique centrale créant un champ radial B dans un entrefer circulaire, une bobine mobile très légère et un cône (membrane) en papier ou matériau composite solidaire de la bobine.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p05_q3",
            "type": "mcq",
            "prompt": "Pourquoi le champ magnétique dans l'entrefer d'un haut-parleur est-il de forme radiale ?",
            "options": [
              "Pour que les lignes de champ soient perpendiculaires en tout point au courant circulaire des spires, maximisant la force axiale",
              "Pour éviter d'aimanter la membrane",
              "Pour réduire la chaleur dégagée",
              "Pour bloquer la bobine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un champ radial est orthogonal à la circonférence des spires en tout point : ainsi sin α = 1 partout et la force de Laplace résultante est purement axiale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Vibration de la membrane à la fréquence du signal",
          "stepTheme": "Génération acoustique",
          "stepBadge": "F(t) = B L i(t)",
          "paragraphText": "La force de Laplace instantanée F(t) = B L_tot i(t) est strictement proportionnelle au courant instantané i(t). Si le courant est sinusoïdal de fréquence f, la force de Laplace oscille à la fréquence f, contraignant la membrane à vibrer à cette même fréquence et à émettre une onde acoustique de hauteur sonore f.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p05_q4",
            "type": "mcq",
            "prompt": "Si un courant alternatif de fréquence f = 1000 Hz traverse la bobine d'un haut-parleur, quelle est la fréquence de l'onde sonore émise dans l'air ?",
            "options": [
              "1000 Hz (son de fréquence identique)",
              "2000 Hz",
              "500 Hz",
              "100 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La force de Laplace suit fidèlement le signal sinusoïdal d'entrée sans altération de fréquence : la membrane vibre exactement à 1000 Hz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Puissance et amplitude sonore",
          "stepTheme": "Niveau sonore",
          "stepBadge": "Amplitude sonore ∝ i",
          "paragraphText": "L'amplitude de vibration de la membrane et la puissance acoustique émise dépendent directement de l'amplitude de la force de Laplace, donc de l'amplitude de l'intensité du courant délivré par l'amplificateur. Augmenter le volume sonore revient à augmenter l'amplitude de i(t).",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p05_q5",
            "type": "mcq",
            "prompt": "Si l'on double l'intensité de crête du courant traversant la bobine d'un haut-parleur, que devient l'amplitude de la force motrice de Laplace ?",
            "options": [
              "Elle est doublée",
              "Elle est quadruplée",
              "Elle reste inchangée",
              "Elle est divisée par 2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme F = B L i, la force de Laplace est rigoureusement proportionnelle au premier degré à l'intensité du courant : doubler i double exactement F."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas alimenter un haut-parleur en courant continu",
          "stepTheme": "Risque de destruction",
          "stepBadge": "Effet Joule destructeur",
          "paragraphText": "Si l'on applique une tension continue à un haut-parleur, la force de Laplace maintient la bobine décalée d'un côté de manière statique sans émettre de son (aucun va-et-vient). L'absence de mouvement entraîne une dissipation purement thermique par effet Joule qui peut brûler la fine bobine mobile en quelques secondes !",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q6",
            "type": "mcq",
            "prompt": "Que se produit-il si l'on branche une pile de 9 V continue directement sur les bornes d'un haut-parleur de 4 ohms ?",
            "options": [
              "La membrane se déplace une seule fois et reste bloquée, la bobine surchauffe rapidement par effet Joule sans produire de son continu",
              "Le haut-parleur émet une note musicale très pure",
              "La membrane se met à tourner sur elle-même",
              "Le haut-parleur recharge la pile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un haut-parleur a besoin d'un signal alternatif pour vibrer. En continu, la bobine subit un courant permanent I = U / R qui provoque son échauffement destructeur."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Microphone électrodynamique (fonctionnement réversible)",
          "stepTheme": "Transducteur réversible",
          "stepBadge": "Induction inverse",
          "paragraphText": "Le haut-parleur électrodynamique est un transducteur réversible : s'il convertit le courant en son par la loi de Laplace, il peut aussi fonctionner en microphone. Une onde sonore frappant la membrane fait bouger la bobine dans le champ B, ce qui induit une force électromotrice par induction électromagnétique.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p05_q7",
            "type": "mcq",
            "prompt": "Pourquoi peut-on utiliser une paire d'écouteurs audio basiques en guise de microphone de dépannage ?",
            "options": [
              "En raison du principe de réversibilité électromécanique : la voix fait vibrer la membrane, générant un courant induit dans la bobine",
              "Parce que les écouteurs contiennent une batterie interne",
              "Parce que le plastique vibre",
              "Parce que le son est électrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réciprocité fondamentale entre la force de Laplace (moteur) et l'induction de Faraday (générateur)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p05_q1",
          "type": "mcq",
          "prompt": "Quel phénomène assure le maintien permanent de la rotation de la roue de Barlow sans collecteur à balais complexe ?",
          "options": [
            "Le relais continu entre rayons : chaque rayon qui sort de la cuve est immédiatement remplacé par le suivant qui plonge dans le mercure",
            "L'inertie thermique du cuivre",
            "L'évaporation du mercure",
            "Une réaction électrostatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bord dentelé ou continu du disque plongeant dans la nappe de mercure assure un contact électrique permanent par succession ininterrompue de rayons conducteurs."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p05_q2",
          "type": "mcq",
          "prompt": "La roue de Barlow tourne dans le sens horaire. Que se passe-t-il si l'on inverse simultanément le sens du courant et le sens du champ magnétique ?",
          "options": [
            "Elle continue de tourner dans le sens horaire",
            "Elle tourne dans le sens trigonométrique anti-horaire",
            "Elle s'arrête net",
            "Elle commence à osciller d'avant en arrière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inverser deux fois de suite la force de Laplace rétablit le sens initial : le sens de rotation reste inchangé."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p05_q3",
          "type": "mcq",
          "prompt": "Pourquoi le champ magnétique dans l'entrefer d'un haut-parleur est-il de forme radiale ?",
          "options": [
            "Pour que les lignes de champ soient perpendiculaires en tout point au courant circulaire des spires, maximisant la force axiale",
            "Pour éviter d'aimanter la membrane",
            "Pour réduire la chaleur dégagée",
            "Pour bloquer la bobine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un champ radial est orthogonal à la circonférence des spires en tout point : ainsi sin α = 1 partout et la force de Laplace résultante est purement axiale."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p05_q4",
          "type": "mcq",
          "prompt": "Si un courant alternatif de fréquence f = 1000 Hz traverse la bobine d'un haut-parleur, quelle est la fréquence de l'onde sonore émise dans l'air ?",
          "options": [
            "1000 Hz (son de fréquence identique)",
            "2000 Hz",
            "500 Hz",
            "100 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force de Laplace suit fidèlement le signal sinusoïdal d'entrée sans altération de fréquence : la membrane vibre exactement à 1000 Hz."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p05_q5",
          "type": "mcq",
          "prompt": "Si l'on double l'intensité de crête du courant traversant la bobine d'un haut-parleur, que devient l'amplitude de la force motrice de Laplace ?",
          "options": [
            "Elle est doublée",
            "Elle est quadruplée",
            "Elle reste inchangée",
            "Elle est divisée par 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme F = B L i, la force de Laplace est rigoureusement proportionnelle au premier degré à l'intensité du courant : doubler i double exactement F."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q6",
          "type": "mcq",
          "prompt": "Que se produit-il si l'on branche une pile de 9 V continue directement sur les bornes d'un haut-parleur de 4 ohms ?",
          "options": [
            "La membrane se déplace une seule fois et reste bloquée, la bobine surchauffe rapidement par effet Joule sans produire de son continu",
            "Le haut-parleur émet une note musicale très pure",
            "La membrane se met à tourner sur elle-même",
            "Le haut-parleur recharge la pile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un haut-parleur a besoin d'un signal alternatif pour vibrer. En continu, la bobine subit un courant permanent I = U / R qui provoque son échauffement destructeur."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p05_q7",
          "type": "mcq",
          "prompt": "Pourquoi peut-on utiliser une paire d'écouteurs audio basiques en guise de microphone de dépannage ?",
          "options": [
            "En raison du principe de réversibilité électromécanique : la voix fait vibrer la membrane, générant un courant induit dans la bobine",
            "Parce que les écouteurs contiennent une batterie interne",
            "Parce que le plastique vibre",
            "Parce que le son est électrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réciprocité fondamentale entre la force de Laplace (moteur) et l'induction de Faraday (générateur)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l06_loi_de_laplace_p06",
      "order": 6,
      "title": "Courants de Foucault et freinage électromagnétique",
      "summary": "Définition des courants de Foucault dans les conducteurs massifs, loi de Lenz et forces de Laplace de freinage, applications au freinage d'endurance (ralentisseurs Telma, TGV), chauffage par induction, et suppression des pertes par feuilletage des tôles.",
      "conceptExplanation": "1. Définition des courants de Foucault :\nOn appelle courants de Foucault les courants électriques induits en boucle fermée qui naissent dans la masse d'un conducteur plein lorsqu'il est en mouvement dans un champ magnétique non uniforme ou lorsqu'il est soumis à un champ magnétique variable au cours du temps. Ils sont une conséquence directe de la loi d'induction de Faraday et de la loi de Lenz.\n\n2. Les deux effets physiques majeurs des courants de Foucault :\n- Effet mécanique de freinage (forces de Laplace résistantes) :\nD'après la loi de Lenz, les courants induits s'opposent par leurs effets à la cause qui leur a donné naissance. Les courants de Foucault circulant dans la masse conductrice immergée dans le champ magnétique subissent des forces de Laplace dont la résultante s'oppose systématiquement au déplacement du conducteur : c'est le freinage électromagnétique.\n- Effet thermique (chauffage par effet Joule) :\nLa circulation de ces courants intenses dans la masse métallique dissipe de l'énergie sous forme de chaleur par effet Joule : P = R_masse * I_Foucault².\n\n3. Applications industrielles du freinage électromagnétique sans contact :\n- Ralentisseurs de poids lourds et autocars (système Telma) : des électroaimants fixes (stator) induisent des courants de Foucault dans des disques d'acier (rotors) entraînés par l'arbre de transmission. Le couple de freinage sans friction mécanique est inusable et idéal en montagne ;\n- Rames ferroviaires à grande vitesse (Shinkansen japonais, ICE 3 allemand) : patins électromagnétiques à courants de Foucault freinant directement sur les rails d'acier sans usure de garniture.\n\n4. Application au chauffage et à la fusion : les plaques à induction :\nUn inducteur situé sous la plaque vitrocéramique génère un champ magnétique alternatif à haute fréquence (25 à 50 kHz). Il induit des courants de Foucault géants dans le fond ferromagnétique de la casserole, qui chauffe instantanément par effet Joule avec un rendement énergétique remarquable.\n\n5. Limitation des pertes dans les transformateurs : le feuilletage :\nDans les circuits magnétiques des transformateurs et moteurs électriques alternatifs, les courants de Foucault constituent une perte sèche indésirable d'énergie (pertes fer). Pour les éliminer, on remplace le bloc d'acier massif par un empilement de tôles minces d'acier au silicium isolées électriquement les unes des autres par un vernis isolant (tôles feuilletées).",
      "keyRule": "Les courants de Foucault sont des courants induits dans la masse. Par la loi de Lenz, ils créent des forces de Laplace qui freinent le mouvement. Pour réduire les pertes dans les transformateurs, on feuillette le noyau métallique.",
      "formulas": [
        {
          "name": "Loi de Lenz (sens des courants induits)",
          "formula": "\\vec{F}_\\text{freinage} = \\int \\vec{j}_\\text{Foucault} \\wedge \\vec{B}\\,\\mathrm{d}V \\quad (\\vec{F}_\\text{freinage} \\cdot \\vec{v} < 0)",
          "note": "Puissance résistante de freinage"
        },
        {
          "name": "Pertes thermiques par effet Joule",
          "formula": "P_J = R_\\text{masse}\\,I_\\text{Foucault}^2",
          "note": "Chauffage par induction ou pertes fer"
        }
      ],
      "workedExample": {
        "title": "Analyse du freinage d'un disque de Foucault",
        "statement": "Un disque massif en aluminium tourne librement à grande vitesse. On approche les pôles d'un puissant aimant en U au niveau de sa périphérie sans jamais toucher le disque. Décris et explique les phénomènes physiques observés.",
        "methodSteps": [
          "Étape 1 : Analyser le passage du métal dans le champ : chaque secteur du disque entre dans l'entrefer où B est fort puis en ressort où B est nul, subissant une variation temporelle de flux magnétique.",
          "Étape 2 : Identifier les courants induits : des courants circulaires de Foucault prennent naissance dans l'épaisseur du disque d'aluminium.",
          "Étape 3 : Appliquer la loi de Laplace et la loi de Lenz : ces courants de Foucault plongés dans le champ B de l'aimant subissent des forces de Laplace opposées au mouvement de rotation.",
          "Étape 4 : Constater l'effet macroscopique : le disque ralentit brutalement et s'arrête en quelques secondes sans aucun frottement mécanique ni bruit de contact."
        ],
        "conclusion": "Le disque est freiné sans contact par les forces de Laplace induites, et l'énergie cinétique est intégralement dissipée sous forme de chaleur dans le disque."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des effets et applications des courants de Foucault",
        "tableData": {
          "headers": [
            "Domaine d'application",
            "Effet physique exploité",
            "Dispositif technologique",
            "Avantage clé",
            "Inconvénient ou contrainte"
          ],
          "rows": [
            [
              "Freinage de transport",
              "Forces de Laplace opposées à la vitesse",
              "Ralentisseur Telma (autocars), Shinkansen",
              "Zéro usure mécanique, pas de garniture à remplacer",
              "Inopérant à l'arrêt complet (v = 0 => F = 0)"
            ],
            [
              "Chauffage domestique",
              "Effet Joule à haute fréquence",
              "Plaques de cuisson à induction",
              "Chauffe directe de la casserole, sécurité maximale",
              "Exige des récipients ferromagnétiques compatibles"
            ],
            [
              "Contrôle de sécurité",
              "Modification d'impédance induite",
              "Détection de fissures dans les rails et avions",
              "Contrôle non destructif ultra-précis",
              "Sensible à la rugosité de surface"
            ],
            [
              "Circuits magnétiques",
              "Pertes parasites indésirables",
              "Transformateurs et alternateurs",
              "Feuilletage des tôles en fines lamelles isolées",
              "Augmente le coût de fabrication mécanique"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition des courants de Foucault",
          "stepTheme": "Courants dans la masse",
          "stepBadge": "Conducteur massif",
          "paragraphText": "Les courants de Foucault sont les courants électriques induits qui circulent en boucles fermées dans la masse d'un conducteur plein lorsqu'il se déplace dans un champ magnétique ou lorsqu'il baigne dans un champ magnétique variable.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q1",
            "type": "mcq",
            "prompt": "Dans quel type d'objet des courants de Foucault peuvent-ils se développer ?",
            "options": [
              "Une pièce massive métallique conductrice (plaque d'aluminium, disque d'acier)",
              "Un bloc de bois sec",
              "Une plaque de verre isolante",
              "Un fil de cuivre infiniment fin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les courants de Foucault nécessitent un matériau conducteur d'électricité possédant un volume massif permettant aux boucles de courant de s'étendre en surface et en profondeur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La loi de Lenz et le couple de freinage",
          "stepTheme": "Loi de Lenz",
          "stepBadge": "Force opposée à la vitesse",
          "paragraphText": "En vertu de la loi de Lenz, les courants de Foucault s'opposent systématiquement au mouvement qui les engendre : immergés dans le champ magnétique inducteur, ils subissent des forces de Laplace orientées en sens contraire du vecteur vitesse, créant un puissant couple de freinage électromagnétique.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q2",
            "type": "mcq",
            "prompt": "Pourquoi un pendule constitué d'une plaque massive de cuivre s'arrête-t-il quasi instantanément lorsqu'on l'envoie osciller entre les pôles d'un aimant ?",
            "options": [
              "Parce que les courants de Foucault induits créent des forces de Laplace de freinage qui dissipent l'énergie cinétique",
              "Parce que le cuivre colle à l'aimant",
              "Parce que l'air devient solide entre les pôles",
              "Parce que la gravité est supprimée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le passage rapide du cuivre dans le champ génère des courants de Foucault intenses dont les forces de Laplace freinent vigoureusement le pendule."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Incapacité à immobiliser un véhicule à l'arrêt",
          "stepTheme": "Limite du freinage magnétique",
          "stepBadge": "F = 0 à l'arrêt (v = 0)",
          "paragraphText": "La force de freinage par courants de Foucault dépend directement de la vitesse du rotor : plus le véhicule roule vite, plus le freinage est puissant. En revanche, à l'arrêt (v = 0), la variation de flux est nulle, donc les courants et la force de Laplace sont rigoureusement nuls : un ralentisseur électromagnétique ne peut JAMAIS bloquer un véhicule à l'arrêt complet.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q3",
            "type": "mcq",
            "prompt": "Pourquoi les autocars équipés d'un ralentisseur électromagnétique Telma doivent-ils obligatoirement conserver des freins à disques ou tambours mécaniques conventionnels ?",
            "options": [
              "Parce que le ralentisseur électromagnétique s'annule à vitesse nulle et ne peut pas maintenir le véhicule immobile à l'arrêt ou en pente",
              "Parce que le ralentisseur consomme trop d'essence",
              "Parce que les freins mécaniques sont interdits",
              "Pour faire du bruit à l'arrêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le freinage par courants de Foucault étant proportionnel à la vitesse, il devient nul quand le véhicule s'arrête : il sert de frein d'endurance mais nécessite un frein mécanique pour l'immobilisation finale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Principe du chauffage par induction",
          "stepTheme": "Plaques à induction",
          "stepBadge": "Effet Joule haute fréquence",
          "paragraphText": "Dans une plaque à induction, une bobine alimentée par un courant alternatif haute fréquence crée un champ magnétique oscillant qui traverse le fond ferromagnétique de la casserole. Les courants de Foucault induits circulent dans le métal et le chauffent directement par effet Joule, sans chauffer la plaque de verre.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q4",
            "type": "mcq",
            "prompt": "Pourquoi un récipient en verre ou en faïence pure ne chauffe-t-il pas sur une plaque de cuisson à induction ?",
            "options": [
              "Parce que le verre est un isolant électrique où aucun courant de Foucault ne peut circuler",
              "Parce que le verre est trop lourd",
              "Parce que le verre absorbe le champ magnétique",
              "Parce que l'induction ne fonctionne que dans l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'induction exige la circulation de porteurs de charge libres : dans un isolant comme le verre, aucun courant de Foucault ne naît et aucune chaleur n'est dissipée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le feuilletage des circuits magnétiques de transformateurs",
          "stepTheme": "Réduction des pertes fer",
          "stepBadge": "Tôles isolées",
          "paragraphText": "Pour empêcher les courants de Foucault de chauffer inutilement le noyau en fer d'un transformateur ou d'un moteur alternatif, on remplace le bloc massif par un assemblage de fines tôles d'acier isolées entre elles par un vernis ou une couche d'oxydation : les boucles de courant sont ainsi fragmentées et les pertes thermiques réduites de plus de 90%.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q5",
            "type": "mcq",
            "prompt": "Quel est le but du 'feuilletage' du circuit magnétique d'un transformateur électrique ?",
            "options": [
              "Diviser les trajectoires des courants de Foucault afin de minimiser les pertes d'énergie par effet Joule",
              "Alléger le poids de l'appareil",
              "Augmenter la résistance du cuivre",
              "Permettre à l'air de circuler"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le feuilletage coupe les boucles macroscopiques de courants de Foucault, réduisant drastiquement les pertes fer par effet Joule et augmentant le rendement du transformateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Fentes dans une plaque oscillante et suppression du freinage",
          "stepTheme": "Plaque en peigne",
          "stepBadge": "Plaque fendue",
          "paragraphText": "Si l'on découpe des fentes longitudinales dans une plaque de cuivre oscillante (plaque en peigne), les courants de Foucault ne peuvent plus former de grandes boucles de circulation fermée : le freinage électromagnétique disparaît presque totalement et la plaque continue d'osciller librement entre les pôles de l'aimant !",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q6",
            "type": "mcq",
            "prompt": "Que constate-t-on si l'on remplace une plaque pleine par une plaque découpée en forme de peigne dans l'expérience du pendule amorti par un aimant ?",
            "options": [
              "La plaque en peigne oscille beaucoup plus longtemps car les fentes empêchent le développement des boucles de courants de Foucault",
              "Elle s'arrête encore plus vite",
              "Elle est attirée par le pôle Nord",
              "Elle se met à chauffer au rouge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les fentes coupent la continuité électrique transversale : les courants de Foucault restent confinés dans des boucles minuscules sans force de freinage macroscopique notable."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Contrôle non destructif (CND) des métaux",
          "stepTheme": "Sécurité aéronautique",
          "stepBadge": "Détection de microfissures",
          "paragraphText": "Dans l'aviation et sur les voies ferrées, une sonde électromagnétique balaie les pièces métalliques : la présence d'une microfissure interne perturbe localement la circulation des courants de Foucault induits, ce qui modifie l'impédance de la sonde et signale le défaut sans détruire ni démonter la pièce.",
          "exercise": {
            "id": "terminale_d_physique_l06_loi_de_laplace_p06_q7",
            "type": "mcq",
            "prompt": "Comment les courants de Foucault permettent-ils de détecter une fissure invisible dans une aile d'avion en alliage d'aluminium ?",
            "options": [
              "La fissure interrompt localement le trajet des courants de Foucault induits, ce qui modifie l'impédance mesurée par la sonde de détection",
              "La fissure émet une étincelle visible à l'œil nu",
              "La fissure change la couleur de l'avion",
              "La fissure attire l'aimant de la sonde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La discontinuité matérielle dévie les courants de Foucault induits : la variation du champ induit résultant trahit immédiatement la présence et la profondeur de la fissure."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q1",
          "type": "mcq",
          "prompt": "Dans quel type d'objet des courants de Foucault peuvent-ils se développer ?",
          "options": [
            "Une pièce massive métallique conductrice (plaque d'aluminium, disque d'acier)",
            "Un bloc de bois sec",
            "Une plaque de verre isolante",
            "Un fil de cuivre infiniment fin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les courants de Foucault nécessitent un matériau conducteur d'électricité possédant un volume massif permettant aux boucles de courant de s'étendre en surface et en profondeur."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q2",
          "type": "mcq",
          "prompt": "Pourquoi un pendule constitué d'une plaque massive de cuivre s'arrête-t-il quasi instantanément lorsqu'on l'envoie osciller entre les pôles d'un aimant ?",
          "options": [
            "Parce que les courants de Foucault induits créent des forces de Laplace de freinage qui dissipent l'énergie cinétique",
            "Parce que le cuivre colle à l'aimant",
            "Parce que l'air devient solide entre les pôles",
            "Parce que la gravité est supprimée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le passage rapide du cuivre dans le champ génère des courants de Foucault intenses dont les forces de Laplace freinent vigoureusement le pendule."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q3",
          "type": "mcq",
          "prompt": "Pourquoi les autocars équipés d'un ralentisseur électromagnétique Telma doivent-ils obligatoirement conserver des freins à disques ou tambours mécaniques conventionnels ?",
          "options": [
            "Parce que le ralentisseur électromagnétique s'annule à vitesse nulle et ne peut pas maintenir le véhicule immobile à l'arrêt ou en pente",
            "Parce que le ralentisseur consomme trop d'essence",
            "Parce que les freins mécaniques sont interdits",
            "Pour faire du bruit à l'arrêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le freinage par courants de Foucault étant proportionnel à la vitesse, il devient nul quand le véhicule s'arrête : il sert de frein d'endurance mais nécessite un frein mécanique pour l'immobilisation finale."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q4",
          "type": "mcq",
          "prompt": "Pourquoi un récipient en verre ou en faïence pure ne chauffe-t-il pas sur une plaque de cuisson à induction ?",
          "options": [
            "Parce que le verre est un isolant électrique où aucun courant de Foucault ne peut circuler",
            "Parce que le verre est trop lourd",
            "Parce que le verre absorbe le champ magnétique",
            "Parce que l'induction ne fonctionne que dans l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'induction exige la circulation de porteurs de charge libres : dans un isolant comme le verre, aucun courant de Foucault ne naît et aucune chaleur n'est dissipée."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q5",
          "type": "mcq",
          "prompt": "Quel est le but du 'feuilletage' du circuit magnétique d'un transformateur électrique ?",
          "options": [
            "Diviser les trajectoires des courants de Foucault afin de minimiser les pertes d'énergie par effet Joule",
            "Alléger le poids de l'appareil",
            "Augmenter la résistance du cuivre",
            "Permettre à l'air de circuler"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le feuilletage coupe les boucles macroscopiques de courants de Foucault, réduisant drastiquement les pertes fer par effet Joule et augmentant le rendement du transformateur."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q6",
          "type": "mcq",
          "prompt": "Que constate-t-on si l'on remplace une plaque pleine par une plaque découpée en forme de peigne dans l'expérience du pendule amorti par un aimant ?",
          "options": [
            "La plaque en peigne oscille beaucoup plus longtemps car les fentes empêchent le développement des boucles de courants de Foucault",
            "Elle s'arrête encore plus vite",
            "Elle est attirée par le pôle Nord",
            "Elle se met à chauffer au rouge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les fentes coupent la continuité électrique transversale : les courants de Foucault restent confinés dans des boucles minuscules sans force de freinage macroscopique notable."
        },
        {
          "id": "terminale_d_physique_l06_loi_de_laplace_p06_q7",
          "type": "mcq",
          "prompt": "Comment les courants de Foucault permettent-ils de détecter une fissure invisible dans une aile d'avion en alliage d'aluminium ?",
          "options": [
            "La fissure interrompt localement le trajet des courants de Foucault induits, ce qui modifie l'impédance mesurée par la sonde de détection",
            "La fissure émet une étincelle visible à l'œil nu",
            "La fissure change la couleur de l'avion",
            "La fissure attire l'aimant de la sonde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La discontinuité matérielle dévie les courants de Foucault induits : la variation du champ induit résultant trahit immédiatement la présence et la profondeur de la fissure."
        }
      ]
    }
  ]
};
