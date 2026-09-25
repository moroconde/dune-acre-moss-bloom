import { useEffect, useMemo, useRef, useState } from "react";
import { Download, FlipHorizontal, Printer } from "lucide-react";
import { toPng } from "html-to-image";
import { Button, Input, Label, Textarea } from "@/components/ui";
import { site, voucherConditions, vouchers } from "@/lib/site";
import { cn } from "@/lib/utils";

export type VoucherKind = 5 | 10;
export type VoucherFace = "front" | "back";

export type VoucherFields = {
  para: string;
  de: string;
  mensaje: string;
  fecha: string;
  codigo: string;
};

const emptyFields: VoucherFields = {
  para: "",
  de: "",
  mensaje: "",
  fecha: "",
  codigo: "",
};

export function VoucherCard({
  kind,
  face,
  fields,
  className,
}: {
  kind: VoucherKind;
  face: VoucherFace;
  fields?: Partial<VoucherFields>;
  className?: string;
}) {
  const light = kind === 5;
  const data = { ...emptyFields, ...fields };
  const paper = light ? "/brand/paper-cream.jpg" : "/brand/paper-sage.jpg";
  const logo = light ? "/brand/logo.png" : "/brand/logo-blanco.png";

  return (
    <article
      className={cn("voucher-card", !light && "is-dark", className)}
      data-kind={kind}
      data-face={face}
    >
      <img className="v-paper" src={paper} alt="" crossOrigin="anonymous" />
      <div className={light ? "v-wash v-wash-light" : "v-wash v-wash-dark"} />
      <div className="v-ring" />
      <div className="v-ring-inner" />

      {face === "front" ? (
        <div className="v-frame">
          <header className="v-top">
            <img
              className="v-logo"
              src={logo}
              alt="Miriam Eguía Nutrición"
              crossOrigin="anonymous"
            />
            <p className="v-kicker">Bono regalo</p>
          </header>

          <div className="v-mid">
            <div>
              <p className="v-num">{kind}</p>
              <p className="v-title">sesiones de nutrición médica</p>
              <p className="v-msg">
                {data.mensaje
                  ? `«${data.mensaje}»`
                  : "Un acompañamiento personalizado para cuidar la salud."}
              </p>
            </div>
            <div className="v-emblem">
              <img src="/brand/corazon.svg" alt="" crossOrigin="anonymous" />
            </div>
          </div>

          <footer className="v-bot">
            <div className="v-who">
              <p>
                <span className="v-label">Para</span>
                <span className="v-script">{data.para || "________________"}</span>
              </p>
              <p>
                <span className="v-label">De</span>
                <span className="v-script">{data.de || "________________"}</span>
              </p>
            </div>
            <p className="v-meta">
              {site.city.replace(" — ", ", ")} · {site.phone}
              {data.fecha ? ` · ${data.fecha}` : ""}
              {data.codigo ? ` · ${data.codigo}` : ""}
            </p>
          </footer>
        </div>
      ) : (
        <div className="v-frame">
          <header className="v-top">
            <div>
              <p className="v-title" style={{ marginTop: 0 }}>
                {kind} sesiones · reverso
              </p>
              <p className="v-kicker">{site.name}</p>
            </div>
            <div className="v-emblem" style={{ height: "4.6em", width: "4.6em" }}>
              <img src="/brand/corazon.svg" alt="" crossOrigin="anonymous" />
            </div>
          </header>

          <div className="v-back-grid">
            <ul className="v-conditions">
              {voucherConditions.map((line) => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
            <div>
              <p className="v-label" style={{ marginBottom: "0.6em" }}>
                Control de sesiones
              </p>
              <ul className="v-dots">
                {Array.from({ length: kind }, (_, i) => (
                  <li key={i} className="v-dot">
                    {i + 1}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="v-bot">
            <p className="v-meta" style={{ maxWidth: "none", textAlign: "left" }}>
              {site.doctor}
              <br />
              Centro registrado Nº {site.centroRegistro}
            </p>
            <p className="v-meta">
              {site.email}
              <br />
              miriameguianutricion.com
            </p>
          </footer>
        </div>
      )}
    </article>
  );
}

function todayLabel() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
}

async function savePng(node: HTMLElement, filename: string) {
  await document.fonts.ready;
  const dataUrl = await toPng(node, {
    pixelRatio: 3,
    cacheBust: true,
    skipAutoScale: true,
  });
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

export function VoucherStudio({ initialKind = 5 }: { initialKind?: VoucherKind }) {
  const [kind, setKind] = useState<VoucherKind>(initialKind);
  const [face, setFace] = useState<VoucherFace>("front");
  const [para, setPara] = useState("");
  const [de, setDe] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fecha, setFecha] = useState("");
  const [codigo, setCodigo] = useState("");
  const [busy, setBusy] = useState<"front" | "back" | "print" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const captureFront = useRef<HTMLDivElement>(null);
  const captureBack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFecha(todayLabel());
    setCodigo(`ME-${initialKind}-${Math.floor(1000 + Math.random() * 9000)}`);
  }, [initialKind]);

  const fields: VoucherFields = useMemo(
    () => ({
      para,
      de,
      mensaje,
      fecha,
      codigo: codigo.replace(/ME-\d+-/, `ME-${kind}-`),
    }),
    [para, de, mensaje, fecha, codigo, kind],
  );

  const meta = vouchers[kind];

  async function download(which: VoucherFace) {
    setError(null);
    const node = which === "front" ? captureFront.current : captureBack.current;
    if (!node) return;
    setBusy(which);
    try {
      await savePng(
        node,
        `bono-${kind}-sesiones-${which === "front" ? "frente" : "reverso"}.png`,
      );
    } catch {
      setError(
        "No se pudo generar la imagen. Prueba a imprimir la tarjeta desde el navegador.",
      );
    } finally {
      setBusy(null);
    }
  }

  const waText = encodeURIComponent(
    `Hola Dra. Miriam, me gustaría adquirir el ${meta.title}${para ? ` para ${para}` : ""}.`,
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start">
      <div>
        <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex rounded-full border border-line bg-cream p-1">
            {([5, 10] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={cn(
                  "h-9 rounded-full px-4 text-sm transition-colors duration-150",
                  kind === k ? "bg-sage text-cream" : "text-ink-soft hover:text-ink",
                )}
              >
                {k} sesiones
              </button>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setFace((f) => (f === "front" ? "back" : "front"))}
          >
            <FlipHorizontal />
            {face === "front" ? "Ver reverso" : "Ver frente"}
          </Button>
        </div>

        <div className="no-print">
          <VoucherCard kind={kind} face={face} fields={fields} className="w-full" />
        </div>

        <div className="print-sheet mt-6 hidden print:flex">
          <div className="w-[118mm]">
            <VoucherCard kind={kind} face="front" fields={fields} />
          </div>
          <div className="w-[118mm]">
            <VoucherCard kind={kind} face="back" fields={fields} />
          </div>
        </div>

        <div
          className="no-print pointer-events-none absolute -left-[200vw] top-0"
          aria-hidden
        >
          <div ref={captureFront} className="w-[1050px]">
            <VoucherCard kind={kind} face="front" fields={fields} />
          </div>
          <div ref={captureBack} className="w-[1050px]">
            <VoucherCard kind={kind} face="back" fields={fields} />
          </div>
        </div>

        <p className="no-print mt-4 text-sm leading-relaxed text-muted">
          Tarjeta corporativa con el logotipo original. Imprime en cartulina de
          250–300 g, recorta por el borde y, si quieres, pégala sobre un sobre
          crema. El precio se confirma en consulta.
        </p>
      </div>

      <aside className="no-print rounded-[1.75rem] border border-line bg-cream p-5 shadow-[var(--shadow-card)] sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Personalizar
        </p>
        <h2 className="mt-2 font-display text-3xl leading-tight">{meta.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{meta.subtitle}</p>

        <form
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            void download("front");
          }}
        >
          <div className="grid gap-1.5">
            <Label htmlFor="para">Para</Label>
            <Input
              id="para"
              value={para}
              onChange={(e) => setPara(e.target.value)}
              placeholder="Nombre de quien lo recibe"
              autoComplete="off"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="de">De</Label>
            <Input
              id="de"
              value={de}
              onChange={(e) => setDe(e.target.value)}
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="mensaje">Dedicatoria</Label>
            <Textarea
              id="mensaje"
              value={mensaje}
              maxLength={140}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Unas palabras, si quieres"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="fecha">Fecha de emisión</Label>
            <Input
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          {error ? (
            <p className="text-sm text-sage-deep" role="alert">
              {error}
            </p>
          ) : null}

          <div className="grid gap-2 pt-1">
            <Button type="submit" disabled={busy !== null}>
              <Download />
              {busy === "front" ? "Preparando…" : "Descargar frente"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={busy !== null}
              onClick={() => void download("back")}
            >
              <Download />
              {busy === "back" ? "Preparando…" : "Descargar reverso"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={busy !== null}
              onClick={() => {
                setBusy("print");
                window.print();
                setTimeout(() => setBusy(null), 400);
              }}
            >
              <Printer />
              Imprimir tarjeta
            </Button>
          </div>
        </form>

        <div className="mt-6 border-t border-line pt-5 text-sm leading-relaxed">
          <p className="text-ink-soft">
            ¿Quieres adquirirlo? Escríbeme y lo dejamos listo, con o sin
            personalización.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <Button asChild variant="ink">
              <a
                href={`${site.whatsappHref}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
              >
                Pedir por WhatsApp
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={site.phoneHref}>Llamar al {site.phone}</a>
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
