import Image from "next/image";
import type { Testimonial } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="section-shell section-pad">
      <SectionHeading
        eyebrow="Client voice"
        title="Một vài phản hồi đủ để người xem tin vào chất lượng sau bàn giao."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        {testimonials.map((item, index) => (
          <article key={item.name} className="luxury-card rounded-[2rem] p-7">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-[var(--color-charcoal)]">
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
              </div>
            </div>
            <p
              className={
                index === 0
                  ? "mt-6 font-serif text-[2rem] leading-[1.24] text-[var(--color-charcoal)]"
                  : "mt-6 font-serif text-[1.55rem] leading-[1.28] text-[var(--color-charcoal)]"
              }
            >
              “{item.quote}”
            </p>
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
              <span>{item.project}</span>
              <span>{item.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
