import { getNavLinks } from "@/lib/nav";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5A10.3 10.3 0 0 0 12 3c-1.15 0-2.3.15-3.35.5C6.65 2 5.65 2 5.65 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.5 17 8.5 18v4" />
      <path d="M9 18c-4.51 2-4.51-2-7-2" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
} as const;

export function Footer() {
  const navLinks = getNavLinks();
  const socialLinks = (
    Object.entries(siteConfig.social) as [keyof typeof siteConfig.social, string | undefined][]
  ).filter((entry): entry is [keyof typeof siteConfig.social, string] => Boolean(entry[1]));

  const whatsappUrl = getWhatsAppUrl("Olá! Vim pelo site e gostaria de conversar sobre um projeto.");

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background-alt)]">
      <div className="section-padding mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-semibold text-[var(--fg-1)]">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--fg-4)]">
              {siteConfig.tagline}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit text-[var(--fg-4)] transition-colors hover:text-[var(--fg-1)]"
              >
                {siteConfig.email}
              </a>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[var(--fg-4)] transition-colors hover:text-[var(--fg-1)]"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--fg-4)]">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--fg-4)] transition-colors hover:text-[var(--fg-1)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {socialLinks.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--fg-4)]">
                Redes
              </p>
              <div className="flex gap-3">
                {socialLinks.map(([key, href]) => {
                  const Icon = SOCIAL_ICONS[key];
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line-strong)] text-[var(--fg-4)] transition-all hover:border-[var(--line-hover)] hover:text-[var(--fg-1)]"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--fg-5)]">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--fg-5)]">
            Desenvolvimento de software sob medida
          </p>
        </div>
      </div>
    </footer>
  );
}
