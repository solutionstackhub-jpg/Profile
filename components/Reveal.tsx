"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Revela el contenido cuando entra en pantalla.
 *
 * El contenido NUNCA depende de este componente para ser visible: la clase
 * `.reveal` solo oculta cuando <html> lleva la clase `js`, que agrega el script
 * de arranque en app/layout.tsx. Ese mismo script la retira si React no llega a
 * hidratar, de modo que un fallo de JavaScript no deje el documento en blanco.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Confirma la hidratación para que el script de arranque no active el respaldo.
    document.documentElement.setAttribute("data-hydrated", "1");

    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        io.unobserve(el);
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);

    // Respaldo: si el observador no entrega nada, se muestra igual.
    const fallback = window.setTimeout(() => {
      if (!el.classList.contains("is-in")) show();
    }, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    // @ts-expect-error -- ref polimórfico sobre un conjunto cerrado de etiquetas
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
