import { Resend } from "resend";
import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, phone, email, businessType, websiteUrl } = await req.json();

  // Save lead to database
  await getSupabase().from("leads").insert({
    name,
    phone,
    email,
    business_type: businessType,
    website_url: websiteUrl || null,
  });

  // Email to agency
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "melbweb@protonmail.com",
    subject: `New Free Audit Request — ${name}`,
    html: `
      <h2>New Free Audit Request</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Business Type</strong></td><td>${businessType}</td></tr>
        <tr><td><strong>Website</strong></td><td>${websiteUrl || "—"}</td></tr>
      </table>
    `,
  });

  // Confirmation email to customer
  await resend.emails.send({
    from: "melbweb@protonmail.com",
    to: email,
    subject: "We received your audit request",
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out! We've received your free website audit request and will review your website within 24 hours.</p>
      <p>We'll be in touch soon.</p>
      <p>— Melbourne Web Agency</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
