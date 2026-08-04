"use client";

import { FormEvent, useState } from "react";
import type { InquiryFormData } from "@/data/site";

const initial: InquiryFormData = { name: "", email: "", country: "", requirement: "", message: "" };

export function InquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 450));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="formSuccess" role="status">
        <span>✓</span><h3>Thank you.</h3><p>Our sales team will contact you soon.</p>
        <button type="button" onClick={() => { setForm(initial); setStatus("idle"); }}>Send another inquiry</button>
      </div>
    );
  }

  return (
    <form className="inquiryForm" onSubmit={submit}>
      <div className="formRow">
        <label>Name<input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label>Email<input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
      </div>
      <div className="formRow">
        <label>Country<input required autoComplete="country-name" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} /></label>
        <label>Product requirement<input required value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} /></label>
      </div>
      <label>Message<textarea rows={2} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
      <button className="button buttonPrimary formButton" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit inquiry"}</button>
    </form>
  );
}
