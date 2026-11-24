import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your company name."),
  email: z.string().email("Please enter a valid work email."),
  phone: z.string().min(7, "Please enter your phone number."),
  service: z.string().min(2, "Please choose a service."),
  budget: z.string().min(2, "Please select an estimated budget."),
  timeline: z.string().min(2, "Please choose a preferred timeline."),
  message: z
    .string()
    .min(20, "Please share a little more about your project.")
    .max(2000, "Please keep the message under 2000 characters."),
});

export const budget: ["Under $2,500 (Subject to Review)", "$2,500 - $5,000 (Small Business Launch)", "$5,000 - $12,000 (Growth + AI)", "$12,000 - $25,000 (Custom Platform)", "$25,000+ (Enterprise)"];

export const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2-3 months",
  "Flexible / exploring",
];
