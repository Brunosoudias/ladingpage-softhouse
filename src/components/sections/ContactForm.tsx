"use client";

import { Suspense, useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ChevronDown, Send } from "lucide-react";
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

type FieldName = "name" | "company" | "email" | "whatsapp" | "projectType" | "message";
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
  "w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--accent)] focus:outline-none aria-[invalid=true]:border-red-400/70";

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

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_MAX = 40;

function isCellPhone(digits: string) {
  if (digits.length !== 11) return false;
  const ddd = Number(digits.slice(0, 2));
  return ddd >= 11 && ddd <= 99 && digits[2] === "9";
}

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = form.name.trim();
  const company = form.company.trim();

  if (name.length < 2) {
    errors.name = "Informe seu nome.";
  } else if (name.length > NAME_MAX) {
    errors.name = "O nome pode ter no máximo 40 caracteres.";
  }

  if (company.length > NAME_MAX) {
    errors.company = "O nome da empresa pode ter no máximo 40 caracteres.";
  }

  if (!EMAIL_PATTERN.test(form.email.trim()) || form.email.includes("..")) {
    errors.email = "Informe um e-mail válido, com @ e domínio.";
  }

  const phoneDigits = form.whatsapp.replace(/\D/g, "");
  if (!isCellPhone(phoneDigits)) {
    errors.whatsapp = "Informe um celular com DDD, no formato (00) 90000-0000.";
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

const SERVICE_OPTIONS = INTEREST_GROUPS.flatMap((group) => [...group.options]);

function ServiceSelect({
  id,
  value,
  invalid,
  describedBy,
  onChange,
}: {
  id: string;
  value: string;
  invalid: boolean;
  describedBy?: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(value);
  const [openUp, setOpenUp] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = `${id}-list`;

  const optionId = (option: string) => `${id}-opt-${SERVICE_OPTIONS.indexOf(option as (typeof SERVICE_OPTIONS)[number])}`;

  useEffect(() => {
    if (!open) return;

    const place = () => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      setOpenUp(window.innerHeight - rect.bottom < 280 && rect.top > 280);
    };

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    place();
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", place);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !active) return;
    const index = SERVICE_OPTIONS.indexOf(active as (typeof SERVICE_OPTIONS)[number]);
    if (index < 0) return;
    document.getElementById(`${id}-opt-${index}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, id]);

  const move = (direction: 1 | -1) => {
    const current = SERVICE_OPTIONS.indexOf(active as (typeof SERVICE_OPTIONS)[number]);
    const start = current === -1 ? (direction === 1 ? -1 : 0) : current;
    const next = Math.min(SERVICE_OPTIONS.length - 1, Math.max(0, start + direction));
    setActive(SERVICE_OPTIONS[next]);
  };

  const choose = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!open && ["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      setActive(value || SERVICE_OPTIONS[0]);
      setOpen(true);
      return;
    }

    if (!open) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(SERVICE_OPTIONS[0]);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(SERVICE_OPTIONS[SERVICE_OPTIONS.length - 1]);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (active) choose(active);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        aria-activedescendant={open && active ? optionId(active) : undefined}
        onClick={() => {
          setActive(value || SERVICE_OPTIONS[0]);
          setOpen((current) => !current);
        }}
        onKeyDown={onKeyDown}
        className={cn(
          fieldClass,
          "flex items-center justify-between gap-3 text-left",
          !value && "text-[var(--fg-5)]"
        )}
      >
        <span className="truncate">{value || "Selecione o serviço"}</span>
        <ChevronDown
          className={cn("size-4 shrink-0 text-[var(--fg-5)] transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          id={listId}
          role="listbox"
          aria-labelledby={`${id}-label`}
          className={cn(
            "absolute z-30 max-h-72 w-full overflow-auto rounded-lg border border-[var(--line-strong)] bg-[var(--panel-opaque)] py-1 shadow-[0_16px_40px_rgba(0,0,0,0.28)]",
            openUp ? "bottom-full mb-1.5" : "top-full mt-1.5"
          )}
        >
          {INTEREST_GROUPS.map((group) => (
            <div key={group.label} role="group" aria-label={group.label}>
              <p className="px-3 pt-2.5 pb-1 text-[11px] font-medium tracking-wide text-[var(--fg-5)]">
                {group.label}
              </p>
              {group.options.map((option) => {
                const selected = option === value;
                const current = option === active;
                return (
                  <button
                    key={option}
                    id={optionId(option)}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onMouseEnter={() => setActive(option)}
                    onClick={() => choose(option)}
                    className={cn(
                      "flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-[var(--fg-1)]",
                      current && "bg-[var(--panel-hover)]"
                    )}
                  >
                    <span className="min-w-0 flex-1">{option}</span>
                    {selected && <Check className="size-3.5 shrink-0 text-[var(--accent-text)]" aria-hidden />}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
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
                maxLength={NAME_MAX}
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
                maxLength={NAME_MAX}
                value={form.company}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "company-error" : undefined}
                onChange={(e) => updateField("company", e.target.value)}
                className={fieldClass}
                placeholder="Nome da empresa"
              />
              <FieldError id="company-error" message={errors.company} />
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
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                required
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
            <label id="projectType-label" htmlFor="projectType" className="mb-1.5 block text-sm text-[var(--fg-4)]">
              Serviço de interesse
            </label>
            <ServiceSelect
              id="projectType"
              value={form.projectType}
              invalid={Boolean(errors.projectType)}
              describedBy={errors.projectType ? "projectType-error" : undefined}
              onChange={(value) => updateField("projectType", value)}
            />
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
