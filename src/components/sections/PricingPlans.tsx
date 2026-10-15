"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INFRA_PLANS, PLAN_DISCLAIMERS, planHref } from "@/data/infrastructure";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PricingPlansProps = {
  id?: string;
  variant?: "full" | "compact" | "teaser";
};

export function PricingPlans({ id = "planos", variant = "full" }: PricingPlansProps) {
  const { fadeUp, stagger } = useMotionSafe();
  const compact = variant === "compact";
  const teaser = variant === "teaser";

  return (
    <section id={id} className={teaser ? "py-12 sm:py-16" : "py-16 sm:py-24"}>
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Planos de infraestrutura"
          title={teaser ? "Três referências de contrato mensal." : "Três pontos de partida. O valor fecha depois do escopo."}
          subtitle="Faixas de referência. O valor fecha depois do escopo e não inclui a conta de cloud."
          className={teaser ? "mb-8" : "mb-12"}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {INFRA_PLANS.map((plan, i) => {
            const features = teaser ? [] : compact ? plan.features.slice(0, 4) : plan.features;
            return (
              <motion.article
                key={plan.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * stagger }}
                className={cn(
                  "flex flex-col rounded-xl border bg-[var(--panel-2)]",
                  teaser ? "p-5" : "p-6 sm:p-8",
                  i === 1
                    ? "border-[var(--line-hover)]"
                    : "border-[var(--line)]"
                )}
              >
                <h3 className="text-lg font-medium text-[var(--fg-1)]">{plan.name}</h3>
                <p className="mt-3 font-mono text-2xl tracking-tight text-[var(--fg-1)]">
                  {plan.priceLabel}
                </p>
                <p className="mt-1 text-xs text-[var(--fg-5)]">{plan.priceNote}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-4)]">{plan.summary}</p>
                {features.length > 0 && (
                  <ul className="mt-6 flex-1 space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm leading-relaxed text-[var(--fg-3)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--fg-5)]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {compact && plan.features.length > features.length && (
                  <p className="mt-4 text-xs text-[var(--fg-5)]">
                    Mais {plan.features.length - features.length}{" "}
                    {plan.features.length - features.length === 1 ? "item" : "itens"} na página de
                    infraestrutura.
                  </p>
                )}
                <Button href={planHref(plan)} className="mt-6 w-full">
                  Solicitar proposta
                  <ArrowRight size={16} />
                </Button>
              </motion.article>
            );
          })}
        </div>

        {teaser ? (
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[var(--fg-5)]">
            {PLAN_DISCLAIMERS.join(" ")}{" "}
            <Link href="/infraestrutura#planos" className="text-[var(--fg-2)] underline-offset-4 hover:underline">
              Ver o que cada plano inclui
            </Link>
            .
          </p>
        ) : (
          <ul className="mx-auto mt-10 max-w-3xl space-y-2">
            {PLAN_DISCLAIMERS.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-[var(--fg-5)]">
                {item}
              </li>
            ))}
          </ul>
        )}

        {compact && (
          <div className="mt-8">
            <Button href="/infraestrutura#planos" variant="secondary">
              Comparar planos de infraestrutura
              <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
