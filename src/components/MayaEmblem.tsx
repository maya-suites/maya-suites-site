type Props = {
  className?: string;
  variant?: "primary" | "reversed" | "outline";
};

/**
 * Emblème Maya Suites — étoile 8 branches (carré + losange) et « M » serif,
 * reconstruit en SVG d'après le brandbook v1.0.
 */
export function MayaEmblem({ className = "h-10 w-10", variant = "primary" }: Props) {
  if (variant === "reversed") {
    return (
      <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
        <rect x="25" y="25" width="46" height="46" transform="rotate(45 48 48)" fill="none" stroke="#dfa600" strokeWidth="2.5" />
        <rect x="28.5" y="28.5" width="39" height="39" transform="rotate(45 48 48)" fill="#dfa600" />
        <text x="48" y="50" textAnchor="middle" dominantBaseline="central" fill="#1b1560" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="34" fontWeight="700">
          M
        </text>
      </svg>
    );
  }

  if (variant === "outline") {
    return (
      <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
        <rect x="26" y="26" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="26" width="44" height="44" transform="rotate(45 48 48)" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <rect x="27" y="27" width="42" height="42" transform="rotate(45 48 48)" fill="none" stroke="#1b1560" strokeWidth="2.5" />
      <rect x="27" y="27" width="42" height="42" fill="#dfa600" />
      <rect x="30.5" y="30.5" width="35" height="35" fill="none" stroke="#1b1560" strokeWidth="1.2" opacity="0.35" />
      <text x="48" y="49" textAnchor="middle" dominantBaseline="central" fill="#1b1560" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="32" fontWeight="700">
        M
      </text>
    </svg>
  );
}

/** Petit losange décoratif — motif signature. */
export function StarDiamond({ className = "h-3 w-3", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Séparateur ◇ ◆ ◇ utilisé entre les sections. */
export function StarDivider({ className = "text-gold" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-40" />
      <StarDiamond className="h-2.5 w-2.5" filled={false} />
      <StarDiamond className="h-3.5 w-3.5" />
      <StarDiamond className="h-2.5 w-2.5" filled={false} />
      <span className="h-px w-12 bg-current opacity-40" />
    </div>
  );
}
