import { contactHref } from "@/lib/contact";

export type InfraService = {
  id: string;
  icon: "activity" | "server" | "wrench" | "database" | "shield";
  title: string;
  description: string;
  benefit: string;
  includes: readonly string[];
  interest: string;
};

export type InfraPlan = {
  id: string;
  name: string;
  priceLabel: string;
  priceNote: string;
  summary: string;
  features: readonly string[];
  interest: string;
};

export const INFRA_SERVICES: readonly InfraService[] = [
  {
    id: "monitoramento",
    icon: "activity",
    title: "Monitoramento",
    description:
      "Acompanhamos disponibilidade de servidores e aplicações, endpoints, APIs, uso de CPU, memória e disco, latência, erros HTTP e logs.",
    benefit:
      "A falha aparece no alerta e no relatório, em vez de chegar primeiro pelo cliente.",
    includes: [
      "Disponibilidade de servidores e aplicações",
      "Monitoramento de endpoints e APIs",
      "CPU, memória, disco e uso de recursos",
      "Latência, erros HTTP e logs",
      "Alertas de indisponibilidade e falhas",
      "Relatórios periódicos de desempenho",
    ],
    interest: "Monitoramento de infraestrutura",
  },
  {
    id: "cloud",
    icon: "server",
    title: "Administração de servidores e cloud",
    description:
      "Cuidamos do ambiente em que o sistema roda: AWS quando for o caso, Linux, Docker, Nginx, DNS, HTTPS e o caminho de publicação.",
    benefit:
      "O ambiente fica documentado e ajustado ao que a aplicação realmente precisa, com olhar para o custo da nuvem.",
    includes: [
      "Administração de ambientes AWS",
      "EC2, RDS, S3, IAM e balanceadores, conforme o ambiente",
      "Linux, Docker e Nginx",
      "DNS, HTTPS e certificados SSL",
      "Deploy, CI/CD e configuração de ambientes",
      "Análise e otimização de custos de cloud",
    ],
    interest: "Administração AWS e cloud",
  },
  {
    id: "manutencao",
    icon: "wrench",
    title: "Manutenção preventiva e corretiva",
    description:
      "Atualizamos o que está no escopo, lemos logs e investigamos lentidão ou falha antes que o problema vire rotina.",
    benefit:
      "Menos incidente repetido e uma fila clara do que será corrigido agora e do que vira proposta.",
    includes: [
      "Atualização de sistemas e dependências",
      "Análise e investigação de logs",
      "Diagnóstico de lentidão e falhas",
      "Revisão de recursos e capacidade",
      "Correção de problemas dentro do escopo contratado",
    ],
    interest: "Manutenção de servidores",
  },
  {
    id: "dados",
    icon: "database",
    title: "Bancos de dados e backups",
    description:
      "Olhamos o banco em produção, conferimos se a rotina de backup existe e testamos restauração quando isso estiver contratado.",
    benefit:
      "Backup deixa de ser uma suposição. A recuperação passa a ter um plano verificável.",
    includes: [
      "Monitoramento de bancos de dados",
      "Verificação de rotinas de backup",
      "Políticas de retenção",
      "Testes de restauração",
      "Planejamento de recuperação de dados",
      "Recomendações de disponibilidade e desempenho",
    ],
    interest: "Bancos de dados e backups",
  },
  {
    id: "seguranca",
    icon: "shield",
    title: "Segurança operacional",
    description:
      "Revisamos acessos, portas expostas, atualizações e alertas. O entregável é recomendação e ajuste dentro do escopo, não uma promessa de ambiente invulnerável.",
    benefit:
      "Permissões e exposição ficam visíveis, com uma lista prática do que endurecer primeiro.",
    includes: [
      "Revisão de permissões e acessos",
      "Revisão de firewall e portas expostas",
      "Atualizações de segurança",
      "Verificação de vulnerabilidades",
      "Análise de logs e alertas de segurança",
      "Recomendações de hardening",
    ],
    interest: "Segurança operacional",
  },
] as const;

export const INFRA_PLANS: readonly InfraPlan[] = [
  {
    id: "essencial",
    name: "Monitoramento Essencial",
    priceLabel: "R$ 390 a R$ 690",
    priceNote: "por mês, conforme o escopo",
    summary:
      "Para saber se o essencial está no ar e receber um retrato mensal do que aconteceu.",
    features: [
      "Monitoramento de até cinco alvos, conforme escopo",
      "Alertas de disponibilidade",
      "Métricas básicas",
      "Relatório mensal",
      "Suporte em horário comercial, com limites definidos na proposta",
    ],
    interest: "Monitoramento de infraestrutura",
  },
  {
    id: "gerenciada",
    name: "Infraestrutura Gerenciada",
    priceLabel: "R$ 990 a R$ 1.990",
    priceNote: "por mês, conforme o escopo",
    summary:
      "Para quem já tem servidor, API e banco e quer manutenção combinada com a leitura dos alertas.",
    features: [
      "Monitoramento de servidores, APIs e bancos de dados",
      "Análise de logs e alertas",
      "Manutenção preventiva programada",
      "Verificação de backups",
      "Franquia de atendimento técnico",
      "Relatório de incidentes",
    ],
    interest: "Manutenção de servidores",
  },
  {
    id: "premium",
    name: "Cloud e Operação Premium",
    priceLabel: "A partir de R$ 2.500",
    priceNote: "por mês, conforme o escopo",
    summary:
      "Para ambientes em nuvem que pedem administração, revisão de capacidade e um plano de recuperação.",
    features: [
      "Monitoramento avançado",
      "Administração de ambientes cloud",
      "Gestão de incidentes conforme o SLA definido na proposta",
      "Revisões de capacidade e segurança",
      "Planejamento de backups e recuperação",
      "Relatórios técnicos periódicos",
    ],
    interest: "Administração AWS e cloud",
  },
] as const;

export const PLAN_DISCLAIMERS = [
  "Os valores são referência comercial e mudam conforme a quantidade de alvos, a complexidade do ambiente e o escopo contratado.",
  "Custos de cloud, licenças e ferramentas de terceiros podem ser cobrados à parte.",
  "O escopo definitivo e o SLA são definidos depois da avaliação técnica.",
  "O suporte destes planos é em horário comercial. Não há atendimento 24 horas neste momento.",
] as const;

export const INFRA_PROBLEMS = [
  "A aplicação cai e a gente só descobre quando o cliente avisa.",
  "Tenho servidor, mas ninguém olha CPU, disco ou erro de API.",
  "O backup existe no papel. Nunca testamos uma restauração.",
  "A conta de cloud sobe e não sei o que está caro.",
  "Uma lentidão aparece e a investigação começa do zero.",
  "Acessos, portas e atualizações ficam para depois.",
] as const;

export const MONITORING_BENEFITS = [
  {
    title: "Indisponibilidade percebida cedo",
    description:
      "Servidor, site ou API fora do ar geram alerta. O tratamento segue o horário e o limite do plano, não uma promessa de plantão.",
  },
  {
    title: "Recurso antes do estouro",
    description:
      "CPU, memória e disco entram no acompanhamento para a capacidade ser revista com dado, não só depois da queda.",
  },
  {
    title: "API com latência e erro visíveis",
    description:
      "Erro HTTP e tempo de resposta deixam de ser uma reclamação solta e passam a ter histórico.",
  },
  {
    title: "Relatório para decidir",
    description:
      "O período fecha com o que falhou, o que foi estável e o que merece manutenção — material para a próxima conversa, não só para o incidente.",
  },
] as const;

export const INFRA_ONBOARDING = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description: "Entendemos o ambiente, o que está no ar e o que mais atrapalha a operação.",
  },
  {
    number: "02",
    title: "Ativos e riscos",
    description:
      "Levantamos servidores, aplicações, bancos, acessos e o que está sem backup ou sem monitoramento.",
  },
  {
    number: "03",
    title: "Proposta e SLA",
    description:
      "Definimos serviço, limites de atendimento e o que fica de fora. O compromisso escrito sai dessa etapa.",
  },
  {
    number: "04",
    title: "Monitoramento",
    description: "Implantamos alvos, alertas e rotinas que entraram na proposta.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    description: "Manutenção, leitura de alertas e relatórios no ritmo do plano contratado.",
  },
] as const;

export const INFRA_SCOPE_NOTE =
  "O escopo definitivo é fechado depois da avaliação técnica. As etapas acima descrevem o caminho típico, não um pacote já contratado.";

export const INFRA_FAQ = [
  {
    question: "O monitoramento funciona 24 horas por dia?",
    answer:
      "Os alertas podem disparar a qualquer hora, conforme a ferramenta configurada. O atendimento para analisar e agir é em horário comercial, com os limites do plano. Não há plantão 24 horas neste momento. Se um SLA diferente for necessário, ele precisa constar na proposta.",
  },
  {
    question: "Os preços já incluem nuvem, licenças e ferramentas?",
    answer:
      "Não. As faixas são referência do serviço de operação. Conta de cloud, licenças e ferramentas de monitoramento podem ser cobradas à parte, de acordo com o que o ambiente já usa ou precisar passar a usar.",
  },
  {
    question: "Vocês garantem que o sistema não vai sair do ar?",
    answer:
      "Não. Monitoramento encurta o tempo até alguém perceber a falha e ajuda a priorizar correção. Disponibilidade depende da arquitetura, do provedor e do escopo. Metas de atendimento, quando existirem, são as que estiverem escritas no SLA da proposta.",
  },
  {
    question: "A segurança operacional elimina o risco de invasão?",
    answer:
      "Não. O trabalho é revisão de acessos, portas, atualizações, logs e recomendações de hardening dentro do contratado. Isso reduz exposição conhecida. Não é auditoria certificada nem garantia de ambiente invulnerável.",
  },
  {
    question: "Como um contrato de infraestrutura começa?",
    answer:
      "Pelo diagnóstico e pelo levantamento do que existe. Só então sai a proposta com escopo e SLA. A implantação do monitoramento vem depois desse acordo, seguida de manutenção e relatórios.",
  },
  {
    question: "Vocês administram AWS e servidor Linux?",
    answer:
      "Sim, quando isso faz parte do escopo: ambientes AWS (como EC2, RDS, S3, IAM e balanceador), Linux, Docker, Nginx, DNS, HTTPS, deploy e leitura de custo. O que não estiver no ambiente ou no contrato não entra como incluso.",
  },
] as const;

export function planHref(plan: InfraPlan) {
  return contactHref(plan.interest, plan.name);
}

export function isKnownPlan(name: string) {
  return INFRA_PLANS.some((plan) => plan.name === name);
}
