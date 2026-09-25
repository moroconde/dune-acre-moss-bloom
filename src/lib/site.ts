export const site = {
  name: "Miriam Eguía Nutrición",
  shortName: "Miriam Eguía",
  doctor: "Dra. Miriam Eguía Llosa",
  profession: "Médico experta en Nutrición y Planificación Dietética",
  tagline: "Consulta de nutrición médica en Santander",
  description:
    "Acompañamiento médico personalizado para cuidar tu alimentación, tu salud y tus hábitos, con calma y rigor.",
  phone: "648 125 035",
  phoneHref: "tel:+34648125035",
  whatsappHref: "https://wa.me/34648125035",
  email: "me@miriameguianutricion.com",
  emailHref: "mailto:me@miriameguianutricion.com",
  address: "Calle Juan de la Cosa 15, 1ºD",
  city: "39004 Santander — Cantabria",
  mapsQuery: "Calle Juan de la Cosa 15, 39004 Santander",
  mapsEmbed:
    "https://maps.google.com/maps?q=Calle%20Juan%20de%20la%20Cosa%2015%2C%2039004%20Santander&z=16&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Calle%20Juan%20de%20la%20Cosa%2015%2C%2039004%20Santander",
  centroRegistro: "06/2025/04344",
  colegiado: "393906532",
  colegio: "Colegio Oficial de Médicos de Cantabria",
  director: "Dra. Miriam Eguía Llosa",
  social: {
    facebook: "https://es-es.facebook.com/MiriamEguiaMedicoNutricion",
    x: "https://twitter.com/NutriMeguia",
    linkedin: "https://es.linkedin.com/pub/miriam-eguia-llosa/86/a74/781",
    youtube:
      "https://www.youtube.com/playlist?list=PLx5R255huHhdkL0MwpBdoIVSKechXwwH7",
  },
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/bonos", label: "Bonos" },
  { href: "/sobre", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const vouchers = {
  5: {
    kind: 5 as const,
    title: "Bono 5 sesiones",
    kicker: "Bono regalo",
    subtitle: "Para empezar y consolidar el cambio con calma.",
    points: [
      "Cinco consultas de nutrición médica",
      "Historia clínica y plan personalizado",
      "Seguimiento cercano de hábitos y analíticas",
      "Ideal como regalo o para un objetivo concreto",
    ],
  },
  10: {
    kind: 10 as const,
    title: "Bono 10 sesiones",
    kicker: "Bono regalo",
    subtitle: "Acompañamiento completo, con tiempo para asentar resultados.",
    points: [
      "Diez consultas de nutrición médica",
      "Evaluación, plan y reajustes a lo largo del proceso",
      "Más margen para patología, deporte o familia",
      "El detalle más cuidado para regalar salud",
    ],
  },
} as const;

export const voucherConditions = [
  "Válido para consultas de nutrición médica con la Dra. Miriam Eguía Llosa.",
  "Es necesario pedir cita previa por teléfono, WhatsApp o correo.",
  "Validez de 12 meses desde la fecha de emisión, salvo pacto distinto en consulta.",
  "Las sesiones no utilizadas no son reembolsables. El bono puede regalarse.",
  "Centro sanitario registrado en Cantabria. Atención presencial en Santander.",
];

export const serviceGroups = [
  {
    id: "sano",
    title: "Nutrición en el paciente sano",
    image: "/brand/paciente-sano.jpg",
    intro:
      "Prevención, hábitos y planes reales para el día a día: familia, deporte, embarazo o menopausia.",
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
      "Alimentación consciente",
    ],
  },
  {
    id: "clinico",
    title: "Dietoterapia",
    image: "/brand/paciente-clinico.jpg",
    intro:
      "Tratamiento nutricional médico cuando hay una patología o un desequilibrio que conviene abordar con rigor.",
    items: [
      "Tratamiento de la obesidad infantil y en adultos",
      "Dietas especiales: diabetes, celiaquía, hipertensión, colesterol",
      "Alteraciones tiroideas, enfermedad renal y metabólica",
      "Patología digestiva, colon irritable e hígado graso",
      "Enfermedades reumatológicas",
      "Nutrición celular y micronutrición",
      "Trastornos nutricionales",
    ],
  },
  {
    id: "consulta",
    title: "Prestaciones en consulta",
    image: "/brand/asesoramiento.jpg",
    intro:
      "Cada persona abre historia médica. Dedicamos el tiempo necesario, en persona, a entender tu caso.",
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
      "Terapia de grupo",
    ],
  },
  {
    id: "formacion",
    title: "Charlas y formación",
    image: "/brand/slide3.jpg",
    intro:
      "Promoción de la salud para instituciones, empresas y medios: rigor clínico, lenguaje cercano.",
    items: [
      "Conferencias y seminarios para instituciones y empresas",
      "Supervisión nutricional de menús y catering",
      "Hábitos de alimentación saludable",
      "Colaboraciones en radio, prensa y televisión",
    ],
  },
] as const;
