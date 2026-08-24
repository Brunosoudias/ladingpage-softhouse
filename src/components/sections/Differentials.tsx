"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIALS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

export function Differentials() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="diferenciais" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent" />

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
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <span className="font-mono text-4xl font-bold text-white/[0.06] transition-colors group-hover:text-indigo-500/20">
                {item.number}
              </span>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
