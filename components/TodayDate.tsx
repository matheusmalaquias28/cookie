"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getToday = () =>
  new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

/** Data de hoje no fuso do visitante; no servidor renderiza vazio para evitar mismatch. */
export function TodayDate() {
  const today = useSyncExternalStore(subscribe, getToday, () => "");
  return <>{today}</>;
}
