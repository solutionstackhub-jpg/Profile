import type { NextConfig } from "next";

/**
 * EXPORT_STATIC=1 genera una carpeta `out/` con el sitio completamente
 * estático, para poder entregarlo o revisarlo sin levantar un servidor.
 */
const isStaticExport = process.env.EXPORT_STATIC === "1";

const nextConfig: NextConfig = {
  /**
   * En desarrollo, Next bloquea por defecto las peticiones a /_next/ que no
   * vengan de localhost. Al abrir el sitio desde otra máquina de la red, los
   * chunks de JavaScript quedan bloqueados y React no hidrata. Estos orígenes
   * quedan autorizados; agregar aquí cualquier otra IP desde la que se revise.
   */
  allowedDevOrigins: ["185.147.159.88"],

  /** No generar AGENTS.md / CLAUDE.md dentro del proyecto. */
  agentRules: false,

  ...(isStaticExport && {
    output: "export",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
