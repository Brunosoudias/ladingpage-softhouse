"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroVisualProps = {
  className?: string;
};

const OFFERS = [
  {
    title: "Software sob medida",
    body: "Sistema web, SaaS, painel ou API feito para o processo da empresa. Escopo, prazo e o que fica de fora saem escritos na proposta.",
  },
  {
    title: "Infraestrutura gerenciada",
    body: "Monitoramento, manutenção, backup e nuvem do que já está em produção. O atendimento é em horário comercial. O que passar do escopo vira outra proposta.",
  },
] as const;

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function HeroVisual({ className }: HeroVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className}>
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-[var(--line)] bg-[var(--panel-1)] p-5 sm:p-6 lg:max-w-none">
        <div className="flex items-center gap-2">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { opacity: 0.45, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.12, ease: EASE_OUT }}
          />
          <p className="text-sm font-medium text-[var(--fg-1)]">O que a BR Coder faz</p>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-[var(--fg-5)]">
          Constrói o sistema e, se fizer sentido, continua na operação.
        </p>

        <div className="mt-5 grid gap-3">
          {OFFERS.map((offer, i) => {
            const enterDelay = 0.14 + i * 0.16;

            return (
              <motion.article
                key={offer.title}
                className="group relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-4 pl-[1.05rem] will-change-transform"
                initial={prefersReducedMotion ? false : { opacity: 0, transform: "translateY(10px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        transform: "translateY(-3px)",
                        transition: { duration: 0.2, delay: 0, ease: EASE_OUT },
                      }
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.42,
                  delay: prefersReducedMotion ? 0 : enterDelay,
                  ease: EASE_OUT,
                }}
              >
                <motion.span
                  className="absolute left-0 top-0 h-full w-0.5 origin-top bg-[var(--accent)]"
                  aria-hidden="true"
                  initial={prefersReducedMotion ? false : { transform: "scaleY(0)" }}
                  animate={{ transform: "scaleY(1)" }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.48,
                    delay: prefersReducedMotion ? 0 : enterDelay + 0.08,
                    ease: EASE_OUT,
                  }}
                />
                <p className="text-sm font-medium text-[var(--fg-1)]">{offer.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-3)]">{offer.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
