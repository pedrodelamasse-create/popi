export type CourseTier = "fond-de-tiroir" | "ferme" | "supermarche";

export interface CourseItem {
  /** Identifiant stable : sert à mémoriser les cases cochées. Ne pas le changer une fois en ligne. */
  id: string;
  libelle: string;
  tier: CourseTier;
  /** Coché au départ ("je l'ai déjà") : réservé aux basiques évidents du fond de tiroir. */
  cocheParDefaut?: boolean;
}

export interface CourseTierInfo {
  id: CourseTier;
  titre: string;
  /** Nom court, pour les boutons de déplacement */
  court: string;
  sousTitre: string;
  /** Glyphe Material Symbols (vocabulaire du design system) */
  icone: string;
}

export const courseTiers: CourseTierInfo[] = [
  {
    id: "fond-de-tiroir",
    titre: "Fond de tiroir",
    court: "Fond de tiroir",
    sousTitre: "Ce que tu as sûrement déjà dans tes placards : vérifie avant d'acheter.",
    icone: "kitchen",
  },
  {
    id: "ferme",
    titre: "Produits de la ferme",
    court: "Ferme",
    sousTitre: "À aller chercher chez nos fermes partenaires, de saison.",
    icone: "agriculture",
  },
  {
    id: "supermarche",
    titre: "Supermarché",
    court: "Supermarché",
    sousTitre: "Le reste, pour compléter ton panier.",
    icone: "storefront",
  },
];

/**
 * Liste de courses de la semaine (les 7 dîners de src/data/recipes.ts), quantités additionnées
 * d'une recette à l'autre. À METTRE À JOUR À LA MAIN quand une recette change : ajouter,
 * retirer ou corriger les lignes concernées.
 *
 * Répartition en trois niveaux proposée d'après les fermes partenaires — à valider avec Pauline
 * (ex. mûres au supermarché, ail au fond de tiroir).
 */
export const courseItems: CourseItem[] = [
  // --- Fond de tiroir ---
  { id: "huile-olive", libelle: "Huile d'olive (environ 14 c. à soupe)", tier: "fond-de-tiroir", cocheParDefaut: true },
  { id: "sel-poivre", libelle: "Sel, poivre", tier: "fond-de-tiroir", cocheParDefaut: true },
  { id: "ail", libelle: "1 gousse d'ail", tier: "fond-de-tiroir", cocheParDefaut: true },
  { id: "cumin", libelle: "1 c. à café de cumin", tier: "fond-de-tiroir", cocheParDefaut: true },
  { id: "tahini", libelle: "3 c. à soupe de tahini", tier: "fond-de-tiroir" },
  { id: "quinoa", libelle: "300 g de quinoa", tier: "fond-de-tiroir" },
  { id: "pois-chiches", libelle: "400 g de pois chiches cuits", tier: "fond-de-tiroir" },
  { id: "farine-pois-chiche", libelle: "2 c. à soupe de farine de pois chiche", tier: "fond-de-tiroir" },
  { id: "lait-coco", libelle: "400 ml de lait de coco", tier: "fond-de-tiroir" },
  { id: "bouillon-legumes", libelle: "500 ml de bouillon de légumes", tier: "fond-de-tiroir", cocheParDefaut: true },
  { id: "pesto", libelle: "4 c. à soupe de pesto", tier: "fond-de-tiroir" },
  { id: "noisettes", libelle: "100 g de noisettes", tier: "fond-de-tiroir" },
  { id: "pignons-pin", libelle: "40 g de pignons de pin", tier: "fond-de-tiroir" },
  { id: "graines-sesame", libelle: "2 c. à soupe de graines de sésame", tier: "fond-de-tiroir" },
  { id: "graines-tournesol", libelle: "1 poignée de graines de tournesol", tier: "fond-de-tiroir" },
  { id: "graines-courge", libelle: "1 poignée de graines de courge", tier: "fond-de-tiroir" },

  // --- Produits de la ferme ---
  { id: "chou-fleur", libelle: "1 gros chou-fleur", tier: "ferme" },
  { id: "chou-kale", libelle: "200 g de chou kale", tier: "ferme" },
  { id: "potimarron", libelle: "1 potimarron", tier: "ferme" },
  { id: "betteraves", libelle: "8 betteraves", tier: "ferme" },
  { id: "courgettes", libelle: "5 courgettes", tier: "ferme" },
  { id: "carotte", libelle: "1 carotte", tier: "ferme" },
  { id: "celeri", libelle: "4 branches de céleri", tier: "ferme" },
  { id: "oignon", libelle: "1 oignon", tier: "ferme" },
  { id: "oignon-rouge", libelle: "1 oignon rouge", tier: "ferme" },
  { id: "oignon-blanc", libelle: "1 oignon blanc", tier: "ferme" },
  { id: "ciboulette", libelle: "1 botte de ciboulette", tier: "ferme" },
  { id: "coriandre", libelle: "1 botte de coriandre", tier: "ferme" },
  { id: "menthe", libelle: "Quelques feuilles de menthe", tier: "ferme" },
  { id: "herbes-fraiches", libelle: "Quelques herbes fraîches", tier: "ferme" },
  { id: "fromage-frais", libelle: "200 g de fromage frais", tier: "ferme" },
  { id: "pain-levain", libelle: "1 pain au levain", tier: "ferme" },

  // --- Supermarché ---
  { id: "saumon", libelle: "300 g de saumon", tier: "supermarche" },
  { id: "thon-blanc", libelle: "600 g de thon blanc", tier: "supermarche" },
  { id: "stracciatella", libelle: "250 g de stracciatella", tier: "supermarche" },
  { id: "parmesan", libelle: "Quelques copeaux de parmesan", tier: "supermarche" },
  { id: "yaourt-vegetal", libelle: "200 g de yaourt végétal nature", tier: "supermarche" },
  { id: "citrons", libelle: "2 citrons", tier: "supermarche" },
  { id: "citrons-verts", libelle: "2 citrons verts", tier: "supermarche" },
  { id: "mures", libelle: "100 g de mûres", tier: "supermarche" },
];
