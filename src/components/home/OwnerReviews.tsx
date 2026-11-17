import { ownerTestimonials } from "@/lib/reviews";
import { SITE } from "@/lib/site";

const order = ["Véronique", "Mohamed", "Karima"];

export function OwnerReviews() {
  const reviews = [...ownerTestimonials].sort(
    (a, b) => order.indexOf(a.author) - order.indexOf(b.author)
  );

  return (
    <section className="ms-band bg-sheet">
      <div className="ms-wrap">
        <p className="ms-label">Avis Google · propriétaires</p>
        <h2 className="ms-h2">Ce qu&apos;en disent nos propriétaires</h2>
        <div className="mt-3.5 grid gap-x-9 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="border-t border-ink pt-[18px] pb-6">
              <span className="text-sm tracking-[2px] text-gold" role="img" aria-label="5 étoiles sur 5">
                ★★★★★
              </span>
              <blockquote className="mt-2 mb-2.5">
                <p>« {r.quote} »</p>
              </blockquote>
              <figcaption className="font-mono text-xs font-medium text-muted">
                {r.author}, {r.detail.charAt(0).toLowerCase() + r.detail.slice(1)}
              </figcaption>
            </figure>
          ))}
        </div>
        <a href={SITE.googleProfile} target="_blank" rel="noopener noreferrer" className="ms-textlink">
          Tous nos avis sur Google ↗
        </a>
      </div>
    </section>
  );
}
