import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";

export function S03Insight() {
  return (
    <Slide mode="light" className="relative overflow-hidden">
      <div className="absolute inset-0 sun-bg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-10 max-w-4xl mx-auto">
        <FadeStack className="flex flex-col gap-10 items-center">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              El insight central
            </span>
          </FadeItem>

          <FadeItem>
            <span
              className="block text-[96px] leading-none font-bold"
              style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              &ldquo;
            </span>
          </FadeItem>

          <FadeItem>
            <h2
              className="text-[30px] sm:text-[38px] md:text-[46px] leading-[1.25] tracking-[-0.005em] font-normal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <HeroWord delay={0.15}>Este evento no es un autoshow donde llevas a tus hijos.</HeroWord>
              <br />
              <HeroWord delay={0.5}>
                <em
                  className="italic"
                  style={{ color: "var(--accent)" }}
                >
                  Son dos experiencias premium al mismo tiempo:
                </em>
              </HeroWord>{" "}
              <HeroWord delay={0.85}>
                mientras los niños viven la aventura, los papás deciden el auto
                que los va a llevar a la próxima.
              </HeroWord>
            </h2>
          </FadeItem>

          <FadeItem>
            <div
              className="w-16 h-[2px] mt-4"
              style={{ background: "var(--accent)" }}
            />
          </FadeItem>
        </FadeStack>
      </div>
    </Slide>
  );
}
