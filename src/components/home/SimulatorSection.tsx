import type { ReactNode } from "react";
import { Simulator } from "@/components/Simulator";
import { STATS } from "@/lib/site";

export function SimulatorSection({
  title = <>Combien peut rapporter votre appartement à Casablanca&nbsp;?</>,
  sheet = false,
}: {
  title?: ReactNode;
  sheet?: boolean;
}) {
  return (
    <section id="simulateur" className={`ms-band scroll-mt-16 ${sheet ? "bg-sheet" : ""}`}>
      <div className="ms-wrap">
        <p className="ms-label">Estimation</p>
        <h2 className="ms-h2">{title}</h2>
        <p className="ms-text">
          Quartier, standing, nombre de chambres&nbsp;: une première estimation fondée sur les
          tarifs réels de nos {STATS.apartments} logements.
        </p>
        <div className="mt-2.5">
          <Simulator />
        </div>
      </div>
    </section>
  );
}
