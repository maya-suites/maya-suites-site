import { Lattice } from "@/components/Lattice";
import { StarDiamond } from "@/components/MayaEmblem";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

/** Bandeau d'en-tête indigo des pages intérieures. */
export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-indigo pt-36 pb-20">
      <Lattice color="#dfa600" opacity={0.07} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="hero-up flex items-center gap-3" style={{ "--d": "50ms" } as React.CSSProperties}>
          <StarDiamond className="h-3 w-3 text-gold" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">{eyebrow}</p>
        </div>
        <h1
          className="hero-up mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-cream sm:text-6xl"
          style={{ "--d": "180ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {description && (
          <p
            className="hero-up mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ "--d": "320ms" } as React.CSSProperties}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
