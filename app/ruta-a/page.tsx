import { SlidesDeck } from "@/components/slides-deck";
import { S01Hero } from "@/components/slides/s01-hero";
import { S02Contexto } from "@/components/slides/s02-contexto";
import { S03Tagline } from "@/components/slides/s03-tagline";
import { S04Logo } from "@/components/slides/s04-logo";
import { S05Zonas } from "@/components/slides/s05-zonas";
import { S06Plan } from "@/components/slides/s06-plan";
import { S07Cierre } from "@/components/slides/s07-cierre";

export default function RutaAPage() {
  return (
    <SlidesDeck ruta="a">
      <S01Hero />
      <S02Contexto />
      <S03Tagline />
      <S04Logo />
      <S05Zonas />
      <S06Plan />
      <S07Cierre />
    </SlidesDeck>
  );
}
