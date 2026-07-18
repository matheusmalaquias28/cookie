"use client";

import { track } from "@/components/Gtm";
import { fbTrackCustom } from "@/components/MetaPixel";

type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer e ao Pixel. */
  id: string;
  /** Nome do plano ("Basico" | "Completo"): dispara o evento CtaPlano<nome> no Pixel. O InitiateCheckout fica por conta da Hotmart, para não duplicar. */
  planName?: string;
  className?: string;
};

export function CtaButton({ href, label, id, planName, className = "" }: Props) {
  return (
    <a
      href={href}
      onClick={() => {
        track("cta_click", { cta_id: id, cta_label: label });
        if (planName) {
          fbTrackCustom(`CtaPlano${planName}`, { cta_id: id, cta_label: label });
        } else {
          fbTrackCustom("CtaClick", { cta_id: id, cta_label: label });
        }
      }}
      className={`cta-pulse flex h-[60px] w-full max-w-[365px] items-center justify-center bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
