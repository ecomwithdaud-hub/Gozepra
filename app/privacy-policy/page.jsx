import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy",
  description: "How Zepra Tech collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      href="/privacy-policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains what information Zepra Tech collects through this website, how we use it, and the choices you have. Zepra Tech is a digital agency based in Middletown, Delaware, United States, with an engineering studio in DHA Phase 8, Broadway Commercial, Lahore, Pakistan. Contact us at info@gozepra.tech or +1 (302) 469-4003. Last updated: 25 November 2026."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you use the contact form, we collect the details you type in: your name, company, work email, phone number, the service you need, your estimated budget, your preferred timeline, and your project goals.",
            "We do not ask you to create an account, and we do not collect payment details through this website. Payment details, if any, are handled only as agreed in your written project quote.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your inquiry only to reply to you, prepare your written quote, and deliver the project you asked about. We do not use it for any other purpose, and we do not send you marketing emails unless you ask for them.",
          ],
        },
        {
          heading: "Sharing and storage",
          body: [
            "We do not sell your information, and we do not share it with third parties for marketing. Your form message is sent by email to our team at info@gozepra.tech so we can reply, and we keep inquiry emails only as long as needed to respond and for our business records.",
            "This website is hosted by Vercel. Like any hosting provider, Vercel may collect standard server logs, such as IP addresses and browser details, to operate and secure the site.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "This website does not use analytics cookies, advertising cookies, or third-party trackers. We do not follow you across other websites.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can ask us to show you the inquiry details we hold about you, correct them, or delete them. Write to info@gozepra.tech with your request and we will reply within 24 hours.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy? Write to info@gozepra.tech or call +1 (302) 469-4003.",
          ],
        },
      ]}
    />
  );
}
