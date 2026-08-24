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
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.03] to-indigo-500/[0.03]" />

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
              className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04]"
            >
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-zinc-600" />
              <p className="text-sm text-zinc-400">&ldquo;{problem}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-xl font-medium text-zinc-200 sm:text-2xl">
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
