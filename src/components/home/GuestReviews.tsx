import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { getGuestReviewImages } from "@/lib/reviews";

function MarqueeRow({ images, duration }: { images: string[]; duration: string }) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className="marquee-track flex w-max items-center gap-5"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {doubled.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className="h-[280px] w-[194px] shrink-0 overflow-hidden rounded-2xl border border-indigo/10 border-t-4 border-t-gold bg-white shadow-md sm:h-[375px] sm:w-[260px]"
          >
            <Image
              src={src}
              alt="Avis voyageur Airbnb 5 étoiles pour un appartement Maya Suites"
              aria-hidden={i >= images.length}
              width={360}
              height={520}
              className="h-full w-full object-cover object-top"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function GuestReviews() {
  const images = getGuestReviewImages();
  if (images.length === 0) return null;

  const mid = Math.ceil(images.length / 2);
  const row1 = images.slice(0, mid);
  const row2 = images.slice(mid);

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Vu sur Airbnb"
          title={
            <>
              Ce que disent nos <em className="italic text-gold">voyageurs</em>
            </>
          }
          description="Une sélection d'avis 5 étoiles laissés directement sur nos annonces, par les voyageurs qui ont séjourné dans nos appartements."
        />
      </div>
      <div className="mt-14 space-y-5">
        <MarqueeRow images={row1} duration="70s" />
        <MarqueeRow images={row2} duration="60s" />
      </div>
    </section>
  );
}
