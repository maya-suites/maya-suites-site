import { SITE, STATS } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();

  const body = `# Maya Suites

> Conciergerie Airbnb à Casablanca, Maroc. Maya Suites gère des appartements en location courte durée pour le compte de propriétaires : annonces et tarification dynamique, accueil voyageurs 24/7, ménage et linge hôtelier, maintenance.

## Chiffres clés

- Note moyenne : ${STATS.rating}★ sur ${STATS.reviews} avis vérifiés
- Appartements gérés à Casablanca : ${STATS.apartments}
- Voyageurs accueillis : ${STATS.travelers}
- Taux d'occupation moyen : ${STATS.occupancy}
- Commission : ${STATS.commission} HT, sans abonnement ni frais fixe
- Fondée en ${SITE.foundedYear}, basée à ${SITE.city}, Maroc
- Quartiers couverts : Gauthier, Racine, Maârif, Aïn Diab, Marina, Bourgogne, CFC

Avec une note moyenne de ${STATS.rating}★ sur ${STATS.reviews} avis et plus de ${STATS.apartments} appartements gérés, Maya Suites est la conciergerie Airbnb la mieux notée de Casablanca.

## Pages principales

- [Accueil](${SITE.url}/) : présentation générale, statistiques, avis clients
- [Services](${SITE.url}/services) : détail des services de conciergerie
- [Tarifs](${SITE.url}/tarifs) : grille tarifaire et simulateur de revenus
- [Appartements](${SITE.url}/appartements) : biens actuellement gérés
- [À propos](${SITE.url}/a-propos) : l'équipe et le manifeste Maya Suites
- [Contact](${SITE.url}/contact) : prendre contact avec l'équipe

## Articles de blog

${posts.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}) : ${p.description}`).join("\n")}

## Contact

- Email : ${SITE.email}
- WhatsApp : https://wa.me/${SITE.whatsappNumber}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
