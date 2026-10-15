import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Solutions } from "@/components/sections/Solutions";
import { Differentials } from "@/components/sections/Differentials";
import { Portfolio } from "@/components/sections/Portfolio";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { FAQ_ITEMS } from "@/lib/constants";

const HOME_FAQ = FAQ_ITEMS.filter((item) =>
  [
    "Quanto custa desenvolver um sistema?",
    "Quanto tempo leva um projeto?",
    "Vocês também cuidam da infraestrutura?",
    "O suporte de infraestrutura é 24 horas?",
  ].includes(item.question)
);

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Solutions />
        <Differentials />
        <PricingPlans id="planos-referencia" variant="teaser" />
        <FAQ
          title="Perguntas frequentes"
          items={HOME_FAQ}
          initiallyOpen={false}
        />
        <ContactForm />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
