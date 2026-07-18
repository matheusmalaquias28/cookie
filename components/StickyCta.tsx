"use client";

import { useEffect, useState } from "react";
import { track } from "@/components/Gtm";
import { fbTrackCustom } from "@/components/MetaPixel";

/**
 * CTA fixo no rodapé do mobile: aparece depois que o hero sai da tela
 * e some enquanto o card do Plano Completo está visível (para não cobrir o botão real).
 */
export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    const plan = document.getElementById("plano-completo");
    if (!hero || !plan) return;

    const heroIo = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting));
    const planIo = new IntersectionObserver(([e]) => setPlanVisible(e.isIntersecting), { threshold: 0.15 });
    heroIo.observe(hero);
    planIo.observe(plan);
    return () => {
      heroIo.disconnect();
      planIo.disconnect();
    };
  }, []);

  const show = pastHero && !planVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-[10px] pb-[max(10px,env(safe-area-inset-bottom))] transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <a
        href="#plano-completo"
        tabIndex={show ? 0 : -1}
        onClick={() => {
          track("cta_click", { cta_id: "sticky_mobile", cta_label: "QUERO COMEÇAR AGORA" });
          fbTrackCustom("CtaClick", { cta_id: "sticky_mobile", cta_label: "QUERO COMEÇAR AGORA" });
        }}
        className="mx-auto flex h-[56px] w-full max-w-[420px] items-center justify-center rounded-full bg-cta font-display text-[20px] font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-[0.98]"
      >
        QUERO COMEÇAR AGORA
      </a>
    </div>
  );
}
