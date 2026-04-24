"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface SlidesDeckProps {
  children: React.ReactNode[];
  storageKey?: string;
  ruta?: "a" | "b";
}

export function SlidesDeck({
  children,
  storageKey,
  ruta = "a",
}: SlidesDeckProps) {
  const effectiveStorageKey =
    storageKey ?? `autoshow-mexicali-slide-${ruta}`;
  const rutaLabel = ruta === "a" ? "Sol y familia" : "Ruta Baja";
  const otherRuta = ruta === "a" ? "b" : "a";
  const otherRutaLabel = ruta === "a" ? "Ruta Baja" : "Sol y familia";
  const otherRutaHref = ruta === "a" ? "/ruta-b" : "/";
  const wordmarkAccent = ruta === "a" ? "var(--accent)" : "var(--stamp)";
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const total = children.length;

  useEffect(() => {
    const saved = sessionStorage.getItem(effectiveStorageKey);
    if (saved) setCurrent(parseInt(saved, 10));
    setMounted(true);
  }, [effectiveStorageKey]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      setCurrent(index);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (mounted) sessionStorage.setItem(effectiveStorageKey, String(current));
  }, [current, mounted, effectiveStorageKey]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total, toggleFullscreen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    Array.from(container.children).forEach((slideWrapper) => {
      const scrollable = slideWrapper.firstElementChild;
      if (scrollable) scrollable.scrollTop = 0;
    });
  }, [current]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null || touchStartY.current === null) return;
      const diffX = touchStart.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > 80 && Math.abs(diffX) > Math.abs(diffY) * 2) {
        if (diffX > 0) next();
        else prev();
      }
      touchStart.current = null;
      touchStartY.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-screen h-screen overflow-x-hidden bg-background ${ruta === "b" ? "ruta-b" : ""}`}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === current
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : i < current
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          {child}
        </div>
      ))}

      {/* Top-left: wordmark + ruta switch */}
      <div
        className="absolute top-0 left-0 z-50 flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <button
          onClick={() => goTo(0)}
          aria-label="Ir al inicio"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span
            className={`${ruta === "b" ? "font-badge" : "font-festival"} text-[13px] sm:text-[15px] tracking-tight uppercase`}
            style={{ color: wordmarkAccent }}
          >
            AUTOSHOW
          </span>
          <span
            className="text-[11px] sm:text-[12px] font-semibold tracking-[0.14em]"
            style={{ color: ruta === "b" ? "var(--foreground)" : "var(--electric)" }}
          >
            · {ruta === "b" ? "BAJA" : "MEXICALI"}
          </span>
        </button>

        <div
          className="hidden sm:flex items-center gap-1.5 ml-2 pl-3 border-l"
          style={{ borderColor: "var(--card-border)" }}
        >
          <span
            className="text-[9px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Opción
          </span>
          <span
            className="text-[11px] font-semibold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded"
            style={{
              color: "var(--background)",
              background: wordmarkAccent,
            }}
          >
            {ruta === "a" ? "A" : "B"}
          </span>
          <span
            className="text-[10px] tracking-wide hidden md:inline"
            style={{ color: "var(--muted)" }}
          >
            {rutaLabel}
          </span>
          <Link
            href={otherRutaHref}
            className="ml-2 text-[10px] font-semibold tracking-[0.18em] uppercase px-2 py-1 rounded transition-colors hover:opacity-80"
            style={{
              color: "var(--muted)",
              border: "1px solid var(--card-border)",
            }}
            title={`Ver Opción ${otherRuta.toUpperCase()}`}
          >
            → Opción {otherRuta.toUpperCase()}: {otherRutaLabel}
          </Link>
        </div>
      </div>

      {/* Top-right: counter + nav + fullscreen */}
      <div
        className="absolute top-0 right-0 z-50 flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <span className="text-xs font-mono text-concrete tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-concrete hover:text-foreground hover:bg-surface-muted disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            aria-label="Anterior"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              chevron_left
            </span>
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-concrete hover:text-foreground hover:bg-surface-muted disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            aria-label="Siguiente"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              chevron_right
            </span>
          </button>
        </div>
        <button
          onClick={toggleFullscreen}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-concrete hover:text-foreground hover:bg-surface-muted transition-all"
          title="Fullscreen (F)"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            {isFullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
          <span className="text-xs font-medium hidden md:inline">
            {isFullscreen ? "Salir" : "Fullscreen"}
          </span>
        </button>
      </div>

      {/* Bottom progress */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 px-6 py-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div
          className="h-0.5 rounded-full overflow-hidden"
          style={{ background: "var(--card-border)" }}
        >
          <div
            className="h-full transition-all duration-500 ease-out rounded-full"
            style={{
              width: `${((current + 1) / total) * 100}%`,
              background: wordmarkAccent,
            }}
          />
        </div>
      </div>
    </div>
  );
}
