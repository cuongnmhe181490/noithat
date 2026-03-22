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
        title="Ít lý do hơn, nhưng đủ mạnh để khách hàng thấy đây là một đội ngũ đáng để làm việc cùng."
        description="Section này nên đọc nhanh và để lại cảm giác tin cậy, thay vì thêm một lớp brochure kể lại những điều đã nói ở nơi khác."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="luxury-card rounded-[2rem] p-6"
          >
            <h3 className="font-serif text-[2rem] leading-none text-[var(--color-charcoal)]">
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
