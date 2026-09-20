import { useState } from "react";
import { PlaceholderImage } from "../components/ui/PlaceholderImage";
import { StatCard } from "../components/ui/StatCard";
import { Icon } from "../components/ui/Icon";
import { siteConfig } from "../data/site.config";

export function About() {
  // Si le fichier du portrait n'est pas (encore) présent, on garde le placeholder.
  const [portraitOk, setPortraitOk] = useState(true);

  return (
    <div className="mx-auto flex max-w-content flex-col gap-section px-margin-mobile py-12 md:px-margin-desktop">
      <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg shadow-image md:order-2">
          {portraitOk ? (
            <img
              src={siteConfig.portraitPauline}
              alt="Portrait de Pauline, souriante, en noir et blanc"
              className="h-full w-full object-cover object-top"
              onError={() => setPortraitOk(false)}
            />
          ) : (
            <PlaceholderImage icon="person" label="Portrait de Pauline à venir" />
          )}
        </div>
        <div className="flex flex-col gap-4 md:order-1">
          <h1 className="text-headline-lg-mobile font-display text-forest md:text-headline-lg">
            Pauline, derrière Popi
          </h1>
          <div className="flex flex-col gap-4 rounded-lg border border-dashed border-outline-variant bg-surface-container p-6 text-body-lg text-on-surface">
            <p className="text-label-sm uppercase tracking-[0.08em] text-sienna">
              [TEXTE À VALIDER AVEC PAULINE]
            </p>
            <p>
              Bien manger ne devrait jamais rimer avec culpabiliser, ni avec des heures passées en
              cuisine. C'est cette conviction qui m'a poussée à créer Popi, ancrée à la
              campagne, entourée de fermes dans lesquelles on aime aller en famille.
            </p>
            <p>
              Avec Popi, je veux te montrer qu'on peut manger sainement, réduire son empreinte sur
              la planète et soutenir des prix justes pour les producteurs — le tout sans prise de
              tête.
            </p>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-label-md uppercase text-sienna"
          >
            <Icon name="photo_camera" size={18} />
            Suivre Popi sur Instagram
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon="favorite" label="Santé" value="Frais & léger" />
        <StatCard icon="eco" label="Planète" value="Local" />
        <StatCard icon="handshake" label="Équité" value="Prix justes" />
      </section>
    </div>
  );
}
