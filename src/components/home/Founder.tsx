import Image from "next/image";
import tatiana from "@/images/tatiana-menage.jpg";
import { SITE } from "@/lib/site";

export function Founder() {
  return (
    <section className="ms-band">
      <div className="ms-wrap grid items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        {/* Emplacement provisoire : remplacer par la photo d'Idriss */}
        <div
          role="img"
          aria-label="Idriss, fondateur de Maya Suites"
          className="grid aspect-[4/5] w-full max-w-[300px] place-items-center border border-ink bg-sheet p-5 text-center md:max-w-none"
        >
          <div>
            <span className="block font-display text-[96px] leading-none font-extrabold text-indigo">I</span>
            <span className="mt-4 block font-mono text-[13px] font-medium text-muted">
              Idriss · fondateur
            </span>
          </div>
        </div>

        <div>
          <p className="ms-label">Qui a vos clés</p>
          <h2 className="ms-h2">Tout a commencé avec l&apos;appartement de ma mère.</h2>
          <p className="max-w-[46ch] font-display text-[clamp(1.1rem,2vw,1.35rem)] leading-normal font-semibold">
            Je le gérais moi-même. Quand j&apos;ai cherché une conciergerie pour prendre le relais,
            aucune ne m&apos;a rassuré : mes méthodes de simple particulier étaient déjà plus
            rigoureuses. Alors j&apos;en ai fait mon métier.
          </p>
          <p className="mt-3 font-mono text-[13px] font-medium text-indigo">
            Idriss, fondateur de Maya Suites
          </p>

          <div className="mt-[34px] grid grid-cols-[110px_minmax(0,1fr)] items-center gap-[18px] border-t border-ink pt-[22px] sm:grid-cols-[140px_minmax(0,1fr)]">
            <Image
              src={tatiana}
              alt="Tatiana, de l'équipe ménage Maya Suites, arrange les coussins d'un canapé"
              sizes="140px"
              className="aspect-[3/4] w-full object-cover"
            />
            <div>
              <p className="font-display text-[17px] font-bold text-indigo">Tatiana, équipe ménage</p>
              <p className="mt-1.5 text-sm text-muted">
                L&apos;inventaire se fait à la fin de chaque ménage, sur tablette. C&apos;est ce
                rapport que vous retrouvez dans votre espace.
              </p>
            </div>
          </div>

          <p className="ms-proof">
            {SITE.streetAddress}, {SITE.postalCode} Casablanca ·{" "}
            <a href={SITE.googleProfile} target="_blank" rel="noopener noreferrer" className="underline decoration-gold decoration-2 underline-offset-4">
              notre fiche Google ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
