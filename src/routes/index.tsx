import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { VoucherCard } from "@/components/voucher";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";

const slides = [
  {
    src: "/brand/slide1.jpg",
    kicker: "Consulta presencial",
    caption: "Un espacio de trabajo clínico, con tiempo para tu caso.",
    alt: "Consulta de nutrición médica en Santander",
  },
  {
    src: "/brand/slide2.jpg",
    kicker: "Hábitos sostenibles",
    caption: "Planes que caben en la mesa de casa.",
    alt: "Alimentación real para el día a día",
  },
  {
    src: "/brand/slide3.jpg",
    kicker: "Criterio médico",
    caption: "Analíticas, historia clínica y seguimiento.",
    alt: "Nutrición clínica y seguimiento",
  },
];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Miriam Eguía Nutrición — Consulta en Santander" },
      { name: "description", content: site.description },
    ],
  }),
});

function HomeCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const slide = slides[i];
  return (
    <div className="relative overflow-hidden bg-ink">
      <img
        src={slide.src}
        alt={slide.alt}
        className="h-[42vh] w-full object-cover sm:h-[56vh]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 py-6 sm:px-8">
        <p className="text-xs uppercase tracking-[0.18em] text-cream/80">
          {slide.kicker}
        </p>
        <p className="mt-1 font-display text-xl text-cream sm:text-2xl">
          {slide.caption}
        </p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Diapositiva ${n + 1}`}
            onClick={() => setI(n)}
            className={`size-2.5 rounded-full ${n === i ? "bg-cream" : "bg-cream/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <HomeCarousel />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">
          {site.tagline}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
          Te acompaño a cuidar tu salud, con tiempo y criterio médico.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          El ritmo de vida, el exceso de consejos y las prisas hacen difícil
          alimentarse bien. En consulta estudiamos tu caso —no un modelo
          genérico— y construimos un plan que se pueda sostener.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contacto">
              Pedir cita
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/bonos">Ver bonos de 5 y 10 sesiones</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          {site.address} · {site.phone}
        </p>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">
                Bonos regalo
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                5 y 10 sesiones, en formato tarjeta.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Un detalle con el logotipo de la consulta. Personalízalo, descárgalo
                e imprímelo, o pídelo listo para entregar.
              </p>
            </div>
            <Button asChild variant="ink">
              <Link to="/bonos">
                Personalizar tarjetas
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Link to="/bonos" className="block transition-transform duration-200 hover:-translate-y-0.5">
              <VoucherCard kind={5} face="front" />
            </Link>
            <Link to="/bonos" className="block transition-transform duration-200 hover:-translate-y-0.5">
              <VoucherCard kind={10} face="front" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">
          Cómo trabajo
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
          Cada historia es distinta. El tratamiento también.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Criterio médico",
              body: "Historia clínica, analíticas y un diagnóstico nutricional antes de cualquier pauta.",
            },
            {
              title: "A tu ritmo",
              body: "Escucha, acompañamiento y un plan adaptado a tu edad, gustos y vida real.",
            },
            {
              title: "De la mesa a la salud",
              body: "Alimentación y movimiento como pilares, sin trucos ni promesas imposibles.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-line bg-cream p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/servicios">Ver servicios y tratamientos</Link>
          </Button>
        </div>
      </section>

      <section className="bg-sage-deep text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/60">
              Sobre la doctora
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Médico, y madre a tiempo completo.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">
              Licenciada en Medicina por la Universidad de Cantabria. Experta en
              Nutrición y Planificación Dietética por la UCM. El retrato y la
              trayectoria están en Sobre mí; aquí el trabajo de la consulta.
            </p>
            <Button asChild variant="cream" className="mt-8">
              <Link to="/sobre">Conóceme</Link>
            </Button>
          </div>
          <img
            src="/brand/slide1.jpg"
            alt="Espacio de consulta de nutrición médica"
            className="aspect-[16/10] w-full rounded-[1.75rem] object-cover"
          />
        </div>
      </section>
    </main>
  );
}
