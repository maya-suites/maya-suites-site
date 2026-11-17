"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { MayaEmblem } from "@/components/MayaEmblem";
import { NAV_LINKS, whatsappLink, WHATSAPP_ESTIMATE_MESSAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Buttons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Ferme le menu quand on change de page.
  if (open && openedOn !== pathname) {
    setOpen(false);
    setOpenedOn(pathname);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink bg-paper">
      <div className="ms-wrap relative z-10 flex h-16 items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-2.5" aria-label="Maya Suites, accueil">
          <MayaEmblem className="h-8 w-8 sm:h-[38px] sm:w-[38px]" />
          <span className="font-display text-[14px] leading-none font-extrabold tracking-[0.06em] whitespace-nowrap text-indigo sm:text-[15px] sm:tracking-[0.08em]">
            MAYA SUITES
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
          {/* Navigation ordinateur */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-[13px] font-medium underline-offset-4 decoration-gold decoration-2 hover:text-indigo hover:underline ${
                    active ? "text-indigo underline" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={whatsappLink(WHATSAPP_ESTIMATE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn ms-btn-indigo px-3 py-2.5 text-[12px] whitespace-nowrap sm:px-3.5 sm:text-[13px]"
          >
            Faire estimer
          </a>

          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => {
              setOpenedOn(pathname);
              setOpen(!open);
            }}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-indigo transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-indigo transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-indigo transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-30 bg-paper transition-opacity duration-200 lg:hidden ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <nav
              className="ms-wrap flex h-full flex-col justify-center overflow-y-auto pt-20 pb-10"
              aria-label="Navigation mobile"
            >
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`border-b border-line py-4 font-display text-2xl font-extrabold tracking-tight ${
                    pathname.startsWith(l.href) ? "text-gold" : "text-indigo"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={whatsappLink(WHATSAPP_ESTIMATE_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn ms-btn-wa mt-8"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Faire estimer mon appartement
              </a>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  );
}
