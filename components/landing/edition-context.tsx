"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Edition = "tierra" | "mar";

const STORAGE_KEY = "autoshow-edition";

type Ctx = {
  version: Edition;
  setVersion: (v: Edition) => void;
  ready: boolean;
};

const EditionContext = createContext<Ctx | null>(null);

export function EditionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersionState] = useState<Edition>("tierra");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "tierra" || stored === "mar") setVersionState(stored);
    setReady(true);
  }, []);

  const setVersion = (v: Edition) => {
    setVersionState(v);
    window.localStorage.setItem(STORAGE_KEY, v);
  };

  return (
    <EditionContext.Provider value={{ version, setVersion, ready }}>
      {children}
    </EditionContext.Provider>
  );
}

export function useEdition() {
  const ctx = useContext(EditionContext);
  if (!ctx) throw new Error("useEdition must be used within EditionProvider");
  return ctx;
}
