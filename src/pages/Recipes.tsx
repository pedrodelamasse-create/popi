import { Button } from "../components/ui/Button";
import { RecipeCard } from "../components/recipes/RecipeCard";
import { recipes } from "../data/recipes";

export function Recipes() {
  return (
    <div className="mx-auto flex max-w-content flex-col gap-8 px-margin-mobile py-12 md:px-margin-desktop">
      <div className="flex flex-col gap-3">
        <h1 className="text-headline-lg-mobile font-display text-forest md:text-headline-lg">
          Les dîners de la semaine
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          Cinq dîners principalement végétariens, pensés pour une famille de 5 — mais tout aussi bons à
          deux ou à quatre. Aucune recette n'est verrouillée.
        </p>
        <div>
          <Button as="link" to="/liste-de-courses" variant="outline" size="sm" icon="checklist">
            Voir la liste de courses
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
