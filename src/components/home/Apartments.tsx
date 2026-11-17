import Image from "next/image";
import Link from "next/link";
import { PHOTOS } from "@/lib/photos";

const picks = [
  { photo: PHOTOS[9], caption: "loft double hauteur, Gauthier", alt: "Loft double hauteur avec escalier, appartement géré par Maya Suites à Gauthier, Casablanca" },
  { photo: PHOTOS[5], caption: "salon", alt: "Salon beige lumineux avec grande baie vitrée, appartement géré par Maya Suites à Casablanca" },
  { photo: PHOTOS[10], caption: "balcon", alt: "Balcon au coucher du soleil sur Casablanca, appartement géré par Maya Suites" },
];

export function Apartments() {
  return (
    <section className="ms-band bg-sheet">
      <div className="ms-wrap">
        <p className="ms-label">Nos appartements</p>
        <h2 className="ms-h2">
          Un bel appartement se loue plus cher. Encore faut-il bien le montrer, et le retrouver en
          bon état.
        </h2>
        <div className="mt-2.5 mb-[18px] grid gap-3.5 md:grid-cols-[1.3fr_1fr_1fr]">
          {picks.map(({ photo, caption, alt }) => (
            <figure key={photo.name + caption}>
              <Image
                src={photo.src}
                alt={alt}
                sizes="(min-width: 768px) 480px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-2 font-mono text-xs leading-normal text-muted">
                « {photo.name} » · {caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link href="/appartements" className="ms-textlink">
          Voir nos appartements →
        </Link>
      </div>
    </section>
  );
}
