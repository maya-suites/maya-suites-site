"use client";

import Script from "next/script";
import { useEffect } from "react";

type UmamiTrack = (event: string, data?: Record<string, string>) => void;

const WEBSITE_ID = "3553c869-d621-4998-8876-9967be1ebc9c";
const SOURCE_KEY = "maya-source";

const KNOWN_HOSTS: [RegExp, string][] = [
  [/(^|\.)instagram\.com$/, "instagram"],
  [/(^|\.)(facebook|fb|messenger)\.com$/, "facebook"],
  [/(^|\.)google\.[a-z.]+$/, "google"],
  [/(^|\.)(linkedin\.com|lnkd\.in)$/, "linkedin"],
  [/(^|\.)(t\.co|twitter\.com|x\.com)$/, "x"],
  [/(^|\.)tiktok\.com$/, "tiktok"],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, "whatsapp"],
];

function detectSource() {
  const utm = new URLSearchParams(window.location.search).get("utm_source");
  if (utm) return utm.toLowerCase();
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    if (host && host !== window.location.hostname.replace(/^www\./, "")) {
      return KNOWN_HOSTS.find(([re]) => re.test(host))?.[1] ?? host;
    }
  } catch {}
  const ua = navigator.userAgent;
  if (/Instagram/i.test(ua)) return "instagram";
  if (/FBAN|FBAV/i.test(ua)) return "facebook";
  return "direct";
}

function getSource() {
  try {
    const stored = sessionStorage.getItem(SOURCE_KEY);
    if (stored) return stored;
    const source = detectSource();
    sessionStorage.setItem(SOURCE_KEY, source);
    return source;
  } catch {
    return detectSource();
  }
}

export function Analytics() {
  useEffect(() => {
    getSource();
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;
      const umami = (window as unknown as { umami?: { track: UmamiTrack } }).umami;
      umami?.track("WhatsApp Click", { source: getSource(), page: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
