import { Icon } from "./Icon";

interface StatCardProps {
  icon: string;
  label: string;
  value: string;
}

/** Une tuile icône + libellé + valeur : triptyque Santé / Planète / Équité, bandeau Préparation / Cuisson / Portions. */
export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-lowest p-4 text-center shadow-inset-card">
      <Icon name={icon} size={24} className="text-secondary" />
      <span className="text-label-sm uppercase text-on-surface-variant">{label}</span>
      <span className="text-headline-md font-display text-forest">{value}</span>
    </div>
  );
}
