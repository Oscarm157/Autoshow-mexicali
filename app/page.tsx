import { StickyBar } from "@/components/landing/sticky-bar";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
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

export default function Page() {
  return (
    <main className="l-page min-h-screen">
      <StickyBar />
      <Nav />
      <Hero />
      <About />
      <Ruta />
      <Experiencias />
      <Lineup />
      <Actividades />
      <Sponsors />
      <Galeria />
      <Faq />
      <Registro />
      <Footer />
      <FloatingCta />
    </main>
  );
}
