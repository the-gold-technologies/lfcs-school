import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

// SMTP settings come from .env.local. For Google / Gmail accounts, SMTP_PASS must be
// a 16-character App Password (Google Account → Security → 2-Step Verification → App passwords),
// not the normal account password.
const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = Number(process.env.SMTP_PORT || 465);

let transporter: Transporter | null = null;

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS must be set in .env.local");
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

// All website form submissions are delivered to this one inbox
export const ENQUIRY_EMAIL = process.env.FRANCHISE_TO_EMAIL || "franchise@lfcsschools.com";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Field = { label: string; value: string };

// Renders the submitted fields as a simple branded table
function renderEmail(title: string, fields: Field[]) {
  const rows = fields
    .filter((f) => f.value)
    .map(
      (f) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;font-weight:bold;color:#0a192f;width:38%;vertical-align:top">${escapeHtml(f.label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#333;white-space:pre-wrap">${escapeHtml(f.value)}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
      <div style="background:#842b46;color:#fff;padding:18px 20px">
        <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#dfae19">Little Flower Group of Schools</div>
        <div style="font-size:20px;font-weight:bold;margin-top:4px">${escapeHtml(title)}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
      <div style="padding:14px 20px;font-size:12px;color:#888">Sent from the website form. Reply to this email to respond directly to the sender.</div>
    </div>`;

  const text = `${title}\n\n${fields.filter((f) => f.value).map((f) => `${f.label}: ${f.value}`).join("\n")}`;
  return { html, text };
}

export async function sendFormEmail(options: {
  to: string;
  subject: string;
  title: string;
  replyTo: string;
  fields: Field[];
}) {
  const { html, text } = renderEmail(options.title, options.fields);
  await getTransporter().sendMail({
    from: `"LFCS Website" <${process.env.SMTP_USER}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text,
    html,
  });
}
