import type { PortfolioProject } from "@/types/portfolio";

export const PROJECTS: PortfolioProject[] = [];

export function getPublishedProjects(): PortfolioProject[] {
  return PROJECTS.filter((project) => project.published !== false && project.name);
}
