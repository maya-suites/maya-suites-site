import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { PHOTOS } from "@/lib/photos";
import { Lattice } from "@/components/Lattice";
import { StarDiamond } from "@/components/MayaEmblem";
import { CtaWhatsApp } from "@/components/Buttons";
import { SITE } from "@/lib/site";
import { FinalCta } from "@/components/home/FinalCta";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

function InlineCta() {
  return (
    <div className="not-prose my-10 flex flex-col items-center gap-4 rounded-2xl border border-gold/30 bg-cream px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p className="font-display text-xl font-semibold text-indigo">
          Combien pourrait rapporter un bien comme le vôtre ?
        </p>
        <p className="mt-1 text-sm text-stone">Simulateur gratuit, résultat immédiat.</p>
      </div>
      <Link
        href="/tarifs#simulateur"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-indigo transition-all duration-300 hover:scale-[1.03] hover:bg-gold-light"
      >
        Estimer mes revenus
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const cover = PHOTOS[post.coverIndex];
  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "fr",
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="relative overflow-hidden bg-indigo pt-36 pb-24">
        <Lattice color="#dfa600" opacity={0.07} />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-2 text-gold">
            <StarDiamond className="h-2.5 w-2.5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
              {post.category}
            </p>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-semibold text-cream sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-cream/60">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min de
            lecture · par l&apos;équipe Maya Suites
          </p>
        </div>
      </header>

      <div className="relative mx-auto -mt-14 max-w-3xl px-5 sm:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl shadow-indigo/20">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        {post.htmlParts.map((html, i) => (
          <div key={i}>
            <div className="prose-maya" dangerouslySetInnerHTML={{ __html: html }} />
            {i < post.htmlParts.length - 1 && <InlineCta />}
          </div>
        ))}

        <div className="mt-14 rounded-3xl bg-gold-light/25 p-8 text-center sm:p-10">
          <p className="font-display text-2xl font-semibold text-indigo">
            Une question sur votre bien à Casablanca ?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-stone">
            Estimation gratuite de vos revenus, réponse en moins d&apos;une heure.
          </p>
          <div className="mt-6">
            <CtaWhatsApp label="Échanger sur WhatsApp" />
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-indigo/10 pt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              À lire aussi
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => {
                const relatedCover = PHOTOS[related.coverIndex];
                return (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-indigo/10 p-3 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={relatedCover.src}
                        alt={relatedCover.alt}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="font-display text-base leading-tight font-semibold text-indigo transition-colors group-hover:text-gold">
                      {related.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <p className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-indigo underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
          >
            ← Tous les articles
          </Link>
        </p>
      </article>

      <FinalCta />
    </>
  );
}
