import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as vouchers } from "./router-BcOtBwON.mjs";
import { n as VoucherStudio } from "./voucher-l0cksGaX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bonos-DD6JtoAT.js
var import_jsx_runtime = require_jsx_runtime();
function BonosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "print-root mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-sage",
						children: "Consulta de nutrición médica"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl leading-tight tracking-[-0.03em] sm:text-6xl",
						children: "Bonos de 5 y 10 sesiones"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-ink-soft sm:text-lg",
						children: "Dos tarjetas con el logotipo de Miriam Eguía Nutrición. Elige el bono, escribe para quién es y descárgalo o imprímelo. El precio se confirma al reservar, para no publicar cifras que puedan quedar desactualizadas."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print mt-8 grid gap-4 sm:grid-cols-2",
				children: [vouchers[5], vouchers[10]].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-line bg-cream p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: v.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: v.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1.5 text-sm text-ink-soft",
							children: v.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", p] }, p))
						})
					]
				}, v.kind))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherStudio, {})
			})
		]
	});
}
//#endregion
export { BonosPage as component };
