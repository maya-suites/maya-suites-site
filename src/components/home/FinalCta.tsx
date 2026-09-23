import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaWhatsApp } from "@/components/Buttons";
import { StarDivider } from "@/components/MayaEmblem";
import { PHOTOS } from "@/lib/photos";

export function FinalCta() {
  const photo = PHOTOS[11]; // Terrasse de nuit, ambiance bougie
  return (
    <section className="relative overflow-hidden py-28">
      <Image src={photo.src} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-indigo/80" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <StarDivider className="text-gold" />
          <h2 className="mt-8 font-display text-4xl leading-[1.1] font-semibold text-cream sm:text-6xl">
            Et si votre appartement travaillait <em className="italic text-gold">pour vous</em> ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Un message suffit. Nous vous répondons en moins d&apos;une heure, avec une estimation
            gratuite de vos revenus.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaWhatsApp label="Démarrer sur WhatsApp" />
          </div>
          <p className="mt-6 font-display text-lg text-gold-light italic">
            A place to belong, anywhere you stay.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
