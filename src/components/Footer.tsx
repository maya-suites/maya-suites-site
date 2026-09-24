import Link from "next/link";
import { MayaEmblem } from "@/components/MayaEmblem";
import { Lattice } from "@/components/Lattice";
import { NAV_LINKS, NEIGHBORHOODS, SITE, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-indigo text-cream">
      <Lattice color="#dfa600" opacity={0.06} />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <MayaEmblem className="h-12 w-12" variant="reversed" />
              <span className="text-xl font-bold tracking-tight">
                Maya
                <br />
                Suites
              </span>
            </div>
            <p className="mt-5 max-w-xs font-display text-xl leading-snug text-gold-light italic">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Conciergerie Airbnb à Casablanca. Nous gérons votre appartement comme s&apos;il était le
              nôtre — et vos voyageurs comme s&apos;ils étaient chez eux.
            </p>
          </div>

          <nav aria-label="Pied de page — pages">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Explorer</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/80 transition-colors hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Nos quartiers</p>
            <ul className="mt-4 space-y-2.5">
              {NEIGHBORHOODS.map((n) => (
                <li key={n.slug} className="text-sm text-cream/80">
                  {n.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>
                <a
                  href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  WhatsApp — réponse en moins d&apos;une heure
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold-light">
                  {SITE.email}
                </a>
              </li>
              <li>Casablanca, Maroc</li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-cream/50">
              Conciergerie Airbnb Casablanca · Gestion locative courte durée · Gauthier, Racine,
              Maârif, Aïn Diab, Marina, Bourgogne, CFC
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-7 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Maya Suites — Tous droits réservés
          </p>
          <p>
            Conciergerie établie à Casablanca depuis {SITE.foundedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
