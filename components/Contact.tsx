import Image from "next/image";
import Reveal from "./Reveal";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contacto" className="relative isolate overflow-hidden">
      <div className="cine cine-side absolute inset-0">
        <Image src="/img/band-skyline.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>

      <div className="relative z-10 shell grid gap-12 py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">Contacto</span>
            <h2 className="h-sec mt-7 text-[clamp(2.2rem,5vw,4.2rem)]">
              {contact.title}
              <br />
              <span className="grad">{contact.titleAccent}</span>
            </h2>
            <p className="on-photo mt-9 max-w-lg text-[1.125rem] leading-relaxed text-fg-2">{contact.body}</p>
          </Reveal>

          <Reveal delay={140}>
            <a href={contact.cta.href}
              className="btn-grad group mt-11 inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-medium">
              {contact.cta.label}
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                <path d="M2 8h11m0 0-4.5-4.5M13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.7"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5" />
              </svg>
            </a>
            <p className="mt-4 text-[0.875rem] text-fg-3">{contact.cta.hint}</p>
          </Reveal>
        </div>

        <Reveal delay={180} className="lg:col-span-4 lg:col-start-9">
          <div className="glass-solid edge rounded-2xl p-8">
            <dl className="divide-y divide-white/8">
              {contact.fields.map((f, i) => (
                <div key={f.label} className={i === 0 ? "pb-5" : "py-5 last:pb-0"}>
                  <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-2">{f.label}</dt>
                  <dd className="mt-2.5 text-[1.125rem] text-fg">
                    {"href" in f && f.href ? (
                      <a
                        href={f.href}
                        className="underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                  {"note" in f && f.note && (
                    <dd className="mt-1 text-[0.875rem] text-fg-3">{f.note}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
