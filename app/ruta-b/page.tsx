import { SlidesDeck } from "@/components/slides-deck";
import { S01Hero } from "@/components/slides-b/s01-hero";
import { S02Contexto } from "@/components/slides-b/s02-contexto";
import { S03Tagline } from "@/components/slides-b/s03-tagline";
import { S04Logo } from "@/components/slides-b/s04-logo";
import { S05Paradas } from "@/components/slides-b/s05-paradas";
import { S06Plan } from "@/components/slides-b/s06-plan";
import { S07Cierre } from "@/components/slides-b/s07-cierre";

export default function RutaBPage() {
  return (
    <SlidesDeck ruta="b">
      <S01Hero />
      <S02Contexto />
      <S03Tagline />
      <S04Logo />
      <S05Paradas />
      <S06Plan />
      <S07Cierre />
    </SlidesDeck>
  );
}
