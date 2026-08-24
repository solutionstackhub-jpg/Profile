/* ------------------------------------------------------------------
   TODO EL TEXTO DEL PERFIL VIVE AQUÍ.
   Para personalizar el documento no hace falta tocar los componentes:
   basta con editar este archivo.
   Los marcadores entre corchetes — [ ASÍ ] — son datos pendientes.
------------------------------------------------------------------- */

/** Nombre de marca: candidato en evaluación. Ver `brand` más abajo. */
export const brand = {
  /**
   * ARQELYS es por ahora un CANDIDATO de marca, no una marca confirmada.
   * Antes del registro definitivo hay que verificar: registro marcario,
   * dominios, denominaciones empresariales, redes sociales y posibles
   * conflictos en los mercados objetivo. Hasta entonces se acompaña
   * siempre de `status`.
   */
  name: "ARQELYS",
  status: "Identidad en evaluación",
  tagline: "Tecnología y transformación digital",
  claim: "Entendemos el problema. Diseñamos la solución. Construimos la tecnología.",
};

export const nav = [
  { label: "Qué hacemos", href: "#divisiones" },
  { label: "Resultados", href: "#resultados" },
  { label: "Método", href: "#metodo" },
  { label: "Garantías", href: "#garantias" },
  { label: "Casos", href: "#casos" },
  { label: "Equipo", href: "#equipo" },
];

export const hero = {
  eyebrow: "Consultoría · Arquitectura · Desarrollo",
  kicker: "No vendemos páginas web.",
  titleTop: "Resolvemos",
  titleMid: "problemas de negocio",
  titleAccent: "con tecnología.",
  body:
    "Entramos a su empresa, estudiamos cómo trabaja realmente, identificamos dónde se pierde tiempo y dinero, y diseñamos el sistema que lo corrige. Después lo construimos, lo ponemos en producción y lo mantenemos funcionando.",
  primaryCta: { label: "Solicitar diagnóstico", href: "#contacto" },
  secondaryCta: { label: "Ver cómo trabajamos", href: "#metodo" },
};

/** Compromisos verificables — no son métricas de marketing, son reglas de trabajo. */
export const commitments = [
  { value: "48 h", label: "para responder una solicitud de diagnóstico" },
  { value: "7 días", label: "del diagnóstico a la propuesta técnica" },
  { value: "Semanal", label: "demostración del avance, funcionando" },
  { value: "90 días", label: "de garantía después del lanzamiento" },
];

export const divisions = [
  {
    id: "digital",
    index: "01",
    name: "Digital",
    summary:
      "La cara pública del negocio: que se encuentre, se entienda y venda sin intervención humana.",
    items: [
      "Sitios corporativos y landing pages",
      "Tiendas en línea y pasarelas de pago",
      "Portales y catálogos B2B",
      "Plataformas de reservas y agendamiento",
      "SEO técnico y rendimiento",
    ],
  },
  {
    id: "sistemas",
    index: "02",
    name: "Sistemas & Operaciones",
    summary:
      "La operación interna: reemplazar planillas, cuadernos y grupos de WhatsApp por un sistema único.",
    items: [
      "CRM y gestión de clientes",
      "Inventario, compras y proveedores",
      "Órdenes de trabajo y servicio técnico",
      "Facturación y control de cobros",
      "Tableros e indicadores de gestión",
    ],
  },
  {
    id: "ai",
    index: "03",
    name: "IA & Automatización",
    summary:
      "Procesos repetitivos que dejan de consumir tiempo de su equipo: atención, seguimiento y procesos administrativos.",
    items: [
      "Agentes de IA y asistentes conversacionales",
      "Atención y ventas por WhatsApp",
      "Calificación y seguimiento de prospectos",
      "Automatización de procesos internos",
      "Integración entre sistemas existentes",
    ],
  },
  {
    id: "saas",
    index: "04",
    name: "Software & SaaS",
    summary:
      "Producto propio: cuando la solución sirve a un sector completo y no a un solo cliente.",
    items: [
      "Aplicaciones web a medida",
      "Aplicaciones móviles",
      "Plataformas SaaS multiempresa",
      "Modelos por suscripción",
      "Arquitectura para escalar",
    ],
  },
];

/* ------------------------------------------------------------------
   QUÉ CAMBIA EN SU EMPRESA
   La tecnología es el medio; el resultado empresarial es el protagonista.
   Esta sección responde "¿y esto qué me deja a mí?", que es la pregunta
   que el resto del sitio no contestaba de forma directa.
------------------------------------------------------------------- */
export const outcomes = {
  eyebrow: "Resultados",
  title: "Qué cambia",
  titleAccent: "en su empresa.",
  intro:
    "La tecnología es el medio, no el fin. Esto es lo que un cliente nota en su operación algunas semanas después de la puesta en marcha.",
  items: [
    {
      index: "01",
      title: "Menos trabajo manual",
      body: "Automatizamos tareas repetitivas y reducimos errores operativos.",
    },
    {
      index: "02",
      title: "Más oportunidades aprovechadas",
      body: "Los prospectos reciben atención y seguimiento aunque el equipo esté ocupado.",
    },
    {
      index: "03",
      title: "Información para decidir",
      body: "Ventas, clientes, inventario y operación dejan de estar dispersos.",
    },
    {
      index: "04",
      title: "Procesos preparados para crecer",
      body: "La empresa reduce su dependencia de planillas, conversaciones aisladas y procesos manuales.",
    },
  ],
};

export const method = [
  {
    step: "01",
    title: "Diagnóstico",
    body:
      "Antes de cotizar, entendemos. Levantamos el proceso real —no el que está en el manual—, medimos dónde se pierde tiempo y definimos qué problema vale la pena resolver primero.",
    deliverable: "Informe de diagnóstico y prioridades",
  },
  {
    step: "02",
    title: "Viabilidad y arquitectura",
    body:
      "Decidimos qué construir, con qué tecnología y en cuánto tiempo. Si un proyecto no es viable o no justifica la inversión, lo decimos en esta etapa y no en la mitad del desarrollo.",
    deliverable: "Arquitectura, alcance cerrado y cronograma",
  },
  {
    step: "03",
    title: "Diseño y desarrollo",
    body:
      "Construimos por hitos. Cada semana hay una demostración de lo que ya funciona, en un enlace real que usted puede abrir y probar. Nada se descubre al final.",
    deliverable: "Entregas parciales verificables",
  },
  {
    step: "04",
    title: "Pruebas y puesta en marcha",
    body:
      "Migramos los datos, probamos los casos límite, capacitamos al equipo y acompañamos las primeras semanas de uso real, que es cuando aparecen los ajustes de verdad.",
    deliverable: "Sistema en producción y equipo capacitado",
  },
  {
    step: "05",
    title: "Evolución",
    body:
      "Un sistema vivo necesita mantenimiento, seguridad y funciones nuevas. Quedamos como área técnica del negocio, no como un proveedor que desaparece tras la entrega.",
    deliverable: "Soporte, mejoras y monitoreo",
  },
];

export const assurances = [
  {
    title: "No cotizamos sin entender",
    body:
      "El diagnóstico va antes que el precio. Cotizar a ciegas es la causa número uno de proyectos que se desbordan en tiempo y costo.",
  },
  {
    title: "Alcance cerrado por escrito",
    body:
      "Qué incluye, qué no incluye y qué ocurre si algo cambia. Sin ambigüedad y sin discusiones a mitad de camino.",
  },
  {
    title: "Usted paga contra entregas",
    body:
      "El pago se libera por hitos verificables. Si un hito no está entregado y funcionando, no se cobra.",
  },
  {
    title: "Avance visible cada semana",
    body:
      "Una demostración semanal en un entorno real. Usted ve el progreso mientras se construye, no un informe al final.",
  },
  {
    title: "El código y los datos son suyos",
    body:
      "Repositorio, servidores, dominio y base de datos quedan a nombre del cliente. Sin dependencia forzada de nosotros.",
  },
  {
    title: "Garantía de 90 días",
    body:
      "Corrección de errores sin costo durante los tres meses posteriores al lanzamiento. Lo que construimos, lo respondemos.",
  },
];

export const stack = {
  /* Solo herramientas con trabajo real detrás. Las marcadas con [ ] están
     por confirmar: si no hay un proyecto que las respalde, se quitan. */
  groups: [
    {
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Inertia", "Livewire"],
    },
    {
      name: "Backend",
      items: ["Laravel · PHP", "Node.js", "Python", "APIs REST", "WebSockets"],
    },
    {
      name: "Datos",
      items: ["PostgreSQL", "Supabase", "Redis", "MySQL", "Modelado y migraciones"],
    },
    {
      name: "IA y automatización",
      items: ["Claude", "GPT-4o", "Whisper", "Visión por computador", "n8n", "API de WhatsApp"],
    },
    {
      name: "Infraestructura",
      items: ["Docker", "GitHub Actions", "DigitalOcean", "Vercel", "nginx", "Monitoreo y respaldos"],
    },
    {
      name: "Móvil",
      items: ["PWA"],
    },
  ],
  /* Cinta superior — se repite automáticamente. */
  marquee: [
    "Laravel", "Next.js", "React", "TypeScript", "Python", "PostgreSQL",
    "Supabase", "Redis", "Docker", "n8n", "Claude", "GPT-4o", "Whisper",
    "API de WhatsApp", "Agentes de IA", "GitHub Actions",
  ],
};

/* ------------------------------------------------------------------
   CASOS — ESPACIOS RESERVADOS
   Cada objeto es una tarjeta. Para publicar un caso, complete los
   campos y cambie `status`:
     "reserved" -> marco vacío (estado actual)
     "delivered"-> Sistema entregado / en operación
     "prototype"-> Arquitectura y prototipo
   `image` acepta una ruta dentro de /public (ej: "/img/caso-1.jpg").
------------------------------------------------------------------- */
export type CaseStatus = "reserved" | "delivered" | "prototype";

export type CaseStudy = {
  id: string;
  status: CaseStatus;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  /** Resultado cuantificado. El número vende más que el stack. */
  before: string;
  after: string;
  result: string;
  image: string | null;
};

export const cases: CaseStudy[] = [
  {
    id: "caso-1",
    status: "delivered",
    // El cliente no se nombra sin autorización escrita: basta el sector.
    sector: "Microcrédito · Brasil",
    title: "Plataforma de crédito operada por WhatsApp",
    problem:
      "Un operador pedía cada dato por WhatsApp, revisaba los documentos a ojo y perseguía los pagos por teléfono.",
    solution:
      "Un bot atiende, califica y cobra solo: extrae los datos, lee los documentos y aplica 12 controles antifraude.",
    stack: ["Laravel", "React", "WhatsApp Cloud API", "Claude"],
    before: "Atención manual en horario de oficina",
    after: "Bot 24/7 · 13 datos por conversación",
    result:
      "Atiende y cobra sin sumar personal.",
    image: "/img/caso-vanguard.jpg",
  },
  {
    id: "caso-2",
    status: "delivered",
    sector: "Hostelería y retail · España",
    title: "Control de costes por fotografía de factura",
    problem:
      "Un bar recibe decenas de facturas al mes. Cuando un producto sube de precio nadie lo nota hasta el cierre.",
    solution:
      "El encargado fotografía la factura por WhatsApp. La IA extrae los datos y avisa solo cuando un precio sube.",
    stack: ["n8n", "WhatsApp Cloud API", "GPT-4o", "Supabase"],
    before: "Revisión de facturas una por una, al cierre",
    after: "Aviso automático en cuanto sube un precio",
    result:
      "Detectar una subida deja de depender de que alguien revise.",
    image: "/img/caso-costes.jpg",
  },
  {
    id: "caso-3",
    status: "prototype",
    sector: "Salud · Brasil",
    title: "Historia clínica dictada por voz",
    problem:
      "En consulta el médico elige entre mirar al paciente o escribir. Lo que se redacta al final del día sale peor.",
    solution:
      "Graba la consulta y recibe la historia clínica ya estructurada, lista para revisar y pegar donde trabaja.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Whisper"],
    before: "",
    after: "",
    result:
      "Producto propio en desarrollo.",
    image: "/img/caso-vozdoc.jpg",
  },
  {
    id: "caso-4",
    status: "prototype",
    sector: "Clínicas · Brasil",
    title: "Arquitectura de plataforma de gestión clínica",
    problem:
      "Necesitaban agenda, historia clínica y facturación en un solo sistema, con un techo de coste muy ajustado.",
    solution:
      "Arquitectura completa y plan por fases, dimensionados para caber en ese límite y no en uno más cómodo.",
    stack: ["Arquitectura", "Modelado de datos", "Plan por fases"],
    before: "",
    after: "",
    result:
      "Arquitectura y plan entregados; espera decisión del cliente.",
    image: "/img/caso-clinicas.jpg",
  },
  {
    id: "caso-5",
    status: "prototype",
    sector: "Club deportivo",
    title: "Prototipo navegable del sitio del club",
    problem:
      "El club comparaba varias propuestas y todas eran documentos que prometían exactamente lo mismo que el resto.",
    solution:
      "Prototipo navegable: se cambia de tipo de socio y el horario reetiqueta cada clase delante del usuario.",
    stack: ["HTML · CSS · JS", "Prototipo autocontenido"],
    before: "",
    after: "",
    result:
      "Algo que se toca convence más que un quinto documento.",
    image: "/img/caso-club.jpg",
  },
  {
    id: "caso-6",
    status: "prototype",
    sector: "Consultorios médicos",
    title: "Agente de IA para la agenda de citas",
    problem:
      "La agenda se lleva a mano y por teléfono. Fuera del horario de recepción cada llamada es una cita perdida.",
    solution:
      "Agente que agenda, reagenda y cancela por mensajería, valida disponibilidad y responde las preguntas.",
    stack: ["Agentes de IA", "API de mensajería", "Diseño de flujos"],
    before: "",
    after: "",
    result:
      "Arquitectura, flujos y prototipo de las pantallas de gestión.",
    image: "/img/caso-citas.jpg",
  },
];

export const statusLabel: Record<CaseStatus, string> = {
  reserved: "Espacio reservado",
  delivered: "Sistema entregado",
  prototype: "Arquitectura y prototipo",
};

/* ------------------------------------------------------------------
   EQUIPO — cada perfil completa sus propios datos.
------------------------------------------------------------------- */
export const team = [
  {
    id: "comercial",
    area: "Dirección comercial y consultoría",
    name: "Julio Carpio",
    /* BORRADOR — Julio tiene que aprobarlo o reescribirlo antes de publicar.
       Sirve para fijar el tono y la longitud (dos o tres líneas). */
    bio: "Desarrollo de mercado y relación con clientes en Latinoamérica. Se encarga del primer contacto, del levantamiento de la necesidad y de la negociación, y acompaña la cuenta después de la entrega.",
    capabilities: [
      "Desarrollo de mercado y captación",
      "Levantamiento de necesidades del cliente",
      "Análisis de negocio y propuesta de valor",
      "Negociación y cierre",
      "Relación y crecimiento de cuenta",
    ],
  },
  {
    id: "tecnica",
    area: "Dirección técnica y arquitectura",
    name: "Max Li",
    bio: "Desarrollo de extremo a extremo: análisis del problema, arquitectura, backend, frontend y puesta en producción. Plataformas entregadas y en operación en Brasil y España, con integraciones de IA, mensajería por WhatsApp y automatización de procesos.",
    capabilities: [
      "Análisis de viabilidad técnica",
      "Arquitectura de sistemas y datos",
      "Desarrollo frontend y backend",
      "Integraciones, IA y automatización",
      "Despliegue, seguridad y soporte",
    ],
  },
];

export const contact = {
  title: "Cuéntenos el problema.",
  titleAccent: "Nosotros estudiamos si vale la pena resolverlo.",
  body:
    "El diagnóstico inicial no tiene costo ni compromiso. Si al terminarlo concluimos que la tecnología no es la respuesta a su problema, se lo vamos a decir.",
  /** `href` opcional: si existe, el dato se vuelve un enlace. */
  fields: [
    {
      label: "Correo",
      value: "juliocarpio1981@gmail.com",
      href: "mailto:juliocarpio1981@gmail.com",
    },
    {
      /* Se etiqueta solo como WhatsApp: es un canal de mensajería, no un
         teléfono local. El +54 es temporal —el socio comercial está en
         Argentina hasta diciembre— y así no contradice la base en Venezuela. */
      label: "WhatsApp",
      value: "+54 11 2733 6369",
      href: "https://wa.me/541127336369",
    },
    {
      label: "Ubicación",
      /* La sociedad se constituye y opera desde Venezuela.
         Falta la ciudad: añadirla aquí en cuanto esté confirmada. */
      value: "Venezuela",
      note: "Proyectos en toda Latinoamérica",
    },
  ],
  cta: {
    label: "Solicitar diagnóstico",
    href:
      "mailto:juliocarpio1981@gmail.com?subject=" +
      encodeURIComponent("Solicitud de diagnóstico"),
  },
};
