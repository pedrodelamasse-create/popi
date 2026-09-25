import { Link } from "react-router-dom";
import type { Recipe } from "../../types/recipe";
import { PhotoOrPlaceholder } from "../ui/PhotoOrPlaceholder";
import { MetaItem } from "../ui/MetaItem";
import { Tag } from "../ui/Tag";

interface RecipeCardProps {
  recipe: Recipe;
}

/** Carte parchemin sans bordure : image, titre serif, tags, meta. Adapte de content/RecipeCard.jsx. */
export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      to={`/recettes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-parchment shadow-card transition-shadow duration-color ease-popi hover:shadow-card-raised"
    >
      <div className="h-48 w-full overflow-hidden">
        <PhotoOrPlaceholder
          src={recipe.image}
          alt={recipe.imageAlt}
          icon="restaurant"
          className="transition-transform duration-image ease-popi motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col gap-2 p-5">
        <h3 className="text-headline-md font-display text-forest">{recipe.titre}</h3>
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <p className="text-body-md text-on-surface-variant">{recipe.intro}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-surface-variant pt-4">
          <MetaItem icon="schedule">Prépa {recipe.preparation_min} min</MetaItem>
          {recipe.cuisson_min > 0 ? (
            <MetaItem icon="local_fire_department">Cuisson {recipe.cuisson_min} min</MetaItem>
          ) : null}
          <MetaItem icon="groups">Pour {recipe.portions}</MetaItem>
        </div>
      </div>
    </Link>
  );
}
