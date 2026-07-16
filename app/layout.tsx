import type { Metadata } from "next";
import { Fredoka, Manrope } from "next/font/google";
import { Gtm } from "@/components/Gtm";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${manrope.variable} antialiased`}>
      <body>
        {children}
        <Gtm />
      </body>
    </html>
  );
}
