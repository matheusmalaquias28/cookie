"use client";

import { track } from "@/components/Gtm";
import { fbTrack } from "@/components/MetaPixel";

type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer. */
  id: string;
  /** Valor do plano em R$ — quando presente, dispara InitiateCheckout no Pixel. */
  checkoutValue?: number;
  className?: string;
};

export function CtaButton({ href, label, id, checkoutValue, className = "" }: Props) {
  return (
    <a
      href={href}
      onClick={() => {
        track("cta_click", { cta_id: id, cta_label: label });
        if (checkoutValue !== undefined) {
          fbTrack("InitiateCheckout", {
            content_name: id,
            value: checkoutValue,
            currency: "BRL",
          });
        }
      }}
      className={`cta-pulse flex h-[60px] w-full max-w-[365px] items-center justify-center bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
