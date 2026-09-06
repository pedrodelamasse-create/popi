import { siteConfig } from "../data/site.config";

let loaded = false;

/**
 * Charge le script Plausible uniquement si un domaine est configure.
 * Pas de tracking par defaut avec un domaine factice.
 */
export function initAnalytics() {
  if (loaded || !siteConfig.plausibleDomain) return;
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = siteConfig.plausibleDomain;
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
  loaded = true;
}

/** Enregistre une pageview manuelle (utile pour les navigations SPA). */
export function trackPageview(path: string) {
  window.plausible?.("pageview", { props: { path } });
}

/** Enregistre un evenement nomme (clic WhatsApp, clic itineraire...). */
export function trackEvent(name: string, props?: Record<string, string>) {
  window.plausible?.(name, props ? { props } : undefined);
}
