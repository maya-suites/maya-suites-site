const rows: { label: string; before: string; after: string; up?: boolean }[] = [
  { label: "Chiffre d'affaires mensuel moyen", before: "13 500 MAD", after: "16 000 MAD", up: true },
  { label: "Taux d'occupation", before: "—", after: "identique" },
  { label: "Prix moyen par nuit", before: "—", after: "nettement plus haut", up: true },
  { label: "Ce qu'il gagne, après notre commission", before: "—", after: "un peu plus qu'avant", up: true },
  { label: "Le temps qu'il y passe", before: "messages, ménage, prix, clés", after: "aucun", up: true },
];

export function KarimCase() {
  return (
    <section className="ms-band bg-sheet">
      <div className="ms-wrap grid items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="ms-text">
          <p className="ms-label">Cas réel · Gauthier</p>
          <h2 className="ms-h2">Karim gérait son Airbnb seul. Aujourd&apos;hui, il ne s&apos;en occupe plus.</h2>
          <p>
            Duplex une chambre à Gauthier. Autant de nuits louées qu&apos;avant, mais chaque nuit
            vendue plus cher grâce à un prix ajusté en permanence.
          </p>
          <figure className="mt-[26px] border-l-[3px] border-gold pl-4">
            <blockquote className="font-display text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.4] font-semibold text-indigo">
              « Bravo pour votre travail l&apos;équipe Maya ! »
            </blockquote>
            <figcaption className="mt-2 font-mono text-xs font-medium text-muted">
              Karim, propriétaire à Gauthier
            </figcaption>
          </figure>
        </div>

        <div className="overflow-x-auto border-t border-ink">
          <table className="w-full border-collapse tabular-nums">
            <caption className="sr-only">
              Résultats de l&apos;appartement de Karim, géré seul puis avec Maya Suites
            </caption>
            <thead>
              <tr className="border-b border-line text-left font-mono text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
                <th scope="col" className="py-[13px] pr-2.5">
                  <span className="sr-only">Indicateur</span>
                </th>
                <th scope="col" className="py-[13px] pr-2.5 font-medium">Géré seul</th>
                <th scope="col" className="py-[13px] pr-2.5 font-medium">Avec Maya Suites</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-line align-top text-sm sm:text-[15px]">
                  <th scope="row" className="w-[42%] py-[13px] pr-2.5 text-left font-semibold">
                    {r.label}
                  </th>
                  <td className="py-[13px] pr-2.5">{r.before}</td>
                  <td className={`py-[13px] pr-2.5 ${r.up ? "font-bold text-indigo" : ""}`}>{r.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
