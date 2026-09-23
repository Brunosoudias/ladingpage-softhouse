export const SITE = {
  name: "BR Coder",
  tagline: "Software sob medida para negócios que querem evoluir.",
  url: "https://brcoder.com.br",
  email: "brunosousadias.dev@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;

export const TRUST_INDICATORS = [
  "Projetos sob medida",
  "Web • SaaS • Sistemas • APIs",
  "Do MVP à escala",
  "Tecnologia pensada para o negócio",
] as const;

export const SOLUTIONS = [
  {
    icon: "layout",
    title: "Landing Pages",
    description: "Páginas rápidas, modernas e focadas em conversão.",
  },
  {
    icon: "monitor",
    title: "Sistemas Web",
    description: "Sistemas internos, administrativos e operacionais personalizados.",
  },
  {
    icon: "cloud",
    title: "SaaS",
    description: "Produtos digitais escaláveis preparados para atender múltiplos clientes.",
  },
  {
    icon: "users",
    title: "CRM",
    description: "Sistemas para organizar clientes, vendas, atendimento e processos comerciais.",
  },
  {
    icon: "bar-chart",
    title: "Dashboards",
    description: "Painéis de dados para acompanhar indicadores e tomar decisões.",
  },
  {
    icon: "git-merge",
    title: "Integrações",
    description: "Conectamos APIs, plataformas e sistemas para eliminar processos manuais.",
  },
  {
    icon: "zap",
    title: "Automação",
    description: "Transformamos tarefas repetitivas em fluxos automatizados.",
  },
  {
    icon: "box",
    title: "Aplicações Personalizadas",
    description: "Soluções desenvolvidas especificamente para as necessidades do negócio.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    number: "01",
    title: "Entendimento do negócio",
    description: "Antes de escrever código, entendemos o problema que precisa ser resolvido.",
  },
  {
    number: "02",
    title: "Desenvolvimento sob medida",
    description: "Nada de soluções engessadas quando o negócio precisa de algo específico.",
  },
  {
    number: "03",
    title: "Arquitetura preparada para crescer",
    description: "Construímos pensando no presente, mas evitando decisões que limitem o futuro.",
  },
  {
    number: "04",
    title: "Comunicação próxima",
    description: "O cliente acompanha o projeto e entende o que está sendo desenvolvido.",
  },
] as const;

export const AUDIENCES = [
  {
    title: "Empresas",
    description: "Precisam digitalizar processos, criar sistemas internos ou integrar ferramentas.",
  },
  {
    title: "Startups",
    description: "Precisam transformar uma ideia em MVP e validar rapidamente uma solução.",
  },
  {
    title: "Empresas em crescimento",
    description: "Precisam substituir planilhas e processos manuais por sistemas próprios.",
  },
  {
    title: "Produtos digitais",
    description: "Precisam desenvolver ou evoluir uma plataforma SaaS.",
  },
  {
    title: "Agências e parceiros",
    description: "Precisam de uma equipe técnica para desenvolver projetos para seus clientes.",
  },
] as const;

export const PROBLEMS = [
  "Minha equipe depende de planilhas.",
  "Tenho vários sistemas que não conversam entre si.",
  "Preciso de um sistema próprio.",
  "Tenho uma ideia de SaaS.",
  "Meu processo ainda é manual.",
  "Preciso integrar diferentes APIs.",
  "Meu sistema atual não acompanha o crescimento.",
  "Preciso transformar uma ideia em MVP.",
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos o negócio, o problema e os objetivos.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos funcionalidades, prioridades, arquitetura e escopo.",
  },
  {
    number: "03",
    title: "Design",
    description: "Criamos a experiência e as interfaces do produto.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Construímos o software utilizando tecnologias modernas.",
  },
  {
    number: "05",
    title: "Testes",
    description: "Validamos funcionalidades, integrações e experiência.",
  },
  {
    number: "06",
    title: "Lançamento",
    description: "Colocamos o produto em produção e acompanhamos sua evolução.",
  },
] as const;

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "APIs REST",
  "GraphQL",
] as const;

export const QUALITY_ITEMS = [
  "Código organizado",
  "Arquitetura escalável",
  "Controle de versão",
  "Testes",
  "Segurança",
  "APIs bem estruturadas",
  "Banco de dados estruturado",
  "Deploy automatizado",
  "Monitoramento",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Quanto custa desenvolver um sistema?",
    answer:
      "Depende do escopo, complexidade e integrações envolvidas. Cada projeto é único — por isso definimos o orçamento após entender suas necessidades, objetivos e prioridades. Na primeira conversa, já conseguimos estimar faixas e próximos passos.",
  },
  {
    question: "Vocês desenvolvem MVP?",
    answer:
      "Sim. Trabalhamos com MVPs para validar ideias rapidamente, com escopo enxuto e foco nas funcionalidades essenciais para testar o mercado.",
  },
  {
    question: "Vocês trabalham com projetos do zero?",
    answer:
      "Sim. Desde a concepção até o lançamento — ou podemos entrar em qualquer etapa do projeto, dependendo da sua necessidade.",
  },
  {
    question: "Vocês conseguem desenvolver um sistema específico para minha empresa?",
    answer:
      "Sim. Especializamo-nos em soluções sob medida, construídas para os processos e regras do seu negócio — não adaptações de ferramentas genéricas.",
  },
  {
    question: "Vocês fazem integrações com outros sistemas?",
    answer:
      "Sim. Conectamos APIs, ERPs, CRMs, gateways de pagamento e plataformas diversas para eliminar retrabalho e processos manuais.",
  },
  {
    question: "Posso começar com uma versão simples e evoluir depois?",
    answer:
      "Sim. Trabalhamos com evolução incremental — começamos com um MVP ou versão inicial e expandimos conforme o negócio cresce e as necessidades ficam mais claras.",
  },
  {
    question: "Vocês trabalham com manutenção e evolução?",
    answer:
      "Sim. Após o lançamento, oferecemos suporte contínuo, correções, melhorias e desenvolvimento de novas funcionalidades.",
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Varia conforme escopo e complexidade. Um MVP pode levar de 4 a 8 semanas; sistemas mais robustos, de 2 a 6 meses. Na descoberta inicial, apresentamos um cronograma realista.",
  },
] as const;

export const PROJECT_TYPES = [
  "Landing Page",
  "Site",
  "Sistema Web",
  "SaaS",
  "CRM",
  "Dashboard",
  "Integração",
  "Automação",
  "Aplicativo",
  "Outro",
] as const;
