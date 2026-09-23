import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export function Team() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="L'équipe Maya"
          title={
            <>
              Des visages, pas un <em className="italic text-gold">algorithme</em>
            </>
          }
          description="Derrière chaque séjour cinq étoiles, il y a une équipe qui connaît vos voyageurs par leur prénom, votre immeuble par son gardien, et votre appartement dans ses moindres recoins."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MediaPlaceholder
            className="aspect-[4/5]"
            label="L'équipe accueillant des voyageurs à la porte d'un appartement — sourires, remise de clés"
          />
          <MediaPlaceholder
            className="aspect-[4/5]"
            label="L'équipe ménage en action — préparation d'un lit avec linge hôtelier blanc"
          />
          <MediaPlaceholder
            className="aspect-[4/5]"
            label="Portrait des fondateurs / de l'équipe au complet dans un des appartements"
          />
        </div>

        <Reveal className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Réactifs, vraiment",
              desc: "Moins d'une heure pour vous répondre, quelques minutes pour vos voyageurs.",
            },
            {
              title: "Exigeants, toujours",
              desc: "Chaque appartement est contrôlé avant chaque arrivée. Sans exception.",
            },
            {
              title: "Transparents, par principe",
              desc: "Un reporting clair chaque mois : revenus, occupation, interventions.",
            },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl font-semibold text-indigo">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{v.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
