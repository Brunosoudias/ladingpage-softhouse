"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_TYPES } from "@/lib/constants";
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

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  projectType: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { fadeUp } = useMotionSafe();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Não foi possível enviar. Tente novamente.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="contato" className="py-16 sm:py-24">
        <div className="section-padding mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-10 text-center"
          >
            <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
            <h2 className="mt-4 text-xl font-semibold text-[var(--fg-1)]">
              Mensagem enviada com sucesso!
            </h2>
            <p className="mt-2 text-sm text-[var(--fg-4)]">
              Recebemos seu projeto. Entraremos em contato em breve para
              entender melhor suas necessidades.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-16 sm:py-24">
      <div className="section-padding mx-auto max-w-2xl">
        <SectionHeading
          title="Vamos conversar sobre seu projeto."
          subtitle="Preencha o formulário e conte o que você precisa. Respondemos em até 24 horas úteis."
          align="center"
          className="mb-10"
        />

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
                type="text"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--line-hover)] focus:outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                Empresa
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                className="w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--line-hover)] focus:outline-none"
                placeholder="Nome da empresa"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--line-hover)] focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="mb-1.5 block text-sm text-[var(--fg-4)]">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                className="w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--line-hover)] focus:outline-none"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="projectType" className="mb-1.5 block text-sm text-[var(--fg-4)]">
              Tipo de projeto
            </label>
            <select
              id="projectType"
              required
              value={form.projectType}
              onChange={(e) => updateField("projectType", e.target.value)}
              className="w-full rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] transition-colors focus:border-[var(--line-hover)] focus:outline-none"
            >
              <option value="" disabled className="bg-[var(--panel-opaque)]">
                Selecione o tipo de projeto
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} className="bg-[var(--panel-opaque)]">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => updateField("website", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--fg-4)]">
              Conte um pouco sobre o projeto
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="w-full resize-none rounded-lg border border-[var(--line-strong)] bg-[var(--panel-3)] px-4 py-2.5 text-sm text-[var(--fg-1)] placeholder:text-[var(--fg-5)] transition-colors focus:border-[var(--line-hover)] focus:outline-none"
              placeholder="Descreva o que você precisa, o problema que quer resolver ou a ideia que tem em mente..."
            />
          </div>

          {error && (
            <p className="mt-5 rounded-lg border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--btn-bg)] text-sm font-medium text-[var(--btn-fg)] transition-all hover:bg-[var(--btn-bg-hover)] active:scale-[0.98] disabled:opacity-60"
            )}
          >
            {loading ? (
              "Enviando..."
            ) : (
              <>
                Quero tirar meu projeto do papel
                <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
