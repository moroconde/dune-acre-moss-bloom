import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Button, r as site } from "./router-BcOtBwON.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sobre-Bs9Gi4TC.js
var import_jsx_runtime = require_jsx_runtime();
function SobrePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/miriam-consulta.jpg",
					alt: "Dra. Miriam Eguía en su consulta",
					className: "aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_18%] shadow-[var(--shadow-lift)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/miriam-tv.jpg",
					alt: "Colaboración en televisión de la Dra. Miriam Eguía",
					className: "aspect-[16/10] w-full rounded-[1.5rem] object-cover"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
					children: "Sobre mí"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl leading-tight sm:text-6xl",
					children: "Hola, soy Miriam Eguía."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-6 font-display text-2xl italic leading-snug text-ink-soft",
					children: "«Una adecuada alimentación repercutirá en nuestra calidad de vida y en la mejora de la salud, estemos sanos o enfermos.»"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4 text-base leading-relaxed text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-ink",
								children: "Licenciada en Medicina"
							}),
							" ",
							"por la Universidad de Cantabria,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-ink",
								children: "Experta en Nutrición y Planificación Dietética"
							}),
							" ",
							"por la Universidad Complutense de Madrid. También",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-ink",
								children: "Especialista en Nutrición Celular Activa"
							}),
							" ",
							"por la Asociación Francesa de Medicina Ortomolecular (AFMO) y",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-ink",
								children: "Posgrado en Neuropsicología Clínica"
							}),
							" ",
							"por el ISEP de Barcelona, además de distintos cursos en medicina, nutrición y salud."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Soy médico y madre, por partida doble, a tiempo completo. Entiendo las situaciones del día a día en la alimentación de los niños, la organización del tiempo, la familia y la conciliación." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Desde el inicio de mi carrera me interesó el trato con el paciente, la prevención y la comunicación para mejorar la salud. En la nutrición encontré respuestas a muchos de los problemas que nos encontramos en consulta y en casa." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "He tratado a cientos de pacientes en mi consulta y en centros especializados, y he colaborado en radio, prensa y televisión. Cada persona es distinta: abrimos historia médica y hacemos una evaluación nutricional completa." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mi objetivo es una atención personalizada y eficiente. Investigando y actualizándome para ofrecer el mejor tratamiento posible." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-2 rounded-2xl border border-line bg-cream p-5 text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Centro registrado Nº ",
							site.centroRegistro,
							" · Consejería de Sanidad de Cantabria"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Colegiada Nº ",
							site.colegiado,
							" · ",
							site.colegio
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Director técnico responsable: ", site.director] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Pedir cita"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.social.youtube,
							target: "_blank",
							rel: "noreferrer",
							children: "Ver colaboraciones"
						})
					})]
				})
			] })]
		})
	});
}
//#endregion
export { SobrePage as component };
