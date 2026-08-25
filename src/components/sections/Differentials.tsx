"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIALS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

export function Differentials() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="diferenciais" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--accent-glow)] via-transparent to-transparent" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <SectionHeading
          title="Não entregamos apenas código. Entregamos solução."
          subtitle="Antes de desenvolver, entendemos o problema. A tecnologia é escolhida de acordo com o produto, o negócio e o estágio da empresa — não o contrário."
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {DIFFERENTIALS.map((item, i) => (
            <motion.div
              key={item.number}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * stagger }}
              className="group relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-8 transition-all duration-300 hover:border-[var(--line-hover)] hover:bg-[var(--panel-hover)]"
            >
              <span className="font-mono text-4xl font-bold text-[var(--ghost)] transition-colors group-hover:text-[var(--fg-4)]">
                {item.number}
              </span>
              <h3 className="mt-2 text-lg font-medium text-[var(--fg-1)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-4)]">
                {item.description}
              </p>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--accent-glow)] blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
