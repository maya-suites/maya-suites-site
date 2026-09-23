import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PHOTOS } from "@/lib/photos";
import { STATS } from "@/lib/site";
import { FinalCta } from "@/components/home/FinalCta";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Nos appartements en gestion à Casablanca — 40+ adresses d'exception",
  description:
    "Découvrez les appartements gérés par Maya Suites à Casablanca : Gauthier, Racine, Maârif, Aïn Diab, Marina. 40+ biens notés 4,83★ par plus de 9 000 voyageurs.",
  alternates: { canonical: "/appartements" },
};

export default function AppartementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", path: "/" },
              { name: "Appartements", path: "/appartements" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Nos appartements"
        title={
          <>
            Nos adresses, <em className="italic text-gold">zéro compromis</em>
          </>
        }
        description="Chaque appartement Maya porte un prénom et respecte le même standard : lumineux, soigné, impeccablement entretenu. Voici un aperçu de notre parc — et de ce que votre bien pourrait devenir."
      />

      {/* Mosaïque */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-stone">
          Un aperçu de notre parc : {PHOTOS.length} appartements présentés ici parmi les{" "}
          {STATS.apartments} que nous gérons actuellement à Casablanca. Le reste de nos adresses
          est visible sur demande, ou directement sur nos annonces Airbnb.
        </p>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {PHOTOS.map((photo, i) => (
            <Reveal key={`${photo.name}-${i}`} delay={(i % 3) * 80} className="mb-5 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-3xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between bg-gradient-to-t from-indigo/85 to-transparent px-6 pt-12 pb-5 text-cream">
                  <span className="font-display text-2xl italic">« {photo.name} »</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold-light">
                    {photo.category}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Standard Maya */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Le standard Maya"
            title={
              <>
                Pourquoi nos annonces affichent <em className="italic text-gold">{STATS.rating}★</em>
              </>
            }
            description={`Plus de ${STATS.reviews} voyageurs ont noté leur séjour chez Maya Suites. Ce niveau d'exigence, appliqué à chaque bien, est exactement ce qui remplira le calendrier de votre appartement.`}
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Une décoration qui séduit",
                desc: "Nous conseillons chaque propriétaire pour que son bien se démarque en photo — le premier critère de réservation.",
              },
              {
                title: "Un entretien d'hôtel",
                desc: "Contrôle qualité avant chaque arrivée, linge hôtelier, consommables toujours réapprovisionnés.",
              },
              {
                title: "Des attentions qui fidélisent",
                desc: "Accueil personnalisé, recommandations locales, réactivité permanente : les voyageurs reviennent, et le disent.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="rounded-3xl bg-cream p-8">
                  <p className="font-display text-5xl font-semibold text-gold-light">{`0${i + 1}`}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-indigo">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
