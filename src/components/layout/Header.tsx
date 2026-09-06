import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../ui/Icon";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/recettes", label: "Recettes" },
  { to: "/fermes", label: "Fermes" },
  { to: "/a-propos", label: "À propos" },
  { to: "/communaute", label: "Communauté" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-pill px-4 py-2 text-label-md uppercase transition-colors duration-color ease-popi ${
    isActive ? "bg-secondary-container text-on-secondary-container" : "text-on-surface-variant hover:bg-surface-container"
  }`;

/** Nav web du site : horizontale sur desktop, menu deroulant sur mobile. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-surface-variant bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
        <NavLink to="/" className="text-headline-md font-display text-forest" onClick={() => setOpen(false)}>
          Popi
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 items-center justify-center rounded-pill text-forest md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={28} />
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-surface-variant bg-surface px-margin-mobile py-4 md:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
