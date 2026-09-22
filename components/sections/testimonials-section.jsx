import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="section-shell bg-white/50">
      <div className="container">
        <SectionHeading
          eyebrow="Client Trust"
          title="Client feedback."
         
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
