"use client";

import { track } from "@/components/Gtm";
import { fbTrack, fbTrackCustom } from "@/components/MetaPixel";

type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer e ao Pixel. */
  id: string;
  /** Valor do plano em R$: quando presente, o clique dispara InitiateCheckout no Pixel. */
  checkoutValue?: number;
  className?: string;
};

export function CtaButton({ href, label, id, checkoutValue, className = "" }: Props) {
  return (
    <a
      href={href}
      onClick={() => {
        track("cta_click", { cta_id: id, cta_label: label });
        fbTrackCustom("CtaClick", { cta_id: id, cta_label: label });
        if (checkoutValue !== undefined) {
          fbTrack("InitiateCheckout", { value: checkoutValue, currency: "BRL" });
        }
      }}
      className={`cta-pulse flex h-[60px] w-full max-w-[365px] items-center justify-center bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
