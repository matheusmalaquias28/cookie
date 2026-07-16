import Image from "next/image";

type Item = { src: string; alt: string };

type Props = {
  items: Item[];
  /** Segundos para a trilha percorrer um ciclo completo. */
  duration?: number;
  /** Largura de cada item em px (define quantos aparecem por vez). */
  itemWidth?: number;
  /** Dimensões intrínsecas das imagens (para o next/image calcular o aspect ratio). */
  imageSize?: { width: number; height: number };
};

/**
 * Carrossel infinito e contínuo, só com CSS.
 * A trilha é renderizada duas vezes; a animação desloca -50% e reinicia sem emenda.
 */
export function Marquee({ items, duration = 20, itemWidth = 188, imageSize = { width: 386, height: 578 } }: Props) {
  return (
    <div className="w-full max-w-[382px] overflow-hidden rounded-[7px]">
      <div
        className="marquee-track flex w-max gap-[6px]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) =>
          items.map((it, i) => (
            <Image
              key={`${copy}-${i}`}
              src={it.src}
              alt={copy === 0 ? it.alt : ""}
              aria-hidden={copy === 1}
              width={imageSize.width}
              height={imageSize.height}
              sizes={`${itemWidth + 2}px`}
              className="shrink-0 rounded-[7px] object-cover"
              style={{ width: itemWidth }}
            />
          )),
        )}
      </div>
    </div>
  );
}
