const trim = (value: string | undefined) => value?.trim() || undefined;

export const siteConfig = {
  name: trim(process.env.NEXT_PUBLIC_SITE_NAME) ?? "BR Tecnologia",
  tagline:
    trim(process.env.NEXT_PUBLIC_SITE_TAGLINE) ??
    "Software sob medida para negócios que querem evoluir.",
  url: trim(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://brtecnologia.com.br",
  email:
    trim(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ??
    "contato@brtecnologia.com.br",
  whatsapp: trim(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  social: {
    instagram: trim(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: trim(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    github: trim(process.env.NEXT_PUBLIC_GITHUB_URL),
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  if (!siteConfig.whatsapp) return null;
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
