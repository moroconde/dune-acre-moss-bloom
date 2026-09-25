import { type FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button, Input, Label, Textarea } from "@/components/ui";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto y cita previa — Miriam Eguía Nutrición" },
      {
        name: "description",
        content: `Cita previa en Santander. Teléfono ${site.phone}. ${site.address}.`,
      },
    ],
  }),
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "");
    const telefono = String(data.get("telefono") || "");
    const email = String(data.get("email") || "");
    const motivo = String(data.get("motivo") || "Cita previa");
    const mensaje = String(data.get("mensaje") || "");
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMotivo: ${motivo}\n\n${mensaje}`,
    );
    const subject = encodeURIComponent(`Cita previa — ${motivo} — ${nombre}`);
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
          Cita previa
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
          Contacto
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          La consulta es presencial, con cita previa. Cuéntame qué necesitas y
          te confirmo disponibilidad.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <aside className="space-y-4">
          <a
            href={site.phoneHref}
            className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-5"
          >
            <Phone className="mt-0.5 size-4 text-sage" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Teléfono
              </p>
              <p className="mt-1 text-lg">{site.phone}</p>
            </div>
          </a>
          <a
            href={site.emailHref}
            className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-5"
          >
            <Mail className="mt-0.5 size-4 text-sage" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Correo
              </p>
              <p className="mt-1 break-all text-lg">{site.email}</p>
            </div>
          </a>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-5"
          >
            <MapPin className="mt-0.5 size-4 text-sage" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Consulta
              </p>
              <p className="mt-1 text-lg leading-snug">
                {site.address}
                <span className="mt-1 block text-base text-ink-soft">
                  {site.city}
                </span>
              </p>
            </div>
          </a>
          <Button asChild variant="ink" className="w-full">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </Button>
        </aside>

        <div>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.75rem] border border-line bg-cream p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" name="nombre" required autoComplete="name" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="motivo">Motivo</Label>
                <select
                  id="motivo"
                  name="motivo"
                  className="h-11 w-full rounded-xl border border-line bg-cream px-3.5 text-sm outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/20"
                  defaultValue="Cita previa"
                >
                  <option>Cita previa</option>
                  <option>Bono 5 sesiones</option>
                  <option>Bono 10 sesiones</option>
                  <option>Información</option>
                </select>
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" name="mensaje" rows={4} />
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Enviar consulta
            </Button>
            {sent ? (
              <p className="mt-3 text-sm text-sage" role="status">
                Se ha abierto tu correo para enviar el mensaje. Si no ves la
                ventana, escribe a {site.email}.
              </p>
            ) : null}
          </form>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-line">
            <iframe
              title="Mapa de la consulta en Santander"
              src={site.mapsEmbed}
              className="h-72 w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
