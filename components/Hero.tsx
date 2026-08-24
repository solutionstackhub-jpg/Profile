import Image from "next/image";
import Reveal from "./Reveal";
import { brand, hero, commitments } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative isolate">
      {/* ---- Plano cinematográfico a sangre ---- */}
      <div className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="cine cine-side absolute inset-0">
          <Image
            src="/img/hero-city.jpg"
            alt="Vista aérea nocturna de una ciudad: infraestructura, flujo y sistemas conectados"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Luces de acento */}
        <div aria-hidden className="glow -top-32 left-[-12%] h-[36rem] w-[36rem] opacity-24"
          style={{ background: "radial-gradient(circle, #5B8CFF 0%, transparent 70%)" }} />
        <div aria-hidden className="glow bottom-[-18rem] right-[-10%] h-[42rem] w-[42rem] opacity-20"
          style={{ background: "radial-gradient(circle, #B57BFF 0%, transparent 70%)" }} />

        {/* ---- Titular ---- */}
        <div className="relative z-10 shell pb-20 pt-40 lg:pb-24">
          <Reveal>
            <span className="eyebrow">{hero.eyebrow}</span>
          </Reveal>

          <Reveal delay={90}>
            <p className="on-photo mt-8 flex items-center gap-3.5 text-[1.2rem] font-medium text-fg">
              <span aria-hidden className="h-5 w-px shrink-0 bg-accent" />
              {brand.pillar}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="h-display mt-3 text-[clamp(3rem,8.6vw,7.5rem)]">
              {hero.titleTop}
              <br />
              {hero.titleMid}
              <br />
              <span className="grad">{hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={230}>
            <p className="on-photo mt-10 max-w-xl text-[1.125rem] leading-relaxed text-fg-2">{hero.body}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-11 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="btn-grad group inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-medium"
              >
                {hero.primaryCta.label}
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                  <path d="M2 8h11m0 0-4.5-4.5M13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5" />
                </svg>
              </a>
              <a href={hero.secondaryCta.href}
                className="glass inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-medium text-fg transition-colors hover:border-white/25">
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---- Franja de compromisos, montada sobre la imagen ---- */}
      <div className="relative z-20 -mt-px">
        <div className="shell">
          <div className="glass-solid edge -mt-16 overflow-hidden rounded-2xl lg:-mt-20">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {commitments.map((c, i) => (
                <Reveal
                  key={c.value}
                  delay={i * 80}
                  className={`px-7 py-8 lg:px-9 lg:py-10 ${
                    i < 2 ? "border-b border-white/8 lg:border-b-0" : ""
                  } ${i % 2 === 0 ? "border-r border-white/8" : ""} ${
                    i === 1 ? "lg:border-r lg:border-white/8" : ""
                  } ${i === 2 ? "lg:border-r lg:border-white/8" : ""}`}
                >
                  <dt className="h-sec text-[1.95rem] text-fg">{c.value}</dt>
                  <dd className="mt-2 text-[0.875rem] leading-snug text-fg-3">{c.label}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>

    </section>
  );
}
