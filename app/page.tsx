import Image from "next/image";
import { Collage } from "@/components/Collage";
import { Marquee } from "@/components/Marquee";
import { MathSection } from "@/components/MathSection";
import { CtaButton } from "@/components/CtaButton";
import { TodayDate } from "@/components/TodayDate";
import { Countdown } from "@/components/Countdown";
import { StickyCta } from "@/components/StickyCta";
import { CHECKOUT_BASIC, CHECKOUT_COMPLETE } from "@/lib/config";

/* ---------- peças compartilhadas ---------- */

function Check({ className = "w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 13" fill="none" className={`${className} shrink-0`} aria-hidden>
      <path d="M17 1L6 12L1 7" stroke="#07C707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="z-10 inline-block rounded-full bg-badge px-[14px] py-[10px] text-[14px] font-semibold text-white">
      {children}
    </span>
  );
}

const PLAN_FEATURES = [
  "100 Receitas de Cookies validadas, testadas e aprovadas.",
  "Os Segredos da Massa Perfeita",
  "Técnicas de Preparo Profissional",
  "Modelagem e Padronização",
  "Erros Comuns e Como Corrigir",
];

const BONUS_FEATURES = [
  "🎁 Precificação para Venda",
  "🎁 Cálculo de Custos e Margem de Lucro",
  "🎁 Modelos de embalagens para Valorizar o Produto",
  "🎁 Como conseguir e Fidelizar os Primeiros Clientes",
];

function FeatureList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="flex w-full max-w-[356px] flex-col px-[10px] py-[5px]">
      {items.map((f) => (
        <li
          key={f}
          className={`flex items-center gap-[10px] p-[10px] text-left font-display text-[18px] leading-[1.008] ${light ? "text-white" : "text-black"}`}
        >
          <Check />
          {f}
        </li>
      ))}
    </ul>
  );
}

function Avatars() {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div className="flex items-center justify-center">
        {[
          ["avatar-2", "size-[29px]"],
          ["avatar-4", "size-[34px]"],
          ["avatar-5", "size-[42px] z-10"],
          ["avatar-3", "size-[34px]"],
          ["avatar-1", "size-[29px]"],
        ].map(([a, cls], i) => (
          <Image
            key={a}
            src={`/img/${a}.webp`}
            alt=""
            width={42}
            height={42}
            className={`rounded-full object-cover ${cls} ${i > 0 ? "-ml-[8px]" : ""}`}
          />
        ))}
      </div>
      <p className="text-[14px] font-semibold text-black">Mais de 2.000 aluno(a)s</p>
    </div>
  );
}

/* Carrossel dos materiais entregues (fichas A4). */
function MaterialsCarousel() {
  return (
    <Marquee
      duration={32}
      imageSize={{ width: 595, height: 842 }}
      items={Array.from({ length: 8 }, (_, i) => ({
        src: `/img/entregavel-${i + 1}.webp`,
        alt: `Ficha do material Cookie Lab ${i + 1}`,
      }))}
    />
  );
}

/* Carrossel de prints de depoimentos: 1,5 imagem visível por vez. */
function TestimonialGrid() {
  return (
    <Marquee
      duration={28}
      itemWidth={250}
      imageSize={{ width: 738, height: 1460 }}
      items={[
        { src: "/img/feedback-1.webp", alt: "Depoimento de aluna no WhatsApp" },
        { src: "/img/feedback-2.webp", alt: "Depoimento de aluna no WhatsApp" },
        { src: "/img/feedback-3.webp", alt: "Depoimento de aluna no WhatsApp" },
        { src: "/img/feedback-4.webp", alt: "Depoimento de aluna no WhatsApp" },
        { src: "/img/feedback-5.webp", alt: "Depoimento de aluna no Instagram", size: { width: 738, height: 1312 } },
        { src: "/img/feedback-6.webp", alt: "Depoimento de aluna no Instagram", size: { width: 738, height: 1312 } },
        { src: "/img/feedback-7.webp", alt: "Depoimento de aluna no Instagram", size: { width: 738, height: 1312 } },
      ]}
    />
  );
}

/* ---------- dados ---------- */

const WHY_CARDS = [
  "Baixo investimento",
  "Alta procura",
  "Fácil de aprender",
  "Alto valor percebido",
  "Pode vender pelo Instagram",
  "Condomínios",
  "Empresas",
  "Escolas",
];

const IDEAL_ITEMS = [
  "Ter uma renda extra sem precisar largar seu emprego",
  "Começar um pequeno negócio investindo pouco.",
  "Trabalhar no seu tempo, direto da cozinha da sua casa.",
  "Aprender uma receita que realmente chama atenção dos clientes.",
  "Vender um produto com alto valor percebido.",
  "Ganhar dinheiro nos finais de semana ou no tempo livre.",
];

const BONUSES = [
  {
    img: "/img/bonus-1.webp",
    title: "Guia de Precificação para venda",
    desc: "Aprenda a definir o preço certo para vender com confiança e lucrar em cada cookie.",
    price: "R$12,90",
  },
  {
    img: "/img/bonus-2.webp",
    title: "Cálculo de Custos e Margem de lucro",
    desc: "Descubra exatamente quanto custa produzir cada cookie e quanto sobra de lucro em cada venda.",
    price: "R$19,90",
  },
  {
    img: "/img/bonus-3.webp",
    title: "Modelos de Embalagens para Valorizar o Produto",
    desc: "Embalagens prontas e inspirações que deixam seus cookies mais profissionais e aumentam o valor percebido.",
    price: "R$49,90",
  },
  {
    img: "/img/bonus-4.webp",
    title: "Como Conseguir e Fidelizar os Primeiros Clientes",
    desc: "Estratégias simples para conquistar seus primeiros compradores e fazer com que eles voltem a comprar.",
    price: "R$12,90",
  },
];

const STEPS = [
  { icon: "🛒", title: "Passo 1", desc: "Você finaliza a compra de forma segura." },
  {
    icon: "📱",
    title: "Passo 2",
    desc: "Receba o seu acesso imediatamente em seu email. Você pode acessar no seu celular, computador e tablet, em qualquer lugar do planeta!",
  },
  { icon: "📁", title: "Passo 3", desc: "Baixe e visualize todos os arquivos." },
  { icon: "🍪", title: "Passo 4", desc: "Comece a produzir seus Cookies. Em caso de dúvidas basta chamar nosso suporte." },
];

const FAQ = [
  ["Nunca fiz cookies. Esse material é para mim?", "Sim! O método foi pensado para iniciantes: as receitas trazem o passo a passo completo, com técnicas explicadas do zero."],
  ["Preciso ter experiência na cozinha?", "Não. Você só precisa seguir as receitas — os segredos da massa, preparo e modelagem estão detalhados no material."],
  ["Quanto preciso investir para começar?", "Muito pouco. Os ingredientes são fáceis de encontrar em qualquer mercado e você pode começar com o que já tem na sua cozinha."],
  ["Quanto posso ganhar vendendo cookies?", "Depende do seu ritmo de produção e vendas. O material inclui precificação e cálculo de margem para você lucrar em cada fornada."],
  ["Como vou receber o material?", "Imediatamente após a compra, direto no seu e-mail. É só baixar, imprimir e usar."],
  ["O acesso é vitalício?", "Sim! Você paga uma única vez e o material é seu para sempre."],
  ["Os bônus estão inclusos?", "Os 4 bônus exclusivos estão inclusos apenas no Plano Completo."],
  ["Posso assistir pelo celular?", "Sim, o material funciona em celular, computador e tablet."],
  ["E se eu não gostar do material?", "Você tem 7 dias de garantia total. Basta pedir o reembolso e devolvemos todo o valor pago."],
  ["A compra é segura?", "Totalmente. O pagamento é processado por plataforma segura e seus dados ficam protegidos."],
  ["Funciona para quem mora em cidade pequena?", "Sim! Em cidades pequenas a concorrência é menor e o boca a boca funciona ainda mais rápido. Vizinhos, escolas, comércios e eventos locais são ótimos pontos de venda."],
  ["Eu sou tímida, não sei vender nem abordar as pessoas", "Sem problema. O bônus de como conseguir os primeiros clientes traz estratégias simples que não dependem de abordagem: você pode vender pelo WhatsApp, Instagram e por indicação — o produto chama atenção sozinho."],
  ["Tenho pouco tempo no meu dia, dá para vender mesmo assim?", "Dá sim. Você pode produzir em poucas horas nos horários livres ou finais de semana. A massa pode ser feita com antecedência, e você define seu próprio ritmo de produção e vendas."],
  ["Preciso ter muitos equipamentos para começar?", "Não. Forno, batedeira (ou até mesmo as mãos), tigelas e assadeiras que você provavelmente já tem em casa são suficientes para começar."],
  ["Por que esse material é diferente de uma simples receita de Cookie?", "Porque receita sozinha não gera renda. Aqui você recebe 100 receitas validadas + o passo a passo do negócio: precificação, cálculo de custos, embalagens e estratégias para conseguir e fidelizar clientes."],
] as const;

/* ---------- página ---------- */

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      {/* Barra de oferta */}
      <div className="flex items-center justify-center bg-brand p-[10px]">
        <p className="text-center font-display text-[12px] font-semibold leading-[1.6] text-white">
          <span className="block lg:inline">
            OFERTA ESPECIAL DISPONÍVEL SOMENTE HOJE <TodayDate />
          </span>
          <Countdown />
        </p>
      </div>
      <StickyCta />

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[16px] px-[10px] pt-[30px] text-center">
        <Image src="/img/logo.webp" alt="Cookie Lab" width={142} height={46} preload className="h-[46px] w-auto" />
        <h1 className="font-display text-[38px] font-semibold leading-[0.9] text-ink">
          Guia completo para vender Cookies e transformar sua cozinha em uma{" "}
          <span className="text-brand">nova fonte de renda</span>
        </h1>
        <p className="max-w-[362px] text-[18px]">
          Aprenda a <strong>produzir cookies premium,</strong> mesmo começando do zero, e descubra como vender um
          produto que as pessoas realmente querem comprar.
        </p>
        <Collage preload />
        <div className="w-full max-w-[382px] rounded-[12px] bg-gradient-to-br from-brand to-[#4b2bd6] px-[16px] py-[12px] text-white shadow-[0_10px_28px_-12px_rgba(109,74,255,0.5)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">🧮 Faça as contas</p>
          <p className="mt-[4px] font-display text-[18px] font-semibold leading-[1.25]">
            10 Cookies vendidos no dia por R$14 = <span className="whitespace-nowrap">R$2.800/mês</span>{" "}
            <span className="text-[13px] font-normal text-white/80">em vendas*</span>
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-[10px]">
          {["Receitas Testadas", "Ingredientes fáceis de encontrar", "Método pensado para iniciantes", "Estratégias para vender"].map((t) => (
            <span key={t} className="flex w-[175px] items-center gap-[10px] p-[10px] font-display text-[14px] text-black">
              <Check />
              <span className="text-left">{t}</span>
            </span>
          ))}
        </div>
        <CtaButton href="#plano-completo" label="QUERO COMEÇAR AGORA" id="hero" className="max-w-[382px]" />
        <p className="text-[14px] font-semibold text-muted">
          Você recebe tudo na hora, direto no seu e-mail ✉️ e 📞. É só imprimir e usar.
        </p>
        <Avatars />
      </section>

      {/* Depoimentos abaixo da hero */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] py-[26px]">
        <TestimonialGrid />
      </section>

      {/* Materiais */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[20px] px-[10px] py-[30px] text-center lg:max-w-[640px]">
        <h2 className="font-display text-[38px] font-semibold leading-[0.9] text-ink">
          Veja como são os materiais que você vai receber:
        </h2>
        <div className="relative aspect-square w-full max-w-[382px] overflow-hidden rounded-[7px] lg:max-w-[520px]">
          <Image
            src="/img/photo-woman.webp"
            alt="Aluna do Cookie Lab preparando massa de cookies na cozinha de casa"
            fill
            sizes="(max-width: 480px) 95vw, 382px"
            className="object-cover"
          />
        </div>
        <MaterialsCarousel />
      </section>

      {/* Por que vender cookies */}
      <section className="w-full bg-brand px-[39px] py-[37px]">
        <h2 className="mb-[24px] text-center font-display text-[38px] font-semibold leading-[0.9] text-white">
          Por que vender Cookies?🍪
        </h2>
        <div className="mx-auto grid max-w-[402px] grid-cols-2 gap-x-[10px] gap-y-[11px] lg:max-w-[1000px] lg:grid-cols-4">
          {WHY_CARDS.map((c) => (
            <div key={c} className="flex min-h-[99px] flex-col items-center justify-center gap-[10px] rounded-[10px] bg-white p-[10px]">
              <Check />
              <p className="text-center font-display text-[20px] leading-[1.18] text-black">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Oportunidade */}
      <section className="flex w-full flex-col items-center gap-[10px] bg-black px-[20px] py-[35px] text-center [&>p]:max-w-[620px]">
        <h2 className="font-display text-[38px] font-semibold leading-[0.9] text-white">
          Você já deve ter visto alguém vendendo Cookies...
        </h2>
        <p className="text-[18px] text-[#b6b6b6]">
          Mas a verdade é que ainda são poucas as pessoas aproveitando essa <span className="text-cta">oportunidade.</span>
        </p>
        <p className="text-[18px] text-white">
          Enquanto muita gente ainda nem percebeu essa tendência, quem começa agora pode conquistar seus primeiros
          clientes antes que o mercado fique cheio.
        </p>
        <p className="text-[18px] text-white">Você provavelmente já viu isso acontecer antes...</p>
        <p className="font-display text-[32px] font-semibold text-white">Morango do Amor 🍓</p>
        <p className="font-display text-[32px] font-semibold text-white">Bolo de Pote 🎂</p>
        <p className="font-display text-[32px] font-semibold text-white">Fatia de Bolo 🍰</p>
        <p className="font-display text-[32px] font-semibold text-white">Copo da Felicidade 🥤</p>
        <p className="text-[18px] text-[#b6b6b6]">
          Todos esses produtos viraram febre e fizeram muita gente começar uma renda extra.
        </p>
        <p className="text-[18px] text-[#b6b6b6]">Quem entrou cedo aproveitou a melhor fase.</p>
        <p className="text-[18px] text-[#b6b6b6]">
          Agora os <strong className="text-white">Cookies Premium</strong> estão ganhando espaço, e essa pode ser a sua
          chance de começar.
        </p>
        <CtaButton href="#plano-completo" label="QUERO COMEÇAR AGORA" id="oportunidade" className="mt-[10px]" />
      </section>

      {/* Aviso de urgência */}
      <section className="flex w-full flex-col items-center gap-[14px] bg-alert px-[20px] py-[35px] text-center [&>p]:max-w-[620px]">
        <span className="text-[40px] leading-none" aria-hidden>
          ⚠️
        </span>
        <h2 className="max-w-[620px] font-display text-[38px] font-semibold leading-[0.9] text-white">
          Você provavelmente perdeu as outras ondas...
        </h2>
        <p className="text-[18px] text-white">
          Morango do Amor, Bolo de Pote, Copo da Felicidade: todos venderam <strong>muito</strong> no Brasil inteiro, e
          quem entrou cedo faturou mais.
        </p>
        <p className="text-[18px] text-white">
          A hora de sair na frente e vender muito é <strong>agora</strong>, enquanto os Cookies Premium ainda estão
          começando.
        </p>
        <p className="font-display text-[22px] font-semibold leading-[1.1] text-white">
          Por isso, essa oferta NÃO ficará liberada por muito tempo!
        </p>
      </section>

      {/* Faça as contas */}
      <MathSection />

      {/* Antes x Depois */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[20px] px-[10px] py-[35px] text-center lg:max-w-[820px]">
        <h2 className="max-w-[382px] font-display text-[38px] font-semibold leading-[0.9] text-ink lg:max-w-[560px]">
          &ldquo;Mas fazer Cookies é fácil, por que eu deveria comprar?&rdquo;
        </h2>
        <p className="max-w-[382px] text-[18px]">
          Fazer é só o começo. A diferença entre um hobby e uma <strong>renda de verdade</strong> está no que vem
          depois: vender, precificar e conquistar clientes.
        </p>
        <div className="grid w-full max-w-[382px] grid-cols-1 gap-[12px] lg:max-w-[720px] lg:grid-cols-2">
          <div className="flex flex-col gap-[10px] rounded-[16px] border border-[#e6e6e6] bg-[#f9f9f9] p-[20px] text-left">
            <p className="font-display text-[22px] font-semibold text-muted">Sem o Cookie Lab</p>
            <ul className="flex flex-col gap-[8px] text-[17px] text-[#6b6b6b]">
              {["Sem renda", "Sem clientes", "Sem saber precificar"].map((t) => (
                <li key={t} className="flex items-center gap-[10px]">
                  <span aria-hidden>❌</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[10px] rounded-[16px] bg-brand p-[20px] text-left shadow-[0_16px_36px_-16px_rgba(109,74,255,0.6)]">
            <p className="font-display text-[22px] font-semibold text-white">Com o Cookie Lab</p>
            <ul className="flex flex-col gap-[8px] text-[17px] font-semibold text-white">
              {["Sabe produzir", "Sabe vender", "Sabe cobrar", "Sabe divulgar"].map((t) => (
                <li key={t} className="flex items-center gap-[10px]">
                  <span aria-hidden>✅</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CtaButton href="#plano-completo" label="QUERO COMEÇAR AGORA" id="antes_depois" />
      </section>

      {/* Ideal para você */}
      <section className="mx-auto flex w-full flex-col items-center gap-[8px] px-[10px] py-[35px]">
        <h2 className="mb-[16px] max-w-[274px] text-center font-display text-[38px] font-semibold leading-[0.9] text-ink">
          Ideal para você que deseja:
        </h2>
        <div className="grid w-full max-w-[275px] gap-[8px] lg:max-w-[860px] lg:grid-cols-3">
          {IDEAL_ITEMS.map((t) => (
            <div key={t} className="flex w-full flex-col items-center justify-center gap-[10px] rounded-[10px] bg-brand p-[10px]">
              <Check />
              <p className="text-center font-display text-[20px] leading-[1.18] text-white">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-[20px] flex w-full justify-center">
          <MaterialsCarousel />
        </div>
      </section>

      {/* Oferta principal */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] pb-[35px]">
        <h2 className="mb-[20px] max-w-[350px] text-center font-display text-[38px] font-semibold leading-[0.9] text-ink">
          Tudo o que você vai receber ao adquirir:
        </h2>
        <Pill>⚡ACESSO IMEDIATO</Pill>
        <div className="mt-[-17px] flex w-full flex-col items-center gap-[14px] rounded-[16px] bg-dark px-[10px] py-[30px] text-center">
          <h3 className="mt-[10px] font-display text-[32px] font-semibold leading-[1.008] text-white">
            100 Receitas de Cookies para transformar sua cozinha em uma nova <span className="text-brand">fonte de renda.</span>
          </h3>
          <Collage />
          <FeatureList items={PLAN_FEATURES} light />
          <p className="font-display text-[18px] text-white">E MUITO MAIS...</p>
          <CtaButton href="#plano-completo" label="QUERO COMEÇAR AGORA" id="oferta_principal" />
          <p className="text-[14px] font-semibold text-muted">
            Você recebe tudo na hora, direto no seu e-mail ✉️ e 📞. É só imprimir e usar.
          </p>
        </div>
      </section>

      {/* Bônus */}
      <section className="flex w-full flex-col items-center gap-[10px] bg-brand px-[39px] py-[37px]">
        <h2 className="mb-[10px] max-w-[640px] text-center font-display text-[32px] font-semibold leading-[1.008] text-white">
          🎁 Além das 100 receitas, ao adquirir o Plano Completo você vai levar 4 SUPER BÔNUS
        </h2>
        <div className="grid grid-cols-1 justify-items-center gap-[16px] lg:grid-cols-2">
        {BONUSES.map((b) => (
          <article key={b.title} className="flex w-full max-w-[324px] flex-col items-center gap-[13px] overflow-hidden rounded-[20px] bg-white pb-[20px] text-center">
            <Image src={b.img} alt={b.title} width={648} height={446} sizes="324px" className="h-[223px] w-full object-cover" />
            <h3 className="max-w-[280px] font-display text-[22px] font-semibold leading-[1.008] text-ink">{b.title}</h3>
            <p className="max-w-[280px] text-[16px] text-[#6b6b6b]">{b.desc}</p>
            <Pill>
              Valor: <s>{b.price}</s> <strong className="font-extrabold">GRÁTIS</strong>
            </Pill>
            <p className="font-display text-[15px] font-semibold leading-[1.008] text-alert">
              BÔNUS INCLUSO APENAS
              <br />
              NO PLANO COMPLETO
            </p>
          </article>
        ))}
        </div>
      </section>

      {/* Depoimentos 1 */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] py-[26px]">
        <TestimonialGrid />
      </section>

      {/* Planos */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center px-[10px] pb-[35px] lg:max-w-[1040px]">
        <Pill>⏰ OFERTA VÁLIDA POR TEMPO LIMITADO</Pill>
        <h2 className="my-[24px] max-w-[346px] text-center font-display text-[38px] font-semibold leading-[0.9] text-ink lg:max-w-[560px]">
          Aproveite enquanto o Plano Completo está em promoção
        </h2>

        <div className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:items-start lg:gap-[24px]">
        {/* Plano Básico */}
        <div className="flex w-full flex-col items-center gap-[14px] rounded-[16px] border border-[#d5d5d5] bg-[#f9f9f9] px-[10px] py-[30px] text-center">
          <h3 className="font-display text-[32px] font-semibold text-black">Plano Básico</h3>
          <Collage variant="basic" />
          <FeatureList items={PLAN_FEATURES} />
          <p className="font-display text-[18px] text-alert line-through">R$39,90</p>
          <p className="font-display text-[64px] font-semibold leading-none text-black">R$27,90</p>
          <p className="font-display text-[18px] text-black">ou 3x de R$9,96 no cartão</p>
          <CtaButton href={CHECKOUT_BASIC} label="QUERO ESSA OPÇÃO!" id="plano_basico" />
          <Image src="/hotmart.png" alt="Formas de pagamento aceitas e selo de compra segura Hotmart" width={1000} height={300} sizes="(min-width: 1024px) 280px, 63vw" className="w-full max-w-[280px]" />
          <p className="max-w-[280px] font-display text-[18px] font-semibold leading-[1.008] text-alert">
            AINDA DÁ TEMPO DE LEVAR A MELHOR OPÇÃO!{" "}
            <span className="text-black">Leve mais e pague menos, 97% escolhem a nossa</span>{" "}
            <span className="text-badge">SUPER OFERTA!</span>
          </p>
          <svg viewBox="0 0 41.2 41.2" className="w-[36px] lg:hidden" aria-hidden>
            <path d="M20.57 2.57V38.57M2.57 20.57L20.57 38.57L38.57 20.57" stroke="#0C0C0C" strokeWidth="5.14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Plano Completo */}
        <div id="plano-completo" className="mt-[40px] flex w-full scroll-mt-[20px] flex-col items-center lg:mt-0">
          <Pill>⚡MAIS VENDIDO</Pill>
          <div className="mt-[-17px] flex w-full flex-col items-center gap-[14px] rounded-[16px] bg-dark px-[10px] py-[30px] text-center">
            <p className="mt-[10px] bg-brand px-[11px] py-[10px] font-display text-[32px] font-semibold text-white">
              PLANO COMPLETO
            </p>
            <p className="flex items-center gap-[10px] font-display text-[18px] text-white">
              <Check /> TODOS OS BÔNUS INCLUSOS
            </p>
            <h3 className="font-display text-[32px] font-semibold leading-[1.008] text-white">
              100 Receitas de Cookies para transformar sua cozinha em uma nova <span className="text-brand">fonte de renda.</span>
            </h3>
            <Collage />
            <FeatureList items={[...PLAN_FEATURES, ...BONUS_FEATURES]} light />
            <p className="font-display text-[18px] text-alert line-through">R$99,90</p>
            <p className="font-display text-[64px] font-semibold leading-none text-white">R$37,90</p>
            <p className="font-display text-[18px] text-white">ou 5x de R$8,39 no cartão</p>
            <CtaButton href={CHECKOUT_COMPLETE} label="QUERO O PLANO COMPLETO!" id="plano_completo" />
            <Image src="/hotmart.png" alt="Formas de pagamento aceitas e selo de compra segura Hotmart" width={1000} height={300} sizes="(min-width: 1024px) 280px, 63vw" className="w-full max-w-[280px] rounded-[8px] bg-white p-[10px]" />
          </div>
        </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="flex w-full flex-col items-center gap-[20px] bg-navy px-[49px] py-[35px] text-center">
        <Image src="/img/guarantee-seal.webp" alt="Selo de garantia de 7 dias" width={241} height={242} sizes="241px" />
        <h2 className="font-display text-[32px] font-semibold leading-[1.008] text-white">
          Compra 100% Segura e Garantida!
        </h2>
        <div className="max-w-[320px] text-[16px] text-white">
          <p>SEU INVESTIMENTO É TOTALMENTE SEGURO</p>
          <p className="mt-[16px]">
            Oferecemos 7 dias de garantia total para você testar o material. Se decidir que não é para você, basta
            cancelar a compra e devolveremos todo o valor pago, sem complicação.
          </p>
          <p className="mt-[20px] text-[14px]">Precisa de ajuda? Entre em contato conosco:</p>
          <a
            href="mailto:contato@acookiela.com"
            className="mt-[10px] inline-block rounded-[10px] bg-cta px-[24px] py-[12px] font-display text-[18px] font-semibold text-navy transition hover:brightness-110"
          >
            contato@acookielab.com
          </a>
        </div>
      </section>

      {/* Depoimentos 2 */}
      <section className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-[16px] px-[10px] py-[35px] text-center">
        <Avatars />
        <h2 className="max-w-[356px] font-display text-[38px] font-semibold leading-[0.9] text-ink">
          Veja os depoimentos dos nossos clientes!
        </h2>
        <TestimonialGrid />
      </section>

      {/* Como funciona */}
      <section className="flex w-full flex-col items-center gap-[10px] bg-brand px-[39px] py-[37px] text-center">
        <h2 className="font-display text-[38px] font-semibold leading-[0.9] text-white">
          Como funciona o acesso:
          <br />
          <span className="text-[18px] font-normal">(passo a passo)</span>
        </h2>
        <div className="flex flex-col items-center gap-[10px] lg:flex-row lg:items-stretch lg:justify-center">
          {STEPS.map((s) => (
            <div key={s.title} className="flex w-[200px] flex-col items-center gap-[10px] rounded-[10px] bg-white p-[16px] lg:justify-start">
              <span className="text-[36px] leading-none" aria-hidden>
                {s.icon}
              </span>
              <p className="font-display text-[20px] text-black">{s.title}</p>
              <p className="text-[14px] text-[#696969]">{s.desc}</p>
            </div>
          ))}
        </div>
        <CtaButton href="#plano-completo" label="QUERO ACESSAR AGORA!" id="passo_a_passo" className="mt-[10px]" />
      </section>

      {/* FAQ */}
      <section className="mx-auto flex w-full flex-col items-center gap-[4px] px-[10px] py-[35px]">
        <h2 className="mb-[20px] text-center font-display text-[38px] font-semibold leading-[0.9] text-ink">
          Perguntas Frequentes
        </h2>
        {FAQ.map(([q, a]) => (
          <details key={q} className="w-full max-w-[382px] rounded-[10px] bg-[#efefef] lg:max-w-[640px]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-[10px] p-[12px] text-[14px]">
              {q}
              <svg viewBox="0 0 13 7" className="faq-chevron w-[12px] shrink-0 transition-transform duration-200" aria-hidden>
                <path d="M0.5 0.5L6.5 6.5L12.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </summary>
            <p className="px-[12px] pb-[12px] text-[14px] text-muted">{a}</p>
          </details>
        ))}
      </section>

      {/* Rodapé */}
      <footer className="mx-auto w-full max-w-[720px] px-[24px] py-[30px] text-center">
        <p className="text-[14px]">Copyright {new Date().getFullYear()} - Todos os direitos reservados.</p>
        <p className="mt-[8px] text-[14px]">
          Contato:{" "}
          <a href="mailto:contato@acookiela.com" className="font-semibold text-brand hover:underline">
            contato@acookielab.com
          </a>
        </p>
        <p className="mt-[20px] text-[12px] text-muted">
          Este site não possui qualquer vínculo com Facebook, Google ou qualquer outra plataforma mencionada. Todos os
          direitos da obra &ldquo;Cookie Lab&rdquo; são reservados ao seu autor. A reprodução não autorizada, total ou
          parcial, por qualquer meio, constitui violação de direitos autorais e pode resultar em sanções civis e
          criminais, de acordo com a legislação aplicável.
        </p>
      </footer>
    </main>
  );
}
