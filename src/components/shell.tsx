import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function BrandMark({ className, variant = "color" }: { className?: string; variant?: "color" | "white" }) {
  return (
    <img
      src={variant === "white" ? "/brand/logo-blanco.png" : "/brand/logo.png"}
      alt="Miriam Eguía Nutrición"
      crossOrigin="anonymous"
      className={cn("brand-lockup", className)}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          to="/"
          aria-label="Miriam Eguía Nutrición — inicio"
          className="inline-flex shrink-0 items-center"
        >
          <BrandMark />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors duration-150",
                  active
                    ? "bg-sage text-cream"
                    : "text-ink-soft hover:bg-paper-deep hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 pr-2 text-sm text-muted md:inline-flex"
          >
            <Phone className="size-3.5" />
            {site.phone}
          </a>
          <Button asChild size="sm">
            <Link to="/contacto">Reservar cita</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-cream text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-ink hover:bg-paper-deep"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Reservar cita
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="no-print border-t border-line bg-sage-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <BrandMark className="is-footer" variant="white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            {site.doctor}. {site.profession}. Atención presencial en Santander.
          </p>
        </div>
        <div className="text-sm leading-relaxed text-cream/80">
          <p className="font-medium uppercase tracking-[0.16em] text-cream/55">
            Consulta
          </p>
          <p className="mt-3">{site.address}</p>
          <p>{site.city}</p>
          <p className="mt-3">
            <a className="hover:text-cream" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
          <p>
            <a className="hover:text-cream" href={site.emailHref}>
              {site.email}
            </a>
          </p>
        </div>
        <div className="text-sm leading-relaxed text-cream/80">
          <p className="font-medium uppercase tracking-[0.16em] text-cream/55">
            Centro sanitario
          </p>
          <p className="mt-3">
            Centro registrado Nº {site.centroRegistro}. Autorización de centros,
            servicios y establecimientos sanitarios de Cantabria.
          </p>
          <p className="mt-3">
            Director técnico responsable: {site.director}
          </p>
          <p className="mt-1">
            Colegiado Nº {site.colegiado}. {site.colegio}.
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} miriameguianutricion.com</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/aviso-legal" className="hover:text-cream">
              Aviso legal
            </Link>
            <Link to="/contacto" className="hover:text-cream">
              Cita previa
            </Link>
            <a href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={site.social.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
