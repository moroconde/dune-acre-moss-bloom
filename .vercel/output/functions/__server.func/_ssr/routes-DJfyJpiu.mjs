import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Stethoscope, n as Users, p as ArrowRight, u as Heart } from "../_libs/lucide-react.mjs";
import { o as Button, r as site } from "./router-BcOtBwON.mjs";
import { t as VoucherCard } from "./voucher-l0cksGaX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJfyJpiu.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
					children: site.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-[2.6rem] leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl",
					children: "Te acompaño a cuidar tu salud, con tiempo y criterio médico."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg",
					children: "El ritmo de vida, el exceso de consejos y las prisas hacen difícil alimentarse bien. En consulta estudiamos tu caso —no un modelo genérico— y construimos un plan que se pueda sostener."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contacto",
							children: ["Pedir cita", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bonos",
							children: "Ver bonos de 5 y 10 sesiones"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						site.address,
						" · ",
						site.phone
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/miriam-consulta.jpg",
						alt: "Dra. Miriam Eguía en consulta de nutrición",
						className: "aspect-[4/5] w-full object-cover object-[center_20%] sm:aspect-[5/6]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 text-sm text-muted",
					children: [
						site.doctor,
						". ",
						site.profession,
						"."
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
								children: "Bonos regalo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
								children: "5 y 10 sesiones, en formato tarjeta."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-ink-soft",
								children: "Un detalle con el logotipo de la consulta. Personalízalo, descárgalo e imprímelo, o pídelo listo para entregar."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/bonos",
							children: ["Personalizar tarjetas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bonos",
						className: "block transition-transform duration-200 hover:-translate-y-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
							kind: 5,
							face: "front"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bonos",
						className: "block transition-transform duration-200 hover:-translate-y-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
							kind: 10,
							face: "front"
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
					children: "Cómo trabajo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl",
					children: "Cada historia es distinta. El tratamiento también."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: [
						{
							icon: Stethoscope,
							title: "Criterio médico",
							body: "Historia clínica, analíticas y un diagnóstico nutricional antes de cualquier pauta."
						},
						{
							icon: Users,
							title: "A tu ritmo",
							body: "Escucha, acompañamiento y un plan adaptado a tu edad, gustos y vida real."
						},
						{
							icon: Heart,
							title: "De la mesa a la salud",
							body: "Alimentación y movimiento como pilares, sin trucos ni promesas imposibles."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[1.5rem] border border-line bg-cream p-6 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-sage" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: item.body
							})
						]
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicios",
							children: "Ver servicios y tratamientos"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sage-deep text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-cream/60",
						children: "Sobre la doctora"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
						children: "Médico, y madre a tiempo completo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-cream/80",
						children: "Licenciada en Medicina por la Universidad de Cantabria. Experta en Nutrición y Planificación Dietética por la UCM. Entiendo las prisas de la familia porque las vivo: el objetivo es que el cambio quepa en tu día a día."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "cream",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sobre",
							children: "Conóceme"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/miriam-bata.jpg",
					alt: "Retrato de la Dra. Miriam Eguía",
					className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover object-top"
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
