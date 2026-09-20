import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { StatCard } from "../components/ui/StatCard";
import { RecipeCard } from "../components/recipes/RecipeCard";
import { WhatsAppCta } from "../components/community/WhatsAppCta";
import { recipes } from "../data/recipes";

export function Home() {
  const teaser = recipes.slice(0, 3);

  return (
    <div className="flex flex-col gap-section pb-section">
      <section className="mx-auto flex max-w-content flex-col items-start gap-6 px-margin-mobile pt-12 md:px-margin-desktop md:pt-20">
        <span className="rounded-pill bg-tertiary-fixed px-4 py-2 text-label-sm uppercase text-on-tertiary-fixed-variant">
          Semaine detox de rentrée
        </span>
        <h1 className="text-headline-lg-mobile font-display text-forest md:text-display-lg">
          Une semaine de dîners veggie, locaux et gourmands
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          Popi t'accompagne pour une semaine test de dîners principalement végétariens, mais pas
          que, préparés avec des produits de saison venus en majorité des fermes proches de chez nous.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button as="link" to="/recettes" variant="primary" size="lg">
            Voir les recettes
          </Button>
          <Button as="link" to="/fermes" variant="outline" size="lg">
            Découvrir les fermes
          </Button>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-content grid-cols-1 gap-4 px-margin-mobile sm:grid-cols-3 md:px-margin-desktop">
        <StatCard icon="favorite" label="Santé" value="Frais & léger" />
        <StatCard icon="eco" label="Planète" value="Local" />
        <StatCard icon="handshake" label="Équité" value="Prix justes" />
      </section>

      <section className="mx-auto flex w-full max-w-content flex-col gap-6 px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-lg-mobile font-display text-forest">Les dîners de la semaine</h2>
          <Link to="/recettes" className="text-label-md uppercase text-sienna">
            Tout voir
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teaser.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-content flex-col items-center gap-6 rounded-lg bg-surface-container px-margin-mobile py-12 text-center md:px-margin-desktop">
        <h2 className="text-headline-lg-mobile font-display text-forest">Rejoins la communauté</h2>
        <p className="max-w-xl text-body-md text-on-surface-variant">
          Partage une photo de ce que tu as cuisiné, ou une photo prise chez l'une des fermes
          partenaires. Un groupe créé spécialement pour ce pilote.
        </p>
        <WhatsAppCta emplacement="accueil" />
      </section>
    </div>
  );
}
