import { NextResponse } from "next/server";
import {
  getContactChannels,
  sendContactEmail,
  sendContactWhatsApp,
  type ContactPayload,
} from "@/lib/contact-notifications";

type ContactRequest = ContactPayload & {
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  const { emailEnabled, whatsappEnabled } = getContactChannels();

  if (!emailEnabled && !whatsappEnabled) {
    return NextResponse.json(
      {
        error:
          "Nenhum canal de notificação configurado. Configure e-mail (Resend) ou WhatsApp (CallMeBot) nas variáveis de ambiente.",
      },
      { status: 503 }
    );
  }

  let body: ContactRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const data: ContactPayload = {
    name: sanitize(body.name, 120),
    company: sanitize(body.company, 120),
    email: sanitize(body.email, 180),
    whatsapp: sanitize(body.whatsapp, 30),
    projectType: sanitize(body.projectType, 80),
    message: sanitize(body.message, 4000),
  };

  if (!data.name || !data.email || !data.projectType || !data.message) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail, tipo de projeto e mensagem." },
      { status: 400 }
    );
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const results = await Promise.allSettled([
    emailEnabled ? sendContactEmail(data) : Promise.resolve({ ok: true as const }),
    whatsappEnabled ? sendContactWhatsApp(data) : Promise.resolve({ ok: true as const }),
  ]);

  const emailResult = results[0].status === "fulfilled" ? results[0].value : { ok: false, error: "Erro ao enviar e-mail." };
  const whatsappResult = results[1].status === "fulfilled" ? results[1].value : { ok: false, error: "Erro ao enviar WhatsApp." };

  const emailOk = !emailEnabled || emailResult.ok;
  const whatsappOk = !whatsappEnabled || whatsappResult.ok;

  if (!emailOk && !whatsappOk) {
    const errors = [emailResult, whatsappResult]
      .filter((r) => !r.ok && "error" in r)
      .map((r) => r.error)
      .join(" ");

    return NextResponse.json({ error: errors || "Falha ao enviar mensagem." }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    delivered: {
      email: emailEnabled && emailResult.ok,
      whatsapp: whatsappEnabled && whatsappResult.ok,
    },
  });
}
