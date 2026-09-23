/**
 * Motif lattice — diagonales croisées de l'étoile Maya, en fond à faible opacité.
 * À poser en absolu dans un conteneur `relative overflow-hidden`.
 */
export function Lattice({
  className = "",
  color = "#dfa600",
  opacity = 0.07,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" style={{ opacity }}>
      <defs>
        <pattern id="maya-lattice" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M0 28 L28 0 L56 28 L28 56 Z" fill="none" stroke={color} strokeWidth="1" />
          <rect x="14" y="14" width="28" height="28" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#maya-lattice)" />
    </svg>
  );
}
