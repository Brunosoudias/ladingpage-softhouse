import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  InfraCatalog,
  InfraHero,
  MonitoringBenefits,
} from "@/components/sections/InfrastructureSections";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Problems } from "@/components/sections/Problems";
import { Process } from "@/components/sections/Process";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  INFRA_FAQ,
  INFRA_ONBOARDING,
  INFRA_PROBLEMS,
  INFRA_SCOPE_NOTE,
} from "@/data/infrastructure";
import { contactHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";

const title = "Infraestrutura gerenciada";
const description =
  "Monitoramento de servidores e APIs, manutenção de infraestrutura de TI, administração AWS e cloud, backups e segurança operacional. Escopo e valores definidos após avaliação técnica.";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${siteConfig.name}` },
  description,
  alternates: { canonical: "/infraestrutura" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/infraestrutura",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: INFRA_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function InfraestruturaPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <Header />
      <main>
        <InfraHero />
        <Problems
          id="problemas"
          title="O ambiente avisa tarde, ou não avisa."
          items={INFRA_PROBLEMS}
          closing="O diagnóstico mostra o que dá para acompanhar e o que fica fora do contrato."
          ctaHref={contactHref("Monitoramento de infraestrutura")}
          ctaLabel="Solicitar diagnóstico"
        />
        <InfraCatalog />
        <MonitoringBenefits />
        <Process
          id="onboarding"
          title="Do diagnóstico ao acompanhamento."
          subtitle="Cinco etapas. O SLA e o que está incluso só existem depois da proposta."
          note={INFRA_SCOPE_NOTE}
          steps={INFRA_ONBOARDING}
        />
        <PricingPlans />
        <FAQ
          id="faq-infraestrutura"
          title="Perguntas sobre infraestrutura"
          items={INFRA_FAQ}
        />
        <FinalCTA
          title="Quer um diagnóstico antes de fechar o escopo?"
          subtitle="Descreva servidores, aplicações e o que mais preocupa hoje. A proposta vem depois dessa leitura."
          primaryHref={contactHref("Monitoramento de infraestrutura")}
          primaryLabel="Solicitar diagnóstico"
          secondaryHref="#planos"
          secondaryLabel="Ver os planos"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
