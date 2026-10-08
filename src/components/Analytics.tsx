"use client";

import Script from "next/script";
import { useEffect } from "react";

type UmamiTrack = (event: string, data?: Record<string, string>) => void;

const WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;
      const umami = (window as unknown as { umami?: { track: UmamiTrack } }).umami;
      umami?.track("WhatsApp Click", { page: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!WEBSITE_ID) return null;

  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
