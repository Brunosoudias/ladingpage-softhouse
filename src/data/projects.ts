import type { PortfolioProject } from "@/types/portfolio";

/**
 * Portfólio — adicione seus projetos reais aqui antes do deploy.
 *
 * 1. Copie um bloco do exemplo comentado abaixo
 * 2. Preencha nome, descrição, url e tecnologias
 * 3. (Opcional) Adicione screenshot em public/projects/nome.webp
 * 4. Defina published: true
 *
 * Projetos sem `published: true` ou com published: false não aparecem na página.
 */
export const PROJECTS: PortfolioProject[] = [
  // ── Exemplo — descomente e adapte ──────────────────────────────────
  // {
  //   category: "SaaS",
  //   name: "Nome do Projeto",
  //   description: "O que o sistema faz e qual problema resolve.",
  //   technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  //   url: "https://meuprojeto.com.br",
  //   image: "/projects/meu-projeto.webp",
  //   gradient: "from-indigo-500/20 to-violet-500/20",
  //   accent: "#6366f1",
  //   published: true,
  // },
  // {
  //   category: "Landing Page",
  //   name: "Site Cliente X",
  //   description: "Landing page de conversão para produto digital.",
  //   technologies: ["Next.js", "Tailwind CSS"],
  //   url: "https://cliente-x.com.br",
  //   gradient: "from-cyan-500/20 to-blue-500/20",
  //   accent: "#06b6d4",
  //   published: true,
  // },
];

/** Projetos visíveis na landing (published !== false) */
export function getPublishedProjects(): PortfolioProject[] {
  return PROJECTS.filter((project) => project.published !== false && project.name);
}
