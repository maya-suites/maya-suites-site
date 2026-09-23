import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

// TODO : remplacer par 3 témoignages réels de propriétaires (prénom + quartier + texte).
const placeholders = [
  {
    quote:
      "[Témoignage propriétaire à venir — idéalement sur la tranquillité retrouvée : « je ne m'occupe plus de rien, je reçois mes revenus chaque mois »]",
    author: "[Prénom]",
    detail: "Propriétaire à [quartier]",
  },
  {
    quote:
      "[Témoignage propriétaire à venir — idéalement sur l'augmentation des revenus par rapport à une gestion en solo ou en longue durée]",
    author: "[Prénom]",
    detail: "Propriétaire à [quartier]",
  },
  {
    quote:
      "[Témoignage propriétaire à venir — idéalement sur la qualité du suivi et la confiance : reporting, entretien du bien, réactivité]",
    author: "[Prénom]",
    detail: "Propriétaire à [quartier]",
  },
];

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
        {placeholders.map((t, i) => (
          <Reveal key={i} delay={i * 120}>
            <figure className="flex h-full flex-col rounded-3xl border-2 border-dashed border-gold/40 bg-gold-light/10 p-8">
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
