import { NextResponse } from "next/server";

const SERVICES = ["Residential", "Commercial", "Short-Term Rental"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Request body must be JSON." }, { status: 400 });
  }

  const lead = {
    name: clean(body?.name, 120),
    email: clean(body?.email, 254),
    phone: clean(body?.phone, 40),
    service: clean(body?.service, 40),
    details: clean(body?.details, 4000),
  };

  if (!lead.name || !lead.details || !EMAIL_PATTERN.test(lead.email) || !SERVICES.includes(lead.service)) {
    return NextResponse.json({ ok: false, error: "Name, a valid email, service type, and details are required." }, { status: 422 });
  }

  // TODO: deliver the lead (email via Resend/SendGrid, a CRM, or a sheet). Until then it only reaches server logs.
  console.info("[lead]", { ...lead, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
