import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui";
import { serviceGroups } from "@/lib/site";

export const Route = createFileRoute("/servicios")({
  component: ServiciosPage,
  head: () => ({
    meta: [
      { title: "Servicios y tratamientos — Miriam Eguía Nutrición" },
      {
        name: "description",
        content:
          "Nutrición en el paciente sano y enfermo, dietoterapia, micronutrición, psiconutrición y formación en Santander.",
      },
    ],
  }),
});

function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
          Consulta
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
          Servicios y tratamientos
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          No hay dos personas iguales ni cada historia es la misma. Cada caso se
          estudia de forma individual: lo que a una persona le funciona no tiene
          por qué servirle a otra.
        </p>
      </header>

      <div className="mt-12 grid gap-8">
        {serviceGroups.map((group) => (
          <article
            key={group.id}
            id={group.id}
            className="grid overflow-hidden rounded-[1.75rem] border border-line bg-cream shadow-[var(--shadow-card)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
          >
            <img
              src={group.image}
              alt=""
              className="h-56 w-full object-cover lg:h-full"
            />
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-3xl">{group.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {group.intro}
              </p>
              <ul className="mt-5 columns-1 gap-x-8 text-sm leading-relaxed text-ink sm:columns-2">
                {group.items.map((item) => (
                  <li key={item} className="mb-1.5 break-inside-avoid">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <blockquote className="mt-12 max-w-3xl border-l-2 border-sage pl-5 font-display text-2xl italic leading-snug text-ink-soft">
        A cada paciente se le abre una historia médica y se le realiza una
        evaluación nutricional completa, dedicando todo el tiempo necesario y en
        persona.
      </blockquote>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/contacto">Reservar cita</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/bonos">Ver bonos</Link>
        </Button>
      </div>
    </main>
  );
}
