import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { zones } from "@/lib/brand";

export function S05Zonas() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Sistema cromático y zonas
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.015em] max-w-4xl">
            Tres zonas.{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              Un solo sistema.
            </em>
          </h2>
        </FadeItem>

        <FadeItem>
          <p className="max-w-3xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            La paleta de marca se distribuye entre las tres zonas del evento. Cada zona conserva la identidad del logo con su propio tratamiento cromático.
          </p>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
            {zones.map((z) => (
              <div
                key={z.slug}
                className="rounded-2xl overflow-hidden flex flex-col min-h-[340px]"
                style={{
                  background: z.primary,
                  color: z.text,
                  boxShadow: "0 20px 40px -16px rgba(0,0,0,0.15)",
                }}
              >
                <div className="p-7 flex-1 flex flex-col justify-between gap-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 32, opacity: 0.85 }}
                    >
                      {z.icon}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.22em] uppercase opacity-70">
                      Zona
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-festival text-2xl sm:text-3xl tracking-tight">
                      {z.name}
                    </h3>
                    <p className="text-[13px] opacity-90">{z.subtitle}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="text-[12px] leading-relaxed italic opacity-85">
                      {z.tone}
                    </div>
                    <div
                      className="text-[11px] font-semibold tracking-[0.14em] uppercase"
                      style={{ color: z.secondary }}
                    >
                      {z.vehicle}
                    </div>
                  </div>
                </div>

                <div
                  className="h-14 flex items-center px-7 gap-3 text-[11px] font-mono tabular-nums"
                  style={{ background: "rgba(0,0,0,0.18)" }}
                >
                  <div
                    className="w-4 h-4 rounded-full border border-current opacity-70"
                    style={{ background: z.primary }}
                  />
                  <span className="opacity-80">{z.primary}</span>
                  <div
                    className="w-4 h-4 rounded-full border border-current opacity-70"
                    style={{ background: z.secondary }}
                  />
                  <span className="opacity-80">{z.secondary}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeItem>

        <FadeItem>
          <p
            className="text-center text-sm italic max-w-3xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            El color se adapta a cada zona. La identidad del logo se mantiene.
          </p>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
