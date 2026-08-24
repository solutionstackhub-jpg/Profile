import Image from "next/image";
import Reveal from "./Reveal";
import { stack } from "@/lib/content";

export default function Stack() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="eyebrow">Capacidad técnica</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              El stack
              <br />
              <span className="grad">completo.</span>
            </h2>
            <p className="mt-8 text-[1rem] leading-relaxed text-fg-2">
              La tecnología se elige según el problema, no según la moda. Estas son las
              herramientas con las que trabajamos y por las que respondemos.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="cine relative mt-12 hidden aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 lg:block">
              <Image src="/img/abstract-wave.jpg" alt="" fill sizes="30vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {stack.groups.map((g, i) => (
              <Reveal key={g.name} delay={i * 70}>
                <h3 className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">{g.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item} className="glass rounded-full px-3.5 py-1.5 text-[0.875rem] text-fg-2">{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Cinta de tecnologías. Vive aquí, con el resto de la capacidad
          técnica, y no en la portada: el cliente debe entender primero qué
          problema le resolvemos y qué gana, no con qué lo construimos. */}
      <div className="mt-16 overflow-hidden border-y border-white/6 py-4 lg:mt-24">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {stack.marquee.map((t) => (
                <li key={`${dup}-${t}`}
                  className="flex items-center gap-8 whitespace-nowrap px-4 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">
                  {t}
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
