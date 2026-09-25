import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as site } from "./router-BcOtBwON.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aviso-legal-B0PEg7fB.js
var import_jsx_runtime = require_jsx_runtime();
function AvisoLegalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl leading-tight sm:text-5xl",
			children: "Aviso legal"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-6 text-sm leading-relaxed text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Titular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							site.doctor,
							". ",
							site.profession,
							". Consulta situada en ",
							site.address,
							",",
							" ",
							site.city,
							". Teléfono ",
							site.phone,
							". Correo ",
							site.email,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							"Centro sanitario registrado Nº ",
							site.centroRegistro,
							" (autorización de centros, servicios y establecimientos sanitarios de Cantabria). Colegiado Nº ",
							site.colegiado,
							", ",
							site.colegio,
							". Director técnico responsable: ",
							site.director,
							"."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: "Objeto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Este sitio informa sobre la consulta de nutrición médica y permite solicitar cita o bonos de sesiones. No sustituye una valoración clínica presencial. Los contenidos son divulgativos."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: "Datos personales"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2",
					children: [
						"Los datos que envíes por correo, teléfono o WhatsApp se usan solo para gestionar tu cita o consulta, con la base del consentimiento y de la relación asistencial. No se ceden a terceros ajenos a esa finalidad. Puedes ejercer acceso, rectificación, supresión y demás derechos previstos en el RGPD escribiendo a ",
						site.email,
						"."
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: "Cookies"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Esta web utiliza cookies técnicas imprescindibles para su funcionamiento. No se instalan cookies de publicidad ni de analítica de terceros en esta versión."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: "Propiedad intelectual"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2",
					children: [
						"El logotipo, los textos y las fotografías de la consulta son titularidad de ",
						site.doctor,
						", salvo que se indique otra fuente. Queda prohibida su reproducción no autorizada."
					]
				})] })
			]
		})]
	});
}
//#endregion
export { AvisoLegalPage as component };
