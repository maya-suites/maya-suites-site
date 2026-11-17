import { WhatsAppIcon } from "@/components/Buttons";
import { AIRBNB_PROFILE, PROOF_LINE, STATS, whatsappLink, WHATSAPP_ESTIMATE_MESSAGE } from "@/lib/site";

const inventory = [
  { item: "Linge de lit", status: "complet" },
  { item: "Serviettes", status: "complet" },
  { item: "Vaisselle", status: "complet" },
  { item: "Électroménager", status: "OK" },
  { item: "Consommables", status: "réassortis" },
];

export function HomeHero() {
  return (
    <section className="pt-[calc(4rem+clamp(44px,7vw,88px))] pb-[clamp(44px,7vw,88px)]">
      <div className="ms-wrap grid items-center gap-[clamp(32px,6vw,72px)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <h1 className="mb-[18px] font-mono text-[13px] leading-[1.3] font-medium tracking-[0.08em] text-indigo uppercase">
            Conciergerie Airbnb à Casablanca
          </h1>
          <p className="ms-display">
            Votre appartement à Casablanca rapporte plus, sans vous prendre une minute.
          </p>
          <p className="ms-lead">Tout reste consultable, quand vous voulez.</p>
          <p className="max-w-[62ch] text-muted">
            Annonce, voyageurs, ménage, maintenance : on gère votre location Airbnb. Vos revenus,
            inventaires, interventions et factures sont dans votre espace propriétaire.
          </p>
          <div className="mt-[26px] flex flex-wrap items-center gap-x-[22px] gap-y-3.5">
            <a
              href={whatsappLink(WHATSAPP_ESTIMATE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn ms-btn-wa"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Faire estimer mon appartement
            </a>
            <a href={AIRBNB_PROFILE} target="_blank" rel="noopener noreferrer" className="ms-textlink">
              Nos {STATS.reviews} avis sur Airbnb ↗
            </a>
          </div>
          <p className="ms-proof">{PROOF_LINE}</p>
        </div>

        <div>
          <p className="mb-2 font-mono text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            Exemple de rapport, tel qu&apos;il apparaît dans votre espace
          </p>
          <div className="border border-ink bg-paper px-[18px] py-4 font-mono text-[13px] leading-[1.7]">
            <div className="mb-2.5 flex justify-between gap-3 border-b border-dashed border-[#8d887d] pb-2.5">
              <span className="font-medium">RAPPORT D&apos;INVENTAIRE</span>
              <span>14/11 · 11:40</span>
            </div>
            <div>Duplex · Gauthier · après ménage</div>
            {inventory.map((row) => (
              <div key={row.item} className="flex items-baseline gap-2">
                <span>{row.item}</span>
                <span className="flex-1 -translate-y-1 border-b border-dotted border-[#a7a196]" aria-hidden="true" />
                <span className="whitespace-nowrap text-ok">✓ {row.status}</span>
              </div>
            ))}
            <div className="mt-2.5 border-t border-dashed border-[#8d887d] pt-2.5 text-xs text-muted">
              Remarque : RAS · prochain voyageur le 15/11
            </div>
          </div>
          <div className="relative -mt-2.5 ml-7 border border-indigo bg-indigo px-[18px] py-4 font-mono text-[13px] leading-[1.7] text-white">
            <div className="font-display text-[34px] leading-none font-extrabold text-gold tabular-nums">
              {STATS.rating} ★
            </div>
            <div className="mt-1.5">{STATS.reviews} commentaires · Superhost</div>
            <div>
              {STATS.apartments} logements sur Airbnb ·{" "}
              <a href={AIRBNB_PROFILE} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-gold underline underline-offset-2">
                vérifier ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
