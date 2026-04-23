import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { paletteSwatches } from "@/lib/brand";

export function S09Paleta() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Paleta master
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.015em] max-w-3xl">
            8 colores para{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              toda la marca.
            </em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {paletteSwatches.map((s) => (
              <div
                key={s.hex}
                className="rounded-2xl overflow-hidden border flex flex-col"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div
                  className="aspect-square flex items-end justify-between p-4"
                  style={{ background: s.hex, color: s.text }}
                >
                  <span className="font-mono text-[12px] tracking-tight">
                    {s.hex}
                  </span>
                </div>
                <div
                  className="px-4 py-3 flex flex-col gap-0.5"
                  style={{ background: "var(--card)" }}
                >
                  <span
                    className="text-[13px] font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {s.name}
                  </span>
                  <span className="text-[11px] leading-snug text-muted">
                    {s.use}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
