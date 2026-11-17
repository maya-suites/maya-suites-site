export const SITE = {
  name: "Maya Suites",
  tagline: "A place to belong, anywhere you stay.",
  url: "https://maya-suites.com",
  whatsappNumber: "212769019885",
  email: "contact@maya-suites.com", // TODO : confirmer l'adresse email
  city: "Casablanca",
  streetAddress: "64 Bd Abderrahim Bouabid",
  postalCode: "20300",
  googleProfile: "https://share.google/JIrqdCGhruokKjqwx",
  foundedYear: 2024,
} as const;

export const STATS = {
  apartments: "43",
  rating: "4,83",
  reviews: "1 758",
  travelers: "9 000+",
  occupancy: "plus de 80 %",
} as const;

export const PROOF_LINE = `${STATS.rating} ★ · ${STATS.reviews} commentaires · Superhost · ${STATS.apartments} logements · Sans engagement`;

export const NEIGHBORHOODS = [
  {
    slug: "gauthier",
    name: "Gauthier",
    desc: "Le cœur vibrant de Casablanca : cafés, bureaux, et les adresses les plus recherchées en location courte durée.",
  },
  {
    slug: "racine",
    name: "Racine",
    desc: "Élégant et résidentiel, à deux pas du boulevard d'Anfa. Très demandé par les voyageurs d'affaires.",
  },
  {
    slug: "maarif",
    name: "Maârif",
    desc: "Commerçant, central, authentique. Un taux d'occupation remarquable toute l'année.",
  },
  {
    slug: "ain-diab",
    name: "Aïn Diab",
    desc: "La corniche, l'océan, les rooftops. La destination loisir de la ville.",
  },
  {
    slug: "marina",
    name: "Marina",
    desc: "Vue mer, tours modernes, à côté de la Mosquée Hassan II. Prisé des séjours premium.",
  },
  {
    slug: "bourgogne",
    name: "Bourgogne",
    desc: "Entre centre-ville et océan, un quartier qui monte pour l'investissement locatif.",
  },
  {
    slug: "cfc",
    name: "CFC",
    desc: "Le quartier d'affaires nouvelle génération : tours modernes et clientèle business.",
  },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/appartements", label: "Appartements" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WHATSAPP_ESTIMATE_MESSAGE =
  "Bonjour Maya Suites, j'ai un appartement à Casablanca et j'aimerais le faire estimer.";

export const WHATSAPP_PRICE_MESSAGE =
  "Bonjour Maya Suites, j'aimerais connaître votre tarif pour mon appartement à Casablanca.";

export const AIRBNB_PROFILE = "https://www.airbnb.fr/p/mayasuites";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Bonjour Maya Suites, je suis propriétaire d'un bien à Casablanca et j'aimerais en savoir plus sur votre conciergerie.";
