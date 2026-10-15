"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Database,
  Server,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  INFRA_SERVICES,
  MONITORING_BENEFITS,
  type InfraService,
} from "@/data/infrastructure";
import { contactHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";
import { useMotionSafe } from "@/lib/motion";

const ICONS: Record<InfraService["icon"], LucideIcon> = {
  activity: Activity,
  server: Server,
  wrench: Wrench,
  database: Database,
  shield: Shield,
};

export function InfraHero() {
  const { fadeUp, duration } = useMotionSafe();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--accent-glow)] blur-[120px]" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--accent-text)]"
            >
              Infraestrutura gerenciada · {siteConfig.name}
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl"
            >
              Monitoramento e manutenção para o que já está em produção.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-4)] sm:text-lg"
            >
              Servidores, APIs, bancos e cloud acompanhados com escopo escrito.
              O atendimento é em horário comercial. Disponibilidade e segurança
              não são prometidas além do que a proposta definir.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, duration, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href={contactHref("Monitoramento de infraestrutura")} size="lg">
                Solicitar diagnóstico
                <ArrowRight size={16} />
              </Button>
              <Button href="#planos" variant="secondary" size="lg">
                Ver planos
              </Button>
            </motion.div>
          </div>

          <motion.ul
            {...fadeUp}
            transition={{ ...fadeUp.transition, duration, delay: 0.35 }}
            className="space-y-3"
          >
            {[
              "Saber se servidor e API respondem",
              "Manutenção dentro do que foi contratado",
              "Relatório para decidir o próximo ajuste",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--line)] bg-[var(--panel-2)] px-5 py-4 text-sm text-[var(--fg-2)]"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export function InfraCatalog() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="servicos" className="py-16 sm:py-24">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Catálogo"
          title="Cinco frentes. Cada uma com limite claro."
          subtitle="O que aparece aqui é o tipo de trabalho. O que entra no mês é o que a avaliação técnica colocar na proposta."
          className="mb-12"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {INFRA_SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.article
                key={service.id}
                id={service.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * stagger }}
                className="rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-6 sm:p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--panel-hover)] text-[var(--fg-2)]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-[var(--fg-1)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-4)]">{service.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-2)]">{service.benefit}</p>
                <ul className="mt-5 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--fg-3)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--fg-5)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={contactHref(service.interest)} variant="secondary" className="mt-6">
                  Solicitar proposta
                  <ArrowRight size={16} />
                </Button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MonitoringBenefits() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section className="border-y border-[var(--line)] bg-[var(--background-alt)] py-16 sm:py-24">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          label="Monitoramento"
          title="O que muda quando alguém olha o ambiente antes do chamado."
          subtitle="Proativo aqui significa alerta e relatório no ritmo do plano. Não significa plantão nem disponibilidade garantida."
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {MONITORING_BENEFITS.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * stagger }}
              className="rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-6"
            >
              <h3 className="text-base font-medium text-[var(--fg-1)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-4)]">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
