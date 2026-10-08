"use client";

import Script from "next/script";
import { useEffect } from "react";

type PlausibleFn = (event: string, options?: { props?: Record<string, string> }) => void;

export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;
      const plausible = (window as unknown as { plausible?: PlausibleFn }).plausible;
      plausible?.("WhatsApp Click", { props: { page: window.location.pathname } });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script
        defer
        data-domain="maya-suites.com"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };`}
      </Script>
    </>
  );
}
