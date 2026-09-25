import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Printer, d as FlipHorizontal, f as Download } from "../_libs/lucide-react.mjs";
import { a as vouchers, c as Label, i as voucherConditions, l as Textarea, o as Button, r as site, s as Input, u as cn } from "./router-BcOtBwON.mjs";
import { t as toPng } from "../_libs/html-to-image.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voucher-l0cksGaX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyFields = {
	para: "",
	de: "",
	mensaje: "",
	fecha: "",
	codigo: ""
};
function VoucherCard({ kind, face, fields, className }) {
	const light = kind === 5;
	const data = {
		...emptyFields,
		...fields
	};
	const paper = light ? "/brand/paper-cream.jpg" : "/brand/paper-sage.jpg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("voucher-card", !light && "is-dark", className),
		"data-kind": kind,
		"data-face": face,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "v-paper",
				src: paper,
				alt: "",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: light ? "v-wash v-wash-light" : "v-wash v-wash-dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "v-ring" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "v-ring-inner" }),
			face === "front" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "v-frame",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "v-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "v-logo",
							src: "/brand/logo.png",
							alt: "Miriam Eguía Nutrición",
							crossOrigin: "anonymous"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "v-kicker",
							children: "Bono regalo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "v-mid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "v-num",
								children: kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "v-title",
								children: "sesiones de nutrición médica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "v-msg",
								children: data.mensaje ? `«${data.mensaje}»` : "Un acompañamiento personalizado para cuidar la salud."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "v-emblem",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/heart.png",
								alt: "",
								crossOrigin: "anonymous"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "v-bot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "v-who",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "v-label",
								children: "Para"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "v-script",
								children: data.para || "________________"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "v-label",
								children: "De"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "v-script",
								children: data.de || "________________"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "v-meta",
							children: [
								site.city.replace(" — ", ", "),
								" · ",
								site.phone,
								data.fecha ? ` · ${data.fecha}` : "",
								data.codigo ? ` · ${data.codigo}` : ""
							]
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "v-frame",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "v-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "v-title",
							style: { marginTop: 0 },
							children: [kind, " sesiones · reverso"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "v-kicker",
							children: site.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "v-emblem",
							style: {
								height: "4.6em",
								width: "4.6em"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/heart.png",
								alt: "",
								crossOrigin: "anonymous"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "v-back-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "v-conditions",
							children: voucherConditions.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", line] }, line))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "v-label",
							style: { marginBottom: "0.6em" },
							children: "Control de sesiones"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "v-dots",
							children: Array.from({ length: kind }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "v-dot",
								children: i + 1
							}, i))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "v-bot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "v-meta",
							style: {
								maxWidth: "none",
								textAlign: "left"
							},
							children: [
								site.doctor,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Centro registrado Nº ",
								site.centroRegistro
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "v-meta",
							children: [
								site.email,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"miriameguianutricion.com"
							]
						})]
					})
				]
			})
		]
	});
}
function todayLabel() {
	const d = /* @__PURE__ */ new Date();
	return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}
async function savePng(node, filename) {
	await document.fonts.ready;
	const dataUrl = await toPng(node, {
		pixelRatio: 3,
		cacheBust: true,
		skipAutoScale: true
	});
	const a = document.createElement("a");
	a.href = dataUrl;
	a.download = filename;
	a.click();
}
function VoucherStudio({ initialKind = 5 }) {
	const [kind, setKind] = (0, import_react.useState)(initialKind);
	const [face, setFace] = (0, import_react.useState)("front");
	const [para, setPara] = (0, import_react.useState)("");
	const [de, setDe] = (0, import_react.useState)("");
	const [mensaje, setMensaje] = (0, import_react.useState)("");
	const [fecha, setFecha] = (0, import_react.useState)("");
	const [codigo, setCodigo] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const captureFront = (0, import_react.useRef)(null);
	const captureBack = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setFecha(todayLabel());
		setCodigo(`ME-${initialKind}-${Math.floor(1e3 + Math.random() * 9e3)}`);
	}, [initialKind]);
	const fields = (0, import_react.useMemo)(() => ({
		para,
		de,
		mensaje,
		fecha,
		codigo: codigo.replace(/ME-\d+-/, `ME-${kind}-`)
	}), [
		para,
		de,
		mensaje,
		fecha,
		codigo,
		kind
	]);
	const meta = vouchers[kind];
	async function download(which) {
		setError(null);
		const node = which === "front" ? captureFront.current : captureBack.current;
		if (!node) return;
		setBusy(which);
		try {
			await savePng(node, `bono-${kind}-sesiones-${which === "front" ? "frente" : "reverso"}.png`);
		} catch {
			setError("No se pudo generar la imagen. Prueba a imprimir la tarjeta desde el navegador.");
		} finally {
			setBusy(null);
		}
	}
	const waText = encodeURIComponent(`Hola Dra. Miriam, me gustaría adquirir el ${meta.title}${para ? ` para ${para}` : ""}.`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mb-4 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex rounded-full border border-line bg-cream p-1",
					children: [5, 10].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setKind(k),
						className: cn("h-9 rounded-full px-4 text-sm transition-colors duration-150", kind === k ? "bg-sage text-cream" : "text-ink-soft hover:text-ink"),
						children: [k, " sesiones"]
					}, k))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: () => setFace((f) => f === "front" ? "back" : "front"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipHorizontal, {}), face === "front" ? "Ver reverso" : "Ver frente"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
					kind,
					face,
					fields,
					className: "w-full"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "print-sheet mt-6 hidden print:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[118mm]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
						kind,
						face: "front",
						fields
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[118mm]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
						kind,
						face: "back",
						fields
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print pointer-events-none absolute -left-[200vw] top-0",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: captureFront,
					className: "w-[1050px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
						kind,
						face: "front",
						fields
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: captureBack,
					className: "w-[1050px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoucherCard, {
						kind,
						face: "back",
						fields
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "no-print mt-4 text-sm leading-relaxed text-muted",
				children: "Tarjeta corporativa con el logotipo original. Imprime en cartulina de 250–300 g, recorta por el borde y, si quieres, pégala sobre un sobre crema. El precio se confirma en consulta."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "no-print rounded-[1.75rem] border border-line bg-cream p-5 shadow-[var(--shadow-card)] sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
					children: "Personalizar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl leading-tight",
					children: meta.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: meta.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						download("front");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "para",
								children: "Para"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "para",
								value: para,
								onChange: (e) => setPara(e.target.value),
								placeholder: "Nombre de quien lo recibe",
								autoComplete: "off"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "de",
								children: "De"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "de",
								value: de,
								onChange: (e) => setDe(e.target.value),
								placeholder: "Tu nombre",
								autoComplete: "name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "mensaje",
								children: "Dedicatoria"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "mensaje",
								value: mensaje,
								maxLength: 140,
								onChange: (e) => setMensaje(e.target.value),
								placeholder: "Unas palabras, si quieres"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "fecha",
								children: "Fecha de emisión"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "fecha",
								value: fecha,
								onChange: (e) => setFecha(e.target.value)
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sage-deep",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 pt-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									disabled: busy !== null,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), busy === "front" ? "Preparando…" : "Descargar frente"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy !== null,
									onClick: () => void download("back"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), busy === "back" ? "Preparando…" : "Descargar reverso"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy !== null,
									onClick: () => {
										setBusy("print");
										window.print();
										setTimeout(() => setBusy(null), 400);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Imprimir tarjeta"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 border-t border-line pt-5 text-sm leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft",
						children: "¿Quieres adquirirlo? Escríbeme y lo dejamos listo, con o sin personalización."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `${site.whatsappHref}?text=${waText}`,
								target: "_blank",
								rel: "noreferrer",
								children: "Pedir por WhatsApp"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								children: ["Llamar al ", site.phone]
							})
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { VoucherStudio as n, VoucherCard as t };
