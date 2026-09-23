export type Service = {
  slug: string;
  title: string;
  short: string;
  points: string[];
  icon: "listing" | "welcome" | "clean" | "wrench";
};

export const SERVICES: Service[] = [
  {
    slug: "gestion-annonces",
    title: "Gestion complète des annonces",
    short:
      "Annonces irrésistibles sur Airbnb & Booking, tarification dynamique ajustée chaque jour pour maximiser vos revenus.",
    points: [
      "Création et optimisation de vos annonces (titres, descriptions, positionnement)",
      "Diffusion multi-plateformes : Airbnb, Booking.com et réservations directes",
      "Tarification dynamique quotidienne selon la saison, les événements et la demande",
      "Gestion du calendrier et synchronisation en temps réel",
    ],
    icon: "listing",
  },
  {
    slug: "accueil-voyageurs",
    title: "Check-in/out & accueil voyageurs",
    short:
      "Chaque voyageur est accueilli comme un invité de marque. Communication 24/7, arrivées fluides, attentions Maya.",
    points: [
      "Communication voyageurs 24/7, en français, anglais et arabe",
      "Check-in physique ou autonome selon le bien et le séjour",
      "Livret d'accueil et recommandations locales personnalisées",
      "Gestion des avis pour entretenir la note de votre annonce",
    ],
    icon: "welcome",
  },
  {
    slug: "menage-linge",
    title: "Ménage & linge hôtelier",
    short:
      "Un standard hôtelier entre chaque séjour : ménage professionnel, linge blanc impeccable, consommables réapprovisionnés.",
    points: [
      "Ménage professionnel complet entre chaque séjour",
      "Linge de lit et serviettes qualité hôtelière, fournis et entretenus",
      "Réapprovisionnement des essentiels (savon, café, thé, papier...)",
      "Contrôle qualité photo avant chaque arrivée",
    ],
    icon: "clean",
  },
  {
    slug: "maintenance",
    title: "Maintenance & interventions",
    short:
      "Fuite, serrure, climatisation : notre réseau d'artisans intervient vite, avant que le détail ne devienne un problème.",
    points: [
      "Interventions rapides via notre réseau d'artisans de confiance",
      "Gestion des urgences 24/7 pendant les séjours",
      "Suivi technique préventif de votre bien",
      "Compte-rendu transparent de chaque intervention",
    ],
    icon: "wrench",
  },
];

export function ServiceIcon({ icon, className = "h-7 w-7" }: { icon: Service["icon"]; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (icon) {
    case "listing":
      return (
        <svg {...common}>
          <path d="M4 20V9l8-6 8 6v11" />
          <path d="M9 20v-6h6v6" />
          <path d="M4 20h16" />
        </svg>
      );
    case "welcome":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.8-3.5 3.6-5.5 7-5.5s6.2 2 7 5.5" />
        </svg>
      );
    case "clean":
      return (
        <svg {...common}>
          <path d="M12 3v4" />
          <path d="M9 7h6l2 13H7L9 7Z" />
          <path d="M8 12h8" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.5 6.5a4 4 0 0 0-5.3 5L4 16.7V20h3.3l5.2-5.2a4 4 0 0 0 5-5.3l-2.7 2.7-2.5-.7-.7-2.5 2.9-2.5Z" />
        </svg>
      );
  }
}
