import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactData;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "sebastiancondedev@outlook.com",
      replyTo: body.email,
      subject: `Nuevo mensaje: ${body.asunto}`,
      html: `
        <h2>Nuevo mensaje desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${body.nombre}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Asunto:</strong> ${body.asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${body.mensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando mensaje:", error);
    return NextResponse.json(
      { error: "Error enviando email" },
      { status: 500 }
    );
  }
}
