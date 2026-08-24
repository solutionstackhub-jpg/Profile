import Image from "next/image";
import Reveal from "./Reveal";
import { cases, statusLabel, type CaseStudy } from "@/lib/content";

const FIELDS = ["Sector", "El problema", "Lo que construimos", "Stack", "Antes → Después", "Resultado"] as const;

function ReservedCard({ n }: { n: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-white/12 transition-colors duration-500 hover:border-accent/40">
      <div className="slot-frame relative flex aspect-[16/10] items-center justify-center border-b border-dashed border-white/12 bg-white/[.02]">
        <div className="flex flex-col items-center gap-3.5">
          <span className="glass flex h-12 w-12 items-center justify-center rounded-full text-fg-3 transition-colors duration-500 group-hover:text-accent">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">
            Imagen del caso {String(n).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="flex flex-col p-7">
        <span className="inline-flex w-fit rounded-full border border-white/10 px-3 py-1 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">
          {statusLabel.reserved}
        </span>
        <ul className="mt-7 flex-1 space-y-4">
          {FIELDS.map((f) => (
            <li key={f} className="flex items-center gap-4">
              <span className="w-[7.5rem] shrink-0 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">{f}</span>
              <span className="h-px flex-1 bg-white/8" />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FilledCard({ item }: { item: CaseStudy }) {
  return (
    <article className="glass edge group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-500 hover:border-white/20">
      <div className="cine relative aspect-[16/9] border-b border-white/8">
        {item.image && (
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className={`inline-flex rounded-full px-2.5 py-0.5 font-mono text-[0.75rem] uppercase tracking-[0.1em] ${
            item.status === "delivered" ? "border border-accent/30 bg-accent/10 text-accent" : "border border-white/10 text-fg-3"}`}>
            {statusLabel[item.status]}
          </span>
          {item.sector && (
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-fg-3">{item.sector}</span>
          )}
        </div>

        <h3 className="h-sec mt-4 text-[1.3rem]">{item.title}</h3>

        {/* Etiqueta en línea con el texto: apilarla encima costaba dos
            renglones por campo y estiraba la tarjeta sin aportar nada. */}
        <div className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed text-fg-2">
          <p>
            <span className="mr-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-fg-3">
              Problema
            </span>
            {item.problem}
          </p>
          <p>
            <span className="mr-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-fg-3">
              Solución
            </span>
            {item.solution}
          </p>
        </div>

        {/* Antes → Después en una sola línea, no en una caja de dos columnas. */}
        {(item.before || item.after) && (
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 text-[0.875rem]">
            <span className="text-fg-3">{item.before}</span>
            <span className="text-fg-3">→</span>
            <span className="font-medium text-fg">{item.after}</span>
          </p>
        )}

        {/* El resultado de negocio va antes que el stack: el cliente decide
            por lo que gana, no por las herramientas. La tecnología cierra la
            ficha como respaldo, anclada al pie para que las tarjetas cuadren. */}
        {item.result && (
          <p className="mt-5 border-t border-white/8 pt-5 text-[0.9375rem] text-accent">
            {item.result}
          </p>
        )}

        {item.stack.length > 0 && (
          <p className="mt-auto pt-5 text-[0.8125rem] leading-relaxed text-fg-3">
            {item.stack.join("  ·  ")}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Cases() {
  const pending = cases.filter((c) => c.status === "reserved").length;

  return (
    <section id="casos" className="relative overflow-hidden py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Casos</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Lo que hemos
              <br />
              <span className="grad">construido.</span>
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-[1.125rem] leading-relaxed text-fg-2">
              Cada caso se presenta con la misma estructura: el problema que tenía la empresa, lo
              que construimos, con qué lo construimos y qué cambió después. Distinguimos siempre
              entre sistemas entregados y en operación, y trabajos de arquitectura y prototipo.
            </p>
          </Reveal>
        </div>

        {/* Rejilla normal con alturas iguales. Funciona porque los textos de
            las seis fichas están escritos al mismo presupuesto de caracteres:
            si el contenido no se iguala, ninguna maquetación lo arregla. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 90}>
              {item.status === "reserved" ? <ReservedCard n={i + 1} /> : <FilledCard item={item} />}
            </Reveal>
          ))}
        </div>

        {pending > 0 && (
          <Reveal delay={140}>
            <p className="mt-9 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">
              {pending} espacios reservados para los primeros casos
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
