import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Show Baja California 2026 · Edición Mexicali",
  description:
    "El evento automotriz más importante de Mexicali. Las mejores marcas de autos 2026, entrada gratis, para toda la familia. 14 de noviembre en el Museo Sol del Niño.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Archivo+Black&family=Oswald:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
