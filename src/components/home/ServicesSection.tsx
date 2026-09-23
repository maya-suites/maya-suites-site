import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES, ServiceIcon } from "@/lib/services-data";

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-end justify-between gap-8 lg:flex-row">
          <SectionHeading
            eyebrow="Nos services"
            title={
              <>
                Une gestion Airbnb <em className="italic text-gold">de bout en bout</em>
          </>
            }
            description="De la première photo de votre annonce au dernier regard du ménage avant une arrivée : nous nous occupons de tout, avec le niveau d'exigence d'un hôtel."
          />
          <Reveal delay={150}>
            <Link
              href="/services"
              className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-indigo underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            >
              Découvrir tous nos services →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-indigo/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-indigo">
                  <ServiceIcon icon={s.icon} />
                </span>
                <h3 className="mt-6 font-display text-2xl leading-tight font-semibold text-indigo">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{s.short}</p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  En savoir plus →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
