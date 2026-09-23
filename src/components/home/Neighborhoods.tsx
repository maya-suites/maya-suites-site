import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StarDiamond } from "@/components/MayaEmblem";
import { NEIGHBORHOODS } from "@/lib/site";

export function Neighborhoods() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Casablanca, notre terrain de jeu"
          title={
            <>
              Les quartiers que nous connaissons{" "}
              <em className="italic text-gold">par cœur</em>
            </>
          }
          description="Notre conciergerie gère des appartements dans les quartiers les plus demandés de Casablanca. Nous savons ce que cherchent les voyageurs, rue par rue — et ce que peut rapporter votre bien, immeuble par immeuble."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOODS.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-3xl border border-indigo/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10">
                <div className="flex items-center gap-3">
                  <StarDiamond className="h-3 w-3 text-gold" />
                  <h3 className="font-display text-2xl font-semibold text-indigo">{n.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone">{n.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-stone">
            Votre bien est ailleurs à Casablanca ?{" "}
            <span className="font-medium text-indigo">Parlons-en quand même</span> — nous étudions
            chaque appartement au cas par cas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
