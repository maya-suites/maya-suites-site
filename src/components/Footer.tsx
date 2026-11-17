import Link from "next/link";
import { MayaEmblem } from "@/components/MayaEmblem";
import { NAV_LINKS, NEIGHBORHOODS, SITE, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

const linkCls = "hover:text-indigo hover:underline decoration-gold decoration-2 underline-offset-4";

export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper font-mono text-[13px] leading-[1.8] text-muted">
      <div className="ms-wrap py-12">
        <div className="grid gap-9 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="Maya Suites, accueil">
              <MayaEmblem className="h-9 w-9" />
              <span className="font-display text-[15px] leading-none font-extrabold tracking-[0.08em] text-indigo">
                MAYA SUITES
              </span>
            </Link>
            <p className="mt-4 max-w-xs">
              <Link href="/" className="font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-indigo">
                Conciergerie Airbnb à Casablanca
              </Link>
              . On gère votre location courte durée de l&apos;annonce à la maintenance, et vous suivez
              tout depuis votre espace propriétaire.
            </p>
          </div>

          <nav aria-label="Pied de page, pages">
            <p className="font-medium text-ink">Pages</p>
            <ul className="mt-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-medium text-ink">Quartiers</p>
            <ul className="mt-2">
              {NEIGHBORHOODS.map((n) => (
                <li key={n.slug}>{n.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-ink">Contact</p>
            <ul className="mt-2">
              <li>
                <a href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp +212 769 01 98 85
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={linkCls}>
                  {SITE.email}
                </a>
              </li>
              <li>
                {SITE.streetAddress}, {SITE.postalCode} Casablanca, Maroc
              </li>
              <li>
                <a href={SITE.googleProfile} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Notre fiche Google ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Maya Suites. Tous droits réservés.</p>
          <p>Conciergerie établie à Casablanca depuis {SITE.foundedYear}</p>
        </div>
      </div>
    </footer>
  );
}
