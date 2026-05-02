import { footer, event } from "@/lib/landing-content";

export function Footer() {
  return (
    <footer
      className="l-dark relative"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-20 pb-10 md:pt-28 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end mb-16 md:mb-24">
          <div className="flex flex-col gap-6">
            <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
              {event.brand} · Ruta 26
            </span>
            <h3
              className="l-display"
              style={{
                fontSize: "clamp(32px, 5.5vw, 72px)",
                color: "var(--l-ink)",
                lineHeight: 1.05,
              }}
            >
              <span className="block">Mexicali, 14 de noviembre.</span>
              <span className="block" style={{ color: "var(--l-mustard)" }}>Te esperamos.</span>
            </h3>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-muted)" }}>
              {event.dateShort}
            </span>
            <span className="l-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--l-ink-soft)" }}>
              {event.venue}
            </span>
            <span className="l-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--l-ink-soft)" }}>
              {event.city}
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8"
          style={{
            borderTop: "1px solid var(--l-rule-strong)",
            borderBottom: "1px solid var(--l-rule-strong)",
          }}
        >
          <FooterCol title="La ruta">
            <FooterLink href="#evento">El plan</FooterLink>
            <FooterLink href="#ruta">La ruta</FooterLink>
            <FooterLink href="#experiencias">Qué hay</FooterLink>
            <FooterLink href="#actividades">Actividades</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </FooterCol>
          <FooterCol title="Marcas">
            <FooterLink href="#lineup">Lineup completo</FooterLink>
            <FooterLink href="#patrocinadores">Patrocinadores</FooterLink>
            <FooterLink href="#registro">Regístrate gratis</FooterLink>
          </FooterCol>
          <FooterCol title="Redes">
            {footer.links.map((l) => (
              <FooterLink key={l.label} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Producción">
            <span className="l-mono text-[12px] tracking-[0.06em] uppercase" style={{ color: "var(--l-ink)" }}>
              {footer.agency}
            </span>
            <span className="text-[13px] italic" style={{ color: "var(--l-muted)", fontFamily: "var(--font-display)" }}>
              {footer.agencyLine}
            </span>
          </FooterCol>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-8">
          <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-muted)" }}>
            © {event.year} · {footer.agency}
          </span>
          <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-muted)" }}>
            Hecho en {footer.cityLine}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-mustard)" }}>
        {title}
      </span>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[14px] hover:text-[color:var(--l-mustard)] transition-colors"
      style={{ color: "var(--l-ink-soft)" }}
    >
      {children}
    </a>
  );
}
