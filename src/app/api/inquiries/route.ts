import { NextRequest, NextResponse } from "next/server";

type Inquiry = { name?: unknown; email?: unknown; phone?: unknown; company?: unknown; country?: unknown; requirement?: unknown; message?: unknown; website?: unknown; startedAt?: unknown };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9()\-\s.]{7,25}$/;
const attempts = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown, max = 2000) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character); }

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const rate = attempts.get(ip);
  if (rate && rate.resetAt > now && rate.count >= 5) return NextResponse.json({ message: "Too many inquiries. Please wait a few minutes and try again." }, { status: 429 });
  attempts.set(ip, !rate || rate.resetAt <= now ? { count: 1, resetAt: now + 15 * 60_000 } : { ...rate, count: rate.count + 1 });

  let body: Inquiry;
  try { body = await request.json() as Inquiry; } catch { return NextResponse.json({ message: "Invalid form data." }, { status: 400 }); }
  if (text(body.website)) return NextResponse.json({ message: "Inquiry received." });
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || now - startedAt < 1500) return NextResponse.json({ message: "Please review your information before submitting." }, { status: 400 });

  const data = { name: text(body.name, 120), email: text(body.email, 254), phone: text(body.phone, 40), company: text(body.company, 160), country: text(body.country, 120), requirement: text(body.requirement, 500), message: text(body.message, 3000) };
  if (!data.name || !emailPattern.test(data.email) || !phonePattern.test(data.phone) || data.phone.replace(/\D/g, "").length < 7) return NextResponse.json({ message: "Please complete the required fields with valid contact details." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL || "yincx888@163.com";
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from) return NextResponse.json({ message: "Email delivery is not configured yet. Please contact us directly at yincx888@163.com." }, { status: 503 });

  const rows = Object.entries(data).map(([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #eadce4;font-weight:700;text-transform:capitalize">${escapeHtml(key)}</td><td style="padding:8px 12px;border:1px solid #eadce4">${escapeHtml(value || "—")}</td></tr>`).join("");
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `inquiry-${crypto.randomUUID()}` }, body: JSON.stringify({ from, to: [to], reply_to: data.email, subject: `New Colotutu inquiry — ${data.company || data.name}`, html: `<div style="font-family:Arial,sans-serif;color:#352333"><h1>New B2B Inquiry</h1><table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table></div>` }) });
  if (!response.ok) return NextResponse.json({ message: "We could not send your inquiry right now. Please email yincx888@163.com directly." }, { status: 502 });
  return NextResponse.json({ message: "Inquiry sent successfully." });
}
