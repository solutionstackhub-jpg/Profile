"use client";

import { useEffect, useRef } from "react";

/**
 * Estela de luz que sigue al cursor.
 *
 * En vez de dibujar partículas —que ensucian y cuestan— se apilan cinco halos
 * radiales que persiguen al puntero a velocidades distintas. Al mover el ratón
 * se abren a lo largo del recorrido; al parar, se cierran sobre un único punto.
 * Se mezclan en modo `screen`, así que suman luz sobre el fondo oscuro en lugar
 * de pintar encima: por eso se lee como algo limpio y no como una mancha.
 *
 * El bucle escribe directamente sobre `style.transform`; no pasa por el estado
 * de React, de modo que no provoca renders y se mantiene a 60 fps.
 */

/** De fuera hacia dentro: cuanto más grande, más lento y más difuso. */
const CAPAS = [
  { tam: 560, alfa: 0.13, seguimiento: 0.055, rgb: "70, 125, 255" },
  { tam: 400, alfa: 0.12, seguimiento: 0.095, rgb: "105, 155, 255" },
  { tam: 260, alfa: 0.11, seguimiento: 0.16, rgb: "145, 185, 255" },
  { tam: 150, alfa: 0.12, seguimiento: 0.30, rgb: "195, 220, 255" },
  { tam: 70, alfa: 0.16, seguimiento: 0.55, rgb: "232, 243, 255" },
];

export default function CursorGlow() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sin ratón (móvil, tableta) o con movimiento reducido, no se monta nada.
    const finoPuntero = window.matchMedia("(pointer: fine)");
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finoPuntero.matches || menosMovimiento.matches) return;

    const cont = raiz.current;
    if (!cont) return;

    const capas = Array.from(cont.children) as HTMLElement[];
    const pos = CAPAS.map(() => ({ x: -9999, y: -9999 }));
    const destino = { x: -9999, y: -9999 };
    let visible = false;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      destino.x = e.clientX;
      destino.y = e.clientY;
      if (!visible) {
        // Primer movimiento: colocar todo bajo el cursor para que aparezca
        // ahí mismo y no venga volando desde una esquina.
        pos.forEach((p) => {
          p.x = destino.x;
          p.y = destino.y;
        });
        visible = true;
        cont.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible = false;
      cont.style.opacity = "0";
    };

    const tick = () => {
      for (let i = 0; i < capas.length; i++) {
        const p = pos[i];
        const e = CAPAS[i].seguimiento;
        p.x += (destino.x - p.x) * e;
        p.y += (destino.y - p.y) * e;
        capas[i].style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return (
    <div
      ref={raiz}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-500"
      style={{ mixBlendMode: "screen" }}
    >
      {CAPAS.map((c, i) => (
        <span
          key={i}
          className="absolute left-0 top-0 block rounded-full will-change-transform"
          style={{
            width: c.tam,
            height: c.tam,
            transform: "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
            background: `radial-gradient(circle closest-side, rgba(${c.rgb}, ${c.alfa}), rgba(${c.rgb}, 0) 100%)`,
          }}
        />
      ))}
    </div>
  );
}
