"use client";

import { useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/providers/language-provider";
import {
  contactSchema,
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
  const { t } = useLanguage();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMailFallback, setShowMailFallback] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setShowMailFallback(false);

    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      const nextErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        const messageKey =
          field === "message"
            ? issue.code === "too_big"
              ? "messageMax"
              : "messageMin"
            : field;
        nextErrors[field] = t(`contact.validation.${messageKey}`);
      });
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: t("contact.validationSummary"),
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data?.emailSent) {
        setFormData(initialState);
        setErrors({});
        setStatus({
          type: "success",
          message:
            data.message ||
            "Thanks, your message was sent to the Zepra Tech team. We reply within 24 hours.",
        });
        return;
      }

      setStatus({
        type: "error",
        message:
          data?.message ||
          "We could not send your message right now. Please email info@gozepra.tech or call +1 (302) 469-4003.",
      });
      setShowMailFallback(true);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "We could not send your message right now. Please email info@gozepra.tech or call +1 (302) 469-4003.",
      });
      setShowMailFallback(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const translatedServices = t("services.items");
  const budgetOptions = t("contact.budgetOptions");
  const timelineOptions = t("contact.timelineOptions");

  return (
    <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
        <Field label={t("contact.fullName")} error={errors.name}>
          <Input
            name="name"
            className="rounded-xl border border-slate-700 bg-[#050b1d] p-3.5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:bg-[#070e24] focus:ring-1 focus:ring-cyan-400 focus-visible:border-cyan-400 focus-visible:ring-cyan-400"
            placeholder={t("contact.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label={t("contact.companyName")} error={errors.company}>
          <Input
            name="company"
            className="rounded-xl border border-slate-700 bg-[#050b1d] p-3.5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:bg-[#070e24] focus:ring-1 focus:ring-cyan-400 focus-visible:border-cyan-400 focus-visible:ring-cyan-400"
            placeholder={t("contact.companyPlaceholder")}
            value={formData.company}
            onChange={handleChange}
            aria-invalid={Boolean(errors.company)}
          />
        </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
        <Field label={t("contact.workEmail")} error={errors.email}>
          <Input
            type="email"
            name="email"
            className="rounded-xl border border-slate-700 bg-[#050b1d] p-3.5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:bg-[#070e24] focus:ring-1 focus:ring-cyan-400 focus-visible:border-cyan-400 focus-visible:ring-cyan-400"
            placeholder={t("contact.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label={t("contact.phoneWhatsapp")} error={errors.phone}>
          <Input
            name="phone"
            className="rounded-xl border border-slate-700 bg-[#050b1d] p-3.5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:bg-[#070e24] focus:ring-1 focus:ring-cyan-400 focus-visible:border-cyan-400 focus-visible:ring-cyan-400"
            placeholder={t("contact.phonePlaceholder")}
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
        <Field label={t("contact.serviceNeeded")} error={errors.service}>
          <SelectField
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">{t("contact.selectService")}</option>
            {services.map((service, index) => (
              <option key={service.title} value={service.title}>
                {translatedServices?.[index]?.title ?? service.title}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label={t("contact.estimatedBudget")} error={errors.budget}>
          <SelectField
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">{t("contact.selectBudget")}</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label={t("contact.preferredTimeline")} error={errors.timeline}>
          <SelectField
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            aria-invalid={Boolean(errors.timeline)}
          >
            <option value="">{t("contact.selectTimeline")}</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </SelectField>
        </Field>
        </div>

        <Field label={t("contact.projectGoals")} error={errors.message}>
        <Textarea
          name="message"
          rows={3}
          className="min-h-0 rounded-xl border border-slate-700 bg-[#050b1d] p-3.5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:bg-[#070e24] focus:ring-1 focus:ring-cyan-400 focus-visible:border-cyan-400 focus-visible:ring-cyan-400"
          placeholder={t("contact.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        </Field>

        {status.message ? (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-500/30 bg-emerald-950/60 text-emerald-300"
                : "border-rose-500/30 bg-rose-950/60 text-rose-300"
            }`}
          >
            {status.message}
            {showMailFallback ? (
              <span className="mt-2 block">
                <a
                  href={`mailto:${siteMeta.email}?subject=${encodeURIComponent(
                    `New inquiry from ${formData.name || "your website"} | ${formData.service || "Zepra Tech"}`,
                  )}`}
                  className="font-semibold underline underline-offset-2 hover:text-white"
                >
                  Or send it yourself by email
                </a>
                {" "}to {siteMeta.email}, or call{" "}
                <a
                  href={`tel:${siteMeta.phoneRaw || "+13024694003"}`}
                  className="font-semibold underline underline-offset-2 hover:text-white"
                >
                  {siteMeta.phone || "+1 (302) 469-4003"}
                </a>
                .
              </span>
            ) : null}
          </div>
        ) : null}
      </div>

      <Button
        type="submit"
        size="xl"
        disabled={isSubmitting}
        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 font-semibold text-white shadow-md shadow-blue-500/20 disabled:opacity-60"
      >
        <>
          <ArrowRight className="h-4 w-4" />
          {isSubmitting ? "Sending..." : t("contact.submit")}
        </>
      </Button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      {children}
      {error ? <span className="text-sm text-rose-400">{error}</span> : null}
    </label>
  );
}

function SelectField({ className = "", children, ...props }) {
  return (
    <select
      className={`flex h-12 w-full rounded-xl border border-slate-700 bg-[#050b1d] p-3.5 text-sm text-white shadow-sm transition-colors focus:border-cyan-400 focus:bg-[#070e24] focus:outline-none focus:ring-1 focus:ring-cyan-400 focus-visible:ring-cyan-400 [&_option]:bg-[#070f24] [&_option]:text-white ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
