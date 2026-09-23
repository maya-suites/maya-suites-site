import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaWhatsApp } from "@/components/Buttons";
import { SERVICES, ServiceIcon } from "@/lib/services-data";
import { PHOTOS } from "@/lib/photos";
import { FinalCta } from "@/components/home/FinalCta";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Gestion Airbnb à Casablanca — Nos services de conciergerie",
  description:
    "Gestion Airbnb complète à Casablanca : annonces et tarification dynamique, accueil voyageurs 24/7, ménage et linge hôtelier, maintenance. Découvrez les services de la conciergerie Maya Suites.",
  alternates: { canonical: "/services" },
};

const servicePhotos = [PHOTOS[5], PHOTOS[1], null, PHOTOS[9]] as const;
const servicePlaceholders = [
  null,
  null,
  "L'équipe ménage préparant un lit — linge hôtelier blanc, geste précis",
  null,
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            La gestion Airbnb, <em className="italic text-gold">sans rien gérer</em>
          </>
        }
        description="Quatre métiers, une seule promesse : votre appartement performe, vos voyageurs reviennent, et vous ne vous occupez de rien."
      />

      <div className="mx-auto max-w-7xl space-y-24 px-5 py-24 sm:px-8">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="grid items-center gap-10 scroll-mt-28 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              {servicePhotos[i] ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={servicePhotos[i]!.src}
                    alt={servicePhotos[i]!.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ) : (
                <MediaPlaceholder className="aspect-[4/3]" label={servicePlaceholders[i]!} />
              )}
            </Reveal>
            <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo text-gold">
                <ServiceIcon icon={service.icon} />
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold text-indigo">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone">{service.short}</p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-light/50 text-[10px] font-bold text-indigo"
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}

        <Reveal className="text-center">
          <CtaWhatsApp label="Discuter de votre bien sur WhatsApp" />
        </Reveal>
      </div>

      <FinalCta />
    </>
  );
}
