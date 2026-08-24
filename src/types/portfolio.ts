export type PortfolioProject = {
  /** Categoria exibida no card (ex: SaaS, Landing Page, CRM) */
  category: string;
  name: string;
  description: string;
  technologies: string[];
  /** URL do projeto ao vivo — habilita o botão "Ver projeto" */
  url?: string;
  /** Screenshot em /public/projects/ (ex: /projects/meu-app.webp) */
  image?: string;
  gradient: string;
  accent: string;
  /** Defina false para ocultar sem remover do arquivo */
  published?: boolean;
};
