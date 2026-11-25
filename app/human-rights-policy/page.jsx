import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  alternates: { canonical: "/human-rights-policy" },
  title: "Human Rights Policy",
  description: "Zepra Tech's commitment to respecting human rights in how it works.",
};

export default function HumanRightsPolicyPage() {
  return (
    <LegalPage
      href="/human-rights-policy"
      title="Human Rights Policy"
      intro="Zepra Tech respects human rights in how it works, who it works with, and how it treats people. This policy applies to our team, our freelancers, and our suppliers. Contact us at info@gozepra.tech or +1 (302) 469-4003. Last updated: 25 November 2026."
      sections={[
        {
          heading: "Our commitment",
          body: [
            "We treat every person with respect and fairness. We do not discriminate on the basis of race, religion, gender, age, disability, or background. We do not use forced labour or child labour in any part of our work, and we do not work with anyone who does.",
            "We pay the people who work with us fairly for the work they do, and we respect their right to raise concerns without fear of retaliation.",
          ],
        },
        {
          heading: "Our team and partners",
          body: [
            "This commitment applies to our own team, the freelancers and specialists we engage, and the suppliers we choose, including software and hosting providers. We choose partners who respect the same standards, and we stop working with any partner we find is violating them.",
          ],
        },
        {
          heading: "Raising a concern",
          body: [
            "If you believe we, or anyone working with us, has acted against this policy, write to info@gozepra.tech. Tell us what happened and we will look into it and reply within 24 hours.",
          ],
        },
      ]}
    />
  );
}
