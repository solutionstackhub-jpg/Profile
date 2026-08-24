"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

const IDS = nav.map((n) => n.href.replace("#", ""));

/**
 * Decide qué sección está activa a partir de la geometría ya medida.
 * Es una función pura para poder probarla sin navegador: la lógica del
 * indicador es lo único que no se puede verificar mirando una captura.
 *
 * @param tops  secciones en orden del documento, con su `top` relativo a la ventana
 * @param line  altura de la "línea de lectura" en píxeles
 * @param atBottom  si la página ya está al final
 */
export function pickActiveId(
  tops: { id: string; top: number }[],
  line: number,
  atBottom: boolean,
): string | null {
  let current: string | null = null;
  for (const s of tops) if (s.top <= line) current = s.id;
  // Al final de la página la última sección gana aunque no cruce la línea.
  if (atBottom && tops.length) current = tops[tops.length - 1].id;
  return current;
}

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  /* Un solo oyente de scroll resuelve las dos cosas: el fondo de la barra y
     la sección activa.

     No se usa IntersectionObserver a propósito. Se midió que en algunos
     entornos no entrega callbacks, y entonces la barra se queda sin indicar
     nada. Comparar posiciones con getBoundingClientRect es determinista y
     funciona en cualquier navegador. */
  useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const update = () => {
      setSolid(window.scrollY > 32);

      // Línea de lectura: un 30 % por debajo del borde superior.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      setActive(
        pickActiveId(
          els.map((el) => ({ id: el.id, top: el.getBoundingClientRect().top })),
          window.innerHeight * 0.3,
          atBottom,
        ),
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-white/10 bg-void/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      {/* Velo permanente: arriba la barra flota sobre la fotografía y sin él
          el texto se pierde contra las luces de la ciudad. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 transition-opacity duration-500 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
        style={{ background: "linear-gradient(to bottom, rgba(5,7,11,.85), transparent)" }}
      />

      <div className="shell relative flex h-20 items-center justify-between gap-6">
        <a href="#top" className="transition-opacity hover:opacity-70">
          <Logo />
        </a>

        {/* Grupo de pestañas en vidrio: le da fondo propio al texto y aloja
            el indicador de la pestaña activa. */}
        <nav className="glass hidden items-center gap-0.5 rounded-full p-1.5 lg:flex">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const on = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={on ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                  on ? "text-fg" : "text-fg-2 hover:text-fg"
                }`}
              >
                {/* Fondo de la pestaña activa */}
                {on && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-white/10"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,.10)" }}
                  />
                )}
                {/* Hover: mismo fondo, más tenue */}
                {!on && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-200 hover:bg-white/[.06]"
                  />
                )}
                <span className="relative">{item.label}</span>
                {/* Marca luminosa bajo la pestaña activa */}
                {on && (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 -bottom-px h-px"
                    style={{
                      background: "var(--color-accent)",
                      boxShadow: "0 0 8px 1px rgba(91,140,255,.75)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="btn-grad relative hidden overflow-hidden rounded-full px-5 py-2.5 text-[0.875rem] font-semibold sm:inline-flex"
          >
            Solicitar diagnóstico
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            aria-expanded={open}
            className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 block h-px w-4 bg-fg transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 block h-px w-4 bg-fg transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="relative border-t border-white/10 bg-void/95 backdrop-blur-xl lg:hidden">
          <nav className="shell flex flex-col py-2">
            {nav.map((item) => {
              const on = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={on ? "true" : undefined}
                  className={`flex items-center gap-3 border-b border-white/8 py-4 text-[0.9375rem] font-medium last:border-0 ${
                    on ? "text-fg" : "text-fg-2"
                  }`}
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full transition-all"
                    style={
                      on
                        ? { background: "var(--color-accent)", boxShadow: "0 0 7px 1px rgba(91,140,255,.8)" }
                        : { background: "rgba(255,255,255,.16)" }
                    }
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
