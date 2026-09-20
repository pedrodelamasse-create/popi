import { FarmCard } from "../components/fermes/FarmCard";
import { FarmsMap } from "../components/fermes/FarmsMap";
import { fermes } from "../data/fermes";

export function Farms() {
  return (
    <div className="mx-auto flex max-w-content flex-col gap-8 px-margin-mobile py-12 md:px-margin-desktop">
      <div className="flex flex-col gap-3">
        <h1 className="text-headline-lg-mobile font-display text-forest md:text-headline-lg">
          Mes fermes préférées
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          La majorité des produits (les légumes en particulier) des dîners de la semaine s'appuie
          sur des produits venus de ces fermes. Voici qui elles sont, et où les trouver.
        </p>
      </div>

      <FarmsMap fermes={fermes} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fermes.map((ferme) => (
          <FarmCard key={ferme.slug} ferme={ferme} />
        ))}
      </div>
    </div>
  );
}
