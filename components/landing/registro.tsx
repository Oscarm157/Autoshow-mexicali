"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { registro, event } from "@/lib/landing-content";

export function Registro() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="registro"
      className="py-24 md:py-36 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none l-grid-bg opacity-50" aria-hidden />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <div className="flex flex-col gap-9 lg:sticky lg:top-28">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-2 w-fit"
                style={{
                  background: "var(--l-mustard)",
                  color: "var(--l-ink)",
                }}
              >
                <span style={{ fontSize: 14, lineHeight: 1 }}>★</span>
                <span className="l-mono text-[11px] tracking-[0.28em] uppercase">
                  {registro.badge}
                </span>
              </span>

              <h2
                className="l-display"
                style={{
                  fontSize: "clamp(48px, 8vw, 96px)",
                  color: "var(--l-ink)",
                  lineHeight: 0.95,
                }}
              >
                {registro.title}
              </h2>

              <p className="text-[18px] md:text-[20px] leading-[1.55] max-w-md" style={{ color: "var(--l-ink-soft)" }}>
                {registro.body}
              </p>

              <ul className="flex flex-col gap-3 mt-2">
                {registro.benefits.map((b) => (
                  <li
                    key={b.text}
                    className="flex items-center gap-4 py-3"
                    style={{ borderTop: "1px solid var(--l-rule)" }}
                  >
                    <span
                      className="w-8 h-8 flex items-center justify-center"
                      style={{ background: "var(--l-ink)", color: "var(--l-mustard)" }}
                    >
                      {b.icon}
                    </span>
                    <span className="text-[15.5px]" style={{ color: "var(--l-ink)" }}>
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="grid grid-cols-2 mt-4 gap-px"
                style={{ background: "var(--l-rule-strong)" }}
              >
                <Meta label="Arranca" value={event.dateShort} />
                <Meta label="Sede" value={event.venue} />
                <Meta label="Ciudad" value="Mexicali, BC" />
                <Meta label="Acceso" value="Gratuito" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="p-7 md:p-12 relative"
              style={{
                background: "var(--l-ink)",
                color: "var(--l-bg)",
              }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={onSubmit}
                    className="flex flex-col gap-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-mustard)" }}>
                        Acceso · 01/01
                      </span>
                      <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-bg)", opacity: 0.6 }}>
                        Gratis
                      </span>
                    </div>

                    <RevealStack className="flex flex-col gap-7" stagger={0.06}>
                      <RevealItem>
                        <Field label={registro.fields.name} name="name" type="text" required />
                      </RevealItem>
                      <RevealItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                          <Field label={registro.fields.email} name="email" type="email" required />
                          <Field label={registro.fields.phone} name="phone" type="tel" />
                        </div>
                      </RevealItem>
                      <RevealItem>
                        <Select label={registro.fields.party} name="party" options={registro.partyOptions} />
                      </RevealItem>
                      <RevealItem>
                        <Select label={registro.fields.interest} name="interest" options={registro.interestOptions} />
                      </RevealItem>
                    </RevealStack>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center justify-between gap-4 px-7 py-5 mt-2 transition-opacity"
                      style={{
                        background: "var(--l-mustard)",
                        color: "var(--l-ink)",
                        opacity: submitting ? 0.7 : 1,
                      }}
                    >
                      <span className="l-eyebrow">
                        {submitting ? "Enviando..." : registro.submit}
                      </span>
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="text-[12px] leading-[1.5]" style={{ color: "var(--l-ink-soft)", opacity: 0.7 }}>
                      Al enviar aceptas recibir actualizaciones del evento al correo y WhatsApp registrados. Sin costo, sin spam.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 py-12"
                  >
                    <span className="l-display text-[64px]" style={{ color: "var(--l-mustard)" }}>
                      ✓
                    </span>
                    <h3
                      className="l-display"
                      style={{
                        fontSize: "clamp(40px, 6vw, 80px)",
                        color: "var(--l-bg)",
                        lineHeight: 0.95,
                      }}
                    >
                      {registro.successTitle}
                    </h3>
                    <p className="text-[16px] leading-[1.6] max-w-md" style={{ color: "var(--l-ink-soft)" }}>
                      {registro.successBody}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="self-start l-mono text-[11px] tracking-[0.24em] uppercase mt-4 inline-flex items-center gap-2"
                      style={{ color: "var(--l-mustard)" }}
                    >
                      <span aria-hidden>↺</span>
                      <span>Registrar a otra persona</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-mustard)" }}>
        {label}
        {required && <span style={{ color: "var(--l-bg)", opacity: 0.6 }}> ·*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-transparent py-3 outline-none text-[16px]"
        style={{
          color: "var(--l-bg)",
          borderBottom: "1px solid rgba(239,233,221,0.32)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderBottomColor = "var(--l-mustard)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderBottomColor = "rgba(239,233,221,0.32)";
        }}
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-mustard)" }}>
        {label}
      </span>
      <select
        name={name}
        className="bg-transparent py-3 outline-none text-[16px] appearance-none"
        style={{
          color: "var(--l-bg)",
          borderBottom: "1px solid rgba(239,233,221,0.32)",
          backgroundImage:
            "linear-gradient(45deg, transparent 50%, rgba(239,233,221,0.6) 50%), linear-gradient(135deg, rgba(239,233,221,0.6) 50%, transparent 50%)",
          backgroundPosition: "calc(100% - 12px) calc(50% + 2px), calc(100% - 6px) calc(50% + 2px)",
          backgroundSize: "6px 6px, 6px 6px",
          backgroundRepeat: "no-repeat",
        }}
        defaultValue=""
      >
        <option value="" disabled style={{ color: "#1E1E1E" }}>
          Selecciona una opción
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "#1E1E1E" }}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-1.5 px-4 py-4"
      style={{ background: "var(--l-bg)" }}
    >
      <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-muted)" }}>
        {label}
      </span>
      <span className="l-mono text-[12px] tracking-[0.06em] uppercase" style={{ color: "var(--l-ink)" }}>
        {value}
      </span>
    </div>
  );
}
