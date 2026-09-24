// Modèle d'estimation de revenus — hypothèses internes Maya Suites.
// ADR (tarif moyen/nuit) estimé par quartier, standing du bien et atouts (vue/terrasse).
// Occupation moyenne 85 %. À affiner avec les données réelles des 40 appartements.

export const ESTIMATOR_NEIGHBORHOODS = [
  { id: "gauthier", label: "Gauthier", baseAdr: 420 },
  { id: "racine", label: "Racine", baseAdr: 400 },
  { id: "maarif", label: "Maârif", baseAdr: 360 },
  { id: "ain-diab", label: "Aïn Diab", baseAdr: 510 },
  { id: "marina", label: "Marina", baseAdr: 480 },
  { id: "bourgogne", label: "Bourgogne", baseAdr: 340 },
  { id: "cfc", label: "CFC", baseAdr: 430 },
] as const;

export const STANDING_OPTIONS = [
  {
    id: "moyen",
    label: "Moyen standing",
    hint: "Confortable et fonctionnel : mobilier simple, pas de décoration particulière, équipements de base.",
    multiplier: 0.78,
  },
  {
    id: "haut",
    label: "Haut standing",
    hint: "Décoration soignée, matériaux de qualité, cuisine équipée récente, literie hôtelière.",
    multiplier: 1,
  },
  {
    id: "luxe",
    label: "Luxe",
    hint: "Style hôtelier : architecte/décorateur, finitions haut de gamme, équipements premium.",
    multiplier: 1.32,
  },
] as const;

export type Standing = (typeof STANDING_OPTIONS)[number]["id"];

export type EstimateInput = {
  neighborhoodId: (typeof ESTIMATOR_NEIGHBORHOODS)[number]["id"];
  standing: Standing;
  bedrooms: number; // 0 = studio
  hasView: boolean; // vue dégagée ou terrasse aménagée
};

export type Estimate = {
  monthlyLow: number;
  monthlyHigh: number;
  adr: number;
};

const OCCUPANCY = 0.85;
const NIGHTS_PER_MONTH = 30.4;
const VIEW_BONUS = 0.12;

export function estimateRevenue(input: EstimateInput): Estimate {
  const hood = ESTIMATOR_NEIGHBORHOODS.find((n) => n.id === input.neighborhoodId);
  if (!hood) throw new Error("Quartier inconnu");
  const standing = STANDING_OPTIONS.find((s) => s.id === input.standing);
  if (!standing) throw new Error("Standing inconnu");

  const bedroomBonus = input.bedrooms * 70;
  let adr = (hood.baseAdr + bedroomBonus) * standing.multiplier;
  if (input.hasView) adr *= 1 + VIEW_BONUS;
  adr = Math.round(adr);

  const monthly = adr * NIGHTS_PER_MONTH * OCCUPANCY;
  const round50 = (v: number) => Math.round(v / 50) * 50;

  return {
    adr,
    monthlyLow: round50(monthly * 0.85),
    monthlyHigh: round50(monthly * 1.15),
  };
}

export function formatMAD(value: number) {
  return new Intl.NumberFormat("fr-MA", { maximumFractionDigits: 0 })
    .format(value)
    .replace(/\u202f/g, " ");
}
