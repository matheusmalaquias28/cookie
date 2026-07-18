"use client";

import { useEffect, useRef, useState } from "react";

/* Ícones Lucide inline (stroke 2, round) para não adicionar dependência */
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-brand, #6d4aff)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-[16px] shrink-0" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function IconArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#c7c7cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-[18px] ${className}`} aria-hidden>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
function IconTrendingUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[22px] shrink-0 text-white/90" aria-hidden>
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  );
}

function Step({ delay, children, big = false }: { delay: number; children: React.ReactNode; big?: boolean }) {
  return (
    <div
      className={`fx-item w-full rounded-[24px] ${big ? "fx-final bg-[var(--color-brand,#6d4aff)] py-[28px] shadow-[0_20px_50px_-12px_color-mix(in_srgb,var(--color-brand,#6d4aff)_45%,transparent)]" : "bg-[#f5f5f7] py-[18px]"} flex flex-col items-center gap-[2px] px-[24px] text-center`}
      style={{ "--fx-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function Connector({ delay }: { delay: number }) {
  return (
    <div className="fx-item flex flex-col items-center" style={{ "--fx-delay": `${delay}s` } as React.CSSProperties}>
      <span className="h-[10px] w-px bg-[#eaeaea]" />
      <IconArrowDown className="-mt-[3px]" />
    </div>
  );
}

export function MathSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full bg-white px-[24px] py-[72px] font-sans ${inView ? "fx-in" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-[1080px] items-center gap-[48px] lg:grid-cols-[2fr_3fr]">
        {/* Texto */}
        <div className="fx-item flex flex-col items-center gap-[20px] text-center lg:items-start lg:text-left" style={{ "--fx-delay": "0s" } as React.CSSProperties}>
          <span className="inline-flex items-center gap-[6px] rounded-full bg-[#f5f5f7] px-[14px] py-[6px] text-[12px] font-bold tracking-[0.08em] text-[var(--color-brand,#6d4aff)]">
            🧮 FAÇA AS CONTAS
          </span>
          <h2 className="font-display text-[34px] font-semibold leading-[1.05] text-[#111111]">
            Quanto você precisaria vender para fazer uma renda extra?
          </h2>
          <p className="max-w-[340px] text-[16px] leading-relaxed text-[#6b6b6b]">
            Vendendo só 10 cookies por dia, para vizinhas, colegas de trabalho e pelo WhatsApp, as contas ficam assim:
          </p>
          <ul className="flex flex-col gap-[10px] text-[15px] font-semibold text-[#111111]">
            {["Receita validada", "Produto premium", "Baixo investimento"].map((t) => (
              <li key={t} className="flex items-center gap-[10px]">
                <IconCheck />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline visual */}
        <div className="relative">
          {/* brilho roxo discreto */}
          <div aria-hidden className="absolute inset-x-[10%] top-[15%] h-[70%] rounded-full bg-[var(--color-brand,#6d4aff)] opacity-[0.07] blur-[80px]" />
          <div className="relative flex flex-col items-center gap-[6px] rounded-[24px] border border-[#eaeaea] bg-white px-[28px] py-[36px] shadow-[0_24px_60px_-24px_rgba(17,17,17,0.12)]">
            <Step delay={0.15}>
              <span className="text-[28px] leading-none" aria-hidden>
                🍪
              </span>
              <span className="mt-[6px] text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6b6b6b]">Cookie Premium</span>
              <span className="font-display text-[28px] font-semibold text-[#111111]">R$14</span>
            </Step>

            <Connector delay={0.45} />

            <Step delay={0.6}>
              <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6b6b6b]">10 vendidos por dia</span>
              <span className="font-display text-[32px] font-semibold text-[#111111]">R$140</span>
            </Step>

            <Connector delay={0.9} />

            <Step delay={1.05} big>
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/70">20 dias</span>
              <span className="flex items-center gap-[10px]">
                <span className="font-display text-[56px] font-semibold leading-none text-white sm:text-[64px]">R$2.800</span>
                <IconTrendingUp />
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">em vendas*</span>
            </Step>
          </div>

          <p className="fx-item mt-[16px] text-center text-[12px] leading-relaxed text-[#9b9b9b]" style={{ "--fx-delay": "1.5s" } as React.CSSProperties}>
            *Exemplo ilustrativo. Os resultados variam conforme preço de venda, custos, demanda da sua região e
            dedicação ao negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
