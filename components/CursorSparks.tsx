"use client";

import { useEffect, useRef } from "react";

/**
 * Chispas que estallan al mover el cursor.
 *
 * Cada cierto tramo recorrido se lanza un pequeño estallido radial: las
 * partículas salen en todas direcciones, frenan, caen un poco y se apagan.
 * El dibujo va en canvas con composición `lighter`, así que las chispas SUMAN
 * luz —se encienden donde se cruzan— en vez de taparse unas a otras. Es lo que
 * separa un fuego artificial de un puñado de confeti.
 *
 * Para que no pese: en lugar de calcular un degradado por partícula y por
 * fotograma, se dibuja UNA vez un sprite de luz y luego solo se copia escalado.
 */

const MAX_PARTICULAS = 500;
/** Píxeles de recorrido del ratón entre estallido y estallido. */
const TRAMO = 34;
/** Chispas por estallido. */
const POR_ESTALLIDO = [9, 15] as const;

/** Paleta fría: blancos y azules. Es lo que lo mantiene limpio y no festivo-barato. */
const COLORES = [
  [232, 243, 255],
  [186, 214, 255],
  [138, 176, 255],
  [96, 142, 255],
] as const;

type Chispa = {
  x: number; y: number;
  vx: number; vy: number;
  vida: number; maxVida: number;
  radio: number;
  sprite: number;
  rgb: readonly [number, number, number];
};

const azar = (a: number, b: number) => a + Math.random() * (b - a);

export default function CursorSparks() {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = lienzo.current;
    if (!cv) return;
    const ctx = cv.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = 1;
    let ancho = 0;
    let alto = 0;

    /* Un sprite de luz POR COLOR, dibujado una sola vez al montar.
       `drawImage` ignora `fillStyle`, así que un único sprite blanco saldría
       blanco siempre; teñirlo en cada fotograma costaría un composite extra
       por partícula. Cuatro sprites resuelven las dos cosas. */
    const S = 64;
    const sprites = COLORES.map(([r, g, b]) => {
      const c = document.createElement("canvas");
      c.width = c.height = S;
      const sc = c.getContext("2d")!;
      const grad = sc.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
      grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
      grad.addColorStop(0.25, `rgba(${r},${g},${b},0.5)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      sc.fillStyle = grad;
      sc.fillRect(0, 0, S, S);
      return c;
    });

    const chispas: Chispa[] = [];
    let ultX = 0, ultY = 0, acumulado = 0, hayUltimo = false;
    let raf = 0;
    let activo = false;

    const medir = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = window.innerWidth;
      alto = window.innerHeight;
      cv.width = Math.round(ancho * dpr);
      cv.height = Math.round(alto * dpr);
      cv.style.width = `${ancho}px`;
      cv.style.height = `${alto}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const estallar = (x: number, y: number, impulso: number) => {
      const n = Math.round(azar(POR_ESTALLIDO[0], POR_ESTALLIDO[1]));
      for (let i = 0; i < n; i++) {
        if (chispas.length >= MAX_PARTICULAS) break;
        // Reparto angular uniforme con algo de desorden: sin el reparto se
        // apelmazan a un lado y deja de leerse como un estallido.
        const ang = (i / n) * Math.PI * 2 + azar(-0.35, 0.35);
        const vel = azar(2.2, 6.0) + impulso * 0.04;
        const maxVida = azar(620, 1150);
        chispas.push({
          x, y,
          vx: Math.cos(ang) * vel,
          vy: Math.sin(ang) * vel,
          vida: maxVida, maxVida,
          radio: azar(0.9, 2.6),
          sprite: (Math.random() * sprites.length) | 0,
          rgb: COLORES[(Math.random() * COLORES.length) | 0],
        });
      }
    };

    let anterior = 0;
    const paso = (t: number) => {
      const dt = anterior ? Math.min(t - anterior, 50) : 16;
      anterior = t;

      ctx.clearRect(0, 0, ancho, alto);
      ctx.globalCompositeOperation = "lighter";

      const f = dt / 16.67; // normalizado a 60 fps
      for (let i = chispas.length - 1; i >= 0; i--) {
        const p = chispas[i];
        p.vida -= dt;
        if (p.vida <= 0) { chispas.splice(i, 1); continue; }

        p.x += p.vx * f;
        p.y += p.vy * f;
        p.vx *= Math.pow(0.965, f);  // rozamiento
        p.vy *= Math.pow(0.965, f);
        p.vy += 0.035 * f;           // gravedad: da la caída del cohete

        const k = p.vida / p.maxVida;
        const alfa = k * k;          // se apaga rápido al final, no se arrastra
        const d = p.radio * 6 * (0.45 + k * 0.55);
        const [r, gg, b] = p.rgb;

        // Halo de color.
        ctx.globalAlpha = alfa * 0.85;
        ctx.drawImage(sprites[p.sprite], p.x - d / 2, p.y - d / 2, d, d);
        // Núcleo casi blanco: es el punto que hace que se lea como chispa
        // y no como una bolita de color.
        ctx.globalAlpha = alfa;
        ctx.fillStyle = `rgb(${Math.min(255, r + 40)},${Math.min(255, gg + 30)},255)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, p.radio * 0.42 * k), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      if (chispas.length === 0) { raf = 0; return; } // en reposo no consume nada
      raf = requestAnimationFrame(paso);
    };

    const arrancar = () => {
      if (!raf) { anterior = 0; raf = requestAnimationFrame(paso); }
    };

    const onMove = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      if (!hayUltimo) { ultX = x; ultY = y; hayUltimo = true; return; }
      const dx = x - ultX, dy = y - ultY;
      const d = Math.hypot(dx, dy);
      ultX = x; ultY = y;

      // Salto enorme (volver de otra pestaña, otro monitor): no dejar rastro.
      if (d > 300) return;

      acumulado += d;
      while (acumulado >= TRAMO) {
        acumulado -= TRAMO;
        estallar(x, y, Math.min(d, 40));
      }
      if (chispas.length) arrancar();
    };

    const limpiar = () => {
      chispas.length = 0;
      hayUltimo = false;
      acumulado = 0;
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      ctx.clearRect(0, 0, ancho, alto);
    };

    const onVisibilidad = () => { if (document.hidden) limpiar(); };

    const enganchar = () => {
      if (activo) return;
      activo = true;
      medir();
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("resize", medir);
      window.addEventListener("blur", limpiar);
      document.addEventListener("mouseleave", limpiar);
      document.addEventListener("visibilitychange", onVisibilidad);
    };

    const soltar = () => {
      if (!activo) return;
      activo = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", medir);
      window.removeEventListener("blur", limpiar);
      document.removeEventListener("mouseleave", limpiar);
      document.removeEventListener("visibilitychange", onVisibilidad);
      limpiar();
    };

    /* Las dos condiciones pueden cambiar con la página abierta: conectar un
       ratón a una tableta, o activar «reducir movimiento» en el sistema. */
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
    <canvas
      ref={lienzo}
      aria-hidden="true"
      className="cursor-sparks pointer-events-none fixed inset-0 z-40 print:hidden"
    />
  );
}
