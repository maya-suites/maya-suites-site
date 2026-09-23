import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const pains = [
  {
    title: "Les messages à 2h du matin",
    desc: "Voyageurs perdus, codes oubliés, questions incessantes — votre téléphone ne s'arrête jamais.",
  },
  {
    title: "Le calendrier en dents de scie",
    desc: "Des semaines vides, des prix au hasard, une annonce invisible parmi des milliers.",
  },
  {
    title: "La logistique qui déborde",
    desc: "Ménage à coordonner, linge à gérer, ampoule à changer — chaque réservation devient une corvée.",
  },
];

const solutions = [
  {
    title: "Une équipe disponible 24/7",
    desc: "Nous répondons à chaque voyageur en quelques minutes, jour et nuit. Vous ne recevez plus un seul message.",
  },
  {
    title: "Des revenus optimisés chaque jour",
    desc: "Tarification dynamique, annonces travaillées, 85 % d'occupation moyenne sur notre parc.",
  },
  {
    title: "Un bien entretenu comme une suite d'hôtel",
    desc: "Ménage professionnel, linge hôtelier, maintenance proactive. Votre appartement s'embellit au fil des séjours.",
  },
];

export function PainSolution() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Pourquoi une conciergerie"
        title={
          <>
            Louer seul, c&apos;est un métier.{" "}
            <em className="italic text-gold">Le nôtre.</em>
          </>
        }
        description="Vous avez investi dans un bel appartement. Nous, nous avons construit l'équipe, les outils et l'exigence pour qu'il donne le meilleur de lui-même."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-indigo/10 bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone">
              Gérer seul
            </p>
            <ul className="mt-6 space-y-6">
              {pains.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone/15 text-xs font-bold text-stone"
                  >
                    ✕
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative h-full overflow-hidden rounded-3xl bg-indigo p-8 text-cream sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Avec Maya Suites
            </p>
            <ul className="mt-6 space-y-6">
              {solutions.map((s) => (
                <li key={s.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-indigo"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-cream/70">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
