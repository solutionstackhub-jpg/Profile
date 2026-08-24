"use client";

import { useEffect, useRef } from "react";

/**
 * Estela de luz que sigue al cursor.
 *
 * En vez de dibujar partículas —que ensucian y cuestan— se apilan cinco halos
 * radiales que persiguen al puntero a velocidades distintas. Al mover el ratón
 * se abren a lo largo del recorrido; al parar, se cierran sobre un único punto.
 * Se mezclan en modo `screen`, así que suman luz sobre el fondo oscuro en vez
 * de pintar encima: por eso se lee como algo limpio y no como una mancha.
 *
 * El bucle escribe directamente sobre `style.transform`, sin pasar por el
 * estado de React: cero renders y el trabajo se queda en la GPU.
 */

/** De fuera hacia dentro: cuanto más grande, más lento y más difuso. */
const CAPAS = [
  { tam: 560, alfa: 0.13, seguimiento: 0.055, rgb: "70, 125, 255" },
  { tam: 400, alfa: 0.12, seguimiento: 0.095, rgb: "105, 155, 255" },
  { tam: 260, alfa: 0.11, seguimiento: 0.16, rgb: "145, 185, 255" },
  { tam: 150, alfa: 0.12, seguimiento: 0.30, rgb: "195, 220, 255" },
  { tam: 70, alfa: 0.16, seguimiento: 0.55, rgb: "232, 243, 255" },
];

const FUERA = -9999;

export default function CursorGlow() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cont = raiz.current;
    if (!cont) return;

    const capas = Array.from(cont.children) as HTMLElement[];
    const pos = CAPAS.map(() => ({ x: FUERA, y: FUERA }));
    const destino = { x: FUERA, y: FUERA };

    let activo = false; // ¿el efecto está enganchado a los eventos?
    let visible = false; // ¿hay un cursor conocido en pantalla?
    let raf = 0;

    /* Coloca todos los halos de golpe bajo el cursor. Se usa al entrar y al
       volver a la pestaña, para que la estela no cruce la pantalla de lado a
       lado como un latigazo. */
    const situar = (x: number, y: number) => {
      for (const p of pos) {
        p.x = x;
        p.y = y;
      }
    };

    const pintar = () => {
      for (let i = 0; i < capas.length; i++) {
        const p = pos[i];
        const s = CAPAS[i].seguimiento;
        p.x += (destino.x - p.x) * s;
        p.y += (destino.y - p.y) * s;
        capas[i].style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const bucle = () => {
      pintar();
      raf = requestAnimationFrame(bucle);
    };
    const arrancarBucle = () => {
      if (!raf) raf = requestAnimationFrame(bucle);
    };
    const pararBucle = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const mostrar = () => {
      visible = true;
      cont.style.opacity = "1";
      arrancarBucle();
    };
    const ocultar = () => {
      visible = false;
      cont.style.opacity = "0";
      // El bucle sigue un momento para que el fundido no congele los halos.
    };

    const onMove = (e: MouseEvent) => {
      destino.x = e.clientX;
      destino.y = e.clientY;
      if (!visible) {
        situar(destino.x, destino.y);
        mostrar();
      }
    };

    /* El cursor sale de la ventana o el navegador pierde el foco. */
    const onSalir = () => ocultar();

    /* Pestaña oculta: se detiene el bucle. Al volver, la estela espera al
       siguiente movimiento para recolocarse; si no, aparecería en el punto
       donde estaba hace diez minutos. */
    const onVisibilidad = () => {
      if (document.hidden) {
        ocultar();
        pararBucle();
      } else {
        situar(FUERA, FUERA);
        destino.x = FUERA;
        destino.y = FUERA;
        arrancarBucle();
      }
    };

    const enganchar = () => {
      if (activo) return;
      activo = true;
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onSalir);
      window.addEventListener("blur", onSalir);
      document.addEventListener("visibilitychange", onVisibilidad);
      arrancarBucle();
    };

    const soltar = () => {
      if (!activo) return;
      activo = false;
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onSalir);
      window.removeEventListener("blur", onSalir);
      document.removeEventListener("visibilitychange", onVisibilidad);
      pararBucle();
      ocultar();
      situar(FUERA, FUERA);
      pintar();
    };

    /* Dos condiciones deciden si el efecto existe, y las dos pueden cambiar
       mientras la página está abierta: conectar un ratón a una tableta, o
       activar «reducir movimiento» en el sistema. Por eso se escuchan. */
    const hayRaton = window.matchMedia("(pointer: fine)");
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");

    const revisar = () => {
      if (hayRaton.matches && !menosMovimiento.matches) enganchar();
      else soltar();
    };

    revisar();
    hayRaton.addEventListener("change", revisar);
    menosMovimiento.addEventListener("change", revisar);

    return () => {
      hayRaton.removeEventListener("change", revisar);
      menosMovimiento.removeEventListener("change", revisar);
      soltar();
    };
  }, []);

  return (
    <div
      ref={raiz}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-500 print:hidden"
    >
      {CAPAS.map((c, i) => (
        <span
          key={i}
          className="absolute left-0 top-0 block rounded-full will-change-transform"
          style={{
            width: c.tam,
            height: c.tam,
            transform: `translate3d(${FUERA}px, ${FUERA}px, 0) translate(-50%, -50%)`,
            background: `radial-gradient(circle closest-side, rgba(${c.rgb}, ${c.alfa}), rgba(${c.rgb}, 0) 100%)`,
          }}
        />
      ))}
    </div>
  );
}
