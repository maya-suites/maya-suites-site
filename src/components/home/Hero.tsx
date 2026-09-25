import Image from "next/image";
import Link from "next/link";
import { HERO_PHOTO } from "@/lib/photos";
import { WhatsAppIcon } from "@/components/Buttons";
import { StarDiamond } from "@/components/MayaEmblem";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-indigo">
      {/* Photo plein écran */}
      <div className="absolute inset-0 slow-zoom">
        <Image
          src={HERO_PHOTO.src}
          alt={HERO_PHOTO.alt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Voile indigo */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo/90 via-indigo/60 to-indigo/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo/80 to-transparent" />

      {/* Étoile décorative */}
      <div className="pointer-events-none absolute -right-32 -top-32 hidden opacity-20 lg:block">
        <svg viewBox="0 0 400 400" className="h-[560px] w-[560px] star-spin text-gold" aria-hidden="true">
          <rect x="80" y="80" width="240" height="240" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="80" y="80" width="240" height="240" transform="rotate(45 200 200)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <div className="hero-up flex items-center gap-3" style={{ "--d": "100ms" } as React.CSSProperties}>
            <StarDiamond className="h-3 w-3 text-gold" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Conciergerie établie · 40+ appartements · Casablanca
            </p>
          </div>

          <h1
            className="hero-up mt-6 block font-display text-5xl leading-[1.05] font-semibold text-cream sm:text-6xl lg:text-7xl"
            style={{ "--d": "250ms" } as React.CSSProperties}
          >
            Votre conciergerie Airbnb de confiance à Casablanca
          </h1>
          <p
            className="hero-up mt-5 block text-base font-normal leading-relaxed text-cream/85 sm:text-lg"
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            Maya Suites est la conciergerie Airbnb de référence à Casablanca. Nous prenons soin de
            votre bien, de vos voyageurs et de vos revenus — vous, vous ne vous occupez de rien.
          </p>

          <div
            className="hero-up mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ "--d": "550ms" } as React.CSSProperties}
          >
            <a
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-indigo shadow-lg shadow-gold/30 transition-all duration-300 hover:scale-[1.03] hover:bg-gold-light"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Confier mon appartement
            </a>
            <Link
              href="#simulateur"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
            >
              Estimer mes revenus
            </Link>
          </div>

          <p
            className="hero-fade mt-8 flex items-center gap-2 text-sm text-cream/70"
            style={{ "--d": "900ms" } as React.CSSProperties}
          >
            <span className="text-gold" aria-hidden="true">★★★★★</span>
            4,83 / 5 sur 1 598 avis voyageurs
          </p>
        </div>
      </div>

      {/* Indice de scroll */}
      <div
        className="hero-fade absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60"
        style={{ "--d": "1400ms" } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Découvrir
          <span className="block h-8 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
