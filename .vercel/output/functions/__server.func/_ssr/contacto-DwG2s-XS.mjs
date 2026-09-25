import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MapPin, l as Mail, o as Phone } from "../_libs/lucide-react.mjs";
import { c as Label, l as Textarea, o as Button, r as site, s as Input } from "./router-BcOtBwON.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-DwG2s-XS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactoPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const nombre = String(data.get("nombre") || "");
		const telefono = String(data.get("telefono") || "");
		const email = String(data.get("email") || "");
		const motivo = String(data.get("motivo") || "Cita previa");
		const mensaje = String(data.get("mensaje") || "");
		const body = encodeURIComponent(`Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMotivo: ${motivo}\n\n${mensaje}`);
		const subject = encodeURIComponent(`Cita previa — ${motivo} — ${nombre}`);
		window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
					children: "Cita previa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl leading-tight sm:text-6xl",
					children: "Contacto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-ink-soft sm:text-lg",
					children: "La consulta es presencial, con cita previa. Cuéntame qué necesitas y te confirmo disponibilidad."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "flex items-start gap-3 rounded-2xl border border-line bg-cream p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "Teléfono"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg",
							children: site.phone
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.emailHref,
						className: "flex items-start gap-3 rounded-2xl border border-line bg-cream p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "Correo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 break-all text-lg",
							children: site.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.mapsLink,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-start gap-3 rounded-2xl border border-line bg-cream p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "Consulta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-lg leading-snug",
							children: [site.address, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-base text-ink-soft",
								children: site.city
							})]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ink",
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.whatsappHref,
							target: "_blank",
							rel: "noreferrer",
							children: "Escribir por WhatsApp"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-[1.75rem] border border-line bg-cream p-6 shadow-[var(--shadow-card)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "nombre",
									children: "Nombre"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "nombre",
									name: "nombre",
									required: true,
									autoComplete: "name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "telefono",
									children: "Teléfono"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "telefono",
									name: "telefono",
									type: "tel",
									autoComplete: "tel",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "motivo",
									children: "Motivo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "motivo",
									name: "motivo",
									className: "h-11 w-full rounded-xl border border-line bg-cream px-3.5 text-sm outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/20",
									defaultValue: "Cita previa",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cita previa" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bono 5 sesiones" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bono 10 sesiones" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Información" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "mensaje",
									children: "Mensaje"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "mensaje",
									name: "mensaje",
									rows: 4
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "mt-6 w-full sm:w-auto",
						children: "Enviar consulta"
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-sage",
						role: "status",
						children: [
							"Se ha abierto tu correo para enviar el mensaje. Si no ves la ventana, escribe a ",
							site.email,
							"."
						]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-hidden rounded-[1.5rem] border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Mapa de la consulta en Santander",
					src: site.mapsEmbed,
					className: "h-72 w-full grayscale",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})] })]
		})]
	});
}
//#endregion
export { ContactoPage as component };
