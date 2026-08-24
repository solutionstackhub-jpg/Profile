import Reveal from "./Reveal";
import { assurances } from "@/lib/content";

export default function Assurances() {
  return (
    <section id="garantias" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden className="glow left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 opacity-14"
        style={{ background: "radial-gradient(circle, #5B8CFF 0%, transparent 70%)" }} />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Garantías</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Por qué su proyecto
              <br />
              <span className="grad">va a llegar a producción.</span>
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-[1.125rem] leading-relaxed text-fg-2">
              El riesgo real de contratar desarrollo no es el precio. Es pagar por algo que nunca
              se termina, que el equipo no usa, o que lo deja atado de por vida a un proveedor.
              Estas seis reglas existen para eliminar ese riesgo, y quedan por escrito antes de
              empezar.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {assurances.map((a, i) => (
            <Reveal key={a.title} as="li" delay={i * 70}>
              <div className="glass edge group h-full rounded-2xl p-8 transition-colors duration-500 hover:border-white/20 lg:p-9">
                <span className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(140deg, rgba(91,140,255,.28), rgba(181,123,255,.18))",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,.14)",
                  }}>
                  <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 text-accent" fill="none" aria-hidden>
                    <path d="M3 7.3 5.7 10 11 4.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="h-sec mt-7 text-[1.25rem]">{a.title}</h3>
                <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-fg-2">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
