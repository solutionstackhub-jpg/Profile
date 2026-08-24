import Reveal from "./Reveal";
import { team } from "@/lib/content";

/** Iniciales del nombre. Si aún es un marcador entre corchetes, devuelve «—». */
function initials(name: string): string {
  const limpio = name.replace(/\[.*?\]/g, "").trim();
  if (!limpio) return "—";
  return limpio
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Team() {
  return (
    <section id="equipo" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="glow left-[-12%] bottom-0 h-[34rem] w-[34rem] opacity-12"
        style={{ background: "radial-gradient(circle, #B57BFF 0%, transparent 70%)" }} />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Equipo</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Dos responsables.
              <br />
              <span className="grad">Sin intermediarios.</span>
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-[1.125rem] leading-relaxed text-fg-2">
              Usted habla directamente con quien entiende su negocio y con quien escribe el
              código. Nadie traduce, nadie reinterpreta y nadie se escuda en un tercero cuando
              hay que responder.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {team.map((p, i) => (
            <Reveal key={p.id} as="article" delay={i * 110}>
              <div className="glass edge flex h-full flex-col rounded-2xl p-9 lg:p-11">
                <div className="flex items-start gap-6">
                  {/* Monograma mientras no haya retrato. Un círculo vacío con la
                      palabra «Foto» deja la tarjeta con aspecto de sin terminar;
                      las iniciales se leen como una decisión de diseño. Cuando
                      exista la fotografía, basta rellenar `photo` en content.ts. */}
                  <div className="relative h-24 w-24 shrink-0">
                    <div
                      className="flex h-full w-full items-center justify-center rounded-full"
                      style={{
                        background:
                          "linear-gradient(150deg, rgba(91,140,255,.16), rgba(181,123,255,.10))",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.14)",
                      }}
                    >
                      <span className="h-sec text-[1.7rem] tracking-[-0.02em] text-fg">
                        {initials(p.name)}
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 pt-2">
                    <span className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-accent">{p.area}</span>
                    <h3 className="h-sec mt-3 text-[1.7rem]">{p.name}</h3>
                  </div>
                </div>

                <p className="mt-8 rounded-xl border border-dashed border-white/12 bg-white/[.02] p-5 text-[0.9375rem] leading-relaxed text-fg-3">
                  {p.bio}
                </p>

                <ul className="mt-8 space-y-3 border-t border-white/8 pt-8">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3.5 text-[0.9375rem] text-fg-2">
                      <span className="dot-grad mt-[0.5rem] h-1 w-1 shrink-0 rounded-full" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
