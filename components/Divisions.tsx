import Reveal from "./Reveal";
import { divisions } from "@/lib/content";

export default function Divisions() {
  return (
    <section id="divisiones" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden className="glow left-[-14%] top-1/3 h-[34rem] w-[34rem] opacity-14"
        style={{ background: "radial-gradient(circle, #5B8CFF 0%, transparent 70%)" }} />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Qué hacemos</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Cuatro áreas.
              <br />
              <span className="grad">Una sola conversación.</span>
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-[1.125rem] leading-relaxed text-fg-2">
              Muchas empresas llegan sin saber si necesita una web, un sistema interno o
              automatizar un proceso. Y no tienen por qué saberlo. Ese diagnóstico es nuestro
              trabajo: usted describe el problema, nosotros determinamos cuál de estas cuatro
              áreas —o cuáles— lo resuelven.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
          {divisions.map((d, i) => (
            <Reveal key={d.id} delay={i * 90} as="article">
              <div className="glass edge group relative h-full overflow-hidden rounded-2xl p-9 transition-colors duration-500 hover:border-white/20 lg:p-12">
                <div aria-hidden
                  className="glow -right-24 -top-24 h-72 w-72 opacity-0 transition-opacity duration-700 group-hover:opacity-24"
                  style={{ background: "radial-gradient(circle, #5B8CFF 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="h-sec text-[1.95rem]">{d.name}</h3>
                    <span className="font-mono text-[0.875rem] tracking-[0.12em] text-fg-3 transition-colors duration-500 group-hover:text-accent">
                      {d.index}
                    </span>
                  </div>
                  <p className="mt-5 text-[1rem] leading-relaxed text-fg-2">{d.summary}</p>
                  <ul className="mt-8 space-y-3 border-t border-white/8 pt-8">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3.5 text-[0.9375rem] text-fg-2">
                        <span className="dot-grad mt-[0.5rem] h-1 w-1 shrink-0 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
