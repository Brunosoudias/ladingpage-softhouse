import { NAV_LINKS } from "@/lib/constants";
import { getPublishedProjects } from "@/data/projects";

export function getNavLinks() {
  const hasProjects = getPublishedProjects().length > 0;

  return NAV_LINKS.filter(
    (link) => link.href !== "#projetos" || hasProjects
  );
}
