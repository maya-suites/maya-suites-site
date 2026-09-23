"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MayaEmblem } from "@/components/MayaEmblem";
import { NAV_LINKS, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Buttons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        overHero ? "bg-transparent py-5" : "bg-cream/90 py-3 shadow-sm shadow-indigo/5 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Maya Suites — Accueil">
          <MayaEmblem className="h-10 w-10" variant={overHero ? "reversed" : "primary"} />
          <span
            className={`text-lg leading-none font-bold tracking-tight ${overHero ? "text-cream" : "text-indigo"}`}
          >
            Maya
            <br />
            Suites
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-gold"
                  : overHero
                    ? "text-cream/90 hover:text-gold-light"
                    : "text-ink/80 hover:text-indigo"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-indigo shadow-md shadow-gold/25 transition-all duration-300 hover:scale-[1.04] hover:bg-gold-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Confier mon appartement
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 rounded transition-all duration-300 ${overHero ? "bg-cream" : "bg-indigo"} ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded transition-all duration-300 ${overHero ? "bg-cream" : "bg-indigo"} ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded transition-all duration-300 ${overHero ? "bg-cream" : "bg-indigo"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-[480px]" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 bg-cream px-6 pt-4 pb-8" aria-label="Navigation mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-indigo/10 py-3.5 font-display text-2xl font-semibold ${
                pathname.startsWith(l.href) ? "text-gold" : "text-indigo"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-indigo"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Confier mon appartement
          </a>
        </nav>
      </div>
    </header>
  );
}
