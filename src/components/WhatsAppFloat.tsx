import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Buttons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:right-7 sm:bottom-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-40">
        Parlons-en !
      </span>
    </a>
  );
}
