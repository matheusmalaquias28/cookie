"use client";

import { useEffect } from "react";

const PIXEL_ID = "703849964870347";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    __fbLoaded?: boolean;
  }
}

function ensureStub(): Fbq {
  if (window.fbq) return window.fbq;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  return n;
}

function loadScript() {
  if (window.__fbLoaded) return;
  window.__fbLoaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
}

/**
 * Meta Pixel fora do caminho crítico: o stub enfileira init + PageView na hora,
 * e o fbevents.js carrega na primeira interação ou quando o navegador ficar ocioso.
 */
export function MetaPixel() {
  useEffect(() => {
    const fbq = ensureStub();
    fbq("init", PIXEL_ID);
    fbq("track", "PageView");

    const events: (keyof WindowEventMap)[] = ["scroll", "pointerdown", "keydown", "touchstart"];
    const onFirstInteraction = () => {
      loadScript();
      events.forEach((e) => removeEventListener(e, onFirstInteraction));
    };
    events.forEach((e) => addEventListener(e, onFirstInteraction, { once: true, passive: true }));

    const idle =
      "requestIdleCallback" in window
        ? requestIdleCallback(loadScript, { timeout: 5000 })
        : setTimeout(loadScript, 5000);

    return () => {
      events.forEach((e) => removeEventListener(e, onFirstInteraction));
      if ("requestIdleCallback" in window) cancelIdleCallback(idle as number);
      else clearTimeout(idle as ReturnType<typeof setTimeout>);
    };
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}

/** Dispara um evento do Pixel de qualquer lugar (usa a fila se o script ainda não carregou). */
export function fbTrack(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  ensureStub()("track", event, data);
}
