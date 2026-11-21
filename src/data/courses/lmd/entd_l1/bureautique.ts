import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

export const BUREAUTIQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'lmd_entd_l1_bureautique_ch1',
    subjectId: 'lmd_bureautique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Traitement de texte avancé (Microsoft Word)',
    summary:
      'Maîtriser la mise en page professionnelle sous Word : styles hiérarchiques Titre 1/2/3, sauts de page vs sauts de section, en-têtes différenciés, insertion d’objets, légendes, notes de bas de page, table des matières automatique, publipostage et export PDF fidèle.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Bureautique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p1',
        order: 1,
        title: 'Mise en page, sauts de page vs sauts de section et en-têtes différenciés',
        summary:
          'Configurer le format A4, les marges, séparer les sections et différencier les en-têtes et pieds de page d’un rapport structuré.',
        conceptExplanation:
          'Une mise en page rigoureuse verrouille l’architecture physique d’un document avant l’affinage rédactionnel. Elle repose sur le format A4, des marges équilibrées, la distinction nette entre saut de page et saut de section, ainsi que la gestion dynamique des en-têtes et pieds de page.',
        keyRule:
          'Un saut de page passe simplement à la page suivante dans la même section ; seul un saut de section permet de changer l’orientation, les marges ou l’en-tête d’une partie du document.',
        formulas: [
          {
            name: 'Standard de mise en page rapport A4',
            formula: '\\text{Format A4 (21 }\\times\\text{ 29,7 cm)} \\quad|\\quad \\text{Marges : 2,5 cm} \\quad|\\quad \\text{Ctrl + Entrée : Saut de page}',
            note: 'Les sauts de section s’insèrent via « Mise en page > Sauts de pages > Sauts de section ».',
          },
        ],
        workedExample: {
          title: 'Paramétrer un rapport de 15 pages avec une annexe en Paysage',
          statement:
            'Un rapport d’audit au format A4 Portrait (marges 2,5 cm) doit contenir une page de garde sans numéro, un corps paginé en chiffres arabes et une page 12 en orientation Paysage pour un grand tableau financier.',
          methodSteps: [
            'Configurer Taille = A4 et Marges = 2,5 cm dans l’onglet « Mise en page ».',
            'Insérer un saut de page (Ctrl + Entrée) après la page de garde et cocher « Première page différente » dans les outils d’en-tête et pied de page.',
            'Avant et après la page 12, insérer un « Saut de section (Page suivante) » puis passer uniquement la section de la page 12 en orientation Paysage.',
          ],
          conclusion:
            'Seule la page 12 bascule en Paysage tandis que la page de garde reste vierge de pagination.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Format & Marges',
            stepTheme: 'Mise en page',
            stepTitle: 'Paramétrer le format A4 et les marges normalisées',
            paragraphText:
              'Avant de rédiger un rapport administratif ou universitaire en Côte d’Ivoire, le calibrage de la feuille conditionne la stabilité de toute la pagination.\n• **Format standard** : le papier A4 ($21\\text{ cm} \\times 29{,}7\\text{ cm}$) est la norme dans l’espace UEMOA et en entreprise.\n• **Marges équilibrées** : régler 2,5 cm en haut, en bas, à gauche et à droite préserve la reliure et facilite la lecture.\n• **Exemple concret** : pour un rapport d’activité de 18 pages imprimé et relié à Abidjan, des marges de 2,5 cm évitent que les premières lettres ne disparaissent dans la spirale.',
            formula: {
              name: 'Dimensions du format A4 standard',
              formula: '\\text{Largeur} = 21\\text{ cm}, \\quad \\text{Hauteur} = 29{,}7\\text{ cm}, \\quad \\text{Marges} = 2{,}5\\text{ cm}',
              note: 'Réglage accessible dans l’onglet « Mise en page » > « Taille » et « Marges personnalisées ».',
            },
            keyRule:
              'Toujours fixer la taille A4 et les marges (2,5 cm) dès l’ouverture du document pour éviter tout décalage ultérieur des tableaux et images.',
            konanTip:
              'Si vous imprimez recto verso pour une reliure épaisse, ajoutez une « marge de reliure » de 0,5 cm dans « Marges personnalisées » plutôt que de décaler tout le texte.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Pour un rapport administratif destiné à être imprimé et relié en Côte d’Ivoire, quel paramétrage initial garantit une zone imprimable équilibrée ?',
              options: [
                'Format Lettre US (21,59 × 27,94 cm), marges à 0,5 cm',
                'Format A4 (21 × 29,7 cm), orientation Portrait, marges à 2,5 cm',
                'Format A5, orientation Paysage, marges nulles',
                'Format A3, orientation Portrait, marge gauche à 8 cm',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le format A4 (21 × 29,7 cm) en Portrait avec des marges de 2,5 cm de chaque côté est le standard professionnel qui laisse suffisamment de place pour la reliure et les annotations.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Saut de page vs Section',
            stepTheme: 'Pagination',
            stepTitle: 'Distinguer saut de page (Ctrl + Entrée) et saut de section',
            paragraphText:
              'Appuyer plusieurs fois sur la touche Entrée pour passer à la page suivante provoque des décalages en cascade dès qu’on ajoute une ligne plus haut.\n• **Saut de page (`Ctrl + Entrée`)** : force le passage immédiat en haut de la page suivante tout en conservant exactement les mêmes marges, orientation et en-têtes.\n• **Saut de section (`Page suivante`)** : découpe le document en compartiments indépendants pouvant chacun avoir leur propre orientation ou numérotation.\n• **Exemple concret** : après une page de garde, un simple `Ctrl + Entrée` suffit si la numérotation reste continue ; pour passer le chapitre 1 en page 1 après un sommaire en chiffres romains (`i, ii`), un saut de section est indispensable.',
            formula: {
              name: 'Raccourci et commande de séparation',
              formula: '\\text{Ctrl + Entrée} \\Rightarrow \\text{Saut de page} \\quad|\\quad \\text{Mise en page} \\rightarrow \\text{Sauts de section}',
              note: 'Un saut de section « Continu » change la mise en forme (ex. passage en 2 colonnes) sur la même page.',
            },
            keyRule:
              'Utilisez Ctrl + Entrée pour changer de page sans changer de mise en forme, et un saut de section dès que vous devez modifier l’orientation, les colonnes ou la numérotation.',
            konanTip:
              'Activez le bouton ¶ (Afficher tout) pour voir clairement la ligne pointillée « Saut de page » ou « Saut de section (Page suivante) » et supprimer les retours vides superflus.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Vous devez numéroter la préface de votre mémoire en chiffres romains (i, ii, iii) puis redémarrer la numérotation à 1 en chiffres arabes au Chapitre 1. Quel outil devez-vous insérer juste avant le Chapitre 1 ?',
              options: [
                'Dix appuis successifs sur la touche Entrée',
                'Un saut de ligne majuscule (Maj + Entrée)',
                'Un saut de section (Page suivante)',
                'Un simple saut de page (Ctrl + Entrée)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le changement de format de numérotation (romain → arabe) et le redémarrage à 1 exigent une nouvelle section, obtenue par un « Saut de section (Page suivante) ».',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'En-têtes différenciés',
            stepTheme: 'Zones répétitives',
            stepTitle: 'Différencier les en-têtes et pieds de page par section',
            paragraphText:
              'Par défaut, toutes les sections d’un document partagent le même en-tête et le même pied de page via l’option active « Lier au précédent ».\n• **Première page différente** : masque l’en-tête et le numéro sur la page 1 (page de garde) sans les effacer des pages suivantes.\n• **Désactiver « Lier au précédent »** : rompt le lien entre la section courante et la précédente afin d’afficher un titre de chapitre différent ou de supprimer le numéro sur une annexe.\n• **Exemple concret** : dans un rapport de stage de 30 pages, on coche « Première page différente » sur la page de garde, puis on désactive « Lier au précédent » en section 2 pour afficher « Chapitre 1 : Analyse » en en-tête.',
            keyRule:
              'Ne supprimez jamais un en-tête dans une nouvelle section avant d’avoir désactivé « Lier au précédent », sinon vous l’effacerez aussi dans la section antérieure.',
            konanTip:
              'Pour placer un nom d’entreprise à gauche et l’année à droite sur la même ligne d’en-tête, utilisez la touche Tabulation deux fois (Word place par défaut un taquet centré et un taquet droit).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Vous venez de créer une Section 2 pour les annexes et vous souhaitez effacer l’en-tête uniquement dans cette Section 2 sans toucher à la Section 1. Que devez-vous faire en premier dans l’en-tête de la Section 2 ?',
              options: [
                'Sélectionner le texte de l’en-tête et appuyer directement sur Suppr',
                'Désactiver le bouton « Lier au précédent » dans l’onglet En-tête et pied de page',
                'Cocher « Pages paires et impaires différentes »',
                'Passer la Section 2 en orientation Paysage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tant que « Lier au précédent » est actif, toute modification ou suppression de l’en-tête en Section 2 se répercute sur la Section 1. Il faut d’abord rompre ce lien.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Champs dynamiques',
            stepTheme: 'Pagination',
            stepTitle: 'Insérer des numéros de page et une date dynamiques',
            paragraphText:
              'Saisir manuellement le chiffre « 1 » ou la date du jour en texte brut oblige à tout corriger à chaque révision du document.\n• **Champ Numéro de page** : inséré via « Insertion > Numéro de page », il s’incrémente automatiquement (`{ PAGE }`) et peut afficher « Page X sur Y » (`{ NUMPAGES }`).\n• **Date automatique** : via « Insertion > Date et heure », cocher « Mettre à jour automatiquement » garantit une date exacte à l’impression.\n• **Exemple concret** : si vous ajoutez 3 pages d’analyse entre les pages 4 et 5 d’un dossier de crédit de 12 pages, tous les pieds de page « Page X sur 15 » se recalculent sans intervention manuelle.',
            formula: {
              name: 'Champs dynamiques courants dans Word',
              formula: '\\{\\text{PAGE}\\} / \\{\\text{NUMPAGES}\\} \\quad|\\quad \\{\\text{DATE}\\}',
              note: 'Raccourci clavier : Alt + Maj + P insère le numéro de page ; Alt + Maj + D insère la date.',
            },
            keyRule:
              'Un numéro de page ou un total de pages doit toujours être un champ dynamique, jamais un chiffre tapé au clavier.',
            konanTip:
              'Le raccourci Alt + F9 bascule l’affichage entre la valeur du champ (« 4 ») et son code interne (« { PAGE } ») pour diagnostiquer un problème de pagination.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Un étudiant tape manuellement « Page 2 / 10 » dans le pied de page de son rapport. Quel défaut immédiat cela provoque-t-il ?',
              options: [
                'Word refuse d’enregistrer le fichier au format .docx',
                'Le texte « Page 2 / 10 » se répète à l’identique sur toutes les pages de la section',
                'Le texte disparaît automatiquement lors de l’exportation PDF',
                'Word convertit automatiquement « 2 / 10 » en fraction mathématique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un texte statique placé dans un en-tête ou pied de page est dupliqué tel quel sur chaque page de la section. Seuls les champs dynamiques PAGE et NUMPAGES s’adaptent à chaque page.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Orientation mixte',
            stepTheme: 'Saut de section',
            stepTitle: 'Isoler une seule page en Paysage au milieu d’un rapport Portrait',
            paragraphText:
              'Un tableau financier à 10 colonnes ou un grand organigramme tient rarement dans la largeur d’une page A4 Portrait (16 cm utiles).\n• **Encadrement obligatoire** : il faut placer un « Saut de section (Page suivante) » juste AVANT la page large et un second « Saut de section (Page suivante) » juste APRÈS.\n• **Piège classique** : n’insérer qu’un seul saut de section avant le tableau fait basculer tout le reste du rapport jusqu’à la dernière page en mode Paysage.\n• **Exemple concret** : dans un bilan de 25 pages où seule la page 14 porte un tableau de trésorerie sur 12 mois, le document comptera 3 sections : Sec. 1 (p. 1–13 Portrait), Sec. 2 (p. 14 Paysage), Sec. 3 (p. 15–25 Portrait).',
            keyRule:
              'Pour mettre une seule page intérieure en Paysage, encadrez-la toujours par DEUX sauts de section (un avant, un après).',
            konanTip:
              'Encore plus rapide : sélectionnez uniquement le tableau concerné, ouvrez « Mise en page > Mise en page (lanceur) », choisissez « Paysage » et dans la liste « Appliquer à », sélectionnez « Au texte sélectionné » — Word crée les deux sauts de section automatiquement !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Vous voulez que seule la page 8 d’un rapport de 20 pages soit orientée en Paysage, les pages 1 à 7 et 9 à 20 restant en Portrait. Combien de sections distinctes le document doit-il contenir au minimum ?',
              options: [
                '1 section unique',
                '2 sections (avant et après la page 1)',
                '3 sections (pages 1–7, page 8, pages 9–20)',
                '20 sections (une par page)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Il faut une section 1 en Portrait (p. 1–7), une section 2 en Paysage (p. 8) et une section 3 qui revient en Portrait (p. 9–20), soit 3 sections créées par 2 sauts de section.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Structuration complète',
            stepTitle: 'Éviter les erreurs de pagination sur la page de garde',
            paragraphText:
              'La page de garde d’un document universitaire ou d’entreprise réunit le titre centré, le sous-titre, l’auteur, la filière et l’année académique sans en-tête ni numéro visible.\n• **Page de garde propre** : ne jamais effacer l’en-tête sur la page 1 sans avoir coché « Première page différente », car l’en-tête disparaîtrait partout.\n• **Démarrer la numérotation à 1 en page 2** : si la page 1 ne doit pas compter dans le total, il faut un saut de section après la page 1 et régler « Numéro de page > Format des numéros de page > À partir de 1 » en section 2.\n• **Exemple concret** : sur un mémoire de 40 pages à Abidjan, la couverture est non numérotée, l’introduction commence à « 1 » et l’en-tête apparaît dès cette page.',
            keyRule:
              'Cocher « Première page différente » masque le numéro sur la page 1 tout en la comptant comme page 1 ; pour que la page 2 affiche « 1 », il faut un saut de section et redémarrer la numérotation à 1.',
            konanTip:
              'Vérifiez toujours votre mise en page globale en passant en vue « Plusieurs pages » (onglet Affichage > Zoom > Plusieurs pages) avant d’imprimer.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Après avoir coché « Première page différente », la couverture n’affiche plus de numéro, mais la page suivante affiche « 2 ». Comment faire pour que cette page suivante affiche « 1 » ?',
              options: [
                'Taper « 1 » au clavier à la place du champ automatique',
                'Insérer un saut de section après la couverture, désactiver « Lier au précédent » et définir le format de numérotation « À partir de 1 »',
                'Supprimer complètement la page de garde du fichier',
                'Changer les marges de la couverture à 0 cm',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Première page différente » masque visuellement la page 1 mais la compte toujours. Seule une nouvelle section avec redémarrage du compteur (« À partir de 1 ») fait afficher 1 à la deuxième feuille.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p2',
        order: 2,
        title: 'Styles hiérarchiques (Titre 1/2/3), typographie et volet de navigation',
        summary:
          'Appliquer et modifier les styles de titres hiérarchisés, normer la typographie des paragraphes et contrôler la structure via le volet de navigation.',
        conceptExplanation:
          'Dans un document professionnel long, la mise en forme manuelle titre par titre est une perte de temps et bloque toute automatisation. Les styles hiérarchiques (Titre 1, Titre 2, Titre 3) et les styles de paragraphe Normal assurent l’homogénéité graphique, l’accessibilité du plan dans le volet de navigation et la génération instantanée de la table des matières.',
        keyRule:
          'Ne mettez jamais un titre en forme manuellement (gras + taille 16) : appliquez toujours un style hiérarchique (Titre 1, Titre 2, Titre 3) puis modifiez le style si besoin.',
        formulas: [
          {
            name: 'Norme typographique du corps de texte',
            formula: '\\text{Times New Roman } 12\\text{ pt} \\;|\\; \\text{Interligne } 1{,}5 \\;|\\; \\text{Justifié} \\;|\\; \\text{Alinéa } 1\\text{ cm}',
            note: 'Raccourcis paragraphe : Ctrl+J (Justifier), Ctrl+E (Centrer), Ctrl+G (Gras), Ctrl+I (Italique).',
          },
        ],
        workedExample: {
          title: 'Uniformiser un rapport de 25 pages avec les styles',
          statement:
            'Un rapport contient 6 chapitres, 18 sous-parties et 40 paragraphes saisis en vrac. Vous devez uniformiser la charte (Titre 1 bleu foncé 16 pt, Titre 2 bleu 13 pt, Normal Times New Roman 12 justifié).',
          methodSteps: [
            'Sélectionner tout le texte (Ctrl + A) et appliquer le style « Normal », puis modifier « Normal » (clic droit > Modifier) en Times New Roman 12 pt, noir, justifié, interligne 1,5, retrait première ligne 1 cm.',
            'Appliquer « Titre 1 » aux 6 titres de chapitres et « Titre 2 » aux 18 sous-parties.',
            'Modifier la définition de « Titre 1 » et « Titre 2 » une seule fois : tous les titres du document adoptent instantanément la nouvelle charte.',
          ],
          conclusion:
            'Le document entier est harmonisé en quelques clics et l’arborescence complète apparaît dans le Volet de navigation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Styles Word',
            stepTheme: 'Hiérarchie',
            stepTitle: 'Comprendre la notion de style et les niveaux hiérarchiques',
            paragraphText:
              'Un style est un gabarit nommé qui rassemble des attributs de police (nom, taille, couleur) et de paragraphe (alignement, espacement, niveau hiérarchique).\n• **Séparation fond / forme** : on indique le rôle sémantique d’un bloc (« Titre 1 », « Titre 2 », « Normal ») au lieu de bricoler son apparence.\n• **Propagations automatiques** : modifier le style « Titre 1 » met immédiatement à jour les 15 titres de chapitres d’un mémoire.\n• **Exemple concret** : dans un cahier des charges de 35 pages, passer tous les « Titre 2 » de 13 pt noir à 14 pt bleu marine prend 5 secondes via « Clic droit > Modifier ».',
            keyRule:
              'Un style garantit la cohérence visuelle sur 100 % du document et sert de moteur à toutes les fonctionnalités intelligentes de Word.',
            konanTip:
              'Évitez de laisser un paragraphe entier formaté avec un style « Titre » : sinon tout ce paragraphe apparaîtra dans la table des matières !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est l’avantage décisif d’appliquer les styles intégrés « Titre 1 », « Titre 2 » et « Titre 3 » plutôt que de mettre les titres en gras taille 16 manuellement ?',
              options: [
                'Le fichier ne peut plus être ouvert par d’autres utilisateurs',
                'Les titres deviennent structurés hiérarchiquement (volet de navigation, table des matières auto) et se mettent à jour globalement en un clic',
                'Word traduit automatiquement le document en anglais',
                'La taille du fichier est divisée par dix',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seuls les styles dotés d’un niveau hiérarchique (Titre 1, 2, 3) sont reconnus par le Volet de navigation et la Table des matières automatique, tout en permettant une modification centralisée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Typographie',
            stepTheme: 'Paragraphes',
            stepTitle: 'Maîtriser justification, interligne 1,5 et retrait de 1re ligne',
            paragraphText:
              'La lisibilité d’un rapport repose sur une géométrie de paragraphe nette et sans bricolage manuel.\n• **Alignement Justifié (`Ctrl + J`)** : aligne les bords du texte à la fois sur la marge gauche et la marge droite pour former des blocs réguliers.\n• **Interligne 1,5 et Espacement** : l’interligne aère les lignes d’un même paragraphe, tandis que l’espacement « Après » (ex. 6 pt) sépare deux paragraphes sans touche Entrée vide.\n• **Retrait spécial 1re ligne (1 cm)** : réglé dans « Paragraphe > Retrait », il crée un alinéa propre sans jamais utiliser la barre d’espace ni Tab.',
            formula: {
              name: 'Paramètres de paragraphe recommandés',
              formula: '\\text{Alignement : Justifié} \\;|\\; \\text{Interligne : 1,5} \\;|\\; \\text{Retrait 1re ligne : 1 cm}',
              note: 'L’espacement « Après : 6 pt » remplace avantageusement les lignes vides entre paragraphes.',
            },
            keyRule:
              'Ne créez jamais d’alinéa avec la barre d’espace ni d’espace entre paragraphes avec des touches Entrée vides : utilisez les réglages de « Paragraphe ».',
            konanTip:
              'Cochez l’option « Éviter veuves et orphelines » dans « Paragraphe > Enchaînements » pour éviter qu’une seule ligne d’un paragraphe ne se retrouve isolée en haut ou en bas de page.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Comment configurer proprement un alinéa de 1 cm au début de chaque paragraphe d’un rapport ?',
              options: [
                'Appuyer 5 fois sur la barre d’espace au début de chaque paragraphe',
                'Augmenter la marge gauche du document à 3,5 cm',
                'Paramétrer « Retrait spécial : Première ligne » à 1 cm dans la boîte de dialogue Paragraphe (ou dans le style Normal)',
                'Utiliser une zone de texte devant chaque paragraphe',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le réglage « Retrait spécial : Première ligne (1 cm) » décale exclusivement la première ligne de chaque paragraphe, de manière uniforme et sans décalage lors de l’export.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Hiérarchie Titre 1/2/3',
            stepTheme: 'Architecture',
            stepTitle: 'Organiser les niveaux Titre 1, Titre 2, Titre 3 et la numérotation',
            paragraphText:
              'Une structure documentaire claire respecte une cascade logique stricte sans sauter de niveau hiérarchique.\n• **Niveau 1 (`Titre 1`)** : grandes parties ou chapitres principaux (ex. `I. Diagnostic numérique`).\n• **Niveau 2 (`Titre 2`)** : sous-parties rattachées à un Titre 1 (ex. `I.1 Infrastructure réseau`).\n• **Niveau 3 (`Titre 3`)** : points détaillés sous un Titre 2 (ex. `I.1.a Fibre optique`).\n• **Exemple concret** : dans « Accueil > Liste à plusieurs niveaux », choisir la liste liée aux styles `Titre 1 / Titre 2 / Titre 3` numérote automatiquement `1.`, `1.1`, `1.1.1` dans tout le mémoire.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Hiérarchie des styles dans un document structuré',
              caption: 'Chaque niveau alimente le Volet de navigation et la Table des matières avec un retrait croissant.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Niveau 1',
                    title: 'Style « Titre 1 » — Grands chapitres / Parties',
                    subtitle: 'Ex. 16 pt Gras, espacement Avant 18 pt, « Saut de page avant » optionnel',
                    color: 'blue',
                  },
                  {
                    badge: 'Niveau 2',
                    title: 'Style « Titre 2 » — Sous-parties principales',
                    subtitle: 'Ex. 13–14 pt Gras, rattaché à un Titre 1 (numérotation 1.1, 1.2…)',
                    color: 'violet',
                  },
                  {
                    badge: 'Niveau 3',
                    title: 'Style « Titre 3 » — Sous-sections détaillées',
                    subtitle: 'Ex. 12 pt Gras/Italique (numérotation 1.1.1, 1.1.2…)',
                    color: 'green',
                  },
                  {
                    badge: 'Base',
                    title: 'Style « Normal » — Corps de texte courant',
                    subtitle: 'Times New Roman 12 pt, justifié, interligne 1,5, retrait 1re ligne 1 cm',
                    color: 'slate',
                  },
                ],
              },
            },
            keyRule:
              'Respectez toujours l’ordre logique Titre 1 → Titre 2 → Titre 3 (ne passez jamais directement d’un Titre 1 à un Titre 3) et cochez « Paragraphe suivant : Normal » dans les propriétés du style.',
            konanTip:
              'Dans la définition d’un style de titre, cochez « Paragraphes solidaires » (« Enchaînements ») afin qu’un titre ne reste jamais seul tout en bas d’une page sans le début de son texte !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle option des propriétés de paragraphe d’un style « Titre 2 » empêche ce titre d’apparaître isolé tout en bas d’une page tandis que son paragraphe commence à la page suivante ?',
              options: [
                'Justifié',
                'Paragraphes solidaires (dans l’onglet Enchaînements)',
                'Première page différente',
                'Retrait négatif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’option « Paragraphes solidaires » lie le titre au premier paragraphe qui le suit : si le paragraphe passe à la page suivante, le titre le suit automatiquement.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Volet de navigation',
            stepTheme: 'Contrôle & Styles persos',
            stepTitle: 'Piloter le document au Volet de navigation et créer un style personnalisé',
            paragraphText:
              'Le Volet de navigation (`Affichage > Volet de navigation` ou `Ctrl + F`) transforme les styles de titres en plan interactif.\n• **Audit immédiat** : repérer d’un coup d’œil un paragraphe normal malencontreusement formaté en Titre 1 ou une rupture de hiérarchie.\n• **Réorganisation rapide** : glisser-déposer une section entière dans le Volet de navigation déplace le titre et tous ses paragraphes associés.\n• **Styles personnalisés** : via le lanceur Styles > « Nouveau style », on crée des styles dédiés (« Encadré_Synthèse », « Citation_Auteur ») conformes à la charte graphique de l’organisation.',
            keyRule:
              'Le Volet de navigation permet à la fois de contrôler la propreté de la table des matières future et de déplacer des chapitres entiers par glisser-déposer.',
            konanTip:
              'Dans « Nouveau style », choisissez si le style s’applique uniquement au document actuel ou aux « Nouveaux documents basés sur ce modèle » pour réutiliser votre charte sur tous vos futurs rapports.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Dans le Volet de navigation (onglet Titres), vous constatez qu’une longue phrase de votre texte normal apparaît dans le plan du document. Quelle en est la cause ?',
              options: [
                'Cette phrase contient trop de virgules',
                'Cette phrase a reçu par erreur un style doté d’un niveau hiérarchique (ex. Titre 1 ou Titre 2)',
                'Le fichier a été enregistré en PDF',
                'La police utilisée est Times New Roman',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Volet de navigation liste tout paragraphe ayant un niveau hiérarchique (Titre 1, 2, 3…). Il suffit de réappliquer le style « Normal » sur ce paragraphe pour corriger le plan.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Caractères masqués (¶)',
            stepTheme: 'Diagnostic',
            stepTitle: 'Traquer les défauts cachés grâce aux marques de mise en forme (¶)',
            paragraphText:
              'Une page blanche mystérieuse, un retrait irrégulier ou un saut de ligne cassé provient presque toujours de caractères invisibles.\n• **Symbole `¶` (Afficher tout)** : révèle les marques de paragraphe (`¶`), les espaces (`·`), les espaces insécables (`°`), les tabulations (`→`) et les sauts de page/section.\n• **Espace insécable (`Ctrl + Maj + Espace`)** : empêche un nombre d’être séparé de son unité (« 250 000 FCFA ») ou un mot d’un signe double (`:`, `;`, `?`, `!`) en fin de ligne.\n• **Exemple concret** : si un rapport affiche une page 9 entièrement blanche, activer `¶` révèle souvent deux sauts de page consécutifs ou un `¶` vide après un grand tableau.',
            formula: {
              name: 'Raccourcis de contrôle typographique',
              formula: '\\text{Ctrl + *} \\;(\\text{ou } \\P) : \\text{Afficher tout} \\quad|\\quad \\text{Ctrl + Maj + Espace} : \\text{Espace insécable}',
              note: 'En typographie française, un espace insécable précède toujours `:`, `;`, `?`, `!`, `%` et `FCFA`.',
            },
            keyRule:
              'Travaillez régulièrement avec les marques ¶ activées : elles ne s’impriment jamais et révèlent instantanément les espaces doubles et pages blanches parasites.',
            konanTip:
              'Pour supprimer tous les espaces doubles d’un texte copié-collé, lancez Ctrl + H, recherchez deux espaces («   ») et remplacez par un seul («  ») jusqu’à ce qu’il reste 0 remplacement.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'À la relecture de votre rapport, vous remarquez que « 15 000 » reste en fin de ligne tandis que « FCFA » passe seul au début de la ligne suivante. Comment empêcher cette coupure disgracieuse ?',
              options: [
                'Supprimer l’espace entre 15 000 et FCFA',
                'Insérer un espace insécable (Ctrl + Maj + Espace) entre « 15 000 » et « FCFA »',
                'Appuyer sur Entrée juste avant « 15 000 »',
                'Réduire la police de « FCFA » à 6 pt',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’espace insécable (affiché par un petit rond ° en mode ¶) solidarise « 15 000 » et « FCFA » pour qu’ils passent ensemble à la ligne suivante si nécessaire.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Reprise de document',
            stepTitle: 'Nettoyer un document brut copié depuis le web ou un e-mail',
            paragraphText:
              'Un texte copié depuis un navigateur web importe souvent des polices variées, des fonds colorés et des retours à la ligne forcés (`↵`).\n• **Effacer la mise en forme (`Ctrl + Espace`)** : ou le bouton gomme (« Effacer toute la mise en forme ») remet le texte au style Normal propre.\n• **Coller sans mise en forme (`Ctrl + Maj + V`)** : ou « Conserver uniquement le texte » lors du collage évite d’importer du HTML parasite.\n• **Exemple concret** : face à un mémo de 12 pages hétérogène, on sélectionne tout (`Ctrl + A`), on efface la mise en forme, on applique « Normal », puis on réaffecte `Titre 1` et `Titre 2` en moins de trois minutes.',
            keyRule:
              'Face à un document au formatage corrompu, effacez d’abord toute la mise en forme puis reconstruisez proprement avec les styles.',
            konanTip:
              'Le pinceau « Reproduire la mise en forme » (double-clic pour le verrouiller) copie rapidement un style d’une zone à une autre, mais pour les titres principaux préférez toujours la galerie des Styles.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Vous copiez un long texte d’analyse depuis une page web vers votre rapport Word. Quelle option de collage vous évite d’importer les polices, liens et arrière-plans indésirables du site ?',
              options: [
                'Conserver la mise en forme source',
                'Coller en tant qu’image',
                'Conserver uniquement le texte (ou Ctrl + Maj + V)',
                'Fusionner avec la mise en forme de l’en-tête',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’option « Conserver uniquement le texte » importe les caractères bruts et leur applique automatiquement le style du paragraphe d’accueil dans Word.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p3',
        order: 3,
        title: 'Objets enrichis : images, habillage, tableaux, SmartArt, légendes et notes',
        summary:
          'Insérer et habiller des images sans déformation, concevoir des tableaux et SmartArt clairs, automatiser les légendes et gérer les notes de bas de page.',
        conceptExplanation:
          'Un rapport moderne combine prose analytique et supports visuels structurés. Maîtriser l’habillage des images, la structuration des tableaux, les diagrammes SmartArt, les légendes numérotées automatiquement et les notes de bas de page garantit une présentation soignée et académiquement irréprochable.',
        keyRule:
          'Redimensionnez toujours une image par ses poignées d’angle et légendez chaque figure ou tableau via « Références > Insérer une légende » pour activer la numérotation dynamique.',
        workedExample: {
          title: 'Intégrer un tableau financier, un SmartArt et une figure légendée',
          statement:
            'Dans un rapport sur le paiement mobile en Côte d’Ivoire, insérer une image avec habillage propre, un SmartArt de processus en 4 étapes, un tableau de 4 colonnes sur 2 pages et une note de bas de page sur « UEMOA ».',
          methodSteps: [
            'Insérer l’image, la redimensionner via un coin, choisir l’habillage « Aligné sur le texte » ou « Carré », puis clic droit > « Insérer une légende » (Figure 1).',
            'Via « Insertion > SmartArt > Processus », saisir les 4 étapes du parcours de paiement.',
            'Créer le tableau, activer « Disposition > Répéter les lignes d’en-tête » pour la coupure de page, puis placer le curseur après « UEMOA » et appuyer sur Alt + Ctrl + F pour la note de bas de page.',
          ],
          conclusion:
            'Tous les objets restent ancrés proprement, les en-têtes du tableau se répètent sur la page suivante et la note suit automatiquement le mot « UEMOA ».',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Images & Habillage',
            stepTheme: 'Objets visuels',
            stepTitle: 'Insérer, redimensionner sans déformer et habiller une image',
            paragraphText:
              'Une image mal insérée saute d’une page à l’autre ou chevauche le texte lors des retouches.\n• **Préserver les proportions** : utilisez exclusivement les 4 poignées situées aux angles (coins) ; les poignées centrales écrasent ou étirent le visuel.\n• **Modes d’habillage** : « Aligné sur le texte » traite l’image comme un caractère géant (stabilité maximale) ; « Carré » ou « Rapproché » fait couler le texte autour ; « Haut et bas » isole l’image sur sa bande horizontale.\n• **Exemple concret** : un logo ou graphique pleine largeur se place en « Aligné sur le texte » centré, tandis qu’un portrait en encadré adopte l’habillage « Carré » à droite.',
            keyRule:
              'Privilégiez « Aligné sur le texte » ou « Haut et bas » pour les graphiques de rapports, et ne tirez jamais sur les poignées latérales d’une image.',
            konanTip:
              'Pour alléger un rapport lourd rempli de captures d’écran, sélectionnez une image > « Format de l’image > Compresser les images » (150 ppp pour le web/PDF, décocher « Appliquer à cette image uniquement »).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Dans un rapport professionnel, quel mode d’habillage offre la plus grande stabilité verticale (évitant que l’image ne chevauche du texte) tout en la centrant simplement comme un paragraphe ?',
              options: [
                'Derrière le texte',
                'Devant le texte',
                'Aligné sur le texte',
                'Au travers sans marge',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’habillage « Aligné sur le texte » ancre l’image dans le flux normal d’un paragraphe : elle se centre avec Ctrl+E et ne chevauche jamais aucune ligne.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Tableaux Word',
            stepTheme: 'Données structurées',
            stepTitle: 'Concevoir des tableaux lisibles et gérer les coupures de page',
            paragraphText:
              'Un tableau efficace synthétise des comparaisons chiffrées ou qualitatives sans surcharger la page.\n• **Ligne d’en-tête claire** : première ligne en gras avec trame de fond sobre et texte centré.\n• **Coupures de page maîtrisées** : sur un tableau long de plus d’une page, activez « Disposition > Répéter les lignes d’en-tête » et décochez « Autoriser le fractionnement des lignes sur plusieurs pages » dans les Propriétés du tableau.\n• **Productivité** : placé dans la dernière cellule en bas à droite, un appui sur `Tab` ajoute instantanément une nouvelle ligne.',
            keyRule:
              'Activez systématiquement « Répéter les lignes d’en-tête » pour tout tableau susceptible de s’étendre sur deux pages.',
            konanTip:
              'Évitez les fusions complexes de cellules si vous prévoyez de trier le tableau dans Word (« Disposition > Trier »), car le tri échoue sur les cellules fusionnées.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Votre tableau comparatif de 35 lignes commence en bas de la page 6 et se poursuit sur la page 7. Quelle commande affiche automatiquement les titres de colonnes en haut de la page 7 ?',
              options: [
                'Recopier la première ligne manuellement au milieu du tableau',
                'Activer « Répéter les lignes d’en-tête » dans l’onglet contextuel Disposition (Outils de tableau)',
                'Convertir le tableau en image PNG',
                'Insérer un saut de page entre chaque ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’option « Répéter les lignes d’en-tête » réplique dynamiquement la première ligne du tableau en haut de chaque nouvelle page où le tableau continue.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'SmartArt',
            stepTheme: 'Schématisation',
            stepTitle: 'Transformer une liste en diagramme SmartArt parlant',
            paragraphText:
              'Les graphiques SmartArt (`Insertion > SmartArt`) convertissent instantanément des listes textuelles en schémas vectoriels professionnels.\n• **Choisir la bonne famille** : « Processus » pour des étapes chronologiques, « Hiérarchie » pour un organigramme d’entreprise, « Cycle » pour une boucle continue, « Matrice » pour 4 quadrants.\n• **Volet Texte** : saisir les puces dans le volet latéral gauche ajuste automatiquement le nombre et la taille des formes.\n• **Exemple concret** : les 4 phases d’un projet digital (Audit → Conception → Déploiement → Maintenance) deviennent un schéma clair en 30 secondes.',
            keyRule:
              'Choisissez le modèle SmartArt en fonction de la relation logique (Processus, Cycle, Hiérarchie ou Comparaison) et limitez le texte à quelques mots-clés par forme.',
            konanTip:
              'Vous pouvez changer à tout moment de disposition SmartArt sans retaper votre texte via l’onglet « Création de SmartArt > Dispositions ».',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Vous devez représenter la structure de direction d’une entreprise (DG, Directeurs de pôles, Chefs de service) directement dans Word. Quelle catégorie de SmartArt est la plus adaptée ?',
              options: [
                'Pyramide inversée',
                'Cycle continu',
                'Hiérarchie (Organigramme)',
                'Liste de blocs aléatoires',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La catégorie « Hiérarchie » propose des modèles d’organigramme gérant les relations supérieur/subordonné et les postes assistants.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Légendes & Renvois',
            stepTheme: 'Références',
            stepTitle: 'Automatiser les légendes et la table des illustrations',
            paragraphText:
              'Numéroter « Figure 1 », « Figure 2 » à la main devient un cauchemar dès qu’on insère une nouvelle image au chapitre 1.\n• **Légende automatique** : clic droit sur l’image ou le tableau > « Insérer une légende » (étiquette `Figure` sous les images, `Tableau` au-dessus des tableaux).\n• **Table des illustrations** : générée en un clic depuis « Références > Insérer une table des illustrations ».\n• **Renvoi croisé (`Références > Renvoi`)** : permet d’écrire « voir Figure 2 » avec un numéro qui se met à jour tout seul si Figure 2 devient Figure 3.',
            keyRule:
              'Par convention éditoriale, les légendes des Figures se placent SOUS l’image et celles des Tableaux AU-DESSUS du tableau.',
            konanTip:
              'Si vous modifiez l’ordre des figures, sélectionnez tout le document (Ctrl + A) puis appuyez sur F9 pour renuméroter toutes les légendes et tous les renvois en une seule fois.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans votre rapport comportant déjà 8 figures, vous insérez une nouvelle image entre la Figure 1 et la Figure 2. Que se passe-t-il si vous avez utilisé « Insérer une légende » et « Renvoi » ?',
              options: [
                'Il faut renuméroter manuellement les légendes 2 à 9',
                'Les numéros de légendes et les renvois dans le texte se mettent à jour automatiquement (via F9 / mise à jour des champs)',
                'Word supprime l’ancienne Figure 2 par sécurité',
                'Toutes les images perdent leur légende',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les légendes insérées via l’onglet Références reposent sur des champs séquentiels (`SEQ`) : une simple mise à jour des champs (Ctrl+A puis F9) recalcule toute la numérotation.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Notes de bas de page',
            stepTheme: 'Appareil critique',
            stepTitle: 'Maîtriser notes de bas de page (Alt + Ctrl + F) et notes de fin',
            paragraphText:
              'Les notes permettent de définir un sigle technique ou de citer une précision sans alourdir le fil du paragraphe.\n• **Note de bas de page (`Alt + Ctrl + F`)** : place un appel en exposant (`¹`) juste après le mot et affiche l’explication en bas de la MÊME page.\n• **Note de fin** : regroupe toutes les notes à la fin du document ou de la section.\n• **Piège de suppression** : pour effacer une note, il faut supprimer le petit numéro d’appel dans le corps du texte, jamais le texte en bas de page.',
            formula: {
              name: 'Raccourci note de bas de page',
              formula: '\\text{Alt + Ctrl + F} \\Rightarrow \\text{Insérer une note de bas de page}',
              note: 'L’appel de note se place juste après le mot (avant la virgule ou le point en typographie française).',
            },
            keyRule:
              'Si le paragraphe contenant l’appel de note change de page lors des retouches, Word déplace automatiquement la note de bas de page avec lui.',
            konanTip:
              'Dans le dialogue « Notes de bas de page et de fin », vous pouvez choisir le format de numérotation (1, 2, 3 ou a, b, c) et recommencer la numérotation à chaque section.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Vous souhaitez supprimer définitivement la note de bas de page n° 3 devenue inutile. Quelle est la bonne manipulation ?',
              options: [
                'Effacer uniquement le texte de la note en bas de la page',
                'Supprimer le chiffre d’appel « 3 » en exposant dans le corps du texte',
                'Masquer le pied de page de la section',
                'Remplacer la note par un filigrane',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Supprimer le texte en bas de page laisse un appel orphelin vide ; seul l’effacement du numéro d’appel dans le texte supprime proprement la note et renumérote les suivantes.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Insertion complète',
            stepTitle: 'Assembler visuels et tableaux dans un rapport UEMOA',
            paragraphText:
              'Dans un rapport économique sur le commerce digital à Abidjan, la qualité visuelle tient à l’unité des objets insérés.\n• **Cohérence graphique** : appliquer la même palette de couleurs (bleu marine, gris ardoise) aux tableaux et aux SmartArt.\n• **Équilibre visuel** : ne jamais placer deux tableaux ou deux graphiques collés sans phrase d’introduction ni d’analyse.\n• **Exemple concret** : on introduit le tableau des paiements mobiles par une phrase renvoyant au « Tableau 1 », on affiche le tableau légendé au-dessus, puis on commente les deux chiffres clés juste en dessous.',
            keyRule:
              'Tout objet visuel (tableau, graphique, figure) doit être annoncé dans le texte, légendé automatiquement et commenté.',
            konanTip:
              'Utilisez « Clic droit sur l’image > Texte de remplacement » pour décrire brièvement vos graphiques : c’est un réflexe d’accessibilité très apprécié dans les livrables professionnels.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle bonne pratique éditoriale s’applique systématiquement lorsque vous intégrez un tableau ou un graphique dans un rapport d’analyse ?',
              options: [
                'Le coller à la fin sans jamais le mentionner dans le texte',
                'L’annoncer par un renvoi dans le texte, le doter d’une légende numérotée et commenter ses résultats clés',
                'Supprimer les titres de colonnes pour gagner de la place',
                'Utiliser cinq polices différentes à l’intérieur du tableau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un tableau ou graphique n’est jamais autonome : il doit être introduit (ex. « cf. Tableau 1 »), légendé automatiquement et interprété par un bref commentaire analytique.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch1_p4',
        order: 4,
        title: 'Table des matières automatique, publipostage et export PDF fidèle',
        summary:
          'Générer une table des matières dynamique, exécuter un publipostage Word + Excel, gérer bibliographie et filigrane, et exporter un PDF fidèle.',
        conceptExplanation:
          'La phase finale d’un document professionnel combine l’automatisation des sommaires et de la révision, la production en série via le publipostage (mail merge) et la livraison sous un format universellement figé (PDF) accompagné d’une archive source proprement nommée.',
        keyRule:
          'Avant tout export en PDF, exécutez systématiquement la séquence : Vérification F7 → Mise à jour de tous les champs (F9) → Enregistrement .docx → Export PDF.',
        formulas: [
          {
            name: 'Raccourcis de finalisation et publipostage',
            formula: '\\text{Ctrl + H : Remplacer} \\;|\\; \\text{F7 : Orthographe} \\;|\\; \\text{F9 : Mettre à jour les champs}',
            note: 'Le publipostage relie 1 document modèle Word + 1 base Excel (.xlsx) pour générer N courriers personnalisés.',
          },
        ],
        workedExample: {
          title: 'Générer 150 attestations personnalisées par publipostage puis exporter en PDF',
          statement:
            'Vous devez envoyer une attestation de participation nominative à 150 participants d’un séminaire à Abidjan, dont les noms, prénoms et scores figurent dans un fichier Excel.',
          methodSteps: [
            'Préparer le tableau Excel (1re ligne = en-têtes propres : `Nom`, `Prenom`, `Score`, sans ligne vide au-dessus).',
            'Dans Word, ouvrir « Publipostage > Démarrer la fusion > Lettres », puis « Sélectionner les destinataires > Utiliser une liste existante » et pointer vers le classeur Excel.',
            'Insérer les champs de fusion (`«Prenom» «Nom»`, `«Score»`), cliquer sur « Aperçu des résultats » pour vérifier 2 ou 3 fiches, puis « Terminer et fusionner > Modifier des documents individuels » et exporter en PDF.',
          ],
          conclusion:
            'Les 150 attestations sont générées sans erreur de saisie en moins de deux minutes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Table des matières',
            stepTheme: 'Workflow final',
            stepTitle: 'Générer et actualiser une table des matières automatique',
            paragraphText:
              'Une table des matières manuelle devient fausse dès qu’on ajoute trois lignes dans le chapitre 1.\n• **Génération (`Références > Table des matières`)** : collecte automatiquement tous les paragraphes porteurs des styles `Titre 1`, `Titre 2` et `Titre 3` avec leur numéro de page exact.\n• **Mise à jour non instantanée** : après toute retouche, cliquez sur « Mettre à jour la table » > « Mettre à jour toute la table » (titres + numéros) et non seulement les numéros.\n• **Workflow global** : enchaîner Styles → Sauts de section → Table des matières → Vérification des champs (`F9`) → Export PDF.',
            visualSchema: {
              type: 'flowchart',
              title: 'Workflow d’un rapport professionnel prêt à livrer',
              caption: 'De la structuration sémantique par styles jusqu’au PDF figé sans erreur de pagination.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1. Mise en page & Styles hiérarchiques',
                    sublabel: 'A4, marges 2,5 cm, Normal, Titre 1 / Titre 2 / Titre 3',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: '2. Objets, légendes & Sauts de section',
                    sublabel: 'Images, tableaux, pages Paysage isolées, en-têtes différenciés',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: '3. Table des matières automatique',
                    sublabel: 'Références > Table des matières (alimentée par les styles)',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: '4. Contrôle qualité & Mise à jour des champs',
                    sublabel: 'Orthographe (F7), Ctrl+A puis F9 (TDM + légendes + renvois)',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Anomalie détectée',
                    branchTarget: 'Corriger le style ou la marque ¶ puis relancer F9',
                  },
                  {
                    label: '5. Sauvegarde .docx & Export PDF fidèle',
                    sublabel: 'Nom normalisé sans accents ni espaces → Livraison PDF',
                    kind: 'end',
                    color: 'slate',
                  },
                ],
              },
            },
            keyRule:
              'Choisissez toujours « Mettre à jour toute la table » avant la livraison finale afin d’actualiser à la fois les intitulés modifiés, les nouveaux titres et la pagination.',
            konanTip:
              'Placez toujours la table des matières sur une page dédiée (après la page de garde) suivie d’un saut de page ou de section avant l’Introduction.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p4_q1',
              type: 'mcq',
              prompt:
                'Vous avez corrigé une faute dans l’intitulé d’un « Titre 1 » et ajouté une nouvelle sous-section « Titre 2 » à la fin de votre rapport. Quelle option choisir lors de l’actualisation de la table des matières ?',
              options: [
                'Mettre à jour les numéros de page uniquement',
                'Mettre à jour toute la table',
                'Effacer la table des matières et la retaper manuellement',
                'Fermer et rouvrir Word sans enregistrer',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Mettre à jour les numéros de page uniquement » ignore les nouveaux titres et les intitulés modifiés. Il faut impérativement choisir « Mettre à jour toute la table ».',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Révision & Ctrl+H',
            stepTheme: 'Édition globale',
            stepTitle: 'Rechercher/Remplacer avancé (Ctrl + H) et correcteur (F7)',
            paragraphText:
              'L’outil Rechercher et remplacer (`Ctrl + H`) accélère la normalisation terminologique d’un document entier.\n• **Options de précision** : « Mot entier uniquement » évite de remplacer « an » à l’intérieur de « dans » ou « banque » ; « Respecter la casse » distingue « État » de « état ».\n• **Caractères spéciaux** : dans « Plus >> », `^p` cible une marque de paragraphe pour supprimer d’un coup les doubles lignes vides (`^p^p` → `^p`).\n• **Correcteur (`F7`)** : repère les fautes d’orthographe (rouge) et de grammaire (bleu), mais doit être complété par une relecture humaine.',
            keyRule:
              'Activez « Mot entier uniquement » lors de tout remplacement global d’un mot court pour ne pas corrompre d’autres mots du document.',
            konanTip:
              'Pour nettoyer rapidement toutes les lignes vides doubles d’un rapport, tapez `^p^p` dans Rechercher et `^p` dans Remplacer par via Ctrl + H.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p4_q2',
              type: 'mcq',
              prompt:
                'Vous voulez remplacer toutes les occurrences du mot « PME » par « TPME » dans un rapport de 30 pages. Pourquoi est-il prudent d’activer « Mot entier uniquement » et « Respecter la casse » dans Ctrl + H ?',
              options: [
                'Pour convertir automatiquement le fichier en PDF',
                'Pour éviter de modifier par erreur des chaînes contenant ces lettres à l’intérieur d’autres mots ou en minuscules',
                'Pour supprimer la table des matières',
                'Pour changer la langue du clavier en anglais',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces deux options empêchent des substitutions parasites dans d’autres mots ou sigles et garantissent un remplacement ciblé et exact.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Publipostage',
            stepTheme: 'Automatisation',
            stepTitle: 'Comprendre les trois composants du publipostage (Mail Merge)',
            paragraphText:
              'Le publipostage permet de produire automatiquement des dizaines ou des milliers de documents personnalisés (lettres, convocations, badges, courriels) à partir d’un modèle unique.\n• **1. Document principal (Word)** : contient le texte commun fixe et des balises dynamiques appelées « champs de fusion » (`«Nom»`, `«Montant»`).\n• **2. Source de données (Excel / CSV)** : tableau propre dont la toute première ligne contient les noms de colonnes (sans cellules fusionnées ni titre au-dessus).\n• **3. Document fusionné** : résultat final générant une page (ou un e-mail) distincte par ligne du tableau Excel.',
            keyRule:
              'Dans la feuille Excel servant de source au publipostage, la ligne 1 doit contenir exclusivement les en-têtes de colonnes, sans aucune ligne vide ou titre de bannière au-dessus.',
            konanTip:
              'Vous pouvez filtrer ou trier les destinataires directement dans Word via « Publipostage > Modifier la liste des destinataires » avant de lancer la fusion finale.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p4_q3',
              type: 'mcq',
              prompt:
                'Lors d’un publipostage entre Word et un classeur Excel contenant 200 clients, quelle condition doit impérativement respecter le fichier Excel pour être reconnu proprement ?',
              options: [
                'Contenir au moins 5 graphiques en secteurs',
                'Avoir les noms de champs (en-têtes) sur la première ligne du tableau, sans lignes vides ni cellules fusionnées au-dessus',
                'Être protégé par un mot de passe bloquant la lecture',
                'Être converti en présentation PowerPoint',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Word lit la première ligne de la feuille Excel comme noms des champs de fusion ; des cellules fusionnées ou lignes de titre au-dessus empêchent la détection des colonnes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Fusion Word + Excel',
            stepTheme: 'Publipostage pratique',
            stepTitle: 'Exécuter un publipostage et formater les nombres fusionnés',
            paragraphText:
              'Un piège fréquent du publipostage apparaît lors de la fusion de montants ou de dates provenant d’Excel.\n• **Étapes clés** : « Publipostage > Démarrer la fusion et le publipostage » → « Sélectionner les destinataires » → « Insérer un champ de fusion » → « Aperçu des résultats » → « Terminer et fusionner ».\n• **Règle d’or de fusion** : utilisez des règles conditionnelles (« Règles > Si… Alors… Sinon… ») pour adapter automatiquement « Monsieur » / « Madame » ou « admis » / « ajourné » selon une colonne.\n• **Exemple concret** : une convocation affiche « Cher(e) `«Civilité»` `«Nom»`, votre solde est de `«Solde»` FCFA » pour 300 clients en un seul clic.',
            keyRule:
              'Vérifiez toujours l’« Aperçu des résultats » sur plusieurs fiches (y compris des noms longs) avant de cliquer sur « Terminer et fusionner ».',
            konanTip:
              'Si un montant Excel `150000` perd son séparateur de milliers dans Word, affichez le code de champ (`Alt + F9`) et ajoutez le commutateur `\\# "# ##0"` : `{ MERGEFIELD Solde \\# "# ##0" }`.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p4_q4',
              type: 'mcq',
              prompt:
                'Avant de générer 300 lettres personnalisées via « Terminer et fusionner », quelle commande de l’onglet Publipostage permet de contrôler visuellement le rendu réel de chaque fiche ?',
              options: [
                'Mettre à jour la table des matières',
                'Aperçu des résultats',
                'Filigrane personnalisé',
                'Répéter les lignes d’en-tête',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le bouton « Aperçu des résultats » remplace temporairement les balises `«Champ»` par les vraies valeurs des lignes Excel afin de vérifier les espaces, accords et retours à la ligne.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Bibliographie & Nommage',
            stepTheme: 'Normes académiques',
            stepTitle: 'Gérer bibliographie, filigrane et convention de nommage',
            paragraphText:
              'La crédibilité d’un document académique ou d’entreprise dépend aussi de la rigueur de ses références et de sa gestion documentaire.\n• **Bibliographie automatisée** : « Références > Gérer les sources » permet de saisir auteurs, titre, année et éditeur, puis d’insérer la bibliographie selon une norme (APA, ISO 690).\n• **Filigrane (`Conception > Filigrane`)** : mention semi-transparente en arrière-plan (« CONFIDENTIEL », « PROJET ») marquant le statut du document.\n• **Nommage propre** : privilégier `Rapport_Transformation_Numerique_2026.docx` (sans accents, espaces ni caractères `/ : * ?`), compatible avec tous les serveurs et plateformes.',
            keyRule:
              'Évitez les espaces, accents et symboles dans les noms de fichiers professionnels ; utilisez le tiret bas (`_`) ou le tiret (`-`) et la date ou version.',
            konanTip:
              'Évitez de nommer un fichier « Rapport_Final_Definitif_V2_OK.docx » : adoptez une numérotation chronologique claire (`v1.0`, `v1.1`) ou la date ISO (`2026-04-15_Rapport_Audit.docx`).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p4_q5',
              type: 'mcq',
              prompt:
                'Lequel de ces noms de fichiers respecte strictement les bonnes pratiques de nommage informatique pour un dépôt sur plateforme universitaire ou envoi professionnel ?',
              options: [
                'Mon rapport final (été 2026) !!.docx',
                'Rapport/Audit:2026?.docx',
                'Rapport_Audit_Numerique_2026.docx',
                'Document1.docx',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un nom descriptif en ASCII sans espaces, accents ni caractères réservés (`/` `:` `?`) évite tout problème d’encodage ou de chemin sur les serveurs.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Export PDF fidèle',
            stepTheme: 'Livraison',
            stepTitle: 'Verrouiller la mise en page grâce à l’export PDF fidèle',
            paragraphText:
              'Envoyer un fichier `.docx` brut à un jury ou un client l’expose à des décalages imprévus si son ordinateur utilise une version différente d’Office ou ne possède pas vos polices.\n• **Format `.docx` vs `.pdf`** : le `.docx` est le fichier source éditable ; le `.pdf` (*Portable Document Format*) fige exactement les sauts de page, marges, tableaux et polices intégrées.\n• **Export natif Word** : passez par « Fichier > Exporter > Créer un document PDF/XPS » (et cochez « Créer des signets à l’aide des : Titres » dans les Options pour conserver un sommaire cliquable !).\n• **Piège fatal** : exporter sans avoir réactualisé la table des matières laisse de faux numéros de page dans le PDF.',
            keyRule:
              'Conservez toujours le .docx pour vos retouches futures et diffusez exclusivement le .pdf (avec signets issus des Titres) aux destinataires externes.',
            konanTip:
              'Dans les options d’export PDF de Word, cocher « Créer des signets à l’aide des Titres » génère automatiquement un menu de navigation cliquable dans Adobe Reader et les navigateurs !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch1_p4_q6',
              type: 'mcq',
              prompt:
                'Lors de l’exportation d’un rapport Word en PDF via « Fichier > Exporter », quelle option permet aux lecteurs du PDF de naviguer directement entre vos chapitres grâce au panneau de signets ?',
              options: [
                'Protéger le document par filigrane',
                'Cocher « Créer des signets à l’aide des : Titres » dans les options PDF',
                'Convertir toutes les pages en images JPEG',
                'Supprimer la table des matières avant l’export',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En cochant « Créer des signets à l’aide des : Titres », Word transforme vos styles Titre 1, Titre 2, Titre 3 en une table de signets interactive à l’intérieur même du fichier PDF.',
            },
          },
        ],
      }),
    ],
  },

  {
    id: 'lmd_entd_l1_bureautique_ch2',
    subjectId: 'lmd_bureautique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Tableur et analyse de données (Microsoft Excel)',
    summary:
      'Maîtriser les références relatives, absolues ($A$1) et mixtes, les fonctions logiques et conditionnelles (SI, ET/OU, NB.SI, SOMME.SI.ENS), les fonctions de recherche (RECHERCHEV, RECHERCHEX), la validation des données, la mise en forme conditionnelle, les tableaux croisés dynamiques (TCD) et les graphiques.',
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'ENTD L1 — Bureautique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p1',
        order: 1,
        title: 'Références relatives, absolues ($A$1) et mixtes, et formules de base',
        summary:
          'Distinguer les trois types de références de cellules lors de la recopie incrémentée et fiabiliser les calculs de synthèse (SOMME, MOYENNE, MIN, MAX).',
        conceptExplanation:
          'Dans Microsoft Excel, la puissance d’un modèle financier ou commercial repose sur la capacité à écrire une formule une seule fois puis à la recopier sur des centaines de lignes sans erreur. Pour cela, il est indispensable de comprendre comment le signe dollar `$` verrouille une colonne, une ligne ou les deux lors de la recopie.',
        keyRule:
          'Le symbole `$` fige uniquement l’élément qui le suit immédiatement : `$A1` fige la colonne A, `A$1` fige la ligne 1, et `$A$1` fige la cellule entière.',
        formulas: [
          {
            name: 'Calcul d’un montant TTC avec taux de TVA figé en $B$1',
            formula: '=\\text{C4} \\times (1 + \\$B\\$1)',
            note: 'En recopiant vers le bas, C4 devient C5, C6… tandis que $B$1 reste strictement bloqué sur la cellule du taux de TVA (18 % en Côte d’Ivoire).',
          },
        ],
        workedExample: {
          title: 'Calculer les prix TTC d’un catalogue de 200 articles avec TVA à 18 %',
          statement:
            'Dans une feuille Excel, la cellule `B1` contient le taux de TVA `18 %`. Les prix HT des articles figurent de `C4` à `C203`. Quelle formule saisir en `D4` avant de recopier jusqu’en `D203` ?',
          methodSteps: [
            'Écrire `=C4*(1+$B$1)` en `D4` : `C4` est relatif (doit changer à chaque ligne) et `$B$1` est absolu (doit rester figé sur le taux).',
            'Appuyer sur la touche `F4` juste après avoir sélectionné `B1` pour insérer automatiquement les deux `$`.',
            'Double-cliquer sur la poignée de recopie en bas à droite de `D4` pour propager la formule jusqu’en `D203`.',
          ],
          conclusion:
            'Si le taux de TVA change un jour dans `B1`, les 200 prix TTC se recalculent instantanément sans retoucher aucune formule.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Référence relative',
            stepTheme: 'Recopie dynamique',
            stepTitle: 'Comprendre la référence relative (A1) lors de la recopie',
            paragraphText:
              'Par défaut, toute adresse de cellule saisie dans Excel (comme `B2` ou `C4`) est une référence relative : Excel ne mémorise pas une adresse fixe, mais un décalage géométrique par rapport à la cellule contenant la formule.\n• **Comportement en recopie verticale** : recopier `=B2*C2` de `D2` vers `D3` ajuste automatiquement la formule en `=B3*C3`.\n• **Comportement en recopie horizontale** : recopier `=SOMME(B2:B10)` de `B11` vers `C11` la transforme en `=SOMME(C2:C10)`.\n• **Exemple concret** : dans une facture de 50 lignes (`Quantité` en B, `Prix unitaire` en C), une seule formule relative `=B2*C2` suffit pour toute la colonne Montant.',
            keyRule:
              'Une référence relative (`A1`) s’adapte automatiquement au sens de déplacement de la poignée de recopie.',
            konanTip:
              'Pour recopier une formule sur 500 lignes sans faire glisser la souris, double-cliquez simplement sur le petit carré vert (poignée de recopie) en bas à droite de la cellule sélectionnée.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'La cellule `D2` contient la formule `=B2*C2`. Si vous la recopiez vers le bas jusqu’en `D5`, quelle formule obtient-on exactement dans `D5` ?',
              options: [
                '=B2*C2',
                '=B5*C5',
                '=E2*F2',
                '=$B$5*$C$5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les références étant relatives, descendre de 3 lignes incrémente automatiquement les numéros de lignes de +3 : `B2` devient `B5` et `C2` devient `C5`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Référence absolue',
            stepTheme: 'Verrouillage $A$1',
            stepTitle: 'Figer une constante unique grâce à la référence absolue ($A$1)',
            paragraphText:
              'Dès qu’une formule fait appel à un paramètre global unique — taux de TVA (18 %), taux de change EUR/FCFA (655,957), taux de commission — une référence relative provoque un désastre dès la deuxième ligne.\n• **Mécanisme du `$`** : `$B$1` verrouille simultanément la colonne `B` et la ligne `1`.\n• **Raccourci magique `F4`** : en mode édition sur une référence, chaque appui sur `F4` fait défiler les 4 états : `B1` → `$B$1` → `B$1` → `$B1`.\n• **Exemple concret** : pour convertir 100 prix en euros (`A4:A103`) en FCFA à l’aide du taux placé en `B1`, on écrit `=A4*$B$1`.',
            formula: {
              name: 'Cycle de la touche F4 sur une référence',
              formula: 'B1 \\xrightarrow{\\text{F4}} \\$B\\$1 \\xrightarrow{\\text{F4}} B\\$1 \\xrightarrow{\\text{F4}} \\$B1',
              note: 'Sur certains ordinateurs portables, la combinaison requise est Fn + F4.',
            },
            keyRule:
              'Ne tapez jamais un taux fixe en dur dans 100 formules (ex. `*0,18`) : placez-le dans une cellule dédiée et référencez-le en absolu (`$B$1`).',
            konanTip:
              'Si votre formule recopiée affiche soudainement `0` ou `#VALEUR!` à partir de la ligne 2, vérifiez en priorité si vous avez oublié les `$` sur votre cellule de paramètre !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Le taux de change fixe `655,957` est saisi dans la cellule `F1`. Les montants en euros figurent en `B4:B50`. Quelle formule en `C4` peut être recopiée sans erreur jusqu’en `C50` ?',
              options: [
                '=B4*F1',
                '=$B$4*F1',
                '=B4*$F$1',
                '=B4+$F$1',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`B4` doit rester relatif pour évoluer en `B5`, `B6`… tandis que `$F$1` doit être figé en absolu pour continuer de pointer vers le taux de change unique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Références mixtes',
            stepTheme: 'Tableaux à double entrée',
            stepTitle: 'Construire un tableau à double entrée avec les références mixtes ($A1 / A$1)',
            paragraphText:
              'Les références mixtes brillent dans les grilles budgétaires, les simulateurs de remises ou les tables de multiplication où l’on recopie une unique formule à la fois vers le bas ET vers la droite.\n• **Colonne figée (`$A2`)** : lors d’une recopie vers la droite, la colonne `A` ne bouge pas ; vers le bas, la ligne `2` s’incrémente (`$A3`, `$A4`).\n• **Ligne figée (`B$1`)** : lors d’une recopie vers le bas, la ligne `1` ne bouge pas ; vers la droite, la colonne `B` s’incrémente (`C$1`, `D$1`).\n• **Exemple concret** : prix de base en colonne `A` (`A2:A10`) et taux de remise en ligne `1` (`B1:E1`) → une seule formule en `B2` : `=$A2*(1-B$1)` remplit toute la matrice.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Références Excel et formules essentielles',
              caption: 'Synthèse opérationnelle du verrouillage par `$` et des fonctions incontournables.',
              tableData: {
                headers: ['Type / Formule', 'Syntaxe', 'Effet en recopie / Rôle'],
                rows: [
                  ['Relative', 'A1', 'Colonne et ligne s’adaptent librement'],
                  ['Absolue', '$A$1', 'Cellule totalement figée (taux TVA, change)'],
                  ['Mixte (colonne)', '$A1', 'Colonne A figée, ligne libre (en-tête gauche)'],
                  ['Mixte (ligne)', 'A$1', 'Ligne 1 figée, colonne libre (en-tête haut)'],
                  ['SI logique', '=SI(test; vrai; faux)', 'Affiche un résultat selon une condition'],
                  ['SOMME.SI.ENS', '=SOMME.SI.ENS(som; p1; c1)', 'Additionne selon 1 ou plusieurs critères'],
                ],
              },
            },
            keyRule:
              'Dans une matrice à double entrée, figez la colonne pour les en-têtes situés à gauche (`$A2`) et figez la ligne pour les en-têtes situés en haut (`B$1`).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Dans un simulateur commercial, les prix unitaires sont en `A2:A15` et les quantités commandées en `B1:F1`. Quelle formule unique en `B2` peut être recopiée sur toute la plage `B2:F15` ?',
              options: [
                '=A2*B1',
                '=$A$2*$B$1',
                '=$A2*B$1',
                '=A$2*$B1',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`$A2` maintient toujours la lecture sur la colonne A des prix tout en changeant de ligne ; `B$1` maintient toujours la lecture sur la ligne 1 des quantités tout en changeant de colonne.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Fonctions de synthèse',
            stepTheme: 'Statistiques de base',
            stepTitle: 'Maîtriser SOMME, MOYENNE, MIN, MAX, NB et NBVAL',
            paragraphText:
              'Les fonctions d’agrégation résument en un clin d’œil une colonne entière de données chiffrées.\n• **`SOMME(plage)` / `MOYENNE(plage)`** : additionnent ou calculent la moyenne arithmétique en ignorant automatiquement les cellules vides ou textuelles.\n• **`MIN(plage)` et `MAX(plage)`** : identifient respectivement la plus petite et la plus grande valeur numérique.\n• **`NB(plage)` vs `NBVAL(plage)`** : `NB` compte uniquement les cellules contenant un NOMBRE ; `NBVAL` compte toutes les cellules NON VIDES (nombres et textes).\n• **Exemple concret** : sur une liste de 45 étudiants, `=NBVAL(A2:A46)` compte les noms présents tandis que `=NB(C2:C46)` compte les notes déjà saisies.',
            formula: {
              name: 'Distinction NB et NBVAL',
              formula: '\\text{NB}(C2:C46) = \\text{effectif num\\acute{e}rique} \\quad|\\quad \\text{NBVAL}(A2:A46) = \\text{cellules non vides}',
              note: 'Le raccourci Alt + = insère instantanément une fonction SOMME automatique.',
            },
            konanTip:
              'Utilisez le raccourci `Alt + =` sous une colonne de chiffres : Excel détecte automatiquement la plage au-dessus et écrit la formule `=SOMME(...)` complète.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'La plage `B2:B11` (10 cellules) contient 7 notes chiffrées, 2 mentions textuelles « Absent » et 1 cellule vide. Que renvoient respectivement `=NB(B2:B11)` et `=NBVAL(B2:B11)` ?',
              options: [
                '7 et 9',
                '9 et 10',
                '7 et 10',
                '9 et 7',
              ],
              correctAnswerIndex: 0,
              explanation:
                '`NB` ne compte que les 7 valeurs numériques ; `NBVAL` compte toutes les cellules non vides (7 nombres + 2 textes = 9).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Erreurs Excel',
            stepTheme: 'Diagnostic rapide',
            stepTitle: 'Décoder les messages d’erreur (#DIV/0!, #NOM?, #REF!, #VALEUR!)',
            paragraphText:
              'Savoir interpréter instantanément un code d’erreur Excel fait gagner un temps précieux lors d’un contrôle ou d’un audit financier.\n• **`#DIV/0!`** : division par zéro ou par une cellule vide (à sécuriser avec `SIERREUR`).\n• **`#NOM?`** : faute de frappe dans le nom d’une fonction (ex. `=SOM(A1:A5)` au lieu de `=SOMME(A1:A5)`) ou texte sans guillemets.\n• **`#VALEUR!`** : opération arithmétique impossible sur du texte (ex. `="100 FCFA" * 2`).\n• **`#REF!`** : une cellule ou colonne utilisée dans la formule a été supprimée.\n• **`#####`** : ce n’est pas une erreur de calcul, mais une colonne trop étroite pour afficher le nombre.',
            keyRule:
              'Ne saisissez jamais d’unité textuelle (« FCFA », « kg ») dans une cellule numérique : utilisez un format de nombre personnalisé afin que la cellule reste calculable.',
            konanTip:
              'Enveloppez vos divisions sensibles dans `=SIERREUR(B2/C2; 0)` ou `=SIERREUR(B2/C2; "-")` pour maintenir des tableaux de bord propres sans `#DIV/0!`.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Dans une feuille de budget, la cellule `D4` affiche `#VALEUR!` alors que sa formule est `=B4*C4`. Quelle est la cause la plus probable ?',
              options: [
                'La colonne D est trop étroite pour afficher le résultat',
                'Une des cellules `B4` ou `C4` contient du texte non numérique (ex. « 5000 FCFA » saisi à la main)',
                'La formule contient une division par zéro',
                'Excel n’est pas connecté à Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’erreur `#VALEUR!` signale un type de donnée incompatible avec l’opérateur mathématique, typiquement un montant saisi avec du texte au lieu d’un format monétaire.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Mise en tableau',
            stepTheme: 'Ctrl + L / Ctrl + T',
            stepTitle: 'Exploiter les Tableaux structurés Excel pour fiabiliser ses modèles',
            paragraphText:
              'Convertir une simple plage de données en véritable « Tableau Excel » (`Insertion > Tableau` ou `Ctrl + L`) transforme radicalement votre productivité.\n• **Recopie automatique** : toute formule saisie sur la première ligne d’une colonne se propage instantanément sur toutes les lignes du tableau.\n• **Plages dynamiques** : ajouter une nouvelle ligne en bas étend automatiquement les totaux, graphiques et tableaux croisés dynamiques liés.\n• **Références structurées lisibles** : au lieu de `=B2*C2`, la formule se lit `=[@Quantité]*[@Prix_Unitaire]`, compréhensible par tout collaborateur.',
            keyRule:
              'Transformez systématiquement vos bases de données brutes en « Tableau Excel » structuré avant de construire des formules ou des TCD.',
            konanTip:
              'Une fois dans un Tableau Excel, cochez « Ligne des totaux » dans l’onglet « Création de tableau » pour obtenir une ligne de synthèse dynamique avec menu déroulant (Somme, Moyenne, Nb…).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Quel avantage majeur offre la conversion d’une plage de ventes en « Tableau structuré Excel » (`Insertion > Tableau`) ?',
              options: [
                'Les formules ne peuvent plus être modifiées',
                'Les formules se propagent automatiquement et toute nouvelle ligne ajoutée s’intègre dynamiquement aux calculs et graphiques liés',
                'Le fichier est automatiquement envoyé par courriel',
                'Toutes les références deviennent impossibles à lire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un Tableau structuré gère l’extension dynamique des plages, la recopie automatique des formules et des références nommées claires par colonne.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p2',
        order: 2,
        title: 'Fonctions logiques et conditionnelles (SI, ET/OU, NB.SI, SOMME.SI.ENS)',
        summary:
          'Automatiser les décisions métier avec SI, combiner plusieurs critères avec ET/OU et agréger sélectivement des données avec NB.SI et SOMME.SI.ENS.',
        conceptExplanation:
          'Les fonctions conditionnelles donnent de l’intelligence à un tableur : au lieu de trier ou d’additionner des lignes à la main, Excel évalue des tests logiques (VRAI/FAUX) pour attribuer automatiquement une mention, une remise commerciale, ou calculer le chiffre d’affaires d’une seule ville sur une période précise.',
        keyRule:
          'Dans une fonction `SI`, tout résultat textuel doit être entouré de guillemets doubles (`"Admis"`), jamais un nombre (`0,10`).',
        formulas: [
          {
            name: 'Syntaxe de SI et SOMME.SI.ENS',
            formula: '=\\text{SI}(\\text{test};\\; \\text{vrai};\\; \\text{faux}) \\quad|\\quad =\\text{SOMME.SI.ENS}(\\text{plage\\_somme};\\; \\text{plage1};\\; \\text{crit1})',
            note: 'Attention à l’ordre inversé : dans SOMME.SI.ENS, la plage à additionner se place TOUJOURS en premier argument !',
          },
        ],
        workedExample: {
          title: 'Calculer une remise commerciale conditionnelle et un CA filtré par zone',
          statement:
            'Un grossiste à Abidjan accorde 10 % de remise uniquement si le client commande au moins 500 000 FCFA ET paie comptant. Ensuite, il veut le total des ventes de la zone « Plateau » réglées par « Mobile Money ».',
          methodSteps: [
            'Pour la remise sur la ligne 2 (`C2` = Montant, `D2` = Paiement) : `=SI(ET(C2>=500000; D2="Comptant"); C2*0,1; 0)`.',
            'Pour le total multicritère (`B2:B200` = Zone, `D2:D200` = Paiement, `C2:C200` = Montant) : `=SOMME.SI.ENS(C2:C200; B2:B200; "Plateau"; D2:D200; "Mobile Money")`.',
            'Vérifier que toutes les plages dans `SOMME.SI.ENS` ont exactement la même hauteur (lignes 2 à 200).',
          ],
          conclusion:
            'Les remises et le chiffre d’affaires segmenté se mettent à jour en temps réel à chaque nouvelle facture.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fonction SI',
            stepTheme: 'Logique binaire',
            stepTitle: 'Construire un test décisionnel avec la fonction SI',
            paragraphText:
              'La fonction `SI` tranche entre deux issues possibles en fonction d’un test logique évalué à VRAI ou FAUX.\n• **Structure en 3 arguments séparés par `;`** : `=SI(test_logique ; valeur_si_vrai ; valeur_si_faux)`.\n• **Opérateurs de comparaison** : `=` (égal), `<>` (différent de), `>`, `<`, `>=`, `<=`.\n• **Exemple concret** : dans un relevé de notes où la moyenne est en `E2`, la formule `=SI(E2>=10; "Admis"; "Ajourné")` attribue automatiquement le statut de l’étudiant.',
            formula: {
              name: 'Structure de la fonction SI',
              formula: '=\\text{SI}(E2 \\ge 10;\\; \\text{"Admis"};\\; \\text{"Ajourn\\acute{e}"})',
              note: 'En version française d’Excel, le séparateur d’arguments est le point-virgule (;).',
            },
            keyRule:
              'Un test logique ne contient jamais de guillemets autour des nombres (`E2>=10`), mais exige des guillemets autour des chaînes de texte (`"Admis"`).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une facture en `C4` est dite « Prioritaire » si son montant dépasse strictement 1 000 000 FCFA, sinon « Standard ». Quelle formule Excel est exacte ?',
              options: [
                '=SI(C4>1000000; Prioritaire; Standard)',
                '=SI(C4>1000000; "Prioritaire"; "Standard")',
                '=SI("C4>1000000"; "Prioritaire"; "Standard")',
                '=SI(C4=1000000; "Prioritaire"; "Standard")',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le test `C4>1000000` est sans guillemets, le seuil « dépasse strictement » utilise `>` et les deux résultats textuels sont encadrés par des guillemets doubles.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'ET / OU dans SI',
            stepTheme: 'Conditions composées',
            stepTitle: 'Combiner plusieurs critères grâce à ET() et OU()',
            paragraphText:
              'Dans la réalité d’une entreprise, une décision dépend rarement d’une seule condition : on combine alors `SI` avec les opérateurs logiques `ET` et `OU`.\n• **`ET(cond1; cond2)`** : renvoie VRAI uniquement si TOUTES les conditions sont vraies simultanément (cumul exigeant).\n• **`OU(cond1; cond2)`** : renvoie VRAI dès qu’AU MOINS UNE des conditions est vraie (alternative souple).\n• **Exemple concret** : livraison gratuite si le panier (`C2`) atteint 50 000 FCFA OU si le client est membre VIP (`D2="VIP"`) → `=SI(OU(C2>=50000; D2="VIP"); 0; 2500)`.',
            keyRule:
              'Placez toujours `ET(...)` ou `OU(...)` entièrement à l’intérieur du premier argument (le test logique) de la fonction `SI`.',
            konanTip:
              'Lisez votre formule à voix haute : si vous prononcez « à la fois … et … », utilisez `ET` ; si vous prononcez « soit … soit … », utilisez `OU`.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Une prime de 50 000 FCFA est versée à un commercial uniquement s’il a dépassé 10 M FCFA de ventes (`B2>10`) ET obtenu une note client d’au moins 4,5/5 (`C2>=4,5`). Quelle formule convient ?',
              options: [
                '=SI(OU(B2>10; C2>=4,5); 50000; 0)',
                '=SI(ET(B2>10; C2>=4,5); 50000; 0)',
                '=ET(SI(B2>10; 50000; 0); C2>=4,5)',
                '=SI(B2>10 ET C2>=4,5; 50000; 0)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En Excel, `ET` est une fonction préfixée placée en premier argument de `SI` : `ET(condition1; condition2)` vérifie le cumul des deux exigences.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'SI imbriqués & SI.CONDITIONS',
            stepTheme: 'Paliers multiples',
            stepTitle: 'Gérer plusieurs tranches (mentions, barèmes) avec SI imbriqués ou SI.CONDITIONS',
            paragraphText:
              'Lorsqu’il existe 3 ou 4 paliers (ex. Ajourné / Passable / Bien / Très Bien), on enchaîne les tests dans un ordre strictement croissant ou décroissant.\n• **SI imbriqués** : le 3e argument d’un `SI` contient le `SI` suivant : `=SI(E2>=16; "TB"; SI(E2>=14; "B"; SI(E2>=10; "Passable"; "Ajourné")))`.\n• **Alternative moderne (`SI.CONDITIONS`)** : évite les parenthèses multiples en alignant des paires `(test1; val1; test2; val2; VRAI; défaut)`.\n• **Piège d’ordre** : si vous testez `E2>=10` AVANT `E2>=16`, une note de 18 s’arrêtera dès le premier test et affichera « Passable » !',
            keyRule:
              'Excel s’arrête à la toute première condition vraie : ordonnez toujours vos seuils du plus grand au plus petit (ou inversement) sans sauter de palier.',
            konanTip:
              'Comptez vos parenthèses fermantes en fin de formule de `SI` imbriqués : Excel les colore par paire et la dernière parenthèse valide est toujours NOIRE.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un étudiant a `17` en `E2`. Que renvoie la formule mal ordonnée `=SI(E2>=10; "Passable"; SI(E2>=16; "Très Bien"; "Ajourné"))` ?',
              options: [
                'Très Bien',
                'Passable',
                'Ajourné',
                '#VALEUR!',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme `17 >= 10` est immédiatement VRAI, Excel renvoie « Passable » et n’évalue jamais le second test `E2>=16`. Il faut toujours tester le seuil le plus élevé en premier.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'NB.SI & NB.SI.ENS',
            stepTheme: 'Comptage sélectif',
            stepTitle: 'Compter des occurrences sous conditions avec NB.SI et NB.SI.ENS',
            paragraphText:
              'Avant de calculer des moyennes ou des parts de marché, on a besoin de dénombrer combien de lignes satisfont un ou plusieurs critères.\n• **`NB.SI(plage; critère)`** : compte les cellules correspondant à un seul critère (ex. `=NB.SI(B2:B100; "Abidjan")` ou `=NB.SI(E2:E100; ">=10")`).\n• **`NB.SI.ENS(plage1; crit1; plage2; crit2)`** : compte les lignes vérifiant simultanément plusieurs critères.\n• **Caractères génériques** : `*` remplace n’importe quelle suite de caractères (`"Kou*"` compte Kouassi, Kouamé, Kouadio…).',
            formula: {
              name: 'Comptage conditionnel simple et multiple',
              formula: '=\\text{NB.SI}(E2:E100;\\; \\text{">=10"}) \\quad|\\quad =\\text{NB.SI.ENS}(B2:B100;\\; \\text{"Abidjan"};\\; E2:E100;\\; \\text{">=10"})',
              note: 'Un critère comportant un opérateur (>=, <>, >) doit toujours être placé entre guillemets doubles.',
            },
            keyRule:
              'Dans `NB.SI`, `SOMME.SI` et leurs variantes `.ENS`, tout critère combiné avec un opérateur (`">=10"`, `"<>Annulé"`) s’écrit entre guillemets.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Vous voulez compter combien de factures dans `C2:C80` ont un montant supérieur ou égal à 250 000 FCFA. Quelle syntaxe est correcte ?',
              options: [
                '=NB.SI(C2:C80; >=250000)',
                '=NB.SI(C2:C80; ">=250000")',
                '=NB(C2:C80; ">=250000")',
                '=SOMME.SI(C2:C80; ">=250000")',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`NB.SI` exige que le critère incluant l’opérateur `>=` soit formulé comme une chaîne de texte : `">=250000"`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'SOMME.SI vs SOMME.SI.ENS',
            stepTheme: 'Agrégation multicritère',
            stepTitle: 'Éviter le piège d’ordre des arguments entre SOMME.SI et SOMME.SI.ENS',
            paragraphText:
              'Beaucoup d’erreurs en examen viennent de la différence d’ordre entre l’ancienne fonction `SOMME.SI` (1 critère) et la fonction moderne `SOMME.SI.ENS` (1 à 127 critères).\n• **`SOMME.SI`** : `(plage_critère; critère; plage_somme)` — la plage à additionner est en DERNIER.\n• **`SOMME.SI.ENS`** : `(plage_somme; plage_crit1; crit1; plage_crit2; crit2)` — la plage à additionner est TOUJOURS en PREMIER.\n• **Bonne pratique** : utilisez `SOMME.SI.ENS` même pour un seul critère ! Vous n’aurez ainsi qu’une seule syntaxe cohérente à retenir (identique à `MOYENNE.SI.ENS`).',
            keyRule:
              'Adoptez systématiquement `SOMME.SI.ENS` : la plage à additionner vient toujours en 1er argument, suivie des paires `(plage_critère; critère)`.',
            konanTip:
              'Pour comparer avec une cellule dynamique (ex. un seuil saisi en `G1`), concaténez l’opérateur avec `&` : `">="&G1`.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Les montants sont en `D2:D50`, les villes en `B2:B50` et les mois en `A2:A50`. Quelle formule `SOMME.SI.ENS` calcule le total des ventes de « Bouaké » en « Mars » ?',
              options: [
                '=SOMME.SI.ENS(B2:B50; "Bouaké"; A2:A50; "Mars"; D2:D50)',
                '=SOMME.SI.ENS(D2:D50; B2:B50; "Bouaké"; A2:A50; "Mars")',
                '=SOMME.SI(D2:D50; B2:B50; "Bouaké"; "Mars")',
                '=SOMME.SI.ENS(D2:D50; "Bouaké"; B2:B50; "Mars"; A2:A50)',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`SOMME.SI.ENS` commence impérativement par la plage numérique à additionner (`D2:D50`), puis enchaîne chaque couple `(plage_critère; critère)`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Tableau de bord',
            stepTheme: 'KPI commerciaux',
            stepTitle: 'Construire un mini-tableau de bord commercial dynamique',
            paragraphText:
              'En combinant références mixtes/absolues et `SOMME.SI.ENS` / `NB.SI.ENS`, un gestionnaire transforme un journal de 2 000 transactions en tableau de bord instantané.\n• **Architecture** : onglet `Journal_Ventes` pour les données brutes en Tableau structuré, et onglet `Dashboard` pour les indicateurs (CA par agence, nombre de commandes, panier moyen = CA / Nb).\n• **Évolutivité** : les noms d’agences sont référencés dans des cellules (`A5`, `A6`…) plutôt que tapés en dur dans les formules, permettant une recopie immédiate.\n• **Exemple concret** : `=SOMME.SI.ENS(Ventes!$D$2:$D$500; Ventes!$B$2:$B$500; A5)` donne le CA de chaque agence en une recopie.',
            keyRule:
              'Séparez toujours les données brutes (1 onglet) et les indicateurs de synthèse (1 onglet Tableau de bord) reliés par formules dynamiques.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Dans un tableau de bord récapitulant le CA de 12 agences listées de `A5` à `A16`, pourquoi référencer `A5` comme critère dans `SOMME.SI.ENS` au lieu d’écrire `"Plateau"` en dur ?',
              options: [
                'Parce qu’Excel interdit les guillemets dans SOMME.SI.ENS',
                'Pour pouvoir recopier la même formule sur les 12 agences sans la réécrire manuellement et actualiser le calcul si un libellé change',
                'Pour convertir automatiquement les FCFA en dollars',
                'Parce que les critères textuels ne fonctionnent que sur 5 lignes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pointer vers la cellule `A5` (relative) rend la formule générique et recopiable d’un seul glissement pour les 12 agences.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p3',
        order: 3,
        title: 'Fonctions de recherche (RECHERCHEV, RECHERCHEX), validation et mise en forme conditionnelle',
        summary:
          'Croiser deux tables de données grâce à RECHERCHEV et RECHERCHEX, fiabiliser la saisie par listes déroulantes et mettre en évidence les anomalies visuellement.',
        conceptExplanation:
          'En gestion d’entreprise, les informations sont réparties dans plusieurs tables (catalogue produits, fichier clients, journal des factures). Les fonctions de recherche relient automatiquement ces tables grâce à une clé commune (code produit, matricule), tandis que la validation des données et la mise en forme conditionnelle préviennent les erreurs humaines et alertent visuellement sur les seuils critiques.',
        keyRule:
          'Dans `RECHERCHEV`, précisez presque toujours `FAUX` (ou `0`) en 4e argument pour exiger une correspondance EXACTE, et vérifiez que la clé se trouve dans la 1re colonne de la table.',
        formulas: [
          {
            name: 'RECHERCHEV (classique) vs RECHERCHEX (moderne)',
            formula: '=\\text{RECHERCHEV}(\\text{cl\\acute{e}};\\; \\text{table};\\; \\text{no\\_col};\\; \\text{FAUX}) \\quad|\\quad =\\text{RECHERCHEX}(\\text{cl\\acute{e}};\\; \\text{col\\_rech};\\; \\text{col\\_retour};\\; \\text{"Introuvable"})',
            note: 'RECHERCHEX cherche aussi vers la gauche, utilise la correspondance exacte par défaut et intègre nativement la gestion d’erreur.',
          },
        ],
        workedExample: {
          title: 'Automatiser le prix unitaire d’une facture à partir d’un catalogue produits',
          statement:
            'Sur la feuille `Facture`, on saisit un code produit en `A5` (ex. `PRD-014`). La feuille `Catalogue` recense en `A2:C150` les colonnes `Code`, `Désignation`, `Prix_HT`. Comment rapatrier automatiquement le Prix HT en `C5` ?',
          methodSteps: [
            'Avec `RECHERCHEV` : `=SIERREUR(RECHERCHEV(A5; Catalogue!$A$2:$C$150; 3; FAUX); "Code inconnu")` (`3` car `Prix_HT` est la 3e colonne de la table, `FAUX` pour correspondance exacte).',
            'Avec `RECHERCHEX` (Excel 365/2021) : `=RECHERCHEX(A5; Catalogue!$A$2:$A$150; Catalogue!$C$2:$C$150; "Code inconnu")`.',
            'Ajouter une Validation des données (Liste) sur `A5:A30` pointant vers `Catalogue!$A$2:$A$150` pour empêcher toute faute de frappe sur le code.',
          ],
          conclusion:
            'La facturation devient instantanée, sans erreur de prix ni faute de référence produit.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'RECHERCHEV',
            stepTheme: 'Croisement de tables',
            stepTitle: 'Maîtriser les 4 arguments de RECHERCHEV et son 4e paramètre FAUX',
            paragraphText:
              '`RECHERCHEV` (Recherche Verticale) cherche une clé unique dans la PREMIÈRE colonne d’une table de référence et renvoie la valeur située sur la même ligne dans la colonne indiquée.\n• **Les 4 arguments** : 1) `valeur_cherchée` (la clé), 2) `table_matrice` (à figer en absolu `$A$2:$D$100`), 3) `no_index_col` (numéro de colonne dans la table : 2, 3…), 4) `valeur_proche` (`FAUX` ou `0` pour une correspondance exacte).\n• **Piège classique** : omettre le 4e argument active `VRAI` par défaut (recherche approximative), ce qui renvoie des résultats faux sur une table non triée !',
            formula: {
              name: 'Syntaxe sécurisée de RECHERCHEV',
              formula: '=\\text{RECHERCHEV}(A2;\\; \\text{Catalogue}!\\$A\\$2:\\$D\\$100;\\; 3;\\; \\text{FAUX})',
              note: 'Le résultat #N/A signifie que la clé cherchée n’existe pas dans la 1re colonne de la table.',
            },
            keyRule:
              'Dans 95 % des cas métier (codes produits, matricules, noms), le 4e argument de `RECHERCHEV` doit être `FAUX` (ou `0`) et la table doit être figée en absolu.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'La table `Clients!$A$2:$D$80` contient : col. 1 = `Code_Client`, col. 2 = `Nom`, col. 3 = `Ville`, col. 4 = `Plafond_Crédit`. Quelle formule renvoie exactement la `Ville` du client dont le code est en `B5` ?',
              options: [
                '=RECHERCHEV(B5; Clients!$A$2:$D$80; 2; FAUX)',
                '=RECHERCHEV(B5; Clients!$A$2:$D$80; 3; FAUX)',
                '=RECHERCHEV(B5; Clients!$A$2:$D$80; 3; VRAI)',
                '=RECHERCHEV(Clients!$A$2:$D$80; B5; 3; FAUX)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La clé est `B5`, la table figée est `Clients!$A$2:$D$80`, `Ville` est en 3e position (`3`) et `FAUX` impose une correspondance exacte sur le code client.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Limites de RECHERCHEV',
            stepTheme: 'Diagnostic #N/A',
            stepTitle: 'Identifier les 3 limites de RECHERCHEV et corriger l’erreur #N/A',
            paragraphText:
              'Bien que très répandue, `RECHERCHEV` impose trois contraintes strictes qui expliquent la plupart des erreurs `#N/A`.\n• **Limite 1 (Sens unique)** : impossible de chercher une valeur située à GAUCHE de la colonne clé.\n• **Limite 2 (Fragilité aux insertions)** : si quelqu’un insère une nouvelle colonne dans la table source, le numéro fixe `3` pointe désormais sur la mauvaise colonne.\n• **Cause cachée de `#N/A`** : un espace invisible en fin de mot (`"Abidjan "` ≠ `"Abidjan"`) ou un code stocké en texte d’un côté et en nombre de l’autre.\n• **Solution** : nettoyer avec `SUPPRESPACE` et sécuriser l’affichage avec `SIERREUR(..., "Non trouvé")`.',
            konanTip:
              'Face à un `#N/A` inexplicable alors que le code semble identique, vérifiez les espaces parasites en fin de cellule ou testez `=A2=Catalogue!A15` : si Excel répond `FAUX`, les deux chaînes diffèrent par un espace ou le type (texte vs nombre).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quelle est l’une des limites structurelles majeures de `RECHERCHEV` par rapport à `RECHERCHEX` ?',
              options: [
                'RECHERCHEV ne fonctionne pas sur des nombres entiers',
                'RECHERCHEV ne peut renvoyer qu’une valeur située à droite de la colonne de recherche (la clé doit être en 1re colonne)',
                'RECHERCHEV ne peut traiter que 10 lignes maximum',
                'RECHERCHEV ne fonctionne pas entre deux onglets différents',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`RECHERCHEV` impose que la valeur cherchée se situe impérativement dans la colonne la plus à gauche de la table matrice.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'RECHERCHEX',
            stepTheme: 'Successeur moderne',
            stepTitle: 'Adopter RECHERCHEX pour des recherches robustes dans tous les sens',
            paragraphText:
              'Introduite dans Excel 2021 et Microsoft 365, `RECHERCHEX` remplace avantageusement `RECHERCHEV`, `RECHERCHEH` et `INDEX/EQUIV`.\n• **Syntaxe intuitive** : `=RECHERCHEX(valeur_cherchée; tableau_recherche; tableau_renvoyé; [si_non_trouvé])`.\n• **Trois progrès décisifs** : 1) recherche à gauche comme à droite sans compter de numéro de colonne ; 2) correspondance EXACTE activée par défaut ; 3) 4e argument intégré pour personnaliser le message si la clé est absente (plus besoin d’imbriquer `SIERREUR`).\n• **Exemple concret** : `=RECHERCHEX(E2; $C$2:$C$100; $A$2:$A$100; "Absent")` retrouve le nom en colonne A à partir d’un matricule en colonne C.',
            keyRule:
              'Privilégiez `RECHERCHEX` sur les versions récentes d’Excel : elle survit aux insertions de colonnes, cherche vers la gauche et gère nativement les absences.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Dans la formule `=RECHERCHEX(A2; $D$2:$D$50; $B$2:$B$50; "Inconnu")`, que réalise précisément Excel ?',
              options: [
                'Il additionne les colonnes D et B',
                'Il cherche A2 dans la colonne D, renvoie la valeur correspondante située à gauche en colonne B, et affiche « Inconnu » si A2 n’existe pas',
                'Il trie la colonne D par ordre alphabétique',
                'Il renvoie une erreur #REF! car la colonne B est à gauche de la colonne D',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`RECHERCHEX` sépare la colonne de recherche (`D`) et la colonne de retour (`B`), ce qui permet de lire librement vers la gauche tout en gérant l’absence par « Inconnu ».',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Validation des données',
            stepTheme: 'Listes déroulantes',
            stepTitle: 'Sécuriser la saisie avec la Validation des données et les listes déroulantes',
            paragraphText:
              'La première cause de formules cassées dans un fichier partagé est la saisie libre incohérente (« Abidjan », « abidjan », « ABIDJAN », « Abijdan »).\n• **Accès** : onglet `Données > Validation des données`.\n• **Liste déroulante** : choisir Autoriser = `Liste` et pointer la Source vers une plage de référence (`=$G$2:$G$8`) contenant les valeurs officielles.\n• **Autres contrôles** : imposer un nombre entier entre 0 et 20 pour des notes, ou une date postérieure à aujourd’hui, avec un « Message d’erreur » personnalisé qui bloque toute saisie hors règle.',
            keyRule:
              'Combinez toujours une Validation par Liste déroulante avec vos fonctions `SOMME.SI.ENS` et `RECHERCHEV` afin d’éliminer 100 % des fautes d’orthographe sur les clés.',
            konanTip:
              'Placez vos listes de référence (villes, catégories, modes de paiement) dans un onglet dédié nommé `Paramètres` que vous pouvez protéger contre les modifications accidentelles.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Pour garantir que les opérateurs ne saisissent que les 4 modes de paiement officiels (« Espèces », « Mobile Money », « Carte », « Virement ») dans la colonne D, quel outil Excel devez-vous configurer ?',
              options: [
                'La fusion de cellules',
                'Données > Validation des données > Autoriser : Liste',
                'Le publipostage Word',
                'L’orientation Paysage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Validation des données en mode « Liste » affiche un menu déroulant contrôlé et rejette toute saisie orthographiée différemment.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Mise en forme conditionnelle',
            stepTheme: 'Alertes visuelles',
            stepTitle: 'Faire parler les chiffres grâce à la Mise en forme conditionnelle',
            paragraphText:
              'L’œil humain repère instantanément une couleur ou une barre visuelle, alors qu’il peine à scanner 500 nombres bruts.\n• **Règles de mise en surbrillance** (`Accueil > Mise en forme conditionnelle`) : colorer automatiquement en rouge toute note `< 10`, tout stock `< 15` ou toute facture échue.\n• **Visualisations intégrées** : « Barres de données » (mini-histogramme dans la cellule), « Nuances de couleurs » (carte de chaleur vert/jaune/rouge) et « Jeux d’icônes » (feux tricolores, flèches de tendance).\n• **Formule personnalisée** : colorer toute une ligne entière selon la valeur d’une colonne grâce à une référence mixte (ex. `=$E2="Impayé"`).',
            keyRule:
              'Pour colorer toute une ligne avec une formule de mise en forme conditionnelle, figez uniquement la colonne testée (`=$E2="Impayé"`) et laissez la ligne relative.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Dans un tableau de suivi des stocks (`A2:F100`), vous souhaitez que toute la ligne se colore en rouge dès que le statut en colonne `F` vaut `"Rupture"`. Quelle formule saisir dans la règle de mise en forme conditionnelle ?',
              options: [
                '=$F$2="Rupture"',
                '=$F2="Rupture"',
                '=F$2="Rupture"',
                '=F2=Rupture',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En figeant la colonne `$F` et en laissant la ligne `2` relative, chaque cellule d’une ligne vérifie la colonne F de SA propre ligne.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Chaîne de fiabilité',
            stepTheme: 'Cas complet',
            stepTitle: 'Combiner Validation, RECHERCHEX et Mise en forme dans un outil de gestion',
            paragraphText:
              'Un bon outil bureautique ne se contente pas de calculer : il guide l’utilisateur et signale immédiatement les anomalies.\n• **Étape 1 (Saisie propre)** : une liste déroulante impose le choix d’un code article valide.\n• **Étape 2 (Calcul automatique)** : `RECHERCHEX` rapatrie le prix unitaire et le seuil minimal de stock depuis l’onglet `Catalogue`.\n• **Étape 3 (Alerte visuelle)** : une mise en forme conditionnelle allume une pastille rouge dès que le stock restant passe sous le seuil minimal.\n• **Résultat** : même un débutant peut exploiter le classeur sans risquer de fausser les résultats.',
            konanTip:
              'Pensez à utiliser `Gérer les règles` dans le menu Mise en forme conditionnelle pour éviter d’empiler 5 règles contradictoires sur la même plage de cellules.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Dans un classeur de gestion de stock, quelle combinaison d’outils permet à la fois d’empêcher les erreurs de code produit, de rapatrier automatiquement le prix et de signaler visuellement les ruptures ?',
              options: [
                'Saut de section + Filigrane + SmartArt',
                'Validation des données (Liste) + RECHERCHEX/RECHERCHEV + Mise en forme conditionnelle',
                'Note de bas de page + Publipostage + Orthographe F7',
                'Fusion de cellules + Couleur manuelle + Recopie de texte',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces trois fonctionnalités forment le trio d’or d’un classeur opérationnel fiable : contrôle de saisie, liaison dynamique et alerte visuelle.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch2_p4',
        order: 4,
        title: 'Tableaux croisés dynamiques (TCD), filtres et graphiques décisionnels',
        summary:
          'Synthétiser instantanément des milliers de lignes grâce aux Tableaux Croisés Dynamiques, manipuler les 4 zones, ajouter des segments et choisir le graphique le plus lisible.',
        conceptExplanation:
          'Le Tableau Croisé Dynamique (TCD) est l’outil d’analyse le plus puissant d’Excel : sans écrire une seule formule, il agrège, recoupe et compare en quelques glisser-déposer des milliers d’enregistrements selon plusieurs dimensions (régions, produits, trimestres). Associé au bon type de graphique, il transforme une base brute en support de décision immédiat.',
        keyRule:
          'Un TCD ne se recalcule pas tout seul lorsque vous modifiez les données sources : faites toujours « Clic droit > Actualiser » (ou `Données > Actualiser tout`).',
        formulas: [
          {
            name: 'Les 4 zones d’un Tableau Croisé Dynamique',
            formula: '\\text{Lignes} \\;\\times\\; \\text{Colonnes} \\;\\longrightarrow\\; \\text{Valeurs (Somme / Nb / \\%)} \\;+\\; \\text{Filtres / Segments}',
            note: 'Règle de source propre : 1 ligne d’en-têtes uniques, 0 ligne ou colonne vide, 0 cellule fusionnée.',
          },
        ],
        workedExample: {
          title: 'Analyser 5 000 ventes par région et par trimestre avec un TCD et un histogramme',
          statement:
            'Vous disposez d’une base de 5 000 factures (colonnes : `Date`, `Région`, `Catégorie`, `Montant_FCFA`). La direction veut le CA par région et par trimestre, filtrable par catégorie, accompagné d’un graphique comparatif.',
          methodSteps: [
            'Convertir la base en Tableau structuré (`Ctrl + L`), puis cliquer sur `Insertion > Tableau croisé dynamique` (nouvelle feuille).',
            'Glisser `Région` dans **Lignes**, `Date` (regroupée par Trimestres) dans **Colonnes**, et `Montant_FCFA` dans **Valeurs** (Somme, format monétaire).',
            'Insérer un **Segment** (`Analyse du TCD > Insérer un segment`) sur `Catégorie` pour filtrer d’un clic, puis insérer un **Graphique croisé dynamique** (Histogramme groupé).',
          ],
          conclusion:
            'En moins d’une minute, la direction dispose d’un tableau de synthèse interactif et d’un graphique comparatif dynamique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Base propre pour TCD',
            stepTheme: 'Prérequis data',
            stepTitle: 'Préparer une base de données tabulaire compatible avec un TCD',
            paragraphText:
              'Un Tableau Croisé Dynamique échoue ou produit des résultats faux si la source de données est mal structurée.\n• **Les 4 règles d’or d’une table propre** : 1) chaque colonne possède un en-tête unique en ligne 1 ; 2) aucune ligne ni colonne entièrement vide au milieu ; 3) aucune cellule fusionnée ; 4) un seul type de donnée par colonne (dates réelles, nombres réels) et aucune ligne de sous-total manuelle à l’intérieur.\n• **Réflexe pro** : convertir la plage en Tableau structuré (`Ctrl + L`) avant de créer le TCD pour que les futures lignes ajoutées soient prises en compte à l’actualisation.',
            keyRule:
              'Pas de cellules fusionnées, pas de lignes vides, pas de sous-totaux manuels : une base TCD doit être un rectangle pur de données atomiques.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p4_q1',
              type: 'mcq',
              prompt:
                'Quelle anomalie dans votre feuille de données empêchera Excel de créer proprement un Tableau Croisé Dynamique ?',
              options: [
                'Avoir plus de 1 000 lignes de ventes',
                'Avoir des en-têtes manquants, des cellules fusionnées ou des colonnes entièrement vides au milieu de la table',
                'Utiliser un format monétaire sur la colonne Montant',
                'Avoir préalablement converti la plage en Tableau structuré',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Excel a besoin d’en-têtes uniques sur chaque colonne et d’un bloc continu sans fusions ni ruptures vides pour construire le cache d’un TCD.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Les 4 zones du TCD',
            stepTheme: 'Construction',
            stepTitle: 'Répartir les champs entre Lignes, Colonnes, Valeurs et Filtres',
            paragraphText:
              'La boîte « Champs de tableau croisé dynamique » se compose de 4 zones qui structurent votre analyse.\n• **Lignes** : les catégories principales affichées verticalement (ex. `Région` ou `Commercial`).\n• **Colonnes** : un second axe de croisement horizontal (ex. `Trimestre` ou `Canal`).\n• **Valeurs** : les champs numériques à agréger (Somme par défaut pour les nombres, Nombre pour les textes).\n• **Filtres** : un ou plusieurs critères globaux permettant d’isoler une année ou une filiale.\n• **Paramètres des champs de valeurs** : permet d’afficher la Moyenne, le Min/Max ou le `% du total général` en deux clics.',
            keyRule:
              'Si Excel affiche « Nombre de Montant » au lieu de « Somme de Montant », c’est qu’au moins une cellule de la colonne contient du texte ou est vide : passez par « Paramètres des champs de valeurs > Somme ».',
            konanTip:
              'Double-cliquer sur n’importe quel chiffre de synthèse à l’intérieur d’un TCD ouvre instantanément un nouvel onglet listant toutes les lignes détaillées qui composent ce total !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p4_q2',
              type: 'mcq',
              prompt:
                'Dans un TCD analysant des ventes, où devez-vous glisser le champ numérique `Montant_FCFA` pour obtenir le chiffre d’affaires total par région ?',
              options: [
                'Dans la zone Filtres',
                'Dans la zone Valeurs (avec synthèse par Somme)',
                'Dans la zone Colonnes uniquement',
                'Hors du volet des champs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les grandeurs chiffrées à agréger (Somme, Moyenne, pourcentage) se placent toujours dans la zone **Valeurs** ; les axes d’analyse (`Région`) vont en Lignes ou Colonnes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Actualisation & Segments',
            stepTheme: 'Interactivité',
            stepTitle: 'Penser à actualiser un TCD et piloter ses filtres par Segments',
            paragraphText:
              'Contrairement aux formules classiques (`SOMME`, `SI`), un TCD travaille sur une copie mémoire (cache) de la base source.\n• **Piège de l’actualisation** : si vous corrigez une facture dans l’onglet source, le TCD affiche encore l’ancien chiffre tant que vous n’avez pas cliqué sur `Clic droit > Actualiser` (ou `Alt + F5`).\n• **Segments (`Slicers`)** : boutons visuels interactifs (`Analyse du TCD > Insérer un segment`) bien plus lisibles qu’un filtre déroulant classique.\n• **Chronologie** : segment spécial dédié aux dates (filtrer par mois, trimestre ou année en un glissement).',
            keyRule:
              'Actualisez impérativement tous vos TCD (`Données > Actualiser tout`) après chaque mise à jour des données sources et avant toute présentation.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p4_q3',
              type: 'mcq',
              prompt:
                'Vous venez de corriger le montant d’une facture dans votre base source, mais le total affiché dans votre Tableau Croisé Dynamique n’a pas bougé. Que devez-vous faire ?',
              options: [
                'Supprimer le TCD et le recréer de zéro',
                'Faire un clic droit dans le TCD puis cliquer sur « Actualiser » (ou Données > Actualiser tout)',
                'Changer la police du tableau',
                'Fermer Excel sans enregistrer',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le TCD interroge un cache interne ; la commande « Actualiser » recharge immédiatement les données modifiées dans le cache.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Choix du graphique',
            stepTheme: 'Dataviz Excel',
            stepTitle: 'Choisir le bon graphique selon le message à faire passer',
            paragraphText:
              'Un mauvais choix de graphique rend des données excellentes totalement illisibles.\n• **Histogramme (colonnes) ou Barres** : idéal pour COMPARER des catégories distinctes (ex. ventes par région ou par produit).\n• **Courbe (ligne)** : idéal pour montrer une ÉVOLUTION chronologique continue (ex. trafic mensuel sur 12 mois).\n• **Secteurs (camembert)** : réservé aux PARTS D’UN TOUT (100 %) avec **5 catégories maximum** ; au-delà, préférez un graphique en barres triées.\n• **Nuage de points** : met en évidence la corrélation entre deux variables quantitatives (ex. budget pub vs ventes).',
            visualSchema: {
              type: 'bar_chart',
              title: 'Exemple de graphique Excel — Chiffre d’affaires T1 par région (M FCFA)',
              caption: 'Un histogramme trié avec étiquettes de valeurs permet une comparaison instantanée.',
              barChart: {
                yLabel: 'CA (Millions FCFA)',
                unit: ' M',
                bars: [
                  { label: 'Abidjan', value: 84, color: 'blue', annotation: 'Leader (46 %)' },
                  { label: 'Bouaké', value: 42, color: 'violet', annotation: '+18 %' },
                  { label: 'San-Pédro', value: 33, color: 'green', annotation: 'Portuaire' },
                  { label: 'Korhogo', value: 23, color: 'orange', annotation: 'En hausse' },
                ],
              },
            },
            keyRule:
              'Comparaison → Histogramme/Barres ; Évolution dans le temps → Courbe ; Répartition ≤ 5 parts → Secteurs ; Corrélation → Nuage de points.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p4_q4',
              type: 'mcq',
              prompt:
                'Vous devez présenter l’évolution mensuelle du chiffre d’affaires d’une entreprise sur les 24 derniers mois. Quel type de graphique Excel est le plus pertinent ?',
              options: [
                'Un graphique en secteurs (camembert) à 24 parts',
                'Un graphique en courbes (lignes)',
                'Un organigramme SmartArt',
                'Un graphique radar à 24 branches',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La courbe met immédiatement en évidence la tendance, la saisonnalité et les pics sur une série chronologique de 24 mois, là où un camembert de 24 parts est illisible.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Propreté visuelle',
            stepTheme: 'Épure graphique',
            stepTitle: 'Épurer un graphique Excel pour une lisibilité de niveau cabinet',
            paragraphText:
              'Les graphiques générés par défaut dans Excel comportent souvent du bruit visuel inutile.\n• **Titre orienté message** : remplacez « Graphique 1 » par un titre explicite incluant l’unité (ex. « Chiffre d’affaires T1 2026 par région, en M FCFA »).\n• **Épure** : supprimez les quadrillages lourds, évitez les effets 3D qui faussent la perception des proportions, et ajoutez des **étiquettes de données** sobres.\n• **Axe vertical à zéro** : sur un histogramme, l’axe des ordonnées doit toujours démarrer à `0` pour ne pas exagérer artificiellement les écarts entre deux barres.',
            keyRule:
              'Bannissez les graphiques 3D trompeurs et vérifiez toujours que l’axe vertical d’un histogramme commence bien à 0.',
            konanTip:
              'Trier vos données par ordre décroissant avant d’insérer un histogramme ou un graphique en barres rend instantanément visible le classement des catégories.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p4_q5',
              type: 'mcq',
              prompt:
                'Pourquoi est-il déconseillé de faire démarrer l’axe vertical d’un histogramme à 80 au lieu de 0 pour comparer deux valeurs égales à 82 et 86 ?',
              options: [
                'Parce qu’Excel refuse de tracer le graphique',
                'Parce que cela tronque les barres et donne l’illusion visuelle trompeuse que 86 est trois fois plus grand que 82',
                'Parce que cela empêche d’ajouter un titre',
                'Parce que cela supprime les étiquettes de données',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La hauteur d’une barre représente visuellement la valeur totale ; tronquer l’axe à 80 déforme gravement les proportions et induit le lecteur en erreur.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Filtres & Tris',
            stepTheme: 'Exploration rapide',
            stepTitle: 'Exploiter les tris multicritères et filtres automatiques (Ctrl + Maj + L)',
            paragraphText:
              'Avant même de bâtir un TCD, les tris et filtres permettent d’explorer une base en quelques secondes.\n• **Activer/désactiver les filtres** : `Ctrl + Maj + L` (ou `Données > Filtrer`).\n• **Tri multiniveau (`Données > Trier`)** : trier d’abord par `Région` (A→Z), PUIS par `Chiffre d’affaires` (du plus grand au plus petit) à l’intérieur de chaque région.\n• **Sous-total dynamique (`SOUS.TOTAL`)** : contrairement à `SOMME` qui additionne aussi les lignes masquées par un filtre, `=SOUS.TOTAL(9; D2:D500)` additionne uniquement les lignes actuellement VISIBLES.',
            formula: {
              name: 'Somme dynamique respectant les filtres',
              formula: '=\\text{SOUS.TOTAL}(9;\\; D2:D500)',
              note: 'Le code 9 correspond à SOMME (1 = Moyenne, 3 = NBVAL) en ignorant les lignes masquées par filtre.',
            },
            konanTip:
              'Pensez à `SOUS.TOTAL(9; plage)` en haut d’une liste filtrable : dès que vous filtrez sur une seule ville, le total s’adapte automatiquement aux lignes visibles.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch2_p4_q6',
              type: 'mcq',
              prompt:
                'Vous filtrez un tableau de 300 ventes pour n’afficher que la ville de « Yamoussoukro ». Quelle fonction affiche uniquement la somme des lignes visibles après filtrage ?',
              options: [
                '=SOMME(D2:D301)',
                '=SOUS.TOTAL(9; D2:D301)',
                '=NB(D2:D301)',
                '=MAX(D2:D301)',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`SOMME` continue d’additionner les lignes masquées par le filtre ; seule la fonction `SOUS.TOTAL(9; ...)` recalcule la somme exclusivement sur les lignes affichées.',
            },
          },
        ],
      }),
    ],
  },
  {
    id: 'lmd_entd_l1_bureautique_ch3',
    subjectId: 'lmd_bureautique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Présentation professionnelle (PowerPoint) et productivité documentaire',
    summary:
      'Concevoir des présentations percutantes sous PowerPoint : règle du 6×6, hiérarchie visuelle, masque des diapositives, graphiques vs texte brut, transitions sobres, prise de parole avec mode Présentateur et raccourcis clavier essentiels.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Bureautique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch3_p1',
        order: 1,
        title: 'Architecture visuelle, règle du 6×6 et masque des diapositives',
        summary:
          'Appliquer la règle d’une idée par diapositive, respecter la règle du 6×6, structurer la hiérarchie visuelle et centraliser la charte graphique via le Masque des diapositives.',
        conceptExplanation:
          'Une présentation PowerPoint n’est pas un rapport Word projeté sur un mur : c’est un support visuel qui accompagne la voix de l’orateur. Sa réussite repose sur la sobriété textuelle (règle du 6×6), une hiérarchie typographique lisible depuis le fond de la salle, et l’utilisation du Masque des diapositives pour garantir une cohérence parfaite sur 20 ou 50 écrans.',
        keyRule:
          'Une diapositive = une idée clé. Ne dépassez jamais la règle du 6×6 (6 puces max, 6 mots max par puce) et modifiez toujours le style global dans le Masque des diapositives.',
        formulas: [
          {
            name: 'Règle de lisibilité en salle (6×6 & Typographie)',
            formula: '\\le 6 \\text{ puces/slide} \\;\\times\\; \\le 6 \\text{ mots/puce} \\quad|\\quad \\text{Corps } \\ge 20\\text{–}24\\text{ pt}',
            note: 'Format standard moderne : écran large 16:9. Ratio d’espace blanc (vide) recommandé : au moins 30 % de la diapositive.',
          },
        ],
        workedExample: {
          title: 'Harmoniser 25 diapositives d’un pitch startup en 2 minutes avec le Masque',
          statement:
            'Vous devez apposer le logo d’une startup ivoirienne en bas à droite, passer tous les titres en police Montserrat 32 pt bleu marine et numéroter les 25 diapositives sans le faire manuellement sur chaque écran.',
          methodSteps: [
            'Ouvrir `Affichage > Masque des diapositives` et cliquer tout en haut sur la **grande diapositive mère (n° 1)**.',
            'Insérer le logo en bas à droite, définir la police/couleur du titre et activer les numéros de diapositive (`Insertion > En-tête et pied de page`).',
            'Fermer le mode Masque : les 25 diapositives héritent instantanément de la charte et le logo ne peut plus être déplacé par erreur pendant l’édition.',
          ],
          conclusion:
            'Le deck est 100 % cohérent, professionnel et modifiable globalement en un clic.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Règle du 6×6',
            stepTheme: 'Sobriété cognitive',
            stepTitle: 'Appliquer la règle « 1 slide = 1 idée » et la règle du 6×6',
            paragraphText:
              'Le cerveau humain ne peut pas lire un long paragraphe à l’écran ET écouter l’orateur en même temps : si votre diapositive ressemble à un roman, le public lit et cesse de vous écouter.\n• **Règle du 6×6** : au maximum 6 lignes (puces) par diapositive et environ 6 mots-clés par ligne (jamais de phrases rédigées complètes).\n• **Espace blanc (respiration)** : laissez au moins 30 % de la surface libre pour que l’œil repère immédiatement l’essentiel.\n• **Exemple concret** : au lieu d’un pavé de 120 mots sur les bénéfices du cloud, affichez 3 chiffres clés géants (« -40 % coûts », « 99,9 % disponibilité », « 2 min déploiement ») et commentez-les à l’oral.',
            keyRule:
              'La diapositive projette les points d’ancrage visuels ; le détail argumenté appartient à votre discours oral (ou à vos notes de présentateur).',
            konanTip:
              'Faites le « test des 3 secondes » : si quelqu’un ne comprend pas le message principal de votre diapositive en 3 secondes, c’est qu’elle contient trop de texte ou trop d’idées.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Que prescrit la célèbre « règle du 6×6 » lors de la conception d’une diapositive PowerPoint professionnelle ?',
              options: [
                'Utiliser 6 polices différentes et 6 couleurs vives par écran',
                'Limiter le texte à un maximum de 6 puces de 6 mots environ par diapositive',
                'Parler exactement 6 minutes sur 6 diapositives',
                'Insérer 6 graphiques en secteurs sur chaque diapositive',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La règle du 6×6 évite la surcharge cognitive (« murs de texte ») et garantit que le public reste attentif à l’orateur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Hiérarchie visuelle',
            stepTheme: 'Typographie & Contraste',
            stepTitle: 'Construire une hiérarchie visuelle lisible du fond de la salle',
            paragraphText:
              'Une bonne hiérarchie guide le regard en une fraction de seconde : Titre d’action → Visuel ou chiffre clé → Détail secondaire.\n• **Polices sans empattement (Sans-Serif)** : privilégiez Calibri, Segoe UI, Arial, Inter ou Montserrat (bien plus nettes sur vidéoprojecteur que Times New Roman), avec **2 polices maximum**.\n• **Tailles minimales** : Titre `28–36 pt`, Corps `20–24 pt`, Légendes/sources `14 pt` minimum (en dessous de 18 pt, le texte devient illisible au fond d’un amphithéâtre).\n• **Contraste élevé** : texte très foncé sur fond clair (ou texte blanc sur fond sombre uni) ; jamais de texte jaune sur fond blanc ni sur une photo non assombrie.',
            keyRule:
              'Ne descendez jamais sous 20 pt pour le corps de texte d’une présentation projetée et limitez votre palette à 1 couleur dominante + 1 couleur d’accent.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Pour une soutenance projetée dans un amphithéâtre, quelle combinaison typographique garantit la meilleure lisibilité à distance ?',
              options: [
                'Texte gris clair en taille 11 pt sur fond blanc',
                'Police sans empattement (ex. Segoe UI ou Arial), corps à 22–24 pt, fort contraste et 2 polices maximum',
                'Police cursive manuscrite en taille 14 pt sur photo multicolore',
                'Texte entièrement en majuscules rouges soulignées en taille 12 pt',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les polices sans empattement de grande taille avec un contraste net restent parfaitement lisibles même pour les spectateurs situés au dernier rang.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Masque des diapositives',
            stepTheme: 'Slide Master',
            stepTitle: 'Centraliser la charte graphique dans le Masque des diapositives',
            paragraphText:
              'Copier-coller un logo, un pied de page ou une couleur de titre sur 30 diapositives une par une est lent et génère des décalages disgracieux.\n• **Rôle du Masque (`Affichage > Masque des diapositives`)** : fonctionne comme la feuille de style maîtresse de toute la présentation.\n• **Hiérarchie à 2 niveaux** : la **Diapositive mère** (tout en haut, n° 1) propage ses réglages (polices, logo, couleurs, numérotation) à TOUTES les dispositions ; les **Dispositions filles** en dessous définissent des gabarits spécialisés (Page de titre, Titre + 2 colonnes, Section, Comparaison).\n• **Avantage sécurité** : les éléments placés dans le Masque sont verrouillés en arrière-plan et ne bougent plus accidentellement.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture du Masque des diapositives PowerPoint',
              caption: 'Toute modification sur la Diapositive mère se propage en cascade sur l’ensemble de la présentation.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Niveau 1',
                    title: 'Diapositive mère (Slide Master n° 1)',
                    subtitle: 'Charte globale : thème de couleurs, polices, logo verrouillé, pied de page et numéros',
                    color: 'blue',
                  },
                  {
                    badge: 'Niveau 2',
                    title: 'Dispositions filles (Layouts)',
                    subtitle: 'Gabarits dédiés : Couverture, Chapitre, 2 colonnes, Visuel + Légende, Citation',
                    color: 'violet',
                  },
                  {
                    badge: 'Niveau 3',
                    title: 'Diapositives de contenu (Mode Normal)',
                    subtitle: 'Textes concis, chiffres clés, graphiques et visuels insérés dans les espaces réservés',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'Paramétrez toujours le Masque des diapositives AVANT de rédiger vos diapositives : vous gagnez un temps immense et verrouillez la charte graphique.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Vous voulez que le logo de votre entreprise apparaisse exactement au même endroit sur les 30 diapositives de votre présentation et ne puisse pas être déplacé par erreur. Où devez-vous l’insérer ?',
              options: [
                'En le copiant-collant manuellement sur chacune des 30 diapositives',
                'Sur la diapositive mère (tout en haut) dans « Affichage > Masque des diapositives »',
                'Dans les commentaires du présentateur',
                'Dans la fenêtre des transitions',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tout élément inséré sur la diapositive mère du Masque est automatiquement hérité et verrouillé à la même position sur toutes les dispositions filles.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Titres d’action',
            stepTheme: 'Storyline',
            stepTitle: 'Rédiger des titres d’action plutôt que des titres descriptifs vagues',
            paragraphText:
              'Un titre descriptif (« Résultats T1 », « Marché », « Analyse ») gaspille l’espace le plus regardé de la diapositive.\n• **Titre d’action (méthode cabinet de conseil)** : formule dès le bandeau supérieur la CONCLUSION clé de la diapositive en 1 ligne.\n• **Exemple concret** : remplacez « Ventes régionales 2026 » par « Abidjan et Bouaké concentrent 69 % du chiffre d’affaires T1 ».\n• **Test de cohérence** : en lisant uniquement les titres de vos 12 diapositives à la suite, on doit comprendre tout le fil logique de votre démonstration.',
            keyRule:
              'Transformez vos titres en conclusions claires : le titre annonce le « quoi retenir », le corps de la diapositive apporte la preuve visuelle.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Lequel de ces titres de diapositive applique le principe du « titre d’action » recommandé dans les présentations de direction ?',
              options: [
                'Introduction',
                'Chiffres du Mobile Money',
                'Le paiement Mobile Money a réduit de 35 % les délais d’encaissement en 2026',
                'Diapositive n° 4',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ce titre formule directement l’enseignement clé chiffré que le public doit retenir, tandis que le graphique dessous servira de preuve.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Alignement & Grilles',
            stepTheme: 'Précision géométrique',
            stepTitle: 'Aligner parfaitement les objets avec les repères et la fonction Distribuer',
            paragraphText:
              'Rien ne fait plus amateur que trois blocs légèrement décalés de quelques millimètres.\n• **Repères actifs** : activez `Affichage > Repères` et utilisez les lignes pointillées rouges (repères actifs) qui s’affichent automatiquement lorsque vous déplacez une forme.\n• **Outils d’alignement (`Format de la forme > Aligner`)** : sélectionnez 3 cartes avec `Maj + Clic`, cliquez sur « Aligner en haut » puis sur « Distribuer horizontalement » pour obtenir des espacements identiques au pixel près.\n• **Duplication rapide** : maintenez `Ctrl + Maj` tout en glissant un objet pour le dupliquer parfaitement aligné sur le même axe.',
            konanTip:
              'Utilisez `Ctrl + D` après avoir positionné une première copie d’un bloc : PowerPoint mémorise le décalage exact et reproduit automatiquement l’alignement pour les copies suivantes !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Vous disposez de 4 cartes KPI alignées horizontalement, mais les espaces entre elles sont irréguliers. Quelle commande rend les espacements strictement identiques en un clic ?',
              options: [
                'Format de la forme > Aligner > Distribuer horizontalement',
                'Transition > Balayer',
                'Affichage > Trieuse de diapositives',
                'Insertion > Numéro de diapositive',
              ],
              correctAnswerIndex: 0,
              explanation:
                '« Distribuer horizontalement » calcule automatiquement l’intervalle exact entre le premier et le dernier objet sélectionné pour égaliser tous les espaces.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Format 16:9 & Structure',
            stepTheme: 'Deck complet',
            stepTitle: 'Structurer un deck de soutenance ou de pitch en 5 actes',
            paragraphText:
              'Un diaporama professionnel suit une dramaturgie claire adaptée au temps imparti (en moyenne 1 à 2 minutes par diapositive).\n• **1. Couverture** : titre fort, sous-titre, auteur, date (zéro numéro de page).\n• **2. Sommaire visuel** : 3 ou 4 blocs maximum annonçant le plan.\n• **3. Développement structuré** : alternance de slides de section, de graphiques commentés et de schémas synthétiques.\n• **4. Conclusion / Recommandations** : 3 décisions concrètes à retenir.\n• **5. Slide de clôture** : « Merci — Questions ? » avec coordonnées professionnelles.',
            keyRule:
              'Comptez environ 1 à 2 minutes par diapositive : pour un oral de 10 minutes, visez 8 à 10 diapositives maximum (hors annexes).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Vous disposez exactement de 10 minutes pour présenter votre projet devant un jury. Quel ordre de grandeur de diapositives (hors annexes) est le plus adapté ?',
              options: [
                '2 diapositives remplies de 300 mots chacune',
                '8 à 10 diapositives aérées (environ 1 à 1,5 minute par diapositive)',
                '45 diapositives passées en rafale',
                '1 seule diapositive contenant tout le rapport Word',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un rythme de 1 à 1,5 minute par diapositive laisse le temps au public d’assimiler chaque visuel sans précipitation ni monotonie.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch3_p2',
        order: 2,
        title: 'Visuels, graphiques vs texte brut et transitions sobres',
        summary:
          'Remplacer les murs de texte par des graphiques et icônes parlants, maîtriser des animations utiles et distinguer bonnes et mauvaises pratiques PowerPoint.',
        conceptExplanation:
          'L’impact mémoriel d’une présentation repose sur le principe de supériorité de l’image : un schéma propre, un graphique épuré ou un chiffre mis en scène se retient bien mieux qu’une liste de dix puces. Quant aux transitions et animations, elles doivent servir la pédagogie (révéler une information au bon moment) et jamais distraire l’auditoire.',
        keyRule:
          'Privilégiez toujours un graphique épuré ou un schéma à un paragraphe, et limitez vos transitions à des effets sobres (Fondu, Morphose, Pousser) identiques d’un bout à l’autre.',
        workedExample: {
          title: 'Transformer une diapositive surchargée en slide décisionnelle',
          statement:
            'Une diapositive contient 140 mots expliquant la répartition du budget IT (45 % Cloud, 30 % Cybersécurité, 15 % Formation, 10 % Matériel) avec une transition « Origami » et des textes qui rebondissent.',
          methodSteps: [
            'Supprimer le paragraphe de 140 mots et formuler un titre d’action : « Cloud et Cybersécurité représentent 75 % du budget IT 2026 ».',
            'Insérer un graphique en barres horizontales (ou anneau sobre) avec les 4 pourcentages affichés directement sur les séries.',
            'Remplacer « Origami » et les rebonds par une transition « Fondu » rapide (0,5 s) et une apparition sobre si nécessaire.',
          ],
          conclusion:
            'Le message est compris en 2 secondes et l’orateur garde toute l’attention de la salle.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Visuel vs Texte',
            stepTheme: 'Impact visuel',
            stepTitle: 'Remplacer les listes à puces par des graphiques, tableaux courts et icônes',
            paragraphText:
              'Trois diapositives consécutives de listes à puces suffisent à endormir une salle.\n• **Chiffres → Graphique lié à Excel** : un histogramme ou une courbe épurée communique une tendance 10 fois plus vite qu’un tableau de 40 cases.\n• **Processus → Schéma / SmartArt** : 4 étapes reliées par des flèches valent mieux que 4 phrases.\n• **Icônes vectorielles (`Insertion > Icônes`)** : PowerPoint intègre des milliers d’icônes vectorielles recolorables à votre charte sans perte de netteté.\n• **Tableaux sur slide** : limitez-les à 4 colonnes × 5 lignes maximum en mettant en valeur la ligne clé.',
            keyRule:
              'Variez les rythmes visuels (chiffre géant, graphique, schéma 3 colonnes, photo plein cadre) pour ne jamais enchaîner plus de deux slides purement textuelles.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Vous devez présenter l’évolution trimestrielle du chiffre d’affaires sur 4 trimestres devant un comité de direction. Quelle mise en scène est la plus efficace sur votre diapositive ?',
              options: [
                'Coller un tableau Excel brut de 12 colonnes et 25 lignes en police 9 pt',
                'Afficher un graphique épuré avec étiquettes de valeurs et un titre d’action résumant la tendance',
                'Rédiger un paragraphe de 15 lignes décrivant chaque chiffre en toutes lettres',
                'Lire les chiffres sur votre téléphone sans rien afficher à l’écran',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un graphique épuré associé à un titre d’action permet au comité de saisir instantanément la tendance tout en écoutant votre analyse.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Transitions sobres',
            stepTheme: 'Dynamique maîtrisée',
            stepTitle: 'Choisir des transitions sobres et exploiter la transition Morphose',
            paragraphText:
              'Les transitions fantaisistes (« Rideaux », « Avion en papier », « Tourbillon ») décrédibilisent immédiatement un discours professionnel.\n• **Transitions recommandées** : « Aucune », « Fondu » (0,4 à 0,6 s) ou « Pousser » — et surtout la MÊME transition sur toute la présentation (« Appliquer partout »).\n• **Transition Morphose (`Transitions > Morphose`)** : l’arme secrète de PowerPoint moderne ! Elle anime de façon fluide le déplacement, le zoom ou la transformation d’un même objet entre deux diapositives consécutives.\n• **Exemple concret** : zoomer en douceur sur une région précise d’une carte de Côte d’Ivoire entre la slide 4 et la slide 5.',
            keyRule:
              'Une transition réussie est presque invisible : choisissez « Fondu » (ou « Morphose » pour un zoom pédagogique) et bannissez les effets gadgets.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle transition moderne de PowerPoint permet d’animer de manière fluide le déplacement ou l’agrandissement d’un objet commun entre deux diapositives successives ?',
              options: [
                'Origami',
                'Morphose',
                'Rideaux de théâtre',
                'Fracture en verre',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La transition « Morphose » interpole automatiquement la position, la taille et l’opacité des objets présents sur deux diapositives consécutives.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Animations utiles',
            stepTheme: 'Pédagogie progressive',
            stepTitle: 'Utiliser les animations pour révéler progressivement, jamais pour décorer',
            paragraphText:
              'Une animation d’objet ne se justifie que si elle aide le public à suivre votre raisonnement étape par étape.\n• **Bon usage** : faire apparaître les 3 étapes d’un schéma une par une au clic (`Apparaître` ou `Fondu`) pour éviter que le public ne lise déjà l’étape 3 pendant que vous expliquez l’étape 1.\n• **Mauvais usage** : faire rebondir, tourner ou tomber lettre par lettre chaque titre (perte de temps et fatigue visuelle).\n• **Volet Animation** : vérifiez l’ordre exact des déclenchements dans `Animations > Volet Animation` avant le jour J.',
            keyRule:
              'Limitez les animations d’objets aux effets discrets (« Apparaître » ou « Fondu ») et uniquement lorsqu’une révélation progressive sert votre explication.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Dans quel cas précis l’ajout d’une animation « Fondu » au clic sur une diapositive est-il pédagogiquement pertinent ?',
              options: [
                'Pour faire tourner le logo en boucle pendant toute la présentation',
                'Pour révéler progressivement les étapes d’un processus complexe au rythme de votre explication orale',
                'Pour animer chaque lettre du titre une par une pendant 8 secondes',
                'Pour compenser l’absence de structure dans le discours',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La révélation progressive synchronise ce que voit le public avec ce qu’il entend, évitant qu’il ne prenne de l’avance sur un schéma dense.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bonnes vs Mauvaises pratiques',
            stepTheme: 'Matrice qualité',
            stepTitle: 'Évaluer une présentation avec la matrice des pratiques PowerPoint',
            paragraphText:
              'Avant toute soutenance ou réunion client, auditez votre diaporama selon deux axes : la clarté du **Contenu** et la maîtrise du **Design & des Animations**.\n• **À privilégier** : 1 idée par slide, règle 6×6, titres d’action, graphiques épurés, Masque homogène, transitions sobres.\n• **À proscrire absolument** : paragraphes copiés-collés depuis Word, captures d’écran floues ou déformées, contrastes faibles, effets 3D et transitions fantaisistes.\n• **Réflexe qualité** : relire tout le deck en mode `Trieuse de diapositives` pour juger l’harmonie globale d’un seul coup d’œil.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice Qualité PowerPoint — Bonnes vs Mauvaises pratiques',
              caption: 'Grille d’audit rapide avant toute présentation académique ou professionnelle.',
              matrix2x2: {
                topAxis: ['Bonnes pratiques (À adopter)', 'Mauvaises pratiques (À bannir)'],
                topLeft: {
                  title: 'Contenu & Structure',
                  items: [
                    '1 idée clé par diapositive + règle du 6×6',
                    'Titres d’action formulant la conclusion',
                    'Graphiques épurés et schémas visuels',
                  ],
                  color: 'green',
                },
                topRight: {
                  title: 'Contenu surchargé',
                  items: [
                    'Murs de texte copiés-collés de Word',
                    'Tableaux Excel illisibles de 50 cases',
                    'Titres vagues (« Suite », « Analyse »)',
                  ],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'Design & Animations',
                  items: [
                    'Masque des diapositives + 2 polices max (≥ 20 pt)',
                    'Fort contraste et ≥ 30 % d’espace blanc',
                    'Transitions sobres (Fondu / Morphose)',
                  ],
                  color: 'blue',
                },
                bottomRight: {
                  title: 'Bruit visuel',
                  items: [
                    '5 polices et 6 couleurs criardes',
                    'Images pixellisées ou étirées',
                    'Animations rebonds et transitions gadgets',
                  ],
                  color: 'violet',
                },
              },
            },
            keyRule:
              'Un audit en mode « Trieuse de diapositives » révèle immédiatement les slides surchargées et les ruptures de charte graphique.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel mode d’affichage PowerPoint permet de visualiser simultanément toutes vos diapositives en miniatures afin de vérifier l’équilibre global et réorganiser leur ordre par glisser-déposer ?',
              options: [
                'Mode Plan uniquement',
                'Trieuse de diapositives',
                'Page de commentaires',
                'Mode Lecture seule',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La « Trieuse de diapositives » affiche toute la présentation sous forme de grille de vignettes, idéale pour juger le rythme visuel et réordonner les sections.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Images & Poids du fichier',
            stepTheme: 'Finition visuelle',
            stepTitle: 'Intégrer des visuels HD sans alourdir le fichier .pptx',
            paragraphText:
              'Une image pixellisée ou entourée d’un fond blanc grossier sur une slide colorée nuit instantanément à la qualité perçue.\n• **Rognage et proportions** : utilisez `Format de l’image > Rogner` plutôt que d’écraser une photo ; maintenez `Maj` ou utilisez les coins pour redimensionner.\n• **Détourage & PNG transparent** : utilisez des logos en format `.png` (fond transparent) ou `.svg` (vectoriel net à tout zoom).\n• **Compression** : `Format de l’image > Compresser les images` (150 ppp Web/Écran) divise souvent par 5 le poids d’un fichier PowerPoint avant envoi par e-mail.',
            konanTip:
              'Pour placer un texte blanc lisible sur une photo lumineuse, intercalez un rectangle noir à 45 % de transparence entre la photo et le texte !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Votre présentation PowerPoint pèse 48 Mo à cause de 15 photos haute résolution et ne passe pas par e-mail. Quelle action native dans PowerPoint réduit fortement le poids sans supprimer vos photos ?',
              options: [
                'Changer la taille de la police en 10 pt',
                'Utiliser « Format de l’image > Compresser les images » (150 ppp, appliqué à toutes les images)',
                'Supprimer le Masque des diapositives',
                'Renommer le fichier en .txt',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La compression d’images à 150 ppp (résolution largement suffisante pour un vidéoprojecteur) supprime les zones rognées et allège considérablement le fichier `.pptx`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Export & Polices',
            stepTheme: 'Sécurité jour J',
            stepTitle: 'Sécuriser son diaporama contre les surprises techniques le jour J',
            paragraphText:
              'Une police personnalisée absente sur l’ordinateur de la salle peut décaler tous vos titres 5 minutes avant votre soutenance.\n• **Incorporer les polices** : `Fichier > Options > Enregistrement > Incorporer les polices dans le fichier` verrouille vos typographies dans le `.pptx`.\n• **Plan B universel en PDF** : exportez systématiquement une version `.pdf` de secours sur votre clé USB et dans le cloud ; si PowerPoint plante ou si le PC de la salle a une vieille version, le PDF s’affiche à l’identique en plein écran (`Ctrl + L` dans Adobe Reader).\n• **Test vidéoprojecteur** : vérifiez toujours le rendu des couleurs claires sur écran projeté.',
            keyRule:
              'Arrivez toujours en soutenance avec deux versions : le `.pptx` (polices incorporées) ET un export `.pdf` de secours.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Comment éviter que la police personnalisée utilisée dans votre diaporama ne soit remplacée par Arial sur l’ordinateur de la salle de soutenance ?',
              options: [
                'Activer l’option « Incorporer les polices dans le fichier » dans les options d’enregistrement PowerPoint (et prévoir un PDF de secours)',
                'Mettre tout le texte en gras et italique',
                'Augmenter le nombre de transitions',
                'Supprimer les titres des diapositives',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’incorporation des polices embarque la typographie directement dans le `.pptx`, et le PDF de secours garantit un rendu figé sur n’importe quelle machine.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_bureautique_ch3_p3',
        order: 3,
        title: 'Prise de parole assistée, mode Présentateur et raccourcis clavier transversaux',
        summary:
          'Maîtriser le mode Présentateur et les raccourcis de projection (F5, B, W, numéro + Entrée), structurer sa prise de parole et automatiser son quotidien bureautique grâce aux raccourcis clavier.',
        conceptExplanation:
          'Un support brillant perd toute sa force si l’orateur tourne le dos au public pour lire ses diapositives. PowerPoint offre un mode Présentateur dédié (notes privées, chronomètre, aperçu de la slide suivante) ainsi que des raccourcis de projection permettant de garder le contrôle total de la salle. Au-delà de PowerPoint, la maîtrise des raccourcis transversaux Word/Excel/PowerPoint multiplie par deux la vitesse de production documentaire.',
        keyRule:
          'Regardez votre public (jamais l’écran de projection), appuyez sur `B` pour noircir l’écran lors d’un échange oral, et maîtrisez les raccourcis universels (`Ctrl + C/V/Z/S/F/H`).',
        formulas: [
          {
            name: 'Raccourcis clés de projection PowerPoint',
            formula: '\\text{F5 : D\\acute{e}but} \\;|\\; \\text{Maj+F5 : Slide actuelle} \\;|\\; \\text{B : \\acute{E}cran noir} \\;|\\; \\text{N° + Entr\\acute{e}e : Saut direct}',
            note: 'En mode Diaporama, appuyer sur B (Black) ou W (White) masque temporairement la slide pour recentrer l’attention sur votre voix.',
          },
        ],
        workedExample: {
          title: 'Gérer une séance de questions-réponses fluide devant un jury',
          statement:
            'À la fin de votre présentation de 12 diapositives, un membre du jury vous interroge sur le graphique financier de la diapositive 6, puis engage un débat ouvert de 2 minutes sans lien avec les slides.',
          methodSteps: [
            'Pour revenir instantanément sur la slide 6 sans faire défiler 6 écrans en arrière, taper `6` puis `Entrée` sur le clavier.',
            'Répondre en pointant le chiffre clé (avec le pointeur laser virtuel `Ctrl + L` ou `Ctrl + Clic`).',
            'Pendant le débat ouvert, appuyer sur `B` pour passer l’écran au noir afin que le jury se concentre à 100 % sur vos propos, puis rappuyer sur `B` si besoin.',
          ],
          conclusion:
            'La maîtrise fluide des raccourcis projette une image d’aisance et de professionnalisme immédiat.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Mode Présentateur',
            stepTheme: 'Cockpit orateur',
            stepTitle: 'Piloter sa présentation grâce au Mode Présentateur',
            paragraphText:
              'Lorsque votre ordinateur est branché à un vidéoprojecteur en mode « Étendre », le **Mode Présentateur** transforme votre écran de PC en véritable cockpit privé.\n• **Ce que voit le public** : uniquement la diapositive en plein écran.\n• **Ce que vous voyez seul** : la diapositive en cours, l’aperçu de la **diapositive suivante** (pour préparer votre transition orale !), vos **Notes de présentateur** (chiffres précis, citations) et un **chronomètre** pour respecter le timing.\n• **Règle d’or** : vos notes doivent contenir 3 mots-clés aide-mémoire, jamais un texte rédigé à lire les yeux baissés.',
            keyRule:
              'Utilisez l’aperçu de la diapositive suivante dans le Mode Présentateur pour annoncer votre transition AVANT même de cliquer : c’est la marque des grands orateurs.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Quel outil natif de PowerPoint permet à l’orateur de voir ses notes privées, le chronomètre et la diapositive suivante sur son PC pendant que le public ne voit que la diapositive projetée ?',
              options: [
                'Le Masque des diapositives',
                'Le Mode Présentateur',
                'La Trieuse de diapositives',
                'Le Publipostage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Mode Présentateur affiche une vue cockpit sur l’écran de l’orateur (notes, chrono, slide suivante) tout en projetant uniquement la slide active au public.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Raccourcis Diaporama',
            stepTheme: 'Contrôle en salle',
            stepTitle: 'Maîtriser F5, Maj+F5, B/W et le saut direct par numéro',
            paragraphText:
              'Connaître cinq raccourcis de projection évite les tâtonnements à la souris devant un auditoire.\n• **`F5`** : lance le diaporama depuis la toute première diapositive.\n• **`Maj + F5`** : lance le diaporama directement à partir de la diapositive actuelle.\n• **`B` (Black) ou `W` (White)** : passe instantanément l’écran au noir (ou au blanc) pour couper la distraction visuelle et recentrer l’attention sur vous ; un second appui réaffiche la slide.\n• **`Numéro + Entrée`** : saute instantanément vers la diapositive souhaitée (ex. `8` + `Entrée` pour la slide 8).\n• **`Échap`** : quitte le mode Diaporama.',
            konanTip:
              'Maintenez `Ctrl` + clic gauche en mode Diaporama : votre curseur se transforme instantanément en pointeur laser rouge lumineux à l’écran !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'En plein diaporama PowerPoint, vous souhaitez masquer temporairement votre diapositive par un écran noir afin que le public se concentre uniquement sur votre explication orale. Quelle touche pressez-vous ?',
              options: [
                'La touche F1',
                'La touche B (Black)',
                'Ctrl + S',
                'Alt + F4',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En mode Diaporama, la touche `B` affiche un écran noir temporaire (et `W` un écran blanc) ; appuyer de nouveau sur `B` revient immédiatement à la diapositive.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Prise de parole',
            stepTheme: 'Posture & Voix',
            stepTitle: 'Synchroniser posture, regard et discours avec son support visuel',
            paragraphText:
              'Même le plus beau PowerPoint ne compense pas un orateur qui lit son écran en tournant le dos à la salle.\n• **Regard circulaire** : balayez lentement l’ensemble du public (gauche, centre, droite) plutôt que de fixer un seul jury ou l’écran.\n• **Silences stratégiques** : marquez une pause de 1 à 2 secondes juste après avoir affiché un graphique ou un chiffre fort pour laisser au public le temps de le lire.\n• **Transitions verbales** : annoncez le lien logique entre deux parties (« Maintenant que nous avons mesuré le problème, voyons les trois solutions retenues… »).',
            keyRule:
              'Ne tournez jamais le dos au public pour lire l’écran projeté : votre support accompagne votre parole, il ne la remplace pas.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle attitude d’orateur renforce le plus l’impact d’une diapositive affichant un graphique important ?',
              options: [
                'Tourner le dos au public et lire mot à mot tous les chiffres sur le mur',
                'Marquer une courte pause pour laisser le public découvrir le graphique, puis en commenter l’enseignement clé en regardant l’auditoire',
                'Changer de diapositive au bout de 3 secondes avant que quiconque n’ait pu lire',
                'S’excuser en disant que le graphique est probablement illisible',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une brève pause permet l’assimilation visuelle, puis le commentaire oral orienté vers le public ancre l’interprétation clé.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Raccourcis universels',
            stepTheme: 'Productivité Office',
            stepTitle: 'Maîtriser les raccourcis clavier transversaux (Word, Excel, PowerPoint)',
            paragraphText:
              'Utiliser le clavier plutôt que la souris pour les actions répétitives fait gagner plusieurs heures chaque semaine.\n• **Édition de base** : `Ctrl + C` (Copier), `Ctrl + X` (Couper), `Ctrl + V` (Coller), `Ctrl + Z` (Annuler), `Ctrl + Y` (Rétablir / Répéter la dernière action).\n• **Fichier & Recherche** : `Ctrl + S` (Enregistrer — réflexe toutes les 5 minutes !), `Ctrl + P` (Imprimer), `Ctrl + F` (Rechercher), `Ctrl + H` (Rechercher et remplacer), `Ctrl + A` (Tout sélectionner).\n• **Mise en forme** : `Ctrl + G` (Gras en Office FR), `Ctrl + I` (Italique), `Ctrl + U` (Souligné).',
            keyRule:
              'La touche `Ctrl + Y` (ou `F4`) répète instantanément votre dernière mise en forme (ex. appliquer une couleur ou une bordure sur plusieurs objets successifs).',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Vous venez d’effacer accidentellement un paragraphe entier ou une formule complexe. Quel raccourci universel annule immédiatement cette dernière action ?',
              options: [
                'Ctrl + X',
                'Ctrl + Z',
                'Ctrl + H',
                'Ctrl + P',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`Ctrl + Z` annule la dernière opération dans quasiment tous les logiciels bureautiques (et `Ctrl + Y` la rétablit si vous avez annulé trop loin).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Collage spécial & Format',
            stepTheme: 'Inter-applications',
            stepTitle: 'Transférer proprement des tableaux et graphiques d’Excel vers Word et PowerPoint',
            paragraphText:
              'Coller brutalement (`Ctrl + V`) un tableau Excel dans Word ou PowerPoint importe souvent des bordures cassées ou des polices incompatibles.\n• **Collage spécial (`Ctrl + Alt + V` ou clic droit > Options de collage)** : permet de choisir précisément le résultat :\n  - **Utiliser le style de destination et lier les données** : adopte automatiquement les couleurs de votre PowerPoint tout en restant connecté au fichier Excel (se met à jour si Excel change !).\n  - **Image** : fige le graphique sans aucun risque de déformation.\n  - **Conserver uniquement le texte** : élimine tout formatage parasite lors d’un copier-coller depuis le web.',
            konanTip:
              'Lorsque vous collez un texte copié depuis un site web dans Word ou PowerPoint, faites toujours « Coller : Conserver uniquement le texte » pour ne pas importer de fonds gris ni de polices étrangères !',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Vous copiez un graphique Excel dans une présentation PowerPoint et souhaitez qu’il adopte automatiquement les couleurs de votre thème PowerPoint tout en s’actualisant si les chiffres Excel changent. Quelle option de collage choisir ?',
              options: [
                'Conserver uniquement le texte',
                'Utiliser le thème de destination et lier les données',
                'Coller en texte brut sans mise en forme',
                'Capturer tout l’écran avec la barre des tâches Windows',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Utiliser le thème de destination et lier les données » harmonise immédiatement la charte graphique avec PowerPoint et maintient un lien dynamique vers la feuille Excel.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Écosystème bureautique',
            stepTheme: 'Chaîne de valeur',
            stepTitle: 'Articuler Excel, Word et PowerPoint dans un projet professionnel complet',
            paragraphText:
              'En entreprise, les trois logiciels de la suite bureautique ne travaillent jamais isolément : chacun joue un rôle précis dans la chaîne de valeur documentaire.\n• **1. Excel (Calcul & Analyse)** : nettoie les données brutes, calcule les KPI (`SOMME.SI.ENS`, `RECHERCHEX`, TCD) et génère les graphiques fiables.\n• **2. Word (Rapport & Trace écrite)** : rédige l’analyse détaillée structurée par styles, table des matières automatique, notes de bas de page et export PDF archivable.\n• **3. PowerPoint (Décision & Oral)** : extrait uniquement les 5 à 10 messages clés visuels et graphiques pour convaincre en 10 minutes devant les décideurs.',
            keyRule:
              'Excel analyse les chiffres, Word documente l’étude complète, PowerPoint convainc à l’oral : ne transformez jamais l’un en copie maladroite de l’autre.',
            exercise: {
              id: 'lmd_entd_l1_bureautique_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Dans un projet d’étude de marché complet, quelle répartition des rôles entre Excel, Word et PowerPoint correspond aux standards professionnels ?',
              options: [
                'Faire tous les calculs dans PowerPoint et le diaporama dans Excel',
                'Analyser les données et générer les graphiques dans Excel, rédiger le rapport complet normé dans Word (export PDF), et synthétiser les messages clés visuels dans PowerPoint pour l’oral',
                'Tout rédiger dans un seul fichier PowerPoint de 80 pages remplies de texte',
                'Copier tout le rapport Word tel quel dans 40 diapositives PowerPoint',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque outil excelle dans sa fonction propre : traitement quantitatif (Excel), documentation détaillée (Word) et persuasion visuelle orale (PowerPoint).',
            },
          },
        ],
      }),
    ],
  },
];
