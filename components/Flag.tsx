import type { SVGProps } from "react";

/**
 * Banderas dibujadas en SVG, no con emoji.
 *
 * Windows no trae glifos de bandera: 🇻🇪 se ve como las letras «VE» y 🇦🇷 como
 * «AR». Como el perfil se revisa y se envía desde Windows, un emoji rompería
 * justo donde más se mira. En SVG se ve igual en cualquier sistema y además
 * se controla el tamaño exacto junto al texto.
 *
 * A 20 px los detalles finos no se resuelven: las ocho estrellas de Venezuela
 * se simplifican a ocho puntos y el sol de Argentina a un disco con rayos
 * cortos. Es lo que se lee correctamente a ese tamaño.
 */

type Props = Omit<SVGProps<SVGSVGElement>, "viewBox">;

const marco = "rounded-[2px] ring-1 ring-white/15";

/** Ocho estrellas en arco sobre la franja azul. */
const ESTRELLAS = Array.from({ length: 8 }, (_, i) => {
  const ang = Math.PI * (1.18 + (i / 7) * 0.64); // arco abierto hacia arriba
  return { cx: 15 + Math.cos(ang) * 7.2, cy: 12.6 + Math.sin(ang) * 7.2 };
});

export function FlagVE({ className = "", ...props }: Props) {
  return (
    <svg viewBox="0 0 30 20" className={`${marco} ${className}`} role="img"
      aria-label="Venezuela" {...props}>
      <rect width="30" height="6.667" fill="#FFCC00" />
      <rect y="6.667" width="30" height="6.667" fill="#00247D" />
      <rect y="13.333" width="30" height="6.667" fill="#CF142B" />
      {ESTRELLAS.map((e, i) => (
        <circle key={i} cx={e.cx} cy={e.cy} r="0.62" fill="#fff" />
      ))}
    </svg>
  );
}

export function FlagAR({ className = "", ...props }: Props) {
  return (
    <svg viewBox="0 0 30 20" className={`${marco} ${className}`} role="img"
      aria-label="Argentina" {...props}>
      <rect width="30" height="6.667" fill="#74ACDF" />
      <rect y="6.667" width="30" height="6.667" fill="#FFFFFF" />
      <rect y="13.333" width="30" height="6.667" fill="#74ACDF" />
      <g stroke="#F6B40E" strokeWidth="0.7" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <line key={i}
              x1={15 + Math.cos(a) * 2.1} y1={10 + Math.sin(a) * 2.1}
              x2={15 + Math.cos(a) * 3.1} y2={10 + Math.sin(a) * 3.1} />
          );
        })}
      </g>
      <circle cx="15" cy="10" r="1.9" fill="#F6B40E" />
    </svg>
  );
}

/** Se elige por código ISO para poder guardarlo como dato en content.ts. */
export function Flag({ code, className }: { code: string; className?: string }) {
  if (code === "VE") return <FlagVE className={className} />;
  if (code === "AR") return <FlagAR className={className} />;
  return null;
}
