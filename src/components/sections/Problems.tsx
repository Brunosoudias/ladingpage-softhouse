"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEMS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

export function Problems() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--accent-glow)] to-[var(--accent-glow)]" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <SectionHeading
          title="Seu negócio está perdendo tempo com processos que poderiam ser software?"
          align="center"
          className="mb-14"
        />

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * stagger }}
              className="flex items-start gap-3 rounded-lg border border-[var(--line)] bg-[var(--panel-2)] px-4 py-3.5 transition-colors hover:border-[var(--line-hover)] hover:bg-[var(--panel-hover)]"
            >
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--fg-5)]" />
              <p className="text-sm text-[var(--fg-4)]">&ldquo;{problem}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-xl font-medium text-[var(--fg-2)] sm:text-2xl">
            Nós podemos transformar isso em uma{" "}
            <span className="gradient-accent">solução digital.</span>
          </p>
          <div className="mt-6">
            <Button href="#contato" variant="secondary">
              Falar sobre meu projeto
              <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
