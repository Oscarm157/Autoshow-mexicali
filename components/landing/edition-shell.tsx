"use client";

import { useEdition } from "./edition-context";

export function EditionShell({ children }: { children: React.ReactNode }) {
  const { version } = useEdition();
  const className =
    version === "mar"
      ? "l-page l-page-mar min-h-screen"
      : "l-page min-h-screen";
  return <main className={className}>{children}</main>;
}
