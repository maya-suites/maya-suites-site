import { faqJsonLd, type FaqItem } from "@/components/Faq";

/** FAQ en deux colonnes, toujours dépliée, avec son balisage FAQPage. */
export function FaqGrid({ items }: { items: FaqItem[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <div className="mt-3.5 grid gap-x-11 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="border-t border-line pt-4 pb-[18px]">
            <h3 className="mb-2 font-display text-[17px] leading-[1.35] font-bold text-indigo">
              {item.question}
            </h3>
            <p className="text-[15px]">{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
