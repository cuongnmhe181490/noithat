import type { SignaturePillar } from "@/lib/types";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export function StyleSignature({ pillars }: { pillars: SignaturePillar[] }) {
  return (
    <section className="section-shell section-pad">
      <SectionHeading
        eyebrow="Signature direction"
        title="Một vài nguyên tắc thẩm mỹ đủ để định nghĩa thương hiệu, không cần nói quá nhiều."
        description="Thay vì dàn trải nhiều claim, chúng tôi giữ lại ba nguyên tắc đủ mạnh để khách hàng cảm được cá tính thiết kế ngay từ đầu."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <article className="luxury-card rounded-[2rem] p-7">
              <p className="section-kicker">
                0{index + 1}
              </p>
              <h3 className="mt-5 font-serif text-[2rem] leading-none text-[var(--color-charcoal)]">
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
