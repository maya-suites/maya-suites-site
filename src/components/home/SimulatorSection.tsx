import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Simulator } from "@/components/Simulator";
import { Lattice } from "@/components/Lattice";

export function SimulatorSection() {
  return (
    <section id="simulateur" className="relative overflow-hidden bg-cream py-24 scroll-mt-20">
      <Lattice color="#1b1560" opacity={0.04} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Estimation gratuite"
          title={
            <>
              Découvrez le <em className="italic text-gold">vrai potentiel</em> de votre bien
            </>
          }
          description="Quelques réglages, quelques secondes, et une estimation fondée sur les performances réelles de nos 40 appartements à Casablanca."
        />
        <Reveal delay={200} className="mx-auto mt-12 max-w-4xl">
          <Simulator />
        </Reveal>
      </div>
    </section>
  );
}
