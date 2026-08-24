import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorSparks from "@/components/CursorSparks";

/* Instrument Sans: grotesca contemporánea de x-alta grande y formas abiertas.
   Sobre fondo oscuro rinde mejor que una neo-grotesca neutra, porque la
   apertura de las letras compensa la halación del texto claro. */
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
/* Monoespaciada solo para etiquetas y cifras: da alineación tabular. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Perfil corporativo — Soluciones tecnológicas y transformación digital",
  description:
    "Entendemos el problema. Diseñamos la solución. Construimos la tecnología. Consultoría, arquitectura y desarrollo de software a medida.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Activa la animación de entrada solo si hay JavaScript, y la desactiva
            si React no alcanza a hidratar, para no dejar la página en blanco. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              "setTimeout(function(){" +
              "var h=document.documentElement;" +
              "if(!h.hasAttribute('data-hydrated'))h.classList.remove('js');" +
              "},1500);",
          }}
        />
      </head>
      <body className="grain min-h-full flex flex-col bg-void text-fg">
        {children}
        {/* Chispas del cursor. Van después del contenido y en z-40:
            por debajo de la cabecera fija (z-50) para no lavarle el texto. */}
        <CursorSparks />
      </body>
    </html>
  );
}
