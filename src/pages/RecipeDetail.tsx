import { useParams } from "react-router-dom";
import { getRecipeBySlug } from "../data/recipes";
import { PlaceholderImage } from "../components/ui/PlaceholderImage";
import { Tag } from "../components/ui/Tag";
import { StatCard } from "../components/ui/StatCard";
import { IngredientList } from "../components/recipes/IngredientList";
import { NotFound } from "./NotFound";

export function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <article className="flex flex-col gap-section pb-section">
      <div className="h-72 w-full md:h-96">
        <PlaceholderImage icon="restaurant" label="Photo du plat à venir" />
      </div>

      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-margin-mobile md:px-margin-desktop">
        <header className="flex flex-col gap-4">
          <h1 className="text-headline-lg-mobile font-display text-forest md:text-headline-lg">{recipe.titre}</h1>
          <p className="max-w-2xl text-body-lg text-on-surface">{recipe.intro}</p>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-3 gap-4">
          <StatCard icon="schedule" label="Préparation" value={`${recipe.preparation_min} mn`} />
          <StatCard icon="local_fire_department" label="Cuisson" value={`${recipe.cuisson_min} mn`} />
          <StatCard icon="groups" label="Portions" value={`${recipe.portions} pers.`} />
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-headline-md font-display text-forest">Ingrédients</h2>
          <IngredientList ingredients={recipe.ingredients} />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-headline-md font-display text-forest">Préparation</h2>
          <ol className="flex flex-col gap-4">
            {recipe.etapes.map((etape, index) => (
              <li key={index} className="flex gap-4 text-body-lg text-on-surface">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-pill bg-tertiary-fixed text-label-md text-on-tertiary-fixed-variant">
                  {index + 1}
                </span>
                <span>{etape}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
