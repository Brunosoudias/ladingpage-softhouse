import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HashScroller } from "@/components/ui/HashScroller";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Software house para desenvolvimento de software sob medida e infraestrutura gerenciada: sistemas, SaaS, APIs, monitoramento de servidores, manutenção e administração de ambientes em nuvem.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Desenvolvimento de software e infraestrutura`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    siteConfig.name,
    "software house",
    "desenvolvimento de software",
    "desenvolvimento de sistemas",
    "sistema sob medida",
    "monitoramento de servidores",
    "monitoramento de APIs",
    "manutenção de infraestrutura de TI",
    "administração AWS",
    "infraestrutura cloud",
    "manutenção de sistemas",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Desenvolvimento de software e infraestrutura`,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Desenvolvimento de software e infraestrutura`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description,
  areaServed: "BR",
  knowsAbout: [
    "Desenvolvimento de software",
    "Infraestrutura gerenciada",
    "Monitoramento de servidores",
    "Administração AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("br-coder-theme")||localStorage.getItem("br-tecnologia-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}`,
          }}
        />
      </head>
      <body className="relative min-h-full bg-[var(--background)] text-[var(--fg-1)]">
        <HashScroller />
        <JsonLd data={organizationLd} />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
