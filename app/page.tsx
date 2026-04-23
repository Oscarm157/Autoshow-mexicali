import { SlidesDeck } from "@/components/slides-deck";
import { S01Hero } from "@/components/slides/s01-hero";
import { S02Diagnostico } from "@/components/slides/s02-diagnostico";
import { S03Insight } from "@/components/slides/s03-insight";
import { S04Tagline } from "@/components/slides/s04-tagline";
import { S05Benchmark } from "@/components/slides/s05-benchmark";
import { S06Evergreen } from "@/components/slides/s06-evergreen";
import { S07Logo } from "@/components/slides/s07-logo";
import { S08Justificacion } from "@/components/slides/s08-justificacion";
import { S09Paleta } from "@/components/slides/s09-paleta";
import { S10Zonas } from "@/components/slides/s10-zonas";
import { S11Plan } from "@/components/slides/s11-plan";
import { S12Cierre } from "@/components/slides/s12-cierre";

export default function Page() {
  return (
    <SlidesDeck>
      <S01Hero />
      <S02Diagnostico />
      <S03Insight />
      <S04Tagline />
      <S05Benchmark />
      <S06Evergreen />
      <S07Logo />
      <S08Justificacion />
      <S09Paleta />
      <S10Zonas />
      <S11Plan />
      <S12Cierre />
    </SlidesDeck>
  );
}
