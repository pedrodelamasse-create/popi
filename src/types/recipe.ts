export type RecipeTag =
  | "Vegan"
  | "Végétarien"
  | "Sans gluten"
  | "Sans cuisson"
  | "Sans lactose"
  | "Riche en protéines";

export interface Recipe {
  slug: string;
  titre: string;
  /** Photo du plat, ex. "/images/recettes/mon-slug.jpg" (dossier public/). Placeholder si absente. */
  image?: string;
  imageAlt?: string;
  tags: RecipeTag[];
  preparation_min: number;
  cuisson_min: number;
  portions: number;
  intro: string;
  /** Groupes d'ingredients, ex. { "LA BASE": [...], "LA SAUCE": [...] } */
  ingredients: Record<string, string[]>;
  /** Etapes numerotees, verbe d'action en MAJUSCULES en debut de phrase */
  etapes: string[];
  /** Bases reutilisees d'une recette a l'autre (houmous, pate a pain...) */
  bases_reutilisees?: string[];
}
