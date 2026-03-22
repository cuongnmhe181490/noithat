import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Câu chuyện thương hiệu và tiêu chuẩn làm việc của Mộc Du Ký Atelier dưới một nhịp kể chuyện gọn, sâu và sang hơn.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell section-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Atelier profile"
            title="Điều chúng tôi theo đuổi không phải là làm cho không gian trông đắt tiền, mà là khiến nó sống lâu vẫn thấy đúng."
            description="Mộc Du Ký Atelier làm việc như một studio biên tập: giữ lại những gì thật sự cần để không gian có chiều sâu, có nhịp điệu và đủ năng lực đi đến công trình hoàn thiện cuối cùng."
            align="left"
          />
          <p className="max-w-xl text-sm leading-8 text-[var(--color-muted)]">
            Điều tạo nên khác biệt không nằm ở việc dùng nhiều vật liệu đắt, mà ở
            cách chọn đúng tỷ lệ, đúng mức hoàn thiện và đúng cảm giác sử dụng cho
            từng nhóm khách hàng. Đây là lý do chúng tôi không trình bày thương hiệu
            như một danh sách thành tích, mà như một phương pháp làm việc.
          </p>
        </div>
        <div className="luxury-frame relative min-h-[38rem] overflow-hidden rounded-[2.6rem]">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
            alt="Không gian studio nội thất cao cấp"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="section-shell section-tight grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Studio nhỏ, độ tập trung lớn",
            body: "Mỗi dự án được theo sát kỹ hơn, phản hồi nhanh hơn và ít bị chia cắt qua nhiều lớp trung gian.",
          },
          {
            title: "Xưởng hỗ trợ bespoke thực tế",
            body: "Những chi tiết quan trọng có thể được hiệu chỉnh ở mức hoàn thiện thật, thay vì dừng ở bản vẽ đẹp.",
          },
          {
            title: "Làm việc theo chiều sâu thay vì phô diễn",
            body: "Chúng tôi tránh lối khoe khoang rẻ tiền. Thương hiệu nên được cảm từ cách nói, cách làm và chất lượng công trình.",
          },
        ].map((item) => (
          <article key={item.title} className="luxury-card rounded-[2rem] p-7">
            <h2 className="font-serif text-[2.2rem] leading-none text-[var(--color-charcoal)]">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </section>

      <section className="section-shell section-pad grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="luxury-card rounded-[2.2rem] p-8">
          <p className="section-kicker">Phương pháp làm việc</p>
          <h2 className="mt-4 font-serif text-[3.4rem] leading-none text-[var(--color-charcoal)]">
            Cân bằng giữa cảm xúc thẩm mỹ, công năng sống và khả năng thực thi.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--color-muted)]">
            Mỗi dự án được đặt trên ba lớp cùng lúc: người sống trong đó là ai,
            không gian cần tạo ra cảm giác gì, và công trình sẽ được hiện thực ra
            sao để không mất đi tinh thần ban đầu.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "Tư duy biên tập giúp cắt bỏ những chi tiết không thực sự cần thiết.",
            "Vật liệu được chọn theo cách chúng phản ứng với ánh sáng và thời gian sử dụng.",
            "Quy trình rõ giúp khách hàng cảm thấy an tâm ngay cả khi dự án kéo dài nhiều tháng.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.8rem] border border-black/8 bg-[var(--color-panel-strong)] p-6 text-sm leading-7 text-[var(--color-muted)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
