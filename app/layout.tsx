import type { Metadata } from "next";
import { Fredoka, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Cookies Lucrativos | Renda Extra com Cookies Artesanais",
  description:
    "Aprenda a produzir e vender cookies artesanais na sua própria cozinha, conquistando vendas que podem gerar R$200 ou mais por dia, mesmo sem experiência anterior.",
  openGraph: {
    title: "Cookies Lucrativos | Renda Extra com Cookies Artesanais",
    description:
      "Receitas testadas, precificação, embalagens e desafio de 7 dias para transformar sua cozinha em uma nova fonte de renda.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/img/logo-desafio-cookie-lucrativos.png", width: 828, height: 828 }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/img/logo-desafio-cookie-lucrativos.png?v=3",
    shortcut: "/img/logo-desafio-cookie-lucrativos.png?v=3",
    apple: "/img/logo-desafio-cookie-lucrativos.png?v=3",
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
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xo7jsjm0j0");`,
          }}
        />
        {children}
        <Gtm />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
