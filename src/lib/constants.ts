export const SITE = {
  name: "BR Coder",
  tagline:
    "Desenvolvimento de software e infraestrutura gerenciada para empresas que querem crescer.",
  url: "https://brcoder.com.br",
  email: "brcodertecnologia@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Desenvolvimento", href: "/#desenvolvimento" },
  { label: "Infraestrutura", href: "/infraestrutura" },
  { label: "Planos", href: "/infraestrutura#planos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/#diferenciais" },
  { label: "Contato", href: "/#contato" },
] as const;

export const TRUST_INDICATORS = [
  "Software sob medida",
  "Infraestrutura gerenciada",
  "Web, SaaS, APIs e cloud",
  "Monitoramento e manutenção",
] as const;

export const SOLUTIONS = [
  {
    icon: "layout",
    title: "Landing Pages",
    description: "Páginas rápidas, modernas e com um caminho claro até o contato.",
    benefit: "A oferta fica compreensível e o visitante sabe qual é o próximo passo.",
    interest: "Landing Page",
  },
  {
    icon: "monitor",
    title: "Sistemas Web",
    description: "Sistemas internos, administrativos e operacionais feitos para o processo real da empresa.",
    benefit: "A operação deixa de depender de planilha solta e de retrabalho entre áreas.",
    interest: "Sistema Web",
  },
  {
    icon: "cloud",
    title: "SaaS",
    description: "Plataformas para atender vários clientes, com evolução depois do primeiro uso.",
    benefit: "O produto nasce com escopo de validação e caminho para crescer sem recomeçar.",
    interest: "SaaS",
  },
  {
    icon: "users",
    title: "CRM",
    description: "Organização de clientes, vendas, atendimento e rotina comercial.",
    benefit: "O histórico da relação fica no sistema, não na memória de uma pessoa.",
    interest: "CRM",
  },
  {
    icon: "bar-chart",
    title: "Dashboards",
    description: "Painéis para acompanhar indicadores e decidir com o número atualizado.",
    benefit: "O relatório deixa de ser montado à mão toda vez que alguém pergunta como está o negócio.",
    interest: "Dashboard",
  },
  {
    icon: "git-merge",
    title: "APIs e integrações",
    description: "Conexão entre APIs, ERPs, CRMs e outros sistemas que hoje não se falam.",
    benefit: "A equipe para de copiar dado de uma tela para outra.",
    interest: "Integração",
  },
  {
    icon: "zap",
    title: "Automação de processos",
    description: "Tarefas repetitivas viram fluxo com regra, registro e menos erro manual.",
    benefit: "O tempo da equipe volta para exceção e decisão, não para a mesma etapa todo dia.",
    interest: "Automação",
  },
  {
    icon: "box",
    title: "Aplicações sob medida",
    description: "Software desenhado para a regra do negócio quando uma ferramenta pronta não cabe.",
    benefit: "O sistema segue o processo da empresa, em vez de a empresa se adaptar à ferramenta.",
    interest: "Desenvolvimento de software",
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
  {
    number: "05",
    title: "Operação depois do lançamento",
    description:
      "Quem constrói o software também pode acompanhar servidor, aplicação e rotina — com escopo e horário definidos em proposta.",
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
  {
    title: "Operação de TI",
    description:
      "Precisam de monitoramento, manutenção e administração de cloud sem montar um time só para isso.",
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
  "Não sei se o servidor e a API estão no ar.",
  "O backup existe, mas nunca testei a restauração.",
  "A conta de cloud cresce sem eu saber o motivo.",
  "Quando algo falha, o alerta chega tarde demais.",
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
  "NestJS",
  "Java",
  "Python",
  "PostgreSQL",
  "Prisma",
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
  {
    question: "Vocês também cuidam da infraestrutura?",
    answer:
      "Sim. Além do desenvolvimento, operamos monitoramento, manutenção, administração de cloud, bancos e backups, e segurança operacional. O que entra em cada contrato depende da avaliação técnica e da proposta.",
  },
  {
    question: "O suporte de infraestrutura é 24 horas?",
    answer:
      "Não. Os planos atuais preveem suporte em horário comercial, com limites definidos na proposta. Alertas podem disparar fora desse horário; o atendimento para tratá-los segue o SLA combinado.",
  },
] as const;

export const INTEREST_GROUPS = [
  {
    label: "Desenvolvimento",
    options: [
      "Desenvolvimento de software",
      "Landing Page",
      "Site",
      "Sistema Web",
      "SaaS",
      "CRM",
      "Dashboard",
      "Integração",
      "Automação",
      "Aplicativo",
    ],
  },
  {
    label: "Infraestrutura",
    options: [
      "Monitoramento de infraestrutura",
      "Administração AWS e cloud",
      "Manutenção de servidores",
      "Bancos de dados e backups",
      "Segurança operacional",
    ],
  },
  {
    label: "Outro",
    options: ["Outro"],
  },
] as const;

export const INTEREST_OPTIONS = INTEREST_GROUPS.flatMap((group) => group.options);

export function isKnownInterest(value: string) {
  return (INTEREST_OPTIONS as readonly string[]).includes(value);
}
