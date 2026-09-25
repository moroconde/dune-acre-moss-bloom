import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Phone, r as TriangleAlert, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BcOtBwON.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-sage text-cream shadow-[0_1px_0_0_rgb(28_26_23/0.08)] hover:bg-sage-deep",
			ink: "bg-ink text-cream hover:bg-ink-soft",
			outline: "border border-line bg-transparent text-ink hover:border-ink/30 hover:bg-cream",
			ghost: "text-ink hover:bg-paper-deep",
			cream: "bg-cream text-sage hover:bg-paper border border-cream/20"
		},
		size: {
			sm: "h-9 px-4 text-xs",
			md: "h-11 px-5",
			lg: "h-12 px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-xl border border-line bg-cream px-3.5 text-sm text-ink shadow-[0_1px_0_0_rgb(28_26_23/0.04)] placeholder:text-muted/80 outline-none transition-[border-color,box-shadow] duration-150 focus:border-sage/50 focus:ring-2 focus:ring-sage/20", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium uppercase tracking-[0.16em] text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-xl border border-line bg-cream px-3.5 py-3 text-sm text-ink shadow-[0_1px_0_0_rgb(28_26_23/0.04)] placeholder:text-muted/80 outline-none transition-[border-color,box-shadow] duration-150 focus:border-sage/50 focus:ring-2 focus:ring-sage/20", className),
		...props
	});
}
var site = {
	name: "Miriam Eguía Nutrición",
	shortName: "Miriam Eguía",
	doctor: "Dra. Miriam Eguía Llosa",
	profession: "Médico experta en Nutrición y Planificación Dietética",
	tagline: "Consulta de nutrición médica en Santander",
	description: "Acompañamiento médico personalizado para cuidar tu alimentación, tu salud y tus hábitos, con calma y rigor.",
	phone: "648 125 035",
	phoneHref: "tel:+34648125035",
	whatsappHref: "https://wa.me/34648125035",
	email: "me@miriameguianutricion.com",
	emailHref: "mailto:me@miriameguianutricion.com",
	address: "Calle Juan de la Cosa 15, 1ºD",
	city: "39004 Santander — Cantabria",
	mapsQuery: "Calle Juan de la Cosa 15, 39004 Santander",
	mapsEmbed: "https://maps.google.com/maps?q=Calle%20Juan%20de%20la%20Cosa%2015%2C%2039004%20Santander&z=16&output=embed",
	mapsLink: "https://www.google.com/maps/search/?api=1&query=Calle%20Juan%20de%20la%20Cosa%2015%2C%2039004%20Santander",
	centroRegistro: "06/2025/04344",
	colegiado: "393906532",
	colegio: "Colegio Oficial de Médicos de Cantabria",
	director: "Dra. Miriam Eguía Llosa",
	social: {
		facebook: "https://es-es.facebook.com/MiriamEguiaMedicoNutricion",
		x: "https://twitter.com/NutriMeguia",
		linkedin: "https://es.linkedin.com/pub/miriam-eguia-llosa/86/a74/781",
		youtube: "https://www.youtube.com/playlist?list=PLx5R255huHhdkL0MwpBdoIVSKechXwwH7"
	}
};
var nav = [
	{
		href: "/",
		label: "Inicio"
	},
	{
		href: "/servicios",
		label: "Servicios"
	},
	{
		href: "/bonos",
		label: "Bonos"
	},
	{
		href: "/sobre",
		label: "Sobre mí"
	},
	{
		href: "/contacto",
		label: "Contacto"
	}
];
var vouchers = {
	5: {
		kind: 5,
		title: "Bono 5 sesiones",
		kicker: "Bono regalo",
		subtitle: "Para empezar y consolidar el cambio con calma.",
		points: [
			"Cinco consultas de nutrición médica",
			"Historia clínica y plan personalizado",
			"Seguimiento cercano de hábitos y analíticas",
			"Ideal como regalo o para un objetivo concreto"
		]
	},
	10: {
		kind: 10,
		title: "Bono 10 sesiones",
		kicker: "Bono regalo",
		subtitle: "Acompañamiento completo, con tiempo para asentar resultados.",
		points: [
			"Diez consultas de nutrición médica",
			"Evaluación, plan y reajustes a lo largo del proceso",
			"Más margen para patología, deporte o familia",
			"El detalle más cuidado para regalar salud"
		]
	}
};
var voucherConditions = [
	"Válido para consultas de nutrición médica con la Dra. Miriam Eguía Llosa.",
	"Es necesario pedir cita previa por teléfono, WhatsApp o correo.",
	"Validez de 12 meses desde la fecha de emisión, salvo pacto distinto en consulta.",
	"Las sesiones no utilizadas no son reembolsables. El bono puede regalarse.",
	"Centro sanitario registrado en Cantabria. Atención presencial en Santander."
];
var serviceGroups = [
	{
		id: "sano",
		title: "Nutrición en el paciente sano",
		image: "/brand/paciente-sano.jpg",
		intro: "Prevención, hábitos y planes reales para el día a día: familia, deporte, embarazo o menopausia.",
		items: [
			"Prevención de la obesidad infantil y en adultos",
			"Dietas personalizadas",
			"Alimentación materno-infantil: embarazo y lactancia",
			"Control alimentario en la mujer fértil",
			"Seguimiento en menopausia y climaterio",
			"Alergias e intolerancias alimentarias",
			"Trastornos de la conducta alimentaria",
			"Nutrición del deportista",
			"Nutrición infantil",
			"Dietas vegetarianas o veganas",
			"Alimentación consciente"
		]
	},
	{
		id: "clinico",
		title: "Dietoterapia",
		image: "/brand/paciente-clinico.jpg",
		intro: "Tratamiento nutricional médico cuando hay una patología o un desequilibrio que conviene abordar con rigor.",
		items: [
			"Tratamiento de la obesidad infantil y en adultos",
			"Dietas especiales: diabetes, celiaquía, hipertensión, colesterol",
			"Alteraciones tiroideas, enfermedad renal y metabólica",
			"Patología digestiva, colon irritable e hígado graso",
			"Enfermedades reumatológicas",
			"Nutrición celular y micronutrición",
			"Trastornos nutricionales"
		]
	},
	{
		id: "consulta",
		title: "Prestaciones en consulta",
		image: "/brand/asesoramiento.jpg",
		intro: "Cada persona abre historia médica. Dedicamos el tiempo necesario, en persona, a entender tu caso.",
		items: [
			"Antropometría y evaluación del estado nutricional",
			"Valoración y diagnóstico personal",
			"Asesoramiento y recomendaciones alimentarias",
			"Dietas personalizadas",
			"Seguimiento médico de analíticas e historia clínica",
			"Detección de intolerancias alimentarias",
			"Coaching nutricional, motivación y acompañamiento",
			"Psiconutrición y reeducación alimentaria",
			"Prevención de enfermedades",
			"Terapia de grupo"
		]
	},
	{
		id: "formacion",
		title: "Charlas y formación",
		image: "/brand/miriam-tv.jpg",
		intro: "Promoción de la salud para instituciones, empresas y medios: rigor clínico, lenguaje cercano.",
		items: [
			"Conferencias y seminarios para instituciones y empresas",
			"Supervisión nutricional de menús y catering",
			"Hábitos de alimentación saludable",
			"Colaboraciones en radio, prensa y televisión"
		]
	}
];
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/brand/logo.png",
		alt: "Miriam Eguía Nutrición",
		crossOrigin: "anonymous",
		className: cn("brand-lockup", className)
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "no-print sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Miriam Eguía Nutrición — inicio",
					className: "inline-flex shrink-0 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: nav.map((item) => {
						const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: cn("rounded-full px-3.5 py-2 text-sm transition-colors duration-150", active ? "bg-sage text-cream" : "text-ink-soft hover:bg-paper-deep hover:text-ink"),
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "hidden items-center gap-1.5 pr-2 text-sm text-muted md:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), site.phone]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Reservar cita"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-full border border-line bg-cream text-ink lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Cerrar menú" : "Abrir menú",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-cream px-4 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.href,
					onClick: () => setOpen(false),
					className: "rounded-xl px-3 py-3 text-base text-ink hover:bg-paper-deep",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contacto",
						onClick: () => setOpen(false),
						children: "Reservar cita"
					})
				})]
			})
		}) : null]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "no-print border-t border-line bg-sage-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "is-footer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-cream/75",
					children: [
						site.doctor,
						". ",
						site.profession,
						". Atención presencial en Santander."
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm leading-relaxed text-cream/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium uppercase tracking-[0.16em] text-cream/55",
							children: "Consulta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: site.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: site.city }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-cream",
								href: site.phoneHref,
								children: site.phone
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-cream",
							href: site.emailHref,
							children: site.email
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm leading-relaxed text-cream/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium uppercase tracking-[0.16em] text-cream/55",
							children: "Centro sanitario"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"Centro registrado Nº ",
								site.centroRegistro,
								". Autorización de centros, servicios y establecimientos sanitarios de Cantabria."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: ["Director técnico responsable: ", site.director]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1",
							children: [
								"Colegiado Nº ",
								site.colegiado,
								". ",
								site.colegio,
								"."
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" miriameguianutricion.com"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/aviso-legal",
							className: "hover:text-cream",
							children: "Aviso legal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							className: "hover:text-cream",
							children: "Cita previa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.social.facebook,
							target: "_blank",
							rel: "noreferrer",
							children: "Facebook"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.social.youtube,
							target: "_blank",
							rel: "noreferrer",
							children: "YouTube"
						})
					]
				})]
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var styles_default = "/assets/styles-B5e6ymQV.css";
var APP_NAME = "Miriam Eguía Nutrición";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Consulta de nutrición médica en Santander. Dra. Miriam Eguía Llosa. Bonos de 5 y 10 sesiones, cita previa."
			},
			{
				name: "theme-color",
				content: "#F3EEE4"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-DJfyJpiu.mjs");
var Route$5 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Miriam Eguía Nutrición — Consulta en Santander" }, {
		name: "description",
		content: site.description
	}] })
});
var $$splitComponentImporter$4 = () => import("./aviso-legal-B0PEg7fB.mjs");
var Route$4 = createFileRoute("/aviso-legal")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Aviso legal y cookies — Miriam Eguía Nutrición" }] })
});
var $$splitComponentImporter$3 = () => import("./bonos-DD6JtoAT.mjs");
var Route$3 = createFileRoute("/bonos")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Bonos de 5 y 10 sesiones — Miriam Eguía Nutrición" }, {
		name: "description",
		content: "Bonos regalo de 5 y 10 sesiones de nutrición médica en Santander. Tarjetas corporativas para imprimir o regalar."
	}] })
});
var $$splitComponentImporter$2 = () => import("./contacto-DwG2s-XS.mjs");
var Route$2 = createFileRoute("/contacto")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Contacto y cita previa — Miriam Eguía Nutrición" }, {
		name: "description",
		content: `Cita previa en Santander. Teléfono ${site.phone}. ${site.address}.`
	}] })
});
var $$splitComponentImporter$1 = () => import("./servicios-DczQyXL3.mjs");
var Route$1 = createFileRoute("/servicios")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Servicios y tratamientos — Miriam Eguía Nutrición" }, {
		name: "description",
		content: "Nutrición en el paciente sano y enfermo, dietoterapia, micronutrición, psiconutrición y formación en Santander."
	}] })
});
var $$splitComponentImporter = () => import("./sobre-Bs9Gi4TC.mjs");
var Route = createFileRoute("/sobre")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Sobre mí — Dra. Miriam Eguía Llosa" }, {
		name: "description",
		content: "Médico experta en Nutrición y Planificación Dietética. Consulta en Santander. Formación, trayectoria y forma de trabajar."
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AvisoLegalRoute: Route$4.update({
		id: "/aviso-legal",
		path: "/aviso-legal",
		getParentRoute: () => Route$6
	}),
	BonosRoute: Route$3.update({
		id: "/bonos",
		path: "/bonos",
		getParentRoute: () => Route$6
	}),
	ContactoRoute: Route$2.update({
		id: "/contacto",
		path: "/contacto",
		getParentRoute: () => Route$6
	}),
	ServiciosRoute: Route$1.update({
		id: "/servicios",
		path: "/servicios",
		getParentRoute: () => Route$6
	}),
	SobreRoute: Route.update({
		id: "/sobre",
		path: "/sobre",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { vouchers as a, Label as c, voucherConditions as i, Textarea as l, serviceGroups as n, Button as o, site as r, Input as s, router_exports as t, cn as u };
