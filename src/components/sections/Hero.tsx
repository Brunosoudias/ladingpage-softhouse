"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { useMotionSafe } from "@/lib/motion";

export function Hero() {
  const { fadeUp, duration } = useMotionSafe();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent-glow)] blur-[120px]" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--accent-text)]"
            >
              BR Tecnologia
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]"
            >
              Seu próximo produto digital{" "}
              <span className="gradient-accent">começa aqui.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-4)] sm:text-lg lg:mx-0"
            >
              Desenvolvemos sistemas, SaaS, plataformas e integrações sob medida
              para transformar ideias e problemas de negócio em software que
              funciona.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.3 }}
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
            transition={{ ...fadeUp.transition, duration, delay: 0.4 }}
            className="relative lg:pl-8"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
