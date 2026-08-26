import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "BR Tecnologia | Sistemas, SaaS e Software Sob Medida",
  description:
    "Desenvolvemos sistemas, SaaS, plataformas, integrações e soluções digitais sob medida para transformar ideias e problemas de negócio em software.",
  keywords: [
    "BR Tecnologia",
    "software house",
    "desenvolvimento de sistemas",
    "desenvolvimento de software",
    "sistema sob medida",
    "empresa de desenvolvimento de software",
    "desenvolvimento SaaS",
    "desenvolvimento de plataformas",
    "integração de sistemas",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "BR Tecnologia | Sistemas, SaaS e Software Sob Medida",
    description:
      "Desenvolvemos sistemas, SaaS, plataformas, integrações e soluções digitais sob medida para transformar ideias e problemas de negócio em software.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BR Tecnologia | Sistemas, SaaS e Software Sob Medida",
    description:
      "Desenvolvemos sistemas, SaaS, plataformas, integrações e soluções digitais sob medida para transformar ideias e problemas de negócio em software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          // Aplica o tema salvo antes da primeira pintura, evitando flash do tema errado.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("br-tecnologia-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}`,
          }}
        />
      </head>
      <body className="relative min-h-full bg-[var(--background)] text-[var(--fg-1)]">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
