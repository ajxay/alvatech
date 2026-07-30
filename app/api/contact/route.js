import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = "mail.ajayasok@gmail.com";
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request) {
  try {
    console.info("[contact-api] Incoming contact submission");

    if (!resendApiKey) {
      console.error("[contact-api] Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const body = await request.json();
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      message = "",
      services = [],
      source = "contact-form",
    } = body || {};

    if (!firstName || !email || !phone) {
      console.warn("[contact-api] Missing required fields", {
        hasFirstName: Boolean(firstName),
        hasLastName: Boolean(lastName),
        hasEmail: Boolean(email),
        hasPhone: Boolean(phone),
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);

    const safeServices = Array.isArray(services) ? services : [];
    const submitterName = `${firstName} ${lastName}`.trim();
    console.info("[contact-api] Payload summary", {
      source,
      fromEmail,
      toEmail,

      submitterEmail: email,
      servicesCount: safeServices.length,
      messageLength: message.length,
    });

    const html = `
      <h2>New Contact Request</h2>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Services:</strong> ${
        safeServices.length > 0 ? safeServices.join(", ") : "None selected"
      }</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided."}</p>
    `;

    const resendResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      // cc: "manish@thevictorymantra.com",
      subject: `New contact form submission - ${submitterName} - (${source})`,
      replyTo: email,
      html,
    });

    console.info("[contact-api] Resend response", resendResponse);

    if (resendResponse?.error) {
      console.error("[contact-api] Resend send failed", resendResponse.error);
      return NextResponse.json(
        { error: resendResponse.error.message || "Resend failed to send" },
        { status: 502 },
      );
    }

    console.info("[contact-api] Email queued successfully", {
      id: resendResponse?.data?.id || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact-api] Unexpected error", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send contact email" },
      { status: 500 },
    );
  }
}
