import Image from "next/image";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { sponsors } from "@/lib/landing-content";

export function Sponsors() {
  return (
    <section
      id="patrocinadores"
      className="py-28 md:py-36 relative"
      style={{ background: "var(--l-bg-deep)" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-12 md:mb-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: "var(--l-olive)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-olive)" }}>
                  {sponsors.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /04
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-6">
            <RevealItem>
              <h2
                className="text-[30px] sm:text-[40px] md:text-[48px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", color: "var(--l-ink)" }}
              >
                {sponsors.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[16px] md:text-[18px] leading-[1.65] max-w-2xl" style={{ color: "var(--l-ink-soft)" }}>
                {sponsors.body}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="flex flex-col gap-12">
          {sponsors.tiers.map((tier, i) => (
            <RevealItem key={tier.name}>
              <SponsorTier
                tierName={tier.name}
                slots={tier.slots}
                tierIndex={i}
              />
            </RevealItem>
          ))}

          <RevealItem>
            <VenuePartner />
          </RevealItem>
        </RevealStack>
      </div>
    </section>
  );
}

function SponsorTier({
  tierName,
  slots,
  tierIndex,
}: {
  tierName: string;
  slots: number;
  tierIndex: number;
}) {
  const tierLabel = String(tierIndex + 1).padStart(2, "0");
  const cols = slots === 1 ? "grid-cols-1" : slots <= 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-4 lg:grid-cols-8";
  const aspect = slots === 1 ? "aspect-[16/5]" : slots <= 4 ? "aspect-[4/2]" : "aspect-[3/2]";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-mustard)" }}>
            T·{tierLabel}
          </span>
          <span className="l-eyebrow" style={{ color: "var(--l-ink)" }}>
            {tierName}
          </span>
        </div>
        <span className="l-mono text-[10px] tracking-[0.24em] uppercase" style={{ color: "var(--l-muted)" }}>
          {slots} {slots === 1 ? "lugar" : "lugares"}
        </span>
      </div>

      <div className={`grid ${cols} gap-px`}>
        {Array.from({ length: slots }).map((_, i) => (
          <div
            key={i}
            className={`${aspect} flex flex-col items-center justify-center gap-2 relative`}
            style={{
              background: "var(--l-bg)",
              outline: "1px solid var(--l-rule)",
            }}
          >
            <span
              className="l-display text-[24px]"
              style={{ color: "var(--l-rule-strong)" }}
            >
              ◇
            </span>
            <span
              className="l-mono text-[9px] tracking-[0.28em] uppercase"
              style={{ color: "var(--l-muted)" }}
            >
              Por anunciar
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VenuePartner() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[260px_1fr_auto] items-center gap-6 md:gap-10 p-7 md:p-10"
      style={{
        background: "var(--l-bg)",
        border: "1px solid var(--l-ink)",
      }}
    >
      <div
        className="relative w-full aspect-[5/3] md:aspect-[3/2]"
        style={{
          background: "linear-gradient(135deg, #1E73CE 0%, #1A5CA8 100%)",
        }}
      >
        <Image
          src={sponsors.venuePartner.logo}
          alt={sponsors.venuePartner.name}
          fill
          sizes="260px"
          className="object-contain p-3"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-mustard)" }}>
          {sponsors.venuePartner.label}
        </span>
        <span
          className="l-display"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "var(--l-ink)",
            lineHeight: 1,
          }}
        >
          {sponsors.venuePartner.name}
        </span>
        <span className="l-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--l-muted)" }}>
          {sponsors.venuePartner.note}
        </span>
      </div>

      <div className="flex flex-col gap-2 md:items-end">
        <span className="l-mono text-[10px] tracking-[0.24em] uppercase" style={{ color: "var(--l-muted)" }}>
          Sede de la edición
        </span>
        <span
          className="l-mono text-[11px] tracking-[0.18em] uppercase"
          style={{ color: "var(--l-ink)" }}
        >
          10 · NOV · 26
        </span>
      </div>
    </div>
  );
}
