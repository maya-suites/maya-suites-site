import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { StarDivider } from "@/components/MayaEmblem";
import { PHOTOS } from "@/lib/photos";
import { STATS } from "@/lib/site";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "À propos — L'équipe derrière la conciergerie Maya Suites",
  description:
    "Maya Suites est une conciergerie Airbnb établie à Casablanca depuis 2024 : 40+ appartements gérés, 9 000+ voyageurs accueillis, une équipe locale qui traite chaque bien comme le sien.",
  alternates: { canonical: "/a-propos" },
};

const milestones = [
  {
    year: "2024",
    title: "Les premières clés",
    desc: "Maya Suites naît d'une conviction : la location courte durée à Casablanca mérite un standard hôtelier. Les premiers appartements nous font confiance.",
  },
  {
    year: "2025",
    title: "Le cap des 25 appartements",
    desc: "Le bouche-à-oreille des propriétaires fait grandir le parc. L'équipe s'étoffe : accueil, ménage, maintenance — chaque métier s'internalise.",
  },
  {
    year: "2026",
    title: "40+ appartements, 9 000 voyageurs",
    desc: "Une note moyenne de 4,83★ sur 1 598 avis. Et la même obsession qu'au premier jour : que chaque arrivée ressemble à un retour chez soi.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Une maison, <em className="italic text-gold">pas une plateforme</em>
          </>
        }
        description="Maya Suites est née à Casablanca, de l'idée qu'un appartement bien aimé se ressent dès la porte d'entrée. Deux ans plus tard, 40 propriétaires nous confient leurs clés."
      />

      {/* Manifesto */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <StarDivider className="text-gold" />
          <p className="mt-10 font-display text-3xl leading-snug text-indigo sm:text-4xl">
            « Every stay should feel like arriving somewhere that was{" "}
            <em className="italic text-gold">expecting you</em>. »
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-stone">
            C&apos;est notre phrase fondatrice, et elle guide tout : la façon dont nous décorons un
            salon, répondons à un voyageur à minuit, ou plions une serviette. Pour vos voyageurs,
            cela crée des séjours inoubliables. Pour vous, propriétaire, cela crée des avis cinq
            étoiles, un calendrier plein et des revenus qui durent.
          </p>
        </Reveal>
      </section>

      {/* Photos équipe */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="L'équipe"
            title={
              <>
                Ceux qui font <em className="italic text-gold">Maya</em>
              </>
            }
            description="Accueil, ménage, maintenance, gestion des annonces : une équipe locale, formée à nos standards, qui connaît chaque appartement par son prénom."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MediaPlaceholder
              className="aspect-[3/4]"
              label="Portrait du/des fondateur(s) — regard caméra, dans un salon Maya"
            />
            <MediaPlaceholder
              className="aspect-[3/4]"
              label="Membre de l'équipe accueil remettant les clés à des voyageurs"
            />
            <MediaPlaceholder
              className="aspect-[3/4]"
              label="Équipe ménage en action — détail soigné (lit, serviettes pliées)"
            />
            <MediaPlaceholder
              className="aspect-[3/4]"
              label="L'équipe au complet — photo de groupe naturelle et chaleureuse"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Notre histoire"
          title={
            <>
              De la première clé aux <em className="italic text-gold">{STATS.apartments} appartements</em>
            </>
          }
        />
        <div className="mt-14 space-y-10 border-l-2 border-gold/30 pl-8">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 120}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rotate-45 bg-gold"
                />
                <p className="font-display text-2xl font-semibold text-gold">{m.year}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-indigo">{m.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Photo pleine largeur */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={PHOTOS[10].src}
          alt={PHOTOS[10].alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo/30" />
      </section>

      <FinalCta />
    </>
  );
}
