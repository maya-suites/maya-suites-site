import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaWhatsApp } from "@/components/Buttons";

const steps = [
  {
    num: "01",
    title: "On échange",
    desc: "Un message WhatsApp, un appel de 15 minutes. Vous nous parlez de votre bien, nous vous donnons une première estimation de revenus.",
  },
  {
    num: "02",
    title: "On visite",
    desc: "Nous venons voir votre appartement, vérifions son potentiel et vous conseillons sur les petits détails qui font les grandes notes.",
  },
  {
    num: "03",
    title: "On sublime",
    desc: "Shooting photo professionnel, annonce rédigée avec soin, équipement aux standards Maya. Votre bien devient une suite.",
  },
  {
    num: "04",
    title: "Vous encaissez",
    desc: "Première réservation sous quelques jours. Vous suivez tout à distance et recevez vos revenus chaque mois. C'est tout.",
  },
];

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        align="center"
        eyebrow="Comment ça se passe"
        title={
          <>
            En ligne en <em className="italic text-gold">quelques jours</em>, pas en quelques
            mois
          </>
        }
      />

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 120}>
            <div className="relative">
              <p className="font-display text-7xl font-semibold text-gold-light/60">{step.num}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-indigo">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{step.desc}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-8 -right-7 hidden text-gold lg:block"
                >
                  →
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <CtaWhatsApp label="Lancer la conversation" />
      </Reveal>
    </section>
  );
}
