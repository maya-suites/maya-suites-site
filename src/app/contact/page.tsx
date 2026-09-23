import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaWhatsApp, WhatsAppIcon } from "@/components/Buttons";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre appartement",
  description:
    "Contactez Maya Suites, conciergerie Airbnb à Casablanca. Réponse en moins d'une heure sur WhatsApp. Estimation gratuite des revenus de votre bien.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    title: "Vous êtes propriétaire",
    desc: "Vous voulez estimer vos revenus, comprendre notre fonctionnement ou nous confier vos clés.",
    message:
      "Bonjour Maya Suites, je suis propriétaire d'un bien à Casablanca et j'aimerais échanger avec vous.",
    cta: "Parler à un expert",
  },
  {
    title: "Vous êtes voyageur",
    desc: "Une question sur votre séjour, une demande spéciale, une envie de revenir ?",
    message: "Bonjour Maya Suites, j'ai une question concernant un séjour.",
    cta: "Nous écrire",
  },
  {
    title: "Vous êtes partenaire",
    desc: "Agences, artisans, créateurs locaux : construisons quelque chose ensemble.",
    message: "Bonjour Maya Suites, je vous contacte pour un partenariat.",
    cta: "Proposer un partenariat",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Un message, et <em className="italic text-gold">tout commence</em>
          </>
        }
        description="Le plus simple ? WhatsApp. Nous répondons en moins d'une heure, 7 jours sur 7."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl border border-indigo/10 bg-white p-8">
                <h2 className="font-display text-3xl font-semibold text-indigo">{card.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{card.desc}</p>
                <a
                  href={whatsappLink(card.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {card.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl bg-indigo p-10 text-center text-cream">
          <p className="font-display text-2xl italic text-gold-light">Vous préférez l&apos;email ?</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 inline-block text-lg font-medium underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-light"
          >
            {SITE.email}
          </a>
          <p className="mt-6 text-sm text-cream/60">
            Maya Suites — Casablanca, Maroc · Gauthier, Racine, Maârif, Aïn Diab, Marina, Bourgogne
          </p>
          <div className="mt-8">
            <CtaWhatsApp label="Ou directement sur WhatsApp" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
