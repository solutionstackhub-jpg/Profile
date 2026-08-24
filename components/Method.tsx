import Reveal from "./Reveal";
import { method } from "@/lib/content";

export default function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="glow right-[-16%] top-1/4 h-[38rem] w-[38rem] opacity-13"
        style={{ background: "radial-gradient(circle, #B57BFF 0%, transparent 70%)" }} />

      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow">Método</span>
              <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
                Cinco etapas.
                <br />
                <span className="grad">Ninguna se salta.</span>
              </h2>
              <p className="mt-8 max-w-sm text-[1rem] leading-relaxed text-fg-2">
                Los proyectos de software no fracasan por falta de talento. Fracasan porque se
                empieza a construir antes de entender, y porque el cliente descubre el resultado
                cuando ya es tarde para corregirlo. Este método existe para eliminar esas dos
                causas.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="relative lg:col-span-7 lg:col-start-6">
          <span aria-hidden className="absolute bottom-4 left-[1.35rem] top-4 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(91,140,255,.55) 12%, rgba(181,123,255,.45) 82%, transparent)" }} />
          {method.map((m, i) => (
            <Reveal key={m.step} as="li" delay={i * 80} className="relative pb-10 pl-20 last:pb-0">
              <span className="glass absolute left-0 top-0 flex h-[2.7rem] w-[2.7rem] items-center justify-center rounded-full font-mono text-[0.875rem] text-fg-2">
                {m.step}
              </span>
              <h3 className="h-sec text-[1.7rem]">{m.title}</h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-fg-2">{m.body}</p>
              <span className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-[0.875rem] font-medium tracking-wide text-accent">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                  <path d="M2.5 6.2 4.8 8.5 9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {m.deliverable}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
