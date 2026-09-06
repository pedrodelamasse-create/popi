import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-margin-mobile py-24 text-center md:px-margin-desktop">
      <h1 className="text-headline-lg font-display text-forest">Page introuvable</h1>
      <p className="text-body-md text-on-surface-variant">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <Button as="link" to="/" variant="primary">
        Retour à l'accueil
      </Button>
    </div>
  );
}
