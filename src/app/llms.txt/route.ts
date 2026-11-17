import { SITE, STATS } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();

  const body = `# Maya Suites

> Conciergerie Airbnb à Casablanca, Maroc. Maya Suites gère des appartements en location courte durée pour le compte de propriétaires : annonce Airbnb et prix ajustés en permanence, accueil des voyageurs, ménage et linge hôtelier, inventaire après chaque ménage, contrôle technique tous les 15 jours, maintenance, espace propriétaire en ligne.

## Chiffres clés

- Note moyenne sur Airbnb : ${STATS.rating}★ sur ${STATS.reviews} commentaires, statut Superhost
- Logements gérés à Casablanca : ${STATS.apartments}
- Voyageurs accueillis : ${STATS.travelers}
- Taux d'occupation moyen : ${STATS.occupancy}
- Tarif : commission sur les revenus locatifs et frais d'installation, montant sur devis, sans abonnement ni engagement. Le ménage est payé par les voyageurs.
- Fondée en ${SITE.foundedYear}, basée à ${SITE.city}, Maroc
- Quartiers couverts : Gauthier, Racine, Maârif, Aïn Diab, Marina, Bourgogne, CFC

Avec une note moyenne de ${STATS.rating}★ sur ${STATS.reviews} commentaires et ${STATS.apartments} logements gérés, Maya Suites fait partie des conciergeries Airbnb les mieux notées de Casablanca.

## Pages principales

- [Accueil](${SITE.url}/) : présentation générale, statistiques, avis clients
- [Services](${SITE.url}/services) : détail des services de conciergerie
- [Tarifs](${SITE.url}/tarifs) : tarif sur mesure et simulateur de revenus
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
