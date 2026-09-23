import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Lattice } from "@/components/Lattice";
import { STATS } from "@/lib/site";

const included = [
  "Annonces & tarification dynamique",
  "Communication voyageurs 24/7",
  "Check-in / check-out",
  "Shooting photo professionnel",
  "Maintenance & urgences",
  "Reporting mensuel transparent",
];

export function PricingTeaser() {
  return (
    <section className="relative overflow-hidden bg-indigo py-24">
      <Lattice color="#dfa600" opacity={0.06} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Tarif transparent
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.1] font-semibold text-cream sm:text-5xl">
              Vous ne payez que{" "}
              <em className="italic text-gold">lorsque vous gagnez</em>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/75">
              Pas d&apos;abonnement, pas de frais cachés, pas de surprise. Notre rémunération est
              une commission sur vos revenus : si votre appartement ne rapporte pas, nous non
              plus. Voilà pourquoi nous nous battons pour chaque nuitée.
            </p>
            <Link
              href="/tarifs"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-indigo shadow-lg shadow-gold/20 transition-all duration-300 hover:scale-[1.03] hover:bg-gold-light"
            >
              Voir le détail des tarifs →
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-gold/30 bg-indigo-soft/60 p-8 backdrop-blur sm:p-10">
              <div className="flex items-end gap-3">
                <p className="font-display text-8xl leading-none font-bold text-gold">
                  {STATS.commission}
                </p>
                <p className="pb-2 text-sm leading-snug text-cream/80">
                  HT de commission
                  <br />
                  sur les revenus générés*
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-cream/85">
                    <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-indigo">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-cream/50">
                * Frais de ménage facturés aux voyageurs. Aucun coût fixe pour vous.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
