import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { StatsSection } from "@/components/stats-section";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Câu chuyện thương hiệu, triết lý thiết kế và năng lực thực thi của atelier nội thất cao cấp Mộc Du Ký.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell grid gap-10 pt-32 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-2xl">
          <span className="eyebrow">Atelier profile</span>
          <h1 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
            Chúng tôi thiết kế không gian như biên tập một cuốn tạp chí sống.
          </h1>
          <p className="mt-6 text-base leading-7 text-[var(--color-muted)] md:text-lg">
            Mộc Du Ký Atelier kết hợp tư duy biên tập, độ nhạy vật liệu và năng
            lực thi công để tạo ra những không gian có chiều sâu thẩm mỹ nhưng
            vẫn chạm đúng nhịp sống riêng của từng gia chủ.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Đội ngũ thiết kế theo mô hình studio nhỏ, kiểm soát sâu từng dự án.",
              "Xưởng sản xuất hỗ trợ tùy biến hoàn thiện gỗ, đá, kim loại và vải.",
              "Quy trình tư vấn minh bạch, tập trung vào cảm nhận sử dụng lâu dài.",
              "Không theo đuổi xu hướng ngắn hạn; ưu tiên giá trị bền vững theo thời gian.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-black/8 bg-white/72 p-5 text-sm leading-7 text-[var(--color-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[34rem] overflow-hidden rounded-[2.4rem]">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
            alt="Studio nội thất cao cấp"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <StatsSection stats={stats} />

      <section className="section-shell grid gap-10 pb-24 pt-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6 rounded-[2.2rem] border border-black/8 bg-[var(--color-panel)] p-8">
          <SectionHeading
            eyebrow="Triết lý"
            title="Sự sang trọng không nằm ở số lượng chi tiết, mà ở cách mọi thứ được tiết chế đúng mức."
            description="Từng đường line, khoảng thở, nguồn sáng và cách chạm tay vào vật liệu đều được đặt trong một hệ cân bằng. Đó là thứ tạo nên cảm giác đắt giá nhưng không phô trương."
            align="left"
          />
        </div>
        <div className="space-y-6 rounded-[2.2rem] border border-black/8 bg-white/78 p-8">
          <SectionHeading
            eyebrow="Cam kết"
            title="Một đội ngũ đồng hành từ concept đầu tiên đến ngày bàn giao."
            description="Khách hàng không chỉ nhận một bộ hồ sơ đẹp, mà nhận một trải nghiệm làm việc được thiết kế kỹ lưỡng, phản hồi nhanh, và luôn bám sát chất lượng thi công thực tế."
            align="left"
          />
        </div>
      </section>
    </>
  );
}
