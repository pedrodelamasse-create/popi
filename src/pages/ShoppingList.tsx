import { Button } from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import { CourseRow } from "../components/courses/CourseRow";
import { courseItems, courseTiers } from "../data/courses";
import { useShoppingList } from "../lib/useShoppingList";

export function ShoppingList() {
  const { checked, tierOf, toggle, move, reset, isDefault } = useShoppingList(courseItems);
  const total = courseItems.length;
  const done = courseItems.filter((item) => checked.has(item.id)).length;

  return (
    <div className="mx-auto flex max-w-content flex-col gap-8 px-margin-mobile py-12 md:px-margin-desktop">
      <div className="flex flex-col gap-3">
        <h1 className="text-headline-lg-mobile font-display text-forest md:text-headline-lg">Liste de courses</h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          Tous les ingrédients des dîners de la semaine, classés selon l'endroit où les trouver. Les basiques
          (sel, poivre, huile d'olive, épices, bouillon, ail) sont déjà cochés : décoche ce qu'il te
          manque et coche le reste au fil de tes courses. Une ligne n'est pas au bon endroit ? Déplace-la
          d'une liste à l'autre avec le bouton ⇄. Ta liste reste enregistrée sur cet appareil.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-label-md uppercase text-moss" aria-live="polite">
            {done} sur {total} cochés
          </span>
          {!isDefault ? (
            <Button variant="outline" size="sm" onClick={reset}>
              Réinitialiser
            </Button>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-section">
        {courseTiers.map((tier) => {
          const items = courseItems.filter((item) => tierOf(item) === tier.id);
          const tierDone = items.filter((item) => checked.has(item.id)).length;
          const isFarm = tier.id === "ferme";

          return (
            <section
              key={tier.id}
              aria-labelledby={`tier-${tier.id}`}
              className={`flex flex-col gap-4 rounded-lg border p-6 ${
                isFarm
                  ? "border-secondary-fixed bg-parchment shadow-card"
                  : "border-surface-high bg-surface-lowest shadow-inset-card"
              }`}
            >
              <div className="flex flex-col gap-1 border-b border-surface-high pb-4">
                <div className="flex items-center gap-3">
                  <Icon name={tier.icone} size={24} fill={1} className={isFarm ? "text-primary" : "text-sienna"} />
                  <h2 id={`tier-${tier.id}`} className="text-headline-md font-display text-forest">
                    {tier.titre}
                  </h2>
                  <span
                    className={`ml-auto whitespace-nowrap rounded-md px-2 py-1 text-label-sm ${
                      isFarm ? "bg-secondary-fixed text-primary" : "bg-surface-container text-moss"
                    }`}
                  >
                    {tierDone}/{items.length}
                  </span>
                </div>
                <p className="text-body-md text-on-surface-variant">{tier.sousTitre}</p>
              </div>

              {items.length > 0 ? (
                <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <CourseRow
                        label={item.libelle}
                        checked={checked.has(item.id)}
                        onToggle={() => toggle(item.id)}
                        currentTier={tier.id}
                        onMove={(target) => move(item, target)}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body-md italic text-moss">Rien ici pour l'instant.</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
