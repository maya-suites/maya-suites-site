import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Simulator } from "@/components/Simulator";
import { Faq, faqJsonLd, type FaqItem } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaWhatsApp } from "@/components/Buttons";
import { Lattice } from "@/components/Lattice";
import { FinalCta } from "@/components/home/FinalCta";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Tarifs de notre conciergerie Airbnb à Casablanca — Devis sur mesure",
  description:
    "Tarifs conciergerie Airbnb Casablanca : une rémunération liée à vos résultats, zéro frais fixe, zéro abonnement, tout inclus. Contactez-nous pour votre tarif personnalisé.",
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
      "Notre tarif est personnalisé selon votre bien et vos objectifs. Contactez-nous sur WhatsApp : nous vous répondons en moins d'une heure avec une proposition claire. Les frais de ménage sont facturés aux voyageurs lors de leur réservation. Il n'y a aucun abonnement, aucun frais d'entrée et aucun coût fixe pour le propriétaire.",
  },
  {
    question: "Y a-t-il des frais cachés ou des coûts de démarrage ?",
    answer:
      "Non. Le shooting photo, la création des annonces et la mise en ligne sont inclus. Les seuls investissements éventuels concernent l'équipement de votre appartement (linge, équipements manquants) — toujours validés avec vous avant.",
  },
  {
    question: "Pourquoi une rémunération liée à mes revenus plutôt qu'un forfait fixe ?",
    answer:
      "Parce que c'est le seul modèle qui aligne nos intérêts : nous ne gagnons que si vous gagnez. Chaque nuitée optimisée, chaque avis cinq étoiles et chaque voyageur fidélisé augmente vos revenus — et les nôtres.",
  },
  {
    question: "Le tarif est-il adapté si je confie plusieurs biens ?",
    answer:
      "Si vous nous confiez plusieurs appartements, parlons-en. Nous étudions des conditions adaptées aux portefeuilles de biens.",
  },
  {
    question: "Comment obtenir mon tarif ?",
    answer:
      "Envoyez-nous un message WhatsApp avec le quartier, le nombre de chambres et le standing de votre bien. Nous revenons vers vous en moins d'une heure avec une proposition personnalisée, tout inclus : shooting, tarification dynamique, communication 24/7 et reporting mensuel.",
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
            Un tarif <em className="italic text-gold">sur mesure</em>, tout inclus
          </>
        }
        description="Pas d'abonnement, pas de frais cachés : si votre appartement ne rapporte pas, nous ne gagnons rien. Contactez-nous pour connaître le tarif adapté à votre bien."
      />

      {/* Demande de tarif */}
      <section className="relative overflow-hidden bg-gold py-16">
        <Lattice color="#1b1560" opacity={0.05} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
          <Reveal>
            <p className="font-display text-5xl font-bold text-indigo sm:text-7xl">
              Votre tarif, <em className="italic">sur mesure</em>
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo/70">
              selon votre bien et vos objectifs
            </p>
          </Reveal>
          <Reveal delay={150} className="max-w-md">
            <p className="text-indigo/90">
              Frais de ménage facturés aux voyageurs, aucun coût fixe pour vous.{" "}
              <strong>Écrivez-nous : réponse en moins d&apos;une heure.</strong>
            </p>
            <div className="mt-5 flex justify-center lg:justify-start">
              <CtaWhatsApp
                label="Demander mon tarif"
                message="Bonjour Maya Suites ! Je souhaite connaître vos tarifs pour mon appartement."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tout inclus */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Ce qui est inclus"
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
