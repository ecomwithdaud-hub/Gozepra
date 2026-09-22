"use client";

import { useState } from "react";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  budgetOptions,
  contactSchema,
  timelineOptions,
} from "@/lib/contact-schema";
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

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      const nextErrors = {};
      parsed.error.issues.forEach((issue) => {
        nextErrors[issue.path[0]] = issue.message;
      });
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please review the highlighted fields and try again.",
      });
      return;
    }

    const { name, company, email, phone, service, budget, timeline, message } = parsed.data;
    const subject = `New inquiry from ${name} | ${service}`;
    const body = [
      `Full Name: ${name}`,
      `Company: ${company}`,
      `Work Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Service Needed: ${service}`,
      `Estimated Budget: ${budget}`,
      `Preferred Timeline: ${timeline}`,
      "",
      "Project Goals:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormData(initialState);
    setErrors({});
    setStatus({
      type: "success",
      message:
        "Your email app is opening with the inquiry details. You can also use the WhatsApp button if you prefer a faster response.",
    });

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <Input
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Company Name" error={errors.company}>
          <Input
            name="company"
            placeholder="Company or brand"
            value={formData.company}
            onChange={handleChange}
            aria-invalid={Boolean(errors.company)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Work Email" error={errors.email}>
          <Input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone}>
          <Input
            name="phone"
            placeholder="+92..."
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Field label="Service Needed" error={errors.service}>
          <SelectField
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label="Estimated Budget" error={errors.budget}>
          <SelectField
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label="Preferred Timeline" error={errors.timeline}>
          <SelectField
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            aria-invalid={Boolean(errors.timeline)}
          >
            <option value="">Choose a timeline</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </SelectField>
        </Field>
      </div>

      <Field label="Project Goals" error={errors.message}>
        <Textarea
          name="message"
          placeholder="Tell us what you want to build, improve, or automate."
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      {status.message ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <Button type="submit" size="xl" className="w-full sm:w-auto">
        <>
          <Send className="h-4 w-4" />
          Open email draft
        </>
      </Button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      {children}
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}

function SelectField({ className = "", children, ...props }) {
  return (
    <select
      className={`flex h-12 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
