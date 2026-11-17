import Link from "next/link";
import { whatsappLink, WHATSAPP_PRICE_MESSAGE } from "@/lib/site";

const setup = [
  "Grand ménage, inventaire et contrôle technique",
  "Literie hôtelière et 500 MAD de consommables",
  "Un placard fermé à clé pour vos affaires",
  "Shooting photo professionnel, retouché pour Airbnb",
  "Annonce rédigée, optimisée et mise en ligne",
];

const ongoing = [
  "Inventaire après chaque ménage",
  "Contrôle technique tous les 15 jours",
  "Maintenance et prestataires gérés",
  "Consommables réassortis",
];

const colTitle = "mb-2.5 font-display text-[17px] font-bold text-gold";
const col = "border-t border-white/35 pt-4 pb-[22px]";

export function PriceBand() {
  return (
    <section id="tarifs" className="ms-band ms-on-ink scroll-mt-16 border-indigo bg-indigo text-indigo-ink">
      <div className="ms-wrap">
        <p className="ms-label">Tarifs</p>
        <h2 className="ms-h2">Nous ne sommes pas les moins chers. C&apos;est assumé.</h2>
        <p className="ms-text">
          Notre commission est un peu au-dessus du marché, et nous facturons l&apos;installation.
          Voici ce que ça paie.
        </p>

        <div className="my-7 grid gap-x-8 md:grid-cols-3">
          <div className={col}>
            <h3 className={colTitle}>Avant votre premier voyageur</h3>
            <ul className="list-disc space-y-1.5 pl-[18px] text-[15px]">
              {setup.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className={col}>
            <h3 className={colTitle}>Ensuite, en continu</h3>
            <ul className="list-disc space-y-1.5 pl-[18px] text-[15px]">
              {ongoing.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className={`${col} space-y-3.5 text-[15px]`}>
            <h3 className={colTitle}>Le résultat</h3>
            <p>
              Karim gérait seul son appartement à Gauthier. Après notre commission, il garde
              environ 2&nbsp;000&nbsp;MAD de plus par mois qu&apos;avant, ménage et pressing compris, et il ne
              s&apos;en occupe plus.
            </p>
            <p>
              <strong className="text-white">Sans engagement :</strong> vous partez quand vous
              voulez.
            </p>
          </div>
        </div>

        <p className="ms-text">
          Si le prix est votre seul critère, nous ne sommes sans doute pas faits pour travailler
          ensemble.
        </p>
        <div className="mt-[26px] flex flex-wrap items-center gap-x-[22px] gap-y-3.5">
          <a
            href={whatsappLink(WHATSAPP_PRICE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn ms-btn-gold"
          >
            Demander notre tarif
          </a>
          <Link href="/tarifs" className="ms-textlink text-white">
            Le détail de nos tarifs →
          </Link>
        </div>
      </div>
    </section>
  );
}
