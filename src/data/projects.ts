import type { PortfolioProject } from "@/types/portfolio";

export const PROJECTS: PortfolioProject[] = [
  {
    category: "SaaS",
    name: "Gestor BR",
    description:
      "Sistema de gestão para a operação do dia a dia: PDV, estoque, financeiro, PIX e emissão de NF-e e NFC-e no mesmo fluxo da venda.",
    technologies: ["Next.js", "React", "TypeScript"],
    url: "https://gestorbr.brcoder.com.br",
    image: "/projects/gestorbr.png",
    published: true,
  },
];

export function getPublishedProjects(): PortfolioProject[] {
  return PROJECTS.filter((project) => project.published !== false && project.name);
}
