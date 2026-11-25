import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  alternates: { canonical: "/modern-slavery-act" },
  title: "Modern Slavery Act",
  description: "Zepra Tech's statement on preventing modern slavery and human trafficking.",
};

export default function ModernSlaveryActPage() {
  return (
    <LegalPage
      href="/modern-slavery-act"
      title="Modern Slavery Act"
      intro="Zepra Tech does not tolerate modern slavery or human trafficking in its business or its supply chain. This statement sets out what we do to prevent it. Contact us at info@gozepra.tech or +1 (302) 469-4003. Last updated: 25 November 2026."
      sections={[
        {
          heading: "Our statement",
          body: [
            "We do not use forced labour, bonded labour, or child labour, and we do not work with any person or company that does. Every person who works with us does so freely and is paid fairly for their work.",
          ],
        },
        {
          heading: "Our business and supply chain",
          body: [
            "We are a small digital agency. Our work is software, design, and marketing, delivered by our own team and a small number of vetted specialists. Our suppliers are mainly established software and hosting providers, such as Vercel, which keeps our supply chain short and visible.",
            "Because our supply chain is short, the risk of modern slavery in it is low. We keep it that way by choosing established providers and reviewing any new supplier before we engage them.",
          ],
        },
        {
          heading: "Raising a concern",
          body: [
            "If you have any concern about modern slavery connected to our business or supply chain, write to info@gozepra.tech. We will look into every report and reply within 24 hours.",
          ],
        },
      ]}
    />
  );
}
