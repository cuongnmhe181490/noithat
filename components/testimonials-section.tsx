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
        title="Những phản hồi nên được đọc như một dấu chấm tin cậy, không phải một bức tường lời khen."
        description="Chúng tôi giữ section này gọn để người xem cảm được chất lượng sau bàn giao mà không bị mệt bởi quá nhiều trích dẫn dài."
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
                <h3 className="text-lg font-medium text-[var(--color-charcoal)]">
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
              </div>
            </div>
            <p
              className={
                index === 0
                  ? "mt-6 font-serif text-[2.3rem] leading-[1.2] text-[var(--color-charcoal)]"
                  : "mt-6 font-serif text-[1.8rem] leading-[1.25] text-[var(--color-charcoal)]"
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
