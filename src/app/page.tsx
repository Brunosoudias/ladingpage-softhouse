import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Solutions } from "@/components/sections/Solutions";
import { Differentials } from "@/components/sections/Differentials";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Problems } from "@/components/sections/Problems";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technology } from "@/components/sections/Technology";
import { Quality } from "@/components/sections/Quality";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Solutions />
        <Differentials />
        <TargetAudience />
        <Problems />
        <Process />
        <Portfolio />
        <Technology />
        <Quality />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
