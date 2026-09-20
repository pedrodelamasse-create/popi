import { Icon } from "../components/ui/Icon";
import { WhatsAppCta } from "../components/community/WhatsAppCta";

const usages = [
  { icon: "restaurant", text: "Partage une photo d'un des dîners que tu auras préparé cette semaine." },
  { icon: "agriculture", text: "Envoie moi une photo prise chez l'une des fermes partenaires et dis moi ce que tu en as pensé." },
  { icon: "diversity_3", text: "Échange avec les copines qui testent la même semaine detox." },
];

export function Community() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-margin-mobile py-16 text-center md:px-margin-desktop">
      <h1 className="text-headline-lg-mobile font-display text-forest md:text-headline-lg">
        Rejoins la communauté Popi
      </h1>
      <p className="max-w-xl text-body-lg text-on-surface-variant">
        Un groupe WhatsApp créé spécialement pour ce pilote — pas les contacts personnels de
        Pauline. On y partage nos assiettes et nos visites chez les producteurs, dans la bonne
        humeur.
      </p>

      <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-3">
        {usages.map((usage) => (
          <div key={usage.text} className="flex flex-col gap-3 rounded-lg border border-surface-variant bg-surface-lowest p-6">
            <Icon name={usage.icon} size={24} className="text-secondary" />
            <p className="text-body-md text-on-surface">{usage.text}</p>
          </div>
        ))}
      </div>

      <WhatsAppCta emplacement="communaute" />
    </div>
  );
}
