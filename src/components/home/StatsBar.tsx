import { Reveal } from "@/components/Reveal";
import { STATS } from "@/lib/site";

const items = [
  { value: STATS.apartments, label: "appartements gérés" },
  { value: `${STATS.rating}★`, label: `${STATS.reviews} avis voyageurs` },
  { value: STATS.travelers, label: "voyageurs accueillis" },
  { value: STATS.occupancy, label: "d'occupation moyenne" },
];

export function StatsBar() {
  return (
    <section className="bg-gold">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 100} className="text-center">
            <p className="font-display text-4xl font-bold text-indigo sm:text-5xl">{item.value}</p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.15em] text-indigo/70">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
