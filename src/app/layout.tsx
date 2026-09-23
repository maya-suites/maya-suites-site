import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE, STATS } from "@/lib/site";
import { guestReviews } from "@/lib/reviews";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Maya Suites — Conciergerie Airbnb à Casablanca",
    template: "%s | Maya Suites",
  },
  description:
    "Conciergerie Airbnb à Casablanca : gestion complète de votre location courte durée. 40+ appartements, 4,83★ sur 1 598 avis, 85 % d'occupation moyenne. Estimez vos revenus.",
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
  description:
    "Conciergerie Airbnb à Casablanca — gestion complète de locations courte durée pour propriétaires.",
  url: SITE.url,
  telephone: `+${SITE.whatsappNumber}`,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image`,
  areaServed: { "@type": "City", name: "Casablanca" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.83",
    bestRating: "5",
    reviewCount: "1598",
  },
  review: guestReviews.slice(0, 4).map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.comment,
  })),
  foundingDate: String(SITE.foundedYear),
  priceRange: `${STATS.commission} de commission`,
  knowsLanguage: ["fr", "en", "ar"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
