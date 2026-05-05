import { StickyBar } from "@/components/landing/sticky-bar";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Concepto } from "@/components/landing/concepto";
import { Ruta } from "@/components/landing/ruta";
import { Experiencias } from "@/components/landing/experiencias";
import { Lineup } from "@/components/landing/lineup";
import { Actividades } from "@/components/landing/actividades";
import { Sponsors } from "@/components/landing/sponsors";
import { Galeria } from "@/components/landing/galeria";
import { Faq } from "@/components/landing/faq";
import { Registro } from "@/components/landing/registro";
import { Footer } from "@/components/landing/footer";
import { FloatingCta } from "@/components/landing/floating-cta";
import { EditionProvider } from "@/components/landing/edition-context";
import { EditionShell } from "@/components/landing/edition-shell";
import { EditionToggle } from "@/components/landing/edition-toggle";

export default function Page() {
  return (
    <EditionProvider>
      <EditionShell>
        <EditionToggle />
        <StickyBar />
        <Nav />
        <Hero />
        <About />
        <Concepto />
        <Experiencias />
        <Ruta />
        <Lineup />
        <Actividades />
        <Sponsors />
        <Galeria />
        <Faq />
        <Registro />
        <Footer />
        <FloatingCta />
      </EditionShell>
    </EditionProvider>
  );
}
