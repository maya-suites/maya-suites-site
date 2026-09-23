import { Reveal } from "@/components/Reveal";

export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <Reveal key={item.question} delay={i * 60}>
          <details className="group rounded-2xl border border-indigo/10 bg-white transition-shadow open:shadow-lg open:shadow-indigo/5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-medium text-indigo select-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-light/40 text-indigo transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-stone">{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}
