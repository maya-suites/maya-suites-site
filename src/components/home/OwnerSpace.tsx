import { ZoomableImage } from "@/components/ZoomableImage";

const features = [
  { title: "Revenus", desc: "Mois par mois, appartement par appartement." },
  { title: "Inventaires", desc: "Le rapport fait à la fin de chaque ménage." },
  { title: "Interventions", desc: "Chaque réparation, datée, prise en charge par nous." },
  { title: "Factures", desc: "Toutes au même endroit, à tout moment." },
];

export function OwnerSpace() {
  return (
    <section className="ms-band bg-sheet">
      <div className="ms-wrap grid items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="ms-label">Si vous voulez suivre</p>
          <h2 className="ms-h2">Tout est consultable, quand vous voulez</h2>
          <div className="mt-1.5 mb-5 grid gap-x-6 min-[521px]:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="border-t border-ink pt-3 pb-4">
                <p className="mb-1 font-display text-[17px] font-bold text-indigo">{f.title}</p>
                <p className="text-[14.5px] text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            <span className="mr-2 inline-block bg-gold-soft px-[7px] py-[3px] font-mono text-[11px] font-medium tracking-[0.06em] text-indigo uppercase">
              Bientôt
            </span>
            Le rapport du contrôle technique, fait tous les 15 jours.
          </p>
        </div>

        <figure>
          <div className="border border-ink bg-paper">
            <ZoomableImage
              src="/espace-proprietaire/vue-ensemble.png"
              alt="Capture de l'espace propriétaire Maya Suites, vue d'ensemble d'août 2026 : revenu net, chiffre d'affaires brut, commission, taux d'occupation, prix moyen par nuit et interventions du mois."
              width={1125}
              height={682}
              sizes="(min-width: 768px) 600px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-2.5 font-mono text-xs leading-normal text-muted">
            Capture réelle de l&apos;espace propriétaire, vue d&apos;ensemble (nom du client modifié).
            La commission affichée inclut les frais de ménage.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
