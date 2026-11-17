import { WhatsAppIcon } from "@/components/Buttons";
import { PROOF_LINE, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

export function ContactBand() {
  return (
    <section id="contact" className="ms-band ms-on-ink scroll-mt-16 border-indigo bg-indigo text-indigo-ink">
      <div className="ms-wrap">
        <p className="ms-label">Contact</p>
        <h2 className="ms-h2">Parlons de votre appartement</h2>
        <p className="ms-text">
          Envoyez-nous le quartier et quelques photos. On vous dit ce qu&apos;il peut rapporter, et
          franchement s&apos;il est prêt.
        </p>
        <div className="mt-[26px]">
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn ms-btn-wa"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Écrire à Idriss sur WhatsApp
          </a>
        </div>
        <p className="ms-proof">{PROOF_LINE}</p>
      </div>
    </section>
  );
}
