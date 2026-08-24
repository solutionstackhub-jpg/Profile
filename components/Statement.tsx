import Image from "next/image";
import Reveal from "./Reveal";
import { brand } from "@/lib/content";

export default function Statement() {
  return (
    <section className="relative isolate flex min-h-[26rem] items-center overflow-hidden lg:min-h-[34rem]">
      <div className="cine cine-side absolute inset-0">
        <Image src="/img/band-aerial.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>

      <div className="relative z-10 shell py-20 lg:py-28">
        <Reveal>
          <p className="on-photo mb-7 text-[1.05rem] font-medium text-fg-2">{brand.pillar}</p>
        </Reveal>
        <Reveal delay={70}>
          <p className="h-display max-w-5xl text-[clamp(2.1rem,5.4vw,4.6rem)]">
            Entendemos el problema.
            <br />
            Diseñamos la solución.
            <br />
            <span className="grad">Construimos la tecnología.</span>
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="on-photo mt-10 max-w-md text-[1rem] leading-relaxed text-fg-2">
            Un mismo equipo desde el diagnóstico hasta el soporte, sin traspasos ni
            intermediarios que diluyan la responsabilidad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
