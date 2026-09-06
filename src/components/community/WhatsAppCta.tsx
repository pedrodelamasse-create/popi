import { Button } from "../ui/Button";
import { siteConfig } from "../../data/site.config";
import { trackEvent } from "../../lib/analytics";

interface WhatsAppCtaProps {
  emplacement: string;
  className?: string;
}

export function WhatsAppCta({ emplacement, className = "" }: WhatsAppCtaProps) {
  return (
    <Button
      as="a"
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      variant="accent"
      size="lg"
      icon="chat"
      onClick={() => trackEvent("Clic WhatsApp", { emplacement })}
      className={className}
    >
      Rejoins la communauté sur WhatsApp
    </Button>
  );
}
