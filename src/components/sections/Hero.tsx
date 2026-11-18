"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { useMotionSafe } from "@/lib/motion";

export function Hero() {
  const { fadeUp, duration } = useMotionSafe();

  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pb-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[var(--accent-glow)] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[var(--accent-glow)] blur-[90px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/35 to-transparent" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration }}
              className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[2.85rem]"
            >
              Desenvolvimento de software e infraestrutura para empresas que querem crescer.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.08 }}
              className="mx-auto mt-5 max-w-[38ch] text-base leading-relaxed text-[var(--fg-4)] sm:text-lg lg:mx-0"
            >
              Sistemas sob medida, com monitoramento, manutenção e gestão dos
              ambientes em nuvem.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.16 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button href="/#contato" size="lg" className="whitespace-nowrap">
                Solicitar um orçamento
                <ArrowRight size={16} />
              </Button>
              <Button href="/infraestrutura" variant="secondary" size="lg" className="whitespace-nowrap">
                Ver infraestrutura
              </Button>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, duration, delay: 0.32 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
