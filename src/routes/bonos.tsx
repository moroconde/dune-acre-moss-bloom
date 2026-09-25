import { createFileRoute } from "@tanstack/react-router";
import { VoucherStudio } from "@/components/voucher";
import { vouchers } from "@/lib/site";

export const Route = createFileRoute("/bonos")({
  component: BonosPage,
  head: () => ({
    meta: [
      { title: "Bonos de 5 y 10 sesiones — Miriam Eguía Nutrición" },
      {
        name: "description",
        content:
          "Bonos regalo de 5 y 10 sesiones de nutrición médica en Santander. Tarjetas corporativas para imprimir o regalar.",
      },
    ],
  }),
});

function BonosPage() {
  return (
    <main className="print-root mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="no-print max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
          Consulta de nutrición médica
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Bonos de 5 y 10 sesiones
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Dos tarjetas con el logotipo de Miriam Eguía Nutrición. Elige el
          bono, escribe para quién es y descárgalo o imprímelo. El precio se
          confirma al reservar, para no publicar cifras que puedan quedar
          desactualizadas.
        </p>
      </header>

      <div className="no-print mt-8 grid gap-4 sm:grid-cols-2">
        {([vouchers[5], vouchers[10]] as const).map((v) => (
          <article
            key={v.kind}
            className="rounded-2xl border border-line bg-cream p-5"
          >
            <h2 className="font-display text-2xl">{v.title}</h2>
            <p className="mt-1 text-sm text-muted">{v.subtitle}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
              {v.points.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <VoucherStudio />
      </section>
    </main>
  );
}
