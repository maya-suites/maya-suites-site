import { SectionHeading } from "@/components/SectionHeading";
import { ReviewProof } from "@/components/home/ReviewProof";
import { guestReviews, type GuestReview } from "@/lib/reviews";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.34 5.9.86-4.27 4.16 1.01 5.88L10 14.9l-5.24 2.84 1.01-5.88L1.5 7.7l5.9-.86L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GuestReview }) {
  return (
    <figure className="flex h-[290px] w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-indigo/10 border-t-4 border-t-gold bg-white p-6 shadow-md sm:w-[320px]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo/10 font-display text-lg font-semibold text-indigo">
          {review.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate font-semibold text-ink">{review.name}</figcaption>
          <p className="text-xs text-stone">Séjour de {review.stay} · Airbnb</p>
        </div>
      </div>
      <div className="mt-3">
        <Stars />
      </div>
      <blockquote className="mt-3 flex-1 overflow-hidden text-sm leading-relaxed text-stone">
        <p className="line-clamp-4">&ldquo;{review.comment}&rdquo;</p>
      </blockquote>
      <ReviewProof src={review.image} name={review.name} width={review.imageWidth} height={review.imageHeight} />
    </figure>
  );
}

function MarqueeRow({ reviews, duration }: { reviews: GuestReview[]; duration: string }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="overflow-hidden">
      <div
        className="marquee-track flex w-max gap-5"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {doubled.map((review, i) => (
          <div key={`${review.name}-${i}`} aria-hidden={i >= reviews.length}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GuestReviews() {
  if (guestReviews.length === 0) return null;

  const mid = Math.ceil(guestReviews.length / 2);
  const row1 = guestReviews.slice(0, mid);
  const row2 = guestReviews.slice(mid);

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
        <MarqueeRow reviews={row1} duration="70s" />
        <MarqueeRow reviews={row2} duration="60s" />
      </div>
    </section>
  );
}
