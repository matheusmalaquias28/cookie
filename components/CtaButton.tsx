"use client";

import { track } from "@/components/Gtm";

type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer. */
  id: string;
  className?: string;
};

export function CtaButton({ href, label, id, className = "" }: Props) {
  return (
    <a
      href={href}
      onClick={() => track("cta_click", { cta_id: id, cta_label: label })}
      className={`cta-pulse flex h-[60px] w-full max-w-[365px] items-center justify-center bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
