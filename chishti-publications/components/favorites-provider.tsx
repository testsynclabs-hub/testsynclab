"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "chishti-publications-favorites";
const CHANGE_EVENT = "chishti-favorites-change";

type FavoritesContextValue = {
  ids: string[];
  ready: boolean;
  isFavorite: (id: string) => boolean;
  toggle: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readRaw() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function parseIds(raw: string) {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is string => typeof id === "string");
  } catch {
    return [];
  }
}

function subscribeOnce() {
  return () => {};
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => "[]");
  const ready = useSyncExternalStore(subscribeOnce, () => true, () => false);
  const ids = useMemo(() => parseIds(raw), [raw]);

  const toggle = useCallback(
    (id: string) => {
      const next = ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    [ids],
  );

  const value = useMemo<FavoritesContextValue>(
    () => ({
      ids,
      ready,
      isFavorite: (id: string) => ids.includes(id),
      toggle,
    }),
    [ids, ready, toggle],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
