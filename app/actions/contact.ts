"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (message.length > 2000) {
    return { error: "Message must be under 2000 characters." };
  }

  try {
    await transporter.sendMail({
      from: '"Buy Pallet Jacks" <noreply@buypalletjacks.com>',
      to: ["goran@coolfridgeguys.com", "markovic755@gmail.com"],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return { success: true };
  } catch {
    return {
      error: "Failed to send your message. Please call or text us instead.",
    };
  }
}
