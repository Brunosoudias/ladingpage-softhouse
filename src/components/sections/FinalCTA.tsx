"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMotionSafe } from "@/lib/motion";

type FinalCTAProps = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function FinalCTA({
  title = "Precisa de um sistema novo ou de alguém para cuidar do que já está no ar?",
  subtitle = "Conte o contexto. O retorno traz os próximos passos para desenvolvimento ou para infraestrutura gerenciada.",
  primaryHref = "/#contato",
  primaryLabel = "Solicitar um orçamento",
  secondaryHref = "/infraestrutura",
  secondaryLabel = "Conhecer a infraestrutura",
}: FinalCTAProps) {
  const { fadeUp } = useMotionSafe();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--accent-glow)] via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-glow)] blur-[100px]" />

      <div className="section-padding relative mx-auto max-w-3xl text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--fg-4)] sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
              <ArrowRight size={16} />
            </Button>
            <Button href={secondaryHref} variant="secondary" size="lg">
              <MessageCircle size={16} />
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
