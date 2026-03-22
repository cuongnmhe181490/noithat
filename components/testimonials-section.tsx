import Image from "next/image";
import type { Testimonial } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="section-shell py-20 md:py-28">
      <SectionHeading
        eyebrow="Client voice"
        title="Những lời xác nhận giá trị từ chính người sống trong không gian đó."
        description="Chúng tôi xem phản hồi sau bàn giao là thước đo thật nhất cho chất lượng của một dự án cao cấp."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[2rem] border border-black/8 bg-white/76 p-7 shadow-[0_18px_54px_rgba(22,18,14,0.06)]"
          >
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
            <p className="mt-6 font-serif text-3xl leading-10 text-[var(--color-charcoal)]">
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
