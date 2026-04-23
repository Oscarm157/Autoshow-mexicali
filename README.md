# Autoshow Mexicali — Pitch Deck

Presentación de marca para Autoshow Mexicali. Construida con Next.js 16 + Tailwind CSS 4 + Framer Motion.

## Inicio rápido

```bash
npm install
npm run dev    # http://localhost:3300
```

## Navegación

| Tecla | Acción |
|-------|--------|
| `→` / `Space` | Slide siguiente |
| `←` | Slide anterior |
| `F` | Fullscreen |
| Swipe | Touch left/right |

## Logo

Coloca el render aprobado en:

```
public/logo-v4.png
```

PNG cuadrado, mínimo 1200×1200, fondo transparente o `#F7EFE0`.  
Si no existe, el slide 7 muestra un placeholder con instrucciones.

## Estructura

```
app/
  page.tsx          — ensambla los 12 slides
  globals.css       — paleta Autoshow (CSS custom properties)
  layout.tsx        — fonts (Archivo Black, Plus Jakarta Sans, Playfair)
components/
  slides-deck.tsx   — navegación de deck (teclado, touch, fullscreen)
  slide.tsx         — wrapper light/dark mode
  slides/           — s01-hero → s12-cierre
  ui/
    motion-primitives.tsx  — FadeStack, FadeItem, HeroWord, ScaleIn
lib/
  brand.ts          — paleta, zonas, swatches
public/
  logo-v4.png       — ← drop render aquí
  README.txt
brief.md            — brief de marca + log de iteraciones del logo
```

## Build

```bash
npm run build
npm run start
```
