import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** "light" = texte clair (sections indigo). */
  tone?: "dark" | "light";
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, tone = "dark", align = "left" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${tone === "light" ? "text-gold-light" : "text-gold"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl leading-[1.1] font-semibold sm:text-5xl ${tone === "light" ? "text-cream" : "text-indigo"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-cream/75" : "text-stone"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
