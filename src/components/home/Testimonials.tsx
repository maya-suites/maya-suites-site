import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

// Avis Google Maps réels, retranscrits depuis la fiche Google de Maya Suites.
const testimonials = [
  {
    quote:
      "J'ai confié mon appartement à l'équipe Maya Suites, l'appartement a toujours été nickel, des garçons sérieux et minutieux. Merci",
    author: "Mohamed",
    detail: "Propriétaire à Aïn Diab",
  },
  {
    quote:
      "Une équipe professionnelle qui fait bien son travail je suis très satisfaite je leur souhaite beaucoup de succès merci maya suites",
    author: "Karima",
    detail: "Propriétaire à Aïn Diab",
  },
  {
    quote:
      "Cela fait plusieurs années maintenant que je confie mes appartements à Maya Suites et je suis vraiment ravie de cette collaboration. Au fil du temps, une vraie relation de confiance s'est installée. Je sais que je peux compter sur eux, qu'ils sont réactifs et que mes appartements sont entre de bonnes mains. Merci à toute l'équipe !",
    author: "Véronique",
    detail: "Propriétaire à Maârif",
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
        {testimonials.map((t, i) => (
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
