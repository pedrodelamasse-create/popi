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
