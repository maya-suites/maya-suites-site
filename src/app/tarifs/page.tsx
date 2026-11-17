import type { Metadata } from "next";
import { WhatsAppIcon } from "@/components/Buttons";
import type { FaqItem } from "@/components/Faq";
import { FaqGrid } from "@/components/FaqGrid";
import { ContactBand } from "@/components/home/ContactBand";
import { SimulatorSection } from "@/components/home/SimulatorSection";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { KARIM_ROWS } from "@/lib/karim";
import { PROOF_LINE, whatsappLink, WHATSAPP_PRICE_MESSAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tarifs de notre conciergerie Airbnb à Casablanca — Devis sur mesure",
  description:
    "Tarifs de notre conciergerie Airbnb à Casablanca : une commission sur vos revenus et des frais d'installation, sans engagement. Demandez votre tarif.",
  alternates: { canonical: "/tarifs" },
};

const N = " ";

const recapYouPay = [
  { item: "Commission", value: "sur les revenus" },
  { item: "Installation", value: "une fois, au départ" },
  { item: "Usure normale", value: "à votre charge" },
];

const recapGuestsPay = [
  { item: "Ménage", value: "✓" },
  { item: "Dégâts causés", value: "✓" },
];

const setup = [
  { title: "Grand ménage", desc: "De fond en comble, avant la première mise en location." },
  { title: "Inventaire", desc: "La liste de tout ce qui équipe l'appartement, qui sert de référence à chaque ménage." },
  { title: "Contrôle technique", desc: "Ce qui fonctionne, et ce qu'il faut réparer avant d'accueillir." },
  { title: "Literie hôtelière", desc: "Le linge de lit que les voyageurs retrouvent à chaque séjour." },
  { title: `500${N}MAD de consommables`, desc: "Le premier stock de papier toilette, café et produits d'accueil." },
  { title: "Un placard fermé à clé", desc: "Pour garder vos affaires personnelles dans l'appartement." },
  { title: "Shooting photo professionnel", desc: "Des photos prises par un professionnel, retouchées pour Airbnb." },
  { title: "Annonce Airbnb", desc: "Rédigée, optimisée et mise en ligne par nos soins." },
];

const ongoing = [
  { title: "Le prix de chaque nuit", desc: "Ajusté en permanence selon la demande." },
  { title: "Les voyageurs", desc: "Messages, arrivées, départs, remise des clés." },
  { title: "Le ménage et le linge", desc: "Organisés entre deux séjours, payés par les voyageurs." },
  { title: "L'inventaire", desc: "À la fin de chaque ménage, sur tablette." },
  { title: "Le contrôle technique", desc: `Tous les 15${N}jours.` },
  { title: "La maintenance", desc: "Prestataires trouvés, interventions organisées et suivies." },
  { title: "Les consommables", desc: "Réassortis en continu." },
  { title: "L'espace propriétaire", desc: "Revenus, interventions et factures, mois par mois." },
  { title: "Le versement", desc: "Chaque mois, au Maroc ou sur un compte à l'étranger." },
];

const TARIFS_FAQ: FaqItem[] = [
  {
    question: `Quel est le prix de votre conciergerie Airbnb à Casablanca${N}?`,
    answer:
      "Une commission sur les revenus locatifs de votre appartement, et des frais d'installation payés une fois, au démarrage. Le montant dépend de votre appartement. Écrivez-nous sur WhatsApp avec le quartier, le nombre de chambres et quelques photos, et on vous donne votre tarif.",
  },
  {
    question: `À quoi servent les frais d'installation${N}?`,
    answer: `À tout ce qui est fait avant le premier voyageur${N}: grand ménage, inventaire, contrôle technique, literie hôtelière, 500${N}MAD de consommables, placard fermé à clé, shooting photo professionnel, et création de l'annonce Airbnb. Ils ne sont payés qu'une fois.`,
  },
  {
    question: `Qui paie le ménage${N}?`,
    answer: "Les voyageurs. Les frais de ménage ne sont pas à votre charge.",
  },
  {
    question: `Qui paie les réparations${N}?`,
    answer:
      "Un dégât causé par un voyageur est à sa charge. L'usure normale (une ampoule, un joint, un appareil qui fatigue) reste à la charge du propriétaire. Dans les deux cas, on trouve le prestataire et on suit l'intervention.",
  },
  {
    question: `Y a-t-il un engagement de durée${N}?`,
    answer: "Non. Vous pouvez arrêter quand vous voulez.",
  },
  {
    question: `Quand suis-je payé${N}?`,
    answer:
      "Chaque mois, au Maroc ou sur un compte à l'étranger. Le détail du mois (chiffre d'affaires, commission, revenu net) est dans votre espace propriétaire.",
  },
  {
    question: `Pourquoi êtes-vous plus chers que d'autres conciergeries${N}?`,
    answer: `Parce que notre commission paie un prix par nuit ajusté en permanence, un inventaire après chaque ménage et un contrôle technique tous les 15${N}jours. Karim, à Gauthier, garde environ 600${N}MAD de plus par mois qu'avant, après notre commission, et il ne s'occupe plus de rien.`,
  },
  {
    question: `Comment obtenir mon tarif${N}?`,
    answer:
      "Écrivez-nous sur WhatsApp avec le quartier, le nombre de chambres et quelques photos. Idriss vous répond avec le tarif de votre appartement, et vous dit franchement s'il est prêt à être loué.",
  },
];

function ItemGrid({ items, cols }: { items: { title: string; desc: string }[]; cols: string }) {
  return (
    <div className={`mt-2 grid gap-x-6 ${cols}`}>
      {items.map((it) => (
        <div key={it.title} className="border-t border-ink pt-3 pb-5">
          <h3 className="mb-1 font-display text-[17px] font-bold text-indigo">{it.title}</h3>
          <p className="text-[14.5px] text-muted">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

function RecapRow({ item, value }: { item: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span>{item}</span>
      <span className="flex-1 -translate-y-1 border-b border-dotted border-[#a7a196]" aria-hidden="true" />
      <span className="whitespace-nowrap text-indigo">{value}</span>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", path: "/" },
              { name: "Tarifs", path: "/tarifs" },
            ])
          ),
        }}
      />

      {/* En-tête */}
      <section className="pt-[calc(4rem+clamp(44px,7vw,88px))] pb-[clamp(44px,7vw,88px)]">
        <div className="ms-wrap grid items-center gap-[clamp(32px,6vw,72px)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <h1 className="mb-[18px] font-mono text-[13px] leading-[1.3] font-medium tracking-[0.08em] text-indigo uppercase">
              Tarifs de notre conciergerie Airbnb à Casablanca
            </h1>
            <p className="ms-display">Ce que vous payez, et ce que ça vous rapporte.</p>
            <p className="ms-lead">
              Une commission sur vos revenus et des frais d&apos;installation. Sans engagement.
            </p>
            <p className="max-w-[62ch] text-muted">
              Le ménage est payé par les voyageurs. Le montant exact dépend de votre appartement&nbsp;:
              on vous le donne sur WhatsApp.
            </p>
            <div className="mt-[26px] flex flex-wrap items-center gap-x-[22px] gap-y-3.5">
              <a
                href={whatsappLink(WHATSAPP_PRICE_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn ms-btn-wa"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Demander mon tarif
              </a>
              <a href="#simulateur" className="ms-textlink">
                Estimer mes revenus ↓
              </a>
            </div>
            <p className="ms-proof">{PROOF_LINE}</p>
          </div>

          <div className="border border-ink bg-paper px-[18px] py-4 font-mono text-[13px] leading-[1.7]">
            <div className="mb-2.5 flex justify-between gap-3 border-b border-dashed border-[#8d887d] pb-2.5">
              <span className="font-medium">RÉCAPITULATIF</span>
              <span>Maya Suites</span>
            </div>
            <p className="text-muted">Vous payez</p>
            {recapYouPay.map((r) => (
              <RecapRow key={r.item} {...r} />
            ))}
            <p className="mt-3 text-muted">Les voyageurs paient</p>
            {recapGuestsPay.map((r) => (
              <RecapRow key={r.item} {...r} />
            ))}
            <div className="mt-2.5 border-t border-dashed border-[#8d887d] pt-2.5 text-xs text-muted">
              Engagement&nbsp;: aucun · versement chaque mois
            </div>
          </div>
        </div>
      </section>

      {/* Frais d'installation */}
      <section className="ms-band bg-sheet">
        <div className="ms-wrap">
          <p className="ms-label">Frais d&apos;installation</p>
          <h2 className="ms-h2">Avant votre premier voyageur&nbsp;: ce que couvrent les frais d&apos;installation</h2>
          <p className="ms-text">Payés une seule fois, au démarrage.</p>
          <ItemGrid items={setup} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* Commission */}
      <section className="ms-band">
        <div className="ms-wrap">
          <p className="ms-label">Commission</p>
          <h2 className="ms-h2">Chaque mois&nbsp;: ce que couvre notre commission</h2>
          <p className="ms-text">
            Elle est calculée sur les revenus locatifs de votre appartement. Si l&apos;appartement
            loue moins, vous payez moins.
          </p>
          <ItemGrid items={ongoing} cols="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      {/* Pourquoi ce prix */}
      <section className="ms-band ms-on-ink border-indigo bg-indigo text-indigo-ink">
        <div className="ms-wrap grid items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="ms-text">
            <p className="ms-label">Pourquoi ce prix</p>
            <h2 className="ms-h2">Pourquoi notre commission est au-dessus du marché</h2>
            <p>
              Notre commission est un peu au-dessus de ce qui se pratique à Casablanca, et nous
              facturons l&apos;installation. Ce supplément paie un prix par nuit travaillé en
              permanence et un appartement contrôlé après chaque séjour.
            </p>
            <p>
              <strong className="text-white">Sans engagement&nbsp;:</strong> vous partez quand vous
              voulez.
            </p>
            <p>
              Si le prix est votre seul critère, nous ne sommes sans doute pas faits pour
              travailler ensemble.
            </p>
            <div className="mt-[26px]">
              <a
                href={whatsappLink(WHATSAPP_PRICE_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn ms-btn-gold"
              >
                Demander notre tarif
              </a>
            </div>
          </div>

          <div className="border border-white/35 p-5">
            <p className="mb-3 font-mono text-xs font-medium tracking-[0.06em] text-gold uppercase">
              Cas réel · duplex une chambre à Gauthier
            </p>
            <table className="w-full border-collapse text-[15px] tabular-nums">
              <caption className="sr-only">
                Résultats de l&apos;appartement de Karim, géré seul puis avec Maya Suites
              </caption>
              <thead>
                <tr className="text-left font-mono text-[11px] tracking-[0.06em] text-indigo-ink/70 uppercase">
                  <th scope="col" className="pb-2">
                    <span className="sr-only">Indicateur</span>
                  </th>
                  <th scope="col" className="pb-2 pl-3 font-medium">Seul</th>
                  <th scope="col" className="pb-2 pl-3 font-medium">Avec nous</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20 border-t border-white/20">
                {KARIM_ROWS.map((r) => (
                  <tr key={r.label} className="align-top">
                    <th scope="row" className="py-2.5 text-left font-normal">
                      {r.label}
                    </th>
                    <td className="py-2.5 pl-3">{r.before}</td>
                    <td className={`py-2.5 pl-3 ${r.up ? "font-bold text-gold" : ""}`}>{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SimulatorSection sheet title={<>Estimez vos revenus avant de demander notre tarif</>} />

      {/* FAQ */}
      <section className="ms-band">
        <div className="ms-wrap">
          <p className="ms-label">Questions</p>
          <h2 className="ms-h2">Tarifs de conciergerie Airbnb à Casablanca&nbsp;: vos questions</h2>
          <FaqGrid items={TARIFS_FAQ} />
        </div>
      </section>

      <ContactBand />
    </>
  );
}
