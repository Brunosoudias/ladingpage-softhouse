"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { useMotionSafe } from "@/lib/motion";

export function Hero() {
  const { fadeUp, duration } = useMotionSafe();

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[var(--accent-glow)] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[var(--accent-glow)] blur-[90px]" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration }}
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--fg-5)]"
            >
              BR Tecnologia
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.08 }}
              className="text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] text-balance sm:text-5xl lg:text-[3.35rem]"
            >
              Software sob medida para o seu negócio.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.16 }}
              className="mx-auto mt-5 max-w-[36ch] text-base leading-relaxed text-[var(--fg-4)] sm:text-lg lg:mx-0"
            >
              Sistemas, SaaS, plataformas e integrações construídos com
              clareza, prazo e qualidade de produção.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button href="#contato" size="lg">
                Falar sobre meu projeto
                <ArrowRight size={16} />
              </Button>
              <Button href="#solucoes" variant="secondary" size="lg">
                Ver o que desenvolvemos
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
