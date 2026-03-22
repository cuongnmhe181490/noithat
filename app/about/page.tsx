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
      <section className="section-shell section-pad grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Atelier profile"
            title="Điều chúng tôi theo đuổi không phải là làm cho không gian trông đắt tiền, mà là khiến nó sống lâu vẫn thấy đúng."
            description="Mộc Du Ký Atelier làm việc như một studio biên tập: giữ lại những gì thật sự cần để không gian có chiều sâu, có nhịp điệu và đủ năng lực đi đến công trình hoàn thiện cuối cùng."
            align="left"
          />
          <p className="max-w-xl text-sm leading-8 text-[var(--color-muted)]">
            Khác biệt không nằm ở việc dùng nhiều vật liệu đắt, mà ở cách chọn đúng tỷ lệ,
            đúng mức hoàn thiện và đúng cảm giác sử dụng cho từng nhóm khách hàng.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="luxury-frame relative min-h-[38rem] overflow-hidden rounded-[2.6rem] md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
              alt="Không gian studio nội thất cao cấp"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="surface-soft rounded-[2rem] p-6">
            <p className="section-kicker">Showroom</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Không gian tiếp khách được chuẩn bị theo lịch hẹn riêng để việc chọn vật liệu
              và trao đổi direction diễn ra đủ sâu, đủ tĩnh.
            </p>
          </div>
          <div className="surface-soft rounded-[2rem] p-6">
            <p className="section-kicker">Xưởng</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Xưởng giúp những quyết định trên bản vẽ đi được đến lớp hoàn thiện thật, với
              độ chính xác và khả năng bespoke cao hơn.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section-tight grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Studio nhỏ, độ tập trung lớn",
            body: "Mỗi dự án được theo sát kỹ hơn, phản hồi nhanh hơn và ít bị chia cắt qua nhiều lớp trung gian.",
          },
          {
            title: "Tư duy biên tập thay vì phô diễn",
            body: "Chúng tôi cắt bỏ những gì không thật sự cần để không gian giữ được nhịp điệu và độ sang lâu dài.",
          },
          {
            title: "Triển khai là một phần của thiết kế",
            body: "Thiết kế, xưởng và công trường phải nói cùng một ngôn ngữ thì công trình mới giữ được thần thái ban đầu.",
          },
        ].map((item, index) => (
          <article
            key={item.title}
            className={index === 1 ? "luxury-card rounded-[2rem] p-7" : "surface-soft rounded-[2rem] p-7"}
          >
            <h2 className="font-serif text-[2.2rem] leading-none text-[var(--color-charcoal)]">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </section>

      <section className="section-shell section-pad grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="luxury-card rounded-[2.2rem] p-8">
          <p className="section-kicker">Cách làm việc</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[3.4rem] leading-[0.98] text-[var(--color-charcoal)]">
            Cân bằng giữa cảm xúc thẩm mỹ, công năng sống và khả năng thực thi.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--color-muted)]">
            Mỗi dự án được đặt trên ba lớp cùng lúc: người sống trong đó là ai, không
            gian cần tạo ra cảm giác gì, và công trình sẽ được hiện thực ra sao để không
            mất đi tinh thần ban đầu.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "Tư duy biên tập giúp cắt bỏ những chi tiết không thực sự cần thiết.",
            "Vật liệu được chọn theo cách chúng phản ứng với ánh sáng, thời gian và nhịp sử dụng hằng ngày.",
            "Quy trình rõ giúp khách hàng an tâm ngay cả với các dự án kéo dài nhiều tháng.",
          ].map((item) => (
            <div
              key={item}
              className="surface-soft rounded-[1.8rem] p-6 text-sm leading-7 text-[var(--color-muted)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
