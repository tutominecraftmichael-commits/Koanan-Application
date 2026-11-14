import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L10_REPRODUCTION_SPERMAPHYTES: CurriculumChapter = {
  id: "terminale_d_svt_ch11_reproduction_chez_les_spermaphytes",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 10,
  title: "La reproduction chez les spermaphytes (Anthère, ovule, pollinisation et double fécondation)",
  summary: "Étude complète et approfondie de la reproduction sexuée chez les plantes à fleurs (Spermaphytes / Angiospermes) selon le programme officiel de SVT Terminale D de Côte d'Ivoire : structure microscopique de l'anthère et microsporogenèse (formation du grain de pollen bicellulaire), anatomie de l'ovaire, ovule anatrope et mégasporogenèse (formation du sac embryonnaire à 7 cellules et 8 noyaux), pollinisation et germination chimiotropique du tube pollinique avec division du noyau reproducteur en 2 anthérozoïdes, double fécondation exclusive (zygote principal diploïde 2n donnant l'embryon, zygote accessoire triploïde 3n donnant l'albumen), et transformation finale de l'ovule en graine et de l'ovaire en fruit.",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_structure_anthere_formation_grain_pollen",
      order: 1,
      title: "Structure de l'anthère et formation du grain de pollen (Microsporogenèse)",
      summary: "Organisation de l'étamine et de l'anthère jeune, microsporogenèse par méiose de la cellule mère diploïde (tétrade de microspores) et mitose asymétrique produisant le grain de pollen mûr (cellules végétative et reproductrice, exine et intine).",
      conceptExplanation: "Chez les spermaphytes (plantes à graines) et particulièrement les angiospermes, la fleur est l'appareil reproducteur. L'androcée, appareil reproducteur mâle, est constitué d'étamines.\n\n1. Organisation anatomique et histologique de l'anthère :\nChaque étamine comprend un filet conducteur surmonté d'une anthère bilobée. Une coupe transversale d'anthère jeune montre deux lobes reliés par le connectif (traversé par un faisceau libéro-ligneux conducteur de sève). Chaque lobe renferme deux sacs polliniques (soit quatre sacs polliniques par anthère). De l'extérieur vers l'intérieur, la paroi d'un sac pollinique comprend :\n- L'épiderme externe protecteur ;\n- L'assise mécanique (ou endothécium) : couche de cellules aux parois épaissies de bandes de lignine en forme de U, responsable de la déhiscence ;\n- Une ou deux assises transitoires (ou assises nourricières) qui s'atrophient lors de la maturation ;\n- L'assise nourricière la plus interne (le tapis) qui sécrète les substances nutritives pour les microspores en développement ;\n- Au centre, le tissu sporogène constitué de cellules mères des grains de pollen (cellules diploïdes à 2n chromosomes).\n\n2. La microsporogenèse et microgamétogenèse :\n- Division réductionnelle (Méiose) : Chaque cellule mère diploïde (2n) subit la première division de méiose donnant 2 cellules haploïdes (n), qui enchaînent immédiatement la deuxième division de méiose. On obtient un groupe de quatre cellules haploïdes (n) appelées microspores, d'abord enveloppées dans une paroi commune de callose : c'est la tétrade de microspores.\n- Dissociation de la tétrade : La callase dissout la gangue, libérant les microspores isolées.\n- Mitose asymétrique : Chaque microspore haploïde subit une mitose inégale (microgamétogenèse) qui produit deux cellules emboîtées de tailles très différentes :\n  * La cellule végétative : très volumineuse, riche en réserves nutritives (amidon, lipides), munie d'un gros noyau végétatif polyploïde/sphérique, destinée à nourrir et guider le tube pollinique ;\n  * La cellule reproductrice (ou générative) : petite cellule lenticulaire flottant dans le cytoplasme de la cellule végétative, munie d'un noyau reproducteur condensé, destinée à donner les gamètes mâles.\n\n3. Structure du grain de pollen mûr et déhiscence :\nLe grain de pollen est entouré d'une double enveloppe protectrice très résistante :\n- L'exine : enveloppe externe épaisse, cutinisée, imprégnée de sporopollénine (polymère quasi indestructible), ornée d'épines ou de crêtes caractéristiques de l'espèce et percée d'ouvertures (pores germinatifs ou sillons) ;\n- L'intine : membrane interne mince, pectocellulosique, souple et continue.\nÀ maturité, la déshydratation des cellules de l'assise mécanique provoque leur rétraction différentielle : l'anthère se fend longitudinalement au niveau de la fente de déhiscence (stomium) et libère les grains de pollen déshydratés.",
      keyRule: "Chaque cellule mère (2n) de l'anthère donne par méiose une tétrade de 4 microspores (n). Chaque microspore donne par mitose un grain de pollen mûr renfermant 2 cellules : la cellule végétative (contenant le noyau végétatif) et la cellule reproductrice (contenant le noyau reproducteur).",
      formulas: [
        {
          name: "Rendement de la microsporogenèse",
          formula: "1 \\text{ Cellule mère diploïde (2n)} \\xrightarrow{\\text{Méiose}} 4 \\text{ Microspores (n)} \\xrightarrow{\\text{Mitose}} 4 \\text{ Grains de pollen mûrs (bicellulaires)}",
          note: "Chaque grain de pollen renferme 2 noyaux haploïdes n"
        }
      ],
      workedExample: {
        title: "Calcul du nombre de grains de pollen produits par une fleur",
        statement: "Une fleur d'hibiscus possède 5 étamines. Chaque anthère comporte 4 sacs polliniques. Des coupes histologiques révèlent qu'un sac pollinique contient en moyenne 250 cellules mères de grains de pollen. Calculer : 1. Le nombre total de microspores générées dans un sac pollinique. 2. Le nombre total de grains de pollen libérés par la fleur à maturité.",
        methodSteps: [
          "Étape 1 : Calculer le nombre de microspores par sac pollinique. Chaque cellule mère (2n) subit une méiose et donne 4 microspores (n). Donc : 250 × 4 = 1 000 microspores par sac.",
          "Étape 2 : Relier microspores et grains de pollen. Chaque microspore subit une mitose pour former 1 grain de pollen mûr. Chaque sac produit donc 1 000 grains de pollen.",
          "Étape 3 : Calculer le total par étamine. Une étamine possède 4 sacs polliniques : 4 × 1 000 = 4 000 grains de pollen par étamine.",
          "Étape 4 : Calculer pour la fleur complète. La fleur compte 5 étamines : 5 × 4 000 = 20 000 grains de pollen."
        ],
        conclusion: "La fleur produit un total de 20 000 grains de pollen mûrs prêts pour la pollinisation."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Organisation et formation du grain de pollen au sein de l'anthère",
        tableData: {
          headers: ["Niveau / Stade", "Ploïdie", "Structure cellulaire", "Rôle / Devenir physiologique"],
          rows: [
            ["Cellule mère du sac pollinique", "Diploïde (2n)", "Grande cellule au centre du microsporange", "Subit la méiose réductionnelle et équationnelle"],
            ["Tétrade de microspores", "Haploïde (n)", "4 microspores réunies par la callose", "Isolement des spores haploïdes issues du brassage"],
            ["Cellule végétative du pollen", "Haploïde (n)", "Cytoplasme riche en réserves + noyau végétatif", "Élaboration et élongation du tube pollinique"],
            ["Cellule reproductrice du pollen", "Haploïde (n)", "Petite cellule lenticulaire incluse", "Subira une mitose pour donner 2 anthérozoïdes"],
            ["Exine externe", "Acellulaire", "Matrice épaisse de sporopollénine à pores", "Protection physique/chimique et reconnaissance stigmatique"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c11_p1_ex1",
          type: "mcq",
          prompt: "Combien de sacs polliniques une anthère typique d'Angiosperme renferme-t-elle à l'état jeune ?",
          options: [
            "4 sacs polliniques (2 par lobe de l'anthère)",
            "1 seul sac pollinique central",
            "8 sacs polliniques",
            "16 sacs polliniques répartis en cercle"
          ],
          correctAnswerIndex: 0,
          explanation: "Une anthère jeune comprend deux lobes latéraux reliés par le connectif, et chaque lobe abrite deux sacs polliniques (microsporanges), soit un total de 4 sacs polliniques."
        },
        {
          id: "tle_d_svt_c11_p1_ex2",
          type: "mcq",
          prompt: "Quelle couche tissulaire de la paroi de l'anthère est directement responsable de son ouverture (déhiscence) à maturité grâce à ses épaississements lignifiés ?",
          options: [
            "L'assise mécanique (endothécium)",
            "L'épiderme cutinisé",
            "Le tapis nourricier",
            "Le faisceau libéro-ligneux"
          ],
          correctAnswerIndex: 0,
          explanation: "L'assise mécanique possède des parois latérales et internes épaissies de bandes de lignine en U. Lors de la dessiccation, sa déformation rétractile provoque la déchirure au niveau de la fente de déhiscence."
        },
        {
          id: "tle_d_svt_c11_p1_ex3",
          type: "mcq",
          prompt: "Combien de grains de pollen fonctionnels sont produits par méiose puis mitose à partir d'une cellule mère diploïde (2n) ?",
          options: [
            "4 grains de pollen haploïdes",
            "1 seul grain de pollen (les 3 autres dégénèrent)",
            "2 grains de pollen diploïdes",
            "8 grains de pollen"
          ],
          correctAnswerIndex: 0,
          explanation: "Contrairement à la lignée femelle où 3 spores dégénèrent, chez le mâle les 4 microspores issues de la méiose d'une cellule mère évoluent toutes en grains de pollen viables."
        },
        {
          id: "tle_d_svt_c11_p1_ex4",
          type: "mcq",
          prompt: "Quelles sont les deux cellules qui constituent le grain de pollen mûr libéré par l'anthère ?",
          options: [
            "Une grande cellule végétative et une petite cellule reproductrice emboîtée",
            "Deux cellules reproductrices identiques nageuses",
            "Une cellule mère et un globule polaire",
            "Une oosphère et une synergide"
          ],
          correctAnswerIndex: 0,
          explanation: "Le grain de pollen est une structure bicellulaire : il contient la grande cellule végétative (réserves et noyau végétatif) et la petite cellule reproductrice (qui donnera les gamètes mâles)."
        },
        {
          id: "tle_d_svt_c11_p1_ex5",
          type: "mcq",
          prompt: "Comment nomme-t-on l'enveloppe externe, épaisse, ornementée et imputrescible qui protège le grain de pollen des agressions extérieures ?",
          options: [
            "L'exine",
            "L'intine",
            "La membrane plasmique",
            "La zone pellucide"
          ],
          correctAnswerIndex: 0,
          explanation: "L'exine est la paroi externe imprégnée de sporopollénine résistante aux enzymes et acides, munie de pores germinatifs. L'intine est la membrane interne mince cellulosique."
        },
        {
          id: "tle_d_svt_c11_p1_ex6",
          type: "mcq",
          prompt: "Quel est l'état de ploïdie respectif de la cellule mère du pollen et des noyaux du grain de pollen mûr ?",
          options: [
            "Cellule mère diploïde (2n) ; noyaux végétatif et reproducteur haploïdes (n)",
            "Cellule mère haploïde (n) ; noyaux diploïdes (2n)",
            "Tous sont triploïdes (3n)",
            "Cellule mère tétraploïde (4n) ; noyaux diploïdes (2n)"
          ],
          correctAnswerIndex: 0,
          explanation: "La cellule mère est somatique diploïde (2n). La méiose divise le nombre de chromosomes par deux : les microspores puis les deux noyaux du grain de pollen sont strictement haploïdes (n)."
        }
      ]
    },
    {
      id: "pt2_structure_ovaire_ovule_sac_embryonnaire",
      order: 2,
      title: "Structure de l'ovaire, anatomie de l'ovule et genèse du sac embryonnaire (Mégasporogenèse)",
      summary: "Organisation du pistil et de l'ovule anatrope (funicule, nucelle, téguments, micropyle), mégasporogenèse méiotique (dégénérescence de 3 mégaspores) et 3 mitoses formant le sac embryonnaire à 7 cellules et 8 noyaux (oosphère, synergides, antipodes, noyaux centraux).",
      conceptExplanation: "Le gynécée (ou pistil) est l'appareil reproducteur femelle de la fleur. Il comprend le stigmate gluant, le style et l'ovaire clos enfermant un ou plusieurs ovules.\n\n1. Anatomie de l'ovule d'Angiosperme (cas de l'ovule anatrope) :\nL'ovule est inséré sur la paroi ovarienne au niveau du placenta par un axe nourricier appelé funicule. Chez l'ovule anatrope (le plus fréquent), le corps de l'ovule est recourbé à 180° le long du funicule, soudé à celui-ci par une ligne d'attache appelée raphé. L'ovule comprend :\n- Le hile : point de jonction entre le funicule et le corps de l'ovule ;\n- La chalaze : région basale interne où se ramifient les faisceaux conducteurs vasculaires ;\n- Deux téguments protecteurs : la primine (externe) et la secondine (interne), qui enveloppent le tissu nourricier central (le nucelle) ;\n- Le micropyle : orifice étroit ménagé par l'interruption des téguments au sommet du nucelle, par où s'introduira le tube pollinique ;\n- Le nucelle : massif charnu diploïde (2n) au sein duquel va se développer le gamétophyte femelle.\n\n2. Mégasporogenèse (formation de la mégaspore) :\n- Au sein du nucelle jeune, une cellule hypodermique volumineuse se différencie en cellule mère du sac embryonnaire (cellule diploïde 2n).\n- Cette cellule mère subit la méiose complète et donne quatre cellules haploïdes (n) superposées en file linéaire : les mégaspores (ou macrospores).\n- Dégénérescence programmée : Les trois mégaspores situées du côté du micropyle dégénèrent rapidement et disparaissent. Seule la mégaspore la plus profonde (côté chalaze) subsiste : c'est la mégaspore fonctionnelle.\n\n3. Mégagamétogenèse (formation du sac embryonnaire) :\nLa mégaspore fonctionnelle grossit considérablement en absorbant les réserves du nucelle, puis son noyau haploïde subit trois mitoses successives sans cloisonnement cellulaire immédiat :\n- 1re mitose : 2 noyaux haploïdes qui migrent chacun vers un pôle opposé (un pôle micropylaire et un pôle chalazien) ;\n- 2e mitose : 4 noyaux haploïdes (2 à chaque pôle) ;\n- 3e mitose : 8 noyaux haploïdes (4 au pôle micropylaire et 4 au pôle chalazien).\n\n4. Compartimentation cytologique du sac embryonnaire (gamétophyte femelle) :\nUn noyau de chaque pôle migre vers le centre du sac : ce sont les deux noyaux polaires (ou noyaux centraux). Des membranes plasmiques s'individualisent autour des autres noyaux, formant 7 cellules distinctes hébergeant 8 noyaux :\n- Au pôle micropylaire (appareil oosphérique) : 3 cellules haploïdes (n) :\n  * L'oosphère : grosse cellule centrale, le véritable gamète femelle ;\n  * Deux synergides : petites cellules latérales encadrant l'oosphère, sécrétant des molécules chimiotropiques pour guider le tube pollinique ;\n- Au pôle chalazien : 3 cellules haploïdes (n) de même taille, les antipodes, au rôle trophique transitoire ;\n- Au centre : la cellule centrale (ou cellule principale), occupant l'essentiel du volume, renfermant les 2 noyaux polaires haploïdes (n + n) non fusionnés.",
      keyRule: "L'ovule renferme le sac embryonnaire formé de 7 cellules et 8 noyaux : au micropyle l'oosphère (gamète femelle n) et 2 synergides ; à la chalaze 3 antipodes ; au centre la cellule principale à 2 noyaux polaires (n + n).",
      formulas: [
        {
          name: "Bilan nucléaire et cellulaire du sac embryonnaire",
          formula: "1 \\text{ Mégaspore (n)} \\xrightarrow{3 \\text{ mitoses}} 8 \\text{ Noyaux haploïdes} \\longrightarrow \\begin{cases} 3 \\text{ cellules micropylaires (1 oosphère + 2 synergides)} \\\\ 3 \\text{ cellules chalaziennes (antipodes)} \\\\ 1 \\text{ cellule centrale (2 noyaux polaires)} \\end{cases}",
          note: "Structure caractéristique à 7 cellules et 8 noyaux des Angiospermes"
        }
      ],
      workedExample: {
        title: "Calcul du nombre de mitoses lors de la genèse du gamétophyte femelle",
        statement: "On étudie la formation du sac embryonnaire à partir de la cellule mère diploïde dans le nucelle d'un ovule de lis. 1. Établir le nombre de méioses et de mitoses nécessaires pour obtenir le sac embryonnaire mature. 2. Expliquer pourquoi sur les 4 mégaspores issues de la méiose, une seule produit des gamètes.",
        methodSteps: [
          "Étape 1 : Analyser la phase méiotique. La cellule mère (2n) subit 1 seule méiose (2 divisions consécutives) pour donner 4 mégaspores haploïdes (n).",
          "Étape 2 : Analyser le tri cellulaire. Les 3 mégaspores micropylaires entrent en apoptose et dégénèrent ; seule la mégaspore chalazienne persiste pour concentrer les réserves nutritives du nucelle.",
          "Étape 3 : Analyser la phase mitotique. La mégaspore restante subit successivement 3 cycles de mitoses nucléaires : 1 -> 2 -> 4 -> 8 noyaux.",
          "Étape 4 : Conclure sur le bilan. 1 méiose suivie de 3 mitoses successives aboutit à l'organisation du sac embryonnaire à 8 noyaux."
        ],
        conclusion: "Il faut 1 méiose et 3 mitoses successives de la mégaspore fonctionnelle pour édifier le sac embryonnaire."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Anatomie de l'ovule anatrope et composition du sac embryonnaire",
        caption: "Coupe d'un ovule anatrope montrant le sac embryonnaire à maturité : 7 cellules et 8 noyaux répartis entre les deux pôles.",
        svgContent: `<svg viewBox="0 0 620 330" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Ovule anatrope et sac embryonnaire">
  <rect x="10" y="10" width="600" height="310" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Téguments et nucelle ovule -->
  <path d="M 220 50 C 130 50, 100 130, 100 200 C 100 270, 160 290, 240 290 C 260 290, 275 270, 275 250" fill="none" stroke="#64748B" stroke-width="4" />
  <path d="M 220 70 C 150 70, 125 135, 125 195 C 125 255, 175 270, 235 270" fill="none" stroke="#94A3B8" stroke-width="3" />
  <text x="70" y="90" font-size="9" fill="#64748B">Téguments (Primine &amp; Secondine)</text>
  <line x1="120" y1="95" x2="160" y2="120" stroke="#64748B" stroke-width="1" />

  <!-- Micropyle (ouverture inférieure) -->
  <text x="250" y="305" font-size="9" font-weight="bold" fill="#D97706">Micropyle (entrée tube pollinique)</text>

  <!-- Chalaze (pôle opposé supérieur) -->
  <text x="220" y="40" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">Pôle Chalazien (Chalaze)</text>

  <!-- Sac embryonnaire (ovale central) -->
  <ellipse cx="220" cy="170" rx="65" ry="90" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" />
  <text x="320" y="140" font-size="10" font-weight="bold" fill="#B45309">SAC EMBRYONNAIRE</text>
  <text x="320" y="155" font-size="8" fill="#78350F">(Gamétophyte femelle : 7 cellules / 8 noyaux)</text>

  <!-- 3 Antipodes (Pôle chalazien, en haut) -->
  <circle cx="200" cy="105" r="9" fill="#E2E8F0" stroke="#64748B" />
  <circle cx="220" cy="100" r="9" fill="#E2E8F0" stroke="#64748B" />
  <circle cx="240" cy="105" r="9" fill="#E2E8F0" stroke="#64748B" />
  <line x1="250" y1="105" x2="330" y2="105" stroke="#64748B" stroke-width="1" />
  <text x="335" y="108" font-size="9" font-weight="bold" fill="#475569">3 Antipodes (n)</text>

  <!-- 2 Noyaux du sac (Noyaux polaires, au centre) -->
  <circle cx="213" cy="168" r="8" fill="#FDE68A" stroke="#D97706" />
  <circle cx="227" cy="168" r="8" fill="#FDE68A" stroke="#D97706" />
  <line x1="240" y1="170" x2="330" y2="170" stroke="#D97706" stroke-width="1" />
  <text x="335" y="173" font-size="9" font-weight="bold" fill="#B45309">2 Noyaux polaires centraux (n + n)</text>
  <text x="335" y="185" font-size="8" fill="#78350F">Futur albumen triploïde (3n)</text>

  <!-- Oosphère et 2 Synergides (Pôle micropylaire, en bas) -->
  <circle cx="220" cy="235" r="13" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.5" />
  <circle cx="198" cy="242" r="9" fill="#E0E7FF" stroke="#6366F1" />
  <circle cx="242" cy="242" r="9" fill="#E0E7FF" stroke="#6366F1" />
  <line x1="240" y1="235" x2="330" y2="225" stroke="#EC4899" stroke-width="1" />
  <text x="335" y="228" font-size="9" font-weight="bold" fill="#BE185D">Oosphère (n) [Gamète femelle]</text>
  <text x="335" y="240" font-size="8" fill="#9D174D">Futur embryon diploïde (2n)</text>
  <line x1="255" y1="250" x2="330" y2="258" stroke="#6366F1" stroke-width="1" />
  <text x="335" y="261" font-size="9" font-weight="bold" fill="#4338CA">2 Synergides (n)</text>
</svg>`,
        tableData: {
          headers: ["Pôle / Région", "Cellules composantes", "Nombre de noyaux", "Fonction biologique majeure"],
          rows: [
            ["Pôle micropylaire", "Oosphère (gamète femelle)", "1 noyau haploïde (n)", "Fécondée par le 1er anthérozoïde -> Zygote embryon (2n)"],
            ["Pôle micropylaire", "2 synergides", "2 noyaux haploïdes (n)", "Attraction chimiotropique et réception du tube pollinique"],
            ["Centre du sac", "Cellule principale", "2 noyaux polaires (n + n)", "Fécondée par le 2e anthérozoïde -> Zygote albumen (3n)"],
            ["Pôle chalazien", "3 antipodes", "3 noyaux haploïdes (n)", "Rôle transitoire de nutrition et conduction des métabolites"],
            ["Enveloppes externes", "Primine, secondine, nucelle", "Tissus diploïdes (2n)", "Protection et nutrition du gamétophyte femelle"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c11_p2_ex1",
          type: "mcq",
          prompt: "Combien de cellules et combien de noyaux le sac embryonnaire mûr des Angiospermes comporte-t-il exactement ?",
          options: [
            "7 cellules et 8 noyaux",
            "8 cellules et 8 noyaux",
            "4 cellules et 4 noyaux",
            "1 cellule géante à 16 noyaux"
          ],
          correctAnswerIndex: 0,
          explanation: "Le sac embryonnaire comprend 7 cellules : 3 au pôle micropylaire (1 oosphère + 2 synergides), 3 au pôle chalazien (antipodes) et 1 grande cellule centrale qui contient à elle seule 2 noyaux polaires, soit 8 noyaux au total."
        },
        {
          id: "tle_d_svt_c11_p2_ex2",
          type: "mcq",
          prompt: "Sur les 4 mégaspores haploïdes issues de la méiose de la cellule mère dans le nucelle, combien deviennent fonctionnelles pour donner le sac embryonnaire ?",
          options: [
            "Une seule mégaspore (les trois autres dégénèrent du côté micropylaire)",
            "Les 4 mégaspores deviennent toutes fonctionnelles",
            "Deux mégaspores fusionnent",
            "Aucune, la fécondation a lieu avant"
          ],
          correctAnswerIndex: 0,
          explanation: "Comme lors de l'ovogenèse chez les mammifères, la mégasporogenèse concentre le cytoplasme : les 3 mégaspores micropylaires dégénèrent, et seule la mégaspore chalazienne subsiste."
        },
        {
          id: "tle_d_svt_c11_p2_ex3",
          type: "mcq",
          prompt: "Combien de mitoses successives la mégaspore fonctionnelle subit-elle pour engendrer les 8 noyaux du sac embryonnaire ?",
          options: [
            "3 mitoses successives",
            "1 seule mitose",
            "2 mitoses",
            "4 mitoses"
          ],
          correctAnswerIndex: 0,
          explanation: "La mégaspore subit 3 mitoses successives sans cytocinèse immédiate : 1 noyau donne 2, puis 4, puis 8 noyaux."
        },
        {
          id: "tle_d_svt_c11_p2_ex4",
          type: "mcq",
          prompt: "Où se situe précisément le véritable gamète femelle (l'oosphère) au sein du sac embryonnaire ?",
          options: [
            "Au pôle micropylaire, encadrée par les deux synergides",
            "Au pôle chalazien avec les antipodes",
            "Flottant librement dans le funicule",
            "Dans la paroi de l'anthère"
          ],
          correctAnswerIndex: 0,
          explanation: "L'oosphère est la grosse cellule centrale située au pôle micropylaire (face à l'entrée du tube pollinique), flanquée des deux synergides."
        },
        {
          id: "tle_d_svt_c11_p2_ex5",
          type: "mcq",
          prompt: "Comment nomme-t-on l'orifice étroit ménagé entre les téguments de l'ovule par lequel pénètre généralement le tube pollinique ?",
          options: [
            "Le micropyle",
            "La chalaze",
            "Le hile",
            "Le raphé"
          ],
          correctAnswerIndex: 0,
          explanation: "Le micropyle est l'ouverture naturelle laissée par les téguments au pôle de l'ovule, permettant le passage guidé du tube pollinique vers le sac embryonnaire."
        },
        {
          id: "tle_d_svt_c11_p2_ex6",
          type: "mcq",
          prompt: "Combien de noyaux héberge la grande cellule centrale du sac embryonnaire avant la fécondation ?",
          options: [
            "2 noyaux haploïdes appelés noyaux polaires (ou noyaux du sac)",
            "1 seul noyau diploïde fusionné",
            "3 noyaux triploïdes",
            "Aucun noyau, c'est une vacuole pure"
          ],
          correctAnswerIndex: 0,
          explanation: "La cellule centrale est binucléée : elle contient deux noyaux haploïdes (n + n) appelés noyaux du sac ou noyaux polaires, qui s'uniront au 2e gamète mâle pour former le tissu de réserve (albumen)."
        }
      ]
    },
    {
      id: "pt3_pollinisation_germination_tube_pollinique",
      order: 3,
      title: "Pollinisation, germination du pollen et acheminement des gamètes mâles",
      summary: "Modalités de la pollinisation (autogamie vs allogamie), germination sur le stigmate, élongation chimiotropique du tube pollinique dans le style, division mitotique de la cellule reproductrice en 2 anthérozoïdes et régression du noyau végétatif.",
      conceptExplanation: "La fécondation chez les plantes à fleurs nécessite le transport passif du pollen de l'anthère vers le stigmate, puis une croissance orientée du tube pollinique vers l'ovule.\n\n1. La pollinisation et ses modalités :\n- Définition : Transport des grains de pollen de l'anthère déhiscente sur les papilles du stigmate réceptif.\n- Pollinisation directe (ou autogamie) : Le pollen féconde le stigmate de la même fleur ou d'une autre fleur de la même plante (blé, pois, riz). Elle favorise l'homozygotie.\n- Pollinisation croisée (ou allogamie) : Le pollen est transporté vers une fleur d'une autre plante de la même espèce. Elle est assurée par divers vecteurs :\n  * Le vent (anémophilie) : graminées, maïs (pollen léger, lisse, produit en abondance, stigmates plumeux) ;\n  * Les insectes (entomophilie) : abeilles, papillons (fleurs colorées, parfumées, nectar, pollen orné et collant) ;\n  * Les oiseaux (ornithophilie) ou l'eau (hydrophilie).\n- Barrières anti-autogamie : hétérostylie, dichogamie (protandrie où les étamines mûrissent avant les pistils), auto-incompatibilité génétique.\n\n2. La germination du grain de pollen sur le stigmate :\n- Adhésion et reconnaissance : Le grain de pollen atterrit sur le stigmate gluant. Une interaction moléculaire entre les protéines de l'exine et les récepteurs stigmatiques confirme la compatibilité de l'espèce.\n- Réhydratation : Le pollen absorbe l'eau et les sécrétions sucrées sécrétées par les papilles stigmatiques.\n- Émergence du tube pollinique : L'intine s'étire et fait hernie à travers un des pores germinatifs de l'exine, formant une fine excroissance tubulaire : le tube pollinique.\n\n3. Croissance du tube pollinique et formation des anthérozoïdes :\n- Élongation chimiotropique : Le tube pollinique s'enfonce entre les cellules du style en dissolvant la lamelle moyenne grâce à des enzymes pectinolytiques. Il est attiré et guidé vers l'ovaire par un gradient chimique (chimiotropisme positif induit par le calcium et des signaux peptidiques sécrétés par les synergides de l'ovule).\n- Rôle du noyau végétatif : Le noyau végétatif s'engage le premier dans le tube et se maintient à l'extrémité apicale en croissance pour réguler l'activité métabolique et la synthèse de paroi.\n- Division de la cellule reproductrice : La cellule reproductrice s'engage dans le tube pollinique derrière le noyau végétatif. Au cours du trajet dans le style, son noyau subit une mitose pour donner deux gamètes mâles haploïdes (n) appelés anthérozoïdes (ou cellules spermatiques immobiles).\n- Arrivée à l'ovule et sénescence végétative : Le tube pollinique atteint l'ovaire, pénètre dans le micropyle (porogamie). À ce stade, le noyau végétatif a achevé sa mission et dégénère complètement.",
      keyRule: "Sur le stigmate réceptif, le pollen germe et émet un tube pollinique qui chemine dans le style par chimiotropisme. Le noyau végétatif guide la croissance puis dégénère. Le noyau reproducteur se divise par mitose pour donner deux anthérozoïdes (gamètes mâles n).",
      formulas: [
        {
          name: "Genèse des gamètes mâles dans le tube pollinique",
          formula: "1 \\text{ Noyau reproducteur (n)} \\xrightarrow{\\text{Mitose dans le tube}} 2 \\text{ Anthérozoïdes haploïdes (n, gamètes mâles)}",
          note: "Le noyau végétatif contrôle l'élongation tubulaire puis s'atrophie"
        }
      ],
      workedExample: {
        title: "Calcul de la vitesse d'élongation du tube pollinique",
        statement: "Chez le maïs, les soies stigmatiques mesurent environ 20 cm de long (200 mm). Des mesures expérimentales montrent que le tube pollinique met 25 heures pour atteindre l'ovule logé à la base de l'épi. 1. Calculer la vitesse moyenne de progression du tube pollinique en mm/h puis en µm/min. 2. Préciser le rôle respectif du noyau végétatif et des deux anthérozoïdes transportés.",
        methodSteps: [
          "Étape 1 : Calculer la vitesse en mm/h. V = d / t = 200 mm / 25 h = 8 mm/h.",
          "Étape 2 : Convertir en µm/min. 8 mm/h = 8 000 µm / 60 min ≈ 133,3 µm/min.",
          "Étape 3 : Définir le rôle des organites. Le noyau végétatif se situe à l'apex et pilote la synthèse de la membrane et de la paroi pectocellulosique du tube. Les deux anthérozoïdes sont les cellules reproductrices haploïdes destinées à la double fécondation."
        ],
        conclusion: "Le tube pollinique progresse à environ 133 µm/min grâce au chimiotropisme exercé par les synergides de l'ovule."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Dynamique de la germination du tube pollinique et transit des noyaux",
        tableData: {
          headers: ["Zone anatomique", "Composant du pollen", "Événement cytologique", "Rôle biologique"],
          rows: [
            ["Surface du stigmate", "Exine / Intine", "Hydratation et germination", "Sortie du tube pollinique par un pore"],
            ["Canal stylaire", "Extrémité du tube", "Croissance chimiotropique", "Guidage vers l'ovule par des signaux de calcium"],
            ["Apex du tube pollinique", "Noyau végétatif", "Contrôle transcriptionnel", "Dirige l'élongation puis dégénère à l'arrivée"],
            ["Lumière du tube pollinique", "Cellule reproductrice", "Mitose équationnelle", "Production de 2 anthérozoïdes (n)"],
            ["Micropyle de l'ovule", "2 anthérozoïdes", "Décharge dans le sac", "Prêts pour la double fécondation"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c11_p3_ex1",
          type: "mcq",
          prompt: "En quoi consiste la pollinisation croisée (allogamie) chez les plantes à fleurs ?",
          options: [
            "Au transport du pollen d'une fleur sur le stigmate d'une autre fleur de la même espèce",
            "À l'autofécondation obligatoire dans un bouton floral fermé",
            "À la dispersion des graines par les fourmis",
            "À la multiplication par bouturage de tige"
          ],
          correctAnswerIndex: 0,
          explanation: "L'allogamie est le transport du pollen entre deux fleurs distinctes (souvent sur des plantes différentes de la même espèce), favorisant le brassage génétique via le vent ou les insectes pollinisateurs."
        },
        {
          id: "tle_d_svt_c11_p3_ex2",
          type: "mcq",
          prompt: "Par quelle structure de la paroi du pollen le tube pollinique émerge-t-il lors de la germination ?",
          options: [
            "Par un pore germinatif de l'exine",
            "Par le noyau reproducteur",
            "Par la fente de déhiscence de l'anthère",
            "Par le faisceau libéro-ligneux"
          ],
          correctAnswerIndex: 0,
          explanation: "Sous l'effet de la turgescence, l'intine extensible pousse à travers une zone d'amincissement de l'exine appelée pore germinatif, formant le tube pollinique."
        },
        {
          id: "tle_d_svt_c11_p3_ex3",
          type: "mcq",
          prompt: "Que devient le noyau reproducteur du grain de pollen pendant sa migration le long du tube pollinique ?",
          options: [
            "Il subit une mitose et donne deux gamètes mâles (anthérozoïdes)",
            "Il subit une méiose et donne quatre globules polaires",
            "Il dégénère immédiatement",
            "Il fusionne avec le noyau végétatif"
          ],
          correctAnswerIndex: 0,
          explanation: "Au cours du transit dans le style, le noyau de la cellule reproductrice se divise par mitose pour engendrer deux anthérozoïdes haploïdes (n)."
        },
        {
          id: "tle_d_svt_c11_p3_ex4",
          type: "mcq",
          prompt: "Quel est le rôle du noyau végétatif tout au long de la croissance du tube pollinique dans le style ?",
          options: [
            "Il se place à l'extrémité pour diriger l'élongation du tube, puis il dégénère une fois l'ovule atteint",
            "Il féconde l'oosphère pour former la plantule",
            "Il se transforme en coquille protectrice",
            "Il attire les abeilles vers la fleur"
          ],
          correctAnswerIndex: 0,
          explanation: "Le noyau végétatif contrôle l'activité physiologique et l'élongation apicale du tube pollinique. Sa fonction accomplie à l'entrée de l'ovule, il dégénère sans participer à la fécondation."
        },
        {
          id: "tle_d_svt_c11_p3_ex5",
          type: "mcq",
          prompt: "Quel phénomène biologique oriente la trajectoire précise du tube pollinique depuis le stigmate jusqu'au micropyle de l'ovule ?",
          options: [
            "Le chimiotropisme positif guidé par des substances chimiques émises par les synergides",
            "La pesanteur universelle exclusivement",
            "L'attraction par la lumière du soleil (phototropisme)",
            "Le courant d'air dans la tige"
          ],
          correctAnswerIndex: 0,
          explanation: "Le guidage du tube pollinique est un chimiotropisme : les deux synergides du sac embryonnaire sécrètent des peptides chimio-attractifs et des flux d'ions Ca²⁺ qui attirent l'apex du tube."
        },
        {
          id: "tle_d_svt_c11_p3_ex6",
          type: "mcq",
          prompt: "Combien d'anthérozoïdes (gamètes mâles) sont déversés par un seul tube pollinique à l'entrée du sac embryonnaire ?",
          options: [
            "Exactement 2 anthérozoïdes",
            "1 seul anthérozoïde",
            "Des millions d'anthérozoïdes comme chez l'Homme",
            "4 anthérozoïdes"
          ],
          correctAnswerIndex: 0,
          explanation: "Le tube pollinique achemine exactement deux anthérozoïdes au micropyle de l'ovule, ce qui permet la double fécondation simultanée."
        }
      ]
    },
    {
      id: "pt4_double_fecondation_graine_fruit",
      order: 4,
      title: "La double fécondation, formation de la graine et genèse du fruit",
      summary: "Mécanisme de la double fécondation (œuf principal 2n -> embryon, œuf accessoire 3n -> albumen), métamorphose de l'ovule en graine (graines albuminées vs exalbuminées) et hypertrophie de l'ovaire en fruit.",
      conceptExplanation: "La double fécondation est une caractéristique biologique exclusive des Angiospermes découverte par Sergeï Navachine en 1898. Elle assure la coordination parfaite entre la formation de l'embryon et celle de ses réserves nutritives.\n\n1. Le déroulement de la double fécondation :\n- Pénétration dans le sac : Le tube pollinique pénètre par le micropyle (porogamie), traverse l'une des deux synergides qui se désorganise et éclate, libérant les deux anthérozoïdes dans le sac embryonnaire.\n- Première fécondation (formation de l'œuf principal) :\n  * Le 1er anthérozoïde haploïde (n) fusionne avec le noyau de l'oosphère haploïde (n) ;\n  * Il se forme une cellule-œuf principale diploïde (zygote principal à 2n chromosomes).\n- Deuxième fécondation (formation de l'œuf accessoire) :\n  * Le 2e anthérozoïde haploïde (n) fusionne simultanément avec les deux noyaux polaires haploïdes (n + n) de la cellule centrale ;\n  * Il se forme une cellule-œuf accessoire triploïde (zygote albumen à 3n chromosomes).\n\n2. Évolution des zygotes et formation de la graine :\nAprès la double fécondation, l'ovule se transforme en graine :\n- Évolution du zygote principal (2n) en embryon :\n  * Le zygote principal se divise par mitoses pour donner un proembryon puis l'embryon (ou plantule), future plante miniature comprenant :\n    - La radicule (future racine) ;\n    - La tigelle (future tige) ;\n    - La gemmule (bourgeon terminal avec ébauches de feuilles) ;\n    - Un (chez les Monocotylédones comme le maïs) ou deux (chez les Dicotylédones comme le haricot) cotylédons (feuilles embryonnaires).\n- Évolution du zygote accessoire (3n) en albumen :\n  * Le zygote accessoire se divise rapidement pour former un tissu nourricier triploïde très abondant : l'albumen, gorgé d'amidon, de lipides et de protéines.\n- Deux types de graines selon le devenir de l'albumen :\n  * Graines albuminées (ex : maïs, ricin, blé) : L'albumen persiste et constitue le réservoir nourricier principal de la graine mûre ;\n  * Graines exalbuminées (ex : haricot, pois, arachide) : Durant la maturation de la graine, l'embryon absorbe la totalité de l'albumen et stocke ces réserves dans ses deux cotylédons hypertrophiés.\n- Téguments de la graine : Les téguments de l'ovule (primine et secondine) se déshydratent, se durcissent et s'imprègnent de lignine/subérine pour former le tégument protecteur étanche (testa) de la graine.\n\n3. Métamorphose de l'ovaire en fruit :\nSous l'action d'hormones de croissance (auxines et gibbérellines) sécrétées par les graines en développement :\n- La paroi de l'ovaire s'hypertrophie considérablement et se transforme en péricarpe du fruit ;\n- Le péricarpe comprend trois assises : l'épicarpe (peau externe), le mésocarpe (chair ou pulpe chez les fruits charnus) et l'endocarpe (paroi interne parfois lignifiée en noyau) ;\n- Les pièces florales stériles (pétales, sépales, étamines, style et stigmates) flétrissent et tombent généralement.\n- Le fruit protège les graines et assure leur dissémination (zoochorie, anémochorie, hydrochorie).",
      keyRule: "La double fécondation unit le 1er anthérozoïde (n) à l'oosphère (n) pour donner l'embryon diploïde (2n), et le 2e anthérozoïde (n) aux 2 noyaux polaires (n + n) pour donner l'albumen triploïde (3n). L'ovule devient la graine, et l'ovaire devient le fruit.",
      formulas: [
        {
          name: "Équations chromosomiques de la double fécondation",
          formula: "\\begin{cases} \\text{Anthérozoïde 1 (n)} + \\text{Oosphère (n)} \\longrightarrow \\text{Zygote principal / Embryon (2n)} \\\\ \\text{Anthérozoïde 2 (n)} + 2 \\text{ Noyaux polaires (n + n)} \\longrightarrow \\text{Zygote accessoire / Albumen (3n)} \\end{cases}",
          note: "Double fécondation exclusive des Angiospermes"
        }
      ],
      workedExample: {
        title: "Calcul du nombre de chromosomes des tissus d'un grain de maïs",
        statement: "Chez le maïs (Zea mays), le caryotype d'une cellule somatique de racine comporte 2n = 20 chromosomes. Déterminer le nombre de chromosomes présents dans le noyau des cellules suivantes : 1. Une cellule de l'embryon (radicule). 2. Une cellule de l'albumen. 3. Une cellule de l'enveloppe protectrice (péricarpe issu de la paroi ovarienne maternelle).",
        methodSteps: [
          "Étape 1 : Calculer le nombre haploïde n. Si 2n = 20, alors le stock haploïde n = 10 chromosomes.",
          "Étape 2 : Déterminer la ploïdie de l'embryon. L'embryon est issu de l'œuf principal diploïde (anthérozoïde n + oosphère n) : 2n = 20 chromosomes.",
          "Étape 3 : Déterminer la ploïdie de l'albumen. L'albumen est issu de l'œuf accessoire triploïde (anthérozoïde n + 2 noyaux du sac n+n) : 3n = 3 × 10 = 30 chromosomes.",
          "Étape 4 : Déterminer la ploïdie du péricarpe. Le péricarpe provient de la paroi de l'ovaire de la plante mère, c'est un tissu végétatif maternel diploïde : 2n = 20 chromosomes."
        ],
        conclusion: "Embryon : 20 chromosomes (2n) ; Albumen : 30 chromosomes (3n) ; Péricarpe : 20 chromosomes (2n)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Bilan des transformations de la fleur après la double fécondation",
        caption: "La double fécondation exclusive aux Angiospermes : formation simultanée du zygote principal (embryon 2n) et du zygote accessoire (albumen 3n).",
        svgContent: `<svg viewBox="0 0 620 280" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Double fécondation chez les Angiospermes">
  <defs>
    <marker id="arrow-df" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#475569" />
    </marker>
  </defs>
  <rect x="10" y="10" width="600" height="260" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Tube pollinique arrivant avec 2 anthérozoïdes -->
  <path d="M 30 140 L 150 140" stroke="#10B981" stroke-width="8" stroke-linecap="round" />
  <circle cx="110" cy="140" r="6" fill="#047857" />
  <text x="110" y="125" font-size="8" font-weight="bold" fill="#047857" text-anchor="middle">Anthérozoïde 1 (n)</text>
  <circle cx="140" cy="140" r="6" fill="#047857" />
  <text x="140" y="160" font-size="8" font-weight="bold" fill="#047857" text-anchor="middle">Anthérozoïde 2 (n)</text>
  <text x="70" y="120" font-size="9" font-weight="bold" fill="#059669">Tube pollinique</text>

  <!-- Bifurcation vers les deux fécondations -->
  <path d="M 160 135 C 190 100, 220 80, 260 80" fill="none" stroke="#6366F1" stroke-width="2" marker-end="url(#arrow-df)" />
  <path d="M 160 145 C 190 180, 220 200, 260 200" fill="none" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow-df)" />

  <!-- Fécondation 1 : Principale -->
  <rect x="270" y="55" width="320" height="60" rx="8" fill="#EEF2FF" stroke="#6366F1" stroke-width="1.5" />
  <text x="285" y="75" font-size="10" font-weight="bold" fill="#4338CA">1ʳᵉ FÉCONDATION (Principale)</text>
  <text x="285" y="92" font-size="9" fill="#1E1B4B">Anthérozoïde (n) + Oosphère (n)</text>
  <text x="285" y="106" font-size="9" font-weight="bold" fill="#4F46E5">→ Zygote principal / Embryon (2n)</text>

  <!-- Fécondation 2 : Accessoire -->
  <rect x="270" y="165" width="320" height="65" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5" />
  <text x="285" y="185" font-size="10" font-weight="bold" fill="#B45309">2ᵉ FÉCONDATION (Accessoire)</text>
  <text x="285" y="202" font-size="9" fill="#78350F">Anthérozoïde (n) + 2 Noyaux centraux (n + n)</text>
  <text x="285" y="218" font-size="9" font-weight="bold" fill="#D97706">→ Zygote accessoire / Albumen triploïde (3n)</text>

  <!-- Flèche résultat final -->
  <text x="430" y="250" font-size="10" font-weight="bold" fill="#059669" text-anchor="middle">Ovule fécondé → GRAINE  |  Paroi ovaire → FRUIT</text>
</svg>`,
        tableData: {
          headers: ["Structure florale initiale", "Événement de fécondation", "Structure finale obtenue", "Ploïdie nucléaire"],
          rows: [
            ["Oosphère (n)", "+ 1er anthérozoïde (n)", "Embryon / Plantule", "Diploïde (2n)"],
            ["2 noyaux du sac (n + n)", "+ 2e anthérozoïde (n)", "Albumen (tissu de réserve)", "Triploïde (3n)"],
            ["Nucelle & téguments ovule", "Déshydratation et sclérification", "Tégument de la graine (testa)", "Diploïde maternel (2n)"],
            ["Ovule tout entier", "Maturation post-fécondation", "Graine", "Mosaïque (embryon 2n, albumen 3n, tégument 2n)"],
            ["Paroi de l'ovaire", "Hypertrophie sous auxines", "Péricarpe du fruit", "Diploïde maternel (2n)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c11_p4_ex1",
          type: "mcq",
          prompt: "Quelle est la définition exacte de la 'double fécondation' propre aux plantes Angiospermes ?",
          options: [
            "L'union simultanée d'un premier anthérozoïde avec l'oosphère (œuf diploïde) et d'un second anthérozoïde avec les deux noyaux du sac (œuf triploïde)",
            "La fécondation de deux ovules différents par le même grain de pollen",
            "La fécondation successive d'une même fleur par deux insectes différents",
            "La division de la cellule-œuf en deux embryons jumeaux"
          ],
          correctAnswerIndex: 0,
          explanation: "La double fécondation implique deux unions simultanées : anthérozoïde (n) + oosphère (n) -> œuf principal (2n), et anthérozoïde (n) + 2 noyaux polaires (2n) -> œuf accessoire albumen (3n)."
        },
        {
          id: "tle_d_svt_c11_p4_ex2",
          type: "mcq",
          prompt: "Quel est l'état de ploïdie chromosomique des cellules de l'albumen issu de l'œuf accessoire ?",
          options: [
            "Triploïde (3n)",
            "Haploïde (n)",
            "Diploïde (2n)",
            "Tétraploïde (4n)"
          ],
          correctAnswerIndex: 0,
          explanation: "L'œuf accessoire résulte de la fusion d'un anthérozoïde haploïde (n) avec deux noyaux polaires haploïdes (n + n), formant une cellule triploïde à 3n chromosomes."
        },
        {
          id: "tle_d_svt_c11_p4_ex3",
          type: "mcq",
          prompt: "En quoi se transforme l'ovule fécondé à l'issue du processus de reproduction sexuée ?",
          options: [
            "En une graine",
            "En un fruit charnu",
            "En une nouvelle étamine",
            "En un pétale coloré"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ovule renfermant l'embryon et les réserves d'albumen se transforme en graine, tandis que l'ovaire qui l'entoure se développe pour former le fruit."
        },
        {
          id: "tle_d_svt_c11_p4_ex4",
          type: "mcq",
          prompt: "Quelle partie de la fleur s'hypertrophie sous l'influence hormonale pour donner la chair et la peau du fruit ?",
          options: [
            "La paroi de l'ovaire (carpelles)",
            "L'anthère de l'étamine",
            "Le tube pollinique",
            "Le pédoncule floral seul"
          ],
          correctAnswerIndex: 0,
          explanation: "C'est l'ovaire (la loge carpellaire) qui s'hypertrophie pour devenir le péricarpe du fruit protégeant les graines."
        },
        {
          id: "tle_d_svt_c11_p4_ex5",
          type: "mcq",
          prompt: "Quelle différence distingue une graine albuminée (comme le maïs) d'une graine exalbuminée (comme le haricot) ?",
          options: [
            "Dans la graine exalbuminée, l'embryon a absorbé l'albumen durant la maturation et stocké les réserves dans ses cotylédons volumineux",
            "La graine exalbuminée ne contient aucun embryon",
            "La graine albuminée ne peut jamais germer dans le sol",
            "La graine exalbuminée est produite sans fécondation"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans les graines exalbuminées (haricot, arachide), l'albumen est entièrement résorbé avant maturité et les réserves sont emmagasinées dans les cotylédons hypertrophiés de l'embryon."
        },
        {
          id: "tle_d_svt_c11_p4_ex6",
          type: "mcq",
          prompt: "Quelles sont les composantes anatomiques fondamentales de l'embryon (ou plantule) présent au cœur de la graine mûre ?",
          options: [
            "La radicule, la tigelle, la gemmule et le(s) cotylédon(s)",
            "L'exine, l'intine et le connectif",
            "Le placenta et le sac pollinique",
            "Les sépales et les pétales flétris"
          ],
          correctAnswerIndex: 0,
          explanation: "L'embryon de la graine est une ébauche de plante complète composée d'une radicule (racine), d'une tigelle (tige), d'une gemmule (bourgeon avec feuilles primordiales) et de cotylédons nourriciers."
        }
      ]
    }
  ]
};
