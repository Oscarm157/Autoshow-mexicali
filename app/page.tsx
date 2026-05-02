import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Paradas } from "@/components/landing/paradas";
import { Lineup } from "@/components/landing/lineup";
import { Sponsors } from "@/components/landing/sponsors";
import { Ediciones } from "@/components/landing/ediciones";
import { Galeria } from "@/components/landing/galeria";
import { Faq } from "@/components/landing/faq";
import { Registro } from "@/components/landing/registro";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <main className="l-page min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Paradas />
      <Lineup />
      <Sponsors />
      <Ediciones />
      <Galeria />
      <Faq />
      <Registro />
      <Footer />
    </main>
  );
}
