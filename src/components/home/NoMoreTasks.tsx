import Link from "next/link";

const tasks = [
  "Répondre aux voyageurs",
  "Organiser les arrivées et les départs",
  "Planifier le ménage et laver le linge",
  "Ajuster le prix de chaque nuit",
  "Trouver un plombier quand ça fuit",
  "Vérifier l'état de l'appartement après chaque départ",
  "Racheter le papier toilette et le café",
  "Relancer les prestataires",
];

export function NoMoreTasks() {
  return (
    <section className="ms-band">
      <div className="ms-wrap">
        <p className="ms-label">Votre liste de tâches</p>
        <h2 className="ms-h2">Gestion Airbnb à Casablanca : ce que vous n&apos;avez plus à faire</h2>
        <ul className="mt-2 mb-[26px] grid gap-x-10 sm:grid-cols-2">
          {tasks.map((t) => (
            <li key={t} className="flex items-center gap-3.5 border-b border-line py-3.5">
              <span
                aria-hidden="true"
                className="grid h-[22px] w-[22px] flex-none place-items-center bg-gold font-display text-[13px] font-bold text-indigo"
              >
                ✓
              </span>
              <s className="text-muted decoration-gold decoration-2">{t}</s>
            </li>
          ))}
        </ul>
        <p className="ms-lead">
          Il vous reste une seule chose à faire : regarder vos revenus, si vous en avez envie.
        </p>
        <Link href="/services" className="ms-textlink">
          Le détail de nos services →
        </Link>
      </div>
    </section>
  );
}
