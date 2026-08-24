import Reveal from "./Reveal";
import { outcomes } from "@/lib/content";

/* El resto del sitio explica qué hacemos y cómo trabajamos.
   Esta sección responde qué gana el cliente. */
export default function Outcomes() {
  return (
    <section id="resultados" className="relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden
        className="glow right-[-14%] top-1/4 h-[34rem] w-[34rem] opacity-12"
        style={{ background: "radial-gradient(circle, #B57BFF 0%, transparent 70%)" }}
      />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">{outcomes.eyebrow}</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              {outcomes.title}
              <br />
              <span className="grad">{outcomes.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-[1.125rem] leading-relaxed text-fg-2">{outcomes.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {outcomes.items.map((o, i) => (
            <Reveal key={o.index} as="li" delay={i * 80}>
              <div className="glass edge group h-full rounded-2xl p-8 transition-colors duration-500 hover:border-white/20">
                <span className="grad h-display block text-[2.6rem] leading-none">
                  {o.index}
                </span>
                <h3 className="h-sec mt-7 text-[1.25rem]">{o.title}</h3>
                <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-fg-2">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
