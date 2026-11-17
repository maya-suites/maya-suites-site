import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Analytics } from "@/components/Analytics";
import { SITE } from "@/lib/site";
import { guestReviews, ownerTestimonials } from "@/lib/reviews";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Maya Suites — Conciergerie Airbnb à Casablanca",
    template: "%s | Maya Suites",
  },
  description:
    "Conciergerie Airbnb à Casablanca : gestion complète de votre location courte durée, de l'annonce à la maintenance. 4,83★ sur 1 758 commentaires Airbnb, 43 logements.",
  keywords: [
    "conciergerie airbnb casablanca",
    "gestion airbnb casablanca",
    "prix conciergerie airbnb casablanca",
    "gestion locative courte durée casablanca",
    "conciergerie casablanca",
  ],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "53UfioayRjtd4XG6ZBpir6S73V2fK_gtMQa75PYTcg0",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#organisation`,
  name: SITE.name,
  alternateName: "Maya Suites - Conciergerie Airbnb à Casablanca",
  description:
    "Conciergerie Airbnb à Casablanca — gestion complète de locations courte durée pour propriétaires.",
  url: SITE.url,
  sameAs: [SITE.googleProfile],
  hasMap: SITE.googleProfile,
  telephone: `+${SITE.whatsappNumber}`,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image`,
  areaServed: { "@type": "City", name: "Casablanca" },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.streetAddress,
    postalCode: SITE.postalCode,
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.83",
    bestRating: "5",
    reviewCount: "1758",
  },
  review: [
    ...guestReviews.slice(0, 4).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.comment,
    })),
    ...ownerTestimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: t.quote,
    })),
  ],
  foundingDate: String(SITE.foundedYear),
  knowsLanguage: ["fr", "en", "ar"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="ms-site flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
