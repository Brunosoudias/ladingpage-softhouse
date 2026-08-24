import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  projectType: string;
  message: string;
};

export function formatContactMessage(data: ContactPayload): string {
  const lines = [
    `🆕 Novo lead — ${siteConfig.name}`,
    "",
    `Nome: ${data.name}`,
    data.company ? `Empresa: ${data.company}` : null,
    `E-mail: ${data.email}`,
    data.whatsapp ? `WhatsApp: ${data.whatsapp}` : null,
    `Tipo de projeto: ${data.projectType}`,
    "",
    "Mensagem:",
    data.message,
  ];

  return lines.filter(Boolean).join("\n");
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendContactEmail(data: ContactPayload) {
  const resend = getResendClient();
  const to = siteConfig.email;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resend || !from) {
    return { ok: false as const, error: "E-mail não configurado." };
  }

  const text = formatContactMessage(data);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[${siteConfig.name}] Novo lead: ${data.name} — ${data.projectType}`,
    text,
  });

  if (error) {
    return { ok: false as const, error: error.message };
  }

  return { ok: true as const };
}

export async function sendContactWhatsApp(data: ContactPayload) {
  const phone = process.env.WHATSAPP_NOTIFY_PHONE;
  const apiKey = process.env.CALLMEBOT_API_KEY;

  if (!phone || !apiKey) {
    return { ok: false as const, error: "WhatsApp não configurado." };
  }

  const text = encodeURIComponent(formatContactMessage(data));
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    return { ok: false as const, error: "Falha ao enviar notificação no WhatsApp." };
  }

  const body = await response.text();

  if (body.toLowerCase().includes("error")) {
    return { ok: false as const, error: body.slice(0, 200) };
  }

  return { ok: true as const };
}

export function getContactChannels() {
  const emailEnabled = Boolean(
    process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL
  );
  const whatsappEnabled = Boolean(
    process.env.WHATSAPP_NOTIFY_PHONE && process.env.CALLMEBOT_API_KEY
  );

  return { emailEnabled, whatsappEnabled };
}
