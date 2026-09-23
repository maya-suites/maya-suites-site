"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = { src: string; name: string; width: number; height: number };

export function ReviewProof({ src, name, width, height }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-indigo/60 transition-colors hover:text-indigo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
          <path d="M14.5 4h5v5" />
          <path d="M9.5 20h-5v-5" />
          <path d="M19.5 4 13 10.5" />
          <path d="M4.5 20 11 13.5" />
        </svg>
        Voir l&apos;avis original
      </button>

      {open &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-indigo/90 p-4 backdrop-blur-sm sm:p-10"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <Image
                src={src}
                alt={`Avis Airbnb original de ${name}, capture d'écran`}
                width={width}
                height={height}
                quality={100}
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              <p className="text-xs text-cream/70">Capture d&apos;écran réelle, telle que publiée sur Airbnb.</p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
