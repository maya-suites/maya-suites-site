import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { getAllPosts, formatDate } from "@/lib/blog";
import { PHOTOS } from "@/lib/photos";
import { StarDiamond } from "@/components/MayaEmblem";

export const metadata: Metadata = {
  title: "Blog — Conseils location courte durée & Airbnb à Casablanca",
  description:
    "Rentabilité, réglementation, quartiers, fiscalité : les conseils de Maya Suites pour réussir votre location courte durée à Casablanca.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Le blog Maya"
        title={
          <>
            Louer mieux, <em className="italic text-gold">gagner plus</em>
          </>
        }
        description="Rentabilité, réglementation, quartiers qui montent : tout ce qu'un propriétaire doit savoir sur la location courte durée à Casablanca."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const cover = PHOTOS[post.coverIndex];
            return (
              <Reveal key={post.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-indigo/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center gap-2 text-gold">
                      <StarDiamond className="h-2.5 w-2.5" />
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                        {post.category}
                      </p>
                    </div>
                    <h2 className="mt-4 font-display text-2xl leading-tight font-semibold text-indigo transition-colors group-hover:text-gold">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                      {post.description}
                    </p>
                    <p className="mt-6 flex items-center justify-between border-t border-indigo/10 pt-4 text-xs text-stone">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>{post.readingMinutes} min de lecture</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
