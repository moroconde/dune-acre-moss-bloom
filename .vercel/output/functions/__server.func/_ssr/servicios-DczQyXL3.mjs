import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as serviceGroups, o as Button } from "./router-BcOtBwON.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicios-DczQyXL3.js
var import_jsx_runtime = require_jsx_runtime();
function ServiciosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
						children: "Consulta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl leading-tight sm:text-6xl",
						children: "Servicios y tratamientos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-ink-soft sm:text-lg",
						children: "No hay dos personas iguales ni cada historia es la misma. Cada caso se estudia de forma individual: lo que a una persona le funciona no tiene por qué servirle a otra."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8",
				children: serviceGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: group.id,
					className: "grid overflow-hidden rounded-[1.75rem] border border-line bg-cream shadow-[var(--shadow-card)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: group.image,
						alt: "",
						className: "h-56 w-full object-cover lg:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: group.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: group.intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 columns-1 gap-x-8 text-sm leading-relaxed text-ink sm:columns-2",
								children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "mb-1.5 break-inside-avoid",
									children: ["· ", item]
								}, item))
							})
						]
					})]
				}, group.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "mt-12 max-w-3xl border-l-2 border-sage pl-5 font-display text-2xl italic leading-snug text-ink-soft",
				children: "A cada paciente se le abre una historia médica y se le realiza una evaluación nutricional completa, dedicando todo el tiempo necesario y en persona."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contacto",
						children: "Reservar cita"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bonos",
						children: "Ver bonos"
					})
				})]
			})
		]
	});
}
//#endregion
export { ServiciosPage as component };
