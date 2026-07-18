/**
 * Conteúdo da landing page — edite APENAS este arquivo (e as imagens em /public)
 * para replicar o modelo em outro projeto. O layout em app/page.tsx não precisa mudar.
 *
 * Checklist ao clonar o template:
 * 1. Troque `theme.brandColor` (re-tematiza todos os bg-brand/text-brand).
 * 2. Substitua as imagens em /public e ajuste os caminhos/dimensões aqui.
 * 3. Revise textos, preços e links de checkout (lib/config.ts).
 * 4. Atualize metadata/favicon em app/layout.tsx, app/icon.png e app/opengraph-image.png.
 * 5. Configure pixels/IDs de tracking em app/layout.tsx.
 */

export const theme = {
  /** Cor principal da marca (sobrescreve --color-brand só nesta página). */
  brandColor: "#914c2e",
};

export const offerBar = {
  text: "OFERTA ESPECIAL DISPONÍVEL SOMENTE HOJE",
};

export const hero = {
  logo: { src: "/v2/logo-cookie-lucrativo.png", alt: "Cookies Lucrativos", width: 142, height: 42 },
  titleHighlight: "+R$200 POR DIA ",
  title: "COM COOKIES ARTESANAIS EM CASA",
  image: { src: "/img/img-hero-cookies-lucrativos.jpg", alt: "Materiais do desafio Cookies Lucrativos para vender cookies artesanais", width: 1100, height: 1100 },
  subtitle:
    "Você aprenderá a produzir e vender cookies artesanais na sua própria cozinha, conquistando vendas que podem gerar R$200 ou mais por dia, mesmo sem experiência anterior.",
  ctaLabel: "QUERO COMEÇAR AGORA",
  note: "Você não precisa abrir uma confeitaria. A maioria das primeiras vendas acontece para vizinhos, colegas de trabalho, faculdade e contatos do WhatsApp.",
  checks: [
    "Receitas fáceis e rápidas de cookies",
    "Estratégias de preços lucrativos",
    "Embalagens atrativas para venda",
    "Desafio de 7 dias para suas primeiras vendas",
    "Suporte em grupo exclusivo",
  ],
  deliveryNote: "Você recebe tudo na hora, direto no seu e-mail ✉️ e 📞. É só imprimir e usar.",
  socialProofLabel: "Mais de 2.000 aluno(a)s",
};

export const materials = {
  title: "VEJA AS RECEITAS QUE VOCÊ VAI RECEBER JÁ!",
  imageSize: { width: 575, height: 863 },
  items: [
    { src: "/entregaveis/cookie-kitkat.jpg", alt: "Ficha da receita: Cookies KitKat" },
    { src: "/entregaveis/cookie-nutella.jpg", alt: "Ficha da receita: Cookies Nutella" },
    { src: "/entregaveis/cookie-oreo.jpg", alt: "Ficha da receita: Cookies Oreo" },
    { src: "/entregaveis/cookie-ferrero-rocher.jpg", alt: "Ficha da receita: Cookies Ferrero Rocher" },
  ],
};

export const testimonials = {
  title: "Veja os depoimentos dos nossos clientes!",
  imageSize: { width: 738, height: 1460 },
  items: [
    { src: "/img/feedback-1.webp", alt: "Depoimento de aluna no WhatsApp" },
    { src: "/img/feedback-2.webp", alt: "Depoimento de aluna no WhatsApp" },
    { src: "/img/feedback-3.webp", alt: "Depoimento de aluna no WhatsApp" },
    { src: "/img/feedback-4.webp", alt: "Depoimento de aluna no WhatsApp" },
    { src: "/img/feedback-5.webp", alt: "Depoimento de aluna no Instagram", size: { width: 738, height: 1312 } },
    { src: "/img/feedback-6.webp", alt: "Depoimento de aluna no Instagram", size: { width: 738, height: 1312 } },
    { src: "/img/feedback-7.webp", alt: "Depoimento de aluna no Instagram", size: { width: 738, height: 1312 } },
  ],
};

export const whySection = {
  title: "OS MATERIAIS DO DESAFIO COOKIES LUCRATIVOS POSSUEM:",
  cards: [
    { icon: "📖", text: "Receitas testadas e aprovadas — fáceis de seguir e aplicar" },
    { icon: "💰", text: "Orientações sobre precificação — saiba quanto cobrar" },
    { icon: "🎁", text: "Sugestões de embalagens — atraia mais clientes com um bom visual" },
    { icon: "🗓️", text: "Desafio de 7 dias — comece a vender rapidamente" },
    { icon: "💬", text: "Acesso a uma comunidade de suporte — tire dúvidas e troque experiências" },
  ],
};

export const idealSection = {
  title: "ESTE DESAFIO É IDEAL PARA VOCÊ QUE DESEJA",
  items: [
    { title: "AUMENTAR SUA RENDA MENSAL", desc: "Ganhar até R$1.000 a mais por semana, trabalhando em casa." },
    { title: "TRABALHAR NO SEU PRÓPRIO TEMPO", desc: "Produzir e vender cookies nas horas vagas, sem pressão." },
    { title: "APRENDER UMA NOVA HABILIDADE", desc: "Descubra como fazer cookies deliciosos mesmo sem experiência." },
    { title: "TER SUPORTE E COMUNIDADE", desc: "Contar com ajuda de outras confeiteiras em um grupo exclusivo." },
    { title: "VENDER DE FORMA SIMPLES", desc: "Aprender a conquistar clientes com ações práticas e diretas." },
    { title: "CRIAR LEMBRANÇAS GOSTOSAS", desc: "Fazer cookies que podem se tornar a sua nova fonte de renda." },
  ],
};

export const offerSection = {
  title: "TUDO O QUE VOCÊ VAI RECEBER",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.",
  image: { src: "/img/img-hero-cookies-lucrativos.jpg", alt: "Materiais do desafio Cookies Lucrativos", width: 1100, height: 1100 },
  features: [
    "Precificação: o preço certo para lucrar em cada cookie",
    "Custos e margem: saiba quanto sobra em cada venda",
    "Embalagens prontas que valorizam seu cookie",
    "Como conseguir e fidelizar as primeiras clientes",
  ],
  moreLabel: "E MUITO MAIS...",
  ctaLabel: "QUERO COMEÇAR AGORA",
  deliveryNote: hero.deliveryNote,
};

export const bonusSection = {
  titleLines: ["E NÃO PARA POR AÍ... TEM MAIS!", "você também vai receber:"],
  pill: "🎁 3 BÔNUS EXCLUSIVOS",
  exclusiveNote: ["BÔNUS INCLUSO APENAS", "NO PLANO COMPLETO"],
  items: [
    { img: "/entregaveis/bonus-instagram.webp", title: "Instagram Magnético para Confeiteiras", desc: "Como atrair clientes pelo Instagram.", price: "R$27" },
    { img: "/entregaveis/bonus-acoes.webp", title: "20 Ações para Conseguir Clientes", desc: "Ações simples para gerar pedidos.", price: "R$27" },
    { img: "/entregaveis/bonus-vendas.webp", title: "Comunidade Primeiras Vendas", desc: "Grupo exclusivo para networking e dúvidas.", price: "R$27" },
  ],
};

/** Itens 🎁 exibidos nas listas dos planos (tachados no Básico, inclusos no Completo). */
export const bonusFeatures = [
  "🎁 Instagram Magnético para Confeiteiras",
  "🎁 20 Ações para Conseguir Clientes",
  "🎁 Comunidade Primeiras Vendas",
];

export const plansSection = {
  pill: "⏰ OFERTA VÁLIDA POR TEMPO LIMITADO",
  title: "ESCOLHA A MELHOR OPÇÃO PARA VOCÊ",
  basic: {
    name: "Plano Básico",
    image: { src: "/entregaveis/plano-basico-cookie.jpg", alt: "Materiais do Plano Básico do desafio Cookies Lucrativos", width: 1104, height: 1104 },
    receiveLabel: "você recebe:",
    features: [
      "Receitas de Cookies Clássicos",
      "Guia de Precificação Lucrativa",
      "Sugestões de Embalagens Criativas",
      "Acesso ao Desafio de 7 dias",
    ],
    oldPrice: "R$37,90",
    price: "R$27,90",
    installments: "ou 4x de R$7,47 no cartão",
    savings: "🟢 você economiza R$10,00",
    ctaLabel: "QUERO O PLANO BÁSICO!",
  },
  complete: {
    badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    name: "PLANO COMPLETO",
    allBonusesLabel: "TODOS OS BÔNUS INCLUSOS",
    image: { src: "/img/img-hero-cookies-lucrativos.jpg", alt: "Materiais do desafio Cookies Lucrativos", width: 1100, height: 1100 },
    pill: "⚡3X MAIS CONTEÚDOS",
    features: [
      "Receitas de cookies clássicos e gourmet.",
      "Guia de precificação lucrativa.",
      "Sugestões de embalagens criativas.",
      "Desafio de 7 dias para suas primeiras vendas.",
      "Acesso à comunidade de suporte.",
    ],
    oldPrice: "R$67,90",
    price: "R$37,90",
    installments: "ou 6x de R$6,35 no cartão",
    savings: "🟢 você economiza R$30,00",
    ctaLabel: "QUERO O PLANO COMPLETO!",
  },
  upsellNote: {
    alert: "AINDA DÁ TEMPO DE LEVAR A MELHOR OPÇÃO!",
    body: "Leve mais e pague menos, 97% escolhem a nossa",
    highlight: "SUPER OFERTA!",
  },
  paybackBadge: {
    title: "UMA ÚNICA VENDA PODE PAGAR O VALOR DO PACOTE INTEIRO.",
    subtitle: "Todo o resto vira lucro.",
  },
};

export const guarantee = {
  seal: { src: "/img/guarantee-seal.webp", alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
  title: "Compra 100% Segura e Garantida!",
  intro: "SEU INVESTIMENTO É TOTALMENTE SEGURO",
  lead: "Isso significa que, a qualquer momento, se você achar que:",
  bullets: [
    "o material não faz sentido para suas vendas.",
    "as receitas não atendem suas expectativas.",
    "ou simplesmente não quiser continuar.",
  ],
  outro: "Você pode solicitar o reembolso. Sem prazo, sem burocracia.",
  outroStrong: "O risco fica todo do nosso lado.",
  helpLabel: "Precisa de ajuda? Entre em contato conosco:",
};

export const contact = {
  email: "contato@acookielab.com",
};

export const stepsSection = {
  title: "Como funciona o acesso:",
  subtitle: "(passo a passo)",
  ctaLabel: "QUERO ACESSAR AGORA!",
  steps: [
    {
      icon: "🛒",
      title: "Conclua sua compra",
      desc: "Após o pagamento, seu acesso é liberado automaticamente.",
      items: ["Você recebe um e-mail de confirmação.", "Acesse a área de membros."],
    },
    {
      icon: "📱",
      title: "Entre na área de membros",
      desc: "Acesse o conteúdo exclusivo do desafio.",
      items: ["Receitas e guias disponíveis.", "Suporte em grupo para dúvidas.", "Networking com outras confeiteiras."],
    },
    {
      icon: "📁",
      title: "Baixe os arquivos",
      desc: "Tenha acesso a todos os materiais prontos.",
      items: ["Receitas em formato PDF.", "Guias prontos para impressão.", "Conteúdo acessível sempre que precisar."],
    },
    {
      icon: "🍪",
      title: "Use e aplique",
      desc: "Comece a produzir e vender seus cookies.",
      items: ["Imprima as receitas.", "Prepare os cookies.", "Venda e veja sua renda aumentar."],
    },
  ],
};

export const faq: readonly (readonly [string, string])[] = [
  ["Nunca fiz cookies. Esse material é para mim?", "Sim! O método foi pensado para iniciantes: as receitas trazem o passo a passo completo, com técnicas explicadas do zero."],
  ["Preciso ter experiência na cozinha?", "Não. Você só precisa seguir as receitas — os segredos da massa, preparo e modelagem estão detalhados no material."],
  ["Quanto preciso investir para começar?", "Muito pouco. Os ingredientes são fáceis de encontrar em qualquer mercado e você pode começar com o que já tem na sua cozinha."],
  ["Quanto posso ganhar vendendo cookies?", "Depende do quanto você produz e vende. Para ter uma referência: um cookie gourmet é vendido em média entre R$10 e R$16, com custo de produção bem menor que isso. O material inclui a planilha de precificação e margem para você saber exatamente seu lucro por fornada."],
  ["Como vou receber o material?", "Imediatamente após a compra, direto no seu e-mail. É só baixar, imprimir e usar."],
  ["O acesso é vitalício?", "Sim! Você paga uma única vez e o material é seu para sempre."],
  ["Os bônus estão inclusos?", "Os 4 bônus exclusivos estão inclusos apenas no Plano Completo."],
  ["Posso assistir pelo celular?", "Sim, o material funciona em celular, computador e tablet."],
  ["E se eu não gostar do material?", "Você tem 7 dias de garantia total. Basta pedir o reembolso e devolvemos todo o valor pago."],
  ["A compra é segura?", "Totalmente. O pagamento é processado por plataforma segura e seus dados ficam protegidos."],
  ["Funciona para quem mora em cidade pequena?", "Sim! Em cidades pequenas a concorrência é menor e o boca a boca funciona ainda mais rápido. Vizinhos, escolas, comércios e eventos locais são ótimos pontos de venda."],
  ["Eu sou tímida, não sei vender nem abordar as pessoas", "Sem problema. O bônus de como conseguir os primeiros clientes traz estratégias simples que não dependem de abordagem: você pode vender pelo WhatsApp, Instagram e por indicação — o produto chama atenção sozinho."],
  ["Tenho pouco tempo no meu dia, dá para vender mesmo assim?", "Dá sim. Você pode produzir em poucas horas nos horários livres ou finais de semana. A massa pode ser feita com antecedência, e você pode trabalhar por encomenda, produzindo só o que já foi vendido, sem desperdício."],
  ["Preciso ter muitos equipamentos para começar?", "Não. Forno, batedeira (ou até mesmo as mãos), tigelas e assadeiras que você provavelmente já tem em casa são suficientes para começar."],
  ["Por que esse material é diferente de uma simples receita de Cookie?", "Porque receita sozinha não gera renda. Aqui você recebe 100 receitas validadas + o passo a passo do negócio: precificação, cálculo de custos, embalagens e estratégias para conseguir e fidelizar clientes."],
];

export const footer = {
  legal:
    "Este site não possui qualquer vínculo com Facebook, Google ou qualquer outra plataforma mencionada. Todos os direitos da obra “Desafio Cookies Lucrativos” são reservados ao seu autor. A reprodução não autorizada, total ou parcial, por qualquer meio, constitui violação de direitos autorais e pode resultar em sanções civis e criminais, de acordo com a legislação aplicável.",
};
