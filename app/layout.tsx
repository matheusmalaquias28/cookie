import type { Metadata } from "next";
import { Fredoka, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Gtm } from "@/components/Gtm";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cookie Lab | 100 Receitas de Cookies para Renda Extra",
  description:
    "Aprenda a produzir cookies premium, mesmo começando do zero, e descubra como vender um produto que as pessoas realmente querem comprar. Acesso imediato.",
  openGraph: {
    title: "Cookie Lab | 100 Receitas de Cookies para Renda Extra",
    description:
      "100 receitas de cookies validadas, testadas e aprovadas para transformar sua cozinha em uma nova fonte de renda.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/img/favicon.png?v=2",
    shortcut: "/img/favicon.png?v=2",
    apple: "/img/favicon.png?v=2",
  },
  other: {
    "facebook-domain-verification": "605r3kua2i8ifzjkc9a5lbw6yw6dy8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${manrope.variable} antialiased`}>
      <body>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        />
        {children}
        <Gtm />
        <MetaPixel />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
