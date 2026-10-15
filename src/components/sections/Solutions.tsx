"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Box,
  Cloud,
  Database,
  GitMerge,
  Layout,
  Monitor,
  Server,
  Shield,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INFRA_SERVICES } from "@/data/infrastructure";
import { SOLUTIONS } from "@/lib/constants";
import { contactHref } from "@/lib/contact";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

const DEV_ICONS: Record<string, LucideIcon> = {
  layout: Layout,
  monitor: Monitor,
  cloud: Cloud,
  users: Users,
  "bar-chart": BarChart3,
  "git-merge": GitMerge,
  zap: Zap,
  box: Box,
};

const INFRA_ICONS: Record<(typeof INFRA_SERVICES)[number]["icon"], LucideIcon> = {
  activity: Activity,
  server: Server,
  wrench: Wrench,
  database: Database,
  shield: Shield,
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}) {
  const { fadeUp } = useMotionSafe();

  return (
    <motion.article
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay }}
      className={cn(
        "glass flex gap-3 rounded-xl p-4 transition-colors duration-300",
        "hover:bg-[var(--panel-hover)]"
      )}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--panel-hover)] text-[var(--fg-2)]">
        <Icon size={18} aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-[var(--fg-1)]">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--fg-4)]">{description}</p>
      </div>
    </motion.article>
  );
}

export function Solutions() {
  const { stagger } = useMotionSafe();

  return (
    <div id="solucoes">
      <section id="desenvolvimento" className="py-12 sm:py-16">
        <div className="section-padding mx-auto max-w-7xl">
          <SectionHeading
            label="Desenvolvimento de software"
            title="Sistemas sob medida, do primeiro uso à operação."
            subtitle="Web, SaaS, painéis, APIs e automação. React, Next.js, Node.js, NestJS, Java e PostgreSQL, conforme o projeto."
            className="mb-8"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((solution, i) => (
              <ServiceCard
                key={solution.title}
                icon={DEV_ICONS[solution.icon] ?? Box}
                title={solution.title}
                description={solution.benefit}
                delay={i * stagger}
              />
            ))}
          </div>

          <div className="mt-8">
            <Button href={contactHref("Desenvolvimento de software")}>
              Solicitar um orçamento
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--background-alt)] py-12 sm:py-16">
        <div className="section-padding mx-auto max-w-7xl">
          <SectionHeading
            label="Infraestrutura gerenciada"
            title="Monitoramento, manutenção e cloud no mesmo contrato."
            subtitle="Para o que já está no ar. Atendimento em horário comercial, com limites escritos na proposta."
            className="mb-8"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INFRA_SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={INFRA_ICONS[service.icon]}
                title={service.title}
                description={service.benefit}
                delay={i * stagger}
              />
            ))}
          </div>

          <div className="mt-8">
            <Button href="/infraestrutura" variant="secondary">
              Conhecer os serviços de infraestrutura
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
