import type { SVGProps } from "react";
import { brand } from "@/lib/content";

type MarkProps = SVGProps<SVGSVGElement> & {
  /** Color del elemento destacado. Por defecto, el verde menta de marca. */
  accent?: string;
};

/* ------------------------------------------------------------------
   PROPUESTA A — "Vértice"
   Cuatro ángulos que encuadran un núcleo. Lee como enfoque, precisión
   y diagnóstico: primero se delimita el problema, después se resuelve.
------------------------------------------------------------------- */
export function MarkVertice({ accent = "var(--color-accent)", ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11.5V6.5A2.5 2.5 0 0 1 6.5 4h5" />
        <path d="M20.5 4h5A2.5 2.5 0 0 1 28 6.5v5" />
        <path d="M28 20.5v5a2.5 2.5 0 0 1-2.5 2.5h-5" />
        <path d="M11.5 28h-5A2.5 2.5 0 0 1 4 25.5v-5" />
      </g>
      <path d="M16 10.4 21.6 16 16 21.6 10.4 16Z" fill={accent} />
    </svg>
  );
}

/* ------------------------------------------------------------------
   PROPUESTA B — "Enlace"
   Dos módulos que se cruzan. Lee como integración: sistemas distintos
   que empiezan a hablar entre sí.
------------------------------------------------------------------- */
export function MarkEnlace({ accent = "var(--color-accent)", ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.2" y="3.2" width="17" height="17" rx="5"
        stroke="currentColor" strokeWidth="2.1"
      />
      <rect
        x="11.8" y="11.8" width="17" height="17" rx="5"
        stroke={accent} strokeWidth="2.1"
      />
      <path d="M16 16h4.2v4.2H16Z" fill={accent} />
    </svg>
  );
}

/* ------------------------------------------------------------------
   PROPUESTA C — "Escala"
   Tres niveles ascendentes; el último rompe el marco. Lee como
   crecimiento por etapas: proyecto, proceso, producto.
------------------------------------------------------------------- */
export function MarkEscala({ accent = "var(--color-accent)", ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M28 12V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4"
        stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M10.5 22.5v-4" />
        <path d="M16 22.5v-8" />
      </g>
      <path d="M21.5 22.5V10.5" stroke={accent} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="21.5" cy="5.6" r="2.4" fill={accent} />
    </svg>
  );
}

export const marks = [
  {
    id: "vertice",
    name: "Vértice",
    Mark: MarkVertice,
    idea: "Enfoque y diagnóstico",
    rationale:
      "Cuatro ángulos encuadran un núcleo. Comunica que el trabajo empieza delimitando el problema, no escribiendo código.",
  },
  {
    id: "enlace",
    name: "Enlace",
    Mark: MarkEnlace,
    idea: "Integración de sistemas",
    rationale:
      "Dos módulos que se cruzan y comparten un centro. Comunica conectar lo que la empresa ya tiene en lugar de reemplazarlo todo.",
  },
  {
    id: "escala",
    name: "Escala",
    Mark: MarkEscala,
    idea: "Crecimiento por etapas",
    rationale:
      "Tres niveles ascendentes y uno que rompe el marco. Comunica la secuencia proyecto → proceso → producto.",
  },
] as const;

/* ------------------------------------------------------------------
   Lockup: símbolo + nombre. El nombre sale de `brand` en content.ts,
   de modo que cambiarlo en un solo sitio lo cambia en toda la página.
------------------------------------------------------------------- */
export function Logo({
  className = "",
  showTagline = false,
  name = brand.name,
}: {
  className?: string;
  showTagline?: boolean;
  name?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <MarkVertice className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.9375rem] font-medium tracking-[0.12em] uppercase">{name}</span>
        {showTagline && (
          <span className="mt-1.5 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3">
            {brand.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
