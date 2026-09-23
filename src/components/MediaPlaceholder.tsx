import { StarDiamond } from "@/components/MayaEmblem";

type Props = {
  label: string;
  type?: "photo" | "video";
  className?: string;
};

/**
 * Emplacement média en attente — indique précisément la photo/vidéo à fournir.
 * À remplacer par le vrai média dès qu'il est disponible.
 */
export function MediaPlaceholder({ label, type = "photo", className = "" }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-dashed border-gold/50 bg-gold-light/15 p-6 text-center ${className}`}
    >
      <StarDiamond className="h-5 w-5 text-gold" filled={false} />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {type === "video" ? "Vidéo à venir" : "Photo à venir"}
      </p>
      <p className="max-w-[26ch] text-sm leading-relaxed text-stone">{label}</p>
    </div>
  );
}
