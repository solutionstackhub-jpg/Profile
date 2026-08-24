import type { Metadata } from "next";
import { marks } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Propuestas de marca — ${brand.name}, ${brand.status.toLowerCase()}`,
  description:
    `${brand.name} es el candidato de marca. Tres direcciones de símbolo, paleta y tipografía, y la verificación pendiente antes del registro definitivo.`,
};

const palette = [
  { name: "Void", hex: "#05070B", note: "Fondo principal", style: { background: "#05070B", boxShadow: "inset 0 0 0 1px rgba(255,255,255,.12)" } },
  { name: "Surface", hex: "#0D1219", note: "Superficies y tarjetas", style: { background: "#0D1219", boxShadow: "inset 0 0 0 1px rgba(255,255,255,.1)" } },
  { name: "Texto", hex: "#EDF1F7", note: "Texto principal", style: { background: "#EDF1F7" } },
  { name: "Acento", hex: "#5B8CFF", note: "Acción y énfasis", style: { background: "#5B8CFF" } },
  { name: "Acento 2", hex: "#B57BFF", note: "Cierre del degradado", style: { background: "#B57BFF" } },
  { name: "Degradado", hex: "#5B8CFF → #B57BFF", note: "Palabras destacadas y botones", style: { background: "linear-gradient(96deg,#DCE7FF,#5B8CFF 52%,#B57BFF)" } },
];

export default function MarcaPage() {
  return (
    <main className="flex-1">
      {/* Encabezado */}
      <section className="relative overflow-hidden border-b border-white/8">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
        <div aria-hidden className="glow left-1/3 top-[-10rem] h-[34rem] w-[34rem] opacity-18"
          style={{ background: "radial-gradient(circle, #5B8CFF 0%, transparent 70%)" }} />
        <div className="shell relative py-28 lg:py-36">
          <a href="/" className="text-[0.875rem] text-fg-3 transition-colors hover:text-fg">← Volver al perfil</a>
          <span className="eyebrow mt-12 block">Identidad · {brand.status}</span>
          <h1 className="h-display mt-7 max-w-4xl text-[clamp(2.6rem,6vw,5rem)]">
            {brand.name}
            <br />
            <span className="grad">Tres direcciones de símbolo.</span>
          </h1>
          <p className="mt-9 max-w-xl text-[1.125rem] leading-relaxed text-fg-2">
            {brand.name} es el candidato de marca, todavía no una marca confirmada. El símbolo se
            diseñó para funcionar con cualquier nombre, de modo que si la verificación obliga a
            cambiarlo no hay que rehacer nada.
          </p>
        </div>
      </section>

      {/* Propuestas */}
      <section className="border-b border-white/8 py-24 lg:py-32">
        <div className="shell space-y-6">
          {marks.map(({ id, name, Mark, idea, rationale }, i) => (
            <Reveal key={id} as="article" delay={i * 100}>
              <div className="glass edge grid overflow-hidden rounded-2xl lg:grid-cols-12">
                <div className="flex items-center justify-center gap-9 border-b border-white/8 bg-void/60 p-16 lg:col-span-4 lg:border-b-0 lg:border-r">
                  <Mark className="h-24 w-24 text-fg" />
                  <div className="flex flex-col items-center gap-5 border-l border-white/10 pl-9">
                    <Mark className="h-9 w-9 text-fg" />
                    <Mark className="h-5 w-5 text-fg" />
                  </div>
                </div>

                <div className="flex items-center justify-center border-b border-white/8 bg-[#EDF1F7] p-16 lg:col-span-2 lg:border-b-0 lg:border-r">
                  <Mark className="h-16 w-16 text-[#05070B]" accent="#3457C8" />
                </div>

                <div className="p-10 lg:col-span-6 lg:p-12">
                  <div className="flex items-baseline gap-3.5">
                    <h2 className="h-sec text-[1.95rem]">{name}</h2>
                    <span className="font-mono text-[0.875rem] tracking-[0.12em] text-fg-3">0{i + 1}</span>
                  </div>
                  <span className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1.5 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-accent">
                    {idea}
                  </span>
                  <p className="mt-6 text-[1rem] leading-relaxed text-fg-2">{rationale}</p>

                  <div className="mt-9 flex items-center gap-3.5 border-t border-white/8 pt-8">
                    <Mark className="h-10 w-10 shrink-0 text-fg" />
                    <span className="h-sec text-[1.25rem] uppercase tracking-[0.12em] text-fg">
                      {brand.name}
                    </span>
                  </div>
                  <p className="mt-3.5 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">
                    Lockup aplicado · {brand.status}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nombre: descarte de NEXORA y verificación pendiente */}
      <section className="border-b border-white/8 py-24 lg:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">El nombre</span>
            <h2 className="h-sec mt-7 text-[clamp(2.1rem,4.4vw,3.2rem)]">
              Por qué se descartó
              <br />
              <span className="grad">NEXORA.</span>
            </h2>
            <p className="mt-7 text-[1rem] leading-relaxed text-fg-2">
              El motivo no es estético: NEXORA es un buen nombre, pero ya lo usan varias empresas
              del mismo sector —desarrollo de software, automatización, inteligencia artificial,
              sistemas empresariales y transformación digital—, con presencia incluso en el
              mercado tecnológico venezolano.
            </p>
            <ul className="mt-7 space-y-2.5">
              {[
                "Confusión comercial",
                "Dificultad de posicionamiento y diferenciación",
                "Desventaja en buscadores",
                "Posibles conflictos futuros de marca",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3.5 text-[0.9375rem] text-fg-2">
                  <span
                    className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "linear-gradient(96deg,#5B8CFF,#B57BFF)" }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <div className="glass edge rounded-2xl p-9 lg:p-11">
              <h3 className="h-sec text-[1.45rem]">
                Qué falta verificar antes de registrar {brand.name}
              </h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-fg-2">
                Hasta completar esta lista, la marca se presenta siempre como
                «{brand.name} — {brand.status}». No conviene invertir en registro ni en
                papelería antes de cerrarla.
              </p>
              <ul className="mt-8 space-y-4 border-t border-white/8 pt-8">
                {[
                  ["Registro marcario", "Clases relevantes en cada mercado objetivo"],
                  ["Dominios", ".com y los territoriales de los mercados objetivo"],
                  ["Denominaciones empresariales", "Registros de comercio de cada país"],
                  ["Redes sociales", "Disponibilidad del identificador en las principales"],
                  ["Conflictos comerciales", "Empresas activas del mismo sector"],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-5">
                    <span className="font-mono text-[0.875rem] text-fg-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[1rem] text-fg">{t}</span>
                      <span className="mt-1 block text-[0.875rem] text-fg-3">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Paleta */}
      <section className="border-b border-white/8 py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Paleta</span>
            <h2 className="h-sec mt-7 text-[clamp(2.1rem,4.4vw,3.4rem)]">
              Oscuro de base, <span className="grad">luz como acento.</span>
            </h2>
            <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-fg-2">
              El fondo casi negro deja que la fotografía y el degradado hagan el trabajo visual.
              El acento aparece una sola vez por pantalla, para que siga leyéndose como señal y
              no como decoración.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <div className="h-28 rounded-xl" style={c.style} />
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <span className="text-[0.9375rem] font-medium">{c.name}</span>
                  <span className="font-mono text-[0.875rem] text-fg-3">{c.hex}</span>
                </div>
                <p className="mt-1.5 text-[0.875rem] text-fg-3">{c.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tipografía */}
      <section className="py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Tipografía</span>
          </Reveal>
          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">Geist · titulares y texto</p>
              <p className="h-display mt-6 text-[4.5rem]">Aa</p>
              <p className="h-sec mt-5 text-[2.1rem]">Entendemos el problema</p>
              <p className="mt-4 text-[1rem] leading-relaxed text-fg-2">
                Grotesca neutra que aguanta tamaños muy grandes con tracking negativo sin perder
                legibilidad. Sostiene todo el documento, del titular al pie de página.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <p className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">Degradado · énfasis</p>
              <p className="h-display grad mt-6 text-[4.5rem]">Aa</p>
              <p className="h-sec grad mt-5 text-[2.1rem]">Construimos la tecnología</p>
              <p className="mt-4 text-[1rem] leading-relaxed text-fg-2">
                En lugar de cambiar de tipografía, el énfasis se marca con el degradado de marca
                sobre la última línea de cada titular. Un solo recurso, aplicado siempre igual.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
