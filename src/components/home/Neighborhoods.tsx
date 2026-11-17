import { NEIGHBORHOODS } from "@/lib/site";

export function Neighborhoods() {
  return (
    <section className="ms-band">
      <div className="ms-wrap">
        <p className="ms-label">Sélection</p>
        <h2 className="ms-h2">Les quartiers de Casablanca où nous gérons des appartements</h2>
        <p className="ms-text">
          On ne prend pas tous les appartements, et on vous le dit franchement. Un bien mal situé
          ou mal décoré trouve difficilement ses voyageurs, et personne n&apos;y gagne. Si le vôtre
          n&apos;est pas encore prêt, on vous aide à le préparer.
        </p>
        <div className="mt-[18px] grid gap-x-10 sm:grid-cols-2">
          {NEIGHBORHOODS.map((n) => (
            <div key={n.slug} className="border-t border-line py-3.5">
              <h3 className="font-display text-lg font-bold text-indigo">{n.name}</h3>
              <p className="text-[14.5px] text-muted">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
