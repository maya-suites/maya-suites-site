import Image from "next/image";
import Link from "next/link";
import { PHOTOS } from "@/lib/photos";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DraggableMarquee } from "@/components/DraggableMarquee";

function MarqueeRow({ photos, speed }: { photos: typeof PHOTOS; speed: number }) {
  // Contenu doublé pour une boucle continue
  const doubled = [...photos, ...photos];
  return (
    <DraggableMarquee speed={speed}>
      {doubled.map((photo, i) => (
        <figure
          key={`${photo.name}-${i}`}
          className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-96"
        >
          <Image
            src={photo.src}
            alt={i < photos.length ? photo.alt : ""}
            aria-hidden={i >= photos.length}
            fill
            sizes="384px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo/80 to-transparent px-5 pt-10 pb-4 text-cream">
            <span className="font-display text-xl italic">« {photo.name} »</span>
            <span className="ml-3 text-xs uppercase tracking-[0.2em] text-gold-light">
              {photo.category}
            </span>
          </figcaption>
        </figure>
      ))}
    </DraggableMarquee>
  );
}

export function Gallery() {
  const row1 = PHOTOS.slice(0, 8);
  const row2 = PHOTOS.slice(8);

  return (
    <section className="overflow-hidden bg-indigo py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Nos appartements"
          title={
            <>
              Chaque adresse a un prénom, <em className="italic text-gold">et une âme</em>
            </>
          }
          description="Othman, Sofia, Mounia... Nos 40 appartements sont choisis, décorés et entretenus pour que chaque séjour ressemble à une arrivée chez soi."
        />
      </div>
      <div className="mt-14 space-y-5">
        <MarqueeRow photos={row1} speed={45} />
        <MarqueeRow photos={row2} speed={58} />
      </div>
      <Reveal className="mt-12 text-center">
        <Link
          href="/appartements"
          className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:text-gold"
        >
          Voir tous nos appartements →
        </Link>
      </Reveal>
    </section>
  );
}
