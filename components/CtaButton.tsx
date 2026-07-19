type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página (mantido para compatibilidade). */
  id: string;
  planName?: string;
  className?: string;
};

export function CtaButton({ href, label, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`cta-pulse flex h-[60px] w-full max-w-[365px] items-center justify-center bg-cta font-display text-[24px] font-semibold text-white ${className}`}
    >
      {label}
    </a>
  );
}
