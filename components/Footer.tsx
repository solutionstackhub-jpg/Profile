import { Logo } from "./Logo";
import { brand, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink py-12">
      <div className="shell">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo showTagline />
            <p className="mt-7 max-w-xs text-[0.875rem] leading-relaxed text-fg-3">{brand.claim}</p>
          </div>

          <nav className="flex flex-col gap-3.5 md:items-end">
            {nav.map((item) => (
              <a key={item.href} href={item.href}
                className="text-[0.875rem] text-fg-2 transition-colors hover:text-fg">{item.label}</a>
            ))}
            <a href="/marca" className="text-[0.875rem] text-accent transition-opacity hover:opacity-75">
              Propuestas de marca
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-8 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-fg-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Presentación corporativa · {brand.name} — {brand.status}
          </p>
          <p>Fotografías: Unsplash License</p>
        </div>
      </div>
    </footer>
  );
}
