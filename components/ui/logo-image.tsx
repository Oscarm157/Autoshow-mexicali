"use client";

export function LogoImage() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden border"
      style={{
        background: "#FFFFFF",
        borderColor: "var(--card-border)",
        boxShadow: "0 40px 80px -20px rgba(255,107,53,0.25)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-v4.png"
        alt="Autoshow Mexicali — Logo master v4"
        className="w-full h-auto block"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const fallback = el.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div
        className="hidden flex-col items-center justify-center gap-3 aspect-square p-10 text-center"
        style={{
          background:
            "linear-gradient(135deg, #FFF2D9 0%, #F7EFE0 50%, #F2E7D4 100%)",
          color: "var(--muted)",
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 48, color: "var(--accent)" }}
        >
          image
        </span>
        <div className="text-sm font-semibold tracking-wide">
          Pega el render v4 aprobado
        </div>
        <code className="text-[11px] px-3 py-1.5 rounded-md" style={{ background: "var(--surface-muted)", border: "1px solid var(--card-border)" }}>
          public/logo-v4.png
        </code>
      </div>
    </div>
  );
}
