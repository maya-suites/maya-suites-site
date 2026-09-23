import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Simulator } from "@/components/Simulator";
import { Faq, faqJsonLd, type FaqItem } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaWhatsApp } from "@/components/Buttons";
import { Lattice } from "@/components/Lattice";
import { STATS } from "@/lib/site";
import { FinalCta } from "@/components/home/FinalCta";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Prix de notre conciergerie Airbnb à Casablanca — 19 % de commission",
  description:
    "Prix conciergerie Airbnb Casablanca : 19 % HT de commission sur les revenus, zéro frais fixe, zéro abonnement. Tout est inclus. Simulez gratuitement les revenus de votre appartement.",
  alternates: { canonical: "/tarifs" },
};

const included: { title: string; desc: string }[] = [
  {
    title: "Annonces & distribution",
    desc: "Création, optimisation et diffusion sur Airbnb, Booking.com et en direct. Shooting photo professionnel inclus.",
  },
  {
    title: "Tarification dynamique",
    desc: "Prix ajustés chaque jour selon la saison, les événements et la demande, pour maximiser chaque nuitée.",
  },
  {
    title: "Communication voyageurs 24/7",
    desc: "Avant, pendant et après chaque séjour. En français, anglais et arabe.",
  },
  {
    title: "Check-in & check-out",
    desc: "Accueil physique ou autonome, remise des clés, état des lieux à chaque rotation.",
  },
  {
    title: "Ménage & linge hôtelier",
    desc: "Ménage professionnel entre chaque séjour, linge fourni et entretenu. Facturé aux voyageurs, pas à vous.",
  },
  {
    title: "Maintenance & urgences",
    desc: "Réseau d'artisans de confiance, interventions rapides, suivi préventif de votre bien.",
  },
  {
    title: "Gestion des avis",
    desc: "Réponses soignées et suivi de votre note pour garder votre annonce au sommet.",
  },
  {
    title: "Reporting mensuel",
    desc: "Revenus, taux d'occupation, interventions : un point complet et transparent chaque mois.",
  },
];

const TARIFS_FAQ: FaqItem[] = [
  {
    question: "Quel est le prix de la conciergerie Maya Suites à Casablanca ?",
    answer:
      "Notre commission est de 19 % HT des revenus de location générés. Les frais de ménage sont facturés aux voyageurs lors de leur réservation. Il n'y a aucun abonnement, aucun frais d'entrée et aucun coût fixe pour le propriétaire.",
  },
  {
    question: "Y a-t-il des frais cachés ou des coûts de démarrage ?",
    answer:
      "Non. Le shooting photo, la création des annonces et la mise en ligne sont inclus. Les seuls investissements éventuels concernent l'équipement de votre appartement (linge, équipements manquants) — toujours validés avec vous avant.",
  },
  {
    question: "Pourquoi une commission plutôt qu'un forfait fixe ?",
    answer:
      "Parce que c'est le seul modèle qui aligne nos intérêts : nous ne gagnons que si vous gagnez. Chaque nuitée optimisée, chaque avis cinq étoiles et chaque voyageur fidélisé augmente vos revenus — et les nôtres.",
  },
  {
    question: "La commission de 19 % est-elle négociable pour plusieurs biens ?",
    answer:
      "Si vous nous confiez plusieurs appartements, parlons-en. Nous étudions des conditions adaptées aux portefeuilles de biens.",
  },
  {
    question: "Comment se compare ce tarif au marché de la conciergerie à Casablanca ?",
    answer:
      "Les conciergeries Airbnb pratiquent généralement entre 15 % et 30 % de commission. À 19 % HT tout inclus — shooting, tarification dynamique, communication 24/7 et reporting mensuel — Maya Suites se situe dans le cœur du marché avec un niveau de service hôtelier.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(TARIFS_FAQ)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", path: "/" },
              { name: "Tarifs", path: "/tarifs" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Tarifs"
        title={
          <>
            Un prix simple, <em className="italic text-gold">tout inclus</em>
          </>
        }
        description="19 % HT de commission sur les revenus générés. Pas d'abonnement, pas de frais cachés : si votre appartement ne rapporte pas, nous ne gagnons rien."
      />

      {/* Le chiffre */}
      <section className="relative overflow-hidden bg-gold py-16">
        <Lattice color="#1b1560" opacity={0.05} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
          <Reveal>
            <p className="font-display text-8xl font-bold text-indigo sm:text-9xl">
              {STATS.commission}
              <span className="ml-3 align-middle font-sans text-xl font-semibold text-indigo/70">
                HT
              </span>
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-indigo/70">
              de commission sur les revenus générés
            </p>
          </Reveal>
          <Reveal delay={150} className="max-w-md">
            <p className="text-indigo/90">
              + frais de ménage facturés aux voyageurs à chaque réservation.{" "}
              <strong>C&apos;est tout.</strong> Vous percevez le reste, chaque mois, avec un
              reporting détaillé.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tout inclus */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Ce que couvre la commission"
          title={
            <>
              Tout est <em className="italic text-gold">vraiment</em> inclus
            </>
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 90}>
              <div className="h-full rounded-3xl border border-indigo/10 bg-white p-7">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-indigo"
                >
                  ✓
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-indigo">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Simulateur */}
      <section id="simulateur" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Simulateur"
            title={
              <>
                Et vous, combien pourriez-vous <em className="italic text-gold">gagner</em> ?
              </>
            }
          />
          <Reveal delay={150} className="mx-auto mt-12 max-w-4xl">
            <Simulator />
          </Reveal>
        </div>
      </section>

      {/* FAQ tarifs */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Questions sur nos tarifs"
            title={
              <>
                Parlons <em className="italic text-gold">argent</em>, franchement
              </>
            }
          />
          <div className="mt-12">
            <Faq items={TARIFS_FAQ} />
          </div>
          <Reveal className="mt-12 text-center">
            <CtaWhatsApp label="Poser une question sur WhatsApp" />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
