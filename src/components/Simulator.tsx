"use client";

import { useId, useMemo, useState } from "react";
import {
  ESTIMATOR_NEIGHBORHOODS,
  OCCUPANCY,
  STANDING_OPTIONS,
  estimateRevenue,
  formatMAD,
  type EstimateInput,
} from "@/lib/estimator";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Buttons";

const fieldLabelBase = "mb-2 block font-mono text-[11px] font-medium tracking-[0.08em] uppercase";
const fieldLabel = `${fieldLabelBase} text-muted`;

function Segmented<T extends string | number>({
  labelId,
  options,
  value,
  onChange,
}: {
  labelId: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      role="group"
      aria-labelledby={labelId}
      className="grid auto-cols-fr grid-flow-col border border-ink"
    >
      {options.map((o, i) => (
        <button
          key={String(o.value)}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={`px-1.5 py-[11px] font-display text-sm font-semibold transition-colors ${
            i > 0 ? "border-l border-ink" : ""
          } ${value === o.value ? "bg-indigo text-white" : "bg-paper text-ink hover:bg-sheet"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Simulator() {
  const id = useId();
  const [neighborhoodId, setNeighborhoodId] =
    useState<EstimateInput["neighborhoodId"]>("gauthier");
  const [standing, setStanding] = useState<EstimateInput["standing"]>("haut");
  const [bedrooms, setBedrooms] = useState(1);
  const [hasView, setHasView] = useState(false);

  const estimate = useMemo(
    () => estimateRevenue({ neighborhoodId, standing, bedrooms, hasView }),
    [neighborhoodId, standing, bedrooms, hasView]
  );

  const hoodLabel = ESTIMATOR_NEIGHBORHOODS.find((n) => n.id === neighborhoodId)?.label ?? "";
  const standingOption = STANDING_OPTIONS.find((s) => s.id === standing);
  const occupancyPct = Math.round(OCCUPANCY * 100);

  const waMessage = `Bonjour Maya Suites ! J'ai un appartement ${bedrooms} chambre${
    bedrooms > 1 ? "s" : ""
  } (${standingOption?.label.toLowerCase()}${hasView ? ", avec vue ou terrasse" : ""}) à ${hoodLabel}. Votre simulateur l'estime entre ${formatMAD(
    estimate.monthlyLow
  )} et ${formatMAD(estimate.monthlyHigh)} MAD par mois. Pouvez-vous me faire une estimation précise ?`;

  return (
    <div className="grid border border-ink md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <form
        className="grid gap-5 bg-paper p-[clamp(20px,3vw,32px)]"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div>
          <label className={fieldLabel} htmlFor={`${id}-hood`}>
            Quartier
          </label>
          <div className="relative">
            <select
              id={`${id}-hood`}
              value={neighborhoodId}
              onChange={(e) => setNeighborhoodId(e.target.value as EstimateInput["neighborhoodId"])}
              className="w-full appearance-none rounded-none border border-ink bg-paper py-[11px] pr-10 pl-3 text-[15px] font-medium text-ink"
            >
              {ESTIMATOR_NEIGHBORHOODS.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.label}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 12 8"
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3.5 h-2 w-3 -translate-y-1/2"
            >
              <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
        </div>

        <div>
          <span className={fieldLabel} id={`${id}-standing`}>
            Standing
          </span>
          <Segmented
            labelId={`${id}-standing`}
            options={STANDING_OPTIONS.map((s) => ({ value: s.id, label: s.short }))}
            value={standing}
            onChange={setStanding}
          />
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{standingOption?.hint}</p>
        </div>

        <div>
          <span className={fieldLabel} id={`${id}-bed`}>
            Chambres
          </span>
          <Segmented
            labelId={`${id}-bed`}
            options={[1, 2, 3, 4].map((b) => ({ value: b, label: String(b) }))}
            value={bedrooms}
            onChange={setBedrooms}
          />
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 text-[15px]">
          <input
            type="checkbox"
            checked={hasView}
            onChange={(e) => setHasView(e.target.checked)}
            className="h-[18px] w-[18px] accent-indigo"
          />
          Belle vue dégagée ou terrasse aménagée
        </label>
      </form>

      <div
        className="flex flex-col justify-center bg-indigo p-[clamp(20px,3vw,32px)] text-indigo-ink"
        aria-live="polite"
      >
        <span className={`${fieldLabelBase} text-gold`}>Chiffre d&apos;affaires estimé</span>
        <p className="mt-2.5 mb-1.5 font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.05] font-extrabold text-gold tabular-nums">
          {formatMAD(estimate.monthlyLow)} – {formatMAD(estimate.monthlyHigh)}
        </p>
        <span className="font-mono text-[13px] font-medium">MAD par mois</span>
        <p className="mt-3 text-sm">
          Sur la base d&apos;un prix moyen de {formatMAD(estimate.adr)} MAD la nuit et de{" "}
          {occupancyPct}&nbsp;% d&apos;occupation.
        </p>
        <div>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn ms-btn-gold mt-3"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Recevoir une estimation précise
          </a>
        </div>
      </div>
    </div>
  );
}
