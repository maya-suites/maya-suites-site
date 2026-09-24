import { Faq, faqJsonLd, type FaqItem } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Combien coûte une conciergerie Airbnb à Casablanca ?",
    answer:
      "Chez Maya Suites, le tarif est simple : 19 % HT de commission sur les revenus générés, plus les frais de ménage facturés aux voyageurs. Aucun abonnement, aucun frais fixe : si votre appartement ne rapporte pas, nous ne gagnons rien. Ce modèle aligne nos intérêts avec les vôtres.",
  },
  {
    question: "Combien peut rapporter mon appartement en location courte durée à Casablanca ?",
    answer:
      "Tout dépend du quartier, de la surface et de la qualité du bien. Sur notre parc de plus de 40 appartements (Gauthier, Racine, Maârif, Aïn Diab, Marina, Bourgogne, CFC), le taux d'occupation moyen dépasse 85 %. Utilisez notre simulateur en ligne ou contactez-nous sur WhatsApp pour une estimation précise et gratuite.",
  },
  {
    question: "Que comprend la gestion complète de mon bien ?",
    answer:
      "Tout : création et optimisation des annonces sur Airbnb et Booking, tarification dynamique, communication voyageurs 24/7, check-in/check-out, ménage professionnel avec linge hôtelier, maintenance et reporting mensuel. Vous n'avez littéralement rien à faire.",
  },
  {
    question: "Puis-je continuer à utiliser mon appartement quand je le souhaite ?",
    answer:
      "Bien sûr. Votre bien reste le vôtre : vous bloquez les dates de votre choix directement, et nous organisons le calendrier de location autour de vos séjours.",
  },
  {
    question: "En combien de temps mon appartement peut-il être mis en location ?",
    answer:
      "Comptez quelques jours entre notre première visite et la première réservation : shooting photo, création de l'annonce, équipement éventuel aux standards Maya, et mise en ligne. Pas des mois — des jours.",
  },
  {
    question: "Comment suis-je payé et comment suivre les performances de mon bien ?",
    answer:
      "Vous recevez vos revenus chaque mois, accompagnés d'un reporting transparent : nuitées vendues, taux d'occupation, revenus générés et interventions réalisées. Vous savez toujours exactement ce qui se passe chez vous.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(HOME_FAQ)) }}
        />
        <SectionHeading
          align="center"
          eyebrow="Questions fréquentes"
          title={
            <>
              Tout ce que les propriétaires <em className="italic text-gold">nous demandent</em>
            </>
          }
        />
        <div className="mt-12">
          <Faq items={HOME_FAQ} />
        </div>
      </div>
    </section>
  );
}
