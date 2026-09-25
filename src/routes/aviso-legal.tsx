import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/aviso-legal")({
  component: AvisoLegalPage,
  head: () => ({
    meta: [{ title: "Aviso legal y cookies — Miriam Eguía Nutrición" }],
  }),
});

function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl leading-tight sm:text-5xl">
        Aviso legal
      </h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-2xl text-ink">Titular</h2>
          <p className="mt-2">
            {site.doctor}. {site.profession}. Consulta situada en {site.address},{" "}
            {site.city}. Teléfono {site.phone}. Correo {site.email}.
          </p>
          <p className="mt-2">
            Centro sanitario registrado Nº {site.centroRegistro} (autorización de
            centros, servicios y establecimientos sanitarios de Cantabria).
            Colegiado Nº {site.colegiado}, {site.colegio}. Director técnico
            responsable: {site.director}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">Objeto</h2>
          <p className="mt-2">
            Este sitio informa sobre la consulta de nutrición médica y permite
            solicitar cita o bonos de sesiones. No sustituye una valoración
            clínica presencial. Los contenidos son divulgativos.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">Datos personales</h2>
          <p className="mt-2">
            Los datos que envíes por correo, teléfono o WhatsApp se usan solo
            para gestionar tu cita o consulta, con la base del consentimiento y
            de la relación asistencial. No se ceden a terceros ajenos a esa
            finalidad. Puedes ejercer acceso, rectificación, supresión y demás
            derechos previstos en el RGPD escribiendo a {site.email}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">Cookies</h2>
          <p className="mt-2">
            Esta web utiliza cookies técnicas imprescindibles para su
            funcionamiento. No se instalan cookies de publicidad ni de analítica
            de terceros en esta versión.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">Propiedad intelectual</h2>
          <p className="mt-2">
            El logotipo, los textos y las fotografías de la consulta son
            titularidad de {site.doctor}, salvo que se indique otra fuente. Queda
            prohibida su reproducción no autorizada.
          </p>
        </section>
      </div>
    </main>
  );
}
