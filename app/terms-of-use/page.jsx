import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  alternates: { canonical: "/terms-of-use" },
  title: "Terms of Use",
  description: "The terms that apply when you use the Zepra Tech website and services.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      href="/terms-of-use"
      title="Terms of Use"
      intro="These Terms of Use apply to the Zepra Tech website (gozepra.tech). By using this website, you agree to these terms. Zepra Tech is a digital agency based in Middletown, Delaware, United States, with an engineering studio in DHA Phase 8, Broadway Commercial, Lahore, Pakistan. Contact us at info@gozepra.tech or +1 (302) 469-4003. Last updated: 25 November 2026."
      sections={[
        {
          heading: "Using this website",
          body: [
            "Use this website lawfully and honestly. Do not try to break it, misuse the contact form, copy our content and present it as your own, or use the site to harm anyone.",
            "The content on this website is general information about our services. Demo websites shown on this site are sample concepts built to demonstrate our work; they are not real businesses. Prices and timelines shown here are a guide only. Your exact scope, price, and launch date are agreed in writing for your project.",
            "We may change the content of this website at any time without notice.",
          ],
        },
        {
          heading: "Services, quotes, and payments",
          body: [
            "Every project starts with a free 15-minute consultation. After that we send a written quote that sets out the scope, the fixed price, and the launch date. Work starts only after you approve the quote in writing.",
            "Launch starts from $1,500, Growth from $3,000 to $8,000, Scale from $8,000 to $18,000, and Enterprise from $18,000. Your price is one fixed number inside the range for your tier, agreed in writing before we start. The price does not move unless the scope changes, and any change is agreed in writing first.",
            "Payment terms, including any deposit and the payment schedule, are set out in the written quote for each project. We do not start paid work before the agreed terms are accepted.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "When your project is complete and paid for, you own 100 percent of the code, the domain, the hosting account, and your data. There is no lock-in and no monthly fee to keep your own website.",
            "The Zepra Tech name, logo, and the content of this website belong to Zepra Tech unless we agree otherwise in writing. You may not use our brand or copy our site content without permission.",
            "Anything you send us, such as text, logos, or photos for your project, must be yours to share or licensed for our use. You are responsible for the rights to the material you provide.",
          ],
        },
        {
          heading: "Availability and liability",
          body: [
            "We work to keep this website available and accurate, but we do not guarantee it will always be available or free of errors. The website is provided as it is.",
            "To the fullest extent allowed by law, Zepra Tech is not liable for indirect or consequential losses from using this website. Our total liability for any claim connected to a project is limited to the amount you paid us for that project.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about these terms? Write to info@gozepra.tech or call +1 (302) 469-4003. We reply within 24 hours.",
          ],
        },
      ]}
    />
  );
}
