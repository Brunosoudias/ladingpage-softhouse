"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIALS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

export function Differentials() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="diferenciais" className="relative overflow-hidden py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--accent-glow)] via-transparent to-transparent" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <SectionHeading
          title="Como a BR Coder trabalha."
          subtitle="O problema vem antes da tecnologia. O escopo, o prazo e o que fica de fora saem da conversa inicial."
          className="mb-8"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {DIFFERENTIALS.map((item, i) => (
            <motion.div
              key={item.number}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * stagger }}
              className="rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-4"
            >
              <span className="font-mono text-xs text-[var(--fg-5)]">
                {item.number}
              </span>
              <h3 className="mt-2 text-sm font-medium text-[var(--fg-1)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-4)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
