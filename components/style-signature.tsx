import type { SignaturePillar } from "@/lib/types";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export function StyleSignature({ pillars }: { pillars: SignaturePillar[] }) {
  return (
    <section className="section-shell py-20 md:py-28">
      <SectionHeading
        eyebrow="Signature direction"
        title="Phong cách thiết kế được dẫn dắt bởi cảm giác sống, không phải bởi xu hướng ngắn hạn."
        description="Chúng tôi ưu tiên sự tinh tế có chiều sâu: ít hơn nhưng đúng hơn, sang hơn vì được tiết chế tốt hơn."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <article className="rounded-[2rem] border border-black/8 bg-white/78 p-7 shadow-[0_20px_54px_rgba(22,18,14,0.06)]">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                0{index + 1}
              </p>
              <h3 className="mt-5 font-serif text-3xl text-[var(--color-charcoal)]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
