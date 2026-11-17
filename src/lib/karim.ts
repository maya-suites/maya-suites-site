// Cas réel de Karim, duplex une chambre à Gauthier.
// Chiffre d'affaires = prix moyen par nuit × taux d'occupation × 30,4 nuits.
// « Ce qu'il gagne » : seul = CA − 1 400 MAD de ménage et pressing ; avec Maya Suites = CA après notre commission.
const N = " ";

export type KarimRow = { label: string; before: string; after: string; up?: boolean };

export const KARIM_ROWS: KarimRow[] = [
  { label: "Taux d'occupation", before: `95${N}%`, after: `92${N}%` },
  { label: "Prix moyen par nuit", before: `450${N}MAD`, after: `620${N}MAD`, up: true },
  { label: "Chiffre d'affaires mensuel moyen", before: `12${N}996${N}MAD`, after: `17${N}340${N}MAD`, up: true },
  { label: "Femme de ménage et pressing", before: `1${N}400${N}MAD`, after: "plus à sa charge", up: true },
  { label: "Ce qu'il gagne, après notre commission", before: `11${N}596${N}MAD`, after: `13${N}595${N}MAD`, up: true },
  { label: "Le temps qu'il y passe", before: `15${N}h par mois`, after: "rien", up: true },
  { label: "Stress", before: "fort", after: `quel stress${N}?`, up: true },
];

