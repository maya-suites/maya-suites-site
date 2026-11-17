import type { FaqItem } from "@/components/Faq";
import { FaqGrid } from "@/components/FaqGrid";

const N = " ";

export const HOME_FAQ: FaqItem[] = [
  {
    question: `Combien rapporte un appartement en Airbnb à Casablanca${N}?`,
    answer: `Cela dépend surtout du quartier, du standing, du nombre de chambres et de la décoration. Un exemple réel${N}: le duplex une chambre de Karim, à Gauthier, fait en moyenne 17${N}340 MAD de chiffre d'affaires par mois avec nous, contre 12${N}996 MAD quand il le gérait seul. Après notre commission, et sans les 1${N}400 MAD de ménage et de pressing qu'il payait seul, il lui reste environ 2${N}000 MAD de plus par mois. Le simulateur plus haut vous donne une première fourchette. Pour un chiffre précis, envoyez-nous le quartier et quelques photos sur WhatsApp.`,
  },
  {
    question: `Combien coûte votre conciergerie${N}?`,
    answer:
      "Une commission sur les revenus et des frais d'installation. Le ménage est à la charge des voyageurs. Écrivez-nous pour connaître le tarif de votre appartement.",
  },
  {
    question: `Je vis à l'étranger. Est-ce que ça change quelque chose${N}?`,
    answer:
      "Beaucoup de nos propriétaires vivent hors du Maroc. Le contrat se signe à distance, vos revenus peuvent être versés sur un compte à l'étranger, et vous suivez tout depuis votre espace propriétaire.",
  },
  {
    question: `Dans quels quartiers de Casablanca intervenez-vous${N}?`,
    answer: `Gauthier, Racine, Maârif, Aïn Diab, Marina, Bourgogne et le CFC. Ce sont les quartiers où les voyageurs cherchent à loger, pour le travail comme pour les loisirs. Si votre appartement est ailleurs, écrivez-nous quand même${N}: on vous dira franchement si la demande y suffit.`,
  },
  {
    question: `Qui s'occupe des arrivées, des départs et du ménage${N}?`,
    answer: `Nous. Accueil des voyageurs, remise des clés, départs, ménage et linge entre deux séjours${N}: on s'occupe de tout, de A à Z. Le ménage est payé par les voyageurs, pas par vous.`,
  },
  {
    question: `Comment savez-vous que l'appartement reste en bon état${N}?`,
    answer: `À la fin de chaque ménage, l'équipe fait l'inventaire sur tablette${N}: linge, vaisselle, électroménager, consommables. Tous les 15${N}jours, un contrôle technique passe en revue l'appartement. Les inventaires sont dans votre espace propriétaire, et les rapports de contrôle technique y arrivent bientôt.`,
  },
  {
    question: `Et si un voyageur abîme quelque chose${N}?`,
    answer:
      "L'inventaire fait après chaque ménage permet de le repérer tout de suite. Un dégât causé par un voyageur est à sa charge. L'usure normale (une ampoule, un joint, un appareil qui fatigue) reste à la charge du propriétaire, et on s'occupe de la réparation.",
  },
  {
    question: `Qui s'occupe de la maintenance et des réparations${N}?`,
    answer:
      "Nous. On trouve le bon prestataire, on organise l'intervention et on vérifie qu'elle est faite. Chaque intervention apparaît, datée, dans votre espace propriétaire. Vous n'avez ni plombier à chercher ni artisan à relancer.",
  },
  {
    question: `Que contient l'espace propriétaire${N}?`,
    answer: `Mois par mois${N}: votre revenu net, le chiffre d'affaires brut, notre commission, le taux d'occupation, le prix moyen par nuit, le nombre de réservations et de ménages, et les interventions de maintenance. Vous y retrouvez aussi vos factures. Si vous nous confiez plusieurs appartements, chacun a son propre détail.`,
  },
  {
    question: `Comment suis-je payé${N}?`,
    answer: "Vos revenus sont versés chaque mois, au Maroc ou sur un compte à l'étranger.",
  },
  {
    question: `Puis-je arrêter quand je veux${N}?`,
    answer: "Oui. Il n'y a pas d'engagement.",
  },
  {
    question: `Puis-je garder des affaires dans l'appartement${N}?`,
    answer: "Oui, dans un placard fermé à clé, préparé à l'installation.",
  },
  {
    question: `Mon appartement peut-il être refusé${N}?`,
    answer:
      "Oui, s'il est dans un quartier peu demandé, ou si sa décoration ne tient pas face aux annonces voisines. Dans ce second cas, on vous aide à le préparer.",
  },
  {
    question: `Qui me répond sur WhatsApp${N}?`,
    answer: "Idriss, le fondateur.",
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="ms-band scroll-mt-16">
      <div className="ms-wrap">
        <p className="ms-label">Questions</p>
        <h2 className="ms-h2">Conciergerie Airbnb à Casablanca&nbsp;: vos questions</h2>
        <FaqGrid items={HOME_FAQ} />
      </div>
    </section>
  );
}
