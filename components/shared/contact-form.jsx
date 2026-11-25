"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { budgetOptions, contactSchema, timelineOptions } from "@/lib/contact-schema";
import { services, siteMeta } from "@/lib/site";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

const fieldClass =
  "rounded-2xl border border-[#E2E8F0] bg-white p-3.5 text-[#111111] placeholder:text-[#9A978F] focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20";

export function ContactForm({ initialBudget = "" }) {
  const [formData, setFormData] = useState({ ...initialState, budget: initialBudget });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const nextErrors = {};
      parsed.error.issues.forEach((issue) => {
        nextErrors[issue.path[0]] = issue.message;
      });
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please fill in every field correctly." });
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus({
          type: "error",
          message:
            result.message ||
            `We could not send your message. Please write to ${siteMeta.email} or call ${siteMeta.phone}.`,
        });
        return;
      }

      setFormData(initialState);
      setStatus({ type: "success", message: result.message });
    } catch {
      setStatus({
        type: "error",
        message: `We could not send your message. Please write to ${siteMeta.email} or call ${siteMeta.phone}.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <Input
            name="name"
            className={fieldClass}
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <Input
            name="company"
            className={fieldClass}
            placeholder="Your business"
            value={formData.company}
            onChange={handleChange}
            aria-invalid={Boolean(errors.company)}
          />
        </Field>
        <Field label="Work email" error={errors.email}>
          <Input
            type="email"
            name="email"
            className={fieldClass}
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <Input
            name="phone"
            className={fieldClass}
            placeholder="+1 (___) ___-____"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field label="Service needed" error={errors.service}>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            className={`${fieldClass} h-[52px] w-full`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated budget" error={errors.budget}>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            aria-invalid={Boolean(errors.budget)}
            className={`${fieldClass} h-[52px] w-full`}
          >
            <option value="">Select a budget</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred timeline" error={errors.timeline} className="md:col-span-2">
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            aria-invalid={Boolean(errors.timeline)}
            className={`${fieldClass} h-[52px] w-full`}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="Project goals" error={errors.message}>
            <Textarea
              name="message"
              rows={4}
              className={fieldClass}
              placeholder="What does your business do, and what should the website do?"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
          </Field>
        </div>
      </div>

      {status.message ? (
        <div
          role="status"
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-full bg-[#0066FF] py-3.5 text-base font-semibold text-white hover:bg-[#0052CC] disabled:opacity-60"
      >
        {sending ? (
          "Sending..."
        ) : (
          <>
            Send inquiry
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-sm text-[#55524B]">
        Or write to us at {siteMeta.email}. We reply within 24 hours.
      </p>
    </form>
  );
}

function Field({ label, error, children, className }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-sm font-semibold text-[#111111]">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
