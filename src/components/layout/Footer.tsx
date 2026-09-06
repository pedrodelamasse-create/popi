import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { siteConfig } from "../../data/site.config";
import { trackEvent } from "../../lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-surface-low">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-margin-mobile py-10 md:flex-row md:items-center md:justify-between md:px-margin-desktop">
        <div>
          <p className="text-headline-md font-display text-forest">Popi</p>
          <p className="text-body-md text-on-surface-variant">La semaine detox veggie locale, près de Gambais.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-label-md uppercase text-on-surface-variant">
          <Link to="/recettes" className="hover:text-forest">Recettes</Link>
          <Link to="/fermes" className="hover:text-forest">Fermes</Link>
          <Link to="/a-propos" className="hover:text-forest">À propos</Link>
          <Link to="/communaute" className="hover:text-forest">Communauté</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Popi sur Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-pill bg-surface-container text-forest transition-colors duration-color ease-popi hover:bg-secondary-container"
          >
            <Icon name="photo_camera" size={20} />
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("Clic WhatsApp", { emplacement: "footer" })}
            className="flex items-center gap-2 rounded-pill bg-forest px-4 py-2 text-label-sm uppercase text-on-primary"
          >
            <Icon name="chat" size={16} fill={1} />
            WhatsApp
          </a>
        </div>
      </div>
      <p className="border-t border-surface-variant px-margin-mobile py-4 text-center text-label-sm uppercase tracking-[0.05em] text-outline md:px-margin-desktop">
        Popi — pilote {new Date(siteConfig.dateLancement).getFullYear()}
      </p>
    </footer>
  );
}
