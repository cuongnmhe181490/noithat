import type { TrustIndicator } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";

export function TrustSection({
  items,
}: {
  items: TrustIndicator[];
}) {
  return (
    <section className="section-shell section-pad">
      <SectionHeading
        eyebrow="Vì sao chọn chúng tôi"
        title="Một studio có gu chỉ là điểm khởi đầu. Điều giữ khách hàng ở lại là năng lực thực thi."
        description="Website này phải chuyển được cảm giác năng lực thật: tư duy, hệ thống, độ tinh và khả năng đi đến công trình hoàn thiện cuối cùng."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="luxury-card rounded-[2rem] p-7"
          >
            <h3 className="font-serif text-3xl text-[var(--color-charcoal)]">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
