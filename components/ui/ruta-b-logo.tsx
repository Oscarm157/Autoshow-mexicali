"use client";

interface RutaBLogoProps {
  size?: number;
  className?: string;
}

export function RutaBLogo({ size = 320, className = "" }: RutaBLogoProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/tmpxbjy0z2o.png"
        alt="Autoshow Mexicali — Ruta B Ruta Baja"
        className="w-full h-full object-contain block"
      />
    </div>
  );
}
