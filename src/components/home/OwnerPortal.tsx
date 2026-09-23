import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ZoomableImage } from "@/components/ZoomableImage";

const features = [
  {
    title: "Vos revenus, en direct",
    desc: "Chiffre d'affaires, commission, taux d'occupation, prix moyen par nuit : vos statistiques mises à jour chaque mois, appartement par appartement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Chaque intervention tracée",
    desc: "Toutes les interventions de maintenance réalisées sur votre bien, avec photos et dates, sans que vous ayez à vous en soucier.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M14.5 6.5a4 4 0 0 0-5.3 5L4 16.7V20h3.3l5.2-5.2a4 4 0 0 0 5-5.3l-2.7 2.7-2.5-.7-.7-2.5 2.9-2.5Z" />
      </svg>
    ),
  },
  {
    title: "Factures centralisées",
    desc: "Retrouvez toutes vos factures à tout moment, en un clic, sans jamais avoir à les redemander.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M7 3h10v18l-2.5-1.5L12 21l-2.5-1.5L7 21V3Z" />
        <path d="M9.5 8h5" />
        <path d="M9.5 12h5" />
      </svg>
    ),
  },
];

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-indigo/10 bg-cream shadow-xl shadow-indigo/10">
      <div className="flex items-center gap-1.5 border-b border-indigo/10 bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-stone/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-stone/25" />
      </div>
      {children}
    </div>
  );
}

export function OwnerPortal() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Espace propriétaire"
          title={
            <>
              Vos chiffres, <em className="italic text-gold">sans avoir à demander</em>
            </>
          }
          description="Chaque propriétaire dispose d'un espace personnel et sécurisé pour suivre ses revenus, l'entretien de son bien et ses factures. Aucune surprise, aucun appel nécessaire : tout est à jour, en permanence."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <BrowserFrame>
            <ZoomableImage
              src="/espace-proprietaire/overview-top.png"
              alt="Aperçu de l'espace propriétaire Maya Suites : revenus et statistiques d'un appartement"
              width={1913}
              height={813}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full"
            />
          </BrowserFrame>
          <p className="mt-4 text-center text-xs text-stone">
            Capture d&apos;écran réelle de l&apos;espace propriétaire — cliquez pour l&apos;agrandir (nom du client modifié pour préserver sa confidentialité).
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo text-gold">
                  {f.icon}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-indigo">{f.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
