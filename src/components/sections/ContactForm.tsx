"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isKnownPlan } from "@/data/infrastructure";
import { INTEREST_GROUPS, isKnownInterest } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/site-config";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  projectType: string;
  message: string;
  website: string;
};

type FieldName = "name" | "email" | "whatsapp" | "projectType" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  projectType: "",
  message: "",
  website: "",
};

const fieldClass =
  "w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--line-hover)] focus:outline-none aria-[invalid=true]:border-red-400/70";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function buildWhatsAppMessage(form: FormData, plan?: string): string {
  const lines = [
    "Olá! Vim pelo site e quero solicitar um orçamento.",
    "",
    `Nome: ${form.name.trim()}`,
    form.company.trim() ? `Empresa: ${form.company.trim()}` : null,
    `E-mail: ${form.email.trim()}`,
    form.whatsapp ? `WhatsApp: ${form.whatsapp}` : null,
    `Serviço de interesse: ${form.projectType}`,
    plan ? `Plano de referência: ${plan}` : null,
    "",
    "Necessidade:",
    form.message.trim(),
  ];

  return lines.filter(Boolean).join("\n");
}

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Informe seu nome.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  const phoneDigits = form.whatsapp.replace(/\D/g, "");
  if (phoneDigits && (phoneDigits.length < 10 || phoneDigits.length > 11)) {
    errors.whatsapp = "Informe DDD e número, com 10 ou 11 dígitos.";
  }

  if (!form.projectType || !isKnownInterest(form.projectType)) {
    errors.projectType = "Selecione o serviço de interesse.";
  }

  if (form.message.trim().length < 20) {
    errors.message = "Descreva a necessidade com pelo menos uma frase (20 caracteres).";
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="form-error mt-1.5 text-xs">
      {message}
    </p>
  );
}

function ContactFormFields({
  requestedService,
  requestedPlan,
}: {
  requestedService: string;
  requestedPlan: string;
}) {
  const service = isKnownInterest(requestedService) ? requestedService : "";
  const plan = isKnownPlan(requestedPlan) ? requestedPlan : undefined;

  const [form, setForm] = useState<FormData>({
    ...initialForm,
    projectType: service,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { fadeUp } = useMotionSafe();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormError(null);

    if (form.website) return;

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = getWhatsAppUrl(buildWhatsAppMessage(form, plan));
    if (!url) {
      setFormError(
        "O WhatsApp comercial não está configurado. Use o e-mail do rodapé para enviar a solicitação."
      );
      return;
    }

    setSubmitting(true);
    window.location.assign(url);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field !== "website" && field in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as FieldName];
        return next;
      });
    }
  };

  return (
    <section id="contato" className="py-12 sm:py-16">
      <div className="section-padding mx-auto max-w-2xl">
        <SectionHeading
          title="Conte o que precisa ser construído ou operado."
          subtitle="O formulário abre o WhatsApp com a sua mensagem. Ela só segue depois que você confirmar o envio por lá. Retorno em horário comercial."
          align="center"
          className="mb-10"
        />

        {plan && (
          <p className="mb-6 rounded-lg border border-[var(--line)] bg-[var(--panel-2)] px-4 py-3 text-sm text-[var(--fg-3)]">
            Referência selecionada: plano {plan}. O valor final depende do escopo.
          </p>
        )}

        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          className="rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                onChange={(e) => updateField("name", e.target.value)}
                className={fieldClass}
                placeholder="Seu nome"
              />
              <FieldError id="name-error" message={errors.name} />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                Empresa <span className="text-[var(--fg-5)]">(opcional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                className={fieldClass}
                placeholder="Nome da empresa"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                E-mail corporativo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={(e) => updateField("email", e.target.value)}
                className={fieldClass}
                placeholder="voce@empresa.com"
              />
              <FieldError id="email-error" message={errors.email} />
            </div>
            <div>
              <label htmlFor="whatsapp" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                WhatsApp <span className="text-[var(--fg-5)]">(opcional)</span>
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={15}
                value={form.whatsapp}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                onChange={(e) => updateField("whatsapp", formatPhone(e.target.value))}
                className={fieldClass}
                placeholder="(00) 00000-0000"
              />
              <FieldError id="whatsapp-error" message={errors.whatsapp} />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="projectType" className="mb-1.5 block text-sm text-[var(--fg-4)]">
              Serviço de interesse
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={form.projectType}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={errors.projectType ? "projectType-error" : undefined}
              onChange={(e) => updateField("projectType", e.target.value)}
              className={fieldClass}
            >
              <option value="" className="bg-[var(--panel-opaque)]">
                Selecione o serviço
              </option>
              {INTEREST_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option} value={option} className="bg-[var(--panel-opaque)]">
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <FieldError id="projectType-error" message={errors.projectType} />
          </div>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Site</label>
            <input
              id="website"
              type="text"
              name="website"
              value={form.website}
              onChange={(e) => updateField("website", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--fg-4)]">
              Descrição da necessidade
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={(e) => updateField("message", e.target.value)}
              className={cn(fieldClass, "resize-none")}
              placeholder="Descreva o sistema, o ambiente ou o problema que precisa de atenção."
            />
            <FieldError id="message-error" message={errors.message} />
          </div>

          {formError && (
            <p role="alert" className="form-error mt-5 rounded-lg border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm">
              {formError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className={cn(
              "mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--btn-bg)] text-sm font-medium text-[var(--btn-fg)] transition-all hover:bg-[var(--btn-bg-hover)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
            )}
          >
            {submitting ? "Abrindo o WhatsApp…" : "Solicitar orçamento"}
            <Send size={16} aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function ContactFormKeyed() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("servico") ?? "";
  const requestedPlan = searchParams.get("plano") ?? "";

  return (
    <ContactFormFields
      key={`${requestedService}:${requestedPlan}`}
      requestedService={requestedService}
      requestedPlan={requestedPlan}
    />
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <section id="contato" className="py-12 sm:py-16" aria-busy="true">
          <div className="section-padding mx-auto max-w-2xl">
            <p className="text-center text-sm text-[var(--fg-5)]">Carregando formulário…</p>
          </div>
        </section>
      }
    >
      <ContactFormKeyed />
    </Suspense>
  );
}
