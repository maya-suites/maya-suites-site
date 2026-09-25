import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ownerTestimonials } from "@/lib/reviews";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        align="center"
        eyebrow="Ils nous font confiance"
        title={
          <>
            Des propriétaires <em className="italic text-gold">sereins</em>
          </>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {ownerTestimonials.map((t, i) => (
          <Reveal key={i} delay={i * 120}>
            <figure className="flex h-full flex-col rounded-3xl border border-indigo/10 bg-cream p-8 shadow-sm">
              <p aria-hidden="true" className="font-display text-6xl leading-none text-gold">
                &ldquo;
              </p>
              <blockquote className="mt-2 flex-1 font-display text-xl leading-relaxed text-indigo italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/20 pt-4">
                <p className="font-semibold text-ink">{t.author}</p>
                <p className="text-sm text-stone">{t.detail}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
