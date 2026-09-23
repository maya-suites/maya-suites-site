"use client";

import { useMemo, useState } from "react";
import {
  ESTIMATOR_NEIGHBORHOODS,
  STANDING_OPTIONS,
  estimateRevenue,
  formatMAD,
  type EstimateInput,
} from "@/lib/estimator";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Buttons";
import { StarDiamond } from "@/components/MayaEmblem";

export function Simulator() {
  const [neighborhoodId, setNeighborhoodId] =
    useState<EstimateInput["neighborhoodId"]>("gauthier");
  const [standing, setStanding] = useState<EstimateInput["standing"]>("haut");
  const [bedrooms, setBedrooms] = useState(1);
  const [hasView, setHasView] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const estimate = useMemo(
    () => estimateRevenue({ neighborhoodId, standing, bedrooms, hasView }),
    [neighborhoodId, standing, bedrooms, hasView]
  );

  const hoodLabel =
    ESTIMATOR_NEIGHBORHOODS.find((n) => n.id === neighborhoodId)?.label ?? "";
  const standingOption = STANDING_OPTIONS.find((s) => s.id === standing);

  const waMessage = `Bonjour Maya Suites ! J'ai un ${
    bedrooms === 0 ? "studio" : `appartement ${bedrooms} chambre${bedrooms > 1 ? "s" : ""}`
  } (${standingOption?.label.toLowerCase()}${hasView ? ", avec vue/terrasse" : ""}) à ${hoodLabel}. Votre simulateur estime mes revenus entre ${formatMAD(
    estimate.monthlyLow
  )} et ${formatMAD(estimate.monthlyHigh)} MAD/mois. Je souhaite vous confier mon bien.`;

  const selectCls =
    "w-full rounded-xl border border-indigo/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-indigo/10">
      <div className="grid md:grid-cols-2">
        {/* Formulaire */}
        <div className="p-7 sm:p-10">
          <div className="flex items-center gap-2 text-gold">
            <StarDiamond className="h-3 w-3" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Simulateur de revenus
            </p>
          </div>
          <h3 className="mt-3 font-display text-3xl font-semibold text-indigo">
            Combien peut rapporter votre bien ?
          </h3>

          <div className="mt-7 space-y-5">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone">
                Quartier
              </span>
              <select
                value={neighborhoodId}
                onChange={(e) => {
                  setNeighborhoodId(e.target.value as EstimateInput["neighborhoodId"]);
                  setRevealed(true);
                }}
                className={selectCls}
              >
                {ESTIMATOR_NEIGHBORHOODS.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone">
                Standing du bien
              </span>
              <div className="grid grid-cols-3 gap-2">
                {STANDING_OPTIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setStanding(s.id);
                      setRevealed(true);
                    }}
                    className={`rounded-xl border px-2 py-2.5 text-center text-xs font-semibold leading-tight transition-all sm:text-sm ${
                      standing === s.id
                        ? "border-gold bg-gold text-indigo"
                        : "border-indigo/15 bg-white text-stone hover:border-gold/50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone">
                {standingOption?.hint}{" "}
                <span className="text-indigo/70">
                  La plupart des propriétaires surestiment le standing de leur bien — mieux vaut
                  être honnête pour une estimation fiable.
                </span>
              </p>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone">
                Chambres
              </span>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      setBedrooms(b);
                      setRevealed(true);
                    }}
                    className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold transition-all ${
                      bedrooms === b
                        ? "border-gold bg-gold text-indigo"
                        : "border-indigo/15 bg-white text-stone hover:border-gold/50"
                    }`}
                  >
                    {b === 0 ? "Studio" : b}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-indigo/15 bg-white px-4 py-3 transition-colors hover:border-gold/50">
              <input
                type="checkbox"
                checked={hasView}
                onChange={(e) => {
                  setHasView(e.target.checked);
                  setRevealed(true);
                }}
                className="h-5 w-5 shrink-0 accent-[#dfa600]"
              />
              <span className="text-sm text-ink">Belle vue dégagée ou terrasse aménagée</span>
            </label>
          </div>
        </div>

        {/* Résultat */}
        <div className="relative flex flex-col justify-center bg-indigo p-7 text-cream sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Revenus locatifs estimés
          </p>
          <p
            key={`${estimate.monthlyLow}-${estimate.monthlyHigh}`}
            className={`mt-4 font-display text-4xl font-semibold text-gold sm:text-5xl ${revealed ? "hero-up" : ""}`}
          >
            {formatMAD(estimate.monthlyLow)} — {formatMAD(estimate.monthlyHigh)}
            <span className="ml-2 text-2xl text-cream/80">MAD/mois</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Estimation brute basée sur un tarif moyen de {formatMAD(estimate.adr)} MAD/nuit et
            85&nbsp;% d&apos;occupation — la moyenne constatée sur nos 40 appartements.
          </p>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.03]"
          >
            <WhatsAppIcon />
            Confier mon bien
          </a>
          <p className="mt-3 text-center text-xs text-cream/50">
            Sans engagement — réponse en moins d&apos;une heure
          </p>
        </div>
      </div>
    </div>
  );
}
