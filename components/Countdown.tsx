"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

function untilMidnight() {
  const now = new Date();
  const mid = new Date(now);
  mid.setHours(24, 0, 0, 0);
  const s = Math.max(0, Math.floor((mid.getTime() - now.getTime()) / 1000));
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}

/** Contagem regressiva até a meia-noite local; vazio no servidor para evitar mismatch. */
export function Countdown() {
  const [left, setLeft] = useState("");

  useEffect(() => {
    setLeft(untilMidnight());
    const t = setInterval(() => setLeft(untilMidnight()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!left) return null;
  return (
    <span className="block text-center tabular-nums lg:inline lg:before:content-['_|_']">
      {left}
    </span>
  );
}
