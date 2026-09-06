interface IngredientListProps {
  ingredients: Record<string, string[]>;
}

/** Liste d'ingredients groupee par sous-titre, avec le tiret terracotta du DS. */
export function IngredientList({ ingredients }: IngredientListProps) {
  const groups = Object.entries(ingredients);

  return (
    <div className="flex flex-col gap-6">
      {groups.map(([groupe, items]) => (
        <div key={groupe}>
          {groups.length > 1 ? (
            <h4 className="mb-2 text-label-sm uppercase tracking-[0.08em] text-sienna">{groupe}</h4>
          ) : null}
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-lg p-3 text-body-md text-on-surface">
                <span className="h-[2px] w-2 flex-shrink-0 bg-sienna" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
