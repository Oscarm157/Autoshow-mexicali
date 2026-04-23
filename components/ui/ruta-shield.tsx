interface RutaShieldProps {
  size?: number;
  number?: string;
  showSub?: boolean;
}

export function RutaShield({ size = 320, number = "26", showSub = true }: RutaShieldProps) {
  const w = size;
  const h = size * 1.2;
  return (
    <svg
      viewBox="0 0 240 288"
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Autoshow Baja · Ruta ${number}`}
      style={{ display: "block" }}
    >
      {/* Outer shield silhouette — interstate-style with rounded top and tapered bottom */}
      <path
        d="M 20 8
           L 220 8
           Q 232 8 232 20
           L 232 180
           Q 232 200 216 216
           L 132 276
           Q 120 284 108 276
           L 24 216
           Q 8 200 8 180
           L 8 20
           Q 8 8 20 8 Z"
        fill="var(--background)"
        stroke="var(--accent)"
        strokeWidth="4"
      />

      {/* Inner ring */}
      <path
        d="M 28 20
           L 212 20
           Q 220 20 220 28
           L 220 178
           Q 220 194 208 206
           L 128 262
           Q 120 268 112 262
           L 32 206
           Q 20 194 20 178
           L 20 28
           Q 20 20 28 20 Z"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
      />

      {/* AUTOSHOW top */}
      <text
        x="120"
        y="56"
        textAnchor="middle"
        fontFamily="Oswald, Archivo Black, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="4"
        fill="var(--accent)"
      >
        AUTOSHOW
      </text>

      {/* Thin divider */}
      <line
        x1="60"
        y1="72"
        x2="180"
        y2="72"
        stroke="var(--accent)"
        strokeWidth="1"
      />

      {/* BAJA big center */}
      <text
        x="120"
        y="150"
        textAnchor="middle"
        fontFamily="Oswald, Archivo Black, sans-serif"
        fontSize="76"
        fontWeight="700"
        letterSpacing="2"
        fill="var(--accent)"
      >
        BAJA
      </text>

      {/* Thin divider */}
      <line
        x1="60"
        y1="174"
        x2="180"
        y2="174"
        stroke="var(--accent)"
        strokeWidth="1"
      />

      {/* RUTA · NN bottom */}
      {showSub ? (
        <text
          x="120"
          y="202"
          textAnchor="middle"
          fontFamily="Oswald, Archivo Black, sans-serif"
          fontSize="18"
          fontWeight="500"
          letterSpacing="6"
          fill="var(--accent)"
        >
          RUTA · {number}
        </text>
      ) : null}

      {/* Bottom mile dots */}
      <circle cx="100" cy="230" r="2.5" fill="var(--accent)" />
      <circle cx="120" cy="230" r="2.5" fill="var(--accent)" />
      <circle cx="140" cy="230" r="2.5" fill="var(--accent)" />
    </svg>
  );
}
