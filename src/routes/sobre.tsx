import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre mí — Dra. Miriam Eguía Llosa" },
      {
        name: "description",
        content:
          "Médico experta en Nutrición y Planificación Dietética. Consulta en Santander. Formación, trayectoria y forma de trabajar.",
      },
    ],
  }),
});

function SobrePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <img
            src="/brand/miriam-consulta.jpg"
            alt="Dra. Miriam Eguía en su consulta"
            className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_18%] shadow-[var(--shadow-lift)]"
          />
          <img
            src="/brand/miriam-tv.jpg"
            alt="Colaboración en televisión de la Dra. Miriam Eguía"
            className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
            Sobre mí
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
            Hola, soy Miriam Eguía.
          </h1>
          <blockquote className="mt-6 font-display text-2xl italic leading-snug text-ink-soft">
            «Una adecuada alimentación repercutirá en nuestra calidad de vida y
            en la mejora de la salud, estemos sanos o enfermos.»
          </blockquote>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              <strong className="font-medium text-ink">Licenciada en Medicina</strong>{" "}
              por la Universidad de Cantabria,{" "}
              <strong className="font-medium text-ink">
                Experta en Nutrición y Planificación Dietética
              </strong>{" "}
              por la Universidad Complutense de Madrid. También{" "}
              <strong className="font-medium text-ink">
                Especialista en Nutrición Celular Activa
              </strong>{" "}
              por la Asociación Francesa de Medicina Ortomolecular (AFMO) y{" "}
              <strong className="font-medium text-ink">
                Posgrado en Neuropsicología Clínica
              </strong>{" "}
              por el ISEP de Barcelona, además de distintos cursos en medicina,
              nutrición y salud.
            </p>
            <p>
              Soy médico y madre, por partida doble, a tiempo completo. Entiendo
              las situaciones del día a día en la alimentación de los niños, la
              organización del tiempo, la familia y la conciliación.
            </p>
            <p>
              Desde el inicio de mi carrera me interesó el trato con el
              paciente, la prevención y la comunicación para mejorar la salud.
              En la nutrición encontré respuestas a muchos de los problemas que
              nos encontramos en consulta y en casa.
            </p>
            <p>
              He tratado a cientos de pacientes en mi consulta y en centros
              especializados, y he colaborado en radio, prensa y televisión.
              Cada persona es distinta: abrimos historia médica y hacemos una
              evaluación nutricional completa.
            </p>
            <p>
              Mi objetivo es una atención personalizada y eficiente.
              Investigando y actualizándome para ofrecer el mejor tratamiento
              posible.
            </p>
          </div>
          <ul className="mt-8 space-y-2 rounded-2xl border border-line bg-cream p-5 text-sm text-ink-soft">
            <li>
              Centro registrado Nº {site.centroRegistro} · Consejería de Sanidad
              de Cantabria
            </li>
            <li>
              Colegiada Nº {site.colegiado} · {site.colegio}
            </li>
            <li>Director técnico responsable: {site.director}</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contacto">Pedir cita</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.social.youtube} target="_blank" rel="noreferrer">
                Ver colaboraciones
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
